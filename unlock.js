/* Masilano v10.42r – Malerwege freischalten.
   Austauschbarer Zahlungs-Adapter: Google Play (Digital Goods API + Payment Request, TWA),
   Web-Platzhalter (kein Kauf im Browser) und lokaler Testmodus (simuliert).
   Ist MASILANO_UNLOCK_CONFIG.enabled false, tut dieses Modul nichts. */
(function () {
  'use strict';
  const CFG = window.MASILANO_UNLOCK_CONFIG || {};
  /* enabled: false | true | 'play-only' (nur in der Android-App mit Google Play Billing aktiv;
     die Web-Fassung bleibt dann komplett gratis und unverändert). */
  const ON = CFG.enabled === true || (CFG.enabled === 'play-only' && ('getDigitalGoodsService' in window));
  if (!ON) {
    window.MASILANO_UNLOCK = { enabled: function () { return false; } };
    return;
  }

  const STORE_KEY = 'masilano.unlock.v1';
  const TX = {
    de: {
      kicker: 'Malerweg freischalten',
      lead: '{n} Bilder in {s} Stationen, mit Lebensgeschichte und Karte.',
      preview: 'Du kannst alle Stationen und Geschichten vorher in Ruhe ansehen.',
      optPath: 'Nur dieser Weg',
      optPathS: 'Ein Malerweg, einmalig',
      optSmall: 'Die kleineren Wege',
      optSmallS: '{k} kurze Wege, einmalig',
      optAll: 'Alle Malerwege',
      optAllS: 'Alle {k} Wege zum Freischalten, einmalig',
      buy: 'Kaufen',
      owned: 'Freigeschaltet',
      once: 'Einmaliger Kauf, kein Abo, keine Werbung.',
      free: 'Immer gratis: das Bild des Tages und die Einzelbilder der Galerie. Wo du schon gemalt hast, darfst du weitermalen.',
      restore: 'Käufe wiederherstellen',
      close: 'Schliessen',
      noPrice: 'Preis folgt',
      webNote: 'Im Browser kann man nichts kaufen. Alles Gratis bleibt hier gratis.',
      playNote: 'Bezahlt wird über Google Play. Mit demselben Google-Konto kannst du Käufe wiederherstellen.',
      playUnready: 'Käufe sind in dieser Version noch nicht möglich.',
      testNote: 'Testmodus: Es wird nichts bezahlt, Käufe werden nur simuliert.',
      testReset: 'Testkäufe zurücksetzen',
      thanks: 'Freigeschaltet. Viel Freude beim Malen.',
      cancelled: 'Kauf abgebrochen.',
      failed: 'Das hat nicht geklappt. Bitte später noch einmal versuchen.',
      restored: 'Wiederhergestellt: {n}',
      restoredNone: 'Keine Käufe gefunden.',
      lockPill: 'Freischaltbar',
      bannerT: 'Dieser Weg lässt sich freischalten.',
      bannerS: 'Stationen und Geschichten kannst du schon lesen. Zum Malen schaltest du den Weg einmalig frei.',
      bannerBtn: 'Freischalten',
      setTitle: 'Malerwege',
      setBody: 'Gekaufte Wege bleiben auf diesem Gerät freigeschaltet. Ein Konto bei uns brauchst du nicht.',
      setShow: 'Angebot ansehen',
      privacy: 'Gespeichert wird nur auf diesem Gerät, welche Wege freigeschaltet sind.',
      lockedAria: 'Zum Freischalten: {title}'
    },
    en: {
      kicker: 'Unlock a painter’s journey',
      lead: '{n} paintings in {s} stations, with life story and map.',
      preview: 'You can look at every station and story first, at your own pace.',
      optPath: 'This journey only',
      optPathS: 'One painter’s journey, one-time',
      optSmall: 'The smaller journeys',
      optSmallS: '{k} short journeys, one-time',
      optAll: 'All journeys',
      optAllS: 'All {k} unlockable journeys, one-time',
      buy: 'Buy',
      owned: 'Unlocked',
      once: 'One-time purchase, no subscription, no ads.',
      free: 'Always free: the painting of the day and the single paintings in the gallery. Where you have already painted, you can keep painting.',
      restore: 'Restore purchases',
      close: 'Close',
      noPrice: 'Price to follow',
      webNote: 'Nothing can be bought in the browser. Everything free stays free here.',
      playNote: 'Payment is handled by Google Play. You can restore purchases with the same Google account.',
      playUnready: 'Purchases are not available in this version yet.',
      testNote: 'Test mode: nothing is charged, purchases are only simulated.',
      testReset: 'Reset test purchases',
      thanks: 'Unlocked. Enjoy painting.',
      cancelled: 'Purchase cancelled.',
      failed: 'That did not work. Please try again later.',
      restored: 'Restored: {n}',
      restoredNone: 'No purchases found.',
      lockPill: 'Unlockable',
      bannerT: 'This journey can be unlocked.',
      bannerS: 'You can already read the stations and stories. To paint, unlock the journey once.',
      bannerBtn: 'Unlock',
      setTitle: 'Painters’ journeys',
      setBody: 'Purchased journeys stay unlocked on this device. You do not need an account with us.',
      setShow: 'View offer',
      privacy: 'Only which journeys are unlocked is stored, on this device.',
      lockedAria: 'Unlockable: {title}'
    },
    es: {
      kicker: 'Desbloquear un camino',
      lead: '{n} cuadros en {s} etapas, con biografía y mapa.',
      preview: 'Puedes ver antes todas las etapas e historias con calma.',
      optPath: 'Solo este camino',
      optPathS: 'Un camino de pintor, pago único',
      optSmall: 'Los caminos pequeños',
      optSmallS: '{k} caminos cortos, pago único',
      optAll: 'Todos los caminos',
      optAllS: 'Los {k} caminos desbloqueables, pago único',
      buy: 'Comprar',
      owned: 'Desbloqueado',
      once: 'Compra única, sin suscripción, sin publicidad.',
      free: 'Siempre gratis: el cuadro del día y los cuadros sueltos de la galería. Donde ya has pintado, puedes seguir pintando.',
      restore: 'Restaurar compras',
      close: 'Cerrar',
      noPrice: 'Precio pendiente',
      webNote: 'En el navegador no se puede comprar nada. Todo lo gratuito sigue siendo gratis.',
      playNote: 'El pago se hace con Google Play. Con la misma cuenta de Google puedes restaurar tus compras.',
      playUnready: 'Las compras aún no están disponibles en esta versión.',
      testNote: 'Modo de prueba: no se cobra nada, las compras solo se simulan.',
      testReset: 'Restablecer compras de prueba',
      thanks: 'Desbloqueado. Disfruta pintando.',
      cancelled: 'Compra cancelada.',
      failed: 'No ha funcionado. Inténtalo de nuevo más tarde.',
      restored: 'Restaurado: {n}',
      restoredNone: 'No se encontraron compras.',
      lockPill: 'Desbloqueable',
      bannerT: 'Este camino se puede desbloquear.',
      bannerS: 'Ya puedes leer las etapas y las historias. Para pintar, desbloquea el camino una vez.',
      bannerBtn: 'Desbloquear',
      setTitle: 'Caminos de pintores',
      setBody: 'Los caminos comprados quedan desbloqueados en este dispositivo. No necesitas una cuenta con nosotros.',
      setShow: 'Ver oferta',
      privacy: 'Solo se guarda en este dispositivo qué caminos están desbloqueados.',
      lockedAria: 'Desbloqueable: {title}'
    },
    fr: {
      kicker: 'Débloquer un parcours',
      lead: '{n} tableaux en {s} étapes, avec biographie et carte.',
      preview: 'Tu peux d’abord découvrir toutes les étapes et histoires, en toute tranquillité.',
      optPath: 'Ce parcours seulement',
      optPathS: 'Un parcours de peintre, achat unique',
      optSmall: 'Les parcours plus courts',
      optSmallS: '{k} parcours courts, achat unique',
      optAll: 'Tous les parcours',
      optAllS: 'Les {k} parcours à débloquer, achat unique',
      buy: 'Acheter',
      owned: 'Débloqué',
      once: 'Achat unique, sans abonnement, sans publicité.',
      free: 'Toujours gratuit : le tableau du jour et les tableaux isolés de la galerie. Là où tu as déjà peint, tu peux continuer.',
      restore: 'Restaurer les achats',
      close: 'Fermer',
      noPrice: 'Prix à venir',
      webNote: 'Rien ne peut être acheté dans le navigateur. Tout ce qui est gratuit le reste.',
      playNote: 'Le paiement passe par Google Play. Avec le même compte Google, tu peux restaurer tes achats.',
      playUnready: 'Les achats ne sont pas encore disponibles dans cette version.',
      testNote: 'Mode test : rien n’est facturé, les achats sont seulement simulés.',
      testReset: 'Réinitialiser les achats test',
      thanks: 'Débloqué. Bonne peinture !',
      cancelled: 'Achat annulé.',
      failed: 'Cela n’a pas fonctionné. Réessaie plus tard.',
      restored: 'Restauré : {n}',
      restoredNone: 'Aucun achat trouvé.',
      lockPill: 'À débloquer',
      bannerT: 'Ce parcours peut être débloqué.',
      bannerS: 'Tu peux déjà lire les étapes et les histoires. Pour peindre, débloque le parcours une fois.',
      bannerBtn: 'Débloquer',
      setTitle: 'Parcours de peintres',
      setBody: 'Les parcours achetés restent débloqués sur cet appareil. Tu n’as pas besoin de compte chez nous.',
      setShow: 'Voir l’offre',
      privacy: 'Seuls les parcours débloqués sont enregistrés, sur cet appareil.',
      lockedAria: 'À débloquer : {title}'
    },
    it: {
      kicker: 'Sblocca un percorso',
      lead: '{n} dipinti in {s} tappe, con biografia e mappa.',
      preview: 'Puoi prima guardare con calma tutte le tappe e le storie.',
      optPath: 'Solo questo percorso',
      optPathS: 'Un percorso di pittore, acquisto unico',
      optSmall: 'I percorsi più brevi',
      optSmallS: '{k} percorsi brevi, acquisto unico',
      optAll: 'Tutti i percorsi',
      optAllS: 'Tutti i {k} percorsi sbloccabili, acquisto unico',
      buy: 'Acquista',
      owned: 'Sbloccato',
      once: 'Acquisto unico, nessun abbonamento, nessuna pubblicità.',
      free: 'Sempre gratis: il dipinto del giorno e i singoli dipinti della galleria. Dove hai già dipinto, puoi continuare a dipingere.',
      restore: 'Ripristina acquisti',
      close: 'Chiudi',
      noPrice: 'Prezzo in arrivo',
      webNote: 'Nel browser non si può acquistare nulla. Tutto ciò che è gratis resta gratis.',
      playNote: 'Il pagamento avviene tramite Google Play. Con lo stesso account Google puoi ripristinare gli acquisti.',
      playUnready: 'Gli acquisti non sono ancora disponibili in questa versione.',
      testNote: 'Modalità test: non viene addebitato nulla, gli acquisti sono solo simulati.',
      testReset: 'Azzera acquisti di prova',
      thanks: 'Sbloccato. Buona pittura!',
      cancelled: 'Acquisto annullato.',
      failed: 'Non ha funzionato. Riprova più tardi.',
      restored: 'Ripristinati: {n}',
      restoredNone: 'Nessun acquisto trovato.',
      lockPill: 'Sbloccabile',
      bannerT: 'Questo percorso si può sbloccare.',
      bannerS: 'Puoi già leggere le tappe e le storie. Per dipingere, sblocca il percorso una volta.',
      bannerBtn: 'Sblocca',
      setTitle: 'Percorsi dei pittori',
      setBody: 'I percorsi acquistati restano sbloccati su questo dispositivo. Non ti serve un account presso di noi.',
      setShow: 'Vedi offerta',
      privacy: 'Su questo dispositivo viene salvato solo quali percorsi sono sbloccati.',
      lockedAria: 'Sbloccabile: {title}'
    }
  };

  let hooks = {};
  function lang(){ return (window.I18N && window.I18N.lang) || 'de'; }
  function T(k, v){
    let s = (TX[lang()] || TX.de)[k];
    if (s == null) s = TX.de[k] || k;
    if (v) Object.keys(v).forEach(function (x) { s = s.split('{' + x + '}').join(String(v[x])); });
    return s;
  }
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  // ---------- local entitlement cache (no personal data: product ids only) ----------
  function readStore(){
    try { const o = JSON.parse(localStorage.getItem(STORE_KEY)); if (o && o.v === 1 && o.src) return o; } catch (e) {}
    return { v: 1, src: {} };
  }
  function writeStore(o){ try { localStorage.setItem(STORE_KEY, JSON.stringify(o)); } catch (e) {} }
  const KNOWN = new Set((CFG.products || []).map(p => p.id));
  function setOwned(src, ids){
    const o = readStore();
    o.src[src] = Array.from(new Set(ids.filter(id => KNOWN.has(id)))).sort();
    writeStore(o);
    changed();
  }
  function addOwned(src, id){
    const o = readStore();
    setOwned(src, (o.src[src] || []).concat([id]));
  }

  // ---------- adapters ----------
  const testAdapter = {
    id: 'test',
    note: () => T('testNote'),
    canBuy: true,
    details: ids => Promise.resolve(ids.map(id => ({ id, price: placeholderPrice(id) }))),
    /* Simuliertes «Play-Konto» (nur Produkt-IDs), damit Wiederherstellen testbar ist. */
    purchase: id => new Promise(res => setTimeout(() => {
      const led = testLedger(); if (led.indexOf(id) < 0) led.push(id); writeLedger(led);
      addOwned('test', id); res({ ok: true });
    }, 60)),
    restore: () => { const led = testLedger(); setOwned('test', led); return Promise.resolve(led.slice()); }
  };
  const LEDGER_KEY = 'masilano.unlock.testledger.v1';
  function testLedger(){ try { const a = JSON.parse(localStorage.getItem(LEDGER_KEY)); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  function writeLedger(a){ try { localStorage.setItem(LEDGER_KEY, JSON.stringify(a)); } catch (e) {} }
  const webAdapter = {
    id: 'web',
    note: () => T('webNote'),
    canBuy: false,
    details: ids => Promise.resolve(ids.map(id => ({ id, price: placeholderPrice(id) }))),
    purchase: () => Promise.resolve({ ok: false, unavailable: true }),
    restore: () => Promise.resolve([])
  };
  function playAdapter(service){
    const ack = (CFG.play && CFG.play.ackUrl) || '';
    const method = (CFG.play && CFG.play.method) || 'https://play.google.com/billing';
    function verify(id, token){
      if (!ack) return Promise.resolve(false);
      return fetch(ack, { method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ productId: id, purchaseToken: token }) })
        .then(r => r.ok, () => false);
    }
    return {
      id: 'play',
      note: () => ack ? T('playNote') : T('playUnready'),
      canBuy: !!ack,
      details: ids => service.getDetails(ids).then(list => list.map(d => ({
        id: d.itemId,
        price: d.price ? fmt(Number(d.price.value), d.price.currency) : ''
      }))),
      purchase: async function (id) {
        if (!ack) return { ok: false, unavailable: true };
        let resp;
        try {
          const req = new PaymentRequest([{ supportedMethods: method, data: { sku: id } }],
            { total: { label: 'Total', amount: { currency: 'USD', value: '0' } } });
          resp = await req.show();
        } catch (e) {
          return { ok: false, cancelled: !!(e && e.name === 'AbortError') };
        }
        const token = resp && resp.details && resp.details.purchaseToken;
        const ok = !!token && await verify(id, token);
        try { await resp.complete(ok ? 'success' : 'fail'); } catch (e) {}
        if (ok) addOwned('play', id);
        return { ok };
      },
      restore: async function () {
        const list = await service.listPurchases();
        const ids = [];
        for (const p of list) {
          if (!KNOWN.has(p.itemId)) continue;
          if (ack) { if (await verify(p.itemId, p.purchaseToken)) ids.push(p.itemId); }
          else ids.push(p.itemId);
        }
        setOwned('play', ids);
        return ids;
      },
      /* Stiller Abgleich beim Start: nur lokal über Play, kein eigener Server. */
      sync: function () {
        return service.listPurchases().then(list => {
          setOwned('play', list.map(p => p.itemId));
        }, () => {});
      }
    };
  }

  let adapter = null;
  let adapterReady = null;
  function pickAdapter(){
    if (adapterReady) return adapterReady;
    adapterReady = (async function () {
      const want = CFG.adapter || 'auto';
      if (want === 'test' && CFG.allowTestMode) return (adapter = testAdapter);
      if ((want === 'auto' || want === 'play') && 'getDigitalGoodsService' in window) {
        try {
          const svc = await window.getDigitalGoodsService((CFG.play && CFG.play.method) || 'https://play.google.com/billing');
          if (svc) { adapter = playAdapter(svc); adapter.sync(); return adapter; }
        } catch (e) {}
      }
      if (want === 'auto' && CFG.allowTestMode) return (adapter = testAdapter);
      return (adapter = webAdapter);
    })();
    return adapterReady;
  }
  function activeSrc(){
    if (adapter) return adapter.id;
    const want = CFG.adapter || 'auto';
    if (CFG.allowTestMode && (want === 'test' || (want === 'auto' && !('getDigitalGoodsService' in window)))) return 'test';
    return 'play';
  }

  // ---------- catalogue & lock logic ----------
  const FREE = new Set(CFG.freePaths || []);
  function allPaths(){ return (window.PATHS || []).filter(p => p && p.id); }
  function paidPathIds(){ return allPaths().map(p => p.id).filter(id => !FREE.has(id)); }
  function productPaths(prod){ return prod.paths === '*' ? paidPathIds() : (prod.paths || []); }
  function ownedIds(){ return readStore().src[activeSrc()] || []; }
  function productById(id){ return (CFG.products || []).find(p => p.id === id); }
  function pathPaid(id){ return !!id && !FREE.has(id); }
  function pathOwned(id){
    return ownedIds().some(pid => { const pr = productById(pid); return pr && productPaths(pr).indexOf(id) >= 0; });
  }
  function pathLocked(id){ return pathPaid(id) && !pathOwned(id) && !pathGrandfathered(id); }
  function galleryIds(){
    const gpN = (window.GALLERY_PACKS || []).length;
    if (!hooks._gal || hooks._galN !== gpN) {
      hooks._galN = gpN;
      hooks._gal = new Set((window.PAINTINGS || []).map(p => p.id).concat((window.STORY_WORKS || []).map(w => w.id)));
      // v10.43h: works of the lazily loaded gallery packs are gallery pictures (free like the others).
      (window.GALLERY_PACKS || []).forEach(g => { if (g && g[1]) String(g[1]).split(' ').forEach(id => { if (id) hooks._gal.add(id); }); });
    }
    return hooks._gal;
  }
  function galleryFree(pid, owner){
    if (CFG.freeGallery === 'outside-paths') return !owner && galleryIds().has(pid);
    if (CFG.freeGallery === false) return false;
    return galleryIds().has(pid);
  }
  // Bestandsschutz: beim ersten Start mit eingeschaltetem Feature wird einmalig festgehalten,
  // in welchen Wegen schon gemalt wurde (nur Weg-IDs, lokal). Spätere Fortschritte erweitern das nicht.
  const GF_KEY = 'masilano.unlock.bestand.v1';
  let grandfather = null;
  function snapshotGrandfather(){
    try { const o = JSON.parse(localStorage.getItem(GF_KEY)); if (o && Array.isArray(o.paths)) { grandfather = new Set(o.paths); return; } } catch (e) {}
    const paths = [];
    if (CFG.keepStarted === 'path' && hooks.hasProgress) {
      allPaths().forEach(path => {
        const hit = (path.stations || []).some(st => (st.works || []).some(w => hooks.hasProgress(w.pid)));
        if (hit) paths.push(path.id);
      });
    }
    grandfather = new Set(paths);
    try { localStorage.setItem(GF_KEY, JSON.stringify({ v: 1, paths: paths.sort() })); } catch (e) {}
  }
  function pathGrandfathered(id){ return CFG.keepStarted === 'path' && !!grandfather && grandfather.has(id); }
  function owningPathId(pid){
    if (hooks.pathOwning) return hooks.pathOwning(pid);
    for (const path of allPaths()) for (const st of (path.stations || [])) for (const w of (st.works || [])) if (w.pid === pid) return path.id;
    return null;
  }
  function isLocked(pid){
    const owner = owningPathId(pid);
    if (galleryFree(pid, owner)) return false;
    if (!owner || !pathLocked(owner)) return false;
    if (CFG.freeDaily !== false && hooks.dailyId && hooks.dailyId() === pid) return false;
    if (CFG.keepStarted !== false && hooks.hasProgress && hooks.hasProgress(pid)) return false;
    return true;
  }
  function productsFor(pathId){
    const out = [];
    (CFG.products || []).forEach(pr => {
      if (pr.paths === '*') return;
      if ((pr.paths || []).indexOf(pathId) >= 0) out.push(pr);
    });
    const all = (CFG.products || []).find(pr => pr.paths === '*');
    if (all && pathPaid(pathId)) out.push(all);
    return out;
  }
  function kindOf(pr){ return pr.kind || 'path'; }

  // ---------- prices ----------
  const EUROZONE = ['AT','BE','CY','DE','EE','ES','FI','FR','GR','HR','IE','IT','LT','LU','LV','MT','NL','PT','SI','SK'];
  function currency(){
    if (CFG.currency) return CFG.currency;
    const loc = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    const reg = (loc.split('-')[1] || '').toUpperCase();
    if (reg === 'CH' || reg === 'LI') return 'CHF';
    if (EUROZONE.indexOf(reg) >= 0) return 'EUR';
    if (!reg && /^(de|fr|it|es)/.test(loc)) return 'EUR';
    return 'USD';
  }
  function fmt(v, cur){
    if (!isFinite(v)) return '';
    const loc = { de: 'de-CH', en: 'en', es: 'es', fr: 'fr-CH', it: 'it-CH' }[lang()] || 'de-CH';
    try { return new Intl.NumberFormat(loc, { style: 'currency', currency: cur }).format(v); }
    catch (e) { return cur + ' ' + v.toFixed(2); }
  }
  function placeholderPrice(id){
    const pr = productById(id);
    const tab = pr && CFG.prices && CFG.prices[kindOf(pr)];
    const cur = currency();
    return tab && tab[cur] != null ? fmt(tab[cur], cur) : '';
  }

  // ---------- UI ----------
  let sheet = null, current = null, busy = false;
  function injectCss(){
    if (document.getElementById('unlockCss')) return;
    const l = document.createElement('link');
    l.id = 'unlockCss'; l.rel = 'stylesheet'; l.href = 'unlock.css?v=1045';
    document.head.appendChild(l);
  }
  function ensureSheet(){
    if (sheet) return sheet;
    injectCss();
    sheet = document.createElement('div');
    sheet.id = 'unlockSheet';
    sheet.className = 'sheet unlock-sheet hidden';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.setAttribute('aria-labelledby', 'ulTitle');
    sheet.innerHTML = '<div class="card unlock-card"></div>';
    sheet.addEventListener('click', e => { if (e.target === sheet) hide(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && sheet && !sheet.classList.contains('hidden')) hide(); });
    document.body.appendChild(sheet);
    return sheet;
  }
  function toast(msg){
    if (hooks.toast) { try { hooks.toast(msg); return; } catch (e) {} }
    const el = document.createElement('div');
    el.className = 'unlock-toast'; el.setAttribute('role', 'status'); el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }
  function pathTitle(path){ return hooks.L ? hooks.L(path, 'title') : (path.title || path.name); }
  function workCount(path){ return (path.stations || []).reduce((a, s) => a + (s.works || []).length, 0); }

  function render(){
    const card = sheet.querySelector('.unlock-card');
    const path = current && allPaths().find(p => p.id === current.pathId);
    const prods = path ? productsFor(path.id) : (CFG.products || []).filter(p => p.paths === '*' || p.kind === 'small');
    const ad = adapter || webAdapter;
    const owned = new Set(ownedIds());
    const head = path
      ? `<div class="ul-cover" style="background-image:url(data/${esc(path.cover)}-orig.jpg)" aria-hidden="true"></div>
         <p class="ul-kicker">${esc(T('kicker'))}</p>
         <h2 id="ulTitle">${esc(pathTitle(path))}</h2>
         <p class="ul-lead">${esc(T('lead', { n: workCount(path), s: (path.stations || []).length }))} ${esc(T('preview'))}</p>`
      : `<p class="ul-kicker">${esc(T('setTitle'))}</p><h2 id="ulTitle">${esc(T('optAll'))}</h2>`;
    const opts = prods.map(pr => {
      const k = kindOf(pr);
      const name = k === 'all' ? T('optAll') : k === 'small' ? T('optSmall') : T('optPath');
      const sub = k === 'all' ? T('optAllS', { k: productPaths(pr).length }) : k === 'small' ? T('optSmallS', { k: productPaths(pr).length }) : T('optPathS');
      const has = owned.has(pr.id);
      const price = (current && current.prices && current.prices[pr.id]) || '';
      const btn = has
        ? `<span class="ul-owned">✓ ${esc(T('owned'))}</span>`
        : `<button type="button" class="btn ul-buy" data-buy="${esc(pr.id)}" ${ad.canBuy && !busy ? '' : 'disabled'}>${esc(T('buy'))}</button>`;
      return `<div class="ul-opt" data-product="${esc(pr.id)}">
        <div class="ul-ot"><div class="ul-on">${esc(name)}</div><div class="ul-os">${esc(sub)}</div></div>
        <div class="ul-price" data-price="${esc(pr.id)}">${esc(price || T('noPrice'))}</div>${btn}</div>`;
    }).join('');
    card.innerHTML = `${head}
      <div class="ul-opts">${opts}</div>
      <p class="ul-once">${esc(T('once'))}</p>
      <p class="ul-free">${esc(T('free'))}</p>
      <p class="ul-note" data-adapter="${esc(ad.id)}">${esc(ad.note())}</p>
      <div class="btns ul-btns">
        <button type="button" class="btn ghost" id="ulRestore">${esc(T('restore'))}</button>
        <button type="button" class="btn ghost" id="ulClose">${esc(T('close'))}</button>
      </div>
      ${ad.id === 'test' ? `<button type="button" class="ul-testreset" id="ulTestReset">${esc(T('testReset'))}</button>` : ''}
      <p class="ul-priv">${esc(T('privacy'))}</p>`;
    card.querySelectorAll('[data-buy]').forEach(b => { b.onclick = () => buy(b.getAttribute('data-buy')); });
    card.querySelector('#ulRestore').onclick = restore;
    card.querySelector('#ulClose').onclick = hide;
    const tr = card.querySelector('#ulTestReset');
    if (tr) tr.onclick = () => { writeLedger([]); setOwned('test', []); render(); };
  }
  function loadPrices(){
    const prods = current && current.pathId ? productsFor(current.pathId) : (CFG.products || []);
    const ad = adapter || webAdapter;
    return ad.details(prods.map(p => p.id)).then(list => {
      current.prices = {};
      list.forEach(d => { current.prices[d.id] = d.price; });
      if (sheet && !sheet.classList.contains('hidden')) render();
    }, () => {});
  }
  function show(opts){
    ensureSheet();
    current = { pathId: (opts && opts.pathId) || null, pid: (opts && opts.pid) || null, prices: {} };
    render();
    sheet.classList.remove('hidden');
    pickAdapter().then(() => { render(); return loadPrices(); });
    const first = sheet.querySelector('#ulClose');
    if (first) try { first.focus({ preventScroll: true }); } catch (e) {}
  }
  function showFor(pid){ show({ pid, pathId: owningPathId(pid) }); }
  function hide(){ if (sheet) sheet.classList.add('hidden'); }
  async function buy(id){
    if (busy) return;
    busy = true; render();
    const ad = await pickAdapter();
    let r = { ok: false };
    try { r = await ad.purchase(id); } catch (e) { r = { ok: false }; }
    busy = false;
    if (r.ok) {
      toast(T('thanks'));
      hide();
      const pid = current && current.pid;
      if (pid && !isLocked(pid) && hooks.openWork) hooks.openWork(pid);
    } else {
      toast(r.cancelled ? T('cancelled') : T('failed'));
      if (sheet) render();
    }
  }
  async function restore(){
    const ad = await pickAdapter();
    let ids = [];
    try { ids = await ad.restore(); } catch (e) { toast(T('failed')); return; }
    toast(ids.length ? T('restored', { n: ids.length }) : T('restoredNone'));
    changed();
    if (sheet && !sheet.classList.contains('hidden')) render();
  }

  // Banner in the path view and a row in the settings sheet.
  function pathBanner(path){
    injectCss();
    const el = document.createElement('div');
    el.className = 'ul-banner';
    el.setAttribute('data-unlock-banner', path.id);
    el.innerHTML = `<div class="ul-bt"><div class="ul-bh">${esc(T('bannerT'))}</div><div class="ul-bs">${esc(T('bannerS'))}</div></div>
      <button type="button" class="btn sharebtn ul-bbtn">${esc(T('bannerBtn'))}</button>`;
    el.querySelector('button').onclick = () => show({ pathId: path.id });
    return el;
  }
  function lockPill(){ return `<span class="ul-pill"><svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="1.5" fill="currentColor"/><path d="M5.2 7V5.2a2.8 2.8 0 0 1 5.6 0V7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>${esc(T('lockPill'))}</span>`; }
  function settingsRow(){
    const card = document.querySelector('#settings .card');
    if (!card || card.querySelector('#ulSetRow')) return;
    injectCss();
    const row = document.createElement('div');
    row.className = 'setrow setcol';
    row.id = 'ulSetRow';
    const btns = card.querySelector('.btns');
    card.insertBefore(row, btns);
    renderSettingsRow();
  }
  function renderSettingsRow(){
    const row = document.getElementById('ulSetRow');
    if (!row) return;
    row.innerHTML = `<div class="settx"><div class="sett">${esc(T('setTitle'))}</div><p class="sets">${esc(T('setBody'))}</p></div>
      <div class="ul-setbtns"><button type="button" class="btn ghost" id="ulSetShow">${esc(T('setShow'))}</button>
      <button type="button" class="btn ghost" id="ulSetRestore">${esc(T('restore'))}</button></div>`;
    row.querySelector('#ulSetShow').onclick = () => show({});
    row.querySelector('#ulSetRestore').onclick = restore;
  }

  const listeners = [];
  function changed(){ listeners.forEach(fn => { try { fn(); } catch (e) {} }); }

  window.MASILANO_UNLOCK = {
    enabled: () => true,
    attach: function (h) {
      hooks = Object.assign({}, h || {});
      snapshotGrandfather();
      if (typeof hooks.onChange === 'function') listeners.push(hooks.onChange);
      injectCss();
      settingsRow();
      pickAdapter();
    },
    onChange: fn => listeners.push(fn),
    isLocked, pathLocked, pathPaid, pathOwned, pathGrandfathered, productsFor, ownedIds,
    show, showFor, hide, restore, buy, pathBanner, lockPill, renderSettingsRow, T,
    get adapterId(){ return adapter ? adapter.id : null; },
    ready: () => pickAdapter().then(a => a.id),
    STORE_KEY,
    /* Nur Testmodus: lokalen Freischaltstand verwerfen (wie Neuinstallation), Konto bleibt. */
    _testDropLocal: () => { if (CFG.allowTestMode) setOwned('test', []); },
    _testResetAll: () => { if (CFG.allowTestMode) { writeLedger([]); setOwned('test', []); } }
  };
})();
