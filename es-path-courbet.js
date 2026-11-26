// v10.43 ES content for Gustave Courbet’s life journey (1819–1877). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "gcladies": {
    "title": "Las señoritas del pueblo",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gcbretonnerie": {
    "title": "La Bretonnerie en el departamento del Indre",
    "museum": "National Gallery of Art, Washington"
  },
  "gccliffs": {
    "title": "Acantilados junto al mar: pequeña playa al amanecer",
    "museum": "Art Institute of Chicago"
  },
  "gcblackrocks": {
    "title": "Las rocas negras de Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "gccalm66": {
    "title": "Mar en calma",
    "museum": "National Gallery of Art, Washington"
  },
  "gccalm69": {
    "title": "El mar en calma",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "gchautepierre": {
    "title": "La roca de Hautepierre",
    "museum": "Art Institute of Chicago"
  },
  "gcbeach": {
    "title": "Playa en Normandía",
    "museum": "National Gallery of Art, Washington"
  },
  "gcboats": {
    "title": "Barcas en una playa, Étretat",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.courbet = {
  "title": "El camino de vida de Gustave Courbet",
  "part": "Tierra y mar",
  "subtitle": "De Ornans a la costa de Normandía",
  "intro": "Viaja por la vida de Gustave Courbet: de su pueblo natal, Ornans, en el este de Francia, a los acantilados y las playas de Normandía. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Gustave Courbet muere en 1877 en La Tour-de-Peilz, en Suiza.",
    "Sus paisajes y marinas cuelgan hoy en museos de todo el mundo."
  ],
  "epilogue": "Gustave Courbet muere en 1877. El camino lleva de Ornans y el campo del Indre a la costa de Normandía, a Trouville y Étretat.",
  "life": "1819–1877"
};
  P.stations = Object.assign(P.stations || {}, {
  "gcs1": {
    "place": "Ornans y el campo",
    "when": "1851–1856",
    "mapLabel": "Ornans",
    "intro": [
      "Gustave Courbet nace en 1819 en Ornans, en el este de Francia.",
      "En el Salón de París de 1850–51 causa sensación con grandes cuadros de la vida cotidiana de su pueblo natal."
    ]
  },
  "gcs2": {
    "place": "En la costa del Canal de la Mancha",
    "when": "1865–1866",
    "mapLabel": "Normandía",
    "intro": [
      "Courbet procede del departamento del Doubs, lejos del mar, y es conocido sobre todo por sus cuadros de rocas, desfiladeros y ríos de su tierra.",
      "A mediados de la década de 1860 se dedica a la costa del Canal de la Mancha y pinta el mar."
    ]
  },
  "gcs3": {
    "place": "El verano en Étretat",
    "when": "1869",
    "mapLabel": "Étretat",
    "intro": [
      "En agosto de 1869 Courbet visita Étretat, en la costa de Normandía.",
      "La mayoría de sus marinas de esta época muestran olas altas que rompen con fuerza."
    ]
  },
  "gcs4": {
    "place": "Barcas en la playa",
    "when": "1872–1875",
    "mapLabel": "Normandía",
    "intro": [
      "También en la década de 1870 Courbet pinta playas y acantilados de Normandía.",
      "Las barcas de pesca descansan sobre los guijarros y detrás se alzan acantilados claros."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "gcladies": {
    "text": [
      "Las tres hermanas de Courbet pasean por un pequeño valle cerca de Ornans, y una de ellas da una limosna a un niño que cuida las vacas.",
      "Cuando el cuadro se expone en el Salón de 1852, los críticos se burlan de los vestidos sencillos, del perro y de las pequeñas vacas."
    ],
    "fact": "1851–1852. Metropolitan Museum of Art, Nueva York."
  },
  "gcbretonnerie": {
    "text": [
      "Un arroyo serpentea por un prado verde, y detrás se alzan árboles frondosos bajo un cielo azul con nubes blancas.",
      "Abajo a la izquierda Courbet firma «G.Courbet / 56»."
    ],
    "fact": "1856. National Gallery of Art, Washington."
  },
  "gccliffs": {
    "text": [
      "A la izquierda un acantilado de borde verde cae a pico sobre la playa de guijarros, y el mar en calma brilla con la luz clara de la mañana.",
      "Abajo a la izquierda aparece la firma «G. Courbet»."
    ],
    "fact": "1865. Art Institute of Chicago."
  },
  "gcblackrocks": {
    "text": [
      "Sobre rocas oscuras en la orilla brilla un cielo rojizo y nublado, y el mar está en calma.",
      "El cuadro nace en los años en que Courbet pinta el mar en la costa del Canal de la Mancha."
    ],
    "fact": "1865–1866. National Gallery of Art, Washington."
  },
  "gccalm66": {
    "text": [
      "Un cielo amplio y claro ocupa casi todo el cuadro, y debajo se extienden una franja turquesa de mar y la playa de arena.",
      "Abajo a la izquierda se lee «’66 / Gustave Courbet»."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "gccalm69": {
    "text": [
      "Con la marea baja el mar se ha retirado, y dos pequeñas barcas han quedado en la playa.",
      "El inmenso cielo de nubes se alza sobre estrechas franjas de agua y arena."
    ],
    "fact": "1869. Metropolitan Museum of Art, Nueva York."
  },
  "gchautepierre": {
    "text": [
      "Una enorme pared de roca de borde verde se alza sobre árboles y casas de tejados rojos.",
      "Abajo a la derecha Courbet firma «G. Courbet»."
    ],
    "fact": "hacia 1869. Art Institute of Chicago."
  },
  "gcbeach": {
    "text": [
      "A la izquierda se alzan altas rocas, delante descansan barcas de pesca sobre la playa clara, y al fondo brilla el mar.",
      "Antes el museo titulaba el cuadro «Playa de Étretat»."
    ],
    "fact": "hacia 1872–1875. National Gallery of Art, Washington."
  },
  "gcboats": {
    "text": [
      "Varias barcas de pesca descansan sobre la playa de guijarros, y a la derecha se alzan acantilados claros bajo nubes grises.",
      "Abajo a la derecha aparece la firma «G. Courbet»."
    ],
    "fact": "hacia 1872–1875. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
