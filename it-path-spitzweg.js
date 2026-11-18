// v10.21 IT content for Carl Spitzweg’s life journey, Part 1 (1808–1885). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Grohmann Museum, Milwaukee": "Grohmann Museum, Milwaukee",
  "Privatsammlung": "Collezione privata",
  "Neue Pinakothek, München": "Neue Pinakothek, Monaco"
});
  P.works = Object.assign(P.works || {}, {
  "csself": {
    "title": "Autoritratto",
    "museum": "Collezione privata"
  },
  "cspoet": {
    "title": "Il povero poeta",
    "museum": "Neue Pinakothek, Monaco"
  },
  "csgarret": {
    "title": "La soffitta",
    "museum": "Collezione privata"
  },
  "csalchem": {
    "title": "L’alchimista",
    "museum": "Grohmann Museum, Milwaukee"
  },
  "csbutterfly": {
    "title": "Il cacciatore di farfalle",
    "museum": "Collezione privata"
  },
  "csbook": {
    "title": "Il topo di biblioteca",
    "museum": "Grohmann Museum, Milwaukee"
  },
  "cscactus": {
    "title": "L’amico dei cactus",
    "museum": "Collezione privata"
  },
  "csastro": {
    "title": "L’astronomo",
    "museum": "Collezione privata"
  },
  "csflowers": {
    "title": "L’amico dei fiori",
    "museum": "Collezione privata"
  },
  "csangler": {
    "title": "Il pescatore",
    "museum": "Collezione privata"
  },
  "cspost": {
    "title": "Il postino nel Rosenthal",
    "museum": "Collezione privata"
  },
  "cswatch": {
    "title": "Il guardiano notturno addormentato",
    "museum": "Collezione privata"
  },
  "csmonks": {
    "title": "Monaci in disputa",
    "museum": "Collezione privata"
  },
  "cssunday": {
    "title": "La passeggiata della domenica",
    "museum": "Collezione privata"
  },
  "cschurch": {
    "title": "Il cammino verso la chiesa",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.spitzweg = {
  "title": "Il percorso di vita di Carl Spitzweg",
  "life": "1808–1885",
  "part": "Parte 1 · Monaco e gli originali",
  "subtitle": "Da farmacista a pittore del Biedermeier",
  "intro": "Viaggia con Carl Spitzweg, il pittore di Monaco che cominciò come farmacista: dalle soffitte del povero poeta, attraverso i topi di biblioteca, gli amici dei cactus e i guardiani notturni, fino alla passeggiata della domenica. Brevi tappe e quadri da colorare. Questa prima parte segue i noti dipinti di genere.",
  "ending": [
    "Spitzweg muore a Monaco il 23 settembre 1885. Resta celibe e fedele al suo umorismo quieto e preciso.",
    "Il percorso può ancora crescere. Altri viaggi, paesaggi e dipinti di genere tardi potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 23 settembre 1885 Spitzweg muore a Monaco. Una parte successiva potrà aggiungere altri paesaggi e dipinti di genere."
};
  P.stations = Object.assign(P.stations || {}, {
  "csmuc": {
    "place": "Monaco · Il farmacista diventa pittore",
    "when": "1808–1842",
    "mapLabel": "Monaco",
    "intro": [
      "Carl Spitzweg nasce a Monaco il 5 febbraio 1808 e dapprima è farmacista. Dopo una malattia nei primi anni 1830 si volge con fermezza alla pittura.",
      "L’autoritratto del circa 1842 lo mostra già come pittore. La città resta il suo luogo, anche quando i soggetti stanno spesso fuori le mura."
    ]
  },
  "csdach": {
    "place": "Soffitte",
    "when": "1837–1842",
    "mapLabel": "Soffitta",
    "intro": [
      "Alla fine degli anni 1830 nascono i dipinti di soffitta, tra cui «Il povero poeta» del 1839. Spitzweg trova qui il suo tono: esatto, quieto, senza malizia.",
      "La strettezza sotto il tetto diventa uno sguardo su una sola vita. Monaco si riconosce in queste stanze."
    ]
  },
  "cssond": {
    "place": "Originali",
    "when": "1837–1860",
    "mapLabel": "Originali",
    "intro": [
      "Alchimista, cacciatore di farfalle, topo di biblioteca, amico dei cactus, astronomo, amante dei fiori: Spitzweg inventa una galleria di solitari assorbiti.",
      "L’umorismo sta nell’esattezza. Nessuno di questi uomini è ridotto a una caricatura."
    ]
  },
  "csstadt": {
    "place": "Città e ronda",
    "when": "1850–1860",
    "mapLabel": "Città",
    "intro": [
      "Postino, guardiano addormentato, monaci in disputa, un pescatore presso l’acqua: Spitzweg vede il quotidiano della città e dei suoi margini.",
      "La figura resta sola, il luogo è esatto. Sono commedie quiete, senza una grande battuta finale."
    ]
  },
  "cssonntag": {
    "place": "Domenica in Baviera",
    "when": "1841–1860",
    "mapLabel": "Domenica",
    "intro": [
      "La passeggiata della domenica e il cammino verso la chiesa uniscono società e paesaggio. Spitzweg conosce il rito borghese e l’ampia natura bavarese.",
      "Muore a Monaco il 23 settembre 1885. Una parte successiva potrà aggiungere viaggi e altri paesaggi."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "csself": {
    "text": [
      "L’autoritratto del circa 1842 mostra Spitzweg come giovane pittore, la farmacia già alle spalle. Lo sguardo è aperto, quasi lieto, senza posa.",
      "Si è formato da solo alla pittura, dopo una malattia nei primi anni 1830. Monaco resta il suo luogo."
    ],
    "fact": "circa 1842. Collezione privata."
  },
  "cspoet": {
    "text": [
      "Sotto il tetto il poeta è disteso a letto, con lo spicchio di un ombrello sopra di sé e manoscritti intorno. Il quadro del 1839 è l’opera più nota di Spitzweg.",
      "È conservato alla Neue Pinakothek di Monaco. L’umorismo è quieto e preciso: la strettezza non è derisa, è guardata."
    ],
    "fact": "1839. Neue Pinakothek, Monaco."
  },
  "csgarret": {
    "text": [
      "Una stanzetta sotto il tetto, scarsamente ammobiliata, la finestra come sola ampiezza. Spitzweg torna sempre di nuovo a questo luogo.",
      "La soffitta non è solo un soggetto, ma un punto di vista: dall’alto sulla città, eppure molto vicina a una sola vita."
    ],
    "fact": "circa 1840. Collezione privata."
  },
  "csalchem": {
    "text": [
      "In una stanza stretta l’alchimista lavora a storte e fornello. Il quadro del 1837 mostra già lo sguardo di Spitzweg sull’originale assorto.",
      "La scienza è qui una passione quieta, quasi una commedia, ma senza malizia."
    ],
    "fact": "1837. Grohmann Museum, Milwaukee."
  },
  "csbutterfly": {
    "text": [
      "Un uomo con il retino va dietro alla farfalla, tutto preso, un poco comico e molto serio. Spitzweg ama questi collezionisti assorbiti.",
      "Il soggetto del circa 1840 appartiene ai quadri lieti degli anni di Monaco. Il paesaggio resta una cornice silenziosa."
    ],
    "fact": "circa 1840. Collezione privata."
  },
  "csbook": {
    "text": [
      "In alto sulla scala il lettore sta tra gli scaffali, un libro in mano, uno sotto il braccio, uno tra le ginocchia. Il mondo è la biblioteca.",
      "Il quadro del circa 1850 è una delle invenzioni più celebri di Spitzweg. L’umorismo sta nell’esattezza, non nell’esagerazione."
    ],
    "fact": "circa 1850. Grohmann Museum, Milwaukee."
  },
  "cscactus": {
    "text": [
      "Un uomo osserva il suo cactus, da vicino, quasi con rispetto, come se la pianta fosse un interlocutore. Spitzweg conosce la passione quieta del collezionista.",
      "Il quadro di metà secolo è uno dei suoi originali più affettuosi. Nulla è preso in giro."
    ],
    "fact": "circa 1856. Collezione privata."
  },
  "csastro": {
    "text": [
      "Uno studioso guarda il cielo, lo strumento pronto, il mondo di sotto lontano. Spitzweg mette la figura assorta all’aperto.",
      "Il quadro del circa 1860 resta una scena di genere e diventa tuttavia un paesaggio silenzioso. L’umorismo sta nella serietà dell’atteggiamento."
    ],
    "fact": "circa 1860. Collezione privata."
  },
  "csflowers": {
    "text": [
      "Un uomo sta davanti ai suoi fiori, attento, quasi raccolto. Spitzweg dà alla piccola gioia la stessa serietà che al povero poeta.",
      "I dipinti di giardino appartengono pienamente alla sua opera. Il verde è esatto, la figura resta umana e vicina."
    ],
    "fact": "circa 1855. Collezione privata."
  },
  "csangler": {
    "text": [
      "Presso l’acqua è seduto il pescatore, paziente e solo. Spitzweg lascia il paesaggio ampio, la figura piccola, il tempo lento.",
      "È un quadro silenzioso dell’attesa. L’umorismo, se c’è, resta sotto la superficie."
    ],
    "fact": "circa 1860. Collezione privata."
  },
  "cspost": {
    "text": [
      "Il postino cammina nel Rosenthal, la borsa a tracolla, il sentiero tra alberi e case. Spitzweg dipinge il servizio come un quotidiano quieto.",
      "Il soggetto del circa 1858 appartiene alle vedute di città e sobborgo in cui una sola persona sostiene la scena."
    ],
    "fact": "circa 1858. Collezione privata."
  },
  "cswatch": {
    "text": [
      "Il guardiano notturno si è addormentato, la lanterna è ancora lì, il dovere dimenticato un istante. Spitzweg è indulgente, non severo.",
      "Il quadro appartiene alle commedie quiete della città di notte. La figura resta degna, anche nel sonno."
    ],
    "fact": "circa 1850. Collezione privata."
  },
  "csmonks": {
    "text": [
      "Due monaci sono assorbiti in un colloquio, gesti e volti portano la disputa. Spitzweg osserva lo zelo senza prendere parte.",
      "I dipinti di convento e di monaci appartengono pienamente al suo genere. L’umorismo sta nella serietà dei due."
    ],
    "fact": "circa 1860. Collezione privata."
  },
  "cssunday": {
    "text": [
      "Una famiglia va a passeggio la domenica, festosa e un poco rigida, il paesaggio ampio alle spalle. Spitzweg conosce da vicino il rito borghese.",
      "Il soggetto è uno dei suoi dipinti di società più affettuosi. L’umorismo resta gentile, l’osservazione è acuta."
    ],
    "fact": "circa 1841. Collezione privata."
  },
  "cschurch": {
    "text": [
      "La gente va in chiesa, piccola in un paesaggio ampio, il sentiero attraversa il paese. Spitzweg unisce il genere e la natura.",
      "Quadri come questo appartengono all’opera tarda più quieta. La domenica è qui meno commedia che ordine del giorno."
    ],
    "fact": "circa 1860. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
