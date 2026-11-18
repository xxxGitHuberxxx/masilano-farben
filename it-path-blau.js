// v10.23 IT content for Tina Blau’s life journey, Part 1 (1845–1916). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collezione privata",
  "Standort ohne Angabe": "Collocazione non indicata",
  "Belvedere, Wien": "Belvedere, Vienna"
});
  P.works = Object.assign(P.works || {}, {
  "tbbauernhaus": {
    "title": "Casa contadina",
    "museum": "Collezione privata"
  },
  "tbhaslau": {
    "title": "Veduta di Haslau",
    "museum": "Collocazione non indicata"
  },
  "tbamsterdam": {
    "title": "Canale ad Amsterdam",
    "museum": "Collocazione non indicata"
  },
  "tbheustadl": {
    "title": "Lo Heustadlwasser al Prater",
    "museum": "Collocazione non indicata"
  },
  "tbtitus": {
    "title": "Capriccio romano con l’arco di Tito",
    "museum": "Collezione privata"
  },
  "tbfruehling": {
    "title": "Primavera al Prater",
    "museum": "Belvedere, Vienna"
  },
  "tbtuileries": {
    "title": "Alle Tuileries – Giornata di sole",
    "museum": "Belvedere, Vienna"
  },
  "tbpalatin": {
    "title": "Tardo pomeriggio al Palatino",
    "museum": "Belvedere, Vienna"
  },
  "tbrotunde": {
    "title": "Al Prater presso la Rotonda",
    "museum": "Belvedere, Vienna"
  },
  "tbmalcesine": {
    "title": "Malcesine",
    "museum": "Collezione privata"
  },
  "tbschladming": {
    "title": "Veduta di Schladming",
    "museum": "Collezione privata"
  },
  "tbkrieau": {
    "title": "La Krieau al Prater",
    "museum": "Belvedere, Vienna"
  },
  "tbatelier": {
    "title": "L’atelier al Prater",
    "museum": "Collocazione non indicata"
  },
  "tbfraneker": {
    "title": "Canale a Franeker",
    "museum": "Collezione privata"
  },
  "tbbirken": {
    "title": "Betulle presso la Rotonda",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.blau = {
  "title": "Il percorso di vita di Tina Blau",
  "life": "1845–1916",
  "part": "Parte 1 · Primavera al Prater",
  "subtitle": "Vienna, Olanda, Italia e la luce all’aperto",
  "intro": "Viaggia con Tina Blau, la paesaggista viennese che dipingeva all’aperto quando per una donna era appena possibile: dalle prime case contadine, attraverso l’Olanda e Roma, fino alla primavera al Prater e al suo atelier nella Rotonda. Brevi tappe e quadri da colorare. Questa prima parte la segue attraverso la luce.",
  "ending": [
    "Tina Blau muore a Vienna il 31 ottobre 1916. Ha portato la luce chiara dell’aperto nella pittura di paesaggio viennese.",
    "Il percorso può ancora crescere. Altri viaggi, giardini e vedute di città potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 31 ottobre 1916 Tina Blau muore a Vienna. Una parte successiva potrà aggiungere altri viaggi e giardini."
};
  P.stations = Object.assign(P.stations || {}, {
  "tbwien": {
    "place": "Vienna · Apprendistato",
    "when": "1845–1873",
    "mapLabel": "Vienna",
    "intro": [
      "Tina Blau nasce a Vienna il 15 novembre 1845. Il padre sostiene il suo desiderio di diventare pittrice.",
      "Studia con August Schaeffer e a Monaco con Wilhelm Lindenschmit."
    ]
  },
  "tbreisen": {
    "place": "Olanda e Roma",
    "when": "1875–1879",
    "mapLabel": "Viaggi",
    "intro": [
      "Negli anni 1870 Tina Blau viaggia in Olanda e in Italia. Dipinge canali, rovine e giardini.",
      "In viaggio il suo sguardo per la luce e l’aria si affina."
    ]
  },
  "tbprater": {
    "place": "Il Prater",
    "when": "1877–1885",
    "mapLabel": "Prater",
    "intro": [
      "Il Prater di Vienna diventa il suo grande tema. Nel 1882 dipinge «Primavera al Prater».",
      "Nel 1883 sposa il pittore Heinrich Lang e vive per un periodo a Monaco."
    ]
  },
  "tbsueden": {
    "place": "Parigi, Roma e il Sud",
    "when": "1883–1894",
    "mapLabel": "Sud",
    "intro": [
      "A Parigi e a Roma dipinge giardini e luoghi antichi, poi il lago di Garda.",
      "I suoi colori diventano più caldi e chiari."
    ]
  },
  "tbspaet": {
    "place": "Atelier e ultimi anni",
    "when": "1897–1916",
    "mapLabel": "Rotonda",
    "intro": [
      "Nel 1897 cofonda a Vienna una scuola d’arte per donne e ragazze e vi insegna.",
      "Continua a dipingere al Prater, nelle Alpi e in Olanda fino alla morte nel 1916."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tbbauernhaus": {
    "text": [
      "Una semplice casa contadina sotto gli alberi, dipinta con colori caldi e quieti. Tina Blau ha ventitré anni.",
      "Studia con August Schaeffer e dipinge presto dal vero."
    ],
    "fact": "1868. Collezione privata."
  },
  "tbhaslau": {
    "text": [
      "Ampi campi e un grande cielo sopra Haslau, sul Danubio. La terra è piatta, la luce cambia.",
      "In questi anni dipinge spesso insieme a Emil Jakob Schindler."
    ],
    "fact": "1872. Collocazione non indicata."
  },
  "tbamsterdam": {
    "text": [
      "Le case si specchiano in un canale di Amsterdam, barche sono ormeggiate alla riva. L’Olanda diventa una delle sue mete preferite.",
      "La luce umida e argentea dei Paesi Bassi la richiama sempre."
    ],
    "fact": "1875. Collocazione non indicata."
  },
  "tbheustadl": {
    "text": [
      "Uno specchio d’acqua quieto al Prater, circondato da alberi e prati. Il parco viennese diventa il suo soggetto più importante.",
      "Lo dipinge in ogni stagione e a ogni ora."
    ],
    "fact": "1877. Collocazione non indicata."
  },
  "tbtitus": {
    "text": [
      "L’arco di Tito a Roma sta nella calda luce del Sud. Tina Blau viaggia più volte in Italia.",
      "Edifici antichi e giardini diventano soggetti dei suoi viaggi."
    ],
    "fact": "1879. Collezione privata."
  },
  "tbfruehling": {
    "text": [
      "Verde nuovo, luce chiara e passanti al Prater: il grande quadro del 1882 è la sua opera più nota.",
      "A Vienna è dapprima criticato; al Salon di Parigi del 1883 riceve una menzione d’onore."
    ],
    "fact": "1882. Belvedere, Vienna."
  },
  "tbtuileries": {
    "text": [
      "Nel giardino delle Tuileries a Parigi il sole cade su viali e alberi. Nel 1883 Tina Blau è a Parigi.",
      "Dipinge il giardino in un giorno grigio e in un giorno di sole."
    ],
    "fact": "1883. Belvedere, Vienna."
  },
  "tbpalatin": {
    "text": [
      "Sul Palatino a Roma si posa la calda luce del tardo pomeriggio. Rovine e alberi stanno quieti.",
      "Il viaggio a Roma porta nuovi colori nella sua pittura."
    ],
    "fact": "1885. Belvedere, Vienna."
  },
  "tbrotunde": {
    "text": [
      "Dietro gli alberi del Prater si alza la Rotonda, l’edificio dell’Esposizione universale del 1873.",
      "Pochi anni dopo Tina Blau vi stabilisce il suo atelier."
    ],
    "fact": "1885. Belvedere, Vienna."
  },
  "tbmalcesine": {
    "text": [
      "Il paesino di Malcesine sta sul lago di Garda, con castello e case chiare. L’acqua brilla nella luce.",
      "Il Sud resta per lei un luogo di luce."
    ],
    "fact": "1894. Collezione privata."
  },
  "tbschladming": {
    "text": [
      "Case e montagne a Schladming, in Stiria. Tina Blau dipinge anche il paesaggio alpino dell’Austria.",
      "La sua pennellata è ora libera e sicura."
    ],
    "fact": "1902. Collezione privata."
  },
  "tbkrieau": {
    "text": [
      "La Krieau è una parte del Prater con alberi vecchi e prati aperti. Tina Blau ne conosce ogni angolo.",
      "Anche dopo vent’anni il Prater resta il suo tema."
    ],
    "fact": "1902. Belvedere, Vienna."
  },
  "tbatelier": {
    "text": [
      "Uno sguardo nell’atelier di Tina Blau al Prater, con quadri, mobili e luce chiara.",
      "Qui lavora per molti anni, nel mezzo del suo soggetto preferito."
    ],
    "fact": "1907. Collocazione non indicata."
  },
  "tbfraneker": {
    "text": [
      "Un canale nella città frisone di Franeker, case e alberi si specchiano nell’acqua.",
      "A oltre sessant’anni Tina Blau viaggia ancora una volta in Olanda."
    ],
    "fact": "1908. Collezione privata."
  },
  "tbbirken": {
    "text": [
      "Betulle chiare stanno al Prater vicino alla Rotonda. Il quadro è tra le sue opere tarde.",
      "Due anni dopo Tina Blau muore a Vienna."
    ],
    "fact": "1914. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
