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
  "life": "vers 1525–1569",
  "part": "Un court chemin · Brabant",
  "subtitle": "Tour, moisson et neige",
  "intro": "Dans le Brabant, Bruegel l’Ancien voit le travail, l’hiver et les vieux récits. Trois tableaux mènent de la tour de Babel à la moisson, puis aux chasseurs dans la neige.",
  "ending": [
    "Bruegel meurt à Bruxelles en 1569. Deux des trois tableaux de ce chemin, la Tour et les Chasseurs dans la neige, sont aujourd’hui au Kunsthistorisches Museum de Vienne."
  ],
  "epilogue": "Bruegel meurt à Bruxelles en 1569. Deux des trois tableaux de ce chemin, la Tour et les Chasseurs dans la neige, sont aujourd’hui au Kunsthistorisches Museum de Vienne."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "babel": {
      "text": [
        "Selon la Bible, les hommes voulaient bâtir une tour qui monte jusqu’au ciel.",
        "Bruegel montre l’immense chantier avec des grues, des échafaudages, des ouvriers et toute une ville autour."
      ],
      "fact": "Pour les nombreuses arcades, il prit probablement pour modèle le Colisée, qu’il avait vu lors de son voyage à Rome."
    },
    "harvesters": {
      "text": [
        "C’est le plein été : devant, les moissonneurs se reposent en mangeant ; derrière, on continue de faucher, et les champs passent dans un vaste paysage doré.",
        "Le tableau appartient aux peintures des mois de Bruegel, ici le plein été."
      ],
      "fact": "Cinq des six tableaux originaux des saisons sont conservés. « Chasseurs dans la neige » en est l’hiver."
    },
    "hunters": {
      "text": [
        "Trois chasseurs rentrent au village avec des chiens fatigués.",
        "En bas, sur les étangs gelés, on patine, et au loin se dressent des montagnes aiguës et hivernales."
      ],
      "fact": "Malgré le froid, le tableau est plein de vie : un feu, des oiseaux, des enfants sur la glace, une enseigne d’auberge avec un cerf."
    }
  });
})();
