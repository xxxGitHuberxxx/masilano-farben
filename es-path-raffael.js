// v10.35 ES short Lebensweg for Raffael.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "sistine": {
    "title": "La Madonna Sixtina",
    "museum": "Gemäldegalerie Alte Meister, Dresden"
  }
});
  P.paths = P.paths || {};
  P.paths.raffael = {
  "title": "El camino de vida de Rafael",
  "life": "1483–1520",
  "part": "Un camino breve · Roma",
  "subtitle": "La Madonna Sixtina",
  "intro": "En Roma, Rafael pinta para la Iglesia y la corte. La Madonna Sixtina avanza sobre nubes; los dos ángeles del borde inferior se harán después muy conocidos.",
  "ending": [
    "Rafael muere en Roma en 1520, con solo 37 años. Una parte posterior puede añadir más madonnas y las Estancias."
  ],
  "epilogue": "Una parte posterior puede añadir más cuadros."
};
  P.stations = Object.assign(P.stations || {}, {
  "raffael1": {
    "place": "Roma",
    "when": null,
    "mapLabel": "Roma",
    "intro": [
      "En Roma, Rafael pinta para la Iglesia y la corte. La Madonna Sixtina avanza sobre nubes; los dos ángeles del borde inferior se harán después muy conocidos."
    ]
  }
});
})();
