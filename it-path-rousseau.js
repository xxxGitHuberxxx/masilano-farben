// v10.43 IT content for Henri Rousseau’s life journey (1844–1910). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "hrrendezvous": {
    "title": "Incontro nel bosco",
    "museum": "National Gallery of Art, Washington"
  },
  "hrsawmill": {
    "title": "Segheria alla periferia di Parigi",
    "museum": "Art Institute of Chicago"
  },
  "hrboy": {
    "title": "Ragazzo sulle rocce",
    "museum": "National Gallery of Art, Washington"
  },
  "hroutskirts": {
    "title": "Dintorni di Parigi",
    "museum": "Cleveland Museum of Art"
  },
  "hrbievre": {
    "title": "Le rive della Bièvre presso Bicêtre",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hrequatorial": {
    "title": "La giungla equatoriale",
    "museum": "National Gallery of Art, Washington"
  },
  "hrmonkeys": {
    "title": "Foresta tropicale con scimmie",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.rousseau = {
  "title": "Il percorso di vita di Henri Rousseau",
  "part": "Parigi e i suoi dintorni",
  "subtitle": "Periferie, boschi e giungle immaginate",
  "intro": "Viaggia nella vita di Henri Rousseau: dalla periferia di Parigi, dove lavora come doganiere, fino alle giungle che immagina negli ultimi anni. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Henri Rousseau muore a Parigi il 2 settembre 1910.",
    "Giovani pittori come Pablo Picasso lo ammirano già in vita, e oggi i suoi quadri sono in musei di tutto il mondo."
  ],
  "epilogue": "Henri Rousseau muore a Parigi il 2 settembre 1910. Il percorso porta dalla periferia della città alle giungle immaginate degli ultimi anni.",
  "life": "1844–1910"
};
  P.stations = Object.assign(P.stations || {}, {
  "rousseau1": {
    "place": "Doganiere e pittore a Parigi",
    "when": "1844–1905",
    "mapLabel": "Parigi",
    "intro": [
      "Henri Rousseau nasce il 21 maggio 1844 a Laval, nella Francia occidentale, e dal 1871 lavora in un posto di dazio ai margini di Parigi.",
      "Impara a dipingere da solo, dal 1886 espone al Salon des Indépendants e dal 1893 si dedica solo alla pittura."
    ]
  },
  "rss2": {
    "place": "Ultimi anni: rive e giungle",
    "when": "1906–1910",
    "mapLabel": "Parigi",
    "intro": [
      "Negli ultimi anni Rousseau dipinge grandi quadri di giungla, pur non avendo mai lasciato la Francia.",
      "Studia le piante nelle serre del Jardin des Plantes di Parigi e in libri illustrati."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hrrendezvous": {
    "text": [
      "Nel profondo di un bosco autunnale si incontrano due cavalieri in abiti d’altri tempi.",
      "Sopra di loro i rami spogli degli alberi formano una rete sottile contro il cielo chiaro."
    ],
    "fact": "1889. National Gallery of Art, Washington."
  },
  "hrsawmill": {
    "text": [
      "Dietro una siepe si alzano gli edifici chiari di una segheria con un camino fumante.",
      "Una strada esce dalla città passando tra alberi e prati."
    ],
    "fact": "circa 1893–1895. Art Institute of Chicago."
  },
  "hrboy": {
    "text": [
      "Un bambino con un grembiule scuro e calze a righe siede su rocce appuntite.",
      "Sembra grande come un gigante, perché le rocce sembrano un’intera catena di montagne."
    ],
    "fact": "1895–1897. National Gallery of Art, Washington."
  },
  "hroutskirts": {
    "text": [
      "Un canale con un piccolo ponte passa accanto a una casa dal tetto rosso, e sulla riva la gente passeggia.",
      "Sopra tutto grandi nuvole bianche attraversano il cielo azzurro."
    ],
    "fact": "circa 1897–1905. Cleveland Museum of Art."
  },
  "hrbievre": {
    "text": [
      "Alberi alti e sottili fiancheggiano un sentiero lungo la Bièvre, un piccolo fiume a sud di Parigi.",
      "Rousseau dipinge ogni foglia e ogni ramo con grande cura."
    ],
    "fact": "circa 1908–1909. Metropolitan Museum of Art, New York."
  },
  "hrequatorial": {
    "text": [
      "Foglie enormi in molte sfumature di verde riempiono tutto il quadro, e tra loro brillano fiori rosa e bianchi.",
      "In basso, nel folto, un animale sbircia tra le piante."
    ],
    "fact": "1909. National Gallery of Art, Washington."
  },
  "hrmonkeys": {
    "text": [
      "Alcune scimmie si arrampicano e siedono in una fitta foresta di palme, erbe e piante rosse.",
      "Rousseau dipinge il quadro nell’ultimo anno della sua vita."
    ],
    "fact": "1910. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
