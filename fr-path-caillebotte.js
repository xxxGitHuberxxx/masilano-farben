// v10.43 FR content for Gustave Caillebotte’s life journey (1848–1894). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "cbrainy": {
    "title": "Rue de Paris, temps de pluie",
    "museum": "Art Institute of Chicago"
  },
  "cbskiffs": {
    "title": "Périssoires",
    "museum": "National Gallery of Art, Washington"
  },
  "cbcourtier": {
    "title": "Portrait d’homme",
    "museum": "Musée d’art de Cleveland"
  },
  "cbtrouville": {
    "title": "Villas à Trouville",
    "museum": "Musée d’art de Cleveland"
  },
  "cblamy": {
    "title": "Étude d’un homme les mains dans les poches",
    "museum": "Musée d’art de Cleveland"
  },
  "cbchrysanth": {
    "title": "Chrysanthèmes dans le jardin du Petit-Gennevilliers",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cbdahlias": {
    "title": "Dahlias, jardin du Petit-Gennevilliers",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.caillebotte = {
  "title": "Le parcours de vie de Gustave Caillebotte",
  "part": "Paris, Yerres, Trouville et Petit-Gennevilliers",
  "subtitle": "La ville, l’eau et le jardin",
  "intro": "Voyage à travers la vie de Gustave Caillebotte : des nouvelles rues de Paris aux barques de l’Yerres, à la côte normande et à son jardin au bord de la Seine. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Gustave Caillebotte meurt en 1894, un an après ses tableaux du jardin de Petit-Gennevilliers.",
    "Il fut peintre, organisateur des expositions impressionnistes, navigateur et jardinier."
  ],
  "epilogue": "Gustave Caillebotte meurt en 1894. Le parcours mène de Paris, par Yerres et Trouville, jusqu’à son jardin de Petit-Gennevilliers.",
  "life": "1848–1894"
};
  P.stations = Object.assign(P.stations || {}, {
  "cbs1": {
    "place": "Paris et Yerres : pluie, barques et un ami",
    "when": "1876–1880",
    "mapLabel": "Paris et Yerres",
    "intro": [
      "Gustave Caillebotte est issu d’une famille aisée de Paris ; en 1877, il organise l’exposition impressionniste et y montre son plus grand tableau, une rue de Paris sous la pluie.",
      "Dans la propriété familiale d’Yerres, il peint en 1877 et 1878 des pêcheurs et des canotiers ; à Paris, il partage avec son frère Martial un appartement boulevard Haussmann."
    ]
  },
  "cbs3": {
    "place": "La voile : la Normandie et la Seine",
    "when": "1884–1893",
    "mapLabel": "Normandie et Seine",
    "intro": [
      "Au début des années 1880, Caillebotte passe plusieurs étés sur la côte normande, où il peint et participe à des régates.",
      "Navigateur primé, il dessine ses propres voiliers de course ; il partage sa passion de la voile avec son ami Eugène Lamy."
    ]
  },
  "cbs4": {
    "place": "Le jardin du Petit-Gennevilliers",
    "when": "1893",
    "mapLabel": "Petit-Gennevilliers",
    "intro": [
      "En 1881, Gustave et Martial Caillebotte achètent un terrain au Petit-Gennevilliers, en face d’Argenteuil, au bord de la Seine ; plus tard, Gustave reprend seul la propriété.",
      "Il y crée un jardin, peint, navigue et échange des conseils de jardinage avec son ami Claude Monet."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cbrainy": {
    "text": [
      "Un couple sous un parapluie avance droit vers nous ; derrière, les pavés mouillés d’un carrefour animé brillent.",
      "Le carrefour se trouve à quelques pas de chez Caillebotte ; il montre la pluie non par des gouttes, mais par les parapluies et les reflets sur les pavés."
    ],
    "fact": "1877. Art Institute of Chicago."
  },
  "cbskiffs": {
    "text": [
      "Trois périssoires étroites, menées par des rameurs en chemise blanche et chapeau de paille, glissent sur la rivière vers nous.",
      "Caillebotte montre le tableau en 1879 à la quatrième exposition impressionniste sous le titre « Périssoires sur l’Yerres »."
    ],
    "fact": "1877. National Gallery of Art, Washington."
  },
  "cbcourtier": {
    "text": [
      "Albert Courtier, notaire de Caillebotte et ami de toujours de la famille, est assis dans un fauteuil près de la fenêtre de l’appartement du boulevard Haussmann.",
      "Courtier pose plusieurs fois pour Caillebotte, possède quatre de ses tableaux et fait de lui le parrain de sa fille aînée."
    ],
    "fact": "1880. Musée d’art de Cleveland."
  },
  "cbtrouville": {
    "text": [
      "Du haut d’une falaise, Caillebotte regarde par-dessus des villas de brique rouge vers la mer bleu-vert, sous un ciel pommelé.",
      "Trouville est une station prisée de la côte normande ; les villas à l’écart du centre dominent directement le rivage."
    ],
    "fact": "1884. Musée d’art de Cleveland."
  },
  "cblamy": {
    "text": [
      "À la pierre noire, Caillebotte dessine un homme au chapeau, vu de dos, les mains dans les poches.",
      "C’est son ami Eugène Lamy, étudié pour le tableau « Bord de Seine au Petit-Gennevilliers, hiver » de 1893."
    ],
    "fact": "1893. Musée d’art de Cleveland."
  },
  "cbchrysanth": {
    "text": [
      "Serrés les uns contre les autres, des chrysanthèmes blancs, jaunes et rouges remplissent tout le tableau, sans ciel ni horizon.",
      "Caillebotte peint ces fleurs en 1893 dans son propre jardin du Petit-Gennevilliers."
    ],
    "fact": "1893. Metropolitan Museum of Art, New York."
  },
  "cbdahlias": {
    "text": [
      "Au premier plan brillent des dahlias rouges et jaunes ; derrière se dressent la serre et la maison de Caillebotte dans la lumière de l’après-midi.",
      "Sur l’allée, une femme coiffée d’un chapeau de soleil examine quelque chose dans ses mains, tandis que son petit chien regarde le peintre."
    ],
    "fact": "1893. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
