// v10.43 ES content for Francisco de Goya’s life journey (1746–1828). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Museo del Prado, Madrid": "Museo del Prado, Madrid",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "quitasol": {
    "title": "El quitasol",
    "museum": "Museo del Prado, Madrid"
  },
  "gywinter": {
    "title": "Escena de invierno",
    "museum": "Art Institute of Chicago"
  },
  "gyram": {
    "title": "Niño sobre un carnero",
    "museum": "Art Institute of Chicago"
  },
  "gyteresa": {
    "title": "María Teresa de Borbón y Vallabriga",
    "museum": "National Gallery of Art, Washington"
  },
  "gypontejos": {
    "title": "La marquesa de Pontejos",
    "museum": "National Gallery of Art, Washington"
  },
  "gyaltamira": {
    "title": "La condesa de Altamira y su hija María Agustina",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gyosorio": {
    "title": "Manuel Osorio Manrique de Zúñiga",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gymartinez": {
    "title": "Sebastián Martínez y Pérez",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gyambrose": {
    "title": "San Ambrosio",
    "museum": "Museo de Arte de Cleveland"
  },
  "gynoriega": {
    "title": "Don Antonio Noriega",
    "museum": "National Gallery of Art, Washington"
  },
  "gysureda": {
    "title": "Bartolomé Sureda y Miserol",
    "museum": "National Gallery of Art, Washington"
  },
  "gysuredaw": {
    "title": "Thérèse Louise de Sureda",
    "museum": "National Gallery of Art, Washington"
  },
  "gygarcini": {
    "title": "Ignacio Garcini y Queralt, brigadier de ingenieros",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gyjosefa": {
    "title": "Josefa de Castilla Portugal y van Asbrock de Garcini",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gynarcisa": {
    "title": "Narcisa Barañano Gayoso de Goicoechea",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gymantilla": {
    "title": "Joven con mantilla y basquiña",
    "museum": "National Gallery of Art, Washington"
  },
  "gymaiquez": {
    "title": "Retrato de Isidoro Máiquez",
    "museum": "Art Institute of Chicago"
  },
  "gysabasa": {
    "title": "Señora Sabasa García",
    "museum": "National Gallery of Art, Washington"
  },
  "gyguye": {
    "title": "Victor Guye",
    "museum": "National Gallery of Art, Washington"
  },
  "gypepito": {
    "title": "José Costa y Bonells, llamado Pepito",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gyromero": {
    "title": "Retrato del general José Manuel Romero",
    "museum": "Art Institute of Chicago"
  },
  "gycuervo": {
    "title": "Retrato de don Juan Antonio Cuervo",
    "museum": "Museo de Arte de Cleveland"
  },
  "gytiburcio": {
    "title": "Tiburcio Pérez y Cuervo, el arquitecto",
    "museum": "Metropolitan Museum of Art, Nueva York"
  }
});
  P.paths = P.paths || {};
  P.paths.goya = {
  "title": "El camino de vida de Francisco de Goya",
  "part": "Del cartón para tapiz al pintor de cámara",
  "subtitle": "Bocetos, niños y retratos de España",
  "intro": "Viaja por la vida de Francisco de Goya: de los alegres cartones para tapices y los retratos para la nobleza y la corte a los años de guerra en Madrid. Este camino es más corto que otros, porque solo unos pocos cuadros de Goya están disponibles como imágenes libres de museos. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Francisco de Goya muere en Burdeos el 16 de abril de 1828.",
    "Sus retratos muestran a la gente de su tiempo, desde niños hasta generales."
  ],
  "epilogue": "Francisco de Goya muere en Burdeos el 16 de abril de 1828. El camino lleva de los cartones para tapices, pasando por los retratos para la nobleza y la corte, a sus últimos años.",
  "life": "1746–1828"
};
  P.stations = Object.assign(P.stations || {}, {
  "goya1": {
    "place": "Madrid: cartones para tapices",
    "when": "1746–1787",
    "mapLabel": "Madrid",
    "intro": [
      "Francisco de Goya nace el 30 de marzo de 1746 en Fuendetodos, cerca de Zaragoza.",
      "Desde 1775 pinta en Madrid cartones para la Real Fábrica de Tapices: escenas alegres de la vida diaria."
    ]
  },
  "gys2": {
    "place": "Retratos para la nobleza",
    "when": "1783–1788",
    "mapLabel": "Madrid",
    "intro": [
      "Cada vez más familias nobles se hacen retratar por Goya, a menudo con sus hijos y perros.",
      "En 1786 se convierte en pintor del rey."
    ]
  },
  "gys3": {
    "place": "Pintor de cámara y grave enfermedad",
    "when": "1789–1799",
    "mapLabel": "Cádiz",
    "intro": [
      "En 1789 Goya es nombrado pintor de cámara. En 1792 enferma gravemente y se recupera en Cádiz, en casa de su amigo Sebastián Martínez.",
      "Tras la enfermedad queda sordo."
    ]
  },
  "gys4": {
    "place": "Retratos en Madrid",
    "when": "1800–1805",
    "mapLabel": "Madrid",
    "intro": [
      "En 1799 Goya es nombrado primer pintor de cámara. Ahora es el retratista más solicitado de España.",
      "Pinta a funcionarios, oficiales, comerciantes y a sus esposas."
    ]
  },
  "gys5": {
    "place": "Años de guerra",
    "when": "1806–1812",
    "mapLabel": "Madrid",
    "intro": [
      "En 1808 las tropas francesas invaden España. La guerra dura hasta 1814.",
      "Goya se queda en Madrid y sigue pintando retratos, también de niños."
    ]
  },
  "gys6": {
    "place": "Los últimos años",
    "when": "1814–1828",
    "mapLabel": "Madrid · Burdeos",
    "intro": [
      "En 1819 Goya compra una casa de campo cerca de Madrid, la «Quinta del Sordo».",
      "En 1824 se traslada a Burdeos, en Francia."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "quitasol": {
    "text": [
      "Un joven sostiene una sombrilla sobre una mujer sentada para que el sol no la deslumbre.",
      "El cuadro es un cartón para un tapiz del palacio real de El Pardo."
    ],
    "fact": "1777. Museo del Prado, Madrid."
  },
  "gywinter": {
    "text": [
      "Unos hombres con gruesos abrigos avanzan por la nieve, acompañados de un perro.",
      "El pequeño cuadro es un boceto para un tapiz."
    ],
    "fact": "hacia 1786. Art Institute of Chicago."
  },
  "gyram": {
    "text": [
      "Un niño monta alegremente un carnero oscuro.",
      "También este cuadro es un cartón para un tapiz."
    ],
    "fact": "1786–1787. Art Institute of Chicago."
  },
  "gyteresa": {
    "text": [
      "Una niña pequeña con un largo vestido de gala está ante un paisaje de montañas.",
      "A su lado está sentado un perro blanco."
    ],
    "fact": "1783. National Gallery of Art, Washington."
  },
  "gypontejos": {
    "text": [
      "Una joven con un vestido claro y amplio está de pie en un parque.",
      "A sus pies está sentado un pequeño carlino."
    ],
    "fact": "hacia 1786. National Gallery of Art, Washington."
  },
  "gyaltamira": {
    "text": [
      "Una madre con vestido de seda rosa está sentada en un sofá con su hija pequeña en el regazo.",
      "La tela rosa brilla a la luz."
    ],
    "fact": "1787–1788. Metropolitan Museum of Art, Nueva York."
  },
  "gyosorio": {
    "text": [
      "Un niño con traje rojo sujeta una urraca con un cordel.",
      "A la izquierda, unos gatos miran atentos al pájaro."
    ],
    "fact": "1787–1788. Metropolitan Museum of Art, Nueva York."
  },
  "gymartinez": {
    "text": [
      "El comerciante Sebastián Martínez está sentado con una casaca clara y sostiene una hoja de papel.",
      "Es amigo de Goya y coleccionista de cuadros."
    ],
    "fact": "1792. Metropolitan Museum of Art, Nueva York."
  },
  "gyambrose": {
    "text": [
      "El obispo Ambrosio, con alta mitra blanca, está sentado a una mesa y escribe.",
      "La luz cae con fuerza sobre su vestidura blanca."
    ],
    "fact": "hacia 1796–1799. Museo de Arte de Cleveland."
  },
  "gynoriega": {
    "text": [
      "Un hombre con casaca oscura está sentado ante una mesa con papeles.",
      "Es un alto funcionario de la Hacienda real."
    ],
    "fact": "1801. National Gallery of Art, Washington."
  },
  "gysureda": {
    "text": [
      "Un joven de pelo rizado sostiene el sombrero en la mano. El forro brilla en rojo.",
      "Su retrato tiene pareja: el retrato de su esposa."
    ],
    "fact": "hacia 1803–1804. National Gallery of Art, Washington."
  },
  "gysuredaw": {
    "text": [
      "Una mujer con vestido azul está sentada en un sillón amarillo.",
      "El azul intenso y el amarillo se enfrentan con brillo."
    ],
    "fact": "hacia 1803–1804. National Gallery of Art, Washington."
  },
  "gygarcini": {
    "text": [
      "Un oficial con uniforme oscuro está ante un fondo oscuro.",
      "Su retrato tiene pareja: el de su esposa Josefa."
    ],
    "fact": "1804. Metropolitan Museum of Art, Nueva York."
  },
  "gyjosefa": {
    "text": [
      "Una joven con vestido claro está sentada con el pelo claro suelto.",
      "El fondo oscuro hace brillar el vestido."
    ],
    "fact": "1804. Metropolitan Museum of Art, Nueva York."
  },
  "gynarcisa": {
    "text": [
      "Una mujer con vestido oscuro y gran sombrero está sentada en una silla amarilla.",
      "El sombrero oscuro se alza muy por encima de su cabeza."
    ],
    "fact": "hacia 1805. Metropolitan Museum of Art, Nueva York."
  },
  "gymantilla": {
    "text": [
      "Una joven lleva una mantilla blanca de encaje sobre el pelo y una falda negra.",
      "La mantilla y la basquiña son prendas españolas de la época."
    ],
    "fact": "hacia 1800–1805. National Gallery of Art, Washington."
  },
  "gymaiquez": {
    "text": [
      "El actor Isidoro Máiquez nos mira con ojos despiertos.",
      "Es uno de los actores más famosos de España."
    ],
    "fact": "hacia 1807. Art Institute of Chicago."
  },
  "gysabasa": {
    "text": [
      "Una joven de ojos oscuros lleva un chal amarillo intenso sobre los hombros.",
      "Un velo claro le cubre el pelo."
    ],
    "fact": "hacia 1806–1811. National Gallery of Art, Washington."
  },
  "gyguye": {
    "text": [
      "Un niño con uniforme oscuro y galones dorados sostiene un libro.",
      "Está muy erguido y mira serio."
    ],
    "fact": "1810. National Gallery of Art, Washington."
  },
  "gypepito": {
    "text": [
      "Un niño con pantalón blanco está junto a sus juguetes.",
      "Detrás de él hay un caballo de juguete; lleva una chaqueta verde."
    ],
    "fact": "hacia 1810. Metropolitan Museum of Art, Nueva York."
  },
  "gyromero": {
    "text": [
      "Un hombre de uniforme con banda roja y condecoraciones nos mira.",
      "El bordado de oro brilla sobre la tela oscura."
    ],
    "fact": "hacia 1810. Art Institute of Chicago."
  },
  "gycuervo": {
    "text": [
      "El arquitecto Juan Antonio Cuervo está sentado junto a una mesa con un gran plano.",
      "Lleva un uniforme oscuro con bordados de oro."
    ],
    "fact": "1819. Museo de Arte de Cleveland."
  },
  "gytiburcio": {
    "text": [
      "Un hombre con los brazos cruzados y las mangas remangadas nos mira de frente.",
      "Goya lo pinta sin pompa, como en el trabajo."
    ],
    "fact": "1820. Metropolitan Museum of Art, Nueva York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
