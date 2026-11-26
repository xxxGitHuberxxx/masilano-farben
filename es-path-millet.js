// v10.43 ES content for Jean-François Millet’s life journey (1814–1875). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Musée d’Orsay, Paris": "Musée d’Orsay, París",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "mlmartin": {
    "title": "Monsieur Martin",
    "museum": "Museo de Arte de Cleveland"
  },
  "mllisle": {
    "title": "Leconte de Lisle",
    "museum": "National Gallery of Art, Washington"
  },
  "mlman": {
    "title": "Retrato de un hombre",
    "museum": "National Gallery of Art, Washington"
  },
  "mlstorm": {
    "title": "Huyendo de la tormenta",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "mlchickens": {
    "title": "Mujer dando de comer a las gallinas",
    "museum": "Art Institute of Chicago"
  },
  "mlgarden": {
    "title": "Escena de jardín",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "mlrock": {
    "title": "Pastora sentada en una roca",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "mlrake": {
    "title": "Mujer con rastrillo",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gleaners": {
    "title": "Las espigadoras",
    "museum": "Musée d’Orsay, París"
  },
  "angelus": {
    "title": "El Ángelus",
    "museum": "Musée d’Orsay, París"
  },
  "mlshearers": {
    "title": "Los esquiladores",
    "museum": "Art Institute of Chicago"
  },
  "mlcalf": {
    "title": "Campesinos llevando a casa un ternero nacido en el campo",
    "museum": "Art Institute of Chicago"
  },
  "mlcows": {
    "title": "Llamando a las vacas",
    "museum": "National Gallery of Art, Washington"
  },
  "mlauvergne": {
    "title": "En Auvernia",
    "museum": "Art Institute of Chicago"
  },
  "mllittle": {
    "title": "La pequeña pastora",
    "museum": "Art Institute of Chicago"
  },
  "mlkeeper": {
    "title": "La guardiana del rebaño",
    "museum": "Art Institute of Chicago"
  },
  "mlhaystacks": {
    "title": "Almiares: otoño",
    "museum": "Metropolitan Museum of Art, Nueva York"
  }
});
  P.paths = P.paths || {};
  P.paths.millet = {
  "title": "El camino de vida de Jean-François Millet",
  "part": "Normandía, Barbizon y Auvernia",
  "subtitle": "Retratos, trabajo en el campo y rebaños",
  "intro": "Viaja por la vida de Jean-François Millet: de sus primeros retratos en Cherburgo y París y los cuadros del campo de Barbizon a los paisajes de sus últimos años. La mayoría de los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Jean-François Millet muere en Barbizon el 20 de enero de 1875.",
    "Sus cuadros de la vida en el campo inspiran después a muchos pintores, entre ellos Vincent van Gogh, que copia numerosos motivos de Millet."
  ],
  "epilogue": "Jean-François Millet muere en Barbizon el 20 de enero de 1875. El camino lleva de los primeros retratos a los rebaños y almiares de sus últimos años.",
  "life": "1814–1875"
};
  P.stations = Object.assign(P.stations || {}, {
  "mls1": {
    "place": "De Gréville a París",
    "when": "1814–1848",
    "mapLabel": "Cherburgo",
    "intro": [
      "Jean-François Millet nace el 4 de octubre de 1814 en Gruchy, cerca de Gréville, en la costa de Normandía, en una familia de campesinos.",
      "Aprende a pintar en Cherburgo, va a París en 1837 para estudiar con Paul Delaroche y al principio vive de los retratos."
    ]
  },
  "millet1": {
    "place": "Barbizon: el trabajo en el campo",
    "when": "1849–1862",
    "mapLabel": "Barbizon",
    "intro": [
      "En 1849 Millet se traslada con su familia a Barbizon, junto al bosque de Fontainebleau, y se queda allí el resto de su vida.",
      "Allí pinta campesinas, pastoras y trabajadores del campo con calma y seriedad, sin embellecerlos."
    ]
  },
  "mls3": {
    "place": "Últimos años: Vichy, Auvernia y Barbizon",
    "when": "1863–1875",
    "mapLabel": "Vichy",
    "intro": [
      "En la década de 1860 Millet se hace más conocido; con su mujer viaja varios veranos a Vichy y pasea por las colinas de Auvernia.",
      "En sus últimos cuadros ganan importancia el cielo, la luz y el paisaje, y en 1868 recibe la cruz de la Legión de Honor."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mlmartin": {
    "text": [
      "Un hombre con levita oscura y cuello de camisa blanco mira con seriedad desde un fondo oscuro.",
      "Hacia 1840 Millet pinta sobre todo retratos de vecinos de Cherburgo."
    ],
    "fact": "1840. Museo de Arte de Cleveland."
  },
  "mllisle": {
    "text": [
      "Un joven con abrigo azul y pañuelo rojo apoya una mano en un pretil de piedra.",
      "El retratado es Charles Leconte de Lisle, que más tarde será conocido en París como poeta."
    ],
    "fact": "hacia 1840–1841. National Gallery of Art, Washington."
  },
  "mlman": {
    "text": [
      "Un joven de pelo oscuro y patillas está de medio lado, con una mano en el bolsillo de la levita.",
      "Millet coloca la figura oscura ante una pared clara y cálida."
    ],
    "fact": "hacia 1845. National Gallery of Art, Washington."
  },
  "mlstorm": {
    "text": [
      "Una mujer con un haz de leña y un muchacho corren a casa por un campo oscuro en medio del viento.",
      "Sobre ellos se acercan nubes pesadas y el pañuelo de la mujer ondea en la tormenta."
    ],
    "fact": "hacia 1846. Metropolitan Museum of Art, Nueva York."
  },
  "mlchickens": {
    "text": [
      "Una campesina echa grano a las gallinas delante de un muro, mientras un niño pequeño se agarra a su falda.",
      "La luz cae cálida sobre la ropa de ambos."
    ],
    "fact": "1846–1848. Art Institute of Chicago."
  },
  "mlgarden": {
    "text": [
      "Un hombre con sombrero trabaja de rodillas en un huerto; detrás de él dos mujeres y un niño trabajan entre los bancales.",
      "Al fondo hay casas de campo bajas bajo grandes árboles."
    ],
    "fact": "1854. Metropolitan Museum of Art, Nueva York."
  },
  "mlrock": {
    "text": [
      "Una pastora con una capa clara está sentada en una roca a la sombra de un seto y hace punto.",
      "A la izquierda se abre la vista a una llanura soleada con su rebaño."
    ],
    "fact": "1856. Metropolitan Museum of Art, Nueva York."
  },
  "mlrake": {
    "text": [
      "Una campesina junta el heno con un largo rastrillo de madera; a su lado hay un pequeño montón de heno.",
      "A lo lejos trabajan otras personas en el prado claro."
    ],
    "fact": "hacia 1856–1857. Metropolitan Museum of Art, Nueva York."
  },
  "gleaners": {
    "text": [
      "Tres campesinas se inclinan sobre el campo ya segado y recogen las últimas espigas.",
      "Detrás de ellas la rica cosecha está en las gavillas — muy cerca, y sin embargo no para ellas."
    ],
    "fact": "1857. Musée d’Orsay, París."
  },
  "angelus": {
    "text": [
      "Dos campesinos en el campo dejan el trabajo y rezan.",
      "Al fondo hay una iglesia: de allí suena el Ángelus, la oración de la mañana, del mediodía y de la tarde."
    ],
    "fact": "1857–1859. Musée d’Orsay, París."
  },
  "mlshearers": {
    "text": [
      "Bajo un cobertizo, un campesino y una campesina esquilan juntos una oveja.",
      "La mujer se inclina con las tijeras sobre el animal y el hombre lo sujeta."
    ],
    "fact": "hacia 1857–1861. Art Institute of Chicago."
  },
  "mlcalf": {
    "text": [
      "Dos hombres llevan a la granja un ternero recién nacido en unas angarillas de paja, y la vaca camina justo detrás.",
      "En la puerta de la granja una mujer y unos niños esperan su llegada."
    ],
    "fact": "1864. Art Institute of Chicago."
  },
  "mlcows": {
    "text": [
      "Un pastor de pie sobre una roca toca un cuerno y las vacas se acercan despacio.",
      "Millet dibuja la escena con pastel y lápiz ante un cielo rosado de atardecer."
    ],
    "fact": "hacia 1866. National Gallery of Art, Washington."
  },
  "mlauvergne": {
    "text": [
      "En una suave colina una pastora con chaqueta roja y una rueca está junto a sus ovejas, al lado de un gran grupo de árboles.",
      "Encima brilla un cielo azul con nubes claras."
    ],
    "fact": "hacia 1866–1869. Art Institute of Chicago."
  },
  "mllittle": {
    "text": [
      "Una niña con un gran chal está de pie junto a un árbol, con la cabeza inclinada, y sostiene un cayado.",
      "Detrás de ella pastan ovejas ante una llanura amplia y luminosa."
    ],
    "fact": "1868–1872. Art Institute of Chicago."
  },
  "mlkeeper": {
    "text": [
      "Una pastora está de pie en medio de su rebaño, y las ovejas pastan a su alrededor a la luz de la tarde.",
      "Detrás de ella una luz clara atraviesa las nubes."
    ],
    "fact": "1871–1874. Art Institute of Chicago."
  },
  "mlhaystacks": {
    "text": [
      "Tres grandes almiares se alzan en una amplia llanura, y delante pasta un rebaño de ovejas con su pastor.",
      "El cuadro forma parte de una serie de las cuatro estaciones en la que Millet trabaja en sus últimos años."
    ],
    "fact": "hacia 1874. Metropolitan Museum of Art, Nueva York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
