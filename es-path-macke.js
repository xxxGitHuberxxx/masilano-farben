// v10.35 ES short Lebensweg for August Macke.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Museum Ludwig, Köln": "Museum Ludwig, Colonia"
});
  P.works = Object.assign(P.works || {}, {
  "macke": {
    "title": "Mujer con chaqueta verde",
    "museum": "Museum Ludwig, Colonia"
  }
});
  P.paths = P.paths || {};
  P.paths.macke = {
  "title": "El camino de vida de August Macke",
  "life": "1887–1914",
  "part": "Un camino breve · el lago de Thun",
  "subtitle": "Dama con chaqueta verde",
  "intro": "Un camino breve hacia August Macke, amigo de Franz Marc y pintor de Renania. «Dama con chaqueta verde» se pintó en 1913 en Hilterfingen, junto al lago de Thun.",
  "ending": [
    "En septiembre de 1914 Macke muere en la Primera Guerra Mundial, con solo 27 años. Una parte posterior puede añadir más cuadros de Túnez y del Rin."
  ],
  "epilogue": "Una parte posterior puede añadir más cuadros."
};
  P.stations = Object.assign(P.stations || {}, {
  "macke1": {
    "place": "Hilterfingen, lago de Thun",
    "when": null,
    "mapLabel": "Hilterfingen, lago de Thun",
    "intro": [
      "Un camino breve hacia August Macke, amigo de Franz Marc y pintor de Renania. «Dama con chaqueta verde» se pintó en 1913 en Hilterfingen, junto al lago de Thun."
    ]
  }
});
})();
