// v10.43 ES content for Giovanni Antonio Canal (Canaletto)’s life journey (1697–1768). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Museum of Fine Arts, Houston": "Museum of Fine Arts, Houston",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Yale Center for British Art, New Haven": "Yale Center for British Art, New Haven"
});
  P.works = Object.assign(P.works || {}, {
  "caspiazza": {
    "title": "La plaza de San Marcos",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "canaletto": {
    "title": "Entrada al Canal Grande",
    "museum": "Museum of Fine Arts, Houston"
  },
  "carialto": {
    "title": "El Gran Canal mirando al sur hacia el puente de Rialto",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cazobenigo": {
    "title": "Campo Santa Maria Zobenigo, Venecia",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "caangelo": {
    "title": "Campo Sant’Angelo, Venecia",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "caportello": {
    "title": "La Porta Portello, Padua",
    "museum": "National Gallery of Art, Washington"
  },
  "casanmarco": {
    "title": "La plaza de San Marcos, Venecia",
    "museum": "National Gallery of Art, Washington"
  },
  "camolo": {
    "title": "La entrada al Gran Canal desde el Molo, Venecia",
    "museum": "National Gallery of Art, Washington"
  },
  "cawestbridge": {
    "title": "El puente de Westminster con la procesión del Lord Mayor en el Támesis",
    "museum": "Yale Center for British Art, New Haven"
  },
  "cawarwick": {
    "title": "El castillo de Warwick",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cacity": {
    "title": "La City desde la terraza de Somerset House",
    "museum": "Yale Center for British Art, New Haven"
  },
  "cawestminster": {
    "title": "Westminster desde la terraza de Somerset House",
    "museum": "Yale Center for British Art, New Haven"
  },
  "capaul": {
    "title": "La catedral de San Pablo",
    "museum": "Yale Center for British Art, New Haven"
  },
  "cacolumn": {
    "title": "Capricho de paisaje inglés con una columna",
    "museum": "National Gallery of Art, Washington"
  },
  "capalace": {
    "title": "Capricho de paisaje inglés con un palacio",
    "museum": "National Gallery of Art, Washington"
  },
  "cawalton": {
    "title": "El viejo puente de Walton",
    "museum": "Yale Center for British Art, New Haven"
  }
});
  P.paths = P.paths || {};
  P.paths.canaletto = {
  "title": "El camino de vida de Canaletto",
  "part": "Venecia, Padua y Londres",
  "subtitle": "Plazas, canales y el Támesis",
  "intro": "Viaja por la vida de Canaletto: de las plazas y canales de Venecia y Padua al Támesis en Londres. La mayoría de los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Canaletto muere en Venecia el 19 de abril de 1768.",
    "Sus vistas siguen marcando hoy la imagen que se tiene de la Venecia y el Londres del siglo XVIII."
  ],
  "epilogue": "Canaletto muere en Venecia el 19 de abril de 1768. El camino lleva de las plazas de Venecia al Támesis y de vuelta.",
  "life": "1697–1768"
};
  P.stations = Object.assign(P.stations || {}, {
  "canaletto1": {
    "place": "Venecia: plazas y canales",
    "when": "1697–1739",
    "mapLabel": "Venecia",
    "intro": [
      "Giovanni Antonio Canal nace en Venecia el 18 de octubre de 1697; su padre pinta decorados de teatro y al principio el hijo le ayuda.",
      "Hacia 1720 empieza a pintar vistas de su ciudad, que vende a viajeros de toda Europa."
    ]
  },
  "cas2": {
    "place": "Padua y nuevas vistas",
    "when": "1740–1745",
    "mapLabel": "Padua",
    "intro": [
      "Hacia 1740 llegan menos viajeros a Venecia; Canaletto dibuja y pinta ahora también en tierra firme, por ejemplo en Padua.",
      "En estos años hace también sus aguafuertes y grandes vistas de la plaza de San Marcos."
    ]
  },
  "cas3": {
    "place": "Londres y el Támesis",
    "when": "1746–1768",
    "mapLabel": "Londres",
    "intro": [
      "En 1746 Canaletto viaja a Londres, donde viven muchos de sus compradores, y con una breve interrupción se queda casi diez años en Inglaterra.",
      "Pinta el Támesis, el nuevo puente de Westminster y casas de campo; hacia 1755 regresa a Venecia."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "caspiazza": {
    "text": [
      "La amplia plaza de San Marcos se abre hasta la basílica, y a la derecha el alto campanario se alza hacia el cielo.",
      "Por la plaza pasean personas y bajo los soportales cuelgan toldos."
    ],
    "fact": "hacia 1727–1729. Metropolitan Museum of Art, Nueva York."
  },
  "canaletto": {
    "text": [
      "Miramos desde el Bacino di San Marco hacia el Canal Grande: a la izquierda la iglesia de la Salute con su cúpula blanca, delante góndolas y barcas de carga, a la derecha los palacios de la ciudad.",
      "Canaletto pinta estas vedutas para viajeros que quieren un recuerdo de Venecia."
    ],
    "fact": "hacia 1730. Museum of Fine Arts, Houston."
  },
  "carialto": {
    "text": [
      "Góndolas y barcas de carga navegan por el agua verde del Gran Canal entre altos palacios.",
      "Las casas están tan cerca de la orilla que sus muros salen directamente del agua."
    ],
    "fact": "hacia 1730–1739. Metropolitan Museum of Art, Nueva York."
  },
  "cazobenigo": {
    "text": [
      "A la derecha se alza la fachada clara de la iglesia de Santa Maria Zobenigo, con muchas figuras y columnas.",
      "En la pequeña plaza de delante la gente conversa al sol."
    ],
    "fact": "hacia 1730–1739. Metropolitan Museum of Art, Nueva York."
  },
  "caangelo": {
    "text": [
      "Sobre una plaza amplia y casi vacía se alza un esbelto campanario.",
      "Canaletto muestra las casas de alrededor con una luz clara y sombras nítidas."
    ],
    "fact": "hacia 1730–1739. Metropolitan Museum of Art, Nueva York."
  },
  "caportello": {
    "text": [
      "Un canal pasa junto a la Porta Portello, una puerta de la ciudad de Padua, y en la orilla hay barcas.",
      "Delante hay grandes bloques de piedra y detrás casas y árboles bajo un cielo nublado."
    ],
    "fact": "hacia 1741–1742. National Gallery of Art, Washington."
  },
  "casanmarco": {
    "text": [
      "Ante la basílica de San Marcos y el Palacio Ducal rosado se alzan altos mástiles, y en la plaza hay puestos de mercado.",
      "Entre ellos pasean comerciantes, transeúntes y caballeros con largos abrigos."
    ],
    "fact": "1742–1744. National Gallery of Art, Washington."
  },
  "camolo": {
    "text": [
      "Desde el Molo miramos sobre el agua hacia la iglesia de Santa Maria della Salute con sus grandes cúpulas.",
      "A la izquierda hay un velero anclado y delante esperan góndolas junto al muelle."
    ],
    "fact": "1742–1744. National Gallery of Art, Washington."
  },
  "cawestbridge": {
    "text": [
      "Espléndidas barcas de remo navegan por el Támesis hacia el puente de Westminster el día del nuevo Lord Mayor.",
      "En 1747 el puente aún no está terminado, y Canaletto lo pinta como imagina la obra acabada."
    ],
    "fact": "1747. Yale Center for British Art, New Haven."
  },
  "cawarwick": {
    "text": [
      "El largo castillo de Warwick se extiende detrás de un prado verde por el que pasea la gente.",
      "Canaletto pinta varias vistas de este castillo del centro de Inglaterra."
    ],
    "fact": "1748. Metropolitan Museum of Art, Nueva York."
  },
  "cacity": {
    "text": [
      "Desde una terraza junto al río miramos Támesis abajo hacia la City de Londres con sus muchas torres de iglesia.",
      "Por encima de todo se alza la cúpula de la catedral de San Pablo."
    ],
    "fact": "hacia 1750. Yale Center for British Art, New Haven."
  },
  "cawestminster": {
    "text": [
      "La pareja de la vista de la City mira río arriba hacia Westminster y el puente de Westminster.",
      "En el ancho río hay veleros y barcas de remo."
    ],
    "fact": "hacia 1750. Yale Center for British Art, New Haven."
  },
  "capaul": {
    "text": [
      "La gran iglesia de cúpula de San Pablo se alza clara ante un cielo rosado, y delante cruzan la plaza carruajes.",
      "Es la única vista de Canaletto que muestra la iglesia entera de cerca."
    ],
    "fact": "hacia 1754. Yale Center for British Art, New Haven."
  },
  "cacolumn": {
    "text": [
      "Entre grandes árboles se alza una alta columna con una figura en lo alto.",
      "Canaletto combina libremente elementos de distintos lugares en un paisaje inventado."
    ],
    "fact": "hacia 1754. National Gallery of Art, Washington."
  },
  "capalace": {
    "text": [
      "Un gran árbol se inclina sobre un estanque en el que nadan cisnes, y detrás hay un palacio en la ladera.",
      "El cuadro es la pareja del paisaje con la columna."
    ],
    "fact": "hacia 1754. National Gallery of Art, Washington."
  },
  "cawalton": {
    "text": [
      "Un audaz puente de madera cruza el Támesis en Walton con un amplio arco.",
      "En la orilla hay gente sentada y de pie, y encima se acercan nubes oscuras."
    ],
    "fact": "1755. Yale Center for British Art, New Haven."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
