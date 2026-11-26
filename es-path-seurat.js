// v10.43 ES content for Georges Seurat’s life journey (1859–1891). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "The Art Institute of Chicago": "The Art Institute of Chicago",
  "The Museum of Modern Art (MoMA), New York": "The Museum of Modern Art (MoMA), Nueva York"
});
  P.works = Object.assign(P.works || {}, {
  "sesaintouen": {
    "title": "Paisaje en Saint-Ouen",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "separapet": {
    "title": "Hombre apoyado en un pretil",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "sepontaubert": {
    "title": "El bosque de Pontaubert",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "semower": {
    "title": "El segador",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "sehaymakers": {
    "title": "Henificadoras en Montfermeil",
    "museum": "National Gallery of Art, Washington"
  },
  "sehoe": {
    "title": "Campesino con azada",
    "museum": "National Gallery of Art, Washington"
  },
  "sestonebreaker": {
    "title": "El picapedrero",
    "museum": "National Gallery of Art, Washington"
  },
  "sehaystacks": {
    "title": "Almiares",
    "museum": "National Gallery of Art, Washington"
  },
  "segardener": {
    "title": "El jardinero",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "sewateringcan": {
    "title": "La regadera – Jardín en Le Raincy",
    "museum": "National Gallery of Art, Washington"
  },
  "sesummer": {
    "title": "Paisaje de verano",
    "museum": "National Gallery of Art, Washington"
  },
  "seseine": {
    "title": "Vista del Sena",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "sefigures": {
    "title": "Figuras en un paisaje",
    "museum": "National Gallery of Art, Washington"
  },
  "sejattestudy": {
    "title": "Estudio para «Un domingo en La Grande Jatte»",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "sejattewood": {
    "title": "Estudio para «Un domingo en La Grande Jatte» (sobre tabla)",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "sejattesketch": {
    "title": "Boceto al óleo para «Un domingo en La Grande Jatte»",
    "museum": "Art Institute of Chicago"
  },
  "sejattenga": {
    "title": "Estudio para «La Grande Jatte»",
    "museum": "National Gallery of Art, Washington"
  },
  "sejattefigures": {
    "title": "Estudio de figuras para «La Grande Jatte»",
    "museum": "National Gallery of Art, Washington"
  },
  "jatte": {
    "title": "Un domingo por la tarde en la isla de la Grande Jatte",
    "museum": "The Art Institute of Chicago"
  },
  "sehonfleur": {
    "title": "El faro de Honfleur",
    "museum": "National Gallery of Art, Washington"
  },
  "seportenbessin": {
    "title": "Marina en Port-en-Bessin, Normandía",
    "museum": "National Gallery of Art, Washington"
  },
  "seseascape": {
    "title": "Marina (Gravelines)",
    "museum": "National Gallery of Art, Washington"
  },
  "gravelines": {
    "title": "El canal de Gravelines al atardecer",
    "museum": "The Museum of Modern Art (MoMA), Nueva York"
  },
  "segrayweather": {
    "title": "Tiempo gris, Grande Jatte",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "secircus": {
    "title": "Desfile de circo",
    "museum": "Metropolitan Museum of Art, Nueva York"
  }
});
  P.paths = P.paths || {};
  P.paths.seurat = {
  "title": "El camino de vida de Georges Seurat",
  "part": "París, los campos, el Sena y el mar",
  "subtitle": "El color en pequeños puntos",
  "intro": "Viaja por la breve vida de Georges Seurat: de los pequeños bocetos al óleo sobre tabla y los estudios para la isla de La Grande Jatte a los puertos del canal de la Mancha y el desfile del circo. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Georges Seurat muere en París el 29 de marzo de 1891, con solo 31 años.",
    "Con sus puntos de color fundó una manera de pintar que otros pintores continuaron."
  ],
  "epilogue": "Georges Seurat muere en París el 29 de marzo de 1891. El camino lleva de los primeros bocetos al óleo, pasando por La Grande Jatte, hasta el mar.",
  "life": "1859–1891"
};
  P.stations = Object.assign(P.stations || {}, {
  "ses1": {
    "place": "París: años de aprendizaje",
    "when": "1859–1881",
    "mapLabel": "París",
    "intro": [
      "Georges Seurat nace en París el 2 de diciembre de 1859 y desde 1878 estudia en la Academia de Bellas Artes.",
      "Lee libros sobre el color y la luz y pinta sus primeros pequeños paisajes."
    ]
  },
  "ses2": {
    "place": "Campesinos y campos",
    "when": "1881–1883",
    "mapLabel": "Montfermeil",
    "intro": [
      "En los pueblos al este de París, Seurat pinta campesinos trabajando, almiares y huertos.",
      "Los pequeños cuadros sobre tablillas caben en la tapa de su caja de pinturas."
    ]
  },
  "seurat1": {
    "place": "El Sena y La Grande Jatte",
    "when": "1882–1886",
    "mapLabel": "Grande Jatte",
    "intro": [
      "A orillas del Sena, cerca de París, Seurat pinta muchos estudios para su gran cuadro de la isla de La Grande Jatte.",
      "Para ello pone los colores en pequeños puntos uno junto a otro, que solo se mezclan en el ojo."
    ]
  },
  "ses4": {
    "place": "Veranos junto al mar",
    "when": "1886–1890",
    "mapLabel": "Canal de la Mancha",
    "intro": [
      "Casi todos los veranos Seurat viaja a la costa del canal de la Mancha: a Honfleur, Port-en-Bessin y Gravelines.",
      "Allí pinta puertos tranquilos, faros y el mar, a veces con un marco pintado de puntos."
    ]
  },
  "ses5": {
    "place": "París: el circo y los últimos años",
    "when": "1886–1891",
    "mapLabel": "París",
    "intro": [
      "En París Seurat pinta ahora también escenas nocturnas con luz artificial, como el desfile ante un circo.",
      "Pintores jóvenes como Paul Signac adoptan su manera de pintar con puntos de color."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sesaintouen": {
    "text": [
      "Un prado verde se extiende hacia suaves colinas, y delante hay un montón de leña.",
      "Es uno de los primeros óleos del joven Seurat, todavía sin puntos."
    ],
    "fact": "1878–1879. Metropolitan Museum of Art, Nueva York."
  },
  "separapet": {
    "text": [
      "Un hombre con abrigo oscuro se apoya en un muro, y a la izquierda hay un tronco oscuro.",
      "Seurat pinta la escena en pequeño y con rapidez sobre una tabla."
    ],
    "fact": "hacia 1881. Metropolitan Museum of Art, Nueva York."
  },
  "sepontaubert": {
    "text": [
      "Esbeltos troncos jóvenes se alzan en un bosque verde y luminoso de Borgoña.",
      "Muchos pequeños toques de color anuncian ya su posterior pintura de puntos."
    ],
    "fact": "1881. Metropolitan Museum of Art, Nueva York."
  },
  "semower": {
    "text": [
      "Un hombre con camisa blanca siega con la guadaña un campo amarillo dorado.",
      "Seurat lo muestra absorto en su movimiento, sin rostro."
    ],
    "fact": "1881–1882. Metropolitan Museum of Art, Nueva York."
  },
  "sehaymakers": {
    "text": [
      "Dos mujeres con pañuelo en la cabeza voltean el heno con largos rastrillos.",
      "La luz del sol vuelve sus ropas casi blancas."
    ],
    "fact": "hacia 1882. National Gallery of Art, Washington."
  },
  "sehoe": {
    "text": [
      "Un campesino se inclina sobre el campo y trabaja con la azada.",
      "Delante brillan plantas verdes; detrás, franjas de tierra rosas y marrones."
    ],
    "fact": "hacia 1882. National Gallery of Art, Washington."
  },
  "sestonebreaker": {
    "text": [
      "Un hombre con gorra levanta el martillo para partir piedras para los caminos.",
      "El montón de piedras brilla en rosa y naranja cálidos."
    ],
    "fact": "hacia 1882. National Gallery of Art, Washington."
  },
  "sehaystacks": {
    "text": [
      "Varios almiares puntiagudos se alzan en un campo amplio bajo un cielo claro.",
      "En el horizonte se ven árboles pequeños y casas."
    ],
    "fact": "hacia 1882. National Gallery of Art, Washington."
  },
  "segardener": {
    "text": [
      "Un jardinero con sombrero blanco se inclina sobre un bancal del jardín soleado.",
      "Seurat pinta la luz y la sombra con pinceladas cortas y cruzadas."
    ],
    "fact": "1882–1883. Metropolitan Museum of Art, Nueva York."
  },
  "sewateringcan": {
    "text": [
      "Una regadera gris está al borde de un sendero soleado del jardín.",
      "El jardín pertenece a la casa de campo de la familia Seurat en Le Raincy, cerca de París."
    ],
    "fact": "hacia 1883. National Gallery of Art, Washington."
  },
  "sesummer": {
    "text": [
      "Una figura pequeña camina por un amplio prado de verano de hierba alta.",
      "En el horizonte un árbol oscuro y puntiagudo se alza hacia el cielo."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "seseine": {
    "text": [
      "Dos hombres están de pie en una barca pequeña en el Sena, y detrás hay una gabarra.",
      "En la otra orilla hay casas y fábricas."
    ],
    "fact": "1882–1883. Metropolitan Museum of Art, Nueva York."
  },
  "sefigures": {
    "text": [
      "Una mujer se arrodilla en la hierba, y otras figuras están de pie con sombrillas en el prado.",
      "Al fondo brillan las casas claras de un pueblo."
    ],
    "fact": "hacia 1883. National Gallery of Art, Washington."
  },
  "sejattestudy": {
    "text": [
      "Casi todas las figuras del gran cuadro están ya en su sitio, a la sombra y al sol.",
      "Este estudio es uno de los últimos y más precisos antes del cuadro terminado."
    ],
    "fact": "1884. Metropolitan Museum of Art, Nueva York."
  },
  "sejattewood": {
    "text": [
      "En la orilla de la isla solo unas pocas personas se sientan a la sombra de los árboles.",
      "Seurat pinta estas pequeñas tablas al aire libre para captar la luz y los colores."
    ],
    "fact": "1884. Metropolitan Museum of Art, Nueva York."
  },
  "sejattesketch": {
    "text": [
      "A la derecha ya está la pareja con sombrero de copa y sombrilla, y a la izquierda hay gente sentada en la hierba.",
      "Hoy el boceto está en el mismo museo de Chicago que el gran cuadro."
    ],
    "fact": "1884. Art Institute of Chicago."
  },
  "sejattenga": {
    "text": [
      "Entre los árboles brilla el agua azul del Sena con una vela blanca.",
      "Delante, dos figuras se sientan en la hierba verde claro."
    ],
    "fact": "1884–1885. National Gallery of Art, Washington."
  },
  "sejattefigures": {
    "text": [
      "Dos mujeres se sientan en la hierba; una de ellas sostiene un ramo de flores.",
      "A la izquierda una niña vestida de blanco está junto a un tronco."
    ],
    "fact": "1884–1885. National Gallery of Art, Washington."
  },
  "jatte": {
    "text": [
      "Unos parisinos descansan un domingo en una isla del Sena.",
      "Seurat trabajó unos dos años en el gran cuadro, que mide aproximadamente dos por tres metros."
    ],
    "fact": "1884–1886. The Art Institute of Chicago."
  },
  "sehonfleur": {
    "text": [
      "Un faro blanco se alza en el puerto de Honfleur, y delante una barca descansa sobre caballetes de madera en la playa.",
      "La arena clara y el mar tranquilo están pintados por completo con pequeños puntos."
    ],
    "fact": "1886. National Gallery of Art, Washington."
  },
  "seportenbessin": {
    "text": [
      "Una colina verde desciende abruptamente hacia el mar azul y tranquilo.",
      "Sobre la hierba hay manchas amarillas de sol y sombras de nubes."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "seseascape": {
    "text": [
      "Una playa, el mar y el cielo se superponen en franjas claras y tranquilas.",
      "Seurat pinta alrededor del pequeño cuadro un marco azul oscuro de puntos."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "gravelines": {
    "text": [
      "Seurat pasó el verano de 1890 en el pequeño puerto de Gravelines, en el mar del Norte.",
      "Al atardecer el agua se vuelve clara, el cielo rosa, y bien delante un ancla grande se apoya en el muelle."
    ],
    "fact": "1890. The Museum of Modern Art (MoMA), Nueva York."
  },
  "segrayweather": {
    "text": [
      "En un día gris hay barcas en la orilla del Sena, y los árboles enmarcan la vista.",
      "Más tarde Seurat pinta un borde de puntos alrededor del cuadro."
    ],
    "fact": "hacia 1886–1888. Metropolitan Museum of Art, Nueva York."
  },
  "secircus": {
    "text": [
      "Delante de un circo un músico toca el trombón bajo las lámparas de gas para atraer al público.",
      "Es el primer cuadro en el que Seurat pinta una escena nocturna."
    ],
    "fact": "1887–1888. Metropolitan Museum of Art, Nueva York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
