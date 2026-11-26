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
    "Rafael muere en Roma en 1520, con solo 37 años. La Madonna Sixtina cuelga hoy en la Gemäldegalerie Alte Meister de Dresde."
  ],
  "epilogue": "Rafael muere en Roma en 1520, con solo 37 años. La Madonna Sixtina cuelga hoy en la Gemäldegalerie Alte Meister de Dresde."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "sistine": {
      "text": [
        "María avanza con el Niño entre dos cortinas corridas, como si se abriera un escenario.",
        "A sus pies se sientan los dos angelitos que más tarde acabaron en innumerables postales."
      ],
      "fact": "El cuadro nació para el monasterio de San Sisto en Piacenza y llegó a Dresde en 1754."
    }
  });
})();
