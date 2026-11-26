// v10.43 ES content for Mary Cassatt’s life journey (1844–1926). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "csbullfight": {
    "title": "Después de la corrida",
    "museum": "Art Institute of Chicago"
  },
  "csarmchair": {
    "title": "Niña en un sillón azul",
    "museum": "National Gallery of Art, Washington"
  },
  "csfan": {
    "title": "Mujer con abanico",
    "museum": "National Gallery of Art, Washington"
  },
  "csbalcony": {
    "title": "En un balcón",
    "museum": "Art Institute of Chicago"
  },
  "csloge": {
    "title": "El palco",
    "museum": "National Gallery of Art, Washington"
  },
  "cssusan": {
    "title": "Susan con sombrero de paja",
    "museum": "Art Institute of Chicago"
  },
  "cswindow": {
    "title": "Joven junto a la ventana",
    "museum": "National Gallery of Art, Washington"
  },
  "csbeach": {
    "title": "Niños jugando en la playa",
    "museum": "National Gallery of Art, Washington"
  },
  "csstrawhat": {
    "title": "Niña con sombrero de paja",
    "museum": "National Gallery of Art, Washington"
  },
  "cslady": {
    "title": "Retrato de una dama",
    "museum": "National Gallery of Art, Washington"
  },
  "cskiss": {
    "title": "El beso de buenas noches de la madre",
    "museum": "Art Institute of Chicago"
  },
  "csblackhat": {
    "title": "El sombrero negro",
    "museum": "National Gallery of Art, Washington"
  },
  "cszinnia": {
    "title": "Mujer con una zinnia roja (Ensueño)",
    "museum": "National Gallery of Art, Washington"
  },
  "csboating": {
    "title": "El paseo en barca",
    "museum": "National Gallery of Art, Washington"
  },
  "cssara": {
    "title": "Sara con gorro y abrigo",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.cassatt = {
  "title": "El camino de vida de Mary Cassatt",
  "part": "Sevilla, París y Beaufresne",
  "subtitle": "Mujeres, niños y el teatro",
  "intro": "Viaja por la vida de Mary Cassatt: de Sevilla, los palcos de los teatros de París y las exposiciones impresionistas a sus cuadros de madres e hijos. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Mary Cassatt muere el 14 de junio de 1926 en su casa de campo de Beaufresne, cerca de París.",
    "Ayuda a coleccionistas estadounidenses a comprar cuadros impresionistas que hoy cuelgan en muchos museos de Estados Unidos."
  ],
  "epilogue": "Mary Cassatt muere en Beaufresne el 14 de junio de 1926. El camino lleva de Sevilla y los teatros de París a los cuadros de madres e hijos.",
  "life": "1844–1926"
};
  P.stations = Object.assign(P.stations || {}, {
  "css1": {
    "place": "De Pensilvania a París",
    "when": "1844–1880",
    "mapLabel": "París",
    "intro": [
      "Mary Cassatt nace el 22 de mayo de 1844 cerca de Pittsburgh, en Estados Unidos, aprende a pintar en Filadelfia y viaja a París en 1866.",
      "En 1873 pinta en Sevilla; en 1877 Edgar Degas la invita a exponer con los impresionistas."
    ]
  },
  "css2": {
    "place": "París: amigas y niños",
    "when": "1881–1889",
    "mapLabel": "París",
    "intro": [
      "Cassatt vive en París con sus padres y su hermana Lydia y pinta a mujeres y niños de su entorno.",
      "Trabaja a menudo al pastel, porque así puede dibujar rápido y con colores intensos."
    ]
  },
  "cassatt1": {
    "place": "Madres, niños y Beaufresne",
    "when": "1890–1926",
    "mapLabel": "Beaufresne",
    "intro": [
      "Tras una gran exposición de grabados japoneses en París en 1890, los cuadros de Cassatt se vuelven más claros y planos.",
      "En 1894 compra la casa de campo de Beaufresne, al norte de París; hacia 1914 tiene que dejar de pintar por problemas de vista."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "csbullfight": {
    "text": [
      "Un torero con una chaquetilla ricamente bordada se apoya tras la corrida en una barrera de madera.",
      "Cassatt pinta el cuadro en 1873 en Sevilla, donde vive varios meses."
    ],
    "fact": "1873. Art Institute of Chicago."
  },
  "csarmchair": {
    "text": [
      "Una niña está tumbada, cansada, en un gran sillón azul, y en el sillón de al lado duerme un perro.",
      "Edgar Degas ayuda a Cassatt con el fondo del cuadro."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "csfan": {
    "text": [
      "Una joven está sentada en un sillón con un gran abanico dorado en el regazo.",
      "Detrás de ella otras figuras están solo esbozadas."
    ],
    "fact": "hacia 1878–1879. National Gallery of Art, Washington."
  },
  "csbalcony": {
    "text": [
      "Una mujer con un vestido claro lee el periódico, rodeada de flores y vegetación.",
      "Cassatt pinta la escena con pinceladas rápidas y claras."
    ],
    "fact": "1878–1879. Art Institute of Chicago."
  },
  "csloge": {
    "text": [
      "Dos jóvenes están sentadas en un palco de teatro; una sostiene un abanico abierto y la otra un ramo de flores.",
      "Detrás de ellas se reflejan las luces de la sala."
    ],
    "fact": "hacia 1878–1880. National Gallery of Art, Washington."
  },
  "cssusan": {
    "text": [
      "Una joven con sombrero de paja y cinta azul mira pensativa hacia abajo.",
      "Cassatt dibuja el retrato con pasteles suaves."
    ],
    "fact": "hacia 1883. Art Institute of Chicago."
  },
  "cswindow": {
    "text": [
      "Una joven vestida de blanco y con un gran sombrero está sentada junto a la ventana abierta, con un perrito en el regazo.",
      "Fuera se ven los tejados y las casas de París."
    ],
    "fact": "hacia 1883–1884. National Gallery of Art, Washington."
  },
  "csbeach": {
    "text": [
      "Dos niñas pequeñas juegan en la arena con un cubo y una pala.",
      "Al fondo, en el mar azul, navegan veleros."
    ],
    "fact": "1884. National Gallery of Art, Washington."
  },
  "csstrawhat": {
    "text": [
      "Una niña con un gran sombrero de paja y un delantal gris está de pie y mira seria.",
      "Tiene las manos cruzadas delante."
    ],
    "fact": "hacia 1886. National Gallery of Art, Washington."
  },
  "cslady": {
    "text": [
      "Una señora mayor de pelo gris, con una flor rosa en la cofia, está sentada de negro en un sillón.",
      "Sobre el respaldo hay una tela estampada de colores."
    ],
    "fact": "hacia 1887. National Gallery of Art, Washington."
  },
  "cskiss": {
    "text": [
      "Una madre sostiene en brazos a su hijo vestido de azul y le da un beso.",
      "El niño mira adormilado por encima de su hombro."
    ],
    "fact": "1888. Art Institute of Chicago."
  },
  "csblackhat": {
    "text": [
      "Una joven con un gran sombrero negro de plumas lleva un vestido azul claro.",
      "Cassatt deja el fondo casi vacío, así el sombrero y el vestido destacan aún más."
    ],
    "fact": "hacia 1890. National Gallery of Art, Washington."
  },
  "cszinnia": {
    "text": [
      "Una mujer con un vestido de rayas moradas sostiene una flor roja y apoya la cabeza en la mano.",
      "Detrás de ella brilla un jardín verde."
    ],
    "fact": "1891–1892. National Gallery of Art, Washington."
  },
  "csboating": {
    "text": [
      "Un hombre vestido de azul oscuro rema llevando a una mujer con un niño en el regazo por el mar azul.",
      "Cassatt pinta el cuadro en la costa cerca de Antibes, en el sur de Francia."
    ],
    "fact": "1893–1894. National Gallery of Art, Washington."
  },
  "cssara": {
    "text": [
      "Una niña con un gran gorro rosa sonríe con picardía.",
      "Cassatt dibuja la hoja con delicados trazos de pastel sobre papel marrón claro."
    ],
    "fact": "hacia 1904–1906. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
