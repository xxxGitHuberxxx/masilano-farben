// v9.6 ES content for Rembrandt’s life journey, Part 1 (1606–1642). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Ámsterdam",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Royal Collection, London": "Royal Collection, Londres",
  "Eremitage, Sankt Petersburg": "Ermitage, San Petersburgo",
  "The Leiden Collection, New York": "The Leiden Collection, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Museum De Lakenhal, Leiden": "Museum De Lakenhal, Leiden",
  "Gemäldegalerie, Berlin": "Gemäldegalerie, Berlín",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Musée Cognacq-Jay, Paris": "Musée Cognacq-Jay, París",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Israel Museum, Jerusalem": "Museo de Israel, Jerusalén",
  "Mauritshuis, Den Haag": "Mauritshuis, La Haya",
  "Alte Pinakothek, München": "Alte Pinakothek, Múnich",
  "Frick Collection, New York": "Frick Collection, Nueva York",
  "Los Angeles County Museum of Art": "Los Angeles County Museum of Art",
  "Taft Museum of Art, Cincinnati": "Taft Museum of Art, Cincinnati",
  "Gemäldegalerie Alte Meister, Dresden": "Gemäldegalerie Alte Meister, Dresde",
  "National Gallery, London": "National Gallery, Londres",
  "Albertina, Wien": "Albertina, Viena",
  "Bibliothèque nationale de France, Paris": "Bibliothèque nationale de France, París"
});
  P.works = Object.assign(P.works || {}, {
  "rbspectacles": {
    "title": "El vendedor de gafas",
    "museum": "Museum De Lakenhal, Leiden"
  },
  "rbhearing": {
    "title": "Tres músicos (alegoría del oído)",
    "museum": "The Leiden Collection, Nueva York"
  },
  "rboldwoman": {
    "title": "Anciana leyendo",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbgoldchain": {
    "title": "Anciano con cadena de oro",
    "museum": "Art Institute of Chicago"
  },
  "rbhistory": {
    "title": "Pintura de historia",
    "museum": "Museum De Lakenhal, Leiden"
  },
  "rbbalaam": {
    "title": "La burra de Balaam",
    "museum": "Musée Cognacq-Jay, París"
  },
  "rbmusic": {
    "title": "Compañía musical",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbstudio": {
    "title": "El pintor en su taller",
    "museum": "Museum of Fine Arts, Boston"
  },
  "rbjeremiah": {
    "title": "Jeremías lamenta la destrucción de Jerusalén",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbpeter": {
    "title": "San Pedro en la cárcel",
    "museum": "Museo de Israel, Jerusalén"
  },
  "rbsimeon": {
    "title": "Simeón en el templo",
    "museum": "Mauritshuis, La Haya"
  },
  "rbpresent": {
    "title": "La presentación en el templo con el ángel",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself28": {
    "title": "Autorretrato de joven",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbself29": {
    "title": "Autorretrato",
    "museum": "Alte Pinakothek, Múnich"
  },
  "rbselflaugh": {
    "title": "Autorretrato con gorro, riendo",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbselfopen": {
    "title": "Autorretrato con gorro, con la boca abierta",
    "museum": "National Gallery of Art, Washington"
  },
  "rbruts": {
    "title": "Nicolaes Ruts",
    "museum": "Frick Collection, Nueva York"
  },
  "rborient": {
    "title": "Hombre con traje oriental",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rblooten": {
    "title": "Marten Looten",
    "museum": "Los Angeles County Museum of Art"
  },
  "rbshipb": {
    "title": "El constructor de barcos y su esposa",
    "museum": "Royal Collection, Londres"
  },
  "rbwten": {
    "title": "Johannes Wtenbogaert",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbrising": {
    "title": "Hombre que se levanta de su silla",
    "museum": "Taft Museum of Art, Cincinnati"
  },
  "rbfan": {
    "title": "Joven con abanico",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbjoseph": {
    "title": "José cuenta sus sueños",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbbellona": {
    "title": "Belona",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbself33": {
    "title": "Autorretrato con boina de terciopelo",
    "museum": "Gemäldegalerie, Berlín"
  },
  "rbflora": {
    "title": "Flora",
    "museum": "Ermitage, San Petersburgo"
  },
  "rbprodigal": {
    "title": "Rembrandt y Saskia en la parábola del hijo pródigo",
    "museum": "Gemäldegalerie Alte Meister, Dresde"
  },
  "rbselfsaskia": {
    "title": "Autorretrato con Saskia",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbminerva": {
    "title": "Minerva en su estudio",
    "museum": "The Leiden Collection, Nueva York"
  },
  "rbbelshazzar": {
    "title": "El festín de Baltasar",
    "museum": "National Gallery, Londres"
  },
  "rbstandard": {
    "title": "El abanderado",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbmagdalen": {
    "title": "Cristo y María Magdalena en el sepulcro",
    "museum": "Royal Collection, Londres"
  },
  "rbpancake": {
    "title": "La vendedora de tortitas",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbelephant": {
    "title": "Un elefante",
    "museum": "Albertina, Viena"
  },
  "rbcottages": {
    "title": "Casas bajo un cielo de tormenta",
    "museum": "Albertina, Viena"
  },
  "rbself1639": {
    "title": "Autorretrato apoyado en un antepecho de piedra",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbself1640": {
    "title": "Autorretrato a los 34 años",
    "museum": "National Gallery, Londres"
  },
  "rbmariatrip": {
    "title": "Maria Trip",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbgoldweigher": {
    "title": "Jan Uytenbogaert, el pesador de oro",
    "museum": "Bibliothèque nationale de France, París"
  },
  "rbamsterdam": {
    "title": "Vista de Ámsterdam",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbwindmill": {
    "title": "El molino",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbtobias": {
    "title": "El ángel abandona a la familia de Tobías",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbstonebridge": {
    "title": "El puente de piedra",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbdoomer": {
    "title": "Herman Doomer",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbmartens": {
    "title": "Baertje Martens",
    "museum": "Ermitage, San Petersburgo"
  },
  "rbagatha": {
    "title": "Agatha Bas",
    "museum": "Royal Collection, Londres"
  },
  "rbanslo": {
    "title": "El predicador Cornelis Anslo y su esposa",
    "museum": "Gemäldegalerie, Berlín"
  },
  "rbdavidjon": {
    "title": "David y Jonatán",
    "museum": "Ermitage, San Petersburgo"
  },
  "rbnightwatch": {
    "title": "La Ronda de noche",
    "museum": "Rijksmuseum, Ámsterdam"
  }
});
  P.paths = P.paths || {};
  P.paths.rembrandt = {
  "title": "El camino de vida de Rembrandt",
  "part": "Parte 1 · 1606–1642",
  "subtitle": "Del molino de Leiden a la Ronda de noche",
  "intro": "Rembrandt Harmenszoon van Rijn nace en Leiden el 15 de julio de 1606, hijo de un molinero. Esta primera parte lo sigue desde la escuela latina y el aprendizaje con Swanenburgh y Lastman, pasando por el taller con Jan Lievens y los primeros autorretratos, el traslado a Ámsterdam y la boda con Saskia, hasta la casa de la Breestraat y la Ronda de noche de 1642.",
  "ending": [
    "En 1642 Rembrandt termina la Ronda de noche. En junio de ese mismo año muere Saskia, con solo 29 años; Rembrandt se queda con el pequeño Titus.",
    "En la parte siguiente llegan Hendrickje Stoffels, los años difíciles de las deudas y la quiebra, los últimos autorretratos y su muerte en Ámsterdam el 4 de octubre de 1669."
  ],
  "epilogue": "En la parte siguiente llegan Hendrickje Stoffels, los años difíciles de las deudas y la quiebra, los últimos autorretratos y su muerte en Ámsterdam el 4 de octubre de 1669.",
  "life": "1606–1669"
};
  P.stations = Object.assign(P.stations || {}, {
  "rbleiden": {
    "place": "Infancia en Leiden",
    "when": "1606–1624",
    "mapLabel": "Leiden",
    "intro": [
      "Rembrandt Harmenszoon van Rijn nace en Leiden el 15 de julio de 1606, noveno hijo del molinero Harmen Gerritszoon van Rijn y de Neeltje Willemsdochter. La familia vive frente al molino junto al Rin, del que toma el nombre van Rijn.",
      "De 1613 a 1620 va a la escuela latina. En mayo de 1620 se inscribe en la Universidad de Leiden, pero no sigue los estudios. Durante unos tres años aprende con el pintor de Leiden Jacob van Swanenburgh."
    ]
  },
  "rblastman": {
    "place": "Seis meses con Pieter Lastman",
    "when": "1625–1626",
    "mapLabel": "Lastman",
    "intro": [
      "Hacia 1625 Rembrandt pasa seis meses en Ámsterdam con Pieter Lastman, un conocido pintor de historias bíblicas y antiguas. Después vuelve a trabajar en Leiden como maestro independiente.",
      "Sus primeros cuadros fechados son de 1625 y 1626: pequeñas pinturas de historia con colores fuertes y figuras vivas, muy al estilo de Lastman."
    ]
  },
  "rblievens": {
    "place": "El taller con Jan Lievens",
    "when": "1626–1631",
    "mapLabel": "Taller",
    "intro": [
      "En Leiden Rembrandt trabaja muy unido a su amigo Jan Lievens. Desde 1626 hace también aguafuertes, y en 1628 acepta sus primeros alumnos, entre ellos Gerrit Dou.",
      "A finales de la década de 1620 Constantijn Huygens, secretario del estatúder Federico Enrique, visita a los dos jóvenes pintores y admira su trabajo. En abril de 1630 muere el padre de Rembrandt."
    ]
  },
  "rbmirror": {
    "place": "Su propio rostro",
    "when": "1628–1630",
    "mapLabel": "Espejo",
    "intro": [
      "Ya en Leiden Rembrandt se pinta y se graba a sí mismo una y otra vez. Ante el espejo prueba la luz y la sombra: ríe, se asombra o mira serio.",
      "Estos pequeños retratos son ejercicios y a la vez publicidad de su talento. A lo largo de su vida pintará más de cuarenta autorretratos."
    ]
  },
  "rbamsterdam": {
    "place": "A Ámsterdam",
    "when": "1631–1633",
    "mapLabel": "Ámsterdam",
    "intro": [
      "En 1631 Rembrandt conoce al marchante de Ámsterdam Hendrick van Uylenburgh y pronto vive en su casa. Se convierte rápidamente en un retratista buscado en la creciente ciudad comercial.",
      "En 1632 pinta su primer retrato de grupo, la Lección de anatomía del doctor Nicolaes Tulp, para el gremio de cirujanos. Siguen muchos encargos de comerciantes, predicadores y sus esposas."
    ]
  },
  "rbsaskia": {
    "place": "Saskia",
    "when": "1633–1636",
    "mapLabel": "Frisia",
    "intro": [
      "En junio de 1633 Rembrandt se compromete con Saskia van Uylenburgh, prima de su socio Hendrick. El 22 de junio de 1634 se casan en Sint Annaparochie, en Frisia.",
      "Saskia es a menudo su modelo, como Flora entre flores o a su lado. En 1635 la pareja alquila una casa en la Nieuwe Doelenstraat de Ámsterdam."
    ]
  },
  "rbstories": {
    "place": "Grandes historias, hojas pequeñas",
    "when": "1635–1638",
    "mapLabel": "Historias",
    "intro": [
      "Desde 1632 Rembrandt pinta para el estatúder Federico Enrique una serie de cuadros sobre la Pasión de Cristo. Junto a ellos nacen grandes escenas dramáticas de la Biblia.",
      "Con la pluma y la punta de grabar recoge la vida de la ciudad: una vendedora de tortitas, un elefante que recorre los Países Bajos en 1637, casas bajo un cielo de tormenta. En 1637 la familia se muda al Binnen-Amstel."
    ]
  },
  "rbbreestraat": {
    "place": "La casa de la Breestraat",
    "when": "1639–1641",
    "mapLabel": "Breestraat",
    "intro": [
      "En 1639 Rembrandt compra por 13.000 florines una gran casa en la Breestraat, hoy el Museo Casa de Rembrandt. Puede pagarla a plazos. Ese mismo año recibe el encargo de la Ronda de noche.",
      "Graba paisajes de los alrededores de Ámsterdam, un molino y escenas bíblicas. Tres hijos de Rembrandt y Saskia mueren poco después de nacer; en septiembre de 1641 bautizan a su hijo Titus."
    ]
  },
  "rbnight": {
    "place": "La Ronda de noche",
    "when": "1640–1642",
    "mapLabel": "Ronda",
    "intro": [
      "Hacia 1640 Rembrandt pinta parejas de retratos de ricos habitantes de Ámsterdam, y en 1641 al predicador Cornelis Anslo conversando con su esposa. David y Jonatán es de 1642.",
      "En 1642 termina el gran retrato de grupo de la compañía de milicia de Frans Banninck Cocq para la sala de los Kloveniersdoelen. El cuadro, hoy conocido como la Ronda de noche, está lleno de movimiento, luz y sombra."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rbspectacles": {
    "text": [
      "Un vendedor ofrece unas gafas a una pareja de ancianos. El pequeño cuadro pertenece a una serie sobre los cinco sentidos, aquí la vista, y es una de las primeras obras conocidas de Rembrandt. Está en el Museum De Lakenhal de Leiden."
    ],
    "fact": "hacia 1624–1625. Museum De Lakenhal, Leiden."
  },
  "rbhearing": {
    "text": [
      "Tres figuras cantan con una partitura. También este cuadro pertenece a la temprana serie de los cinco sentidos, aquí el oído. Está en The Leiden Collection de Nueva York."
    ],
    "fact": "hacia 1624–1625. The Leiden Collection, Nueva York."
  },
  "rboldwoman": {
    "text": [
      "Una anciana lee un gran libro y la luz cae sobre las páginas. Suele interpretarse como la profetisa Ana; a menudo se piensa que la modelo es la madre de Rembrandt. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1631. Rijksmuseum, Ámsterdam."
  },
  "rbgoldchain": {
    "text": [
      "Un anciano con boina de plumas y cadena de oro surge de la oscuridad. En Leiden Rembrandt pinta estas cabezas de carácter con modelos de su entorno. El cuadro está en el Art Institute of Chicago."
    ],
    "fact": "hacia 1631. Art Institute of Chicago."
  },
  "rbhistory": {
    "text": [
      "Soldados y dignatarios con ropas de colores se agolpan ante un soberano. Qué historia representa se discute todavía hoy. El cuadro está en el Museum De Lakenhal de Leiden."
    ],
    "fact": "1626. Museum De Lakenhal, Leiden."
  },
  "rbbalaam": {
    "text": [
      "El profeta Balaam levanta el bastón contra su burra, que se ha detenido ante un ángel. El cuadro muestra claramente la influencia de Pieter Lastman. Está en el Musée Cognacq-Jay de París."
    ],
    "fact": "1626. Musée Cognacq-Jay, París."
  },
  "rbmusic": {
    "text": [
      "Una pequeña compañía con trajes espléndidos canta y toca; delante hay libros e instrumentos. Rembrandt pinta el cuadro a los veinte años. Está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1626. Rijksmuseum, Ámsterdam."
  },
  "rbstudio": {
    "text": [
      "Un pintor pequeño está al fondo de una sala vacía y mira un gran caballete. El cuadro muestra un taller como el que Rembrandt tenía en Leiden. Está en el Museum of Fine Arts de Boston."
    ],
    "fact": "hacia 1628. Museum of Fine Arts, Boston."
  },
  "rbjeremiah": {
    "text": [
      "El profeta Jeremías apoya la cabeza en la mano; al fondo arde la ciudad. Una luz cálida cae sobre él y sobre los recipientes que tiene al lado. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1630. Rijksmuseum, Ámsterdam."
  },
  "rbpeter": {
    "text": [
      "El apóstol Pedro está arrodillado en la cárcel y reza; a su lado están las llaves. La luz de una ventana ilumina su rostro y sus manos. El cuadro está en el Museo de Israel de Jerusalén."
    ],
    "fact": "1631. Museo de Israel, Jerusalén."
  },
  "rbsimeon": {
    "text": [
      "En un templo enorme y oscuro, un rayo de luz cae sobre Simeón, María y el Niño. La mucha gente de alrededor casi desaparece en la sombra. El cuadro está en el Mauritshuis de La Haya."
    ],
    "fact": "1631. Mauritshuis, La Haya."
  },
  "rbpresent": {
    "text": [
      "Un pequeño aguafuerte: Simeón sostiene al Niño y un ángel flota encima. Con pocas líneas Rembrandt crea espacio y luz. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "1630. National Gallery of Art, Washington."
  },
  "rbself28": {
    "text": [
      "El rostro del joven Rembrandt queda casi todo en sombra; solo la mejilla y la oreja están iluminadas. Con el mango del pincel raya rizos en la pintura fresca. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "hacia 1628. Rijksmuseum, Ámsterdam."
  },
  "rbself29": {
    "text": [
      "Con el pelo revuelto y cuello blanco, el joven de veintitrés años mira desde el cuadro. Luz y sombra dividen el rostro. El cuadro está en la Alte Pinakothek de Múnich."
    ],
    "fact": "1629. Alte Pinakothek, Múnich."
  },
  "rbselflaugh": {
    "text": [
      "Rembrandt se graba con una amplia risa y un gorro. Practica estas expresiones ante el espejo. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1630. Rijksmuseum, Ámsterdam."
  },
  "rbselfopen": {
    "text": [
      "Con la boca abierta y los ojos muy abiertos, Rembrandt mira como si se hubiera asustado. El aguafuerte es uno de sus estudios de expresión. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "1630. National Gallery of Art, Washington."
  },
  "rbruts": {
    "text": [
      "El comerciante Nicolaes Ruts lleva una gruesa piel y sostiene una carta. Es uno de los primeros retratos que Rembrandt pinta para clientes de Ámsterdam. El cuadro está en la Frick Collection de Nueva York."
    ],
    "fact": "1631. Frick Collection, Nueva York."
  },
  "rborient": {
    "text": [
      "Un hombre imponente con turbante y manto pesado está ante una pared clara. Estos cuadros de disfraz son populares en Ámsterdam. El cuadro está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1632. Metropolitan Museum of Art, Nueva York."
  },
  "rblooten": {
    "text": [
      "El comerciante Marten Looten sostiene una carta y mira serio desde el cuadro. Rembrandt lo pinta en 1632. El cuadro está en el Los Angeles County Museum of Art."
    ],
    "fact": "1632. Los Angeles County Museum of Art."
  },
  "rbshipb": {
    "text": [
      "El constructor de barcos Jan Rijcksen está sentado ante su mesa de dibujo cuando su esposa Griet Jans le trae una carta. Rembrandt convierte el doble retrato en una pequeña escena. El cuadro está en la Royal Collection de Londres."
    ],
    "fact": "1633. Royal Collection, Londres."
  },
  "rbwten": {
    "text": [
      "El anciano predicador Johannes Wtenbogaert, un dirigente de los remonstrantes, viste un manto negro con cuello blanco. Rembrandt lo pinta en 1633. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1633. Rijksmuseum, Ámsterdam."
  },
  "rbrising": {
    "text": [
      "Un hombre vestido de negro se levanta de su silla y nos mira. El movimiento da vida al retrato. El cuadro está en el Taft Museum of Art de Cincinnati."
    ],
    "fact": "1633. Taft Museum of Art, Cincinnati."
  },
  "rbfan": {
    "text": [
      "Una joven con vestido negro y gran cuello de encaje sostiene un abanico. Rembrandt la pinta en 1633 como pareja del retrato de su marido. El cuadro está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1633. Metropolitan Museum of Art, Nueva York."
  },
  "rbjoseph": {
    "text": [
      "El joven José cuenta sus sueños a su familia. Rembrandt pinta la escena solo en tonos marrones y grises, como modelo para un aguafuerte. La hoja está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "hacia 1633. Rijksmuseum, Ámsterdam."
  },
  "rbbellona": {
    "text": [
      "Belona, la diosa romana de la guerra, está con armadura, casco y escudo ante un fondo oscuro. Rembrandt la pinta el año de su compromiso. El cuadro está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1633. Metropolitan Museum of Art, Nueva York."
  },
  "rbself33": {
    "text": [
      "Rembrandt se muestra con boina de terciopelo y cuello de piel, seguro de sí y con éxito. Es el año de su boda con Saskia. El cuadro está en la Gemäldegalerie de Berlín."
    ],
    "fact": "1634. Gemäldegalerie, Berlín."
  },
  "rbflora": {
    "text": [
      "Una joven como Flora, diosa de la primavera, con corona y bastón de flores. Probablemente Saskia posó para el cuadro. Está en el Ermitage de San Petersburgo."
    ],
    "fact": "1634. Ermitage, San Petersburgo."
  },
  "rbprodigal": {
    "text": [
      "Rembrandt, alegre, tiene a Saskia sentada en las rodillas y levanta una copa. Se representa como el hijo pródigo que derrocha su dinero. El cuadro está en la Gemäldegalerie Alte Meister de Dresde."
    ],
    "fact": "hacia 1635. Gemäldegalerie Alte Meister, Dresde."
  },
  "rbselfsaskia": {
    "text": [
      "En este aguafuerte Rembrandt está sentado a la mesa dibujando, con Saskia detrás. Es el único retrato doble grabado de los dos. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1636. Rijksmuseum, Ámsterdam."
  },
  "rbminerva": {
    "text": [
      "La diosa de la sabiduría está sentada con manto dorado ante una mesa con libros y un globo. La luz cae sobre su rostro y las páginas. El cuadro está en The Leiden Collection de Nueva York."
    ],
    "fact": "1635. The Leiden Collection, Nueva York."
  },
  "rbbelshazzar": {
    "text": [
      "En el banquete aparece en la pared una escritura luminosa; el rey Baltasar se vuelve asustado. Rembrandt pinta el momento lleno de movimiento. El cuadro está en la National Gallery de Londres."
    ],
    "fact": "hacia 1636–1638. National Gallery, Londres."
  },
  "rbstandard": {
    "text": [
      "Un abanderado está orgulloso con una gran bandera al hombro, sombrero de plumas y banda. Rembrandt pinta el cuadro en 1636. Desde 2022 está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1636. Rijksmuseum, Ámsterdam."
  },
  "rbmagdalen": {
    "text": [
      "En la mañana de Pascua María Magdalena reconoce a Cristo, que se le aparece como jardinero con sombrero. Detrás de ellos sale el sol sobre la ciudad. El cuadro está en la Royal Collection de Londres."
    ],
    "fact": "1638. Royal Collection, Londres."
  },
  "rbpancake": {
    "text": [
      "Una anciana fríe tortitas en la calle, los niños se agolpan a su alrededor y un perro espera. Rembrandt recoge la escena en un aguafuerte. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1635. Rijksmuseum, Ámsterdam."
  },
  "rbelephant": {
    "text": [
      "En 1637 una elefanta recorre los Países Bajos, y Rembrandt la dibuja con tiza negra. Con pocos trazos muestra la piel arrugada. El dibujo está en la Albertina de Viena."
    ],
    "fact": "1637. Albertina, Viena."
  },
  "rbcottages": {
    "text": [
      "Nubes oscuras pasan sobre unas casas de campo; un camino lleva hacia la luz. Rembrandt dibuja con pluma y pincel. La hoja está en la Albertina de Viena."
    ],
    "fact": "hacia 1635. Albertina, Viena."
  },
  "rbself1639": {
    "text": [
      "Rembrandt se apoya en un antepecho de piedra, con boina y un rico manto. El aguafuerte es del año en que compra la casa de la Breestraat. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1639. Rijksmuseum, Ámsterdam."
  },
  "rbself1640": {
    "text": [
      "Un año después se pinta en la misma postura, tranquilo y bien vestido. Tiene 34 años y está en la cima de su éxito. El cuadro está en la National Gallery de Londres."
    ],
    "fact": "1640. National Gallery, Londres."
  },
  "rbmariatrip": {
    "text": [
      "La joven Maria Trip, de una rica familia de Ámsterdam, lleva un vestido negro con cuello de encaje y perlas. Rembrandt pinta cada pliegue del encaje. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1639. Rijksmuseum, Ámsterdam."
  },
  "rbgoldweigher": {
    "text": [
      "El recaudador Jan Uytenbogaert está sentado ante una mesa llena de sacos de dinero. Rembrandt lo graba en 1639. Esta estampa está en la Bibliothèque nationale de France de París."
    ],
    "fact": "1639. Bibliothèque nationale de France, París."
  },
  "rbamsterdam": {
    "text": [
      "Más allá de prados llanos se ven a lo lejos torres, molinos y barcos de Ámsterdam. El pequeño aguafuerte muestra la ciudad desde el noroeste. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "hacia 1640. Rijksmuseum, Ámsterdam."
  },
  "rbwindmill": {
    "text": [
      "Un gran molino de viento se alza sobre la muralla, con una casita al lado. Rembrandt lo graba en 1641. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1641. Rijksmuseum, Ámsterdam."
  },
  "rbtobias": {
    "text": [
      "El ángel Rafael se aleja volando mientras la familia de Tobías se arrodilla asombrada ante la casa. Rembrandt graba la historia bíblica en 1641. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1641. Rijksmuseum, Ámsterdam."
  },
  "rbstonebridge": {
    "text": [
      "Un pequeño puente junto al río; árboles oscuros al sol ante un cielo de tormenta. Es uno de los pocos paisajes pintados por Rembrandt. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "hacia 1638. Rijksmuseum, Ámsterdam."
  },
  "rbdoomer": {
    "text": [
      "Herman Doomer era fabricante de marcos y ebanista en Ámsterdam. Rembrandt lo pinta con sombrero ancho y cuello blanco. El cuadro está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1640. Metropolitan Museum of Art, Nueva York."
  },
  "rbmartens": {
    "text": [
      "Baertje Martens era la esposa de Herman Doomer. Su retrato es la pareja del de él. El cuadro está en el Ermitage de San Petersburgo."
    ],
    "fact": "hacia 1640. Ermitage, San Petersburgo."
  },
  "rbagatha": {
    "text": [
      "Agatha Bas aparece como en el marco de una ventana, con una mano en el antepecho y un abanico en la otra. Rembrandt la pinta en 1641. El cuadro está en la Royal Collection de Londres."
    ],
    "fact": "1641. Royal Collection, Londres."
  },
  "rbanslo": {
    "text": [
      "El predicador menonita Cornelis Anslo habla a su esposa Aeltje sobre un libro abierto. Rembrandt muestra cómo convence con la palabra. El cuadro está en la Gemäldegalerie de Berlín."
    ],
    "fact": "1641. Gemäldegalerie, Berlín."
  },
  "rbdavidjon": {
    "text": [
      "Los amigos David y Jonatán se abrazan para despedirse ante un amplio paisaje. Rembrandt pinta la escena bíblica en 1642. El cuadro está en el Ermitage de San Petersburgo."
    ],
    "fact": "1642. Ermitage, San Petersburgo."
  },
  "rbnightwatch": {
    "text": [
      "El capitán Frans Banninck Cocq da la orden de marcha y sus milicianos se ponen en movimiento. Una niña luminosa y mucha sombra dan vida al retrato de grupo. Cuelga en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1642. Rijksmuseum, Ámsterdam."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
