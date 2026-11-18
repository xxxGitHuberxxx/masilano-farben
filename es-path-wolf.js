// v10.23 ES content for Caspar Wolf’s life journey, Part 1 (1735–1783). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Standort ohne Angabe": "Ubicación no indicada",
  "Privatsammlung": "Colección particular",
  "Kunsthaus Zürich": "Kunsthaus de Zúrich",
  "National Gallery, London": "National Gallery, Londres",
  "Kunst Museum Winterthur": "Kunst Museum Winterthur",
  "Kunstmuseum Basel": "Kunstmuseum de Basilea"
});
  P.works = Object.assign(P.works || {}, {
  "cwruine": {
    "title": "Paisaje rocoso con cazador y castillo en ruinas",
    "museum": "Colección particular"
  },
  "cwbauernhof": {
    "title": "Paisaje con granja",
    "museum": "Ubicación no indicada"
  },
  "cwgletscher": {
    "title": "El glaciar inferior de Grindelwald",
    "museum": "Kunst Museum Winterthur"
  },
  "cwsteg": {
    "title": "Pasarela de madera sobre el Lütschine",
    "museum": "Kunst Museum Winterthur"
  },
  "cwstaubbach": {
    "title": "La segunda cascada del Staubbach en invierno",
    "museum": "Ubicación no indicada"
  },
  "cwlauteraar": {
    "title": "El glaciar de Lauteraar",
    "museum": "Kunstmuseum de Basilea"
  },
  "cwhoehle": {
    "title": "Cueva rocosa con cascada",
    "museum": "Kunsthaus de Zúrich"
  },
  "cwseelisberg": {
    "title": "Vista desde Seelisberg sobre el lago de Uri",
    "museum": "Colección particular"
  },
  "cwmuota": {
    "title": "Puente sobre el Muota cerca de Schwyz",
    "museum": "Colección particular"
  },
  "cwrhone": {
    "title": "El Ródano cerca de Gletsch",
    "museum": "Colección particular"
  },
  "cwgelten": {
    "title": "El Geltenschuss en el valle de Lauenen",
    "museum": "National Gallery, Londres"
  },
  "cwseeberg": {
    "title": "Vista sobre el lago Seeberg",
    "museum": "Colección particular"
  },
  "cwbechburg": {
    "title": "El castillo de Neu-Bechburg cerca de Oensingen",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.wolf = {
  "title": "El camino de vida de Caspar Wolf",
  "life": "1735–1783",
  "part": "Parte 1 · El primer pintor de los Altos Alpes",
  "subtitle": "Glaciares, cuevas y cascadas",
  "intro": "Viaja con Caspar Wolf, de Muri en Argovia, uno de los primeros en pintar los Altos Alpes en el lugar: desde los primeros paisajes, pasando por los glaciares de Grindelwald y las cuevas y cascadas, hasta el valle de Lauenen. Estaciones breves y cuadros para colorear. Esta primera parte lo sigue a la montaña.",
  "ending": [
    "Caspar Wolf muere en Heidelberg el 6 de octubre de 1783, a los cuarenta y ocho años. Sus cuadros de los Altos Alpes se adelantaron mucho a su tiempo.",
    "El camino puede seguir creciendo. Más glaciares, puentes y vistas pueden seguir en una parte posterior."
  ],
  "epilogue": "El 6 de octubre de 1783 Wolf muere en Heidelberg. Una parte posterior puede añadir más cuadros alpinos."
};
  P.stations = Object.assign(P.stations || {}, {
  "cwmuri": {
    "place": "Muri y años de viaje",
    "when": "1735–1773",
    "mapLabel": "Muri",
    "intro": [
      "Caspar Wolf nace en Muri, en Argovia, el 3 de mayo de 1735. Se forma en Constanza, Augsburgo y Múnich y más tarde trabaja en París.",
      "De vuelta en Suiza pinta primero paisajes inventados."
    ]
  },
  "cwgrindel": {
    "place": "Grindelwald y Lauterbrunnen",
    "when": "1774–1775",
    "mapLabel": "Grindelwald",
    "intro": [
      "En 1774 el editor bernés Abraham Wagner le encarga pintar los Alpes. Wolf viaja al Oberland con el naturalista Jakob Samuel Wyttenbach.",
      "Pinta glaciares, arroyos y cascadas en el lugar."
    ]
  },
  "cwhoch": {
    "place": "Los Altos Alpes",
    "when": "1776",
    "mapLabel": "Grimsel",
    "intro": [
      "En 1776 Wolf sube hasta los glaciares del Grimsel. Pinta hielo, roca y cuevas en un mundo que casi nadie conoce.",
      "Sus cuadros sirven de modelo para grabados."
    ]
  },
  "cwinner": {
    "place": "Suiza central y el Valais",
    "when": "1777–1778",
    "mapLabel": "Uri",
    "intro": [
      "En 1777 y 1778 Wolf viaja al lago de Uri, a Schwyz y hasta el Ródano cerca de Gletsch.",
      "Lagos, puentes y valles fluviales amplían sus cuadros alpinos."
    ]
  },
  "cwspaet": {
    "place": "Lauenen, el Jura y la despedida",
    "when": "1778–1783",
    "mapLabel": "Lauenen",
    "intro": [
      "Hacia 1778 Wolf pinta el valle de Lauenen y el pie del Jura. Después deja Suiza y trabaja en Alemania.",
      "En 1783 muere en Heidelberg, sin gran fama en vida."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cwruine": {
    "text": [
      "Un cazador está entre rocas y arriba se alza un castillo en ruinas. El cuadro nace poco después de la estancia de Wolf en París.",
      "El paisaje aún es inventado, no visto en el lugar."
    ],
    "fact": "1771. Colección particular."
  },
  "cwbauernhof": {
    "text": [
      "Una casa de campo se encuentra en un paisaje verde y tranquilo. Aquí Wolf pinta todavía la llanura.",
      "Un año después empieza su gran viaje a los Alpes."
    ],
    "fact": "1773. Ubicación no indicada."
  },
  "cwgletscher": {
    "text": [
      "El hielo del glaciar inferior de Grindelwald llega hasta el valle y delante corre el Lütschine. Encima está el Mettenberg.",
      "Wolf pinta el glaciar en el lugar en 1774, algo muy raro en su época."
    ],
    "fact": "1774. Kunst Museum Winterthur."
  },
  "cwsteg": {
    "text": [
      "Una estrecha pasarela de madera cruza el bravo Lütschine cerca de Gsteig. Pequeñas figuras muestran la escala de la naturaleza.",
      "El viaje al Oberland bernés le da a Wolf muchos motivos nuevos."
    ],
    "fact": "1774. Kunst Museum Winterthur."
  },
  "cwstaubbach": {
    "text": [
      "Una cascada cae por una pared de roca, rodeada de hielo y nieve. Wolf pinta el valle de Lauterbrunnen en invierno.",
      "Casi ningún pintor antes que él había mostrado los Alpes en esta estación."
    ],
    "fact": "hacia 1775. Ubicación no indicada."
  },
  "cwlauteraar": {
    "text": [
      "Un amplio glaciar se extiende entre montañas grises, en lo alto de la zona del Grimsel. Las personas aparecen solo como pequeños puntos.",
      "Wolf muestra los Altos Alpes como un mundo extraño y poderoso."
    ],
    "fact": "1776. Kunstmuseum de Basilea."
  },
  "cwhoehle": {
    "text": [
      "Desde una oscura cueva de roca se mira una cascada luminosa. Luz y oscuridad están duramente una junto a otra.",
      "Las cuevas son de los motivos más originales de Wolf."
    ],
    "fact": "1776. Kunsthaus de Zúrich."
  },
  "cwseelisberg": {
    "text": [
      "Desde Seelisberg se mira abajo el lago de Uri en dirección a Altdorf. Orillas escarpadas enmarcan el agua.",
      "En 1777 Wolf viaja a Suiza central."
    ],
    "fact": "1777. Colección particular."
  },
  "cwmuota": {
    "text": [
      "Un puente de piedra cruza el Muota. Agua, roca y arco forman el cuadro.",
      "En Wolf los puentes muestran cómo el ser humano abre camino en la montaña."
    ],
    "fact": "1778. Colección particular."
  },
  "cwrhone": {
    "text": [
      "El joven Ródano fluye por un valle alto cerca de Gletsch, rodeado del Gadmerfluh, el Tellistock y el Wendenstock.",
      "Wolf pinta los nacimientos de grandes ríos en los Alpes."
    ],
    "fact": "1778. Colección particular."
  },
  "cwgelten": {
    "text": [
      "Una cascada pasa bajo un puente de nieve hacia el valle de Lauenen. El cuadro pertenece a la National Gallery de Londres.",
      "Hoy es una de las obras más conocidas de Wolf."
    ],
    "fact": "hacia 1778. National Gallery, Londres."
  },
  "cwseeberg": {
    "text": [
      "Desde un alpe se mira sobre el pequeño lago Seeberg hacia las montañas. La luz es clara y fresca.",
      "Wolf pinta también los lugares tranquilos de los Altos Alpes."
    ],
    "fact": "hacia 1778. Colección particular."
  },
  "cwbechburg": {
    "text": [
      "El castillo de Neu-Bechburg se alza en una colina al pie del Jura. Abajo se extiende la amplia campiña.",
      "Tras los Alpes, Wolf se vuelve también hacia el Jura."
    ],
    "fact": "1778. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
