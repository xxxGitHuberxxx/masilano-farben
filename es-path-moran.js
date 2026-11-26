// v10.43 ES content for Thomas Moran’s life journey (1837–1926). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Cooper Hewitt, Smithsonian Design Museum, New York": "Cooper Hewitt, Smithsonian Design Museum, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Smithsonian American Art Museum, Washington": "Smithsonian American Art Museum, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "tmecclesbourne": {
    "title": "Acantilados de Ecclesbourne cerca de Hastings",
    "museum": "National Gallery of Art, Washington"
  },
  "tmjuniata": {
    "title": "El Juniata al atardecer",
    "museum": "National Gallery of Art, Washington"
  },
  "tmtowerfalls": {
    "title": "Sobre las cataratas Tower, Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmtower": {
    "title": "Torre en las cataratas Tower, Yellowstone",
    "museum": "National Gallery of Art, Washington"
  },
  "tmmammoth": {
    "title": "Mammoth Hot Springs, Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmminerva": {
    "title": "Terraza Minerva, Yellowstone",
    "museum": "National Gallery of Art, Washington"
  },
  "tmexcelsior": {
    "title": "Géiser Excelsior, parque de Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmgardiner": {
    "title": "Fuentes termales del río Gardiner, Yellowstone",
    "museum": "National Gallery of Art, Washington"
  },
  "tmsierras": {
    "title": "Cumbre de la Sierra",
    "museum": "Art Institute of Chicago"
  },
  "tmhalfdome": {
    "title": "Half Dome, Yosemite",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmgodland": {
    "title": "Shin-Au-Av-Tu-Weap (Tierra de Dios), cañón del Colorado",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmpowell": {
    "title": "Vista desde la meseta de Powell, Gran Cañón",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmriovirgin": {
    "title": "Acantilados del río Virgin, sur de Utah",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmvirgincanyon": {
    "title": "Cañón del río Virgin, sur de Utah",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmfortgeorge": {
    "title": "Isla Fort George, Florida",
    "museum": "Museo de Arte de Cleveland"
  },
  "tmtetons": {
    "title": "Los Tetons, Idaho",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmruby": {
    "title": "La cordillera Ruby, Nevada",
    "museum": "Museo de Arte de Cleveland"
  },
  "tmcottonwood": {
    "title": "El extremo superior del cañón Little Cottonwood, montes Wasatch",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmgreenriver": {
    "title": "Green River, territorio de Wyoming",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmgreencliffs": {
    "title": "Acantilados del río Green, Wyoming",
    "museum": "National Gallery of Art, Washington"
  },
  "tmupperco": {
    "title": "Acantilados del alto Colorado, territorio de Wyoming",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmsanfrancisco": {
    "title": "Cerca de San Francisco, México",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmsea": {
    "title": "El mar resonante",
    "museum": "National Gallery of Art, Washington"
  },
  "tmhacienda": {
    "title": "Una hacienda mexicana, lago de Cuitzeo",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmvenice88": {
    "title": "Vista de Venecia",
    "museum": "National Gallery of Art, Washington"
  },
  "tmholycross": {
    "title": "Montaña de la Santa Cruz",
    "museum": "National Gallery of Art, Washington"
  },
  "tmvenice91": {
    "title": "Una vista de Venecia",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmkanab": {
    "title": "Niebla en el cañón Kanab, Utah",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmhotsprings": {
    "title": "Fuentes termales, Yellowstone",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmsmelting": {
    "title": "Fundición en Denver",
    "museum": "Museo de Arte de Cleveland"
  },
  "tmtoltec": {
    "title": "Garganta Toltec y Eva Cliff desde el oeste, Colorado",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmgrandcanyon": {
    "title": "El Gran Cañón del Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmrainbow": {
    "title": "Arcoíris sobre el Gran Cañón del Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmsangiorgio": {
    "title": "Venecia desde la torre de San Giorgio",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmbrightangel": {
    "title": "Mirando hacia arriba por el sendero Bright Angel, Gran Cañón",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, Nueva York"
  },
  "tmcuernavaca": {
    "title": "Valle de Cuernavaca",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmsunset": {
    "title": "Nube al atardecer, río Green, Wyoming",
    "museum": "Smithsonian American Art Museum, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.moran = {
  "title": "El camino de vida de Thomas Moran",
  "part": "Las maravillas del Oeste",
  "subtitle": "De Yellowstone al Gran Cañón y Venecia",
  "intro": "Viaja por la vida de Thomas Moran: de Filadelfia a las fuentes termales de Yellowstone, a los cañones del Oeste, a México y a Venecia. Los cuadros proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Thomas Moran muere en Santa Bárbara, California, el 25 de agosto de 1926.",
    "Hoy una cumbre de la cordillera Teton lleva su nombre: el monte Moran."
  ],
  "epilogue": "Thomas Moran muere en Santa Bárbara el 25 de agosto de 1926. El camino lleva de Filadelfia, pasando por Yellowstone y el Gran Cañón, hasta México y Venecia.",
  "life": "1837–1926"
};
  P.stations = Object.assign(P.stations || {}, {
  "tms1": {
    "place": "De Bolton a Filadelfia",
    "when": "1837–1870",
    "mapLabel": "Filadelfia",
    "intro": [
      "Thomas Moran nace en Bolton, Inglaterra, el 12 de febrero de 1837; en 1844 la familia emigra a Estados Unidos y más tarde se instala cerca de Filadelfia.",
      "Se forma en un taller de grabado en madera de Filadelfia y en 1862 viaja a Inglaterra para ver los cuadros de William Turner."
    ]
  },
  "tms2": {
    "place": "Las fuentes termales de Yellowstone",
    "when": "1871–1873",
    "mapLabel": "Yellowstone",
    "intro": [
      "En 1871 Moran viaja con la expedición del geólogo Ferdinand Hayden a la región de Yellowstone.",
      "Sus bocetos y las fotografías de William Henry Jackson contribuyen a que el Congreso convierta Yellowstone en 1872 en el primer parque nacional."
    ]
  },
  "tms3": {
    "place": "Yosemite, Utah y el Gran Cañón",
    "when": "1872–1875",
    "mapLabel": "Gran Cañón",
    "intro": [
      "En 1873 Moran acompaña al explorador John Wesley Powell al sur de Utah y al Gran Cañón.",
      "También plasma en acuarelas el valle de Yosemite y las montañas de Sierra Nevada, en California."
    ]
  },
  "tms4": {
    "place": "Florida y las Montañas Rocosas",
    "when": "1878–1881",
    "mapLabel": "Wyoming",
    "intro": [
      "Además del Oeste, Moran pinta también las costas y las palmeras de Florida.",
      "En 1879 recorre Idaho, Utah, Nevada y Wyoming y llena muchas hojas con bocetos a la acuarela."
    ]
  },
  "tms5": {
    "place": "México, Long Island y Venecia",
    "when": "1882–1891",
    "mapLabel": "East Hampton",
    "intro": [
      "En 1883 Moran viaja a Cuba y México, y desde 1884 tiene una casa con estudio en East Hampton, en Long Island.",
      "En 1886 va por primera vez a Venecia, que después pinta una y otra vez."
    ]
  },
  "tms6": {
    "place": "De vuelta en Yellowstone",
    "when": "1892–1901",
    "mapLabel": "Yellowstone",
    "intro": [
      "En 1892 Moran vuelve a Yellowstone con el fotógrafo William Henry Jackson y dibuja de nuevo el cañón del Yellowstone.",
      "Ese mismo año pinta también en Colorado y Utah."
    ]
  },
  "tms7": {
    "place": "Viajes tardíos",
    "when": "1900–1926",
    "mapLabel": "Arizona",
    "intro": [
      "Incluso de mayor Moran sigue viajando, sobre todo al Gran Cañón, en Arizona.",
      "Pinta hasta una edad avanzada y muere en 1926 en Santa Bárbara, California."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tmecclesbourne": {
    "text": [
      "Colinas y acantilados de un verde grisáceo se extienden por la costa sur de Inglaterra, cerca de Hastings.",
      "Moran dibuja la hoja con grafito, aguada de tinta y gouache sobre papel gris."
    ],
    "fact": "1862. National Gallery of Art, Washington."
  },
  "tmjuniata": {
    "text": [
      "Un amplio valle se abre entre laderas boscosas, y las rocas brillan con la luz de la tarde.",
      "El Juniata es un río de Pensilvania."
    ],
    "fact": "1864. National Gallery of Art, Washington."
  },
  "tmtowerfalls": {
    "text": [
      "Una aguja de roca alta y puntiaguda se alza sobre el agua espumosa.",
      "Al fondo, a la derecha, cae una cascada."
    ],
    "fact": "1872. Smithsonian American Art Museum, Washington."
  },
  "tmtower": {
    "text": [
      "Una torre de roca rojiza se alza en la orilla de un río salvaje.",
      "Moran pinta la acuarela con acuarela y gouache blanco sobre papel azul."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "tmmammoth": {
    "text": [
      "Terrazas blancas y pozas azules se extienden ante una montaña oscura.",
      "Las fuentes termales de Mammoth depositan piedra caliza que parece una escalera."
    ],
    "fact": "1872. Smithsonian American Art Museum, Washington."
  },
  "tmminerva": {
    "text": [
      "En un campo redondo se ven terrazas de colores con pequeñas pozas de agua.",
      "La terraza Minerva forma parte de las fuentes termales de Mammoth, en Yellowstone."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "tmexcelsior": {
    "text": [
      "El vapor se eleva sobre un amplio valle, y a la derecha se alza un pino alto.",
      "El géiser Excelsior se encuentra en una de las cuencas de géiseres del parque de Yellowstone."
    ],
    "fact": "1873. Smithsonian American Art Museum, Washington."
  },
  "tmgardiner": {
    "text": [
      "Terrazas blancas, naranjas y rojas suben por una ladera.",
      "Pequeñas figuras en el borde muestran lo grandes que son las terrazas."
    ],
    "fact": "1873. National Gallery of Art, Washington."
  },
  "tmsierras": {
    "text": [
      "Montañas nevadas se alzan detrás de abetos oscuros y rocas.",
      "Moran pinta la hoja con gouache sobre un dibujo a grafito."
    ],
    "fact": "1872–1875. Art Institute of Chicago."
  },
  "tmhalfdome": {
    "text": [
      "La cumbre de granito del Half Dome se alza en el valle de Yosemite entre peñascos y abetos.",
      "Al fondo hay montañas nevadas."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmgodland": {
    "text": [
      "Rocas rojas se alzan sobre una amplia meseta bajo un cielo oscuro.",
      "La hoja, estrecha y alargada, muestra la tierra junto al Colorado como un panorama."
    ],
    "fact": "1873–1874. Smithsonian American Art Museum, Washington."
  },
  "tmpowell": {
    "text": [
      "La vista baja desde la meseta de Powell hasta el fondo del Gran Cañón.",
      "La meseta lleva el nombre del explorador John Wesley Powell."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmriovirgin": {
    "text": [
      "Una hilera de acantilados erosionados se alza sobre una meseta en el sur de Utah.",
      "Abajo, un arroyo corre por un cañón profundo."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmvirgincanyon": {
    "text": [
      "Un grupo de jinetes cruza el río Virgin por un vado.",
      "A la izquierda se alzan altos acantilados blancos."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmfortgeorge": {
    "text": [
      "Altas palmeras y arbustos se alzan sobre una loma arenosa en Florida.",
      "Sobre ellos pasan grandes nubes blancas."
    ],
    "fact": "1878. Museo de Arte de Cleveland."
  },
  "tmtetons": {
    "text": [
      "Al otro lado de un valle fluvial llano se ven las cumbres azules de los Tetons.",
      "Las cadenas de delante son violetas y azules, y el agua es verde."
    ],
    "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmruby": {
    "text": [
      "Una larga cordillera árida se alza sobre una llanura en Nevada.",
      "Las nubes cubren las cumbres."
    ],
    "fact": "1879. Museo de Arte de Cleveland."
  },
  "tmcottonwood": {
    "text": [
      "La vista pasa sobre un borde rocoso hacia tres cumbres de brillo violeta.",
      "Moran anota en la hoja la fecha: 13 de agosto de 1879."
    ],
    "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmgreenriver": {
    "text": [
      "Rocas con franjas rojas y blancas se reflejan en el agua del río Green, en Wyoming.",
      "Encima se extiende un cielo azul."
    ],
    "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmgreencliffs": {
    "text": [
      "Los acantilados del río Green brillan dorados a la luz del sol.",
      "Delante, un grupo de jinetes cruza la llanura."
    ],
    "fact": "1881. National Gallery of Art, Washington."
  },
  "tmupperco": {
    "text": [
      "Altos acantilados brillan bajo un oscuro cielo de tormenta, y delante unos jinetes descansan junto al río.",
      "Se trata del río Green, llamado también Alto Colorado."
    ],
    "fact": "1882. Smithsonian American Art Museum, Washington."
  },
  "tmsanfrancisco": {
    "text": [
      "Un camino de carros sube por una colina hasta un carro, y a la izquierda se alza una iglesia de misión ante montes áridos.",
      "Moran fecha la hoja el 1 de marzo de 1883."
    ],
    "fact": "1883. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmsea": {
    "text": [
      "Altas olas rompen en espuma sobre una playa llana.",
      "Encima cuelga un cielo gris."
    ],
    "fact": "1884. National Gallery of Art, Washington."
  },
  "tmhacienda": {
    "text": [
      "A través de un arco de árboles oscuros se ve una hacienda soleada a orillas del lago de Cuitzeo, en México.",
      "Delante, una figura solitaria está sentada a la sombra junto a un estanque."
    ],
    "fact": "1885. Smithsonian American Art Museum, Washington."
  },
  "tmvenice88": {
    "text": [
      "Cúpulas, torres y barcas de velas rojas se reflejan en la laguna de Venecia.",
      "Moran pinta la hoja con acuarela y gouache blanco."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "tmholycross": {
    "text": [
      "Sobre una cascada se alza la Montaña de la Santa Cruz, en Colorado.",
      "La montaña debe su nombre a dos barrancos llenos de nieve que juntos parecen una cruz."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "tmvenice91": {
    "text": [
      "Barcas de velas de colores están ante Venecia, y en el horizonte se ven cúpulas y torres.",
      "Moran desplaza un poco algunos edificios para que el cuadro resulte más bello."
    ],
    "fact": "1891. Smithsonian American Art Museum, Washington."
  },
  "tmkanab": {
    "text": [
      "La niebla sube entre las altas paredes de roca del cañón Kanab, en Utah.",
      "Abajo corre el agua entre grandes piedras."
    ],
    "fact": "1892. Smithsonian American Art Museum, Washington."
  },
  "tmhotsprings": {
    "text": [
      "En el centro brilla una fuente termal con vapor y depósitos blancos, rojos y amarillos.",
      "Moran fecha la hoja el 21 de julio de 1892."
    ],
    "fact": "1892. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmsmelting": {
    "text": [
      "De altas chimeneas sale humo oscuro sobre una llanura.",
      "Aquí Moran no muestra una maravilla natural, sino una planta industrial cerca de Denver, en Colorado."
    ],
    "fact": "1892. Museo de Arte de Cleveland."
  },
  "tmtoltec": {
    "text": [
      "Bajo un cielo gris se abre un abismo profundo ante una pared rocosa dentada.",
      "Al fondo brillan manchas blancas en una montaña lejana."
    ],
    "fact": "1892. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmgrandcanyon": {
    "text": [
      "Paredes de roca amarillas y blancas caen a pico en el cañón del Yellowstone, y al fondo se precipita una cascada.",
      "El gran cuadro mide más de cuatro metros de ancho."
    ],
    "fact": "1893–1901. Smithsonian American Art Museum, Washington."
  },
  "tmrainbow": {
    "text": [
      "Un arcoíris se extiende sobre las rocas claras del Gran Cañón del Yellowstone.",
      "La bruma y la luz hacen brillar las rocas casi blancas."
    ],
    "fact": "1900. Smithsonian American Art Museum, Washington."
  },
  "tmsangiorgio": {
    "text": [
      "Desde la torre de San Giorgio Maggiore se contempla Venecia al otro lado del agua.",
      "Los veleros descansan tranquilos en la laguna."
    ],
    "fact": "1900. Smithsonian American Art Museum, Washington."
  },
  "tmbrightangel": {
    "text": [
      "La vista sube desde el fondo de una garganta del Gran Cañón hasta las altas rocas.",
      "Moran fecha la hoja en mayo de 1901."
    ],
    "fact": "1901. Cooper Hewitt, Smithsonian Design Museum, Nueva York."
  },
  "tmcuernavaca": {
    "text": [
      "La vista pasa sobre colinas verdes hasta el lejano valle de Cuernavaca, en México.",
      "En el horizonte las nubes pasan sobre las montañas."
    ],
    "fact": "1903. Smithsonian American Art Museum, Washington."
  },
  "tmsunset": {
    "text": [
      "Una nube rojiza del atardecer flota sobre las rocas del río Green, en Wyoming.",
      "Moran pinta el pequeño cuadro con unos ochenta años."
    ],
    "fact": "1917. Smithsonian American Art Museum, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
