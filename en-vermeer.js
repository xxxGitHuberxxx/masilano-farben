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
    "Vermeer dies in Delft in 1675. Only a few of his pictures survive; two of the three on this path hang today in the Mauritshuis in The Hague."
  ],
  "epilogue": "Vermeer dies in Delft in 1675. Only a few of his pictures survive; two of the three on this path hang today in the Mauritshuis in The Hague."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "pearl": {
      "text": [
        "The picture is not a classical portrait, but a so-called “tronie”: the study of a face in a fanciful costume, here a turban.",
        "Who the girl was, no one knows to this day."
      ],
      "fact": "The pearl is an illusion: it consists of only a few brushstrokes of light paint. Studies have shown that even the hook by which it would have to hang from the ear is missing."
    },
    "milkmaid": {
      "text": [
        "A kitchen maid pours milk from a jug.",
        "Beside her lie bread and a basket."
      ],
      "fact": "At the bottom of the wall you see Delft tiles with little figures, typical of Dutch kitchens of the time."
    },
    "delft": {
      "text": [
        "From a bank we see Delft across the canal: the water, the brick walls, the towers, and a gap in the clouds that makes the town light up.",
        "It is one of the calmest town views in the history of art."
      ],
      "fact": "Vermeer himself came from Delft and remained faithful to the town all his life."
    }
  });
})();
