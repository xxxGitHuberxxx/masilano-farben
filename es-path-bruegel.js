// v10.35 ES short Lebensweg for Pieter Bruegel der Ältere.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Kunsthistorisches Museum, Wien": "Kunsthistorisches Museum, Viena"
});
  P.works = Object.assign(P.works || {}, {
  "babel": {
    "title": "La torre de Babel",
    "museum": "Kunsthistorisches Museum, Viena"
  },
  "harvesters": {
    "title": "Los cosechadores",
    "museum": "The Metropolitan Museum of Art, New York"
  },
  "hunters": {
    "title": "Cazadores en la nieve",
    "museum": "Kunsthistorisches Museum, Viena"
  }
});
  P.paths = P.paths || {};
  P.paths.bruegel = {
  "title": "El camino de vida de Pieter Bruegel",
  "life": "um 1525–1569",
  "part": "Un camino breve · Brabante",
  "subtitle": "Torre, cosecha y nieve",
  "intro": "En Brabante, Bruegel el Viejo ve el trabajo, el invierno y los relatos antiguos. Tres cuadros van de la torre de Babel a la cosecha y a los cazadores en la nieve.",
  "ending": [
    "Bruegel muere en Bruselas en 1569. Una parte posterior puede añadir más estaciones y proverbios."
  ],
  "epilogue": "Una parte posterior puede añadir más cuadros."
};
  P.stations = Object.assign(P.stations || {}, {
  "bruegel1": {
    "place": "Amberes y Bruselas",
    "when": null,
    "mapLabel": "Amberes y Bruselas",
    "intro": [
      "En Brabante, Bruegel el Viejo ve el trabajo, el invierno y los relatos antiguos. Tres cuadros van de la torre de Babel a la cosecha y a los cazadores en la nieve."
    ]
  }
});
})();
