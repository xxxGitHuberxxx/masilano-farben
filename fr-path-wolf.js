// v10.23 FR content for Caspar Wolf’s life journey, Part 1 (1735–1783). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Standort ohne Angabe": "Lieu non indiqué",
  "Privatsammlung": "Collection particulière",
  "Kunsthaus Zürich": "Kunsthaus de Zurich",
  "National Gallery, London": "National Gallery, Londres",
  "Kunst Museum Winterthur": "Kunst Museum Winterthur",
  "Kunstmuseum Basel": "Kunstmuseum de Bâle"
});
  P.works = Object.assign(P.works || {}, {
  "cwruine": {
    "title": "Paysage rocheux avec chasseur et château en ruine",
    "museum": "Collection particulière"
  },
  "cwbauernhof": {
    "title": "Paysage avec ferme",
    "museum": "Lieu non indiqué"
  },
  "cwgletscher": {
    "title": "Le glacier inférieur de Grindelwald",
    "museum": "Kunst Museum Winterthur"
  },
  "cwsteg": {
    "title": "Passerelle sur la Lütschine",
    "museum": "Kunst Museum Winterthur"
  },
  "cwlauteraar": {
    "title": "Le glacier de l’Aar",
    "museum": "Kunstmuseum de Bâle"
  },
  "cwhoehle": {
    "title": "Grotte rocheuse avec cascade",
    "museum": "Kunsthaus de Zurich"
  },
  "cwseelisberg": {
    "title": "Vue du Seelisberg sur le lac d’Uri",
    "museum": "Collection particulière"
  },
  "cwmuota": {
    "title": "Pont sur la Muota près de Schwyz",
    "museum": "Collection particulière"
  },
  "cwrhone": {
    "title": "Le Rhône près de Gletsch",
    "museum": "Collection particulière"
  },
  "cwgelten": {
    "title": "Le Geltenschuss dans la vallée de Lauenen",
    "museum": "National Gallery, Londres"
  },
  "cwseeberg": {
    "title": "Vue sur le lac de Seeberg",
    "museum": "Collection particulière"
  },
  "cwbechburg": {
    "title": "Le château de Neu-Bechburg près d’Oensingen",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.wolf = {
  "title": "Le parcours de vie de Caspar Wolf",
  "life": "1735–1783",
  "part": "Le premier peintre des hautes Alpes",
  "subtitle": "Glaciers, grottes et cascades",
  "intro": "Voyage avec Caspar Wolf, de Muri en Argovie, l’un des premiers à peindre les hautes Alpes sur place : des premiers paysages aux glaciers de Grindelwald, aux grottes et aux cascades, jusqu’à la vallée de Lauenen. De courtes étapes et des tableaux à colorier. Ce chemin le suit dans la montagne.",
  "ending": [
    "Caspar Wolf meurt à Heidelberg le 6 octobre 1783, à quarante-huit ans. Ses tableaux des hautes Alpes étaient très en avance sur leur temps.",
    "Le chemin mène de Muri, par Grindelwald et les glaciers des hautes Alpes, jusqu’au vallon de Lauenen et au Jura."
  ],
  "epilogue": "Caspar Wolf meurt à Heidelberg le 6 octobre 1783, à quarante-huit ans. Ses tableaux des hautes Alpes étaient très en avance sur leur temps. Le chemin mène de Muri, par Grindelwald et les glaciers des hautes Alpes, jusqu’au vallon de Lauenen et au Jura."
};
  P.stations = Object.assign(P.stations || {}, {
  "cwmuri": {
    "place": "Muri et années de voyage",
    "when": "1735–1773",
    "mapLabel": "Muri",
    "intro": [
      "Caspar Wolf naît à Muri, en Argovie, le 3 mai 1735. Il se forme à Constance, Augsbourg et Munich, puis travaille à Paris.",
      "De retour en Suisse, il peint d’abord des paysages inventés."
    ]
  },
  "cwgrindel": {
    "place": "Grindelwald et Lauterbrunnen",
    "when": "1774–1775",
    "mapLabel": "Grindelwald",
    "intro": [
      "En 1774, l’éditeur bernois Abraham Wagner lui commande des vues des Alpes. Wolf voyage dans l’Oberland avec le naturaliste Jakob Samuel Wyttenbach.",
      "Il peint sur place glaciers, ruisseaux et cascades."
    ]
  },
  "cwhoch": {
    "place": "Les hautes Alpes",
    "when": "1776",
    "mapLabel": "Grimsel",
    "intro": [
      "En 1776, Wolf monte jusqu’aux glaciers du Grimsel. Il peint la glace, la roche et les grottes d’un monde presque inconnu.",
      "Ses tableaux servent de modèles pour des estampes."
    ]
  },
  "cwinner": {
    "place": "Suisse centrale et Valais",
    "when": "1777–1778",
    "mapLabel": "Uri",
    "intro": [
      "En 1777 et 1778, Wolf voyage au lac d’Uri, à Schwyz et jusqu’au Rhône près de Gletsch.",
      "Lacs, ponts et vallées élargissent ses tableaux des Alpes."
    ]
  },
  "cwspaet": {
    "place": "Lauenen, le Jura et l’adieu",
    "when": "1778–1783",
    "mapLabel": "Lauenen",
    "intro": [
      "Vers 1778, Wolf peint la vallée de Lauenen et le pied du Jura. Ensuite, il quitte la Suisse et travaille en Allemagne.",
      "En 1783, il meurt à Heidelberg, sans grande gloire de son vivant."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cwruine": {
    "text": [
      "Un chasseur se tient parmi les rochers, au-dessus s’élève un château en ruine. Le tableau naît peu après le séjour de Wolf à Paris.",
      "Le paysage est encore inventé, non vu sur place."
    ],
    "fact": "1771. Collection particulière."
  },
  "cwbauernhof": {
    "text": [
      "Une ferme se trouve dans un paysage vert et calme. Ici, Wolf peint encore le Plateau.",
      "Un an plus tard commence son grand voyage dans les Alpes."
    ],
    "fact": "1773. Lieu non indiqué."
  },
  "cwgletscher": {
    "text": [
      "La glace du glacier inférieur de Grindelwald descend jusqu’à la vallée, devant coule la Lütschine. Au-dessus se dresse le Mettenberg.",
      "Wolf peint le glacier sur place en 1774, ce qui est alors très inhabituel."
    ],
    "fact": "1774. Kunst Museum Winterthur."
  },
  "cwsteg": {
    "text": [
      "Une étroite passerelle de bois franchit la Lütschine sauvage près de Gsteig. De petites figures montrent l’échelle de la nature.",
      "Le voyage dans l’Oberland bernois offre à Wolf de nombreux motifs nouveaux."
    ],
    "fact": "1774. Kunst Museum Winterthur."
  },
  "cwlauteraar": {
    "text": [
      "Un vaste glacier s’étend entre des montagnes grises, tout en haut dans la région du Grimsel. Les hommes n’apparaissent que comme de petits points.",
      "Wolf montre les hautes Alpes comme un monde étrange et puissant."
    ],
    "fact": "1776. Kunstmuseum de Bâle."
  },
  "cwhoehle": {
    "text": [
      "D’une grotte sombre, on regarde une cascade lumineuse. La lumière et l’ombre se tiennent durement côte à côte.",
      "Les grottes comptent parmi les motifs les plus singuliers de Wolf."
    ],
    "fact": "1776. Kunsthaus de Zurich."
  },
  "cwseelisberg": {
    "text": [
      "Du Seelisberg, on regarde en bas le lac d’Uri vers Altdorf. Des rives escarpées encadrent l’eau.",
      "En 1777, Wolf voyage en Suisse centrale."
    ],
    "fact": "1777. Collection particulière."
  },
  "cwmuota": {
    "text": [
      "Un pont de pierre enjambe la Muota. L’eau, la roche et l’arche forment le tableau.",
      "Chez Wolf, les ponts montrent comment l’homme se fraie un chemin dans les montagnes."
    ],
    "fact": "1778. Collection particulière."
  },
  "cwrhone": {
    "text": [
      "Le jeune Rhône coule dans une haute vallée près de Gletsch, entouré du Gadmerfluh, du Tellistock et du Wendenstock.",
      "Wolf peint les sources des grands fleuves dans les Alpes."
    ],
    "fact": "1778. Collection particulière."
  },
  "cwgelten": {
    "text": [
      "Une cascade passe sous un pont de neige vers la vallée de Lauenen. Le tableau appartient à la National Gallery de Londres.",
      "Il compte aujourd’hui parmi les œuvres les plus connues de Wolf."
    ],
    "fact": "vers 1778. National Gallery, Londres."
  },
  "cwseeberg": {
    "text": [
      "D’un alpage, on regarde par-delà le petit lac de Seeberg vers les montagnes. La lumière est claire et fraîche.",
      "Wolf peint aussi les lieux tranquilles des hautes Alpes."
    ],
    "fact": "vers 1778. Collection particulière."
  },
  "cwbechburg": {
    "text": [
      "Le château de Neu-Bechburg se dresse sur une colline au pied du Jura. En bas s’étend le vaste pays.",
      "Après les Alpes, Wolf se tourne aussi vers le Jura."
    ],
    "fact": "1778. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
