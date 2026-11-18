// v10.21 IT content for Félix Vallotton’s life journey, Part 1 (1865–1925). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "MuMA, Le Havre": "MuMA, Le Havre",
  "Privatsammlung": "Collezione privata",
  "Musée Toulouse-Lautrec, Albi": "Musée Toulouse-Lautrec, Albi",
  "Kunsthaus Zürich": "Kunsthaus di Zurigo",
  "Baltimore Museum of Art": "Baltimore Museum of Art",
  "Musée cantonal des Beaux-Arts, Lausanne": "Musée cantonal des Beaux-Arts, Losanna",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Parigi"
});
  P.works = Object.assign(P.works || {}, {
  "fvmother": {
    "title": "La madre dell’artista",
    "museum": "Musée cantonal des Beaux-Arts, Losanna"
  },
  "fvbrother": {
    "title": "Paul Vallotton, il fratello dell’artista",
    "museum": "Collezione privata"
  },
  "fvvalse": {
    "title": "Il valzer",
    "museum": "MuMA, Le Havre"
  },
  "fvmensonge": {
    "title": "La menzogna",
    "museum": "Baltimore Museum of Art"
  },
  "fvpiano": {
    "title": "Madame Vallotton al pianoforte",
    "museum": "Musée Toulouse-Lautrec, Albi"
  },
  "ballon": {
    "title": "Il pallone",
    "museum": "Musée d’Orsay, Parigi"
  },
  "fvredback": {
    "title": "Interno con donna in rosso, di spalle",
    "museum": "Kunsthaus di Zurigo"
  },
  "fvhonfleur": {
    "title": "Honfleur, mattino d’estate",
    "museum": "Collezione privata"
  },
  "fvsunset": {
    "title": "Tramonto a Villerville",
    "museum": "Kunsthaus di Zurigo"
  },
  "fvchemin": {
    "title": "Sentiero soleggiato",
    "museum": "Collezione privata"
  },
  "fvself": {
    "title": "Autoritratto",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.vallotton = {
  "title": "Il percorso di vita di Félix Vallotton",
  "life": "1865–1925",
  "part": "Parte 1 · Da Losanna a Honfleur",
  "subtitle": "I Nabis, gli interni e la luce della Normandia",
  "intro": "Viaggia con Félix Vallotton, il pittore di Losanna che a Parigi entra tra i Nabis: dai ritratti giovanili, attraverso gli interni nitidi e «Il pallone», fino ai paesaggi di Honfleur. Brevi tappe e quadri da colorare. Questa prima parte arriva fino agli anni tardi.",
  "ending": [
    "Vallotton muore a Parigi il 29 dicembre 1925, il giorno dopo il suo sessantesimo compleanno. Resta legato tanto al canton Vaud quanto alla Francia.",
    "Il percorso può ancora crescere. Xilografie, altre nature morte e i paesaggi tardi del Midi potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 29 dicembre 1925 Vallotton muore a Parigi, a sessant’anni. Una parte successiva potrà aggiungere xilografie e altre nature morte."
};
  P.stations = Object.assign(P.stations || {}, {
  "fvlausanne": {
    "place": "Losanna · Origini",
    "when": "1865–1886",
    "mapLabel": "Losanna",
    "intro": [
      "Félix Vallotton nasce a Losanna il 28 dicembre 1865. Nel 1882 va a Parigi, all’Académie Julian, e resta legato insieme alla città e al canton Vaud.",
      "I ritratti giovanili della madre e del fratello mostrano con quanta esattezza, già da giovane pittore, si siede di fronte a una persona."
    ]
  },
  "fvnabis": {
    "place": "Parigi · I Nabis",
    "when": "1893–1899",
    "mapLabel": "Parigi",
    "intro": [
      "A Parigi Vallotton entra tra i Nabis, accanto a Bonnard e Vuillard. Si fa conoscere anche per le xilografie in bianco e nero, ma continua a dipingere a olio, con piani netti e un taglio fermo.",
      "Nel 1899 sposa Gabrielle Rodrigues-Henriques e resta legato alla galleria Bernheim-Jeune. Nel 1900 assume la cittadinanza francese."
    ]
  },
  "fvinterieur": {
    "place": "Interni",
    "when": "1893–1905",
    "mapLabel": "Interno",
    "intro": [
      "Negli stessi anni Vallotton dipinge interni in cui il colore e l’atteggiamento dicono più di un racconto. Gli bastano il rosso, l’ombra e la schiena di una donna seduta.",
      "Gli interni sono vicini alle sue xilografie: poco dettaglio, un taglio fermo, uno sguardo freddo sul quotidiano."
    ]
  },
  "fvhonfleur": {
    "place": "Honfleur e la costa",
    "when": "1901–1917",
    "mapLabel": "Honfleur",
    "intro": [
      "Già nel 1901 Vallotton dipinge il porto di Honfleur di notte. Dal 1909 ha là una casa; la costa normanna diventa il suo secondo atelier.",
      "Mattini d’estate, sentieri al sole e tramonti tardi: egli ordina la luce in fasce quiete e ferme."
    ]
  },
  "fvlate": {
    "place": "Anni tardi",
    "when": "1914–1925",
    "mapLabel": "Parigi",
    "intro": [
      "Nel 1914 nasce un autoritratto fermo. Negli anni tardi Vallotton si volge anche alla natura morta, nitida e senza passaggi morbidi.",
      "Muore a Parigi il 29 dicembre 1925. Una parte successiva potrà aggiungere xilografie e altri quadri."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "fvmother": {
    "text": [
      "Il ritratto giovanile mostra la madre di Vallotton in un’osservazione quieta e precisa. Il giovane pittore di Losanna cerca ancora il suo tono, ma lo sguardo è già fermo.",
      "Nel 1882 è andato a Parigi, all’Académie Julian. Il quadro del 1884 tiene fermo il legame con la famiglia."
    ],
    "fact": "1884. Musée cantonal des Beaux-Arts, Losanna."
  },
  "fvbrother": {
    "text": [
      "Il fratello minore posa per Félix. Il ritratto è semplice e vicino, senza gran pathos, ancora in un tono d’atelier più scuro.",
      "I fratelli restano legati, anche quando Félix si afferma a Parigi. Più tardi Paul lavora a Losanna come mercante d’arte."
    ],
    "fact": "1886. Collezione privata."
  },
  "fvvalse": {
    "text": [
      "Le coppie ruotano nel valzer, i vestiti diventano campi di colore in movimento. Vallotton semplifica la scena finché restano il ritmo e la luce.",
      "Il quadro del 1893 nasce vicino ai Nabis. Il taglio ricorda già le sue xilografie: netto, fermo, senza dettaglio di troppo."
    ],
    "fact": "1893. MuMA, Le Havre."
  },
  "fvmensonge": {
    "text": [
      "Una coppia in un interno, vicina, il gesto ambiguo. Vallotton dà alla scena un taglio freddo, quasi tagliente.",
      "Il quadro del 1898 appartiene agli interni in cui mostra insieme la vicinanza e la distanza. Nulla è lasciato al caso."
    ],
    "fact": "1898. Baltimore Museum of Art."
  },
  "fvpiano": {
    "text": [
      "Gabrielle è seduta al pianoforte, la schiena un poco china, la stanza in piani di colore quieti. Vallotton la sposa nel 1899, lo stesso anno del quadro.",
      "Attraverso di lei è legato alla galleria Bernheim-Jeune. L’interno resta freddo e attento, senza pathos privato."
    ],
    "fact": "1899. Musée Toulouse-Lautrec, Albi."
  },
  "ballon": {
    "text": [
      "Dall’alto si vede un bambino in un parco correre dietro a un pallone rosso. Due piccole figure stanno all’ombra degli alberi.",
      "Vallotton dipinse la scena nel 1899, probabilmente alle Tuileries. Il piano è netto, l’ombra tagliente, lo sguardo quasi da xilografia."
    ],
    "fact": "1899. Musée d’Orsay, Parigi."
  },
  "fvredback": {
    "text": [
      "Una donna in rosso è seduta di spalle a chi guarda; la poltrona e il muro sono grandi piani quieti. Vallotton lascia da parte il viso.",
      "Il quadro del Kunsthaus di Zurigo appartiene agli interni silenziosi in cui l’atteggiamento e il colore dicono più di un’azione."
    ],
    "fact": "1903. Kunsthaus di Zurigo."
  },
  "fvhonfleur": {
    "text": [
      "Un mattino d’estate su Honfleur, la luce posata in quiete sull’acqua e sulle case. Vallotton semplifica la città fino a farne un paesaggio netto.",
      "Dal 1909 ha là una casa. La costa normanna diventa per anni il suo altro atelier, accanto a Parigi."
    ],
    "fact": "circa 1910. Collezione privata."
  },
  "fvsunset": {
    "text": [
      "Il cielo sopra Villerville arde in fasce orizzontali di colore, il mare resta pesante e scuro. Vallotton ordina il tramonto come un rilievo.",
      "Il quadro del Kunsthaus di Zurigo appartiene ai paesaggi costieri tardi in cui la luce stessa diventa il soggetto."
    ],
    "fact": "circa 1917. Kunsthaus di Zurigo."
  },
  "fvchemin": {
    "text": [
      "Un sentiero è in una luce di sole dura, le ombre corte e ferme. Vallotton dipinge il calore senza passaggi morbidi.",
      "Il quadro del 1914 cade negli anni di guerra, ma resta un paesaggio d’ordine: luce, sentiero, il bordo degli alberi."
    ],
    "fact": "1914. Collezione privata."
  },
  "fvself": {
    "text": [
      "Nel 1914 Vallotton si guarda con fermezza e senza ornamento. Il viso è tagliato con nitidezza, lo sfondo è quieto.",
      "È ormai cittadino francese e un pittore noto della generazione Nabi. Il ritratto resta sobrio, quasi austero."
    ],
    "fact": "1914. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
