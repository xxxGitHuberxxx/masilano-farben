// v10.35 IT short Lebensweg for John William Waterhouse.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "shalott": {
    "title": "The Lady of Shalott",
    "museum": "Tate Britain, London"
  }
});
  P.paths = P.paths || {};
  P.paths.waterhouse = {
  "title": "Il cammino di John William Waterhouse",
  "life": "1849–1917",
  "part": "Un breve percorso · Londra",
  "subtitle": "The Lady of Shalott",
  "intro": "A Londra, Waterhouse dipinge soggetti dalla poesia, con una luce ferma e chiara. Nel 1888 «The Lady of Shalott» siede nella barca, il tappeto oltre il bordo, lo sguardo già altrove.",
  "ending": [
    "Waterhouse muore a Londra nel 1917. The Lady of Shalott si trova oggi alla Tate Britain di Londra."
  ],
  "epilogue": "Waterhouse muore a Londra nel 1917. The Lady of Shalott si trova oggi alla Tate Britain di Londra."
};
  P.stations = Object.assign(P.stations || {}, {
  "waterhouse1": {
    "place": "Londra",
    "when": null,
    "mapLabel": "Londra",
    "intro": [
      "A Londra, Waterhouse dipinge soggetti dalla poesia, con una luce ferma e chiara. Nel 1888 «The Lady of Shalott» siede nella barca, il tappeto oltre il bordo, lo sguardo già altrove."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "shalott": {
      "text": [
        "La dama di Shalott si libera dalla sua torre maledetta e scivola sul fiume verso Camelot.",
        "Nella barca ci sono candele, un arazzo e un crocifisso: sa che questa via è l’ultima."
      ],
      "fact": "Il quadro segue un poema di Alfred Tennyson. Chi rompe la maledizione e guarda dalla finestra sir Lancillotto deve morire."
    }
  });
})();
