// v9.0 Spanish content for Pierre-Auguste Renoir’s life journey, Part 1 (1841–1881).
// Faithful translation of the existing DE/EN. No new facts.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatbesitz": "Colección privada",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Colonia",
  "Kunstmuseum Basel": "Kunstmuseum Basel, Basilea",
  "Musée d’Orsay, Paris": "Musée d’Orsay, París",
  "Courtauld Gallery, London": "Courtauld Gallery, Londres",
  "Alte Nationalgalerie, Berlin": "Alte Nationalgalerie, Berlín",
  "Nationalmuseum, Stockholm": "Nationalmuseum, Estocolmo",
  "Hamburger Kunsthalle": "Hamburger Kunsthalle, Hamburgo",
  "National Museum Cardiff": "National Museum Cardiff, Cardiff"
});
  P.works = Object.assign(P.works || {}, {
  "rnmother": {
    "title": "Retrato de la madre del artista",
    "museum": "Colección privada"
  },
  "rnfather": {
    "title": "Léonard Renoir, el padre del artista",
    "museum": "Saint Louis Art Museum"
  },
  "rnspringbouq": {
    "title": "Ramo de primavera",
    "museum": "Harvard Art Museums, Cambridge"
  },
  "rnvase66": {
    "title": "Flores en un jarrón",
    "museum": "National Gallery of Art, Washington"
  },
  "rnflowersham": {
    "title": "Flores en un invernadero",
    "museum": "Hamburger Kunsthalle, Hamburgo"
  },
  "rnromaine": {
    "title": "Romaine Lacaux",
    "museum": "Cleveland Museum of Art"
  },
  "rnsicot": {
    "title": "Mademoiselle Sicot",
    "museum": "National Gallery of Art, Washington"
  },
  "rnwillsis": {
    "title": "William Sisley",
    "museum": "Musée d’Orsay, París"
  },
  "rnfence": {
    "title": "Mujer junto a una cerca",
    "museum": "National Gallery of Art, Washington"
  },
  "rntree": {
    "title": "Mujer junto a un árbol",
    "museum": "National Gallery of Art, Washington"
  },
  "rnbazheron": {
    "title": "Frédéric Bazille pintando la garza",
    "museum": "Musée Fabre, Montpellier"
  },
  "rnlisehat": {
    "title": "Lise con sombrero de paja",
    "museum": "Barnes Foundation, Philadelphia"
  },
  "rnsisleyfam": {
    "title": "La familia Sisley",
    "museum": "Wallraf-Richartz-Museum, Colonia"
  },
  "rnlisesew": {
    "title": "Lise cosiendo",
    "museum": "Dallas Museum of Art"
  },
  "rnete": {
    "title": "En verano (La Bohémienne)",
    "museum": "Alte Nationalgalerie, Berlín"
  },
  "rnjules": {
    "title": "El pintor Jules Le Cœur en el bosque de Fontainebleau",
    "museum": "Museu de Arte de São Paulo"
  },
  "rngrenou": {
    "title": "La Grenouillère",
    "museum": "Nationalmuseum, Estocolmo"
  },
  "rnmixflow": {
    "title": "Flores variadas en una maceta de barro",
    "museum": "Museum of Fine Arts, Boston"
  },
  "rnchalands": {
    "title": "Barcazas en el Sena",
    "museum": "Musée d’Orsay, París"
  },
  "rnjardin68": {
    "title": "Mujer en un jardín",
    "museum": "Kunstmuseum Basel, Basilea"
  },
  "rnpromenade": {
    "title": "El paseo",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "rnpontneuf": {
    "title": "Pont Neuf, París",
    "museum": "National Gallery of Art, Washington"
  },
  "rnmonet72": {
    "title": "Claude Monet",
    "museum": "National Gallery of Art, Washington"
  },
  "rnmonetgard": {
    "title": "Claude Monet pintando en su jardín de Argenteuil",
    "museum": "Wadsworth Atheneum, Hartford"
  },
  "rnmomeson": {
    "title": "Madame Monet y su hijo",
    "museum": "National Gallery of Art, Washington"
  },
  "rnduckpond": {
    "title": "El estanque de los patos",
    "museum": "Dallas Museum of Art"
  },
  "rnliseshawl": {
    "title": "Lise con chal blanco",
    "museum": "Dallas Museum of Art"
  },
  "rndancer": {
    "title": "La bailarina",
    "museum": "National Gallery of Art, Washington"
  },
  "rnparisienne": {
    "title": "La Parisienne",
    "museum": "National Museum Cardiff, Cardiff"
  },
  "rnloge": {
    "title": "La Loge",
    "museum": "Courtauld Gallery, Londres"
  },
  "rningenue": {
    "title": "L’Ingénue",
    "museum": "Clark Art Institute, Williamstown"
  },
  "rnhartmann": {
    "title": "Retrato de una mujer (Madame Georges Hartmann)",
    "museum": "Musée d’Orsay, París"
  },
  "rnself76": {
    "title": "Autorretrato",
    "museum": "Harvard Art Museums, Cambridge"
  },
  "rnswing": {
    "title": "El columpio",
    "museum": "Musée d’Orsay, París"
  },
  "rnpiano": {
    "title": "Mujer al piano",
    "museum": "Art Institute of Chicago"
  },
  "rnchatou74": {
    "title": "El Sena en Chatou",
    "museum": "Dallas Museum of Art"
  },
  "rncharpentier": {
    "title": "Madame Charpentier y sus hijos",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rnjeanne": {
    "title": "Jeanne Samary",
    "museum": "National Gallery of Art, Washington"
  },
  "rnacrobats": {
    "title": "Acróbatas en el Cirque Fernando",
    "museum": "Art Institute of Chicago"
  },
  "rnmargot": {
    "title": "Margot Bérard",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "rntherese": {
    "title": "Thérèse Bérard",
    "museum": "Clark Art Institute, Williamstown"
  },
  "rnfan": {
    "title": "Mujer con abanico",
    "museum": "Clark Art Institute, Williamstown"
  },
  "rnoarsmen": {
    "title": "Remeros en Chatou",
    "museum": "National Gallery of Art, Washington"
  },
  "rnalphonsine": {
    "title": "Alphonsine Fournaise",
    "museum": "Musée d’Orsay, París"
  },
  "rncanotiers": {
    "title": "El almuerzo de los remeros",
    "museum": "The Phillips Collection, Washington"
  },
  "rncouple": {
    "title": "Pareja en barca",
    "museum": "Museum of Fine Arts, Boston"
  },
  "rnnearlake": {
    "title": "Junto al lago",
    "museum": "Art Institute of Chicago"
  },
  "rnwargemont": {
    "title": "Camino en Wargemont",
    "museum": "Toledo Museum of Art"
  }
});
  P.paths = P.paths || {};
  P.paths.renoir = {
  "title": "El camino de vida de Pierre-Auguste Renoir",
  "part": "Parte 1 · 1841–1881",
  "subtitle": "De Limoges al Almuerzo de los remeros",
  "intro": "Pierre-Auguste Renoir nace en Limoges el 25 de febrero de 1841. La familia se traslada a París, él aprende el oficio de pintor de porcelana y en el taller de Gleyre conoce a Monet, Bazille y Sisley. Esta primera parte lo acompaña hasta el Almuerzo de los remeros, hacia 1881.",
  "ending": [
    "La primera parte del camino de Renoir termina con los remeros a orillas del Sena.",
    "La segunda parte sigue con el viaje a Argelia e Italia, el encuentro con el arte antiguo y los últimos años en Cagnes-sur-Mer."
  ],
  "epilogue": "La segunda parte sigue con el viaje a Argelia e Italia, el encuentro con el arte antiguo y los últimos años en Cagnes-sur-Mer.",
  "life": "1841–1919"
};
  P.stations = Object.assign(P.stations || {}, {
  "renoirlimoges": {
    "place": "Limoges y la pintura sobre porcelana",
    "when": "1841–1858",
    "mapLabel": "Limoges",
    "intro": [
      "Renoir nace en Limoges el 25 de febrero de 1841, hijo del sastre Léonard Renoir y de la costurera Marguerite, de soltera Merlet.",
      "Hacia 1844 la familia se traslada a París.",
      "De joven aprende a pintar porcelana —a menudo se nombra el taller de Lévy Frères— y más tarde copia en el Louvre."
    ]
  },
  "renoirgleyre": {
    "place": "En el taller de Gleyre",
    "when": "1862–1866",
    "mapLabel": "Gleyre",
    "intro": [
      "En 1862 Renoir entra en el taller libre de Charles Gleyre y estudia en la École des Beaux-Arts.",
      "Allí conoce a Claude Monet, Alfred Sisley y Frédéric Bazille.",
      "Cuando Gleyre cierra el taller en 1864, los amigos pintan juntos en el bosque de Fontainebleau."
    ]
  },
  "renoirfriends": {
    "place": "Amigos y primeras modelos",
    "when": "1866–1868",
    "mapLabel": "Amigos",
    "intro": [
      "En estos años Renoir comparte talleres y motivos con Bazille y Sisley.",
      "Lise Tréhot posa para él una y otra vez.",
      "Los retratos siguen siendo oscuros y modelados con cuidado, aún cerca de la pintura de taller que había aprendido."
    ]
  },
  "renoirgrenouillere": {
    "place": "La Grenouillère",
    "when": "1869",
    "mapLabel": "Grenouillère",
    "intro": [
      "En el verano de 1869 Renoir y Monet pintan uno al lado del otro en La Grenouillère, un lugar de recreo a orillas del Sena en Croissy, cerca de Bougival.",
      "Manchas claras sobre el agua y pinceladas rápidas deshacen el color firmemente modelado."
    ]
  },
  "renoirargenteuil": {
    "place": "Guerra, París y Argenteuil",
    "when": "1870–1873",
    "mapLabel": "Argenteuil",
    "intro": [
      "En 1870 Renoir es llamado a filas y sirve en la caballería.",
      "Frédéric Bazille muere el 28 de noviembre de 1870 en Beaune-la-Rolande.",
      "Después Renoir pinta en París y a menudo con Monet en Argenteuil, con más luz y al aire libre."
    ]
  },
  "renoirexhibitions": {
    "place": "Las exposiciones impresionistas",
    "when": "1874–1875",
    "mapLabel": "1874",
    "intro": [
      "El 15 de abril de 1874 se inaugura en el antiguo estudio de Nadar, en el 35 del boulevard des Capucines, la primera exposición de los que luego se llamarán impresionistas.",
      "Renoir presenta allí, entre otras obras, «La Loge», «La bailarina» y «La Parisienne»."
    ]
  },
  "renoirgalette": {
    "place": "Montmartre y el Moulin de la Galette",
    "when": "1876",
    "mapLabel": "Montmartre",
    "intro": [
      "Renoir alquila un taller en Montmartre y pinta la vida al aire libre: el baile del Moulin de la Galette, el columpio y escenas al piano.",
      "En 1877 muestra varios de estos cuadros en la tercera exposición impresionista."
    ]
  },
  "renoirportraits": {
    "place": "Retratos y el Salón",
    "when": "1877–1879",
    "mapLabel": "Salón",
    "intro": [
      "Con retratos como el de Madame Charpentier y sus hijos, Renoir encuentra el camino de vuelta al Salón oficial.",
      "En 1879 ese gran cuadro de familia se expone allí y lo da a conocer a un público más amplio.",
      "También la familia Bérard, en Wargemont, le encarga retratos."
    ]
  },
  "renoircanotiers": {
    "place": "Chatou y los remeros",
    "when": "1879–1881",
    "mapLabel": "Chatou",
    "intro": [
      "A orillas del Sena en Chatou, en el restaurante de la familia Fournaise, Renoir pinta a sus amigos comiendo después de un paseo en barca.",
      "El «Almuerzo de los remeros» de 1880–81 cierra esta primera parte.",
      "En la parte siguiente vienen Argelia, Italia y una nueva manera de pintar."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rnmother": {
    "text": [
      "Marguerite Renoir, de soltera Merlet, era costurera.",
      "El retrato se pinta solo hacia 1860, años después del traslado de Limoges a París, con colores oscuros y tranquilos de taller."
    ],
    "fact": "hacia 1860. Colección privada."
  },
  "rnfather": {
    "text": [
      "Léonard Renoir era sastre.",
      "Este retrato de 1869 se pinta cuando el hijo ya trabaja por su cuenta. El padre aparece de perfil, firmemente modelado y sin la luz clara de los cuadros posteriores al aire libre."
    ],
    "fact": "1869. Saint Louis Art Museum."
  },
  "rnspringbouq": {
    "text": [
      "Este cuadro de flores de 1866 muestra con qué cuidado el joven Renoir ya colocaba telas y flores.",
      "Bodegones así formaban parte del aprendizaje que había empezado como pintor de porcelana y en el taller."
    ],
    "fact": "1866. Harvard Art Museums, Cambridge."
  },
  "rnvase66": {
    "text": [
      "Otro cuadro de flores de mediados de la década de 1860.",
      "El color es más denso que más tarde, pero las flores ya tienen vida: un ejercicio que recuerda la fina pintura sobre porcelana."
    ],
    "fact": "hacia 1866. National Gallery of Art, Washington."
  },
  "rnflowersham": {
    "text": [
      "Este temprano cuadro de flores de 1864 está en la Hamburger Kunsthalle.",
      "Pertenece a los años en que Renoir trabaja aún dentro de la tradición del taller, antes de que la luz del aire libre aclare su paleta."
    ],
    "fact": "1864. Hamburger Kunsthalle, Hamburgo."
  },
  "rnromaine": {
    "text": [
      "El retrato de la joven Romaine Lacaux, de 1864, se pinta mientras Renoir estudia con Gleyre y en la École des Beaux-Arts.",
      "El fondo claro y el cuidado en las telas ya muestran su interés por el retrato."
    ],
    "fact": "1864. Cleveland Museum of Art."
  },
  "rnsicot": {
    "text": [
      "Este retrato de 1865 sigue siendo oscuro y de construcción firme.",
      "Aquí Renoir está todavía cerca de la pintura académica de taller que había visto con Gleyre."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "rnwillsis": {
    "text": [
      "William Sisley era el padre del pintor Alfred Sisley, a quien Renoir había conocido en el taller de Gleyre.",
      "El retrato de 1864 está hoy en el Musée d’Orsay."
    ],
    "fact": "1864. Musée d’Orsay, París."
  },
  "rnfence": {
    "text": [
      "Después de que Gleyre cerrara su taller en 1864, Renoir y sus amigos pintan en el bosque de Fontainebleau.",
      "La mujer junto a la cerca, de 1866, pertenece a estos primeros intentos al aire libre."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "rntree": {
    "text": [
      "También este cuadro de 1866 pertenece a las excursiones a Fontainebleau.",
      "La figura está a la sombra de un árbol; el color aún es contenido, pero el motivo ya está al aire libre."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "rnbazheron": {
    "text": [
      "En 1867 Renoir pinta a su amigo Frédéric Bazille ante el caballete, trabajando en un bodegón con una garza.",
      "El cuadro está en el Musée Fabre de Montpellier, la ciudad natal de Bazille."
    ],
    "fact": "1867. Musée Fabre, Montpellier."
  },
  "rnlisehat": {
    "text": [
      "En estos años Lise Tréhot posa a menudo para Renoir.",
      "Aquí lleva un sombrero de paja; el cuadro es uno de los primeros retratos que hoy están en la Barnes Foundation."
    ],
    "fact": "hacia 1866. Barnes Foundation, Philadelphia."
  },
  "rnsisleyfam": {
    "text": [
      "Alfred Sisley y su compañera están sentados bajo los árboles en 1868.",
      "Renoir retrata a su amigo del taller de Gleyre en un cuadro claro al aire libre que hoy está en Colonia."
    ],
    "fact": "1868. Wallraf-Richartz-Museum, Colonia."
  },
  "rnlisesew": {
    "text": [
      "De nuevo Lise Tréhot es la modelo, esta vez inclinada sobre la costura.",
      "El tranquilo interior es uno de los cuadros que Renoir pinta de ella a finales de la década de 1860."
    ],
    "fact": "hacia 1867–1868. Dallas Museum of Art."
  },
  "rnete": {
    "text": [
      "Este cuadro de 1868, a menudo llamado «La Bohémienne», muestra a Lise Tréhot con un vestido de verano ante un fondo verde.",
      "Está en la Alte Nationalgalerie de Berlín."
    ],
    "fact": "1868. Alte Nationalgalerie, Berlín."
  },
  "rnjules": {
    "text": [
      "Jules Le Cœur, amigo de Renoir, está en 1866 con perro y escopeta en el bosque de Fontainebleau.",
      "El cuadro, hoy en São Paulo, recuerda las excursiones que los amigos hacían después de los años de taller."
    ],
    "fact": "1866. Museu de Arte de São Paulo."
  },
  "rngrenou": {
    "text": [
      "En el verano de 1869 Renoir está con Monet en La Grenouillère, un lugar de recreo a orillas del Sena en Croissy.",
      "Las figuras en el embarcadero y las manchas sobre el agua están entre los primeros cuadros en los que aparece su nueva manera, más clara. El cuadro está en el Nationalmuseum de Estocolmo."
    ],
    "fact": "1869. Nationalmuseum, Estocolmo."
  },
  "rnmixflow": {
    "text": [
      "Junto a los cuadros del río siguen los bodegones.",
      "Este ramo en una maceta de barro, hacia 1869, está en el Museum of Fine Arts de Boston y muestra con qué soltura coloca Renoir ahora las flores."
    ],
    "fact": "hacia 1869. Museum of Fine Arts, Boston."
  },
  "rnchalands": {
    "text": [
      "Las barcazas en el Sena, hacia 1869, pertenecen al mismo momento que La Grenouillère.",
      "Renoir observa el río no solo como lugar de paseo, sino como vía de trabajo de los barcos. El cuadro está en el Musée d’Orsay."
    ],
    "fact": "hacia 1869. Musée d’Orsay, París."
  },
  "rnjardin68": {
    "text": [
      "Ya en 1868 Renoir pinta a una mujer en un jardín, clara entre el follaje.",
      "El cuadro del Kunstmuseum Basel está en el umbral de los cuadros del río del verano siguiente."
    ],
    "fact": "1868. Kunstmuseum Basel, Basilea."
  },
  "rnpromenade": {
    "text": [
      "En 1870, el año en que es llamado a filas, Renoir pinta a una pareja a la sombra de los árboles.",
      "El cuadro, hoy en el Getty Museum, ya tiene la luz moteada que marcará sus años setenta."
    ],
    "fact": "1870. J. Paul Getty Museum, Los Angeles."
  },
  "rnpontneuf": {
    "text": [
      "Después de la guerra, en 1872, Renoir pinta el animado Pont Neuf.",
      "La ciudad está clara bajo un cielo amplio, las figuras son pequeñas y rápidas. El cuadro está en la National Gallery of Art."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "rnmonet72": {
    "text": [
      "En 1872 Renoir retrata a su amigo Claude Monet.",
      "En estos años los dos trabajan a menudo uno al lado del otro, sobre todo en Argenteuil, donde Monet se había instalado."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "rnmonetgard": {
    "text": [
      "Un año después Renoir retrata a Monet ante el caballete en el jardín de Argenteuil.",
      "El cuadro del Wadsworth Atheneum muestra lo unidos que trabajaban los amigos en estos años al aire libre."
    ],
    "fact": "1873. Wadsworth Atheneum, Hartford."
  },
  "rnmomeson": {
    "text": [
      "Camille Monet y su hijo Jean están sentados en el jardín en 1874.",
      "Renoir pinta a la familia de su amigo con la luz clara que marca también los cuadros de Monet de esos años."
    ],
    "fact": "1874. National Gallery of Art, Washington."
  },
  "rnduckpond": {
    "text": [
      "El estanque de los patos de 1873 pertenece a los paisajes de los años en Argenteuil y sus alrededores.",
      "Agua, orilla y follaje están hechos con toques cortos y claros."
    ],
    "fact": "1873. Dallas Museum of Art."
  },
  "rnliseshawl": {
    "text": [
      "También después de los años del río, Lise Tréhot sigue siendo una modelo importante.",
      "El retrato con chal blanco de 1872 está en el Dallas Museum of Art."
    ],
    "fact": "1872. Dallas Museum of Art."
  },
  "rndancer": {
    "text": [
      "«La bailarina» de 1874 estuvo entre las obras que Renoir presentó en la primera exposición impresionista.",
      "La joven está de pie, con tul claro, ante un fondo oscuro. El cuadro está en la National Gallery of Art."
    ],
    "fact": "1874. National Gallery of Art, Washington."
  },
  "rnparisienne": {
    "text": [
      "También «La Parisienne» de 1874 se vio en aquella primera exposición.",
      "La mujer del vestido azul está hoy en el National Museum Cardiff."
    ],
    "fact": "1874. National Museum Cardiff, Cardiff."
  },
  "rnloge": {
    "text": [
      "«La Loge» muestra a una pareja en un palco de teatro y fue uno de los cuadros más importantes de Renoir en la exposición de 1874 en casa de Nadar.",
      "Está en la Courtauld Gallery de Londres."
    ],
    "fact": "1874. Courtauld Gallery, Londres."
  },
  "rningenue": {
    "text": [
      "Este retrato de una joven de 1874, conocido como «L’Ingénue», se pinta el mismo año que los cuadros de la exposición.",
      "Pertenece al Clark Art Institute de Williamstown."
    ],
    "fact": "1874. Clark Art Institute, Williamstown."
  },
  "rnhartmann": {
    "text": [
      "Este retrato, a menudo identificado como Madame Georges Hartmann, es también de 1874.",
      "Está en el Musée d’Orsay."
    ],
    "fact": "1874. Musée d’Orsay, París."
  },
  "rnself76": {
    "text": [
      "Hacia 1876 Renoir se pinta a sí mismo, entre la primera exposición y los grandes cuadros de Montmartre.",
      "El autorretrato pertenece a los Harvard Art Museums."
    ],
    "fact": "1876. Harvard Art Museums, Cambridge."
  },
  "galette": {
    "text": [
      "En el jardín del Moulin de la Galette, en Montmartre, Renoir pinta en 1876 al público del domingo bailando.",
      "El gran cuadro se mostró en 1877 en la tercera exposición impresionista y está en el Musée d’Orsay."
    ],
    "fact": "1876. Musée d’Orsay, París."
  },
  "watering": {
    "text": [
      "El mismo año pinta a la niña con la regadera en un jardín.",
      "El cuadro está en la National Gallery of Art y tiene la misma luz moteada de jardín que las escenas de Montmartre."
    ],
    "fact": "1876. National Gallery of Art, Washington."
  },
  "rnswing": {
    "text": [
      "«El columpio» de 1876 se pinta en el jardín cerca del taller de Renoir en Montmartre.",
      "También se mostró en la tercera exposición impresionista de 1877. El cuadro está en el Musée d’Orsay."
    ],
    "fact": "1876. Musée d’Orsay, París."
  },
  "rnpiano": {
    "text": [
      "La mujer al piano pertenece a los mismos años que los cuadros de jardín de Montmartre.",
      "El interior está en el Art Institute of Chicago."
    ],
    "fact": "hacia 1875–1876. Art Institute of Chicago."
  },
  "rnchatou74": {
    "text": [
      "Ya en 1874 Renoir pinta el Sena en Chatou, el lugar al que volverá más tarde para los remeros.",
      "El paisaje está en el Dallas Museum of Art."
    ],
    "fact": "1874. Dallas Museum of Art."
  },
  "rncharpentier": {
    "text": [
      "El editor Georges Charpentier y su esposa Marguerite apoyan a Renoir.",
      "El gran cuadro de familia de 1878 se expone en el Salón de 1879 y da a conocer al pintor a un público más amplio. Hoy está en el Metropolitan Museum of Art."
    ],
    "fact": "1878. Metropolitan Museum of Art, Nueva York."
  },
  "rnjeanne": {
    "text": [
      "La actriz Jeanne Samary, del Théâtre-Français, posa para Renoir varias veces en estos años.",
      "Este retrato de 1878 está en la National Gallery of Art."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "rnacrobats": {
    "text": [
      "Francisca y Angelina Wartenberg, dos jóvenes acróbatas, son pintadas por Renoir en 1879 en el Cirque Fernando.",
      "El cuadro está en el Art Institute of Chicago."
    ],
    "fact": "1879. Art Institute of Chicago."
  },
  "rnmargot": {
    "text": [
      "La familia Bérard invita a Renoir a su casa de campo en Wargemont, en Normandía.",
      "En 1879 pinta allí a la pequeña Marguerite-Thérèse, llamada Margot. El retrato está en el Metropolitan Museum of Art."
    ],
    "fact": "1879. Metropolitan Museum of Art, Nueva York."
  },
  "rntherese": {
    "text": [
      "El mismo verano pinta a la mayor, Thérèse Bérard.",
      "El retrato pertenece hoy al Clark Art Institute de Williamstown."
    ],
    "fact": "1879. Clark Art Institute, Williamstown."
  },
  "rnfan": {
    "text": [
      "La mujer con abanico ante un ramo de crisantemos es también de 1879.",
      "También este cuadro está en el Clark Art Institute."
    ],
    "fact": "1879. Clark Art Institute, Williamstown."
  },
  "rnoarsmen": {
    "text": [
      "En 1879 Renoir pinta remeros en el Sena en Chatou, cerca del restaurante Fournaise.",
      "El cuadro de la National Gallery of Art está al comienzo de los años de los remeros."
    ],
    "fact": "1879. National Gallery of Art, Washington."
  },
  "rnalphonsine": {
    "text": [
      "Alphonsine Fournaise, la hija del dueño, está sentada en la baranda sobre el Sena en 1879.",
      "Renoir la pinta en Chatou, donde poco después nacerá el gran almuerzo de los remeros. El cuadro está en el Musée d’Orsay."
    ],
    "fact": "1879. Musée d’Orsay, París."
  },
  "rncanotiers": {
    "text": [
      "En 1880–81 Renoir reúne a sus amigos en la terraza de la Maison Fournaise en Chatou.",
      "El «Almuerzo de los remeros» es el gran cuadro final de esta primera parte y está en la Phillips Collection de Washington."
    ],
    "fact": "1880–1881. The Phillips Collection, Washington."
  },
  "rncouple": {
    "text": [
      "La pareja en la barca, hacia 1881, se identifica a menudo con Aline Charigot y el propio Renoir.",
      "Aline, más tarde su esposa, aparece en varios cuadros de estos años. La pintura está en el Museum of Fine Arts de Boston."
    ],
    "fact": "hacia 1881. Museum of Fine Arts, Boston."
  },
  "rnnearlake": {
    "text": [
      "La pareja junto al agua, hacia 1879–80, pertenece al mismo momento que los cuadros de Chatou.",
      "Está en el Art Institute of Chicago."
    ],
    "fact": "hacia 1879–1880. Art Institute of Chicago."
  },
  "rnwargemont": {
    "text": [
      "En 1879 Renoir pinta el camino de Wargemont, en Normandía, donde lo recibe la familia Bérard.",
      "El paisaje del Toledo Museum of Art cierra los años anteriores al viaje a Argelia e Italia. En la parte siguiente cambian el lugar y la manera de pintar."
    ],
    "fact": "1879. Toledo Museum of Art."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
