// v8.0 Spanish content for Klimt’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts.
// Quotes are translations of the German self-translations
// (Flöge postcards and letter; Kunstschau opening address).
// Overwrites P.paths.klimt with whole-path meta; must load after the Part 1 pack.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Colección no determinada",
  "Privatbesitz": "Colección privada",
  "Leopold Museum, Wien": "Leopold Museum, Viena",
  "Österreichische Galerie Belvedere, Wien": "Österreichische Galerie Belvedere, Viena",
  "Neue Galerie, New York": "Neue Galerie, Nueva York",
  "Musée d’Orsay, Paris": "Musée d’Orsay, París",
  "MAK – Museum für angewandte Kunst, Wien": "MAK – Museo de Artes Aplicadas, Viena",
  "Museum of Modern Art, New York": "Museum of Modern Art, Nueva York",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery, London": "National Gallery, Londres",
  "Neue Pinakothek, München": "Neue Pinakothek, Múnich",
  "Präfekturmuseum Aichi, Nagoya": "Museo Prefectural de Aichi, Nagoya",
  "Busch-Reisinger Museum, Harvard Art Museums, Cambridge": "Busch-Reisinger Museum, Harvard Art Museums, Cambridge",
  "Nationalgalerie Prag": "Galería Nacional de Praga",
  "Kunsthaus Zug": "Kunsthaus Zug",
  "Städtisches Kunstmuseum Toyota": "Museo Municipal de Arte de Toyota",
  "Tel Aviv Museum of Art": "Tel Aviv Museum of Art",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "LENTOS Kunstmuseum Linz": "LENTOS Kunstmuseum Linz",
  "Galleria d’Arte Moderna Ricci Oddi, Piacenza": "Galleria d’Arte Moderna Ricci Oddi, Piacenza",
  "Historische Fotografie; das Original verbrannte 1945 auf Schloss Immendorf": "Fotografía histórica; el original se quemó en 1945 en el palacio de Immendorf"
});
  P.works = Object.assign(P.works || {}, {
  "goldknight": {
    "title": "El caballero dorado",
    "museum": "Museo Prefectural de Aichi, Nagoya"
  },
  "goldapple": {
    "title": "Manzano dorado",
    "museum": "Fotografía histórica; el original se quemó en 1945 en el palacio de Immendorf"
  },
  "birkforest": {
    "title": "Bosque de abedules",
    "museum": "Colección privada"
  },
  "poplar2": {
    "title": "El gran álamo II (Tormenta que se acerca)",
    "museum": "Leopold Museum, Viena"
  },
  "kpeartree": {
    "title": "Peral",
    "museum": "Busch-Reisinger Museum, Harvard Art Museums, Cambridge"
  },
  "wittgenstein": {
    "title": "Retrato de Margaret Stonborough-Wittgenstein",
    "museum": "Neue Pinakothek, Múnich"
  },
  "gallia": {
    "title": "Retrato de Hermine Gallia",
    "museum": "National Gallery, Londres"
  },
  "fritza": {
    "title": "Retrato de Fritza Riedler",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "adelestudy": {
    "title": "Estudio para el retrato de Adele Bloch-Bauer I",
    "museum": "Colección no determinada"
  },
  "adele": {
    "title": "Retrato de Adele Bloch-Bauer I",
    "museum": "Neue Galerie, Nueva York"
  },
  "rosetrees": {
    "title": "Rosales bajo los árboles",
    "museum": "Musée d’Orsay, París"
  },
  "kiss": {
    "title": "El beso",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "kissdetail": {
    "title": "El beso (detalle)",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "kgarden": {
    "title": "Jardín campesino",
    "museum": "Colección privada"
  },
  "sunfarm": {
    "title": "Jardín campesino con girasoles",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "ksunflower": {
    "title": "El girasol",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "kpoppies": {
    "title": "Amapolas en flor",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "meadow": {
    "title": "Pradera en flor",
    "museum": "Colección privada"
  },
  "stocletexp": {
    "title": "La expectación (plantilla)",
    "museum": "MAK – Museo de Artes Aplicadas, Viena"
  },
  "stocletembrace": {
    "title": "El abrazo (plantilla)",
    "museum": "MAK – Museo de Artes Aplicadas, Viena"
  },
  "stoclettree": {
    "title": "El árbol de la vida (plantilla)",
    "museum": "MAK – Museo de Artes Aplicadas, Viena"
  },
  "stocletritter": {
    "title": "El caballero (plantilla)",
    "museum": "MAK – Museo de Artes Aplicadas, Viena"
  },
  "stocletrose": {
    "title": "Rosal (plantilla)",
    "museum": "MAK – Museo de Artes Aplicadas, Viena"
  },
  "featherboa": {
    "title": "Dama con sombrero y boa de plumas",
    "museum": "Colección privada"
  },
  "barbarafloege": {
    "title": "Retrato de Barbara Flöge",
    "museum": "Colección no determinada"
  },
  "thepark": {
    "title": "El parque",
    "museum": "Museum of Modern Art, Nueva York"
  },
  "kammer2": {
    "title": "Schloss Kammer en el Attersee II",
    "museum": "Colección privada"
  },
  "kammer3": {
    "title": "Schloss Kammer en el Attersee III",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "kammer4": {
    "title": "Schloss Kammer en el Attersee IV",
    "museum": "Colección privada"
  },
  "kammerave": {
    "title": "Alameda hacia Schloss Kammer",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "kammerpark": {
    "title": "Parque de Schloss Kammer",
    "museum": "Neue Galerie, Nueva York"
  },
  "watercastle": {
    "title": "Palacio de agua",
    "museum": "Galería Nacional de Praga"
  },
  "oefarm": {
    "title": "Casa campesina de Alta Austria",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "kapple": {
    "title": "Manzano I",
    "museum": "Colección privada"
  },
  "kapple2": {
    "title": "Manzano II",
    "museum": "Colección no determinada"
  },
  "malcesine": {
    "title": "Malcesine en el lago de Garda",
    "museum": "Fotografía histórica; el original se quemó en 1945 en el palacio de Immendorf"
  },
  "cassone": {
    "title": "Iglesia de Cassone",
    "museum": "Colección privada"
  },
  "italygarden": {
    "title": "Paisaje de jardín italiano",
    "museum": "Kunsthaus Zug"
  },
  "unterach": {
    "title": "Casas en Unterach am Attersee",
    "museum": "Colección no determinada"
  },
  "ualslope": {
    "title": "Ladera boscosa cerca de Unterach am Attersee",
    "museum": "Colección privada"
  },
  "litzlberg": {
    "title": "Litzlberg am Attersee",
    "museum": "Colección privada"
  },
  "litzkeller": {
    "title": "Litzlbergkeller",
    "museum": "Leopold Museum, Viena"
  },
  "weissenbach": {
    "title": "Casa del guarda en Weissenbach II",
    "museum": "Colección no determinada"
  },
  "pfarrgarten": {
    "title": "Paisaje de jardín con cumbre (jardín parroquial)",
    "museum": "Colección no determinada"
  },
  "mada": {
    "title": "Retrato de Mäda Primavesi",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "adele2": {
    "title": "Retrato de Adele Bloch-Bauer II",
    "museum": "Colección privada"
  },
  "eugenia": {
    "title": "Retrato de Eugenia Primavesi",
    "museum": "Museo Municipal de Arte de Toyota"
  },
  "fmbeer": {
    "title": "Retrato de Friederike Maria Beer",
    "museum": "Tel Aviv Museum of Art"
  },
  "ladyfan": {
    "title": "Dama con abanico",
    "museum": "Colección privada"
  },
  "dancer": {
    "title": "La bailarina",
    "museum": "Neue Galerie, Nueva York"
  },
  "riamunk3": {
    "title": "Retrato de Ria Munk III",
    "museum": "Colección privada"
  },
  "deathfig": {
    "title": "Muerte y vida (recorte: la Muerte)",
    "museum": "Leopold Museum, Viena"
  },
  "riamunkbed": {
    "title": "Ria Munk en su lecho de muerte",
    "museum": "Colección privada"
  },
  "staude": {
    "title": "Retrato de Johanna Staude",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "zuckerkandl": {
    "title": "Retrato de Amalie Zuckerkandl",
    "museum": "Österreichische Galerie Belvedere, Viena"
  },
  "kbaby": {
    "title": "Bebé (Cuna)",
    "museum": "National Gallery of Art, Washington"
  },
  "ladyhead": {
    "title": "Cabeza de mujer",
    "museum": "LENTOS Kunstmuseum Linz"
  },
  "ladypiacenza": {
    "title": "Retrato de una dama",
    "museum": "Galleria d’Arte Moderna Ricci Oddi, Piacenza"
  },
  "ladywhite": {
    "title": "Dama de blanco",
    "museum": "Österreichische Galerie Belvedere, Viena"
  }
});
  P.paths = P.paths || {};
  P.paths.klimt = {
  "title": "El camino de vida de Klimt",
  "life": "1862–1918",
  "part": "Partes 1–2 · 1862–1918",
  "subtitle": "De Baumgarten a los últimos cuadros",
  "intro": "Viaja con Gustav Klimt por toda su vida: desde la infancia en Baumgarten y la Escuela de Artes Aplicadas, pasando por la Künstler-Compagnie, el Burgtheater y el Kunsthistorisches Museum, la muerte de su padre y de su hermano en 1892, la Secesión y el friso de Beethoven, hasta la época dorada, la Kunstschau de 1908, el friso Stoclet, Emilie Flöge, los paisajes del Attersee y del lago de Garda, los retratos coloridos tardíos y «Muerte y vida». Estaciones breves, cuadros para pintar y voces documentadas: postales y una carta a Emilie Flöge, y el discurso de la Kunstschau. Klimt muere en Viena el 6 de febrero de 1918.",
  "ending": [
    "En los últimos años nacen retratos y paisajes coloridos, junto a retratos inacabados como Johanna Staude, Amalie Zuckerkandl y la «Dama de blanco». En 1916 Klimt pasa el último verano compartido con Emilie Flöge en el Attersee. El 30 de diciembre de 1917 le escribe desde Winkelsdorf: «…un saludo salido de lo más íntimo y [te] deseo un año nuevo de lo más, más feliz. – como los dos lo necesitamos con tanta urgencia.»",
    "El 11 de enero de 1918 Klimt sufre un derrame cerebral en Viena. Muere el 6 de febrero de 1918 en el Hospital General de Viena, a los cincuenta y seis años.",
    "Quedan, entre otras obras, «El beso» en el Belvedere, el retrato dorado de Adele Bloch-Bauer, las plantillas del friso Stoclet en el MAK, los paisajes del Attersee y del lago de Garda y los retratos tardíos. De él mismo, había escrito, no hay autorretrato: hay que mirar sus cuadros."
  ],
  "epilogue": "El 11 de enero de 1918 Gustav Klimt sufre un derrame cerebral en Viena. Muere el 6 de febrero de 1918 en el Hospital General, a los cincuenta y seis años. Quedan «El beso», los retratos dorados, el friso Stoclet, los paisajes y los retratos tardíos – y las voces de las tarjetas y cartas a Emilie Flöge."
};
  P.stations = Object.assign(P.stations || {}, {
  "klimtgold": {
    "place": "Viena · La época dorada",
    "when": "1903–1907",
    "mapLabel": "Oro",
    "intro": [
      "En diciembre de 1903 Klimt viaja a Rávena. En una postal a Emilie Flöge escribe de mucho de miserable – y de mosaicos de un esplendor inaudito. En los años siguientes el estilo dorado se densifica en retratos y en algunas piezas de árboles y bosques.",
      "Nacen, entre otras obras, el retrato de Hermine Gallia, el de Margaret Stonborough-Wittgenstein y el de Fritza Riedler, y en 1907 el retrato dorado de Adele Bloch-Bauer. Junto a ellos están «El caballero dorado», el «Manzano dorado» y paisajes como el «Bosque de abedules»."
    ]
  },
  "klimtkunstschau": {
    "place": "Viena · Kunstschau 1908",
    "when": "1908",
    "mapLabel": "Kunstschau",
    "intro": [
      "En 1905 el llamado grupo de Klimt abandona la Secesión. El 1 de junio de 1908 Klimt inaugura la Kunstschau en un edificio provisional erigido por Josef Hoffmann en el solar del actual Konzerthaus. En el discurso festivo dice que ningún ámbito de la vida humana es demasiado insignificante para ofrecer espacio a las aspiraciones artísticas.",
      "En la sala diseñada para Klimt cuelga, entre otras obras, «El beso» de 1907 a 1908. El Estado austriaco compra el cuadro para la Moderne Galerie, el actual Belvedere. En los mismos años nacen densas piezas de jardín y de pradera."
    ]
  },
  "klimtstoclet": {
    "place": "Viena · El friso Stoclet",
    "when": "hacia 1905–1911",
    "mapLabel": "Stoclet",
    "intro": [
      "Para el comedor del Palais Stoclet en Bruselas, una casa de Josef Hoffmann y de la Wiener Werkstätte para el industrial Adolphe Stoclet, Klimt proyecta un friso: la Expectación, el Árbol de la vida, el Abrazo, y además el Caballero y el rosal.",
      "Las plantillas y cartones de 1910 a 1911 los conserva el MAK en Viena. El friso mismo se instala en Bruselas."
    ]
  },
  "klimtfloege": {
    "place": "Viena · Emilie Flöge y el salón",
    "when": "1904–1915",
    "mapLabel": "Flöge",
    "intro": [
      "El 1 de julio de 1904 Emilie, Helene y Pauline Flöge fundan el salón de moda «Schwestern Flöge» en la Casa Piccola de la Mariahilfer Strasse. Los espacios los diseñan Josef Hoffmann y Koloman Moser.",
      "Los veranos Klimt sigue pasándolos con la familia Flöge en el Attersee. En 1909 viaja a España y escribe desde Toledo: «¡El Greco es magnífico!» En 1915 nace el retrato de Barbara, la madre de Emilie Flöge."
    ]
  },
  "klimtkammer": {
    "place": "Attersee · Schloss Kammer",
    "when": "1908–1912",
    "mapLabel": "Kammer",
    "intro": [
      "En los veranos del Attersee, Schloss Kammer en la orilla norte se convierte en un motivo recurrente. Klimt pinta el palacio desde el lago en varias versiones, más tarde también la alameda y el parque.",
      "Junto a ellos nacen un palacio de agua, una casa campesina de Alta Austria y manzanos. Los paisajes siguen sin oro, pero igual de densos en la superficie."
    ]
  },
  "klimtgarda": {
    "place": "Lago de Garda · Malcesine y Cassone",
    "when": "1913",
    "mapLabel": "Garda",
    "intro": [
      "En 1913 Klimt viaja al lago de Garda. Nacen vistas de Malcesine y de la iglesia de Cassone, y un paisaje de jardín italiano.",
      "«Malcesine en el lago de Garda» se quema en 1945 en el palacio de Immendorf, junto con otras obras que habían sido evacuadas. Se conserva una fotografía histórica."
    ]
  },
  "klimtunterach": {
    "place": "Attersee · Unterach y Litzlberg",
    "when": "1914–1916",
    "mapLabel": "Unterach",
    "intro": [
      "En los veranos posteriores la mirada se vuelve con más fuerza hacia Unterach, en la orilla sureste, hacia Litzlberg y Weissenbach. Nacen vistas del pueblo y de la orilla, una ladera boscosa y paisajes de jardín.",
      "En 1916 Klimt pasa el último verano compartido con Emilie Flöge en el Attersee."
    ]
  },
  "klimtportraits": {
    "place": "Viena · Retratos coloridos",
    "when": "1912–1918",
    "mapLabel": "Retratos",
    "intro": [
      "Después de la época dorada los retratos se vuelven más coloridos y sueltos. Nacen, entre otras obras, los retratos de Mäda y de Eugenia Primavesi, el segundo retrato de Adele Bloch-Bauer y el de Friederike Maria Beer.",
      "En los fondos tardíos aparecen a menudo motivos de Asia oriental, que Klimt también colecciona – por ejemplo en el retrato de Friederike Maria Beer y en la «Dama con abanico». Junto a ellos están «La bailarina» y el retrato inacabado de Ria Munk III."
    ]
  },
  "klimttod": {
    "place": "Viena · Muerte y vida",
    "when": "hacia 1910–1915",
    "mapLabel": "Muerte y vida",
    "intro": [
      "Hacia 1910 Klimt comienza el gran cuadro «Muerte y vida», que más tarde reelabora. La Muerte se alza como figura oscura frente a un grupo de los vivos. Aquí solo se ve la figura de la Muerte.",
      "El cuadro cuelga en el Leopold Museum de Viena. En 1912 Klimt pinta además a Ria Munk en su lecho de muerte, al año siguiente de su muerte temprana."
    ]
  },
  "klimt1918": {
    "place": "Viena · Los últimos cuadros",
    "when": "1917–1918",
    "mapLabel": "1918",
    "intro": [
      "En los últimos meses nacen retratos inacabados – Johanna Staude, Amalie Zuckerkandl, la «Dama de blanco» – y obras acabadas como «Bebé (Cuna)», una cabeza de mujer y el «Retrato de una dama» de Piacenza.",
      "El 11 de enero de 1918 Klimt sufre un derrame cerebral. Muere el 6 de febrero de 1918 en el Hospital General de Viena."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "goldknight": {
    "text": [
      "Un caballero en armadura dorada cabalga con la lanza en ristre por un campo rocoso. El cuadro de 1903 se llama también «La vida es una lucha».",
      "Cuelga en el Museo Prefectural de Aichi en Nagoya. La superficie dorada y la armadura ornamental pertenecen ya a la época posterior al viaje a Rávena."
    ],
    "fact": "Óleo, témpera y pan de oro sobre lienzo, 1903. Museo Prefectural de Aichi, Nagoya."
  },
  "goldapple": {
    "text": [
      "Un manzano se alza como un denso ornamento atravesado de oro sobre un fondo oscuro, los frutos como signos en forma de disco. El cuadro nace en 1903.",
      "El original se quema en 1945 en el palacio de Immendorf, en Baja Austria, donde había sido evacuado. Se conserva, entre otras cosas, esta fotografía histórica."
    ],
    "fact": "Óleo y oro sobre lienzo, 1903. Fotografía histórica; el original se quemó en 1945 en el palacio de Immendorf."
  },
  "birkforest": {
    "text": [
      "Los troncos de abedul se alzan densos unos junto a otros, el suelo del bosque es una alfombra de musgo, hojas y luz. El cuadro nace en 1903, un año después del «Bosque de hayas I».",
      "Estuvo en la colección Paul G. Allen y hoy está en colección privada. Las piezas de bosque pertenecen a los veranos en el Attersee."
    ],
    "fact": "Óleo sobre lienzo, 1903. Colección privada."
  },
  "poplar2": {
    "text": [
      "Un alto álamo se alza ante un cielo oscuro y tormentoso, el prado delante aún claro. El cuadro se llama «El gran álamo II» y nace entre 1902 y 1903.",
      "Cuelga en el Leopold Museum de Viena. La mirada se dirige a un solo árbol, no a un paisaje amplio."
    ],
    "fact": "Óleo sobre lienzo, 1902–1903. Leopold Museum, Viena."
  },
  "kpeartree": {
    "text": [
      "Un peral llena la superficie como un denso mosaico de hojas, flores y frutos, el tronco apenas perceptible. El cuadro nace en 1903.",
      "Pertenece al Busch-Reisinger Museum de los Harvard Art Museums en Cambridge. Como el manzano dorado, muestra un solo árbol como ornamento."
    ],
    "fact": "Óleo y oro sobre lienzo, 1903. Busch-Reisinger Museum, Harvard Art Museums, Cambridge."
  },
  "wittgenstein": {
    "text": [
      "Margaret Stonborough-Wittgenstein se alza con un vestido blanco ante un fondo geométricamente dividido, en parte dorado. El retrato nace en 1905.",
      "La retratada es una hermana del filósofo Ludwig Wittgenstein. El cuadro cuelga en la Neue Pinakothek de Múnich."
    ],
    "fact": "Óleo sobre lienzo, 1905. Neue Pinakothek, Múnich."
  },
  "gallia": {
    "text": [
      "Hermine Gallia está sentada con un vestido claro, de caída suave, las manos en el regazo, el fondo en tonos ornamentales delicados. El retrato nace en 1904.",
      "Pertenece a la National Gallery de Londres. Hermine Gallia era la mujer del industrial vienés Moriz Gallia, un coleccionista temprano de Klimt."
    ],
    "fact": "Óleo sobre lienzo, 1904. National Gallery, Londres."
  },
  "fritza": {
    "text": [
      "Fritza Riedler está sentada con un vestido claro ante un fondo de patrón marcado; detrás de la cabeza aparece un ornamento dorado, a modo de trono. El retrato nace en 1906.",
      "Cuelga en el Belvedere de Viena. La geometría clara en torno a la cabeza pertenece ya por completo a la época dorada."
    ],
    "fact": "Óleo sobre lienzo, 1906. Österreichische Galerie Belvedere, Viena."
  },
  "adelestudy": {
    "text": [
      "Un dibujo fija la cabeza y el busto de Adele Bloch-Bauer, aún sin el fondo dorado posterior. El estudio pertenece a los trabajos preparatorios del retrato de 1907.",
      "Muestra con qué precisión Klimt fija la postura y la mirada antes de añadir el oro ornamental."
    ],
    "fact": "Dibujo, hacia 1903–1907. Colección no determinada."
  },
  "adele": {
    "text": [
      "Adele Bloch-Bauer está sentada con un vestido dorado, densamente ornamentado, el fondo un mosaico de oro, plata y signos. El retrato nace en 1907, tras años de trabajo.",
      "Pertenece a la Neue Galerie de Nueva York. En diciembre de 1903 Klimt escribe desde Rávena a Emilie Flöge sobre los mosaicos de un esplendor inaudito – una impresión que resuena en fondos dorados como este."
    ],
    "fact": "Óleo, plata y oro sobre lienzo, 1907. Neue Galerie, Nueva York.",
    "quote": {
      "text": "En Rávena hay mucho de miserable – los mosaicos de un esplendor inaudito.",
      "cite": "Postal a Emilie Flöge, Rávena, 2 de diciembre de 1903"
    }
  },
  "rosetrees": {
    "text": [
      "Bajo altas copas florecen rosales, follaje y flores tejidos en un patrón denso, a modo de alfombra. El cuadro nace hacia 1905.",
      "Cuelga en el Musée d’Orsay de París. Como en las piezas de bosque del Attersee, el horizonte se retira muy atrás."
    ],
    "fact": "Óleo sobre lienzo, hacia 1905. Musée d’Orsay, París."
  },
  "kiss": {
    "text": [
      "Una pareja se abraza al borde de un prado de flores, envuelta en ropajes dorados. El cuadro se llama «El beso», es cuadrado y nace entre 1907 y 1908.",
      "Se muestra en 1908 en la Kunstschau de Viena. El Estado austriaco lo compra allí para la Moderne Galerie, el actual Belvedere."
    ],
    "fact": "Óleo sobre lienzo con pan de oro, 1907–1908. Österreichische Galerie Belvedere, Viena.",
    "quote": {
      "text": "…que ningún ámbito de la vida humana es demasiado insignificante o escaso para ofrecer espacio a las aspiraciones artísticas.",
      "cite": "Discurso inaugural de la Kunstschau, Viena, 1 de junio de 1908"
    }
  },
  "kissdetail": {
    "text": [
      "El recorte muestra las cabezas de la pareja de «El beso»: los rostros juntos, el oro del ropaje a su alrededor. El cuadro entero nace entre 1907 y 1908.",
      "El 1 de junio de 1908 Klimt inaugura la Kunstschau en Viena. En el discurso festivo dice que ningún ámbito de la vida humana es demasiado insignificante para ofrecer espacio a las aspiraciones artísticas. «El beso» se muestra allí y el Estado lo adquiere."
    ],
    "fact": "Óleo sobre lienzo con pan de oro, detalle, 1907–1908. Österreichische Galerie Belvedere, Viena.",
    "quote": {
      "text": "…que ningún ámbito de la vida humana es demasiado insignificante o escaso para ofrecer espacio a las aspiraciones artísticas.",
      "cite": "Discurso inaugural de la Kunstschau, Viena, 1 de junio de 1908"
    }
  },
  "kgarden": {
    "text": [
      "Un jardín campesino aparece como una densa alfombra de amapolas, campanillas y follaje, casi sin horizonte. El cuadro nace hacia 1905 a 1907.",
      "Pertenece a los mismos años que las demás piezas de jardín y «El beso». Se encuentra en colección privada."
    ],
    "fact": "Óleo sobre lienzo, hacia 1905–1907. Colección privada."
  },
  "sunfarm": {
    "text": [
      "En un jardín campesino se alzan girasoles entre una vegetación densa, casi sin cielo libre. El cuadro nace hacia 1907.",
      "Cuelga en el Belvedere de Viena. Las piezas de jardín de estos años pertenecen al mismo ámbito que «El beso» y la Kunstschau de 1908."
    ],
    "fact": "Óleo sobre lienzo, hacia 1907. Österreichische Galerie Belvedere, Viena."
  },
  "ksunflower": {
    "text": [
      "Un solo girasol alto se alza en un lecho denso, la mirada cerca de la planta, el horizonte desaparecido. El cuadro nace hacia 1907 a 1908.",
      "Pertenece al Belvedere de Viena. Como en los cuadros de jardín de estos años, la planta se convierte en un patrón ornamental."
    ],
    "fact": "Óleo sobre lienzo, hacia 1907–1908. Österreichische Galerie Belvedere, Viena."
  },
  "kpoppies": {
    "text": [
      "Un campo de amapolas brilla en una densa alfombra de rojo, verde y pequeñas flores, sin horizonte amplio. El cuadro nace en 1907.",
      "Cuelga en el Belvedere de Viena. En el mismo año Klimt termina también el retrato dorado de Adele Bloch-Bauer."
    ],
    "fact": "Óleo sobre lienzo, 1907. Österreichische Galerie Belvedere, Viena."
  },
  "meadow": {
    "text": [
      "Una pradera en flor llena toda la superficie, hierbas y flores apretadas, el cielo apenas visible. El cuadro nace hacia 1908.",
      "Se encuentra en colección privada. También esta pieza de pradera pertenece a los años en torno a la Kunstschau."
    ],
    "fact": "Óleo sobre lienzo, hacia 1908. Colección privada."
  },
  "stocletexp": {
    "text": [
      "Una mujer de pie, con un ropaje ricamente ornamentado, vuelve la cabeza, las manos alzadas. La plantilla se llama «La expectación» y pertenece al friso Stoclet.",
      "Klimt proyecta el friso para el comedor del Palais Stoclet en Bruselas, una casa de Josef Hoffmann y de la Wiener Werkstätte para Adolphe Stoclet. Las plantillas las conserva el MAK en Viena."
    ],
    "fact": "Plantilla para el friso Stoclet, hacia 1905–1911. MAK – Museo de Artes Aplicadas, Viena."
  },
  "stocletembrace": {
    "text": [
      "Una pareja se alza estrechamente abrazada en un manto ornamentado, los rostros juntos. La plantilla se llama «El abrazo» o «Cumplimiento».",
      "Pertenece al friso del comedor del Palais Stoclet en Bruselas. Junto con la «Expectación» y el Árbol de la vida forma el núcleo del ciclo. La plantilla está en el MAK de Viena."
    ],
    "fact": "Plantilla para el friso Stoclet, hacia 1905–1911. MAK – Museo de Artes Aplicadas, Viena."
  },
  "stoclettree": {
    "text": [
      "Un árbol estilizado con ramas enrolladas en espiral llena la superficie, entre las ramas asientos y signos. La plantilla del Árbol de la vida nace entre 1910 y 1911.",
      "Es uno de los nueve cartones para la ejecución del friso Stoclet. El Árbol de la vida une las escenas de la Expectación y del Abrazo. El MAK de Viena conserva los cartones."
    ],
    "fact": "Cartón para el friso Stoclet, 1910–1911. MAK – Museo de Artes Aplicadas, Viena."
  },
  "stocletritter": {
    "text": [
      "Un caballero en armadura ornamentada se alza erguido, escudo y ropaje en formas geométricas claras. La plantilla pertenece a los cartones del friso Stoclet.",
      "Nace entre 1910 y 1911 y está en el MAK de Viena. El friso mismo se instala en el comedor del Palais Stoclet en Bruselas."
    ],
    "fact": "Cartón para el friso Stoclet, 1910–1911. MAK – Museo de Artes Aplicadas, Viena."
  },
  "stocletrose": {
    "text": [
      "Un rosal aparece como un ornamento plano de flores, hojas y zarcillos, sin espacio profundo. La plantilla pertenece a los cartones del friso Stoclet de 1910 a 1911.",
      "Los motivos de jardín y de plantas recorren el friso junto a las escenas figurativas. El MAK de Viena conserva la plantilla."
    ],
    "fact": "Cartón para el friso Stoclet, 1910–1911. MAK – Museo de Artes Aplicadas, Viena."
  },
  "featherboa": {
    "text": [
      "Una mujer con un gran sombrero y una boa de plumas mira de lado hacia fuera del cuadro, el rostro cercano y claro sobre un fondo oscuro. El retrato nace en 1909.",
      "Se encuentra en colección privada. En el mismo año Klimt viaja a España y escribe desde Toledo a Emilie Flöge: «¡El Greco es magnífico!»"
    ],
    "fact": "Óleo sobre lienzo, 1909. Colección privada.",
    "quote": {
      "text": "¡El Greco es magnífico!",
      "cite": "Postal a Emilie Flöge, Toledo, 1909"
    }
  },
  "barbarafloege": {
    "text": [
      "Barbara Flöge, la madre de Emilie Flöge, aparece como una mujer mayor vestida de oscuro, la mirada serena, el fondo sencillo. El retrato nace en 1915.",
      "Desde 1904 Emilie dirige con sus hermanas Helene y Pauline el salón de moda «Schwestern Flöge» en la Casa Piccola de la Mariahilfer Strasse; los espacios los diseñan Josef Hoffmann y Koloman Moser."
    ],
    "fact": "Óleo sobre lienzo, 1915. Colección no determinada."
  },
  "thepark": {
    "text": [
      "Un parque de densas copas llena la superficie hasta el borde, el bosque de troncos se convierte en un tejido ornamental. El cuadro nace en 1910 o antes.",
      "Pertenece al Museum of Modern Art de Nueva York. También en estos años Klimt pasa los veranos con la familia Flöge en el Attersee."
    ],
    "fact": "Óleo sobre lienzo, 1910 o antes. Museum of Modern Art, Nueva York."
  },
  "kammer2": {
    "text": [
      "Schloss Kammer se alza con sus muros claros y tejados rojos en la orilla del lago, el agua y los árboles en colores serenos y planos. El cuadro nace en 1909.",
      "Es la segunda de una serie de vistas del palacio en la orilla norte del Attersee. Se encuentra en colección privada."
    ],
    "fact": "Óleo sobre lienzo, 1909. Colección privada."
  },
  "kammer3": {
    "text": [
      "El palacio aparece de nuevo desde el lago, la fachada y los árboles como claros campos de color, el espejo del agua en calma. El cuadro nace en 1910.",
      "Cuelga en el Belvedere de Viena. Klimt repite el motivo en varias versiones, cada una con un recorte y una luz distintos."
    ],
    "fact": "Óleo sobre lienzo, 1910. Österreichische Galerie Belvedere, Viena."
  },
  "kammer4": {
    "text": [
      "Otra vista del palacio en el Attersee: los edificios entre árboles, el lago en primer término, los colores fuertes y planos. El cuadro nace en 1910.",
      "Se encuentra en colección privada. Junto con las otras versiones muestra con qué constancia Klimt representa la misma orilla."
    ],
    "fact": "Óleo sobre lienzo, 1910. Colección privada."
  },
  "kammerave": {
    "text": [
      "Una alameda de árboles conduce hacia Schloss Kammer, los troncos a izquierda y derecha, al fondo la fachada clara. El cuadro nace en 1912.",
      "Cuelga en el Belvedere de Viena. Esta vez la mirada no parte del lago, sino a través del parque hacia el palacio."
    ],
    "fact": "Óleo sobre lienzo, 1912. Österreichische Galerie Belvedere, Viena."
  },
  "kammerpark": {
    "text": [
      "En el parque de Schloss Kammer los árboles se alzan densos, el suelo claro, el cielo casi cubierto. El cuadro nace en 1910.",
      "Pertenece a la Neue Galerie de Nueva York. Como en «El parque», el follaje se convierte en un tejido ornamental."
    ],
    "fact": "Óleo sobre lienzo, 1910. Neue Galerie, Nueva York."
  },
  "watercastle": {
    "text": [
      "Un palacio claro se alza junto al agua o en ella, rodeado de árboles, el reflejo en calma. El cuadro nace entre 1908 y 1909.",
      "Pertenece a la Galería Nacional de Praga. El motivo está en la misma época que las primeras vistas de Schloss Kammer."
    ],
    "fact": "Óleo sobre lienzo, 1908–1909. Galería Nacional de Praga."
  },
  "oefarm": {
    "text": [
      "Una casa campesina de Alta Austria se alza entre árboles y jardín, los muros claros, el tejado oscuro, el entorno densamente poblado de vegetación. El cuadro nace hacia 1911.",
      "Cuelga en el Belvedere de Viena. Además de las vistas del palacio, Klimt pinta en el Attersee también casas sencillas y jardines."
    ],
    "fact": "Óleo sobre lienzo, hacia 1911. Österreichische Galerie Belvedere, Viena."
  },
  "kapple": {
    "text": [
      "Un manzano llena la superficie con follaje y frutos, el tronco en el centro, el cielo visible solo en huecos. El cuadro nace hacia 1912.",
      "Se encuentra en colección privada. El motivo del árbol único se remonta al manzano dorado de 1903."
    ],
    "fact": "Óleo sobre lienzo, hacia 1912. Colección privada."
  },
  "kapple2": {
    "text": [
      "De nuevo un manzano se alza denso en el cuadro, el follaje más fuerte de color, la forma más suelta que en la versión anterior. El cuadro nace hacia 1916.",
      "También se llama «El manzano». Las piezas tardías de árboles pertenecen a los últimos veranos en el Attersee."
    ],
    "fact": "Óleo sobre lienzo, hacia 1916. Colección no determinada."
  },
  "malcesine": {
    "text": [
      "El pueblo de Malcesine se alza en la orilla escarpada del lago de Garda, casas y cipreses sobre el agua, las montañas detrás. El cuadro nace en 1913, en un viaje al lago.",
      "El original se quema en 1945 en el palacio de Immendorf, en Baja Austria. Se conserva, entre otras cosas, esta fotografía histórica."
    ],
    "fact": "Óleo sobre lienzo, 1913. Fotografía histórica; el original se quemó en 1945 en el palacio de Immendorf."
  },
  "cassone": {
    "text": [
      "La iglesia de Cassone se alza sobre el lago de Garda, las casas del pueblo apretadas en torno a ella, el agua y las laderas en claros campos de color. El cuadro nace en 1913.",
      "Cassone está en la orilla este del lago, no lejos de Malcesine. El cuadro se encuentra en colección privada."
    ],
    "fact": "Óleo sobre lienzo, 1913. Colección privada."
  },
  "italygarden": {
    "text": [
      "Un jardín italiano aparece en densos arbustos, flores y caminos, sin una vista amplia. El cuadro nace en 1913, el año del viaje al lago de Garda.",
      "Pertenece al Kunsthaus Zug. Como las piezas de jardín del Attersee, la vegetación se convierte en una alfombra ornamental."
    ],
    "fact": "Óleo sobre lienzo, 1913. Kunsthaus Zug."
  },
  "unterach": {
    "text": [
      "Las casas de Unterach se alzan densas en la orilla sur, las fachadas claras, los tejados oscuros, el pueblo como un patrón de color. El cuadro nace hacia 1916.",
      "Unterach está frente a Schloss Kammer, en la otra orilla del Attersee. 1916 es el último verano compartido de Klimt con Emilie Flöge en el lago."
    ],
    "fact": "Óleo sobre lienzo, hacia 1916. Colección no determinada."
  },
  "ualslope": {
    "text": [
      "Una ladera boscosa cerca de Unterach se alza en el cuadro, troncos y follaje como un patrón denso, sin una vista amplia del lago. El cuadro nace en 1916.",
      "Se encuentra en colección privada. Las piezas tardías de bosque son más oscuras y sueltas que los primitivos bosques de abedules y de hayas."
    ],
    "fact": "Óleo sobre lienzo, 1916. Colección privada."
  },
  "litzlberg": {
    "text": [
      "Litzlberg aparece como una vista del lugar en el Attersee, casas, árboles y orilla en colores planos. El cuadro nace hacia 1915.",
      "Litzlberg está en el Attersee, no lejos de Seewalchen y Kammer. El cuadro se encuentra en colección privada."
    ],
    "fact": "Óleo sobre lienzo, hacia 1915. Colección privada."
  },
  "litzkeller": {
    "text": [
      "El Litzlbergkeller, una posada en el Attersee, se alza entre árboles en la orilla, la fachada clara, el follaje denso. El cuadro nace entre 1915 y 1916.",
      "Cuelga en el Leopold Museum de Viena. También esta pieza de orilla pertenece a los veranos tardíos en el lago."
    ],
    "fact": "Óleo sobre lienzo, 1915–1916. Leopold Museum, Viena."
  },
  "weissenbach": {
    "text": [
      "Una casa de guarda en Weissenbach se alza entre árboles y pradera, los muros claros, el tejado marcado. El cuadro nace hacia 1914 y también se llama «Casa del guarda en Weissenbach II».",
      "Weissenbach está en el Attersee meridional. Klimt pinta la casa en más de una versión."
    ],
    "fact": "Óleo sobre lienzo, hacia 1914. Colección no determinada."
  },
  "pfarrgarten": {
    "text": [
      "Un jardín parroquial se extiende ante una cumbre, cuadros, caminos y árboles densamente unidos, la colina al fondo. El cuadro nace hacia 1916.",
      "Pertenece a los paisajes de jardín tardíos en los que Klimt mantiene la mirada cerca de los cuadros y de las laderas."
    ],
    "fact": "Óleo sobre lienzo, hacia 1916. Colección no determinada."
  },
  "mada": {
    "text": [
      "La joven Mäda Primavesi se alza con un vestido claro, de patrón floral, las piernas ligeramente abiertas, la mirada firme. El retrato nace hacia 1912 a 1913.",
      "Pertenece al Metropolitan Museum of Art de Nueva York. Mäda es la hija de Otto y Eugenia Primavesi, importantes comitentes de Klimt; la familia también lo recibe en Winkelsdorf."
    ],
    "fact": "Óleo sobre lienzo, hacia 1912–1913. Metropolitan Museum of Art, Nueva York."
  },
  "adele2": {
    "text": [
      "Adele Bloch-Bauer se alza con un vestido colorido y ornamentado ante un fondo igualmente colorido, sin la alfombra de oro del primer retrato. El retrato nace en 1912.",
      "Se encuentra en colección privada. Cinco años después del primer retrato dorado, Klimt muestra a Adele en los colores más vivos de sus retratos posteriores."
    ],
    "fact": "Óleo sobre lienzo, 1912. Colección privada."
  },
  "eugenia": {
    "text": [
      "Eugenia Primavesi está sentada con un vestido de patrón luminoso, el fondo ornamental y colorido. El retrato nace hacia 1913 a 1914.",
      "Pertenece al Museo Municipal de Arte de Toyota. Eugenia y Otto Primavesi se cuentan entre los importantes comitentes de Klimt en estos años."
    ],
    "fact": "Óleo sobre lienzo, hacia 1913–1914. Museo Municipal de Arte de Toyota."
  },
  "fmbeer": {
    "text": [
      "Friederike Maria Beer se alza con un vestido ricamente ornamentado, el fondo lleno de motivos de Asia oriental. El retrato nace en 1916.",
      "Cuelga en el Tel Aviv Museum of Art. En los retratos tardíos Klimt retoma a menudo patrones y figuras de Asia oriental, que también colecciona."
    ],
    "fact": "Óleo sobre lienzo, 1916. Tel Aviv Museum of Art."
  },
  "ladyfan": {
    "text": [
      "Una mujer con abanico aparece ante un fondo de motivos de Asia oriental, entre ellos un ave a la manera de un fénix. El cuadro nace entre 1917 y 1918.",
      "Se encuentra en colección privada. Pertenece a los últimos retratos acabados y muestra cuán fuerte se vuelve el mundo de motivos de Asia oriental en estos años."
    ],
    "fact": "Óleo sobre lienzo, 1917–1918. Colección privada."
  },
  "dancer": {
    "text": [
      "Una bailarina se alza con un ropaje colorido, pintado con soltura, el fondo ornamental, la postura erguida. El cuadro nace hacia 1916 a 1917.",
      "Pertenece a la Neue Galerie de Nueva York. También aquí se mezclan el retrato figurativo y el patrón plano de los años tardíos."
    ],
    "fact": "Óleo sobre lienzo, hacia 1916–1917. Neue Galerie, Nueva York."
  },
  "riamunk3": {
    "text": [
      "Ria Munk aparece con un vestido florido ante un fondo denso y colorido; el retrato de 1917 queda inacabado. Maria («Ria») Munk muere en 1911, aún joven.",
      "Después de su muerte Klimt pinta varios retratos, entre ellos este tardío e inacabado. Se encuentra en colección privada."
    ],
    "fact": "Óleo sobre lienzo, 1917, inacabado. Colección privada."
  },
  "deathfig": {
    "text": [
      "La Muerte se alza como una figura delgada y oscura, con calavera y un patrón de cruces, la mirada dirigida a la otra mitad del cuadro. El recorte muestra solo esta figura de «Muerte y vida».",
      "El cuadro entero nace hacia 1910 y más tarde se reelabora; cuelga en el Leopold Museum de Viena. La otra mitad, con el grupo de los vivos, queda aquí omitida."
    ],
    "fact": "Óleo sobre lienzo, recorte, hacia 1910–1915. Leopold Museum, Viena."
  },
  "riamunkbed": {
    "text": [
      "Ria Munk yace expuesta, el rostro en calma, flores en torno a la almohada y el ropaje. El cuadro nace en 1912, al año siguiente de su muerte.",
      "Se encuentra en colección privada. Más tarde sigue el retrato inacabado «Ria Munk III» de 1917."
    ],
    "fact": "Óleo sobre lienzo, 1912. Colección privada."
  },
  "staude": {
    "text": [
      "Johanna Staude está sentada con una blusa de patrón colorido, la mirada firme, el fondo en parte abierto. El retrato de 1917 a 1918 queda inacabado.",
      "Cuelga en el Belvedere de Viena. Muchos retratos de los últimos meses Klimt los deja inacabados."
    ],
    "fact": "Óleo sobre lienzo, 1917–1918, inacabado. Österreichische Galerie Belvedere, Viena."
  },
  "zuckerkandl": {
    "text": [
      "Amalie Zuckerkandl aparece con un vestido claro, la cabeza y los hombros elaborados, la parte inferior y el fondo aún abiertos. El retrato queda inacabado.",
      "Cuelga en el Belvedere de Viena. Amalie Zuckerkandl pertenecía al círculo vienés en torno a la familia Zuckerkandl, con el que Klimt estaba unido desde hacía tiempo."
    ],
    "fact": "Óleo sobre lienzo, 1917–1918, inacabado. Österreichische Galerie Belvedere, Viena."
  },
  "kbaby": {
    "text": [
      "Un niño yace en una cuna bajo una densa alfombra de mantas y patrones, el rostro pequeño en el oleaje del color. El cuadro nace entre 1917 y 1918.",
      "Pertenece a la National Gallery of Art de Washington. Es uno de los últimos cuadros acabados."
    ],
    "fact": "Óleo sobre lienzo, 1917–1918. National Gallery of Art, Washington."
  },
  "ladyhead": {
    "text": [
      "Una cabeza de mujer en una aplicación suelta del color, el cabello y el rostro acercados al cuadro. El trabajo nace en 1917.",
      "Cuelga en el LENTOS Kunstmuseum de Linz. También en los últimos meses Klimt dibuja y pinta cabezas de forma breve y abierta."
    ],
    "fact": "Óleo sobre lienzo, 1917. LENTOS Kunstmuseum Linz."
  },
  "ladypiacenza": {
    "text": [
      "Una dama con sombrero mira desde el cuadro, el rostro sereno, el fondo en tonos claros y quebrados. El retrato nace en 1917.",
      "Pertenece a la Galleria d’Arte Moderna Ricci Oddi de Piacenza."
    ],
    "fact": "Óleo sobre lienzo, 1917. Galleria d’Arte Moderna Ricci Oddi, Piacenza."
  },
  "ladywhite": {
    "text": [
      "Una mujer con un vestido blanco está sentada vuelta hacia el espectador, gran parte de la superficie permanece abierta. El retrato de los años 1917 a 1918 queda inacabado.",
      "Cuelga en el Belvedere de Viena. El 30 de diciembre de 1917 Klimt escribe desde Winkelsdorf a Emilie Flöge y le desea un «año nuevo de lo más, más feliz – como los dos lo necesitamos con tanta urgencia»."
    ],
    "fact": "Óleo sobre lienzo, hacia 1917–1918, inacabado. Österreichische Galerie Belvedere, Viena.",
    "quote": {
      "text": "…un saludo salido de lo más íntimo y [te] deseo un año nuevo de lo más, más feliz. – como los dos lo necesitamos con tanta urgencia.",
      "cite": "Carta a Emilie Flöge, Winkelsdorf, 30 de diciembre de 1917"
    }
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
