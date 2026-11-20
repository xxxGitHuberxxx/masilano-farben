// v10.35 FR short Lebensweg for Georges Seurat.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "jatte": {
    "title": "Un dimanche après-midi à l’île de la Grande Jatte",
    "museum": "The Art Institute of Chicago"
  },
  "gravelines": {
    "title": "Le Canal de Gravelines, le soir",
    "museum": "The Museum of Modern Art (MoMA), New York"
  }
});
  P.paths = P.paths || {};
  P.paths.seurat = {
  "title": "Le parcours de vie de Georges Seurat",
  "life": "1859–1891",
  "part": "Un court chemin · la Seine",
  "subtitle": "Points et le fleuve",
  "intro": "Seurat pose la couleur en points et cherche un ordre calme. De l’île de la Grande Jatte, le court chemin mène au canal de Gravelines.",
  "ending": [
    "Seurat meurt à Paris en 1891, à seulement 31 ans. Une partie ultérieure pourra ajouter d’autres rives."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres rives."
};
  P.stations = Object.assign(P.stations || {}, {
  "seurat1": {
    "place": "Paris et la Seine",
    "when": null,
    "mapLabel": "Paris et la Seine",
    "intro": [
      "Seurat pose la couleur en points et cherche un ordre calme. De l’île de la Grande Jatte, le court chemin mène au canal de Gravelines."
    ]
  }
});
})();
