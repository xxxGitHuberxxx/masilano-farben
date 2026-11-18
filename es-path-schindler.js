// v10.24 ES content for Emil Jakob Schindler’s life journey, Part 1 (1842–1892). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Belvedere, Wien": "Belvedere, Viena"
});
  P.works = Object.assign(P.works || {}, {
  "sjramsau": {
    "title": "Arroyo de montaña en la Ramsau",
    "museum": "Belvedere, Viena"
  },
  "sjdampfer": {
    "title": "Embarcadero del Danubio frente a Kaisermühlen",
    "museum": "Belvedere, Viena"
  },
  "sjholland": {
    "title": "Ganado pastando en Holanda",
    "museum": "Belvedere, Viena"
  },
  "sjschafe": {
    "title": "Paisaje de aldea con ovejas",
    "museum": "Belvedere, Viena"
  },
  "sjkrieau": {
    "title": "Motivo del Prater – Krieau",
    "museum": "Belvedere, Viena"
  },
  "sjhacking": {
    "title": "Soto de Hacking",
    "museum": "Belvedere, Viena"
  },
  "sjlundenburg": {
    "title": "Paisaje de turbera cerca de Lundenburg",
    "museum": "Belvedere, Viena"
  },
  "sjfruehling": {
    "title": "Primavera en Hacking",
    "museum": "Belvedere, Viena"
  },
  "sjgosau": {
    "title": "El molino de Gosau cerca de Ischl",
    "museum": "Belvedere, Viena"
  },
  "sjmaerz": {
    "title": "Ambiente de marzo – principio de primavera en el Bosque de Viena",
    "museum": "Belvedere, Viena"
  },
  "sjsaege": {
    "title": "Aserradero en la niebla de la mañana",
    "museum": "Belvedere, Viena"
  },
  "sjkorfu": {
    "title": "El mar Jónico cerca de Corfú",
    "museum": "Belvedere, Viena"
  },
  "sjruebe": {
    "title": "Campo de colinabos",
    "museum": "Belvedere, Viena"
  },
  "sjernte": {
    "title": "Mes de cosecha en Plankenberg",
    "museum": "Belvedere, Viena"
  },
  "sjsylt": {
    "title": "Costa de Sylt",
    "museum": "Belvedere, Viena"
  }
});
  P.paths = P.paths || {};
  P.paths.schindler = {
  "title": "El camino de vida de Emil Jakob Schindler",
  "life": "1842–1892",
  "part": "Parte 1 · Atmósferas de Viena a Sylt",
  "subtitle": "Sotos, molinos y mar",
  "intro": "Viaja con Emil Jakob Schindler, el paisajista vienés de las atmósferas serenas: desde los arroyos de montaña de la Ramsau, por los sotos del Danubio y el Prater, hasta Plankenberg, el Adriático y el mar de Sylt. Estaciones breves y cuadros para colorear. Esta primera parte sigue su luz.",
  "ending": [
    "Emil Jakob Schindler muere en Westerland, en Sylt, el 9 de agosto de 1892. Sus alumnas Marie Egner y Olga Wisinger-Florian continúan su pintura.",
    "El camino puede seguir creciendo. Más sotos y costas pueden seguir en una parte posterior."
  ],
  "epilogue": "El 9 de agosto de 1892 Schindler muere en Sylt. Una parte posterior puede añadir más paisajes de atmósfera."
};
  P.stations = Object.assign(P.stations || {}, {
  "sjjung": {
    "place": "Viena y las montañas · Aprendizaje",
    "when": "1842–1872",
    "mapLabel": "Ramsau",
    "intro": [
      "Emil Jakob Schindler nace en Viena el 27 de abril de 1842. Desde 1860 estudia en la Academia de Viena con Albert Zimmermann.",
      "Pinta arroyos de montaña y la vida diaria junto al Danubio."
    ]
  },
  "sjhell": {
    "place": "El Prater, Holanda y los sotos",
    "when": "1873–1882",
    "mapLabel": "Prater",
    "intro": [
      "En los años 1870 la pintura de Schindler se aclara. Viaja a Holanda y pinta en el Prater y en los sotos de Viena.",
      "Así nace su propia pintura serena de atmósferas."
    ]
  },
  "sjschule": {
    "place": "Goisern y el Bosque de Viena",
    "when": "1883–1884",
    "mapLabel": "Goisern",
    "intro": [
      "Schindler enseña ahora a jóvenes pintoras, entre ellas Marie Egner y Olga Wisinger-Florian. En verano pintan juntos en Goisern.",
      "En el Bosque de Viena observa el paso del invierno a la primavera."
    ]
  },
  "sjplank": {
    "place": "Plankenberg y el Adriático",
    "when": "1885–1890",
    "mapLabel": "Plankenberg",
    "intro": [
      "En 1885 Schindler se traslada con su familia al castillo de Plankenberg. Por encargo del príncipe heredero Rodolfo viaja a las costas del Adriático.",
      "Entre niebla, campo y mar nacen sus cuadros más maduros."
    ]
  },
  "sjnord": {
    "place": "En el mar del Norte",
    "when": "1892",
    "mapLabel": "Sylt",
    "intro": [
      "En el verano de 1892 Schindler viaja a Sylt. Aún pinta el mar abierto.",
      "Muere en Westerland el 9 de agosto de 1892."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sjramsau": {
    "text": [
      "Un arroyo corre entre piedras y abetos por la Ramsau. Schindler tiene veintiséis años y aprende a mirar con atención.",
      "Todavía pinta oscuro y denso, en la tradición de sus maestros."
    ],
    "fact": "1868. Belvedere, Viena."
  },
  "sjdampfer": {
    "text": [
      "En el Danubio hay un embarcadero para vapores y el agua es ancha y gris. Viena crece a lo largo de su río.",
      "Schindler pinta la vida diaria del río sin grandilocuencia."
    ],
    "fact": "hacia 1871. Belvedere, Viena."
  },
  "sjholland": {
    "text": [
      "Las vacas pastan en una tierra llana bajo un cielo enorme. Schindler viaja a Holanda y estudia a los pintores de allí.",
      "La amplia luz del norte cambia su mirada."
    ],
    "fact": "1875. Belvedere, Viena."
  },
  "sjschafe": {
    "text": [
      "Las ovejas pasan junto a casas bajas y el cielo está claro y en movimiento. Todo parece sencillo y tranquilo.",
      "Para Schindler lo corriente es un motivo digno."
    ],
    "fact": "1875. Belvedere, Viena."
  },
  "sjkrieau": {
    "text": [
      "En la Krieau del Prater hay árboles viejos junto al agua. Las hojas rompen la luz en muchos tonos.",
      "Aquí pintará también Tina Blau, con quien Schindler comparte taller durante un tiempo."
    ],
    "fact": "hacia 1873. Belvedere, Viena."
  },
  "sjhacking": {
    "text": [
      "Junto a Hacking, a orillas del río Wien, hay un soto tranquilo con árboles y agua. El cuadro tiene el frescor húmedo de un día de primavera.",
      "Pronto se llamará a Schindler pintor de atmósferas."
    ],
    "fact": "1880. Belvedere, Viena."
  },
  "sjlundenburg": {
    "text": [
      "Cerca de Lundenburg, junto al Thaya, hay turberas llanas y charcas. El cielo se refleja en el suelo oscuro.",
      "Schindler busca a propósito estos lugares solitarios."
    ],
    "fact": "1882. Belvedere, Viena."
  },
  "sjfruehling": {
    "text": [
      "Los primeros árboles florecen en Hacking y la hierba es verde claro. El aire parece cálido y suave.",
      "Schindler tiene ahora alumnas y alumnos que pintan con él al aire libre."
    ],
    "fact": "1883. Belvedere, Viena."
  },
  "sjgosau": {
    "text": [
      "Un viejo molino está junto al arroyo en el Salzkammergut, con la madera y el agua cubiertas de musgo. Schindler pinta aquí con sus alumnas.",
      "Los veranos en Goisern se convierten en una escuela de pintura al aire libre."
    ],
    "fact": "1883. Belvedere, Viena."
  },
  "sjmaerz": {
    "text": [
      "En el Bosque de Viena la nieve casi se ha derretido y los árboles siguen sin hojas. La luz ya anuncia la primavera.",
      "Schindler ama especialmente estos tiempos intermedios."
    ],
    "fact": "1884. Belvedere, Viena."
  },
  "sjsaege": {
    "text": [
      "En la niebla de la mañana el aserradero y los árboles parecen sombras. Colores y formas se vuelven suaves.",
      "Desde 1885 Schindler vive con su familia en el castillo de Plankenberg, cerca de Neulengbach."
    ],
    "fact": "1886. Belvedere, Viena."
  },
  "sjkorfu": {
    "text": [
      "El mar cerca de Corfú brilla azul y la costa es clara y rocosa. Schindler viaja al Adriático por encargo del príncipe heredero Rodolfo.",
      "Debe pintar las costas para un gran libro sobre la monarquía."
    ],
    "fact": "1888. Belvedere, Viena."
  },
  "sjruebe": {
    "text": [
      "Un campo de colinabos se extiende llano bajo un cielo alto, con algunos árboles al borde. Aquí nada es espectacular.",
      "Justo en eso está la fuerza tranquila de Schindler."
    ],
    "fact": "1888. Belvedere, Viena."
  },
  "sjernte": {
    "text": [
      "En verano el grano está maduro alrededor de Plankenberg y las gavillas yacen en el campo. La luz es cálida y dorada.",
      "Schindler pinta el paisaje alrededor de su casa en todas las estaciones."
    ],
    "fact": "1890. Belvedere, Viena."
  },
  "sjsylt": {
    "text": [
      "En la costa de Sylt las olas ruedan sobre la arena clara y el cielo es amplio y ventoso. Es uno de sus últimos cuadros.",
      "Schindler viaja al mar del Norte en 1892 y muere allí en agosto."
    ],
    "fact": "1892. Belvedere, Viena."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
