// v10.21 FR content for Giovanni Segantini’s life journey, Part 1 (1858–1899). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Bündner Kunstmuseum, Chur": "Bündner Kunstmuseum, Coire",
  "Nationalgalerie, Prag": "Galerie nationale, Prague",
  "Privatsammlung": "Collection particulière",
  "Museo del Paesaggio, Novara": "Museo del Paesaggio, Novare",
  "Segantini Museum, St. Moritz": "Musée Segantini, Saint-Moritz",
  "Kunsthaus Zürich": "Kunsthaus de Zurich",
  "Neue Pinakothek, München": "Neue Pinakothek, Munich",
  "Galleria Civica G. Segantini, Arco": "Galleria Civica G. Segantini, Arco"
});
  P.works = Object.assign(P.works || {}, {
  "sgself80": {
    "title": "Autoportrait à l’âge de vingt ans",
    "museum": "Collection particulière"
  },
  "sgbrianza": {
    "title": "Paysage de la Brianza",
    "museum": "Galleria Civica G. Segantini, Arco"
  },
  "avemaria": {
    "title": "Ave Maria à la traversée",
    "museum": "Musée Segantini, Saint-Moritz"
  },
  "sgstanga": {
    "title": "Alla stanga · Soir à la pâture",
    "museum": "Galerie nationale, Prague"
  },
  "sgmadri": {
    "title": "Les deux mères",
    "museum": "Bündner Kunstmuseum, Coire"
  },
  "sgcalza": {
    "title": "Jeune fille tricotant",
    "museum": "Kunsthaus de Zurich"
  },
  "sgpfluegen": {
    "title": "Le labour",
    "museum": "Neue Pinakothek, Munich"
  },
  "sgsavognin": {
    "title": "Savognin en hiver",
    "museum": "Museo del Paesaggio, Novare"
  },
  "segantini": {
    "title": "Midi dans les Alpes",
    "museum": "Musée Segantini, Saint-Moritz"
  },
  "sgpasture": {
    "title": "Pâturages alpins",
    "museum": "Kunsthaus de Zurich"
  },
  "sgmessa": {
    "title": "À la dernière messe",
    "museum": "Galleria Civica G. Segantini, Arco"
  },
  "sgcavalli": {
    "title": "Chevaux au gué",
    "museum": "Collection particulière"
  },
  "sgnature": {
    "title": "La Nature",
    "museum": "Musée Segantini, Saint-Moritz"
  }
});
  P.paths = P.paths || {};
  P.paths.segantini = {
  "title": "Le parcours de vie de Giovanni Segantini",
  "life": "1858–1899",
  "part": "Partie 1 · D’Arco à Maloja",
  "subtitle": "Jeunesse, la Brianza, Savognin et les hautes Alpes",
  "intro": "Voyage avec Giovanni Segantini, le peintre de la lumière alpine : d’une jeunesse difficile à Arco et à Milan, en passant par les années dans la Brianza et la découverte des Grisons, jusqu’aux grands tableaux divisionnistes de Savognin et de Maloja. De courtes étapes et des tableaux à colorier. Cette première partie suit le chemin jusqu’au triptyque alpin inachevé.",
  "ending": [
    "En septembre 1899, Segantini succombe à une maladie sur le Schafberg, au-dessus de Pontresina. Il a quarante et un ans et est inhumé à Maloja.",
    "Le chemin peut encore s’allonger. Dessins, autres tableaux alpins et l’histoire de son atelier au col de la Maloja pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "En septembre 1899, Segantini meurt sur le Schafberg, à quarante et un ans. Une partie ultérieure pourra ajouter des dessins et d’autres tableaux alpins."
};
  P.stations = Object.assign(P.stations || {}, {
  "sgarco": {
    "place": "Arco et Milan · Jeunesse",
    "when": "1858–1881",
    "mapLabel": "Arco",
    "intro": [
      "Giovanni Segantini naît le 15 janvier 1858 à Arco, alors dans la monarchie autrichienne, aujourd’hui dans le Trentin. Sa mère meurt tôt ; le père emmène l’enfant à Milan et disparaît de sa vie.",
      "Sans famille stable, Segantini est placé à l’institut Marchiondi. Plus tard, il dessine et peint à l’Accademia di Brera. Tôt, il cherche un appui dans le travail."
    ]
  },
  "sgbrianza": {
    "place": "Dans la Brianza",
    "when": "1881–1886",
    "mapLabel": "Brianza",
    "intro": [
      "Avec Luigia Bugatti, dite Bice, Segantini vit dans des villages de la Brianza, au nord de Milan. Les collines, les lacs et les fermes deviennent ses premiers paysages à lui.",
      "Ils ne peuvent pas se marier à l’état civil, parce qu’il manque à Segantini les papiers. Bice reste pourtant sa compagne et le centre de la famille."
    ]
  },
  "sgsavognin": {
    "place": "Savognin · Soir et travail",
    "when": "1886–1890",
    "mapLabel": "Savognin",
    "intro": [
      "En 1886, la famille s’installe à Savognin, dans les Grisons. La hauteur, la lumière et le travail paysan transforment la peinture de Segantini.",
      "Il développe le divisionnisme : des couleurs pures en fins traits juxtaposés, qui se mettent à luire à distance."
    ]
  },
  "sgmittag": {
    "place": "Midi dans les Alpes",
    "when": "1891–1894",
    "mapLabel": "Alpes",
    "intro": [
      "À Savognin naissent les célèbres tableaux des hauts pâturages, parmi eux « Midi dans les Alpes ». Segantini peint souvent en plein air, même par le froid.",
      "Sa renommée atteint désormais Paris et les Sécessions européennes. En 1894, la famille repart, à la suite de la lumière, vers Maloja."
    ]
  },
  "sgmaloja": {
    "place": "Maloja · La Nature",
    "when": "1894–1899",
    "mapLabel": "Maloja",
    "intro": [
      "Au col de la Maloja, Segantini installe son atelier. Il prévoit un grand triptyque alpin pour l’Exposition universelle de Paris.",
      "« La Nature » reste le cœur de ce projet. En septembre 1899, sur le Schafberg, le travail s’interrompt."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sgself80": {
    "text": [
      "L’autoportrait montre Segantini vers l’âge de vingt ans, ferme, presque sévère, le regard sombre. Les années les plus dures à Milan sont derrière lui.",
      "Le tableau naît vers 1879-1880, après le temps passé à l’Accademia di Brera. Déjà ici, il paraît plus âgé que ses années."
    ],
    "fact": "1879–1880. Collection particulière."
  },
  "sgbrianza": {
    "text": [
      "Collines, chemins et fermes de la Brianza dans une lumière calme. C’est l’un des paysages de jeunesse où Segantini observe de près la campagne lombarde.",
      "Le trait est encore plus souple, moins morcelé que plus tard dans les montagnes. La Brianza reste son école avant les Alpes."
    ],
    "fact": "1884–1885. Galleria Civica G. Segantini, Arco."
  },
  "avemaria": {
    "text": [
      "Un berger et une femme glissent en barque sur un lac calme, le mouton à la proue. En cet instant, ils joignent les mains pour l’Ave Maria.",
      "Segantini a peint le motif deux fois. Cette version de 1886, déjà réalisée dans les montagnes, lui valut une médaille d’or à Paris."
    ],
    "fact": "1886. Musée Segantini, Saint-Moritz."
  },
  "sgstanga": {
    "text": [
      "Les vaches sont attachées à la barre dans le pâturage, tandis que le soir descend sur le pays. Cette version, conservée à la Galerie nationale de Prague, appartient aux premières années à Savognin.",
      "Les bêtes sont lourdes et proches, le ciel déjà frais. Segantini trouve ici la grandeur calme qui distingue ses tableaux alpins."
    ],
    "fact": "1886–1888. Galerie nationale, Prague."
  },
  "sgmadri": {
    "text": [
      "Une mère porte son enfant sur un chemin de montagne ; une brebis et un agneau la suivent. Derrière, les cimes sont dans la lumière.",
      "Segantini commence le tableau en 1899 à Maloja ; après sa mort, Giovanni Giacometti l’achève. Il est conservé au Bündner Kunstmuseum de Coire."
    ],
    "fact": "1899–1900. Bündner Kunstmuseum, Coire."
  },
  "sgcalza": {
    "text": [
      "Une jeune fille est assise et tricote, absorbée par le travail simple. Segantini observe le geste avec précision, sans en faire une anecdote.",
      "Le tableau appartient au Kunsthaus de Zurich. Il montre combien les gens de son village lui étaient proches."
    ],
    "fact": "1888. Kunsthaus de Zurich."
  },
  "sgpfluegen": {
    "text": [
      "Un paysan laboure le versant, les bœufs tirent, la terre s’ouvre. Le tableau compte parmi les œuvres majeures des années de Savognin.",
      "Le travail est à la fois pénible et solennel. Segantini ne le peint pas en genre, mais comme une part de l’ordre alpin."
    ],
    "fact": "1890. Neue Pinakothek, Munich."
  },
  "sgsavognin": {
    "text": [
      "Savognin en hiver : le village est sous la neige, l’air est net et froid. Segantini retient le silence de la saison, non un motif pittoresque.",
      "Dans de tels tableaux, la hauteur elle-même devient le sujet. La lumière vient d’en haut et demeure longtemps dans le blanc."
    ],
    "fact": "vers 1890. Museo del Paesaggio, Novare."
  },
  "segantini": {
    "text": [
      "Une bergère protège ses yeux du soleil de midi, autour d’elle des moutons et des prés de montagne. La lumière tombe à la verticale, les ombres sont courtes.",
      "Segantini a peint le tableau en 1891 à Savognin. Les traits de couleur pure rendent la hauteur particulièrement lumineuse."
    ],
    "fact": "1891. Musée Segantini, Saint-Moritz."
  },
  "sgpasture": {
    "text": [
      "Large herbe alpine, des bêtes, un ciel haut. Le tableau rassemble la largeur calme des hauteurs grisonnes.",
      "Il est conservé au Kunsthaus de Zurich et marque le passage des années de Savognin à Maloja."
    ],
    "fact": "vers 1893. Kunsthaus de Zurich."
  },
  "sgmessa": {
    "text": [
      "Des gens se rendent à la messe, dans un mouvement calme, presque solennel. Le motif appartient encore au temps lombard et aux premières années grisonnes.",
      "Segantini relie le quotidien du village à une dévotion silencieuse, sans faire du tableau une scène."
    ],
    "fact": "1886–1887. Galleria Civica G. Segantini, Arco."
  },
  "sgcavalli": {
    "text": [
      "Des chevaux traversent un passage peu profond, la lumière posée sur les flancs et sur l’eau. C’est un motif de jeunesse, observé avec précision.",
      "Encore exercé dans la plaine, Segantini portera plus tard la même attention aux animaux des Alpes."
    ],
    "fact": "vers 1882. Collection particulière."
  },
  "sgnature": {
    "text": [
      "« La Nature » est le panneau central du triptyque alpin prévu : une bergère dans un haut paysage ouvert, sous un ciel ample.",
      "Segantini y travaille dans ses dernières années. Le tableau reste le témoignage le plus mûr de sa peinture alpine."
    ],
    "fact": "1897–1899. Musée Segantini, Saint-Moritz."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
