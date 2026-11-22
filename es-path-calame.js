// v10.23 ES content for Alexandre Calame’s life journey, Part 1 (1810–1864). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Standort ohne Angabe": "Ubicación no indicada",
  "Privatsammlung": "Colección particular",
  "Kunsthaus Zürich": "Kunsthaus de Zúrich",
  "National Gallery, London": "National Gallery, Londres",
  "Villa Vauban, Luxemburg": "Villa Vauban, Luxemburgo"
});
  P.works = Object.assign(P.works || {}, {
  "acswiss": {
    "title": "Paisaje suizo",
    "museum": "National Gallery of Art, Washington"
  },
  "acpaysage": {
    "title": "Paisaje montañoso",
    "museum": "Ubicación no indicada"
  },
  "acvalais": {
    "title": "Fábrica en el Valais",
    "museum": "Colección particular"
  },
  "aceboul": {
    "title": "El desprendimiento tras la tormenta",
    "museum": "Kunsthaus de Zúrich"
  },
  "acgrimsel": {
    "title": "El camino del Grimsel",
    "museum": "Colección particular"
  },
  "acchenes": {
    "title": "Robles junto al lago de Thun",
    "museum": "Colección particular"
  },
  "actorrent": {
    "title": "Torrente de montaña en la tormenta",
    "museum": "Colección particular"
  },
  "acrosenlaui": {
    "title": "Recuerdo de Rosenlaui",
    "museum": "Colección particular"
  },
  "acwetter": {
    "title": "El Wetterhorn",
    "museum": "Ubicación no indicada"
  },
  "acleman": {
    "title": "Vista del lago Lemán",
    "museum": "Villa Vauban, Luxemburgo"
  },
  "acthun": {
    "title": "El lago de Thun",
    "museum": "National Gallery, Londres"
  },
  "acbrunnen": {
    "title": "El lago de los Cuatro Cantones hacia Brunnen",
    "museum": "Kunsthaus de Zúrich"
  },
  "acrigi": {
    "title": "Cabañas en el Rigi",
    "museum": "National Gallery, Londres"
  },
  "acmontreux": {
    "title": "El extremo del lago Lemán cerca de Montreux",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.calame = {
  "title": "El camino de vida de Alexandre Calame",
  "life": "1810–1864",
  "part": "Parte 1 · De Ginebra a los Altos Alpes",
  "subtitle": "Tormenta, roca y lagos tranquilos",
  "intro": "Viaja con Alexandre Calame, el pintor ginebrino de los Alpes: desde los primeros paisajes de montaña, pasando por el Grimsel, Rosenlaui y el Wetterhorn, hasta los lagos tranquilos de Thun, Ginebra y Lucerna. Estaciones breves y cuadros para colorear. Esta primera parte lo sigue por las montañas suizas.",
  "ending": [
    "Alexandre Calame muere en Menton el 19 de marzo de 1864, a los cincuenta y tres años. Sus cuadros alpinos marcaron la mirada de toda Europa sobre las montañas suizas.",
    "El camino puede seguir creciendo. Litografías, cuadros de Italia y más montañas pueden seguir en una parte posterior."
  ],
  "epilogue": "El 19 de marzo de 1864 Calame muere en Menton. Una parte posterior puede añadir litografías y más montañas."
};
  P.stations = Object.assign(P.stations || {}, {
  "acgenf": {
    "place": "Vevey y Ginebra · Comienzos",
    "when": "1810–1839",
    "mapLabel": "Ginebra",
    "intro": [
      "Alexandre Calame nace en Vevey el 28 de mayo de 1810. En Ginebra trabaja primero en un banco y luego estudia pintura con François Diday.",
      "Empieza con paisajes de los alrededores y sus primeros motivos de montaña."
    ]
  },
  "acberg": {
    "place": "En las montañas",
    "when": "1840–1845",
    "mapLabel": "Grimsel",
    "intro": [
      "Desde 1839 Calame recibe medallas en el Salón de París. Viaja al Valais y al Oberland bernés.",
      "Roca, agua y tiempo se convierten en sus grandes temas."
    ]
  },
  "acsturm": {
    "place": "Tormenta y cumbre",
    "when": "1846–1850",
    "mapLabel": "Oberland",
    "intro": [
      "Entre 1846 y 1850 nacen los dramáticos cuadros de montaña de Calame. Tormentas, torrentes y cumbres empinadas llenan los lienzos.",
      "Muchos de sus alumnos y compradores llegan a Ginebra desde toda Europa."
    ]
  },
  "acseen": {
    "place": "Los lagos",
    "when": "1849–1856",
    "mapLabel": "Lagos",
    "intro": [
      "Junto a las cumbres, Calame pinta los grandes lagos suizos: Ginebra, Thun y Lucerna.",
      "Aquí su pintura se vuelve más clara, serena y amplia."
    ]
  },
  "acspaet": {
    "place": "Últimos años",
    "when": "1857–1864",
    "mapLabel": "Montreux",
    "intro": [
      "En sus últimos años Calame está a menudo enfermo. Sigue pintando montañas y lagos, con más calma que antes.",
      "Muere en 1864 en Menton, en la Riviera francesa."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "acswiss": {
    "text": [
      "Un paisaje suizo temprano con agua, rocas y árboles. Calame aún es joven y estudia en Ginebra con François Diday.",
      "El cuadro pertenece hoy a la National Gallery of Art de Washington."
    ],
    "fact": "hacia 1830. National Gallery of Art, Washington."
  },
  "acpaysage": {
    "text": [
      "Montañas, bosque y agua en un formato alto. Calame ya busca la grandeza de la naturaleza.",
      "Pronto será él mismo el pintor alpino más conocido de Ginebra."
    ],
    "fact": "1835. Ubicación no indicada."
  },
  "acvalais": {
    "text": [
      "Un edificio junto al agua, rodeado de empinadas montañas del Valais. Las personas y las obras parecen pequeñas ante el paisaje.",
      "Calame viaja ahora con regularidad a los Alpes para hacer bocetos."
    ],
    "fact": "1840. Colección particular."
  },
  "aceboul": {
    "text": [
      "Tras una tormenta, rocas y árboles yacen en la ladera. El cielo se aclara poco a poco.",
      "Calame muestra la fuerza de la naturaleza sin poner personas en el cuadro."
    ],
    "fact": "1841. Kunsthaus de Zúrich."
  },
  "acgrimsel": {
    "text": [
      "Un camino estrecho lleva sobre roca y agua hacia el paso del Grimsel. Las montañas se alzan peladas y poderosas.",
      "El Grimsel es uno de los motivos preferidos de Calame en el Oberland bernés."
    ],
    "fact": "hacia 1842. Colección particular."
  },
  "acchenes": {
    "text": [
      "Grandes robles se alzan en la orilla y detrás está el lago de Thun con las montañas. El árbol se vuelve protagonista.",
      "Calame une la cercanía del bosque con la amplitud de los Alpes."
    ],
    "fact": "1846. Colección particular."
  },
  "actorrent": {
    "text": [
      "Un torrente de montaña baja entre árboles y el viento dobla las ramas. La tormenta está muy cerca.",
      "Cuadros de tormenta como este dan fama a Calame en París y en toda Europa."
    ],
    "fact": "1848. Colección particular."
  },
  "acrosenlaui": {
    "text": [
      "En el valle de Rosenlaui, abetos se alzan ante cumbres claras y glaciares. Calame visitó el lugar a menudo.",
      "El cuadro nace en el taller a partir de bocetos y del recuerdo."
    ],
    "fact": "1849. Colección particular."
  },
  "acwetter": {
    "text": [
      "El Wetterhorn se alza empinado sobre el valle y las nubes rodean la cumbre. Delante hay abetos oscuros.",
      "La montaña cerca de Grindelwald es uno de los grandes motivos de la pintura suiza."
    ],
    "fact": "1850. Ubicación no indicada."
  },
  "acleman": {
    "text": [
      "El lago Lemán reposa bajo un cielo claro. Tras las tormentas de la montaña, Calame muestra aquí calma.",
      "Ginebra y su lago siguen siendo su hogar."
    ],
    "fact": "1849. Villa Vauban, Luxemburgo."
  },
  "acthun": {
    "text": [
      "El lago de Thun brilla en la luz y las montañas se ven claras en el horizonte. El cuadro pertenece a la National Gallery de Londres.",
      "En los años 1850 los cuadros de lagos de Calame se vuelven más claros y serenos."
    ],
    "fact": "1854. National Gallery, Londres."
  },
  "acbrunnen": {
    "text": [
      "Orillas escarpadas y agua clara en el lago de los Cuatro Cantones, cerca de Brunnen. La luz parece fresca.",
      "El lago en el corazón de Suiza es un motivo importante para Calame."
    ],
    "fact": "1856. Kunsthaus de Zúrich."
  },
  "acrigi": {
    "text": [
      "Sencillas cabañas de madera se alzan en lo alto del Rigi y detrás se abre el mundo de montañas. El cuadro pertenece a la National Gallery de Londres.",
      "En sus últimos años Calame pinta los Alpes de forma más serena y cercana."
    ],
    "fact": "1861. National Gallery, Londres."
  },
  "acmontreux": {
    "text": [
      "En el extremo superior del lago Lemán las montañas se alzan sobre Montreux. El agua está quieta y amplia.",
      "Es uno de los últimos cuadros antes de la muerte de Calame al año siguiente."
    ],
    "fact": "1863. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
