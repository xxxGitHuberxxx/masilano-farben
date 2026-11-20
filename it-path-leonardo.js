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
    "Leonardo muore ad Amboise nel 1519. Una parte successiva potrà aggiungere altri studi e quadri."
  ],
  "epilogue": "Una parte successiva potrà aggiungere altri studi."
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
})();
