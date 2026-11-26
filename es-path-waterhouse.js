// v10.35 ES short Lebensweg for John William Waterhouse.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "shalott": {
    "title": "The Lady of Shalott",
    "museum": "Tate Britain, London"
  }
});
  P.paths = P.paths || {};
  P.paths.waterhouse = {
  "title": "El camino de vida de John William Waterhouse",
  "life": "1849–1917",
  "part": "Un camino breve · Londres",
  "subtitle": "The Lady of Shalott",
  "intro": "En Londres, Waterhouse pinta temas de la poesía con una luz firme y clara. En 1888 «The Lady of Shalott» está en la barca, el tapiz por la borda, la mirada ya lejos.",
  "ending": [
    "Waterhouse muere en Londres en 1917. The Lady of Shalott cuelga hoy en la Tate Britain de Londres."
  ],
  "epilogue": "Waterhouse muere en Londres en 1917. The Lady of Shalott cuelga hoy en la Tate Britain de Londres."
};
  P.stations = Object.assign(P.stations || {}, {
  "waterhouse1": {
    "place": "Londres",
    "when": null,
    "mapLabel": "Londres",
    "intro": [
      "En Londres, Waterhouse pinta temas de la poesía con una luz firme y clara. En 1888 «The Lady of Shalott» está en la barca, el tapiz por la borda, la mirada ya lejos."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "shalott": {
      "text": [
        "La dama de Shalott se libera de su torre maldita y se desliza río abajo hacia Camelot.",
        "En la barca hay velas, un tapiz y un crucifijo: sabe que este camino es el último."
      ],
      "fact": "El cuadro sigue un poema de Alfred Tennyson. Quien rompe la maldición y mira por la ventana a sir Lancelot debe morir."
    }
  });
})();
