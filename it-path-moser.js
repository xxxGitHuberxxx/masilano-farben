// v10.21 IT content for Koloman Moser’s life journey, Part 1 (1868–1918). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collezione privata"
});
  P.works = Object.assign(P.works || {}, {
  "kmself95": {
    "title": "Autoritratto da giovane",
    "museum": "Collezione privata"
  },
  "kmczeschka": {
    "title": "Ritratto di Carl Otto Czeschka",
    "museum": "Collezione privata"
  },
  "kmself10": {
    "title": "Autoritratto",
    "museum": "Collezione privata"
  },
  "kmhut": {
    "title": "Giovane donna con cappello",
    "museum": "Collezione privata"
  },
  "kmmaedchen": {
    "title": "Ritratto di fanciulla",
    "museum": "Collezione privata"
  },
  "kmprimeln": {
    "title": "Primule in un cesto",
    "museum": "Collezione privata"
  },
  "kmbirnen": {
    "title": "Coppia di frutta con pere",
    "museum": "Collezione privata"
  },
  "kmwanderer": {
    "title": "Il viandante",
    "museum": "Collezione privata"
  },
  "kmdents": {
    "title": "Dents du Midi",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.moser = {
  "title": "Il percorso di vita di Koloman Moser",
  "life": "1868–1918",
  "part": "Dalla Secessione alla pittura",
  "subtitle": "Vienna, ritratti, fiori e il viandante",
  "intro": "Viaggia con Koloman Moser, il viennese della Secessione e della Wiener Werkstätte, che più tardi si volge con fermezza alla pittura: dagli autoritratti giovanili e dai ritratti di amici, attraverso i fiori, fino ai paesaggi e a «Il viandante». Brevi tappe e quadri da colorare. Questo percorso segue Moser pittore.",
  "ending": [
    "Koloman Moser muore a Vienna il 18 ottobre 1918, a cinquant’anni. Alle spalle restano la Secessione, la Wiener Werkstätte e un’opera pittorica tarda tutta sua.",
    "Questo percorso mostra soprattutto il pittore: ritratti, fiori, paesaggi e il viandante dei suoi ultimi anni."
  ],
  "epilogue": "Koloman Moser muore a Vienna il 18 ottobre 1918, a cinquant’anni. Alle spalle restano la Secessione, la Wiener Werkstätte e un’opera pittorica tarda tutta sua. Questo percorso mostra soprattutto il pittore: ritratti, fiori, paesaggi e il viandante dei suoi ultimi anni."
};
  P.stations = Object.assign(P.stations || {}, {
  "kmwien": {
    "place": "Vienna e la Secessione",
    "when": "1868–1907",
    "mapLabel": "Vienna",
    "intro": [
      "Koloman Moser nasce a Vienna il 30 marzo 1868. Nel 1897 è tra i fondatori della Secessione; nel 1903, con Josef Hoffmann, della Wiener Werkstätte. Nel 1905 sposa Ditha Mautner von Markhof.",
      "Nel 1907 lascia la Werkstätte e si volge con più fermezza alla pittura. I ritratti giovanili e il quadro di Loïe Fuller appartengono a questi anni."
    ]
  },
  "kmbild": {
    "place": "Ritratti",
    "when": "1910–1915",
    "mapLabel": "Ritratto",
    "intro": [
      "Dopo il 1907 Moser dipinge autoritratti e ritratti di donne e fanciulle, semplici e fermi. L’ordine dei suoi progetti resta visibile nel taglio.",
      "Il ritratto gli diventa importante quanto un tempo lo era l’ornamento. Lo sguardo resta sulla persona."
    ]
  },
  "kmblumen": {
    "place": "Fiori e nature morte",
    "when": "1912–1915",
    "mapLabel": "Fiori",
    "intro": [
      "Primule, coppe di frutta, disposizioni nitide: Moser dipinge nature morte con la cura di un progettista e la libertà di un pittore.",
      "La semplicità è voluta. Il colore sostiene, senza perdersi nell’abbondanza."
    ]
  },
  "kmland": {
    "place": "Paesaggio e viandante",
    "when": "1913–1918",
    "mapLabel": "Alpi",
    "intro": [
      "Negli anni 1910 Moser soggiorna più volte nella Svizzera occidentale e dipinge montagne come le Dents du Midi. «Il viandante» dà alla figura la serietà di un’icona moderna.",
      "Il 18 ottobre 1918 muore a Vienna, a cinquant’anni."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "kmself95": {
    "text": [
      "L’autoritratto giovanile, verso il 1895, mostra Moser da giovane, lo sguardo fermo, ancora prima dell’apogeo della Secessione. La pittura gli appartiene già, anche se il progetto presto lo occuperà del tutto.",
      "Due anni più tardi è tra i fondatori della Secessione viennese, accanto a Klimt e Hoffmann."
    ],
    "fact": "circa 1895. Collezione privata."
  },
  "kmczeschka": {
    "text": [
      "Carl Otto Czeschka, pittore e progettista, posa per Moser nel 1907. Il ritratto è fermo e amichevole, di un taglio netto e moderno.",
      "Nello stesso anno Moser lascia la Wiener Werkstätte, che aveva fondato con Josef Hoffmann nel 1903, e si volge con più fermezza alla pittura."
    ],
    "fact": "1907. Collezione privata."
  },
  "kmself10": {
    "text": [
      "Intorno al 1910 Moser si guarda di nuovo, più maturo, dopo gli anni della Werkstätte. Il ritratto è semplice e fermo.",
      "Si è ripreso il tempo di dipingere. D’ora in poi ritratti, fiori e paesaggi appartengono al centro della sua opera."
    ],
    "fact": "circa 1910. Collezione privata."
  },
  "kmhut": {
    "text": [
      "Una giovane donna porta un cappello, il viso netto, il piano quieto. Moser dipinge il ritratto con lo stesso ordine che distingue i suoi progetti.",
      "La moda del tempo c’è, ma non prevale. Lo sguardo resta sulla persona."
    ],
    "fact": "circa 1910. Collezione privata."
  },
  "kmmaedchen": {
    "text": [
      "Un ritratto di fanciulla, semplice e attento. Moser dà al viso giovane calma e chiarezza, senza stilizzarlo.",
      "In questi anni il ritratto gli diventa importante quanto un tempo lo era l’ornamento progettato."
    ],
    "fact": "circa 1913. Collezione privata."
  },
  "kmprimeln": {
    "text": [
      "Le primule stanno in un cesto, i fiori luminosi, la disposizione nitida. Moser dipinge la natura morta con la cura di un progettista e la libertà di un pittore.",
      "Intorno al 1912 i pezzi di fiori appartengono pienamente alla sua opera. Il colore sostiene, senza perdersi nell’abbondanza."
    ],
    "fact": "circa 1912. Collezione privata."
  },
  "kmbirnen": {
    "text": [
      "Una coppa con pere rossicce, le forme rotonde e ferme, la luce quieta. Moser ordina la natura morta come un piano, non come uno sfarzo.",
      "La semplicità è voluta. In quadri come questo il progettista resta visibile nel pittore, senza governarlo."
    ],
    "fact": "circa 1913. Collezione privata."
  },
  "kmwanderer": {
    "text": [
      "Un viandante attraversa un ampio paesaggio fresco, piccolo sotto il cielo e il pendio. Moser dà alla figura la serietà di un’icona moderna, senza pathos.",
      "Il quadro del circa 1914 è tra i suoi dipinti più noti. Il cammino stesso diventa il soggetto."
    ],
    "fact": "circa 1914. Collezione privata."
  },
  "kmdents": {
    "text": [
      "Le Dents du Midi si ergono su un ampio paesaggio chiaro. Moser dipinge le montagne svizzere in fasce nitide e quiete, senza un tempo drammatico.",
      "Negli anni 1910 soggiorna più volte nella Svizzera occidentale. Il paesaggio gli diventa importante quanto il ritratto."
    ],
    "fact": "circa 1913. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
