// v7.8 French path step texts: monet life path.
// Faithful translation of the existing DE/EN. No new facts.
// Letter quotes are translations of the German self-translations
// (except letter 569 / blvdclichy: from Vincent’s own English).
// Citations keep letter numbers, recipients, places and dates.
(function () {
  var P = window.FR = window.FR || {};
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "lazaresignal": {
    "text": [
      "Au premier plan se tiennent les disques de signal, derrière la vapeur et les maisons. Monet amène la technique de la gare tout à fait en avant.",
      "Le tableau est accroché à Hanovre et appartient aux vues extérieures de la suite."
    ],
    "fact": "Le tableau appartient au Niedersächsisches Landesmuseum Hannover."
  },
  "lazaretrack": {
    "text": [
      "Entre voies et clôtures, la gare gît ouverte, la fumée s’élève entre les toits. On n’est pas dans la halle, mais sur les installations.",
      "Avec cette suite, Monet prend au sérieux un motif de la ville moderne – aussi au sérieux que plus tard la lumière sur une meule."
    ],
    "fact": "Le tableau est accroché au Pola Museum of Art à Hakone."
  },
  "vethsummer": {
    "text": [
      "En été, Vétheuil gît claire sur la Seine : des maisons, des arbres, l’église, l’eau pleine de reflets. Monet peint le village du côté du fleuve.",
      "Après les années étroites à Argenteuil, c’est un lieu nouveau, plus silencieux – et pour un temps la maison commune de deux familles."
    ],
    "fact": "Le tableau de 1880 est accroché au Metropolitan Museum à New York."
  },
  "vethchurch": {
    "text": [
      "L’église de Vétheuil se tient ferme entre les maisons, la tour claire contre le ciel. Monet la peint souvent, à différentes saisons.",
      "Le village devient le quotidien : le fleuve devant la porte, l’église en vue, les enfants dans la maison."
    ],
    "fact": "Cette vue de 1878 est accrochée aux National Galleries of Scotland à Édimbourg."
  },
  "vethgarden": {
    "text": [
      "Dans le jardin de Vétheuil, des tournesols se tiennent hauts devant la maison, des enfants sur le chemin, le ciel est clair. Le tableau est clair et amical.",
      "Il naît en 1881, deux ans après la mort de Camille. La vie dans la maison continue, avec Alice et les enfants des deux familles."
    ],
    "fact": "Le tableau est accroché à la National Gallery of Art à Washington. Les tournesols en font l’un des tableaux les plus accessibles de ces années."
  },
  "lavacourt": {
    "text": [
      "L’hiver 1879 pèse sur Lavacourt, le village en face de Vétheuil. De la neige, des arbres dénudés, l’eau grise.",
      "En septembre, Camille est morte. Monet écrit à Pissarro qu’il ne sait pas comment organiser la vie avec ses deux fils – et continue de peindre."
    ],
    "fact": "Le tableau de 1879 se trouve en collection privée. Lavacourt se trouve immédiatement de l’autre côté de la Seine.",
    "quote": {
      "text": "Merci de votre lettre et de la part que vous m’avez témoignée ; vous devez en effet mieux que quiconque savoir quel chagrin je puis avoir. Je suis à terre, ne sachant de quel côté me tourner, ni comment organiser ma vie avec mes deux enfants.",
      "cite": "Lettre à Camille Pissarro, Vétheuil, 26 septembre 1879"
    }
  },
  "lavaseine": {
    "text": [
      "La Seine à Lavacourt est large, la rive plate, le ciel ouvert. Monet peint le fleuve aussi sans glace, comme une vaste surface calme.",
      "Entre Vétheuil et Lavacourt, il n’y a que l’eau. Beaucoup de motifs de ces années naissent de l’une ou l’autre rive."
    ],
    "fact": "Le tableau de 1879 se trouve en collection privée."
  },
  "icebreak": {
    "text": [
      "En janvier 1880, la glace se brise sur la Seine. Des floes dérivent, les rives sont inondées, des arbres se tiennent dans l’eau. Monet sort et peint la débâcle.",
      "C’est l’une des premières suites dans lesquelles il reprend encore et encore le même motif, sous une lumière et un temps changeants."
    ],
    "fact": "Cette version est accrochée à l’University of Michigan Museum of Art à Ann Arbor. Monet peint la débâcle en une vingtaine de tableaux.",
    "quote": {
      "text": "Nous avons eu ici une terrible débâcle, et naturellement j’ai essayé d’en tirer quelque chose, que je vous montrerai lors de mon prochain voyage.",
      "cite": "Lettre à Georges de Bellio, Vétheuil, 8 janvier 1880"
    }
  },
  "icedebacle": {
    "text": [
      "De nouveau la débâcle près de Vétheuil : des floes, des arbres dénudés, un vaste ciel froid. Chaque version cherche une lumière différente.",
      "Ce qui plus tard deviendra les meules et les peupliers commence déjà ici : le même motif, beaucoup d’états."
    ],
    "fact": "Cette version de 1880 appartient au Musée du Louvre à Paris."
  },
  "lavesun": {
    "text": [
      "Sur Lavacourt le soleil se couche : le ciel brûle, le fleuve prend la couleur, le village gît sombre sur la rive.",
      "Après l’hiver glacé, Monet peint aussi la lumière plus douce. La Seine reste son grand sujet."
    ],
    "fact": "Le tableau de 1880 se trouve en collection privée."
  },
  "fecampcliff": {
    "text": [
      "La falaise de Fécamp tombe à pic vers la mer, de l’herbe en haut, de la craie blanche, la mer en dessous. Monet vient sur la côte en mars 1881 pour peindre des marines.",
      "Il reste plus longtemps que prévu. La mer lui fait du bien, après les années à Vétheuil."
    ],
    "fact": "Le tableau est accroché à l’Aberdeen Art Gallery."
  },
  "fecampsea": {
    "text": [
      "Ici, il n’y a presque que la mer : des vagues, de l’écume, un ciel strié, à peine un rivage solide. Monet s’approche du ressac.",
      "Il écrit à Durand-Ruel depuis Fécamp que cela lui va si bien qu’il aimerait rester plus longtemps."
    ],
    "fact": "Le tableau de 1881 est accroché au Musée d’art moderne André Malraux au Havre, dans la ville natale de Monet.",
    "quote": {
      "text": "Comme je vous l’avais annoncé, je suis venu pour un court séjour au bord de la mer, et cela me va si bien que j’ai un grand désir de rester un peu plus longtemps.",
      "cite": "Lettre à Paul Durand-Ruel, Fécamp, 23 mars 1881"
    }
  },
  "pourvillelow": {
    "text": [
      "À marée basse, la côte de Pourville gît plate et vaste, l’eau se retire, les falaises se tiennent dans la lumière. Monet habite pratiquement sur le galet.",
      "De 1881 à 1883, la famille vit un temps à Poissy, pour que Jean puisse aller à l’école. Monet lui-même est souvent au bord de la mer. Il écrit à Alice depuis la côte."
    ],
    "fact": "Le tableau de 1882 est accroché au Cleveland Museum of Art.",
    "quote": {
      "text": "Le pays est très beau, et je regrette beaucoup de ne pas être venu plus tôt, plutôt que de perdre mon temps à Dieppe. On ne peut être plus près de la mer que je ne le suis, tout à fait sur le galet, et les vagues battent au pied de la maison.",
      "cite": "Lettre à Alice Hoschedé, Pourville, 15 février 1882"
    }
  },
  "pourvillewalk": {
    "text": [
      "Deux femmes en blanc se tiennent sur la falaise de Pourville, le vent prend les robes, la mer gît bien en dessous. Ce sont Alice et sa fille Blanche.",
      "Le tableau est clair et vaste. Monet peint les figures petites contre le ciel et la mer – et pourtant tout à fait présentes."
    ],
    "fact": "Le tableau est accroché à l’Art Institute of Chicago. Blanche Hoschedé peindra plus tard elle-même et aidera Monet au travail."
  },
  "pourvillebeach": {
    "text": [
      "La plage de Pourville est une longue courbe de sable, d’eau et de falaise. Peu de bateaux, beaucoup de ciel.",
      "Monet vient ici à plusieurs reprises en 1882. Pendant quelques années, la côte normande devient son atelier en plein air."
    ],
    "fact": "Le tableau de 1882 se trouve en collection privée."
  },
  "varensun": {
    "text": [
      "La petite église de Varengeville est assise en haut de la falaise, dans la lumière du soir, devant des pins et la mer. Le village se trouve près de Dieppe, non loin de Pourville.",
      "Monet peint l’église à différentes heures du jour. Le soleil du soir colore la pierre, l’herbe et l’eau."
    ],
    "fact": "Le tableau de 1882 se trouve en collection privée."
  },
  "carimancon": {
    "text": [
      "Au Havre, le jeune Monet dessine des caricatures de professeurs et de bourgeois. Léon Manchon, une tête connue de la ville, reçoit un grand nez et une barbe plus grande encore.",
      "Il vend les feuilles – souvent pour quelques francs. Le père tient une maison de commerce ; le fils veut dessiner, non devenir négociant."
    ],
    "fact": "Monet est encore un adolescent. Les caricatures sont ses premiers travaux qui circulent dans la ville et lui rapportent un peu d’argent à lui."
  },
  "caricassin": {
    "text": [
      "Henri Cassinelli, dit « Rufus Croutinelli », est une autre célébrité locale que Monet prend pour cible. Le trait est sûr, la moquerie amicale, mais juste.",
      "En ces années, il apprend à ramener un visage à l’essentiel – longtemps avant de chercher la lumière sur l’eau."
    ],
    "fact": "Beaucoup de ces caricatures sont conservées aujourd’hui à l’Art Institute of Chicago. Elles montrent un autre Monet que le peintre plus tardif des nénuphars."
  },
  "rouelles": {
    "text": [
      "Eugène Boudin, qui peint la lumière sur la plage d’Honfleur, persuade le jeune Monet de travailler d’après nature. En 1858 naît cette vue de Rouelles, près du Havre.",
      "Un étang, des peupliers, une figure dans l’herbe : encore calme et exact, mais déjà avec le ciel qui ne le lâchera plus."
    ],
    "fact": "Le tableau passe souvent pour le premier paysage conservé de Monet. Il est signé et daté 1858."
  },
  "farmnorm": {
    "text": [
      "Après le service militaire en Algérie (1861–1862), Monet rentre en Normandie. Sur cette ferme, des vaches se tiennent près de la mare, un homme et un enfant sont au travail, au-dessus un vaste ciel.",
      "Le conseil de Boudin, peindre dehors, porte ses fruits. Monet ne cherche plus seulement des visages, mais des fermes, la lumière et le quotidien."
    ],
    "fact": "Le tableau est accroché aujourd’hui au Musée d’Orsay. Monet l’a signé « C. Monet », encore sans le prénom Claude."
  },
  "springfl": {
    "text": [
      "Outre le paysage, Monet s’exerce à la nature morte. Lilas, fleurs de cerisier et primevères remplissent la table, observés de près, presque en fête.",
      "Il a un peu plus de vingt ans et veut prouver qu’il est un peintre sérieux – non seulement le caricaturiste du Havre."
    ],
    "fact": "La nature morte naît en 1864. Dans les mêmes mois, il peint avec Boudin et Jongkind sur la côte."
  },
  "ruebavole": {
    "text": [
      "À Honfleur, non loin du Havre, Monet trouve des rues étroites et un crépi clair. La rue de la Bavole mène dans la profondeur ; les ombres gisent fraîches sur le mur.",
      "Boudin et Jongkind sont tout près. Tous trois s’entendent et vont ensemble devant la nature."
    ],
    "fact": "De ce motif, il existe plus d’une version. Celle qui est montrée ici est accrochée à Boston.",
    "quote": {
      "text": "Jongkind et Boudin sont ici, nous nous entendons à merveille et nous ne nous quittons plus.",
      "cite": "Lettre à Frédéric Bazille, Honfleur, 26 août 1864"
    }
  },
  "saintsimeon": {
    "text": [
      "Le chemin vers la ferme Saint-Siméon passe à travers de hautes herbes et l’ombre. En haut, entre les arbres, un morceau de ciel.",
      "Ici, près d’Honfleur, Monet découvre chaque jour de nouveaux motifs. Il voudrait le plus volontiers tout peindre à la fois."
    ],
    "fact": "La ferme Saint-Siméon était un lieu de rencontre apprécié des peintres à l’embouchure de la Seine.",
    "quote": {
      "text": "Ici, mon cher, c’est merveilleux, et chaque jour je découvre des choses qui sont toujours plus belles. On pourrait en devenir fou, tant j’ai envie de tout peindre.",
      "cite": "Lettre à Frédéric Bazille, Honfleur, 15 juillet 1864"
    }
  },
  "pavechailly": {
    "text": [
      "Au printemps 1865, Monet travaille dans la forêt de Fontainebleau, près de Chailly. La route pavée s’enfonce sous de hauts arbres.",
      "Il veut appeler Bazille à le rejoindre : la forêt, dit-il, est délicieuse. De ces semaines vient aussi le plan du grand Déjeuner sur l’herbe."
    ],
    "fact": "Chailly-en-Bière se trouve au bord de la forêt, au sud de Paris. Monet revient plus tard souvent dans la nature aux portes de la ville.",
    "quote": {
      "text": "Viens donc vite me rejoindre, la forêt est délicieuse.",
      "cite": "Lettre à Frédéric Bazille, Chailly, 28 avril 1865"
    }
  },
  "bodmeroak": {
    "text": [
      "Le grand chêne dans la forêt de Fontainebleau porte le nom du dessinateur suisse Karl Bodmer, qui l’a rendu célèbre.",
      "Monet peint le tronc, le feuillage et le chemin à côté dans un vert vigoureux. La forêt est pour lui atelier et motif à la fois."
    ],
    "fact": "Beaucoup de peintres de l’école de Barbizon ont peint la même forêt. Monet y cherche déjà une lumière plus claire, plus agitée."
  },
  "lunchstudy": {
    "text": [
      "Pour un énorme Déjeuner sur l’herbe, en réponse à Manet, Monet fait poser des amis dans la forêt. Sur cette étude est assis Frédéric Bazille, l’ami peintre qui le soutient souvent d’argent et d’un atelier ; à côté de lui se tient Camille.",
      "Camille Doncieux est sa compagne et son modèle. Sans elle, le grand tableau ne serait pas pensable."
    ],
    "fact": "Bazille est un ami proche des années d’études à Paris. Il tombe en 1870 dans la guerre franco-prussienne."
  },
  "lunchpushkin": {
    "text": [
      "La composition complète du Déjeuner sur l’herbe montre une société entre les arbres, un couvert dans l’herbe, et Camille plus d’une fois dans le tableau.",
      "L’énorme original reste inachevé et est plus tard découpé. Cette version à Moscou conserve toute la pensée."
    ],
    "fact": "Deux fragments de la grande toile sont accrochés au Musée d’Orsay. Monet a abandonné l’œuvre lorsqu’il n’a pas réussi à la terminer à temps pour le Salon."
  },
  "pointeheve": {
    "text": [
      "À côté de la forêt, la côte normande reste son sujet. À marée basse, la pointe de la Hève s’ouvre : rochers, vasières, un vaste ciel, de petites figures sur la plage.",
      "Monet montre le tableau au Salon de 1865 – avec l’embouchure de la Seine, un succès public précoce."
    ],
    "fact": "La pointe de la Hève se trouve près de Sainte-Adresse, tout près du Havre, où Monet a grandi."
  },
  "mouthseine": {
    "text": [
      "Des navires, des nuages et la vaste eau de l’embouchure de la Seine près d’Honfleur : Monet peint l’endroit où le fleuve rencontre la mer.",
      "Au Salon de 1865, le tableau est remarqué. Le jeune peintre du Havre compte soudain comme un espoir."
    ],
    "fact": "Honfleur se trouve en face de la ville natale, de l’autre côté de l’embouchure. Monet revient encore et encore à cette eau."
  },
  "greendress": {
    "text": [
      "Camille Doncieux porte une longue robe verte et regarde par-dessus l’épaule. En 1866, le tableau a du succès au Salon – sous le titre « Camille ».",
      "La famille au Havre ne veut rien savoir de la liaison. Camille est modèle, compagne et bientôt la mère de son enfant."
    ],
    "fact": "Monet a 25 ans, Camille 19. La robe verte devient l’un des tableaux connus de leurs premières années ensemble."
  },
  "womengarden": {
    "text": [
      "Dans le jardin de Ville-d’Avray, quatre femmes en robes claires se tiennent entre fleurs et ombre. Camille a posé pour plusieurs des figures.",
      "Monet peint la grande toile en plein air. Elle est refusée au Salon ; plus tard, l’État l’achète."
    ],
    "fact": "Monet a fait creuser une fosse pour le tableau, afin de pouvoir atteindre la zone supérieure de la toile sans incliner la toile."
  },
  "steadresse": {
    "text": [
      "À l’été 1867, Monet est à Sainte-Adresse, chez sa tante. Camille reste à Paris ; elle attend un enfant. Du jardin, on regarde vers l’embouchure et, au-delà des drapeaux, vers l’eau.",
      "La famille à la rampe est la sienne – père, tante, cousin –, sans Camille. Il écrit à Bazille qu’il a pu aider la pauvre Camille, et combien la situation est difficile."
    ],
    "fact": "Le 8 août 1867, le fils Jean vient au monde à Paris. Monet n’est pas auprès de Camille de façon continue.",
    "quote": {
      "text": "Cela m’a fait beaucoup de bien et m’a donné une grande joie, parce que j’ai pu aider cette pauvre Camille. Ah, mon cher, quelle situation difficile c’est tout de même ; elle est très douce, d’un très bon naturel.",
      "cite": "Lettre à Frédéric Bazille, Sainte-Adresse, 25 juin 1867"
    }
  },
  "beachadresse": {
    "text": [
      "Sur la plage de Sainte-Adresse, des promeneurs sont assis et se promenent, des pêcheurs travaillent aux bateaux, le ciel est vaste.",
      "Monet connaît cette plage depuis l’enfance. Il la peint maintenant au moment où Camille, à Paris, attend l’enfant."
    ],
    "fact": "Sainte-Adresse se trouve juste à côté du Havre. D’ici, par temps clair, on voit loin sur l’embouchure de la Seine."
  },
  "regattadresse": {
    "text": [
      "Des voiliers passent devant Sainte-Adresse, sur le rivage se tiennent des spectateurs, l’eau est posée en traits courts et clairs.",
      "À côté du tableau de famille dans le jardin, la régate est un tableau des loisirs au bord de la mer – clair, venteux, sans pathos."
    ],
    "fact": "En 1867, Monet peint plusieurs vues du même rivage. La lumière change d’un tableau à l’autre."
  },
  "greenvave": {
    "text": [
      "Une vague verte se soulève devant une mer plus sombre, un bateau tient bon. Monet a peint le tableau vers 1866-67, d’après des estampes japonaises et d’après sa propre côte.",
      "Le mouvement de l’eau devient le motif principal – longtemps avant qu’il ne peigne à Giverny les nénuphars."
    ],
    "fact": "Le tableau est accroché au Metropolitan Museum à New York. La couleur de l’eau est presque aussi vigoureuse que sur une estampe d’Hokusai."
  },
  "luncheon68": {
    "text": [
      "Camille est assise à la table mise, le petit Jean tout près, un hôte à l’ombre du jardin. C’est un rare tableau du quotidien familial.",
      "L’argent est court, la reconnaissance incertaine. Monet retient tout de même ce midi calme."
    ],
    "fact": "Le tableau naît en 1868, probablement à Bennecourt ou tout près. Une commande de Madame Gaudibert au Havre aide la famille cette année-là pour un temps bref."
  },
  "bennecourt": {
    "text": [
      "Sur la rive de la Seine à Bennecourt, Camille est assise, le village se reflète dans l’eau. Jean est encore un nourrisson ; la famille cherche un lieu abordable pour vivre.",
      "Le reflet occupe presque la moitié du tableau. Monet s’exerce à ce qui sera plus tard sa force : l’eau comme une seconde image du monde."
    ],
    "fact": "Bennecourt se trouve en amont de Paris. Monet y travaille en 1868 dans des conditions d’argent difficiles."
  },
  "magpie": {
    "text": [
      "À l’hiver 1868-69, Monet, Camille et Jean sont en Normandie, près d’Étretat. Sur une clôture devant la neige est perchée une seule pie.",
      "La neige n’est pas blanche, mais bleue, rose, pleine d’ombres. Beaucoup de contemporains trouvent cela inhabituel."
    ],
    "fact": "Le tableau appartient aux paysages d’hiver les plus silencieux de Monet. Il est accroché au Musée d’Orsay."
  },
  "grenoumet": {
    "text": [
      "La Grenouillère est un bain et un lieu d’excursion appréciés sur la Seine, près de Bougival. Monet peint la passerelle, les bateaux, l’eau devenue lumière – à côté de Renoir, qui cherche le même motif.",
      "Il appelle lui-même les esquisses de « mauvaises pochades » et rêve pourtant d’un grand tableau des bains."
    ],
    "fact": "Les versions de Renoir de La Grenouillère sont accrochées entre autres à Stockholm et à Winterthur. Les deux amis travaillent en 1869 souvent l’un à côté de l’autre.",
    "quote": {
      "text": "J’ai déjà un rêve, un tableau, les bains de La Grenouillère, pour lequel j’ai fait quelques mauvaises esquisses, mais cela reste un rêve. Renoir, qui vient de passer deux mois ici, veut peindre ce tableau aussi.",
      "cite": "Lettre à Frédéric Bazille, Saint-Michel, 25 septembre 1869"
    }
  },
  "grenoulon": {
    "text": [
      "Des baigneurs, une passerelle, de courtes vagues : Monet compose l’eau de beaucoup de touches claires.",
      "Ce qui ici semble encore une esquisse devient la langue de l’impressionnisme. Renoir se tient souvent à ses côtés."
    ],
    "fact": "Cette version est accrochée à la National Gallery à Londres. Il faut la penser tout à côté des tableaux de Renoir des mêmes semaines."
  },
  "bougivalbr": {
    "text": [
      "Le pont de Bougival enjambe la Seine, un chemin mène dans le tableau, des arbres se tiennent sur la rive.",
      "Monet, Camille et le petit Jean habitent en 1869 à Saint-Michel, tout près. La vie est étroite et souvent sans argent."
    ],
    "fact": "Bougival est bien accessible depuis le centre de Paris par le train. C’est pourquoi le lieu devient un but d’excursion – et un motif."
  },
  "seinebougival": {
    "text": [
      "La Seine à Bougival gît calme, les maisons et les arbres se reflètent. C’est la même eau sur laquelle se tient La Grenouillère, seulement plus silencieuse.",
      "En août 1869, Monet écrit à Bazille que depuis huit jours il manque le pain, le vin, le feu et la lumière."
    ],
    "fact": "Saint-Michel, près de Bougival, est cet été le lieu d’habitation de la famille. La situation reste incertaine.",
    "quote": {
      "text": "Depuis huit jours, pas de pain, pas de vin, pas de feu pour cuisiner, pas de lumière. C’est atroce.",
      "cite": "Lettre à Frédéric Bazille, Saint-Michel, 9 août 1869"
    }
  },
  "traincountry": {
    "text": [
      "Un train traverse le vaste paysage, la fumée se tient au-dessus des arbres, la prairie reste verte et calme.",
      "Le monde moderne entre dans le tableau, sans chasser la campagne. Monet voit les deux à la fois."
    ],
    "fact": "Le petit tableau est accroché au Musée d’Orsay. Le chemin de fer a fait de lieux comme Bougival des buts d’excursion proches."
  },
  "rochesnoires": {
    "text": [
      "Le 28 juin 1870, Claude et Camille se marient à Paris. Ils passent l’été à Trouville, sur la plage et devant l’hôtel des Roches Noires.",
      "Des drapeaux claquent dans le vent, le balcon gît à contre-jour. C’est un temps bref et clair – puis la guerre éclate."
    ],
    "fact": "L’hôtel des Roches Noires était une maison distinguée sur la promenade de Trouville. Monet le peint depuis la terrasse ou depuis un étage supérieur."
  },
  "camillebeach": {
    "text": [
      "Camille est assise sur la plage de Trouville, en vêtements clairs, le chapeau sur la tête, le regard sous l’ombrelle. Le sable et le vent sont peints vite.",
      "Quelques semaines plus tard, la famille part à Londres, loin de la guerre franco-prussienne."
    ],
    "fact": "Monet peint Camille à Trouville plusieurs fois sur la plage. Les tableaux sont petits et immédiats, souvent sur bois."
  },
  "thameswest": {
    "text": [
      "À Londres, Monet peint la Tamise près de Westminster : brouillard, un pont, les tours du Parlement comme des silhouettes, un bateau au premier plan.",
      "La guerre l’a chassé de France. Dans la ville, il rencontre le marchand Paul Durand-Ruel, qui commence à lui acheter des tableaux."
    ],
    "fact": "Pissarro et Daubigny aussi sont en ces mois à Londres. Le brouillard de la Tamise devient pour Monet plus tard, vers 1900, encore une fois un grand sujet."
  },
  "hydepark": {
    "text": [
      "Hyde Park gît vaste et vert, de petites figures marchent sous un ciel clair. À Londres, Monet ne cherche pas seulement le fleuve, mais aussi les parcs.",
      "La ville est un refuge, non une patrie. Il ne reste que tant que durent la guerre et l’agitation en France."
    ],
    "fact": "Le tableau appartient aux vues assez rares de parcs londoniens de Monet de l’hiver 1870-71."
  },
  "poollondon": {
    "text": [
      "The Pool of London, le bassin portuaire en aval du London Bridge, est plein de navires, de mâts et d’une lumière grise.",
      "Monet trouve ici un autre Havre : le travail sur l’eau, la brume et le trafic – seulement sous un ciel anglais."
    ],
    "fact": "Le tableau est accroché à Cardiff. Il montre avec quelle exactitude Monet, dès 1871, lit une ville étrangère à travers son eau."
  },
  "meditation": {
    "text": [
      "Camille est assise sur un canapé, un livre à la main, le regard baissé. La pièce est silencieuse, le rideau clair, la robe sombre.",
      "En terre étrangère, elle devient un centre calme. Monet ne peint pas seulement le fleuve de Londres, mais aussi elle."
    ],
    "fact": "Le tableau est accroché au Musée d’Orsay. Il appartient aux portraits les plus intimes de Camille."
  },
  "boatszaan": {
    "text": [
      "Au printemps 1871, Monet ne rentre pas tout de suite en France. Il reste à Zaandam, au nord d’Amsterdam, de mai jusqu’à l’automne.",
      "Des bateaux gisent sur la Zaan, en face de maisons colorées. Il écrit à Pissarro qu’il y a ici à peindre pour toute une vie."
    ],
    "fact": "Camille et Jean sont avec lui. Zaandam est en ces mois un atelier inattendu entre Londres et le retour en France.",
    "quote": {
      "text": "Zaandam est particulièrement remarquable, et il y a ici à peindre pour toute une vie.",
      "cite": "Lettre à Camille Pissarro, Zaandam, 2 juin 1871"
    }
  },
  "molenszaan": {
    "text": [
      "Des moulins se tiennent par centaines le long de la Zaan, les ailes coupent le ciel, l’eau porte leur reflet.",
      "Monet est enthousiasmé par les couleurs des maisons et par les bateaux. Le paysage néerlandais lui paraît fait pour peindre, presque amusant à force de richesse en motifs."
    ],
    "fact": "Ce tableau est accroché au Van Gogh Museum à Amsterdam – un Monet précoce dans la maison de Vincent, qui lui-même ne peignait pas encore alors dans la ville.",
    "quote": {
      "text": "Je suis ici merveilleusement pour peindre, c’est ce qu’on peut trouver de plus amusant. Des maisons de toutes les couleurs, des moulins par centaines et d’adorables bateaux.",
      "cite": "Lettre à Camille Pissarro, Zaandam, 17 juin 1871"
    }
  },
  "achterzaan": {
    "text": [
      "Sur l’Achterzaan, des maisons étroites se tiennent juste sur l’eau, un moulin au fond, le ciel est agité.",
      "Monet peint le côté calme de Zaandam : habiter au canal, non le bruit du port."
    ],
    "fact": "Le tableau appartient au Metropolitan Museum à New York. L’Achterzaan est un bras latéral de la Zaan."
  },
  "housezaan": {
    "text": [
      "Une maison se tient juste sur la Zaan, de l’eau qui reflète devant elle, une façade typiquement néerlandaise.",
      "En quelques mois, Monet rassemble des dizaines de telles vues. Il travaille vite, parce que le motif ne le lâche pas."
    ],
    "fact": "Le tableau est accroché au Städel Museum à Francfort. Il montre comme Monet s’approche des maisons de près – presque sans bande de rive."
  },
  "canalzaan": {
    "text": [
      "Le canal de Zaandam est un miroir pour les nuages, les bateaux et les maisons vertes et rosées sur la rive.",
      "C’est exactement ce que Monet a écrit à Pissarro : des maisons de toutes les couleurs, des moulins, d’adorables bateaux."
    ],
    "fact": "Le tableau appartient à la Sammlung Van Vlissingen et se voit à Singer Laren."
  },
  "windzaan": {
    "text": [
      "Plusieurs moulins se tiennent les uns derrière les autres sous un vaste ciel ; la terre plate devant eux est verte et humide.",
      "Vers l’automne 1871, Monet quitte les Pays-Bas. Le prochain logement sera à Argenteuil, sur la Seine près de Paris."
    ],
    "fact": "En quelques mois à Zaandam naît tout un groupe de tableaux. Ensuite, la famille rentre en France."
  },
  "artihouse": {
    "text": [
      "En décembre 1871, Monet loue une maison à Argenteuil, à l’ouest de Paris, près de la Seine. Le jardin est en fleurs, Jean joue sur le gravier, la façade est claire.",
      "Pour la première fois, la famille a un jardin à elle. Camille et Jean appartiennent fermement à ces tableaux."
    ],
    "fact": "Argenteuil est vite accessible depuis Paris par le train. Monet reste ici jusqu’en 1878."
  },
  "artigarden": {
    "text": [
      "Des dahlias et de hautes fleurs remplissent le jardin d’Argenteuil, un chemin mène à la tonnelle, le ciel est léger.",
      "Monet peint la maison non seulement de l’extérieur, mais les plates-bandes dans lesquelles la famille passe l’été."
    ],
    "fact": "Le tableau est accroché à la National Gallery of Art à Washington. Le jardin devient en ces années l’un de ses motifs les plus importants."
  },
  "hobbyhorse": {
    "text": [
      "Le petit Jean, en 1872 d’environ cinq ans, est assis fièrement sur un cheval bâton dans le jardin. Derrière lui, les plates-bandes et la haie.",
      "Monet peint le fils sans pose, comme une part du quotidien à Argenteuil. C’est un tableau clair, presque privé."
    ],
    "fact": "Jean Monet vient au monde en 1867. Plus tard, à Giverny, lui et ses demi-frères et sœurs tiennent avec le père le ménage."
  },
  "autumneff": {
    "text": [
      "En automne, la Seine à Argenteuil se tient en or et en rose. Les arbres sur la rive se colorent, l’eau prend chaque teinte.",
      "Monet trouve ici le motif qui ne le quitte plus : le fleuve comme miroir de la saison."
    ],
    "fact": "Le tableau est accroché à la Courtauld Gallery à Londres. 1873 est l’une des années les plus fécondes au bord du fleuve."
  },
  "redkerchief": {
    "text": [
      "À travers les portes-fenêtres de la maison d’Argenteuil, on voit Camille dans la neige, un fichu rouge autour de la tête. Dedans il fait chaud, dehors il fait froid et clair.",
      "Le visage n’est posé qu’en quelques traits. On la reconnaît tout de même tout de suite."
    ],
    "fact": "Le tableau est accroché à Cleveland. Il relie la maison familiale à l’air d’hiver devant la vitre."
  },
  "argbridge": {
    "text": [
      "Le pont routier d’Argenteuil enjambe la Seine, des voiliers gisent devant, le ciel est doux.",
      "Monet peint le pont plusieurs fois, sous des lumières différentes. Le fleuve devant la porte devient un atelier."
    ],
    "fact": "Le tableau est accroché au Musée d’Orsay. Le pont avait été reconstruit après la guerre et appartenait au visage moderne du lieu."
  },
  "poppies": {
    "text": [
      "À travers une prairie d’été près d’Argenteuil marchent une femme et un enfant, probablement Camille et Jean. À gauche, les pavots luisent avec une densité particulière.",
      "Le tableau est accroché en 1874 à la première exposition des impressionnistes. C’est l’un des tableaux les plus amicaux de ces années."
    ],
    "fact": "Le champ de pavots appartient aux tableaux les plus connus de Monet et est accroché au Musée d’Orsay."
  },
  "sunrise": {
    "text": [
      "En 1872, Monet peint dans le port du Havre le lever du soleil : des bateaux dans la brume, des grues, de la fumée et un soleil orange qui se reflète dans l’eau.",
      "Deux ans plus tard, précisément ce tableau donne son nom à tout un mouvement. Un critique se moque du titre « Impression » – et le nom reste."
    ],
    "fact": "Le tableau est accroché au Musée Marmottan Monet à Paris. Monet l’a peint dans sa ville natale, non à Argenteuil, bien qu’il y habitât."
  },
  "capucines": {
    "text": [
      "D’un balcon, on voit le boulevard des Capucines : des voitures, des passants, des arbres, le tout en un trait court et vibrant.",
      "C’est précisément dans un immeuble de ce boulevard, dans l’atelier du photographe Nadar, que se tient en 1874 la première exposition du groupe. Le tableau lui-même y est accroché."
    ],
    "fact": "Il existe deux versions du boulevard. Celle qui est montrée ici est accrochée à Kansas City ; une autre au musée Pouchkine à Moscou."
  },
  "railbridge": {
    "text": [
      "Le pont de chemin de fer d’Argenteuil se tient sur de hauts piliers dans le fleuve ; un train pourrait arriver à tout moment, des voiles glissent en dessous.",
      "La technique et les loisirs se partagent le même fleuve. Monet n’y voit pas un motif de conflit, mais de lumière."
    ],
    "fact": "À côté du pont routier, le pont de chemin de fer est le second grand ouvrage d’Argenteuil. Monet peint les deux plusieurs fois."
  },
  "argbassin": {
    "text": [
      "Depuis la voie du pont, on voit le bassin d’Argenteuil : des bateaux, la rive d’en face, un ciel doux.",
      "Monet travaille souvent depuis la rive ou, plus tard, depuis le bateau-atelier. Le fleuve se trouve pratiquement devant la porte."
    ],
    "fact": "Cette vue est accrochée au musée préfectoral de Mie, au Japon. Argenteuil était dans les années 1870 un lieu apprécié pour les sports nautiques."
  },
  "studioboat": {
    "text": [
      "Un bateau aménagé devient un atelier flottant. Monet s’y assied et peint le fleuve à hauteur d’œil, les rives glissent.",
      "L’idée remonte à Daubigny. À Argenteuil, Monet en fait son outil."
    ],
    "fact": "Le tableau est accroché au Kröller-Müller Museum à Otterlo. Du bateau naissent beaucoup des tableaux de fleuve de ces années."
  },
  "regattaarg": {
    "text": [
      "À la régate d’Argenteuil, les voiles se tiennent comme des plages de couleur sur l’eau, la rive est proche, le jour est clair.",
      "Monet aime ces fêtes sur le fleuve. Elles lui donnent le mouvement, le reflet et la société dans un seul tableau."
    ],
    "fact": "Le tableau est accroché au Musée d’Orsay et naît en 1872, dans la première année entière à Argenteuil."
  },
  "parasol": {
    "text": [
      "En 1875, Camille se tient sur une éminence, l’ombrelle contre la lumière, le petit Jean à côté d’elle. Vue d’en bas, contre le ciel qui souffle, elle paraît presque sans poids.",
      "Le tableau vient juste après la première exposition impressionniste. Il clôt cette première partie : la famille dans la lumière, encore à Argenteuil, avant que le chemin ne continue."
    ],
    "fact": "Monet reprend plus tard le motif encore une fois, avec Alice Hoschedé, sa seconde femme. Camille meurt en 1879 à Vétheuil."
  },
  "japonaise": {
    "text": [
      "Camille porte un uchikake rouge, un éventail à la main, entourée d’éventails japonais au mur. Monet la peint en 1876, en pied, presque grandeur nature.",
      "Le tableau est un hommage à la mode du Japon d’alors à Paris – et un portrait de sa femme, festif et étranger à la fois."
    ],
    "fact": "Le tableau est accroché au Museum of Fine Arts à Boston. Monet le montre en 1876 à la deuxième exposition des impressionnistes."
  },
  "roundbed": {
    "text": [
      "Dans le jardin d’Argenteuil se tient une plate-bande ronde pleine de fleurs, dense et colorée, derrière une clôture. L’air est estival, la couleur vigoureuse.",
      "Monet peint le jardin encore et encore : non comme une décoration, mais comme un motif dans lequel la lumière et la croissance se rejoignent."
    ],
    "fact": "Le tableau appartient au Detroit Institute of Arts et naît en 1876, dans les années plus tardives d’Argenteuil."
  },
  "turkeys": {
    "text": [
      "Des dindons blancs courent sur une pelouse ensoleillée, au fond un château et des arbres. Le tableau est un panneau décoratif pour Ernest Hoschedé, peint au château de Rottembourg à Montgeron.",
      "Hoschedé est collectionneur et mécène – encore. Peu après, sa fortune s’effondre. Les familles Monet et Hoschedé se rapprocheront à Vétheuil."
    ],
    "fact": "Le tableau est accroché au Musée d’Orsay. Il appartient à une suite de panneaux décoratifs que Hoschedé commande à Monet en 1876."
  },
  "parkmonceau": {
    "text": [
      "Dans le parc Monceau à Paris, des figures se tiennent à l’ombre de hauts arbres, la lumière tombe par taches sur le chemin. Monet peint le parc de la ville plus d’une fois.",
      "Entre Argenteuil et les commandes à Montgeron, Paris reste proche : un court chemin jusqu’au parc, un tableau du vert dans la ville."
    ],
    "fact": "Cette version de 1878 est accrochée au Metropolitan Museum à New York. Une version plus ancienne naît déjà en 1876."
  },
  "tuileries": {
    "text": [
      "D’un point de vue élevé, on voit le jardin des Tuileries : des allées, des plates-bandes, la ville dans la brume. Monet traite Paris comme un paysage, non comme une scène de rue.",
      "Le tableau naît en 1876 et reste une étude en vert, lumière et étendue, peinte dans la ville où il est né."
    ],
    "fact": "Le tableau est accroché au Musée Marmottan Monet à Paris, dans la fondation issue des propres collections de Monet."
  },
  "montgeronpond": {
    "text": [
      "Près de l’étang de Montgeron se tiennent de hauts arbres, l’eau est sombre et silencieuse, des nénuphars s’annoncent déjà. Ceci aussi est l’un des panneaux pour Hoschedé.",
      "En janvier 1878, la famille doit quitter Argenteuil. Les dettes ne sont pas payées ; le prochain lieu sera Vétheuil."
    ],
    "fact": "Le tableau appartient à l’Ermitage à Saint-Pétersbourg. Il naît vers 1876 pour le château de Montgeron.",
    "quote": {
      "text": "Dans deux jours, c’est-à-dire après-demain, nous devons quitter Argenteuil : pour cela, les dettes doivent être payées.",
      "cite": "Lettre à Georges de Bellio, mardi, 15 janvier 1878"
    }
  },
  "montorgueil": {
    "text": [
      "Le 30 juin 1878, Paris est tendu de drapeaux : une fête de l’année de l’Exposition universelle. Monet se place dans la rue Montorgueil et peint la rue comme une pluie de rouge, de blanc et de bleu.",
      "La famille n’habite déjà plus alors à Argenteuil. Monet vient en ville pour la fête et emporte le mouvement, non les façades."
    ],
    "fact": "Le tableau est accroché au Musée d’Orsay. Une vue sœur montre la rue Saint-Denis le même jour."
  },
  "lazareorsay": {
    "text": [
      "Sous le toit de verre de la gare Saint-Lazare, la vapeur se tient comme un nuage dans la gare. Des trains, des figures, l’armature de fer – Monet peint la ville moderne de l’intérieur.",
      "En janvier 1877, il loue un atelier dans la rue Moncey, tout près. En quelques semaines naît toute une suite."
    ],
    "fact": "Ce tableau est accroché au Musée d’Orsay. Plusieurs vues de la station, Monet les montre en 1877 à la troisième exposition des impressionnistes.",
    "quote": {
      "text": "Je suis à peu près installé, 17, rue Moncey. Si vous pouvez ménager un moment demain ou après-demain, j’y suis de midi à quatre heures et demie.",
      "cite": "Lettre à Georges Charpentier, Paris, 17 janvier 1877"
    }
  },
  "lazarenormand": {
    "text": [
      "Le train de Normandie arrive : locomotive, vapeur, la lumière sous le toit. Monet connaît bien cette ligne – elle mène au Havre, à sa jeunesse.",
      "Il ne peint pas l’horaire, mais le moment où la vapeur emplit la halle."
    ],
    "fact": "Le tableau est accroché à l’Art Institute of Chicago et appartient aux plus connus de la suite de Saint-Lazare."
  },
  "lazareout": {
    "text": [
      "De l’extérieur, on voit les halles, les rails, la fumée devant les maisons. La gare n’est plus un espace fermé, mais une part de la ville.",
      "Monet change de point de vue, comme plus tard avec les meules et les peupliers : le même motif, une autre lumière, un autre côté."
    ],
    "fact": "Le tableau de 1877 se trouve en collection privée. Il montre la station du côté des voies, non depuis la halle."
  },
  "lazaresun": {
    "text": [
      "Au soleil, la vapeur devient claire, presque blanche, les bâtiments derrière se dissolvent. Monet cherche l’effet, non l’architecture.",
      "La suite est brève et dense : dedans, dehors, arrivée, signaux, voies – le tout dans le même hiver et printemps 1877."
    ],
    "fact": "Le tableau de 1877 se trouve en collection privée. Le titre nomme expressément l’effet de soleil."
  },
  "manneporte": {
    "text": [
      "La Manneporte est le grand arc rocheux d’Étretat. Monet se place tout près devant : l’arche remplit presque le tableau, la mer en dessous.",
      "Courbet a rendu ce même rocher célèbre. Monet le sait et le veut tout de même – mais autrement."
    ],
    "fact": "Le tableau de 1883 est accroché au Metropolitan Museum à New York."
  },
  "etretatcliff": {
    "text": [
      "La falaise d’Aval à Étretat entre dans la mer comme une aiguille et une porte. Monet la peint encore en 1885, deux ans après le premier, hardi essai.",
      "Il écrit déjà à Alice en 1883 qu’il veut faire une grande toile de la falaise, bien que Courbet l’ait peinte de façon admirable."
    ],
    "fact": "Le tableau de 1885 est accroché à l’Israel Museum à Jérusalem.",
    "quote": {
      "text": "Je compte faire une grande toile de la falaise d’Étretat, bien que ce soit de mon côté terriblement hardi de le faire après Courbet, qui l’a faite de façon admirable ; mais je tâcherai de la faire autrement.",
      "cite": "Lettre à Alice Hoschedé, Étretat, 1 février 1883"
    }
  },
  "bordighera": {
    "text": [
      "À Bordighera, sur la Riviera italienne, des palmiers et des maisons se tiennent sous un ciel clair, la mer luit entre les arbres. Monet vient en 1884 à la demande de Durand-Ruel.",
      "La lumière du Midi est nouvelle pour lui. Il ne sait d’abord de quel côté regarder, et il dépense beaucoup de couleur."
    ],
    "fact": "Le tableau est accroché à l’Art Institute of Chicago.",
    "quote": {
      "text": "Je suis installé dans un pays de féerie. Je ne sais de quel côté regarder d’abord, tout est splendide, et je voudrais tout faire ; c’est pourquoi je dépense et gaspille beaucoup de couleur, car il y a des essais à faire.",
      "cite": "Lettre à Théodore Duret, Bordighera, 2 février 1884"
    }
  },
  "villabord": {
    "text": [
      "Des villas se tiennent entre des palmiers, au-dessus une crête violette de collines. Bordighera a l’air d’un jardin au bord de la mer.",
      "Monet reste tout l’hiver. Il envoie des tableaux à Paris et se plaint que le motif est difficile – et splendide."
    ],
    "fact": "Le tableau de 1884 est accroché au Musée d’Orsay."
  },
  "palmtrees": {
    "text": [
      "Des palmiers remplissent presque toute la surface, entre eux une bande de mer et des montagnes lointaines. Monet s’approche des plantes aussi près que plus tard des nénuphars.",
      "La Riviera lui donne une palette nouvelle : rose, turquoise, un autre vert."
    ],
    "fact": "Le tableau de 1884 est accroché au Metropolitan Museum à New York."
  },
  "morenogard": {
    "text": [
      "Dans le jardin de la villa Moreno, palmiers et agaves s’entassent, des chemins dans l’ombre. Monet a le droit de peindre le jardin privé, l’un des plus riches mondes végétaux de Bordighera.",
      "Il ne cherche pas la promenade, mais l’intérieur du vert."
    ],
    "fact": "Le tableau de 1884 se trouve en collection privée."
  },
  "antibes": {
    "text": [
      "Antibes gît dorée devant les Alpes lointaines, souvent encore couvertes de neige, la mer est claire. En 1888, Monet revient à la Méditerranée, cette fois du côté français.",
      "De nouveau le sujet est la lumière : non le rempart de la ville seul, mais l’air au-dessus."
    ],
    "fact": "Le tableau de 1888 appartient à la Sammlung Pérez Simón."
  },
  "antibesfort": {
    "text": [
      "Le fort d’Antibes est assis sur la presqu’île, ferme et petit contre l’eau ouverte. Monet garde ses distances et laisse beaucoup de ciel et de mer.",
      "Les tableaux d’Antibes naissent en quelques mois, comme une suite lâche de points de vue et d’heures du jour."
    ],
    "fact": "Le tableau de 1888 se trouve en collection privée."
  },
  "pyramids": {
    "text": [
      "Les pyramides rocheuses de Port-Coton se tiennent comme des aiguilles dans l’Atlantique, la mer se brise contre elles, le soleil est sur l’écume.",
      "En 1886, Monet travaille des semaines sur Belle-Île, à Kervilahouen. La côte est plus sauvage que celle de Normandie."
    ],
    "fact": "Le tableau de 1886 se trouve en collection privée."
  },
  "pyramids2": {
    "text": [
      "La même côte, une autre heure : les pyramides de Port-Coton encore une fois, l’écume différente, la lumière plus froide ou plus dense.",
      "Monet peint les aiguilles en plusieurs versions. Le motif tient immobile ; le temps non."
    ],
    "fact": "Cette version est accrochée au musée Pouchkine à Moscou."
  },
  "belleilestorm": {
    "text": [
      "Une tempête rencontre la côte de Belle-Île : une eau sombre, une écume blanche, les rochers lourds et proches. Monet reste dans le temps.",
      "Il écrit à Alice que la mer est d’une beauté particulière, les rochers un amas de grottes, de pointes et d’aiguilles."
    ],
    "fact": "Le tableau de 1886 est accroché au Musée d’Orsay.",
    "quote": {
      "text": "C’est splendide, mais tellement différent de la Manche que je dois me familiariser avec cette nature ; la mer est d’une beauté tout à fait particulière, et les rochers sont un amas de grottes, de pointes et d’aiguilles extraordinaires.",
      "cite": "Lettre à Alice Hoschedé, Kervilahouen, 18 septembre 1886"
    }
  },
  "lionrock": {
    "text": [
      "Le rocher du Lion de Port-Coton gît dans l’eau comme un animal. Monet saisit la forme de près, la mer autour d’elle agitée.",
      "Comme il l’écrit, il doit d’abord se familiariser avec cette nature : elle est différente de la Manche."
    ],
    "fact": "Le tableau de 1886 est accroché au Fitzwilliam Museum à Cambridge."
  },
  "portdomois": {
    "text": [
      "À Port-Domois, les rochers tombent à pic, l’eau est d’un bleu profond et violet, le cadrage est étroit. Monet cherche le dramatique de la côte.",
      "Beaucoup de ces tableaux naissent en suite rapide, souvent par le vent, depuis le même chemin de côte."
    ],
    "fact": "Le tableau de 1886 est accroché au Cincinnati Art Museum."
  },
  "portgoulphar": {
    "text": [
      "Port-Goulphar est une anse entre des rochers, l’eau en dessous verte et agitée. Monet revient à ce motif encore une fois en 1887.",
      "Ici aussi le nom du lieu compte moins que le rapport de la pierre, de la mer et de la lumière."
    ],
    "fact": "Le tableau de 1887 est accroché à l’Art Gallery of New South Wales à Sydney."
  },
  "rapidscreuse": {
    "text": [
      "La Petite Creuse se précipite sur des pierres à Fresselines, l’eau est claire, les rives sombres. Monet travaille en 1889 dans cette vallée, loin à l’intérieur des terres.",
      "Après la mer et la Riviera, la Creuse est rude et étroite. Il reste tout de même et peint le fleuve encore et encore."
    ],
    "fact": "Le tableau est accroché au Metropolitan Museum à New York."
  },
  "valleycreuse": {
    "text": [
      "La vallée de la Creuse s’ouvre entre des collines, le fleuve gît bas, les pentes sont nues ou peu couvertes.",
      "Monet ne cherche pas ici l’idylle. Le pays est âpre, la lumière change vite."
    ],
    "fact": "Le tableau de 1889 se trouve en collection privée."
  },
  "ravincreuse": {
    "text": [
      "Les gorges de la Creuse conduisent le regard dans la profondeur, le fleuve brille comme un ruban. La vallée paraît fermée, presque sévère.",
      "À Reims est accrochée l’une des versions les plus nettes de ce motif."
    ],
    "fact": "Le tableau de 1889 est accroché au Musée des Beaux-Arts à Reims."
  },
  "creusegrey": {
    "text": [
      "Par temps gris, les maisons sur la Creuse gisent atténuées dans le coteau, la couleur recule, la forme demeure.",
      "Monet reprend la même vallée au soleil et sous la couverture – un pas de plus vers la suite plus tardive."
    ],
    "fact": "Le tableau de 1889 se trouve en collection privée."
  },
  "creusesun": {
    "text": [
      "Le même pays au soleil : des pentes plus chaudes, un fleuve plus clair, les maisons plus nettes. La différence avec le temps gris est tout le tableau.",
      "En 1889, Monet rentre de Fresselines à Giverny. Les prochaines grandes suites naîtront devant sa propre porte."
    ],
    "fact": "Le tableau de 1889 se trouve en collection privée."
  },
  "bargiverny": {
    "text": [
      "Alice et les enfants sont assis dans une barque norvégienne sur le bras de l’Epte à Giverny, vêtus de couleurs claires, l’eau d’un vert sombre autour d’eux.",
      "Au printemps 1883, Monet a loué la maison de Giverny. Il écrit à Pissarro qu’il est très content d’être ici. La famille le suit ; la maison devient le foyer."
    ],
    "fact": "Le tableau de 1887 est accroché au Musée d’Orsay. Il montre la vie commune, quelques années après l’arrivée.",
    "quote": {
      "text": "Je suis très content d’être ici, un pays splendide.",
      "cite": "Lettre à Camille Pissarro, Giverny, juin 1883"
    }
  },
  "springgiverny": {
    "text": [
      "Le printemps à Giverny est doux et vert : des arbres en fleurs, une vaste prairie, un ciel clair. Monet peint le pays qu’il a choisi en 1883.",
      "Bientôt il achètera la maison. Le jardin qu’il plante sera plus tard célèbre dans le monde – ici il est encore, avant tout, paysage."
    ],
    "fact": "Le tableau de 1890 est accroché au Clark Art Institute à Williamstown."
  },
  "haystacks": {
    "text": [
      "Deux meules se tiennent à midi dans le champ à Giverny, fermes et simples, la lumière claire sur les surfaces.",
      "À partir de 1890, Monet peint les mêmes meules à beaucoup d’heures et par beaucoup de temps. Le motif est modeste ; la lumière ne l’est pas."
    ],
    "fact": "Ce tableau de 1890 est accroché à la National Gallery of Australia à Canberra et appartient déjà à la célèbre série des Meules."
  },
  "hayendsummer": {
    "text": [
      "Les mêmes meules, un autre moment : la fin de l’été, un ciel plus doux, la couleur un peu plus mûre. Monet travaille à plusieurs toiles à la fois.",
      "En 1891, Durand-Ruel expose un groupe des meules. Le succès est grand – et confirme le chemin de la suite."
    ],
    "fact": "Le tableau de 1891 est accroché au Musée d’Orsay."
  },
  "poplarepte": {
    "text": [
      "Des peupliers se tiennent sur l’Epte, sveltes et réguliers, avec leurs reflets dans l’eau. Monet les peint en 1891 comme une suite à lui.",
      "Les arbres doivent être abattus. Monet fait en sorte qu’ils restent debout jusqu’à ce qu’il ait fini."
    ],
    "fact": "Le tableau est accroché aux National Galleries of Scotland à Édimbourg."
  },
  "poplarwind": {
    "text": [
      "Le vent passe dans les peupliers : les couronnes s’inclinent, le reflet tremble. La même allée, un autre jour.",
      "Comme avec les meules, Monet montre qu’un motif suffit, si la lumière change."
    ],
    "fact": "Le tableau de 1891 est accroché au Musée d’Orsay."
  },
  "poplarphila": {
    "text": [
      "De nouveau les peupliers, dans une lumière plus chaude, plus dorée. Les troncs divisent la surface comme une grille.",
      "Avec les meules et les peupliers se clôt cette partie. Devant Monet restent le jardin, les nénuphars, Londres et Venise."
    ],
    "fact": "Le tableau de 1891 est accroché au Philadelphia Museum of Art."
  },
  "rouensun": {
    "text": [
      "La façade ouest se tient au soleil : une pierre claire, de profondes ombres dans les portails, les tours se dissolvent en couleur.",
      "Monet ne peint pas la cathédrale comme un relevé du bâtiment, mais comme de la lumière sur la pierre. Il reprendra la même façade par temps gris, le matin et le soir."
    ],
    "fact": "Le tableau de 1894 est accroché à la National Gallery of Art à Washington."
  },
  "rouenwest": {
    "text": [
      "La même façade ouest, un autre jour : la lumière est plus froide, l’articulation des portails demeure, la couleur change.",
      "À Rouen, Monet travaille à plusieurs toiles à la fois et les change quand l’heure tourne."
    ],
    "fact": "Ce tableau de 1894 aussi est accroché à la National Gallery of Art à Washington."
  },
  "rouengrey": {
    "text": [
      "Par temps gris, le portail devient lourd et argenté. La façade demeure ; la lumière du soleil manque.",
      "Cette version naît déjà en 1892, dans la première campagne. Monet écrit à Alice que la cathédrale au soleil est admirable – et quel travail c’est."
    ],
    "fact": "Le tableau de 1892 est accroché au Musée d’Orsay à Paris.",
    "quote": {
      "text": "Je me suis mis au travail, à ma nouvelle fenêtre, où je suis très commodément installé. La cathédrale au soleil est admirable ; j’en ai commencé deux.",
      "cite": "Lettre à Alice Hoschedé, Rouen, 25 février 1892"
    }
  },
  "rouenportal": {
    "text": [
      "Le portail remplit la surface : des arcs, un remplage, un souffle de soleil sur la pierre. Monet s’approche.",
      "En 1894, il date plusieurs de ces façades. À ce moment, la suite est déjà bien avancée."
    ],
    "fact": "Le tableau est accroché au Metropolitan Museum à New York."
  },
  "rouenmorn": {
    "text": [
      "Le matin, à côté de la façade, apparaît la tour d’Albane, la lumière est encore froide et bleuâtre.",
      "Monet ne retient pas seulement le portail, mais aussi la tour latérale – la même cathédrale, un autre cadrage."
    ],
    "fact": "Le tableau de 1894 est accroché au Museum of Fine Arts à Boston."
  },
  "rouengetty": {
    "text": [
      "Dans la lumière du matin, le portail est bleu et rose, la pierre paraît douce. Le soleil n’a pas encore tout à fait saisi la façade.",
      "Cette version aussi est de 1894. La suite montre qu’un motif suffit, si la lumière change."
    ],
    "fact": "Le tableau est accroché au J. Paul Getty Museum à Los Angeles."
  },
  "rouenharmonia": {
    "text": [
      "En plein soleil, le portail et la tour Saint-Romain deviennent une harmonie en bleu et or. La pierre brille, les ombres sont profondes.",
      "En 1895, Durand-Ruel montre à Paris un groupe des cathédrales. Le succès confirme le chemin de la suite – celui que Monet avait déjà pris avec les meules et les peupliers."
    ],
    "fact": "Le tableau de 1893 porte le surnom Harmonie en bleu et or. Il montre le portail et la tour Saint-Romain au soleil."
  },
  "sandvsnow": {
    "text": [
      "Des maisons de Sandvika gisent dans la neige, un petit pont traverse le ruisseau, les collines derrière sont sombres.",
      "En 1895, Monet arrive dans un pays qui lui est nouveau : neige, froid, une autre lumière qu’à Giverny."
    ],
    "fact": "Le tableau de 1895 est accroché au Musée national des arts de Lettonie à Riga."
  },
  "kolsaas": {
    "text": [
      "Le mont Kolsaas gît comme un dos sombre dans la neige, le ciel est pâle. Monet pose le mont de façon brève et ferme.",
      "Il peint le mont en plusieurs versions, par des temps différents, comme auparavant la cathédrale."
    ],
    "fact": "Le tableau de 1895 est accroché au Musée Marmottan Monet à Paris.",
    "quote": {
      "text": "Deux mots seulement, pour que vous soyez rassuré sur mon sort, et que vous ne pensiez pas que je sois mort de froid. Je suis émerveillé de tout ce que je vois dans ce merveilleux pays. J’ai fait des excursions de quatre jours en traîneau, dans les montagnes, sur les fjords, sur les lacs – c’est merveilleux !",
      "cite": "Lettre à Gustave Geffroy, Sandviken près de Christiania, 26 février 1895"
    }
  },
  "kolsaas2": {
    "text": [
      "La même éminence le soir : le mont s’assombrit, la neige prend un peu de couleur, le jour décline.",
      "À Geffroy, Monet écrit des courses en traîneau dans les montagnes et sur les fjords – et de ce qu’il a commencé à peindre."
    ],
    "fact": "Le tableau de 1895, « Mont Kolsaas le soir », se trouve en collection privée."
  },
  "fjordoslo": {
    "text": [
      "Le fjord près de Christiania gît vaste et silencieux, îles et rives sont sous la neige, l’eau est gris-vert.",
      "Monet ne reste que des semaines en Norvège. Les tableaux de ce voyage sont peu nombreux – et appartiennent aux plus inhabituels de son œuvre."
    ],
    "fact": "Le tableau de 1895 se trouve en collection privée."
  },
  "fjordbank": {
    "text": [
      "Depuis la rive, le fjord apparaît comme une étendue claire de glace et d’eau, les hauteurs lointaines sont pâles.",
      "Ensuite, Monet rentre à Giverny. Le prochain grand motif gît de nouveau devant sa propre porte : la Seine le matin."
    ],
    "fact": "Ce tableau de 1895 aussi se trouve en collection privée."
  },
  "mornseine": {
    "text": [
      "Des saules pendent au-dessus du fleuve, l’eau est verte et laiteuse, le matin n’est pas encore clair. Le reflet et la rive passent l’un dans l’autre.",
      "Monet cherche le fleuve à l’aube, souvent dans le brouillard, avant que le soleil ne fixe les formes."
    ],
    "fact": "Le tableau, daté 1898, est accroché au Musée national d’art occidental à Tokyo."
  },
  "mornmet": {
    "text": [
      "Le même tronçon de fleuve, une lumière plus ouverte : le ciel se reflète comme une voie claire dans l’eau, les arbres se tiennent sur les deux rives.",
      "En 1897 naît tout un groupe de tels tableaux du matin. Le motif demeure ; l’heure non."
    ],
    "fact": "Le tableau est accroché au Metropolitan Museum à New York."
  },
  "mornbeau": {
    "text": [
      "Par beau temps, le matin devient plus clair : plus de ciel, un reflet plus ferme, les arbres se détachent plus nettement.",
      "Ici aussi Monet reste au même endroit. La différence est dans la lumière, non dans le lieu."
    ],
    "fact": "Le tableau de 1897 appartient à la collection de la Maison-Blanche à Washington."
  },
  "mornw1436": {
    "text": [
      "1896, un état précoce de la suite : l’eau est violet-bleu, le reflet argenté, les rives encore dans le crépuscule.",
      "Monet commence les tableaux du matin sur la Seine, avant de les poursuivre l’année suivante."
    ],
    "fact": "Le tableau de 1896 se trouve en collection privée."
  },
  "mornw1484": {
    "text": [
      "De nouveau le bras du fleuve près de Giverny, 1897 : brouillard et reflet, les arbres comme des masses sombres, l’eau comme lumière.",
      "Peu après, Monet se tourne vers le jardin qu’il aménage derrière la maison – et vers le pont japonais au-dessus du nouvel étang."
    ],
    "fact": "Le tableau de 1897 se trouve en collection privée."
  },
  "japabridge": {
    "text": [
      "Le pont d’un vert pâle s’arque au-dessus de l’étang, en dessous des feuilles de nénuphar et un peu de ciel dans l’eau.",
      "En 1899, Monet peint ce pont en plusieurs versions. Il devient l’emblème de son jardin."
    ],
    "fact": "Le tableau de 1899 est accroché à la National Gallery of Art à Washington.",
    "quote": {
      "text": "C’est un bassin d’eau que j’ai aménagé moi-même il y a une quinzaine d’années ; ce bassin d’environ 200 mètres de tour est alimenté par un bras de la rivière Epte ; il est bordé d’iris et de diverses plantes aquatiques, dans un cadre d’arbres différents, où toutefois les peupliers et les saules prédominent, dont plusieurs saules pleureurs. C’est précisément en ce lieu que j’ai déjà peint les nénuphars avec un pont de style japonais.",
      "cite": "Lettre à Roger Marx, Giverny, 1 juin 1909"
    }
  },
  "lilybridge": {
    "text": [
      "De nouveau le pont, plus densément pris dans le vert, les nénuphars plus proches, la rive presque fermée.",
      "Cette version aussi naît vers 1899. Le motif est le même, le cadrage plus étroit, la couleur plus saturée."
    ],
    "fact": "Le tableau est accroché au Princeton University Art Museum."
  },
  "lilypondnl": {
    "text": [
      "Le pont se tient clair et pâle contre le feuillage, l’étang est plein de nénuphars, le vert est estival.",
      "Cette version de 1899 appartient aux tableaux les plus connus du jardin d’eau."
    ],
    "fact": "Le tableau est accroché à la National Gallery à Londres."
  },
  "lilypondga": {
    "text": [
      "En 1904, l’étang est tout le tableau : des nénuphars, des reflets, à peine encore de rive. Le pont recule.",
      "Monet commence à faire de la surface de l’eau elle-même le champ – un pas vers les décorations plus tardives."
    ],
    "fact": "Le tableau de 1904 appartient à la série des étangs aux nénuphars de ces années."
  },
  "lilyaic": {
    "text": [
      "Vers 1900, le pont se tient encore fermement dans le tableau, entouré de saules et de nénuphars, le vert est profond.",
      "L’Art Institute of Chicago conserve cette version précoce de l’étang – indépendante du célèbre tableau de nénuphars de 1906 dans la même collection."
    ],
    "fact": "Le tableau de 1900 est accroché à l’Art Institute of Chicago."
  },
  "irisyale": {
    "text": [
      "Dans le Clos normand, le jardin de fleurs devant la maison, des iris se tiennent en rangs serrés, un sentier mène dans la profondeur, les arbres donnent de l’ombre.",
      "En 1900, Monet ne peint pas seulement le jardin d’eau, mais aussi ce chemin à travers les fleurs – le jardin qu’il a lui-même planté."
    ],
    "fact": "Le tableau de 1900 est accroché à la Yale University Art Gallery à New Haven."
  },
  "grandeallee": {
    "text": [
      "La grande allée mène vers la maison, le chemin de gravier gît à l’ombre des arbres, au bord des fleurs s’épanouissent.",
      "Le même axe que les visiteurs parcourent encore aujourd’hui, Monet le peint vers 1900 comme un tableau d’été silencieux."
    ],
    "fact": "Le tableau de 1900 est accroché au Musée des Beaux-Arts à Montréal."
  },
  "lilywl": {
    "text": [
      "En 1904, les nénuphars sont un champ sombre et fermé : des feuilles, peu de fleurs, un vert profond, à peine d’horizon.",
      "Dans ces années, Monet expose des groupes de nénuphars. L’étang devient son motif principal."
    ],
    "fact": "Le tableau de 1904 appartient à la série des nénuphars de ces années."
  },
  "parlsun": {
    "text": [
      "Le Parlement se tient comme une masse bleue dans la lumière du soleil, la Tamise brille, le ciel est clair. Les tours ne se dissolvent pas tout à fait dans la brume.",
      "Monet peint le bâtiment en de nombreux états : soleil, brouillard, coucher de soleil. Le motif demeure ; le temps non."
    ],
    "fact": "Le tableau de 1903 est accroché au Brooklyn Museum à New York."
  },
  "parlfog": {
    "text": [
      "Dans le brouillard, le Parlement devient ombre. Un bateau gît sur l’eau, la couleur est retenue, l’air est épais.",
      "À Alice, Monet écrit qu’il était à terre lorsque le brouillard a manqué – et qu’il voyait déjà toutes ses toiles ruinées."
    ],
    "fact": "Le tableau de 1903–1904 est accroché au Metropolitan Museum à New York.",
    "quote": {
      "text": "Quand je me suis levé, j’ai été terrifié de voir qu’il n’y avait pas de brouillard, pas même l’ombre d’une brume ; j’étais à terre et voyais déjà toutes mes toiles ruinées, mais peu à peu, à mesure que les feux ont été allumés, la fumée et la brume sont revenues.",
      "cite": "Lettre à Alice Monet, London, 4 mars 1900"
    }
  },
  "parlset": {
    "text": [
      "Au coucher du soleil, le ciel brûle au-dessus du Parlement, l’eau accueille l’orangé et le violet, les tours se tiennent sombres devant.",
      "En 1904, Monet date plusieurs de ces versions londoniennes, qu’il mène à terme à Giverny."
    ],
    "fact": "Le tableau de 1904 appartient à la série du Parlement des voyages londoniens."
  },
  "waterloosun": {
    "text": [
      "Le pont de Waterloo gît dans la lumière du soir, les arches sont douces, la ville derrière se dissout.",
      "Monet peint ce pont au soleil, au crépuscule et par des jours gris – la même construction, trois humeurs."
    ],
    "fact": "Le tableau de 1904 est accroché à la National Gallery of Art à Washington."
  },
  "waterloodusk": {
    "text": [
      "Au crépuscule, le pont devient plus lourd, la fumée des cheminées demeure dans l’air, l’eau est sombre.",
      "Cette version de 1904 aussi est accrochée à Washington, à côté du soleil et du jour gris."
    ],
    "fact": "Le tableau est accroché à la National Gallery of Art à Washington."
  },
  "waterlogrey": {
    "text": [
      "Par un jour gris, le pont est presque incolore, la Tamise mate, la ville une suggestion.",
      "En 1903, Monet date cette version. Le brouillard de Londres n’est pas pour lui un obstacle, mais le motif lui-même."
    ],
    "fact": "Le tableau de 1903 est accroché à la National Gallery of Art à Washington."
  },
  "charingga": {
    "text": [
      "Le pont de Charing Cross gît dans une brume claire et laiteuse, trains et arches sont à peine retenus.",
      "Monet peint le pont ferroviaire de la ligne du Sud-Est en de nombreuses versions, souvent depuis le Savoy."
    ],
    "fact": "Le tableau vers 1902 appartient à la série du pont de Charing Cross."
  },
  "charing2": {
    "text": [
      "Une version plus précoce ou plus froide du même pont : plus de structure, un autre ciel, le même motif depuis la Tamise.",
      "Après les voyages londoniens, Monet rentre à Giverny. En 1908, un autre voyage le mène à Venise."
    ],
    "fact": "Le tableau vers 1900 appartient également à la série du pont de Charing Cross."
  },
  "sangiorgio": {
    "text": [
      "San Giorgio Maggiore gît comme un carré clair dans la lagune, le campanile se tient svelte, deux gondoles donnent l’échelle.",
      "Monet peint l’église depuis le côté d’en face, souvent dans la brume, l’eau comme une vaste surface calme."
    ],
    "fact": "Le tableau de 1908 est accroché à l’Indianapolis Museum of Art."
  },
  "sangiodusk": {
    "text": [
      "Au crépuscule, le ciel brûle derrière San Giorgio, l’église devient silhouette, l’eau accueille l’orangé.",
      "À Geffroy, Monet écrit que la lumière de Venise est unique – et qu’il est triste de la quitter."
    ],
    "fact": "Le tableau de 1908 est accroché au National Museum Cardiff.",
    "quote": {
      "text": "Elle vous aura parlé de mon enthousiasme pour Venise. Eh bien, il n’a fait que grandir, et à mesure que le moment d’abandonner cette lumière unique approche, j’en suis triste. C’est si beau.",
      "cite": "Lettre à Gustave Geffroy, Venedig, 7 décembre 1908"
    }
  },
  "dogepalace": {
    "text": [
      "Le palais des Doges gît comme un long front clair sur l’eau, les arcades sont suggérées, la lagune accueille le palais.",
      "Monet ne saisit pas le bâtiment comme une étude d’architecture, mais comme lumière sur la pierre et l’eau – comme auparavant la cathédrale de Rouen."
    ],
    "fact": "Le tableau de 1908 appartient au groupe vénitien de cet automne."
  },
  "dogemet": {
    "text": [
      "Depuis San Giorgio Maggiore, on voit le palais des Doges par-dessus l’eau, le premier plan est une bande sombre de rive.",
      "Le même palais, un autre point de vue. Monet change de rive et garde le motif."
    ],
    "fact": "Le tableau de 1908 est accroché au Metropolitan Museum à New York."
  },
  "palazzomula": {
    "text": [
      "Le palazzo da Mula se tient près du canal, la façade se reflète, une gondole glisse.",
      "Monet s’approche des palais comme il s’était approché du portail à Rouen : non la ville comme panorama, mais un mur de lumière."
    ],
    "fact": "Le tableau de 1908 est accroché à la National Gallery of Art à Washington."
  },
  "palazzodario": {
    "text": [
      "Le palazzo Dario s’élève étroit hors de l’eau, les incrustations de marbre sont dissoutes en couleur, une gondole gît devant.",
      "Cette maison sur le Grand Canal aussi, Monet la peint en 1908. Le voyage reste le seul qu’il fasse à Venise."
    ],
    "fact": "Le tableau est accroché au National Museum Cardiff."
  },
  "grandcanal2": {
    "text": [
      "Santa Maria della Salute se tient au bout du Grand Canal, des perches au premier plan partagent la surface, l’eau est turquoise et violette.",
      "En décembre 1908, Monet et Alice quittent Venise. Il élabore les tableaux plus tard à Giverny."
    ],
    "fact": "Le tableau de 1908 est accroché au Museum of Fine Arts de Boston."
  },
  "pathiris": {
    "text": [
      "Un chemin passe à travers de hauts iris, jaunes et violets, le feuillage est dense, le sentier disparaît presque dans le jaune-vert.",
      "Le tableau naît entre 1914 et 1917, dans les années qui suivent la mort de Jean. Monet reste au travail dans le jardin."
    ],
    "fact": "Le tableau est accroché au Metropolitan Museum à New York."
  },
  "willowk": {
    "text": [
      "Un saule pleureur pend lourdement au-dessus du sol, le tronc est sombre, les branches tombent comme un rideau.",
      "En 1918, Monet peint plusieurs saules au bord de l’étang. Dans les derniers mois de la guerre, l’arbre devient un motif silencieux et grave."
    ],
    "fact": "Le tableau de 1918 appartient aux saules pleureurs de ces années."
  },
  "willow2": {
    "text": [
      "Un autre saule, plus chaud dans la lumière : or et vert, le tronc partage la surface, les branches sont moins lourdes.",
      "Cette version aussi naît en 1918 ou 1919, au même étang de Giverny."
    ],
    "fact": "Le tableau est accroché au Kimbell Art Museum à Fort Worth."
  },
  "willow3": {
    "text": [
      "Encore une fois le saule pleureur, plus rougeâtre et plus âpre, presque sans ciel. Monet reste auprès de l’arbre et change l’heure.",
      "Les saules naissent dans les mêmes années où il prépare les grandes toiles de nénuphars."
    ],
    "fact": "Le tableau de 1918–1919 appartient au groupe des saules pleureurs."
  },
  "irislate": {
    "text": [
      "Des iris isolés se tiennent dans le vert et le bleu, le fond reste en partie libre. Le tableau est tenu sobre et ouvert.",
      "Entre 1914 et 1917, Monet peint de telles pièces de fleurs dans le jardin – à côté des chemins et des saules."
    ],
    "fact": "Le tableau de 1914–1917 se trouve en collection privée."
  },
  "rosegarden": {
    "text": [
      "Depuis le jardin de roses, la maison apparaît comme une masse chaude et rouge dans le feuillage, la lumière est haute et jaune.",
      "Le tableau naît entre 1922 et 1924, dans les dernières années de travail de Monet au Clos normand."
    ],
    "fact": "Le tableau est accroché au Musée Marmottan Monet à Paris."
  },
  "latebridge2": {
    "text": [
      "Le pont japonais n’est plus qu’un arc dans le vert-bleu, les formes se dissolvent, l’étang et le feuillage passent l’un dans l’autre.",
      "Entre 1918 et 1924, Monet peint le pont en versions plus libres et plus sombres – le même lieu qu’en 1899, un autre œil."
    ],
    "fact": "Le tableau naît entre 1918 et 1924, dans les années tardives au bord de l’étang."
  },
  "lilyset": {
    "text": [
      "Le soleil couchant gît comme une voie jaune-rose sur l’étang, les nénuphars sont largement disséminés, l’horizon s’efface.",
      "Ce panneau appartient aux Grandes Décorations qui sont aujourd’hui accrochées à l’Orangerie. Monet a aménagé le jardin d’eau lui-même – et il en a finalement fait une salle."
    ],
    "fact": "Le tableau appartient au cycle de l’Orangerie à Paris et naît entre 1914 et 1926.",
    "quote": {
      "text": "Je suis sur le point d’achever deux panneaux décoratifs, que je veux signer du jour de la Victoire, et je vous prie de les offrir à l’État par votre entremise. C’est peu, mais c’est la seule façon dont je puisse prendre part à la victoire.",
      "cite": "Lettre à Georges Clemenceau, 12 novembre 1918"
    }
  },
  "lilyblue": {
    "text": [
      "Des nénuphars bleus sous des branches pendantes : la surface est proche, le cadrage sans rive, la couleur est d’un violet et d’un vert profonds.",
      "Le tableau naît entre 1916 et 1919, dans les mêmes années que les grandes décorations, comme tableau à part entière."
    ],
    "fact": "Le tableau est accroché au Musée d’Orsay à Paris."
  },
  "lilypool": {
    "text": [
      "1907, un cadrage précoce et haut : un reflet clair tombe à travers l’étang, des nénuphars gisent au bord de la voie de lumière.",
      "Ces années préparent les décorations plus tardives. L’étang n’a plus besoin d’horizon."
    ],
    "fact": "Le tableau de 1907 appartient à la série des nénuphars avant les grandes toiles."
  },
  "lilymet2": {
    "text": [
      "En 1919, les nénuphars gisent comme des îles claires sur un fond vert, un reflet doux partage la surface.",
      "Le Metropolitan Museum conserve cette grande version calme des années des décorations."
    ],
    "fact": "Le tableau de 1919 est accroché au Metropolitan Museum à New York."
  },
  "lilytoledo": {
    "text": [
      "En 1922, l’étang est un champ de violet et de vert, les fleurs se tiennent de façon lâche, le pinceau reste visible.",
      "Dans ces années, Monet continue de travailler aux nénuphars malgré sa vue changée."
    ],
    "fact": "Le tableau de 1922 est accroché au Toledo Museum of Art."
  },
  "lilyga431": {
    "text": [
      "Un large panneau du groupe des Agapanthus : des nénuphars sur toute la surface, en dessous un souffle de plantes de rive.",
      "De tels grands formats appartiennent au voisinage des décorations, même lorsqu’ils ne sont pas accrochés à l’Orangerie."
    ],
    "fact": "Le tableau naît entre environ 1915 et 1926 et appartient au groupe des panneaux d’Agapanthus."
  },
  "lily1908": {
    "text": [
      "1908, un étang calme et haut : peu de fleurs roses, une voie claire dans l’eau, presque sans rive.",
      "Le tableau naît dans les mêmes années que le voyage à Venise – et montre que le jardin d’eau demeure le motif durable."
    ],
    "fact": "Le tableau de 1908 appartient à la série des nénuphars de ces années."
  },
  "lilyga462": {
    "text": [
      "En 1916, les nénuphars gisent plus denses, en bleu et en vert, des fleurs isolées luisent en rouge et en jaune.",
      "Cette année-là, Monet est au milieu du travail sur les grandes toiles. Des tableaux plus petits accompagnent les décorations."
    ],
    "fact": "Le tableau de 1916 appartient à la série des nénuphars des années de guerre et de décoration."
  },
  "lilyga2": {
    "text": [
      "Des nénuphars sur un fond clair, vert-bleu, les feuilles forment des îles, la lumière est douce.",
      "De tels panneaux des années 1910 montrent l’étang sans pont et sans ciel – seulement de l’eau et des plantes."
    ],
    "fact": "Le tableau appartient à la série des nénuphars des années 1910."
  },
  "lilybs": {
    "text": [
      "Un reflet clair tombe en biais à travers l’étang, les nénuphars gisent au bord de la lumière, la rive reste dehors.",
      "En 1921, Monet écrit à Arsène Alexandre que la galerie de l’Orangerie abritera pour toujours ses essais décoratifs. En mai 1927, après sa mort, les salles s’ouvrent."
    ],
    "fact": "Le tableau est accroché à l’Artizon Museum à Tokyo, l’ancienne collection Bridgestone.",
    "quote": {
      "text": "Ce sera la galerie de l’Orangerie qui abritera pour toujours mes essais décoratifs.",
      "cite": "Lettre à Arsène Alexandre, Giverny, 13 novembre 1921"
    }
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
