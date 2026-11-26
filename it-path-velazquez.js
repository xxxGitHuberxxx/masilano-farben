// v10.43 IT content for Diego Velázquez’s life journey (1599–1660). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Museo del Prado, Madrid": "Museo del Prado, Madrid"
});
  P.works = Object.assign(P.works || {}, {
  "vzkitchen": {
    "title": "Scena di cucina",
    "museum": "Art Institute of Chicago"
  },
  "vzemmaus": {
    "title": "La cena in Emmaus",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "vzphilip": {
    "title": "Filippo IV, re di Spagna",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "vzcalabazas": {
    "title": "Ritratto del buffone Calabazas",
    "museum": "Cleveland Museum of Art"
  },
  "vzselfman": {
    "title": "Ritratto di uomo, forse un autoritratto",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "vzpareja": {
    "title": "Juan de Pareja",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "vzteresa": {
    "title": "María Teresa, infanta di Spagna",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "meninas": {
    "title": "Las Meninas",
    "museum": "Museo del Prado, Madrid"
  }
});
  P.paths = P.paths || {};
  P.paths.velazquez = {
  "title": "Il percorso di vita di Diego Velázquez",
  "part": "Da Siviglia alla corte di Madrid",
  "subtitle": "Scena di cucina, re e corte",
  "intro": "Viaggia nella vita di Diego Velázquez: dalle scene di cucina di Siviglia, passando per la corte di Madrid e Roma, fino a «Las Meninas». Questo percorso è più breve di altri, perché solo pochi quadri di Velázquez sono disponibili come immagini libere di musei. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Diego Velázquez muore a Madrid il 6 agosto 1660.",
    "Per quasi quarant’anni dipinge il re e la sua corte."
  ],
  "epilogue": "Diego Velázquez muore a Madrid il 6 agosto 1660. Il percorso porta dalle scene di cucina di Siviglia, passando per la corte e Roma, fino a «Las Meninas».",
  "life": "1599–1660"
};
  P.stations = Object.assign(P.stations || {}, {
  "vzs1": {
    "place": "Siviglia: gli anni di apprendistato",
    "when": "1599–1622",
    "mapLabel": "Siviglia",
    "intro": [
      "Diego Velázquez viene battezzato a Siviglia nel giugno 1599.",
      "Si forma presso il pittore Francisco Pacheco e dipinge scene di cucina con persone semplici e oggetti quotidiani."
    ]
  },
  "vzs2": {
    "place": "Pittore del re",
    "when": "1622–1629",
    "mapLabel": "Madrid",
    "intro": [
      "Nel 1623 Velázquez diventa a Madrid pittore del re Filippo IV.",
      "Da allora dipinge soprattutto il re e la sua famiglia."
    ]
  },
  "vzs3": {
    "place": "L’Italia e la corte",
    "when": "1629–1648",
    "mapLabel": "Madrid",
    "intro": [
      "Nel 1629 Velázquez va per la prima volta in Italia e vi studia i grandi pittori.",
      "Tornato a Madrid, dipinge non solo il re, ma anche persone che lavorano a corte."
    ]
  },
  "vzs4": {
    "place": "Roma",
    "when": "1649–1651",
    "mapLabel": "Roma",
    "intro": [
      "Nel 1649 Velázquez torna una seconda volta in Italia per acquistare opere d’arte per il re.",
      "A Roma dipinge ritratti che suscitano grande ammirazione."
    ]
  },
  "velazquez1": {
    "place": "Madrid: gli ultimi anni",
    "when": "1651–1660",
    "mapLabel": "Madrid",
    "intro": [
      "Tornato a Madrid, Velázquez dipinge i figli del re.",
      "Nel 1656 dipinge «Las Meninas», il suo quadro più famoso."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "vzkitchen": {
    "text": [
      "Una serva con un panno bianco in testa sta dietro un tavolo con brocche e ciotole.",
      "Il metallo dei recipienti brilla nella luce davanti allo sfondo scuro."
    ],
    "fact": "1618–1620. Art Institute of Chicago."
  },
  "vzemmaus": {
    "text": [
      "Gesù in veste rossa siede con due discepoli a un tavolo con una tovaglia bianca.",
      "Secondo la Bibbia, i discepoli lo riconoscono solo quando spezza il pane."
    ],
    "fact": "1622–1623. Metropolitan Museum of Art, New York."
  },
  "vzphilip": {
    "text": [
      "Il giovane re sta in piedi tutto vestito di nero, con un colletto bianco rigido e una catena d’oro.",
      "Velázquez dipinge Filippo IV molte volte, quasi per tutta la vita."
    ],
    "fact": "1624. Metropolitan Museum of Art, New York."
  },
  "vzcalabazas": {
    "text": [
      "Il buffone Calabazas sta in piedi, vestito di nero, accanto a una sedia pieghevole.",
      "I buffoni devono divertire il re e la sua corte."
    ],
    "fact": "circa 1631–1632. Cleveland Museum of Art."
  },
  "vzselfman": {
    "text": [
      "Un uomo con capelli scuri, baffi e colletto bianco ci guarda con calma.",
      "Forse qui Velázquez ha dipinto sé stesso."
    ],
    "fact": "circa 1635. Metropolitan Museum of Art, New York."
  },
  "vzpareja": {
    "text": [
      "Juan de Pareja, l’aiutante di Velázquez, ci guarda dritto negli occhi, con fierezza.",
      "Velázquez lo dipinge a Roma nel 1650."
    ],
    "fact": "1650. Metropolitan Museum of Art, New York."
  },
  "vzteresa": {
    "text": [
      "La giovane infanta porta un’acconciatura grande e larga con fiocchi d’argento.",
      "María Teresa è la figlia del re Filippo IV."
    ],
    "fact": "1651–1654. Metropolitan Museum of Art, New York."
  },
  "meninas": {
    "text": [
      "Al centro sta la piccola infanta Margherita, circondata da damigelle d’onore, nani di corte e un cane.",
      "A sinistra Velázquez dipinge se stesso — e nello specchio in fondo appaiono il re e la regina, cioè, in un certo senso, noi."
    ],
    "fact": "1656. Museo del Prado, Madrid."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
