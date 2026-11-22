// v8.4 Spanish content for Ferdinand Hodler’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts. Overwrites P.paths.hodler with whole-path meta.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Colección no determinada",
  "Privatbesitz": "Colección privada",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "Kunstmuseum Bern": "Kunstmuseum Bern",
  "Kunstmuseum Basel": "Kunstmuseum Basel",
  "Kunsthalle Mannheim": "Kunsthalle Mannheim",
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Städel Museum, Frankfurt": "Städel Museum, Fráncfort"
});
  P.works = Object.assign(P.works || {}, {
  "hstprex": {
    "title": "El lago Lemán desde Saint-Prex",
    "museum": "Colección no determinada"
  },
  "hisenfluh": {
    "title": "La Jungfrau desde el Isenfluh",
    "museum": "Colección no determinada"
  },
  "hkiental": {
    "title": "El Kiental con el Blümlisalp",
    "museum": "Colección no determinada"
  },
  "hwald02": {
    "title": "Bosque con un arroyo de montaña",
    "museum": "Colección no determinada"
  },
  "hfromberg": {
    "title": "El Fromberghorn desde Reichenbach",
    "museum": "Colección no determinada"
  },
  "hthunless": {
    "title": "El lago de Thun desde Leissigen",
    "museum": "Colección no determinada"
  },
  "hthunsym04": {
    "title": "Lago de Thun con reflejo simétrico antes del amanecer",
    "museum": "Colección no determinada"
  },
  "hthunstock04": {
    "title": "Lago de Thun con la cadena del Stockhorn",
    "museum": "Colección no determinada"
  },
  "hwaldbach04": {
    "title": "Arroyo del bosque cerca de Leissigen",
    "museum": "Colección no determinada"
  },
  "hthunsym05": {
    "title": "Lago de Thun con reflejo simétrico",
    "museum": "Colección no determinada"
  },
  "hchex04": {
    "title": "El lago Lemán desde Chexbres",
    "museum": "Colección no determinada"
  },
  "chexbres": {
    "title": "El lago Lemán desde Chexbres",
    "museum": "Kunstmuseum Basel"
  },
  "hgrammont05": {
    "title": "El Grammont",
    "museum": "Colección no determinada"
  },
  "hgrammont06": {
    "title": "El Grammont",
    "museum": "Colección no determinada"
  },
  "hsavoyer06": {
    "title": "El lago Lemán con los Alpes de Saboya",
    "museum": "Colección no determinada"
  },
  "hrhythm08": {
    "title": "Paisaje rítmico a orillas del lago Lemán",
    "museum": "Colección no determinada"
  },
  "hlutschine": {
    "title": "La Lütschine Negra",
    "museum": "Colección no determinada"
  },
  "hkirsch05": {
    "title": "Cerezo en flor",
    "museum": "Colección no determinada"
  },
  "htanne05": {
    "title": "Abeto cerca de Chamby",
    "museum": "Colección no determinada"
  },
  "hschnee07": {
    "title": "Nieve en la Engadina",
    "museum": "Colección no determinada"
  },
  "eiger": {
    "title": "El Eiger, el Mönch y la Jungfrau sobre el mar de niebla",
    "museum": "Colección privada"
  },
  "heigermond": {
    "title": "El Eiger, el Mönch y la Jungfrau a la luz de la luna",
    "museum": "Colección no determinada"
  },
  "heigermorgen": {
    "title": "El Eiger, el Mönch y la Jungfrau al sol de la mañana",
    "museum": "Colección no determinada"
  },
  "hjungf08": {
    "title": "La Jungfrau sobre el mar de niebla",
    "museum": "Colección no determinada"
  },
  "habendnebel": {
    "title": "Niebla vespertina en el lago de Thun",
    "museum": "Colección no determinada"
  },
  "hjenastud": {
    "title": "Estudiante que se pone el abrigo",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hjena": {
    "title": "Partida hacia las guerras de liberación",
    "museum": "Städel Museum, Fráncfort"
  },
  "hmaeher": {
    "title": "El segador",
    "museum": "Colección no determinada"
  },
  "hholz": {
    "title": "El leñador",
    "museum": "Colección no determinada"
  },
  "heinamut": {
    "title": "La unanimidad",
    "museum": "Colección no determinada"
  },
  "hthunsym09": {
    "title": "Lago de Thun con reflejo simétrico",
    "museum": "Colección no determinada"
  },
  "hodler": {
    "title": "Lago de Thun con la cadena del Stockhorn",
    "museum": "Kunsthalle Mannheim"
  },
  "niesen": {
    "title": "El Niesen",
    "museum": "Colección privada"
  },
  "hthunniesen": {
    "title": "Lago de Thun con el Niesen",
    "museum": "Colección no determinada"
  },
  "hthunstock11": {
    "title": "Lago de Thun con la cadena del Stockhorn",
    "museum": "Colección no determinada"
  },
  "hthunabend12": {
    "title": "Lago de Thun con la cadena del Stockhorn al atardecer",
    "museum": "Colección no determinada"
  },
  "hwinter13": {
    "title": "La cadena del Stockhorn y el lago de Thun en invierno",
    "museum": "Colección no determinada"
  },
  "hmorhardt": {
    "title": "Retrato de Mathias Morhardt",
    "museum": "Colección no determinada"
  },
  "hgertrud12": {
    "title": "Retrato de Gertrud Müller",
    "museum": "Colección no determinada"
  },
  "hhector12": {
    "title": "Retrato de Hector Hodler",
    "museum": "Kunsthaus Zürich"
  },
  "hself12": {
    "title": "Autorretrato",
    "museum": "Colección no determinada"
  },
  "hselfrosen": {
    "title": "Autorretrato con rosas",
    "museum": "Colección no determinada"
  },
  "hwille": {
    "title": "El general Ulrich Wille",
    "museum": "Kunstmuseum Bern"
  },
  "hself16": {
    "title": "Autorretrato",
    "museum": "Colección no determinada"
  },
  "hselfkittel": {
    "title": "Autorretrato con bata verde",
    "museum": "Colección no determinada"
  },
  "hsonne15": {
    "title": "Puesta de sol en el lago Lemán",
    "museum": "Colección no determinada"
  },
  "hweisshorn15": {
    "title": "El Weisshorn desde Montana",
    "museum": "Colección no determinada"
  },
  "hdents16": {
    "title": "Las Dents du Midi",
    "museum": "Colección no determinada"
  },
  "hblanches16": {
    "title": "Las Dents Blanches cerca de Champéry al sol de la mañana",
    "museum": "Colección no determinada"
  },
  "hbach16": {
    "title": "Arroyo de montaña cerca de Champéry",
    "museum": "Colección no determinada"
  },
  "hcaux17": {
    "title": "El lago Lemán desde Caux",
    "museum": "Colección no determinada"
  },
  "hwolken17": {
    "title": "Paisaje cerca de Caux con nubes que se alzan",
    "museum": "Colección no determinada"
  },
  "hgrammont17": {
    "title": "El Grammont al sol de la mañana",
    "museum": "Colección no determinada"
  },
  "hmbdawn": {
    "title": "El lago Lemán con el Mont Blanc al amanecer",
    "museum": "Colección no determinada"
  },
  "hmbred": {
    "title": "El lago Lemán con el Mont Blanc en el rosicler",
    "museum": "Colección no determinada"
  },
  "hmblight": {
    "title": "El lago Lemán con el Mont Blanc a la luz de la mañana",
    "museum": "Colección no determinada"
  },
  "hmbafternoon": {
    "title": "El lago Lemán con el Mont Blanc por la tarde",
    "museum": "Colección no determinada"
  },
  "hmbbefore": {
    "title": "El lago Lemán con el Mont Blanc antes de la salida del sol",
    "museum": "Colección no determinada"
  },
  "hmbmarch": {
    "title": "El lago Lemán con el Mont Blanc a primera hora de la mañana",
    "museum": "Colección no determinada"
  },
  "hberthe18": {
    "title": "Retrato de Berthe Hodler",
    "museum": "Colección no determinada"
  }
});
  P.paths = P.paths || {};
  P.paths.hodler = {
  "title": "El camino de vida de Ferdinand Hodler",
  "life": "1853–1918",
  "part": "Partes 1–2 · 1853–1918",
  "subtitle": "De Berna a Ginebra, a los lagos y hasta el Mont Blanc",
  "intro": "Viaja con Ferdinand Hodler por toda su vida: desde la infancia en Berna y la pérdida temprana de la familia, pasando por el aprendizaje con Ferdinand Sommer en Thun, la formación con Barthélemy Menn en Ginebra, el viaje a Madrid, el realismo de la década de 1880 y el giro simbolista en torno a «La noche» –que mencionamos solo en la historia de la estación– hasta los paisajes paralelistas del lago de Thun y del lago Lemán, los murales de Jena y Hannover y las últimas miradas desde el Quai du Mont-Blanc. Estaciones breves, cuadros para pintar y una voz de una carta de 1907. Hodler muere en Ginebra el 19 de mayo de 1918.",
  "ending": [
    "En la primavera de 1918, desde el balcón y la ventana de su piso en el Quai du Mont-Blanc 29, Hodler pinta una y otra vez el lago Lemán con el Mont Blanc, a distintas horas del día. La ciudad de Ginebra lo nombra ciudadano de honor.",
    "El 19 de mayo de 1918 muere Ferdinand Hodler en Ginebra, a los sesenta y cinco años, en ese mismo piso. Quedan los paisajes de los lagos y las montañas, los retratos, los murales – y una obra que hizo del paralelismo su principio."
  ],
  "epilogue": "Ferdinand Hodler muere en Ginebra el 19 de mayo de 1918, en su piso del Quai du Mont-Blanc 29. Poco antes había sido nombrado ciudadano de honor de la ciudad. Quedan los paisajes paralelistas del lago de Thun y del lago Lemán, las cumbres sobre el mar de niebla, los murales de Jena y Hannover y las últimas miradas al Mont Blanc."
};
  P.stations = Object.assign(P.stations || {}, {
  "hodlerwien": {
    "place": "Viena y el Oberland bernés · La consagración",
    "when": "1901–1904",
    "mapLabel": "Viena",
    "intro": [
      "En 1902 Hodler instala un estudio en la Rue du Rhône 29 en Ginebra. En 1903 está en Viena y se hace amigo de Gustav Klimt, Koloman Moser y Josef Hoffmann. En 1904 es invitado de honor de la 19.ª Secesión de Viena; con ello llega la consagración internacional.",
      "Al mismo tiempo sigue pintando paisajes: el lago Lemán desde Saint-Prex, la Jungfrau desde el Isenfluh, el Kiental y el Fromberghorn. Las formas se hacen más sobrias, la repetición más clara."
    ]
  },
  "hodlerleissigen": {
    "place": "Leissigen · El lago de Thun",
    "when": "1904–1905",
    "mapLabel": "Leissigen",
    "intro": [
      "En 1904 Hodler trabaja en el lago de Thun, a menudo desde Leissigen. Surgen vistas del lago con la cadena del Stockhorn, reflejos simétricos antes del amanecer y el arroyo del bosque justo delante del pueblo.",
      "El reflejo simétrico se convierte en un núcleo de su paralelismo. En 1905 viaja a Italia y estudia, entre otros, a Giotto; el mismo año pinta de nuevo el lago como un espejo sereno."
    ]
  },
  "hodlerchexbres": {
    "place": "Chexbres y el lago Lemán",
    "when": "1904–1908",
    "mapLabel": "Chexbres",
    "intro": [
      "Desde las alturas sobre Chexbres, Hodler pinta el lago Lemán en anchas franjas paralelas. En 1904 y 1905 surgen versiones de esta vista; se añaden el Grammont en la orilla sur, en 1905 y 1906, y la vista de los Alpes de Saboya.",
      "En 1908, «Paisaje rítmico a orillas del lago Lemán» lleva lejos el paralelismo. En octubre de 1907 Hodler había agradecido a Carl Albert Loosli un artículo que había captado este principio."
    ]
  },
  "hodlerbaeume": {
    "place": "Árboles, arroyos y la Engadina",
    "when": "1905–1907",
    "mapLabel": "Árboles",
    "intro": [
      "Además de las amplias vistas de los lagos, Hodler pinta árboles sueltos y aguas cercanas: la Lütschine Negra, un cerezo en flor, un abeto cerca de Chamby, sobre Montreux.",
      "En 1907 nace «Nieve en la Engadina». Incluso lejos de los grandes lagos, la clara estratificación de primer plano, bosque y cumbre sigue siendo su tema."
    ]
  },
  "hodleroberland": {
    "place": "Oberland bernés · El Eiger, el Mönch y la Jungfrau",
    "when": "1908",
    "mapLabel": "Oberland",
    "intro": [
      "En 1908 Hodler pinta el Eiger, el Mönch y la Jungfrau sobre el mar de niebla, a la luz de la luna y al sol de la mañana, entre otros puntos desde la Schynige Platte. Se añade la niebla vespertina en el lago de Thun.",
      "El mismo año tiene exposiciones en Jena y Fráncfort, es nombrado presidente central de la Sociedad de Pintores, Escultores y Arquitectos Suizos y conoce a Valentine Godé-Darel."
    ]
  },
  "hodlermurale": {
    "place": "Jena y Hannover · El trabajo y los murales",
    "when": "1908–1913",
    "mapLabel": "Jena",
    "intro": [
      "En 1897 Hodler había ganado el concurso para los murales de Marignano en el Landesmuseum de Zúrich. Siguió una viva controversia artística; solo cuando el Consejo Federal aprobó uno de los proyectos pudo continuar la empresa. La última versión data de 1899. En 1908-1909 recibe en Jena el encargo de «La partida de los estudiantes de Jena a la guerra de liberación de 1813».",
      "En 1911, «El segador» y «El leñador» aparecen en billetes suizos. El mismo año recibe el encargo de «La unanimidad» para el Nuevo Ayuntamiento de Hannover, terminado en 1913. En 1909 muere Augustine Dupin. En 1910 Hodler instala un segundo estudio en los Acacias y recibe el doctorado honoris causa de la Universidad de Basilea."
    ]
  },
  "hodlerthun": {
    "place": "Lago de Thun · Stockhorn y Niesen",
    "when": "1909–1913",
    "mapLabel": "Thun",
    "intro": [
      "En el verano de 1910 Hodler trabaja en el lago de Thun en series del Stockhorn y del Niesen. El reflejo simétrico de 1909, la versión de Mannheim de la cadena del Stockhorn y el Niesen desde Heustrich bajo la lluvia pertenecen a estos años.",
      "Retiene el mismo motivo en la luz de noviembre, al atardecer y en invierno. La repetición no es un recurso, sino el principio."
    ]
  },
  "hodlerbildnisse": {
    "place": "Ginebra · Retratos y familia",
    "when": "1911–1917",
    "mapLabel": "Retratos",
    "intro": [
      "Además de los paisajes, en estos años nacen muchos retratos: el crítico Mathias Morhardt, la coleccionista Gertrud Müller, el hijo Hector, autorretratos, en 1916 el general Ulrich Wille. En 1913 nace la hija Pauline-Valentine, de la relación con Valentine Godé-Darel. En el otoño del mismo año Hodler está en el Salon d’Automne de París, conoce a Auguste Rodin y es nombrado oficial de la Legión de Honor. La familia se muda al Quai du Mont-Blanc 29; el piso recibe muebles de Josef Hoffmann.",
      "En 1914 Hodler firma la protesta contra el bombardeo de la catedral de Reims; las asociaciones de artistas alemanas lo excluyen entonces. El 25 de enero de 1915 muere Valentine Godé-Darel en Vevey. En 1916 y 1917 Hodler imparte una clase de pintura en la École des Beaux-Arts de Ginebra. En 1917 el Kunsthaus Zürich le dedica una gran retrospectiva; el mismo año sufre un edema pulmonar."
    ]
  },
  "hodlerchampery": {
    "place": "Champéry, Montana y Caux",
    "when": "1915–1917",
    "mapLabel": "Caux",
    "intro": [
      "En 1915 Hodler pinta una puesta de sol en el lago Lemán y el Weisshorn desde Montana. En 1916 y 1917 se aloja en Champéry y Montana, donde su hijo Hector se recupera de una tuberculosis. Surgen las Dents du Midi, las Dents Blanches, un arroyo de montaña cerca de Champéry.",
      "En 1917 mira el lago Lemán desde Caux, sobre Montreux, pinta nubes que se alzan y vuelve al Grammont al sol de la mañana."
    ]
  },
  "hodlermontblanc": {
    "place": "Ginebra · Quai du Mont-Blanc",
    "when": "1918",
    "mapLabel": "1918",
    "intro": [
      "En la primavera de 1918, desde la ventana y el balcón de su piso en el Quai du Mont-Blanc 29, Hodler pinta el lago Lemán con el Mont Blanc, al amanecer, en el rosicler, a la luz de la mañana, por la tarde, antes de la salida del sol. La ciudad de Ginebra lo nombra ciudadano de honor.",
      "Nace también un retrato de su mujer Berthe. El 19 de mayo de 1918 muere Ferdinand Hodler en Ginebra, en ese mismo piso, a los sesenta y cinco años."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hstprex": {
    "text": [
      "Desde Saint-Prex, el lago Lemán se extiende en franjas horizontales serenas, las montañas del lado saboyano como una silueta nítida.",
      "El cuadro data de 1901, un año después de la medalla de oro en París. Hodler busca el paisaje en unas pocas líneas repetidas."
    ],
    "fact": "1901. Colección no determinada."
  },
  "hisenfluh": {
    "text": [
      "Desde el Isenfluh, la Jungfrau se alza firme sobre las alturas que la preceden, el cielo claro y amplio.",
      "En 1902 Hodler instala un estudio en la Rue du Rhône 29 en Ginebra. Al mismo tiempo vuelve una y otra vez al Oberland bernés."
    ],
    "fact": "1902. Colección no determinada."
  },
  "hkiental": {
    "text": [
      "El Kiental se abre hacia abajo; encima, el Blümlisalp se extiende en formas serenas y escalonadas.",
      "El cuadro está fechado en 1902. Hodler simplifica el valle, la ladera y la cumbre hasta que la repetición de las líneas se convierte ella misma en el motivo."
    ],
    "fact": "1902. Colección no determinada."
  },
  "hwald02": {
    "text": [
      "Un arroyo fluye entre troncos y piedras; la luz cae en franjas dentro del bosque.",
      "Aun después de 1900, el arroyo de montaña sigue siendo un motivo. Hodler observa el fluir y los troncos verticales unos junto a otros."
    ],
    "fact": "1902. Colección no determinada."
  },
  "hfromberg": {
    "text": [
      "El Fromberghorn se alza como una forma nítida, casi triangular, sobre el valle de Reichenbach.",
      "El cuadro data de 1903. El mismo año Hodler está en Viena y se hace amigo de Gustav Klimt, Koloman Moser y Josef Hoffmann."
    ],
    "fact": "1903. Colección no determinada."
  },
  "hthunless": {
    "text": [
      "Desde Leissigen, el lago de Thun se extiende en calma, las montañas detrás en una cadena serena.",
      "En 1904 Hodler es invitado de honor de la 19.ª Secesión de Viena; la consagración internacional ya está ahí. El mismo año trabaja en el lago de Thun, a menudo desde Leissigen."
    ],
    "fact": "1904. Colección no determinada."
  },
  "hthunsym04": {
    "text": [
      "Antes del amanecer, la cadena montañosa se refleja casi exactamente en el lago; el cielo y el agua dividen el cuadro en franjas serenas.",
      "El reflejo simétrico es un núcleo del paralelismo de Hodler: el paisaje se convierte en un orden de líneas repetidas."
    ],
    "fact": "1904. Colección no determinada."
  },
  "hthunstock04": {
    "text": [
      "La cadena del Stockhorn se extiende sobre el lago luminoso; en primer plano, piedras y una orilla baja.",
      "Hodler pinta este motivo durante décadas, en versiones cada vez más claras. En 1904 nace una de las primeras variantes construidas con rigor."
    ],
    "fact": "1904. Colección no determinada."
  },
  "hwaldbach04": {
    "text": [
      "Un arroyo baja entre piedras musgosas y troncos, el agua clara, el bosque denso.",
      "Además de las amplias vistas del lago, en 1904 Hodler retiene también el arroyo del bosque cercano, en Leissigen."
    ],
    "fact": "1904. Colección no determinada."
  },
  "hthunsym05": {
    "text": [
      "De nuevo el lago se extiende como un espejo: las montañas arriba, su repetición abajo, en una simetría serena.",
      "El cuadro está fechado en 1905. El mismo año Hodler viaja a Italia y estudia, entre otros, a Giotto."
    ],
    "fact": "1905. Colección no determinada."
  },
  "hchex04": {
    "text": [
      "Desde las alturas sobre Chexbres, el lago Lemán se extiende en anchas franjas de color, las montañas de enfrente como una cadena serena.",
      "Chexbres, sobre el lago, se convierte para Hodler en un punto de vista recurrente. En 1904 nace una versión temprana de esta mirada."
    ],
    "fact": "1904. Colección no determinada."
  },
  "chexbres": {
    "text": [
      "El lago, la orilla y el cielo se extienden en franjas paralelas serenas: turquesa, violeta, un cielo claro.",
      "La versión de 1905 se conserva en el Kunstmuseum Basel. Hodler reduce el paisaje a grandes franjas nítidas."
    ],
    "fact": "1905. Kunstmuseum Basel."
  },
  "hgrammont05": {
    "text": [
      "El Grammont se alza como una forma ancha y nítida sobre el lago Lemán, la ladera en unos pocos campos de color.",
      "Hodler pinta varias veces la montaña en la orilla sur del lago. La versión de 1905 lo muestra firme y simplificado."
    ],
    "fact": "1905. Colección no determinada."
  },
  "hgrammont06": {
    "text": [
      "Un año después, el Grammont se alza de nuevo sobre el lago, la forma aún más determinada, el lago como una superficie serena.",
      "Repetir la misma montaña en momentos distintos forma parte del método de Hodler: el mismo motivo, un orden nuevo."
    ],
    "fact": "1906. Colección no determinada."
  },
  "hsavoyer06": {
    "text": [
      "El lago se extiende a lo ancho del cuadro; enfrente, los Alpes de Saboya en una cadena serena y dentada.",
      "Esta vista sobre el lago Lemán data de hacia 1906. La ladera francesa de enfrente se convierte en una silueta nítida."
    ],
    "fact": "Hacia 1906. Colección no determinada."
  },
  "hrhythm08": {
    "text": [
      "La orilla, el agua y las montañas ondulan en líneas repetidas y rítmicas a través de la superficie, casi sin detalles.",
      "El cuadro de 1908 lleva lejos el paralelismo: el paisaje se convierte en un ritmo. El año anterior, Hodler agradece a Carl Albert Loosli un artículo que había captado precisamente este principio."
    ],
    "fact": "1908. Colección no determinada.",
    "quote": {
      "text": "Por fin le devuelvo su artículo, su obra maestra. Es del todo excelente, bien pensado y bien escrito. En pocas palabras se ha expresado usted de un modo muy acertado acerca del paralelismo. Creo que por fin alguien me ha comprendido.",
      "cite": "Carta a C. A. Loosli, 10 de octubre de 1907. Musée d’art et d’histoire, Neuchâtel."
    }
  },
  "hlutschine": {
    "text": [
      "La Lütschine Negra fluye entre rocas y bosque, el agua clara sobre el lecho oscuro.",
      "El río viene del Oberland, cerca de Grindelwald y Zweilütschinen. En 1905 Hodler retiene su curso en movimientos claros y repetidos."
    ],
    "fact": "1905. Colección no determinada."
  },
  "hkirsch05": {
    "text": [
      "Un cerezo se alza en plena floración, la copa clara, el tronco firme y solitario.",
      "Para Hodler, los árboles sueltos son casi como figuras. El cerezo en flor de 1905 pertenece a la misma serie que los castaños anteriores."
    ],
    "fact": "1905. Colección no determinada."
  },
  "htanne05": {
    "text": [
      "Un abeto solitario se alza sobre un fondo claro, las ramas nítidamente dispuestas, el tronco recto.",
      "Chamby está sobre Montreux, no lejos del lago Lemán. Hodler aísla el árbol hasta que actúa como un signo."
    ],
    "fact": "1905. Colección no determinada."
  },
  "hschnee07": {
    "text": [
      "Una meseta invernal en la Engadina: nieve, bosques oscuros y, encima, una cadena montañosa serena.",
      "El cuadro está fechado en 1907. Incluso lejos de los grandes lagos, Hodler busca la clara estratificación de primer plano, bosque y cumbre."
    ],
    "fact": "1907. Colección no determinada."
  },
  "eiger": {
    "text": [
      "De un mar de nubes se alzan el Eiger, el Mönch y la Jungfrau, como formas nítidas y rítmicas.",
      "La versión de 1908 cuenta entre los cuadros alpinos más conocidos de Hodler. El motivo recuerda al «Caminante sobre el mar de niebla» de Friedrich, pero prescinde de una figura en primer plano."
    ],
    "fact": "1908. Colección privada."
  },
  "heigermond": {
    "text": [
      "El mismo grupo de tres se alza a la luz de la luna, las cumbres pálidas, el cielo hondo y en calma.",
      "En 1908 Hodler pinta el grupo de la Jungfrau a distintas horas del día y de la noche, entre otros puntos desde la Schynige Platte."
    ],
    "fact": "1908. Colección no determinada."
  },
  "heigermorgen": {
    "text": [
      "Al sol de la mañana brillan las tres cumbres, las laderas claramente despegadas unas de otras.",
      "La serie de 1908 muestra cómo Hodler transforma un motivo con la luz y la hora, sin abandonar la forma fundamental."
    ],
    "fact": "1908. Colección no determinada."
  },
  "hjungf08": {
    "text": [
      "La Jungfrau sola se alza sobre la niebla, una forma firme y clara sobre la suave cubierta de nubes.",
      "Además del grupo de tres, en 1908 Hodler aísla también la cumbre única. La simplificación llega aún más lejos."
    ],
    "fact": "1908. Colección no determinada."
  },
  "habendnebel": {
    "text": [
      "Por la tarde, la niebla se extiende sobre el lago de Thun; las montañas detrás ya solo son sombras serenas.",
      "En 1908, el propio lago se convierte también en un cuadro de niebla. La luz y el vaho aflojan los contornos; el orden permanece."
    ],
    "fact": "1908. Colección no determinada."
  },
  "hjenastud": {
    "text": [
      "Un joven se pone el abrigo, firme en el movimiento; al fondo, una fila de pequeñas figuras en el horizonte.",
      "La litografía de 1908 pertenece al círculo del mural de Jena. Hodler estudia gestos sueltos antes de que nazca la gran composición. La hoja se conserva en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1908. Rijksmuseum, Amsterdam."
  },
  "hjena": {
    "text": [
      "Soldados a caballo y a pie, caballos, una mujer con un niño: un estudio del movimiento de una tropa que parte.",
      "En 1908-1909 nace en Jena el mural «La partida de los estudiantes de Jena a la guerra de liberación de 1813». Este dibujo del Städel Museum de Fráncfort retiene la composición."
    ],
    "fact": "1908. Städel Museum, Fráncfort."
  },
  "hmaeher": {
    "text": [
      "Un segador se yergue con la guadaña en un movimiento ampliamente desplegado, el cuerpo nítidamente perfilado, el gesto repetido y firme.",
      "En 1911, motivos según «El segador» y «El leñador» aparecen en billetes suizos. Así las figuras se hacen conocidas de un público amplio."
    ],
    "fact": "1910. Colección no determinada."
  },
  "hholz": {
    "text": [
      "Un leñador alza el hacha, las piernas firmemente abiertas, el golpe como un gran movimiento nítido.",
      "Como el segador, el leñador pertenece a las figuras del trabajo en Hodler. En 1910 nacen estas versiones austeras, casi de cartel."
    ],
    "fact": "1910. Colección no determinada."
  },
  "heinamut": {
    "text": [
      "Un grupo denso de hombres alza los brazos; en el centro, una figura se yergue sobre un pedestal con los brazos abiertos.",
      "En 1911 Hodler recibe el encargo del mural «La unanimidad» para el Nuevo Ayuntamiento de Hannover; se termina en 1913. El boceto muestra el gesto reunido del asentimiento."
    ],
    "fact": "Hacia 1913. Colección no determinada."
  },
  "hthunsym09": {
    "text": [
      "El lago refleja una vez más las montañas, casi según un eje, en un orden sereno y construido.",
      "La versión de 1909 continúa el motivo del reflejo simétrico que Hodler persigue en el lago de Thun desde 1904."
    ],
    "fact": "1909. Colección no determinada."
  },
  "hodler": {
    "text": [
      "La cadena del Stockhorn se extiende con claridad sobre el lago; sus formas se repiten casi simétricamente en el agua.",
      "La versión de 1910 se conserva en la Kunsthalle Mannheim. En el verano de ese año Hodler trabaja en el lago de Thun en series del Stockhorn y del Niesen."
    ],
    "fact": "1910. Kunsthalle Mannheim."
  },
  "niesen": {
    "text": [
      "El Niesen se alza como una pirámide oscura, casi triangular, detrás del lago y el aire de lluvia.",
      "La versión de 1910 está pintada desde Heustrich, bajo la lluvia. Por eso la montaña parece más blanda que en las versiones soleadas."
    ],
    "fact": "1910. Colección privada."
  },
  "hthunniesen": {
    "text": [
      "Sobre el amplio lago, el Niesen se alza como una forma oscura y nítida, el cielo claro, el agua en calma.",
      "Además de la pirámide aislada de la montaña, en 1910 Hodler pinta también el Niesen como parte de todo el paisaje del lago."
    ],
    "fact": "1910. Colección no determinada."
  },
  "hthunstock11": {
    "text": [
      "En la luz de noviembre, la cadena del Stockhorn se extiende sobre el lago, las formas firmes, los colores más fríos.",
      "El cuadro está fechado en noviembre de 1910. En 1910 Hodler instala un segundo estudio en los Acacias, en Ginebra, y recibe el doctorado honoris causa de la Universidad de Basilea."
    ],
    "fact": "1910. Colección no determinada."
  },
  "hthunabend12": {
    "text": [
      "Al atardecer, el lago y las montañas se oscurecen; la cadena del Stockhorn sigue visible como una silueta serena.",
      "Esta versión vespertina data de hacia 1912. Hodler retiene el mismo motivo a otra hora."
    ],
    "fact": "Hacia 1912. Colección no determinada."
  },
  "hwinter13": {
    "text": [
      "En invierno, la nieve cubre las laderas y la orilla; la cadena del Stockhorn se alza, desnuda y clara, sobre el lago.",
      "El cuadro está fechado en 1913. También la estación fría pertenece a la larga serie de cuadros del lago de Thun."
    ],
    "fact": "1913. Colección no determinada."
  },
  "hmorhardt": {
    "text": [
      "Mathias Morhardt está sentado o de pie con un traje oscuro, el rostro firmemente modelado, la mirada serena.",
      "Morhardt, escritor y crítico, apoyó pronto a Hodler en París. El retrato data de 1911."
    ],
    "fact": "1911. Colección no determinada."
  },
  "hgertrud12": {
    "text": [
      "Gertrud Müller nos mira con franqueza, con un vestido claro, el fondo sencillo.",
      "La coleccionista de Soleura cuenta entre las importantes comitentes de Hodler. El retrato data de hacia 1912."
    ],
    "fact": "Hacia 1912. Colección no determinada."
  },
  "hhector12": {
    "text": [
      "Hector, el hijo de Hodler, aparece como un joven, la mirada firme, el rostro acercado a nosotros.",
      "Hector nació en 1887, hijo de Hodler y de Augustine Dupin. El retrato de hacia 1912 se conserva en el Kunsthaus Zürich."
    ],
    "fact": "Hacia 1912. Kunsthaus Zürich."
  },
  "hself12": {
    "text": [
      "Hodler se muestra a sí mismo: la barba, una mirada abierta, un cuello blanco bajo el traje oscuro, muy cerca.",
      "El autorretrato de 1912 pertenece a una larga serie en la que retiene una y otra vez su propia apariencia."
    ],
    "fact": "1912. Colección no determinada."
  },
  "hselfrosen": {
    "text": [
      "Hodler se yergue ante nosotros, rosas detrás o a su lado, la mirada seria, la actitud erguida.",
      "El cuadro data de 1914. El mismo año Hodler firma la protesta contra el bombardeo de la catedral de Reims; las asociaciones de artistas alemanas lo excluyen entonces."
    ],
    "fact": "1914. Colección no determinada."
  },
  "hwille": {
    "text": [
      "El general Ulrich Wille está sentado de uniforme, la mirada firme, la actitud de un hombre en el cargo.",
      "Durante la Primera Guerra Mundial, Wille es el comandante en jefe del ejército suizo. El retrato de 1916 se conserva en el Kunstmuseum Bern."
    ],
    "fact": "1916. Kunstmuseum Bern."
  },
  "hself16": {
    "text": [
      "De nuevo Hodler se muestra a sí mismo, el rostro más cerca, los rasgos más marcados, la mirada fija.",
      "El autorretrato de 1916 nace en los años de guerra, en los que enseña en Ginebra y busca refugio en las montañas."
    ],
    "fact": "1916. Colección no determinada."
  },
  "hselfkittel": {
    "text": [
      "Hodler lleva una bata de pintor verde, el rostro cerca, la mirada despierta y seria.",
      "El retrato de 1917 lo muestra en el trabajo. El mismo año el Kunsthaus Zürich le dedica una gran retrospectiva; sufre un edema pulmonar."
    ],
    "fact": "1917. Colección no determinada."
  },
  "hsonne15": {
    "text": [
      "Por la tarde, el sol está bajo sobre el lago Lemán, el agua y el cielo en franjas horizontales cálidas.",
      "El cuadro data de 1915. El 25 de enero de ese año muere Valentine Godé-Darel en Vevey."
    ],
    "fact": "1915. Colección no determinada."
  },
  "hweisshorn15": {
    "text": [
      "Desde Montana, el Weisshorn se alza como una forma clara y firme sobre el valle, las laderas nítidamente articuladas.",
      "En 1915 y los años siguientes, Hodler se aloja en Montana y Champéry. Desde allí pinta las cumbres valesanas."
    ],
    "fact": "1915. Colección no determinada."
  },
  "hdents16": {
    "text": [
      "Las Dents du Midi se alzan como una cadena dentada, los picos repetidos rítmicamente, el cielo claro.",
      "En 1916 y 1917 Hodler se aloja en Champéry y Montana, donde su hijo Hector se recupera de una tuberculosis."
    ],
    "fact": "1916. Colección no determinada."
  },
  "hblanches16": {
    "text": [
      "Al sol de la mañana brillan las Dents Blanches cerca de Champéry, las laderas en planos cálidos y fríos.",
      "El cuadro está fechado en 1916. En estos años, las montañas en torno a Champéry se convierten en un motivo nuevo y firme."
    ],
    "fact": "1916. Colección no determinada."
  },
  "hbach16": {
    "text": [
      "Un arroyo de montaña baja entre piedras y laderas, el agua clara, el movimiento nítido y repetido.",
      "Además de las cumbres, en 1916 Hodler pinta también el arroyo cercano en Champéry, como antes los arroyos del Oberland."
    ],
    "fact": "1916. Colección no determinada."
  },
  "hcaux17": {
    "text": [
      "Desde Caux, sobre Montreux, el lago Lemán se extiende hondo y amplio, las montañas de enfrente en una línea serena.",
      "El cuadro data de 1917. El punto de vista alto sobre el lago vuelve a dar a Hodler las anchas franjas paralelas del agua y el cielo."
    ],
    "fact": "1917. Colección no determinada."
  },
  "hwolken17": {
    "text": [
      "Sobre el paisaje cerca de Caux se alzan nubes; el cielo está agitado, las laderas firmes debajo.",
      "En 1917, Caux sigue siendo un punto de vista. Hodler retiene no solo el lago sereno, sino también el cielo en movimiento."
    ],
    "fact": "1917. Colección no determinada."
  },
  "hgrammont17": {
    "text": [
      "Al sol de la mañana, el Grammont brilla sobre el lago, las laderas en amarillo cálido y violeta frío, el lago como un espejo nítido.",
      "Más de diez años después de los primeros cuadros del Grammont, en 1917 Hodler vuelve a esta montaña, ahora al sol de la mañana."
    ],
    "fact": "1917. Colección no determinada."
  },
  "hmbdawn": {
    "text": [
      "Al amanecer, el Mont Blanc se extiende sobre el lago Lemán, las formas suaves, la luz aún pálida.",
      "En 1918 Hodler pinta una y otra vez la vista desde su piso del Quai du Mont-Blanc 29, a distintas horas del día."
    ],
    "fact": "1918. Colección no determinada."
  },
  "hmbred": {
    "text": [
      "En el rosicler, el lago y el cielo se colorean; el Mont Blanc se alza como una forma serena y lejana sobre el agua.",
      "La serie nace desde la ventana y el balcón. En 1918, Ginebra nombra a Hodler ciudadano de honor."
    ],
    "fact": "1918. Colección no determinada."
  },
  "hmblight": {
    "text": [
      "A la luz de la mañana, el lago se hace más nítido, el Mont Blanc más firme, las franjas horizontales más distintas.",
      "Hodler apenas cambia el encuadre, solo la luz. La repetición de la misma vista es ella misma el tema."
    ],
    "fact": "1918. Colección no determinada."
  },
  "hmbafternoon": {
    "text": [
      "Por la tarde, otra luz se extiende sobre el lago y las montañas, los colores más cálidos, la vista lejana más amplia.",
      "También esta hora del día pertenece a la última serie. Hodler observa la misma mirada hasta que la hora la transforma."
    ],
    "fact": "1918. Colección no determinada."
  },
  "hmbbefore": {
    "text": [
      "Antes de la salida del sol, el lago y el cielo aún están fríos, el Mont Blanc una masa pálida y serena en el horizonte.",
      "La hora anterior a la salida es de las más serenas de la serie. Un poco más tarde, el 19 de mayo de 1918, Hodler muere en ese mismo piso."
    ],
    "fact": "1918. Colección no determinada."
  },
  "hmbmarch": {
    "text": [
      "A primera hora de la mañana, en marzo, el Mont Blanc se extiende sobre el lago, el aire claro, las líneas serenas.",
      "El cuadro está fechado en marzo de 1918, dos meses antes de la muerte de Hodler. La serie continúa hasta sus últimas semanas."
    ],
    "fact": "Marzo de 1918. Colección no determinada."
  },
  "hberthe18": {
    "text": [
      "Berthe Hodler, de soltera Jacques, aparece en un retrato sencillo, el rostro sereno y cercano.",
      "Hodler la conoció en 1894 y se casó con ella en 1898. El retrato data de 1918, el último año de su vida."
    ],
    "fact": "1918. Colección no determinada."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
