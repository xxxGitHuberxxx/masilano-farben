// v10.43 ES content for Odilon Redon’s life journey (1840–1916). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "odvillage": {
    "title": "Pueblo junto al mar en Bretaña",
    "museum": "National Gallery of Art, Washington"
  },
  "odbreton": {
    "title": "Pueblo bretón",
    "museum": "National Gallery of Art, Washington"
  },
  "odsita": {
    "title": "Sita",
    "museum": "Art Institute of Chicago"
  },
  "odbouquet": {
    "title": "Ramo de flores",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "odwild": {
    "title": "Flores silvestres",
    "museum": "National Gallery of Art, Washington"
  },
  "odpansies": {
    "title": "Pensamientos",
    "museum": "National Gallery of Art, Washington"
  },
  "odetruscan": {
    "title": "Jarrón etrusco con flores",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "odstilllife": {
    "title": "Bodegón con flores",
    "museum": "Art Institute of Chicago"
  },
  "odvase05": {
    "title": "Jarrón de flores",
    "museum": "Museo de Arte de Cleveland"
  },
  "odpink": {
    "title": "Jarrón de flores (fondo rosa)",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "odviolette": {
    "title": "Violette Heymann",
    "museum": "Museo de Arte de Cleveland"
  },
  "odflowers10": {
    "title": "Flores en un jarrón",
    "museum": "National Gallery of Art, Washington"
  },
  "odlargevase": {
    "title": "Gran jarrón con flores",
    "museum": "National Gallery of Art, Washington"
  },
  "odbutterflies": {
    "title": "Cinco mariposas",
    "museum": "National Gallery of Art, Washington"
  },
  "odvase16": {
    "title": "Jarrón de flores",
    "museum": "Museo de Arte de Cleveland"
  }
});
  P.paths = P.paths || {};
  P.paths.redon = {
  "title": "El camino de vida de Odilon Redon",
  "part": "Del negro al color",
  "subtitle": "Flores como en un sueño",
  "intro": "Viaja por la vida de Odilon Redon: de tranquilos pueblos de Bretaña a ramos luminosos y mariposas. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Odilon Redon muere en 1916 a los 76 años.",
    "Sus luminosos cuadros de flores pueden verse hoy en museos de todo el mundo."
  ],
  "epilogue": "Odilon Redon muere en 1916. El camino lleva de Bretaña y su paso al color a las flores y mariposas de sus últimos años.",
  "life": "1840–1916"
};
  P.stations = Object.assign(P.stations || {}, {
  "ods1": {
    "place": "Infancia en el Médoc y paisajes",
    "when": "1880–1890",
    "mapLabel": "Bretaña",
    "intro": [
      "Odilon Redon nace en Burdeos el 20 de abril de 1840 y, como niño frágil, pasa su juventud en la finca familiar de Peyrelebade, en el Médoc, entre landas y marismas.",
      "A los 20 años conoce al botánico Armand Clavaud, y dibuja del natural junto a las dunas de la costa atlántica."
    ]
  },
  "ods2": {
    "place": "Del negro al color",
    "when": "1893–1905",
    "mapLabel": "París",
    "intro": [
      "Redon se da a conocer primero con sus «noirs», dibujos al carboncillo negro que expone por primera vez en París a principios de la década de 1880.",
      "En la década de 1890 se vuelca en el color, sobre todo en el pastel, que es polvoriento como el carboncillo."
    ]
  },
  "ods3": {
    "place": "Flores como en un sueño",
    "when": "1900–1910",
    "mapLabel": "París",
    "intro": [
      "Hacia 1900, flores y hojas luminosas empiezan a llenar sus pasteles y pinturas.",
      "Los bodegones de flores dominan los últimos quince años de su carrera y le dan su mayor éxito comercial."
    ]
  },
  "ods4": {
    "place": "Retratos, flores y mariposas",
    "when": "1910–1916",
    "mapLabel": "París",
    "intro": [
      "Más tarde Redon también realiza retratos al pastel de mujeres con flores, a menudo por encargo.",
      "Después de 1912 deja de usar fijador en sus pasteles para que los colores conserven su brillo."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "odvillage": {
    "text": [
      "Casas claras se alinean a orillas de una bahía azul, y delante se extiende una ancha franja de arena.",
      "Redon pinta el pequeño cuadro al óleo sobre cartón y lo firma «ODILON REDON» abajo a la derecha."
    ],
    "fact": "hacia 1880. National Gallery of Art, Washington."
  },
  "odbreton": {
    "text": [
      "Casas blancas con tejados grises se alzan detrás de un prado verde, y por el cielo azul pasan nubes blancas.",
      "Abajo a la izquierda Redon firma «ODILON REDON» en pintura roja y violeta."
    ],
    "fact": "hacia 1890. National Gallery of Art, Washington."
  },
  "odsita": {
    "text": [
      "Una mujer de cabello castaño rojizo mira de perfil hacia un lado, rodeada de azul y verde luminosos, mientras a la izquierda flota una forma dorada.",
      "Aquí Redon trabaja con pastel y algo de lápiz sobre carboncillo, tal como pasa del negro al color."
    ],
    "fact": "hacia 1893. Art Institute of Chicago."
  },
  "odbouquet": {
    "text": [
      "De un jarrón azul brota un ramo exuberante con flores que recuerdan a lilas, amapolas y margaritas, y entre ellas revolotean pequeñas mariposas.",
      "Redon, gran amigo del botánico Armand Clavaud, realiza este gran pastel con el asombro de un naturalista."
    ],
    "fact": "hacia 1900–1905. Metropolitan Museum of Art, Nueva York."
  },
  "odwild": {
    "text": [
      "En un jarrón verde oscuro hay grandes flores rojo anaranjado, estrellas amarillas y pequeñas flores azules ante un fondo marrón cálido.",
      "Redon dibuja el pastel sobre papel marrón recubierto de serrín."
    ],
    "fact": "hacia 1905. National Gallery of Art, Washington."
  },
  "odpansies": {
    "text": [
      "Pensamientos azules, violetas y amarillos brillan en un sencillo jarrón marrón.",
      "Gran parte del fondo marrón queda libre, y así las pequeñas flores brillan aún más."
    ],
    "fact": "hacia 1905. National Gallery of Art, Washington."
  },
  "odetruscan": {
    "text": [
      "En un jarrón marrón con dibujo oscuro hay grandes flores fantásticas en violeta, oro y blanco.",
      "Redon no pinta el cuadro al óleo, sino al temple sobre lienzo."
    ],
    "fact": "1900–1910. Metropolitan Museum of Art, Nueva York."
  },
  "odstilllife": {
    "text": [
      "De un jarrón marrón brotan finas ramas con flores rojas, blancas y azules, y a su lado flotan pequeñas mariposas.",
      "Redon pinta el cuadro al óleo sobre lienzo y escribe «Odilon Redon» abajo a la derecha."
    ],
    "fact": "1905. Art Institute of Chicago."
  },
  "odvase05": {
    "text": [
      "En un jarrón claro se apiñan flores rojas, azules y blancas con hojas verdes ante un fondo pardo dorado.",
      "Redon quiere pintar «la naturaleza vista en sueños», y firma «odilon redon» abajo a la derecha."
    ],
    "fact": "hacia 1905. Museo de Arte de Cleveland."
  },
  "odpink": {
    "text": [
      "Un ramo colorido de flores naranjas, rojas, amarillas y blancas está en un jarrón blanco ante un suave fondo rosa.",
      "Redon pinta el cuadro al óleo sobre lienzo, y las flores parecen flotar en la luz clara."
    ],
    "fact": "hacia 1906. Metropolitan Museum of Art, Nueva York."
  },
  "odviolette": {
    "text": [
      "Una muchacha con vestido verde claro está sentada de perfil junto a una nube de flores de colores en azul, violeta, rojo y amarillo.",
      "Es la joven sobrina del coleccionista parisino Marcel Kapferer; Redon dibuja el retrato al pastel sobre papel gris."
    ],
    "fact": "1910. Museo de Arte de Cleveland."
  },
  "odflowers10": {
    "text": [
      "Flores rojas, azules y blancas están en un jarrón pardo dorado ante un fondo claro color crema.",
      "Redon pinta el cuadro al óleo sobre lienzo y deja mucho espacio alrededor del pequeño ramo."
    ],
    "fact": "hacia 1910. National Gallery of Art, Washington."
  },
  "odlargevase": {
    "text": [
      "En un jarrón azul con dibujo rosa brillan flores naranjas y rosas ante un fondo claro y vibrante.",
      "El coleccionista parisino Marcel Kapferer compra el cuadro directamente al artista y lo presta en 1924 para una exposición en París."
    ],
    "fact": "hacia 1912. National Gallery of Art, Washington."
  },
  "odbutterflies": {
    "text": [
      "Cinco mariposas de colores en azul, rojo, amarillo y marrón flotan sobre una hoja clara, casi vacía.",
      "Redon las pinta a la acuarela y pone sus iniciales «O.R.» en tinta marrón abajo a la derecha."
    ],
    "fact": "hacia 1912. National Gallery of Art, Washington."
  },
  "odvase16": {
    "text": [
      "En un jarrón esbelto hay flores rojo oscuro y violetas con finas ramas blancas ante un fondo amarillo vivo y rosa.",
      "Este pastel del último año de vida de Redon se expone en 1939 en la Exposición Universal de Nueva York."
    ],
    "fact": "1916. Museo de Arte de Cleveland."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
