// v10.35 IT short Lebensweg for Pieter Bruegel der Ältere.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Kunsthistorisches Museum, Wien": "Kunsthistorisches Museum, Vienna"
});
  P.works = Object.assign(P.works || {}, {
  "babel": {
    "title": "La torre di Babele",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "harvesters": {
    "title": "I mietitori",
    "museum": "The Metropolitan Museum of Art, New York"
  },
  "hunters": {
    "title": "Cacciatori nella neve",
    "museum": "Kunsthistorisches Museum, Vienna"
  }
});
  P.paths = P.paths || {};
  P.paths.bruegel = {
  "title": "Il cammino di Pieter Bruegel",
  "life": "um 1525–1569",
  "part": "Un breve percorso · Brabante",
  "subtitle": "Torre, mietitura e neve",
  "intro": "Nel Brabante, Bruegel il Vecchio vede il lavoro, l’inverno e i racconti antichi. Tre quadri vanno dalla torre di Babele alla mietitura e ai cacciatori nella neve.",
  "ending": [
    "Bruegel muore a Bruxelles nel 1569. Una parte successiva potrà aggiungere altre stagioni e proverbi."
  ],
  "epilogue": "Una parte successiva potrà aggiungere altri quadri."
};
  P.stations = Object.assign(P.stations || {}, {
  "bruegel1": {
    "place": "Anversa e Bruxelles",
    "when": null,
    "mapLabel": "Anversa e Bruxelles",
    "intro": [
      "Nel Brabante, Bruegel il Vecchio vede il lavoro, l’inverno e i racconti antichi. Tre quadri vanno dalla torre di Babele alla mietitura e ai cacciatori nella neve."
    ]
  }
});
})();
