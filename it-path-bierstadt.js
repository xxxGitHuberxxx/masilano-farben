// v10.43 IT content for Albert Bierstadt’s life journey (1830–1902). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Smithsonian American Art Museum, Washington": "Smithsonian American Art Museum, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "ablucerne": {
    "title": "Il lago di Lucerna",
    "museum": "National Gallery of Art, Washington"
  },
  "abbrook": {
    "title": "Ruscello di montagna",
    "museum": "Art Institute of Chicago"
  },
  "abmerced": {
    "title": "Il fiume Merced, valle di Yosemite",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "abstarrking": {
    "title": "Monte Starr King, Yosemite",
    "museum": "Cleveland Museum of Art"
  },
  "abvesuvius": {
    "title": "Il Vesuvio a mezzanotte",
    "museum": "Cleveland Museum of Art"
  },
  "absierra": {
    "title": "Tra la Sierra Nevada, California",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abfirtrees": {
    "title": "Abeti e nubi temporalesche",
    "museum": "Cleveland Museum of Art"
  },
  "absfbay": {
    "title": "La baia di San Francisco",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abcathedral": {
    "title": "Cathedral Rocks, valle di Yosemite",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abnevada": {
    "title": "Cascata Nevada, Yosemite",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "abcorcoran": {
    "title": "Monte Corcoran",
    "museum": "National Gallery of Art, Washington"
  },
  "abgates": {
    "title": "Le porte di Yosemite",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abmountain": {
    "title": "Paesaggio di montagna",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "abseacove": {
    "title": "Insenatura",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ablouise": {
    "title": "Montagne Rocciose canadesi (lago Louise)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "abalaska": {
    "title": "Catena costiera dell’Alaska",
    "museum": "Smithsonian American Art Museum, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.bierstadt = {
  "title": "Il percorso di vita di Albert Bierstadt",
  "part": "Montagne, laghi e cascate",
  "subtitle": "Dal New England a Yosemite, all’Europa e al Canada",
  "intro": "Viaggia nella vita di Albert Bierstadt: dai boschi del New England alla valle di Yosemite, in Europa e fino alle montagne del Canada. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Albert Bierstadt muore a New York il 18 febbraio 1902.",
    "I suoi grandi quadri delle montagne del West fanno conoscere questi paesaggi a molte persone che non li hanno mai visti."
  ],
  "epilogue": "Albert Bierstadt muore a New York il 18 febbraio 1902. Il percorso porta dal New England, passando per Yosemite e l’Europa, fino al Canada e all’Alaska.",
  "life": "1830–1902"
};
  P.stations = Object.assign(P.stations || {}, {
  "abs1": {
    "place": "Da Solingen al New England",
    "when": "1830–1863",
    "mapLabel": "New Bedford",
    "intro": [
      "Albert Bierstadt nasce a Solingen, in Germania, il 7 gennaio 1830; nel 1831 la famiglia emigra a New Bedford, nel Massachusetts.",
      "Dal 1853 al 1857 studia pittura a Düsseldorf e nel 1858 espone a New York un grande paesaggio svizzero."
    ]
  },
  "abs2": {
    "place": "Viaggi verso il West",
    "when": "1859–1866",
    "mapLabel": "Yosemite",
    "intro": [
      "Nel 1859 Bierstadt va nelle Montagne Rocciose con l’agrimensore Frederick W. Lander.",
      "Nel 1863 trascorre sette settimane nella valle di Yosemite con lo scrittore Fitz Hugh Ludlow e poi dipinge a New York grandi quadri dai suoi schizzi."
    ]
  },
  "abs3": {
    "place": "Due anni in Europa",
    "when": "1867–1869",
    "mapLabel": "Roma",
    "intro": [
      "Nel 1867 Bierstadt va a Londra e poi viaggia per due anni attraverso l’Europa.",
      "Nel suo studio di Roma dipinge un grande quadro della Sierra Nevada e lo espone a Berlino e a Londra."
    ]
  },
  "abs4": {
    "place": "Di nuovo in California",
    "when": "1870–1873",
    "mapLabel": "San Francisco",
    "intro": [
      "All’inizio degli anni Settanta dell’Ottocento Bierstadt è di nuovo in California.",
      "Dipinge la baia di San Francisco, le cascate e le rocce della valle di Yosemite e studi di nuvole e alberi."
    ]
  },
  "abs5": {
    "place": "Ultimi viaggi: Canada e Alaska",
    "when": "1876–1902",
    "mapLabel": "Canada",
    "intro": [
      "Bierstadt continua a dipingere montagne, laghi e coste, spesso in piccoli bozzetti a olio.",
      "Nel 1889 attraversa il Canada occidentale con la Canadian Pacific Railway e prosegue in piroscafo fino all’Alaska."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ablucerne": {
    "text": [
      "Dietro alberi e prati si stende il lago azzurro, sovrastato da montagne innevate.",
      "Bierstadt dipinge il quadro dopo gli anni di studio a Düsseldorf."
    ],
    "fact": "1858. National Gallery of Art, Washington."
  },
  "abbrook": {
    "text": [
      "Un piccolo ruscello scende tra rocce coperte di muschio attraverso un bosco fitto.",
      "Il quadro mostra le White Mountains del New Hampshire, e nel 1863 i critici lo definiscono la sua opera migliore."
    ],
    "fact": "1863. Art Institute of Chicago."
  },
  "abmerced": {
    "text": [
      "Alte pareti di granito si alzano sopra il tranquillo fiume Merced, nella valle di Yosemite.",
      "In primo piano ci sono pini nella luce calda."
    ],
    "fact": "1866. Metropolitan Museum of Art, New York."
  },
  "abstarrking": {
    "text": [
      "In lontananza la cima di granito del monte Starr King si alza sopra la valle di Yosemite.",
      "Nel 1864 il presidente Lincoln firma una legge che protegge Yosemite."
    ],
    "fact": "1866. Cleveland Museum of Art."
  },
  "abvesuvius": {
    "text": [
      "Lava rossa e cenere escono di notte dal Vesuvio, vicino a Napoli.",
      "Non è certo che Bierstadt abbia visto l’eruzione con i propri occhi."
    ],
    "fact": "1868. Cleveland Museum of Art."
  },
  "absierra": {
    "text": [
      "Pareti di roccia ripide e una cascata circondano un tranquillo lago di montagna nella Sierra Nevada.",
      "Il quadro è largo circa tre metri."
    ],
    "fact": "1868. Smithsonian American Art Museum, Washington."
  },
  "abfirtrees": {
    "text": [
      "Abeti scuri stanno sotto alte nubi temporalesche.",
      "Bierstadt dipinge lo studio a olio su carta."
    ],
    "fact": "circa 1870. Cleveland Museum of Art."
  },
  "absfbay": {
    "text": [
      "Acqua grigia e calma si stende davanti a una riva piatta della baia di San Francisco.",
      "Bierstadt dipinge il piccolo bozzetto a olio su cartone."
    ],
    "fact": "1871–1873. Smithsonian American Art Museum, Washington."
  },
  "abcathedral": {
    "text": [
      "Dietro alti abeti si alzano le rocce di Cathedral Rocks, nella valle di Yosemite.",
      "Davanti gli alberi si specchiano nel fiume."
    ],
    "fact": "circa 1872. Smithsonian American Art Museum, Washington."
  },
  "abnevada": {
    "text": [
      "La cascata Nevada precipita spumeggiando tra abeti scuri verso la valle.",
      "Giù sulla riva si vedono due piccole figure."
    ],
    "fact": "1872–1873. Metropolitan Museum of Art, New York."
  },
  "abcorcoran": {
    "text": [
      "Un lago di montagna verde si stende tra alti alberi sotto una cima innevata.",
      "Le nuvole passano sopra la vetta."
    ],
    "fact": "circa 1876–1877. National Gallery of Art, Washington."
  },
  "abgates": {
    "text": [
      "Possenti pareti di roccia formano una porta naturale all’ingresso della valle di Yosemite.",
      "In mezzo scorre tranquillo il fiume."
    ],
    "fact": "circa 1882. Smithsonian American Art Museum, Washington."
  },
  "abmountain": {
    "text": [
      "Un lago con piccole isole boscose si stende davanti a cime innevate.",
      "Bierstadt dipinge lo schizzo a olio su carta."
    ],
    "fact": "1880–1890. Metropolitan Museum of Art, New York."
  },
  "abseacove": {
    "text": [
      "Due alberi piegati dal vento stanno su una scogliera sopra una piccola insenatura di sabbia chiara.",
      "Bierstadt dipinge il piccolo quadro su legno."
    ],
    "fact": "circa 1880–1890. Metropolitan Museum of Art, New York."
  },
  "ablouise": {
    "text": [
      "Un lago di montagna si stende tra gli abeti ai piedi di una vetta coperta di ghiacciai.",
      "Il lago Louise si trova nelle Montagne Rocciose, nel Canada occidentale."
    ],
    "fact": "circa 1889. Metropolitan Museum of Art, New York."
  },
  "abalaska": {
    "text": [
      "Montagne grigie con la neve si alzano sopra un tranquillo braccio di mare.",
      "Il bozzetto a olio è stato fatto probabilmente sul posto, durante il viaggio in Alaska."
    ],
    "fact": "circa 1889. Smithsonian American Art Museum, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
