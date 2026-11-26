/* Masilano v10.42r – Freischalten der Malerwege (Konfiguration).
   enabled:false = Feature AUS. Dann bleibt die App exakt wie bisher: alles gratis,
   keine zusätzliche Oberfläche, kein Speicherzugriff, keine Netzwerkanfrage.
   Preise unten: Entscheid Andi vom 24.11.2026 (Platzhalter bis zur Eingabe in der Play Console). In der Android-App
   zeigt die App die Preise aus Google Play (getDetails), nicht diese Werte. */
(function () {
  var base = {
    version: '10.42r-unlock-1',
    /* false = AUS (Standard). true = überall. 'play-only' = nur in der Android-App (Play Billing vorhanden). */
    enabled: false,
    /* 'auto' = Google Play, wenn verfügbar; sonst Web-Platzhalter (oder Testmodus, falls erlaubt). */
    adapter: 'auto',
    /* Testmodus simuliert Käufe lokal. Nur für Tests/Entwicklung, im Release false lassen. */
    allowTestMode: false,
    play: {
      method: 'https://play.google.com/billing',
      /* Pflicht vor Live: Google erstattet nicht bestätigte Käufe nach 3 Tagen.
         Hier die URL des Bestätigungs-Endpunkts (z.B. Worker), der das Kauf-Token
         mit der Google Play Developer API bestätigt. Leer = Play-Kauf wird nicht angeboten. */
      ackUrl: ''
    },
    /* Entscheid Andi 24.11.2026 23:18: KEINE Gratis-Lebenswege. Gratis bleiben nur
       das Bild des Tages und die Galerie-Einzelbilder ausserhalb von Wegen. */
    freeDaily: true,
    /* 'outside-paths' = nur Galerie-/Geschichten-Bilder, die zu keinem Weg gehören. true = alle Galerie-Bilder. */
    freeGallery: 'outside-paths',
    /* Bestandsschutz: 'path' = Wege, in denen beim ersten Einschalten schon gemalt war, bleiben ganz offen;
       dazu bleibt jedes Bild mit Fortschritt malbar. true = nur Bilder mit Fortschritt. */
    keepStarted: 'path',
    freePaths: [],
    /* Produkt-IDs = Play-Console-Produkt-IDs (einmalige, nicht verbrauchbare Käufe). */
    products: [
      { id: 'path_vangogh',    paths: ['vangogh'] },
      { id: 'path_anker',      paths: ['anker'] },
      { id: 'path_monet',      paths: ['monet'] },
      { id: 'path_hokusai',    paths: ['hokusai'] },
      { id: 'path_klimt',      paths: ['klimt'] },
      { id: 'path_hodler',     paths: ['hodler'] },
      { id: 'path_cezanne',    paths: ['cezanne'] },
      { id: 'path_hiroshige',  paths: ['hiroshige'] },
      { id: 'path_renoir',     paths: ['renoir'] },
      { id: 'path_pissarro',   paths: ['pissarro'] },
      { id: 'path_turner',     paths: ['turner'] },
      { id: 'path_rembrandt',  paths: ['rembrandt'] },
      { id: 'path_sisley',     paths: ['sisley'] },
      { id: 'path_friedrich',  paths: ['friedrich'] },
      /* Neu (parallel gebaut, 24.11.2026): Frederic Edwin Church. */
      { id: 'path_church',     paths: ['church'] },
      /* Ausbau zum vollen Lebensweg (24.11.2026): Edgar Degas. */
      { id: 'path_degas',      paths: ['degas'] },
      /* Ausbau zum vollen Lebensweg (25.11.2026): Édouard Manet. */
      { id: 'path_manet',      paths: ['manet'] },
      /* Ausbau zum Lebensweg (25.11.2026, kuerzer: wenige sichere Scans): Francisco de Goya. */
      { id: 'path_goya',       paths: ['goya'] },
      /* Ausbau zum vollen Lebensweg (25.11.2026): Paul Gauguin. */
      { id: 'path_gauguin',    paths: ['gauguin'] },
      /* Ausbau zum Lebensweg (25.11.2026, kuerzer: wenige sichere Scans): Diego Velázquez. */
      { id: 'path_velazquez',  paths: ['velazquez'] },
      /* Ausbau zum vollen Lebensweg (25.11.2026): James McNeill Whistler. */
      { id: 'path_whistler',   paths: ['whistler'] },
      /* Ausbau zum vollen Lebensweg (25.11.2026): Eugène Delacroix. */
      { id: 'path_delacroix',  paths: ['delacroix'] },
      /* Ausbau zum vollen Lebensweg (25.11.2026): Berthe Morisot. */
      { id: 'path_morisot',    paths: ['morisot'] },
      /* Ausbau zum vollen Lebensweg (25.11.2026): Georges Seurat. */
      { id: 'path_seurat',     paths: ['seurat'] },
      /* Ausbau zum Lebensweg (25.11.2026, mittlere Laenge): John Constable. */
      { id: 'path_constable',  paths: ['constable'] },
      /* Ausbau zum Lebensweg (25.11.2026, mittlere Laenge): Mary Cassatt. */
      { id: 'path_cassatt',    paths: ['cassatt'] },
      /* Ausbau zum Lebensweg (25.11.2026, ehrlich kurz): Jean-François Millet. */
      { id: 'path_millet',     paths: ['millet'] },
      /* Ausbau zum Lebensweg (25.11.2026, ehrlich kurz): Canaletto. */
      { id: 'path_canaletto',  paths: ['canaletto'] },
      /* Ausbau zum Lebensweg (25.11.2026, ehrlich kurz): Henri Rousseau. */
      { id: 'path_rousseau',   paths: ['rousseau'] },
      /* Neu (25.11.2026): Winslow Homer. */
      { id: 'path_homer',      paths: ['homer'] },
      /* Neu (25.11.2026): Thomas Moran. */
      { id: 'path_moran',      paths: ['moran'] },
      /* Neu (25.11.2026): Albert Bierstadt (ehrlich kurz). */
      { id: 'path_bierstadt',  paths: ['bierstadt'] },
      /* Neu (25.11.2026): Christen Købke (SMK, Public Domain). */
      { id: 'path_kobke',      paths: ['kobke'] },
      /* Neu (25.11.2026): P.S. Krøyer (SMK Public Domain + Met CC0). */
      { id: 'path_kroyer',     paths: ['kroyer'] },
      /* Neu (25.11.2026): Thomas Cole. */
      { id: 'path_cole',       paths: ['cole'] },
      /* Neu (25.11.2026): Suzuki Harunobu (Farbholzschnitt, AIC/Met/CMA CC0). */
      { id: 'path_harunobu',   paths: ['harunobu'] },
      /* Neu (25.11.2026): C.W. Eckersberg (SMK, Public Domain). */
      { id: 'path_eckersberg', paths: ['eckersberg'] },
      { id: 'path_lundbye', paths: ['lundbye'] },
      { id: 'path_caillebotte', paths: ['caillebotte'] },
      { id: 'path_inness', paths: ['inness'] },
      { id: 'path_heade', paths: ['heade'] },
      { id: 'path_sargent', paths: ['sargent'] },
      { id: 'path_corot', paths: ['corot'] },
      { id: 'path_boudin', paths: ['boudin'] },
      { id: 'path_redon', paths: ['redon'] },
      { id: 'path_courbet', paths: ['courbet'] },
      { id: 'path_modigliani', paths: ['modigliani'] },
      { id: 'bundle_kleine_wege', kind: 'small',
        paths: ['segantini', 'vallotton', 'spitzweg', 'moser', 'zuend', 'calame', 'wolf',
                'blau', 'koller', 'diday', 'schindler', 'wisinger', 'marc',
                /* Wege mit nur einer Station (Entscheid 24.11.2026 23:18: nicht mehr gratis). */
                'durer', 'macke',
                'vaneyck', 'vermeer',
                'waterhouse', 'leonardo', 'bruegel', 'raffael'] },
      /* Gesamtpaket: alle Wege. paths:'*' = auch künftige Wege. */
      { id: 'bundle_alle_wege', kind: 'all', paths: '*' }
    ],
    /* Preise nur für Web-Hinweis und Testmodus; in der Android-App gelten die Play-Preise. */
    prices: {
      /* Entscheid Andi 24.11.2026: günstig für viele Spieler. */
      path:  { CHF: 1.00, EUR: 0.99, USD: 0.99 },
      small: { CHF: 1.00, EUR: 0.99, USD: 0.99 },
      all:   { CHF: 9.50, EUR: 9.49, USD: 9.99 }
    }
  };
  /* Nur Tests (Playwright-Init-Skript) setzen __MASILANO_UNLOCK_TEST__. */
  var o = window.__MASILANO_UNLOCK_TEST__;
  if (o && typeof o === 'object') {
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) base[k] = o[k];
  }
  window.MASILANO_UNLOCK_CONFIG = base;
})();
