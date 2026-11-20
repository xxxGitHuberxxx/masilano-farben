// v10.35 EN short Lebensweg for Pieter Bruegel der Ältere.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {
  "Kunsthistorisches Museum, Wien": "Kunsthistorisches Museum, Vienna"
});
  P.works = Object.assign(P.works || {}, {
  "babel": {
    "title": "The Tower of Babel",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "harvesters": {
    "title": "The Harvesters",
    "museum": "The Metropolitan Museum of Art, New York"
  },
  "hunters": {
    "title": "Hunters in the Snow",
    "museum": "Kunsthistorisches Museum, Vienna"
  }
});
  P.paths = P.paths || {};
  P.paths.bruegel = {
  "title": "Pieter Bruegel’s Life Journey",
  "life": "um 1525–1569",
  "part": "A short path · Brabant",
  "subtitle": "Tower, harvest and snow",
  "intro": "In Brabant, Bruegel the Elder sees work, winter and the old stories. Three pictures lead from the Tower of Babel via the harvest to the hunters in the snow.",
  "ending": [
    "Bruegel dies in Brussels in 1569. A later part can add further seasons and proverbs."
  ],
  "epilogue": "A later part can add further pictures."
};
  P.stations = Object.assign(P.stations || {}, {
  "bruegel1": {
    "place": "Antwerp and Brussels",
    "when": null,
    "mapLabel": "Antwerp and Brussels",
    "intro": [
      "In Brabant, Bruegel the Elder sees work, winter and the old stories. Three pictures lead from the Tower of Babel via the harvest to the hunters in the snow."
    ]
  }
});
})();
