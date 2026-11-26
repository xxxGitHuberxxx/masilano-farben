// v10.35 FR short Lebensweg for Johannes Vermeer.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Mauritshuis, Den Haag": "Mauritshuis, La Haye"
});
  P.works = Object.assign(P.works || {}, {
  "pearl": {
    "title": "La Jeune Fille à la perle",
    "museum": "Mauritshuis, La Haye"
  },
  "milkmaid": {
    "title": "La Laitière",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "delft": {
    "title": "Vue de Delft",
    "museum": "Mauritshuis, La Haye"
  }
});
  P.paths = P.paths || {};
  P.paths.vermeer = {
  "title": "Le parcours de vie de Johannes Vermeer",
  "life": "1632–1675",
  "part": "Un court chemin · Delft",
  "subtitle": "La lumière dans les chambres",
  "intro": "À Delft, Vermeer peint la lumière calme sur les visages, les pichets et les briques. Trois tableaux mènent de la jeune fille à la perle à la laitière et à la vue de la ville.",
  "ending": [
    "Vermeer meurt à Delft en 1675. Il ne reste que peu de tableaux de lui ; deux des trois de ce chemin sont aujourd’hui au Mauritshuis de La Haye."
  ],
  "epilogue": "Vermeer meurt à Delft en 1675. Il ne reste que peu de tableaux de lui ; deux des trois de ce chemin sont aujourd’hui au Mauritshuis de La Haye."
};
  P.stations = Object.assign(P.stations || {}, {
  "vermeer1": {
    "place": "Delft",
    "when": null,
    "mapLabel": "Delft",
    "intro": [
      "À Delft, Vermeer peint la lumière calme sur les visages, les pichets et les briques. Trois tableaux mènent de la jeune fille à la perle à la laitière et à la vue de la ville."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "pearl": {
      "text": [
        "Le tableau n’est pas un portrait classique, mais une « tronie » : l’étude d’un visage dans un costume de fantaisie, ici un turban.",
        "Qui était la jeune fille, personne ne le sait jusqu’à aujourd’hui."
      ],
      "fact": "La perle est une illusion : elle ne consiste qu’en quelques touches de peinture claire. Des études ont montré que même le crochet auquel elle devrait pendre à l’oreille manque."
    },
    "milkmaid": {
      "text": [
        "Une servante de cuisine verse du lait d’un pot.",
        "À côté d’elle se trouvent du pain et un panier."
      ],
      "fact": "En bas, sur le mur, tu vois des carreaux de Delft avec de petites figures, typiques des cuisines hollandaises de l’époque."
    },
    "delft": {
      "text": [
        "D’une rive, nous voyons Delft de l’autre côté du canal : l’eau, les murs de brique, les tours, et une trouée dans les nuages qui fait briller la ville.",
        "C’est l’une des vues urbaines les plus calmes de l’histoire de l’art."
      ],
      "fact": "Vermeer lui-même était de Delft et resta fidèle à la ville toute sa vie."
    }
  });
})();
