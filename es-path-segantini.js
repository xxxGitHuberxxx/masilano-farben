// v10.21 ES content for Giovanni Segantini’s life journey, Part 1 (1858–1899). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Bündner Kunstmuseum, Chur": "Bündner Kunstmuseum, Coira",
  "Nationalgalerie, Prag": "Galería Nacional, Praga",
  "Privatsammlung": "Colección particular",
  "Museo del Paesaggio, Novara": "Museo del Paesaggio, Novara",
  "Segantini Museum, St. Moritz": "Museo Segantini, St. Moritz",
  "Kunsthaus Zürich": "Kunsthaus de Zúrich",
  "Neue Pinakothek, München": "Neue Pinakothek, Múnich",
  "Galleria Civica G. Segantini, Arco": "Galleria Civica G. Segantini, Arco"
});
  P.works = Object.assign(P.works || {}, {
  "sgself80": {
    "title": "Autorretrato a los veinte años",
    "museum": "Colección particular"
  },
  "sgbrianza": {
    "title": "Paisaje en la Brianza",
    "museum": "Galleria Civica G. Segantini, Arco"
  },
  "avemaria": {
    "title": "Ave Maria en la travesía",
    "museum": "Museo Segantini, St. Moritz"
  },
  "sgstanga": {
    "title": "Alla stanga · Atardecer en el pasto",
    "museum": "Galería Nacional, Praga"
  },
  "sgmadri": {
    "title": "Las dos madres",
    "museum": "Bündner Kunstmuseum, Coira"
  },
  "sgcalza": {
    "title": "Muchacha tejiendo",
    "museum": "Kunsthaus de Zúrich"
  },
  "sgpfluegen": {
    "title": "La labranza",
    "museum": "Neue Pinakothek, Múnich"
  },
  "sgsavognin": {
    "title": "Savognin en invierno",
    "museum": "Museo del Paesaggio, Novara"
  },
  "segantini": {
    "title": "Mediodía en los Alpes",
    "museum": "Museo Segantini, St. Moritz"
  },
  "sgpasture": {
    "title": "Pastos alpinos",
    "museum": "Kunsthaus de Zúrich"
  },
  "sgmessa": {
    "title": "A la última misa",
    "museum": "Galleria Civica G. Segantini, Arco"
  },
  "sgcavalli": {
    "title": "Caballos en el vado",
    "museum": "Colección particular"
  },
  "sgnature": {
    "title": "La naturaleza",
    "museum": "Museo Segantini, St. Moritz"
  }
});
  P.paths = P.paths || {};
  P.paths.segantini = {
  "title": "El camino de vida de Giovanni Segantini",
  "life": "1858–1899",
  "part": "Parte 1 · De Arco a Maloja",
  "subtitle": "Juventud, la Brianza, Savognin y los Alpes altos",
  "intro": "Viaja con Giovanni Segantini, el pintor de la luz alpina: desde una juventud difícil en Arco y Milán, pasando por los años en la Brianza y el descubrimiento de los Grisones, hasta los grandes cuadros divisionistas de Savognin y Maloja. Estaciones breves y cuadros para colorear. Esta primera parte sigue el camino hasta el tríptico alpino inacabado.",
  "ending": [
    "En septiembre de 1899 Segantini sucumbe a una enfermedad en el Schafberg, por encima de Pontresina. Tiene cuarenta y un años y es enterrado en Maloja.",
    "El camino puede seguir creciendo. Dibujos, más cuadros alpinos y la historia de su estudio en el paso de Maloja pueden seguir en una parte posterior."
  ],
  "epilogue": "En septiembre de 1899 Segantini muere en el Schafberg, a los cuarenta y un años. Una parte posterior puede añadir dibujos y más cuadros alpinos."
};
  P.stations = Object.assign(P.stations || {}, {
  "sgarco": {
    "place": "Arco y Milán · Juventud",
    "when": "1858–1881",
    "mapLabel": "Arco",
    "intro": [
      "Giovanni Segantini nace el 15 de enero de 1858 en Arco, entonces parte de la monarquía austriaca, hoy en el Trentino. La madre muere pronto; el padre lleva al niño a Milán y desaparece de su vida.",
      "Sin una familia estable, Segantini entra en el instituto Marchiondi. Más tarde dibuja y pinta en la Accademia di Brera. Desde temprano busca un sostén en el trabajo."
    ]
  },
  "sgbrianza": {
    "place": "En la Brianza",
    "when": "1881–1886",
    "mapLabel": "Brianza",
    "intro": [
      "Con Luigia Bugatti, llamada Bice, Segantini vive en pueblos de la Brianza, al norte de Milán. Las colinas, los lagos y las granjas se convierten en sus primeros paisajes propios.",
      "No pueden casarse por lo civil, porque a Segantini le faltan los papeles. Aun así Bice sigue siendo su compañera y el centro de la familia."
    ]
  },
  "sgsavognin": {
    "place": "Savognin · Atardecer y trabajo",
    "when": "1886–1890",
    "mapLabel": "Savognin",
    "intro": [
      "En 1886 la familia se traslada a Savognin, en los Grisones. La altura, la luz y el trabajo campesino transforman la pintura de Segantini.",
      "Desarrolla el divisionismo: colores puros en finas pinceladas yuxtapuestas que, de lejos, empiezan a brillar."
    ]
  },
  "sgmittag": {
    "place": "Mediodía en los Alpes",
    "when": "1891–1894",
    "mapLabel": "Alpes",
    "intro": [
      "En Savognin nacen los célebres cuadros de los altos pastos, entre ellos «Mediodía en los Alpes». Segantini pinta a menudo al aire libre, también con frío.",
      "Su fama llega ya a París y a las secesiones europeas. En 1894 la familia sigue adelante, tras la luz, hacia Maloja."
    ]
  },
  "sgmaloja": {
    "place": "Maloja · La naturaleza",
    "when": "1894–1899",
    "mapLabel": "Maloja",
    "intro": [
      "En el paso de Maloja Segantini instala su estudio. Planea un gran tríptico alpino para la Exposición Universal de París.",
      "«La naturaleza» sigue siendo el corazón de ese plan. En septiembre de 1899, en el Schafberg, el trabajo se interrumpe."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sgself80": {
    "text": [
      "El autorretrato muestra a Segantini a los veinte años, firme, casi severo, con una mirada oscura. Los años más duros en Milán han quedado atrás.",
      "El cuadro nace hacia 1879-1880, después de su paso por la Accademia di Brera. Ya aquí parece mayor que sus años."
    ],
    "fact": "1879–1880. Colección particular."
  },
  "sgbrianza": {
    "text": [
      "Colinas, caminos y granjas de la Brianza bajo una luz serena. Es uno de los paisajes tempranos en los que Segantini observa con precisión la comarca lombarda.",
      "La pincelada es aún más blanda, menos descompuesta que más tarde en las montañas. La Brianza sigue siendo su escuela antes de los Alpes."
    ],
    "fact": "1884–1885. Galleria Civica G. Segantini, Arco."
  },
  "avemaria": {
    "text": [
      "Un pastor y una mujer deslizan la barca por un lago quieto, con la oveja a proa. En ese instante juntan las manos para el Ave Maria.",
      "Segantini pintó el motivo dos veces. Esta versión de 1886 ya se hizo en las montañas; la medalla de oro de Ámsterdam en 1883 la había recibido la primera versión, de 1882."
    ],
    "fact": "1886. Museo Segantini, St. Moritz."
  },
  "sgstanga": {
    "text": [
      "Las vacas están atadas a la barra en el pasto, mientras el atardecer cubre el campo. Esta versión, en la Galería Nacional de Praga, pertenece a los primeros años en Savognin.",
      "Los animales son pesados y cercanos, el cielo ya es fresco. Aquí Segantini halla la serena grandeza que distingue sus cuadros alpinos."
    ],
    "fact": "1886–1888. Galería Nacional, Praga."
  },
  "sgmadri": {
    "text": [
      "Una madre lleva a su hijo por un camino de montaña; una oveja y un cordero la siguen. Detrás, las cumbres quedan en la luz.",
      "Segantini comienza el cuadro en 1899 en Maloja; tras su muerte lo termina Giovanni Giacometti. Se conserva en el Bündner Kunstmuseum de Coira."
    ],
    "fact": "1899–1900. Bündner Kunstmuseum, Coira."
  },
  "sgcalza": {
    "text": [
      "Una muchacha está sentada tejiendo, absorta en el trabajo sencillo. Segantini observa el gesto con precisión, sin convertirlo en anécdota.",
      "El cuadro pertenece al Kunsthaus de Zúrich. Muestra cuán cercana le era la gente de su pueblo."
    ],
    "fact": "1888. Kunsthaus de Zúrich."
  },
  "sgpfluegen": {
    "text": [
      "Un campesino ara la ladera, los bueyes tiran, la tierra se abre. El cuadro es una de las obras clave de los años de Savognin.",
      "El trabajo es duro y solemne a la vez. Segantini no lo pinta como género, sino como parte del orden alpino."
    ],
    "fact": "1890. Neue Pinakothek, Múnich."
  },
  "sgsavognin": {
    "text": [
      "Savognin en invierno: el pueblo yace bajo la nieve, el aire es claro y frío. Segantini recoge el silencio de la estación, no un motivo pintoresco.",
      "En cuadros así, la altura misma se vuelve el tema. La luz viene de lo alto y permanece largo rato en el blanco."
    ],
    "fact": "hacia 1890. Museo del Paesaggio, Novara."
  },
  "segantini": {
    "text": [
      "Una pastora se cubre los ojos ante el sol del mediodía, con ovejas y praderas de montaña a su alrededor. La luz cae vertical, las sombras son cortas.",
      "Segantini pintó el cuadro en 1891 en Savognin. Las pinceladas de color puro hacen que la altura parezca especialmente clara."
    ],
    "fact": "1891. Museo Segantini, St. Moritz."
  },
  "sgpasture": {
    "text": [
      "Ancha hierba alpina, animales, un cielo alto. El cuadro reúne la serena amplitud de las alturas de los Grisones.",
      "Cuelga en el Kunsthaus de Zúrich y marca el paso de los años de Savognin a Maloja."
    ],
    "fact": "hacia 1893. Kunsthaus de Zúrich."
  },
  "sgmessa": {
    "text": [
      "La gente va a misa, con un movimiento sereno, casi solemne. El motivo pertenece aún a la época lombarda y a los primeros años en los Grisones.",
      "Segantini une la vida cotidiana del pueblo a una devoción callada, sin convertir el cuadro en una escena."
    ],
    "fact": "1886–1887. Galleria Civica G. Segantini, Arco."
  },
  "sgcavalli": {
    "text": [
      "Los caballos cruzan un tramo somero del agua, con la luz sobre los flancos y la superficie. Es un motivo temprano, observado con precisión.",
      "Aún ejercitado en la llanura, Segantini dedicará más tarde la misma atención a los animales de los Alpes."
    ],
    "fact": "hacia 1882. Colección particular."
  },
  "sgnature": {
    "text": [
      "«La naturaleza» es el panel central del tríptico alpino previsto: una pastora en un alto paisaje abierto, bajo un cielo amplio.",
      "Segantini trabaja en él en los últimos años de su vida. El cuadro sigue siendo el testimonio más maduro de su pintura alpina."
    ],
    "fact": "1897–1899. Museo Segantini, St. Moritz."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
