// v10.35 IT short Lebensweg for Édouard Manet.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "fifre": {
    "title": "Il piffero",
    "museum": "Musée d’Orsay, Paris"
  },
  "folies": {
    "title": "Un bar alle Folies-Bergère",
    "museum": "The Courtauld Gallery, London"
  }
});
  P.paths = P.paths || {};
  P.paths.manet = {
  "title": "Il cammino di Édouard Manet",
  "life": "1832–1883",
  "part": "Un breve percorso · Parigi",
  "subtitle": "Il pifferaio e il bar",
  "intro": "Manet sta sulla soglia della pittura moderna a Parigi. Il pifferaio e il bar alle Folies-Bergère mostrano con quanta fermezza vede la città.",
  "ending": [
    "Manet muore a Parigi nel 1883. Una parte successiva potrà aggiungere altri quadri parigini."
  ],
  "epilogue": "Una parte successiva potrà aggiungere altri quadri parigini."
};
  P.stations = Object.assign(P.stations || {}, {
  "manet1": {
    "place": "Parigi",
    "when": null,
    "mapLabel": "Parigi",
    "intro": [
      "Manet sta sulla soglia della pittura moderna a Parigi. Il pifferaio e il bar alle Folies-Bergère mostrano con quanta fermezza vede la città."
    ]
  }
});
})();
