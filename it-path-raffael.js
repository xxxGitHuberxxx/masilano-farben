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
    "Raffaello muore a Roma nel 1520, a soli 37 anni. La Madonna Sistina si trova oggi alla Gemäldegalerie Alte Meister di Dresda."
  ],
  "epilogue": "Raffaello muore a Roma nel 1520, a soli 37 anni. La Madonna Sistina si trova oggi alla Gemäldegalerie Alte Meister di Dresda."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "sistine": {
      "text": [
        "Maria avanza con il Bambino tra due tendaggi scostati, come se si aprisse un palcoscenico.",
        "Ai suoi piedi siedono i due angioletti che più tardi finirono su innumerevoli cartoline."
      ],
      "fact": "Il quadro nacque per il monastero di San Sisto a Piacenza e arrivò a Dresda nel 1754."
    }
  });
})();
