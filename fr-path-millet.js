// v10.43 FR content for Jean-François Millet’s life journey (1814–1875). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Paris",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "mlmartin": {
    "title": "Monsieur Martin",
    "museum": "Musée d’art de Cleveland"
  },
  "mllisle": {
    "title": "Leconte de Lisle",
    "museum": "National Gallery of Art, Washington"
  },
  "mlman": {
    "title": "Portrait d’homme",
    "museum": "National Gallery of Art, Washington"
  },
  "mlstorm": {
    "title": "La Fuite devant l’orage",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mlchickens": {
    "title": "Femme donnant à manger aux poules",
    "museum": "Art Institute of Chicago"
  },
  "mlgarden": {
    "title": "Scène de jardin",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mlrock": {
    "title": "Bergère assise sur un rocher",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mlrake": {
    "title": "Femme au râteau",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gleaners": {
    "title": "Les Glaneuses",
    "museum": "Musée d’Orsay, Paris"
  },
  "angelus": {
    "title": "L’Angélus",
    "museum": "Musée d’Orsay, Paris"
  },
  "mlshearers": {
    "title": "La Tonte des moutons",
    "museum": "Art Institute of Chicago"
  },
  "mlcalf": {
    "title": "Paysans rapportant à la ferme un veau né dans les champs",
    "museum": "Art Institute of Chicago"
  },
  "mlcows": {
    "title": "Le Rappel des vaches",
    "museum": "National Gallery of Art, Washington"
  },
  "mlauvergne": {
    "title": "En Auvergne",
    "museum": "Art Institute of Chicago"
  },
  "mllittle": {
    "title": "La Petite Bergère",
    "museum": "Art Institute of Chicago"
  },
  "mlkeeper": {
    "title": "La Gardeuse de troupeau",
    "museum": "Art Institute of Chicago"
  },
  "mlhaystacks": {
    "title": "Les Meules : l’automne",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.millet = {
  "title": "Le parcours de vie de Jean-François Millet",
  "part": "Normandie, Barbizon et Auvergne",
  "subtitle": "Portraits, travaux des champs et troupeaux",
  "intro": "Voyage à travers la vie de Jean-François Millet : des premiers portraits à Cherbourg et à Paris aux scènes des champs de Barbizon et aux paysages de ses dernières années. La plupart des images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Jean-François Millet meurt à Barbizon le 20 janvier 1875.",
    "Ses tableaux de la vie à la campagne inspirent plus tard de nombreux peintres, parmi lesquels Vincent van Gogh, qui copie de nombreux motifs de Millet."
  ],
  "epilogue": "Jean-François Millet meurt à Barbizon le 20 janvier 1875. Le parcours mène des premiers portraits aux troupeaux et aux meules de ses dernières années.",
  "life": "1814–1875"
};
  P.stations = Object.assign(P.stations || {}, {
  "mls1": {
    "place": "De Gréville à Paris",
    "when": "1814–1848",
    "mapLabel": "Cherbourg",
    "intro": [
      "Jean-François Millet naît le 4 octobre 1814 à Gruchy, près de Gréville, sur la côte normande, dans une famille de paysans.",
      "Il apprend à peindre à Cherbourg, part pour Paris en 1837 chez Paul Delaroche et gagne d’abord sa vie avec des portraits."
    ]
  },
  "millet1": {
    "place": "Barbizon : le travail des champs",
    "when": "1849–1862",
    "mapLabel": "Barbizon",
    "intro": [
      "En 1849, Millet s’installe avec sa famille à Barbizon, à l’orée de la forêt de Fontainebleau, et y reste jusqu’à la fin de sa vie.",
      "Il y peint paysannes, bergères et travailleurs des champs avec calme et gravité, sans les embellir."
    ]
  },
  "mls3": {
    "place": "Dernières années : Vichy, l’Auvergne et Barbizon",
    "when": "1863–1875",
    "mapLabel": "Vichy",
    "intro": [
      "Dans les années 1860, Millet devient plus connu ; avec sa femme, il passe plusieurs étés à Vichy et se promène dans les collines d’Auvergne.",
      "Dans ses derniers tableaux, le ciel, la lumière et le paysage prennent plus de place, et en 1868 il reçoit la croix de la Légion d’honneur."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mlmartin": {
    "text": [
      "Un homme en redingote sombre et col de chemise blanc regarde gravement depuis un fond sombre.",
      "Vers 1840, Millet peint surtout des portraits de bourgeois de Cherbourg."
    ],
    "fact": "1840. Musée d’art de Cleveland."
  },
  "mllisle": {
    "text": [
      "Un jeune homme en manteau bleu et foulard rouge pose une main sur un parapet de pierre.",
      "Le modèle est Charles Leconte de Lisle, qui deviendra plus tard un poète connu à Paris."
    ],
    "fact": "vers 1840–1841. National Gallery of Art, Washington."
  },
  "mlman": {
    "text": [
      "Un jeune homme aux cheveux sombres et aux favoris se tient de trois quarts, une main dans la poche de sa redingote.",
      "Millet place la silhouette sombre devant un mur clair et chaud."
    ],
    "fact": "vers 1845. National Gallery of Art, Washington."
  },
  "mlstorm": {
    "text": [
      "Une femme portant un fagot et un garçon se hâtent de rentrer à travers un champ sombre, dans le vent.",
      "De lourds nuages s’amoncellent au-dessus d’eux, le fichu de la femme flotte dans la tempête."
    ],
    "fact": "vers 1846. Metropolitan Museum of Art, New York."
  },
  "mlchickens": {
    "text": [
      "Une paysanne jette du grain aux poules devant un mur, un petit enfant s’accroche à sa jupe.",
      "La lumière tombe chaudement sur leurs vêtements."
    ],
    "fact": "1846–1848. Art Institute of Chicago."
  },
  "mlgarden": {
    "text": [
      "Un homme coiffé d’un chapeau travaille à genoux dans un potager, derrière lui deux femmes et un enfant s’affairent entre les plates-bandes.",
      "À l’arrière-plan, des fermes basses se dressent sous de grands arbres."
    ],
    "fact": "1854. Metropolitan Museum of Art, New York."
  },
  "mlrock": {
    "text": [
      "Une bergère en cape claire tricote, assise sur un rocher à l’ombre d’une haie.",
      "À gauche, la vue s’ouvre sur une plaine ensoleillée avec son troupeau."
    ],
    "fact": "1856. Metropolitan Museum of Art, New York."
  },
  "mlrake": {
    "text": [
      "Une paysanne rassemble le foin avec un long râteau de bois, à côté d’elle se dresse une petite meule.",
      "Au loin, d’autres personnes travaillent dans la prairie claire."
    ],
    "fact": "vers 1856–1857. Metropolitan Museum of Art, New York."
  },
  "gleaners": {
    "text": [
      "Trois paysannes se penchent sur le champ moissonné et ramassent les derniers épis.",
      "Derrière elles, la riche moisson gît dans les gerbes — tout près, et pourtant pas pour elles."
    ],
    "fact": "1857. Musée d’Orsay, Paris."
  },
  "angelus": {
    "text": [
      "Deux paysans dans le champ déposent le travail et prient.",
      "À l’arrière-plan se trouve une église : de là sonne l’Angélus, la prière du matin, de midi et du soir."
    ],
    "fact": "1857–1859. Musée d’Orsay, Paris."
  },
  "mlshearers": {
    "text": [
      "Sous un auvent, un paysan et une paysanne tondent ensemble un mouton.",
      "La femme se penche sur l’animal avec les forces, l’homme le maintient."
    ],
    "fact": "vers 1857–1861. Art Institute of Chicago."
  },
  "mlcalf": {
    "text": [
      "Deux hommes portent un veau nouveau-né jusqu’à la ferme sur un brancard de paille, la vache les suit de près.",
      "À l’entrée de la ferme, une femme et des enfants attendent leur arrivée."
    ],
    "fact": "1864. Art Institute of Chicago."
  },
  "mlcows": {
    "text": [
      "Un vacher debout sur un rocher souffle dans une corne, les vaches s’approchent lentement.",
      "Millet dessine la scène au pastel et au crayon devant un ciel rose du soir."
    ],
    "fact": "vers 1866. National Gallery of Art, Washington."
  },
  "mlauvergne": {
    "text": [
      "Sur une colline douce, une bergère en veste rouge, une quenouille à la main, se tient près de ses moutons, à côté d’un grand bouquet d’arbres.",
      "Au-dessus brille un ciel bleu aux nuages clairs."
    ],
    "fact": "vers 1866–1869. Art Institute of Chicago."
  },
  "mllittle": {
    "text": [
      "Une fillette enveloppée d’un grand châle se tient tête baissée près d’un arbre, une houlette à la main.",
      "Derrière elle, des moutons paissent devant une vaste plaine lumineuse."
    ],
    "fact": "1868–1872. Art Institute of Chicago."
  },
  "mlkeeper": {
    "text": [
      "Une bergère se tient au milieu de son troupeau, les moutons paissent autour d’elle dans la lumière du soir.",
      "Derrière elle, une lumière vive perce les nuages."
    ],
    "fact": "1871–1874. Art Institute of Chicago."
  },
  "mlhaystacks": {
    "text": [
      "Trois grandes meules se dressent dans une vaste plaine, un troupeau de moutons paît devant elles avec son berger.",
      "Le tableau fait partie d’une série des quatre saisons à laquelle Millet travaille dans ses dernières années."
    ],
    "fact": "vers 1874. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
