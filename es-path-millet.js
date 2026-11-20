// v10.35 ES short Lebensweg for Jean-François Millet.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "angelus": {
    "title": "El Ángelus",
    "museum": "Musée d’Orsay, Paris"
  },
  "gleaners": {
    "title": "Las espigadoras",
    "museum": "Musée d’Orsay, Paris"
  }
});
  P.paths = P.paths || {};
  P.paths.millet = {
  "title": "El camino de vida de Jean-François Millet",
  "life": "1814–1875",
  "part": "Un camino breve · Barbizon",
  "subtitle": "El campo y el ángelus",
  "intro": "En Barbizon, Millet pinta el trabajo del campo sin pompa. Las espigadoras y El ángelus están entre los cuadros más serenos de la vida rural del siglo XIX.",
  "ending": [
    "Millet muere en Barbizon en 1875. Una parte posterior puede añadir más campos y pastores."
  ],
  "epilogue": "Una parte posterior puede añadir más campos."
};
  P.stations = Object.assign(P.stations || {}, {
  "millet1": {
    "place": "Barbizon",
    "when": null,
    "mapLabel": "Barbizon",
    "intro": [
      "En Barbizon, Millet pinta el trabajo del campo sin pompa. Las espigadoras y El ángelus están entre los cuadros más serenos de la vida rural del siglo XIX."
    ]
  }
});
})();
