// v10.43 ES content for Utagawa Hiroshige II’s life journey (1826–1869). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York"
});
  P.works = Object.assign(P.works || {}, {
  "hzivy": {
    "title": "Pajarillo y hiedra",
    "museum": "Art Institute of Chicago"
  },
  "hzwhiteeye": {
    "title": "Anteojitos japonés y caquis",
    "museum": "Art Institute of Chicago"
  },
  "hzsparrow": {
    "title": "Gorrión en una rama de camelia",
    "museum": "Art Institute of Chicago"
  },
  "hzparrot": {
    "title": "Loro en una rama de ciruelo",
    "museum": "Art Institute of Chicago"
  },
  "hzkingfisher": {
    "title": "Martín pescador e hortensia",
    "museum": "Art Institute of Chicago"
  },
  "hzpine": {
    "title": "Pájaro en una rama de pino",
    "museum": "Art Institute of Chicago"
  },
  "hztsuten": {
    "title": "El puente Tsūten del templo Tōfuku, Kioto",
    "museum": "Art Institute of Chicago"
  },
  "hzhase": {
    "title": "El templo Hase, provincia de Yamato",
    "museum": "Art Institute of Chicago"
  },
  "hzyoshino": {
    "title": "El monte Yoshino, provincia de Yamato",
    "museum": "Art Institute of Chicago"
  },
  "hzamano": {
    "title": "Amanohashidate, provincia de Tango",
    "museum": "Art Institute of Chicago"
  },
  "hztaka": {
    "title": "La playa de Taka, provincia de Tajima",
    "museum": "Art Institute of Chicago"
  },
  "hzhara": {
    "title": "Hara, provincia de Suruga",
    "museum": "Art Institute of Chicago"
  },
  "hzkikyo": {
    "title": "La llanura de Kikyō, provincia de Shinshū",
    "museum": "Art Institute of Chicago"
  },
  "hzmikuni": {
    "title": "El gran puerto de Mikuni, provincia de Echizen",
    "museum": "Art Institute of Chicago"
  },
  "hzchuzenji": {
    "title": "El lago Chūzenji, provincia de Shimotsuke",
    "museum": "Art Institute of Chicago"
  },
  "hziris": {
    "title": "Jardines de lirios en Horikiri",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "hzryogoku": {
    "title": "Fuegos artificiales sobre Ryōgoku",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "hzmimeguri": {
    "title": "El dique de Mimeguri junto al río Sumida",
    "museum": "Art Institute of Chicago"
  },
  "hzimado": {
    "title": "El puente Imado y la colina Matsuchi",
    "museum": "Art Institute of Chicago"
  },
  "hztakino": {
    "title": "Takino, provincia de Harima",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.hiroshigeii = {
  "title": "El camino de vida de Utagawa Hiroshige II",
  "part": "Pájaros, montañas y costas",
  "subtitle": "Por las provincias hasta Edo",
  "intro": "Viaja con el grabador japonés Utagawa Hiroshige II: a pequeñas estampas de pájaros y flores, a templos, montañas y costas de muchas provincias y a los ríos y puentes de Edo. Las imágenes proceden de museos que ofrecen sus reproducciones libremente.",
  "ending": [
    "Utagawa Hiroshige II muere en 1869.",
    "Sus grabados se conservan hoy en museos de todo el mundo."
  ],
  "epilogue": "Utagawa Hiroshige II muere en 1869. El camino lleva de pequeñas estampas de pájaros y flores, pasando por templos, montañas y costas de las provincias, hasta los ríos de Edo.",
  "life": "1826–1869"
};
  P.stations = Object.assign(P.stations || {}, {
  "hzs1": {
    "place": "Pájaros y flores",
    "when": "1843–1857",
    "mapLabel": "Edo",
    "intro": [
      "Utagawa Hiroshige II nace en 1826; es alumno del maestro grabador Utagawa Hiroshige y trabaja primero con el nombre de Shigenobu.",
      "Firma sus pequeñas estampas de pájaros sobre ramas en flor con «Shigenobu»."
    ]
  },
  "hzs2": {
    "place": "Cien vistas famosas de las provincias",
    "when": "1859",
    "mapLabel": "Kioto y alrededores",
    "intro": [
      "En 1859, un año después de la muerte de su maestro, se casa con la hija de este y adopta el nombre de Hiroshige.",
      "Ese mismo año aparecen estampas de su serie «Cien vistas famosas de las diversas provincias», con templos, montañas y costas."
    ]
  },
  "hzs3": {
    "place": "De provincia en provincia",
    "when": "1860–1861",
    "mapLabel": "Japón",
    "intro": [
      "En 1860 siguen otras estampas de la serie, desde el monte Fuji y una verde meseta hasta un puerto y un lago de montaña.",
      "En 1861 muestra unos jardines de lirios cerca de Edo en una estampa impresa casi solo en tonos azules."
    ]
  },
  "hzs4": {
    "place": "Edo y las provincias",
    "when": "1862",
    "mapLabel": "Edo",
    "intro": [
      "En 1862 diseña nuevas series, como «Treinta y seis vistas de la capital del Este», con vistas de Edo, y «Sesenta y ocho vistas de las diversas provincias».",
      "Hacia 1865 su matrimonio se disuelve y se retira a Yokohama."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hzivy": {
    "text": [
      "Un pajarillo verde se agarra a un tallo de hojas rojas, y a su lado hay líneas de escritura.",
      "La pequeña estampa está firmada «Shigenobu fude», pintado por Shigenobu."
    ],
    "fact": "hacia 1843–1847. Art Institute of Chicago."
  },
  "hzwhiteeye": {
    "text": [
      "Un anteojitos verde se posa en una rama con caquis redondos y anaranjados.",
      "El grabado tiene el pequeño formato koban."
    ],
    "fact": "hacia 1847–1852. Art Institute of Chicago."
  },
  "hzsparrow": {
    "text": [
      "Un gorrión se posa en una rama de camelia con flores rojas y rosas.",
      "Arriba a la izquierda hay líneas de escritura, y abajo a la derecha la firma «Shigenobu fude»."
    ],
    "fact": "hacia 1847–1852. Art Institute of Chicago."
  },
  "hzparrot": {
    "text": [
      "Un loro rojo de alas verdes se posa en una rama de ciruelo en flor.",
      "El Art Institute of Chicago fecha la pequeña estampa hacia 1848–1852."
    ],
    "fact": "hacia 1848–1852. Art Institute of Chicago."
  },
  "hzkingfisher": {
    "text": [
      "Un martín pescador azul de pico rojo vuela bajo un ramillete de hortensias azules.",
      "El estrecho formato vertical se llama chūtanzaku."
    ],
    "fact": "1857. Art Institute of Chicago."
  },
  "hzpine": {
    "text": [
      "Un pájaro rojo se posa en una rama de pino con mechones de agujas azul oscuro.",
      "La estampa está firmada «Shigenobu hitsu» y lleva el sello del editor Jakurindō."
    ],
    "fact": "1857. Art Institute of Chicago."
  },
  "hztsuten": {
    "text": [
      "Los arces rojos resplandecen en el barranco bajo un puente cubierto.",
      "La estampa pertenece a la serie «Cien vistas famosas de las diversas provincias»."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzhase": {
    "text": [
      "Flores blancas de cerezo rodean los edificios del templo en la ladera.",
      "Una escalera cubierta sube por la pendiente, y abajo brilla un campo amarillo."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzyoshino": {
    "text": [
      "Innumerables cerezos florecen en las laderas verdes, y una cascada cae por el valle.",
      "A lo lejos se alza una cumbre azul."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzamano": {
    "text": [
      "Una larga lengua de tierra cubierta de pinos atraviesa la bahía azul.",
      "En el cielo, la luna llena brilla sobre colinas lejanas."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hztaka": {
    "text": [
      "Un alto acantilado con cerezos en flor se alza sobre una bahía tranquila.",
      "En el horizonte el cielo se tiñe de rojo sobre el mar."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzhara": {
    "text": [
      "El Fuji nevado se alza muy por encima de campos verdes y pinos.",
      "En primer plano pasa una larga comitiva de viajeros con estandartes."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hzkikyo": {
    "text": [
      "Un arroyo serpentea por una llanura verde y florida, bordeada de grandes pinos.",
      "Pequeñas figuras caminan por la orilla."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hzmikuni": {
    "text": [
      "Un gran velero está en el puerto, y una barca llena de gente atraca en la orilla.",
      "Más lejos, sobre el agua clara, navega un segundo barco."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hzchuzenji": {
    "text": [
      "Dos altos cedros se alzan en la orilla, y en el lago azul hay una puerta roja.",
      "Detrás del lago se elevan montañas boscosas."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hziris": {
    "text": [
      "Unos paseantes caminan bajo un pino junto a amplios macizos de lirios.",
      "La estampa en forma de abanico es un aizuri-e, impreso casi por completo en tonos azules."
    ],
    "fact": "1861. Metropolitan Museum of Art, Nueva York."
  },
  "hzryogoku": {
    "text": [
      "Un largo puente de madera cruza el río, lleno de barcas.",
      "En el cielo, unos fuegos artificiales estallan en pequeñas chispas."
    ],
    "fact": "1862. Metropolitan Museum of Art, Nueva York."
  },
  "hzmimeguri": {
    "text": [
      "Cerezos en flor bordean el dique, y una puerta conduce a un santuario.",
      "La estampa pertenece a la serie «Lugares famosos de la capital del Este»."
    ],
    "fact": "1862. Art Institute of Chicago."
  },
  "hzimado": {
    "text": [
      "La nieve cubre los tejados del templo en la colina y los árboles junto al agua.",
      "La estampa pertenece a la serie «Treinta y seis vistas de la capital del Este»."
    ],
    "fact": "1862. Art Institute of Chicago."
  },
  "hztakino": {
    "text": [
      "Un río espumea entre rocas, y detrás se alza una colina verde.",
      "La estampa es el número 44 de la serie «Sesenta y ocho vistas de las diversas provincias»."
    ],
    "fact": "1862. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
