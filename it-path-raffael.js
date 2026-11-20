// v10.35 IT short Lebensweg for Raffael.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "sistine": {
    "title": "La Madonna Sistina",
    "museum": "Gemäldegalerie Alte Meister, Dresden"
  }
});
  P.paths = P.paths || {};
  P.paths.raffael = {
  "title": "Il cammino di Raffaello",
  "life": "1483–1520",
  "part": "Un breve percorso · Roma",
  "subtitle": "La Madonna Sistina",
  "intro": "A Roma, Raffaello dipinge per la Chiesa e la corte. La Madonna Sistina avanza sulle nubi; i due angeli sul bordo inferiore diventeranno poi molto noti.",
  "ending": [
    "Raffaello muore a Roma nel 1520, a soli 37 anni. Una parte successiva potrà aggiungere altre madonne e le Stanze."
  ],
  "epilogue": "Una parte successiva potrà aggiungere altri quadri."
};
  P.stations = Object.assign(P.stations || {}, {
  "raffael1": {
    "place": "Roma",
    "when": null,
    "mapLabel": "Roma",
    "intro": [
      "A Roma, Raffaello dipinge per la Chiesa e la corte. La Madonna Sistina avanza sulle nubi; i due angeli sul bordo inferiore diventeranno poi molto noti."
    ]
  }
});
})();
