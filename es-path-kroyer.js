// v10.43 ES content for P.S. Krøyer’s life journey (1851–1909). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Statens Museum for Kunst, Kopenhagen": "Statens Museum for Kunst, Copenhague"
});
  P.works = Object.assign(P.works || {}, {
  "pssmithy": {
    "title": "Una herrería en Hornbæk",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psfisher": {
    "title": "Retrato de un pescador de Hornbæk",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psherring": {
    "title": "Pescadores de Hornbæk pescando arenques",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pssardine": {
    "title": "Una fábrica de sardinas en Concarneau",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psguillou": {
    "title": "Retrato del pintor francés Alfred Guillou",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psseascape": {
    "title": "Marina, Skagen",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psmeldahl": {
    "title": "Retrato del arquitecto F. Meldahl",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pstuxen": {
    "title": "Retrato de Frederikke Tuxen",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "psbeach": {
    "title": "Pescadores en la playa de Skagen",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psfoundry": {
    "title": "La fundición de hierro de Burmeister & Wain",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psduet": {
    "title": "Un dúo",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psthreshing": {
    "title": "La trilla en los Abruzos, Cività d’Antino",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pstorello": {
    "title": "Una calle de Torello, Italia",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pscatarinella": {
    "title": "Cabeza de una muchacha de Cività d’Antino con traje regional («Catarinella»)",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "psrosenorn": {
    "title": "El barón Otto Ditlev Rosenørn-Lehn",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psevening": {
    "title": "Atardecer en Skagen",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psschandorph": {
    "title": "El escritor Sophus Schandorph",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pssteenstrup": {
    "title": "El zoólogo Japetus Steenstrup da una conferencia",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pscasse": {
    "title": "Retrato de S. A. Casse, de soltera Engelbreth",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psgroup": {
    "title": "Grupo de retratos",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pshelga": {
    "title": "Una niña, Helga Melchior, con un vestido largo",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psmoonlight": {
    "title": "La playa de Skagen a la luz de la luna",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "psraben": {
    "title": "Retrato de la condesa Lillie Suzanne Raben-Levetzau",
    "museum": "Statens Museum for Kunst, Copenhague"
  }
});
  P.paths = P.paths || {};
  P.paths.kroyer = {
  "title": "El camino de vida de P. S. Krøyer",
  "part": "Pescadores, amigos y tardes azules",
  "subtitle": "De Hornbæk a Skagen, pasando por París e Italia",
  "intro": "Viaja por la vida de P. S. Krøyer: de los pescadores de Hornbæk, pasando por París, España e Italia, hasta las claras tardes de verano de Skagen. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "P. S. Krøyer muere en Skagen el 21 de noviembre de 1909.",
    "Un año antes había cofundado el Skagens Museum, que tras su muerte instala sus primeras salas de exposición en su antigua casa."
  ],
  "epilogue": "P. S. Krøyer muere en Skagen el 21 de noviembre de 1909. El camino lleva de Hornbæk, pasando por París, Bretaña e Italia, hasta la playa de Skagen.",
  "life": "1851–1909"
};
  P.stations = Object.assign(P.stations || {}, {
  "pss1": {
    "place": "Infancia y años de aprendizaje",
    "when": "1851–1877",
    "mapLabel": "Hornbæk",
    "intro": [
      "Peder Severin Krøyer nace en Stavanger, Noruega, el 23 de julio de 1851 y crece en Copenhague con padres de acogida; su padre de acogida es el zoólogo H. N. Krøyer.",
      "Empieza su formación a los diez años, después estudia en la Academia de Bellas Artes y pinta a pescadores y artesanos en Hornbæk."
    ]
  },
  "pss2": {
    "place": "París, Bretaña y España",
    "when": "1877–1881",
    "mapLabel": "París",
    "intro": [
      "En París Krøyer estudia con el pintor Léon Bonnat, y en Bretaña pinta a gente trabajando.",
      "En 1878 viaja a España con amigos pintores y estudia durante meses los cuadros de Velázquez."
    ]
  },
  "pss3": {
    "place": "Skagen y Copenhague",
    "when": "1882–1888",
    "mapLabel": "Skagen",
    "intro": [
      "Desde 1882 Krøyer vuelve una y otra vez a Skagen, donde se reúnen pintores y escritores daneses y escandinavos.",
      "En invierno pinta en Copenhague muchos encargos, retratos y cuadros de fábricas y salones."
    ]
  },
  "pss4": {
    "place": "Boda e Italia",
    "when": "1889–1891",
    "mapLabel": "Italia",
    "intro": [
      "En 1889 Krøyer se casa con la pintora Marie Triepcke, 16 años más joven que él.",
      "En 1890 pinta en Italia, entre otros lugares en Cività d’Antino, en los Abruzos."
    ]
  },
  "pss5": {
    "place": "Tardes azules y grandes encargos",
    "when": "1893–1909",
    "mapLabel": "Skagen y Copenhague",
    "intro": [
      "En la década de 1890 Krøyer pinta las claras tardes de verano en la playa de Skagen en tonos azules.",
      "Al mismo tiempo realiza grandes encargos, como un retrato de grupo de la Real Academia Danesa de Ciencias y Letras."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "pssmithy": {
    "text": [
      "En una herrería oscura unos hombres trabajan a la luz del fuego.",
      "Krøyer pinta el cuadro con 21 o 22 años en el pueblo pesquero de Hornbæk."
    ],
    "fact": "1873. Statens Museum for Kunst, Copenhague."
  },
  "psfisher": {
    "text": [
      "Un pescador con sueste amarillo y rostro curtido mira directamente al espectador.",
      "Krøyer lo pinta sobre una tabla de madera."
    ],
    "fact": "1875. Statens Museum for Kunst, Copenhague."
  },
  "psherring": {
    "text": [
      "Unos pescadores recogen sus redes en una barca sobre un mar gris, con la captura plateada delante.",
      "Krøyer muestra a los hombres trabajando, muy de cerca y sin adornos."
    ],
    "fact": "1877. Statens Museum for Kunst, Copenhague."
  },
  "pssardine": {
    "text": [
      "Mujeres con cofias bretonas blancas trabajan en largas mesas en una nave de fábrica.",
      "Concarneau es un puerto pesquero de Bretaña, y el cuadro muestra la vida diaria de las trabajadoras."
    ],
    "fact": "1879. Statens Museum for Kunst, Copenhague."
  },
  "psguillou": {
    "text": [
      "Un hombre de barba negra y pañuelo rojo al cuello aparece de perfil.",
      "Alfred Guillou es un colega pintor francés."
    ],
    "fact": "1879. Statens Museum for Kunst, Copenhague."
  },
  "psseascape": {
    "text": [
      "Olas de un verde grisáceo avanzan hacia la playa bajo un cielo cubierto.",
      "El cuadro se pinta en 1882, el primer verano que Krøyer pasa en Skagen."
    ],
    "fact": "1882. Statens Museum for Kunst, Copenhague."
  },
  "psmeldahl": {
    "text": [
      "El arquitecto está de pie con un largo abrigo negro delante de una chimenea blanca.",
      "El retrato lo muestra de cuerpo entero."
    ],
    "fact": "1882. Statens Museum for Kunst, Copenhague."
  },
  "pstuxen": {
    "text": [
      "Una joven está de pie tranquila, dibujada con tiza negra y blanca sobre papel marrón.",
      "La hoja es grande, de unos 130 centímetros de alto."
    ],
    "fact": "1882. Metropolitan Museum of Art, Nueva York."
  },
  "psbeach": {
    "text": [
      "Unos pescadores están tumbados y sentados en la arena clara, y uno de pie mira al mar.",
      "El cuadro mide unos dos metros de ancho y el museo lo adquiere ya en 1884."
    ],
    "fact": "1883. Statens Museum for Kunst, Copenhague."
  },
  "psfoundry": {
    "text": [
      "En una gran nave unos hombres trabajan con el hierro incandescente, bajo una grúa.",
      "Burmeister & Wain es una gran empresa industrial de Copenhague."
    ],
    "fact": "1885. Statens Museum for Kunst, Copenhague."
  },
  "psduet": {
    "text": [
      "Una mujer con vestido naranja canta junto a un hombre al piano, y los invitados escuchan a la luz de las velas.",
      "Aquí Krøyer pinta una velada en un salón, con muchos tonos oscuros."
    ],
    "fact": "1887. Statens Museum for Kunst, Copenhague."
  },
  "psthreshing": {
    "text": [
      "Bajo un sol intenso unos campesinos conducen el ganado sobre la paja dorada, mientras otros trabajan con horcas.",
      "Cività d’Antino es un pueblo de montaña de los Abruzos donde Krøyer pinta en 1890."
    ],
    "fact": "1890. Statens Museum for Kunst, Copenhague."
  },
  "pstorello": {
    "text": [
      "En un callejón estrecho y blanco hay mujeres y niños bajo el sol.",
      "La luz sobre los muros claros es el verdadero tema del cuadro."
    ],
    "fact": "1890. Statens Museum for Kunst, Copenhague."
  },
  "pscatarinella": {
    "text": [
      "Una muchacha sonriente lleva un pañuelo amarillo y otro rojo sobre el pelo.",
      "Krøyer pinta la pequeña acuarela sobre un dibujo a lápiz."
    ],
    "fact": "1890. Metropolitan Museum of Art, Nueva York."
  },
  "psrosenorn": {
    "text": [
      "Un anciano caballero de pelo blanco, con traje negro, está sentado en un sillón con las manos juntas.",
      "En 1870 Rosenørn-Lehn fue ministro de Asuntos Exteriores danés y director de la colección real de pintura."
    ],
    "fact": "1891. Statens Museum for Kunst, Copenhague."
  },
  "psevening": {
    "text": [
      "El sol se pone tras una tierra llana, y nubes rosas y doradas se reflejan en el agua.",
      "El pequeño cuadro sobre madera mide solo unos 43 centímetros de ancho."
    ],
    "fact": "1893. Statens Museum for Kunst, Copenhague."
  },
  "psschandorph": {
    "text": [
      "Un hombre robusto de barba gris está sentado a su escritorio bajo una lámpara.",
      "Sophus Schandorph es un escritor danés."
    ],
    "fact": "1895. Statens Museum for Kunst, Copenhague."
  },
  "pssteenstrup": {
    "text": [
      "Un anciano de pelo blanco habla de pie, mientras otros hombres escuchan detrás de él.",
      "Japetus Steenstrup es profesor de zoología."
    ],
    "fact": "1895. Statens Museum for Kunst, Copenhague."
  },
  "pscasse": {
    "text": [
      "Una anciana con cofia teje junto a una ventana con flores.",
      "Krøyer dibuja el retrato con pasteles sobre papel."
    ],
    "fact": "1895. Statens Museum for Kunst, Copenhague."
  },
  "psgroup": {
    "text": [
      "Cuatro caballeros mayores están sentados uno junto a otro a una mesa, al lado de un candelabro dorado.",
      "Ese mismo año Krøyer trabaja en su gran retrato de grupo de la Academia de Ciencias."
    ],
    "fact": "1896. Statens Museum for Kunst, Copenhague."
  },
  "pshelga": {
    "text": [
      "Una niña con el pelo suelto está de pie con un largo vestido blanco en una habitación oscura.",
      "Krøyer pinta el retrato sobre una tabla de madera."
    ],
    "fact": "1897. Statens Museum for Kunst, Copenhague."
  },
  "psmoonlight": {
    "text": [
      "Un mar azul en calma y una playa clara se extienden bajo la luna, con un pequeño velero a lo lejos.",
      "Cuadros de playa azules como este están entre las obras más conocidas de Krøyer."
    ],
    "fact": "1899. Statens Museum for Kunst, Copenhague."
  },
  "psraben": {
    "text": [
      "Una mujer con un vestido de noche blanco está de pie delante de una cortina verde.",
      "El retrato la muestra de cuerpo entero, en colores claros y ligeros."
    ],
    "fact": "1899. Statens Museum for Kunst, Copenhague."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
