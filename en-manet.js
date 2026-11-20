// v10.35 EN short Lebensweg for Édouard Manet.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "fifre": {
    "title": "The Fifer",
    "museum": "Musée d’Orsay, Paris"
  },
  "folies": {
    "title": "A Bar at the Folies-Bergère",
    "museum": "The Courtauld Gallery, London"
  }
});
  P.paths = P.paths || {};
  P.paths.manet = {
  "title": "Édouard Manet’s Life Journey",
  "life": "1832–1883",
  "part": "A short path · Paris",
  "subtitle": "The Fifer and the bar",
  "intro": "Manet stands on the threshold of modern painting in Paris. The Fifer and the Bar at the Folies-Bergère show how firmly and immediately he sees the city.",
  "ending": [
    "Manet dies in Paris in 1883. A later part can add further Paris pictures."
  ],
  "epilogue": "A later part can add further Paris pictures."
};
  P.stations = Object.assign(P.stations || {}, {
  "manet1": {
    "place": "Paris",
    "when": null,
    "mapLabel": "Paris",
    "intro": [
      "Manet stands on the threshold of modern painting in Paris. The Fifer and the Bar at the Folies-Bergère show how firmly and immediately he sees the city."
    ]
  }
});
})();
