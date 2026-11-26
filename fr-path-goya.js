// v10.43 FR content for Francisco de Goya’s life journey (1746–1828). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Museo del Prado, Madrid": "Museo del Prado, Madrid",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "quitasol": {
    "title": "L’Ombrelle",
    "museum": "Museo del Prado, Madrid"
  },
  "gywinter": {
    "title": "Scène d’hiver",
    "museum": "Art Institute of Chicago"
  },
  "gyram": {
    "title": "Enfant sur un bélier",
    "museum": "Art Institute of Chicago"
  },
  "gyteresa": {
    "title": "María Teresa de Borbón y Vallabriga",
    "museum": "National Gallery of Art, Washington"
  },
  "gypontejos": {
    "title": "La Marquise de Pontejos",
    "museum": "National Gallery of Art, Washington"
  },
  "gyaltamira": {
    "title": "La Comtesse d’Altamira et sa fille María Agustina",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gyosorio": {
    "title": "Manuel Osorio Manrique de Zuñiga",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gymartinez": {
    "title": "Sebastián Martínez y Pérez",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gyambrose": {
    "title": "Saint Ambroise",
    "museum": "Musée d’art de Cleveland"
  },
  "gynoriega": {
    "title": "Don Antonio Noriega",
    "museum": "National Gallery of Art, Washington"
  },
  "gysureda": {
    "title": "Bartolomé Sureda y Miserol",
    "museum": "National Gallery of Art, Washington"
  },
  "gysuredaw": {
    "title": "Thérèse Louise de Sureda",
    "museum": "National Gallery of Art, Washington"
  },
  "gygarcini": {
    "title": "Ignacio Garcini y Queralt, brigadier du génie",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gyjosefa": {
    "title": "Josefa de Castilla Portugal y van Asbrock de Garcini",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gynarcisa": {
    "title": "Narcisa Barañano Gayoso de Goicoechea",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gymantilla": {
    "title": "Jeune femme en mantille et basquine",
    "museum": "National Gallery of Art, Washington"
  },
  "gymaiquez": {
    "title": "Portrait d’Isidoro Máiquez",
    "museum": "Art Institute of Chicago"
  },
  "gysabasa": {
    "title": "Señora Sabasa García",
    "museum": "National Gallery of Art, Washington"
  },
  "gyguye": {
    "title": "Victor Guye",
    "museum": "National Gallery of Art, Washington"
  },
  "gypepito": {
    "title": "José Costa y Bonells, dit Pepito",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gyromero": {
    "title": "Portrait du général José Manuel Romero",
    "museum": "Art Institute of Chicago"
  },
  "gycuervo": {
    "title": "Portrait de don Juan Antonio Cuervo",
    "museum": "Musée d’art de Cleveland"
  },
  "gytiburcio": {
    "title": "Tiburcio Pérez y Cuervo, l’architecte",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.goya = {
  "title": "Le parcours de vie de Francisco de Goya",
  "part": "Des cartons de tapisserie au peintre de la cour",
  "subtitle": "Esquisses, enfants et portraits d’Espagne",
  "intro": "Voyage à travers la vie de Francisco de Goya : des joyeux cartons de tapisserie et des portraits pour la noblesse et la cour jusqu’aux années de guerre à Madrid. Ce parcours est plus court que d’autres, car seuls quelques tableaux de Goya sont disponibles en reproductions libres de musées. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Francisco de Goya meurt à Bordeaux le 16 avril 1828.",
    "Ses portraits montrent les gens de son temps, de l’enfant au général."
  ],
  "epilogue": "Francisco de Goya meurt à Bordeaux le 16 avril 1828. Le parcours mène des cartons de tapisserie, en passant par les portraits pour la noblesse et la cour, à ses dernières années.",
  "life": "1746–1828"
};
  P.stations = Object.assign(P.stations || {}, {
  "goya1": {
    "place": "Madrid : les cartons de tapisserie",
    "when": "1746–1787",
    "mapLabel": "Madrid",
    "intro": [
      "Francisco de Goya naît le 30 mars 1746 à Fuendetodos, près de Saragosse.",
      "À partir de 1775, il peint à Madrid des cartons pour la manufacture royale de tapisseries : des scènes joyeuses de la vie quotidienne."
    ]
  },
  "gys2": {
    "place": "Portraits pour la noblesse",
    "when": "1783–1788",
    "mapLabel": "Madrid",
    "intro": [
      "De plus en plus de familles nobles se font peindre par Goya, souvent avec leurs enfants et leurs chiens.",
      "En 1786, il devient peintre du roi."
    ]
  },
  "gys3": {
    "place": "Peintre de la cour et grave maladie",
    "when": "1789–1799",
    "mapLabel": "Cadix",
    "intro": [
      "En 1789, Goya devient peintre de la cour. En 1792, il tombe gravement malade et se remet à Cadix, chez son ami Sebastián Martínez.",
      "Après la maladie, il est sourd."
    ]
  },
  "gys4": {
    "place": "Portraits à Madrid",
    "when": "1800–1805",
    "mapLabel": "Madrid",
    "intro": [
      "En 1799, Goya devient premier peintre de la cour. Il est désormais le portraitiste le plus recherché d’Espagne.",
      "Il peint des fonctionnaires, des officiers, des marchands et leurs épouses."
    ]
  },
  "gys5": {
    "place": "Les années de guerre",
    "when": "1806–1812",
    "mapLabel": "Madrid",
    "intro": [
      "En 1808, les troupes françaises envahissent l’Espagne. La guerre dure jusqu’en 1814.",
      "Goya reste à Madrid et continue à peindre des portraits, y compris d’enfants."
    ]
  },
  "gys6": {
    "place": "Les dernières années",
    "when": "1814–1828",
    "mapLabel": "Madrid · Bordeaux",
    "intro": [
      "En 1819, Goya achète une maison de campagne près de Madrid, la « Quinta del Sordo ».",
      "En 1824, il s’installe à Bordeaux, en France."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "quitasol": {
    "text": [
      "Un jeune homme tient une ombrelle au-dessus d’une femme assise pour que le soleil ne l’éblouisse pas.",
      "Le tableau est un carton pour une tapisserie du palais royal du Pardo."
    ],
    "fact": "1777. Museo del Prado, Madrid."
  },
  "gywinter": {
    "text": [
      "Des hommes en gros manteaux avancent péniblement dans la neige, un chien les accompagne.",
      "Ce petit tableau est une esquisse pour une tapisserie."
    ],
    "fact": "vers 1786. Art Institute of Chicago."
  },
  "gyram": {
    "text": [
      "Un garçon chevauche joyeusement un bélier sombre.",
      "Ce tableau aussi est un carton de tapisserie."
    ],
    "fact": "1786–1787. Art Institute of Chicago."
  },
  "gyteresa": {
    "text": [
      "Une petite fille en longue robe de cérémonie se tient devant un paysage de montagnes.",
      "Un chien blanc est assis à côté d’elle."
    ],
    "fact": "1783. National Gallery of Art, Washington."
  },
  "gypontejos": {
    "text": [
      "Une jeune femme en robe claire et ample se tient dans un parc.",
      "Un petit carlin est assis à ses pieds."
    ],
    "fact": "vers 1786. National Gallery of Art, Washington."
  },
  "gyaltamira": {
    "text": [
      "Une mère en robe de soie rose est assise sur un canapé et tient sa petite fille sur ses genoux.",
      "L’étoffe rose chatoie dans la lumière."
    ],
    "fact": "1787–1788. Metropolitan Museum of Art, New York."
  },
  "gyosorio": {
    "text": [
      "Un petit garçon en costume rouge tient une pie au bout d’une ficelle.",
      "À gauche, des chats fixent l’oiseau avec attention."
    ],
    "fact": "1787–1788. Metropolitan Museum of Art, New York."
  },
  "gymartinez": {
    "text": [
      "Le négociant Sebastián Martínez est assis dans un habit clair et tient une feuille de papier.",
      "C’est un ami de Goya et un collectionneur de tableaux."
    ],
    "fact": "1792. Metropolitan Museum of Art, New York."
  },
  "gyambrose": {
    "text": [
      "L’évêque Ambroise, coiffé d’une haute mitre blanche, est assis à une table et écrit.",
      "La lumière tombe vivement sur son vêtement blanc."
    ],
    "fact": "vers 1796–1799. Musée d’art de Cleveland."
  },
  "gynoriega": {
    "text": [
      "Un homme en habit sombre est assis à une table couverte de papiers.",
      "C’est un haut fonctionnaire des finances royales."
    ],
    "fact": "1801. National Gallery of Art, Washington."
  },
  "gysureda": {
    "text": [
      "Un jeune homme aux cheveux bouclés tient son chapeau à la main. La doublure brille de rouge.",
      "Son portrait a un pendant : celui de sa femme."
    ],
    "fact": "vers 1803–1804. National Gallery of Art, Washington."
  },
  "gysuredaw": {
    "text": [
      "Une femme en robe bleue est assise dans un fauteuil jaune.",
      "Le bleu intense et le jaune se répondent avec éclat."
    ],
    "fact": "vers 1803–1804. National Gallery of Art, Washington."
  },
  "gygarcini": {
    "text": [
      "Un officier en uniforme sombre se tient devant un fond sombre.",
      "Son portrait a un pendant : celui de sa femme Josefa."
    ],
    "fact": "1804. Metropolitan Museum of Art, New York."
  },
  "gyjosefa": {
    "text": [
      "Une jeune femme en robe claire est assise, ses cheveux clairs dénoués.",
      "Le fond sombre fait briller la robe."
    ],
    "fact": "1804. Metropolitan Museum of Art, New York."
  },
  "gynarcisa": {
    "text": [
      "Une femme en robe sombre et grand chapeau est assise sur une chaise jaune.",
      "Le chapeau sombre s’élève haut au-dessus de sa tête."
    ],
    "fact": "vers 1805. Metropolitan Museum of Art, New York."
  },
  "gymantilla": {
    "text": [
      "Une jeune femme porte une mantille de dentelle blanche sur les cheveux et une jupe noire.",
      "La mantille et la basquine sont des vêtements espagnols de l’époque."
    ],
    "fact": "vers 1800–1805. National Gallery of Art, Washington."
  },
  "gymaiquez": {
    "text": [
      "L’acteur Isidoro Máiquez nous regarde d’un œil vif.",
      "C’est l’un des acteurs les plus célèbres d’Espagne."
    ],
    "fact": "vers 1807. Art Institute of Chicago."
  },
  "gysabasa": {
    "text": [
      "Une jeune femme aux yeux sombres porte un châle jaune vif sur les épaules.",
      "Un voile clair couvre ses cheveux."
    ],
    "fact": "vers 1806–1811. National Gallery of Art, Washington."
  },
  "gyguye": {
    "text": [
      "Un petit garçon en uniforme sombre à brandebourgs dorés tient un livre.",
      "Il se tient très droit et a l’air sérieux."
    ],
    "fact": "1810. National Gallery of Art, Washington."
  },
  "gypepito": {
    "text": [
      "Un petit garçon en pantalon blanc se tient à côté de ses jouets.",
      "Derrière lui se trouve un cheval de bois ; il porte une veste verte."
    ],
    "fact": "vers 1810. Metropolitan Museum of Art, New York."
  },
  "gyromero": {
    "text": [
      "Un homme en uniforme, avec une écharpe rouge et des décorations, nous regarde.",
      "La broderie d’or brille sur l’étoffe sombre."
    ],
    "fact": "vers 1810. Art Institute of Chicago."
  },
  "gycuervo": {
    "text": [
      "L’architecte Juan Antonio Cuervo est assis près d’une table avec un grand plan.",
      "Il porte un uniforme sombre brodé d’or."
    ],
    "fact": "1819. Musée d’art de Cleveland."
  },
  "gytiburcio": {
    "text": [
      "Un homme aux bras croisés et aux manches retroussées nous regarde droit dans les yeux.",
      "Goya le peint sans apparat, comme au travail."
    ],
    "fact": "1820. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
