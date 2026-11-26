// v9.9 FR content for Alfred Sisley’s life journey, Part 2 (1880–1899), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Walters Art Museum, Baltimore": "Walters Art Museum, Baltimore",
  "Museum Barberini, Potsdam": "Museum Barberini, Potsdam",
  "National Gallery, London": "National Gallery, Londres",
  "Kröller-Müller Museum, Otterlo": "Kröller-Müller Museum, Otterlo",
  "University of Michigan Museum of Art, Ann Arbor": "University of Michigan Museum of Art, Ann Arbor",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Paris",
  "Israel-Museum, Jerusalem": "Musée d’Israël, Jérusalem",
  "Museum Boijmans Van Beuningen, Rotterdam": "Museum Boijmans Van Beuningen, Rotterdam",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Musée d’art et d’histoire, Genf": "Musée d’art et d’histoire, Genève",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "National Gallery of Australia, Canberra": "National Gallery of Australia, Canberra",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Petit Palais, Paris": "Petit Palais, Paris",
  "Fondation Bemberg, Toulouse": "Fondation Bemberg, Toulouse",
  "Museum Ordrupgaard, Charlottenlund": "Museum Ordrupgaard, Charlottenlund",
  "Artizon Museum, Tokio": "Artizon Museum, Tokyo",
  "Barnes Foundation, Philadelphia": "Barnes Foundation, Philadelphia",
  "Saint Louis Art Museum": "Saint Louis Art Museum",
  "Nelson-Atkins Museum of Art, Kansas City": "Nelson-Atkins Museum of Art, Kansas City",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Yale University Art Gallery, New Haven": "Yale University Art Gallery, New Haven",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Musée des Beaux-Arts, Agen": "Musée des Beaux-Arts, Agen",
  "Minneapolis Institute of Art": "Minneapolis Institute of Art",
  "Museo Thyssen-Bornemisza, Madrid": "Museo Thyssen-Bornemisza, Madrid",
  "Cincinnati Art Museum": "Cincinnati Art Museum",
  "Princeton University Art Museum": "Princeton University Art Museum",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Clark Art Institute, Williamstown": "Clark Art Institute, Williamstown",
  "National Museum Cardiff": "National Museum Cardiff",
  "Hunterian Art Gallery, Glasgow": "Hunterian Art Gallery, Glasgow",
  "Museum Langmatt, Baden": "Museum Langmatt, Baden",
  "Musée Calvet, Avignon": "Musée Calvet, Avignon",
  "Detroit Institute of Arts": "Detroit Institute of Arts",
  "Nationalmuseum, Stockholm": "Nationalmuseum, Stockholm",
  "Musée des Beaux-Arts, Reims": "Musée des Beaux-Arts, Reims",
  "Beaverbrook Art Gallery, Fredericton": "Beaverbrook Art Gallery, Fredericton",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Cologne",
  "Kunstmuseum Bern": "Kunstmuseum Bern"
});
  P.works = Object.assign(P.works || {}, {
  "syvsmwalters": {
    "title": "Vue de Saint-Mammès",
    "museum": "Walters Art Museum, Baltimore"
  },
  "syquarries": {
    "title": "Les carrières de Veneux au soleil, matin",
    "museum": "Museum Barberini, Potsdam"
  },
  "syferryby": {
    "title": "Le chemin du vieux bac à By",
    "museum": "National Gallery, Londres"
  },
  "sybrickfield": {
    "title": "La briqueterie",
    "museum": "Kröller-Müller Museum, Otterlo"
  },
  "syfrostveneux": {
    "title": "Le givre à Veneux",
    "museum": "University of Michigan Museum of Art, Ann Arbor"
  },
  "sypetitspres": {
    "title": "Le chemin des Petits-Prés à By, temps d’orage",
    "museum": "Musée d’Orsay, Paris"
  },
  "synearmoret": {
    "title": "Près de Moret-sur-Loing",
    "museum": "Museum Barberini, Potsdam"
  },
  "symeadowveneux": {
    "title": "Les prés de Veneux-Nadon",
    "museum": "Museum Barberini, Potsdam"
  },
  "syloingautumn": {
    "title": "Bords du Loing, effet d’automne",
    "museum": "Musée d’Israël, Jérusalem"
  },
  "syorchardby": {
    "title": "Verger au printemps, By",
    "museum": "Museum Boijmans Van Beuningen, Rotterdam"
  },
  "syloingsm82": {
    "title": "Le Loing à Saint-Mammès",
    "museum": "Museum of Fine Arts, Boston"
  },
  "sybourgogne": {
    "title": "L’écluse de Bourgogne à Moret",
    "museum": "Musée d’art et d’histoire, Genève"
  },
  "syloingmoret83": {
    "title": "Le Loing à Moret",
    "museum": "Museum Barberini, Potsdam"
  },
  "sysaules": {
    "title": "Saules au bord de l’Orvanne",
    "museum": "Kunsthaus Zürich"
  },
  "syroadmet": {
    "title": "La route de Moret à Saint-Mammès",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sytugboat": {
    "title": "Le remorqueur, le Loing à Saint-Mammès",
    "museum": "Petit Palais, Paris"
  },
  "sysablonspath": {
    "title": "Un sentier aux Sablons",
    "museum": "National Gallery of Australia, Canberra"
  },
  "sysablonswood": {
    "title": "Un coin de bois aux Sablons",
    "museum": "Musée d’Orsay, Paris"
  },
  "sycroix": {
    "title": "La Croix-Blanche à Saint-Mammès",
    "museum": "Museum of Fine Arts, Boston"
  },
  "sysepmorning84": {
    "title": "Matinée de septembre près de Saint-Mammès",
    "museum": "Museum Ordrupgaard, Charlottenlund"
  },
  "syjunemorning": {
    "title": "Matinée de juin à Saint-Mammès",
    "museum": "Artizon Museum, Tokyo"
  },
  "syfarmyard": {
    "title": "Cour de ferme à Saint-Mammès",
    "museum": "Musée d’Orsay, Paris"
  },
  "sybarnes": {
    "title": "Saint-Mammès, canal du Loing",
    "museum": "Barnes Foundation, Philadelphia"
  },
  "sybeachsm": {
    "title": "La plage de Saint-Mammès",
    "museum": "Saint Louis Art Museum"
  },
  "sylock": {
    "title": "L’écluse de Saint-Mammès",
    "museum": "Nelson-Atkins Museum of Art, Kansas City"
  },
  "sycleveland": {
    "title": "Saint-Mammès, canal du Loing",
    "museum": "Cleveland Museum of Art"
  },
  "sybargesloing": {
    "title": "Péniches sur le Loing à Saint-Mammès",
    "museum": "Musée d’Israël, Jérusalem"
  },
  "syyale85": {
    "title": "Bords du Loing, Saint-Mammès",
    "museum": "Yale University Art Gallery, New Haven"
  },
  "sycanalphila": {
    "title": "Le canal à Saint-Mammès",
    "museum": "Philadelphia Museum of Art"
  },
  "syfontaines": {
    "title": "Le chemin des Fontaines, le matin en juin",
    "museum": "Musée d’art et d’histoire, Genève"
  },
  "sypontmia": {
    "title": "Le pont de Moret",
    "museum": "Minneapolis Institute of Art"
  },
  "syeveningoct": {
    "title": "Un soir à Moret, fin d’octobre",
    "museum": "Museo Thyssen-Bornemisza, Madrid"
  },
  "syriverview": {
    "title": "Vue de la rivière",
    "museum": "Princeton University Art Museum"
  },
  "systreetmoret": {
    "title": "Rue à Moret",
    "museum": "Art Institute of Chicago"
  },
  "sybridgephila": {
    "title": "Le pont de Moret-sur-Loing",
    "museum": "Philadelphia Museum of Art"
  },
  "symillssnow": {
    "title": "Le Loing et les moulins de Moret, effet de neige",
    "museum": "Clark Art Institute, Williamstown"
  },
  "symoussoir": {
    "title": "La rue Eugène-Moussoir à Moret, l’hiver",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sycanalloing": {
    "title": "Le canal du Loing",
    "museum": "Musée d’Orsay, Paris"
  },
  "syfosses": {
    "title": "Moret-sur-Loing, rue des Fossés",
    "museum": "National Museum Cardiff"
  },
  "symyhouse": {
    "title": "Ma maison à Moret",
    "museum": "Museum Barberini, Potsdam"
  },
  "symatratrain": {
    "title": "Le chantier Matrat à Moret, temps de pluie",
    "museum": "Yale University Art Gallery, New Haven"
  },
  "sybridge93": {
    "title": "Le pont de Moret",
    "museum": "Musée d’Orsay, Paris"
  },
  "sychurchrain": {
    "title": "L’église de Moret sous la pluie du matin",
    "museum": "Hunterian Art Gallery, Glasgow"
  },
  "sychurchlangmatt": {
    "title": "L’église de Moret, temps de pluie, matin",
    "museum": "Museum Langmatt, Baden"
  },
  "sychurchcalvet": {
    "title": "L’église de Moret",
    "museum": "Musée Calvet, Avignon"
  },
  "sychurchdia": {
    "title": "L’église de Moret après la pluie",
    "museum": "Detroit Institute of Arts"
  },
  "sychurchpp": {
    "title": "L’église de Moret",
    "museum": "Petit Palais, Paris"
  },
  "sysahurs": {
    "title": "Les prés de Sahurs au soleil du matin",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "syclearing": {
    "title": "Une clairière",
    "museum": "Museo Thyssen-Bornemisza, Madrid"
  },
  "syshoresloing": {
    "title": "Au bord du Loing",
    "museum": "Nationalmuseum, Stockholm"
  },
  "syloire": {
    "title": "Bord de rivière en hiver",
    "museum": "Art Institute of Chicago"
  },
  "sycardiff": {
    "title": "La rade de Cardiff",
    "museum": "Musée des Beaux-Arts, Reims"
  },
  "sypenarth": {
    "title": "La falaise de Penarth, le soir, marée basse",
    "museum": "National Museum Cardiff"
  },
  "sypenarthstorm": {
    "title": "La falaise de Penarth, le soir, temps orageux",
    "museum": "Beaverbrook Art Gallery, Fredericton"
  },
  "systorr": {
    "title": "Storr’s Rock, Lady’s Cove, le soir",
    "museum": "National Museum Cardiff"
  },
  "sylangland": {
    "title": "La baie de Langland",
    "museum": "Wallraf-Richartz-Museum, Cologne"
  },
  "systorrmorning": {
    "title": "Storr’s Rock, Langland, le matin",
    "museum": "Kunstmuseum Bern"
  }
});
  P.paths = P.paths || {};
  P.paths.sisley = {
  "title": "Le parcours de vie d’Alfred Sisley",
  "part": "Parties 1–2 · 1839–1899",
  "subtitle": "De Paris à Moret-sur-Loing",
  "intro": "Accompagne Alfred Sisley tout au long de sa vie : de sa naissance à Paris en 1839, par l’atelier Gleyre, Louveciennes, Marly et l’inondation de 1876, jusqu’aux années au bord de la Seine et du Loing près de Moret, à l’église de Moret, au voyage au pays de Galles en 1897 et à sa mort en 1899.",
  "ending": [
    "Sisley meurt à Moret-sur-Loing le 29 janvier 1899, quelques mois après Eugénie. Il est inhumé le 1er février au cimetière de Moret.",
    "À l’initiative de Monet, la galerie Georges Petit vend aux enchères le 1er mai 1899 des tableaux de son atelier et des œuvres offertes par ses amis. Le produit de la vente revient à ses enfants Pierre et Jeanne-Adèle."
  ],
  "epilogue": "Alfred Sisley meurt le 29 janvier 1899 à Moret-sur-Loing, au bord de la rivière qu’il a peinte pendant vingt ans.",
  "life": "1839–1899"
};
  P.stations = Object.assign(P.stations || {}, {
  "syveneux": {
    "place": "Veneux-Nadon",
    "when": "1880",
    "mapLabel": "Veneux-Nadon",
    "intro": [
      "En janvier 1880, Sisley vit avec Eugénie, Pierre et Jeanne-Adèle à Veneux-Nadon, entre la Seine et la forêt de Fontainebleau. Le village est calme et la vie y coûte moins cher qu’aux environs de Paris.",
      "L’argent reste rare. Le marchand Paul Durand-Ruel lui achète désormais des tableaux régulièrement et lui assure en échange un revenu fixe. Sisley peint les carrières, les prés de By et les rives de la Seine."
    ]
  },
  "syshows": {
    "place": "Expositions et Saint-Mammès",
    "when": "1881–1882",
    "mapLabel": "Saint-Mammès",
    "intro": [
      "En 1881, la revue La Vie Moderne montre dans ses locaux quatorze tableaux de Sisley ; Renoir lui avait ouvert la porte. En 1882, il expose pour la dernière fois avec les impressionnistes, cette fois vingt-sept paysages.",
      "Il peint le Loing, qui se jette dans la Seine à Saint-Mammès, les vergers de By et l’écluse de Moret."
    ]
  },
  "symoret83": {
    "place": "Une année à Moret",
    "when": "1882–1883",
    "mapLabel": "Moret",
    "intro": [
      "En septembre 1882, la famille s’installe à Moret-sur-Loing, une petite ville ancienne au bord du Loing. Au printemps 1883, Durand-Ruel organise à Paris une exposition personnelle de Sisley. Elle lui apporte peu de succès.",
      "L’argent ne suffit pas. À l’automne 1883, la famille retourne aux Sablons, un hameau près de Veneux-Nadon."
    ]
  },
  "sysablons": {
    "place": "Les Sablons",
    "when": "1883–1884",
    "mapLabel": "Les Sablons",
    "intro": [
      "Sisley reste aux Sablons jusqu’en 1889. De là, il marche jusqu’à la lisière de la forêt, sur les chemins des champs et jusqu’au Loing à Saint-Mammès.",
      "Il peint des cours de ferme, des sentiers et des chemins de berge à toute heure du jour. Durand-Ruel lui achète alors beaucoup de tableaux, même si le marchand manque souvent lui-même d’argent."
    ]
  },
  "systmam": {
    "place": "Saint-Mammès",
    "when": "1885",
    "mapLabel": "Saint-Mammès",
    "intro": [
      "En 1885, Sisley peint sans cesse à Saint-Mammès la même rangée de maisons au bord du canal et de l’écluse. Il remplit des carnets de dessins et de notes.",
      "Les péniches, les chemins de halage et les larges eaux de la Seine et du Loing deviennent son sujet constant."
    ]
  },
  "sypetit": {
    "place": "Georges Petit et l’État",
    "when": "1886–1889",
    "mapLabel": "Paris · Moret",
    "intro": [
      "Outre Durand-Ruel, Sisley cherche d’autres marchands. En 1887, la galerie Georges Petit montre ses tableaux et, en décembre 1888, elle lui consacre une exposition. En 1889, Durand-Ruel expose vingt-huit de ses tableaux à New York.",
      "En 1888, l’État français achète pour la première fois un tableau de Sisley, la Matinée de septembre, et l’envoie à Agen. En novembre 1889, la famille revient à Moret-sur-Loing."
    ]
  },
  "symoret90": {
    "place": "Chez soi à Moret",
    "when": "1889–1892",
    "mapLabel": "Moret",
    "intro": [
      "En février 1890, Sisley devient membre de la nouvelle Société nationale des Beaux-Arts. Il expose désormais presque chaque année à son Salon du Champ-de-Mars. Il vend ses œuvres à plusieurs marchands.",
      "En 1891, il s’installe dans une maison de la rue Montmartre à Moret. Il peint les rues, les moulins, le pont et le canal de la ville sous la neige, sous la pluie et au soleil."
    ]
  },
  "sychurch": {
    "place": "L’église de Moret",
    "when": "1893–1894",
    "mapLabel": "Notre-Dame",
    "intro": [
      "En 1893, Sisley peint le pont de Moret par une journée claire. Puis il installe son chevalet devant l’église gothique Notre-Dame de Moret.",
      "Dans une suite de tableaux, en 1893 et 1894, il montre la même façade sous la pluie du matin, après la pluie, au soleil et le soir. Comme Monet avec la cathédrale de Rouen, il essaie la série."
    ]
  },
  "syretro": {
    "place": "Rouen et la grande exposition",
    "when": "1894–1897",
    "mapLabel": "Rouen · Paris",
    "intro": [
      "En 1894, Sisley est l’hôte du collectionneur François Depeaux près de Rouen et peint les prés de Sahurs, au bord de la Seine. De retour à Moret, il peint des clairières et le Loing.",
      "En février 1897, la galerie Georges Petit présente une grande exposition de cent quarante-six de ses tableaux. La même année, six de ses tableaux entrent dans les collections nationales avec le legs de Gustave Caillebotte."
    ]
  },
  "sywales": {
    "place": "Le pays de Galles et l’adieu",
    "when": "1897–1899",
    "mapLabel": "Penarth · Langland",
    "intro": [
      "À l’été 1897, Sisley et Eugénie partent pour la Grande-Bretagne, sur le conseil de François Depeaux. Ils séjournent à Penarth, près de Cardiff. Le 5 août 1897, ils se marient à la mairie de Cardiff, après plus de trente ans de vie commune. Ensuite, il peint à Langland Bay, sur la péninsule de Gower. À l’automne, ils rentrent à Moret.",
      "Au début de 1898, Sisley demande la nationalité française ; de son vivant, il ne devient pas français. Eugénie meurt le 8 octobre 1898. Sisley meurt le 29 janvier 1899 à Moret-sur-Loing."
    ]
  },
  "syloing": {
    "place": "Sèvres et le chemin du Loing",
    "when": "1877–1880",
    "mapLabel": "Veneux-Nadon",
    "intro": [
      "Au début de 1877, Sisley s’installe à Sèvres. En avril, il montre dix-sept paysages à la troisième exposition impressionniste. Il peint le pont de Sèvres et la Seine à Suresnes.",
      "À l’automne 1879, il visite Moret-sur-Loing, à la lisière de la forêt de Fontainebleau. En janvier 1880, il s’installe avec Eugénie et les enfants à Veneux-Nadon, près de Saint-Mammès et de Moret, parce que la vie y est moins chère."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "syvsmwalters": {
    "text": [
      "Par-delà un pré, on voit les maisons de Saint-Mammès au bord de l’eau.",
      "Le ciel occupe la moitié du tableau."
    ],
    "fact": "vers 1880. Walters Art Museum, Baltimore."
  },
  "syquarries": {
    "text": [
      "Un chemin longe la Seine sous les arbres, et à droite brillent les pentes claires des carrières.",
      "De petites figures et une charrette avancent sur le chemin."
    ],
    "fact": "1880. Museum Barberini, Potsdam."
  },
  "syferryby": {
    "text": [
      "Un étroit sentier mène à travers les hautes herbes jusqu’à la rivière, où passait autrefois un bac.",
      "Le tableau n’est pas daté ; il date sans doute de 1880 ou 1881."
    ],
    "fact": "vers 1880. National Gallery, Londres."
  },
  "sybrickfield": {
    "text": [
      "Sur une pente verte se dressent les restes d’une briqueterie, sous des nuages gris.",
      "Au loin s’étend la vallée aux toits rouges."
    ],
    "fact": "1880. Kröller-Müller Museum, Otterlo."
  },
  "syfrostveneux": {
    "text": [
      "Les prés et les arbres sont couverts de givre et brillent de blanc et de rose.",
      "Sisley peint la matinée froide par touches courtes et claires."
    ],
    "fact": "1880. University of Michigan Museum of Art, Ann Arbor."
  },
  "sypetitspres": {
    "text": [
      "Un chemin mène entre les prés vers quelques maisons, et le ciel est sombre avant l’orage.",
      "Une bande de lumière claire repose encore sur les champs."
    ],
    "fact": "1880. Musée d’Orsay, Paris."
  },
  "synearmoret": {
    "text": [
      "Un chemin de terre traverse prés et arbres, et au loin on voit les collines au bord du Loing.",
      "Des nuages passent dans un ciel bleu clair."
    ],
    "fact": "1881. Museum Barberini, Potsdam."
  },
  "symeadowveneux": {
    "text": [
      "Un pré vert s’étend jusqu’à une rangée d’arbres et de maisons.",
      "Une petite figure se tient dans l’herbe."
    ],
    "fact": "1881. Museum Barberini, Potsdam."
  },
  "syloingautumn": {
    "text": [
      "Sur la berge se dressent des arbres aux feuilles jaunes et rouges, et l’eau reflète les couleurs.",
      "Le ciel est vaste et clair."
    ],
    "fact": "1881. Musée d’Israël, Jérusalem."
  },
  "syorchardby": {
    "text": [
      "Les arbres fruitiers sont en fleurs blanches, l’herbe fraîche pousse dessous.",
      "Deux figures traversent le verger."
    ],
    "fact": "1881. Museum Boijmans Van Beuningen, Rotterdam."
  },
  "syloingsm82": {
    "text": [
      "La rivière passe tranquillement devant des maisons et des arbres.",
      "Des barques sont amarrées à la berge."
    ],
    "fact": "1882. Museum of Fine Arts, Boston."
  },
  "sybourgogne": {
    "text": [
      "Des maisons bordent l’écluse du canal, et une péniche attend sur l’eau.",
      "Le ciel est animé de nuages."
    ],
    "fact": "1882. Musée d’art et d’histoire, Genève."
  },
  "syloingmoret83": {
    "text": [
      "La rivière coule large et calme, des peupliers bordent la rive.",
      "Cette année-là, Sisley habite à Moret."
    ],
    "fact": "1883. Museum Barberini, Potsdam."
  },
  "sysaules": {
    "text": [
      "Des saules se penchent sur l’eau de l’Orvanne, une petite rivière près de Moret.",
      "Le feuillage scintille de nombreux verts."
    ],
    "fact": "1883. Kunsthaus Zürich."
  },
  "syroadmet": {
    "text": [
      "Une route de campagne longe une rangée d’arbres, et une figure marche au soleil.",
      "À droite, la vue s’ouvre sur les champs."
    ],
    "fact": "1883. Metropolitan Museum of Art, New York."
  },
  "sytugboat": {
    "text": [
      "Un petit remorqueur passe sur le Loing, suivi d’un panache de fumée.",
      "Des maisons et des arbres bordent la rive."
    ],
    "fact": "1883. Petit Palais, Paris."
  },
  "sysablonspath": {
    "text": [
      "Un sentier mène entre jardins et arbres jusqu’au village.",
      "Le soleil et l’ombre alternent sur le chemin."
    ],
    "fact": "1883. National Gallery of Australia, Canberra."
  },
  "sysablonswood": {
    "text": [
      "De grands arbres se serrent les uns contre les autres, la lumière tombe à travers les feuilles.",
      "Une petite figure est assise à l’orée du bois."
    ],
    "fact": "1883. Musée d’Orsay, Paris."
  },
  "sycroix": {
    "text": [
      "Des maisons dominent la berge, les arbres sans feuilles projettent de longues ombres.",
      "En bas s’étend le large fleuve dans la lumière d’hiver."
    ],
    "fact": "1884. Museum of Fine Arts, Boston."
  },
  "sysepmorning84": {
    "text": [
      "Le soleil du matin éclaire les prés et les collines près de Saint-Mammès et de Veneux-Nadon.",
      "Un grand arbre encadre le tableau à droite."
    ],
    "fact": "1884. Museum Ordrupgaard, Charlottenlund."
  },
  "syjunemorning": {
    "text": [
      "Les maisons au bord de l’eau brillent au soleil du matin, l’eau est calme.",
      "De petites figures sont assises sur la berge."
    ],
    "fact": "1884. Artizon Museum, Tokyo."
  },
  "syfarmyard": {
    "text": [
      "Un porche s’ouvre sur une cour aux vieux murs et aux hauts toits.",
      "Quelques personnes travaillent dans la cour."
    ],
    "fact": "1884. Musée d’Orsay, Paris."
  },
  "sybarnes": {
    "text": [
      "Des péniches sont amarrées sur le canal, les maisons se reflètent dans l’eau.",
      "Un ciel clair domine le tout."
    ],
    "fact": "1884. Barnes Foundation, Philadelphia."
  },
  "sybeachsm": {
    "text": [
      "Une bande de sable plate descend vers l’eau, avec des maisons et des arbres derrière.",
      "Une péniche est amarrée à la rive."
    ],
    "fact": "1884. Saint Louis Art Museum."
  },
  "sylock": {
    "text": [
      "Derrière l’écluse se dressent les maisons de Saint-Mammès, une péniche est sur l’eau.",
      "Le ciel est haut et clair."
    ],
    "fact": "1885. Nelson-Atkins Museum of Art, Kansas City."
  },
  "sycleveland": {
    "text": [
      "Les maisons s’alignent le long du canal, leurs façades brillent au soleil.",
      "Au premier plan court un étroit chemin de berge."
    ],
    "fact": "1885. Cleveland Museum of Art."
  },
  "sybargesloing": {
    "text": [
      "Plusieurs péniches sont amarrées l’une derrière l’autre, l’eau est lisse.",
      "Des maisons se dressent sur l’autre rive."
    ],
    "fact": "1885. Musée d’Israël, Jérusalem."
  },
  "syyale85": {
    "text": [
      "Herbes et buissons poussent sur la berge, le Loing coule derrière.",
      "Les maisons de Saint-Mammès se dressent au loin."
    ],
    "fact": "1885. Yale University Art Gallery, New Haven."
  },
  "sycanalphila": {
    "text": [
      "Des canards nagent sur le canal, un homme se tient debout dans une barque.",
      "Sur la rive, un toit rouge brille entre les arbres."
    ],
    "fact": "1885. Philadelphia Museum of Art."
  },
  "syfontaines": {
    "text": [
      "Un chemin longe la lisière de la forêt, les hautes herbes brillent au soleil.",
      "Le chemin des Fontaines se trouve près des Sablons."
    ],
    "fact": "1887. Musée d’art et d’histoire, Genève."
  },
  "sypontmia": {
    "text": [
      "Le vieux pont de pierre enjambe le Loing, avec les moulins et l’église derrière.",
      "L’eau reflète les arches."
    ],
    "fact": "1888. Minneapolis Institute of Art."
  },
  "syeveningoct": {
    "text": [
      "Le ciel du soir se teinte de violet et de rose au-dessus de la rivière.",
      "Les arbres de la rive sont déjà sombres."
    ],
    "fact": "1888. Museo Thyssen-Bornemisza, Madrid."
  },
  "syriverview": {
    "text": [
      "La rivière traverse largement le tableau, des arbres poussent sur la rive.",
      "Les nuages se reflètent dans l’eau."
    ],
    "fact": "1889. Princeton University Art Museum."
  },
  "systreetmoret": {
    "text": [
      "Une rue tranquille passe entre de vieilles maisons.",
      "Quelques figures se tiennent à l’ombre."
    ],
    "fact": "vers 1890. Art Institute of Chicago."
  },
  "sybridgephila": {
    "text": [
      "Les arches du pont se succèdent sur l’eau, avec des maisons et des arbres derrière.",
      "La lumière est claire et fraîche."
    ],
    "fact": "1891. Philadelphia Museum of Art."
  },
  "symillssnow": {
    "text": [
      "La neige couvre les toits des moulins et la berge.",
      "La rivière est sombre et calme."
    ],
    "fact": "1891. Clark Art Institute, Williamstown."
  },
  "symoussoir": {
    "text": [
      "La neige couvre la rue et les toits, quelques personnes passent.",
      "Les maisons sont peintes en couleurs douces."
    ],
    "fact": "1891. Metropolitan Museum of Art, New York."
  },
  "sycanalloing": {
    "text": [
      "Un canal rectiligne s’éloigne entre les peupliers.",
      "Une figure marche sur le chemin de halage."
    ],
    "fact": "1892. Musée d’Orsay, Paris."
  },
  "syfosses": {
    "text": [
      "Une ruelle longe jardins et murs vers la ville.",
      "Un ciel clair s’étend au-dessus des toits."
    ],
    "fact": "1892. National Museum Cardiff."
  },
  "symyhouse": {
    "text": [
      "Un buisson en fleurs remplit le jardin, derrière se pressent les toits de Moret.",
      "Sisley peint la vue près de sa propre maison."
    ],
    "fact": "1892. Museum Barberini, Potsdam."
  },
  "symatratrain": {
    "text": [
      "Des bateaux reposent sur le chantier au bord de l’eau, sous un ciel gris.",
      "La pluie adoucit les couleurs."
    ],
    "fact": "1892. Yale University Art Gallery, New Haven."
  },
  "sybridge93": {
    "text": [
      "Par un clair jour d’été, le pont est en pleine lumière, l’eau et le ciel sont bleus.",
      "De petites figures marchent sur la rive."
    ],
    "fact": "1893. Musée d’Orsay, Paris."
  },
  "sychurchrain": {
    "text": [
      "La façade gothique se dresse grise et violette sous la pluie.",
      "Devant, quelques personnes traversent la place mouillée."
    ],
    "fact": "1893. Hunterian Art Gallery, Glasgow."
  },
  "sychurchlangmatt": {
    "text": [
      "L’église s’élève haut dans le ciel nuageux.",
      "En bas, près des maisons, il fait encore sombre."
    ],
    "fact": "1893. Museum Langmatt, Baden."
  },
  "sychurchcalvet": {
    "text": [
      "Le soleil éclaire la façade et sa grande rosace.",
      "Devant l’église se trouve la vieille halle."
    ],
    "fact": "1893. Musée Calvet, Avignon."
  },
  "sychurchdia": {
    "text": [
      "Après la pluie, le ciel s’éclaircit et les pierres mouillées brillent.",
      "L’église domine la rue."
    ],
    "fact": "1894. Detroit Institute of Arts."
  },
  "sychurchpp": {
    "text": [
      "La façade brille, claire et rose, sous un ciel bleu.",
      "Ici, Sisley peint l’église en plein soleil."
    ],
    "fact": "1894. Petit Palais, Paris."
  },
  "sysahurs": {
    "text": [
      "De vastes prés s’étendent au bord de la Seine, les arbres projettent des ombres douces.",
      "Sisley les peint alors qu’il est l’hôte de François Depeaux près de Rouen."
    ],
    "fact": "1894. Metropolitan Museum of Art, New York."
  },
  "syclearing": {
    "text": [
      "Une clairière ensoleillée s’ouvre entre de grands arbres.",
      "La lumière tombe par taches sur l’herbe et le chemin."
    ],
    "fact": "1895. Museo Thyssen-Bornemisza, Madrid."
  },
  "syshoresloing": {
    "text": [
      "Des peupliers se dressent sur la rive, le Loing passe tranquillement.",
      "Un ciel doux s’étend sur l’eau."
    ],
    "fact": "1896. Nationalmuseum, Stockholm."
  },
  "syloire": {
    "text": [
      "Un arbre sans feuilles se dresse au premier plan sur la rive, une barque est au bord de l’eau.",
      "Le musée l’intitule The Loire ; le catalogue raisonné l’appelle Bords du Loing."
    ],
    "fact": "1896. Art Institute of Chicago."
  },
  "sycardiff": {
    "text": [
      "Un arbre se dresse sur la falaise au-dessus de la mer, des navires mouillent au large de Cardiff.",
      "Deux petites figures regardent l’eau."
    ],
    "fact": "1897. Musée des Beaux-Arts, Reims."
  },
  "sypenarth": {
    "text": [
      "À marée basse, la plage sous la falaise est découverte, la lumière du soir est douce.",
      "Sisley séjourne à Penarth pendant l’été 1897."
    ],
    "fact": "1897. National Museum Cardiff."
  },
  "sypenarthstorm": {
    "text": [
      "Des nuages sombres passent sur la mer, la falaise brille dans la dernière lumière.",
      "Sisley n’avait presque jamais peint de côtes aussi grandes et sauvages."
    ],
    "fact": "1897. Beaverbrook Art Gallery, Fredericton."
  },
  "systorr": {
    "text": [
      "Un grand rocher repose sur la plage de galets, derrière roulent les vagues.",
      "Lady’s Cove est une petite anse près de Langland."
    ],
    "fact": "1897. National Museum Cardiff."
  },
  "sylangland": {
    "text": [
      "Du haut d’une falaise verte, on regarde la mer claire, avec des voiliers au loin.",
      "Sisley et Eugénie passent ici le temps qui suit leur mariage."
    ],
    "fact": "1897. Wallraf-Richartz-Museum, Cologne."
  },
  "systorrmorning": {
    "text": [
      "Dans la lumière du matin, le rocher repose sur la plage, la mer est claire et calme.",
      "À l’automne, Sisley et Eugénie rentrent à Moret."
    ],
    "fact": "1897. Kunstmuseum Bern."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
