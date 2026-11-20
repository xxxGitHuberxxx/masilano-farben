// v10.35 ES short Lebensweg for Albrecht Dürer.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Albertina, Wien": "Albertina, Viena"
});
  P.works = Object.assign(P.works || {}, {
  "hare": {
    "title": "Liebre joven",
    "museum": "Albertina, Viena"
  },
  "wing": {
    "title": "Ala de una carraca europea",
    "museum": "Albertina, Viena"
  }
});
  P.paths = P.paths || {};
  P.paths.durer = {
  "title": "El camino de vida de Albrecht Dürer",
  "life": "1471–1528",
  "part": "Un camino breve · Núremberg",
  "subtitle": "La liebre y el ala",
  "intro": "Dos acuarelas famosas de Núremberg: la liebre de Dürer y el ala de una carraca. Un camino breve por el estudio de la naturaleza en el Renacimiento.",
  "ending": [
    "Dürer muere en Núremberg en 1528. Ambas hojas están entre los estudios naturales más precisos de su tiempo."
  ],
  "epilogue": "Una parte posterior puede añadir más grabados y retratos."
};
  P.stations = Object.assign(P.stations || {}, {
  "durer1": {
    "place": "Núremberg",
    "when": null,
    "mapLabel": "Núremberg",
    "intro": [
      "Dos acuarelas famosas de Núremberg: la liebre de Dürer y el ala de una carraca. Un camino breve por el estudio de la naturaleza en el Renacimiento."
    ]
  }
});
})();
