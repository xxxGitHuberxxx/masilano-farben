// v10.24 ES content for Olga Wisinger-Florian’s life journey, Part 1 (1844–1926). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Colección particular",
  "Belvedere, Wien": "Belvedere, Viena"
});
  P.works = Object.assign(P.works || {}, {
  "owherbst": {
    "title": "Bosque en otoño",
    "museum": "Colección particular"
  },
  "owmuehle": {
    "title": "Molino en Goisern",
    "museum": "Colección particular"
  },
  "owmaedchen": {
    "title": "Niña en el jardín",
    "museum": "Colección particular"
  },
  "owfeld": {
    "title": "Flores del campo",
    "museum": "Colección particular"
  },
  "owhelleb": {
    "title": "Eléboro negro",
    "museum": "Colección particular"
  },
  "owbauernhof": {
    "title": "Trabajo en la granja",
    "museum": "Belvedere, Viena"
  },
  "owvenedig": {
    "title": "El mercado de pescado de Venecia",
    "museum": "Colección particular"
  },
  "owkarlsbad": {
    "title": "Desayuno en Karlsbad",
    "museum": "Colección particular"
  },
  "owmohn": {
    "title": "Amapolas en flor",
    "museum": "Belvedere, Viena"
  },
  "owdorf": {
    "title": "Calle de pueblo bajo el sol de mediodía",
    "museum": "Colección particular"
  },
  "owprater": {
    "title": "Avenida del Prater en otoño",
    "museum": "Belvedere, Viena"
  },
  "owente": {
    "title": "Estanque de patos",
    "museum": "Belvedere, Viena"
  },
  "owweiher": {
    "title": "Avenida junto al estanque",
    "museum": "Belvedere, Viena"
  },
  "owstrauss": {
    "title": "Ramo de flores del campo",
    "museum": "Belvedere, Viena"
  },
  "owapfel": {
    "title": "Manzanos en flor",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.wisinger = {
  "title": "El camino de vida de Olga Wisinger-Florian",
  "life": "1844–1926",
  "part": "Parte 1 · Flores, avenidas y jardines",
  "subtitle": "De pianista a pintora",
  "intro": "Viaja con Olga Wisinger-Florian, la pintora vienesa de flores y jardines: desde sus primeros cuadros en el Salzkammergut, por campos de amapolas y avenidas del Prater, hasta Venecia, Karlsbad y Euxinograd, en el mar Negro. Estaciones breves y cuadros para colorear. Esta primera parte sigue sus colores.",
  "ending": [
    "Olga Wisinger-Florian muere en Grafenegg, en la Baja Austria, el 27 de febrero de 1926. La pianista se ha convertido en una de las pintoras más conocidas de Austria.",
    "El camino puede seguir creciendo. Más flores y jardines pueden seguir en una parte posterior."
  ],
  "epilogue": "El 27 de febrero de 1926 Wisinger-Florian muere en Grafenegg. Una parte posterior puede añadir más cuadros de flores."
};
  P.stations = Object.assign(P.stations || {}, {
  "owjung": {
    "place": "Viena y Goisern · Del piano a la pintura",
    "when": "1844–1881",
    "mapLabel": "Goisern",
    "intro": [
      "Olga Florian nace en Viena el 1 de noviembre de 1844. Primero es pianista de concierto y después se dedica a la pintura.",
      "Desde 1880 aprende con Emil Jakob Schindler."
    ]
  },
  "owblumen": {
    "place": "Flores y granjas",
    "when": "1884–1888",
    "mapLabel": "Flores",
    "intro": [
      "Wisinger-Florian encuentra su tema: flores, prados y la vida en el campo.",
      "Sus colores se vuelven más intensos y libres que los de su maestro."
    ]
  },
  "owreisen": {
    "place": "Viajes y veranos",
    "when": "1892–1899",
    "mapLabel": "Venecia",
    "intro": [
      "Viaja a Venecia y a los balnearios de Bohemia. En casa pinta campos de amapolas y calles de pueblo en verano.",
      "Pronto sus cuadros se exponen también en el extranjero."
    ]
  },
  "owpark": {
    "place": "Parques y avenidas",
    "when": "1900–1906",
    "mapLabel": "Prater",
    "intro": [
      "Hacia 1900 Wisinger-Florian pinta el Prater, estanques y avenidas. También lucha por la formación de las pintoras.",
      "En primavera y otoño busca los colores más intensos."
    ]
  },
  "owspaet": {
    "place": "Floración tardía",
    "when": "1906–1926",
    "mapLabel": "Grafenegg",
    "intro": [
      "Con más de sesenta años aún pinta ramos frescos y árboles en flor. Muere en Grafenegg el 27 de febrero de 1926.",
      "Su obra sigue siendo una fiesta de colores."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "owherbst": {
    "text": [
      "El bosque brilla en amarillo y marrón y las hojas cubren el camino. Es uno de sus primeros cuadros.",
      "Ese mismo año se convierte en alumna de Emil Jakob Schindler."
    ],
    "fact": "1880. Colección particular."
  },
  "owmuehle": {
    "text": [
      "Un molino está junto al arroyo en Goisern, en el Salzkammergut, con la madera y el agua brillantes. Aquí pinta Schindler en verano con sus alumnas.",
      "Wisinger-Florian aprende a mirar con atención y a trabajar al aire libre."
    ],
    "fact": "1880. Colección particular."
  },
  "owmaedchen": {
    "text": [
      "Una niña está en un jardín en flor, rodeada de verde y de luz. La figura es pequeña y el jardín grande.",
      "Ya aquí se ve su amor por las flores."
    ],
    "fact": "1881. Colección particular."
  },
  "owfeld": {
    "text": [
      "Las flores del prado crecen juntas y el azul, el blanco y el rojo se mezclan en la hierba. Wisinger-Florian las pinta de cerca.",
      "Las flores se convierten en su gran tema."
    ],
    "fact": "1884. Colección particular."
  },
  "owhelleb": {
    "text": [
      "Los eléboros blancos florecen a finales del invierno entre hojas oscuras. Están entre las primeras flores del año.",
      "Wisinger-Florian los pinta con tonos claros y luminosos."
    ],
    "fact": "1885. Colección particular."
  },
  "owbauernhof": {
    "text": [
      "En una granja la gente hace su trabajo y las gallinas corren por el patio. La luz es cálida.",
      "El cuadro pertenece al Belvedere de Viena."
    ],
    "fact": "1888. Belvedere, Viena."
  },
  "owvenedig": {
    "text": [
      "En el mercado de pescado de Venecia hay barcas, puestos y gente junto al agua. El aire vibra con la luz.",
      "A Wisinger-Florian le gusta viajar y pinta por el camino."
    ],
    "fact": "1892. Colección particular."
  },
  "owkarlsbad": {
    "text": [
      "En Karlsbad los huéspedes desayunan al aire libre, bajo árboles y sombrillas. Es una alegre mañana de verano.",
      "La ciudad balneario está llena de vida en verano."
    ],
    "fact": "1895. Colección particular."
  },
  "owmohn": {
    "text": [
      "Un campo lleno de amapolas rojas brilla bajo un cielo claro. El rojo es intenso y está aplicado con libertad.",
      "El cuadro del Belvedere muestra a Wisinger-Florian en la cima de su arte."
    ],
    "fact": "hacia 1895. Belvedere, Viena."
  },
  "owdorf": {
    "text": [
      "Una calle de pueblo está en calma bajo el sol de mediodía y las casas y los árboles dan sombra. Todo parece descansar.",
      "A Wisinger-Florian le encanta la luz intensa y cálida del verano."
    ],
    "fact": "1899. Colección particular."
  },
  "owprater": {
    "text": [
      "La gran avenida del Prater brilla con las hojas de otoño y los paseantes caminan bajo los árboles. El amarillo llena todo el cuadro.",
      "El Prater es un motivo preferido de los pintores vieneses."
    ],
    "fact": "1900. Belvedere, Viena."
  },
  "owente": {
    "text": [
      "Los patos nadan en un pequeño estanque y la orilla está verde y en flor. El agua refleja los árboles y el cielo.",
      "El cuadro pertenece al Belvedere de Viena."
    ],
    "fact": "1900. Belvedere, Viena."
  },
  "owweiher": {
    "text": [
      "Una avenida de árboles bordea el estanque y la luz y la sombra se alternan en el camino. El agua está tranquila al lado.",
      "Pinta avenidas y parques una y otra vez."
    ],
    "fact": "1906. Belvedere, Viena."
  },
  "owstrauss": {
    "text": [
      "Un ramo de flores del campo recién cogidas está sobre la mesa. Cada flor tiene su propio color.",
      "Más de veinte años después de sus primeras flores del campo vuelve a este motivo."
    ],
    "fact": "1906. Belvedere, Viena."
  },
  "owapfel": {
    "text": [
      "Los manzanos están en plena flor y la hierba de debajo es fresca y verde. El blanco y el rosa brillan con la luz de primavera.",
      "Wisinger-Florian tiene más de sesenta años y pinta con mano ligera."
    ],
    "fact": "1906. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
