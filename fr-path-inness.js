// v10.43 FR content for George Inness’s life journey (1825–1894). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "incrossing": {
    "title": "Le passage du gué",
    "museum": "Art Institute of Chicago"
  },
  "inoldmill": {
    "title": "Le vieux moulin",
    "museum": "Art Institute of Chicago"
  },
  "inwoodchop": {
    "title": "Le bûcheron",
    "museum": "Musée d’art de Cleveland"
  },
  "indurham": {
    "title": "Durham, Connecticut",
    "museum": "Musée d’art de Cleveland"
  },
  "inwatergap": {
    "title": "Delaware Water Gap",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "inwintersky": {
    "title": "Un ciel d’hiver",
    "museum": "Musée d’art de Cleveland"
  },
  "insummercats": {
    "title": "L’été dans les Catskills",
    "museum": "Art Institute of Chicago"
  },
  "inharvestdel": {
    "title": "Scène de moisson dans la vallée du Delaware",
    "museum": "National Gallery of Art, Washington"
  },
  "incatskill": {
    "title": "Les monts Catskill",
    "museum": "Art Institute of Chicago"
  },
  "inalban": {
    "title": "Orage approchant des monts Albains",
    "museum": "Musée d’art de Cleveland"
  },
  "incampagna": {
    "title": "À travers la campagne romaine",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "intivoli": {
    "title": "Oliviers à Tivoli",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "inbarberini": {
    "title": "Pinède de la villa Barberini",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "inetretat": {
    "title": "Colline à Étretat",
    "museum": "National Gallery of Art, Washington"
  },
  "infleecy": {
    "title": "Nuages floconneux",
    "museum": "Musée d’art de Cleveland"
  },
  "insisters": {
    "title": "Les sœurs",
    "museum": "Art Institute of Chicago"
  },
  "inmillpond": {
    "title": "L’étang du moulin",
    "museum": "Art Institute of Chicago"
  },
  "intarpon": {
    "title": "Petit matin, Tarpon Springs",
    "museum": "Art Institute of Chicago"
  },
  "insunnyautumn": {
    "title": "Journée ensoleillée d’automne",
    "museum": "Musée d’art de Cleveland"
  },
  "inshower": {
    "title": "Après une averse d’été",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.inness = {
  "title": "Le parcours de vie de George Inness",
  "part": "New York, la Nouvelle-Angleterre, l’Italie et Montclair",
  "subtitle": "La lumière, les nuages et la campagne ouverte",
  "intro": "Voyage à travers la vie de George Inness : des vallées près de New York à Montclair, dans le New Jersey, en passant par la Nouvelle-Angleterre et l’Italie. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "George Inness meurt en 1894 lors d’un voyage en Écosse.",
    "En une cinquantaine d’années, il a créé plus de mille œuvres."
  ],
  "epilogue": "George Inness meurt en 1894. Le parcours mène de New York, par la Nouvelle-Angleterre, Rome et la Normandie, jusqu’à Montclair.",
  "life": "1825–1894"
};
  P.stations = Object.assign(P.stations || {}, {
  "ins1": {
    "place": "Premiers paysages près de New York",
    "when": "1848–1858",
    "mapLabel": "New York",
    "intro": [
      "George Inness naît en 1825 à Newburgh, dans l’État de New York, et grandit à New York et à Newark ; en 1844, il expose pour la première fois à la National Academy of Design.",
      "En 1851, il se rend pour la première fois en Italie, à Rome et à Florence ; plus tard, en France, il découvre les tableaux des peintres de Barbizon."
    ]
  },
  "ins2": {
    "place": "Medfield et Eagleswood",
    "when": "1861–1870",
    "mapLabel": "Nouvelle-Angleterre",
    "intro": [
      "En juin 1860, Inness s’installe à Medfield, dans le Massachusetts ; à l’automne 1863, il devient professeur de dessin à Eagleswood, dans le New Jersey, où Louis Comfort Tiffany compte parmi ses élèves.",
      "Les enseignements du penseur suédois Emanuel Swedenborg marquent de plus en plus sa foi et son art."
    ]
  },
  "ins3": {
    "place": "Rome, la campagne romaine et la Normandie",
    "when": "1871–1876",
    "mapLabel": "Italie et France",
    "intro": [
      "En 1870, Inness part avec sa famille pour quatre ans en Europe ; à Rome, il loue un atelier via Sistina, que Claude Lorrain aurait déjà occupé.",
      "Il passe l’été 1874 en Normandie ; ensuite, à Boston, il peint des tableaux inspirés par son séjour en Italie."
    ]
  },
  "ins4": {
    "place": "Montclair, Milton et Nantucket",
    "when": "1881–1889",
    "mapLabel": "Montclair",
    "intro": [
      "En juin 1878, Inness loue une propriété à Montclair, dans le New Jersey ; au début des années 1880, il passe quelques étés à Milton, dans le Massachusetts, et à Nantucket.",
      "En décembre 1884, il achète la propriété de Montclair et s’y installe définitivement en février 1885, tout en gardant son atelier à New York."
    ]
  },
  "ins5": {
    "place": "Des tableaux tardifs pleins de lumière",
    "when": "1892–1894",
    "mapLabel": "Montclair et la Floride",
    "intro": [
      "Depuis Montclair, Inness voyage beaucoup, souvent pour sa santé, aux chutes du Niagara, en Virginie, en Californie et à Tarpon Springs, en Floride.",
      "Dans ses tableaux tardifs, les formes se dissolvent dans la lumière et les couleurs translucides."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "incrossing": {
    "text": [
      "Sous de grands arbres, un homme traverse à cheval une rivière peu profonde, tandis que des vaches passent l’eau à gué à côté de lui.",
      "La signature « Geo. Inness 1848 » figure au revers de la toile."
    ],
    "fact": "1848. Art Institute of Chicago."
  },
  "inoldmill": {
    "text": [
      "Un moulin rouge, vivement éclairé, se dresse au bord d’un ruisseau ; devant, on aperçoit de petites silhouettes, entourées d’arbres sombres.",
      "Inness aime peindre la campagne cultivée plutôt que la nature sauvage ; le vieux moulin évoque la vie rurale paisible et, en même temps, les changements apportés par l’industrie."
    ],
    "fact": "1849. Art Institute of Chicago."
  },
  "inwoodchop": {
    "text": [
      "Un puissant bouquet d’arbres s’élève au-dessus d’un sol rocheux ; derrière s’ouvre une vallée aux collines bleues.",
      "Inness signe le tableau en bas à gauche « G. Inness 1849 »."
    ],
    "fact": "1849. Musée d’art de Cleveland."
  },
  "indurham": {
    "text": [
      "Des moutons paissent dans une vaste prairie devant une rangée d’arbres ; au premier plan, on aperçoit une silhouette vêtue de rouge dans l’herbe.",
      "Sous la signature visible, l’infrarouge en révèle une seconde : « G. Inness 1858 »."
    ],
    "fact": "1858. Musée d’art de Cleveland."
  },
  "inwatergap": {
    "text": [
      "Un arc-en-ciel s’élève au-dessus du Delaware ; des vaches boivent sur la rive et une barque glisse sur l’eau.",
      "Le tableau naît peu après l’installation à Medfield ; sa touche expressive et ses riches glacis montrent ce qu’Inness a appris de la peinture de Barbizon et de la peinture hollandaise."
    ],
    "fact": "1861. Metropolitan Museum of Art, New York."
  },
  "inwintersky": {
    "text": [
      "Au-dessus d’une terre dépouillée et gelée brille un ciel du soir rose et jaune ; la lumière chaude s’oppose au bleu froid du sol.",
      "À l’origine, une figure se tenait au bord gauche de l’étang ; Inness l’a ensuite recouverte de peinture."
    ],
    "fact": "1866. Musée d’art de Cleveland."
  },
  "insummercats": {
    "text": [
      "Des vaches paissent dans un pré d’un vert éclatant ; derrière s’élève une longue montagne bleue.",
      "Un grand arbre isolé et une ferme se dressent dans la claire lumière d’été."
    ],
    "fact": "1867. Art Institute of Chicago."
  },
  "inharvestdel": {
    "text": [
      "Par une trouée dans les nuages, la lumière tombe sur les vastes champs de la vallée.",
      "En 1989, le Walker Art Center vend le tableau pour créer, avec le produit de la vente, un fonds d’achat d’art contemporain."
    ],
    "fact": "1867. National Gallery of Art, Washington."
  },
  "incatskill": {
    "text": [
      "Une église, des champs soigneusement cultivés et une meule de foin montrent une terre façonnée par les hommes.",
      "Au milieu du XIXe siècle, les Catskills sont la destination touristique favorite de l’Amérique, proches des villes et riches en vastes panoramas."
    ],
    "fact": "1870. Art Institute of Chicago."
  },
  "inalban": {
    "text": [
      "De lourds nuages gris s’avancent sur la plaine ; au premier plan, on aperçoit de petites silhouettes sur un chemin.",
      "Inness signe le tableau « Rome 1871 » ; il le peint donc pendant ses années romaines."
    ],
    "fact": "1871. Musée d’art de Cleveland."
  },
  "incampagna": {
    "text": [
      "Sous un vaste ciel bleu s’étend la plaine verte de la campagne romaine ; à l’horizon se dressent des maisons rouges et des pins parasols.",
      "La feuille est peinte à l’aquarelle et à la gouache ; des formes vigoureuses et de délicats lavis de couleur s’y conjuguent."
    ],
    "fact": "1872. Metropolitan Museum of Art, New York."
  },
  "intivoli": {
    "text": [
      "Des oliviers se dressent sur une pente au pied de laquelle une vaste plaine claire s’étend jusqu’à l’horizon.",
      "Inness peint la feuille à la gouache et à l’aquarelle sur un papier bleu parsemé de fibres colorées."
    ],
    "fact": "1873. Metropolitan Museum of Art, New York."
  },
  "inbarberini": {
    "text": [
      "De grands pins parasols forment un bosquet sombre devant un ciel clair et chaud.",
      "Inness peint ce grand tableau à Boston en 1876, inspiré par son séjour en Italie."
    ],
    "fact": "1876. Metropolitan Museum of Art, New York."
  },
  "inetretat": {
    "text": [
      "Une femme en coiffe blanche mène des moutons le long d’un chemin sur la colline boisée, tandis que des vaches paissent à côté.",
      "Étretat se trouve sur la côte normande ; en 1879, le tableau est vendu aux enchères à New York sous le titre « Etretat, Coast of France »."
    ],
    "fact": "1876. National Gallery of Art, Washington."
  },
  "infleecy": {
    "text": [
      "Un chemin de campagne s’enfonce au loin entre des pierres et des arbres ; au-dessus passent des nuages blancs et gris.",
      "Inness signe le tableau sobrement : « G. Inness / 81 »."
    ],
    "fact": "1881. Musée d’art de Cleveland."
  },
  "insisters": {
    "text": [
      "Deux jeunes femmes se tiennent l’une contre l’autre dans un jardin ; derrière elles, un arrosoir est posé dans l’herbe.",
      "Ce petit tableau est inhabituel chez Inness, qui peint presque uniquement des paysages ; il est peint à l’huile sur carton."
    ],
    "fact": "1882. Art Institute of Chicago."
  },
  "inmillpond": {
    "text": [
      "Un arbre d’un orange éclatant se dresse au bord d’un étang paisible, sur lequel une petite silhouette rame au loin dans une barque.",
      "Des orange, des verts et des bleus intenses animent la scène paisible ; Inness raconte davantage par la couleur et l’atmosphère que par le détail."
    ],
    "fact": "1889. Art Institute of Chicago."
  },
  "intarpon": {
    "text": [
      "Dans les tendres roses et bleus du lever du soleil, une minuscule silhouette au chapeau rouge se tient parmi de grands arbres élancés.",
      "La lumière et le paysage de Floride ont inspiré ce tableau à Inness."
    ],
    "fact": "1892. Art Institute of Chicago."
  },
  "insunnyautumn": {
    "text": [
      "Des arbres d’automne jaunes et rouges se dressent dans une prairie, leurs formes se brouillant dans la lumière translucide.",
      "Le tableau montre le style tardif d’Inness, où le paysage ressemble presque à une apparition."
    ],
    "fact": "1892. Musée d’art de Cleveland."
  },
  "inshower": {
    "text": [
      "Au-dessus d’une prairie d’un vert frais aux arbres arrondis, les nuages de pluie s’éloignent et un arc-en-ciel apparaît à droite.",
      "Inness signe le tableau en bas à droite « G. Inness 1894 »."
    ],
    "fact": "1894. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
