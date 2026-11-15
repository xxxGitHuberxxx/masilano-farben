// Language: Deutsch / English. Progress keys are not touched.
// Stored preference: masilano.lang.v1 ('de' | 'en').
(function () {
  const KEY = 'masilano.lang.v1';

  const dict = {
    de: {
      appTitle: 'Malen nach Zahlen',
      docTitle: 'Masilano · Malen nach Zahlen',
      appSubtitle: '567 Meisterwerke, Feld für Feld – und die Lebenswege von Van Gogh, Monet und Hokusai.',
      sortAria: 'Reihenfolge der Bilder',
      sortGallery: 'Galerie',
      sortEasy: 'Leicht zuerst',
      searchPh: 'Bild oder Maler suchen',
      searchClear: 'Suche löschen',
      sourcesBtn: 'Bildquellen & Hinweise',
      version: 'Testversion 7.2',
      back: 'Zurück',
      backGallery: 'Zurück zur Galerie',
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
      mileStation: 'Die erste Station ist vollständig.'
    },
    en: {
      appTitle: 'Color by Number',
      docTitle: 'Masilano · Color by Number',
      appSubtitle: '567 masterpieces, field by field – and the life journeys of Van Gogh, Monet and Hokusai.',
      sortAria: 'Picture order',
      sortGallery: 'Gallery',
      sortEasy: 'Easy first',
      searchPh: 'Search for a picture or painter',
      searchClear: 'Clear search',
      sourcesBtn: 'Picture sources & notes',
      version: 'Test version 7.2',
      back: 'Back',
      backGallery: 'Back to the gallery',
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
      mileStation: 'The first station is complete.'
    }
  };

  const MONTHS = {
    'Januar':'January','Februar':'February','März':'March','April':'April','Mai':'May','Juni':'June',
    'Juli':'July','August':'August','September':'September','Oktober':'October','November':'November','Dezember':'December',
    'Jan.':'Jan.','Feb.':'Feb.','März':'March','Apr.':'Apr.','Aug.':'Aug.','Sept.':'Sept.','Okt.':'Oct.','Nov.':'Nov.','Dez.':'Dec.'
  };

  function detect() {
    try {
      const s = localStorage.getItem(KEY);
      if (s === 'de' || s === 'en') return s;
    } catch (e) {}
    const nav = String((typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage)) || 'en').toLowerCase();
    return nav.indexOf('de') === 0 ? 'de' : 'en';
  }

  let lang = detect();

  function t(key, vars) {
    const pack = dict[lang] || dict.de;
    let s = (pack[key] != null ? pack[key] : (dict.de[key] != null ? dict.de[key] : key));
    if (vars) s = s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ''; });
    return s;
  }

  function whenEn(s) {
    if (!s) return s;
    let out = s;
    const keys = Object.keys(MONTHS).sort((a,b) => b.length - a.length);
    for (const k of keys) out = out.split(k).join(MONTHS[k]);
    return out;
  }

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
    const keys = Object.keys(MONTHS).sort((a,b) => b.length - a.length);
    for (const k of keys) s = s.split(k).join(MONTHS[k]);
    // drop German ordinal dots after day numbers in running English? keep "23. May" -> "23 May"
    s = s.replace(/(\d+)\.(\s+)(January|February|March|April|May|June|July|August|September|October|November|December|Jan\.|Feb\.|Apr\.|Aug\.|Sept\.|Oct\.|Nov\.|Dec\.)/g, '$1$2$3');
    return s;
  }

  function enPack(id, bucket) {
    const EN = window.EN || {};
    return (EN[bucket] && EN[bucket][id]) || null;
  }

  function loc(obj, field) {
    if (!obj) return '';
    if (lang === 'en') {
      if (obj.id) {
        const w = enPack(obj.id, 'works');
        if (w && w[field] != null) return w[field];
        const s = enPack(obj.id, 'stories');
        if (s && s[field] != null) return s[field];
        const p = enPack(obj.id, 'paths');
        if (p && p[field] != null) return p[field];
      }
      if (field === 'museum') {
        const EN = window.EN || {};
        if (EN.museums && obj.museum && EN.museums[obj.museum]) return EN.museums[obj.museum];
      }
      if (field === 'artist') {
        const EN = window.EN || {};
        if (EN.artists && obj.artist && EN.artists[obj.artist]) return EN.artists[obj.artist];
      }
      if (field === 'when') return whenEn(obj.when);
    }
    return obj[field];
  }

  function locStation(st) {
    if (lang !== 'en') return { place: st.place, when: st.when, intro: st.intro };
    const e = enPack(st.id, 'stations') || {};
    return {
      place: e.place || st.place,
      when: e.when || whenEn(st.when),
      intro: e.intro || st.intro
    };
  }

  function locPathWork(w) {
    if (lang !== 'en') return { text: w.text, fact: w.fact, quote: w.quote };
    const e = enPack(w.pid, 'pathTexts') || {};
    const q = w.quote ? {
      text: (e.quote && e.quote.text) || w.quote.text,
      cite: (e.quote && e.quote.cite) || citeEn(w.quote.cite)
    } : null;
    return {
      text: e.text || w.text,
      fact: e.fact || w.fact,
      quote: q
    };
  }

  function locChapter(story, ch) {
    if (lang !== 'en') return { title: ch.title, place: ch.place, when: ch.when, text: ch.text, fact: ch.fact };
    const pack = enPack(story.id, 'stories');
    const e = (pack && pack.chapters && (pack.chapters[ch.pid] || pack.chapters[ch.title])) || {};
    return {
      title: e.title || ch.title,
      place: e.place || ch.place,
      when: e.when || whenEn(ch.when),
      text: e.text || ch.text,
      fact: e.fact || ch.fact
    };
  }

  function sourceLine(src) {
    if (lang !== 'en' || !src) return src;
    return String(src)
      .replace(/gemeinfrei \(Public Domain\)/g, t('publicDomain'))
      .replace(/gemeinfrei \(CC0\)/g, t('publicDomainCC0'))
      .replace(/gemeinfrei/g, 'public domain');
  }

  function applyStatic() {
    const root = document.documentElement;
    if (root) root.setAttribute('lang', lang === 'de' ? 'de-CH' : 'en');
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
    document.querySelectorAll('.langbtn').forEach(b => {
      const on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function setLang(next) {
    if (next !== 'de' && next !== 'en') return;
    lang = next;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    applyStatic();
    if (typeof window.__i18nOnChange === 'function') window.__i18nOnChange(lang);
  }

  window.I18N = {
    key: KEY,
    get lang() { return lang; },
    t, loc, locStation, locPathWork, locChapter, sourceLine, citeEn, whenEn,
    applyStatic, setLang, detect, dict
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyStatic);
  } else applyStatic();
})();
