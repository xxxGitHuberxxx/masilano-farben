// v10.43 FR content for Paul Gauguin’s life journey (1848–1903). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Paris",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "ggtankard": {
    "title": "Nature morte : chope en bois et pichet en métal",
    "museum": "Art Institute of Chicago"
  },
  "ggpeonies": {
    "title": "Nature morte aux pivoines",
    "museum": "National Gallery of Art, Washington"
  },
  "gggleaner": {
    "title": "Une glaneuse bretonne",
    "museum": "National Gallery of Art, Washington"
  },
  "ggkohler": {
    "title": "Madame Alexandre Kohler",
    "museum": "National Gallery of Art, Washington"
  },
  "ggbrittany": {
    "title": "Paysage de Bretagne",
    "museum": "National Gallery of Art, Washington"
  },
  "ggdancing": {
    "title": "Jeunes Bretonnes dansant, Pont-Aven",
    "museum": "National Gallery of Art, Washington"
  },
  "ggcarriere": {
    "title": "Autoportrait dédié à Carrière",
    "museum": "National Gallery of Art, Washington"
  },
  "ggarles": {
    "title": "Arlésiennes (Mistral)",
    "museum": "Art Institute of Chicago"
  },
  "ggselfport": {
    "title": "Autoportrait",
    "museum": "National Gallery of Art, Washington"
  },
  "gghaystacks": {
    "title": "Meules en Bretagne",
    "museum": "National Gallery of Art, Washington"
  },
  "ggpouldu": {
    "title": "Paysage au Pouldu",
    "museum": "National Gallery of Art, Washington"
  },
  "ggcezanne": {
    "title": "Femme devant une nature morte de Cézanne",
    "museum": "Art Institute of Chicago"
  },
  "arearea": {
    "title": "Arearea (Joie)",
    "museum": "Musée d’Orsay, Paris"
  },
  "ggraaurahi": {
    "title": "Te raau rahi (Le Grand Arbre)",
    "museum": "Art Institute of Chicago"
  },
  "gglargetree": {
    "title": "Le Grand Arbre",
    "museum": "Musée d’art de Cleveland"
  },
  "ggtahland": {
    "title": "Paysage tahitien",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ggburao": {
    "title": "Te burao (L’Hibiscus)",
    "museum": "Art Institute of Chicago"
  },
  "ggsiesta": {
    "title": "La Sieste",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gghut": {
    "title": "Case tahitienne",
    "museum": "Art Institute of Chicago"
  },
  "ggfarm": {
    "title": "Une ferme en Bretagne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ggteapot": {
    "title": "Nature morte à la théière et aux fruits",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ggpolynes": {
    "title": "Femme polynésienne avec des enfants",
    "museum": "Art Institute of Chicago"
  },
  "ggtwowomen": {
    "title": "Deux femmes",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ggfan": {
    "title": "Projet d’éventail avec un paysage et une statue de la déesse Hina",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.gauguin = {
  "title": "Le parcours de vie de Paul Gauguin",
  "part": "De Paris à Tahiti, en passant par la Bretagne",
  "subtitle": "Natures mortes, Bretagne et mers du Sud",
  "intro": "Voyage à travers la vie de Paul Gauguin : du peintre du dimanche à Paris jusqu’à Tahiti, en passant par la Bretagne et Arles. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Paul Gauguin meurt le 8 mai 1903 sur l’île de Hiva Oa.",
    "Ses couleurs vives et en aplats marquent de nombreux peintres après lui."
  ],
  "epilogue": "Paul Gauguin meurt le 8 mai 1903 sur l’île de Hiva Oa. Le parcours mène des natures mortes de Paris aux mers du Sud, en passant par la Bretagne et Arles.",
  "life": "1848–1903"
};
  P.stations = Object.assign(P.stations || {}, {
  "ggs1": {
    "place": "Paris : peintre du dimanche",
    "when": "1848–1885",
    "mapLabel": "Paris",
    "intro": [
      "Paul Gauguin naît à Paris le 7 juin 1848 et passe quelques années de son enfance au Pérou.",
      "Jeune homme, il travaille à la Bourse de Paris et peint pendant son temps libre."
    ]
  },
  "ggs2": {
    "place": "Pont-Aven, en Bretagne",
    "when": "1886–1888",
    "mapLabel": "Bretagne",
    "intro": [
      "En 1883, Gauguin quitte son emploi et devient peintre.",
      "À partir de 1886, il peint à Pont-Aven, un village de Bretagne où vivent de nombreux artistes."
    ]
  },
  "ggs3": {
    "place": "Arles avec Van Gogh",
    "when": "1888",
    "mapLabel": "Arles",
    "intro": [
      "En octobre 1888, Gauguin part pour Arles, dans le sud de la France, rejoindre Vincent van Gogh.",
      "Les deux peignent ensemble environ deux mois, puis se séparent après une dispute."
    ]
  },
  "ggs4": {
    "place": "Le Pouldu, au bord de la mer",
    "when": "1889–1890",
    "mapLabel": "Bretagne",
    "intro": [
      "De retour en Bretagne, Gauguin s’installe dans le petit village côtier du Pouldu.",
      "Il peint des champs, des meules et lui-même, avec des couleurs de plus en plus vives."
    ]
  },
  "gauguin1": {
    "place": "Tahiti",
    "when": "1891–1893",
    "mapLabel": "Tahiti",
    "intro": [
      "En 1891, Gauguin part pour Tahiti, en quête d’une vie loin de la grande ville moderne.",
      "Il peint de grands arbres, des cases et les habitants de l’île dans des couleurs éclatantes."
    ]
  },
  "ggs6": {
    "place": "De nouveau en France",
    "when": "1893–1895",
    "mapLabel": "Bretagne",
    "intro": [
      "En 1893, Gauguin revient en France et expose à Paris ses tableaux de Tahiti.",
      "Il peint aussi de nouveau en Bretagne."
    ]
  },
  "ggs7": {
    "place": "De retour dans les mers du Sud",
    "when": "1895–1903",
    "mapLabel": "Tahiti · Hiva Oa",
    "intro": [
      "En 1895, Gauguin quitte l’Europe pour toujours et vit de nouveau à Tahiti.",
      "En 1901, il s’installe sur l’île de Hiva Oa, aux Marquises."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ggtankard": {
    "text": [
      "Une chope en bois à couvercle et un petit pichet en métal sont posés sur une table.",
      "Gauguin peint ce tableau alors qu’il travaille encore à la Bourse."
    ],
    "fact": "1880. Art Institute of Chicago."
  },
  "ggpeonies": {
    "text": [
      "Un bouquet de pivoines rouges et roses est posé dans un vase devant un mur bleu clair.",
      "Deux petits tableaux sont accrochés au mur derrière."
    ],
    "fact": "1884. National Gallery of Art, Washington."
  },
  "gggleaner": {
    "text": [
      "Une paysanne coiffée d’un bonnet blanc se penche très en avant.",
      "La feuille est divisée en carrés, ainsi Gauguin peut reporter la figure avec précision dans un autre tableau."
    ],
    "fact": "1886. National Gallery of Art, Washington."
  },
  "ggkohler": {
    "text": [
      "Une femme en robe grise est assise devant un fond rouge.",
      "Elle a posé les mains sur ses genoux et regarde de côté."
    ],
    "fact": "1887–1888. National Gallery of Art, Washington."
  },
  "ggbrittany": {
    "text": [
      "Un ruisseau tranquille reflète les collines et les arbres.",
      "Le ciel est clair, presque blanc."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "ggdancing": {
    "text": [
      "Trois jeunes filles en costume breton dansent main dans la main dans un pré.",
      "À droite court un petit chien, à gauche se dresse un clocher."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "ggcarriere": {
    "text": [
      "Gauguin se peint avec des cheveux épais et un pull jaune rayé.",
      "En haut à gauche figure une dédicace à son ami, le peintre Eugène Carrière."
    ],
    "fact": "1888 ou 1889. National Gallery of Art, Washington."
  },
  "ggarles": {
    "text": [
      "Des femmes d’Arles traversent un jardin, enveloppées dans des châles sombres.",
      "Le mistral du titre est un vent froid du sud de la France."
    ],
    "fact": "1888. Art Institute of Chicago."
  },
  "ggselfport": {
    "text": [
      "Gauguin se représente avec une auréole au-dessus de la tête, à côté pendent des pommes.",
      "Il tient un petit serpent entre ses doigts."
    ],
    "fact": "1889. National Gallery of Art, Washington."
  },
  "gghaystacks": {
    "text": [
      "De grandes meules se dressent dans des champs aux nombreux tons de vert et de jaune.",
      "Au premier plan, on voit des vaches."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "ggpouldu": {
    "text": [
      "Des collines, des champs et de petites maisons s’étendent sous un vaste ciel.",
      "Le Pouldu est un village de la côte bretonne."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "ggcezanne": {
    "text": [
      "Une femme en chemisier rose est assise sur une chaise et nous regarde.",
      "Derrière elle est accrochée une nature morte aux fruits de Paul Cézanne."
    ],
    "fact": "1890. Art Institute of Chicago."
  },
  "arearea": {
    "text": [
      "Deux femmes tahitiennes sont assises dans une prairie ; devant elles, un chien rouge.",
      "L’une d’elles joue de la flûte ; à l’arrière-plan, des femmes vénèrent une figure de dieu."
    ],
    "fact": "1892. Musée d’Orsay, Paris."
  },
  "ggraaurahi": {
    "text": [
      "Sous de grands arbres, des gens sont assis dans l’herbe ; devant, un animal est couché.",
      "À l’arrière-plan, une case se dresse entre palmiers et buissons."
    ],
    "fact": "1891. Art Institute of Chicago."
  },
  "gglargetree": {
    "text": [
      "Devant une longue case, des gens debout et assis se tiennent sous un grand arbre.",
      "Le sol rougeoie entre les troncs."
    ],
    "fact": "1891. Musée d’art de Cleveland."
  },
  "ggtahland": {
    "text": [
      "Deux femmes marchent le long d’un chemin, à côté broute un cheval.",
      "Derrière s’élèvent des montagnes vertes."
    ],
    "fact": "1892. Metropolitan Museum of Art, New York."
  },
  "ggburao": {
    "text": [
      "Au premier plan s’étendent les branches entrelacées d’un hibiscus.",
      "Derrière, on voit des cases, des arbres et un bout de mer."
    ],
    "fact": "1892. Art Institute of Chicago."
  },
  "ggsiesta": {
    "text": [
      "Des femmes se reposent sur une véranda ombragée dans la chaleur de midi.",
      "Une femme au chapeau de paille est assise de dos."
    ],
    "fact": "vers 1892–1894. Metropolitan Museum of Art, New York."
  },
  "gghut": {
    "text": [
      "Une case au toit de chaume se dresse entre les arbres, devant elle une personne est assise.",
      "Gauguin peint cette feuille à l’aquarelle."
    ],
    "fact": "1891–1893. Art Institute of Chicago."
  },
  "ggfarm": {
    "text": [
      "Les toits rouges de maisons de ferme brillent entre des arbres sombres.",
      "À l’arrière-plan se dressent de grands arbres élancés."
    ],
    "fact": "vers 1894. Metropolitan Museum of Art, New York."
  },
  "ggteapot": {
    "text": [
      "Une théière bleue, des fruits et une cuillère sont posés sur un linge blanc.",
      "Sur le mur bleu foncé derrière brillent des fleurs jaunes."
    ],
    "fact": "1896. Metropolitan Museum of Art, New York."
  },
  "ggpolynes": {
    "text": [
      "Une femme âgée en robe bleue tient un petit enfant sur ses genoux.",
      "À côté d’elle se tient une fillette en robe rose."
    ],
    "fact": "1901. Art Institute of Chicago."
  },
  "ggtwowomen": {
    "text": [
      "Deux femmes sont assises côte à côte, l’une en bleu, l’autre en orange.",
      "Derrière elles poussent des plantes aux grandes feuilles."
    ],
    "fact": "1901 ou 1902. Metropolitan Museum of Art, New York."
  },
  "ggfan": {
    "text": [
      "Un paysage coloré remplit la feuille courbe, au centre se dresse la statue d’une déesse.",
      "Gauguin peint le projet à l’aquarelle et à la gouache."
    ],
    "fact": "1900–1903. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
