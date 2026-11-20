// v10.35 FR short Lebensweg for Jean-François Millet.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "angelus": {
    "title": "L’Angélus",
    "museum": "Musée d’Orsay, Paris"
  },
  "gleaners": {
    "title": "Les Glaneuses",
    "museum": "Musée d’Orsay, Paris"
  }
});
  P.paths = P.paths || {};
  P.paths.millet = {
  "title": "Le parcours de vie de Jean-François Millet",
  "life": "1814–1875",
  "part": "Un court chemin · Barbizon",
  "subtitle": "Le champ et l’Angélus",
  "intro": "À Barbizon, Millet peint le travail des champs sans pompe. Les Glaneuses et l’Angélus sont parmi les images les plus calmes de la vie rurale au XIXe siècle.",
  "ending": [
    "Millet meurt à Barbizon en 1875. Une partie ultérieure pourra ajouter d’autres champs et bergers."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres champs."
};
  P.stations = Object.assign(P.stations || {}, {
  "millet1": {
    "place": "Barbizon",
    "when": null,
    "mapLabel": "Barbizon",
    "intro": [
      "À Barbizon, Millet peint le travail des champs sans pompe. Les Glaneuses et l’Angélus sont parmi les images les plus calmes de la vie rurale au XIXe siècle."
    ]
  }
});
})();
