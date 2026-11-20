// v10.35 FR short Lebensweg for Henri Rousseau.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "gypsy": {
    "title": "La Bohémienne endormie",
    "museum": "The Museum of Modern Art (MoMA), New York"
  }
});
  P.paths = P.paths || {};
  P.paths.rousseau = {
  "title": "Le parcours de vie d’Henri Rousseau",
  "life": "1844–1910",
  "part": "Un court chemin · Paris",
  "subtitle": "La Bohémienne endormie",
  "intro": "Rousseau, le douanier, peint à Paris un monde à lui, calme et rêvé. « La Bohémienne endormie » gît la nuit auprès d’un lion, paisible et énigmatique.",
  "ending": [
    "Rousseau meurt à Paris en 1910. Une partie ultérieure pourra ajouter d’autres jungles et vues de ville."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres tableaux."
};
  P.stations = Object.assign(P.stations || {}, {
  "rousseau1": {
    "place": "Paris",
    "when": null,
    "mapLabel": "Paris",
    "intro": [
      "Rousseau, le douanier, peint à Paris un monde à lui, calme et rêvé. « La Bohémienne endormie » gît la nuit auprès d’un lion, paisible et énigmatique."
    ]
  }
});
})();
