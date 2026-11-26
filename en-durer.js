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
  "epilogue": "Dürer dies in Nuremberg in 1528. The two sheets are among the most precise nature studies of their time."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "hare": {
      "text": [
        "The hare sits quite still, its ears alert, every single hair of the coat visible.",
        "Dürer observed it so closely and precisely that one can almost feel the soft fur."
      ],
      "fact": "The sheet is only about 25 centimetres high and is nonetheless one of the most famous animal pictures in the world."
    },
    "wing": {
      "text": [
        "Dürer painted the wing of a colourful bird so precisely that it might still lie before us on the table.",
        "Each feather is set separately, from the strong flight feathers to the soft, light coverts."
      ],
      "fact": "The European roller is a southern bird with turquoise, blue and warm brown in its plumage. Dürer recorded it like a naturalist."
    }
  });
})();
