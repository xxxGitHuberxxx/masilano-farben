// v7.9 Italian content for Klimt’s life journey, Part 1.
// Faithful translation of the existing DE/EN. No new facts.
// Quotes are translations of the German self-translations
// (Flöge postcard; Wienbibliothek typuscript).
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Collezione non determinata",
  "Leopold Museum, Wien": "Leopold Museum, Vienna",
  "Österreichische Galerie Belvedere, Wien": "Österreichische Galerie Belvedere, Vienna",
  "Wien Museum": "Wien Museum",
  "Burgtheater, Wien": "Burgtheater, Vienna",
  "Kunsthistorisches Museum, Wien": "Kunsthistorisches Museum, Vienna",
  "Legion of Honor, Fine Arts Museums of San Francisco": "Legion of Honor, Fine Arts Museums of San Francisco",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Privatsammlung": "Collezione privata",
  "Historische Fotografie; das Original verbrannte 1945 auf Schloss Immendorf": "Fotografia storica; l’originale bruciò nel 1945 al castello di Immendorf",
  "Kunstmuseum Moritzburg, Halle": "Kunstmuseum Moritzburg, Halle",
  "Galerie Neue Meister, Dresden": "Galerie Neue Meister, Dresden"
});
  P.works = Object.assign(P.works || {}, {
  "klara": {
    "title": "Ritratto di Klara Klimt",
    "museum": "Leopold Museum, Vienna"
  },
  "girlhead": {
    "title": "Testa di fanciulla",
    "museum": "Collezione non determinata"
  },
  "forestfloor": {
    "title": "Suolo di bosco",
    "museum": "Leopold Museum, Vienna"
  },
  "sappho": {
    "title": "Saffo",
    "museum": "Collezione non determinata"
  },
  "organist": {
    "title": "Schizzo per l’allegoria della musica (L’organista)",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "ivyoldman": {
    "title": "Studio di un vecchio coronato d’edera",
    "museum": "Collezione non determinata"
  },
  "auditorium": {
    "title": "La sala del vecchio Burgtheater",
    "museum": "Wien Museum"
  },
  "shakespeare": {
    "title": "Il teatro di Shakespeare",
    "museum": "Burgtheater, Vienna"
  },
  "thespis": {
    "title": "Il carro di Tespi",
    "museum": "Burgtheater, Vienna"
  },
  "khmgreece": {
    "title": "L’antichità greca (dettaglio)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmitalyl": {
    "title": "L’arte italiana antica (lunetta sinistra)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmitalyr": {
    "title": "L’arte italiana antica (lunetta destra)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmitalyc": {
    "title": "L’arte italiana antica (intercolumnio)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmvenice": {
    "title": "Il Quattrocento veneziano (lunetta)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmmark": {
    "title": "San Marco evangelista",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "pembaur": {
    "title": "Ritratto di Josef Pembaur",
    "museum": "Collezione non determinata"
  },
  "emilie91": {
    "title": "Ritratto di Emilie Flöge",
    "museum": "Collezione non determinata"
  },
  "oleander": {
    "title": "Due fanciulle all’oleandro",
    "museum": "Legion of Honor, Fine Arts Museums of San Francisco"
  },
  "hanswurst": {
    "title": "Hanswurst sul palcoscenico improvvisato di Rothenburg",
    "museum": "Collezione non determinata"
  },
  "seatedgirl": {
    "title": "Fanciulla seduta",
    "museum": "Leopold Museum, Vienna"
  },
  "lewinsky": {
    "title": "Josef Lewinsky nel ruolo di Carlos («Clavigo»)",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "love1895": {
    "title": "L’Amore",
    "museum": "Wien Museum"
  },
  "musik1": {
    "title": "La Musica I",
    "museum": "Collezione non determinata"
  },
  "lilascarf": {
    "title": "Signora con la sciarpa lilla",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "blindman": {
    "title": "Il Cieco",
    "museum": "Leopold Museum, Vienna"
  },
  "schubert": {
    "title": "Schubert al pianoforte (schizzo)",
    "museum": "Leopold Museum, Vienna"
  },
  "capehat": {
    "title": "Signora con il mantello e il cappello",
    "museum": "Collezione non determinata"
  },
  "helene": {
    "title": "Ritratto di Helene Klimt",
    "museum": "Collezione non determinata"
  },
  "theseus": {
    "title": "Primo manifesto della Secessione viennese",
    "museum": "Collezione non determinata"
  },
  "pallas": {
    "title": "Pallade Atena",
    "museum": "Wien Museum"
  },
  "knips": {
    "title": "Ritratto di Sonja Knips",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "knipsstudy": {
    "title": "Studio per Sonja Knips",
    "museum": "Collezione non determinata"
  },
  "lederer": {
    "title": "Ritratto di Serena Pulitzer Lederer",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "deathbed": {
    "title": "Vecchio sul letto di morte",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "afterrain": {
    "title": "Dopo la pioggia",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "orchardeve": {
    "title": "Frutteto di sera",
    "museum": "Leopold Museum, Vienna"
  },
  "pond": {
    "title": "Stagno quieto (Egelsee presso Golling)",
    "museum": "Leopold Museum, Vienna"
  },
  "swamp": {
    "title": "La Palude",
    "museum": "Collezione non determinata"
  },
  "blackbull": {
    "title": "Il Toro nero",
    "museum": "Leopold Museum, Vienna"
  },
  "farmbirch": {
    "title": "Fattoria con le betulle",
    "museum": "Collezione non determinata"
  },
  "attersee": {
    "title": "Sulle rive dell’Attersee",
    "museum": "Leopold Museum, Vienna"
  },
  "fruittrees": {
    "title": "Alberi da frutto",
    "museum": "Collezione non determinata"
  },
  "birchshore": {
    "title": "Riva con le betulle",
    "museum": "Collezione non determinata"
  },
  "island": {
    "title": "Isola nell’Attersee",
    "museum": "Collezione privata"
  },
  "musik1901": {
    "title": "La Musica",
    "museum": "Collezione non determinata"
  },
  "hygieia": {
    "title": "Igea (dettaglio della «Medicina»)",
    "museum": "Fotografia storica; l’originale bruciò nel 1945 al castello di Immendorf"
  },
  "jurysketch": {
    "title": "Schizzo per la Giurisprudenza",
    "museum": "Collezione non determinata"
  },
  "judith": {
    "title": "Giuditta I",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "henneberg": {
    "title": "Ritratto di Marie Henneberg",
    "museum": "Kunstmuseum Moritzburg, Halle"
  },
  "emilie02": {
    "title": "Ritratto di Emilie Flöge",
    "museum": "Wien Museum"
  },
  "beethhead": {
    "title": "Testa di donna di tre quarti (studio per il Fregio di Beethoven)",
    "museum": "Collezione non determinata"
  },
  "beethsehnsucht": {
    "title": "Studio per «Il desiderio di felicità»",
    "museum": "Collezione non determinata"
  },
  "birch": {
    "title": "Bosco di faggi I",
    "museum": "Galerie Neue Meister, Dresden"
  }
});
  P.paths = P.paths || {};
  P.paths.klimt = {
  "title": "Il percorso di vita di Klimt",
  "life": "1862–1918",
  "part": "Parti 1–2 · 1862–1918",
  "subtitle": "Da Baumgarten agli ultimi quadri",
  "intro": "Viaggia con Gustav Klimt attraverso tutta la sua vita: dall’infanzia a Baumgarten e dalla Scuola di arti applicate alla Künstler-Compagnie, al Burgtheater e al Kunsthistorisches Museum, alla morte del padre e del fratello nel 1892, alla Secessione e al Fregio di Beethoven, fino agli anni d’oro, alla Kunstschau del 1908, al fregio Stoclet, a Emilie Flöge, ai paesaggi dell’Attersee e del lago di Garda, ai ritratti colorati tardi e a «Morte e vita». Stazioni brevi, quadri da colorare e voci documentate: cartoline e una lettera ad Emilie Flöge, e il discorso della Kunstschau. Klimt muore a Vienna il 6 febbraio 1918.",
  "ending": [
    "Negli ultimi anni nascono ritratti e paesaggi colorati, accanto a ritratti incompiuti come Johanna Staude, Amalie Zuckerkandl e la «Dama in bianco». Nel 1916 Klimt trascorre l’ultima estate condivisa con Emilie Flöge all’Attersee. Il 30 dicembre 1917 le scrive da Winkelsdorf: «…un saluto uscito dal più intimo e [ti] auguro un anno nuovo il più, il più felice. – come ne abbiamo entrambi così urgentemente bisogno.»",
    "L’11 gennaio 1918 Klimt è colpito da un ictus a Vienna. Muore il 6 febbraio 1918 all’Ospedale generale di Vienna, a cinquantasei anni.",
    "Restano, fra le altre opere, «Il bacio» al Belvedere, il ritratto dorato di Adele Bloch-Bauer, i cartoni del fregio Stoclet al MAK, i paesaggi dell’Attersee e del lago di Garda e i ritratti tardi. Di lui stesso, aveva scritto, non esiste nessun autoritratto: si devono guardare i suoi quadri."
  ],
  "epilogue": "L’11 gennaio 1918 Gustav Klimt è colpito da un ictus a Vienna. Muore il 6 febbraio 1918 all’Ospedale generale, a cinquantasei anni. Restano «Il bacio», i ritratti dorati, il fregio Stoclet, i paesaggi e i ritratti tardi – e le voci delle cartoline e delle lettere ad Emilie Flöge."
};
  P.stations = Object.assign(P.stations || {}, {
  "klimtbaum": {
    "place": "Vienna-Baumgarten · Infanzia e scuola",
    "when": "1862–1883",
    "mapLabel": "Baumgarten",
    "intro": [
      "Gustav Klimt nasce il 14 luglio 1862 a Baumgarten, vicino a Vienna, oggi nel 14° distretto. Il padre, Ernst Klimt il Vecchio, è incisore sull’oro; la madre si chiama Anna, nata Finster. Gustav è il secondo di sette figli.",
      "Nel 1876 entra nella Scuola di arti applicate del Museo imperiale e reale austriaco per l’arte e l’industria, oggi Università di arti applicate. Vi impara, tra gli altri da Ferdinand Laufberger, il disegno e la pittura decorativa."
    ]
  },
  "klimtcompagnie": {
    "place": "Vienna · La Künstler-Compagnie",
    "when": "1883–1890",
    "mapLabel": "Compagnie",
    "intro": [
      "Con il fratello minore Ernst, anche lui pittore, e il compagno di studi Franz Matsch, Klimt fonda verso il 1883 la «Künstler-Compagnie». I tre si occupano insieme di commissioni decorative per teatri, palazzi e sale di festa.",
      "In questi anni nascono anche le prime opere figurali: schizzi per l’allegoria della musica, scene mitologiche come Saffo, studi dal modello. La Compagnie lavora ancora nello stile accademico e storicista dell’epoca del Ring."
    ]
  },
  "klimtburg": {
    "place": "Vienna · Il Burgtheater",
    "when": "1886–1888",
    "mapLabel": "Burgtheater",
    "intro": [
      "Dal 1886 al 1888 Klimt, Ernst Klimt e Franz Matsch dipingono i soffitti e le lunette delle due scale d’onore del nuovo Burgtheater sul Ring. Klimt si occupa tra l’altro del teatro di Shakespeare e del carro di Tespi.",
      "Nel 1888 nasce anche il quadro della sala del vecchio Burgtheater sulla Michaelerplatz, prima della demolizione dell’edificio. Nel 1890 Klimt riceve per questo il premio dell’Imperatore."
    ]
  },
  "klimtkhm": {
    "place": "Vienna · Il Kunsthistorisches Museum",
    "when": "1890–1891",
    "mapLabel": "KHM",
    "intro": [
      "Nel 1890 e 1891, sulla scala del Kunsthistorisches Museum, Klimt dipinge i pennacchi e gli intercolumni: un ciclo sulla storia dell’arte, dall’antichità greca alla pittura italiana primitiva e veneziana.",
      "Nello stesso periodo, nel 1890, nasce il ritratto del pianista Josef Pembaur, già con uno sfondo d’oro ornamentale intorno alla testa del musicista."
    ]
  },
  "klimt1892": {
    "place": "Vienna · La rottura e i ritratti",
    "when": "1891–1896",
    "mapLabel": "1892",
    "intro": [
      "Nel 1892 muore prima il padre, l’incisore sull’oro Ernst Klimt il Vecchio. Il 9 dicembre muore anche il fratello Ernst, a soli ventotto anni. Gustav diventa tutore della figlia piccola di Ernst, Helene, chiamata Lentschi.",
      "Negli anni successivi dipinge ritratti, allegorie e progetti per interni privati, tra cui il salotto musicale di Nikolaus Dumba. Dopo la morte del fratello la Künstler-Compagnie si scioglie."
    ]
  },
  "klimtsecession": {
    "place": "Vienna · La Secessione e Ver Sacrum",
    "when": "1897–1899",
    "mapLabel": "Secessione",
    "intro": [
      "Il 3 aprile 1897 viene fondata l’Associazione degli artisti figurativi d’Austria, la Secessione viennese. Klimt ne è membro fondatore e primo presidente. Dal 1898 esce la rivista «Ver Sacrum».",
      "Per la prima mostra, nel 1898, progetta il manifesto «Teseo e il Minotauro». Una prima versione con un Teseo nudo suscita obiezioni; nella versione diffusa un albero nasconde la figura. Nello stesso anno nascono «Pallade Atena» e il ritratto di Sonja Knips."
    ]
  },
  "klimtattersee": {
    "place": "L’Attersee e i primi paesaggi",
    "when": "1898–1902",
    "mapLabel": "Attersee",
    "intro": [
      "Dal 1898 circa Klimt dipinge anche paesaggi, prima «Dopo la pioggia» e frutteti. Nel 1899 nasce lo «Stagno quieto», all’Egelsee presso Golling, nel Salisburghese – non all’Attersee.",
      "Dal 1900 passa le estati con la famiglia Flöge all’Attersee. Il 1° agosto 1901 scrive a Emilie Flöge su una cartolina che anela ad andare via come mai prima. Sulle rive del lago nascono distese d’acqua, rive e isole – e nel 1902 il «Bosco di faggi I»."
    ]
  },
  "klimtfakult": {
    "place": "Vienna · I quadri delle facoltà",
    "when": "1900–1901",
    "mapLabel": "Università",
    "intro": [
      "Nel 1894 Klimt riceve la commissione dei quadri delle facoltà dell’Università di Vienna: la Filosofia, la Medicina e la Giurisprudenza, grandi dipinti per il soffitto dell’aula magna. La «Filosofia» viene mostrata alla Secessione nel 1900 e suscita una viva protesta; nel 1901 segue la «Medicina».",
      "L’università non accetta i quadri. Più tardi Klimt li riacquista. Nel 1945 bruciano al castello di Immendorf, in Bassa Austria, dove erano stati messi in deposito. Restano tra l’altro fotografie storiche, schizzi e il celebre dettaglio di Igea dalla «Medicina»."
    ]
  },
  "klimtbeeth": {
    "place": "Vienna · Il Fregio di Beethoven",
    "when": "1901–1902",
    "mapLabel": "Beethoven",
    "intro": [
      "Nel 1902 la Secessione organizza la mostra Beethoven intorno alla statua di Beethoven di Max Klinger. Su tre pareti Klimt dipinge il Fregio di Beethoven, secondo l’interpretazione della Nona Sinfonia di Richard Wagner: dal desiderio di felicità fino a «Questo bacio al mondo intero».",
      "Nello stesso periodo nascono «Giuditta I» del 1901, il ritratto di Marie Henneberg e il ritratto a figura intera di Emilie Flöge del 1902, oltre a disegni per il fregio."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "klara": {
    "text": [
      "Klara Klimt, una sorella del pittore, appare da giovane donna, abito blu scuro, collana di perle e colletto di merletto bianco. Lo sguardo esce calmo dal quadro.",
      "Il dipinto risale a circa il 1880, agli anni della Scuola di arti applicate. Oggi appartiene al Leopold Museum di Vienna."
    ],
    "fact": "Olio, circa 1880. Leopold Museum, Vienna."
  },
  "girlhead": {
    "text": [
      "Una testa di fanciulla in morbidi tratti di gessetto o matita, i capelli sciolti intorno al viso. Lo studio mostra con quale precisione Klimt disegni già dal modello quando è allievo.",
      "Teste simili fanno parte della formazione alla Scuola di arti applicate, dove Klimt entra nel 1876."
    ],
    "fact": "Disegno, circa 1880–1883. Collezione non determinata."
  },
  "forestfloor": {
    "text": [
      "Invece di un vasto paesaggio si vede soltanto il suolo del bosco: muschio, foglie, piccole piante, strette l’una all’altra. Il quadro nasce nel 1881 o 1882, ancora negli anni di scuola.",
      "È esposto al Leopold Museum di Vienna e mostra che Klimt sapeva già volgere lo sguardo in basso, verso il motivo e il suolo, molto prima dei sottoboschi dell’Attersee."
    ],
    "fact": "Olio su tela, 1881–1882. Leopold Museum, Vienna."
  },
  "sappho": {
    "text": [
      "La poetessa Saffo siede con una lira su una terrazza; un bambino si appoggia a lei. Sullo sfondo un cielo serale si apre sul paesaggio.",
      "Il quadro risale a circa il 1888–1890, all’epoca della Künstler-Compagnie, ancora in uno stile accademico vicino all’Antichità."
    ],
    "fact": "Olio, circa 1888–1890. Collezione non determinata."
  },
  "organist": {
    "text": [
      "In un campo ovale una donna in abito blu-verde è inginocchiata davanti all’organo. Dietro di lei fluttua una figura vestita di chiaro, come un suono che si stacca.",
      "Lo schizzo risale al 1885, per un’allegoria della musica. Il quadro è esposto all’Österreichische Galerie Belvedere di Vienna."
    ],
    "fact": "Schizzo a olio, 1885. Österreichische Galerie Belvedere, Vienna."
  },
  "ivyoldman": {
    "text": [
      "Un vecchio di profilo, la barba grigia, una corona d’edera intorno alla fronte. Lo studio s’inserisce nella tradizione delle teste antiche di poeti e filosofi.",
      "Risale a circa il 1888–1890, agli anni in cui Klimt lavora al Burgtheater e poco dopo al Kunsthistorisches Museum."
    ],
    "fact": "Studio, circa 1888–1890. Collezione non determinata."
  },
  "auditorium": {
    "text": [
      "La sala del vecchio Burgtheater, sulla Michaelerplatz, è piena di palchi, d’oro e di volti. Klimt dipinge l’edificio nel 1888, prima della sua demolizione.",
      "Il quadro è esposto al Wien Museum. Nel 1890 Klimt riceve per esso il premio dell’Imperatore."
    ],
    "fact": "1888, Wien Museum. Premio dell’Imperatore nel 1890."
  },
  "shakespeare": {
    "text": [
      "Sulla scena una donna giace come morta; davanti siede una spettatrice coronata in un verdugale. La pittura del soffitto mostra un teatro all’epoca di Shakespeare.",
      "È una delle pitture che Klimt realizza dal 1886 al 1888 per la scala d’onore del nuovo Burgtheater. Tra il pubblico si è rappresentato egli stesso con i compagni della Künstler-Compagnie."
    ],
    "fact": "Pittura del soffitto della scala d’onore, 1886–1888. Burgtheater, Vienna."
  },
  "thespis": {
    "text": [
      "Un carro rotola attraverso un paesaggio, con attori e maschere: il carro di Tespi, con cui, secondo la tradizione, il teatro greco partì in tournée.",
      "È una delle pitture del soffitto di Klimt nel nuovo Burgtheater, realizzate dal 1886 al 1888 con Ernst Klimt e Franz Matsch."
    ],
    "fact": "Pittura del soffitto della scala d’onore, 1886–1888. Burgtheater, Vienna."
  },
  "khmgreece": {
    "text": [
      "Una giovane donna in veste a motivi si piega su un parapetto. Dietro di lei s’innalza un vaso greco dipinto e, accanto, una piccola figura in bronzo.",
      "Il dettaglio fa parte dei pennacchi dell’«Antichità greca» sulla scala del Kunsthistorisches Museum, che Klimt realizza nel 1890 e 1891."
    ],
    "fact": "Pennacchio della scala, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmitalyl": {
    "text": [
      "Un giovane in veste scura e cappello nero tiene un libro; accanto a lui fluttuano teste d’angeli sopra una fascia di fiori. La lunetta si trova sopra un arco della scala.",
      "Appartiene al campo «L’arte italiana antica», che Klimt dipinge al Kunsthistorisches Museum nel 1890 e 1891."
    ],
    "fact": "Lunetta della scala, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmitalyr": {
    "text": [
      "Due figure con nimbi dorati: una in rosso, l’altra in un abito blu scuro a motivi d’oro. Già qui Klimt impiega l’oro come superficie e come ornamento.",
      "La lunetta è la parte destra del campo «L’arte italiana antica» sulla scala del Kunsthistorisches Museum, 1890–1891."
    ],
    "fact": "Lunetta della scala, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmitalyc": {
    "text": [
      "Tra due colonne di marmo sta un bambino nimbato, vestito di chiaro, che tiene un panno dorato. Sopra di lui appare una testa scura, come una maschera.",
      "L’intercolumnio appartiene al ciclo «L’arte italiana antica» sulla scala del Kunsthistorisches Museum, 1890–1891."
    ],
    "fact": "Intercolumnio della scala, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmvenice": {
    "text": [
      "Una donna con la corona d’oro e il manto riccamente ornato porta tra le mani una corona o un modello. Dietro di lei s’innalza una croce e, accanto, le lettere C·K, il segno di Klimt.",
      "La lunetta appartiene al campo «Il Quattrocento romano e veneziano» sulla scala del Kunsthistorisches Museum, 1890–1891."
    ],
    "fact": "Lunetta della scala, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmmark": {
    "text": [
      "Un uomo barbuto in veste dorata, un leone sulla spalla: l’evangelista Marco, patrono di Venezia. Accanto, su fondo d’oro, si legge la benedizione «Pax tibi Marce evangelista meus».",
      "La lunetta appartiene al campo «Il Quattrocento romano e veneziano» sulla scala del Kunsthistorisches Museum, 1890–1891."
    ],
    "fact": "Lunetta della scala, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "pembaur": {
    "text": [
      "Il pianista Josef Pembaur il Vecchio siede in redingote nera davanti a uno sfondo d’oro. Intorno al quadro corre una cornice ornamentale con note e segni della musica.",
      "Il ritratto risale al 1890, allo stesso periodo dei lavori per il Kunsthistorisches Museum. Lo sfondo d’oro anticipa già ritratti più tardi."
    ],
    "fact": "Olio, 1890. Collezione non determinata."
  },
  "emilie91": {
    "text": [
      "Emilie Flöge, sorella di Helene, la moglie di Ernst Klimt, siede in abito chiaro, i capelli raccolti, lo sguardo calmo volto di lato.",
      "Il ritratto risale al 1891, l’anno del matrimonio di Ernst e Helene Flöge. Tra Gustav Klimt ed Emilie Flöge inizia un’amicizia che dura fino alla fine della sua vita."
    ],
    "fact": "Olio, 1891. Collezione non determinata."
  },
  "oleander": {
    "text": [
      "Due giovani donne stanno davanti a un oleandro, vicine l’una all’altra, in abiti scuri, lo sguardo sui fiori.",
      "Il quadro risale a circa il 1890–1892. È esposto alla Legion of Honor, Fine Arts Museums of San Francisco."
    ],
    "fact": "Olio su tela, circa 1890–1892. Legion of Honor, San Francisco."
  },
  "hanswurst": {
    "text": [
      "Su una piazza aperta il personaggio di Hanswurst recita davanti a una folla fitta: un teatro improvvisato all’aperto, con costumi e bandiere.",
      "Il quadro risale al 1893 o 1894, dopo le pitture del soffitto del Burgtheater e dopo la morte del fratello Ernst."
    ],
    "fact": "Olio, 1893–1894. Collezione non determinata."
  },
  "seatedgirl": {
    "text": [
      "Una fanciulla siede in un abito ampio e chiaro, le mani in grembo, lo sguardo calmo. Dietro di lei lo sfondo resta scuro e semplice.",
      "Il quadro risale a circa il 1894 ed è esposto al Leopold Museum di Vienna."
    ],
    "fact": "Olio, circa 1894. Leopold Museum, Vienna."
  },
  "lewinsky": {
    "text": [
      "L’attore di corte Josef Lewinsky sta in piedi, vestito di scuro, su un campo stretto ornato d’oro: nel ruolo di Carlos del «Clavigo» di Goethe.",
      "Il ritratto risale al 1895 ed è esposto all’Österreichische Galerie Belvedere di Vienna."
    ],
    "fact": "Olio, 1895. Österreichische Galerie Belvedere, Vienna."
  },
  "love1895": {
    "text": [
      "Una coppia sta vicinissima davanti a uno sfondo dorato, quasi nebbioso. I volti si avvicinano senza che la scena diventi rumorosa.",
      "Il quadro risale al 1895 ed è esposto al Wien Museum. Fa parte delle opere figurali degli anni che seguono la Künstler-Compagnie."
    ],
    "fact": "Olio, 1895. Wien Museum."
  },
  "musik1": {
    "text": [
      "Una donna in abito scuro sta accanto a una sfinge dorata e a una lira. Dietro di lei appare una figura più chiara, quasi fluttuante.",
      "«La Musica I» risale al 1895. Una versione successiva del 1898, «La Musica II», brucia nel 1945 insieme ad altre opere al castello di Immendorf."
    ],
    "fact": "Olio, 1895. Collezione non determinata."
  },
  "lilascarf": {
    "text": [
      "Una donna in un ovale, i capelli scuri raccolti, una sciarpa lilla al collo. Lo sfondo è semplice, il viso calmo e chiaro.",
      "Il quadro risale a circa il 1895 e appartiene al Kunsthistorisches Museum di Vienna."
    ],
    "fact": "Olio, circa 1895. Kunsthistorisches Museum, Vienna."
  },
  "blindman": {
    "text": [
      "Un uomo anziano dai capelli e dalla barba bianchi, gli occhi chiusi o vuoti, la testa leggermente inclinata. Il quadro è sobrio, senza accessori.",
      "Risale a circa il 1896 ed è esposto al Leopold Museum di Vienna."
    ],
    "fact": "Olio, circa 1896. Leopold Museum, Vienna."
  },
  "schubert": {
    "text": [
      "Nella penombra Schubert siede al pianoforte, circondato da donne in abiti chiari che ascoltano. Il quadro è uno schizzo per il salotto musicale di Nikolaus Dumba.",
      "Lo schizzo del 1896 è esposto al Leopold Museum. Una versione successiva e compiuta del soggetto brucia nel 1945 al castello di Immendorf."
    ],
    "fact": "Schizzo, 1896, per il salotto musicale di Nikolaus Dumba. Leopold Museum, Vienna."
  },
  "capehat": {
    "text": [
      "Una donna di profilo sotto un grande cappello scuro, il mantello fino al mento. Il viso resta in ombra; la forma del cappello domina il foglio.",
      "L’opera risale al 1897 o 1898, ai mesi in cui viene fondata la Secessione."
    ],
    "fact": "1897–1898. Collezione non determinata."
  },
  "helene": {
    "text": [
      "Helene Klimt, nipote del pittore e figlia di Ernst e Helene Flöge, siede di profilo, i capelli scuri tagliati lisci, in abito chiaro.",
      "Dopo la morte del fratello nel 1892, Gustav Klimt è tutore della bambina. Il ritratto risale al 1898, l’anno della prima mostra della Secessione."
    ],
    "fact": "Olio, 1898. Collezione non determinata."
  },
  "theseus": {
    "text": [
      "In alto Teseo combatte il Minotauro; a destra sta Pallade Atena con la lancia e lo scudo della Gorgone. Il centro resta libero per il testo della «I. Esposizione d’arte».",
      "Una prima versione con un Teseo nudo suscita obiezioni. Nella versione diffusa nel 1898 un albero nasconde la figura. In basso figurano «Ver Sacrum» e il nome dell’Associazione degli artisti figurativi d’Austria."
    ],
    "fact": "Manifesto litografato, 1898, versione censurata con l’albero."
  },
  "pallas": {
    "text": [
      "Pallade Atena riempie il quadrato: elmo d’oro, corazza d’oro, una lancia in mano. Sullo scudo appare un viso; nell’ornamento della corazza, una piccola Nuda Veritas.",
      "Il quadro risale al 1898, l’anno della fondazione della rivista «Ver Sacrum», ed è esposto al Wien Museum. Diventa un emblema della Secessione."
    ],
    "fact": "Olio su tela, 1898. Wien Museum."
  },
  "knips": {
    "text": [
      "Sonja Knips siede in un ampio abito rosa, un ventaglio rosso in mano, davanti a uno sfondo scuro fiorito. Lo sguardo esce calmo dal quadro.",
      "Il ritratto risale al 1898 ed è esposto all’Österreichische Galerie Belvedere di Vienna. È considerato uno dei primi ritratti mondani moderni di Klimt."
    ],
    "fact": "Olio su tela, 1898. Österreichische Galerie Belvedere, Vienna.",
    "quote": {
      "text": "Non esiste nessun autoritratto mio. La mia persona non m’interessa come “soggetto di un quadro”, piuttosto gli altri esseri, soprattutto le donne, e ancora di più altre apparenze.",
      "cite": "Commento a un autoritratto inesistente, dattiloscritto non datato, Wienbibliothek im Rathaus (lascito Auguste Fickert)"
    }
  },
  "knipsstudy": {
    "text": [
      "In poche linee la figura è già seduta nell’ampio abito, la testa inclinata, il ventaglio accennato. Lo studio cerca la posa del futuro quadro a olio.",
      "Risale a circa il 1898, nell’ambito del ritratto di Sonja Knips."
    ],
    "fact": "Disegno, circa 1898. Collezione non determinata."
  },
  "lederer": {
    "text": [
      "Serena Pulitzer Lederer sta in piedi in un lungo abito quasi bianco davanti a uno sfondo chiaro. Il formato alto e stretto lascia molto spazio intorno alla figura.",
      "Il ritratto risale al 1899. La famiglia Lederer diventa uno dei gruppi di collezionisti più importanti di Klimt. Il quadro è esposto al Metropolitan Museum of Art di New York."
    ],
    "fact": "Olio su tela, 1899. Metropolitan Museum of Art, New York."
  },
  "deathbed": {
    "text": [
      "Un vecchio riposa sul cuscino, la bocca chiusa, le gote cave, la barba grigia, lo sfondo chiaro. Il quadro non nomina nessuno.",
      "Risale al 1899 ed è esposto all’Österreichische Galerie Belvedere di Vienna. Per quanto si sappia, non ha un nesso diretto con la morte del padre e del fratello Ernst nel 1892."
    ],
    "fact": "Olio, 1899. Österreichische Galerie Belvedere, Vienna."
  },
  "afterrain": {
    "text": [
      "Un prato dopo la pioggia: alte erbe, fiori sparsi e, in fondo, alberi sotto un cielo chiaro. Non compare nessuna persona.",
      "Il quadro risale al 1898 ed è esposto all’Österreichische Galerie Belvedere. Fa parte dei primi paesaggi che Klimt dipinge senza commissione."
    ],
    "fact": "Olio su tela, 1898. Österreichische Galerie Belvedere, Vienna."
  },
  "orchardeve": {
    "text": [
      "Alberi da frutto in un prato verde, le chiome scure contro un cielo serale rossastro. Lo sguardo resta nella superficie, senza un vasto orizzonte.",
      "Il quadro risale al 1898 ed è esposto al Leopold Museum di Vienna."
    ],
    "fact": "Olio su tela, 1898. Leopold Museum, Vienna."
  },
  "pond": {
    "text": [
      "L’acqua occupa quasi tutto il quadro: alberi riflessi, un pezzo di riva, il cielo nello stagno. Il luogo è l’Egelsee presso Golling, nel Salisburghese, e non l’Attersee.",
      "Il quadro risale al 1899 ed è esposto al Leopold Museum di Vienna."
    ],
    "fact": "Olio su tela, 1899. Leopold Museum, Vienna."
  },
  "swamp": {
    "text": [
      "Acqua scura, tronchi, la riva di una palude o di uno stagno, il cielo tra i rami. La superficie è quieta e senza figure.",
      "Il quadro risale a circa il 1900, agli stessi anni dei primi paesaggi dell’Attersee e dell’Egelsee."
    ],
    "fact": "Olio, circa 1900. Collezione non determinata."
  },
  "blackbull": {
    "text": [
      "Un toro nero sta in un prato fiorito, il corpo scuro contro il verde, la testa china. Dietro di lui s’apre uno sfondo chiaro.",
      "Il quadro risale al 1900 ed è esposto al Leopold Museum di Vienna."
    ],
    "fact": "Olio su tela, 1900. Leopold Museum, Vienna."
  },
  "farmbirch": {
    "text": [
      "Una fattoria dietro una fila di betulle: il tetto scuro, i tronchi chiari, il suolo un prato. Lo sguardo sta di fronte alla casa e agli alberi.",
      "Il quadro risale al 1900, l’anno della prima estate di Klimt all’Attersee con la famiglia Flöge."
    ],
    "fact": "Olio, 1900. Collezione non determinata."
  },
  "attersee": {
    "text": [
      "L’acqua dell’Attersee riempie la superficie di piccole onde regolari, dal turchese chiaro al verde. Una striscia di riva appare solo al bordo.",
      "Il quadro risale al 1900, della prima estate che Klimt passa al lago con la famiglia Flöge, prima a Seewalchen come ospite della famiglia Paulick."
    ],
    "fact": "Olio su tela, 1900. Leopold Museum, Vienna.",
    "quote": {
      "text": "Anelo ad andare via come mai prima.",
      "cite": "Cartolina a Emilie Flöge, 1° agosto 1901"
    }
  },
  "fruittrees": {
    "text": [
      "Alberi da frutto in un giardino, le chiome dense, e sotto una fascia di fiori gialli o d’erba matura. Il cielo resta una stretta striscia.",
      "Il quadro risale al 1901, a una delle prime estati che Klimt passa all’Attersee."
    ],
    "fact": "Olio, 1901. Collezione non determinata."
  },
  "birchshore": {
    "text": [
      "Due betulle sulla riva; dietro, l’acqua e un folto verde, davanti, fiori. I tronchi dividono la superficie come un trellis.",
      "Il quadro risale al 1901, sulle rive del lago – l’anno in cui Klimt scrive a Emilie Flöge che anela ad andare via come mai prima."
    ],
    "fact": "Olio, 1901. Collezione non determinata."
  },
  "island": {
    "text": [
      "Una piccola isola nell’Attersee, gli alberi come una macchia scura nell’acqua chiara. Le onde sono posate in fasce regolari, quasi ornamentali.",
      "Il quadro risale a circa il 1901–1902. Si trova in una collezione privata."
    ],
    "fact": "Olio su tela, circa 1901–1902. Collezione privata."
  },
  "musik1901": {
    "text": [
      "Una donna in un lungo abito rosso sta di profilo, una lira tra le mani, davanti a uno sfondo chiaro. La superficie è spoglia, come un manifesto.",
      "L’opera risale al 1901, l’anno in cui la «Medicina» viene mostrata alla Secessione. Fa parte del lavoro ripetuto di Klimt sul tema della musica."
    ],
    "fact": "1901. Collezione non determinata."
  },
  "hygieia": {
    "text": [
      "Igea, dea della salute, sta in un abito rosso ornato d’oro, il serpente di Asclepio intorno al braccio, una coppa in mano. Lo sguardo esce calmo dal quadro.",
      "Il dettaglio proviene dal quadro di facoltà «La Medicina», mostrato alla Secessione nel 1901 e accolto da una viva opposizione. L’originale brucia nel 1945 al castello di Immendorf, in Bassa Austria. Restano tra l’altro questa fotografia storica a colori."
    ],
    "fact": "Dettaglio de «La Medicina», 1900–1901. Fotografia storica; l’originale bruciò nel 1945 al castello di Immendorf."
  },
  "jurysketch": {
    "text": [
      "In poche linee che cercano s’innalza una grande figura, sotto altre più piccole, a destra un campo vuoto. Lo schizzo cerca la composizione del futuro quadro di facoltà.",
      "Risale al 1901. La «Giurisprudenza» definitiva viene compiuta solo nel 1903–1907 e brucia anch’essa nel 1945 al castello di Immendorf."
    ],
    "fact": "Disegno, 1901. Collezione non determinata."
  },
  "judith": {
    "text": [
      "Giuditta guarda fuori dal quadro, la testa di Oloferne al bordo inferiore, il collo circondato da una fascia d’ornamento dorato. L’oro e l’ornamento incorniciano il viso.",
      "Il quadro risale al 1901 ed è esposto all’Österreichische Galerie Belvedere di Vienna. Si intitola anche «Giuditta e Oloferne»."
    ],
    "fact": "Olio su tela, 1901. Österreichische Galerie Belvedere, Vienna."
  },
  "henneberg": {
    "text": [
      "Marie Henneberg siede in un abito azzurro dal cadere ampio, le mani in grembo, davanti a uno sfondo più scuro. La stoffa forma molte piccole pieghe.",
      "Il ritratto risale al 1901–1902 ed è esposto al Kunstmuseum Moritzburg di Halle."
    ],
    "fact": "Olio su tela, 1901–1902. Kunstmuseum Moritzburg, Halle."
  },
  "emilie02": {
    "text": [
      "Emilie Flöge sta in piedi in un lungo abito riformato a motivi ornamentali, la silhouette stretta nel formato alto, lo sguardo fermo. Undici anni dopo il primo ritratto del 1891 lo stile è cambiato: superficie, motivo, figura intera.",
      "Il quadro risale al 1902 ed è esposto al Wien Museum."
    ],
    "fact": "Olio su tela, 1902. Wien Museum."
  },
  "beethhead": {
    "text": [
      "Una testa di donna in pochi tratti di matita, i capelli sciolti, lo sguardo abbassato. Lo studio fa parte dei lavori preparatori del Fregio di Beethoven della Secessione del 1902.",
      "Risale al 1901 o 1902, ai mesi in cui Klimt disegna e dipinge il fregio per la mostra Beethoven."
    ],
    "fact": "Disegno, 1901–1902. Studio per il Fregio di Beethoven. Collezione non determinata."
  },
  "beethsehnsucht": {
    "text": [
      "Due figure femminili fluttuano una dietro l’altra, le braccia spalancate, gli abiti tirati all’indietro in lunghe linee. Il disegno cerca i geni fluttuanti della parete sinistra del Fregio di Beethoven.",
      "Il fregio nasce nel 1902 per la mostra Beethoven della Secessione, secondo l’interpretazione della Nona Sinfonia di Richard Wagner. La parete sinistra porta il titolo «Il desiderio di felicità»."
    ],
    "fact": "Disegno, 1901–1902, studio per la parete sinistra del Fregio di Beethoven."
  },
  "birch": {
    "text": [
      "I tronchi di un bosco di faggi si stringono l’uno all’altro, il suolo brilla, l’orizzonte è quasi sparito. Il quadro s’intitola «Bosco di faggi I» e risale al 1902.",
      "È esposto alla Galerie Neue Meister di Dresda. Nello stesso anno Klimt dipinge a Vienna il Fregio di Beethoven; i sottoboschi appartengono alle estati all’Attersee."
    ],
    "fact": "Olio su tela, 1902. Galerie Neue Meister, Dresda."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
