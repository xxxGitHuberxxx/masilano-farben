// v10.24 IT content for François Diday’s life journey, Part 1 (1802–1877). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collezione privata",
  "Musée des beaux-arts, La Chaux-de-Fonds": "Musée des beaux-arts, La Chaux-de-Fonds",
  "Royal Collection": "Royal Collection",
  "Kunsthaus Zürich": "Kunsthaus di Zurigo"
});
  P.works = Object.assign(P.works || {}, {
  "fdnapoli": {
    "title": "Napoli con Castel dell’Ovo e il Vesuvio",
    "museum": "Collezione privata"
  },
  "fdbrienz": {
    "title": "Casa sul lago di Brienz con barca e anatre",
    "museum": "Collezione privata"
  },
  "fdorage": {
    "title": "Temporale sul Lemano",
    "museum": "Musée des beaux-arts, La Chaux-de-Fonds"
  },
  "fdrosenlaui": {
    "title": "Rosenlaui",
    "museum": "Collezione privata"
  },
  "fdalpsee": {
    "title": "Paesaggio alpino sul lago",
    "museum": "Collezione privata"
  },
  "fdevian": {
    "title": "Riva del Lemano presso Evian, luce del mattino",
    "museum": "Kunsthaus di Zurigo"
  },
  "fdhandeck": {
    "title": "L’Aar alla Handeck",
    "museum": "Kunsthaus di Zurigo"
  },
  "fdbrunnen": {
    "title": "Il lago dei Quattro Cantoni presso Brunnen, con Seelisberg e il Rütli",
    "museum": "Collezione privata"
  },
  "fdriviere": {
    "title": "Fiume con alberi, ponte e capre",
    "museum": "Collezione privata"
  },
  "fdmuerren": {
    "title": "Veduta da Mürren verso l’Ebnefluh",
    "museum": "Collezione privata"
  },
  "fdbouveret": {
    "title": "Sera a Le Bouveret",
    "museum": "Collezione privata"
  },
  "fdaxen": {
    "title": "Il lago dei Quattro Cantoni e l’Uri-Rotstock dall’Axenberg",
    "museum": "Collezione privata"
  },
  "fdsallanche": {
    "title": "Cascata della Sallanche",
    "museum": "Royal Collection"
  },
  "fdmontblanc": {
    "title": "Il Monte Bianco e l’Arve visti da Sallanches",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.diday = {
  "title": "Il percorso di vita di François Diday",
  "life": "1802–1877",
  "part": "Parte 1 · Ginevra e le Alpi",
  "subtitle": "Laghi, cascate e vette",
  "intro": "Viaggia con François Diday, il pittore ginevrino che fece delle Alpi un grande tema della pittura svizzera: da Napoli, per il lago di Brienz e il Lemano, fino alla Handeck, a Mürren e al Monte Bianco. Brevi tappe e quadri da colorare. Questa prima parte lo segue tra le montagne.",
  "ending": [
    "François Diday muore a Ginevra il 28 novembre 1877. Con lui nasce la scuola ginevrina di pittura alpina, portata avanti da Calame e Zünd.",
    "Il percorso può ancora crescere. Altri laghi e vette potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 28 novembre 1877 Diday muore a Ginevra. Una parte successiva potrà aggiungere altri quadri alpini."
};
  P.stations = Object.assign(P.stations || {}, {
  "fdjung": {
    "place": "Ginevra, Parigi e Italia · Apprendistato",
    "when": "1802–1832",
    "mapLabel": "Ginevra",
    "intro": [
      "François Diday nasce a Ginevra il 10 febbraio 1802. Studia con Wolfgang-Adam Töpffer, nel 1824 va a Parigi da Antoine-Jean Gros e viaggia in Italia.",
      "Tornato in Svizzera scopre l’Oberland bernese."
    ]
  },
  "fdschule": {
    "place": "La scuola ginevrina",
    "when": "1839–1852",
    "mapLabel": "Oberland",
    "intro": [
      "Diday diventa il primo grande pittore delle Alpi a Ginevra. Nel suo studio imparano giovani pittori, tra cui Alexandre Calame.",
      "Dipinge temporali, valli di montagna e laghi quieti."
    ]
  },
  "fdwasser": {
    "place": "Laghi e gole",
    "when": "1852–1855",
    "mapLabel": "Handeck",
    "intro": [
      "Negli anni 1850 Diday dipinge il Lemano al mattino, l’Aar nella sua gola e il lago dei Quattro Cantoni.",
      "Anche il giovane Robert Zünd ha studiato con lui."
    ]
  },
  "fdreif": {
    "place": "Anni della maturità",
    "when": "1864–1874",
    "mapLabel": "Mürren",
    "intro": [
      "Diday dipinge ora paesaggi ampi e quieti con fiume, pascolo e vette lontane.",
      "Torna nei luoghi dei suoi primi viaggi."
    ]
  },
  "fdspaet": {
    "place": "Verso il Monte Bianco",
    "when": "bis 1877",
    "mapLabel": "Monte Bianco",
    "intro": [
      "Alla fine c’è il Monte Bianco, la grande montagna davanti a Ginevra, con i suoi torrenti e le sue cascate.",
      "Diday muore a Ginevra il 28 novembre 1877."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "fdnapoli": {
    "text": [
      "Sul golfo di Napoli sorge Castel dell’Ovo, dietro fuma il Vesuvio. Il giovane Diday viaggia in Italia nel 1824.",
      "La luce chiara del sud segna i suoi primi quadri."
    ],
    "fact": "1824. Collezione privata."
  },
  "fdbrienz": {
    "text": [
      "Una casa di legno sorge sulla riva del lago di Brienz, una barca è sull’acqua, passano delle anatre. Diday scopre l’Oberland bernese.",
      "Diventerà uno dei suoi paesaggi più importanti."
    ],
    "fact": "1832. Collezione privata."
  },
  "fdorage": {
    "text": [
      "Nuvole pesanti passano sul Lemano, le onde battono la riva. Diday dipinge la natura in tutta la sua forza.",
      "Il quadro appartiene al Musée des beaux-arts di La Chaux-de-Fonds."
    ],
    "fact": "1839. Musée des beaux-arts, La Chaux-de-Fonds."
  },
  "fdrosenlaui": {
    "text": [
      "Nella valle di Rosenlaui abeti scuri si alzano davanti a rocce chiare e ghiaccio. Diday dipinge il soggetto più volte.",
      "Anche il suo allievo Alexandre Calame dipingerà Rosenlaui."
    ],
    "fact": "1841. Collezione privata."
  },
  "fdalpsee": {
    "text": [
      "Un lago di montagna giace quieto sotto alte vette, con alberi e rocce sulla riva. Diday è ormai un pittore celebre.",
      "I suoi quadri alpini sono esposti e acquistati a Parigi e a Ginevra."
    ],
    "fact": "1852. Collezione privata."
  },
  "fdevian": {
    "text": [
      "Al mattino il Lemano è calmo e chiaro, la riva presso Evian ancora fresca. Diday conosce il lago fin da bambino.",
      "Il quadro appartiene al Kunsthaus di Zurigo."
    ],
    "fact": "1852. Kunsthaus di Zurigo."
  },
  "fdhandeck": {
    "text": [
      "Alla Handeck il giovane Aar precipita in una gola di roccia. Spruzzi e abeti scuri riempiono il quadro.",
      "Diday percorre spesso la strada verso il Grimsel."
    ],
    "fact": "1854. Kunsthaus di Zurigo."
  },
  "fdbrunnen": {
    "text": [
      "Da Brunnen lo sguardo attraversa il lago dei Quattro Cantoni fino a Seelisberg e al prato del Rütli. Sopra si alza l’Uri-Rotstock.",
      "Il paesaggio della Svizzera centrale attira molti pittori ginevrini."
    ],
    "fact": "1855. Collezione privata."
  },
  "fdriviere": {
    "text": [
      "Un fiume scorre sotto un ponte di legno, le capre pascolano sulla riva sotto grandi alberi. Il quadro è quieto e ampio.",
      "Diday ha più di sessant’anni e dipinge ancora con mano ferma."
    ],
    "fact": "1864. Collezione privata."
  },
  "fdmuerren": {
    "text": [
      "Da Mürren si vedono di fronte la neve e il ghiaccio dell’Ebnefluh. Davanti ci sono pascoli e abeti.",
      "Diday ama queste vedute da una terrazza verso le vette."
    ],
    "fact": "1867. Collezione privata."
  },
  "fdbouveret": {
    "text": [
      "All’estremità del Lemano, presso Le Bouveret, scende la sera. L’acqua brilla, le montagne diventano blu.",
      "Anche da anziano Diday dipinge il lago della sua terra."
    ],
    "fact": "1871. Collezione privata."
  },
  "fdaxen": {
    "text": [
      "Dall’Axenberg lo sguardo scende sul lago di Uri e arriva fino all’Uri-Rotstock. L’acqua è verde e chiara.",
      "Quasi vent’anni dopo Brunnen, Diday torna su questo lago."
    ],
    "fact": "circa 1874. Collezione privata."
  },
  "fdsallanche": {
    "text": [
      "Il torrente della Sallanche precipita sulle rocce verso la valle. Oggi il quadro appartiene alla Royal Collection britannica.",
      "I quadri alpini di Diday sono ricercati anche fuori dalla Svizzera."
    ],
    "fact": "senza data. Royal Collection."
  },
  "fdmontblanc": {
    "text": [
      "Il Monte Bianco si alza bianco sopra la valle dell’Arve. Da Sallanches sembra vicino e immenso.",
      "È una delle grandi vette che Diday ha sempre davanti agli occhi da Ginevra."
    ],
    "fact": "prima del 1877. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
