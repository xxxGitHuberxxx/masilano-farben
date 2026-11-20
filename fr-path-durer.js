// v10.35 FR short Lebensweg for Albrecht Dürer.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Albertina, Wien": "Albertina, Vienne"
});
  P.works = Object.assign(P.works || {}, {
  "hare": {
    "title": "Un lièvre",
    "museum": "Albertina, Vienne"
  },
  "wing": {
    "title": "Aile d’un rollier d’Europe",
    "museum": "Albertina, Vienne"
  }
});
  P.paths = P.paths || {};
  P.paths.durer = {
  "title": "Le parcours de vie d’Albrecht Dürer",
  "life": "1471–1528",
  "part": "Un court chemin · Nuremberg",
  "subtitle": "Le lièvre et l’aile",
  "intro": "Deux aquarelles célèbres de Nuremberg : le lièvre de Dürer et l’aile d’un rollier. Un court chemin dans l’étude de la nature à la Renaissance.",
  "ending": [
    "Dürer meurt à Nuremberg en 1528. Ces deux feuilles comptent parmi les études d’après nature les plus précises de leur temps."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres gravures et portraits."
};
  P.stations = Object.assign(P.stations || {}, {
  "durer1": {
    "place": "Nuremberg",
    "when": null,
    "mapLabel": "Nuremberg",
    "intro": [
      "Deux aquarelles célèbres de Nuremberg : le lièvre de Dürer et l’aile d’un rollier. Un court chemin dans l’étude de la nature à la Renaissance."
    ]
  }
});
})();
