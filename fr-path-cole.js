// v10.43 FR content for Thomas Cole’s life journey (1801–1848). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "tcsunrise": {
    "title": "Lever de soleil dans les Catskills",
    "museum": "National Gallery of Art, Washington"
  },
  "tcniagara": {
    "title": "Vue lointaine des chutes du Niagara",
    "museum": "Art Institute of Chicago"
  },
  "tctivoli": {
    "title": "Vue près de Tivoli (matin)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcgoblet": {
    "title": "La Coupe du Titan",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcholyokesketch": {
    "title": "Esquisse pour la vue depuis le mont Holyoke",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcoxbow": {
    "title": "Vue depuis le mont Holyoke après un orage – L’Oxbow",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tccatskill": {
    "title": "Vue sur la Catskill au début de l’automne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcflorence": {
    "title": "Vue de Florence",
    "museum": "Musée d’art de Cleveland"
  },
  "tcclouds": {
    "title": "Nuages",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcschroon": {
    "title": "Le mont Schroon après un orage",
    "museum": "Musée d’art de Cleveland"
  },
  "tccoast": {
    "title": "Côte italienne avec une tour en ruine",
    "museum": "National Gallery of Art, Washington"
  },
  "tcnotch": {
    "title": "Le col appelé The Notch, dans les White Mountains",
    "museum": "National Gallery of Art, Washington"
  },
  "tcnewengland": {
    "title": "Paysage de Nouvelle-Angleterre",
    "museum": "Art Institute of Chicago"
  },
  "tcchildhood": {
    "title": "Le Voyage de la vie : l’enfance",
    "museum": "National Gallery of Art, Washington"
  },
  "tcyouth": {
    "title": "Le Voyage de la vie : la jeunesse",
    "museum": "National Gallery of Art, Washington"
  },
  "tccreek": {
    "title": "Étude pour « Catskill Creek »",
    "museum": "National Gallery of Art, Washington"
  },
  "tcford": {
    "title": "Le Gué dans la montagne",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.cole = {
  "title": "Le parcours de vie de Thomas Cole",
  "part": "L’Hudson, les Catskills et l’Italie",
  "subtitle": "Le fondateur de la Hudson River School",
  "intro": "Voyage à travers la vie de Thomas Cole : de l’Angleterre à l’Hudson, dans les monts Catskill et en Italie. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Thomas Cole meurt à Catskill le 11 février 1848, à 47 ans.",
    "Après sa mort, l’American Art-Union de New York organise une grande exposition de ses œuvres."
  ],
  "epilogue": "Thomas Cole meurt à Catskill le 11 février 1848. Le parcours mène de l’Angleterre, par New York et l’Italie, jusqu’aux monts Catskill.",
  "life": "1801–1848"
};
  P.stations = Object.assign(P.stations || {}, {
  "tcs1": {
    "place": "De l’Angleterre à l’Hudson et en Italie",
    "when": "1801–1832",
    "mapLabel": "New York",
    "intro": [
      "Thomas Cole naît à Bolton-le-Moors, en Angleterre, le 1er février 1801 et émigre aux États-Unis avec sa famille en 1818.",
      "En 1825, il s’installe à New York et remonte l’Hudson jusqu’aux monts Catskill ; de 1829 à 1832, il vit et peint en Angleterre, en France et en Italie."
    ]
  },
  "tcs2": {
    "place": "Un atelier à Catskill",
    "when": "1833–1836",
    "mapLabel": "Catskill",
    "intro": [
      "Après son retour, Cole installe un atelier à Cedar Grove, à Catskill.",
      "Le 22 novembre 1836, il y épouse Maria Bartow, et Cedar Grove devient sa maison."
    ]
  },
  "tcs3": {
    "place": "Montagnes, nuages et souvenirs d’Italie",
    "when": "1837–1839",
    "mapLabel": "Nouvelle-Angleterre",
    "intro": [
      "Cole peint les montagnes de New York et de Nouvelle-Angleterre, souvent après un orage ou en automne.",
      "Il peint aussi des vues de Florence et de la côte italienne d’après des esquisses de son voyage."
    ]
  },
  "tcs4": {
    "place": "Le Voyage de la vie",
    "when": "1840–1848",
    "mapLabel": "Catskill",
    "intro": [
      "Cole peint la série « Le Voyage de la vie », où un voyage sur un fleuve représente le chemin d’une vie, et la peint une seconde fois à Rome en 1842.",
      "De retour à Catskill, il prend en 1844 Frederic Edwin Church comme premier élève."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tcsunrise": {
    "text": [
      "Des montagnes sombres sortent de la brume, avec des troncs brisés au premier plan.",
      "Cole peint ce tableau un an après son premier voyage dans les monts Catskill."
    ],
    "fact": "1826. National Gallery of Art, Washington."
  },
  "tcniagara": {
    "text": [
      "L’eau blanche se déverse largement sur les chutes, entourée d’arbres aux couleurs d’automne.",
      "Cole peint ce tableau sur un panneau de bois."
    ],
    "fact": "1830. Art Institute of Chicago."
  },
  "tctivoli": {
    "text": [
      "Une arche envahie de végétation d’une ruine antique se dresse devant des montagnes où passent des nuages.",
      "Cole peint ce tableau en 1832, vers la fin de son séjour en Italie."
    ],
    "fact": "1832. Metropolitan Museum of Art, New York."
  },
  "tcgoblet": {
    "text": [
      "Une coupe de pierre gigantesque se dresse dans un paysage ; des arbres poussent sur son bord et l’eau déborde.",
      "C’est un tableau imaginaire, un paysage qui n’existe nulle part."
    ],
    "fact": "1833. Metropolitan Museum of Art, New York."
  },
  "tcholyokesketch": {
    "text": [
      "Dans cette petite esquisse à l’huile, la rivière, les arbres et la lumière sont déjà là.",
      "Cole y prépare son grand tableau « L’Oxbow »."
    ],
    "fact": "1836. Metropolitan Museum of Art, New York."
  },
  "tcoxbow": {
    "text": [
      "À gauche, l’orage s’éloigne ; à droite s’étend la vallée ensoleillée avec la grande boucle du fleuve.",
      "En bas du tableau, Cole s’est représenté tout petit, en train de peindre la vue."
    ],
    "fact": "1836. Metropolitan Museum of Art, New York."
  },
  "tccatskill": {
    "text": [
      "De grands arbres encadrent une vallée paisible traversée par un ruisseau, avec des montagnes bleues au loin.",
      "La vue part du village de Catskill vers les montagnes, là où Cole vit désormais."
    ],
    "fact": "1836–1837. Metropolitan Museum of Art, New York."
  },
  "tcflorence": {
    "text": [
      "La ville et la grande coupole de sa cathédrale s’étendent dans une lumière chaude entre les collines.",
      "Cole peint ce tableau en Amérique, des années après son séjour à Florence."
    ],
    "fact": "1837. Musée d’art de Cleveland."
  },
  "tcclouds": {
    "text": [
      "Un grand nuage blanc s’élève au-dessus d’une étroite bande de terre.",
      "Cole peint cette étude à l’huile sur papier."
    ],
    "fact": "vers 1838. Metropolitan Museum of Art, New York."
  },
  "tcschroon": {
    "text": [
      "Un sommet sombre domine des forêts d’automne rouges et jaunes, tandis que les nuages s’éloignent.",
      "La montagne se trouve dans le comté d’Essex, dans l’État de New York."
    ],
    "fact": "1838. Musée d’art de Cleveland."
  },
  "tccoast": {
    "text": [
      "Une tour ronde en ruine se dresse sur des rochers au-dessus de la mer calme.",
      "Cole peint aussi ce tableau en Amérique, d’après des souvenirs et des esquisses d’Italie."
    ],
    "fact": "1838. National Gallery of Art, Washington."
  },
  "tcnotch": {
    "text": [
      "Une route traverse des forêts d’automne vers une paroi rocheuse sous des nuages d’orage.",
      "Les White Mountains se trouvent dans le New Hampshire, en Nouvelle-Angleterre."
    ],
    "fact": "1839. National Gallery of Art, Washington."
  },
  "tcnewengland": {
    "text": [
      "Un grand arbre se dresse à gauche, et au-delà s’étend une large vallée dans la lumière du soir, avec un clocher au loin.",
      "Cole montre un paysage calme et habité."
    ],
    "fact": "1839. Art Institute of Chicago."
  },
  "tcchildhood": {
    "text": [
      "Un petit enfant sort d’une grotte sombre dans une barque dorée, vers un paysage vert et fleuri, guidé par un ange.",
      "C’est le premier des quatre tableaux de la série."
    ],
    "fact": "1842. National Gallery of Art, Washington."
  },
  "tcyouth": {
    "text": [
      "Un jeune homme dirige désormais seul sa barque vers un château dans les nuages, tandis que l’ange reste sur la rive.",
      "Le château représente les rêves de la jeunesse."
    ],
    "fact": "1842. National Gallery of Art, Washington."
  },
  "tccreek": {
    "text": [
      "Un ciel du soir aux nuages lumineux s’étend au-dessus d’une terre plate et de montagnes lointaines.",
      "Cole peint cette étude sur bois, pour préparer un tableau plus grand."
    ],
    "fact": "vers 1844–1845. National Gallery of Art, Washington."
  },
  "tcford": {
    "text": [
      "Un cavalier sur un cheval blanc traverse un ruisseau au pied d’une montagne rocheuse.",
      "Cole peint ce tableau deux ans avant sa mort, pendant ses dernières années à Catskill."
    ],
    "fact": "1846. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
