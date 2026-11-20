// v10.35 ES short Lebensweg for Édouard Manet.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "fifre": {
    "title": "El pifano",
    "museum": "Musée d’Orsay, Paris"
  },
  "folies": {
    "title": "Un bar en el Folies-Bergère",
    "museum": "The Courtauld Gallery, London"
  }
});
  P.paths = P.paths || {};
  P.paths.manet = {
  "title": "El camino de vida de Édouard Manet",
  "life": "1832–1883",
  "part": "Un camino breve · París",
  "subtitle": "El piferario y el bar",
  "intro": "Manet está en el umbral de la pintura moderna en París. El piferario y el bar de Folies-Bergère muestran con qué firmeza ve la ciudad.",
  "ending": [
    "Manet muere en París en 1883. Una parte posterior puede añadir más cuadros de París."
  ],
  "epilogue": "Una parte posterior puede añadir más cuadros de París."
};
  P.stations = Object.assign(P.stations || {}, {
  "manet1": {
    "place": "París",
    "when": null,
    "mapLabel": "París",
    "intro": [
      "Manet está en el umbral de la pintura moderna en París. El piferario y el bar de Folies-Bergère muestran con qué firmeza ve la ciudad."
    ]
  }
});
})();
