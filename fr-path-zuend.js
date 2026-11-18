// v10.23 FR content for Robert Zünd’s life journey, Part 1 (1827–1909). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collection particulière",
  "Kunstmuseum Luzern": "Kunstmuseum de Lucerne",
  "Kunsthaus Zürich": "Kunsthaus de Zurich",
  "Kunstmuseum Basel": "Kunstmuseum de Bâle",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York"
});
  P.works = Object.assign(P.works || {}, {
  "rzpilatus": {
    "title": "Le Pilate vu de l’ouest",
    "museum": "Kunsthaus de Zurich"
  },
  "rzvierwald": {
    "title": "Soir sur le lac des Quatre-Cantons",
    "museum": "Collection particulière"
  },
  "rzernte": {
    "title": "La Moisson",
    "museum": "Kunstmuseum de Bâle"
  },
  "rzbaeume": {
    "title": "Arbres",
    "museum": "Collection particulière"
  },
  "rzhirtenhof": {
    "title": "Ferme suisse (Hirtenhof)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rzsempach": {
    "title": "La chapelle de la bataille de Sempach",
    "museum": "Kunsthaus de Zurich"
  },
  "rzseesemp": {
    "title": "Le lac de Sempach",
    "museum": "Kunsthaus de Zurich"
  },
  "rzeggen": {
    "title": "Paysans hersant avec des bœufs",
    "museum": "Collection particulière"
  },
  "rzkorn": {
    "title": "Champ de blé avec chênes",
    "museum": "Collection particulière"
  },
  "rzreuss": {
    "title": "La Reuss avec l’abbaye de Rathausen",
    "museum": "Collection particulière"
  },
  "rzeichen": {
    "title": "Chênaie",
    "museum": "Kunsthaus de Zurich"
  },
  "rzbuchen": {
    "title": "Hêtraie",
    "museum": "Kunstmuseum de Lucerne"
  },
  "rzschafe": {
    "title": "Paysage du soir avec troupeau de moutons",
    "museum": "Kunsthaus de Zurich"
  }
});
  P.paths = P.paths || {};
  P.paths.zuend = {
  "title": "Le parcours de vie de Robert Zünd",
  "life": "1827–1909",
  "part": "Partie 1 · Lucerne et la lumière des champs",
  "subtitle": "Lacs, champs et chênaies",
  "intro": "Voyage avec Robert Zünd, le paysagiste de Lucerne : des années d’apprentissage à Genève aux champs et aux lacs de Suisse centrale, jusqu’aux grandes forêts de chênes et de hêtres. De courtes étapes et des tableaux à colorier. Cette première partie suit son chemin à travers le paysage.",
  "ending": [
    "Robert Zünd meurt à Lucerne le 15 janvier 1909. Toute sa vie, il a peint le paysage de sa région avec une grande patience.",
    "Le chemin peut encore s’allonger. D’autres champs, forêts et paysages bibliques pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "Le 15 janvier 1909, Zünd meurt à Lucerne. Une partie ultérieure pourra ajouter d’autres forêts et champs."
};
  P.stations = Object.assign(P.stations || {}, {
  "rzjung": {
    "place": "Lucerne et Genève · Apprentissage",
    "when": "1827–1851",
    "mapLabel": "Lucerne",
    "intro": [
      "Robert Zünd naît à Lucerne le 3 mai 1827. À partir de 1848, il étudie à Genève auprès de François Diday et d’Alexandre Calame.",
      "En 1851, il peint le Pilate et le lac des Quatre-Cantons, le paysage de ses origines."
    ]
  },
  "rzfeld": {
    "place": "Champs et arbres",
    "when": "1852–1865",
    "mapLabel": "Champs",
    "intro": [
      "Après un séjour à Paris, Zünd revient à Lucerne et s’y installe. Il peint des champs, des fermes et des arbres isolés.",
      "Avec « La Moisson » de 1860, il trouve son propre style précis."
    ]
  },
  "rzsemp": {
    "place": "Sempach et le pays des lacs",
    "when": "1860–1875",
    "mapLabel": "Sempach",
    "intro": [
      "Au nord de Lucerne s’étendent le lac de Sempach et les champs du Plateau suisse. Zünd peint la chapelle, le lac et le travail des champs.",
      "Il travaille lentement et avec soin, souvent pendant des années sur un même motif."
    ]
  },
  "rzwald": {
    "place": "Les grandes forêts",
    "when": "1880–1890",
    "mapLabel": "Forêts",
    "intro": [
      "Dans les années 1880 naissent les célèbres tableaux de forêt de Zünd. Les chênes et les hêtres deviennent les personnages principaux.",
      "La lumière tombe à travers les feuilles et ordonne tout l’espace."
    ]
  },
  "rzspaet": {
    "place": "Soir sur la Reuss",
    "when": "1889–1909",
    "mapLabel": "Reuss",
    "intro": [
      "Dans ses dernières années, Zünd peint des soirs plus doux, des troupeaux et la rivière en aval de Lucerne.",
      "Il reste jusqu’au bout dans sa ville et auprès de son paysage."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rzpilatus": {
    "text": [
      "Le Pilate s’élève au-dessus des prés et des bois, la lumière est claire et calme. Zünd a environ vingt-cinq ans et peint la montagne de Lucerne.",
      "Dès ce tableau de jeunesse, on voit son calme devant la nature."
    ],
    "fact": "1851. Kunsthaus de Zurich."
  },
  "rzvierwald": {
    "text": [
      "Le soir s’étend sur le lac des Quatre-Cantons, l’eau reflète le ciel. Zünd peint ce tableau la même année que le Pilate.",
      "Le lac à sa porte reste l’un de ses grands sujets."
    ],
    "fact": "1851. Collection particulière."
  },
  "rzernte": {
    "text": [
      "Un champ de blé doré, des gens à la moisson, au-dessus un vaste ciel d’été. Le tableau de 1860 compte parmi les œuvres les plus connues de Zünd.",
      "Chaque épi et chaque arbre sont peints avec grand soin."
    ],
    "fact": "1860. Kunstmuseum de Bâle."
  },
  "rzbaeume": {
    "text": [
      "Un groupe de grands arbres se tient dans la lumière, le feuillage dense et vivant. Zünd étudie les arbres sans cesse, presque comme des portraits.",
      "De telles études naîtront plus tard ses grands tableaux de forêt."
    ],
    "fact": "1865. Collection particulière."
  },
  "rzhirtenhof": {
    "text": [
      "Une ferme se tient entre arbres et prés, calme et habitée. Le tableau appartient aujourd’hui au Metropolitan Museum de New York.",
      "Zünd montre la vie rurale sans anecdote, tout en lumière et en ordre."
    ],
    "fact": "non daté. Metropolitan Museum of Art, New York."
  },
  "rzsempach": {
    "text": [
      "La petite chapelle près de Sempach se dresse dans un paysage paisible. Elle rappelle la bataille de 1386.",
      "Zünd peint le lieu non comme une histoire, mais comme une présence tranquille."
    ],
    "fact": "1866. Kunsthaus de Zurich."
  },
  "rzseesemp": {
    "text": [
      "Le lac de Sempach s’étend plat et clair parmi les collines. L’eau et le ciel se partagent le tableau.",
      "Zünd trouve ses motifs presque toujours à quelques heures de Lucerne."
    ],
    "fact": "vers 1860. Kunsthaus de Zurich."
  },
  "rzeggen": {
    "text": [
      "Des paysans tirent la herse sur le champ avec des bœufs. Le travail est lent, la terre vaste.",
      "Zünd peint le rythme de l’année paysanne avec une grande précision."
    ],
    "fact": "1868. Collection particulière."
  },
  "rzkorn": {
    "text": [
      "De grands chênes bordent un champ de blé mûr. La lumière et l’ombre alternent calmement.",
      "Le champ et l’arbre, deux motifs préférés de Zünd, se rejoignent dans ce tableau."
    ],
    "fact": "1875. Collection particulière."
  },
  "rzreuss": {
    "text": [
      "La Reuss coule calmement près de l’abbaye de Rathausen, en aval de Lucerne. Les rives et les arbres se reflètent dans l’eau.",
      "La rivière relie le lac au pays que Zünd a si souvent peint."
    ],
    "fact": "avant 1909. Collection particulière."
  },
  "rzeichen": {
    "text": [
      "De vieux chênes forment une forêt claire, la lumière tombe sur le chemin et la clairière. Le tableau appartient au Kunsthaus de Zurich.",
      "Zünd peint chaque feuille, et pourtant l’ensemble reste calme et vaste."
    ],
    "fact": "1882. Kunsthaus de Zurich."
  },
  "rzbuchen": {
    "text": [
      "Des troncs lisses de hêtres se serrent, la lumière devient verte et dorée. Le tableau se trouve au Kunstmuseum de Lucerne.",
      "Dans la forêt, Zünd trouve à la fois le silence et l’ordre."
    ],
    "fact": "1886–1887. Kunstmuseum de Lucerne."
  },
  "rzschafe": {
    "text": [
      "Un troupeau de moutons traverse le soir un paysage tranquille. La lumière chaude reste basse sur la terre.",
      "Dans ses dernières années, les tableaux de Zünd deviennent plus doux et plus calmes."
    ],
    "fact": "1889–1891. Kunsthaus de Zurich."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
