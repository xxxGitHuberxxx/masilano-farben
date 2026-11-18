// v10.21 FR content for Koloman Moser’s life journey, Part 1 (1868–1918). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collection particulière"
});
  P.works = Object.assign(P.works || {}, {
  "kmself95": {
    "title": "Autoportrait en jeune homme",
    "museum": "Collection particulière"
  },
  "kmczeschka": {
    "title": "Portrait de Carl Otto Czeschka",
    "museum": "Collection particulière"
  },
  "kmself10": {
    "title": "Autoportrait",
    "museum": "Collection particulière"
  },
  "kmhut": {
    "title": "Jeune femme au chapeau",
    "museum": "Collection particulière"
  },
  "kmmaedchen": {
    "title": "Portrait de jeune fille",
    "museum": "Collection particulière"
  },
  "kmprimeln": {
    "title": "Primevères dans un panier",
    "museum": "Collection particulière"
  },
  "kmbirnen": {
    "title": "Coupe de fruits aux poires",
    "museum": "Collection particulière"
  },
  "kmwanderer": {
    "title": "Le Voyageur",
    "museum": "Collection particulière"
  },
  "kmdents": {
    "title": "Dents du Midi",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.moser = {
  "title": "Le parcours de vie de Koloman Moser",
  "life": "1868–1918",
  "part": "Partie 1 · De la Sécession à la peinture",
  "subtitle": "Vienne, portraits, fleurs et le voyageur",
  "intro": "Voyage avec Koloman Moser, le Viennois de la Sécession et de la Wiener Werkstätte, qui plus tard se tourne fermement vers la peinture : des autoportraits de jeunesse et des portraits d’amis aux pièces de fleurs, jusqu’aux paysages et à « Le Voyageur ». De courtes étapes et des tableaux à colorier. Cette première partie suit Moser le peintre.",
  "ending": [
    "Koloman Moser meurt à Vienne le 18 octobre 1918, à cinquante ans. Derrière lui restent la Sécession, la Wiener Werkstätte et une œuvre peinte tardive qui lui est propre.",
    "Le chemin peut encore s’allonger. D’autres projets, des arts appliqués et des paysages pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "Le 18 octobre 1918, Moser meurt à Vienne, à cinquante ans. Une partie ultérieure pourra ajouter des projets et d’autres paysages."
};
  P.stations = Object.assign(P.stations || {}, {
  "kmwien": {
    "place": "Vienne et la Sécession",
    "when": "1868–1907",
    "mapLabel": "Vienne",
    "intro": [
      "Koloman Moser naît à Vienne le 30 mars 1868. En 1897, il est parmi les fondateurs de la Sécession ; en 1903, avec Josef Hoffmann, de la Wiener Werkstätte. En 1905, il épouse Ditha Mautner von Markhof.",
      "En 1907, il quitte la Werkstätte et se tourne plus fermement vers la peinture. Les portraits de jeunesse et le tableau de Loïe Fuller appartiennent à ces années."
    ]
  },
  "kmbild": {
    "place": "Portraits",
    "when": "1910–1915",
    "mapLabel": "Portrait",
    "intro": [
      "Après 1907, Moser peint des autoportraits et des portraits de femmes et de jeunes filles, simples et fermes. L’ordre de ses projets reste visible dans le découpage.",
      "Le portrait devient pour lui aussi important que l’ornement l’était autrefois. Le regard reste sur la personne."
    ]
  },
  "kmblumen": {
    "place": "Fleurs et natures mortes",
    "when": "1912–1915",
    "mapLabel": "Fleurs",
    "intro": [
      "Primevères, coupes de fruits, arrangements nets : Moser peint des natures mortes avec le soin d’un dessinateur et la liberté d’un peintre.",
      "La simplicité est voulue. La couleur porte, sans se perdre dans l’abondance."
    ]
  },
  "kmland": {
    "place": "Paysage et voyageur",
    "when": "1913–1918",
    "mapLabel": "Alpes",
    "intro": [
      "Dans les années 1910, Moser séjourne à plusieurs reprises en Suisse romande et peint des montagnes telles que les Dents du Midi. « Le Voyageur » donne à la figure le sérieux d’une icône moderne.",
      "Le 18 octobre 1918, il meurt à Vienne, à cinquante ans. Une partie ultérieure pourra ajouter des projets et d’autres paysages."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "kmself95": {
    "text": [
      "L’autoportrait de jeunesse, vers 1895, montre Moser en jeune homme, le regard ferme, encore avant l’apogée de la Sécession. La peinture est déjà sienne, même si le dessin d’art va bientôt l’occuper tout entier.",
      "Deux ans plus tard, il est parmi les fondateurs de la Sécession viennoise, aux côtés de Klimt et de Hoffmann."
    ],
    "fact": "vers 1895. Collection particulière."
  },
  "kmczeschka": {
    "text": [
      "Carl Otto Czeschka, peintre et dessinateur, pose pour Moser en 1907. Le portrait est ferme et amical, d’un découpage net et moderne.",
      "La même année, Moser quitte la Wiener Werkstätte, qu’il avait fondée avec Josef Hoffmann en 1903, et se tourne plus fermement vers la peinture."
    ],
    "fact": "1907. Collection particulière."
  },
  "kmself10": {
    "text": [
      "Vers 1910, Moser se regarde à nouveau, plus mûr, après les années de la Werkstätte. Le portrait est simple et ferme.",
      "Il s’est repris le temps de peindre. Désormais portraits, fleurs et paysages appartiennent au cœur de son œuvre."
    ],
    "fact": "vers 1910. Collection particulière."
  },
  "kmhut": {
    "text": [
      "Une jeune femme porte un chapeau, le visage net, le plan calme. Moser peint le portrait avec le même ordre qui distingue ses projets.",
      "La mode du temps est là, mais elle ne l’emporte pas. Le regard reste sur la personne."
    ],
    "fact": "vers 1910. Collection particulière."
  },
  "kmmaedchen": {
    "text": [
      "Un portrait de jeune fille, simple et attentif. Moser donne au jeune visage du calme et de la clarté, sans le styliser.",
      "Dans ces années, le portrait devient pour lui aussi important que l’ornement projeté l’était autrefois."
    ],
    "fact": "vers 1913. Collection particulière."
  },
  "kmprimeln": {
    "text": [
      "Des primevères sont dans un panier, les fleurs lumineuses, l’arrangement net. Moser peint la nature morte avec le soin d’un dessinateur et la liberté d’un peintre.",
      "Vers 1912, les pièces de fleurs appartiennent pleinement à son œuvre. La couleur porte, sans se perdre dans l’abondance."
    ],
    "fact": "vers 1912. Collection particulière."
  },
  "kmbirnen": {
    "text": [
      "Une coupe de poires rousses, les formes rondes et fermes, la lumière calme. Moser ordonne la nature morte comme un plan, non comme une parade.",
      "La simplicité est voulue. Dans de tels tableaux, le dessinateur reste visible dans le peintre, sans le gouverner."
    ],
    "fact": "vers 1913. Collection particulière."
  },
  "kmwanderer": {
    "text": [
      "Un voyageur traverse un large paysage frais, petit sous le ciel et le versant. Moser donne à la figure le sérieux d’une icône moderne, sans pathos.",
      "Le tableau d’environ 1914 compte parmi ses peintures les plus connues. Le chemin lui-même devient le motif."
    ],
    "fact": "vers 1914. Collection particulière."
  },
  "kmdents": {
    "text": [
      "Les Dents du Midi s’élèvent au-dessus d’un large paysage clair. Moser peint les montagnes suisses en bandes nettes et calmes, sans un temps dramatique.",
      "Dans les années 1910, il séjourne à plusieurs reprises en Suisse romande. Le paysage devient pour lui aussi important que le portrait."
    ],
    "fact": "vers 1913. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
