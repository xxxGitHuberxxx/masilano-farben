// v10.43 ES content for Eugène Boudin’s life journey (1824–1898). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "ebfestival": {
    "title": "Fiesta en el puerto de Honfleur",
    "museum": "National Gallery of Art, Washington"
  },
  "ebopensky": {
    "title": "Marina con cielo abierto",
    "museum": "Museo de Arte de Cleveland"
  },
  "ebbeach62": {
    "title": "Playa de Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebtrouville63": {
    "title": "En la playa de Trouville",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "ebjetty": {
    "title": "Malecón y muelle en Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebtrouville63b": {
    "title": "Escena de playa en Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebdieppe": {
    "title": "En la playa, Dieppe",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "ebconcert": {
    "title": "Concierto en el casino de Deauville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebfourwomen": {
    "title": "Cuatro mujeres en Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebconversation": {
    "title": "Conversación en la playa",
    "museum": "National Gallery of Art, Washington"
  },
  "ebdogs": {
    "title": "Damas y caballero paseando por la playa con dos perros",
    "museum": "National Gallery of Art, Washington"
  },
  "ebbrittany": {
    "title": "Costa de Bretaña",
    "museum": "National Gallery of Art, Washington"
  },
  "ebbordeaux": {
    "title": "Vista de Burdeos desde el Quai des Chartrons",
    "museum": "Museo de Arte de Cleveland"
  },
  "ebfair": {
    "title": "Feria en Bretaña",
    "museum": "National Gallery of Art, Washington"
  },
  "ebscheveningen": {
    "title": "Marea baja en Scheveningen",
    "museum": "National Gallery of Art, Washington"
  },
  "ebbeach77": {
    "title": "La playa",
    "museum": "National Gallery of Art, Washington"
  },
  "ebberck": {
    "title": "Mujeres en la playa de Berck",
    "museum": "National Gallery of Art, Washington"
  },
  "ebhavreentry": {
    "title": "Entrada al puerto de El Havre",
    "museum": "National Gallery of Art, Washington"
  },
  "ebhavre": {
    "title": "El Havre",
    "museum": "National Gallery of Art, Washington"
  },
  "ebtrouville87": {
    "title": "En la playa, Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebhavreships": {
    "title": "Barcos y veleros saliendo de El Havre",
    "museum": "National Gallery of Art, Washington"
  },
  "ebvalery": {
    "title": "Vista del puerto de Saint-Valéry-sur-Somme",
    "museum": "Museo de Arte de Cleveland"
  },
  "ebbeaulieu": {
    "title": "Beaulieu: la bahía de Fourmis",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "ebbeach94": {
    "title": "En la playa",
    "museum": "National Gallery of Art, Washington"
  },
  "ebetretat": {
    "title": "Lavanderas en la playa de Étretat",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.boudin = {
  "title": "El camino de vida de Eugène Boudin",
  "part": "Cielos, playas y puertos",
  "subtitle": "El rey de los cielos",
  "intro": "Viaja por la vida de Eugène Boudin: de los puertos de Normandía y las playas de Trouville a Burdeos, Holanda y el Mediterráneo. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Eugène Boudin muere en Deauville en 1898, a los 74 años.",
    "Ese mismo año la galería Durand-Ruel de Nueva York expone 49 de sus pinturas."
  ],
  "epilogue": "Eugène Boudin muere en 1898. El camino lleva de Honfleur y El Havre, pasando por Trouville, a Burdeos, Holanda y la Riviera.",
  "life": "1824–1898"
};
  P.stations = Object.assign(P.stations || {}, {
  "ebs1": {
    "place": "Una tienda de marcos en El Havre",
    "when": "1858–1860",
    "mapLabel": "Honfleur y El Havre",
    "intro": [
      "Eugène Boudin nace en Honfleur en 1824, hijo de un capitán de barco; en El Havre abre una papelería y tienda de marcos, donde pintores como Jean-François Millet lo animan a pintar.",
      "En 1851 la ciudad de El Havre le concede una beca para estudiar en París; de vuelta en Normandía conoce al joven Claude Monet y lo convence de pintar al aire libre."
    ]
  },
  "ebs2": {
    "place": "Las playas de Trouville",
    "when": "1862–1864",
    "mapLabel": "Trouville y Dieppe",
    "intro": [
      "Desde 1862 Boudin pinta una y otra vez las playas de Trouville y Deauville, en la costa de Normandía.",
      "Bajo cielos inmensos muestra a damas elegantes con crinolina y las casetas de playa junto al agua."
    ]
  },
  "ebs3": {
    "place": "Sociedad en la playa",
    "when": "1865–1866",
    "mapLabel": "Trouville y Deauville",
    "intro": [
      "Boudin es en gran parte autodidacta y trabaja directamente ante la naturaleza; a finales de la década de 1860 pinta junto a Claude Monet.",
      "Camille Corot lo llama el «rey de los cielos»."
    ]
  },
  "ebs4": {
    "place": "Viajes: Bretaña, Burdeos y Holanda",
    "when": "1870–1875",
    "mapLabel": "Bretaña, Burdeos, Holanda",
    "intro": [
      "En la década de 1870 viaja por Francia, los Países Bajos e Italia; en 1873 visita Burdeos por primera vez.",
      "En 1874 expone en la primera exposición del grupo de artistas que pronto se llamará «impresionistas»."
    ]
  },
  "ebs5": {
    "place": "Playas y barcos",
    "when": "1877–1883",
    "mapLabel": "Normandía y Picardía",
    "intro": [
      "Boudin pinta sobre todo pequeños paisajes de los puertos y playas del norte de Francia.",
      "Muchos contemporáneos admiran su manera de pintar el cielo."
    ]
  },
  "ebs6": {
    "place": "Costas de los últimos años",
    "when": "1887–1894",
    "mapLabel": "Normandía y la Riviera",
    "intro": [
      "Todavía en la década de 1890 Boudin pinta las costas de Normandía y viaja hasta el Mediterráneo.",
      "Claude Monet dice de él: «Si me hice pintor, se lo debo a Eugène Boudin»."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ebfestival": {
    "text": [
      "Un gran velero y barcos más pequeños están engalanados con banderas de colores, y en el agua se apiñan botes de remo llenos de gente.",
      "Boudin pinta el cuadro al óleo sobre tabla y escribe «Honfleur» abajo a la derecha."
    ],
    "fact": "1858. National Gallery of Art, Washington."
  },
  "ebopensky": {
    "text": [
      "Nubes blancas cruzan un amplio cielo azul sobre una estrecha franja de mar con una pequeña vela.",
      "Boudin dibuja la hoja al pastel en el lugar, porque el pastel es fácil de llevar y rápido de usar."
    ],
    "fact": "1860. Museo de Arte de Cleveland."
  },
  "ebbeach62": {
    "text": [
      "Damas con amplios vestidos están de pie y sentadas ante claras casetas de playa, un perro corre por la arena y en el horizonte un vapor deja una estela de humo.",
      "Sobre la escena, el cielo nublado ocupa más de la mitad de la pequeña tabla."
    ],
    "fact": "1862. National Gallery of Art, Washington."
  },
  "ebtrouville63": {
    "text": [
      "Un caballo arrastra una caseta de playa con ruedas por la arena, mientras paseantes con sombrillas están junto al agua.",
      "El estrecho cuadro sobre tabla mide solo unos 27 por 48 centímetros."
    ],
    "fact": "1863. Metropolitan Museum of Art, Nueva York."
  },
  "ebjetty": {
    "text": [
      "En un largo muelle esperan personas elegantemente vestidas, un perrito corre delante y un barco de vapor echa una nube de humo negro.",
      "Boudin pinta la escena al óleo sobre tabla bajo un cielo amplio y agitado."
    ],
    "fact": "1863. National Gallery of Art, Washington."
  },
  "ebtrouville63b": {
    "text": [
      "Un grupo de damas con vestidos claros y oscuros está sentado en sillas en la playa; detrás ondean banderas en altos mástiles y en el mar pasan veleros.",
      "Sobre todo ello se extiende un cielo azul claro con nubes ligeras."
    ],
    "fact": "1863. National Gallery of Art, Washington."
  },
  "ebdieppe": {
    "text": [
      "El viento hincha la ropa de un grupo en la playa, delante camina un perrito blanco y negro y al fondo un espigón se adentra en el mar.",
      "El cuadro casi cuadrado sobre tabla mide solo unos 32 por 29 centímetros."
    ],
    "fact": "1864. Metropolitan Museum of Art, Nueva York."
  },
  "ebconcert": {
    "text": [
      "Bajo el techo blanco de un pabellón abierto, una gran multitud con vestidos claros escucha la música.",
      "Detrás del pabellón se eleva una colina verde y encima hay un cielo azul con nubes."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "ebfourwomen": {
    "text": [
      "Cuatro mujeres con faldas amplias y capas están una junto a otra; una lleva un abrigo rojo vivo.",
      "Boudin esboza la pequeña hoja con lápiz y acuarela; mide solo unos 11 por 15 centímetros."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "ebconversation": {
    "text": [
      "Algunas personas están sentadas muy juntas en sillas y conversan; una dama viste de rojo y a la izquierda hay un perro.",
      "Boudin capta la escena con lápiz y acuarela sobre papel ocre."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "ebdogs": {
    "text": [
      "Un caballero con levita oscura y una dama con vestido blanco y rojo están en el centro, rodeados de damas con sombrillas y dos perros.",
      "Boudin pinta la hoja con acuarela sobre un dibujo a lápiz."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "ebbrittany": {
    "text": [
      "Sobre una bahía tranquila con rocas oscuras en primer plano se amontonan nubes claras, y a lo lejos navega un velero de tres palos.",
      "En el horizonte brillan acantilados claros; Boudin pinta el cuadro al óleo sobre lienzo."
    ],
    "fact": "1870. National Gallery of Art, Washington."
  },
  "ebbordeaux": {
    "text": [
      "Grandes veleros están amarrados en los muelles de Burdeos, donde se cargan mercancías y los marineros reman en botes hasta los barcos.",
      "Boudin sitúa el horizonte bajo para dar mucho espacio al cielo y firma abajo «E. Boudin / Bordeaux 1874»."
    ],
    "fact": "1874. Museo de Arte de Cleveland."
  },
  "ebfair": {
    "text": [
      "En una amplia explanada se apiña gente con cofias blancas entre vacas blancas y negras, y detrás se alza una aguja de iglesia.",
      "En 1898 el cuadro sobre tabla se expone en una muestra de Boudin en la galería Durand-Ruel de Nueva York."
    ],
    "fact": "1874. National Gallery of Art, Washington."
  },
  "ebscheveningen": {
    "text": [
      "Con la marea baja, barcas de pesca con velas marrones descansan en la arena, y sobre ellas pasan nubes blancas por un cielo azul.",
      "Abajo a la derecha Boudin escribe «Schevingue / E. Boudin 75» en el cuadro."
    ],
    "fact": "1875. National Gallery of Art, Washington."
  },
  "ebbeach77": {
    "text": [
      "En una larga fila, personas con paraguas negros se sientan y están de pie en la playa; detrás brilla el mar con pequeños barcos.",
      "La estrecha tabla mide solo unos 11 por 26 centímetros."
    ],
    "fact": "1877. National Gallery of Art, Washington."
  },
  "ebberck": {
    "text": [
      "Mujeres con faldas rojas y cofias blancas están de pie y sentadas con cestas en una playa amplia y vacía.",
      "Sobre ellas se extiende un cielo despejado de azul claro; el pequeño cuadro está pintado al óleo sobre tabla."
    ],
    "fact": "1881. National Gallery of Art, Washington."
  },
  "ebhavreentry": {
    "text": [
      "Dos grandes veleros entran en el puerto, a la izquierda se eleva humo oscuro y el cielo plateado se refleja en el agua.",
      "Con unos 119 por 160 centímetros, es uno de los grandes lienzos de Boudin."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "ebhavre": {
    "text": [
      "Grandes nubes blancas se amontonan sobre el mar, por donde navegan veleros y un bote de remos lleno de hombres.",
      "Boudin pinta la escena al óleo sobre lienzo, y el cielo ocupa casi dos tercios del cuadro."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "ebtrouville87": {
    "text": [
      "Una dama con vestido rojo y sombrero alto está sentada en la arena, junto a un niño y otras damas.",
      "El pequeño cuadro sobre tabla mide solo unos 18 por 33 centímetros."
    ],
    "fact": "1887. National Gallery of Art, Washington."
  },
  "ebhavreships": {
    "text": [
      "Un velero se inclina con el viento sobre el mar verde y agitado, mientras a lo lejos zarpan barcos más grandes.",
      "Encima pasan nubes blancas por un cielo azul claro; el cuadro mide unos 90 por 131 centímetros."
    ],
    "fact": "1887. National Gallery of Art, Washington."
  },
  "ebvalery": {
    "text": [
      "Un ancho curso de agua conduce a un pequeño puerto con veleros, bordeado de árboles y casas.",
      "Sobre todo pasan grandes nubes grises y blancas; Boudin pinta el cuadro al óleo sobre lienzo."
    ],
    "fact": "1891. Museo de Arte de Cleveland."
  },
  "ebbeaulieu": {
    "text": [
      "En la Riviera una bahía azul se curva bajo montañas escarpadas, y en la orilla hay casas claras entre árboles.",
      "Boudin pinta el cuadro al óleo sobre lienzo bajo un cielo claro y luminoso."
    ],
    "fact": "1892. Metropolitan Museum of Art, Nueva York."
  },
  "ebbeach94": {
    "text": [
      "Ante una tienda de playa a rayas rojas y blancas, unas damas se sientan en sillas y unos niños juegan en la arena.",
      "La diminuta tabla mide solo unos 14 por 24 centímetros."
    ],
    "fact": "1894. National Gallery of Art, Washington."
  },
  "ebetretat": {
    "text": [
      "Al pie de un alto acantilado con un arco de roca, unas lavanderas tienden ropa de colores sobre los guijarros.",
      "En el mar azul del fondo navegan pequeñas barcas; el cuadro está pintado al óleo sobre tabla."
    ],
    "fact": "1894. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
