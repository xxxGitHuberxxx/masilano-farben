// v10.35 FR short Lebensweg for Johannes Vermeer.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Mauritshuis, Den Haag": "Mauritshuis, La Haye"
});
  P.works = Object.assign(P.works || {}, {
  "pearl": {
    "title": "La Jeune Fille à la perle",
    "museum": "Mauritshuis, La Haye"
  },
  "milkmaid": {
    "title": "La Laitière",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "delft": {
    "title": "Vue de Delft",
    "museum": "Mauritshuis, La Haye"
  }
});
  P.paths = P.paths || {};
  P.paths.vermeer = {
  "title": "Le parcours de vie de Johannes Vermeer",
  "life": "1632–1675",
  "part": "Un court chemin · Delft",
  "subtitle": "La lumière dans les chambres",
  "intro": "À Delft, Vermeer peint la lumière calme sur les visages, les pichets et les briques. Trois tableaux mènent de la jeune fille à la perle à la laitière et à la vue de la ville.",
  "ending": [
    "Vermeer meurt à Delft en 1675. Une partie ultérieure pourra ajouter d’autres intérieurs."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres intérieurs."
};
  P.stations = Object.assign(P.stations || {}, {
  "vermeer1": {
    "place": "Delft",
    "when": null,
    "mapLabel": "Delft",
    "intro": [
      "À Delft, Vermeer peint la lumière calme sur les visages, les pichets et les briques. Trois tableaux mènent de la jeune fille à la perle à la laitière et à la vue de la ville."
    ]
  }
});
})();
