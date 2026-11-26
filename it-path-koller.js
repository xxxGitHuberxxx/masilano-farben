// v10.24 IT content for Rudolf Koller’s life journey, Part 1 (1828–1905). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Bundesamt für Kultur, Bern": "Ufficio federale della cultura, Berna",
  "Privatsammlung": "Collezione privata",
  "Museum Oskar Reinhart, Winterthur": "Museum Oskar Reinhart, Winterthur",
  "Standort ohne Angabe": "Collocazione non indicata",
  "Kunsthaus Zürich": "Kunsthaus di Zurigo"
});
  P.works = Object.assign(P.works || {}, {
  "rkschimmel": {
    "title": "Cavallo bianco nella stalla",
    "museum": "Kunsthaus di Zurigo"
  },
  "rkscheu": {
    "title": "Cavalli imbizzarriti all’arrivo del temporale",
    "museum": "Collezione privata"
  },
  "rkkuhwald": {
    "title": "Mucca nel bosco",
    "museum": "Collezione privata"
  },
  "rkheuernte": {
    "title": "Fienagione prima del temporale",
    "museum": "Collocazione non indicata"
  },
  "rksusten": {
    "title": "Ghiacciaio al passo del Susten",
    "museum": "Kunsthaus di Zurigo"
  },
  "rkrichisau": {
    "title": "La Richisau",
    "museum": "Museum Oskar Reinhart, Winterthur"
  },
  "rkmittag": {
    "title": "Riposo di mezzogiorno",
    "museum": "Kunsthaus di Zurigo"
  },
  "rkwaesche": {
    "title": "Mucche e lavandaia al ruscello",
    "museum": "Collezione privata"
  },
  "rktraenke": {
    "title": "Abbeveratoio al lago al tramonto",
    "museum": "Collezione privata"
  },
  "rkanzio": {
    "title": "Capre sulla spiaggia di Porto d’Anzio",
    "museum": "Museum Oskar Reinhart, Winterthur"
  },
  "rkhorn": {
    "title": "Mucche allo Zürichhorn",
    "museum": "Collezione privata"
  },
  "rkgotthard": {
    "title": "La diligenza del Gottardo",
    "museum": "Kunsthaus di Zurigo"
  },
  "rkalp": {
    "title": "Salita all’alpeggio",
    "museum": "Collezione privata"
  },
  "rkschlitten": {
    "title": "Corsa in slitta",
    "museum": "Ufficio federale della cultura, Berna"
  },
  "rkabend": {
    "title": "Sera allo Zürichhorn",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.koller = {
  "title": "Il percorso di vita di Rudolf Koller",
  "life": "1828–1905",
  "part": "Zurigo e gli animali",
  "subtitle": "Cavalli, mucche e la diligenza del Gottardo",
  "intro": "Viaggia con Rudolf Koller, il pittore di animali di Zurigo: dal giovane pittore al cavalletto, attraverso le Alpi e il Klöntal, fino alla casa sullo Zürichhorn e alla celebre diligenza del Gottardo. Brevi tappe e quadri da colorare. Questo percorso lo segue nella stalla, sul pascolo e in montagna.",
  "ending": [
    "Rudolf Koller muore a Zurigo il 5 gennaio 1905. Per tutta la vita ha dipinto i suoi animali con pazienza e sguardo preciso.",
    "Il percorso va dai primi quadri di cavalli, attraverso le mucche dello Zürichhorn, fino alla Posta del Gottardo, il suo quadro più noto."
  ],
  "epilogue": "Rudolf Koller muore a Zurigo il 5 gennaio 1905. Per tutta la vita ha dipinto i suoi animali con pazienza e sguardo preciso. Il percorso va dai primi quadri di cavalli, attraverso le mucche dello Zürichhorn, fino alla Posta del Gottardo, il suo quadro più noto."
};
  P.stations = Object.assign(P.stations || {}, {
  "rkjung": {
    "place": "Zurigo e Düsseldorf · Apprendistato",
    "when": "1828–1852",
    "mapLabel": "Zurigo",
    "intro": [
      "Rudolf Koller nasce a Zurigo il 21 maggio 1828. Nel 1846 va all’accademia di Düsseldorf, poi a Parigi e a Monaco.",
      "Cavalli e mucche sono i suoi modelli fin dall’inizio."
    ]
  },
  "rkland": {
    "place": "Campi, Alpi e Klöntal",
    "when": "1853–1860",
    "mapLabel": "Klöntal",
    "intro": [
      "Tornato in Svizzera, Koller dipinge fienagione, boschi e ghiacciai. Nel Klöntal trova alla Richisau un luogo d’estate.",
      "Lavora all’aperto davanti al soggetto e completa i quadri nello studio."
    ]
  },
  "rkhaus": {
    "place": "La casa sullo Zürichhorn",
    "when": "1862–1869",
    "mapLabel": "Zürichhorn",
    "intro": [
      "Nel 1862 Koller si trasferisce nella sua casa sullo Zürichhorn, sul lago. Tiene animali suoi e li dipinge sulla riva.",
      "Nel 1869 un viaggio lo porta anche sulla costa italiana."
    ]
  },
  "rkgott": {
    "place": "Gottardo e alpeggio",
    "when": "1873–1881",
    "mapLabel": "Gottardo",
    "intro": [
      "Nel 1873 Koller dipinge la diligenza del Gottardo, il quadro a cui è legato ancora oggi.",
      "Anche la salita all’alpeggio mostra il movimento di animali e persone in montagna."
    ]
  },
  "rkspaet": {
    "place": "Ultimi anni sul lago",
    "when": "1882–1905",
    "mapLabel": "Lago",
    "intro": [
      "Da anziano Koller resta allo Zürichhorn. Dipinge corse invernali e sere quiete sulla riva.",
      "Muore a Zurigo il 5 gennaio 1905."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rkschimmel": {
    "text": [
      "Un cavallo bianco sta tranquillo nella stalla buia, la luce cade sul mantello e sulla criniera. Koller dipinge il quadro a vent’anni.",
      "I cavalli restano per tutta la vita i suoi modelli preferiti."
    ],
    "fact": "1848. Kunsthaus di Zurigo."
  },
  "rkscheu": {
    "text": [
      "Arrivano nuvole scure, i cavalli alzano la testa e si scansano. Il quadro nasce dopo la formazione di Koller a Düsseldorf.",
      "A Düsseldorf ha conosciuto nel 1846 Arnold Böcklin, che resta suo amico."
    ],
    "fact": "1849. Collezione privata."
  },
  "rkkuhwald": {
    "text": [
      "Una mucca sta all’ombra degli alberi, la luce cade a chiazze sul mantello. Koller osserva l’animale da vicinissimo.",
      "Dopo viaggi a Parigi e a Monaco è di nuovo a Zurigo."
    ],
    "fact": "1854. Collezione privata."
  },
  "rkheuernte": {
    "text": [
      "I contadini caricano in fretta il fieno sul carro, il cielo si oscura. I cavalli aspettano attaccati.",
      "Koller mostra il lavoro dei campi senza abbellirlo, ma con calore."
    ],
    "fact": "1854. Collocazione non indicata."
  },
  "rksusten": {
    "text": [
      "In alto si stende il ghiacciaio, davanti rocce e pascoli magri. Koller cammina nelle Alpi per i suoi studi.",
      "Il quadro appartiene al Kunsthaus di Zurigo."
    ],
    "fact": "1856. Kunsthaus di Zurigo."
  },
  "rkrichisau": {
    "text": [
      "La Richisau si trova in fondo al Klöntal, nel cantone di Glarona, tra pascoli e montagne ripide. Koller vi trascorre molte estati.",
      "Qui trova mucche, luce e quiete per i suoi quadri."
    ],
    "fact": "1858. Museum Oskar Reinhart, Winterthur."
  },
  "rkmittag": {
    "text": [
      "Nel caldo di mezzogiorno le mucche sono sdraiate nell’erba, il pastore riposa all’ombra. Tutto è quieto.",
      "Il quadro del Kunsthaus di Zurigo mostra la sensibilità di Koller per il calore e la luce."
    ],
    "fact": "1860. Kunsthaus di Zurigo."
  },
  "rkwaesche": {
    "text": [
      "Una donna lava al ruscello e accanto le mucche bevono. Acqua, mantello e foglie brillano nella luce.",
      "Dal 1862 Koller vive nella sua casa sullo Zürichhorn, sulla riva del lago di Zurigo."
    ],
    "fact": "1865–1867. Collezione privata."
  },
  "rktraenke": {
    "text": [
      "Il sole tramonta, il bestiame beve nell’acqua bassa sulla riva del lago. Il cielo arde di rosso e oro.",
      "Koller dipinge spesso queste sere davanti alla sua casa sul lago."
    ],
    "fact": "1868. Collezione privata."
  },
  "rkanzio": {
    "text": [
      "Un gregge di capre attraversa la spiaggia chiara, dietro c’è il mare. Koller viaggia in Italia e dipinge nel sud.",
      "Qui la luce è più bianca e ampia che sul lago di Zurigo."
    ],
    "fact": "1869. Museum Oskar Reinhart, Winterthur."
  },
  "rkhorn": {
    "text": [
      "Le mucche stanno sulla riva presso lo Zürichhorn, sul lago c’è una giornata chiara. Qui Koller vive e lavora.",
      "Tiene animali suoi per poterli studiare ogni giorno."
    ],
    "fact": "1869. Collezione privata."
  },
  "rkgotthard": {
    "text": [
      "La diligenza scende a tutta velocità lungo la strada del passo, un vitello spaventato salta di lato. È il quadro più noto di Koller.",
      "Nasce nel 1873, quando iniziano i lavori del tunnel del Gottardo, ed è al Kunsthaus di Zurigo."
    ],
    "fact": "1873. Kunsthaus di Zurigo."
  },
  "rkalp": {
    "text": [
      "All’inizio dell’estate la mandria sale all’alpeggio con pastori e campanacci. La strada attraversa i prati verso i monti.",
      "Koller dipinge la salita come un momento di festa nell’anno contadino."
    ],
    "fact": "1881. Collezione privata."
  },
  "rkschlitten": {
    "text": [
      "Un cavallo tira la slitta nella neve, il fiato fuma nell’aria fredda. Koller ha ormai più di sessant’anni.",
      "Anche d’inverno il cavallo resta il suo soggetto principale."
    ],
    "fact": "1892. Ufficio federale della cultura, Berna."
  },
  "rkabend": {
    "text": [
      "La sera scende sulla riva dello Zürichhorn, animali e alberi si scuriscono davanti all’acqua chiara.",
      "Koller dipinge il suo angolo di lago fino alla vecchiaia."
    ],
    "fact": "1893. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
