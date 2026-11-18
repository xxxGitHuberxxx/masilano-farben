// v10.24 IT content for Olga Wisinger-Florian’s life journey, Part 1 (1844–1926). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collezione privata",
  "Belvedere, Wien": "Belvedere, Vienna"
});
  P.works = Object.assign(P.works || {}, {
  "owherbst": {
    "title": "Bosco d’autunno",
    "museum": "Collezione privata"
  },
  "owmuehle": {
    "title": "Mulino a Goisern",
    "museum": "Collezione privata"
  },
  "owmaedchen": {
    "title": "Bambina in giardino",
    "museum": "Collezione privata"
  },
  "owfeld": {
    "title": "Fiori di campo",
    "museum": "Collezione privata"
  },
  "owhelleb": {
    "title": "Elleboro nero",
    "museum": "Collezione privata"
  },
  "owbauernhof": {
    "title": "Lavoro alla fattoria",
    "museum": "Belvedere, Vienna"
  },
  "owvenedig": {
    "title": "Il mercato del pesce a Venezia",
    "museum": "Collezione privata"
  },
  "owkarlsbad": {
    "title": "Colazione a Karlsbad",
    "museum": "Collezione privata"
  },
  "owmohn": {
    "title": "Papaveri in fiore",
    "museum": "Belvedere, Vienna"
  },
  "owdorf": {
    "title": "Strada di paese nel sole di mezzogiorno",
    "museum": "Collezione privata"
  },
  "owprater": {
    "title": "Viale del Prater in autunno",
    "museum": "Belvedere, Vienna"
  },
  "owente": {
    "title": "Stagno delle anatre",
    "museum": "Belvedere, Vienna"
  },
  "owweiher": {
    "title": "Viale presso lo stagno",
    "museum": "Belvedere, Vienna"
  },
  "owstrauss": {
    "title": "Mazzo di fiori di campo",
    "museum": "Belvedere, Vienna"
  },
  "owapfel": {
    "title": "Meli in fiore",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.wisinger = {
  "title": "Il percorso di vita di Olga Wisinger-Florian",
  "life": "1844–1926",
  "part": "Parte 1 · Fiori, viali e giardini",
  "subtitle": "Da pianista a pittrice",
  "intro": "Viaggia con Olga Wisinger-Florian, la pittrice viennese di fiori e giardini: dai primi quadri nel Salzkammergut, attraverso campi di papaveri e viali del Prater, fino a Venezia, Karlsbad ed Euxinograd sul mar Nero. Brevi tappe e quadri da colorare. Questa prima parte segue i suoi colori.",
  "ending": [
    "Olga Wisinger-Florian muore a Grafenegg, in Bassa Austria, il 27 febbraio 1926. La pianista è diventata una delle pittrici più note dell’Austria.",
    "Il percorso può ancora crescere. Altri fiori e giardini potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 27 febbraio 1926 Wisinger-Florian muore a Grafenegg. Una parte successiva potrà aggiungere altri quadri di fiori."
};
  P.stations = Object.assign(P.stations || {}, {
  "owjung": {
    "place": "Vienna e Goisern · Dal pianoforte alla pittura",
    "when": "1844–1881",
    "mapLabel": "Goisern",
    "intro": [
      "Olga Florian nasce a Vienna il 1º novembre 1844. Prima diventa pianista da concerto, poi si dedica alla pittura.",
      "Dal 1880 studia con Emil Jakob Schindler."
    ]
  },
  "owblumen": {
    "place": "Fiori e fattorie",
    "when": "1884–1888",
    "mapLabel": "Fiori",
    "intro": [
      "Wisinger-Florian trova il suo tema: fiori, prati e la vita di campagna.",
      "I suoi colori diventano più forti e liberi di quelli del maestro."
    ]
  },
  "owreisen": {
    "place": "Viaggi ed estati",
    "when": "1892–1899",
    "mapLabel": "Venezia",
    "intro": [
      "Viaggia a Venezia e nelle città termali della Boemia. A casa dipinge campi di papaveri e strade di paese d’estate.",
      "Presto i suoi quadri sono esposti anche all’estero."
    ]
  },
  "owpark": {
    "place": "Parchi e viali",
    "when": "1900–1906",
    "mapLabel": "Prater",
    "intro": [
      "Intorno al 1900 Wisinger-Florian dipinge il Prater, stagni e viali. Si impegna anche per la formazione delle pittrici.",
      "In primavera e in autunno cerca i colori più forti."
    ]
  },
  "owspaet": {
    "place": "Fioritura tarda",
    "when": "1906–1926",
    "mapLabel": "Grafenegg",
    "intro": [
      "Oltre i sessant’anni dipinge ancora mazzi freschi e alberi in fiore. Muore a Grafenegg il 27 febbraio 1926.",
      "La sua opera resta una festa di colori."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "owherbst": {
    "text": [
      "Il bosco brilla di giallo e marrone, le foglie coprono il sentiero. È uno dei suoi primi quadri.",
      "Nello stesso anno diventa allieva di Emil Jakob Schindler."
    ],
    "fact": "1880. Collezione privata."
  },
  "owmuehle": {
    "text": [
      "Un mulino sta sul ruscello a Goisern, nel Salzkammergut, legno e acqua brillano. Qui Schindler dipinge d’estate con le sue allieve.",
      "Wisinger-Florian impara a guardare da vicino e a lavorare all’aperto."
    ],
    "fact": "1880. Collezione privata."
  },
  "owmaedchen": {
    "text": [
      "Una bambina sta in un giardino fiorito, circondata di verde e di luce. La figura è piccola, il giardino grande.",
      "Già qui si vede il suo amore per i fiori."
    ],
    "fact": "1881. Collezione privata."
  },
  "owfeld": {
    "text": [
      "I fiori di prato crescono fitti, blu, bianco e rosso si mescolano nell’erba. Wisinger-Florian li dipinge da vicino.",
      "I fiori diventano il suo grande tema."
    ],
    "fact": "1884. Collezione privata."
  },
  "owhelleb": {
    "text": [
      "Gli ellebori bianchi fioriscono a fine inverno tra foglie scure. Sono tra i primi fiori dell’anno.",
      "Wisinger-Florian li dipinge con toni chiari e luminosi."
    ],
    "fact": "1885. Collezione privata."
  },
  "owbauernhof": {
    "text": [
      "In una fattoria le persone svolgono il loro lavoro, le galline corrono nel cortile. La luce è calda.",
      "Il quadro appartiene al Belvedere di Vienna."
    ],
    "fact": "1888. Belvedere, Vienna."
  },
  "owvenedig": {
    "text": [
      "Al mercato del pesce di Venezia barche, banchi e persone stanno sull’acqua. L’aria vibra nella luce.",
      "Wisinger-Florian ama viaggiare e dipinge lungo la strada."
    ],
    "fact": "1892. Collezione privata."
  },
  "owkarlsbad": {
    "text": [
      "A Karlsbad gli ospiti fanno colazione all’aperto, sotto alberi e ombrelloni. È un’allegra mattina d’estate.",
      "La città termale è piena di vita d’estate."
    ],
    "fact": "1895. Collezione privata."
  },
  "owmohn": {
    "text": [
      "Un campo pieno di papaveri rossi brilla sotto un cielo chiaro. Il rosso è forte e steso con libertà.",
      "Il quadro del Belvedere mostra Wisinger-Florian al culmine della sua arte."
    ],
    "fact": "circa 1895. Belvedere, Vienna."
  },
  "owdorf": {
    "text": [
      "Una strada di paese è immobile nel sole di mezzogiorno, case e alberi fanno ombra. Tutto sembra riposare.",
      "Wisinger-Florian ama la luce intensa e calda dell’estate."
    ],
    "fact": "1899. Collezione privata."
  },
  "owprater": {
    "text": [
      "Il grande viale del Prater brilla di foglie autunnali, i passanti camminano sotto gli alberi. Il giallo riempie tutto il quadro.",
      "Il Prater è un soggetto amato dai pittori viennesi."
    ],
    "fact": "1900. Belvedere, Vienna."
  },
  "owente": {
    "text": [
      "Le anatre nuotano in un piccolo stagno, la riva è verde e fiorita. L’acqua riflette alberi e cielo.",
      "Il quadro appartiene al Belvedere di Vienna."
    ],
    "fact": "1900. Belvedere, Vienna."
  },
  "owweiher": {
    "text": [
      "Un viale alberato costeggia lo stagno, luce e ombra si alternano sul sentiero. L’acqua è calma accanto.",
      "Dipinge viali e parchi più e più volte."
    ],
    "fact": "1906. Belvedere, Vienna."
  },
  "owstrauss": {
    "text": [
      "Un mazzo di fiori di campo appena colti sta sul tavolo. Ogni fiore ha il suo colore.",
      "Più di vent’anni dopo i suoi primi fiori di campo torna a questo soggetto."
    ],
    "fact": "1906. Belvedere, Vienna."
  },
  "owapfel": {
    "text": [
      "I meli sono in piena fioritura, l’erba sotto è fresca e verde. Bianco e rosa brillano nella luce primaverile.",
      "Wisinger-Florian ha più di sessant’anni e dipinge con mano leggera."
    ],
    "fact": "1906. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
