// v10.35 IT short Lebensweg for Johannes Vermeer.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Mauritshuis, Den Haag": "Mauritshuis, L'Aia"
});
  P.works = Object.assign(P.works || {}, {
  "pearl": {
    "title": "Ragazza con l’orecchino di perla",
    "museum": "Mauritshuis, L'Aia"
  },
  "milkmaid": {
    "title": "La lattaia",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "delft": {
    "title": "Veduta di Delft",
    "museum": "Mauritshuis, L'Aia"
  }
});
  P.paths = P.paths || {};
  P.paths.vermeer = {
  "title": "Il cammino di Johannes Vermeer",
  "life": "1632–1675",
  "part": "Un breve percorso · Delft",
  "subtitle": "Luce nelle stanze",
  "intro": "A Delft, Vermeer dipinge la luce quieta su volti, brocche e mattoni. Tre quadri vanno dalla ragazza con l’orecchino di perla alla lattaia e alla veduta della città.",
  "ending": [
    "Vermeer muore a Delft nel 1675. Una parte successiva potrà aggiungere altri interni."
  ],
  "epilogue": "Una parte successiva potrà aggiungere altri interni."
};
  P.stations = Object.assign(P.stations || {}, {
  "vermeer1": {
    "place": "Delft",
    "when": null,
    "mapLabel": "Delft",
    "intro": [
      "A Delft, Vermeer dipinge la luce quieta su volti, brocche e mattoni. Tre quadri vanno dalla ragazza con l’orecchino di perla alla lattaia e alla veduta della città."
    ]
  }
});
})();
