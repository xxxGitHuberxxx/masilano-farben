// v10.35 EN short Lebensweg for Jan van Eyck.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "arnolfini": {
    "title": "The Arnolfini Portrait",
    "museum": "The National Gallery, London"
  }
});
  P.paths = P.paths || {};
  P.paths.vaneyck = {
  "title": "Jan van Eyck’s Life Journey",
  "life": "um 1390–1441",
  "part": "A short path · Bruges",
  "subtitle": "The Arnolfini Portrait",
  "intro": "In Bruges, van Eyck paints with a new, luminous oil colour. The Arnolfini Portrait of 1434 shows a couple in an interior, the mirror on the wall, every fabric precise.",
  "ending": [
    "Van Eyck dies in Bruges in 1441. A later part can add further panel pictures."
  ],
  "epilogue": "A later part can add further panel pictures."
};
  P.stations = Object.assign(P.stations || {}, {
  "vaneyck1": {
    "place": "Bruges",
    "when": null,
    "mapLabel": "Bruges",
    "intro": [
      "In Bruges, van Eyck paints with a new, luminous oil colour. The Arnolfini Portrait of 1434 shows a couple in an interior, the mirror on the wall, every fabric precise."
    ]
  }
});
})();
