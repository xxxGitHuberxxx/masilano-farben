// v10.23 FR content for Tina Blau’s life journey, Part 1 (1845–1916). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collection particulière",
  "Standort ohne Angabe": "Lieu non indiqué",
  "Belvedere, Wien": "Belvédère, Vienne"
});
  P.works = Object.assign(P.works || {}, {
  "tbbauernhaus": {
    "title": "Ferme",
    "museum": "Collection particulière"
  },
  "tbhaslau": {
    "title": "Vue de Haslau",
    "museum": "Lieu non indiqué"
  },
  "tbamsterdam": {
    "title": "Canal à Amsterdam",
    "museum": "Lieu non indiqué"
  },
  "tbheustadl": {
    "title": "Le Heustadlwasser au Prater",
    "museum": "Lieu non indiqué"
  },
  "tbtitus": {
    "title": "Caprice romain avec l’arc de Titus",
    "museum": "Collection particulière"
  },
  "tbfruehling": {
    "title": "Printemps au Prater",
    "museum": "Belvédère, Vienne"
  },
  "tbtuileries": {
    "title": "Aux Tuileries – Jour ensoleillé",
    "museum": "Belvédère, Vienne"
  },
  "tbpalatin": {
    "title": "Fin d’après-midi au Palatin",
    "museum": "Belvédère, Vienne"
  },
  "tbrotunde": {
    "title": "Au Prater près de la Rotonde",
    "museum": "Belvédère, Vienne"
  },
  "tbmalcesine": {
    "title": "Malcesine",
    "museum": "Collection particulière"
  },
  "tbschladming": {
    "title": "Vue de Schladming",
    "museum": "Collection particulière"
  },
  "tbkrieau": {
    "title": "La Krieau au Prater",
    "museum": "Belvédère, Vienne"
  },
  "tbatelier": {
    "title": "L’Atelier au Prater",
    "museum": "Lieu non indiqué"
  },
  "tbfraneker": {
    "title": "Canal à Franeker",
    "museum": "Collection particulière"
  },
  "tbbirken": {
    "title": "Bouleaux près de la Rotonde",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.blau = {
  "title": "Le parcours de vie de Tina Blau",
  "life": "1845–1916",
  "part": "Partie 1 · Printemps au Prater",
  "subtitle": "Vienne, la Hollande, l’Italie et la lumière en plein air",
  "intro": "Voyage avec Tina Blau, la paysagiste viennoise qui peignait en plein air quand c’était à peine possible pour une femme : des premières fermes à la Hollande et à Rome, jusqu’au printemps au Prater et à son atelier dans la Rotonde. De courtes étapes et des tableaux à colorier. Cette première partie la suit à travers la lumière.",
  "ending": [
    "Tina Blau meurt à Vienne le 31 octobre 1916. Elle a apporté la claire lumière du plein air à la peinture de paysage viennoise.",
    "Le chemin peut encore s’allonger. D’autres voyages, jardins et vues de villes pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "Le 31 octobre 1916, Tina Blau meurt à Vienne. Une partie ultérieure pourra ajouter d’autres voyages et jardins."
};
  P.stations = Object.assign(P.stations || {}, {
  "tbwien": {
    "place": "Vienne · Apprentissage",
    "when": "1845–1873",
    "mapLabel": "Vienne",
    "intro": [
      "Tina Blau naît à Vienne le 15 novembre 1845. Son père soutient son désir de devenir peintre.",
      "Elle étudie auprès d’August Schaeffer et à Munich auprès de Wilhelm Lindenschmit."
    ]
  },
  "tbreisen": {
    "place": "La Hollande et Rome",
    "when": "1875–1879",
    "mapLabel": "Voyages",
    "intro": [
      "Dans les années 1870, Tina Blau voyage en Hollande et en Italie. Elle peint des canaux, des ruines et des jardins.",
      "En route, son regard pour la lumière et l’air s’aiguise."
    ]
  },
  "tbprater": {
    "place": "Le Prater",
    "when": "1877–1885",
    "mapLabel": "Prater",
    "intro": [
      "Le Prater de Vienne devient son grand sujet. En 1882, elle peint « Printemps au Prater ».",
      "En 1883, elle épouse le peintre Heinrich Lang et vit un temps à Munich."
    ]
  },
  "tbsueden": {
    "place": "Paris, Rome et le Sud",
    "when": "1883–1894",
    "mapLabel": "Sud",
    "intro": [
      "À Paris et à Rome, elle peint des jardins et des sites antiques, puis le lac de Garde.",
      "Ses couleurs deviennent plus chaudes et plus claires."
    ]
  },
  "tbspaet": {
    "place": "Atelier et dernières années",
    "when": "1897–1916",
    "mapLabel": "Rotonde",
    "intro": [
      "En 1897, elle cofonde à Vienne une école d’art pour femmes et jeunes filles et y enseigne.",
      "Elle continue de peindre au Prater, dans les Alpes et en Hollande jusqu’à sa mort en 1916."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tbbauernhaus": {
    "text": [
      "Une simple ferme sous les arbres, peinte en couleurs chaudes et calmes. Tina Blau a vingt-trois ans.",
      "Elle étudie auprès d’August Schaeffer et peint tôt d’après nature."
    ],
    "fact": "1868. Collection particulière."
  },
  "tbhaslau": {
    "text": [
      "De vastes champs et un grand ciel au-dessus de Haslau, sur le Danube. La terre est plate, la lumière changeante.",
      "Ces années-là, elle peint souvent avec Emil Jakob Schindler."
    ],
    "fact": "1872. Lieu non indiqué."
  },
  "tbamsterdam": {
    "text": [
      "Les maisons se reflètent dans un canal d’Amsterdam, des bateaux sont amarrés à la rive. La Hollande devient l’une de ses destinations préférées.",
      "La lumière humide et argentée des Pays-Bas l’attire sans cesse."
    ],
    "fact": "1875. Lieu non indiqué."
  },
  "tbheustadl": {
    "text": [
      "Une eau calme au Prater, entourée d’arbres et de prés. Le parc viennois devient son motif le plus important.",
      "Elle le peint en toute saison et à toute heure."
    ],
    "fact": "1877. Lieu non indiqué."
  },
  "tbtitus": {
    "text": [
      "L’arc de Titus à Rome se dresse dans une chaude lumière du Sud. Tina Blau voyage plusieurs fois en Italie.",
      "Monuments antiques et jardins deviennent les motifs de ses voyages."
    ],
    "fact": "1879. Collection particulière."
  },
  "tbfruehling": {
    "text": [
      "Verdure nouvelle, lumière claire et promeneurs au Prater : le grand tableau de 1882 est son œuvre la plus connue.",
      "À Vienne, il est d’abord critiqué ; au Salon de Paris de 1883, il reçoit une mention honorable."
    ],
    "fact": "1882. Belvédère, Vienne."
  },
  "tbtuileries": {
    "text": [
      "Au jardin des Tuileries à Paris, le soleil tombe sur les allées et les arbres. En 1883, Tina Blau est à Paris.",
      "Elle peint le jardin par un jour gris et par un jour ensoleillé."
    ],
    "fact": "1883. Belvédère, Vienne."
  },
  "tbpalatin": {
    "text": [
      "Sur le Palatin, à Rome, repose la chaude lumière de la fin d’après-midi. Ruines et arbres se tiennent calmes.",
      "Le voyage à Rome apporte de nouvelles couleurs à sa peinture."
    ],
    "fact": "1885. Belvédère, Vienne."
  },
  "tbrotunde": {
    "text": [
      "Derrière les arbres du Prater s’élève la Rotonde, le bâtiment de l’Exposition universelle de 1873.",
      "Quelques années plus tard, Tina Blau y installe son atelier."
    ],
    "fact": "1885. Belvédère, Vienne."
  },
  "tbmalcesine": {
    "text": [
      "La petite ville de Malcesine se trouve au bord du lac de Garde, avec son château et ses maisons claires. L’eau brille dans la lumière.",
      "Le Sud reste pour elle un lieu de lumière."
    ],
    "fact": "1894. Collection particulière."
  },
  "tbschladming": {
    "text": [
      "Maisons et montagnes à Schladming, en Styrie. Tina Blau peint aussi le paysage alpin de l’Autriche.",
      "Sa touche est désormais libre et sûre."
    ],
    "fact": "1902. Collection particulière."
  },
  "tbkrieau": {
    "text": [
      "La Krieau est une partie du Prater avec de vieux arbres et des prés ouverts. Tina Blau en connaît chaque recoin.",
      "Même après vingt ans, le Prater reste son sujet."
    ],
    "fact": "1902. Belvédère, Vienne."
  },
  "tbatelier": {
    "text": [
      "Un regard dans l’atelier de Tina Blau au Prater, avec des tableaux, des meubles et une lumière claire.",
      "Elle y travaille pendant de longues années, au milieu de son motif préféré."
    ],
    "fact": "1907. Lieu non indiqué."
  },
  "tbfraneker": {
    "text": [
      "Un canal dans la ville frisonne de Franeker, maisons et arbres se reflètent dans l’eau.",
      "À plus de soixante ans, Tina Blau voyage encore une fois en Hollande."
    ],
    "fact": "1908. Collection particulière."
  },
  "tbbirken": {
    "text": [
      "Des bouleaux clairs se dressent au Prater près de la Rotonde. Le tableau compte parmi ses œuvres tardives.",
      "Deux ans plus tard, Tina Blau meurt à Vienne."
    ],
    "fact": "1914. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
