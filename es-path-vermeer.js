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
    "Vermeer muere en Delft en 1675. De él se conservan pocos cuadros; dos de los tres de este camino cuelgan hoy en el Mauritshuis de La Haya."
  ],
  "epilogue": "Vermeer muere en Delft en 1675. De él se conservan pocos cuadros; dos de los tres de este camino cuelgan hoy en el Mauritshuis de La Haya."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "pearl": {
      "text": [
        "El cuadro no es un retrato clásico, sino una «tronie»: el estudio de un rostro con un traje de fantasía, aquí un turbante.",
        "Quién era la muchacha, nadie lo sabe hasta hoy."
      ],
      "fact": "La perla es una ilusión: consiste solo en unas pocas pinceladas de color claro. Los estudios han mostrado que falta incluso el gancho del que debería colgar en la oreja."
    },
    "milkmaid": {
      "text": [
        "Una criada de cocina vierte leche de un jarro.",
        "A su lado hay pan y un cesto."
      ],
      "fact": "Abajo, en la pared, ves azulejos de Delft con figuritas, típicos de las cocinas holandesas de la época."
    },
    "delft": {
      "text": [
        "Desde una orilla vemos Delft al otro lado del canal: el agua, los muros de ladrillo, las torres, y un claro entre las nubes que hace brillar la ciudad.",
        "Es una de las vistas urbanas más tranquilas de la historia del arte."
      ],
      "fact": "El propio Vermeer era de Delft y permaneció fiel a la ciudad toda su vida."
    }
  });
})();
