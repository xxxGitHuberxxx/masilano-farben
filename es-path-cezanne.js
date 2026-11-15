// v8.6 Spanish content for Paul Cézanne’s life journey, Part 1 (1839–1886).
// Faithful translation of the existing DE/EN. No new facts.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Colección no determinada",
  "Privatbesitz": "Colección privada",
  "Saint Louis Art Museum": "Saint Louis Art Museum",
  "National Gallery, London": "National Gallery, Londres",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "Norton Simon Museum, Pasadena": "Norton Simon Museum, Pasadena",
  "Barnes Foundation, Philadelphia": "Barnes Foundation, Filadelfia",
  "Musée d’Orsay, Paris": "Musée d’Orsay, París",
  "Eremitage, Sankt Petersburg": "Ermitage, San Petersburgo",
  "Harvard Art Museums, Cambridge": "Harvard Art Museums, Cambridge",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Brooklyn Museum, New York": "Brooklyn Museum, Nueva York",
  "Dallas Museum of Art": "Dallas Museum of Art",
  "Detroit Institute of Arts": "Detroit Institute of Arts",
  "Cincinnati Art Museum": "Cincinnati Art Museum",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Columbus Museum of Art": "Columbus Museum of Art",
  "Israel Museum, Jerusalem": "Israel Museum, Jerusalén",
  "National Museum of Western Art, Tokyo": "National Museum of Western Art, Tokio"
});
  P.works = Object.assign(P.works || {}, {
  "czmother": {
    "title": "Retrato de la madre del artista",
    "museum": "Saint Louis Art Museum"
  },
  "czfather65": {
    "title": "Louis-Auguste Cézanne, el padre del artista",
    "museum": "National Gallery, Londres"
  },
  "czvalab66": {
    "title": "Antony Valabrègue",
    "museum": "National Gallery of Art, Washington"
  },
  "czhousejas": {
    "title": "La casa del Jas de Bouffan",
    "museum": "Colección no determinada"
  },
  "czbread": {
    "title": "Pan y huevos",
    "museum": "Cincinnati Art Museum"
  },
  "czsugar": {
    "title": "Azucarero, peras y taza azul",
    "museum": "Musée d’Orsay, París"
  },
  "czgigot": {
    "title": "Pan y pierna de cordero",
    "museum": "Kunsthaus Zürich"
  },
  "czfather66": {
    "title": "El padre del artista, leyendo «L’Événement»",
    "museum": "National Gallery of Art, Washington"
  },
  "czunclemonk": {
    "title": "El tío Dominique disfrazado de monje",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "czunclelaw": {
    "title": "El tío Dominique disfrazado de abogado",
    "museum": "Colección no determinada"
  },
  "czuncledom": {
    "title": "El tío Dominique",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "czclock": {
    "title": "El reloj de mármol negro",
    "museum": "Colección privada"
  },
  "czemperaire": {
    "title": "Achille Emperaire",
    "museum": "Musée d’Orsay, París"
  },
  "czsnowest": {
    "title": "Nieve en L’Estaque",
    "museum": "Colección no determinada"
  },
  "cztrench": {
    "title": "El desmonte ferroviario",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "czvillageest": {
    "title": "El pueblo de pescadores en L’Estaque",
    "museum": "Philadelphia Museum of Art"
  },
  "czhortense72": {
    "title": "Retrato de Madame Cézanne",
    "museum": "Colección no determinada"
  },
  "czself72": {
    "title": "Autorretrato con gorra",
    "museum": "Ermitage, San Petersburgo"
  },
  "czlouvec": {
    "title": "Vista de Louveciennes, según Pissarro",
    "museum": "Musée d’Orsay, París"
  },
  "czpendu": {
    "title": "La casa del ahorcado",
    "museum": "Musée d’Orsay, París"
  },
  "czlacroix": {
    "title": "La casa del Père Lacroix",
    "museum": "National Gallery of Art, Washington"
  },
  "czquartier": {
    "title": "Barrio Four en Auvers-sur-Oise",
    "museum": "Philadelphia Museum of Art"
  },
  "czsmallpontoise": {
    "title": "Casas pequeñas en Pontoise",
    "museum": "Harvard Art Museums, Cambridge"
  },
  "czauversview": {
    "title": "Vista de Auvers-sur-Oise",
    "museum": "Colección no determinada"
  },
  "czmadamered": {
    "title": "Madame Cézanne en el sillón rojo",
    "museum": "Museum of Fine Arts, Boston"
  },
  "czchocquet": {
    "title": "Retrato de Victor Chocquet",
    "museum": "Columbus Museum of Art"
  },
  "czcotesaint": {
    "title": "La Côte Saint-Denis en Pontoise",
    "museum": "Colección no determinada"
  },
  "czjardinmau": {
    "title": "El jardín de Maubuisson, Pontoise",
    "museum": "Colección no determinada"
  },
  "czhermitage": {
    "title": "La Maison Rondest en el barrio del Hermitage, Pontoise",
    "museum": "Colección no determinada"
  },
  "czstill77": {
    "title": "Frutero y plato de galletas",
    "museum": "Colección no determinada"
  },
  "cztoitsrouges": {
    "title": "L’Estaque con tejados rojos",
    "museum": "Colección no determinada"
  },
  "czbay85": {
    "title": "La bahía de Marsella, vista desde L’Estaque",
    "museum": "Art Institute of Chicago"
  },
  "czriaux": {
    "title": "Casas en Provenza: el valle de los Riaux cerca de L’Estaque",
    "museum": "National Gallery of Art, Washington"
  },
  "czchateauif": {
    "title": "L’Estaque y el Château d’If",
    "museum": "Colección no determinada"
  },
  "czmorningest": {
    "title": "Vista matinal de L’Estaque a contraluz",
    "museum": "Israel Museum, Jerusalén"
  },
  "czpins": {
    "title": "L’Estaque, vista a través de los pinos",
    "museum": "Colección no determinada"
  },
  "czcliffs": {
    "title": "Vista de L’Estaque",
    "museum": "Colección no determinada"
  },
  "czallee": {
    "title": "La avenida del Jas de Bouffan",
    "museum": "Colección no determinada"
  },
  "czpool": {
    "title": "El estanque del Jas de Bouffan",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "czchestnut": {
    "title": "Avenida de castaños en el Jas de Bouffan",
    "museum": "Colección no determinada"
  },
  "czbaretrees": {
    "title": "Los árboles desnudos del Jas de Bouffan",
    "museum": "National Museum of Western Art, Tokio"
  },
  "czfarmjas": {
    "title": "Castaños y granja en el Jas de Bouffan",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "czvuejas": {
    "title": "Vista desde el Jas de Bouffan",
    "museum": "Colección no determinada"
  },
  "czmaincy": {
    "title": "El puente de Maincy",
    "museum": "Musée d’Orsay, París"
  },
  "czmedan": {
    "title": "Las orillas del Sena en Médan",
    "museum": "National Gallery of Art, Washington"
  },
  "czgardanne": {
    "title": "El pueblo de Gardanne",
    "museum": "Brooklyn Museum, Nueva York"
  },
  "czabandoned": {
    "title": "Casa abandonada cerca de Aix-en-Provence",
    "museum": "Dallas Museum of Art"
  },
  "czmadame86": {
    "title": "Retrato de Madame Cézanne",
    "museum": "Detroit Institute of Arts"
  },
  "czself80": {
    "title": "Autorretrato",
    "museum": "Colección no determinada"
  },
  "czwinterchest": {
    "title": "Los castaños del Jas de Bouffan en invierno",
    "museum": "Colección no determinada"
  }
});
  P.paths = P.paths || {};
  P.paths.cezanne = {
  "title": "El camino de vida de Paul Cézanne",
  "life": "1839–1906",
  "part": "Parte 1 · 1839–1886",
  "subtitle": "De Aix a París, hacia Pissarro y de vuelta a la Provenza",
  "intro": "Viaja con Paul Cézanne por la primera mitad de su camino: desde la infancia en Aix-en-Provence y la amistad con Émile Zola, pasando por los estudios de derecho, la Académie Suisse en París, el período oscuro «couillarde», el giro con Camille Pissarro en Pontoise y Auvers, las exposiciones de 1874 y 1877, L’Estaque, Hortense Fiquet y el hijo Paul, el Jas de Bouffan, hasta el año 1886 – la novela «L’Œuvre», el matrimonio y la muerte del padre. Estaciones breves y cuadros para pintar. Dejamos a un lado a los bañistas y las escenas violentas de juventud. Esta primera parte llega hasta 1886.",
  "ending": [
    "En 1886 Cézanne se casa con Hortense Fiquet en Aix, el hijo Paul queda legitimado y el padre muere en octubre. El agradecimiento por carta por la novela «L’Œuvre» de Zola es breve y formal; el contacto se hace después más raro.",
    "El camino sigue. Vienen la montaña Sainte-Victoire, los jugadores de cartas, las manzanas y los bodegones, la exposición en casa de Ambroise Vollard en 1895, el estudio de Les Lauves y la muerte de Cézanne en Aix el 22 de octubre de 1906. De eso habla la parte siguiente."
  ],
  "epilogue": "Esta primera parte termina en 1886: con el matrimonio en Aix, la muerte del padre y un contacto con Zola que se hace más raro después de «L’Œuvre». La montaña Sainte-Victoire, los jugadores de cartas, las manzanas, Vollard en 1895, Les Lauves y la muerte el 22 de octubre de 1906 pertenecen a la parte siguiente."
};
  P.stations = Object.assign(P.stations || {}, {
  "cezanneaix": {
    "place": "Aix-en-Provence · Infancia y amigos",
    "when": "1839–1858",
    "mapLabel": "Aix",
    "intro": [
      "Paul Cézanne nace el 19 de enero de 1839 en Aix-en-Provence. El padre, Louis-Auguste, primero sombrerero, dirige después un banco; la madre, Anne-Elisabeth Honorine Aubert, lleva la casa.",
      "En el Collège Bourbon se hace amigo de Émile Zola y de Baptistin Baille: a los tres se les llama los «inseparables». Recorren el campo en torno a Aix. En 1858 Zola se marcha a París; la amistad sigue viva en las cartas.",
      "Los retratos de los padres y del amigo Valabrègue, y la vista de la casa, se pintan en parte más tarde. Aun así pertenecen a este comienzo: a la familia, al círculo de Aix y a la finca que el padre compra en 1859."
    ]
  },
  "cezannelaw": {
    "place": "Aix y París · Derecho y Académie Suisse",
    "when": "1858–1865",
    "mapLabel": "París",
    "intro": [
      "De 1858 a 1861 Cézanne estudia derecho en Aix, siguiendo el deseo del padre. Zola escribe desde París y le apremia a ir y a pintar.",
      "En 1861 viaja por primera vez a París, dibuja en la Académie Suisse y conoce a Camille Pissarro. Vuelve a Aix, trabaja un tiempo breve en el banco del padre y en noviembre de 1862 regresa a París.",
      "A mediados de la década de 1860 aparecen bodegones oscuros y bien construidos: pan y huevos, el azucarero, la pierna de cordero. El Salón rechaza sus envíos."
    ]
  },
  "cezannecouillarde": {
    "place": "Aix y París · Los años «couillarde»",
    "when": "1866–1869",
    "mapLabel": "1866",
    "intro": [
      "En la segunda mitad de la década de 1860 Cézanne pinta con la espátula, en capas espesas y oscuras. Él y sus amigos llaman «couillarde» a esta manera tosca y empastada.",
      "En 1866 pinta el gran retrato del padre leyendo «L’Événement», el periódico de las crónicas de Salón de Zola. El mismo año pinta al tío Dominique, hermano de la madre, en rápida sucesión y en distintos papeles.",
      "Se añaden el retrato del pintor de Aix Achille Emperaire, rechazado por el Salón, y hacia el final de la década el reloj de mármol negro."
    ]
  },
  "cezannehortense": {
    "place": "París y L’Estaque · Hortense y la guerra",
    "when": "1869–1872",
    "mapLabel": "1870",
    "intro": [
      "Hacia 1869, en París, Cézanne conoce a Hortense Fiquet, que le sirve de modelo. La relación permanece largo tiempo oculta a la familia de Aix.",
      "Durante la guerra franco-prusiana de 1870–1871 se queda con Hortense en L’Estaque, al oeste de Marsella. No se presenta al servicio militar. De esta época son vistas de nieve, tejados y el pueblo de pescadores.",
      "El 4 de enero de 1872 nace en París el hijo Paul. El cuadro del desmonte ferroviario de 1867, cerca del Jas de Bouffan, pertenece al paisaje de Aix y aparece aquí como una vista provenzal anterior a la costa."
    ]
  },
  "cezanneauvers": {
    "place": "Pontoise y Auvers · Con Pissarro",
    "when": "1872–1874",
    "mapLabel": "Auvers",
    "intro": [
      "De 1872 a 1874 Cézanne trabaja a menudo junto a Camille Pissarro en Pontoise y vive en Auvers-sur-Oise. Bajo esta influencia la paleta se aclara, la pincelada se hace más pequeña y el trabajo ante el motivo resulta más natural.",
      "Pinta un autorretrato con gorra, una vista de Louveciennes según Pissarro y casas de Auvers y Pontoise. «La casa del ahorcado» de 1873 –una casa sobre un camino, no una escena de violencia– se expone en París en 1874.",
      "Estos años se consideran un giro hacia el paisaje impresionista, aunque las formas de Cézanne siguen siendo firmes y construidas."
    ]
  },
  "cezannesalon": {
    "place": "París · Las exposiciones de 1874 y 1877",
    "when": "1874–1877",
    "mapLabel": "1874",
    "intro": [
      "En abril de 1874 Cézanne participa en la primera exposición impresionista, en el estudio de Nadar del bulevar de los Capuchinos. Entre las obras mostradas están «La casa del ahorcado» y un paisaje; una tercera, «Une moderne Olympia», solo la mencionamos, sin mostrarla. La crítica es a menudo dura.",
      "En 1877, en la tercera exposición impresionista, está representado con dieciséis obras. Victor Chocquet, un coleccionista temprano, lo apoya; Cézanne lo retrata ese año.",
      "Junto a los retratos de Hortense y de Chocquet hay paisajes de Pontoise y un bodegón: los tres campos que lo siguen acompañando."
    ]
  },
  "cezanneestaque": {
    "place": "L’Estaque · Tejados rojos y la bahía",
    "when": "1876–1885",
    "mapLabel": "L’Estaque",
    "intro": [
      "En el verano de 1876 Cézanne trabaja de nuevo en L’Estaque. El 2 de julio escribe a Pissarro sobre unos pequeños motivos para el señor Chocquet: es como una carta de la baraja, tejados rojos sobre el mar azul.",
      "A principios de la década de 1880 vuelve a la costa. Surgen vistas de la bahía de Marsella, el valle de los Riaux, el Château d’If, la mañana a contraluz y el pueblo a través de los pinos.",
      "La costa del sur se convierte para él en un lugar donde casas, rocas y mar se encajan como planos claros."
    ]
  },
  "cezannejas": {
    "place": "Jas de Bouffan · La finca",
    "when": "1859–1885",
    "mapLabel": "Jas",
    "intro": [
      "El padre compra el Jas de Bouffan en 1859. Durante décadas Cézanne pinta allí la avenida, los castaños, la granja, la vista desde la casa y el estanque del parque.",
      "Los cuadros de esta estación proceden de varios años, desde finales de la década de 1860 hasta el umbral de la de 1880. El estanque del parque pertenece a finales de la década de 1880; lo datamos abiertamente.",
      "El puente de Maincy, hacia 1882–1883, está cerca de Melun, en la Île-de-France, no en el Jas. Figura aquí porque nace en los mismos años en que Cézanne también trabaja en la finca."
    ]
  },
  "cezanne1886": {
    "place": "Médan, Gardanne y Aix · 1886",
    "when": "1879–1886",
    "mapLabel": "Gardanne",
    "intro": [
      "Entre 1880 y 1885 Cézanne pinta las orillas del Sena en Médan, donde Zola posee una casa. En 1885–1886 vive con Hortense y el hijo en Gardanne, no lejos de Aix.",
      "El 4 de abril de 1886 agradece a Zola, desde Gardanne, de forma breve y formal el envío de la novela «L’Œuvre». Los contemporáneos han leído parecidos con Cézanne en la figura del pintor Claude Lantier. La carta es cordial; no queda con ello demostrado un rompimiento completo. Después el contacto se hace más raro.",
      "El 28 de abril de 1886 se casa con Hortense en Aix; el hijo Paul queda legitimado. El 23 de octubre de 1886 muere Louis-Auguste. Con la herencia Cézanne gana independencia. Esta primera parte termina en ese año."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "czmother": {
    "text": [
      "Anne-Elisabeth Honorine Aubert, la madre, está sentada en calma, vestida de oscuro, el rostro claro sobre el fondo pardo.",
      "El cuadro se pinta en 1866–1867, más tarde que los años de infancia. Retrata a la mujer que lleva la casa en Aix mientras el padre dirige el banco."
    ],
    "fact": "1866–1867. Saint Louis Art Museum."
  },
  "czfather65": {
    "text": [
      "Louis-Auguste está sentado con la gorra, las piernas cruzadas, como si descansara en el salón. El cuadro es primero un mural en el salón del Jas de Bouffan y más tarde se transfiere a lienzo.",
      "El padre, primero sombrerero y después banquero en Aix, desea que el hijo sea jurista. Hacia 1865 Cézanne lo pinta de todos modos, y en la propia casa familiar."
    ],
    "fact": "hacia 1865. National Gallery, Londres."
  },
  "czvalab66": {
    "text": [
      "El poeta Antony Valabrègue, un amigo de Aix, está pintado de frente y con la espátula: capas oscuras y espesas, un rostro serio.",
      "En 1866 el cuadro pertenece ya a la manera temprana y tosca. Valabrègue forma parte del círculo de Cézanne y Zola."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "czhousejas": {
    "text": [
      "La casa de campo se alza clara entre los árboles, el cielo es amplio. En 1859 Louis-Auguste compra el Jas de Bouffan, a las afueras de Aix; la familia vive y recibe allí.",
      "El cuadro mismo se pinta solo hacia 1874. Muestra el lugar de la infancia y del trabajo posterior, no en el año de la compra, sino en la manera más clara de la década de 1870."
    ],
    "fact": "hacia 1874. Colección no determinada."
  },
  "czbread": {
    "text": [
      "Un pan, huevos blancos, un cuchillo y un jarro oscuro están juntos sobre la tabla. Los colores son terrosos, las sombras pesadas.",
      "En 1865, en los años del derecho y de las primeras estancias en París, Cézanne practica el bodegón en esta manera oscura y firmemente construida."
    ],
    "fact": "1865. Cincinnati Art Museum."
  },
  "czsugar": {
    "text": [
      "Un azucarero, peras y una taza azul forman un grupo pequeño y cerrado. Ya aquí busca el volumen y la yuxtaposición de formas claras.",
      "El cuadro data de hacia 1865. Junto a los retratos, el bodegón es desde el principio un campo propio para Cézanne."
    ],
    "fact": "hacia 1865. Musée d’Orsay, París."
  },
  "czgigot": {
    "text": [
      "La pierna de cordero y el pan reposan pesados sobre el paño. El color está aplicado espeso, casi modelado con la espátula.",
      "En 1866 el bodegón pertenece al mismo período temprano y tosco que los retratos del padre y del tío. Hoy cuelga en el Kunsthaus Zürich."
    ],
    "fact": "1866. Kunsthaus Zürich."
  },
  "czfather66": {
    "text": [
      "Louis-Auguste está sentado en un sillón y lee «L’Événement», el periódico en el que Émile Zola publicó en 1866 sus crónicas de Salón. Sobre el padre cuelga un bodegón temprano del hijo.",
      "El gran cuadro de 1866 es una declaración en la casa paterna: el banquero aparece leyendo el periódico del amigo que defiende la nueva pintura."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "czunclemonk": {
    "text": [
      "Antoine Dominique Sauveur Aubert, hermano de la madre, lleva aquí un hábito blanco y un gorro oscuro. El rostro está planteado en pocos planos enérgicos de espátula.",
      "En 1866 Cézanne pinta al tío en rápida sucesión y en distintos papeles. La serie pertenece al núcleo del llamado período «couillarde»."
    ],
    "fact": "1866. Metropolitan Museum of Art, Nueva York."
  },
  "czunclelaw": {
    "text": [
      "El mismo tío está sentado con la toga oscura de abogado, una mano alzada. También este cuadro de 1866 está pintado con la espátula, tosco y firme.",
      "El disfraz de abogado alude, querida o no, a la profesión que el padre había destinado al hijo."
    ],
    "fact": "1866. Colección no determinada."
  },
  "czuncledom": {
    "text": [
      "Otro retrato del tío: la cabeza y los hombros llenan la superficie, el color está dispuesto en bandas espesas, una junto a otra.",
      "Hacia 1866 nace en poco tiempo toda una serie de retratos así. Muestran cómo Cézanne entiende el rostro como una construcción de planos de color."
    ],
    "fact": "hacia 1866. Norton Simon Museum, Pasadena."
  },
  "czclock": {
    "text": [
      "Un reloj de chimenea negro, sin manecillas, está entre una concha, un jarro y frutas. Los objetos son pesados, claramente delimitados y casi solemnemente dispuestos.",
      "El bodegón se pinta entre 1869 y 1871, en el paso del período temprano oscuro a los años con Hortense."
    ],
    "fact": "1869–1871. Colección privada."
  },
  "czemperaire": {
    "text": [
      "Achille Emperaire, un amigo pintor de Aix, está sentado en un sillón, de estatura pequeña, pero el formato del cuadro es inusualmente alto. La aplicación de la pintura sigue siendo empastada y oscura.",
      "El cuadro de 1867–1868 es rechazado por el Salón. Emperaire sigue siendo un compañero de la ciudad natal."
    ],
    "fact": "1867–1868. Musée d’Orsay, París."
  },
  "czsnowest": {
    "text": [
      "Tejados rojos se alzan sobre una ladera aún invernal, la nieve se funde, el mar y la lejanía son fríos. L’Estaque está en la costa, al oeste de Marsella.",
      "Hacia 1870, durante la guerra franco-prusiana, Cézanne se queda con Hortense Fiquet en L’Estaque. El motivo de los tejados rojos sobre el agua lo ocupará también más adelante."
    ],
    "fact": "hacia 1870. Colección no determinada."
  },
  "cztrench": {
    "text": [
      "Un desmonte de la vía abre la colina; encima, una casa y el cielo de Aix. El cuadro se pinta en 1867, antes de la estancia de guerra en L’Estaque.",
      "La trinchera está cerca del Jas de Bouffan. Ya aquí Cézanne busca el paisaje como forma construida, no como mera imagen de ambiente."
    ],
    "fact": "1867. Barnes Foundation, Filadelfia."
  },
  "czvillageest": {
    "text": [
      "Las casas del pueblo de pescadores descienden en gradas por la ladera hacia el agua. La paleta sigue siendo terrosa, las formas están firmemente sentadas.",
      "En 1870 Cézanne pinta L’Estaque mientras en Francia continúa la guerra. No se presenta al servicio militar; permanece en la Provenza."
    ],
    "fact": "1870. Philadelphia Museum of Art."
  },
  "czhortense72": {
    "text": [
      "Hortense Fiquet, conocida en París hacia 1869, está sentada de tres cuartos. El cuadro data de 1872, el año en que el 4 de enero nace en París el hijo Paul.",
      "La relación permanece largo tiempo oculta a la familia de Aix. Hortense posará para Cézanne durante décadas."
    ],
    "fact": "1872. Colección no determinada."
  },
  "czself72": {
    "text": [
      "Cézanne lleva una gorra, la mirada se desvía hacia un lado, fuera del cuadro. El rostro está construido en tonos más fríos y claros que en los retratos oscuros de la década de 1860.",
      "Hacia 1872, al comienzo de los años en Pontoise y Auvers, se retrata a sí mismo. La paleta empieza a abrirse bajo el influjo del trabajo al aire libre."
    ],
    "fact": "hacia 1872. Ermitage, San Petersburgo."
  },
  "czlouvec": {
    "text": [
      "Un camino se adentra en la profundidad, casas y árboles desnudos a ambos lados: una vista que Cézanne pinta a partir de un cuadro de Camille Pissarro.",
      "En 1872 trabaja junto a Pissarro. Pintar a partir del amigo mayor no es una mera copia: en el motivo de otro aprende el paisaje más claro y articulado."
    ],
    "fact": "1872. Musée d’Orsay, París."
  },
  "czpendu": {
    "text": [
      "Una casa de Auvers-sur-Oise se alza sobre un camino que sube; el título tradicional la llama «casa del ahorcado», pero nombra el edificio, no una escena de violencia.",
      "El cuadro de 1873 se muestra en 1874 en la primera exposición impresionista de París. Es una de las obras con las que Cézanne aparece allí, junto a un paisaje. Una tercera, «Une moderne Olympia», no la mostramos aquí."
    ],
    "fact": "1873. Musée d’Orsay, París."
  },
  "czlacroix": {
    "text": [
      "La casa del Père Lacroix en Auvers está construida con firmeza y claridad, los muros en un blanco roto, el tejado rojo, los árboles como verticales oscuras.",
      "En 1873 Cézanne pinta en Auvers-sur-Oise, a menudo cerca de Pissarro. Las casas se convierten en formas claras y escalonadas."
    ],
    "fact": "1873. National Gallery of Art, Washington."
  },
  "czquartier": {
    "text": [
      "En el barrio Four, huertos, muros y tejados suben la ladera. La luz es más suave que en los cuadros tempranos de Aix.",
      "Hacia 1873 esta vista pertenece a los años de Auvers, en los que Cézanne observa ante el motivo el paisaje de la Île-de-France."
    ],
    "fact": "hacia 1873. Philadelphia Museum of Art."
  },
  "czsmallpontoise": {
    "text": [
      "Casas pequeñas se alzan en la ladera de Pontoise, los tejados como planos simples e inclinados, la vegetación entre ellas.",
      "En 1873 Cézanne trabaja reiteradamente en Pontoise, donde entonces vive Pissarro. El trabajo conjunto al aire libre marca estos años."
    ],
    "fact": "1873. Harvard Art Museums, Cambridge."
  },
  "czauversview": {
    "text": [
      "Desde un punto elevado, Auvers se extiende a lo lejos: campos, grupos de árboles, las casas del pueblo bajo un cielo claro.",
      "El cuadro se pinta en 1873–1875, al final de los años compartidos con Pissarro. La vista amplia resume lo que Cézanne había buscado en Auvers."
    ],
    "fact": "1873–1875. Colección no determinada."
  },
  "czmadamered": {
    "text": [
      "Hortense está sentada en un sillón rojo, el vestido a rayas azules y verdes, las manos en el regazo. Los colores se recortan con claridad unos de otros, el sillón es un cuerpo luminoso propio.",
      "Hacia 1877, el año de la tercera exposición impresionista, este retrato es un contrapunto sereno a los paisajes de Pontoise."
    ],
    "fact": "hacia 1877. Museum of Fine Arts, Boston."
  },
  "czchocquet": {
    "text": [
      "Victor Chocquet, un coleccionista y protector temprano, está sentado en el sillón, las manos en los brazos, la mirada atenta. Cézanne lo pinta varias veces en 1877.",
      "Chocquet apoya a Cézanne y a los impresionistas. Ya en 1876 Cézanne había empezado motivos para él en L’Estaque."
    ],
    "fact": "1877. Columbus Museum of Art."
  },
  "czcotesaint": {
    "text": [
      "La Côte Saint-Denis sube en Pontoise; casas, huertos y el camino están construidos en pinceladas cortas, unas junto a otras.",
      "En 1877 Cézanne muestra dieciséis obras en la tercera exposición impresionista de París. Los paisajes de Pontoise pertenecen a este contexto."
    ],
    "fact": "1877. Colección no determinada."
  },
  "czjardinmau": {
    "text": [
      "En el jardín de Maubuisson hay árboles y un muro; la luz cae a través del follaje sobre caminos y cuadros de cultivo.",
      "Este motivo de 1877 pertenece también a los años de Pontoise, en los que Cézanne registra el paisaje estructurado de jardines y laderas de la Île-de-France."
    ],
    "fact": "1877. Colección no determinada."
  },
  "czhermitage": {
    "text": [
      "La Maison Rondest, en el barrio del Hermitage, se alza firme entre los árboles, la fachada clara, el tejado sereno contra el cielo.",
      "El cuadro está fechado en 1874, el año de la primera exposición impresionista. Pontoise y Auvers siguen siendo los lugares de trabajo septentrionales de Cézanne."
    ],
    "fact": "1874. Colección no determinada."
  },
  "czstill77": {
    "text": [
      "Un frutero, un plato de galletas y frutas están ordenados sobre la tabla en un grupo sereno. Cada forma está claramente delimitada, y también se tiene en cuenta el espacio entre ellas.",
      "1877 muestra que el bodegón sigue siendo un campo de igual rango junto al paisaje y al retrato."
    ],
    "fact": "1877. Colección no determinada."
  },
  "cztoitsrouges": {
    "text": [
      "Tejados rojos se alzan sobre el agua azul, las casas como planos simples, la bahía como una franja serena. El cuadro mismo data de 1883–1885.",
      "Ya el 2 de julio de 1876 Cézanne escribe a Pissarro desde L’Estaque sobre unos pequeños motivos para el señor Chocquet: es como una carta de la baraja, tejados rojos sobre el mar azul. Esta vista posterior pertenece a la misma familia de motivos."
    ],
    "fact": "1883–1885. Colección no determinada.",
    "quote": {
      "text": "He empezado dos pequeños motivos en los que aparece el mar, para el señor Chocquet, que me había hablado de ellos. – Es como una carta de la baraja. Tejados rojos sobre el mar azul.",
      "cite": "Carta a Camille Pissarro, 2 de julio de 1876, desde L’Estaque."
    }
  },
  "czbay85": {
    "text": [
      "Desde L’Estaque, la bahía de Marsella se extiende amplia y clara: delante, las casas y el verdor; después, el azul profundo del agua; en el horizonte, la orilla de enfrente.",
      "Hacia 1885 Cézanne lleva la costa del sur a un orden sereno y firmemente compuesto. El cuadro es una de sus vistas más conocidas de L’Estaque."
    ],
    "fact": "hacia 1885. Art Institute of Chicago."
  },
  "czriaux": {
    "text": [
      "En el valle de los Riaux, cubos de casas se alzan en un terreno desnudo y soleado. Los muros son ocre y rosa, las sombras cortas y azules.",
      "Hacia 1883 Cézanne pinta este motivo del interior, cerca de L’Estaque. La construcción en planos es aquí especialmente clara."
    ],
    "fact": "hacia 1883. National Gallery of Art, Washington."
  },
  "czchateauif": {
    "text": [
      "Detrás de los árboles y las casas de L’Estaque se abre el mar; a lo lejos está la isla con el Château d’If.",
      "En 1883–1885 Cézanne une el lugar en el que trabaja con la bahía amplia y el conocido castillo-prisión frente a Marsella."
    ],
    "fact": "1883–1885. Colección no determinada."
  },
  "czmorningest": {
    "text": [
      "A contraluz de la mañana, casas y árboles se alzan como siluetas más oscuras, el cielo y el agua claros. El sol viene de frente.",
      "En 1882–1883, en L’Estaque, Cézanne busca no solo la forma clara del mediodía, sino también el contraluz de la mañana."
    ],
    "fact": "1882–1883. Israel Museum, Jerusalén."
  },
  "czpins": {
    "text": [
      "Los troncos de los pinos dividen la vista; detrás quedan el pueblo, el agua y la lejanía. El primer término es una celosía de troncos y ramas.",
      "En 1882–1883 Cézanne enmarca la bahía a través de los árboles, en lugar de darla como una superficie panorámica abierta."
    ],
    "fact": "1882–1883. Colección no determinada."
  },
  "czcliffs": {
    "text": [
      "Rocas, casas y el mar se escalonan en capas serenas. La costa está firmemente construida, sin un difuminado suave.",
      "Esta vista de 1882–1883 pertenece a las estancias repetidas en L’Estaque, en las que Cézanne convierte el paisaje de la costa en una construcción."
    ],
    "fact": "1882–1883. Colección no determinada."
  },
  "czallee": {
    "text": [
      "Una avenida conduce hacia la casa, los troncos se alzan como verticales oscuras y repetidas a izquierda y derecha del camino.",
      "El cuadro data de hacia 1868, aún en el tiempo temprano de la finca que el padre compró en 1859. El Jas sigue siendo un lugar de trabajo durante décadas."
    ],
    "fact": "hacia 1868. Colección no determinada."
  },
  "czpool": {
    "text": [
      "El estanque del parque yace en calma, rodeado de árboles y un muro; el agua recoge el cielo y el follaje.",
      "El cuadro data de finales de la década de 1880, en el umbral del período de esta parte. Pertenece de todos modos al lugar en el que Cézanne trabaja desde la juventud."
    ],
    "fact": "finales de la década de 1880. Metropolitan Museum of Art, Nueva York."
  },
  "czchestnut": {
    "text": [
      "La avenida de castaños abre un pasillo fresco y verde; los troncos y el dosel de hojas dividen el espacio en franjas paralelas.",
      "En 1880 Cézanne pinta esta vista en la finca familiar. La repetición de los árboles da a la avenida un orden sereno."
    ],
    "fact": "1880. Colección no determinada."
  },
  "czbaretrees": {
    "text": [
      "Troncos desnudos se alzan ante la casa y el cielo; sin hojas, la construcción de líneas y planos se hace especialmente visible.",
      "En la década de 1880 el parque del Jas sigue siendo un motivo cercano, en verano como en su estado invernal."
    ],
    "fact": "década de 1880. National Museum of Western Art, Tokio."
  },
  "czfarmjas": {
    "text": [
      "Los castaños se alzan ante una granja en los terrenos del Jas; edificios, árboles y el suelo se unen en tonos terrosos y serenos.",
      "Hacia 1878 Cézanne no trabaja solo en la casa principal, sino también en las construcciones de labor y los árboles de la finca."
    ],
    "fact": "hacia 1878. Norton Simon Museum, Pasadena."
  },
  "czvuejas": {
    "text": [
      "Desde la finca se abre el paisaje de Aix: árboles en primer término, después el campo abierto bajo un cielo claro.",
      "Hacia 1875–1876, después de los años en Auvers, Cézanne pinta de nuevo la vista desde casa. La paleta más clara de los años del norte sigue siendo perceptible."
    ],
    "fact": "hacia 1875–1876. Colección no determinada."
  },
  "czmaincy": {
    "text": [
      "Un puente de piedra de arco sobre un curso de agua en sombra, árboles densos a izquierda y derecha: el motivo está en Maincy, cerca de Melun, no en el Jas de Bouffan.",
      "Hacia 1882–1883 Cézanne pinta este puente en la Île-de-France, en los mismos años en que también trabaja en el Jas. El cuadro cuelga hoy en el Musée d’Orsay."
    ],
    "fact": "hacia 1882–1883. Musée d’Orsay, París."
  },
  "czmedan": {
    "text": [
      "El Sena en Médan fluye entre árboles y casas de la orilla; los planos de agua, follaje y edificación encajan con serenidad.",
      "En Médan, Émile Zola posee una casa. El cuadro data de entre 1880 y 1885, en los años en que la amistad de juventud aún se sostiene y Cézanne trabaja junto al Sena."
    ],
    "fact": "1880–1885. National Gallery of Art, Washington."
  },
  "czgardanne": {
    "text": [
      "Las casas de Gardanne suben la colina, arriba el campanario; algunas zonas del lienzo quedan claras e inacabadas.",
      "En 1885–1886 Cézanne vive con Hortense y el hijo Paul en Gardanne, no lejos de Aix. Desde aquí, el 4 de abril de 1886, escribe a Zola después de que este le haya enviado la novela «L’Œuvre»."
    ],
    "fact": "1885–1886. Brooklyn Museum, Nueva York.",
    "quote": {
      "text": "Querido Émile: acabo de recibir «L’Œuvre», que has tenido la amabilidad de enviarme. Agradezco al autor de los Rougon-Macquart este amable testimonio de recuerdo, y le pido que me permita estrecharle la mano pensando en los años pasados. Todo tuyo, bajo la impresión de los tiempos transcurridos.",
      "cite": "Carta a Émile Zola, 4 de abril de 1886, desde Gardanne."
    }
  },
  "czabandoned": {
    "text": [
      "Una casa abandonada se alza en el paisaje cerca de Aix, la fachada pálida, el entorno escaso y amplio.",
      "El cuadro de 1886 cae en el mismo año que el matrimonio con Hortense y la muerte del padre. Cézanne vuelve a trabajar en los alrededores de la ciudad natal."
    ],
    "fact": "1886. Dallas Museum of Art."
  },
  "czmadame86": {
    "text": [
      "Hortense está sentada erguida, el rostro sereno y cerrado, el fondo en tonos rotos. El cuadro data de 1886–1887.",
      "El 28 de abril de 1886 Paul Cézanne y Hortense Fiquet se casan en Aix; el hijo Paul queda así legitimado. El retrato pertenece al tiempo de este vínculo nuevo, ya público."
    ],
    "fact": "1886–1887. Detroit Institute of Arts."
  },
  "czself80": {
    "text": [
      "Cézanne se muestra ante un fondo oliva y estampado, la cabeza calva, la mirada firme. El cuadro data de hacia 1880.",
      "Retrata al pintor en los años en que se mueve entre la Provenza, París y la Île-de-France, antes de los puntos de inflexión de 1886."
    ],
    "fact": "hacia 1880. Colección no determinada."
  },
  "czwinterchest": {
    "text": [
      "Los castaños del Jas están desnudos en invierno, las ramas como un armazón claro ante la casa y el cielo.",
      "En 1885–1886, al final de esta primera parte, Cézanne vuelve, en el parque invernal de la casa familiar, a un motivo conocido."
    ],
    "fact": "1885–1886. Colección no determinada."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
