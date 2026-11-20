// v10.35 FR short Lebensweg for Grant Wood.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "gothic": {
    "title": "American Gothic",
    "museum": "The Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.wood = {
  "title": "Le parcours de vie de Grant Wood",
  "life": "1891–1942",
  "part": "Un court chemin · Iowa",
  "subtitle": "American Gothic",
  "intro": "En 1930, dans l’Iowa, Grant Wood peint le couple devant la maison de bois à la fenêtre pointue. Le titre « American Gothic » désigne d’abord le gothique charpentier de la maison.",
  "ending": [
    "Wood meurt dans l’Iowa en 1942. Une partie ultérieure pourra ajouter d’autres tableaux du Midwest."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres tableaux."
};
  P.stations = Object.assign(P.stations || {}, {
  "wood1": {
    "place": "Iowa",
    "when": null,
    "mapLabel": "Iowa",
    "intro": [
      "En 1930, dans l’Iowa, Grant Wood peint le couple devant la maison de bois à la fenêtre pointue. Le titre « American Gothic » désigne d’abord le gothique charpentier de la maison."
    ]
  }
});
})();
