// v10.23 ES content for Tina Blau’s life journey, Part 1 (1845–1916). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Colección particular",
  "Standort ohne Angabe": "Ubicación no indicada",
  "Belvedere, Wien": "Belvedere, Viena"
});
  P.works = Object.assign(P.works || {}, {
  "tbbauernhaus": {
    "title": "Casa de campo",
    "museum": "Colección particular"
  },
  "tbhaslau": {
    "title": "Vista de Haslau",
    "museum": "Ubicación no indicada"
  },
  "tbamsterdam": {
    "title": "Canal en Ámsterdam",
    "museum": "Ubicación no indicada"
  },
  "tbheustadl": {
    "title": "El Heustadlwasser en el Prater",
    "museum": "Ubicación no indicada"
  },
  "tbtitus": {
    "title": "Capricho romano con el arco de Tito",
    "museum": "Colección particular"
  },
  "tbfruehling": {
    "title": "Primavera en el Prater",
    "museum": "Belvedere, Viena"
  },
  "tbtuileries": {
    "title": "En las Tullerías – Día soleado",
    "museum": "Belvedere, Viena"
  },
  "tbpalatin": {
    "title": "Atardecer en el Palatino",
    "museum": "Belvedere, Viena"
  },
  "tbrotunde": {
    "title": "En el Prater junto a la Rotonda",
    "museum": "Belvedere, Viena"
  },
  "tbmalcesine": {
    "title": "Malcesine",
    "museum": "Colección particular"
  },
  "tbschladming": {
    "title": "Vista de Schladming",
    "museum": "Colección particular"
  },
  "tbkrieau": {
    "title": "La Krieau en el Prater",
    "museum": "Belvedere, Viena"
  },
  "tbatelier": {
    "title": "El taller en el Prater",
    "museum": "Ubicación no indicada"
  },
  "tbfraneker": {
    "title": "Canal en Franeker",
    "museum": "Colección particular"
  },
  "tbbirken": {
    "title": "Abedules junto a la Rotonda",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.blau = {
  "title": "El camino de vida de Tina Blau",
  "life": "1845–1916",
  "part": "Primavera en el Prater",
  "subtitle": "Viena, Holanda, Italia y la luz al aire libre",
  "intro": "Viaja con Tina Blau, la paisajista vienesa que pintó al aire libre cuando eso apenas era posible para una mujer: desde las primeras casas de campo, pasando por Holanda y Roma, hasta la primavera en el Prater y su taller en la Rotonda. Estaciones breves y cuadros para colorear. Este camino la sigue a través de la luz.",
  "ending": [
    "Tina Blau muere en Viena el 31 de octubre de 1916. Llevó la luz clara del aire libre a la pintura de paisaje vienesa.",
    "Desde los años de aprendizaje en Viena, pasando por Holanda, Roma y París, el camino vuelve una y otra vez al Prater, donde también tiene su taller."
  ],
  "epilogue": "Tina Blau muere en Viena el 31 de octubre de 1916. Llevó la luz clara del aire libre a la pintura de paisaje vienesa. Desde los años de aprendizaje en Viena, pasando por Holanda, Roma y París, el camino vuelve una y otra vez al Prater, donde también tiene su taller."
};
  P.stations = Object.assign(P.stations || {}, {
  "tbwien": {
    "place": "Viena · Aprendizaje",
    "when": "1845–1873",
    "mapLabel": "Viena",
    "intro": [
      "Tina Blau nace en Viena el 15 de noviembre de 1845. Su padre apoya su deseo de ser pintora.",
      "Estudia con August Schaeffer y en Múnich con Wilhelm Lindenschmit."
    ]
  },
  "tbreisen": {
    "place": "Holanda y Roma",
    "when": "1875–1879",
    "mapLabel": "Viajes",
    "intro": [
      "En los años 1870 Tina Blau viaja a Holanda e Italia. Pinta canales, ruinas y jardines.",
      "En el camino se afina su mirada para la luz y el aire."
    ]
  },
  "tbprater": {
    "place": "El Prater",
    "when": "1877–1885",
    "mapLabel": "Prater",
    "intro": [
      "El Prater de Viena se vuelve su gran tema. En 1882 pinta «Primavera en el Prater».",
      "En 1883 se casa con el pintor Heinrich Lang y vive un tiempo en Múnich."
    ]
  },
  "tbsueden": {
    "place": "París, Roma y el sur",
    "when": "1883–1894",
    "mapLabel": "Sur",
    "intro": [
      "En París y Roma pinta jardines y lugares antiguos, más tarde el lago de Garda.",
      "Sus colores se vuelven más cálidos y claros."
    ]
  },
  "tbspaet": {
    "place": "Taller y últimos años",
    "when": "1897–1916",
    "mapLabel": "Rotonda",
    "intro": [
      "En 1897 cofunda en Viena una escuela de arte para mujeres y niñas y enseña allí.",
      "Sigue pintando en el Prater, en los Alpes y en Holanda hasta su muerte en 1916."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tbbauernhaus": {
    "text": [
      "Una sencilla casa de campo bajo los árboles, pintada con colores cálidos y tranquilos. Tina Blau tiene veintitrés años.",
      "Estudia con August Schaeffer y pinta del natural desde muy pronto."
    ],
    "fact": "1868. Colección particular."
  },
  "tbhaslau": {
    "text": [
      "Campos amplios y un gran cielo sobre Haslau, junto al Danubio. La tierra es llana y la luz cambia.",
      "En estos años pinta a menudo junto a Emil Jakob Schindler."
    ],
    "fact": "1872. Ubicación no indicada."
  },
  "tbamsterdam": {
    "text": [
      "Las casas se reflejan en un canal de Ámsterdam y hay barcas junto a la orilla. Holanda se vuelve uno de sus destinos preferidos.",
      "La luz húmeda y plateada de los Países Bajos la atrae una y otra vez."
    ],
    "fact": "1875. Ubicación no indicada."
  },
  "tbheustadl": {
    "text": [
      "Unas aguas tranquilas en el Prater, rodeadas de árboles y prados. El parque vienés se vuelve su motivo más importante.",
      "Lo pinta en todas las estaciones y a todas horas."
    ],
    "fact": "1877. Ubicación no indicada."
  },
  "tbtitus": {
    "text": [
      "El arco de Tito en Roma se alza bajo una cálida luz del sur. Tina Blau viaja varias veces a Italia.",
      "Edificios antiguos y jardines se vuelven motivos de sus viajes."
    ],
    "fact": "1879. Colección particular."
  },
  "tbfruehling": {
    "text": [
      "Verde nuevo, luz clara y paseantes en el Prater: el gran cuadro de 1882 es su obra más conocida.",
      "En Viena es criticado al principio; en el Salón de París de 1883 recibe una mención."
    ],
    "fact": "1882. Belvedere, Viena."
  },
  "tbtuileries": {
    "text": [
      "En el jardín de las Tullerías de París, el sol cae sobre caminos y árboles. En 1883 Tina Blau está en París.",
      "Pinta el jardín en un día gris y en un día soleado."
    ],
    "fact": "1883. Belvedere, Viena."
  },
  "tbpalatin": {
    "text": [
      "Sobre el Palatino de Roma reposa la cálida luz de la tarde. Ruinas y árboles se alzan tranquilos.",
      "El viaje a Roma trae nuevos colores a su pintura."
    ],
    "fact": "1885. Belvedere, Viena."
  },
  "tbrotunde": {
    "text": [
      "Detrás de los árboles del Prater se alza la Rotonda, el edificio de la Exposición Universal de 1873.",
      "Pocos años después Tina Blau instala allí su taller."
    ],
    "fact": "1885. Belvedere, Viena."
  },
  "tbmalcesine": {
    "text": [
      "El pueblo de Malcesine está junto al lago de Garda, con castillo y casas claras. El agua brilla con la luz.",
      "El sur sigue siendo para ella un lugar de luz."
    ],
    "fact": "1894. Colección particular."
  },
  "tbschladming": {
    "text": [
      "Casas y montañas en Schladming, en Estiria. Tina Blau pinta también el paisaje alpino de Austria.",
      "Su pincelada es ahora suelta y segura."
    ],
    "fact": "1902. Colección particular."
  },
  "tbkrieau": {
    "text": [
      "La Krieau es una parte del Prater con árboles viejos y prados abiertos. Tina Blau conoce cada rincón.",
      "Incluso veinte años después, el Prater sigue siendo su tema."
    ],
    "fact": "1902. Belvedere, Viena."
  },
  "tbatelier": {
    "text": [
      "Una mirada al taller de Tina Blau en el Prater, con cuadros, muebles y luz clara.",
      "Aquí trabaja durante muchos años, en medio de su motivo preferido."
    ],
    "fact": "1907. Ubicación no indicada."
  },
  "tbfraneker": {
    "text": [
      "Un canal en la ciudad frisona de Franeker; casas y árboles se reflejan en el agua.",
      "Con más de sesenta años, Tina Blau viaja otra vez a Holanda."
    ],
    "fact": "1908. Colección particular."
  },
  "tbbirken": {
    "text": [
      "Abedules claros se alzan en el Prater, cerca de la Rotonda. El cuadro es una de sus obras tardías.",
      "Dos años después Tina Blau muere en Viena."
    ],
    "fact": "1914. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
