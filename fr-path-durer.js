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
  "epilogue": "Dürer meurt à Nuremberg en 1528. Ces deux feuilles comptent parmi les études d’après nature les plus précises de leur temps."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "hare": {
      "text": [
        "Le lièvre est assis tout à fait immobile, les oreilles attentives, chaque poil du pelage visible.",
        "Dürer l’observa de si près et avec une telle précision que l’on peut presque sentir la fourrure douce."
      ],
      "fact": "La feuille ne mesure qu’environ 25 centimètres de haut et est pourtant l’une des images d’animaux les plus célèbres du monde."
    },
    "wing": {
      "text": [
        "Dürer peignit l’aile d’un oiseau coloré avec une telle précision qu’elle pourrait encore être devant nous sur la table.",
        "Chaque plume est posée à part, des fortes rémiges aux douces couvertures claires."
      ],
      "fact": "Le rollier d’Europe est un oiseau méridional au plumage turquoise, bleu et brun chaud. Dürer le consigna comme un naturaliste."
    }
  });
})();
