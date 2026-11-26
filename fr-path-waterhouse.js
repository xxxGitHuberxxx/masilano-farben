// v10.35 FR short Lebensweg for John William Waterhouse.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "shalott": {
    "title": "The Lady of Shalott",
    "museum": "Tate Britain, London"
  }
});
  P.paths = P.paths || {};
  P.paths.waterhouse = {
  "title": "Le parcours de vie de John William Waterhouse",
  "life": "1849–1917",
  "part": "Un court chemin · Londres",
  "subtitle": "The Lady of Shalott",
  "intro": "À Londres, Waterhouse peint des sujets tirés de la poésie, avec une lumière ferme et claire. En 1888, « The Lady of Shalott » est dans la barque, la tapisserie par-dessus bord, le regard déjà ailleurs.",
  "ending": [
    "Waterhouse meurt à Londres en 1917. The Lady of Shalott est aujourd’hui à la Tate Britain à Londres."
  ],
  "epilogue": "Waterhouse meurt à Londres en 1917. The Lady of Shalott est aujourd’hui à la Tate Britain à Londres."
};
  P.stations = Object.assign(P.stations || {}, {
  "waterhouse1": {
    "place": "Londres",
    "when": null,
    "mapLabel": "Londres",
    "intro": [
      "À Londres, Waterhouse peint des sujets tirés de la poésie, avec une lumière ferme et claire. En 1888, « The Lady of Shalott » est dans la barque, la tapisserie par-dessus bord, le regard déjà ailleurs."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "shalott": {
      "text": [
        "La Dame de Shalott se libère de sa tour maudite et glisse sur le fleuve vers Camelot.",
        "Dans la barque se trouvent des chandelles, une tapisserie et un crucifix : elle sait que ce chemin est le dernier."
      ],
      "fact": "Le tableau suit un poème d’Alfred Tennyson. Quiconque brise la malédiction et regarde par la fenêtre Sir Lancelot doit mourir."
    }
  });
})();
