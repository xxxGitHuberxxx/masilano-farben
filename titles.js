/* Masilano honorary titles and streak ranks (v10.35). Numeric IDs only; labels are rendered in the viewer's language. */
(function () {
  var PATH_IDS = ["vangogh","monet","hokusai","klimt","anker","hodler","cezanne","hiroshige","renoir","pissarro","turner","rembrandt","sisley","friedrich","segantini","vallotton","giacometti","spitzweg","moser","zuend","calame","wolf","ancher","blau","koller","diday","schindler","egner","wisinger","marc","durer","macke","morisot","velazquez","degas","manet","munch","delacroix","goya","seurat","canaletto","wood","rousseau","whistler","vaneyck","millet","vermeer","constable","waterhouse","leonardo","cassatt","gauguin","klee","mondrian","bruegel","raffael","botticelli","church","homer","moran","bierstadt","kobke","kroyer","cole","harunobu","eckersberg","lundbye","caillebotte","inness","heade","sargent","corot","boudin","redon","courbet","modigliani","eisen"];
  // v10.42r: paths removed for legal reasons keep their slot so numeric title IDs stay stable; their titles are no longer valid.
  var RETIRED = { botticelli: 1, klee: 1, wood: 1, mondrian: 1, munch: 1, giacometti: 1, ancher: 1, egner: 1 };
  var STREAK_MAX = 5, PATH_BASE = 100, ALBUM_BASE = 200, ARTIST_COUNT = PATH_IDS.length;
  // v10.43: the first 57 slots keep their IDs (100+i / 200+i) for existing players and the leaderboard.
  // Newer paths (slot 57 = church onwards) get their own wide ranges, so 100+ paths never collide:
  // workshop titles 1000+k, curator titles 2000+k (k = slot - 57, up to 999 new paths).
  var LEGACY_COUNT = 57, PATH2_BASE = 1000, ALBUM2_BASE = 2000, RANGE2 = 1000;
  // The live leaderboard worker (src/titles.js, TITLE_ARTIST_COUNT 57) only accepts the legacy ranges.
  // Set to true only after the worker has been updated to the same ranges (draft: docs/v1043-titel-ids.md).
  var SERVER_V2 = false;
  var CANON = {
    rembrandt: "Rembrandt van Rijn",
    friedrich: "Caspar David Friedrich",
    sisley: "Alfred Sisley",
    turner: "J. M. W. Turner"
  };
  var ALIAS = {
    "Rembrandt": "rembrandt",
    "Rembrandt van Rijn": "rembrandt",
    "Friedrich": "friedrich",
    "Caspar David Friedrich": "friedrich",
    "Sisley": "sisley",
    "Alfred Sisley": "sisley",
    "William Turner": "turner",
    "J. M. W. Turner": "turner"
  };
  var ELDER = {
    bruegel: { de: "Pieter Bruegel der Ältere", en: "Pieter Bruegel the Elder", es: "Pieter Bruegel el Viejo", fr: "Pieter Bruegel l’Ancien", it: "Pieter Bruegel il Vecchio" }
  };
  var RANKS = [
    { id: 1, n: 3, de: "Lehrling", en: "Apprentice", es: "Aprendiz", fr: "Apprenti", it: "Apprendista" },
    { id: 2, n: 7, de: "Geselle", en: "Journeyman", es: "Oficial", fr: "Compagnon", it: "Garzone" },
    { id: 3, n: 14, de: "Malermeister", en: "Master Painter", es: "Maestro pintor", fr: "Maître peintre", it: "Maestro pittore" },
    { id: 4, n: 21, de: "Hofmaler", en: "Court Painter", es: "Pintor de corte", fr: "Peintre de cour", it: "Pittore di corte" },
    { id: 5, n: 28, de: "Grossmeister der Palette", en: "Grand Master of the Palette", es: "Gran maestro de la paleta", fr: "Grand maître de la palette", it: "Gran maestro della tavolozza" }
  ];
  var TITLE_KEY = "masilano.title.v1";

  function langOf() {
    return (window.I18N && window.I18N.lang) || "de";
  }
  function pathIndex(id) {
    var i = PATH_IDS.indexOf(id);
    return (i < 0 || RETIRED[id]) ? -1 : i;
  }
  // slot index -> {path, album} title IDs; reverse lookup below.
  function slotOf(id) {
    if (id >= PATH_BASE && id < PATH_BASE + Math.min(ARTIST_COUNT, LEGACY_COUNT)) return { i: id - PATH_BASE, kind: "path" };
    if (id >= ALBUM_BASE && id < ALBUM_BASE + Math.min(ARTIST_COUNT, LEGACY_COUNT)) return { i: id - ALBUM_BASE, kind: "album" };
    if (id >= PATH2_BASE && id < PATH2_BASE + RANGE2 && LEGACY_COUNT + id - PATH2_BASE < ARTIST_COUNT) return { i: LEGACY_COUNT + id - PATH2_BASE, kind: "path" };
    if (id >= ALBUM2_BASE && id < ALBUM2_BASE + RANGE2 && LEGACY_COUNT + id - ALBUM2_BASE < ARTIST_COUNT) return { i: LEGACY_COUNT + id - ALBUM2_BASE, kind: "album" };
    return null;
  }
  function idFor(i, kind) {
    if (i < LEGACY_COUNT) return (kind === "path" ? PATH_BASE : ALBUM_BASE) + i;
    return (kind === "path" ? PATH2_BASE : ALBUM2_BASE) + (i - LEGACY_COUNT);
  }
  function isValidTitleId(id) {
    if (typeof id !== "number" || !isFinite(id) || Math.floor(id) !== id) return false;
    if (id >= 1 && id <= STREAK_MAX) return true;
    var s = slotOf(id);
    return !!s && !RETIRED[PATH_IDS[s.i]];
  }
  // True if the live leaderboard accepts this ID (streak ranks and the legacy ranges).
  function isServerTitleId(id) {
    if (!isValidTitleId(id)) return false;
    if (SERVER_V2 || id <= STREAK_MAX) return true;
    var s = slotOf(id);
    return !!s && s.i < LEGACY_COUNT;
  }
  function parseTitleId(v) {
    if (v == null || v === "") return { id: null };
    if (typeof v === "number" && isValidTitleId(v)) return { id: v };
    if (typeof v === "string" && /^-?\d+$/.test(v) && isValidTitleId(+v)) return { id: +v };
    return { error: "bad_title" };
  }
  function artistName(pathId, lang) {
    lang = lang || langOf();
    if (ELDER[pathId] && ELDER[pathId][lang]) return ELDER[pathId][lang];
    if (CANON[pathId]) return CANON[pathId];
    var path = (window.PATHS || []).find(function (p) { return p && p.id === pathId; });
    if (path && window.I18N && typeof window.I18N.loc === "function") {
      var loc = window.I18N.loc(path, "name");
      if (loc) return loc;
    }
    return (path && (path.name || path.title)) || pathId;
  }
  function aliasPathId(artist) {
    if (!artist) return null;
    if (ALIAS[artist]) return ALIAS[artist];
    var list = window.PATHS || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i] && list[i].name === artist) return list[i].id;
    }
    return null;
  }
  function honorWorkshop(lang, artist) {
    var a = String(artist || "").trim();
    if (lang === "en") return "Honorary member of the " + a + " workshop";
    if (lang === "es") return "Miembro de honor del taller de " + a;
    if (lang === "fr") return "Membre d’honneur de l’atelier " + a;
    if (lang === "it") return "Membro onorario della bottega di " + a;
    return "Ehrenmitglied der " + a.replace(/ /g, "-") + "-Werkstatt";
  }
  function honorCurator(lang, artist) {
    var a = String(artist || "").trim();
    if (lang === "en") return "Curator of the " + a + " collection";
    if (lang === "es") return "Conservador de la colección " + a;
    if (lang === "fr") return "Conservateur de la collection " + a;
    if (lang === "it") return "Curatore della collezione " + a;
    return "Kurator der Sammlung " + a;
  }
  function formatTitle(id, lang) {
    lang = lang || langOf();
    if (!isValidTitleId(id)) return "";
    if (id >= 1 && id <= STREAK_MAX) {
      var r = RANKS[id - 1];
      return (r && (r[lang] || r.de)) || "";
    }
    var s = slotOf(id);
    if (s && s.kind === "path") return honorWorkshop(lang, artistName(PATH_IDS[s.i], lang));
    if (s && s.kind === "album") return honorCurator(lang, artistName(PATH_IDS[s.i], lang));
    return "";
  }
  function pathTitleId(pathId) {
    var i = pathIndex(pathId);
    return i < 0 ? 0 : idFor(i, "path");
  }
  function albumTitleId(pathId) {
    var i = pathIndex(pathId);
    return i < 0 ? 0 : idFor(i, "album");
  }
  function loadChosen() {
    try {
      var o = JSON.parse(localStorage.getItem(TITLE_KEY) || "null") || {};
      var p = parseTitleId(o.id);
      return p.id || null;
    } catch (e) { return null; }
  }
  function saveChosen(id) {
    var p = id == null ? { id: null } : parseTitleId(id);
    if (p.error) return null;
    try {
      if (p.id == null) localStorage.removeItem(TITLE_KEY);
      else localStorage.setItem(TITLE_KEY, JSON.stringify({ id: p.id }));
    } catch (e) {}
    return p.id || null;
  }
  var UI = {
    de: {
      albumSum: "{n} von {N} Bildern in {k} Alben. Jedes Album versammelt alle Bilder eines Künstlers in der App.",
      albumArtistRoom: "Künstler-Album",
      albumLife: "{life} · {N} Bilder in der App",
      albumProg: "{n} von {N} Bildern gemalt",
      albumSlotAria: "Noch offen: {title}",
      albumFaceLocked: "Zifferblatt noch verschlossen",
      albumFaceEarned: "Zifferblatt verliehen",
      albumFaceClaimed: "Zifferblatt angefordert",
      albumFaceSoon: "Zifferblatt in Arbeit",
      albumFaceRemain: "Noch {n} Bilder bis zum Zifferblatt",
      albumFaceReady: "Das Zifferblatt ist deins",
      albumRewardK: "Am Ende dieses Albums",
      albumRewardLead: "Sind alle {N} Bilder gemalt, schaltest du das Museums-Zifferblatt frei — in der App und für Wear OS.",
      albumRewardSoonLead: "Ein Museums-Zifferblatt für dieses Album ist in Arbeit. Es erscheint hier, sobald es fertig ist.",
      albumRewardDoneK: "Deine Auszeichnung",
      albumRewardDoneLead: "Das Museums-Zifferblatt ist deins — in der App und für Wear OS.",
      rankEarned: "{title}",
      honorTitle: "Ehre",
      honorCurrent: "Tagesbilder in Folge: {n}",
      honorBest: "Längste Folge: {n}",
      honorPathEarned: "{title}",
      honorAlbumEarned: "{title}",
      titlePick: "Titel wählen",
      titlePickLead: "Ein verdienter Titel erscheint neben deinem Namen in der Rangliste. Angezeigt wird er in der Sprache der betrachtenden Person.",
      titleNone: "Kein Titel",
      titleCurrent: "Angezeigter Titel",
      titleEmpty: "Noch kein Titel verdient.",
      titleSave: "Übernehmen",
    },
    en: {
      albumSum: "{n} of {N} pictures in {k} albums. Each album gathers every picture by that artist in the app.",
      albumArtistRoom: "Artist album",
      albumLife: "{life} · {N} pictures in the app",
      albumProg: "{n} of {N} pictures painted",
      albumSlotAria: "Still open: {title}",
      albumFaceLocked: "Watch face still locked",
      albumFaceEarned: "Watch face awarded",
      albumFaceClaimed: "Watch face requested",
      albumFaceSoon: "Watch face in progress",
      albumFaceRemain: "{n} pictures left until the watch face",
      albumFaceReady: "The watch face is yours",
      albumRewardK: "At the end of this album",
      albumRewardLead: "When all {N} pictures are painted, you unlock the museum watch face — in the app and for Wear OS.",
      albumRewardSoonLead: "A museum watch face for this album is in progress. It will appear here when it is ready.",
      albumRewardDoneK: "Your award",
      albumRewardDoneLead: "The museum watch face is yours — in the app and for Wear OS.",
      rankEarned: "{title}",
      honorTitle: "Honour",
      honorCurrent: "Daily pictures in a row: {n}",
      honorBest: "Longest run: {n}",
      honorPathEarned: "{title}",
      honorAlbumEarned: "{title}",
      titlePick: "Choose a title",
      titlePickLead: "An earned title appears next to your name on the leaderboard. It is shown in the language of the person viewing the board.",
      titleNone: "No title",
      titleCurrent: "Displayed title",
      titleEmpty: "No title earned yet.",
      titleSave: "Use this title",
    },
    es: {
      albumSum: "{n} de {N} cuadros en {k} álbumes. Cada álbum reúne todos los cuadros de un artista en la app.",
      albumArtistRoom: "Álbum del artista",
      albumLife: "{life} · {N} cuadros en la app",
      albumProg: "{n} de {N} cuadros pintados",
      albumSlotAria: "Aún abierto: {title}",
      albumFaceLocked: "Esfera aún cerrada",
      albumFaceEarned: "Esfera concedida",
      albumFaceClaimed: "Esfera solicitada",
      albumFaceSoon: "Esfera en preparación",
      albumFaceRemain: "Faltan {n} cuadros para la esfera",
      albumFaceReady: "La esfera es tuya",
      albumRewardK: "Al final de este álbum",
      albumRewardLead: "Cuando estén pintados los {N} cuadros, desbloqueas la esfera de museo, en la app y para Wear OS.",
      albumRewardSoonLead: "Una esfera de museo para este álbum está en preparación. Aparecerá aquí en cuanto esté lista.",
      albumRewardDoneK: "Tu distinción",
      albumRewardDoneLead: "La esfera de museo es tuya, en la app y para Wear OS.",
      rankEarned: "{title}",
      honorTitle: "Honor",
      honorCurrent: "Cuadros del día seguidos: {n}",
      honorBest: "Secuencia más larga: {n}",
      honorPathEarned: "{title}",
      honorAlbumEarned: "{title}",
      titlePick: "Elegir título",
      titlePickLead: "Un título merecido aparece junto a tu nombre en la clasificación. Se muestra en el idioma de quien mira el tablero.",
      titleNone: "Sin título",
      titleCurrent: "Título mostrado",
      titleEmpty: "Aún no has merecido un título.",
      titleSave: "Usar este título",
    },
    fr: {
      albumSum: "{n} sur {N} tableaux dans {k} albums. Chaque album rassemble tous les tableaux d’un artiste dans l’app.",
      albumArtistRoom: "Album de l’artiste",
      albumLife: "{life} · {N} tableaux dans l’app",
      albumProg: "{n} sur {N} tableaux peints",
      albumSlotAria: "Encore ouvert : {title}",
      albumFaceLocked: "Cadran encore fermé",
      albumFaceEarned: "Cadran décerné",
      albumFaceClaimed: "Cadran demandé",
      albumFaceSoon: "Cadran en préparation",
      albumFaceRemain: "Encore {n} tableaux avant le cadran",
      albumFaceReady: "Le cadran est à toi",
      albumRewardK: "Au bout de cet album",
      albumRewardLead: "Quand les {N} tableaux sont peints, tu débloques le cadran de musée, dans l’app et pour Wear OS.",
      albumRewardSoonLead: "Un cadran de musée pour cet album est en préparation. Il apparaîtra ici dès qu’il sera prêt.",
      albumRewardDoneK: "Ta distinction",
      albumRewardDoneLead: "Le cadran de musée est à toi, dans l’app et pour Wear OS.",
      rankEarned: "{title}",
      honorTitle: "Honneur",
      honorCurrent: "Tableaux du jour d’affilée : {n}",
      honorBest: "Plus longue suite : {n}",
      honorPathEarned: "{title}",
      honorAlbumEarned: "{title}",
      titlePick: "Choisir un titre",
      titlePickLead: "Un titre mérité apparaît à côté de ton nom au classement. Il s’affiche dans la langue de la personne qui consulte le tableau.",
      titleNone: "Aucun titre",
      titleCurrent: "Titre affiché",
      titleEmpty: "Aucun titre mérité pour l’instant.",
      titleSave: "Utiliser ce titre",
    },
    it: {
      albumSum: "{n} di {N} quadri in {k} album. Ogni album raccoglie tutti i quadri di un artista nell’app.",
      albumArtistRoom: "Album dell’artista",
      albumLife: "{life} · {N} quadri nell’app",
      albumProg: "{n} di {N} quadri dipinti",
      albumSlotAria: "Ancora aperto: {title}",
      albumFaceLocked: "Quadrante ancora chiuso",
      albumFaceEarned: "Quadrante conferito",
      albumFaceClaimed: "Quadrante richiesto",
      albumFaceSoon: "Quadrante in lavorazione",
      albumFaceRemain: "Ancora {n} quadri al quadrante",
      albumFaceReady: "Il quadrante è tuo",
      albumRewardK: "Alla fine di questo album",
      albumRewardLead: "Quando sono dipinti tutti i {N} quadri, sblocchi il quadrante da museo, nell’app e per Wear OS.",
      albumRewardSoonLead: "Un quadrante da museo per questo album è in lavorazione. Apparirà qui non appena sarà pronto.",
      albumRewardDoneK: "Il tuo riconoscimento",
      albumRewardDoneLead: "Il quadrante da museo è tuo, nell’app e per Wear OS.",
      rankEarned: "{title}",
      honorTitle: "Onore",
      honorCurrent: "Quadri del giorno di fila: {n}",
      honorBest: "Serie più lunga: {n}",
      honorPathEarned: "{title}",
      honorAlbumEarned: "{title}",
      titlePick: "Scegli un titolo",
      titlePickLead: "Un titolo meritato appare accanto al tuo nome in classifica. Viene mostrato nella lingua di chi guarda la tavola.",
      titleNone: "Nessun titolo",
      titleCurrent: "Titolo mostrato",
      titleEmpty: "Non hai ancora meritato un titolo.",
      titleSave: "Usa questo titolo",
    },
  };
  function attachI18n(){
    var dict = window.I18N && window.I18N.dict;
    if (!dict) return;
    Object.keys(UI).forEach(function (lang){
      if (!dict[lang]) dict[lang] = {};
      var src = UI[lang];
      for (var k in src) if (Object.prototype.hasOwnProperty.call(src, k)) dict[lang][k] = src[k];
    });
  }
  attachI18n();
  var api = {
    PATH_IDS: PATH_IDS,
    RANKS: RANKS,
    STREAK_MAX: STREAK_MAX,
    PATH_BASE: PATH_BASE,
    ALBUM_BASE: ALBUM_BASE,
    ARTIST_COUNT: ARTIST_COUNT,
    CANON: CANON,
    ALIAS: ALIAS,
    TITLE_KEY: TITLE_KEY,
    isValidTitleId: isValidTitleId,
    isServerTitleId: isServerTitleId,
    LEGACY_COUNT: LEGACY_COUNT,
    PATH2_BASE: PATH2_BASE,
    ALBUM2_BASE: ALBUM2_BASE,
    SERVER_V2: SERVER_V2,
    slotOf: slotOf,
    parseTitleId: parseTitleId,
    pathIndex: pathIndex,
    artistName: artistName,
    aliasPathId: aliasPathId,
    honorWorkshop: honorWorkshop,
    honorCurator: honorCurator,
    formatTitle: formatTitle,
    pathTitleId: pathTitleId,
    albumTitleId: albumTitleId,
    loadChosen: loadChosen,
    saveChosen: saveChosen,
    UI: UI,
    attachI18n: attachI18n
  };
  window.MASILANO_TITLES = api;
})();
