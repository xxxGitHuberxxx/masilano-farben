// v10.35 IT short Lebensweg for Edgar Degas.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Puschkin-Museum, Moskau": "Museo Puškin, Mosca"
});
  P.works = Object.assign(P.works || {}, {
  "degas": {
    "title": "La classe di danza",
    "museum": "Musée d’Orsay, Paris"
  },
  "etoile": {
    "title": "La stella",
    "museum": "Musée d’Orsay, Paris"
  },
  "bluedance": {
    "title": "Danzatrici blu",
    "museum": "Museo Puškin, Mosca"
  }
});
  P.paths = P.paths || {};
  P.paths.degas = {
  "title": "Il cammino di Edgar Degas",
  "life": "1834–1917",
  "part": "Un breve percorso · Parigi",
  "subtitle": "Ballerine",
  "intro": "A Parigi Degas osserva l’opera, la prova e l’attimo del movimento. Tre quadri vanno dalla classe di danza alla stella e alle ballerine blu.",
  "ending": [
    "Degas muore a Parigi nel 1917. Una parte successiva potrà aggiungere cavalli, ritratti e altre danze."
  ],
  "epilogue": "Una parte successiva potrà aggiungere altre danze."
};
  P.stations = Object.assign(P.stations || {}, {
  "degas1": {
    "place": "Parigi",
    "when": null,
    "mapLabel": "Parigi",
    "intro": [
      "A Parigi Degas osserva l’opera, la prova e l’attimo del movimento. Tre quadri vanno dalla classe di danza alla stella e alle ballerine blu."
    ]
  }
});
})();
