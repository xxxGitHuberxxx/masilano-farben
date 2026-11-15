// v8.9 French content for Utagawa Hiroshige’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts. Overwrites P.paths.hiroshige with whole-path meta.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "National Diet Library, Tokio": "Bibliothèque nationale de la Diète, Tokyo",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Library of Congress, Washington": "Bibliothèque du Congrès, Washington",
  "National Library of New Zealand, Wellington": "Bibliothèque nationale de Nouvelle-Zélande, Wellington",
  "Chester Beatty Library, Dublin": "Chester Beatty Library, Dublin",
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Library of Congress, Washington (dieser Abzug)": "Bibliothèque du Congrès, Washington (cette épreuve)"
});
  P.works = Object.assign(P.works || {}, {
  "hgks12": {
    "title": "Shinmachi",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks14": {
    "title": "Takasaki",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks16": {
    "title": "Annaka",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks17": {
    "title": "Matsuida",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks19": {
    "title": "Karuizawa",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks22": {
    "title": "Otai",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks24": {
    "title": "Shionada",
    "museum": "Cleveland Museum of Art"
  },
  "hgks26": {
    "title": "Mochizuki",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks28": {
    "title": "Nagakubo",
    "museum": "Cleveland Museum of Art"
  },
  "hgks29": {
    "title": "Wada",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks30": {
    "title": "Shimosuwa",
    "museum": "Cleveland Museum of Art"
  },
  "hgks32": {
    "title": "Seba",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgks37": {
    "title": "Miyanokoshi",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks38": {
    "title": "Fukushima",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks40": {
    "title": "Suhara",
    "museum": "Cleveland Museum of Art"
  },
  "hgks43": {
    "title": "Tsumago",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks47": {
    "title": "Ōi",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgks68": {
    "title": "Moriyama",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgrk_hida": {
    "title": "Le bac à panier dans le Hida",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgrk_naruto": {
    "title": "Les tourbillons de Naruto dans l’Awa",
    "museum": "Bibliothèque nationale de Nouvelle-Zélande, Wellington"
  },
  "hgrk_arashi": {
    "title": "Le pont Togetsu à Arashiyama",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgrk_saruhashi": {
    "title": "Le pont du Singe dans le Kai",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgrk_sumida": {
    "title": "Matin de neige sur la Sumida, dans le Musashi",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgrk_sarashina": {
    "title": "La lune de Sarashina, dans le Shinano",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgrk_matsushima": {
    "title": "Matsushima dans le Mutsu",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgrk_ishiyama": {
    "title": "Le temple Ishiyama au bord du lac Biwa",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgrk_nikko": {
    "title": "La cascade Urami à Nikkō",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgrk_noto": {
    "title": "Taki no ura dans le Noto",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgrk_izumo": {
    "title": "La fête Hotohoto au Grand Sanctuaire d’Izumo",
    "museum": "Cleveland Museum of Art"
  },
  "hgrk_sado": {
    "title": "Les mines d’or de Sado",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_nihonbashi": {
    "title": "Nihonbashi après la neige",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgmeh_kasumi": {
    "title": "Kasumigaseki",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgmeh_suruga": {
    "title": "Suruga-chō",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_shinobazu": {
    "title": "Le pavillon Kiyomizu et l’étang Shinobazu",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgmeh_suidobashi": {
    "title": "Le pont Suidō et Surugadai",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_yatsumi": {
    "title": "Le pont Yatsumi",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_plum": {
    "title": "Le jardin des pruniers de Kameido",
    "museum": "Chester Beatty Library, Dublin"
  },
  "hgmeh_iris": {
    "title": "Les iris de Horikiri",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_asukayama": {
    "title": "Vue vers le nord depuis Asukayama",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgmeh_ukeji": {
    "title": "Le sanctuaire Akiba à Ukeji",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hgmeh_sazaido": {
    "title": "Le pavillon en spirale des Cinq cents Arhats",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgmeh_mama": {
    "title": "Érables à Mama",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "ohashi": {
    "title": "Averse soudaine sur le pont Shin-Ōhashi",
    "museum": "Bibliothèque du Congrès, Washington (cette épreuve)"
  },
  "hgmeh_fireworks": {
    "title": "Feux d’artifice au pont Ryōgoku",
    "museum": "Cleveland Museum of Art"
  },
  "hgmeh_moonpine": {
    "title": "Le pin de la lune à Ueno",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_senju": {
    "title": "Le grand pont de Senju",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_mannen": {
    "title": "Le pont Mannen à Fukagawa",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_ayase": {
    "title": "La rivière Ayase à Kanegafuchi",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_jumbo": {
    "title": "Aigle au-dessus de la plaine de Jūmantsubo à Fukagawa",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hgmeh_azuma": {
    "title": "Le pont Azuma et le temple Kinryūzan",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_bikuni": {
    "title": "Le pont Bikuni sous la neige",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_saruwaka": {
    "title": "Vue nocturne de Saruwaka-chō",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgmeh_meguro": {
    "title": "Le pont-tambour et la colline du Couchant à Meguro",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_takata": {
    "title": "Le manège de Takata",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgmeh_foxfires": {
    "title": "Feux de renard la veille du Nouvel An à Ōji",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgmeh_shiba": {
    "title": "Shiba Shinmei et le Zōjō-ji",
    "museum": "Bibliothèque nationale de la Diète, Tokyo"
  },
  "hgfuji_enoshima": {
    "title": "La porte d’Enoshima",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgfuji_miho": {
    "title": "La plage aux pins de Miho dans le Suruga",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgfuji_satta": {
    "title": "La mer au large de Satta dans le Suruga",
    "museum": "Bibliothèque du Congrès, Washington"
  },
  "hgfuji_hakone": {
    "title": "Le lac de Hakone",
    "museum": "Bibliothèque du Congrès, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.hiroshige = {
  "title": "Le parcours de vie d’Utagawa Hiroshige",
  "life": "1797–1858",
  "part": "Parties 1–2 · 1797–1858",
  "subtitle": "D’Edo sur le Tōkaidō et le Kisokaidō, vers les provinces et les Cent vues d’Edo",
  "intro": "Voyage avec Utagawa Hiroshige à travers toute sa vie : de l’enfance dans le corps des pompiers de Yayosu à Edo, en passant par l’apprentissage chez Toyohiro, les premières vues de la capitale de l’Est, le voyage sur le Tōkaidō de 1832 selon la tradition et la série Hōeidō des 53 stations, les huit vues d’Ōmi, le Kisokaidō à partir de 1835 environ, les lieux célèbres des plus de soixante provinces et les Cent vues célèbres d’Edo, jusqu’à la mort de Hiroshige à Edo le 12 octobre 1858. Des stations courtes et des gravures sur bois à colorier.",
  "ending": [
    "Le 12 octobre 1858, Utagawa Hiroshige meurt à Edo, à soixante et un ans. La tradition donne le choléra comme cause de la mort ; cette année-là, une épidémie sévit dans la ville. Il est enterré dans le cimetière du temple Tōgaku-ji à Asakusa. Son élève et fils adoptif Suzuki Shigenobu poursuit le nom sous celui de Hiroshige II.",
    "Il reste les stations du Tōkaidō et du Kisokaidō, les vues des provinces et les Cent vues célèbres d’Edo : une œuvre qui a saisi la pluie, la neige, la lune et les rues de la capitale de l’Est."
  ],
  "epilogue": "Utagawa Hiroshige meurt le 12 octobre 1858 à Edo. Il est enterré au temple Tōgaku-ji à Asakusa. Il reste les 53 stations du Tōkaidō, le Kisokaidō, les lieux célèbres des plus de soixante provinces et les Cent vues célèbres d’Edo."
};
  P.stations = Object.assign(P.stations || {}, {
  "hiroshigekiso": {
    "place": "Le Kisokaidō : Hiroshige prend le relais",
    "when": "à partir de 1835 environ",
    "mapLabel": "Kisokaidō",
    "intro": [
      "Après le succès du Tōkaidō de Hōeidō naît une seconde série de stations sur la route de l’intérieur, le Kisokaidō (Nakasendō) : 69 stations plus Nihonbashi. Keisai Eisen la commence pour l’éditeur Takenouchi Magohachi (Hōeidō) ; Hiroshige reprend la plus grande partie des stations suivantes. L’éditeur Iseya Rihei (Kinjudō) participe aussi à l’édition.",
      "Les feuilles paraissent à partir de 1835 environ, dans les années qui suivent. Eisen reste responsable des premières stations ; les feuilles montrées ici appartiennent à la part de Hiroshige.",
      "La route de l’intérieur va d’Edo à travers les montagnes de Kōzuke et de Shinano, par de hauts cols, vers l’ouest."
    ]
  },
  "hiroshigepass": {
    "place": "Cols, lune et neige",
    "when": "vers 1835–1838",
    "mapLabel": "Cols",
    "intro": [
      "La route monte à travers les montagnes de Shinano. À Mochizuki, la lune se tient au-dessus des pins, à Nagakubo au-dessus d’un long pont ; au col de Wada, la neige est profonde.",
      "Shimosuwa se trouve au bord du lac Suwa, après les hauts cols. À Seba, des saules se dressent dans la lumière du soir au-dessus de la rivière – l’une des feuilles les plus connues de toute la série.",
      "Ces stations forment le cœur du Kisokaidō de Hiroshige."
    ]
  },
  "hiroshigekisoend": {
    "place": "Vallées du Kiso et l’ouest",
    "when": "vers 1835–1838",
    "mapLabel": "Kiso",
    "intro": [
      "Plus à l’ouest, la route suit les vallées du Kiso : la lune sur Miyanokoshi, le poste de contrôle de Fukushima, la pluie soudaine à Suhara, le relais de poste de Tsumago, la neige épaisse à Ōi.",
      "Vers la fin de la route, Moriyama est déjà proche du lac Biwa, dans le passage vers Ōtsu et Kyōto.",
      "Avec ces feuilles, la série de l’intérieur est solidement entre les mains de Hiroshige."
    ]
  },
  "hiroshigeprovinces": {
    "place": "Les plus de soixante provinces",
    "when": "1853–1856",
    "mapLabel": "Provinces",
    "intro": [
      "En 1853–1856 paraît la série « Lieux célèbres des plus de soixante provinces » (Rokujūyoshū meisho zue) : environ soixante-dix feuilles ōban verticales, éditées par Koshimuraya Heisuke.",
      "Les vues couvrent tout le pays : le bac à panier dans le Hida, les tourbillons de Naruto dans l’Awa, le pont Togetsu à Arashiyama, le pont du Singe dans le Kai, un matin de neige sur la Sumida, la lune sur les rizières en terrasses de Sarashina.",
      "Contrairement au Tōkaidō et au Kisokaidō, ce n’est pas une suite de stations routières, mais un atlas de lieux célèbres."
    ]
  },
  "hiroshigeprovinces2": {
    "place": "Côtes, îles et sanctuaires",
    "when": "1853–1856",
    "mapLabel": "Côtes",
    "intro": [
      "La série des provinces atteint aussi les côtes et les îles : la baie de Matsushima dans le Mutsu, le temple Ishiyama au bord du lac Biwa, la cascade Urami à Nikkō, la côte de Noto, la fête Hotohoto au Grand Sanctuaire d’Izumo et les mines d’or de l’île de Sado.",
      "À Ishiyama, Hiroshige revient à un lieu qu’il avait déjà dessiné dans les huit vues d’Ōmi au milieu des années 1830.",
      "Avec cette série, vingt ans après le Tōkaidō, il est de nouveau le maître du paysage de la capitale de l’Est – désormais le regard tourné vers tout le pays."
    ]
  },
  "hiroshigehyakkei": {
    "place": "Cent vues célèbres d’Edo",
    "when": "à partir de 1856",
    "mapLabel": "Edo",
    "intro": [
      "À partir de 1856, Hiroshige travaille aux « Cent vues célèbres d’Edo » (Meisho Edo Hyakkei), éditées par Uoya Eikichi (Sakanaya Eikichi). La série réunit finalement environ 118 à 119 feuilles, la plupart des années 1856–1858.",
      "Elle recommence à Nihonbashi, après la neige, et traverse les rues de la capitale de l’Est : Kasumigaseki, Suruga-chō avec le Fuji dans l’axe de la rue, le pavillon Kiyomizu au bord de l’étang Shinobazu, le pont Suidō, le pont Yatsumi.",
      "En 1856, Hiroshige prononce aussi formellement des vœux bouddhiques ; il continue de travailler, jusqu’aux dernières années."
    ]
  },
  "hiroshigespring": {
    "place": "Jardins, fleurs et feuilles d’automne",
    "when": "1856–1857",
    "mapLabel": "Jardins",
    "intro": [
      "Les Cent vues sont traversées de jardins et de saisons : le jardin des pruniers de Kameido, les iris de Horikiri, la vue depuis Asukayama, le sanctuaire Akiba à Ukeji, le pavillon en spirale des Cinq cents Arhats, les érables de Mama.",
      "Beaucoup de ces feuilles paraissent en 1857. Le tronc courbé du prunier de Kameido et les iris de Horikiri comptent parmi les images de jardin les plus connues de la série.",
      "Hiroshige place souvent le premier plan proche et grand, la ville ou le jardin derrière, calmes et vastes."
    ]
  },
  "hiroshigenight": {
    "place": "Pluie, nuit et fleuve",
    "when": "1856–1858",
    "mapLabel": "Pluie",
    "intro": [
      "La pluie, les feux d’artifice et l’eau comptent parmi les feuilles les plus célèbres de la série. En 1857 paraît l’averse soudaine sur le Shin-Ōhashi et Atake, une grande feuille tardive des Cent vues.",
      "S’y ajoutent le pin de la lune à Ueno, le grand pont de Senju, le pont Mannen à Fukagawa et la rivière Ayase à Kanegafuchi. Les feux d’artifice de Ryōgoku paraissent en 1858.",
      "Le temps qu’il fait et la nuit restent jusqu’au bout l’un des thèmes les plus constants de Hiroshige."
    ]
  },
  "hiroshigewinter": {
    "place": "Neige, aigle et rues",
    "when": "1857–1858",
    "mapLabel": "Hiver",
    "intro": [
      "La série saisit aussi l’hiver et le bord de la ville : un aigle au-dessus de la plaine enneigée de Jūmantsubo à Fukagawa, le pont Azuma avec le lointain Kinryūzan, le pont Bikuni sous la neige, la nuit dans le quartier des théâtres de Saruwaka-chō, le pont-tambour de Meguro, le manège de Takata.",
      "La feuille de neige du pont Bikuni paraît en 1858. Les autres feuilles de cette station appartiennent surtout à l’année 1857.",
      "Ainsi se complète le regard sur Edo : non seulement des jardins et des ponts, mais aussi la neige, les animaux et les rues du bord."
    ]
  },
  "hiroshige1858": {
    "place": "Dernières années et la mort en 1858",
    "when": "1857–1858",
    "mapLabel": "1858",
    "intro": [
      "En 1856, Hiroshige prononce formellement des vœux bouddhiques et continue de travailler. En 1857 paraît dans les Cent vues la feuille des feux de renard la veille du Nouvel An à Ōji ; s’y ajoute la vue de Shiba Shinmei et du Zōjō-ji.",
      "En 1858 paraît, chez Tsutaya Kichizō (Kōeidō), une série de trente-six vues du Fuji : la porte d’Enoshima, la plage aux pins de Miho, la mer au large de Satta, le lac de Hakone.",
      "Le 12 octobre 1858, Utagawa Hiroshige meurt à Edo. La tradition donne le choléra comme cause de la mort ; cette année-là, une épidémie sévit dans la ville. Il est enterré dans le cimetière du temple Tōgaku-ji à Asakusa. Son élève et fils adoptif Suzuki Shigenobu poursuit le nom sous celui de Hiroshige II."
    ]
  },
  "hiroshigeomi": {
    "place": "Ōmi hakkei et la renommée des années 1830",
    "when": "vers 1834–1835",
    "mapLabel": "Ōmi",
    "intro": [
      "Vers 1834–1835 suit la série « Ōmi hakkei no uchi », les huit vues de la province d’Ōmi sur le lac Biwa, non loin de Kyōto. Le schéma des huit vues est plus ancien et vient de Chine ; Hiroshige le transpose à la cloche, à la pluie, aux oies, à la lune et à la lueur du soir sur le lac.",
      "Avec la série du Tōkaidō et les vues d’Ōmi, au milieu des années 1830, Hiroshige est fermement établi comme maître du paysage, à l’extrémité occidentale de la route et sur le lac.",
      "De là le chemin mène au Kisokaidō, aux vues des provinces et aux Cent vues célèbres d’Edo."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hgks12": {
    "text": [
      "La station de Shinmachi se trouve sur le Kisokaidō, dans la province de Kōzuke. La feuille montre le relais avec des voyageurs et le vaste paysage de la route de l’intérieur.",
      "Keisai Eisen commence la série des 69 stations du Kisokaidō pour l’éditeur Takenouchi Magohachi (Hōeidō). Les stations suivantes, dont Shinmachi, sont dessinées par Hiroshige ; elles paraissent à partir de 1835 environ, dans les années qui suivent. Cette feuille est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks14": {
    "text": [
      "Takasaki est une importante ville-château du Kisokaidō, dans le Kōzuke. La feuille montre la station en rase campagne, avec des voyageurs sur la route.",
      "Hiroshige dessine Takasaki comme l’une des stations qui suivent le début de la série par Eisen. La feuille de la série de vers 1835–1838 est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks16": {
    "text": [
      "Annaka se trouve dans le Kōzuke, déjà dans la montée vers le col d’Usui. La feuille montre la station et la route qui mène vers les montagnes.",
      "Dans la série du Kisokaidō, Annaka fait partie des stations de Hiroshige. La feuille est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks17": {
    "text": [
      "Matsuida se trouve au pied du col d’Usui, qui sépare le Kōzuke du Shinano. Voyageurs et bêtes de somme avancent à travers la station vallonnée.",
      "La feuille appartient à la part de Hiroshige dans la série du Kisokaidō et est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks19": {
    "text": [
      "Karuizawa se trouve en hauteur au-dessus du col d’Usui, du côté du Shinano. La feuille montre la hauteur aride et ouverte, avec des voyageurs dans le vent et parmi les rochers.",
      "La station compte parmi les hauteurs connues du Kisokaidō. La feuille de Hiroshige de la série de vers 1835–1838 est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks22": {
    "text": [
      "Otai (aussi Odai) se trouve déjà dans le Shinano, après la descente du col d’Usui. La feuille montre des voyageurs dans le paysage ouvert de la route de l’intérieur.",
      "Hiroshige dessine la station pour la série du Kisokaidō. La feuille est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks24": {
    "text": [
      "Shionada se trouve au bord de la rivière Chikuma, dans le Shinano. La feuille montre la station fluviale et le chemin au bord de l’eau.",
      "Hiroshige dessine Shionada pour la série des 69 stations du Kisokaidō. Cette feuille est exposée au Cleveland Museum of Art."
    ],
    "fact": "vers 1835–1838. Cleveland Museum of Art."
  },
  "hgks26": {
    "text": [
      "À Mochizuki, de grands pins se dressent sous une lune claire ; le nom de la station signifie « pleine lune ». Voyageurs et chevaux avancent sur la route au clair de lune.",
      "La feuille compte parmi les vues de lune connues du Kisokaidō. Elle est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks28": {
    "text": [
      "Au-dessus d’un long pont de bois se tient la pleine lune ; des voyageurs traversent la rivière, et sur la rive proche des gens et un cheval passent devant des maisons. Un grand pin partage la scène.",
      "Nagakubo est considérée comme l’une des feuilles principales de la série du Kisokaidō. Cette feuille, vers 1835–1836, est exposée au Cleveland Museum of Art."
    ],
    "fact": "vers 1835–1838. Cleveland Museum of Art."
  },
  "hgks29": {
    "text": [
      "Au col de Wada, la neige est profonde ; le chemin monte raide entre des pentes blanches et des arbres sombres, et les voyageurs gravissent péniblement le col.",
      "La scène de neige au col de Wada compte parmi les feuilles les plus connues du Kisokaidō. Elle est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks30": {
    "text": [
      "Shimosuwa se trouve au bord du lac Suwa, l’une des stations plus basses après les hauts cols. La feuille montre la station au bord du lac, dans le Shinano.",
      "Hiroshige dessine Shimosuwa pour la série du Kisokaidō ; une version de 1835 est exposée au Cleveland Museum of Art."
    ],
    "fact": "vers 1835–1838. Cleveland Museum of Art."
  },
  "hgks32": {
    "text": [
      "Au bord de la rivière de Seba, des saules pleureurs se dressent dans la lumière du soir ; deux hommes poussent à la perche une barque chargée, et le soleil se couche rouge sur la rive plate.",
      "« Seba » est considérée comme l’une des plus belles feuilles de toute la série du Kisokaidō. Cette épreuve est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "vers 1835–1838. Bibliothèque du Congrès, Washington."
  },
  "hgks37": {
    "text": [
      "À Miyanokoshi, la lune se tient au-dessus de la rivière et des arbres de la station, dans les montagnes du Kiso. Des voyageurs avancent sur la rive au clair de lune.",
      "La feuille appartient aux stations de Hiroshige du Kisokaidō et est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks38": {
    "text": [
      "Kiso-Fukushima est l’un des principaux postes de contrôle de la route de l’intérieur, dans l’étroite vallée de la rivière Kiso. La feuille montre le relais sous les arbres, avec des voyageurs sur la route.",
      "Hiroshige dessine Fukushima pour la série du Kisokaidō. La feuille est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks40": {
    "text": [
      "À Suhara, une pluie soudaine surprend les voyageurs ; parapluies et chapeaux s’inclinent, et les arbres se dressent mouillés au-dessus du chemin.",
      "La feuille de pluie de Suhara compte parmi les vues de temps connues du Kisokaidō. Cette version est exposée au Cleveland Museum of Art."
    ],
    "fact": "vers 1835–1838. Cleveland Museum of Art."
  },
  "hgks43": {
    "text": [
      "Tsumago se trouve dans l’étroite vallée du Kiso, l’un des relais connus de la route de l’intérieur. La feuille montre la station dans le paysage de montagne, avec des voyageurs en chemin.",
      "Hiroshige dessine Tsumago pour la série des 69 stations. La feuille est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks47": {
    "text": [
      "Sur la station d’Ōi tombe une neige épaisse ; les voyageurs avancent péniblement dans le paysage blanc, et les maisons et les arbres disparaissent dans la tourmente.",
      "La feuille de neige d’Ōi compte parmi les œuvres principales de la série du Kisokaidō. Elle est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgks68": {
    "text": [
      "Moriyama est déjà proche du lac Biwa, vers la fin du Kisokaidō et le passage vers Ōtsu et Kyōto. La feuille montre la station dans le paysage ouvert et plus bas.",
      "Avec des stations comme Moriyama, Hiroshige ramène la route de l’intérieur vers la région du lac Biwa. La feuille est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "vers 1835–1838. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgrk_hida": {
    "text": [
      "Au-dessus d’une gorge dans le Hida pend un bac à panier ; le panier glisse le long de la corde, et tout en bas coule la rivière entre des pentes raides et boisées.",
      "La feuille appartient à la série « Lieux célèbres des plus de soixante provinces » (Rokujūyoshū meisho zue), parue en 1853–1856 chez Koshimuraya Heisuke. Cette épreuve est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1853–1856. Bibliothèque du Congrès, Washington."
  },
  "hgrk_naruto": {
    "text": [
      "Au large de la côte de l’Awa tournent les tourbillons du détroit de Naruto ; l’eau tourbillonne en cercles puissants entre les îles.",
      "Les tourbillons de Naruto sont l’un des motifs les plus connus de la série des provinces. Cette feuille, vers 1855, est conservée par la Bibliothèque nationale de Nouvelle-Zélande à Wellington."
    ],
    "fact": "1853–1856. Bibliothèque nationale de Nouvelle-Zélande, Wellington."
  },
  "hgrk_arashi": {
    "text": [
      "À Arashiyama, dans la province de Yamashiro, le pont Togetsu franchit la rivière ; les cerisiers en fleurs et les collines boisées se dressent au-dessus de l’eau.",
      "La feuille de la série des provinces montre l’un des lieux les plus célèbres près de Kyōto. Elle est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1853–1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgrk_saruhashi": {
    "text": [
      "Le pont du Singe du Kai s’élance très haut au-dessus d’une gorge ; la charpente pend hardiment entre les rochers, et tout en bas coule la rivière.",
      "Saruhashi est un lieu célèbre classique de la province de Kai. La feuille de la série de 1853–1856 est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1853–1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgrk_sumida": {
    "text": [
      "Sur la rivière Sumida, dans la province de Musashi, la neige couvre la rive, les bateaux et la ville lointaine ; le matin est calme et clair.",
      "La feuille amène la série des provinces jusqu’au fleuve d’Edo. Elle est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1853–1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgrk_sarashina": {
    "text": [
      "À Sarashina, dans la province de Shinano, la lune se tient au-dessus des rizières en terrasses et du mont Kyōdai ; les champs montent en gradins le long de la pente.",
      "La « lune des rizières » de Sarashina est un motif classique. La feuille de la série des provinces est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1853–1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgrk_matsushima": {
    "text": [
      "Au large de la côte du Mutsu, les îles de Matsushima reposent dans l’eau calme, l’une des belles vues classiques du Japon. Des pins se dressent sur les rochers, l’horizon est vaste.",
      "La feuille de la série des provinces montre le célèbre archipel du nord. Elle est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1853–1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgrk_ishiyama": {
    "text": [
      "Le temple Ishiyama se dresse au-dessus du lac Biwa, dans la province d’Ōmi ; lune, lac et temple appartiennent aux huit vues classiques d’Ōmi, ici dans la série plus tardive des provinces.",
      "Hiroshige revient au lieu qu’il avait déjà dessiné dans les années 1830 dans les huit vues d’Ōmi. La feuille est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1853–1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgrk_nikko": {
    "text": [
      "À Nikkō, dans la province de Shimotsuke, la cascade Urami tombe derrière une avancée rocheuse ; on voit l’eau de derrière, entre roche et forêt.",
      "La feuille de la série des provinces montre l’une des chutes connues de la montagne sacrée de Nikkō. Elle est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1853–1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgrk_noto": {
    "text": [
      "Sur la côte du Noto, des rochers et le ressac sous un vaste ciel ; Taki no ura est un lieu célèbre de la péninsule.",
      "La feuille de la série de 1853–1856 est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1853–1856. Bibliothèque du Congrès, Washington."
  },
  "hgrk_izumo": {
    "text": [
      "Au Grand Sanctuaire d’Izumo, dans la province d’Izumo, les gens se rassemblent pour la fête Hotohoto. Lanternes, arbres et pavillons du sanctuaire remplissent la feuille.",
      "La feuille de fête de la série des provinces, de 1853, est exposée au Cleveland Museum of Art."
    ],
    "fact": "1853–1856. Cleveland Museum of Art."
  },
  "hgrk_sado": {
    "text": [
      "Sur l’île de Sado, des galeries s’enfoncent dans la montagne ; des ouvriers et un chariot se tiennent dans la vallée, un ruisseau coule devant les entrées sombres, et au-dessus s’élèvent des pentes boisées.",
      "Les mines d’or sont la feuille de la province de Sado dans la série des plus de soixante provinces. Cette épreuve de 1853 est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1853–1856. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_nihonbashi": {
    "text": [
      "Après la neige, Nihonbashi est claire et vaste ; le ciel dégagé, le pont et le fleuve de la capitale de l’Est dans la lumière d’hiver.",
      "En 1856 commence, chez Uoya Eikichi (Sakanaya Eikichi), la série « Cent vues célèbres d’Edo ». La feuille d’ouverture à Nihonbashi est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgmeh_kasumi": {
    "text": [
      "La rue de Kasumigaseki mène vers la profondeur de la ville ; toits, murs et passants s’échelonnent le long de la pente, la vue est vaste et claire.",
      "La feuille de 1856 appartient aux premières feuilles des Cent vues. Elle est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgmeh_suruga": {
    "text": [
      "Par la rue de Suruga-chō, le Fuji apparaît entre les toits des magasins de tissus ; la montagne se tient exactement dans l’axe de la rue.",
      "La feuille de 1856 compte parmi les vues de ville connues de la série. Cette épreuve est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1856. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_shinobazu": {
    "text": [
      "Le pavillon Kiyomizu d’Ueno se dresse au-dessus de l’étang Shinobazu ; les cerisiers en fleurs et l’eau remplissent la vue, et le pavillon s’avance sur pilotis au-dessus de la pente.",
      "La feuille des Cent vues est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1856. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgmeh_suidobashi": {
    "text": [
      "Au-dessus du pont Suidō et du quartier de Surugadai, un cerf-volant tient dans le vent ; le Fuji apparaît au loin au-dessus des toits.",
      "La feuille de 1857 est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1857. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_yatsumi": {
    "text": [
      "Depuis le pont Yatsumi, le regard passe sur l’eau et les pilotis ; une branche avance dans l’image, et la ville repose calme au-delà.",
      "La feuille de 1856 des Cent vues est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1856. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_plum": {
    "text": [
      "Dans le jardin des pruniers de Kameido, un tronc en fleurs très courbé se tient tout près au premier plan ; derrière s’étendent le jardin, les visiteurs et le vaste ciel rougeâtre.",
      "La feuille paraît au onzième mois de 1857 dans la série des Cent vues. Cette épreuve est conservée par la Chester Beatty Library à Dublin."
    ],
    "fact": "1857. Chester Beatty Library, Dublin."
  },
  "hgmeh_iris": {
    "text": [
      "À Horikiri, des iris se dressent haut au premier plan ; les feuilles et les fleurs remplissent l’image, et derrière s’étendent le jardin et de petites figures.",
      "La feuille de 1857 compte parmi les vues de jardin les plus connues de la série. Cette épreuve est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1857. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_asukayama": {
    "text": [
      "Depuis la colline d’Asukayama, le regard va vers le nord par-dessus les cerisiers, la plaine et le Fuji lointain. La colline est un lieu aimé de la ville pour la fête des fleurs.",
      "La feuille des Cent vues est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1856–1857. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgmeh_ukeji": {
    "text": [
      "Dans l’enceinte du sanctuaire Akiba à Ukeji, des arbres d’automne se dressent au-dessus d’un étang ; le feuillage et le reflet remplissent la surface de couleurs calmes et fortes.",
      "La feuille de 1857 des Cent vues est exposée au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1857. Rijksmuseum, Amsterdam."
  },
  "hgmeh_sazaido": {
    "text": [
      "Le pavillon en spirale (Sazaidō) du temple des Cinq cents Arhats se dresse au-dessus de l’eau ; l’édifice inhabituel et rond se voit depuis la ville.",
      "La feuille des Cent vues est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1857. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgmeh_mama": {
    "text": [
      "À Mama, des érables rouges se dressent au-dessus de la chapelle de Tekona et du pont relié ; le feuillage d’automne pend tout près dans l’image.",
      "La feuille des Cent vues est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1857. Bibliothèque nationale de la Diète, Tokyo."
  },
  "ohashi": {
    "text": [
      "Une pluie d’été surprend les gens sur le Shin-Ōhashi ; les ombrelles s’inclinent, les planches luisent, le fleuve s’étend sombre en dessous, et sur l’autre rive se trouve Atake.",
      "La feuille de 1857 des Cent vues célèbres d’Edo compte parmi les images de temps les plus connues de Hiroshige. Cette épreuve est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1857. Bibliothèque du Congrès, Washington (cette épreuve)."
  },
  "hgmeh_fireworks": {
    "text": [
      "Au-dessus du pont Ryōgoku et de la Sumida, des feux d’artifice montent dans le ciel nocturne ; les bateaux se pressent sur l’eau, et le pont est plein de monde.",
      "La feuille paraît en 1858, la dernière année de la vie de Hiroshige, dans la série des Cent vues. Elle est exposée au Cleveland Museum of Art."
    ],
    "fact": "1858. Cleveland Museum of Art."
  },
  "hgmeh_moonpine": {
    "text": [
      "À Ueno, une branche de pin forme un anneau à travers lequel le regard tombe sur l’étang Shinobazu ; la branche se tient proche et sombre devant l’eau.",
      "Le « pin de la lune » de 1857 compte parmi les célèbres motifs de premier plan de la série. Cette épreuve est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1857. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_senju": {
    "text": [
      "Le grand pont de Senju franchit le fleuve au bord nord de la ville ; des voyageurs et la vaste étendue d’eau remplissent la feuille.",
      "La feuille de 1856 des Cent vues est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1856. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_mannen": {
    "text": [
      "Sous le pont Mannen à Fukagawa s’étend l’eau ; souvent, la carapace d’une tortue avance au premier plan, et au-dessus le pont et les entrepôts.",
      "La feuille de 1857 est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1857. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_ayase": {
    "text": [
      "Sur la rivière Ayase à Kanegafuchi, des plantes se tiennent tout près au premier plan ; derrière les feuilles s’étend le fleuve calme de la ville de l’Est.",
      "La feuille de 1857 des Cent vues est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1857. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_jumbo": {
    "text": [
      "Un aigle est perché sur un tronc enneigé et regarde la vaste plaine enneigée de Jūmantsubo, à Fukagawa ; le ciel est froid et vaste.",
      "La feuille de 1857 compte parmi les vues d’hiver connues de la série. Elle est exposée au Rijksmuseum d’Amsterdam."
    ],
    "fact": "1857. Rijksmuseum, Amsterdam."
  },
  "hgmeh_azuma": {
    "text": [
      "Depuis le pont Azuma, le regard va vers le pavillon lointain du temple Kinryūzan à Asakusa ; le fleuve et les bateaux occupent le plan moyen.",
      "La feuille de 1857 des Cent vues est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1857. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_bikuni": {
    "text": [
      "Le pont Bikuni est sous une neige épaisse ; toits, garde-fous et chemin disparaissent dans le blanc, et la ville est silencieuse.",
      "La feuille paraît en 1858 dans la série des Cent vues. Cette épreuve est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1858. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_saruwaka": {
    "text": [
      "Dans le quartier des théâtres de Saruwaka-chō, les ombres des passants se découpent nettement au clair de lune ; la rue des théâtres est la nuit à la fois animée et calme.",
      "La feuille des Cent vues est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1856–1857. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgmeh_meguro": {
    "text": [
      "À Meguro, le pont-tambour raide s’arque au-dessus du chemin ; au-dessus s’étend la colline du Couchant, et des voyageurs montent le pont en arc.",
      "La feuille de 1857 des Cent vues est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1857. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_takata": {
    "text": [
      "Au manège de Takata, des chevaux courent sous les arbres ; le terrain d’exercice ouvert se trouve au bord de la ville.",
      "La feuille de 1857 des Cent vues est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1857. Bibliothèque du Congrès, Washington."
  },
  "hgmeh_foxfires": {
    "text": [
      "La nuit de la Saint-Sylvestre, les renards se rassemblent avec leurs lumières de feu sous un arbre à Ōji ; les lumières se tiennent comme des lanternes dans le paysage sombre devant les champs.",
      "La feuille de 1857 compte parmi les feuilles tardives et connues des Cent vues. Elle est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1857. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgmeh_shiba": {
    "text": [
      "À Shiba se trouvent le sanctuaire Shinmei et l’enceinte du temple Zōjō-ji ; toits, arbres et chemin mènent vers le terrain sacré au bord de la ville.",
      "La feuille des Cent vues est conservée par la Bibliothèque nationale de la Diète à Tokyo."
    ],
    "fact": "1857–1858. Bibliothèque nationale de la Diète, Tokyo."
  },
  "hgfuji_enoshima": {
    "text": [
      "La porte à l’entrée de l’île d’Enoshima se dresse devant la mer ; derrière la côte du Sagami s’élève le Fuji.",
      "En 1858 paraît, chez Tsutaya Kichizō (Kōeidō), une série de trente-six vues du Fuji. Cette feuille est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1858. Bibliothèque du Congrès, Washington."
  },
  "hgfuji_miho": {
    "text": [
      "Sur la plage aux pins de Miho, dans la province de Suruga, les arbres se dressent devant la mer ; le Fuji apparaît au-dessus de la baie, une vue classique de la montagne.",
      "La feuille appartient à la série du Fuji de 1858. Elle est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1858. Bibliothèque du Congrès, Washington."
  },
  "hgfuji_satta": {
    "text": [
      "Au large de la côte de Satta, dans le Suruga, les vagues s’amoncellent ; à travers l’eau et l’écume apparaît le Fuji, proche et ferme au-dessus de la mer.",
      "La feuille de la série du Fuji de 1858 compte parmi les vues de mer tardives les plus connues de Hiroshige. Cette épreuve est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1858. Bibliothèque du Congrès, Washington."
  },
  "hgfuji_hakone": {
    "text": [
      "Au lac de Hakone, le Fuji se tient au-dessus de l’eau et des montagnes ; le paysage du col, que Hiroshige avait déjà dessiné dans la série du Tōkaidō, réapparaît ici dans la série tardive du Fuji.",
      "La feuille de 1858 est conservée par la Bibliothèque du Congrès à Washington."
    ],
    "fact": "1858. Bibliothèque du Congrès, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
