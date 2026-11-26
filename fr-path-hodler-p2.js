// v8.4 French content for Ferdinand Hodler’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts. Overwrites P.paths.hodler with whole-path meta.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Collection non déterminée",
  "Privatbesitz": "Collection privée",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "Kunstmuseum Bern": "Kunstmuseum Bern",
  "Kunstmuseum Basel": "Kunstmuseum Basel",
  "Kunsthalle Mannheim": "Kunsthalle Mannheim",
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Städel Museum, Frankfurt": "Städel Museum, Francfort"
});
  P.works = Object.assign(P.works || {}, {
  "hstprex": {
    "title": "Le Léman vu de Saint-Prex",
    "museum": "Collection non déterminée"
  },
  "hisenfluh": {
    "title": "La Jungfrau depuis l’Isenfluh",
    "museum": "Collection non déterminée"
  },
  "hkiental": {
    "title": "Le Kiental avec le Blümlisalp",
    "museum": "Collection non déterminée"
  },
  "hwald02": {
    "title": "Forêt avec un torrent de montagne",
    "museum": "Collection non déterminée"
  },
  "hfromberg": {
    "title": "Le Fromberghorn vu de Reichenbach",
    "museum": "Collection non déterminée"
  },
  "hthunless": {
    "title": "Le lac de Thoune vu de Leissigen",
    "museum": "Collection non déterminée"
  },
  "hthunsym04": {
    "title": "Lac de Thoune avec reflet symétrique avant le lever du soleil",
    "museum": "Collection non déterminée"
  },
  "hthunstock04": {
    "title": "Lac de Thoune avec la chaîne du Stockhorn",
    "museum": "Collection non déterminée"
  },
  "hwaldbach04": {
    "title": "Torrent forestier près de Leissigen",
    "museum": "Collection non déterminée"
  },
  "hthunsym05": {
    "title": "Lac de Thoune avec reflet symétrique",
    "museum": "Collection non déterminée"
  },
  "hchex04": {
    "title": "Le Léman vu de Chexbres",
    "museum": "Collection non déterminée"
  },
  "chexbres": {
    "title": "Le Léman vu de Chexbres",
    "museum": "Kunstmuseum Basel"
  },
  "hgrammont05": {
    "title": "Le Grammont",
    "museum": "Collection non déterminée"
  },
  "hgrammont06": {
    "title": "Le Grammont",
    "museum": "Collection non déterminée"
  },
  "hsavoyer06": {
    "title": "Le Léman avec les Alpes de Savoie",
    "museum": "Collection non déterminée"
  },
  "hrhythm08": {
    "title": "Paysage rythmique au bord du Léman",
    "museum": "Collection non déterminée"
  },
  "hlutschine": {
    "title": "La Lütschine noire",
    "museum": "Collection non déterminée"
  },
  "hkirsch05": {
    "title": "Cerisier en fleurs",
    "museum": "Collection non déterminée"
  },
  "htanne05": {
    "title": "Sapin près de Chamby",
    "museum": "Collection non déterminée"
  },
  "hschnee07": {
    "title": "Neige dans l’Engadine",
    "museum": "Collection non déterminée"
  },
  "eiger": {
    "title": "L’Eiger, le Mönch et la Jungfrau au-dessus de la mer de brouillard",
    "museum": "Collection privée"
  },
  "heigermond": {
    "title": "L’Eiger, le Mönch et la Jungfrau au clair de lune",
    "museum": "Collection non déterminée"
  },
  "heigermorgen": {
    "title": "L’Eiger, le Mönch et la Jungfrau au soleil du matin",
    "museum": "Collection non déterminée"
  },
  "hjungf08": {
    "title": "La Jungfrau au-dessus de la mer de brouillard",
    "museum": "Collection non déterminée"
  },
  "habendnebel": {
    "title": "Brume du soir sur le lac de Thoune",
    "museum": "Collection non déterminée"
  },
  "hjenastud": {
    "title": "Étudiant enfilant son manteau",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hjena": {
    "title": "Départ pour les guerres de libération",
    "museum": "Städel Museum, Francfort"
  },
  "hmaeher": {
    "title": "Le Faucheur",
    "museum": "Collection non déterminée"
  },
  "hholz": {
    "title": "Le Bûcheron",
    "museum": "Von der Heydt-Museum, Wuppertal"
  },
  "heinamut": {
    "title": "L’Unanimité",
    "museum": "Collection non déterminée"
  },
  "hthunsym09": {
    "title": "Lac de Thoune avec reflet symétrique",
    "museum": "Collection non déterminée"
  },
  "hodler": {
    "title": "Lac de Thoune avec la chaîne du Stockhorn",
    "museum": "Kunsthalle Mannheim"
  },
  "niesen": {
    "title": "Le Niesen",
    "museum": "Collection privée"
  },
  "hthunniesen": {
    "title": "Lac de Thoune avec le Niesen",
    "museum": "Collection non déterminée"
  },
  "hthunstock11": {
    "title": "Lac de Thoune avec la chaîne du Stockhorn",
    "museum": "Von der Heydt-Museum, Wuppertal"
  },
  "hthunabend12": {
    "title": "Lac de Thoune avec la chaîne du Stockhorn le soir",
    "museum": "Collection non déterminée"
  },
  "hmorhardt": {
    "title": "Portrait de Mathias Morhardt",
    "museum": "Collection non déterminée"
  },
  "hgertrud12": {
    "title": "Portrait de Gertrud Müller",
    "museum": "Collection non déterminée"
  },
  "hself12": {
    "title": "Autoportrait",
    "museum": "Collection non déterminée"
  },
  "hselfrosen": {
    "title": "Autoportrait aux roses",
    "museum": "Collection non déterminée"
  },
  "hwille": {
    "title": "Le général Ulrich Wille",
    "museum": "Kunstmuseum Bern"
  },
  "hself16": {
    "title": "Autoportrait",
    "museum": "Collection non déterminée"
  },
  "hselfkittel": {
    "title": "Autoportrait à la blouse verte",
    "museum": "Collection non déterminée"
  },
  "hsonne15": {
    "title": "Coucher de soleil sur le Léman",
    "museum": "Collection non déterminée"
  },
  "hweisshorn15": {
    "title": "Le Weisshorn vu de Montana",
    "museum": "Collection non déterminée"
  },
  "hdents16": {
    "title": "Les Dents du Midi",
    "museum": "Collection non déterminée"
  },
  "hblanches16": {
    "title": "Les Dents Blanches près de Champéry au soleil du matin",
    "museum": "Collection non déterminée"
  },
  "hbach16": {
    "title": "Torrent de montagne près de Champéry",
    "museum": "Collection non déterminée"
  },
  "hcaux17": {
    "title": "Le Léman vu de Caux",
    "museum": "Collection non déterminée"
  },
  "hwolken17": {
    "title": "Paysage près de Caux avec des nuages qui s’élèvent",
    "museum": "Collection non déterminée"
  },
  "hgrammont17": {
    "title": "Le Grammont au soleil du matin",
    "museum": "Collection non déterminée"
  },
  "hmbdawn": {
    "title": "Le Léman avec le mont Blanc à l’aube",
    "museum": "Collection non déterminée"
  },
  "hmbred": {
    "title": "Le Léman avec le mont Blanc dans l’aurore",
    "museum": "Collection non déterminée"
  },
  "hmblight": {
    "title": "Le Léman avec le mont Blanc à la lumière du matin",
    "museum": "Collection non déterminée"
  },
  "hmbafternoon": {
    "title": "Le Léman avec le mont Blanc l’après-midi",
    "museum": "Collection non déterminée"
  },
  "hmbbefore": {
    "title": "Le Léman avec le mont Blanc avant le lever du soleil",
    "museum": "Collection non déterminée"
  },
  "hmbmarch": {
    "title": "Le Léman avec le mont Blanc au petit matin",
    "museum": "Collection non déterminée"
  },
  "hberthe18": {
    "title": "Portrait de Berthe Hodler",
    "museum": "Collection non déterminée"
  }
});
  P.paths = P.paths || {};
  P.paths.hodler = {
  "title": "Le parcours de vie de Ferdinand Hodler",
  "life": "1853–1918",
  "part": "Parties 1–2 · 1853–1918",
  "subtitle": "De Berne à Genève, vers les lacs et jusqu’au mont Blanc",
  "intro": "Voyage avec Ferdinand Hodler à travers toute sa vie : de l’enfance à Berne et de la perte précoce de sa famille, en passant par l’apprentissage chez Ferdinand Sommer à Thoune, la formation chez Barthélemy Menn à Genève, le voyage à Madrid, le réalisme des années 1880 et le tournant symboliste autour de « La Nuit » – que nous mentionnons seulement dans le récit de l’étape – jusqu’aux paysages parallélistes du lac de Thoune et du Léman, aux peintures murales de Iéna et de Hanovre et aux derniers regards depuis le Quai du Mont-Blanc. De courtes étapes, des tableaux à colorier et une voix tirée d’une lettre de 1907. Hodler meurt à Genève le 19 mai 1918.",
  "ending": [
    "Au printemps 1918, depuis le balcon et la fenêtre de son appartement au Quai du Mont-Blanc 29, Hodler peint encore et encore le Léman avec le mont Blanc, à différentes heures du jour. La ville de Genève le nomme bourgeois d’honneur.",
    "Le 19 mai 1918, Ferdinand Hodler meurt à Genève, à soixante-cinq ans, dans ce même appartement. Il reste les paysages des lacs et des montagnes, les portraits, les peintures murales – et une œuvre qui a fait du parallélisme son principe."
  ],
  "epilogue": "Ferdinand Hodler meurt à Genève le 19 mai 1918, dans son appartement du Quai du Mont-Blanc 29. Peu auparavant, il avait été nommé bourgeois d’honneur de la ville. Il reste les paysages parallélistes du lac de Thoune et du Léman, les sommets au-dessus de la mer de brouillard, les peintures murales de Iéna et de Hanovre et les derniers regards sur le mont Blanc."
};
  P.stations = Object.assign(P.stations || {}, {
  "hodlerwien": {
    "place": "Vienne et l’Oberland bernois · La percée",
    "when": "1901–1904",
    "mapLabel": "Vienne",
    "intro": [
      "En 1902, Hodler installe un atelier à la Rue du Rhône 29 à Genève. En 1903, il est à Vienne et se lie d’amitié avec Gustav Klimt, Koloman Moser et Josef Hoffmann. En 1904, il est l’invité d’honneur de la 19e Sécession viennoise ; la percée internationale est accomplie.",
      "En même temps, il continue de peindre des paysages : le Léman vu de Saint-Prex, la Jungfrau depuis l’Isenfluh, le Kiental et le Fromberghorn. Les formes se font plus rares, la répétition plus nette."
    ]
  },
  "hodlerleissigen": {
    "place": "Leissigen · Le lac de Thoune",
    "when": "1904–1905",
    "mapLabel": "Leissigen",
    "intro": [
      "En 1904, Hodler travaille au lac de Thoune, souvent depuis Leissigen. Naissent des vues du lac avec la chaîne du Stockhorn, des reflets symétriques avant le lever du soleil, et le torrent forestier juste devant le village.",
      "Le reflet symétrique devient un cœur de son parallélisme. En 1905, il voyage en Italie et étudie notamment Giotto ; la même année, il peint de nouveau le lac comme un miroir calme."
    ]
  },
  "hodlerchexbres": {
    "place": "Chexbres et le Léman",
    "when": "1904–1908",
    "mapLabel": "Chexbres",
    "intro": [
      "Depuis les hauteurs au-dessus de Chexbres, Hodler peint le Léman en larges bandes parallèles. En 1904 et 1905 naissent des versions de cette vue ; s’y ajoutent le Grammont sur la rive sud, en 1905 et 1906, et la vue sur les Alpes de Savoie.",
      "En 1908, « Paysage rythmique au bord du Léman » pousse loin le parallélisme. En octobre 1907, Hodler avait remercié Carl Albert Loosli pour un article qui avait saisi ce principe."
    ]
  },
  "hodlerbaeume": {
    "place": "Arbres, torrents et l’Engadine",
    "when": "1905–1907",
    "mapLabel": "Arbres",
    "intro": [
      "Outre les vastes vues de lacs, Hodler peint des arbres isolés et des eaux proches : la Lütschine noire, un cerisier en fleurs, un sapin près de Chamby au-dessus de Montreux.",
      "En 1907 naît « Neige dans l’Engadine ». Même loin des grands lacs, la superposition claire de l’avant-plan, de la forêt et du sommet reste son thème."
    ]
  },
  "hodleroberland": {
    "place": "Oberland bernois · L’Eiger, le Mönch et la Jungfrau",
    "when": "1908",
    "mapLabel": "Oberland",
    "intro": [
      "En 1908, Hodler peint l’Eiger, le Mönch et la Jungfrau au-dessus de la mer de brouillard, au clair de lune et au soleil du matin, notamment depuis la Schynige Platte. S’y ajoute la brume du soir sur le lac de Thoune.",
      "La même année, il a des expositions à Iéna et à Francfort, devient président central de la Société des peintres, sculpteurs et architectes suisses, et rencontre Valentine Godé-Darel."
    ]
  },
  "hodlermurale": {
    "place": "Iéna et Hanovre · Le travail et les peintures murales",
    "when": "1908–1913",
    "mapLabel": "Iéna",
    "intro": [
      "En 1897, Hodler avait remporté le concours pour les peintures murales de Marignan au Landesmuseum de Zurich. Il s’ensuivit une vive contestation artistique ; ce n’est que lorsque le Conseil fédéral approuva l’un des projets que l’entreprise put continuer. La dernière version date de 1899. En 1908-1909, il reçoit à Iéna la commande du « Départ des étudiants d’Iéna pour la guerre de libération de 1813 ».",
      "En 1911, « Le Faucheur » et « Le Bûcheron » apparaissent sur des billets de banque suisses. La même année, il reçoit la commande de « L’Unanimité » pour le Nouvel Hôtel de Ville de Hanovre, achevée en 1913. En 1909, Augustine Dupin meurt. En 1910, Hodler installe un second atelier aux Acacias et reçoit le doctorat honoris causa de l’Université de Bâle."
    ]
  },
  "hodlerthun": {
    "place": "Lac de Thoune · Stockhorn et Niesen",
    "when": "1909–1913",
    "mapLabel": "Thoune",
    "intro": [
      "À l’été 1910, Hodler travaille au lac de Thoune à des séries du Stockhorn et du Niesen. Le reflet symétrique de 1909, la version de Mannheim de la chaîne du Stockhorn et le Niesen vu de Heustrich sous la pluie appartiennent à ces années.",
      "Il retient le même motif dans la lumière de novembre, le soir et en hiver. La répétition n’est pas un pis-aller, c’est le principe."
    ]
  },
  "hodlerbildnisse": {
    "place": "Genève · Portraits et famille",
    "when": "1911–1917",
    "mapLabel": "Portraits",
    "intro": [
      "À côté des paysages naissent en ces années de nombreux portraits : le critique Mathias Morhardt, la collectionneuse Gertrud Müller, le fils Hector, des autoportraits, en 1916 le général Ulrich Wille. En 1913 naît la fille Pauline-Valentine, de la liaison avec Valentine Godé-Darel. À l’automne de la même année, Hodler est au Salon d’Automne à Paris, rencontre Auguste Rodin et devient officier de la Légion d’honneur. La famille s’installe au Quai du Mont-Blanc 29 ; l’appartement reçoit des meubles de Josef Hoffmann.",
      "En 1914, Hodler signe la protestation contre le bombardement de la cathédrale de Reims ; les associations d’artistes allemandes l’en excluent. Le 25 janvier 1915, Valentine Godé-Darel meurt à Vevey. En 1916 et 1917, Hodler enseigne une classe de peinture à l’École des Beaux-Arts de Genève. En 1917, le Kunsthaus Zürich lui consacre une grande rétrospective ; la même année, il est atteint d’un œdème pulmonaire."
    ]
  },
  "hodlerchampery": {
    "place": "Champéry, Montana et Caux",
    "when": "1915–1917",
    "mapLabel": "Caux",
    "intro": [
      "En 1915, Hodler peint un coucher de soleil sur le Léman et le Weisshorn vu de Montana. En 1916 et 1917, il séjourne à Champéry et à Montana, où son fils Hector se remet d’une tuberculose. Naissent les Dents du Midi, les Dents Blanches, un torrent près de Champéry.",
      "En 1917, il regarde le Léman depuis Caux au-dessus de Montreux, peint des nuages qui s’élèvent et revient au Grammont au soleil du matin."
    ]
  },
  "hodlermontblanc": {
    "place": "Genève · Quai du Mont-Blanc",
    "when": "1918",
    "mapLabel": "1918",
    "intro": [
      "Au printemps 1918, depuis la fenêtre et le balcon de son appartement au Quai du Mont-Blanc 29, Hodler peint le Léman avec le mont Blanc, à l’aube, dans l’aurore, à la lumière du matin, l’après-midi, avant le lever du soleil. La ville de Genève le nomme bourgeois d’honneur.",
      "Il naît aussi un portrait de sa femme Berthe. Le 19 mai 1918, Ferdinand Hodler meurt à Genève, dans ce même appartement, à soixante-cinq ans."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hstprex": {
    "text": [
      "Depuis Saint-Prex, le Léman s’étend en bandes horizontales calmes, les montagnes du côté savoyard en une silhouette nette.",
      "Le tableau date de 1901, un an après la médaille d’or à Paris. Hodler cherche le paysage en quelques lignes répétées."
    ],
    "fact": "1901. Collection non déterminée."
  },
  "hisenfluh": {
    "text": [
      "Depuis l’Isenfluh, la Jungfrau se dresse avec fermeté au-dessus des hauteurs qui la précèdent, le ciel clair et vaste.",
      "En 1902, Hodler installe un atelier à la Rue du Rhône 29 à Genève. En même temps, il revient sans cesse dans l’Oberland bernois."
    ],
    "fact": "1902. Collection non déterminée."
  },
  "hkiental": {
    "text": [
      "Le Kiental s’ouvre vers le bas ; au-dessus, le Blümlisalp s’étend en formes calmes et étagées.",
      "Le tableau est daté de 1902. Hodler simplifie la vallée, le versant et le sommet jusqu’à ce que la répétition des lignes devienne elle-même le motif."
    ],
    "fact": "1902. Collection non déterminée."
  },
  "hwald02": {
    "text": [
      "Un torrent coule entre les troncs et les pierres ; la lumière tombe en bandes dans la forêt.",
      "Même après 1900, le torrent de montagne reste un motif. Hodler observe le cours de l’eau et les troncs verticaux les uns à côté des autres."
    ],
    "fact": "1902. Collection non déterminée."
  },
  "hfromberg": {
    "text": [
      "Le Fromberghorn s’élève en une forme nette, presque triangulaire, au-dessus de la vallée de Reichenbach.",
      "Le tableau date de 1903. La même année, Hodler est à Vienne et se lie d’amitié avec Gustav Klimt, Koloman Moser et Josef Hoffmann."
    ],
    "fact": "1903. Collection non déterminée."
  },
  "hthunless": {
    "text": [
      "Depuis Leissigen, le lac de Thoune s’étend, calme, les montagnes derrière lui en une chaîne paisible.",
      "En 1904, Hodler est l’invité d’honneur de la 19e Sécession viennoise ; la percée internationale est là. La même année, il travaille au lac de Thoune, souvent depuis Leissigen."
    ],
    "fact": "1904. Collection non déterminée."
  },
  "hthunsym04": {
    "text": [
      "Avant le lever du soleil, la chaîne de montagnes se reflète presque exactement dans le lac ; le ciel et l’eau partagent le tableau en bandes calmes.",
      "Le reflet symétrique est au cœur du parallélisme de Hodler : le paysage devient un ordre de lignes répétées."
    ],
    "fact": "1904. Collection non déterminée."
  },
  "hthunstock04": {
    "text": [
      "La chaîne du Stockhorn s’étend au-dessus du lac lumineux, au premier plan des pierres et une rive basse.",
      "Hodler peint ce motif pendant des décennies, en versions toujours plus claires. En 1904 naît l’une des premières variantes strictement construites."
    ],
    "fact": "1904. Collection non déterminée."
  },
  "hwaldbach04": {
    "text": [
      "Un torrent dévale entre des pierres moussues et des troncs, l’eau claire, la forêt dense.",
      "Outre les vastes vues du lac, Hodler retient en 1904 aussi le torrent forestier tout proche, à Leissigen."
    ],
    "fact": "1904. Collection non déterminée."
  },
  "hthunsym05": {
    "text": [
      "De nouveau le lac s’étend comme un miroir : les montagnes en haut, leur répétition en bas, dans une symétrie calme.",
      "Le tableau est daté de 1905. La même année, Hodler voyage en Italie et étudie notamment Giotto."
    ],
    "fact": "1905. Collection non déterminée."
  },
  "hchex04": {
    "text": [
      "Depuis les hauteurs au-dessus de Chexbres, le Léman s’étend en larges bandes de couleur, les montagnes en face en une chaîne calme.",
      "Chexbres au-dessus du lac devient pour Hodler un point de vue récurrent. En 1904 naît une version précoce de ce regard."
    ],
    "fact": "1904. Collection non déterminée."
  },
  "chexbres": {
    "text": [
      "Le lac, la rive et le ciel s’étendent en bandes parallèles calmes : turquoise, violet, un ciel clair.",
      "La version de 1905 est conservée au Kunstmuseum Basel. Hodler réduit le paysage à de grandes bandes nettes."
    ],
    "fact": "1905. Kunstmuseum Basel."
  },
  "hgrammont05": {
    "text": [
      "Le Grammont s’élève en une forme large et nette au-dessus du Léman, le versant en quelques champs de couleur.",
      "Hodler peint plusieurs fois la montagne sur la rive sud du lac. La version de 1905 le montre ferme et simplifié."
    ],
    "fact": "1905. Collection non déterminée."
  },
  "hgrammont06": {
    "text": [
      "Un an plus tard, le Grammont se dresse de nouveau au-dessus du lac, la forme encore plus déterminée, le lac comme une surface calme.",
      "Répéter la même montagne à des moments différents fait partie de la méthode de Hodler : le même motif, un ordre nouveau."
    ],
    "fact": "1906. Collection non déterminée."
  },
  "hsavoyer06": {
    "text": [
      "Le lac s’étend sur toute la largeur du tableau ; en face, les Alpes de Savoie en une chaîne calme et dentelée.",
      "Cette vue sur le Léman date d’environ 1906. Le versant français d’en face devient une silhouette nette."
    ],
    "fact": "Vers 1906. Collection non déterminée."
  },
  "hrhythm08": {
    "text": [
      "La rive, l’eau et les montagnes ondulent en lignes répétées, rythmiques, à travers la surface, presque sans détails.",
      "Le tableau de 1908 pousse loin le parallélisme : le paysage devient un rythme. L’année précédente, Hodler remercie Carl Albert Loosli pour un article qui avait saisi précisément ce principe."
    ],
    "fact": "1908. Collection non déterminée.",
    "quote": {
      "text": "Enfin, je vous renvoie votre article, votre chef-d’œuvre. Il est tout à fait fameux, bien pensé et bien écrit. Vous vous êtes exprimé très heureusement, en peu de mots, au sujet du parallélisme. Je crois que quelqu’un m’a enfin compris.",
      "cite": "Lettre à C. A. Loosli, 10 octobre 1907. Musée d’art et d’histoire, Neuchâtel."
    }
  },
  "hlutschine": {
    "text": [
      "La Lütschine noire coule entre les rochers et la forêt, l’eau claire sur le lit sombre.",
      "La rivière vient de l’Oberland, près de Grindelwald et de Zweilütschinen. En 1905, Hodler retient son cours en mouvements clairs et répétés."
    ],
    "fact": "1905. Collection non déterminée."
  },
  "hkirsch05": {
    "text": [
      "Un cerisier se dresse en pleine floraison, la couronne claire, le tronc ferme et solitaire.",
      "Pour Hodler, les arbres isolés sont presque comme des figures. Le cerisier en fleurs de 1905 appartient à la même lignée que les châtaigniers plus anciens."
    ],
    "fact": "1905. Collection non déterminée."
  },
  "htanne05": {
    "text": [
      "Un sapin isolé se dresse sur un fond clair, les branches nettement posées, le tronc droit.",
      "Chamby se trouve au-dessus de Montreux, non loin du Léman. Hodler isole l’arbre jusqu’à ce qu’il agisse comme un signe."
    ],
    "fact": "1905. Collection non déterminée."
  },
  "hschnee07": {
    "text": [
      "Un plateau hivernal dans l’Engadine : de la neige, des forêts sombres, et au-dessus une chaîne de montagnes calme.",
      "Le tableau est daté de 1907. Même loin des grands lacs, Hodler cherche la superposition claire de l’avant-plan, de la forêt et du sommet."
    ],
    "fact": "1907. Collection non déterminée."
  },
  "eiger": {
    "text": [
      "D’une mer de nuages s’élèvent l’Eiger, le Mönch et la Jungfrau, en formes claires et rythmiques.",
      "La version de 1908 compte parmi les tableaux alpins les plus connus de Hodler. Le motif rappelle « Le Voyageur contemplant une mer de nuages » de Friedrich, mais se passe d’une figure au premier plan."
    ],
    "fact": "1908. Collection privée."
  },
  "heigermond": {
    "text": [
      "Le même groupe de trois se dresse au clair de lune, les sommets pâles, le ciel profond et calme.",
      "En 1908, Hodler peint le groupe de la Jungfrau à différentes heures du jour et de la nuit, notamment depuis la Schynige Platte."
    ],
    "fact": "1908. Collection non déterminée."
  },
  "heigermorgen": {
    "text": [
      "Au soleil du matin, les trois sommets brillent, les flancs nettement détachés les uns des autres.",
      "La série de 1908 montre comment Hodler transforme un motif par la lumière et l’heure, sans abandonner la forme fondamentale."
    ],
    "fact": "1908. Collection non déterminée."
  },
  "hjungf08": {
    "text": [
      "La Jungfrau seule se dresse au-dessus du brouillard, une forme ferme et claire au-dessus de la douce couverture de nuages.",
      "Outre le groupe de trois, Hodler isole aussi en 1908 le sommet unique. La simplification va encore plus loin."
    ],
    "fact": "1908. Collection non déterminée."
  },
  "habendnebel": {
    "text": [
      "Le soir, la brume s’étend sur le lac de Thoune, les montagnes derrière elle ne sont plus que des ombres calmes.",
      "En 1908, le lac lui-même devient aussi un tableau de brume. La lumière et la vapeur desserrent les contours ; l’ordre demeure."
    ],
    "fact": "1908. Collection non déterminée."
  },
  "hjenastud": {
    "text": [
      "Un jeune homme enfile son manteau, ferme dans le mouvement ; à l’arrière-plan, une rangée de petites figures à l’horizon.",
      "La lithographie de 1908 appartient au cercle de la peinture murale d’Iéna. Hodler étudie des gestes isolés avant que naisse la grande composition. La feuille est conservée au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1908. Rijksmuseum, Amsterdam."
  },
  "hjena": {
    "text": [
      "Des soldats à cheval et à pied, des chevaux, une femme avec un enfant : une étude du mouvement d’une troupe qui part.",
      "En 1908-1909 naît à Iéna la peinture murale « Départ des étudiants d’Iéna pour la guerre de libération de 1813 ». Ce dessin du Städel Museum à Francfort retient la composition."
    ],
    "fact": "1908. Städel Museum, Francfort."
  },
  "hmaeher": {
    "text": [
      "Un faucheur se tient avec sa faux dans un mouvement largement développé, le corps nettement dessiné, le geste répété et ferme.",
      "En 1911, des motifs d’après « Le Faucheur » et « Le Bûcheron » apparaissent sur des billets de banque suisses. Les figures deviennent ainsi connues d’un large public."
    ],
    "fact": "1910. Collection non déterminée."
  },
  "hholz": {
    "text": [
      "Un bûcheron lève la hache, les jambes fermement écartées, le coup comme un grand mouvement net.",
      "Comme le faucheur, le bûcheron appartient aux figures du travail chez Hodler. En 1910 naissent ces versions austères, presque d’affiche."
    ],
    "fact": "1910. Von der Heydt-Museum, Wuppertal."
  },
  "heinamut": {
    "text": [
      "Un groupe dense d’hommes lève les bras ; au milieu, une figure se tient sur un socle, les bras ouverts.",
      "En 1911, Hodler reçoit la commande de la peinture murale « L’Unanimité » pour le Nouvel Hôtel de Ville de Hanovre ; elle est achevée en 1913. L’esquisse montre le geste rassemblé de l’assentiment."
    ],
    "fact": "Vers 1913. Collection non déterminée."
  },
  "hthunsym09": {
    "text": [
      "Le lac reflète encore une fois les montagnes, presque selon un axe, dans un ordre calme et construit.",
      "La version de 1909 poursuit le motif du reflet symétrique que Hodler suit au lac de Thoune depuis 1904."
    ],
    "fact": "1909. Collection non déterminée."
  },
  "hodler": {
    "text": [
      "La chaîne du Stockhorn s’étend clairement au-dessus du lac, ses formes se répétant presque symétriquement dans l’eau.",
      "La version de 1910 est conservée à la Kunsthalle Mannheim. À l’été de cette année, Hodler travaille au lac de Thoune à des séries du Stockhorn et du Niesen."
    ],
    "fact": "1910. Kunsthalle Mannheim."
  },
  "niesen": {
    "text": [
      "Le Niesen s’élève en une pyramide sombre, presque triangulaire, derrière le lac et l’air de pluie.",
      "La version de 1910 est peinte depuis Heustrich, sous la pluie. C’est pourquoi la montagne paraît plus douce que sur les versions ensoleillées."
    ],
    "fact": "1910. Collection privée."
  },
  "hthunniesen": {
    "text": [
      "Au-dessus du lac vaste, le Niesen se dresse en une forme sombre et nette, le ciel clair, l’eau calme.",
      "Outre la pyramide isolée de la montagne, Hodler peint aussi en 1910 le Niesen comme une part de tout le paysage du lac."
    ],
    "fact": "1910. Collection non déterminée."
  },
  "hthunstock11": {
    "text": [
      "Dans la lumière de novembre, la chaîne du Stockhorn s’étend au-dessus du lac, les formes fermes, les couleurs plus froides.",
      "Le tableau est daté de novembre 1910. En 1910, Hodler installe un second atelier aux Acacias à Genève et reçoit le doctorat honoris causa de l’Université de Bâle."
    ],
    "fact": "1910. Von der Heydt-Museum, Wuppertal."
  },
  "hthunabend12": {
    "text": [
      "Le soir, le lac et les montagnes s’assombrissent ; la chaîne du Stockhorn reste visible comme une silhouette calme.",
      "Cette version du soir date d’environ 1912. Hodler retient le même motif à une autre heure."
    ],
    "fact": "Vers 1912. Collection non déterminée."
  },
  "hmorhardt": {
    "text": [
      "Mathias Morhardt est assis ou debout dans un habit sombre, le visage fermement modelé, le regard calme.",
      "Morhardt, écrivain et critique, a tôt soutenu Hodler à Paris. Le portrait date de 1911."
    ],
    "fact": "1911. Collection non déterminée."
  },
  "hgertrud12": {
    "text": [
      "Gertrud Müller nous regarde ouvertement, dans une robe claire, le fond simple.",
      "La collectionneuse de Soleure compte parmi les importantes commanditaires de Hodler. Le portrait date d’environ 1912."
    ],
    "fact": "Vers 1912. Collection non déterminée."
  },
  "hself12": {
    "text": [
      "Hodler se montre lui-même : la barbe, un regard ouvert, un col blanc sous l’habit sombre, tout près.",
      "L’autoportrait de 1912 appartient à une longue série dans laquelle il retient encore et encore sa propre apparence."
    ],
    "fact": "1912. Collection non déterminée."
  },
  "hselfrosen": {
    "text": [
      "Hodler se tient devant nous, des roses derrière lui ou à ses côtés, le regard grave, l’attitude droite.",
      "Le tableau date de 1914. La même année, Hodler signe la protestation contre le bombardement de la cathédrale de Reims ; les associations d’artistes allemandes l’en excluent alors."
    ],
    "fact": "1914. Collection non déterminée."
  },
  "hwille": {
    "text": [
      "Le général Ulrich Wille est assis en uniforme, le regard ferme, l’attitude d’un homme en charge.",
      "Pendant la Première Guerre mondiale, Wille est le commandant en chef de l’armée suisse. Le portrait de 1916 est conservé au Kunstmuseum Bern."
    ],
    "fact": "1916. Kunstmuseum Bern."
  },
  "hself16": {
    "text": [
      "De nouveau Hodler se montre lui-même, le visage plus proche, les traits plus marqués, le regard fixe.",
      "L’autoportrait de 1916 naît pendant les années de guerre, au cours desquelles il enseigne à Genève et cherche refuge dans les montagnes."
    ],
    "fact": "1916. Collection non déterminée."
  },
  "hselfkittel": {
    "text": [
      "Hodler porte une blouse de peintre verte, le visage proche, le regard éveillé et grave.",
      "Le portrait de 1917 le montre au travail. La même année, le Kunsthaus Zürich lui consacre une grande rétrospective ; il est atteint d’un œdème pulmonaire."
    ],
    "fact": "1917. Collection non déterminée."
  },
  "hsonne15": {
    "text": [
      "Le soir, le soleil est bas sur le Léman, l’eau et le ciel en bandes horizontales chaudes.",
      "Le tableau date de 1915. Le 25 janvier de cette année, Valentine Godé-Darel meurt à Vevey."
    ],
    "fact": "1915. Collection non déterminée."
  },
  "hweisshorn15": {
    "text": [
      "Depuis Montana, le Weisshorn se dresse en une forme claire et ferme au-dessus de la vallée, les flancs nettement articulés.",
      "En 1915 et les années suivantes, Hodler séjourne à Montana et à Champéry. De là, il peint les sommets valaisans."
    ],
    "fact": "1915. Collection non déterminée."
  },
  "hdents16": {
    "text": [
      "Les Dents du Midi s’élèvent en une chaîne dentelée, les pics rythmiquement répétés, le ciel clair.",
      "En 1916 et 1917, Hodler séjourne à Champéry et à Montana, où son fils Hector se remet d’une tuberculose."
    ],
    "fact": "1916. Collection non déterminée."
  },
  "hblanches16": {
    "text": [
      "Au soleil du matin, les Dents Blanches près de Champéry brillent, les versants en plans chauds et froids.",
      "Le tableau est daté de 1916. En ces années, les montagnes autour de Champéry deviennent un motif nouveau et ferme."
    ],
    "fact": "1916. Collection non déterminée."
  },
  "hbach16": {
    "text": [
      "Un torrent de montagne dévale entre les pierres et les versants, l’eau claire, le mouvement net et répété.",
      "Outre les sommets, Hodler peint aussi en 1916 le torrent tout proche à Champéry, comme autrefois les torrents de l’Oberland."
    ],
    "fact": "1916. Collection non déterminée."
  },
  "hcaux17": {
    "text": [
      "Depuis Caux au-dessus de Montreux, le Léman s’étend, profond et vaste, les montagnes en face en une ligne calme.",
      "Le tableau date de 1917. Le point de vue haut au-dessus du lac redonne à Hodler les larges bandes parallèles de l’eau et du ciel."
    ],
    "fact": "1917. Collection non déterminée."
  },
  "hwolken17": {
    "text": [
      "Au-dessus du paysage près de Caux, des nuages s’élèvent ; le ciel est agité, les versants fermes en dessous.",
      "En 1917, Caux reste un point de vue. Hodler retient non seulement le lac calme, mais aussi le ciel en mouvement."
    ],
    "fact": "1917. Collection non déterminée."
  },
  "hgrammont17": {
    "text": [
      "Au soleil du matin, le Grammont brille au-dessus du lac, les versants en jaune chaud et en violet froid, le lac comme un miroir net.",
      "Plus de dix ans après les premiers tableaux du Grammont, Hodler revient en 1917 à cette montagne, désormais au soleil du matin."
    ],
    "fact": "1917. Collection non déterminée."
  },
  "hmbdawn": {
    "text": [
      "À l’aube, le mont Blanc s’étend au-dessus du Léman, les formes douces, la lumière encore pâle.",
      "En 1918, Hodler peint encore et encore la vue depuis son appartement du Quai du Mont-Blanc 29, à différentes heures du jour."
    ],
    "fact": "1918. Collection non déterminée."
  },
  "hmbred": {
    "text": [
      "Dans l’aurore, le lac et le ciel se colorent ; le mont Blanc se dresse en une forme calme et lointaine au-dessus de l’eau.",
      "La série naît depuis la fenêtre et le balcon. En 1918, Genève nomme Hodler bourgeois d’honneur."
    ],
    "fact": "1918. Collection non déterminée."
  },
  "hmblight": {
    "text": [
      "À la lumière du matin, le lac devient plus net, le mont Blanc plus ferme, les bandes horizontales plus distinctes.",
      "Hodler change à peine le cadrage, seulement la lumière. La répétition de la même vue est elle-même le thème."
    ],
    "fact": "1918. Collection non déterminée."
  },
  "hmbafternoon": {
    "text": [
      "L’après-midi, une autre lumière s’étend sur le lac et les montagnes, les couleurs plus chaudes, la vue au loin plus vaste.",
      "Cette heure du jour aussi appartient à la dernière série. Hodler observe le même regard jusqu’à ce que l’heure le transforme."
    ],
    "fact": "1918. Collection non déterminée."
  },
  "hmbbefore": {
    "text": [
      "Avant le lever du soleil, le lac et le ciel sont encore frais, le mont Blanc une masse pâle et calme à l’horizon.",
      "L’heure avant le lever est parmi les plus calmes de la série. Un peu plus tard, le 19 mai 1918, Hodler meurt dans ce même appartement."
    ],
    "fact": "1918. Collection non déterminée."
  },
  "hmbmarch": {
    "text": [
      "Au petit matin de mars, le mont Blanc s’étend au-dessus du lac, l’air clair, les lignes calmes.",
      "Le tableau est daté de mars 1918, deux mois avant la mort de Hodler. La série se poursuit jusqu’à ses dernières semaines."
    ],
    "fact": "Mars 1918. Collection non déterminée."
  },
  "hberthe18": {
    "text": [
      "Berthe Hodler, née Jacques, apparaît dans un portrait simple, le visage calme et proche.",
      "Hodler l’a rencontrée en 1894 et l’a épousée en 1898. Le portrait date de 1918, la dernière année de sa vie."
    ],
    "fact": "1918. Collection non déterminée."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
