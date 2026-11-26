// v10.1 IT content for Caspar David Friedrich’s life journey, Part 2 (1818–1840), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Eremitage, Sankt Petersburg": "Museo dell’Ermitage, San Pietroburgo",
  "Nationalmuseum Oslo": "Museo nazionale, Oslo",
  "Kunst Museum Winterthur": "Kunst Museum Winterthur",
  "Musée du Louvre, Paris": "Museo del Louvre, Parigi",
  "Bayerische Staatsgemäldesammlungen, München": "Collezioni statali di pittura della Baviera, Monaco",
  "Museum Folkwang, Essen": "Museum Folkwang, Essen",
  "Alte Nationalgalerie, Berlin": "Alte Nationalgalerie, Berlino",
  "Pommersches Landesmuseum, Greifswald": "Museo di Stato della Pomerania, Greifswald",
  "Hamburger Kunsthalle": "Hamburger Kunsthalle",
  "Museum Georg Schäfer, Schweinfurt": "Museum Georg Schäfer, Schweinfurt",
  "Stiftung Preussische Schlösser und Gärten, Berlin": "Fondazione dei palazzi e giardini prussiani, Berlino",
  "Privatsammlung": "Collezione privata",
  "Österreichische Galerie Belvedere, Wien": "Belvedere, Vienna",
  "Staatliche Kunstsammlungen Dresden": "Collezioni statali d’arte di Dresda",
  "Klassik Stiftung Weimar": "Klassik Stiftung Weimar",
  "Nationalgalerie Prag": "Galleria nazionale di Praga",
  "Staatliche Kunsthalle Karlsruhe": "Staatliche Kunsthalle Karlsruhe",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Museum der bildenden Künste, Leipzig": "Museo di belle arti, Lipsia",
  "Kimbell Art Museum, Fort Worth": "Kimbell Art Museum, Fort Worth",
  "Städel Museum, Frankfurt": "Städel Museum, Francoforte",
  "Saint Louis Art Museum": "Saint Louis Art Museum",
  "Puschkin-Museum, Moskau": "Museo Puškin, Mosca",
  "Kupferstichkabinett, Dresden": "Kupferstich-Kabinett, Dresda",
  "Germanisches Nationalmuseum, Nürnberg": "Germanisches Nationalmuseum, Norimberga",
  "Albertina, Wien": "Albertina, Vienna",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "J. Paul Getty Museum, Los Angeles": "J. Paul Getty Museum, Los Angeles",
  "Freies Deutsches Hochstift, Frankfurt": "Freies Deutsches Hochstift, Francoforte",
  "Museo Thyssen-Bornemisza, Madrid": "Museo Nacional Thyssen-Bornemisza, Madrid"
});
  P.works = Object.assign(P.works || {}, {
  "cfsailor": {
    "title": "Sul veliero",
    "museum": "Museo dell’Ermitage, San Pietroburgo"
  },
  "cfsailorstudy": {
    "title": "Studio per Sul veliero",
    "museum": "Museo nazionale, Oslo"
  },
  "cfsailstudies": {
    "title": "Studi di velieri",
    "museum": "Museo nazionale, Oslo"
  },
  "cfruegenwoman": {
    "title": "Donna sulla spiaggia di Rügen",
    "museum": "Kunst Museum Winterthur"
  },
  "cfnightharbour": {
    "title": "Le sorelle sul balcone del porto",
    "museum": "Museo dell’Ermitage, San Pietroburgo"
  },
  "cfmooncoast": {
    "title": "Costa marina al chiaro di luna",
    "museum": "Museo del Louvre, Parigi"
  },
  "cfwindow": {
    "title": "Donna alla finestra",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfgreifmarket": {
    "title": "La piazza del mercato di Greifswald con la famiglia Friedrich",
    "museum": "Museo di Stato della Pomerania, Greifswald"
  },
  "cfgardenhouse": {
    "title": "Pergolato",
    "museum": "Collezioni statali di pittura della Baviera, Monaco"
  },
  "cfrisingfog": {
    "title": "Paesaggio dei Monti dei Giganti con nebbia che sale",
    "museum": "Collezioni statali di pittura della Baviera, Monaco"
  },
  "cfmistbank": {
    "title": "Banchi di nebbia",
    "museum": "Hamburger Kunsthalle"
  },
  "cfmorningmtn": {
    "title": "Mattino in montagna",
    "museum": "Museo dell’Ermitage, San Pietroburgo"
  },
  "cfgreifharbour2": {
    "title": "Il porto di Greifswald",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfwindmills": {
    "title": "Paesaggio con mulini a vento",
    "museum": "Fondazione dei palazzi e giardini prussiani, Berlino"
  },
  "cfflatbodden": {
    "title": "Paesaggio piatto sulla baia di Greifswald",
    "museum": "Museum Georg Schäfer, Schweinfurt"
  },
  "cfdresdeneve": {
    "title": "Sera (Tramonto dietro la Hofkirche di Dresda)",
    "museum": "Collezione privata"
  },
  "cfwatzmann": {
    "title": "Il Watzmann",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfelberocks": {
    "title": "Paesaggio roccioso nei monti di arenaria dell’Elba",
    "museum": "Belvedere, Vienna"
  },
  "cfmeissen": {
    "title": "Portale a Meissen",
    "museum": "Collezioni statali d’arte di Dresda"
  },
  "cfhuttens": {
    "title": "La tomba di Hutten",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfearlysnow": {
    "title": "Prima neve",
    "museum": "Hamburger Kunsthalle"
  },
  "cfice": {
    "title": "Il mare di ghiaccio",
    "museum": "Hamburger Kunsthalle"
  },
  "cfmoonmen": {
    "title": "Due uomini che contemplano la luna",
    "museum": "Collezioni statali d’arte di Dresda"
  },
  "cfmoonmenmet": {
    "title": "Due uomini che contemplano la luna (versione successiva)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cfmooncouple": {
    "title": "Uomo e donna che contemplano la luna",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfmoongrise": {
    "title": "Sorgere della luna sul mare",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfmoonherm": {
    "title": "Luna che sorge sul mare",
    "museum": "Museo dell’Ermitage, San Pietroburgo"
  },
  "cflonetree": {
    "title": "L’albero solitario",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfcrows": {
    "title": "L’albero dei corvi",
    "museum": "Museo del Louvre, Parigi"
  },
  "cfstages": {
    "title": "Le età della vita",
    "museum": "Museo di belle arti, Lipsia"
  },
  "cfwindowwood": {
    "title": "Interno di bosco al chiaro di luna",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfriesenberlin": {
    "title": "Monti dei Giganti",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfriesenmem": {
    "title": "Ricordo dei Monti dei Giganti",
    "museum": "Museo dell’Ermitage, San Pietroburgo"
  },
  "cfriesenoslo": {
    "title": "Paesaggio montano nei Monti dei Giganti",
    "museum": "Museo nazionale, Oslo"
  },
  "cfriesensun": {
    "title": "Raggi di sole nei Monti dei Giganti",
    "museum": "Saint Louis Art Museum"
  },
  "cfriesenpeaks": {
    "title": "Vetta con nuvole in movimento",
    "museum": "Kimbell Art Museum, Fort Worth"
  },
  "cfrosenberg": {
    "title": "Paesaggio con il Rosenberg nei monti della Boemia",
    "museum": "Städel Museum, Francoforte"
  },
  "cfeldenamtn": {
    "title": "Rovine di Eldena nei Monti dei Giganti",
    "museum": "Museo di Stato della Pomerania, Greifswald"
  },
  "cfbohemia28": {
    "title": "Paesaggio boemo",
    "museum": "Museo di Stato della Pomerania, Greifswald"
  },
  "cfmoonshore": {
    "title": "Costa al chiaro di luna",
    "museum": "Hamburger Kunsthalle"
  },
  "cfowlgothic": {
    "title": "Civetta in una nicchia gotica",
    "museum": "Museo dell’Ermitage, San Pietroburgo"
  },
  "cfneurathen": {
    "title": "La porta rocciosa di Neurathen",
    "museum": "Museo dell’Ermitage, San Pietroburgo"
  },
  "cfschmiede": {
    "title": "Veduta della cresta di Schmiedeberg",
    "museum": "Museo Puškin, Mosca"
  },
  "cfeldenaeast": {
    "title": "Rovine di Eldena presso Greifswald da est",
    "museum": "Kupferstich-Kabinett, Dresda"
  },
  "cfteplitz": {
    "title": "Paesaggio montano presso Teplitz con il Milleschauer",
    "museum": "Germanisches Nationalmuseum, Norimberga"
  },
  "cfgraves": {
    "title": "Paesaggio con tombe",
    "museum": "Albertina, Vienna"
  },
  "cflonelybank": {
    "title": "Sorgere della luna su una riva solitaria",
    "museum": "National Gallery of Art, Washington"
  },
  "cfwalkdusk": {
    "title": "Passeggiata al crepuscolo",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "cfsunsetlate": {
    "title": "Tramonto (Fratelli)",
    "museum": "Museo dell’Ermitage, San Pietroburgo"
  },
  "cfeveningstar": {
    "title": "La stella della sera",
    "museum": "Freies Deutsches Hochstift, Francoforte"
  },
  "cfgrossegehege": {
    "title": "Il Grosse Gehege presso Dresda",
    "museum": "Collezioni statali d’arte di Dresda"
  },
  "cfeastermorn": {
    "title": "Mattino di Pasqua",
    "museum": "Museo Nacional Thyssen-Bornemisza, Madrid"
  },
  "cfeveningbaltic": {
    "title": "Sera sulla spiaggia del Baltico",
    "museum": "Collezioni statali d’arte di Dresda"
  },
  "cfharboureve": {
    "title": "Navi nel porto la sera",
    "museum": "Collezioni statali d’arte di Dresda"
  }
});
  P.paths = P.paths || {};
  P.paths.friedrich = {
  "title": "Il percorso di vita di Caspar David Friedrich",
  "part": "Parti 1–2 · 1774–1840",
  "subtitle": "Da Greifswald a Dresda",
  "intro": "Caspar David Friedrich nasce a Greifswald il 5 settembre 1774. Il percorso lo segue dall’infanzia sul Baltico e dall’accademia di Copenaghen fino a Dresda, Rügen, l’altare di Tetschen e Il monaco in riva al mare. Poi prosegue con il matrimonio con Caroline nel 1818, i figli, il Viandante, Il mare di ghiaccio, i contemplatori della luna e i Monti dei Giganti, fino ai quieti ultimi anni e alla sua morte a Dresda nel 1840.",
  "ending": [
    "Caspar David Friedrich muore a Dresda il 7 maggio 1840 e viene sepolto nel cimitero della Trinità. Dopo la sua morte cade quasi nell’oblio per decenni.",
    "Nel 1906 la Mostra del centenario dell’arte tedesca alla Nationalgalerie di Berlino espone molti suoi quadri, e Friedrich viene riscoperto. Oggi Il monaco in riva al mare, Il viandante sul mare di nebbia, le Bianche scogliere di Rügen e Il mare di ghiaccio sono tra i quadri più noti del Romanticismo. Qui finisce il percorso."
  ],
  "epilogue": "Dalla costa baltica vicino a Greifswald ai quieti quadri di luna di Dresda: Friedrich ha dipinto paesaggi in cui le persone guardano, aspettano e si meravigliano.",
  "life": "1774–1840"
};
  P.stations = Object.assign(P.stations || {}, {
  "cfnuptials": {
    "place": "Matrimonio e viaggio a Rügen",
    "when": "1818",
    "mapLabel": "Rügen",
    "intro": [
      "Il 21 gennaio 1818 Friedrich sposa nella Kreuzkirche di Dresda Christiane Caroline Bommer. Lui ha 43 anni, lei 25. In estate i due viaggiano attraverso Neubrandenburg e Greifswald fino a Rügen e fanno visita alla sua famiglia.",
      "Di questi mesi sono quadri del mare, di vele e di coppie che guardano insieme lontano. Nella galleria trovi anche le Bianche scogliere di Rügen, dipinte in questo periodo."
    ]
  },
  "cfchildren": {
    "place": "Famiglia sull’Elba",
    "when": "1818–1824",
    "mapLabel": "Sull’Elba",
    "intro": [
      "Nel 1820 la famiglia si trasferisce in un appartamento più grande sull’Elba, al numero 33, con vista sul fiume. Il 30 agosto 1819 nasce la figlia Emma, il 2 dicembre 1823 la figlia Agnes e il 23 dicembre 1824 il figlio Gustav Adolf, che più tardi diventerà anch’egli pittore.",
      "Caroline compare in diversi quadri, per esempio alla finestra dello studio. Anche Greifswald resta vicina: un grande foglio mostra la piazza del mercato con la famiglia Friedrich."
    ]
  },
  "cfwanderer": {
    "place": "Sopra la nebbia",
    "when": "um 1818–1822",
    "mapLabel": "Arenaria dell’Elba",
    "intro": [
      "Verso il 1818 Friedrich dipinge Il viandante sul mare di nebbia, un uomo visto di spalle su una roccia sopra un mare di foschia. Il quadro si trova oggi alla Hamburger Kunsthalle, e lo trovi nella galleria di questa app.",
      "Le rocce del quadro ricordano i monti di arenaria dell’Elba, a sud di Dresda. In questi anni dipinge più volte nebbia, nuvole e montagne che emergono nella luce del mattino."
    ]
  },
  "cfgreiftrips": {
    "place": "Casa sul Baltico",
    "when": "1818–1830",
    "mapLabel": "Bodden",
    "intro": [
      "Anche da Dresda, Greifswald resta la sua casa. Durante il viaggio di nozze del 1818 visita la città, e nel 1826 si riposa ancora una volta a Rügen.",
      "Da schizzi e ricordi dipinge il porto, i prati davanti alla città, mulini a vento e la terra piatta sulla baia di Greifswald. All’orizzonte si vedono spesso i campanili di Greifswald."
    ]
  },
  "cfprofessor": {
    "place": "Professore a Dresda",
    "when": "1824–1829",
    "mapLabel": "Accademia",
    "intro": [
      "Dal 1823 il pittore norvegese Johan Christian Dahl abita nella stessa casa sull’Elba, e i due diventano amici. Il 17 gennaio 1824 l’accademia di Dresda nomina Friedrich professore straordinario, senza obbligo di insegnamento.",
      "Non ottiene la cattedra vacante di pittura di paesaggio. Continua a dipingere: Dresda nella luce della sera, rocce nei monti di arenaria dell’Elba, una tomba per Ulrich von Hutten, il Watzmann dall’acquerello di un allievo e la prima neve nel bosco."
    ]
  },
  "cfice": {
    "place": "Il mare di ghiaccio",
    "when": "1823–1824",
    "mapLabel": "Mare di ghiaccio",
    "intro": [
      "Nel suo studio di Dresda Friedrich dipinge nel 1823 e nel 1824 Il mare di ghiaccio: i lastroni si ammassano in un picco aguzzo e sotto spunta la poppa di una nave schiacciata. Per le lastre di ghiaccio aveva disegnato i blocchi di ghiaccio sull’Elba.",
      "Nel 1826 il quadro viene esposto ad Amburgo, ma non trova un acquirente. Solo nel 1905 lo acquista la Hamburger Kunsthalle. Anche in altri quadri di questi anni forme fredde e aguzze emergono dal mare."
    ]
  },
  "cfmoonlife": {
    "place": "Contemplatori della luna e Età della vita",
    "when": "1819–1835",
    "mapLabel": "Riva dell’Elba",
    "intro": [
      "Verso il 1819 e il 1820 Friedrich dipinge due uomini che contemplano la luna nascente sotto un albero spoglio. Più tardi seguono altre versioni, una con un uomo e una donna. Le sue figure ci voltano spesso le spalle e guardano il quadro insieme a noi.",
      "Nel 1822 dipinge in coppia L’albero solitario e Sorgere della luna sul mare. Verso il 1834 dipinge Le età della vita: cinque persone sulla riva e cinque navi sull’acqua, bambini, adulti e un vecchio."
    ]
  },
  "cfriesenlate": {
    "place": "Montagne dalla memoria",
    "when": "um 1828–1835",
    "mapLabel": "Monti dei Giganti",
    "intro": [
      "Friedrich aveva camminato nei Monti dei Giganti nel 1810. Molti anni dopo dipinge ancora le catene montuose, da schizzi e dalla memoria, in una luce morbida e con nuvole sopra le creste.",
      "A volte unisce luoghi molto lontani: in un quadro le rovine dell’abbazia di Eldena, vicino a Greifswald, si ergono davanti ai Monti dei Giganti. Fissa anche le colline della Boemia in acquerelli."
    ]
  },
  "cfstroke": {
    "place": "Malattia e fogli silenziosi",
    "when": "1835–1837",
    "mapLabel": "Teplitz",
    "intro": [
      "Il 26 giugno 1835 Friedrich viene colpito da un ictus e resta poi in parte paralizzato. Le vendite alla corte russa, mediate dall’amico poeta Vasilij Žukovskij, aiutano a pagare una cura a Teplitz, in Boemia.",
      "I grandi dipinti a olio diventano rari; Costa al chiaro di luna è considerato uno degli ultimi. Friedrich lavora soprattutto a seppia e ad acquerello: fogli silenziosi con rocce, rovine, una civetta e la luce della luna sulla riva."
    ]
  },
  "cflegacy": {
    "place": "Luce della sera",
    "when": "1828–1840",
    "mapLabel": "Trinitatis",
    "intro": [
      "Negli ultimi anni Friedrich dipinge spesso la sera: passeggiatori al crepuscolo, una famiglia sulla via di casa davanti al profilo di Dresda, navi nel porto e persone sulla spiaggia del Baltico.",
      "Caspar David Friedrich muore a Dresda il 7 maggio 1840, all’età di 65 anni. Viene sepolto nel cimitero della Trinità. Caroline e i figli restano a Dresda."
    ]
  },
  "cfliberation": {
    "place": "Le guerre di liberazione",
    "when": "1812–1817",
    "mapLabel": "Greifswald",
    "intro": [
      "Negli anni delle guerre di liberazione contro Napoleone, nel 1813 e nel 1814, Friedrich dipinge quadri pieni del ricordo di antichi eroi e di tombe. L’amico Kersting parte per la guerra come volontario. Nel 1814 Friedrich espone a Dresda Tombe di antichi eroi e Il cacciatore nel bosco.",
      "Nel 1816 il re di Prussia compra Veduta di un porto e la regala al principe ereditario. Nello stesso anno Friedrich diventa membro dell’accademia di Dresda. Nel 1817 dipinge Due uomini in riva al mare, Dopo la tempesta e Greifswald al chiaro di luna, uno sguardo quieto sulla sua città natale."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cfsailor": {
    "text": [
      "Un uomo e una donna siedono mano nella mano sulla prua di un veliero e guardano una città con torri nella foschia.",
      "Il quadro nasce dopo le nozze e viene spesso collegato a Friedrich e Caroline."
    ],
    "fact": "1818–1819. Museo dell’Ermitage, San Pietroburgo."
  },
  "cfsailorstudy": {
    "text": [
      "Con sottili linee a matita Friedrich disegna la prua di una nave con vela e sartiame.",
      "Più tardi usò studi come questo per il quadro Sul veliero."
    ],
    "fact": "verso 1818. Museo nazionale, Oslo."
  },
  "cfsailstudies": {
    "text": [
      "Su un foglio sono sparsi piccoli velieri, visti di fronte, di lato e da dietro.",
      "Friedrich li disegna con precisione per poterli dipingere più tardi nello studio."
    ],
    "fact": "verso 1818. Museo nazionale, Oslo."
  },
  "cfruegenwoman": {
    "text": [
      "Una donna siede sulla spiaggia piatta e guarda il mare con le barche a vela.",
      "In lontananza brillano le bianche coste di gesso di Rügen."
    ],
    "fact": "verso 1818. Kunst Museum Winterthur."
  },
  "cfnightharbour": {
    "text": [
      "Due donne stanno di notte su un balcone sopra un porto.",
      "Dietro gli alberi delle navi si alzano le guglie di chiese gotiche."
    ],
    "fact": "1818–1820. Museo dell’Ermitage, San Pietroburgo."
  },
  "cfmooncoast": {
    "text": [
      "La luna splende tra nuvole scure su una spiaggia quieta.",
      "Pali e reti dei pescatori stanno nell’acqua bassa."
    ],
    "fact": "1818. Museo del Louvre, Parigi."
  },
  "cfwindow": {
    "text": [
      "Caroline sta nello studio spoglio davanti alla finestra aperta e guarda l’Elba.",
      "Fuori si vedono solo pioppi e l’albero di una nave."
    ],
    "fact": "1822. Alte Nationalgalerie, Berlino."
  },
  "cfgreifmarket": {
    "text": [
      "Sulla luminosa piazza del mercato di Greifswald la gente sta in piccoli gruppi e passa un carro.",
      "Il grande acquerello mostra il municipio, case a timpano, campanili e anche membri della famiglia Friedrich."
    ],
    "fact": "1818. Museo di Stato della Pomerania, Greifswald."
  },
  "cfgardenhouse": {
    "text": [
      "Una donna siede in un pergolato ombroso, un uomo sta in piedi accanto a lei.",
      "Dall’apertura tra le foglie si vede una chiesa gotica nella luce chiara."
    ],
    "fact": "1818. Collezioni statali di pittura della Baviera, Monaco."
  },
  "cfrisingfog": {
    "text": [
      "I crinali si susseguono uno dietro l’altro e dalle valli sale una nebbia bianca.",
      "Davanti, un piccolo albero spoglio sul pendio."
    ],
    "fact": "verso 1819. Collezioni statali di pittura della Baviera, Monaco."
  },
  "cfmistbank": {
    "text": [
      "Un paesaggio piatto si stende sotto un cielo mosso e la nebbia passa sui campi.",
      "Al centro sorge una capanna solitaria con il tetto di paglia."
    ],
    "fact": "verso 1820. Hamburger Kunsthalle."
  },
  "cfmorningmtn": {
    "text": [
      "Pendii rocciosi si aprono su un’ampia valle piena di foschia mattutina.",
      "Le montagne lontane sono solo pallide linee azzurre."
    ],
    "fact": "verso 1820. Museo dell’Ermitage, San Pietroburgo."
  },
  "cfgreifharbour2": {
    "text": [
      "Nella luce della sera un grande veliero è ormeggiato nel porto di Greifswald.",
      "Sulla banchina ci sono persone e botti, e il cielo arde di giallo e rosa."
    ],
    "fact": "1818–1820. Alte Nationalgalerie, Berlino."
  },
  "cfwindmills": {
    "text": [
      "Oltre un’acqua ferma stanno mulini a vento e una casa bianca sulla riva.",
      "Una barca scivola tranquilla sulla superficie."
    ],
    "fact": "1822–1823. Fondazione dei palazzi e giardini prussiani, Berlino."
  },
  "cfflatbodden": {
    "text": [
      "Sulla riva piatta della baia stanno alcune piccole figure, e al largo una barca a vela.",
      "Sopra tutto si stende un grande cielo nuvoloso."
    ],
    "fact": "verso 1830. Museum Georg Schäfer, Schweinfurt."
  },
  "cfdresdeneve": {
    "text": [
      "Il sole tramonta dietro le torri della Hofkirche e del castello, con nuvole rosa nel cielo.",
      "In basso nel piccolo quadro Friedrich ha scritto Abend e ottobre 1824."
    ],
    "fact": "1824. Collezione privata."
  },
  "cfwatzmann": {
    "text": [
      "Oltre pendii verdi e rocce si innalza il Watzmann coperto di neve.",
      "Friedrich non fu mai nelle Alpi e dipinse il monte da un acquerello del suo allievo August Heinrich."
    ],
    "fact": "1824–1825. Alte Nationalgalerie, Berlino."
  },
  "cfelberocks": {
    "text": [
      "Ripide torri di roccia emergono dalla foschia e negli anfratti crescono abeti.",
      "Una stretta passerella attraversa una gola."
    ],
    "fact": "1822–1823. Belvedere, Vienna."
  },
  "cfmeissen": {
    "text": [
      "Attraverso un passaggio buio e a volta la luce cade su gradini e pietre.",
      "In fondo si apre una piccola finestra verso la luce."
    ],
    "fact": "verso 1827. Collezioni statali d’arte di Dresda."
  },
  "cfhuttens": {
    "text": [
      "In una chiesa gotica in rovina un uomo sta davanti a una tomba di pietra, e la luce della sera brilla attraverso le alte finestre.",
      "Il quadro ricorda il poeta Ulrich von Hutten, morto 300 anni prima."
    ],
    "fact": "1823. Klassik Stiftung Weimar."
  },
  "cfearlysnow": {
    "text": [
      "Un sentiero chiaro porta in un bosco scuro di abeti, con la prima neve sui rami.",
      "Giovani abeti stanno sul bordo come piccole sentinelle."
    ],
    "fact": "1827. Hamburger Kunsthalle."
  },
  "cfice": {
    "text": [
      "Lastroni di ghiaccio si accavallano in un picco aguzzo.",
      "In basso a destra si riconosce la poppa di una nave rimasta prigioniera del ghiaccio."
    ],
    "fact": "1823–1824. Hamburger Kunsthalle."
  },
  "cfmoonmen": {
    "text": [
      "Due uomini con il mantello stanno al limite del bosco sotto una quercia sradicata e guardano la luna.",
      "Uno si appoggia alla spalla dell’altro."
    ],
    "fact": "1819–1820. Collezioni statali d’arte di Dresda."
  },
  "cfmoonmenmet": {
    "text": [
      "Qualche anno dopo Friedrich dipinge di nuovo il soggetto.",
      "Ancora due uomini stanno sotto l’albero nodoso, e la sottile falce di luna brilla tra i rami."
    ],
    "fact": "verso 1825–1830. Metropolitan Museum of Art, New York."
  },
  "cfmooncouple": {
    "text": [
      "Un uomo e una donna stanno vicini su un sentiero nel bosco e guardano la falce di luna.",
      "La donna posa la mano sulla spalla dell’uomo."
    ],
    "fact": "verso 1824. Alte Nationalgalerie, Berlino."
  },
  "cfmoongrise": {
    "text": [
      "Tre persone siedono su un grande masso della riva e guardano il mare, sopra il quale sorge la luna.",
      "Due velieri rientrano nel crepuscolo."
    ],
    "fact": "1822. Alte Nationalgalerie, Berlino."
  },
  "cfmoonherm": {
    "text": [
      "Sulla riva due figure guardano l’acqua, dove la luna esce da dietro le nuvole.",
      "Il cielo brilla di luce dorata."
    ],
    "fact": "1821. Museo dell’Ermitage, San Pietroburgo."
  },
  "cflonetree": {
    "text": [
      "Una vecchia quercia sta da sola in un’ampia pianura davanti a montagne azzurre.",
      "Sotto di essa si appoggia un pastore con il suo gregge."
    ],
    "fact": "1822. Alte Nationalgalerie, Berlino."
  },
  "cfcrows": {
    "text": [
      "Una quercia nodosa e quasi spoglia cresce su una collina nella luce della sera.",
      "Le cornacchie volano intorno ai suoi rami contorti."
    ],
    "fact": "verso 1822. Museo del Louvre, Parigi."
  },
  "cfstages": {
    "text": [
      "Sulla riva stanno un vecchio, un uomo più giovane, una donna e due bambini con una bandierina.",
      "Sul mare navigano cinque navi, vicine e lontane."
    ],
    "fact": "verso 1834. Museo di belle arti, Lipsia."
  },
  "cfwindowwood": {
    "text": [
      "Alberi alti e slanciati stanno alla luce della luna.",
      "In basso, a terra, piccole figure siedono accanto a un fuoco."
    ],
    "fact": "verso 1823–1830. Alte Nationalgalerie, Berlino."
  },
  "cfriesenberlin": {
    "text": [
      "Colline scure stanno in primo piano e dietro le catene montuose si perdono nella calda luce della sera.",
      "Il cielo occupa più di metà del quadro."
    ],
    "fact": "verso 1830–1835. Alte Nationalgalerie, Berlino."
  },
  "cfriesenmem": {
    "text": [
      "Davanti ci sono pietre e un ruscello, dietro si alzano montagne rosate e innevate.",
      "Il quadro nasce molti anni dopo la camminata del 1810."
    ],
    "fact": "verso 1835. Museo dell’Ermitage, San Pietroburgo."
  },
  "cfriesenoslo": {
    "text": [
      "Oltre una brughiera bruna con piccoli alberi si vedono lontani crinali azzurri.",
      "Nuvole leggere attraversano il cielo."
    ],
    "fact": "verso 1835. Museo nazionale, Oslo."
  },
  "cfriesensun": {
    "text": [
      "La luce del sole irrompe tra le nuvole e cade su pendii verdi con abeti.",
      "Una parte delle montagne resta in ombra."
    ],
    "fact": "verso 1835. Saint Louis Art Museum."
  },
  "cfriesenpeaks": {
    "text": [
      "Un tronco caduto giace di traverso su un prato, con abeti dietro.",
      "Sopra le nuvole si innalza una cima frastagliata."
    ],
    "fact": "verso 1835. Kimbell Art Museum, Fort Worth."
  },
  "cfrosenberg": {
    "text": [
      "Oltre colline e valli brune si vede il Rosenberg a forma di cono nella foschia.",
      "La luce è morbida e limpida."
    ],
    "fact": "verso 1835. Städel Museum, Francoforte."
  },
  "cfeldenamtn": {
    "text": [
      "Le rovine dell’abbazia di Eldena sorgono su un altopiano davanti ai Monti dei Giganti.",
      "In realtà i due luoghi distano centinaia di chilometri."
    ],
    "fact": "verso 1830–1834. Museo di Stato della Pomerania, Greifswald."
  },
  "cfbohemia28": {
    "text": [
      "Campi verde-giallo con solchi bruni si stendono fino a dolci colline.",
      "In alto a sinistra Friedrich ha annotato luogo e data."
    ],
    "fact": "1828. Museo di Stato della Pomerania, Greifswald."
  },
  "cfmoonshore": {
    "text": [
      "La luce della luna brilla sull’acqua tra pietre e nuvole scure.",
      "È considerato uno degli ultimi dipinti a olio di Friedrich."
    ],
    "fact": "1835–1836. Hamburger Kunsthalle."
  },
  "cfowlgothic": {
    "text": [
      "Una civetta sta in una stretta nicchia gotica di pietra, con un chiarore dietro di sé.",
      "Il foglio è disegnato a seppia."
    ],
    "fact": "verso 1836. Museo dell’Ermitage, San Pietroburgo."
  },
  "cfneurathen": {
    "text": [
      "Alte guglie di arenaria si ergono tra gli abeti nei monti di arenaria dell’Elba.",
      "Davanti cresce erica su una roccia."
    ],
    "fact": "verso 1837. Museo dell’Ermitage, San Pietroburgo."
  },
  "cfschmiede": {
    "text": [
      "Un uomo si appoggia a uno steccato e guarda oltre i campi gialli verso le montagne azzurre.",
      "Il delicato acquerello mostra i Monti dei Giganti a memoria."
    ],
    "fact": "verso 1837. Museo Puškin, Mosca."
  },
  "cfeldenaeast": {
    "text": [
      "L’alto muro a timpano delle rovine sorge accanto a una bassa casa colonica.",
      "Friedrich aveva disegnato Eldena più volte fin dalla giovinezza."
    ],
    "fact": "1836. Kupferstich-Kabinett, Dresda."
  },
  "cfteplitz": {
    "text": [
      "Su carta colorata Friedrich disegna un dorso boscoso e dietro l’aguzzo Milleschauer sopra le nuvole.",
      "Il foglio porta la scritta Teplitz e la data 23 settembre 1835, dal periodo della sua cura."
    ],
    "fact": "1835. Germanisches Nationalmuseum, Norimberga."
  },
  "cfgraves": {
    "text": [
      "In un’ampia pianura chiara stanno alcune lapidi, e davanti una vanga è piantata nella terra.",
      "Il quieto foglio a seppia è una delle opere tarde."
    ],
    "fact": "verso 1835–1837. Albertina, Vienna."
  },
  "cflonelybank": {
    "text": [
      "Grandi pietre rotonde giacciono sulla riva e la luna splende sopra l’acqua quieta.",
      "Friedrich ha dipinto la scena in caldi toni seppia."
    ],
    "fact": "verso 1837. National Gallery of Art, Washington."
  },
  "cfwalkdusk": {
    "text": [
      "Un uomo sta al crepuscolo accanto a un antico dolmen tra alberi spogli.",
      "Sopra di lui brilla la sottile falce di luna."
    ],
    "fact": "verso 1830–1835. J. Paul Getty Museum, Los Angeles."
  },
  "cfsunsetlate": {
    "text": [
      "Due uomini stanno fianco a fianco su un’altura e guardano il sole che tramonta sul mare.",
      "Le loro figure sono quasi nere contro il cielo luminoso."
    ],
    "fact": "verso 1830–1835. Museo dell’Ermitage, San Pietroburgo."
  },
  "cfeveningstar": {
    "text": [
      "Una famiglia torna a casa su una collina verde e un bambino saluta con le braccia alzate.",
      "All’orizzonte stanno le torri di Dresda e sopra brilla la stella della sera."
    ],
    "fact": "verso 1830. Freies Deutsches Hochstift, Francoforte."
  },
  "cfgrossegehege": {
    "text": [
      "Dopo un’inondazione restano pozze sui prati dell’Elba che riflettono il cielo della sera.",
      "All’orizzonte c’è una fila scura di alberi."
    ],
    "fact": "1832. Collezioni statali d’arte di Dresda."
  },
  "cfeastermorn": {
    "text": [
      "Tre donne camminano di buon mattino su un sentiero tra alberi spogli.",
      "Sopra di loro c’è ancora la luna pallida."
    ],
    "fact": "verso 1828–1835. Museo Nacional Thyssen-Bornemisza, Madrid."
  },
  "cfeveningbaltic": {
    "text": [
      "Sulla spiaggia alcune persone siedono accanto a un piccolo fuoco e al largo ci sono velieri sull’acqua calma.",
      "Il cielo è pieno di nuvole della sera."
    ],
    "fact": "verso 1831. Collezioni statali d’arte di Dresda."
  },
  "cfharboureve": {
    "text": [
      "Molti alberi e vele stanno vicini nel porto.",
      "L’ultima luce tinge il cielo di viola e di giallo."
    ],
    "fact": "verso 1828. Collezioni statali d’arte di Dresda."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
