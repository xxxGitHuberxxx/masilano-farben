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
    "Vermeer muore a Delft nel 1675. Di lui si sono conservati pochi quadri; due dei tre di questo percorso si trovano oggi al Mauritshuis dell’Aia."
  ],
  "epilogue": "Vermeer muore a Delft nel 1675. Di lui si sono conservati pochi quadri; due dei tre di questo percorso si trovano oggi al Mauritshuis dell’Aia."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "pearl": {
      "text": [
        "Il quadro non è un ritratto classico, ma una «tronie»: lo studio di un volto in un costume di fantasia, qui un turbante.",
        "Chi fosse la ragazza, nessuno lo sa ancora oggi."
      ],
      "fact": "La perla è un’illusione: consiste solo in poche pennellate di colore chiaro. Gli studi hanno mostrato che manca persino il gancio da cui dovrebbe pendere all’orecchio."
    },
    "milkmaid": {
      "text": [
        "Una serva di cucina versa il latte da una brocca.",
        "Accanto a lei ci sono pane e un cesto."
      ],
      "fact": "In basso, sulla parete, vedi piastrelle di Delft con figurine, tipiche delle cucine olandesi dell’epoca."
    },
    "delft": {
      "text": [
        "Da una riva vediamo Delft dall’altra parte del canale: l’acqua, i muri di mattone, le torri, e uno squarcio tra le nuvole che fa risplendere la città.",
        "È una delle vedute urbane più quiete della storia dell’arte."
      ],
      "fact": "Vermeer stesso era di Delft e restò fedele alla città per tutta la vita."
    }
  });
})();
