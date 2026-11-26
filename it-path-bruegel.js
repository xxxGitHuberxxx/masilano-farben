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
  "life": "c. 1525–1569",
  "part": "Un breve percorso · Brabante",
  "subtitle": "Torre, mietitura e neve",
  "intro": "Nel Brabante, Bruegel il Vecchio vede il lavoro, l’inverno e i racconti antichi. Tre quadri vanno dalla torre di Babele alla mietitura e ai cacciatori nella neve.",
  "ending": [
    "Bruegel muore a Bruxelles nel 1569. Due dei tre quadri di questo percorso, la Torre e i Cacciatori nella neve, si trovano oggi al Kunsthistorisches Museum di Vienna."
  ],
  "epilogue": "Bruegel muore a Bruxelles nel 1569. Due dei tre quadri di questo percorso, la Torre e i Cacciatori nella neve, si trovano oggi al Kunsthistorisches Museum di Vienna."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "babel": {
      "text": [
        "Secondo la Bibbia gli uomini volevano costruire una torre fino al cielo.",
        "Bruegel mostra l’enorme cantiere con gru, impalcature, operai e un’intera città tutt’intorno."
      ],
      "fact": "Come modello per i numerosi archi gli servì probabilmente il Colosseo, che aveva visto durante il suo viaggio a Roma."
    },
    "harvesters": {
      "text": [
        "È piena estate: davanti i mietitori riposano mangiando, dietro si continua a falciare, e i campi si aprono in un vasto paesaggio dorato.",
        "Il quadro appartiene ai dipinti dei mesi di Bruegel, qui la piena estate."
      ],
      "fact": "Cinque dei sei dipinti originali delle stagioni si conservano. «Cacciatori nella neve» ne è l’inverno."
    },
    "hunters": {
      "text": [
        "Tre cacciatori tornano al villaggio con cani stanchi.",
        "In basso, sugli stagni ghiacciati, si pattina, e in lontananza si ergono montagne acute e invernali."
      ],
      "fact": "Nonostante il freddo, il quadro è pieno di vita: un fuoco, uccelli, bambini sul ghiaccio, un’insegna di locanda con un cervo."
    }
  });
})();
