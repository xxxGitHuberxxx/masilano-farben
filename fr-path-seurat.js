// v10.43 FR content for Georges Seurat’s life journey (1859–1891). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "The Art Institute of Chicago": "The Art Institute of Chicago",
  "The Museum of Modern Art (MoMA), New York": "The Museum of Modern Art (MoMA), New York"
});
  P.works = Object.assign(P.works || {}, {
  "sesaintouen": {
    "title": "Paysage à Saint-Ouen",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "separapet": {
    "title": "Homme accoudé à un parapet",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sepontaubert": {
    "title": "La Forêt à Pontaubert",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "semower": {
    "title": "Le Faucheur",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sehaymakers": {
    "title": "Faneuses à Montfermeil",
    "museum": "National Gallery of Art, Washington"
  },
  "sehoe": {
    "title": "Paysan à la houe",
    "museum": "National Gallery of Art, Washington"
  },
  "sestonebreaker": {
    "title": "Le Casseur de pierres",
    "museum": "National Gallery of Art, Washington"
  },
  "sehaystacks": {
    "title": "Meules",
    "museum": "National Gallery of Art, Washington"
  },
  "segardener": {
    "title": "Le Jardinier",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sewateringcan": {
    "title": "L’Arrosoir – Jardin au Raincy",
    "museum": "National Gallery of Art, Washington"
  },
  "sesummer": {
    "title": "Paysage d’été",
    "museum": "National Gallery of Art, Washington"
  },
  "seseine": {
    "title": "Vue de la Seine",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sefigures": {
    "title": "Personnages dans un paysage",
    "museum": "National Gallery of Art, Washington"
  },
  "sejattestudy": {
    "title": "Étude pour « Un dimanche à la Grande Jatte »",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sejattewood": {
    "title": "Étude pour « Un dimanche à la Grande Jatte » (sur bois)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sejattesketch": {
    "title": "Esquisse à l’huile pour « Un dimanche à la Grande Jatte »",
    "museum": "Art Institute of Chicago"
  },
  "sejattenga": {
    "title": "Étude pour « La Grande Jatte »",
    "museum": "National Gallery of Art, Washington"
  },
  "sejattefigures": {
    "title": "Étude de personnages pour « La Grande Jatte »",
    "museum": "National Gallery of Art, Washington"
  },
  "jatte": {
    "title": "Un dimanche après-midi à l’île de la Grande Jatte",
    "museum": "The Art Institute of Chicago"
  },
  "sehonfleur": {
    "title": "Le Phare de Honfleur",
    "museum": "National Gallery of Art, Washington"
  },
  "seportenbessin": {
    "title": "Marine à Port-en-Bessin, Normandie",
    "museum": "National Gallery of Art, Washington"
  },
  "seseascape": {
    "title": "Marine (Gravelines)",
    "museum": "National Gallery of Art, Washington"
  },
  "gravelines": {
    "title": "Le Canal de Gravelines, le soir",
    "museum": "The Museum of Modern Art (MoMA), New York"
  },
  "segrayweather": {
    "title": "Temps gris, Grande Jatte",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "secircus": {
    "title": "Parade de cirque",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.seurat = {
  "title": "Le parcours de vie de Georges Seurat",
  "part": "Paris, les champs, la Seine et la mer",
  "subtitle": "La couleur en petits points",
  "intro": "Voyage à travers la courte vie de Georges Seurat : des petites esquisses à l’huile sur bois et des études pour l’île de la Grande Jatte jusqu’aux ports de la Manche et à la parade de cirque. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Georges Seurat meurt à Paris le 29 mars 1891, à seulement 31 ans.",
    "Avec ses points de couleur, il a fondé une manière de peindre que d’autres peintres ont poursuivie."
  ],
  "epilogue": "Georges Seurat meurt à Paris le 29 mars 1891. Le parcours mène des premières esquisses à l’huile jusqu’à la mer, en passant par la Grande Jatte.",
  "life": "1859–1891"
};
  P.stations = Object.assign(P.stations || {}, {
  "ses1": {
    "place": "Paris : les années d’apprentissage",
    "when": "1859–1881",
    "mapLabel": "Paris",
    "intro": [
      "Georges Seurat naît à Paris le 2 décembre 1859 et étudie à l’École des beaux-arts à partir de 1878.",
      "Il lit des livres sur la couleur et la lumière et peint ses premiers petits paysages."
    ]
  },
  "ses2": {
    "place": "Paysans et champs",
    "when": "1881–1883",
    "mapLabel": "Montfermeil",
    "intro": [
      "Dans les villages à l’est de Paris, Seurat peint des paysans au travail, des meules et des jardins.",
      "Les petits tableaux sur planchettes tiennent dans le couvercle de sa boîte de peinture."
    ]
  },
  "seurat1": {
    "place": "La Seine et la Grande Jatte",
    "when": "1882–1886",
    "mapLabel": "Grande Jatte",
    "intro": [
      "Au bord de la Seine, près de Paris, Seurat peint de nombreuses études pour son grand tableau de l’île de la Grande Jatte.",
      "Il y pose les couleurs côte à côte en petits points qui ne se mélangent que dans l’œil."
    ]
  },
  "ses4": {
    "place": "Les étés au bord de la mer",
    "when": "1886–1890",
    "mapLabel": "Manche",
    "intro": [
      "Presque chaque été, Seurat part sur la côte de la Manche, à Honfleur, Port-en-Bessin et Gravelines.",
      "Il y peint des ports calmes, des phares et la mer, parfois avec un cadre peint en points."
    ]
  },
  "ses5": {
    "place": "Paris : le cirque et les dernières années",
    "when": "1886–1891",
    "mapLabel": "Paris",
    "intro": [
      "À Paris, Seurat peint désormais aussi des scènes du soir à la lumière artificielle, comme la parade devant un cirque.",
      "De jeunes peintres comme Paul Signac reprennent sa manière de peindre par points de couleur."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sesaintouen": {
    "text": [
      "Une prairie verte s’étend vers de douces collines, avec un tas de bois au premier plan.",
      "C’est l’une des toutes premières peintures à l’huile du jeune Seurat, encore sans points."
    ],
    "fact": "1878–1879. Metropolitan Museum of Art, New York."
  },
  "separapet": {
    "text": [
      "Un homme en manteau sombre s’appuie à un mur, un tronc d’arbre sombre à gauche.",
      "Seurat peint la scène en petit et rapidement sur une planchette."
    ],
    "fact": "vers 1881. Metropolitan Museum of Art, New York."
  },
  "sepontaubert": {
    "text": [
      "De minces jeunes troncs se dressent dans une forêt verte et claire de Bourgogne.",
      "De nombreuses petites touches de couleur annoncent déjà sa future peinture par points."
    ],
    "fact": "1881. Metropolitan Museum of Art, New York."
  },
  "semower": {
    "text": [
      "Un homme en chemise blanche fauche un champ jaune doré.",
      "Seurat le montre tout entier pris par son geste, sans visage."
    ],
    "fact": "1881–1882. Metropolitan Museum of Art, New York."
  },
  "sehaymakers": {
    "text": [
      "Deux femmes coiffées de fichus retournent le foin avec de longs râteaux.",
      "La lumière du soleil rend leurs vêtements presque blancs."
    ],
    "fact": "vers 1882. National Gallery of Art, Washington."
  },
  "sehoe": {
    "text": [
      "Un paysan se penche sur le champ et travaille à la houe.",
      "Devant brillent des plantes vertes, derrière des bandes de terre roses et brunes."
    ],
    "fact": "vers 1882. National Gallery of Art, Washington."
  },
  "sestonebreaker": {
    "text": [
      "Un homme en casquette lève son marteau pour casser des pierres destinées aux routes.",
      "Le tas de pierres brille d’un rose et d’un orange chauds."
    ],
    "fact": "vers 1882. National Gallery of Art, Washington."
  },
  "sehaystacks": {
    "text": [
      "Plusieurs meules pointues se dressent dans un vaste champ sous un ciel clair.",
      "À l’horizon, on aperçoit de petits arbres et des maisons."
    ],
    "fact": "vers 1882. National Gallery of Art, Washington."
  },
  "segardener": {
    "text": [
      "Un jardinier au chapeau blanc se penche sur un massif dans le jardin ensoleillé.",
      "Seurat peint la lumière et l’ombre par touches courtes et croisées."
    ],
    "fact": "1882–1883. Metropolitan Museum of Art, New York."
  },
  "sewateringcan": {
    "text": [
      "Un arrosoir gris est posé au bord d’une allée de jardin ensoleillée.",
      "Le jardin appartient à la maison de campagne de la famille Seurat au Raincy, près de Paris."
    ],
    "fact": "vers 1883. National Gallery of Art, Washington."
  },
  "sesummer": {
    "text": [
      "Une petite silhouette traverse une vaste prairie d’été aux herbes hautes.",
      "À l’horizon, un arbre sombre et pointu se dresse vers le ciel."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "seseine": {
    "text": [
      "Deux hommes se tiennent debout dans une petite barque sur la Seine, une péniche derrière eux.",
      "Sur l’autre rive se dressent des maisons et des usines."
    ],
    "fact": "1882–1883. Metropolitan Museum of Art, New York."
  },
  "sefigures": {
    "text": [
      "Une femme est agenouillée dans l’herbe, d’autres silhouettes se tiennent avec des ombrelles dans le pré.",
      "Au fond brillent les maisons claires d’un village."
    ],
    "fact": "vers 1883. National Gallery of Art, Washington."
  },
  "sejattestudy": {
    "text": [
      "Presque toutes les figures du grand tableau sont déjà en place, à l’ombre et au soleil.",
      "Cette étude est l’une des dernières et des plus précises avant le tableau achevé."
    ],
    "fact": "1884. Metropolitan Museum of Art, New York."
  },
  "sejattewood": {
    "text": [
      "Sur la rive de l’île, seules quelques personnes sont assises à l’ombre des arbres.",
      "Seurat peint ces petites planchettes sur place pour saisir la lumière et les couleurs."
    ],
    "fact": "1884. Metropolitan Museum of Art, New York."
  },
  "sejattesketch": {
    "text": [
      "À droite, le couple au chapeau haut-de-forme et à l’ombrelle est déjà là, à gauche des gens sont assis dans l’herbe.",
      "L’esquisse est aujourd’hui dans le même musée de Chicago que le grand tableau."
    ],
    "fact": "1884. Art Institute of Chicago."
  },
  "sejattenga": {
    "text": [
      "À travers les arbres scintille l’eau bleue de la Seine, avec une voile blanche.",
      "Au premier plan, deux silhouettes sont assises dans l’herbe vert clair."
    ],
    "fact": "1884–1885. National Gallery of Art, Washington."
  },
  "sejattefigures": {
    "text": [
      "Deux femmes sont assises dans l’herbe, l’une tient un bouquet de fleurs.",
      "À gauche, une petite fille en blanc se tient près d’un tronc d’arbre."
    ],
    "fact": "1884–1885. National Gallery of Art, Washington."
  },
  "jatte": {
    "text": [
      "Des Parisiens se reposent un dimanche sur une île de la Seine.",
      "Seurat travailla environ deux ans à ce grand tableau, qui mesure à peu près deux mètres sur trois."
    ],
    "fact": "1884–1886. The Art Institute of Chicago."
  },
  "sehonfleur": {
    "text": [
      "Un phare blanc se dresse au port de Honfleur, devant une barque repose sur des tréteaux de bois sur la plage.",
      "Le sable clair et la mer calme sont entièrement peints en petits points."
    ],
    "fact": "1886. National Gallery of Art, Washington."
  },
  "seportenbessin": {
    "text": [
      "Une colline verte descend à pic vers la mer bleue et calme.",
      "Sur l’herbe s’étendent des taches jaunes de soleil et des ombres de nuages."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "seseascape": {
    "text": [
      "Une plage, la mer et le ciel s’étagent en bandes claires et calmes.",
      "Seurat peint autour du petit tableau un cadre bleu foncé fait de points."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "gravelines": {
    "text": [
      "Seurat passa l’été 1890 dans le petit port de Gravelines, sur la mer du Nord.",
      "Le soir, l’eau devient claire, le ciel rose, et tout devant une grande ancre s’appuie sur le quai."
    ],
    "fact": "1890. The Museum of Modern Art (MoMA), New York."
  },
  "segrayweather": {
    "text": [
      "Par un jour gris, des bateaux sont amarrés au bord de la Seine, encadrés par des arbres.",
      "Plus tard, Seurat peint une bordure de points autour du tableau."
    ],
    "fact": "vers 1886–1888. Metropolitan Museum of Art, New York."
  },
  "secircus": {
    "text": [
      "Devant un cirque, un joueur de trombone se produit sous les becs de gaz pour attirer les spectateurs.",
      "C’est le premier tableau où Seurat peint une scène de nuit."
    ],
    "fact": "1887–1888. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
