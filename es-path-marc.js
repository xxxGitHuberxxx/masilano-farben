// v10.35 ES Franz Marc Lebensweg, promoted from the story chapter.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "grazing": {
    "title": "Caballos pastando I",
    "museum": "Städtische Galerie im Lenbachhaus, Múnich"
  },
  "bluehorse": {
    "title": "Caballo azul I",
    "museum": "Städtische Galerie im Lenbachhaus, Múnich"
  },
  "largeblue": {
    "title": "Los grandes caballos azules",
    "museum": "Walker Art Center, Minneapolis"
  },
  "tiger": {
    "title": "El tigre",
    "museum": "Städtische Galerie im Lenbachhaus, Múnich"
  },
  "foxes": {
    "title": "Los zorros",
    "museum": "Ubicación actual no confirmada públicamente"
  },
  "fate": {
    "title": "Destinos de animales",
    "museum": "Kunstmuseum Basel"
  },
  "deer": {
    "title": "Ciervos en el bosque II",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "forms": {
    "title": "Formas en lucha",
    "museum": "Pinakothek der Moderne, Múnich"
  }
});
  P.paths = P.paths || {};
  P.paths.marc = {
  "title": "El camino de vida de Franz Marc",
  "life": "1880–1916",
  "part": "Múnich y El Jinete Azul",
  "subtitle": "Una vida de pintor en 8 cuadros",
  "intro": "Píntate a través de la vida de Franz Marc: desde los caballos en colores naturales hasta los animales de un azul luminoso y los cuadros casi abstractos de antes de la guerra. Antes de cada cuadro te enteras de dónde vive en ese momento y de cómo cambia su arte. Cada cuadro terminado abre el capítulo siguiente.",
  "ending": [
    "Tras su muerte, Maria Marc se ocupa de la obra. Muchos de los cuadros de animales se harán después muy conocidos, sobre todo los caballos azules. En la época del nacionalsocialismo el arte de Franz Marc es calificado de «degenerado» y se retira de los museos alemanes. Su gran cuadro «La torre de los caballos azules» está desaparecido desde 1945. Lo que queda son los cuadros que has pintado aquí: un camino desde los caballos pastando hasta las formas en lucha, y la idea de que el color puede ser una fuerza espiritual."
  ],
  "epilogue": "Tras su muerte, Maria Marc se ocupa de la obra. Muchos de los cuadros de animales se harán después muy conocidos, sobre todo los caballos azules. En la época del nacionalsocialismo el arte de Franz Marc es calificado de «degenerado» y se retira de los museos alemanes. Su gran cuadro «La torre de los caballos azules» está desaparecido desde 1945. Lo que queda son los cuadros que has pintado aquí: un camino desde los caballos pastando hasta las formas en lucha, y la idea de que el color puede ser una fuerza espiritual."
};
  P.stations = Object.assign(P.stations || {}, {
  "marc-grazing": {
    "place": "Sindelsdorf, Alta Baviera",
    "when": "1910",
    "mapLabel": "Sindelsdorf, Alta Baviera",
    "intro": [
      "Franz Marc nace en 1880 en Múnich. Su padre Wilhelm es pintor de paisajes, y Franz piensa primero en estudiar teología. Al final se decide aun así por el arte: en 1901 entra en la Academia de Bellas Artes de Múnich. Tras un viaje a París deja de nuevo la Academia y busca su propio camino."
    ]
  },
  "marc-bluehorse": {
    "place": "Sindelsdorf",
    "when": "1911",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "En diciembre de 1910 Franz escribe a su nuevo amigo, el pintor August Macke, una carta sobre el significado de los colores. El azul sería el principio masculino, austero y espiritual. El amarillo, el femenino, suave, alegre y sensual. El rojo, la materia, brutal y pesada, que el azul y el amarillo deben vencer."
    ]
  },
  "marc-largeblue": {
    "place": "Sindelsdorf",
    "when": "1911",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "En diciembre de 1911 se produce la ruptura con la Neue Künstlervereinigung München. Junto con Kandinski, Gabriele Münter y otros, Franz inaugura el 18 de diciembre en la galería Thannhauser la primera exposición de la redacción «El Jinete Azul»."
    ]
  },
  "marc-tiger": {
    "place": "Sindelsdorf",
    "when": "1912",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "En otoño de 1912 Franz viaja a París con August Macke. Allí conocen al pintor Robert Delaunay, cuyos colores luminosos, quebrados en facetas, impresionan fuertemente a ambos."
    ]
  },
  "marc-foxes": {
    "place": "Sindelsdorf",
    "when": "1913",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "En 1913 los cuadros de Franz Marc se vuelven todavía más atrevidos. Las formas se quiebran en cristales, los colores brillan y chocan con dureza. Dos zorros parecen entrelazados; al principio casi hay que buscarlos."
    ]
  },
  "marc-fate": {
    "place": "Sindelsdorf",
    "when": "1913",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "En el mismo año nace «Destinos de animales». Entre formas puntiagudas y amenazantes se reconocen animales; en el centro, un corzo que alza la cabeza bien arriba. En el reverso del cuadro Franz escribe: «Y todo ser es sufrimiento en llamas»."
    ]
  },
  "marc-deer": {
    "place": "Ried, cerca de Kochel",
    "when": "1914",
    "mapLabel": "Ried, cerca de Kochel",
    "intro": [
      "A principios de 1914 Franz y Maria se mudan a Ried, no lejos de Kochel am See. Allí nacen sus últimos grandes cuadros, unos todavía con animales, otros ya casi sin asunto."
    ]
  },
  "marc-forms": {
    "place": "Ried, cerca de Kochel",
    "when": "1914",
    "mapLabel": "Ried, cerca de Kochel",
    "intro": [
      "En Ried, en 1914, Franz pinta varios cuadros que consisten casi solo en color y movimiento: formas alegres, juguetonas, en lucha y rotas. En el presente cuadro un rojo luminoso y un azul oscuro profundo chocan uno contra otro."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "grazing": {
      "text": [
        "Franz Marc nace en 1880 en Múnich. Su padre Wilhelm es pintor de paisajes, y Franz piensa primero en estudiar teología. Al final se decide aun así por el arte: en 1901 entra en la Academia de Bellas Artes de Múnich. Tras un viaje a París deja de nuevo la Academia y busca su propio camino.",
        "En 1910 se muda con la pintora Maria Franck, que más tarde será su mujer, a Sindelsdorf, en la Alta Baviera. Allí, en el campo, encuentra su tema: los animales. Le parecen más puros y más hermosos que los seres humanos.",
        "En «Caballos pastando» los animales están pintados todavía en tonos naturales de pardo y amarillo. Un año después sus caballos serán azules."
      ],
      "fact": "Durante el servicio militar Franz Marc aprendió a montar. Así descubrió su amor por los caballos, que ya no lo soltaría en toda su vida."
    },
    "bluehorse": {
      "text": [
        "En diciembre de 1910 Franz escribe a su nuevo amigo, el pintor August Macke, una carta sobre el significado de los colores. El azul sería el principio masculino, austero y espiritual. El amarillo, el femenino, suave, alegre y sensual. El rojo, la materia, brutal y pesada, que el azul y el amarillo deben vencer.",
        "A principios de 1911 conoce en Múnich a Vasili Kandinski. El encuentro cambiará su vida.",
        "Con «Caballo azul I» pone en práctica su teoría del color: el caballo ya no es pardo, sino de un azul luminoso. El color dice algo sobre su esencia, no sobre su pelaje."
      ],
      "fact": "En el mismo año nace también «Caballo azul II». Hoy cuelga en el Kunstmuseum de Berna."
    },
    "largeblue": {
      "text": [
        "En diciembre de 1911 se produce la ruptura con la Neue Künstlervereinigung München. Junto con Kandinski, Gabriele Münter y otros, Franz inaugura el 18 de diciembre en la galería Thannhauser la primera exposición de la redacción «El Jinete Azul».",
        "Kandinski cuenta después que encontraron el nombre en la mesa del café en Sindelsdorf: ambos amaban el azul, Marc los caballos, él los jinetes.",
        "En mayo de 1912 aparece el almanaque «El Jinete Azul», que Marc y Kandinski editan juntos. En esos meses Franz pinta «Los grandes caballos azules»: tres animales poderosos, enteramente en su azul espiritual."
      ],
      "fact": "La primera exposición del Jinete Azul recorrió después varias ciudades, entre ellas Colonia y Berlín."
    },
    "tiger": {
      "text": [
        "En otoño de 1912 Franz viaja a París con August Macke. Allí conocen al pintor Robert Delaunay, cuyos colores luminosos, quebrados en facetas, impresionan fuertemente a ambos.",
        "«El tigre» muestra cuánto se abre Franz, en esa época, a las formas angulosas del cubismo. El animal se agazapa tenso entre planos de color nítidos, como si pudiera saltar en cualquier momento.",
        "Poco antes el cuadro se había visto en la exposición del Sonderbund en Colonia, una de las muestras importantes del arte moderno en Alemania."
      ],
      "fact": "Franz Marc pintó el tigre en 1912 en Sindelsdorf. Hoy el cuadro cuelga en la Städtische Galerie im Lenbachhaus de Múnich."
    },
    "foxes": {
      "text": [
        "En 1913 los cuadros de Franz Marc se vuelven todavía más atrevidos. Las formas se quiebran en cristales, los colores brillan y chocan con dureza. Dos zorros parecen entrelazados; al principio casi hay que buscarlos.",
        "En esos meses no piensa solo en animales sueltos, sino en el gran tejido de la naturaleza. Al mismo tiempo ayuda en Berlín a preparar el «Primer Salón de Otoño Alemán», una gran exposición internacional de arte moderno.",
        "«Los zorros» pertenecen a los cuadros en los que el animal ya se está convirtiendo casi en forma pura."
      ],
      "fact": "Desde 1962 el cuadro perteneció al Museum Kunstpalast de Düsseldorf. En 2022 la ciudad lo devolvió a los herederos del coleccionista judío Kurt Grawi; en marzo de 2022 fue subastado en Christie’s, en Londres. Su ubicación actual no se ha confirmado públicamente."
    },
    "fate": {
      "text": [
        "En el mismo año nace «Destinos de animales». Entre formas puntiagudas y amenazantes se reconocen animales; en el centro, un corzo que alza la cabeza bien arriba. En el reverso del cuadro Franz escribe: «Y todo ser es sufrimiento en llamas».",
        "El cuadro cuelga en 1913 en el Primer Salón de Otoño Alemán de Berlín. El título «Destinos de animales» se lo da su amigo Paul Klee.",
        "Más tarde, ya en la guerra, Franz escribe a Maria que el cuadro le parece un presagio de esta guerra: terrible y estremecedor. Apenas puede creer que lo haya pintado."
      ],
      "fact": "En 1917 el cuadro resultó dañado en un incendio. Paul Klee lo restauró dos años después."
    },
    "deer": {
      "text": [
        "A principios de 1914 Franz y Maria se mudan a Ried, no lejos de Kochel am See. Allí nacen sus últimos grandes cuadros, unos todavía con animales, otros ya casi sin asunto.",
        "«Ciervos en el bosque II» muestra tres ciervos en un bosque de verde, azul y rojo. Los animales parecen serenos, firmemente integrados en los colores del bosque. Es uno de sus últimos cuadros de animales.",
        "En agosto de 1914 comienza la guerra, y Franz Marc es llamado al servicio militar. En septiembre cae su amigo August Macke. La pérdida lo hiere profundamente."
      ],
      "fact": "En una carta desde el frente, en 1915, Franz escribió que desde temprano había sentido a los seres humanos como feos, y al animal más hermoso y más puro. Luego había descubierto también en el animal tantas cosas adversas que sus cuadros se habían vuelto por sí mismos cada vez más abstractos."
    },
    "forms": {
      "text": [
        "En Ried, en 1914, Franz pinta varios cuadros que consisten casi solo en color y movimiento: formas alegres, juguetonas, en lucha y rotas. En el presente cuadro un rojo luminoso y un azul oscuro profundo chocan uno contra otro.",
        "La guerra interrumpe esta obra. El 4 de marzo de 1916 Franz Marc es alcanzado por un fragmento de granada en una salida de reconocimiento cerca de Verdún. Tiene solo 36 años.",
        "Más tarde Maria lo hace trasladar a Kochel am See. Allí yace enterrado hasta hoy, no lejos del paisaje en el que nacieron tantos de sus cuadros."
      ],
      "fact": "En 1986 se inauguró en Kochel am See el Franz Marc Museum. Muestra obras suyas y de amigos artistas del círculo del Jinete Azul."
    }
  });
})();
