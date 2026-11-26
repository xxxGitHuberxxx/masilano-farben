// v8.4 Italian content for Ferdinand Hodler’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts. Overwrites P.paths.hodler with whole-path meta.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Collezione non determinata",
  "Privatbesitz": "Collezione privata",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "Kunstmuseum Bern": "Kunstmuseum Bern",
  "Kunstmuseum Basel": "Kunstmuseum Basel",
  "Kunsthalle Mannheim": "Kunsthalle Mannheim",
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Städel Museum, Frankfurt": "Städel Museum, Francoforte"
});
  P.works = Object.assign(P.works || {}, {
  "hstprex": {
    "title": "Il Lago Lemano da Saint-Prex",
    "museum": "Collezione non determinata"
  },
  "hisenfluh": {
    "title": "La Jungfrau dall’Isenfluh",
    "museum": "Collezione non determinata"
  },
  "hkiental": {
    "title": "Il Kiental con il Blümlisalp",
    "museum": "Collezione non determinata"
  },
  "hwald02": {
    "title": "Bosco con un torrente di montagna",
    "museum": "Collezione non determinata"
  },
  "hfromberg": {
    "title": "Il Fromberghorn da Reichenbach",
    "museum": "Collezione non determinata"
  },
  "hthunless": {
    "title": "Il lago di Thun da Leissigen",
    "museum": "Collezione non determinata"
  },
  "hthunsym04": {
    "title": "Lago di Thun con riflesso simmetrico prima dell’alba",
    "museum": "Collezione non determinata"
  },
  "hthunstock04": {
    "title": "Lago di Thun con la catena dello Stockhorn",
    "museum": "Collezione non determinata"
  },
  "hwaldbach04": {
    "title": "Torrente del bosco presso Leissigen",
    "museum": "Collezione non determinata"
  },
  "hthunsym05": {
    "title": "Lago di Thun con riflesso simmetrico",
    "museum": "Collezione non determinata"
  },
  "hchex04": {
    "title": "Il Lago Lemano da Chexbres",
    "museum": "Collezione non determinata"
  },
  "chexbres": {
    "title": "Il Lago Lemano da Chexbres",
    "museum": "Kunstmuseum Basel"
  },
  "hgrammont05": {
    "title": "Il Grammont",
    "museum": "Collezione non determinata"
  },
  "hgrammont06": {
    "title": "Il Grammont",
    "museum": "Collezione non determinata"
  },
  "hsavoyer06": {
    "title": "Il Lago Lemano con le Alpi di Savoia",
    "museum": "Collezione non determinata"
  },
  "hrhythm08": {
    "title": "Paesaggio ritmico sul Lago Lemano",
    "museum": "Collezione non determinata"
  },
  "hlutschine": {
    "title": "La Lütschine Nera",
    "museum": "Collezione non determinata"
  },
  "hkirsch05": {
    "title": "Ciliegio in fiore",
    "museum": "Collezione non determinata"
  },
  "htanne05": {
    "title": "Abete presso Chamby",
    "museum": "Collezione non determinata"
  },
  "hschnee07": {
    "title": "Neve in Engadina",
    "museum": "Collezione non determinata"
  },
  "eiger": {
    "title": "L’Eiger, il Mönch e la Jungfrau sopra il mare di nebbia",
    "museum": "Collezione privata"
  },
  "heigermond": {
    "title": "L’Eiger, il Mönch e la Jungfrau al chiaro di luna",
    "museum": "Collezione non determinata"
  },
  "heigermorgen": {
    "title": "L’Eiger, il Mönch e la Jungfrau al sole del mattino",
    "museum": "Collezione non determinata"
  },
  "hjungf08": {
    "title": "La Jungfrau sopra il mare di nebbia",
    "museum": "Collezione non determinata"
  },
  "habendnebel": {
    "title": "Nebbia serale sul lago di Thun",
    "museum": "Collezione non determinata"
  },
  "hjenastud": {
    "title": "Studente che indossa il cappotto",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hjena": {
    "title": "Partenza per le guerre di liberazione",
    "museum": "Städel Museum, Francoforte"
  },
  "hmaeher": {
    "title": "Il mietitore",
    "museum": "Collezione non determinata"
  },
  "hholz": {
    "title": "Il boscaiolo",
    "museum": "Von der Heydt-Museum, Wuppertal"
  },
  "heinamut": {
    "title": "L’unanimità",
    "museum": "Collezione non determinata"
  },
  "hthunsym09": {
    "title": "Lago di Thun con riflesso simmetrico",
    "museum": "Collezione non determinata"
  },
  "hodler": {
    "title": "Lago di Thun con la catena dello Stockhorn",
    "museum": "Kunsthalle Mannheim"
  },
  "niesen": {
    "title": "Il Niesen",
    "museum": "Collezione privata"
  },
  "hthunniesen": {
    "title": "Lago di Thun con il Niesen",
    "museum": "Collezione non determinata"
  },
  "hthunstock11": {
    "title": "Lago di Thun con la catena dello Stockhorn",
    "museum": "Von der Heydt-Museum, Wuppertal"
  },
  "hthunabend12": {
    "title": "Lago di Thun con la catena dello Stockhorn alla sera",
    "museum": "Collezione non determinata"
  },
  "hmorhardt": {
    "title": "Ritratto di Mathias Morhardt",
    "museum": "Collezione non determinata"
  },
  "hgertrud12": {
    "title": "Ritratto di Gertrud Müller",
    "museum": "Collezione non determinata"
  },
  "hself12": {
    "title": "Autoritratto",
    "museum": "Collezione non determinata"
  },
  "hselfrosen": {
    "title": "Autoritratto con rose",
    "museum": "Collezione non determinata"
  },
  "hwille": {
    "title": "Il generale Ulrich Wille",
    "museum": "Kunstmuseum Bern"
  },
  "hself16": {
    "title": "Autoritratto",
    "museum": "Collezione non determinata"
  },
  "hselfkittel": {
    "title": "Autoritratto con il camice verde",
    "museum": "Collezione non determinata"
  },
  "hsonne15": {
    "title": "Tramonto sul Lago Lemano",
    "museum": "Collezione non determinata"
  },
  "hweisshorn15": {
    "title": "Il Weisshorn da Montana",
    "museum": "Collezione non determinata"
  },
  "hdents16": {
    "title": "Le Dents du Midi",
    "museum": "Collezione non determinata"
  },
  "hblanches16": {
    "title": "Le Dents Blanches presso Champéry al sole del mattino",
    "museum": "Collezione non determinata"
  },
  "hbach16": {
    "title": "Torrente di montagna presso Champéry",
    "museum": "Collezione non determinata"
  },
  "hcaux17": {
    "title": "Il Lago Lemano da Caux",
    "museum": "Collezione non determinata"
  },
  "hwolken17": {
    "title": "Paesaggio presso Caux con nubi che si alzano",
    "museum": "Collezione non determinata"
  },
  "hgrammont17": {
    "title": "Il Grammont al sole del mattino",
    "museum": "Collezione non determinata"
  },
  "hmbdawn": {
    "title": "Il Lago Lemano con il Monte Bianco all’alba",
    "museum": "Collezione non determinata"
  },
  "hmbred": {
    "title": "Il Lago Lemano con il Monte Bianco nell’aurora",
    "museum": "Collezione non determinata"
  },
  "hmblight": {
    "title": "Il Lago Lemano con il Monte Bianco alla luce del mattino",
    "museum": "Collezione non determinata"
  },
  "hmbafternoon": {
    "title": "Il Lago Lemano con il Monte Bianco nel pomeriggio",
    "museum": "Collezione non determinata"
  },
  "hmbbefore": {
    "title": "Il Lago Lemano con il Monte Bianco prima del levar del sole",
    "museum": "Collezione non determinata"
  },
  "hmbmarch": {
    "title": "Il Lago Lemano con il Monte Bianco al primo mattino",
    "museum": "Collezione non determinata"
  },
  "hberthe18": {
    "title": "Ritratto di Berthe Hodler",
    "museum": "Collezione non determinata"
  }
});
  P.paths = P.paths || {};
  P.paths.hodler = {
  "title": "Il percorso di vita di Ferdinand Hodler",
  "life": "1853–1918",
  "part": "Parti 1–2 · 1853–1918",
  "subtitle": "Da Berna a Ginevra, ai laghi e fino al Monte Bianco",
  "intro": "Viaggia con Ferdinand Hodler attraverso tutta la sua vita: dall’infanzia a Berna e dalla perdita precoce della famiglia, passando per l’apprendistato presso Ferdinand Sommer a Thun, la formazione con Barthélemy Menn a Ginevra, il viaggio a Madrid, il realismo degli anni Ottanta e la svolta simbolista intorno a «La notte» – che ricordiamo solo nel racconto della tappa – fino ai paesaggi parallelisti del lago di Thun e del Lago Lemano, agli affreschi di Jena e di Hannover e agli ultimi sguardi dal Quai du Mont-Blanc. Tappe brevi, quadri da colorare e una voce da una lettera del 1907. Hodler muore a Ginevra il 19 maggio 1918.",
  "ending": [
    "Nella primavera del 1918, dal balcone e dalla finestra del suo appartamento al Quai du Mont-Blanc 29, Hodler dipinge ancora e ancora il Lago Lemano con il Monte Bianco, a diverse ore del giorno. La città di Ginevra lo nomina cittadino onorario.",
    "Il 19 maggio 1918 Ferdinand Hodler muore a Ginevra, a sessantacinque anni, in quello stesso appartamento. Restano i paesaggi dei laghi e delle montagne, i ritratti, gli affreschi – e un’opera che ha fatto del parallelismo il proprio principio."
  ],
  "epilogue": "Ferdinand Hodler muore a Ginevra il 19 maggio 1918, nel suo appartamento al Quai du Mont-Blanc 29. Poco prima era stato nominato cittadino onorario della città. Restano i paesaggi parallelisti del lago di Thun e del Lago Lemano, le vette sopra il mare di nebbia, gli affreschi di Jena e di Hannover e gli ultimi sguardi sul Monte Bianco."
};
  P.stations = Object.assign(P.stations || {}, {
  "hodlerwien": {
    "place": "Vienna e l’Oberland bernese · La svolta",
    "when": "1901–1904",
    "mapLabel": "Vienna",
    "intro": [
      "Nel 1902 Hodler allestisce uno studio in Rue du Rhône 29 a Ginevra. Nel 1903 è a Vienna e diventa amico di Gustav Klimt, Koloman Moser e Josef Hoffmann. Nel 1904 è ospite d’onore della 19ª Secessione viennese; con ciò la svolta internazionale è compiuta.",
      "Al tempo stesso continua a dipingere paesaggi: il Lago Lemano da Saint-Prex, la Jungfrau dall’Isenfluh, il Kiental e il Fromberghorn. Le forme si fanno più sobrie, la ripetizione più chiara."
    ]
  },
  "hodlerleissigen": {
    "place": "Leissigen · Il lago di Thun",
    "when": "1904–1905",
    "mapLabel": "Leissigen",
    "intro": [
      "Nel 1904 Hodler lavora al lago di Thun, spesso da Leissigen. Nascono vedute del lago con la catena dello Stockhorn, riflessi simmetrici prima dell’alba e il torrente del bosco proprio davanti al villaggio.",
      "Il riflesso simmetrico diventa un nucleo del suo parallelismo. Nel 1905 viaggia in Italia e studia tra gli altri Giotto; nello stesso anno dipinge di nuovo il lago come uno specchio calmo."
    ]
  },
  "hodlerchexbres": {
    "place": "Chexbres e il Lago Lemano",
    "when": "1904–1908",
    "mapLabel": "Chexbres",
    "intro": [
      "Dalle alture sopra Chexbres, Hodler dipinge il Lago Lemano in larghe fasce parallele. Nel 1904 e nel 1905 nascono versioni di questa veduta; si aggiungono il Grammont sulla riva meridionale, nel 1905 e nel 1906, e la vista sulle Alpi di Savoia.",
      "Nel 1908 «Paesaggio ritmico sul Lago Lemano» spinge lontano il parallelismo. Nell’ottobre del 1907 Hodler aveva ringraziato Carl Albert Loosli per un articolo che aveva colto questo principio."
    ]
  },
  "hodlerbaeume": {
    "place": "Alberi, torrenti e l’Engadina",
    "when": "1905–1907",
    "mapLabel": "Alberi",
    "intro": [
      "Oltre alle vaste vedute dei laghi, Hodler dipinge alberi isolati e acque vicine: la Lütschine Nera, un ciliegio in fiore, un abete presso Chamby, sopra Montreux.",
      "Nel 1907 nasce «Neve in Engadina». Anche lontano dai grandi laghi, la chiara stratificazione di primo piano, bosco e vetta resta il suo tema."
    ]
  },
  "hodleroberland": {
    "place": "Oberland bernese · L’Eiger, il Mönch e la Jungfrau",
    "when": "1908",
    "mapLabel": "Oberland",
    "intro": [
      "Nel 1908 Hodler dipinge l’Eiger, il Mönch e la Jungfrau sopra il mare di nebbia, al chiaro di luna e al sole del mattino, tra gli altri punti dalla Schynige Platte. Si aggiunge la nebbia serale sul lago di Thun.",
      "Nello stesso anno ha mostre a Jena e a Francoforte, diventa presidente centrale della Società dei pittori, scultori e architetti svizzeri e incontra Valentine Godé-Darel."
    ]
  },
  "hodlermurale": {
    "place": "Jena e Hannover · Il lavoro e gli affreschi",
    "when": "1908–1913",
    "mapLabel": "Jena",
    "intro": [
      "Nel 1897 Hodler aveva vinto il concorso per gli affreschi di Marignano nel Landesmuseum di Zurigo. Seguì una viva controversia artistica; solo quando il Consiglio federale approvò uno dei progetti l’impresa poté continuare. L’ultima versione è del 1899. Nel 1908-1909 riceve a Jena l’incarico della «Partenza degli studenti di Jena per la guerra di liberazione del 1813».",
      "Nel 1911 «Il mietitore» e «Il boscaiolo» compaiono su banconote svizzere. Nello stesso anno riceve l’incarico di «L’unanimità» per il Nuovo Municipio di Hannover, compiuto nel 1913. Nel 1909 muore Augustine Dupin. Nel 1910 Hodler allestisce un secondo studio agli Acacias e riceve la laurea honoris causa dell’Università di Basilea."
    ]
  },
  "hodlerthun": {
    "place": "Lago di Thun · Stockhorn e Niesen",
    "when": "1909–1913",
    "mapLabel": "Thun",
    "intro": [
      "Nell’estate del 1910 Hodler lavora al lago di Thun a serie dello Stockhorn e del Niesen. Il riflesso simmetrico del 1909, la versione di Mannheim della catena dello Stockhorn e il Niesen da Heustrich sotto la pioggia appartengono a questi anni.",
      "Fissa lo stesso motivo nella luce di novembre, alla sera e in inverno. La ripetizione non è un ripiego, è il principio."
    ]
  },
  "hodlerbildnisse": {
    "place": "Ginevra · Ritratti e famiglia",
    "when": "1911–1917",
    "mapLabel": "Ritratti",
    "intro": [
      "Accanto ai paesaggi, in questi anni nascono molti ritratti: il critico Mathias Morhardt, la collezionista Gertrud Müller, il figlio Hector, autoritratti, nel 1916 il generale Ulrich Wille. Nel 1913 nasce la figlia Pauline-Valentine, dalla relazione con Valentine Godé-Darel. Nell’autunno dello stesso anno Hodler è al Salon d’Automne di Parigi, incontra Auguste Rodin e viene nominato ufficiale della Legion d’onore. La famiglia si trasferisce al Quai du Mont-Blanc 29; l’appartamento riceve mobili di Josef Hoffmann.",
      "Nel 1914 Hodler firma la protesta contro il bombardamento della cattedrale di Reims; le associazioni di artisti tedesche lo escludono allora. Il 25 gennaio 1915 Valentine Godé-Darel muore a Vevey. Nel 1916 e nel 1917 Hodler insegna una classe di pittura all’École des Beaux-Arts di Ginevra. Nel 1917 il Kunsthaus Zürich gli dedica una grande retrospettiva; nello stesso anno è colpito da un edema polmonare."
    ]
  },
  "hodlerchampery": {
    "place": "Champéry, Montana e Caux",
    "when": "1915–1917",
    "mapLabel": "Caux",
    "intro": [
      "Nel 1915 Hodler dipinge un tramonto sul Lago Lemano e il Weisshorn da Montana. Nel 1916 e nel 1917 soggiorna a Champéry e a Montana, dove il figlio Hector si riprende da una tubercolosi. Nascono le Dents du Midi, le Dents Blanches, un torrente di montagna presso Champéry.",
      "Nel 1917 guarda il Lago Lemano da Caux, sopra Montreux, dipinge nubi che si alzano e torna al Grammont al sole del mattino."
    ]
  },
  "hodlermontblanc": {
    "place": "Ginevra · Quai du Mont-Blanc",
    "when": "1918",
    "mapLabel": "1918",
    "intro": [
      "Nella primavera del 1918, dalla finestra e dal balcone del suo appartamento al Quai du Mont-Blanc 29, Hodler dipinge il Lago Lemano con il Monte Bianco, all’alba, nell’aurora, alla luce del mattino, nel pomeriggio, prima del levar del sole. La città di Ginevra lo nomina cittadino onorario.",
      "Nasce anche un ritratto della moglie Berthe. Il 19 maggio 1918 Ferdinand Hodler muore a Ginevra, in quello stesso appartamento, a sessantacinque anni."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hstprex": {
    "text": [
      "Da Saint-Prex il Lago Lemano si stende in fasce orizzontali calme, le montagne del versante savoiardo come una silhouette nitida.",
      "Il quadro è del 1901, un anno dopo la medaglia d’oro a Parigi. Hodler cerca il paesaggio in poche linee ripetute."
    ],
    "fact": "1901. Collezione non determinata."
  },
  "hisenfluh": {
    "text": [
      "Dall’Isenfluh la Jungfrau si erge salda sopra le alture che la precedono, il cielo chiaro e ampio.",
      "Nel 1902 Hodler allestisce uno studio in Rue du Rhône 29 a Ginevra. Al tempo stesso torna sempre nell’Oberland bernese."
    ],
    "fact": "1902. Collezione non determinata."
  },
  "hkiental": {
    "text": [
      "Il Kiental si apre verso il basso; sopra, il Blümlisalp si stende in forme calme e a gradini.",
      "Il quadro è datato 1902. Hodler semplifica la valle, il versante e la vetta finché la ripetizione delle linee diventa essa stessa il motivo."
    ],
    "fact": "1902. Collezione non determinata."
  },
  "hwald02": {
    "text": [
      "Un torrente scorre tra tronchi e pietre; la luce cade a fasce nel bosco.",
      "Anche dopo il 1900 il torrente di montagna resta un motivo. Hodler osserva il fluire e i tronchi verticali l’uno accanto all’altro."
    ],
    "fact": "1902. Collezione non determinata."
  },
  "hfromberg": {
    "text": [
      "Il Fromberghorn s’innalza come una forma nitida, quasi triangolare, sopra la valle di Reichenbach.",
      "Il quadro è del 1903. Nello stesso anno Hodler è a Vienna e diventa amico di Gustav Klimt, Koloman Moser e Josef Hoffmann."
    ],
    "fact": "1903. Collezione non determinata."
  },
  "hthunless": {
    "text": [
      "Da Leissigen il lago di Thun si stende in calma, le montagne dietro in una catena serena.",
      "Nel 1904 Hodler è ospite d’onore della 19ª Secessione viennese; la svolta internazionale è già là. Nello stesso anno lavora al lago di Thun, spesso da Leissigen."
    ],
    "fact": "1904. Collezione non determinata."
  },
  "hthunsym04": {
    "text": [
      "Prima dell’alba la catena montuosa si riflette quasi esattamente nel lago; il cielo e l’acqua dividono il quadro in fasce calme.",
      "Il riflesso simmetrico è un nucleo del parallelismo di Hodler: il paesaggio diventa un ordine di linee ripetute."
    ],
    "fact": "1904. Collezione non determinata."
  },
  "hthunstock04": {
    "text": [
      "La catena dello Stockhorn si stende sopra il lago luminoso; in primo piano pietre e una riva bassa.",
      "Hodler dipinge questo motivo per decenni, in versioni sempre più chiare. Nel 1904 nasce una delle prime varianti costruite con rigore."
    ],
    "fact": "1904. Collezione non determinata."
  },
  "hwaldbach04": {
    "text": [
      "Un torrente scende tra pietre muschiose e tronchi, l’acqua chiara, il bosco denso.",
      "Oltre alle vaste vedute del lago, nel 1904 Hodler fissa anche il torrente del bosco vicino, a Leissigen."
    ],
    "fact": "1904. Collezione non determinata."
  },
  "hthunsym05": {
    "text": [
      "Di nuovo il lago si stende come uno specchio: le montagne in alto, la loro ripetizione in basso, in una simmetria calma.",
      "Il quadro è datato 1905. Nello stesso anno Hodler viaggia in Italia e studia tra gli altri Giotto."
    ],
    "fact": "1905. Collezione non determinata."
  },
  "hchex04": {
    "text": [
      "Dalle alture sopra Chexbres il Lago Lemano si stende in larghe fasce di colore, le montagne di fronte come una catena calma.",
      "Chexbres, sopra il lago, diventa per Hodler un punto di vista ricorrente. Nel 1904 nasce una versione precoce di questo sguardo."
    ],
    "fact": "1904. Collezione non determinata."
  },
  "chexbres": {
    "text": [
      "Il lago, la riva e il cielo si stendono in fasce parallele calme: turchese, violetto, un cielo chiaro.",
      "La versione del 1905 è conservata al Kunstmuseum Basel. Hodler riduce il paesaggio a grandi fasce nitide."
    ],
    "fact": "1905. Kunstmuseum Basel."
  },
  "hgrammont05": {
    "text": [
      "Il Grammont s’innalza come una forma larga e nitida sopra il Lago Lemano, il versante in pochi campi di colore.",
      "Hodler dipinge più volte la montagna sulla riva meridionale del lago. La versione del 1905 lo mostra saldo e semplificato."
    ],
    "fact": "1905. Collezione non determinata."
  },
  "hgrammont06": {
    "text": [
      "Un anno dopo il Grammont si erge di nuovo sopra il lago, la forma ancora più determinata, il lago come una superficie calma.",
      "Ripetere la stessa montagna in momenti diversi fa parte del metodo di Hodler: lo stesso motivo, un ordine nuovo."
    ],
    "fact": "1906. Collezione non determinata."
  },
  "hsavoyer06": {
    "text": [
      "Il lago si stende per tutta la larghezza del quadro; di fronte, le Alpi di Savoia in una catena calma e dentellata.",
      "Questa veduta sul Lago Lemano è del circa 1906. Il versante francese di fronte diventa una silhouette nitida."
    ],
    "fact": "Verso il 1906. Collezione non determinata."
  },
  "hrhythm08": {
    "text": [
      "La riva, l’acqua e le montagne ondeggiano in linee ripetute e ritmiche attraverso la superficie, quasi senza dettagli.",
      "Il quadro del 1908 spinge lontano il parallelismo: il paesaggio diventa un ritmo. L’anno prima Hodler ringrazia Carl Albert Loosli per un articolo che aveva colto proprio questo principio."
    ],
    "fact": "1908. Collezione non determinata.",
    "quote": {
      "text": "Finalmente le rispedisco il suo articolo, il suo capolavoro. È proprio eccellente, ben pensato e ben scritto. In poche parole si è espresso in modo molto felice a proposito del parallelismo. Credo che qualcuno mi abbia finalmente compreso.",
      "cite": "Lettera a C. A. Loosli, 10 ottobre 1907. Musée d’art et d’histoire, Neuchâtel."
    }
  },
  "hlutschine": {
    "text": [
      "La Lütschine Nera scorre tra rocce e bosco, l’acqua chiara sul letto scuro.",
      "Il fiume viene dall’Oberland, vicino a Grindelwald e Zweilütschinen. Nel 1905 Hodler fissa il suo corso in movimenti chiari e ripetuti."
    ],
    "fact": "1905. Collezione non determinata."
  },
  "hkirsch05": {
    "text": [
      "Un ciliegio si erge in piena fioritura, la chioma chiara, il tronco saldo e isolato.",
      "Per Hodler gli alberi isolati sono quasi come figure. Il ciliegio in fiore del 1905 appartiene alla stessa serie dei precedenti castagni."
    ],
    "fact": "1905. Collezione non determinata."
  },
  "htanne05": {
    "text": [
      "Un abete isolato si erge su un fondo chiaro, i rami nitidamente disposti, il tronco dritto.",
      "Chamby si trova sopra Montreux, non lontano dal Lago Lemano. Hodler isola l’albero finché agisce come un segno."
    ],
    "fact": "1905. Collezione non determinata."
  },
  "hschnee07": {
    "text": [
      "Un altopiano invernale in Engadina: neve, boschi scuri e, sopra, una catena montuosa calma.",
      "Il quadro è datato 1907. Anche lontano dai grandi laghi, Hodler cerca la chiara stratificazione di primo piano, bosco e vetta."
    ],
    "fact": "1907. Collezione non determinata."
  },
  "eiger": {
    "text": [
      "Da un mare di nubi s’innalzano l’Eiger, il Mönch e la Jungfrau, come forme nitide e ritmiche.",
      "La versione del 1908 è tra i quadri alpini più noti di Hodler. Il motivo ricorda il «Viandante sul mare di nebbia» di Friedrich, ma fa a meno di una figura in primo piano."
    ],
    "fact": "1908. Collezione privata."
  },
  "heigermond": {
    "text": [
      "Lo stesso gruppo di tre si erge al chiaro di luna, le vette pallide, il cielo cupo e fermo.",
      "Nel 1908 Hodler dipinge il gruppo della Jungfrau a diverse ore del giorno e della notte, tra gli altri punti dalla Schynige Platte."
    ],
    "fact": "1908. Collezione non determinata."
  },
  "heigermorgen": {
    "text": [
      "Al sole del mattino brillano le tre vette, i fianchi nitidamente staccati l’uno dall’altro.",
      "La serie del 1908 mostra come Hodler trasformi un motivo con la luce e l’ora, senza abbandonare la forma fondamentale."
    ],
    "fact": "1908. Collezione non determinata."
  },
  "hjungf08": {
    "text": [
      "La Jungfrau sola si erge sopra la nebbia, una forma salda e chiara sopra la morbida copertura di nubi.",
      "Oltre al gruppo di tre, nel 1908 Hodler isola anche la vetta unica. La semplificazione va ancora più lontano."
    ],
    "fact": "1908. Collezione non determinata."
  },
  "habendnebel": {
    "text": [
      "Alla sera la nebbia si stende sul lago di Thun; le montagne dietro sono ormai solo ombre calme.",
      "Nel 1908 anche il lago stesso diventa un quadro di nebbia. La luce e il vapore allentano i contorni; l’ordine resta."
    ],
    "fact": "1908. Collezione non determinata."
  },
  "hjenastud": {
    "text": [
      "Un giovane indossa il cappotto, saldo nel movimento; sullo sfondo una fila di piccole figure all’orizzonte.",
      "La litografia del 1908 appartiene alla cerchia dell’affresco di Jena. Hodler studia gesti isolati prima che nasca la grande composizione. Il foglio è conservato al Rijksmuseum di Amsterdam."
    ],
    "fact": "1908. Rijksmuseum, Amsterdam."
  },
  "hjena": {
    "text": [
      "Soldati a cavallo e a piedi, cavalli, una donna con un bambino: uno studio del movimento di una truppa che parte.",
      "Nel 1908-1909 nasce a Jena l’affresco «Partenza degli studenti di Jena per la guerra di liberazione del 1813». Questo disegno dello Städel Museum di Francoforte fissa la composizione."
    ],
    "fact": "1908. Städel Museum, Francoforte."
  },
  "hmaeher": {
    "text": [
      "Un mietitore sta con la falce in un movimento ampiamente spiegato, il corpo nitidamente profilato, il gesto ripetuto e saldo.",
      "Nel 1911 motivi da «Il mietitore» e «Il boscaiolo» compaiono su banconote svizzere. Così le figure diventano note a un vasto pubblico."
    ],
    "fact": "1910. Collezione non determinata."
  },
  "hholz": {
    "text": [
      "Un boscaiolo alza la scure, le gambe saldamente divaricate, il colpo come un grande movimento nitido.",
      "Come il mietitore, il boscaiolo appartiene alle figure del lavoro in Hodler. Nel 1910 nascono queste versioni austere, quasi da manifesto."
    ],
    "fact": "1910. Von der Heydt-Museum, Wuppertal."
  },
  "heinamut": {
    "text": [
      "Un gruppo denso di uomini alza le braccia; al centro una figura sta su un piedistallo con le braccia aperte.",
      "Nel 1911 Hodler riceve l’incarico dell’affresco «L’unanimità» per il Nuovo Municipio di Hannover; è compiuto nel 1913. Il bozzetto mostra il gesto raccolto dell’assenso."
    ],
    "fact": "Verso il 1913. Collezione non determinata."
  },
  "hthunsym09": {
    "text": [
      "Il lago riflette ancora una volta le montagne, quasi secondo un asse, in un ordine calmo e costruito.",
      "La versione del 1909 prosegue il motivo del riflesso simmetrico che Hodler segue al lago di Thun dal 1904."
    ],
    "fact": "1909. Collezione non determinata."
  },
  "hodler": {
    "text": [
      "La catena dello Stockhorn si stende con chiarezza sopra il lago; le sue forme si ripetono quasi simmetricamente nell’acqua.",
      "La versione del 1910 è conservata alla Kunsthalle Mannheim. Nell’estate di quest’anno Hodler lavora al lago di Thun a serie dello Stockhorn e del Niesen."
    ],
    "fact": "1910. Kunsthalle Mannheim."
  },
  "niesen": {
    "text": [
      "Il Niesen s’innalza come una piramide scura, quasi triangolare, dietro il lago e l’aria di pioggia.",
      "La versione del 1910 è dipinta da Heustrich, sotto la pioggia. Per questo la montagna appare più morbida che nelle versioni soleggiate."
    ],
    "fact": "1910. Collezione privata."
  },
  "hthunniesen": {
    "text": [
      "Sopra il lago vasto il Niesen si erge come una forma scura e nitida, il cielo chiaro, l’acqua calma.",
      "Oltre alla piramide isolata della montagna, nel 1910 Hodler dipinge anche il Niesen come parte di tutto il paesaggio del lago."
    ],
    "fact": "1910. Collezione non determinata."
  },
  "hthunstock11": {
    "text": [
      "Nella luce di novembre la catena dello Stockhorn si stende sopra il lago, le forme salde, i colori più freddi.",
      "Il quadro è datato novembre 1910. Nel 1910 Hodler allestisce un secondo studio agli Acacias a Ginevra e riceve la laurea honoris causa dell’Università di Basilea."
    ],
    "fact": "1910. Von der Heydt-Museum, Wuppertal."
  },
  "hthunabend12": {
    "text": [
      "Alla sera il lago e le montagne si oscurano; la catena dello Stockhorn resta visibile come una silhouette calma.",
      "Questa versione serale è del circa 1912. Hodler fissa lo stesso motivo a un’altra ora."
    ],
    "fact": "Verso il 1912. Collezione non determinata."
  },
  "hmorhardt": {
    "text": [
      "Mathias Morhardt siede o sta in un abito scuro, il viso saldamente modellato, lo sguardo calmo.",
      "Morhardt, scrittore e critico, ha sostenuto presto Hodler a Parigi. Il ritratto è del 1911."
    ],
    "fact": "1911. Collezione non determinata."
  },
  "hgertrud12": {
    "text": [
      "Gertrud Müller ci guarda apertamente, in un abito chiaro, lo sfondo semplice.",
      "La collezionista di Soletta è tra le importanti committenti di Hodler. Il ritratto è del circa 1912."
    ],
    "fact": "Verso il 1912. Collezione non determinata."
  },
  "hself12": {
    "text": [
      "Hodler mostra se stesso: la barba, uno sguardo aperto, un colletto bianco sotto l’abito scuro, molto vicino.",
      "L’autoritratto del 1912 appartiene a una lunga serie in cui fissa ancora e ancora il proprio aspetto."
    ],
    "fact": "1912. Collezione non determinata."
  },
  "hselfrosen": {
    "text": [
      "Hodler sta davanti a noi, rose dietro o accanto a lui, lo sguardo serio, l’atteggiamento eretto.",
      "Il quadro è del 1914. Nello stesso anno Hodler firma la protesta contro il bombardamento della cattedrale di Reims; le associazioni di artisti tedesche lo escludono allora."
    ],
    "fact": "1914. Collezione non determinata."
  },
  "hwille": {
    "text": [
      "Il generale Ulrich Wille siede in uniforme, lo sguardo saldo, l’atteggiamento di un uomo in carica.",
      "Durante la Prima guerra mondiale Wille è il comandante in capo dell’esercito svizzero. Il ritratto del 1916 è conservato al Kunstmuseum Bern."
    ],
    "fact": "1916. Kunstmuseum Bern."
  },
  "hself16": {
    "text": [
      "Di nuovo Hodler mostra se stesso, il viso più vicino, i tratti più marcati, lo sguardo fisso.",
      "L’autoritratto del 1916 nasce negli anni di guerra, in cui insegna a Ginevra e cerca rifugio in montagna."
    ],
    "fact": "1916. Collezione non determinata."
  },
  "hselfkittel": {
    "text": [
      "Hodler indossa un camice da pittore verde, il viso vicino, lo sguardo desto e serio.",
      "Il ritratto del 1917 lo mostra al lavoro. Nello stesso anno il Kunsthaus Zürich gli dedica una grande retrospettiva; è colpito da un edema polmonare."
    ],
    "fact": "1917. Collezione non determinata."
  },
  "hsonne15": {
    "text": [
      "Alla sera il sole è basso sul Lago Lemano, l’acqua e il cielo in fasce orizzontali calde.",
      "Il quadro è del 1915. Il 25 gennaio di quest’anno Valentine Godé-Darel muore a Vevey."
    ],
    "fact": "1915. Collezione non determinata."
  },
  "hweisshorn15": {
    "text": [
      "Da Montana il Weisshorn si erge come una forma chiara e salda sopra la valle, i fianchi nitidamente articolati.",
      "Nel 1915 e negli anni seguenti Hodler soggiorna a Montana e a Champéry. Da lì dipinge le vette vallesane."
    ],
    "fact": "1915. Collezione non determinata."
  },
  "hdents16": {
    "text": [
      "Le Dents du Midi s’innalzano come una catena dentellata, le punte ripetute ritmicamente, il cielo chiaro.",
      "Nel 1916 e nel 1917 Hodler soggiorna a Champéry e a Montana, dove il figlio Hector si riprende da una tubercolosi."
    ],
    "fact": "1916. Collezione non determinata."
  },
  "hblanches16": {
    "text": [
      "Al sole del mattino brillano le Dents Blanches presso Champéry, i versanti in piani caldi e freddi.",
      "Il quadro è datato 1916. In questi anni le montagne intorno a Champéry diventano un motivo nuovo e saldo."
    ],
    "fact": "1916. Collezione non determinata."
  },
  "hbach16": {
    "text": [
      "Un torrente di montagna scende tra pietre e versanti, l’acqua chiara, il movimento nitido e ripetuto.",
      "Oltre alle vette, nel 1916 Hodler dipinge anche il torrente vicino a Champéry, come un tempo i torrenti dell’Oberland."
    ],
    "fact": "1916. Collezione non determinata."
  },
  "hcaux17": {
    "text": [
      "Da Caux, sopra Montreux, il Lago Lemano si stende profondo e vasto, le montagne di fronte in una linea calma.",
      "Il quadro è del 1917. Il punto di vista alto sopra il lago ridà a Hodler le larghe fasce parallele dell’acqua e del cielo."
    ],
    "fact": "1917. Collezione non determinata."
  },
  "hwolken17": {
    "text": [
      "Sopra il paesaggio presso Caux si alzano nubi; il cielo è agitato, i versanti saldi sotto.",
      "Nel 1917 Caux resta un punto di vista. Hodler fissa non solo il lago calmo, ma anche il cielo in movimento."
    ],
    "fact": "1917. Collezione non determinata."
  },
  "hgrammont17": {
    "text": [
      "Al sole del mattino il Grammont brilla sopra il lago, i versanti in giallo caldo e violetto freddo, il lago come uno specchio nitido.",
      "Più di dieci anni dopo i primi quadri del Grammont, nel 1917 Hodler torna a questa montagna, ora al sole del mattino."
    ],
    "fact": "1917. Collezione non determinata."
  },
  "hmbdawn": {
    "text": [
      "All’alba il Monte Bianco si stende sopra il Lago Lemano, le forme morbide, la luce ancora pallida.",
      "Nel 1918 Hodler dipinge ancora e ancora la veduta dal suo appartamento al Quai du Mont-Blanc 29, a diverse ore del giorno."
    ],
    "fact": "1918. Collezione non determinata."
  },
  "hmbred": {
    "text": [
      "Nell’aurora il lago e il cielo si colorano; il Monte Bianco si erge come una forma calma e lontana sopra l’acqua.",
      "La serie nasce dalla finestra e dal balcone. Nel 1918 Ginevra nomina Hodler cittadino onorario."
    ],
    "fact": "1918. Collezione non determinata."
  },
  "hmblight": {
    "text": [
      "Alla luce del mattino il lago diventa più nitido, il Monte Bianco più saldo, le fasce orizzontali più distinte.",
      "Hodler cambia appena l’inquadratura, solo la luce. La ripetizione della stessa veduta è essa stessa il tema."
    ],
    "fact": "1918. Collezione non determinata."
  },
  "hmbafternoon": {
    "text": [
      "Nel pomeriggio un’altra luce si stende sul lago e sulle montagne, i colori più caldi, la vista lontana più vasta.",
      "Anche questa ora del giorno appartiene all’ultima serie. Hodler osserva lo stesso sguardo finché l’ora lo trasforma."
    ],
    "fact": "1918. Collezione non determinata."
  },
  "hmbbefore": {
    "text": [
      "Prima del levar del sole il lago e il cielo sono ancora freschi, il Monte Bianco una massa pallida e calma all’orizzonte.",
      "L’ora prima del levar è tra le più calme della serie. Poco più tardi, il 19 maggio 1918, Hodler muore in quello stesso appartamento."
    ],
    "fact": "1918. Collezione non determinata."
  },
  "hmbmarch": {
    "text": [
      "Al primo mattino di marzo il Monte Bianco si stende sopra il lago, l’aria chiara, le linee calme.",
      "Il quadro è datato marzo 1918, due mesi prima della morte di Hodler. La serie prosegue fino alle sue ultime settimane."
    ],
    "fact": "Marzo 1918. Collezione non determinata."
  },
  "hberthe18": {
    "text": [
      "Berthe Hodler, nata Jacques, appare in un ritratto semplice, il viso calmo e vicino.",
      "Hodler l’ha conosciuta nel 1894 e l’ha sposata nel 1898. Il ritratto è del 1918, l’ultimo anno della sua vita."
    ],
    "fact": "1918. Collezione non determinata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
