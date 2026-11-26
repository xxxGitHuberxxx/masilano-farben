// v10.43 IT content for Giovanni Antonio Canal (Canaletto)’s life journey (1697–1768). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Museum of Fine Arts, Houston": "Museum of Fine Arts, Houston",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Yale Center for British Art, New Haven": "Yale Center for British Art, New Haven"
});
  P.works = Object.assign(P.works || {}, {
  "caspiazza": {
    "title": "Piazza San Marco",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "canaletto": {
    "title": "Ingresso al Canal Grande",
    "museum": "Museum of Fine Arts, Houston"
  },
  "carialto": {
    "title": "Il Canal Grande verso sud, in direzione del ponte di Rialto",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cazobenigo": {
    "title": "Campo Santa Maria Zobenigo, Venezia",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "caangelo": {
    "title": "Campo Sant’Angelo, Venezia",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "caportello": {
    "title": "La Porta Portello a Padova",
    "museum": "National Gallery of Art, Washington"
  },
  "casanmarco": {
    "title": "Piazza San Marco a Venezia",
    "museum": "National Gallery of Art, Washington"
  },
  "camolo": {
    "title": "L’ingresso del Canal Grande dal Molo, Venezia",
    "museum": "National Gallery of Art, Washington"
  },
  "cawestbridge": {
    "title": "Il ponte di Westminster con il corteo del Lord Mayor sul Tamigi",
    "museum": "Yale Center for British Art, New Haven"
  },
  "cawarwick": {
    "title": "Il castello di Warwick",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cacity": {
    "title": "La City dalla terrazza di Somerset House",
    "museum": "Yale Center for British Art, New Haven"
  },
  "cawestminster": {
    "title": "Westminster dalla terrazza di Somerset House",
    "museum": "Yale Center for British Art, New Haven"
  },
  "capaul": {
    "title": "La cattedrale di Saint Paul",
    "museum": "Yale Center for British Art, New Haven"
  },
  "cacolumn": {
    "title": "Capriccio di paesaggio inglese con una colonna",
    "museum": "National Gallery of Art, Washington"
  },
  "capalace": {
    "title": "Capriccio di paesaggio inglese con un palazzo",
    "museum": "National Gallery of Art, Washington"
  },
  "cawalton": {
    "title": "Il vecchio ponte di Walton",
    "museum": "Yale Center for British Art, New Haven"
  }
});
  P.paths = P.paths || {};
  P.paths.canaletto = {
  "title": "Il percorso di vita di Canaletto",
  "part": "Venezia, Padova e Londra",
  "subtitle": "Piazze, canali e il Tamigi",
  "intro": "Viaggia nella vita di Canaletto: dalle piazze e dai canali di Venezia e Padova fino al Tamigi a Londra. La maggior parte delle immagini proviene da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Canaletto muore a Venezia il 19 aprile 1768.",
    "Le sue vedute plasmano ancora oggi l’immagine che si ha della Venezia e della Londra del Settecento."
  ],
  "epilogue": "Canaletto muore a Venezia il 19 aprile 1768. Il percorso porta dalle piazze di Venezia al Tamigi e ritorno.",
  "life": "1697–1768"
};
  P.stations = Object.assign(P.stations || {}, {
  "canaletto1": {
    "place": "Venezia: piazze e canali",
    "when": "1697–1739",
    "mapLabel": "Venezia",
    "intro": [
      "Giovanni Antonio Canal nasce a Venezia il 18 ottobre 1697; il padre dipinge scenografie per il teatro e all’inizio il figlio lo aiuta.",
      "Intorno al 1720 comincia a dipingere vedute della sua città, che vende a viaggiatori di tutta Europa."
    ]
  },
  "cas2": {
    "place": "Padova e nuove vedute",
    "when": "1740–1745",
    "mapLabel": "Padova",
    "intro": [
      "Intorno al 1740 arrivano meno viaggiatori a Venezia; Canaletto disegna e dipinge ora anche sulla terraferma, per esempio a Padova.",
      "In questi anni nascono anche le sue acqueforti e grandi vedute di piazza San Marco."
    ]
  },
  "cas3": {
    "place": "Londra e il Tamigi",
    "when": "1746–1768",
    "mapLabel": "Londra",
    "intro": [
      "Nel 1746 Canaletto si reca a Londra, dove vivono molti dei suoi acquirenti, e con una breve interruzione resta in Inghilterra quasi dieci anni.",
      "Dipinge il Tamigi, il nuovo ponte di Westminster e residenze di campagna; intorno al 1755 torna a Venezia."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "caspiazza": {
    "text": [
      "L’ampia piazza San Marco si apre fino alla basilica, a destra l’alto campanile si slancia nel cielo.",
      "Sulla piazza passeggiano persone e sotto i portici pendono tende parasole."
    ],
    "fact": "circa 1727–1729. Metropolitan Museum of Art, New York."
  },
  "canaletto": {
    "text": [
      "Guardiamo dal Bacino di San Marco verso il Canal Grande: a sinistra la chiesa della Salute con la sua cupola bianca, davanti gondole e barche da carico, a destra i palazzi della città.",
      "Canaletto dipinge queste vedute per viaggiatori che vogliono un ricordo di Venezia."
    ],
    "fact": "circa 1730. Museum of Fine Arts, Houston."
  },
  "carialto": {
    "text": [
      "Gondole e barche da carico scivolano sull’acqua verde del Canal Grande tra alti palazzi.",
      "Le case sono così vicine alla riva che i loro muri salgono direttamente dall’acqua."
    ],
    "fact": "circa 1730–1739. Metropolitan Museum of Art, New York."
  },
  "cazobenigo": {
    "text": [
      "A destra si alza la facciata chiara della chiesa di Santa Maria Zobenigo, con molte statue e colonne.",
      "Nel piccolo campo davanti la gente chiacchiera al sole."
    ],
    "fact": "circa 1730–1739. Metropolitan Museum of Art, New York."
  },
  "caangelo": {
    "text": [
      "Su un campo ampio e quasi vuoto si alza un campanile slanciato.",
      "Canaletto mostra le case intorno in una luce chiara e con ombre nette."
    ],
    "fact": "circa 1730–1739. Metropolitan Museum of Art, New York."
  },
  "caportello": {
    "text": [
      "Un canale passa accanto alla Porta Portello, una porta della città di Padova, e lungo la riva ci sono barche.",
      "Davanti ci sono grandi blocchi di pietra, dietro case e alberi sotto un cielo nuvoloso."
    ],
    "fact": "circa 1741–1742. National Gallery of Art, Washington."
  },
  "casanmarco": {
    "text": [
      "Davanti alla basilica di San Marco e al rosa Palazzo Ducale si alzano alti pennoni, e sulla piazza ci sono bancarelle.",
      "Tra di esse passano mercanti, passanti e signori con lunghi mantelli."
    ],
    "fact": "1742–1744. National Gallery of Art, Washington."
  },
  "camolo": {
    "text": [
      "Dal Molo guardiamo oltre l’acqua verso la chiesa di Santa Maria della Salute con le sue grandi cupole.",
      "A sinistra un veliero è all’ancora, davanti gondole aspettano alla riva."
    ],
    "fact": "1742–1744. National Gallery of Art, Washington."
  },
  "cawestbridge": {
    "text": [
      "Splendide barche a remi risalgono il Tamigi verso il ponte di Westminster nel giorno del nuovo Lord Mayor.",
      "Nel 1747 il ponte non è ancora finito, e Canaletto lo dipinge come immagina l’opera compiuta."
    ],
    "fact": "1747. Yale Center for British Art, New Haven."
  },
  "cawarwick": {
    "text": [
      "Il lungo castello di Warwick si stende dietro un prato verde dove la gente passeggia.",
      "Canaletto dipinge diverse vedute di questo castello nell’Inghilterra centrale."
    ],
    "fact": "1748. Metropolitan Museum of Art, New York."
  },
  "cacity": {
    "text": [
      "Da una terrazza sul fiume guardiamo il Tamigi verso valle fino alla City di Londra con i suoi molti campanili.",
      "Sopra tutto si alza la cupola della cattedrale di Saint Paul."
    ],
    "fact": "circa 1750. Yale Center for British Art, New Haven."
  },
  "cawestminster": {
    "text": [
      "Il pendant della veduta della City guarda verso monte, verso Westminster e il ponte di Westminster.",
      "Sull’ampio fiume ci sono barche a vela e a remi."
    ],
    "fact": "circa 1750. Yale Center for British Art, New Haven."
  },
  "capaul": {
    "text": [
      "La grande chiesa a cupola di Saint Paul si staglia chiara contro un cielo rosa, davanti carrozze attraversano la piazza.",
      "È l’unica veduta di Canaletto che mostra tutta la chiesa da vicino."
    ],
    "fact": "circa 1754. Yale Center for British Art, New Haven."
  },
  "cacolumn": {
    "text": [
      "Tra grandi alberi si alza un’alta colonna con una statua in cima.",
      "Canaletto combina liberamente elementi di luoghi diversi in un paesaggio inventato."
    ],
    "fact": "circa 1754. National Gallery of Art, Washington."
  },
  "capalace": {
    "text": [
      "Un grande albero si piega su uno stagno dove nuotano cigni, e dietro c’è un palazzo sul pendio.",
      "Il quadro è il pendant del paesaggio con la colonna."
    ],
    "fact": "circa 1754. National Gallery of Art, Washington."
  },
  "cawalton": {
    "text": [
      "Un ardito ponte di legno attraversa il Tamigi a Walton con un ampio arco.",
      "Sulla riva c’è gente seduta e in piedi, sopra si addensano nuvole scure."
    ],
    "fact": "1755. Yale Center for British Art, New Haven."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
