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
  "life": "c. 1525–1569",
  "part": "A short path · Brabant",
  "subtitle": "Tower, harvest and snow",
  "intro": "In Brabant, Bruegel the Elder sees work, winter and the old stories. Three pictures lead from the Tower of Babel via the harvest to the hunters in the snow.",
  "ending": [
    "Bruegel dies in Brussels in 1569. Two of the three pictures on this path, the Tower and the Hunters in the Snow, hang today in the Kunsthistorisches Museum in Vienna."
  ],
  "epilogue": "Bruegel dies in Brussels in 1569. Two of the three pictures on this path, the Tower and the Hunters in the Snow, hang today in the Kunsthistorisches Museum in Vienna."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "babel": {
      "text": [
        "According to the Bible the people wanted to build a tower up to heaven.",
        "Bruegel shows the huge building site with cranes, scaffolding, workers and a whole city around it."
      ],
      "fact": "The model for the many arches was probably the Colosseum, which he had seen on his journey to Rome."
    },
    "harvesters": {
      "text": [
        "It is high summer: in front the reapers rest while eating, behind the mowing goes on, and the fields pass into a wide, golden landscape.",
        "The picture belongs to Bruegel’s month pictures, here high summer."
      ],
      "fact": "Five of the original six season pictures survive. “Hunters in the Snow” is the winter to this."
    },
    "hunters": {
      "text": [
        "Three hunters return to the village with tired dogs.",
        "Below, on the frozen ponds, people are skating, and in the distance stand sharp, wintry mountains."
      ],
      "fact": "Despite the cold the picture is full of life: a fire, birds, children on the ice, an inn sign with a stag."
    }
  });
})();
