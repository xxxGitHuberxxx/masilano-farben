/* Generic path music. Packs load on demand (music-<id>.js).
   Audio never starts with sound before a user gesture. */
(function () {
  const ON_KEY = 'masilano.musicOn.v1';
  const VOL_KEY = 'masilano.musicVol.v1';
  const DEFAULT_VOL = 0.4;
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
  let enabled = loadOn();
  let volume = loadVol();
  let gesture = false;
  let hiddenPaused = false;
  let pathActive = false;
  let io = null;
  let ioLockUntil = 0;
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
    return Math.max(0, Math.min(1, volume));
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

  // v10.42: HTMLMediaElement.volume throws outside 0..1; keep every computed value in range.
  function clampVol(v) { v = +v; return isFinite(v) ? Math.max(0, Math.min(1, v)) : 0; }

  function fadeTo(target, ms, then) {
    const a = audio;
    const id = ++fadeId;
    if (!a) { if (then) then(); return; }
    const start = a.volume;
    const t0 = (typeof performance !== 'undefined') ? performance.now() : Date.now();
    if (!ms || Math.abs(start - target) < 0.01) {
      a.volume = clampVol(target);
      if (then) then();
      return;
    }
    function step(now) {
      if (id !== fadeId) return;
      // rAF timestamps can be slightly earlier than t0, so k is clamped to 0..1.
      const k = Math.max(0, Math.min(1, (now - t0) / ms));
      a.volume = clampVol(start + (target - start) * k);
      if (k < 1) requestAnimationFrame(step);
      else { a.volume = clampVol(target); if (then) then(); }
    }
    requestAnimationFrame(step);
  }

  function stopAudio(ms) {
    if (!audio) return;
    fadeTo(0, ms == null ? fadeMs() : ms, function () {
      try { audio.pause(); } catch (e) {}
    });
  }


  function noteVgDelight() {
    const vg = (currentPath && currentPath.id === 'vangogh')
      || (function () { try { const p = window.__dbg && window.__dbg.pathCtx && window.__dbg.pathCtx.path; return p && p.id === 'vangogh'; } catch (e) { return false; } })();
    if (!vg) return;
    try {
      const o = JSON.parse(localStorage.getItem('masilano.delight.v1') || 'null') || {};
      if (!o.vgMusic) {
        const d = new Date();
        const at = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        o.vgMusic = 1; o.at = at;
        localStorage.setItem('masilano.delight.v1', JSON.stringify(o));
      }
    } catch (e) {}
    if (window.MASILANO_ACHIEVEMENTS && typeof window.MASILANO_ACHIEVEMENTS.onDelight === 'function') {
      window.MASILANO_ACHIEVEMENTS.onDelight('vgMusic');
    }
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
    noteVgDelight();
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

  function setStation(path, stationId, opts) {
    if (!(opts && opts.fromObserver)) ioLockUntil = Date.now() + 1600;
    if (path) currentPath = path;
    if (stationId) currentStation = stationId;
    const tr = trackFor(currentPath, currentStation);
    renderBar(tr);
    if (tr && pathActive) switchFile(tr.file);
    else if (!tr && audio) stopAudio();
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
  }

  function bind() {
    if (bound) { syncUi(); return; }
    bound = true;
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
      document.addEventListener(ev, markGesture, { capture: true, passive: true });
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
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
    syncUi();
  }

  function refresh() {
    if (pathActive && currentPath) renderBar(trackFor(currentPath, currentStation));
    syncUi();
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
