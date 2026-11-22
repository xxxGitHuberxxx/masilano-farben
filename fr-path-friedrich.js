// v10.0 FR content for Caspar David Friedrich’s life journey, Part 1 (1774–1817). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Kunsthalle Mannheim": "Kunsthalle Mannheim",
  "Pommersches Landesmuseum, Greifswald": "Musée d’État de Poméranie, Greifswald",
  "Statens Museum for Kunst, Kopenhagen": "SMK – Galerie nationale du Danemark, Copenhague",
  "Hamburger Kunsthalle": "Hamburger Kunsthalle",
  "Staatliche Kunsthalle Karlsruhe": "Staatliche Kunsthalle Karlsruhe",
  "Kupferstichkabinett, Berlin": "Kupferstichkabinett, Berlin",
  "Hamburger Kunsthalle, Kupferstichkabinett": "Hamburger Kunsthalle, cabinet des estampes",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Klassik Stiftung Weimar": "Klassik Stiftung Weimar",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Albertina, Wien": "Albertina, Vienne",
  "Staatliche Kunstsammlungen Dresden": "Collections d’État d’art de Dresde",
  "Österreichische Galerie Belvedere, Wien": "Belvedere, Vienne",
  "Staatsgalerie Stuttgart": "Staatsgalerie Stuttgart",
  "Thüringer Landesmuseum Heidecksburg, Rudolstadt": "Musée d’État Heidecksburg, Rudolstadt",
  "Alte Nationalgalerie, Berlin": "Alte Nationalgalerie, Berlin",
  "Museum Folkwang, Essen": "Museum Folkwang, Essen",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Puschkin-Museum, Moskau": "Musée Pouchkine, Moscou",
  "National Gallery, London": "National Gallery, Londres",
  "Museum für Kunst und Kulturgeschichte, Dortmund": "Musée d’art et d’histoire culturelle, Dortmund",
  "Privatsammlung": "Collection particulière",
  "Stiftung Preussische Schlösser und Gärten, Berlin": "Fondation des châteaux et jardins prussiens, Berlin",
  "Nationalmuseum Oslo": "Musée national, Oslo"
});
  P.works = Object.assign(P.works || {}, {
  "cffatherread": {
    "title": "Le Père lisant",
    "museum": "Kunsthalle Mannheim"
  },
  "cffather": {
    "title": "Portrait du père",
    "museum": "Musée d’État de Poméranie, Greifswald"
  },
  "cfheiden": {
    "title": "Mère Heiden",
    "museum": "Musée d’État de Poméranie, Greifswald"
  },
  "cfself00": {
    "title": "Autoportrait",
    "museum": "SMK – Galerie nationale du Danemark, Copenhague"
  },
  "cfluisen": {
    "title": "La source Luise à Frederiksdal",
    "museum": "Hamburger Kunsthalle"
  },
  "cfemilia": {
    "title": "La source d’Emilia près de Copenhague",
    "museum": "Hamburger Kunsthalle"
  },
  "cfpavillon": {
    "title": "Paysage avec pavillon",
    "museum": "Hamburger Kunsthalle"
  },
  "cfcopen": {
    "title": "Paysage près de Copenhague",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "cfoak": {
    "title": "Chêne",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfwasserburg": {
    "title": "Paysage au clair de lune avec la ruine d’un château",
    "museum": "SMK – Galerie nationale du Danemark, Copenhague"
  },
  "cfamselfall": {
    "title": "La cascade de l’Amselfall près de Rathen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfkriebstein": {
    "title": "Le château de Kriebstein près de Waldheim",
    "museum": "Musée d’État de Poméranie, Greifswald"
  },
  "cftharandt": {
    "title": "Ruine, église et maisons à Tharandt",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfelbstr": {
    "title": "Route au bord de l’Elbe avec une arche en ruine",
    "museum": "Hamburger Kunsthalle"
  },
  "cftrees": {
    "title": "Groupe d’arbres",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfclouds": {
    "title": "Étude de nuages",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfflatruegen": {
    "title": "Paysage plat sur l’île de Rügen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfziehbrunnen": {
    "title": "Cabane avec puits sur l’île de Rügen",
    "museum": "Musée d’État de Poméranie, Greifswald"
  },
  "cfselfarm": {
    "title": "Autoportrait accoudé",
    "museum": "Hamburger Kunsthalle"
  },
  "cfarkonasun": {
    "title": "Vue d’Arkona au soleil levant",
    "museum": "Hamburger Kunsthalle"
  },
  "cfsteg": {
    "title": "Passerelle sur une rivière devant un groupe d’arbres",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cfruegenbay": {
    "title": "Paysage de Rügen avec une baie",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfpilgrim": {
    "title": "Pèlerinage au lever du soleil",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfmadonna": {
    "title": "Statue de la Vierge dans la montagne",
    "museum": "Art Institute of Chicago"
  },
  "cfshepherd": {
    "title": "La côte est de Rügen avec un berger",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cfarkonamoon": {
    "title": "Vue d’Arkona au lever de la lune",
    "museum": "Albertina, Vienne"
  },
  "cfdeadoak": {
    "title": "Paysage d’été avec un chêne mort",
    "museum": "Klassik Stiftung Weimar"
  },
  "cftetschen": {
    "title": "La Croix dans la montagne (autel de Tetschen)",
    "museum": "Collections d’État d’art de Dresde"
  },
  "cfdolmen": {
    "title": "Dolmen sous la neige",
    "museum": "Collections d’État d’art de Dresde"
  },
  "cfelbtal": {
    "title": "Vue de la vallée de l’Elbe",
    "museum": "Collections d’État d’art de Dresde"
  },
  "cffog": {
    "title": "Rivage dans le brouillard",
    "museum": "Belvedere, Vienne"
  },
  "cffisher": {
    "title": "Rivage avec un pêcheur",
    "museum": "Belvedere, Vienne"
  },
  "cfbohemia": {
    "title": "Paysage de Bohême",
    "museum": "Staatsgalerie Stuttgart"
  },
  "cfmorningfog": {
    "title": "Brume matinale dans la montagne",
    "museum": "Musée d’État Heidecksburg, Rudolstadt"
  },
  "cfmonk": {
    "title": "Le Moine au bord de la mer",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfoakabbey": {
    "title": "L’Abbaye dans une forêt de chênes",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfrainbow": {
    "title": "Paysage de montagne avec arc-en-ciel",
    "museum": "Museum Folkwang, Essen"
  },
  "cfself10": {
    "title": "Autoportrait",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfnewmoon": {
    "title": "Nouvelle lune sur les monts des Géants",
    "museum": "National Gallery of Art, Washington"
  },
  "cfriesenmorning": {
    "title": "Matin dans les monts des Géants",
    "museum": "Fondation des châteaux et jardins prussiens, Berlin"
  },
  "cfwarmbrunn": {
    "title": "Vue de Warmbrunn vers la Kleine Sturmhaube",
    "museum": "Musée Pouchkine, Moscou"
  },
  "cfharz": {
    "title": "Gorge rocheuse dans le Harz",
    "museum": "Musée d’État de Poméranie, Greifswald"
  },
  "cfwinterlon": {
    "title": "Paysage d’hiver",
    "museum": "National Gallery, Londres"
  },
  "cfwinterchurch": {
    "title": "Paysage d’hiver avec église",
    "museum": "Musée d’art et d’histoire culturelle, Dortmund"
  },
  "cfcrosswood": {
    "title": "Croix dans la forêt",
    "museum": "Staatsgalerie Stuttgart"
  },
  "cfheroes": {
    "title": "Tombeaux de héros anciens",
    "museum": "Hamburger Kunsthalle"
  },
  "cfchasseur": {
    "title": "Le Chasseur dans la forêt",
    "museum": "Collection particulière"
  },
  "cfcrossbaltic": {
    "title": "Croix au bord de la Baltique",
    "museum": "Fondation des châteaux et jardins prussiens, Berlin"
  },
  "cfharbour": {
    "title": "Vue d’un port",
    "museum": "Fondation des châteaux et jardins prussiens, Berlin"
  },
  "cftwomen": {
    "title": "Deux hommes au bord de la mer",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfafterstorm": {
    "title": "Après la tempête",
    "museum": "SMK – Galerie nationale du Danemark, Copenhague"
  },
  "cfgreifsmoon": {
    "title": "Greifswald au clair de lune",
    "museum": "Musée national, Oslo"
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
  "cfgreifswald": {
    "place": "Greifswald",
    "when": "1774–1794",
    "mapLabel": "Greifswald",
    "intro": [
      "Caspar David Friedrich naît à Greifswald le 5 septembre 1774, sixième des dix enfants du savonnier et cirier Adolf Gottlieb Friedrich et de Sophie Dorothea. Sa mère meurt en 1781, alors qu’il a sept ans.",
      "En 1787, son frère Johann Christoffer meurt aussi, en tentant de le sauver d’un accident sur la glace. La perte reste longtemps présente. Adolescent, il prend des leçons de dessin chez Johann Gottfried Quistorp à Greifswald."
    ]
  },
  "cfcopenhagen": {
    "place": "L’académie de Copenhague",
    "when": "1794–1798",
    "mapLabel": "Copenhague",
    "intro": [
      "De 1794 à 1798, Friedrich étudie à l’Académie royale de Copenhague, auprès de Jens Juel, Nicolai Abildgaard et Christian August Lorentzen. Il dessine dans les environs de la ville, près des sources, des pavillons et dans des paysages au clair de lune.",
      "L’académie danoise passe alors pour l’une des meilleures du Nord. Il y apprend à regarder la nature avec exactitude et l’ordre calme et clair qui marquera plus tard ses paysages."
    ]
  },
  "cfdresden": {
    "place": "Arrivée à Dresde",
    "when": "1798–1800",
    "mapLabel": "Dresde",
    "intro": [
      "À l’automne 1798, Friedrich s’installe à Dresde. La ville, avec sa galerie de peinture et les paysages de l’Elbe, sera son foyer pour le reste de sa vie.",
      "En 1799, il expose pour la première fois à l’exposition de l’académie de Dresde. Il marche dans la Suisse saxonne et les vallées des environs et dessine des arbres, des rochers, des châteaux et des nuages."
    ]
  },
  "cfruegen": {
    "place": "Rügen et Greifswald",
    "when": "1801–1803",
    "mapLabel": "Rügen",
    "intro": [
      "En 1801, Friedrich se rend pour la première fois sur l’île de Rügen et séjourne longuement à Greifswald. Il parcourt l’île à pied et dessine des côtes, des champs, des cabanes et le cap Arkona.",
      "À l’été 1802, il est de retour à Dresde. Il y rencontre le poète Ludwig Tieck et le peintre Philipp Otto Runge. Il travaille désormais beaucoup à la plume, au pinceau et à la sépia."
    ]
  },
  "cfsepia": {
    "place": "La sépia et le prix de Weimar",
    "when": "1803–1806",
    "mapLabel": "Loschwitz",
    "intro": [
      "En 1803, Friedrich prend un logement d’été à Loschwitz, près de Dresde, et fait une première marche à travers la Bohême du Nord. Dans de grandes feuilles à la sépia, il développe des paysages vastes et silencieux, faits de lumière et de brume.",
      "Le 25 août 1805, il reçoit à Weimar la moitié du prix des Amis de l’art réunis autour de Goethe, pour deux dessins à la sépia : une procession dans la lumière du matin et des pêcheurs sur la plage. Son nom se fait ainsi connaître au-delà de Dresde."
    ]
  },
  "cftetschenst": {
    "place": "La Bohême et l’autel de Tetschen",
    "when": "1807–1808",
    "mapLabel": "Bohême",
    "intro": [
      "En 1807, Friedrich parcourt de nouveau la Bohême et commence à peindre à l’huile. Les nouveaux tableaux montrent de la brume sur la mer, des collines enneigées et de larges vallées où la vie humaine se fait rare.",
      "À Noël 1808, il montre dans son atelier la Croix dans la montagne, appelée plus tard autel de Tetschen. Le critique Basilius von Ramdohr attaque durement le tableau, tandis que des peintres comme Gerhard von Kügelgen le défendent. La querelle rend Friedrich largement connu."
    ]
  },
  "cfmonkst": {
    "place": "Le Moine au bord de la mer",
    "when": "1809–1810",
    "mapLabel": "Berlin",
    "intro": [
      "À l’automne 1810, Friedrich présente à l’exposition de l’académie de Berlin deux tableaux formant une paire : Le Moine au bord de la mer et L’Abbaye dans une forêt de chênes. À l’initiative du jeune prince héritier, la maison royale de Prusse acquiert les deux tableaux.",
      "La même année, Friedrich devient membre externe de l’académie de Berlin. Le 18 septembre 1810, Goethe lui rend visite dans son atelier de Dresde. Parmi ses amis figurent désormais l’écrivain Heinrich von Kleist et le peintre Georg Friedrich Kersting."
    ]
  },
  "cfmountains": {
    "place": "Monts des Géants et Harz",
    "when": "1810–1811",
    "mapLabel": "Monts des Géants",
    "intro": [
      "À l’été 1810, Friedrich parcourt à pied les monts des Géants avec Georg Friedrich Kersting. Pendant de longues années, il utilise ses croquis de sommets, de crêtes et de brume matinale pour ses tableaux.",
      "En juin 1811 suit une marche à travers le Harz avec le sculpteur Christian Gottlieb Kühn. En juillet, il rend visite à Goethe à Iéna. Ces années voient aussi naître de calmes tableaux d’hiver avec des églises et des sapins dans la neige."
    ]
  },
  "cfliberation": {
    "place": "Les guerres de libération",
    "when": "1812–1817",
    "mapLabel": "Greifswald",
    "intro": [
      "Pendant les guerres de libération contre Napoléon, en 1813 et 1814, Friedrich peint des tableaux pleins du souvenir de héros anciens et de tombeaux. Son ami Kersting part à la guerre comme volontaire. En 1814, Friedrich montre à Dresde Tombeaux de héros anciens et Le Chasseur dans la forêt.",
      "En 1816, le roi de Prusse achète Vue d’un port et l’offre au prince héritier. La même année, Friedrich devient membre de l’académie de Dresde. En 1817, il peint Deux hommes au bord de la mer, Après la tempête et Greifswald au clair de lune."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cffatherread": {
    "text": [
      "Un vieil homme à lunettes est assis à une table et lit un gros livre.",
      "Friedrich dessine son père Adolf Gottlieb dans un médaillon ovale."
    ],
    "fact": "vers 1801. Kunsthalle Mannheim."
  },
  "cffather": {
    "text": [
      "Le père porte une haute toque de fourrure et un manteau à col de fourrure.",
      "Il regarde de côté, calme et grave."
    ],
    "fact": "1798. Musée d’État de Poméranie, Greifswald."
  },
  "cfheiden": {
    "text": [
      "Une femme âgée en bonnet plissé regarde hors du tableau.",
      "Après la mort de la mère, Mère Heiden, la gouvernante, a aidé à élever les enfants de la famille."
    ],
    "fact": "vers 1798. Musée d’État de Poméranie, Greifswald."
  },
  "cfself00": {
    "text": [
      "Le jeune Friedrich nous regarde de ses grands yeux attentifs.",
      "Au bas de la feuille figurent des lignes de sa main."
    ],
    "fact": "vers 1800. SMK – Galerie nationale du Danemark, Copenhague."
  },
  "cfluisen": {
    "text": [
      "Sous de grands arbres se dresse un petit monument au-dessus d’une source.",
      "Deux hommes et un chien se reposent devant, à l’ombre."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfemilia": {
    "text": [
      "Une stèle commémorative se dresse au bord d’un jardin, derrière une clôture.",
      "L’étudiant Friedrich peint le lieu à l’aquarelle légère."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfpavillon": {
    "text": [
      "Derrière une clôture de bois et des pierres se dresse un pavillon à toit-terrasse.",
      "À droite se courbe un arbre dénudé."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfcopen": {
    "text": [
      "Depuis une colline, la vue s’étend sur les champs et les bois jusqu’aux tours de la ville.",
      "Un arbre noueux encadre le panorama."
    ],
    "fact": "1797. Staatliche Kunsthalle Karlsruhe."
  },
  "cfoak": {
    "text": [
      "Au crayon, Friedrich suit chaque branche d’un vieux chêne.",
      "En bas à gauche figure l’année 1797."
    ],
    "fact": "1797. Kupferstichkabinett, Berlin."
  },
  "cfwasserburg": {
    "text": [
      "La lune brille à travers les nuages sur un pont-levis et une tour en ruine.",
      "Dès Copenhague, Friedrich s’intéresse à la lumière de la nuit."
    ],
    "fact": "1797. SMK – Galerie nationale du Danemark, Copenhague."
  },
  "cfamselfall": {
    "text": [
      "Un ruisseau tombe entre des blocs de rocher et des sapins.",
      "Friedrich dessine la Suisse saxonne d’un crayon fin."
    ],
    "fact": "1799. Hamburger Kunsthalle."
  },
  "cfkriebstein": {
    "text": [
      "Haut au-dessus de la vallée, le château se dresse sur son rocher.",
      "Friedrich le saisit en lignes et lavis délicats."
    ],
    "fact": "1799. Musée d’État de Poméranie, Greifswald."
  },
  "cftharandt": {
    "text": [
      "À gauche se dresse une tour de château en ruine, à droite une église au clocher pointu.",
      "Beaucoup n’est qu’esquissé de traits légers."
    ],
    "fact": "1799. Kupferstichkabinett, Berlin."
  },
  "cfelbstr": {
    "text": [
      "À travers une vieille arche de pierre, on voit le fleuve et l’autre rive.",
      "Des tonneaux et des caisses bordent le chemin."
    ],
    "fact": "1799. Hamburger Kunsthalle."
  },
  "cftrees": {
    "text": [
      "Deux grands arbres feuillus poussent côte à côte.",
      "À la plume et au pinceau, Friedrich donne à chaque touffe de feuilles ombre et lumière."
    ],
    "fact": "1799. Kupferstichkabinett, Berlin."
  },
  "cfclouds": {
    "text": [
      "Une page de carnet ne montre que des nuages, en contours fins.",
      "Friedrich observe le ciel aussi attentivement que les arbres et les rochers."
    ],
    "fact": "1799. Kupferstichkabinett, Berlin."
  },
  "cfflatruegen": {
    "text": [
      "Le regard s’étend sur des champs plats et des haies jusqu’à l’horizon.",
      "Une fine grille aide Friedrich à dessiner exactement la vaste étendue."
    ],
    "fact": "1801. Hamburger Kunsthalle."
  },
  "cfziehbrunnen": {
    "text": [
      "Une colline traverse la feuille en diagonale ; à droite se dresse une cabane avec un puits.",
      "En haut à gauche, Friedrich note la date."
    ],
    "fact": "1802. Musée d’État de Poméranie, Greifswald."
  },
  "cfselfarm": {
    "text": [
      "Friedrich appuie la tête sur sa main et tient une plume à dessin.",
      "À côté de lui s’ouvre une fenêtre garnie de plantes."
    ],
    "fact": "vers 1802. Hamburger Kunsthalle."
  },
  "cfarkonasun": {
    "text": [
      "Le soleil enveloppe la côte de Rügen d’une lumière chaude.",
      "Une barque est posée sur la rive, et les arbres ploient sous le vent."
    ],
    "fact": "1803. Hamburger Kunsthalle."
  },
  "cfsteg": {
    "text": [
      "Une étroite passerelle franchit une rivière, avec de hauts peupliers derrière.",
      "Friedrich a gravé lui-même cette feuille."
    ],
    "fact": "vers 1800. Metropolitan Museum of Art, New York."
  },
  "cfruegenbay": {
    "text": [
      "Derrière des collines et des champs brille une large baie.",
      "Le ciel occupe plus de la moitié de l’image."
    ],
    "fact": "1802. Klassik Stiftung Weimar."
  },
  "cfpilgrim": {
    "text": [
      "Une longue procession franchit une colline vers une croix.",
      "La sépia fait disparaître le paysage dans une claire brume matinale."
    ],
    "fact": "vers 1805. Klassik Stiftung Weimar."
  },
  "cfmadonna": {
    "text": [
      "Sur un rocher au-dessus des sapins se dresse une petite statue de la Vierge.",
      "La brume sépare les plans de la forêt."
    ],
    "fact": "vers 1804. Art Institute of Chicago."
  },
  "cfshepherd": {
    "text": [
      "Un berger se tient avec son troupeau au-dessus de la mer.",
      "Le ciel est presque vide et clair."
    ],
    "fact": "vers 1806. Metropolitan Museum of Art, New York."
  },
  "cfarkonamoon": {
    "text": [
      "La lune se lève sur la mer, et la côte reste dans l’ombre.",
      "Des filets de pêche sèchent sur la rive."
    ],
    "fact": "vers 1805. Albertina, Vienne."
  },
  "cfdeadoak": {
    "text": [
      "Un chêne dénudé se dresse au milieu d’un paysage d’été.",
      "Friedrich place côte à côte la vie et le passage du temps."
    ],
    "fact": "vers 1805. Klassik Stiftung Weimar."
  },
  "cftetschen": {
    "text": [
      "Sur un sommet rocheux, une croix se dresse entre des sapins, et derrière rayonne la lumière du soir.",
      "Friedrich peint un paysage comme retable."
    ],
    "fact": "1807–1808. Collections d’État d’art de Dresde."
  },
  "cfdolmen": {
    "text": [
      "Trois chênes dénudés entourent une ancienne tombe de pierre dans la neige.",
      "La tombe évoque un passé lointain."
    ],
    "fact": "1807. Collections d’État d’art de Dresde."
  },
  "cfelbtal": {
    "text": [
      "Au premier plan, des sapins sombres se dressent sur une colline.",
      "Derrière s’ouvre la vallée de l’Elbe dans la brume du matin."
    ],
    "fact": "vers 1807. Collections d’État d’art de Dresde."
  },
  "cffog": {
    "text": [
      "Une ancre repose sur la plage, et une barque disparaît presque dans le brouillard gris.",
      "C’est l’une des premières peintures à l’huile de Friedrich."
    ],
    "fact": "vers 1807. Belvedere, Vienne."
  },
  "cffisher": {
    "text": [
      "Un pêcheur se tient près de ses filets sur le rivage plat.",
      "Le ciel et la mer se confondent dans la brume."
    ],
    "fact": "vers 1807. Belvedere, Vienne."
  },
  "cfbohemia": {
    "text": [
      "Au-dessus d’une plaine sombre s’élève une seule montagne bleue.",
      "Le ciel passe du jaune pâle au bleu clair."
    ],
    "fact": "vers 1808. Staatsgalerie Stuttgart."
  },
  "cfmorningfog": {
    "text": [
      "La brume monte de la vallée et enveloppe un sommet.",
      "On distingue une petite croix au sommet du rocher."
    ],
    "fact": "1808. Musée d’État Heidecksburg, Rudolstadt."
  },
  "cfmonk": {
    "text": [
      "Une petite silhouette se tient sur la plage devant la mer sombre et un ciel immense.",
      "Presque personne n’avait encore peint un paysage aussi vide."
    ],
    "fact": "1808–1810. Alte Nationalgalerie, Berlin."
  },
  "cfoakabbey": {
    "text": [
      "Entre des chênes dénudés se dresse la ruine d’une église gothique dans la lumière du soir.",
      "Au-dessus apparaît le mince croissant de la lune."
    ],
    "fact": "1809–1810. Alte Nationalgalerie, Berlin."
  },
  "cfrainbow": {
    "text": [
      "Un arc-en-ciel s’étend au-dessus d’une montagne sombre.",
      "Devant, un voyageur est assis sur un rocher."
    ],
    "fact": "vers 1810. Museum Folkwang, Essen."
  },
  "cfself10": {
    "text": [
      "Avec sa barbe et ses boucles, Friedrich nous regarde gravement et intensément.",
      "Le fin dessin à la craie date de l’année de son succès à Berlin."
    ],
    "fact": "vers 1810. Kupferstichkabinett, Berlin."
  },
  "cfnewmoon": {
    "text": [
      "Le mince croissant de lune se tient au-dessus des crêtes bleues des montagnes.",
      "La feuille associe aquarelle et crayon."
    ],
    "fact": "vers 1810. National Gallery of Art, Washington."
  },
  "cfriesenmorning": {
    "text": [
      "Au-dessus d’une mer de crêtes s’élève un rocher portant une croix.",
      "Friedrich peint le tableau après sa marche avec Kersting."
    ],
    "fact": "1810–1811. Fondation des châteaux et jardins prussiens, Berlin."
  },
  "cfwarmbrunn": {
    "text": [
      "Au-delà de prés verts et de bois s’élèvent des crêtes bleues.",
      "Le plus haut sommet est dans la lumière."
    ],
    "fact": "vers 1810. Musée Pouchkine, Moscou."
  },
  "cfharz": {
    "text": [
      "De hautes parois rocheuses et des arbres enserrent une gorge étroite.",
      "La marche à travers le Harz en 1811 donne à Friedrich bien des motifs de ce genre."
    ],
    "fact": "vers 1811. Musée d’État de Poméranie, Greifswald."
  },
  "cfwinterlon": {
    "text": [
      "Dans la neige, un homme se repose contre un rocher devant de jeunes sapins.",
      "Derrière, dans la brume, apparaît une église gothique."
    ],
    "fact": "1811. National Gallery, Londres."
  },
  "cfwinterchurch": {
    "text": [
      "Des sapins se dressent dans la neige, et derrière eux une église sort de la brume.",
      "Le tableau fait pendant au paysage d’hiver de Londres."
    ],
    "fact": "1811. Musée d’art et d’histoire culturelle, Dortmund."
  },
  "cfcrosswood": {
    "text": [
      "Entre de hauts sapins se dresse une croix près d’une source.",
      "Une lumière claire passe entre les troncs."
    ],
    "fact": "vers 1812. Staatsgalerie Stuttgart."
  },
  "cfheroes": {
    "text": [
      "Dans une gorge rocheuse se dressent de vieux tombeaux ; l’un est dédié à un héros de la liberté.",
      "Friedrich peint le tableau pendant l’occupation napoléonienne."
    ],
    "fact": "1812. Hamburger Kunsthalle."
  },
  "cfchasseur": {
    "text": [
      "Un soldat français isolé se tient devant une épaisse forêt de sapins enneigés.",
      "Un corbeau est perché sur une souche."
    ],
    "fact": "1813–1814. Collection particulière."
  },
  "cfcrossbaltic": {
    "text": [
      "Sur des rochers au bord de la mer se dresse une haute croix devant le ciel du soir.",
      "Des navires se devinent à l’horizon."
    ],
    "fact": "1815. Fondation des châteaux et jardins prussiens, Berlin."
  },
  "cfharbour": {
    "text": [
      "De grands voiliers reposent dans le port, et le ciel brille de jaune.",
      "Le roi de Prusse achète le tableau en 1816 pour le prince héritier."
    ],
    "fact": "1815–1816. Fondation des châteaux et jardins prussiens, Berlin."
  },
  "cftwomen": {
    "text": [
      "Deux hommes se tiennent sur des pierres au bord du rivage et regardent la mer au crépuscule.",
      "Ils nous tournent le dos."
    ],
    "fact": "1817. Alte Nationalgalerie, Berlin."
  },
  "cfafterstorm": {
    "text": [
      "Une barque gît de travers entre des rochers sur la rive, son mât pointe en biais vers le ciel.",
      "La mer est de nouveau calme."
    ],
    "fact": "1817. SMK – Galerie nationale du Danemark, Copenhague."
  },
  "cfgreifsmoon": {
    "text": [
      "Derrière des filets de pêche dans la prairie se détachent les tours de Greifswald.",
      "La lune se tient au-dessus de la ville natale du peintre."
    ],
    "fact": "vers 1817. Musée national, Oslo."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
