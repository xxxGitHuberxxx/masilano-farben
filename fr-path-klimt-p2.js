// v8.0 French content for Klimt’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts.
// Quotes are translations of the German self-translations
// (Flöge postcards and letter; Kunstschau opening address).
// Overwrites P.paths.klimt with whole-path meta; must load after the Part 1 pack.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Collection non déterminée",
  "Privatbesitz": "Collection particulière",
  "Leopold Museum, Wien": "Leopold Museum, Vienne",
  "Österreichische Galerie Belvedere, Wien": "Österreichische Galerie Belvedere, Vienne",
  "Neue Galerie, New York": "Neue Galerie, New York",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Paris",
  "MAK – Museum für angewandte Kunst, Wien": "MAK – Musée des arts appliqués, Vienne",
  "Museum of Modern Art, New York": "Museum of Modern Art, New York",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery, London": "National Gallery, Londres",
  "Neue Pinakothek, München": "Neue Pinakothek, Munich",
  "Präfekturmuseum Aichi, Nagoya": "Musée préfectoral d’Aichi, Nagoya",
  "Busch-Reisinger Museum, Harvard Art Museums, Cambridge": "Busch-Reisinger Museum, Harvard Art Museums, Cambridge",
  "Nationalgalerie Prag": "Galerie nationale de Prague",
  "Kunsthaus Zug": "Kunsthaus Zug",
  "Städtisches Kunstmuseum Toyota": "Musée municipal d’art de Toyota",
  "Tel Aviv Museum of Art": "Tel Aviv Museum of Art",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "LENTOS Kunstmuseum Linz": "LENTOS Kunstmuseum Linz",
  "Galleria d’Arte Moderna Ricci Oddi, Piacenza": "Galleria d’Arte Moderna Ricci Oddi, Piacenza",
  "Historische Fotografie; das Original verbrannte 1945 auf Schloss Immendorf": "Photographie historique ; l’original a brûlé en 1945 au château d’Immendorf"
});
  P.works = Object.assign(P.works || {}, {
  "goldknight": {
    "title": "Le Chevalier d’or",
    "museum": "Musée préfectoral d’Aichi, Nagoya"
  },
  "birkforest": {
    "title": "Forêt de bouleaux",
    "museum": "Collection particulière"
  },
  "poplar2": {
    "title": "Le Grand Peuplier II (Orage qui s’approche)",
    "museum": "Leopold Museum, Vienne"
  },
  "kpeartree": {
    "title": "Poirier",
    "museum": "Busch-Reisinger Museum, Harvard Art Museums, Cambridge"
  },
  "wittgenstein": {
    "title": "Portrait de Margaret Stonborough-Wittgenstein",
    "museum": "Neue Pinakothek, Munich"
  },
  "gallia": {
    "title": "Portrait d’Hermine Gallia",
    "museum": "National Gallery, Londres"
  },
  "fritza": {
    "title": "Portrait de Fritza Riedler",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "adelestudy": {
    "title": "Étude pour le portrait d’Adele Bloch-Bauer I",
    "museum": "Collection non déterminée"
  },
  "adele": {
    "title": "Portrait d’Adele Bloch-Bauer I",
    "museum": "Neue Galerie, New York"
  },
  "rosetrees": {
    "title": "Rosiers sous les arbres",
    "museum": "Musée d’Orsay, Paris"
  },
  "kiss": {
    "title": "Le Baiser",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "kissdetail": {
    "title": "Le Baiser (détail)",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "kgarden": {
    "title": "Jardin paysan",
    "museum": "Collection particulière"
  },
  "sunfarm": {
    "title": "Jardin paysan aux tournesols",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "ksunflower": {
    "title": "Le Tournesol",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "kpoppies": {
    "title": "Coquelicots en fleur",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "meadow": {
    "title": "Prairie fleurie",
    "museum": "Collection particulière"
  },
  "stocletexp": {
    "title": "L’Attente (carton)",
    "museum": "MAK – Musée des arts appliqués, Vienne"
  },
  "stocletembrace": {
    "title": "L’Étreinte (carton)",
    "museum": "MAK – Musée des arts appliqués, Vienne"
  },
  "stoclettree": {
    "title": "L’Arbre de Vie (carton)",
    "museum": "MAK – Musée des arts appliqués, Vienne"
  },
  "stocletritter": {
    "title": "Le Chevalier (carton)",
    "museum": "MAK – Musée des arts appliqués, Vienne"
  },
  "stocletrose": {
    "title": "Rosier (carton)",
    "museum": "MAK – Musée des arts appliqués, Vienne"
  },
  "featherboa": {
    "title": "Dame au chapeau et au boa de plumes",
    "museum": "Collection particulière"
  },
  "barbarafloege": {
    "title": "Portrait de Barbara Flöge",
    "museum": "Collection non déterminée"
  },
  "thepark": {
    "title": "Le Parc",
    "museum": "Museum of Modern Art, New York"
  },
  "kammer2": {
    "title": "Schloss Kammer à l’Attersee II",
    "museum": "Collection particulière"
  },
  "kammer3": {
    "title": "Schloss Kammer à l’Attersee III",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "kammer4": {
    "title": "Schloss Kammer à l’Attersee IV",
    "museum": "Collection particulière"
  },
  "kammerave": {
    "title": "Allée vers Schloss Kammer",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "kammerpark": {
    "title": "Parc de Schloss Kammer",
    "museum": "Neue Galerie, New York"
  },
  "watercastle": {
    "title": "Château d’eau",
    "museum": "Galerie nationale de Prague"
  },
  "oefarm": {
    "title": "Ferme de Haute-Autriche",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "kapple": {
    "title": "Pommier I",
    "museum": "Collection particulière"
  },
  "kapple2": {
    "title": "Pommier II",
    "museum": "Collection non déterminée"
  },
  "cassone": {
    "title": "Église de Cassone",
    "museum": "Collection particulière"
  },
  "unterach": {
    "title": "Maisons à Unterach am Attersee",
    "museum": "Collection non déterminée"
  },
  "ualslope": {
    "title": "Versant boisé près d’Unterach am Attersee",
    "museum": "Collection particulière"
  },
  "litzlberg": {
    "title": "Litzlberg am Attersee",
    "museum": "Collection particulière"
  },
  "litzkeller": {
    "title": "Litzlbergkeller",
    "museum": "Leopold Museum, Vienne"
  },
  "weissenbach": {
    "title": "Maison forestière à Weissenbach II",
    "museum": "Collection non déterminée"
  },
  "pfarrgarten": {
    "title": "Paysage de jardin avec cime (jardin paroissial)",
    "museum": "Collection non déterminée"
  },
  "mada": {
    "title": "Portrait de Mäda Primavesi",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "adele2": {
    "title": "Portrait d’Adele Bloch-Bauer II",
    "museum": "Collection particulière"
  },
  "eugenia": {
    "title": "Portrait d’Eugenia Primavesi",
    "museum": "Musée municipal d’art de Toyota"
  },
  "fmbeer": {
    "title": "Portrait de Friederike Maria Beer",
    "museum": "Tel Aviv Museum of Art"
  },
  "ladyfan": {
    "title": "Dame à l’éventail",
    "museum": "Collection particulière"
  },
  "dancer": {
    "title": "La Danseuse",
    "museum": "Neue Galerie, New York"
  },
  "deathfig": {
    "title": "Mort et Vie (détail : la Mort)",
    "museum": "Leopold Museum, Vienne"
  },
  "riamunkbed": {
    "title": "Ria Munk sur son lit de mort",
    "museum": "Collection particulière"
  },
  "staude": {
    "title": "Portrait de Johanna Staude",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "zuckerkandl": {
    "title": "Portrait d’Amalie Zuckerkandl",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  },
  "kbaby": {
    "title": "Bébé (Berceau)",
    "museum": "National Gallery of Art, Washington"
  },
  "ladyhead": {
    "title": "Tête de femme",
    "museum": "LENTOS Kunstmuseum Linz"
  },
  "ladywhite": {
    "title": "Dame en blanc",
    "museum": "Österreichische Galerie Belvedere, Vienne"
  }
});
  P.paths = P.paths || {};
  P.paths.klimt = {
  "title": "Le parcours de vie de Klimt",
  "life": "1862–1918",
  "part": "Parties 1–2 · 1862–1918",
  "subtitle": "De Baumgarten aux derniers tableaux",
  "intro": "Voyage avec Gustav Klimt à travers toute sa vie : de l’enfance à Baumgarten et de l’École des arts appliqués à la Künstler-Compagnie, au Burgtheater et au Kunsthistorisches Museum, à la mort de son père et de son frère en 1892, à la Sécession et à la frise Beethoven, jusqu’aux années d’or, à la Kunstschau de 1908, à la frise Stoclet, à Emilie Flöge, aux paysages de l’Attersee et du lac de Garde, aux portraits colorés tardifs et à « Mort et Vie ». De courtes stations, des tableaux à colorier et des voix documentées : des cartes postales et une lettre à Emilie Flöge, ainsi que le discours de la Kunstschau. Klimt meurt à Vienne le 6 février 1918.",
  "ending": [
    "Dans les dernières années naissent des portraits et des paysages colorés, à côté de portraits inachevés comme Johanna Staude, Amalie Zuckerkandl et la « Dame en blanc ». En 1916, Klimt passe le dernier été partagé avec Emilie Flöge à l’Attersee. Le 30 décembre 1917, il lui écrit de Winkelsdorf : « …une salutation sortie du plus intime, et [je] te souhaite une année nouvelle des plus, des plus heureuses. – comme nous en avons tous deux si urgemment besoin. »",
    "Le 11 janvier 1918, Klimt est frappé d’une attaque à Vienne. Il meurt le 6 février 1918 à l’Hôpital général de Vienne, à l’âge de cinquante-six ans.",
    "Il reste, entre autres, « Le Baiser » au Belvedere, le portrait doré d’Adele Bloch-Bauer, les cartons de la frise Stoclet au MAK, les paysages de l’Attersee et du lac de Garde et les portraits tardifs. De lui-même, avait-il écrit, il n’existe aucun autoportrait : il faut regarder ses tableaux."
  ],
  "epilogue": "Le 11 janvier 1918, Gustav Klimt est frappé d’une attaque à Vienne. Il meurt le 6 février 1918 à l’Hôpital général, à l’âge de cinquante-six ans. Il reste « Le Baiser », les portraits dorés, la frise Stoclet, les paysages et les portraits tardifs – et les voix des cartes et des lettres à Emilie Flöge."
};
  P.stations = Object.assign(P.stations || {}, {
  "klimtgold": {
    "place": "Vienne · Les années d’or",
    "when": "1903–1907",
    "mapLabel": "Or",
    "intro": [
      "En décembre 1903, Klimt se rend à Ravenne. Sur une carte postale à Emilie Flöge, il écrit qu’il y a bien des misères – et des mosaïques d’une splendeur inouïe. Dans les années qui suivent, le style doré se densifie dans les portraits et dans quelques pièces d’arbres et de forêts.",
      "Naissent, entre autres, le portrait d’Hermine Gallia, celui de Margaret Stonborough-Wittgenstein et celui de Fritza Riedler, puis en 1907 le portrait doré d’Adele Bloch-Bauer. À leurs côtés se tiennent « Le Chevalier d’or », le « Pommier d’or » et des paysages comme la « Forêt de bouleaux »."
    ]
  },
  "klimtkunstschau": {
    "place": "Vienne · Kunstschau 1908",
    "when": "1908",
    "mapLabel": "Kunstschau",
    "intro": [
      "En 1905, le groupe dit de Klimt quitte la Sécession. Le 1er juin 1908, Klimt ouvre la Kunstschau dans un bâtiment provisoire élevé par Josef Hoffmann sur le terrain de l’actuel Konzerthaus. Dans le discours de fête, il dit qu’aucun domaine de la vie humaine n’est trop insignifiant pour offrir un espace aux entreprises artistiques.",
      "Dans la salle conçue pour Klimt est accroché, entre autres, « Le Baiser » de 1907 à 1908. L’État autrichien achète le tableau pour la Moderne Galerie, l’actuel Belvedere. Dans les mêmes années naissent de denses pièces de jardin et de prairie."
    ]
  },
  "klimtstoclet": {
    "place": "Vienne · La frise Stoclet",
    "when": "vers 1905–1911",
    "mapLabel": "Stoclet",
    "intro": [
      "Pour la salle à manger du palais Stoclet à Bruxelles, une maison de Josef Hoffmann et de la Wiener Werkstätte pour l’industriel Adolphe Stoclet, Klimt conçoit une frise : l’Attente, l’Arbre de Vie, l’Étreinte, ainsi que le Chevalier et le rosier.",
      "Les cartons et modèles de 1910 à 1911 sont conservés au MAK à Vienne. La frise elle-même est mise en place à Bruxelles."
    ]
  },
  "klimtfloege": {
    "place": "Vienne · Emilie Flöge et le salon",
    "when": "1904–1915",
    "mapLabel": "Flöge",
    "intro": [
      "Le 1er juillet 1904, Emilie, Helene et Pauline Flöge fondent le salon de mode « Schwestern Flöge » dans la Casa Piccola de la Mariahilfer Strasse. Les espaces sont conçus par Josef Hoffmann et Koloman Moser.",
      "Les étés, Klimt les passe encore avec la famille Flöge à l’Attersee. En 1909, il voyage en Espagne et écrit de Tolède : « Greco aussi est splendide ! » En 1915 naît le portrait de Barbara, la mère d’Emilie Flöge."
    ]
  },
  "klimtkammer": {
    "place": "Attersee · Schloss Kammer",
    "when": "1908–1912",
    "mapLabel": "Kammer",
    "intro": [
      "Pendant les étés à l’Attersee, Schloss Kammer, sur la rive nord, devient un motif récurrent. Klimt peint le château depuis le lac en plusieurs versions, plus tard aussi l’allée et le parc.",
      "À leurs côtés naissent un château d’eau, une ferme de Haute-Autriche et des pommiers. Les paysages restent sans or, mais tout aussi denses à la surface."
    ]
  },
  "klimtgarda": {
    "place": "Lac de Garde · Malcesine et Cassone",
    "when": "1913",
    "mapLabel": "Garde",
    "intro": [
      "En 1913, Klimt se rend au lac de Garde. Naissent des vues de Malcesine et de l’église de Cassone, ainsi qu’un paysage de jardin italien.",
      "« Malcesine au lac de Garde » brûle en 1945 au château d’Immendorf, avec d’autres œuvres qui y avaient été mises à l’abri. Il reste une photographie historique."
    ]
  },
  "klimtunterach": {
    "place": "Attersee · Unterach et Litzlberg",
    "when": "1914–1916",
    "mapLabel": "Unterach",
    "intro": [
      "Dans les étés plus tardifs, le regard se tourne plus nettement vers Unterach, sur la rive sud-est, vers Litzlberg et Weissenbach. Naissent des vues du village et de la rive, un versant boisé et des paysages de jardin.",
      "En 1916, Klimt passe le dernier été partagé avec Emilie Flöge à l’Attersee."
    ]
  },
  "klimtportraits": {
    "place": "Vienne · Portraits colorés",
    "when": "1912–1918",
    "mapLabel": "Portraits",
    "intro": [
      "Après les années d’or, les portraits deviennent plus colorés et plus souples. Naissent, entre autres, les portraits de Mäda et d’Eugenia Primavesi, le second portrait d’Adele Bloch-Bauer et celui de Friederike Maria Beer.",
      "Dans les fonds tardifs apparaissent souvent des motifs d’Asie orientale, que Klimt collectionne aussi – par exemple dans le portrait de Friederike Maria Beer et dans la « Dame à l’éventail ». À leurs côtés se tiennent « La Danseuse » et le portrait inachevé de Ria Munk III."
    ]
  },
  "klimttod": {
    "place": "Vienne · Mort et Vie",
    "when": "vers 1910–1915",
    "mapLabel": "Mort et Vie",
    "intro": [
      "Vers 1910, Klimt commence le grand tableau « Mort et Vie », qu’il retravaille plus tard. La Mort se tient, figure sombre, face à un groupe des vivants. Ici, seule la figure de la Mort est visible.",
      "Le tableau est accroché au Leopold Museum de Vienne. En 1912, Klimt peint aussi Ria Munk sur son lit de mort, l’année qui suit sa mort précoce."
    ]
  },
  "klimt1918": {
    "place": "Vienne · Les derniers tableaux",
    "when": "1917–1918",
    "mapLabel": "1918",
    "intro": [
      "Dans les derniers mois naissent des portraits inachevés – Johanna Staude, Amalie Zuckerkandl, la « Dame en blanc » – et des œuvres achevées comme « Bébé (Berceau) », une tête de femme et le « Portrait d’une dame » à Plaisance.",
      "Le 11 janvier 1918, Klimt est frappé d’une attaque. Il meurt le 6 février 1918 à l’Hôpital général de Vienne."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "goldknight": {
    "text": [
      "Un chevalier en armure dorée chevauche, la lance en arrêt, à travers un champ rocheux. Le tableau de 1903 s’appelle aussi « La vie est un combat ».",
      "Il est accroché au Musée préfectoral d’Aichi à Nagoya. La surface d’or et l’armure ornementale appartiennent déjà au temps qui suit le voyage à Ravenne."
    ],
    "fact": "Huile, détrempe et feuille d’or sur toile, 1903. Musée préfectoral d’Aichi, Nagoya."
  },
  "birkforest": {
    "text": [
      "Des troncs de bouleau se tiennent serrés les uns contre les autres, le sol de la forêt est un tapis de mousse, de feuilles et de lumière. Le tableau naît en 1903, un an après le « Bosquet de hêtres I ».",
      "Il se trouvait dans la collection Paul G. Allen et est aujourd’hui en collection particulière. Les pièces de forêt appartiennent aux étés à l’Attersee."
    ],
    "fact": "Huile sur toile, 1903. Collection particulière."
  },
  "poplar2": {
    "text": [
      "Un haut peuplier s’élève devant un ciel sombre et orageux, le pré devant lui encore clair. Le tableau s’appelle « Le Grand Peuplier II » et naît de 1902 à 1903.",
      "Il est accroché au Leopold Museum de Vienne. Le regard se porte sur un seul arbre, non sur un vaste paysage."
    ],
    "fact": "Huile sur toile, 1902–1903. Leopold Museum, Vienne."
  },
  "kpeartree": {
    "text": [
      "Un poirier remplit la surface comme une mosaïque dense de feuilles, de fleurs et de fruits, le tronc à peine saisissable. Le tableau naît en 1903.",
      "Il appartient au Busch-Reisinger Museum des Harvard Art Museums à Cambridge. Comme le pommier d’or, il montre un seul arbre comme ornement."
    ],
    "fact": "Huile et or sur toile, 1903. Busch-Reisinger Museum, Harvard Art Museums, Cambridge."
  },
  "wittgenstein": {
    "text": [
      "Margaret Stonborough-Wittgenstein se tient dans une robe blanche devant un fond géométriquement divisé, en partie doré. Le portrait naît en 1905.",
      "La modèle est une sœur du philosophe Ludwig Wittgenstein. Le tableau est accroché à la Neue Pinakothek de Munich."
    ],
    "fact": "Huile sur toile, 1905. Neue Pinakothek, Munich."
  },
  "gallia": {
    "text": [
      "Hermine Gallia est assise dans une robe claire, aux plis souples, les mains dans le giron, le fond dans de délicats tons ornementaux. Le portrait naît en 1904.",
      "Il appartient à la National Gallery de Londres. Hermine Gallia était l’épouse de l’industriel viennois Moriz Gallia, un collectionneur précoce de Klimt."
    ],
    "fact": "Huile sur toile, 1904. National Gallery, Londres."
  },
  "fritza": {
    "text": [
      "Fritza Riedler est assise dans une robe claire devant un fond fortement ornementé ; derrière la tête apparaît un ornement doré, comme un trône. Le portrait naît en 1906.",
      "Il est accroché au Belvedere de Vienne. La géométrie claire autour de la tête appartient déjà tout entière aux années d’or."
    ],
    "fact": "Huile sur toile, 1906. Österreichische Galerie Belvedere, Vienne."
  },
  "adelestudy": {
    "text": [
      "Un dessin fixe la tête et le buste d’Adele Bloch-Bauer, encore sans le fond d’or plus tardif. L’étude appartient aux travaux préparatoires du portrait de 1907.",
      "Elle montre avec quelle précision Klimt fixe la pose et le regard avant d’ajouter l’or ornemental."
    ],
    "fact": "Dessin, vers 1903–1907. Collection non déterminée."
  },
  "adele": {
    "text": [
      "Adele Bloch-Bauer est assise dans une robe dorée, densément ornementée, le fond une mosaïque d’or, d’argent et de signes. Le portrait naît en 1907, après des années de travail.",
      "Il appartient à la Neue Galerie de New York. En décembre 1903, Klimt écrit de Ravenne à Emilie Flöge au sujet des mosaïques d’une splendeur inouïe – une impression qui se prolonge dans des fonds d’or comme celui-ci."
    ],
    "fact": "Huile, argent et or sur toile, 1907. Neue Galerie, New York.",
    "quote": {
      "text": "À Ravenne, bien des misères – les mosaïques d’une splendeur inouïe.",
      "cite": "Carte postale à Emilie Flöge, Ravenne, 2 décembre 1903"
    }
  },
  "rosetrees": {
    "text": [
      "Sous de hautes couronnes fleurissent des rosiers, feuillage et fleurs tissés en un motif dense, comme un tapis. Le tableau naît vers 1905.",
      "Il est accroché au Musée d’Orsay à Paris. Comme dans les pièces de forêt de l’Attersee, l’horizon recule très loin."
    ],
    "fact": "Huile sur toile, vers 1905. Musée d’Orsay, Paris."
  },
  "kiss": {
    "text": [
      "Un couple s’enlace au bord d’une prairie fleurie, enveloppé de robes d’or. Le tableau s’appelle « Le Baiser », il est carré et naît de 1907 à 1908.",
      "Il est montré en 1908 à la Kunstschau de Vienne. L’État autrichien l’achète sur place pour la Moderne Galerie, l’actuel Belvedere."
    ],
    "fact": "Huile sur toile avec feuille d’or, 1907–1908. Österreichische Galerie Belvedere, Vienne.",
    "quote": {
      "text": "…qu’aucun domaine de la vie humaine n’est trop insignifiant ni trop mince pour offrir un espace aux entreprises artistiques.",
      "cite": "Discours d’ouverture de la Kunstschau, Vienne, 1er juin 1908"
    }
  },
  "kissdetail": {
    "text": [
      "Le détail montre les têtes du couple du « Baiser » : les visages tout proches, l’or de la robe autour d’eux. Le tableau entier naît de 1907 à 1908.",
      "Le 1er juin 1908, Klimt ouvre la Kunstschau à Vienne. Dans le discours de fête, il dit qu’aucun domaine de la vie humaine n’est trop insignifiant pour offrir un espace aux entreprises artistiques. « Le Baiser » y est montré et l’État l’acquiert."
    ],
    "fact": "Huile sur toile avec feuille d’or, détail, 1907–1908. Österreichische Galerie Belvedere, Vienne.",
    "quote": {
      "text": "…qu’aucun domaine de la vie humaine n’est trop insignifiant ni trop mince pour offrir un espace aux entreprises artistiques.",
      "cite": "Discours d’ouverture de la Kunstschau, Vienne, 1er juin 1908"
    }
  },
  "kgarden": {
    "text": [
      "Un jardin paysan apparaît comme un tapis dense de coquelicots, de campanules et de feuillage, presque sans horizon. Le tableau naît vers 1905 à 1907.",
      "Il appartient aux mêmes années que les autres pièces de jardin et « Le Baiser ». Il se trouve en collection particulière."
    ],
    "fact": "Huile sur toile, vers 1905–1907. Collection particulière."
  },
  "sunfarm": {
    "text": [
      "Dans un jardin paysan se tiennent des tournesols parmi une végétation dense, presque sans ciel libre. Le tableau naît vers 1907.",
      "Il est accroché au Belvedere de Vienne. Les pièces de jardin de ces années appartiennent au même entourage que « Le Baiser » et la Kunstschau de 1908."
    ],
    "fact": "Huile sur toile, vers 1907. Österreichische Galerie Belvedere, Vienne."
  },
  "ksunflower": {
    "text": [
      "Un seul tournesol élevé se tient dans un massif dense, le regard tout près de la plante, l’horizon disparu. Le tableau naît vers 1907 à 1908.",
      "Il appartient au Belvedere de Vienne. Comme dans les tableaux de jardin de ces années, la plante devient un motif ornemental."
    ],
    "fact": "Huile sur toile, vers 1907–1908. Österreichische Galerie Belvedere, Vienne."
  },
  "kpoppies": {
    "text": [
      "Un champ de coquelicots brille en un tapis dense de rouge, de vert et de petites fleurs, sans vaste horizon. Le tableau naît en 1907.",
      "Il est accroché au Belvedere de Vienne. La même année, Klimt achève aussi le portrait doré d’Adele Bloch-Bauer."
    ],
    "fact": "Huile sur toile, 1907. Österreichische Galerie Belvedere, Vienne."
  },
  "meadow": {
    "text": [
      "Une prairie fleurie remplit toute la surface, herbes et fleurs serrées, le ciel à peine visible. Le tableau naît vers 1908.",
      "Il se trouve en collection particulière. Cette pièce de prairie aussi appartient aux années autour de la Kunstschau."
    ],
    "fact": "Huile sur toile, vers 1908. Collection particulière."
  },
  "stocletexp": {
    "text": [
      "Une femme debout, dans une robe richement ornementée, tourne la tête, les mains levées. Le carton s’appelle « L’Attente » et appartient à la frise Stoclet.",
      "Klimt conçoit la frise pour la salle à manger du palais Stoclet à Bruxelles, une maison de Josef Hoffmann et de la Wiener Werkstätte pour Adolphe Stoclet. Les cartons sont conservés au MAK à Vienne."
    ],
    "fact": "Carton pour la frise Stoclet, vers 1905–1911. MAK – Musée des arts appliqués, Vienne."
  },
  "stocletembrace": {
    "text": [
      "Un couple se tient étroitement enlacé dans un manteau ornementé, les visages tout proches. Le carton s’appelle « L’Étreinte » ou « L’Accomplissement ».",
      "Il appartient à la frise de la salle à manger du palais Stoclet à Bruxelles. Avec « L’Attente » et l’Arbre de Vie, il forme le cœur du cycle. Le carton est au MAK à Vienne."
    ],
    "fact": "Carton pour la frise Stoclet, vers 1905–1911. MAK – Musée des arts appliqués, Vienne."
  },
  "stoclettree": {
    "text": [
      "Un arbre stylisé aux branches enroulées en spirale remplit la surface, entre les rameaux des sièges et des signes. Le carton de l’Arbre de Vie naît de 1910 à 1911.",
      "C’est l’un des neuf cartons pour l’exécution de la frise Stoclet. L’Arbre de Vie relie les scènes de l’Attente et de l’Étreinte. Le MAK à Vienne conserve les cartons."
    ],
    "fact": "Carton pour la frise Stoclet, 1910–1911. MAK – Musée des arts appliqués, Vienne."
  },
  "stocletritter": {
    "text": [
      "Un chevalier en armure ornementée se tient droit, bouclier et robe en formes géométriques claires. Le carton appartient aux cartons de la frise Stoclet.",
      "Il naît de 1910 à 1911 et se trouve au MAK à Vienne. La frise elle-même est mise en place dans la salle à manger du palais Stoclet à Bruxelles."
    ],
    "fact": "Carton pour la frise Stoclet, 1910–1911. MAK – Musée des arts appliqués, Vienne."
  },
  "stocletrose": {
    "text": [
      "Un rosier apparaît comme un ornement plat de fleurs, de feuilles et de vrilles, sans espace profond. Le carton appartient aux cartons de la frise Stoclet de 1910 à 1911.",
      "Les motifs de jardin et de plantes parcourent la frise à côté des scènes figurées. Le MAK à Vienne conserve le carton."
    ],
    "fact": "Carton pour la frise Stoclet, 1910–1911. MAK – Musée des arts appliqués, Vienne."
  },
  "featherboa": {
    "text": [
      "Une femme au grand chapeau et au boa de plumes regarde de côté hors du tableau, le visage proche et clair sur un fond sombre. Le portrait naît en 1909.",
      "Il se trouve en collection particulière. La même année, Klimt voyage en Espagne et écrit de Tolède à Emilie Flöge : « Greco aussi est splendide ! »"
    ],
    "fact": "Huile sur toile, 1909. Collection particulière.",
    "quote": {
      "text": "J’ai pensé à toi très vivement – tu serais ravie avec moi. Greco aussi est splendide !",
      "cite": "Carte à Emilie Flöge, Tolède, automne 1909"
    }
  },
  "barbarafloege": {
    "text": [
      "Barbara Flöge, la mère d’Emilie Flöge, apparaît comme une femme âgée en habit sombre, le regard calme, le fond simple. Le portrait naît en 1915.",
      "Depuis 1904, Emilie tient avec ses sœurs Helene et Pauline le salon de mode « Schwestern Flöge » dans la Casa Piccola de la Mariahilfer Strasse ; les espaces sont conçus par Josef Hoffmann et Koloman Moser."
    ],
    "fact": "Huile sur toile, 1915. Collection non déterminée."
  },
  "thepark": {
    "text": [
      "Un parc de couronnes denses remplit la surface jusqu’au bord, le bois de troncs devient un tissu ornemental. Le tableau naît en 1910 ou plus tôt.",
      "Il appartient au Museum of Modern Art de New York. Dans ces années aussi, Klimt passe les étés avec la famille Flöge à l’Attersee."
    ],
    "fact": "Huile sur toile, 1910 ou plus tôt. Museum of Modern Art, New York."
  },
  "kammer2": {
    "text": [
      "Schloss Kammer se dresse, murs clairs et toits rouges, au bord du lac, l’eau et les arbres en couleurs calmes et planes. Le tableau naît en 1909.",
      "C’est la deuxième d’une série de vues du château sur la rive nord de l’Attersee. Il se trouve en collection particulière."
    ],
    "fact": "Huile sur toile, 1909. Collection particulière."
  },
  "kammer3": {
    "text": [
      "Le château apparaît de nouveau depuis le lac, la façade et les arbres comme de clairs champs de couleur, le miroir de l’eau calme. Le tableau naît en 1910.",
      "Il est accroché au Belvedere de Vienne. Klimt répète le motif en plusieurs versions, chacune avec un cadrage et une lumière déplacés."
    ],
    "fact": "Huile sur toile, 1910. Österreichische Galerie Belvedere, Vienne."
  },
  "kammer4": {
    "text": [
      "Une autre vue du château à l’Attersee : les bâtiments parmi les arbres, le lac au premier plan, les couleurs fortes et planes. Le tableau naît en 1910.",
      "Il se trouve en collection particulière. Avec les autres versions, il montre avec quelle constance Klimt représente la même rive."
    ],
    "fact": "Huile sur toile, 1910. Collection particulière."
  },
  "kammerave": {
    "text": [
      "Une allée d’arbres mène vers Schloss Kammer, les troncs à gauche et à droite, au fond la façade claire. Le tableau naît en 1912.",
      "Il est accroché au Belvedere de Vienne. Cette fois, le regard ne part pas du lac, mais traverse le parc vers le château."
    ],
    "fact": "Huile sur toile, 1912. Österreichische Galerie Belvedere, Vienne."
  },
  "kammerpark": {
    "text": [
      "Dans le parc de Schloss Kammer, les arbres se tiennent serrés, le sol clair, le ciel presque couvert. Le tableau naît en 1910.",
      "Il appartient à la Neue Galerie de New York. Comme dans « Le Parc », le feuillage devient un tissu ornemental."
    ],
    "fact": "Huile sur toile, 1910. Neue Galerie, New York."
  },
  "watercastle": {
    "text": [
      "Un château clair se dresse au bord de l’eau ou dans l’eau, entouré d’arbres, le reflet calme. Le tableau naît de 1908 à 1909.",
      "Il appartient à la Galerie nationale de Prague. Le motif se situe à la même époque que les premières vues de Schloss Kammer."
    ],
    "fact": "Huile sur toile, 1908–1909. Galerie nationale de Prague."
  },
  "oefarm": {
    "text": [
      "Une ferme de Haute-Autriche se dresse parmi les arbres et le jardin, les murs clairs, le toit sombre, l’entourage densément planté. Le tableau naît vers 1911.",
      "Il est accroché au Belvedere de Vienne. Outre les vues du château, Klimt peint aussi à l’Attersee de simples maisons et des jardins."
    ],
    "fact": "Huile sur toile, vers 1911. Österreichische Galerie Belvedere, Vienne."
  },
  "kapple": {
    "text": [
      "Un pommier remplit la surface de feuillage et de fruits, le tronc au milieu, le ciel visible seulement dans les interstices. Le tableau naît vers 1912.",
      "Il se trouve en collection particulière. Le motif de l’arbre unique remonte au pommier d’or de 1903."
    ],
    "fact": "Huile sur toile, vers 1912. Collection particulière."
  },
  "kapple2": {
    "text": [
      "De nouveau un pommier se tient, dense, dans le tableau, le feuillage plus fort de couleur, la forme plus lâche que dans la version antérieure. Le tableau naît vers 1916.",
      "On l’appelle aussi « Le Pommier ». Les pièces d’arbres tardives appartiennent aux derniers étés à l’Attersee."
    ],
    "fact": "Huile sur toile, vers 1916. Collection non déterminée."
  },
  "cassone": {
    "text": [
      "L’église de Cassone se dresse au-dessus du lac de Garde, les maisons du village serrées autour d’elle, l’eau et les pentes en clairs champs de couleur. Le tableau naît en 1913.",
      "Cassone se trouve sur la rive est du lac, non loin de Malcesine. Le tableau se trouve en collection particulière."
    ],
    "fact": "Huile sur toile, 1913. Collection particulière."
  },
  "unterach": {
    "text": [
      "Les maisons d’Unterach se tiennent serrées sur la rive sud, les façades claires, les toits sombres, le village comme un motif de couleur. Le tableau naît vers 1916.",
      "Unterach se trouve en face de Schloss Kammer, sur l’autre rive de l’Attersee. 1916 est le dernier été partagé de Klimt avec Emilie Flöge au lac."
    ],
    "fact": "Huile sur toile, vers 1916. Collection non déterminée."
  },
  "ualslope": {
    "text": [
      "Un versant boisé près d’Unterach s’élève dans le tableau, troncs et feuillage comme un motif dense, sans vaste vue sur le lac. Le tableau naît en 1916.",
      "Il se trouve en collection particulière. Les pièces de forêt tardives sont plus sombres et plus lâches que les premières forêts de bouleaux et de hêtres."
    ],
    "fact": "Huile sur toile, 1916. Collection particulière."
  },
  "litzlberg": {
    "text": [
      "Litzlberg apparaît comme une vue du lieu à l’Attersee, maisons, arbres et rive en couleurs planes. Le tableau naît vers 1915.",
      "Litzlberg se trouve à l’Attersee, non loin de Seewalchen et de Kammer. Le tableau se trouve en collection particulière."
    ],
    "fact": "Huile sur toile, vers 1915. Collection particulière."
  },
  "litzkeller": {
    "text": [
      "Le Litzlbergkeller, une auberge à l’Attersee, se dresse parmi les arbres au bord de l’eau, la façade claire, le feuillage dense. Le tableau naît de 1915 à 1916.",
      "Il est accroché au Leopold Museum de Vienne. Cette pièce de rive aussi appartient aux étés tardifs au lac."
    ],
    "fact": "Huile sur toile, 1915–1916. Leopold Museum, Vienne."
  },
  "weissenbach": {
    "text": [
      "Une maison forestière à Weissenbach se dresse parmi les arbres et le pré, les murs clairs, le toit marqué. Le tableau naît vers 1914 et s’appelle aussi « Maison forestière à Weissenbach II ».",
      "Weissenbach se trouve sur l’Attersee méridional. Klimt peint la maison en plus d’une version."
    ],
    "fact": "Huile sur toile, vers 1914. Collection non déterminée."
  },
  "pfarrgarten": {
    "text": [
      "Un jardin paroissial s’étend devant une cime, plates-bandes, chemins et arbres étroitement joints, la colline à l’arrière-plan. Le tableau naît vers 1916.",
      "Il appartient aux paysages de jardin tardifs où Klimt laisse le regard tout près des plates-bandes et des pentes."
    ],
    "fact": "Huile sur toile, vers 1916. Collection non déterminée."
  },
  "mada": {
    "text": [
      "La jeune Mäda Primavesi se tient dans une robe claire, à motif floral, les jambes légèrement écartées, le regard ferme. Le portrait naît vers 1912 à 1913.",
      "Il appartient au Metropolitan Museum of Art de New York. Mäda est la fille d’Otto et d’Eugenia Primavesi, d’importants commanditaires de Klimt ; la famille le reçoit aussi à Winkelsdorf."
    ],
    "fact": "Huile sur toile, vers 1912–1913. Metropolitan Museum of Art, New York."
  },
  "adele2": {
    "text": [
      "Adele Bloch-Bauer se tient dans une robe colorée et ornementée devant un fond également coloré, sans le tapis d’or du premier portrait. Le portrait naît en 1912.",
      "Il se trouve en collection particulière. Cinq ans après le premier portrait doré, Klimt montre Adele dans les couleurs plus vives de ses portraits plus tardifs."
    ],
    "fact": "Huile sur toile, 1912. Collection particulière."
  },
  "eugenia": {
    "text": [
      "Eugenia Primavesi est assise dans une robe à motif lumineux, le fond ornemental et coloré. Le portrait naît vers 1913 à 1914.",
      "Il appartient au Musée municipal d’art de Toyota. Eugenia et Otto Primavesi comptent parmi les importants commanditaires de Klimt en ces années."
    ],
    "fact": "Huile sur toile, vers 1913–1914. Musée municipal d’art de Toyota."
  },
  "fmbeer": {
    "text": [
      "Friederike Maria Beer se tient dans une robe richement ornementée, le fond rempli de motifs d’Asie orientale. Le portrait naît en 1916.",
      "Il est accroché au Tel Aviv Museum of Art. Dans les portraits tardifs, Klimt reprend souvent des motifs et des figures d’Asie orientale, qu’il collectionne aussi."
    ],
    "fact": "Huile sur toile, 1916. Tel Aviv Museum of Art."
  },
  "ladyfan": {
    "text": [
      "Une femme à l’éventail apparaît devant un fond de motifs d’Asie orientale, dont un oiseau à la manière d’un phénix. Le tableau naît de 1917 à 1918.",
      "Il se trouve en collection particulière. Il appartient aux derniers portraits achevés et montre combien le monde des motifs d’Asie orientale devient fort en ces années."
    ],
    "fact": "Huile sur toile, 1917–1918. Collection particulière."
  },
  "dancer": {
    "text": [
      "Une danseuse se tient dans une robe colorée, peinte avec souplesse, le fond ornemental, la pose droite. Le tableau naît vers 1916 à 1917.",
      "Il appartient à la Neue Galerie de New York. Ici aussi se mêlent le portrait figuré et le motif plan des années tardives."
    ],
    "fact": "Huile sur toile, vers 1916–1917. Neue Galerie, New York."
  },
  "deathfig": {
    "text": [
      "La Mort se tient, figure mince et sombre, avec une tête de mort et un motif de croix, le regard tourné vers l’autre moitié du tableau. Le détail ne montre que cette figure de « Mort et Vie ».",
      "Le tableau entier naît vers 1910 et est retravaillé plus tard ; il est accroché au Leopold Museum de Vienne. L’autre moitié, avec le groupe des vivants, est ici omise."
    ],
    "fact": "Huile sur toile, détail, vers 1910–1915. Leopold Museum, Vienne."
  },
  "riamunkbed": {
    "text": [
      "Ria Munk gît exposée, le visage calme, des fleurs autour de l’oreiller et de la robe. Le tableau naît en 1912, l’année qui suit sa mort.",
      "Il se trouve en collection particulière. Plus tard vient le portrait inachevé « Ria Munk III » de 1917."
    ],
    "fact": "Huile sur toile, 1912. Collection particulière."
  },
  "staude": {
    "text": [
      "Johanna Staude est assise dans un chemisier à motif coloré, le regard ferme, le fond en partie ouvert. Le portrait de 1917 à 1918 reste inachevé.",
      "Il est accroché au Belvedere de Vienne. De nombreux portraits des derniers mois, Klimt les laisse inachevés."
    ],
    "fact": "Huile sur toile, 1917–1918, inachevé. Österreichische Galerie Belvedere, Vienne."
  },
  "zuckerkandl": {
    "text": [
      "Amalie Zuckerkandl apparaît dans une robe claire, la tête et les épaules élaborées, la partie inférieure et le fond encore ouverts. Le portrait reste inachevé.",
      "Il est accroché au Belvedere de Vienne. Amalie Zuckerkandl appartenait au cercle viennois autour de la famille Zuckerkandl, auquel Klimt était lié depuis longtemps."
    ],
    "fact": "Huile sur toile, 1917–1918, inachevé. Österreichische Galerie Belvedere, Vienne."
  },
  "kbaby": {
    "text": [
      "Un enfant gît dans un berceau sous un tapis dense de couvertures et de motifs, le visage petit dans le flux de la couleur. Le tableau naît de 1917 à 1918.",
      "Il appartient à la National Gallery of Art de Washington. C’est l’un des derniers tableaux achevés."
    ],
    "fact": "Huile sur toile, 1917–1918. National Gallery of Art, Washington."
  },
  "ladyhead": {
    "text": [
      "Une tête de femme dans une touche de couleur lâche, les cheveux et le visage rapprochés dans le tableau. Le travail naît en 1917.",
      "Il est accroché au LENTOS Kunstmuseum de Linz. Dans les derniers mois aussi, Klimt dessine et peint des têtes d’une forme brève et ouverte."
    ],
    "fact": "Huile sur toile, 1917. LENTOS Kunstmuseum Linz."
  },
  "ladywhite": {
    "text": [
      "Une femme en robe blanche est assise tournée vers le spectateur, de grandes parties de la surface restent ouvertes. Le portrait des années 1917 à 1918 reste inachevé.",
      "Il est accroché au Belvedere de Vienne. Le 30 décembre 1917, Klimt écrit de Winkelsdorf à Emilie Flöge et lui souhaite une « année nouvelle des plus, des plus heureuses – comme nous en avons tous deux si urgemment besoin »."
    ],
    "fact": "Huile sur toile, vers 1917–1918, inachevé. Österreichische Galerie Belvedere, Vienne.",
    "quote": {
      "text": "…une salutation sortie du plus intime, et [je] te souhaite une année nouvelle des plus, des plus heureuses. – comme nous en avons tous deux si urgemment besoin.",
      "cite": "Carte-correspondance à Emilie Flöge, Winkelsdorf, 30 décembre 1917"
    }
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
