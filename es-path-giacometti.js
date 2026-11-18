// v10.21 ES content for Giovanni Giacometti’s life journey, Part 1 (1868–1933). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Colección particular",
  "Bündner Kunstmuseum, Chur": "Bündner Kunstmuseum, Coira",
  "Kunsthaus Zürich": "Kunsthaus de Zúrich"
});
  P.works = Object.assign(P.works || {}, {
  "ggkinder": {
    "title": "Niños jugando",
    "museum": "Kunsthaus de Zúrich"
  },
  "ggscheren": {
    "title": "El afilador",
    "museum": "Colección particular"
  },
  "ggziegen": {
    "title": "En el establo de las cabras",
    "museum": "Colección particular"
  },
  "ggmaeher": {
    "title": "El segador",
    "museum": "Colección particular"
  },
  "ggfiammetta": {
    "title": "Fiammetta II",
    "museum": "Colección particular"
  },
  "gglampe": {
    "title": "La lámpara",
    "museum": "Kunsthaus de Zúrich"
  },
  "gglaceombra": {
    "title": "Luz y sombra II",
    "museum": "Bündner Kunstmuseum, Coira"
  },
  "ggherbst": {
    "title": "Sol de otoño",
    "museum": "Kunsthaus de Zúrich"
  },
  "ggsommer": {
    "title": "Tarde de verano",
    "museum": "Kunsthaus de Zúrich"
  },
  "ggbrunnen": {
    "title": "Fuente del pueblo",
    "museum": "Colección particular"
  },
  "gggarten": {
    "title": "Jardín de los Balsiger",
    "museum": "Colección particular"
  },
  "maloja": {
    "title": "Maloja en invierno",
    "museum": "Colección particular"
  },
  "ggsils": {
    "title": "Vista del lago de Sils desde Capolago",
    "museum": "Colección particular"
  },
  "ggcorvatsch": {
    "title": "Lago de Sils con el Piz Corvatsch",
    "museum": "Colección particular"
  },
  "ggduan": {
    "title": "Piz Duan",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.giacometti = {
  "title": "El camino de vida de Giovanni Giacometti",
  "life": "1868–1933",
  "part": "Parte 1 · Del Bergell al Engadina",
  "subtitle": "Stampa, la luz de Maloja y la familia",
  "intro": "Viaja con Giovanni Giacometti, el pintor de Stampa, en el Bergell: desde los cuadros tempranos del trabajo, pasando por la familia y la luz, hasta las vistas invernales y los lagos de Maloja y Sils. Estaciones breves y cuadros para colorear. Esta primera parte sigue el camino por su tierra.",
  "ending": [
    "Giovanni Giacometti muere el 25 de junio de 1933 en Glion, junto al lago Lemán. Es enterrado en Borgonovo, cerca de Stampa, su lugar de nacimiento.",
    "El camino puede seguir creciendo. Más retratos, flores y paisajes de la Engadina pueden seguir en una parte posterior."
  ],
  "epilogue": "El 25 de junio de 1933 Giacometti muere en Glion. Una parte posterior puede añadir más retratos y paisajes de la Engadina."
};
  P.stations = Object.assign(P.stations || {}, {
  "ggstampa": {
    "place": "Stampa · Años de formación",
    "when": "1868–1891",
    "mapLabel": "Stampa",
    "intro": [
      "Giovanni Giacometti nace el 7 de marzo de 1868 en Stampa, en el Bergell. Estudia en Múnich y pasa una temporada en París; en la Engadina está cerca de Segantini.",
      "Los cuadros tempranos se ocupan del trabajo en el valle. Ya aquí busca una lengua propia, más rica en color."
    ]
  },
  "ggtal": {
    "place": "Trabajo en el valle",
    "when": "1896–1898",
    "mapLabel": "Bergell",
    "intro": [
      "En los años 1890 Giacometti pinta establos, segadores y la vida campesina del Bergell. Los motivos siguen cerca de Segantini, pero el color ya es más libre.",
      "Sigue fiel a su tierra, aunque la mirada se ensanche. El valle no es para él un decorado, sino un origen."
    ]
  },
  "ggfam": {
    "place": "Familia y luz",
    "when": "1903–1915",
    "mapLabel": "Familia",
    "intro": [
      "En 1900 Giacometti se casa con Annetta Stampa. Los hijos Alberto, Diego, Ottilia y Bruno crecen en una casa donde se pinta.",
      "Retratos, luz de lámpara, sol de otoño y flores: en estos años el interior se vuelve tan importante como las montañas."
    ]
  },
  "ggalltag": {
    "place": "Jardín y vida cotidiana",
    "when": "1921–1922",
    "mapLabel": "Jardín",
    "intro": [
      "A principios de los años veinte Giacometti pinta fuentes y jardines, lugares cotidianos bajo una luz conocida. No necesita un motivo elevado.",
      "El color es suelto y seguro. Lo cotidiano se vuelve una fiesta de la mirada."
    ]
  },
  "ggengadin": {
    "place": "Engadina y Maloja",
    "when": "1924–1927",
    "mapLabel": "Maloja",
    "intro": [
      "Una y otra vez Giacometti vuelve a Maloja, al lago de Sils y a las cimas de la Alta Engadina. Cielos de invierno, lago y roca nacen en manchas sueltas y seguras.",
      "Muere el 25 de junio de 1933 en Glion y es enterrado en Borgonovo, cerca de Stampa."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ggkinder": {
    "text": [
      "Los niños juegan al aire libre, los colores son claros, el movimiento suelto. Giacometti observa el juego sin fijarlo como una pose.",
      "El cuadro del Kunsthaus de Zúrich pertenece a los motivos alegres y familiares que lo acompañan toda la vida."
    ],
    "fact": "1912. Kunsthaus de Zúrich."
  },
  "ggscheren": {
    "text": [
      "Un hombre afila cuchillos, el cuerpo en el trabajo, la luz sobre la rueda. El cuadro de 1891 pertenece a los motivos tempranos del oficio, observados con precisión.",
      "Giacometti es aún joven, pero la mirada sobre la vida cotidiana del valle ya es firme. El color empieza a desprenderse de una pintura meramente tonal y oscura."
    ],
    "fact": "1891. Colección particular."
  },
  "ggziegen": {
    "text": [
      "En el establo las cabras están juntas, la luz entra por una abertura. Giacometti pinta el espacio estrecho sin sentimentalismo.",
      "El cuadro de 1896 muestra cuán de cerca conoce la vida campesina del Bergell. Los animales tienen peso y calor."
    ],
    "fact": "1896. Colección particular."
  },
  "ggmaeher": {
    "text": [
      "Un hombre siega la hierba, la hoz en el giro, la ladera clara. El cuadro de trabajo de 1898 sigue cerca de la dignidad alpina de Segantini, pero el color ya es más libre.",
      "Giacometti no dejará del todo el trabajo corporal del valle, aunque más tarde predomine la luz de los lagos."
    ],
    "fact": "1898. Colección particular."
  },
  "ggfiammetta": {
    "text": [
      "El retrato «Fiammetta II» de 1909 muestra a una joven bajo una luz cálida, con el color ya libre y luminoso. Giacometti pinta el rostro de cerca, sin severidad.",
      "En estos años el retrato se le vuelve tan importante como el paisaje. La luz se posa en la piel y el vestido como en una pared de montaña."
    ],
    "fact": "1909. Colección particular."
  },
  "gglampe": {
    "text": [
      "Una lámpara ilumina el interior, los colores se reúnen en torno al resplandor cálido. Giacometti construye el cuadro con pocos tonos luminosos.",
      "La pintura de 1912 del Kunsthaus de Zúrich muestra cuánto le importa la luz de la casa, tanto como la luz de las montañas."
    ],
    "fact": "1912. Kunsthaus de Zúrich."
  },
  "gglaceombra": {
    "text": [
      "La luz y la sombra dividen el espacio, el color se alza en contrastes nítidos. El cuadro de 1912 se conserva en el Bündner Kunstmuseum de Coira.",
      "Giacometti no busca aquí la anécdota, sino el juego del resplandor sobre planos y figuras."
    ],
    "fact": "1912. Bündner Kunstmuseum, Coira."
  },
  "ggherbst": {
    "text": [
      "Annetta está sentada con Bruno, Ottilia y los niños bajo una luz otoñal. El estudio recoge a la familia sin solemnizarla.",
      "En 1900 Giacometti se casó con Annetta Stampa. La casa y los hijos – Alberto, Diego, Ottilia, Bruno – pertenecen desde entonces a su obra."
    ],
    "fact": "1908. Kunsthaus de Zúrich."
  },
  "ggsommer": {
    "text": [
      "Una tarde de verano en una luz suelta, los colores cálidos y abiertos. Giacometti deja respirar la escena, sin ceñirla.",
      "El cuadro del Kunsthaus de Zúrich muestra su mano madura, de libertad impresionista, firmemente arraigada en lo cotidiano de los Grisones."
    ],
    "fact": "1903. Kunsthaus de Zúrich."
  },
  "ggbrunnen": {
    "text": [
      "La fuente del pueblo está en la luz, piedra y agua en manchas serenas. El cuadro de 1921 recoge un lugar cotidiano del Bergell o de la Engadina.",
      "Giacometti no necesita un motivo célebre. Una fuente, un camino, un jardín bastan cuando la luz es la justa."
    ],
    "fact": "1921. Colección particular."
  },
  "gggarten": {
    "text": [
      "Un jardín en casa de los Balsiger, 1922, lleno de follaje y de luz de verano. Giacometti pinta el recinto tan amplio como un paisaje.",
      "El color es suelto y seguro. En cuadros así, lo cotidiano se vuelve una fiesta de la mirada."
    ],
    "fact": "1922. Colección particular."
  },
  "maloja": {
    "text": [
      "Sobre el pueblo nevado de Maloja se alza un cielo invernal claro. Giacometti pinta una y otra vez su tierra, el Bergell y la Alta Engadina.",
      "El cuadro de hacia 1925 pertenece a las vistas invernales más calladas. El color sigue vivo, también en la nieve."
    ],
    "fact": "hacia 1925. Colección particular."
  },
  "ggsils": {
    "text": [
      "Desde Capolago, el lago de Sils yace quieto bajo las montañas. El cuadro de 1927 reúne amplitud y altura en manchas sueltas y seguras.",
      "Giacometti conoce bien estas orillas. No las pinta como panorama para viajeros, sino como un lugar conocido."
    ],
    "fact": "1927. Colección particular."
  },
  "ggcorvatsch": {
    "text": [
      "El lago de Sils se extiende ante el Piz Corvatsch, agua y cima en un solo trazo. Giacometti simplifica la vista célebre hasta que queda la luz.",
      "Cuadros así pertenecen a su obra tardía en la Alta Engadina: anchos, coloridos, sin una altura teatral."
    ],
    "fact": "hacia 1925. Colección particular."
  },
  "ggduan": {
    "text": [
      "El Piz Duan se alza sobre el Bergell, una cima familiar para el pintor de Stampa. Giacometti da a la montaña peso y color, no solo un contorno.",
      "En los años veinte vuelve una y otra vez a esos motivos de su tierra. La luz viene de lado y permanece en la ladera."
    ],
    "fact": "hacia 1924. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
