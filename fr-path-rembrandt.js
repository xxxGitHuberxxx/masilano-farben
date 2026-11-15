// v9.6 FR content for Rembrandt’s life journey, Part 1 (1606–1642). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Royal Collection, London": "Royal Collection, Londres",
  "Eremitage, Sankt Petersburg": "Ermitage, Saint-Pétersbourg",
  "The Leiden Collection, New York": "The Leiden Collection, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Museum De Lakenhal, Leiden": "Museum De Lakenhal, Leyde",
  "Gemäldegalerie, Berlin": "Gemäldegalerie, Berlin",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Musée Cognacq-Jay, Paris": "Musée Cognacq-Jay, Paris",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Israel Museum, Jerusalem": "Musée d’Israël, Jérusalem",
  "Mauritshuis, Den Haag": "Mauritshuis, La Haye",
  "Alte Pinakothek, München": "Alte Pinakothek, Munich",
  "Frick Collection, New York": "Frick Collection, New York",
  "Los Angeles County Museum of Art": "Los Angeles County Museum of Art",
  "Taft Museum of Art, Cincinnati": "Taft Museum of Art, Cincinnati",
  "Gemäldegalerie Alte Meister, Dresden": "Gemäldegalerie Alte Meister, Dresde",
  "National Gallery, London": "National Gallery, Londres",
  "Albertina, Wien": "Albertina, Vienne",
  "Bibliothèque nationale de France, Paris": "Bibliothèque nationale de France, Paris"
});
  P.works = Object.assign(P.works || {}, {
  "rbspectacles": {
    "title": "Le marchand de lunettes",
    "museum": "Museum De Lakenhal, Leyde"
  },
  "rbhearing": {
    "title": "Trois musiciens (allégorie de l’ouïe)",
    "museum": "The Leiden Collection, New York"
  },
  "rboldwoman": {
    "title": "Vieille femme lisant",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbgoldchain": {
    "title": "Vieil homme à la chaîne d’or",
    "museum": "Art Institute of Chicago"
  },
  "rbhistory": {
    "title": "Tableau d’histoire",
    "museum": "Museum De Lakenhal, Leyde"
  },
  "rbbalaam": {
    "title": "L’ânesse de Balaam",
    "museum": "Musée Cognacq-Jay, Paris"
  },
  "rbmusic": {
    "title": "Compagnie musicale",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbstudio": {
    "title": "Le peintre dans son atelier",
    "museum": "Museum of Fine Arts, Boston"
  },
  "rbjeremiah": {
    "title": "Jérémie lamente la destruction de Jérusalem",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbpeter": {
    "title": "Saint Pierre en prison",
    "museum": "Musée d’Israël, Jérusalem"
  },
  "rbsimeon": {
    "title": "Siméon au Temple",
    "museum": "Mauritshuis, La Haye"
  },
  "rbpresent": {
    "title": "La Présentation au Temple avec l’ange",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself28": {
    "title": "Autoportrait en jeune homme",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbself29": {
    "title": "Autoportrait",
    "museum": "Alte Pinakothek, Munich"
  },
  "rbselflaugh": {
    "title": "Autoportrait au bonnet, riant",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbselfopen": {
    "title": "Autoportrait au bonnet, la bouche ouverte",
    "museum": "National Gallery of Art, Washington"
  },
  "rbruts": {
    "title": "Nicolaes Ruts",
    "museum": "Frick Collection, New York"
  },
  "rborient": {
    "title": "Homme en costume oriental",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rblooten": {
    "title": "Marten Looten",
    "museum": "Los Angeles County Museum of Art"
  },
  "rbshipb": {
    "title": "Le constructeur de navires et son épouse",
    "museum": "Royal Collection, Londres"
  },
  "rbwten": {
    "title": "Johannes Wtenbogaert",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbrising": {
    "title": "Homme se levant de sa chaise",
    "museum": "Taft Museum of Art, Cincinnati"
  },
  "rbfan": {
    "title": "Jeune femme à l’éventail",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbjoseph": {
    "title": "Joseph raconte ses songes",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbbellona": {
    "title": "Bellone",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbself33": {
    "title": "Autoportrait au béret de velours",
    "museum": "Gemäldegalerie, Berlin"
  },
  "rbflora": {
    "title": "Flore",
    "museum": "Ermitage, Saint-Pétersbourg"
  },
  "rbprodigal": {
    "title": "Rembrandt et Saskia dans la parabole de l’enfant prodigue",
    "museum": "Gemäldegalerie Alte Meister, Dresde"
  },
  "rbselfsaskia": {
    "title": "Autoportrait avec Saskia",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbminerva": {
    "title": "Minerve dans son étude",
    "museum": "The Leiden Collection, New York"
  },
  "rbbelshazzar": {
    "title": "Le Festin de Balthazar",
    "museum": "National Gallery, Londres"
  },
  "rbstandard": {
    "title": "Le porte-étendard",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbmagdalen": {
    "title": "Le Christ et Marie-Madeleine au tombeau",
    "museum": "Royal Collection, Londres"
  },
  "rbpancake": {
    "title": "La marchande de crêpes",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbelephant": {
    "title": "Un éléphant",
    "museum": "Albertina, Vienne"
  },
  "rbcottages": {
    "title": "Maisons sous un ciel d’orage",
    "museum": "Albertina, Vienne"
  },
  "rbself1639": {
    "title": "Autoportrait appuyé sur un rebord de pierre",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbself1640": {
    "title": "Autoportrait à l’âge de 34 ans",
    "museum": "National Gallery, Londres"
  },
  "rbmariatrip": {
    "title": "Maria Trip",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbgoldweigher": {
    "title": "Jan Uytenbogaert, le peseur d’or",
    "museum": "Bibliothèque nationale de France, Paris"
  },
  "rbamsterdam": {
    "title": "Vue d’Amsterdam",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbwindmill": {
    "title": "Le moulin",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbtobias": {
    "title": "L’ange quitte la famille de Tobie",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbstonebridge": {
    "title": "Le pont de pierre",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbdoomer": {
    "title": "Herman Doomer",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbmartens": {
    "title": "Baertje Martens",
    "museum": "Ermitage, Saint-Pétersbourg"
  },
  "rbagatha": {
    "title": "Agatha Bas",
    "museum": "Royal Collection, Londres"
  },
  "rbanslo": {
    "title": "Le prédicateur Cornelis Anslo et son épouse",
    "museum": "Gemäldegalerie, Berlin"
  },
  "rbdavidjon": {
    "title": "David et Jonathan",
    "museum": "Ermitage, Saint-Pétersbourg"
  },
  "rbnightwatch": {
    "title": "La Ronde de nuit",
    "museum": "Rijksmuseum, Amsterdam"
  }
});
  P.paths = P.paths || {};
  P.paths.rembrandt = {
  "title": "Le parcours de vie de Rembrandt",
  "part": "Partie 1 · 1606–1642",
  "subtitle": "Du moulin de Leyde à la Ronde de nuit",
  "intro": "Rembrandt Harmenszoon van Rijn naît à Leyde le 15 juillet 1606, fils d’un meunier. Cette première partie le suit depuis l’école latine et l’apprentissage chez Swanenburgh et Lastman, en passant par l’atelier avec Jan Lievens et les premiers autoportraits, le départ pour Amsterdam et le mariage avec Saskia, jusqu’à la maison de la Breestraat et la Ronde de nuit de 1642.",
  "ending": [
    "En 1642, Rembrandt termine la Ronde de nuit. En juin de la même année, Saskia meurt, à seulement 29 ans ; Rembrandt reste avec le petit Titus.",
    "Dans la partie suivante viennent Hendrickje Stoffels, les années difficiles des dettes et de la faillite, les derniers autoportraits et sa mort à Amsterdam le 4 octobre 1669."
  ],
  "epilogue": "Dans la partie suivante viennent Hendrickje Stoffels, les années difficiles des dettes et de la faillite, les derniers autoportraits et sa mort à Amsterdam le 4 octobre 1669.",
  "life": "1606–1669"
};
  P.stations = Object.assign(P.stations || {}, {
  "rbleiden": {
    "place": "Enfance à Leyde",
    "when": "1606–1624",
    "mapLabel": "Leyde",
    "intro": [
      "Rembrandt Harmenszoon van Rijn naît à Leyde le 15 juillet 1606, neuvième enfant du meunier Harmen Gerritszoon van Rijn et de Neeltje Willemsdochter. La famille habite en face du moulin sur le Rhin, dont elle tire le nom van Rijn.",
      "De 1613 à 1620, il va à l’école latine. En mai 1620, il s’inscrit à l’université de Leyde, mais il ne poursuit pas ses études. Pendant environ trois ans, il apprend chez le peintre de Leyde Jacob van Swanenburgh."
    ]
  },
  "rblastman": {
    "place": "Six mois chez Pieter Lastman",
    "when": "1625–1626",
    "mapLabel": "Lastman",
    "intro": [
      "Vers 1625, Rembrandt passe six mois à Amsterdam chez Pieter Lastman, un peintre connu d’histoires bibliques et antiques. Il travaille ensuite de nouveau à Leyde comme maître indépendant.",
      "Ses premiers tableaux datés sont de 1625 et 1626 : de petites peintures d’histoire aux couleurs vives et aux figures animées, tout à fait dans la manière de Lastman."
    ]
  },
  "rblievens": {
    "place": "L’atelier avec Jan Lievens",
    "when": "1626–1631",
    "mapLabel": "Atelier",
    "intro": [
      "À Leyde, Rembrandt travaille en étroite collaboration avec son ami Jan Lievens. Dès 1626, il fait aussi des eaux-fortes, et en 1628 il accepte ses premiers élèves, parmi lesquels Gerrit Dou.",
      "À la fin des années 1620, Constantijn Huygens, secrétaire du stathouder Frédéric-Henri, rend visite aux deux jeunes peintres et admire leur travail. En avril 1630, le père de Rembrandt meurt."
    ]
  },
  "rbmirror": {
    "place": "Son propre visage",
    "when": "1628–1630",
    "mapLabel": "Miroir",
    "intro": [
      "Déjà à Leyde, Rembrandt se peint et se grave encore et encore. Devant le miroir, il essaie la lumière et l’ombre : il rit, s’étonne ou regarde avec sérieux.",
      "Ces petits portraits sont des exercices et en même temps une publicité pour son talent. Au cours de sa vie, il peindra plus de quarante autoportraits."
    ]
  },
  "rbamsterdam": {
    "place": "Vers Amsterdam",
    "when": "1631–1633",
    "mapLabel": "Amsterdam",
    "intro": [
      "En 1631, Rembrandt rencontre le marchand d’art d’Amsterdam Hendrick van Uylenburgh et habite bientôt chez lui. Il devient rapidement un portraitiste recherché dans la ville commerçante en pleine croissance.",
      "En 1632, il peint son premier portrait de groupe, la Leçon d’anatomie du docteur Nicolaes Tulp, pour la guilde des chirurgiens. Suivent ensuite de nombreuses commandes de marchands, de prédicateurs et de leurs épouses."
    ]
  },
  "rbsaskia": {
    "place": "Saskia",
    "when": "1633–1636",
    "mapLabel": "Frise",
    "intro": [
      "En juin 1633, Rembrandt se fiance avec Saskia van Uylenburgh, cousine de son associé Hendrick. Le 22 juin 1634, ils se marient à Sint Annaparochie, en Frise.",
      "Saskia est souvent son modèle, comme Flore parmi les fleurs ou à ses côtés. En 1635, le couple loue une maison dans la Nieuwe Doelenstraat à Amsterdam."
    ]
  },
  "rbstories": {
    "place": "Grandes histoires, petites feuilles",
    "when": "1635–1638",
    "mapLabel": "Histoires",
    "intro": [
      "À partir de 1632, Rembrandt peint pour le stathouder Frédéric-Henri une série de tableaux sur la Passion du Christ. À côté naissent de grandes scènes dramatiques tirées de la Bible.",
      "Avec la plume et la pointe à graver, il saisit la vie de la ville : une marchande de crêpes, un éléphant qui traverse les Pays-Bas en 1637, des maisons sous un ciel d’orage. En 1637, la famille s’installe au Binnen-Amstel."
    ]
  },
  "rbbreestraat": {
    "place": "La maison de la Breestraat",
    "when": "1639–1641",
    "mapLabel": "Breestraat",
    "intro": [
      "En 1639, Rembrandt achète pour 13 000 florins une grande maison dans la Breestraat, aujourd’hui le musée Maison de Rembrandt. Il peut la payer par échéances. La même année, il reçoit la commande de la Ronde de nuit.",
      "Il grave des paysages des environs d’Amsterdam, un moulin et des scènes bibliques. Trois enfants de Rembrandt et Saskia meurent peu après la naissance ; en septembre 1641, leur fils Titus est baptisé."
    ]
  },
  "rbnight": {
    "place": "La Ronde de nuit",
    "when": "1640–1642",
    "mapLabel": "Ronde",
    "intro": [
      "Vers 1640, Rembrandt peint des paires de portraits de riches habitants d’Amsterdam, et en 1641 le prédicateur Cornelis Anslo en conversation avec son épouse. David et Jonathan date de 1642.",
      "En 1642, il termine le grand portrait de groupe de la compagnie de milice de Frans Banninck Cocq pour la salle des Kloveniersdoelen. Le tableau, connu aujourd’hui sous le nom de Ronde de nuit, est plein de mouvement, de lumière et d’ombre."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rbspectacles": {
    "text": [
      "Un marchand tend une paire de lunettes à un vieux couple. Le petit tableau appartient à une série sur les cinq sens, ici la vue, et compte parmi les premières œuvres connues de Rembrandt. Il est au Museum De Lakenhal de Leyde."
    ],
    "fact": "vers 1624–1625. Museum De Lakenhal, Leyde."
  },
  "rbhearing": {
    "text": [
      "Trois figures chantent d’après une partition. Ce tableau aussi appartient à la série précoce des cinq sens, ici l’ouïe. Il est à The Leiden Collection de New York."
    ],
    "fact": "vers 1624–1625. The Leiden Collection, New York."
  },
  "rboldwoman": {
    "text": [
      "Une vieille femme lit un grand livre, et la lumière tombe sur les pages. On y voit le plus souvent la prophétesse Anne ; le modèle est souvent pris pour la mère de Rembrandt. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1631. Rijksmuseum, Amsterdam."
  },
  "rbgoldchain": {
    "text": [
      "Un vieil homme au béret à plumes et à la chaîne d’or surgit de l’obscurité. À Leyde, Rembrandt peint ces têtes de caractère d’après des modèles de son entourage. Le tableau est à l’Art Institute of Chicago."
    ],
    "fact": "vers 1631. Art Institute of Chicago."
  },
  "rbhistory": {
    "text": [
      "Des soldats et des dignitaires en habits colorés se pressent devant un souverain. Quelle histoire est représentée reste discuté aujourd’hui. Le tableau est au Museum De Lakenhal de Leyde."
    ],
    "fact": "1626. Museum De Lakenhal, Leyde."
  },
  "rbbalaam": {
    "text": [
      "Le prophète Balaam lève le bâton contre son ânesse, qui s’est arrêtée devant un ange. Le tableau montre clairement l’influence de Pieter Lastman. Il est au Musée Cognacq-Jay de Paris."
    ],
    "fact": "1626. Musée Cognacq-Jay, Paris."
  },
  "rbmusic": {
    "text": [
      "Une petite compagnie en costumes somptueux chante et joue ; devant elle se trouvent des livres et des instruments. Rembrandt peint le tableau à vingt ans. Il est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1626. Rijksmuseum, Amsterdam."
  },
  "rbstudio": {
    "text": [
      "Un petit peintre se tient au fond d’une pièce dépouillée et regarde un grand chevalet. Le tableau montre un atelier comme celui que Rembrandt avait à Leyde. Il est au Museum of Fine Arts de Boston."
    ],
    "fact": "vers 1628. Museum of Fine Arts, Boston."
  },
  "rbjeremiah": {
    "text": [
      "Le prophète Jérémie appuie sa tête sur sa main ; à l’arrière-plan, la ville brûle. Une lumière chaude tombe sur lui et sur les vases placés à ses côtés. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1630. Rijksmuseum, Amsterdam."
  },
  "rbpeter": {
    "text": [
      "L’apôtre Pierre est à genoux dans la prison et prie ; à côté de lui se trouvent les clés. La lumière d’une fenêtre éclaire son visage et ses mains. Le tableau est au Musée d’Israël de Jérusalem."
    ],
    "fact": "1631. Musée d’Israël, Jérusalem."
  },
  "rbsimeon": {
    "text": [
      "Dans un temple immense et sombre, un rayon de lumière tombe sur Siméon, Marie et l’Enfant. Les nombreuses personnes autour d’eux disparaissent presque dans l’ombre. Le tableau est au Mauritshuis de La Haye."
    ],
    "fact": "1631. Mauritshuis, La Haye."
  },
  "rbpresent": {
    "text": [
      "Une petite eau-forte : Siméon tient l’Enfant et un ange plane au-dessus. Avec peu de traits, Rembrandt crée l’espace et la lumière. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "1630. National Gallery of Art, Washington."
  },
  "rbself28": {
    "text": [
      "Le visage du jeune Rembrandt reste presque tout dans l’ombre ; seules la joue et l’oreille sont éclairées. Avec le manche du pinceau, il gratte des boucles dans la peinture fraîche. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "vers 1628. Rijksmuseum, Amsterdam."
  },
  "rbself29": {
    "text": [
      "Les cheveux ébouriffés et le col blanc, le jeune homme de vingt-trois ans regarde depuis le tableau. La lumière et l’ombre partagent le visage. Le tableau est à l’Alte Pinakothek de Munich."
    ],
    "fact": "1629. Alte Pinakothek, Munich."
  },
  "rbselflaugh": {
    "text": [
      "Rembrandt se grave avec un large rire et un bonnet. Il exerce ces expressions devant le miroir. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1630. Rijksmuseum, Amsterdam."
  },
  "rbselfopen": {
    "text": [
      "La bouche ouverte et les yeux grands ouverts, Rembrandt regarde comme s’il avait eu peur. L’eau-forte est l’une de ses études d’expression. Cette épreuve est à la National Gallery of Art de Washington."
    ],
    "fact": "1630. National Gallery of Art, Washington."
  },
  "rbruts": {
    "text": [
      "Le marchand Nicolaes Ruts porte une épaisse fourrure et tient une lettre. C’est l’un des premiers portraits que Rembrandt peint pour des clients d’Amsterdam. Le tableau est à la Frick Collection de New York."
    ],
    "fact": "1631. Frick Collection, New York."
  },
  "rborient": {
    "text": [
      "Un homme imposant, avec turban et manteau lourd, se tient devant un mur clair. Ces tableaux de déguisement sont populaires à Amsterdam. Le tableau est au Metropolitan Museum of Art de New York."
    ],
    "fact": "1632. Metropolitan Museum of Art, New York."
  },
  "rblooten": {
    "text": [
      "Le marchand Marten Looten tient une lettre et regarde avec sérieux depuis le tableau. Rembrandt le peint en 1632. Le tableau est au Los Angeles County Museum of Art."
    ],
    "fact": "1632. Los Angeles County Museum of Art."
  },
  "rbshipb": {
    "text": [
      "Le constructeur de navires Jan Rijcksen est assis à sa table à dessin lorsque son épouse Griet Jans lui apporte une lettre. Rembrandt transforme le double portrait en une petite scène. Le tableau est à la Royal Collection de Londres."
    ],
    "fact": "1633. Royal Collection, Londres."
  },
  "rbwten": {
    "text": [
      "Le vieux prédicateur Johannes Wtenbogaert, un dirigeant des remontrants, porte un manteau noir à col blanc. Rembrandt le peint en 1633. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1633. Rijksmuseum, Amsterdam."
  },
  "rbrising": {
    "text": [
      "Un homme vêtu de noir se lève de sa chaise et nous regarde. Le mouvement donne de la vie au portrait. Le tableau est au Taft Museum of Art de Cincinnati."
    ],
    "fact": "1633. Taft Museum of Art, Cincinnati."
  },
  "rbfan": {
    "text": [
      "Une jeune femme en robe noire, avec un grand col de dentelle, tient un éventail. Rembrandt la peint en 1633 comme pendant du portrait de son mari. Le tableau est au Metropolitan Museum of Art de New York."
    ],
    "fact": "1633. Metropolitan Museum of Art, New York."
  },
  "rbjoseph": {
    "text": [
      "Le jeune Joseph raconte ses songes à sa famille. Rembrandt peint la scène seulement en tons bruns et gris, comme modèle pour une eau-forte. La feuille est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "vers 1633. Rijksmuseum, Amsterdam."
  },
  "rbbellona": {
    "text": [
      "Bellone, déesse romaine de la guerre, se tient en armure, casque et bouclier, devant un fond sombre. Rembrandt la peint l’année de ses fiançailles. Le tableau est au Metropolitan Museum of Art de New York."
    ],
    "fact": "1633. Metropolitan Museum of Art, New York."
  },
  "rbself33": {
    "text": [
      "Rembrandt se montre avec un béret de velours et un col de fourrure, sûr de lui et couronné de succès. C’est l’année de son mariage avec Saskia. Le tableau est à la Gemäldegalerie de Berlin."
    ],
    "fact": "1634. Gemäldegalerie, Berlin."
  },
  "rbflora": {
    "text": [
      "Une jeune femme en Flore, déesse du printemps, avec une couronne et un bâton de fleurs. Saskia a probablement posé pour le tableau. Il est à l’Ermitage de Saint-Pétersbourg."
    ],
    "fact": "1634. Ermitage, Saint-Pétersbourg."
  },
  "rbprodigal": {
    "text": [
      "Rembrandt, joyeux, a Saskia assise sur les genoux et lève une coupe. Il se représente comme l’enfant prodigue qui dépense son argent. Le tableau est à la Gemäldegalerie Alte Meister de Dresde."
    ],
    "fact": "vers 1635. Gemäldegalerie Alte Meister, Dresde."
  },
  "rbselfsaskia": {
    "text": [
      "Dans cette eau-forte, Rembrandt est assis à la table en train de dessiner, Saskia derrière lui. C’est le seul double portrait gravé des deux. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1636. Rijksmuseum, Amsterdam."
  },
  "rbminerva": {
    "text": [
      "La déesse de la sagesse est assise dans un manteau d’or devant une table avec des livres et un globe. La lumière tombe sur son visage et sur les pages. Le tableau est à The Leiden Collection de New York."
    ],
    "fact": "1635. The Leiden Collection, New York."
  },
  "rbbelshazzar": {
    "text": [
      "Au banquet, une écriture lumineuse apparaît sur le mur ; le roi Balthazar se tourne, effrayé. Rembrandt peint le moment plein de mouvement. Le tableau est à la National Gallery de Londres."
    ],
    "fact": "vers 1636–1638. National Gallery, Londres."
  },
  "rbstandard": {
    "text": [
      "Un porte-étendard se tient fièrement, un grand drapeau sur l’épaule, avec un chapeau à plumes et une écharpe. Rembrandt peint le tableau en 1636. Depuis 2022, il est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1636. Rijksmuseum, Amsterdam."
  },
  "rbmagdalen": {
    "text": [
      "Le matin de Pâques, Marie-Madeleine reconnaît le Christ, qui lui apparaît en jardinier avec un chapeau. Derrière eux, le soleil se lève sur la ville. Le tableau est à la Royal Collection de Londres."
    ],
    "fact": "1638. Royal Collection, Londres."
  },
  "rbpancake": {
    "text": [
      "Une vieille femme fait frire des crêpes dans la rue, les enfants se pressent autour d’elle et un chien attend. Rembrandt saisit la scène dans une eau-forte. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1635. Rijksmuseum, Amsterdam."
  },
  "rbelephant": {
    "text": [
      "En 1637, une éléphante parcourt les Pays-Bas, et Rembrandt la dessine à la craie noire. Avec peu de traits, il montre la peau plissée. Le dessin est à l’Albertina de Vienne."
    ],
    "fact": "1637. Albertina, Vienne."
  },
  "rbcottages": {
    "text": [
      "Des nuages sombres passent au-dessus de quelques maisons de campagne ; un chemin mène vers la lumière. Rembrandt dessine à la plume et au pinceau. La feuille est à l’Albertina de Vienne."
    ],
    "fact": "vers 1635. Albertina, Vienne."
  },
  "rbself1639": {
    "text": [
      "Rembrandt s’appuie sur un rebord de pierre, avec un béret et un riche manteau. L’eau-forte date de l’année où il achète la maison de la Breestraat. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1639. Rijksmuseum, Amsterdam."
  },
  "rbself1640": {
    "text": [
      "Un an plus tard, il se peint dans la même attitude, calme et bien habillé. Il a 34 ans et est au sommet de son succès. Le tableau est à la National Gallery de Londres."
    ],
    "fact": "1640. National Gallery, Londres."
  },
  "rbmariatrip": {
    "text": [
      "La jeune Maria Trip, d’une riche famille d’Amsterdam, porte une robe noire avec un col de dentelle et des perles. Rembrandt peint chaque pli de la dentelle. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1639. Rijksmuseum, Amsterdam."
  },
  "rbgoldweigher": {
    "text": [
      "Le percepteur Jan Uytenbogaert est assis à une table pleine de sacs d’argent. Rembrandt le grave en 1639. Cette épreuve est à la Bibliothèque nationale de France de Paris."
    ],
    "fact": "1639. Bibliothèque nationale de France, Paris."
  },
  "rbamsterdam": {
    "text": [
      "Au-delà de prés plats, on aperçoit au loin les tours, les moulins et les bateaux d’Amsterdam. La petite eau-forte montre la ville depuis le nord-ouest. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "vers 1640. Rijksmuseum, Amsterdam."
  },
  "rbwindmill": {
    "text": [
      "Un grand moulin à vent se dresse sur le rempart, avec une petite maison à côté. Rembrandt le grave en 1641. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1641. Rijksmuseum, Amsterdam."
  },
  "rbtobias": {
    "text": [
      "L’ange Raphaël s’éloigne en volant tandis que la famille de Tobie s’agenouille, étonnée, devant la maison. Rembrandt grave l’histoire biblique en 1641. Cette épreuve est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1641. Rijksmuseum, Amsterdam."
  },
  "rbstonebridge": {
    "text": [
      "Un petit pont au bord de la rivière ; des arbres sombres au soleil devant un ciel d’orage. C’est l’un des rares paysages peints par Rembrandt. Le tableau est au Rijksmuseum d’Amsterdam."
    ],
    "fact": "vers 1638. Rijksmuseum, Amsterdam."
  },
  "rbdoomer": {
    "text": [
      "Herman Doomer était fabricant de cadres et ébéniste à Amsterdam. Rembrandt le peint avec un large chapeau et un col blanc. Le tableau est au Metropolitan Museum of Art de New York."
    ],
    "fact": "1640. Metropolitan Museum of Art, New York."
  },
  "rbmartens": {
    "text": [
      "Baertje Martens était l’épouse de Herman Doomer. Son portrait est le pendant de celui de son mari. Le tableau est à l’Ermitage de Saint-Pétersbourg."
    ],
    "fact": "vers 1640. Ermitage, Saint-Pétersbourg."
  },
  "rbagatha": {
    "text": [
      "Agatha Bas apparaît comme dans l’encadrement d’une fenêtre, une main sur le rebord et un éventail dans l’autre. Rembrandt la peint en 1641. Le tableau est à la Royal Collection de Londres."
    ],
    "fact": "1641. Royal Collection, Londres."
  },
  "rbanslo": {
    "text": [
      "Le prédicateur mennonite Cornelis Anslo parle à son épouse Aeltje au-dessus d’un livre ouvert. Rembrandt montre comment il convainc par la parole. Le tableau est à la Gemäldegalerie de Berlin."
    ],
    "fact": "1641. Gemäldegalerie, Berlin."
  },
  "rbdavidjon": {
    "text": [
      "Les amis David et Jonathan s’embrassent pour se dire adieu devant un vaste paysage. Rembrandt peint la scène biblique en 1642. Le tableau est à l’Ermitage de Saint-Pétersbourg."
    ],
    "fact": "1642. Ermitage, Saint-Pétersbourg."
  },
  "rbnightwatch": {
    "text": [
      "Le capitaine Frans Banninck Cocq donne l’ordre de partir et ses miliciens se mettent en mouvement. Une fille lumineuse et beaucoup d’ombre donnent vie au portrait de groupe. Il est accroché au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1642. Rijksmuseum, Amsterdam."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
