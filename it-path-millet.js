// v10.35 IT short Lebensweg for Jean-François Millet.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "angelus": {
    "title": "L’Angelus",
    "museum": "Musée d’Orsay, Paris"
  },
  "gleaners": {
    "title": "Le spigolatrici",
    "museum": "Musée d’Orsay, Paris"
  }
});
  P.paths = P.paths || {};
  P.paths.millet = {
  "title": "Il cammino di Jean-François Millet",
  "life": "1814–1875",
  "part": "Un breve percorso · Barbizon",
  "subtitle": "Il campo e l’Angelus",
  "intro": "A Barbizon, Millet dipinge il lavoro nei campi senza pompa. Le spigolatrici e L’Angelus sono tra le immagini più quiete della vita rurale dell’Ottocento.",
  "ending": [
    "Millet muore a Barbizon nel 1875. Una parte successiva potrà aggiungere altri campi e pastori."
  ],
  "epilogue": "Una parte successiva potrà aggiungere altri campi."
};
  P.stations = Object.assign(P.stations || {}, {
  "millet1": {
    "place": "Barbizon",
    "when": null,
    "mapLabel": "Barbizon",
    "intro": [
      "A Barbizon, Millet dipinge il lavoro nei campi senza pompa. Le spigolatrici e L’Angelus sono tra le immagini più quiete della vita rurale dell’Ottocento."
    ]
  }
});
})();
