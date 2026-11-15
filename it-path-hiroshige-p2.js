// v8.9 Italian content for Utagawa Hiroshige’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts. Overwrites P.paths.hiroshige with whole-path meta.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "National Diet Library, Tokio": "Biblioteca nazionale della Dieta, Tokyo",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Library of Congress, Washington": "Library of Congress, Washington",
  "National Library of New Zealand, Wellington": "Biblioteca nazionale della Nuova Zelanda, Wellington",
  "Chester Beatty Library, Dublin": "Chester Beatty Library, Dublino",
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Library of Congress, Washington (dieser Abzug)": "Library of Congress, Washington (questa impressione)"
});
  P.works = Object.assign(P.works || {}, {
  "hgks12": {
    "title": "Shinmachi",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks14": {
    "title": "Takasaki",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks16": {
    "title": "Annaka",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks17": {
    "title": "Matsuida",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks19": {
    "title": "Karuizawa",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks22": {
    "title": "Otai",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks24": {
    "title": "Shionada",
    "museum": "Cleveland Museum of Art"
  },
  "hgks26": {
    "title": "Mochizuki",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks28": {
    "title": "Nagakubo",
    "museum": "Cleveland Museum of Art"
  },
  "hgks29": {
    "title": "Wada",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks30": {
    "title": "Shimosuwa",
    "museum": "Cleveland Museum of Art"
  },
  "hgks32": {
    "title": "Seba",
    "museum": "Library of Congress, Washington"
  },
  "hgks37": {
    "title": "Miyanokoshi",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks38": {
    "title": "Fukushima",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks40": {
    "title": "Suhara",
    "museum": "Cleveland Museum of Art"
  },
  "hgks43": {
    "title": "Tsumago",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks47": {
    "title": "Ōi",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgks68": {
    "title": "Moriyama",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgrk_hida": {
    "title": "Il traghetto a cesta nello Hida",
    "museum": "Library of Congress, Washington"
  },
  "hgrk_naruto": {
    "title": "I gorghi di Naruto nell’Awa",
    "museum": "Biblioteca nazionale della Nuova Zelanda, Wellington"
  },
  "hgrk_arashi": {
    "title": "Il ponte Togetsu ad Arashiyama",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgrk_saruhashi": {
    "title": "Il ponte delle Scimmie nel Kai",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgrk_sumida": {
    "title": "Mattino di neve sul Sumida, nel Musashi",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgrk_sarashina": {
    "title": "La luna di Sarashina, nello Shinano",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgrk_matsushima": {
    "title": "Matsushima nel Mutsu",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgrk_ishiyama": {
    "title": "Il tempio Ishiyama sul lago Biwa",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgrk_nikko": {
    "title": "La cascata Urami a Nikkō",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgrk_noto": {
    "title": "Taki no ura nel Noto",
    "museum": "Library of Congress, Washington"
  },
  "hgrk_izumo": {
    "title": "La festa Hotohoto al Grande Santuario di Izumo",
    "museum": "Cleveland Museum of Art"
  },
  "hgrk_sado": {
    "title": "Le miniere d’oro di Sado",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_nihonbashi": {
    "title": "Nihonbashi dopo la neve",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgmeh_kasumi": {
    "title": "Kasumigaseki",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgmeh_suruga": {
    "title": "Suruga-chō",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_shinobazu": {
    "title": "Il padiglione Kiyomizu e lo stagno Shinobazu",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgmeh_suidobashi": {
    "title": "Il ponte Suidō e Surugadai",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_yatsumi": {
    "title": "Il ponte Yatsumi",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_plum": {
    "title": "Il giardino dei susini di Kameido",
    "museum": "Chester Beatty Library, Dublino"
  },
  "hgmeh_iris": {
    "title": "Gli iris di Horikiri",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_asukayama": {
    "title": "Veduta verso nord da Asukayama",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgmeh_ukeji": {
    "title": "Il santuario Akiba a Ukeji",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hgmeh_sazaido": {
    "title": "Il padiglione a spirale dei Cinquecento Arhat",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgmeh_mama": {
    "title": "Aceri a Mama",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "ohashi": {
    "title": "Acquazzone improvviso sul ponte Shin-Ōhashi",
    "museum": "Library of Congress, Washington (questa impressione)"
  },
  "hgmeh_fireworks": {
    "title": "Fuochi d’artificio al ponte Ryōgoku",
    "museum": "Cleveland Museum of Art"
  },
  "hgmeh_moonpine": {
    "title": "Il pino della luna a Ueno",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_senju": {
    "title": "Il grande ponte di Senju",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_mannen": {
    "title": "Il ponte Mannen a Fukagawa",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_ayase": {
    "title": "Il fiume Ayase a Kanegafuchi",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_jumbo": {
    "title": "Aquila sopra la pianura di Jūmantsubo a Fukagawa",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hgmeh_azuma": {
    "title": "Il ponte Azuma e il tempio Kinryūzan",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_bikuni": {
    "title": "Il ponte Bikuni sotto la neve",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_saruwaka": {
    "title": "Veduta notturna di Saruwaka-chō",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgmeh_meguro": {
    "title": "Il ponte a tamburo e la collina del Tramonto a Meguro",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_takata": {
    "title": "Il maneggio di Takata",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_foxfires": {
    "title": "Fuochi di volpe la notte di San Silvestro a Ōji",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgmeh_shiba": {
    "title": "Shiba Shinmei e lo Zōjō-ji",
    "museum": "Biblioteca nazionale della Dieta, Tokyo"
  },
  "hgfuji_enoshima": {
    "title": "La porta di Enoshima",
    "museum": "Library of Congress, Washington"
  },
  "hgfuji_miho": {
    "title": "La spiaggia dei pini di Miho nel Suruga",
    "museum": "Library of Congress, Washington"
  },
  "hgfuji_satta": {
    "title": "Il mare al largo di Satta nel Suruga",
    "museum": "Library of Congress, Washington"
  },
  "hgfuji_hakone": {
    "title": "Il lago di Hakone",
    "museum": "Library of Congress, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.hiroshige = {
  "title": "Il percorso di vita di Utagawa Hiroshige",
  "life": "1797–1858",
  "part": "Parti 1–2 · 1797–1858",
  "subtitle": "Da Edo sul Tōkaidō e sul Kisokaidō, verso le province e le Cento vedute di Edo",
  "intro": "Viaggia con Utagawa Hiroshige attraverso tutta la sua vita: dall’infanzia nel corpo dei pompieri di Yayosu a Edo, passando per l’apprendistato presso Toyohiro, le prime vedute della capitale orientale, il viaggio sul Tōkaidō del 1832 secondo la tradizione e la serie Hōeidō delle 53 stazioni, le otto vedute di Ōmi, il Kisokaidō dal 1835 circa, i luoghi celebri delle oltre sessanta province e le Cento vedute famose di Edo, fino alla morte di Hiroshige a Edo il 12 ottobre 1858. Stazioni brevi e xilografie da colorare.",
  "ending": [
    "Il 12 ottobre 1858 Utagawa Hiroshige muore a Edo, a sessantun anni. La tradizione indica come causa della morte il colera; in quell’anno in città c’è un’epidemia. Viene sepolto nel cimitero del tempio Tōgaku-ji ad Asakusa. Il suo allievo e figlio adottivo Suzuki Shigenobu porta avanti il nome come Hiroshige II.",
    "Restano le stazioni del Tōkaidō e del Kisokaidō, le vedute delle province e le Cento vedute famose di Edo: un’opera che ha fissato la pioggia, la neve, la luna e le strade della capitale orientale."
  ],
  "epilogue": "Utagawa Hiroshige muore il 12 ottobre 1858 a Edo. Viene sepolto presso il tempio Tōgaku-ji ad Asakusa. Restano le 53 stazioni del Tōkaidō, il Kisokaidō, i luoghi celebri delle oltre sessanta province e le Cento vedute famose di Edo."
};
  P.stations = Object.assign(P.stations || {}, {
  "hiroshigekiso": {
    "place": "Il Kisokaidō: Hiroshige subentra",
    "when": "dal 1835 circa",
    "mapLabel": "Kisokaidō",
    "intro": [
      "Dopo il successo del Tōkaidō di Hōeidō nasce una seconda serie di stazioni sulla strada dell’interno, il Kisokaidō (Nakasendō): 69 stazioni più Nihonbashi. Keisai Eisen la inizia per l’editore Takenouchi Magohachi (Hōeidō); Hiroshige assume la maggior parte delle stazioni successive. Anche l’editore Iseya Rihei (Kinjudō) partecipa all’edizione.",
      "I fogli escono dal 1835 circa, negli anni seguenti. Eisen resta responsabile delle prime stazioni; i fogli mostrati qui appartengono alla parte di Hiroshige.",
      "La strada dell’interno va da Edo attraverso le montagne di Kōzuke e Shinano, per alti passi, verso ovest."
    ]
  },
  "hiroshigepass": {
    "place": "Passi, luna e neve",
    "when": "circa 1835–1838",
    "mapLabel": "Passi",
    "intro": [
      "La strada sale attraverso le montagne di Shinano. A Mochizuki la luna sta sopra i pini, a Nagakubo sopra un lungo ponte; al passo di Wada la neve è alta.",
      "Shimosuwa si trova sul lago Suwa, dopo gli alti passi. A Seba i salici stanno nella luce della sera sopra il fiume – uno dei fogli più noti di tutta la serie.",
      "Queste stazioni sono il cuore del Kisokaidō di Hiroshige."
    ]
  },
  "hiroshigekisoend": {
    "place": "Valli del Kiso e l’ovest",
    "when": "circa 1835–1838",
    "mapLabel": "Kiso",
    "intro": [
      "Più a ovest la strada segue le valli del Kiso: la luna su Miyanokoshi, il posto di controllo di Fukushima, la pioggia improvvisa a Suhara, la stazione di posta di Tsumago, la neve fitta a Ōi.",
      "Verso la fine della strada, Moriyama è già vicina al lago Biwa, nel passaggio verso Ōtsu e Kyōto.",
      "Con questi fogli la serie dell’interno è saldamente nelle mani di Hiroshige."
    ]
  },
  "hiroshigeprovinces": {
    "place": "Le oltre sessanta province",
    "when": "1853–1856",
    "mapLabel": "Province",
    "intro": [
      "Nel 1853–1856 esce la serie «Luoghi celebri delle oltre sessanta province» (Rokujūyoshū meisho zue): circa settanta fogli ōban verticali, pubblicati da Koshimuraya Heisuke.",
      "Le vedute abbracciano tutto il paese: il traghetto a cesta nello Hida, i gorghi di Naruto nell’Awa, il ponte Togetsu ad Arashiyama, il ponte delle Scimmie nel Kai, un mattino di neve sul Sumida, la luna sulle risaie a terrazze di Sarashina.",
      "A differenza del Tōkaidō e del Kisokaidō, non è una sequenza di stazioni stradali, ma un atlante di luoghi celebri."
    ]
  },
  "hiroshigeprovinces2": {
    "place": "Coste, isole e santuari",
    "when": "1853–1856",
    "mapLabel": "Coste",
    "intro": [
      "La serie delle province raggiunge anche coste e isole: la baia di Matsushima nel Mutsu, il tempio Ishiyama sul lago Biwa, la cascata Urami a Nikkō, la costa di Noto, la festa Hotohoto al Grande Santuario di Izumo e le miniere d’oro dell’isola di Sado.",
      "A Ishiyama Hiroshige torna in un luogo che aveva già disegnato nelle otto vedute di Ōmi a metà degli anni Trenta dell’Ottocento.",
      "Con questa serie, vent’anni dopo il Tōkaidō, è di nuovo il maestro del paesaggio della capitale orientale – ora con lo sguardo su tutto il paese."
    ]
  },
  "hiroshigehyakkei": {
    "place": "Cento vedute famose di Edo",
    "when": "dal 1856",
    "mapLabel": "Edo",
    "intro": [
      "Dal 1856 Hiroshige lavora alle «Cento vedute famose di Edo» (Meisho Edo Hyakkei), pubblicate da Uoya Eikichi (Sakanaya Eikichi). La serie arriva a comprendere circa 118–119 fogli, per lo più degli anni 1856–1858.",
      "Comincia di nuovo a Nihonbashi, dopo la neve, e percorre le strade della capitale orientale: Kasumigaseki, Suruga-chō con il Fuji nell’asse della via, il padiglione Kiyomizu sullo stagno Shinobazu, il ponte Suidō, il ponte Yatsumi.",
      "Nel 1856 Hiroshige prende anche formalmente i voti buddhisti; continua a lavorare, fino agli ultimi anni."
    ]
  },
  "hiroshigespring": {
    "place": "Giardini, fiori e foglie d’autunno",
    "when": "1856–1857",
    "mapLabel": "Giardini",
    "intro": [
      "Nelle Cento vedute passano giardini e stagioni: il giardino dei susini di Kameido, gli iris di Horikiri, la vista da Asukayama, il santuario Akiba a Ukeji, il padiglione a spirale dei Cinquecento Arhat, gli aceri di Mama.",
      "Molti di questi fogli escono nel 1857. Il tronco curvo del susino di Kameido e gli iris di Horikiri sono tra le immagini di giardino più note della serie.",
      "Hiroshige pone spesso il primo piano vicino e grande, la città o il giardino dietro, calmi e ampi."
    ]
  },
  "hiroshigenight": {
    "place": "Pioggia, notte e fiume",
    "when": "1856–1858",
    "mapLabel": "Pioggia",
    "intro": [
      "Pioggia, fuochi d’artificio e acqua sono tra i fogli più famosi della serie. Nel 1857 esce l’acquazzone improvviso sullo Shin-Ōhashi e Atake, un grande foglio tardo delle Cento vedute.",
      "Si aggiungono il pino della luna a Ueno, il grande ponte di Senju, il ponte Mannen a Fukagawa e il fiume Ayase a Kanegafuchi. I fuochi d’artificio di Ryōgoku escono nel 1858.",
      "Il tempo atmosferico e la notte restano fino all’ultimo uno dei temi più saldi di Hiroshige."
    ]
  },
  "hiroshigewinter": {
    "place": "Neve, aquila e strade",
    "when": "1857–1858",
    "mapLabel": "Inverno",
    "intro": [
      "La serie fissa anche l’inverno e il margine della città: un’aquila sopra la pianura innevata di Jūmantsubo a Fukagawa, il ponte Azuma con il lontano Kinryūzan, il ponte Bikuni sotto la neve, la notte nel quartiere dei teatri di Saruwaka-chō, il ponte a tamburo di Meguro, il maneggio di Takata.",
      "Il foglio di neve del ponte Bikuni esce nel 1858. Gli altri fogli di questa stazione appartengono soprattutto al 1857.",
      "Così si completa lo sguardo su Edo: non solo giardini e ponti, ma anche neve, animali e le strade del margine."
    ]
  },
  "hiroshige1858": {
    "place": "Ultimi anni e la morte nel 1858",
    "when": "1857–1858",
    "mapLabel": "1858",
    "intro": [
      "Nel 1856 Hiroshige prende formalmente i voti buddhisti e continua a lavorare. Nel 1857 esce nelle Cento vedute il foglio dei fuochi di volpe la notte di San Silvestro a Ōji; si aggiunge la veduta di Shiba Shinmei e dello Zōjō-ji.",
      "Nel 1858 esce, presso Tsutaya Kichizō (Kōeidō), una serie di trentasei vedute del Fuji: la porta di Enoshima, la spiaggia dei pini di Miho, il mare al largo di Satta, il lago di Hakone.",
      "Il 12 ottobre 1858 Utagawa Hiroshige muore a Edo. La tradizione indica come causa della morte il colera; in quell’anno in città c’è un’epidemia. Viene sepolto nel cimitero del tempio Tōgaku-ji ad Asakusa. Il suo allievo e figlio adottivo Suzuki Shigenobu porta avanti il nome come Hiroshige II."
    ]
  },
  "hiroshigeomi": {
    "place": "Ōmi hakkei e la fama degli anni 1830",
    "when": "verso il 1834–1835",
    "mapLabel": "Ōmi",
    "intro": [
      "Verso il 1834–1835 segue la serie «Ōmi hakkei no uchi», le otto vedute della provincia di Ōmi sul lago Biwa, non lontano da Kyoto. Lo schema delle otto vedute è più antico e proviene dalla Cina; Hiroshige lo trasporta sulla campana, la pioggia, le oche, la luna e il bagliore della sera sul lago.",
      "Con la serie del Tōkaidō e le vedute di Ōmi, a metà degli anni 1830 Hiroshige è saldamente affermato come maestro del paesaggio, all’estremità occidentale della strada e sul lago.",
      "Da qui il cammino prosegue verso il Kisokaidō, le vedute delle province e le Cento vedute famose di Edo."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hgks12": {
    "text": [
      "La stazione di Shinmachi si trova sul Kisokaidō, nella provincia di Kōzuke. Il foglio mostra la stazione di posta con viaggiatori e l’ampio paesaggio della strada dell’interno.",
      "Keisai Eisen inizia la serie delle 69 stazioni del Kisokaidō per l’editore Takenouchi Magohachi (Hōeidō). Le stazioni successive, tra cui Shinmachi, le disegna Hiroshige; escono dal 1835 circa, negli anni seguenti. Questo foglio è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks14": {
    "text": [
      "Takasaki è un’importante città castello del Kisokaidō nel Kōzuke. Il foglio mostra la stazione in aperta campagna, con viaggiatori sulla strada.",
      "Hiroshige disegna Takasaki come una delle stazioni che seguono l’inizio della serie di Eisen. Il foglio della serie del 1835–1838 circa è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks16": {
    "text": [
      "Annaka si trova nel Kōzuke, già nella salita verso il passo di Usui. Il foglio mostra la stazione e la strada che porta verso i monti.",
      "Nella serie del Kisokaidō, Annaka è una delle stazioni di Hiroshige. Il foglio è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks17": {
    "text": [
      "Matsuida si trova ai piedi del passo di Usui, che separa il Kōzuke dallo Shinano. Viaggiatori e bestie da soma avanzano nella stazione collinare.",
      "Il foglio appartiene alla parte di Hiroshige nella serie del Kisokaidō ed è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks19": {
    "text": [
      "Karuizawa si trova in alto sopra il passo di Usui, sul lato dello Shinano. Il foglio mostra l’altura brulla e aperta con viaggiatori nel vento e tra le rocce.",
      "La stazione è una delle alture note del Kisokaidō. Il foglio di Hiroshige della serie del 1835–1838 circa è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks22": {
    "text": [
      "Otai (anche Odai) si trova già nello Shinano, dopo la discesa dal passo di Usui. Il foglio mostra viaggiatori nel paesaggio aperto della strada dell’interno.",
      "Hiroshige disegna la stazione per la serie del Kisokaidō. Il foglio è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks24": {
    "text": [
      "Shionada si trova sul fiume Chikuma, nello Shinano. Il foglio mostra la stazione fluviale e la strada lungo l’acqua.",
      "Hiroshige disegna Shionada per la serie delle 69 stazioni del Kisokaidō. Questo foglio è esposto al Cleveland Museum of Art."
    ],
    "fact": "circa 1835–1838. Cleveland Museum of Art."
  },
  "hgks26": {
    "text": [
      "A Mochizuki alti pini stanno sotto una luna chiara; il nome della stazione significa «luna piena». Viaggiatori e cavalli avanzano sulla strada al chiaro di luna.",
      "Il foglio è una delle vedute di luna note del Kisokaidō. È conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks28": {
    "text": [
      "Sopra un lungo ponte di legno sta la luna piena; i viaggiatori attraversano il fiume, e sulla riva di qua persone e un cavallo passano davanti alle case. Un grande pino divide la scena.",
      "Nagakubo è considerato uno dei fogli principali della serie del Kisokaidō. Questo foglio, del 1835–1836 circa, è esposto al Cleveland Museum of Art."
    ],
    "fact": "circa 1835–1838. Cleveland Museum of Art."
  },
  "hgks29": {
    "text": [
      "Al passo di Wada la neve è alta; la strada sale ripida tra pendii bianchi e alberi scuri, e i viaggiatori risalgono a fatica il passo.",
      "La scena di neve al passo di Wada è uno dei fogli più noti del Kisokaidō. È conservata nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks30": {
    "text": [
      "Shimosuwa si trova sul lago Suwa, una delle stazioni più basse dopo gli alti passi. Il foglio mostra la stazione sul lago, nello Shinano.",
      "Hiroshige disegna Shimosuwa per la serie del Kisokaidō; una versione del 1835 è esposta al Cleveland Museum of Art."
    ],
    "fact": "circa 1835–1838. Cleveland Museum of Art."
  },
  "hgks32": {
    "text": [
      "Presso il fiume di Seba stanno salici piangenti nella luce della sera; due uomini spingono con la pertica una barca carica, e il sole tramonta rosso sulla riva piatta.",
      "«Seba» è considerato uno dei fogli più belli di tutta la serie del Kisokaidō. Questa impressione è conservata nella Library of Congress di Washington."
    ],
    "fact": "circa 1835–1838. Library of Congress, Washington."
  },
  "hgks37": {
    "text": [
      "A Miyanokoshi la luna sta sopra il fiume e gli alberi della stazione, nei monti del Kiso. I viaggiatori avanzano lungo la riva al chiaro di luna.",
      "Il foglio appartiene alle stazioni di Hiroshige del Kisokaidō ed è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks38": {
    "text": [
      "Kiso-Fukushima è uno dei principali posti di controllo della strada dell’interno, nella stretta valle del fiume Kiso. Il foglio mostra la stazione di posta sotto gli alberi, con viaggiatori sulla strada.",
      "Hiroshige disegna Fukushima per la serie del Kisokaidō. Il foglio è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks40": {
    "text": [
      "A Suhara una pioggia improvvisa sorprende i viaggiatori; ombrelli e cappelli si inclinano, e gli alberi stanno bagnati sopra la strada.",
      "Il foglio di pioggia di Suhara è una delle vedute di tempo atmosferico note del Kisokaidō. Questa versione è esposta al Cleveland Museum of Art."
    ],
    "fact": "circa 1835–1838. Cleveland Museum of Art."
  },
  "hgks43": {
    "text": [
      "Tsumago si trova nella stretta valle del Kiso, una delle stazioni di posta note della strada dell’interno. Il foglio mostra la stazione nel paesaggio di montagna, con viaggiatori in cammino.",
      "Hiroshige disegna Tsumago per la serie delle 69 stazioni. Il foglio è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks47": {
    "text": [
      "Sulla stazione di Ōi cade una neve fitta; i viaggiatori avanzano a fatica nel paesaggio bianco, e le case e gli alberi scompaiono nella tormenta.",
      "Il foglio di neve di Ōi è una delle opere principali della serie del Kisokaidō. È conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgks68": {
    "text": [
      "Moriyama è già vicina al lago Biwa, verso la fine del Kisokaidō e il passaggio verso Ōtsu e Kyōto. Il foglio mostra la stazione nel paesaggio aperto e più basso.",
      "Con stazioni come Moriyama, Hiroshige riporta la strada dell’interno verso la regione del lago Biwa. Il foglio è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "circa 1835–1838. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgrk_hida": {
    "text": [
      "Sopra una gola nello Hida pende un traghetto a cesta; la cesta scivola lungo la fune, e molto in basso scorre il fiume tra pendii ripidi e boscosi.",
      "Il foglio appartiene alla serie «Luoghi celebri delle oltre sessanta province» (Rokujūyoshū meisho zue), uscita nel 1853–1856 presso Koshimuraya Heisuke. Questa impressione è conservata nella Library of Congress di Washington."
    ],
    "fact": "1853–1856. Library of Congress, Washington."
  },
  "hgrk_naruto": {
    "text": [
      "Al largo della costa dell’Awa girano i gorghi dello stretto di Naruto; l’acqua vortica in cerchi potenti tra le isole.",
      "I gorghi di Naruto sono uno dei motivi più noti della serie delle province. Questo foglio, del 1855 circa, è conservato nella Biblioteca nazionale della Nuova Zelanda a Wellington."
    ],
    "fact": "1853–1856. Biblioteca nazionale della Nuova Zelanda, Wellington."
  },
  "hgrk_arashi": {
    "text": [
      "Ad Arashiyama, nella provincia di Yamashiro, il ponte Togetsu attraversa il fiume; i ciliegi in fiore e le colline boscose stanno sopra l’acqua.",
      "Il foglio della serie delle province mostra uno dei luoghi più famosi presso Kyōto. È conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1853–1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgrk_saruhashi": {
    "text": [
      "Il ponte delle Scimmie del Kai si tende molto in alto sopra una gola; la struttura di legno pende ardita tra le rocce, e molto in basso scorre il fiume.",
      "Saruhashi è un luogo celebre classico della provincia di Kai. Il foglio della serie del 1853–1856 è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1853–1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgrk_sumida": {
    "text": [
      "Sul fiume Sumida, nella provincia di Musashi, la neve copre la riva, le barche e la città lontana; il mattino è calmo e chiaro.",
      "Il foglio porta la serie delle province fino al fiume di Edo. È conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1853–1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgrk_sarashina": {
    "text": [
      "A Sarashina, nella provincia di Shinano, la luna sta sopra le risaie a terrazze e il monte Kyōdai; i campi salgono a gradini lungo il pendio.",
      "La «luna delle risaie» di Sarashina è un motivo classico. Il foglio della serie delle province è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1853–1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgrk_matsushima": {
    "text": [
      "Al largo della costa del Mutsu le isole di Matsushima stanno nell’acqua calma, una delle belle vedute classiche del Giappone. Pini stanno sulle rocce, l’orizzonte è ampio.",
      "Il foglio della serie delle province mostra il celebre arcipelago del nord. È conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1853–1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgrk_ishiyama": {
    "text": [
      "Il tempio Ishiyama sta sopra il lago Biwa, nella provincia di Ōmi; luna, lago e tempio appartengono alle otto vedute classiche di Ōmi, qui nella successiva serie delle province.",
      "Hiroshige torna nel luogo che aveva già disegnato negli anni Trenta dell’Ottocento nelle otto vedute di Ōmi. Il foglio è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1853–1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgrk_nikko": {
    "text": [
      "A Nikkō, nella provincia di Shimotsuke, la cascata Urami cade dietro una sporgenza di roccia; l’acqua si vede da dietro, tra roccia e bosco.",
      "Il foglio della serie delle province mostra una delle cascate note del monte sacro di Nikkō. È conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1853–1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgrk_noto": {
    "text": [
      "Sulla costa del Noto, rocce e risacca sotto un cielo ampio; Taki no ura è un luogo celebre della penisola.",
      "Il foglio della serie del 1853–1856 è conservato nella Library of Congress di Washington."
    ],
    "fact": "1853–1856. Library of Congress, Washington."
  },
  "hgrk_izumo": {
    "text": [
      "Al Grande Santuario di Izumo, nella provincia di Izumo, la gente si raduna per la festa Hotohoto. Lanterne, alberi e i padiglioni del santuario riempiono il foglio.",
      "Il foglio di festa della serie delle province, del 1853, è esposto al Cleveland Museum of Art."
    ],
    "fact": "1853–1856. Cleveland Museum of Art."
  },
  "hgrk_sado": {
    "text": [
      "Sull’isola di Sado le gallerie entrano nella montagna; operai e un carro stanno nella valle, un ruscello scorre davanti agli imbocchi scuri, e sopra si alzano pendii boscosi.",
      "Le miniere d’oro sono il foglio della provincia di Sado nella serie delle oltre sessanta province. Questa impressione del 1853 è conservata nella Library of Congress di Washington."
    ],
    "fact": "1853–1856. Library of Congress, Washington."
  },
  "hgmeh_nihonbashi": {
    "text": [
      "Dopo la neve Nihonbashi è chiara e ampia; il cielo sereno, il ponte e il fiume della capitale orientale nella luce d’inverno.",
      "Nel 1856 comincia, presso Uoya Eikichi (Sakanaya Eikichi), la serie «Cento vedute famose di Edo». Il foglio d’apertura a Nihonbashi è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgmeh_kasumi": {
    "text": [
      "La via di Kasumigaseki porta verso il fondo della città; tetti, muri e passanti si dispongono lungo il pendio, la vista è ampia e chiara.",
      "Il foglio del 1856 appartiene ai primi fogli delle Cento vedute. È conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgmeh_suruga": {
    "text": [
      "Lungo la via di Suruga-chō appare il Fuji tra i tetti dei negozi di stoffe; il monte sta esattamente nell’asse della via.",
      "Il foglio del 1856 è una delle vedute cittadine note della serie. Questa impressione è conservata nella Library of Congress di Washington."
    ],
    "fact": "1856. Library of Congress, Washington."
  },
  "hgmeh_shinobazu": {
    "text": [
      "Il padiglione Kiyomizu di Ueno sta sopra lo stagno Shinobazu; i ciliegi in fiore e l’acqua riempiono la vista, e il padiglione sporge su sostegni sopra il pendio.",
      "Il foglio delle Cento vedute è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1856. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgmeh_suidobashi": {
    "text": [
      "Sopra il ponte Suidō e il quartiere di Surugadai un aquilone sta nel vento; il Fuji appare in lontananza sopra i tetti.",
      "Il foglio del 1857 è conservato nella Library of Congress di Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_yatsumi": {
    "text": [
      "Dal ponte Yatsumi lo sguardo va sull’acqua e sui pali; un ramo entra nell’immagine, e la città sta tranquilla oltre.",
      "Il foglio del 1856 delle Cento vedute è conservato nella Library of Congress di Washington."
    ],
    "fact": "1856. Library of Congress, Washington."
  },
  "hgmeh_plum": {
    "text": [
      "Nel giardino dei susini di Kameido un tronco fiorito, molto curvo, sta vicino in primo piano; dietro si stendono il giardino, i visitatori e l’ampio cielo rossastro.",
      "Il foglio esce nell’undicesimo mese del 1857 nella serie delle Cento vedute. Questa impressione è conservata nella Chester Beatty Library di Dublino."
    ],
    "fact": "1857. Chester Beatty Library, Dublino."
  },
  "hgmeh_iris": {
    "text": [
      "A Horikiri gli iris stanno alti in primo piano; foglie e fiori riempiono il foglio, e dietro si stendono il giardino e piccole figure.",
      "Il foglio del 1857 è una delle vedute di giardino più note della serie. Questa impressione è conservata nella Library of Congress di Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_asukayama": {
    "text": [
      "Dalla collina di Asukayama lo sguardo va verso nord sopra i ciliegi, la pianura e il Fuji lontano. La collina è un luogo amato della città per la festa dei fiori.",
      "Il foglio delle Cento vedute è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1856–1857. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgmeh_ukeji": {
    "text": [
      "Nel recinto del santuario Akiba a Ukeji stanno alberi d’autunno sopra uno stagno; il fogliame e il riflesso riempiono la superficie con colori calmi e forti.",
      "Il foglio del 1857 delle Cento vedute è esposto al Rijksmuseum di Amsterdam."
    ],
    "fact": "1857. Rijksmuseum, Amsterdam."
  },
  "hgmeh_sazaido": {
    "text": [
      "Il padiglione a spirale (Sazaidō) del tempio dei Cinquecento Arhat sta sopra l’acqua; l’insolito edificio rotondo si vede dalla città.",
      "Il foglio delle Cento vedute è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1857. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgmeh_mama": {
    "text": [
      "A Mama aceri rossi stanno sopra la cappella di Tekona e il ponte collegato; il fogliame d’autunno pende vicino nell’immagine.",
      "Il foglio delle Cento vedute è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1857. Biblioteca nazionale della Dieta, Tokyo."
  },
  "ohashi": {
    "text": [
      "Una pioggia estiva sorprende la gente sullo Shin-Ōhashi; gli ombrelli si inclinano, le tavole luccicano, il fiume sta scuro sotto, e sull’altra riva c’è Atake.",
      "Il foglio del 1857 delle Cento vedute famose di Edo è una delle immagini di tempo atmosferico più note di Hiroshige. Questa impressione è conservata nella Library of Congress di Washington."
    ],
    "fact": "1857. Library of Congress, Washington (questa impressione)."
  },
  "hgmeh_fireworks": {
    "text": [
      "Sopra il ponte Ryōgoku e il Sumida salgono fuochi d’artificio nel cielo notturno; le barche si affollano sull’acqua, e il ponte è pieno di gente.",
      "Il foglio esce nel 1858, l’ultimo anno di vita di Hiroshige, nella serie delle Cento vedute. È esposto al Cleveland Museum of Art."
    ],
    "fact": "1858. Cleveland Museum of Art."
  },
  "hgmeh_moonpine": {
    "text": [
      "A Ueno un ramo di pino forma un anello attraverso cui lo sguardo cade sullo stagno Shinobazu; il ramo sta vicino e scuro davanti all’acqua.",
      "Il «pino della luna» del 1857 è uno dei celebri motivi in primo piano della serie. Questa impressione è conservata nella Library of Congress di Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_senju": {
    "text": [
      "Il grande ponte di Senju attraversa il fiume al margine nord della città; viaggiatori e l’ampia acqua riempiono il foglio.",
      "Il foglio del 1856 delle Cento vedute è conservato nella Library of Congress di Washington."
    ],
    "fact": "1856. Library of Congress, Washington."
  },
  "hgmeh_mannen": {
    "text": [
      "Sotto il ponte Mannen a Fukagawa c’è l’acqua; spesso il dorso di una tartaruga entra in primo piano, e sopra il ponte e i magazzini.",
      "Il foglio del 1857 è conservato nella Library of Congress di Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_ayase": {
    "text": [
      "Sul fiume Ayase a Kanegafuchi stanno piante vicine in primo piano; dietro le foglie c’è il fiume tranquillo della città orientale.",
      "Il foglio del 1857 delle Cento vedute è conservato nella Library of Congress di Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_jumbo": {
    "text": [
      "Un’aquila sta su un tronco innevato e guarda l’ampia pianura innevata di Jūmantsubo, a Fukagawa; il cielo è freddo e ampio.",
      "Il foglio del 1857 è una delle vedute invernali note della serie. È esposto al Rijksmuseum di Amsterdam."
    ],
    "fact": "1857. Rijksmuseum, Amsterdam."
  },
  "hgmeh_azuma": {
    "text": [
      "Dal ponte Azuma lo sguardo va verso il lontano padiglione del tempio Kinryūzan ad Asakusa; il fiume e le barche stanno nel piano intermedio.",
      "Il foglio del 1857 delle Cento vedute è conservato nella Library of Congress di Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_bikuni": {
    "text": [
      "Il ponte Bikuni sta sotto una neve fitta; tetti, parapetti e strada scompaiono nel bianco, e la città è silenziosa.",
      "Il foglio esce nel 1858 nella serie delle Cento vedute. Questa impressione è conservata nella Library of Congress di Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  },
  "hgmeh_saruwaka": {
    "text": [
      "Nel quartiere dei teatri di Saruwaka-chō le ombre dei passanti si stagliano nette al chiaro di luna; la via dei teatri è di notte insieme animata e quieta.",
      "Il foglio delle Cento vedute è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1856–1857. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgmeh_meguro": {
    "text": [
      "A Meguro il ripido ponte a tamburo si inarca sopra la strada; sopra c’è la collina del Tramonto, e i viaggiatori salgono il ponte ad arco.",
      "Il foglio del 1857 delle Cento vedute è conservato nella Library of Congress di Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_takata": {
    "text": [
      "Al maneggio di Takata corrono cavalli sotto gli alberi; il campo d’esercizio aperto si trova al margine della città.",
      "Il foglio del 1857 delle Cento vedute è conservato nella Library of Congress di Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_foxfires": {
    "text": [
      "La notte di San Silvestro le volpi si radunano con le loro luci di fuoco sotto un albero a Ōji; le luci stanno come lanterne nel paesaggio scuro davanti ai campi.",
      "Il foglio del 1857 è uno dei fogli tardi e noti delle Cento vedute. È conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1857. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgmeh_shiba": {
    "text": [
      "A Shiba stanno il santuario Shinmei e il recinto del tempio Zōjō-ji; tetti, alberi e il sentiero portano verso il terreno sacro al margine della città.",
      "Il foglio delle Cento vedute è conservato nella Biblioteca nazionale della Dieta a Tokyo."
    ],
    "fact": "1857–1858. Biblioteca nazionale della Dieta, Tokyo."
  },
  "hgfuji_enoshima": {
    "text": [
      "La porta all’accesso all’isola di Enoshima sta davanti al mare; dietro la costa del Sagami si alza il Fuji.",
      "Nel 1858 esce, presso Tsutaya Kichizō (Kōeidō), una serie di trentasei vedute del Fuji. Questo foglio è conservato nella Library of Congress di Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  },
  "hgfuji_miho": {
    "text": [
      "Sulla spiaggia dei pini di Miho, nella provincia di Suruga, gli alberi stanno davanti al mare; il Fuji appare sopra la baia, una veduta classica del monte.",
      "Il foglio appartiene alla serie del Fuji del 1858. È conservato nella Library of Congress di Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  },
  "hgfuji_satta": {
    "text": [
      "Al largo della costa di Satta, nel Suruga, le onde si accavallano; attraverso l’acqua e la spuma appare il Fuji, vicino e saldo sopra il mare.",
      "Il foglio della serie del Fuji del 1858 è una delle vedute marine tarde più note di Hiroshige. Questa impressione è conservata nella Library of Congress di Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  },
  "hgfuji_hakone": {
    "text": [
      "Al lago di Hakone il Fuji sta sopra l’acqua e le montagne; il paesaggio del passo, che Hiroshige aveva già disegnato nella serie del Tōkaidō, ricompare qui nella tarda serie del Fuji.",
      "Il foglio del 1858 è conservato nella Library of Congress di Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
