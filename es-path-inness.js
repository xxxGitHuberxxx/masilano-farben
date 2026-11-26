// v10.43 ES content for George Inness’s life journey (1825–1894). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "incrossing": {
    "title": "Cruzando el vado",
    "museum": "Art Institute of Chicago"
  },
  "inoldmill": {
    "title": "El viejo molino",
    "museum": "Art Institute of Chicago"
  },
  "inwoodchop": {
    "title": "El leñador",
    "museum": "Museo de Arte de Cleveland"
  },
  "indurham": {
    "title": "Durham, Connecticut",
    "museum": "Museo de Arte de Cleveland"
  },
  "inwatergap": {
    "title": "Delaware Water Gap",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "inwintersky": {
    "title": "Un cielo de invierno",
    "museum": "Museo de Arte de Cleveland"
  },
  "insummercats": {
    "title": "Verano en los Catskill",
    "museum": "Art Institute of Chicago"
  },
  "inharvestdel": {
    "title": "Escena de cosecha en el valle del Delaware",
    "museum": "National Gallery of Art, Washington"
  },
  "incatskill": {
    "title": "Las montañas Catskill",
    "museum": "Art Institute of Chicago"
  },
  "inalban": {
    "title": "Tormenta que se acerca desde los montes Albanos",
    "museum": "Museo de Arte de Cleveland"
  },
  "incampagna": {
    "title": "A través de la campiña romana",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "intivoli": {
    "title": "Olivos en Tívoli",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "inbarberini": {
    "title": "Pinar de la Villa Barberini",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "inetretat": {
    "title": "Ladera en Étretat",
    "museum": "National Gallery of Art, Washington"
  },
  "infleecy": {
    "title": "Nubes algodonosas",
    "museum": "Museo de Arte de Cleveland"
  },
  "insisters": {
    "title": "Las hermanas",
    "museum": "Art Institute of Chicago"
  },
  "inmillpond": {
    "title": "El estanque del molino",
    "museum": "Art Institute of Chicago"
  },
  "intarpon": {
    "title": "Primera hora de la mañana, Tarpon Springs",
    "museum": "Art Institute of Chicago"
  },
  "insunnyautumn": {
    "title": "Día soleado de otoño",
    "museum": "Museo de Arte de Cleveland"
  },
  "inshower": {
    "title": "Después de un chubasco de verano",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.inness = {
  "title": "El camino de vida de George Inness",
  "part": "Nueva York, Nueva Inglaterra, Italia y Montclair",
  "subtitle": "Luz, nubes y campo abierto",
  "intro": "Viaja por la vida de George Inness: de los valles fluviales cerca de Nueva York, pasando por Nueva Inglaterra e Italia, hasta Montclair, en Nueva Jersey. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "George Inness muere en 1894 durante un viaje a Escocia.",
    "En unos cincuenta años creó más de mil obras."
  ],
  "epilogue": "George Inness muere en 1894. El camino lleva de Nueva York, pasando por Nueva Inglaterra, Roma y Normandía, hasta Montclair.",
  "life": "1825–1894"
};
  P.stations = Object.assign(P.stations || {}, {
  "ins1": {
    "place": "Primeros paisajes cerca de Nueva York",
    "when": "1848–1858",
    "mapLabel": "Nueva York",
    "intro": [
      "George Inness nace en 1825 en Newburgh, en el estado de Nueva York, y crece en Nueva York y Newark; en 1844 expone por primera vez en la National Academy of Design.",
      "En 1851 viaja por primera vez a Italia, a Roma y Florencia; más tarde, en Francia, conoce los cuadros de los pintores de Barbizon."
    ]
  },
  "ins2": {
    "place": "Medfield y Eagleswood",
    "when": "1861–1870",
    "mapLabel": "Nueva Inglaterra",
    "intro": [
      "En junio de 1860 Inness se traslada a Medfield, en Massachusetts; en otoño de 1863 se convierte en profesor de dibujo en Eagleswood, en Nueva Jersey, donde tiene entre sus alumnos a Louis Comfort Tiffany.",
      "Las enseñanzas del pensador sueco Emanuel Swedenborg marcan cada vez más su fe y su arte."
    ]
  },
  "ins3": {
    "place": "Roma, la campiña y Normandía",
    "when": "1871–1876",
    "mapLabel": "Italia y Francia",
    "intro": [
      "En 1870 Inness se marcha con su familia a Europa durante cuatro años; en Roma alquila un estudio en la Via Sistina que, según se dice, ya había ocupado Claude Lorrain.",
      "Pasa el verano de 1874 en Normandía; después pinta en Boston cuadros inspirados en su estancia en Italia."
    ]
  },
  "ins4": {
    "place": "Montclair, Milton y Nantucket",
    "when": "1881–1889",
    "mapLabel": "Montclair",
    "intro": [
      "En junio de 1878 Inness alquila una finca en Montclair, en Nueva Jersey; a principios de la década de 1880 pasa algunos veranos en Milton, en Massachusetts, y en Nantucket.",
      "En diciembre de 1884 compra la finca de Montclair y en febrero de 1885 se instala allí definitivamente, aunque conserva su estudio en Nueva York."
    ]
  },
  "ins5": {
    "place": "Cuadros tardíos llenos de luz",
    "when": "1892–1894",
    "mapLabel": "Montclair y Florida",
    "intro": [
      "Desde Montclair Inness viaja mucho, a menudo por motivos de salud, a las cataratas del Niágara, a Virginia, a California y a Tarpon Springs, en Florida.",
      "En sus cuadros tardíos las formas se disuelven en luz y colores translúcidos."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "incrossing": {
    "text": [
      "Bajo árboles altos, un hombre cruza a caballo un río poco profundo, mientras unas vacas vadean el agua a su lado.",
      "En el reverso del lienzo figura la firma «Geo. Inness 1848»."
    ],
    "fact": "1848. Art Institute of Chicago."
  },
  "inoldmill": {
    "text": [
      "Un molino rojo, muy iluminado, se alza junto a un arroyo; delante se ven pequeñas figuras y alrededor se levantan árboles oscuros.",
      "Inness prefiere pintar tierras cultivadas antes que la naturaleza salvaje; el viejo molino habla de la tranquila vida rural y, al mismo tiempo, de los cambios traídos por la industria."
    ],
    "fact": "1849. Art Institute of Chicago."
  },
  "inwoodchop": {
    "text": [
      "Un imponente grupo de árboles se alza sobre un suelo rocoso; detrás se abre un valle con colinas azules.",
      "Inness firma el cuadro abajo a la izquierda con «G. Inness 1849»."
    ],
    "fact": "1849. Museo de Arte de Cleveland."
  },
  "indurham": {
    "text": [
      "Unas ovejas pastan en un amplio prado ante una hilera de árboles; en primer plano se ve una figura vestida de rojo en la hierba.",
      "Bajo la firma visible, una imagen infrarroja revela otra: «G. Inness 1858»."
    ],
    "fact": "1858. Museo de Arte de Cleveland."
  },
  "inwatergap": {
    "text": [
      "Un arcoíris se alza sobre el Delaware; en la orilla beben unas vacas y una barca avanza por el agua.",
      "El cuadro nace poco después de la mudanza a Medfield; sus pinceladas expresivas y sus ricas veladuras muestran lo que Inness aprendió de la pintura de Barbizon y de la holandesa."
    ],
    "fact": "1861. Metropolitan Museum of Art, Nueva York."
  },
  "inwintersky": {
    "text": [
      "Sobre una tierra yerma y helada brilla un cielo de atardecer rosa y amarillo; la luz cálida contrasta con el azul frío del suelo.",
      "Al principio había una figura en el borde izquierdo del estanque, que Inness cubrió después con pintura."
    ],
    "fact": "1866. Museo de Arte de Cleveland."
  },
  "insummercats": {
    "text": [
      "Unas vacas pastan en un prado verde brillante; detrás se alza una larga montaña azul.",
      "Un árbol alto y solitario y una granja se recortan en la clara luz del verano."
    ],
    "fact": "1867. Art Institute of Chicago."
  },
  "inharvestdel": {
    "text": [
      "La luz del sol cae por un claro entre las nubes sobre los amplios campos del valle.",
      "En 1989 el Walker Art Center vende el cuadro para crear con lo obtenido un fondo de adquisiciones de arte contemporáneo."
    ],
    "fact": "1867. National Gallery of Art, Washington."
  },
  "incatskill": {
    "text": [
      "Una iglesia, campos cuidadosamente cultivados y un almiar muestran una tierra moldeada por el ser humano.",
      "A mediados del siglo XIX los Catskill son el principal destino turístico de Estados Unidos, cerca de las ciudades y llenos de amplias vistas."
    ],
    "fact": "1870. Art Institute of Chicago."
  },
  "inalban": {
    "text": [
      "Pesadas nubes grises avanzan sobre la llanura; en primer plano se ven pequeñas figuras en un camino.",
      "Inness firma el cuadro con «Rome 1871»; lo pinta, por tanto, durante sus años en Roma."
    ],
    "fact": "1871. Museo de Arte de Cleveland."
  },
  "incampagna": {
    "text": [
      "Bajo un amplio cielo azul se extiende la llanura verde de la campiña; en el horizonte se ven casas rojas y pinos piñoneros.",
      "La hoja está pintada con acuarela y gouache; en ella se combinan formas enérgicas y delicadas aguadas de color."
    ],
    "fact": "1872. Metropolitan Museum of Art, Nueva York."
  },
  "intivoli": {
    "text": [
      "Unos olivos se alzan en una ladera bajo la cual una amplia llanura clara se extiende hasta el horizonte.",
      "Inness pinta la hoja con gouache y acuarela sobre papel azul con fibras de colores."
    ],
    "fact": "1873. Metropolitan Museum of Art, Nueva York."
  },
  "inbarberini": {
    "text": [
      "Altos pinos piñoneros forman un bosquecillo oscuro ante un cielo claro y cálido.",
      "Inness pinta este gran cuadro en Boston en 1876, inspirado por su estancia en Italia."
    ],
    "fact": "1876. Metropolitan Museum of Art, Nueva York."
  },
  "inetretat": {
    "text": [
      "Una mujer con cofia blanca conduce unas ovejas por un camino de la ladera boscosa, mientras al lado pastan unas vacas.",
      "Étretat está en la costa de Normandía; en 1879 el cuadro se subasta en Nueva York como «Etretat, Coast of France»."
    ],
    "fact": "1876. National Gallery of Art, Washington."
  },
  "infleecy": {
    "text": [
      "Un camino rural se pierde en la distancia entre piedras y árboles; arriba pasan nubes blancas y grises.",
      "Inness firma el cuadro de forma escueta: «G. Inness / 81»."
    ],
    "fact": "1881. Museo de Arte de Cleveland."
  },
  "insisters": {
    "text": [
      "Dos mujeres jóvenes están muy juntas en un jardín; detrás de ellas hay una regadera sobre la hierba.",
      "El pequeño cuadro es insólito en Inness, que pinta casi solo paisajes; está pintado al óleo sobre cartón."
    ],
    "fact": "1882. Art Institute of Chicago."
  },
  "inmillpond": {
    "text": [
      "Un árbol de un naranja brillante se alza en la orilla de un estanque tranquilo, en el que a lo lejos una pequeña figura rema en una barca.",
      "Intensos naranjas, verdes y azules animan la escena serena; Inness cuenta más con el color y la atmósfera que con los detalles."
    ],
    "fact": "1889. Art Institute of Chicago."
  },
  "intarpon": {
    "text": [
      "Entre los suaves rosas y azules del amanecer, una figura diminuta con sombrero rojo está de pie entre árboles altos y esbeltos.",
      "La luz y el paisaje de Florida inspiran a Inness este cuadro."
    ],
    "fact": "1892. Art Institute of Chicago."
  },
  "insunnyautumn": {
    "text": [
      "Árboles otoñales amarillos y rojos se alzan en un prado, y sus formas se difuminan en la luz translúcida.",
      "El cuadro muestra el estilo tardío de Inness, en el que el paisaje parece casi una aparición."
    ],
    "fact": "1892. Museo de Arte de Cleveland."
  },
  "inshower": {
    "text": [
      "Sobre un prado de verde fresco con árboles redondeados se alejan las nubes de lluvia, y a la derecha aparece un arcoíris.",
      "Inness firma el cuadro abajo a la derecha con «G. Inness 1894»."
    ],
    "fact": "1894. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
