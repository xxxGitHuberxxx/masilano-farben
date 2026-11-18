// v10.23 FR content for Anna Ancher’s life journey, Part 1 (1859–1935). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Standort ohne Angabe": "Lieu non indiqué",
  "Skagens Museum": "Musée de Skagen"
});
  P.works = Object.assign(P.works || {}, {
  "aagulls": {
    "title": "Vieux couple plumant des mouettes",
    "museum": "Lieu non indiqué"
  },
  "aablind": {
    "title": "Une femme aveugle dans sa chambre",
    "museum": "Lieu non indiqué"
  },
  "aamaid": {
    "title": "La Servante dans la cuisine",
    "museum": "Lieu non indiqué"
  },
  "aaoldwoman": {
    "title": "Une vieille femme dans sa chambre",
    "museum": "Lieu non indiqué"
  },
  "aasunlight": {
    "title": "Soleil dans la chambre bleue",
    "museum": "Lieu non indiqué"
  },
  "aahedvig": {
    "title": "Portrait d’Ane Hedvig Brøndum",
    "museum": "Musée de Skagen"
  },
  "aamoeller": {
    "title": "Valdemar Schønheyder Møller",
    "museum": "Lieu non indiqué"
  },
  "aaharvest": {
    "title": "Les Moissonneurs",
    "museum": "Lieu non indiqué"
  },
  "aabrother": {
    "title": "Le Petit Frère",
    "museum": "Lieu non indiqué"
  },
  "aasew": {
    "title": "Deux fillettes apprennent à coudre",
    "museum": "Lieu non indiqué"
  },
  "aaclematis": {
    "title": "Intérieur aux clématites",
    "museum": "Lieu non indiqué"
  },
  "aablue": {
    "title": "Mme Ane Brøndum dans la chambre bleue",
    "museum": "Lieu non indiqué"
  },
  "aaannex": {
    "title": "Intérieur. L’annexe de Brøndum",
    "museum": "Lieu non indiqué"
  }
});
  P.paths = P.paths || {};
  P.paths.ancher = {
  "title": "Le parcours de vie d’Anna Ancher",
  "life": "1859–1935",
  "part": "Partie 1 · La lumière dans les chambres de Skagen",
  "subtitle": "Skagen, la chambre bleue et ses habitants",
  "intro": "Voyage avec Anna Ancher, la peintre de Skagen, à la pointe nord du Danemark : des vieux pêcheurs à la cuisine et à la chambre, jusqu’au soleil dans la chambre bleue. De courtes étapes et des tableaux à colorier. Cette première partie suit son regard sur la lumière intérieure.",
  "ending": [
    "Anna Ancher meurt le 15 avril 1935 à Skagen, où elle a passé toute sa vie. Elle compte parmi les grandes peintres du Danemark.",
    "Le chemin peut encore s’allonger. D’autres portraits, pastels et paysages pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "Le 15 avril 1935, Anna Ancher meurt à Skagen. Une partie ultérieure pourra ajouter d’autres portraits et pastels."
};
  P.stations = Object.assign(P.stations || {}, {
  "aaskagen": {
    "place": "Skagen · Premiers tableaux",
    "when": "1859–1884",
    "mapLabel": "Skagen",
    "intro": [
      "Anna Brøndum naît à Skagen le 18 août 1859. Ses parents y tiennent une auberge où logent de nombreux peintres.",
      "En 1880, elle épouse le peintre Michael Ancher et peint les vieux pêcheurs de son village."
    ]
  },
  "aakueche": {
    "place": "Cuisine et chambre",
    "when": "1883–1888",
    "mapLabel": "Chambres",
    "intro": [
      "En 1883 naît sa fille Helga. Ancher continue de peindre dans les petites pièces de Skagen.",
      "La lumière des fenêtres et des portes devient sa marque."
    ]
  },
  "aablau": {
    "place": "La chambre bleue",
    "when": "1889–1893",
    "mapLabel": "Chambre bleue",
    "intro": [
      "En 1889, Ancher étudie à Paris auprès de Pierre Puvis de Chavannes. Ensuite, sa couleur devient plus claire.",
      "Dans la chambre bleue de la maison de ses parents, elle peint sa fille, sa mère et des hôtes."
    ]
  },
  "aaarbeit": {
    "place": "Travail et enfants",
    "when": "1905–1910",
    "mapLabel": "Champs",
    "intro": [
      "Après 1900, Ancher peint aussi en plein air, dans les champs près de Skagen. Les enfants et le travail quotidien restent importants.",
      "Sa manière devient plus libre et plus forte."
    ]
  },
  "aaspaet": {
    "place": "Intérieurs tardifs",
    "when": "1913–1935",
    "mapLabel": "Hôtel",
    "intro": [
      "Dans ses dernières années, Ancher peint des intérieurs clairs et libres, pleins de fleurs et de soleil.",
      "Elle reste à Skagen jusqu’à sa mort en 1935."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "aagulls": {
    "text": [
      "Lars Gaihede et la vieille Lene sont assis ensemble et plument des mouettes. Le travail est simple, la lumière calme.",
      "Anna Ancher peint les gens de Skagen, qu’elle connaît depuis l’enfance."
    ],
    "fact": "1883. Lieu non indiqué."
  },
  "aablind": {
    "text": [
      "Une femme aveugle est assise dans sa chambre, la lumière tombe de la fenêtre sur son visage et ses mains.",
      "Ancher peint la dignité et le calme, sans étaler la pitié."
    ],
    "fact": "1883. Lieu non indiqué."
  },
  "aamaid": {
    "text": [
      "Une jeune femme se tient dans la cuisine, une lumière vive entre par la fenêtre derrière elle. Elle nous tourne le dos.",
      "Le tableau montre combien tôt Ancher fait de la lumière dans la pièce son vrai sujet."
    ],
    "fact": "1883–1886. Lieu non indiqué."
  },
  "aaoldwoman": {
    "text": [
      "Une vieille femme est assise en silence dans sa petite chambre. Les meubles, le mur et la lumière racontent une longue vie.",
      "Ancher revient sans cesse à ces intérieurs paisibles."
    ],
    "fact": "1888. Lieu non indiqué."
  },
  "aasunlight": {
    "text": [
      "Une fillette est assise dans la chambre bleue et fait du crochet, le soleil dessine un motif clair sur le mur et le sol. C’est l’un des tableaux les plus célèbres d’Ancher.",
      "Sa fille Helga lui sert de modèle."
    ],
    "fact": "1891. Lieu non indiqué."
  },
  "aahedvig": {
    "text": [
      "Ane Hedvig Brøndum est la mère d’Anna Ancher. Avec son mari, elle tenait l’auberge de Skagen.",
      "Pendant de longues années, sa mère devient l’un de ses modèles les plus importants."
    ],
    "fact": "1893. Musée de Skagen."
  },
  "aamoeller": {
    "text": [
      "Un jeune homme est assis dans la lumière d’une pièce. Ancher le peint calmement et avec attention.",
      "Ses portraits aussi vivent de la lumière et de l’espace."
    ],
    "fact": "1893. Lieu non indiqué."
  },
  "aaharvest": {
    "text": [
      "Des moissonneurs se tiennent dans la claire lumière d’été au champ. Pour une fois, Ancher peint en plein air et en grand format.",
      "Les couleurs sont vives et libres."
    ],
    "fact": "1905. Lieu non indiqué."
  },
  "aabrother": {
    "text": [
      "Une fillette s’occupe de son petit frère. La scène est quotidienne et tendre.",
      "Les enfants et la famille comptent parmi les motifs préférés d’Ancher."
    ],
    "fact": "1905. Lieu non indiqué."
  },
  "aasew": {
    "text": [
      "Deux fillettes apprennent à coudre près de la fenêtre. La lumière tombe sur les mains et l’étoffe.",
      "Ancher montre les tâches calmes du quotidien avec une grande attention."
    ],
    "fact": "vers 1910. Lieu non indiqué."
  },
  "aaclematis": {
    "text": [
      "Une femme se tient dans une pièce claire, des clématites fleurissent à la fenêtre. Les couleurs et la lumière paraissent fraîches.",
      "Dans ses dernières années, les intérieurs d’Ancher deviennent plus libres et plus colorés."
    ],
    "fact": "1913. Lieu non indiqué."
  },
  "aablue": {
    "text": [
      "La mère âgée est assise dans la chambre bleue, la pièce qu’Ancher a si souvent peinte.",
      "Vingt ans après le premier portrait, la fille revient vers elle."
    ],
    "fact": "1913. Lieu non indiqué."
  },
  "aaannex": {
    "text": [
      "Une pièce calme dans l’annexe de l’hôtel Brøndum, le soleil sur les meubles et le mur. Personne n’y est.",
      "Dans l’œuvre tardive, la lumière elle-même devient l’unique habitante du tableau."
    ],
    "fact": "vers 1920. Lieu non indiqué."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
