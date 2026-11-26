// v10.43 FR content for P.C. Skovgaard’s life journey (1817–1875). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Statens Museum for Kunst, Kopenhagen": "Statens Museum for Kunst, Copenhague"
});
  P.works = Object.assign(P.works || {}, {
  "pchoejerup": {
    "title": "L’église de Højerup sur les falaises de Stevns",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcraageleje": {
    "title": "La plage de Rågeleje",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcoats": {
    "title": "Champ d’avoine près de Vejby",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcdronning": {
    "title": "La côte nord du Seeland à Dronningmølle",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcmoeller": {
    "title": "Paysage à Kongens Møller dans la lumière de l’après-midi",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcbeldringe": {
    "title": "Vue vers le domaine de Beldringe",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pclaesoe": {
    "title": "Bouleaux à Læsø après la pluie",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcvognserup": {
    "title": "Route de campagne près du domaine de Vognserup",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcvenice": {
    "title": "Le Grand Canal à Venise",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcnysoe": {
    "title": "Sur le perron du jardin de Nysø",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcmaywood": {
    "title": "Hêtraie en mai près d’Iselingen",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pccivitella": {
    "title": "Collines rocheuses près de Civitella",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcmeadow": {
    "title": "Les prés de Dortheaslyst",
    "museum": "Statens Museum for Kunst, Copenhague"
  }
});
  P.paths = P.paths || {};
  P.paths.skovgaard = {
  "title": "Le parcours de vie de P.C. Skovgaard",
  "part": "Côtes, champs et hêtraies",
  "subtitle": "Du Seeland à l’Italie",
  "intro": "Voyage avec le paysagiste danois P.C. Skovgaard : vers les côtes et les champs du Seeland, à travers la vaste campagne danoise, à Venise et dans la hêtraie en mai, puis dans les collines d’Italie. Les images viennent du Statens Museum for Kunst de Copenhague, qui partage librement ses reproductions.",
  "ending": [
    "P.C. Skovgaard meurt le 13 avril 1875.",
    "Nombre de ses tableaux sont aujourd’hui conservés au Statens Museum for Kunst de Copenhague."
  ],
  "epilogue": "P.C. Skovgaard meurt le 13 avril 1875. Le parcours mène des côtes du Seeland, à travers la vaste campagne danoise, jusqu’à Venise, dans la hêtraie en mai et dans les collines d’Italie.",
  "life": "1817–1875"
};
  P.stations = Object.assign(P.stations || {}, {
  "pcs1": {
    "place": "Côtes et champs du Seeland",
    "when": "1842–1844",
    "mapLabel": "Seeland",
    "intro": [
      "P.C. Skovgaard naît le 4 avril 1817 ; à l’Académie des beaux-arts de Copenhague, son amitié avec le peintre J.Th. Lundbye devient très importante pour lui.",
      "À l’été 1843, les deux amis dessinent et peignent dans la région natale de Skovgaard, autour de Vejby, et la même année il remporte un prix pour un tableau de chênes."
    ]
  },
  "pcs2": {
    "place": "En voyage à travers le pays",
    "when": "1847–1849",
    "mapLabel": "Danemark",
    "intro": [
      "En 1845, Skovgaard reçoit une médaille d’exposition et termine l’Académie ; dans les années 1840, il voyage à travers tout le Danemark.",
      "Il peint notamment près du domaine de Vognserup et devient un peintre qui dépeint le paysage danois."
    ]
  },
  "pcs3": {
    "place": "Venise et la hêtraie en mai",
    "when": "1854–1857",
    "mapLabel": "Venise et Seeland",
    "intro": [
      "En 1854 et 1855, Skovgaard se rend pour la première fois en Italie, avec le peintre Wilhelm Marstrand et l’historien de l’art N.L. Høyen.",
      "À son retour, il peint son œuvre la plus connue, une hêtraie en mai, avec de grands arbres et de petites figures sous la ligne d’horizon."
    ]
  },
  "pcs4": {
    "place": "L’Italie et les paysages tardifs",
    "when": "1869–1875",
    "mapLabel": "Italie et Seeland",
    "intro": [
      "En 1869, Skovgaard retourne en Italie ; ensuite, ses paysages deviennent plus grandioses.",
      "Sa peinture monumentale compte beaucoup pour les générations suivantes, notamment pour ses fils Joakim et Niels."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "pchoejerup": {
    "text": [
      "L’église se dresse parmi les arbres au sommet de la falaise de craie blanche, et en contrebas la plage longe la mer.",
      "Skovgaard a signé le tableau de son monogramme et de l’année 1842."
    ],
    "fact": "1842. Statens Museum for Kunst, Copenhague."
  },
  "pcraageleje": {
    "text": [
      "Des vagues aux crêtes blanches déferlent sous des nuages légers sur une large plage de sable.",
      "Dans la peinture est gravé « Ved Rougeleie Juli 1843 », à Rågeleje en juillet 1843."
    ],
    "fact": "1843. Statens Museum for Kunst, Copenhague."
  },
  "pcoats": {
    "text": [
      "De hautes avoines remplissent le premier plan, et derrière se dressent des arbres et un toit rouge.",
      "Le tableau a été peint pendant le séjour d’été de Skovgaard et Lundbye à Vejby en 1843."
    ],
    "fact": "1843. Statens Museum for Kunst, Copenhague."
  },
  "pcdronning": {
    "text": [
      "Un ruisseau serpente entre des collines vertes jusqu’à la mer, et au-dessus des nuages traversent un ciel bleu.",
      "Le tableau est signé « PSkovgaard -1844- »."
    ],
    "fact": "1844. Statens Museum for Kunst, Copenhague."
  },
  "pcmoeller": {
    "text": [
      "Un chemin sablonneux passe devant un rocher vers un bois au-dessus duquel pèsent de lourds nuages.",
      "Skovgaard peint le tableau en 1844, à l’huile sur carton."
    ],
    "fact": "1844. Statens Museum for Kunst, Copenhague."
  },
  "pcbeldringe": {
    "text": [
      "Le regard traverse un vaste champ semé de chardons jusqu’à des arbres lointains, sous un haut ciel bleu.",
      "Le tableau a été peint en 1847 à l’huile sur carton, puis marouflé sur toile."
    ],
    "fact": "1847. Statens Museum for Kunst, Copenhague."
  },
  "pclaesoe": {
    "text": [
      "De sveltes bouleaux bordent un chemin, et dans le ciel les nuages gris se dissipent.",
      "Le tableau porte l’inscription « PS 19 Mai 1849 »."
    ],
    "fact": "1849. Statens Museum for Kunst, Copenhague."
  },
  "pcvognserup": {
    "text": [
      "Une route claire passe sous de grands arbres, et des gens y cheminent.",
      "Selon le titre du musée, le peintre J.Th. Lundbye dessine au bord de la route ; le tableau est signé 1849."
    ],
    "fact": "1849. Statens Museum for Kunst, Copenhague."
  },
  "pcvenice": {
    "text": [
      "Des gondoles glissent entre les palais sur le Grand Canal, et à l’arrière-plan s’élève la coupole de Santa Maria della Salute.",
      "Le tableau porte l’inscription « Venezia Juni 1854 »."
    ],
    "fact": "1854. Statens Museum for Kunst, Copenhague."
  },
  "pcnysoe": {
    "text": [
      "Par une porte ouverte sur le jardin, on voit une femme à l’ombrelle bleue sur le perron, une seconde assise à côté.",
      "Le titre du musée nomme Caroline Dalgas et Jeanina Stampe ; le tableau porte la date du 13 juillet 1855."
    ],
    "fact": "1855. Statens Museum for Kunst, Copenhague."
  },
  "pcmaywood": {
    "text": [
      "Deux fillettes se promènent avec un chien au pelage doré dans la hêtraie ensoleillée, et plus loin leur famille est assise dans l’herbe.",
      "Skovgaard a trouvé le motif près du domaine d’Iselingen, dans le sud du Seeland, et a peint les feuilles vert clair à peine déployées."
    ],
    "fact": "1857. Statens Museum for Kunst, Copenhague."
  },
  "pccivitella": {
    "text": [
      "Des pentes rocheuses ensoleillées couvertes de buissons occupent le premier plan, et derrière s’alignent des montagnes bleues.",
      "Skovgaard peint l’étude à l’huile sur papier et y inscrit « Civitella 7 Juli 1869 »."
    ],
    "fact": "1869. Statens Museum for Kunst, Copenhague."
  },
  "pcmeadow": {
    "text": [
      "Des prés verts s’étendent jusqu’à une rangée d’arbres, au-dessus de laquelle passent des nuages clairs.",
      "Le Statens Museum for Kunst date le tableau des années 1871 à 1875."
    ],
    "fact": "1871–1875. Statens Museum for Kunst, Copenhague."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
