// v10.43 ES content for Henri Rousseau’s life journey (1844–1910). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "hrrendezvous": {
    "title": "Encuentro en el bosque",
    "museum": "National Gallery of Art, Washington"
  },
  "hrsawmill": {
    "title": "Aserradero en las afueras de París",
    "museum": "Art Institute of Chicago"
  },
  "hrboy": {
    "title": "Niño sobre las rocas",
    "museum": "National Gallery of Art, Washington"
  },
  "hroutskirts": {
    "title": "Afueras de París",
    "museum": "Museo de Arte de Cleveland"
  },
  "hrbievre": {
    "title": "Las orillas del Bièvre cerca de Bicêtre",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "hrequatorial": {
    "title": "La selva ecuatorial",
    "museum": "National Gallery of Art, Washington"
  },
  "hrmonkeys": {
    "title": "Bosque tropical con monos",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.rousseau = {
  "title": "El camino de vida de Henri Rousseau",
  "part": "París y sus afueras",
  "subtitle": "Afueras, bosques y selvas imaginadas",
  "intro": "Viaja por la vida de Henri Rousseau: de las afueras de París, donde trabaja como aduanero, a las selvas que imagina en sus últimos años. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Henri Rousseau muere en París el 2 de septiembre de 1910.",
    "Pintores jóvenes como Pablo Picasso ya lo admiran en vida, y hoy sus cuadros cuelgan en museos de todo el mundo."
  ],
  "epilogue": "Henri Rousseau muere en París el 2 de septiembre de 1910. El camino lleva de las afueras de la ciudad a las selvas imaginadas de sus últimos años.",
  "life": "1844–1910"
};
  P.stations = Object.assign(P.stations || {}, {
  "rousseau1": {
    "place": "Aduanero y pintor en París",
    "when": "1844–1905",
    "mapLabel": "París",
    "intro": [
      "Henri Rousseau nace el 21 de mayo de 1844 en Laval, en el oeste de Francia, y desde 1871 trabaja en un puesto de aduanas a las afueras de París.",
      "Aprende a pintar por su cuenta, expone desde 1886 en el Salón de los Independientes y a partir de 1893 se dedica solo a pintar."
    ]
  },
  "rss2": {
    "place": "Últimos años: orillas y selvas",
    "when": "1906–1910",
    "mapLabel": "París",
    "intro": [
      "En sus últimos años Rousseau pinta grandes cuadros de selva, aunque nunca ha salido de Francia.",
      "Estudia las plantas en los invernaderos del Jardin des Plantes de París y en libros ilustrados."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hrrendezvous": {
    "text": [
      "En lo hondo de un bosque otoñal se encuentran dos jinetes con ropa antigua.",
      "Sobre ellos las ramas sin hojas de los árboles forman una fina red ante el cielo claro."
    ],
    "fact": "1889. National Gallery of Art, Washington."
  },
  "hrsawmill": {
    "text": [
      "Detrás de un seto se alzan los edificios claros de un aserradero con una chimenea humeante.",
      "Un camino sale de la ciudad entre árboles y prados."
    ],
    "fact": "hacia 1893–1895. Art Institute of Chicago."
  },
  "hrboy": {
    "text": [
      "Un niño pequeño con blusón oscuro y medias a rayas está sentado sobre rocas puntiagudas.",
      "Parece tan grande como un gigante, porque las rocas parecen toda una cordillera."
    ],
    "fact": "1895–1897. National Gallery of Art, Washington."
  },
  "hroutskirts": {
    "text": [
      "Un canal con un pequeño puente pasa junto a una casa de tejado rojo, y por la orilla pasea la gente.",
      "Por encima de todo grandes nubes blancas cruzan el cielo azul."
    ],
    "fact": "hacia 1897–1905. Museo de Arte de Cleveland."
  },
  "hrbievre": {
    "text": [
      "Árboles altos y esbeltos bordean un camino junto al Bièvre, un pequeño río al sur de París.",
      "Rousseau pinta cada hoja y cada rama con gran cuidado."
    ],
    "fact": "hacia 1908–1909. Metropolitan Museum of Art, Nueva York."
  },
  "hrequatorial": {
    "text": [
      "Hojas enormes en muchos tonos de verde llenan todo el cuadro, y entre ellas brillan flores rosas y blancas.",
      "Abajo, en la espesura, un animal asoma entre las plantas."
    ],
    "fact": "1909. National Gallery of Art, Washington."
  },
  "hrmonkeys": {
    "text": [
      "Unos monos trepan y se sientan en un denso bosque de palmeras, hierbas y plantas rojas.",
      "Rousseau pinta el cuadro en el último año de su vida."
    ],
    "fact": "1910. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
