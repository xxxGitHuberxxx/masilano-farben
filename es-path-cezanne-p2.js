// v8.7 Spanish content for Paul Cézanne’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts. Overwrites P.paths.cezanne with whole-path meta.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Colección no determinada",
  "Privatbesitz": "Colección privada",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "Barnes Foundation, Philadelphia": "Barnes Foundation, Filadelfia",
  "Musée d’Orsay, Paris": "Musée d’Orsay, París",
  "Eremitage, Sankt Petersburg": "Ermitage, San Petersburgo",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Toledo Museum of Art": "Toledo Museum of Art",
  "Sammlung E. G. Bührle, Kunsthaus Zürich": "Colección E. G. Bührle, Kunsthaus Zürich",
  "Courtauld Gallery, London": "Courtauld Gallery, Londres",
  "Museum Folkwang, Essen": "Museum Folkwang, Essen",
  "Museum of Fine Arts, Houston": "Museum of Fine Arts, Houston",
  "Phillips Collection, Washington": "Phillips Collection, Washington",
  "J. Paul Getty Museum, Los Angeles": "J. Paul Getty Museum, Los Angeles",
  "Petit Palais, Paris": "Petit Palais, París",
  "Kimbell Art Museum, Fort Worth": "Kimbell Art Museum, Fort Worth",
  "Artizon Museum, Tokio": "Artizon Museum, Tokio",
  "Princeton University Art Museum": "Princeton University Art Museum",
  "Puschkin-Museum, Moskau": "Museo Pushkin, Moscú",
  "Fondation Beyeler, Riehen": "Fondation Beyeler, Riehen",
  "Galleria Nazionale d’Arte Moderna, Rom": "Galleria Nazionale d’Arte Moderna, Roma",
  "Museo Thyssen-Bornemisza, Madrid": "Museo Thyssen-Bornemisza, Madrid",
  "Nelson-Atkins Museum of Art, Kansas City": "Nelson-Atkins Museum of Art, Kansas City",
  "Baltimore Museum of Art": "Baltimore Museum of Art"
});
  P.works = Object.assign(P.works || {}, {
  "czson87": {
    "title": "El hijo Paul",
    "museum": "National Gallery of Art, Washington"
  },
  "czmarne": {
    "title": "A orillas del Marne",
    "museum": "Ermitage, San Petersburgo"
  },
  "czcreteil": {
    "title": "El puente sobre el Marne en Créteil",
    "museum": "Colección no determinada"
  },
  "czchantilly": {
    "title": "Avenida en Chantilly",
    "museum": "Toledo Museum of Art"
  },
  "czselfpalette": {
    "title": "Autorretrato con paleta",
    "museum": "Colección E. G. Bührle, Kunsthaus Zürich"
  },
  "czsvpine": {
    "title": "Montagne Sainte-Victoire con un pino grande",
    "museum": "Courtauld Gallery, Londres"
  },
  "czsvviaduct": {
    "title": "Montagne Sainte-Victoire y el viaducto del valle del Arc",
    "museum": "Colección no determinada"
  },
  "czsvvalcros": {
    "title": "Montagne Sainte-Victoire y el viaducto desde Valcros",
    "museum": "Colección no determinada"
  },
  "czbellevue": {
    "title": "Casa Bellevue y palomar",
    "museum": "Museum Folkwang, Essen"
  },
  "czgrandpin": {
    "title": "Gran pino y tierra roja",
    "museum": "Ermitage, San Petersburgo"
  },
  "cards": {
    "title": "Los jugadores de cartas",
    "museum": "Musée d’Orsay, París"
  },
  "czcardmet": {
    "title": "Los jugadores de cartas",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "czcardplayer": {
    "title": "El jugador de cartas",
    "museum": "Musée d’Orsay, París"
  },
  "czpipe": {
    "title": "Hombre con pipa",
    "museum": "National Gallery of Art, Washington"
  },
  "czpeasant": {
    "title": "Campesino sentado",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "czcoffee": {
    "title": "La mujer de la cafetera",
    "museum": "Musée d’Orsay, París"
  },
  "czmadred": {
    "title": "Madame Cézanne con vestido rojo",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "czconserv": {
    "title": "Madame Cézanne en el invernadero",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "czmadyellow": {
    "title": "Madame Cézanne en un sillón amarillo",
    "museum": "Art Institute of Chicago"
  },
  "czmadblue": {
    "title": "Madame Cézanne de azul",
    "museum": "Museum of Fine Arts, Houston"
  },
  "czmadhat": {
    "title": "Madame Cézanne con sombrero verde",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "apples": {
    "title": "La cesta de manzanas",
    "museum": "Art Institute of Chicago"
  },
  "czginger": {
    "title": "Tarro de jengibre con granada y peras",
    "museum": "Phillips Collection, Washington"
  },
  "czeggplant": {
    "title": "Bodegón con tarro de jengibre y berenjenas",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "czcurtain": {
    "title": "Bodegón con cortina",
    "museum": "Ermitage, San Petersburgo"
  },
  "czonions": {
    "title": "Bodegón con cebollas",
    "museum": "Musée d’Orsay, París"
  },
  "czgetty": {
    "title": "Bodegón con manzanas",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "czpeaches": {
    "title": "Cuatro melocotones en un plato",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "czapplpeach": {
    "title": "Bodegón con manzanas y melocotones",
    "museum": "National Gallery of Art, Washington"
  },
  "czgeffroy": {
    "title": "Retrato de Gustave Geffroy",
    "museum": "Musée d’Orsay, París"
  },
  "czvollard": {
    "title": "Retrato de Ambroise Vollard",
    "museum": "Petit Palais, París"
  },
  "czselfberet": {
    "title": "Autorretrato con boina",
    "museum": "Museum of Fine Arts, Boston"
  },
  "czitalian": {
    "title": "Joven italiana en la mesa",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "czannecy": {
    "title": "El lago de Annecy",
    "museum": "Courtauld Gallery, Londres"
  },
  "czbibquarry": {
    "title": "La cantera de Bibémus",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "czbibbarnes": {
    "title": "Bibémus",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "czbibsv": {
    "title": "La montaña Sainte-Victoire desde la cantera de Bibémus",
    "museum": "Baltimore Museum of Art"
  },
  "czbibfolk": {
    "title": "La cantera de Bibémus",
    "museum": "Colección no determinada"
  },
  "czbibnelson": {
    "title": "La cantera de Bibémus",
    "museum": "Nelson-Atkins Museum of Art, Kansas City"
  },
  "czbibrocks": {
    "title": "Rocas y ramas en Bibémus",
    "museum": "Petit Palais, París"
  },
  "czcnnga": {
    "title": "Château Noir",
    "museum": "National Gallery of Art, Washington"
  },
  "czcnmaria": {
    "title": "Maison Maria con vista del Château Noir",
    "museum": "Kimbell Art Museum, Fort Worth"
  },
  "czcnmill": {
    "title": "La muela en el parque del Château Noir",
    "museum": "Philadelphia Museum of Art"
  },
  "czcnsv": {
    "title": "Montagne Sainte-Victoire y Château Noir",
    "museum": "Artizon Museum, Tokio"
  },
  "czcncistern": {
    "title": "La cisterna en el parque del Château Noir",
    "museum": "Princeton University Art Museum"
  },
  "czcnview": {
    "title": "Vista del Château Noir",
    "museum": "Colección no determinada"
  },
  "czsvnoir": {
    "title": "Château Noir y Montagne Sainte-Victoire",
    "museum": "Colección no determinada"
  },
  "czforestpath": {
    "title": "Sendero del bosque hacia el Château Noir",
    "museum": "Fondation Beyeler, Riehen"
  },
  "czlvmet": {
    "title": "Montagne Sainte-Victoire",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "czlvsv": {
    "title": "La montaña Sainte-Victoire desde Les Lauves",
    "museum": "Museo Pushkin, Moscú"
  },
  "czlvgarden": {
    "title": "El jardín de Les Lauves",
    "museum": "Phillips Collection, Washington"
  },
  "czlvbend": {
    "title": "La curva del camino arriba, en el Chemin des Lauves",
    "museum": "Fondation Beyeler, Riehen"
  },
  "czlvterrace": {
    "title": "La terraza en el jardín de Les Lauves",
    "museum": "Colección no determinada"
  },
  "czcabanon": {
    "title": "El Cabanon de Jourdan",
    "museum": "Galleria Nazionale d’Arte Moderna, Roma"
  },
  "czvallier": {
    "title": "El jardinero Vallier",
    "museum": "National Gallery of Art, Washington"
  },
  "czvallierbu": {
    "title": "El viejo jardinero",
    "museum": "Colección E. G. Bührle, Kunsthaus Zürich"
  },
  "czpaysan": {
    "title": "Retrato de un campesino",
    "museum": "Museo Thyssen-Bornemisza, Madrid"
  },
  "czwomanblue": {
    "title": "Mujer sentada de azul",
    "museum": "Phillips Collection, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.cezanne = {
  "title": "El camino de vida de Paul Cézanne",
  "life": "1839–1906",
  "part": "Partes 1–2 · 1839–1906",
  "subtitle": "De Aix a París y de vuelta a la Provenza, hasta el estudio de Les Lauves",
  "intro": "Viaja con Paul Cézanne por toda su vida: desde la infancia en Aix-en-Provence y la amistad con Émile Zola, pasando por los estudios de derecho, la Académie Suisse en París, el período oscuro «couillarde», el giro con Camille Pissarro en Pontoise y Auvers, las exposiciones de 1874 y 1877, L’Estaque, Hortense Fiquet y el hijo Paul, el Jas de Bouffan y el año 1886 – hasta la montaña Sainte-Victoire, los jugadores de cartas, las manzanas y los bodegones, la exposición en casa de Ambroise Vollard en 1895, el estudio de Les Lauves y la muerte de Cézanne en Aix el 22 de octubre de 1906. Estaciones breves, cuadros para pintar y voces de cartas a Émile Bernard y al hijo Paul. Dejamos a un lado a los bañistas y las escenas violentas de juventud.",
  "ending": [
    "El 15 de octubre de 1906, mientras pinta al aire libre, a Cézanne le sorprende una tormenta. Se derrumba; un carretero lo lleva a casa. Al día siguiente intenta seguir trabajando y se derrumba de nuevo.",
    "El 22 de octubre de 1906 muere Paul Cézanne en Aix-en-Provence, a los sesenta y siete años. Quedan los paisajes de la Provenza, los bodegones, los retratos – y una obra que recoge el mundo visible en formas firmes y coloreadas."
  ],
  "epilogue": "Paul Cézanne muere el 22 de octubre de 1906 en Aix-en-Provence. Pocos días antes se había derrumbado, mientras pintaba al aire libre, en una tormenta. Quedan la montaña Sainte-Victoire, los jugadores de cartas, las manzanas, las canteras de Bibémus, el Château Noir, el estudio de Les Lauves y los retratos tardíos del jardinero Vallier."
};
  P.stations = Object.assign(P.stations || {}, {
  "cezannemarne": {
    "place": "París, el Marne y Chantilly",
    "when": "1886–1890",
    "mapLabel": "Marne",
    "intro": [
      "Tras la muerte del padre en octubre de 1886, Cézanne queda independiente gracias a la herencia. Hortense y el hijo Paul han sido legitimados; a menudo viven en París, mientras él alterna entre la ciudad y Aix.",
      "Pinta al hijo ya adolescente, trabaja a orillas del Marne –en Créteil, entre otros lugares– y en 1888 en Chantilly, al norte de París. Hacia 1890 nace un autorretrato con paleta.",
      "Los años posteriores a 1886 no son un abandono de la Provenza, pero lo llevan de nuevo a los ríos y las avenidas de la Île-de-France."
    ]
  },
  "cezannesv": {
    "place": "La montaña Sainte-Victoire",
    "when": "1885–1897",
    "mapLabel": "Sainte-Victoire",
    "intro": [
      "Al este de Aix se alza la montaña Sainte-Victoire. Desde mediados de la década de 1880 el monte se convierte para Cézanne en un motivo central: con el gran pino en primer término, con el viaducto del valle del Arc, desde Valcros.",
      "Se añaden vistas de la casa Bellevue con el palomar, que pertenece a la hermana Rose y a su marido Maxime Conil, y más tarde el gran pino sobre tierra roja.",
      "Cézanne vuelve a este monte a lo largo de dos décadas. Cada versión busca la misma forma en un orden nuevo de color y de plano."
    ]
  },
  "cezannecards": {
    "place": "Los jugadores de cartas",
    "when": "1890–1896",
    "mapLabel": "Cartas",
    "intro": [
      "A principios de la década de 1890 Cézanne pinta una serie de jugadores de cartas. Le sirven de modelos campesinos y trabajadores del Jas de Bouffan. Nacen varias versiones con dos o más jugadores.",
      "Al mismo mundo pertenecen estudios sueltos: un jugador de cartas de perfil, un hombre con pipa, un campesino sentado. Hacia 1895 se añade el retrato de una mujer con cafetera.",
      "Las figuras se sientan en silencio, sin acción dramática. Cézanne construye cuerpos, mesa y espacio con planos de color firmes."
    ]
  },
  "cezannemadame": {
    "place": "Hortense Fiquet",
    "when": "1886–1895",
    "mapLabel": "Hortense",
    "intro": [
      "Después del matrimonio de 1886, Cézanne sigue pintando a Hortense Fiquet: con vestido rojo, en un sillón amarillo, de azul, en 1891 en el invernadero, en 1891–1892 con sombrero verde.",
      "En estos años Hortense vive a menudo con el hijo en París; Cézanne trabaja sobre todo en Aix. Los retratos no buscan la cercanía familiar, sino un orden firme de postura, vestido y espacio.",
      "A lo largo de los años nacen más de cuarenta retratos pintados de Hortense. Los cinco cuadros de esta estación pertenecen a las versiones conocidas de finales de la década de 1880 y principios de la de 1890."
    ]
  },
  "cezanneapples": {
    "place": "Manzanas y bodegones",
    "when": "1890–1905",
    "mapLabel": "Manzanas",
    "intro": [
      "El bodegón sigue siendo para Cézanne un campo propio, junto al paisaje y al retrato. Manzanas, melocotones, cebollas, un tarro de jengibre, una cortina, un mantel: cosas cotidianas, puestas con firmeza y calma.",
      "La cesta de manzanas de hacia 1893 es una de las versiones más conocidas. En los mismos años aparecen bodegones con granada y peras, con berenjenas, con cebollas y con melocotones en un plato.",
      "Hacia 1905, en los últimos años, vuelve una vez más a las manzanas y los melocotones. La ligera inclinación de las mesas y el plano de color firme siguen siendo sus medios."
    ]
  },
  "cezannevollard": {
    "place": "París · Vollard y el reconocimiento tardío",
    "when": "1895–1900",
    "mapLabel": "Vollard",
    "intro": [
      "En noviembre y diciembre de 1895, Ambroise Vollard muestra en su galería de la rue Laffitte, en París, la primera gran exposición individual de Cézanne. El reconocimiento llega tarde, pero permanece.",
      "En 1895–1896 Cézanne retrata al crítico Gustave Geffroy; en 1899 posa el propio Vollard. Se añaden un autorretrato con boina, el retrato de una joven italiana y, en 1896, el lago de Annecy, pintado durante una estancia en Talloires.",
      "En 1897 muere la madre. En 1899 se vende el Jas de Bouffan. Cézanne permanece en Aix y busca nuevos lugares de trabajo en el campo al este de la ciudad."
    ]
  },
  "cezannebibemus": {
    "place": "La cantera de Bibémus",
    "when": "1895–1904",
    "mapLabel": "Bibémus",
    "intro": [
      "Al este de Aix se encuentra la cantera de Bibémus. Desde mediados de la década de 1890 Cézanne alquila allí una cabaña y trabaja ante las paredes de roca ocre, los pinos y la vista hacia la Sainte-Victoire.",
      "Nacen varias versiones de la cantera: espacios estrechos de roca, vistas más abiertas con árboles, y vistas en las que el monte aparece sobre la piedra.",
      "Hasta los primeros años del nuevo siglo vuelve a Bibémus. La piedra misma se convierte en motivo, construida con firmeza y claridad."
    ]
  },
  "cezannechateau": {
    "place": "Château Noir",
    "when": "1890–1904",
    "mapLabel": "Château Noir",
    "intro": [
      "En la carretera hacia Le Tholonet se alza el Château Noir, una casa en un parque al este de Aix. Cézanne trabaja allí durante años: alquila durante un tiempo una habitación, pinta la fachada, el parque, la cisterna, la muela y el sendero del bosque.",
      "A menudo la casa aparece junto a la montaña Sainte-Victoire. Las vistas tempranas empiezan ya hacia 1887–1890; las versiones más densas pertenecen sobre todo a la década de 1890 y hasta 1904.",
      "Cuando este lugar de trabajo desaparece, Cézanne se hace construir un estudio propio al norte de la ciudad, en Les Lauves."
    ]
  },
  "cezannelauves": {
    "place": "El estudio de Les Lauves",
    "when": "1902–1906",
    "mapLabel": "Les Lauves",
    "intro": [
      "En 1901 Cézanne compra un terreno en el Chemin des Lauves, al norte de Aix; en 1902 el estudio ya está en pie. Desde allí pinta las vistas tardías de la Sainte-Victoire, el jardín, la terraza y la curva del camino arriba, en la ladera.",
      "En 1904 el Salon d’Automne de París dedica una sala a su obra. En los mismos años escribe al joven pintor Émile Bernard y le expone que hay que tratar la naturaleza por el cilindro, la esfera y el cono.",
      "En 1906 pinta también el Cabanon de Jourdan, en el borde de la ciudad. El estudio de Les Lauves permanece hasta el final como su lugar de trabajo en Aix."
    ]
  },
  "cezanne1906": {
    "place": "Vallier y los últimos meses",
    "when": "1902–1906",
    "mapLabel": "1906",
    "intro": [
      "En los últimos años Cézanne retrata una y otra vez a su jardinero Vallier, a menudo en la terraza del estudio. Se añaden el retrato de un campesino y una mujer sentada de azul.",
      "A Émile Bernard le escribe el 23 de octubre de 1905 que le debe la verdad en la pintura. El 8 de septiembre de 1906 dice al hijo Paul que, como pintor, se vuelve más lúcido ante la naturaleza, pero que la realización de sus sensaciones sigue siendo trabajosa.",
      "El 15 de octubre de 1906, mientras pinta al aire libre, le sorprende una tormenta y se derrumba; un carretero lo lleva a casa. Al día siguiente intenta seguir trabajando y se derrumba de nuevo. El 22 de octubre de 1906 muere Paul Cézanne en Aix-en-Provence."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "czson87": {
    "text": [
      "El hijo se sienta de tres cuartos, la mirada en calma, la forma de la cabeza y de los hombros sólidamente construida. En estos años Paul es un adolescente.",
      "Este retrato data de 1886–1887, en el período posterior al matrimonio que legitima al hijo. Cuelga en la National Gallery of Art de Washington."
    ],
    "fact": "1886–1887. National Gallery of Art, Washington."
  },
  "czmarne": {
    "text": [
      "Los árboles se alzan junto al agua; la orilla, el follaje y el reflejo están construidos en planos de color calmos y bien trabados.",
      "Hacia 1888 Cézanne trabaja en el Marne, al este de París. El cuadro pertenece hoy al Ermitage de San Petersburgo."
    ],
    "fact": "hacia 1888. Ermitage, San Petersburgo."
  },
  "czcreteil": {
    "text": [
      "Un puente cruza el río; casas, orilla y agua se disponen en bandas claras y calmas.",
      "El cuadro está fechado en 1888 y nace en Créteil, a orillas del Marne, no lejos de París."
    ],
    "fact": "1888. Colección no determinada."
  },
  "czchantilly": {
    "text": [
      "Una avenida se adentra en la profundidad: troncos a izquierda y derecha, el camino claro, el follaje como un dosel calmo por encima.",
      "En 1888 Cézanne pinta en Chantilly, al norte de París. El cuadro cuelga en el Toledo Museum of Art."
    ],
    "fact": "1888. Toledo Museum of Art."
  },
  "czselfpalette": {
    "text": [
      "Cézanne se alza con la paleta ante el lienzo, la mirada firme, la forma de la cabeza y del hombro en unos pocos planos claros.",
      "El autorretrato data de hacia 1890. Pertenece a la colección E. G. Bührle y cuelga en el Kunsthaus Zürich."
    ],
    "fact": "hacia 1890. Colección E. G. Bührle, Kunsthaus Zürich."
  },
  "czsvpine": {
    "text": [
      "En primer término se alza un gran pino; detrás se eleva la montaña Sainte-Victoire como una forma clara y calma sobre la llanura.",
      "Hacia 1887 el monte al este de Aix se convierte en un motivo recurrente. Esta versión cuelga en la Courtauld Gallery de Londres."
    ],
    "fact": "hacia 1887. Courtauld Gallery, Londres."
  },
  "czsvviaduct": {
    "text": [
      "Por la llanura atraviesa el viaducto del valle del Arc; encima se alza la montaña Sainte-Victoire, firme y clara.",
      "El cuadro data de 1885–1887. Cézanne ordena llanura, viaducto y monte en un paisaje calmo y construido."
    ],
    "fact": "1885–1887. Colección no determinada."
  },
  "czsvvalcros": {
    "text": [
      "Desde Valcros, el viaducto y la llanura quedan ante el monte; las formas se escalonan con claridad, el cielo es amplio.",
      "El cuadro está fechado en 1887. Cézanne busca el mismo monte desde otro punto de vista."
    ],
    "fact": "1887. Colección no determinada."
  },
  "czbellevue": {
    "text": [
      "La casa y el palomar redondo se alzan firmes en el paisaje; muros, tejado y verdor están puestos en unos pocos planos claros.",
      "Hacia 1890 Cézanne pinta Bellevue, una finca al oeste de Aix que pertenece a la hermana Rose y a su marido Maxime Conil. El cuadro cuelga en el Museum Folkwang de Essen."
    ],
    "fact": "hacia 1890. Museum Folkwang, Essen."
  },
  "czgrandpin": {
    "text": [
      "Un gran pino se alza sobre un suelo rojizo; tronco, copa y tierra están construidos en planos de color calmos y vigorosos.",
      "El cuadro data de 1895–1897, en el campo de Aix. Pertenece al Ermitage de San Petersburgo."
    ],
    "fact": "1895–1897. Ermitage, San Petersburgo."
  },
  "cards": {
    "text": [
      "Dos hombres se sientan a una mesa pequeña y juegan a las cartas, sin que uno mire al otro. Las figuras y la mesa están construidas con planos de color calmos y firmes.",
      "Esta versión con dos jugadores data de hacia 1894–1895. Les sirven de modelos campesinos de la finca familiar. El cuadro cuelga en el Musée d’Orsay de París."
    ],
    "fact": "hacia 1894–1895. Musée d’Orsay, París."
  },
  "czcardmet": {
    "text": [
      "Dos jugadores se sientan frente a frente, entre ellos una botella sobre la mesa; los cuerpos son pesados y calmos, el espacio es estrecho.",
      "Esta versión anterior, de 1890–1892, cuelga en el Metropolitan Museum of Art de Nueva York. Cézanne pinta el motivo en varias variantes."
    ],
    "fact": "1890–1892. Metropolitan Museum of Art, Nueva York."
  },
  "czcardplayer": {
    "text": [
      "Un solo jugador se sienta de perfil a la mesa, las cartas en la mano, el sombrero oscuro, la postura quieta.",
      "Este estudio de 1890–1892 pertenece al círculo de los cuadros de jugadores de cartas. Cuelga en el Musée d’Orsay de París."
    ],
    "fact": "1890–1892. Musée d’Orsay, París."
  },
  "czpipe": {
    "text": [
      "Un hombre con sombrero y pipa se sienta ante un fondo sencillo; el rostro está modelado con firmeza, la mirada vuelta hacia dentro.",
      "Este retrato de un campesino de Aix, en el círculo de los jugadores de cartas, data de 1892–1896. Cuelga en la National Gallery of Art de Washington."
    ],
    "fact": "1892–1896. National Gallery of Art, Washington."
  },
  "czpeasant": {
    "text": [
      "Un campesino se sienta con los brazos cruzados, la mirada baja, la chaqueta y el pantalón en tonos apagados y firmes.",
      "Hacia 1892 Cézanne pinta a este campesino sentado. El cuadro cuelga en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "hacia 1892. Metropolitan Museum of Art, Nueva York."
  },
  "czcoffee": {
    "text": [
      "Una mujer se sienta erguida a la mesa, junto a ella una cafetera y una taza; la postura es estricta, los objetos claros y firmes.",
      "Este retrato, probablemente de una criada de Aix, data de hacia 1895. Cuelga en el Musée d’Orsay de París."
    ],
    "fact": "hacia 1895. Musée d’Orsay, París."
  },
  "czmadred": {
    "text": [
      "Hortense se sienta con un vestido rojo, el torso ligeramente vuelto, la mirada en calma; el rojo se alza firme contra el espacio construido.",
      "Hacia 1888–1890 Cézanne pinta a su mujer con este vestido rojo. El cuadro cuelga en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "hacia 1888–1890. Metropolitan Museum of Art, Nueva York."
  },
  "czconserv": {
    "text": [
      "Hortense se sienta en el invernadero, detrás de ella las plantas y el armazón de los cristales; la postura es erguida, el rostro claramente perfilado.",
      "El cuadro está fechado en 1891. Es uno de los retratos más conocidos de Hortense y cuelga en el Metropolitan Museum of Art."
    ],
    "fact": "1891. Metropolitan Museum of Art, Nueva York."
  },
  "czmadyellow": {
    "text": [
      "Hortense se sienta en un sillón amarillo, las manos en el regazo, el vestido rojo oscuro, el fondo calmo y plano.",
      "Este retrato data de 1888–1890. Cuelga en el Art Institute of Chicago."
    ],
    "fact": "1888–1890. Art Institute of Chicago."
  },
  "czmadblue": {
    "text": [
      "Hortense lleva un vestido azul; el cuerpo está puesto con firmeza en el espacio, el fondo dividido en bandas calmas.",
      "Cézanne pinta este retrato hacia 1888–1890. Cuelga en el Museum of Fine Arts de Houston."
    ],
    "fact": "hacia 1888–1890. Museum of Fine Arts, Houston."
  },
  "czmadhat": {
    "text": [
      "Hortense lleva un sombrero verde; cabeza, sombrero y torso forman una silueta calma y cerrada contra el fondo más oscuro.",
      "Este retrato data de 1891–1892. Pertenece a la Barnes Foundation de Filadelfia."
    ],
    "fact": "1891–1892. Barnes Foundation, Filadelfia."
  },
  "apples": {
    "text": [
      "Manzanas, una botella, un bollo y un mantel doblado: Cézanne dispone las cosas cotidianas de modo que parezcan un mundo pequeño y estable.",
      "Esta cesta de manzanas data de hacia 1893. La ligera inclinación de la mesa es deliberada. El cuadro cuelga en el Art Institute of Chicago."
    ],
    "fact": "hacia 1893. Art Institute of Chicago."
  },
  "czginger": {
    "text": [
      "Un tarro de jengibre se alza entre una granada, peras y un paño; los objetos están puestos con firmeza, los colores son cálidos y calmos.",
      "El bodegón está fechado en 1893. Pertenece a la Phillips Collection de Washington."
    ],
    "fact": "1893. Phillips Collection, Washington."
  },
  "czeggplant": {
    "text": [
      "Berenjenas, un tarro de jengibre y frutas reposan sobre el mantel; las frutas oscuras y el paño blanco se equilibran.",
      "Este bodegón data de 1893–1894. Cuelga en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1893–1894. Metropolitan Museum of Art, Nueva York."
  },
  "czcurtain": {
    "text": [
      "Detrás de las frutas, el jarro y el paño cae una cortina estampada; la tela introduce movimiento en el conjunto firmemente construido.",
      "Este bodegón data de hacia 1898. Pertenece al Ermitage de San Petersburgo."
    ],
    "fact": "hacia 1898. Ermitage, San Petersburgo."
  },
  "czonions": {
    "text": [
      "Cebollas, una botella y un paño reposan sobre la tabla; las formas redondas y el blanco de la tela se contraponen con claridad.",
      "Cézanne pinta este bodegón en 1896–1898. Cuelga en el Musée d’Orsay de París."
    ],
    "fact": "1896–1898. Musée d’Orsay, París."
  },
  "czgetty": {
    "text": [
      "Las manzanas reposan junto a un jarro y un paño; cada manzana tiene su propio peso, la mesa permanece como una superficie calma.",
      "Este bodegón data de 1893–1894. Pertenece al J. Paul Getty Museum de Los Angeles."
    ],
    "fact": "1893–1894. J. Paul Getty Museum, Los Angeles."
  },
  "czpeaches": {
    "text": [
      "Cuatro melocotones reposan en un plato; las frutas redondas y el plato sencillo están construidos con unos pocos tonos claros.",
      "Este pequeño bodegón data de hacia 1890–1894. Pertenece a la Barnes Foundation de Filadelfia."
    ],
    "fact": "hacia 1890–1894. Barnes Foundation, Filadelfia."
  },
  "czapplpeach": {
    "text": [
      "Manzanas y melocotones reposan ante un jarro y un paño; las formas son amplias, el color brilla con calma y densidad.",
      "Este bodegón data de hacia 1905, en los últimos años. Cuelga en la National Gallery of Art de Washington."
    ],
    "fact": "hacia 1905. National Gallery of Art, Washington."
  },
  "czgeffroy": {
    "text": [
      "El crítico se sienta a su escritorio, rodeado de libros; el espacio está construido de modo ceñido, la sesión es larga y queda inacabada.",
      "En 1895–1896 Cézanne retrata a Gustave Geffroy, que se ha pronunciado a favor de su pintura. El cuadro cuelga en el Musée d’Orsay de París."
    ],
    "fact": "1895–1896. Musée d’Orsay, París."
  },
  "czvollard": {
    "text": [
      "Vollard se sienta con la mirada baja, la cabeza calva, las manos en el regazo; la forma es pesada y calma, casi cerrada.",
      "En 1899 Cézanne pinta al marchante que en 1895 le dio su primera gran exposición individual. El cuadro cuelga en el Petit Palais de París."
    ],
    "fact": "1899. Petit Palais, París."
  },
  "czselfberet": {
    "text": [
      "Cézanne lleva una boina oscura; el rostro está modelado de modo ceñido, la mirada es firme, el fondo sencillo.",
      "Este autorretrato tardío data de 1898–1900. Cuelga en el Museum of Fine Arts de Boston."
    ],
    "fact": "1898–1900. Museum of Fine Arts, Boston."
  },
  "czitalian": {
    "text": [
      "Una joven se recuesta en la mesa, la cabeza apoyada en la mano; la tela del vestido y la postura calma sostienen el cuadro.",
      "Este retrato data de hacia 1895–1900. Pertenece al J. Paul Getty Museum de Los Angeles."
    ],
    "fact": "hacia 1895–1900. J. Paul Getty Museum, Los Angeles."
  },
  "czannecy": {
    "text": [
      "El lago yace quieto entre montañas; en primer término un árbol, enfrente un château como forma clara y construida.",
      "En 1896 Cézanne se aloja con la familia en Talloires, a orillas del lago de Annecy. El cuadro cuelga en la Courtauld Gallery de Londres."
    ],
    "fact": "1896. Courtauld Gallery, Londres."
  },
  "czbibquarry": {
    "text": [
      "Paredes de roca ocre se alzan detrás de pinos y matorrales; los bordes de la cantera están puestos en el paisaje como planos construidos.",
      "En 1895 Cézanne pinta en la cantera de Bibémus, al este de Aix, donde alquila una cabaña. El cuadro pertenece a la Barnes Foundation."
    ],
    "fact": "1895. Barnes Foundation, Filadelfia."
  },
  "czbibbarnes": {
    "text": [
      "Rocas, árboles y la piedra rojiza de la cantera se entrelazan; la luz y la sombra dividen los planos con claridad.",
      "Esta versión data de 1894–1895. También pertenece a la Barnes Foundation de Filadelfia."
    ],
    "fact": "1894–1895. Barnes Foundation, Filadelfia."
  },
  "czbibsv": {
    "text": [
      "Desde la cantera el monte aparece sobre rocas y pinos; los bordes ocre conducen la mirada hacia la silueta lejana.",
      "Hacia 1897 Cézanne une la cantera de Bibémus con la Sainte-Victoire. El cuadro cuelga en el Baltimore Museum of Art."
    ],
    "fact": "hacia 1897. Baltimore Museum of Art."
  },
  "czbibfolk": {
    "text": [
      "Altas paredes de roca amarillenta se abren como un interior; arriba, el verdor de los árboles cierra la vista.",
      "Esta vista de la cantera data de hacia 1895. En estos años Cézanne vuelve una y otra vez a Bibémus."
    ],
    "fact": "hacia 1895. Colección no determinada."
  },
  "czbibnelson": {
    "text": [
      "Las paredes de roca se alzan empinadas y claras; los árboles enmarcan el borde superior, la piedra misma se convierte en motivo.",
      "Esta versión data de 1898–1900. Cuelga en el Nelson-Atkins Museum of Art de Kansas City."
    ],
    "fact": "1898–1900. Nelson-Atkins Museum of Art, Kansas City."
  },
  "czbibrocks": {
    "text": [
      "Las ramas se tienden sobre las rocas; piedra y follaje se encajan en manchas de color cortas y densas.",
      "En 1900–1904, en una versión tardía, Bibémus sigue siendo un lugar de trabajo. El cuadro cuelga en el Petit Palais de París."
    ],
    "fact": "1900–1904. Petit Palais, París."
  },
  "czcnnga": {
    "text": [
      "La casa se alza entre árboles, la fachada cálida y firme, el follaje dispuesto de modo denso a su alrededor.",
      "En 1900–1904 Cézanne pinta el Château Noir, al este de Aix, en la carretera hacia Le Tholonet. El cuadro cuelga en la National Gallery of Art de Washington."
    ],
    "fact": "1900–1904. National Gallery of Art, Washington."
  },
  "czcnmaria": {
    "text": [
      "En primer término se alza una casa sencilla; detrás aparece el Château Noir entre árboles; el camino se adentra en la profundidad.",
      "Esta vista data de hacia 1895. El cuadro cuelga en el Kimbell Art Museum de Fort Worth."
    ],
    "fact": "hacia 1895. Kimbell Art Museum, Fort Worth."
  },
  "czcnmill": {
    "text": [
      "Una muela antigua yace entre rocas y troncos; la luz cae en el parque, las formas son pesadas y calmas.",
      "En 1898–1900 Cézanne pinta en el parque del Château Noir. El cuadro cuelga en el Philadelphia Museum of Art."
    ],
    "fact": "1898–1900. Philadelphia Museum of Art."
  },
  "czcnsv": {
    "text": [
      "El Château Noir queda en el término medio; encima se eleva la Sainte-Victoire; casa y monte se encajan en el mismo orden construido.",
      "El cuadro está fechado en 1904. Cuelga en el Artizon Museum de Tokio."
    ],
    "fact": "1904. Artizon Museum, Tokio."
  },
  "czcncistern": {
    "text": [
      "Entre troncos y rocas yace la cisterna; la oscuridad del parque y la cantería clara se equilibran.",
      "Esta vista del parque data de hacia 1900. El cuadro pertenece al Princeton University Art Museum."
    ],
    "fact": "hacia 1900. Princeton University Art Museum."
  },
  "czcnview": {
    "text": [
      "La casa aparece entre árboles, sobre la loma; la fachada es clara, el entorno denso y verde.",
      "Hacia 1887–1890, en una versión temprana, Cézanne fija el Château Noir. Volverá a este lugar a lo largo de muchos años."
    ],
    "fact": "hacia 1887–1890. Colección no determinada."
  },
  "czsvnoir": {
    "text": [
      "El Château Noir queda ante la llanura; encima se alza la Sainte-Victoire; ambas formas están puestas con parquedad y firmeza.",
      "Hacia 1890–1895 Cézanne une la casa con el monte. El punto de vista sigue siendo el campo al este de Aix."
    ],
    "fact": "hacia 1890–1895. Colección no determinada."
  },
  "czforestpath": {
    "text": [
      "Un camino atraviesa el bosque, los troncos juntos, la luz en manchas sobre el suelo.",
      "Este sendero del bosque, del Mas Jolie al Château Noir, data de 1900–1902. El cuadro pertenece a la Fondation Beyeler de Riehen."
    ],
    "fact": "1900–1902. Fondation Beyeler, Riehen."
  },
  "czlvmet": {
    "text": [
      "El monte se alza en amplios planos de color luminosos; la llanura de delante está trabada en pinceladas cortas y densas.",
      "En 1902–1906 Cézanne pinta la Sainte-Victoire desde las alturas de Les Lauves, al norte de Aix. El cuadro cuelga en el Metropolitan Museum of Art de Nueva York."
    ],
    "fact": "1902–1906. Metropolitan Museum of Art, Nueva York.",
    "quote": {
      "text": "Permítanme repetir lo que les decía aquí: traten la naturaleza por el cilindro, la esfera, el cono, todo puesto en perspectiva, de modo que cada lado de un objeto, de un plano, se dirija hacia un punto central.",
      "cite": "Carta a Émile Bernard, Aix-en-Provence, 15 de abril de 1904."
    }
  },
  "czlvsv": {
    "text": [
      "Desde Les Lauves el monte queda abierto sobre la llanura; cielo y ladera se funden en bandas amplias, frías y cálidas.",
      "Esta vista tardía data de hacia 1904–1906. Cuelga en el Museo Pushkin de Moscú."
    ],
    "fact": "hacia 1904–1906. Museo Pushkin, Moscú."
  },
  "czlvgarden": {
    "text": [
      "En el jardín, árboles y arbustos se alzan en manchas de color abiertas y luminosas; el espacio permanece aireado y no del todo cerrado.",
      "Hacia 1906, en uno de los últimos años, Cézanne pinta el jardín del estudio. El cuadro pertenece a la Phillips Collection de Washington."
    ],
    "fact": "hacia 1906. Phillips Collection, Washington.",
    "quote": {
      "text": "Por último te diré que, como pintor, me vuelvo más lúcido ante la naturaleza, pero que en mí la realización de mis sensaciones sigue siendo siempre muy penosa. No puedo alcanzar la intensidad que se despliega ante mis sentidos; no tengo esa magnífica riqueza de coloración que anima la naturaleza.",
      "cite": "Carta al hijo Paul, 8 de septiembre de 1906."
    }
  },
  "czlvbend": {
    "text": [
      "El camino se curva entre árboles y casas; la curva misma se convierte en una forma construida, la vista permanece ceñida.",
      "Esta vista, arriba en el Chemin des Lauves, data de 1904–1906. El cuadro pertenece a la Fondation Beyeler de Riehen."
    ],
    "fact": "1904–1906. Fondation Beyeler, Riehen."
  },
  "czlvterrace": {
    "text": [
      "La terraza se abre bajo los árboles; muro, follaje y el suelo claro están puestos en planos amplios y calmos.",
      "En 1902–1906 Cézanne pinta la terraza del nuevo estudio que se ha hecho construir al norte de Aix."
    ],
    "fact": "1902–1906. Colección no determinada."
  },
  "czcabanon": {
    "text": [
      "Una casa pequeña se alza bajo los árboles, los muros claros, el tejado firme, el follaje alrededor en manchas abiertas.",
      "En 1906, en su último año, Cézanne pinta el Cabanon de Jourdan, en el borde de Aix. El cuadro cuelga en la Galleria Nazionale d’Arte Moderna de Roma."
    ],
    "fact": "1906. Galleria Nazionale d’Arte Moderna, Roma."
  },
  "czvallier": {
    "text": [
      "Vallier se sienta al aire libre, la barba clara, la postura calma; la chaqueta y el pantalón están construidos en planos de color amplios y firmes.",
      "En 1906 Cézanne retrata una y otra vez a su jardinero Vallier, a menudo en la terraza del estudio de Les Lauves. El cuadro cuelga en la National Gallery of Art de Washington."
    ],
    "fact": "1906. National Gallery of Art, Washington.",
    "quote": {
      "text": "Les debo la verdad en la pintura, y se la diré.",
      "cite": "Carta a Émile Bernard, Aix, 23 de octubre de 1905."
    }
  },
  "czvallierbu": {
    "text": [
      "El hombre mayor se sienta con los brazos cruzados, la mirada baja, la forma del cuerpo pesada y quieta.",
      "Esta versión de 1906 muestra también a Vallier. Pertenece a la colección E. G. Bührle y cuelga en el Kunsthaus Zürich."
    ],
    "fact": "1906. Colección E. G. Bührle, Kunsthaus Zürich."
  },
  "czpaysan": {
    "text": [
      "Un campesino se sienta ante un fondo sencillo, las manos en reposo, el rostro modelado de modo ceñido y firme.",
      "Este retrato tardío data de 1905–1906. Cuelga en el Museo Thyssen-Bornemisza de Madrid."
    ],
    "fact": "1905–1906. Museo Thyssen-Bornemisza, Madrid."
  },
  "czwomanblue": {
    "text": [
      "Una mujer se sienta con un vestido azul, las manos en el regazo, el cuerpo como una forma calma y cerrada.",
      "Este retrato data de 1902–1904. Pertenece a la Phillips Collection de Washington."
    ],
    "fact": "1902–1904. Phillips Collection, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
