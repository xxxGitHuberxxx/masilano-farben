// v10.24 FR content for Emil Jakob Schindler’s life journey, Part 1 (1842–1892). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Belvedere, Wien": "Belvédère, Vienne"
});
  P.works = Object.assign(P.works || {}, {
  "sjramsau": {
    "title": "Torrent dans la Ramsau",
    "museum": "Belvédère, Vienne"
  },
  "sjdampfer": {
    "title": "Embarcadère sur le Danube face à Kaisermühlen",
    "museum": "Belvédère, Vienne"
  },
  "sjholland": {
    "title": "Bétail au pâturage en Hollande",
    "museum": "Belvédère, Vienne"
  },
  "sjschafe": {
    "title": "Paysage de village avec moutons",
    "museum": "Belvédère, Vienne"
  },
  "sjkrieau": {
    "title": "Motif du Prater – Krieau",
    "museum": "Belvédère, Vienne"
  },
  "sjhacking": {
    "title": "Prairie humide de Hacking",
    "museum": "Belvédère, Vienne"
  },
  "sjlundenburg": {
    "title": "Paysage de marais près de Lundenburg",
    "museum": "Belvédère, Vienne"
  },
  "sjfruehling": {
    "title": "Printemps à Hacking",
    "museum": "Belvédère, Vienne"
  },
  "sjgosau": {
    "title": "Le moulin de Gosau près d’Ischl",
    "museum": "Belvédère, Vienne"
  },
  "sjmaerz": {
    "title": "Ambiance de mars – avant-printemps dans la forêt viennoise",
    "museum": "Belvédère, Vienne"
  },
  "sjsaege": {
    "title": "Scierie dans la brume du matin",
    "museum": "Belvédère, Vienne"
  },
  "sjkorfu": {
    "title": "La mer Ionienne près de Corfou",
    "museum": "Belvédère, Vienne"
  },
  "sjruebe": {
    "title": "Champ de rutabagas",
    "museum": "Belvédère, Vienne"
  },
  "sjernte": {
    "title": "Mois de la moisson à Plankenberg",
    "museum": "Belvédère, Vienne"
  },
  "sjsylt": {
    "title": "Côte de Sylt",
    "museum": "Belvédère, Vienne"
  }
});
  P.paths = P.paths || {};
  P.paths.schindler = {
  "title": "Le parcours de vie d’Emil Jakob Schindler",
  "life": "1842–1892",
  "part": "Partie 1 · Atmosphères de Vienne à Sylt",
  "subtitle": "Prairies humides, moulins et mer",
  "intro": "Voyage avec Emil Jakob Schindler, le paysagiste viennois des atmosphères paisibles : des torrents de la Ramsau aux prairies du Danube et au Prater, jusqu’à Plankenberg, l’Adriatique et la mer de Sylt. De courtes étapes et des tableaux à colorier. Cette première partie suit sa lumière.",
  "ending": [
    "Emil Jakob Schindler meurt à Westerland, sur l’île de Sylt, le 9 août 1892. Ses élèves Marie Egner et Olga Wisinger-Florian prolongent sa peinture.",
    "Le chemin peut encore s’allonger. D’autres prairies et côtes pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "Le 9 août 1892, Schindler meurt à Sylt. Une partie ultérieure pourra ajouter d’autres paysages d’atmosphère."
};
  P.stations = Object.assign(P.stations || {}, {
  "sjjung": {
    "place": "Vienne et les montagnes · Apprentissage",
    "when": "1842–1872",
    "mapLabel": "Ramsau",
    "intro": [
      "Emil Jakob Schindler naît à Vienne le 27 avril 1842. À partir de 1860, il étudie à l’Académie de Vienne auprès d’Albert Zimmermann.",
      "Il peint des torrents de montagne et la vie quotidienne au bord du Danube."
    ]
  },
  "sjhell": {
    "place": "Le Prater, la Hollande et les prairies humides",
    "when": "1873–1882",
    "mapLabel": "Prater",
    "intro": [
      "Dans les années 1870, la peinture de Schindler s’éclaircit. Il voyage en Hollande et peint au Prater et dans les prairies autour de Vienne.",
      "Ainsi naît sa propre peinture paisible d’atmosphère."
    ]
  },
  "sjschule": {
    "place": "Goisern et la forêt viennoise",
    "when": "1883–1884",
    "mapLabel": "Goisern",
    "intro": [
      "Schindler enseigne désormais à de jeunes peintres, parmi elles Marie Egner et Olga Wisinger-Florian. L’été, ils peignent ensemble à Goisern.",
      "Dans la forêt viennoise, il observe le passage de l’hiver au printemps."
    ]
  },
  "sjplank": {
    "place": "Plankenberg et l’Adriatique",
    "when": "1885–1890",
    "mapLabel": "Plankenberg",
    "intro": [
      "En 1885, Schindler s’installe avec sa famille au château de Plankenberg. À la demande du prince héritier Rodolphe, il voyage sur les côtes de l’Adriatique.",
      "Entre brume, champ et mer naissent ses tableaux les plus mûrs."
    ]
  },
  "sjnord": {
    "place": "Sur la mer du Nord",
    "when": "1892",
    "mapLabel": "Sylt",
    "intro": [
      "À l’été 1892, Schindler se rend à Sylt. Il peint encore la mer ouverte.",
      "Il meurt à Westerland le 9 août 1892."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sjramsau": {
    "text": [
      "Un torrent court entre pierres et sapins dans la Ramsau. Schindler a vingt-six ans et apprend à regarder de près.",
      "Il peint encore sombre et dense, dans la tradition de ses maîtres."
    ],
    "fact": "1868. Belvédère, Vienne."
  },
  "sjdampfer": {
    "text": [
      "Sur le Danube se trouve un embarcadère pour les vapeurs, l’eau est large et grise. Vienne grandit le long de son fleuve.",
      "Schindler peint la vie quotidienne du fleuve sans emphase."
    ],
    "fact": "vers 1871. Belvédère, Vienne."
  },
  "sjholland": {
    "text": [
      "Des vaches paissent sur une terre plate sous un grand ciel. Schindler voyage en Hollande et y étudie les peintres.",
      "La vaste lumière du Nord change son regard."
    ],
    "fact": "1875. Belvédère, Vienne."
  },
  "sjschafe": {
    "text": [
      "Des moutons passent devant des maisons basses, le ciel est clair et mouvant. Tout semble simple et calme.",
      "Pour Schindler, l’ordinaire est un sujet digne."
    ],
    "fact": "1875. Belvédère, Vienne."
  },
  "sjkrieau": {
    "text": [
      "Dans la Krieau, au Prater, de vieux arbres se dressent au bord de l’eau. Le feuillage brise la lumière en mille nuances.",
      "Tina Blau, avec qui Schindler partage un temps un atelier, y peindra elle aussi."
    ],
    "fact": "vers 1873. Belvédère, Vienne."
  },
  "sjhacking": {
    "text": [
      "Près de Hacking, au bord de la Wien, s’étend une prairie humide et calme avec arbres et eau. Le tableau a la fraîcheur mouillée d’un jour de printemps.",
      "On appelle bientôt Schindler un peintre d’atmosphères."
    ],
    "fact": "1880. Belvédère, Vienne."
  },
  "sjlundenburg": {
    "text": [
      "Près de Lundenburg, au bord de la Thaya, s’étendent des marais plats et des mares. Le ciel se reflète dans le sol sombre.",
      "Schindler recherche exprès ces lieux solitaires."
    ],
    "fact": "1882. Belvédère, Vienne."
  },
  "sjfruehling": {
    "text": [
      "Les premiers arbres fleurissent à Hacking, l’herbe est vert clair. L’air semble chaud et doux.",
      "Schindler a maintenant des élèves qui peignent dehors avec lui."
    ],
    "fact": "1883. Belvédère, Vienne."
  },
  "sjgosau": {
    "text": [
      "Un vieux moulin se dresse au bord du ruisseau dans le Salzkammergut, le bois et l’eau couverts de mousse. Schindler y peint avec ses élèves.",
      "Les étés à Goisern deviennent une école de peinture en plein air."
    ],
    "fact": "1883. Belvédère, Vienne."
  },
  "sjmaerz": {
    "text": [
      "Dans la forêt viennoise, la neige a presque fondu, les arbres sont encore sans feuilles. La lumière annonce déjà le printemps.",
      "Schindler aime particulièrement ces saisons de passage."
    ],
    "fact": "1884. Belvédère, Vienne."
  },
  "sjsaege": {
    "text": [
      "Dans la brume du matin, la scierie et les arbres sont comme des ombres. Couleurs et formes s’adoucissent.",
      "Depuis 1885, Schindler vit avec sa famille au château de Plankenberg, près de Neulengbach."
    ],
    "fact": "1886. Belvédère, Vienne."
  },
  "sjkorfu": {
    "text": [
      "La mer près de Corfou brille de bleu, la côte est claire et rocheuse. Schindler voyage sur l’Adriatique à la demande du prince héritier Rodolphe.",
      "Il doit peindre les côtes pour un grand livre sur la monarchie."
    ],
    "fact": "1888. Belvédère, Vienne."
  },
  "sjruebe": {
    "text": [
      "Un champ de rutabagas s’étend à plat sous un ciel haut, quelques arbres au bord. Rien ici n’est spectaculaire.",
      "C’est justement là que réside la force tranquille de Schindler."
    ],
    "fact": "1888. Belvédère, Vienne."
  },
  "sjernte": {
    "text": [
      "En été, le blé est mûr autour de Plankenberg, des gerbes sont posées dans le champ. La lumière est chaude et dorée.",
      "Schindler peint le paysage autour de sa maison en toutes saisons."
    ],
    "fact": "1890. Belvédère, Vienne."
  },
  "sjsylt": {
    "text": [
      "Sur la côte de Sylt, les vagues roulent sur le sable clair, le ciel est vaste et venteux. C’est l’un de ses derniers tableaux.",
      "Schindler se rend sur la mer du Nord en 1892 et y meurt en août."
    ],
    "fact": "1892. Belvédère, Vienne."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
