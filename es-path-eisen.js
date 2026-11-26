// v10.43 ES content for Keisai Eisen’s life journey (1790–1848). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York"
});
  P.works = Object.assign(P.works || {}, {
  "ketakanawa": {
    "title": "Velas que regresan en Takanawa",
    "museum": "Art Institute of Chicago"
  },
  "kefuji": {
    "title": "Vista del monte Fuji desde una casa de té",
    "museum": "Art Institute of Chicago"
  },
  "kesparrows": {
    "title": "Gorriones, bambú y nieve que cae",
    "museum": "Museo de Arte de Cleveland"
  },
  "kefishes": {
    "title": "Peces nadando con flores amarillas",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "kecarp": {
    "title": "Carpa que remonta una cascada",
    "museum": "Museo de Arte de Cleveland"
  },
  "kekoi": {
    "title": "Carpa koi",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "keitahana": {
    "title": "N.º 15: Itahana",
    "museum": "Art Institute of Chicago"
  },
  "kehiratsuka": {
    "title": "N.º 20: Lluvia en la llanura de Hiratsuka, cerca de Kutsukake",
    "museum": "Art Institute of Chicago"
  },
  "kesuwa": {
    "title": "N.º 31: Vista del lago Suwa desde el paso de Shiojiri",
    "museum": "Art Institute of Chicago"
  },
  "kenojiri": {
    "title": "N.º 41: Vista lejana del puente del río Ina en Nojiri",
    "museum": "Art Institute of Chicago"
  },
  "kewarabi": {
    "title": "Warabi: transbordador en el río Toda",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "ketoeizan": {
    "title": "El templo Tōeizan visto desde el santuario de Benten en Shinobazu, Edo",
    "museum": "Art Institute of Chicago"
  },
  "kesnow": {
    "title": "Nieve en el río Sumida",
    "museum": "Art Institute of Chicago"
  },
  "kesnowdist": {
    "title": "Vista lejana de la nieve en el río Sumida, en Edo",
    "museum": "Art Institute of Chicago"
  },
  "kenihonbashi": {
    "title": "Cielo despejado en Nihonbashi",
    "museum": "Metropolitan Museum of Art, Nueva York"
  }
});
  P.paths = P.paths || {};
  P.paths.eisen = {
  "title": "El camino de vida de Keisai Eisen",
  "part": "Caminos y ríos",
  "subtitle": "De Edo por el Kisokaidō",
  "intro": "Viaja con el grabador japonés Keisai Eisen: a estampas de Año Nuevo con poemas, a peces y pájaros, por el camino de montaña Kisokaidō y hasta el río Sumida nevado en Edo. Las imágenes proceden de museos que ofrecen sus reproducciones libremente.",
  "ending": [
    "Keisai Eisen muere en 1848.",
    "Sus grabados se conservan hoy en museos de todo el mundo."
  ],
  "epilogue": "Keisai Eisen muere en 1848. El camino lleva de las estampas de Año Nuevo con poemas, pasando por peces y pájaros, a las estaciones del Kisokaidō y de vuelta a Edo.",
  "life": "1790–1848"
};
  P.stations = Object.assign(P.stations || {}, {
  "kes1": {
    "place": "Felicitaciones de Año Nuevo con poemas",
    "when": "1820–1829",
    "mapLabel": "Japón",
    "intro": [
      "Keisai Eisen vive de 1790 a 1848; es hijo de un pintor de la escuela Kanō y también escribe poemas.",
      "Los surimono son grabados encargados de forma privada, a menudo felicitaciones de Año Nuevo de grupos de poetas, con poemas y colores especialmente finos."
    ]
  },
  "kes2": {
    "place": "Peces, pájaros y flores",
    "when": "1827–1842",
    "mapLabel": "Japón",
    "intro": [
      "Además de paisajes, Eisen diseña estampas de peces, pájaros y plantas.",
      "A menudo los animales llenan casi toda la hoja sobre un fondo sencillo."
    ]
  },
  "kes3": {
    "place": "Las estaciones del Kisokaidō",
    "when": "1835–1838",
    "mapLabel": "Kisokaidō",
    "intro": [
      "Hacia 1835 Eisen comienza una serie de grabados sobre las estaciones de posta del Kisokaidō, el camino del interior entre Edo y Kioto.",
      "Utagawa Hiroshige completa la serie más tarde."
    ]
  },
  "kes4": {
    "place": "Vistas de Edo",
    "when": "1830–1847",
    "mapLabel": "Edo",
    "intro": [
      "En Edo, la actual Tokio, Eisen dibuja templos, orillas nevadas y puentes llenos de gente.",
      "Hacia 1830 da a una serie de lugares famosos de Edo marcos hechos de letras occidentales."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ketakanawa": {
    "text": [
      "Los veleros regresan por la amplia bahía, y en la playa hay gente.",
      "Arriba hay varios poemas, y la hoja está firmada «Keisai»."
    ],
    "fact": "hacia 1820–1829. Art Institute of Chicago."
  },
  "kefuji": {
    "text": [
      "Unos huéspedes descansan en la orilla bajo un árbol en flor, y a lo lejos se alza el Fuji nevado.",
      "Para la estampa se usaron también pigmentos metálicos, y está firmada «Keisai ga», pintado por Keisai."
    ],
    "fact": "hacia 1820–1829. Art Institute of Chicago."
  },
  "kesparrows": {
    "text": [
      "Dos gorriones vuelan entre finos tallos de bambú mientras caen pequeños copos de nieve.",
      "El Cleveland Museum of Art fecha el grabado en color a finales de la década de 1820."
    ],
    "fact": "hacia 1827–1829. Museo de Arte de Cleveland."
  },
  "kefishes": {
    "text": [
      "Tres peces plateados nadan junto a una planta de flores amarillas brillantes.",
      "La hoja es un surimono con un poema y llegó al Metropolitan Museum en 1919."
    ],
    "fact": "hacia 1830. Metropolitan Museum of Art, Nueva York."
  },
  "kecarp": {
    "text": [
      "En la imagen alta y estrecha, una carpa sube serpenteando por una cascada azul.",
      "En Asia la carpa simboliza la buena suerte y la perseverancia, por eso en Japón se la muestra a menudo remontando cascadas."
    ],
    "fact": "hacia 1830–1836. Museo de Arte de Cleveland."
  },
  "kekoi": {
    "text": [
      "Una gran carpa oscura nada por el agua azul con claras líneas onduladas.",
      "El Metropolitan Museum fecha el grabado hacia 1842 y lo adquirió en 1917."
    ],
    "fact": "hacia 1842. Metropolitan Museum of Art, Nueva York."
  },
  "keitahana": {
    "text": [
      "Unos viajeros pasan junto a árboles muy nevados por un camino junto al río.",
      "Itahana es la estación n.º 15 de la serie de las sesenta y nueve estaciones del Kisokaidō."
    ],
    "fact": "hacia 1835–1836. Art Institute of Chicago."
  },
  "kehiratsuka": {
    "text": [
      "Unos viajeros con caballos de carga avanzan con esfuerzo entre la lluvia oblicua y el viento.",
      "La estación de Kutsukake lleva el número 20 en la serie del Kisokaidō."
    ],
    "fact": "hacia 1835–1836. Art Institute of Chicago."
  },
  "kesuwa": {
    "text": [
      "Unos viajeros suben por una ladera verde sobre el amplio lago, y a lo lejos se alza una cumbre nevada.",
      "La vista del lago Suwa desde el paso es el número 31 de la serie del Kisokaidō."
    ],
    "fact": "hacia 1835–1836. Art Institute of Chicago."
  },
  "kenojiri": {
    "text": [
      "Unos viajeros cruzan un puente muy por encima de un río entre montañas verdes y empinadas.",
      "Arriba a la izquierda se recorta la silueta del pabellón de Kannon de un templo."
    ],
    "fact": "hacia 1835–1836. Art Institute of Chicago."
  },
  "kewarabi": {
    "text": [
      "Un transbordador lleno lleva a los viajeros por el río azul, con árboles y casas en la orilla.",
      "En la estación de Warabi los viajeros cruzan el río Toda en transbordador."
    ],
    "fact": "hacia 1838. Metropolitan Museum of Art, Nueva York."
  },
  "ketoeizan": {
    "text": [
      "La mirada cruza un estanque verde claro con una barca pequeña hacia árboles y tejados en la orilla.",
      "La hoja pertenece a una serie de lugares famosos de Edo con marcos de letras occidentales."
    ],
    "fact": "hacia 1830. Art Institute of Chicago."
  },
  "kesnow": {
    "text": [
      "La nieve cubre tejados y árboles de la orilla, y una barca pequeña flota en el río azul.",
      "El Art Institute of Chicago fecha la hoja a principios de la década de 1830."
    ],
    "fact": "hacia 1830–1833. Art Institute of Chicago."
  },
  "kesnowdist": {
    "text": [
      "Una barca con pasajeros se desliza por el río azul, y las orillas están cubiertas de nieve.",
      "El Cleveland Museum of Art posee otra impresión de este motivo."
    ],
    "fact": "hacia 1840–1844. Art Institute of Chicago."
  },
  "kenihonbashi": {
    "text": [
      "Mucha gente se agolpa en el puente Nihonbashi, y detrás se alza el Fuji sobre la ciudad.",
      "La hoja pertenece a la serie «Ocho vistas de Edo»."
    ],
    "fact": "1843–1847. Metropolitan Museum of Art, Nueva York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
