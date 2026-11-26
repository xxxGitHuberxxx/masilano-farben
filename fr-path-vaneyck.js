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
  "life": "vers 1390–1441",
  "part": "Un court chemin · Bruges",
  "subtitle": "Les Époux Arnolfini",
  "intro": "À Bruges, van Eyck peint avec une huile nouvelle et lumineuse. Les Époux Arnolfini de 1434 montrent un couple dans un intérieur, le miroir au mur, chaque étoffe précise.",
  "ending": [
    "Van Eyck meurt à Bruges en 1441. Le Portrait des Arnolfini est aujourd’hui à la National Gallery de Londres."
  ],
  "epilogue": "Van Eyck meurt à Bruges en 1441. Le Portrait des Arnolfini est aujourd’hui à la National Gallery de Londres."
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
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "arnolfini": {
      "text": [
        "Un couple se tient dans une pièce à Bruges, probablement le marchand italien Giovanni di Nicolao Arnolfini et sa femme.",
        "Il lève la main ; elle pose la sienne dans la sienne."
      ],
      "fact": "Dans le miroir convexe du mur, tu revois la pièce, et dedans deux autres silhouettes à la porte."
    }
  });
})();
