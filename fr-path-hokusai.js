// v7.8 French path step texts: hokusai life path.
// Faithful translation of the existing DE/EN. No new facts.
// Letter quotes are translations of the German self-translations
// (except letter 569 / blvdclichy: from Vincent’s own English).
// Citations keep letter numbers, recipients, places and dates.
(function () {
  var P = window.FR = window.FR || {};
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "shopfront": {
    "text": [
      "Dans la neige se tient une petite boutique, une branche de pin chargée de neige pend au-dessus du toit. Des personnes et deux chats se tiennent au seuil.",
      "La feuille naît en 1780, dans les années précoces, lorsque Hokusai est encore un jeune dessinateur à Edo."
    ],
    "fact": "Le tableau est accroché au Metropolitan Museum of Art à New York. Il porte le titre « In Front of a Shop »."
  },
  "spinsilk": {
    "text": [
      "Une femme est assise au rouet, la soie court entre ses mains. Un enfant en tissu rouge se penche sur un récipient ; trois hirondelles volent au-dessus d’eux.",
      "Le Metropolitan Museum date le tableau de 1790 – l’époque où Hokusai travaille sous le nom de Shunrō dans l’école Katsukawa."
    ],
    "fact": "« Femme filant la soie », Metropolitan Museum of Art, New York, 1790."
  },
  "sumowrest": {
    "text": [
      "Deux lutteurs de sumo s’inclinent l’un vers l’autre, fermement, le regard baissé. Des noms et des titres se tiennent en haut de la feuille.",
      "La feuille montre Takaneyama Yoichiemon et Sendagawa Kichigorō et naît vers 1790 à 1793, encore dans les années Shunrō."
    ],
    "fact": "Gravure sur bois en couleurs, Metropolitan Museum of Art, New York, vers 1790–1793."
  },
  "dyers": {
    "text": [
      "Dans une scène longue et étroite, des lés de tissu pendent à sécher. Les teinturiers se meuvent entre eux ; les couleurs sont encore claires et retenues.",
      "Le Cleveland Museum of Art date la feuille de 1795, dans les années Sōri."
    ],
    "fact": "« Teinturiers au travail », Cleveland Museum of Art, 1795."
  },
  "fujisuri": {
    "text": [
      "Le Fuji se tient tranquille au-dessus d’une légère brume, des poèmes à côté. La feuille est petite et délicate – un surimono précoce, longtemps avant les Trente-six vues.",
      "Le Rijksmuseum date la vue de 1797, encore dans les années du nom Sōri."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-1548, 1797."
  },
  "sumidawalk": {
    "text": [
      "Des femmes et des enfants se promenent le long de la rive de la Sumida. Le fleuve est large ; le jour paraît calme.",
      "Le Cleveland Museum of Art date la feuille de 1800 – les années où Hokusai montre Edo dans des livres et des feuilles isolées."
    ],
    "fact": "« Femmes et enfants se promenant le long de la Sumida », Cleveland Museum of Art, 1800."
  },
  "azumatsukuda": {
    "text": [
      "Des bateaux gisent devant Tsukuda, un îlot à l’embouchure de la Sumida. À l’arrière-plan, le Fuji se tient clair et petit.",
      "Le Los Angeles County Museum of Art place la feuille vers 1802, dans une suite de vues célèbres de la Capitale orientale."
    ],
    "fact": "Gravure sur bois en couleurs, LACMA, vers 1802, collection Joan Elizabeth Tanney."
  },
  "ueno": {
    "text": [
      "À Ueno, une porte de temple rouge se tient au bord de l’eau ; derrière, le vaste miroir de l’étang Shinobazu.",
      "Cette feuille aussi appartient aux vues de la Capitale orientale, vers 1802, au LACMA."
    ],
    "fact": "Gravure sur bois en couleurs, Los Angeles County Museum of Art, vers 1802."
  },
  "mimeguri": {
    "text": [
      "Au sanctuaire Mimeguri, une cour calme gît sous les arbres, et le Fuji apparaît derrière le terrain.",
      "Mimeguri se tient sur la Sumida. La feuille naît vers 1802, aujourd’hui au LACMA."
    ],
    "fact": "Gravure sur bois en couleurs, Los Angeles County Museum of Art, vers 1802."
  },
  "umeyashiki": {
    "text": [
      "La pluie tombe en traits obliques sur le jardin de pruniers d’Umeyashiki. Les gens se hâtent sous les arbres et les ombrelles.",
      "Umeyashiki se trouvait à Mukōjima, à l’est de la Sumida, et était connu pour sa floraison de pruniers. La feuille : vers 1802, LACMA."
    ],
    "fact": "Gravure sur bois en couleurs, Los Angeles County Museum of Art, vers 1802."
  },
  "ezoshi": {
    "text": [
      "Dans une boutique d’albums illustrés gisent des piles de livres et d’estampes. Les clients se penchent sur la marchandise ; devant la porte se tiennent des enseignes publicitaires.",
      "Le Rijksmuseum date la feuille de 1802 et l’appelle la boutique d’un marchand d’albums illustrés – précisément le monde dans lequel se vendaient les livres de Hokusai."
    ],
    "fact": "Rijksmuseum, Amsterdam, RP-P-2015-26-1896, 1802."
  },
  "yanagi": {
    "text": [
      "Une averse soudaine frappe le nouveau pont Yanagi. Des personnes sous de grandes ombrelles se penchent dans la pluie ; les couleurs restent claires.",
      "Le Metropolitan Museum date la gravure sur bois en couleurs de 1806."
    ],
    "fact": "« Averse au nouveau pont Yanagi », Metropolitan Museum of Art, New York, 1806."
  },
  "teaceremony": {
    "text": [
      "Un bol, une boîte à thé et un linge gisent tranquillement sur la feuille – seulement les ustensiles de la cérémonie du thé, et des vers. Rien ne distrait.",
      "Le Rijksmuseum place le surimono entre 1794 et 1804, dans les années des commandes privées."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-975, vers 1794–1804."
  },
  "cherryview": {
    "text": [
      "Une compagnie cherche une place sous les cerisiers en fleurs. En dessous se tiennent des vers ; au-dessus, le paysage au bord de l’eau.",
      "Le Rijksmuseum date le surimono des années vers 1810 à 1820."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-1586, vers 1810–1820."
  },
  "peonies": {
    "text": [
      "Un panier de pivoines remplit le côté droit ; à gauche se tiennent des caractères. Les fleurs sont posées lourdes et nettes.",
      "Le Cleveland Museum of Art date le surimono de 1810 ou 1814. Il célèbre un événement de la vie de l’acteur Ichikawa Danjūrō VII, dont l’emblème était la pivoine."
    ],
    "fact": "« Basket of Peonies », Cleveland Museum of Art, 1810 ou 1814."
  },
  "manzai": {
    "text": [
      "Deux acteurs de manzai dansent l’un au-dessus de l’autre, l’un avec l’éventail, l’autre lève le pied. Le fond reste vide et clair.",
      "Le manzai est un jeu traditionnel du Nouvel An à deux. Le Minneapolis Institute of Art date le tableau de 1816."
    ],
    "fact": "« Manzai Performers », Minneapolis Institute of Art, 1816."
  },
  "lostlove": {
    "text": [
      "Un poisson rouge gît dans une coupe blanche, des herbes et un éventail se tiennent à côté. La feuille appartient à un « jeu de coquillages » avec des vers de l’époque Genroku.",
      "La série s’appelle Genroku kasen kai-awase. Cette feuille, le coquillage de l’amour perdu (Katashigai), est datée 1821 et se trouve à l’Art Gallery of South Australia."
    ],
    "fact": "Surimono, Art Gallery of South Australia, Adelaide, 1821."
  },
  "grasses": {
    "text": [
      "Un bateau ouvert, un poisson rouge-orangé, de délicates herbes. Celle-ci aussi est un « coquillage » de la même suite de 1821 : Chigusagai, le coquillage des myriades d’herbes.",
      "Comme la feuille de l’amour perdu, elle appartient à l’Art Gallery of South Australia."
    ],
    "fact": "Surimono de « Genroku kasen kai-awase », Art Gallery of South Australia, 1821."
  },
  "cherryshell": {
    "text": [
      "Des voyageurs et des porteurs se meuvent à travers un vaste paysage, des vers en haut. La feuille s’appelle Sakura-gai, le coquillage des cerisiers en fleurs.",
      "Elle appartient à la même série des coquillages et naît probablement en 1821. Cet exemplaire est accroché au Metropolitan Museum."
    ],
    "fact": "Surimono, Metropolitan Museum of Art, New York, probablement 1821."
  },
  "hatsuuma": {
    "text": [
      "Une femme en habit de fête est assise auprès d’un cheval paré. Hatsuuma est la première fête du cheval au deuxième mois, souvent liée à une visite au temple.",
      "1822 est une année du Cheval. La feuille appartient à la suite « Umazukushi », une série sur les chevaux, et se trouve au Rijksmuseum."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1958-284, 1822."
  },
  "umasenbetsu": {
    "text": [
      "Des boîtes de laque, une lettre pliée, un éventail rouge : un cadeau d’adieu, disposé avec finesse et dans le calme sur la feuille.",
      "Celui-ci aussi est un surimono de la série des chevaux « Umazukushi » de 1822, au Rijksmuseum."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1954-562, 1822."
  },
  "watakuri": {
    "text": [
      "Une machine à desserrer le coton se tient à côté d’un harnachement. Le travail quotidien et le cheval se rencontrent sur une feuille de fête.",
      "« Watakuri uma » appartient à la même suite « Umazukushi » de 1822 au Rijksmuseum."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1958-296, 1822."
  },
  "fujinibon": {
    "text": [
      "Le Nihonbashi est le pont à partir duquel se comptent les chemins d’Edo. Entre les entrepôts s’ouvre le canal ; tout au loin se tient le Fuji.",
      "Hokusai place la ville animée au premier plan et le mont comme un point calme à l’horizon."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "fujimitsui": {
    "text": [
      "Au-dessus des toits de la boutique Mitsui à Suruga-chō, un long cerf-volant monte dans le ciel. Le Fuji se tient exactement dans l’axe du fil.",
      "La feuille relie le quartier marchand d’Edo au mont lointain – le quotidien et le Fuji sur une seule ligne."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "honganji": {
    "text": [
      "Du toit du Hongan-ji à Asakusa, le regard traverse Edo jusqu’au Fuji. Des ouvriers posent des tuiles ; le temple remplit le premier plan.",
      "Le grand temple d’Asakusa était l’un des plus hauts points de vue de la ville."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "mannen": {
    "text": [
      "Sous l’arche du pont Mannen à Fukagawa glissent des bateaux, et le Fuji apparaît dans le cercle de l’arche.",
      "Hokusai cadre le mont à travers le pont lui-même – un tableau dans le tableau."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "tatekawa": {
    "text": [
      "Dans le chantier de bois de Tatekawa à Honjō s’empilent poutres et planches. Entre les piles, le Fuji devient visible.",
      "Honjō, le quartier même de Hokusai à l’est d’Edo, était un lieu de marchands de bois et de canaux."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "koishikawa": {
    "text": [
      "Après la neige, Koishikawa gît dans le calme. Un pavillon, des arbres dépouillés, le Fuji blanc au-dessus de la ville.",
      "Le titre est « Matin de neige à Koishikawa » – yuki no ashita, le matin après la neige."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "onden": {
    "text": [
      "Une grande roue à aubes tourne à Onden, des gens travaillent au bord de l’eau, le Fuji se tient derrière les champs.",
      "Onden se trouvait à l’ouest d’Edo, dans un quartier de moulins et de champs."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "ryogoku": {
    "text": [
      "Depuis la rive d’Onmaya, un bateau plein traverse la Sumida, le pont Ryōgoku gît en travers dans la lumière du soir, le Fuji est une petite ombre à l’horizon.",
      "La feuille s’appelle en japonais « Onmayagashi yori Ryōgokubashi sekiyō o miru » – contempler le coucher de soleil sur le pont Ryōgoku depuis la rive d’Onmaya."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "gotenyama": {
    "text": [
      "Sur le Gotenyama à Shinagawa, les cerisiers sont en fleurs ; en dessous se trouve la baie, au loin le Fuji.",
      "Shinagawa était la première station du Tōkaidō, juste devant Edo, un lieu pour les sorties et les adieux."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "hodogaya": {
    "text": [
      "Sur le Tōkaidō près de Hodogaya, voyageurs et chevaux passent sous de hauts pins. Le Fuji apparaît entre les troncs.",
      "Hodogaya était l’une des stations du Tōkaidō, la grande route d’Edo à Kyoto."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "ejiri": {
    "text": [
      "Un vent soudain arrache aux voyageurs à Ejiri les étoffes et les papiers. Les feuilles volent ; le Fuji reste debout.",
      "Ejiri se trouvait dans la province de Suruga, près de la côte, sur le Tōkaidō."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "yoshida": {
    "text": [
      "Dans une auberge à la station Yoshida, des voyageurs sont assis ; à travers la paroi ouverte, on voit le Fuji comme une enseigne au-dessus de la route.",
      "Yoshida se trouvait sur le Tōkaidō au pied du mont, une typique station d’étape."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "kanaya": {
    "text": [
      "À Kanaya, des voyageurs traversent la rivière Ōi. L’eau est haute, les charges reposent sur les épaules, le Fuji accompagne la rive.",
      "Le gué de l’Ōi sur le Tōkaidō était tristement célèbre lorsque l’eau montait – l’un des passages difficiles de la route."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "fujimi": {
    "text": [
      "Un tonnelier travaille dans un énorme tonneau. À travers les cerceaux apparaît le Fuji, cadré en rond comme dans une fenêtre.",
      "Le lieu s’appelle Fujimigahara, « plaine avec vue sur le Fuji », dans la province d’Owari."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "totomi": {
    "text": [
      "Dans les montagnes de la province de Tōtomi, des hommes scient une énorme planche. Le Fuji se tient derrière les étais de l’échafaudage.",
      "La feuille montre le travail lourd des scieries et le mont comme une contre-forme calme."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "mishima": {
    "text": [
      "Au col de Mishima, dans la province de Kai, un arbre puissant s’élève au bord du chemin, des voyageurs se reposent à l’ombre, le Fuji se tient derrière.",
      "Kai est la province de l’intérieur à l’ouest d’Edo, le pays autour du mont."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "inume": {
    "text": [
      "Depuis le col d’Inume, le Fuji gît libre au-dessus d’une vallée ouverte ; les chevaux sur le chemin paraissent petits.",
      "Le col se trouve dans la province de Kai et ouvre l’une des vastes vues de la suite."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "misaka": {
    "text": [
      "Dans le lac de Misaka, le Fuji se reflète – mais le reflet montre un autre mont couvert de neige, pas exactement la même image que celle au-dessus de l’eau.",
      "Hokusai donne au reflet une forme propre. La feuille appartient aux plus inhabituelles de la suite."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "hakone": {
    "text": [
      "Le lac de Hakone gît calme entre des collines boisées, le Fuji s’élève sur l’autre rive.",
      "Hakone, dans la province de Sagami, était l’un des passages contrôlés du Tōkaidō."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "enoshima": {
    "text": [
      "L’île d’Enoshima gît au large de la côte de la province de Sagami, avec une longue barre de sable et le Fuji au-dessus de la mer.",
      "Enoshima était un lieu de pèlerinage et de sorties, non loin du Tōkaidō."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "isawa": {
    "text": [
      "À l’aube d’Isawa, dans la province de Kai, les toits gisent encore dans l’ombre, le Fuji se colore à la première lumière.",
      "Isawa se trouve dans le bassin de Kōfu, à l’intérieur des terres à l’ouest du mont."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "minobu": {
    "text": [
      "Depuis la rivière Minobu, on voit le Fuji de l’autre côté : le dos du mont, non la silhouette familière depuis Edo.",
      "Le titre le dit lui-même : « Minobugawa ura Fuji » – le Fuji du côté opposé, depuis la rivière Minobu."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "kazusa": {
    "text": [
      "Un grand voilier gît en mer ouverte au large de la province de Kazusa. Le Fuji est un petit cône au-dessus de l’horizon.",
      "Kazusa se trouve à l’est de la baie d’Edo, de l’autre côté de l’eau."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "noboto": {
    "text": [
      "À mer basse, des torii et des personnes se tiennent dans la baie peu profonde de Noboto. Le Fuji gît au-dessus d’un horizon calme.",
      "La feuille appartient aux plus claires de la suite : beaucoup de sable vide, peu de bruit."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "umezawa": {
    "text": [
      "Des grues volent et se tiennent dans le paysage de marais d’Umezawa ; le Fuji est sombre et proche.",
      "Umezawa se trouve dans la province de Sagami. La feuille appartient aux plus silencieuses de la suite."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "tagobay": {
    "text": [
      "Dans la baie de Tago près d’Ejiri, un long bateau gît au bord, les vagues battent le sable, le Fuji se tient libre au-dessus de la baie.",
      "La baie se trouve sur le Tōkaidō, dans la province de Suruga, et est aussi connue par la poésie comme un lieu avec vue sur le Fuji."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "kajikazawa": {
    "text": [
      "Un pêcheur se tient sur un rocher à Kajikazawa, la ligne tendue au-dessus des vagues, le Fuji s’élève derrière lui.",
      "Kajikazawa se trouve dans la province de Kai, sur une rivière impétueuse au pied du mont."
    ],
    "fact": "Gravure sur bois en couleurs des « Trente-six vues du mont Fuji », éditeur Nishimuraya Yohachi, vers 1830–1832. Metropolitan Museum of Art, New York."
  },
  "wave": {
    "text": [
      "Une grande vague s’élève au large de Kanagawa, les bateaux de pêche gisent de biais dans le creux. Tout petit, dans le vallon de la vague, se tient le Fuji.",
      "La feuille appartient à la série « Trente-six vues du mont Fuji » et naît vers 1830 à 1832, lorsque Hokusai a déjà environ soixante-dix ans."
    ],
    "fact": "« La Grande Vague de Kanagawa » (Kanagawa-oki nami ura), de la série du Fuji, vers 1830–1832."
  },
  "redfuji": {
    "text": [
      "Le Fuji luit rouge dans la lumière du matin, de petits nuages passent sur le versant. Le titre est « Vent léger, matin clair » – Gaifū kaisei.",
      "On peut voir le Fuji rouge certains jours clairs de la fin de l’été et de l’automne. La feuille appartient à la même suite, vers 1830–1832."
    ],
    "fact": "« Fuji rouge (Vent léger, matin clair) », des 36 vues, vers 1830–1832."
  },
  "thunder": {
    "text": [
      "En bas, des éclairs rouges zèbrent le versant ; en haut, le sommet reste calme dans la lumière. La feuille s’appelle « Sanka hakuu » – orage sous le sommet.",
      "Avec la Grande Vague et le Fuji rouge, elle appartient aux feuilles les plus connues de la suite."
    ],
    "fact": "« Orage sous le sommet », des 36 vues, vers 1830–1832."
  },
  "fujisundai": {
    "text": [
      "Depuis une éminence à Edo, le regard passe par-dessus toits et arbres jusqu’au Fuji. Surugadai se trouve dans le quartier de Kanda.",
      "La feuille appartient à la suite « Trente-six vues du mont Fuji », parue vers 1830 à 1832 chez Nishimuraya Yohachi."
    ],
    "fact": "« Le Fuji vu de Surugadai à Edo », Metropolitan Museum of Art, New York."
  },
  "sazai": {
    "text": [
      "Sur une haute salle de temple se tiennent de petites figures et regardent au loin, là où se tient le Fuji.",
      "La salle Sazai appartient au temple des cinq cents arhats à Edo. Cette feuille aussi vient de la série du Fuji vers 1830 à 1832."
    ],
    "fact": "« La Salle Sazai au temple des cinq cents arhats », Metropolitan Museum of Art, New York."
  },
  "aoyamapine": {
    "text": [
      "Un pin puissant, taillé en rond, remplit le premier plan ; le Fuji apparaît petit derrière.",
      "Le lieu est Aoyama à Edo. La feuille appartient à la même série du Fuji, parue chez Nishimuraya Yohachi."
    ],
    "fact": "« Le Pin-coussin à Aoyama », Metropolitan Museum of Art, New York."
  },
  "meguro": {
    "text": [
      "Sous les pins et entre les huttes, la vue s’ouvre sur le Fuji. Meguro se trouve au sud d’Edo.",
      "La feuille « Le Bas Meguro » appartient aux autres feuilles de la série du Fuji vers 1830 à 1832."
    ],
    "fact": "« Le Bas Meguro », Metropolitan Museum of Art, New York."
  },
  "sekiya": {
    "text": [
      "Des cavaliers galopent le long d’une digue au bord de la Sumida ; le Fuji se tient calme à l’horizon.",
      "Sekiya était un village au bord du fleuve, au nord de la ville. La feuille vient de la série du Fuji chez Nishimuraya Yohachi."
    ],
    "fact": "« Le Village de Sekiya sur la Sumida », Metropolitan Museum of Art, New York."
  },
  "senju": {
    "text": [
      "Au bord du fleuve à Senju se tiennent des personnes et des bateaux ; le Fuji se voit au loin.",
      "Senju se trouvait dans la province de Musashi, sur une route importante vers le nord. Celle-ci aussi est une feuille de la série du Fuji."
    ],
    "fact": "« Senju dans la province de Musashi », Metropolitan Museum of Art, New York."
  },
  "fujitsukuda": {
    "text": [
      "Au crépuscule, des bateaux gisent au large de l’île de Tsukuda ; le Fuji se dessine contre le ciel.",
      "Tsukudajima se trouve à l’embouchure de la Sumida. La feuille appartient à la série du Fuji vers 1830 à 1832."
    ],
    "fact": "« Tsukudajima dans la province de Musashi », Metropolitan Museum of Art, New York."
  },
  "ushibori": {
    "text": [
      "Un grand bateau au toit ouvert gît dans les roseaux ; le Fuji se tient au-dessus de la plaine de Hitachi.",
      "Ushibori se trouve dans la province de Hitachi, à l’est d’Edo. La feuille vient de la série du Fuji."
    ],
    "fact": "« Ushibori dans la province de Hitachi », Metropolitan Museum of Art, New York."
  },
  "tamagawa": {
    "text": [
      "Au bord de la rivière Tama, des voyageurs se tiennent sous les arbres ; le Fuji apparaît au-dessus de l’eau.",
      "La Tama forma longtemps la limite de la province de Musashi. La feuille appartient à la série du Fuji vers 1830 à 1832."
    ],
    "fact": "« La Rivière Tama dans la province de Musashi », Metropolitan Museum of Art, New York."
  },
  "shichiri": {
    "text": [
      "Un vaste rivage s’ouvre sous un grand ciel ; le Fuji se tient au-dessus de la baie de Sagami.",
      "Shichirigahama se trouve sur la côte de la province de Sagami. La feuille vient de la série du Fuji."
    ],
    "fact": "« Shichirigahama dans la province de Sagami », Metropolitan Museum of Art, New York."
  },
  "katakura": {
    "text": [
      "Parmi les théiers, des gens travaillent dans la plaine de Suruga ; le Fuji s’élève tout près au-dessus d’eux.",
      "Katakura était connu pour ses champs de thé. La feuille appartient aux autres vues de la série du Fuji."
    ],
    "fact": "« Les Plantations de thé de Katakura, dans la province de Suruga », Metropolitan Museum of Art, New York."
  },
  "climbing": {
    "text": [
      "Crampons et bâtons à la main, des groupes gravissent le versant du Fuji ; au-dessus d’eux, le sommet gît dans la neige.",
      "La feuille montre ceux qui gravissent le mont lui-même et appartient à la série du Fuji vers 1830 à 1832."
    ],
    "fact": "« Groupes d’alpinistes », Metropolitan Museum of Art, New York."
  },
  "suwa": {
    "text": [
      "Au-dessus du lac Suwa, dans la province de Shinano, le Fuji se tient au loin ; au premier plan gisent un sanctuaire et des arbres.",
      "Le lac se trouve à l’intérieur des terres, dans l’actuelle préfecture de Nagano. La feuille vient de la série du Fuji."
    ],
    "fact": "« Le Lac Suwa dans la province de Shinano », Metropolitan Museum of Art, New York."
  },
  "kirifuri": {
    "text": [
      "Une chute large et déchirée se précipite le long d’une paroi rocheuse ; de petits pèlerins se tiennent au pied et dans les gorges latérales.",
      "La feuille appartient à la suite « Tour des cascades des provinces » (Shokoku taki meguri), parue vers 1832 à 1833 chez Nishimuraya Yohachi. La cascade de Kirifuri se trouve au mont Kurokami, dans la province de Shimotsuke."
    ],
    "fact": "« La Cascade de Kirifuri au mont Kurokami, province de Shimotsuke », Metropolitan Museum of Art, New York."
  },
  "yoshitsune": {
    "text": [
      "Une chute abondante tombe dans un bassin clair ; des cavaliers et des hommes tiennent des chevaux au bord – le lieu où la légende fait laver son cheval à Yoshitsune.",
      "Yoshino se trouve dans la province de Yamato. La feuille vient de la même série des cascades vers 1832 à 1833."
    ],
    "fact": "« La Cascade où Yoshitsune lava son cheval, à Yoshino », Metropolitan Museum of Art, New York."
  },
  "amida": {
    "text": [
      "Une chute étroite, presque verticale, taille une niche ronde dans le roc – la forme rappelle le bouddha Amida.",
      "La cascade se trouve dans le parcours intérieur du Kisokaidō. La feuille appartient à la série des cascades, parue chez Nishimuraya Yohachi."
    ],
    "fact": "« La Cascade d’Amida aux confins du Kisokaidō », Metropolitan Museum of Art, New York."
  },
  "yoro": {
    "text": [
      "Parmi les arbres, un rideau blanc tombe dans la vallée ; des gens se tiennent au bord et regardent l’eau.",
      "La cascade de Yōrō, dans la province de Mino, est l’un des huit projets de la suite « Tour des cascades des provinces »."
    ],
    "fact": "« La Cascade de Yōrō dans la province de Mino », Metropolitan Museum of Art, New York."
  },
  "ono": {
    "text": [
      "Une chute se précipite à côté d’un village et d’un pont ; le linge et les voyageurs bordent le chemin du Kisokaidō.",
      "Ono se trouve sur l’ancienne route de l’intérieur. La feuille naît vers 1832 à 1833, dans la série des cascades."
    ],
    "fact": "« La Cascade d’Ono sur le Kisokaidō », Metropolitan Museum of Art, New York."
  },
  "roben": {
    "text": [
      "Sous une chute pesante, des pèlerins sont assis et debout dans une grotte de roche ; la poussière d’eau remplit le sol.",
      "La cascade de Rōben se trouve au mont sacré Ōyama, dans la province de Sagami. La feuille appartient à la série des cascades vers 1832 à 1833."
    ],
    "fact": "« La Cascade de Rōben à l’Ōyama, province de Sagami », Metropolitan Museum of Art, New York."
  },
  "aoigaoka": {
    "text": [
      "Dans Edo même, une chute plus petite tombe par-dessus un mur dans un bassin ; des promeneurs s’arrêtent à la rampe.",
      "Aoigaoka se trouve dans la capitale orientale – à Edo. Cette feuille aussi appartient aux huit projets de la série des cascades."
    ],
    "fact": "« La Cascade d’Aoigaoka dans la capitale orientale », Metropolitan Museum of Art, New York."
  },
  "kiyotaki": {
    "text": [
      "Un sanctuaire se tient sur un rebord de roche à côté de la chute ; le chemin du Tōkaidō passe à Sakanoshita.",
      "La feuille montre la cascade de Kiyotaki Kannon et appartient à la suite « Tour des cascades des provinces »."
    ],
    "fact": "« La Cascade de Kiyotaki Kannon à Sakanoshita, sur le Tōkaidō », Metropolitan Museum of Art, New York."
  },
  "kameido": {
    "text": [
      "Un pont de bois fortement voûté – le pont du tambour – traverse l’étang du sanctuaire Tenjin de Kameido ; le Fuji apparaît au loin.",
      "La feuille appartient à la suite « Vues remarquables de ponts célèbres dans les provinces » (Shokoku meikyō kiran), parue vers 1834 chez Nishimuraya Yohachi. Kameido se trouve à Edo."
    ],
    "fact": "« Le Pont du tambour au sanctuaire Tenjin de Kameido », Metropolitan Museum of Art, New York."
  },
  "tenman": {
    "text": [
      "Un long pont en arc, orné de lanternes, enjambe le fleuve ; des bateaux passent en dessous.",
      "Le pont Tenman se trouve dans la province de Settsu, dans l’Osaka d’aujourd’hui. La feuille vient de la série des ponts vers 1834."
    ],
    "fact": "« Le Pont Tenman dans la province de Settsu », Metropolitan Museum of Art, New York."
  },
  "yahagi": {
    "text": [
      "Un très long pont sur pieux s’étend au-dessus d’un fleuve large ; le Fuji se tient derrière la plaine d’Okazaki.",
      "Okazaki se trouve sur le Tōkaidō. La feuille appartient à la série « Vues remarquables de ponts célèbres dans les provinces »."
    ],
    "fact": "« Le Pont Yahagi à Okazaki, sur le Tōkaidō », Metropolitan Museum of Art, New York."
  },
  "fukui": {
    "text": [
      "Un long pont traverse un cours de fleuve calme ; des maisons et des arbres bordent la rive dans la province d’Echizen.",
      "La feuille de la série des ponts naît vers 1834 et paraît chez Nishimuraya Yohachi."
    ],
    "fact": "« Le Pont Fukui dans la province d’Echizen », Metropolitan Museum of Art, New York."
  },
  "kintai": {
    "text": [
      "Cinq arcs de pierre d’un pont s’étendent au-dessus de l’eau ; des montagnes se tiennent à l’arrière-plan.",
      "Le pont Kintai, dans la province de Suō, est connu pour sa forme en arc. La feuille appartient à la série des ponts vers 1834."
    ],
    "fact": "« Le Pont Kintai dans la province de Suō », Metropolitan Museum of Art, New York."
  },
  "togetsu": {
    "text": [
      "Sous une pleine lune, un pont traverse les pentes boisées d’Arashiyama ; des bateaux gisent sur le fleuve.",
      "Arashiyama se trouve dans la province de Yamashiro, près de Kyōto. La feuille vient de la série des ponts vers 1834."
    ],
    "fact": "« Le Pont Togetsu à Arashiyama, province de Yamashiro », Metropolitan Museum of Art, New York."
  },
  "yatsuhashi": {
    "text": [
      "Huit passerelles étroites se plient au-dessus d’un marais d’iris ; le « pont aux huit planches » est un motif ancien de la poésie.",
      "La feuille montre une « ancienne vue » du pont dans la province de Mikawa et appartient à la série des ponts vers 1834. Le Cleveland Museum of Art conserve cette épreuve."
    ],
    "fact": "« Ancienne vue du pont aux huit planches, dans la province de Mikawa », Cleveland Museum of Art."
  },
  "gyodo": {
    "text": [
      "Un pont étroit pend comme un nuage sur le versant boisé du mont Gyōdō ; de petites figures le traversent.",
      "Le lieu se trouve près d’Ashikaga. La feuille appartient à la série des ponts célèbres, parue vers 1834."
    ],
    "fact": "« Le Pont des nuages suspendus au mont Gyōdō, près d’Ashikaga », Metropolitan Museum of Art, New York."
  },
  "tsuribashi": {
    "text": [
      "Un pont suspendu s’étend haut au-dessus d’une vallée profonde ; des voyageurs osent le passage entre les provinces de Hida et d’Etchū.",
      "La feuille de la série des ponts vers 1834 montre la frontière dans les montagnes du Japon central."
    ],
    "fact": "« Le Pont suspendu à la frontière des provinces de Hida et d’Etchū », Metropolitan Museum of Art, New York."
  },
  "tenpozan": {
    "text": [
      "Une petite colline artificielle et un débarcadère gisent à l’embouchure de la rivière Aji ; des navires remplissent l’eau.",
      "Le Tenpōzan se trouve dans la province de Settsu. La feuille est comptée dans la série des ponts vers 1834."
    ],
    "fact": "« Le Tenpōzan à l’embouchure de la rivière Aji, province de Settsu », Metropolitan Museum of Art, New York."
  },
  "peoniescanary": {
    "text": [
      "De grandes pivoines pleines remplissent la feuille ; un serin jaune est assis parmi les fleurs.",
      "La feuille parut vers 1833 à 1834 chez Nishimuraya Yohachi, dans une suite sans titre d’images de fleurs et d’oiseaux."
    ],
    "fact": "« Pivoines et serin », Wikimedia Commons (Google Art Project), domaine public."
  },
  "bullfinch": {
    "text": [
      "Un bouvreuil est assis sur une branche de cerisier pleureur en fleurs ; les fleurs pendent légèrement vers le bas.",
      "La feuille appartient à la même suite de fleurs et d’oiseaux vers 1833 à 1834. Cette épreuve se trouve à l’Art Institute of Chicago."
    ],
    "fact": "« Bouvreuil et cerisier pleureur », Art Institute of Chicago."
  },
  "irisesgh": {
    "text": [
      "Des iris se tiennent serrés les uns contre les autres ; une sauterelle est assise sur une feuille.",
      "Le Metropolitan Museum date la feuille de la fin des années 1820 ou vers 1830 ; la suite de fleurs sans titre paraît vers 1833 à 1834 chez Nishimuraya Yohachi."
    ],
    "fact": "« Iris et sauterelle », Metropolitan Museum of Art, New York."
  },
  "bellflower": {
    "text": [
      "Des campanules violettes se penchent sur la feuille ; une libellule s’est posée sur une tige.",
      "Cette feuille aussi appartient à la suite de fleurs et d’oiseaux, parue vers 1833 à 1834 chez Nishimuraya Yohachi."
    ],
    "fact": "« Campanules et libellule », Metropolitan Museum of Art, New York."
  },
  "chrysbee": {
    "text": [
      "Des chrysanthèmes roses et blancs remplissent l’image ; une abeille vole devant les fleurs.",
      "La feuille de la suite de fleurs vers 1833 à 1834 se trouve au Centre Céramique à Maastricht."
    ],
    "fact": "« Chrysanthèmes et abeille », Centre Céramique, Maastricht."
  },
  "poppybloom": {
    "text": [
      "Des coquelicots rouge-orangé s’ouvrent au-dessus de capsules en bouton et d’un feuillage dentelé.",
      "La feuille appartient à la suite de fleurs sans titre vers 1833 à 1834. Cette épreuve vient de l’Art Institute of Chicago."
    ],
    "fact": "« Coquelicots », Art Institute of Chicago."
  },
  "lilybloom": {
    "text": [
      "De grands lys pendent en un arc au-dessus de la feuille ; les fleurs sont claires, les tiges vert foncé.",
      "Les lys aussi appartiennent à la suite de fleurs, parue vers 1833 à 1834 chez Nishimuraya Yohachi. Épreuve à l’Art Institute of Chicago."
    ],
    "fact": "« Lys », Art Institute of Chicago."
  },
  "hydrangeasw": {
    "text": [
      "Une hirondelle rase un hortensia ; les ombelles arrondies remplissent le côté droit.",
      "La feuille de la suite de fleurs et d’oiseaux vers 1833 à 1834 se trouve à l’Art Institute of Chicago."
    ],
    "fact": "« Hortensia et hirondelle », Art Institute of Chicago."
  },
  "mornoglory": {
    "text": [
      "Des ipomées s’enroulent sur la feuille ; une petite rainette est assise parmi les fleurs.",
      "La feuille appartient à la même suite vers 1833 à 1834. Épreuve à l’Art Institute of Chicago."
    ],
    "fact": "« Ipomées et rainette », Art Institute of Chicago."
  },
  "choshisea": {
    "text": [
      "Une vague raide et sombre soulève un bateau au large de Chōshi ; l’écume se brise sur la proue.",
      "La feuille appartient à la suite « Mille images de la mer » (Chie no umi), parue vers 1832 à 1834. Chōshi se trouve dans la province de Shimōsa, sur la côte ouverte."
    ],
    "fact": "« Chōshi dans la province de Shimōsa », Wikimedia Commons, domaine public."
  },
  "kinufish": {
    "text": [
      "Sur la rivière Kinu, des hommes se tiennent dans l’eau peu profonde et soulèvent des paniers ; le talus de la rive est brun-rouge.",
      "La feuille de la série de la mer et des rivières vers 1832 à 1834 se trouve au Museum of Fine Arts à Boston."
    ],
    "fact": "« Pêche au panier dans la rivière Kinu », Museum of Fine Arts, Boston."
  },
  "torchfish": {
    "text": [
      "La nuit, des torches brillent au-dessus de l’eau ; des hommes pêchent au bord, dans la province de Kai.",
      "La feuille « Pêche à la lumière des torches » appartient à la suite « Mille images de la mer », vers 1832 à 1834."
    ],
    "fact": "« Pêche à la lumière des torches dans la province de Kai », Wikimedia Commons, domaine public."
  },
  "gotowhale": {
    "text": [
      "Au large des îles Gotō, des bateaux entourent une baleine ; des hommes sur les navires tiennent des harpons et des cordes.",
      "La feuille de la série « Mille images de la mer » vers 1832 à 1834 se trouve à l’Art Institute of Chicago."
    ],
    "fact": "« Pêche à la baleine au large des îles Gotō », Art Institute of Chicago."
  },
  "nobotosea": {
    "text": [
      "Sur un rivage calme à Noboto, des personnes se tiennent dans l’eau peu profonde ; ombrelles et bateaux bordent la rive.",
      "Noboto se trouve dans la province de Shimōsa. La feuille de la série de la mer vers 1832 à 1834 est accrochée au Metropolitan Museum of Art."
    ],
    "fact": "« Noboto dans la province de Shimōsa », Metropolitan Museum of Art, New York."
  },
  "amiura": {
    "text": [
      "Un grand filet de pêche remplit presque toute la page ; derrière, le Fuji se dessine.",
      "La feuille « Amiura no Fuji » vient des « Cent vues du mont Fuji » (Fugaku Hyakkei), qui paraissent à partir de 1834 en trois tomes, d’abord chez Eirakuya Tōshirō à Nagoya. Cette épreuve se trouve à la National Diet Library à Tokyo."
    ],
    "fact": "« Le Fuji derrière un filet (Amiura no Fuji) », National Diet Library, Tokyo."
  },
  "ashishiro": {
    "text": [
      "Des hommes travaillent sur un échafaudage élevé de bambou et de planches ; le Fuji se tient derrière les perches.",
      "« Ashishiro no Fuji » aussi appartient aux « Cent vues », à partir de 1834. L’épreuve vient de la National Diet Library à Tokyo."
    ],
    "fact": "« Le Fuji avec un échafaudage (Ashishiro no Fuji) », National Diet Library, Tokyo."
  },
  "chinowa": {
    "text": [
      "Des personnes passent à travers un grand anneau sacré de roseaux ; par l’ouverture apparaît le Fuji.",
      "L’anneau Chinowa appartient à des rites d’été de purification. La feuille vient des « Cent vues du mont Fuji ». Cette épreuve se trouve à la Library of Congress à Washington."
    ],
    "fact": "« Le Fuji à l’anneau Chinowa », Library of Congress, Washington."
  },
  "futomi": {
    "text": [
      "Derrière des arbres et un versant de village, le Fuji se dessine au-dessus d’une vaste étendue.",
      "La feuille « Futomi no Fuji » appartient aux « Cent vues », à partir de 1834. Épreuve à la Library of Congress."
    ],
    "fact": "« Futomi no Fuji », Library of Congress, Washington."
  },
  "mikiri": {
    "text": [
      "Devant une maison au toit avancé, un homme travaille ; le Fuji n’apparaît qu’en partie, coupé par l’architecture.",
      "Le titre « Mikiri no Fuji » nomme une vue rognée du mont. La feuille vient des « Cent vues ». Épreuve à la Library of Congress."
    ],
    "fact": "« Mikiri no Fuji », Library of Congress, Washington."
  },
  "murasame": {
    "text": [
      "Des voyageurs en chapeau et vêtement de pluie traversent une averse ; le Fuji se tient pâle derrière la pluie.",
      "« Murasame no Fuji » – le Fuji dans une averse passagère – appartient aux « Cent vues », à partir de 1834. Épreuve à la Library of Congress."
    ],
    "fact": "« Le Fuji dans une averse passagère (Murasame no Fuji) », Library of Congress, Washington."
  },
  "oigawafuji": {
    "text": [
      "Des porteurs traversent à gué, avec des voyageurs dans des baquets de bois, la rivière Ōi ; le Fuji accompagne la traversée.",
      "Le gué de l’Ōi était un point connu du Tōkaidō. La feuille vient des « Cent vues ». Épreuve à la Library of Congress."
    ],
    "fact": "« La Traversée de la rivière Ōi en baquets », Library of Congress, Washington."
  },
  "sankifuji": {
    "text": [
      "Dans la vapeur profonde des montagnes, le Fuji perd des contours nets ; au premier plan se tiennent des arbres et une maison.",
      "Le titre transmis dit que la forme du mont se dissout dans la vapeur de la montagne. La feuille appartient aux « Cent vues ». Épreuve à la Library of Congress."
    ],
    "fact": "« Le Fuji dans la vapeur profonde des montagnes », Library of Congress, Washington."
  },
  "libai": {
    "text": [
      "Le poète chinois Li Bai se tient avec un compagnon sur un rebord de roche et lève les yeux vers une haute cascade.",
      "La feuille appartient à la suite « Miroir fidèle des poèmes chinois et japonais » (Shiika shashin kyō), parue vers 1833 à 1834. Épreuve au Metropolitan Museum of Art."
    ],
    "fact": "« Li Bai contemplant une cascade », Metropolitan Museum of Art, New York."
  },
  "ministoru": {
    "text": [
      "Sous un croissant de lune, trois hommes se tiennent et sont assis au bord d’un lac ; des bateaux gisent calmes, le Fuji se dessine à l’horizon.",
      "Le Cleveland Museum of Art nomme le haut ministre Tōru (822–895), fils d’un empereur, comme la figure représentée. La feuille appartient à la suite des poètes vers 1833 à 1835."
    ],
    "fact": "« Le Ministre Tōru près d’un lac sous un croissant de lune », Cleveland Museum of Art."
  },
  "rushgather": {
    "text": [
      "Un homme porte des faisceaux de joncs par-dessus un petit pont ; au-dessus des roseaux se tient la lune.",
      "La feuille « Le Ramasseur de joncs » appartient à la suite « Miroir fidèle des poèmes chinois et japonais ». Épreuve au Cleveland Museum of Art."
    ],
    "fact": "« Le Ramasseur de joncs », Cleveland Museum of Art."
  },
  "yoshinoch": {
    "text": [
      "Les cerisiers en fleurs remplissent les montagnes de Yoshino ; sous les arbres, de petites figures marchent et chevauchent.",
      "La feuille appartient à la suite en trois parties « Neige, lune et fleurs » (Setsugekka), parue vers 1833 chez Nishimuraya Yohachi."
    ],
    "fact": "« Cerisiers en fleurs à Yoshino », Metropolitan Museum of Art, New York."
  },
  "yodomoons": {
    "text": [
      "Sous la pleine lune, des bateaux voyagent sur la rivière Yodo ; au premier plan gisent des toits, au loin des montagnes.",
      "La feuille « Clair de lune sur la rivière Yodo » appartient à la suite « Neige, lune et fleurs » vers 1833. Cette épreuve se trouve au Rijksmuseum à Amsterdam."
    ],
    "fact": "« Clair de lune sur la rivière Yodo », Rijksmuseum, Amsterdam."
  },
  "sumidasnow": {
    "text": [
      "La Sumida gît sous la neige ; un bateau et un petit sanctuaire se tiennent sur la rive hivernale.",
      "La troisième feuille de la suite « Neige, lune et fleurs » vers 1833. Épreuve au Rijksmuseum à Amsterdam."
    ],
    "fact": "« Neige sur la Sumida », Rijksmuseum, Amsterdam."
  },
  "phoenixob": {
    "text": [
      "Un phénix en rouge, vert et or s’enroule sur un fond sombre – le plafond peint d’un char de fête.",
      "Dans les années 1840, Hokusai séjourne plusieurs fois à Obuse, dans la province de Shinano, sur l’invitation du mécène Takai Kōzan. Le phénix appartient aux peintures de chars de fête ; il est conservé au Hokusaikan à Obuse."
    ],
    "fact": "« Phénix (plafond de char de fête) », vers 1844, Hokusaikan, Obuse."
  },
  "dragonob": {
    "text": [
      "Un dragon s’enroule sur un fond rouge, entouré de vagues stylisées – également un plafond de char de fête d’Obuse.",
      "Le pendant du phénix naît vers 1844, dans les mêmes années des séjours chez Takai Kōzan. Ce dragon aussi est conservé au Hokusaikan à Obuse."
    ],
    "fact": "« Dragon (plafond de char de fête) », vers 1844, Hokusaikan, Obuse."
  },
  "thundergod": {
    "text": [
      "Dans la partie haute de la longue peinture, le dieu du tonnerre plane parmi des nuages noirs éclaboussés ; des lignes rouges zèbrent comme des éclairs.",
      "Le tableau naît en 1847. Hokusai le signe à l’âge de quatre-vingt-huit ans (quatre-vingt-sept selon le comput occidental). Il est accroché à la Freer Gallery of Art, Smithsonian Institution, Washington (F1900.47)."
    ],
    "fact": "« Le Dieu du tonnerre », 1847, Freer Gallery of Art, Smithsonian, Washington."
  },
  "tigersnow": {
    "text": [
      "Un tigre marche à travers la neige qui tombe, la tête levée ; l’inscription nomme l’année 1849.",
      "Le rouleau vertical à l’encre et à la couleur sur soie naît l’année de la mort de Hokusai. Il se trouve en collection privée."
    ],
    "fact": "« Tigre dans la neige », 1849, collection privée. Source : Wikimedia Commons, domaine public."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
