// v8.6 Italian content for Paul Cézanne’s life journey, Part 1 (1839–1886).
// Faithful translation of the existing DE/EN. No new facts.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Collezione non determinata",
  "Privatbesitz": "Collezione privata",
  "Saint Louis Art Museum": "Saint Louis Art Museum",
  "National Gallery, London": "National Gallery, Londra",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "Norton Simon Museum, Pasadena": "Norton Simon Museum, Pasadena",
  "Barnes Foundation, Philadelphia": "Barnes Foundation, Filadelfia",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Parigi",
  "Eremitage, Sankt Petersburg": "Ermitage, San Pietroburgo",
  "Harvard Art Museums, Cambridge": "Harvard Art Museums, Cambridge",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Brooklyn Museum, New York": "Brooklyn Museum, New York",
  "Dallas Museum of Art": "Dallas Museum of Art",
  "Detroit Institute of Arts": "Detroit Institute of Arts",
  "Cincinnati Art Museum": "Cincinnati Art Museum",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Columbus Museum of Art": "Columbus Museum of Art",
  "Israel Museum, Jerusalem": "Israel Museum, Gerusalemme",
  "National Museum of Western Art, Tokyo": "National Museum of Western Art, Tokyo"
});
  P.works = Object.assign(P.works || {}, {
  "czmother": {
    "title": "Ritratto della madre dell’artista",
    "museum": "Saint Louis Art Museum"
  },
  "czfather65": {
    "title": "Louis-Auguste Cézanne, il padre dell’artista",
    "museum": "National Gallery, Londra"
  },
  "czvalab66": {
    "title": "Antony Valabrègue",
    "museum": "National Gallery of Art, Washington"
  },
  "czhousejas": {
    "title": "La casa del Jas de Bouffan",
    "museum": "Collezione non determinata"
  },
  "czbread": {
    "title": "Pane e uova",
    "museum": "Cincinnati Art Museum"
  },
  "czsugar": {
    "title": "Zuccheriera, pere e tazza blu",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czgigot": {
    "title": "Pane e cosciotto d’agnello",
    "museum": "Kunsthaus Zürich"
  },
  "czfather66": {
    "title": "Il padre dell’artista, che legge «L’Événement»",
    "museum": "National Gallery of Art, Washington"
  },
  "czunclemonk": {
    "title": "Lo zio Dominique in veste di monaco",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czunclelaw": {
    "title": "Lo zio Dominique in veste di avvocato",
    "museum": "Collezione non determinata"
  },
  "czuncledom": {
    "title": "Lo zio Dominique",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "czclock": {
    "title": "L’orologio di marmo nero",
    "museum": "Collezione privata"
  },
  "czemperaire": {
    "title": "Achille Emperaire",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czsnowest": {
    "title": "Neve a L’Estaque",
    "museum": "Collezione non determinata"
  },
  "cztrench": {
    "title": "Il taglio ferroviario",
    "museum": "Barnes Foundation, Filadelfia"
  },
  "czvillageest": {
    "title": "Il villaggio di pescatori a L’Estaque",
    "museum": "Philadelphia Museum of Art"
  },
  "czhortense72": {
    "title": "Ritratto di Madame Cézanne",
    "museum": "Collezione non determinata"
  },
  "czself72": {
    "title": "Autoritratto con berretto",
    "museum": "Ermitage, San Pietroburgo"
  },
  "czlouvec": {
    "title": "Veduta di Louveciennes, secondo Pissarro",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czpendu": {
    "title": "La casa dell’impiccato",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czlacroix": {
    "title": "La casa del Père Lacroix",
    "museum": "National Gallery of Art, Washington"
  },
  "czquartier": {
    "title": "Quartiere Four ad Auvers-sur-Oise",
    "museum": "Philadelphia Museum of Art"
  },
  "czsmallpontoise": {
    "title": "Casette a Pontoise",
    "museum": "Harvard Art Museums, Cambridge"
  },
  "czauversview": {
    "title": "Veduta di Auvers-sur-Oise",
    "museum": "Collezione non determinata"
  },
  "czmadamered": {
    "title": "Madame Cézanne nella poltrona rossa",
    "museum": "Museum of Fine Arts, Boston"
  },
  "czchocquet": {
    "title": "Ritratto di Victor Chocquet",
    "museum": "Columbus Museum of Art"
  },
  "czcotesaint": {
    "title": "La Côte Saint-Denis a Pontoise",
    "museum": "Collezione non determinata"
  },
  "czjardinmau": {
    "title": "Il giardino di Maubuisson, Pontoise",
    "museum": "Collezione non determinata"
  },
  "czhermitage": {
    "title": "La Maison Rondest nel quartiere dell’Hermitage, Pontoise",
    "museum": "Collezione non determinata"
  },
  "czstill77": {
    "title": "Alzata di frutta e piatto di biscotti",
    "museum": "Collezione non determinata"
  },
  "cztoitsrouges": {
    "title": "L’Estaque con tetti rossi",
    "museum": "Collezione non determinata"
  },
  "czbay85": {
    "title": "La baia di Marsiglia, vista da L’Estaque",
    "museum": "Art Institute of Chicago"
  },
  "czriaux": {
    "title": "Case in Provenza: la valle dei Riaux presso L’Estaque",
    "museum": "National Gallery of Art, Washington"
  },
  "czchateauif": {
    "title": "L’Estaque e il Château d’If",
    "museum": "Collezione non determinata"
  },
  "czmorningest": {
    "title": "Veduta mattutina di L’Estaque in controluce",
    "museum": "Israel Museum, Gerusalemme"
  },
  "czpins": {
    "title": "L’Estaque, veduta attraverso i pini",
    "museum": "Collezione non determinata"
  },
  "czcliffs": {
    "title": "Veduta di L’Estaque",
    "museum": "Collezione non determinata"
  },
  "czallee": {
    "title": "Il viale del Jas de Bouffan",
    "museum": "Collezione non determinata"
  },
  "czpool": {
    "title": "La vasca del Jas de Bouffan",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czchestnut": {
    "title": "Viale di castagni al Jas de Bouffan",
    "museum": "Collezione non determinata"
  },
  "czbaretrees": {
    "title": "Gli alberi spogli del Jas de Bouffan",
    "museum": "National Museum of Western Art, Tokyo"
  },
  "czfarmjas": {
    "title": "Castagni e fattoria al Jas de Bouffan",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "czvuejas": {
    "title": "Veduta dal Jas de Bouffan",
    "museum": "Collezione non determinata"
  },
  "czmaincy": {
    "title": "Il ponte di Maincy",
    "museum": "Musée d’Orsay, Parigi"
  },
  "czmedan": {
    "title": "Le rive della Senna a Médan",
    "museum": "National Gallery of Art, Washington"
  },
  "czgardanne": {
    "title": "Il villaggio di Gardanne",
    "museum": "Brooklyn Museum, New York"
  },
  "czabandoned": {
    "title": "Casa abbandonata presso Aix-en-Provence",
    "museum": "Dallas Museum of Art"
  },
  "czmadame86": {
    "title": "Ritratto di Madame Cézanne",
    "museum": "Detroit Institute of Arts"
  },
  "czself80": {
    "title": "Autoritratto",
    "museum": "Collezione non determinata"
  },
  "czwinterchest": {
    "title": "I castagni del Jas de Bouffan in inverno",
    "museum": "Collezione non determinata"
  }
});
  P.paths = P.paths || {};
  P.paths.cezanne = {
  "title": "Il percorso di vita di Paul Cézanne",
  "life": "1839–1906",
  "part": "Parte 1 · 1839–1886",
  "subtitle": "Da Aix a Parigi, da Pissarro e di nuovo in Provenza",
  "intro": "Viaggia con Paul Cézanne attraverso la prima metà del suo cammino: dall’infanzia ad Aix-en-Provence e dall’amicizia con Émile Zola, passando per gli studi di diritto, l’Académie Suisse a Parigi, il periodo scuro detto «couillarde», la svolta con Camille Pissarro a Pontoise e ad Auvers, le mostre del 1874 e del 1877, L’Estaque, Hortense Fiquet e il figlio Paul, il Jas de Bouffan, fino all’anno 1886 – il romanzo «L’Œuvre», il matrimonio e la morte del padre. Stazioni brevi e quadri da colorare. I bagnanti e le scene violente della giovinezza restano da parte. Questa prima parte arriva fino al 1886.",
  "ending": [
    "Nel 1886 Cézanne sposa Hortense Fiquet ad Aix, il figlio Paul viene legittimato, il padre muore in ottobre. Il ringraziamento per lettera per il romanzo «L’Œuvre» di Zola è breve e formale; in seguito i contatti si fanno più rari.",
    "Il cammino continua. Seguono la montagna Sainte-Victoire, i giocatori di carte, le mele e le nature morte, la mostra da Ambroise Vollard nel 1895, lo studio a Les Lauves e la morte di Cézanne ad Aix il 22 ottobre 1906. Di questo parla la parte successiva."
  ],
  "epilogue": "Questa prima parte si chiude nel 1886: con il matrimonio ad Aix, la morte del padre e un contatto con Zola che dopo «L’Œuvre» si fa più raro. La montagna Sainte-Victoire, i giocatori di carte, le mele, Vollard nel 1895, Les Lauves e la morte il 22 ottobre 1906 appartengono alla parte successiva."
};
  P.stations = Object.assign(P.stations || {}, {
  "cezanneaix": {
    "place": "Aix-en-Provence · Infanzia e amici",
    "when": "1839–1858",
    "mapLabel": "Aix",
    "intro": [
      "Paul Cézanne nasce il 19 gennaio 1839 ad Aix-en-Provence. Il padre, Louis-Auguste, prima cappellaio, dirige poi una banca; la madre, Anne-Elisabeth Honorine Aubert, tiene la casa.",
      "Al Collège Bourbon diventa amico di Émile Zola e di Baptistin Baille: i tre sono detti gli «inseparabili». Percorrono la campagna intorno ad Aix. Nel 1858 Zola parte per Parigi; l’amicizia resta viva nelle lettere.",
      "I ritratti dei genitori e dell’amico Valabrègue, e la veduta della casa, sono in parte dipinti più tardi. Appartengono tuttavia a questo inizio: alla famiglia, al circolo di Aix e alla tenuta che il padre acquista nel 1859."
    ]
  },
  "cezannelaw": {
    "place": "Aix e Parigi · Diritto e Académie Suisse",
    "when": "1858–1865",
    "mapLabel": "Parigi",
    "intro": [
      "Dal 1858 al 1861 Cézanne studia legge ad Aix, seguendo il desiderio del padre. Zola scrive da Parigi e lo incalza a venire e a dipingere.",
      "Nel 1861 va per la prima volta a Parigi, disegna all’Académie Suisse e incontra Camille Pissarro. Torna ad Aix, lavora per un breve periodo nella banca del padre e nel novembre 1862 rientra a Parigi.",
      "A metà degli anni Sessanta nascono nature morte scure e solidamente costruite: pane e uova, la zuccheriera, il cosciotto. Il Salon rifiuta i suoi invii."
    ]
  },
  "cezannecouillarde": {
    "place": "Aix e Parigi · Gli anni «couillarde»",
    "when": "1866–1869",
    "mapLabel": "1866",
    "intro": [
      "Nella seconda metà degli anni Sessanta Cézanne dipinge con la spatola, in strati spessi e scuri. Lui e i suoi amici chiamano «couillarde» questa maniera rude e impastata.",
      "Nel 1866 dipinge il grande ritratto del padre che legge «L’Événement», il giornale delle cronache di Salon di Zola. Nello stesso anno ritrae lo zio Dominique, fratello della madre, in rapida successione e in ruoli diversi.",
      "Si aggiungono il ritratto del pittore di Aix Achille Emperaire, rifiutato dal Salon, e verso la fine del decennio l’orologio di marmo nero."
    ]
  },
  "cezannehortense": {
    "place": "Parigi e L’Estaque · Hortense e la guerra",
    "when": "1869–1872",
    "mapLabel": "1870",
    "intro": [
      "Verso il 1869, a Parigi, Cézanne conosce Hortense Fiquet, che gli siede a modello. Il legame resta a lungo nascosto alla famiglia di Aix.",
      "Durante la guerra franco-prussiana del 1870-1871 soggiorna con Hortense a L’Estaque, a ovest di Marsiglia. Non si presenta al servizio militare. Di questo periodo sono vedute di neve, tetti e del villaggio di pescatori.",
      "Il 4 gennaio 1872 nasce a Parigi il figlio Paul. Il quadro del taglio ferroviario del 1867, vicino al Jas de Bouffan, appartiene al paesaggio di Aix e sta qui come una veduta provenzale anteriore alla costa."
    ]
  },
  "cezanneauvers": {
    "place": "Pontoise e Auvers · Con Pissarro",
    "when": "1872–1874",
    "mapLabel": "Auvers",
    "intro": [
      "Dal 1872 al 1874 Cézanne lavora spesso accanto a Camille Pissarro a Pontoise e vive ad Auvers-sur-Oise. Sotto quest’influenza la tavolozza si schiarisce, il tocco si fa più piccolo, il lavoro davanti al motivo più naturale.",
      "Dipinge un autoritratto con berretto, una veduta di Louveciennes secondo Pissarro, case ad Auvers e a Pontoise. «La casa dell’impiccato» del 1873 – una casa sopra un sentiero, non una scena di violenza – è esposta a Parigi nel 1874.",
      "Questi anni sono considerati una svolta verso il paesaggio impressionista, anche se le forme di Cézanne restano ferme e costruite."
    ]
  },
  "cezannesalon": {
    "place": "Parigi · Le mostre del 1874 e del 1877",
    "when": "1874–1877",
    "mapLabel": "1874",
    "intro": [
      "Nell’aprile 1874 Cézanne partecipa alla prima mostra impressionista, nello studio di Nadar sul boulevard des Capucines. Tra le opere mostrate ci sono «La casa dell’impiccato» e un paesaggio; una terza, «Une moderne Olympia», la menzioniamo soltanto, senza mostrarla. La critica è spesso aspra.",
      "Nel 1877, alla terza mostra impressionista, è rappresentato con sedici opere. Victor Chocquet, un collezionista precoce, lo sostiene; Cézanne lo ritrae in quell’anno.",
      "Accanto ai ritratti di Hortense e di Chocquet stanno paesaggi di Pontoise e una natura morta: i tre campi che continuano ad accompagnarlo."
    ]
  },
  "cezanneestaque": {
    "place": "L’Estaque · Tetti rossi e la baia",
    "when": "1876–1885",
    "mapLabel": "L’Estaque",
    "intro": [
      "Nell’estate del 1876 Cézanne lavora di nuovo a L’Estaque. Il 2 luglio scrive a Pissarro di piccoli motivi per il signor Chocquet: è come una carta da gioco, tetti rossi sul mare blu.",
      "All’inizio degli anni Ottanta torna sulla costa. Nascono vedute della baia di Marsiglia, della valle dei Riaux, del Château d’If, del mattino in controluce e del villaggio attraverso i pini.",
      "La costa del Sud diventa per lui un luogo in cui case, rocce e mare si incastrano come piani chiari."
    ]
  },
  "cezannejas": {
    "place": "Jas de Bouffan · La tenuta",
    "when": "1859–1885",
    "mapLabel": "Jas",
    "intro": [
      "Il padre acquista il Jas de Bouffan nel 1859. Per decenni Cézanne vi dipinge il viale, i castagni, la fattoria, la veduta dalla casa e la vasca del parco.",
      "I quadri di questa stazione vengono da anni diversi, dalla fine degli anni Sessanta fino alla soglia degli anni Ottanta. La vasca del parco appartiene alla fine degli anni Ottanta; la datiamo apertamente.",
      "Il ponte di Maincy, verso il 1882-1883, si trova vicino a Melun, nell’Île-de-France, non al Jas. Figura qui perché nasce negli stessi anni in cui Cézanne lavora anche alla tenuta."
    ]
  },
  "cezanne1886": {
    "place": "Médan, Gardanne e Aix · 1886",
    "when": "1879–1886",
    "mapLabel": "Gardanne",
    "intro": [
      "Tra il 1880 e il 1885 Cézanne dipinge le rive della Senna a Médan, dove Zola possiede una casa. Nel 1885-1886 vive con Hortense e il figlio a Gardanne, non lontano da Aix.",
      "Il 4 aprile 1886 ringrazia Zola da Gardanne, in modo breve e formale, per l’invio del romanzo «L’Œuvre». I contemporanei hanno letto somiglianze con Cézanne nella figura del pittore Claude Lantier. La lettera è cordiale; una rottura completa non è con ciò dimostrata. In seguito i contatti si fanno più rari.",
      "Il 28 aprile 1886 sposa Hortense ad Aix; il figlio Paul viene legittimato. Il 23 ottobre 1886 muore Louis-Auguste. Con l’eredità Cézanne diventa più indipendente. Questa prima parte si chiude in quell’anno."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "czmother": {
    "text": [
      "Anne-Elisabeth Honorine Aubert, la madre, siede calma, vestita di scuro, il viso chiaro sul fondo bruno.",
      "Il quadro è dipinto nel 1866-1867, più tardi degli anni dell’infanzia. Fissa la donna che tiene la casa ad Aix mentre il padre dirige la banca."
    ],
    "fact": "1866–1867. Saint Louis Art Museum."
  },
  "czfather65": {
    "text": [
      "Louis-Auguste siede con il berretto, le gambe incrociate, come se si riposasse in salotto. Il quadro è prima una pittura murale nel salone del Jas de Bouffan e in seguito viene trasportato su tela.",
      "Il padre, prima cappellaio e poi banchiere ad Aix, desidera che il figlio sia giurista. Verso il 1865 Cézanne lo dipinge comunque, e nella casa di famiglia stessa."
    ],
    "fact": "verso il 1865. National Gallery, Londra."
  },
  "czvalab66": {
    "text": [
      "Il poeta Antony Valabrègue, un amico di Aix, è dipinto di fronte e con la spatola: strati scuri e spessi, un volto serio.",
      "Nel 1866 il quadro appartiene già alla maniera precoce e rude. Valabrègue fa parte del circolo di Cézanne e Zola."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "czhousejas": {
    "text": [
      "La casa di campagna si erge chiara tra gli alberi, il cielo è ampio. Nel 1859 Louis-Auguste acquista il Jas de Bouffan, ai margini di Aix; la famiglia vi vive e vi riceve.",
      "Il quadro stesso è dipinto solo verso il 1874. Mostra il luogo dell’infanzia e del lavoro successivo, non nell’anno dell’acquisto, ma nella maniera più chiara degli anni Settanta."
    ],
    "fact": "verso il 1874. Collezione non determinata."
  },
  "czbread": {
    "text": [
      "Un pane, uova bianche, un coltello e una brocca scura stanno ravvicinati sul piano. I colori sono terrosi, le ombre pesanti.",
      "Nel 1865, negli anni del diritto e dei primi soggiorni parigini, Cézanne esercita la natura morta in questa maniera scura e saldamente costruita."
    ],
    "fact": "1865. Cincinnati Art Museum."
  },
  "czsugar": {
    "text": [
      "Una zuccheriera, pere e una tazza blu formano un gruppo piccolo e chiuso. Già qui egli cerca il volume e l’accostamento di forme chiare.",
      "Il quadro data a circa il 1865. Accanto ai ritratti, la natura morta è fin dall’inizio un campo proprio per Cézanne."
    ],
    "fact": "verso il 1865. Musée d’Orsay, Parigi."
  },
  "czgigot": {
    "text": [
      "Il cosciotto e il pane riposano pesanti sul panno. Il colore è steso spesso, quasi modellato con la spatola.",
      "Nel 1866 la natura morta appartiene allo stesso periodo precoce e rude dei ritratti del padre e dello zio. Oggi è appesa al Kunsthaus Zürich."
    ],
    "fact": "1866. Kunsthaus Zürich."
  },
  "czfather66": {
    "text": [
      "Louis-Auguste siede in una poltrona e legge «L’Événement», il giornale in cui Émile Zola pubblica nel 1866 le sue cronache di Salon. Sopra il padre è appesa una natura morta precoce del figlio.",
      "Il grande quadro del 1866 è una dichiarazione nella casa paterna: il banchiere è mostrato mentre legge il foglio dell’amico che difende la pittura nuova."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "czunclemonk": {
    "text": [
      "Antoine Dominique Sauveur Aubert, fratello della madre, porta qui un saio bianco e un copricapo scuro. Il volto è impostato in pochi piani energici di spatola.",
      "Nel 1866 Cézanne ritrae lo zio in rapida successione e in ruoli diversi. La serie appartiene al nucleo del cosiddetto periodo «couillarde»."
    ],
    "fact": "1866. Metropolitan Museum of Art, New York."
  },
  "czunclelaw": {
    "text": [
      "Lo stesso zio siede nella veste scura da avvocato, una mano alzata. Anche questo quadro del 1866 è dipinto con la spatola, rude e fermo.",
      "Il travestimento da avvocato allude, voluto o no, alla professione che il padre aveva destinato al figlio."
    ],
    "fact": "1866. Collezione non determinata."
  },
  "czuncledom": {
    "text": [
      "Un altro ritratto dello zio: la testa e le spalle riempiono la superficie, il colore è posato in fasce spesse, l’una accanto all’altra.",
      "Verso il 1866 nasce in poco tempo tutta una serie di ritratti così. Mostrano come Cézanne intenda il volto come una costruzione di piani di colore."
    ],
    "fact": "verso il 1866. Norton Simon Museum, Pasadena."
  },
  "czclock": {
    "text": [
      "Un orologio da camino nero, senza lancette, sta tra una conchiglia, una brocca e della frutta. Gli oggetti sono pesanti, chiaramente delimitati e quasi solennemente disposti.",
      "La natura morta è dipinta tra il 1869 e il 1871, nel passaggio dal periodo precoce scuro agli anni con Hortense."
    ],
    "fact": "1869–1871. Collezione privata."
  },
  "czemperaire": {
    "text": [
      "Achille Emperaire, un amico pittore di Aix, siede in una poltrona, di statura piccola, ma il formato del quadro è insolitamente alto. L’applicazione del colore resta impastata e scura.",
      "Il quadro del 1867-1868 è rifiutato dal Salon. Emperaire resta un compagno della città natale."
    ],
    "fact": "1867–1868. Musée d’Orsay, Parigi."
  },
  "czsnowest": {
    "text": [
      "Tetti rossi si alzano su un pendio ancora invernale, la neve si scioglie, il mare e la lontananza sono freddi. L’Estaque si trova sulla costa, a ovest di Marsiglia.",
      "Verso il 1870, durante la guerra franco-prussiana, Cézanne soggiorna con Hortense Fiquet a L’Estaque. Il motivo dei tetti rossi sull’acqua lo occuperà anche in seguito."
    ],
    "fact": "verso il 1870. Collezione non determinata."
  },
  "cztrench": {
    "text": [
      "Un taglio della ferrovia apre il colle; sopra, una casa e il cielo di Aix. Il quadro è dipinto nel 1867, prima del soggiorno di guerra a L’Estaque.",
      "Il taglio si trova vicino al Jas de Bouffan. Già qui Cézanne cerca il paesaggio come forma costruita, non come una mera immagine d’atmosfera."
    ],
    "fact": "1867. Barnes Foundation, Filadelfia."
  },
  "czvillageest": {
    "text": [
      "Le case del villaggio di pescatori scendono a gradini il pendio verso l’acqua. La tavolozza resta terrosa, le forme sono saldamente posate.",
      "Nel 1870 Cézanne dipinge L’Estaque mentre in Francia continua la guerra. Non si presenta al servizio militare; resta in Provenza."
    ],
    "fact": "1870. Philadelphia Museum of Art."
  },
  "czhortense72": {
    "text": [
      "Hortense Fiquet, conosciuta a Parigi verso il 1869, siede di tre quarti. Il quadro data al 1872, l’anno in cui il 4 gennaio nasce a Parigi il figlio Paul.",
      "Il legame resta a lungo nascosto alla famiglia di Aix. Hortense siederà a modello per Cézanne per decenni."
    ],
    "fact": "1872. Collezione non determinata."
  },
  "czself72": {
    "text": [
      "Cézanne porta un berretto, lo sguardo esce di lato dal quadro. Il volto è costruito in toni più freddi e più chiari che nei ritratti scuri degli anni Sessanta.",
      "Verso il 1872, all’inizio degli anni di Pontoise e Auvers, ritrae se stesso. La tavolozza comincia ad aprirsi sotto l’influsso del lavoro all’aperto."
    ],
    "fact": "verso il 1872. Ermitage, San Pietroburgo."
  },
  "czlouvec": {
    "text": [
      "Una strada s’inoltra in profondità, case e alberi spogli da entrambi i lati: una veduta che Cézanne dipinge a partire da un quadro di Camille Pissarro.",
      "Nel 1872 lavora accanto a Pissarro. Dipingere secondo l’amico più anziano non è una mera copia: sul motivo di un altro impara il paesaggio più chiaro e articolato."
    ],
    "fact": "1872. Musée d’Orsay, Parigi."
  },
  "czpendu": {
    "text": [
      "Una casa di Auvers-sur-Oise si erge sopra un sentiero in salita; il titolo tradizionale la chiama «casa dell’impiccato», ma nomina l’edificio, non una scena di violenza.",
      "Il quadro del 1873 è mostrato nel 1874 alla prima mostra impressionista a Parigi. È una delle opere con cui Cézanne vi compare, accanto a un paesaggio. Una terza, «Une moderne Olympia», qui non la mostriamo."
    ],
    "fact": "1873. Musée d’Orsay, Parigi."
  },
  "czlacroix": {
    "text": [
      "La casa del Père Lacroix ad Auvers è costruita con fermezza e chiarezza, i muri in un bianco rotto, il tetto rosso, gli alberi come verticali scure.",
      "Nel 1873 Cézanne dipinge ad Auvers-sur-Oise, spesso vicino a Pissarro. Le case diventano forme chiare e scalate."
    ],
    "fact": "1873. National Gallery of Art, Washington."
  },
  "czquartier": {
    "text": [
      "Nel quartiere Four, orti, muri e tetti salgono il pendio. La luce è più morbida che nei quadri precoci di Aix.",
      "Verso il 1873 questa veduta appartiene agli anni di Auvers, in cui Cézanne osserva davanti al motivo il paesaggio dell’Île-de-France."
    ],
    "fact": "verso il 1873. Philadelphia Museum of Art."
  },
  "czsmallpontoise": {
    "text": [
      "Casette stanno sul pendio di Pontoise, i tetti come piani semplici e inclinati, la vegetazione tra di esse.",
      "Nel 1873 Cézanne lavora ripetutamente a Pontoise, dove allora vive Pissarro. Il lavoro comune all’aperto segna questi anni."
    ],
    "fact": "1873. Harvard Art Museums, Cambridge."
  },
  "czauversview": {
    "text": [
      "Da un punto elevato Auvers si stende lontano: campi, gruppi di alberi, le case del villaggio sotto un cielo chiaro.",
      "Il quadro è dipinto nel 1873-1875, alla fine degli anni condivisi con Pissarro. La veduta ampia raccoglie ciò che Cézanne aveva cercato ad Auvers."
    ],
    "fact": "1873–1875. Collezione non determinata."
  },
  "czmadamered": {
    "text": [
      "Hortense siede in una poltrona rossa, l’abito a righe blu e verdi, le mani in grembo. I colori si staccano con chiarezza gli uni dagli altri, la poltrona è un corpo luminoso a sé.",
      "Verso il 1877, l’anno della terza mostra impressionista, questo ritratto è un contrappunto calmo ai paesaggi di Pontoise."
    ],
    "fact": "verso il 1877. Museum of Fine Arts, Boston."
  },
  "czchocquet": {
    "text": [
      "Victor Chocquet, un collezionista e sostenitore precoce, siede in poltrona, le mani sui braccioli, lo sguardo attento. Cézanne lo ritrae più volte nel 1877.",
      "Chocquet sostiene Cézanne e gli impressionisti. Già nel 1876 Cézanne aveva cominciato per lui dei motivi a L’Estaque."
    ],
    "fact": "1877. Columbus Museum of Art."
  },
  "czcotesaint": {
    "text": [
      "La Côte Saint-Denis sale a Pontoise; case, orti e il sentiero sono costruiti in tocchi brevi, l’uno accanto all’altro.",
      "Nel 1877 Cézanne mostra sedici opere alla terza mostra impressionista a Parigi. I paesaggi di Pontoise appartengono a questo contesto."
    ],
    "fact": "1877. Collezione non determinata."
  },
  "czjardinmau": {
    "text": [
      "Nel giardino di Maubuisson stanno alberi e un muro; la luce cade attraverso il fogliame su sentieri e aiuole.",
      "Questo motivo del 1877 appartiene anch’esso agli anni di Pontoise, in cui Cézanne fissa il paesaggio strutturato di giardini e pendii dell’Île-de-France."
    ],
    "fact": "1877. Collezione non determinata."
  },
  "czhermitage": {
    "text": [
      "La Maison Rondest, nel quartiere dell’Hermitage, sta ferma tra gli alberi, la facciata chiara, il tetto calmo contro il cielo.",
      "Il quadro è datato 1874, l’anno della prima mostra impressionista. Pontoise e Auvers restano i luoghi di lavoro settentrionali di Cézanne."
    ],
    "fact": "1874. Collezione non determinata."
  },
  "czstill77": {
    "text": [
      "Un’alzata di frutta, un piatto di biscotti e della frutta sono disposti sul piano in un gruppo calmo. Ogni forma è chiaramente delimitata, e si considera anche lo spazio tra di esse.",
      "Il 1877 mostra che la natura morta resta un campo di pari rango accanto al paesaggio e al ritratto."
    ],
    "fact": "1877. Collezione non determinata."
  },
  "cztoitsrouges": {
    "text": [
      "Tetti rossi si alzano sull’acqua blu, le case come piani semplici, la baia come una fascia calma. Il quadro stesso data al 1883-1885.",
      "Già il 2 luglio 1876 Cézanne scrive a Pissarro da L’Estaque di piccoli motivi per il signor Chocquet: è come una carta da gioco, tetti rossi sul mare blu. Questa veduta più tarda appartiene alla stessa famiglia di motivi."
    ],
    "fact": "1883–1885. Collezione non determinata.",
    "quote": {
      "text": "Ho cominciato due piccoli motivi in cui c’è il mare, per il signor Chocquet, che me ne aveva parlato. – È come una carta da gioco. Tetti rossi sul mare blu.",
      "cite": "Lettera a Camille Pissarro, 2 luglio 1876, da L’Estaque."
    }
  },
  "czbay85": {
    "text": [
      "Da L’Estaque la baia di Marsiglia si stende ampia e chiara: davanti le case e il verde, poi il blu profondo dell’acqua, all’orizzonte la riva di fronte.",
      "Verso il 1885 Cézanne riporta la costa del Sud a un ordine calmo e saldamente costruito. Il quadro è tra le sue vedute più note di L’Estaque."
    ],
    "fact": "verso il 1885. Art Institute of Chicago."
  },
  "czriaux": {
    "text": [
      "Nella valle dei Riaux, cubi di case stanno in un terreno nudo e soleggiato. I muri sono ocra e rosa, le ombre corte e blu.",
      "Verso il 1883 Cézanne dipinge questo motivo dell’entroterra, vicino a L’Estaque. La costruzione in piani è qui particolarmente chiara."
    ],
    "fact": "verso il 1883. National Gallery of Art, Washington."
  },
  "czchateauif": {
    "text": [
      "Dietro gli alberi e le case di L’Estaque si apre il mare; in lontananza sta l’isola con il Château d’If.",
      "Nel 1883-1885 Cézanne unisce il luogo in cui lavora alla baia ampia e al noto castello-prigione al largo di Marsiglia."
    ],
    "fact": "1883–1885. Collezione non determinata."
  },
  "czmorningest": {
    "text": [
      "In controluce del mattino, case e alberi si alzano come silhouettes più scure, il cielo e l’acqua chiari. Il sole viene incontro allo sguardo.",
      "Nel 1882-1883, a L’Estaque, Cézanne cerca non solo la forma chiara del mezzogiorno, ma anche il controluce del mattino."
    ],
    "fact": "1882–1883. Israel Museum, Gerusalemme."
  },
  "czpins": {
    "text": [
      "I tronchi dei pini dividono lo sguardo; oltre stanno il villaggio, l’acqua e la lontananza. Il primo piano è un reticolo di tronchi e rami.",
      "Nel 1882-1883 Cézanne inquadra la baia attraverso gli alberi, invece di darla come una superficie panoramica aperta."
    ],
    "fact": "1882–1883. Collezione non determinata."
  },
  "czcliffs": {
    "text": [
      "Rocce, case e il mare si scalano in strati calmi. La costa è saldamente costruita, senza un morbido sfumare.",
      "Questa veduta del 1882-1883 appartiene ai soggiorni ripetuti a L’Estaque, in cui Cézanne fa del paesaggio della costa una costruzione."
    ],
    "fact": "1882–1883. Collezione non determinata."
  },
  "czallee": {
    "text": [
      "Un viale conduce verso la casa, i tronchi stanno come verticali scure e ripetute a sinistra e a destra del sentiero.",
      "Il quadro data a circa il 1868, ancora nel tempo precoce della tenuta che il padre acquistò nel 1859. Il Jas resta un luogo di lavoro per decenni."
    ],
    "fact": "verso il 1868. Collezione non determinata."
  },
  "czpool": {
    "text": [
      "La vasca del parco giace calma, circondata da alberi e da un muro; l’acqua accoglie il cielo e il fogliame.",
      "Il quadro data alla fine degli anni Ottanta, al margine del periodo di questa parte. Appartiene comunque al luogo in cui Cézanne lavora fin dalla giovinezza."
    ],
    "fact": "fine degli anni Ottanta. Metropolitan Museum of Art, New York."
  },
  "czchestnut": {
    "text": [
      "Il viale di castagni apre un passaggio fresco e verde; i tronchi e la volta di foglie dividono lo spazio in fasce parallele.",
      "Nel 1880 Cézanne dipinge questa veduta nella tenuta di famiglia. La ripetizione degli alberi dà al viale un ordine calmo."
    ],
    "fact": "1880. Collezione non determinata."
  },
  "czbaretrees": {
    "text": [
      "Tronchi spogli stanno davanti alla casa e al cielo; senza foglie, la costruzione di linee e piani diventa particolarmente visibile.",
      "Negli anni Ottanta il parco del Jas resta un motivo vicino, in estate come nel suo stato invernale."
    ],
    "fact": "anni Ottanta. National Museum of Western Art, Tokyo."
  },
  "czfarmjas": {
    "text": [
      "I castagni stanno davanti a una fattoria nei terreni del Jas; edifici, alberi e il suolo si uniscono in toni terrosi e calmi.",
      "Verso il 1878 Cézanne non lavora solo alla casa padronale, ma anche alle costruzioni di lavoro e agli alberi della tenuta."
    ],
    "fact": "verso il 1878. Norton Simon Museum, Pasadena."
  },
  "czvuejas": {
    "text": [
      "Dalla tenuta si apre il paesaggio di Aix: alberi in primo piano, poi la campagna aperta sotto un cielo chiaro.",
      "Verso il 1875-1876, dopo gli anni di Auvers, Cézanne dipinge di nuovo la veduta da casa. La tavolozza più chiara degli anni del Nord resta percepibile."
    ],
    "fact": "verso il 1875–1876. Collezione non determinata."
  },
  "czmaincy": {
    "text": [
      "Un ponte in pietra ad arco su un corso d’acqua in ombra, alberi densi a sinistra e a destra: il motivo è a Maincy, vicino a Melun, non al Jas de Bouffan.",
      "Verso il 1882-1883 Cézanne dipinge questo ponte nell’Île-de-France, negli stessi anni in cui lavora anche al Jas. Il quadro è oggi al Musée d’Orsay."
    ],
    "fact": "verso il 1882–1883. Musée d’Orsay, Parigi."
  },
  "czmedan": {
    "text": [
      "La Senna a Médan scorre tra alberi e case della riva; i piani di acqua, fogliame e costruzioni si incastrano con calma.",
      "A Médan, Émile Zola possiede una casa. Il quadro data a un periodo tra il 1880 e il 1885, negli anni in cui l’amicizia di gioventù regge ancora e Cézanne lavora sulla Senna."
    ],
    "fact": "1880–1885. National Gallery of Art, Washington."
  },
  "czgardanne": {
    "text": [
      "Le case di Gardanne salgono il colle, in alto il campanile; alcune zone della tela restano chiare e incompiute.",
      "Nel 1885-1886 Cézanne vive con Hortense e il figlio Paul a Gardanne, non lontano da Aix. Da qui, il 4 aprile 1886, scrive a Zola dopo che questi gli ha inviato il romanzo «L’Œuvre»."
    ],
    "fact": "1885–1886. Brooklyn Museum, New York.",
    "quote": {
      "text": "Caro Émile, ho appena ricevuto «L’Œuvre», che hai avuto la bontà di inviarmi. Ringrazio l’autore dei Rougon-Macquart di questo gentile segno di ricordo, e gli chiedo di permettermi di stringergli la mano pensando agli anni andati. Tutto tuo, sotto l’impressione dei tempi trascorsi.",
      "cite": "Lettera a Émile Zola, 4 aprile 1886, da Gardanne."
    }
  },
  "czabandoned": {
    "text": [
      "Una casa abbandonata sta nel paesaggio vicino ad Aix, la facciata pallida, l’intorno scarso e ampio.",
      "Il quadro del 1886 cade nello stesso anno del matrimonio con Hortense e della morte del padre. Cézanne lavora di nuovo nei dintorni della città natale."
    ],
    "fact": "1886. Dallas Museum of Art."
  },
  "czmadame86": {
    "text": [
      "Hortense siede eretta, il viso calmo e chiuso, lo sfondo in toni rotti. Il quadro data al 1886-1887.",
      "Il 28 aprile 1886 Paul Cézanne e Hortense Fiquet si sposano ad Aix; il figlio Paul viene così legittimato. Il ritratto appartiene al tempo di questo legame nuovo, ormai pubblico."
    ],
    "fact": "1886–1887. Detroit Institute of Arts."
  },
  "czself80": {
    "text": [
      "Cézanne si mostra davanti a un fondo olivastro e decorato, il cranio calvo, lo sguardo fermo. Il quadro data a circa il 1880.",
      "Fissa il pittore negli anni in cui si muove tra la Provenza, Parigi e l’Île-de-France, prima delle svolte del 1886."
    ],
    "fact": "verso il 1880. Collezione non determinata."
  },
  "czwinterchest": {
    "text": [
      "I castagni del Jas stanno spogli in inverno, i rami come un’ossatura chiara davanti alla casa e al cielo.",
      "Nel 1885-1886, alla fine di questa prima parte, Cézanne torna, nel parco invernale della casa di famiglia, a un motivo familiare."
    ],
    "fact": "1885–1886. Collezione non determinata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
