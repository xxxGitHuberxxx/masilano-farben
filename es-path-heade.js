// v10.43 ES content for Martin Johnson Heade’s life journey (1819–1904). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "mhthunder": {
    "title": "Tormenta que se aproxima",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "mhwineglass": {
    "title": "Bodegón con copa de vino",
    "museum": "National Gallery of Art, Washington"
  },
  "mhroses": {
    "title": "Rosas y heliotropo en un jarrón sobre una mesa de mármol",
    "museum": "National Gallery of Art, Washington"
  },
  "mhrio": {
    "title": "La bahía de Río de Janeiro",
    "museum": "National Gallery of Art, Washington"
  },
  "mhcattleya": {
    "title": "Orquídea Cattleya y tres colibríes",
    "museum": "National Gallery of Art, Washington"
  },
  "mhorchid": {
    "title": "Flores de orquídea",
    "museum": "Museo de Arte de Cleveland"
  },
  "mhjudith": {
    "title": "Point Judith, Rhode Island",
    "museum": "Museo de Arte de Cleveland"
  },
  "mhyork": {
    "title": "York Harbor, costa de Maine",
    "museum": "Art Institute of Chicago"
  },
  "mhapplevase": {
    "title": "Flores de manzano en un jarrón",
    "museum": "National Gallery of Art, Washington"
  },
  "mhapple": {
    "title": "Flores de manzano",
    "museum": "Museo de Arte de Cleveland"
  },
  "mhhumapple": {
    "title": "Colibrí y flores de manzano",
    "museum": "Metropolitan Museum of Art, Nueva York"
  }
});
  P.paths = P.paths || {};
  P.paths.heade = {
  "title": "El camino de vida de Martin Johnson Heade",
  "part": "Nueva York, Brasil, Nueva Inglaterra",
  "subtitle": "Tormentas, orquídeas y flores de manzano",
  "intro": "Viaja por la vida de Martin Johnson Heade: de su estudio en Nueva York a los colibríes y las orquídeas de Brasil, a las costas de Nueva Inglaterra y a sus cuadros de flores. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "En 1883 Heade se establece en St. Augustine, en Florida; allí Henry Flagler le proporciona más tarde un estudio en el Hotel Ponce de Leon.",
    "Martin Johnson Heade muere en 1904 en St. Augustine."
  ],
  "epilogue": "Martin Johnson Heade muere en 1904. El camino lleva de Nueva York a Brasil, a las costas de Nueva Inglaterra y a sus flores de manzano.",
  "life": "1819–1904"
};
  P.stations = Object.assign(P.stations || {}, {
  "mhs1": {
    "place": "Un estudio en Nueva York",
    "when": "1859–1862",
    "mapLabel": "Nueva York",
    "intro": [
      "Martin Johnson Heade nace en 1819 en Lumberville, en Pensilvania; recibe sus primeras clases de pintura de su vecino, el pintor Edward Hicks.",
      "En 1859 ya se ha establecido en Nueva York y tiene un estudio en el Tenth Street Studio Building, donde traba amistad con Frederic Edwin Church."
    ]
  },
  "mhs2": {
    "place": "Colibríes y orquídeas",
    "when": "1864–1873",
    "mapLabel": "Brasil y el trópico",
    "intro": [
      "En 1863 Heade viaja a Brasil para pintar colibríes para un libro proyectado, «The Gems of Brazil»; el libro nunca llega a publicarse.",
      "Entre 1863 y 1870 viaja tres veces a Centroamérica y Sudamérica, y después pinta una y otra vez orquídeas y colibríes en paisajes tropicales."
    ]
  },
  "mhs3": {
    "place": "Luz de luna y puertos tranquilos",
    "when": "1867–1877",
    "mapLabel": "Rhode Island y Maine",
    "intro": [
      "Heade es un viajero inquieto y vive temporadas en Nueva York, Providence, St. Louis, Nueva Orleans y Richmond.",
      "Sus primeros paisajes muestran las marismas saladas de Rhode Island, y una y otra vez pinta la luz y la atmósfera de las costas de Nueva Inglaterra."
    ]
  },
  "mhs4": {
    "place": "Flores de manzano",
    "when": "1867–1875",
    "mapLabel": "Nueva York",
    "intro": [
      "Hoy se considera a Heade uno de los pocos pintores que dominan por igual el paisaje y el bodegón de flores.",
      "Pinta flores de manzano en un jarrón, como una sola rama sobre la mesa y bajo el cielo abierto, una vez incluso con un colibrí."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mhthunder": {
    "text": [
      "Bajo un cielo de tormenta casi negro, el agua yace oscura y quieta, y solo una vela blanca brilla a lo lejos.",
      "En la orilla está sentado un hombre con camisa roja junto a un perrito blanco, y a la izquierda hay una barca bajo una lona."
    ],
    "fact": "1859. Metropolitan Museum of Art, Nueva York."
  },
  "mhwineglass": {
    "text": [
      "En una esbelta copa de vino hay un pequeño ramo de rosas rojas y flores azules sobre un sencillo fondo marrón.",
      "Abajo a la izquierda figura la inscripción «M.J. Head / -60»."
    ],
    "fact": "1860. National Gallery of Art, Washington."
  },
  "mhroses": {
    "text": [
      "Rosas claras y heliotropo violeta están en un jarrón blanco sobre una mesa de mármol, y a la izquierda asoma una cortina.",
      "Abajo a la derecha el cuadro lleva la inscripción «1862/ M.J. Heade»."
    ],
    "fact": "1862. National Gallery of Art, Washington."
  },
  "mhrio": {
    "text": [
      "Las olas rompen contra rocas oscuras y detrás se abre la bahía bajo un cielo amarillo dorado con nubes blancas.",
      "Abajo a la izquierda figura la firma «M. J. Heade / 1864»; antes el cuadro también se conocía como «Brazilian Seascape»."
    ],
    "fact": "1864. National Gallery of Art, Washington."
  },
  "mhcattleya": {
    "text": [
      "Una espléndida orquídea rosa domina el primer plano, el musgo cuelga de los árboles y una bruma gris azulada vela la selva lejana.",
      "A la derecha, junto a un nido, se posan tres colibríes: un cometa Sappho verde de cola rojo intenso y dos amatistas brasileños verdes y rosados."
    ],
    "fact": "1871. National Gallery of Art, Washington."
  },
  "mhorchid": {
    "text": [
      "Una gran orquídea blanca de labelo rosa y flecado cuelga de tallos verdes sobre un valle selvático oscuro y brumoso.",
      "Cuando Heade pinta este cuadro en 1873, ya ha realizado tres viajes a Centroamérica y Sudamérica."
    ],
    "fact": "1873. Museo de Arte de Cleveland."
  },
  "mhjudith": {
    "text": [
      "Es una de las pocas escenas nocturnas de Heade: la luz de la luna brilla sobre el agua y atraviesa las nubes.",
      "A la izquierda navegan dos veleros, la única huella humana en esta escena tranquila."
    ],
    "fact": "1867–1868. Museo de Arte de Cleveland."
  },
  "mhyork": {
    "text": [
      "El sol brilla tras una fina bruma sobre una bahía tranquila en la que hay algunos veleros.",
      "El amplio formato horizontal, la pincelada casi invisible y la luz que lo impregna todo se consideran hoy típicos del luminismo."
    ],
    "fact": "1877. Art Institute of Chicago."
  },
  "mhapplevase": {
    "text": [
      "Ramas de flores de manzano blancas y rosadas salen de un jarrón claro y decorado sobre un fondo oscuro.",
      "El cuadro perteneció a Cyrus W. Field, en Nueva York, y está firmado abajo a la derecha «M.J. Heade 67»."
    ],
    "fact": "1867. National Gallery of Art, Washington."
  },
  "mhapple": {
    "text": [
      "Una sola rama de flores de manzano está apoyada sobre una mesa y se sostiene contra una pared lisa.",
      "Heade pinta unos 150 bodegones de flores a lo largo de su larga carrera; firma este abajo a la izquierda «MJ Heade 1873»."
    ],
    "fact": "1873. Museo de Arte de Cleveland."
  },
  "mhhumapple": {
    "text": [
      "Una rama de manzano en flor atraviesa el cuadro ante un cielo gris y nublado.",
      "Abajo, un pequeño colibrí verde se posa en una ramita."
    ],
    "fact": "1875. Metropolitan Museum of Art, Nueva York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
