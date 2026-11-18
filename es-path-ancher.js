// v10.23 ES content for Anna Ancher’s life journey, Part 1 (1859–1935). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Standort ohne Angabe": "Ubicación no indicada",
  "Skagens Museum": "Museo de Skagen"
});
  P.works = Object.assign(P.works || {}, {
  "aagulls": {
    "title": "Pareja de ancianos desplumando gaviotas",
    "museum": "Ubicación no indicada"
  },
  "aablind": {
    "title": "Una mujer ciega en su habitación",
    "museum": "Ubicación no indicada"
  },
  "aamaid": {
    "title": "La criada en la cocina",
    "museum": "Ubicación no indicada"
  },
  "aaoldwoman": {
    "title": "Una anciana en su habitación",
    "museum": "Ubicación no indicada"
  },
  "aasunlight": {
    "title": "Luz de sol en la habitación azul",
    "museum": "Ubicación no indicada"
  },
  "aahedvig": {
    "title": "Retrato de Ane Hedvig Brøndum",
    "museum": "Museo de Skagen"
  },
  "aamoeller": {
    "title": "Valdemar Schønheyder Møller",
    "museum": "Ubicación no indicada"
  },
  "aaharvest": {
    "title": "Segadores",
    "museum": "Ubicación no indicada"
  },
  "aabrother": {
    "title": "El hermanito",
    "museum": "Ubicación no indicada"
  },
  "aasew": {
    "title": "Dos niñas aprendiendo a coser",
    "museum": "Ubicación no indicada"
  },
  "aaclematis": {
    "title": "Interior con clemátides",
    "museum": "Ubicación no indicada"
  },
  "aablue": {
    "title": "La señora Ane Brøndum en la habitación azul",
    "museum": "Ubicación no indicada"
  },
  "aaannex": {
    "title": "Interior. El anexo de Brøndum",
    "museum": "Ubicación no indicada"
  }
});
  P.paths = P.paths || {};
  P.paths.ancher = {
  "title": "El camino de vida de Anna Ancher",
  "life": "1859–1935",
  "part": "Parte 1 · Luz en las salas de Skagen",
  "subtitle": "Skagen, la habitación azul y su gente",
  "intro": "Viaja con Anna Ancher, la pintora de Skagen, en el extremo norte de Dinamarca: desde los viejos pescadores, pasando por la cocina y la alcoba, hasta la luz del sol en la habitación azul. Estaciones breves y cuadros para colorear. Esta primera parte sigue su mirada sobre la luz interior.",
  "ending": [
    "Anna Ancher muere el 15 de abril de 1935 en Skagen, donde pasó toda su vida. Se la considera una de las grandes pintoras de Dinamarca.",
    "El camino puede seguir creciendo. Más retratos, pasteles y paisajes pueden seguir en una parte posterior."
  ],
  "epilogue": "El 15 de abril de 1935 Anna Ancher muere en Skagen. Una parte posterior puede añadir más retratos y pasteles."
};
  P.stations = Object.assign(P.stations || {}, {
  "aaskagen": {
    "place": "Skagen · Primeros cuadros",
    "when": "1859–1884",
    "mapLabel": "Skagen",
    "intro": [
      "Anna Brøndum nace en Skagen el 18 de agosto de 1859. Sus padres llevan allí una posada donde se alojan muchos pintores.",
      "En 1880 se casa con el pintor Michael Ancher y pinta a los viejos pescadores de su pueblo."
    ]
  },
  "aakueche": {
    "place": "Cocina y alcoba",
    "when": "1883–1888",
    "mapLabel": "Salas",
    "intro": [
      "En 1883 nace su hija Helga. Ancher sigue pintando en las pequeñas salas de Skagen.",
      "La luz de ventanas y puertas se convierte en su sello."
    ]
  },
  "aablau": {
    "place": "La habitación azul",
    "when": "1889–1893",
    "mapLabel": "Habitación azul",
    "intro": [
      "En 1889 Ancher estudia en París con Pierre Puvis de Chavannes. Después su color se vuelve más claro.",
      "En la habitación azul de la casa de sus padres pinta a su hija, a su madre y a los huéspedes."
    ]
  },
  "aaarbeit": {
    "place": "Trabajo y niños",
    "when": "1905–1910",
    "mapLabel": "Campos",
    "intro": [
      "Después de 1900 Ancher pinta también al aire libre, en los campos cerca de Skagen. Los niños y el trabajo diario siguen siendo importantes.",
      "Su manera se vuelve más libre y enérgica."
    ]
  },
  "aaspaet": {
    "place": "Interiores tardíos",
    "when": "1913–1935",
    "mapLabel": "Hotel",
    "intro": [
      "En sus últimos años Ancher pinta interiores claros y sueltos, llenos de flores y sol.",
      "Permanece en Skagen hasta su muerte en 1935."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "aagulls": {
    "text": [
      "Lars Gaihede y la vieja Lene están sentados juntos desplumando gaviotas. El trabajo es sencillo, la luz serena.",
      "Anna Ancher pinta a la gente de Skagen, a la que conoce desde la infancia."
    ],
    "fact": "1883. Ubicación no indicada."
  },
  "aablind": {
    "text": [
      "Una mujer ciega está sentada en su habitación y la luz entra por la ventana sobre su rostro y sus manos.",
      "Ancher pinta dignidad y calma, sin hacer alarde de compasión."
    ],
    "fact": "1883. Ubicación no indicada."
  },
  "aamaid": {
    "text": [
      "Una joven está en la cocina y por la ventana del fondo entra una luz intensa. Nos da la espalda.",
      "El cuadro muestra lo pronto que Ancher hace de la luz en la habitación su verdadero tema."
    ],
    "fact": "1883–1886. Ubicación no indicada."
  },
  "aaoldwoman": {
    "text": [
      "Una anciana está sentada en silencio en su pequeña habitación. Muebles, pared y luz hablan de una larga vida.",
      "Ancher vuelve una y otra vez a estos interiores tranquilos."
    ],
    "fact": "1888. Ubicación no indicada."
  },
  "aasunlight": {
    "text": [
      "Una niña está sentada en la habitación azul haciendo ganchillo y la luz del sol dibuja un patrón claro en la pared y el suelo. Es uno de los cuadros más famosos de Ancher.",
      "Su hija Helga le sirve de modelo."
    ],
    "fact": "1891. Ubicación no indicada."
  },
  "aahedvig": {
    "text": [
      "Ane Hedvig Brøndum es la madre de Anna Ancher. Con su marido llevaba la posada de Skagen.",
      "Durante muchos años la madre será uno de sus modelos más importantes."
    ],
    "fact": "1893. Museo de Skagen."
  },
  "aamoeller": {
    "text": [
      "Un joven está sentado a la luz de una habitación. Ancher lo pinta con calma y atención.",
      "También sus retratos viven de la luz y del espacio."
    ],
    "fact": "1893. Ubicación no indicada."
  },
  "aaharvest": {
    "text": [
      "Unos segadores están en el campo bajo la clara luz del verano. Por una vez Ancher pinta al aire libre y en gran formato.",
      "Los colores son intensos y libres."
    ],
    "fact": "1905. Ubicación no indicada."
  },
  "aabrother": {
    "text": [
      "Una niña cuida de su hermanito. La escena es cotidiana y tierna.",
      "Los niños y la familia están entre los motivos preferidos de Ancher."
    ],
    "fact": "1905. Ubicación no indicada."
  },
  "aasew": {
    "text": [
      "Dos niñas aprenden a coser junto a la ventana. La luz cae sobre las manos y la tela.",
      "Ancher muestra las tareas tranquilas de la vida diaria con gran atención."
    ],
    "fact": "hacia 1910. Ubicación no indicada."
  },
  "aaclematis": {
    "text": [
      "Una mujer está en una habitación luminosa y en la ventana florecen clemátides. Colores y luz parecen frescos.",
      "En sus últimos años los interiores de Ancher se vuelven más sueltos y coloridos."
    ],
    "fact": "1913. Ubicación no indicada."
  },
  "aablue": {
    "text": [
      "La anciana madre está sentada en la habitación azul, el espacio que Ancher pintó tantas veces.",
      "Veinte años después del primer retrato, la hija vuelve a ella."
    ],
    "fact": "1913. Ubicación no indicada."
  },
  "aaannex": {
    "text": [
      "Una habitación tranquila en el anexo del hotel Brøndum, con sol sobre muebles y pared. No hay personas.",
      "En la obra tardía, la luz misma se vuelve el único habitante del cuadro."
    ],
    "fact": "hacia 1920. Ubicación no indicada."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
