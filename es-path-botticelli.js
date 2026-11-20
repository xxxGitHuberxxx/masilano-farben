// v10.35 ES short Lebensweg for Sandro Botticelli.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Uffizien, Florenz": "Galería de los Uffizi, Florencia",
  "Galleria degli Uffizi, Florenz": "Galleria degli Uffizi, Florencia"
});
  P.works = Object.assign(P.works || {}, {
  "venus": {
    "title": "El nacimiento de Venus",
    "museum": "Galería de los Uffizi, Florencia"
  },
  "primavera": {
    "title": "La Primavera",
    "museum": "Galleria degli Uffizi, Florencia"
  }
});
  P.paths = P.paths || {};
  P.paths.botticelli = {
  "title": "El camino de vida de Sandro Botticelli",
  "life": "1445–1510",
  "part": "Un camino breve · Florencia",
  "subtitle": "Venus y la Primavera",
  "intro": "En Florencia, Botticelli pinta para los Médicis los relatos antiguos con una gracia nueva. El nacimiento de Venus y La primavera están entre las imágenes más festivas del primer Renacimiento.",
  "ending": [
    "Botticelli muere en Florencia en 1510. Una parte posterior puede añadir más tablas."
  ],
  "epilogue": "Una parte posterior puede añadir más tablas."
};
  P.stations = Object.assign(P.stations || {}, {
  "botticelli1": {
    "place": "Florencia",
    "when": null,
    "mapLabel": "Florencia",
    "intro": [
      "En Florencia, Botticelli pinta para los Médicis los relatos antiguos con una gracia nueva. El nacimiento de Venus y La primavera están entre las imágenes más festivas del primer Renacimiento."
    ]
  }
});
})();
