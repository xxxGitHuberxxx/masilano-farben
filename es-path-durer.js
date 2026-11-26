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
  "epilogue": "Dürer muere en Núremberg en 1528. Ambas hojas están entre los estudios naturales más precisos de su tiempo."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "hare": {
      "text": [
        "La liebre está sentada muy quieta, las orejas atentas, visible cada pelo del pelaje.",
        "Durero la observó de tan cerca y con tanta precisión que casi se puede sentir el pelaje suave."
      ],
      "fact": "La hoja mide solo unos 25 centímetros de alto y es, aun así, una de las imágenes de animales más famosas del mundo."
    },
    "wing": {
      "text": [
        "Durero pintó el ala de un pájaro de colores con tanta precisión que aún podría estar delante de nosotros sobre la mesa.",
        "Cada pluma está puesta por separado, desde las remeras fuertes hasta las coberteras suaves y claras."
      ],
      "fact": "La carraca europea es un ave meridional con turquesa, azul y un pardo cálido en el plumaje. Durero la fijó como un naturalista."
    }
  });
})();
