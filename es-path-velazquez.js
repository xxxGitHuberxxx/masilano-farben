// v10.43 ES content for Diego Velázquez’s life journey (1599–1660). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Museo del Prado, Madrid": "Museo del Prado, Madrid"
});
  P.works = Object.assign(P.works || {}, {
  "vzkitchen": {
    "title": "Escena de cocina",
    "museum": "Art Institute of Chicago"
  },
  "vzemmaus": {
    "title": "La cena de Emaús",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "vzphilip": {
    "title": "Felipe IV, rey de España",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "vzcalabazas": {
    "title": "Retrato del bufón Calabazas",
    "museum": "Museo de Arte de Cleveland"
  },
  "vzselfman": {
    "title": "Retrato de un hombre, posiblemente un autorretrato",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "vzpareja": {
    "title": "Juan de Pareja",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "vzteresa": {
    "title": "María Teresa, infanta de España",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "meninas": {
    "title": "Las Meninas",
    "museum": "Museo del Prado, Madrid"
  }
});
  P.paths = P.paths || {};
  P.paths.velazquez = {
  "title": "El camino de vida de Diego Velázquez",
  "part": "De Sevilla a la corte de Madrid",
  "subtitle": "Cocina, rey y corte",
  "intro": "Viaja por la vida de Diego Velázquez: de las escenas de cocina de Sevilla, pasando por la corte de Madrid y Roma, hasta «Las Meninas». Este camino es más corto que otros, porque solo unos pocos cuadros de Velázquez están disponibles como imágenes libres de museos. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Diego Velázquez muere en Madrid el 6 de agosto de 1660.",
    "Durante casi cuarenta años pinta al rey y a su corte."
  ],
  "epilogue": "Diego Velázquez muere en Madrid el 6 de agosto de 1660. El camino lleva de las escenas de cocina de Sevilla, pasando por la corte y Roma, hasta «Las Meninas».",
  "life": "1599–1660"
};
  P.stations = Object.assign(P.stations || {}, {
  "vzs1": {
    "place": "Sevilla: años de aprendizaje",
    "when": "1599–1622",
    "mapLabel": "Sevilla",
    "intro": [
      "Diego Velázquez es bautizado en Sevilla en junio de 1599.",
      "Aprende con el pintor Francisco Pacheco y pinta escenas de cocina con gente sencilla y objetos cotidianos."
    ]
  },
  "vzs2": {
    "place": "Pintor del rey",
    "when": "1622–1629",
    "mapLabel": "Madrid",
    "intro": [
      "En 1623 Velázquez se convierte en Madrid en pintor del rey Felipe IV.",
      "Desde entonces pinta sobre todo al rey y a su familia."
    ]
  },
  "vzs3": {
    "place": "Italia y la corte",
    "when": "1629–1648",
    "mapLabel": "Madrid",
    "intro": [
      "En 1629 Velázquez viaja por primera vez a Italia y estudia allí a los grandes pintores.",
      "De vuelta en Madrid pinta no solo al rey, sino también a personas que trabajan en la corte."
    ]
  },
  "vzs4": {
    "place": "Roma",
    "when": "1649–1651",
    "mapLabel": "Roma",
    "intro": [
      "En 1649 Velázquez viaja por segunda vez a Italia para comprar obras de arte para el rey.",
      "En Roma pinta retratos que causan gran admiración."
    ]
  },
  "velazquez1": {
    "place": "Madrid: los últimos años",
    "when": "1651–1660",
    "mapLabel": "Madrid",
    "intro": [
      "De vuelta en Madrid, Velázquez pinta a los hijos del rey.",
      "En 1656 pinta «Las Meninas», su cuadro más famoso."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "vzkitchen": {
    "text": [
      "Una criada con un paño blanco en la cabeza está detrás de una mesa con jarras y cuencos.",
      "El metal de las vasijas brilla a la luz sobre el fondo oscuro."
    ],
    "fact": "1618–1620. Art Institute of Chicago."
  },
  "vzemmaus": {
    "text": [
      "Jesús, con túnica roja, está sentado con dos discípulos a una mesa con mantel blanco.",
      "Según la Biblia, los discípulos solo lo reconocen cuando parte el pan."
    ],
    "fact": "1622–1623. Metropolitan Museum of Art, Nueva York."
  },
  "vzphilip": {
    "text": [
      "El joven rey está de pie, vestido de negro, con un cuello blanco rígido y una cadena de oro.",
      "Velázquez pinta a Felipe IV muchas veces, casi durante toda su vida."
    ],
    "fact": "1624. Metropolitan Museum of Art, Nueva York."
  },
  "vzcalabazas": {
    "text": [
      "El bufón Calabazas está de pie, vestido de negro, junto a una silla plegable.",
      "Los bufones deben entretener al rey y a su corte."
    ],
    "fact": "hacia 1631–1632. Museo de Arte de Cleveland."
  },
  "vzselfman": {
    "text": [
      "Un hombre de pelo oscuro, bigote y cuello blanco nos mira con calma.",
      "Quizá Velázquez se pintó aquí a sí mismo."
    ],
    "fact": "hacia 1635. Metropolitan Museum of Art, Nueva York."
  },
  "vzpareja": {
    "text": [
      "Juan de Pareja, el ayudante de Velázquez, nos mira de frente y con orgullo.",
      "Velázquez lo pinta en Roma en 1650."
    ],
    "fact": "1650. Metropolitan Museum of Art, Nueva York."
  },
  "vzteresa": {
    "text": [
      "La joven infanta lleva un peinado grande y ancho con lazos plateados.",
      "María Teresa es hija del rey Felipe IV."
    ],
    "fact": "1651–1654. Metropolitan Museum of Art, Nueva York."
  },
  "meninas": {
    "text": [
      "En el centro está la pequeña infanta Margarita, rodeada de meninas, enanos de corte y un perro.",
      "A la izquierda Velázquez se pinta a sí mismo — y en el espejo del fondo aparecen el rey y la reina, es decir, en cierto modo, nosotros."
    ],
    "fact": "1656. Museo del Prado, Madrid."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
