// v10.24 ES content for François Diday’s life journey, Part 1 (1802–1877). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Royal Collection": "Royal Collection",
  "Kunsthaus Zürich": "Kunsthaus de Zúrich",
  "Musée des beaux-arts, La Chaux-de-Fonds": "Musée des beaux-arts, La Chaux-de-Fonds",
  "Privatsammlung": "Colección particular"
});
  P.works = Object.assign(P.works || {}, {
  "fdnapoli": {
    "title": "Nápoles con el Castel dell’Ovo y el Vesubio",
    "museum": "Colección particular"
  },
  "fdbrienz": {
    "title": "Casa en el lago de Brienz con barca y patos",
    "museum": "Colección particular"
  },
  "fdorage": {
    "title": "Tormenta sobre el lago Lemán",
    "museum": "Musée des beaux-arts, La Chaux-de-Fonds"
  },
  "fdrosenlaui": {
    "title": "Rosenlaui",
    "museum": "Colección particular"
  },
  "fdalpsee": {
    "title": "Paisaje alpino junto al lago",
    "museum": "Colección particular"
  },
  "fdevian": {
    "title": "Orilla del lago Lemán cerca de Evian, luz de la mañana",
    "museum": "Kunsthaus de Zúrich"
  },
  "fdhandeck": {
    "title": "El Aar en la Handeck",
    "museum": "Kunsthaus de Zúrich"
  },
  "fdbrunnen": {
    "title": "El lago de los Cuatro Cantones cerca de Brunnen, con Seelisberg y el Rütli",
    "museum": "Colección particular"
  },
  "fdriviere": {
    "title": "Río con árboles, puente y cabras",
    "museum": "Colección particular"
  },
  "fdmuerren": {
    "title": "Vista desde Mürren hacia el Ebnefluh",
    "museum": "Colección particular"
  },
  "fdbouveret": {
    "title": "Atardecer en Le Bouveret",
    "museum": "Colección particular"
  },
  "fdaxen": {
    "title": "El lago de los Cuatro Cantones y el Uri-Rotstock desde el Axenberg",
    "museum": "Colección particular"
  },
  "fdmontblanc": {
    "title": "El Mont Blanc y el Arve vistos desde Sallanches",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.diday = {
  "title": "El camino de vida de François Diday",
  "life": "1802–1877",
  "part": "Ginebra y los Alpes",
  "subtitle": "Lagos, cascadas y cumbres",
  "intro": "Viaja con François Diday, el pintor ginebrino que convirtió los Alpes en un gran tema de la pintura suiza: desde Nápoles, por el lago de Brienz y el lago Lemán, hasta la Handeck, Mürren y el Mont Blanc. Estaciones breves y cuadros para colorear. Este camino lo sigue por las montañas.",
  "ending": [
    "François Diday muere en Ginebra el 28 de noviembre de 1877. Con él empieza la escuela ginebrina de pintura alpina, que continúan Calame y Zünd.",
    "El camino va de Nápoles y el lago de Brienz hasta el Mont Blanc, que pinta desde Sallanches."
  ],
  "epilogue": "François Diday muere en Ginebra el 28 de noviembre de 1877. Con él empieza la escuela ginebrina de pintura alpina, que continúan Calame y Zünd. El camino va de Nápoles y el lago de Brienz hasta el Mont Blanc, que pinta desde Sallanches."
};
  P.stations = Object.assign(P.stations || {}, {
  "fdjung": {
    "place": "Ginebra, París e Italia · Aprendizaje",
    "when": "1802–1832",
    "mapLabel": "Ginebra",
    "intro": [
      "François Diday nace en Ginebra el 12 de febrero de 1802. Aprende con Wolfgang-Adam Töpffer, va a París con Antoine-Jean Gros en 1821 y viaja a Italia en 1824.",
      "De vuelta en Suiza descubre el Oberland bernés."
    ]
  },
  "fdschule": {
    "place": "La escuela de Ginebra",
    "when": "1839–1852",
    "mapLabel": "Oberland",
    "intro": [
      "Diday se convierte en el primer gran pintor de los Alpes de Ginebra. En su taller aprenden pintores jóvenes, entre ellos Alexandre Calame.",
      "Pinta tormentas, valles de montaña y lagos tranquilos."
    ]
  },
  "fdwasser": {
    "place": "Lagos y desfiladeros",
    "when": "1852–1855",
    "mapLabel": "Handeck",
    "intro": [
      "En los años 1850 Diday pinta el lago Lemán por la mañana, el Aar en su desfiladero y el lago de los Cuatro Cantones.",
      "También el joven Robert Zünd aprendió con él."
    ]
  },
  "fdreif": {
    "place": "Años de madurez",
    "when": "1864–1874",
    "mapLabel": "Mürren",
    "intro": [
      "Diday pinta ahora paisajes amplios y tranquilos con río, prado y cumbres lejanas.",
      "Vuelve a los lugares de sus primeros viajes."
    ]
  },
  "fdspaet": {
    "place": "Hacia el Mont Blanc",
    "when": "bis 1877",
    "mapLabel": "Mont Blanc",
    "intro": [
      "Al final está el Mont Blanc, la gran montaña ante Ginebra, con sus arroyos y cascadas.",
      "Diday muere en Ginebra el 28 de noviembre de 1877."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "fdnapoli": {
    "text": [
      "En el golfo de Nápoles está el Castel dell’Ovo y detrás humea el Vesubio. El joven Diday viaja a Italia en 1824.",
      "La luz clara del sur marca sus primeros cuadros."
    ],
    "fact": "1824. Colección particular."
  },
  "fdbrienz": {
    "text": [
      "Una casa de madera está a orillas del lago de Brienz, una barca flota en el agua y pasan patos nadando. Diday descubre el Oberland bernés.",
      "Se convertirá en uno de sus paisajes más importantes."
    ],
    "fact": "1832. Colección particular."
  },
  "fdorage": {
    "text": [
      "Nubes pesadas pasan sobre el lago Lemán y las olas golpean la orilla. Diday pinta la naturaleza con toda su fuerza.",
      "El cuadro pertenece al Musée des beaux-arts de La Chaux-de-Fonds."
    ],
    "fact": "1839. Musée des beaux-arts, La Chaux-de-Fonds."
  },
  "fdrosenlaui": {
    "text": [
      "En el valle de Rosenlaui los abetos oscuros se alzan ante rocas claras y hielo. Diday pinta el motivo varias veces.",
      "También su alumno Alexandre Calame pintará Rosenlaui."
    ],
    "fact": "1841. Colección particular."
  },
  "fdalpsee": {
    "text": [
      "Un lago de montaña está en calma bajo altas cumbres, con árboles y rocas en la orilla. Diday es ya un pintor célebre.",
      "Sus cuadros alpinos se exponen y se compran en París y Ginebra."
    ],
    "fact": "1852. Colección particular."
  },
  "fdevian": {
    "text": [
      "Por la mañana el lago Lemán está tranquilo y claro y la orilla de Evian aún está fresca. Diday conoce el lago desde niño.",
      "El cuadro pertenece al Kunsthaus de Zúrich."
    ],
    "fact": "1852. Kunsthaus de Zúrich."
  },
  "fdhandeck": {
    "text": [
      "En la Handeck el joven Aar se precipita por un desfiladero de roca. La espuma y los abetos oscuros llenan el cuadro.",
      "Diday recorre a menudo el camino hacia el Grimsel."
    ],
    "fact": "1854. Kunsthaus de Zúrich."
  },
  "fdbrunnen": {
    "text": [
      "Desde Brunnen la vista cruza el lago de los Cuatro Cantones hasta Seelisberg y el prado del Rütli. Encima se alza el Uri-Rotstock.",
      "El paisaje de Suiza central atrae a muchos pintores ginebrinos."
    ],
    "fact": "1855. Colección particular."
  },
  "fdriviere": {
    "text": [
      "Un río pasa bajo un puente de madera y las cabras pastan en la orilla bajo grandes árboles. El cuadro es tranquilo y amplio.",
      "Diday tiene más de sesenta años y sigue pintando con mano firme."
    ],
    "fact": "1864. Colección particular."
  },
  "fdmuerren": {
    "text": [
      "Desde Mürren se ve enfrente la nieve y el hielo del Ebnefluh. Delante hay prados y abetos.",
      "A Diday le encantan estas vistas desde una terraza hacia las cumbres."
    ],
    "fact": "1867. Colección particular."
  },
  "fdbouveret": {
    "text": [
      "En el extremo del lago Lemán, junto a Le Bouveret, cae la tarde. El agua brilla y las montañas se vuelven azules.",
      "También en la vejez Diday pinta el lago de su tierra."
    ],
    "fact": "1871. Colección particular."
  },
  "fdaxen": {
    "text": [
      "Desde el Axenberg la vista baja hasta el lago de Uri y cruza hasta el Uri-Rotstock. El agua es verde y clara.",
      "Casi veinte años después de Brunnen, Diday vuelve a este lago."
    ],
    "fact": "hacia 1874. Colección particular."
  },
  "fdmontblanc": {
    "text": [
      "El Mont Blanc se alza blanco sobre el valle del Arve. Desde Sallanches parece cercano e inmenso.",
      "Es una de las grandes cumbres que Diday tiene siempre a la vista desde Ginebra."
    ],
    "fact": "antes de 1877. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
