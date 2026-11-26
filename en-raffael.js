// v10.35 EN short Lebensweg for Raffael.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "sistine": {
    "title": "The Sistine Madonna",
    "museum": "Gemäldegalerie Alte Meister, Dresden"
  }
});
  P.paths = P.paths || {};
  P.paths.raffael = {
  "title": "Raphael’s Life Journey",
  "life": "1483–1520",
  "part": "A short path · Rome",
  "subtitle": "The Sistine Madonna",
  "intro": "In Rome, Raphael paints for the church and the court. The Sistine Madonna steps forward on clouds; the two angels at the lower edge later become widely known.",
  "ending": [
    "Raphael dies in Rome in 1520, aged only 37. The Sistine Madonna hangs today in the Gemäldegalerie Alte Meister in Dresden."
  ],
  "epilogue": "Raphael dies in Rome in 1520, aged only 37. The Sistine Madonna hangs today in the Gemäldegalerie Alte Meister in Dresden."
};
  P.stations = Object.assign(P.stations || {}, {
  "raffael1": {
    "place": "Rome",
    "when": null,
    "mapLabel": "Rome",
    "intro": [
      "In Rome, Raphael paints for the church and the court. The Sistine Madonna steps forward on clouds; the two angels at the lower edge later become widely known."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "sistine": {
      "text": [
        "Mary steps forward with the Child between two drawn-back curtains, as if a stage were opening.",
        "At her feet sit the two little angels who later landed on countless postcards."
      ],
      "fact": "The picture was made for the monastery of San Sisto in Piacenza and came to Dresden in 1754."
    }
  });
})();
