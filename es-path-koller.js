// v10.24 ES content for Rudolf Koller’s life journey, Part 1 (1828–1905). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Bundesamt für Kultur, Bern": "Oficina Federal de Cultura, Berna",
  "Privatsammlung": "Colección particular",
  "Museum Oskar Reinhart, Winterthur": "Museum Oskar Reinhart, Winterthur",
  "Standort ohne Angabe": "Ubicación no indicada",
  "Kunsthaus Zürich": "Kunsthaus de Zúrich"
});
  P.works = Object.assign(P.works || {}, {
  "rkschimmel": {
    "title": "Caballo blanco en el establo",
    "museum": "Kunsthaus de Zúrich"
  },
  "rkscheu": {
    "title": "Caballos espantados ante la tormenta",
    "museum": "Colección particular"
  },
  "rkkuhwald": {
    "title": "Vaca en el bosque",
    "museum": "Colección particular"
  },
  "rkheuernte": {
    "title": "Siega del heno ante la tormenta",
    "museum": "Ubicación no indicada"
  },
  "rksusten": {
    "title": "Glaciar en el paso del Susten",
    "museum": "Kunsthaus de Zúrich"
  },
  "rkrichisau": {
    "title": "La Richisau",
    "museum": "Museum Oskar Reinhart, Winterthur"
  },
  "rkmittag": {
    "title": "Descanso del mediodía",
    "museum": "Kunsthaus de Zúrich"
  },
  "rkwaesche": {
    "title": "Vacas y lavandera junto al arroyo",
    "museum": "Colección particular"
  },
  "rktraenke": {
    "title": "Abrevadero en el lago al atardecer",
    "museum": "Colección particular"
  },
  "rkanzio": {
    "title": "Cabras en la playa de Porto d’Anzio",
    "museum": "Museum Oskar Reinhart, Winterthur"
  },
  "rkhorn": {
    "title": "Vacas en el Zürichhorn",
    "museum": "Colección particular"
  },
  "rkgotthard": {
    "title": "La diligencia del Gotardo",
    "museum": "Kunsthaus de Zúrich"
  },
  "rkalp": {
    "title": "Subida al alpe",
    "museum": "Colección particular"
  },
  "rkschlitten": {
    "title": "Paseo en trineo",
    "museum": "Oficina Federal de Cultura, Berna"
  },
  "rkabend": {
    "title": "Atardecer en el Zürichhorn",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.koller = {
  "title": "El camino de vida de Rudolf Koller",
  "life": "1828–1905",
  "part": "Zúrich y los animales",
  "subtitle": "Caballos, vacas y la diligencia del Gotardo",
  "intro": "Viaja con Rudolf Koller, el pintor de animales de Zúrich: desde el joven pintor ante el caballete, pasando por los Alpes y el Klöntal, hasta la casa del Zürichhorn y la famosa diligencia del Gotardo. Estaciones breves y cuadros para colorear. Este camino lo sigue por el establo, el prado y la montaña.",
  "ending": [
    "Rudolf Koller muere en Zúrich el 5 de enero de 1905. Toda su vida pintó a sus animales con paciencia y mirada precisa.",
    "El camino va de los primeros cuadros de caballos, pasando por las vacas del Zürichhorn, hasta el Correo del Gotardo, su cuadro más conocido."
  ],
  "epilogue": "Rudolf Koller muere en Zúrich el 5 de enero de 1905. Toda su vida pintó a sus animales con paciencia y mirada precisa. El camino va de los primeros cuadros de caballos, pasando por las vacas del Zürichhorn, hasta el Correo del Gotardo, su cuadro más conocido."
};
  P.stations = Object.assign(P.stations || {}, {
  "rkjung": {
    "place": "Zúrich y Düsseldorf · Aprendizaje",
    "when": "1828–1852",
    "mapLabel": "Zúrich",
    "intro": [
      "Rudolf Koller nace en Zúrich el 21 de mayo de 1828. En 1846 va a la academia de Düsseldorf y después a París y Múnich.",
      "Caballos y vacas son sus modelos desde el principio."
    ]
  },
  "rkland": {
    "place": "Campos, Alpes y el Klöntal",
    "when": "1853–1860",
    "mapLabel": "Klöntal",
    "intro": [
      "De vuelta en Suiza, Koller pinta la siega, el bosque y los glaciares. En el Klöntal encuentra en la Richisau un lugar de verano.",
      "Trabaja al aire libre ante el motivo y termina los cuadros en el taller."
    ]
  },
  "rkhaus": {
    "place": "La casa del Zürichhorn",
    "when": "1862–1869",
    "mapLabel": "Zürichhorn",
    "intro": [
      "En 1862 Koller se instala en su casa del Zürichhorn junto al lago. Tiene sus propios animales y los pinta en la orilla.",
      "En 1869 un viaje lo lleva también a la costa italiana."
    ]
  },
  "rkgott": {
    "place": "El Gotardo y el alpe",
    "when": "1873–1881",
    "mapLabel": "Gotardo",
    "intro": [
      "En 1873 Koller pinta la diligencia del Gotardo, el cuadro con el que se le asocia hasta hoy.",
      "También la subida al alpe muestra el movimiento de animales y personas en la montaña."
    ]
  },
  "rkspaet": {
    "place": "Últimos años junto al lago",
    "when": "1882–1905",
    "mapLabel": "Lago",
    "intro": [
      "En la vejez Koller se queda en el Zürichhorn. Pinta paseos de invierno y tardes tranquilas en la orilla.",
      "Muere en Zúrich el 5 de enero de 1905."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rkschimmel": {
    "text": [
      "Un caballo blanco está quieto en el establo oscuro y la luz cae sobre el pelaje y la crin. Koller pinta el cuadro a los veinte años.",
      "Los caballos serán toda su vida sus modelos preferidos."
    ],
    "fact": "1848. Kunsthaus de Zúrich."
  },
  "rkscheu": {
    "text": [
      "Se acercan nubes oscuras y los caballos levantan la cabeza y se apartan. El cuadro nace tras la formación de Koller en Düsseldorf.",
      "En Düsseldorf conoció en 1846 a Arnold Böcklin, con quien sigue siendo amigo."
    ],
    "fact": "1849. Colección particular."
  },
  "rkkuhwald": {
    "text": [
      "Una vaca está a la sombra de los árboles y la luz cae a manchas sobre su pelaje. Koller observa al animal muy de cerca.",
      "Tras viajes a París y Múnich vuelve a estar en Zúrich."
    ],
    "fact": "1854. Colección particular."
  },
  "rkheuernte": {
    "text": [
      "Los campesinos cargan deprisa el heno en el carro mientras el cielo se oscurece. Los caballos esperan enganchados.",
      "Koller muestra el trabajo del campo sin embellecerlo, pero con calidez."
    ],
    "fact": "1854. Ubicación no indicada."
  },
  "rksusten": {
    "text": [
      "Arriba está el glaciar y delante rocas y pastos pobres. Koller camina por los Alpes para sus estudios.",
      "El cuadro pertenece al Kunsthaus de Zúrich."
    ],
    "fact": "1856. Kunsthaus de Zúrich."
  },
  "rkrichisau": {
    "text": [
      "La Richisau está al fondo del Klöntal, en el cantón de Glaris, entre prados y montañas escarpadas. Koller pasa aquí muchos veranos.",
      "Aquí encuentra vacas, luz y calma para sus cuadros."
    ],
    "fact": "1858. Museum Oskar Reinhart, Winterthur."
  },
  "rkmittag": {
    "text": [
      "Con el calor del mediodía las vacas están tumbadas en la hierba y el pastor descansa a la sombra. Todo está en calma.",
      "El cuadro del Kunsthaus de Zúrich muestra la sensibilidad de Koller para el calor y la luz."
    ],
    "fact": "1860. Kunsthaus de Zúrich."
  },
  "rkwaesche": {
    "text": [
      "Una mujer lava en el arroyo y a su lado beben las vacas. El agua, el pelaje y las hojas brillan con la luz.",
      "Desde 1862 Koller vive en su casa del Zürichhorn, a orillas del lago de Zúrich."
    ],
    "fact": "1865–1867. Colección particular."
  },
  "rktraenke": {
    "text": [
      "El sol se pone y el ganado bebe en el agua poco profunda de la orilla. El cielo arde en rojo y oro.",
      "Koller pinta a menudo estas escenas de tarde delante de su casa junto al lago."
    ],
    "fact": "1868. Colección particular."
  },
  "rkanzio": {
    "text": [
      "Un rebaño de cabras cruza la playa de arena clara y detrás está el mar. Koller viaja a Italia y pinta en el sur.",
      "Aquí la luz es más blanca y amplia que en el lago de Zúrich."
    ],
    "fact": "1869. Museum Oskar Reinhart, Winterthur."
  },
  "rkhorn": {
    "text": [
      "Las vacas están en la orilla junto al Zürichhorn y sobre el lago luce un día claro. Aquí vive y trabaja Koller.",
      "Tiene sus propios animales para poder estudiarlos cada día."
    ],
    "fact": "1869. Colección particular."
  },
  "rkgotthard": {
    "text": [
      "La diligencia baja a toda prisa por la carretera del puerto y un ternero salta asustado a un lado. Es el cuadro más conocido de Koller.",
      "Nace en 1873, cuando empiezan las obras del túnel del Gotardo, y está en el Kunsthaus de Zúrich."
    ],
    "fact": "1873. Kunsthaus de Zúrich."
  },
  "rkalp": {
    "text": [
      "A principios del verano el rebaño sube al alpe con pastores y cencerros. El camino lleva por prados hacia la montaña.",
      "Koller pinta la subida como un momento festivo del año campesino."
    ],
    "fact": "1881. Colección particular."
  },
  "rkschlitten": {
    "text": [
      "Un caballo tira del trineo por la nieve y su aliento humea en el aire frío. Koller tiene ya más de sesenta años.",
      "También en invierno el caballo sigue siendo su tema principal."
    ],
    "fact": "1892. Oficina Federal de Cultura, Berna."
  },
  "rkabend": {
    "text": [
      "La tarde cae sobre la orilla del Zürichhorn y animales y árboles se oscurecen ante el agua clara.",
      "Koller pinta su rincón junto al lago hasta la vejez."
    ],
    "fact": "1893. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
