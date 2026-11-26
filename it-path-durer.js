// v10.35 IT short Lebensweg for Albrecht Dürer.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Albertina, Wien": "Albertina, Vienna"
});
  P.works = Object.assign(P.works || {}, {
  "hare": {
    "title": "Lepre giovane",
    "museum": "Albertina, Vienna"
  },
  "wing": {
    "title": "Ala di una ghiandaia marina",
    "museum": "Albertina, Vienna"
  }
});
  P.paths = P.paths || {};
  P.paths.durer = {
  "title": "Il cammino di Albrecht Dürer",
  "life": "1471–1528",
  "part": "Un breve percorso · Norimberga",
  "subtitle": "La lepre e l’ala",
  "intro": "Due acquerelli famosi di Norimberga: la lepre di Dürer e l’ala di una ghiandaia marina. Un breve percorso nello studio della natura nel Rinascimento.",
  "ending": [
    "Dürer muore a Norimberga nel 1528. I due fogli sono tra gli studi dal vero più precisi del loro tempo."
  ],
  "epilogue": "Dürer muore a Norimberga nel 1528. I due fogli sono tra gli studi dal vero più precisi del loro tempo."
};
  P.stations = Object.assign(P.stations || {}, {
  "durer1": {
    "place": "Norimberga",
    "when": null,
    "mapLabel": "Norimberga",
    "intro": [
      "Due acquerelli famosi di Norimberga: la lepre di Dürer e l’ala di una ghiandaia marina. Un breve percorso nello studio della natura nel Rinascimento."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "hare": {
      "text": [
        "La lepre siede del tutto ferma, le orecchie attente, visibile ogni singolo pelo del manto.",
        "Dürer la osservò così da vicino e con tanta precisione che si può quasi sentire il morbido pelo."
      ],
      "fact": "Il foglio è alto solo circa 25 centimetri ed è nondimeno una delle immagini di animali più famose del mondo."
    },
    "wing": {
      "text": [
        "Dürer dipinse l’ala di un uccello colorato con tanta precisione che potrebbe ancora stare davanti a noi sul tavolo.",
        "Ogni piuma è posata a parte, dalle forti remiganti alle morbide copritrici chiare."
      ],
      "fact": "La ghiandaia marina è un uccello meridionale dal piumaggio turchese, azzurro e bruno caldo. Dürer la fissò come un naturalista."
    }
  });
})();
