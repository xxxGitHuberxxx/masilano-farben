// v9.8 IT content for Alfred Sisley’s life journey, Part 1 (1839–1880). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Petit Palais, Paris": "Petit Palais, Parigi",
  "Museum Ordrupgaard, Charlottenlund": "Museum Ordrupgaard, Charlottenlund",
  "Saarlandmuseum, Saarbrücken": "Saarlandmuseum, Saarbrücken",
  "Artizon Museum, Tokio": "Artizon Museum, Tokyo",
  "Buffalo AKG Art Museum": "Buffalo AKG Art Museum",
  "Southampton City Art Gallery": "Southampton City Art Gallery",
  "Sammlung Oskar Reinhart, Winterthur": "Collezione Oskar Reinhart, Winterthur",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Norton Simon Museum, Pasadena": "Norton Simon Museum, Pasadena",
  "Yale University Art Gallery, New Haven": "Yale University Art Gallery, New Haven",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Parigi",
  "National Museum of Western Art, Tokio": "National Museum of Western Art, Tokyo",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Montreal Museum of Fine Arts": "Montreal Museum of Fine Arts",
  "Dallas Museum of Art": "Dallas Museum of Art",
  "The Phillips Collection, Washington": "The Phillips Collection, Washington",
  "Musée des Beaux-Arts, Rouen": "Musée des Beaux-Arts, Rouen",
  "Königliche Museen der Schönen Künste, Brüssel": "Musei Reali di Belle Arti, Bruxelles",
  "Toledo Museum of Art": "Toledo Museum of Art",
  "Clark Art Institute, Williamstown": "Clark Art Institute, Williamstown",
  "National Galleries of Scotland, Edinburgh": "National Galleries of Scotland, Edimburgo",
  "Neue Pinakothek, München": "Neue Pinakothek, Monaco di Baviera",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Colonia",
  "Walters Art Museum, Baltimore": "Walters Art Museum, Baltimore",
  "J. Paul Getty Museum, Los Angeles": "J. Paul Getty Museum, Los Angeles",
  "Museum of Fine Arts, Houston": "Museum of Fine Arts, Houston",
  "Städel Museum, Frankfurt": "Städel Museum, Francoforte",
  "Kunsthalle Mannheim": "Kunsthalle Mannheim",
  "Nationalgalerie, Prag": "Galleria Nazionale, Praga",
  "Hammer Museum, Los Angeles": "Hammer Museum, Los Angeles",
  "Princeton University Art Museum": "Princeton University Art Museum"
});
  P.works = Object.assign(P.works || {}, {
  "sychest65": {
    "title": "Viale di castagni a La Celle-Saint-Cloud",
    "museum": "Petit Palais, Parigi"
  },
  "sychestord": {
    "title": "Viale di castagni a La Celle-Saint-Cloud",
    "museum": "Museum Ordrupgaard, Charlottenlund"
  },
  "symonetf": {
    "title": "Il pittore Monet nella foresta di Fontainebleau",
    "museum": "Saarlandmuseum, Saarbrücken"
  },
  "sychest67": {
    "title": "Viale di castagni presso La Celle-Saint-Cloud",
    "museum": "Southampton City Art Gallery"
  },
  "sywoods": {
    "title": "Donne che vanno al bosco",
    "museum": "Artizon Museum, Tokyo"
  },
  "symarlott": {
    "title": "Strada di villaggio a Marlotte",
    "museum": "Buffalo AKG Art Museum"
  },
  "sybarges": {
    "title": "Chiatte sul canale Saint-Martin",
    "museum": "Collezione Oskar Reinhart, Winterthur"
  },
  "syearlysnow": {
    "title": "Prima neve a Louveciennes",
    "museum": "Museum of Fine Arts, Boston"
  },
  "syvilleneuve": {
    "title": "Il ponte di Villeneuve-la-Garenne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sylouvsnow": {
    "title": "Louveciennes sotto la neve",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "sybougival": {
    "title": "La Senna a Bougival",
    "museum": "Yale University Art Gallery, New Haven"
  },
  "syflood72": {
    "title": "Piena a Port-Marly",
    "museum": "National Gallery of Art, Washington"
  },
  "sycanal72": {
    "title": "Il canale Saint-Martin",
    "museum": "Musée d’Orsay, Parigi"
  },
  "systdenis": {
    "title": "L’isola Saint-Denis",
    "museum": "Musée d’Orsay, Parigi"
  },
  "sylandlouv": {
    "title": "Paesaggio a Louveciennes",
    "museum": "National Museum of Western Art, Tokyo"
  },
  "syturnroad": {
    "title": "Una svolta della strada",
    "museum": "Art Institute of Chicago"
  },
  "syspringb": {
    "title": "Primavera a Bougival",
    "museum": "Philadelphia Museum of Art"
  },
  "syautumnb": {
    "title": "Autunno: rive della Senna presso Bougival",
    "museum": "Montreal Museum of Fine Arts"
  },
  "syvillevray": {
    "title": "Strada a Ville-d’Avray",
    "museum": "Dallas Museum of Art"
  },
  "syfog": {
    "title": "Nebbia a Voisins",
    "museum": "Musée d’Orsay, Parigi"
  },
  "sysnowphill": {
    "title": "Neve a Louveciennes",
    "museum": "The Phillips Collection, Washington"
  },
  "sychenil": {
    "title": "Place du Chenil a Marly, effetto di neve",
    "museum": "Musée des Beaux-Arts, Rouen"
  },
  "syroadlouv": {
    "title": "La strada di Louveciennes",
    "museum": "Musei Reali di Belle Arti, Bruxelles"
  },
  "syaqueduct": {
    "title": "L’acquedotto di Marly",
    "museum": "Toledo Museum of Art"
  },
  "sythames": {
    "title": "Il Tamigi a Hampton Court",
    "museum": "Clark Art Institute, Williamstown"
  },
  "symolesey": {
    "title": "La chiusa di Molesey, Hampton Court",
    "museum": "National Galleries of Scotland, Edimburgo"
  },
  "syroadhamp": {
    "title": "La strada di Hampton Court",
    "museum": "Neue Pinakothek, Monaco di Baviera"
  },
  "syregatta": {
    "title": "La regata di Molesey",
    "museum": "Musée d’Orsay, Parigi"
  },
  "sybrhamp": {
    "title": "Il ponte di Hampton Court",
    "museum": "Wallraf-Richartz-Museum, Colonia"
  },
  "syterrace": {
    "title": "La terrazza di Saint-Germain in primavera",
    "museum": "Walters Art Museum, Baltimore"
  },
  "syversailles": {
    "title": "La strada da Versailles a Saint-Germain",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "symeadow": {
    "title": "Prato",
    "museum": "National Gallery of Art, Washington"
  },
  "syinstitut": {
    "title": "La Senna con l’Institut de France e il Pont des Arts",
    "museum": "Art Institute of Chicago"
  },
  "sypiles": {
    "title": "La Senna a Port-Marly, mucchi di sabbia",
    "museum": "Art Institute of Chicago"
  },
  "sywatering": {
    "title": "L’abbeveratoio di Marly",
    "museum": "Art Institute of Chicago"
  },
  "syfloodrouen": {
    "title": "L’inondazione a Port-Marly",
    "museum": "Musée des Beaux-Arts, Rouen"
  },
  "syfloodhou": {
    "title": "La piena sulla strada di Saint-Germain",
    "museum": "Museum of Fine Arts, Houston"
  },
  "symarlyview": {
    "title": "Veduta di Marly-le-Roi da Cœur-Volant",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sysawyers": {
    "title": "I segantini di fossa",
    "museum": "Petit Palais, Parigi"
  },
  "sybankaut": {
    "title": "Riva della Senna in autunno",
    "museum": "Städel Museum, Francoforte"
  },
  "systreetmarly": {
    "title": "Una strada a Marly",
    "museum": "Kunsthalle Mannheim"
  },
  "sysevres": {
    "title": "Il ponte di Sèvres",
    "museum": "Galleria Nazionale, Praga"
  },
  "sysuresnes": {
    "title": "La Senna a Suresnes",
    "museum": "Musée d’Orsay, Parigi"
  },
  "syrest": {
    "title": "Riposo presso un ruscello, orlo del bosco",
    "museum": "Musée d’Orsay, Parigi"
  },
  "syallee": {
    "title": "Viale di castagni",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "syfirstsnow": {
    "title": "Prima neve a Veneux-Nadon",
    "museum": "National Gallery of Art, Washington"
  },
  "sybanksby": {
    "title": "Rive della Senna a By",
    "museum": "Clark Art Institute, Williamstown"
  },
  "systmammes": {
    "title": "Strada lungo la Senna a Saint-Mammès",
    "museum": "Dallas Museum of Art"
  },
  "sytimber": {
    "title": "Deposito di legname a Saint-Mammès",
    "museum": "Hammer Museum, Los Angeles"
  },
  "syhills": {
    "title": "Sulle alture di Moret in primavera, mattina",
    "museum": "Princeton University Art Museum"
  }
});
  P.paths = P.paths || {};
  P.paths.sisley = {
  "title": "Il percorso di vita di Alfred Sisley",
  "part": "Parte 1 · 1839–1880",
  "subtitle": "Da Parigi a Veneux-Nadon",
  "intro": "Alfred Sisley nasce a Parigi il 30 ottobre 1839, figlio di genitori britannici. Questa prima parte lo segue dalla formazione commerciale a Londra e dallo studio di Gleyre con Monet, Renoir e Bazille, attraverso i primi quadri a Fontainebleau e Marlotte, la famiglia con Eugénie, la guerra del 1870-71 e gli anni a Louveciennes e Marly, fino alla piena del 1876 e al trasferimento sul Loing nel 1880.",
  "ending": [
    "All’inizio del 1880 Sisley si stabilisce con Eugénie e i bambini a Veneux-Nadon, vicino a Moret-sur-Loing. Lì trova il paesaggio al quale resterà fedele.",
    "Nella parte successiva vengono gli anni a Moret-sur-Loing, la povertà, Eugénie, il tardivo tentativo di naturalizzazione e la morte di Sisley nel 1899."
  ],
  "epilogue": "Nella parte successiva vengono gli anni a Moret-sur-Loing, la povertà, Eugénie, il tardivo tentativo di naturalizzazione e la morte di Sisley nel 1899.",
  "life": "1606–1669"
};
  P.stations = Object.assign(P.stations || {}, {
  "syparis": {
    "place": "Parigi, Londra e Gleyre",
    "when": "1839–1863",
    "mapLabel": "Parigi",
    "intro": [
      "Alfred Sisley nasce il 30 ottobre 1839 a Parigi, secondo figlio del commerciante di tessuti inglese William Sisley e di Felicia Sell. Nel 1857 il padre lo manda a Londra per imparare il commercio; resta in Inghilterra fino al 1860 e vi vede molta pittura.",
      "Tornato in Francia decide di diventare pittore. Nel 1862 entra nello studio di Charles Gleyre a Parigi. Lì conosce Claude Monet, Pierre-Auguste Renoir e Frédéric Bazille. Nel 1863 Gleyre chiude lo studio."
    ]
  },
  "symarlott": {
    "place": "Fontainebleau e il Salon",
    "when": "1865–1870",
    "mapLabel": "Marlotte",
    "intro": [
      "Con gli amici Sisley dipinge nella foresta di Fontainebleau, a Chailly e a Marlotte. Nel 1866 il Salon accetta due suoi quadri: una strada di villaggio a Marlotte e delle donne che vanno al bosco.",
      "Dal 1866 vive con Eugénie Lescouezec. Il 17 giugno 1867 nasce il figlio Pierre, il 29 gennaio 1869 la figlia Jeanne-Adèle. Nel 1868 il viale di castagni di La Celle-Saint-Cloud è al Salon; nel 1870, due vedute del canale Saint-Martin."
    ]
  },
  "sywar": {
    "place": "Guerra e nuovo inizio",
    "when": "1870–1872",
    "mapLabel": "Bougival",
    "intro": [
      "Nell’autunno del 1870 soldati prussiani devastano la casa di Sisley a Bougival. Vi perde tutto ciò che possiede e si rifugia a Parigi, dove vive l’assedio e la Comune. Nel novembre 1870 cade in guerra il suo amico Frédéric Bazille.",
      "Dopo la guerra l’attività del padre è rovinata. Da allora Sisley ha poco denaro. Nel 1872 dipinge con Monet ad Argenteuil e sulla Senna a Villeneuve-la-Garenne. Nel dicembre 1872 ritrae un’inondazione a Port-Marly."
    ]
  },
  "sylouve": {
    "place": "Louveciennes",
    "when": "1873",
    "mapLabel": "Louveciennes",
    "intro": [
      "Nei primi anni Settanta Sisley abita a Louveciennes, a ovest di Parigi, e dipinge le strade, i giardini e la riva della Senna vicino a Bougival in ogni tempo.",
      "Il 27 dicembre 1873 fonda, con Monet, Renoir, Camille Pissarro, Berthe Morisot e Paul Cézanne, la Société anonyme coopérative des artistes peintres, sculpteurs, graveurs. Vogliono mostrare i propri quadri da sé, senza il Salon."
    ]
  },
  "syimpres": {
    "place": "La prima mostra impressionista",
    "when": "1874",
    "mapLabel": "Nadar",
    "intro": [
      "Il 15 aprile 1874 si apre la prima mostra della società nello studio di Nadar, sul boulevard des Capucines. Sisley presenta cinque paesaggi. Le vendite sono deboli, ma il suo nome sta ormai accanto ai nuovi pittori.",
      "Continua a dipingere a Louveciennes e nel vicino Marly: la nebbia a Voisins, la neve nelle strade, l’acquedotto di Marly."
    ]
  },
  "sylondon": {
    "place": "Sul Tamigi",
    "when": "1874",
    "mapLabel": "Londra",
    "intro": [
      "Dal luglio all’ottobre 1874, grazie al cantante e collezionista Jean-Baptiste Faure, Sisley soggiorna in Inghilterra. A Londra e soprattutto a ovest della città, a Hampton Court e East Molesey, dipinge il Tamigi, i ponti, la chiusa e una regata.",
      "È il suo primo viaggio da pittore in Inghilterra, da quando da giovane doveva impararvi il commercio. In inverno la famiglia si trasferisce a Marly-le-Roi."
    ]
  },
  "symarly": {
    "place": "Marly-le-Roi e Saint-Germain",
    "when": "1875–1876",
    "mapLabel": "Marly",
    "intro": [
      "Da Marly-le-Roi Sisley dipinge la terrazza e la strada verso Saint-Germain, i prati, l’abbeveratoio e la Senna con i mucchi di sabbia a Port-Marly.",
      "I quadri sono chiari e ampi. Sisley resta fedele al paesaggio, mentre amici come Monet e Renoir cercano anche altri motivi."
    ]
  },
  "syfloods": {
    "place": "La piena del 1876",
    "when": "1876",
    "mapLabel": "Port-Marly",
    "intro": [
      "Nel marzo 1876 la Senna straripa di nuovo, più forte che nel 1872. Sisley dipinge le strade allagate di Port-Marly, le case nell’acqua e la strada verso Saint-Germain.",
      "I quadri della piena sono tra le sue opere più note: calmi, precisi e senza dramma. Accanto dipinge anche vedute quotidiane di Marly, una strada, segantini, una riva in autunno."
    ]
  },
  "syloing": {
    "place": "Sèvres e la via verso il Loing",
    "when": "1877–1880",
    "mapLabel": "Veneux-Nadon",
    "intro": [
      "All’inizio del 1877 Sisley si trasferisce a Sèvres. In aprile mostra diciassette paesaggi alla terza mostra impressionista. Dipinge il ponte di Sèvres e la Senna a Suresnes.",
      "Nell’autunno del 1879 visita Moret-sur-Loing, ai margini della foresta di Fontainebleau. All’inizio del 1880 si stabilisce con la famiglia a Veneux-Nadon, vicino a Saint-Mammès e a Moret. Lì inizia un capitolo nuovo e lungo."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sychest65": {
    "text": [
      "Un lungo viale di castagni si addentra in lontananza; la luce cade tra i tronchi sul sentiero. È uno dei primi quadri conservati di Sisley. Il quadro è nel Petit Palais di Parigi."
    ],
    "fact": "1865. Petit Palais, Parigi."
  },
  "sychestord": {
    "text": [
      "Lo stesso paesaggio, un altro sguardo: gli alberi sono più fitti e il sentiero si restringe. Sisley dipinge il viale più volte. Il quadro è nel Museum Ordrupgaard di Charlottenlund."
    ],
    "fact": "1865. Museum Ordrupgaard, Charlottenlund."
  },
  "symonetf": {
    "text": [
      "Tra gli alberi un pittore è seduto al cavalletto. È Claude Monet, l’amico di Sisley dello studio Gleyre. Il quadro è nel Saarlandmuseum di Saarbrücken."
    ],
    "fact": "circa 1865. Saarlandmuseum, Saarbrücken."
  },
  "sychest67": {
    "text": [
      "Sotto un alto cielo d’estate il viale è in una luce calda. Questo quadro era al Salon del 1868. È nella Southampton City Art Gallery."
    ],
    "fact": "1867. Southampton City Art Gallery."
  },
  "sywoods": {
    "text": [
      "Due donne in ampi vestiti camminano su un sentiero; in fondo c’è il bosco. Il quadro fu mostrato al Salon del 1866. È nell’Artizon Museum di Tokyo."
    ],
    "fact": "1866. Artizon Museum, Tokyo."
  },
  "symarlott": {
    "text": [
      "Nella strada di Marlotte ci sono case e una recinzione sotto un cielo ampio. Anche questo quadro fu accettato dal Salon del 1866. È nel Buffalo AKG Art Museum."
    ],
    "fact": "1866. Buffalo AKG Art Museum."
  },
  "sybarges": {
    "text": [
      "Chiatte sono ormeggiate sul canale Saint-Martin a Parigi; gli alberi si riflettono nell’acqua. Nel 1870 Sisley mostrò due vedute del canale al Salon. Questo quadro è nella Collezione Oskar Reinhart di Winterthur."
    ],
    "fact": "1870. Collezione Oskar Reinhart, Winterthur."
  },
  "syearlysnow": {
    "text": [
      "Una neve leggera copre giardini e tetti; il cielo è pallido. Sisley dipinge Louveciennes già prima della guerra. Il quadro è nel Museum of Fine Arts di Boston."
    ],
    "fact": "1870. Museum of Fine Arts, Boston."
  },
  "syvilleneuve": {
    "text": [
      "Un nuovo ponte di ferro attraversa la Senna; sotto passano barche a vela. Sisley dipinge il fiume nel 1872 a Villeneuve-la-Garenne. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1872. Metropolitan Museum of Art, New York."
  },
  "sylouvsnow": {
    "text": [
      "Una strada innevata passa lungo giardini e case; la neve brilla di blu e di bianco. Il quadro è nel Norton Simon Museum di Pasadena."
    ],
    "fact": "1872. Norton Simon Museum, Pasadena."
  },
  "sybougival": {
    "text": [
      "Il fiume curva sotto un cielo chiaro; sulla riva ci sono alberi e un sentiero. Sisley conosce bene Bougival, anche dopo la perdita della casa. Il quadro è nella Yale University Art Gallery di New Haven."
    ],
    "fact": "1872. Yale University Art Gallery, New Haven."
  },
  "syflood72": {
    "text": [
      "La strada davanti a una bottiglieria è sott’acqua e una barca vi passa. Sisley ha datato il quadro al 1872. È nella National Gallery of Art di Washington."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "sycanal72": {
    "text": [
      "Il canale è calmo tra alberi e case; una chiatta è sulla riva. Dopo la guerra Sisley torna al canale che aveva mostrato al Salon del 1870. Il quadro è nel Musée d’Orsay di Parigi."
    ],
    "fact": "1872. Musée d’Orsay, Parigi."
  },
  "systdenis": {
    "text": [
      "Un’isola bassa si estende nella Senna; all’orizzonte si alzano ciminiere di fabbrica. Sisley mostra il paesaggio vicino a Parigi senza ornamento. Il quadro è nel Musée d’Orsay di Parigi."
    ],
    "fact": "1872. Musée d’Orsay, Parigi."
  },
  "sylandlouv": {
    "text": [
      "Un sentiero attraversa campi e alberi; il cielo è ampio e chiaro. Sisley dipinge i dintorni di Louveciennes con colori sereni. Il quadro è nel National Museum of Western Art di Tokyo."
    ],
    "fact": "1873. National Museum of Western Art, Tokyo."
  },
  "syturnroad": {
    "text": [
      "La strada curva dietro gli alberi e alcune figure la percorrono. Sisley coglie il Louveciennes di tutti i giorni. Il quadro è nell’Art Institute of Chicago."
    ],
    "fact": "1873. Art Institute of Chicago."
  },
  "syspringb": {
    "text": [
      "Un verde fresco sta lungo il fiume; la luce è nitida. Sisley dipinge la primavera sulla Senna a Bougival. Il quadro è nel Philadelphia Museum of Art."
    ],
    "fact": "1873. Philadelphia Museum of Art."
  },
  "syautumnb": {
    "text": [
      "Il fogliame è giallo e bruno; il fiume è calmo sotto un cielo morbido. Il quadro è nel Montreal Museum of Fine Arts."
    ],
    "fact": "1873. Montreal Museum of Fine Arts."
  },
  "syvillevray": {
    "text": [
      "Una strada stretta sale tra le case; i muri sono chiari al sole. Ville-d’Avray è vicino a Sèvres, a ovest di Parigi. Il quadro è nel Dallas Museum of Art."
    ],
    "fact": "1873. Dallas Museum of Art."
  },
  "syfog": {
    "text": [
      "Nella nebbia si alzano alberi spogli e una recinzione; una donna percorre il sentiero. Voisins è un borgo di Louveciennes. Il quadro è nel Musée d’Orsay di Parigi."
    ],
    "fact": "1874. Musée d’Orsay, Parigi."
  },
  "sysnowphill": {
    "text": [
      "Oltre un cancello c’è un giardino innevato; le case sono silenziose. Sisley dipinge la neve con toni chiari e freddi. Il quadro è nella Phillips Collection di Washington."
    ],
    "fact": "1874. The Phillips Collection, Washington."
  },
  "sychenil": {
    "text": [
      "La piccola piazza di Marly è sotto la neve; le case la circondano con fermezza. Sisley dipinge il luogo in cui la famiglia si trasferisce nell’inverno del 1874. Il quadro è nel Musée des Beaux-Arts di Rouen."
    ],
    "fact": "1874. Musée des Beaux-Arts, Rouen."
  },
  "syroadlouv": {
    "text": [
      "Un sentiero sabbioso passa lungo muri e alberi, verso lontano. Sisley mostra la strada quotidiana, senza evento. Il quadro è nei Musei Reali di Belle Arti di Bruxelles."
    ],
    "fact": "1874. Musei Reali di Belle Arti, Bruxelles."
  },
  "syaqueduct": {
    "text": [
      "Il grande acquedotto di Marly attraversa il paesaggio; il villaggio è sotto. L’opera risale al tempo del re Luigi XIV. Il quadro è nel Toledo Museum of Art."
    ],
    "fact": "1874. Toledo Museum of Art."
  },
  "sythames": {
    "text": [
      "Il Tamigi si stende ampio sotto un cielo mosso; sulla riva ci sono alberi. Sisley dipinge il fiume inglese nell’estate del 1874. Il quadro è nel Clark Art Institute di Williamstown."
    ],
    "fact": "1874. Clark Art Institute, Williamstown."
  },
  "symolesey": {
    "text": [
      "L’acqua cade sulla chiusa; c’è gente sulla passerella. Sisley coglie la luce sull’acqua in movimento. Il quadro è nelle National Galleries of Scotland di Edimburgo."
    ],
    "fact": "1874. National Galleries of Scotland, Edimburgo."
  },
  "syroadhamp": {
    "text": [
      "Un sentiero porta verso gli alberi e il parco del palazzo; il cielo è chiaro. Sisley dipinge i dintorni di Hampton Court. Il quadro è nella Neue Pinakothek di Monaco di Baviera."
    ],
    "fact": "1874. Neue Pinakothek, Monaco di Baviera."
  },
  "syregatta": {
    "text": [
      "Barche attraversano il Tamigi; sulla riva gli spettatori stanno sotto gli alberi. Sisley dipinge la festa sull’acqua. Il quadro è nel Musée d’Orsay di Parigi."
    ],
    "fact": "1874. Musée d’Orsay, Parigi."
  },
  "sybrhamp": {
    "text": [
      "Il ponte attraversa il Tamigi in più archi; ci sono barche sulla riva. Sisley sceglie uno sguardo profondo sull’acqua. Il quadro è nel Wallraf-Richartz-Museum di Colonia."
    ],
    "fact": "1874. Wallraf-Richartz-Museum, Colonia."
  },
  "syterrace": {
    "text": [
      "Dall’alto si vedono l’ansa della Senna e la pianura ampia; la primavera illumina la campagna. È uno dei paesaggi più grandi di Sisley. Il quadro è nel Walters Art Museum di Baltimore."
    ],
    "fact": "1875. Walters Art Museum, Baltimore."
  },
  "syversailles": {
    "text": [
      "Una strada dritta attraversa campi e alberi; il cielo occupa la maggior parte del quadro. Sisley dipinge la strada vicino a Marly. Il quadro è nel J. Paul Getty Museum di Los Angeles."
    ],
    "fact": "1875. J. Paul Getty Museum, Los Angeles."
  },
  "symeadow": {
    "text": [
      "Un prato verde si stende sotto un cielo leggero; gli alberi chiudono il campo. Sisley fissa la superficie calma, senza una storia. Il quadro è nella National Gallery of Art di Washington."
    ],
    "fact": "1875. National Gallery of Art, Washington."
  },
  "syinstitut": {
    "text": [
      "Nella foschia si vedono l’Institut de France e il Pont des Arts; il fiume è in primo piano. Qui Sisley dipinge una veduta di Parigi. Il quadro è nell’Art Institute of Chicago."
    ],
    "fact": "1875. Art Institute of Chicago."
  },
  "sypiles": {
    "text": [
      "Sulla riva ci sono alti mucchi di sabbia; una chiatta lavora sul fiume. Sisley mostra il lavoro sul fiume, non solo la bella veduta. Il quadro è nell’Art Institute of Chicago."
    ],
    "fact": "1875. Art Institute of Chicago."
  },
  "sywatering": {
    "text": [
      "Un abbeveratoio poco profondo sta davanti a case e alberi; il cielo è pallido. L’abbeveratoio di Marly era un luogo noto ai margini del parco. Il quadro è nell’Art Institute of Chicago."
    ],
    "fact": "1875. Art Institute of Chicago."
  },
  "syfloodrouen": {
    "text": [
      "L’acqua arriva alle case; una barca attraversa la strada. Sisley dipinge la grande piena del marzo 1876 con calma e chiarezza. Il quadro è nel Musée des Beaux-Arts di Rouen."
    ],
    "fact": "1876. Musée des Beaux-Arts, Rouen."
  },
  "syfloodhou": {
    "text": [
      "La strada verso Saint-Germain è allagata; gli alberi stanno nell’acqua. Sisley sceglie una veduta ampia della piena. Il quadro è nel Museum of Fine Arts di Houston."
    ],
    "fact": "1876. Museum of Fine Arts, Houston."
  },
  "symarlyview": {
    "text": [
      "Da un pendio si vede Marly-le-Roi; le case sono tra gli alberi. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1876. Metropolitan Museum of Art, New York."
  },
  "sysawyers": {
    "text": [
      "Due uomini segano un tronco in una fossa; dietro di loro c’è il villaggio. Sisley fissa un lavoro quotidiano. Il quadro è nel Petit Palais di Parigi."
    ],
    "fact": "1876. Petit Palais, Parigi."
  },
  "sybankaut": {
    "text": [
      "La riva brilla di colori autunnali; il fiume è calmo accanto. Il quadro è nello Städel Museum di Francoforte."
    ],
    "fact": "1876. Städel Museum, Francoforte."
  },
  "systreetmarly": {
    "text": [
      "Una strada sale tra muri e alberi; una figura cammina davanti. Sisley dipinge Marly senza festa e senza piena. Il quadro è nella Kunsthalle Mannheim."
    ],
    "fact": "1876. Kunsthalle Mannheim."
  },
  "sysevres": {
    "text": [
      "Il ponte di Sèvres attraversa la Senna; il cielo è ampio e chiaro. Dal 1877 Sisley abita a Sèvres e dipinge il fiume ancora e ancora. Il quadro è nella Galleria Nazionale di Praga."
    ],
    "fact": "1877. Galleria Nazionale, Praga."
  },
  "sysuresnes": {
    "text": [
      "Il fiume sta sotto un cielo alto; sulla riva ci sono alberi e case. Suresnes è di fronte al ponte di Sèvres. Il quadro è nel Musée d’Orsay di Parigi."
    ],
    "fact": "1877. Musée d’Orsay, Parigi."
  },
  "syrest": {
    "text": [
      "Ai margini di un bosco una figura riposa presso un ruscello; la luce cade tra le foglie. Qui Sisley unisce il bosco e l’acqua. Il quadro è nel Musée d’Orsay di Parigi."
    ],
    "fact": "1878. Musée d’Orsay, Parigi."
  },
  "syallee": {
    "text": [
      "Un viale chiaro di castagni si apre verso un cielo luminoso. Anni dopo i primi viali di La Celle-Saint-Cloud, Sisley torna a questo motivo. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1878. Metropolitan Museum of Art, New York."
  },
  "syfirstsnow": {
    "text": [
      "Una neve leggera copre il villaggio; il cielo è grigio-rosa. Veneux-Nadon, vicino a Moret-sur-Loing, diventerà nel 1880 la casa di Sisley. Il quadro è nella National Gallery of Art di Washington."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "sybanksby": {
    "text": [
      "La riva a By è verde; il fiume curva tranquillo attraverso il quadro. By è vicino a Veneux-Nadon, dove Sisley si trasferisce nel 1880. Il quadro è nel Clark Art Institute di Williamstown."
    ],
    "fact": "1880. Clark Art Institute, Williamstown."
  },
  "systmammes": {
    "text": [
      "Una strada segue il fiume; gli alberi sono nella luce e il cielo è alto. Saint-Mammès sta alla confluenza del Loing e della Senna. Il quadro è nel Dallas Museum of Art."
    ],
    "fact": "1880. Dallas Museum of Art."
  },
  "sytimber": {
    "text": [
      "Sul fiume ci sono tronchi e travi; le chiatte attendono il carico. Sisley dipinge il luogo di lavoro, non solo il paesaggio. Il quadro è nell’Hammer Museum di Los Angeles."
    ],
    "fact": "1880. Hammer Museum, Los Angeles."
  },
  "syhills": {
    "text": [
      "Da un’altura si vedono i campi e Moret-sur-Loing nella luce del mattino. Qui, ai margini della foresta di Fontainebleau, Sisley resterà negli anni a venire. Il quadro è nel Princeton University Art Museum."
    ],
    "fact": "1880. Princeton University Art Museum."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
