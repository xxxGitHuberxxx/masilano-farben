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
    "Léonard meurt à Amboise en 1519. Les deux portraits de ce chemin se trouvent aujourd’hui à Cracovie et à Paris."
  ],
  "epilogue": "Léonard meurt à Amboise en 1519. Les deux portraits de ce chemin se trouvent aujourd’hui à Cracovie et à Paris."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "ermine": {
      "text": [
        "La jeune femme est Cecilia Gallerani, une dame cultivée à la cour de Milan.",
        "L’hermine sur son bras était un symbole de pureté — et un jeu de mots sur son nom."
      ],
      "fact": "Léonard travaillait alors pour le duc Ludovico Sforza à Milan. Cecilia était l’une des femmes les plus intelligentes de cette cour."
    },
    "monalisa": {
      "text": [
        "Une femme est assise devant un paysage ample, un peu mystérieux, et nous regarde.",
        "Son léger sourire a rendu le tableau célèbre dans le monde entier."
      ],
      "fact": "Léonard emporta le tableau en France lorsqu’il se rendit à la cour du roi François Ier. C’est pourquoi il est aujourd’hui accroché au Louvre et non en Italie."
    }
  });
})();
