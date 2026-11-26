// v10.35 IT short Lebensweg for Jan van Eyck.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "arnolfini": {
    "title": "Ritratto dei coniugi Arnolfini",
    "museum": "The National Gallery, London"
  }
});
  P.paths = P.paths || {};
  P.paths.vaneyck = {
  "title": "Il cammino di Jan van Eyck",
  "life": "c. 1390–1441",
  "part": "Un breve percorso · Bruges",
  "subtitle": "Il ritratto dei coniugi Arnolfini",
  "intro": "A Bruges, van Eyck dipinge con un olio nuovo e luminoso. Il ritratto Arnolfini del 1434 mostra una coppia in un interno, lo specchio alla parete, ogni tessuto preciso.",
  "ending": [
    "Van Eyck muore a Bruges nel 1441. Il Ritratto dei coniugi Arnolfini si trova oggi alla National Gallery di Londra."
  ],
  "epilogue": "Van Eyck muore a Bruges nel 1441. Il Ritratto dei coniugi Arnolfini si trova oggi alla National Gallery di Londra."
};
  P.stations = Object.assign(P.stations || {}, {
  "vaneyck1": {
    "place": "Bruges",
    "when": null,
    "mapLabel": "Bruges",
    "intro": [
      "A Bruges, van Eyck dipinge con un olio nuovo e luminoso. Il ritratto Arnolfini del 1434 mostra una coppia in un interno, lo specchio alla parete, ogni tessuto preciso."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "arnolfini": {
      "text": [
        "Una coppia sta in una stanza a Bruges, probabilmente il mercante italiano Giovanni di Nicolao Arnolfini e sua moglie.",
        "Lui alza la mano; lei posa la sua in quella di lui."
      ],
      "fact": "Nello specchio convesso sulla parete rivedi la stanza, e in essa altre due figure alla porta."
    }
  });
})();
