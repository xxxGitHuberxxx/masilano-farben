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
  "epilogue": "Una parte successiva potrà aggiungere altre stampe e ritratti."
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
})();
