// v8.7 Italian content for Paul Cézanne’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts. Overwrites P.paths.cezanne with whole-path meta.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Collezione non determinata",
  "Privatbesitz": "Collezione privata",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "Barnes Foundation, Philadelphia": "Barnes Foundation, Filadelfia",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Parigi",
  "Eremitage, Sankt Petersburg": "Ermitage, San Pietroburgo",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Toledo Museum of Art": "Toledo Museum of Art",
  "Sammlung E. G. Bührle, Kunsthaus Zürich": "Collezione E. G. Bührle, Kunsthaus Zürich",
  "Courtauld Gallery, London": "Courtauld Gallery, Londra",
  "Museum Folkwang, Essen": "Museum Folkwang, Essen",
  "Museum of Fine Arts, Houston": "Museum of Fine Arts, Houston",
  "Phillips Collection, Washington": "Phillips Collection, Washington",
  "J. Paul Getty Museum, Los Angeles": "J. Paul Getty Museum, Los Angeles",
  "Petit Palais, Paris": "Petit Palais, Parigi",
  "Kimbell Art Museum, Fort Worth": "Kimbell Art Museum, Fort Worth",
  "Artizon Museum, Tokio": "Artizon Museum, Tokyo",
  "Princeton University Art Museum": "Princeton University Art Museum",
  "Puschkin-Museum, Moskau": "Museo Puškin, Mosca",
  "Fondation Beyeler, Riehen": "Fondation Beyeler, Riehen",
  "Galleria Nazionale d’Arte Moderna, Rom": "Galleria Nazionale d’Arte Moderna, Roma",
  "Museo Thyssen-Bornemisza, Madrid": "Museo Thyssen-Bornemisza, Madrid",
  "Nelson-Atkins Museum of Art, Kansas City": "Nelson-Atkins Museum of Art, Kansas City",
  "Baltimore Museum of Art": "Baltimore Museum of Art"
});
  P.works = Object.assign(P.works || {}, {
  "czson87": {
    "title": "Il figlio Paul",
    "museum": "National Gallery of Art, Washington"
  },
  "czmarne": {
    "title": "Sulle rive della Marna",
    "museum": "Ermitage, San Pietroburgo"
  },
  "czcreteil": {
    "title": "Il ponte sulla Marna a Créteil",
    "museum": "Collezione non determinata"
  },
  "czchantilly": {
    "title": "Viale a Chantilly",
    "museum": "Toledo Museum of Art"
  },
  "czselfpalette": {
    "title": "Autoritratto con tavolozza",
    "museum": "Collezione E. G. Bührle, Kunsthaus Zürich"
  },
  "czsvpine": {
    "title": "Montagne Sainte-Victoire con un grande pino",
    "museum": "Courtauld Gallery, Londra"
  },
  "czsvviaduct": {
    "title": "Montagne Sainte-Victoire e il viadotto della valle dell’Arc",
    "museum": "The Metropolitan Museum of Art, New York"
  },
  "czsvvalcros": {
    "title": "Montagne Sainte-Victoire e il viadotto da Valcros",
    "museum": "Collezione non determinata"
  },
  "czbellevue": {
    "title": "Casa Bellevue e colombile",
    "museum": "Museum Folkwang, Essen"
  },
  "czgrandpin": {
    "title": "Grande pino e terra rossa",
    "museum": "Ermitage, San Pietroburgo"
  },
  "cards": {
    "title": "I giocatori di carte",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czcardmet": {
    "title": "I giocatori di carte",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czcardplayer": {
    "title": "Il giocatore di carte",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czpipe": {
    "title": "Uomo con la pipa",
    "museum": "National Gallery of Art, Washington"
  },
  "czpeasant": {
    "title": "Contadino seduto",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czcoffee": {
    "title": "La donna con la caffettiera",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czmadred": {
    "title": "Madame Cézanne in abito rosso",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czconserv": {
    "title": "Madame Cézanne nella serra",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czmadyellow": {
    "title": "Madame Cézanne in una poltrona gialla",
    "museum": "Art Institute of Chicago"
  },
  "czmadblue": {
    "title": "Madame Cézanne in blu",
    "museum": "Museum of Fine Arts, Houston"
  },
  "czmadhat": {
    "title": "Madame Cézanne con un cappello verde",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "apples": {
    "title": "Il cesto di mele",
    "museum": "Art Institute of Chicago"
  },
  "czginger": {
    "title": "Vaso di zenzero con melagrana e pere",
    "museum": "Phillips Collection, Washington"
  },
  "czeggplant": {
    "title": "Natura morta con vaso di zenzero e melanzane",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czcurtain": {
    "title": "Natura morta con tenda",
    "museum": "Ermitage, San Pietroburgo"
  },
  "czonions": {
    "title": "Natura morta con cipolle",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czgetty": {
    "title": "Natura morta con mele",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "czpeaches": {
    "title": "Quattro pesche su un piatto",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "czapplpeach": {
    "title": "Natura morta con mele e pesche",
    "museum": "National Gallery of Art, Washington"
  },
  "czgeffroy": {
    "title": "Ritratto di Gustave Geffroy",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czvollard": {
    "title": "Ritratto di Ambroise Vollard",
    "museum": "Petit Palais, Parigi"
  },
  "czselfberet": {
    "title": "Autoritratto con basco",
    "museum": "Museum of Fine Arts, Boston"
  },
  "czitalian": {
    "title": "Giovane italiana al tavolo",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "czannecy": {
    "title": "Il lago di Annecy",
    "museum": "Courtauld Gallery, Londra"
  },
  "czbibquarry": {
    "title": "La cava di Bibémus",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "czbibbarnes": {
    "title": "Bibémus",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "czbibsv": {
    "title": "La montagna Sainte-Victoire dalla cava di Bibémus",
    "museum": "Baltimore Museum of Art"
  },
  "czbibfolk": {
    "title": "La cava di Bibémus",
    "museum": "Museum Folkwang, Essen"
  },
  "czbibnelson": {
    "title": "La cava di Bibémus",
    "museum": "Nelson-Atkins Museum of Art, Kansas City"
  },
  "czbibrocks": {
    "title": "Rocce e rami a Bibémus",
    "museum": "Petit Palais, Parigi"
  },
  "czcnnga": {
    "title": "Château Noir",
    "museum": "National Gallery of Art, Washington"
  },
  "czcnmaria": {
    "title": "Maison Maria con vista del Château Noir",
    "museum": "Kimbell Art Museum, Fort Worth"
  },
  "czcnmill": {
    "title": "La macina nel parco del Château Noir",
    "museum": "Philadelphia Museum of Art"
  },
  "czcnsv": {
    "title": "Montagne Sainte-Victoire e Château Noir",
    "museum": "Artizon Museum, Tokyo"
  },
  "czcncistern": {
    "title": "La cisterna nel parco del Château Noir",
    "museum": "Princeton University Art Museum"
  },
  "czcnview": {
    "title": "Veduta del Château Noir",
    "museum": "Collezione non determinata"
  },
  "czsvnoir": {
    "title": "Château Noir e montagna Sainte-Victoire",
    "museum": "Collezione non determinata"
  },
  "czforestpath": {
    "title": "Sentiero nel bosco verso il Château Noir",
    "museum": "Fondation Beyeler, Riehen"
  },
  "czlvmet": {
    "title": "Montagne Sainte-Victoire",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czlvsv": {
    "title": "La montagna Sainte-Victoire da Les Lauves",
    "museum": "Museo Puškin, Mosca"
  },
  "czlvgarden": {
    "title": "Il giardino di Les Lauves",
    "museum": "Phillips Collection, Washington"
  },
  "czlvbend": {
    "title": "La curva in alto sul Chemin des Lauves",
    "museum": "Fondation Beyeler, Riehen"
  },
  "czlvterrace": {
    "title": "La terrazza nel giardino di Les Lauves",
    "museum": "Collezione non determinata"
  },
  "czvallier": {
    "title": "Il giardiniere Vallier",
    "museum": "National Gallery of Art, Washington"
  },
  "czvallierbu": {
    "title": "Il vecchio giardiniere",
    "museum": "Collezione E. G. Bührle, Kunsthaus Zürich"
  },
  "czpaysan": {
    "title": "Ritratto di un contadino",
    "museum": "Museo Thyssen-Bornemisza, Madrid"
  },
  "czwomanblue": {
    "title": "Donna seduta in blu",
    "museum": "Phillips Collection, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.cezanne = {
  "title": "Il percorso di vita di Paul Cézanne",
  "life": "1839–1906",
  "part": "Parti 1–2 · 1839–1906",
  "subtitle": "Da Aix a Parigi e di nuovo in Provenza, fino allo studio di Les Lauves",
  "intro": "Viaggia con Paul Cézanne attraverso tutta la sua vita: dall’infanzia ad Aix-en-Provence e dall’amicizia con Émile Zola, passando per gli studi di diritto, l’Académie Suisse a Parigi, il periodo scuro detto «couillarde», la svolta con Camille Pissarro a Pontoise e ad Auvers, le mostre del 1874 e del 1877, L’Estaque, Hortense Fiquet e il figlio Paul, il Jas de Bouffan e l’anno 1886 – fino alla montagna Sainte-Victoire, ai giocatori di carte, alle mele e alle nature morte, alla mostra presso Ambroise Vollard nel 1895, allo studio di Les Lauves e alla morte di Cézanne ad Aix il 22 ottobre 1906. Stazioni brevi, quadri da colorare e voci da lettere a Émile Bernard e al figlio Paul. I bagnanti e le scene violente della giovinezza restano da parte.",
  "ending": [
    "Il 15 ottobre 1906, mentre dipinge all’aperto, Cézanne è sorpreso da un temporale. Crolla; un carrettiere lo riporta a casa. Il giorno dopo tenta di tornare al lavoro e crolla di nuovo.",
    "Il 22 ottobre 1906 Paul Cézanne muore ad Aix-en-Provence, a sessantasette anni. Restano i paesaggi della Provenza, le nature morte, i ritratti – e un’opera che tiene il mondo visibile in forme ferme e colorate."
  ],
  "epilogue": "Paul Cézanne muore il 22 ottobre 1906 ad Aix-en-Provence. Pochi giorni prima era crollato, mentre dipingeva all’aperto, in un temporale. Restano la montagna Sainte-Victoire, i giocatori di carte, le mele, le cave di Bibémus, il Château Noir, lo studio di Les Lauves e i ritratti tardi del giardiniere Vallier."
};
  P.stations = Object.assign(P.stations || {}, {
  "cezannemarne": {
    "place": "Parigi, la Marna e Chantilly",
    "when": "1886–1890",
    "mapLabel": "Marna",
    "intro": [
      "Dopo la morte del padre nell’ottobre 1886, l’eredità rende Cézanne indipendente. Hortense e il figlio Paul sono stati legittimati; spesso vivono a Parigi, mentre lui passa dalla città ad Aix.",
      "Dipinge il figlio ormai adolescente, lavora sulla Marna – a Créteil, tra gli altri luoghi – e nel 1888 a Chantilly, a nord di Parigi. Verso il 1890 nasce un autoritratto con tavolozza.",
      "Gli anni successivi al 1886 non sono un allontanamento dalla Provenza, ma lo riportano ancora ai fiumi e ai viali dell’Île-de-France."
    ]
  },
  "cezannesv": {
    "place": "La montagna Sainte-Victoire",
    "when": "1882–1897",
    "mapLabel": "Sainte-Victoire",
    "intro": [
      "A est di Aix si erge la montagna Sainte-Victoire. Dagli anni Ottanta il monte diventa per Cézanne un motivo centrale: con il grande pino in primo piano, con il viadotto della valle dell’Arc, da Valcros.",
      "Si aggiungono vedute della casa Bellevue con il colombile, che appartiene alla sorella Rose e a suo marito Maxime Conil, e più tardi il grande pino sulla terra rossa.",
      "Cézanne torna a questo monte per due decenni. Ogni versione cerca la stessa forma in un nuovo ordine di colore e di piano."
    ]
  },
  "cezannecards": {
    "place": "I giocatori di carte",
    "when": "1890–1896",
    "mapLabel": "Carte",
    "intro": [
      "All’inizio degli anni Novanta Cézanne dipinge una serie di giocatori di carte. Gli fanno da modelli contadini e operai del Jas de Bouffan. Nascono diverse versioni con due o più giocatori.",
      "Allo stesso mondo appartengono studi singoli: un giocatore di carte di profilo, un uomo con la pipa, un contadino seduto. Verso il 1895 si aggiunge il ritratto di una donna con la caffettiera.",
      "Le figure siedono in silenzio, senza azione drammatica. Cézanne costruisce corpi, tavolo e spazio con campi di colore fermi."
    ]
  },
  "cezannemadame": {
    "place": "Hortense Fiquet",
    "when": "1886–1895",
    "mapLabel": "Hortense",
    "intro": [
      "Dopo il matrimonio del 1886 Cézanne continua a dipingere Hortense Fiquet: in abito rosso, in una poltrona gialla, in blu, nel 1891 nella serra, nel 1891-1892 con un cappello verde.",
      "In questi anni Hortense vive spesso con il figlio a Parigi; Cézanne lavora soprattutto ad Aix. I ritratti non cercano la vicinanza familiare, ma un ordine fermo di posa, abito e spazio.",
      "Nel corso degli anni nascono più di quaranta ritratti dipinti di Hortense. I cinque quadri di questa stazione appartengono alle versioni note della fine degli anni Ottanta e dell’inizio degli anni Novanta."
    ]
  },
  "cezanneapples": {
    "place": "Mele e nature morte",
    "when": "1890–1905",
    "mapLabel": "Mele",
    "intro": [
      "La natura morta resta per Cézanne un campo proprio, accanto al paesaggio e al ritratto. Mele, pesche, cipolle, un vaso di zenzero, una tenda, una tovaglia: cose quotidiane, poste con fermezza e calma.",
      "Il cesto di mele del circa 1893 è una delle versioni più note. Negli stessi anni nascono nature morte con melagrana e pere, con melanzane, con cipolle e con pesche su un piatto.",
      "Verso il 1905, negli ultimi anni, torna ancora alle mele e alle pesche. La lieve inclinazione dei tavoli e il campo di colore fermo restano i suoi mezzi."
    ]
  },
  "cezannevollard": {
    "place": "Parigi · Vollard e il riconoscimento tardo",
    "when": "1895–1900",
    "mapLabel": "Vollard",
    "intro": [
      "Nel novembre e dicembre 1895 Ambroise Vollard mostra nella sua galleria di rue Laffitte, a Parigi, la prima grande mostra personale di Cézanne. Il riconoscimento arriva tardi, ma rimane.",
      "Nel 1895-1896 Cézanne ritrae il critico Gustave Geffroy; nel 1899 posa lo stesso Vollard. Si aggiungono un autoritratto con basco, il ritratto di una giovane italiana e, nel 1896, il lago di Annecy, dipinto durante un soggiorno a Talloires.",
      "Nel 1897 muore la madre. Nel 1899 il Jas de Bouffan viene venduto. Cézanne resta ad Aix e cerca nuovi luoghi di lavoro nella campagna a est della città."
    ]
  },
  "cezannebibemus": {
    "place": "La cava di Bibémus",
    "when": "1895–1904",
    "mapLabel": "Bibémus",
    "intro": [
      "A est di Aix si trova la cava di Bibémus. Dalla metà degli anni Novanta Cézanne vi affitta una capanna e lavora davanti alle pareti di roccia ocra, ai pini e alla vista verso la Sainte-Victoire.",
      "Nascono diverse versioni della cava: spazi stretti di roccia, vedute più aperte con alberi, e vedute in cui il monte appare sopra la pietra.",
      "Fino ai primi anni del nuovo secolo torna a Bibémus. La pietra stessa diventa il motivo, costruita con fermezza e chiarezza."
    ]
  },
  "cezannechateau": {
    "place": "Château Noir",
    "when": "1890–1904",
    "mapLabel": "Château Noir",
    "intro": [
      "Sulla strada per Le Tholonet si erge il Château Noir, una casa in un parco a est di Aix. Cézanne vi lavora per anni: affitta per un periodo una stanza, dipinge la facciata, il parco, la cisterna, la macina e il sentiero nel bosco.",
      "Spesso la casa compare insieme alla montagna Sainte-Victoire. Le vedute precoci cominciano già verso il 1887-1890; le versioni più dense appartengono soprattutto agli anni Novanta e fino al 1904.",
      "Quando questo luogo di lavoro viene a mancare, Cézanne si fa costruire uno studio proprio a nord della città, a Les Lauves."
    ]
  },
  "cezannelauves": {
    "place": "Lo studio di Les Lauves",
    "when": "1902–1906",
    "mapLabel": "Les Lauves",
    "intro": [
      "Nel 1901 Cézanne acquista un terreno sul Chemin des Lauves, a nord di Aix; nel 1902 lo studio è in piedi. Da qui dipinge le vedute tarde della Sainte-Victoire, il giardino, la terrazza e la curva del cammino in cima al pendio.",
      "Nel 1904 il Salon d’Automne a Parigi dedica una sala alla sua opera. Negli stessi anni scrive al giovane pittore Émile Bernard e gli espone che occorre trattare la natura per il cilindro, la sfera e il cono.",
      "Nel 1906 nasce anche il Cabanon de Jourdan, al margine della città. Lo studio di Les Lauves resta fino alla fine il suo luogo di lavoro ad Aix."
    ]
  },
  "cezanne1906": {
    "place": "Vallier e gli ultimi mesi",
    "when": "1902–1906",
    "mapLabel": "1906",
    "intro": [
      "Negli ultimi anni Cézanne ritrae più volte il suo giardiniere Vallier, spesso sulla terrazza dello studio. Si aggiungono il ritratto di un contadino e una donna seduta in blu.",
      "A Émile Bernard scrive il 23 ottobre 1905 di dovergli la verità in pittura. L’8 settembre 1906 dice al figlio Paul che, come pittore, diventa più lucido davanti alla natura, ma che la realizzazione delle sue sensazioni resta faticosa.",
      "Il 15 ottobre 1906, mentre dipinge all’aperto, è sorpreso da un temporale e crolla; un carrettiere lo riporta a casa. Il giorno dopo tenta di tornare al lavoro e crolla di nuovo. Il 22 ottobre 1906 Paul Cézanne muore ad Aix-en-Provence."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "czson87": {
    "text": [
      "Il figlio siede di tre quarti, lo sguardo calmo, la forma della testa e delle spalle saldamente costruita. In questi anni Paul è un adolescente.",
      "Questo ritratto data al 1886-1887, nel periodo successivo al matrimonio con cui il figlio viene legittimato. È appeso alla National Gallery of Art di Washington."
    ],
    "fact": "1886–1887. National Gallery of Art, Washington."
  },
  "czmarne": {
    "text": [
      "Gli alberi si ergono vicino all’acqua; la riva, il fogliame e il riflesso sono costruiti in campi di colore calmi e ben connessi.",
      "Verso il 1888 Cézanne lavora sulla Marna, a est di Parigi. Il quadro appartiene oggi all’Ermitage di San Pietroburgo."
    ],
    "fact": "verso il 1888. Ermitage, San Pietroburgo."
  },
  "czcreteil": {
    "text": [
      "Un ponte attraversa il fiume; case, riva e acqua si dispongono in fasce chiare e calme.",
      "Il quadro è datato 1888 e nasce a Créteil, sulla Marna, non lontano da Parigi."
    ],
    "fact": "1888. Collezione non determinata."
  },
  "czchantilly": {
    "text": [
      "Un viale si inoltra in profondità: tronchi a sinistra e a destra, il cammino chiaro, il fogliame come un baldacchino calmo sopra.",
      "Nel 1888 Cézanne dipinge a Chantilly, a nord di Parigi. Il quadro è appeso al Toledo Museum of Art."
    ],
    "fact": "1888. Toledo Museum of Art."
  },
  "czselfpalette": {
    "text": [
      "Cézanne sta con la tavolozza davanti alla tela, lo sguardo fermo, la forma della testa e della spalla in pochi piani chiari.",
      "L’autoritratto data a circa il 1890. Appartiene alla collezione E. G. Bührle ed è appeso al Kunsthaus Zürich."
    ],
    "fact": "verso il 1890. Collezione E. G. Bührle, Kunsthaus Zürich."
  },
  "czsvpine": {
    "text": [
      "In primo piano si erge un grande pino; oltre si eleva la montagna Sainte-Victoire come una forma chiara e calma sopra la pianura.",
      "Verso il 1887 il monte a est di Aix diventa un motivo ricorrente. Questa versione è appesa alla Courtauld Gallery di Londra."
    ],
    "fact": "verso il 1887. Courtauld Gallery, Londra."
  },
  "czsvviaduct": {
    "text": [
      "Attraverso la pianura corre il viadotto della valle dell’Arc; sopra si erge la montagna Sainte-Victoire, ferma e chiara.",
      "Il quadro data al 1882-1885. Cézanne ordina pianura, viadotto e monte in un paesaggio calmo e costruito."
    ],
    "fact": "1882–1885. The Metropolitan Museum of Art, New York."
  },
  "czsvvalcros": {
    "text": [
      "Da Valcros, il viadotto e la pianura stanno davanti al monte; le forme si scaglionano con chiarezza, il cielo è ampio.",
      "Il quadro è datato 1887. Cézanne cerca lo stesso monte da un altro punto di vista."
    ],
    "fact": "1887. Collezione non determinata."
  },
  "czbellevue": {
    "text": [
      "La casa e il colombile rotondo si ergono fermi nel paesaggio; muri, tetto e fogliame sono posti in pochi piani chiari.",
      "Verso il 1890 Cézanne dipinge Bellevue, una proprietà a ovest di Aix che appartiene alla sorella Rose e a suo marito Maxime Conil. Il quadro è appeso al Museum Folkwang di Essen."
    ],
    "fact": "verso il 1890. Museum Folkwang, Essen."
  },
  "czgrandpin": {
    "text": [
      "Un grande pino si erge sopra un suolo rossiccio; tronco, chioma e terra sono costruiti in campi di colore calmi e vigorosi.",
      "Il quadro data al 1895-1897, nella campagna di Aix. Appartiene all’Ermitage di San Pietroburgo."
    ],
    "fact": "1895–1897. Ermitage, San Pietroburgo."
  },
  "cards": {
    "text": [
      "Due uomini siedono a un tavolino e giocano a carte, senza che l’uno guardi l’altro. Le figure e il tavolo sono costruiti con campi di colore calmi e fermi.",
      "Questa versione con due giocatori data a circa il 1894-1895. Fanno da modelli contadini della tenuta di famiglia. Il quadro è appeso al Musée d’Orsay di Parigi."
    ],
    "fact": "verso il 1894–1895. Musée d’Orsay, Parigi."
  },
  "czcardmet": {
    "text": [
      "Due giocatori si siedono l’uno di fronte all’altro, tra loro una bottiglia sul tavolo; i corpi sono pesanti e calmi, lo spazio è stretto.",
      "Questa versione precedente, del 1890-1892, è appesa al Metropolitan Museum of Art di New York. Cézanne dipinge il motivo in più varianti."
    ],
    "fact": "1890–1892. Metropolitan Museum of Art, New York."
  },
  "czcardplayer": {
    "text": [
      "Un solo giocatore siede di profilo al tavolo, le carte in mano, il cappello scuro, la posa ferma.",
      "Questo studio del 1890-1892 appartiene al circolo dei quadri dei giocatori di carte. È appeso al Musée d’Orsay di Parigi."
    ],
    "fact": "1890–1892. Musée d’Orsay, Parigi."
  },
  "czpipe": {
    "text": [
      "Un uomo con cappello e pipa siede davanti a un fondo semplice; il volto è modellato con fermezza, lo sguardo volto all’interno.",
      "Questo ritratto di un contadino di Aix, nel circolo dei giocatori di carte, data al 1892-1896. È appeso alla National Gallery of Art di Washington."
    ],
    "fact": "1892–1896. National Gallery of Art, Washington."
  },
  "czpeasant": {
    "text": [
      "Un contadino siede con le braccia incrociate, lo sguardo basso, la giacca e i pantaloni in toni smorzati e fermi.",
      "Verso il 1892 Cézanne dipinge questo contadino seduto. Il quadro è appeso al Metropolitan Museum of Art di New York."
    ],
    "fact": "verso il 1892. Metropolitan Museum of Art, New York."
  },
  "czcoffee": {
    "text": [
      "Una donna siede eretta al tavolo, accanto a lei una caffettiera e una tazza; la posa è rigorosa, gli oggetti chiari e fermi.",
      "Questo ritratto, probabilmente di una domestica di Aix, data a circa il 1895. È appeso al Musée d’Orsay di Parigi."
    ],
    "fact": "verso il 1895. Musée d’Orsay, Parigi."
  },
  "czmadred": {
    "text": [
      "Hortense siede in un abito rosso, il busto leggermente voltato, lo sguardo calmo; il rosso sta fermo contro lo spazio costruito.",
      "Verso il 1888-1890 Cézanne dipinge la moglie in questo abito rosso. Il quadro è appeso al Metropolitan Museum of Art di New York."
    ],
    "fact": "verso il 1888–1890. Metropolitan Museum of Art, New York."
  },
  "czconserv": {
    "text": [
      "Hortense siede nella serra, dietro di lei le piante e l’intelaiatura dei vetri; la posa è eretta, il volto chiaramente delineato.",
      "Il quadro è datato 1891. È tra i ritratti più noti di Hortense ed è appeso al Metropolitan Museum of Art."
    ],
    "fact": "1891. Metropolitan Museum of Art, New York."
  },
  "czmadyellow": {
    "text": [
      "Hortense siede in una poltrona gialla, le mani in grembo, l’abito rosso scuro, il fondo calmo e piano.",
      "Questo ritratto data al 1888-1890. È appeso all’Art Institute of Chicago."
    ],
    "fact": "1888–1890. Art Institute of Chicago."
  },
  "czmadblue": {
    "text": [
      "Hortense indossa un abito blu; il corpo è posto con fermezza nello spazio, il fondo diviso in fasce calme.",
      "Cézanne dipinge questo ritratto verso il 1888-1890. È appeso al Museum of Fine Arts di Houston."
    ],
    "fact": "verso il 1888–1890. Museum of Fine Arts, Houston."
  },
  "czmadhat": {
    "text": [
      "Hortense indossa un cappello verde; testa, cappello e busto formano una silhouette calma e chiusa contro il fondo più scuro.",
      "Questo ritratto data al 1891-1892. Appartiene alla Barnes Foundation di Filadelfia."
    ],
    "fact": "1891–1892. Barnes Foundation, Filadelfia."
  },
  "apples": {
    "text": [
      "Mele, una bottiglia, un dolce e una tovaglia piegata: Cézanne dispone le cose quotidiane in modo che sembrino un piccolo mondo stabile.",
      "Questo cesto di mele data a circa il 1893. La lieve inclinazione del tavolo è voluta. Il quadro è appeso all’Art Institute of Chicago."
    ],
    "fact": "verso il 1893. Art Institute of Chicago."
  },
  "czginger": {
    "text": [
      "Un vaso di zenzero sta tra una melagrana, pere e un panno; gli oggetti sono posti con fermezza, i colori sono caldi e calmi.",
      "La natura morta è datata 1893. Appartiene alla Phillips Collection di Washington."
    ],
    "fact": "1893. Phillips Collection, Washington."
  },
  "czeggplant": {
    "text": [
      "Melanzane, un vaso di zenzero e frutti riposano sulla tovaglia; i frutti scuri e il panno bianco si equilibrano.",
      "Questa natura morta data al 1893-1894. È appesa al Metropolitan Museum of Art di New York."
    ],
    "fact": "1893–1894. Metropolitan Museum of Art, New York."
  },
  "czcurtain": {
    "text": [
      "Dietro i frutti, la brocca e il panno cade una tenda a motivi; la stoffa introduce movimento nell’insieme fermamente costruito.",
      "Questa natura morta data a circa il 1898. Appartiene all’Ermitage di San Pietroburgo."
    ],
    "fact": "verso il 1898. Ermitage, San Pietroburgo."
  },
  "czonions": {
    "text": [
      "Cipolle, una bottiglia e un panno riposano sul piano; le forme rotonde e il bianco della tela sono chiaramente contrapposti.",
      "Cézanne dipinge questa natura morta nel 1896-1898. È appesa al Musée d’Orsay di Parigi."
    ],
    "fact": "1896–1898. Musée d’Orsay, Parigi."
  },
  "czgetty": {
    "text": [
      "Le mele riposano accanto a una brocca e a un panno; ogni mela ha il proprio peso, il tavolo resta una superficie calma.",
      "Questa natura morta data al 1893-1894. Appartiene al J. Paul Getty Museum di Los Angeles."
    ],
    "fact": "1893–1894. J. Paul Getty Museum, Los Angeles."
  },
  "czpeaches": {
    "text": [
      "Quattro pesche riposano su un piatto; i frutti tondi e il piatto semplice sono costruiti con pochi toni chiari.",
      "Questa piccola natura morta data a circa il 1890-1894. Appartiene alla Barnes Foundation di Filadelfia."
    ],
    "fact": "verso il 1890–1894. Barnes Foundation, Filadelfia."
  },
  "czapplpeach": {
    "text": [
      "Mele e pesche riposano davanti a una brocca e a un panno; le forme sono ampie, il colore risplende con calma e densità.",
      "Questa natura morta data a circa il 1905, negli ultimi anni. È appesa alla National Gallery of Art di Washington."
    ],
    "fact": "verso il 1905. National Gallery of Art, Washington."
  },
  "czgeffroy": {
    "text": [
      "Il critico siede alla scrivania, circondato da libri; lo spazio è costruito in modo stretto, la seduta è lunga e resta incompiuta.",
      "Nel 1895-1896 Cézanne ritrae Gustave Geffroy, che si è pronunciato a favore della sua pittura. Il quadro è appeso al Musée d’Orsay di Parigi."
    ],
    "fact": "1895–1896. Musée d’Orsay, Parigi."
  },
  "czvollard": {
    "text": [
      "Vollard siede con lo sguardo basso, il cranio calvo, le mani in grembo; la forma è pesante e calma, quasi chiusa.",
      "Nel 1899 Cézanne dipinge il mercante che nel 1895 gli ha dato la prima grande mostra personale. Il quadro è appeso al Petit Palais di Parigi."
    ],
    "fact": "1899. Petit Palais, Parigi."
  },
  "czselfberet": {
    "text": [
      "Cézanne indossa un basco scuro; il volto è modellato in modo stretto, lo sguardo è fermo, il fondo semplice.",
      "Questo autoritratto tardo data al 1898-1900. È appeso al Museum of Fine Arts di Boston."
    ],
    "fact": "1898–1900. Museum of Fine Arts, Boston."
  },
  "czitalian": {
    "text": [
      "Una giovane donna si appoggia al tavolo, la testa posata sulla mano; la stoffa dell’abito e la posa calma sostengono il quadro.",
      "Questo ritratto data a circa il 1895-1900. Appartiene al J. Paul Getty Museum di Los Angeles."
    ],
    "fact": "verso il 1895–1900. J. Paul Getty Museum, Los Angeles."
  },
  "czannecy": {
    "text": [
      "Il lago giace fermo tra le montagne; in primo piano un albero, di fronte un château come forma chiara e costruita.",
      "Nel 1896 Cézanne soggiorna con la famiglia a Talloires, sul lago di Annecy. Il quadro è appeso alla Courtauld Gallery di Londra."
    ],
    "fact": "1896. Courtauld Gallery, Londra."
  },
  "czbibquarry": {
    "text": [
      "Pareti di roccia ocra si ergono dietro pini e cespugli; i bordi della cava sono posti nel paesaggio come piani costruiti.",
      "Nel 1895 Cézanne dipinge nella cava di Bibémus, a est di Aix, dove affitta una capanna. Il quadro appartiene alla Barnes Foundation."
    ],
    "fact": "1895. Barnes Foundation, Filadelfia."
  },
  "czbibbarnes": {
    "text": [
      "Rocce, alberi e la pietra rossiccia della cava si intrecciano; la luce e l’ombra dividono i piani con chiarezza.",
      "Questa versione data al 1894-1895. Appartiene anch’essa alla Barnes Foundation di Filadelfia."
    ],
    "fact": "1894–1895. Barnes Foundation, Filadelfia."
  },
  "czbibsv": {
    "text": [
      "Dalla cava il monte appare sopra rocce e pini; i bordi ocra conducono lo sguardo verso la silhouette lontana.",
      "Verso il 1897 Cézanne unisce la cava di Bibémus alla Sainte-Victoire. Il quadro è appeso al Baltimore Museum of Art."
    ],
    "fact": "verso il 1897. Baltimore Museum of Art."
  },
  "czbibfolk": {
    "text": [
      "Alte pareti di roccia giallastra si aprono come un interno; in alto, il verde degli alberi chiude la veduta.",
      "Questa veduta della cava data a circa il 1895. In questi anni Cézanne torna più volte a Bibémus."
    ],
    "fact": "verso il 1895. Museum Folkwang, Essen."
  },
  "czbibnelson": {
    "text": [
      "Le pareti di roccia si ergono ripide e chiare; gli alberi incorniciano il bordo superiore, la pietra stessa diventa il motivo.",
      "Questa versione data al 1898-1900. È appesa al Nelson-Atkins Museum of Art di Kansas City."
    ],
    "fact": "1898–1900. Nelson-Atkins Museum of Art, Kansas City."
  },
  "czbibrocks": {
    "text": [
      "I rami si stendono sulle rocce; pietra e fogliame si incastrano in macchie di colore corte e dense.",
      "Nel 1900-1904, in una versione tarda, Bibémus resta un luogo di lavoro. Il quadro è appeso al Petit Palais di Parigi."
    ],
    "fact": "1900–1904. Petit Palais, Parigi."
  },
  "czcnnga": {
    "text": [
      "La casa si erge tra gli alberi, la facciata calda e ferma, il fogliame disposto in modo denso intorno a essa.",
      "Nel 1900-1904 Cézanne dipinge il Château Noir, a est di Aix, sulla strada per Le Tholonet. Il quadro è appeso alla National Gallery of Art di Washington."
    ],
    "fact": "1900–1904. National Gallery of Art, Washington."
  },
  "czcnmaria": {
    "text": [
      "In primo piano si erge una casa semplice; oltre appare il Château Noir tra gli alberi; il cammino si inoltra in profondità.",
      "Questa veduta data a circa il 1895. Il quadro è appeso al Kimbell Art Museum di Fort Worth."
    ],
    "fact": "verso il 1895. Kimbell Art Museum, Fort Worth."
  },
  "czcnmill": {
    "text": [
      "Un’antica macina giace tra rocce e tronchi; la luce cade nel parco, le forme sono pesanti e calme.",
      "Nel 1898-1900 Cézanne dipinge nel parco del Château Noir. Il quadro è appeso al Philadelphia Museum of Art."
    ],
    "fact": "1898–1900. Philadelphia Museum of Art."
  },
  "czcnsv": {
    "text": [
      "Il Château Noir sta nel piano intermedio; sopra si eleva la Sainte-Victoire; casa e monte si incastrano nello stesso ordine costruito.",
      "Il quadro è datato 1904. È appeso all’Artizon Museum di Tokyo."
    ],
    "fact": "1904. Artizon Museum, Tokyo."
  },
  "czcncistern": {
    "text": [
      "Tra tronchi e rocce giace la cisterna; l’oscurità del parco e la muratura chiara si equilibrano.",
      "Questa veduta del parco data a circa il 1900. Il quadro appartiene al Princeton University Art Museum."
    ],
    "fact": "verso il 1900. Princeton University Art Museum."
  },
  "czcnview": {
    "text": [
      "La casa appare tra gli alberi, sull’altura; la facciata è chiara, l’intorno denso e verde.",
      "Verso il 1887-1890, in una versione precoce, Cézanne fissa il Château Noir. Tornerà in questo luogo per molti anni."
    ],
    "fact": "verso il 1887–1890. Collezione non determinata."
  },
  "czsvnoir": {
    "text": [
      "Il Château Noir sta davanti alla pianura; sopra si erge la Sainte-Victoire; entrambe le forme sono poste con parsimonia e fermezza.",
      "Verso il 1890-1895 Cézanne unisce la casa al monte. Il punto di vista resta la campagna a est di Aix."
    ],
    "fact": "verso il 1890–1895. Collezione non determinata."
  },
  "czforestpath": {
    "text": [
      "Un cammino attraversa il bosco, i tronchi stretti, la luce a macchie sul suolo.",
      "Questo sentiero nel bosco, dal Mas Jolie al Château Noir, data al 1900-1902. Il quadro appartiene alla Fondation Beyeler di Riehen."
    ],
    "fact": "1900–1902. Fondation Beyeler, Riehen."
  },
  "czlvmet": {
    "text": [
      "Il monte si erge in ampi campi di colore luminosi; la pianura davanti è congiunta in pennellate corte e dense.",
      "Nel 1902-1906 Cézanne dipinge la Sainte-Victoire dalle alture di Les Lauves, a nord di Aix. Il quadro è appeso al Metropolitan Museum of Art di New York."
    ],
    "fact": "1902–1906. Metropolitan Museum of Art, New York.",
    "quote": {
      "text": "Permettetemi di ripetere ciò che vi dicevo qui: trattate la natura per il cilindro, la sfera, il cono, il tutto messo in prospettiva, in modo che ogni lato di un oggetto, di un piano, si diriga verso un punto centrale.",
      "cite": "Lettera a Émile Bernard, Aix-en-Provence, 15 aprile 1904."
    }
  },
  "czlvsv": {
    "text": [
      "Da Les Lauves il monte sta aperto sopra la pianura; cielo e pendio si fondono in fasce ampie, fredde e calde.",
      "Questa veduta tarda data a circa il 1904-1906. È appesa al Museo Puškin di Mosca."
    ],
    "fact": "verso il 1904–1906. Museo Puškin, Mosca."
  },
  "czlvgarden": {
    "text": [
      "Nel giardino, alberi e arbusti si ergono in macchie di colore aperte e luminose; lo spazio resta arioso e non del tutto chiuso.",
      "Verso il 1906, in uno degli ultimi anni, Cézanne dipinge il giardino dello studio. Il quadro appartiene alla Phillips Collection di Washington."
    ],
    "fact": "verso il 1906. Phillips Collection, Washington.",
    "quote": {
      "text": "Infine ti dirò che, come pittore, divento più lucido davanti alla natura, ma che in me la realizzazione delle mie sensazioni resta sempre molto faticosa. Non riesco a raggiungere l’intensità che si dispiega ai miei sensi; non ho quella magnifica ricchezza di colorazione che anima la natura.",
      "cite": "Lettera al figlio Paul, 8 settembre 1906."
    }
  },
  "czlvbend": {
    "text": [
      "Il cammino curva tra alberi e case; la curva stessa diventa una forma costruita, la veduta resta stretta.",
      "Questa veduta, in alto sul Chemin des Lauves, data al 1904-1906. Il quadro appartiene alla Fondation Beyeler di Riehen."
    ],
    "fact": "1904–1906. Fondation Beyeler, Riehen."
  },
  "czlvterrace": {
    "text": [
      "La terrazza si apre sotto gli alberi; muro, fogliame e il suolo chiaro sono posti in ampi piani calmi.",
      "Nel 1902-1906 Cézanne dipinge la terrazza del nuovo studio che si è fatto costruire a nord di Aix."
    ],
    "fact": "1902–1906. Collezione non determinata."
  },
  "czvallier": {
    "text": [
      "Vallier siede all’aperto, la barba chiara, la posa calma; la giacca e i pantaloni sono costruiti in ampi campi di colore fermi.",
      "Nel 1906 Cézanne ritrae più volte il suo giardiniere Vallier, spesso sulla terrazza dello studio di Les Lauves. Il quadro è appeso alla National Gallery of Art di Washington."
    ],
    "fact": "1906. National Gallery of Art, Washington.",
    "quote": {
      "text": "Vi devo la verità in pittura e ve la dirò.",
      "cite": "Lettera a Émile Bernard, Aix, 23 ottobre 1905."
    }
  },
  "czvallierbu": {
    "text": [
      "L’uomo anziano siede con le braccia incrociate, lo sguardo basso, la forma del corpo pesante e ferma.",
      "Questa versione del 1906 mostra anch’essa Vallier. Appartiene alla collezione E. G. Bührle ed è appesa al Kunsthaus Zürich."
    ],
    "fact": "1906. Collezione E. G. Bührle, Kunsthaus Zürich."
  },
  "czpaysan": {
    "text": [
      "Un contadino siede davanti a un fondo semplice, le mani in riposo, il volto modellato in modo stretto e fermo.",
      "Questo ritratto tardo data al 1905-1906. È appeso al Museo Thyssen-Bornemisza di Madrid."
    ],
    "fact": "1905–1906. Museo Thyssen-Bornemisza, Madrid."
  },
  "czwomanblue": {
    "text": [
      "Una donna siede in un abito blu, le mani in grembo, il corpo come una forma calma e chiusa.",
      "Questo ritratto data al 1902-1904. Appartiene alla Phillips Collection di Washington."
    ],
    "fact": "1902–1904. Phillips Collection, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
