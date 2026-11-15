// v9.3 ES content for Pissarro’s life journey, Part 2 (1884–1903), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "National Gallery, London": "National Gallery, Londres",
  "Kunstmuseum Basel": "Kunstmuseum Basel, Basilea",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Petit Palais, Paris": "Petit Palais, París",
  "Pushkin Museum, Moskau": "Museo Pushkin, Moscú",
  "Eremitage, Sankt Petersburg": "Ermitage, San Petersburgo",
  "Tate, London": "Tate, Londres",
  "Musée des Beaux-Arts, Lyon": "Musée des Beaux-Arts, Lyon",
  "Musée des Beaux-Arts, Dijon": "Musée des Beaux-Arts, Dijon",
  "Musée d’art moderne André Malraux, Le Havre": "Musée d’art moderne André Malraux, El Havre",
  "Szépművészeti Múzeum, Budapest": "Museo de Bellas Artes, Budapest"
});
  P.works = Object.assign(P.works || {}, {
  "pxhouse84": {
    "title": "Casa campesina en Éragny",
    "museum": "Los Angeles County Museum of Art"
  },
  "pxgisorsmkt": {
    "title": "Mercado de aves en Gisors",
    "museum": "Museum of Fine Arts, Boston"
  },
  "pxwalnut85": {
    "title": "El campo y el gran nogal en invierno, Éragny",
    "museum": "Philadelphia Museum of Art"
  },
  "pxdeafhouse": {
    "title": "La casa de la mujer sorda y el campanario de Éragny",
    "museum": "Indianapolis Museum of Art"
  },
  "pxpick86": {
    "title": "Recogida de manzanas",
    "museum": "Ohara Museum of Art, Kurashiki"
  },
  "pxmeadow87": {
    "title": "Final de tarde en nuestro prado",
    "museum": "National Gallery, Londres"
  },
  "pxappharv": {
    "title": "Cosecha de manzanas en Éragny",
    "museum": "Dallas Museum of Art"
  },
  "pxwin88": {
    "title": "Vista desde mi ventana, Éragny-sur-Epte",
    "museum": "Ashmolean Museum, Oxford"
  },
  "pxlacroix": {
    "title": "La Île Lacroix en Ruan, niebla",
    "museum": "Philadelphia Museum of Art"
  },
  "pxglean89": {
    "title": "Las espigadoras",
    "museum": "Kunstmuseum Basel, Basilea"
  },
  "pxfields90": {
    "title": "Campesinos en el campo, Éragny",
    "museum": "Buffalo AKG Art Museum"
  },
  "pxcharing": {
    "title": "Puente de Charing Cross, Londres",
    "museum": "National Gallery of Art, Washington"
  },
  "pxpeas91": {
    "title": "Dos jóvenes campesinas",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "pxkew": {
    "title": "Kew Green",
    "museum": "Musée des Beaux-Arts, Lyon"
  },
  "pxbazsnow": {
    "title": "Vista de Bazincourt, nieve, puesta de sol",
    "museum": "Museum Barberini, Potsdam"
  },
  "pxplacedu": {
    "title": "La Place du Havre, París",
    "museum": "Art Institute of Chicago"
  },
  "pxwasher": {
    "title": "Una lavandera en Éragny",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "pxsnow94": {
    "title": "Nieve en Éragny",
    "museum": "Musée des Beaux-Arts, Dijon"
  },
  "pxpinkknok": {
    "title": "La casa rosa, Knokke",
    "museum": "Tel Aviv Museum of Art"
  },
  "pxknokke": {
    "title": "El pueblo de Knokke",
    "museum": "Petit Palais, París"
  },
  "pxsnow95": {
    "title": "Sol de mañana sobre la nieve, Éragny-sur-Epte",
    "museum": "Museum of Fine Arts, Boston"
  },
  "pxrouenmorn": {
    "title": "Mañana, día nublado, Ruan",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "pxsteam": {
    "title": "Vapores en el puerto de Ruan",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "pxself96": {
    "title": "Autorretrato",
    "museum": "Dallas Museum of Art"
  },
  "pxunload": {
    "title": "Puerto de Ruan, descarga de madera",
    "museum": "Clark Art Institute, Williamstown"
  },
  "pxrousun": {
    "title": "Puesta de sol, puerto de Ruan",
    "museum": "National Museum Cardiff"
  },
  "pxepicerie": {
    "title": "Rue de l’Épicerie en Ruan, sol",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "pxwintermorn": {
    "title": "El Boulevard Montmartre en una mañana de invierno",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "pxmorncloud": {
    "title": "Boulevard Montmartre, mañana, nublado",
    "museum": "National Gallery of Victoria, Melbourne"
  },
  "pxmardi": {
    "title": "Boulevard Montmartre, martes de carnaval",
    "museum": "Hammer Museum, Los Angeles"
  },
  "pxtwilight": {
    "title": "Boulevard Montmartre, crepúsculo",
    "museum": "Museum Barberini, Potsdam"
  },
  "pxitaliens": {
    "title": "Boulevard des Italiens, mañana, sol",
    "museum": "National Gallery of Art, Washington"
  },
  "pxnight": {
    "title": "El Boulevard Montmartre de noche",
    "museum": "National Gallery, Londres"
  },
  "pxsaintpluie": {
    "title": "Rue Saint-Honoré por la tarde, lluvia",
    "museum": "Museo Nacional Thyssen-Bornemisza, Madrid"
  },
  "pxsainthon": {
    "title": "Rue Saint-Honoré, efecto de sol, tarde",
    "museum": "Nelson-Atkins Museum of Art, Kansas City"
  },
  "pxoperasnow": {
    "title": "Avenue de l’Opéra, nieve, mañana",
    "museum": "Museo Pushkin, Moscú"
  },
  "pxtheatre": {
    "title": "Place du Théâtre-Français, primavera",
    "museum": "Ermitage, San Petersburgo"
  },
  "pxoperasun": {
    "title": "Avenue de l’Opéra, sol de mañana",
    "museum": "Philadelphia Museum of Art"
  },
  "pxgarden98": {
    "title": "El jardín del artista en Éragny",
    "museum": "National Gallery of Art, Washington"
  },
  "pxtuilwin": {
    "title": "El jardín de las Tullerías en una tarde de invierno",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "pxtuilsp": {
    "title": "El jardín de las Tullerías en una mañana de primavera",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "pxhay99": {
    "title": "Almiares, mañana, Éragny",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "pxcarrousel": {
    "title": "Place du Carrousel, París",
    "museum": "National Gallery of Art, Washington"
  },
  "pxlouvrerain": {
    "title": "El Louvre, tarde, tiempo de lluvia",
    "museum": "National Gallery of Art, Washington"
  },
  "pxtuil00": {
    "title": "El jardín de las Tullerías, cielo claro y nublado",
    "museum": "Ermitage, San Petersburgo"
  },
  "pxpontfrost": {
    "title": "Mañana, sol de invierno, helada, el Pont-Neuf",
    "museum": "Honolulu Museum of Art"
  },
  "pxpontsun": {
    "title": "Sol de tarde, Pont-Neuf",
    "museum": "Philadelphia Museum of Art"
  },
  "pxpont02": {
    "title": "El Pont-Neuf",
    "museum": "Museo de Bellas Artes, Budapest"
  },
  "pxpontsnow": {
    "title": "Pont-Neuf, nieve, segunda serie",
    "museum": "National Museum Cardiff"
  },
  "pxdieppefair": {
    "title": "El mercado junto a la iglesia de Saint-Jacques, Dieppe, mañana, sol",
    "museum": "Ermitage, San Petersburgo"
  },
  "pxdieppeport": {
    "title": "El antepuerto de Dieppe, tarde, sol",
    "museum": "Château-Musée de Dieppe"
  },
  "pxpontroyal": {
    "title": "El Pont Royal y el Pavillon de Flore",
    "museum": "Petit Palais, París"
  },
  "pxmalaquais": {
    "title": "Quai Malaquais, tarde de sol",
    "museum": "Ermitage, San Petersburgo"
  },
  "pxhavremorn": {
    "title": "El antepuerto de El Havre, mañana, sol, marea alta",
    "museum": "Musée d’art moderne André Malraux, El Havre"
  },
  "pxpilotes": {
    "title": "La Anse des Pilotes en El Havre, marea alta, tarde, sol",
    "museum": "Musée d’art moderne André Malraux, El Havre"
  },
  "pxapples03": {
    "title": "Manzanos en Éragny, mañana de sol",
    "museum": "Kunstmuseum Basel, Basilea"
  },
  "pxself03": {
    "title": "Autorretrato con sombrero",
    "museum": "Tate, Londres"
  }
});
  P.paths = P.paths || {};
  P.paths.pissarro = {
  "title": "El camino de vida de Camille Pissarro",
  "part": "Partes 1–2 · 1830–1903",
  "subtitle": "De St. Thomas, por Pontoise y Éragny, a los bulevares de París",
  "intro": "Viaja con Camille Pissarro por toda su vida: desde su nacimiento en St. Thomas en 1830, pasando por Venezuela, París, Louveciennes, Londres y Pontoise y las ocho exposiciones impresionistas, hasta Éragny, el neoimpresionismo con Seurat y Signac y el retorno, las vistas de ciudad pintadas desde las ventanas de París, Ruan, Dieppe y El Havre, hasta su muerte el 13 de noviembre de 1903.",
  "ending": [
    "Camille Pissarro muere en París el 13 de noviembre de 1903, a los setenta y tres años. Está enterrado en el cementerio de Père-Lachaise.",
    "Quedan los campos y jardines de Pontoise y Éragny, los bulevares, puentes y puertos de sus últimos años, y el recuerdo del único pintor que participó en las ocho exposiciones impresionistas."
  ],
  "epilogue": "Camille Pissarro muere en París el 13 de noviembre de 1903. Está enterrado en el cementerio de Père-Lachaise.",
  "life": "1830–1903"
};
  P.stations = Object.assign(P.stations || {}, {
  "pxeragny": {
    "place": "Éragny-sur-Epte",
    "when": "1884–1886",
    "mapLabel": "Éragny",
    "intro": [
      "En 1884 la familia se instala en Éragny-sur-Epte, un pueblo cerca de Gisors, en Normandía. Pissarro vive aquí hasta el final de su vida; el taller está en el jardín.",
      "Ese mismo año nace su hijo menor, Paul-Émile. Praderas, huertos, casas de campo y el mercado de Gisors se convierten en motivos nuevos."
    ]
  },
  "pxneo": {
    "place": "Con Seurat y Signac",
    "when": "1885–1888",
    "mapLabel": "Puntos",
    "intro": [
      "En 1885 Pissarro conoce a Paul Signac y a Georges Seurat. Adopta su nueva manera de pintar con pequeños puntos de color puro, el neoimpresionismo.",
      "En la octava y última exposición impresionista de 1886 sus cuadros cuelgan con los de Seurat y Signac en una sala propia. En 1888 contrae una inflamación crónica de los ojos."
    ]
  },
  "pxreturn": {
    "place": "Adiós al punto",
    "when": "1889–1892",
    "mapLabel": "Londres",
    "intro": [
      "Pintar con puntos es lento. Hacia 1890 Pissarro vuelve a una manera más libre, impresionista.",
      "En 1890 y 1892 viaja a Londres a ver a su hijo Lucien. En 1892 tiene un gran éxito en Durand-Ruel, y la familia puede comprar la casa de Éragny."
    ]
  },
  "pxwindow": {
    "place": "Pintar desde la ventana",
    "when": "1893–1895",
    "mapLabel": "Ventana",
    "intro": [
      "Por el mal de los ojos, Pissarro ya apenas puede trabajar al aire libre. En 1893 se aloja en París en el Hôtel Garnier, en la Rue Saint-Lazare, y pinta las calles desde su ventana.",
      "En Éragny se instala un taller. El verano de 1894 la familia lo pasa en el pueblo costero belga de Knokke."
    ]
  },
  "pxrouen2": {
    "place": "El puerto de Ruan",
    "when": "1896–1898",
    "mapLabel": "Ruan",
    "intro": [
      "En 1896 Pissarro pinta en Ruan una serie de vistas del puerto con distinta luz y distinto tiempo, desde una habitación de hotel alta sobre los muelles.",
      "Vuelve el mismo año, ahora a otro hotel con otra vista. En 1898 está allí por última vez y pinta el puerto y los puentes."
    ]
  },
  "pxmontmartre": {
    "place": "Boulevard Montmartre",
    "when": "1897",
    "mapLabel": "Montmartre",
    "intro": [
      "A comienzos de 1897 Pissarro alquila una habitación en el Grand Hôtel de Russie. Desde la ventana mira el Boulevard Montmartre y el Boulevard des Italiens.",
      "Pinta la misma calle por la mañana y al atardecer, con sol, lluvia y tiempo de invierno, el martes de carnaval y una vez de noche."
    ]
  },
  "pxopera": {
    "place": "Avenue de l’Opéra",
    "when": "1897–1898",
    "mapLabel": "Ópera",
    "intro": [
      "En el invierno de 1897–98 Pissarro se aloja en el Hôtel du Louvre. Desde allí ve la Avenue de l’Opéra, la Rue Saint-Honoré y la Place du Théâtre-Français.",
      "Los meses de verano los sigue pasando en Éragny, donde el jardín se convierte en un motivo principal."
    ]
  },
  "pxtuileries": {
    "place": "Tullerías y Louvre",
    "when": "1899–1900",
    "mapLabel": "Tullerías",
    "intro": [
      "En 1899 Pissarro toma un piso en el número 204 de la Rue de Rivoli. Desde las ventanas pinta el jardín de las Tullerías y el Louvre.",
      "En la Exposición Universal de 1900 se muestran siete de sus cuadros. Después de una segunda serie del Louvre y las Tullerías se muda a la Place Dauphine."
    ]
  },
  "pxpontneuf": {
    "place": "Pont-Neuf y Dieppe",
    "when": "1900–1902",
    "mapLabel": "Pont-Neuf",
    "intro": [
      "Desde el piso de la Place Dauphine, en la Île de la Cité, Pissarro pinta una y otra vez el Pont-Neuf, con sol, nieve y helada.",
      "En los veranos de 1901 y 1902 trabaja en Dieppe: primero en torno a la iglesia de Saint-Jacques, después en el puerto. En 1902 regala una de sus vistas del puerto al museo de la ciudad."
    ]
  },
  "pxhavre": {
    "place": "El Havre y el último año",
    "when": "1903",
    "mapLabel": "1903",
    "intro": [
      "En 1903 Pissarro pinta en el Quai Voltaire el Sena, el Pont Royal y la orilla izquierda. Pasa el verano en El Havre y pinta el antepuerto; el museo de la ciudad adquiere dos de sus cuadros.",
      "Camille Pissarro muere en París el 13 de noviembre de 1903, a los setenta y tres años. Está enterrado en el cementerio de Père-Lachaise."
    ]
  },
  "pxosny": {
    "place": "De Pontoise a Osny",
    "when": "1878–1884",
    "mapLabel": "Osny",
    "intro": [
      "Pissarro sigue fiel al grupo impresionista y continúa pintando en Pontoise y sus alrededores, a menudo con figuras en los campos y el huerto. En 1882 la familia deja Pontoise y se instala en Osny.",
      "En otoño de 1883 pasa una temporada en Ruan y pinta los muelles de la ciudad. En 1884 se traslada a Éragny-sur-Epte."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "pxhouse84": {
    "text": [
      "En su primer año en Éragny Pissarro pinta una casa de campo detrás de un árbol, con chimeneas rojas y huertos. El cuadro pertenece al Los Angeles County Museum of Art."
    ],
    "fact": "1884. Los Angeles County Museum of Art."
  },
  "pxgisorsmkt": {
    "text": [
      "Gisors es la pequeña ciudad cerca de Éragny. Pissarro muestra a campesinas y compradores apretados en el mercado, en gouache y tiza. La hoja está en el Museum of Fine Arts de Boston."
    ],
    "fact": "1885. Museum of Fine Arts, Boston."
  },
  "pxwalnut85": {
    "text": [
      "Un nogal sin hojas se alza en el campo invernal frente a Éragny. Pissarro pinta el árbol varias veces en estos años. El cuadro está en el Philadelphia Museum of Art."
    ],
    "fact": "1885. Philadelphia Museum of Art."
  },
  "pxdeafhouse": {
    "text": [
      "Pradera, árboles, una casa y el campanario: la vista sobre el pueblo en 1886. El cuadro está en el Indianapolis Museum of Art."
    ],
    "fact": "1886. Indianapolis Museum of Art."
  },
  "pxpick86": {
    "text": [
      "Mujeres recogen manzanas bajo los árboles. El gran cuadro se pinta en 1886, el año en que Pissarro adopta la nueva técnica del punto. Está en el Ohara Museum of Art de Kurashiki, Japón."
    ],
    "fact": "1886. Ohara Museum of Art, Kurashiki."
  },
  "pxmeadow87": {
    "text": [
      "El prado detrás de la casa de Éragny, con sombras largas por la tarde. El color se descompone en pequeñas manchas. El cuadro está en la National Gallery de Londres."
    ],
    "fact": "1887. National Gallery, Londres."
  },
  "pxappharv": {
    "text": [
      "Un hombre sacude manzanas del árbol y las mujeres las recogen. Todo el cuadro está construido con finos puntos de color. Está en el Dallas Museum of Art."
    ],
    "fact": "1888. Dallas Museum of Art."
  },
  "pxwin88": {
    "text": [
      "Pissarro mira desde la ventana las casas vecinas, los huertos y los campos. El cuadro está en el Ashmolean Museum de Oxford."
    ],
    "fact": "1888. Ashmolean Museum, Oxford."
  },
  "pxlacroix": {
    "text": [
      "La niebla cubre el Sena en Ruan. Barcos, humo y orillas se disuelven en puntos claros. El cuadro está en el Philadelphia Museum of Art."
    ],
    "fact": "1888. Philadelphia Museum of Art."
  },
  "pxglean89": {
    "text": [
      "Mujeres recogen las espigas que han quedado después de la cosecha. El trabajo en el campo sigue siendo un tema importante en Éragny. El cuadro está en el Kunstmuseum Basel de Basilea."
    ],
    "fact": "1889. Kunstmuseum Basel, Basilea."
  },
  "pxfields90": {
    "text": [
      "Un campesino y una campesina trabajan en el labrantío. La pincelada vuelve a ser más libre. El cuadro está en el Buffalo AKG Art Museum."
    ],
    "fact": "1890. Buffalo AKG Art Museum."
  },
  "pxcharing": {
    "text": [
      "En el viaje a ver a Lucien en 1890, Pissarro pinta el Támesis con el puente de Charing Cross y las torres de Westminster. El cuadro está en la National Gallery of Art de Washington."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "pxpeas91": {
    "text": [
      "Dos jóvenes descansan al borde del campo. Pissarro las pinta grandes y de cerca. El cuadro está en el Metropolitan Museum of Art."
    ],
    "fact": "1891–92. Metropolitan Museum of Art, Nueva York."
  },
  "pxkew": {
    "text": [
      "En el viaje a la boda de Lucien en 1892, Pissarro pinta los prados de Kew, al oeste de Londres. El cuadro está en el Musée des Beaux-Arts de Lyon."
    ],
    "fact": "1892. Musée des Beaux-Arts, Lyon."
  },
  "pxbazsnow": {
    "text": [
      "Bazincourt es el pueblo vecino de Éragny. El sol se pone sobre el valle nevado. El cuadro pertenece al Museum Barberini de Potsdam."
    ],
    "fact": "1892. Museum Barberini, Potsdam."
  },
  "pxplacedu": {
    "text": [
      "Desde la ventana del hotel Pissarro mira la plaza ante la estación de Saint-Lazare, con coches y viandantes. Es uno de sus primeros cuadros de una calle de París vista desde arriba. Está en el Art Institute of Chicago."
    ],
    "fact": "1893. Art Institute of Chicago."
  },
  "pxwasher": {
    "text": [
      "Una mujer se inclina sobre un barreño en el jardín. El cuadro está en el Metropolitan Museum of Art."
    ],
    "fact": "1893. Metropolitan Museum of Art, Nueva York."
  },
  "pxsnow94": {
    "text": [
      "La nieve cubre prados y árboles cerca de Éragny. El cuadro está en el Musée des Beaux-Arts de Dijon."
    ],
    "fact": "1894. Musée des Beaux-Arts, Dijon."
  },
  "pxpinkknok": {
    "text": [
      "En Knokke, en el verano de 1894, Pissarro pinta una casa rosa de techo rojo en una calle del pueblo. El cuadro está en el Tel Aviv Museum of Art."
    ],
    "fact": "1894. Tel Aviv Museum of Art."
  },
  "pxknokke": {
    "text": [
      "Los tejados y el campanario de Knokke sobre huertos verdes. El cuadro está en el Petit Palais de París."
    ],
    "fact": "1894. Petit Palais, París."
  },
  "pxsnow95": {
    "text": [
      "La luz de la mañana pasa entre una hilera de álamos sin hojas y cae sobre la nieve. Un campesino camina bajo los árboles. El cuadro está en el Museum of Fine Arts de Boston."
    ],
    "fact": "1895. Museum of Fine Arts, Boston."
  },
  "pxrouenmorn": {
    "text": [
      "El gran puente, barcos y una chimenea humeante en una mañana gris en Ruan. El cuadro está en el Metropolitan Museum of Art."
    ],
    "fact": "1896. Metropolitan Museum of Art, Nueva York."
  },
  "pxsteam": {
    "text": [
      "Los vapores están amarrados al muelle; el humo y el vapor se mezclan con el cielo. También este cuadro está en el Metropolitan Museum of Art."
    ],
    "fact": "1896. Metropolitan Museum of Art, Nueva York."
  },
  "pxself96": {
    "text": [
      "Pissarro se pinta con barba blanca, sombrero negro y paleta ante un muro claro. El cuadro está en el Dallas Museum of Art."
    ],
    "fact": "1896. Dallas Museum of Art."
  },
  "pxunload": {
    "text": [
      "En el muelle de Ruan se descarga madera de un vapor, mientras al fondo humean las fábricas. El cuadro pertenece al Clark Art Institute."
    ],
    "fact": "1898. Clark Art Institute, Williamstown."
  },
  "pxrousun": {
    "text": [
      "El sol de la tarde colorea cielo y agua detrás de los vapores. El cuadro está en el National Museum Cardiff."
    ],
    "fact": "1898. National Museum Cardiff."
  },
  "pxepicerie": {
    "text": [
      "Una calle estrecha con puestos de mercado conduce hacia las torres de la catedral. El cuadro está en el Metropolitan Museum of Art."
    ],
    "fact": "1898. Metropolitan Museum of Art, Nueva York."
  },
  "pxwintermorn": {
    "text": [
      "El bulevar se pierde en la profundidad, lleno de coches y gente, bordeado de árboles sin hojas. El cuadro está en el Metropolitan Museum of Art."
    ],
    "fact": "1897. Metropolitan Museum of Art, Nueva York."
  },
  "pxmorncloud": {
    "text": [
      "La misma vista en una mañana nublada, en tonos grises y claros. El cuadro está en la National Gallery of Victoria de Melbourne."
    ],
    "fact": "1897. National Gallery of Victoria, Melbourne."
  },
  "pxmardi": {
    "text": [
      "El martes de carnaval una muchedumbre de colores llena el bulevar. El cuadro está en el Hammer Museum de Los Ángeles."
    ],
    "fact": "1897. Hammer Museum, Los Angeles."
  },
  "pxtwilight": {
    "text": [
      "Al anochecer se encienden las primeras luces bajo un cielo amarillo pálido. El cuadro pertenece al Museum Barberini de Potsdam."
    ],
    "fact": "1897. Museum Barberini, Potsdam."
  },
  "pxitaliens": {
    "text": [
      "Desde el mismo hotel Pissarro mira también hacia el otro lado, al Boulevard des Italiens con la luz de la mañana. El cuadro está en la National Gallery of Art de Washington."
    ],
    "fact": "1897. National Gallery of Art, Washington."
  },
  "pxnight": {
    "text": [
      "El único cuadro nocturno de la serie: faroles y escaparates se reflejan en el bulevar mojado. El cuadro está en la National Gallery de Londres."
    ],
    "fact": "1897. National Gallery, Londres."
  },
  "pxsaintpluie": {
    "text": [
      "La lluvia brilla en la calle y en la plaza, mientras pasan paraguas y coches. El cuadro está en el Museo Nacional Thyssen-Bornemisza de Madrid."
    ],
    "fact": "1897. Museo Nacional Thyssen-Bornemisza, Madrid."
  },
  "pxsainthon": {
    "text": [
      "La misma esquina a la luz de la tarde, con fuente y farola en la plaza. El cuadro está en el Nelson-Atkins Museum of Art de Kansas City."
    ],
    "fact": "1898. Nelson-Atkins Museum of Art, Kansas City."
  },
  "pxoperasnow": {
    "text": [
      "La nieve cubre la Avenue de l’Opéra en una mañana de invierno. El cuadro está en el Museo Pushkin de Moscú."
    ],
    "fact": "1898. Museo Pushkin, Moscú."
  },
  "pxtheatre": {
    "text": [
      "Árboles verdes, coches y ómnibus en la plaza ante el teatro, en primavera. El cuadro está en el Ermitage de San Petersburgo."
    ],
    "fact": "1898. Ermitage, San Petersburgo."
  },
  "pxoperasun": {
    "text": [
      "La avenida conduce a la ópera a lo lejos; el sol de la mañana cae sobre la plaza. El cuadro está en el Philadelphia Museum of Art."
    ],
    "fact": "1898. Philadelphia Museum of Art."
  },
  "pxgarden98": {
    "text": [
      "Parterres, árboles y la casa de Éragny. En verano Pissarro pinta su propio jardín. El cuadro está en la National Gallery of Art."
    ],
    "fact": "1898. National Gallery of Art, Washington."
  },
  "pxtuilwin": {
    "text": [
      "Desde el piso de la Rue de Rivoli, Pissarro mira el jardín invernal hasta las cúpulas a lo lejos. El cuadro está en el Metropolitan Museum of Art."
    ],
    "fact": "1899. Metropolitan Museum of Art, Nueva York."
  },
  "pxtuilsp": {
    "text": [
      "El mismo jardín en primavera, con céspedes verdes y caminos claros. También este cuadro está en el Metropolitan Museum of Art."
    ],
    "fact": "1899. Metropolitan Museum of Art, Nueva York."
  },
  "pxhay99": {
    "text": [
      "De vuelta en Éragny: un almiar a la luz de la mañana bajo árboles altos. El cuadro está en el Metropolitan Museum of Art."
    ],
    "fact": "1899. Metropolitan Museum of Art, Nueva York."
  },
  "pxcarrousel": {
    "text": [
      "La vista cruza la Place du Carrousel hacia el Louvre y el Pavillon de Flore. El cuadro está en la National Gallery of Art."
    ],
    "fact": "1900. National Gallery of Art, Washington."
  },
  "pxlouvrerain": {
    "text": [
      "Lluvia sobre el Sena, un remolcador pasa bajo el puente, detrás el Louvre. También este cuadro está en la National Gallery of Art."
    ],
    "fact": "1900. National Gallery of Art, Washington."
  },
  "pxtuil00": {
    "text": [
      "El jardín de las Tullerías bajo un cielo claro y nublado, de la segunda serie. El cuadro está en el Ermitage."
    ],
    "fact": "1900. Ermitage, San Petersburgo."
  },
  "pxpontfrost": {
    "text": [
      "La helada cubre el muelle, el sol de invierno el Sena, a lo lejos el Louvre. El cuadro está en el Honolulu Museum of Art."
    ],
    "fact": "hacia 1901. Honolulu Museum of Art."
  },
  "pxpontsun": {
    "text": [
      "El Pont-Neuf desde arriba, lleno de gente y coches, al sol de la tarde. El cuadro está en el Philadelphia Museum of Art."
    ],
    "fact": "1901. Philadelphia Museum of Art."
  },
  "pxpont02": {
    "text": [
      "El puente como una diagonal fuerte, con peatones y coches. Pissarro lo pinta siempre desde la misma ventana. El cuadro está en el Museo de Bellas Artes de Budapest."
    ],
    "fact": "1902. Museo de Bellas Artes, Budapest."
  },
  "pxpontsnow": {
    "text": [
      "La nieve cubre el puente y los muelles. El cuadro pertenece a la segunda serie y está en el National Museum Cardiff."
    ],
    "fact": "1902. National Museum Cardiff."
  },
  "pxdieppefair": {
    "text": [
      "Tiendas de mercado y gente ante la iglesia de Saint-Jacques en Dieppe, en 1901. El cuadro está en el Ermitage."
    ],
    "fact": "1901. Ermitage, San Petersburgo."
  },
  "pxdieppeport": {
    "text": [
      "El antepuerto de Dieppe con barcos y muelles al sol de la tarde. Pissarro regala este cuadro al museo de la ciudad en 1902; sigue en el Château-Musée de Dieppe."
    ],
    "fact": "1902. Château-Musée de Dieppe."
  },
  "pxpontroyal": {
    "text": [
      "Desde el Quai Voltaire, en 1903, Pissarro mira el Pont Royal y el Pavillon de Flore. El cuadro está en el Petit Palais de París."
    ],
    "fact": "1903. Petit Palais, París."
  },
  "pxmalaquais": {
    "text": [
      "Árboles, viandantes y coches en el Quai Malaquais, en la orilla izquierda del Sena. El cuadro está en el Ermitage."
    ],
    "fact": "1903. Ermitage, San Petersburgo."
  },
  "pxhavremorn": {
    "text": [
      "En el verano de 1903 Pissarro pinta desde la ventana del hotel el antepuerto de El Havre, con grúas y veleros. El cuadro está en el MuMa de El Havre."
    ],
    "fact": "1903. Musée d’art moderne André Malraux, El Havre."
  },
  "pxpilotes": {
    "text": [
      "La cala de los prácticos, con veleros, un mástil y mucha gente en el muelle. También este cuadro está en el MuMa de El Havre."
    ],
    "fact": "1903. Musée d’art moderne André Malraux, El Havre."
  },
  "pxapples03": {
    "text": [
      "Manzanos y un almiar al sol de la mañana: uno de los últimos cuadros de Éragny. Está en el Kunstmuseum Basel de Basilea."
    ],
    "fact": "1903. Kunstmuseum Basel, Basilea."
  },
  "pxself03": {
    "text": [
      "En el último año de su vida Pissarro se pinta con sombrero y barba blanca ante una ventana. Muere en París el 13 de noviembre de 1903. El cuadro está en la Tate de Londres."
    ],
    "fact": "1903. Tate, Londres."
  },
  "pxeragnyent": {
    "text": [
      "En 1884 Pissarro se traslada a Éragny-sur-Epte.",
      "Este cuadro muestra la entrada al pueblo ese mismo año: una calle, el campanario y un cielo amarillo.",
      "Está en el Pola Museum of Art de Hakone. Desde aquí el camino lleva a los años en Éragny."
    ],
    "fact": "1884. Pola Museum of Art, Hakone."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
