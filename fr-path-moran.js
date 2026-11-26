// v10.43 FR content for Thomas Moran’s life journey (1837–1926). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Cooper Hewitt, Smithsonian Design Museum, New York": "Cooper Hewitt, Smithsonian Design Museum, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Smithsonian American Art Museum, Washington": "Smithsonian American Art Museum, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "tmecclesbourne": {
    "title": "Falaises d’Ecclesbourne près de Hastings",
    "museum": "National Gallery of Art, Washington"
  },
  "tmjuniata": {
    "title": "La Juniata, le soir",
    "museum": "National Gallery of Art, Washington"
  },
  "tmtowerfalls": {
    "title": "Au-dessus des chutes Tower, Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmtower": {
    "title": "Tour aux chutes Tower, Yellowstone",
    "museum": "National Gallery of Art, Washington"
  },
  "tmmammoth": {
    "title": "Mammoth Hot Springs, Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmminerva": {
    "title": "Terrasse Minerva, Yellowstone",
    "museum": "National Gallery of Art, Washington"
  },
  "tmexcelsior": {
    "title": "Geyser Excelsior, parc de Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmgardiner": {
    "title": "Sources chaudes de la Gardiner, Yellowstone",
    "museum": "National Gallery of Art, Washington"
  },
  "tmsierras": {
    "title": "Sommet de la Sierra",
    "museum": "Art Institute of Chicago"
  },
  "tmhalfdome": {
    "title": "Half Dome, Yosemite",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmgodland": {
    "title": "Shin-Au-Av-Tu-Weap (Terre de Dieu), canyon du Colorado",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmpowell": {
    "title": "Vue depuis le plateau de Powell, Grand Canyon",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmriovirgin": {
    "title": "Falaises du Rio Virgin, sud de l’Utah",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmvirgincanyon": {
    "title": "Canyon du Rio Virgin, sud de l’Utah",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmfortgeorge": {
    "title": "Île Fort George, Floride",
    "museum": "Musée d’art de Cleveland"
  },
  "tmtetons": {
    "title": "Les Tetons, Idaho",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmruby": {
    "title": "La chaîne Ruby, Nevada",
    "museum": "Musée d’art de Cleveland"
  },
  "tmcottonwood": {
    "title": "Le haut du canyon Little Cottonwood, chaîne Wasatch",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmgreenriver": {
    "title": "Green River, territoire du Wyoming",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmgreencliffs": {
    "title": "Falaises de la Green River, Wyoming",
    "museum": "National Gallery of Art, Washington"
  },
  "tmupperco": {
    "title": "Falaises du haut Colorado, territoire du Wyoming",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmsanfrancisco": {
    "title": "Près de San Francisco, Mexique",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmsea": {
    "title": "La Mer retentissante",
    "museum": "National Gallery of Art, Washington"
  },
  "tmhacienda": {
    "title": "Une hacienda mexicaine, lac de Cuitzeo",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmvenice88": {
    "title": "Vue de Venise",
    "museum": "National Gallery of Art, Washington"
  },
  "tmholycross": {
    "title": "Montagne de la Sainte-Croix",
    "museum": "National Gallery of Art, Washington"
  },
  "tmvenice91": {
    "title": "Une vue de Venise",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmkanab": {
    "title": "Brume dans le canyon Kanab, Utah",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmhotsprings": {
    "title": "Sources chaudes, Yellowstone",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmsmelting": {
    "title": "Fonderie à Denver",
    "museum": "Musée d’art de Cleveland"
  },
  "tmtoltec": {
    "title": "Gorge Toltec et Eva Cliff vus de l’ouest, Colorado",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmgrandcanyon": {
    "title": "Le Grand Canyon de la Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmrainbow": {
    "title": "Arc-en-ciel sur le Grand Canyon de la Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmsangiorgio": {
    "title": "Venise vue de la tour de San Giorgio",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmbrightangel": {
    "title": "Regard vers le haut du sentier Bright Angel, Grand Canyon",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmcuernavaca": {
    "title": "Vallée de Cuernavaca",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmsunset": {
    "title": "Nuage au couchant, Green River, Wyoming",
    "museum": "Smithsonian American Art Museum, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.moran = {
  "title": "Le parcours de vie de Thomas Moran",
  "part": "Les merveilles de l’Ouest",
  "subtitle": "De Yellowstone au Grand Canyon et à Venise",
  "intro": "Voyage à travers la vie de Thomas Moran : de Philadelphie aux sources chaudes de Yellowstone, dans les canyons de l’Ouest, au Mexique et à Venise. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Thomas Moran meurt à Santa Barbara, en Californie, le 25 août 1926.",
    "Aujourd’hui, un sommet du massif Teton porte son nom : le mont Moran."
  ],
  "epilogue": "Thomas Moran meurt à Santa Barbara le 25 août 1926. Le parcours mène de Philadelphie, par Yellowstone et le Grand Canyon, jusqu’au Mexique et à Venise.",
  "life": "1837–1926"
};
  P.stations = Object.assign(P.stations || {}, {
  "tms1": {
    "place": "De Bolton à Philadelphie",
    "when": "1837–1870",
    "mapLabel": "Philadelphie",
    "intro": [
      "Thomas Moran naît à Bolton, en Angleterre, le 12 février 1837 ; en 1844, la famille émigre aux États-Unis et s’installe plus tard près de Philadelphie.",
      "Il se forme dans un atelier de gravure sur bois à Philadelphie et part en 1862 en Angleterre pour voir les tableaux de William Turner."
    ]
  },
  "tms2": {
    "place": "Les sources chaudes de Yellowstone",
    "when": "1871–1873",
    "mapLabel": "Yellowstone",
    "intro": [
      "En 1871, Moran accompagne l’expédition du géologue Ferdinand Hayden dans la région de Yellowstone.",
      "Ses esquisses et les photographies de William Henry Jackson contribuent à ce que le Congrès fasse de Yellowstone, en 1872, le premier parc national."
    ]
  },
  "tms3": {
    "place": "Yosemite, l’Utah et le Grand Canyon",
    "when": "1872–1875",
    "mapLabel": "Grand Canyon",
    "intro": [
      "En 1873, Moran accompagne l’explorateur John Wesley Powell dans le sud de l’Utah et au Grand Canyon.",
      "Il saisit aussi à l’aquarelle la vallée de Yosemite et les montagnes de la Sierra Nevada, en Californie."
    ]
  },
  "tms4": {
    "place": "La Floride et les Rocheuses",
    "when": "1878–1881",
    "mapLabel": "Wyoming",
    "intro": [
      "Outre l’Ouest, Moran peint aussi les côtes et les palmiers de la Floride.",
      "En 1879, il parcourt l’Idaho, l’Utah, le Nevada et le Wyoming et remplit de nombreuses feuilles d’esquisses à l’aquarelle."
    ]
  },
  "tms5": {
    "place": "Le Mexique, Long Island et Venise",
    "when": "1882–1891",
    "mapLabel": "East Hampton",
    "intro": [
      "En 1883, Moran se rend à Cuba et au Mexique, et à partir de 1884 il possède une maison avec atelier à East Hampton, sur Long Island.",
      "En 1886, il découvre Venise, qu’il peindra ensuite très souvent."
    ]
  },
  "tms6": {
    "place": "Retour à Yellowstone",
    "when": "1892–1901",
    "mapLabel": "Yellowstone",
    "intro": [
      "En 1892, Moran retourne à Yellowstone avec le photographe William Henry Jackson et dessine à nouveau le canyon de la Yellowstone.",
      "La même année, il peint aussi au Colorado et dans l’Utah."
    ]
  },
  "tms7": {
    "place": "Derniers voyages",
    "when": "1900–1926",
    "mapLabel": "Arizona",
    "intro": [
      "Même âgé, Moran continue de voyager, surtout au Grand Canyon, en Arizona.",
      "Il peint jusqu’à un âge avancé et meurt en 1926 à Santa Barbara, en Californie."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tmecclesbourne": {
    "text": [
      "Des collines et des falaises gris-vert s’étendent le long de la côte sud de l’Angleterre, près de Hastings.",
      "Moran exécute la feuille au graphite, au lavis d’encre et à la gouache sur papier gris."
    ],
    "fact": "1862. National Gallery of Art, Washington."
  },
  "tmjuniata": {
    "text": [
      "Une large vallée s’ouvre entre des pentes boisées, et les rochers brillent dans la lumière du soir.",
      "La Juniata est une rivière de Pennsylvanie."
    ],
    "fact": "1864. National Gallery of Art, Washington."
  },
  "tmtowerfalls": {
    "text": [
      "Une haute aiguille rocheuse se dresse au-dessus de l’eau écumante.",
      "À droite, à l’arrière-plan, une cascade se jette dans le vide."
    ],
    "fact": "1872. Smithsonian American Art Museum, Washington."
  },
  "tmtower": {
    "text": [
      "Une tour de roche rougeâtre se dresse au bord d’une rivière sauvage.",
      "Moran peint cette aquarelle à l’aquarelle et à la gouache blanche sur papier bleu."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "tmmammoth": {
    "text": [
      "Des terrasses blanches et des bassins bleus s’étendent devant une montagne sombre.",
      "Les sources chaudes de Mammoth déposent du calcaire qui forme comme des marches."
    ],
    "fact": "1872. Smithsonian American Art Museum, Washington."
  },
  "tmminerva": {
    "text": [
      "Dans un champ rond, on voit des terrasses colorées avec de petits bassins d’eau.",
      "La terrasse Minerva fait partie des sources chaudes de Mammoth, à Yellowstone."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "tmexcelsior": {
    "text": [
      "De la vapeur monte au-dessus d’une large vallée, et un grand pin se dresse à droite.",
      "Le geyser Excelsior se trouve dans l’un des bassins de geysers du parc de Yellowstone."
    ],
    "fact": "1873. Smithsonian American Art Museum, Washington."
  },
  "tmgardiner": {
    "text": [
      "Des terrasses blanches, orange et rouges montent le long d’une pente.",
      "De petites silhouettes sur le bord montrent la taille des terrasses."
    ],
    "fact": "1873. National Gallery of Art, Washington."
  },
  "tmsierras": {
    "text": [
      "Des montagnes enneigées s’élèvent derrière des sapins sombres et des rochers.",
      "Moran peint la feuille à la gouache sur un dessin au graphite."
    ],
    "fact": "1872–1875. Art Institute of Chicago."
  },
  "tmhalfdome": {
    "text": [
      "Le sommet de granit du Half Dome se dresse dans la vallée de Yosemite entre des blocs de pierre et des sapins.",
      "À l’arrière-plan s’étendent des montagnes enneigées."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmgodland": {
    "text": [
      "Des rochers rouges se dressent au-dessus d’un vaste plateau, sous un ciel sombre.",
      "La feuille, étroite et allongée, montre le pays du Colorado comme un panorama."
    ],
    "fact": "1873–1874. Smithsonian American Art Museum, Washington."
  },
  "tmpowell": {
    "text": [
      "Le regard plonge du plateau de Powell jusqu’au fond du Grand Canyon.",
      "Le plateau porte le nom de l’explorateur John Wesley Powell."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmriovirgin": {
    "text": [
      "Une rangée de falaises érodées s’élève au-dessus d’un plateau du sud de l’Utah.",
      "En bas, un ruisseau coule au fond d’un canyon profond."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmvirgincanyon": {
    "text": [
      "Un groupe de cavaliers traverse le Rio Virgin à un gué.",
      "À gauche se dressent de hautes falaises blanches."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmfortgeorge": {
    "text": [
      "De hauts palmiers et des buissons se dressent sur une butte sablonneuse en Floride.",
      "De grands nuages blancs passent au-dessus d’eux."
    ],
    "fact": "1878. Musée d’art de Cleveland."
  },
  "tmtetons": {
    "text": [
      "Au-delà d’une vallée plate, on aperçoit les sommets bleus des Tetons.",
      "Les chaînes au premier plan sont violettes et bleues, et l’eau est verte."
    ],
    "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmruby": {
    "text": [
      "Une longue chaîne de montagnes pelées s’élève au-dessus d’une plaine du Nevada.",
      "Des nuages couvrent les sommets."
    ],
    "fact": "1879. Musée d’art de Cleveland."
  },
  "tmcottonwood": {
    "text": [
      "Le regard passe par-dessus une arête rocheuse vers trois sommets aux reflets violets.",
      "Moran note la date sur la feuille : 13 août 1879."
    ],
    "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmgreenriver": {
    "text": [
      "Des rochers rayés de rouge et de blanc se reflètent dans l’eau de la Green River, dans le Wyoming.",
      "Au-dessus s’étend un ciel bleu."
    ],
    "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmgreencliffs": {
    "text": [
      "Les falaises de la Green River brillent d’un éclat doré au soleil.",
      "Devant elles, un groupe de cavaliers traverse la plaine."
    ],
    "fact": "1881. National Gallery of Art, Washington."
  },
  "tmupperco": {
    "text": [
      "De hautes falaises brillent sous un ciel d’orage sombre, et des cavaliers se reposent au bord de la rivière.",
      "Il s’agit de la Green River, appelée aussi haut Colorado."
    ],
    "fact": "1882. Smithsonian American Art Museum, Washington."
  },
  "tmsanfrancisco": {
    "text": [
      "Un chemin de charrettes mène par-dessus une colline jusqu’à un chariot, et à gauche une église de mission se dresse devant des montagnes pelées.",
      "Moran date la feuille du 1er mars 1883."
    ],
    "fact": "1883. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmsea": {
    "text": [
      "De hautes vagues se brisent en écume sur une plage plate.",
      "Au-dessus pèse un ciel gris."
    ],
    "fact": "1884. National Gallery of Art, Washington."
  },
  "tmhacienda": {
    "text": [
      "À travers une voûte d’arbres sombres, on aperçoit une hacienda ensoleillée au bord du lac de Cuitzeo, au Mexique.",
      "Au premier plan, une silhouette solitaire est assise à l’ombre près d’un bassin."
    ],
    "fact": "1885. Smithsonian American Art Museum, Washington."
  },
  "tmvenice88": {
    "text": [
      "Des coupoles, des tours et des bateaux aux voiles rouges se reflètent dans la lagune de Venise.",
      "Moran peint la feuille à l’aquarelle et à la gouache blanche."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "tmholycross": {
    "text": [
      "Au-dessus d’une cascade s’élève la montagne de la Sainte-Croix, dans le Colorado.",
      "La montagne doit son nom à deux couloirs remplis de neige qui forment ensemble une croix."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "tmvenice91": {
    "text": [
      "Des bateaux aux voiles colorées mouillent devant Venise, avec des coupoles et des tours à l’horizon.",
      "Moran déplace un peu certains bâtiments pour embellir le tableau."
    ],
    "fact": "1891. Smithsonian American Art Museum, Washington."
  },
  "tmkanab": {
    "text": [
      "La brume monte entre les hautes parois rocheuses du canyon Kanab, dans l’Utah.",
      "En bas, l’eau coule entre de grosses pierres."
    ],
    "fact": "1892. Smithsonian American Art Museum, Washington."
  },
  "tmhotsprings": {
    "text": [
      "Au centre brille une source chaude, avec de la vapeur et des dépôts blancs, rouges et jaunes.",
      "Moran date la feuille du 21 juillet 1892."
    ],
    "fact": "1892. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmsmelting": {
    "text": [
      "De hautes cheminées s’élève une fumée sombre au-dessus d’une plaine.",
      "Ici, Moran ne montre pas une merveille de la nature, mais une usine près de Denver, dans le Colorado."
    ],
    "fact": "1892. Musée d’art de Cleveland."
  },
  "tmtoltec": {
    "text": [
      "Sous un ciel gris, un gouffre profond s’ouvre devant une falaise déchiquetée.",
      "Tout au fond, des taches blanches brillent sur une montagne lointaine."
    ],
    "fact": "1892. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmgrandcanyon": {
    "text": [
      "Des parois rocheuses jaunes et blanches plongent à pic dans le canyon de la Yellowstone, et au fond tombe une cascade.",
      "Ce grand tableau mesure plus de quatre mètres de large."
    ],
    "fact": "1893–1901. Smithsonian American Art Museum, Washington."
  },
  "tmrainbow": {
    "text": [
      "Un arc-en-ciel s’étend au-dessus des rochers clairs du Grand Canyon de la Yellowstone.",
      "La brume et la lumière font briller les rochers d’un éclat presque blanc."
    ],
    "fact": "1900. Smithsonian American Art Museum, Washington."
  },
  "tmsangiorgio": {
    "text": [
      "De la tour de San Giorgio Maggiore, on regarde Venise par-delà l’eau.",
      "Des voiliers reposent tranquillement dans la lagune."
    ],
    "fact": "1900. Smithsonian American Art Museum, Washington."
  },
  "tmbrightangel": {
    "text": [
      "Le regard monte du fond d’une gorge du Grand Canyon jusqu’aux hauts rochers.",
      "Moran date la feuille de mai 1901."
    ],
    "fact": "1901. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmcuernavaca": {
    "text": [
      "Le regard passe par-dessus des collines vertes jusqu’au loin dans la vallée de Cuernavaca, au Mexique.",
      "À l’horizon, des nuages passent sur les montagnes."
    ],
    "fact": "1903. Smithsonian American Art Museum, Washington."
  },
  "tmsunset": {
    "text": [
      "Un nuage rouge orangé du couchant flotte au-dessus des rochers de la Green River, dans le Wyoming.",
      "Moran peint ce petit tableau vers l’âge de quatre-vingts ans."
    ],
    "fact": "1917. Smithsonian American Art Museum, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
