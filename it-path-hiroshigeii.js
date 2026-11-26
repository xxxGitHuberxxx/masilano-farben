// v10.43 IT content for Utagawa Hiroshige II’s life journey (1826–1869). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York"
});
  P.works = Object.assign(P.works || {}, {
  "hzivy": {
    "title": "Uccellino ed edera",
    "museum": "Art Institute of Chicago"
  },
  "hzwhiteeye": {
    "title": "Occhialino giapponese e cachi",
    "museum": "Art Institute of Chicago"
  },
  "hzsparrow": {
    "title": "Passero su un ramo di camelia",
    "museum": "Art Institute of Chicago"
  },
  "hzparrot": {
    "title": "Pappagallo su un ramo di susino",
    "museum": "Art Institute of Chicago"
  },
  "hzkingfisher": {
    "title": "Martin pescatore e ortensia",
    "museum": "Art Institute of Chicago"
  },
  "hzpine": {
    "title": "Uccello su un ramo di pino",
    "museum": "Art Institute of Chicago"
  },
  "hztsuten": {
    "title": "Il ponte Tsūten al tempio Tōfuku, Kyoto",
    "museum": "Art Institute of Chicago"
  },
  "hzhase": {
    "title": "Il tempio Hase, provincia di Yamato",
    "museum": "Art Institute of Chicago"
  },
  "hzyoshino": {
    "title": "Il monte Yoshino, provincia di Yamato",
    "museum": "Art Institute of Chicago"
  },
  "hzamano": {
    "title": "Amanohashidate, provincia di Tango",
    "museum": "Art Institute of Chicago"
  },
  "hztaka": {
    "title": "La spiaggia di Taka, provincia di Tajima",
    "museum": "Art Institute of Chicago"
  },
  "hzhara": {
    "title": "Hara, provincia di Suruga",
    "museum": "Art Institute of Chicago"
  },
  "hzkikyo": {
    "title": "La piana di Kikyō, provincia di Shinshū",
    "museum": "Art Institute of Chicago"
  },
  "hzmikuni": {
    "title": "Il grande porto di Mikuni, provincia di Echizen",
    "museum": "Art Institute of Chicago"
  },
  "hzchuzenji": {
    "title": "Il lago Chūzenji, provincia di Shimotsuke",
    "museum": "Art Institute of Chicago"
  },
  "hziris": {
    "title": "Giardini di iris a Horikiri",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hzryogoku": {
    "title": "Fuochi d’artificio su Ryōgoku",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hzmimeguri": {
    "title": "L’argine di Mimeguri sul fiume Sumida",
    "museum": "Art Institute of Chicago"
  },
  "hzimado": {
    "title": "Il ponte Imado e la collina Matsuchi",
    "museum": "Art Institute of Chicago"
  },
  "hztakino": {
    "title": "Takino, provincia di Harima",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.hiroshigeii = {
  "title": "Il percorso di vita di Utagawa Hiroshige II",
  "part": "Uccelli, montagne e coste",
  "subtitle": "Attraverso le province fino a Edo",
  "intro": "Viaggia con l’incisore giapponese Utagawa Hiroshige II: tra piccole stampe di uccelli e fiori, templi, montagne e coste di molte province e fiumi e ponti di Edo. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Utagawa Hiroshige II muore nel 1869.",
    "Le sue stampe sono oggi conservate in musei di tutto il mondo."
  ],
  "epilogue": "Utagawa Hiroshige II muore nel 1869. Il percorso conduce da piccole stampe di uccelli e fiori, passando per templi, montagne e coste delle province, fino ai fiumi di Edo.",
  "life": "1826–1869"
};
  P.stations = Object.assign(P.stations || {}, {
  "hzs1": {
    "place": "Uccelli e fiori",
    "when": "1843–1857",
    "mapLabel": "Edo",
    "intro": [
      "Utagawa Hiroshige II nasce nel 1826; è allievo del maestro incisore Utagawa Hiroshige e lavora dapprima con il nome di Shigenobu.",
      "Firma «Shigenobu» le sue piccole stampe di uccelli su rami fioriti."
    ]
  },
  "hzs2": {
    "place": "Cento vedute celebri delle province",
    "when": "1859",
    "mapLabel": "Kyoto e dintorni",
    "intro": [
      "Nel 1859, l’anno dopo la morte del maestro, ne sposa la figlia e assume il nome di Hiroshige.",
      "Nello stesso anno escono stampe della sua serie «Cento vedute celebri delle varie province», con templi, montagne e coste."
    ]
  },
  "hzs3": {
    "place": "Di provincia in provincia",
    "when": "1860–1861",
    "mapLabel": "Giappone",
    "intro": [
      "Nel 1860 seguono altre stampe della serie, dal monte Fuji a un verde altopiano fino a un porto e a un lago di montagna.",
      "Nel 1861 raffigura giardini di iris vicino a Edo in una stampa realizzata quasi solo in toni di blu."
    ]
  },
  "hzs4": {
    "place": "Edo e le province",
    "when": "1862",
    "mapLabel": "Edo",
    "intro": [
      "Nel 1862 progetta nuove serie, come le «Trentasei vedute della capitale dell’Est», con vedute di Edo, e le «Sessantotto vedute delle varie province».",
      "Intorno al 1865 il suo matrimonio viene sciolto e si ritira a Yokohama."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hzivy": {
    "text": [
      "Un uccellino verde si aggrappa a un tralcio dalle foglie rosse, accanto a righe di scrittura.",
      "La piccola stampa è firmata «Shigenobu fude», dipinto da Shigenobu."
    ],
    "fact": "circa 1843–1847. Art Institute of Chicago."
  },
  "hzwhiteeye": {
    "text": [
      "Un occhialino verde è posato su un ramo con cachi tondi e arancioni.",
      "La stampa ha il piccolo formato koban."
    ],
    "fact": "circa 1847–1852. Art Institute of Chicago."
  },
  "hzsparrow": {
    "text": [
      "Un passero è posato su un ramo di camelia con fiori rossi e rosa.",
      "In alto a sinistra ci sono righe di scrittura, in basso a destra la firma «Shigenobu fude»."
    ],
    "fact": "circa 1847–1852. Art Institute of Chicago."
  },
  "hzparrot": {
    "text": [
      "Un pappagallo rosso dalle ali verdi è posato su un ramo di susino fiorito.",
      "L’Art Institute of Chicago data la piccola stampa intorno al 1848–1852."
    ],
    "fact": "circa 1848–1852. Art Institute of Chicago."
  },
  "hzkingfisher": {
    "text": [
      "Un martin pescatore blu dal becco rosso vola sotto un grappolo di ortensie blu.",
      "Lo stretto formato verticale si chiama chūtanzaku."
    ],
    "fact": "1857. Art Institute of Chicago."
  },
  "hzpine": {
    "text": [
      "Un uccello rosso è posato su un ramo di pino con ciuffi di aghi blu scuro.",
      "La stampa è firmata «Shigenobu hitsu» e reca il sigillo dell’editore Jakurindō."
    ],
    "fact": "1857. Art Institute of Chicago."
  },
  "hztsuten": {
    "text": [
      "Aceri rossi risplendono nella gola sotto un ponte coperto.",
      "La stampa fa parte della serie «Cento vedute celebri delle varie province»."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzhase": {
    "text": [
      "Fiori bianchi di ciliegio circondano gli edifici del tempio sul pendio.",
      "Una scalinata coperta sale lungo il pendio, e in basso risplende un campo giallo."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzyoshino": {
    "text": [
      "Innumerevoli ciliegi fioriscono sui pendii verdi, e una cascata precipita nella valle.",
      "In lontananza si alza una vetta azzurra."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzamano": {
    "text": [
      "Una lunga lingua di terra coperta di pini attraversa la baia azzurra.",
      "In cielo la luna piena splende sopra colline lontane."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hztaka": {
    "text": [
      "Un’alta parete rocciosa con ciliegi in fiore sovrasta una baia tranquilla.",
      "All’orizzonte il cielo si tinge di rosso sopra il mare."
    ],
    "fact": "1859. Art Institute of Chicago."
  },
  "hzhara": {
    "text": [
      "Il Fuji innevato si innalza alto sopra campi verdi e pini.",
      "In primo piano passa un lungo corteo di viaggiatori con stendardi."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hzkikyo": {
    "text": [
      "Un ruscello si snoda in una piana verde e fiorita, orlata di grandi pini.",
      "Piccole figure camminano lungo la riva."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hzmikuni": {
    "text": [
      "Un grande veliero è nel porto, e una barca affollata approda alla riva.",
      "Più al largo, sull’acqua chiara, naviga una seconda nave."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hzchuzenji": {
    "text": [
      "Due alti cedri sorgono sulla riva, e nel lago azzurro si erge un portale rosso.",
      "Dietro il lago si innalzano montagne boscose."
    ],
    "fact": "1860. Art Institute of Chicago."
  },
  "hziris": {
    "text": [
      "Alcuni passanti camminano sotto un pino accanto ad ampie aiuole di iris.",
      "La stampa a forma di ventaglio è un aizuri-e, stampato quasi interamente in toni di blu."
    ],
    "fact": "1861. Metropolitan Museum of Art, New York."
  },
  "hzryogoku": {
    "text": [
      "Un lungo ponte di legno attraversa il fiume, affollato di barche.",
      "Nel cielo un fuoco d’artificio esplode in piccole scintille."
    ],
    "fact": "1862. Metropolitan Museum of Art, New York."
  },
  "hzmimeguri": {
    "text": [
      "Ciliegi in fiore costeggiano l’argine, e un portale conduce a un santuario.",
      "La stampa fa parte della serie «Luoghi celebri della capitale dell’Est»."
    ],
    "fact": "1862. Art Institute of Chicago."
  },
  "hzimado": {
    "text": [
      "La neve copre i tetti del tempio sulla collina e gli alberi vicino all’acqua.",
      "La stampa fa parte della serie «Trentasei vedute della capitale dell’Est»."
    ],
    "fact": "1862. Art Institute of Chicago."
  },
  "hztakino": {
    "text": [
      "Un fiume spumeggia tra le rocce, e dietro si alza una verde collina.",
      "La stampa è il numero 44 della serie «Sessantotto vedute delle varie province»."
    ],
    "fact": "1862. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
