// v10.35 ES short Lebensweg for Georges Seurat.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "jatte": {
    "title": "Un domingo por la tarde en la isla de la Grande Jatte",
    "museum": "The Art Institute of Chicago"
  },
  "gravelines": {
    "title": "El canal de Gravelines al atardecer",
    "museum": "The Museum of Modern Art (MoMA), New York"
  }
});
  P.paths = P.paths || {};
  P.paths.seurat = {
  "title": "El camino de vida de Georges Seurat",
  "life": "1859–1891",
  "part": "Un camino breve · el Sena",
  "subtitle": "Puntos y el río",
  "intro": "Seurat pone el color en puntos y busca un orden sereno. De la isla de La Grande Jatte el camino breve lleva al canal de Gravelines.",
  "ending": [
    "Seurat muere en París en 1891, con solo 31 años. Una parte posterior puede añadir más orillas."
  ],
  "epilogue": "Una parte posterior puede añadir más orillas."
};
  P.stations = Object.assign(P.stations || {}, {
  "seurat1": {
    "place": "París y el Sena",
    "when": null,
    "mapLabel": "París y el Sena",
    "intro": [
      "Seurat pone el color en puntos y busca un orden sereno. De la isla de La Grande Jatte el camino breve lleva al canal de Gravelines."
    ]
  }
});
})();
