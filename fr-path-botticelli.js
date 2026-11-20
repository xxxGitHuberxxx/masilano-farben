// v10.35 FR short Lebensweg for Sandro Botticelli.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Uffizien, Florenz": "Galerie des Offices, Florence",
  "Galleria degli Uffizi, Florenz": "Galleria degli Uffizi, Florence"
});
  P.works = Object.assign(P.works || {}, {
  "venus": {
    "title": "La Naissance de Vénus",
    "museum": "Galerie des Offices, Florence"
  },
  "primavera": {
    "title": "Le Printemps (La Primavera)",
    "museum": "Galleria degli Uffizi, Florence"
  }
});
  P.paths = P.paths || {};
  P.paths.botticelli = {
  "title": "Le parcours de vie de Sandro Botticelli",
  "life": "1445–1510",
  "part": "Un court chemin · Florence",
  "subtitle": "Vénus et le Printemps",
  "intro": "À Florence, Botticelli peint pour les Médicis les récits anciens avec une grâce nouvelle. La Naissance de Vénus et Le Printemps sont parmi les images les plus festives du premier Renaissance.",
  "ending": [
    "Botticelli meurt à Florence en 1510. Une partie ultérieure pourra ajouter d’autres panneaux."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres panneaux."
};
  P.stations = Object.assign(P.stations || {}, {
  "botticelli1": {
    "place": "Florence",
    "when": null,
    "mapLabel": "Florence",
    "intro": [
      "À Florence, Botticelli peint pour les Médicis les récits anciens avec une grâce nouvelle. La Naissance de Vénus et Le Printemps sont parmi les images les plus festives du premier Renaissance."
    ]
  }
});
})();
