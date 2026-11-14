(() => {
'use strict';
const $ = s => document.querySelector(s);
const KEY = id => 'masilano.color.v1.' + id;
const P = window.PAINTINGS;
const STORIES = window.STORIES || [];
const ALL = P.concat((window.STORY_WORKS || []).filter(w => !P.some(p => p.id === w.id)));
const byId = id => ALL.find(p => p.id === id);
const SKEY = id => 'masilano.story.v1.' + id;
const cache = {};

// ---------- storage ----------
function loadSave(id){ try{ return JSON.parse(localStorage.getItem(KEY(id))) || null; }catch(e){ return null; } }
function writeSave(id, obj){ try{ localStorage.setItem(KEY(id), JSON.stringify(obj)); }catch(e){} }

// ---------- gallery ----------
const SORT_KEY = 'masilano.galSort.v5';
const LEVEL_RANK = {leicht:0, mittel:1, schwer:2};
function levelOf(p){
  const r = p.regions || 999;
  return r < 220 ? 'leicht' : r < 400 ? 'mittel' : 'schwer';
}
function levelLabel(lv){ return lv === 'leicht' ? 'Leicht' : lv === 'mittel' ? 'Mittel' : 'Schwer'; }
let galSort = 'gallery';
try { const s = localStorage.getItem(SORT_KEY); if (s === 'easy' || s === 'gallery') galSort = s; } catch(e){}
function fold(s){
  return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
function matchesQuery(p, q, extra){
  if (!q) return true;
  const hay = fold([p.title, p.artist, p.year, p.museum, extra].filter(Boolean).join(' '));
  return q.split(/\s+/).every(tok => tok && hay.includes(tok));
}
let galQuery = '';
function galleryList(){
  const q = fold(galQuery);
  const arr = P.filter(p => matchesQuery(p, q));
  if (galSort === 'easy') {
    arr.sort((a,b) => (LEVEL_RANK[levelOf(a)] - LEVEL_RANK[levelOf(b)]) || ((a.regions || 999) - (b.regions || 999)) || a.title.localeCompare(b.title, 'de-CH'));
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
      if (p && matchesQuery(p, q, st.name + ' ' + ch.title)) hits.push({ p, st, ch });
    }
  }
  return hits;
}
function openStoryHit(st, p){
  storyCtx = { story: st };
  showChapters(st);
  const i = st.chapters.findIndex(c => c.pid === p.id);
  if (i < 0) return;
  if (chUnlocked(st, i)) showChapter(st, i);
  else ctoast('Dieses Bild gehört zur Geschichte von ' + st.name + '. Es wird Kapitel für Kapitel freigeschaltet.');
}
function renderSortBar(){
  const bar = $('#sortBar'); if (!bar) return;
  [...bar.querySelectorAll('button')].forEach(b => {
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
function paintGalCard(item){
  const p = item.p;
  const s = loadSave(p.id);
  const pct = s ? Math.floor(100 * (s.filled.length / s.total)) : 0;
  const done = s && s.filled.length >= s.total;
  const b = document.createElement('button');
  if (item.kind === 'story') {
    b.className = 'pc storyc';
    const doneTag = done ? '<span class="badge fin">✓ Fertig</span>' : '';
    b.innerHTML = `<div class="im ${done ? '' : 'todo'}" style="background-image:url(data/${p.id}-${done ? 'orig.jpg' : 'thumb.jpg'})">
      <div class="tags"><span class="lv story">Geschichte</span></div>${doneTag}</div>
      <div class="tx"><div class="t">${p.title}</div><div class="a">${p.artist}, ${p.year}</div>
      <div class="hint">In der Geschichte von ${item.st.name}</div></div>`;
    b.onclick = () => openStoryHit(item.st, p);
  } else {
    const lv = levelOf(p);
    const tags = `<div class="tags"><span class="lv ${lv}">${levelLabel(lv)}</span>${p.fresh ? '<span class="lv neu">Neu</span>' : ''}</div>`;
    b.className = 'pc';
    b.innerHTML = `<div class="im ${done ? '' : 'todo'}" style="background-image:url(data/${p.id}-${done ? 'orig.jpg' : 'thumb.jpg'})">
      ${tags}${done ? '<span class="badge fin">✓ Fertig</span>' : (s && s.filled.length ? `<span class="badge">${Math.max(1, pct)} %</span>` : '')}</div>
      <div class="tx"><div class="t">${p.title}</div><div class="a">${p.artist}, ${p.year}</div>
      <div class="bar"><div style="width:${done ? 100 : pct}%"></div></div></div>`;
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
  const list = galleryList();
  const storyHits = storySearchHits();
  const items = list.map(p => ({ kind:'gal', p })).concat(storyHits.map(h => ({ kind:'story', p:h.p, st:h.st })));
  renderSortBar();
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
    empty.innerHTML = '<div class="e1">Keine Treffer</div><div class="e2">Versuch einen anderen Bildtitel, Malernamen, ein Jahr oder ein Museum.</div>';
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
    const d = document.createElement('button'); d.setAttribute('aria-label', 'Seite ' + (pg + 1));
    d.onclick = () => { hydrateGal(pg); pager.scrollTo({ left: pg * pager.clientWidth, behavior: 'smooth' }); };
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
  $('#srcList').innerHTML = ALL.map(p => `<li><b>${p.title}</b> (${p.artist}): ${p.source}. Museum: ${p.museum}.</li>`).join('');
  $('#sources').classList.remove('hidden');
};
$('#srcClose').onclick = () => $('#sources').classList.add('hidden');

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

async function openPainting(p){
  showScreen('paint'); $('#pTitle').textContent = p.title;
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
  if (S.nFilled >= pz.R) { S.done = true; reveal = 1; draw(); }
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
    const b = document.createElement('button'); b.className = 'chip'; b.dataset.i = i;
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
    b.firstChild.textContent = left === 0 ? '✓' : (i + 1);
    const frac = 1 - left / tot;
    b.style.background = `conic-gradient(#c79a4e ${frac * 360}deg, #e6dfd5 0)`;
  }
}
function selectColor(i, scroll){
  if (!S || S.done) return;
  S.sel = i; updatePalette(); rebuild();
  if (scroll) { const b = $('#palette').children[i]; b && b.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); }
  if (S.colLeft[i] === 0) toast('Diese Farbe ist schon fertig');
}
function updateProgress(){ $('#pFill').style.width = (100 * S.nFilled / S.pz.R) + '%'; }

let saveT = 0;
function persist(){
  clearTimeout(saveT);
  saveT = setTimeout(() => {
    const arr = []; S.filled.forEach((v, i) => v && arr.push(i));
    writeSave(S.p.id, { total: S.pz.R, filled: arr });
  }, 250);
}

function fillRegion(r, sx, sy){
  S.filled[r] = 1; S.nFilled++; S.colLeft[S.pz.rc[r]]--;
  ripples.push({ x: sx, y: sy, t: performance.now(), c: S.pz.meta.palette[S.pz.rc[r]] });
  if (navigator.vibrate) try { navigator.vibrate(8); } catch(e){}
  persist(); updateProgress();
  if (S.colLeft[S.sel] === 0) {
    toast('Farbe ' + (S.sel + 1) + ' fertig ✓');
    let n = -1; const L = S.colLeft.length;
    for (let k = 1; k <= L; k++) { const j = (S.sel + k) % L; if (S.colLeft[j] > 0) { n = j; break; } }
    if (n >= 0) { S.sel = n; setTimeout(() => { const b = $('#palette').children[n]; b && b.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); }, 50); }
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
function animateView(to, dur, done){ anim = { from: { ...view }, to, t: performance.now(), dur, done }; kick(); }
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
  else if (other >= 0) toast('Hier gehört Farbe ' + (pz.rc[other] + 1) + ' hin');
}

// hint: fly to an open field of the selected colour
$('#hintBtn').onclick = () => {
  if (!S || S.done) return;
  const regs = S.pz.meta.regions; let best = -1, bd = 1e18;
  const cx = (cw / 2 - view.tx) / view.s, cy = (ch / 2 - view.ty) / view.s;
  for (let r = 0; r < regs.length; r++) if (!S.filled[r] && regs[r][0] === S.sel) {
    const d = (regs[r][1] - cx) ** 2 + (regs[r][2] - cy) ** 2; if (d < bd) { bd = d; best = r; } }
  if (best < 0) { toast('Wähle eine Farbe, die noch offen ist'); return; }
  const g = regs[best];
  const ts = Math.min(maxS(), Math.max(view.s, 16 / g[3], fitS));
  animateView({ s: ts, tx: cw / 2 - g[1] * ts, ty: ch / 2 - g[2] * ts }, 450, () => { clampView(); draw(); hintRing = { x: g[1], y: g[2], r: g[3], t: performance.now() }; kick(); });
};

let toastT = 0;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1600); }

// ---------- completion ----------
function finish(){
  S.done = true; S.doneAt = performance.now(); rebuild();
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
  if (storyCtx && S && storyCtx.pid === S.p.id) { showChapterDone(); return; }
  const p = S.p;
  $('#sTitle').textContent = p.title; $('#sMeta').textContent = `${p.artist} · ${p.year}`;
  $('#sStory').textContent = p.story; $('#sTech').textContent = p.technique;
  $('#sFacts').innerHTML = p.facts.map(f => `<li>${f}</li>`).join('');
  $('#sMuseum').textContent = '🏛 Museum: ' + p.museum;
  $('#story').classList.remove('hidden');
}
let showingOrig = true;
$('#sCompare').onclick = () => {
  $('#story').classList.add('hidden');
  toast('Tippe auf «Tipp», um die Geschichte wieder zu sehen');
};
$('#sGallery').onclick = () => { $('#story').classList.add('hidden'); goGallery(); };
$('#sReset').onclick = () => {
  if (!confirm('Fortschritt für dieses Bild löschen und neu beginnen?')) return;
  localStorage.removeItem(KEY(S.p.id)); $('#story').classList.add('hidden'); const p = S.p; openPainting(p);
};
// when finished, the hint button reopens the story, tapping the canvas toggles original / own version
const origHint = $('#hintBtn').onclick;
$('#hintBtn').onclick = () => { if (S && S.done) { showStory(); return; } origHint(); };
cv.addEventListener('click', () => { if (S && S.done && !anim && !(S.doneAt && performance.now() - S.doneAt < 4000)) { reveal = reveal > 0.5 ? 0 : 1; draw(); toast(reveal ? 'Original' : 'Deine Version'); } });

// ---------- navigation ----------
function showScreen(id){ document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id)); }
function goGallery(){
  if (swReload) { location.reload(); return; }
  S = null; hideSheets();
  if (storyCtx) { showChapters(storyCtx.story); return; }
  showScreen('gallery'); renderStoryEntry(); renderGallery();
}
function hideSheets(){ ['#story', '#chapter', '#chDone'].forEach(q => $(q).classList.add('hidden')); }
$('#backBtn').onclick = goGallery;
let galT = 0;
function onViewport(){ if (S) resize(); else { clearTimeout(galT); galT = setTimeout(renderGallery, 120); } }
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
  if (!STORIES.length) { box.style.display = 'none'; return; }
  box.style.display = '';
  box.innerHTML = '';
  STORIES.forEach(st => {
    const n = chDoneCount(st), N = st.chapters.length;
    const b = document.createElement('button');
    b.className = 'sentry' + (st.fresh ? ' neu' : '');
    b.setAttribute('data-story', st.id);
    b.setAttribute('aria-label', 'Geschichten: ' + st.name);
    const kicker = st.fresh ? 'Neu · Geschichten' : 'Geschichten';
    b.innerHTML = `<div class="cv" style="background-image:url(data/${st.cover}-thumb.jpg)"></div>
      <div class="tx"><div class="k">${kicker}</div><div class="n">${st.name}</div>
      <div class="s">${st.subtitle} · ${n ? `${n} von ${N} gemalt` : 'Jetzt starten'}</div></div><div class="go">›</div>`;
    b.onclick = () => { storyCtx = { story: st }; showChapters(st); };
    box.appendChild(b);
  });
}
let ctoastT = 0;
function ctoast(msg){ const t = $('#ctoast'); t.textContent = msg; t.classList.add('show'); clearTimeout(ctoastT); ctoastT = setTimeout(() => t.classList.remove('show'), 1800); }
function showChapters(st){
  S = null; showScreen('chapters');
  const N = st.chapters.length, n = chDoneCount(st), seen = storyState(st).seen;
  $('#chHead').innerHTML = `<div class="cv" style="background-image:url(data/${st.cover}-orig.jpg)"></div>
    <div><h1>${st.name}</h1><div class="life">${st.life} · ${st.subtitle}</div>
    <p class="intro">${st.intro}</p>
    <div class="prog">${n} von ${N} Kapiteln gemalt<div class="bar"><div style="width:${100 * n / N}%"></div></div></div></div>`;
  const list = $('#chList'); list.innerHTML = '';
  let nextMarked = false;
  st.chapters.forEach((ch, i) => {
    const p = byId(ch.pid), open = chUnlocked(st, i), done = isDone(ch.pid), pct = pctOf(ch.pid);
    const b = document.createElement('button');
    let cls = 'chi', badge;
    if (!open) { cls += ' locked'; badge = ''; }
    else if (done) badge = '<span class="st fin">✓ Fertig</span>';
    else { cls += ' todo'; badge = pct > 0 ? `<span class="st">${Math.max(1, pct)} %</span>` : (seen.includes(i) ? '<span class="st">Bereit</span>' : '<span class="st new">Neu</span>'); }
    if (open && !done && !nextMarked) { cls += ' next'; nextMarked = true; }
    b.className = cls; b.dataset.i = i;
    b.innerHTML = `<div class="th" style="background-image:url(data/${ch.pid}-${done ? 'orig.jpg' : 'thumb.jpg'})"></div>
      <div class="tx"><div class="no">Kapitel ${i + 1} · ${ch.place}, ${ch.when}</div><div class="t">${ch.title}</div>
      <div class="w">${open ? `${p.title} (${p.year})` : '🔒 Wird freigeschaltet, wenn Kapitel ' + i + ' fertig ist'}</div></div>${badge}`;
    b.onclick = () => open ? showChapter(st, i) : ctoast(`Male zuerst Kapitel ${i} fertig, dann geht es hier weiter.`);
    list.appendChild(b);
  });
  const epi = $('#chEpi');
  if (n === N) { epi.innerHTML = `<div class="lbl">Wie es weitergeht</div><p>${st.epilogue}</p>`; epi.classList.remove('hidden'); }
  else epi.classList.add('hidden');
  renderStoryEntry();
}
function showChapter(st, i){
  const ch = st.chapters[i], p = byId(ch.pid), done = isDone(ch.pid), pct = pctOf(ch.pid);
  storyCtx = { story: st, idx: i, pid: ch.pid };
  const o = storyState(st); if (!o.seen.includes(i)) { o.seen.push(i); storySave(st, o); }
  $('#cNum').textContent = `Kapitel ${i + 1} von ${st.chapters.length}`;
  $('#cTitle').textContent = ch.title;
  $('#cMeta').textContent = `${ch.place} · ${ch.when}`;
  $('#cText').innerHTML = ch.text.map(t => `<p>${t}</p>`).join('');
  $('#cWork').className = 'cwork' + (done ? ' fin' : '');
  $('#cWork').innerHTML = `<div class="th" style="background-image:url(data/${ch.pid}-${done ? 'orig.jpg' : 'thumb.jpg'})"></div>
    <div>${done ? 'Schon gemalt' : 'Du malst'}: <b>${p.title}</b><br>${p.artist}, ${p.year}</div>`;
  $('#cGo').textContent = done ? 'Bild ansehen' : (pct > 0 ? 'Weiter malen' : 'Bild malen');
  $('#chapter .card').scrollTop = 0;
  $('#chapter').classList.remove('hidden');
}
$('#cBack').onclick = () => { $('#chapter').classList.add('hidden'); if (storyCtx) showChapters(storyCtx.story); };
$('#cGo').onclick = async () => {
  $('#chapter').classList.add('hidden');
  const c = storyCtx, p = byId(c.pid);
  await openPainting(p);
  if (S && S.done && storyCtx === c) setTimeout(() => { if (S && S.p === p) showChapterDone(); }, 900);
};
function showChapterDone(){
  const c = storyCtx, st = c.story, i = c.idx, ch = st.chapters[i], p = byId(ch.pid), N = st.chapters.length, last = i === N - 1;
  $('#dNum').textContent = `Kapitel ${i + 1} geschafft! 🎉`;
  $('#dTitle').textContent = p.title;
  $('#dMeta').textContent = `${p.artist} · ${p.year}`;
  $('#dFact').textContent = ch.fact;
  $('#dMuseum').textContent = '🏛 Heute: ' + p.museum;
  $('#dEpi').textContent = st.epilogue;
  $('#dEpiWrap').classList.toggle('hidden', !last);
  $('#dNext').textContent = last ? 'Geschichte abschliessen' : `Weiter: Kapitel ${i + 2}`;
  $('#chDone .card').scrollTop = 0;
  $('#chDone').classList.remove('hidden');
}
$('#dNext').onclick = () => {
  const c = storyCtx, st = c.story, i = c.idx;
  $('#chDone').classList.add('hidden');
  if (swReload) { location.reload(); return; }
  S = null;
  if (i < st.chapters.length - 1) { showChapters(st); showChapter(st, i + 1); }
  else showChapters(st);
};
$('#dList').onclick = () => { $('#chDone').classList.add('hidden'); goGallery(); };
$('#dLook').onclick = () => { $('#chDone').classList.add('hidden'); toast('Tippe auf 💡, um das Kapitel wieder zu sehen'); };
$('#chBack').onclick = () => { storyCtx = null; hideSheets(); if (swReload) { location.reload(); return; } showScreen('gallery'); renderStoryEntry(); renderGallery(); };

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
renderStoryEntry(); renderGallery();
})();
