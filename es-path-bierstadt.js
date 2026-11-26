// v10.43 ES content for Albert Bierstadt’s life journey (1830–1902). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Smithsonian American Art Museum, Washington": "Smithsonian American Art Museum, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "ablucerne": {
    "title": "El lago de Lucerna",
    "museum": "National Gallery of Art, Washington"
  },
  "abbrook": {
    "title": "Arroyo de montaña",
    "museum": "Art Institute of Chicago"
  },
  "abmerced": {
    "title": "El río Merced, valle de Yosemite",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "abstarrking": {
    "title": "Monte Starr King, Yosemite",
    "museum": "Museo de Arte de Cleveland"
  },
  "abvesuvius": {
    "title": "El Vesubio a medianoche",
    "museum": "Museo de Arte de Cleveland"
  },
  "absierra": {
    "title": "En Sierra Nevada, California",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abfirtrees": {
    "title": "Abetos y nubes de tormenta",
    "museum": "Museo de Arte de Cleveland"
  },
  "absfbay": {
    "title": "La bahía de San Francisco",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abcathedral": {
    "title": "Cathedral Rocks, valle de Yosemite",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abnevada": {
    "title": "Cascada Nevada, Yosemite",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "abcorcoran": {
    "title": "Monte Corcoran",
    "museum": "National Gallery of Art, Washington"
  },
  "abgates": {
    "title": "Las puertas de Yosemite",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abmountain": {
    "title": "Paisaje de montaña",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "abseacove": {
    "title": "Cala marina",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "ablouise": {
    "title": "Rocosas canadienses (lago Louise)",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "abalaska": {
    "title": "Cordillera costera de Alaska",
    "museum": "Smithsonian American Art Museum, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.bierstadt = {
  "title": "El camino de vida de Albert Bierstadt",
  "part": "Montañas, lagos y cascadas",
  "subtitle": "De Nueva Inglaterra a Yosemite, Europa y Canadá",
  "intro": "Viaja por la vida de Albert Bierstadt: de los bosques de Nueva Inglaterra al valle de Yosemite, a Europa y hasta las montañas de Canadá. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Albert Bierstadt muere en Nueva York el 18 de febrero de 1902.",
    "Sus grandes cuadros de las montañas del Oeste dan a conocer estos paisajes a mucha gente que nunca los ha visto."
  ],
  "epilogue": "Albert Bierstadt muere en Nueva York el 18 de febrero de 1902. El camino lleva de Nueva Inglaterra, pasando por Yosemite y Europa, hasta Canadá y Alaska.",
  "life": "1830–1902"
};
  P.stations = Object.assign(P.stations || {}, {
  "abs1": {
    "place": "De Solingen a Nueva Inglaterra",
    "when": "1830–1863",
    "mapLabel": "New Bedford",
    "intro": [
      "Albert Bierstadt nace en Solingen, Alemania, el 7 de enero de 1830; en 1831 la familia emigra a New Bedford, en Massachusetts.",
      "De 1853 a 1857 estudia pintura en Düsseldorf, y en 1858 expone en Nueva York un gran paisaje suizo."
    ]
  },
  "abs2": {
    "place": "Viajes al Oeste",
    "when": "1859–1866",
    "mapLabel": "Yosemite",
    "intro": [
      "En 1859 Bierstadt viaja a las Montañas Rocosas con el agrimensor Frederick W. Lander.",
      "En 1863 pasa siete semanas en el valle de Yosemite con el escritor Fitz Hugh Ludlow y luego pinta en Nueva York grandes cuadros a partir de sus bocetos."
    ]
  },
  "abs3": {
    "place": "Dos años en Europa",
    "when": "1867–1869",
    "mapLabel": "Roma",
    "intro": [
      "En 1867 Bierstadt viaja a Londres y después recorre Europa durante dos años.",
      "En su estudio de Roma pinta un gran cuadro de Sierra Nevada y lo expone en Berlín y Londres."
    ]
  },
  "abs4": {
    "place": "De nuevo en California",
    "when": "1870–1873",
    "mapLabel": "San Francisco",
    "intro": [
      "A principios de la década de 1870 Bierstadt vuelve a estar en California.",
      "Pinta la bahía de San Francisco, las cascadas y las rocas del valle de Yosemite y estudios de nubes y árboles."
    ]
  },
  "abs5": {
    "place": "Viajes tardíos: Canadá y Alaska",
    "when": "1876–1902",
    "mapLabel": "Canadá",
    "intro": [
      "Bierstadt sigue pintando montañas, lagos y costas, a menudo en pequeños bocetos al óleo.",
      "En 1889 cruza el oeste de Canadá con el Canadian Pacific Railway y sigue en vapor hasta Alaska."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ablucerne": {
    "text": [
      "Detrás de árboles y prados se extiende el lago azul, y sobre él se alzan montañas nevadas.",
      "Bierstadt pinta el cuadro después de sus años de estudio en Düsseldorf."
    ],
    "fact": "1858. National Gallery of Art, Washington."
  },
  "abbrook": {
    "text": [
      "Un pequeño arroyo cae entre rocas cubiertas de musgo a través de un bosque espeso.",
      "El cuadro muestra las White Mountains de New Hampshire, y en 1863 los críticos lo llaman su mejor obra."
    ],
    "fact": "1863. Art Institute of Chicago."
  },
  "abmerced": {
    "text": [
      "Altas paredes de granito se alzan sobre el tranquilo río Merced, en el valle de Yosemite.",
      "En primer plano hay pinos bajo una luz cálida."
    ],
    "fact": "1866. Metropolitan Museum of Art, Nueva York."
  },
  "abstarrking": {
    "text": [
      "A lo lejos se alza la cumbre de granito del monte Starr King sobre el valle de Yosemite.",
      "En 1864 el presidente Lincoln firma una ley que protege Yosemite."
    ],
    "fact": "1866. Museo de Arte de Cleveland."
  },
  "abvesuvius": {
    "text": [
      "Lava roja y ceniza brotan de noche del Vesubio, cerca de Nápoles.",
      "No es seguro que Bierstadt viera la erupción con sus propios ojos."
    ],
    "fact": "1868. Museo de Arte de Cleveland."
  },
  "absierra": {
    "text": [
      "Paredes de roca escarpadas y una cascada rodean un lago de montaña tranquilo en Sierra Nevada.",
      "El cuadro mide unos tres metros de ancho."
    ],
    "fact": "1868. Smithsonian American Art Museum, Washington."
  },
  "abfirtrees": {
    "text": [
      "Abetos oscuros se alzan bajo altas nubes de tormenta.",
      "Bierstadt pinta el estudio al óleo sobre papel."
    ],
    "fact": "hacia 1870. Museo de Arte de Cleveland."
  },
  "absfbay": {
    "text": [
      "Agua gris y tranquila se extiende ante una orilla llana de la bahía de San Francisco.",
      "Bierstadt pinta el pequeño boceto al óleo sobre cartón."
    ],
    "fact": "1871–1873. Smithsonian American Art Museum, Washington."
  },
  "abcathedral": {
    "text": [
      "Detrás de altos abetos se alzan las rocas de Cathedral Rocks, en el valle de Yosemite.",
      "Delante, los árboles se reflejan en el río."
    ],
    "fact": "hacia 1872. Smithsonian American Art Museum, Washington."
  },
  "abnevada": {
    "text": [
      "La cascada Nevada cae espumosa entre abetos oscuros hacia el valle.",
      "Abajo, en la orilla, se ven dos pequeñas figuras."
    ],
    "fact": "1872–1873. Metropolitan Museum of Art, Nueva York."
  },
  "abcorcoran": {
    "text": [
      "Un lago de montaña verde se extiende entre árboles altos bajo una cumbre nevada.",
      "Las nubes pasan sobre la cima."
    ],
    "fact": "hacia 1876–1877. National Gallery of Art, Washington."
  },
  "abgates": {
    "text": [
      "Enormes paredes de roca forman una puerta natural a la entrada del valle de Yosemite.",
      "Entre ellas corre tranquilo el río."
    ],
    "fact": "hacia 1882. Smithsonian American Art Museum, Washington."
  },
  "abmountain": {
    "text": [
      "Un lago con pequeñas islas boscosas se extiende ante cumbres nevadas.",
      "Bierstadt pinta el boceto al óleo sobre papel."
    ],
    "fact": "1880–1890. Metropolitan Museum of Art, Nueva York."
  },
  "abseacove": {
    "text": [
      "Dos árboles torcidos por el viento se alzan en un acantilado sobre una pequeña cala de arena clara.",
      "Bierstadt pinta el pequeño cuadro sobre madera."
    ],
    "fact": "hacia 1880–1890. Metropolitan Museum of Art, Nueva York."
  },
  "ablouise": {
    "text": [
      "Un lago de montaña se extiende entre abetos al pie de una cumbre con glaciares.",
      "El lago Louise está en las Montañas Rocosas, en el oeste de Canadá."
    ],
    "fact": "hacia 1889. Metropolitan Museum of Art, Nueva York."
  },
  "abalaska": {
    "text": [
      "Montañas grises con nieve se alzan sobre un brazo de mar tranquilo.",
      "El boceto al óleo se hizo probablemente en el lugar, durante su viaje a Alaska."
    ],
    "fact": "hacia 1889. Smithsonian American Art Museum, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
