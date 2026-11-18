// v10.21 ES content for Carl Spitzweg’s life journey, Part 1 (1808–1885). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Grohmann Museum, Milwaukee": "Grohmann Museum, Milwaukee",
  "Privatsammlung": "Colección particular",
  "Neue Pinakothek, München": "Neue Pinakothek, Múnich"
});
  P.works = Object.assign(P.works || {}, {
  "csself": {
    "title": "Autorretrato",
    "museum": "Colección particular"
  },
  "cspoet": {
    "title": "El poeta pobre",
    "museum": "Neue Pinakothek, Múnich"
  },
  "csgarret": {
    "title": "La buhardilla",
    "museum": "Colección particular"
  },
  "csalchem": {
    "title": "El alquimista",
    "museum": "Grohmann Museum, Milwaukee"
  },
  "csbutterfly": {
    "title": "El cazamariposas",
    "museum": "Colección particular"
  },
  "csbook": {
    "title": "El ratón de biblioteca",
    "museum": "Grohmann Museum, Milwaukee"
  },
  "cscactus": {
    "title": "El amigo de los cactus",
    "museum": "Colección particular"
  },
  "csastro": {
    "title": "El astrónomo",
    "museum": "Colección particular"
  },
  "csflowers": {
    "title": "El amigo de las flores",
    "museum": "Colección particular"
  },
  "csangler": {
    "title": "El pescador",
    "museum": "Colección particular"
  },
  "cspost": {
    "title": "El cartero en el Rosenthal",
    "museum": "Colección particular"
  },
  "cswatch": {
    "title": "El sereno dormido",
    "museum": "Colección particular"
  },
  "csmonks": {
    "title": "Monjes que disputan",
    "museum": "Colección particular"
  },
  "cssunday": {
    "title": "El paseo dominical",
    "museum": "Colección particular"
  },
  "cschurch": {
    "title": "El camino a la iglesia",
    "museum": "Colección particular"
  }
});
  P.paths = P.paths || {};
  P.paths.spitzweg = {
  "title": "El camino de vida de Carl Spitzweg",
  "life": "1808–1885",
  "part": "Parte 1 · Múnich y los originales",
  "subtitle": "Del farmacéutico al pintor del Biedermeier",
  "intro": "Viaja con Carl Spitzweg, el pintor de Múnich que empezó como farmacéutico: desde las buhardillas del poeta pobre, pasando por ratones de biblioteca, amigos de los cactus y serenos, hasta el paseo dominical. Estaciones breves y cuadros para colorear. Esta primera parte sigue los célebres cuadros de género.",
  "ending": [
    "Spitzweg muere en Múnich el 23 de septiembre de 1885. Permanece soltero y fiel a su humor callado y preciso.",
    "El camino puede seguir creciendo. Más viajes, paisajes y cuadros de género tardíos pueden seguir en una parte posterior."
  ],
  "epilogue": "El 23 de septiembre de 1885 Spitzweg muere en Múnich. Una parte posterior puede añadir más paisajes y cuadros de género."
};
  P.stations = Object.assign(P.stations || {}, {
  "csmuc": {
    "place": "Múnich · El farmacéutico se hace pintor",
    "when": "1808–1842",
    "mapLabel": "Múnich",
    "intro": [
      "Carl Spitzweg nace en Múnich el 5 de febrero de 1808 y primero es farmacéutico. Tras una enfermedad a principios de los años 1830 se entrega de lleno a la pintura.",
      "El autorretrato de hacia 1842 lo muestra ya como pintor. La ciudad sigue siendo su lugar, aunque los motivos estén a menudo extramuros."
    ]
  },
  "csdach": {
    "place": "Buhardillas",
    "when": "1837–1842",
    "mapLabel": "Buhardilla",
    "intro": [
      "A finales de los años 1830 nacen los cuadros de buhardilla, entre ellos «El poeta pobre» de 1839. Spitzweg halla aquí su tono: preciso, callado, sin saña.",
      "La estrechez bajo el tejado se vuelve una mirada sobre una sola vida. Múnich se reconoce en estas estancias."
    ]
  },
  "cssond": {
    "place": "Originales",
    "when": "1837–1860",
    "mapLabel": "Originales",
    "intro": [
      "Alquimista, cazamariposas, ratón de biblioteca, amigo de los cactus, astrónomo, amante de las flores: Spitzweg inventa una galería de solitarios absortos.",
      "El humor está en la exactitud. Ninguno de estos hombres queda reducido a una caricatura."
    ]
  },
  "csstadt": {
    "place": "Ciudad y ronda",
    "when": "1850–1860",
    "mapLabel": "Ciudad",
    "intro": [
      "Cartero, sereno dormido, monjes que disputan, un pescador junto al agua: Spitzweg ve lo cotidiano de la ciudad y de sus orillas.",
      "La figura sigue sola, el lugar es preciso. Son comedias calladas, sin un gran remate."
    ]
  },
  "cssonntag": {
    "place": "Domingo en Baviera",
    "when": "1841–1860",
    "mapLabel": "Domingo",
    "intro": [
      "El paseo dominical y el camino a la iglesia unen sociedad y paisaje. Spitzweg conoce el rito burgués y la ancha naturaleza bávara.",
      "Muere en Múnich el 23 de septiembre de 1885. Una parte posterior puede añadir viajes y más paisajes."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "csself": {
    "text": [
      "El autorretrato de hacia 1842 muestra a Spitzweg como pintor joven, con la farmacia ya detrás. La mirada es abierta, casi alegre, sin pose.",
      "Se formó como pintor por su cuenta, después de una enfermedad a principios de los años 1830. Múnich sigue siendo su lugar."
    ],
    "fact": "hacia 1842. Colección particular."
  },
  "cspoet": {
    "text": [
      "Bajo el tejado el poeta yace en la cama, con el corte de un paraguas encima y manuscritos a su alrededor. El cuadro de 1839 es la obra más conocida de Spitzweg.",
      "Cuelga en la Neue Pinakothek de Múnich. El humor es callado y preciso: la estrechez no se ridiculiza, se contempla."
    ],
    "fact": "1839. Neue Pinakothek, Múnich."
  },
  "csgarret": {
    "text": [
      "Una pequeña estancia bajo el tejado, parca en muebles, la ventana como única amplitud. Spitzweg vuelve una y otra vez a este lugar.",
      "La buhardilla no es solo un motivo, sino un punto de vista: desde arriba sobre la ciudad, y sin embargo muy cerca de una sola vida."
    ],
    "fact": "hacia 1840. Colección particular."
  },
  "csalchem": {
    "text": [
      "En una cámara estrecha el alquimista trabaja con retortas y hornillo. El cuadro temprano de 1837 muestra ya la mirada de Spitzweg sobre el original absorto.",
      "La ciencia es aquí una pasión callada, casi una comedia, pero sin saña."
    ],
    "fact": "1837. Grohmann Museum, Milwaukee."
  },
  "csbutterfly": {
    "text": [
      "Un hombre con red va tras la mariposa, absorto del todo, un poco cómico y muy serio. Spitzweg quiere a esos coleccionistas sumidos.",
      "El motivo de hacia 1840 pertenece a los cuadros alegres de la época de Múnich. El paisaje sigue siendo un marco callado."
    ],
    "fact": "hacia 1840. Colección particular."
  },
  "csbook": {
    "text": [
      "En lo alto de la escalera el lector está entre los anaqueles, un libro en la mano, otro bajo el brazo, otro entre las rodillas. El mundo es la biblioteca.",
      "El cuadro de hacia 1850 es una de las invenciones más célebres de Spitzweg. El humor está en la exactitud, no en la exageración."
    ],
    "fact": "hacia 1850. Grohmann Museum, Milwaukee."
  },
  "cscactus": {
    "text": [
      "Un hombre contempla su cactus, de cerca, casi con respeto, como si la planta fuera un interlocutor. Spitzweg conoce la pasión callada del coleccionista.",
      "El cuadro de mediados de siglo es uno de sus originales más entrañables. Nada se toma a risa."
    ],
    "fact": "hacia 1856. Colección particular."
  },
  "csastro": {
    "text": [
      "Un sabio mira al cielo, el instrumento listo, el mundo de abajo muy lejos. Spitzweg coloca la figura absorta al aire libre.",
      "El cuadro de hacia 1860 sigue siendo un género y sin embargo se vuelve un paisaje callado. El humor está en la seriedad de la postura."
    ],
    "fact": "hacia 1860. Colección particular."
  },
  "csflowers": {
    "text": [
      "Un hombre está ante sus flores, cuidadoso, casi devoto. Spitzweg da a la pequeña alegría la misma seriedad que al poeta pobre.",
      "Los cuadros de jardín pertenecen de lleno a su obra. El verde es preciso, la figura sigue humana y cercana."
    ],
    "fact": "hacia 1855. Colección particular."
  },
  "csangler": {
    "text": [
      "Junto al agua está sentado el pescador, paciente y solo. Spitzweg deja el paisaje amplio, la figura pequeña, el tiempo lento.",
      "Es un cuadro callado de la espera. El humor, si está, permanece bajo la superficie."
    ],
    "fact": "hacia 1860. Colección particular."
  },
  "cspost": {
    "text": [
      "El cartero camina por el Rosenthal, con la bolsa al hombro, el camino entre árboles y casas. Spitzweg pinta el servicio como un cotidiano sereno.",
      "El motivo de hacia 1858 pertenece a las vistas de ciudad y arrabal en las que una sola persona sostiene la escena."
    ],
    "fact": "hacia 1858. Colección particular."
  },
  "cswatch": {
    "text": [
      "El sereno se ha dormido, el farol sigue ahí, el deber olvidado un instante. Spitzweg es indulgente, no severo.",
      "El cuadro pertenece a las comedias calladas de la ciudad de noche. La figura sigue digna, también dormida."
    ],
    "fact": "hacia 1850. Colección particular."
  },
  "csmonks": {
    "text": [
      "Dos monjes están absortos en una conversación, los gestos y los rostros sostienen la disputa. Spitzweg observa el celo sin tomar partido.",
      "Los cuadros de convento y de monjes pertenecen de lleno a su género. El humor está en la seriedad de ambos."
    ],
    "fact": "hacia 1860. Colección particular."
  },
  "cssunday": {
    "text": [
      "Una familia sale a pasear el domingo, festiva y un poco rígida, el paisaje amplio a sus espaldas. Spitzweg conoce bien el rito burgués.",
      "El motivo es uno de sus cuadros de sociedad más entrañables. El humor sigue amable, la observación es aguda."
    ],
    "fact": "hacia 1841. Colección particular."
  },
  "cschurch": {
    "text": [
      "La gente va a la iglesia, pequeña en un paisaje amplio, el camino cruza el campo. Spitzweg une el género y la naturaleza.",
      "Cuadros así pertenecen a la obra tardía más serena. El domingo es aquí menos comedia que orden del día."
    ],
    "fact": "hacia 1860. Colección particular."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
