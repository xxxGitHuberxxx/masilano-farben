// v10.1 ES content for Caspar David Friedrich’s life journey, Part 2 (1818–1840), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Eremitage, Sankt Petersburg": "Museo del Hermitage, San Petersburgo",
  "Nationalmuseum Oslo": "Museo Nacional, Oslo",
  "Kunst Museum Winterthur": "Kunst Museum Winterthur",
  "Musée du Louvre, Paris": "Museo del Louvre, París",
  "Bayerische Staatsgemäldesammlungen, München": "Colecciones Estatales de Pintura de Baviera, Múnich",
  "Museum Folkwang, Essen": "Museum Folkwang, Essen",
  "Alte Nationalgalerie, Berlin": "Alte Nationalgalerie, Berlín",
  "Pommersches Landesmuseum, Greifswald": "Museo Estatal de Pomerania, Greifswald",
  "Hamburger Kunsthalle": "Hamburger Kunsthalle",
  "Museum Georg Schäfer, Schweinfurt": "Museum Georg Schäfer, Schweinfurt",
  "Stiftung Preussische Schlösser und Gärten, Berlin": "Fundación de Palacios y Jardines Prusianos, Berlín",
  "Privatsammlung": "Colección particular",
  "Österreichische Galerie Belvedere, Wien": "Belvedere, Viena",
  "Staatliche Kunstsammlungen Dresden": "Colecciones Estatales de Arte de Dresde",
  "Klassik Stiftung Weimar": "Klassik Stiftung Weimar",
  "Nationalgalerie Prag": "Galería Nacional de Praga",
  "Staatliche Kunsthalle Karlsruhe": "Staatliche Kunsthalle Karlsruhe",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Museum der bildenden Künste, Leipzig": "Museo de Bellas Artes, Leipzig",
  "Kimbell Art Museum, Fort Worth": "Kimbell Art Museum, Fort Worth",
  "Städel Museum, Frankfurt": "Städel Museum, Fráncfort",
  "Saint Louis Art Museum": "Saint Louis Art Museum",
  "Puschkin-Museum, Moskau": "Museo Pushkin, Moscú",
  "Kupferstichkabinett, Dresden": "Kupferstich-Kabinett, Dresde",
  "Germanisches Nationalmuseum, Nürnberg": "Germanisches Nationalmuseum, Núremberg",
  "Albertina, Wien": "Albertina, Viena",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "J. Paul Getty Museum, Los Angeles": "J. Paul Getty Museum, Los Angeles",
  "Freies Deutsches Hochstift, Frankfurt": "Freies Deutsches Hochstift, Fráncfort",
  "Museo Thyssen-Bornemisza, Madrid": "Museo Nacional Thyssen-Bornemisza, Madrid"
});
  P.works = Object.assign(P.works || {}, {
  "cfsailor": {
    "title": "En el velero",
    "museum": "Museo del Hermitage, San Petersburgo"
  },
  "cfsailorstudy": {
    "title": "Estudio para En el velero",
    "museum": "Museo Nacional, Oslo"
  },
  "cfsailstudies": {
    "title": "Estudios de veleros",
    "museum": "Museo Nacional, Oslo"
  },
  "cfruegenwoman": {
    "title": "Mujer en la playa de Rügen",
    "museum": "Kunst Museum Winterthur"
  },
  "cfnightharbour": {
    "title": "Las hermanas en el balcón del puerto",
    "museum": "Museo del Hermitage, San Petersburgo"
  },
  "cfmooncoast": {
    "title": "Costa marina a la luz de la luna",
    "museum": "Museo del Louvre, París"
  },
  "cfsunsetwoman": {
    "title": "Mujer ante el sol poniente",
    "museum": "Museum Folkwang, Essen"
  },
  "cfwindow": {
    "title": "Mujer en la ventana",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfgreifmarket": {
    "title": "La plaza del mercado de Greifswald con la familia Friedrich",
    "museum": "Museo Estatal de Pomerania, Greifswald"
  },
  "cfgardenhouse": {
    "title": "Cenador",
    "museum": "Colecciones Estatales de Pintura de Baviera, Múnich"
  },
  "cfrisingfog": {
    "title": "Paisaje de los Montes de los Gigantes con niebla ascendente",
    "museum": "Colecciones Estatales de Pintura de Baviera, Múnich"
  },
  "cfdriftingcloud": {
    "title": "Nubes pasajeras",
    "museum": "Hamburger Kunsthalle"
  },
  "cfmistbank": {
    "title": "Jirones de niebla",
    "museum": "Hamburger Kunsthalle"
  },
  "cfmorningmtn": {
    "title": "Mañana en la montaña",
    "museum": "Museo del Hermitage, San Petersburgo"
  },
  "cfgreifharbour2": {
    "title": "El puerto de Greifswald",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfgreifmeadows": {
    "title": "Prados cerca de Greifswald",
    "museum": "Hamburger Kunsthalle"
  },
  "cfflatland": {
    "title": "Paisaje llano",
    "museum": "Fundación de Palacios y Jardines Prusianos, Berlín"
  },
  "cfwindmills": {
    "title": "Paisaje con molinos",
    "museum": "Fundación de Palacios y Jardines Prusianos, Berlín"
  },
  "cfflatbodden": {
    "title": "Paisaje llano junto a la bahía de Greifswald",
    "museum": "Museum Georg Schäfer, Schweinfurt"
  },
  "cfdresdeneve": {
    "title": "Atardecer (Puesta de sol tras la Hofkirche de Dresde)",
    "museum": "Colección particular"
  },
  "cfwatzmann": {
    "title": "El Watzmann",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfelberocks": {
    "title": "Paisaje rocoso en los montes de arenisca del Elba",
    "museum": "Belvedere, Viena"
  },
  "cfmeissen": {
    "title": "Portal en Meissen",
    "museum": "Colecciones Estatales de Arte de Dresde"
  },
  "cfhuttens": {
    "title": "La tumba de Hutten",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfearlysnow": {
    "title": "Primera nieve",
    "museum": "Hamburger Kunsthalle"
  },
  "cfice": {
    "title": "El mar de hielo",
    "museum": "Hamburger Kunsthalle"
  },
  "cfnorthmoon": {
    "title": "Mar del norte a la luz de la luna",
    "museum": "Galería Nacional de Praga"
  },
  "cfreef": {
    "title": "Arrecife rocoso en la orilla del mar",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "cfmoonmen": {
    "title": "Dos hombres contemplando la luna",
    "museum": "Colecciones Estatales de Arte de Dresde"
  },
  "cfmoonmenmet": {
    "title": "Dos hombres contemplando la luna (versión posterior)",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "cfmooncouple": {
    "title": "Hombre y mujer contemplando la luna",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfmoongrise": {
    "title": "Salida de la luna sobre el mar",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfmoonherm": {
    "title": "Salida de la luna junto al mar",
    "museum": "Museo del Hermitage, San Petersburgo"
  },
  "cflonetree": {
    "title": "El árbol solitario",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfcrows": {
    "title": "El árbol de los cuervos",
    "museum": "Museo del Louvre, París"
  },
  "cfstages": {
    "title": "Las etapas de la vida",
    "museum": "Museo de Bellas Artes, Leipzig"
  },
  "cfwindowwood": {
    "title": "Interior de bosque a la luz de la luna",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfriesenberlin": {
    "title": "Montes de los Gigantes",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "cfriesenmem": {
    "title": "Recuerdo de los Montes de los Gigantes",
    "museum": "Museo del Hermitage, San Petersburgo"
  },
  "cfriesenoslo": {
    "title": "Paisaje de montaña en los Montes de los Gigantes",
    "museum": "Museo Nacional, Oslo"
  },
  "cfriesensun": {
    "title": "Rayos de sol en los Montes de los Gigantes",
    "museum": "Saint Louis Art Museum"
  },
  "cfriesenpeaks": {
    "title": "Cumbre con nubes pasajeras",
    "museum": "Kimbell Art Museum, Fort Worth"
  },
  "cfrosenberg": {
    "title": "Paisaje con el Rosenberg en los montes de Bohemia",
    "museum": "Städel Museum, Fráncfort"
  },
  "cfeldenamtn": {
    "title": "Ruinas de Eldena en los Montes de los Gigantes",
    "museum": "Museo Estatal de Pomerania, Greifswald"
  },
  "cfbohemia28": {
    "title": "Paisaje de Bohemia",
    "museum": "Museo Estatal de Pomerania, Greifswald"
  },
  "cfmoonshore": {
    "title": "Costa a la luz de la luna",
    "museum": "Hamburger Kunsthalle"
  },
  "cfowlgothic": {
    "title": "Lechuza en un nicho gótico",
    "museum": "Museo del Hermitage, San Petersburgo"
  },
  "cfneurathen": {
    "title": "La puerta rocosa de Neurathen",
    "museum": "Museo del Hermitage, San Petersburgo"
  },
  "cfschmiede": {
    "title": "Vista de la cresta de Schmiedeberg",
    "museum": "Museo Pushkin, Moscú"
  },
  "cfeldenaeast": {
    "title": "Ruinas de Eldena cerca de Greifswald desde el este",
    "museum": "Kupferstich-Kabinett, Dresde"
  },
  "cfteplitz": {
    "title": "Paisaje de montaña cerca de Teplitz con el Milleschauer",
    "museum": "Germanisches Nationalmuseum, Núremberg"
  },
  "cfgraves": {
    "title": "Paisaje con tumbas",
    "museum": "Albertina, Viena"
  },
  "cflonelybank": {
    "title": "Salida de la luna sobre una orilla solitaria",
    "museum": "National Gallery of Art, Washington"
  },
  "cfwalkdusk": {
    "title": "Paseo al anochecer",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "cfsunsetlate": {
    "title": "Puesta de sol (Hermanos)",
    "museum": "Museo del Hermitage, San Petersburgo"
  },
  "cfeveningstar": {
    "title": "La estrella vespertina",
    "museum": "Freies Deutsches Hochstift, Fráncfort"
  },
  "cfgrossegehege": {
    "title": "El Grosse Gehege cerca de Dresde",
    "museum": "Colecciones Estatales de Arte de Dresde"
  },
  "cfeastermorn": {
    "title": "Mañana de Pascua",
    "museum": "Museo Nacional Thyssen-Bornemisza, Madrid"
  },
  "cfeveningbaltic": {
    "title": "Atardecer en la playa del Báltico",
    "museum": "Colecciones Estatales de Arte de Dresde"
  },
  "cfharboureve": {
    "title": "Barcos en el puerto al atardecer",
    "museum": "Colecciones Estatales de Arte de Dresde"
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
  "cfnuptials": {
    "place": "Boda y viaje a Rügen",
    "when": "1818",
    "mapLabel": "Rügen",
    "intro": [
      "El 21 de enero de 1818 Friedrich se casa en la Kreuzkirche de Dresde con Christiane Caroline Bommer. Él tiene 43 años, ella 25. En verano los dos viajan por Neubrandenburg y Greifswald hasta Rügen y visitan a su familia.",
      "De estos meses son cuadros del mar, de velas y de parejas que miran juntas a lo lejos. En la galería encontrarás también los Acantilados de tiza en Rügen, pintados por esta época."
    ]
  },
  "cfchildren": {
    "place": "Familia junto al Elba",
    "when": "1818–1824",
    "mapLabel": "Junto al Elba",
    "intro": [
      "En 1820 la familia se muda a un piso más grande junto al Elba, en el número 33, con vistas al río. El 30 de agosto de 1819 nace su hija Emma, el 2 de diciembre de 1823 su hija Agnes y el 23 de diciembre de 1824 su hijo Gustav Adolf, que más tarde también será pintor.",
      "Caroline aparece en varios cuadros, por ejemplo junto a la ventana del taller. También Greifswald sigue cerca: una gran hoja muestra la plaza del mercado con la familia Friedrich."
    ]
  },
  "cfwanderer": {
    "place": "Sobre la niebla",
    "when": "um 1818–1822",
    "mapLabel": "Arenisca del Elba",
    "intro": [
      "Hacia 1818 Friedrich pinta El caminante sobre el mar de nubes, un hombre de espaldas sobre una roca encima de un mar de niebla. El cuadro está hoy en la Hamburger Kunsthalle, y lo encontrarás en la galería de esta app.",
      "Las rocas del cuadro recuerdan los montes de arenisca del Elba, al sur de Dresde. En estos años pinta una y otra vez niebla, nubes y montañas que aparecen con la luz de la mañana."
    ]
  },
  "cfgreiftrips": {
    "place": "Hogar en el Báltico",
    "when": "1818–1830",
    "mapLabel": "Bodden",
    "intro": [
      "También desde Dresde, Greifswald sigue siendo su hogar. En el viaje de bodas de 1818 visita la ciudad, y en 1826 descansa otra vez en Rügen.",
      "A partir de bocetos y recuerdos pinta el puerto, los prados ante la ciudad, molinos y la tierra llana junto a la bahía de Greifswald. En el horizonte se ven a menudo las torres de las iglesias de Greifswald."
    ]
  },
  "cfprofessor": {
    "place": "Profesor en Dresde",
    "when": "1824–1829",
    "mapLabel": "Academia",
    "intro": [
      "Desde 1823 el pintor noruego Johan Christian Dahl vive en la misma casa junto al Elba, y los dos se hacen amigos. El 17 de enero de 1824 la Academia de Dresde nombra a Friedrich profesor extraordinario, sin obligación de enseñar.",
      "No consigue la cátedra vacante de pintura de paisaje. Sigue pintando: Dresde a la luz del atardecer, rocas en los montes de arenisca del Elba, una tumba para Ulrich von Hutten, el Watzmann a partir de la acuarela de un alumno y la primera nieve en el bosque."
    ]
  },
  "cfice": {
    "place": "El mar de hielo",
    "when": "1823–1824",
    "mapLabel": "Mar de hielo",
    "intro": [
      "En su taller de Dresde Friedrich pinta en 1823 y 1824 El mar de hielo: los témpanos se amontonan en un pico afilado y debajo asoma la popa de un barco aplastado. Para las placas de hielo había dibujado témpanos en el Elba.",
      "En 1826 el cuadro se expone en Hamburgo, pero no encuentra comprador. Hasta 1905 no lo adquiere la Hamburger Kunsthalle. También en otros cuadros de estos años surgen del mar formas frías y afiladas."
    ]
  },
  "cfmoonlife": {
    "place": "Contempladores de la luna y Etapas de la vida",
    "when": "1819–1835",
    "mapLabel": "Orilla del Elba",
    "intro": [
      "Hacia 1819 y 1820 Friedrich pinta a dos hombres que contemplan la luna naciente bajo un árbol sin hojas. Más tarde siguen otras versiones, una de ellas con un hombre y una mujer. Sus figuras están a menudo de espaldas y miran el cuadro con nosotros.",
      "En 1822 pinta como pareja El árbol solitario y Salida de la luna sobre el mar. Hacia 1834 pinta Las etapas de la vida: cinco personas en la orilla y cinco barcos en el agua, niños, adultos y un anciano."
    ]
  },
  "cfriesenlate": {
    "place": "Montañas del recuerdo",
    "when": "um 1828–1835",
    "mapLabel": "Montes de los Gigantes",
    "intro": [
      "Friedrich había caminado por los Montes de los Gigantes en 1810. Muchos años después sigue pintando las cordilleras, a partir de bocetos y del recuerdo, con luz suave y nubes sobre las crestas.",
      "A veces une lugares muy alejados entre sí: en un cuadro, las ruinas del monasterio de Eldena, junto a Greifswald, se alzan ante los Montes de los Gigantes. También recoge en acuarelas las colinas de Bohemia."
    ]
  },
  "cfstroke": {
    "place": "Enfermedad y hojas tranquilas",
    "when": "1835–1837",
    "mapLabel": "Teplitz",
    "intro": [
      "El 26 de junio de 1835 Friedrich sufre un ataque y queda parcialmente paralizado. Las ventas a la corte rusa, gestionadas por su amigo el poeta Vasili Zhukovski, ayudan a pagar una cura en Teplitz, en Bohemia.",
      "Los grandes óleos se vuelven raros; Costa a la luz de la luna se considera uno de los últimos. Friedrich trabaja sobre todo con sepia y acuarela: hojas tranquilas con rocas, ruinas, una lechuza y luz de luna sobre la orilla."
    ]
  },
  "cflegacy": {
    "place": "Luz del atardecer",
    "when": "1828–1840",
    "mapLabel": "Trinitatis",
    "intro": [
      "En sus últimos años Friedrich pinta a menudo el atardecer: paseantes en el crepúsculo, una familia de vuelta a casa ante la silueta de Dresde, barcos en el puerto y gente en la playa del Báltico.",
      "Caspar David Friedrich muere en Dresde el 7 de mayo de 1840, a los 65 años. Es enterrado en el cementerio de la Trinidad. Caroline y los hijos se quedan en Dresde."
    ]
  },
  "cfliberation": {
    "place": "Las guerras de liberación",
    "when": "1812–1817",
    "mapLabel": "Greifswald",
    "intro": [
      "En los años de las guerras de liberación contra Napoleón, 1813 y 1814, Friedrich pinta cuadros llenos de recuerdo de antiguos héroes y tumbas. Su amigo Kersting va a la guerra como voluntario. En 1814 Friedrich muestra en Dresde Tumbas de antiguos héroes y El cazador en el bosque.",
      "En 1816 el rey de Prusia compra Vista de un puerto y se la regala al príncipe heredero. Ese mismo año Friedrich ingresa en la Academia de Dresde. En 1817 pinta Dos hombres junto al mar, Después de la tormenta y Greifswald a la luz de la luna, una mirada tranquila a su ciudad natal."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cfsailor": {
    "text": [
      "Un hombre y una mujer están sentados de la mano en la proa de un velero y miran hacia una ciudad con torres entre la bruma.",
      "El cuadro se pinta tras la boda y a menudo se relaciona con Friedrich y Caroline."
    ],
    "fact": "1818–1819. Museo del Hermitage, San Petersburgo."
  },
  "cfsailorstudy": {
    "text": [
      "Con finas líneas de lápiz Friedrich dibuja la proa de un barco con vela y jarcias.",
      "Más tarde usó estudios así para el cuadro En el velero."
    ],
    "fact": "hacia 1818. Museo Nacional, Oslo."
  },
  "cfsailstudies": {
    "text": [
      "En una hoja aparecen pequeños veleros vistos de frente, de lado y por detrás.",
      "Friedrich los dibuja con precisión para poder pintarlos después en el taller."
    ],
    "fact": "hacia 1818. Museo Nacional, Oslo."
  },
  "cfruegenwoman": {
    "text": [
      "Una mujer está sentada en la playa llana y mira el mar con veleros.",
      "A lo lejos brillan las costas blancas de tiza de Rügen."
    ],
    "fact": "hacia 1818. Kunst Museum Winterthur."
  },
  "cfnightharbour": {
    "text": [
      "Dos mujeres están de noche en un balcón sobre un puerto.",
      "Detrás de los mástiles de los barcos se alzan las agujas de iglesias góticas."
    ],
    "fact": "1818–1820. Museo del Hermitage, San Petersburgo."
  },
  "cfmooncoast": {
    "text": [
      "La luna brilla entre nubes oscuras sobre una playa tranquila.",
      "Las varas y redes de los pescadores se alzan en el agua poco profunda."
    ],
    "fact": "1818. Museo del Louvre, París."
  },
  "cfsunsetwoman": {
    "text": [
      "Una mujer está de pie en un camino y abre levemente los brazos ante el sol bajo.",
      "Todo el paisaje brilla en amarillo y naranja cálidos."
    ],
    "fact": "hacia 1818. Museum Folkwang, Essen."
  },
  "cfwindow": {
    "text": [
      "Caroline está en el taller vacío junto a la ventana abierta y mira hacia el Elba.",
      "Fuera solo se ven álamos y el mástil de un barco."
    ],
    "fact": "1822. Alte Nationalgalerie, Berlín."
  },
  "cfgreifmarket": {
    "text": [
      "En la luminosa plaza del mercado de Greifswald la gente está en pequeños grupos y pasa un carro.",
      "La gran acuarela muestra el ayuntamiento, casas con frontón, torres de iglesia y también a miembros de la familia Friedrich."
    ],
    "fact": "1818. Museo Estatal de Pomerania, Greifswald."
  },
  "cfgardenhouse": {
    "text": [
      "Una mujer está sentada en un cenador sombreado y un hombre está de pie a su lado.",
      "Por la abertura entre las hojas se ve una iglesia gótica a plena luz."
    ],
    "fact": "1818. Colecciones Estatales de Pintura de Baviera, Múnich."
  },
  "cfrisingfog": {
    "text": [
      "Las crestas se escalonan una tras otra y de los valles sube una niebla blanca.",
      "Delante, un pequeño árbol sin hojas en la ladera."
    ],
    "fact": "hacia 1819. Colecciones Estatales de Pintura de Baviera, Múnich."
  },
  "cfdriftingcloud": {
    "text": [
      "Nubes densas pasan sobre una meseta verde y casi ocultan las cumbres.",
      "Un pequeño lago refleja la luz fría."
    ],
    "fact": "hacia 1820. Hamburger Kunsthalle."
  },
  "cfmistbank": {
    "text": [
      "Un paisaje llano se extiende bajo un cielo agitado y la niebla pasa sobre los campos.",
      "En el centro hay una cabaña solitaria con techo de paja."
    ],
    "fact": "hacia 1820. Hamburger Kunsthalle."
  },
  "cfmorningmtn": {
    "text": [
      "Laderas rocosas se abren a un amplio valle lleno de bruma matinal.",
      "Las montañas lejanas son solo líneas azules pálidas."
    ],
    "fact": "hacia 1820. Museo del Hermitage, San Petersburgo."
  },
  "cfgreifharbour2": {
    "text": [
      "A la luz del atardecer un gran velero está en el puerto de Greifswald.",
      "En la orilla hay gente y barriles, y el cielo brilla amarillo y rosa."
    ],
    "fact": "1818–1820. Alte Nationalgalerie, Berlín."
  },
  "cfgreifmeadows": {
    "text": [
      "Amplios prados verdes llegan hasta el horizonte, donde se alza la silueta de Greifswald con sus torres.",
      "Unos caballos pastan a plena luz."
    ],
    "fact": "1821–1822. Hamburger Kunsthalle."
  },
  "cfflatland": {
    "text": [
      "Un pueblo de tejados rojos con un molino está en tierra llana bajo un cielo alto y tranquilo.",
      "Quizá el cuadro muestra Rügen o la zona de Greifswald."
    ],
    "fact": "hacia 1822. Fundación de Palacios y Jardines Prusianos, Berlín."
  },
  "cfwindmills": {
    "text": [
      "Tras un agua tranquila hay molinos de viento y una casa blanca en la orilla.",
      "Una barca se desliza en calma por la superficie."
    ],
    "fact": "1822–1823. Fundación de Palacios y Jardines Prusianos, Berlín."
  },
  "cfflatbodden": {
    "text": [
      "En la orilla llana de la bahía hay unas pequeñas figuras, y más allá un velero.",
      "Sobre todo se curva un gran cielo nublado."
    ],
    "fact": "hacia 1830. Museum Georg Schäfer, Schweinfurt."
  },
  "cfdresdeneve": {
    "text": [
      "El sol se pone tras las torres de la Hofkirche y del palacio, con nubes rosadas en el cielo.",
      "Abajo, en el pequeño cuadro, Friedrich escribió Abend y octubre de 1824."
    ],
    "fact": "1824. Colección particular."
  },
  "cfwatzmann": {
    "text": [
      "Tras laderas verdes y rocas se alza el Watzmann cubierto de nieve.",
      "Friedrich nunca estuvo en los Alpes y pintó la montaña a partir de una acuarela de su alumno August Heinrich."
    ],
    "fact": "1824–1825. Alte Nationalgalerie, Berlín."
  },
  "cfelberocks": {
    "text": [
      "Torres de roca escarpadas surgen de la bruma y crecen abetos en las grietas.",
      "Una pasarela estrecha cruza un barranco."
    ],
    "fact": "1822–1823. Belvedere, Viena."
  },
  "cfmeissen": {
    "text": [
      "Por un pasaje oscuro y abovedado cae la luz sobre escalones y piedras.",
      "Al fondo se abre una pequeña ventana a la claridad."
    ],
    "fact": "hacia 1827. Colecciones Estatales de Arte de Dresde."
  },
  "cfhuttens": {
    "text": [
      "En una iglesia gótica en ruinas un hombre está ante una tumba de piedra, y la luz del atardecer brilla por los altos ventanales.",
      "El cuadro recuerda al poeta Ulrich von Hutten, muerto 300 años antes."
    ],
    "fact": "1823. Klassik Stiftung Weimar."
  },
  "cfearlysnow": {
    "text": [
      "Un camino claro lleva a un oscuro bosque de abetos, con la primera nieve sobre las ramas.",
      "Abetos jóvenes están en el borde como pequeños guardianes."
    ],
    "fact": "1827. Hamburger Kunsthalle."
  },
  "cfice": {
    "text": [
      "Los témpanos se apilan unos sobre otros formando un pico afilado.",
      "Abajo a la derecha se distingue la popa de un barco atrapado por el hielo."
    ],
    "fact": "1823–1824. Hamburger Kunsthalle."
  },
  "cfnorthmoon": {
    "text": [
      "Nubes oscuras se abren sobre un mar frío y la luz de la luna cae sobre rocas y agua.",
      "En la orilla hay una barca."
    ],
    "fact": "hacia 1823. Galería Nacional de Praga."
  },
  "cfreef": {
    "text": [
      "De un mar tranquilo e iluminado por la luna surge un arrecife puntiagudo como una montaña dentada.",
      "Delante, colinas oscuras rodean una bahía."
    ],
    "fact": "hacia 1824. Staatliche Kunsthalle Karlsruhe."
  },
  "cfmoonmen": {
    "text": [
      "Dos hombres con capa están al borde del bosque bajo un roble arrancado y miran la luna.",
      "Uno se apoya en el hombro del otro."
    ],
    "fact": "1819–1820. Colecciones Estatales de Arte de Dresde."
  },
  "cfmoonmenmet": {
    "text": [
      "Unos años después Friedrich vuelve a pintar el motivo.",
      "De nuevo dos hombres están bajo el árbol nudoso, y la fina luna creciente brilla entre las ramas."
    ],
    "fact": "hacia 1825–1830. Metropolitan Museum of Art, Nueva York."
  },
  "cfmooncouple": {
    "text": [
      "Un hombre y una mujer están muy juntos en un sendero del bosque y miran la luna creciente.",
      "La mujer apoya la mano en el hombro del hombre."
    ],
    "fact": "hacia 1824. Alte Nationalgalerie, Berlín."
  },
  "cfmoongrise": {
    "text": [
      "Tres personas están sentadas en una gran roca de la orilla y miran el mar, sobre el que sale la luna.",
      "Dos veleros regresan en el crepúsculo."
    ],
    "fact": "1822. Alte Nationalgalerie, Berlín."
  },
  "cfmoonherm": {
    "text": [
      "En la orilla dos figuras miran el agua, donde la luna asoma tras las nubes.",
      "El cielo brilla con luz dorada."
    ],
    "fact": "1821. Museo del Hermitage, San Petersburgo."
  },
  "cflonetree": {
    "text": [
      "Un viejo roble se alza solo en una amplia llanura ante montañas azules.",
      "Bajo él se apoya un pastor con sus ovejas."
    ],
    "fact": "1822. Alte Nationalgalerie, Berlín."
  },
  "cfcrows": {
    "text": [
      "Un roble nudoso y casi sin hojas crece en una colina a la luz del atardecer.",
      "Los cuervos giran alrededor de sus ramas retorcidas."
    ],
    "fact": "hacia 1822. Museo del Louvre, París."
  },
  "cfstages": {
    "text": [
      "En la orilla están un anciano, un hombre más joven, una mujer y dos niños con una banderita.",
      "En el mar navegan cinco barcos, cerca y lejos."
    ],
    "fact": "hacia 1834. Museo de Bellas Artes, Leipzig."
  },
  "cfwindowwood": {
    "text": [
      "Árboles altos y esbeltos se alzan a la luz de la luna.",
      "Abajo, en el suelo, pequeñas figuras se sientan junto a un fuego."
    ],
    "fact": "hacia 1823–1830. Alte Nationalgalerie, Berlín."
  },
  "cfriesenberlin": {
    "text": [
      "Colinas oscuras ocupan el primer plano y detrás las cordilleras se pierden en la cálida luz del atardecer.",
      "El cielo ocupa más de la mitad del cuadro."
    ],
    "fact": "hacia 1830–1835. Alte Nationalgalerie, Berlín."
  },
  "cfriesenmem": {
    "text": [
      "Delante hay piedras y un arroyo, y detrás se alzan montañas rosadas y nevadas.",
      "El cuadro se pinta muchos años después de la caminata de 1810."
    ],
    "fact": "hacia 1835. Museo del Hermitage, San Petersburgo."
  },
  "cfriesenoslo": {
    "text": [
      "Sobre un brezal pardo con pequeños árboles se ven lejanas crestas azules.",
      "Nubes ligeras cruzan el cielo."
    ],
    "fact": "hacia 1835. Museo Nacional, Oslo."
  },
  "cfriesensun": {
    "text": [
      "La luz del sol irrumpe entre las nubes y cae sobre laderas verdes con abetos.",
      "Parte de las montañas sigue en sombra."
    ],
    "fact": "hacia 1835. Saint Louis Art Museum."
  },
  "cfriesenpeaks": {
    "text": [
      "Un tronco caído atraviesa un prado y detrás hay abetos.",
      "Por encima de las nubes se alza una cumbre dentada."
    ],
    "fact": "hacia 1835. Kimbell Art Museum, Fort Worth."
  },
  "cfrosenberg": {
    "text": [
      "Más allá de colinas y valles pardos se ve el Rosenberg, de forma cónica, entre la bruma.",
      "La luz es suave y clara."
    ],
    "fact": "hacia 1835. Städel Museum, Fráncfort."
  },
  "cfeldenamtn": {
    "text": [
      "Las ruinas del monasterio de Eldena se alzan en una meseta ante los Montes de los Gigantes.",
      "En realidad, los dos lugares están a cientos de kilómetros."
    ],
    "fact": "hacia 1830–1834. Museo Estatal de Pomerania, Greifswald."
  },
  "cfbohemia28": {
    "text": [
      "Campos verde amarillento con surcos pardos se extienden hasta suaves colinas.",
      "Arriba a la izquierda Friedrich anotó el lugar y la fecha."
    ],
    "fact": "1828. Museo Estatal de Pomerania, Greifswald."
  },
  "cfmoonshore": {
    "text": [
      "La luz de la luna brilla en el agua entre piedras y nubes oscuras.",
      "Se considera uno de los últimos óleos de Friedrich."
    ],
    "fact": "1835–1836. Hamburger Kunsthalle."
  },
  "cfowlgothic": {
    "text": [
      "Una lechuza está en un estrecho nicho gótico de piedra, con un resplandor claro detrás.",
      "La hoja está dibujada en sepia."
    ],
    "fact": "hacia 1836. Museo del Hermitage, San Petersburgo."
  },
  "cfneurathen": {
    "text": [
      "Altas agujas de arenisca se alzan entre abetos en los montes de arenisca del Elba.",
      "Delante crece brezo sobre una roca."
    ],
    "fact": "hacia 1837. Museo del Hermitage, San Petersburgo."
  },
  "cfschmiede": {
    "text": [
      "Un hombre se apoya en una valla y mira por encima de campos amarillos hacia las montañas azules.",
      "La delicada acuarela muestra los Montes de los Gigantes de memoria."
    ],
    "fact": "hacia 1837. Museo Pushkin, Moscú."
  },
  "cfeldenaeast": {
    "text": [
      "El alto muro del frontón de las ruinas se alza junto a una casa de campo baja.",
      "Friedrich había dibujado Eldena una y otra vez desde su juventud."
    ],
    "fact": "1836. Kupferstich-Kabinett, Dresde."
  },
  "cfteplitz": {
    "text": [
      "Sobre papel tintado Friedrich dibuja una loma boscosa y detrás el puntiagudo Milleschauer sobre las nubes.",
      "La hoja lleva la inscripción Teplitz y la fecha 23 de septiembre de 1835, de la época de su cura."
    ],
    "fact": "1835. Germanisches Nationalmuseum, Núremberg."
  },
  "cfgraves": {
    "text": [
      "En una llanura clara y amplia hay algunas lápidas, y delante una pala clavada en la tierra.",
      "La tranquila hoja en sepia es una de las obras tardías."
    ],
    "fact": "hacia 1835–1837. Albertina, Viena."
  },
  "cflonelybank": {
    "text": [
      "Grandes piedras redondas yacen en la orilla y la luna brilla sobre el agua tranquila.",
      "Friedrich pintó la escena en cálidos tonos sepia."
    ],
    "fact": "hacia 1837. National Gallery of Art, Washington."
  },
  "cfwalkdusk": {
    "text": [
      "Un hombre está en el crepúsculo junto a un antiguo dolmen entre árboles sin hojas.",
      "Sobre él brilla la fina luna creciente."
    ],
    "fact": "hacia 1830–1835. J. Paul Getty Museum, Los Angeles."
  },
  "cfsunsetlate": {
    "text": [
      "Dos hombres están uno junto a otro en una colina y miran el sol que se pone sobre el mar.",
      "Sus figuras son casi negras contra el cielo luminoso."
    ],
    "fact": "hacia 1830–1835. Museo del Hermitage, San Petersburgo."
  },
  "cfeveningstar": {
    "text": [
      "Una familia vuelve a casa por una colina verde y un niño saluda con los brazos en alto.",
      "En el horizonte se ven las torres de Dresde y encima brilla la estrella de la tarde."
    ],
    "fact": "hacia 1830. Freies Deutsches Hochstift, Fráncfort."
  },
  "cfgrossegehege": {
    "text": [
      "Tras una inundación quedan charcos en los prados del Elba que reflejan el cielo del atardecer.",
      "En el horizonte hay una hilera oscura de árboles."
    ],
    "fact": "1832. Colecciones Estatales de Arte de Dresde."
  },
  "cfeastermorn": {
    "text": [
      "Tres mujeres caminan temprano por un sendero entre árboles sin hojas.",
      "Sobre ellas aún se ve la luna pálida."
    ],
    "fact": "hacia 1828–1835. Museo Nacional Thyssen-Bornemisza, Madrid."
  },
  "cfeveningbaltic": {
    "text": [
      "En la playa hay gente sentada junto a un pequeño fuego y más allá veleros sobre el agua tranquila.",
      "El cielo está lleno de nubes del atardecer."
    ],
    "fact": "hacia 1831. Colecciones Estatales de Arte de Dresde."
  },
  "cfharboureve": {
    "text": [
      "Muchos mástiles y velas se agrupan en el puerto.",
      "La última luz tiñe el cielo de violeta y amarillo."
    ],
    "fact": "hacia 1828. Colecciones Estatales de Arte de Dresde."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
