// v10.35 EN short Lebensweg for Albrecht Dürer.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {
  "Albertina, Wien": "Albertina, Vienna"
});
  P.works = Object.assign(P.works || {}, {
  "hare": {
    "title": "Young Hare",
    "museum": "Albertina, Vienna"
  },
  "wing": {
    "title": "Wing of a Blue Roller",
    "museum": "Albertina, Vienna"
  }
});
  P.paths = P.paths || {};
  P.paths.durer = {
  "title": "Albrecht Dürer’s Life Journey",
  "life": "1471–1528",
  "part": "A short path · Nuremberg",
  "subtitle": "The hare and the wing",
  "intro": "Two famous watercolours from Nuremberg: Dürer’s Young Hare and the wing of a roller. A short path through Renaissance nature study.",
  "ending": [
    "Dürer dies in Nuremberg in 1528. The two sheets are among the most precise nature studies of their time."
  ],
  "epilogue": "A later part can add further prints and portraits."
};
  P.stations = Object.assign(P.stations || {}, {
  "durer1": {
    "place": "Nuremberg",
    "when": null,
    "mapLabel": "Nuremberg",
    "intro": [
      "Two famous watercolours from Nuremberg: Dürer’s Young Hare and the wing of a roller. A short path through Renaissance nature study."
    ]
  }
});
})();
