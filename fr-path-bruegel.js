// v10.35 FR short Lebensweg for Pieter Bruegel der Ältere.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Kunsthistorisches Museum, Wien": "Kunsthistorisches Museum, Vienne"
});
  P.works = Object.assign(P.works || {}, {
  "babel": {
    "title": "La Tour de Babel",
    "museum": "Kunsthistorisches Museum, Vienne"
  },
  "harvesters": {
    "title": "Les Moissonneurs",
    "museum": "The Metropolitan Museum of Art, New York"
  },
  "hunters": {
    "title": "Chasseurs dans la neige",
    "museum": "Kunsthistorisches Museum, Vienne"
  }
});
  P.paths = P.paths || {};
  P.paths.bruegel = {
  "title": "Le parcours de vie de Pieter Bruegel",
  "life": "um 1525–1569",
  "part": "Un court chemin · Brabant",
  "subtitle": "Tour, moisson et neige",
  "intro": "Dans le Brabant, Bruegel l’Ancien voit le travail, l’hiver et les vieux récits. Trois tableaux mènent de la tour de Babel à la moisson, puis aux chasseurs dans la neige.",
  "ending": [
    "Bruegel meurt à Bruxelles en 1569. Une partie ultérieure pourra ajouter d’autres saisons et proverbes."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres tableaux."
};
  P.stations = Object.assign(P.stations || {}, {
  "bruegel1": {
    "place": "Anvers et Bruxelles",
    "when": null,
    "mapLabel": "Anvers et Bruxelles",
    "intro": [
      "Dans le Brabant, Bruegel l’Ancien voit le travail, l’hiver et les vieux récits. Trois tableaux mènent de la tour de Babel à la moisson, puis aux chasseurs dans la neige."
    ]
  }
});
})();
