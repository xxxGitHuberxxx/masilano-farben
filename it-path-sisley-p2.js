// v9.9 IT content for Alfred Sisley’s life journey, Part 2 (1880–1899), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Walters Art Museum, Baltimore": "Walters Art Museum, Baltimore",
  "Museum Barberini, Potsdam": "Museum Barberini, Potsdam",
  "National Gallery, London": "National Gallery, Londra",
  "Kröller-Müller Museum, Otterlo": "Kröller-Müller Museum, Otterlo",
  "University of Michigan Museum of Art, Ann Arbor": "University of Michigan Museum of Art, Ann Arbor",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Parigi",
  "Israel-Museum, Jerusalem": "Museo d’Israele, Gerusalemme",
  "Museum Boijmans Van Beuningen, Rotterdam": "Museum Boijmans Van Beuningen, Rotterdam",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Musée d’art et d’histoire, Genf": "Musée d’art et d’histoire, Ginevra",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "National Gallery of Australia, Canberra": "National Gallery of Australia, Canberra",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Petit Palais, Paris": "Petit Palais, Parigi",
  "Fondation Bemberg, Toulouse": "Fondation Bemberg, Tolosa",
  "Museum Ordrupgaard, Charlottenlund": "Museum Ordrupgaard, Charlottenlund",
  "Artizon Museum, Tokio": "Artizon Museum, Tokyo",
  "Barnes Foundation, Philadelphia": "Barnes Foundation, Philadelphia",
  "Saint Louis Art Museum": "Saint Louis Art Museum",
  "Nelson-Atkins Museum of Art, Kansas City": "Nelson-Atkins Museum of Art, Kansas City",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Yale University Art Gallery, New Haven": "Yale University Art Gallery, New Haven",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Musée des Beaux-Arts, Agen": "Musée des Beaux-Arts, Agen",
  "Minneapolis Institute of Art": "Minneapolis Institute of Art",
  "Museo Thyssen-Bornemisza, Madrid": "Museo Thyssen-Bornemisza, Madrid",
  "Cincinnati Art Museum": "Cincinnati Art Museum",
  "Princeton University Art Museum": "Princeton University Art Museum",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Clark Art Institute, Williamstown": "Clark Art Institute, Williamstown",
  "National Museum Cardiff": "National Museum Cardiff",
  "Hunterian Art Gallery, Glasgow": "Hunterian Art Gallery, Glasgow",
  "Museum Langmatt, Baden": "Museum Langmatt, Baden",
  "Musée Calvet, Avignon": "Musée Calvet, Avignone",
  "Detroit Institute of Arts": "Detroit Institute of Arts",
  "Nationalmuseum, Stockholm": "Nationalmuseum, Stoccolma",
  "Musée des Beaux-Arts, Reims": "Musée des Beaux-Arts, Reims",
  "Beaverbrook Art Gallery, Fredericton": "Beaverbrook Art Gallery, Fredericton",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Colonia",
  "Kunstmuseum Bern": "Kunstmuseum Bern"
});
  P.works = Object.assign(P.works || {}, {
  "syvsmwalters": {
    "title": "Veduta di Saint-Mammès",
    "museum": "Walters Art Museum, Baltimore"
  },
  "syquarries": {
    "title": "Le cave di Veneux al sole, mattino",
    "museum": "Museum Barberini, Potsdam"
  },
  "syferryby": {
    "title": "Il sentiero del vecchio traghetto a By",
    "museum": "National Gallery, Londra"
  },
  "sybrickfield": {
    "title": "La fornace di mattoni",
    "museum": "Kröller-Müller Museum, Otterlo"
  },
  "syfrostveneux": {
    "title": "Brina a Veneux",
    "museum": "University of Michigan Museum of Art, Ann Arbor"
  },
  "sypetitspres": {
    "title": "Il Chemin des Petits-Prés a By, tempo di temporale",
    "museum": "Musée d’Orsay, Parigi"
  },
  "synearmoret": {
    "title": "Vicino a Moret-sur-Loing",
    "museum": "Museum Barberini, Potsdam"
  },
  "symeadowveneux": {
    "title": "I prati di Veneux-Nadon",
    "museum": "Museum Barberini, Potsdam"
  },
  "syloingautumn": {
    "title": "Rive del Loing, effetto d’autunno",
    "museum": "Museo d’Israele, Gerusalemme"
  },
  "syorchardby": {
    "title": "Frutteto in primavera, By",
    "museum": "Museum Boijmans Van Beuningen, Rotterdam"
  },
  "syloingsm82": {
    "title": "Il Loing a Saint-Mammès",
    "museum": "Museum of Fine Arts, Boston"
  },
  "sybourgogne": {
    "title": "La chiusa di Bourgogne a Moret",
    "museum": "Musée d’art et d’histoire, Ginevra"
  },
  "syloingmoret83": {
    "title": "Il Loing a Moret",
    "museum": "Museum Barberini, Potsdam"
  },
  "sysaules": {
    "title": "Salici sulle rive dell’Orvanne",
    "museum": "Kunsthaus Zürich"
  },
  "syroadmet": {
    "title": "La strada da Moret a Saint-Mammès",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sytugboat": {
    "title": "Il rimorchiatore, il Loing a Saint-Mammès",
    "museum": "Petit Palais, Parigi"
  },
  "sybemberg83": {
    "title": "Le rive del Loing verso Moret",
    "museum": "Fondation Bemberg, Tolosa"
  },
  "sysablonspath": {
    "title": "Un sentiero a Les Sablons",
    "museum": "National Gallery of Australia, Canberra"
  },
  "sysablonswood": {
    "title": "Un angolo di bosco a Les Sablons",
    "museum": "Musée d’Orsay, Parigi"
  },
  "sycroix": {
    "title": "La Croix-Blanche a Saint-Mammès",
    "museum": "Museum of Fine Arts, Boston"
  },
  "sysepmorning84": {
    "title": "Mattino di settembre vicino a Saint-Mammès",
    "museum": "Museum Ordrupgaard, Charlottenlund"
  },
  "syjunemorning": {
    "title": "Mattino di giugno a Saint-Mammès",
    "museum": "Artizon Museum, Tokyo"
  },
  "syfarmyard": {
    "title": "Cortile di fattoria a Saint-Mammès",
    "museum": "Musée d’Orsay, Parigi"
  },
  "sybarnes": {
    "title": "Saint-Mammès, canale del Loing",
    "museum": "Barnes Foundation, Philadelphia"
  },
  "sybeachsm": {
    "title": "La spiaggia di Saint-Mammès",
    "museum": "Saint Louis Art Museum"
  },
  "sylock": {
    "title": "La chiusa di Saint-Mammès",
    "museum": "Nelson-Atkins Museum of Art, Kansas City"
  },
  "sycleveland": {
    "title": "Saint-Mammès, canale del Loing",
    "museum": "Cleveland Museum of Art"
  },
  "sybargesloing": {
    "title": "Chiatte sul Loing a Saint-Mammès",
    "museum": "Museo d’Israele, Gerusalemme"
  },
  "syyale85": {
    "title": "Rive del Loing, Saint-Mammès",
    "museum": "Yale University Art Gallery, New Haven"
  },
  "sycanalphila": {
    "title": "Il canale a Saint-Mammès",
    "museum": "Philadelphia Museum of Art"
  },
  "syfontaines": {
    "title": "Il Chemin des Fontaines in un mattino di giugno",
    "museum": "Musée d’art et d’histoire, Ginevra"
  },
  "sysepmorning": {
    "title": "Mattino di settembre",
    "museum": "Musée des Beaux-Arts, Agen"
  },
  "sypontmia": {
    "title": "Il ponte di Moret",
    "museum": "Minneapolis Institute of Art"
  },
  "syeveningoct": {
    "title": "Una sera a Moret, fine di ottobre",
    "museum": "Museo Thyssen-Bornemisza, Madrid"
  },
  "sysunset88": {
    "title": "Moret al tramonto",
    "museum": "Cincinnati Art Museum"
  },
  "syriverview": {
    "title": "Veduta del fiume",
    "museum": "Princeton University Art Museum"
  },
  "systreetmoret": {
    "title": "Strada a Moret",
    "museum": "Art Institute of Chicago"
  },
  "sybridgephila": {
    "title": "Il ponte di Moret-sur-Loing",
    "museum": "Philadelphia Museum of Art"
  },
  "symillssnow": {
    "title": "Il Loing e i mulini di Moret, effetto di neve",
    "museum": "Clark Art Institute, Williamstown"
  },
  "symoussoir": {
    "title": "Rue Eugène Moussoir a Moret, inverno",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sycanalloing": {
    "title": "Il canale del Loing",
    "museum": "Musée d’Orsay, Parigi"
  },
  "syfosses": {
    "title": "Moret-sur-Loing, rue des Fossés",
    "museum": "National Museum Cardiff"
  },
  "symyhouse": {
    "title": "La mia casa a Moret",
    "museum": "Museum Barberini, Potsdam"
  },
  "symatratrain": {
    "title": "Il cantiere Matrat a Moret, tempo piovoso",
    "museum": "Yale University Art Gallery, New Haven"
  },
  "sybridge93": {
    "title": "Il ponte di Moret",
    "museum": "Musée d’Orsay, Parigi"
  },
  "sychurchrain": {
    "title": "La chiesa di Moret sotto la pioggia del mattino",
    "museum": "Hunterian Art Gallery, Glasgow"
  },
  "sychurchlangmatt": {
    "title": "La chiesa di Moret, tempo piovoso, mattino",
    "museum": "Museum Langmatt, Baden"
  },
  "sychurchcalvet": {
    "title": "La chiesa di Moret",
    "museum": "Musée Calvet, Avignone"
  },
  "sychurchdia": {
    "title": "La chiesa di Moret dopo la pioggia",
    "museum": "Detroit Institute of Arts"
  },
  "sychurchpp": {
    "title": "La chiesa di Moret",
    "museum": "Petit Palais, Parigi"
  },
  "sysahurs": {
    "title": "I prati di Sahurs al sole del mattino",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "syclearing": {
    "title": "Una radura",
    "museum": "Museo Thyssen-Bornemisza, Madrid"
  },
  "syshoresloing": {
    "title": "Sulle rive del Loing",
    "museum": "Nationalmuseum, Stoccolma"
  },
  "syloire": {
    "title": "Riva del fiume in inverno",
    "museum": "Art Institute of Chicago"
  },
  "sycardiff": {
    "title": "La rada di Cardiff",
    "museum": "Musée des Beaux-Arts, Reims"
  },
  "sypenarth": {
    "title": "La scogliera di Penarth, sera, bassa marea",
    "museum": "National Museum Cardiff"
  },
  "sypenarthstorm": {
    "title": "La scogliera di Penarth, sera, temporale",
    "museum": "Beaverbrook Art Gallery, Fredericton"
  },
  "systorr": {
    "title": "Storr’s Rock, Lady’s Cove, sera",
    "museum": "National Museum Cardiff"
  },
  "sylangland": {
    "title": "La baia di Langland",
    "museum": "Wallraf-Richartz-Museum, Colonia"
  },
  "systorrmorning": {
    "title": "Storr’s Rock, Langland, mattino",
    "museum": "Kunstmuseum Bern"
  }
});
  P.paths = P.paths || {};
  P.paths.sisley = {
  "title": "Il percorso di vita di Alfred Sisley",
  "part": "Parti 1–2 · 1839–1899",
  "subtitle": "Da Parigi a Moret-sur-Loing",
  "intro": "Accompagna Alfred Sisley lungo tutta la sua vita: dalla nascita a Parigi nel 1839, attraverso l’atelier di Gleyre, Louveciennes, Marly e l’inondazione del 1876, fino agli anni lungo la Senna e il Loing vicino a Moret, alla chiesa di Moret, al viaggio in Galles nel 1897 e alla sua morte nel 1899.",
  "ending": [
    "Sisley muore a Moret-sur-Loing il 29 gennaio 1899, pochi mesi dopo Eugénie. Il 1° febbraio viene sepolto nel cimitero di Moret.",
    "Su iniziativa di Monet, il 1° maggio 1899 la galleria Georges Petit mette all’asta quadri del suo atelier e opere donate dagli amici. Il ricavato va ai figli Pierre e Jeanne-Adèle."
  ],
  "epilogue": "Alfred Sisley muore il 29 gennaio 1899 a Moret-sur-Loing, accanto al fiume che ha dipinto per vent’anni.",
  "life": "1839–1899"
};
  P.stations = Object.assign(P.stations || {}, {
  "syveneux": {
    "place": "Veneux-Nadon",
    "when": "1880",
    "mapLabel": "Veneux-Nadon",
    "intro": [
      "Nel gennaio 1880 Sisley vive con Eugénie, Pierre e Jeanne-Adèle a Veneux-Nadon, tra la Senna e la foresta di Fontainebleau. Il villaggio è tranquillo e la vita costa meno che vicino a Parigi.",
      "I soldi restano pochi. Il mercante Paul Durand-Ruel ora gli compra quadri con regolarità e gli assicura in cambio un reddito fisso. Sisley dipinge le cave di pietra, i prati di By e le rive della Senna."
    ]
  },
  "syshows": {
    "place": "Mostre e Saint-Mammès",
    "when": "1881–1882",
    "mapLabel": "Saint-Mammès",
    "intro": [
      "Nel 1881 la rivista La Vie Moderne espone nelle sue sale quattordici quadri di Sisley; il contatto glielo ha procurato Renoir. Nel 1882 espone per l’ultima volta con gli impressionisti, questa volta ventisette paesaggi.",
      "Dipinge il Loing, che a Saint-Mammès si getta nella Senna, i frutteti di By e la chiusa di Moret."
    ]
  },
  "symoret83": {
    "place": "Un anno a Moret",
    "when": "1882–1883",
    "mapLabel": "Moret",
    "intro": [
      "Nel settembre 1882 la famiglia si trasferisce a Moret-sur-Loing, una piccola città antica sul Loing. Nella primavera del 1883 Durand-Ruel organizza a Parigi una mostra personale di Sisley. Gli porta poco successo.",
      "I soldi non bastano. Nell’autunno del 1883 la famiglia torna a Les Sablons, una frazione vicino a Veneux-Nadon."
    ]
  },
  "sysablons": {
    "place": "Les Sablons",
    "when": "1883–1884",
    "mapLabel": "Les Sablons",
    "intro": [
      "Sisley resta a Les Sablons fino al 1889. Da qui va a piedi fino al margine del bosco, lungo i sentieri tra i campi e giù fino al Loing a Saint-Mammès.",
      "Dipinge cortili, sentieri e strade lungo il fiume a tutte le ore del giorno. In questi anni Durand-Ruel compra molti suoi quadri, anche se il mercante stesso è spesso a corto di denaro."
    ]
  },
  "systmam": {
    "place": "Saint-Mammès",
    "when": "1885",
    "mapLabel": "Saint-Mammès",
    "intro": [
      "Nel 1885 Sisley dipinge più volte a Saint-Mammès la stessa fila di case lungo il canale e la chiusa. Riempie taccuini di disegni e appunti.",
      "Le chiatte, le alzaie e le ampie acque della Senna e del Loing diventano il suo tema costante."
    ]
  },
  "sypetit": {
    "place": "Georges Petit e lo Stato",
    "when": "1886–1889",
    "mapLabel": "Paris · Moret",
    "intro": [
      "Oltre a Durand-Ruel, Sisley cerca altri mercanti. Nel 1887 la galleria Georges Petit espone i suoi quadri e nel dicembre 1888 gli dedica una mostra. Nel 1889 Durand-Ruel espone ventotto suoi quadri a New York.",
      "Nel 1888 lo Stato francese compra per la prima volta un quadro di Sisley, la Matinée de septembre, e lo manda ad Agen. Nel novembre 1889 la famiglia torna a Moret-sur-Loing."
    ]
  },
  "symoret90": {
    "place": "A casa a Moret",
    "when": "1889–1892",
    "mapLabel": "Moret",
    "intro": [
      "Nel febbraio 1890 Sisley diventa membro della nuova Société nationale des Beaux-Arts. Da allora espone quasi ogni anno al suo Salon del Champ-de-Mars. Vende le sue opere a diversi mercanti.",
      "Nel 1891 si trasferisce in una casa di rue Montmartre a Moret. Dipinge le strade, i mulini, il ponte e il canale della città con la neve, con la pioggia e al sole."
    ]
  },
  "sychurch": {
    "place": "La chiesa di Moret",
    "when": "1893–1894",
    "mapLabel": "Notre-Dame",
    "intro": [
      "Nel 1893 Sisley dipinge il ponte di Moret in una giornata luminosa. Poi colloca il cavalletto davanti alla chiesa gotica di Notre-Dame di Moret.",
      "In una serie di quadri del 1893 e 1894 mostra la stessa facciata sotto la pioggia del mattino, dopo la pioggia, al sole e la sera. Come Monet con la cattedrale di Rouen, sperimenta la serie."
    ]
  },
  "syretro": {
    "place": "Rouen e la grande mostra",
    "when": "1894–1897",
    "mapLabel": "Rouen · Paris",
    "intro": [
      "Nel 1894 Sisley è ospite del collezionista François Depeaux vicino a Rouen e dipinge i prati di Sahurs sulla Senna. Tornato a Moret dipinge radure del bosco e il Loing.",
      "Nel febbraio 1897 la galleria Georges Petit presenta una grande mostra con centoquarantasei suoi quadri. Nello stesso anno, con il lascito di Gustave Caillebotte, sei suoi quadri entrano nelle collezioni nazionali francesi."
    ]
  },
  "sywales": {
    "place": "Il Galles e il congedo",
    "when": "1897–1899",
    "mapLabel": "Penarth · Langland",
    "intro": [
      "Nell’estate del 1897 Sisley ed Eugénie partono per la Gran Bretagna, su consiglio di François Depeaux. Soggiornano a Penarth, vicino a Cardiff. Il 5 agosto 1897 si sposano all’ufficio di stato civile di Cardiff, dopo più di trent’anni insieme. Poi lui dipinge a Langland Bay, nella penisola di Gower. In autunno tornano a Moret.",
      "All’inizio del 1898 Sisley chiede la cittadinanza francese; in vita non diventa francese. Eugénie muore l’8 ottobre 1898. Sisley muore il 29 gennaio 1899 a Moret-sur-Loing."
    ]
  },
  "syloing": {
    "place": "Sèvres e la via verso il Loing",
    "when": "1877–1880",
    "mapLabel": "Veneux-Nadon",
    "intro": [
      "All’inizio del 1877 Sisley si trasferisce a Sèvres. In aprile espone diciassette paesaggi alla terza mostra impressionista. Dipinge il ponte di Sèvres e la Senna a Suresnes.",
      "Nell’autunno del 1879 visita Moret-sur-Loing, ai margini della foresta di Fontainebleau. Nel gennaio 1880 si trasferisce con Eugénie e i bambini a Veneux-Nadon, vicino a Saint-Mammès e a Moret, perché lì la vita costa meno."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "syvsmwalters": {
    "text": [
      "Oltre un prato si vedono le case di Saint-Mammès sull’acqua.",
      "Il cielo occupa metà del quadro."
    ],
    "fact": "verso 1880. Walters Art Museum, Baltimore."
  },
  "syquarries": {
    "text": [
      "Un sentiero corre sotto gli alberi lungo la Senna, a destra brillano i pendii chiari delle cave.",
      "Sul sentiero passano piccole figure e un carro."
    ],
    "fact": "1880. Museum Barberini, Potsdam."
  },
  "syferryby": {
    "text": [
      "Uno stretto sentiero attraversa l’erba alta fino al fiume, dove un tempo passava un traghetto.",
      "Il quadro non è datato; probabilmente è del 1880 o del 1881."
    ],
    "fact": "verso 1880. National Gallery, Londra."
  },
  "sybrickfield": {
    "text": [
      "Su un pendio verde si trovano i resti di una fornace di mattoni, sopra passano nuvole grigie.",
      "In lontananza c’è la valle con i tetti rossi."
    ],
    "fact": "1880. Kröller-Müller Museum, Otterlo."
  },
  "syfrostveneux": {
    "text": [
      "Prati e alberi sono coperti di brina e brillano di bianco e di rosa.",
      "Sisley dipinge il mattino freddo con pennellate corte e chiare."
    ],
    "fact": "1880. University of Michigan Museum of Art, Ann Arbor."
  },
  "sypetitspres": {
    "text": [
      "Un sentiero porta tra i prati verso alcune case e il cielo è scuro prima del temporale.",
      "Una striscia di luce chiara resta ancora sui campi."
    ],
    "fact": "1880. Musée d’Orsay, Parigi."
  },
  "synearmoret": {
    "text": [
      "Una strada di campagna attraversa prati e alberi, in lontananza si vedono le colline sul Loing.",
      "Le nuvole passano in un cielo azzurro chiaro."
    ],
    "fact": "1881. Museum Barberini, Potsdam."
  },
  "symeadowveneux": {
    "text": [
      "Un prato verde si estende fino a una fila di alberi e di case.",
      "Una piccola figura sta nell’erba."
    ],
    "fact": "1881. Museum Barberini, Potsdam."
  },
  "syloingautumn": {
    "text": [
      "Sulla riva ci sono alberi con foglie gialle e rosse, e l’acqua riflette i colori.",
      "Il cielo è ampio e luminoso."
    ],
    "fact": "1881. Museo d’Israele, Gerusalemme."
  },
  "syorchardby": {
    "text": [
      "Gli alberi da frutto fioriscono di bianco, sotto cresce l’erba fresca.",
      "Due figure attraversano il frutteto."
    ],
    "fact": "1881. Museum Boijmans Van Beuningen, Rotterdam."
  },
  "syloingsm82": {
    "text": [
      "Il fiume scorre tranquillo accanto a case e alberi.",
      "Sulla riva ci sono barche."
    ],
    "fact": "1882. Museum of Fine Arts, Boston."
  },
  "sybourgogne": {
    "text": [
      "Presso la chiusa del canale ci sono case e una chiatta aspetta sull’acqua.",
      "Il cielo è mosso dalle nuvole."
    ],
    "fact": "1882. Musée d’art et d’histoire, Ginevra."
  },
  "syloingmoret83": {
    "text": [
      "Il fiume scorre ampio e calmo, sulla riva ci sono pioppi.",
      "Quell’anno Sisley abita a Moret."
    ],
    "fact": "1883. Museum Barberini, Potsdam."
  },
  "sysaules": {
    "text": [
      "I salici si piegano sull’acqua dell’Orvanne, un piccolo fiume vicino a Moret.",
      "Le foglie brillano in molte sfumature di verde."
    ],
    "fact": "1883. Kunsthaus Zürich."
  },
  "syroadmet": {
    "text": [
      "Una strada di campagna costeggia una fila di alberi e una figura cammina al sole.",
      "A destra la vista si apre sui campi."
    ],
    "fact": "1883. Metropolitan Museum of Art, New York."
  },
  "sytugboat": {
    "text": [
      "Un piccolo rimorchiatore passa sul Loing con un pennacchio di fumo.",
      "Sulla riva ci sono case e alberi."
    ],
    "fact": "1883. Petit Palais, Parigi."
  },
  "sybemberg83": {
    "text": [
      "Il Loing brilla sotto un cielo chiaro, sulla riva crescono alberi e cespugli.",
      "In lontananza si vedono case."
    ],
    "fact": "1883. Fondation Bemberg, Tolosa."
  },
  "sysablonspath": {
    "text": [
      "Un sentiero porta tra orti e alberi fino al villaggio.",
      "Sole e ombra si alternano lungo il cammino."
    ],
    "fact": "1883. National Gallery of Australia, Canberra."
  },
  "sysablonswood": {
    "text": [
      "Alberi alti crescono vicini e la luce filtra tra le foglie sul terreno.",
      "Una piccola figura siede al margine del bosco."
    ],
    "fact": "1883. Musée d’Orsay, Parigi."
  },
  "sycroix": {
    "text": [
      "Le case stanno in alto sopra la riva e gli alberi spogli proiettano lunghe ombre.",
      "Sotto c’è l’ampio fiume nella luce d’inverno."
    ],
    "fact": "1884. Museum of Fine Arts, Boston."
  },
  "sysepmorning84": {
    "text": [
      "Il sole del mattino illumina prati e colline vicino a Saint-Mammès e Veneux-Nadon.",
      "Un grande albero incornicia il quadro a destra."
    ],
    "fact": "1884. Museum Ordrupgaard, Charlottenlund."
  },
  "syjunemorning": {
    "text": [
      "Le case sul fiume brillano al sole del mattino e l’acqua è calma.",
      "Sulla riva siedono piccole figure."
    ],
    "fact": "1884. Artizon Museum, Tokyo."
  },
  "syfarmyard": {
    "text": [
      "Un arco conduce in un cortile con vecchi muri e tetti alti.",
      "Alcune persone lavorano nel cortile."
    ],
    "fact": "1884. Musée d’Orsay, Parigi."
  },
  "sybarnes": {
    "text": [
      "Sul canale ci sono chiatte e le case si riflettono nell’acqua.",
      "Sopra tutto si stende un cielo chiaro."
    ],
    "fact": "1884. Barnes Foundation, Philadelphia."
  },
  "sybeachsm": {
    "text": [
      "Una striscia di sabbia piatta scende verso l’acqua, dietro ci sono case e alberi.",
      "Una chiatta è ormeggiata alla riva."
    ],
    "fact": "1884. Saint Louis Art Museum."
  },
  "sylock": {
    "text": [
      "Dietro la chiusa ci sono le case di Saint-Mammès e una chiatta è sull’acqua.",
      "Il cielo è alto e luminoso."
    ],
    "fact": "1885. Nelson-Atkins Museum of Art, Kansas City."
  },
  "sycleveland": {
    "text": [
      "Le case si allineano lungo il canale con le facciate al sole.",
      "In primo piano c’è uno stretto sentiero lungo la riva."
    ],
    "fact": "1885. Cleveland Museum of Art."
  },
  "sybargesloing": {
    "text": [
      "Diverse chiatte sono ormeggiate una dietro l’altra e l’acqua è liscia.",
      "Sull’altra riva ci sono case."
    ],
    "fact": "1885. Museo d’Israele, Gerusalemme."
  },
  "syyale85": {
    "text": [
      "Erba e cespugli crescono sulla riva e dietro scorre il Loing.",
      "Le case di Saint-Mammès sono in lontananza."
    ],
    "fact": "1885. Yale University Art Gallery, New Haven."
  },
  "sycanalphila": {
    "text": [
      "Alcune anatre nuotano sul canale e un uomo sta in piedi su una barca.",
      "Sulla riva un tetto rosso brilla tra gli alberi."
    ],
    "fact": "1885. Philadelphia Museum of Art."
  },
  "syfontaines": {
    "text": [
      "Un sentiero costeggia il margine del bosco e l’erba alta brilla al sole.",
      "Il Chemin des Fontaines si trova vicino a Les Sablons."
    ],
    "fact": "1887. Musée d’art et d’histoire, Ginevra."
  },
  "sysepmorning": {
    "text": [
      "Alcuni alberi da frutto stanno in un prato soleggiato e a destra entra nel quadro un albero scuro.",
      "Nel 1888 lo Stato francese compra questo quadro, la sua prima opera di Sisley."
    ],
    "fact": "verso 1887. Musée des Beaux-Arts, Agen."
  },
  "sypontmia": {
    "text": [
      "Il vecchio ponte di pietra attraversa il Loing, dietro ci sono i mulini e la chiesa.",
      "L’acqua riflette gli archi."
    ],
    "fact": "1888. Minneapolis Institute of Art."
  },
  "syeveningoct": {
    "text": [
      "Il cielo della sera si tinge di viola e di rosa sopra il fiume.",
      "Gli alberi sulla riva sono già scuri."
    ],
    "fact": "1888. Museo Thyssen-Bornemisza, Madrid."
  },
  "sysunset88": {
    "text": [
      "La città si stende lungo il fiume nella calda luce della sera.",
      "La chiesa e i tetti si stagliano contro il cielo."
    ],
    "fact": "1888. Cincinnati Art Museum."
  },
  "syriverview": {
    "text": [
      "Il fiume attraversa ampio il quadro e sulla riva crescono alberi.",
      "Le nuvole si riflettono nell’acqua."
    ],
    "fact": "1889. Princeton University Art Museum."
  },
  "systreetmoret": {
    "text": [
      "Una strada tranquilla passa tra case antiche.",
      "Alcune figure stanno all’ombra."
    ],
    "fact": "verso 1890. Art Institute of Chicago."
  },
  "sybridgephila": {
    "text": [
      "Gli archi del ponte si susseguono sull’acqua, dietro ci sono case e alberi.",
      "La luce è chiara e fresca."
    ],
    "fact": "1891. Philadelphia Museum of Art."
  },
  "symillssnow": {
    "text": [
      "La neve copre i tetti dei mulini e la riva.",
      "Il fiume è scuro e calmo."
    ],
    "fact": "1891. Clark Art Institute, Williamstown."
  },
  "symoussoir": {
    "text": [
      "La neve copre la strada e i tetti, passano alcune persone.",
      "Le case sono dipinte con colori tenui."
    ],
    "fact": "1891. Metropolitan Museum of Art, New York."
  },
  "sycanalloing": {
    "text": [
      "Un canale diritto si allontana tra i pioppi.",
      "Una figura cammina sull’alzaia."
    ],
    "fact": "1892. Musée d’Orsay, Parigi."
  },
  "syfosses": {
    "text": [
      "Un vicolo costeggia orti e muri verso la città.",
      "Sopra i tetti c’è un cielo chiaro."
    ],
    "fact": "1892. National Museum Cardiff."
  },
  "symyhouse": {
    "text": [
      "Un cespuglio fiorito riempie il giardino e dietro si affollano i tetti di Moret.",
      "Sisley dipinge la vista presso la sua casa."
    ],
    "fact": "1892. Museum Barberini, Potsdam."
  },
  "symatratrain": {
    "text": [
      "Sulla riva ci sono barche nel cantiere, sotto un cielo grigio.",
      "La pioggia ammorbidisce i colori."
    ],
    "fact": "1892. Yale University Art Gallery, New Haven."
  },
  "sybridge93": {
    "text": [
      "In una luminosa giornata d’estate il ponte è in piena luce, l’acqua e il cielo sono azzurri.",
      "Sulla riva camminano piccole figure."
    ],
    "fact": "1893. Musée d’Orsay, Parigi."
  },
  "sychurchrain": {
    "text": [
      "La facciata gotica appare grigia e viola sotto la pioggia.",
      "Davanti alcune persone attraversano la piazza bagnata."
    ],
    "fact": "1893. Hunterian Art Gallery, Glasgow."
  },
  "sychurchlangmatt": {
    "text": [
      "La chiesa si alza alta nel cielo nuvoloso.",
      "In basso, vicino alle case, c’è ancora penombra."
    ],
    "fact": "1893. Museum Langmatt, Baden."
  },
  "sychurchcalvet": {
    "text": [
      "Il sole illumina la facciata con il grande rosone.",
      "Davanti alla chiesa c’è il vecchio mercato coperto."
    ],
    "fact": "1893. Musée Calvet, Avignone."
  },
  "sychurchdia": {
    "text": [
      "Dopo la pioggia il cielo si schiarisce e le pietre bagnate brillano.",
      "La chiesa si alza sopra la strada."
    ],
    "fact": "1894. Detroit Institute of Arts."
  },
  "sychurchpp": {
    "text": [
      "La facciata brilla chiara e rosa sotto un cielo azzurro.",
      "Qui Sisley dipinge la chiesa in pieno sole."
    ],
    "fact": "1894. Petit Palais, Parigi."
  },
  "sysahurs": {
    "text": [
      "Ampi prati si stendono lungo la Senna e gli alberi gettano ombre morbide.",
      "Sisley li dipinge come ospite di François Depeaux vicino a Rouen."
    ],
    "fact": "1894. Metropolitan Museum of Art, New York."
  },
  "syclearing": {
    "text": [
      "Tra alberi alti si apre una radura soleggiata.",
      "La luce cade a chiazze sull’erba e sul sentiero."
    ],
    "fact": "1895. Museo Thyssen-Bornemisza, Madrid."
  },
  "syshoresloing": {
    "text": [
      "Alcuni pioppi stanno sulla riva e il Loing scorre tranquillo.",
      "Sopra l’acqua c’è un cielo mite."
    ],
    "fact": "1896. Nationalmuseum, Stoccolma."
  },
  "syloire": {
    "text": [
      "Un albero spoglio sta in primo piano sulla riva e una barca è vicino all’acqua.",
      "Il museo lo intitola The Loire; il catalogo ragionato lo chiama Bords du Loing."
    ],
    "fact": "1896. Art Institute of Chicago."
  },
  "sycardiff": {
    "text": [
      "Un albero sta sulla scogliera sopra il mare e al largo di Cardiff ci sono navi all’ancora.",
      "Due piccole figure guardano l’acqua."
    ],
    "fact": "1897. Musée des Beaux-Arts, Reims."
  },
  "sypenarth": {
    "text": [
      "Con la bassa marea la spiaggia sotto la scogliera resta scoperta e la luce della sera è morbida.",
      "Sisley soggiorna a Penarth nell’estate del 1897."
    ],
    "fact": "1897. National Museum Cardiff."
  },
  "sypenarthstorm": {
    "text": [
      "Nuvole scure passano sul mare e la scogliera brilla nell’ultima luce.",
      "Sisley non aveva quasi mai dipinto coste così grandi e selvagge."
    ],
    "fact": "1897. Beaverbrook Art Gallery, Fredericton."
  },
  "systorr": {
    "text": [
      "Un grande masso sta sulla spiaggia di ciottoli e dietro arrivano le onde.",
      "Lady’s Cove è una piccola insenatura vicino a Langland."
    ],
    "fact": "1897. National Museum Cardiff."
  },
  "sylangland": {
    "text": [
      "Da una scogliera verde si guarda il mare chiaro, con velieri in lontananza.",
      "Sisley ed Eugénie trascorrono qui il tempo dopo le nozze."
    ],
    "fact": "1897. Wallraf-Richartz-Museum, Colonia."
  },
  "systorrmorning": {
    "text": [
      "Nella luce del mattino lo scoglio riposa sulla spiaggia e il mare è chiaro e calmo.",
      "In autunno Sisley ed Eugénie tornano a Moret."
    ],
    "fact": "1897. Kunstmuseum Bern."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
