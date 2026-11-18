// v10.24 FR content for Rudolf Koller’s life journey, Part 1 (1828–1905). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Bundesamt für Kultur, Bern": "Office fédéral de la culture, Berne",
  "Privatsammlung": "Collection particulière",
  "Museum Oskar Reinhart, Winterthur": "Museum Oskar Reinhart, Winterthour",
  "Standort ohne Angabe": "Lieu non indiqué",
  "Kunsthaus Zürich": "Kunsthaus de Zurich"
});
  P.works = Object.assign(P.works || {}, {
  "rkselbst": {
    "title": "Autoportrait à seize ans devant le chevalet",
    "museum": "Lieu non indiqué"
  },
  "rkschimmel": {
    "title": "Cheval blanc à l’écurie",
    "museum": "Kunsthaus de Zurich"
  },
  "rkscheu": {
    "title": "Chevaux effrayés à l’approche de l’orage",
    "museum": "Collection particulière"
  },
  "rkkuhwald": {
    "title": "Vache dans la forêt",
    "museum": "Collection particulière"
  },
  "rkheuernte": {
    "title": "Fenaison avant l’orage",
    "museum": "Lieu non indiqué"
  },
  "rksusten": {
    "title": "Glacier au col du Susten",
    "museum": "Kunsthaus de Zurich"
  },
  "rkrichisau": {
    "title": "La Richisau",
    "museum": "Museum Oskar Reinhart, Winterthour"
  },
  "rkmittag": {
    "title": "Repos de midi",
    "museum": "Kunsthaus de Zurich"
  },
  "rkwaesche": {
    "title": "Vaches et lavandière au bord du ruisseau",
    "museum": "Collection particulière"
  },
  "rktraenke": {
    "title": "Abreuvoir au lac au coucher du soleil",
    "museum": "Collection particulière"
  },
  "rkanzio": {
    "title": "Chèvres sur la plage de Porto d’Anzio",
    "museum": "Museum Oskar Reinhart, Winterthour"
  },
  "rkhorn": {
    "title": "Vaches au Zürichhorn",
    "museum": "Collection particulière"
  },
  "rkgotthard": {
    "title": "La diligence du Gothard",
    "museum": "Kunsthaus de Zurich"
  },
  "rkalp": {
    "title": "Montée à l’alpage",
    "museum": "Collection particulière"
  },
  "rkschlitten": {
    "title": "Promenade en traîneau",
    "museum": "Office fédéral de la culture, Berne"
  },
  "rkabend": {
    "title": "Soir au Zürichhorn",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.koller = {
  "title": "Le parcours de vie de Rudolf Koller",
  "life": "1828–1905",
  "part": "Partie 1 · Zurich et les animaux",
  "subtitle": "Chevaux, vaches et la diligence du Gothard",
  "intro": "Voyage avec Rudolf Koller, le peintre animalier de Zurich : du jeune peintre devant son chevalet aux Alpes et au Klöntal, jusqu’à la maison du Zürichhorn et à la célèbre diligence du Gothard. De courtes étapes et des tableaux à colorier. Cette première partie le suit à l’étable, au pâturage et en montagne.",
  "ending": [
    "Rudolf Koller meurt à Zurich le 5 janvier 1905. Toute sa vie, il a peint ses animaux avec patience et un regard précis.",
    "Le chemin peut encore s’allonger. D’autres études, scènes alpestres et portraits pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "Le 5 janvier 1905, Koller meurt à Zurich. Une partie ultérieure pourra ajouter d’autres études d’animaux."
};
  P.stations = Object.assign(P.stations || {}, {
  "rkjung": {
    "place": "Zurich et Düsseldorf · Apprentissage",
    "when": "1828–1852",
    "mapLabel": "Zurich",
    "intro": [
      "Rudolf Koller naît à Zurich le 21 mai 1828. En 1846, il entre à l’académie de Düsseldorf, puis va à Paris et à Munich.",
      "Chevaux et vaches sont ses modèles dès le début."
    ]
  },
  "rkland": {
    "place": "Champs, Alpes et Klöntal",
    "when": "1853–1860",
    "mapLabel": "Klöntal",
    "intro": [
      "De retour en Suisse, Koller peint la fenaison, la forêt et les glaciers. Dans le Klöntal, il trouve à la Richisau un lieu d’été.",
      "Il travaille dehors devant le motif et achève les tableaux à l’atelier."
    ]
  },
  "rkhaus": {
    "place": "La maison du Zürichhorn",
    "when": "1862–1869",
    "mapLabel": "Zürichhorn",
    "intro": [
      "En 1862, Koller s’installe dans sa maison du Zürichhorn, au bord du lac. Il garde ses propres animaux et les peint sur la rive.",
      "En 1869, un voyage le conduit aussi sur la côte italienne."
    ]
  },
  "rkgott": {
    "place": "Le Gothard et l’alpage",
    "when": "1873–1881",
    "mapLabel": "Gothard",
    "intro": [
      "En 1873, Koller peint la diligence du Gothard, le tableau auquel on l’associe encore aujourd’hui.",
      "La montée à l’alpage montre elle aussi le mouvement des bêtes et des hommes en montagne."
    ]
  },
  "rkspaet": {
    "place": "Dernières années au bord du lac",
    "when": "1882–1905",
    "mapLabel": "Lac",
    "intro": [
      "Âgé, Koller reste au Zürichhorn. Il peint des courses d’hiver et des soirs calmes sur la rive.",
      "Il meurt à Zurich le 5 janvier 1905."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rkselbst": {
    "text": [
      "À seize ans, Koller est assis devant le chevalet et nous regarde gravement. Il est le fils d’un boucher et aubergiste de Zurich.",
      "Très tôt, il dessine les animaux dans l’étable de son père."
    ],
    "fact": "1844. Lieu non indiqué."
  },
  "rkschimmel": {
    "text": [
      "Un cheval blanc se tient calme dans l’écurie sombre, la lumière tombe sur la robe et la crinière. Koller peint ce tableau à vingt ans.",
      "Les chevaux restent toute sa vie ses modèles préférés."
    ],
    "fact": "1848. Kunsthaus de Zurich."
  },
  "rkscheu": {
    "text": [
      "Des nuages sombres approchent, les chevaux lèvent la tête et s’écartent. Le tableau naît après la formation de Koller à Düsseldorf.",
      "À Düsseldorf, il a rencontré en 1846 Arnold Böcklin, qui reste son ami."
    ],
    "fact": "1849. Collection particulière."
  },
  "rkkuhwald": {
    "text": [
      "Une vache se tient à l’ombre des arbres, la lumière tombe par taches sur sa robe. Koller observe l’animal de tout près.",
      "Après des voyages à Paris et à Munich, il est de retour à Zurich."
    ],
    "fact": "1854. Collection particulière."
  },
  "rkheuernte": {
    "text": [
      "Des paysans chargent en hâte le foin sur la charrette, le ciel s’assombrit. Les chevaux attendent, attelés.",
      "Koller montre le travail des champs sans l’embellir, mais avec chaleur."
    ],
    "fact": "1854. Lieu non indiqué."
  },
  "rksusten": {
    "text": [
      "Tout en haut s’étend le glacier, devant lui des rochers et de maigres pâturages. Koller marche dans les Alpes pour ses études.",
      "Le tableau appartient au Kunsthaus de Zurich."
    ],
    "fact": "1856. Kunsthaus de Zurich."
  },
  "rkrichisau": {
    "text": [
      "La Richisau se trouve au fond du Klöntal, dans le canton de Glaris, entre pâturages et montagnes abruptes. Koller y passe de nombreux étés.",
      "Il y trouve des vaches, de la lumière et du calme pour ses tableaux."
    ],
    "fact": "1858. Museum Oskar Reinhart, Winterthour."
  },
  "rkmittag": {
    "text": [
      "Dans la chaleur de midi, les vaches sont couchées dans l’herbe, le berger se repose à l’ombre. Tout est calme.",
      "Le tableau du Kunsthaus de Zurich montre la sensibilité de Koller à la chaleur et à la lumière."
    ],
    "fact": "1860. Kunsthaus de Zurich."
  },
  "rkwaesche": {
    "text": [
      "Une femme lave au ruisseau, à côté les vaches boivent. L’eau, la robe des bêtes et les feuilles brillent dans la lumière.",
      "Depuis 1862, Koller vit dans sa maison du Zürichhorn, au bord du lac de Zurich."
    ],
    "fact": "1865–1867. Collection particulière."
  },
  "rktraenke": {
    "text": [
      "Le soleil se couche, le bétail boit dans l’eau peu profonde au bord du lac. Le ciel brille de rouge et d’or.",
      "Koller peint souvent ces soirs devant sa maison au bord du lac."
    ],
    "fact": "1868. Collection particulière."
  },
  "rkanzio": {
    "text": [
      "Un troupeau de chèvres traverse la plage de sable clair, derrière s’étend la mer. Koller voyage en Italie et peint dans le Sud.",
      "La lumière y est plus blanche et plus vaste qu’au lac de Zurich."
    ],
    "fact": "1869. Museum Oskar Reinhart, Winterthour."
  },
  "rkhorn": {
    "text": [
      "Des vaches se tiennent sur la rive près du Zürichhorn, une journée claire sur le lac. C’est là que Koller vit et travaille.",
      "Il garde ses propres animaux pour pouvoir les étudier chaque jour."
    ],
    "fact": "1869. Collection particulière."
  },
  "rkgotthard": {
    "text": [
      "La diligence dévale la route du col, un veau effrayé fait un bond de côté. C’est le tableau le plus connu de Koller.",
      "Il est peint en 1873, quand commence le percement du tunnel du Gothard, et se trouve au Kunsthaus de Zurich."
    ],
    "fact": "1873. Kunsthaus de Zurich."
  },
  "rkalp": {
    "text": [
      "Au début de l’été, le troupeau monte à l’alpage avec bergers et cloches. Le chemin traverse les prés vers la montagne.",
      "Koller peint la montée comme un moment de fête dans l’année paysanne."
    ],
    "fact": "1881. Collection particulière."
  },
  "rkschlitten": {
    "text": [
      "Un cheval tire le traîneau dans la neige, son souffle fume dans l’air froid. Koller a maintenant plus de soixante ans.",
      "Même en hiver, le cheval reste son sujet principal."
    ],
    "fact": "1892. Office fédéral de la culture, Berne."
  },
  "rkabend": {
    "text": [
      "Le soir tombe sur la rive du Zürichhorn, bêtes et arbres s’assombrissent devant l’eau claire.",
      "Koller peint son coin de lac jusque dans sa vieillesse."
    ],
    "fact": "1893. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
