// v10.21 FR content for Félix Vallotton’s life journey, Part 1 (1865–1925). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Musée Toulouse-Lautrec, Albi": "Musée Toulouse-Lautrec, Albi",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Paris",
  "MuMA, Le Havre": "MuMA, Le Havre",
  "Privatsammlung": "Collection particulière",
  "Kunsthaus Zürich": "Kunsthaus de Zurich",
  "Musée cantonal des Beaux-Arts, Lausanne": "Musée cantonal des Beaux-Arts, Lausanne",
  "Baltimore Museum of Art": "Baltimore Museum of Art"
});
  P.works = Object.assign(P.works || {}, {
  "fvmother": {
    "title": "La mère de l’artiste",
    "museum": "Musée cantonal des Beaux-Arts, Lausanne"
  },
  "fvbrother": {
    "title": "Paul Vallotton, le frère de l’artiste",
    "museum": "Collection particulière"
  },
  "fvvalse": {
    "title": "La Valse",
    "museum": "MuMA, Le Havre"
  },
  "fvmensonge": {
    "title": "Le Mensonge",
    "museum": "Baltimore Museum of Art"
  },
  "fvpiano": {
    "title": "Madame Vallotton au piano",
    "museum": "Musée Toulouse-Lautrec, Albi"
  },
  "ballon": {
    "title": "Le Ballon",
    "museum": "Musée d’Orsay, Paris"
  },
  "fvredback": {
    "title": "Intérieur avec femme en rouge de dos",
    "museum": "Kunsthaus de Zurich"
  },
  "fvhonfleur": {
    "title": "Honfleur, matin d’été",
    "museum": "Collection particulière"
  },
  "fvsunset": {
    "title": "Coucher de soleil à Villerville",
    "museum": "Kunsthaus de Zurich"
  },
  "fvchemin": {
    "title": "Chemin ensoleillé",
    "museum": "Collection particulière"
  },
  "fvself": {
    "title": "Autoportrait",
    "museum": "Kunsthaus de Zurich"
  }
});
  P.paths = P.paths || {};
  P.paths.vallotton = {
  "title": "Le parcours de vie de Félix Vallotton",
  "life": "1865–1925",
  "part": "Partie 1 · De Lausanne à Honfleur",
  "subtitle": "Les Nabis, les intérieurs et la lumière de Normandie",
  "intro": "Voyage avec Félix Vallotton, le Lausannois qui à Paris rejoint les Nabis : des portraits de jeunesse aux intérieurs nets et à « Le Ballon », jusqu’aux paysages d’Honfleur. De courtes étapes et des tableaux à colorier. Cette première partie va jusqu’aux années tardives.",
  "ending": [
    "Vallotton meurt à Neuilly-sur-Seine le 29 décembre 1925, le lendemain de son soixantième anniversaire. Il reste attaché autant au canton de Vaud qu’à la France.",
    "Le chemin peut encore s’allonger. Gravures sur bois, autres natures mortes et les paysages tardifs du Midi pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "Le 29 décembre 1925, Vallotton meurt à Neuilly-sur-Seine, à soixante ans. Une partie ultérieure pourra ajouter des gravures sur bois et d’autres natures mortes."
};
  P.stations = Object.assign(P.stations || {}, {
  "fvlausanne": {
    "place": "Lausanne · Origines",
    "when": "1865–1886",
    "mapLabel": "Lausanne",
    "intro": [
      "Félix Vallotton naît à Lausanne le 28 décembre 1865. En 1882, il part pour Paris, à l’Académie Julian, et reste attaché à la fois à la ville et au canton de Vaud.",
      "Les portraits de jeunesse de la mère et du frère montrent avec quelle exactitude, déjà jeune peintre, il s’assied face à une personne."
    ]
  },
  "fvnabis": {
    "place": "Paris · Les Nabis",
    "when": "1893–1899",
    "mapLabel": "Paris",
    "intro": [
      "À Paris, Vallotton rejoint les Nabis, aux côtés de Bonnard et de Vuillard. Il se fait aussi connaître par des gravures sur bois en noir et blanc, mais continue de peindre à l’huile, avec des plans nets et un découpage ferme.",
      "En 1899, il épouse Gabrielle Rodrigues-Henriques et se trouve lié à la galerie Bernheim-Jeune. En 1900, il prend la nationalité française."
    ]
  },
  "fvinterieur": {
    "place": "Intérieurs",
    "when": "1893–1905",
    "mapLabel": "Intérieur",
    "intro": [
      "Dans les mêmes années, Vallotton peint des intérieurs où la couleur et l’attitude disent plus qu’un récit. Le rouge, l’ombre et le dos d’une femme assise lui suffisent.",
      "Les intérieurs sont proches de ses gravures sur bois : peu de détail, un découpage ferme, un regard froid sur le quotidien."
    ]
  },
  "fvhonfleur": {
    "place": "Honfleur et la côte",
    "when": "1901–1917",
    "mapLabel": "Honfleur",
    "intro": [
      "Dès 1901, Vallotton peint le port d’Honfleur la nuit. À partir de 1909, il y a une maison ; la côte normande devient son second atelier.",
      "Matins d’été, chemins au soleil et couchers tardifs : il ordonne la lumière en bandes calmes et fermes."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "fvmother": {
    "text": [
      "Le portrait de jeunesse montre la mère de Vallotton dans une observation calme et exacte. Le jeune peintre de Lausanne cherche encore son ton, mais le regard est déjà ferme.",
      "En 1882, il est parti pour Paris, à l’Académie Julian. Le tableau de 1884 maintient le lien avec la famille."
    ],
    "fact": "1884. Musée cantonal des Beaux-Arts, Lausanne."
  },
  "fvbrother": {
    "text": [
      "Le frère cadet pose pour Félix. Le portrait est simple et proche, sans grand pathos, encore dans un ton d’atelier plus sombre.",
      "Les frères restent liés, même lorsque Félix s’affirme à Paris. Paul travaillera plus tard à Lausanne comme marchand d’art."
    ],
    "fact": "1886. Collection particulière."
  },
  "fvvalse": {
    "text": [
      "Des couples tournent dans la valse, les robes devenant des champs de couleur en mouvement. Vallotton simplifie la scène jusqu’à ne garder que le rythme et la lumière.",
      "Le tableau de 1893 appartient aux années proches des Nabis. Le découpage rappelle déjà ses gravures sur bois : net, ferme, sans détail superflu."
    ],
    "fact": "1893. MuMA, Le Havre."
  },
  "fvmensonge": {
    "text": [
      "Un couple dans un intérieur, tout près l’un de l’autre, le geste ambigu. Vallotton donne à la scène un découpage froid, presque tranchant.",
      "Le tableau de 1898 appartient aux intérieurs où il montre à la fois la proximité et la distance. Rien n’est laissé au hasard."
    ],
    "fact": "1898. Baltimore Museum of Art."
  },
  "fvpiano": {
    "text": [
      "Gabrielle est assise au piano, le dos légèrement penché, la pièce en plans de couleur calmes. Vallotton l’épouse en 1899, l’année même du tableau.",
      "Par elle, il est lié à la galerie Bernheim-Jeune. L’intérieur reste froid et attentif, sans pathos privé."
    ],
    "fact": "1899. Musée Toulouse-Lautrec, Albi."
  },
  "ballon": {
    "text": [
      "Vu d’en haut, un enfant dans un parc court après un ballon rouge. Deux petites figures se tiennent à l’ombre des arbres.",
      "Vallotton a peint la scène en 1899, probablement aux Tuileries. Le plan est net, l’ombre tranchante, le regard presque celui d’une gravure sur bois."
    ],
    "fact": "1899. Musée d’Orsay, Paris."
  },
  "fvredback": {
    "text": [
      "Une femme en rouge est assise, le dos tourné au regard ; le fauteuil et le mur sont de grands plans calmes. Vallotton laisse le visage de côté.",
      "Le tableau du Kunsthaus de Zurich appartient aux intérieurs silencieux où l’attitude et la couleur disent plus qu’une action."
    ],
    "fact": "1903. Kunsthaus de Zurich."
  },
  "fvhonfleur": {
    "text": [
      "Un matin d’été sur Honfleur, la lumière posée en calme sur l’eau et les maisons. Vallotton simplifie la ville jusqu’à en faire un paysage net.",
      "À partir de 1909, il y a une maison. La côte normande devient pour des années son autre atelier, à côté de Paris."
    ],
    "fact": "vers 1910. Collection particulière."
  },
  "fvsunset": {
    "text": [
      "Le ciel au-dessus de Villerville brûle en bandes de couleur horizontales, la mer reste lourde et sombre. Vallotton ordonne le coucher du soleil comme un relief.",
      "Le tableau du Kunsthaus de Zurich appartient aux paysages côtiers tardifs où la lumière elle-même devient le sujet."
    ],
    "fact": "vers 1917. Kunsthaus de Zurich."
  },
  "fvchemin": {
    "text": [
      "Un chemin est dans une lumière de soleil dure, les ombres courtes et fermes. Vallotton peint la chaleur sans transitions molles.",
      "Le tableau de 1914 tombe dans les années de guerre, mais reste un paysage d’ordre : lumière, chemin, le bord des arbres."
    ],
    "fact": "1914. Collection particulière."
  },
  "fvself": {
    "text": [
      "En 1905, Vallotton se regarde avec fermeté et sans ornement. Le visage est nettement découpé, le fond est calme.",
      "Il est désormais citoyen français et un peintre reconnu de la génération nabi. Le portrait reste sobre, presque austère."
    ],
    "fact": "1905. Kunsthaus de Zurich."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
