// v10.35 EN short Lebensweg for John William Waterhouse.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "shalott": {
    "title": "The Lady of Shalott",
    "museum": "Tate Britain, London"
  }
});
  P.paths = P.paths || {};
  P.paths.waterhouse = {
  "title": "John William Waterhouse’s Life Journey",
  "life": "1849–1917",
  "part": "A short path · London",
  "subtitle": "The Lady of Shalott",
  "intro": "In London, Waterhouse paints subjects from poetry with firm, clear light. In 1888 “The Lady of Shalott” sits in the boat, the tapestry over the edge, her gaze already elsewhere.",
  "ending": [
    "Waterhouse dies in London in 1917. The Lady of Shalott hangs today in Tate Britain in London."
  ],
  "epilogue": "Waterhouse dies in London in 1917. The Lady of Shalott hangs today in Tate Britain in London."
};
  P.stations = Object.assign(P.stations || {}, {
  "waterhouse1": {
    "place": "London",
    "when": null,
    "mapLabel": "London",
    "intro": [
      "In London, Waterhouse paints subjects from poetry with firm, clear light. In 1888 “The Lady of Shalott” sits in the boat, the tapestry over the edge, her gaze already elsewhere."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "shalott": {
      "text": [
        "The Lady of Shalott frees herself from her cursed tower and glides down the river to Camelot.",
        "Candles, a tapestry and a crucifix lie in the boat – she knows that this way is her last."
      ],
      "fact": "The picture follows a poem by Alfred Tennyson. Whoever breaks the curse and looks out of the window at Sir Lancelot must die."
    }
  });
})();
