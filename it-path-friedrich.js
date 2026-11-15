// v10.0 IT content for Caspar David Friedrich’s life journey, Part 1 (1774–1817). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Kunsthalle Mannheim": "Kunsthalle Mannheim",
  "Pommersches Landesmuseum, Greifswald": "Museo di Stato della Pomerania, Greifswald",
  "Statens Museum for Kunst, Kopenhagen": "SMK – Galleria nazionale di Danimarca, Copenaghen",
  "Hamburger Kunsthalle": "Hamburger Kunsthalle",
  "Staatliche Kunsthalle Karlsruhe": "Staatliche Kunsthalle Karlsruhe",
  "Kupferstichkabinett, Berlin": "Kupferstichkabinett, Berlino",
  "Hamburger Kunsthalle, Kupferstichkabinett": "Hamburger Kunsthalle, gabinetto delle stampe",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Klassik Stiftung Weimar": "Klassik Stiftung Weimar",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Albertina, Wien": "Albertina, Vienna",
  "Staatliche Kunstsammlungen Dresden": "Collezioni statali d’arte di Dresda",
  "Österreichische Galerie Belvedere, Wien": "Belvedere, Vienna",
  "Staatsgalerie Stuttgart": "Staatsgalerie Stuttgart",
  "Thüringer Landesmuseum Heidecksburg, Rudolstadt": "Museo statale Heidecksburg, Rudolstadt",
  "Alte Nationalgalerie, Berlin": "Alte Nationalgalerie, Berlino",
  "Museum Folkwang, Essen": "Museum Folkwang, Essen",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Puschkin-Museum, Moskau": "Museo Puškin, Mosca",
  "National Gallery, London": "National Gallery, Londra",
  "Museum für Kunst und Kulturgeschichte, Dortmund": "Museo d’arte e di storia culturale, Dortmund",
  "Privatsammlung": "Collezione privata",
  "Stiftung Preussische Schlösser und Gärten, Berlin": "Fondazione dei palazzi e giardini prussiani, Berlino",
  "Nationalmuseum Oslo": "Museo nazionale, Oslo"
});
  P.works = Object.assign(P.works || {}, {
  "cffatherread": {
    "title": "Il padre che legge",
    "museum": "Kunsthalle Mannheim"
  },
  "cffather": {
    "title": "Ritratto del padre",
    "museum": "Museo di Stato della Pomerania, Greifswald"
  },
  "cfheiden": {
    "title": "Madre Heiden",
    "museum": "Museo di Stato della Pomerania, Greifswald"
  },
  "cfself00": {
    "title": "Autoritratto",
    "museum": "SMK – Galleria nazionale di Danimarca, Copenaghen"
  },
  "cfluisen": {
    "title": "La fonte di Luisa a Frederiksdal",
    "museum": "Hamburger Kunsthalle"
  },
  "cfemilia": {
    "title": "La fonte di Emilia vicino a Copenaghen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfpavillon": {
    "title": "Paesaggio con padiglione",
    "museum": "Hamburger Kunsthalle"
  },
  "cfcopen": {
    "title": "Paesaggio vicino a Copenaghen",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "cfoak": {
    "title": "Quercia",
    "museum": "Kupferstichkabinett, Berlino"
  },
  "cfwasserburg": {
    "title": "Paesaggio al chiaro di luna con rovina di un castello",
    "museum": "SMK – Galleria nazionale di Danimarca, Copenaghen"
  },
  "cfamselfall": {
    "title": "La cascata Amselfall presso Rathen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfkriebstein": {
    "title": "Il castello di Kriebstein vicino a Waldheim",
    "museum": "Museo di Stato della Pomerania, Greifswald"
  },
  "cftharandt": {
    "title": "Rovina, chiesa e case a Tharandt",
    "museum": "Kupferstichkabinett, Berlino"
  },
  "cfelbstr": {
    "title": "Strada lungo l’Elba con un arco in rovina",
    "museum": "Hamburger Kunsthalle"
  },
  "cftrees": {
    "title": "Gruppo di alberi",
    "museum": "Kupferstichkabinett, Berlino"
  },
  "cfclouds": {
    "title": "Studio di nuvole",
    "museum": "Kupferstichkabinett, Berlino"
  },
  "cfflatruegen": {
    "title": "Paesaggio piano a Rügen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfziehbrunnen": {
    "title": "Capanna con pozzo a Rügen",
    "museum": "Museo di Stato della Pomerania, Greifswald"
  },
  "cfselfarm": {
    "title": "Autoritratto appoggiato al braccio",
    "museum": "Hamburger Kunsthalle"
  },
  "cfarkonasun": {
    "title": "Veduta di Arkona con il sole nascente",
    "museum": "Hamburger Kunsthalle"
  },
  "cfsteg": {
    "title": "Passerella sul fiume davanti a un gruppo di alberi",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cfruegenbay": {
    "title": "Paesaggio di Rügen con una baia",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfpilgrim": {
    "title": "Pellegrinaggio all’alba",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfmadonna": {
    "title": "Statua della Madonna in montagna",
    "museum": "Art Institute of Chicago"
  },
  "cfshepherd": {
    "title": "La costa orientale di Rügen con un pastore",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cfarkonamoon": {
    "title": "Veduta di Arkona con la luna nascente",
    "museum": "Albertina, Vienna"
  },
  "cfdeadoak": {
    "title": "Paesaggio estivo con una quercia secca",
    "museum": "Klassik Stiftung Weimar"
  },
  "cftetschen": {
    "title": "La croce in montagna (altare di Tetschen)",
    "museum": "Collezioni statali d’arte di Dresda"
  },
  "cfdolmen": {
    "title": "Dolmen nella neve",
    "museum": "Collezioni statali d’arte di Dresda"
  },
  "cfelbtal": {
    "title": "Veduta della valle dell’Elba",
    "museum": "Collezioni statali d’arte di Dresda"
  },
  "cffog": {
    "title": "Spiaggia nella nebbia",
    "museum": "Belvedere, Vienna"
  },
  "cffisher": {
    "title": "Spiaggia con pescatore",
    "museum": "Belvedere, Vienna"
  },
  "cfbohemia": {
    "title": "Paesaggio boemo",
    "museum": "Staatsgalerie Stuttgart"
  },
  "cfmorningfog": {
    "title": "Nebbia mattutina in montagna",
    "museum": "Museo statale Heidecksburg, Rudolstadt"
  },
  "cfmonk": {
    "title": "Il monaco in riva al mare",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfoakabbey": {
    "title": "L’abbazia nel querceto",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfrainbow": {
    "title": "Paesaggio montano con arcobaleno",
    "museum": "Museum Folkwang, Essen"
  },
  "cfself10": {
    "title": "Autoritratto",
    "museum": "Kupferstichkabinett, Berlino"
  },
  "cfnewmoon": {
    "title": "Luna nuova sui Monti dei Giganti",
    "museum": "National Gallery of Art, Washington"
  },
  "cfriesenmorning": {
    "title": "Mattino sui Monti dei Giganti",
    "museum": "Fondazione dei palazzi e giardini prussiani, Berlino"
  },
  "cfwarmbrunn": {
    "title": "Veduta da Warmbrunn verso la Kleine Sturmhaube",
    "museum": "Museo Puškin, Mosca"
  },
  "cfharz": {
    "title": "Gola rocciosa nello Harz",
    "museum": "Museo di Stato della Pomerania, Greifswald"
  },
  "cfwinterlon": {
    "title": "Paesaggio invernale",
    "museum": "National Gallery, Londra"
  },
  "cfwinterchurch": {
    "title": "Paesaggio invernale con chiesa",
    "museum": "Museo d’arte e di storia culturale, Dortmund"
  },
  "cfcrosswood": {
    "title": "Croce nel bosco",
    "museum": "Staatsgalerie Stuttgart"
  },
  "cfheroes": {
    "title": "Tombe di antichi eroi",
    "museum": "Hamburger Kunsthalle"
  },
  "cfchasseur": {
    "title": "Il cacciatore nel bosco",
    "museum": "Collezione privata"
  },
  "cfcrossbaltic": {
    "title": "Croce sul Baltico",
    "museum": "Fondazione dei palazzi e giardini prussiani, Berlino"
  },
  "cfharbour": {
    "title": "Veduta di un porto",
    "museum": "Fondazione dei palazzi e giardini prussiani, Berlino"
  },
  "cftwomen": {
    "title": "Due uomini in riva al mare",
    "museum": "Alte Nationalgalerie, Berlino"
  },
  "cfafterstorm": {
    "title": "Dopo la tempesta",
    "museum": "SMK – Galleria nazionale di Danimarca, Copenaghen"
  },
  "cfgreifsmoon": {
    "title": "Greifswald al chiaro di luna",
    "museum": "Museo nazionale, Oslo"
  }
});
  P.paths = P.paths || {};
  P.paths.friedrich = {
  "title": "Il percorso di vita di Caspar David Friedrich",
  "part": "Parte 1 · 1774–1817",
  "subtitle": "Da Greifswald a Dresda",
  "intro": "Caspar David Friedrich nasce a Greifswald il 5 settembre 1774. Questa prima parte lo segue dall’infanzia sul Baltico e dall’accademia di Copenaghen, attraverso Dresda, le camminate sull’isola di Rügen e nel Harz, i disegni a seppia e il premio di Weimar del 1805, l’altare di Tetschen e Il monaco in riva al mare, fino ai quadri delle guerre di liberazione verso il 1817.",
  "ending": [
    "Nel 1817 Friedrich dipinge Due uomini in riva al mare e vede Greifswald al chiaro di luna. È membro dell’accademia di Dresda e resta nella città diventata il centro della sua vita.",
    "Nella parte successiva arrivano il matrimonio con Caroline nel 1818, le Bianche scogliere di Rügen, Il viandante sul mare di nebbia, Il mare di ghiaccio, l’attacco del 1835, la sua morte nel 1840 e la tarda riscoperta."
  ],
  "epilogue": "Nella parte successiva arrivano il matrimonio con Caroline nel 1818, le Bianche scogliere di Rügen, Il viandante sul mare di nebbia, Il mare di ghiaccio, l’attacco del 1835, la sua morte nel 1840 e la tarda riscoperta.",
  "life": "1774–1840"
};
  P.stations = Object.assign(P.stations || {}, {
  "cfgreifswald": {
    "place": "Greifswald",
    "when": "1774–1794",
    "mapLabel": "Greifswald",
    "intro": [
      "Caspar David Friedrich nasce a Greifswald il 5 settembre 1774, sesto di dieci figli del saponiere e ceraiolo Adolf Gottlieb Friedrich e di Sophie Dorothea. La madre muore nel 1781, quando lui ha sette anni.",
      "Nel 1787 muore anche il fratello Johann Christoffer, nel tentativo di salvarlo da un incidente sul ghiaccio. La perdita gli resta a lungo presente. Da ragazzo prende lezioni di disegno da Johann Gottfried Quistorp a Greifswald."
    ]
  },
  "cfcopenhagen": {
    "place": "L’accademia di Copenaghen",
    "when": "1794–1798",
    "mapLabel": "Copenaghen",
    "intro": [
      "Dal 1794 al 1798 Friedrich studia alla Reale Accademia di Copenaghen, presso Jens Juel, Nicolai Abildgaard e Christian August Lorentzen. Disegna nei dintorni della città, presso fonti, padiglioni e in paesaggi al chiaro di luna.",
      "L’accademia danese è considerata allora una delle migliori del Nord. Qui impara a osservare con esattezza la natura e l’ordine calmo e chiaro che più tardi segnerà i suoi paesaggi."
    ]
  },
  "cfdresden": {
    "place": "Arrivo a Dresda",
    "when": "1798–1800",
    "mapLabel": "Dresda",
    "intro": [
      "Nell’autunno del 1798 Friedrich si stabilisce a Dresda. La città, con la sua pinacoteca e i paesaggi lungo l’Elba, sarà la sua casa per il resto della vita.",
      "Nel 1799 espone per la prima volta alla mostra dell’accademia di Dresda. Cammina nella Svizzera sassone e nelle valli dei dintorni e disegna alberi, rocce, castelli e nuvole."
    ]
  },
  "cfruegen": {
    "place": "Rügen e Greifswald",
    "when": "1801–1803",
    "mapLabel": "Rügen",
    "intro": [
      "Nel 1801 Friedrich va per la prima volta sull’isola di Rügen e resta a lungo a Greifswald. Percorre l’isola a piedi e disegna coste, campi, capanne e il capo Arkona.",
      "Nell’estate del 1802 è di nuovo a Dresda. Lì conosce il poeta Ludwig Tieck e il pittore Philipp Otto Runge. Ora lavora molto con penna, pennello e seppia."
    ]
  },
  "cfsepia": {
    "place": "La seppia e il premio di Weimar",
    "when": "1803–1806",
    "mapLabel": "Loschwitz",
    "intro": [
      "Nel 1803 Friedrich prende un alloggio estivo a Loschwitz, vicino a Dresda, e fa un primo cammino attraverso la Boemia settentrionale. In grandi fogli a seppia sviluppa paesaggi ampi e silenziosi, fatti di luce e nebbia.",
      "Il 25 agosto 1805 riceve a Weimar metà del premio degli Amici dell’arte riuniti intorno a Goethe, per due disegni a seppia: una processione nella luce del mattino e pescatori sulla spiaggia. Il suo nome diventa così noto oltre Dresda."
    ]
  },
  "cftetschenst": {
    "place": "La Boemia e l’altare di Tetschen",
    "when": "1807–1808",
    "mapLabel": "Boemia",
    "intro": [
      "Nel 1807 Friedrich percorre di nuovo la Boemia e comincia a dipingere a olio. I nuovi quadri mostrano nebbia sul mare, colline innevate e ampie valli con pochi segni di vita umana.",
      "Al Natale del 1808 mostra nel suo atelier la Croce in montagna, più tardi chiamata altare di Tetschen. Il critico Basilius von Ramdohr attacca duramente il quadro, mentre pittori come Gerhard von Kügelgen lo difendono. La disputa rende Friedrich ampiamente noto."
    ]
  },
  "cfmonkst": {
    "place": "Il monaco in riva al mare",
    "when": "1809–1810",
    "mapLabel": "Berlino",
    "intro": [
      "Nell’autunno del 1810 Friedrich espone alla mostra dell’accademia di Berlino due quadri in coppia: Il monaco in riva al mare e L’abbazia nel querceto. Su iniziativa del giovane principe ereditario, la casa reale prussiana acquista entrambi i quadri.",
      "Nello stesso anno Friedrich diventa membro esterno dell’accademia di Berlino. Il 18 settembre 1810 Goethe lo visita nel suo atelier di Dresda. Tra i suoi amici ci sono ora lo scrittore Heinrich von Kleist e il pittore Georg Friedrich Kersting."
    ]
  },
  "cfmountains": {
    "place": "Monti dei Giganti e Harz",
    "when": "1810–1811",
    "mapLabel": "Monti dei Giganti",
    "intro": [
      "Nell’estate del 1810 Friedrich attraversa a piedi i Monti dei Giganti con Georg Friedrich Kersting. Per molti anni userà nei suoi quadri gli schizzi di vette, creste e nebbia mattutina.",
      "Nel giugno 1811 segue un cammino attraverso lo Harz con lo scultore Christian Gottlieb Kühn. In luglio visita Goethe a Jena. In questi anni nascono anche quieti quadri invernali con chiese e abeti nella neve."
    ]
  },
  "cfliberation": {
    "place": "Le guerre di liberazione",
    "when": "1812–1817",
    "mapLabel": "Greifswald",
    "intro": [
      "Negli anni delle guerre di liberazione contro Napoleone, nel 1813 e nel 1814, Friedrich dipinge quadri pieni del ricordo di antichi eroi e di tombe. L’amico Kersting parte per la guerra come volontario. Nel 1814 Friedrich espone a Dresda Tombe di antichi eroi e Il cacciatore nel bosco.",
      "Nel 1816 il re di Prussia compra Veduta di un porto e la regala al principe ereditario. Nello stesso anno Friedrich diventa membro dell’accademia di Dresda. Nel 1817 dipinge Due uomini in riva al mare, Dopo la tempesta e Greifswald al chiaro di luna."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cffatherread": {
    "text": [
      "Un anziano con gli occhiali siede al tavolo e legge un grosso libro.",
      "Friedrich disegna il padre Adolf Gottlieb in un campo ovale."
    ],
    "fact": "verso 1801. Kunsthalle Mannheim."
  },
  "cffather": {
    "text": [
      "Il padre porta un alto berretto di pelliccia e un cappotto con collo di pelliccia.",
      "Guarda di lato, calmo e serio."
    ],
    "fact": "1798. Museo di Stato della Pomerania, Greifswald."
  },
  "cfheiden": {
    "text": [
      "Una donna anziana con una cuffia pieghettata guarda fuori dal quadro.",
      "Dopo la morte della madre, Madre Heiden, la governante, aiutò a crescere i figli della famiglia."
    ],
    "fact": "verso 1798. Museo di Stato della Pomerania, Greifswald."
  },
  "cfself00": {
    "text": [
      "Il giovane Friedrich ci guarda con grandi occhi attenti.",
      "In fondo al foglio ci sono righe scritte di suo pugno."
    ],
    "fact": "verso 1800. SMK – Galleria nazionale di Danimarca, Copenaghen."
  },
  "cfluisen": {
    "text": [
      "Sotto alberi alti c’è un piccolo monumento sopra una sorgente.",
      "Due uomini e un cane riposano davanti, all’ombra."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfemilia": {
    "text": [
      "Una stele commemorativa sta al margine di un giardino, dietro uno steccato.",
      "Lo studente Friedrich dipinge il luogo con un acquerello delicato."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfpavillon": {
    "text": [
      "Dietro uno steccato di legno e alcune pietre c’è un padiglione con terrazza sul tetto.",
      "A destra si piega un albero spoglio."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfcopen": {
    "text": [
      "Da una collina lo sguardo spazia su campi e boschi fino alle torri della città.",
      "Un albero nodoso incornicia la vista."
    ],
    "fact": "1797. Staatliche Kunsthalle Karlsruhe."
  },
  "cfoak": {
    "text": [
      "Con la matita Friedrich segue ogni ramo di una vecchia quercia.",
      "In basso a sinistra c’è l’anno 1797."
    ],
    "fact": "1797. Kupferstichkabinett, Berlino."
  },
  "cfwasserburg": {
    "text": [
      "La luna splende tra le nuvole su un ponte levatoio e una torre in rovina.",
      "Già a Copenaghen Friedrich è attratto dalla luce della notte."
    ],
    "fact": "1797. SMK – Galleria nazionale di Danimarca, Copenaghen."
  },
  "cfamselfall": {
    "text": [
      "Un ruscello scende tra massi e abeti.",
      "Friedrich disegna la Svizzera sassone con una matita sottile."
    ],
    "fact": "1799. Hamburger Kunsthalle."
  },
  "cfkriebstein": {
    "text": [
      "In alto sulla valle il castello sorge sulla sua roccia.",
      "Friedrich lo fissa con linee e acquerellature delicate."
    ],
    "fact": "1799. Museo di Stato della Pomerania, Greifswald."
  },
  "cftharandt": {
    "text": [
      "A sinistra c’è una torre di castello in rovina, a destra una chiesa con un campanile appuntito.",
      "Molto è solo accennato con tratti leggeri."
    ],
    "fact": "1799. Kupferstichkabinett, Berlino."
  },
  "cfelbstr": {
    "text": [
      "Attraverso un vecchio arco di pietra si vede il fiume e l’altra riva.",
      "Lungo la strada ci sono botti e casse."
    ],
    "fact": "1799. Hamburger Kunsthalle."
  },
  "cftrees": {
    "text": [
      "Due alti alberi frondosi crescono vicini.",
      "Con penna e pennello Friedrich dà a ogni ciuffo di foglie luce e ombra."
    ],
    "fact": "1799. Kupferstichkabinett, Berlino."
  },
  "cfclouds": {
    "text": [
      "Un foglio di taccuino mostra solo nuvole, in contorni sottili.",
      "Friedrich osserva il cielo con la stessa cura di alberi e rocce."
    ],
    "fact": "1799. Kupferstichkabinett, Berlino."
  },
  "cfflatruegen": {
    "text": [
      "Lo sguardo spazia su campi piatti e siepi fino all’orizzonte.",
      "Una griglia sottile aiuta Friedrich a disegnare con esattezza l’ampia distesa."
    ],
    "fact": "1801. Hamburger Kunsthalle."
  },
  "cfziehbrunnen": {
    "text": [
      "Una collina attraversa il foglio in diagonale; a destra c’è una capanna con un pozzo.",
      "In alto a sinistra Friedrich annota la data."
    ],
    "fact": "1802. Museo di Stato della Pomerania, Greifswald."
  },
  "cfselfarm": {
    "text": [
      "Friedrich appoggia la testa sulla mano e tiene una penna da disegno.",
      "Accanto a lui si apre una finestra con piante."
    ],
    "fact": "verso 1802. Hamburger Kunsthalle."
  },
  "cfarkonasun": {
    "text": [
      "Il sole avvolge la costa di Rügen in una luce calda.",
      "Sulla riva c’è una barca e gli alberi si piegano al vento."
    ],
    "fact": "1803. Hamburger Kunsthalle."
  },
  "cfsteg": {
    "text": [
      "Una stretta passerella attraversa un fiume, dietro ci sono alti pioppi.",
      "Friedrich ha inciso lui stesso questo foglio."
    ],
    "fact": "verso 1800. Metropolitan Museum of Art, New York."
  },
  "cfruegenbay": {
    "text": [
      "Dietro colline e campi brilla un’ampia baia.",
      "Il cielo occupa più di metà del quadro."
    ],
    "fact": "1802. Klassik Stiftung Weimar."
  },
  "cfpilgrim": {
    "text": [
      "Una lunga processione sale su una collina verso una croce.",
      "La seppia fa svanire il paesaggio in una chiara foschia mattutina."
    ],
    "fact": "verso 1805. Klassik Stiftung Weimar."
  },
  "cfmadonna": {
    "text": [
      "Su una roccia sopra gli abeti c’è una piccola statua della Madonna.",
      "La nebbia separa i piani del bosco."
    ],
    "fact": "verso 1804. Art Institute of Chicago."
  },
  "cfshepherd": {
    "text": [
      "Un pastore sta con il suo gregge sopra il mare.",
      "Il cielo è quasi vuoto e chiaro."
    ],
    "fact": "verso 1806. Metropolitan Museum of Art, New York."
  },
  "cfarkonamoon": {
    "text": [
      "La luna sorge sul mare e la costa resta nell’ombra.",
      "Sulla riva le reti da pesca sono stese ad asciugare."
    ],
    "fact": "verso 1805. Albertina, Vienna."
  },
  "cfdeadoak": {
    "text": [
      "Una quercia spoglia sta in mezzo a un paesaggio estivo.",
      "Friedrich mette accanto la vita e il passare del tempo."
    ],
    "fact": "verso 1805. Klassik Stiftung Weimar."
  },
  "cftetschen": {
    "text": [
      "Su una cima rocciosa si erge una croce tra gli abeti, dietro brilla la luce della sera.",
      "Friedrich dipinge un paesaggio come pala d’altare."
    ],
    "fact": "1807–1808. Collezioni statali d’arte di Dresda."
  },
  "cfdolmen": {
    "text": [
      "Tre querce spoglie circondano un’antica tomba di pietra nella neve.",
      "La tomba ricorda un passato lontano."
    ],
    "fact": "1807. Collezioni statali d’arte di Dresda."
  },
  "cfelbtal": {
    "text": [
      "Davanti ci sono abeti scuri su una collina.",
      "Dietro si apre la valle dell’Elba nella foschia del mattino."
    ],
    "fact": "verso 1807. Collezioni statali d’arte di Dresda."
  },
  "cffog": {
    "text": [
      "Un’ancora giace sulla spiaggia e una barca quasi scompare nella nebbia grigia.",
      "È uno dei primi dipinti a olio di Friedrich."
    ],
    "fact": "verso 1807. Belvedere, Vienna."
  },
  "cffisher": {
    "text": [
      "Un pescatore sta accanto alle sue reti sulla riva piatta.",
      "Il cielo e il mare si confondono nella foschia."
    ],
    "fact": "verso 1807. Belvedere, Vienna."
  },
  "cfbohemia": {
    "text": [
      "Sopra una pianura scura si alza un’unica montagna azzurra.",
      "Il cielo passa dal giallo chiaro all’azzurro limpido."
    ],
    "fact": "verso 1808. Staatsgalerie Stuttgart."
  },
  "cfmorningfog": {
    "text": [
      "La nebbia sale dalla valle e avvolge una cima.",
      "In cima alla roccia si vede una piccola croce."
    ],
    "fact": "1808. Museo statale Heidecksburg, Rudolstadt."
  },
  "cfmonk": {
    "text": [
      "Una piccola figura sta sulla spiaggia davanti al mare scuro e a un cielo immenso.",
      "Quasi nessuno aveva mai dipinto un paesaggio così vuoto."
    ],
    "fact": "1808–1810. Alte Nationalgalerie, Berlino."
  },
  "cfoakabbey": {
    "text": [
      "Tra querce spoglie sorge la rovina di una chiesa gotica nella luce della sera.",
      "Sopra appare la sottile falce della luna."
    ],
    "fact": "1809–1810. Alte Nationalgalerie, Berlino."
  },
  "cfrainbow": {
    "text": [
      "Un arcobaleno si stende sopra una montagna scura.",
      "Davanti, un viandante siede su una roccia."
    ],
    "fact": "verso 1810. Museum Folkwang, Essen."
  },
  "cfself10": {
    "text": [
      "Con barba e riccioli, Friedrich ci guarda serio e intenso.",
      "Il fine disegno a gessetto risale all’anno del suo successo a Berlino."
    ],
    "fact": "verso 1810. Kupferstichkabinett, Berlino."
  },
  "cfnewmoon": {
    "text": [
      "La sottile falce di luna sta sopra le creste azzurre dei monti.",
      "Il foglio unisce acquerello e matita."
    ],
    "fact": "verso 1810. National Gallery of Art, Washington."
  },
  "cfriesenmorning": {
    "text": [
      "Sopra un mare di creste si erge una roccia con una croce.",
      "Friedrich dipinge il quadro dopo il suo cammino con Kersting."
    ],
    "fact": "1810–1811. Fondazione dei palazzi e giardini prussiani, Berlino."
  },
  "cfwarmbrunn": {
    "text": [
      "Oltre prati verdi e boschi si alzano creste azzurre.",
      "La cima più alta è nella luce."
    ],
    "fact": "verso 1810. Museo Puškin, Mosca."
  },
  "cfharz": {
    "text": [
      "Pareti di roccia ripide e alberi racchiudono una gola stretta.",
      "Il cammino nello Harz del 1811 offre a Friedrich molti motivi simili."
    ],
    "fact": "verso 1811. Museo di Stato della Pomerania, Greifswald."
  },
  "cfwinterlon": {
    "text": [
      "Nella neve un uomo riposa contro una roccia davanti a giovani abeti.",
      "Dietro, nella nebbia, appare una chiesa gotica."
    ],
    "fact": "1811. National Gallery, Londra."
  },
  "cfwinterchurch": {
    "text": [
      "Abeti stanno nella neve, dietro una chiesa emerge dalla foschia.",
      "Il quadro fa coppia con il paesaggio invernale di Londra."
    ],
    "fact": "1811. Museo d’arte e di storia culturale, Dortmund."
  },
  "cfcrosswood": {
    "text": [
      "Tra alti abeti c’è una croce presso una sorgente.",
      "Tra i tronchi filtra una luce chiara."
    ],
    "fact": "verso 1812. Staatsgalerie Stuttgart."
  },
  "cfheroes": {
    "text": [
      "In una gola rocciosa ci sono antiche tombe; una è dedicata a un eroe della libertà.",
      "Friedrich dipinge il quadro durante l’occupazione napoleonica."
    ],
    "fact": "1812. Hamburger Kunsthalle."
  },
  "cfchasseur": {
    "text": [
      "Un soldato francese solo sta davanti a un fitto bosco di abeti innevati.",
      "Un corvo è posato su un ceppo."
    ],
    "fact": "1813–1814. Collezione privata."
  },
  "cfcrossbaltic": {
    "text": [
      "Su rocce in riva al mare sta un’alta croce davanti al cielo della sera.",
      "All’orizzonte si vedono navi."
    ],
    "fact": "1815. Fondazione dei palazzi e giardini prussiani, Berlino."
  },
  "cfharbour": {
    "text": [
      "Grandi velieri riposano nel porto e il cielo brilla di giallo.",
      "Il re di Prussia compra il quadro nel 1816 per il principe ereditario."
    ],
    "fact": "1815–1816. Fondazione dei palazzi e giardini prussiani, Berlino."
  },
  "cftwomen": {
    "text": [
      "Due uomini stanno su pietre sulla riva e guardano il mare al crepuscolo.",
      "Ci voltano le spalle."
    ],
    "fact": "1817. Alte Nationalgalerie, Berlino."
  },
  "cfafterstorm": {
    "text": [
      "Una barca giace inclinata tra le rocce sulla riva, l’albero punta di sbieco verso il cielo.",
      "Il mare è di nuovo calmo."
    ],
    "fact": "1817. SMK – Galleria nazionale di Danimarca, Copenaghen."
  },
  "cfgreifsmoon": {
    "text": [
      "Dietro le reti da pesca sul prato si stagliano le torri di Greifswald.",
      "La luna sta sopra la città natale del pittore."
    ],
    "fact": "verso 1817. Museo nazionale, Oslo."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
