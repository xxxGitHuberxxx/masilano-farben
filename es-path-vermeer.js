// v10.35 ES short Lebensweg for Johannes Vermeer.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Mauritshuis, Den Haag": "Mauritshuis, La Haya"
});
  P.works = Object.assign(P.works || {}, {
  "pearl": {
    "title": "La joven de la perla",
    "museum": "Mauritshuis, La Haya"
  },
  "milkmaid": {
    "title": "La lechera",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "delft": {
    "title": "Vista de Delft",
    "museum": "Mauritshuis, La Haya"
  }
});
  P.paths = P.paths || {};
  P.paths.vermeer = {
  "title": "El camino de vida de Johannes Vermeer",
  "life": "1632–1675",
  "part": "Un camino breve · Delft",
  "subtitle": "Luz en las estancias",
  "intro": "En Delft, Vermeer pinta la luz quieta sobre rostros, jarras y ladrillos. Tres cuadros van de la joven del pendiente de perla a la lechera y a la vista de la ciudad.",
  "ending": [
    "Vermeer muere en Delft en 1675. Una parte posterior puede añadir más interiores."
  ],
  "epilogue": "Una parte posterior puede añadir más interiores."
};
  P.stations = Object.assign(P.stations || {}, {
  "vermeer1": {
    "place": "Delft",
    "when": null,
    "mapLabel": "Delft",
    "intro": [
      "En Delft, Vermeer pinta la luz quieta sobre rostros, jarras y ladrillos. Tres cuadros van de la joven del pendiente de perla a la lechera y a la vista de la ciudad."
    ]
  }
});
})();
