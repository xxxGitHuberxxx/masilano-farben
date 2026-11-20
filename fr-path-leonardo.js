// v10.35 FR short Lebensweg for Leonardo da Vinci.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Muzeum Książąt Czartoryskich, Krakau": "Musée Czartoryski, Cracovie"
});
  P.works = Object.assign(P.works || {}, {
  "ermine": {
    "title": "La Dame à l’hermine",
    "museum": "Musée Czartoryski, Cracovie"
  },
  "monalisa": {
    "title": "La Joconde",
    "museum": "Musée du Louvre, Paris"
  }
});
  P.paths = P.paths || {};
  P.paths.leonardo = {
  "title": "Le parcours de vie de Léonard de Vinci",
  "life": "1452–1519",
  "part": "Un court chemin · Florence et Milan",
  "subtitle": "Deux portraits",
  "intro": "À Florence et à Milan, Léonard cherche la lumière douce sur les visages. La Dame à l’hermine et la Joconde sont parmi les portraits les plus connus au monde.",
  "ending": [
    "Léonard meurt à Amboise en 1519. Une partie ultérieure pourra ajouter d’autres études et tableaux."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres études."
};
  P.stations = Object.assign(P.stations || {}, {
  "leonardo1": {
    "place": "Florence et Milan",
    "when": null,
    "mapLabel": "Florence et Milan",
    "intro": [
      "À Florence et à Milan, Léonard cherche la lumière douce sur les visages. La Dame à l’hermine et la Joconde sont parmi les portraits les plus connus au monde."
    ]
  }
});
})();
