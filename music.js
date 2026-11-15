/* Generic path music + narration. Packs load on demand (music-<id>.js).
   Audio never starts with sound before a user gesture. */
(function () {
  const ON_KEY = 'masilano.musicOn.v1';
  const VOL_KEY = 'masilano.musicVol.v1';
  const DEFAULT_VOL = 0.4;
  const DUCK = 0.28;
  const FADE_MS = 1000;
  const FADE_FAST = 280;

  const KNOWN = { vangogh: true };

  const packs = {};
  const packProm = {};
  let audio = null;
  let usingFallback = false;
  let currentFile = null;
  let currentPath = null;
  let currentStation = null;
  let fadeId = 0;
  let ducked = false;
  let enabled = loadOn();
  let volume = loadVol();
  let gesture = false;
  let hiddenPaused = false;
  let pathActive = false;
  let io = null;
  let ioLockUntil = 0;
  let speakToken = 0;
  let speaking = false;
  let speakTarget = null;
  let bound = false;

  function loadOn() {
    try { return localStorage.getItem(ON_KEY) === 'on'; } catch (e) { return false; }
  }
  function loadVol() {
    try {
      const v = parseFloat(localStorage.getItem(VOL_KEY));
      return isFinite(v) ? Math.min(1, Math.max(0, v)) : DEFAULT_VOL;
    } catch (e) { return DEFAULT_VOL; }
  }
  function saveOn() {
    try { localStorage.setItem(ON_KEY, enabled ? 'on' : 'off'); } catch (e) {}
  }
  function saveVol() {
    try { localStorage.setItem(VOL_KEY, String(volume)); } catch (e) {}
  }

  function t(k) {
    return (window.I18N && window.I18N.t) ? window.I18N.t(k) : k;
  }
  function locField(obj, lang) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    lang = lang || (window.I18N && window.I18N.lang) || 'de';
    return obj[lang] || obj.de || obj.en || '';
  }
  function fadeMs() {
    try {
      if (window.__dbg && window.__dbg.reduceMotion && window.__dbg.reduceMotion()) return FADE_FAST;
    } catch (e) {}
    return FADE_MS;
  }
  function targetGain() {
    return Math.max(0, Math.min(1, volume * (ducked ? DUCK : 1)));
  }

  function markGesture() {
    if (gesture) return;
    gesture = true;
    if (enabled && pathActive && currentFile) ensurePlaying();
  }

  function packName(path) {
    if (!path) return null;
    if (path.musicPack) return path.musicPack;
    if (KNOWN[path.id] || packs[path.id]) return path.id;
    return null;
  }

  function register(name, pack) {
    if (name && pack) packs[name] = pack;
  }

  function ensurePack(path) {
    const name = packName(path);
    if (!name) return Promise.resolve(null);
    if (window.MUSIC_PACKS && window.MUSIC_PACKS[name]) packs[name] = window.MUSIC_PACKS[name];
    if (packs[name]) return Promise.resolve(packs[name]);
    if (packProm[name]) return packProm[name];
    const I = window.I18N;
    const load = I && I.loadScriptOnce ? I.loadScriptOnce('music-' + name + '.js')
      : new Promise(function (resolve, reject) {
        const s = document.createElement('script');
        s.src = 'music-' + name + '.js';
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    packProm[name] = load.then(function () {
      const p = window.MUSIC_PACKS && window.MUSIC_PACKS[name];
      if (p) packs[name] = p;
      return p || null;
    }).catch(function () {
      delete packProm[name];
      return null;
    });
    return packProm[name];
  }

  function packOf(path) {
    const name = packName(path);
    return (name && packs[name]) || (name && window.MUSIC_PACKS && window.MUSIC_PACKS[name]) || null;
  }

  function trackFor(path, stationId) {
    const pack = packOf(path);
    if (!pack) return null;
    const tid = stationId && pack.stations && pack.stations[stationId];
    return (tid && pack.tracks && pack.tracks[tid]) || null;
  }

  function canOpus(el) {
    try {
      const a = el || document.createElement('audio');
      return !!(a.canPlayType && (a.canPlayType('audio/ogg; codecs=opus') || a.canPlayType('audio/opus')));
    } catch (e) { return false; }
  }
  function srcFor(file, fallback) {
    return 'music/' + file + (fallback ? '.m4a' : (canOpus(audio) ? '.opus' : '.m4a'));
  }

  function getAudio() {
    if (audio) return audio;
    audio = new Audio();
    audio.preload = 'none';
    audio.setAttribute('playsinline', '');
    audio.setAttribute('aria-hidden', 'true');
    audio.addEventListener('ended', function () {
      if (!enabled || !pathActive || !currentFile) return;
      try {
        audio.currentTime = 0;
        audio.volume = 0;
        const p = audio.play();
        if (p && p.catch) p.catch(function () {});
        fadeTo(targetGain(), fadeMs());
      } catch (e) {}
    });
    audio.addEventListener('error', function () {
      if (!usingFallback && currentFile) {
        usingFallback = true;
        audio.src = srcFor(currentFile, true);
        audio.load();
        if (enabled && gesture && pathActive) {
          const p = audio.play();
          if (p && p.catch) p.catch(function () {});
        }
      }
    });
    return audio;
  }

  function fadeTo(target, ms, then) {
    const a = audio;
    const id = ++fadeId;
    if (!a) { if (then) then(); return; }
    const start = a.volume;
    const t0 = (typeof performance !== 'undefined') ? performance.now() : Date.now();
    if (!ms || Math.abs(start - target) < 0.01) {
      a.volume = Math.max(0, Math.min(1, target));
      if (then) then();
      return;
    }
    function step(now) {
      if (id !== fadeId) return;
      const k = Math.min(1, (now - t0) / ms);
      a.volume = start + (target - start) * k;
      if (k < 1) requestAnimationFrame(step);
      else { a.volume = target; if (then) then(); }
    }
    requestAnimationFrame(step);
  }

  function stopAudio(ms) {
    if (!audio) return;
    fadeTo(0, ms == null ? fadeMs() : ms, function () {
      try { audio.pause(); } catch (e) {}
    });
  }

  function ensurePlaying() {
    if (!enabled || !gesture || !pathActive || !currentFile) return;
    const a = getAudio();
    const want = srcFor(currentFile, usingFallback);
    const same = a.src && a.src.indexOf(currentFile + '.') !== -1;
    if (!same) {
      usingFallback = false;
      a.volume = 0;
      a.src = srcFor(currentFile, false);
      a.load();
    }
    const p = a.play();
    if (p && p.catch) p.catch(function () { /* wait for a later gesture */ });
    fadeTo(targetGain(), fadeMs());
  }

  function switchFile(file) {
    if (file === currentFile && audio && !audio.paused) {
      fadeTo(targetGain(), 200);
      return;
    }
    const change = file !== currentFile;
    currentFile = file;
    usingFallback = false;
    if (!enabled || !gesture || !pathActive || !file) {
      if (audio && !audio.paused) stopAudio();
      return;
    }
    const a = getAudio();
    if (change && a.src && !a.paused) {
      fadeTo(0, fadeMs(), function () {
        try { a.pause(); } catch (e) {}
        a.volume = 0;
        a.src = srcFor(file, false);
        a.load();
        ensurePlaying();
      });
    } else {
      ensurePlaying();
    }
  }

  function setEnabled(on) {
    enabled = !!on;
    saveOn();
    if (enabled) {
      gesture = true;
      if (pathActive && currentFile) ensurePlaying();
    } else {
      stopAudio();
    }
    syncUi();
  }

  function setVolume(v) {
    volume = Math.max(0, Math.min(1, +v));
    saveVol();
    if (audio && !audio.paused) fadeTo(targetGain(), 80);
    syncUi();
  }

  function duck(on) {
    ducked = !!on;
    if (audio && !audio.paused) fadeTo(targetGain(), 220);
  }

  function setStation(path, stationId, opts) {
    if (!(opts && opts.fromObserver)) ioLockUntil = Date.now() + 1600;
    if (path) currentPath = path;
    if (stationId) currentStation = stationId;
    const tr = trackFor(currentPath, currentStation);
    renderBar(tr);
    if (tr && pathActive) switchFile(tr.file);
    else if (!tr && audio) stopAudio();
    if (!opts || !opts.silentButtons) refreshButtons();
  }

  function firstStationId(path) {
    if (!path || !path.stations || !path.stations.length) return null;
    return path.stations[0].id;
  }

  function attachPath(path, stationId) {
    if (!path) return Promise.resolve(null);
    currentPath = path;
    pathActive = !!packName(path);
    if (!pathActive) {
      hideBar();
      stopAudio();
      return Promise.resolve(null);
    }
    showBarPending();
    return ensurePack(path).then(function (pack) {
      if (currentPath !== path) return pack;
      if (!pack) { pathActive = false; hideBar(); return pack; }
      pathActive = true;
      const sid = stationId || currentStation || firstStationId(path);
      setStation(path, sid);
      observeStations();
      return pack;
    });
  }

  function leavePath() {
    pathActive = false;
    disconnectIo();
    hideBar();
    stopSpeak();
    stopAudio();
  }

  function observeStations() {
    disconnectIo();
    const root = document.querySelector('#path .chscroll');
    const nodes = document.querySelectorAll('#pathList .pstat');
    if (!root || !nodes.length || !window.IntersectionObserver) return;
    io = new IntersectionObserver(function (entries) {
      let best = null, br = 0;
      entries.forEach(function (en) {
        if (en.isIntersecting && en.intersectionRatio >= br) {
          br = en.intersectionRatio;
          best = en.target;
        }
      });
      if (!best || br < 0.28) return;
      if (Date.now() < ioLockUntil) return;
      const id = best.getAttribute('data-station');
      if (id && id !== currentStation) setStation(currentPath, id, { fromObserver: true });
    }, { root: root, threshold: [0.28, 0.45, 0.6, 0.8] });
    nodes.forEach(function (n) { io.observe(n); });
  }
  function disconnectIo() {
    if (io) { try { io.disconnect(); } catch (e) {} io = null; }
  }

  function showBarPending() {
    const bar = document.getElementById('xpBar');
    if (!bar) return;
    bar.classList.remove('hidden');
    bar.hidden = false;
  }
  function hideBar() {
    const bar = document.getElementById('xpBar');
    if (!bar) return;
    bar.classList.add('hidden');
    bar.hidden = true;
  }

  function renderBar(tr) {
    const bar = document.getElementById('xpBar');
    if (!bar) return;
    if (!packName(currentPath)) { hideBar(); return; }
    bar.classList.remove('hidden');
    bar.hidden = false;
    const kind = document.getElementById('musicKind');
    const title = document.getElementById('musicTitle');
    const note = document.getElementById('musicNote');
    const credit = document.getElementById('musicCredit');
    if (!tr) {
      if (kind) kind.textContent = '';
      if (title) title.textContent = '';
      if (note) note.textContent = '';
      if (credit) credit.textContent = '';
      return;
    }
    if (kind) kind.textContent = tr.kind === 'documented' ? t('musicKindDocumented') : t('musicKindPeriod');
    if (title) title.textContent = locField(tr.title);
    if (note) note.textContent = locField(tr.note);
    if (credit) credit.textContent = locField(tr.credit);
    syncUi();
  }

  function setSwitch(el, on, onLabel, offLabel) {
    if (!el) return;
    el.setAttribute('aria-checked', on ? 'true' : 'false');
    const lab = on ? (onLabel || t('musicOn')) : (offLabel || t('musicOff'));
    el.setAttribute('aria-label', t('musicToggleAria'));
    const tx = el.querySelector('.swlabel');
    if (tx) tx.textContent = lab;
  }

  function syncUi() {
    setSwitch(document.getElementById('musicToggle'), enabled);
    setSwitch(document.getElementById('setMusicToggle'), enabled);
    const v1 = document.getElementById('musicVol');
    const v2 = document.getElementById('setMusicVol');
    const pct = Math.round(volume * 100);
    if (v1 && document.activeElement !== v1) v1.value = String(pct);
    if (v2 && document.activeElement !== v2) v2.value = String(pct);
    refreshButtons();
  }

  function canSpeak() {
    try { return !!(window.speechSynthesis && window.SpeechSynthesisUtterance); }
    catch (e) { return false; }
  }

  function pickVoice(lang) {
    let voices = [];
    try { voices = window.speechSynthesis.getVoices() || []; } catch (e) { return null; }
    const tags = ({
      de: ['de-CH', 'de-DE', 'de-AT', 'de'],
      en: ['en-GB', 'en-US', 'en-AU', 'en'],
      es: ['es-ES', 'es-MX', 'es-AR', 'es'],
      fr: ['fr-FR', 'fr-CH', 'fr-BE', 'fr'],
      it: ['it-IT', 'it-CH', 'it']
    })[lang] || [lang];
    let best = null, bestS = -1;
    voices.forEach(function (v) {
      const vl = String(v.lang || '').toLowerCase();
      let s = 0;
      tags.forEach(function (tag, i) {
        const t0 = tag.toLowerCase();
        if (vl === t0 || vl.indexOf(t0 + '-') === 0 || vl.indexOf(t0) === 0) s = Math.max(s, 80 - i * 8);
      });
      if (!s) return;
      if (v.localService) s += 25;
      if (v.default) s += 4;
      const n = String(v.name || '').toLowerCase();
      if (/compact|novelty|whisper|zarvox|bad news|good news|bells|boing|cellos|organ|trinoids|princess|albert|reed/.test(n)) s -= 60;
      if (s > bestS) { bestS = s; best = v; }
    });
    return best;
  }

  function stopSpeak() {
    speakToken++;
    speaking = false;
    speakTarget = null;
    ducked = false;
    try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {}
    if (audio && !audio.paused) fadeTo(targetGain(), 220);
    refreshButtons();
  }

  function speakTexts(texts, target) {
    if (!canSpeak()) return;
    if (speaking && speakTarget === target) { stopSpeak(); return; }
    stopSpeak();
    const parts = (texts || []).map(function (s) { return String(s || '').replace(/\s+/g, ' ').trim(); }).filter(Boolean);
    if (!parts.length) return;
    const lang = (window.I18N && window.I18N.lang) || 'de';
    const tag = ({ de: 'de-DE', en: 'en-GB', es: 'es-ES', fr: 'fr-FR', it: 'it-IT' })[lang] || lang;
    const token = ++speakToken;
    speaking = true;
    speakTarget = target;
    duck(true);
    refreshButtons();
    try { window.speechSynthesis.getVoices(); } catch (e) {}
    let i = 0;
    function next() {
      if (token !== speakToken) return;
      if (i >= parts.length) {
        speaking = false;
        speakTarget = null;
        duck(false);
        refreshButtons();
        return;
      }
      const u = new SpeechSynthesisUtterance(parts[i++]);
      u.lang = tag;
      u.rate = 0.9;
      u.pitch = 1;
      u.volume = 1;
      const voice = pickVoice(lang);
      if (voice) u.voice = voice;
      u.onend = next;
      u.onerror = function () { next(); };
      try { window.speechSynthesis.speak(u); }
      catch (e) { speaking = false; speakTarget = null; duck(false); refreshButtons(); }
    }
    next();
  }

  function stationTexts(path, st) {
    const I = window.I18N;
    const loc = I && I.locStation ? I.locStation(st) : { place: st.place, when: st.when, intro: st.intro || [] };
    const parts = [];
    const head = [loc.place, loc.when].filter(Boolean).join(', ');
    if (head) parts.push(head);
    (loc.intro || []).forEach(function (p) { if (p) parts.push(p); });
    return parts;
  }

  function speakStation(path, st) {
    if (!st) return;
    speakTexts(stationTexts(path, st), 'station:' + st.id);
  }

  function chapterTexts() {
    const parts = [];
    document.querySelectorAll('#cText p').forEach(function (p) {
      const tx = p.textContent.trim();
      if (tx) parts.push(tx);
    });
    const q = document.getElementById('cQuote');
    if (q && !q.classList.contains('hidden')) {
      const qt = ((document.getElementById('cQuoteT') || {}).textContent || '').trim();
      const qc = ((document.getElementById('cQuoteC') || {}).textContent || '').trim();
      if (qt) parts.push(qc ? qt + ' ' + qc : qt);
    }
    return parts;
  }

  function speakChapter() {
    speakTexts(chapterTexts(), 'chapter');
  }

  function refreshButtons() {
    const on = canSpeak();
    document.querySelectorAll('.narrate-btn, #cNarrate').forEach(function (btn) {
      if (!on) {
        btn.classList.add('hidden');
        btn.hidden = true;
        return;
      }
      btn.classList.remove('hidden');
      btn.hidden = false;
      const key = btn.getAttribute('data-speak') || (btn.id === 'cNarrate' ? 'chapter' : '');
      const active = speaking && key && key === speakTarget;
      btn.textContent = active ? t('narrateStop') : t('narrate');
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    const row = document.getElementById('cNarrateRow');
    if (row) {
      if (on) { row.classList.remove('hidden'); row.hidden = false; }
      else { row.classList.add('hidden'); row.hidden = true; }
    }
  }

  function bind() {
    if (bound) { syncUi(); refreshButtons(); return; }
    bound = true;
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
      document.addEventListener(ev, markGesture, { capture: true, passive: true });
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        stopSpeak();
        if (audio && !audio.paused) {
          hiddenPaused = true;
          stopAudio(400);
        }
      } else if (hiddenPaused) {
        hiddenPaused = false;
        if (enabled && pathActive && currentFile) ensurePlaying();
      }
    });
    function toggleClick() { setEnabled(!enabled); }
    const mt = document.getElementById('musicToggle');
    const st = document.getElementById('setMusicToggle');
    if (mt) mt.addEventListener('click', toggleClick);
    if (st) st.addEventListener('click', toggleClick);
    function volInput(e) { setVolume((+e.target.value) / 100); }
    const v1 = document.getElementById('musicVol');
    const v2 = document.getElementById('setMusicVol');
    if (v1) {
      v1.addEventListener('input', volInput);
      v1.addEventListener('change', volInput);
    }
    if (v2) {
      v2.addEventListener('input', volInput);
      v2.addEventListener('change', volInput);
    }
    const cn = document.getElementById('cNarrate');
    if (cn) cn.addEventListener('click', speakChapter);
    if (window.speechSynthesis) {
      try { window.speechSynthesis.getVoices(); } catch (e) {}
      window.speechSynthesis.addEventListener('voiceschanged', refreshButtons);
    }
    refreshButtons();
    syncUi();
  }

  function refresh() {
    if (pathActive && currentPath) renderBar(trackFor(currentPath, currentStation));
    syncUi();
    refreshButtons();
  }

  window.MASILANO_MUSIC = {
    ensurePack: ensurePack,
    attachPath: attachPath,
    leavePath: leavePath,
    setStation: setStation,
    setEnabled: setEnabled,
    setVolume: setVolume,
    enabled: function () { return enabled; },
    volume: function () { return volume; },
    currentFile: function () { return currentFile; },
    currentStation: function () { return currentStation; },
    currentPathId: function () { return currentPath && currentPath.id; },
    speaking: function () { return speaking; },
    speakTarget: function () { return speakTarget; },
    canSpeak: canSpeak,
    speakStation: speakStation,
    speakChapter: speakChapter,
    stopSpeak: stopSpeak,
    bind: bind,
    refresh: refresh,
    syncUi: syncUi,
    trackFor: trackFor,
    packOf: packOf,
    packName: packName,
    register: register,
    get audio() { return audio; },
    ON_KEY: ON_KEY,
    VOL_KEY: VOL_KEY
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();
