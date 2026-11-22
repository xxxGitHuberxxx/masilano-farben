// v10.23 IT content for Alexandre Calame’s life journey, Part 1 (1810–1864). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Standort ohne Angabe": "Collocazione non indicata",
  "Privatsammlung": "Collezione privata",
  "Kunsthaus Zürich": "Kunsthaus di Zurigo",
  "National Gallery, London": "National Gallery, Londra",
  "Villa Vauban, Luxemburg": "Villa Vauban, Lussemburgo"
});
  P.works = Object.assign(P.works || {}, {
  "acswiss": {
    "title": "Paesaggio svizzero",
    "museum": "National Gallery of Art, Washington"
  },
  "acpaysage": {
    "title": "Paesaggio montano",
    "museum": "Collocazione non indicata"
  },
  "acvalais": {
    "title": "Fabbrica nel Vallese",
    "museum": "Collezione privata"
  },
  "aceboul": {
    "title": "La frana dopo il temporale",
    "museum": "Kunsthaus di Zurigo"
  },
  "acgrimsel": {
    "title": "La strada del Grimsel",
    "museum": "Collezione privata"
  },
  "acchenes": {
    "title": "Querce sul lago di Thun",
    "museum": "Collezione privata"
  },
  "actorrent": {
    "title": "Torrente di montagna nel temporale",
    "museum": "Collezione privata"
  },
  "acrosenlaui": {
    "title": "Ricordo di Rosenlaui",
    "museum": "Collezione privata"
  },
  "acwetter": {
    "title": "Il Wetterhorn",
    "museum": "Collocazione non indicata"
  },
  "acleman": {
    "title": "Veduta del lago Lemano",
    "museum": "Villa Vauban, Lussemburgo"
  },
  "acthun": {
    "title": "Il lago di Thun",
    "museum": "National Gallery, Londra"
  },
  "acbrunnen": {
    "title": "Lago dei Quattro Cantoni verso Brunnen",
    "museum": "Kunsthaus di Zurigo"
  },
  "acrigi": {
    "title": "Baite sul Rigi",
    "museum": "National Gallery, Londra"
  },
  "acmontreux": {
    "title": "L’estremità del lago Lemano presso Montreux",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.calame = {
  "title": "Il percorso di vita di Alexandre Calame",
  "life": "1810–1864",
  "part": "Parte 1 · Da Ginevra alle Alpi",
  "subtitle": "Tempesta, roccia e laghi quieti",
  "intro": "Viaggia con Alexandre Calame, il pittore ginevrino delle Alpi: dai primi paesaggi di montagna, attraverso il Grimsel, Rosenlaui e il Wetterhorn, fino ai laghi quieti di Thun, Ginevra e Lucerna. Brevi tappe e quadri da colorare. Questa prima parte lo segue tra le montagne svizzere.",
  "ending": [
    "Alexandre Calame muore a Mentone il 19 marzo 1864, a cinquantatré anni. I suoi quadri alpini hanno segnato lo sguardo di tutta l’Europa sulle montagne svizzere.",
    "Il percorso può ancora crescere. Litografie, quadri italiani e altre montagne potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 19 marzo 1864 Calame muore a Mentone. Una parte successiva potrà aggiungere litografie e altre montagne."
};
  P.stations = Object.assign(P.stations || {}, {
  "acgenf": {
    "place": "Vevey e Ginevra · Inizi",
    "when": "1810–1839",
    "mapLabel": "Ginevra",
    "intro": [
      "Alexandre Calame nasce a Vevey il 28 maggio 1810. A Ginevra lavora prima in una banca, poi studia pittura con François Diday.",
      "Comincia con paesaggi dei dintorni e i primi soggetti di montagna."
    ]
  },
  "acberg": {
    "place": "Tra le montagne",
    "when": "1840–1845",
    "mapLabel": "Grimsel",
    "intro": [
      "Dal 1839 Calame riceve medaglie al Salon di Parigi. Viaggia nel Vallese e nell’Oberland bernese.",
      "Roccia, acqua e tempo diventano i suoi grandi temi."
    ]
  },
  "acsturm": {
    "place": "Tempesta e vetta",
    "when": "1846–1850",
    "mapLabel": "Oberland",
    "intro": [
      "Tra il 1846 e il 1850 nascono i drammatici quadri di montagna di Calame. Temporali, torrenti e vette ripide riempiono le tele.",
      "Molti suoi allievi e acquirenti arrivano a Ginevra da tutta Europa."
    ]
  },
  "acseen": {
    "place": "I laghi",
    "when": "1849–1856",
    "mapLabel": "Laghi",
    "intro": [
      "Accanto alle vette, Calame dipinge i grandi laghi svizzeri: Ginevra, Thun e Lucerna.",
      "Qui la sua pittura diventa più chiara, quieta e ampia."
    ]
  },
  "acspaet": {
    "place": "Ultimi anni",
    "when": "1857–1864",
    "mapLabel": "Montreux",
    "intro": [
      "Negli ultimi anni Calame è spesso malato. Continua a dipingere montagne e laghi, con più calma di prima.",
      "Muore nel 1864 a Mentone, sulla Riviera francese."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "acswiss": {
    "text": [
      "Un paesaggio svizzero giovanile con acqua, rocce e alberi. Calame è ancora giovane e studia a Ginevra con François Diday.",
      "Il quadro appartiene oggi alla National Gallery of Art di Washington."
    ],
    "fact": "circa 1830. National Gallery of Art, Washington."
  },
  "acpaysage": {
    "text": [
      "Montagne, bosco e acqua in un formato verticale. Calame cerca già la grandezza della natura.",
      "Presto diventerà lui stesso il pittore alpino più noto di Ginevra."
    ],
    "fact": "1835. Collocazione non indicata."
  },
  "acvalais": {
    "text": [
      "Un edificio sull’acqua, circondato dalle ripide montagne del Vallese. Uomini e opere sembrano piccoli davanti al paesaggio.",
      "Calame viaggia ora regolarmente nelle Alpi per disegnare."
    ],
    "fact": "1840. Collezione privata."
  },
  "aceboul": {
    "text": [
      "Dopo un temporale, rocce e alberi giacciono sul pendio. Il cielo si rischiara lentamente.",
      "Calame mostra la forza della natura senza mettere persone nel quadro."
    ],
    "fact": "1841. Kunsthaus di Zurigo."
  },
  "acgrimsel": {
    "text": [
      "Una strada stretta porta tra roccia e acqua al passo del Grimsel. Le montagne si ergono spoglie e possenti.",
      "Il Grimsel è tra i soggetti prediletti di Calame nell’Oberland bernese."
    ],
    "fact": "circa 1842. Collezione privata."
  },
  "acchenes": {
    "text": [
      "Grandi querce stanno sulla riva, dietro si stende il lago di Thun con le montagne. L’albero diventa il protagonista.",
      "Calame unisce la vicinanza del bosco all’ampiezza delle Alpi."
    ],
    "fact": "1846. Collezione privata."
  },
  "actorrent": {
    "text": [
      "Un torrente di montagna precipita tra gli alberi, il vento piega i rami. Il temporale è vicinissimo.",
      "Quadri di tempesta come questo rendono Calame noto a Parigi e in tutta Europa."
    ],
    "fact": "1848. Collezione privata."
  },
  "acrosenlaui": {
    "text": [
      "Nella valle di Rosenlaui gli abeti stanno davanti a vette chiare e ghiacciai. Calame visitò spesso il luogo.",
      "Il quadro nasce in atelier da schizzi e ricordi."
    ],
    "fact": "1849. Collezione privata."
  },
  "acwetter": {
    "text": [
      "Il Wetterhorn si alza ripido sopra la valle, le nuvole girano intorno alla vetta. Davanti stanno abeti scuri.",
      "La montagna vicino a Grindelwald è tra i grandi soggetti della pittura svizzera."
    ],
    "fact": "1850. Collocazione non indicata."
  },
  "acleman": {
    "text": [
      "Il lago Lemano è quieto sotto un cielo chiaro. Dopo le tempeste dei monti, Calame mostra qui la calma.",
      "Ginevra e il suo lago restano la sua casa."
    ],
    "fact": "1849. Villa Vauban, Lussemburgo."
  },
  "acthun": {
    "text": [
      "Il lago di Thun brilla nella luce, le montagne si stagliano nitide all’orizzonte. Il quadro appartiene alla National Gallery di Londra.",
      "Negli anni 1850 i laghi di Calame diventano più chiari e quieti."
    ],
    "fact": "1854. National Gallery, Londra."
  },
  "acbrunnen": {
    "text": [
      "Rive ripide e acqua chiara sul lago dei Quattro Cantoni vicino a Brunnen. La luce sembra fresca.",
      "Il lago nel cuore della Svizzera è un soggetto importante per Calame."
    ],
    "fact": "1856. Kunsthaus di Zurigo."
  },
  "acrigi": {
    "text": [
      "Semplici baite di legno stanno in alto sul Rigi, dietro si apre il mondo delle montagne. Il quadro appartiene alla National Gallery di Londra.",
      "Negli ultimi anni Calame dipinge le Alpi in modo più quieto e vicino."
    ],
    "fact": "1861. National Gallery, Londra."
  },
  "acmontreux": {
    "text": [
      "All’estremità del lago Lemano le montagne si alzano sopra Montreux. L’acqua è quieta e ampia.",
      "È uno degli ultimi quadri prima della morte di Calame l’anno seguente."
    ],
    "fact": "1863. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
