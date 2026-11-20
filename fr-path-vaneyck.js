// v10.35 FR short Lebensweg for Jan van Eyck.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "arnolfini": {
    "title": "Les Époux Arnolfini",
    "museum": "The National Gallery, London"
  }
});
  P.paths = P.paths || {};
  P.paths.vaneyck = {
  "title": "Le parcours de vie de Jan van Eyck",
  "life": "um 1390–1441",
  "part": "Un court chemin · Bruges",
  "subtitle": "Les Époux Arnolfini",
  "intro": "À Bruges, van Eyck peint avec une huile nouvelle et lumineuse. Les Époux Arnolfini de 1434 montrent un couple dans un intérieur, le miroir au mur, chaque étoffe précise.",
  "ending": [
    "Van Eyck meurt à Bruges en 1441. Une partie ultérieure pourra ajouter d’autres panneaux."
  ],
  "epilogue": "Une partie ultérieure pourra ajouter d’autres panneaux."
};
  P.stations = Object.assign(P.stations || {}, {
  "vaneyck1": {
    "place": "Bruges",
    "when": null,
    "mapLabel": "Bruges",
    "intro": [
      "À Bruges, van Eyck peint avec une huile nouvelle et lumineuse. Les Époux Arnolfini de 1434 montrent un couple dans un intérieur, le miroir au mur, chaque étoffe précise."
    ]
  }
});
})();
