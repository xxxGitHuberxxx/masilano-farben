// v10.35 FR short Lebensweg for Edgar Degas.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Puschkin-Museum, Moskau": "Musée Pouchkine, Moscou"
});
  P.works = Object.assign(P.works || {}, {
  "degas": {
    "title": "La Classe de danse",
    "museum": "Musée d’Orsay, Paris"
  },
  "etoile": {
    "title": "L’Étoile",
    "museum": "Musée d’Orsay, Paris"
  },
  "bluedance": {
    "title": "Danseuses bleues",
    "museum": "Musée Pouchkine, Moscou"
  }
});
  P.paths = P.paths || {};
  P.paths.degas = {
  "title": "Le parcours de vie d’Edgar Degas",
  "life": "1834–1917",
  "part": "Un court chemin · Paris",
  "subtitle": "Danseuses",
  "intro": "À Paris, Degas observe l’opéra, la répétition et l’instant du mouvement. Trois tableaux mènent de la classe de danse à l’étoile, puis aux danseuses bleues.",
  "ending": [
    "Degas meurt à Paris en 1917. Une partie ultérieure pourra ajouter chevaux, portraits et d’autres danses."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres danses."
};
  P.stations = Object.assign(P.stations || {}, {
  "degas1": {
    "place": "Paris",
    "when": null,
    "mapLabel": "Paris",
    "intro": [
      "À Paris, Degas observe l’opéra, la répétition et l’instant du mouvement. Trois tableaux mènent de la classe de danse à l’étoile, puis aux danseuses bleues."
    ]
  }
});
})();
