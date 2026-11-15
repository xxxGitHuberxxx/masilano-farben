(() => {
'use strict';
const $ = s => document.querySelector(s);
const esc = s => String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY = id => 'masilano.color.v1.' + id;
const P = window.PAINTINGS;
const STORIES = window.STORIES || [];
const PATHS = (window.PATHS = window.PATHS || []);
const knownIds = new Set(P.map(p => p.id).concat((window.STORY_WORKS || []).map(w => w.id)));
const ALL = P.concat((window.STORY_WORKS || []).filter(w => !P.some(p => p.id === w.id)))
  .concat((window.PATH_WORKS || []).filter(w => !knownIds.has(w.id)));
const byId = id => ALL.find(p => p.id === id);
function ingestPathData(){
  const src = window.PATHS || [];
  if (src !== PATHS) {
    PATHS.length = 0;
    src.forEach(p => PATHS.push(p));
    window.PATHS = PATHS;
  }
  (window.PATH_WORKS || []).forEach(w => {
    if (!w || !w.id || ALL.some(p => p.id === w.id)) return;
    knownIds.add(w.id);
    ALL.push(w);
  });
}
const PLAYER_NAME_KEY = 'masilano.playerName.v1';
const CERT_DATE_KEY = id => 'masilano.certDate.v1.' + id;
let albumViewId = null;
let certCtx = null;
const I = window.I18N;
const t = (k, v) => I.t(k, v);
const L = (obj, field) => I.loc(obj, field);
function paintBtn(done, pct){ return done ? t('paintView') : (pct > 0 ? t('paintContinue') : t('paint')); }
function youArePainting(done, title, artist, year){
  return `<div>${done ? t('already') : t('youPaint')}: <b>${title}</b><br>${artist}, ${year}</div>`;
}
const SKEY = id => 'masilano.story.v1.' + id;
const PKEY = id => 'masilano.path.v1.' + id;
const cache = {};

// ---------- storage ----------
function loadSave(id){ try{ return JSON.parse(localStorage.getItem(KEY(id))) || null; }catch(e){ return null; } }
function writeSave(id, obj){ try{ localStorage.setItem(KEY(id), JSON.stringify(obj)); }catch(e){} }

// ---------- gallery ----------
const SORT_KEY = 'masilano.galSort.v5';
const LAST_KEY = 'masilano.last.v1';
const ONBOARD_KEY = 'masilano.onboard.v1';
const INSTALL_KEY = 'masilano.installHint.v1';
const CALM_KEY = 'masilano.calm.v1';
const STREAK_KEY = 'masilano.streak.v1';
const MILES_KEY = 'masilano.miles.v1';
const TAB_KEY = 'masilano.tab.v1';
const FILTER_KEY = 'masilano.galFilter.v1';
const ACTIVE_PATH_KEY = 'masilano.activePath.v1';
let todayOverride = null;
function calmOn(){ try { return localStorage.getItem(CALM_KEY) === 'on'; } catch (e) { return false; } }
function applyCalm(){
  document.body.classList.toggle('calm', calmOn());
  const sw = $('#calmToggle');
  if (sw) sw.setAttribute('aria-checked', calmOn() ? 'true' : 'false');
}
function setCalm(on){
  try { localStorage.setItem(CALM_KEY, on ? 'on' : 'off'); } catch (e) {}
  applyCalm();
}
function reduceMotion(){ return calmOn() || !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }
function isStandalone(){
  return (window.matchMedia && (window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: fullscreen)').matches))
    || window.navigator.standalone === true;
}
function smoothScroll(el, opts){
  const o = Object.assign({}, opts || {});
  if (reduceMotion()) o.behavior = 'auto';
  el.scrollTo(o);
}
function smoothIntoView(el, opts){
  if (!el) return;
  const o = Object.assign({ inline: 'center', block: 'nearest' }, opts || {});
  if (reduceMotion()) o.behavior = 'auto';
  else if (!o.behavior) o.behavior = 'smooth';
  el.scrollIntoView(o);
}
const LEVEL_RANK = {leicht:0, mittel:1, schwer:2};
function regionsOf(p){
  if (p && typeof p.regions === 'number') return p.regions;
  const lv = window.LEVELS || {};
  return (p && lv[p.id]) || 999;
}
function levelOf(p){
  const r = regionsOf(p);
  return r < 220 ? 'leicht' : r < 400 ? 'mittel' : 'schwer';
}
function levelLabel(lv){ return lv === 'leicht' ? t('easy') : lv === 'mittel' ? t('medium') : t('hard'); }
let galSort = 'gallery';
try { const s = localStorage.getItem(SORT_KEY); if (s === 'easy' || s === 'gallery') galSort = s; } catch(e){}
let galFilter = { artist: '', level: '', open: false };
try {
  const f = JSON.parse(localStorage.getItem(FILTER_KEY) || 'null');
  if (f && typeof f === 'object') {
    if (typeof f.artist === 'string') galFilter.artist = f.artist;
    if (f.level === 'leicht' || f.level === 'mittel' || f.level === 'schwer' || f.level === '') galFilter.level = f.level || '';
    galFilter.open = !!f.open;
  }
} catch (e) {}
function saveFilter(){ try { localStorage.setItem(FILTER_KEY, JSON.stringify(galFilter)); } catch(e){} }
function fold(s){
  return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
function enField(obj, field){
  if (!obj) return '';
  const EN = window.EN || {};
  if (obj.id && EN.works && EN.works[obj.id] && EN.works[obj.id][field] != null) return EN.works[obj.id][field];
  if (field === 'museum' && EN.museums && obj.museum && EN.museums[obj.museum]) return EN.museums[obj.museum];
  if (field === 'artist' && EN.artists && obj.artist && EN.artists[obj.artist]) return EN.artists[obj.artist];
  if (obj.id && EN.paths && EN.paths[obj.id] && EN.paths[obj.id][field] != null) return EN.paths[obj.id][field];
  if (obj.id && EN.stories && EN.stories[obj.id] && EN.stories[obj.id][field] != null) return EN.stories[obj.id][field];
  return '';
}
function matchesQuery(p, q, extra){
  if (!q) return true;
  const hay = fold([
    p.title, L(p,'title'), enField(p,'title'),
    p.artist, L(p,'artist'), enField(p,'artist'), p.year,
    p.museum, L(p,'museum'), enField(p,'museum'), extra
  ].filter(Boolean).join(' '));
  return q.split(/\s+/).every(tok => tok && hay.includes(tok));
}
let galQuery = '';
function galleryList(){
  const q = fold(galQuery);
  let arr = P.filter(p => matchesQuery(p, q));
  if (calmOn() || galFilter.level === 'leicht') arr = arr.filter(p => levelOf(p) === 'leicht');
  else if (galFilter.level === 'mittel') arr = arr.filter(p => levelOf(p) === 'mittel');
  else if (galFilter.level === 'schwer') arr = arr.filter(p => levelOf(p) === 'schwer');
  if (galFilter.artist) arr = arr.filter(p => p.artist === galFilter.artist);
  if (galFilter.open) arr = arr.filter(p => !isDone(p.id));
  if (galSort === 'easy') {
    arr.sort((a,b) => (LEVEL_RANK[levelOf(a)] - LEVEL_RANK[levelOf(b)]) || ((a.regions || 999) - (b.regions || 999)) || L(a,'title').localeCompare(L(b,'title'), I.lang === 'de' ? 'de-CH' : 'en'));
  }
  return arr;
}
function storySearchHits(){
  const q = fold(galQuery);
  if (!q) return [];
  const galIds = new Set(P.map(p => p.id));
  const hits = [];
  for (const st of STORIES) {
    for (const ch of st.chapters) {
      if (galIds.has(ch.pid)) continue;
      const p = byId(ch.pid);
      const chL = I.locChapter(st, ch);
      if (p && matchesQuery(p, q, st.name + ' ' + ch.title + ' ' + chL.title + ' ' + ch.place + ' ' + chL.place)) hits.push({ p, st, ch });
    }
  }
  return hits;
}
function pathSearchHits(){
  const q = fold(galQuery);
  if (!q) return [];
  const galIds = new Set(P.map(p => p.id));
  const hits = [];
  for (const path of PATHS) {
    for (const step of pathSteps(path)) {
      if (galIds.has(step.pid)) continue;
      const p = byId(step.pid);
      const stL = I.locStation(step.st);
      if (p && matchesQuery(p, q, path.title + ' ' + L(path,'title') + ' ' + path.name + ' ' + step.st.place + ' ' + stL.place + ' ' + step.st.when + ' ' + stL.when)) hits.push({ p, path, step });
    }
  }
  return hits;
}
function openPathHit(path, p){
  pathCtx = { path };
  showPath(path);
  const step = pathSteps(path).find(s => s.pid === p.id);
  if (step) showPathWork(path, step);
}
function openStoryHit(st, p){
  storyCtx = { story: st };
  showChapters(st);
  const i = st.chapters.findIndex(c => c.pid === p.id);
  if (i < 0) return;
  if (chUnlocked(st, i)) showChapter(st, i);
  else ctoast(t('lockedStory', { name: st.name }));
}

function painterOptions(){
  const set = new Map();
  P.forEach(p => { if (p.artist && !set.has(p.artist)) set.set(p.artist, artistLabel(p.artist)); });
  return [...set.entries()].sort((a,b) => a[1].localeCompare(b[1], I.lang === 'de' ? 'de-CH' : 'en'));
}
function renderFilters(){
  const sel = $('#galPainter');
  if (sel) {
    const cur = galFilter.artist;
    sel.innerHTML = ['<option value="">' + t('filterAllPainters') + '</option>']
      .concat(painterOptions().map(([id, label]) => `<option value="${esc(id)}"${id === cur ? ' selected' : ''}>${esc(label)}</option>`)).join('');
    sel.value = cur;
  }
  const bar = $('#levelBar');
  if (bar) {
    const calm = calmOn();
    [...bar.querySelectorAll('button[data-level]')].forEach(b => {
      const lv = b.getAttribute('data-level');
      if (lv === 'mittel' || lv === 'schwer') b.hidden = calm;
      const on = galFilter.level === lv;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }
  const op = $('#galOpen');
  if (op) {
    op.classList.toggle('on', !!galFilter.open);
    op.setAttribute('aria-pressed', galFilter.open ? 'true' : 'false');
  }
  updateFilterBadge();
}
function activeFilterCount(){
  let n = 0;
  if (galSort === 'easy') n++;
  if (galFilter.artist) n++;
  if (galFilter.level) n++;
  if (galFilter.open) n++;
  return n;
}
function updateFilterBadge(){
  const badge = $('#filterBadge');
  const n = activeFilterCount();
  if (badge) {
    badge.textContent = String(n);
    badge.classList.toggle('hidden', n === 0);
    if (n) badge.setAttribute('aria-label', t('filterBadgeAria', { n }));
    else badge.removeAttribute('aria-label');
  }
  const btn = $('#filterBtn');
  const sh = $('#filterSheet');
  if (btn) btn.setAttribute('aria-expanded', !!(sh && !sh.classList.contains('hidden')) ? 'true' : 'false');
}
function filtersCompact(){
  return window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
}
function placeFilterPanel(){
  const panel = $('#filterPanel'); if (!panel) return;
  const compact = filtersCompact();
  const dest = compact ? $('#filterHost') : $('#filterInline');
  if (dest && panel.parentElement !== dest) dest.appendChild(panel);
  const btn = $('#filterBtn');
  if (btn) btn.hidden = !compact;
  const sh = $('#filterSheet');
  if (!compact && sh && !sh.classList.contains('hidden')) {
    sh.classList.add('hidden');
    btn && btn.setAttribute('aria-expanded', 'false');
  }
}
function openFilterSheet(){
  if (!filtersCompact()) return;
  placeFilterPanel();
  revealSheet('#filterSheet');
  updateFilterBadge();
}
function bindFilters(){
  const sel = $('#galPainter');
  if (sel && !sel.dataset.bound) {
    sel.dataset.bound = '1';
    sel.addEventListener('change', () => {
      galFilter.artist = sel.value || '';
      saveFilter();
      galPage = 0; try { sessionStorage.setItem('masilano.galPage', '0'); } catch(e){}
      galGrid = null;
      renderGallery();
    });
  }
  const bar = $('#levelBar');
  if (bar && !bar.dataset.bound) {
    bar.dataset.bound = '1';
    bar.addEventListener('click', e => {
      const b = e.target.closest('button[data-level]'); if (!b) return;
      galFilter.level = b.getAttribute('data-level') || '';
      saveFilter();
      galPage = 0; try { sessionStorage.setItem('masilano.galPage', '0'); } catch(e){}
      galGrid = null;
      renderGallery();
    });
  }
  const op = $('#galOpen');
  if (op && !op.dataset.bound) {
    op.dataset.bound = '1';
    op.addEventListener('click', () => {
      galFilter.open = !galFilter.open;
      saveFilter();
      galPage = 0; try { sessionStorage.setItem('masilano.galPage', '0'); } catch(e){}
      galGrid = null;
      renderGallery();
    });
  }
  const fbtn = $('#filterBtn');
  if (fbtn && !fbtn.dataset.bound) {
    fbtn.dataset.bound = '1';
    fbtn.addEventListener('click', () => openFilterSheet());
  }
  const fdone = $('#filterDone');
  if (fdone && !fdone.dataset.bound) {
    fdone.dataset.bound = '1';
    fdone.addEventListener('click', () => closeTopSheet());
  }
  placeFilterPanel();
}
function renderSortBar(){
  const bar = $('#sortBar'); if (!bar) return;
  [...bar.querySelectorAll('button[data-sort]')].forEach(b => {
    const on = b.dataset.sort === galSort;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}
const sortBarEl = $('#sortBar');
if (sortBarEl) sortBarEl.addEventListener('click', e => {
  const b = e.target.closest('button[data-sort]'); if (!b) return;
  galSort = b.dataset.sort;
  try { localStorage.setItem(SORT_KEY, galSort); } catch(e){}
  galPage = 0; try { sessionStorage.setItem('masilano.galPage', '0'); } catch(e){}
  renderGallery();
});
function syncSearchClear(){
  const c = $('#galSearchClear'); if (c) c.classList.toggle('hidden', !String(galQuery).trim());
}
const searchEl = $('#galSearch');
if (searchEl) {
  searchEl.addEventListener('input', () => {
    galQuery = searchEl.value;
    syncSearchClear();
    galPage = 0; try { sessionStorage.setItem('masilano.galPage', '0'); } catch(e){}
    renderGallery();
  });
  searchEl.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); searchEl.blur(); } });
}
const searchClear = $('#galSearchClear');
if (searchClear) searchClear.addEventListener('click', () => {
  galQuery = '';
  if (searchEl) { searchEl.value = ''; searchEl.focus(); }
  syncSearchClear();
  galPage = 0; try { sessionStorage.setItem('masilano.galPage', '0'); } catch(e){}
  renderGallery();
});
let galPage = +(sessionStorage.getItem('masilano.galPage') || 0);
// Geometry is measured only after the header (sort + story banners) is in the layout.
// It is reused across sort toggles so the grid cannot jump when only the order changes.
let galGrid = null, galFitting = false, galItems = [], galPer = 0;
function galProgress(s){
  const started = !!(s && s.filled && s.filled.length);
  const done = !!(s && s.total && s.filled.length >= s.total);
  const pct = s && s.total ? Math.floor(100 * s.filled.length / s.total) : 0;
  return { started, done, pct };
}
function galImHtml(p, s, extra){
  const { started, done, pct } = galProgress(s);
  const cls = done ? '' : (started ? 'doing' : 'todo');
  const file = done ? 'orig.jpg' : 'thumb.jpg';
  const badge = done
    ? `<span class="badge fin">✓ ${t('done')}</span>`
    : (started ? `<span class="badge prog">${Math.max(1, pct)} %</span>` : '');
  const bar = started && !done ? `<div class="imbar"><div style="width:${Math.max(2, pct)}%"></div></div>` : '';
  return `<div class="im ${cls}" style="background-image:url(data/${p.id}-${file})">${extra || ''}${badge}${bar}</div>`;
}
function paintGalCard(item){
  const p = item.p;
  const s = loadSave(p.id);
  const b = document.createElement('button');
  if (item.kind === 'story') {
    b.className = 'pc storyc';
    b.innerHTML = `${galImHtml(p, s, `<div class="tags"><span class="lv story">${t('storyTag')}</span></div>`)}
      <div class="tx"><div class="t">${L(p,'title')}</div><div class="a">${L(p,'artist')}, ${p.year}</div>
      <div class="hint">${t('inStory', { name: item.st.name })}</div></div>`;
    b.onclick = () => openStoryHit(item.st, p);
  } else if (item.kind === 'path') {
    b.className = 'pc storyc';
    b.innerHTML = `${galImHtml(p, s, `<div class="tags"><span class="lv path">${t('pathTag')}</span></div>`)}
      <div class="tx"><div class="t">${L(p,'title')}</div><div class="a">${L(p,'artist')}, ${p.year}</div>
      <div class="hint">${t('inPath', { name: item.path.name })}</div></div>`;
    b.onclick = () => openPathHit(item.path, p);
  } else {
    const lv = levelOf(p);
    const tags = `<div class="tags"><span class="lv ${lv}">${levelLabel(lv)}</span>${p.fresh ? '<span class="lv neu">' + t('neu') + '</span>' : ''}</div>`;
    b.className = 'pc';
    const { started, done, pct } = galProgress(s);
    const txBar = started || done ? `<div class="bar"><div style="width:${done ? 100 : pct}%"></div></div>` : '';
    b.innerHTML = `${galImHtml(p, s, tags)}
      <div class="tx"><div class="t">${L(p,'title')}</div><div class="a">${L(p,'artist')}, ${p.year}</div>
      ${txBar}</div>`;
    b.onclick = () => openPainting(p);
  }
  return b;
}
function fillGalPage(page, pg){
  if (!page || page.dataset.filled) return;
  page.dataset.filled = '1';
  galItems.slice(pg * galPer, pg * galPer + galPer).forEach(item => page.appendChild(paintGalCard(item)));
}
function hydrateGal(center){
  const pages = [...document.querySelectorAll('#pager .page')];
  const a = Math.max(0, (center || 0) - 1), b = Math.min(pages.length - 1, (center || 0) + 1);
  for (let i = a; i <= b; i++) fillGalPage(pages[i], i);
}
function renderGallery(){
  const pager = $('#pager'), dots = $('#dots');
  if (!pager || !dots) return;
  renderSortBar();
  renderFilters();
  if (!pager.clientWidth || !pager.clientHeight) return;
  const list = galleryList();
  const storyHits = storySearchHits();
  const pathHits = pathSearchHits();
  const items = list.map(p => ({ kind:'gal', p })).concat(storyHits.map(h => ({ kind:'story', p:h.p, st:h.st }))).concat(pathHits.map(h => ({ kind:'path', p:h.p, path:h.path, step:h.step })));
  syncSearchClear();
  const gap = 14;
  const boxW = pager.clientWidth, boxH = pager.clientHeight;
  const W = Math.max(0, boxW - 32), H = Math.max(0, boxH - 8);
  const cols = Math.max(2, Math.min(6, Math.round(W / 230)));
  const cw2 = cols ? (W - (cols - 1) * gap) / cols : W;
  const minH = Math.max(188, cw2 * 0.75 + 76);
  const sizeKey = cols + ':' + Math.round(boxW) + 'x' + Math.round(boxH);
  let rows, cardH;
  if (galGrid && galGrid.sizeKey === sizeKey) {
    rows = galGrid.rows; cardH = galGrid.cardH;
  } else {
    rows = Math.max(1, Math.floor((H + gap) / (minH + gap)));
    cardH = Math.min((H - (rows - 1) * gap) / rows, cw2 * 1.3 + 80);
    while (rows > 1 && rows * cardH + (rows - 1) * gap > H) {
      rows--;
      cardH = Math.min((H - (rows - 1) * gap) / rows, cw2 * 1.3 + 80);
    }
    galGrid = { sizeKey, cols, rows, cardH };
  }
  const per = cols * rows, nPages = Math.ceil(items.length / Math.max(1, per));
  pager.innerHTML = ''; dots.innerHTML = '';
  if (!items.length) {
    const empty = document.createElement('div'); empty.className = 'empty';
    empty.innerHTML = `<div class="e1">${t('noHits')}</div><div class="e2">${t('noHitsHint')}</div>`;
    pager.appendChild(empty);
    const ph = document.createElement('button');
    ph.disabled = true; ph.setAttribute('aria-hidden', 'true'); ph.tabIndex = -1;
    ph.style.visibility = 'hidden';
    dots.appendChild(ph);
    return;
  }
  galItems = items; galPer = per;
  for (let pg = 0; pg < nPages; pg++) {
    const page = document.createElement('div'); page.className = 'page';
    page.style.gridTemplateColumns = `repeat(${cols}, 1fr)`; page.style.gridAutoRows = cardH + 'px';
    pager.appendChild(page);
    const d = document.createElement('button'); d.setAttribute('aria-label', t('pageN', { n: pg + 1 }));
    d.onclick = () => { hydrateGal(pg); smoothScroll(pager, { left: pg * pager.clientWidth, behavior: 'smooth' }); };
    dots.appendChild(d);
  }
  galPage = Math.min(galPage, nPages - 1);
  hydrateGal(galPage);
  pager.scrollLeft = galPage * pager.clientWidth;
  markDots();
  if (!galFitting && galGrid && galGrid.rows > 1) {
    const pb = pager.getBoundingClientRect();
    const overflow = [...pager.querySelectorAll('.page[data-filled] .pc')].some(c => c.getBoundingClientRect().bottom > pb.bottom + 1.5);
    if (overflow) {
      galGrid.rows -= 1;
      galGrid.cardH = Math.min((H - (galGrid.rows - 1) * gap) / galGrid.rows, cw2 * 1.3 + 80);
      galFitting = true;
      renderGallery();
      galFitting = false;
    }
  }
}
function markDots(){
  const pager = $('#pager'), n = Math.round(pager.scrollLeft / Math.max(1, pager.clientWidth));
  [...$('#dots').children].forEach((d, i) => d.classList.toggle('on', i === n));
  if (n !== galPage) { galPage = n; try { sessionStorage.setItem('masilano.galPage', n); } catch(e){} }
  hydrateGal(n);
}
$('#pager').addEventListener('scroll', () => requestAnimationFrame(markDots), { passive: true });
$('#srcBtn').onclick = () => {
  $('#srcList').innerHTML = ALL.map(p => `<li><b>${L(p,'title')}</b> (${L(p,'artist')}): ${I.sourceLine(p.source) || ''}. ${t('museumWord')}: ${L(p,'museum')}.</li>`).join('');
  revealSheet('#sources');
};
$('#srcClose').onclick = () => closeTopSheet();

// ---------- data loading ----------
function loadImg(src){ return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; }); }
async function loadPuzzle(p){
  if (cache[p.id]) return cache[p.id];
  const [meta, mapImg] = await Promise.all([fetch(`data/${p.id}.json`).then(r => r.json()), loadImg(`data/${p.id}-map.png`)]);
  const { w, h } = meta;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d', { willReadFrequently: true });
  x.imageSmoothingEnabled = false; x.drawImage(mapImg, 0, 0);
  const d = x.getImageData(0, 0, w, h).data;
  const N = w * h, reg = new Uint16Array(N);
  for (let i = 0, j = 0; i < N; i++, j += 4) reg[i] = d[j] | (d[j + 1] << 8);
  const R = meta.regions.length;
  const rc = new Uint8Array(R); meta.regions.forEach((r, i) => rc[i] = r[0]);
  // edge pixels: store pixel index + neighbouring region
  const eIdx = [], eOther = [];
  for (let y = 0; y < h; y++) for (let x2 = 0; x2 < w; x2++) {
    const i = y * w + x2, r = reg[i]; let o = -1;
    if (x2 + 1 < w && reg[i + 1] !== r) o = reg[i + 1];
    else if (y + 1 < h && reg[i + w] !== r) o = reg[i + w];
    else if (x2 > 0 && reg[i - 1] !== r) o = reg[i - 1];
    else if (y > 0 && reg[i - w] !== r) o = reg[i - w];
    if (o >= 0) { eIdx.push(i); eOther.push(o); }
  }
  const colCount = new Array(meta.palette.length).fill(0);
  rc.forEach(c2 => colCount[c2]++);
  const pz = { meta, w, h, reg, rc, R, eIdx: Uint32Array.from(eIdx), eOther: Uint16Array.from(eOther), colCount };
  cache[p.id] = pz; return pz;
}

// ---------- painting state ----------
const cv = $('#cv'), fx = $('#fx'), ctx = cv.getContext('2d'), fxx = fx.getContext('2d');
const buf = document.createElement('canvas'), bctx = buf.getContext('2d');
let S = null; // current session
let view = { s: 1, tx: 0, ty: 0 }, fitS = 1, dpr = 1, cw = 0, ch = 0;
let imgData = null, px32 = null, palU32 = [], ripples = [], rafOn = false, origImg = null, reveal = 0;

const LINE = u32(150, 150, 158), WHITE = u32(255, 255, 255), HL = u32(196, 200, 208);
function u32(r, g, b){ return (255 << 24 | b << 16 | g << 8 | r) >>> 0; }
function lum(c){ return 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]; }

async function openPainting(p, opts){
  if (!opts || !opts.noRoute) navigate({ kind: 'paint', id: p.id });
  showScreen('paint'); $('#pTitle').textContent = L(p,'title');
  ctx.clearRect(0, 0, cv.width, cv.height);
  const pz = await loadPuzzle(p);
  const save = loadSave(p.id);
  const filled = new Uint8Array(pz.R);
  if (save && save.total === pz.R) save.filled.forEach(i => filled[i] = 1);
  const colLeft = pz.colCount.slice();
  for (let i = 0; i < pz.R; i++) if (filled[i]) colLeft[pz.rc[i]]--;
  S = { p, pz, filled, colLeft, nFilled: filled.reduce((a, b) => a + b, 0), sel: 0, done: false };
  S.sel = Math.max(0, colLeft.findIndex(v => v > 0));
  palU32 = pz.meta.palette.map(c => u32(c[0], c[1], c[2]));
  buf.width = pz.w; buf.height = pz.h;
  imgData = bctx.createImageData(pz.w, pz.h); px32 = new Uint32Array(imgData.data.buffer);
  origImg = null; reveal = 0;
  loadImg(`data/${p.id}-orig.jpg`).then(i => { if (S && S.p === p) origImg = i; });
  buildPalette(); resize(); fitView(); rebuild(); updateProgress();
  if (S.nFilled >= pz.R) { S.done = true; reveal = 1; draw(); clearLastIf(p.id); }
  else rememberLast(p);
}

function rebuild(){
  const { reg, rc, eIdx, eOther } = S.pz, f = S.filled, sel = S.sel, N = reg.length;
  // per-region colour lookup
  const look = new Uint32Array(S.pz.R);
  for (let r = 0; r < S.pz.R; r++) look[r] = f[r] ? palU32[rc[r]] : (rc[r] === sel && !S.done ? HL : WHITE);
  for (let i = 0; i < N; i++) px32[i] = look[reg[i]];
  for (let k = 0; k < eIdx.length; k++) { const i = eIdx[k]; if (!(f[reg[i]] && f[eOther[k]])) px32[i] = LINE; }
  bctx.putImageData(imgData, 0, 0);
  draw();
}

function buildPalette(){
  const pal = $('#palette'); pal.innerHTML = '';
  S.pz.meta.palette.forEach((c, i) => {
    const b = document.createElement('button'); b.className = 'chip'; b.dataset.i = i; b.type = 'button';
    b.setAttribute('aria-label', t('colorAria', { n: i + 1 }));
    b.innerHTML = `<div class="in" style="background:rgb(${c});color:${lum(c) > 150 ? '#2b2722' : '#fff'}"></div>`;
    b.onclick = () => selectColor(i, true);
    pal.appendChild(b);
  });
  updatePalette();
  pal.scrollLeft = 0;
  requestAnimationFrame(() => { const b = pal.children[S.sel]; if (b) pal.scrollLeft = Math.max(0, b.offsetLeft - pal.clientWidth / 2 + b.offsetWidth / 2); });
}
function updatePalette(){
  const chips = $('#palette').children;
  for (const b of chips) {
    const i = +b.dataset.i, left = S.colLeft[i], tot = S.pz.colCount[i];
    b.classList.toggle('sel', i === S.sel); b.classList.toggle('done', left === 0);
    b.setAttribute('aria-pressed', i === S.sel ? 'true' : 'false');
    b.setAttribute('aria-label', left === 0 ? t('colorAriaDone', { n: i + 1 }) : t('colorAria', { n: i + 1 }));
    b.firstChild.textContent = left === 0 ? '✓' : (i + 1);
    const frac = 1 - left / tot;
    b.style.background = `conic-gradient(#c79a4e ${frac * 360}deg, #e6dfd5 0)`;
  }
}
function selectColor(i, scroll){
  if (!S || S.done) return;
  S.sel = i; updatePalette(); rebuild();
  if (scroll) { const b = $('#palette').children[i]; b && smoothIntoView(b); }
  if (S.colLeft[i] === 0) toast(t('colorAlready'));
}
function updateProgress(){ $('#pFill').style.width = (100 * S.nFilled / S.pz.R) + '%'; }

let saveT = 0;
function persist(){
  clearTimeout(saveT);
  saveT = setTimeout(() => {
    const arr = []; S.filled.forEach((v, i) => v && arr.push(i));
    writeSave(S.p.id, { total: S.pz.R, filled: arr });
    if (S.nFilled >= S.pz.R) clearLastIf(S.p.id); else rememberLast(S.p);
  }, 250);
}

function fillRegion(r, sx, sy){
  S.filled[r] = 1; S.nFilled++; S.colLeft[S.pz.rc[r]]--;
  ripples.push({ x: sx, y: sy, t: performance.now(), c: S.pz.meta.palette[S.pz.rc[r]] });
  if (navigator.vibrate && !reduceMotion()) try { navigator.vibrate(8); } catch(e){}
  persist(); updateProgress();
  if (S.colLeft[S.sel] === 0) {
    toast(t('colorFinished', { n: S.sel + 1 }));
    let n = -1; const Lft = S.colLeft.length;
    for (let k = 1; k <= Lft; k++) { const j = (S.sel + k) % Lft; if (S.colLeft[j] > 0) { n = j; break; } }
    if (n >= 0) { S.sel = n; setTimeout(() => { const b = $('#palette').children[n]; b && smoothIntoView(b); }, 50); }
  }
  updatePalette(); rebuild(); kick();
  if (S.nFilled >= S.pz.R) finish();
}

// ---------- view ----------
function resize(){
  const st = $('#stage').getBoundingClientRect();
  dpr = Math.min(window.devicePixelRatio || 1, 3); cw = st.width; ch = st.height;
  for (const c of [cv, fx]) { c.width = Math.round(cw * dpr); c.height = Math.round(ch * dpr); }
  if (S) { fitS = Math.min(cw / S.pz.w, ch / S.pz.h) * 0.94; clampView(); draw(); }
}
function fitView(){ fitS = Math.min(cw / S.pz.w, ch / S.pz.h) * 0.94; view.s = fitS; view.tx = (cw - S.pz.w * fitS) / 2; view.ty = (ch - S.pz.h * fitS) / 2; }
const maxS = () => Math.max(fitS * 3, 7);
function clampView(){
  if (!S) return;
  view.s = Math.min(maxS(), Math.max(fitS * 0.9, view.s));
  const iw = S.pz.w * view.s, ih = S.pz.h * view.s, m = 60;
  if (iw < cw) view.tx = Math.min(Math.max(view.tx, -iw / 2), cw - iw / 2); else view.tx = Math.min(m, Math.max(cw - iw - m, view.tx));
  if (ih < ch) view.ty = Math.min(Math.max(view.ty, -ih / 2), ch - ih / 2); else view.ty = Math.min(m, Math.max(ch - ih - m, view.ty));
}

function draw(){
  if (!S) return;
  const { s, tx, ty } = view, pz = S.pz;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#ebe6df'; ctx.fillRect(0, 0, cw, ch);
  ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.18)'; ctx.shadowBlur = 14; ctx.fillStyle = '#fff';
  ctx.fillRect(tx, ty, pz.w * s, pz.h * s); ctx.restore();
  ctx.imageSmoothingEnabled = s < 2.5; ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(buf, tx, ty, pz.w * s, pz.h * s);
  if (reveal > 0 && origImg) { ctx.globalAlpha = reveal; ctx.imageSmoothingEnabled = true; ctx.drawImage(origImg, tx, ty, pz.w * s, pz.h * s); ctx.globalAlpha = 1; }
  if (S.done) return;
  // numbers
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const regs = pz.meta.regions, f = S.filled;
  let lastFs = 0;
  for (let r = 0; r < regs.length; r++) {
    if (f[r]) continue;
    const g = regs[r], sr = g[3] * s; if (sr < 5) continue;
    const X = tx + g[1] * s, Y = ty + g[2] * s;
    if (X < -30 || Y < -30 || X > cw + 30 || Y > ch + 30) continue;
    const fs = Math.round(Math.min(sr * 1.15, 30));
    if (fs !== lastFs) { ctx.font = `600 ${fs}px -apple-system,Roboto,Helvetica,Arial,sans-serif`; lastFs = fs; }
    ctx.fillStyle = g[0] === S.sel ? '#2b2722' : '#6b6f76';
    ctx.fillText(String(g[0] + 1), X, Y + fs * 0.04);
  }
}

// effects layer (ripples, hint ring, confetti)
let hintRing = null, confetti = [];
function kick(){ if (!rafOn) { rafOn = true; requestAnimationFrame(tick); } }
function tick(){
  const now = performance.now();
  fxx.setTransform(dpr, 0, 0, dpr, 0, 0); fxx.clearRect(0, 0, cw, ch);
  let alive = false;
  ripples = ripples.filter(r => (now - r.t) < 450);
  for (const r of ripples) {
    const k = Math.max(0, (now - r.t) / 450); alive = true;
    fxx.beginPath(); fxx.arc(r.x, r.y, 8 + 34 * k, 0, 7);
    fxx.strokeStyle = `rgba(${r.c[0]},${r.c[1]},${r.c[2]},${1 - k})`; fxx.lineWidth = 4 * (1 - k) + 1; fxx.stroke();
  }
  if (hintRing) {
    const k = Math.max(0, (now - hintRing.t) / 1400);
    if (k < 1) { alive = true; const X = view.tx + hintRing.x * view.s, Y = view.ty + hintRing.y * view.s;
      fxx.beginPath(); fxx.arc(X, Y, hintRing.r * view.s + 10 + 8 * Math.sin(k * 12), 0, 7);
      fxx.strokeStyle = `rgba(199,154,78,${1 - k})`; fxx.lineWidth = 4; fxx.stroke(); }
    else hintRing = null;
  }
  if (confetti.length) {
    alive = true;
    confetti = confetti.filter(c => c.y < ch + 20);
    for (const c of confetti) { c.vy += 0.12; c.x += c.vx; c.y += c.vy; c.a += c.va;
      fxx.save(); fxx.translate(c.x, c.y); fxx.rotate(c.a); fxx.fillStyle = c.col; fxx.fillRect(-4, -2.5, 8, 5); fxx.restore(); }
  }
  if (anim) { alive = true; stepAnim(now); }
  if (alive) requestAnimationFrame(tick); else { rafOn = false; fxx.clearRect(0, 0, cw, ch); }
}
let anim = null;
function animateView(to, dur, done){ if (reduceMotion()) { Object.assign(view, to); draw(); if (done) done(); return; } anim = { from: { ...view }, to, t: performance.now(), dur, done }; kick(); }
function stepAnim(now){
  const k = Math.max(0, Math.min(1, (now - anim.t) / anim.dur)), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
  for (const key of ['s', 'tx', 'ty']) view[key] = anim.from[key] + (anim.to[key] - anim.from[key]) * e;
  if (anim.reveal) reveal = e;
  draw();
  if (k >= 1) { const d = anim.done; anim = null; d && d(); }
}

// ---------- input ----------
const pts = new Map(); let gest = null;
function local(e){ const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
cv.addEventListener('pointerdown', e => {
  cv.setPointerCapture(e.pointerId); pts.set(e.pointerId, local(e));
  if (pts.size === 1) { const p = local(e); gest = { mode: 'pan', sx: p.x, sy: p.y, lx: p.x, ly: p.y, t: performance.now(), tap: true }; }
  else if (pts.size === 2) startPinch();
});
function startPinch(){
  const [a, b] = [...pts.values()];
  gest = { mode: 'pinch', d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2, s0: view.s, tx0: view.tx, ty0: view.ty, tap: false };
}
cv.addEventListener('pointermove', e => {
  if (!pts.has(e.pointerId) || !S) return;
  pts.set(e.pointerId, local(e));
  if (gest && gest.mode === 'pinch' && pts.size >= 2) {
    const [a, b] = [...pts.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y), cx = (a.x + b.x) / 2, cy = (a.y + b.y) / 2;
    const ns = Math.min(maxS(), Math.max(fitS * 0.9, gest.s0 * d / gest.d0));
    const ix = (gest.cx - gest.tx0) / gest.s0, iy = (gest.cy - gest.ty0) / gest.s0;
    view.s = ns; view.tx = cx - ix * ns; view.ty = cy - iy * ns; clampView(); draw();
  } else if (gest && gest.mode === 'pan') {
    const p = pts.get(e.pointerId);
    if (Math.hypot(p.x - gest.sx, p.y - gest.sy) > 9) gest.tap = false;
    if (!gest.tap) { view.tx += p.x - gest.lx; view.ty += p.y - gest.ly; clampView(); draw(); }
    gest.lx = p.x; gest.ly = p.y;
  }
});
function endPtr(e){
  if (!pts.has(e.pointerId)) return;
  const p = pts.get(e.pointerId); pts.delete(e.pointerId);
  if (gest && gest.mode === 'pan' && gest.tap && e.type === 'pointerup' && performance.now() - gest.t < 600) handleTap(p.x, p.y);
  if (pts.size === 1) { const q = [...pts.values()][0]; gest = { mode: 'pan', sx: q.x, sy: q.y, lx: q.x, ly: q.y, t: 0, tap: false }; }
  else if (pts.size === 0) gest = null;
}
cv.addEventListener('pointerup', endPtr); cv.addEventListener('pointercancel', endPtr);
cv.addEventListener('wheel', e => {
  e.preventDefault(); if (!S) return;
  const p = local(e), ns = Math.min(maxS(), Math.max(fitS * 0.9, view.s * Math.exp(-e.deltaY * 0.0015)));
  const ix = (p.x - view.tx) / view.s, iy = (p.y - view.ty) / view.s;
  view.s = ns; view.tx = p.x - ix * ns; view.ty = p.y - iy * ns; clampView(); draw();
}, { passive: false });
document.addEventListener('gesturestart', e => e.preventDefault());
cv.addEventListener('dblclick', e => e.preventDefault());

function handleTap(sx, sy){
  if (!S || S.done) return;
  const pz = S.pz, ix = Math.floor((sx - view.tx) / view.s), iy = Math.floor((sy - view.ty) / view.s);
  const ok = r => !S.filled[r] && pz.rc[r] === S.sel;
  let hit = -1, other = -1;
  if (ix >= 0 && iy >= 0 && ix < pz.w && iy < pz.h) { const r = pz.reg[iy * pz.w + ix]; if (ok(r)) hit = r; else if (!S.filled[r]) other = r; }
  if (hit < 0) { // forgiving tap: search nearby (≈14 css px)
    const R = Math.max(1.5, 14 / view.s), R2 = R * R, st = Math.max(1, R / 12); let best = 1e9;
    for (let dy = -R; dy <= R; dy += st) for (let dx = -R; dx <= R; dx += st) {
      const d2 = dx * dx + dy * dy; if (d2 > R2 || d2 >= best) continue;
      const x = Math.round(ix + dx), y = Math.round(iy + dy);
      if (x < 0 || y < 0 || x >= pz.w || y >= pz.h) continue;
      const r = pz.reg[y * pz.w + x]; if (ok(r)) { best = d2; hit = r; }
    }
  }
  if (hit >= 0) fillRegion(hit, sx, sy);
  else if (other >= 0) toast(t('colorHere', { n: pz.rc[other] + 1 }));
}

// hint: fly to an open field of the selected colour
$('#hintBtn').onclick = () => {
  if (!S || S.done) return;
  const regs = S.pz.meta.regions; let best = -1, bd = 1e18;
  const cx = (cw / 2 - view.tx) / view.s, cy = (ch / 2 - view.ty) / view.s;
  for (let r = 0; r < regs.length; r++) if (!S.filled[r] && regs[r][0] === S.sel) {
    const d = (regs[r][1] - cx) ** 2 + (regs[r][2] - cy) ** 2; if (d < bd) { bd = d; best = r; } }
  if (best < 0) { toast(t('pickOpen')); return; }
  const g = regs[best];
  const ts = Math.min(maxS(), Math.max(view.s, 16 / g[3], fitS));
  animateView({ s: ts, tx: cw / 2 - g[1] * ts, ty: ch / 2 - g[2] * ts }, 450, () => { clampView(); draw(); hintRing = { x: g[1], y: g[2], r: g[3], t: performance.now() }; kick(); });
};

let toastT = 0;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1600); }

// ---------- completion ----------
function finish(){
  S.done = true; S.doneAt = performance.now(); S.justFinished = true; rebuild();
  clearLastIf(S.p.id);
  const doneArr = []; S.filled.forEach((v, i) => v && doneArr.push(i));
  writeSave(S.p.id, { total: S.pz.R, filled: doneArr });
  if (reduceMotion()) { reveal = 1; draw(); setTimeout(showStory, 200); return; }
  const s = fitS, to = { s, tx: (cw - S.pz.w * s) / 2, ty: (ch - S.pz.h * s) / 2 };
  setTimeout(() => {
    animateView(to, 700, () => {
      const cols = ['#c79a4e', '#e5c07b', '#5b8bd0', '#e07a5f', '#81b29a', '#f2cc8f'];
      for (let i = 0; i < 140; i++) confetti.push({ x: cw / 2 + (Math.random() - .5) * 60, y: ch * .35, vx: (Math.random() - .5) * 9, vy: -Math.random() * 8 - 3, a: Math.random() * 6, va: (Math.random() - .5) * .3, col: cols[i % cols.length] });
      kick();
      setTimeout(() => { anim = { from: { ...view }, to: { ...view }, t: performance.now(), dur: 1800, reveal: true, done: () => setTimeout(showStory, 500) }; kick(); }, 600);
    });
  }, 350);
}
function showStory(){
  if (pathCtx && S && pathCtx.pid === S.p.id) { showPathDone(); return; }
  if (storyCtx && S && storyCtx.pid === S.p.id) { showChapterDone(); return; }
  celebrateIfNeeded();
  const p = S.p;
  $('#sTitle').textContent = L(p,'title'); $('#sMeta').textContent = `${L(p,'artist')} · ${p.year}`;
  $('#sStory').textContent = L(p,'story'); $('#sTech').textContent = L(p,'technique');
  const facts = L(p,'facts') || p.facts || [];
  $('#sFacts').innerHTML = facts.map(f => `<li>${f}</li>`).join('');
  $('#sMuseum').textContent = t('museum', { m: L(p,'museum') });
  revealSheet('#story');
}
let showingOrig = true;
$('#sCompare').onclick = () => {
  $('#story').classList.add('hidden');
  toast(t('hintToast'));
};
$('#sGallery').onclick = () => { hideSheets(); S = null; pathCtx = null; storyCtx = null; navigate({ kind: 'tab', tab: currentTab || 'heute' }, { replace: true }); showScreen(currentTab || 'heute'); };
$('#sReset').onclick = () => {
  if (!confirm(t('resetConfirm'))) return;
  localStorage.removeItem(KEY(S.p.id)); $('#story').classList.add('hidden'); const p = S.p; openPainting(p);
};
if ($('#sShare')) $('#sShare').onclick = () => { const p = currentSharePainting(); if (p) sharePainting(p); };
if ($('#dShare')) $('#dShare').onclick = () => { const p = currentSharePainting(); if (p) sharePainting(p); };
// when finished, the hint button reopens the story, tapping the canvas toggles original / own version
const origHint = $('#hintBtn').onclick;
$('#hintBtn').onclick = () => { if (S && S.done) { showStory(); return; } origHint(); };
cv.addEventListener('click', () => { if (S && S.done && !anim && !(S.doneAt && performance.now() - S.doneAt < 4000)) { reveal = reveal > 0.5 ? 0 : 1; draw(); toast(reveal ? t('original') : t('yours')); } });

// ---------- navigation ----------
const TABS = ['heute','wege','galerie','album'];
let currentTab = 'heute';
let routeSilent = false;
function storedTab(){
  try {
    const s = localStorage.getItem(TAB_KEY);
    if (TABS.includes(s)) return s;
  } catch (e) {}
  return 'heute';
}
function parseHash(){
  const raw = (location.hash || '').replace(/^#\/?/, '');
  if (!raw) return { kind: 'tab', tab: storedTab() };
  const parts = raw.split('/').filter(Boolean);
  const a = decodeURIComponent(parts[0] || '');
  const b = parts[1] ? decodeURIComponent(parts[1]) : '';
  if (TABS.includes(a)) {
    if (a === 'album' && b) return { kind: 'albumView', id: b };
    return { kind: 'tab', tab: a };
  }
  if ((a === 'weg' || a === 'path') && b) return { kind: 'path', id: b };
  if ((a === 'geschichte' || a === 'story') && b) return { kind: 'story', id: b };
  if ((a === 'bild' || a === 'paint') && b) return { kind: 'paint', id: b };
  return { kind: 'tab', tab: storedTab() };
}
function hashFor(route){
  if (!route) return '#heute';
  if (route.kind === 'tab') return '#' + (route.tab || 'heute');
  if (route.kind === 'path') return '#weg/' + route.id;
  if (route.kind === 'story') return '#geschichte/' + route.id;
  if (route.kind === 'paint') return '#bild/' + route.id;
  if (route.kind === 'albumView') return '#album/' + route.id;
  return '#heute';
}
function navigate(route, opts){
  const h = hashFor(route);
  const replace = opts && opts.replace;
  if (routeSilent) return;
  lastApplied = h;
  if ((location.hash || '#') !== h) {
    if (replace) history.replaceState({ masilano: 1 }, '', h);
    else history.pushState({ masilano: 1 }, '', h);
  }
}
function backOr(route){
  if (history.state && history.state.masilano && !history.state.home) history.back();
  else {
    navigate(route || { kind: 'tab', tab: currentTab || 'heute' }, { replace: true });
    applyRoute(route || { kind: 'tab', tab: currentTab || 'heute' });
  }
}
function applyRoute(route){
  hideSheets();
  if (!route) route = parseHash();
  if (route.kind === 'tab') {
    S = null; pathCtx = null; storyCtx = null;
    showScreen(route.tab);
    return;
  }
  if (route.kind === 'path') {
    const path = PATHS.find(x => x.id === route.id);
    if (path) { pathCtx = { path }; storyCtx = null; showPath(path, { noRoute: true }); }
    else showScreen('wege');
    return;
  }
  if (route.kind === 'story') {
    const st = STORIES.find(x => x.id === route.id);
    if (st) { storyCtx = { story: st }; pathCtx = null; showChapters(st, { noRoute: true }); }
    else showScreen('wege');
    return;
  }
  if (route.kind === 'paint') {
    const p = byId(route.id);
    if (p) openPainting(p, { noRoute: true });
    else showScreen('galerie');
    return;
  }
  if (route.kind === 'albumView') {
    showScreen('album');
    showAlbumView(route.id, { noRoute: true });
  }
}
function bootRoute(){
  const r = parseHash();
  if (r.kind !== 'tab') {
    const tab = r.kind === 'albumView' ? 'album' : (r.kind === 'paint' ? storedTab() : 'wege');
    history.replaceState({ masilano: 1, home: true }, '', '#' + tab);
    history.pushState({ masilano: 1 }, '', hashFor(r));
  } else {
    history.replaceState({ masilano: 1, home: true }, '', hashFor(r));
  }
  lastApplied = hashFor(r);
  applyRoute(r);
}
let lastApplied = '';
function onRouteChange(){
  const h = location.hash || '#heute';
  hideSheets();
  if (h === lastApplied) return;
  lastApplied = h;
  applyRoute(parseHash());
}
window.addEventListener('popstate', onRouteChange);
window.addEventListener('hashchange', onRouteChange);
function revealSheet(sel){
  const el = $(sel);
  if (!el) return;
  if (el.classList.contains('hidden')) history.pushState({ masilano: 1, sheet: el.id }, '', location.href);
  el.classList.remove('hidden');
}
function closeTopSheet(){
  if (history.state && history.state.sheet) history.back();
  else hideSheets();
}
function showScreen(id){
  const tabId = id === 'gallery' ? 'galerie' : id;
  const isTab = TABS.includes(tabId);
  if (isTab) {
    currentTab = tabId;
    try { localStorage.setItem(TAB_KEY, tabId); } catch (e) {}
    document.body.classList.remove('tabless');
    const elId = tabId === 'galerie' ? 'gallery' : tabId;
    document.querySelectorAll('.tab-screen').forEach(s => s.classList.toggle('active', s.id === elId));
    document.querySelectorAll('.screen.flow').forEach(s => s.classList.remove('active'));
    syncTabBar();
    if (tabId === 'heute') renderHeute();
    if (tabId === 'wege') renderStoryEntry();
    if (tabId === 'galerie') { placeFilterPanel(); galGrid = null; requestAnimationFrame(() => renderGallery()); }
    if (tabId === 'album') renderAlbum();
  } else {
    document.body.classList.add('tabless');
    document.querySelectorAll('.tab-screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.screen.flow').forEach(s => s.classList.toggle('active', s.id === id));
  }
}
function syncTabBar(){
  const bar = $('#tabbar'); if (!bar) return;
  bar.querySelectorAll('.tab').forEach(b => {
    const on = b.getAttribute('data-tab') === currentTab;
    b.classList.toggle('on', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
}
function bindTabs(){
  const bar = $('#tabbar'); if (!bar) return;
  bar.addEventListener('click', e => {
    const b = e.target.closest('.tab[data-tab]'); if (!b) return;
    const tab = b.getAttribute('data-tab');
    if (!TABS.includes(tab)) return;
    S = null; pathCtx = null; storyCtx = null;
    hideSheets();
    navigate({ kind: 'tab', tab });
    showScreen(tab);
  });
}
function goGallery(){
  if (swReload) { location.reload(); return; }
  S = null; hideSheets();
  if (pathCtx && pathCtx.path) { backOr({ kind: 'path', id: pathCtx.path.id }); return; }
  if (storyCtx && storyCtx.story) { backOr({ kind: 'story', id: storyCtx.story.id }); return; }
  backOr({ kind: 'tab', tab: currentTab || 'heute' });
}
function hideSheets(){ ['#story', '#chapter', '#chDone', '#pathFin', '#installHow', '#settings', '#albumView', '#sources', '#filterSheet', '#certView'].forEach(q => $(q) && $(q).classList.add('hidden')); }
$('#backBtn').onclick = goGallery;
let galT = 0;
function onViewport(){ if (S) resize(); else { clearTimeout(galT); galT = setTimeout(() => { placeFilterPanel(); if (currentTab === 'galerie') { galGrid = null; renderGallery(); } }, 120); } }
window.addEventListener('resize', onViewport);
if (window.visualViewport) visualViewport.addEventListener('resize', onViewport);

// ---------- story mode (Geschichten) ----------
let storyCtx = null; // { story, idx, pid } while playing a chapter
function isDone(id){ const s = loadSave(id); return !!(s && s.total && s.filled.length >= s.total); }
function pctOf(id){ const s = loadSave(id); return s && s.total ? Math.floor(100 * s.filled.length / s.total) : 0; }
function storyState(st){ try { return JSON.parse(localStorage.getItem(SKEY(st.id))) || { seen: [] }; } catch(e){ return { seen: [] }; } }
function storySave(st, o){ try { localStorage.setItem(SKEY(st.id), JSON.stringify(o)); } catch(e){} }
function chUnlocked(st, i){ return i === 0 || isDone(st.chapters[i - 1].pid); }
function chDoneCount(st){ return st.chapters.filter(c => isDone(c.pid)).length; }
function renderStoryEntry(){
  const box = $('#storyEntries');
  if (!box) return;
  if (!STORIES.length && !PATHS.length) { box.style.display = 'none'; return; }
  box.style.display = '';
  box.className = 'wayslist';
  box.innerHTML = '';
  PATHS.forEach(path => {
    const steps = pathSteps(path), n = steps.filter(s => isDone(s.pid)).length, N = steps.length;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'waycard path';
    b.setAttribute('data-path', path.id);
    b.setAttribute('aria-label', t('pathAria', { title: L(path,'title') }));
    const pct = N ? Math.round(100 * n / N) : 0;
    b.innerHTML = `<div class="cv" style="background-image:url(data/${path.cover}-thumb.jpg)"></div>
      <div class="tx"><div class="k">${pathKickerText(path)}</div><div class="n">${L(path,'title')}</div>
      <div class="s">${L(path,'part')} · ${n ? t('paintedOf', { n, N }) : t('startNow')}</div>
      <div class="bar"><div style="width:${pct}%"></div></div></div><div class="go">›</div>`;
    b.onclick = () => { pathCtx = { path }; storyCtx = null; showPath(path); };
    const row = document.createElement('div');
    row.className = 'wayrow';
    row.appendChild(b);
    if (N && n === N) {
      const cb = document.createElement('button');
      cb.type = 'button';
      cb.className = 'waycert';
      cb.setAttribute('data-cert', path.id);
      cb.setAttribute('aria-label', t('certAria', { title: L(path,'title') }));
      cb.textContent = t('certOpen');
      cb.onclick = ev => { ev.stopPropagation(); showCertificate(path); };
      row.appendChild(cb);
    }
    box.appendChild(row);
  });
  STORIES.forEach(st => {
    const n = chDoneCount(st), N = st.chapters.length;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'waycard story' + (st.fresh ? ' neu' : '');
    b.setAttribute('data-story', st.id);
    b.setAttribute('aria-label', t('storyAria', { name: st.name }));
    const kicker = storyKickerText(st);
    const pct = N ? Math.round(100 * n / N) : 0;
    b.innerHTML = `<div class="cv" style="background-image:url(data/${st.cover}-orig.jpg)"></div>
      <div class="tx"><div class="k">${kicker}</div><div class="n">${st.name}</div>
      <div class="s">${L(st,'subtitle')} · ${n ? t('paintedOf', { n, N }) : t('startNow')}</div>
      <div class="bar"><div style="width:${pct}%"></div></div></div><div class="go">›</div>`;
    b.onclick = () => { storyCtx = { story: st }; showChapters(st); };
    box.appendChild(b);
  });
}
let ctoastT = 0;
function ctoast(msg){ const t = $('#ctoast'); t.textContent = msg; t.classList.add('show'); clearTimeout(ctoastT); ctoastT = setTimeout(() => t.classList.remove('show'), 1800); }
function showChapters(st, opts){
  if (!opts || !opts.noRoute) navigate({ kind: 'story', id: st.id });
  S = null; showScreen('chapters');
  const N = st.chapters.length, n = chDoneCount(st), seen = storyState(st).seen;
  $('#chHead').innerHTML = `<div class="cv" style="background-image:url(data/${st.cover}-orig.jpg)"></div>
    <div><h1>${st.name}</h1><div class="life">${st.life} · ${L(st,'subtitle')}</div>
    <p class="intro">${L(st,'intro')}</p>
    <div class="prog">${t('chaptersPainted', { n, N })}<div class="bar"><div style="width:${100 * n / N}%"></div></div></div></div>`;
  const list = $('#chList'); list.innerHTML = '';
  let nextMarked = false;
  st.chapters.forEach((ch, i) => {
    const p = byId(ch.pid), open = chUnlocked(st, i), done = isDone(ch.pid), pct = pctOf(ch.pid);
    const b = document.createElement('button');
    let cls = 'chi', badge;
    if (!open) { cls += ' locked'; badge = ''; }
    else if (done) badge = '<span class="st fin">✓ ' + t('done') + '</span>';
    else { cls += ' todo'; badge = pct > 0 ? `<span class="st">${Math.max(1, pct)} %</span>` : (seen.includes(i) ? '<span class="st">' + t('ready') + '</span>' : '<span class="st new">' + t('neu') + '</span>'); }
    if (open && !done && !nextMarked) { cls += ' next'; nextMarked = true; }
    b.className = cls; b.dataset.i = i;
    const chL = I.locChapter(st, ch);
    b.innerHTML = `<div class="th" style="background-image:url(data/${ch.pid}-${done ? 'orig.jpg' : 'thumb.jpg'})"></div>
      <div class="tx"><div class="no">${t('chapterLine', { n: i + 1, place: chL.place, when: chL.when })}</div><div class="t">${chL.title}</div>
      <div class="w">${open ? `${L(p,'title')} (${p.year})` : t('lockedUntil', { n: i })}</div></div>${badge}`;
    b.onclick = () => open ? showChapter(st, i) : ctoast(t('paintFirst', { n: i }));
    list.appendChild(b);
  });
  const epi = $('#chEpi');
  if (n === N) { epi.innerHTML = `<div class="lbl">${t('whatNext')}</div><p>${L(st,'epilogue')}</p>`; epi.classList.remove('hidden'); }
  else epi.classList.add('hidden');
  renderStoryEntry();
}
function showChapter(st, i){
  const ch = st.chapters[i], p = byId(ch.pid), done = isDone(ch.pid), pct = pctOf(ch.pid);
  storyCtx = { story: st, idx: i, pid: ch.pid }; pathCtx = null;
  const o = storyState(st); if (!o.seen.includes(i)) { o.seen.push(i); storySave(st, o); }
  const chL = I.locChapter(st, ch);
  $('#cNum').textContent = t('chapterOf', { n: i + 1, N: st.chapters.length });
  $('#cTitle').textContent = chL.title;
  $('#cMeta').textContent = `${chL.place} · ${chL.when}`;
  $('#cText').innerHTML = chL.text.map(tx => `<p>${tx}</p>`).join('');
  const qEl = $('#cQuote'); if (qEl) qEl.classList.add('hidden');
  $('#cWork').className = 'cwork' + (done ? ' fin' : '');
  $('#cWork').innerHTML = `<div class="th" style="background-image:url(data/${ch.pid}-${done ? 'orig.jpg' : 'thumb.jpg'})"></div>
    ${youArePainting(done, L(p,'title'), L(p,'artist'), p.year)}`;
  $('#cGo').textContent = paintBtn(done, pct);
  $('#chapter .card').scrollTop = 0;
  revealSheet('#chapter');
}
$('#cBack').onclick = () => { closeTopSheet(); };
$('#cGo').onclick = async () => {
  $('#chapter').classList.add('hidden');
  const c = pathCtx || storyCtx, p = byId(c.pid);
  await openPainting(p);
  if (S && S.done && pathCtx === c) setTimeout(() => { if (S && S.p === p) showPathDone(); }, 900);
  else if (S && S.done && storyCtx === c) setTimeout(() => { if (S && S.p === p) showChapterDone(); }, 900);
};
function showChapterDone(){
  celebrateIfNeeded();
  const c = storyCtx, st = c.story, i = c.idx, ch = st.chapters[i], p = byId(ch.pid), N = st.chapters.length, last = i === N - 1;
  const chL = I.locChapter(st, ch);
  $('#dNum').textContent = t('chapterDone', { n: i + 1 });
  $('#dTitle').textContent = L(p,'title');
  $('#dMeta').textContent = `${L(p,'artist')} · ${p.year}`;
  $('#dFact').textContent = chL.fact;
  $('#dMuseum').textContent = t('today', { m: L(p,'museum') });
  $('#dEpi').textContent = L(st,'epilogue');
  $('#dEpiWrap').classList.toggle('hidden', !last);
  $('#dNext').textContent = last ? t('finishStory') : t('nextChapter', { n: i + 2 });
  $('#chDone .card').scrollTop = 0;
  revealSheet('#chDone');
}
$('#dNext').onclick = () => {
  if (pathCtx && pathCtx.step) {
    const path = pathCtx.path, steps = pathSteps(path), i = pathCtx.step.idx;
    $('#chDone').classList.add('hidden');
    if (swReload) { location.reload(); return; }
    S = null;
    if (i < steps.length - 1) { showPath(path); showPathWork(path, steps[i + 1]); }
    else showPath(path);
    return;
  }
  const c = storyCtx, st = c.story, i = c.idx;
  $('#chDone').classList.add('hidden');
  if (swReload) { location.reload(); return; }
  S = null;
  if (i < st.chapters.length - 1) { showChapters(st); showChapter(st, i + 1); }
  else showChapters(st);
};
$('#dList').onclick = () => { hideSheets(); if (pathCtx && pathCtx.path) showPath(pathCtx.path, { noRoute: true }); else if (storyCtx && storyCtx.story) showChapters(storyCtx.story, { noRoute: true }); else { S = null; navigate({ kind: 'tab', tab: 'wege' }); showScreen('wege'); } };
$('#dLook').onclick = () => { $('#chDone').classList.add('hidden'); toast(t('hintAgain')); };
$('#chBack').onclick = () => { const st = storyCtx && storyCtx.story; storyCtx = null; hideSheets(); if (swReload) { location.reload(); return; } backOr({ kind: 'tab', tab: 'wege' }); };

// ---------- path mode (Lebensweg) ----------
let pathCtx = null; // { path, step, pid } while playing a path work
function pathSteps(path){
  const out = [];
  path.stations.forEach((st, si) => st.works.forEach((w, wi) => out.push({ st, si, w, wi, pid: w.pid, idx: out.length })));
  return out;
}
function pathState(path){ try { return JSON.parse(localStorage.getItem(PKEY(path.id))) || { seen: [] }; } catch(e){ return { seen: [] }; } }
function pathSave(path, o){ try { localStorage.setItem(PKEY(path.id), JSON.stringify(o)); } catch(e){} }
function pathDoneCount(path){ return pathSteps(path).filter(s => isDone(s.pid)).length; }
function pathWorkUnlocked(path, idx){ return idx === 0 || isDone(pathSteps(path)[idx - 1].pid); }
function stationDone(st){ return st.works.every(w => isDone(w.pid)); }
function showPath(path, opts){
  if (!opts || !opts.noRoute) navigate({ kind: 'path', id: path.id });
  S = null; showScreen('path');
  markPathOpened(path);
  const steps = pathSteps(path), n = pathDoneCount(path), N = steps.length;
  $('#pathHead').innerHTML = `<div class="cv" style="background-image:url(data/${path.cover}-orig.jpg)"></div>
    <div><h1>${L(path,'title')}</h1><div class="life">${path.name} · ${path.life} · ${L(path,'part')}</div>
    <p class="intro">${L(path,'intro')}</p>
    <div class="prog">${t('picturesPainted', { n, N })}<div class="bar"><div style="width:${100 * n / Math.max(1,N)}%"></div></div></div></div>`;
  renderPathMap(path);
  const list = $('#pathList'); list.innerHTML = '';
  const note = document.createElement('p');
  note.className = 'pnote' + (n === N ? ' done' : '');
  note.textContent = n === N ? t('pathNoteDone') : t('pathNotePlay');
  list.appendChild(note);
  path.stations.forEach((st, si) => {
    const box = document.createElement('section');
    box.className = 'pstat'; box.id = 'pstat-' + st.id;
    const stL = I.locStation(st);
    const intro = stL.intro.map(tx => `<p>${tx}</p>`).join('');
    box.innerHTML = `<h2>${si + 1}. ${stL.place}</h2><div class="when">${stL.when}</div><div class="intro">${intro}</div><div class="works"></div>`;
    const works = box.querySelector('.works');
    let nextMarked = false;
    st.works.forEach((w, wi) => {
      const step = steps.find(s => s.si === si && s.wi === wi);
      const p = byId(w.pid), done = isDone(w.pid), pct = pctOf(w.pid);
      const conceptual = pathWorkUnlocked(path, step.idx);
      const b = document.createElement('button');
      let cls = 'chi', badge;
      if (done) badge = '<span class="st fin">✓ ' + t('done') + '</span>';
      else {
        cls += ' todo';
        badge = pct > 0 ? `<span class="st">${Math.max(1, pct)} %</span>` : (pathState(path).seen.includes(w.pid) ? '<span class="st">' + t('ready') + '</span>' : '<span class="st new">' + t('neu') + '</span>');
      }
      if (!conceptual) cls += ' softlock';
      if (!done && conceptual && !nextMarked) { cls += ' next'; nextMarked = true; }
      if (!done && !conceptual && !nextMarked) { cls += ' next'; nextMarked = true; }
      const free = (si === 0 && wi === 0) ? t('freeStart') : '';
      b.className = cls;
      b.innerHTML = `<div class="th" style="background-image:url(data/${w.pid}-${done ? 'orig.jpg' : 'thumb.jpg'})"></div>
        <div class="tx"><div class="no">${free}${stL.place}, ${stL.when}</div><div class="t">${L(p,'title')}</div>
        <div class="w">${L(p,'artist')}, ${p.year}</div></div>${badge}`;
      b.onclick = () => showPathWork(path, step);
      works.appendChild(b);
    });
    list.appendChild(box);
  });
  const epi = $('#pathEpi');
  const oldCert = $('#pathCertBtn');
  if (oldCert) oldCert.remove();
  if (n === N) {
    recordCertDate(path);
    const ending = L(path,'ending') || path.ending || [L(path,'epilogue')];
    const paras = ending.map(tx => `<p>${tx}</p>`).join('');
    epi.className = 'pfin';
    epi.innerHTML = `<div class="lbl">${t('closing')}</div>${paras}`;
    epi.classList.remove('hidden');
    const wrap = document.createElement('div');
    wrap.className = 'path-certwrap';
    wrap.innerHTML = `<button type="button" id="pathCertBtn" class="btn sharebtn">${esc(t('certOpen'))}</button>`;
    wrap.querySelector('button').onclick = () => showCertificate(path);
    const head = $('#pathHead');
    if (head && head.parentNode) head.parentNode.insertBefore(wrap, head.nextSibling);
  } else {
    epi.className = '';
    epi.classList.add('hidden');
  }
  renderStoryEntry();
}
function renderPathMap(path){
  const wrap = $('#pathMap');
  const groups = [];
  path.stations.forEach((st, i) => {
    const g = groups.find(x => Math.hypot(x.x - st.map.x, x.y - st.map.y) < 12);
    if (g) { g.si.push(i); if (st.map.labelDy != null && g.labelDy == null) g.labelDy = st.map.labelDy; } else groups.push({ x: st.map.x, y: st.map.y, si: [i], label: st.mapLabel || I.locStation(st).place.split('·')[0].trim(), labelDy: st.map.labelDy });
  });
  const doneSt = path.stations.map(stationDone);
  const lines = [];
  for (let i = 1; i < groups.length; i++) {
    const a = groups[i - 1], b = groups[i];
    lines.push(`<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`);
  }
  const dots = groups.map((g, gi) => {
    const allDone = g.si.every(i => doneSt[i]);
    const open = g.si.some(i => i === 0 || doneSt[i] || (i > 0 && doneSt[i - 1]));
    const cls = allDone ? 'done' : (open ? 'open' : 'soon');
    const num = g.si.length > 2 ? (g.si[0] + 1) + '–' + (g.si[g.si.length - 1] + 1) : g.si.map(i => i + 1).join('·');
    return `<g class="mdot ${cls}" data-si="${g.si[0]}">
      <circle cx="${g.x}" cy="${g.y}" r="7"/>
      <text x="${g.x}" y="${g.y + 3}">${num}</text>
      <text class="mlab" x="${g.x}" y="${g.y + (g.labelDy != null ? g.labelDy : 20)}">${g.label}</text></g>`;
  }).join('');
  const items = path.stations.map((st, i) => {
    const cls = doneSt[i] ? 'done' : (i === 0 || doneSt[i - 1] ? 'open' : '');
    const stL = I.locStation(st);
    return `<li class="${cls}" data-si="${i}"><span class="n">${i + 1}</span>${stL.place} · ${stL.when}</li>`;
  }).join('');
  const map = path.map || {};
  const vb = map.viewBox || '0 0 200 220';
  const [,, vw, vh] = vb.split(/\s+/);
  const lands = map.lands || [
    'M28,58 C38,32 72,22 98,28 C128,16 168,22 182,42 C190,58 176,74 154,82 C128,96 96,98 70,90 C46,96 26,80 28,58 Z',
    'M18,108 C8,118 10,138 22,150 C36,162 62,160 72,148 C78,136 64,122 50,114 C36,106 26,104 18,108 Z',
    'M48,152 C62,158 78,170 88,190 C94,208 80,218 64,214 C48,210 38,198 40,178 C42,164 44,154 48,152 Z'
  ];
  const landPaths = lands.map(d => `<path class="land" d="${d}"/>`).join('');
  const mapAria = map.ariaKey ? t(map.ariaKey, { title: L(path,'title') }) : (path.id === 'vangogh' ? t('mapAria') : t('mapAriaPath', { title: L(path,'title') }));
  wrap.innerHTML = `<svg viewBox="${vb}" class="pmap" role="img" aria-label="${mapAria}">
    <rect class="sea" x="0" y="0" width="${vw||200}" height="${vh||220}"/>
    ${landPaths}
    ${lines.join('')}
    ${dots}
  </svg><ol class="ptime">${items}</ol>`;
  wrap.querySelectorAll('.mdot, .ptime li').forEach(el => {
    el.addEventListener('click', () => {
      const t = document.getElementById('pstat-' + path.stations[+el.getAttribute('data-si')].id);
      if (t) smoothIntoView(t, { behavior: 'smooth', block: 'start' });
    });
  });
}
function showPathWork(path, step){
  const w = step.w, p = byId(step.pid), done = isDone(step.pid), pct = pctOf(step.pid);
  const steps = pathSteps(path);
  pathCtx = { path, step, pid: step.pid };
  storyCtx = null;
  const o = pathState(path); if (!o.seen.includes(step.pid)) { o.seen.push(step.pid); pathSave(path, o); }
  const stL = I.locStation(step.st), wL = I.locPathWork(w);
  $('#cNum').textContent = t('pictureOf', { place: stL.place, n: step.idx + 1, N: steps.length });
  $('#cTitle').textContent = L(p,'title');
  $('#cMeta').textContent = `${L(p,'artist')} · ${p.year} · ${stL.place}, ${stL.when}`;
  $('#cText').innerHTML = (Array.isArray(wL.text) ? wL.text : [wL.text]).map(tx => `<p>${tx}</p>`).join('');
  const fb = $('#cLangFallback');
  if (fb) {
    if (wL.fallback) { fb.textContent = t('langFallback'); fb.classList.remove('hidden'); fb.hidden = false; }
    else { fb.textContent = ''; fb.classList.add('hidden'); fb.hidden = true; }
  }
  const q = $('#cQuote');
  if (wL.quote) {
    $('#cQuoteT').textContent = '«' + wL.quote.text + '»';
    $('#cQuoteC').textContent = wL.quote.cite || '';
    const qn = $('#cQuoteTr');
    if (qn) {
      if (I.lang !== 'de' && I.lang !== 'en') {
        const fromEn = (step.pid === 'blvdclichy') || /Livens/.test((wL.quote.cite || '') + (w.quote && w.quote.cite || ''));
        qn.textContent = t(fromEn ? 'quoteFromEnOrig' : 'quoteSelfTr');
        qn.classList.remove('hidden'); qn.hidden = false;
      } else {
        qn.textContent = ''; qn.classList.add('hidden'); qn.hidden = true;
      }
    }
    q.classList.remove('hidden');
  } else {
    const qn = $('#cQuoteTr');
    if (qn) { qn.textContent = ''; qn.classList.add('hidden'); qn.hidden = true; }
    q.classList.add('hidden');
  }
  $('#cWork').className = 'cwork' + (done ? ' fin' : '');
  $('#cWork').innerHTML = `<div class="th" style="background-image:url(data/${step.pid}-${done ? 'orig.jpg' : 'thumb.jpg'})"></div>
    ${youArePainting(done, L(p,'title'), L(p,'artist'), p.year)}`;
  $('#cGo').textContent = paintBtn(done, pct);
  $('#chapter .card').scrollTop = 0;
  revealSheet('#chapter');
}
function showPathDone(){
  celebrateIfNeeded();
  const c = pathCtx, path = c.path, step = c.step, p = byId(step.pid);
  const steps = pathSteps(path), last = step.idx === steps.length - 1;
  if (last) { showPathFin(path); return; }
  const wL = I.locPathWork(step.w);
  $('#dNum').textContent = t('pictureDone', { n: step.idx + 1 });
  $('#dTitle').textContent = L(p,'title');
  $('#dMeta').textContent = `${L(p,'artist')} · ${p.year}`;
  $('#dFact').textContent = wL.fact;
  const dfb = $('#dLangFallback');
  if (dfb) {
    if (wL.fallback && wL.fact) { dfb.textContent = t('langFallback'); dfb.classList.remove('hidden'); dfb.hidden = false; }
    else { dfb.textContent = ''; dfb.classList.add('hidden'); dfb.hidden = true; }
  }
  $('#dMuseum').textContent = t('today', { m: L(p,'museum') });
  $('#dEpiWrap').classList.add('hidden');
  $('#dNext').textContent = t('nextPicture', { title: L(byId(steps[step.idx + 1].pid),'title') });
  $('#chDone .card').scrollTop = 0;
  revealSheet('#chDone');
}
function showPathFin(path){
  const N = pathSteps(path).length;
  recordCertDate(path);
  $('#pfTitle').textContent = L(path,'title');
  $('#pfCount').textContent = t('allDone', { N });
  const ending = L(path,'ending') || path.ending || [L(path,'epilogue')];
  $('#pfBody').innerHTML = ending.map(tx => `<p>${tx}</p>`).join('');
  hideSheets();
  $('#pathFin .card').scrollTop = 0;
  revealSheet('#pathFin');
}
$('#pathBack').onclick = () => { pathCtx = null; hideSheets(); if (swReload) { location.reload(); return; } backOr({ kind: 'tab', tab: 'wege' }); };


if ($('#pfPath')) $('#pfPath').onclick = () => {
  const path = (pathCtx && pathCtx.path) || (window.PATHS && window.PATHS[0]);
  $('#pathFin').classList.add('hidden');
  if (swReload) { location.reload(); return; }
  S = null; pathCtx = pathCtx || { path, step: null, pid: null };
  showPath(path);
};
if ($('#pfCert')) $('#pfCert').onclick = () => {
  const path = (pathCtx && pathCtx.path) || (window.PATHS && window.PATHS[0]);
  if (path) showCertificate(path);
};
if ($('#pfGal')) $('#pfGal').onclick = () => {
  $('#pathFin').classList.add('hidden');
  pathCtx = null;
  navigate({ kind: 'tab', tab: 'galerie' });
  showScreen('galerie');
};



// ---------- v7.2: daily, album, calm, milestones ----------
function todayKey(d){
  if (!d && todayOverride) return todayOverride;
  let x;
  if (d instanceof Date) x = d;
  else if (typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  else x = new Date();
  const y = x.getFullYear(), m = x.getMonth() + 1, day = x.getDate();
  return y + '-' + String(m).padStart(2, '0') + '-' + String(day).padStart(2, '0');
}
function shiftDate(dateStr, days){
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return todayKey(d);
}
function fnv1a(s){
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function dailyPool(){
  const maxRank = calmOn() ? 0 : 1;
  return ALL.filter(p => LEVEL_RANK[levelOf(p)] <= maxRank)
    .slice()
    .sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}
function pickDaily(dateStr){
  const key = todayKey(dateStr);
  const pool = dailyPool();
  if (!pool.length) return null;
  return pool[fnv1a('masilano.daily.v1|' + key) % pool.length];
}
function loadStreak(){
  try {
    const o = JSON.parse(localStorage.getItem(STREAK_KEY) || 'null') || {};
    return { n: +o.n || 0, last: o.last || '' };
  } catch (e) { return { n: 0, last: '' }; }
}
function saveStreak(o){
  try { localStorage.setItem(STREAK_KEY, JSON.stringify({ n: o.n || 0, last: o.last || '' })); } catch (e) {}
}
function streakKind(st, day){
  if (!st || !st.n) return null;
  if (st.last === day) return 'today';
  if (st.last === shiftDate(day, -1)) return 'active';
  return 'paused';
}
function streakText(st, day){
  const kind = streakKind(st, day);
  if (!kind) return '';
  if (st.n === 1) return t(kind === 'today' ? 'streakToday1' : kind === 'active' ? 'streakActive1' : 'streakPaused1');
  return t(kind === 'today' ? 'streakToday' : kind === 'active' ? 'streakActive' : 'streakPaused', { n: st.n });
}
function bumpStreak(day){
  const d = day || todayKey();
  const st = loadStreak();
  if (st.last === d) return st;
  st.n = (st.n || 0) + 1;
  st.last = d;
  saveStreak(st);
  return st;
}
function openHomeWork(p){
  if (!p) return;
  pathCtx = null; storyCtx = null;
  for (const path of PATHS) {
    const step = pathSteps(path).find(s => s.pid === p.id);
    if (step) { pathCtx = { path, step, pid: p.id }; break; }
  }
  if (!pathCtx) {
    for (const st of STORIES) {
      const idx = st.chapters.findIndex(c => c.pid === p.id);
      if (idx >= 0) { storyCtx = { story: st, idx, pid: p.id }; break; }
    }
  }
  hideSheets();
  return openPainting(p);
}
function teaserMeta(p){
  const meta = workLoreMeta(p);
  let text = '';
  if (Array.isArray(meta.texts)) text = meta.texts[0] || '';
  else text = meta.texts || '';
  text = String(text).replace(/\s+/g, ' ').trim();
  if (!text) return { text: '', fallback: false };
  const bits = text.split(/(?<=[.!?…])\s+/).filter(Boolean);
  let out = bits[0] || text;
  if (bits[1] && (out + ' ' + bits[1]).length <= 260) out = out + ' ' + bits[1];
  return { text: out, fallback: !!meta.fallback };
}
function storyTeaser(p){ return teaserMeta(p).text; }
function renderDaily(){
  const wrap = $('#dailyWrap'); if (!wrap) return;
  const day = todayKey();
  const p = pickDaily(day);
  if (!p) { wrap.innerHTML = ''; return; }
  const done = isDone(p.id);
  const streak = streakText(loadStreak(), day);
  const teaser = teaserMeta(p);
  const card = document.createElement('article');
  card.id = 'dailyCard';
  card.className = 'dailyhero' + (done ? ' done' : '');
  const img = 'orig.jpg';
  const cta = done ? t('dailyCtaView') : t('dailyCta');
  card.innerHTML = `<button type="button" class="heroim" id="dailyHeroIm" style="background-image:url(data/${p.id}-${img})" aria-label="${esc(t('dailyAria', { title: L(p, 'title') }))}"></button>
    <div class="tx"><div class="k">${t('dailyKicker')}</div>
    <div class="n">${esc(L(p,'title'))}</div>
    <div class="a">${esc(L(p,'artist') || p.artist)}${p.year ? ' · ' + esc(p.year) : ''}</div>
    ${teaser.text ? `<p class="teaser">${esc(teaser.text)}</p>` : ''}
    ${teaser.fallback && teaser.text ? `<p class="langfallback">${esc(t('langFallback'))}</p>` : ''}
    <button type="button" class="cta" id="dailyCta">${esc(cta)}</button>
    ${streak ? `<div class="st">${esc(streak)}</div>` : ''}</div>`;
  const go = () => { if (isDone(p.id)) bumpStreak(day); openHomeWork(p); };
  card.querySelector('#dailyHeroIm').onclick = go;
  card.querySelector('#dailyCta').onclick = go;
  wrap.innerHTML = '';
  wrap.appendChild(card);
}
function sourcedFacts(){
  const out = [];
  const seen = new Set();
  function add(text, cite, pid, fallback){
    const s = String(text || '').replace(/\s+/g, ' ').trim();
    if (s.length < 24) return;
    if (seen.has(s)) return;
    seen.add(s);
    out.push({ text: s, cite: cite || '', pid: pid || '', fallback: !!fallback });
  }
  for (const p of ALL) {
    const facts = L(p, 'facts') || p.facts;
    const list = !facts ? [] : (Array.isArray(facts) ? facts : [facts]);
    list.forEach(f => add(f, L(p, 'title'), p.id));
  }
  for (const path of PATHS) {
    for (const step of pathSteps(path)) {
      if (!step.w) continue;
      const w = I.locPathWork(step.w);
      if (w && w.fact) {
        const pic = byId(step.pid);
        add(w.fact, pic ? L(pic, 'title') : (I.locStation(step.st).place || ''), step.pid, w.fallback);
      }
    }
  }
  for (const st of STORIES) {
    for (const ch of st.chapters) {
      const chL = I.locChapter(st, ch);
      if (chL && chL.fact) {
        const pic = byId(ch.pid);
        add(chL.fact, pic ? L(pic, 'title') : st.name, ch.pid);
      }
    }
  }
  return out;
}
function pickDailyFact(dateStr){
  const facts = sourcedFacts();
  if (!facts.length) return null;
  const daily = pickDaily(dateStr);
  const avoid = daily ? workFact(daily) : '';
  const pool = avoid ? facts.filter(f => f.text !== avoid && f.pid !== (daily && daily.id)) : facts;
  const use = pool.length ? pool : facts;
  const i = fnv1a('masilano.fact.v1|' + todayKey(dateStr)) % use.length;
  return use[i];
}
function renderDailyFact(){
  const wrap = $('#factWrap'); if (!wrap) return;
  const fact = pickDailyFact();
  if (!fact) { wrap.innerHTML = ''; return; }
  const card = document.createElement('div');
  card.id = 'factCard';
  card.className = 'factcard';
  card.innerHTML = `<div class="k">${t('didYouKnow')}</div>
    <p class="f">${esc(fact.text)}</p>
    ${fact.fallback ? `<p class="langfallback">${esc(t('langFallback'))}</p>` : ''}
    ${fact.cite && fact.text.indexOf(fact.cite) === -1 ? `<div class="cite">${esc(fact.cite)}</div>` : ''}`;
  wrap.innerHTML = '';
  wrap.appendChild(card);
}
function renderHeute(){
  renderDaily();
  renderContinue();
  renderPathNext();
  renderDailyFact();
  maybeShowInstallHint();
}
function rememberActivePath(id){
  try { if (id) localStorage.setItem(ACTIVE_PATH_KEY, id); } catch (e) {}
}
function markPathOpened(path){
  if (!path) return;
  const o = pathState(path);
  if (!o.opened) {
    o.opened = true;
    if (!Array.isArray(o.seen)) o.seen = [];
    pathSave(path, o);
  }
  rememberActivePath(path.id);
}
function pathOpened(path){
  const st = pathState(path);
  if (st && (st.opened || (st.seen && st.seen.length))) return true;
  if (pathSteps(path).some(s => isDone(s.pid) || pctOf(s.pid) > 0)) return true;
  try {
    const o = JSON.parse(localStorage.getItem(LAST_KEY) || 'null');
    if (o && o.pathId === path.id) return true;
  } catch (e) {}
  return false;
}
function nextStationInfo(path){
  const stations = path.stations || [];
  const N = stations.length;
  const i = stations.findIndex(s => !stationDone(s));
  if (i < 0) return { done: true, n: N, N, st: stations[N - 1] || null };
  return { done: false, n: i + 1, N, st: stations[i] };
}
function pathKickerText(path){
  if (!pathOpened(path)) return t('pathKickerNew');
  const info = nextStationInfo(path);
  return t('stationOf', { n: info.n, N: info.N });
}
function storyOpened(st){
  const s = storyState(st);
  if (s && s.seen && s.seen.length) return true;
  return st.chapters.some(c => isDone(c.pid) || pctOf(c.pid) > 0);
}
function storyKickerText(st){
  if (!storyOpened(st)) return t('pathKickerNew');
  const N = st.chapters.length;
  const next = st.chapters.findIndex(c => !isDone(c.pid));
  const n = next < 0 ? N : next + 1;
  return t('chapterOf', { n, N });
}
function findActivePath(){
  const unfinished = p => pathOpened(p) && !nextStationInfo(p).done;
  try {
    const id = localStorage.getItem(ACTIVE_PATH_KEY);
    const p = PATHS.find(x => x.id === id);
    if (p && unfinished(p)) return p;
  } catch (e) {}
  try {
    const o = JSON.parse(localStorage.getItem(LAST_KEY) || 'null');
    if (o && o.pathId) {
      const p = PATHS.find(x => x.id === o.pathId);
      if (p && unfinished(p)) return p;
    }
  } catch (e) {}
  const openUnfinished = PATHS.find(unfinished);
  if (openUnfinished) return openUnfinished;
  const anyOpen = PATHS.find(pathOpened);
  if (anyOpen) return anyOpen;
  return null;
}
function firstOpenWork(st){
  if (!st || !st.works) return null;
  return st.works.find(w => !isDone(w.pid)) || st.works[0] || null;
}
function renderPathNext(){
  const wrap = $('#pathNextWrap'); if (!wrap) return;
  wrap.innerHTML = '';
  const path = findActivePath();
  if (!path) {
    const b = document.createElement('button');
    b.type = 'button';
    b.id = 'pathNextCard';
    b.className = 'pathnext invite';
    b.setAttribute('aria-label', t('pathInviteCta'));
    b.innerHTML = `<div class="tx"><div class="k">${t('pathInviteKicker')}</div>
      <div class="n">${t('pathInviteCta')}</div>
      <div class="s">${t('pathInviteLead')}</div></div><div class="go">›</div>`;
    b.onclick = () => { navigate({ kind: 'tab', tab: 'wege' }); showScreen('wege'); };
    wrap.appendChild(b);
    return;
  }
  const info = nextStationInfo(path);
  const b = document.createElement('button');
  b.type = 'button';
  b.id = 'pathNextCard';
  b.className = 'pathnext';
  let thumb = path.cover + '-thumb.jpg';
  let title = L(path, 'title');
  let sub, kicker;
  if (info.done) {
    const other = PATHS.find(p => p !== path && !nextStationInfo(p).done);
    if (other) {
      return renderPathNextFor(wrap, other, nextStationInfo(other));
    }
    kicker = t('pathNextKicker');
    sub = t('pathAllDone');
  } else {
    const stL = I.locStation(info.st);
    kicker = t('pathNextKicker');
    sub = (stL.place || '') + ' · ' + t('pathNextMeta', { n: info.n, N: info.N });
    const w = firstOpenWork(info.st);
    if (w && w.pid) thumb = w.pid + '-thumb.jpg';
  }
  b.setAttribute('aria-label', kicker + ': ' + title);
  b.innerHTML = `<div class="cv" style="background-image:url(data/${thumb})"></div>
    <div class="tx"><div class="k">${esc(kicker)}</div>
    <div class="n">${esc(title)}</div>
    <div class="s">${esc(sub)}</div></div><div class="go">›</div>`;
  b.onclick = () => { pathCtx = { path }; storyCtx = null; showPath(path); };
  wrap.appendChild(b);
}
function renderPathNextFor(wrap, path, info){
  const stL = I.locStation(info.st);
  const w = firstOpenWork(info.st);
  const thumb = (w && w.pid ? w.pid : path.cover) + '-thumb.jpg';
  const b = document.createElement('button');
  b.type = 'button';
  b.id = 'pathNextCard';
  b.className = 'pathnext';
  const kicker = t('pathNextKicker');
  const title = L(path, 'title');
  const sub = (stL.place || '') + ' · ' + t('pathNextMeta', { n: info.n, N: info.N });
  b.setAttribute('aria-label', kicker + ': ' + title);
  b.innerHTML = `<div class="cv" style="background-image:url(data/${thumb})"></div>
    <div class="tx"><div class="k">${esc(kicker)}</div>
    <div class="n">${esc(title)}</div>
    <div class="s">${esc(sub)}</div></div><div class="go">›</div>`;
  b.onclick = () => { pathCtx = { path }; storyCtx = null; showPath(path); };
  wrap.appendChild(b);
}

function doneCount(){
  let n = 0;
  for (const p of ALL) if (isDone(p.id)) n++;
  return n;
}
function artistLabel(artist){
  if (!artist) return '';
  if (I.lang === 'en') return enField({ artist }, 'artist') || artist;
  return artist;
}
function albumGroups(){
  const claimed = new Set();
  const groups = [];
  PATHS.forEach(path => {
    const ids = [];
    pathSteps(path).forEach(s => { if (!claimed.has(s.pid) && byId(s.pid)) { claimed.add(s.pid); ids.push(s.pid); } });
    // include duplicates? count unique only. Reused gallery works belong to the path group.
    groups.push({ kind: 'path', id: path.id, title: L(path, 'title'), ids });
  });
  // Fix: works already claimed wrongly skipped if they appeared in an earlier path — VG/Monet/Hokusai don't overlap.
  STORIES.forEach(st => {
    const ids = [];
    st.chapters.forEach(ch => { if (!claimed.has(ch.pid) && byId(ch.pid)) { claimed.add(ch.pid); ids.push(ch.pid); } });
    if (ids.length) groups.push({ kind: 'story', id: st.id, title: st.name, ids });
  });
  const rest = {};
  ALL.forEach(p => {
    if (claimed.has(p.id)) return;
    const art = p.artist || '';
    (rest[art] || (rest[art] = [])).push(p.id);
  });
  Object.keys(rest).sort((a, b) => artistLabel(a).localeCompare(artistLabel(b), I.lang === 'de' ? 'de-CH' : 'en')).forEach(art => {
    groups.push({ kind: 'artist', id: art, title: artistLabel(art), ids: rest[art] });
  });
  return groups;
}
function workLoreMeta(p){
  const story = L(p, 'story');
  if (story) return { texts: Array.isArray(story) ? story : [story], fallback: false };
  for (const path of PATHS) {
    const step = pathSteps(path).find(s => s.pid === p.id);
    if (step && step.w) {
      const w = I.locPathWork(step.w);
      if (w && w.text) return { texts: Array.isArray(w.text) ? w.text : [w.text], fallback: !!w.fallback };
    }
  }
  for (const st of STORIES) {
    const ch = st.chapters.find(c => c.pid === p.id);
    if (ch) {
      const chL = I.locChapter(st, ch);
      if (chL && chL.text) return { texts: Array.isArray(chL.text) ? chL.text : [chL.text], fallback: false };
    }
  }
  return { texts: [], fallback: false };
}
function workLore(p){ return workLoreMeta(p).texts; }
function workFactMeta(p){
  const facts = L(p, 'facts') || p.facts;
  if (facts && facts.length) return { fact: Array.isArray(facts) ? facts[0] : facts, fallback: false };
  for (const path of PATHS) {
    const step = pathSteps(path).find(s => s.pid === p.id);
    if (step && step.w) {
      const w = I.locPathWork(step.w);
      if (w && w.fact) return { fact: w.fact, fallback: !!w.fallback };
    }
  }
  for (const st of STORIES) {
    const ch = st.chapters.find(c => c.pid === p.id);
    if (ch) {
      const chL = I.locChapter(st, ch);
      if (chL && chL.fact) return { fact: chL.fact, fallback: false };
    }
  }
  return { fact: '', fallback: false };
}
function workFact(p){ return workFactMeta(p).fact; }
function renderAlbumEntry(){
  const wrap = $('#albumWrap'); if (!wrap) return;
  const n = doneCount(), N = ALL.length;
  const b = document.createElement('button');
  b.type = 'button';
  b.id = 'albumCard';
  b.className = 'albumcard';
  b.setAttribute('aria-label', t('albumAria'));
  b.innerHTML = `<div class="tx"><div class="k">${t('albumOpen')}</div><div class="s">${t('albumCount', { n, N })}</div></div><div class="go">›</div>`;
  b.onclick = () => showAlbum();
  wrap.innerHTML = '';
  wrap.appendChild(b);
}
function showAlbum(){
  hideSheets();
  S = null;
  navigate({ kind: 'tab', tab: 'album' });
  showScreen('album');
}
function renderAlbum(){
  const box = $('#albumBody'); if (!box) return;
  const groups = albumGroups();
  const n = doneCount(), N = ALL.length;
  let html = `<div class="albumsum">${t('albumCount', { n, N })}</div>`;
  if (!n) {
    html += `<div class="albumempty">${t('albumEmpty')}</div>`;
    box.innerHTML = html;
    return;
  }
  groups.forEach(g => {
    const doneIds = g.ids.filter(id => isDone(id));
    if (!doneIds.length) return;
    html += `<section class="agroup" data-group="${esc(g.id)}"><h2>${esc(g.title)}<span class="cnt">${t('albumGroup', { n: doneIds.length, N: g.ids.length })}</span></h2><div class="awall">`;
    doneIds.forEach(id => {
      const p = byId(id); if (!p) return;
      html += `<button type="button" class="atile" data-id="${esc(id)}" aria-label="${esc(t('albumViewAria', { title: L(p, 'title') }))}"><img src="data/${esc(id)}-thumb.jpg" alt="" loading="lazy" width="200" height="200"></button>`;
    });
    html += `</div></section>`;
  });
  box.innerHTML = html;
  box.querySelectorAll('.atile').forEach(b => {
    b.onclick = () => showAlbumView(b.getAttribute('data-id'));
  });
}
function showAlbumView(id, opts){
  const p = byId(id); if (!p) return;
  albumViewId = id;
  if (!opts || !opts.noRoute) navigate({ kind: 'albumView', id });
  const title = L(p, 'title');
  $('#avTitle').textContent = title;
  $('#avMeta').textContent = `${L(p, 'artist')} · ${p.year}`;
  const lore = workLoreMeta(p);
  $('#avText').innerHTML = lore.texts.map(tx => `<p>${tx}</p>`).join('');
  const fb = $('#avLangFallback');
  if (fb) {
    if (lore.fallback) { fb.textContent = t('langFallback'); fb.classList.remove('hidden'); fb.hidden = false; }
    else { fb.textContent = ''; fb.classList.add('hidden'); fb.hidden = true; }
  }
  const factM = workFactMeta(p);
  $('#avFact').textContent = factM.fact || '';
  $('#avFactWrap').classList.toggle('hidden', !factM.fact);
  const ffb = $('#avFactFallback');
  if (ffb) {
    if (factM.fallback && factM.fact) { ffb.textContent = t('langFallback'); ffb.classList.remove('hidden'); ffb.hidden = false; }
    else { ffb.textContent = ''; ffb.classList.add('hidden'); ffb.hidden = true; }
  }
  $('#avMuseum').textContent = t('museum', { m: L(p, 'museum') });
  $('#avImg').innerHTML = `<img src="data/${esc(p.id)}-orig.jpg" alt="${esc(title)}">`;
  const sh = $('#albumView');
  sh.classList.remove('hidden');
  const cl = $('#avClose'); if (cl) cl.focus();
}
function closeAlbumView(){
  albumViewId = null;
  $('#albumView').classList.add('hidden');
  if ((location.hash || '').indexOf('#album/') === 0) backOr({ kind: 'tab', tab: 'album' });
}

function loadMiles(){
  try { return JSON.parse(localStorage.getItem(MILES_KEY) || 'null') || {}; } catch (e) { return {}; }
}
function saveMiles(o){ try { localStorage.setItem(MILES_KEY, JSON.stringify(o)); } catch (e) {} }
function justCompletedStation(pid){
  for (const path of PATHS) {
    for (const st of (path.stations || [])) {
      if (!(st.works || []).some(w => w.pid === pid)) continue;
      if (stationDone(st)) return st;
    }
  }
  return null;
}
let mtoastT = 0;
function mtoast(msg){
  const el = $('#mtoast'); if (!el || !msg) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(mtoastT);
  mtoastT = setTimeout(() => el.classList.remove('show'), 3800);
}
function maybeMilestones(pid){
  const seen = loadMiles();
  const n = doneCount();
  let key = null, msg = null;
  if (n === 1 && !seen.first) { key = 'first'; msg = t('mileFirst'); }
  else if (n === 10 && !seen.n10) { key = 'n10'; msg = t('mile10'); }
  else if (n === 50 && !seen.n50) { key = 'n50'; msg = t('mile50'); }
  if (!key && !seen.station && justCompletedStation(pid)) { key = 'station'; msg = t('mileStation'); }
  if (!key) return;
  seen[key] = 1;
  saveMiles(seen);
  setTimeout(() => mtoast(msg), 700);
}
function afterFinish(pid){
  const pick = pickDaily();
  if (pick && pick.id === pid) bumpStreak();
  maybeMilestones(pid);
  PATHS.forEach(path => { if (pathIsComplete(path) && pathSteps(path).some(s => s.pid === pid)) recordCertDate(path); });
}
function celebrateIfNeeded(){
  if (!S || !S.justFinished) return;
  S.justFinished = false;
  afterFinish(S.p.id);
}
function openSettings(){
  applyCalm();
  const pn = $('#playerName'); if (pn) pn.value = loadPlayerName();
  revealSheet('#settings');
  const sw = $('#calmToggle'); if (sw) sw.focus();
}
function closeSettings(){ closeTopSheet(); }
function bindDelight(){
  if ($('#setBtn')) $('#setBtn').onclick = openSettings;
  if ($('#setClose')) $('#setClose').onclick = closeSettings;
  if ($('#calmToggle')) $('#calmToggle').onclick = () => {
    setCalm(!calmOn());
    galGrid = null; galPage = 0;
    try { sessionStorage.setItem('masilano.galPage', '0'); } catch (e) {}
    renderGallery();
    if ($('#album') && $('#album').classList.contains('active')) renderAlbum();
  };
  if ($('#albumBack')) $('#albumBack').onclick = () => { closeAlbumView(); backOr({ kind: 'tab', tab: 'album' }); };
  if ($('#avClose')) $('#avClose').onclick = closeAlbumView;
  if ($('#avShare')) $('#avShare').onclick = () => { const p = currentSharePainting(); if (p) sharePainting(p); };
  const syncNameInputs = (val) => {
    const v = savePlayerName(val);
    ['#playerName', '#certName'].forEach(sel => { const el = $(sel); if (el && el.value !== v && document.activeElement !== el) el.value = v; });
    return v;
  };
  if ($('#playerName')) {
    $('#playerName').value = loadPlayerName();
    $('#playerName').addEventListener('change', e => syncNameInputs(e.target.value));
    $('#playerName').addEventListener('blur', e => syncNameInputs(e.target.value));
  }
  if ($('#certName')) {
    $('#certName').addEventListener('input', () => {
      clearTimeout(certRenderT);
      certRenderT = setTimeout(() => {
        savePlayerName($('#certName').value);
        const pn = $('#playerName'); if (pn) pn.value = loadPlayerName();
        refreshCertPreview();
      }, 400);
    });
    $('#certName').addEventListener('change', e => {
      savePlayerName(e.target.value);
      const pn = $('#playerName'); if (pn) pn.value = loadPlayerName();
      refreshCertPreview();
    });
  }
  if ($('#certShare')) $('#certShare').onclick = () => { if (certCtx && certCtx.path) shareCertificate(certCtx.path); };
  if ($('#certClose')) $('#certClose').onclick = () => closeTopSheet();
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if ($('#certView') && !$('#certView').classList.contains('hidden')) { closeTopSheet(); e.preventDefault(); return; }
    if ($('#albumView') && !$('#albumView').classList.contains('hidden')) { closeAlbumView(); e.preventDefault(); return; }
    if ($('#settings') && !$('#settings').classList.contains('hidden')) { closeSettings(); e.preventDefault(); return; }
    if ($('#filterSheet') && !$('#filterSheet').classList.contains('hidden')) { closeTopSheet(); e.preventDefault(); return; }
    if ($('#sources') && !$('#sources').classList.contains('hidden')) { closeTopSheet(); e.preventDefault(); }
  });
}

// ---------- last picture / continue ----------
function hasAnyProgress(){
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k) continue;
      if (k.indexOf('masilano.color.v1.') === 0) {
        const s = JSON.parse(localStorage.getItem(k) || 'null');
        if (s && s.filled && s.filled.length) return true;
      }
      if (k.indexOf('masilano.story.v1.') === 0 || k.indexOf('masilano.path.v1.') === 0) {
        const s = JSON.parse(localStorage.getItem(k) || 'null');
        if (s && s.seen && s.seen.length) return true;
      }
    }
  } catch (e) {}
  return false;
}
function rememberLast(p){
  if (!p || isDone(p.id)) { if (p) clearLastIf(p.id); return; }
  const o = { id: p.id, at: Date.now(), from: 'gallery' };
  if (pathCtx && pathCtx.path) { o.from = 'path'; o.pathId = pathCtx.path.id; }
  else if (storyCtx && storyCtx.story) { o.from = 'story'; o.storyId = storyCtx.story.id; }
  try { localStorage.setItem(LAST_KEY, JSON.stringify(o)); } catch (e) {}
}
function clearLastIf(id){
  try {
    const o = JSON.parse(localStorage.getItem(LAST_KEY) || 'null');
    if (o && o.id === id) localStorage.removeItem(LAST_KEY);
  } catch (e) {}
}
function findLastWork(){
  try {
    const o = JSON.parse(localStorage.getItem(LAST_KEY) || 'null');
    if (o && o.id) {
      const p = byId(o.id);
      if (p && !isDone(p.id) && pctOf(p.id) > 0) return { p, meta: o };
    }
  } catch (e) {}
  let best = null, bestPct = 0;
  for (const p of ALL) {
    if (isDone(p.id)) continue;
    const pct = pctOf(p.id);
    if (pct > bestPct) { bestPct = pct; best = p; }
  }
  return best ? { p: best, meta: { from: 'gallery' } } : null;
}
function renderContinue(){
  const wrap = $('#continueWrap');
  if (!wrap) return;
  const last = findLastWork();
  const had = !!wrap.querySelector('#continueCard');
  if (!last) {
    if (had) { wrap.innerHTML = ''; galGrid = null; }
    else wrap.innerHTML = '';
    return;
  }
  const p = last.p, pct = Math.max(1, pctOf(p.id));
  const b = document.createElement('button');
  b.type = 'button';
  b.id = 'continueCard';
  b.className = 'contcard';
  b.setAttribute('aria-label', t('continueAria', { title: L(p, 'title') }));
  b.innerHTML = `<div class="cv" style="background-image:url(data/${p.id}-thumb.jpg)"></div>
    <div class="tx"><div class="k">${t('continueKicker')}</div><div class="n">${L(p,'title')}</div>
    <div class="s">${L(p,'artist')} · ${pct} %</div>
    <div class="bar"><div style="width:${pct}%"></div></div></div><div class="go">›</div>`;
  b.onclick = () => resumeLast();
  wrap.innerHTML = '';
  wrap.appendChild(b);
  if (!had) galGrid = null;
}
async function resumeLast(){
  const last = findLastWork();
  if (!last) return;
  const p = last.p, m = last.meta || {};
  pathCtx = null; storyCtx = null;
  if (m.from === 'path') {
    const path = PATHS.find(x => x.id === (m.pathId || 'vangogh')) || PATHS[0];
    if (path) {
      const step = pathSteps(path).find(s => s.pid === p.id);
      if (step) pathCtx = { path, step, pid: p.id };
    }
  } else if (m.from === 'story') {
    const st = STORIES.find(x => x.id === m.storyId);
    if (st) {
      const idx = st.chapters.findIndex(c => c.pid === p.id);
      if (idx >= 0) storyCtx = { story: st, idx, pid: p.id };
    }
  }
  hideSheets();
  await openPainting(p);
}

// ---------- first-run onboarding ----------
let obPage = 0;
const OB_N = 3;
function onboardIsDone(){
  try { return localStorage.getItem(ONBOARD_KEY) === 'done'; } catch (e) { return false; }
}
function markOnboardDone(){ try { localStorage.setItem(ONBOARD_KEY, 'done'); } catch (e) {} }
function renderOnboard(){
  const n = obPage + 1;
  $('#obStep').textContent = t('obStep', { n, N: OB_N });
  $('#obTitle').textContent = t('ob' + n + 'Title');
  $('#obBody').textContent = t('ob' + n + 'Body');
  $('#obNext').textContent = n === OB_N ? t('obStart') : t('obNext');
}
function showOnboard(){
  obPage = 0;
  renderOnboard();
  const el = $('#onboard');
  el.hidden = false;
  el.classList.remove('hidden');
  document.body.classList.add('onboarding');
  const gal = $('#gallery'); if (gal) gal.setAttribute('aria-hidden', 'true');
}
function hideOnboard(){
  const el = $('#onboard');
  el.hidden = true;
  el.classList.add('hidden');
  document.body.classList.remove('onboarding');
  const gal = $('#gallery'); if (gal) gal.removeAttribute('aria-hidden');
}
function completeOnboard(){
  markOnboardDone();
  hideOnboard();
  galGrid = null;
  maybeShowInstallHint();
  renderStoryEntry();
  renderGallery();
}
function maybeStartOnboard(){
  if (onboardIsDone()) return false;
  if (hasAnyProgress()) { markOnboardDone(); return false; }
  showOnboard();
  return true;
}
if ($('#obSkip')) $('#obSkip').onclick = () => completeOnboard();
if ($('#obNext')) $('#obNext').onclick = () => {
  if (obPage < OB_N - 1) { obPage++; renderOnboard(); }
  else completeOnboard();
};

// ---------- install-to-home hint ----------
let deferredInstall = null;
window.addEventListener('beforeinstallprompt', ev => {
  ev.preventDefault();
  deferredInstall = ev;
  maybeShowInstallHint();
});
window.addEventListener('appinstalled', () => {
  deferredInstall = null;
  hideInstallHint(true);
});
function installIsDismissed(){
  try { return localStorage.getItem(INSTALL_KEY) === 'dismissed'; } catch (e) { return false; }
}
function maybeShowInstallHint(){
  const el = $('#installHint');
  if (!el) return;
  const onboarding = $('#onboard') && !$('#onboard').classList.contains('hidden');
  const show = onboardIsDone() && !onboarding && !isStandalone() && !installIsDismissed();
  if (!show) {
    const had = !el.classList.contains('hidden');
    el.classList.add('hidden'); el.hidden = true;
    if (had) galGrid = null;
    return;
  }
  const had = !el.classList.contains('hidden') && !el.hidden;
  el.innerHTML = `<div class="ih-tx"><div class="ih-t">${t('installTitle')}</div><div class="ih-s">${t('installBody')}</div></div>
    <button type="button" class="ih-add" id="ihAdd">${t('installAdd')}</button>
    <button type="button" class="ih-x" id="ihDismiss" aria-label="${t('installDismiss')}">×</button>`;
  el.classList.remove('hidden'); el.hidden = false;
  el.setAttribute('role', 'region');
  el.setAttribute('aria-label', t('installTitle'));
  $('#ihAdd').onclick = onInstallAdd;
  $('#ihDismiss').onclick = () => hideInstallHint(true);
  if (!had) galGrid = null;
}
function hideInstallHint(persist){
  const el = $('#installHint');
  if (el) { el.classList.add('hidden'); el.hidden = true; }
  if (persist) try { localStorage.setItem(INSTALL_KEY, 'dismissed'); } catch (e) {}
  galGrid = null;
  if ($('#gallery') && $('#gallery').classList.contains('active')) renderGallery();
}
function isIOSDevice(){
  const ua = navigator.userAgent || '';
  return /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}
async function onInstallAdd(){
  if (deferredInstall) {
    try {
      deferredInstall.prompt();
      const res = await deferredInstall.userChoice;
      deferredInstall = null;
      if (res && res.outcome === 'accepted') { hideInstallHint(true); return; }
    } catch (e) {}
  }
  $('#ihBody').textContent = isIOSDevice() ? t('installHowIOS') : t('installHowGeneric');
  revealSheet('#installHow');
}
if ($('#ihGotIt')) $('#ihGotIt').onclick = () => { $('#installHow').classList.add('hidden'); hideInstallHint(true); };

// ---------- share finished painting + certificate ----------
function currentSharePainting(){
  if (S && S.p) return S.p;
  if (albumViewId) {
    const av = $('#albumView');
    if (av && !av.classList.contains('hidden')) return byId(albumViewId);
  }
  if (pathCtx && pathCtx.pid) return byId(pathCtx.pid);
  if (storyCtx && storyCtx.pid) return byId(storyCtx.pid);
  return null;
}
function appUrl(){
  try {
    const h = location.hostname;
    if (h && h !== 'localhost' && h !== '127.0.0.1') {
      let path = location.pathname.replace(/index\.html$/, '');
      if (!path.endsWith('/')) path = path.replace(/[^/]+$/, '') || '/';
      return location.origin + path;
    }
  } catch (e) {}
  return 'https://xxxgithuberxxx.github.io/masilano-farben/';
}
function loadPlayerName(){
  try { return (localStorage.getItem(PLAYER_NAME_KEY) || '').trim(); } catch (e) { return ''; }
}
function savePlayerName(name){
  try {
    name = String(name || '').trim().slice(0, 60);
    if (name) localStorage.setItem(PLAYER_NAME_KEY, name);
    else localStorage.removeItem(PLAYER_NAME_KEY);
  } catch (e) {}
  return name;
}
function pathYearSpan(path){
  const part = (path && (path.part || L(path, 'part'))) || '';
  let m = String(part).match(/(\d{3,4})\s*[–-]\s*(\d{3,4})/);
  if (m) return { from: m[1], to: m[2] };
  const life = (path && path.life) || '';
  m = String(life).match(/(\d{3,4})\s*[–-]\s*(\d{3,4})/);
  if (m) return { from: m[1], to: m[2] };
  return { from: '', to: '' };
}
function pathIsComplete(path){
  if (!path) return false;
  const steps = pathSteps(path);
  return steps.length > 0 && pathDoneCount(path) === steps.length;
}
function recordCertDate(path){
  if (!path || !pathIsComplete(path)) return null;
  const key = CERT_DATE_KEY(path.id);
  try {
    let d = localStorage.getItem(key);
    if (!d) {
      const now = new Date();
      d = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
      localStorage.setItem(key, d);
    }
    return d;
  } catch (e) { return null; }
}
function certDateText(iso){
  let d;
  if (iso && /^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    const p = iso.split('-');
    d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  } else d = new Date();
  const loc = { de: 'de-CH', en: 'en-GB', es: 'es-ES', fr: 'fr-FR', it: 'it-IT' }[I.lang] || 'de-CH';
  try { return d.toLocaleDateString(loc, { day: 'numeric', month: 'long', year: 'numeric' }); }
  catch (e) { return iso || ''; }
}
function wrapText(ctx, text, maxW){
  const words = String(text || '').split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? line + ' ' + w : w;
    if (ctx.measureText(next).width <= maxW) line = next;
    else { if (line) lines.push(line); line = w; }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [''];
}
function drawSpaced(ctx, text, cx, y, tracking){
  const chars = String(text).split('');
  const widths = chars.map(ch => ctx.measureText(ch).width);
  let total = widths.reduce((a, b) => a + b, 0) + tracking * Math.max(0, chars.length - 1);
  let x = cx - total / 2;
  ctx.textAlign = 'left';
  chars.forEach((ch, i) => { ctx.fillText(ch, x, y); x += widths[i] + tracking; });
}
function roundRectPath(ctx, x, y, w, h, r){
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}
async function renderShareCard(p){
  const img = await loadImg('data/' + p.id + '-orig.jpg');
  const W = 1080, pad = 80, maxImgW = W - pad * 2, maxImgH = 900;
  let iw = maxImgW, ih = Math.round(img.height * (iw / img.width));
  if (ih > maxImgH) { ih = maxImgH; iw = Math.round(img.width * (ih / img.height)); }
  const title = L(p, 'title') || p.title;
  const artist = (L(p, 'artist') || p.artist) + (p.year ? '  ·  ' + p.year : '');
  const brand = t('shareBrand');
  const url = appUrl();
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  ctx.font = '600 52px Georgia, "Times New Roman", serif';
  const tLines = wrapText(ctx, title, maxImgW);
  ctx.font = '28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  const aLines = wrapText(ctx, artist, maxImgW);
  const topY = 96;
  const imgY = topY + 28;
  const textY = imgY + ih + 68;
  const H = textY + tLines.length * 62 + aLines.length * 38 + 28 + 22 + 70 + 80;
  c.width = W; c.height = H;
  ctx.fillStyle = '#f6f3ee';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#6a635c';
  ctx.font = '700 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  drawSpaced(ctx, 'MASILANO', W / 2, topY, 10);
  const ix = Math.round((W - iw) / 2);
  ctx.save();
  ctx.shadowColor = 'rgba(60,40,20,0.18)';
  ctx.shadowBlur = 28;
  ctx.shadowOffsetY = 8;
  roundRectPath(ctx, ix, imgY, iw, ih, 18);
  ctx.fillStyle = '#eee';
  ctx.fill();
  ctx.restore();
  ctx.save();
  roundRectPath(ctx, ix, imgY, iw, ih, 18);
  ctx.clip();
  ctx.drawImage(img, ix, imgY, iw, ih);
  ctx.restore();
  let y = textY;
  ctx.fillStyle = '#2b2722';
  ctx.font = '600 52px Georgia, "Times New Roman", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  tLines.forEach(line => { ctx.fillText(line, W / 2, y); y += 62; });
  ctx.fillStyle = '#5f564c';
  ctx.font = '28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  aLines.forEach(line => { ctx.fillText(line, W / 2, y); y += 38; });
  y += 16;
  ctx.strokeStyle = '#c79a4e';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(W / 2 - 48, y); ctx.lineTo(W / 2 + 48, y); ctx.stroke();
  y += 36;
  ctx.fillStyle = '#6a4a22';
  ctx.font = '600 22px Georgia, "Times New Roman", serif';
  ctx.fillText(brand, W / 2, y);
  y += 32;
  ctx.fillStyle = '#8a7d70';
  ctx.font = '400 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  ctx.fillText(url, W / 2, y);
  return new Promise((resolve, reject) => c.toBlob(b => b ? resolve(b) : reject(new Error('blob')), 'image/png'));
}
function downloadBlob(blob, name){
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
}
async function shareBlobFile(blob, name, title, text, savedKey){
  const file = new File([blob], name, { type: 'image/png' });
  try {
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ title, text, files: [file] });
      return blob;
    }
    if (navigator.share) {
      downloadBlob(blob, name);
      await navigator.share({ title, text });
      return blob;
    }
  } catch (e) {
    if (e && e.name === 'AbortError') return blob;
    downloadBlob(blob, name);
    toast(t('shareFailed'));
    return blob;
  }
  downloadBlob(blob, name);
  toast(t(savedKey || 'shareSaved'));
  return blob;
}
async function sharePainting(p){
  if (!p) return null;
  try {
    const blob = await renderShareCard(p);
    const name = 'masilano-' + p.id + '.png';
    const title = L(p, 'title') || p.title;
    const text = t('shareText', { title, artist: L(p, 'artist') || p.artist });
    return await shareBlobFile(blob, name, title, text, 'shareSaved');
  } catch (e) {
    toast(t('shareFailed'));
    return null;
  }
}
async function renderCertificateCard(path, name){
  if (!path) return null;
  name = (name == null ? loadPlayerName() : String(name || '')).trim().slice(0, 60);
  const years = pathYearSpan(path);
  const n = pathSteps(path).length;
  const iso = recordCertDate(path);
  const journey = t('certJourney', { name: path.name, from: years.from, to: years.to });
  const count = t('certCount', { n });
  const issued = t('certDate', { date: certDateText(iso) });
  const forName = name ? t('certFor', { name }) : '';
  const brand = t('shareBrand');
  const url = appUrl();
  const title = L(path, 'title') || path.title;
  const kicker = t('certKicker');
  let img = null;
  try { if (path.cover) img = await loadImg('data/' + path.cover + '-orig.jpg'); } catch (e) {}
  const W = 1080, pad = 80;
  const maxImgW = 520, maxImgH = 420;
  let iw = 0, ih = 0;
  if (img) {
    iw = maxImgW; ih = Math.round(img.height * (iw / img.width));
    if (ih > maxImgH) { ih = maxImgH; iw = Math.round(img.width * (ih / img.height)); }
  }
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  ctx.font = '600 54px Georgia, "Times New Roman", serif';
  const tLines = wrapText(ctx, title, W - pad * 2);
  ctx.font = '400 32px Georgia, "Times New Roman", serif';
  const jLines = wrapText(ctx, journey, W - pad * 2 - 20);
  const top = 100;
  const imgY = top + 70;
  const textY = imgY + (ih || 0) + 72;
  const H = textY + tLines.length * 64 + jLines.length * 44 + 38 + 38 + (forName ? 44 : 0) + 170;
  c.width = W; c.height = H;
  ctx.fillStyle = '#f4efe6';
  ctx.fillRect(0, 0, W, H);
  const m = 36;
  ctx.fillStyle = '#fbf7f0';
  roundRectPath(ctx, m, m, W - m * 2, H - m * 2, 12);
  ctx.fill();
  ctx.strokeStyle = '#c79a4e';
  ctx.lineWidth = 3;
  roundRectPath(ctx, m + 10, m + 10, W - (m + 10) * 2, H - (m + 10) * 2, 8);
  ctx.stroke();
  ctx.lineWidth = 1;
  roundRectPath(ctx, m + 18, m + 18, W - (m + 18) * 2, H - (m + 18) * 2, 6);
  ctx.stroke();
  ctx.fillStyle = '#6a4a22';
  ctx.font = '700 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  drawSpaced(ctx, brand.toUpperCase(), W / 2, top, 8);
  ctx.fillStyle = '#c79a4e';
  ctx.font = '700 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(kicker.toUpperCase(), W / 2, top + 36);
  if (img) {
    const ix = Math.round((W - iw) / 2);
    ctx.save();
    ctx.shadowColor = 'rgba(60,40,20,0.18)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 6;
    roundRectPath(ctx, ix, imgY, iw, ih, 16);
    ctx.fillStyle = '#eee';
    ctx.fill();
    ctx.restore();
    ctx.save();
    roundRectPath(ctx, ix, imgY, iw, ih, 16);
    ctx.clip();
    ctx.drawImage(img, ix, imgY, iw, ih);
    ctx.restore();
  }
  let y = textY;
  ctx.fillStyle = '#2b2722';
  ctx.font = '600 54px Georgia, "Times New Roman", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  tLines.forEach(line => { ctx.fillText(line, W / 2, y); y += 64; });
  y += 8;
  ctx.strokeStyle = '#c79a4e';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(W / 2 - 48, y); ctx.lineTo(W / 2 + 48, y); ctx.stroke();
  y += 44;
  ctx.fillStyle = '#3f3a34';
  ctx.font = '400 32px Georgia, "Times New Roman", serif';
  jLines.forEach(line => { ctx.fillText(line, W / 2, y); y += 44; });
  y += 14;
  ctx.fillStyle = '#5f564c';
  ctx.font = '600 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  ctx.fillText(count, W / 2, y); y += 38;
  ctx.font = '400 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  ctx.fillText(issued, W / 2, y); y += 38;
  if (forName) {
    ctx.fillStyle = '#6a4a22';
    ctx.font = 'italic 600 28px Georgia, "Times New Roman", serif';
    ctx.fillText(forName, W / 2, y); y += 44;
  }
  y += 28;
  ctx.fillStyle = '#8a7d70';
  ctx.font = '400 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  ctx.fillText(url, W / 2, y);
  return new Promise((resolve, reject) => c.toBlob(b => b ? resolve(b) : reject(new Error('blob')), 'image/png'));
}
let certRenderT = 0;
async function refreshCertPreview(){
  if (!certCtx || !certCtx.path) return null;
  const name = ($('#certName') && $('#certName').value) || loadPlayerName();
  try {
    const blob = await renderCertificateCard(certCtx.path, name);
    certCtx.blob = blob;
    const img = $('#certImg');
    if (img) {
      const next = URL.createObjectURL(blob);
      const prev = img.getAttribute('data-blob') || '';
      img.src = next;
      img.setAttribute('data-blob', next);
      img.alt = t('certAria', { title: L(certCtx.path, 'title') });
      if (prev && prev.indexOf('blob:') === 0) setTimeout(() => URL.revokeObjectURL(prev), 2000);
    }
    return blob;
  } catch (e) { return null; }
}
function showCertificate(path){
  if (!path || !pathIsComplete(path)) return;
  certCtx = { path };
  recordCertDate(path);
  const inp = $('#certName');
  if (inp) inp.value = loadPlayerName();
  const heading = $('#certHeading');
  if (heading) heading.textContent = t('certKicker');
  hideSheets();
  const card = $('#certView .card'); if (card) card.scrollTop = 0;
  revealSheet('#certView');
  refreshCertPreview();
}
async function shareCertificate(path){
  if (!path) return null;
  try {
    const name = ($('#certName') && !$('#certView').classList.contains('hidden') ? $('#certName').value : loadPlayerName());
    const blob = (certCtx && certCtx.path === path && certCtx.blob) ? certCtx.blob : await renderCertificateCard(path, name);
    const file = 'masilano-urkunde-' + path.id + '.png';
    const title = t('cert') + ' · ' + (L(path, 'title') || path.title);
    return await shareBlobFile(blob, file, title, t('certJourney', Object.assign({ name: path.name }, pathYearSpan(path))), 'certSaved');
  } catch (e) {
    toast(t('shareFailed'));
    return null;
  }
}

// ---------- PWA: service worker ----------

let swReload = false;
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
  const hadCtrl = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(e => console.warn('SW', e));
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadCtrl) return;           // first install: nothing to reload
    if (S) swReload = true; else location.reload();
  });
}
function refreshLang(){
  ingestPathData();
  galGrid = null;
  I.applyStatic();
  const onPath = document.getElementById('path')?.classList.contains('active');
  const onCh = document.getElementById('chapters')?.classList.contains('active');
  if (onPath && pathCtx && pathCtx.path) showPath(pathCtx.path, { noRoute: true });
  else if (onCh && storyCtx && storyCtx.story) showChapters(storyCtx.story, { noRoute: true });
  if (pathCtx && pathCtx.step && pathCtx.path && $('#chapter') && !$('#chapter').classList.contains('hidden')) showPathWork(pathCtx.path, pathCtx.step);
  if (pathCtx && pathCtx.step && $('#chDone') && !$('#chDone').classList.contains('hidden')) showPathDone();
  if (!$('#onboard').classList.contains('hidden')) renderOnboard();
  maybeShowInstallHint();
  applyCalm();
  syncTabBar();
  renderHeute();
  renderStoryEntry();
  placeFilterPanel();
  renderFilters();
  renderGallery();
  if ($('#album') && $('#album').classList.contains('active')) renderAlbum();
}
window.__i18nOnChange = refreshLang;
document.addEventListener('click', e => {
  const b = e.target.closest('#langSwitch button[data-lang], #obLang button[data-lang]');
  if (!b) return;
  I.setLang(b.getAttribute('data-lang'));
});
I.applyStatic();
applyCalm();
bindDelight();
bindTabs();
bindFilters();
maybeStartOnboard();
window.__pathTextsReady = false;
function paintStartShell(){
  try {
    const r = parseHash();
    let tab = 'heute';
    if (r.kind === 'tab') tab = r.tab || 'heute';
    else if (r.kind === 'albumView') tab = 'album';
    else if (r.kind === 'paint') tab = storedTab();
    document.body.classList.remove('tabless');
    const elId = tab === 'galerie' ? 'gallery' : tab;
    document.querySelectorAll('.tab-screen').forEach(s => s.classList.toggle('active', s.id === elId));
    document.querySelectorAll('.screen.flow').forEach(s => s.classList.remove('active'));
    currentTab = tab;
    syncTabBar();
  } catch (e) {}
}
paintStartShell();
function startUi(){
  ingestPathData();
  window.__pathTextsReady = !!(PATHS.length >= 8);
  bootRoute();
  maybeShowInstallHint();
  if ((currentTab || 'heute') === 'heute') renderHeute();
  if ((currentTab || 'heute') === 'wege') renderStoryEntry();
}
if (I.ensurePathTexts) I.ensurePathTexts().then(startUi, function (err) { console.error(err); startUi(); });
else startUi();
})();
