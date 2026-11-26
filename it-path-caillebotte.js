// v10.43 IT content for Gustave Caillebotte’s life journey (1848–1894). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "cbrainy": {
    "title": "Strada di Parigi, giornata di pioggia",
    "museum": "Art Institute of Chicago"
  },
  "cbskiffs": {
    "title": "Canoe",
    "museum": "National Gallery of Art, Washington"
  },
  "cbcourtier": {
    "title": "Ritratto di uomo",
    "museum": "Cleveland Museum of Art"
  },
  "cbtrouville": {
    "title": "Ville a Trouville",
    "museum": "Cleveland Museum of Art"
  },
  "cblamy": {
    "title": "Studio di uomo con le mani in tasca",
    "museum": "Cleveland Museum of Art"
  },
  "cbchrysanth": {
    "title": "Crisantemi nel giardino di Petit-Gennevilliers",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cbdahlias": {
    "title": "Dalie, giardino di Petit-Gennevilliers",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.caillebotte = {
  "title": "Il percorso di vita di Gustave Caillebotte",
  "part": "Parigi, Yerres, Trouville e Petit-Gennevilliers",
  "subtitle": "Città, acqua e giardino",
  "intro": "Viaggia nella vita di Gustave Caillebotte: dalle nuove strade di Parigi alle barche sull’Yerres, alla costa della Normandia e al suo giardino sulla Senna. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Gustave Caillebotte muore nel 1894, un anno dopo i suoi quadri del giardino di Petit-Gennevilliers.",
    "Fu pittore, organizzatore delle mostre impressioniste, velista e giardiniere."
  ],
  "epilogue": "Gustave Caillebotte muore nel 1894. Il percorso porta da Parigi, passando per Yerres e Trouville, al suo giardino di Petit-Gennevilliers.",
  "life": "1848–1894"
};
  P.stations = Object.assign(P.stations || {}, {
  "cbs1": {
    "place": "Parigi e Yerres: pioggia, barche e un amico",
    "when": "1876–1880",
    "mapLabel": "Parigi e Yerres",
    "intro": [
      "Gustave Caillebotte proviene da una famiglia agiata di Parigi; nel 1877 organizza la mostra impressionista e vi presenta il suo quadro più grande, una strada di Parigi sotto la pioggia.",
      "Nella tenuta di famiglia a Yerres dipinge pescatori e rematori nel 1877 e nel 1878; a Parigi divide con il fratello Martial un appartamento sul boulevard Haussmann."
    ]
  },
  "cbs3": {
    "place": "La vela: la Normandia e la Senna",
    "when": "1884–1893",
    "mapLabel": "Normandia e Senna",
    "intro": [
      "All’inizio degli anni Ottanta dell’Ottocento Caillebotte trascorre diverse estati sulla costa della Normandia, dove dipinge e partecipa a regate.",
      "È un velista premiato e progetta le proprie barche da regata; con l’amico Eugène Lamy condivide la passione per la vela."
    ]
  },
  "cbs4": {
    "place": "Il giardino di Petit-Gennevilliers",
    "when": "1893",
    "mapLabel": "Petit-Gennevilliers",
    "intro": [
      "Nel 1881 Gustave e Martial Caillebotte acquistano un terreno a Petit-Gennevilliers, di fronte ad Argenteuil, sulla Senna; più tardi Gustave rileva da solo la proprietà.",
      "Lì crea un giardino, dipinge, va in barca a vela e scambia consigli di giardinaggio con l’amico Claude Monet."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cbrainy": {
    "text": [
      "Una coppia sotto un ombrello cammina dritta verso di noi; dietro brilla il selciato bagnato di un incrocio animato.",
      "L’incrocio è a pochi passi dalla casa di Caillebotte; la pioggia non è resa con le gocce, ma con gli ombrelli e i riflessi sulle pietre."
    ],
    "fact": "1877. Art Institute of Chicago."
  },
  "cbskiffs": {
    "text": [
      "Tre canoe strette, guidate da rematori con camicia bianca e cappello di paglia, scivolano sul fiume verso di noi.",
      "Caillebotte espone il quadro nel 1879 alla quarta mostra impressionista con il titolo «Périssoires sur l’Yerres»."
    ],
    "fact": "1877. National Gallery of Art, Washington."
  },
  "cbcourtier": {
    "text": [
      "Albert Courtier, notaio di Caillebotte e amico di famiglia di lunga data, siede in una poltrona accanto alla finestra dell’appartamento sul boulevard Haussmann.",
      "Courtier posa più volte per Caillebotte, possiede quattro suoi quadri e lo sceglie come padrino della figlia maggiore."
    ],
    "fact": "1880. Cleveland Museum of Art."
  },
  "cbtrouville": {
    "text": [
      "Da una scogliera Caillebotte guarda oltre ville di mattoni rossi verso il mare verde azzurro, sotto un cielo con nuvole.",
      "Trouville è una località di villeggiatura molto amata sulla costa della Normandia; le ville ai margini del paese sorgono proprio sopra la riva."
    ],
    "fact": "1884. Cleveland Museum of Art."
  },
  "cblamy": {
    "text": [
      "Con la matita nera Caillebotte disegna un uomo con il cappello, visto di spalle, con le mani in tasca.",
      "È il suo amico Eugène Lamy, studiato per il dipinto «Riva della Senna a Petit-Gennevilliers, inverno» del 1893."
    ],
    "fact": "1893. Cleveland Museum of Art."
  },
  "cbchrysanth": {
    "text": [
      "Fitti fitti, crisantemi bianchi, gialli e rossi riempiono tutto il quadro, senza cielo e senza orizzonte.",
      "Caillebotte dipinge questi fiori nel 1893 nel suo giardino di Petit-Gennevilliers."
    ],
    "fact": "1893. Metropolitan Museum of Art, New York."
  },
  "cbdahlias": {
    "text": [
      "In primo piano brillano dalie rosse e gialle; dietro si vedono la serra e la casa di Caillebotte nella luce del pomeriggio.",
      "Sul vialetto una donna con il cappello da sole osserva qualcosa tra le mani, mentre il suo cagnolino guarda il pittore."
    ],
    "fact": "1893. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
