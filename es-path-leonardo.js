// v10.35 ES short Lebensweg for Leonardo da Vinci.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Muzeum Książąt Czartoryskich, Krakau": "Museo Czartoryski, Cracovia"
});
  P.works = Object.assign(P.works || {}, {
  "ermine": {
    "title": "Dama del armiño",
    "museum": "Museo Czartoryski, Cracovia"
  },
  "monalisa": {
    "title": "La Gioconda",
    "museum": "Musée du Louvre, Paris"
  }
});
  P.paths = P.paths || {};
  P.paths.leonardo = {
  "title": "El camino de vida de Leonardo da Vinci",
  "life": "1452–1519",
  "part": "Un camino breve · Florencia y Milán",
  "subtitle": "Dos retratos",
  "intro": "En Florencia y Milán, Leonardo busca la luz suave en los rostros. La dama del armiño y la Mona Lisa están entre los retratos más conocidos del mundo.",
  "ending": [
    "Leonardo muere en Amboise en 1519. Una parte posterior puede añadir más estudios y cuadros."
  ],
  "epilogue": "Una parte posterior puede añadir más estudios."
};
  P.stations = Object.assign(P.stations || {}, {
  "leonardo1": {
    "place": "Florencia y Milán",
    "when": null,
    "mapLabel": "Florencia y Milán",
    "intro": [
      "En Florencia y Milán, Leonardo busca la luz suave en los rostros. La dama del armiño y la Mona Lisa están entre los retratos más conocidos del mundo."
    ]
  }
});
})();
