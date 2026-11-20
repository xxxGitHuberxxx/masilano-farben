// v10.35 EN short Lebensweg for Leonardo da Vinci.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {
  "Muzeum Książąt Czartoryskich, Krakau": "Czartoryski Museum, Kraków"
});
  P.works = Object.assign(P.works || {}, {
  "ermine": {
    "title": "Lady with an Ermine",
    "museum": "Czartoryski Museum, Kraków"
  },
  "monalisa": {
    "title": "Mona Lisa",
    "museum": "Musée du Louvre, Paris"
  }
});
  P.paths = P.paths || {};
  P.paths.leonardo = {
  "title": "Leonardo da Vinci’s Life Journey",
  "life": "1452–1519",
  "part": "A short path · Florence and Milan",
  "subtitle": "Two portraits",
  "intro": "In Florence and Milan, Leonardo looks for the quiet light on faces. The Lady with an Ermine and the Mona Lisa are among the best-known portraits in the world.",
  "ending": [
    "Leonardo dies in Amboise in 1519. A later part can add further studies and pictures."
  ],
  "epilogue": "A later part can add further studies."
};
  P.stations = Object.assign(P.stations || {}, {
  "leonardo1": {
    "place": "Florence and Milan",
    "when": null,
    "mapLabel": "Florence and Milan",
    "intro": [
      "In Florence and Milan, Leonardo looks for the quiet light on faces. The Lady with an Ermine and the Mona Lisa are among the best-known portraits in the world."
    ]
  }
});
})();
