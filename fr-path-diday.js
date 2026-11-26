// v10.24 FR content for François Diday’s life journey, Part 1 (1802–1877). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Royal Collection": "Royal Collection",
  "Kunsthaus Zürich": "Kunsthaus de Zurich",
  "Musée des beaux-arts, La Chaux-de-Fonds": "Musée des beaux-arts, La Chaux-de-Fonds",
  "Privatsammlung": "Collection particulière"
});
  P.works = Object.assign(P.works || {}, {
  "fdnapoli": {
    "title": "Naples, le Château de l’Œuf et le Vésuve",
    "museum": "Collection particulière"
  },
  "fdbrienz": {
    "title": "Maison au bord du lac de Brienz avec bateau et canards",
    "museum": "Collection particulière"
  },
  "fdorage": {
    "title": "Orage sur le Léman",
    "museum": "Musée des beaux-arts, La Chaux-de-Fonds"
  },
  "fdrosenlaui": {
    "title": "Rosenlaui",
    "museum": "Collection particulière"
  },
  "fdalpsee": {
    "title": "Paysage alpestre au lac",
    "museum": "Collection particulière"
  },
  "fdevian": {
    "title": "Rive du Léman près d’Évian, lumière du matin",
    "museum": "Kunsthaus de Zurich"
  },
  "fdhandeck": {
    "title": "L’Aar à la Handeck",
    "museum": "Kunsthaus de Zurich"
  },
  "fdbrunnen": {
    "title": "Le lac des Quatre-Cantons près de Brunnen, avec Seelisberg et le Grütli",
    "museum": "Collection particulière"
  },
  "fdriviere": {
    "title": "Rivière, arbres, pont et chèvres",
    "museum": "Collection particulière"
  },
  "fdmuerren": {
    "title": "Vue de Mürren vers l’Ebnefluh",
    "museum": "Collection particulière"
  },
  "fdbouveret": {
    "title": "Le soir au Bouveret",
    "museum": "Collection particulière"
  },
  "fdaxen": {
    "title": "Le lac des Quatre-Cantons et l’Uri-Rotstock vus de l’Axenberg",
    "museum": "Collection particulière"
  },
  "fdmontblanc": {
    "title": "Le Mont-Blanc et l’Arve vus de Sallanches",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.diday = {
  "title": "Le parcours de vie de François Diday",
  "life": "1802–1877",
  "part": "Genève et les Alpes",
  "subtitle": "Lacs, cascades et sommets",
  "intro": "Voyage avec François Diday, le peintre genevois qui fit des Alpes un grand sujet de la peinture suisse : de Naples au lac de Brienz et au Léman, jusqu’à la Handeck, Mürren et le Mont-Blanc. De courtes étapes et des tableaux à colorier. Ce chemin le suit dans les montagnes.",
  "ending": [
    "François Diday meurt à Genève le 28 novembre 1877. Avec lui commence l’école genevoise de peinture alpestre, que poursuivent Calame et Zünd.",
    "Le chemin mène de Naples et du lac de Brienz jusqu’au mont Blanc, qu’il peint depuis Sallanches."
  ],
  "epilogue": "François Diday meurt à Genève le 28 novembre 1877. Avec lui commence l’école genevoise de peinture alpestre, que poursuivent Calame et Zünd. Le chemin mène de Naples et du lac de Brienz jusqu’au mont Blanc, qu’il peint depuis Sallanches."
};
  P.stations = Object.assign(P.stations || {}, {
  "fdjung": {
    "place": "Genève, Paris et l’Italie · Apprentissage",
    "when": "1802–1832",
    "mapLabel": "Genève",
    "intro": [
      "François Diday naît à Genève le 12 février 1802. Il étudie auprès de Wolfgang-Adam Töpffer, rejoint Antoine-Jean Gros à Paris en 1821 et voyage en Italie en 1824.",
      "De retour en Suisse, il découvre l’Oberland bernois."
    ]
  },
  "fdschule": {
    "place": "L’école genevoise",
    "when": "1839–1852",
    "mapLabel": "Oberland",
    "intro": [
      "Diday devient le premier grand peintre des Alpes à Genève. De jeunes peintres se forment dans son atelier, parmi eux Alexandre Calame.",
      "Il peint des orages, des vallées de montagne et des lacs calmes."
    ]
  },
  "fdwasser": {
    "place": "Lacs et gorges",
    "when": "1852–1855",
    "mapLabel": "Handeck",
    "intro": [
      "Dans les années 1850, Diday peint le Léman au matin, l’Aar dans sa gorge et le lac des Quatre-Cantons.",
      "Le jeune Robert Zünd s’est aussi formé auprès de lui."
    ]
  },
  "fdreif": {
    "place": "Années de maturité",
    "when": "1864–1874",
    "mapLabel": "Mürren",
    "intro": [
      "Diday peint désormais des paysages vastes et calmes, avec rivière, pâturage et sommets lointains.",
      "Il revient sur les lieux de ses premiers voyages."
    ]
  },
  "fdspaet": {
    "place": "Vers le Mont-Blanc",
    "when": "bis 1877",
    "mapLabel": "Mont-Blanc",
    "intro": [
      "À la fin se dresse le Mont-Blanc, la grande montagne face à Genève, avec ses torrents et ses cascades.",
      "Diday meurt à Genève le 28 novembre 1877."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "fdnapoli": {
    "text": [
      "Sur la baie de Naples se dresse le Château de l’Œuf, derrière fume le Vésuve. Le jeune Diday voyage en Italie en 1824.",
      "La lumière claire du Sud marque ses premiers tableaux."
    ],
    "fact": "1824. Collection particulière."
  },
  "fdbrienz": {
    "text": [
      "Une maison de bois se dresse au bord du lac de Brienz, un bateau est sur l’eau, des canards passent. Diday découvre l’Oberland bernois.",
      "Ce sera l’un de ses paysages les plus importants."
    ],
    "fact": "1832. Collection particulière."
  },
  "fdorage": {
    "text": [
      "De lourds nuages passent sur le Léman, les vagues frappent la rive. Diday peint la nature dans toute sa force.",
      "Le tableau appartient au Musée des beaux-arts de La Chaux-de-Fonds."
    ],
    "fact": "1839. Musée des beaux-arts, La Chaux-de-Fonds."
  },
  "fdrosenlaui": {
    "text": [
      "Dans la vallée de Rosenlaui, de sombres sapins se dressent devant les rochers clairs et la glace. Diday peint ce motif plusieurs fois.",
      "Son élève Alexandre Calame peindra lui aussi Rosenlaui."
    ],
    "fact": "1841. Collection particulière."
  },
  "fdalpsee": {
    "text": [
      "Un lac de montagne repose sous de hauts sommets, des arbres et des rochers sur la rive. Diday est désormais un peintre célèbre.",
      "Ses vues des Alpes sont exposées et achetées à Paris et à Genève."
    ],
    "fact": "1852. Collection particulière."
  },
  "fdevian": {
    "text": [
      "Le matin, le Léman est calme et clair, la rive près d’Évian encore fraîche. Diday connaît le lac depuis l’enfance.",
      "Le tableau appartient au Kunsthaus de Zurich."
    ],
    "fact": "1852. Kunsthaus de Zurich."
  },
  "fdhandeck": {
    "text": [
      "À la Handeck, la jeune Aar se jette dans une gorge rocheuse. L’écume et les sapins sombres remplissent le tableau.",
      "Diday parcourt souvent le chemin du Grimsel."
    ],
    "fact": "1854. Kunsthaus de Zurich."
  },
  "fdbrunnen": {
    "text": [
      "Depuis Brunnen, le regard traverse le lac des Quatre-Cantons jusqu’à Seelisberg et la prairie du Grütli. Au-dessus s’élève l’Uri-Rotstock.",
      "Le paysage de Suisse centrale attire de nombreux peintres genevois."
    ],
    "fact": "1855. Collection particulière."
  },
  "fdriviere": {
    "text": [
      "Une rivière coule sous un pont de bois, des chèvres broutent sur la berge sous de grands arbres. Le tableau est calme et vaste.",
      "Diday a plus de soixante ans et peint toujours d’une main sûre."
    ],
    "fact": "1864. Collection particulière."
  },
  "fdmuerren": {
    "text": [
      "De Mürren, on voit en face la neige et la glace de l’Ebnefluh. Devant s’étendent pâturages et sapins.",
      "Diday aime ces vues depuis une terrasse vers les sommets."
    ],
    "fact": "1867. Collection particulière."
  },
  "fdbouveret": {
    "text": [
      "Au bout du Léman, près du Bouveret, le soir tombe. L’eau brille, les montagnes deviennent bleues.",
      "Même âgé, Diday peint le lac de son pays."
    ],
    "fact": "1871. Collection particulière."
  },
  "fdaxen": {
    "text": [
      "De l’Axenberg, le regard plonge sur le lac d’Uri et va jusqu’à l’Uri-Rotstock. L’eau est verte et claire.",
      "Près de vingt ans après Brunnen, Diday revient à ce lac."
    ],
    "fact": "vers 1874. Collection particulière."
  },
  "fdmontblanc": {
    "text": [
      "Le Mont-Blanc se dresse, blanc, au-dessus de la vallée de l’Arve. De Sallanches, il paraît proche et immense.",
      "C’est l’un des grands sommets que Diday a toujours sous les yeux depuis Genève."
    ],
    "fact": "avant 1877. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
