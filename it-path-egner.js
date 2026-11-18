// v10.24 IT content for Marie Egner’s life journey, Part 1 (1850–1940). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collezione privata",
  "Belvedere, Wien": "Belvedere, Vienna"
});
  P.works = Object.assign(P.works || {}, {
  "mgnauders": {
    "title": "Motivo di Nauders",
    "museum": "Collezione privata"
  },
  "mgwindbruch": {
    "title": "Schianto da vento",
    "museum": "Collezione privata"
  },
  "mgdonau": {
    "title": "Nelle golene del Danubio",
    "museum": "Collezione privata"
  },
  "mgheu": {
    "title": "Covoni di fieno",
    "museum": "Collezione privata"
  },
  "mgatelier": {
    "title": "Veduta dallo studio della Klagbaumgasse",
    "museum": "Collezione privata"
  },
  "mgcapri": {
    "title": "Chiostro a Capri",
    "museum": "Collezione privata"
  },
  "mgarbe": {
    "title": "Arbe (Rab)",
    "museum": "Collezione privata"
  },
  "mgazaleen": {
    "title": "Azalee alla finestra",
    "museum": "Collezione privata"
  },
  "mgtorre": {
    "title": "Torre del Greco",
    "museum": "Collezione privata"
  },
  "mgmoedling": {
    "title": "Ponte di mattoni con una statua a Mödling",
    "museum": "Collezione privata"
  },
  "mgbretagne": {
    "title": "Sera in Bretagna",
    "museum": "Collezione privata"
  },
  "mgpergola": {
    "title": "Sotto il pergolato",
    "museum": "Belvedere, Vienna"
  },
  "mgrosen": {
    "title": "Rose in fiore",
    "museum": "Collezione privata"
  },
  "mgsonnen": {
    "title": "Girasoli e capanna al Treffenboden",
    "museum": "Collezione privata"
  },
  "mggastein": {
    "title": "Vecchio mulino a Gastein",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.egner = {
  "title": "Il percorso di vita di Marie Egner",
  "life": "1850–1940",
  "part": "Parte 1 · Giardini, coste e luce",
  "subtitle": "Da Nauders a Gastein",
  "intro": "Viaggia con Marie Egner, la pittrice austriaca di paesaggi e fiori: dai primi studi in Tirolo, attraverso le golene del Danubio e il suo studio a Vienna, fino alle coste d’Italia e di Dalmazia e ai giardini della sua lunga vita. Brevi tappe e quadri da colorare. Questa prima parte segue la sua luce.",
  "ending": [
    "Marie Egner muore a Vienna il 31 marzo 1940, poco dopo il suo novantesimo compleanno. Per quasi sessant’anni ha dipinto all’aperto davanti alla natura.",
    "Il percorso può ancora crescere. Altri giardini e quadri di viaggio potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 31 marzo 1940 Egner muore a Vienna. Una parte successiva potrà aggiungere altri giardini."
};
  P.stations = Object.assign(P.stations || {}, {
  "mgjung": {
    "place": "Radkersburg, Graz e il Tirolo · Apprendistato",
    "when": "1850–1881",
    "mapLabel": "Nauders",
    "intro": [
      "Marie Egner nasce a Radkersburg, in Stiria, il 25 marzo 1850. Si forma a Graz e a Düsseldorf.",
      "In Tirolo dipinge i suoi primi villaggi di montagna."
    ]
  },
  "mgschindler": {
    "place": "Da Schindler a Vienna",
    "when": "1882–1890",
    "mapLabel": "Vienna",
    "intro": [
      "Dal 1882 Egner studia con Emil Jakob Schindler. Dipinge all’aperto con lui, in boschi, golene e prati.",
      "Più tardi ha un proprio studio a Vienna."
    ]
  },
  "mgsueden": {
    "place": "Viaggi al sud",
    "when": "1890–1898",
    "mapLabel": "Sud",
    "intro": [
      "Egner viaggia a Capri, sul golfo di Napoli e sull’Adriatico. La luce del sud schiarisce i suoi colori.",
      "A casa, a Vienna, dipinge fiori alla finestra."
    ]
  },
  "mggarten": {
    "place": "Giardini e sentieri",
    "when": "1899–1912",
    "mapLabel": "Giardini",
    "intro": [
      "Intorno al 1900 Egner è una pittrice nota ed espone a Vienna. Dipinge ponti, pergolati e rose.",
      "Anche un viaggio in Bretagna le porta nuovi soggetti."
    ]
  },
  "mgspaet": {
    "place": "Ultimi anni in montagna",
    "when": "1914–1940",
    "mapLabel": "Gastein",
    "intro": [
      "Anche da anziana Egner dipinge all’aperto, in montagna e nella valle di Gastein.",
      "Muore a Vienna il 31 marzo 1940."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mgnauders": {
    "text": [
      "Nel villaggio tirolese di Nauders Egner dipinge case, prati e pendii nella luce estiva. Ha trent’anni e si è formata a Graz e a Düsseldorf.",
      "Cerca ancora la sua strada."
    ],
    "fact": "1881. Collezione privata."
  },
  "mgwindbruch": {
    "text": [
      "Tronchi abbattuti giacciono nel bosco e tra loro cresce già verde nuovo. Egner dipinge la natura così com’è.",
      "Dal 1882 studia con Emil Jakob Schindler."
    ],
    "fact": "circa 1884. Collezione privata."
  },
  "mgdonau": {
    "text": [
      "Acqua, salici e canne formano il mondo quieto delle golene del Danubio. La luce è argentea e morbida.",
      "Come il suo maestro Schindler, Egner cerca l’atmosfera quieta."
    ],
    "fact": "circa 1885. Collezione privata."
  },
  "mgheu": {
    "text": [
      "I covoni stanno nel prato falciato, il cielo è alto e chiaro. Forme semplici, molta aria.",
      "Egner dipinge all’aperto, direttamente davanti al soggetto."
    ],
    "fact": "circa 1885. Collezione privata."
  },
  "mgatelier": {
    "text": [
      "Dalla finestra del suo studio viennese Egner vede tetti, cortili e alberi. Il quadro è uno sguardo intimo sulla sua città.",
      "Più tardi vi insegna lei stessa ad altre pittrici."
    ],
    "fact": "circa 1890. Collezione privata."
  },
  "mgcapri": {
    "text": [
      "In un chiostro a Capri la luce chiara cade su muri bianchi e piante. Egner viaggia verso il sud.",
      "I suoi colori diventano più caldi e chiari."
    ],
    "fact": "1890. Collezione privata."
  },
  "mgarbe": {
    "text": [
      "L’isola di Arbe, oggi Rab, si trova nell’Adriatico davanti alla costa dalmata. Egner dipinge città, mare e cielo.",
      "Il Mediterraneo resta la meta di molti viaggi."
    ],
    "fact": "1890. Collezione privata."
  },
  "mgazaleen": {
    "text": [
      "Azalee fiorite stanno alla finestra, la luce del giorno brilla attraverso i fiori. I fiori diventano un grande tema.",
      "Egner li dipinge con la stessa cura dei paesaggi."
    ],
    "fact": "circa 1895. Collezione privata."
  },
  "mgtorre": {
    "text": [
      "Torre del Greco si trova sul golfo di Napoli, sotto il Vesuvio. Case e barche stanno nella luce chiara di mezzogiorno.",
      "Egner viaggia più volte in Italia."
    ],
    "fact": "circa 1898. Collezione privata."
  },
  "mgmoedling": {
    "text": [
      "Un piccolo ponte di mattoni attraversa un ruscello a Mödling, una statua di pietra sta sul bordo. Gli alberi fanno ombra.",
      "Egner trova spesso i suoi soggetti vicino a Vienna."
    ],
    "fact": "1899. Collezione privata."
  },
  "mgbretagne": {
    "text": [
      "In Bretagna la sera scende sulla terra e sull’acqua. I colori diventano profondi e quieti.",
      "A quasi sessant’anni Egner viaggia ancora lontano."
    ],
    "fact": "1907. Collezione privata."
  },
  "mgpergola": {
    "text": [
      "Sotto un pergolato la luce del sole cade tra foglie e fiori sul sentiero. Lo spazio è pieno di macchie verdi e dorate.",
      "Il quadro appartiene al Belvedere di Vienna."
    ],
    "fact": "1910. Belvedere, Vienna."
  },
  "mgrosen": {
    "text": [
      "Le rose fioriscono in tutte le tonalità dal bianco al rosso. Egner le dipinge fresche e libere.",
      "Con l’età i giardini diventano il suo soggetto preferito."
    ],
    "fact": "1912. Collezione privata."
  },
  "mgsonnen": {
    "text": [
      "Alti girasoli stanno davanti a una capanna di legno, dietro ci sono pendii verdi. Giallo e marrone brillano nella luce estiva.",
      "Egner ha ormai più di sessant’anni e dipinge con colori forti."
    ],
    "fact": "1914. Collezione privata."
  },
  "mggastein": {
    "text": [
      "Un vecchio mulino sta nella valle di Gastein tra alberi e montagne. Egner dipinge il quadro a ottantatré anni.",
      "Fino a tarda età resta fedele al paesaggio."
    ],
    "fact": "1933. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
