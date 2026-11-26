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
  "life": "c. 1525–1569",
  "part": "Un camino breve · Brabante",
  "subtitle": "Torre, cosecha y nieve",
  "intro": "En Brabante, Bruegel el Viejo ve el trabajo, el invierno y los relatos antiguos. Tres cuadros van de la torre de Babel a la cosecha y a los cazadores en la nieve.",
  "ending": [
    "Bruegel muere en Bruselas en 1569. Dos de los tres cuadros de este camino, la Torre y los Cazadores en la nieve, cuelgan hoy en el Kunsthistorisches Museum de Viena."
  ],
  "epilogue": "Bruegel muere en Bruselas en 1569. Dos de los tres cuadros de este camino, la Torre y los Cazadores en la nieve, cuelgan hoy en el Kunsthistorisches Museum de Viena."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "babel": {
      "text": [
        "Según la Biblia, los hombres quisieron construir una torre que llegara hasta el cielo.",
        "Bruegel muestra la enorme obra con grúas, andamios, obreros y toda una ciudad alrededor."
      ],
      "fact": "Como modelo para los numerosos arcos le sirvió probablemente el Coliseo, que había visto en su viaje a Roma."
    },
    "harvesters": {
      "text": [
        "Es pleno verano: delante los segadores descansan comiendo, detrás se sigue segando, y los campos se abren a un paisaje amplio y dorado.",
        "El cuadro pertenece a las pinturas de los meses de Bruegel, aquí el pleno verano."
      ],
      "fact": "Cinco de las seis pinturas originales de las estaciones se conservan. «Cazadores en la nieve» es el invierno que le corresponde."
    },
    "hunters": {
      "text": [
        "Tres cazadores vuelven al pueblo con perros cansados.",
        "Abajo, en los estanques helados, se patina, y a lo lejos se alzan montañas agudas e invernales."
      ],
      "fact": "Pese al frío, el cuadro está lleno de vida: un fuego, pájaros, niños sobre el hielo, un letrero de posada con un ciervo."
    }
  });
})();
