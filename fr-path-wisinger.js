// v10.24 FR content for Olga Wisinger-Florian’s life journey, Part 1 (1844–1926). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collection particulière",
  "Belvedere, Wien": "Belvédère, Vienne"
});
  P.works = Object.assign(P.works || {}, {
  "owherbst": {
    "title": "Forêt d’automne",
    "museum": "Collection particulière"
  },
  "owmuehle": {
    "title": "Moulin à Goisern",
    "museum": "Collection particulière"
  },
  "owmaedchen": {
    "title": "Fillette au jardin",
    "museum": "Collection particulière"
  },
  "owfeld": {
    "title": "Fleurs des champs",
    "museum": "Collection particulière"
  },
  "owhelleb": {
    "title": "Roses de Noël",
    "museum": "Collection particulière"
  },
  "owbauernhof": {
    "title": "Travail à la ferme",
    "museum": "Belvédère, Vienne"
  },
  "owvenedig": {
    "title": "Le marché aux poissons à Venise",
    "museum": "Collection particulière"
  },
  "owkarlsbad": {
    "title": "Petit déjeuner à Karlsbad",
    "museum": "Collection particulière"
  },
  "owmohn": {
    "title": "Coquelicots en fleurs",
    "museum": "Belvédère, Vienne"
  },
  "owdorf": {
    "title": "Rue de village au soleil de midi",
    "museum": "Collection particulière"
  },
  "owprater": {
    "title": "Allée du Prater en automne",
    "museum": "Belvédère, Vienne"
  },
  "owente": {
    "title": "Mare aux canards",
    "museum": "Belvédère, Vienne"
  },
  "owweiher": {
    "title": "Allée au bord de l’étang",
    "museum": "Belvédère, Vienne"
  },
  "owstrauss": {
    "title": "Bouquet de fleurs des champs",
    "museum": "Belvédère, Vienne"
  },
  "owapfel": {
    "title": "Pommiers en fleurs",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.wisinger = {
  "title": "Le parcours de vie d’Olga Wisinger-Florian",
  "life": "1844–1926",
  "part": "Fleurs, allées et jardins",
  "subtitle": "De pianiste à peintre",
  "intro": "Voyage avec Olga Wisinger-Florian, la peintre viennoise des fleurs et des jardins : de ses premiers tableaux dans le Salzkammergut aux champs de coquelicots et aux allées du Prater, jusqu’à Venise, Karlsbad et Euxinograd au bord de la mer Noire. De courtes étapes et des tableaux à colorier. Ce chemin suit ses couleurs.",
  "ending": [
    "Olga Wisinger-Florian meurt à Grafenegg, en Basse-Autriche, le 27 février 1926. La pianiste est devenue l’une des femmes peintres les plus connues d’Autriche.",
    "Le chemin mène de la forêt d’automne de ses débuts, par les fermes, les voyages et les allées, jusqu’aux pommiers en fleurs de 1906."
  ],
  "epilogue": "Olga Wisinger-Florian meurt à Grafenegg, en Basse-Autriche, le 27 février 1926. La pianiste est devenue l’une des femmes peintres les plus connues d’Autriche. Le chemin mène de la forêt d’automne de ses débuts, par les fermes, les voyages et les allées, jusqu’aux pommiers en fleurs de 1906."
};
  P.stations = Object.assign(P.stations || {}, {
  "owjung": {
    "place": "Vienne et Goisern · Du piano à la peinture",
    "when": "1844–1881",
    "mapLabel": "Goisern",
    "intro": [
      "Olga Florian naît à Vienne le 1er novembre 1844. Elle devient d’abord pianiste de concert, puis se tourne vers la peinture.",
      "À partir de 1880, elle étudie auprès d’Emil Jakob Schindler."
    ]
  },
  "owblumen": {
    "place": "Fleurs et fermes",
    "when": "1884–1888",
    "mapLabel": "Fleurs",
    "intro": [
      "Wisinger-Florian trouve son sujet : les fleurs, les prés et la vie à la campagne.",
      "Ses couleurs deviennent plus vives et plus libres que celles de son maître."
    ]
  },
  "owreisen": {
    "place": "Voyages et étés",
    "when": "1892–1899",
    "mapLabel": "Venise",
    "intro": [
      "Elle voyage à Venise et dans les villes d’eaux de Bohême. Chez elle, elle peint des champs de coquelicots et des rues de village en été.",
      "Ses tableaux sont bientôt exposés aussi à l’étranger."
    ]
  },
  "owpark": {
    "place": "Parcs et allées",
    "when": "1900–1906",
    "mapLabel": "Prater",
    "intro": [
      "Vers 1900, Wisinger-Florian peint le Prater, des étangs et des allées. Elle s’engage aussi pour la formation des femmes peintres.",
      "Au printemps et à l’automne, elle cherche les couleurs les plus fortes."
    ]
  },
  "owspaet": {
    "place": "Floraison tardive",
    "when": "1906–1926",
    "mapLabel": "Grafenegg",
    "intro": [
      "À plus de soixante ans, elle peint encore des bouquets frais et des arbres en fleurs. Elle meurt à Grafenegg le 27 février 1926.",
      "Son œuvre reste une fête des couleurs."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "owherbst": {
    "text": [
      "La forêt brille de jaune et de brun, les feuilles couvrent le chemin. C’est l’un de ses premiers tableaux.",
      "La même année, elle devient l’élève d’Emil Jakob Schindler."
    ],
    "fact": "1880. Collection particulière."
  },
  "owmuehle": {
    "text": [
      "Un moulin se dresse au bord du ruisseau à Goisern, dans le Salzkammergut, le bois et l’eau brillent. Schindler y peint l’été avec ses élèves.",
      "Wisinger-Florian apprend à regarder de près et à travailler dehors."
    ],
    "fact": "1880. Collection particulière."
  },
  "owmaedchen": {
    "text": [
      "Une fillette se tient dans un jardin en fleurs, entourée de verdure et de lumière. La figure est petite, le jardin grand.",
      "Son amour des fleurs se voit déjà ici."
    ],
    "fact": "1881. Collection particulière."
  },
  "owfeld": {
    "text": [
      "Les fleurs des prés poussent serrées, le bleu, le blanc et le rouge se mêlent dans l’herbe. Wisinger-Florian les peint de près.",
      "Les fleurs deviennent son grand sujet."
    ],
    "fact": "1884. Collection particulière."
  },
  "owhelleb": {
    "text": [
      "Les roses de Noël blanches fleurissent à la fin de l’hiver parmi des feuilles sombres. Elles sont parmi les premières fleurs de l’année.",
      "Wisinger-Florian les peint dans des tons clairs et lumineux."
    ],
    "fact": "1885. Collection particulière."
  },
  "owbauernhof": {
    "text": [
      "Dans une ferme, des gens vaquent à leur travail, des poules courent dans la cour. La lumière est chaude.",
      "Le tableau appartient au Belvédère de Vienne."
    ],
    "fact": "1888. Belvédère, Vienne."
  },
  "owvenedig": {
    "text": [
      "Au marché aux poissons de Venise, bateaux, étals et gens se pressent au bord de l’eau. L’air vibre dans la lumière.",
      "Wisinger-Florian aime voyager et peint en chemin."
    ],
    "fact": "1892. Collection particulière."
  },
  "owkarlsbad": {
    "text": [
      "À Karlsbad, des hôtes prennent le petit déjeuner dehors, sous les arbres et les ombrelles. C’est un gai matin d’été.",
      "La ville d’eaux est pleine de vie en été."
    ],
    "fact": "1895. Collection particulière."
  },
  "owmohn": {
    "text": [
      "Un champ plein de coquelicots rouges brille sous un ciel clair. Le rouge est intense et posé librement.",
      "Le tableau du Belvédère montre Wisinger-Florian au sommet de son art."
    ],
    "fact": "vers 1895. Belvédère, Vienne."
  },
  "owdorf": {
    "text": [
      "Une rue de village repose sous le soleil de midi, les maisons et les arbres projettent leur ombre. Tout semble se reposer.",
      "Wisinger-Florian aime la lumière vive et chaude de l’été."
    ],
    "fact": "1899. Collection particulière."
  },
  "owprater": {
    "text": [
      "La grande allée du Prater brille de feuilles d’automne, des promeneurs marchent sous les arbres. Le jaune remplit tout le tableau.",
      "Le Prater est un motif apprécié des peintres viennois."
    ],
    "fact": "1900. Belvédère, Vienne."
  },
  "owente": {
    "text": [
      "Des canards nagent sur une petite mare, la rive est verte et fleurie. L’eau reflète les arbres et le ciel.",
      "Le tableau appartient au Belvédère de Vienne."
    ],
    "fact": "1900. Belvédère, Vienne."
  },
  "owweiher": {
    "text": [
      "Une allée d’arbres longe l’étang, la lumière et l’ombre alternent sur le chemin. L’eau repose tout à côté.",
      "Elle peint sans cesse des allées et des parcs."
    ],
    "fact": "1906. Belvédère, Vienne."
  },
  "owstrauss": {
    "text": [
      "Un bouquet de fleurs des champs fraîchement cueillies est posé sur la table. Chaque fleur a sa propre couleur.",
      "Plus de vingt ans après ses premières fleurs des champs, elle revient à ce motif."
    ],
    "fact": "1906. Belvédère, Vienne."
  },
  "owapfel": {
    "text": [
      "Les pommiers sont en pleine floraison, l’herbe dessous est fraîche et verte. Le blanc et le rose brillent dans la lumière du printemps.",
      "Wisinger-Florian a plus de soixante ans et peint d’une main légère."
    ],
    "fact": "1906. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
