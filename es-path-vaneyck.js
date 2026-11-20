// v10.35 ES short Lebensweg for Jan van Eyck.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "arnolfini": {
    "title": "El matrimonio Arnolfini",
    "museum": "The National Gallery, London"
  }
});
  P.paths = P.paths || {};
  P.paths.vaneyck = {
  "title": "El camino de vida de Jan van Eyck",
  "life": "um 1390–1441",
  "part": "Un camino breve · Brujas",
  "subtitle": "El retrato de Arnolfini",
  "intro": "En Brujas, van Eyck pinta con un óleo nuevo y luminoso. El retrato de Arnolfini de 1434 muestra a una pareja en un interior, el espejo en la pared, cada tela precisa.",
  "ending": [
    "Van Eyck muere en Brujas en 1441. Una parte posterior puede añadir más tablas."
  ],
  "epilogue": "Una parte posterior puede añadir más tablas."
};
  P.stations = Object.assign(P.stations || {}, {
  "vaneyck1": {
    "place": "Brujas",
    "when": null,
    "mapLabel": "Brujas",
    "intro": [
      "En Brujas, van Eyck pinta con un óleo nuevo y luminoso. El retrato de Arnolfini de 1434 muestra a una pareja en un interior, el espejo en la pared, cada tela precisa."
    ]
  }
});
})();
