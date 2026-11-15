// Language: Deutsch, English, Español, Français, Italiano. Progress keys are not touched.
// Stored preference: masilano.lang.v1 ('de' | 'en' | 'es' | 'fr' | 'it').
(function () {
  const KEY = 'masilano.lang.v1';

  const dict = {
    de: {
      appTitle: 'Malen nach Zahlen',
      docTitle: 'Masilano · Malen nach Zahlen',
      appSubtitle: '676 Meisterwerke, Feld für Feld – und die Lebenswege von Van Gogh, Monet, Hokusai und Klimt.',
      sortAria: 'Reihenfolge der Bilder',
      sortGallery: 'Standard',
      sortEasy: 'Leicht zuerst',
      searchPh: 'Bild oder Maler suchen',
      searchClear: 'Suche löschen',
      sourcesBtn: 'Bildquellen & Hinweise',
      version: 'Testversion 8.0',
      back: 'Zurück',
      backGallery: 'Zurück zur Galerie',
      backWays: 'Zurück zu den Wegen',
      todayTitle: 'Heute',
      todayLead: 'Ein Bild, in deinem Tempo.',
      dailyCta: 'Malen',
      dailyCtaView: 'Bild ansehen',
      pathNextKicker: 'Dein Weg geht weiter',
      pathNextMeta: 'Station {n} von {N}',
      pathNextDone: 'Dieser Lebensweg ist vollendet.',
      pathInviteKicker: 'Ein Lebensweg',
      pathInviteLead: 'Wenn du magst, beginne einen Lebensweg. Station für Station, in deinem Tempo.',
      pathInviteCta: 'Zu den Wegen',
      pathAllDone: 'Du hast die Lebenswege abgeschlossen.',
      filterBtn: 'Filter',
      filterTitle: 'Filter',
      filterBtnAria: 'Filter öffnen',
      filterBadgeAria: '{n} Filter aktiv',
      stationOf: 'Station {n} von {N}',
      pathKickerNew: 'Neu',
      waysTitle: 'Wege',
      waysLead: 'Lebenswege und Geschichten der Maler.',
      galTitle: 'Galerie',
      tabAria: 'Hauptbereiche',
      tabHeute: 'Heute',
      tabWege: 'Wege',
      tabGalerie: 'Galerie',
      tabAlbum: 'Album',
      filterPainter: 'Maler',
      filterPainterAria: 'Nach Maler filtern',
      filterLevelAria: 'Nach Schwierigkeit filtern',
      filterAll: 'Alle',
      filterAllPainters: 'Alle Maler',
      filterOpen: 'Nur offene',
      hint: 'Tipp',
      pathMode: 'Lebensweg',
      storyMode: 'Geschichten',
      paint: 'Bild malen',
      paintContinue: 'Weiter malen',
      paintView: 'Bild ansehen',
      didYouKnow: 'Wusstest du?',
      whatNext: 'Wie es weitergeht',
      overview: 'Übersicht',
      next: 'Weiter',
      lookAgain: 'Bild nochmals ansehen',
      finKicker: 'Geschafft',
      finPath: 'Zum Lebensweg',
      finGal: 'Zur Galerie',
      storyDone: 'Geschafft! 🎉',
      technique: 'Technik',
      viewOriginal: 'Original ansehen',
      toGallery: 'Zur Galerie',
      resetPaint: 'Nochmals von vorne malen',
      sourcesTitle: 'Bildquellen',
      sourcesBody: 'Alle Bilder stammen von Wikimedia Commons und sind gemeinfrei. Sie wurden für das Spiel automatisch in Farbfelder umgewandelt. Die Zitate aus Van Goghs Briefen hat Masilano selbst aus dem niederländischen oder französischen Original übersetzt (Nummer und Datum nach der Briefausgabe von 2009). Die Zitate aus Monets Briefen hat Masilano selbst aus dem französischen Original übersetzt (Empfänger und Datum nach Wildenstein). Dein Fortschritt wird nur auf diesem Gerät gespeichert.',
      close: 'Schliessen',
      easy: 'Leicht',
      medium: 'Mittel',
      hard: 'Schwer',
      done: 'Fertig',
      ready: 'Bereit',
      neu: 'Neu',
      storyTag: 'Geschichte',
      pathTag: 'Lebensweg',
      inStory: 'In der Geschichte von {name}',
      inPath: 'Im Lebensweg von {name}',
      noHits: 'Keine Treffer',
      noHitsHint: 'Versuch einen anderen Bildtitel, Malernamen, ein Jahr oder ein Museum.',
      pageN: 'Seite {n}',
      lockedStory: 'Dieses Bild gehört zur Geschichte von {name}. Es wird Kapitel für Kapitel freigeschaltet.',
      colorHere: 'Hier gehört Farbe {n} hin',
      pickOpen: 'Wähle eine Farbe, die noch offen ist',
      hintToast: 'Tippe auf «Tipp», um die Geschichte wieder zu sehen',
      resetConfirm: 'Fortschritt für dieses Bild löschen und neu beginnen?',
      museum: '🏛 Museum: {m}',
      today: '🏛 Heute: {m}',
      original: 'Original',
      yours: 'Deine Version',
      paintedOf: '{n} von {N} gemalt',
      startNow: 'Jetzt starten',
      pathKicker: 'Neu · Lebensweg',
      storyKickerNew: 'Neu · Geschichten',
      storyKicker: 'Geschichten',
      chaptersPainted: '{n} von {N} Kapiteln gemalt',
      pictureOf: '{place} · Bild {n} von {N}',
      picturesPainted: '{n} von {N} Bildern gemalt',
      chapterN: 'Kapitel {n}',
      chapterOf: 'Kapitel {n} von {N}',
      chapterLine: 'Kapitel {n} · {place}, {when}',
      lockedUntil: '🔒 Wird freigeschaltet, wenn Kapitel {n} fertig ist',
      paintFirst: 'Male zuerst Kapitel {n} fertig, dann geht es hier weiter.',
      already: 'Schon gemalt',
      youPaint: 'Du malst',
      chapterDone: 'Kapitel {n} geschafft! 🎉',
      finishStory: 'Geschichte abschliessen',
      nextChapter: 'Weiter: Kapitel {n}',
      pictureDone: 'Bild {n} geschafft! 🎉',
      nextPicture: 'Weiter: {title}',
      pathNotePlay: 'Die erste Station ist der freie Start. In der Testversion kannst du alle Bilder schon malen; später schaltet jedes fertige Bild das nächste frei.',
      pathNoteDone: 'Du hast alle Bilder dieses Weges gemalt. Unten findest du den Schluss.',
      freeStart: 'Frei zum Start · ',
      closing: 'Zum Schluss',
      mapAria: 'Karte der Stationen von Van Goghs Lebensweg',
      mapAriaPath: 'Karte der Stationen: {title}',
      allDone: 'Du hast alle {N} Bilder gemalt.',
      museumWord: 'Museum',
      pathAria: 'Lebensweg: {title}',
      storyAria: 'Geschichten: {name}',
      langAria: 'Sprache',
      langDe: 'Deutsch',
      langEn: 'English',
      publicDomain: 'gemeinfrei (Public Domain)',
      publicDomainCC0: 'gemeinfrei (CC0)',
      hintAgain: 'Tippe auf 💡, um den Text wieder zu sehen',
      colorAlready: 'Diese Farbe ist schon fertig',
      colorFinished: 'Farbe {n} fertig ✓',
      colorAria: 'Farbe {n}',
      colorAriaDone: 'Farbe {n}, fertig',
      obSkip: 'Überspringen',
      obNext: 'Weiter',
      obStart: 'Los geht’s',
      obStep: '{n} von {N}',
      ob1Title: 'Willkommen bei Masilano',
      ob1Body: 'Hier malst du berühmte Meisterwerke, Feld für Feld – in deinem Tempo.',
      ob2Title: 'So funktioniert’s',
      ob2Body: 'Wähle eine Farbe und tippe auf die Felder mit dieser Nummer. Du kannst jederzeit unterbrechen und später weitermalen.',
      ob3Title: 'Immer in deinem Tempo',
      ob3Body: 'Entdecke Van Goghs Lebensweg und die Geschichten der Maler. Dein Fortschritt bleibt nur auf diesem Gerät.',
      continueKicker: 'Weitermalen',
      continueAria: 'Weitermalen: {title}',
      installTitle: 'Zum Startbildschirm hinzufügen',
      installBody: 'So liegt Masilano bereit, wie eine App.',
      installAdd: 'Hinzufügen',
      installDismiss: 'Schliessen',
      installHowTitle: 'So fügst du Masilano hinzu',
      installHowIOS: 'Tippe auf das Teilen-Symbol und wähle «Zum Home-Bildschirm».',
      installHowGeneric: 'Im Menü deines Browsers «Zum Startbildschirm hinzufügen» oder «App installieren» wählen.',
      installGotIt: 'Verstanden',
      share: 'Bild teilen',
      shareText: 'Ich habe «{title}» von {artist} mit Masilano gemalt.',
      shareCredit: 'gemalt mit Masilano',
      shareSaved: 'Bild gespeichert',
      shareFailed: 'Teilen hat nicht geklappt. Das Bild wurde gespeichert.',
      settingsTitle: 'Einstellungen',
      settingsAria: 'Einstellungen',
      calmTitle: 'Ruhemodus',
      calmBody: 'Nur leichte Bilder, grössere Schaltflächen und ruhigere Bewegungen.',
      calmAria: 'Ruhemodus',
      dailyKicker: 'Bild des Tages',
      dailyAria: 'Bild des Tages: {title}',
      dailyDone: 'Schon gemalt',
      dailyPaint: 'Heute malen',
      streakToday: '{n} Tage – schön, dass du heute da bist',
      streakActive: '{n} Tage in Folge',
      streakPaused: '{n} Tage, in deinem Tempo',
      streakToday1: 'Schön, dass du heute da bist',
      streakActive1: 'Ein Tag',
      streakPaused1: 'Ein Tag, in deinem Tempo',
      albumTitle: 'Sammelalbum',
      albumAria: 'Sammelalbum öffnen',
      albumOpen: 'Sammelalbum',
      albumCount: '{n} von {N} Bildern',
      albumGroup: '{n}/{N}',
      albumEmpty: 'Dein Album ist noch leer. Jedes fertige Bild findet hier seinen Platz.',
      albumViewAria: 'Fertiges Bild: {title}',
      mileFirst: 'Dein erstes Bild ist fertig. Schön, dass du da bist.',
      mile10: 'Zehn Bilder. Du machst das in deinem Tempo.',
      mile50: 'Fünfzig Bilder in deinem Album.',
      mileStation: 'Die erste Station ist vollständig.',
      langEs: 'Español',
      langFr: 'Français',
      langIt: 'Italiano',
      langFallback: 'Englisch',
      quoteSelfTr: 'Übersetzung der Eigenübertragung (aus dem Original).',
      quoteFromEnOrig: 'Übersetzung des englischen Originalbriefs von Vincent.',
      langMenuAria: 'Sprache wählen',
    },
    en: {
      appTitle: 'Color by Number',
      docTitle: 'Masilano · Color by Number',
      appSubtitle: '676 masterpieces, field by field – and the life journeys of Van Gogh, Monet, Hokusai and Klimt.',
      sortAria: 'Picture order',
      sortGallery: 'Default',
      sortEasy: 'Easy first',
      searchPh: 'Search for a picture or painter',
      searchClear: 'Clear search',
      sourcesBtn: 'Picture sources & notes',
      version: 'Test version 8.0',
      back: 'Back',
      backGallery: 'Back to the gallery',
      backWays: 'Back to the journeys',
      todayTitle: 'Today',
      todayLead: 'A picture, at your own pace.',
      dailyCta: 'Paint',
      dailyCtaView: 'View picture',
      pathNextKicker: 'Your journey continues',
      pathNextMeta: 'Station {n} of {N}',
      pathNextDone: 'This life journey is complete.',
      pathInviteKicker: 'A life journey',
      pathInviteLead: 'If you like, begin a life journey. Station by station, at your pace.',
      pathInviteCta: 'To the journeys',
      pathAllDone: 'You have completed the life journeys.',
      filterBtn: 'Filter',
      filterTitle: 'Filter',
      filterBtnAria: 'Open filters',
      filterBadgeAria: '{n} filters on',
      stationOf: 'Station {n} of {N}',
      pathKickerNew: 'New',
      waysTitle: 'Journeys',
      waysLead: 'Life journeys and the painters’ stories.',
      galTitle: 'Gallery',
      tabAria: 'Main sections',
      tabHeute: 'Today',
      tabWege: 'Journeys',
      tabGalerie: 'Gallery',
      tabAlbum: 'Collection',
      filterPainter: 'Painter',
      filterPainterAria: 'Filter by painter',
      filterLevelAria: 'Filter by difficulty',
      filterAll: 'All',
      filterAllPainters: 'All painters',
      filterOpen: 'Unfinished only',
      hint: 'Hint',
      pathMode: 'Life journey',
      storyMode: 'Stories',
      paint: 'Colour this picture',
      paintContinue: 'Continue colouring',
      paintView: 'View picture',
      didYouKnow: 'Did you know?',
      whatNext: 'What happened next',
      overview: 'Overview',
      next: 'Next',
      lookAgain: 'View the picture again',
      finKicker: 'Finished',
      finPath: 'To the life journey',
      finGal: 'To the gallery',
      storyDone: 'Done! 🎉',
      technique: 'Technique',
      viewOriginal: 'View original',
      toGallery: 'To the gallery',
      resetPaint: 'Start this picture again',
      sourcesTitle: 'Picture sources',
      sourcesBody: 'All pictures come from Wikimedia Commons and are in the public domain. They were automatically turned into colour fields for the game. Masilano translated the quotations from Van Gogh’s letters from the original Dutch or French (letter numbers and dates follow the 2009 edition). Masilano translated the quotations from Monet’s letters from the original French (recipient and date follow Wildenstein). Your progress is stored only on this device.',
      close: 'Close',
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard',
      done: 'Done',
      ready: 'Ready',
      neu: 'New',
      storyTag: 'Story',
      pathTag: 'Life journey',
      inStory: 'In the story of {name}',
      inPath: 'In the life journey of {name}',
      noHits: 'No results',
      noHitsHint: 'Try a different title, painter, year or museum.',
      pageN: 'Page {n}',
      lockedStory: 'This picture belongs to the story of {name}. It unlocks chapter by chapter.',
      colorHere: 'Colour {n} belongs here',
      pickOpen: 'Pick a colour that is still open',
      hintToast: 'Tap “Hint” to see the story again',
      resetConfirm: 'Delete your progress on this picture and start again?',
      museum: '🏛 Museum: {m}',
      today: '🏛 Today: {m}',
      original: 'Original',
      yours: 'Your version',
      paintedOf: '{n} of {N} coloured',
      startNow: 'Start now',
      pathKicker: 'New · Life journey',
      storyKickerNew: 'New · Stories',
      storyKicker: 'Stories',
      chaptersPainted: '{n} of {N} chapters coloured',
      pictureOf: '{place} · Picture {n} of {N}',
      picturesPainted: '{n} of {N} pictures coloured',
      chapterN: 'Chapter {n}',
      chapterOf: 'Chapter {n} of {N}',
      chapterLine: 'Chapter {n} · {place}, {when}',
      lockedUntil: '🔒 Unlocks when chapter {n} is finished',
      paintFirst: 'Colour chapter {n} first, then this one opens.',
      already: 'Already coloured',
      youPaint: 'You are colouring',
      chapterDone: 'Chapter {n} done! 🎉',
      finishStory: 'Finish the story',
      nextChapter: 'Next: Chapter {n}',
      pictureDone: 'Picture {n} done! 🎉',
      nextPicture: 'Next: {title}',
      pathNotePlay: 'The first station is free to start. In the test version you can already colour every picture; later, each finished picture will unlock the next one.',
      pathNoteDone: 'You have coloured every picture on this journey. The ending is below.',
      freeStart: 'Free to start · ',
      closing: 'The ending',
      mapAria: 'Map of the stations in Van Gogh’s life journey',
      mapAriaPath: 'Map of the stations: {title}',
      allDone: 'You have coloured all {N} pictures.',
      museumWord: 'Museum',
      pathAria: 'Life journey: {title}',
      storyAria: 'Stories: {name}',
      langAria: 'Language',
      langDe: 'Deutsch',
      langEn: 'English',
      publicDomain: 'public domain',
      publicDomainCC0: 'public domain (CC0)',
      hintAgain: 'Tap 💡 to see the text again',
      colorAlready: 'This colour is already finished',
      colorFinished: 'Colour {n} done ✓',
      colorAria: 'Colour {n}',
      colorAriaDone: 'Colour {n}, done',
      obSkip: 'Skip',
      obNext: 'Next',
      obStart: 'Let’s go',
      obStep: '{n} of {N}',
      ob1Title: 'Welcome to Masilano',
      ob1Body: 'Here you colour famous masterpieces, field by field – at your own pace.',
      ob2Title: 'How it works',
      ob2Body: 'Pick a colour and tap the fields with that number. You can stop at any time and continue later.',
      ob3Title: 'At your own pace',
      ob3Body: 'Discover Van Gogh’s life journey and the painters’ stories. Your progress stays only on this device.',
      continueKicker: 'Continue',
      continueAria: 'Continue: {title}',
      installTitle: 'Add to Home Screen',
      installBody: 'Then Masilano is ready, like an app.',
      installAdd: 'Add',
      installDismiss: 'Close',
      installHowTitle: 'How to add Masilano',
      installHowIOS: 'Tap the Share icon and choose “Add to Home Screen”.',
      installHowGeneric: 'In your browser menu, choose “Add to Home Screen” or “Install app”.',
      installGotIt: 'Got it',
      share: 'Share',
      shareText: 'I painted “{title}” by {artist} with Masilano.',
      shareCredit: 'painted with Masilano',
      shareSaved: 'Picture saved',
      shareFailed: 'Sharing didn’t work. The picture was saved.',
      settingsTitle: 'Settings',
      settingsAria: 'Settings',
      calmTitle: 'Calm mode',
      calmBody: 'Easy pictures only, larger buttons and quieter motion.',
      calmAria: 'Calm mode',
      dailyKicker: 'Picture of the day',
      dailyAria: 'Picture of the day: {title}',
      dailyDone: 'Already coloured',
      dailyPaint: 'Colour today',
      streakToday: '{n} days – lovely that you are here today',
      streakActive: '{n} days in a row',
      streakPaused: '{n} days, at your own pace',
      streakToday1: 'Lovely that you are here today',
      streakActive1: 'One day',
      streakPaused1: 'One day, at your own pace',
      albumTitle: 'Collection',
      albumAria: 'Open the collection',
      albumOpen: 'Collection',
      albumCount: '{n} of {N} pictures',
      albumGroup: '{n}/{N}',
      albumEmpty: 'Your collection is still empty. Every finished picture will find its place here.',
      albumViewAria: 'Finished picture: {title}',
      mileFirst: 'Your first picture is finished. How lovely that you are here.',
      mile10: 'Ten pictures. You are doing this at your own pace.',
      mile50: 'Fifty pictures in your collection.',
      mileStation: 'The first station is complete.',
      langEs: 'Español',
      langFr: 'Français',
      langIt: 'Italiano',
      langFallback: 'English text',
      quoteSelfTr: 'Translation of the self-translation (from the original).',
      quoteFromEnOrig: 'Translation of Vincent’s original English letter.',
      langMenuAria: 'Choose language',
    },
    es: {
      appTitle: "Pintar por números",
      docTitle: "Masilano · Pintar por números",
      appSubtitle: "676 obras maestras, campo a campo – y los caminos de vida de Van Gogh, Monet, Hokusai y Klimt.",
      sortAria: "Orden de las imágenes",
      sortGallery: "Estándar",
      sortEasy: "Fáciles primero",
      searchPh: "Buscar un cuadro o un pintor",
      searchClear: "Borrar búsqueda",
      sourcesBtn: "Fuentes e indicaciones",
      version: "Versión de prueba 8.0",
      back: "Atrás",
      backGallery: "Volver a la galería",
      backWays: "Volver a los caminos",
      todayTitle: "Hoy",
      todayLead: "Un cuadro, a tu ritmo.",
      dailyCta: "Pintar",
      dailyCtaView: "Ver el cuadro",
      pathNextKicker: "Tu camino sigue",
      pathNextMeta: "Estación {n} de {N}",
      pathNextDone: "Este camino de vida está completo.",
      pathInviteKicker: "Un camino de vida",
      pathInviteLead: "Si quieres, empieza un camino de vida. Estación a estación, a tu ritmo.",
      pathInviteCta: "A los caminos",
      pathAllDone: "Has terminado los caminos de vida.",
      filterBtn: "Filtro",
      filterTitle: "Filtro",
      filterBtnAria: "Abrir filtros",
      filterBadgeAria: "{n} filtros activos",
      stationOf: "Estación {n} de {N}",
      pathKickerNew: "Nuevo",
      waysTitle: "Caminos",
      waysLead: "Caminos de vida e historias de los pintores.",
      galTitle: "Galería",
      tabAria: "Secciones principales",
      tabHeute: "Hoy",
      tabWege: "Caminos",
      tabGalerie: "Galería",
      tabAlbum: "Álbum",
      filterPainter: "Pintor",
      filterPainterAria: "Filtrar por pintor",
      filterLevelAria: "Filtrar por dificultad",
      filterAll: "Todos",
      filterAllPainters: "Todos los pintores",
      filterOpen: "Solo pendientes",
      hint: "Pista",
      pathMode: "Camino de vida",
      storyMode: "Historias",
      paint: "Pintar el cuadro",
      paintContinue: "Seguir pintando",
      paintView: "Ver el cuadro",
      didYouKnow: "¿Sabías que?",
      whatNext: "Cómo sigue",
      overview: "Resumen",
      next: "Siguiente",
      lookAgain: "Ver el cuadro otra vez",
      finKicker: "Listo",
      finPath: "Al camino de vida",
      finGal: "A la galería",
      storyDone: "¡Listo! 🎉",
      technique: "Técnica",
      viewOriginal: "Ver el original",
      toGallery: "A la galería",
      resetPaint: "Pintar de nuevo desde el principio",
      sourcesTitle: "Fuentes de las imágenes",
      sourcesBody: "Todas las imágenes proceden de Wikimedia Commons y son de dominio público. Se convirtieron automáticamente en campos de color para el juego. Las citas de las cartas de Van Gogh las tradujo Masilano del original neerlandés o francés (números y fechas según la edición de las cartas de 2009). Las citas de las cartas de Monet las tradujo Masilano del original francés (destinatario y fecha según Wildenstein). Tu progreso se guarda solo en este dispositivo.",
      close: "Cerrar",
      easy: "Fácil",
      medium: "Medio",
      hard: "Difícil",
      done: "Listo",
      ready: "Listo para pintar",
      neu: "Nuevo",
      storyTag: "Historia",
      pathTag: "Camino de vida",
      inStory: "En la historia de {name}",
      inPath: "En el camino de vida de {name}",
      noHits: "Sin resultados",
      noHitsHint: "Prueba con otro título, pintor, año o museo.",
      pageN: "Página {n}",
      lockedStory: "Este cuadro pertenece a la historia de {name}. Se desbloquea capítulo a capítulo.",
      colorHere: "Aquí va el color {n}",
      pickOpen: "Elige un color que aún esté pendiente",
      hintToast: "Toca «Pista» para volver a ver la historia",
      resetConfirm: "¿Borrar el progreso de este cuadro y empezar de nuevo?",
      museum: "🏛 Museo: {m}",
      today: "🏛 Hoy: {m}",
      original: "Original",
      yours: "Tu versión",
      paintedOf: "{n} de {N} pintados",
      startNow: "Empezar ahora",
      pathKicker: "Nuevo · Camino de vida",
      storyKickerNew: "Nuevo · Historias",
      storyKicker: "Historias",
      chaptersPainted: "{n} de {N} capítulos pintados",
      pictureOf: "{place} · Cuadro {n} de {N}",
      picturesPainted: "{n} de {N} cuadros pintados",
      chapterN: "Capítulo {n}",
      chapterOf: "Capítulo {n} de {N}",
      chapterLine: "Capítulo {n} · {place}, {when}",
      lockedUntil: "🔒 Se desbloquea cuando el capítulo {n} está terminado",
      paintFirst: "Pinta primero el capítulo {n}; después sigue aquí.",
      already: "Ya pintado",
      youPaint: "Estás pintando",
      chapterDone: "¡Capítulo {n} terminado! 🎉",
      finishStory: "Terminar la historia",
      nextChapter: "Siguiente: capítulo {n}",
      pictureDone: "¡Cuadro {n} terminado! 🎉",
      nextPicture: "Siguiente: {title}",
      pathNotePlay: "La primera estación es un inicio libre. En la versión de prueba ya puedes pintar todos los cuadros; más adelante, cada cuadro terminado desbloqueará el siguiente.",
      pathNoteDone: "Has pintado todos los cuadros de este camino. El final está más abajo.",
      freeStart: "Inicio libre · ",
      closing: "Al final",
      mapAria: "Mapa de las estaciones del camino de vida de Van Gogh",
      mapAriaPath: "Mapa de las estaciones: {title}",
      allDone: "Has pintado los {N} cuadros.",
      museumWord: "Museo",
      pathAria: "Camino de vida: {title}",
      storyAria: "Historias: {name}",
      langAria: "Idioma",
      langDe: "Deutsch",
      langEn: "English",
      langEs: "Español",
      langFr: "Français",
      langIt: "Italiano",
      langFallback: "Texto en inglés",
      quoteSelfTr: "Traducción de la autotraducción (a partir del original).",
      quoteFromEnOrig: "Traducción de la carta original en inglés de Vincent.",
      langMenuAria: "Elegir idioma",
      publicDomain: "dominio público",
      publicDomainCC0: "dominio público (CC0)",
      hintAgain: "Toca 💡 para volver a ver el texto",
      colorAlready: "Este color ya está terminado",
      colorFinished: "Color {n} terminado ✓",
      colorAria: "Color {n}",
      colorAriaDone: "Color {n}, terminado",
      obSkip: "Saltar",
      obNext: "Siguiente",
      obStart: "Vamos",
      obStep: "{n} de {N}",
      ob1Title: "Bienvenido a Masilano",
      ob1Body: "Aquí pintas obras maestras famosas, campo a campo, a tu ritmo.",
      ob2Title: "Así funciona",
      ob2Body: "Elige un color y toca los campos con ese número. Puedes interrumpir cuando quieras y seguir más tarde.",
      ob3Title: "Siempre a tu ritmo",
      ob3Body: "Descubre el camino de vida de Van Gogh y las historias de los pintores. Tu progreso permanece solo en este dispositivo.",
      continueKicker: "Seguir pintando",
      continueAria: "Seguir pintando: {title}",
      installTitle: "Añadir a la pantalla de inicio",
      installBody: "Así Masilano queda a mano, como una aplicación.",
      installAdd: "Añadir",
      installDismiss: "Cerrar",
      installHowTitle: "Cómo añadir Masilano",
      installHowIOS: "Toca el icono de compartir y elige «Añadir a la pantalla de inicio».",
      installHowGeneric: "En el menú del navegador, elige «Añadir a la pantalla de inicio» o «Instalar aplicación».",
      installGotIt: "Entendido",
      share: "Compartir el cuadro",
      shareText: "He pintado «{title}» de {artist} con Masilano.",
      shareCredit: "pintado con Masilano",
      shareSaved: "Cuadro guardado",
      shareFailed: "No se ha podido compartir. El cuadro se ha guardado.",
      settingsTitle: "Ajustes",
      settingsAria: "Ajustes",
      calmTitle: "Modo reposo",
      calmBody: "Solo cuadros fáciles, botones más grandes y movimientos más suaves.",
      calmAria: "Modo reposo",
      dailyKicker: "Cuadro del día",
      dailyAria: "Cuadro del día: {title}",
      dailyDone: "Ya pintado",
      dailyPaint: "Pintar hoy",
      streakToday: "{n} días: qué bien que estés aquí hoy",
      streakActive: "{n} días seguidos",
      streakPaused: "{n} días, a tu ritmo",
      streakToday1: "Qué bien que estés aquí hoy",
      streakActive1: "Un día",
      streakPaused1: "Un día, a tu ritmo",
      albumTitle: "Álbum",
      albumAria: "Abrir el álbum",
      albumOpen: "Álbum",
      albumCount: "{n} de {N} cuadros",
      albumGroup: "{n}/{N}",
      albumEmpty: "Tu álbum aún está vacío. Cada cuadro terminado encontrará aquí su lugar.",
      albumViewAria: "Cuadro terminado: {title}",
      mileFirst: "Tu primer cuadro está terminado. Qué bien que estés aquí.",
      mile10: "Diez cuadros. Lo haces a tu ritmo.",
      mile50: "Cincuenta cuadros en tu álbum.",
      mileStation: "La primera estación está completa."
    },
    fr: {
      appTitle: "Peinture par numéros",
      docTitle: "Masilano · Peinture par numéros",
      appSubtitle: "676 chefs-d’œuvre, case par case – et les parcours de vie de Van Gogh, Monet, Hokusai et Klimt.",
      sortAria: "Ordre des images",
      sortGallery: "Standard",
      sortEasy: "Faciles d’abord",
      searchPh: "Chercher un tableau ou un peintre",
      searchClear: "Effacer la recherche",
      sourcesBtn: "Sources et notes",
      version: "Version d’essai 8.0",
      back: "Retour",
      backGallery: "Retour à la galerie",
      backWays: "Retour aux parcours",
      todayTitle: "Aujourd’hui",
      todayLead: "Un tableau, à ton rythme.",
      dailyCta: "Peindre",
      dailyCtaView: "Voir le tableau",
      pathNextKicker: "Ton parcours continue",
      pathNextMeta: "Station {n} sur {N}",
      pathNextDone: "Ce parcours de vie est achevé.",
      pathInviteKicker: "Un parcours de vie",
      pathInviteLead: "Si tu veux, commence un parcours de vie. Station après station, à ton rythme.",
      pathInviteCta: "Vers les parcours",
      pathAllDone: "Tu as achevé les parcours de vie.",
      filterBtn: "Filtre",
      filterTitle: "Filtre",
      filterBtnAria: "Ouvrir les filtres",
      filterBadgeAria: "{n} filtres actifs",
      stationOf: "Station {n} sur {N}",
      pathKickerNew: "Nouveau",
      waysTitle: "Parcours",
      waysLead: "Parcours de vie et récits des peintres.",
      galTitle: "Galerie",
      tabAria: "Sections principales",
      tabHeute: "Aujourd’hui",
      tabWege: "Parcours",
      tabGalerie: "Galerie",
      tabAlbum: "Album",
      filterPainter: "Peintre",
      filterPainterAria: "Filtrer par peintre",
      filterLevelAria: "Filtrer par difficulté",
      filterAll: "Tous",
      filterAllPainters: "Tous les peintres",
      filterOpen: "Non terminés seulement",
      hint: "Indice",
      pathMode: "Parcours de vie",
      storyMode: "Récits",
      paint: "Peindre le tableau",
      paintContinue: "Continuer à peindre",
      paintView: "Voir le tableau",
      didYouKnow: "Le savais-tu ?",
      whatNext: "La suite",
      overview: "Aperçu",
      next: "Suivant",
      lookAgain: "Revoir le tableau",
      finKicker: "Terminé",
      finPath: "Vers le parcours de vie",
      finGal: "Vers la galerie",
      storyDone: "Terminé ! 🎉",
      technique: "Technique",
      viewOriginal: "Voir l’original",
      toGallery: "Vers la galerie",
      resetPaint: "Recommencer ce tableau",
      sourcesTitle: "Sources des images",
      sourcesBody: "Toutes les images proviennent de Wikimedia Commons et sont dans le domaine public. Elles ont été automatiquement transformées en cases de couleur pour le jeu. Masilano a traduit les citations des lettres de Van Gogh depuis l’original néerlandais ou français (numéros et dates selon l’édition des lettres de 2009). Masilano a traduit les citations des lettres de Monet depuis l’original français (destinataire et date selon Wildenstein). Tes progrès sont enregistrés uniquement sur cet appareil.",
      close: "Fermer",
      easy: "Facile",
      medium: "Moyen",
      hard: "Difficile",
      done: "Terminé",
      ready: "Prêt",
      neu: "Nouveau",
      storyTag: "Récit",
      pathTag: "Parcours de vie",
      inStory: "Dans le récit de {name}",
      inPath: "Dans le parcours de vie de {name}",
      noHits: "Aucun résultat",
      noHitsHint: "Essaie un autre titre, peintre, année ou musée.",
      pageN: "Page {n}",
      lockedStory: "Ce tableau fait partie du récit de {name}. Il se débloque chapitre par chapitre.",
      colorHere: "La couleur {n} va ici",
      pickOpen: "Choisis une couleur encore ouverte",
      hintToast: "Touche « Indice » pour revoir le récit",
      resetConfirm: "Effacer tes progrès sur ce tableau et recommencer ?",
      museum: "🏛 Musée : {m}",
      today: "🏛 Aujourd’hui : {m}",
      original: "Original",
      yours: "Ta version",
      paintedOf: "{n} sur {N} peints",
      startNow: "Commencer maintenant",
      pathKicker: "Nouveau · Parcours de vie",
      storyKickerNew: "Nouveau · Récits",
      storyKicker: "Récits",
      chaptersPainted: "{n} sur {N} chapitres peints",
      pictureOf: "{place} · Tableau {n} sur {N}",
      picturesPainted: "{n} sur {N} tableaux peints",
      chapterN: "Chapitre {n}",
      chapterOf: "Chapitre {n} sur {N}",
      chapterLine: "Chapitre {n} · {place}, {when}",
      lockedUntil: "🔒 Se débloque lorsque le chapitre {n} est terminé",
      paintFirst: "Peins d’abord le chapitre {n} ; ensuite, cela continue ici.",
      already: "Déjà peint",
      youPaint: "Tu peins",
      chapterDone: "Chapitre {n} terminé ! 🎉",
      finishStory: "Terminer le récit",
      nextChapter: "Suivant : chapitre {n}",
      pictureDone: "Tableau {n} terminé ! 🎉",
      nextPicture: "Suivant : {title}",
      pathNotePlay: "La première station est un départ libre. Dans la version d’essai, tu peux déjà peindre tous les tableaux ; plus tard, chaque tableau terminé débloquera le suivant.",
      pathNoteDone: "Tu as peint tous les tableaux de ce parcours. La fin se trouve plus bas.",
      freeStart: "Départ libre · ",
      closing: "Pour finir",
      mapAria: "Carte des stations du parcours de vie de Van Gogh",
      mapAriaPath: "Carte des stations : {title}",
      allDone: "Tu as peint les {N} tableaux.",
      museumWord: "Musée",
      pathAria: "Parcours de vie : {title}",
      storyAria: "Récits : {name}",
      langAria: "Langue",
      langDe: "Deutsch",
      langEn: "English",
      langEs: "Español",
      langFr: "Français",
      langIt: "Italiano",
      langFallback: "Texte en anglais",
      quoteSelfTr: "Traduction de l’autotraduction (à partir de l’original).",
      quoteFromEnOrig: "Traduction de la lettre originale en anglais de Vincent.",
      langMenuAria: "Choisir la langue",
      publicDomain: "domaine public",
      publicDomainCC0: "domaine public (CC0)",
      hintAgain: "Touche 💡 pour revoir le texte",
      colorAlready: "Cette couleur est déjà terminée",
      colorFinished: "Couleur {n} terminée ✓",
      colorAria: "Couleur {n}",
      colorAriaDone: "Couleur {n}, terminée",
      obSkip: "Passer",
      obNext: "Suivant",
      obStart: "C’est parti",
      obStep: "{n} sur {N}",
      ob1Title: "Bienvenue chez Masilano",
      ob1Body: "Ici tu peins des chefs-d’œuvre célèbres, case par case, à ton rythme.",
      ob2Title: "Comment cela fonctionne",
      ob2Body: "Choisis une couleur et touche les cases qui portent ce numéro. Tu peux t’arrêter à tout moment et continuer plus tard.",
      ob3Title: "Toujours à ton rythme",
      ob3Body: "Découvre le parcours de vie de Van Gogh et les récits des peintres. Tes progrès restent uniquement sur cet appareil.",
      continueKicker: "Continuer à peindre",
      continueAria: "Continuer à peindre : {title}",
      installTitle: "Ajouter à l’écran d’accueil",
      installBody: "Ainsi Masilano est à portée de main, comme une application.",
      installAdd: "Ajouter",
      installDismiss: "Fermer",
      installHowTitle: "Comment ajouter Masilano",
      installHowIOS: "Touche l’icône de partage et choisis « Sur l’écran d’accueil ».",
      installHowGeneric: "Dans le menu de ton navigateur, choisis « Ajouter à l’écran d’accueil » ou « Installer l’application ».",
      installGotIt: "Compris",
      share: "Partager le tableau",
      shareText: "J’ai peint « {title} » de {artist} avec Masilano.",
      shareCredit: "peint avec Masilano",
      shareSaved: "Tableau enregistré",
      shareFailed: "Le partage n’a pas fonctionné. Le tableau a été enregistré.",
      settingsTitle: "Réglages",
      settingsAria: "Réglages",
      calmTitle: "Mode calme",
      calmBody: "Uniquement des tableaux faciles, des boutons plus grands et des mouvements plus doux.",
      calmAria: "Mode calme",
      dailyKicker: "Tableau du jour",
      dailyAria: "Tableau du jour : {title}",
      dailyDone: "Déjà peint",
      dailyPaint: "Peindre aujourd’hui",
      streakToday: "{n} jours – c’est beau que tu sois là aujourd’hui",
      streakActive: "{n} jours d’affilée",
      streakPaused: "{n} jours, à ton rythme",
      streakToday1: "C’est beau que tu sois là aujourd’hui",
      streakActive1: "Un jour",
      streakPaused1: "Un jour, à ton rythme",
      albumTitle: "Album",
      albumAria: "Ouvrir l’album",
      albumOpen: "Album",
      albumCount: "{n} sur {N} tableaux",
      albumGroup: "{n}/{N}",
      albumEmpty: "Ton album est encore vide. Chaque tableau terminé y trouvera sa place.",
      albumViewAria: "Tableau terminé : {title}",
      mileFirst: "Ton premier tableau est terminé. Quel plaisir que tu sois là.",
      mile10: "Dix tableaux. Tu fais cela à ton rythme.",
      mile50: "Cinquante tableaux dans ton album.",
      mileStation: "La première station est complète."
    },
    it: {
      appTitle: "Dipingere con i numeri",
      docTitle: "Masilano · Dipingere con i numeri",
      appSubtitle: "676 capolavori, campo dopo campo – e i percorsi di vita di Van Gogh, Monet, Hokusai e Klimt.",
      sortAria: "Ordine delle immagini",
      sortGallery: "Standard",
      sortEasy: "Prima i facili",
      searchPh: "Cerca un quadro o un pittore",
      searchClear: "Cancella la ricerca",
      sourcesBtn: "Fonti e note",
      version: "Versione di prova 8.0",
      back: "Indietro",
      backGallery: "Torna alla galleria",
      backWays: "Torna ai percorsi",
      todayTitle: "Oggi",
      todayLead: "Un quadro, al tuo ritmo.",
      dailyCta: "Dipingere",
      dailyCtaView: "Vedi il quadro",
      pathNextKicker: "Il tuo percorso continua",
      pathNextMeta: "Stazione {n} di {N}",
      pathNextDone: "Questo percorso di vita è completo.",
      pathInviteKicker: "Un percorso di vita",
      pathInviteLead: "Se vuoi, inizia un percorso di vita. Stazione dopo stazione, al tuo ritmo.",
      pathInviteCta: "Ai percorsi",
      pathAllDone: "Hai completato i percorsi di vita.",
      filterBtn: "Filtro",
      filterTitle: "Filtro",
      filterBtnAria: "Apri i filtri",
      filterBadgeAria: "{n} filtri attivi",
      stationOf: "Stazione {n} di {N}",
      pathKickerNew: "Nuovo",
      waysTitle: "Percorsi",
      waysLead: "Percorsi di vita e storie dei pittori.",
      galTitle: "Galleria",
      tabAria: "Sezioni principali",
      tabHeute: "Oggi",
      tabWege: "Percorsi",
      tabGalerie: "Galleria",
      tabAlbum: "Album",
      filterPainter: "Pittore",
      filterPainterAria: "Filtra per pittore",
      filterLevelAria: "Filtra per difficoltà",
      filterAll: "Tutti",
      filterAllPainters: "Tutti i pittori",
      filterOpen: "Solo da finire",
      hint: "Suggerimento",
      pathMode: "Percorso di vita",
      storyMode: "Storie",
      paint: "Dipingere il quadro",
      paintContinue: "Continua a dipingere",
      paintView: "Vedi il quadro",
      didYouKnow: "Lo sapevi?",
      whatNext: "Come continua",
      overview: "Panoramica",
      next: "Avanti",
      lookAgain: "Rivedi il quadro",
      finKicker: "Fatto",
      finPath: "Al percorso di vita",
      finGal: "Alla galleria",
      storyDone: "Fatto! 🎉",
      technique: "Tecnica",
      viewOriginal: "Vedi l’originale",
      toGallery: "Alla galleria",
      resetPaint: "Dipingere di nuovo da capo",
      sourcesTitle: "Fonti delle immagini",
      sourcesBody: "Tutte le immagini provengono da Wikimedia Commons e sono di pubblico dominio. Sono state trasformate automaticamente in campi di colore per il gioco. Le citazioni dalle lettere di Van Gogh le ha tradotte Masilano dall’originale olandese o francese (numeri e date secondo l’edizione delle lettere del 2009). Le citazioni dalle lettere di Monet le ha tradotte Masilano dall’originale francese (destinatario e data secondo Wildenstein). I tuoi progressi sono salvati solo su questo dispositivo.",
      close: "Chiudi",
      easy: "Facile",
      medium: "Medio",
      hard: "Difficile",
      done: "Fatto",
      ready: "Pronto",
      neu: "Nuovo",
      storyTag: "Storia",
      pathTag: "Percorso di vita",
      inStory: "Nella storia di {name}",
      inPath: "Nel percorso di vita di {name}",
      noHits: "Nessun risultato",
      noHitsHint: "Prova un altro titolo, pittore, anno o museo.",
      pageN: "Pagina {n}",
      lockedStory: "Questo quadro appartiene alla storia di {name}. Si sblocca capitolo per capitolo.",
      colorHere: "Qui va il colore {n}",
      pickOpen: "Scegli un colore ancora aperto",
      hintToast: "Tocca «Suggerimento» per rivedere la storia",
      resetConfirm: "Cancellare i progressi su questo quadro e ricominciare?",
      museum: "🏛 Museo: {m}",
      today: "🏛 Oggi: {m}",
      original: "Originale",
      yours: "La tua versione",
      paintedOf: "{n} di {N} dipinti",
      startNow: "Inizia ora",
      pathKicker: "Nuovo · Percorso di vita",
      storyKickerNew: "Nuovo · Storie",
      storyKicker: "Storie",
      chaptersPainted: "{n} di {N} capitoli dipinti",
      pictureOf: "{place} · Quadro {n} di {N}",
      picturesPainted: "{n} di {N} quadri dipinti",
      chapterN: "Capitolo {n}",
      chapterOf: "Capitolo {n} di {N}",
      chapterLine: "Capitolo {n} · {place}, {when}",
      lockedUntil: "🔒 Si sblocca quando il capitolo {n} è finito",
      paintFirst: "Dipingi prima il capitolo {n}; poi si continua qui.",
      already: "Già dipinto",
      youPaint: "Stai dipingendo",
      chapterDone: "Capitolo {n} completato! 🎉",
      finishStory: "Concludi la storia",
      nextChapter: "Avanti: capitolo {n}",
      pictureDone: "Quadro {n} completato! 🎉",
      nextPicture: "Avanti: {title}",
      pathNotePlay: "La prima stazione è un inizio libero. Nella versione di prova puoi già dipingere tutti i quadri; più avanti, ogni quadro finito sbloccherà il successivo.",
      pathNoteDone: "Hai dipinto tutti i quadri di questo percorso. La conclusione è più in basso.",
      freeStart: "Inizio libero · ",
      closing: "Alla fine",
      mapAria: "Mappa delle stazioni del percorso di vita di Van Gogh",
      mapAriaPath: "Mappa delle stazioni: {title}",
      allDone: "Hai dipinto tutti i {N} quadri.",
      museumWord: "Museo",
      pathAria: "Percorso di vita: {title}",
      storyAria: "Storie: {name}",
      langAria: "Lingua",
      langDe: "Deutsch",
      langEn: "English",
      langEs: "Español",
      langFr: "Français",
      langIt: "Italiano",
      langFallback: "Testo in inglese",
      quoteSelfTr: "Traduzione dell’autotraduzione (a partire dall’originale).",
      quoteFromEnOrig: "Traduzione della lettera originale in inglese di Vincent.",
      langMenuAria: "Scegli la lingua",
      publicDomain: "pubblico dominio",
      publicDomainCC0: "pubblico dominio (CC0)",
      hintAgain: "Tocca 💡 per rivedere il testo",
      colorAlready: "Questo colore è già finito",
      colorFinished: "Colore {n} finito ✓",
      colorAria: "Colore {n}",
      colorAriaDone: "Colore {n}, finito",
      obSkip: "Salta",
      obNext: "Avanti",
      obStart: "Iniziamo",
      obStep: "{n} di {N}",
      ob1Title: "Benvenuto in Masilano",
      ob1Body: "Qui dipingi capolavori famosi, campo dopo campo, al tuo ritmo.",
      ob2Title: "Come funziona",
      ob2Body: "Scegli un colore e tocca i campi con quel numero. Puoi interrompere quando vuoi e continuare più tardi.",
      ob3Title: "Sempre al tuo ritmo",
      ob3Body: "Scopri il percorso di vita di Van Gogh e le storie dei pittori. I tuoi progressi restano solo su questo dispositivo.",
      continueKicker: "Continua a dipingere",
      continueAria: "Continua a dipingere: {title}",
      installTitle: "Aggiungi alla schermata Home",
      installBody: "Così Masilano è a portata di mano, come un’app.",
      installAdd: "Aggiungi",
      installDismiss: "Chiudi",
      installHowTitle: "Come aggiungere Masilano",
      installHowIOS: "Tocca l’icona di condivisione e scegli «Aggiungi alla schermata Home».",
      installHowGeneric: "Nel menu del browser scegli «Aggiungi alla schermata Home» o «Installa app».",
      installGotIt: "Capito",
      share: "Condividi il quadro",
      shareText: "Ho dipinto «{title}» di {artist} con Masilano.",
      shareCredit: "dipinto con Masilano",
      shareSaved: "Quadro salvato",
      shareFailed: "La condivisione non è riuscita. Il quadro è stato salvato.",
      settingsTitle: "Impostazioni",
      settingsAria: "Impostazioni",
      calmTitle: "Modalità calma",
      calmBody: "Solo quadri facili, pulsanti più grandi e movimenti più tranquilli.",
      calmAria: "Modalità calma",
      dailyKicker: "Quadro del giorno",
      dailyAria: "Quadro del giorno: {title}",
      dailyDone: "Già dipinto",
      dailyPaint: "Dipingere oggi",
      streakToday: "{n} giorni – che bello che tu sia qui oggi",
      streakActive: "{n} giorni di fila",
      streakPaused: "{n} giorni, al tuo ritmo",
      streakToday1: "Che bello che tu sia qui oggi",
      streakActive1: "Un giorno",
      streakPaused1: "Un giorno, al tuo ritmo",
      albumTitle: "Album",
      albumAria: "Apri l’album",
      albumOpen: "Album",
      albumCount: "{n} di {N} quadri",
      albumGroup: "{n}/{N}",
      albumEmpty: "Il tuo album è ancora vuoto. Ogni quadro finito troverà qui il suo posto.",
      albumViewAria: "Quadro finito: {title}",
      mileFirst: "Il tuo primo quadro è finito. Che bello che tu sia qui.",
      mile10: "Dieci quadri. Lo fai al tuo ritmo.",
      mile50: "Cinquanta quadri nel tuo album.",
      mileStation: "La prima stazione è completa."
    }
  };

  const LANGS = ['de', 'en', 'es', 'fr', 'it'];
  const LANG_NAMES = { de: 'Deutsch', en: 'English', es: 'Español', fr: 'Français', it: 'Italiano' };
  const LANG_HTML = { de: 'de-CH', en: 'en', es: 'es', fr: 'fr', it: 'it' };
  const CONTENT_GLOB = { en: 'EN', es: 'ES', fr: 'FR', it: 'IT' };

  const MONTHS = {
    en: {
      'Januar':'January','Februar':'February','März':'March','April':'April','Mai':'May','Juni':'June',
      'Juli':'July','August':'August','September':'September','Oktober':'October','November':'November','Dezember':'December',
      'Jan.':'Jan.','Feb.':'Feb.','März':'March','Apr.':'Apr.','Aug.':'Aug.','Sept.':'Sept.','Okt.':'Oct.','Nov.':'Nov.','Dez.':'Dec.'
    },
    es: {
      'Januar':'enero','Februar':'febrero','März':'marzo','April':'abril','Mai':'mayo','Juni':'junio',
      'Juli':'julio','August':'agosto','September':'septiembre','Oktober':'octubre','November':'noviembre','Dezember':'diciembre',
      'Jan.':'ene.','Feb.':'feb.','März':'marzo','Apr.':'abr.','Aug.':'ago.','Sept.':'sept.','Okt.':'oct.','Nov.':'nov.','Dez.':'dic.'
    },
    fr: {
      'Januar':'janvier','Februar':'février','März':'mars','April':'avril','Mai':'mai','Juni':'juin',
      'Juli':'juillet','August':'août','September':'septembre','Oktober':'octobre','November':'novembre','Dezember':'décembre',
      'Jan.':'janv.','Feb.':'févr.','März':'mars','Apr.':'avr.','Aug.':'août','Sept.':'sept.','Okt.':'oct.','Nov.':'nov.','Dez.':'déc.'
    },
    it: {
      'Januar':'gennaio','Februar':'febbraio','März':'marzo','April':'aprile','Mai':'maggio','Juni':'giugno',
      'Juli':'luglio','August':'agosto','September':'settembre','Oktober':'ottobre','November':'novembre','Dezember':'dicembre',
      'Jan.':'gen.','Feb.':'feb.','März':'marzo','Apr.':'apr.','Aug.':'ago.','Sept.':'sett.','Okt.':'ott.','Nov.':'nov.','Dez.':'dic.'
    }
  };

  function mapLangTag(raw) {
    const n = String(raw || '').toLowerCase().replace('_', '-');
    if (n.indexOf('de') === 0) return 'de';
    if (n.indexOf('es') === 0) return 'es';
    if (n.indexOf('fr') === 0) return 'fr';
    if (n.indexOf('it') === 0) return 'it';
    if (n.indexOf('en') === 0) return 'en';
    return null;
  }

  function detect() {
    try {
      const s = localStorage.getItem(KEY);
      if (LANGS.indexOf(s) >= 0) return s;
    } catch (e) {}
    const navs = [];
    if (typeof navigator !== 'undefined') {
      if (navigator.languages && navigator.languages.length) navs.push.apply(navs, navigator.languages);
      if (navigator.language) navs.push(navigator.language);
      if (navigator.userLanguage) navs.push(navigator.userLanguage);
    }
    for (let i = 0; i < navs.length; i++) {
      const m = mapLangTag(navs[i]);
      if (m) return m;
    }
    return 'en';
  }

  let lang = detect();

  const PATHTEXT_FILES = {
    es: ['es-path-vangogh.js', 'es-path-monet.js', 'es-path-hokusai.js', 'es-path-klimt.js', 'es-path-klimt-p2.js'],
    fr: ['fr-path-vangogh.js', 'fr-path-monet.js', 'fr-path-hokusai.js', 'fr-path-klimt.js', 'fr-path-klimt-p2.js'],
    it: ['it-path-vangogh.js', 'it-path-monet.js', 'it-path-hokusai.js', 'it-path-klimt.js', 'it-path-klimt-p2.js']
  };
  const _scriptProm = {};
  const _pathTextProm = {};

  function loadScriptOnce(src) {
    if (_scriptProm[src]) return _scriptProm[src];
    _scriptProm[src] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => resolve(src);
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(s);
    });
    return _scriptProm[src];
  }

  function pathTextsReady(code) {
    code = code || lang;
    if (code === 'de' || code === 'en') return true;
    const P = contentPack(code);
    return !!(P && P.pathTexts && Object.keys(P.pathTexts).length);
  }

  function ensurePathTexts(code) {
    code = code || lang;
    if (code === 'de' || code === 'en') return Promise.resolve(code);
    if (pathTextsReady(code)) return Promise.resolve(code);
    if (_pathTextProm[code]) return _pathTextProm[code];
    const files = PATHTEXT_FILES[code] || [];
    _pathTextProm[code] = Promise.all(files.map(loadScriptOnce)).then(() => code);
    return _pathTextProm[code];
  }


  function t(key, vars) {
    const pack = dict[lang] || dict.de;
    let s = (pack[key] != null ? pack[key] : (dict.de[key] != null ? dict.de[key] : key));
    if (vars) s = s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ''; });
    return s;
  }

  function contentPack(which) {
    const code = which || lang;
    if (code === 'de') return null;
    const g = CONTENT_GLOB[code];
    return (g && window[g]) || null;
  }

  function applyMonths(s, to) {
    if (!s || to === 'de') return s;
    const map = MONTHS[to] || MONTHS.en;
    let out = String(s);
    const keys = Object.keys(map).sort((a, b) => b.length - a.length);
    for (let i = 0; i < keys.length; i++) out = out.split(keys[i]).join(map[keys[i]]);
    if (to === 'en') {
      out = out.replace(/(\d+)\.(\s+)(January|February|March|April|May|June|July|August|September|October|November|December|Jan\.|Feb\.|Apr\.|Aug\.|Sept\.|Oct\.|Nov\.|Dec\.)/g, '$1$2$3');
    }
    if (to === 'es') {
      out = out.replace(/\bum\s+/g, 'hacia ');
      out = out.replace(/\bab\s+/g, 'desde ');
      out = out.replace(/\b(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.|feb\.|abr\.|ago\.|sept\.|oct\.|nov\.|dic\.)(\s+)(\d{4})/gi, '$1 de$2$3');
    }
    if (to === 'fr') {
      out = out.replace(/\bum\s+/g, 'vers ');
      out = out.replace(/\bab\s+/g, 'à partir de ');
    }
    if (to === 'it') {
      out = out.replace(/\bum\s+/g, 'circa ');
      out = out.replace(/\bab\s+/g, 'dal ');
    }
    return out;
  }

  function whenEn(s) { return applyMonths(s, 'en'); }
  function whenLoc(s) { return applyMonths(s, lang); }

  function citeEn(cite) {
    if (!cite) return cite;
    let s = cite;
    s = s.replace(/^Brief\s+/, 'Letter ');
    s = s.replace(/, um den /, ', on or about ');
    s = s.replace(/ oder /g, ' or ');
    s = s.replace(/, an die Mutter$/, ', to his mother');
    s = s.replace(/, an Theo und Jo$/, ', to Theo and Jo');
    s = s.replace(/, an Willemien \(Wil\)$/, ', to Willemien (Wil)');
    s = s.replace(/, an Emile Bernard$/, ', to Emile Bernard');
    s = s.replace(/, an Albert Aurier$/, ', to Albert Aurier');
    s = s.replace(/, an Paul Gauguin$/, ', to Paul Gauguin');
    s = s.replace(/, an Eugène Boch$/, ', to Eugène Boch');
    s = s.replace(/, an Theo$/, ', to Theo');
    s = s.replace(/, an /, ', to ');
    s = s.replace(/, von Theo$/, ', from Theo');
    s = s.replace(/, von Jo van Gogh-Bonger$/, ', from Jo van Gogh-Bonger');
    s = applyMonths(s, 'en');
    return s;
  }

  function citeLoc(cite, to) {
    if (!cite) return cite;
    to = to || lang;
    if (to === 'de') return cite;
    if (to === 'en') return citeEn(cite);
    let s = cite;
    if (to === 'es') {
      s = s.replace(/^Brief\s+an /, 'Carta a ');
      s = s.replace(/^Brief\s+/, 'Carta ');
      s = s.replace(/, um den /g, ', hacia el ');
      s = s.replace(/ und um den /g, ' y hacia el ');
      s = s.replace(/ oder /g, ' o ');
      s = s.replace(/, an die Mutter$/, ', a su madre');
      s = s.replace(/, an Theo und Jo$/, ', a Theo y Jo');
      s = s.replace(/, an Willemien \(Wil\)$/, ', a Willemien (Wil)');
      s = s.replace(/, an Emile Bernard$/, ', a Emile Bernard');
      s = s.replace(/, an Albert Aurier$/, ', a Albert Aurier');
      s = s.replace(/, an Paul Gauguin$/, ', a Paul Gauguin');
      s = s.replace(/, an Eugène Boch$/, ', a Eugène Boch');
      s = s.replace(/, an Horace Mann Livens$/, ', a Horace Mann Livens');
      s = s.replace(/, an Theo$/, ', a Theo');
      s = s.replace(/, an /, ', a ');
      s = s.replace(/, von Theo$/, ', de Theo');
      s = s.replace(/, von Jo van Gogh-Bonger$/, ', de Jo van Gogh-Bonger');
      s = s.replace(/\bEnde\s+/g, 'finales de ');
      s = s.replace(/\bDienstag\b/g, 'martes');
      s = s.replace(/\bbei\s+Christiania\b/g, 'cerca de Christiania');
      s = applyMonths(s, 'es');
      s = s.replace(/\bo\s+octubre\b/g, 'u octubre');
      s = s.replace(/(\d+)\.\s+/g, '$1 ');
      s = s.replace(/(\d+)\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/g, '$1 de $2');
      s = s.replace(/(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\s+(\d{4})/g, '$1 de $2');
      s = s.replace(/ und /g, ' y ');
      s = s.replace(', Paris,', ', París,');
      return s;
    }
    if (to === 'fr') {
      s = s.replace(/^Brief\s+an /, 'Lettre à ');
      s = s.replace(/^Brief\s+/, 'Lettre ');
      s = s.replace(/, um den /g, ', vers le ');
      s = s.replace(/ und um den /g, ' et vers le ');
      s = s.replace(/ oder /g, ' ou ');
      s = s.replace(/, an die Mutter$/, ', à sa mère');
      s = s.replace(/, an Theo und Jo$/, ', à Theo et Jo');
      s = s.replace(/, an Willemien \(Wil\)$/, ', à Willemien (Wil)');
      s = s.replace(/, an Emile Bernard$/, ', à Emile Bernard');
      s = s.replace(/, an Albert Aurier$/, ', à Albert Aurier');
      s = s.replace(/, an Paul Gauguin$/, ', à Paul Gauguin');
      s = s.replace(/, an Eugène Boch$/, ', à Eugène Boch');
      s = s.replace(/, an Horace Mann Livens$/, ', à Horace Mann Livens');
      s = s.replace(/, an Theo$/, ', à Theo');
      s = s.replace(/, an /, ', à ');
      s = s.replace(/, von Theo$/, ', de Theo');
      s = s.replace(/, von Jo van Gogh-Bonger$/, ', de Jo van Gogh-Bonger');
      s = s.replace(/\bEnde\s+/g, 'fin ');
      s = s.replace(/\bDienstag\b/g, 'mardi');
      s = s.replace(/\bbei\s+Christiania\b/g, 'près de Christiania');
      s = applyMonths(s, 'fr');
      s = s.replace(/ und /g, ' et ');
      s = s.replace(/(\d+)\.\s+/g, '$1\u00a0');
      s = s.replace(/(\d+)\.–(\d+)/g, '$1–$2');
      return s;
    }
    if (to === 'it') {
      s = s.replace(/^Brief\s+an /, 'Lettera a ');
      s = s.replace(/^Brief\s+/, 'Lettera ');
      s = s.replace(/, um den /g, ', circa il ');
      s = s.replace(/ und um den /g, ' e circa il ');
      s = s.replace(/ oder /g, ' o ');
      s = s.replace(/, an die Mutter$/, ', alla madre');
      s = s.replace(/, an Theo und Jo$/, ', a Theo e Jo');
      s = s.replace(/, an Willemien \(Wil\)$/, ', a Willemien (Wil)');
      s = s.replace(/, an Emile Bernard$/, ', a Emile Bernard');
      s = s.replace(/, an Albert Aurier$/, ', ad Albert Aurier');
      s = s.replace(/, an Paul Gauguin$/, ', a Paul Gauguin');
      s = s.replace(/, an Eugène Boch$/, ', a Eugène Boch');
      s = s.replace(/, an Horace Mann Livens$/, ', a Horace Mann Livens');
      s = s.replace(/, an Theo$/, ', a Theo');
      s = s.replace(/, an /, ', a ');
      s = s.replace(/, von Theo$/, ', di Theo');
      s = s.replace(/, von Jo van Gogh-Bonger$/, ', di Jo van Gogh-Bonger');
      s = s.replace(/\bEnde\s+/g, 'fine ');
      s = s.replace(/\bDienstag\b/g, 'martedì');
      s = s.replace(/\bbei\s+Christiania\b/g, 'presso Christiania');
      s = applyMonths(s, 'it');
      s = s.replace(/(\d+)\.\s+/g, '$1 ');
      s = s.replace(/(\d+)\.–(\d+)/g, '$1–$2');
      s = s.replace(/ und /g, ' e ');
      return s;
    }
    return citeEn(cite);
  }

  function packGet(P, bucket, id) {
    return (P && P[bucket] && P[bucket][id]) || null;
  }

  function loc(obj, field) {
    if (!obj) return '';
    if (lang !== 'de') {
      const P = contentPack();
      if (P && obj.id) {
        const w = packGet(P, 'works', obj.id);
        if (w && w[field] != null) return w[field];
        const s = packGet(P, 'stories', obj.id);
        if (s && s[field] != null) return s[field];
        const p = packGet(P, 'paths', obj.id);
        if (p && p[field] != null) return p[field];
      }
      if (field === 'museum' && P && P.museums && obj.museum && P.museums[obj.museum]) return P.museums[obj.museum];
      if (field === 'artist' && P && P.artists && obj.artist && P.artists[obj.artist]) return P.artists[obj.artist];
      if (field === 'when') return whenLoc(obj.when);
      // Path-only titles and museums: prefer English over German when this language has no entry.
      if (lang !== 'en' && (field === 'title' || field === 'museum' || field === 'artist' || field === 'part' || field === 'subtitle' || field === 'intro' || field === 'ending' || field === 'epilogue')) {
        const EN = window.EN || {};
        if (obj.id) {
          const w = packGet(EN, 'works', obj.id);
          if (w && w[field] != null) return w[field];
          const s = packGet(EN, 'stories', obj.id);
          if (s && s[field] != null) return s[field];
          const p = packGet(EN, 'paths', obj.id);
          if (p && p[field] != null) return p[field];
        }
        if (field === 'museum' && EN.museums && obj.museum && EN.museums[obj.museum]) return EN.museums[obj.museum];
        if (field === 'artist' && EN.artists && obj.artist && EN.artists[obj.artist]) return EN.artists[obj.artist];
      }
    }
    return obj[field];
  }

  function asArr(v) {
    if (v == null || v === '') return [];
    return Array.isArray(v) ? v : [v];
  }

  function locStation(st) {
    if (!st) return { place: '', when: '', intro: [] };
    if (lang === 'de') return { place: st.place, when: st.when, intro: asArr(st.intro) };
    const P = contentPack();
    const e = packGet(P, 'stations', st.id) || {};
    const en = packGet(window.EN, 'stations', st.id) || {};
    return {
      place: e.place || en.place || st.place,
      when: e.when || (en.when || whenLoc(st.when)),
      intro: asArr(e.intro && e.intro.length ? e.intro : (en.intro || st.intro))
    };
  }

  function locPathWork(w) {
    const de = { text: asArr(w && w.text), fact: w && w.fact, quote: w && w.quote, fallback: false };
    if (!w) return de;
    if (lang === 'de') return de;
    const P = contentPack();
    const e = packGet(P, 'pathTexts', w.pid) || {};
    const en = packGet(window.EN, 'pathTexts', w.pid) || {};
    function quoteFrom(src, fallbackCite) {
      if (src && src.quote) {
        return {
          text: src.quote.text || (w.quote && w.quote.text),
          cite: src.quote.cite || fallbackCite || (w.quote && w.quote.cite)
        };
      }
      if (w.quote) {
        return { text: w.quote.text, cite: fallbackCite || w.quote.cite };
      }
      return null;
    }
    if (e.text || e.fact || e.quote) {
      return {
        text: asArr(e.text || en.text || w.text),
        fact: e.fact || en.fact || w.fact,
        quote: quoteFrom(e, lang === 'en' ? citeEn(w.quote && w.quote.cite) : (e.quote && e.quote.cite) || citeLoc(w.quote && w.quote.cite)),
        fallback: false
      };
    }
    const enHas = !!(en.text || en.fact || en.quote);
    if (lang === 'en' || enHas) {
      const qCite = citeEn(w.quote && w.quote.cite);
      return {
        text: asArr(en.text || w.text),
        fact: en.fact || w.fact,
        quote: quoteFrom(en, qCite),
        fallback: lang !== 'en' && enHas
      };
    }
    return de;
  }

  function locChapter(story, ch) {
    if (!ch) return { title: '', place: '', when: '', text: [], fact: '' };
    if (lang === 'de') return { title: ch.title, place: ch.place, when: ch.when, text: asArr(ch.text), fact: ch.fact };
    const P = contentPack();
    function chap(pack) {
      const s = pack && pack.stories && story && pack.stories[story.id];
      return (s && s.chapters && (s.chapters[ch.pid] || s.chapters[ch.title])) || {};
    }
    const e = chap(P);
    const en = chap(window.EN);
    return {
      title: e.title || en.title || ch.title,
      place: e.place || en.place || ch.place,
      when: e.when || en.when || whenLoc(ch.when),
      text: asArr(e.text && (Array.isArray(e.text) ? e.text.length : e.text) ? e.text : (en.text || ch.text)),
      fact: e.fact || en.fact || ch.fact
    };
  }

  function sourceLine(src) {
    if (!src || lang === 'de') return src;
    return String(src)
      .replace(/gemeinfrei \(Public Domain\)/g, t('publicDomain'))
      .replace(/gemeinfrei \(CC0\)/g, t('publicDomainCC0'))
      .replace(/gemeinfrei/g, t('publicDomain'));
  }

  function closeLangMenus() {
    document.querySelectorAll('.langmenu-list').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.langmenu-btn').forEach(el => el.setAttribute('aria-expanded', 'false'));
  }

  function syncLangMenus() {
    document.querySelectorAll('.langmenu-btn .langlabel, .langmenu-btn .lang-label').forEach(el => {
      el.textContent = LANG_NAMES[lang] || lang;
    });
    document.querySelectorAll('.langmenu-btn').forEach(btn => {
      const lab = btn.querySelector('.langlabel') || btn;
      if (lab === btn && !btn.querySelector('.langlabel')) {
        /* keep */
      }
    });
    document.querySelectorAll('.langmenu-btn').forEach(btn => {
      const span = btn.querySelector('.langlabel');
      if (span) span.textContent = LANG_NAMES[lang] || lang;
    });
    document.querySelectorAll('.langopt, .langmenu-list [data-lang]').forEach(b => {
      const on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
  }

  function bindLangMenus() {
    if (bindLangMenus.done) return;
    bindLangMenus.done = true;
    document.addEventListener('click', e => {
      const opt = e.target.closest('[data-lang]');
      if (opt && opt.closest('#langSwitch, #obLang, .langmenu')) {
        const next = opt.getAttribute('data-lang');
        if (LANGS.indexOf(next) >= 0) setLang(next);
        closeLangMenus();
        e.preventDefault();
        return;
      }
      const btn = e.target.closest('.langmenu-btn');
      if (btn) {
        const menu = btn.parentElement && btn.parentElement.querySelector('.langmenu-list');
        const open = menu && menu.classList.contains('hidden');
        closeLangMenus();
        if (menu && open) {
          menu.classList.remove('hidden');
          btn.setAttribute('aria-expanded', 'true');
        }
        e.preventDefault();
        return;
      }
      if (!e.target.closest('.langmenu')) closeLangMenus();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLangMenus();
    });
  }

  function applyStatic() {
    const root = document.documentElement;
    if (root) root.setAttribute('lang', LANG_HTML[lang] || lang);
    if (document.title !== undefined) document.title = t('docTitle');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (k) el.textContent = t(k);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.getAttribute('data-i18n-html');
      if (k) el.innerHTML = t(k);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (k) el.setAttribute('placeholder', t(k));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const k = el.getAttribute('data-i18n-aria');
      if (k) el.setAttribute('aria-label', t(k));
    });
    syncLangMenus();
    bindLangMenus();
  }

  function setLang(next) {
    if (LANGS.indexOf(next) < 0) return;
    lang = next;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    applyStatic();
    if (typeof window.__i18nOnChange === 'function') window.__i18nOnChange(lang);
    ensurePathTexts(lang).then(function () {
      if (typeof window.__i18nOnChange === 'function') window.__i18nOnChange(lang);
    });
  }

  window.I18N = {
    key: KEY,
    langs: LANGS,
    names: LANG_NAMES,
    get lang() { return lang; },
    t, loc, locStation, locPathWork, locChapter, sourceLine, citeEn, citeLoc, whenEn, whenLoc,
    applyStatic, setLang, detect, dict, contentPack, closeLangMenus,
    ensurePathTexts, pathTextsReady, PATHTEXT_FILES
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyStatic);
  } else applyStatic();
})();
