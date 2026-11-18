// v10.24 FR content for Marie Egner’s life journey, Part 1 (1850–1940). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Belvedere, Wien": "Belvédère, Vienne",
  "Privatsammlung": "Collection particulière"
});
  P.works = Object.assign(P.works || {}, {
  "mgnauders": {
    "title": "Motif de Nauders",
    "museum": "Collection particulière"
  },
  "mgwindbruch": {
    "title": "Chablis",
    "museum": "Collection particulière"
  },
  "mgdonau": {
    "title": "Dans les prairies du Danube",
    "museum": "Collection particulière"
  },
  "mgheu": {
    "title": "Meules de foin",
    "museum": "Collection particulière"
  },
  "mgatelier": {
    "title": "Vue de l’atelier de la Klagbaumgasse",
    "museum": "Collection particulière"
  },
  "mgcapri": {
    "title": "Cour de couvent à Capri",
    "museum": "Collection particulière"
  },
  "mgarbe": {
    "title": "Arbe (Rab)",
    "museum": "Collection particulière"
  },
  "mgazaleen": {
    "title": "Azalées à la fenêtre",
    "museum": "Collection particulière"
  },
  "mgtorre": {
    "title": "Torre del Greco",
    "museum": "Collection particulière"
  },
  "mgmoedling": {
    "title": "Pont de briques avec une statue à Mödling",
    "museum": "Collection particulière"
  },
  "mgbretagne": {
    "title": "Soir en Bretagne",
    "museum": "Collection particulière"
  },
  "mgpergola": {
    "title": "Sous la pergola",
    "museum": "Belvédère, Vienne"
  },
  "mgrosen": {
    "title": "Roses en fleurs",
    "museum": "Collection particulière"
  },
  "mgsonnen": {
    "title": "Tournesols et cabane au Treffenboden",
    "museum": "Collection particulière"
  },
  "mggastein": {
    "title": "Vieux moulin à Gastein",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.egner = {
  "title": "Le parcours de vie de Marie Egner",
  "life": "1850–1940",
  "part": "Partie 1 · Jardins, côtes et lumière",
  "subtitle": "De Nauders à Gastein",
  "intro": "Voyage avec Marie Egner, peintre autrichienne de paysages et de fleurs : de ses premières études au Tyrol aux prairies du Danube et à son atelier de Vienne, jusqu’aux côtes d’Italie et de Dalmatie et aux jardins de sa longue vie. De courtes étapes et des tableaux à colorier. Cette première partie suit sa lumière.",
  "ending": [
    "Marie Egner meurt à Maria Anzbach, en Basse-Autriche, le 31 mars 1940, à l’âge de 89 ans. Pendant près de soixante ans, elle a peint dehors, face à la nature.",
    "Le chemin peut encore s’allonger. D’autres jardins et vues de voyage pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "Le 31 mars 1940, Egner meurt à Maria Anzbach. Une partie ultérieure pourra ajouter d’autres jardins."
};
  P.stations = Object.assign(P.stations || {}, {
  "mgjung": {
    "place": "Radkersburg, Graz et le Tyrol · Apprentissage",
    "when": "1850–1881",
    "mapLabel": "Nauders",
    "intro": [
      "Marie Egner naît à Radkersburg, en Styrie, le 25 août 1850. Elle se forme à Graz et à Düsseldorf.",
      "Au Tyrol, elle peint ses premiers villages de montagne."
    ]
  },
  "mgschindler": {
    "place": "Chez Schindler à Vienne",
    "when": "1882–1890",
    "mapLabel": "Vienne",
    "intro": [
      "À partir de 1882, Egner étudie auprès d’Emil Jakob Schindler. Elle peint dehors avec lui, dans les bois, les prairies et les champs.",
      "Plus tard, elle a son propre atelier à Vienne."
    ]
  },
  "mgsueden": {
    "place": "Voyages vers le Sud",
    "when": "1890–1898",
    "mapLabel": "Sud",
    "intro": [
      "Egner voyage à Capri, sur la baie de Naples et sur l’Adriatique. La lumière du Sud éclaircit ses couleurs.",
      "Chez elle, à Vienne, elle peint des fleurs à la fenêtre."
    ]
  },
  "mggarten": {
    "place": "Jardins et chemins",
    "when": "1899–1912",
    "mapLabel": "Jardins",
    "intro": [
      "Vers 1900, Egner est une peintre connue et expose à Vienne. Elle peint des ponts, des pergolas et des roses.",
      "Un voyage en Bretagne lui apporte aussi de nouveaux motifs."
    ]
  },
  "mgspaet": {
    "place": "Dernières années en montagne",
    "when": "1914–1940",
    "mapLabel": "Gastein",
    "intro": [
      "Même âgée, Egner peint en plein air, en montagne et dans la vallée de Gastein.",
      "Elle meurt à Maria Anzbach, en Basse-Autriche, le 31 mars 1940."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mgnauders": {
    "text": [
      "Dans le village tyrolien de Nauders, Egner peint maisons, prés et pentes dans la lumière d’été. Elle a trente ans et s’est formée à Graz et à Düsseldorf.",
      "Elle cherche encore sa propre voie."
    ],
    "fact": "1881. Collection particulière."
  },
  "mgwindbruch": {
    "text": [
      "Des troncs abattus gisent dans la forêt, entre eux pousse déjà une verdure nouvelle. Egner peint la nature telle qu’elle est.",
      "Depuis 1882, elle étudie auprès d’Emil Jakob Schindler."
    ],
    "fact": "vers 1884. Collection particulière."
  },
  "mgdonau": {
    "text": [
      "L’eau, les saules et les roseaux forment le monde calme des prairies du Danube. La lumière est argentée et douce.",
      "Comme son maître Schindler, Egner recherche l’atmosphère paisible."
    ],
    "fact": "vers 1885. Collection particulière."
  },
  "mgheu": {
    "text": [
      "Des meules se dressent dans le pré fauché, le ciel est haut et clair. Des formes simples, beaucoup d’air.",
      "Egner peint dehors, directement devant le motif."
    ],
    "fact": "vers 1885. Collection particulière."
  },
  "mgatelier": {
    "text": [
      "De la fenêtre de son atelier viennois, Egner voit des toits, des cours et des arbres. Le tableau est un regard intime sur sa ville.",
      "Plus tard, elle y enseigne elle-même à des femmes peintres."
    ],
    "fact": "vers 1890. Collection particulière."
  },
  "mgcapri": {
    "text": [
      "Dans une cour de couvent à Capri, une lumière vive tombe sur les murs blancs et les plantes. Egner voyage vers le Sud.",
      "Ses couleurs deviennent plus chaudes et plus claires."
    ],
    "fact": "1890. Collection particulière."
  },
  "mgarbe": {
    "text": [
      "L’île d’Arbe, aujourd’hui Rab, se trouve dans l’Adriatique au large de la côte dalmate. Egner peint la ville, la mer et le ciel.",
      "La Méditerranée reste le but de nombreux voyages."
    ],
    "fact": "1890. Collection particulière."
  },
  "mgazaleen": {
    "text": [
      "Des azalées en fleurs sont posées à la fenêtre, la lumière du jour traverse les fleurs. Les fleurs deviennent un grand sujet.",
      "Egner les peint avec le même soin que les paysages."
    ],
    "fact": "vers 1895. Collection particulière."
  },
  "mgtorre": {
    "text": [
      "Torre del Greco se trouve sur la baie de Naples, au pied du Vésuve. Maisons et bateaux baignent dans la lumière claire de midi.",
      "Egner voyage plusieurs fois en Italie."
    ],
    "fact": "vers 1898. Collection particulière."
  },
  "mgmoedling": {
    "text": [
      "Un petit pont de briques franchit un ruisseau à Mödling, une statue de pierre se dresse au bord. Les arbres projettent leur ombre.",
      "Egner trouve souvent ses motifs près de Vienne."
    ],
    "fact": "1899. Collection particulière."
  },
  "mgbretagne": {
    "text": [
      "En Bretagne, le soir descend sur la terre et l’eau. Les couleurs deviennent profondes et calmes.",
      "À près de soixante ans, Egner voyage encore loin."
    ],
    "fact": "1907. Collection particulière."
  },
  "mgpergola": {
    "text": [
      "Sous une pergola, la lumière du soleil traverse feuilles et fleurs et tombe sur le chemin. L’espace est plein de taches vertes et dorées.",
      "Le tableau appartient au Belvédère de Vienne."
    ],
    "fact": "1910. Belvédère, Vienne."
  },
  "mgrosen": {
    "text": [
      "Les roses fleurissent dans toutes les nuances du blanc au rouge. Egner les peint avec fraîcheur et légèreté.",
      "Avec l’âge, les jardins deviennent son sujet préféré."
    ],
    "fact": "1912. Collection particulière."
  },
  "mgsonnen": {
    "text": [
      "De grands tournesols se dressent devant une cabane de bois, derrière s’étendent des pentes vertes. Le jaune et le brun brillent dans la lumière d’été.",
      "Egner a maintenant plus de soixante ans et peint avec des couleurs vives."
    ],
    "fact": "1914. Collection particulière."
  },
  "mggastein": {
    "text": [
      "Un vieux moulin se dresse dans la vallée de Gastein entre arbres et montagnes. Egner peint ce tableau à quatre-vingt-trois ans.",
      "Jusqu’à un âge très avancé, elle reste fidèle au paysage."
    ],
    "fact": "1933. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
