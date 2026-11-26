// v10.35 FR short Lebensweg for August Macke.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Museum Ludwig, Köln": "Museum Ludwig, Cologne"
});
  P.works = Object.assign(P.works || {}, {
  "macke": {
    "title": "Femme à la veste verte",
    "museum": "Museum Ludwig, Cologne"
  }
});
  P.paths = P.paths || {};
  P.paths.macke = {
  "title": "Le parcours de vie d’August Macke",
  "life": "1887–1914",
  "part": "Un court chemin · le lac de Thoune",
  "subtitle": "Dame au paletot vert",
  "intro": "Un court chemin vers August Macke, ami de Franz Marc et peintre de Rhénanie. « Dame au paletot vert » est peint en 1913 à Hilterfingen, au bord du lac de Thoune.",
  "ending": [
    "En avril 1914, il part pour la Tunisie avec Paul Klee et Louis Moilliet. En septembre 1914, Macke tombe à la guerre, à seulement 27 ans. La Dame à la veste verte, peinte à Hilterfingen, appartient aujourd’hui au Museum Ludwig de Cologne."
  ],
  "epilogue": "En avril 1914, il part pour la Tunisie avec Paul Klee et Louis Moilliet. En septembre 1914, Macke tombe à la guerre, à seulement 27 ans. La Dame à la veste verte, peinte à Hilterfingen, appartient aujourd’hui au Museum Ludwig de Cologne."
};
  P.stations = Object.assign(P.stations || {}, {
  "macke1": {
    "place": "Hilterfingen, lac de Thoune",
    "when": null,
    "mapLabel": "Hilterfingen, lac de Thoune",
    "intro": [
      "Un court chemin vers August Macke, ami de Franz Marc et peintre de Rhénanie. « Dame au paletot vert » est peint en 1913 à Hilterfingen, au bord du lac de Thoune."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "macke": {
      "text": [
        "Des promeneurs se tiennent dans un parc ; à l’arrière-plan, le bleu d’un lac.",
        "Macke peignit le tableau en 1913 à Hilterfingen, au bord du lac de Thoune, où il passa plusieurs mois avec sa femme Elisabeth."
      ],
      "fact": "Macke était un ami proche de Franz Marc et appartenait au cercle du Cavalier bleu."
    }
  });
})();
