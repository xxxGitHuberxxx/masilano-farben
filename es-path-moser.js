// v10.21 ES content for Koloman Moser’s life journey, Part 1 (1868–1918). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Colección particular"
});
  P.works = Object.assign(P.works || {}, {
  "kmself95": {
    "title": "Autorretrato de joven",
    "museum": "Colección particular"
  },
  "kmczeschka": {
    "title": "Retrato de Carl Otto Czeschka",
    "museum": "Colección particular"
  },
  "kmself10": {
    "title": "Autorretrato",
    "museum": "Colección particular"
  },
  "kmhut": {
    "title": "Joven con sombrero",
    "museum": "Colección particular"
  },
  "kmmaedchen": {
    "title": "Retrato de muchacha",
    "museum": "Colección particular"
  },
  "kmprimeln": {
    "title": "Primaveras en un cesto",
    "museum": "Colección particular"
  },
  "kmbirnen": {
    "title": "Frutero con peras",
    "museum": "Colección particular"
  },
  "kmwanderer": {
    "title": "El caminante",
    "museum": "Colección particular"
  },
  "kmdents": {
    "title": "Dents du Midi",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.moser = {
  "title": "El camino de vida de Koloman Moser",
  "life": "1868–1918",
  "part": "Parte 1 · De la Secesión a la pintura",
  "subtitle": "Viena, retratos, flores y el caminante",
  "intro": "Viaja con Koloman Moser, el vienés de la Secesión y de la Wiener Werkstätte, que más tarde se entrega de lleno a la pintura: desde autorretratos tempranos y retratos de amigos, pasando por las flores, hasta los paisajes y «El caminante». Estaciones breves y cuadros para colorear. Esta primera parte sigue al Moser pintor.",
  "ending": [
    "Koloman Moser muere en Viena el 18 de octubre de 1918, a los cincuenta años. Detrás quedan la Secesión, la Wiener Werkstätte y una obra pictórica tardía propia.",
    "El camino puede seguir creciendo. Más diseños, artes aplicadas y paisajes pueden seguir en una parte posterior."
  ],
  "epilogue": "El 18 de octubre de 1918 Moser muere en Viena, a los cincuenta años. Una parte posterior puede añadir diseños y más paisajes."
};
  P.stations = Object.assign(P.stations || {}, {
  "kmwien": {
    "place": "Viena y la Secesión",
    "when": "1868–1907",
    "mapLabel": "Viena",
    "intro": [
      "Koloman Moser nace en Viena el 30 de marzo de 1868. En 1897 es uno de los fundadores de la Secesión; en 1903, con Josef Hoffmann, de la Wiener Werkstätte. En 1905 se casa con Ditha Mautner von Markhof.",
      "En 1907 se aparta de la Werkstätte y vuelve con más firmeza a la pintura. Los retratos tempranos y el cuadro de Loïe Fuller pertenecen a estos años."
    ]
  },
  "kmbild": {
    "place": "Retratos",
    "when": "1910–1915",
    "mapLabel": "Retrato",
    "intro": [
      "Después de 1907 Moser pinta autorretratos y retratos de mujeres y muchachas, sencillos y firmes. El orden de sus diseños sigue visible en el corte.",
      "El retrato se le vuelve tan importante como lo fue antes el ornamento. La mirada sigue en la persona."
    ]
  },
  "kmblumen": {
    "place": "Flores y bodegones",
    "when": "1912–1915",
    "mapLabel": "Flores",
    "intro": [
      "Primaveras, fruteros, arreglos nítidos: Moser pinta bodegones con el cuidado de un diseñador y la libertad de un pintor.",
      "La sencillez es deliberada. El color sostiene, sin perderse en la abundancia."
    ]
  },
  "kmland": {
    "place": "Paisaje y caminante",
    "when": "1913–1918",
    "mapLabel": "Alpes",
    "intro": [
      "En los años 1910 Moser pasa temporadas repetidas en la Suiza occidental y pinta montañas como las Dents du Midi. «El caminante» da a la figura la seriedad de un icono moderno.",
      "El 18 de octubre de 1918 muere en Viena, a los cincuenta años. Una parte posterior puede añadir diseños y más paisajes."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "kmself95": {
    "text": [
      "El autorretrato temprano de hacia 1895 muestra a Moser de joven, con la mirada firme, aún antes del apogeo de la Secesión. La pintura ya le pertenece, aunque el diseño pronto lo ocupe por entero.",
      "Dos años más tarde es uno de los fundadores de la Secesión de Viena, junto a Klimt y Hoffmann."
    ],
    "fact": "hacia 1895. Colección particular."
  },
  "kmczeschka": {
    "text": [
      "Carl Otto Czeschka, pintor y diseñador, posa para Moser en 1907. El retrato es firme y amistoso, de un corte nítido y moderno.",
      "Ese mismo año Moser se aparta de la Wiener Werkstätte, que había fundado con Josef Hoffmann en 1903, y vuelve con más firmeza a la pintura."
    ],
    "fact": "1907. Colección particular."
  },
  "kmself10": {
    "text": [
      "Hacia 1910 Moser se vuelve a mirar, más maduro, después de los años de la Werkstätte. El retrato es sencillo y firme.",
      "Se ha reservado de nuevo el tiempo para pintar. Desde entonces retratos, flores y paisajes pertenecen al centro de su obra."
    ],
    "fact": "hacia 1910. Colección particular."
  },
  "kmhut": {
    "text": [
      "Una joven lleva sombrero, el rostro nítido, el plano sereno. Moser pinta el retrato con el mismo orden que distingue sus diseños.",
      "La moda del momento está, pero no predomina. La mirada sigue en la persona."
    ],
    "fact": "hacia 1910. Colección particular."
  },
  "kmmaedchen": {
    "text": [
      "Un retrato de muchacha, sencillo y atento. Moser da al rostro joven calma y claridad, sin estilizarlo.",
      "En estos años el retrato se le vuelve tan importante como lo fue antes el ornamento diseñado."
    ],
    "fact": "hacia 1913. Colección particular."
  },
  "kmprimeln": {
    "text": [
      "Las primaveras están en un cesto, las flores luminosas, el arreglo nítido. Moser pinta el bodegón con el cuidado de un diseñador y la libertad de un pintor.",
      "Hacia 1912 los floreros pertenecen de lleno a su obra. El color sostiene, sin perderse en la abundancia."
    ],
    "fact": "hacia 1912. Colección particular."
  },
  "kmbirnen": {
    "text": [
      "Un frutero con peras rojizas, las formas redondas y firmes, la luz serena. Moser ordena el bodegón como un plano, no como un fasto.",
      "La sencillez es deliberada. En cuadros así el diseñador sigue visible en el pintor, sin dominarlo."
    ],
    "fact": "hacia 1913. Colección particular."
  },
  "kmwanderer": {
    "text": [
      "Un caminante cruza un paisaje amplio y fresco, pequeño bajo el cielo y la ladera. Moser da a la figura la seriedad de un icono moderno, sin patetismo.",
      "El cuadro de hacia 1914 es uno de sus óleos más conocidos. El camino mismo se vuelve el motivo."
    ],
    "fact": "hacia 1914. Colección particular."
  },
  "kmdents": {
    "text": [
      "Las Dents du Midi se alzan sobre un paisaje amplio y claro. Moser pinta las montañas suizas en franjas nítidas y serenas, sin un tiempo dramático.",
      "En los años 1910 pasa temporadas repetidas en la Suiza occidental. El paisaje se le vuelve tan importante como el retrato."
    ],
    "fact": "hacia 1913. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
