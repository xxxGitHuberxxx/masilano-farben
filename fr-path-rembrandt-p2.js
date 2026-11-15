// v9.7 FR content for Rembrandt’s life journey, Part 2 (1642–1669), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "National Gallery, London": "National Gallery, Londres",
  "Gemäldegalerie, Berlin": "Gemäldegalerie, Berlin",
  "Kunsthistorisches Museum, Wien": "Kunsthistorisches Museum, Vienne",
  "Frick Collection, New York": "Frick Collection, New York",
  "Mauritshuis, Den Haag": "Mauritshuis, La Haye",
  "Nationalmuseum, Stockholm": "Nationalmuseum, Stockholm",
  "Royal Collection, London": "Royal Collection, Londres",
  "Dulwich Picture Gallery, London": "Dulwich Picture Gallery, Londres",
  "Gemäldegalerie Alte Meister, Kassel": "Gemäldegalerie Alte Meister, Kassel",
  "Musée du Louvre, Paris": "Musée du Louvre, Paris",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Hammer Museum, Los Angeles": "Hammer Museum, Los Angeles",
  "Herzog Anton Ulrich-Museum, Braunschweig": "Herzog Anton Ulrich-Museum, Brunswick",
  "National Gallery of Victoria, Melbourne": "National Gallery of Victoria, Melbourne",
  "Kenwood House, London": "Kenwood House, Londres",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Cologne",
  "Eremitage, Sankt Petersburg": "Ermitage, Saint-Pétersbourg"
});
  P.works = Object.assign(P.works || {}, {
  "rbselfflat": {
    "title": "Autoportrait au bonnet plat",
    "museum": "Royal Collection, Londres"
  },
  "rbadultery": {
    "title": "Le Christ et la femme adultère",
    "museum": "National Gallery, Londres"
  },
  "rbgirlwin": {
    "title": "Jeune fille à la fenêtre",
    "museum": "Dulwich Picture Gallery, Londres"
  },
  "rbjosephd": {
    "title": "Le songe de Joseph dans l’étable",
    "museum": "Gemäldegalerie, Berlin"
  },
  "rbthreetrees": {
    "title": "Les trois arbres",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbwinter": {
    "title": "Paysage d’hiver",
    "museum": "Gemäldegalerie Alte Meister, Kassel"
  },
  "rbjansix": {
    "title": "Jan Six",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbephraim": {
    "title": "Ephraim Bueno",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself48": {
    "title": "Autoportrait dessinant à la fenêtre",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbemmaus48": {
    "title": "Le Souper à Emmaüs",
    "museum": "Musée du Louvre, Paris"
  },
  "rbjews": {
    "title": "Juifs dans la synagogue",
    "museum": "National Gallery of Art, Washington"
  },
  "rbhundred": {
    "title": "L’estampe des cent florins",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbfaust": {
    "title": "Un érudit dans son cabinet (Faust)",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbshell": {
    "title": "Le coquillage",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbsixbridge": {
    "title": "Le pont de Six",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbomval": {
    "title": "L’Omval",
    "museum": "National Gallery of Art, Washington"
  },
  "rbmill": {
    "title": "Le Moulin",
    "museum": "National Gallery of Art, Washington"
  },
  "rbgoldfield": {
    "title": "Le champ du peseur d’or",
    "museum": "National Gallery of Art, Washington"
  },
  "rbcott3": {
    "title": "Paysage aux trois maisons à pignons",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbtower": {
    "title": "Paysage à la tour carrée",
    "museum": "National Gallery of Art, Washington"
  },
  "rbmilkman": {
    "title": "Paysage avec un laitier",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbclump": {
    "title": "Groupe d’arbres avec une vue",
    "museum": "Cleveland Museum of Art"
  },
  "rbkitchen": {
    "title": "La servante de cuisine",
    "museum": "Nationalmuseum, Stockholm"
  },
  "rbhenddoor": {
    "title": "Hendrickje Stoffels à une porte",
    "museum": "Gemäldegalerie, Berlin"
  },
  "rbhendmet": {
    "title": "Hendrickje Stoffels",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbself52": {
    "title": "Grand autoportrait",
    "museum": "Kunsthistorisches Museum, Vienne"
  },
  "rbaristotle": {
    "title": "Aristote contemplant le buste d’Homère",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbfloris": {
    "title": "Le porte-étendard (Floris Soop)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbadorelamp": {
    "title": "L’Adoration des bergers à la lampe",
    "museum": "National Gallery of Art, Washington"
  },
  "rbemmaus54": {
    "title": "Le Christ à Emmaüs",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbpolish": {
    "title": "Le Cavalier polonais",
    "museum": "Frick Collection, New York"
  },
  "rbtitusread": {
    "title": "Titus lisant",
    "museum": "Kunsthistorisches Museum, Vienne"
  },
  "rbhaaringh": {
    "title": "Pieter Haaringh",
    "museum": "National Gallery of Art, Washington"
  },
  "rblutma": {
    "title": "L’orfèvre Jan Lutma",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself58": {
    "title": "Autoportrait",
    "museum": "Frick Collection, New York"
  },
  "rbself59": {
    "title": "Autoportrait",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself60": {
    "title": "Autoportrait",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbselfeasel": {
    "title": "Autoportrait au chevalet",
    "museum": "Musée du Louvre, Paris"
  },
  "rbdenial": {
    "title": "Le reniement de saint Pierre",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbtitusmonk": {
    "title": "Titus en habit de moine",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbselfpaul": {
    "title": "Autoportrait en apôtre Paul",
    "museum": "Rijksmuseum, Amsterdam"
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
    "title": "Les syndics de la guilde des drapiers",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbcivilis": {
    "title": "La conjuration de Claudius Civilis",
    "museum": "Nationalmuseum, Stockholm"
  },
  "rbhomer": {
    "title": "Homère",
    "museum": "Mauritshuis, La Haye"
  },
  "rbjuno": {
    "title": "Junon",
    "museum": "Hammer Museum, Los Angeles"
  },
  "rbmanmag": {
    "title": "Homme à la loupe",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbpink": {
    "title": "Femme à l’œillet",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbrihel": {
    "title": "Frederick Rihel à cheval",
    "museum": "National Gallery, Londres"
  },
  "rbjewishbr": {
    "title": "La Fiancée juive",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbfamily": {
    "title": "Portrait de famille",
    "museum": "Herzog Anton Ulrich-Museum, Brunswick"
  },
  "rbwhitehair": {
    "title": "Portrait d’un homme aux cheveux blancs",
    "museum": "National Gallery of Victoria, Melbourne"
  },
  "rboldman67": {
    "title": "Portrait d’un vieil homme",
    "museum": "Mauritshuis, La Haye"
  },
  "rbselfkenwood": {
    "title": "Autoportrait aux deux cercles",
    "museum": "Kenwood House, Londres"
  },
  "rbzeuxis": {
    "title": "Autoportrait en Zeuxis",
    "museum": "Wallraf-Richartz-Museum, Cologne"
  },
  "rbprodigal2": {
    "title": "Le Retour du fils prodigue",
    "museum": "Ermitage, Saint-Pétersbourg"
  },
  "rbsimeon69": {
    "title": "Siméon au Temple",
    "museum": "Nationalmuseum, Stockholm"
  },
  "rbself63": {
    "title": "Autoportrait à l’âge de 63 ans",
    "museum": "National Gallery, Londres"
  },
  "rbself69": {
    "title": "Autoportrait",
    "museum": "Mauritshuis, La Haye"
  }
});
  P.paths = P.paths || {};
  P.paths.rembrandt = {
  "title": "Le parcours de vie de Rembrandt",
  "part": "Parties 1–2 · 1606–1669",
  "subtitle": "Du moulin de Leyde à la Westerkerk",
  "intro": "Accompagne Rembrandt Harmenszoon van Rijn tout au long de sa vie : de sa naissance à Leyde en 1606, en passant par les années d’apprentissage, le succès à Amsterdam, Saskia et la Ronde de nuit, jusqu’à Titus, Hendrickje, la faillite, la Rozengracht, les syndics, les derniers autoportraits et sa mort en 1669.",
  "ending": [
    "Rembrandt meurt à Amsterdam le 4 octobre 1669, à l’âge de soixante-trois ans. Il est enterré le 8 octobre à la Westerkerk.",
    "Ses autoportraits, ses eaux-fortes et ses grands tableaux font de lui l’un des peintres les plus célèbres au monde."
  ],
  "epilogue": "Rembrandt meurt à Amsterdam le 4 octobre 1669 et est enterré à la Westerkerk.",
  "life": "1606–1669"
};
  P.stations = Object.assign(P.stations || {}, {
  "rbtitus": {
    "place": "Une année de silence",
    "when": "1642–1645",
    "mapLabel": "Titus",
    "intro": [
      "En juin 1642, Saskia meurt ; elle est enterrée à l’Oude Kerk d’Amsterdam. Rembrandt reste seul avec le petit Titus, baptisé en septembre 1641.",
      "Dans les années qui suivent, Rembrandt peint moins de commandes. Il se tourne vers de calmes scènes bibliques et grave des paysages comme Les trois arbres."
    ]
  },
  "rbgeertje": {
    "place": "Geertje Dircx",
    "when": "1643–1649",
    "mapLabel": "Geertje",
    "intro": [
      "Vers 1643, la veuve Geertje Dircx arrive dans la maison de la Breestraat comme nourrice de Titus. Elle vit plusieurs années avec Rembrandt.",
      "Rembrandt portraiture des amis comme Jan Six et le médecin Ephraim Bueno. En 1649, Rembrandt et Geertje se séparent après un conflit qui se termine devant un tribunal."
    ]
  },
  "rbhundred": {
    "place": "L’estampe des cent florins",
    "when": "1648–1652",
    "mapLabel": "Gravures",
    "intro": [
      "Vers 1648, Rembrandt termine sa plus célèbre eau-forte : le Christ prêche et guérit les malades. On l’appelle l’estampe des cent florins parce que, dit-on, une épreuve se vendit bientôt cent florins.",
      "Rembrandt collectionne l’art, les coquillages et les objets rares. Il grave un coquillage marin avec une telle précision qu’on reconnaît chaque dessin de sa coquille."
    ]
  },
  "rbland": {
    "place": "Promenades au bord de l’Amstel",
    "when": "1645–1652",
    "mapLabel": "Amstel",
    "intro": [
      "En ces années, Rembrandt sort souvent de la ville, le long de l’Amstel et sur les digues. En chemin, il dessine fermes, ponts et vastes champs.",
      "C’est de là que naissent ses plus belles eaux-fortes de paysage. Avec peu de lignes, il montre la terre plate, le ciel haut et beaucoup de lumière."
    ]
  },
  "rbhend": {
    "place": "Hendrickje Stoffels",
    "when": "1649–1656",
    "mapLabel": "Hendrickje",
    "intro": [
      "Hendrickje Stoffels, de Bredevoort, arrive dans la maison vers 1647 comme gouvernante et devient la compagne de Rembrandt. Ils ne se marient jamais.",
      "En 1654, l’Église réprimande Hendrickje pour vivre avec Rembrandt sans être mariés. En octobre 1654, leur fille Cornelia est baptisée."
    ]
  },
  "rbinsolvent": {
    "place": "Dettes et faillite",
    "when": "1653–1658",
    "mapLabel": "Faillite",
    "intro": [
      "La maison de la Breestraat n’est pas encore payée et les dettes s’accroissent. En juillet 1656, Rembrandt demande à céder ses biens à ses créanciers.",
      "Un inventaire recense ses tableaux, ses livres et ses collections. En 1657 et 1658, tout est vendu aux enchères, y compris la maison."
    ]
  },
  "rbrozen": {
    "place": "La Rozengracht",
    "when": "1658–1661",
    "mapLabel": "Rozengracht",
    "intro": [
      "La famille s’installe dans une maison modeste sur la Rozengracht, dans le quartier du Jordaan. Fin 1660, Hendrickje et Titus fondent un commerce d’art pour lequel travaille Rembrandt.",
      "Il peut ainsi continuer à peindre sans que les créanciers réclament ses tableaux. Il se peint désormais souvent sérieux, calme, avec appui-main et palette."
    ]
  },
  "rbsyndics": {
    "place": "Les syndics et Claudius Civilis",
    "when": "1661–1663",
    "mapLabel": "Syndics",
    "intro": [
      "En 1662, Rembrandt peint les directeurs de la guilde des drapiers, les syndics. Pour le nouvel hôtel de ville, il peint la Conjuration des Bataves sous Claudius Civilis ; le grand tableau lui est bientôt rendu et Rembrandt le découpe.",
      "En 1663, Hendrickje meurt. Elle est enterrée à la Westerkerk. Titus et Cornelia restent avec leur père."
    ]
  },
  "rbbride": {
    "place": "La Fiancée juive",
    "when": "1663–1668",
    "mapLabel": "Œuvre tardive",
    "intro": [
      "Dans ses dernières années, Rembrandt peint avec un pinceau large et une matière épaisse. Dans La Fiancée juive, un homme pose tendrement la main sur la poitrine de son épouse, et elle pose sa main sur la sienne.",
      "En février 1668, Titus épouse Magdalena van Loo. En septembre de la même année, Titus meurt, à seulement 26 ans."
    ]
  },
  "rblate": {
    "place": "Les derniers tableaux",
    "when": "1668–1669",
    "mapLabel": "Westerkerk",
    "intro": [
      "En mars 1669, Titia, la fille de Titus, est baptisée. Rembrandt continue de travailler à ses derniers tableaux, parmi lesquels Le Retour du fils prodigue.",
      "Rembrandt meurt à Amsterdam le 4 octobre 1669. Il est enterré le 8 octobre à la Westerkerk."
    ]
  },
  "rbnight": {
    "place": "La Ronde de nuit",
    "when": "1640–1642",
    "mapLabel": "Ronde",
    "intro": [
      "Vers 1640, Rembrandt peint des paires de portraits de riches Amsterdamois, et en 1641 le prédicateur Cornelis Anslo en conversation avec sa femme. David et Jonathan date de 1642.",
      "En 1642, il termine le grand portrait de groupe de la compagnie de milice de Frans Banninck Cocq pour la salle des Kloveniersdoelen. Le tableau, aujourd’hui connu sous le nom de Ronde de nuit, est plein de mouvement, de lumière et d’ombre."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rbselfflat": {
    "text": [
      "Rembrandt porte un bonnet plat et un vêtement brodé. Il se peint l’année de la Ronde de nuit. Le tableau est à la Royal Collection de Londres."
    ],
    "fact": "1642. Royal Collection, Londres."
  },
  "rbadultery": {
    "text": [
      "Dans un immense temple doré, un petit groupe se tient dans la lumière devant le Christ. Rembrandt peint la scène avec une grande finesse. Le tableau est à la National Gallery de Londres."
    ],
    "fact": "1644. National Gallery, Londres."
  },
  "rbgirlwin": {
    "text": [
      "Une jeune fille s’appuie sur l’appui de la fenêtre et nous regarde. Rembrandt joue avec l’illusion : on dirait qu’elle est vraiment dans le cadre. Le tableau est à la Dulwich Picture Gallery de Londres."
    ],
    "fact": "1645. Dulwich Picture Gallery, Londres."
  },
  "rbjosephd": {
    "text": [
      "Un ange apparaît à Joseph en songe ; Marie et l’Enfant dorment à ses côtés dans l’étable. Le petit tableau brille dans l’obscurité. Il est à la Gemäldegalerie de Berlin."
    ],
    "fact": "1645. Gemäldegalerie, Berlin."
  },
  "rbthreetrees": {
    "text": [
      "Trois arbres se dressent sur une digue sous un ciel immense strié de pluie. C’est la plus grande eau-forte de paysage de Rembrandt. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1643. Rijksmuseum, Amsterdam."
  },
  "rbwinter": {
    "text": [
      "Des gens marchent sur la glace et une ferme repose sous le soleil clair de l’hiver. Ce petit tableau est l’une des rares scènes d’hiver de Rembrandt. Il est à la Gemäldegalerie Alte Meister de Kassel."
    ],
    "fact": "1646. Gemäldegalerie Alte Meister, Kassel."
  },
  "rbjansix": {
    "text": [
      "Son ami Jan Six lit, debout près de la fenêtre. Six était marchand, poète et plus tard bourgmestre d’Amsterdam. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1647. Rijksmuseum, Amsterdam."
  },
  "rbephraim": {
    "text": [
      "Le médecin Ephraim Bueno se tient sur un escalier, la main sur la rampe. Il appartenait à la communauté juive portugaise d’Amsterdam. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "1647. National Gallery of Art, Washington."
  },
  "rbself48": {
    "text": [
      "Rembrandt est assis à la fenêtre et dessine, sérieux et sans ornement. Il nous regarde comme si nous étions son miroir. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1648. Rijksmuseum, Amsterdam."
  },
  "rbemmaus48": {
    "text": [
      "Le Christ rompt le pain et les deux disciples le reconnaissent. Derrière lui s’ouvre une haute niche. Le tableau est au musée du Louvre à Paris."
    ],
    "fact": "1648. Musée du Louvre, Paris."
  },
  "rbjews": {
    "text": [
      "De petits groupes d’hommes conversent sur les marches. Rembrandt connaissait bien le quartier juif autour de sa Breestraat. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "1648. National Gallery of Art, Washington."
  },
  "rbhundred": {
    "text": [
      "Au centre, le Christ se tient dans la lumière ; malades et curieux se pressent autour de lui. Rembrandt travaille de longues années à cette planche. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "vers 1648. Rijksmuseum, Amsterdam."
  },
  "rbfaust": {
    "text": [
      "Un érudit contemple un disque lumineux inscrit de lettres à la fenêtre. Plus tard, la planche reçoit le nom de Faust. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "vers 1652. Rijksmuseum, Amsterdam."
  },
  "rbshell": {
    "text": [
      "Un cône marin est seul sur la feuille, avec un dessin fin. Rembrandt possédait de tels coquillages dans sa collection. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1650. Rijksmuseum, Amsterdam."
  },
  "rbsixbridge": {
    "text": [
      "Un petit pont de bois traverse un canal et deux hommes regardent par-dessus la rambarde. La planche est liée à Jan Six. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1645. Rijksmuseum, Amsterdam."
  },
  "rbomval": {
    "text": [
      "Sur la rive de l’Amstel se dresse un grand arbre et des barques passent. L’Omval se trouve au bord du fleuve, au sud d’Amsterdam. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "1645. National Gallery of Art, Washington."
  },
  "rbmill": {
    "text": [
      "Un moulin à vent se dresse, sombre, sur un talus, devant un ciel de crépuscule lumineux. C’est l’un des paysages peints les plus connus de Rembrandt. Le tableau est à la National Gallery of Art de Washington."
    ],
    "fact": "vers 1645–1648. National Gallery of Art, Washington."
  },
  "rbgoldfield": {
    "text": [
      "Une terre vaste et plate, avec des champs et des prés de blanchiment, s’étend jusqu’à l’horizon. La planche, très large, montre la vue vers Haarlem. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "1651. National Gallery of Art, Washington."
  },
  "rbcott3": {
    "text": [
      "Trois fermes aux hauts pignons se tiennent au bord du chemin, sous de grands arbres. Rembrandt grave chaque toit de chaume avec précision. Cette épreuve est au Metropolitan Museum of Art de New York."
    ],
    "fact": "1650. Metropolitan Museum of Art, New York."
  },
  "rbtower": {
    "text": [
      "Derrière des arbres et des maisons s’élève une tour d’église carrée. La petite eau-forte paraît claire et aérée. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "1650. National Gallery of Art, Washington."
  },
  "rbmilkman": {
    "text": [
      "Un laitier marche avec ses bidons sur un chemin de digue, près d’une ferme. L’eau-forte est longue et étroite comme une vue. Cette épreuve est au Metropolitan Museum of Art de New York."
    ],
    "fact": "vers 1650. Metropolitan Museum of Art, New York."
  },
  "rbclump": {
    "text": [
      "Un groupe d’arbres touffu se dresse près d’une ferme et, à droite, la vue s’ouvre au loin. Rembrandt travaille ici à la pointe sèche. Cette épreuve est au Cleveland Museum of Art."
    ],
    "fact": "1652. Cleveland Museum of Art."
  },
  "rbkitchen": {
    "text": [
      "Une jeune fille appuie le menton sur la main et regarde par la fenêtre, pensive. Sa veste rouge et sa chemise blanche brillent dans l’obscurité. Le tableau est au Nationalmuseum de Stockholm."
    ],
    "fact": "1651. Nationalmuseum, Stockholm."
  },
  "rbhenddoor": {
    "text": [
      "Hendrickje s’appuie à une porte et se tient d’une main au cadre. Son châle rouge brille chaleureusement. Le tableau est à la Gemäldegalerie de Berlin."
    ],
    "fact": "vers 1656. Gemäldegalerie, Berlin."
  },
  "rbhendmet": {
    "text": [
      "Hendrickje porte des perles et un manteau de fourrure et regarde calmement de côté. On la nomme souvent comme modèle de ce portrait. Le tableau est au Metropolitan Museum of Art de New York."
    ],
    "fact": "vers 1655. Metropolitan Museum of Art, New York."
  },
  "rbself52": {
    "text": [
      "Rembrandt se tient debout, ferme, les mains à la ceinture, dans une simple blouse de travail. Jamais auparavant il ne s’était montré si sérieux. Le tableau est au Kunsthistorisches Museum de Vienne."
    ],
    "fact": "1652. Kunsthistorisches Museum, Vienne."
  },
  "rbaristotle": {
    "text": [
      "Le philosophe Aristote pose la main sur un buste du poète Homère. Un collectionneur sicilien a commandé le tableau. Il est au Metropolitan Museum of Art de New York."
    ],
    "fact": "1653. Metropolitan Museum of Art, New York."
  },
  "rbfloris": {
    "text": [
      "Le riche célibataire Floris Soop se tient fier dans la lumière, avec drapeau et chapeau à plumes. Il était porte-étendard d’une compagnie de milice. Le tableau est au Metropolitan Museum of Art de New York."
    ],
    "fact": "1654. Metropolitan Museum of Art, New York."
  },
  "rbadorelamp": {
    "text": [
      "Dans l’étable sombre, un berger tient une lanterne au-dessus de Marie et de l’Enfant. Rembrandt montre la lumière comme une petite lueur dans la nuit. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "vers 1654. National Gallery of Art, Washington."
  },
  "rbemmaus54": {
    "text": [
      "Le Christ est assis derrière une table, entouré de lumière, et les disciples s’étonnent. Rembrandt revient sans cesse à Emmaüs. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1654. Rijksmuseum, Amsterdam."
  },
  "rbpolish": {
    "text": [
      "Un jeune cavalier avec bonnet, arc et sabre chevauche dans un paysage sombre. On ne sait toujours pas qui il est. Le tableau est à la Frick Collection de New York."
    ],
    "fact": "vers 1655. Frick Collection, New York."
  },
  "rbtitusread": {
    "text": [
      "Titus, âgé d’environ quinze ans, lit un livre ; la lumière tombe sur son visage et ses mains. Rembrandt peint souvent son fils. Le tableau est au Kunsthistorisches Museum de Vienne."
    ],
    "fact": "vers 1656–1657. Kunsthistorisches Museum, Vienne."
  },
  "rbhaaringh": {
    "text": [
      "Le commissaire-priseur Pieter Haaringh est assis devant une fenêtre à rideau. Il a participé aux ventes aux enchères qui attendaient bientôt Rembrandt. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "1655. National Gallery of Art, Washington."
  },
  "rblutma": {
    "text": [
      "Le vieil orfèvre Jan Lutma est assis dans un fauteuil, des outils et un petit bol à ses côtés. Rembrandt le grave en 1656. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "1656. National Gallery of Art, Washington."
  },
  "rbself58": {
    "text": [
      "L’année où sa maison est vendue, Rembrandt se peint comme un roi sur son trône, en habit d’or et avec un bâton. Le tableau est à la Frick Collection de New York."
    ],
    "fact": "1658. Frick Collection, New York."
  },
  "rbself59": {
    "text": [
      "Rembrandt nous regarde, calme et fatigué, les mains jointes. Il peint avec sincérité les rides de son visage. Le tableau est à la National Gallery of Art de Washington."
    ],
    "fact": "1659. National Gallery of Art, Washington."
  },
  "rbself60": {
    "text": [
      "Avec un béret et un manteau brun, Rembrandt regarde depuis le fond sombre. La lumière ne tombe que sur le front et la joue. Le tableau est au Metropolitan Museum of Art de New York."
    ],
    "fact": "1660. Metropolitan Museum of Art, New York."
  },
  "rbselfeasel": {
    "text": [
      "Rembrandt se tient devant le chevalet, avec un bonnet blanc, palette et pinceaux. Il se montre tout à fait comme un peintre au travail. Le tableau est au musée du Louvre à Paris."
    ],
    "fact": "1660. Musée du Louvre, Paris."
  },
  "rbdenial": {
    "text": [
      "Une servante tient une bougie devant Pierre et lui demande s’il est des gens de Jésus. Pierre lève la main pour le nier. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1660. Rijksmuseum, Amsterdam."
  },
  "rbtitusmonk": {
    "text": [
      "Titus porte un habit brun à capuche et regarde en silence devant lui. Rembrandt le peint en moine. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1660. Rijksmuseum, Amsterdam."
  },
  "rbselfpaul": {
    "text": [
      "Rembrandt se peint en apôtre Paul, avec un turban et la poignée d’une épée dans le manteau. Il lève le front d’un air interrogeant. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1661. Rijksmuseum, Amsterdam."
  },
  "rbjacobtrip": {
    "text": [
      "Le vieux marchand Jacob Trip, de Dordrecht, est assis dans un fauteuil, un bâton à la main. Son visage est plein de rides. Le tableau est à la National Gallery de Londres."
    ],
    "fact": "vers 1661. National Gallery, Londres."
  },
  "rbdegeer": {
    "text": [
      "Margaretha de Geer, épouse de Jacob Trip, porte une grande fraise blanche. Son portrait forme la paire avec celui de son mari. Il est à la National Gallery de Londres."
    ],
    "fact": "vers 1661. National Gallery, Londres."
  },
  "rbsyndics": {
    "text": [
      "Cinq directeurs de la guilde des drapiers sont assis autour d’une table au tapis rouge ; derrière eux se tient un serviteur. Ils lèvent les yeux comme si nous venions d’entrer. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1662. Rijksmuseum, Amsterdam."
  },
  "rbcivilis": {
    "text": [
      "La nuit, les Bataves jurent fidélité à leur chef Claudius Civilis ; leurs épées se croisent dans la lumière. Seule la partie centrale, que Rembrandt a découpée, est conservée. Elle est au Nationalmuseum de Stockholm."
    ],
    "fact": "1661–1662. Nationalmuseum, Stockholm."
  },
  "rbhomer": {
    "text": [
      "Le poète aveugle Homère dicte ; seules sa tête et ses mains sont éclairées. Le tableau a été peint pour le même collectionneur de Sicile qu’Aristote. Il est au Mauritshuis de La Haye."
    ],
    "fact": "1663. Mauritshuis, La Haye."
  },
  "rbjuno": {
    "text": [
      "La déesse Junon porte une couronne et un manteau somptueux orné de bijoux. À ses côtés, on devine faiblement son paon. Le tableau est au Hammer Museum de Los Angeles."
    ],
    "fact": "vers 1662–1665. Hammer Museum, Los Angeles."
  },
  "rbmanmag": {
    "text": [
      "Un homme tient une loupe et regarde pensif devant lui. Son portrait forme la paire avec La Femme à l’œillet. Il est au Metropolitan Museum of Art de New York."
    ],
    "fact": "début des années 1660. Metropolitan Museum of Art, New York."
  },
  "rbpink": {
    "text": [
      "Une jeune femme parée de perles tient un œillet rose. L’œillet symbolise souvent l’amour et le mariage. Le tableau est au Metropolitan Museum of Art de New York."
    ],
    "fact": "début des années 1660. Metropolitan Museum of Art, New York."
  },
  "rbrihel": {
    "text": [
      "Le marchand Frederick Rihel, en habit somptueux, monte un cheval blanc. C’est le seul grand portrait équestre de Rembrandt. Le tableau est à la National Gallery de Londres."
    ],
    "fact": "vers 1663. National Gallery, Londres."
  },
  "rbjewishbr": {
    "text": [
      "Un couple vêtu de rouge et d’or lumineux s’enlace avec tendresse. La peinture est si épaisse que les manches semblent presque sculptées. Le tableau est au Rijksmuseum d’Amsterdam ; la galerie le contient également."
    ],
    "fact": "vers 1665–1669. Rijksmuseum, Amsterdam."
  },
  "rbfamily": {
    "text": [
      "Une mère tient un enfant sur les genoux ; le père et deux enfants sont à ses côtés, tous dans un rouge chaud. On ne sait pas de quelle famille il s’agit. Le tableau est au Herzog Anton Ulrich-Museum de Brunswick."
    ],
    "fact": "vers 1665. Herzog Anton Ulrich-Museum, Brunswick."
  },
  "rbwhitehair": {
    "text": [
      "Un vieil homme aux cheveux blancs et au chapeau rond regarde sérieusement hors du tableau. Rembrandt peint avec de larges coups de pinceau. Le tableau est à la National Gallery of Victoria de Melbourne."
    ],
    "fact": "1667. National Gallery of Victoria, Melbourne."
  },
  "rboldman67": {
    "text": [
      "Un vieil homme au large chapeau et au col blanc est assis tranquillement. Rembrandt le peint deux ans avant sa propre mort. Le tableau est au Mauritshuis de La Haye."
    ],
    "fact": "1667. Mauritshuis, La Haye."
  },
  "rbselfkenwood": {
    "text": [
      "Rembrandt se tient avec palette et pinceaux devant un mur orné de deux grands arcs. On ne sait pas ce que signifient les cercles. Le tableau est à Kenwood House, à Londres."
    ],
    "fact": "vers 1665. Kenwood House, Londres."
  },
  "rbzeuxis": {
    "text": [
      "Rembrandt, déjà âgé, rit en regardant par-dessus l’épaule. Il se représente probablement comme le peintre antique Zeuxis. Le tableau est au Wallraf-Richartz-Museum de Cologne."
    ],
    "fact": "vers 1662–1668. Wallraf-Richartz-Museum, Cologne."
  },
  "rbprodigal2": {
    "text": [
      "Le fils est à genoux devant son vieux père, qui lui pose affectueusement les mains sur les épaules. C’est l’un des derniers grands tableaux de Rembrandt. Il est à l’Ermitage de Saint-Pétersbourg."
    ],
    "fact": "vers 1668. Ermitage, Saint-Pétersbourg."
  },
  "rbsimeon69": {
    "text": [
      "Le vieil Siméon tient l’Enfant Jésus dans ses bras et rend grâce à Dieu. Le tableau est resté inachevé dans l’atelier de Rembrandt. Il est au Nationalmuseum de Stockholm."
    ],
    "fact": "1669. Nationalmuseum, Stockholm."
  },
  "rbself63": {
    "text": [
      "Rembrandt est assis, les mains jointes, et nous regarde, âgé et calme. Il se peint dans la dernière année de sa vie. Le tableau est à la National Gallery de Londres."
    ],
    "fact": "1669. National Gallery, Londres."
  },
  "rbself69": {
    "text": [
      "Dans son dernier autoportrait, Rembrandt porte un bonnet clair et son visage brille d’une lumière chaude. C’est un adieu silencieux. Le tableau est au Mauritshuis de La Haye."
    ],
    "fact": "1669. Mauritshuis, La Haye."
  },
  "rbnightwatch": {
    "text": [
      "Le capitaine Frans Banninck Cocq donne l’ordre de partir et ses miliciens se mettent en mouvement.",
      "Une fillette lumineuse et beaucoup d’ombre donnent vie au portrait de groupe.",
      "Voici une version simplifiée destinée à être coloriée ; tu trouveras la Ronde de nuit plus détaillée dans la galerie.",
      "L’original est accroché au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1642. Rijksmuseum, Amsterdam."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
