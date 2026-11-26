// v10.43 FR content for Martin Johnson Heade’s life journey (1819–1904). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "mhthunder": {
    "title": "Orage approchant",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mhwineglass": {
    "title": "Nature morte au verre à vin",
    "museum": "National Gallery of Art, Washington"
  },
  "mhroses": {
    "title": "Roses et héliotrope dans un vase sur un plateau de marbre",
    "museum": "National Gallery of Art, Washington"
  },
  "mhrio": {
    "title": "La Baie de Rio de Janeiro",
    "museum": "National Gallery of Art, Washington"
  },
  "mhcattleya": {
    "title": "Orchidée cattleya et trois colibris",
    "museum": "National Gallery of Art, Washington"
  },
  "mhorchid": {
    "title": "Fleurs d’orchidée",
    "museum": "Musée d’art de Cleveland"
  },
  "mhjudith": {
    "title": "Point Judith, Rhode Island",
    "museum": "Musée d’art de Cleveland"
  },
  "mhyork": {
    "title": "York Harbor, côte du Maine",
    "museum": "Art Institute of Chicago"
  },
  "mhapplevase": {
    "title": "Fleurs de pommier dans un vase",
    "museum": "National Gallery of Art, Washington"
  },
  "mhapple": {
    "title": "Fleurs de pommier",
    "museum": "Musée d’art de Cleveland"
  },
  "mhhumapple": {
    "title": "Colibri et fleurs de pommier",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.heade = {
  "title": "Le parcours de vie de Martin Johnson Heade",
  "part": "New York, le Brésil, la Nouvelle-Angleterre",
  "subtitle": "Orages, orchidées et fleurs de pommier",
  "intro": "Voyage à travers la vie de Martin Johnson Heade : de son atelier de New York aux colibris et aux orchidées du Brésil, sur les côtes de la Nouvelle-Angleterre et jusqu’à ses tableaux de fleurs. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "En 1883, Heade s’installe à St. Augustine, en Floride ; Henry Flagler lui y fournit plus tard un atelier dans l’hôtel Ponce de Leon.",
    "Martin Johnson Heade meurt en 1904 à St. Augustine."
  ],
  "epilogue": "Martin Johnson Heade meurt en 1904. Le parcours mène de New York au Brésil, sur les côtes de la Nouvelle-Angleterre et jusqu’à ses fleurs de pommier.",
  "life": "1819–1904"
};
  P.stations = Object.assign(P.stations || {}, {
  "mhs1": {
    "place": "Un atelier à New York",
    "when": "1859–1862",
    "mapLabel": "New York",
    "intro": [
      "Martin Johnson Heade naît en 1819 à Lumberville, en Pennsylvanie ; il prend ses premières leçons de peinture auprès de son voisin, le peintre Edward Hicks.",
      "En 1859, il s’est installé à New York et occupe un atelier dans le Tenth Street Studio Building, où il se lie d’amitié avec Frederic Edwin Church."
    ]
  },
  "mhs2": {
    "place": "Colibris et orchidées",
    "when": "1864–1873",
    "mapLabel": "Le Brésil et les tropiques",
    "intro": [
      "En 1863, Heade part pour le Brésil afin de peindre des colibris pour un livre en projet, « The Gems of Brazil » ; le livre ne paraît jamais.",
      "Entre 1863 et 1870, il se rend trois fois en Amérique centrale et en Amérique du Sud, puis peint sans cesse des orchidées et des colibris dans des paysages tropicaux."
    ]
  },
  "mhs3": {
    "place": "Clair de lune et ports paisibles",
    "when": "1867–1877",
    "mapLabel": "Rhode Island et le Maine",
    "intro": [
      "Heade est un voyageur infatigable et vit par périodes à New York, Providence, Saint-Louis, La Nouvelle-Orléans et Richmond.",
      "Ses premiers paysages montrent les marais salants de Rhode Island, et il peint sans cesse la lumière et l’atmosphère des côtes de la Nouvelle-Angleterre."
    ]
  },
  "mhs4": {
    "place": "Fleurs de pommier",
    "when": "1867–1875",
    "mapLabel": "New York",
    "intro": [
      "Heade est aujourd’hui considéré comme l’un des rares peintres à exceller autant dans le paysage que dans la nature morte de fleurs.",
      "Il peint des fleurs de pommier dans un vase, en simple branche posée sur une table et sous le ciel ouvert, une fois même avec un colibri."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mhthunder": {
    "text": [
      "Sous un ciel d’orage presque noir, l’eau est sombre et immobile ; seule une voile blanche brille au loin.",
      "Sur la rive, un homme en chemise rouge est assis avec un petit chien blanc ; à gauche, une barque repose sous une toile."
    ],
    "fact": "1859. Metropolitan Museum of Art, New York."
  },
  "mhwineglass": {
    "text": [
      "Dans un verre à vin élancé se dresse un petit bouquet de roses rouges et de fleurs bleues sur un simple fond brun.",
      "En bas à gauche figure l’inscription « M.J. Head / -60 »."
    ],
    "fact": "1860. National Gallery of Art, Washington."
  },
  "mhroses": {
    "text": [
      "Des roses claires et de l’héliotrope violet se tiennent dans un vase blanc sur un plateau de marbre ; à gauche, un rideau entre dans l’image.",
      "En bas à droite, le tableau porte l’inscription « 1862/ M.J. Heade »."
    ],
    "fact": "1862. National Gallery of Art, Washington."
  },
  "mhrio": {
    "text": [
      "Les vagues se brisent sur des rochers sombres ; derrière s’ouvre la baie sous un ciel jaune doré parsemé de nuages blancs.",
      "En bas à gauche figure la signature « M. J. Heade / 1864 » ; le tableau était autrefois aussi connu sous le titre « Brazilian Seascape »."
    ],
    "fact": "1864. National Gallery of Art, Washington."
  },
  "mhcattleya": {
    "text": [
      "Une somptueuse orchidée rose domine le premier plan, la mousse pend des arbres et une brume gris-bleu voile la forêt lointaine.",
      "À droite, près d’un nid, se tiennent trois colibris : un comète Sappho vert à la queue rouge éclatant et deux améthystes du Brésil verts et roses."
    ],
    "fact": "1871. National Gallery of Art, Washington."
  },
  "mhorchid": {
    "text": [
      "Une grande orchidée blanche au labelle rose frangé pend à des tiges vertes au-dessus d’une vallée de forêt sombre et brumeuse.",
      "Lorsque Heade peint ce tableau en 1873, il a déjà fait trois voyages en Amérique centrale et en Amérique du Sud."
    ],
    "fact": "1873. Musée d’art de Cleveland."
  },
  "mhjudith": {
    "text": [
      "C’est l’une des rares scènes nocturnes de Heade : le clair de lune scintille sur l’eau et perce les nuages.",
      "À gauche passent deux voiliers, seule trace de présence humaine dans cette scène paisible."
    ],
    "fact": "1867–1868. Musée d’art de Cleveland."
  },
  "mhyork": {
    "text": [
      "Le soleil luit derrière une brume légère au-dessus d’une baie calme où reposent quelques voiliers.",
      "Le large format horizontal, la touche presque invisible et la lumière omniprésente passent aujourd’hui pour typiques du luminisme."
    ],
    "fact": "1877. Art Institute of Chicago."
  },
  "mhapplevase": {
    "text": [
      "Des branches de fleurs de pommier blanches et roses s’élèvent d’un vase clair et décoré sur un fond sombre.",
      "Le tableau appartint autrefois à Cyrus W. Field, à New York, et il est signé en bas à droite « M.J. Heade 67 »."
    ],
    "fact": "1867. National Gallery of Art, Washington."
  },
  "mhapple": {
    "text": [
      "Une seule branche de fleurs de pommier est posée sur une table et appuyée contre un mur sans ornement.",
      "Heade peint quelque 150 natures mortes de fleurs au cours de sa longue carrière ; il signe celle-ci en bas à gauche « MJ Heade 1873 »."
    ],
    "fact": "1873. Musée d’art de Cleveland."
  },
  "mhhumapple": {
    "text": [
      "Une branche de pommier en fleurs traverse le tableau devant un ciel gris et nuageux.",
      "En bas, un petit colibri vert est perché sur une brindille."
    ],
    "fact": "1875. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
