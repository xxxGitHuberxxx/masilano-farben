// v10.35 EN short Lebensweg for August Macke.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {
  "Museum Ludwig, Köln": "Museum Ludwig, Cologne"
});
  P.works = Object.assign(P.works || {}, {
  "macke": {
    "title": "Woman in a Green Jacket",
    "museum": "Museum Ludwig, Cologne"
  }
});
  P.paths = P.paths || {};
  P.paths.macke = {
  "title": "August Macke's Life Journey",
  "life": "1887–1914",
  "part": "A short path · Lake Thun",
  "subtitle": "Woman in a Green Jacket",
  "intro": "A short path to August Macke, friend of Franz Marc and painter of the Rhineland. “Woman in a Green Jacket” was painted in 1913 in Hilterfingen on Lake Thun.",
  "ending": [
    "In April 1914 he travels to Tunisia with Paul Klee and Louis Moilliet. In September 1914 Macke is killed in the First World War, aged only 27. The Lady in a Green Jacket, painted in Hilterfingen, belongs today to the Museum Ludwig in Cologne."
  ],
  "epilogue": "In April 1914 he travels to Tunisia with Paul Klee and Louis Moilliet. In September 1914 Macke is killed in the First World War, aged only 27. The Lady in a Green Jacket, painted in Hilterfingen, belongs today to the Museum Ludwig in Cologne."
};
  P.stations = Object.assign(P.stations || {}, {
  "macke1": {
    "place": "Hilterfingen on Lake Thun",
    "when": null,
    "mapLabel": "Hilterfingen on Lake Thun",
    "intro": [
      "A short path to August Macke, friend of Franz Marc and painter of the Rhineland. “Woman in a Green Jacket” was painted in 1913 in Hilterfingen on Lake Thun."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "macke": {
      "text": [
        "Walkers stand in a park, in the background the blue of a lake.",
        "Macke painted the picture in 1913 in Hilterfingen on Lake Thun, where he spent several months with his wife Elisabeth."
      ],
      "fact": "Macke was a close friend of Franz Marc and belonged to the circle of the Blue Rider."
    }
  });
})();
