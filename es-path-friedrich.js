// v10.0 ES content for Caspar David Friedrich’s life journey, Part 1 (1774–1817). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Kunsthalle Mannheim": "Kunsthalle Mannheim",
  "Pommersches Landesmuseum, Greifswald": "Museo Estatal de Pomerania, Greifswald",
  "Statens Museum for Kunst, Kopenhagen": "SMK – Galería Nacional de Dinamarca, Copenhague",
  "Hamburger Kunsthalle": "Hamburger Kunsthalle",
  "Staatliche Kunsthalle Karlsruhe": "Staatliche Kunsthalle Karlsruhe",
  "Kupferstichkabinett, Berlin": "Kupferstichkabinett, Berlín",
  "Hamburger Kunsthalle, Kupferstichkabinett": "Hamburger Kunsthalle, gabinete de estampas",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Klassik Stiftung Weimar": "Klassik Stiftung Weimar",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Albertina, Wien": "Albertina, Viena",
  "Staatliche Kunstsammlungen Dresden": "Colecciones Estatales de Arte de Dresde",
  "Österreichische Galerie Belvedere, Wien": "Belvedere, Viena",
  "Staatsgalerie Stuttgart": "Staatsgalerie Stuttgart",
  "Thüringer Landesmuseum Heidecksburg, Rudolstadt": "Museo estatal Heidecksburg, Rudolstadt",
  "Alte Nationalgalerie, Berlin": "Alte Nationalgalerie, Berlín",
  "Museum Folkwang, Essen": "Museum Folkwang, Essen",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Puschkin-Museum, Moskau": "Museo Pushkin, Moscú",
  "National Gallery, London": "National Gallery, Londres",
  "Museum für Kunst und Kulturgeschichte, Dortmund": "Museo de Arte e Historia Cultural, Dortmund",
  "Privatsammlung": "Colección particular",
  "Stiftung Preussische Schlösser und Gärten, Berlin": "Fundación de Palacios y Jardines Prusianos, Berlín",
  "Nationalmuseum Oslo": "Museo Nacional, Oslo"
});
  P.works = Object.assign(P.works || {}, {
  "cffatherread": {
    "title": "El padre leyendo",
    "museum": "Kunsthalle Mannheim"
  },
  "cffather": {
    "title": "Retrato del padre",
    "museum": "Museo Estatal de Pomerania, Greifswald"
  },
  "cfheiden": {
    "title": "Madre Heiden",
    "museum": "Museo Estatal de Pomerania, Greifswald"
  },
  "cfself00": {
    "title": "Autorretrato",
    "museum": "SMK – Galería Nacional de Dinamarca, Copenhague"
  },
  "cfluisen": {
    "title": "La fuente de Luisa en Frederiksdal",
    "museum": "Hamburger Kunsthalle"
  },
  "cfemilia": {
    "title": "La fuente de Emilia cerca de Copenhague",
    "museum": "Hamburger Kunsthalle"
  },
  "cfpavillon": {
    "title": "Paisaje con pabellón",
    "museum": "Hamburger Kunsthalle"
  },
  "cfcopen": {
    "title": "Paisaje cerca de Copenhague",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "cfoak": {
    "title": "Roble",
    "museum": "Kupferstichkabinett, Berlín"
  },
  "cfwasserburg": {
    "title": "Paisaje a la luz de la luna con ruina de un castillo",
    "museum": "SMK – Galería Nacional de Dinamarca, Copenhague"
  },
  "cfamselfall": {
    "title": "La cascada Amselfall cerca de Rathen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfkriebstein": {
    "title": "El castillo de Kriebstein cerca de Waldheim",
    "museum": "Museo Estatal de Pomerania, Greifswald"
  },
  "cftharandt": {
    "title": "Ruina, iglesia y casas en Tharandt",
    "museum": "Kupferstichkabinett, Berlín"
  },
  "cfelbstr": {
    "title": "Camino junto al Elba con un arco en ruinas",
    "museum": "Hamburger Kunsthalle"
  },
  "cftrees": {
    "title": "Grupo de árboles",
    "museum": "Kupferstichkabinett, Berlín"
  },
  "cfclouds": {
    "title": "Estudio de nubes",
    "museum": "Kupferstichkabinett, Berlín"
  },
  "cfflatruegen": {
    "title": "Paisaje llano en Rügen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfziehbrunnen": {
    "title": "Cabaña con pozo en Rügen",
    "museum": "Museo Estatal de Pomerania, Greifswald"
  },
  "cfselfarm": {
    "title": "Autorretrato apoyado en el brazo",
    "museum": "Hamburger Kunsthalle"
  },
  "cfarkonasun": {
    "title": "Vista de Arkona con sol naciente",
    "museum": "Hamburger Kunsthalle"
  },
  "cfsteg": {
    "title": "Pasarela sobre un río ante un grupo de árboles",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cfruegenbay": {
    "title": "Paisaje de Rügen con una bahía",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfpilgrim": {
    "title": "Peregrinación al amanecer",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfmadonna": {
    "title": "Estatua de la Virgen en la montaña",
    "museum": "Art Institute of Chicago"
  },
  "cfshepherd": {
    "title": "La costa este de Rügen con un pastor",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cfarkonamoon": {
    "title": "Vista de Arkona con luna naciente",
    "museum": "Albertina, Viena"
  },
  "cfdeadoak": {
    "title": "Paisaje de verano con un roble seco",
    "museum": "Klassik Stiftung Weimar"
  },
  "cftetschen": {
    "title": "La cruz en la montaña (altar de Tetschen)",
    "museum": "Colecciones Estatales de Arte de Dresde"
  },
  "cfdolmen": {
    "title": "Dolmen en la nieve",
    "museum": "Colecciones Estatales de Arte de Dresde"
  },
  "cfelbtal": {
    "title": "Vista del valle del Elba",
    "museum": "Colecciones Estatales de Arte de Dresde"
  },
  "cffog": {
    "title": "Playa en la niebla",
    "museum": "Belvedere, Viena"
  },
  "cffisher": {
    "title": "Playa con pescador",
    "museum": "Belvedere, Viena"
  },
  "cfbohemia": {
    "title": "Paisaje de Bohemia",
    "museum": "Staatsgalerie Stuttgart"
  },
  "cfmorningfog": {
    "title": "Niebla matinal en la montaña",
    "museum": "Museo estatal Heidecksburg, Rudolstadt"
  },
  "cfmonk": {
    "title": "El monje junto al mar",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfoakabbey": {
    "title": "La abadía en el robledal",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfrainbow": {
    "title": "Paisaje de montaña con arco iris",
    "museum": "Museum Folkwang, Essen"
  },
  "cfself10": {
    "title": "Autorretrato",
    "museum": "Kupferstichkabinett, Berlín"
  },
  "cfnewmoon": {
    "title": "Luna nueva sobre los Montes de los Gigantes",
    "museum": "National Gallery of Art, Washington"
  },
  "cfriesenmorning": {
    "title": "Mañana en los Montes de los Gigantes",
    "museum": "Fundación de Palacios y Jardines Prusianos, Berlín"
  },
  "cfwarmbrunn": {
    "title": "Vista desde Warmbrunn hacia la Kleine Sturmhaube",
    "museum": "Museo Pushkin, Moscú"
  },
  "cfharz": {
    "title": "Desfiladero rocoso en el Harz",
    "museum": "Museo Estatal de Pomerania, Greifswald"
  },
  "cfwinterlon": {
    "title": "Paisaje invernal",
    "museum": "National Gallery, Londres"
  },
  "cfwinterchurch": {
    "title": "Paisaje invernal con iglesia",
    "museum": "Museo de Arte e Historia Cultural, Dortmund"
  },
  "cfcrosswood": {
    "title": "Cruz en el bosque",
    "museum": "Staatsgalerie Stuttgart"
  },
  "cfheroes": {
    "title": "Tumbas de antiguos héroes",
    "museum": "Hamburger Kunsthalle"
  },
  "cfchasseur": {
    "title": "El cazador en el bosque",
    "museum": "Colección particular"
  },
  "cfcrossbaltic": {
    "title": "Cruz en el Báltico",
    "museum": "Fundación de Palacios y Jardines Prusianos, Berlín"
  },
  "cfharbour": {
    "title": "Vista de un puerto",
    "museum": "Fundación de Palacios y Jardines Prusianos, Berlín"
  },
  "cftwomen": {
    "title": "Dos hombres junto al mar",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfafterstorm": {
    "title": "Después de la tormenta",
    "museum": "SMK – Galería Nacional de Dinamarca, Copenhague"
  },
  "cfgreifsmoon": {
    "title": "Greifswald a la luz de la luna",
    "museum": "Museo Nacional, Oslo"
  }
});
  P.paths = P.paths || {};
  P.paths.friedrich = {
  "title": "El camino de vida de Caspar David Friedrich",
  "part": "Partes 1–2 · 1774–1840",
  "subtitle": "De Greifswald a Dresde",
  "intro": "Caspar David Friedrich nace en Greifswald el 5 de septiembre de 1774. El camino lo sigue desde la infancia en el Báltico y la academia de Copenhague hasta Dresde, Rügen, el altar de Tetschen y El monje junto al mar. Después continúa con el matrimonio con Caroline en 1818, los hijos, El caminante, El mar de hielo, los contempladores de la luna y los Montes de los Gigantes, hasta los tranquilos últimos años y su muerte en Dresde en 1840.",
  "ending": [
    "Caspar David Friedrich muere en Dresde el 7 de mayo de 1840 y es enterrado en el cementerio de la Trinidad. Tras su muerte queda casi olvidado durante décadas.",
    "En 1906 la Exposición del Centenario del arte alemán en la Nationalgalerie de Berlín muestra muchos de sus cuadros, y Friedrich es redescubierto. Hoy El monje junto al mar, El caminante sobre el mar de nubes, los Acantilados de tiza en Rügen y El mar de hielo están entre los cuadros más conocidos del Romanticismo. Aquí termina el camino."
  ],
  "epilogue": "De la costa báltica junto a Greifswald a los tranquilos cuadros de luna de Dresde: Friedrich pintó paisajes en los que las personas miran, esperan y se asombran.",
  "life": "1774–1840"
};
  P.stations = Object.assign(P.stations || {}, {
  "cfgreifswald": {
    "place": "Greifswald",
    "when": "1774–1794",
    "mapLabel": "Greifswald",
    "intro": [
      "Caspar David Friedrich nace en Greifswald el 5 de septiembre de 1774, sexto de diez hijos del jabonero y cerero Adolf Gottlieb Friedrich y de Sophie Dorothea. La madre muere en 1781, cuando él tiene siete años.",
      "En 1787 muere también su hermano Johann Christoffer, al intentar salvarlo de un accidente sobre el hielo. La pérdida lo acompaña durante mucho tiempo. De joven toma clases de dibujo con Johann Gottfried Quistorp en Greifswald."
    ]
  },
  "cfcopenhagen": {
    "place": "La academia de Copenhague",
    "when": "1794–1798",
    "mapLabel": "Copenhague",
    "intro": [
      "De 1794 a 1798 Friedrich estudia en la Real Academia de Copenhague, con Jens Juel, Nicolai Abildgaard y Christian August Lorentzen. Dibuja en los alrededores de la ciudad, junto a fuentes, pabellones y en paisajes a la luz de la luna.",
      "La academia danesa se considera entonces una de las mejores del norte. Allí aprende a observar con exactitud la naturaleza y el orden claro y sereno que más tarde marcará sus paisajes."
    ]
  },
  "cfdresden": {
    "place": "Llegada a Dresde",
    "when": "1798–1800",
    "mapLabel": "Dresde",
    "intro": [
      "En otoño de 1798 Friedrich se instala en Dresde. La ciudad, con su pinacoteca y los paisajes junto al Elba, será su hogar el resto de su vida.",
      "En 1799 muestra obras por primera vez en la exposición de la Academia de Dresde. Camina por la Suiza sajona y los valles cercanos y dibuja árboles, rocas, castillos y nubes."
    ]
  },
  "cfruegen": {
    "place": "Rügen y Greifswald",
    "when": "1801–1803",
    "mapLabel": "Rügen",
    "intro": [
      "En 1801 Friedrich viaja por primera vez a Rügen y pasa una larga temporada en Greifswald. Recorre la isla a pie y dibuja costas, campos, cabañas y el cabo Arkona.",
      "En el verano de 1802 está de vuelta en Dresde. Allí conoce al poeta Ludwig Tieck y al pintor Philipp Otto Runge. Ahora trabaja mucho con pluma, pincel y sepia."
    ]
  },
  "cfsepia": {
    "place": "La sepia y el premio de Weimar",
    "when": "1803–1806",
    "mapLabel": "Loschwitz",
    "intro": [
      "En 1803 Friedrich alquila una vivienda de verano en Loschwitz, cerca de Dresde, y hace una primera caminata por el norte de Bohemia. En grandes hojas a la sepia desarrolla paisajes amplios y silenciosos, con luz y niebla.",
      "El 25 de agosto de 1805 recibe en Weimar la mitad del premio de los Amigos del Arte en torno a Goethe, por dos dibujos a la sepia: una procesión con la luz de la mañana y pescadores en la playa. Su nombre se conoce así más allá de Dresde."
    ]
  },
  "cftetschenst": {
    "place": "Bohemia y el altar de Tetschen",
    "when": "1807–1808",
    "mapLabel": "Bohemia",
    "intro": [
      "En 1807 Friedrich vuelve a recorrer Bohemia a pie y empieza a pintar al óleo. Los nuevos cuadros muestran niebla sobre el mar, colinas nevadas y amplios valles con pocas señales de vida humana.",
      "En la Navidad de 1808 muestra en su taller la Cruz en la montaña, más tarde llamada altar de Tetschen. El crítico Basilius von Ramdohr ataca duramente el cuadro, y pintores como Gerhard von Kügelgen lo defienden. La polémica da a conocer a Friedrich en todas partes."
    ]
  },
  "cfmonkst": {
    "place": "El monje junto al mar",
    "when": "1809–1810",
    "mapLabel": "Berlín",
    "intro": [
      "En otoño de 1810 Friedrich muestra en la exposición de la Academia de Berlín dos cuadros como pareja: El monje junto al mar y La abadía en el robledal. A instancias del joven príncipe heredero, la casa real prusiana adquiere ambos cuadros.",
      "Ese mismo año Friedrich es nombrado miembro externo de la Academia de Berlín. El 18 de septiembre de 1810 Goethe lo visita en su taller de Dresde. Entre sus amigos están ahora el escritor Heinrich von Kleist y el pintor Georg Friedrich Kersting."
    ]
  },
  "cfmountains": {
    "place": "Montes de los Gigantes y Harz",
    "when": "1810–1811",
    "mapLabel": "Montes de los Gigantes",
    "intro": [
      "En el verano de 1810 Friedrich recorre a pie los Montes de los Gigantes con Georg Friedrich Kersting. Durante muchos años usará en sus cuadros los bocetos de cumbres, crestas y niebla matinal.",
      "En junio de 1811 sigue una caminata por el Harz con el escultor Christian Gottlieb Kühn. En julio visita a Goethe en Jena. En estos años nacen también tranquilos cuadros de invierno con iglesias y abetos en la nieve."
    ]
  },
  "cfliberation": {
    "place": "Las guerras de liberación",
    "when": "1812–1817",
    "mapLabel": "Greifswald",
    "intro": [
      "En los años de las guerras de liberación contra Napoleón, 1813 y 1814, Friedrich pinta cuadros llenos de recuerdo de antiguos héroes y tumbas. Su amigo Kersting va a la guerra como voluntario. En 1814 Friedrich muestra en Dresde Tumbas de antiguos héroes y El cazador en el bosque.",
      "En 1816 el rey de Prusia compra Vista de un puerto y se la regala al príncipe heredero. Ese mismo año Friedrich ingresa en la Academia de Dresde. En 1817 pinta Dos hombres junto al mar, Después de la tormenta y Greifswald a la luz de la luna."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cffatherread": {
    "text": [
      "Un anciano con gafas está sentado a la mesa y lee un libro grueso.",
      "Friedrich dibuja a su padre Adolf Gottlieb en un campo ovalado."
    ],
    "fact": "hacia 1801. Kunsthalle Mannheim."
  },
  "cffather": {
    "text": [
      "El padre lleva un alto gorro de piel y un abrigo con cuello de piel.",
      "Mira a un lado, tranquilo y serio."
    ],
    "fact": "1798. Museo Estatal de Pomerania, Greifswald."
  },
  "cfheiden": {
    "text": [
      "Una mujer mayor con cofia plisada mira hacia fuera del cuadro.",
      "Tras la muerte de la madre, Madre Heiden, el ama de llaves, ayudó a criar a los niños de la familia."
    ],
    "fact": "hacia 1798. Museo Estatal de Pomerania, Greifswald."
  },
  "cfself00": {
    "text": [
      "El joven Friedrich nos mira con ojos grandes y despiertos.",
      "Abajo en la hoja hay líneas escritas de su puño y letra."
    ],
    "fact": "hacia 1800. SMK – Galería Nacional de Dinamarca, Copenhague."
  },
  "cfluisen": {
    "text": [
      "Bajo árboles altos hay un pequeño monumento sobre un manantial.",
      "Dos hombres y un perro descansan delante a la sombra."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfemilia": {
    "text": [
      "Una piedra conmemorativa se alza al borde de un jardín, detrás de una cerca.",
      "El estudiante Friedrich pinta el lugar en delicada acuarela."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfpavillon": {
    "text": [
      "Detrás de una cerca de madera y unas piedras hay un pabellón con terraza en el tejado.",
      "A la derecha se curva un árbol pelado."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfcopen": {
    "text": [
      "Desde una colina la vista se extiende sobre campos y bosques hasta las torres de la ciudad.",
      "Un árbol nudoso enmarca el panorama."
    ],
    "fact": "1797. Staatliche Kunsthalle Karlsruhe."
  },
  "cfoak": {
    "text": [
      "Con el lápiz Friedrich sigue cada rama de un viejo roble.",
      "Abajo a la izquierda figura el año 1797."
    ],
    "fact": "1797. Kupferstichkabinett, Berlín."
  },
  "cfwasserburg": {
    "text": [
      "La luna brilla entre las nubes sobre un puente levadizo y una torre en ruinas.",
      "Ya en Copenhague a Friedrich le interesa la luz de la noche."
    ],
    "fact": "1797. SMK – Galería Nacional de Dinamarca, Copenhague."
  },
  "cfamselfall": {
    "text": [
      "Un arroyo cae entre bloques de roca y abetos.",
      "Friedrich dibuja la Suiza sajona con un lápiz fino."
    ],
    "fact": "1799. Hamburger Kunsthalle."
  },
  "cfkriebstein": {
    "text": [
      "En lo alto del valle el castillo se alza sobre su roca.",
      "Friedrich lo fija con líneas y aguadas delicadas."
    ],
    "fact": "1799. Museo Estatal de Pomerania, Greifswald."
  },
  "cftharandt": {
    "text": [
      "A la izquierda hay una torre de castillo en ruinas, a la derecha una iglesia con torre puntiaguda.",
      "Mucho está solo insinuado con trazos ligeros."
    ],
    "fact": "1799. Kupferstichkabinett, Berlín."
  },
  "cfelbstr": {
    "text": [
      "A través de un viejo arco de piedra se ve el río y la otra orilla.",
      "Junto al camino hay toneles y cajas."
    ],
    "fact": "1799. Hamburger Kunsthalle."
  },
  "cftrees": {
    "text": [
      "Dos árboles altos crecen muy juntos.",
      "Con pluma y pincel Friedrich da a cada grupo de hojas luz y sombra."
    ],
    "fact": "1799. Kupferstichkabinett, Berlín."
  },
  "cfclouds": {
    "text": [
      "Una hoja de cuaderno muestra solo nubes, en finos contornos.",
      "Friedrich observa el cielo con tanta atención como árboles y rocas."
    ],
    "fact": "1799. Kupferstichkabinett, Berlín."
  },
  "cfflatruegen": {
    "text": [
      "La mirada se extiende sobre campos llanos y setos hasta el horizonte.",
      "Una fina cuadrícula ayuda a Friedrich a dibujar con exactitud la amplia llanura."
    ],
    "fact": "1801. Hamburger Kunsthalle."
  },
  "cfziehbrunnen": {
    "text": [
      "Una colina cruza la hoja en diagonal; a la derecha hay una cabaña con un pozo.",
      "Arriba a la izquierda Friedrich anota la fecha."
    ],
    "fact": "1802. Museo Estatal de Pomerania, Greifswald."
  },
  "cfselfarm": {
    "text": [
      "Friedrich apoya la cabeza en la mano y sostiene una pluma de dibujo.",
      "A su lado se abre una ventana con plantas."
    ],
    "fact": "hacia 1802. Hamburger Kunsthalle."
  },
  "cfarkonasun": {
    "text": [
      "El sol envuelve la costa de Rügen en una luz cálida.",
      "En la orilla hay una barca y los árboles se inclinan con el viento."
    ],
    "fact": "1803. Hamburger Kunsthalle."
  },
  "cfsteg": {
    "text": [
      "Una estrecha pasarela cruza un río, y detrás hay altos álamos.",
      "Friedrich grabó esta hoja él mismo."
    ],
    "fact": "hacia 1800. Metropolitan Museum of Art, Nueva York."
  },
  "cfruegenbay": {
    "text": [
      "Tras colinas y campos brilla una amplia bahía.",
      "El cielo ocupa más de la mitad del cuadro."
    ],
    "fact": "1802. Klassik Stiftung Weimar."
  },
  "cfpilgrim": {
    "text": [
      "Una larga procesión avanza por una colina hacia una cruz.",
      "La sepia deja que el paisaje se disuelva en una clara bruma matinal."
    ],
    "fact": "hacia 1805. Klassik Stiftung Weimar."
  },
  "cfmadonna": {
    "text": [
      "Sobre una roca por encima de los abetos hay una pequeña estatua de la Virgen.",
      "La niebla separa las capas del bosque."
    ],
    "fact": "hacia 1804. Art Institute of Chicago."
  },
  "cfshepherd": {
    "text": [
      "Un pastor está con sus ovejas sobre el mar.",
      "El cielo está casi vacío y claro."
    ],
    "fact": "hacia 1806. Metropolitan Museum of Art, Nueva York."
  },
  "cfarkonamoon": {
    "text": [
      "La luna sale sobre el mar y la costa queda en sombra.",
      "En la orilla cuelgan redes de pesca para secarse."
    ],
    "fact": "hacia 1805. Albertina, Viena."
  },
  "cfdeadoak": {
    "text": [
      "Un roble pelado se alza en medio de un paisaje de verano.",
      "Friedrich pone uno junto a otro la vida y el paso del tiempo."
    ],
    "fact": "hacia 1805. Klassik Stiftung Weimar."
  },
  "cftetschen": {
    "text": [
      "En una cumbre rocosa se alza una cruz entre abetos, y detrás brilla la luz del atardecer.",
      "Friedrich pinta un paisaje como retablo."
    ],
    "fact": "1807–1808. Colecciones Estatales de Arte de Dresde."
  },
  "cfdolmen": {
    "text": [
      "Tres robles pelados rodean una antigua tumba de piedra en la nieve.",
      "La tumba recuerda un pasado lejano."
    ],
    "fact": "1807. Colecciones Estatales de Arte de Dresde."
  },
  "cfelbtal": {
    "text": [
      "Delante hay abetos oscuros sobre una colina.",
      "Detrás se abre el valle del Elba en la bruma matinal."
    ],
    "fact": "hacia 1807. Colecciones Estatales de Arte de Dresde."
  },
  "cffog": {
    "text": [
      "Un ancla yace en la playa y una barca casi desaparece en la niebla gris.",
      "Es uno de los primeros óleos de Friedrich."
    ],
    "fact": "hacia 1807. Belvedere, Viena."
  },
  "cffisher": {
    "text": [
      "Un pescador está junto a sus redes en la orilla llana.",
      "El cielo y el mar se confunden en la bruma."
    ],
    "fact": "hacia 1807. Belvedere, Viena."
  },
  "cfbohemia": {
    "text": [
      "Sobre una llanura oscura se alza una sola montaña azul.",
      "El cielo pasa del amarillo pálido al azul claro."
    ],
    "fact": "hacia 1808. Staatsgalerie Stuttgart."
  },
  "cfmorningfog": {
    "text": [
      "La niebla sube del valle y envuelve una cumbre.",
      "En lo alto de la roca se distingue una pequeña cruz."
    ],
    "fact": "1808. Museo estatal Heidecksburg, Rudolstadt."
  },
  "cfmonk": {
    "text": [
      "Una pequeña figura está en la playa ante el mar oscuro y un cielo inmenso.",
      "Casi nadie había pintado antes un paisaje tan vacío."
    ],
    "fact": "1808–1810. Alte Nationalgalerie, Berlín."
  },
  "cfoakabbey": {
    "text": [
      "Entre robles pelados se alzan las ruinas de una iglesia gótica a la luz del atardecer.",
      "Encima aparece la fina hoz de la luna."
    ],
    "fact": "1809–1810. Alte Nationalgalerie, Berlín."
  },
  "cfrainbow": {
    "text": [
      "Un arco iris se tiende sobre una montaña oscura.",
      "Delante, un caminante está sentado en una roca."
    ],
    "fact": "hacia 1810. Museum Folkwang, Essen."
  },
  "cfself10": {
    "text": [
      "Con barba y rizos, Friedrich nos mira serio e intenso.",
      "El fino dibujo a tiza es del año de su éxito en Berlín."
    ],
    "fact": "hacia 1810. Kupferstichkabinett, Berlín."
  },
  "cfnewmoon": {
    "text": [
      "La fina hoz de la luna está sobre las crestas azules de la montaña.",
      "La hoja combina acuarela y lápiz."
    ],
    "fact": "hacia 1810. National Gallery of Art, Washington."
  },
  "cfriesenmorning": {
    "text": [
      "Sobre un mar de crestas se eleva una roca con una cruz.",
      "Friedrich pinta el cuadro tras su caminata con Kersting."
    ],
    "fact": "1810–1811. Fundación de Palacios y Jardines Prusianos, Berlín."
  },
  "cfwarmbrunn": {
    "text": [
      "Tras prados verdes y bosques se elevan crestas azules.",
      "La cumbre más alta está iluminada."
    ],
    "fact": "hacia 1810. Museo Pushkin, Moscú."
  },
  "cfharz": {
    "text": [
      "Paredes de roca empinadas y árboles encierran un estrecho desfiladero.",
      "La caminata por el Harz en 1811 da a Friedrich muchos motivos así."
    ],
    "fact": "hacia 1811. Museo Estatal de Pomerania, Greifswald."
  },
  "cfwinterlon": {
    "text": [
      "En la nieve un hombre descansa junto a una roca ante abetos jóvenes.",
      "Detrás, en la niebla, aparece una iglesia gótica."
    ],
    "fact": "1811. National Gallery, Londres."
  },
  "cfwinterchurch": {
    "text": [
      "Hay abetos en la nieve y detrás una iglesia surge de la bruma.",
      "El cuadro hace pareja con el paisaje invernal de Londres."
    ],
    "fact": "1811. Museo de Arte e Historia Cultural, Dortmund."
  },
  "cfcrosswood": {
    "text": [
      "Entre altos abetos hay una cruz junto a un manantial.",
      "Entre los troncos entra una luz clara."
    ],
    "fact": "hacia 1812. Staatsgalerie Stuttgart."
  },
  "cfheroes": {
    "text": [
      "En un desfiladero rocoso hay tumbas antiguas; una está dedicada a un héroe de la libertad.",
      "Friedrich pinta el cuadro durante la ocupación napoleónica."
    ],
    "fact": "1812. Hamburger Kunsthalle."
  },
  "cfchasseur": {
    "text": [
      "Un soldado francés solitario está ante un denso bosque de abetos nevados.",
      "Un cuervo se posa en un tocón."
    ],
    "fact": "1813–1814. Colección particular."
  },
  "cfcrossbaltic": {
    "text": [
      "Sobre rocas junto al mar se alza una cruz alta ante el cielo del atardecer.",
      "En el horizonte se ven barcos."
    ],
    "fact": "1815. Fundación de Palacios y Jardines Prusianos, Berlín."
  },
  "cfharbour": {
    "text": [
      "Grandes veleros reposan en el puerto y el cielo brilla amarillo.",
      "El rey de Prusia compra el cuadro en 1816 para el príncipe heredero."
    ],
    "fact": "1815–1816. Fundación de Palacios y Jardines Prusianos, Berlín."
  },
  "cftwomen": {
    "text": [
      "Dos hombres están sobre piedras en la orilla y miran el mar en el crepúsculo.",
      "Nos dan la espalda."
    ],
    "fact": "1817. Alte Nationalgalerie, Berlín."
  },
  "cfafterstorm": {
    "text": [
      "Una barca yace inclinada entre rocas en la orilla y su mástil apunta oblicuo al cielo.",
      "El mar vuelve a estar en calma."
    ],
    "fact": "1817. SMK – Galería Nacional de Dinamarca, Copenhague."
  },
  "cfgreifsmoon": {
    "text": [
      "Tras las redes de pesca en el prado se perfilan las torres de Greifswald.",
      "La luna está sobre la ciudad natal del pintor."
    ],
    "fact": "hacia 1817. Museo Nacional, Oslo."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
