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
    "Leonardo dies in Amboise in 1519. The two portraits on this path hang today in Kraków and in Paris."
  ],
  "epilogue": "Leonardo dies in Amboise in 1519. The two portraits on this path hang today in Kraków and in Paris."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "ermine": {
      "text": [
        "The young woman is Cecilia Gallerani, a cultivated lady at the court of Milan.",
        "The ermine on her arm was a symbol of purity – and a play on her name."
      ],
      "fact": "Leonardo was then working for Duke Ludovico Sforza in Milan. Cecilia was one of the cleverest women at that court."
    },
    "monalisa": {
      "text": [
        "A woman sits before a wide, somewhat mysterious landscape and looks at us.",
        "Her slight smile has made the picture world-famous."
      ],
      "fact": "Leonardo took the picture with him to France when he went to the court of King Francis I. That is why it hangs today in the Louvre and not in Italy."
    }
  });
})();
