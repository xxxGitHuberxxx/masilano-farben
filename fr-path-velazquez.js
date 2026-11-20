// v10.35 FR short Lebensweg for Diego Velázquez.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "meninas": {
    "title": "Les Ménines",
    "museum": "Museo del Prado, Madrid"
  }
});
  P.paths = P.paths || {};
  P.paths.velazquez = {
  "title": "Le parcours de vie de Diego Velázquez",
  "life": "1599–1660",
  "part": "Un court chemin · Madrid",
  "subtitle": "Les Ménines",
  "intro": "Velázquez est peintre de cour à Madrid. « Les Ménines » montre l’infante, les suivantes et le peintre lui-même dans le miroir de l’atelier – l’une des images les plus pensées sur le regard.",
  "ending": [
    "Velázquez meurt à Madrid en 1660. Une partie ultérieure pourra ajouter d’autres portraits de cour."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres portraits de cour."
};
  P.stations = Object.assign(P.stations || {}, {
  "velazquez1": {
    "place": "Madrid",
    "when": null,
    "mapLabel": "Madrid",
    "intro": [
      "Velázquez est peintre de cour à Madrid. « Les Ménines » montre l’infante, les suivantes et le peintre lui-même dans le miroir de l’atelier – l’une des images les plus pensées sur le regard."
    ]
  }
});
})();
