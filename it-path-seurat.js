// v10.35 IT short Lebensweg for Georges Seurat.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "jatte": {
    "title": "Una domenica pomeriggio sull’isola della Grande-Jatte",
    "museum": "The Art Institute of Chicago"
  },
  "gravelines": {
    "title": "Il canale di Gravelines alla sera",
    "museum": "The Museum of Modern Art (MoMA), New York"
  }
});
  P.paths = P.paths || {};
  P.paths.seurat = {
  "title": "Il cammino di Georges Seurat",
  "life": "1859–1891",
  "part": "Un breve percorso · la Senna",
  "subtitle": "Punti e il fiume",
  "intro": "Seurat pone il colore in punti e cerca un ordine quieto. Dall’isola della Grande Jatte il breve percorso porta al canale di Gravelines.",
  "ending": [
    "Seurat muore a Parigi nel 1891, a soli 31 anni. Una parte successiva potrà aggiungere altre rive."
  ],
  "epilogue": "Una parte successiva potrà aggiungere altre rive."
};
  P.stations = Object.assign(P.stations || {}, {
  "seurat1": {
    "place": "Parigi e la Senna",
    "when": null,
    "mapLabel": "Parigi e la Senna",
    "intro": [
      "Seurat pone il colore in punti e cerca un ordine quieto. Dall’isola della Grande Jatte il breve percorso porta al canale di Gravelines."
    ]
  }
});
})();
