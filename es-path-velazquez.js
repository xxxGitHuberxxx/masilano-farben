// v10.35 ES short Lebensweg for Diego Velázquez.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "meninas": {
    "title": "Las Meninas",
    "museum": "Museo del Prado, Madrid"
  }
});
  P.paths = P.paths || {};
  P.paths.velazquez = {
  "title": "El camino de vida de Diego Velázquez",
  "life": "1599–1660",
  "part": "Un camino breve · Madrid",
  "subtitle": "Las Meninas",
  "intro": "Velázquez es pintor de corte en Madrid. «Las Meninas» muestra a la infanta, las meninas y al propio pintor en el espejo del taller: uno de los cuadros más pensados sobre el acto de mirar.",
  "ending": [
    "Velázquez muere en Madrid en 1660. Una parte posterior puede añadir más retratos de corte."
  ],
  "epilogue": "Una parte posterior puede añadir más retratos de corte."
};
  P.stations = Object.assign(P.stations || {}, {
  "velazquez1": {
    "place": "Madrid",
    "when": null,
    "mapLabel": "Madrid",
    "intro": [
      "Velázquez es pintor de corte en Madrid. «Las Meninas» muestra a la infanta, las meninas y al propio pintor en el espejo del taller: uno de los cuadros más pensados sobre el acto de mirar."
    ]
  }
});
})();
