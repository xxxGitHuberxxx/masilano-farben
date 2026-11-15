// v8.7 French content for Paul Cézanne’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts. Overwrites P.paths.cezanne with whole-path meta.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Collection non établie",
  "Privatbesitz": "Collection privée",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "Barnes Foundation, Philadelphia": "Barnes Foundation, Philadelphie",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Paris",
  "Eremitage, Sankt Petersburg": "Ermitage, Saint-Pétersbourg",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Toledo Museum of Art": "Toledo Museum of Art",
  "Sammlung E. G. Bührle, Kunsthaus Zürich": "Collection E. G. Bührle, Kunsthaus Zürich",
  "Courtauld Gallery, London": "Courtauld Gallery, Londres",
  "Museum Folkwang, Essen": "Museum Folkwang, Essen",
  "Museum of Fine Arts, Houston": "Museum of Fine Arts, Houston",
  "Phillips Collection, Washington": "Phillips Collection, Washington",
  "J. Paul Getty Museum, Los Angeles": "J. Paul Getty Museum, Los Angeles",
  "Petit Palais, Paris": "Petit Palais, Paris",
  "Kimbell Art Museum, Fort Worth": "Kimbell Art Museum, Fort Worth",
  "Artizon Museum, Tokio": "Artizon Museum, Tokyo",
  "Princeton University Art Museum": "Princeton University Art Museum",
  "Puschkin-Museum, Moskau": "Musée Pouchkine, Moscou",
  "Fondation Beyeler, Riehen": "Fondation Beyeler, Riehen",
  "Galleria Nazionale d’Arte Moderna, Rom": "Galleria Nazionale d’Arte Moderna, Rome",
  "Museo Thyssen-Bornemisza, Madrid": "Museo Thyssen-Bornemisza, Madrid",
  "Nelson-Atkins Museum of Art, Kansas City": "Nelson-Atkins Museum of Art, Kansas City",
  "Baltimore Museum of Art": "Baltimore Museum of Art"
});
  P.works = Object.assign(P.works || {}, {
  "czson87": {
    "title": "Le fils Paul",
    "museum": "National Gallery of Art, Washington"
  },
  "czmarne": {
    "title": "Au bord de la Marne",
    "museum": "Ermitage, Saint-Pétersbourg"
  },
  "czcreteil": {
    "title": "Le pont sur la Marne à Créteil",
    "museum": "Collection non établie"
  },
  "czchantilly": {
    "title": "Allée à Chantilly",
    "museum": "Toledo Museum of Art"
  },
  "czselfpalette": {
    "title": "Autoportrait à la palette",
    "museum": "Collection E. G. Bührle, Kunsthaus Zürich"
  },
  "czsvpine": {
    "title": "Montagne Sainte-Victoire au grand pin",
    "museum": "Courtauld Gallery, Londres"
  },
  "czsvviaduct": {
    "title": "Montagne Sainte-Victoire et le viaduc de la vallée de l’Arc",
    "museum": "Collection non établie"
  },
  "czsvvalcros": {
    "title": "Montagne Sainte-Victoire et le viaduc du côté de Valcros",
    "museum": "Collection non établie"
  },
  "czbellevue": {
    "title": "Maison de Bellevue et pigeonnier",
    "museum": "Museum Folkwang, Essen"
  },
  "czgrandpin": {
    "title": "Grand pin et terres rouges",
    "museum": "Ermitage, Saint-Pétersbourg"
  },
  "cards": {
    "title": "Les joueurs de cartes",
    "museum": "Musée d’Orsay, Paris"
  },
  "czcardmet": {
    "title": "Les joueurs de cartes",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czcardplayer": {
    "title": "Le joueur de cartes",
    "museum": "Musée d’Orsay, Paris"
  },
  "czpipe": {
    "title": "Homme à la pipe",
    "museum": "National Gallery of Art, Washington"
  },
  "czpeasant": {
    "title": "Paysan assis",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czcoffee": {
    "title": "La femme à la cafetière",
    "museum": "Musée d’Orsay, Paris"
  },
  "czmadred": {
    "title": "Madame Cézanne en robe rouge",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czconserv": {
    "title": "Madame Cézanne dans la serre",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czmadyellow": {
    "title": "Madame Cézanne au fauteuil jaune",
    "museum": "Art Institute of Chicago"
  },
  "czmadblue": {
    "title": "Madame Cézanne en bleu",
    "museum": "Museum of Fine Arts, Houston"
  },
  "czmadhat": {
    "title": "Madame Cézanne au chapeau vert",
    "museum": "Barnes Foundation, Philadelphie"
  },
  "apples": {
    "title": "La corbeille de pommes",
    "museum": "Art Institute of Chicago"
  },
  "czginger": {
    "title": "Pot à gingembre, grenade et poires",
    "museum": "Phillips Collection, Washington"
  },
  "czeggplant": {
    "title": "Nature morte au pot à gingembre et aux aubergines",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czcurtain": {
    "title": "Nature morte au rideau",
    "museum": "Ermitage, Saint-Pétersbourg"
  },
  "czonions": {
    "title": "Nature morte aux oignons",
    "museum": "Musée d’Orsay, Paris"
  },
  "czgetty": {
    "title": "Nature morte aux pommes",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "czpeaches": {
    "title": "Quatre pêches sur une assiette",
    "museum": "Barnes Foundation, Philadelphie"
  },
  "czapplpeach": {
    "title": "Nature morte aux pommes et aux pêches",
    "museum": "National Gallery of Art, Washington"
  },
  "czgeffroy": {
    "title": "Portrait de Gustave Geffroy",
    "museum": "Musée d’Orsay, Paris"
  },
  "czvollard": {
    "title": "Portrait d’Ambroise Vollard",
    "museum": "Petit Palais, Paris"
  },
  "czselfberet": {
    "title": "Autoportrait au béret",
    "museum": "Museum of Fine Arts, Boston"
  },
  "czitalian": {
    "title": "Jeune Italienne à la table",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "czannecy": {
    "title": "Le lac d’Annecy",
    "museum": "Courtauld Gallery, Londres"
  },
  "czbibquarry": {
    "title": "La carrière de Bibémus",
    "museum": "Barnes Foundation, Philadelphie"
  },
  "czbibbarnes": {
    "title": "Bibémus",
    "museum": "Barnes Foundation, Philadelphie"
  },
  "czbibsv": {
    "title": "La montagne Sainte-Victoire vue de la carrière de Bibémus",
    "museum": "Baltimore Museum of Art"
  },
  "czbibfolk": {
    "title": "La carrière de Bibémus",
    "museum": "Collection non établie"
  },
  "czbibnelson": {
    "title": "La carrière de Bibémus",
    "museum": "Nelson-Atkins Museum of Art, Kansas City"
  },
  "czbibrocks": {
    "title": "Rochers et branches à Bibémus",
    "museum": "Petit Palais, Paris"
  },
  "czcnnga": {
    "title": "Château Noir",
    "museum": "National Gallery of Art, Washington"
  },
  "czcnmaria": {
    "title": "Maison Maria avec vue sur le Château Noir",
    "museum": "Kimbell Art Museum, Fort Worth"
  },
  "czcnmill": {
    "title": "La meule dans le parc du Château Noir",
    "museum": "Philadelphia Museum of Art"
  },
  "czcnsv": {
    "title": "Montagne Sainte-Victoire et Château Noir",
    "museum": "Artizon Museum, Tokyo"
  },
  "czcncistern": {
    "title": "La citerne dans le parc du Château Noir",
    "museum": "Princeton University Art Museum"
  },
  "czcnview": {
    "title": "Vue du Château Noir",
    "museum": "Collection non établie"
  },
  "czsvnoir": {
    "title": "Château Noir et montagne Sainte-Victoire",
    "museum": "Collection non établie"
  },
  "czforestpath": {
    "title": "Chemin forestier vers le Château Noir",
    "museum": "Fondation Beyeler, Riehen"
  },
  "czlvmet": {
    "title": "Montagne Sainte-Victoire",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czlvsv": {
    "title": "La montagne Sainte-Victoire vue des Lauves",
    "museum": "Musée Pouchkine, Moscou"
  },
  "czlvgarden": {
    "title": "Le jardin des Lauves",
    "museum": "Phillips Collection, Washington"
  },
  "czlvbend": {
    "title": "Le virage en haut du chemin des Lauves",
    "museum": "Fondation Beyeler, Riehen"
  },
  "czlvterrace": {
    "title": "La terrasse dans le jardin des Lauves",
    "museum": "Collection non établie"
  },
  "czcabanon": {
    "title": "Le Cabanon de Jourdan",
    "museum": "Galleria Nazionale d’Arte Moderna, Rome"
  },
  "czvallier": {
    "title": "Le jardinier Vallier",
    "museum": "National Gallery of Art, Washington"
  },
  "czvallierbu": {
    "title": "Le vieux jardinier",
    "museum": "Collection E. G. Bührle, Kunsthaus Zürich"
  },
  "czpaysan": {
    "title": "Portrait d’un paysan",
    "museum": "Museo Thyssen-Bornemisza, Madrid"
  },
  "czwomanblue": {
    "title": "Femme assise en bleu",
    "museum": "Phillips Collection, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.cezanne = {
  "title": "Le parcours de vie de Paul Cézanne",
  "life": "1839–1906",
  "part": "Parties 1–2 · 1839–1906",
  "subtitle": "D’Aix à Paris et retour en Provence, jusqu’à l’atelier des Lauves",
  "intro": "Voyage avec Paul Cézanne à travers toute sa vie : de l’enfance à Aix-en-Provence et de l’amitié avec Émile Zola, en passant par les études de droit, l’Académie Suisse à Paris, la période sombre dite « couillarde », le tournant avec Camille Pissarro à Pontoise et à Auvers, les expositions de 1874 et de 1877, L’Estaque, Hortense Fiquet et le fils Paul, le Jas de Bouffan et l’année 1886 – jusqu’à la montagne Sainte-Victoire, aux joueurs de cartes, aux pommes et aux natures mortes, à l’exposition chez Ambroise Vollard en 1895, à l’atelier des Lauves et à la mort de Cézanne à Aix le 22 octobre 1906. De brèves stations, des tableaux à colorier et des voix tirées de lettres à Émile Bernard et au fils Paul. Les baigneurs et les scènes violentes de jeunesse sont laissés de côté.",
  "ending": [
    "Le 15 octobre 1906, alors qu’il peint en plein air, Cézanne est surpris par un orage. Il s’effondre ; un charretier le ramène chez lui. Le lendemain, il tente de reprendre le travail et s’effondre de nouveau.",
    "Le 22 octobre 1906, Paul Cézanne meurt à Aix-en-Provence, à soixante-sept ans. Il reste les paysages de Provence, les natures mortes, les portraits – et une œuvre qui tient le monde visible en formes fermes et colorées."
  ],
  "epilogue": "Paul Cézanne meurt le 22 octobre 1906 à Aix-en-Provence. Quelques jours plus tôt, il s’était effondré, en peignant en plein air, dans un orage. Il reste la montagne Sainte-Victoire, les joueurs de cartes, les pommes, les carrières de Bibémus, le Château Noir, l’atelier des Lauves et les portraits tardifs du jardinier Vallier."
};
  P.stations = Object.assign(P.stations || {}, {
  "cezannemarne": {
    "place": "Paris, la Marne et Chantilly",
    "when": "1886–1890",
    "mapLabel": "Marne",
    "intro": [
      "Après la mort du père en octobre 1886, l’héritage laisse Cézanne indépendant. Hortense et le fils Paul ont été légitimés ; ils vivent souvent à Paris, tandis que lui passe de la ville à Aix.",
      "Il peint le fils devenu adolescent, travaille au bord de la Marne – à Créteil, entre autres – et en 1888 à Chantilly, au nord de Paris. Vers 1890 naît un autoportrait à la palette.",
      "Les années qui suivent 1886 ne sont pas un éloignement de la Provence, mais elles le ramènent encore aux rivières et aux allées de l’Île-de-France."
    ]
  },
  "cezannesv": {
    "place": "La montagne Sainte-Victoire",
    "when": "1885–1897",
    "mapLabel": "Sainte-Victoire",
    "intro": [
      "À l’est d’Aix s’élève la montagne Sainte-Victoire. Dès le milieu des années 1880, la montagne devient pour Cézanne un motif central : avec le grand pin au premier plan, avec le viaduc de la vallée de l’Arc, depuis Valcros.",
      "S’y ajoutent des vues de la maison de Bellevue avec le pigeonnier, qui appartient à la sœur Rose et à son mari Maxime Conil, et plus tard le grand pin sur la terre rouge.",
      "Cézanne revient à cette montagne pendant deux décennies. Chaque version cherche la même forme dans un nouvel ordre de couleur et de plan."
    ]
  },
  "cezannecards": {
    "place": "Les joueurs de cartes",
    "when": "1890–1896",
    "mapLabel": "Cartes",
    "intro": [
      "Au début des années 1890, Cézanne peint une suite de joueurs de cartes. Des paysans et des ouvriers du Jas de Bouffan lui servent de modèles. Il naît plusieurs versions à deux joueurs ou davantage.",
      "Au même monde appartiennent des études isolées : un joueur de cartes de profil, un homme à la pipe, un paysan assis. Vers 1895 s’ajoute le portrait d’une femme à la cafetière.",
      "Les figures sont assises, sans action dramatique. Cézanne construit les corps, la table et l’espace à partir de plages de couleur fermes."
    ]
  },
  "cezannemadame": {
    "place": "Hortense Fiquet",
    "when": "1886–1895",
    "mapLabel": "Hortense",
    "intro": [
      "Après le mariage de 1886, Cézanne continue de peindre Hortense Fiquet : en robe rouge, dans un fauteuil jaune, en bleu, en 1891 dans la serre, en 1891-1892 avec un chapeau vert.",
      "En ces années, Hortense vit souvent avec le fils à Paris ; Cézanne travaille surtout à Aix. Les portraits ne cherchent pas la proximité familière, mais un ordre ferme de pose, de vêtement et d’espace.",
      "Au fil des années, il naît plus de quarante portraits peints d’Hortense. Les cinq tableaux de cette station appartiennent aux versions connues de la fin des années 1880 et du début des années 1890."
    ]
  },
  "cezanneapples": {
    "place": "Pommes et natures mortes",
    "when": "1890–1905",
    "mapLabel": "Pommes",
    "intro": [
      "La nature morte reste pour Cézanne un champ propre, à côté du paysage et du portrait. Pommes, pêches, oignons, un pot à gingembre, un rideau, une nappe : des choses quotidiennes, posées avec fermeté et calme.",
      "La corbeille de pommes d’environ 1893 est l’une des versions les plus connues. Dans les mêmes années naissent des natures mortes à la grenade et aux poires, aux aubergines, aux oignons et aux pêches sur une assiette.",
      "Vers 1905, dans les dernières années, il revient encore aux pommes et aux pêches. La légère inclinaison des tables et la plage de couleur ferme restent ses moyens."
    ]
  },
  "cezannevollard": {
    "place": "Paris · Vollard et la reconnaissance tardive",
    "when": "1895–1900",
    "mapLabel": "Vollard",
    "intro": [
      "En novembre et décembre 1895, Ambroise Vollard montre dans sa galerie de la rue Laffitte, à Paris, la première grande exposition personnelle de Cézanne. La reconnaissance arrive tard, mais elle demeure.",
      "En 1895-1896, Cézanne portraiture le critique Gustave Geffroy ; en 1899, Vollard lui-même pose. S’y ajoutent un autoportrait au béret, le portrait d’une jeune Italienne et, en 1896, le lac d’Annecy, peint lors d’un séjour à Talloires.",
      "En 1897, la mère meurt. En 1899, le Jas de Bouffan est vendu. Cézanne reste à Aix et cherche de nouveaux lieux de travail dans la campagne à l’est de la ville."
    ]
  },
  "cezannebibemus": {
    "place": "La carrière de Bibémus",
    "when": "1895–1904",
    "mapLabel": "Bibémus",
    "intro": [
      "À l’est d’Aix se trouve la carrière de Bibémus. À partir du milieu des années 1890, Cézanne y loue une cabane et travaille devant les parois de roche ocre, les pins et la vue vers la Sainte-Victoire.",
      "Il naît plusieurs versions de la carrière : des espaces étroits de roche, des vues plus ouvertes avec des arbres, et des vues où la montagne apparaît au-dessus de la pierre.",
      "Jusque dans les premières années du nouveau siècle, il revient à Bibémus. La pierre elle-même devient le motif, construite avec fermeté et clarté."
    ]
  },
  "cezannechateau": {
    "place": "Château Noir",
    "when": "1890–1904",
    "mapLabel": "Château Noir",
    "intro": [
      "Sur la route de Le Tholonet se dresse le Château Noir, une maison dans un parc à l’est d’Aix. Cézanne y travaille pendant des années : il loue un temps une pièce, peint la façade, le parc, la citerne, la meule et le chemin forestier.",
      "Souvent la maison apparaît avec la montagne Sainte-Victoire. Les vues précoces commencent déjà vers 1887-1890 ; les versions plus denses appartiennent surtout aux années 1890 et jusqu’en 1904.",
      "Lorsque ce lieu de travail lui échappe, Cézanne se fait construire un atelier à lui, au nord de la ville, aux Lauves."
    ]
  },
  "cezannelauves": {
    "place": "L’atelier des Lauves",
    "when": "1902–1906",
    "mapLabel": "Les Lauves",
    "intro": [
      "En 1901, Cézanne achète un terrain sur le chemin des Lauves, au nord d’Aix ; en 1902, l’atelier est debout. De là, il peint les vues tardives de la Sainte-Victoire, le jardin, la terrasse et le virage du chemin, en haut de la pente.",
      "En 1904, le Salon d’Automne à Paris consacre une salle à son œuvre. Dans les mêmes années, il écrit au jeune peintre Émile Bernard et lui expose qu’il faut traiter la nature par le cylindre, la sphère et le cône.",
      "En 1906 naît aussi le Cabanon de Jourdan, à l’orée de la ville. L’atelier des Lauves reste jusqu’à la fin son lieu de travail à Aix."
    ]
  },
  "cezanne1906": {
    "place": "Vallier et les derniers mois",
    "when": "1902–1906",
    "mapLabel": "1906",
    "intro": [
      "Dans les dernières années, Cézanne portraiture à plusieurs reprises son jardinier Vallier, souvent sur la terrasse de l’atelier. S’y ajoutent le portrait d’un paysan et une femme assise en bleu.",
      "À Émile Bernard, il écrit le 23 octobre 1905 qu’il lui doit la vérité en peinture. Le 8 septembre 1906, il dit à son fils Paul que, comme peintre, il devient plus lucide devant la nature, mais que la réalisation de ses sensations reste pénible.",
      "Le 15 octobre 1906, alors qu’il peint en plein air, il est surpris par un orage et s’effondre ; un charretier le ramène chez lui. Le lendemain, il tente de reprendre le travail et s’effondre de nouveau. Le 22 octobre 1906, Paul Cézanne meurt à Aix-en-Provence."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "czson87": {
    "text": [
      "Le fils est assis de trois quarts, le regard calme, la forme de la tête et des épaules solidement construite. En ces années, Paul est un adolescent.",
      "Ce portrait date de 1886-1887, dans la période qui suit le mariage par lequel le fils est légitimé. Il est accroché à la National Gallery of Art de Washington."
    ],
    "fact": "1886–1887. National Gallery of Art, Washington."
  },
  "czmarne": {
    "text": [
      "Les arbres se tiennent près de l’eau ; la rive, le feuillage et le reflet sont construits en plages de couleur calmes et bien jointes.",
      "Vers 1888, Cézanne travaille au bord de la Marne, à l’est de Paris. Le tableau appartient aujourd’hui à l’Ermitage de Saint-Pétersbourg."
    ],
    "fact": "vers 1888. Ermitage, Saint-Pétersbourg."
  },
  "czcreteil": {
    "text": [
      "Un pont traverse la rivière ; maisons, rive et eau s’ordonnent en bandes claires et calmes.",
      "Le tableau est daté de 1888 et naît à Créteil, au bord de la Marne, non loin de Paris."
    ],
    "fact": "1888. Collection non établie."
  },
  "czchantilly": {
    "text": [
      "Une allée s’enfonce en profondeur : des troncs à gauche et à droite, le chemin clair, le feuillage comme un dais calme au-dessus.",
      "En 1888, Cézanne peint à Chantilly, au nord de Paris. Le tableau est accroché au Toledo Museum of Art."
    ],
    "fact": "1888. Toledo Museum of Art."
  },
  "czselfpalette": {
    "text": [
      "Cézanne se tient avec la palette devant la toile, le regard ferme, la forme de la tête et de l’épaule en quelques plans clairs.",
      "L’autoportrait date d’environ 1890. Il appartient à la collection E. G. Bührle et est accroché au Kunsthaus Zürich."
    ],
    "fact": "vers 1890. Collection E. G. Bührle, Kunsthaus Zürich."
  },
  "czsvpine": {
    "text": [
      "Au premier plan se dresse un grand pin ; au-delà s’élève la montagne Sainte-Victoire, forme claire et calme au-dessus de la plaine.",
      "Vers 1887, la montagne à l’est d’Aix devient un motif récurrent. Cette version est accrochée à la Courtauld Gallery de Londres."
    ],
    "fact": "vers 1887. Courtauld Gallery, Londres."
  },
  "czsvviaduct": {
    "text": [
      "À travers la plaine court le viaduc de la vallée de l’Arc ; au-dessus se dresse la montagne Sainte-Victoire, ferme et claire.",
      "Le tableau date de 1885-1887. Cézanne ordonne plaine, viaduc et montagne en un paysage calme et construit."
    ],
    "fact": "1885–1887. Collection non établie."
  },
  "czsvvalcros": {
    "text": [
      "Depuis Valcros, le viaduc et la plaine s’étendent devant la montagne ; les formes s’étagent clairement, le ciel est vaste.",
      "Le tableau est daté de 1887. Cézanne cherche la même montagne depuis un autre point de vue."
    ],
    "fact": "1887. Collection non établie."
  },
  "czbellevue": {
    "text": [
      "La maison et le pigeonnier rond se tiennent fermement dans le paysage ; murs, toit et verdure sont posés en quelques plans clairs.",
      "Vers 1890, Cézanne peint Bellevue, une propriété à l’ouest d’Aix qui appartient à sa sœur Rose et à son mari Maxime Conil. Le tableau est accroché au Museum Folkwang d’Essen."
    ],
    "fact": "vers 1890. Museum Folkwang, Essen."
  },
  "czgrandpin": {
    "text": [
      "Un grand pin se dresse au-dessus d’un sol rougeâtre ; tronc, cime et terre sont construits en plages de couleur calmes et fortes.",
      "Le tableau date de 1895-1897, dans la campagne d’Aix. Il appartient à l’Ermitage de Saint-Pétersbourg."
    ],
    "fact": "1895–1897. Ermitage, Saint-Pétersbourg."
  },
  "cards": {
    "text": [
      "Deux hommes sont assis à une petite table et jouent aux cartes, sans que l’un regarde l’autre. Les figures et la table sont construites en plages de couleur calmes et fermes.",
      "Cette version à deux joueurs date d’environ 1894-1895. Des paysans du domaine familial lui servent de modèles. Le tableau est accroché au Musée d’Orsay à Paris."
    ],
    "fact": "vers 1894–1895. Musée d’Orsay, Paris."
  },
  "czcardmet": {
    "text": [
      "Deux joueurs se font face, une bouteille sur la table entre eux ; les corps sont lourds et calmes, l’espace est étroit.",
      "Cette version plus ancienne, de 1890-1892, est accrochée au Metropolitan Museum of Art de New York. Cézanne peint le motif en plusieurs variantes."
    ],
    "fact": "1890–1892. Metropolitan Museum of Art, New York."
  },
  "czcardplayer": {
    "text": [
      "Un seul joueur est assis de profil à la table, les cartes à la main, le chapeau sombre, la pose immobile.",
      "Cette étude de 1890-1892 appartient au cercle des tableaux de joueurs de cartes. Elle est accrochée au Musée d’Orsay à Paris."
    ],
    "fact": "1890–1892. Musée d’Orsay, Paris."
  },
  "czpipe": {
    "text": [
      "Un homme au chapeau et à la pipe est assis devant un fond simple ; le visage est fermement modelé, le regard tourné vers l’intérieur.",
      "Ce portrait d’un paysan d’Aix, dans le cercle des joueurs de cartes, date de 1892-1896. Il est accroché à la National Gallery of Art de Washington."
    ],
    "fact": "1892–1896. National Gallery of Art, Washington."
  },
  "czpeasant": {
    "text": [
      "Un paysan est assis, les bras croisés, le regard baissé, la veste et le pantalon dans des tons assourdis et fermes.",
      "Vers 1892, Cézanne peint ce paysan assis. Le tableau est accroché au Metropolitan Museum of Art de New York."
    ],
    "fact": "vers 1892. Metropolitan Museum of Art, New York."
  },
  "czcoffee": {
    "text": [
      "Une femme est assise droite à la table, près d’elle une cafetière et une tasse ; la pose est stricte, les objets clairs et fermes.",
      "Ce portrait, probablement d’une servante d’Aix, date d’environ 1895. Il est accroché au Musée d’Orsay à Paris."
    ],
    "fact": "vers 1895. Musée d’Orsay, Paris."
  },
  "czmadred": {
    "text": [
      "Hortense est assise en robe rouge, le buste légèrement tourné, le regard calme ; le rouge se tient ferme contre l’espace construit.",
      "Vers 1888-1890, Cézanne peint sa femme dans cette robe rouge. Le tableau est accroché au Metropolitan Museum of Art de New York."
    ],
    "fact": "vers 1888–1890. Metropolitan Museum of Art, New York."
  },
  "czconserv": {
    "text": [
      "Hortense est assise dans la serre, derrière elle les plantes et l’armature des vitres ; la pose est droite, le visage clairement dessiné.",
      "Le tableau est daté de 1891. Il compte parmi les portraits les plus connus d’Hortense et est accroché au Metropolitan Museum of Art."
    ],
    "fact": "1891. Metropolitan Museum of Art, New York."
  },
  "czmadyellow": {
    "text": [
      "Hortense est assise dans un fauteuil jaune, les mains sur les genoux, la robe rouge sombre, le fond calme et plan.",
      "Ce portrait date de 1888-1890. Il est accroché à l’Art Institute of Chicago."
    ],
    "fact": "1888–1890. Art Institute of Chicago."
  },
  "czmadblue": {
    "text": [
      "Hortense porte une robe bleue ; le corps est fermement posé dans l’espace, le fond divisé en bandes calmes.",
      "Cézanne peint ce portrait vers 1888-1890. Il est accroché au Museum of Fine Arts de Houston."
    ],
    "fact": "vers 1888–1890. Museum of Fine Arts, Houston."
  },
  "czmadhat": {
    "text": [
      "Hortense porte un chapeau vert ; la tête, le chapeau et le buste forment une silhouette calme et fermée contre le fond plus sombre.",
      "Ce portrait date de 1891-1892. Il appartient à la Barnes Foundation de Philadelphie."
    ],
    "fact": "1891–1892. Barnes Foundation, Philadelphie."
  },
  "apples": {
    "text": [
      "Des pommes, une bouteille, une pâtisserie et une nappe pliée : Cézanne dispose les choses quotidiennes de telle sorte qu’elles forment un petit monde stable.",
      "Cette corbeille de pommes date d’environ 1893. La légère inclinaison de la table est volontaire. Le tableau est accroché à l’Art Institute of Chicago."
    ],
    "fact": "vers 1893. Art Institute of Chicago."
  },
  "czginger": {
    "text": [
      "Un pot à gingembre se tient parmi une grenade, des poires et un linge ; les objets sont fermement posés, les couleurs chaudes et calmes.",
      "La nature morte est datée de 1893. Elle appartient à la Phillips Collection de Washington."
    ],
    "fact": "1893. Phillips Collection, Washington."
  },
  "czeggplant": {
    "text": [
      "Des aubergines, un pot à gingembre et des fruits reposent sur la nappe ; les fruits sombres et le linge blanc se tiennent en équilibre.",
      "Cette nature morte date de 1893-1894. Elle est accrochée au Metropolitan Museum of Art de New York."
    ],
    "fact": "1893–1894. Metropolitan Museum of Art, New York."
  },
  "czcurtain": {
    "text": [
      "Derrière les fruits, le pichet et le linge tombe un rideau à motifs ; l’étoffe introduit du mouvement dans l’arrangement fermement construit.",
      "Cette nature morte date d’environ 1898. Elle appartient à l’Ermitage de Saint-Pétersbourg."
    ],
    "fact": "vers 1898. Ermitage, Saint-Pétersbourg."
  },
  "czonions": {
    "text": [
      "Des oignons, une bouteille et un linge reposent sur le plateau ; les formes rondes et le blanc du tissu sont clairement opposés.",
      "Cézanne peint cette nature morte en 1896-1898. Elle est accrochée au Musée d’Orsay à Paris."
    ],
    "fact": "1896–1898. Musée d’Orsay, Paris."
  },
  "czgetty": {
    "text": [
      "Des pommes reposent auprès d’un pichet et d’un linge ; chaque pomme a son propre poids, la table demeure une surface calme.",
      "Cette nature morte date de 1893-1894. Elle appartient au J. Paul Getty Museum de Los Angeles."
    ],
    "fact": "1893–1894. J. Paul Getty Museum, Los Angeles."
  },
  "czpeaches": {
    "text": [
      "Quatre pêches reposent sur une assiette ; les fruits ronds et le plat simple sont construits avec quelques tons clairs.",
      "Cette petite nature morte date d’environ 1890-1894. Elle appartient à la Barnes Foundation de Philadelphie."
    ],
    "fact": "vers 1890–1894. Barnes Foundation, Philadelphie."
  },
  "czapplpeach": {
    "text": [
      "Des pommes et des pêches reposent devant un pichet et un linge ; les formes sont amples, la couleur luit avec calme et densité.",
      "Cette nature morte date d’environ 1905, dans les dernières années. Elle est accrochée à la National Gallery of Art de Washington."
    ],
    "fact": "vers 1905. National Gallery of Art, Washington."
  },
  "czgeffroy": {
    "text": [
      "Le critique est assis à son bureau, entouré de livres ; l’espace est étroitement construit, la séance est longue et reste inachevée.",
      "En 1895-1896, Cézanne portraiture Gustave Geffroy, qui s’est prononcé en faveur de sa peinture. Le tableau est accroché au Musée d’Orsay à Paris."
    ],
    "fact": "1895–1896. Musée d’Orsay, Paris."
  },
  "czvollard": {
    "text": [
      "Vollard est assis, le regard baissé, le crâne chauve, les mains sur les genoux ; la forme est lourde et calme, presque fermée.",
      "En 1899, Cézanne peint le marchand qui, en 1895, lui a donné sa première grande exposition personnelle. Le tableau est accroché au Petit Palais à Paris."
    ],
    "fact": "1899. Petit Palais, Paris."
  },
  "czselfberet": {
    "text": [
      "Cézanne porte un béret sombre ; le visage est étroitement modelé, le regard ferme, le fond simple.",
      "Cet autoportrait tardif date de 1898-1900. Il est accroché au Museum of Fine Arts de Boston."
    ],
    "fact": "1898–1900. Museum of Fine Arts, Boston."
  },
  "czitalian": {
    "text": [
      "Une jeune femme s’appuie à la table, la tête posée sur la main ; l’étoffe de la robe et la pose calme portent le tableau.",
      "Ce portrait date d’environ 1895-1900. Il appartient au J. Paul Getty Museum de Los Angeles."
    ],
    "fact": "vers 1895–1900. J. Paul Getty Museum, Los Angeles."
  },
  "czannecy": {
    "text": [
      "Le lac s’étend, calme, entre les montagnes ; au premier plan un arbre, en face un château comme forme claire et construite.",
      "En 1896, Cézanne séjourne avec sa famille à Talloires, au bord du lac d’Annecy. Le tableau est accroché à la Courtauld Gallery de Londres."
    ],
    "fact": "1896. Courtauld Gallery, Londres."
  },
  "czbibquarry": {
    "text": [
      "Des parois de roche ocre se dressent derrière des pins et des buissons ; les arêtes de la carrière sont posées dans le paysage comme des plans construits.",
      "En 1895, Cézanne peint dans la carrière de Bibémus, à l’est d’Aix, où il loue une cabane. Le tableau appartient à la Barnes Foundation."
    ],
    "fact": "1895. Barnes Foundation, Philadelphie."
  },
  "czbibbarnes": {
    "text": [
      "Rochers, arbres et la pierre rougeâtre de la carrière s’enchevêtrent ; la lumière et l’ombre divisent clairement les plans.",
      "Cette version date de 1894-1895. Elle appartient aussi à la Barnes Foundation de Philadelphie."
    ],
    "fact": "1894–1895. Barnes Foundation, Philadelphie."
  },
  "czbibsv": {
    "text": [
      "Depuis la carrière, la montagne apparaît au-dessus des rochers et des pins ; les arêtes ocre conduisent le regard vers la silhouette lointaine.",
      "Vers 1897, Cézanne relie la carrière de Bibémus à la Sainte-Victoire. Le tableau est accroché au Baltimore Museum of Art."
    ],
    "fact": "vers 1897. Baltimore Museum of Art."
  },
  "czbibfolk": {
    "text": [
      "De hautes parois de roche jaunâtre s’ouvrent comme un intérieur ; en haut, le vert des arbres ferme la vue.",
      "Cette vue de la carrière date d’environ 1895. En ces années, Cézanne revient sans cesse à Bibémus."
    ],
    "fact": "vers 1895. Collection non établie."
  },
  "czbibnelson": {
    "text": [
      "Les parois de roche se dressent, abruptes et claires ; les arbres encadrent le bord supérieur, la pierre elle-même devient le motif.",
      "Cette version date de 1898-1900. Elle est accrochée au Nelson-Atkins Museum of Art de Kansas City."
    ],
    "fact": "1898–1900. Nelson-Atkins Museum of Art, Kansas City."
  },
  "czbibrocks": {
    "text": [
      "Des branches s’étendent sur les rochers ; pierre et feuillage s’emboîtent en taches de couleur courtes et denses.",
      "En 1900-1904, dans une version tardive, Bibémus reste un lieu de travail. Le tableau est accroché au Petit Palais à Paris."
    ],
    "fact": "1900–1904. Petit Palais, Paris."
  },
  "czcnnga": {
    "text": [
      "La maison se tient parmi les arbres, la façade chaude et ferme, le feuillage disposé densément autour d’elle.",
      "En 1900-1904, Cézanne peint le Château Noir, à l’est d’Aix, sur la route de Le Tholonet. Le tableau est accroché à la National Gallery of Art de Washington."
    ],
    "fact": "1900–1904. National Gallery of Art, Washington."
  },
  "czcnmaria": {
    "text": [
      "Au premier plan se dresse une maison simple ; au-delà apparaît le Château Noir parmi les arbres ; le chemin s’enfonce en profondeur.",
      "Cette vue date d’environ 1895. Le tableau est accroché au Kimbell Art Museum de Fort Worth."
    ],
    "fact": "vers 1895. Kimbell Art Museum, Fort Worth."
  },
  "czcnmill": {
    "text": [
      "Une ancienne meule gît parmi les rochers et les troncs ; la lumière tombe dans le parc, les formes sont lourdes et calmes.",
      "En 1898-1900, Cézanne peint dans le parc du Château Noir. Le tableau est accroché au Philadelphia Museum of Art."
    ],
    "fact": "1898–1900. Philadelphia Museum of Art."
  },
  "czcnsv": {
    "text": [
      "Le Château Noir se tient au second plan ; au-dessus s’élève la Sainte-Victoire ; maison et montagne s’emboîtent dans le même ordre construit.",
      "Le tableau est daté de 1904. Il est accroché à l’Artizon Museum de Tokyo."
    ],
    "fact": "1904. Artizon Museum, Tokyo."
  },
  "czcncistern": {
    "text": [
      "Parmi les troncs et les rochers se trouve la citerne ; l’ombre du parc et la maçonnerie claire se tiennent en équilibre.",
      "Cette vue dans le parc date d’environ 1900. Le tableau appartient au Princeton University Art Museum."
    ],
    "fact": "vers 1900. Princeton University Art Museum."
  },
  "czcnview": {
    "text": [
      "La maison apparaît parmi les arbres, sur la hauteur ; la façade est claire, l’entourage dense et vert.",
      "Vers 1887-1890, dans une version précoce, Cézanne saisit le Château Noir. Il reviendra en ce lieu pendant de nombreuses années."
    ],
    "fact": "vers 1887–1890. Collection non établie."
  },
  "czsvnoir": {
    "text": [
      "Le Château Noir se tient devant la plaine ; au-dessus s’élève la Sainte-Victoire ; les deux formes sont posées avec sobriété et fermeté.",
      "Vers 1890-1895, Cézanne relie la maison à la montagne. Le point de vue reste la campagne à l’est d’Aix."
    ],
    "fact": "vers 1890–1895. Collection non établie."
  },
  "czforestpath": {
    "text": [
      "Un chemin traverse le bois, les troncs serrés, la lumière en taches sur le sol.",
      "Ce chemin forestier, du Mas Jolie au Château Noir, date de 1900-1902. Le tableau appartient à la Fondation Beyeler à Riehen."
    ],
    "fact": "1900–1902. Fondation Beyeler, Riehen."
  },
  "czlvmet": {
    "text": [
      "La montagne se tient en vastes plages de couleur lumineuses ; la plaine devant elle est assemblée en touches courtes et denses.",
      "En 1902-1906, Cézanne peint la Sainte-Victoire depuis les hauteurs des Lauves, au nord d’Aix. Le tableau est accroché au Metropolitan Museum of Art de New York."
    ],
    "fact": "1902–1906. Metropolitan Museum of Art, New York.",
    "quote": {
      "text": "Permettez-moi de vous répéter ce que je vous disais ici : traitez la nature par le cylindre, la sphère, le cône, le tout mis en perspective, soit que chaque côté d’un objet, d’un plan, se dirige vers un point central.",
      "cite": "Lettre à Émile Bernard, Aix-en-Provence, 15 avril 1904."
    }
  },
  "czlvsv": {
    "text": [
      "Depuis les Lauves, la montagne s’étend, ouverte, au-dessus de la plaine ; ciel et versant se fondent en larges bandes froides et chaudes.",
      "Cette vue tardive date d’environ 1904-1906. Elle est accrochée au musée Pouchkine de Moscou."
    ],
    "fact": "vers 1904–1906. Musée Pouchkine, Moscou."
  },
  "czlvgarden": {
    "text": [
      "Dans le jardin, arbres et buissons se tiennent en taches de couleur ouvertes et lumineuses ; l’espace demeure aéré et n’est pas tout à fait fermé.",
      "Vers 1906, dans l’une des dernières années, Cézanne peint le jardin de l’atelier. Le tableau appartient à la Phillips Collection de Washington."
    ],
    "fact": "vers 1906. Phillips Collection, Washington.",
    "quote": {
      "text": "Enfin je te dirai que je deviens, comme peintre, plus lucide devant la nature, mais que chez moi, la réalisation de mes sensations est toujours très pénible. Je ne puis arriver à l’intensité qui se développe à mes sens, je n’ai pas cette magnifique richesse de coloration qui anime la nature.",
      "cite": "Lettre à son fils Paul, 8 septembre 1906."
    }
  },
  "czlvbend": {
    "text": [
      "Le chemin tourne parmi les arbres et les maisons ; la courbe elle-même devient une forme construite, la vue reste étroite.",
      "Cette vue, en haut du chemin des Lauves, date de 1904-1906. Le tableau appartient à la Fondation Beyeler à Riehen."
    ],
    "fact": "1904–1906. Fondation Beyeler, Riehen."
  },
  "czlvterrace": {
    "text": [
      "La terrasse s’ouvre sous les arbres ; mur, feuillage et le sol clair sont posés en vastes plans calmes.",
      "En 1902-1906, Cézanne peint la terrasse du nouvel atelier qu’il s’est fait construire au nord d’Aix."
    ],
    "fact": "1902–1906. Collection non établie."
  },
  "czcabanon": {
    "text": [
      "Une petite maison se tient sous les arbres, les murs clairs, le toit ferme, le feuillage autour en taches ouvertes.",
      "En 1906, dans sa dernière année, Cézanne peint le Cabanon de Jourdan, à l’orée d’Aix. Le tableau est accroché à la Galleria Nazionale d’Arte Moderna de Rome."
    ],
    "fact": "1906. Galleria Nazionale d’Arte Moderna, Rome."
  },
  "czvallier": {
    "text": [
      "Vallier est assis en plein air, la barbe claire, la pose calme ; la veste et le pantalon sont construits en vastes plages de couleur fermes.",
      "En 1906, Cézanne portraiture à plusieurs reprises son jardinier Vallier, souvent sur la terrasse de l’atelier des Lauves. Le tableau est accroché à la National Gallery of Art de Washington."
    ],
    "fact": "1906. National Gallery of Art, Washington.",
    "quote": {
      "text": "Je vous dois la vérité en peinture et je vous la dirai.",
      "cite": "Lettre à Émile Bernard, Aix, 23 octobre 1905."
    }
  },
  "czvallierbu": {
    "text": [
      "Le vieil homme est assis, les bras croisés, le regard baissé, la forme du corps lourde et immobile.",
      "Cette version de 1906 montre aussi Vallier. Elle appartient à la collection E. G. Bührle et est accrochée au Kunsthaus Zürich."
    ],
    "fact": "1906. Collection E. G. Bührle, Kunsthaus Zürich."
  },
  "czpaysan": {
    "text": [
      "Un paysan est assis devant un fond simple, les mains au repos, le visage étroitement et fermement modelé.",
      "Ce portrait tardif date de 1905-1906. Il est accroché au Museo Thyssen-Bornemisza de Madrid."
    ],
    "fact": "1905–1906. Museo Thyssen-Bornemisza, Madrid."
  },
  "czwomanblue": {
    "text": [
      "Une femme est assise en robe bleue, les mains sur les genoux, le corps comme une forme calme et fermée.",
      "Ce portrait date de 1902-1904. Il appartient à la Phillips Collection de Washington."
    ],
    "fact": "1902–1904. Phillips Collection, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
