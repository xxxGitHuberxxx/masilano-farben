// v10.35 ES short Lebensweg for Edgar Degas.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Puschkin-Museum, Moskau": "Museo Pushkin, Moscú"
});
  P.works = Object.assign(P.works || {}, {
  "degas": {
    "title": "La clase de danza",
    "museum": "Musée d’Orsay, Paris"
  },
  "etoile": {
    "title": "La estrella",
    "museum": "Musée d’Orsay, Paris"
  },
  "bluedance": {
    "title": "Bailarinas azules",
    "museum": "Museo Pushkin, Moscú"
  }
});
  P.paths = P.paths || {};
  P.paths.degas = {
  "title": "El camino de vida de Edgar Degas",
  "life": "1834–1917",
  "part": "Un camino breve · París",
  "subtitle": "Bailarinas",
  "intro": "En París, Degas observa la ópera, el ensayo y el instante del movimiento. Tres cuadros van de la clase de danza a la estrella y a las bailarinas azules.",
  "ending": [
    "Degas muere en París en 1917. Una parte posterior puede añadir caballos, retratos y más danzas."
  ],
  "epilogue": "Una parte posterior puede añadir más danzas."
};
  P.stations = Object.assign(P.stations || {}, {
  "degas1": {
    "place": "París",
    "when": null,
    "mapLabel": "París",
    "intro": [
      "En París, Degas observa la ópera, el ensayo y el instante del movimiento. Tres cuadros van de la clase de danza a la estrella y a las bailarinas azules."
    ]
  }
});
})();
