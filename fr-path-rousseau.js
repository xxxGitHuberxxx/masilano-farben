// v10.43 FR content for Henri Rousseau’s life journey (1844–1910). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "hrrendezvous": {
    "title": "Rendez-vous dans la forêt",
    "museum": "National Gallery of Art, Washington"
  },
  "hrsawmill": {
    "title": "Scierie aux environs de Paris",
    "museum": "Art Institute of Chicago"
  },
  "hrboy": {
    "title": "Garçon sur les rochers",
    "museum": "National Gallery of Art, Washington"
  },
  "hroutskirts": {
    "title": "Environs de Paris",
    "museum": "Musée d’art de Cleveland"
  },
  "hrbievre": {
    "title": "Les Bords de la Bièvre près de Bicêtre",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hrequatorial": {
    "title": "La Forêt équatoriale",
    "museum": "National Gallery of Art, Washington"
  },
  "hrmonkeys": {
    "title": "Forêt tropicale avec singes",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.rousseau = {
  "title": "Le parcours de vie de Henri Rousseau",
  "part": "Paris et ses faubourgs",
  "subtitle": "Faubourgs, forêts et jungles rêvées",
  "intro": "Voyage à travers la vie de Henri Rousseau : des faubourgs de Paris, où il travaille à l’octroi, jusqu’aux jungles qu’il imagine dans ses dernières années. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Henri Rousseau meurt à Paris le 2 septembre 1910.",
    "De jeunes peintres comme Pablo Picasso l’admirent déjà de son vivant, et ses tableaux sont aujourd’hui exposés dans des musées du monde entier."
  ],
  "epilogue": "Henri Rousseau meurt à Paris le 2 septembre 1910. Le parcours mène des faubourgs de la ville aux jungles rêvées de ses dernières années.",
  "life": "1844–1910"
};
  P.stations = Object.assign(P.stations || {}, {
  "rousseau1": {
    "place": "Employé de l’octroi et peintre à Paris",
    "when": "1844–1905",
    "mapLabel": "Paris",
    "intro": [
      "Henri Rousseau naît le 21 mai 1844 à Laval, dans l’ouest de la France, et travaille à partir de 1871 dans un poste de l’octroi aux portes de Paris.",
      "Il apprend seul à peindre, expose à partir de 1886 au Salon des indépendants et, dès 1893, ne fait plus que peindre."
    ]
  },
  "rss2": {
    "place": "Dernières années : berges et jungles",
    "when": "1906–1910",
    "mapLabel": "Paris",
    "intro": [
      "Dans ses dernières années, Rousseau peint de grandes jungles, alors qu’il n’a jamais quitté la France.",
      "Il étudie les plantes dans les serres du Jardin des plantes à Paris et dans des livres illustrés."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hrrendezvous": {
    "text": [
      "Au fond d’une forêt d’automne, deux cavaliers en costumes d’autrefois se rencontrent.",
      "Au-dessus d’eux, les branches dépouillées des arbres forment un fin réseau devant le ciel clair."
    ],
    "fact": "1889. National Gallery of Art, Washington."
  },
  "hrsawmill": {
    "text": [
      "Derrière une haie se dressent les bâtiments clairs d’une scierie à la cheminée fumante.",
      "Une route quitte la ville en longeant arbres et prés."
    ],
    "fact": "vers 1893–1895. Art Institute of Chicago."
  },
  "hrboy": {
    "text": [
      "Un petit garçon en blouse sombre et bas rayés est assis sur des rochers pointus.",
      "Il paraît aussi grand qu’un géant, car les rochers ressemblent à toute une chaîne de montagnes."
    ],
    "fact": "1895–1897. National Gallery of Art, Washington."
  },
  "hroutskirts": {
    "text": [
      "Un canal enjambé par un petit pont longe une maison au toit rouge, des gens se promènent sur la berge.",
      "Au-dessus de tout, de grands nuages blancs traversent le ciel bleu."
    ],
    "fact": "vers 1897–1905. Musée d’art de Cleveland."
  },
  "hrbievre": {
    "text": [
      "De grands arbres élancés bordent un chemin le long de la Bièvre, une petite rivière au sud de Paris.",
      "Rousseau peint chaque feuille et chaque branche avec un grand soin."
    ],
    "fact": "vers 1908–1909. Metropolitan Museum of Art, New York."
  },
  "hrequatorial": {
    "text": [
      "D’immenses feuilles dans de nombreux tons de vert remplissent tout le tableau, des fleurs roses et blanches y brillent.",
      "En bas, dans le fourré, un animal guette entre les plantes."
    ],
    "fact": "1909. National Gallery of Art, Washington."
  },
  "hrmonkeys": {
    "text": [
      "Des singes grimpent et s’assoient dans une forêt dense de palmiers, d’herbes et de plantes rouges.",
      "Rousseau peint ce tableau dans la dernière année de sa vie."
    ],
    "fact": "1910. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
