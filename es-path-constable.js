// v10.43 ES content for John Constable’s life journey (1776–1837). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "The National Gallery, London": "The National Gallery, Londres"
});
  P.works = Object.assign(P.works || {}, {
  "cnepsom": {
    "title": "El brezal de Epsom",
    "museum": "National Gallery of Art, Washington"
  },
  "cncottages": {
    "title": "Paisaje con casitas",
    "museum": "Art Institute of Chicago"
  },
  "cnstoke": {
    "title": "Stoke-by-Nayland",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cnwivenhoe": {
    "title": "Wivenhoe Park, Essex",
    "museum": "National Gallery of Art, Washington"
  },
  "cnpulham": {
    "title": "La señora James Pulham",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cnwhitehorse": {
    "title": "El caballo blanco",
    "museum": "National Gallery of Art, Washington"
  },
  "cnsalisbury": {
    "title": "La catedral de Salisbury desde Lower Marsh Close",
    "museum": "National Gallery of Art, Washington"
  },
  "haywain": {
    "title": "La carreta de heno",
    "museum": "The National Gallery, Londres"
  },
  "cnclouds": {
    "title": "Estudio de nubes: puesta de sol tormentosa",
    "museum": "National Gallery of Art, Washington"
  },
  "cnyarmouth": {
    "title": "El muelle de Yarmouth",
    "museum": "National Gallery of Art, Washington"
  },
  "cnlock": {
    "title": "Paisaje (La esclusa)",
    "museum": "Art Institute of Chicago"
  },
  "cnbishop": {
    "title": "La catedral de Salisbury desde los jardines del obispo",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cnbranchhill": {
    "title": "El estanque de Branch Hill, Hampstead",
    "museum": "Museo de Arte de Cleveland"
  },
  "cncloudwc": {
    "title": "Estudio de nubes",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cnmill": {
    "title": "Molino cerca de Colchester",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cnstoke36": {
    "title": "Stoke-by-Nayland",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.constable = {
  "title": "El camino de vida de John Constable",
  "part": "Suffolk, Salisbury y Hampstead",
  "subtitle": "Cielos, nubes y ríos",
  "intro": "Viaja por la vida de John Constable: de los campos y molinos de su Suffolk natal y la catedral de Salisbury a las nubes sobre Hampstead. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "John Constable muere en Londres el 31 de marzo de 1837.",
    "Sus cielos y paisajes frescos entusiasman más tarde a los pintores franceses, de Delacroix a los impresionistas."
  ],
  "epilogue": "John Constable muere en Londres el 31 de marzo de 1837. El camino lleva de los campos de Suffolk, pasando por Salisbury, a las nubes sobre Hampstead.",
  "life": "1776–1837"
};
  P.stations = Object.assign(P.stations || {}, {
  "cns1": {
    "place": "Suffolk: hogar y años de aprendizaje",
    "when": "1776–1811",
    "mapLabel": "East Bergholt",
    "intro": [
      "John Constable nace el 11 de junio de 1776 en East Bergholt, en Suffolk; su padre tiene molinos junto al río Stour.",
      "Desde 1799 estudia en la escuela de la Royal Academy de Londres, pero lo que más le gusta es pintar los campos y pueblos de su tierra."
    ]
  },
  "cns2": {
    "place": "Boda y grandes cuadros",
    "when": "1816–1819",
    "mapLabel": "Essex",
    "intro": [
      "En 1816, tras una larga espera, Constable se casa con Maria Bicknell y se instala con ella en Londres.",
      "Pinta ahora grandes lienzos de casi dos metros de ancho y en 1819 es elegido miembro asociado de la Royal Academy."
    ]
  },
  "constable1": {
    "place": "Salisbury, la carreta de heno y las nubes",
    "when": "1820–1825",
    "mapLabel": "Salisbury",
    "intro": [
      "Constable visita a menudo a su amigo John Fisher en Salisbury y pinta la catedral; en Hampstead pinta estudios de nubes.",
      "En 1824 «La carreta de heno» se expone en París y recibe una medalla de oro."
    ]
  },
  "cns4": {
    "place": "Hampstead y últimos años",
    "when": "1826–1837",
    "mapLabel": "Hampstead",
    "intro": [
      "Constable vive con sus siete hijos en Hampstead, a las afueras de Londres, y pinta el amplio brezal y el cielo.",
      "En 1829 se convierte en miembro de pleno derecho de la Royal Academy; sus últimos cuadros son cada vez más tempestuosos y libres."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cnepsom": {
    "text": [
      "Suaves colinas se extienden hasta el horizonte bajo un cielo amplio.",
      "El joven Constable pinta la pequeña hoja con unos pocos tonos marrones, grises y verdes."
    ],
    "fact": "1806. National Gallery of Art, Washington."
  },
  "cncottages": {
    "text": [
      "Detrás de árboles oscuros brillan los tejados rojos de unas casitas a la luz de la tarde.",
      "Delante un camino claro cruza un prado verde."
    ],
    "fact": "1809–1810. Art Institute of Chicago."
  },
  "cnstoke": {
    "text": [
      "Detrás de grandes árboles se alza la torre de la iglesia del pueblo de Stoke-by-Nayland hacia el cielo nublado.",
      "El pueblo está a pocos kilómetros del lugar de nacimiento de Constable."
    ],
    "fact": "hacia 1810–1811. Metropolitan Museum of Art, Nueva York."
  },
  "cnwivenhoe": {
    "text": [
      "Unas vacas pastan a orillas de un lago, y detrás hay una casa de campo entre árboles verdes.",
      "Constable pinta el parque por encargo del propietario y añade tiras al lienzo para que todo quepa."
    ],
    "fact": "1816. National Gallery of Art, Washington."
  },
  "cnpulham": {
    "text": [
      "Una mujer con sombrero oscuro y un amplio cuello blanco mira amablemente desde el cuadro.",
      "Es la esposa de un amigo de Constable de Woodbridge, en Suffolk."
    ],
    "fact": "1818. Metropolitan Museum of Art, Nueva York."
  },
  "cnwhitehorse": {
    "text": [
      "Un caballo blanco cruza el río Stour en una barcaza, y en la orilla hay árboles y una granja.",
      "Constable pinta esta versión a tamaño real para preparar el gran cuadro."
    ],
    "fact": "1818–1819. National Gallery of Art, Washington."
  },
  "cnsalisbury": {
    "text": [
      "Detrás de un prado verde se alza hacia el cielo la esbelta aguja de la catedral de Salisbury.",
      "A la izquierda unos árboles altos proyectan una sombra oscura."
    ],
    "fact": "1820. National Gallery of Art, Washington."
  },
  "haywain": {
    "text": [
      "Una carreta de heno atraviesa el río Stour en Flatford, en Suffolk, muy cerca del molino del padre de Constable.",
      "A la izquierda hay una casa que todavía existe hoy."
    ],
    "fact": "1821. The National Gallery, Londres."
  },
  "cnclouds": {
    "text": [
      "Nubes grises y rosas cruzan un cielo claro de atardecer.",
      "En Hampstead Constable pinta muchos cielos así y a menudo anota el día, la hora y el viento."
    ],
    "fact": "1821–1822. National Gallery of Art, Washington."
  },
  "cnyarmouth": {
    "text": [
      "Un largo muelle de madera se adentra en el mar verde de Yarmouth, y en el horizonte navegan barcos.",
      "Sobre la playa se amontonan grandes nubes blancas y rosas."
    ],
    "fact": "1822. National Gallery of Art, Washington."
  },
  "cnlock": {
    "text": [
      "Bajo un gran árbol claro, un hombre vestido de rojo está sentado junto a una esclusa de madera.",
      "Constable conoce desde niño las esclusas y las barcazas del río Stour."
    ],
    "fact": "hacia 1820–1825. Art Institute of Chicago."
  },
  "cnbishop": {
    "text": [
      "Dos árboles altos enmarcan la catedral clara como un arco, y delante pastan unas vacas.",
      "El obispo de Salisbury, tío de John Fisher, amigo de Constable, encarga un cuadro así."
    ],
    "fact": "hacia 1825. Metropolitan Museum of Art, Nueva York."
  },
  "cnbranchhill": {
    "text": [
      "Sobre el amplio brezal de Hampstead se acercan oscuras nubes de lluvia, y abajo brilla un pequeño estanque.",
      "A la derecha hay una colina arenosa donde pastan animales diminutos."
    ],
    "fact": "1828. Museo de Arte de Cleveland."
  },
  "cncloudwc": {
    "text": [
      "Franjas de nubes gris azuladas pasan sobre un horizonte llano.",
      "Constable pinta la hoja con acuarela, rápido, antes de que cambien las nubes."
    ],
    "fact": "1830–1835. Metropolitan Museum of Art, Nueva York."
  },
  "cnmill": {
    "text": [
      "Un molino de viento de madera con grandes aspas se alza bajo un cielo tormentoso.",
      "Los molinos recuerdan a Constable a su padre y su infancia en Suffolk."
    ],
    "fact": "1833. Metropolitan Museum of Art, Nueva York."
  },
  "cnstoke36": {
    "text": [
      "Delante, en el campo, hay un arado y un carro con caballos, y detrás se alza la torre de la iglesia de Stoke-by-Nayland.",
      "Casi 25 años después de su primer cuadro, Constable vuelve a pintar el pueblo con pinceladas salvajes y libres."
    ],
    "fact": "1836. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
