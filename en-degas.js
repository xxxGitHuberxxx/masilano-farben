// v10.35 EN short Lebensweg for Edgar Degas.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {
  "Puschkin-Museum, Moskau": "Pushkin Museum, Moscow"
});
  P.works = Object.assign(P.works || {}, {
  "degas": {
    "title": "The Dance Class",
    "museum": "Musée d’Orsay, Paris"
  },
  "etoile": {
    "title": "The Star",
    "museum": "Musée d’Orsay, Paris"
  },
  "bluedance": {
    "title": "Blue Dancers",
    "museum": "Pushkin Museum, Moscow"
  }
});
  P.paths = P.paths || {};
  P.paths.degas = {
  "title": "Edgar Degas’s Life Journey",
  "life": "1834–1917",
  "part": "A short path · Paris",
  "subtitle": "Dancers",
  "intro": "In Paris, Degas watches the opera, the rehearsal and the moment of movement. Three pictures lead from the dance class via the star to the blue dancers.",
  "ending": [
    "Degas dies in Paris in 1917. A later part can add horses, portraits and further dance pictures."
  ],
  "epilogue": "A later part can add further dance pictures."
};
  P.stations = Object.assign(P.stations || {}, {
  "degas1": {
    "place": "Paris",
    "when": null,
    "mapLabel": "Paris",
    "intro": [
      "In Paris, Degas watches the opera, the rehearsal and the moment of movement. Three pictures lead from the dance class via the star to the blue dancers."
    ]
  }
});
})();
