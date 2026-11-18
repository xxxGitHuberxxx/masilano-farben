// v10.24 IT content for Emil Jakob Schindler’s life journey, Part 1 (1842–1892). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Belvedere, Wien": "Belvedere, Vienna"
});
  P.works = Object.assign(P.works || {}, {
  "sjramsau": {
    "title": "Torrente nella Ramsau",
    "museum": "Belvedere, Vienna"
  },
  "sjdampfer": {
    "title": "Approdo dei battelli sul Danubio di fronte a Kaisermühlen",
    "museum": "Belvedere, Vienna"
  },
  "sjholland": {
    "title": "Bestiame al pascolo in Olanda",
    "museum": "Belvedere, Vienna"
  },
  "sjschafe": {
    "title": "Paesaggio di villaggio con pecore",
    "museum": "Belvedere, Vienna"
  },
  "sjkrieau": {
    "title": "Motivo del Prater – Krieau",
    "museum": "Belvedere, Vienna"
  },
  "sjhacking": {
    "title": "Golena di Hacking",
    "museum": "Belvedere, Vienna"
  },
  "sjlundenburg": {
    "title": "Paesaggio di torbiera presso Lundenburg",
    "museum": "Belvedere, Vienna"
  },
  "sjfruehling": {
    "title": "Primavera a Hacking",
    "museum": "Belvedere, Vienna"
  },
  "sjgosau": {
    "title": "Il mulino di Gosau presso Ischl",
    "museum": "Belvedere, Vienna"
  },
  "sjmaerz": {
    "title": "Atmosfera di marzo – inizio di primavera nel Bosco Viennese",
    "museum": "Belvedere, Vienna"
  },
  "sjsaege": {
    "title": "Segheria nella nebbia del mattino",
    "museum": "Belvedere, Vienna"
  },
  "sjkorfu": {
    "title": "Il mar Ionio presso Corfù",
    "museum": "Belvedere, Vienna"
  },
  "sjruebe": {
    "title": "Campo di rape",
    "museum": "Belvedere, Vienna"
  },
  "sjernte": {
    "title": "Mese del raccolto a Plankenberg",
    "museum": "Belvedere, Vienna"
  },
  "sjsylt": {
    "title": "Costa di Sylt",
    "museum": "Belvedere, Vienna"
  }
});
  P.paths = P.paths || {};
  P.paths.schindler = {
  "title": "Il percorso di vita di Emil Jakob Schindler",
  "life": "1842–1892",
  "part": "Parte 1 · Atmosfere da Vienna a Sylt",
  "subtitle": "Golene, mulini e mare",
  "intro": "Viaggia con Emil Jakob Schindler, il paesaggista viennese delle atmosfere quiete: dai torrenti della Ramsau, attraverso le golene del Danubio e il Prater, fino a Plankenberg, all’Adriatico e al mare di Sylt. Brevi tappe e quadri da colorare. Questa prima parte segue la sua luce.",
  "ending": [
    "Emil Jakob Schindler muore a Westerland, sull’isola di Sylt, il 9 agosto 1892. Le sue allieve Marie Egner e Olga Wisinger-Florian portano avanti la sua pittura.",
    "Il percorso può ancora crescere. Altre golene e coste potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 9 agosto 1892 Schindler muore a Sylt. Una parte successiva potrà aggiungere altri paesaggi d’atmosfera."
};
  P.stations = Object.assign(P.stations || {}, {
  "sjjung": {
    "place": "Vienna e le montagne · Apprendistato",
    "when": "1842–1872",
    "mapLabel": "Ramsau",
    "intro": [
      "Emil Jakob Schindler nasce a Vienna il 27 aprile 1842. Dal 1860 studia all’Accademia di Vienna con Albert Zimmermann.",
      "Dipinge torrenti di montagna e la vita quotidiana sul Danubio."
    ]
  },
  "sjhell": {
    "place": "Il Prater, l’Olanda e le golene",
    "when": "1873–1882",
    "mapLabel": "Prater",
    "intro": [
      "Negli anni 1870 la pittura di Schindler si schiarisce. Viaggia in Olanda e dipinge al Prater e nelle golene intorno a Vienna.",
      "Nasce così la sua quieta pittura d’atmosfera."
    ]
  },
  "sjschule": {
    "place": "Goisern e il Bosco Viennese",
    "when": "1883–1884",
    "mapLabel": "Goisern",
    "intro": [
      "Schindler insegna ora a giovani pittrici, tra cui Marie Egner e Olga Wisinger-Florian. D’estate dipingono insieme a Goisern.",
      "Nel Bosco Viennese osserva il passaggio dall’inverno alla primavera."
    ]
  },
  "sjplank": {
    "place": "Plankenberg e l’Adriatico",
    "when": "1885–1890",
    "mapLabel": "Plankenberg",
    "intro": [
      "Nel 1885 Schindler si trasferisce con la famiglia nel castello di Plankenberg. Per incarico del principe ereditario Rodolfo viaggia sulle coste dell’Adriatico.",
      "Tra nebbia, campi e mare nascono i suoi quadri più maturi."
    ]
  },
  "sjnord": {
    "place": "Sul mare del Nord",
    "when": "1892",
    "mapLabel": "Sylt",
    "intro": [
      "Nell’estate del 1892 Schindler va a Sylt. Dipinge ancora il mare aperto.",
      "Muore a Westerland il 9 agosto 1892."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sjramsau": {
    "text": [
      "Un torrente scorre tra sassi e abeti nella Ramsau. Schindler ha ventisei anni e impara a guardare da vicino.",
      "Dipinge ancora scuro e denso, nella tradizione dei suoi maestri."
    ],
    "fact": "1868. Belvedere, Vienna."
  },
  "sjdampfer": {
    "text": [
      "Sul Danubio c’è un approdo per i battelli a vapore, l’acqua è larga e grigia. Vienna cresce lungo il suo fiume.",
      "Schindler dipinge la vita quotidiana del fiume senza enfasi."
    ],
    "fact": "circa 1871. Belvedere, Vienna."
  },
  "sjholland": {
    "text": [
      "Le mucche pascolano su una terra piatta sotto un grande cielo. Schindler viaggia in Olanda e studia i pittori del luogo.",
      "L’ampia luce del nord cambia il suo sguardo."
    ],
    "fact": "1875. Belvedere, Vienna."
  },
  "sjschafe": {
    "text": [
      "Le pecore passano davanti a case basse, il cielo è chiaro e mosso. Tutto sembra semplice e quieto.",
      "Per Schindler l’ordinario è un soggetto degno."
    ],
    "fact": "1875. Belvedere, Vienna."
  },
  "sjkrieau": {
    "text": [
      "Nella Krieau, al Prater, vecchi alberi stanno vicino all’acqua. Le foglie spezzano la luce in molti toni.",
      "Qui dipingerà anche Tina Blau, con cui Schindler divide per un periodo lo studio."
    ],
    "fact": "circa 1873. Belvedere, Vienna."
  },
  "sjhacking": {
    "text": [
      "Presso Hacking, sul fiume Wien, c’è una golena quieta con alberi e acqua. Il quadro ha la freschezza umida di un giorno di primavera.",
      "Presto Schindler sarà chiamato pittore di atmosfere."
    ],
    "fact": "1880. Belvedere, Vienna."
  },
  "sjlundenburg": {
    "text": [
      "Presso Lundenburg, sul Thaya, si stendono torbiere piatte e pozze. Il cielo si specchia nel terreno scuro.",
      "Schindler cerca di proposito questi luoghi solitari."
    ],
    "fact": "1882. Belvedere, Vienna."
  },
  "sjfruehling": {
    "text": [
      "I primi alberi fioriscono a Hacking, l’erba è verde chiaro. L’aria sembra calda e morbida.",
      "Schindler ha ora allieve e allievi che dipingono all’aperto con lui."
    ],
    "fact": "1883. Belvedere, Vienna."
  },
  "sjgosau": {
    "text": [
      "Un vecchio mulino sta sul ruscello nel Salzkammergut, legno e acqua coperti di muschio. Schindler dipinge qui con le sue allieve.",
      "Le estati a Goisern diventano una scuola di pittura all’aperto."
    ],
    "fact": "1883. Belvedere, Vienna."
  },
  "sjmaerz": {
    "text": [
      "Nel Bosco Viennese la neve è quasi sciolta, gli alberi sono ancora spogli. La luce annuncia già la primavera.",
      "Schindler ama in particolare questi tempi di passaggio."
    ],
    "fact": "1884. Belvedere, Vienna."
  },
  "sjsaege": {
    "text": [
      "Nella nebbia del mattino la segheria e gli alberi sembrano ombre. Colori e forme si fanno morbidi.",
      "Dal 1885 Schindler vive con la famiglia nel castello di Plankenberg, vicino a Neulengbach."
    ],
    "fact": "1886. Belvedere, Vienna."
  },
  "sjkorfu": {
    "text": [
      "Il mare presso Corfù brilla di blu, la costa è chiara e rocciosa. Schindler viaggia sull’Adriatico per incarico del principe ereditario Rodolfo.",
      "Deve dipingere le coste per un grande libro sulla monarchia."
    ],
    "fact": "1888. Belvedere, Vienna."
  },
  "sjruebe": {
    "text": [
      "Un campo di rape si stende piatto sotto un cielo alto, con qualche albero ai margini. Qui niente è spettacolare.",
      "Proprio in questo sta la forza quieta di Schindler."
    ],
    "fact": "1888. Belvedere, Vienna."
  },
  "sjernte": {
    "text": [
      "D’estate il grano è maturo intorno a Plankenberg, i covoni sono nel campo. La luce è calda e dorata.",
      "Schindler dipinge il paesaggio intorno a casa in ogni stagione."
    ],
    "fact": "1890. Belvedere, Vienna."
  },
  "sjsylt": {
    "text": [
      "Sulla costa di Sylt le onde rotolano sulla sabbia chiara, il cielo è ampio e ventoso. È uno dei suoi ultimi quadri.",
      "Schindler va sul mare del Nord nel 1892 e vi muore ad agosto."
    ],
    "fact": "1892. Belvedere, Vienna."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
