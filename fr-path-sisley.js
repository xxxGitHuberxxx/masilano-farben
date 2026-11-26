// v9.8 FR content for Alfred Sisley’s life journey, Part 1 (1839–1880). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Petit Palais, Paris": "Petit Palais, Paris",
  "Museum Ordrupgaard, Charlottenlund": "Museum Ordrupgaard, Charlottenlund",
  "Saarlandmuseum, Saarbrücken": "Saarlandmuseum, Sarrebruck",
  "Artizon Museum, Tokio": "Artizon Museum, Tokyo",
  "Buffalo AKG Art Museum": "Buffalo AKG Art Museum",
  "Southampton City Art Gallery": "Southampton City Art Gallery",
  "Sammlung Oskar Reinhart, Winterthur": "Collection Oskar Reinhart, Winterthour",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Norton Simon Museum, Pasadena": "Norton Simon Museum, Pasadena",
  "Yale University Art Gallery, New Haven": "Yale University Art Gallery, New Haven",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Paris",
  "National Museum of Western Art, Tokio": "National Museum of Western Art, Tokyo",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Montreal Museum of Fine Arts": "Musée des beaux-arts de Montréal",
  "Dallas Museum of Art": "Dallas Museum of Art",
  "The Phillips Collection, Washington": "The Phillips Collection, Washington",
  "Musée des Beaux-Arts, Rouen": "Musée des Beaux-Arts, Rouen",
  "Königliche Museen der Schönen Künste, Brüssel": "Musées royaux des Beaux-Arts, Bruxelles",
  "Toledo Museum of Art": "Toledo Museum of Art",
  "Clark Art Institute, Williamstown": "Clark Art Institute, Williamstown",
  "National Galleries of Scotland, Edinburgh": "National Galleries of Scotland, Édimbourg",
  "Neue Pinakothek, München": "Neue Pinakothek, Munich",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Cologne",
  "Walters Art Museum, Baltimore": "Walters Art Museum, Baltimore",
  "J. Paul Getty Museum, Los Angeles": "J. Paul Getty Museum, Los Angeles",
  "Museum of Fine Arts, Houston": "Museum of Fine Arts, Houston",
  "Städel Museum, Frankfurt": "Städel Museum, Francfort",
  "Kunsthalle Mannheim": "Kunsthalle Mannheim",
  "Nationalgalerie, Prag": "Galerie nationale, Prague",
  "Hammer Museum, Los Angeles": "Hammer Museum, Los Angeles",
  "Princeton University Art Museum": "Princeton University Art Museum"
});
  P.works = Object.assign(P.works || {}, {
  "sychest65": {
    "title": "Allée de châtaigniers à La Celle-Saint-Cloud",
    "museum": "Petit Palais, Paris"
  },
  "sychestord": {
    "title": "Allée de châtaigniers à La Celle-Saint-Cloud",
    "museum": "Museum Ordrupgaard, Charlottenlund"
  },
  "symonetf": {
    "title": "Le peintre Monet dans la forêt de Fontainebleau",
    "museum": "Saarlandmuseum, Sarrebruck"
  },
  "sychest67": {
    "title": "Allée de châtaigniers près de La Celle-Saint-Cloud",
    "museum": "Southampton City Art Gallery"
  },
  "sywoods": {
    "title": "Femmes allant au bois",
    "museum": "Artizon Museum, Tokyo"
  },
  "symarlott": {
    "title": "Rue de village à Marlotte",
    "museum": "Buffalo AKG Art Museum"
  },
  "sybarges": {
    "title": "Péniches sur le canal Saint-Martin",
    "museum": "Collection Oskar Reinhart, Winterthour"
  },
  "syearlysnow": {
    "title": "Première neige à Louveciennes",
    "museum": "Museum of Fine Arts, Boston"
  },
  "syvilleneuve": {
    "title": "Le pont de Villeneuve-la-Garenne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sylouvsnow": {
    "title": "Louveciennes sous la neige",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "sybougival": {
    "title": "La Seine à Bougival",
    "museum": "Yale University Art Gallery, New Haven"
  },
  "syflood72": {
    "title": "Inondation à Port-Marly",
    "museum": "National Gallery of Art, Washington"
  },
  "sycanal72": {
    "title": "Le canal Saint-Martin",
    "museum": "Musée d’Orsay, Paris"
  },
  "systdenis": {
    "title": "L’île Saint-Denis",
    "museum": "Musée d’Orsay, Paris"
  },
  "sylandlouv": {
    "title": "Paysage à Louveciennes",
    "museum": "National Museum of Western Art, Tokyo"
  },
  "syturnroad": {
    "title": "Un tournant de la route",
    "museum": "Art Institute of Chicago"
  },
  "syspringb": {
    "title": "Printemps à Bougival",
    "museum": "Philadelphia Museum of Art"
  },
  "syautumnb": {
    "title": "Automne : rives de la Seine près de Bougival",
    "museum": "Musée des beaux-arts de Montréal"
  },
  "syvillevray": {
    "title": "Rue à Ville-d’Avray",
    "museum": "Dallas Museum of Art"
  },
  "syfog": {
    "title": "Brouillard à Voisins",
    "museum": "Musée d’Orsay, Paris"
  },
  "sysnowphill": {
    "title": "Neige à Louveciennes",
    "museum": "The Phillips Collection, Washington"
  },
  "sychenil": {
    "title": "La place du Chenil à Marly, effet de neige",
    "museum": "Musée des Beaux-Arts, Rouen"
  },
  "syaqueduct": {
    "title": "L’aqueduc de Marly",
    "museum": "Toledo Museum of Art"
  },
  "sythames": {
    "title": "La Tamise à Hampton Court",
    "museum": "Clark Art Institute, Williamstown"
  },
  "symolesey": {
    "title": "L’écluse de Molesey, Hampton Court",
    "museum": "National Galleries of Scotland, Édimbourg"
  },
  "syroadhamp": {
    "title": "La route de Hampton Court",
    "museum": "Neue Pinakothek, Munich"
  },
  "syregatta": {
    "title": "La régate de Molesey",
    "museum": "Musée d’Orsay, Paris"
  },
  "sybrhamp": {
    "title": "Le pont de Hampton Court",
    "museum": "Wallraf-Richartz-Museum, Cologne"
  },
  "syterrace": {
    "title": "La terrasse de Saint-Germain au printemps",
    "museum": "Walters Art Museum, Baltimore"
  },
  "syversailles": {
    "title": "La route de Versailles à Saint-Germain",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "symeadow": {
    "title": "Prairie",
    "museum": "National Gallery of Art, Washington"
  },
  "syinstitut": {
    "title": "La Seine avec l’Institut de France et le Pont des Arts",
    "museum": "Art Institute of Chicago"
  },
  "sypiles": {
    "title": "La Seine à Port-Marly, tas de sable",
    "museum": "Art Institute of Chicago"
  },
  "sywatering": {
    "title": "L’abreuvoir à Marly",
    "museum": "Art Institute of Chicago"
  },
  "syfloodrouen": {
    "title": "L’inondation à Port-Marly",
    "museum": "Musée des Beaux-Arts, Rouen"
  },
  "syfloodhou": {
    "title": "L’inondation sur la route de Saint-Germain",
    "museum": "Museum of Fine Arts, Houston"
  },
  "symarlyview": {
    "title": "Vue de Marly-le-Roi depuis Cœur-Volant",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sysawyers": {
    "title": "Les scieurs de long",
    "museum": "Petit Palais, Paris"
  },
  "sybankaut": {
    "title": "Rive de la Seine en automne",
    "museum": "Städel Museum, Francfort"
  },
  "systreetmarly": {
    "title": "Une rue à Marly",
    "museum": "Kunsthalle Mannheim"
  },
  "sysevres": {
    "title": "Le pont de Sèvres",
    "museum": "Galerie nationale, Prague"
  },
  "sysuresnes": {
    "title": "La Seine à Suresnes",
    "museum": "Musée d’Orsay, Paris"
  },
  "syrest": {
    "title": "Repos au bord d’un ruisseau, lisière de bois",
    "museum": "Musée d’Orsay, Paris"
  },
  "syallee": {
    "title": "Allée de châtaigniers",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "syfirstsnow": {
    "title": "Première neige à Veneux-Nadon",
    "museum": "National Gallery of Art, Washington"
  },
  "sybanksby": {
    "title": "Bords de la Seine à By",
    "museum": "Clark Art Institute, Williamstown"
  },
  "systmammes": {
    "title": "Chemin au bord de la Seine à Saint-Mammès",
    "museum": "Dallas Museum of Art"
  },
  "sytimber": {
    "title": "Chantier de bois à Saint-Mammès",
    "museum": "Hammer Museum, Los Angeles"
  },
  "syhills": {
    "title": "Sur les hauteurs de Moret au printemps, matin",
    "museum": "Princeton University Art Museum"
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
  "syparis": {
    "place": "Paris, Londres et Gleyre",
    "when": "1839–1863",
    "mapLabel": "Paris",
    "intro": [
      "Alfred Sisley naît le 30 octobre 1839 à Paris, second enfant du marchand de tissus anglais William Sisley et de Felicia Sell. En 1857, son père l’envoie à Londres pour apprendre le commerce ; il reste en Angleterre jusqu’en 1860 et y voit beaucoup de peinture.",
      "De retour en France, il décide de devenir peintre. En 1862, il entre dans l’atelier de Charles Gleyre à Paris. Il y rencontre Claude Monet, Pierre-Auguste Renoir et Frédéric Bazille. En 1863, Gleyre ferme l’atelier."
    ]
  },
  "symarlott": {
    "place": "Fontainebleau et le Salon",
    "when": "1865–1870",
    "mapLabel": "Marlotte",
    "intro": [
      "Avec ses amis, Sisley peint dans la forêt de Fontainebleau, à Chailly et à Marlotte. En 1866, le Salon accepte deux de ses tableaux : une rue de village à Marlotte et des femmes allant au bois.",
      "Depuis 1866, il vit avec Eugénie Lescouezec. Le 17 juin 1867 naît leur fils Pierre, le 29 janvier 1869 leur fille Jeanne-Adèle. En 1868, l’allée de châtaigniers de La Celle-Saint-Cloud est au Salon ; en 1870, deux vues du canal Saint-Martin."
    ]
  },
  "sywar": {
    "place": "Guerre et nouveau départ",
    "when": "1870–1872",
    "mapLabel": "Bougival",
    "intro": [
      "À l’automne 1870, des soldats prussiens dévastent la maison de Sisley à Bougival. Il y perd tout ce qu’il possède et se réfugie à Paris, où il vit le siège et la Commune. En novembre 1870, son ami Frédéric Bazille tombe à la guerre.",
      "Après la guerre, le commerce de son père est ruiné. Dès lors, Sisley a peu d’argent. En 1872, il peint avec Monet à Argenteuil et au bord de la Seine à Villeneuve-la-Garenne. En décembre 1872, il fixe une inondation à Port-Marly."
    ]
  },
  "sylouve": {
    "place": "Louveciennes",
    "when": "1873",
    "mapLabel": "Louveciennes",
    "intro": [
      "Au début des années 1870, Sisley habite Louveciennes, à l’ouest de Paris, et peint les chemins, les jardins et la rive de la Seine près de Bougival par tous les temps.",
      "Le 27 décembre 1873, il fonde avec Monet, Renoir, Camille Pissarro, Berthe Morisot et Paul Cézanne la Société anonyme coopérative des artistes peintres, sculpteurs, graveurs. Ils veulent montrer leurs tableaux eux-mêmes, sans le Salon."
    ]
  },
  "syimpres": {
    "place": "La première exposition impressionniste",
    "when": "1874",
    "mapLabel": "Nadar",
    "intro": [
      "Le 15 avril 1874, la première exposition de la société ouvre dans l’atelier de Nadar, boulevard des Capucines. Sisley montre cinq paysages. Les ventes sont faibles, mais son nom figure désormais parmi les nouveaux peintres.",
      "Il continue de peindre à Louveciennes et dans le Marly voisin : le brouillard à Voisins, la neige dans les rues, l’aqueduc de Marly."
    ]
  },
  "sylondon": {
    "place": "Au bord de la Tamise",
    "when": "1874",
    "mapLabel": "Londres",
    "intro": [
      "De juillet à octobre 1874, Sisley séjourne en Angleterre grâce au chanteur et collectionneur Jean-Baptiste Faure. À Londres et surtout à l’ouest de la ville, à Hampton Court et à East Molesey, il peint la Tamise, des ponts, l’écluse et une régate.",
      "C’est son premier voyage de peintre en Angleterre, depuis l’époque où, jeune homme, il devait y apprendre le commerce. En hiver, la famille s’installe à Marly-le-Roi."
    ]
  },
  "symarly": {
    "place": "Marly-le-Roi et Saint-Germain",
    "when": "1875–1876",
    "mapLabel": "Marly",
    "intro": [
      "Depuis Marly-le-Roi, Sisley peint la terrasse et la route vers Saint-Germain, des prairies, l’abreuvoir et la Seine avec des tas de sable à Port-Marly.",
      "Les tableaux sont clairs et amples. Sisley reste fidèle au paysage, tandis que des amis comme Monet et Renoir cherchent aussi d’autres motifs."
    ]
  },
  "syfloods": {
    "place": "La crue de 1876",
    "when": "1876",
    "mapLabel": "Port-Marly",
    "intro": [
      "En mars 1876, la Seine déborde de nouveau, plus fortement qu’en 1872. Sisley peint les rues inondées de Port-Marly, des maisons dans l’eau et le chemin vers Saint-Germain.",
      "Les tableaux de la crue sont parmi ses œuvres les plus connues : calmes, précis et sans drame. À côté, il peint aussi des vues du quotidien à Marly, une rue, des scieurs, une rive en automne."
    ]
  },
  "syloing": {
    "place": "Sèvres et le chemin vers le Loing",
    "when": "1877–1880",
    "mapLabel": "Veneux-Nadon",
    "intro": [
      "Au début de 1877, Sisley s’installe à Sèvres. En avril, il montre dix-sept paysages à la troisième exposition impressionniste. Il peint le pont de Sèvres et la Seine à Suresnes.",
      "À l’automne 1879, il visite Moret-sur-Loing, à l’orée de la forêt de Fontainebleau. Au début de 1880, il s’établit avec sa famille à Veneux-Nadon, près de Saint-Mammès et de Moret. Un nouveau et long chapitre commence là."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sychest65": {
    "text": [
      "Une longue allée de châtaigniers s’enfonce au loin ; la lumière tombe entre les troncs sur le chemin. C’est l’une des premières toiles conservées de Sisley. Le tableau est au Petit Palais, à Paris."
    ],
    "fact": "1865. Petit Palais, Paris."
  },
  "sychestord": {
    "text": [
      "Le même pays, un autre regard : les arbres sont plus serrés, le chemin se rétrécit. Sisley peint l’allée à plusieurs reprises. Le tableau est au Museum Ordrupgaard, à Charlottenlund."
    ],
    "fact": "1865. Museum Ordrupgaard, Charlottenlund."
  },
  "symonetf": {
    "text": [
      "Parmi les arbres, un peintre est assis à son chevalet. C’est Claude Monet, l’ami de Sisley à l’atelier Gleyre. Le tableau est au Saarlandmuseum, à Sarrebruck."
    ],
    "fact": "vers 1865. Saarlandmuseum, Sarrebruck."
  },
  "sychest67": {
    "text": [
      "Sous un haut ciel d’été, l’allée baigne dans une lumière chaude. Ce tableau était au Salon de 1868. Il est à la Southampton City Art Gallery."
    ],
    "fact": "1867. Southampton City Art Gallery."
  },
  "sywoods": {
    "text": [
      "Deux femmes en robes amples marchent sur un chemin ; le bois est au fond. Le tableau a été montré au Salon de 1866. Il est à l’Artizon Museum, à Tokyo."
    ],
    "fact": "1866. Artizon Museum, Tokyo."
  },
  "symarlott": {
    "text": [
      "Dans la rue de Marlotte, des maisons et une clôture se tiennent sous un large ciel. Le Salon de 1866 a aussi accepté ce tableau. Il est au Buffalo AKG Art Museum."
    ],
    "fact": "1866. Buffalo AKG Art Museum."
  },
  "sybarges": {
    "text": [
      "Des péniches sont amarrées au canal Saint-Martin, à Paris ; les arbres se reflètent dans l’eau. En 1870, Sisley a montré deux vues du canal au Salon. Ce tableau est à la collection Oskar Reinhart, à Winterthour."
    ],
    "fact": "1870. Collection Oskar Reinhart, Winterthour."
  },
  "syearlysnow": {
    "text": [
      "Une neige légère couvre jardins et toits ; le ciel est pâle. Sisley peint déjà Louveciennes avant la guerre. Le tableau est au Museum of Fine Arts, à Boston."
    ],
    "fact": "1870. Museum of Fine Arts, Boston."
  },
  "syvilleneuve": {
    "text": [
      "Un pont de fer tout neuf traverse la Seine ; des voiliers passent dessous. Sisley peint le fleuve en 1872 à Villeneuve-la-Garenne. Le tableau est au Metropolitan Museum of Art, à New York."
    ],
    "fact": "1872. Metropolitan Museum of Art, New York."
  },
  "sylouvsnow": {
    "text": [
      "Une route enneigée passe le long des jardins et des maisons ; la neige brille de bleu et de blanc. Le tableau est au Norton Simon Museum, à Pasadena."
    ],
    "fact": "1872. Norton Simon Museum, Pasadena."
  },
  "sybougival": {
    "text": [
      "Le fleuve courbe sous un ciel clair ; au bord se tiennent des arbres et un chemin. Sisley connaît bien Bougival, même après la perte de sa maison. Le tableau est à la Yale University Art Gallery, à New Haven."
    ],
    "fact": "1872. Yale University Art Gallery, New Haven."
  },
  "syflood72": {
    "text": [
      "La rue devant un commerce de vins est sous l’eau, et une barque passe. Sisley a daté le tableau de 1872. Il est à la National Gallery of Art, à Washington."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "sycanal72": {
    "text": [
      "Le canal est calme entre les arbres et les maisons ; une péniche est au bord. Après la guerre, Sisley revient au canal qu’il a montré au Salon de 1870. Le tableau est au Musée d’Orsay, à Paris."
    ],
    "fact": "1872. Musée d’Orsay, Paris."
  },
  "systdenis": {
    "text": [
      "Une île basse s’étend dans la Seine ; à l’horizon se dressent des cheminées d’usine. Sisley montre le paysage près de Paris sans ornement. Le tableau est au Musée d’Orsay, à Paris."
    ],
    "fact": "1872. Musée d’Orsay, Paris."
  },
  "sylandlouv": {
    "text": [
      "Un chemin traverse champs et arbres ; le ciel est vaste et clair. Sisley peint les environs de Louveciennes dans des couleurs calmes. Le tableau est au National Museum of Western Art, à Tokyo."
    ],
    "fact": "1873. National Museum of Western Art, Tokyo."
  },
  "syturnroad": {
    "text": [
      "La route tourne derrière les arbres, et quelques figures la suivent. Sisley saisit le Louveciennes de tous les jours. Le tableau est à l’Art Institute of Chicago."
    ],
    "fact": "1873. Art Institute of Chicago."
  },
  "syspringb": {
    "text": [
      "Un vert frais borde le fleuve ; la lumière est nette. Sisley peint le printemps au bord de la Seine à Bougival. Le tableau est au Philadelphia Museum of Art."
    ],
    "fact": "1873. Philadelphia Museum of Art."
  },
  "syautumnb": {
    "text": [
      "Le feuillage est jaune et brun ; le fleuve est calme sous un ciel doux. Le tableau est au musée des beaux-arts de Montréal."
    ],
    "fact": "1873. Musée des beaux-arts de Montréal."
  },
  "syvillevray": {
    "text": [
      "Une rue étroite monte entre les maisons ; les murs sont clairs au soleil. Ville-d’Avray se trouve près de Sèvres, à l’ouest de Paris. Le tableau est au Dallas Museum of Art."
    ],
    "fact": "1873. Dallas Museum of Art."
  },
  "syfog": {
    "text": [
      "Dans le brouillard se tiennent des arbres sans feuilles et une clôture ; une femme marche sur le chemin. Voisins est un hameau de Louveciennes. Le tableau est au Musée d’Orsay, à Paris."
    ],
    "fact": "1874. Musée d’Orsay, Paris."
  },
  "sysnowphill": {
    "text": [
      "Derrière une grille s’étend un jardin enneigé ; les maisons sont silencieuses. Sisley peint la neige en tons clairs et froids. Le tableau est à la Phillips Collection, à Washington."
    ],
    "fact": "1874. The Phillips Collection, Washington."
  },
  "sychenil": {
    "text": [
      "La petite place de Marly est sous la neige ; les maisons l’entourent solidement. Sisley peint le lieu où la famille s’installe à l’hiver 1874. Le tableau est au musée des Beaux-Arts de Rouen."
    ],
    "fact": "1874. Musée des Beaux-Arts, Rouen."
  },
  "syaqueduct": {
    "text": [
      "Le grand aqueduc de Marly traverse le paysage ; le village est en dessous. L’ouvrage date du temps du roi Louis XIV. Le tableau est au Toledo Museum of Art."
    ],
    "fact": "1874. Toledo Museum of Art."
  },
  "sythames": {
    "text": [
      "La Tamise s’étend largement sous un ciel mouvementé ; des arbres bordent la rive. Sisley peint le fleuve anglais à l’été 1874. Le tableau est au Clark Art Institute, à Williamstown."
    ],
    "fact": "1874. Clark Art Institute, Williamstown."
  },
  "symolesey": {
    "text": [
      "L’eau tombe sur l’écluse ; des gens se tiennent sur la passerelle. Sisley saisit la lumière sur l’eau en mouvement. Le tableau est aux National Galleries of Scotland, à Édimbourg."
    ],
    "fact": "1874. National Galleries of Scotland, Édimbourg."
  },
  "syroadhamp": {
    "text": [
      "Un chemin mène vers les arbres et le domaine du palais ; le ciel est clair. Sisley peint les environs de Hampton Court. Le tableau est à la Neue Pinakothek, à Munich."
    ],
    "fact": "1874. Neue Pinakothek, Munich."
  },
  "syregatta": {
    "text": [
      "Des bateaux traversent la Tamise ; sur la rive, les spectateurs sont sous les arbres. Sisley peint la fête sur l’eau. Le tableau est au Musée d’Orsay, à Paris."
    ],
    "fact": "1874. Musée d’Orsay, Paris."
  },
  "sybrhamp": {
    "text": [
      "Le pont traverse la Tamise en plusieurs arches ; des bateaux sont au bord. Sisley choisit une vue profonde sur l’eau. Le tableau est au Wallraf-Richartz-Museum, à Cologne."
    ],
    "fact": "1874. Wallraf-Richartz-Museum, Cologne."
  },
  "syterrace": {
    "text": [
      "Du haut, on voit la boucle de la Seine et la plaine vaste ; le printemps éclaire le pays. C’est l’un des plus grands paysages de Sisley. Le tableau est au Walters Art Museum, à Baltimore."
    ],
    "fact": "1875. Walters Art Museum, Baltimore."
  },
  "syversailles": {
    "text": [
      "Une route droite traverse champs et arbres ; le ciel occupe la plus grande part du tableau. Sisley peint la route près de Marly. Le tableau est au J. Paul Getty Museum, à Los Angeles."
    ],
    "fact": "1875. J. Paul Getty Museum, Los Angeles."
  },
  "symeadow": {
    "text": [
      "Une prairie verte s’étend sous un ciel léger ; des arbres bordent le champ. Sisley fixe la surface calme, sans histoire. Le tableau est à la National Gallery of Art, à Washington."
    ],
    "fact": "1875. National Gallery of Art, Washington."
  },
  "syinstitut": {
    "text": [
      "Dans la brume, on voit l’Institut de France et le Pont des Arts ; le fleuve est au premier plan. Ici, Sisley peint une vue de Paris. Le tableau est à l’Art Institute of Chicago."
    ],
    "fact": "1875. Art Institute of Chicago."
  },
  "sypiles": {
    "text": [
      "Sur la rive se dressent de hauts tas de sable ; une péniche travaille sur le fleuve. Sisley montre le travail au bord de l’eau, pas seulement une belle vue. Le tableau est à l’Art Institute of Chicago."
    ],
    "fact": "1875. Art Institute of Chicago."
  },
  "sywatering": {
    "text": [
      "Un abreuvoir peu profond s’étend devant des maisons et des arbres ; le ciel est pâle. L’abreuvoir de Marly était un lieu connu au bord du parc. Le tableau est à l’Art Institute of Chicago."
    ],
    "fact": "1875. Art Institute of Chicago."
  },
  "syfloodrouen": {
    "text": [
      "L’eau atteint les maisons ; une barque traverse la rue. Sisley peint la grande crue de mars 1876 avec calme et clarté. Le tableau est au musée des Beaux-Arts de Rouen."
    ],
    "fact": "1876. Musée des Beaux-Arts, Rouen."
  },
  "syfloodhou": {
    "text": [
      "La route vers Saint-Germain est inondée ; des arbres se tiennent dans l’eau. Sisley choisit une vue ample de la crue. Le tableau est au Museum of Fine Arts, à Houston."
    ],
    "fact": "1876. Museum of Fine Arts, Houston."
  },
  "symarlyview": {
    "text": [
      "D’un versant, on voit Marly-le-Roi ; les maisons sont parmi les arbres. Le tableau est au Metropolitan Museum of Art, à New York."
    ],
    "fact": "1876. Metropolitan Museum of Art, New York."
  },
  "sysawyers": {
    "text": [
      "Deux hommes scient un tronc dans une fosse ; derrière eux se tient le village. Sisley fixe un travail de tous les jours. Le tableau est au Petit Palais, à Paris."
    ],
    "fact": "1876. Petit Palais, Paris."
  },
  "sybankaut": {
    "text": [
      "La rive brille de couleurs d’automne ; le fleuve est calme à côté. Le tableau est au Städel Museum, à Francfort."
    ],
    "fact": "1876. Städel Museum, Francfort."
  },
  "systreetmarly": {
    "text": [
      "Une rue monte entre murs et arbres ; une figure marche devant. Sisley peint Marly sans fête et sans crue. Le tableau est à la Kunsthalle Mannheim."
    ],
    "fact": "1876. Kunsthalle Mannheim."
  },
  "sysevres": {
    "text": [
      "Le pont de Sèvres traverse la Seine ; le ciel est vaste et clair. À partir de 1877, Sisley habite Sèvres et peint le fleuve encore et encore. Le tableau est à la Galerie nationale, à Prague."
    ],
    "fact": "1877. Galerie nationale, Prague."
  },
  "sysuresnes": {
    "text": [
      "Le fleuve s’étend sous un haut ciel ; au bord se tiennent des arbres et des maisons. Suresnes est en face du pont de Sèvres. Le tableau est au Musée d’Orsay, à Paris."
    ],
    "fact": "1877. Musée d’Orsay, Paris."
  },
  "syrest": {
    "text": [
      "Au bord d’un bois, une figure se repose près d’un ruisseau ; la lumière tombe à travers les feuilles. Ici, Sisley unit le bois et l’eau. Le tableau est au Musée d’Orsay, à Paris."
    ],
    "fact": "1878. Musée d’Orsay, Paris."
  },
  "syallee": {
    "text": [
      "Une allée claire de châtaigniers s’ouvre vers un ciel lumineux. Des années après les premières allées de La Celle-Saint-Cloud, Sisley revient à ce motif. Le tableau est au Metropolitan Museum of Art, à New York."
    ],
    "fact": "1878. Metropolitan Museum of Art, New York."
  },
  "syfirstsnow": {
    "text": [
      "Une neige légère couvre le village ; le ciel est gris-rose. Veneux-Nadon, près de Moret-sur-Loing, deviendra en 1880 le lieu de vie de Sisley. Le tableau est à la National Gallery of Art, à Washington."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "sybanksby": {
    "text": [
      "La rive à By est verte ; le fleuve courbe tranquillement à travers le tableau. By se trouve près de Veneux-Nadon, où Sisley s’installe en 1880. Le tableau est au Clark Art Institute, à Williamstown."
    ],
    "fact": "1880. Clark Art Institute, Williamstown."
  },
  "systmammes": {
    "text": [
      "Un chemin longe le fleuve ; les arbres sont dans la lumière et le ciel est haut. Saint-Mammès se trouve à la confluence du Loing et de la Seine. Le tableau est au Dallas Museum of Art."
    ],
    "fact": "1880. Dallas Museum of Art."
  },
  "sytimber": {
    "text": [
      "Au bord du fleuve gisent des troncs et des poutres ; des péniches attendent la charge. Sisley peint le lieu de travail, pas seulement le paysage. Le tableau est au Hammer Museum, à Los Angeles."
    ],
    "fact": "1880. Hammer Museum, Los Angeles."
  },
  "syhills": {
    "text": [
      "D’une hauteur, on voit les champs et Moret-sur-Loing dans la lumière du matin. Ici, à l’orée de la forêt de Fontainebleau, Sisley restera dans les années suivantes. Le tableau est au Princeton University Art Museum."
    ],
    "fact": "1880. Princeton University Art Museum."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
