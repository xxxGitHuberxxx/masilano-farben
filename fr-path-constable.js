// v10.43 FR content for John Constable’s life journey (1776–1837). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "The National Gallery, London": "The National Gallery, Londres"
});
  P.works = Object.assign(P.works || {}, {
  "cnepsom": {
    "title": "La Lande d’Epsom",
    "museum": "National Gallery of Art, Washington"
  },
  "cncottages": {
    "title": "Paysage avec des chaumières",
    "museum": "Art Institute of Chicago"
  },
  "cnstoke": {
    "title": "Stoke-by-Nayland",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnwivenhoe": {
    "title": "Wivenhoe Park, Essex",
    "museum": "National Gallery of Art, Washington"
  },
  "cnpulham": {
    "title": "Mrs James Pulham",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnwhitehorse": {
    "title": "Le Cheval blanc",
    "museum": "National Gallery of Art, Washington"
  },
  "cnsalisbury": {
    "title": "La Cathédrale de Salisbury vue de Lower Marsh Close",
    "museum": "National Gallery of Art, Washington"
  },
  "haywain": {
    "title": "La Charrette de foin",
    "museum": "The National Gallery, Londres"
  },
  "cnclouds": {
    "title": "Étude de nuages : coucher de soleil orageux",
    "museum": "National Gallery of Art, Washington"
  },
  "cnyarmouth": {
    "title": "La Jetée de Yarmouth",
    "museum": "National Gallery of Art, Washington"
  },
  "cnlock": {
    "title": "Paysage (L’Écluse)",
    "museum": "Art Institute of Chicago"
  },
  "cnbishop": {
    "title": "La Cathédrale de Salisbury vue des jardins de l’évêque",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnbranchhill": {
    "title": "L’Étang de Branch Hill, Hampstead",
    "museum": "Musée d’art de Cleveland"
  },
  "cncloudwc": {
    "title": "Étude de nuages",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnmill": {
    "title": "Moulin près de Colchester",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnstoke36": {
    "title": "Stoke-by-Nayland",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.constable = {
  "title": "Le parcours de vie de John Constable",
  "part": "Le Suffolk, Salisbury et Hampstead",
  "subtitle": "Ciels, nuages et rivières",
  "intro": "Voyage à travers la vie de John Constable : des champs et des moulins de son Suffolk natal et de la cathédrale de Salisbury jusqu’aux nuages au-dessus de Hampstead. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "John Constable meurt à Londres le 31 mars 1837.",
    "Ses ciels et ses paysages pleins de fraîcheur enthousiasment plus tard les peintres français, de Delacroix aux impressionnistes."
  ],
  "epilogue": "John Constable meurt à Londres le 31 mars 1837. Le parcours mène des champs du Suffolk aux nuages de Hampstead, en passant par Salisbury.",
  "life": "1776–1837"
};
  P.stations = Object.assign(P.stations || {}, {
  "cns1": {
    "place": "Le Suffolk : le pays natal et les années d’apprentissage",
    "when": "1776–1811",
    "mapLabel": "East Bergholt",
    "intro": [
      "John Constable naît le 11 juin 1776 à East Bergholt, dans le Suffolk ; son père possède des moulins au bord de la Stour.",
      "À partir de 1799, il étudie à l’école de la Royal Academy à Londres, mais il préfère peindre les champs et les villages de sa région."
    ]
  },
  "cns2": {
    "place": "Le mariage et les grands tableaux",
    "when": "1816–1819",
    "mapLabel": "Essex",
    "intro": [
      "En 1816, après une longue attente, Constable épouse Maria Bicknell et s’installe avec elle à Londres.",
      "Il peint désormais de grandes toiles de près de deux mètres de large et, en 1819, il est élu membre associé de la Royal Academy."
    ]
  },
  "constable1": {
    "place": "Salisbury, la charrette de foin et les nuages",
    "when": "1820–1825",
    "mapLabel": "Salisbury",
    "intro": [
      "Constable rend souvent visite à son ami John Fisher à Salisbury et peint la cathédrale ; à Hampstead, il peint des études de nuages.",
      "En 1824, « La Charrette de foin » est exposée à Paris et reçoit une médaille d’or."
    ]
  },
  "cns4": {
    "place": "Hampstead et les dernières années",
    "when": "1826–1837",
    "mapLabel": "Hampstead",
    "intro": [
      "Constable vit avec ses sept enfants à Hampstead, aux portes de Londres, et peint la vaste lande et le ciel.",
      "En 1829, il devient membre à part entière de la Royal Academy ; ses derniers tableaux sont de plus en plus tourmentés et libres."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cnepsom": {
    "text": [
      "De douces collines s’étendent jusqu’à l’horizon sous un vaste ciel.",
      "Le jeune Constable peint cette petite feuille en quelques tons bruns, gris et verts."
    ],
    "fact": "1806. National Gallery of Art, Washington."
  },
  "cncottages": {
    "text": [
      "Derrière des arbres sombres, les toits rouges de petites maisons brillent dans la lumière du soir.",
      "Devant, un chemin clair traverse une prairie verte."
    ],
    "fact": "1809–1810. Art Institute of Chicago."
  },
  "cnstoke": {
    "text": [
      "Derrière de grands arbres, le clocher du village de Stoke-by-Nayland s’élève dans le ciel nuageux.",
      "Le village se trouve à quelques kilomètres du lieu de naissance de Constable."
    ],
    "fact": "vers 1810–1811. Metropolitan Museum of Art, New York."
  },
  "cnwivenhoe": {
    "text": [
      "Des vaches paissent au bord d’un lac, derrière lequel une maison de campagne se dresse parmi les arbres verts.",
      "Constable peint le parc pour son propriétaire et ajoute des bandes à la toile pour que tout y tienne."
    ],
    "fact": "1816. National Gallery of Art, Washington."
  },
  "cnpulham": {
    "text": [
      "Une femme au chapeau sombre et au large col blanc regarde aimablement hors du tableau.",
      "C’est l’épouse d’un ami de Constable, de Woodbridge dans le Suffolk."
    ],
    "fact": "1818. Metropolitan Museum of Art, New York."
  },
  "cnwhitehorse": {
    "text": [
      "Un cheval blanc traverse la Stour sur une barge, au bord de la rivière se dressent des arbres et une ferme.",
      "Constable peint cette version en grandeur réelle pour préparer le grand tableau."
    ],
    "fact": "1818–1819. National Gallery of Art, Washington."
  },
  "cnsalisbury": {
    "text": [
      "Au-delà d’une prairie verte, la flèche élancée de la cathédrale de Salisbury s’élève dans le ciel.",
      "À gauche, de grands arbres projettent une ombre sombre."
    ],
    "fact": "1820. National Gallery of Art, Washington."
  },
  "haywain": {
    "text": [
      "Une charrette de foin traverse la rivière Stour à Flatford, dans le Suffolk, tout près du moulin du père de Constable.",
      "À gauche se dresse une maison qui existe encore aujourd’hui."
    ],
    "fact": "1821. The National Gallery, Londres."
  },
  "cnclouds": {
    "text": [
      "Des nuages gris et roses passent dans un ciel clair du soir.",
      "À Hampstead, Constable peint beaucoup de ciels comme celui-ci et note souvent le jour, l’heure et le vent."
    ],
    "fact": "1821–1822. National Gallery of Art, Washington."
  },
  "cnyarmouth": {
    "text": [
      "Une longue jetée de bois s’avance dans la mer verte à Yarmouth, des navires naviguent à l’horizon.",
      "De grands nuages blancs et roses s’amoncellent au-dessus de la plage."
    ],
    "fact": "1822. National Gallery of Art, Washington."
  },
  "cnlock": {
    "text": [
      "Sous un grand arbre clair, un homme en rouge est assis près d’une écluse de bois.",
      "Constable connaît depuis l’enfance les écluses et les barges de la Stour."
    ],
    "fact": "vers 1820–1825. Art Institute of Chicago."
  },
  "cnbishop": {
    "text": [
      "Deux grands arbres encadrent la cathédrale claire comme une arche, des vaches paissent au premier plan.",
      "L’évêque de Salisbury, oncle de John Fisher, ami de Constable, commande un tableau de ce genre."
    ],
    "fact": "vers 1825. Metropolitan Museum of Art, New York."
  },
  "cnbranchhill": {
    "text": [
      "De sombres nuages de pluie s’amoncellent au-dessus de la vaste lande de Hampstead, en bas brille un petit étang.",
      "À droite s’étend une colline sablonneuse où paissent de minuscules animaux."
    ],
    "fact": "1828. Musée d’art de Cleveland."
  },
  "cncloudwc": {
    "text": [
      "Des bandes de nuages gris-bleu passent au-dessus d’un horizon plat.",
      "Constable peint la feuille à l’aquarelle, vite, avant que les nuages ne changent."
    ],
    "fact": "1830–1835. Metropolitan Museum of Art, New York."
  },
  "cnmill": {
    "text": [
      "Un moulin à vent en bois aux grandes ailes se dresse sous un ciel orageux.",
      "Les moulins rappellent à Constable son père et son enfance dans le Suffolk."
    ],
    "fact": "1833. Metropolitan Museum of Art, New York."
  },
  "cnstoke36": {
    "text": [
      "Au premier plan, une charrue et une charrette attelée de chevaux sont dans le champ, derrière s’élève le clocher de Stoke-by-Nayland.",
      "Près de 25 ans après son premier tableau, Constable peint de nouveau le village, à grands coups de pinceau libres."
    ],
    "fact": "1836. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
