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
  "life": "c. 1390–1441",
  "part": "A short path · Bruges",
  "subtitle": "The Arnolfini Portrait",
  "intro": "In Bruges, van Eyck paints with a new, luminous oil colour. The Arnolfini Portrait of 1434 shows a couple in an interior, the mirror on the wall, every fabric precise.",
  "ending": [
    "Van Eyck dies in Bruges in 1441. The Arnolfini Portrait hangs today in the National Gallery in London."
  ],
  "epilogue": "Van Eyck dies in Bruges in 1441. The Arnolfini Portrait hangs today in the National Gallery in London."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "arnolfini": {
      "text": [
        "A couple stand in a living room in Bruges, probably the Italian merchant Giovanni di Nicolao Arnolfini and his wife.",
        "He raises his hand, she lays hers in his."
      ],
      "fact": "In the convex mirror on the wall you see the room once more, and in it two further figures at the door."
    }
  });
})();
