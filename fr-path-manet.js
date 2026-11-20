// v10.35 FR short Lebensweg for Édouard Manet.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "fifre": {
    "title": "Le Fifre",
    "museum": "Musée d’Orsay, Paris"
  },
  "folies": {
    "title": "Un bar aux Folies-Bergère",
    "museum": "The Courtauld Gallery, London"
  }
});
  P.paths = P.paths || {};
  P.paths.manet = {
  "title": "Le parcours de vie d’Édouard Manet",
  "life": "1832–1883",
  "part": "Un court chemin · Paris",
  "subtitle": "Le Fifre et le bar",
  "intro": "Manet se tient au seuil de la peinture moderne à Paris. Le Fifre et le bar des Folies-Bergère montrent avec quelle fermeté il voit la ville.",
  "ending": [
    "Manet meurt à Paris en 1883. Une partie ultérieure pourra ajouter d’autres tableaux parisiens."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres tableaux parisiens."
};
  P.stations = Object.assign(P.stations || {}, {
  "manet1": {
    "place": "Paris",
    "when": null,
    "mapLabel": "Paris",
    "intro": [
      "Manet se tient au seuil de la peinture moderne à Paris. Le Fifre et le bar des Folies-Bergère montrent avec quelle fermeté il voit la ville."
    ]
  }
});
})();
