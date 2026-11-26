// v10.43 ES content for Camille Corot’s life journey (1796–1875). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "jcpeasant": {
    "title": "Muchacho campesino italiano",
    "museum": "National Gallery of Art, Washington"
  },
  "jcbartolomeo": {
    "title": "La isla y el puente de San Bartolomeo, Roma",
    "museum": "National Gallery of Art, Washington"
  },
  "jcterni": {
    "title": "Cascada de Terni",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "jcalbano": {
    "title": "Lago Albano y Castel Gandolfo",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "jccervara": {
    "title": "La Cervara, la campiña romana",
    "museum": "Museo de Arte de Cleveland"
  },
  "jchonfleur": {
    "title": "Honfleur: calvario",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "jclemaistre": {
    "title": "Toussaint Lemaistre",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "jcmacon": {
    "title": "Puente sobre el Saona en Mâcon",
    "museum": "National Gallery of Art, Washington"
  },
  "jcgenoa": {
    "title": "Vista de Génova",
    "museum": "Art Institute of Chicago"
  },
  "jcvolterra": {
    "title": "Vista cerca de Volterra",
    "museum": "National Gallery of Art, Washington"
  },
  "jceel": {
    "title": "Los recolectores de anguilas",
    "museum": "National Gallery of Art, Washington"
  },
  "jccurious": {
    "title": "La niña curiosa",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "jcagostina": {
    "title": "Agostina",
    "museum": "National Gallery of Art, Washington"
  },
  "jcreadstudio": {
    "title": "Mujer leyendo en el taller",
    "museum": "National Gallery of Art, Washington"
  },
  "jcreading": {
    "title": "Una mujer leyendo",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "jcinterrupted": {
    "title": "Lectura interrumpida",
    "museum": "Art Institute of Chicago"
  },
  "jcsibylle": {
    "title": "Sibila",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "jcwillows": {
    "title": "Sauces y granja en Sainte-Catherine-lès-Arras",
    "museum": "Museo de Arte de Cleveland"
  },
  "jcarleux": {
    "title": "Arleux-Palluel, el puente de las citas",
    "museum": "Art Institute of Chicago"
  },
  "jccoubron": {
    "title": "El bosque de Coubron",
    "museum": "National Gallery of Art, Washington"
  },
  "jcstumpf": {
    "title": "Madame Stumpf y su hija",
    "museum": "National Gallery of Art, Washington"
  },
  "jcetretat": {
    "title": "Playa cerca de Étretat",
    "museum": "National Gallery of Art, Washington"
  },
  "jcmorieri": {
    "title": "Mujer italiana (La Morieri)",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.corot = {
  "title": "El camino de vida de Camille Corot",
  "part": "Roma, Francia y el taller",
  "subtitle": "Luz, paisaje y figuras serenas",
  "intro": "Viaja por la vida de Camille Corot: desde Roma y el campo italiano, a través de Francia, hasta su taller de París. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Camille Corot muere en París en febrero de 1875, a los 78 años.",
    "Se le considera el paisajista francés más influyente del siglo XIX."
  ],
  "epilogue": "Camille Corot muere en 1875. El camino lleva de Roma, a través de los paisajes de Francia, hasta su taller de París.",
  "life": "1796–1875"
};
  P.stations = Object.assign(P.stations || {}, {
  "jcs1": {
    "place": "Tres años en Italia",
    "when": "1825–1828",
    "mapLabel": "Roma y alrededores",
    "intro": [
      "Camille Corot nace en París en 1796; solo a los 26 años deja el comercio de telas y se hace pintor.",
      "De 1825 a 1828 vive en Roma y dibuja y pinta a menudo al aire libre en el campo de los alrededores."
    ]
  },
  "jcs2": {
    "place": "De vuelta en Francia",
    "when": "1830–1834",
    "mapLabel": "Normandía y Borgoña",
    "intro": [
      "Tras su regreso, Corot pinta grandes cuadros a partir de sus dibujos y bocetos al óleo de Italia, construidos con rigor como paisajes clásicos.",
      "Además viaja por Francia, por ejemplo a la costa de Normandía y a Borgoña, y pinta también retratos."
    ]
  },
  "jcs3": {
    "place": "De nuevo a Italia",
    "when": "1834–1838",
    "mapLabel": "Génova y la Toscana",
    "intro": [
      "En 1834 Corot vuelve a viajar a Italia y pinta, entre otras obras, una vista de Génova.",
      "En 1838 expone en el Salón de París un paisaje cerca de Volterra, en la Toscana."
    ]
  },
  "jcs4": {
    "place": "Recuerdos y figuras",
    "when": "1860–1866",
    "mapLabel": "Francia",
    "intro": [
      "Con aguas tranquilas, árboles esponjosos y follaje salpicado de luz, Corot conquista ahora a un amplio público.",
      "Junto a ellos pinta cuadros de figuras que casi nunca expone ni vende."
    ]
  },
  "jcs5": {
    "place": "Lectoras en el taller",
    "when": "1868–1870",
    "mapLabel": "París",
    "intro": [
      "En su taller Corot pinta a modelos leyendo o pensativas; casi nunca expone estos cuadros de figuras.",
      "Le gusta vestir a sus modelos con trajes italianos, porque ama todo lo italiano."
    ]
  },
  "jcs6": {
    "place": "Arras, bosque y costa",
    "when": "1871–1872",
    "mapLabel": "Norte de Francia",
    "intro": [
      "En 1871 Corot se aloja en Arras, unos 160 kilómetros al norte de París, y pinta allí sauces, agua y pueblos.",
      "En 1872 siguen escenas de bosque, una playa de Normandía y retratos como el de Madame Stumpf y su hija."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "jcpeasant": {
    "text": [
      "Un muchacho con sombrero oscuro y camisa clara se recuesta tranquilo y nos mira.",
      "Corot pinta el estudio en Italia al óleo sobre papel y lo firma «COROT» abajo a la izquierda."
    ],
    "fact": "1825–1827. National Gallery of Art, Washington."
  },
  "jcbartolomeo": {
    "text": [
      "Casas claras y un campanario se alzan en la isla Tiberina de Roma, a la izquierda cruza un puente de arcos, y todo se refleja en el río.",
      "Corot pinta el estudio al aire libre, al óleo sobre papel, y lo firma «COROT» abajo a la derecha."
    ],
    "fact": "1825–1828. National Gallery of Art, Washington."
  },
  "jcterni": {
    "text": [
      "Una cascada blanca se precipita entre rocas verdes cubiertas de vegetación.",
      "Terni está en Umbría, al norte de Roma; Corot pinta este estudio al óleo sobre papel en 1826."
    ],
    "fact": "1826. Metropolitan Museum of Art, Nueva York."
  },
  "jcalbano": {
    "text": [
      "Sobre un lago tranquilo se extiende una loma verde en cuya cima brillan las casas de Castel Gandolfo.",
      "El lago Albano está en las colinas al sureste de Roma; Corot lo pinta al óleo sobre papel."
    ],
    "fact": "1826–1827. Metropolitan Museum of Art, Nueva York."
  },
  "jccervara": {
    "text": [
      "Colinas, rocas y pequeñas figuras conducen en diagonales hacia un amplio paisaje cerca de Roma.",
      "Corot basa este gran óleo en dibujos y bocetos al óleo de Italia; su composición muy estructurada recuerda a Nicolas Poussin."
    ],
    "fact": "hacia 1830–1831. Museo de Arte de Cleveland."
  },
  "jchonfleur": {
    "text": [
      "Árboles esbeltos se alzan en una altura sobre el mar, entre ellos se eleva una gran cruz, y a sus pies se sientan y arrodillan pequeñas figuras.",
      "Honfleur es una ciudad portuaria de la costa de Normandía; Corot pinta el cuadro al óleo sobre tabla."
    ],
    "fact": "hacia 1830. Metropolitan Museum of Art, Nueva York."
  },
  "jclemaistre": {
    "text": [
      "Un joven con levita oscura de cuello alto está sentado en una silla y nos mira con seriedad.",
      "Corot pinta el retrato al óleo sobre lienzo en 1833; el retratado vivió de 1807/1808 a 1888."
    ],
    "fact": "1833. Metropolitan Museum of Art, Nueva York."
  },
  "jcmacon": {
    "text": [
      "Un largo puente de piedra con muchos arcos cruza el Saona, y a la izquierda se alzan casas claras sobre una orilla arenosa.",
      "Mâcon está en Borgoña; abajo a la izquierda se lee a lápiz «Corot Pingebat 1834»."
    ],
    "fact": "1834. National Gallery of Art, Washington."
  },
  "jcgenoa": {
    "text": [
      "Tras unas laderas verdes se extiende la clara ciudad de Génova, y encima brilla el mar azul.",
      "Abajo a la derecha Corot escribe «Gènes 1834», el nombre francés de la ciudad y el año."
    ],
    "fact": "1834. Art Institute of Chicago."
  },
  "jcvolterra": {
    "text": [
      "Un camino atraviesa un paisaje soleado y rocoso con árboles, y por él cabalga una pequeña figura.",
      "Corot expone el cuadro en el Salón de París de 1838 como «Vue prise à Volterra, Toscane» y lo firma «COROT. / 1838»."
    ],
    "fact": "1838. National Gallery of Art, Washington."
  },
  "jceel": {
    "text": [
      "En un bosque verde junto a un arroyo, una mujer arrodillada ayuda a un niño pequeño a caminar, una niña trae algo en su delantal y un muchacho trepa a un árbol.",
      "La luz es suave y difusa; solo unas pocas manchas claras en el follaje dejan adivinar el sol y el cielo."
    ],
    "fact": "1860–1865. National Gallery of Art, Washington."
  },
  "jccurious": {
    "text": [
      "Una niña con vestido oscuro y capa está de pie sobre una piedra, se apoya en un muro de tierra y mira con curiosidad por encima.",
      "Corot pinta la pequeña figura al óleo sobre cartón y firma «COROT» abajo a la derecha."
    ],
    "fact": "1860–1864. Metropolitan Museum of Art, Nueva York."
  },
  "jcagostina": {
    "text": [
      "Corot viste a la modelo, probablemente una inmigrante del campo cercano a Roma, con un traje tradicional y la sitúa en un paisaje italiano.",
      "Pinta sus hombros, ojos y nariz con fuertes claroscuros; «Agostina» es el mayor de sus cuadros de figuras."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "jcreadstudio": {
    "text": [
      "Una joven con blusa blanca apoya la cabeza en la mano y lee ante una mesa; detrás de ella hay cuadros y un caballete.",
      "El cuadro pertenece más tarde al escritor Alexandre Dumas y se expone en 1875 en la gran exposición de Corot en París."
    ],
    "fact": "hacia 1868. National Gallery of Art, Washington."
  },
  "jcreading": {
    "text": [
      "Una mujer con mangas azules está sentada en un prado leyendo un libro, y detrás brilla el agua a lo lejos.",
      "Corot trabaja en este cuadro en 1869 y 1870, uniendo figura y paisaje."
    ],
    "fact": "1869–1870. Metropolitan Museum of Art, Nueva York."
  },
  "jcinterrupted": {
    "text": [
      "Una mujer con traje italiano sostiene un libro en el regazo, apoya la cabeza en la mano y levanta la vista de la lectura.",
      "Corot la muestra en el espacio protegido de su taller y pinta la cinta del pelo, los pendientes y los profundos pliegues de la falda con evidente gusto por el detalle."
    ],
    "fact": "hacia 1870. Art Institute of Chicago."
  },
  "jcsibylle": {
    "text": [
      "Una joven con una cinta en el pelo, blusa blanca y corpiño está sentada ante un fondo oscuro y nos mira con calma.",
      "Como muchas figuras tardías de Corot, muestra a una modelo con ropa de aire italiano; hoy forma parte de la colección Havemeyer del Metropolitan Museum."
    ],
    "fact": "hacia 1870. Metropolitan Museum of Art, Nueva York."
  },
  "jcwillows": {
    "text": [
      "Junto a una granja de tejado rojo se alzan sauces nudosos, con el follaje salpicado de luz.",
      "Corot pinta el cuadro en 1871 durante su estancia en Arras; muestra el estilo con el que conquista a un amplio público."
    ],
    "fact": "1871. Museo de Arte de Cleveland."
  },
  "jcarleux": {
    "text": [
      "Árboles altos y ligeros enmarcan un prado junto al agua, a lo lejos hay un pequeño puente y delante se ven pequeñas figuras.",
      "Arleux y Palluel son pueblos del norte de Francia, no lejos de Arras; Corot firma «Corot» abajo a la izquierda."
    ],
    "fact": "1871–1872. Art Institute of Chicago."
  },
  "jccoubron": {
    "text": [
      "La luz cae dorada entre las hojas de árboles altos sobre un camino del bosque por el que avanza un jinete en un caballo blanco.",
      "Corot firma «COROT 1872»; ya en 1873 el cuadro se subasta en París como «Entrée du bois Coubron, par une matinée de printemps»."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "jcstumpf": {
    "text": [
      "Una mujer con vestido azul pasea por un bosque soleado llevando de la mano a su hijita vestida de blanco.",
      "Corot regala el cuadro a Monsieur F. Stumpf; la niña es su hija Madeleine."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "jcetretat": {
    "text": [
      "Una playa de arena clara se extiende bajo una ladera verde hasta el mar tranquilo, bajo un cielo amplio y nuboso.",
      "El pequeño cuadro mide apenas unos 12 por 25 centímetros; Étretat está en la costa de Normandía."
    ],
    "fact": "hacia 1872. National Gallery of Art, Washington."
  },
  "jcmorieri": {
    "text": [
      "Una mujer con pañuelo amarillo, blusa blanca y delantal bordado en rojo está sentada, apoyada en el brazo, ante un fondo verde.",
      "Hacia 1874 Corot entrega el cuadro al marchante parisino Hector Brame."
    ],
    "fact": "hacia 1872. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
