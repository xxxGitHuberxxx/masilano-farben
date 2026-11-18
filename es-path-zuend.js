// v10.23 ES content for Robert Zünd’s life journey, Part 1 (1827–1909). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Colección particular",
  "Kunstmuseum Luzern": "Kunstmuseum de Lucerna",
  "Kunsthaus Zürich": "Kunsthaus de Zúrich",
  "Kunstmuseum Basel": "Kunstmuseum de Basilea",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York"
});
  P.works = Object.assign(P.works || {}, {
  "rzpilatus": {
    "title": "El Pilatus desde el oeste",
    "museum": "Kunsthaus de Zúrich"
  },
  "rzvierwald": {
    "title": "Atardecer en el lago de los Cuatro Cantones",
    "museum": "Colección particular"
  },
  "rzernte": {
    "title": "La cosecha",
    "museum": "Kunstmuseum de Basilea"
  },
  "rzbaeume": {
    "title": "Árboles",
    "museum": "Colección particular"
  },
  "rzhirtenhof": {
    "title": "Granja suiza (Hirtenhof)",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rzsempach": {
    "title": "La capilla de la batalla de Sempach",
    "museum": "Kunsthaus de Zúrich"
  },
  "rzseesemp": {
    "title": "El lago de Sempach",
    "museum": "Kunsthaus de Zúrich"
  },
  "rzeggen": {
    "title": "Campesinos rastrillando con bueyes",
    "museum": "Colección particular"
  },
  "rzkorn": {
    "title": "Trigal con robles",
    "museum": "Colección particular"
  },
  "rzreuss": {
    "title": "El Reuss con el monasterio de Rathausen",
    "museum": "Colección particular"
  },
  "rzeichen": {
    "title": "Robledal",
    "museum": "Kunsthaus de Zúrich"
  },
  "rzbuchen": {
    "title": "Hayedo",
    "museum": "Kunstmuseum de Lucerna"
  },
  "rzschafe": {
    "title": "Paisaje de tarde con rebaño de ovejas",
    "museum": "Kunsthaus de Zúrich"
  }
});
  P.paths = P.paths || {};
  P.paths.zuend = {
  "title": "El camino de vida de Robert Zünd",
  "life": "1827–1909",
  "part": "Parte 1 · Lucerna y la luz de los campos",
  "subtitle": "Lagos, campos y robledales",
  "intro": "Viaja con Robert Zünd, el paisajista de Lucerna: desde sus años de aprendizaje en Ginebra, pasando por los campos y lagos de Suiza central, hasta los grandes bosques de robles y hayas. Estaciones breves y cuadros para colorear. Esta primera parte sigue su camino por el paisaje.",
  "ending": [
    "Robert Zünd muere en Lucerna el 15 de enero de 1909. Toda su vida pintó el paisaje de su tierra con gran paciencia.",
    "El camino puede seguir creciendo. Más campos, bosques y paisajes bíblicos pueden seguir en una parte posterior."
  ],
  "epilogue": "El 15 de enero de 1909 Zünd muere en Lucerna. Una parte posterior puede añadir más bosques y campos."
};
  P.stations = Object.assign(P.stations || {}, {
  "rzjung": {
    "place": "Lucerna y Ginebra · Aprendizaje",
    "when": "1827–1851",
    "mapLabel": "Lucerna",
    "intro": [
      "Robert Zünd nace en Lucerna el 3 de mayo de 1827. Desde 1848 estudia en Ginebra con François Diday y Alexandre Calame.",
      "En 1851 pinta el Pilatus y el lago de los Cuatro Cantones, el paisaje de sus orígenes."
    ]
  },
  "rzfeld": {
    "place": "Campos y árboles",
    "when": "1852–1865",
    "mapLabel": "Campos",
    "intro": [
      "Tras una estancia en París, Zünd vuelve a Lucerna y se queda allí. Pinta campos, granjas y árboles aislados.",
      "Con «La cosecha» de 1860 encuentra su propio estilo preciso."
    ]
  },
  "rzsemp": {
    "place": "Sempach y la región de los lagos",
    "when": "1860–1875",
    "mapLabel": "Sempach",
    "intro": [
      "Al norte de Lucerna están el lago de Sempach y los campos de la meseta suiza. Zünd pinta la capilla, el lago y el trabajo del campo.",
      "Trabaja con lentitud y cuidado, a menudo durante años en un mismo motivo."
    ]
  },
  "rzwald": {
    "place": "Los grandes bosques",
    "when": "1880–1890",
    "mapLabel": "Bosques",
    "intro": [
      "En los años 1880 nacen los famosos cuadros de bosque de Zünd. Robles y hayas se convierten en protagonistas.",
      "La luz cae entre las hojas y ordena todo el espacio."
    ]
  },
  "rzspaet": {
    "place": "Atardecer en el Reuss",
    "when": "1889–1909",
    "mapLabel": "Reuss",
    "intro": [
      "En sus últimos años Zünd pinta cuadros de tarde más suaves, rebaños y el río aguas abajo de Lucerna.",
      "Permanece hasta el final en su ciudad y con su paisaje."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rzpilatus": {
    "text": [
      "El Pilatus se alza sobre prados y bosque, con una luz clara y quieta. Zünd ronda los veinticinco años y pinta la montaña de Lucerna.",
      "Ya en este cuadro temprano se ve su calma ante la naturaleza."
    ],
    "fact": "1851. Kunsthaus de Zúrich."
  },
  "rzvierwald": {
    "text": [
      "La tarde cae sobre el lago de los Cuatro Cantones y el agua refleja el cielo. Zünd pinta el cuadro el mismo año que el Pilatus.",
      "El lago junto a su casa sigue siendo uno de sus grandes temas."
    ],
    "fact": "1851. Colección particular."
  },
  "rzernte": {
    "text": [
      "Un trigal dorado, gente en la cosecha y encima un amplio cielo de verano. El cuadro de 1860 es una de las obras más conocidas de Zünd.",
      "Cada espiga y cada árbol están pintados con gran cuidado."
    ],
    "fact": "1860. Kunstmuseum de Basilea."
  },
  "rzbaeume": {
    "text": [
      "Un grupo de árboles altos se alza en la luz, el follaje denso y vivo. Zünd estudia los árboles una y otra vez, casi como retratos.",
      "De estudios así nacerán después sus grandes cuadros de bosque."
    ],
    "fact": "1865. Colección particular."
  },
  "rzhirtenhof": {
    "text": [
      "Una granja se encuentra entre árboles y prados, tranquila y habitada. El cuadro pertenece hoy al Metropolitan Museum de Nueva York.",
      "Zünd muestra la vida rural sin anécdota, solo con luz y orden."
    ],
    "fact": "sin fecha. Metropolitan Museum of Art, Nueva York."
  },
  "rzsempach": {
    "text": [
      "La pequeña capilla cerca de Sempach se alza en un paisaje apacible. Recuerda la batalla de 1386.",
      "Zünd pinta el lugar no como historia, sino como presencia tranquila."
    ],
    "fact": "1866. Kunsthaus de Zúrich."
  },
  "rzseesemp": {
    "text": [
      "El lago de Sempach se extiende llano y claro entre colinas. Agua y cielo se reparten el cuadro.",
      "Zünd encuentra sus motivos casi siempre a pocas horas de Lucerna."
    ],
    "fact": "hacia 1860. Kunsthaus de Zúrich."
  },
  "rzeggen": {
    "text": [
      "Unos campesinos pasan la grada por el campo con bueyes. El trabajo es lento, la tierra amplia.",
      "Zünd pinta el ritmo del año campesino con gran precisión."
    ],
    "fact": "1868. Colección particular."
  },
  "rzkorn": {
    "text": [
      "Altos robles se alzan al borde de un trigal maduro. Luz y sombra se alternan con calma.",
      "Campo y árbol, dos motivos preferidos de Zünd, se encuentran en este cuadro."
    ],
    "fact": "1875. Colección particular."
  },
  "rzreuss": {
    "text": [
      "El Reuss fluye tranquilo junto al monasterio de Rathausen, río abajo de Lucerna. Orillas y árboles se reflejan en el agua.",
      "El río une el lago con la tierra que Zünd pintó tantas veces."
    ],
    "fact": "antes de 1909. Colección particular."
  },
  "rzeichen": {
    "text": [
      "Viejos robles forman un bosque luminoso; la luz cae sobre el camino y el claro. El cuadro pertenece al Kunsthaus de Zúrich.",
      "Zünd pinta cada hoja y, sin embargo, el conjunto sigue sereno y amplio."
    ],
    "fact": "1882. Kunsthaus de Zúrich."
  },
  "rzbuchen": {
    "text": [
      "Lisos troncos de haya se alzan juntos y la luz se vuelve verde y dorada. El cuadro está en el Kunstmuseum de Lucerna.",
      "En el bosque Zünd encuentra a la vez silencio y orden."
    ],
    "fact": "1886–1887. Kunstmuseum de Lucerna."
  },
  "rzschafe": {
    "text": [
      "Un rebaño de ovejas atraviesa al atardecer un paisaje tranquilo. La luz cálida se tiende baja sobre la tierra.",
      "En sus últimos años los cuadros de Zünd se vuelven más suaves y serenos."
    ],
    "fact": "1889–1891. Kunsthaus de Zúrich."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
