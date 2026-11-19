/* Masilano v10.29 — «Dieses Bild an deine Wand». Lazy-loaded. No checkout while checkoutUrl is empty. */
(function () {
  const WISH_KEY = 'masilano.shop.wish.v1';
  const CFG = () => window.MASILANO_SHOP_CONFIG || {};
  const RES = () => window.MASILANO_SHOP_RES || {};
  let host = null;
  let state = { pid: null, product: 'fineart', size: 's3040', frame: 'natural', template: 'original' };

  const TX = {
    de: {
      kicker: 'An deine Wand',
      title: 'Dieses Bild an deine Wand',
      close: 'Schliessen',
      tpl: 'Vorlage',
      tplOrig: 'Original',
      tplMine: 'Dein bemaltes Bild',
      tplNote: 'Gedruckt wird die gemeinfreie Reproduktion in hoher Auflösung. Deine bemalte Fassung folgt, sobald wir deine Farben auf die Quelldatei legen können — ein Bildschirmfoto wäre für den Druck zu klein.',
      tplMineSoon: 'Bald: deine Farben auf der hochaufgelösten Quelle, nicht als Screenshot.',
      product: 'Produkt',
      poster: 'Poster',
      posterS: 'Leichtes Papier, ungerahmt',
      fineart: 'Fine-Art-Papier',
      fineartS: 'Giclée auf Museumspapier',
      canvas: 'Leinwand',
      canvasS: 'Auf Keilrahmen, bereit zum Aufhängen',
      framed: 'Gerahmt',
      framedS: 'Leinwand im Rahmen, als Geschenk',
      size: 'Format',
      frame: 'Rahmen',
      natural: 'Naturholz',
      walnut: 'Dunkelbraun',
      black: 'Schwarz',
      gold: 'Museums-Gold',
      goldNote: 'Einen verschnörkelten Goldrahmen gibt es im ersten Druckkatalog noch nicht. Die Vorschau zeigt, wie er wirken würde; bestellen lässt er sich später als Sonderlinie.',
      dpiIdeal: '300 dpi — volle Schärfe',
      dpiOk: 'Mindestens 150 dpi — gut, etwas weicher als die Empfehlung',
      noSize: 'Für dieses Werk reicht die vorliegende Quelle für kein anbietbares Format. Ein grosser Druck würde unscharf.',
      priceIncl: 'inkl. Versand in die Schweiz',
      priceEx: 'Beispielpreis, bis die Live-Preise vorliegen',
      soon: 'Bald erhältlich',
      soonLead: 'Bestellen wird möglich, sobald Druck und Zahlung eingerichtet sind. Zuerst liefern wir in die Schweiz. Niemand nimmt hier eine Zahlung entgegen.',
      wish: 'Merken',
      wished: 'Auf dem Merkzettel',
      wishAdd: 'Auf dem Merkzettel vermerkt. Nur auf diesem Gerät, ohne E-Mail.',
      wishOff: 'Vom Merkzettel genommen.',
      shipNote: 'Versand vorerst nur in die Schweiz.',
      empty: 'Dieses Bild wurde nicht gefunden.'
    },
    en: {
      kicker: 'On your wall',
      title: 'This painting on your wall',
      close: 'Close',
      tpl: 'Version',
      tplOrig: 'Original',
      tplMine: 'Your painted version',
      tplNote: 'The print uses the public-domain reproduction at high resolution. Your own colouring will follow once we can lay your colours onto the source file — a screenshot would be too small to print well.',
      tplMineSoon: 'Coming later: your colours on the high-resolution source, not a screenshot.',
      product: 'Product',
      poster: 'Poster',
      posterS: 'Light paper, unframed',
      fineart: 'Fine-art paper',
      fineartS: 'Giclée on museum paper',
      canvas: 'Canvas',
      canvasS: 'Stretched, ready to hang',
      framed: 'Framed',
      framedS: 'Canvas in a frame, for a gift',
      size: 'Size',
      frame: 'Frame',
      natural: 'Natural wood',
      walnut: 'Dark walnut',
      black: 'Black',
      gold: 'Museum gold',
      goldNote: 'A baroque gold frame is not in the first print catalogue. The preview shows how it would look; it will be a later special line.',
      dpiIdeal: '300 dpi — full sharpness',
      dpiOk: 'At least 150 dpi — good, a little softer than the recommendation',
      noSize: 'The source for this work is not sharp enough for any size we offer. A large print would look soft.',
      priceIncl: 'incl. shipping within Switzerland',
      priceEx: 'Example price, until live prices are available',
      soon: 'Coming soon',
      soonLead: 'Ordering will open once print and payment are ready. We will ship to Switzerland first. No payment is taken here.',
      wish: 'Save for later',
      wished: 'On your list',
      wishAdd: 'Saved on this device, with no email address.',
      wishOff: 'Removed from your list.',
      shipNote: 'Shipping to Switzerland only, for now.',
      empty: 'This painting was not found.'
    },
    es: {
      kicker: 'En tu pared',
      title: 'Este cuadro en tu pared',
      close: 'Cerrar',
      tpl: 'Versión',
      tplOrig: 'Original',
      tplMine: 'Tu versión pintada',
      tplNote: 'La impresión usa la reproducción de dominio público en alta resolución. Tu colorido llegará cuando podamos aplicar tus colores al archivo fuente: una captura de pantalla sería demasiado pequeña.',
      tplMineSoon: 'Más adelante: tus colores sobre la fuente en alta resolución, no una captura.',
      product: 'Producto',
      poster: 'Póster',
      posterS: 'Papel ligero, sin marco',
      fineart: 'Papel fine art',
      fineartS: 'Giclée sobre papel de museo',
      canvas: 'Lienzo',
      canvasS: 'Tensado, listo para colgar',
      framed: 'Enmarcado',
      framedS: 'Lienzo en marco, para regalo',
      size: 'Formato',
      frame: 'Marco',
      natural: 'Madera natural',
      walnut: 'Nogal oscuro',
      black: 'Negro',
      gold: 'Oro de museo',
      goldNote: 'Un marco dorado barroco no está en el primer catálogo. La vista previa muestra el efecto; se ofrecerá más adelante como línea especial.',
      dpiIdeal: '300 dpi — nitidez plena',
      dpiOk: 'Al menos 150 dpi — bien, un poco más suave que lo recomendado',
      noSize: 'La fuente de esta obra no alcanza ningún formato que ofrezcamos. Una impresión grande se vería borrosa.',
      priceIncl: 'incl. envío a Suiza',
      priceEx: 'Precio de ejemplo, hasta tener precios en vivo',
      soon: 'Disponible pronto',
      soonLead: 'Se podrá pedir cuando la impresión y el pago estén listos. Primero enviaremos a Suiza. Aquí no se cobra nada.',
      wish: 'Guardar',
      wished: 'En tu lista',
      wishAdd: 'Guardado en este dispositivo, sin correo electrónico.',
      wishOff: 'Quitado de tu lista.',
      shipNote: 'Por ahora, envío solo a Suiza.',
      empty: 'No se encontró este cuadro.'
    },
    fr: {
      kicker: 'Sur ton mur',
      title: 'Ce tableau sur ton mur',
      close: 'Fermer',
      tpl: 'Version',
      tplOrig: 'Original',
      tplMine: 'Ta version peinte',
      tplNote: 'L’impression reprend la reproduction du domaine public en haute résolution. Ta version colorée viendra lorsque nous pourrons poser tes couleurs sur le fichier source — une capture d’écran serait trop petite.',
      tplMineSoon: 'Bientôt : tes couleurs sur la source haute résolution, pas une capture.',
      product: 'Produit',
      poster: 'Poster',
      posterS: 'Papier léger, sans cadre',
      fineart: 'Papier fine art',
      fineartS: 'Giclée sur papier musée',
      canvas: 'Toile',
      canvasS: 'Tendue, prête à accrocher',
      framed: 'Encadré',
      framedS: 'Toile encadrée, pour offrir',
      size: 'Format',
      frame: 'Cadre',
      natural: 'Bois naturel',
      walnut: 'Noyer foncé',
      black: 'Noir',
      gold: 'Or de musée',
      goldNote: 'Un cadre doré baroque n’est pas dans le premier catalogue. L’aperçu montre l’effet ; ce sera une ligne spéciale plus tard.',
      dpiIdeal: '300 dpi — netteté pleine',
      dpiOk: 'Au moins 150 dpi — bien, un peu plus doux que la recommandation',
      noSize: 'La source de cette œuvre ne permet aucun format proposé. Un grand tirage serait flou.',
      priceIncl: 'livraison en Suisse comprise',
      priceEx: 'Prix d’exemple, en attendant les prix en direct',
      soon: 'Bientôt disponible',
      soonLead: 'La commande s’ouvrira lorsque l’impression et le paiement seront prêts. Nous livrerons d’abord en Suisse. Aucun paiement n’est pris ici.',
      wish: 'Retenir',
      wished: 'Sur ta liste',
      wishAdd: 'Enregistré sur cet appareil, sans adresse e-mail.',
      wishOff: 'Retiré de ta liste.',
      shipNote: 'Livraison en Suisse uniquement, pour le moment.',
      empty: 'Ce tableau est introuvable.'
    },
    it: {
      kicker: 'Alla tua parete',
      title: 'Questo quadro sulla tua parete',
      close: 'Chiudi',
      tpl: 'Versione',
      tplOrig: 'Originale',
      tplMine: 'La tua versione dipinta',
      tplNote: 'La stampa usa la riproduzione di pubblico dominio in alta risoluzione. La tua versione colorata arriverà quando potremo stendere i tuoi colori sul file sorgente: uno screenshot sarebbe troppo piccolo.',
      tplMineSoon: 'Più avanti: i tuoi colori sulla fonte ad alta risoluzione, non uno screenshot.',
      product: 'Prodotto',
      poster: 'Poster',
      posterS: 'Carta leggera, senza cornice',
      fineart: 'Carta fine art',
      fineartS: 'Giclée su carta da museo',
      canvas: 'Tela',
      canvasS: 'Tesata, pronta da appendere',
      framed: 'Con cornice',
      framedS: 'Tela incorniciata, per un dono',
      size: 'Formato',
      frame: 'Cornice',
      natural: 'Legno naturale',
      walnut: 'Noce scuro',
      black: 'Nero',
      gold: 'Oro da museo',
      goldNote: 'Una cornice dorata barocca non è nel primo catalogo. L’anteprima ne mostra l’effetto; arriverà più avanti come linea speciale.',
      dpiIdeal: '300 dpi — nitidezza piena',
      dpiOk: 'Almeno 150 dpi — buono, un po’ più morbido del consigliato',
      noSize: 'La fonte di quest’opera non regge nessun formato offerto. Una stampa grande risulterebbe sfocata.',
      priceIncl: 'spedizione in Svizzera inclusa',
      priceEx: 'Prezzo di esempio, fino ai prezzi in tempo reale',
      soon: 'Presto disponibile',
      soonLead: 'Si potrà ordinare quando stampa e pagamento saranno pronti. Spediremo prima in Svizzera. Qui non si accetta alcun pagamento.',
      wish: 'Metti da parte',
      wished: 'Nella lista',
      wishAdd: 'Salvato su questo dispositivo, senza e-mail.',
      wishOff: 'Tolto dalla lista.',
      shipNote: 'Per ora spedizione solo in Svizzera.',
      empty: 'Questo quadro non è stato trovato.'
    }
  };

  function lang(){ return (host && host.lang) || (window.I18N && window.I18N.lang) || 'de'; }
  function T(){ return TX[lang()] || TX.de; }
  function t(k){ return T()[k] || TX.de[k] || k; }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]); }
  function $(sel, root){ return (root || document).querySelector(sel); }

  function workPx(pid){
    const r = RES()[pid];
    if (!r || !r.length) return null;
    return { w: r[0], h: r[1], local: r[2] === 1 };
  }
  function dpiFor(pid, size){
    const px = workPx(pid);
    if (!px || !size) return 0;
    const a = Math.min(px.w, px.h), b = Math.max(px.w, px.h);
    const ds = (size.wCm / 2.54), dl = (size.hCm / 2.54);
    return Math.min(a / ds, b / dl);
  }
  function sizeOk(pid, size, minDpi){
    return dpiFor(pid, size) >= (minDpi || CFG().minDpi || 150);
  }
  function sizesFor(pid){
    return (CFG().sizes || []).filter(s => sizeOk(pid, s));
  }
  function pickSize(pid, prefer){
    const ok = sizesFor(pid);
    if (!ok.length) return null;
    if (prefer && ok.some(s => s.id === prefer)) return prefer;
    if (ok.some(s => s.id === 's3040')) return 's3040';
    return ok[0].id;
  }
  function sizeById(id){ return (CFG().sizes || []).find(s => s.id === id); }
  function productById(id){ return (CFG().products || []).find(p => p.id === id); }
  function formatPrice(n){
    const v = Number(n);
    if (!isFinite(v)) return '';
    const s = v.toFixed(2).replace(/\.00$/, '.00');
    return 'CHF ' + s;
  }
  function sizeLabel(s){
    if (!s) return '';
    return s.wCm + ' \u00d7 ' + s.hCm + ' cm';
  }

  function loadWish(){
    try { return JSON.parse(localStorage.getItem(WISH_KEY) || '[]') || []; } catch (e) { return []; }
  }
  function saveWish(list){ try { localStorage.setItem(WISH_KEY, JSON.stringify(list)); } catch (e) {} }
  function wishKey(){
    return [state.pid, state.product, state.size, state.frame, state.template].join('|');
  }
  function isWished(){ return loadWish().some(x => x.key === wishKey()); }
  function toggleWish(){
    const list = loadWish();
    const k = wishKey();
    const i = list.findIndex(x => x.key === k);
    if (i >= 0) { list.splice(i, 1); saveWish(list); if (host && host.toast) host.toast(t('wishOff')); }
    else {
      list.unshift({ key: k, pid: state.pid, product: state.product, size: state.size, frame: state.frame, template: state.template, at: Date.now() });
      saveWish(list);
      if (host && host.toast) host.toast(t('wishAdd'));
    }
    paintFooter();
  }

  function paintMock(){
    const box = $('#shopMock');
    if (!box || !state.pid) return;
    const p = productById(state.product) || {};
    const kind = p.frames ? 'framed' : state.product;
    const frame = (kind === 'framed') ? state.frame : '';
    const px = workPx(state.pid) || { w: 4, h: 3 };
    const landscape = px.w >= px.h;
    box.dataset.product = kind;
    box.dataset.frame = frame || 'none';
    box.dataset.ori = landscape ? 'land' : 'port';
    const fr = $('#shopFrameBox');
    if (fr) fr.classList.toggle('goldlike', kind === 'framed' && frame === 'gold');
    const img = $('#shopPrevImg');
    if (img) {
      img.src = 'data/' + encodeURIComponent(state.pid) + '-orig.jpg';
      img.alt = '';
    }
  }

  function pill(group, id, label, sub, on, disabled, note){
    const dis = disabled ? ' disabled aria-disabled="true"' : '';
    const aria = on ? 'true' : 'false';
    return '<button type="button" class="shop-pill' + (on ? ' on' : '') + (disabled ? ' off' : '') + '" data-g="' + esc(group) + '" data-id="' + esc(id) + '" aria-pressed="' + aria + '"' + dis + '>' +
      '<span class="n">' + esc(label) + '</span>' + (sub ? '<span class="s">' + esc(sub) + '</span>' : '') +
      (note ? '<span class="soon">' + esc(note) + '</span>' : '') + '</button>';
  }

  function paintChoices(){
    const P = T();
    const pid = state.pid;
    const okSizes = sizesFor(pid);
    const root = $('#shopBody');
    if (!root) return;

    const tpl = (CFG().templates || []);
    $('#shopTpl').innerHTML = tpl.map(x => {
      const lab = x.id === 'colored' ? P.tplMine : P.tplOrig;
      const note = x.available ? '' : P.soon;
      return pill('template', x.id, lab, x.available ? '' : P.tplMineSoon, state.template === x.id, !x.available, note);
    }).join('');
    const tn = $('#shopTplNote');
    if (tn) tn.textContent = P.tplNote;

    const prods = CFG().products || [];
    $('#shopProducts').innerHTML = prods.map(x => {
      return pill('product', x.id, P[x.id], P[x.id + 'S'], state.product === x.id, false, '');
    }).join('');

    const sizesEl = $('#shopSizes');
    if (!okSizes.length) {
      sizesEl.innerHTML = '<p class="shop-empty">' + esc(P.noSize) + '</p>';
    } else {
      sizesEl.innerHTML = okSizes.map(s => {
        const dpi = dpiFor(pid, s);
        const sub = dpi >= (CFG().idealDpi || 300) ? P.dpiIdeal : P.dpiOk;
        return pill('size', s.id, sizeLabel(s), sub, state.size === s.id, false, '');
      }).join('');
    }

    const prod = productById(state.product);
    const fs = $('#shopFrameSec');
    if (prod && prod.frames) {
      fs.hidden = false;
      fs.classList.remove('hidden');
      $('#shopFrames').innerHTML = (CFG().frames || []).map(f => {
        return pill('frame', f.id, P[f.id], '', state.frame === f.id, false, f.available ? '' : P.soon);
      }).join('');
      let note = $('#shopFrameNote');
      if (!note) {
        note = document.createElement('p');
        note.id = 'shopFrameNote';
        note.className = 'shop-note';
        fs.appendChild(note);
      }
      note.textContent = (state.frame === 'gold') ? P.goldNote : '';
      note.hidden = state.frame !== 'gold';
    } else {
      fs.hidden = true;
      fs.classList.add('hidden');
    }
    paintFooter();
    paintMock();
  }

  function paintFooter(){
    const P = T();
    const prod = productById(state.product);
    const size = sizeById(state.size);
    const ok = prod && size && sizeOk(state.pid, size);
    const price = ok ? prod.prices[size.id] : null;
    const el = $('#shopPrice');
    if (el) {
      if (ok && price != null) {
        el.innerHTML = '<div class="amt">' + esc(formatPrice(price)) + '</div>' +
          '<div class="inc">' + esc(P.priceIncl) + '</div>' +
          '<div class="ex">' + esc(P.priceEx) + '</div>';
      } else {
        el.innerHTML = '';
      }
    }
    const buy = $('#shopBuy');
    if (buy) {
      buy.textContent = P.soon;
      buy.disabled = true;
      buy.setAttribute('aria-disabled', 'true');
    }
    const lead = $('#shopSoonLead');
    if (lead) lead.textContent = P.soonLead;
    const wish = $('#shopWish');
    if (wish) {
      const on = isWished();
      wish.textContent = on ? P.wished : P.wish;
      wish.classList.toggle('on', on);
      wish.disabled = !ok;
    }
    const ship = $('#shopShip');
    if (ship) ship.textContent = P.shipNote;
  }

  function onPick(ev){
    const b = ev.target.closest('.shop-pill');
    if (!b || b.disabled) return;
    const g = b.getAttribute('data-g'), id = b.getAttribute('data-id');
    if (g === 'template') {
      const rec = (CFG().templates || []).find(x => x.id === id);
      if (!rec || !rec.available) return;
      state.template = id;
    } else if (g === 'product') {
      state.product = id;
      const prod = productById(id);
      if (prod && prod.frames && (CFG().frames || []).every(f => f.id === state.frame && !f.available)) {
        state.frame = 'natural';
      }
      if (prod && prod.frames && !(CFG().frames || []).some(f => f.id === state.frame && f.available)) {
        state.frame = 'natural';
      }
    } else if (g === 'size') {
      state.size = id;
    } else if (g === 'frame') {
      state.frame = id; // gold may be previewed even if not yet orderable
    }
    paintChoices();
  }

  function fillMeta(){
    const p = host && host.byId && host.byId(state.pid);
    const title = p ? (host.L ? host.L(p, 'title') : (p.title || state.pid)) : t('empty');
    const artist = p ? (host.L ? host.L(p, 'artist') : (p.artist || '')) : '';
    const year = p && p.year ? p.year : '';
    const h = $('#shopWorkTitle');
    if (h) h.textContent = title;
    const m = $('#shopWorkMeta');
    if (m) m.textContent = [artist, year].filter(Boolean).join(' · ');
    const k = $('#shopKicker'); if (k) k.textContent = t('kicker');
    const tt = $('#shopHeadTitle'); if (tt) tt.textContent = t('title');
    const cl = $('#shopClose'); if (cl) { cl.textContent = t('close'); cl.setAttribute('aria-label', t('close')); }
    const s1 = $('#shopLblTpl'); if (s1) s1.textContent = t('tpl');
    const s2 = $('#shopLblProd'); if (s2) s2.textContent = t('product');
    const s3 = $('#shopLblSize'); if (s3) s3.textContent = t('size');
    const s4 = $('#shopLblFrame'); if (s4) s4.textContent = t('frame');
  }

  function open(pid, opts){
    const p = host && host.byId && host.byId(pid);
    if (!p) return;
    state.pid = pid;
    state.template = 'original';
    const preferProd = (opts && opts.product) || ((CFG().products || []).find(x => x.preferred) || {}).id || 'fineart';
    state.product = preferProd;
    state.size = pickSize(pid, (opts && opts.size) || 's3040');
    state.frame = 'natural';
    fillMeta();
    paintChoices();
    const sh = $('#shopSheet');
    if (!sh) return;
    sh.classList.remove('hidden');
    sh.scrollTop = 0;
    const card = sh.querySelector('.card');
    if (card) card.scrollTop = 0;
    if (host && host.onOpen) host.onOpen(pid);
  }

  function close(){
    const sh = $('#shopSheet');
    if (sh) sh.classList.add('hidden');
    if (host && host.onClose) host.onClose();
  }

  function refresh(){
    if (!$('#shopSheet') || $('#shopSheet').classList.contains('hidden')) return;
    fillMeta();
    paintChoices();
  }

  function bind(){
    const body = $('#shopBody');
    if (body && !body.__shopBound) {
      body.__shopBound = true;
      body.addEventListener('click', onPick);
    }
    const cl = $('#shopClose');
    if (cl && !cl.__shopBound) { cl.__shopBound = true; cl.addEventListener('click', () => close()); }
    const wish = $('#shopWish');
    if (wish && !wish.__shopBound) { wish.__shopBound = true; wish.addEventListener('click', () => toggleWish()); }
    const buy = $('#shopBuy');
    if (buy && !buy.__shopBound) {
      buy.__shopBound = true;
      buy.addEventListener('click', ev => { ev.preventDefault(); });
    }
  }

  function init(h){
    host = h || host || {};
    bind();
  }

  window.MASILANO_SHOP = { init, open, close, refresh, sizesFor, dpiFor, formatPrice, config: CFG };
})();
