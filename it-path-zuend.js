// v10.23 IT content for Robert Zünd’s life journey, Part 1 (1827–1909). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collezione privata",
  "Kunstmuseum Luzern": "Kunstmuseum di Lucerna",
  "Kunsthaus Zürich": "Kunsthaus di Zurigo",
  "Kunstmuseum Basel": "Kunstmuseum di Basilea",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York"
});
  P.works = Object.assign(P.works || {}, {
  "rzpilatus": {
    "title": "Il Pilatus da ovest",
    "museum": "Kunsthaus di Zurigo"
  },
  "rzvierwald": {
    "title": "Sera sul lago dei Quattro Cantoni",
    "museum": "Collezione privata"
  },
  "rzernte": {
    "title": "La mietitura",
    "museum": "Kunstmuseum di Basilea"
  },
  "rzbaeume": {
    "title": "Alberi",
    "museum": "Collezione privata"
  },
  "rzhirtenhof": {
    "title": "Fattoria svizzera (Hirtenhof)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rzsempach": {
    "title": "La cappella della battaglia di Sempach",
    "museum": "Kunsthaus di Zurigo"
  },
  "rzseesemp": {
    "title": "Il lago di Sempach",
    "museum": "Kunsthaus di Zurigo"
  },
  "rzeggen": {
    "title": "Contadini che erpicano con i buoi",
    "museum": "Collezione privata"
  },
  "rzkorn": {
    "title": "Campo di grano con querce",
    "museum": "Collezione privata"
  },
  "rzreuss": {
    "title": "La Reuss con il monastero di Rathausen",
    "museum": "Collezione privata"
  },
  "rzeichen": {
    "title": "Querceto",
    "museum": "Kunsthaus di Zurigo"
  },
  "rzbuchen": {
    "title": "Faggeta",
    "museum": "Kunstmuseum di Lucerna"
  },
  "rzschafe": {
    "title": "Paesaggio serale con gregge di pecore",
    "museum": "Kunsthaus di Zurigo"
  }
});
  P.paths = P.paths || {};
  P.paths.zuend = {
  "title": "Il percorso di vita di Robert Zünd",
  "life": "1827–1909",
  "part": "Parte 1 · Lucerna e la luce dei campi",
  "subtitle": "Laghi, campi e querceti",
  "intro": "Viaggia con Robert Zünd, il paesaggista di Lucerna: dagli anni di studio a Ginevra, attraverso i campi e i laghi della Svizzera centrale, fino ai grandi boschi di querce e faggi. Brevi tappe e quadri da colorare. Questa prima parte segue il suo cammino nel paesaggio.",
  "ending": [
    "Robert Zünd muore a Lucerna il 15 gennaio 1909. Per tutta la vita ha dipinto il paesaggio della sua terra con grande pazienza.",
    "Il percorso può ancora crescere. Altri campi, boschi e paesaggi biblici potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 15 gennaio 1909 Zünd muore a Lucerna. Una parte successiva potrà aggiungere altri boschi e campi."
};
  P.stations = Object.assign(P.stations || {}, {
  "rzjung": {
    "place": "Lucerna e Ginevra · Apprendistato",
    "when": "1827–1851",
    "mapLabel": "Lucerna",
    "intro": [
      "Robert Zünd nasce a Lucerna il 3 maggio 1827. Dal 1848 studia a Ginevra con François Diday e Alexandre Calame.",
      "Nel 1851 dipinge il Pilatus e il lago dei Quattro Cantoni, il paesaggio delle sue origini."
    ]
  },
  "rzfeld": {
    "place": "Campi e alberi",
    "when": "1852–1865",
    "mapLabel": "Campi",
    "intro": [
      "Dopo un soggiorno a Parigi, Zünd torna a Lucerna e vi resta. Dipinge campi, fattorie e alberi isolati.",
      "Con «La mietitura» del 1860 trova il suo stile preciso."
    ]
  },
  "rzsemp": {
    "place": "Sempach e la regione dei laghi",
    "when": "1860–1875",
    "mapLabel": "Sempach",
    "intro": [
      "A nord di Lucerna si trovano il lago di Sempach e i campi dell’Altopiano svizzero. Zünd dipinge la cappella, il lago e il lavoro dei campi.",
      "Lavora con lentezza e cura, spesso per anni su un solo soggetto."
    ]
  },
  "rzwald": {
    "place": "I grandi boschi",
    "when": "1880–1890",
    "mapLabel": "Boschi",
    "intro": [
      "Negli anni 1880 nascono i famosi quadri di bosco di Zünd. Querce e faggi diventano i protagonisti.",
      "La luce cade tra le foglie e ordina tutto lo spazio."
    ]
  },
  "rzspaet": {
    "place": "Sera sulla Reuss",
    "when": "1889–1909",
    "mapLabel": "Reuss",
    "intro": [
      "Negli ultimi anni Zünd dipinge sere più morbide, greggi e il fiume a valle di Lucerna.",
      "Resta fino alla fine nella sua città e con il suo paesaggio."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rzpilatus": {
    "text": [
      "Il Pilatus si alza sopra prati e boschi, la luce è chiara e quieta. Zünd ha circa venticinque anni e dipinge la montagna di Lucerna.",
      "Già in questo quadro giovanile si vede la sua calma davanti alla natura."
    ],
    "fact": "1851. Kunsthaus di Zurigo."
  },
  "rzvierwald": {
    "text": [
      "La sera si posa sul lago dei Quattro Cantoni, l’acqua riflette il cielo. Zünd dipinge il quadro nello stesso anno del Pilatus.",
      "Il lago davanti a casa resta uno dei suoi grandi temi."
    ],
    "fact": "1851. Collezione privata."
  },
  "rzernte": {
    "text": [
      "Un campo di grano dorato, gente alla mietitura, sopra un ampio cielo estivo. Il quadro del 1860 è tra le opere più note di Zünd.",
      "Ogni spiga e ogni albero sono dipinti con grande cura."
    ],
    "fact": "1860. Kunstmuseum di Basilea."
  },
  "rzbaeume": {
    "text": [
      "Un gruppo di alberi alti sta nella luce, il fogliame fitto e vivo. Zünd studia gli alberi più e più volte, quasi come ritratti.",
      "Da studi così nasceranno poi i suoi grandi quadri di bosco."
    ],
    "fact": "1865. Collezione privata."
  },
  "rzhirtenhof": {
    "text": [
      "Una fattoria sta tra alberi e prati, quieta e abitata. Il quadro appartiene oggi al Metropolitan Museum di New York.",
      "Zünd mostra la vita rurale senza aneddoto, tutta luce e ordine."
    ],
    "fact": "senza data. Metropolitan Museum of Art, New York."
  },
  "rzsempach": {
    "text": [
      "La piccola cappella vicino a Sempach sta in un paesaggio pacifico. Ricorda la battaglia del 1386.",
      "Zünd dipinge il luogo non come storia, ma come presenza quieta."
    ],
    "fact": "1866. Kunsthaus di Zurigo."
  },
  "rzseesemp": {
    "text": [
      "Il lago di Sempach si stende piatto e chiaro tra le colline. Acqua e cielo si dividono il quadro.",
      "Zünd trova i suoi soggetti quasi sempre a poche ore da Lucerna."
    ],
    "fact": "circa 1860. Kunsthaus di Zurigo."
  },
  "rzeggen": {
    "text": [
      "Dei contadini tirano l’erpice sul campo con i buoi. Il lavoro è lento, la terra ampia.",
      "Zünd dipinge il ritmo dell’anno contadino con grande precisione."
    ],
    "fact": "1868. Collezione privata."
  },
  "rzkorn": {
    "text": [
      "Alte querce stanno al margine di un campo di grano maturo. Luce e ombra si alternano con calma.",
      "Campo e albero, due soggetti prediletti di Zünd, si incontrano in questo quadro."
    ],
    "fact": "1875. Collezione privata."
  },
  "rzreuss": {
    "text": [
      "La Reuss scorre quieta accanto al monastero di Rathausen, a valle di Lucerna. Rive e alberi si specchiano nell’acqua.",
      "Il fiume unisce il lago alla terra che Zünd ha dipinto tanto spesso."
    ],
    "fact": "prima del 1909. Collezione privata."
  },
  "rzeichen": {
    "text": [
      "Vecchie querce formano un bosco luminoso, la luce cade sul sentiero e sulla radura. Il quadro appartiene al Kunsthaus di Zurigo.",
      "Zünd dipinge ogni foglia, eppure l’insieme resta quieto e ampio."
    ],
    "fact": "1882. Kunsthaus di Zurigo."
  },
  "rzbuchen": {
    "text": [
      "Lisci tronchi di faggio stanno fitti, la luce diventa verde e dorata. Il quadro si trova al Kunstmuseum di Lucerna.",
      "Nel bosco Zünd trova insieme silenzio e ordine."
    ],
    "fact": "1886–1887. Kunstmuseum di Lucerna."
  },
  "rzschafe": {
    "text": [
      "Un gregge di pecore attraversa la sera un paesaggio quieto. La luce calda si stende bassa sulla terra.",
      "Negli ultimi anni i quadri di Zünd diventano più morbidi e quieti."
    ],
    "fact": "1889–1891. Kunsthaus di Zurigo."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
