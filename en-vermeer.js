// v10.35 EN short Lebensweg for Johannes Vermeer.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {
  "Mauritshuis, Den Haag": "Mauritshuis, The Hague"
});
  P.works = Object.assign(P.works || {}, {
  "pearl": {
    "title": "Girl with a Pearl Earring",
    "museum": "Mauritshuis, The Hague"
  },
  "milkmaid": {
    "title": "The Milkmaid",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "delft": {
    "title": "View of Delft",
    "museum": "Mauritshuis, The Hague"
  }
});
  P.paths = P.paths || {};
  P.paths.vermeer = {
  "title": "Johannes Vermeer’s Life Journey",
  "life": "1632–1675",
  "part": "A short path · Delft",
  "subtitle": "Light in the rooms",
  "intro": "In Delft, Vermeer paints the quiet light on faces, jugs and brick. Three pictures lead from the girl with a pearl earring to the milkmaid and the view of the town.",
  "ending": [
    "Vermeer dies in Delft in 1675. A later part can add further interiors."
  ],
  "epilogue": "A later part can add further interiors."
};
  P.stations = Object.assign(P.stations || {}, {
  "vermeer1": {
    "place": "Delft",
    "when": null,
    "mapLabel": "Delft",
    "intro": [
      "In Delft, Vermeer paints the quiet light on faces, jugs and brick. Three pictures lead from the girl with a pearl earring to the milkmaid and the view of the town."
    ]
  }
});
})();
