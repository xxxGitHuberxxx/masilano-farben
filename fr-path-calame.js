// v10.23 FR content for Alexandre Calame’s life journey, Part 1 (1810–1864). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Standort ohne Angabe": "Lieu non indiqué",
  "Privatsammlung": "Collection particulière",
  "Kunsthaus Zürich": "Kunsthaus de Zurich",
  "National Gallery, London": "National Gallery, Londres",
  "Villa Vauban, Luxemburg": "Villa Vauban, Luxembourg"
});
  P.works = Object.assign(P.works || {}, {
  "acswiss": {
    "title": "Paysage suisse",
    "museum": "National Gallery of Art, Washington"
  },
  "acpaysage": {
    "title": "Paysage montagneux",
    "museum": "Lieu non indiqué"
  },
  "acvalais": {
    "title": "Fabrique dans le Valais",
    "museum": "Collection particulière"
  },
  "aceboul": {
    "title": "L’Éboulement après l’orage",
    "museum": "Kunsthaus de Zurich"
  },
  "acgrimsel": {
    "title": "La Route du Grimsel",
    "museum": "Collection particulière"
  },
  "acchenes": {
    "title": "Chênes, lac de Thoune",
    "museum": "Collection particulière"
  },
  "actorrent": {
    "title": "Torrent de montagne par orage",
    "museum": "Collection particulière"
  },
  "acrosenlaui": {
    "title": "Souvenir de Rosenlaui",
    "museum": "Collection particulière"
  },
  "acleman": {
    "title": "Vue du lac Léman",
    "museum": "Villa Vauban, Luxembourg"
  },
  "acthun": {
    "title": "Le Lac de Thoune",
    "museum": "National Gallery, Londres"
  },
  "acbrunnen": {
    "title": "Lac des Quatre-Cantons, vers Brunnen",
    "museum": "Kunsthaus de Zurich"
  },
  "acrigi": {
    "title": "Chalets au Rigi",
    "museum": "National Gallery, Londres"
  },
  "acmontreux": {
    "title": "Vue de l’extrémité du lac de Genève près de Montreux",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.calame = {
  "title": "Le parcours de vie d’Alexandre Calame",
  "life": "1810–1864",
  "part": "De Genève aux hautes Alpes",
  "subtitle": "Orage, rocher et lacs paisibles",
  "intro": "Voyage avec Alexandre Calame, le peintre genevois des Alpes : des premiers paysages de montagne au Grimsel, à Rosenlaui et au Wetterhorn, jusqu’aux lacs paisibles de Thoune, de Genève et de Lucerne. De courtes étapes et des tableaux à colorier. Ce chemin le suit à travers les montagnes suisses.",
  "ending": [
    "Alexandre Calame meurt à Menton le 19 mars 1864, à cinquante-trois ans. Ses tableaux des Alpes ont façonné le regard de toute l’Europe sur les montagnes suisses.",
    "Le chemin mène des premiers paysages de montagne, à travers l’orage et les sommets, jusqu’aux lacs et aux cabanes du Rigi."
  ],
  "epilogue": "Alexandre Calame meurt à Menton le 19 mars 1864, à cinquante-trois ans. Ses tableaux des Alpes ont façonné le regard de toute l’Europe sur les montagnes suisses. Le chemin mène des premiers paysages de montagne, à travers l’orage et les sommets, jusqu’aux lacs et aux cabanes du Rigi."
};
  P.stations = Object.assign(P.stations || {}, {
  "acgenf": {
    "place": "Vevey et Genève · Débuts",
    "when": "1810–1839",
    "mapLabel": "Genève",
    "intro": [
      "Alexandre Calame naît à Vevey le 28 mai 1810. À Genève, il travaille d’abord dans une banque, puis apprend la peinture auprès de François Diday.",
      "Il commence par des paysages des environs et ses premiers motifs de montagne."
    ]
  },
  "acberg": {
    "place": "Dans les montagnes",
    "when": "1840–1845",
    "mapLabel": "Grimsel",
    "intro": [
      "À partir de 1839, Calame reçoit des médailles au Salon de Paris. Il voyage en Valais et dans l’Oberland bernois.",
      "La roche, l’eau et le temps deviennent ses grands sujets."
    ]
  },
  "acsturm": {
    "place": "Orage et sommet",
    "when": "1846–1850",
    "mapLabel": "Oberland",
    "intro": [
      "Vers 1846 à 1850 naissent les tableaux de montagne dramatiques de Calame. Orages, torrents et sommets escarpés remplissent les toiles.",
      "Beaucoup de ses élèves et acheteurs viennent à Genève de toute l’Europe."
    ]
  },
  "acseen": {
    "place": "Les lacs",
    "when": "1849–1856",
    "mapLabel": "Lacs",
    "intro": [
      "À côté des sommets, Calame peint les grands lacs suisses : Genève, Thoune et Lucerne.",
      "Ici sa peinture devient plus claire, plus calme et plus vaste."
    ]
  },
  "acspaet": {
    "place": "Dernières années",
    "when": "1857–1864",
    "mapLabel": "Montreux",
    "intro": [
      "Dans ses dernières années, Calame est souvent malade. Il continue de peindre montagnes et lacs, plus calmement qu’avant.",
      "Il meurt en 1864 à Menton, sur la Riviera française."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "acswiss": {
    "text": [
      "Un paysage suisse de jeunesse avec de l’eau, des rochers et des arbres. Calame est encore jeune et étudie à Genève auprès de François Diday.",
      "Le tableau appartient aujourd’hui à la National Gallery of Art de Washington."
    ],
    "fact": "vers 1830. National Gallery of Art, Washington."
  },
  "acpaysage": {
    "text": [
      "Montagnes, forêt et eau dans un format en hauteur. Calame cherche déjà la grandeur de la nature.",
      "Il deviendra bientôt lui-même le peintre des Alpes le plus connu de Genève."
    ],
    "fact": "1835. Lieu non indiqué."
  },
  "acvalais": {
    "text": [
      "Un bâtiment au bord de l’eau, entouré des montagnes escarpées du Valais. Les hommes et leurs ouvrages paraissent petits devant le paysage.",
      "Calame voyage désormais régulièrement dans les Alpes pour dessiner."
    ],
    "fact": "1840. Collection particulière."
  },
  "aceboul": {
    "text": [
      "Après un orage, rochers et arbres gisent sur la pente. Le ciel s’éclaircit lentement.",
      "Calame montre la force de la nature sans placer d’hommes dans le tableau."
    ],
    "fact": "1841. Kunsthaus de Zurich."
  },
  "acgrimsel": {
    "text": [
      "Une route étroite mène par la roche et l’eau au col du Grimsel. Les montagnes se dressent arides et puissantes.",
      "Le Grimsel compte parmi les motifs préférés de Calame dans l’Oberland bernois."
    ],
    "fact": "vers 1842. Collection particulière."
  },
  "acchenes": {
    "text": [
      "De grands chênes se dressent sur la rive, derrière s’étend le lac de Thoune avec les montagnes. L’arbre devient le personnage principal.",
      "Calame unit la proximité de la forêt à l’ampleur des Alpes."
    ],
    "fact": "1846. Collection particulière."
  },
  "actorrent": {
    "text": [
      "Un torrent de montagne dévale entre les arbres, le vent courbe les branches. L’orage est tout proche.",
      "De tels tableaux d’orage font connaître Calame à Paris et dans toute l’Europe."
    ],
    "fact": "1848. Collection particulière."
  },
  "acrosenlaui": {
    "text": [
      "Dans la vallée de Rosenlaui, des sapins se dressent devant des sommets clairs et des glaciers. Calame a souvent visité ce lieu.",
      "Le tableau naît à l’atelier, d’après des esquisses et des souvenirs."
    ],
    "fact": "1849. Collection particulière."
  },
  "acleman": {
    "text": [
      "Le lac Léman est calme sous un ciel clair. Après les orages des montagnes, Calame montre ici le silence.",
      "Genève et son lac restent sa demeure."
    ],
    "fact": "1849. Villa Vauban, Luxembourg."
  },
  "acthun": {
    "text": [
      "Le lac de Thoune brille dans la lumière, les montagnes se dessinent nettement à l’horizon. Le tableau appartient à la National Gallery de Londres.",
      "Dans les années 1850, les lacs de Calame deviennent plus clairs et plus calmes."
    ],
    "fact": "1854. National Gallery, Londres."
  },
  "acbrunnen": {
    "text": [
      "Des rives escarpées et une eau claire sur le lac des Quatre-Cantons près de Brunnen. La lumière paraît fraîche.",
      "Le lac au cœur de la Suisse est un motif important pour Calame."
    ],
    "fact": "1856. Kunsthaus de Zurich."
  },
  "acrigi": {
    "text": [
      "De simples chalets de bois se tiennent haut sur le Rigi, derrière s’ouvre le monde des montagnes. Le tableau appartient à la National Gallery de Londres.",
      "Dans ses dernières années, Calame peint les Alpes plus calmement et de plus près."
    ],
    "fact": "1861. National Gallery, Londres."
  },
  "acmontreux": {
    "text": [
      "À l’extrémité du lac Léman, les montagnes s’élèvent au-dessus de Montreux. L’eau est calme et vaste.",
      "C’est l’un des derniers tableaux avant la mort de Calame l’année suivante."
    ],
    "fact": "1863. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
