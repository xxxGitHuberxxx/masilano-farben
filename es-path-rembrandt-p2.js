// v9.7 ES content for Rembrandt’s life journey, Part 2 (1642–1669), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Ámsterdam",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "National Gallery, London": "National Gallery, Londres",
  "Gemäldegalerie, Berlin": "Gemäldegalerie, Berlín",
  "Kunsthistorisches Museum, Wien": "Kunsthistorisches Museum, Viena",
  "Frick Collection, New York": "Frick Collection, Nueva York",
  "Mauritshuis, Den Haag": "Mauritshuis, La Haya",
  "Nationalmuseum, Stockholm": "Nationalmuseum, Estocolmo",
  "Royal Collection, London": "Royal Collection, Londres",
  "Dulwich Picture Gallery, London": "Dulwich Picture Gallery, Londres",
  "Gemäldegalerie Alte Meister, Kassel": "Gemäldegalerie Alte Meister, Kassel",
  "Musée du Louvre, Paris": "Museo del Louvre, París",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Hammer Museum, Los Angeles": "Hammer Museum, Los Ángeles",
  "Herzog Anton Ulrich-Museum, Braunschweig": "Herzog Anton Ulrich-Museum, Brunswick",
  "National Gallery of Victoria, Melbourne": "National Gallery of Victoria, Melbourne",
  "Kenwood House, London": "Kenwood House, Londres",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Colonia",
  "Eremitage, Sankt Petersburg": "Ermitage, San Petersburgo"
});
  P.works = Object.assign(P.works || {}, {
  "rbselfflat": {
    "title": "Autorretrato con gorra plana",
    "museum": "Royal Collection, Londres"
  },
  "rbadultery": {
    "title": "Cristo y la mujer adúltera",
    "museum": "National Gallery, Londres"
  },
  "rbgirlwin": {
    "title": "Muchacha en la ventana",
    "museum": "Dulwich Picture Gallery, Londres"
  },
  "rbjosephd": {
    "title": "El sueño de José en el establo",
    "museum": "Gemäldegalerie, Berlín"
  },
  "rbthreetrees": {
    "title": "Los tres árboles",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbwinter": {
    "title": "Paisaje de invierno",
    "museum": "Gemäldegalerie Alte Meister, Kassel"
  },
  "rbjansix": {
    "title": "Jan Six",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbephraim": {
    "title": "Ephraim Bueno",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself48": {
    "title": "Autorretrato dibujando junto a la ventana",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbemmaus48": {
    "title": "La cena de Emaús",
    "museum": "Museo del Louvre, París"
  },
  "rbjews": {
    "title": "Judíos en la sinagoga",
    "museum": "National Gallery of Art, Washington"
  },
  "rbhundred": {
    "title": "La estampa de los cien florines",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbfaust": {
    "title": "Un erudito en su estudio (Fausto)",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbshell": {
    "title": "La concha",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbsixbridge": {
    "title": "El puente de Six",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbomval": {
    "title": "El Omval",
    "museum": "National Gallery of Art, Washington"
  },
  "rbmill": {
    "title": "El molino",
    "museum": "National Gallery of Art, Washington"
  },
  "rbgoldfield": {
    "title": "El campo del pesador de oro",
    "museum": "National Gallery of Art, Washington"
  },
  "rbcott3": {
    "title": "Paisaje con tres casas de tejado a dos aguas",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbtower": {
    "title": "Paisaje con una torre cuadrada",
    "museum": "National Gallery of Art, Washington"
  },
  "rbmilkman": {
    "title": "Paisaje con un lechero",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbclump": {
    "title": "Grupo de árboles con vista",
    "museum": "Cleveland Museum of Art"
  },
  "rbkitchen": {
    "title": "La criada de cocina",
    "museum": "Nationalmuseum, Estocolmo"
  },
  "rbhenddoor": {
    "title": "Hendrickje Stoffels en una puerta",
    "museum": "Gemäldegalerie, Berlín"
  },
  "rbhendmet": {
    "title": "Hendrickje Stoffels",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbself52": {
    "title": "Gran autorretrato",
    "museum": "Kunsthistorisches Museum, Viena"
  },
  "rbaristotle": {
    "title": "Aristóteles con un busto de Homero",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbfloris": {
    "title": "El abanderado (Floris Soop)",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbadorelamp": {
    "title": "La adoración de los pastores con la lámpara",
    "museum": "National Gallery of Art, Washington"
  },
  "rbemmaus54": {
    "title": "Cristo en Emaús",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbpolish": {
    "title": "El jinete polaco",
    "museum": "Frick Collection, Nueva York"
  },
  "rbtitusread": {
    "title": "Titus leyendo",
    "museum": "Kunsthistorisches Museum, Viena"
  },
  "rbhaaringh": {
    "title": "Pieter Haaringh",
    "museum": "National Gallery of Art, Washington"
  },
  "rblutma": {
    "title": "El orfebre Jan Lutma",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself58": {
    "title": "Autorretrato",
    "museum": "Frick Collection, Nueva York"
  },
  "rbself59": {
    "title": "Autorretrato",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself60": {
    "title": "Autorretrato",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbselfeasel": {
    "title": "Autorretrato ante el caballete",
    "museum": "Museo del Louvre, París"
  },
  "rbdenial": {
    "title": "La negación de san Pedro",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbtitusmonk": {
    "title": "Titus con hábito de monje",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbselfpaul": {
    "title": "Autorretrato como el apóstol Pablo",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbjacobtrip": {
    "title": "Jacob Trip",
    "museum": "National Gallery, Londres"
  },
  "rbdegeer": {
    "title": "Margaretha de Geer",
    "museum": "National Gallery, Londres"
  },
  "rbsyndics": {
    "title": "Los síndicos del gremio de pañeros",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbcivilis": {
    "title": "La conjuración de Claudio Civil",
    "museum": "Nationalmuseum, Estocolmo"
  },
  "rbhomer": {
    "title": "Homero",
    "museum": "Mauritshuis, La Haya"
  },
  "rbjuno": {
    "title": "Juno",
    "museum": "Hammer Museum, Los Ángeles"
  },
  "rbmanmag": {
    "title": "Hombre con una lupa",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbpink": {
    "title": "Mujer con un clavel",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rbrihel": {
    "title": "Frederick Rihel a caballo",
    "museum": "National Gallery, Londres"
  },
  "rbjewishbr": {
    "title": "La novia judía",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "rbfamily": {
    "title": "Retrato de familia",
    "museum": "Herzog Anton Ulrich-Museum, Brunswick"
  },
  "rbwhitehair": {
    "title": "Retrato de un hombre de cabello blanco",
    "museum": "National Gallery of Victoria, Melbourne"
  },
  "rboldman67": {
    "title": "Retrato de un anciano",
    "museum": "Mauritshuis, La Haya"
  },
  "rbselfkenwood": {
    "title": "Autorretrato con dos círculos",
    "museum": "Kenwood House, Londres"
  },
  "rbzeuxis": {
    "title": "Autorretrato como Zeuxis",
    "museum": "Wallraf-Richartz-Museum, Colonia"
  },
  "rbprodigal2": {
    "title": "El regreso del hijo pródigo",
    "museum": "Ermitage, San Petersburgo"
  },
  "rbsimeon69": {
    "title": "Simeón en el templo",
    "museum": "Nationalmuseum, Estocolmo"
  },
  "rbself63": {
    "title": "Autorretrato a los 63 años",
    "museum": "National Gallery, Londres"
  },
  "rbself69": {
    "title": "Autorretrato",
    "museum": "Mauritshuis, La Haya"
  }
});
  P.paths = P.paths || {};
  P.paths.rembrandt = {
  "title": "El camino de vida de Rembrandt",
  "part": "Partes 1–2 · 1606–1669",
  "subtitle": "Del molino de Leiden a la Westerkerk",
  "intro": "Acompaña a Rembrandt Harmenszoon van Rijn a lo largo de toda su vida: desde su nacimiento en Leiden en 1606, pasando por los años de aprendizaje, el éxito en Ámsterdam, Saskia y la Ronda de noche, hasta Titus, Hendrickje, la quiebra, la Rozengracht, los síndicos, los últimos autorretratos y su muerte en 1669.",
  "ending": [
    "Rembrandt muere en Ámsterdam el 4 de octubre de 1669, a los sesenta y tres años. Es enterrado el 8 de octubre en la Westerkerk.",
    "Sus autorretratos, aguafuertes y grandes cuadros lo convierten en uno de los pintores más famosos del mundo."
  ],
  "epilogue": "Rembrandt muere en Ámsterdam el 4 de octubre de 1669 y es enterrado en la Westerkerk.",
  "life": "1606–1669"
};
  P.stations = Object.assign(P.stations || {}, {
  "rbtitus": {
    "place": "Un año de silencio",
    "when": "1642–1645",
    "mapLabel": "Titus",
    "intro": [
      "En junio de 1642 muere Saskia; es enterrada en la Oude Kerk de Ámsterdam. Rembrandt se queda solo con el pequeño Titus, bautizado en septiembre de 1641.",
      "En los años siguientes Rembrandt pinta menos encargos. Se dedica a escenas bíblicas tranquilas y graba paisajes como Los tres árboles."
    ]
  },
  "rbgeertje": {
    "place": "Geertje Dircx",
    "when": "1643–1649",
    "mapLabel": "Geertje",
    "intro": [
      "Hacia 1643 la viuda Geertje Dircx llega a la casa de la Breestraat como niñera de Titus. Vive varios años con Rembrandt.",
      "Rembrandt retrata a amigos como Jan Six y el médico Ephraim Bueno. En 1649 Rembrandt y Geertje se separan tras una disputa que termina ante un tribunal."
    ]
  },
  "rbhundred": {
    "place": "La estampa de los cien florines",
    "when": "1648–1652",
    "mapLabel": "Grabados",
    "intro": [
      "Hacia 1648 Rembrandt termina su aguafuerte más famoso: Cristo predica y cura a los enfermos. Se llama estampa de los cien florines porque, según se cuenta, pronto se pagaron cien florines por una impresión.",
      "Rembrandt colecciona arte, conchas y objetos raros. Graba un caracol marino con tanta precisión que se reconoce cada dibujo de su concha."
    ]
  },
  "rbland": {
    "place": "Paseos junto al Amstel",
    "when": "1645–1652",
    "mapLabel": "Amstel",
    "intro": [
      "En estos años Rembrandt sale a menudo de la ciudad, a lo largo del Amstel y sobre los diques. Por el camino dibuja granjas, puentes y campos amplios.",
      "De ahí nacen sus aguafuertes de paisaje más bellos. Con pocas líneas muestra la tierra llana, el cielo alto y mucha luz."
    ]
  },
  "rbhend": {
    "place": "Hendrickje Stoffels",
    "when": "1649–1656",
    "mapLabel": "Hendrickje",
    "intro": [
      "Hendrickje Stoffels, de Bredevoort, llega a la casa hacia 1647 como ama de llaves y se convierte en la compañera de Rembrandt. Nunca se casan.",
      "En 1654 la iglesia amonesta a Hendrickje por vivir con Rembrandt sin estar casados. En octubre de 1654 bautizan a su hija Cornelia."
    ]
  },
  "rbinsolvent": {
    "place": "Deudas y quiebra",
    "when": "1653–1658",
    "mapLabel": "Quiebra",
    "intro": [
      "La casa de la Breestraat aún no está pagada y las deudas crecen. En julio de 1656 Rembrandt solicita ceder sus bienes a los acreedores.",
      "Un inventario recoge sus cuadros, libros y colecciones. En 1657 y 1658 todo se subasta, también la casa."
    ]
  },
  "rbrozen": {
    "place": "La Rozengracht",
    "when": "1658–1661",
    "mapLabel": "Rozengracht",
    "intro": [
      "La familia se muda a una casa modesta en la Rozengracht, en el barrio del Jordaan. A finales de 1660 Hendrickje y Titus fundan un comercio de arte para el que trabaja Rembrandt.",
      "Así puede seguir pintando sin que los acreedores reclamen sus cuadros. Ahora se pinta a menudo serio, tranquilo y con tiento y paleta."
    ]
  },
  "rbsyndics": {
    "place": "Los síndicos y Claudio Civil",
    "when": "1661–1663",
    "mapLabel": "Síndicos",
    "intro": [
      "En 1662 Rembrandt pinta a los directores del gremio de pañeros, los síndicos. Para el nuevo ayuntamiento pinta la Conjuración de los bátavos bajo Claudio Civil; el gran cuadro pronto le es devuelto y Rembrandt lo recorta.",
      "En 1663 muere Hendrickje. Es enterrada en la Westerkerk. Titus y Cornelia se quedan con su padre."
    ]
  },
  "rbbride": {
    "place": "La novia judía",
    "when": "1663–1668",
    "mapLabel": "Obra tardía",
    "intro": [
      "En sus últimos años Rembrandt pinta con pincel ancho y pintura espesa. En La novia judía un hombre posa con ternura la mano sobre el pecho de su esposa, y ella pone su mano sobre la de él.",
      "En febrero de 1668 Titus se casa con Magdalena van Loo. En septiembre de ese mismo año muere Titus, con solo 26 años."
    ]
  },
  "rblate": {
    "place": "Los últimos cuadros",
    "when": "1668–1669",
    "mapLabel": "Westerkerk",
    "intro": [
      "En marzo de 1669 bautizan a Titia, la hija de Titus. Rembrandt sigue trabajando en sus últimos cuadros, entre ellos El regreso del hijo pródigo.",
      "Rembrandt muere en Ámsterdam el 4 de octubre de 1669. Es enterrado el 8 de octubre en la Westerkerk."
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
  "rbselfflat": {
    "text": [
      "Rembrandt lleva una gorra plana y una prenda bordada. Se pinta en el año de la Ronda de noche. El cuadro está en la Royal Collection de Londres."
    ],
    "fact": "1642. Royal Collection, Londres."
  },
  "rbadultery": {
    "text": [
      "En un templo enorme y dorado, un pequeño grupo está en la luz ante Cristo. Rembrandt pinta la escena con gran finura. El cuadro está en la National Gallery de Londres."
    ],
    "fact": "1644. National Gallery, Londres."
  },
  "rbgirlwin": {
    "text": [
      "Una muchacha se apoya en el alféizar y nos mira. Rembrandt juega con el engaño: parece que está de verdad en el marco. El cuadro está en la Dulwich Picture Gallery de Londres."
    ],
    "fact": "1645. Dulwich Picture Gallery, Londres."
  },
  "rbjosephd": {
    "text": [
      "Un ángel se aparece a José en sueños; María y el Niño duermen a su lado en el establo. El pequeño cuadro brilla en la oscuridad. Está en la Gemäldegalerie de Berlín."
    ],
    "fact": "1645. Gemäldegalerie, Berlín."
  },
  "rbthreetrees": {
    "text": [
      "Tres árboles se alzan sobre un dique bajo un cielo inmenso con franjas de lluvia. Es el mayor aguafuerte de paisaje de Rembrandt. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1643. Rijksmuseum, Ámsterdam."
  },
  "rbwinter": {
    "text": [
      "La gente camina sobre el hielo y una granja descansa bajo el claro sol de invierno. El pequeño cuadro es una de las pocas escenas invernales de Rembrandt. Está en la Gemäldegalerie Alte Meister de Kassel."
    ],
    "fact": "1646. Gemäldegalerie Alte Meister, Kassel."
  },
  "rbjansix": {
    "text": [
      "Su amigo Jan Six lee de pie junto a la ventana. Six era comerciante, poeta y más tarde burgomaestre de Ámsterdam. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1647. Rijksmuseum, Ámsterdam."
  },
  "rbephraim": {
    "text": [
      "El médico Ephraim Bueno está en una escalera con la mano en la barandilla. Pertenecía a la comunidad judía portuguesa de Ámsterdam. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "1647. National Gallery of Art, Washington."
  },
  "rbself48": {
    "text": [
      "Rembrandt está sentado junto a la ventana dibujando, serio y sin adornos. Nos mira como si fuéramos su espejo. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1648. Rijksmuseum, Ámsterdam."
  },
  "rbemmaus48": {
    "text": [
      "Cristo parte el pan y los dos discípulos lo reconocen. Detrás de él se abre un nicho alto. El cuadro está en el Museo del Louvre de París."
    ],
    "fact": "1648. Museo del Louvre, París."
  },
  "rbjews": {
    "text": [
      "Pequeños grupos de hombres conversan en los escalones. Rembrandt conocía bien el barrio judío alrededor de su Breestraat. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "1648. National Gallery of Art, Washington."
  },
  "rbhundred": {
    "text": [
      "En el centro está Cristo en la luz; enfermos y curiosos se agolpan a su alrededor. Rembrandt trabaja muchos años en esta lámina. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "hacia 1648. Rijksmuseum, Ámsterdam."
  },
  "rbfaust": {
    "text": [
      "Un erudito contempla un disco luminoso con letras en la ventana. Más tarde la lámina recibe el nombre de Fausto. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "hacia 1652. Rijksmuseum, Ámsterdam."
  },
  "rbshell": {
    "text": [
      "Un cono marino está solo sobre la hoja, con un dibujo fino. Rembrandt tenía conchas así en su colección. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1650. Rijksmuseum, Ámsterdam."
  },
  "rbsixbridge": {
    "text": [
      "Un puentecito de madera cruza un canal y dos hombres miran por encima de la barandilla. La lámina se relaciona con Jan Six. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1645. Rijksmuseum, Ámsterdam."
  },
  "rbomval": {
    "text": [
      "En la orilla del Amstel hay un gran árbol y pasan barcas. El Omval está junto al río, al sur de Ámsterdam. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "1645. National Gallery of Art, Washington."
  },
  "rbmill": {
    "text": [
      "Un molino de viento se alza oscuro sobre un terraplén ante un cielo de atardecer luminoso. Es uno de los paisajes pintados más conocidos de Rembrandt. El cuadro está en la National Gallery of Art de Washington."
    ],
    "fact": "hacia 1645–1648. National Gallery of Art, Washington."
  },
  "rbgoldfield": {
    "text": [
      "Una tierra amplia y llana, con campos y prados de blanqueo, llega hasta el horizonte. La lámina, muy ancha, muestra la vista hacia Haarlem. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "1651. National Gallery of Art, Washington."
  },
  "rbcott3": {
    "text": [
      "Tres granjas de altos hastiales están junto al camino bajo grandes árboles. Rembrandt graba cada tejado de paja con precisión. Esta estampa está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1650. Metropolitan Museum of Art, Nueva York."
  },
  "rbtower": {
    "text": [
      "Detrás de árboles y casas se eleva una torre de iglesia cuadrada. El pequeño aguafuerte parece claro y aireado. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "1650. National Gallery of Art, Washington."
  },
  "rbmilkman": {
    "text": [
      "Un lechero camina con sus cántaros por un camino de dique junto a una granja. El aguafuerte es largo y estrecho como una vista. Esta estampa está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "hacia 1650. Metropolitan Museum of Art, Nueva York."
  },
  "rbclump": {
    "text": [
      "Un denso grupo de árboles está junto a una granja y a la derecha la vista se abre a lo lejos. Rembrandt trabaja aquí con punta seca. Esta estampa está en el Cleveland Museum of Art."
    ],
    "fact": "1652. Cleveland Museum of Art."
  },
  "rbkitchen": {
    "text": [
      "Una muchacha apoya la barbilla en la mano y mira por la ventana, absorta. Su chaqueta roja y su camisa blanca brillan en la oscuridad. El cuadro está en el Nationalmuseum de Estocolmo."
    ],
    "fact": "1651. Nationalmuseum, Estocolmo."
  },
  "rbhenddoor": {
    "text": [
      "Hendrickje se apoya en una puerta y se sujeta con una mano al marco. Su chal rojo brilla cálido. El cuadro está en la Gemäldegalerie de Berlín."
    ],
    "fact": "hacia 1656. Gemäldegalerie, Berlín."
  },
  "rbhendmet": {
    "text": [
      "Hendrickje lleva perlas y un manto de piel y mira tranquila hacia un lado. A menudo se la nombra como modelo de este retrato. El cuadro está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "hacia 1655. Metropolitan Museum of Art, Nueva York."
  },
  "rbself52": {
    "text": [
      "Rembrandt está de pie, firme, con las manos en el cinturón y un sencillo blusón de trabajo. Nunca antes se había mostrado tan serio. El cuadro está en el Kunsthistorisches Museum de Viena."
    ],
    "fact": "1652. Kunsthistorisches Museum, Viena."
  },
  "rbaristotle": {
    "text": [
      "El filósofo Aristóteles apoya la mano en un busto del poeta Homero. Un coleccionista siciliano encargó el cuadro. Está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1653. Metropolitan Museum of Art, Nueva York."
  },
  "rbfloris": {
    "text": [
      "El rico soltero Floris Soop está orgulloso en la luz con bandera y sombrero de plumas. Era abanderado de una compañía de milicia. El cuadro está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1654. Metropolitan Museum of Art, Nueva York."
  },
  "rbadorelamp": {
    "text": [
      "En el establo oscuro un pastor sostiene un farol sobre María y el Niño. Rembrandt muestra la luz como un pequeño brillo en la noche. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "hacia 1654. National Gallery of Art, Washington."
  },
  "rbemmaus54": {
    "text": [
      "Cristo está sentado detrás de una mesa, rodeado de luz, y los discípulos se asombran. Rembrandt vuelve una y otra vez a Emaús. Esta estampa está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1654. Rijksmuseum, Ámsterdam."
  },
  "rbpolish": {
    "text": [
      "Un joven jinete con gorro, arco y sable cabalga por un paisaje oscuro. Todavía hoy no se sabe quién es. El cuadro está en la Frick Collection de Nueva York."
    ],
    "fact": "hacia 1655. Frick Collection, Nueva York."
  },
  "rbtitusread": {
    "text": [
      "Titus, de unos quince años, lee un libro; la luz cae sobre su cara y sus manos. Rembrandt pinta a menudo a su hijo. El cuadro está en el Kunsthistorisches Museum de Viena."
    ],
    "fact": "hacia 1656–1657. Kunsthistorisches Museum, Viena."
  },
  "rbhaaringh": {
    "text": [
      "El subastador Pieter Haaringh está sentado ante una ventana con cortina. Participó en las subastas que pronto esperaban a Rembrandt. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "1655. National Gallery of Art, Washington."
  },
  "rblutma": {
    "text": [
      "El viejo orfebre Jan Lutma está sentado en un sillón, con herramientas y un pequeño cuenco a su lado. Rembrandt lo graba en 1656. Esta estampa está en la National Gallery of Art de Washington."
    ],
    "fact": "1656. National Gallery of Art, Washington."
  },
  "rbself58": {
    "text": [
      "El año en que se vende su casa, Rembrandt se pinta como un rey en el trono, con ropa dorada y un bastón. El cuadro está en la Frick Collection de Nueva York."
    ],
    "fact": "1658. Frick Collection, Nueva York."
  },
  "rbself59": {
    "text": [
      "Rembrandt nos mira tranquilo y cansado, con las manos juntas. Pinta con sinceridad las arrugas de su cara. El cuadro está en la National Gallery of Art de Washington."
    ],
    "fact": "1659. National Gallery of Art, Washington."
  },
  "rbself60": {
    "text": [
      "Con boina y manto marrón, Rembrandt mira desde el fondo oscuro. La luz solo cae sobre la frente y la mejilla. El cuadro está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1660. Metropolitan Museum of Art, Nueva York."
  },
  "rbselfeasel": {
    "text": [
      "Rembrandt está ante el caballete con gorro blanco, paleta y pinceles. Se muestra del todo como pintor que trabaja. El cuadro está en el Museo del Louvre de París."
    ],
    "fact": "1660. Museo del Louvre, París."
  },
  "rbdenial": {
    "text": [
      "Una criada sostiene una vela ante Pedro y le pregunta si es de los de Jesús. Pedro levanta la mano para negarlo. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1660. Rijksmuseum, Ámsterdam."
  },
  "rbtitusmonk": {
    "text": [
      "Titus lleva un hábito marrón con capucha y mira en silencio ante sí. Rembrandt lo pinta como monje. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1660. Rijksmuseum, Ámsterdam."
  },
  "rbselfpaul": {
    "text": [
      "Rembrandt se pinta como el apóstol Pablo, con turbante y la empuñadura de una espada en el manto. Levanta la frente con aire interrogante. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1661. Rijksmuseum, Ámsterdam."
  },
  "rbjacobtrip": {
    "text": [
      "El viejo comerciante Jacob Trip, de Dordrecht, está sentado en un sillón con un bastón. Su cara está llena de arrugas. El cuadro está en la National Gallery de Londres."
    ],
    "fact": "hacia 1661. National Gallery, Londres."
  },
  "rbdegeer": {
    "text": [
      "Margaretha de Geer, esposa de Jacob Trip, lleva una gran gorguera blanca. Su retrato es la pareja del de él. Está en la National Gallery de Londres."
    ],
    "fact": "hacia 1661. National Gallery, Londres."
  },
  "rbsyndics": {
    "text": [
      "Cinco directores del gremio de pañeros están sentados alrededor de una mesa con tapiz rojo; detrás está un criado. Levantan la vista como si acabáramos de entrar. El cuadro está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1662. Rijksmuseum, Ámsterdam."
  },
  "rbcivilis": {
    "text": [
      "De noche los bátavos juran lealtad a su jefe Claudio Civil; sus espadas se cruzan en la luz. Solo se conserva la parte central que Rembrandt recortó. Está en el Nationalmuseum de Estocolmo."
    ],
    "fact": "1661–1662. Nationalmuseum, Estocolmo."
  },
  "rbhomer": {
    "text": [
      "El poeta ciego Homero dicta; solo su cabeza y sus manos están iluminadas. El cuadro se pintó para el mismo coleccionista de Sicilia que Aristóteles. Está en el Mauritshuis de La Haya."
    ],
    "fact": "1663. Mauritshuis, La Haya."
  },
  "rbjuno": {
    "text": [
      "La diosa Juno lleva una corona y un espléndido manto con joyas. A su lado se adivina débilmente su pavo real. El cuadro está en el Hammer Museum de Los Ángeles."
    ],
    "fact": "hacia 1662–1665. Hammer Museum, Los Ángeles."
  },
  "rbmanmag": {
    "text": [
      "Un hombre sostiene una lupa y mira pensativo ante sí. Su retrato es la pareja de la Mujer con un clavel. Está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "principios de la década de 1660. Metropolitan Museum of Art, Nueva York."
  },
  "rbpink": {
    "text": [
      "Una joven con perlas sostiene un clavel rosa. El clavel simboliza a menudo el amor y el matrimonio. El cuadro está en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "principios de la década de 1660. Metropolitan Museum of Art, Nueva York."
  },
  "rbrihel": {
    "text": [
      "El comerciante Frederick Rihel, con ropa espléndida, monta un caballo blanco. Es el único gran retrato ecuestre de Rembrandt. El cuadro está en la National Gallery de Londres."
    ],
    "fact": "hacia 1663. National Gallery, Londres."
  },
  "rbjewishbr": {
    "text": [
      "Una pareja vestida de rojo y oro luminosos se abraza con ternura. La pintura es tan espesa que las mangas parecen casi esculpidas. El cuadro está en el Rijksmuseum de Ámsterdam; la galería también lo incluye."
    ],
    "fact": "hacia 1665–1669. Rijksmuseum, Ámsterdam."
  },
  "rbfamily": {
    "text": [
      "Una madre tiene un niño en el regazo; el padre y dos niños están a su lado, todos en un rojo cálido. No se sabe quién es la familia. El cuadro está en el Herzog Anton Ulrich-Museum de Brunswick."
    ],
    "fact": "hacia 1665. Herzog Anton Ulrich-Museum, Brunswick."
  },
  "rbwhitehair": {
    "text": [
      "Un anciano de cabello blanco y sombrero redondo mira serio desde el cuadro. Rembrandt pinta con pinceladas anchas. El cuadro está en la National Gallery of Victoria de Melbourne."
    ],
    "fact": "1667. National Gallery of Victoria, Melbourne."
  },
  "rboldman67": {
    "text": [
      "Un anciano con sombrero ancho y cuello blanco está sentado tranquilo. Rembrandt lo pinta dos años antes de su propia muerte. El cuadro está en el Mauritshuis de La Haya."
    ],
    "fact": "1667. Mauritshuis, La Haya."
  },
  "rbselfkenwood": {
    "text": [
      "Rembrandt está con paleta y pinceles ante una pared con dos grandes arcos. No se sabe qué significan los círculos. El cuadro está en Kenwood House, Londres."
    ],
    "fact": "hacia 1665. Kenwood House, Londres."
  },
  "rbzeuxis": {
    "text": [
      "Rembrandt, ya anciano, ríe mirando por encima del hombro. Probablemente se representa como el antiguo pintor Zeuxis. El cuadro está en el Wallraf-Richartz-Museum de Colonia."
    ],
    "fact": "hacia 1662–1668. Wallraf-Richartz-Museum, Colonia."
  },
  "rbprodigal2": {
    "text": [
      "El hijo está de rodillas ante su anciano padre, que le pone con cariño las manos en los hombros. Es uno de los últimos grandes cuadros de Rembrandt. Está en el Ermitage de San Petersburgo."
    ],
    "fact": "hacia 1668. Ermitage, San Petersburgo."
  },
  "rbsimeon69": {
    "text": [
      "El anciano Simeón tiene al Niño Jesús en brazos y da gracias a Dios. El cuadro quedó sin terminar en el taller de Rembrandt. Está en el Nationalmuseum de Estocolmo."
    ],
    "fact": "1669. Nationalmuseum, Estocolmo."
  },
  "rbself63": {
    "text": [
      "Rembrandt está sentado con las manos juntas y nos mira, anciano y tranquilo. Se pinta en el último año de su vida. El cuadro está en la National Gallery de Londres."
    ],
    "fact": "1669. National Gallery, Londres."
  },
  "rbself69": {
    "text": [
      "En su último autorretrato Rembrandt lleva un gorro claro y su cara brilla cálida. Es una despedida silenciosa. El cuadro está en el Mauritshuis de La Haya."
    ],
    "fact": "1669. Mauritshuis, La Haya."
  },
  "rbnightwatch": {
    "text": [
      "El capitán Frans Banninck Cocq da la orden de marcha y sus milicianos se ponen en movimiento.",
      "Una niña luminosa y mucha sombra dan vida al retrato de grupo.",
      "Esta es una versión simplificada para colorear; la Ronda de noche más detallada está en la galería.",
      "El original cuelga en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1642. Rijksmuseum, Ámsterdam."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
