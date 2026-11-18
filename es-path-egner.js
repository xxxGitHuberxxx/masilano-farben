// v10.24 ES content for Marie Egner’s life journey, Part 1 (1850–1940). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Belvedere, Wien": "Belvedere, Viena",
  "Privatsammlung": "Colección particular"
});
  P.works = Object.assign(P.works || {}, {
  "mgnauders": {
    "title": "Motivo de Nauders",
    "museum": "Colección particular"
  },
  "mgwindbruch": {
    "title": "Árboles derribados por el viento",
    "museum": "Colección particular"
  },
  "mgdonau": {
    "title": "En los sotos del Danubio",
    "museum": "Colección particular"
  },
  "mgheu": {
    "title": "Almiares",
    "museum": "Colección particular"
  },
  "mgatelier": {
    "title": "Vista desde el taller de la Klagbaumgasse",
    "museum": "Colección particular"
  },
  "mgcapri": {
    "title": "Patio de convento en Capri",
    "museum": "Colección particular"
  },
  "mgarbe": {
    "title": "Arbe (Rab)",
    "museum": "Colección particular"
  },
  "mgazaleen": {
    "title": "Azaleas junto a la ventana",
    "museum": "Colección particular"
  },
  "mgtorre": {
    "title": "Torre del Greco",
    "museum": "Colección particular"
  },
  "mgmoedling": {
    "title": "Puente de ladrillo con una figura de piedra en Mödling",
    "museum": "Colección particular"
  },
  "mgbretagne": {
    "title": "Atardecer en Bretaña",
    "museum": "Colección particular"
  },
  "mgpergola": {
    "title": "En la pérgola",
    "museum": "Belvedere, Viena"
  },
  "mgrosen": {
    "title": "Rosas en flor",
    "museum": "Colección particular"
  },
  "mgsonnen": {
    "title": "Girasoles y cabaña en Treffenboden",
    "museum": "Colección particular"
  },
  "mggastein": {
    "title": "Viejo molino en Gastein",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.egner = {
  "title": "El camino de vida de Marie Egner",
  "life": "1850–1940",
  "part": "Parte 1 · Jardines, costas y luz",
  "subtitle": "De Nauders a Gastein",
  "intro": "Viaja con Marie Egner, la pintora austriaca de paisajes y flores: desde sus primeros estudios en el Tirol, por los sotos del Danubio y su taller de Viena, hasta las costas de Italia y Dalmacia y los jardines de su larga vida. Estaciones breves y cuadros para colorear. Esta primera parte sigue su luz.",
  "ending": [
    "Marie Egner muere en Maria Anzbach, en la Baja Austria, el 31 de marzo de 1940, a los 89 años. Durante casi sesenta años pintó al aire libre ante la naturaleza.",
    "El camino puede seguir creciendo. Más jardines y cuadros de viaje pueden seguir en una parte posterior."
  ],
  "epilogue": "El 31 de marzo de 1940 Egner muere en Maria Anzbach. Una parte posterior puede añadir más jardines."
};
  P.stations = Object.assign(P.stations || {}, {
  "mgjung": {
    "place": "Radkersburg, Graz y el Tirol · Aprendizaje",
    "when": "1850–1881",
    "mapLabel": "Nauders",
    "intro": [
      "Marie Egner nace en Radkersburg, en Estiria, el 25 de agosto de 1850. Se forma en Graz y en Düsseldorf.",
      "En el Tirol pinta sus primeros pueblos de montaña."
    ]
  },
  "mgschindler": {
    "place": "Con Schindler en Viena",
    "when": "1882–1890",
    "mapLabel": "Viena",
    "intro": [
      "Desde 1882 Egner aprende con Emil Jakob Schindler. Pinta con él al aire libre, en bosques, sotos y prados.",
      "Más tarde tiene su propio taller en Viena."
    ]
  },
  "mgsueden": {
    "place": "Viajes al sur",
    "when": "1890–1898",
    "mapLabel": "Sur",
    "intro": [
      "Egner viaja a Capri, al golfo de Nápoles y al Adriático. La luz del sur aclara sus colores.",
      "En casa, en Viena, pinta flores junto a la ventana."
    ]
  },
  "mggarten": {
    "place": "Jardines y caminos",
    "when": "1899–1912",
    "mapLabel": "Jardines",
    "intro": [
      "Hacia 1900 Egner es una pintora conocida y expone en Viena. Pinta puentes, pérgolas y rosas.",
      "Un viaje a Bretaña le da también nuevos motivos."
    ]
  },
  "mgspaet": {
    "place": "Últimos años en las montañas",
    "when": "1914–1940",
    "mapLabel": "Gastein",
    "intro": [
      "También en la vejez Egner pinta al aire libre, en las montañas y en el valle de Gastein.",
      "Muere en Maria Anzbach, en la Baja Austria, el 31 de marzo de 1940."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mgnauders": {
    "text": [
      "En el pueblo tirolés de Nauders, Egner pinta casas, prados y laderas con luz de verano. Tiene treinta años y se ha formado en Graz y Düsseldorf.",
      "Todavía busca su propio camino."
    ],
    "fact": "1881. Colección particular."
  },
  "mgwindbruch": {
    "text": [
      "Troncos caídos yacen en el bosque y entre ellos ya crece verde nuevo. Egner pinta la naturaleza tal como es.",
      "Desde 1882 aprende con Emil Jakob Schindler."
    ],
    "fact": "hacia 1884. Colección particular."
  },
  "mgdonau": {
    "text": [
      "Agua, sauces y juncos forman el mundo tranquilo de los sotos del Danubio. La luz es plateada y suave.",
      "Como su maestro Schindler, Egner busca la atmósfera serena."
    ],
    "fact": "hacia 1885. Colección particular."
  },
  "mgheu": {
    "text": [
      "Los almiares se alzan en el prado segado y el cielo es alto y claro. Formas sencillas, mucho aire.",
      "Egner pinta al aire libre, directamente ante el motivo."
    ],
    "fact": "hacia 1885. Colección particular."
  },
  "mgatelier": {
    "text": [
      "Desde la ventana de su taller de Viena, Egner ve tejados, patios y árboles. El cuadro es una mirada íntima a su ciudad.",
      "Más tarde enseña aquí también a otras pintoras."
    ],
    "fact": "hacia 1890. Colección particular."
  },
  "mgcapri": {
    "text": [
      "En un patio de convento en Capri la luz clara cae sobre muros blancos y plantas. Egner viaja al sur.",
      "Sus colores se vuelven más cálidos y claros."
    ],
    "fact": "1890. Colección particular."
  },
  "mgarbe": {
    "text": [
      "La isla de Arbe, hoy Rab, está en el Adriático frente a la costa dálmata. Egner pinta la ciudad, el mar y el cielo.",
      "El Mediterráneo sigue siendo la meta de muchos viajes."
    ],
    "fact": "1890. Colección particular."
  },
  "mgazaleen": {
    "text": [
      "Azaleas en flor están junto a la ventana y la luz del día brilla a través de las flores. Las flores se convierten en un gran tema.",
      "Egner las pinta con el mismo cuidado que los paisajes."
    ],
    "fact": "hacia 1895. Colección particular."
  },
  "mgtorre": {
    "text": [
      "Torre del Greco está en el golfo de Nápoles, bajo el Vesubio. Casas y barcas aparecen en la luz clara del mediodía.",
      "Egner viaja varias veces a Italia."
    ],
    "fact": "hacia 1898. Colección particular."
  },
  "mgmoedling": {
    "text": [
      "Un pequeño puente de ladrillo cruza un arroyo en Mödling y al borde hay una figura de piedra. Los árboles dan sombra.",
      "Egner encuentra a menudo sus motivos cerca de Viena."
    ],
    "fact": "1899. Colección particular."
  },
  "mgbretagne": {
    "text": [
      "En Bretaña la tarde cae sobre la tierra y el agua. Los colores se vuelven profundos y tranquilos.",
      "Con casi sesenta años Egner sigue viajando lejos."
    ],
    "fact": "1907. Colección particular."
  },
  "mgpergola": {
    "text": [
      "Bajo una pérgola la luz del sol cae entre hojas y flores sobre el camino. El espacio está lleno de manchas verdes y doradas.",
      "El cuadro pertenece al Belvedere de Viena."
    ],
    "fact": "1910. Belvedere, Viena."
  },
  "mgrosen": {
    "text": [
      "Las rosas florecen en todos los tonos, del blanco al rojo. Egner las pinta frescas y sueltas.",
      "En la vejez los jardines se convierten en su tema preferido."
    ],
    "fact": "1912. Colección particular."
  },
  "mgsonnen": {
    "text": [
      "Altos girasoles se alzan ante una cabaña de madera y detrás hay laderas verdes. El amarillo y el marrón brillan con la luz del verano.",
      "Egner tiene ya más de sesenta años y pinta con colores intensos."
    ],
    "fact": "1914. Colección particular."
  },
  "mggastein": {
    "text": [
      "Un viejo molino está en el valle de Gastein entre árboles y montañas. Egner pinta el cuadro a los ochenta y tres años.",
      "Hasta muy mayor sigue fiel al paisaje."
    ],
    "fact": "1933. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
