// v10.43 FR content for Amedeo Modigliani’s life journey (1884–1920). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "mgpompadour": {
    "title": "Madame Pompadour",
    "museum": "Art Institute of Chicago"
  },
  "mglipchitz": {
    "title": "Jacques et Berthe Lipchitz",
    "museum": "Art Institute of Chicago"
  },
  "mgdeleu": {
    "title": "Monsieur Deleu",
    "museum": "National Gallery of Art, Washington"
  },
  "mgbakst": {
    "title": "Léon Bakst",
    "museum": "National Gallery of Art, Washington"
  },
  "mgsinger": {
    "title": "Chanteuse de café",
    "museum": "National Gallery of Art, Washington"
  },
  "mgkisling": {
    "title": "Madame Kisling",
    "museum": "National Gallery of Art, Washington"
  },
  "mggreen": {
    "title": "Jeune fille au corsage vert",
    "museum": "National Gallery of Art, Washington"
  },
  "mgredhair": {
    "title": "Femme aux cheveux roux",
    "museum": "National Gallery of Art, Washington"
  },
  "mgadrienne": {
    "title": "Adrienne (Femme à la frange)",
    "museum": "National Gallery of Art, Washington"
  },
  "mgsoutine": {
    "title": "Chaïm Soutine",
    "museum": "National Gallery of Art, Washington"
  },
  "mgsailor": {
    "title": "Jeune fille au col marin",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mgitalian": {
    "title": "L’Italienne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mgroma": {
    "title": "Femme rom avec bébé",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.modigliani = {
  "title": "Le parcours de vie d’Amedeo Modigliani",
  "part": "Visages",
  "subtitle": "De Paris à Nice",
  "intro": "Voyage avec Amedeo Modigliani à travers ses dernières années : vers des amis, des artistes et des personnes qu’il peint avec de longs cous et des visages étroits. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Amedeo Modigliani meurt en 1920 à Paris.",
    "Ses portraits sont aujourd’hui exposés dans des musées du monde entier."
  ],
  "epilogue": "Amedeo Modigliani meurt en 1920. Le parcours traverse ses années parisiennes, avec des portraits d’amis et d’inconnus, jusqu’à la côte méditerranéenne, à Nice.",
  "life": "1884–1920"
};
  P.stations = Object.assign(P.stations || {}, {
  "mgs1": {
    "place": "Paris : amis et commanditaires",
    "when": "1915–1916",
    "mapLabel": "Paris",
    "intro": [
      "Amedeo Modigliani naît en 1884 à Livourne, en Italie, et s’installe à Paris en 1906.",
      "Il travaille d’abord aussi comme sculpteur, mais à la fin de 1913 ou au début de 1914, il revient entièrement à la peinture."
    ]
  },
  "mgs2": {
    "place": "Paris : visages de 1917",
    "when": "1917",
    "mapLabel": "Paris",
    "intro": [
      "En 1916, Léopold Zborowski est le marchand de Modigliani.",
      "Comme dans ses sculptures, Modigliani donne aux personnes de longs cous et des visages étroits."
    ]
  },
  "mgs3": {
    "place": "Regards silencieux",
    "when": "1917–1918",
    "mapLabel": "France",
    "intro": [
      "Vers 1914, Modigliani rencontre à Montparnasse le jeune peintre Chaïm Soutine, et les deux deviennent des amis proches.",
      "Beaucoup de ses portraits sont très stylisés, et il laisse souvent les yeux vides."
    ]
  },
  "mgs4": {
    "place": "Au bord de la Méditerranée",
    "when": "1918–1919",
    "mapLabel": "Nice",
    "intro": [
      "De mars 1918 à mai 1919, Modigliani vit dans le sud de la France pour se reposer, surtout à Nice.",
      "Loin de ses amis, il y peint de jeunes domestiques, des vendeuses et des enfants de la région."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mgpompadour": {
    "text": [
      "Une femme coiffée d’un grand chapeau noir regarde hors du tableau, devant un fond de champs gris et verts.",
      "Selon le musée, le titre évoque Madame de Pompadour à la cour du roi Louis XV, et le chapeau voyant donne au tableau une note enjouée."
    ],
    "fact": "1915. Art Institute of Chicago."
  },
  "mglipchitz": {
    "text": [
      "L’artiste Jacques Lipchitz se tient derrière sa femme, la poétesse russe Berthe Lipchitz, qui porte un col blanc.",
      "Lipchitz commande ce double portrait pour leur mariage, et selon lui Modigliani le peint en deux jours seulement."
    ],
    "fact": "1916. Art Institute of Chicago."
  },
  "mgdeleu": {
    "text": [
      "Un jeune homme aux cheveux noirs porte une veste brun-rouge et un foulard blanc.",
      "En 1943, le tableau était encore exposé sous le titre « Portrait de Kisling »."
    ],
    "fact": "1916. National Gallery of Art, Washington."
  },
  "mgbakst": {
    "text": [
      "Un homme moustachu porte un foulard bleu vif sur une veste sombre à motifs dorés.",
      "Le tableau a d’abord appartenu à Léon Bakst lui-même, et en 2013 la National Gallery l’a montré dans une exposition sur Diaghilev et les Ballets russes."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgsinger": {
    "text": [
      "Une jeune femme en robe noire est assise, les mains jointes, devant un mur gris clair.",
      "Le tableau se trouvait d’abord chez le marchand de Modigliani, Léopold Zborowski, à Paris."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgkisling": {
    "text": [
      "La femme a les cheveux courts brun-roux avec une frange droite, une chemise blanche et une cravate rouge.",
      "La signature « modigliani » figure en bas à droite."
    ],
    "fact": "vers 1917. National Gallery of Art, Washington."
  },
  "mggreen": {
    "text": [
      "Une jeune fille aux cheveux blond vénitien porte un corsage vert clair devant un mur brun-rouge.",
      "Lors d’une vente aux enchères à Paris en 1927, le tableau s’appelait « Le Corsage vert »."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgredhair": {
    "text": [
      "Une femme aux cheveux roux, en robe noire, appuie le bras sur le dossier d’une chaise.",
      "En 1931, le tableau a été montré à Pittsburgh sous le titre « Femme en noir »."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgadrienne": {
    "text": [
      "Une femme aux cheveux roux foncé, avec une frange, appuie la tête sur sa main.",
      "Un marchand a acheté le tableau en 1927 à un artiste de Montparnasse, ami de Modigliani."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgsoutine": {
    "text": [
      "Le peintre Chaïm Soutine est assis, les mains sur les genoux, et regarde hors du tableau, les yeux mi-clos.",
      "Modigliani peint plusieurs fois son ami, de dix ans son cadet, et en 1916 il le présente à son marchand Zborowski."
    ],
    "fact": "1918. National Gallery of Art, Washington."
  },
  "mgsailor": {
    "text": [
      "Une jeune fille aux cheveux sombres relevés porte un corsage gris-bleu à large col blanc.",
      "Le tableau est entré au Metropolitan Museum en 1960, don de Charles F. Iklé."
    ],
    "fact": "1918. Metropolitan Museum of Art, New York."
  },
  "mgitalian": {
    "text": [
      "Une femme en robe noire à col blanc est assise, les mains jointes, devant un mur rouge orangé.",
      "On ignore qui elle est ; Modigliani l’a peut-être choisie parce qu’elle venait, comme lui, d’Italie."
    ],
    "fact": "vers 1918–1919. Metropolitan Museum of Art, New York."
  },
  "mgroma": {
    "text": [
      "Une jeune femme en chemisier blanc brodé de rouge tient dans ses bras un enfant enveloppé de linges bleu foncé.",
      "En 1930, la Biennale de Venise a montré le tableau sous le titre « Maternità », maternité."
    ],
    "fact": "1919. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
