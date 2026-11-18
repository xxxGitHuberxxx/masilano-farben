// v10.21 IT content for Giovanni Segantini’s life journey, Part 1 (1858–1899). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Bündner Kunstmuseum, Chur": "Bündner Kunstmuseum, Coira",
  "Nationalgalerie, Prag": "Galleria nazionale, Praga",
  "Privatsammlung": "Collezione privata",
  "Museo del Paesaggio, Novara": "Museo del Paesaggio, Novara",
  "Segantini Museum, St. Moritz": "Museo Segantini, St. Moritz",
  "Kunsthaus Zürich": "Kunsthaus di Zurigo",
  "Neue Pinakothek, München": "Neue Pinakothek, Monaco",
  "Galleria Civica G. Segantini, Arco": "Galleria Civica G. Segantini, Arco"
});
  P.works = Object.assign(P.works || {}, {
  "sgself80": {
    "title": "Autoritratto all’età di vent’anni",
    "museum": "Collezione privata"
  },
  "sgbrianza": {
    "title": "Paesaggio brianteo",
    "museum": "Galleria Civica G. Segantini, Arco"
  },
  "avemaria": {
    "title": "Ave Maria a trasbordo",
    "museum": "Museo Segantini, St. Moritz"
  },
  "sgstanga": {
    "title": "Alla stanga · Sera al pascolo",
    "museum": "Galleria nazionale, Praga"
  },
  "sgmadri": {
    "title": "Le due madri",
    "museum": "Bündner Kunstmuseum, Coira"
  },
  "sgcalza": {
    "title": "Ragazza che fa la calza",
    "museum": "Kunsthaus di Zurigo"
  },
  "sgpfluegen": {
    "title": "L’aratura",
    "museum": "Neue Pinakothek, Monaco"
  },
  "sgsavognin": {
    "title": "Savognino d’inverno",
    "museum": "Museo del Paesaggio, Novara"
  },
  "segantini": {
    "title": "Mezzogiorno sulle Alpi",
    "museum": "Museo Segantini, St. Moritz"
  },
  "sgpasture": {
    "title": "Pascoli alpini",
    "museum": "Kunsthaus di Zurigo"
  },
  "sgmessa": {
    "title": "A messa ultima",
    "museum": "Galleria Civica G. Segantini, Arco"
  },
  "sgcavalli": {
    "title": "Cavalli al guado",
    "museum": "Collezione privata"
  },
  "sgnature": {
    "title": "La natura",
    "museum": "Museo Segantini, St. Moritz"
  }
});
  P.paths = P.paths || {};
  P.paths.segantini = {
  "title": "Il percorso di vita di Giovanni Segantini",
  "life": "1858–1899",
  "part": "Parte 1 · Da Arco a Maloja",
  "subtitle": "Giovinezza, la Brianza, Savognin e le Alpi alte",
  "intro": "Viaggia con Giovanni Segantini, il pittore della luce alpina: da una giovinezza difficile ad Arco e a Milano, attraverso gli anni nella Brianza e la scoperta dei Grigioni, fino ai grandi dipinti divisionisti di Savognin e Maloja. Brevi tappe e quadri da colorare. Questa prima parte segue il cammino fino al trittico alpino incompiuto.",
  "ending": [
    "Nel settembre 1899 Segantini muore per una malattia sullo Schafberg, sopra Pontresina. Ha quarantuno anni e viene sepolto a Maloja.",
    "Il percorso può ancora crescere. Disegni, altri dipinti alpini e la storia del suo atelier al passo del Maloja potranno seguire in una parte successiva."
  ],
  "epilogue": "Nel settembre 1899 Segantini muore sullo Schafberg, a quarantuno anni. Una parte successiva potrà aggiungere disegni e altri dipinti alpini."
};
  P.stations = Object.assign(P.stations || {}, {
  "sgarco": {
    "place": "Arco e Milano · Giovinezza",
    "when": "1858–1881",
    "mapLabel": "Arco",
    "intro": [
      "Giovanni Segantini nasce il 15 gennaio 1858 ad Arco, allora nella monarchia austriaca, oggi in Trentino. La madre muore presto; il padre porta il ragazzo a Milano e scompare dalla sua vita.",
      "Senza una famiglia stabile, Segantini viene messo nell’istituto Marchiondi. Più tardi disegna e dipinge all’Accademia di Brera. Fin da giovane cerca un appoggio nel lavoro."
    ]
  },
  "sgbrianza": {
    "place": "Nella Brianza",
    "when": "1881–1886",
    "mapLabel": "Brianza",
    "intro": [
      "Con Luigia Bugatti, detta Bice, Segantini vive in villaggi della Brianza, a nord di Milano. Le colline, i laghi e le cascine diventano i suoi primi paesaggi propri.",
      "Non possono sposarsi in comune, perché a Segantini mancano i documenti. Bice resta tuttavia la sua compagna e il centro della famiglia."
    ]
  },
  "sgsavognin": {
    "place": "Savognin · Sera e lavoro",
    "when": "1886–1890",
    "mapLabel": "Savognin",
    "intro": [
      "Nel 1886 la famiglia si trasferisce a Savognin, nei Grigioni. L’altitudine, la luce e il lavoro contadino trasformano la pittura di Segantini.",
      "Egli sviluppa il divisionismo: colori puri in sottili tratti giustapposti che, da lontano, cominciano a splendere."
    ]
  },
  "sgmittag": {
    "place": "Mezzogiorno sulle Alpi",
    "when": "1891–1894",
    "mapLabel": "Alpi",
    "intro": [
      "A Savognin nascono i celebri dipinti degli alti pascoli, tra cui «Mezzogiorno sulle Alpi». Segantini dipinge spesso all’aperto, anche al freddo.",
      "La fama arriva ormai a Parigi e alle Secessioni europee. Nel 1894 la famiglia va oltre, seguendo la luce, a Maloja."
    ]
  },
  "sgmaloja": {
    "place": "Maloja · La natura",
    "when": "1894–1899",
    "mapLabel": "Maloja",
    "intro": [
      "Al passo del Maloja Segantini allestisce il suo atelier. Progetta un grande trittico alpino per l’Esposizione universale di Parigi.",
      "«La natura» resta il cuore di questo piano. Nel settembre 1899, sullo Schafberg, il lavoro si interrompe."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sgself80": {
    "text": [
      "L’autoritratto mostra Segantini a circa vent’anni, fermo, quasi severo, dallo sguardo scuro. Gli anni più duri a Milano sono alle spalle.",
      "Il quadro nasce intorno al 1879-80, dopo il periodo all’Accademia di Brera. Già qui sembra più vecchio dei suoi anni."
    ],
    "fact": "1879–1880. Collezione privata."
  },
  "sgbrianza": {
    "text": [
      "Colline, sentieri e cascine della Brianza in una luce quieta. È uno dei paesaggi giovanili in cui Segantini osserva da vicino la campagna lombarda.",
      "Il tratto è ancora più morbido, meno spezzato che più tardi in montagna. La Brianza resta la sua scuola prima delle Alpi."
    ],
    "fact": "1884–1885. Galleria Civica G. Segantini, Arco."
  },
  "avemaria": {
    "text": [
      "Un pastore e una donna scivolano in barca su un lago fermo, la pecora a prua. In questo momento congiungono le mani per l’Ave Maria.",
      "Segantini dipinse il soggetto due volte. Questa versione del 1886, già nata in montagna, gli valse una medaglia d’oro a Parigi."
    ],
    "fact": "1886. Museo Segantini, St. Moritz."
  },
  "sgstanga": {
    "text": [
      "Le mucche sono legate alla stanga nel pascolo, mentre la sera scende sul paese. Questa versione, alla Galleria nazionale di Praga, appartiene ai primi anni a Savognin.",
      "Gli animali sono pesanti e vicini, il cielo già fresco. Qui Segantini trova la quieta grandezza che contraddistingue i suoi dipinti alpini."
    ],
    "fact": "1886–1888. Galleria nazionale, Praga."
  },
  "sgmadri": {
    "text": [
      "Una madre porta il suo bambino su un sentiero di montagna; una pecora e un agnello la seguono. Dietro, le cime stanno nella luce.",
      "Segantini inizia il quadro nel 1899 a Maloja; dopo la sua morte lo termina Giovanni Giacometti. È conservato al Bündner Kunstmuseum di Coira."
    ],
    "fact": "1899–1900. Bündner Kunstmuseum, Coira."
  },
  "sgcalza": {
    "text": [
      "Una ragazza è seduta e lavora a maglia, assorta nel lavoro semplice. Segantini osserva il gesto con esattezza, senza farne un aneddoto.",
      "Il quadro appartiene al Kunsthaus di Zurigo. Mostra quanto gli fossero vicini gli abitanti del suo villaggio."
    ],
    "fact": "1888. Kunsthaus di Zurigo."
  },
  "sgpfluegen": {
    "text": [
      "Un contadino ara il pendio, i buoi tirano, la terra si apre. Il quadro è una delle opere maggiori degli anni di Savognin.",
      "Il lavoro è faticoso e solenne insieme. Segantini non lo dipinge come genere, ma come parte dell’ordine alpino."
    ],
    "fact": "1890. Neue Pinakothek, Monaco."
  },
  "sgsavognin": {
    "text": [
      "Savognin in inverno: il villaggio è sotto la neve, l’aria è chiara e fredda. Segantini fissa il silenzio della stagione, non un motivo pittoresco.",
      "In quadri come questo l’altitudine stessa diventa il tema. La luce viene dall’alto e resta a lungo nel bianco."
    ],
    "fact": "circa 1890. Museo del Paesaggio, Novara."
  },
  "segantini": {
    "text": [
      "Una pastora si copre gli occhi dal sole di mezzogiorno, intorno a lei pecore e prati di montagna. La luce cade a piombo, le ombre sono corte.",
      "Segantini dipinse il quadro nel 1891 a Savognin. I tratti di colore puro fanno apparire l’altitudine particolarmente chiara."
    ],
    "fact": "1891. Museo Segantini, St. Moritz."
  },
  "sgpasture": {
    "text": [
      "Ampia erba alpina, animali, un cielo alto. Il quadro raccoglie la quieta vastità delle alture grigionesi.",
      "È conservato al Kunsthaus di Zurigo e segna il passaggio dagli anni di Savognin a Maloja."
    ],
    "fact": "circa 1893. Kunsthaus di Zurigo."
  },
  "sgmessa": {
    "text": [
      "La gente va a messa, in un movimento quieto, quasi solenne. Il soggetto appartiene ancora al tempo lombardo e ai primi anni grigionesi.",
      "Segantini unisce la vita quotidiana del villaggio a una devozione silenziosa, senza fare del quadro una scena."
    ],
    "fact": "1886–1887. Galleria Civica G. Segantini, Arco."
  },
  "sgcavalli": {
    "text": [
      "I cavalli attraversano un tratto basso dell’acqua, la luce sui fianchi e sulla superficie. È un soggetto giovanile, osservato con esattezza.",
      "Ancora esercitato in pianura, Segantini rivolgerà più tardi la stessa attenzione agli animali delle Alpi."
    ],
    "fact": "circa 1882. Collezione privata."
  },
  "sgnature": {
    "text": [
      "«La natura» è la tavola centrale del previsto trittico alpino: una pastora in un alto paesaggio aperto, sotto un cielo ampio.",
      "Segantini vi lavora negli ultimi anni di vita. Il quadro resta la testimonianza più matura della sua pittura alpina."
    ],
    "fact": "1897–1899. Museo Segantini, St. Moritz."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
