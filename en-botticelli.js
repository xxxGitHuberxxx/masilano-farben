// v10.35 EN short Lebensweg for Sandro Botticelli.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {
  "Uffizien, Florenz": "Uffizi Gallery, Florence",
  "Galleria degli Uffizi, Florenz": "Galleria degli Uffizi, Florence"
});
  P.works = Object.assign(P.works || {}, {
  "venus": {
    "title": "The Birth of Venus",
    "museum": "Uffizi Gallery, Florence"
  },
  "primavera": {
    "title": "Spring (La Primavera)",
    "museum": "Galleria degli Uffizi, Florence"
  }
});
  P.paths = P.paths || {};
  P.paths.botticelli = {
  "title": "Sandro Botticelli’s Life Journey",
  "life": "1445–1510",
  "part": "A short path · Florence",
  "subtitle": "Venus and Spring",
  "intro": "In Florence, Botticelli paints the old stories for the Medici with a new grace. The Birth of Venus and Primavera belong to the most festive pictures of the early Renaissance.",
  "ending": [
    "Botticelli dies in Florence in 1510. A later part can add further panel pictures."
  ],
  "epilogue": "A later part can add further panel pictures."
};
  P.stations = Object.assign(P.stations || {}, {
  "botticelli1": {
    "place": "Florence",
    "when": null,
    "mapLabel": "Florence",
    "intro": [
      "In Florence, Botticelli paints the old stories for the Medici with a new grace. The Birth of Venus and Primavera belong to the most festive pictures of the early Renaissance."
    ]
  }
});
})();
