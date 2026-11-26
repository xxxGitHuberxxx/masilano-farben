// v10.43 ES content for Gustave Caillebotte’s life journey (1848–1894). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "cbrainy": {
    "title": "Calle de París, día de lluvia",
    "museum": "Art Institute of Chicago"
  },
  "cbskiffs": {
    "title": "Piraguas",
    "museum": "National Gallery of Art, Washington"
  },
  "cbcourtier": {
    "title": "Retrato de un hombre",
    "museum": "Museo de Arte de Cleveland"
  },
  "cbtrouville": {
    "title": "Villas en Trouville",
    "museum": "Museo de Arte de Cleveland"
  },
  "cblamy": {
    "title": "Estudio de un hombre con las manos en los bolsillos",
    "museum": "Museo de Arte de Cleveland"
  },
  "cbchrysanth": {
    "title": "Crisantemos en el jardín de Petit-Gennevilliers",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cbdahlias": {
    "title": "Dalias, jardín de Petit-Gennevilliers",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.caillebotte = {
  "title": "El camino de vida de Gustave Caillebotte",
  "part": "París, Yerres, Trouville y Petit-Gennevilliers",
  "subtitle": "Ciudad, agua y jardín",
  "intro": "Viaja por la vida de Gustave Caillebotte: de las nuevas calles de París a las barcas del Yerres, la costa de Normandía y su jardín junto al Sena. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Gustave Caillebotte muere en 1894, un año después de sus cuadros del jardín de Petit-Gennevilliers.",
    "Fue pintor, organizador de las exposiciones impresionistas, navegante y jardinero."
  ],
  "epilogue": "Gustave Caillebotte muere en 1894. El camino lleva de París, pasando por Yerres y Trouville, a su jardín de Petit-Gennevilliers.",
  "life": "1848–1894"
};
  P.stations = Object.assign(P.stations || {}, {
  "cbs1": {
    "place": "París y Yerres: lluvia, barcas y un amigo",
    "when": "1876–1880",
    "mapLabel": "París y Yerres",
    "intro": [
      "Gustave Caillebotte procede de una familia acomodada de París; en 1877 organiza la exposición impresionista y presenta en ella su cuadro más grande, una calle de París bajo la lluvia.",
      "En la finca familiar de Yerres pinta pescadores y remeros en 1877 y 1878; en París comparte con su hermano Martial un piso en el bulevar Haussmann."
    ]
  },
  "cbs3": {
    "place": "Navegar: Normandía y el Sena",
    "when": "1884–1893",
    "mapLabel": "Normandía y el Sena",
    "intro": [
      "A principios de la década de 1880 Caillebotte pasa varios veranos en la costa de Normandía, donde pinta y participa en regatas de vela.",
      "Es un navegante premiado y diseña sus propios barcos de regata; con su amigo Eugène Lamy comparte la pasión por la vela."
    ]
  },
  "cbs4": {
    "place": "El jardín de Petit-Gennevilliers",
    "when": "1893",
    "mapLabel": "Petit-Gennevilliers",
    "intro": [
      "En 1881 Gustave y Martial Caillebotte compran un terreno en Petit-Gennevilliers, frente a Argenteuil, junto al Sena; más tarde Gustave se queda solo con la finca.",
      "Allí crea un jardín, pinta, navega e intercambia conocimientos de jardinería con su amigo Claude Monet."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cbrainy": {
    "text": [
      "Una pareja bajo un paraguas camina directamente hacia nosotros; detrás brillan los adoquines mojados de un cruce concurrido.",
      "El cruce está a pocos pasos de la casa de Caillebotte; no muestra la lluvia con gotas, sino con paraguas y reflejos sobre las piedras."
    ],
    "fact": "1877. Art Institute of Chicago."
  },
  "cbskiffs": {
    "text": [
      "Tres piraguas estrechas, con remeros de camisa blanca y sombrero de paja, se deslizan por el río hacia nosotros.",
      "Caillebotte presenta el cuadro en 1879 en la cuarta exposición impresionista con el título «Périssoires sur l’Yerres»."
    ],
    "fact": "1877. National Gallery of Art, Washington."
  },
  "cbcourtier": {
    "text": [
      "Albert Courtier, notario de Caillebotte y amigo de la familia de toda la vida, está sentado en un sillón junto a la ventana del piso del bulevar Haussmann.",
      "Courtier posa varias veces para Caillebotte, posee cuatro de sus cuadros y lo nombra padrino de su hija mayor."
    ],
    "fact": "1880. Museo de Arte de Cleveland."
  },
  "cbtrouville": {
    "text": [
      "Desde un acantilado, Caillebotte mira por encima de villas de ladrillo rojo hacia el mar verdiazul bajo un cielo con nubes.",
      "Trouville es un lugar de veraneo muy popular en la costa de Normandía; las villas de las afueras se alzan justo sobre la orilla."
    ],
    "fact": "1884. Museo de Arte de Cleveland."
  },
  "cblamy": {
    "text": [
      "Con tiza negra, Caillebotte dibuja a un hombre con sombrero, visto de espaldas, con las manos en los bolsillos.",
      "Es su amigo Eugène Lamy, en un estudio para el cuadro «Orilla del Sena en Petit-Gennevilliers, invierno», de 1893."
    ],
    "fact": "1893. Museo de Arte de Cleveland."
  },
  "cbchrysanth": {
    "text": [
      "Crisantemos blancos, amarillos y rojos llenan todo el cuadro, apretados unos contra otros, sin cielo ni horizonte.",
      "Caillebotte pinta las flores en 1893 en su propio jardín de Petit-Gennevilliers."
    ],
    "fact": "1893. Metropolitan Museum of Art, Nueva York."
  },
  "cbdahlias": {
    "text": [
      "En primer plano brillan dalias rojas y amarillas; detrás se alzan el invernadero y la casa de Caillebotte a la luz de la tarde.",
      "En el sendero del jardín, una mujer con sombrero de sol mira algo que tiene en las manos, mientras su perrito observa al pintor."
    ],
    "fact": "1893. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
