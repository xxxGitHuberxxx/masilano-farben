// v10.35 FR short Lebensweg for Paul Klee.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "senecio": {
    "title": "Senecio",
    "museum": "Kunstmuseum Basel"
  }
});
  P.paths = P.paths || {};
  P.paths.klee = {
  "title": "Le parcours de vie de Paul Klee",
  "life": "1879–1940",
  "part": "Un court chemin · Berne et le Bauhaus",
  "subtitle": "Senecio",
  "intro": "Klee cherche dans le plan le signe et le visage. « Senecio » de 1922 est construit de rectangles, une tête comme un jeu calme.",
  "ending": [
    "Klee meurt à Muralto, près de Locarno, en 1940. Une partie ultérieure pourra ajouter d’autres tableaux du Bauhaus et de Berne."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres tableaux."
};
  P.stations = Object.assign(P.stations || {}, {
  "klee1": {
    "place": "Berne et le Bauhaus",
    "when": null,
    "mapLabel": "Berne et le Bauhaus",
    "intro": [
      "Klee cherche dans le plan le signe et le visage. « Senecio » de 1922 est construit de rectangles, une tête comme un jeu calme."
    ]
  }
});
})();
