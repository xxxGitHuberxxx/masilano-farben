// v10.35 FR short Lebensweg for Piet Mondrian.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "mondrian": {
    "title": "Composition avec rouge, bleu et jaune",
    "museum": "Kunsthaus Zürich"
  }
});
  P.paths = P.paths || {};
  P.paths.mondrian = {
  "title": "Le parcours de vie de Piet Mondrian",
  "life": "1872–1944",
  "part": "Un court chemin · Paris",
  "subtitle": "Rouge, bleu et jaune",
  "intro": "Mondrian conduit le paysage vers le plan et la ligne. La « Composition avec rouge, bleu et jaune » de 1930 est un équilibre calme de barres et de champs.",
  "ending": [
    "Mondrian meurt à New York en 1944. Une partie ultérieure pourra ajouter le chemin des arbres au plan pur."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres compositions."
};
  P.stations = Object.assign(P.stations || {}, {
  "mondrian1": {
    "place": "Paris et New York",
    "when": null,
    "mapLabel": "Paris et New York",
    "intro": [
      "Mondrian conduit le paysage vers le plan et la ligne. La « Composition avec rouge, bleu et jaune » de 1930 est un équilibre calme de barres et de champs."
    ]
  }
});
})();
