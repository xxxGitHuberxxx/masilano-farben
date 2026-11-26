// v10.43 FR content for John Singer Sargent’s life journey (1856–1925). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "jsalhambra": {
    "title": "Torre de los Picos, Alhambra",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jspilatus": {
    "title": "Vue depuis le mont Pilate",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jschalets": {
    "title": "Chalets, Breithorn, Mürren",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jstyrol": {
    "title": "Oratoire tyrolien",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsfish": {
    "title": "En route pour la pêche",
    "museum": "National Gallery of Art, Washington"
  },
  "jspailleron": {
    "title": "Marie Buloz Pailleron",
    "museum": "National Gallery of Art, Washington"
  },
  "jsleones": {
    "title": "Patio de los Leones, Alhambra",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jstetouan": {
    "title": "Cour, Tétouan, Maroc",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jswhitewalls": {
    "title": "Murs blancs au soleil, Maroc",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsvenstreet": {
    "title": "Rue à Venise",
    "museum": "National Gallery of Art, Washington"
  },
  "jstownsend": {
    "title": "Miss Beatrice Townsend",
    "museum": "National Gallery of Art, Washington"
  },
  "jsmadamex": {
    "title": "Madame X (Virginie Amélie Avegno Gautreau)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jswhite": {
    "title": "Margaret Stuyvesant Rutherfurd White (Mrs. Henry White)",
    "museum": "National Gallery of Art, Washington"
  },
  "jsreapers": {
    "title": "Moissonneurs au repos dans un champ de blé",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsdeirbahri": {
    "title": "Falaises de Deir el-Bahari, Égypte",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jspavement": {
    "title": "Pavement, Le Caire",
    "museum": "National Gallery of Art, Washington"
  },
  "jswatercarr": {
    "title": "Porteuses d’eau sur le Nil",
    "museum": "Art Institute of Chicago"
  },
  "jsaranjuez": {
    "title": "Midi espagnol, Aranjuez",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsgreendoor": {
    "title": "Porte verte, Santa Maria della Salute",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jspatio": {
    "title": "Le patio",
    "museum": "Musée d’art de Cleveland"
  },
  "jstarragona": {
    "title": "Terrasse et jardin à Tarragone",
    "museum": "Art Institute of Chicago"
  },
  "jstorlonia": {
    "title": "La fontaine, villa Torlonia, Frascati, Italie",
    "museum": "Art Institute of Chicago"
  },
  "jscorfu": {
    "title": "Sous les cyprès à Corfou",
    "museum": "Art Institute of Chicago"
  },
  "jssimplon": {
    "title": "Col du Simplon",
    "museum": "National Gallery of Art, Washington"
  },
  "jspalmettos": {
    "title": "Palmiers nains",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsvizcaya": {
    "title": "Terrasse, Vizcaya",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.sargent = {
  "title": "Le parcours de vie de John Singer Sargent",
  "part": "Les Alpes, Paris, Londres, l’Égypte et la Floride",
  "subtitle": "Portraits, lumière et aquarelles",
  "intro": "Voyage à travers la vie de John Singer Sargent : des Alpes de son enfance à l’Égypte, l’Espagne, Venise et la Floride, en passant par Paris et Londres. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "John Singer Sargent meurt en 1925 à Londres.",
    "Bien qu’il passe presque toute sa vie en Europe, il reste citoyen américain jusqu’à la fin."
  ],
  "epilogue": "John Singer Sargent meurt en 1925. Le parcours mène des Alpes à l’Égypte, l’Espagne, l’Italie et la Floride, en passant par Paris et Londres.",
  "life": "1856–1925"
};
  P.stations = Object.assign(P.stations || {}, {
  "jss1": {
    "place": "Une enfance en voyage",
    "when": "1868–1871",
    "mapLabel": "Les Alpes et l’Espagne",
    "intro": [
      "John Singer Sargent naît à Florence en janvier 1856 ; ses parents américains passent les hivers à Florence, Rome ou Nice et les étés dans les Alpes.",
      "Sa mère, artiste amateur, l’encourage à dessiner, et son goût des voyages lui fournit ses sujets."
    ]
  },
  "jss2": {
    "place": "Élève à Paris, voyages en Espagne et au Maroc",
    "when": "1878–1880",
    "mapLabel": "Paris, l’Espagne et le Maroc",
    "intro": [
      "En mai 1874, Sargent entre dans l’atelier parisien de Carolus-Duran, qui fait peindre ses élèves directement au pinceau et leur désigne avant tout Velázquez comme modèle.",
      "En 1879 et 1880, il voyage en Espagne et au Maroc."
    ]
  },
  "jss3": {
    "place": "Madame X et le départ pour Londres",
    "when": "1882–1885",
    "mapLabel": "Venise, Paris et Londres",
    "intro": [
      "Son portrait le plus connu, « Madame X », fait scandale au Salon de Paris de 1884.",
      "Au printemps 1886, Sargent s’installe en Angleterre pour le reste de sa vie ; à partir de 1885, il rend plusieurs fois visite à Claude Monet à Giverny."
    ]
  },
  "jss4": {
    "place": "Esquisses à l’huile d’Égypte",
    "when": "1890–1891",
    "mapLabel": "Égypte",
    "intro": [
      "En 1891, Sargent se rend en Égypte et y peint une série d’esquisses à l’huile rapides de paysages, de personnes et d’édifices.",
      "La même année, il commence ses grandes peintures murales pour la bibliothèque publique de Boston."
    ]
  },
  "jss5": {
    "place": "Aquarelles d’Espagne et de Venise",
    "when": "1903–1908",
    "mapLabel": "Espagne et Venise",
    "intro": [
      "Dans les années 1890 et au début des années 1900, Sargent est au sommet de sa gloire de portraitiste.",
      "De plus en plus souvent, il peint des aquarelles, le plus souvent en une seule séance, en laissant les couleurs se fondre librement."
    ]
  },
  "jss6": {
    "place": "Adieu au portrait",
    "when": "1907–1911",
    "mapLabel": "L’Italie, Corfou et les Alpes",
    "intro": [
      "En 1907 et 1908, Sargent déclare qu’il « ferme boutique pour les portraits » afin de se consacrer aux paysages, aux études de figures et aux peintures murales.",
      "Il peint désormais en plein air, souvent lors de voyages avec des amis et des parents."
    ]
  },
  "jss7": {
    "place": "Palmiers et une villa en Floride",
    "when": "1917",
    "mapLabel": "Floride",
    "intro": [
      "En février 1917, Sargent se rend à Ormond Beach, en Floride, pour faire le portrait de John D. Rockefeller, puis poursuit vers la région de Miami pour rendre visite à son ami Charles Deering.",
      "Il y est captivé par la villa Vizcaya de James Deering, alors en construction."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "jsalhambra": {
    "text": [
      "Une tour rougeâtre crénelée s’élève au-dessus d’un mur de l’Alhambra de Grenade, avec derrière elle des maisons blanches sous un ciel clair.",
      "Sargent peint cette aquarelle à douze ans ; la feuille entre au Metropolitan Museum en 1950, don de Mrs. Francis Ormond."
    ],
    "fact": "1868. Metropolitan Museum of Art, New York."
  },
  "jspilatus": {
    "text": [
      "Un ciel jaune du soir brille au-dessus de chaînes de montagnes bleues ; à gauche se dressent des sapins sombres et, en bas, s’étend un lac.",
      "L’aquarelle est peinte en 1870 en Suisse, sur le mont Pilate près de Lucerne."
    ],
    "fact": "1870. Metropolitan Museum of Art, New York."
  },
  "jschalets": {
    "text": [
      "Devant les sommets enneigés autour du Breithorn se dressent deux chalets de bois aux toits plats de pierre.",
      "Sargent peint cette feuille à l’aquarelle et au graphite en 1870 à Mürren, dans l’Oberland bernois."
    ],
    "fact": "1870. Metropolitan Museum of Art, New York."
  },
  "jstyrol": {
    "text": [
      "Une maison de bois brune sur un socle de pierre se dresse dans un pré ensoleillé, près de quelques arbres.",
      "L’aquarelle est peinte en 1871 lors d’un voyage de la famille dans le Tyrol."
    ],
    "fact": "1871. Metropolitan Museum of Art, New York."
  },
  "jsfish": {
    "text": [
      "Des femmes et des enfants traversent avec des paniers une plage de Bretagne pour ramasser des coquillages dans les flaques de marée basse ; au fond se dresse un phare.",
      "À 22 ans, Sargent expose le tableau au Salon de Paris de 1878, et il trouve un acheteur."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "jspailleron": {
    "text": [
      "Une femme en longue robe noire se tient dans un pré vert sous les arbres et nous regarde.",
      "Son mari, Édouard Pailleron, commande le portrait en 1879 ; Sargent le signe « John S. Sargent / Ronjoux 1879 »."
    ],
    "fact": "1879. National Gallery of Art, Washington."
  },
  "jsleones": {
    "text": [
      "Une vive lumière tombe sur les colonnes et le sol de pierre d’une cour de l’Alhambra de Grenade.",
      "Sargent peint cette feuille en 1879 à l’aquarelle, à la gouache et au graphite lors de son voyage en Espagne."
    ],
    "fact": "1879. Metropolitan Museum of Art, New York."
  },
  "jstetouan": {
    "text": [
      "Des murs blancs et bleu pâle entourent une cour ensoleillée où s’ouvrent, sous des arcs outrepassés, une porte rouge et une porte sombre.",
      "Sargent peint cette petite étude à l’huile sur bois lors de son voyage au Maroc en 1879 et 1880."
    ],
    "fact": "1879–1880. Metropolitan Museum of Art, New York."
  },
  "jswhitewalls": {
    "text": [
      "Un soleil éclatant frappe des murs blancs percés d’une petite porte brune ; au premier plan se trouve un fossé ombragé.",
      "Comme la cour de Tétouan, cette étude à l’huile est peinte sur bois."
    ],
    "fact": "1879–1880. Metropolitan Museum of Art, New York."
  },
  "jsvenstreet": {
    "text": [
      "Une femme au châle sombre passe dans une étroite ruelle vénitienne, tandis que deux hommes en manteau sombre la regardent.",
      "Sargent expose le tableau à Paris en 1882 sous le titre « Une rue à Venise »."
    ],
    "fact": "1882. National Gallery of Art, Washington."
  },
  "jstownsend": {
    "text": [
      "Une fillette en robe noire, avec un col de dentelle crème, une ceinture rouge et un collier de corail, tient un petit terrier.",
      "En haut figure la dédicace « to my friend Mrs Townsend John S. Sargent » ; la mère de la fillette était une amie du peintre."
    ],
    "fact": "1882. National Gallery of Art, Washington."
  },
  "jsmadamex": {
    "text": [
      "Une femme en robe du soir noire se tient près d’un guéridon et tourne la tête de profil.",
      "Sargent peint le tableau sans commande ; au Salon de Paris de 1884, il fait scandale."
    ],
    "fact": "1883–1884. Metropolitan Museum of Art, New York."
  },
  "jswhite": {
    "text": [
      "Une femme en longue robe de satin blanc se tient devant une chaise longue, un éventail et des jumelles de théâtre noires à la main.",
      "Elle choisit Sargent après avoir vu son travail au Salon de Paris de 1882 ; le tableau est signé « John S. Sargent 1883 »."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "jsreapers": {
    "text": [
      "Un champ de blé doré parsemé de gerbes s’étend jusqu’à une rangée d’arbres sombres ; de petites silhouettes de moissonneurs s’y reposent.",
      "Sargent peint le tableau en 1885, l’année à partir de laquelle il rend visite à Claude Monet à Giverny."
    ],
    "fact": "1885. Metropolitan Museum of Art, New York."
  },
  "jsdeirbahri": {
    "text": [
      "Des falaises ocre brillent au soleil, leurs ombres tombant bleutées sur le sol du désert.",
      "Deir el-Bahari se trouve sur la rive ouest du Nil, près de Louxor ; Sargent peint cette étude à l’huile lors de son voyage en Égypte."
    ],
    "fact": "1890–1891. Metropolitan Museum of Art, New York."
  },
  "jspavement": {
    "text": [
      "Un sol de marbre incrusté rouge, blanc et gris mène à un portail sombre ; Sargent le peint depuis un point de vue bas.",
      "C’est la cour de la mosquée de Soliman Pacha, construite en 1528, dans la citadelle du Caire."
    ],
    "fact": "1891. National Gallery of Art, Washington."
  },
  "jswatercarr": {
    "text": [
      "Des silhouettes vêtues de sombre, portant des jarres, se tiennent au bord d’un chemin, devant des champs verts.",
      "L’étude à l’huile est peinte en Égypte en 1891 ; au revers, elle porte le cachet de Sargent « JSS »."
    ],
    "fact": "1891. Art Institute of Chicago."
  },
  "jsaranjuez": {
    "text": [
      "De grands arbres projettent leur ombre sur un mur clair ; à gauche s’ouvre une place ensoleillée avec de petites silhouettes.",
      "Aranjuez, au sud de Madrid, est une résidence royale espagnole entourée de grands jardins."
    ],
    "fact": "1903. Metropolitan Museum of Art, New York."
  },
  "jsgreendoor": {
    "text": [
      "Une porte verte dans un portail blanc en plein cintre occupe le centre de la feuille, tandis que les marches du bas sont à peine suggérées.",
      "Santa Maria della Salute est une grande église sur le Grand Canal à Venise ; Sargent peint à l’aquarelle, à la gouache et au crayon de cire."
    ],
    "fact": "vers 1904. Metropolitan Museum of Art, New York."
  },
  "jspatio": {
    "text": [
      "Sous une colonnade ombragée pousse au premier plan une plante verte, et la lumière tombe vivement sur les murs et le sol.",
      "L’aquarelle montre comment Sargent peint dans ses dernières années : en une seule séance, en laissant les couleurs se fondre librement."
    ],
    "fact": "1908. Musée d’art de Cleveland."
  },
  "jstarragona": {
    "text": [
      "Une rangée de colonnes claires se dresse sur une terrasse ensoleillée, derrière laquelle brille le vert d’un jardin.",
      "Tarragone se trouve sur la côte méditerranéenne de l’Espagne ; Sargent peint cette feuille à l’aquarelle et à la gouache."
    ],
    "fact": "vers 1908. Art Institute of Chicago."
  },
  "jstorlonia": {
    "text": [
      "Devant un haut jet d’eau, un homme et une femme en blanc tenant une palette sont assis près d’un chevalet et peignent en plein air.",
      "Ce sont les peintres Wilfrid et Jane Emmet de Glehn, compagnons de voyage de Sargent ; comme la pluie interrompt le travail, il y consacre plusieurs jours."
    ],
    "fact": "1907. Art Institute of Chicago."
  },
  "jscorfu": {
    "text": [
      "De hauts cyprès sombres s’élèvent dans un ciel pâle, la mer miroite à gauche et des personnes se reposent à l’ombre dans l’herbe.",
      "L’île grecque de Corfou se trouve dans la mer Ionienne ; Sargent peint le tableau en 1909."
    ],
    "fact": "1909. Art Institute of Chicago."
  },
  "jssimplon": {
    "text": [
      "Un ruisseau dévale une pente entre des blocs de rocher ; au-dessus se dresse le sommet du Hübschhorn sur un ciel bleu.",
      "En 1909, 1910 et 1911, Sargent passe des vacances avec des amis et des parents au col du Simplon, dans les Alpes suisses."
    ],
    "fact": "1911. National Gallery of Art, Washington."
  },
  "jspalmettos": {
    "text": [
      "Des palmes en éventail remplissent toute la feuille, entre lesquelles miroitent des ombres rouges et violettes.",
      "Sargent peint cette aquarelle en Floride en 1917, avec du graphite et du crayon de cire."
    ],
    "fact": "1917. Metropolitan Museum of Art, New York."
  },
  "jsvizcaya": {
    "text": [
      "Une balustrade de pierre surmontée d’un grand vase sépare une pelouse verte de la mer bleue ; à droite se dresse un arbre.",
      "Vizcaya est la villa de style italien que James Deering se fait construire près de Miami."
    ],
    "fact": "1917. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
