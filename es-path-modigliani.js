// v10.43 ES content for Amedeo Modigliani’s life journey (1884–1920). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "mgpompadour": {
    "title": "Madame Pompadour",
    "museum": "Art Institute of Chicago"
  },
  "mglipchitz": {
    "title": "Jacques y Berthe Lipchitz",
    "museum": "Art Institute of Chicago"
  },
  "mgdeleu": {
    "title": "Monsieur Deleu",
    "museum": "National Gallery of Art, Washington"
  },
  "mgbakst": {
    "title": "Léon Bakst",
    "museum": "National Gallery of Art, Washington"
  },
  "mgsinger": {
    "title": "Cantante de café",
    "museum": "National Gallery of Art, Washington"
  },
  "mgkisling": {
    "title": "Madame Kisling",
    "museum": "National Gallery of Art, Washington"
  },
  "mggreen": {
    "title": "Muchacha con blusa verde",
    "museum": "National Gallery of Art, Washington"
  },
  "mgredhair": {
    "title": "Mujer de pelo rojo",
    "museum": "National Gallery of Art, Washington"
  },
  "mgadrienne": {
    "title": "Adrienne (Mujer con flequillo)",
    "museum": "National Gallery of Art, Washington"
  },
  "mgsoutine": {
    "title": "Chaim Soutine",
    "museum": "National Gallery of Art, Washington"
  },
  "mgsailor": {
    "title": "Muchacha con blusa de marinero",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "mgitalian": {
    "title": "La italiana",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "mgroma": {
    "title": "Mujer romaní con bebé",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.modigliani = {
  "title": "El camino de vida de Amedeo Modigliani",
  "part": "Rostros",
  "subtitle": "De París a Niza",
  "intro": "Viaja con Amedeo Modigliani por sus últimos años: a amigos, artistas y personas que pinta con cuellos largos y rostros estrechos. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Amedeo Modigliani muere en 1920 en París.",
    "Sus retratos cuelgan hoy en museos de todo el mundo."
  ],
  "epilogue": "Amedeo Modigliani muere en 1920. El camino recorre sus años en París, con retratos de amigos y de desconocidos, hasta la costa mediterránea de Niza.",
  "life": "1884–1920"
};
  P.stations = Object.assign(P.stations || {}, {
  "mgs1": {
    "place": "París: amigos y clientes",
    "when": "1915–1916",
    "mapLabel": "París",
    "intro": [
      "Amedeo Modigliani nace en 1884 en Livorno, Italia, y se instala en París en 1906.",
      "Al principio trabaja también como escultor, pero a finales de 1913 o principios de 1914 vuelve por completo a la pintura."
    ]
  },
  "mgs2": {
    "place": "París: rostros en 1917",
    "when": "1917",
    "mapLabel": "París",
    "intro": [
      "En 1916 Léopold Zborowski es el marchante de Modigliani.",
      "Como en sus esculturas, Modigliani da a las personas cuellos largos y rostros estrechos."
    ]
  },
  "mgs3": {
    "place": "Miradas tranquilas",
    "when": "1917–1918",
    "mapLabel": "Francia",
    "intro": [
      "Hacia 1914 Modigliani conoce en Montparnasse al joven pintor Chaim Soutine, y los dos se hacen amigos íntimos.",
      "Muchos de sus retratos están muy estilizados, y a menudo deja los ojos vacíos."
    ]
  },
  "mgs4": {
    "place": "Junto al Mediterráneo",
    "when": "1918–1919",
    "mapLabel": "Niza",
    "intro": [
      "De marzo de 1918 a mayo de 1919 Modigliani vive en el sur de Francia para reponerse, sobre todo en Niza.",
      "Lejos de sus amigos, pinta a jóvenes sirvientas, dependientas y niños de la zona."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mgpompadour": {
    "text": [
      "Una mujer con un gran sombrero negro mira hacia fuera del cuadro ante un fondo de campos grises y verdes.",
      "Según el museo, el título alude a Madame de Pompadour en la corte del rey Luis XV, y el llamativo sombrero da al cuadro un toque alegre."
    ],
    "fact": "1915. Art Institute of Chicago."
  },
  "mglipchitz": {
    "text": [
      "El artista Jacques Lipchitz está de pie detrás de su esposa, la poeta rusa Berthe Lipchitz, que lleva un cuello blanco.",
      "Lipchitz encarga el retrato doble con motivo de su boda, y según él Modigliani lo pinta en solo dos días."
    ],
    "fact": "1916. Art Institute of Chicago."
  },
  "mgdeleu": {
    "text": [
      "Un joven de pelo negro lleva una chaqueta marrón rojiza y un pañuelo blanco al cuello.",
      "En 1943 el cuadro todavía se expuso con el título «Retrato de Kisling»."
    ],
    "fact": "1916. National Gallery of Art, Washington."
  },
  "mgbakst": {
    "text": [
      "Un hombre con bigote lleva un pañuelo azul intenso con una chaqueta oscura de dibujos dorados.",
      "El cuadro perteneció primero al propio Léon Bakst, y en 2013 la National Gallery lo mostró en una exposición sobre Diáguilev y los Ballets Rusos."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgsinger": {
    "text": [
      "Una joven con vestido negro está sentada con las manos juntas delante de una pared gris claro.",
      "El cuadro estuvo primero en manos del marchante de Modigliani, Léopold Zborowski, en París."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgkisling": {
    "text": [
      "La mujer lleva el pelo corto castaño rojizo con flequillo recto, una camisa blanca y una corbata roja.",
      "Abajo a la derecha aparece la firma «modigliani»."
    ],
    "fact": "hacia 1917. National Gallery of Art, Washington."
  },
  "mggreen": {
    "text": [
      "Una muchacha de pelo rubio rojizo lleva una blusa verde claro delante de una pared marrón rojiza.",
      "En una subasta en París en 1927 el cuadro se llamaba «Le Corsage Vert», la blusa verde."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgredhair": {
    "text": [
      "Una mujer de pelo rojo y vestido negro apoya el brazo en el respaldo de una silla.",
      "En 1931 el cuadro se mostró en Pittsburgh con el título «Mujer de negro»."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgadrienne": {
    "text": [
      "Una mujer de pelo rojo oscuro y flequillo apoya la cabeza en la mano.",
      "Un marchante compró el cuadro en 1927 a un artista de Montparnasse, amigo de Modigliani."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgsoutine": {
    "text": [
      "El pintor Chaim Soutine está sentado con las manos en el regazo y mira hacia fuera del cuadro con los ojos entornados.",
      "Modigliani pinta varias veces a su amigo, diez años más joven, y en 1916 se lo presenta a su marchante Zborowski."
    ],
    "fact": "1918. National Gallery of Art, Washington."
  },
  "mgsailor": {
    "text": [
      "Una muchacha de pelo oscuro recogido lleva una blusa gris azulada con un ancho cuello blanco.",
      "El cuadro llegó al Metropolitan Museum en 1960 como regalo de Charles F. Iklé."
    ],
    "fact": "1918. Metropolitan Museum of Art, Nueva York."
  },
  "mgitalian": {
    "text": [
      "Una mujer con vestido negro y cuello blanco está sentada con las manos juntas delante de una pared rojo anaranjado.",
      "No se sabe quién es; quizá Modigliani la eligió porque, como él, venía de Italia."
    ],
    "fact": "hacia 1918–1919. Metropolitan Museum of Art, Nueva York."
  },
  "mgroma": {
    "text": [
      "Una joven con blusa blanca bordada en rojo sostiene en brazos a un niño envuelto en paños azul oscuro.",
      "En 1930 la Bienal de Venecia mostró el cuadro con el título «Maternità», maternidad."
    ],
    "fact": "1919. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
