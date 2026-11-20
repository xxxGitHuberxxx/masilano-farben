// v10.35 FR short Lebensweg for Edvard Munch.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "scream": {
    "title": "Le Cri",
    "museum": "Nasjonalmuseet, Oslo"
  }
});
  P.paths = P.paths || {};
  P.paths.munch = {
  "title": "Le parcours de vie d’Edvard Munch",
  "life": "1863–1944",
  "part": "Un court chemin · Oslo",
  "subtitle": "Le Cri",
  "intro": "Munch cherche dans la couleur un son intérieur. « Le Cri » naît en 1893 : une figure sur le pont, le ciel rouge, la nature comme un appel.",
  "ending": [
    "Munch meurt à Oslo en 1944. Une partie ultérieure pourra ajouter d’autres versions et tableaux de vie."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres tableaux."
};
  P.stations = Object.assign(P.stations || {}, {
  "munch1": {
    "place": "Oslo",
    "when": null,
    "mapLabel": "Oslo",
    "intro": [
      "Munch cherche dans la couleur un son intérieur. « Le Cri » naît en 1893 : une figure sur le pont, le ciel rouge, la nature comme un appel."
    ]
  }
});
})();
