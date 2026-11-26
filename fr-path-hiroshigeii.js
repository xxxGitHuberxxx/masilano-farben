// v10.43 FR content for Utagawa Hiroshige II’s life journey (1826–1869). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York"
});
  P.works = Object.assign(P.works || {}, {
  "hzivy": {
    "title": "Petit oiseau et lierre",
    "museum": "Art Institute of Chicago"
  },
  "hzwhiteeye": {
    "title": "Zostérops du Japon et kakis",
    "museum": "Art Institute of Chicago"
  },
  "hzsparrow": {
    "title": "Moineau sur une branche de camélia",
    "museum": "Art Institute of Chicago"
  },
  "hzparrot": {
    "title": "Perroquet sur une branche de prunier",
    "museum": "Art Institute of Chicago"
  },
  "hzkingfisher": {
    "title": "Martin-pêcheur et hortensia",
    "museum": "Art Institute of Chicago"
  },
  "hzpine": {
    "title": "Oiseau sur une branche de pin",
    "museum": "Art Institute of Chicago"
  },
  "hztsuten": {
    "title": "Le pont Tsūten au temple Tōfuku, Kyoto",
    "museum": "Art Institute of Chicago"
  },
  "hzhase": {
    "title": "Le temple Hase, province de Yamato",
    "museum": "Art Institute of Chicago"
  },
  "hzyoshino": {
    "title": "Le mont Yoshino, province de Yamato",
    "museum": "Art Institute of Chicago"
  },
  "hzamano": {
    "title": "Amanohashidate, province de Tango",
    "museum": "Art Institute of Chicago"
  },
  "hztaka": {
    "title": "La plage de Taka, province de Tajima",
    "museum": "Art Institute of Chicago"
  },
  "hzhara": {
    "title": "Hara, province de Suruga",
    "museum": "Art Institute of Chicago"
  },
  "hzkikyo": {
    "title": "La plaine de Kikyō, province de Shinshū",
    "museum": "Art Institute of Chicago"
  },
  "hzmikuni": {
    "title": "Le grand port de Mikuni, province d’Echizen",
    "museum": "Art Institute of Chicago"
  },
  "hzchuzenji": {
    "title": "Le lac Chūzenji, province de Shimotsuke",
    "museum": "Art Institute of Chicago"
  },
  "hziris": {
    "title": "Jardins d’iris à Horikiri",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hzryogoku": {
    "title": "Feu d’artifice sur Ryōgoku",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hzmimeguri": {
    "title": "La digue de Mimeguri au bord de la Sumida",
    "museum": "Art Institute of Chicago"
  },
  "hzimado": {
    "title": "Le pont Imado et la colline Matsuchi",
    "museum": "Art Institute of Chicago"
  },
  "hztakino": {
    "title": "Takino, province de Harima",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.hiroshigeii = {
  "title": "Le parcours de vie d’Utagawa Hiroshige II",
  "part": "Oiseaux, montagnes et côtes",
  "subtitle": "À travers les provinces jusqu’à Edo",
  "intro": "Voyage avec le graveur japonais Utagawa Hiroshige II : vers de petites estampes d’oiseaux et de fleurs, vers des temples, des montagnes et des côtes de nombreuses provinces, puis vers les rivières et les ponts d’Edo. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Utagawa Hiroshige II meurt en 1869.",
    "Ses estampes sont aujourd’hui conservées dans des musées du monde entier."
  ],
  "epilogue": "Utagawa Hiroshige II meurt en 1869. Le parcours mène de petites estampes d’oiseaux et de fleurs, en passant par les temples, les montagnes et les côtes des provinces, jusqu’aux rivières d’Edo.",
  "life": "1826–1869"
};
  P.stations = Object.assign(P.stations || {}, {
  "hzs1": {
    "place": "Oiseaux et fleurs",
    "when": "1843–1857",
    "mapLabel": "Edo",
    "intro": [
      "Utagawa Hiroshige II naît en 1826 ; élève du maître graveur Utagawa Hiroshige, il travaille d’abord sous le nom de Shigenobu.",
      "Il signe « Shigenobu » ses petites estampes d’oiseaux sur des branches en fleurs."
    ]
  },
  "hzs2": {
    "place": "Cent vues célèbres des provinces",
    "when": "1859",
    "mapLabel": "Kyoto et ses environs",
    "intro": [
      "En 1859, l’année suivant la mort de son maître, il épouse la fille de celui-ci et prend le nom de Hiroshige.",
      "La même année paraissent des estampes de sa série « Cent vues célèbres des diverses provinces », avec des temples, des montagnes et des côtes."
    ]
  },
  "hzs3": {
    "place": "De province en province",
    "when": "1860–1861",
    "mapLabel": "Japon",
    "intro": [
      "En 1860 suivent d’autres estampes de la série, du mont Fuji à un plateau verdoyant, jusqu’à un port et un lac de montagne.",
      "En 1861, il représente des jardins d’iris près d’Edo dans une estampe imprimée presque uniquement en tons de bleu."
    ]
  },
  "hzs4": {
    "place": "Edo et les provinces",
    "when": "1862",
    "mapLabel": "Edo",
    "intro": [
      "En 1862, il conçoit de nouvelles séries, comme les « Trente-six vues de la capitale de l’Est », consacrées à Edo, et les « Soixante-huit vues des diverses provinces ».",
      "Vers 1865, son mariage est dissous et il se retire à Yokohama."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hzivy": {
    "text": [
      "Un petit oiseau vert s’accroche à une liane aux feuilles rouges, à côté de lignes d’écriture.",
      "La petite estampe est signée « Shigenobu fude », peint par Shigenobu."
    ],
    "fact": "vers 1843–1847. Art Institute of Chicago."
  },
  "hzwhiteeye": {
    "text": [
      "Un zostérops vert est posé sur une branche portant des kakis ronds et orangés.",
      "L’estampe est au petit format koban."
    ],
    "fact": "vers 1847–1852. Art Institute of Chicago."
  },
  "hzsparrow": {
    "text": [
      "Un moineau est posé sur une branche de camélia aux fleurs rouges et roses.",
      "En haut à gauche figurent des lignes d’écriture, en bas à droite la signature « Shigenobu fude »."
    ],
    "fact": "vers 1847–1852. Art Institute of Chicago."
  },
  "hzparrot": {
    "text": [
      "Un perroquet rouge aux ailes vertes est posé sur une branche de prunier en fleurs.",
      "L’Art Institute of Chicago date la petite estampe vers 1848–1852."
    ],
    "fact": "vers 1848–1852. Art Institute of Chicago."
  },
  "hzkingfisher": {
    "text": [
      "Un martin-pêcheur bleu au bec rouge vole sous une ombelle d’hortensias bleus.",
      "Ce format vertical étroit s’appelle chūtanzaku."
    ],
    "fact": "1857. Art Institute of Chicago."
  },
  "hzpine": {
    "text": [
      "Un oiseau rouge est posé sur une branche de pin aux touffes d’aiguilles bleu foncé.",
      "L’estampe est signée « Shigenobu hitsu » et porte le sceau de l’éditeur Jakurindō."
    ],
    "fact": "1857. Art Institute of Chicago."
  },
  "hztsuten": {
    "text": [
      "Des érables rouges flamboient dans le ravin sous un pont couvert.",
      "L’estampe appartient à la série « Cent vues célèbres des diverses provinces »."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzhase": {
    "text": [
      "Des cerisiers en fleurs blanches entourent les bâtiments du temple à flanc de colline.",
      "Un escalier couvert gravit la pente, et en bas brille un champ jaune."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzyoshino": {
    "text": [
      "D’innombrables cerisiers fleurissent sur les pentes vertes, et une cascade dévale la vallée.",
      "Au loin se dresse un sommet bleu."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzamano": {
    "text": [
      "Une longue langue de terre couverte de pins traverse la baie bleue.",
      "Dans le ciel, la pleine lune brille au-dessus de collines lointaines."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hztaka": {
    "text": [
      "Une haute falaise couverte de cerisiers en fleurs domine une baie paisible.",
      "À l’horizon, le ciel rougeoie au-dessus de la mer."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzhara": {
    "text": [
      "Le Fuji enneigé s’élève très haut au-dessus de champs verts et de pins.",
      "Au premier plan passe un long cortège de voyageurs portant des bannières."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hzkikyo": {
    "text": [
      "Un ruisseau serpente dans une plaine verte et fleurie, bordée de grands pins.",
      "De petites silhouettes marchent le long de la rive."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hzmikuni": {
    "text": [
      "Un grand voilier est au port, et une barque pleine de monde accoste au rivage.",
      "Plus loin, sur l’eau claire, navigue un second navire."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hzchuzenji": {
    "text": [
      "Deux grands cèdres se dressent sur la rive, et un portail rouge se tient dans le lac bleu.",
      "Derrière le lac s’élèvent des montagnes boisées."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hziris": {
    "text": [
      "Des promeneurs passent sous un pin, le long de vastes parterres d’iris.",
      "L’estampe en forme d’éventail est un aizuri-e, imprimé presque entièrement en tons de bleu."
    ],
    "fact": "1861. Metropolitan Museum of Art, New York."
  },
  "hzryogoku": {
    "text": [
      "Un long pont de bois franchit la rivière, encombrée de bateaux.",
      "Dans le ciel, un feu d’artifice éclate en petites étincelles."
    ],
    "fact": "1862. Metropolitan Museum of Art, New York."
  },
  "hzmimeguri": {
    "text": [
      "Des cerisiers en fleurs bordent la digue, et un portail mène à un sanctuaire.",
      "L’estampe appartient à la série « Lieux célèbres de la capitale de l’Est »."
    ],
    "fact": "1862. Art Institute of Chicago."
  },
  "hzimado": {
    "text": [
      "La neige couvre les toits du temple sur la colline et les arbres au bord de l’eau.",
      "L’estampe appartient à la série « Trente-six vues de la capitale de l’Est »."
    ],
    "fact": "1862. Art Institute of Chicago."
  },
  "hztakino": {
    "text": [
      "Une rivière écume entre les rochers, et derrière s’élève une colline verte.",
      "L’estampe porte le numéro 44 de la série « Soixante-huit vues des diverses provinces »."
    ],
    "fact": "1862. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
