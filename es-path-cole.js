// v10.43 ES content for Thomas Cole’s life journey (1801–1848). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "tcsunrise": {
    "title": "Amanecer en los Catskill",
    "museum": "National Gallery of Art, Washington"
  },
  "tcniagara": {
    "title": "Vista lejana de las cataratas del Niágara",
    "museum": "Art Institute of Chicago"
  },
  "tctivoli": {
    "title": "Vista cerca de Tívoli (mañana)",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "tcgoblet": {
    "title": "La copa del titán",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "tcholyokesketch": {
    "title": "Boceto para la vista desde el monte Holyoke",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "tcoxbow": {
    "title": "Vista desde el monte Holyoke tras una tormenta: el Oxbow",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "tccatskill": {
    "title": "Vista del Catskill a principios de otoño",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "tcflorence": {
    "title": "Vista de Florencia",
    "museum": "Museo de Arte de Cleveland"
  },
  "tcclouds": {
    "title": "Nubes",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "tcschroon": {
    "title": "El monte Schroon después de una tormenta",
    "museum": "Museo de Arte de Cleveland"
  },
  "tccoast": {
    "title": "Costa italiana con torre en ruinas",
    "museum": "National Gallery of Art, Washington"
  },
  "tcnotch": {
    "title": "El paso de montaña llamado The Notch, en las White Mountains",
    "museum": "National Gallery of Art, Washington"
  },
  "tcnewengland": {
    "title": "Paisaje de Nueva Inglaterra",
    "museum": "Art Institute of Chicago"
  },
  "tcchildhood": {
    "title": "El viaje de la vida: la infancia",
    "museum": "National Gallery of Art, Washington"
  },
  "tcyouth": {
    "title": "El viaje de la vida: la juventud",
    "museum": "National Gallery of Art, Washington"
  },
  "tccreek": {
    "title": "Estudio para «Catskill Creek»",
    "museum": "National Gallery of Art, Washington"
  },
  "tcford": {
    "title": "El vado de montaña",
    "museum": "Metropolitan Museum of Art, Nueva York"
  }
});
  P.paths = P.paths || {};
  P.paths.cole = {
  "title": "El camino de vida de Thomas Cole",
  "part": "El Hudson, los Catskill e Italia",
  "subtitle": "El fundador de la Hudson River School",
  "intro": "Viaja por la vida de Thomas Cole: de Inglaterra al río Hudson, a las montañas Catskill y a Italia. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Thomas Cole muere en Catskill el 11 de febrero de 1848, a los 47 años.",
    "Tras su muerte, la American Art-Union de Nueva York organiza una gran exposición de sus obras."
  ],
  "epilogue": "Thomas Cole muere en Catskill el 11 de febrero de 1848. El camino lleva de Inglaterra, pasando por Nueva York e Italia, a las montañas Catskill.",
  "life": "1801–1848"
};
  P.stations = Object.assign(P.stations || {}, {
  "tcs1": {
    "place": "De Inglaterra al Hudson y a Italia",
    "when": "1801–1832",
    "mapLabel": "Nueva York",
    "intro": [
      "Thomas Cole nace en Bolton-le-Moors, Inglaterra, el 1 de febrero de 1801 y emigra con su familia a Estados Unidos en 1818.",
      "En 1825 se traslada a Nueva York y remonta el Hudson hasta las montañas Catskill; de 1829 a 1832 vive y pinta en Inglaterra, Francia e Italia."
    ]
  },
  "tcs2": {
    "place": "Un estudio en Catskill",
    "when": "1833–1836",
    "mapLabel": "Catskill",
    "intro": [
      "Tras su regreso, Cole instala un estudio en Cedar Grove, en Catskill.",
      "El 22 de noviembre de 1836 se casa allí con Maria Bartow, y Cedar Grove se convierte en su hogar."
    ]
  },
  "tcs3": {
    "place": "Montañas, nubes y recuerdos de Italia",
    "when": "1837–1839",
    "mapLabel": "Nueva Inglaterra",
    "intro": [
      "Cole pinta las montañas de Nueva York y Nueva Inglaterra, a menudo después de una tormenta o en otoño.",
      "Al mismo tiempo pinta cuadros de Florencia y de la costa italiana a partir de bocetos de su viaje."
    ]
  },
  "tcs4": {
    "place": "El viaje de la vida",
    "when": "1840–1848",
    "mapLabel": "Catskill",
    "intro": [
      "Cole pinta la serie «El viaje de la vida», en la que un viaje por un río representa el camino de la vida, y la pinta por segunda vez en Roma en 1842.",
      "De vuelta en Catskill, en 1844 acoge a Frederic Edwin Church como su primer alumno."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tcsunrise": {
    "text": [
      "Montañas oscuras se alzan entre la niebla, con troncos rotos en primer plano.",
      "Cole pinta el cuadro un año después de su primer viaje a las montañas Catskill."
    ],
    "fact": "1826. National Gallery of Art, Washington."
  },
  "tcniagara": {
    "text": [
      "El agua blanca cae ancha por las cataratas, rodeada de árboles con colores de otoño.",
      "Cole pinta el cuadro sobre una tabla de madera."
    ],
    "fact": "1830. Art Institute of Chicago."
  },
  "tctivoli": {
    "text": [
      "Un arco cubierto de vegetación de una antigua ruina se alza ante montañas por las que pasan nubes.",
      "Cole pinta el cuadro en 1832, hacia el final de su estancia en Italia."
    ],
    "fact": "1832. Metropolitan Museum of Art, Nueva York."
  },
  "tcgoblet": {
    "text": [
      "Una copa de piedra gigantesca se alza en un paisaje; en su borde crecen árboles y el agua se desborda.",
      "Es un cuadro imaginario, un paisaje que no existe en ningún lugar."
    ],
    "fact": "1833. Metropolitan Museum of Art, Nueva York."
  },
  "tcholyokesketch": {
    "text": [
      "En este pequeño boceto al óleo ya están el río, los árboles y la luz.",
      "Con él Cole prepara su gran cuadro «El Oxbow»."
    ],
    "fact": "1836. Metropolitan Museum of Art, Nueva York."
  },
  "tcoxbow": {
    "text": [
      "A la izquierda se aleja la tormenta; a la derecha está el valle soleado con el gran meandro del río.",
      "Abajo en el cuadro Cole se pintó a sí mismo, pequeño, pintando el paisaje."
    ],
    "fact": "1836. Metropolitan Museum of Art, Nueva York."
  },
  "tccatskill": {
    "text": [
      "Altos árboles enmarcan un valle tranquilo con un arroyo, y detrás hay montañas azules.",
      "La vista va del pueblo de Catskill a las montañas, donde Cole vive ahora."
    ],
    "fact": "1836–1837. Metropolitan Museum of Art, Nueva York."
  },
  "tcflorence": {
    "text": [
      "La ciudad, con su gran cúpula de la catedral, se extiende bajo una luz cálida entre colinas.",
      "Cole pinta el cuadro en América, años después de su estancia en Florencia."
    ],
    "fact": "1837. Museo de Arte de Cleveland."
  },
  "tcclouds": {
    "text": [
      "Una gran nube blanca se eleva sobre una estrecha franja de tierra.",
      "Cole pinta este estudio al óleo sobre papel."
    ],
    "fact": "hacia 1838. Metropolitan Museum of Art, Nueva York."
  },
  "tcschroon": {
    "text": [
      "Una cumbre oscura se alza sobre bosques otoñales rojos y amarillos, mientras las nubes se retiran.",
      "La montaña está en el condado de Essex, en el estado de Nueva York."
    ],
    "fact": "1838. Museo de Arte de Cleveland."
  },
  "tccoast": {
    "text": [
      "Una torre redonda en ruinas se alza sobre las rocas, encima del mar en calma.",
      "Cole también pinta este cuadro en América, a partir de recuerdos y bocetos de Italia."
    ],
    "fact": "1838. National Gallery of Art, Washington."
  },
  "tcnotch": {
    "text": [
      "Un camino atraviesa bosques otoñales hacia una pared rocosa sobre la que cuelgan nubes de tormenta.",
      "Las White Mountains están en New Hampshire, en Nueva Inglaterra."
    ],
    "fact": "1839. National Gallery of Art, Washington."
  },
  "tcnewengland": {
    "text": [
      "Un árbol alto se alza a la izquierda, y detrás se extiende un amplio valle con luz de atardecer y un campanario lejano.",
      "Cole muestra un paisaje tranquilo y habitado."
    ],
    "fact": "1839. Art Institute of Chicago."
  },
  "tcchildhood": {
    "text": [
      "Un niño pequeño sale en una barca dorada de una cueva oscura hacia un paisaje verde y florido, guiado por un ángel.",
      "Es el primero de los cuatro cuadros de la serie."
    ],
    "fact": "1842. National Gallery of Art, Washington."
  },
  "tcyouth": {
    "text": [
      "Un joven guía ahora él mismo su barca hacia un castillo en las nubes, y el ángel se queda en la orilla.",
      "El castillo representa los sueños de la juventud."
    ],
    "fact": "1842. National Gallery of Art, Washington."
  },
  "tccreek": {
    "text": [
      "Un cielo de atardecer con nubes luminosas se extiende sobre tierras llanas y montañas lejanas.",
      "Cole pinta el estudio sobre madera, como preparación para un cuadro mayor."
    ],
    "fact": "hacia 1844–1845. National Gallery of Art, Washington."
  },
  "tcford": {
    "text": [
      "Un jinete en un caballo blanco cruza un arroyo al pie de una montaña rocosa.",
      "Cole pinta el cuadro dos años antes de su muerte, en sus últimos años en Catskill."
    ],
    "fact": "1846. Metropolitan Museum of Art, Nueva York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
