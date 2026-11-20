// v10.35 IT short Lebensweg for Sandro Botticelli.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Uffizien, Florenz": "Galleria degli Uffizi, Firenze",
  "Galleria degli Uffizi, Florenz": "Galleria degli Uffizi, Firenze"
});
  P.works = Object.assign(P.works || {}, {
  "venus": {
    "title": "La nascita di Venere",
    "museum": "Galleria degli Uffizi, Firenze"
  },
  "primavera": {
    "title": "La Primavera",
    "museum": "Galleria degli Uffizi, Firenze"
  }
});
  P.paths = P.paths || {};
  P.paths.botticelli = {
  "title": "Il cammino di Sandro Botticelli",
  "life": "1445–1510",
  "part": "Un breve percorso · Firenze",
  "subtitle": "Venere e la Primavera",
  "intro": "A Firenze, Botticelli dipinge per i Medici i racconti antichi con una grazia nuova. La Nascita di Venere e La Primavera sono tra le immagini più festose del primo Rinascimento.",
  "ending": [
    "Botticelli muore a Firenze nel 1510. Una parte successiva potrà aggiungere altre tavole."
  ],
  "epilogue": "Una parte successiva potrà aggiungere altre tavole."
};
  P.stations = Object.assign(P.stations || {}, {
  "botticelli1": {
    "place": "Firenze",
    "when": null,
    "mapLabel": "Firenze",
    "intro": [
      "A Firenze, Botticelli dipinge per i Medici i racconti antichi con una grazia nuova. La Nascita di Venere e La Primavera sono tra le immagini più festose del primo Rinascimento."
    ]
  }
});
})();
