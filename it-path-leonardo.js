// v10.35 IT short Lebensweg for Leonardo da Vinci.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Muzeum Książąt Czartoryskich, Krakau": "Museo Czartoryski, Cracovia"
});
  P.works = Object.assign(P.works || {}, {
  "ermine": {
    "title": "Dama con l’ermellino",
    "museum": "Museo Czartoryski, Cracovia"
  },
  "monalisa": {
    "title": "La Gioconda",
    "museum": "Musée du Louvre, Paris"
  }
});
  P.paths = P.paths || {};
  P.paths.leonardo = {
  "title": "Il cammino di Leonardo da Vinci",
  "life": "1452–1519",
  "part": "Un breve percorso · Firenze e Milano",
  "subtitle": "Due ritratti",
  "intro": "A Firenze e Milano, Leonardo cerca la luce lieve sui volti. La dama con l’ermellino e la Gioconda sono tra i ritratti più noti al mondo.",
  "ending": [
    "Leonardo muore ad Amboise nel 1519. I due ritratti di questo percorso si trovano oggi a Cracovia e a Parigi."
  ],
  "epilogue": "Leonardo muore ad Amboise nel 1519. I due ritratti di questo percorso si trovano oggi a Cracovia e a Parigi."
};
  P.stations = Object.assign(P.stations || {}, {
  "leonardo1": {
    "place": "Firenze e Milano",
    "when": null,
    "mapLabel": "Firenze e Milano",
    "intro": [
      "A Firenze e Milano, Leonardo cerca la luce lieve sui volti. La dama con l’ermellino e la Gioconda sono tra i ritratti più noti al mondo."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "ermine": {
      "text": [
        "La giovane è Cecilia Gallerani, una dama colta alla corte di Milano.",
        "L’ermellino sul suo braccio era un simbolo di purezza — e un gioco di parole sul suo nome."
      ],
      "fact": "Leonardo lavorava allora per il duca Ludovico Sforza a Milano. Cecilia era una delle donne più intelligenti di quella corte."
    },
    "monalisa": {
      "text": [
        "Una donna siede davanti a un paesaggio ampio, un po’ misterioso, e ci guarda.",
        "Il suo lieve sorriso ha reso il quadro famoso in tutto il mondo."
      ],
      "fact": "Leonardo portò il quadro in Francia quando andò alla corte del re Francesco I. Per questo oggi è appeso al Louvre e non in Italia."
    }
  });
})();
