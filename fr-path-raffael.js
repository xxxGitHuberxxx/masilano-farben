// v10.35 FR short Lebensweg for Raffael.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "sistine": {
    "title": "La Madone Sixtine",
    "museum": "Gemäldegalerie Alte Meister, Dresden"
  }
});
  P.paths = P.paths || {};
  P.paths.raffael = {
  "title": "Le parcours de vie de Raphaël",
  "life": "1483–1520",
  "part": "Un court chemin · Rome",
  "subtitle": "La Madone Sixtine",
  "intro": "À Rome, Raphaël peint pour l’Église et la cour. La Madone Sixtine s’avance sur les nuages ; les deux anges du bord inférieur deviendront plus tard très connus.",
  "ending": [
    "Raphaël meurt à Rome en 1520, à seulement 37 ans. Une partie ultérieure pourra ajouter d’autres madones et les Stanze."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres tableaux."
};
  P.stations = Object.assign(P.stations || {}, {
  "raffael1": {
    "place": "Rome",
    "when": null,
    "mapLabel": "Rome",
    "intro": [
      "À Rome, Raphaël peint pour l’Église et la cour. La Madone Sixtine s’avance sur les nuages ; les deux anges du bord inférieur deviendront plus tard très connus."
    ]
  }
});
})();
