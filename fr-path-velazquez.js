// v10.43 FR content for Diego Velázquez’s life journey (1599–1660). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Museo del Prado, Madrid": "Museo del Prado, Madrid"
});
  P.works = Object.assign(P.works || {}, {
  "vzkitchen": {
    "title": "Scène de cuisine",
    "museum": "Art Institute of Chicago"
  },
  "vzemmaus": {
    "title": "Les Pèlerins d’Emmaüs",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "vzphilip": {
    "title": "Philippe IV, roi d’Espagne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "vzcalabazas": {
    "title": "Portrait du bouffon Calabazas",
    "museum": "Musée d’art de Cleveland"
  },
  "vzselfman": {
    "title": "Portrait d’homme, peut-être un autoportrait",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "vzpareja": {
    "title": "Juan de Pareja",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "vzteresa": {
    "title": "María Teresa, infante d’Espagne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "meninas": {
    "title": "Las Meninas",
    "museum": "Museo del Prado, Madrid"
  }
});
  P.paths = P.paths || {};
  P.paths.velazquez = {
  "title": "Le parcours de vie de Diego Velázquez",
  "part": "De Séville à la cour de Madrid",
  "subtitle": "Scène de cuisine, roi et cour",
  "intro": "Voyage à travers la vie de Diego Velázquez : des scènes de cuisine de Séville jusqu’aux « Las Meninas », en passant par la cour de Madrid et Rome. Ce parcours est plus court que d’autres, car seuls quelques tableaux de Velázquez sont disponibles en reproductions libres de musées. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Diego Velázquez meurt à Madrid le 6 août 1660.",
    "Pendant près de quarante ans, il peint le roi et sa cour."
  ],
  "epilogue": "Diego Velázquez meurt à Madrid le 6 août 1660. Le parcours mène des scènes de cuisine de Séville aux « Las Meninas », en passant par la cour et Rome.",
  "life": "1599–1660"
};
  P.stations = Object.assign(P.stations || {}, {
  "vzs1": {
    "place": "Séville : les années d’apprentissage",
    "when": "1599–1622",
    "mapLabel": "Séville",
    "intro": [
      "Diego Velázquez est baptisé à Séville en juin 1599.",
      "Il se forme auprès du peintre Francisco Pacheco et peint des scènes de cuisine avec des gens simples et des objets du quotidien."
    ]
  },
  "vzs2": {
    "place": "Peintre du roi",
    "when": "1622–1629",
    "mapLabel": "Madrid",
    "intro": [
      "En 1623, Velázquez devient à Madrid peintre du roi Philippe IV.",
      "Dès lors, il peint surtout le roi et sa famille."
    ]
  },
  "vzs3": {
    "place": "L’Italie et la cour",
    "when": "1629–1648",
    "mapLabel": "Madrid",
    "intro": [
      "En 1629, Velázquez part pour la première fois en Italie et y étudie les grands peintres.",
      "De retour à Madrid, il peint non seulement le roi, mais aussi des personnes qui travaillent à la cour."
    ]
  },
  "vzs4": {
    "place": "Rome",
    "when": "1649–1651",
    "mapLabel": "Rome",
    "intro": [
      "En 1649, Velázquez part une seconde fois en Italie pour acheter des œuvres d’art pour le roi.",
      "À Rome, il peint des portraits qui font sensation."
    ]
  },
  "velazquez1": {
    "place": "Madrid : les dernières années",
    "when": "1651–1660",
    "mapLabel": "Madrid",
    "intro": [
      "De retour à Madrid, Velázquez peint les enfants du roi.",
      "En 1656, il peint « Las Meninas », son tableau le plus célèbre."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "vzkitchen": {
    "text": [
      "Une servante, un linge blanc sur la tête, se tient derrière une table avec des cruches et des bols.",
      "Le métal des récipients brille dans la lumière devant le fond sombre."
    ],
    "fact": "1618–1620. Art Institute of Chicago."
  },
  "vzemmaus": {
    "text": [
      "Jésus, vêtu de rouge, est assis avec deux disciples à une table couverte d’une nappe blanche.",
      "Selon la Bible, les disciples ne le reconnaissent qu’au moment où il rompt le pain."
    ],
    "fact": "1622–1623. Metropolitan Museum of Art, New York."
  },
  "vzphilip": {
    "text": [
      "Le jeune roi se tient debout, tout en noir, avec un col blanc rigide et une chaîne d’or.",
      "Velázquez peint Philippe IV de nombreuses fois, presque toute sa vie."
    ],
    "fact": "1624. Metropolitan Museum of Art, New York."
  },
  "vzcalabazas": {
    "text": [
      "Le bouffon Calabazas se tient debout, vêtu de noir, à côté d’un siège pliant.",
      "Les bouffons doivent divertir le roi et sa cour."
    ],
    "fact": "vers 1631–1632. Musée d’art de Cleveland."
  },
  "vzselfman": {
    "text": [
      "Un homme aux cheveux sombres, moustachu, au col blanc, nous regarde calmement.",
      "Peut-être Velázquez s’est-il peint lui-même ici."
    ],
    "fact": "vers 1635. Metropolitan Museum of Art, New York."
  },
  "vzpareja": {
    "text": [
      "Juan de Pareja, l’assistant de Velázquez, nous regarde fièrement, droit dans les yeux.",
      "Velázquez le peint à Rome en 1650."
    ],
    "fact": "1650. Metropolitan Museum of Art, New York."
  },
  "vzteresa": {
    "text": [
      "La jeune infante porte une grande coiffure large ornée de nœuds argentés.",
      "María Teresa est la fille du roi Philippe IV."
    ],
    "fact": "1651–1654. Metropolitan Museum of Art, New York."
  },
  "meninas": {
    "text": [
      "Au centre se tient la petite infante Marguerite, entourée de demoiselles d’honneur, de nains de cour et d’un chien.",
      "À gauche, Velázquez se peint lui-même — et dans le miroir du fond apparaissent le roi et la reine, c’est-à-dire, en un sens, nous-mêmes."
    ],
    "fact": "1656. Museo del Prado, Madrid."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
