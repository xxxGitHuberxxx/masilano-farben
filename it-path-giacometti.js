// v10.21 IT content for Giovanni Giacometti’s life journey, Part 1 (1868–1933). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collezione privata",
  "Bündner Kunstmuseum, Chur": "Bündner Kunstmuseum, Coira",
  "Kunsthaus Zürich": "Kunsthaus di Zurigo"
});
  P.works = Object.assign(P.works || {}, {
  "ggkinder": {
    "title": "Bambini che giocano",
    "museum": "Kunsthaus di Zurigo"
  },
  "ggscheren": {
    "title": "L’arrotino",
    "museum": "Collezione privata"
  },
  "ggziegen": {
    "title": "Nella stalla delle capre",
    "museum": "Collezione privata"
  },
  "ggmaeher": {
    "title": "Il mietitore",
    "museum": "Collezione privata"
  },
  "ggfiammetta": {
    "title": "Fiammetta II",
    "museum": "Collezione privata"
  },
  "gglampe": {
    "title": "La lampada",
    "museum": "Kunsthaus di Zurigo"
  },
  "gglaceombra": {
    "title": "Luce e ombra II",
    "museum": "Bündner Kunstmuseum, Coira"
  },
  "ggherbst": {
    "title": "Sole d’autunno",
    "museum": "Kunsthaus di Zurigo"
  },
  "ggsommer": {
    "title": "Pomeriggio d’estate",
    "museum": "Kunsthaus di Zurigo"
  },
  "ggbrunnen": {
    "title": "Fontana del villaggio",
    "museum": "Collezione privata"
  },
  "gggarten": {
    "title": "Giardino presso i Balsiger",
    "museum": "Collezione privata"
  },
  "maloja": {
    "title": "Maloja in inverno",
    "museum": "Collezione privata"
  },
  "ggsils": {
    "title": "Veduta del lago di Sils da Capolago",
    "museum": "Collezione privata"
  },
  "ggcorvatsch": {
    "title": "Lago di Sils con il Piz Corvatsch",
    "museum": "Collezione privata"
  },
  "ggduan": {
    "title": "Piz Duan",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.giacometti = {
  "title": "Il percorso di vita di Giovanni Giacometti",
  "life": "1868–1933",
  "part": "Parte 1 · Dal Bergell all’Engadina",
  "subtitle": "Stampa, la luce di Maloja e la famiglia",
  "intro": "Viaggia con Giovanni Giacometti, il pittore di Stampa, in Val Bregaglia: dai dipinti giovanili sul lavoro, attraverso la famiglia e la luce, fino alle vedute invernali e ai laghi di Maloja e Sils. Brevi tappe e quadri da colorare. Questa prima parte segue il cammino nella sua terra.",
  "ending": [
    "Giovanni Giacometti muore il 25 giugno 1933 a Glion, sul Lago di Ginevra. È sepolto a Borgonovo, vicino a Stampa, il suo paese natale.",
    "Il percorso può ancora crescere. Altri ritratti, fiori e paesaggi dell’Engadina potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 25 giugno 1933 Giacometti muore a Glion. Una parte successiva potrà aggiungere altri ritratti e paesaggi dell’Engadina."
};
  P.stations = Object.assign(P.stations || {}, {
  "ggstampa": {
    "place": "Stampa · Anni di formazione",
    "when": "1868–1891",
    "mapLabel": "Stampa",
    "intro": [
      "Giovanni Giacometti nasce il 7 marzo 1868 a Stampa, in Val Bregaglia. Studia a Monaco e soggiorna a Parigi; in Engadina è vicino a Segantini.",
      "I dipinti giovanili riguardano il lavoro nella valle. Già qui cerca una lingua propria, più ricca di colore."
    ]
  },
  "ggtal": {
    "place": "Il lavoro nella valle",
    "when": "1896–1898",
    "mapLabel": "Bregaglia",
    "intro": [
      "Negli anni 1890 Giacometti dipinge stalle, mietitori e la vita contadina della Val Bregaglia. I soggetti restano vicini a Segantini, ma il colore è già più libero.",
      "Egli resta fedele alla terra, anche quando lo sguardo si allarga. La valle non è per lui una quinta, ma un’origine."
    ]
  },
  "ggfam": {
    "place": "Famiglia e luce",
    "when": "1903–1915",
    "mapLabel": "Famiglia",
    "intro": [
      "Nel 1900 Giacometti sposa Annetta Stampa. I figli Alberto, Diego, Ottilia e Bruno crescono in una casa dove si dipinge.",
      "Ritratti, luce di lampada, sole d’autunno e pezzi di fiori: in questi anni l’interno diventa importante quanto i monti."
    ]
  },
  "ggalltag": {
    "place": "Giardino e quotidiano",
    "when": "1921–1922",
    "mapLabel": "Giardino",
    "intro": [
      "Nei primi anni Venti Giacometti dipinge fontane e giardini, luoghi quotidiani in una luce familiare. Non ha bisogno di un motivo elevato.",
      "Il colore è sciolto e sicuro. Il quotidiano diventa una festa dello sguardo."
    ]
  },
  "ggengadin": {
    "place": "Engadina e Maloja",
    "when": "1924–1927",
    "mapLabel": "Maloja",
    "intro": [
      "Sempre di nuovo Giacometti torna a Maloja, al lago di Sils e alle vette dell’Alta Engadina. Cieli d’inverno, lago e roccia nascono in macchie sciolte e sicure.",
      "Muore il 25 giugno 1933 a Glion e viene sepolto a Borgonovo, vicino a Stampa."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ggkinder": {
    "text": [
      "I bambini giocano all’aperto, i colori sono chiari, il movimento è sciolto. Giacometti osserva il gioco senza fissarlo come una posa.",
      "Il quadro del Kunsthaus di Zurigo appartiene ai motivi lieti e familiari che lo accompagnano per tutta la vita."
    ],
    "fact": "1912. Kunsthaus di Zurigo."
  },
  "ggscheren": {
    "text": [
      "Un uomo affila i coltelli, il corpo nel lavoro, la luce sulla ruota. Il quadro del 1891 appartiene ai soggetti giovanili, osservati da vicino, sul lavoro.",
      "Giacometti è ancora giovane, ma lo sguardo sulla vita quotidiana della valle è già fermo. Il colore comincia a staccarsi da una pittura soltanto tonale e scura."
    ],
    "fact": "1891. Collezione privata."
  },
  "ggziegen": {
    "text": [
      "Nella stalla le capre stanno vicine, la luce entra da un’apertura. Giacometti dipinge lo spazio stretto senza sentimentalismo.",
      "Il quadro del 1896 mostra quanto egli conosca da vicino la vita contadina della Val Bregaglia. Gli animali hanno peso e calore."
    ],
    "fact": "1896. Collezione privata."
  },
  "ggmaeher": {
    "text": [
      "Un uomo taglia l’erba, la falce nel gesto, il pendio chiaro. Il quadro di lavoro del 1898 resta vicino alla dignità alpina di Segantini, ma il colore è già più libero.",
      "Giacometti non lascerà del tutto il lavoro del corpo nella valle, anche quando più tardi prevarrà la luce dei laghi."
    ],
    "fact": "1898. Collezione privata."
  },
  "ggfiammetta": {
    "text": [
      "Il ritratto «Fiammetta II» del 1909 mostra una giovane donna in una luce calda, il colore già libero e acceso. Giacometti dipinge il viso da vicino, senza severità.",
      "In questi anni il ritratto gli diventa importante quanto il paesaggio. La luce si posa sulla pelle e sul vestito come su una parete di montagna."
    ],
    "fact": "1909. Collezione privata."
  },
  "gglampe": {
    "text": [
      "Una lampada illumina l’interno, i colori si raccolgono intorno al bagliore caldo. Giacometti costruisce il quadro con pochi toni luminosi.",
      "Il dipinto del 1912 al Kunsthaus di Zurigo mostra quanto gli sia cara la luce della casa, tanto quanto la luce dei monti."
    ],
    "fact": "1912. Kunsthaus di Zurigo."
  },
  "gglaceombra": {
    "text": [
      "La luce e l’ombra dividono lo spazio, il colore si erge in contrasti netti. Il quadro del 1912 è conservato al Bündner Kunstmuseum di Coira.",
      "Giacometti non cerca qui l’aneddoto, ma il gioco del chiarore su piani e figure."
    ],
    "fact": "1912. Bündner Kunstmuseum, Coira."
  },
  "ggherbst": {
    "text": [
      "Annetta è seduta con Bruno, Ottilia e i bambini in una luce autunnale. Lo studio fissa la famiglia senza renderla solenne.",
      "Nel 1900 Giacometti ha sposato Annetta Stampa. La casa e i figli – Alberto, Diego, Ottilia, Bruno – appartengono da allora alla sua opera."
    ],
    "fact": "1908. Kunsthaus di Zurigo."
  },
  "ggsommer": {
    "text": [
      "Un pomeriggio d’estate in una luce sciolta, i colori caldi e aperti. Giacometti lascia respirare la scena, senza cingerla troppo.",
      "Il quadro del Kunsthaus di Zurigo mostra la sua mano matura, di libertà impressionista, saldamente radicata nel quotidiano grigionese."
    ],
    "fact": "1903. Kunsthaus di Zurigo."
  },
  "ggbrunnen": {
    "text": [
      "La fontana del villaggio è nella luce, pietra e acqua in macchie quiete. Il quadro del 1921 fissa un luogo quotidiano della Val Bregaglia o dell’Engadina.",
      "Giacometti non ha bisogno di un motivo celebre. Una fontana, un sentiero, un giardino bastano quando la luce è quella giusta."
    ],
    "fact": "1921. Collezione privata."
  },
  "gggarten": {
    "text": [
      "Un giardino presso i Balsiger, nel 1922, pieno di fogliame e di luce d’estate. Giacometti dipinge il luogo recintato tanto ampio quanto un paesaggio.",
      "Il colore è sciolto e sicuro. In quadri come questo il quotidiano diventa una festa dello sguardo."
    ],
    "fact": "1922. Collezione privata."
  },
  "maloja": {
    "text": [
      "Sopra il villaggio innevato di Maloja si alza un cielo invernale chiaro. Giacometti dipinge sempre di nuovo la sua terra, la Val Bregaglia e l’Alta Engadina.",
      "Il quadro del circa 1925 appartiene alle vedute invernali più silenziose. Il colore resta vivo, anche nella neve."
    ],
    "fact": "circa 1925. Collezione privata."
  },
  "ggsils": {
    "text": [
      "Da Capolago il lago di Sils giace quieto sotto i monti. Il quadro del 1927 raccoglie ampiezza e altezza in macchie sciolte e sicure.",
      "Giacometti conosce da vicino queste rive. Non le dipinge come panorama per viaggiatori, ma come un luogo familiare."
    ],
    "fact": "1927. Collezione privata."
  },
  "ggcorvatsch": {
    "text": [
      "Il lago di Sils sta davanti al Piz Corvatsch, acqua e vetta in un solo gesto. Giacometti semplifica la veduta celebre finché resta la luce.",
      "Quadri come questo appartengono all’opera tarda nell’Alta Engadina: ampi, colorati, senza un’altezza teatrale."
    ],
    "fact": "circa 1925. Collezione privata."
  },
  "ggduan": {
    "text": [
      "Il Piz Duan si erge sulla Val Bregaglia, una vetta familiare per il pittore di Stampa. Giacometti dà alla montagna peso e colore, non solo un contorno.",
      "Negli anni Venti torna sempre di nuovo a questi motivi della terra. La luce viene di lato e resta sul pendio."
    ],
    "fact": "circa 1924. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
