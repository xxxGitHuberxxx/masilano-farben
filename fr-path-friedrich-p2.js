// v10.1 FR content for Caspar David Friedrich’s life journey, Part 2 (1818–1840), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Eremitage, Sankt Petersburg": "Musée de l’Ermitage, Saint-Pétersbourg",
  "Nationalmuseum Oslo": "Musée national, Oslo",
  "Kunst Museum Winterthur": "Kunst Museum Winterthur",
  "Musée du Louvre, Paris": "Musée du Louvre, Paris",
  "Bayerische Staatsgemäldesammlungen, München": "Collections de peinture de l’État de Bavière, Munich",
  "Museum Folkwang, Essen": "Museum Folkwang, Essen",
  "Alte Nationalgalerie, Berlin": "Alte Nationalgalerie, Berlin",
  "Pommersches Landesmuseum, Greifswald": "Musée d’État de Poméranie, Greifswald",
  "Hamburger Kunsthalle": "Hamburger Kunsthalle",
  "Museum Georg Schäfer, Schweinfurt": "Museum Georg Schäfer, Schweinfurt",
  "Stiftung Preussische Schlösser und Gärten, Berlin": "Fondation des châteaux et jardins prussiens, Berlin",
  "Privatsammlung": "Collection particulière",
  "Österreichische Galerie Belvedere, Wien": "Belvedere, Vienne",
  "Staatliche Kunstsammlungen Dresden": "Collections d’État d’art de Dresde",
  "Klassik Stiftung Weimar": "Klassik Stiftung Weimar",
  "Nationalgalerie Prag": "Galerie nationale de Prague",
  "Staatliche Kunsthalle Karlsruhe": "Staatliche Kunsthalle Karlsruhe",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Museum der bildenden Künste, Leipzig": "Musée des beaux-arts, Leipzig",
  "Kimbell Art Museum, Fort Worth": "Kimbell Art Museum, Fort Worth",
  "Städel Museum, Frankfurt": "Städel Museum, Francfort",
  "Saint Louis Art Museum": "Saint Louis Art Museum",
  "Puschkin-Museum, Moskau": "Musée Pouchkine, Moscou",
  "Kupferstichkabinett, Dresden": "Kupferstich-Kabinett, Dresde",
  "Germanisches Nationalmuseum, Nürnberg": "Germanisches Nationalmuseum, Nuremberg",
  "Albertina, Wien": "Albertina, Vienne",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "J. Paul Getty Museum, Los Angeles": "J. Paul Getty Museum, Los Angeles",
  "Freies Deutsches Hochstift, Frankfurt": "Freies Deutsches Hochstift, Francfort",
  "Museo Thyssen-Bornemisza, Madrid": "Museo Nacional Thyssen-Bornemisza, Madrid"
});
  P.works = Object.assign(P.works || {}, {
  "cfsailor": {
    "title": "Sur le voilier",
    "museum": "Musée de l’Ermitage, Saint-Pétersbourg"
  },
  "cfsailorstudy": {
    "title": "Étude pour Sur le voilier",
    "museum": "Musée national, Oslo"
  },
  "cfsailstudies": {
    "title": "Études de voiliers",
    "museum": "Musée national, Oslo"
  },
  "cfruegenwoman": {
    "title": "Femme sur la plage de Rügen",
    "museum": "Kunst Museum Winterthur"
  },
  "cfnightharbour": {
    "title": "Les Sœurs sur le balcon du port",
    "museum": "Musée de l’Ermitage, Saint-Pétersbourg"
  },
  "cfmooncoast": {
    "title": "Rivage marin au clair de lune",
    "museum": "Musée du Louvre, Paris"
  },
  "cfsunsetwoman": {
    "title": "Femme devant le soleil couchant",
    "museum": "Museum Folkwang, Essen"
  },
  "cfwindow": {
    "title": "Femme à la fenêtre",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfgreifmarket": {
    "title": "La Place du marché de Greifswald avec la famille Friedrich",
    "museum": "Musée d’État de Poméranie, Greifswald"
  },
  "cfgardenhouse": {
    "title": "Tonnelle",
    "museum": "Collections de peinture de l’État de Bavière, Munich"
  },
  "cfrisingfog": {
    "title": "Paysage des monts des Géants avec brouillard montant",
    "museum": "Collections de peinture de l’État de Bavière, Munich"
  },
  "cfdriftingcloud": {
    "title": "Nuages qui passent",
    "museum": "Hamburger Kunsthalle"
  },
  "cfmistbank": {
    "title": "Nappes de brume",
    "museum": "Hamburger Kunsthalle"
  },
  "cfmorningmtn": {
    "title": "Matin en montagne",
    "museum": "Musée de l’Ermitage, Saint-Pétersbourg"
  },
  "cfgreifharbour2": {
    "title": "Le Port de Greifswald",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfgreifmeadows": {
    "title": "Prairies près de Greifswald",
    "museum": "Hamburger Kunsthalle"
  },
  "cfflatland": {
    "title": "Paysage plat",
    "museum": "Fondation des châteaux et jardins prussiens, Berlin"
  },
  "cfwindmills": {
    "title": "Paysage avec moulins à vent",
    "museum": "Fondation des châteaux et jardins prussiens, Berlin"
  },
  "cfflatbodden": {
    "title": "Paysage plat au bord de la baie de Greifswald",
    "museum": "Museum Georg Schäfer, Schweinfurt"
  },
  "cfdresdeneve": {
    "title": "Soir (Coucher de soleil derrière la Hofkirche de Dresde)",
    "museum": "Collection particulière"
  },
  "cfwatzmann": {
    "title": "Le Watzmann",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfelberocks": {
    "title": "Paysage rocheux dans les montagnes de grès de l’Elbe",
    "museum": "Belvedere, Vienne"
  },
  "cfmeissen": {
    "title": "Porche à Meissen",
    "museum": "Collections d’État d’art de Dresde"
  },
  "cfhuttens": {
    "title": "Le Tombeau de Hutten",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfearlysnow": {
    "title": "Première neige",
    "museum": "Hamburger Kunsthalle"
  },
  "cfice": {
    "title": "La Mer de glace",
    "museum": "Hamburger Kunsthalle"
  },
  "cfnorthmoon": {
    "title": "Mer du Nord au clair de lune",
    "museum": "Galerie nationale de Prague"
  },
  "cfreef": {
    "title": "Récif rocheux au bord de la mer",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "cfmoonmen": {
    "title": "Deux hommes contemplant la lune",
    "museum": "Collections d’État d’art de Dresde"
  },
  "cfmoonmenmet": {
    "title": "Deux hommes contemplant la lune (version ultérieure)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cfmooncouple": {
    "title": "Homme et femme contemplant la lune",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfmoongrise": {
    "title": "Lever de lune sur la mer",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfmoonherm": {
    "title": "Lever de lune au bord de la mer",
    "museum": "Musée de l’Ermitage, Saint-Pétersbourg"
  },
  "cflonetree": {
    "title": "L’Arbre solitaire",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfcrows": {
    "title": "L’Arbre aux corbeaux",
    "museum": "Musée du Louvre, Paris"
  },
  "cfstages": {
    "title": "Les Âges de la vie",
    "museum": "Musée des beaux-arts, Leipzig"
  },
  "cfwindowwood": {
    "title": "Intérieur de forêt au clair de lune",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfriesenberlin": {
    "title": "Monts des Géants",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfriesenmem": {
    "title": "Souvenir des monts des Géants",
    "museum": "Musée de l’Ermitage, Saint-Pétersbourg"
  },
  "cfriesenoslo": {
    "title": "Paysage de montagne dans les monts des Géants",
    "museum": "Musée national, Oslo"
  },
  "cfriesensun": {
    "title": "Rayons de soleil dans les monts des Géants",
    "museum": "Saint Louis Art Museum"
  },
  "cfriesenpeaks": {
    "title": "Sommet avec nuages qui passent",
    "museum": "Kimbell Art Museum, Fort Worth"
  },
  "cfrosenberg": {
    "title": "Paysage avec le Rosenberg dans les montagnes de Bohême",
    "museum": "Städel Museum, Francfort"
  },
  "cfeldenamtn": {
    "title": "Ruines d’Eldena dans les monts des Géants",
    "museum": "Musée d’État de Poméranie, Greifswald"
  },
  "cfbohemia28": {
    "title": "Paysage de Bohême",
    "museum": "Musée d’État de Poméranie, Greifswald"
  },
  "cfmoonshore": {
    "title": "Rivage au clair de lune",
    "museum": "Hamburger Kunsthalle"
  },
  "cfowlgothic": {
    "title": "Chouette dans une niche gothique",
    "museum": "Musée de l’Ermitage, Saint-Pétersbourg"
  },
  "cfneurathen": {
    "title": "La Porte rocheuse de Neurathen",
    "museum": "Musée de l’Ermitage, Saint-Pétersbourg"
  },
  "cfschmiede": {
    "title": "Vue sur la crête de Schmiedeberg",
    "museum": "Musée Pouchkine, Moscou"
  },
  "cfeldenaeast": {
    "title": "Ruines d’Eldena près de Greifswald, vues de l’est",
    "museum": "Kupferstich-Kabinett, Dresde"
  },
  "cfteplitz": {
    "title": "Paysage de montagne près de Teplitz avec le Milleschauer",
    "museum": "Germanisches Nationalmuseum, Nuremberg"
  },
  "cfgraves": {
    "title": "Paysage avec tombes",
    "museum": "Albertina, Vienne"
  },
  "cflonelybank": {
    "title": "Lever de lune sur un rivage solitaire",
    "museum": "National Gallery of Art, Washington"
  },
  "cfwalkdusk": {
    "title": "Promenade au crépuscule",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "cfsunsetlate": {
    "title": "Coucher de soleil (Frères)",
    "museum": "Musée de l’Ermitage, Saint-Pétersbourg"
  },
  "cfeveningstar": {
    "title": "L’Étoile du soir",
    "museum": "Freies Deutsches Hochstift, Francfort"
  },
  "cfgrossegehege": {
    "title": "Le Grosse Gehege près de Dresde",
    "museum": "Collections d’État d’art de Dresde"
  },
  "cfeastermorn": {
    "title": "Matin de Pâques",
    "museum": "Museo Nacional Thyssen-Bornemisza, Madrid"
  },
  "cfeveningbaltic": {
    "title": "Soir sur la plage de la Baltique",
    "museum": "Collections d’État d’art de Dresde"
  },
  "cfharboureve": {
    "title": "Bateaux au port le soir",
    "museum": "Collections d’État d’art de Dresde"
  }
});
  P.paths = P.paths || {};
  P.paths.friedrich = {
  "title": "Le parcours de vie de Caspar David Friedrich",
  "part": "Parties 1–2 · 1774–1840",
  "subtitle": "De Greifswald à Dresde",
  "intro": "Caspar David Friedrich naît à Greifswald le 5 septembre 1774. Le parcours le suit de l’enfance au bord de la Baltique et de l’académie de Copenhague jusqu’à Dresde, Rügen, l’autel de Tetschen et Le Moine au bord de la mer. Il continue ensuite avec le mariage avec Caroline en 1818, les enfants, le Voyageur, La Mer de glace, les contemplateurs de la lune et les monts des Géants, jusqu’aux calmes dernières années et à sa mort à Dresde en 1840.",
  "ending": [
    "Caspar David Friedrich meurt à Dresde le 7 mai 1840 et il est enterré au cimetière de la Trinité. Après sa mort, il tombe presque dans l’oubli pendant des décennies.",
    "En 1906, l’Exposition du centenaire de l’art allemand, à la Nationalgalerie de Berlin, montre beaucoup de ses tableaux, et Friedrich est redécouvert. Aujourd’hui, Le Moine au bord de la mer, Le Voyageur contemplant une mer de nuages, les Falaises de craie sur Rügen et La Mer de glace comptent parmi les tableaux les plus connus du romantisme. Ici s’achève le parcours."
  ],
  "epilogue": "De la côte baltique près de Greifswald aux calmes tableaux de lune de Dresde, Friedrich a peint des paysages où les personnes regardent, attendent et s’émerveillent.",
  "life": "1774–1840"
};
  P.stations = Object.assign(P.stations || {}, {
  "cfnuptials": {
    "place": "Mariage et voyage à Rügen",
    "when": "1818",
    "mapLabel": "Rügen",
    "intro": [
      "Le 21 janvier 1818, Friedrich épouse Christiane Caroline Bommer à la Kreuzkirche de Dresde. Il a 43 ans, elle 25. En été, tous deux voyagent par Neubrandenburg et Greifswald jusqu’à Rügen et rendent visite à sa famille.",
      "De ces mois datent des tableaux de la mer, de voiles et de couples qui regardent ensemble au loin. Dans la galerie, tu trouveras aussi les Falaises de craie sur Rügen, peintes à cette époque."
    ]
  },
  "cfchildren": {
    "place": "Famille au bord de l’Elbe",
    "when": "1818–1824",
    "mapLabel": "Au bord de l’Elbe",
    "intro": [
      "En 1820, la famille s’installe dans un appartement plus grand au bord de l’Elbe, au numéro 33, avec vue sur le fleuve. Leur fille Emma naît le 30 août 1819, leur fille Agnes le 2 décembre 1823 et leur fils Gustav Adolf, qui deviendra lui aussi peintre, le 23 décembre 1824.",
      "Caroline apparaît dans plusieurs tableaux, par exemple à la fenêtre de l’atelier. Greifswald reste proche aussi. Une grande feuille montre la place du marché avec la famille Friedrich."
    ]
  },
  "cfwanderer": {
    "place": "Au-dessus du brouillard",
    "when": "um 1818–1822",
    "mapLabel": "Grès de l’Elbe",
    "intro": [
      "Vers 1818, Friedrich peint Le Voyageur contemplant une mer de nuages, un homme vu de dos sur un rocher au-dessus d’une mer de brume. Le tableau est aujourd’hui à la Hamburger Kunsthalle, et tu le trouveras dans la galerie de cette appli.",
      "Les rochers du tableau rappellent les montagnes de grès de l’Elbe, au sud de Dresde. Pendant ces années, il peint sans cesse le brouillard, les nuages et les montagnes qui surgissent dans la lumière du matin."
    ]
  },
  "cfgreiftrips": {
    "place": "Le pays natal sur la Baltique",
    "when": "1818–1830",
    "mapLabel": "Bodden",
    "intro": [
      "Même depuis Dresde, Greifswald reste son pays. Pendant le voyage de noces de 1818, il visite la ville, et en 1826 il se repose encore une fois sur Rügen.",
      "À partir de croquis et de souvenirs, il peint le port, les prés devant la ville, des moulins et la terre plate au bord de la baie de Greifswald. À l’horizon se dressent souvent les clochers de Greifswald."
    ]
  },
  "cfprofessor": {
    "place": "Professeur à Dresde",
    "when": "1824–1829",
    "mapLabel": "Académie",
    "intro": [
      "Depuis 1823, le peintre norvégien Johan Christian Dahl habite la même maison au bord de l’Elbe, et les deux deviennent amis. Le 17 janvier 1824, l’académie de Dresde nomme Friedrich professeur extraordinaire, sans obligation d’enseigner.",
      "Il n’obtient pas la chaire vacante de peinture de paysage. Il continue de peindre Dresde dans la lumière du soir, des rochers dans les montagnes de grès de l’Elbe, un tombeau pour Ulrich von Hutten, le Watzmann d’après l’aquarelle d’un élève et la première neige dans la forêt."
    ]
  },
  "cfice": {
    "place": "La Mer de glace",
    "when": "1823–1824",
    "mapLabel": "Mer de glace",
    "intro": [
      "Dans son atelier de Dresde, Friedrich peint en 1823 et 1824 La Mer de glace. Des blocs s’entassent en un pic aigu, et en dessous apparaît la poupe d’un navire écrasé. Pour les plaques de glace, il avait dessiné des glaçons sur l’Elbe.",
      "En 1826, le tableau est montré à Hambourg, mais il ne trouve pas d’acheteur. Ce n’est qu’en 1905 que la Hamburger Kunsthalle l’acquiert. Dans d’autres tableaux de ces années aussi, des formes froides et aiguës surgissent de la mer."
    ]
  },
  "cfmoonlife": {
    "place": "Contemplateurs de la lune et Âges de la vie",
    "when": "1819–1835",
    "mapLabel": "Rive de l’Elbe",
    "intro": [
      "Vers 1819 et 1820, Friedrich peint deux hommes qui contemplent la lune montante sous un arbre dénudé. D’autres versions suivent plus tard, dont une avec un homme et une femme. Ses personnages nous tournent souvent le dos et regardent le tableau avec nous.",
      "En 1822, il peint en pendant L’Arbre solitaire et Lever de lune sur la mer. Vers 1834, il peint Les Âges de la vie, avec cinq personnes sur le rivage et cinq bateaux sur l’eau, des enfants, des adultes et un vieil homme."
    ]
  },
  "cfriesenlate": {
    "place": "Montagnes de mémoire",
    "when": "um 1828–1835",
    "mapLabel": "Monts des Géants",
    "intro": [
      "Friedrich avait marché dans les monts des Géants en 1810. Bien des années plus tard, il peint encore les chaînes de montagnes, d’après des croquis et de mémoire, dans une lumière douce et avec des nuages sur les crêtes.",
      "Il réunit parfois des lieux très éloignés. Dans un tableau, les ruines de l’abbaye d’Eldena, près de Greifswald, se dressent devant les monts des Géants. Il fixe aussi les collines de Bohême dans des aquarelles."
    ]
  },
  "cfstroke": {
    "place": "Maladie et feuilles silencieuses",
    "when": "1835–1837",
    "mapLabel": "Teplitz",
    "intro": [
      "Le 26 juin 1835, Friedrich est victime d’une attaque et reste ensuite en partie paralysé. Des ventes à la cour de Russie, arrangées par son ami le poète Vassili Joukovski, l’aident à payer une cure à Teplitz, en Bohême.",
      "Les grandes peintures à l’huile deviennent rares, et Rivage au clair de lune passe pour l’une des dernières. Friedrich travaille surtout à la sépia et à l’aquarelle, sur des feuilles silencieuses avec des rochers, des ruines, une chouette et la lune au-dessus du rivage."
    ]
  },
  "cflegacy": {
    "place": "Lumière du soir",
    "when": "1828–1840",
    "mapLabel": "Trinitatis",
    "intro": [
      "Dans ses dernières années, Friedrich peint souvent le soir, avec des promeneurs au crépuscule, une famille qui rentre devant la silhouette de Dresde, des bateaux au port et des gens sur la plage de la Baltique.",
      "Caspar David Friedrich meurt à Dresde le 7 mai 1840, à l’âge de 65 ans. Il est enterré au cimetière de la Trinité. Caroline et les enfants restent à Dresde."
    ]
  },
  "cfliberation": {
    "place": "Les guerres de libération",
    "when": "1812–1817",
    "mapLabel": "Greifswald",
    "intro": [
      "Pendant les guerres de libération contre Napoléon, en 1813 et 1814, Friedrich peint des tableaux pleins du souvenir de héros anciens et de tombeaux. Son ami Kersting part à la guerre comme volontaire. En 1814, Friedrich montre à Dresde Tombeaux de héros anciens et Le Chasseur dans la forêt.",
      "En 1816, le roi de Prusse achète Vue d’un port et l’offre au prince héritier. La même année, Friedrich devient membre de l’académie de Dresde. En 1817, il peint Deux hommes au bord de la mer, Après la tempête et Greifswald au clair de lune, un regard calme sur sa ville natale."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cfsailor": {
    "text": [
      "Un homme et une femme sont assis main dans la main à la proue d’un voilier et regardent une ville aux tours dans la brume.",
      "Le tableau est peint après le mariage et souvent associé à Friedrich et Caroline."
    ],
    "fact": "1818–1819. Musée de l’Ermitage, Saint-Pétersbourg."
  },
  "cfsailorstudy": {
    "text": [
      "Avec de fins traits de crayon, Friedrich dessine la proue d’un bateau avec sa voile et ses cordages.",
      "Il a ensuite utilisé de telles études pour le tableau Sur le voilier."
    ],
    "fact": "vers 1818. Musée national, Oslo."
  },
  "cfsailstudies": {
    "text": [
      "De petits voiliers sont répartis sur une feuille, vus de face, de côté et de dos.",
      "Friedrich les dessine avec précision pour pouvoir les peindre plus tard à l’atelier."
    ],
    "fact": "vers 1818. Musée national, Oslo."
  },
  "cfruegenwoman": {
    "text": [
      "Une femme est assise sur la plage plate et regarde la mer avec des voiliers.",
      "Au loin brillent les côtes de craie blanche de Rügen."
    ],
    "fact": "vers 1818. Kunst Museum Winterthur."
  },
  "cfnightharbour": {
    "text": [
      "Deux femmes se tiennent la nuit sur un balcon au-dessus d’un port.",
      "Derrière les mâts des navires s’élèvent les flèches d’églises gothiques."
    ],
    "fact": "1818–1820. Musée de l’Ermitage, Saint-Pétersbourg."
  },
  "cfmooncoast": {
    "text": [
      "La lune brille à travers des nuages sombres sur une plage calme.",
      "Les perches et les filets des pêcheurs se dressent dans l’eau peu profonde."
    ],
    "fact": "1818. Musée du Louvre, Paris."
  },
  "cfsunsetwoman": {
    "text": [
      "Une femme se tient sur un chemin et ouvre légèrement les bras devant le soleil bas.",
      "Tout le paysage brille de jaune et d’orange chauds."
    ],
    "fact": "vers 1818. Museum Folkwang, Essen."
  },
  "cfwindow": {
    "text": [
      "Caroline se tient dans l’atelier dépouillé devant la fenêtre ouverte et regarde l’Elbe.",
      "Dehors, on ne voit que des peupliers et le mât d’un bateau."
    ],
    "fact": "1822. Alte Nationalgalerie, Berlin."
  },
  "cfgreifmarket": {
    "text": [
      "Sur la place claire du marché de Greifswald, des gens se tiennent en petits groupes et une charrette passe.",
      "La grande aquarelle montre l’hôtel de ville, des maisons à pignon, des clochers et aussi des membres de la famille Friedrich."
    ],
    "fact": "1818. Musée d’État de Poméranie, Greifswald."
  },
  "cfgardenhouse": {
    "text": [
      "Une femme est assise dans une tonnelle ombragée, un homme debout à côté d’elle.",
      "Par l’ouverture dans le feuillage, on voit une église gothique en pleine lumière."
    ],
    "fact": "1818. Collections de peinture de l’État de Bavière, Munich."
  },
  "cfrisingfog": {
    "text": [
      "Les crêtes s’étagent les unes derrière les autres, et un brouillard blanc monte des vallées.",
      "Devant, un petit arbre dénudé se dresse sur la pente."
    ],
    "fact": "vers 1819. Collections de peinture de l’État de Bavière, Munich."
  },
  "cfdriftingcloud": {
    "text": [
      "Des nuages épais passent sur un plateau vert et cachent presque les sommets.",
      "Un petit lac reflète la lumière froide."
    ],
    "fact": "vers 1820. Hamburger Kunsthalle."
  },
  "cfmistbank": {
    "text": [
      "Un paysage plat s’étend sous un ciel agité, et la brume passe sur les champs.",
      "Au milieu se trouve une cabane solitaire au toit de chaume."
    ],
    "fact": "vers 1820. Hamburger Kunsthalle."
  },
  "cfmorningmtn": {
    "text": [
      "Des pentes rocheuses s’ouvrent sur une large vallée pleine de brume matinale.",
      "Les montagnes lointaines ne sont plus que de pâles lignes bleues."
    ],
    "fact": "vers 1820. Musée de l’Ermitage, Saint-Pétersbourg."
  },
  "cfgreifharbour2": {
    "text": [
      "Dans la lumière du soir, un grand voilier est amarré au port de Greifswald.",
      "Sur le quai se tiennent des gens et des tonneaux, et le ciel rougeoie de jaune et de rose."
    ],
    "fact": "1818–1820. Alte Nationalgalerie, Berlin."
  },
  "cfgreifmeadows": {
    "text": [
      "De vastes prés verts s’étendent jusqu’à l’horizon, où se dresse la silhouette de Greifswald avec ses clochers.",
      "Quelques chevaux paissent dans la lumière claire."
    ],
    "fact": "1821–1822. Hamburger Kunsthalle."
  },
  "cfflatland": {
    "text": [
      "Un village aux toits rouges et un moulin à vent se trouvent dans un pays plat sous un ciel haut et calme.",
      "Le tableau montre peut-être Rügen ou la région de Greifswald."
    ],
    "fact": "vers 1822. Fondation des châteaux et jardins prussiens, Berlin."
  },
  "cfwindmills": {
    "text": [
      "Derrière une eau calme se dressent des moulins à vent et une maison blanche sur la rive.",
      "Une barque glisse tranquillement sur l’eau."
    ],
    "fact": "1822–1823. Fondation des châteaux et jardins prussiens, Berlin."
  },
  "cfflatbodden": {
    "text": [
      "Sur la rive plate de la baie se tiennent quelques petites silhouettes, et au large un voilier.",
      "Un grand ciel nuageux s’étend au-dessus de tout."
    ],
    "fact": "vers 1830. Museum Georg Schäfer, Schweinfurt."
  },
  "cfdresdeneve": {
    "text": [
      "Le soleil se couche derrière les tours de la Hofkirche et du château, avec des nuages roses dans le ciel.",
      "En bas du petit tableau, Friedrich a inscrit Abend et octobre 1824."
    ],
    "fact": "1824. Collection particulière."
  },
  "cfwatzmann": {
    "text": [
      "Derrière des pentes vertes et des rochers s’élève le Watzmann enneigé.",
      "Friedrich n’est jamais allé dans les Alpes et a peint la montagne d’après une aquarelle de son élève August Heinrich."
    ],
    "fact": "1824–1825. Alte Nationalgalerie, Berlin."
  },
  "cfelberocks": {
    "text": [
      "Des tours de roche abruptes surgissent de la brume, et des sapins poussent dans les fentes.",
      "Une passerelle étroite franchit une gorge."
    ],
    "fact": "1822–1823. Belvedere, Vienne."
  },
  "cfmeissen": {
    "text": [
      "À travers un passage sombre et voûté, la lumière tombe sur des marches et des pierres.",
      "Au fond, une petite fenêtre s’ouvre sur la clarté."
    ],
    "fact": "vers 1827. Collections d’État d’art de Dresde."
  },
  "cfhuttens": {
    "text": [
      "Dans une église gothique en ruine, un homme se tient devant un tombeau de pierre, et la lumière du soir brille à travers les hautes fenêtres.",
      "Le tableau rappelle le poète Ulrich von Hutten, mort 300 ans plus tôt."
    ],
    "fact": "1823. Klassik Stiftung Weimar."
  },
  "cfearlysnow": {
    "text": [
      "Un chemin clair mène dans une sombre forêt d’épicéas, la première neige posée sur les branches.",
      "De jeunes sapins se tiennent au bord comme de petits gardiens."
    ],
    "fact": "1827. Hamburger Kunsthalle."
  },
  "cfice": {
    "text": [
      "Des blocs de glace s’empilent les uns sur les autres en un pic aigu.",
      "En bas à droite, on reconnaît la poupe d’un navire pris dans la glace."
    ],
    "fact": "1823–1824. Hamburger Kunsthalle."
  },
  "cfnorthmoon": {
    "text": [
      "Des nuages sombres s’ouvrent au-dessus d’une mer froide, et la lune éclaire les rochers et l’eau.",
      "Sur la rive repose une barque."
    ],
    "fact": "vers 1823. Galerie nationale de Prague."
  },
  "cfreef": {
    "text": [
      "D’une mer calme éclairée par la lune surgit un récif pointu comme une montagne dentelée.",
      "Devant, des collines sombres entourent une baie."
    ],
    "fact": "vers 1824. Staatliche Kunsthalle Karlsruhe."
  },
  "cfmoonmen": {
    "text": [
      "Deux hommes en manteau se tiennent à l’orée d’un bois sous un chêne déraciné et regardent la lune.",
      "L’un s’appuie sur l’épaule de l’autre."
    ],
    "fact": "1819–1820. Collections d’État d’art de Dresde."
  },
  "cfmoonmenmet": {
    "text": [
      "Quelques années plus tard, Friedrich peint de nouveau le motif.",
      "Deux hommes se tiennent encore sous l’arbre noueux, et le mince croissant de lune brille entre les branches."
    ],
    "fact": "vers 1825–1830. Metropolitan Museum of Art, New York."
  },
  "cfmooncouple": {
    "text": [
      "Un homme et une femme se tiennent tout près l’un de l’autre sur un chemin forestier et regardent le croissant de lune.",
      "La femme pose la main sur l’épaule de l’homme."
    ],
    "fact": "vers 1824. Alte Nationalgalerie, Berlin."
  },
  "cfmoongrise": {
    "text": [
      "Trois personnes sont assises sur un gros rocher du rivage et regardent la mer, au-dessus de laquelle la lune se lève.",
      "Deux voiliers rentrent au crépuscule."
    ],
    "fact": "1822. Alte Nationalgalerie, Berlin."
  },
  "cfmoonherm": {
    "text": [
      "Sur le rivage, deux silhouettes regardent l’eau, où la lune sort de derrière les nuages.",
      "Le ciel brille d’une lumière dorée."
    ],
    "fact": "1821. Musée de l’Ermitage, Saint-Pétersbourg."
  },
  "cflonetree": {
    "text": [
      "Un vieux chêne se dresse seul dans une vaste plaine devant des montagnes bleues.",
      "Sous lui s’appuie un berger avec son troupeau."
    ],
    "fact": "1822. Alte Nationalgalerie, Berlin."
  },
  "cfcrows": {
    "text": [
      "Un chêne noueux et presque dénudé pousse sur une colline dans la lumière du soir.",
      "Des corneilles tournent autour de ses branches tordues."
    ],
    "fact": "vers 1822. Musée du Louvre, Paris."
  },
  "cfstages": {
    "text": [
      "Sur le rivage se tiennent un vieil homme, un homme plus jeune, une femme et deux enfants avec un petit drapeau.",
      "Au large naviguent cinq bateaux, proches et lointains."
    ],
    "fact": "vers 1834. Musée des beaux-arts, Leipzig."
  },
  "cfwindowwood": {
    "text": [
      "De grands arbres élancés se dressent au clair de lune.",
      "En bas, sur le sol, de petites silhouettes sont assises près d’un feu."
    ],
    "fact": "vers 1823–1830. Alte Nationalgalerie, Berlin."
  },
  "cfriesenberlin": {
    "text": [
      "Des collines sombres occupent le premier plan, et derrière elles les chaînes se perdent dans la chaude lumière du soir.",
      "Le ciel occupe plus de la moitié du tableau."
    ],
    "fact": "vers 1830–1835. Alte Nationalgalerie, Berlin."
  },
  "cfriesenmem": {
    "text": [
      "Devant se trouvent des pierres et un ruisseau, et derrière s’élèvent des montagnes roses et enneigées.",
      "Le tableau est peint bien des années après la marche de 1810."
    ],
    "fact": "vers 1835. Musée de l’Ermitage, Saint-Pétersbourg."
  },
  "cfriesenoslo": {
    "text": [
      "Par-delà une lande brune aux petits arbres, on voit des crêtes bleues et lointaines.",
      "De légers nuages traversent le ciel."
    ],
    "fact": "vers 1835. Musée national, Oslo."
  },
  "cfriesensun": {
    "text": [
      "La lumière du soleil perce entre les nuages et tombe sur des pentes vertes plantées d’épicéas.",
      "Une partie des montagnes reste dans l’ombre."
    ],
    "fact": "vers 1835. Saint Louis Art Museum."
  },
  "cfriesenpeaks": {
    "text": [
      "Un tronc d’arbre tombé barre une prairie, avec des épicéas derrière.",
      "Au-dessus des nuages s’élève un sommet dentelé."
    ],
    "fact": "vers 1835. Kimbell Art Museum, Fort Worth."
  },
  "cfrosenberg": {
    "text": [
      "Au-delà de collines et de vallées brunes, on voit le Rosenberg en forme de cône dans la brume.",
      "La lumière est douce et claire."
    ],
    "fact": "vers 1835. Städel Museum, Francfort."
  },
  "cfeldenamtn": {
    "text": [
      "Les ruines de l’abbaye d’Eldena se dressent sur un plateau devant les monts des Géants.",
      "En réalité, les deux lieux sont distants de centaines de kilomètres."
    ],
    "fact": "vers 1830–1834. Musée d’État de Poméranie, Greifswald."
  },
  "cfbohemia28": {
    "text": [
      "Des champs vert-jaune aux sillons bruns s’étendent jusqu’à de douces collines.",
      "En haut à gauche, Friedrich a noté le lieu et la date."
    ],
    "fact": "1828. Musée d’État de Poméranie, Greifswald."
  },
  "cfmoonshore": {
    "text": [
      "La lune brille sur l’eau entre des pierres et des nuages sombres.",
      "Il passe pour l’une des dernières peintures à l’huile de Friedrich."
    ],
    "fact": "1835–1836. Hamburger Kunsthalle."
  },
  "cfowlgothic": {
    "text": [
      "Une chouette est posée dans une étroite niche gothique en pierre, avec une lueur claire derrière elle.",
      "La feuille est dessinée à la sépia."
    ],
    "fact": "vers 1836. Musée de l’Ermitage, Saint-Pétersbourg."
  },
  "cfneurathen": {
    "text": [
      "De hautes aiguilles de grès se dressent parmi les épicéas dans les montagnes de grès de l’Elbe.",
      "Devant, de la bruyère pousse sur un rocher."
    ],
    "fact": "vers 1837. Musée de l’Ermitage, Saint-Pétersbourg."
  },
  "cfschmiede": {
    "text": [
      "Un homme s’appuie sur une clôture et regarde par-delà des champs jaunes vers les montagnes bleues.",
      "La délicate aquarelle montre les monts des Géants de mémoire."
    ],
    "fact": "vers 1837. Musée Pouchkine, Moscou."
  },
  "cfeldenaeast": {
    "text": [
      "Le haut mur pignon de l’abbaye en ruine se dresse à côté d’une ferme basse.",
      "Friedrich avait dessiné Eldena maintes fois depuis sa jeunesse."
    ],
    "fact": "1836. Kupferstich-Kabinett, Dresde."
  },
  "cfteplitz": {
    "text": [
      "Sur un papier teinté, Friedrich dessine une crête boisée et, derrière, le Milleschauer pointu au-dessus des nuages.",
      "La feuille porte l’inscription Teplitz et la date du 23 septembre 1835, du temps de sa cure."
    ],
    "fact": "1835. Germanisches Nationalmuseum, Nuremberg."
  },
  "cfgraves": {
    "text": [
      "Dans une plaine claire et vaste se dressent quelques pierres tombales, et devant, une bêche est plantée dans la terre.",
      "Cette feuille silencieuse à la sépia fait partie des œuvres tardives."
    ],
    "fact": "vers 1835–1837. Albertina, Vienne."
  },
  "cflonelybank": {
    "text": [
      "De grosses pierres rondes reposent sur le rivage, et la lune brille au-dessus de l’eau calme.",
      "Friedrich a peint la scène dans de chauds tons de sépia."
    ],
    "fact": "vers 1837. National Gallery of Art, Washington."
  },
  "cfwalkdusk": {
    "text": [
      "Un homme se tient au crépuscule près d’un ancien dolmen, entre des arbres dénudés.",
      "Au-dessus de lui brille le mince croissant de lune."
    ],
    "fact": "vers 1830–1835. J. Paul Getty Museum, Los Angeles."
  },
  "cfsunsetlate": {
    "text": [
      "Deux hommes se tiennent côte à côte sur une hauteur et regardent le soleil se coucher sur la mer.",
      "Leurs silhouettes sont presque noires contre le ciel lumineux."
    ],
    "fact": "vers 1830–1835. Musée de l’Ermitage, Saint-Pétersbourg."
  },
  "cfeveningstar": {
    "text": [
      "Une famille rentre à la maison sur une colline verte, et un enfant fait signe les bras levés.",
      "À l’horizon se dressent les tours de Dresde, et au-dessus brille l’étoile du soir."
    ],
    "fact": "vers 1830. Freies Deutsches Hochstift, Francfort."
  },
  "cfgrossegehege": {
    "text": [
      "Après une crue, des flaques restent sur les prés de l’Elbe et reflètent le ciel du soir.",
      "À l’horizon s’étend une rangée sombre d’arbres."
    ],
    "fact": "1832. Collections d’État d’art de Dresde."
  },
  "cfeastermorn": {
    "text": [
      "Trois femmes marchent tôt le matin sur un chemin entre des arbres dénudés.",
      "Au-dessus d’elles brille encore la lune pâle."
    ],
    "fact": "vers 1828–1835. Museo Nacional Thyssen-Bornemisza, Madrid."
  },
  "cfeveningbaltic": {
    "text": [
      "Sur la plage, des gens sont assis près d’un petit feu, et au large des voiliers reposent sur l’eau calme.",
      "Le ciel est plein de nuages du soir."
    ],
    "fact": "vers 1831. Collections d’État d’art de Dresde."
  },
  "cfharboureve": {
    "text": [
      "De nombreux mâts et voiles se serrent dans le port.",
      "La dernière lumière colore le ciel de violet et de jaune."
    ],
    "fact": "vers 1828. Collections d’État d’art de Dresde."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
