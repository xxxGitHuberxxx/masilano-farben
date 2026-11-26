// v10.43 FR content for Giovanni Antonio Canal (Canaletto)’s life journey (1697–1768). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Museum of Fine Arts, Houston": "Museum of Fine Arts, Houston",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Yale Center for British Art, New Haven": "Yale Center for British Art, New Haven"
});
  P.works = Object.assign(P.works || {}, {
  "caspiazza": {
    "title": "La Place Saint-Marc",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "canaletto": {
    "title": "Entrée du Grand Canal",
    "museum": "Museum of Fine Arts, Houston"
  },
  "carialto": {
    "title": "Le Grand Canal vers le sud, en direction du pont du Rialto",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cazobenigo": {
    "title": "Campo Santa Maria Zobenigo, Venise",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "caangelo": {
    "title": "Campo Sant’Angelo, Venise",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "caportello": {
    "title": "La Porta Portello à Padoue",
    "museum": "National Gallery of Art, Washington"
  },
  "casanmarco": {
    "title": "La Place Saint-Marc à Venise",
    "museum": "National Gallery of Art, Washington"
  },
  "camolo": {
    "title": "L’Entrée du Grand Canal vue du Molo, Venise",
    "museum": "National Gallery of Art, Washington"
  },
  "cawestbridge": {
    "title": "Le Pont de Westminster avec la procession du lord-maire sur la Tamise",
    "museum": "Yale Center for British Art, New Haven"
  },
  "cawarwick": {
    "title": "Le Château de Warwick",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cacity": {
    "title": "La City vue de la terrasse de Somerset House",
    "museum": "Yale Center for British Art, New Haven"
  },
  "cawestminster": {
    "title": "Westminster vu de la terrasse de Somerset House",
    "museum": "Yale Center for British Art, New Haven"
  },
  "capaul": {
    "title": "La Cathédrale Saint-Paul",
    "museum": "Yale Center for British Art, New Haven"
  },
  "cacolumn": {
    "title": "Caprice de paysage anglais avec une colonne",
    "museum": "National Gallery of Art, Washington"
  },
  "capalace": {
    "title": "Caprice de paysage anglais avec un palais",
    "museum": "National Gallery of Art, Washington"
  },
  "cawalton": {
    "title": "Le Vieux Pont de Walton",
    "museum": "Yale Center for British Art, New Haven"
  }
});
  P.paths = P.paths || {};
  P.paths.canaletto = {
  "title": "Le parcours de vie de Canaletto",
  "part": "Venise, Padoue et Londres",
  "subtitle": "Places, canaux et la Tamise",
  "intro": "Voyage à travers la vie de Canaletto : des places et des canaux de Venise et de Padoue jusqu’à la Tamise à Londres. La plupart des images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Canaletto meurt à Venise le 19 avril 1768.",
    "Ses vues façonnent encore aujourd’hui l’image que l’on se fait de la Venise et du Londres du XVIIIe siècle."
  ],
  "epilogue": "Canaletto meurt à Venise le 19 avril 1768. Le parcours mène des places de Venise jusqu’à la Tamise, puis retour.",
  "life": "1697–1768"
};
  P.stations = Object.assign(P.stations || {}, {
  "canaletto1": {
    "place": "Venise : places et canaux",
    "when": "1697–1739",
    "mapLabel": "Venise",
    "intro": [
      "Giovanni Antonio Canal naît à Venise le 18 octobre 1697 ; son père peint des décors de théâtre, et le fils l’aide d’abord.",
      "Vers 1720, il commence à peindre des vues de sa ville, qu’il vend à des voyageurs venus de toute l’Europe."
    ]
  },
  "cas2": {
    "place": "Padoue et nouvelles vues",
    "when": "1740–1745",
    "mapLabel": "Padoue",
    "intro": [
      "Vers 1740, moins de voyageurs viennent à Venise ; Canaletto dessine et peint désormais aussi sur la terre ferme, par exemple à Padoue.",
      "Ces années-là naissent aussi ses eaux-fortes et de grandes vues de la place Saint-Marc."
    ]
  },
  "cas3": {
    "place": "Londres et la Tamise",
    "when": "1746–1768",
    "mapLabel": "Londres",
    "intro": [
      "En 1746, Canaletto part pour Londres, où vivent nombre de ses acheteurs, et, avec une courte interruption, reste près de dix ans en Angleterre.",
      "Il peint la Tamise, le nouveau pont de Westminster et des demeures de campagne ; vers 1755, il rentre à Venise."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "caspiazza": {
    "text": [
      "La vaste place Saint-Marc s’ouvre jusqu’à la basilique, à droite le haut campanile s’élève dans le ciel.",
      "Des promeneurs traversent la place, des toiles tendues pendent sous les arcades."
    ],
    "fact": "vers 1727–1729. Metropolitan Museum of Art, New York."
  },
  "canaletto": {
    "text": [
      "Nous regardons depuis le Bacino di San Marco vers le Grand Canal : à gauche l’église de la Salute avec sa coupole blanche, devant des gondoles et des bateaux de charge, à droite les palais de la ville.",
      "Canaletto peint ces vedute pour des voyageurs qui veulent un souvenir de Venise."
    ],
    "fact": "vers 1730. Museum of Fine Arts, Houston."
  },
  "carialto": {
    "text": [
      "Gondoles et bateaux de charge glissent sur l’eau verte du Grand Canal entre de hauts palais.",
      "Les maisons sont si proches de la rive que leurs murs sortent directement de l’eau."
    ],
    "fact": "vers 1730–1739. Metropolitan Museum of Art, New York."
  },
  "cazobenigo": {
    "text": [
      "À droite se dresse la façade claire de l’église Santa Maria Zobenigo, ornée de nombreuses statues et colonnes.",
      "Sur la petite place devant, des gens bavardent au soleil."
    ],
    "fact": "vers 1730–1739. Metropolitan Museum of Art, New York."
  },
  "caangelo": {
    "text": [
      "Un campanile élancé s’élève au-dessus d’une vaste place presque vide.",
      "Canaletto montre les maisons alentour dans une lumière claire, avec des ombres nettes."
    ],
    "fact": "vers 1730–1739. Metropolitan Museum of Art, New York."
  },
  "caportello": {
    "text": [
      "Un canal longe la Porta Portello, une porte de la ville de Padoue, des bateaux sont amarrés sur la rive.",
      "Au premier plan reposent de gros blocs de pierre, derrière des maisons et des arbres sous un ciel nuageux."
    ],
    "fact": "vers 1741–1742. National Gallery of Art, Washington."
  },
  "casanmarco": {
    "text": [
      "Devant la basilique Saint-Marc et le palais des Doges rose se dressent de hauts mâts, et des étals de marché sont installés sur la place.",
      "Marchands, promeneurs et messieurs en longs manteaux circulent entre eux."
    ],
    "fact": "1742–1744. National Gallery of Art, Washington."
  },
  "camolo": {
    "text": [
      "Depuis le Molo, nous regardons au-delà de l’eau vers l’église Santa Maria della Salute et ses grandes coupoles.",
      "À gauche, un voilier est à l’ancre, devant, des gondoles attendent au quai."
    ],
    "fact": "1742–1744. National Gallery of Art, Washington."
  },
  "cawestbridge": {
    "text": [
      "De somptueuses barques à rames remontent la Tamise vers le pont de Westminster le jour du nouveau lord-maire.",
      "En 1747, le pont n’est pas encore achevé : Canaletto le peint tel qu’il imagine l’ouvrage terminé."
    ],
    "fact": "1747. Yale Center for British Art, New Haven."
  },
  "cawarwick": {
    "text": [
      "Le long château de Warwick s’étend derrière une prairie verte où des gens se promènent.",
      "Canaletto peint plusieurs vues de ce château du centre de l’Angleterre."
    ],
    "fact": "1748. Metropolitan Museum of Art, New York."
  },
  "cacity": {
    "text": [
      "Depuis une terrasse au bord du fleuve, nous regardons la Tamise en aval vers la City de Londres et ses nombreux clochers.",
      "Au-dessus de tout s’élève la coupole de la cathédrale Saint-Paul."
    ],
    "fact": "vers 1750. Yale Center for British Art, New Haven."
  },
  "cawestminster": {
    "text": [
      "Le pendant de la vue sur la City regarde en amont vers Westminster et le pont de Westminster.",
      "Voiliers et barques à rames sont sur le large fleuve."
    ],
    "fact": "vers 1750. Yale Center for British Art, New Haven."
  },
  "capaul": {
    "text": [
      "La grande église à coupole Saint-Paul se détache, claire, sur un ciel rose, des carrosses traversent la place devant elle.",
      "C’est la seule vue de Canaletto qui montre l’église entière de près."
    ],
    "fact": "vers 1754. Yale Center for British Art, New Haven."
  },
  "cacolumn": {
    "text": [
      "Entre de grands arbres se dresse une haute colonne surmontée d’une statue.",
      "Canaletto assemble librement des éléments de lieux différents en un paysage inventé."
    ],
    "fact": "vers 1754. National Gallery of Art, Washington."
  },
  "capalace": {
    "text": [
      "Un grand arbre se penche sur un étang où nagent des cygnes, derrière lequel un palais s’étage sur la colline.",
      "Le tableau est le pendant du paysage à la colonne."
    ],
    "fact": "vers 1754. National Gallery of Art, Washington."
  },
  "cawalton": {
    "text": [
      "Un audacieux pont de bois franchit la Tamise à Walton en une large arche.",
      "Sur la rive, des gens sont assis ou debout, au-dessus montent des nuages sombres."
    ],
    "fact": "1755. Yale Center for British Art, New Haven."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
