// v10.21 FR content for Giovanni Giacometti’s life journey, Part 1 (1868–1933). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collection particulière",
  "Bündner Kunstmuseum, Chur": "Bündner Kunstmuseum, Coire",
  "Kunsthaus Zürich": "Kunsthaus de Zurich"
});
  P.works = Object.assign(P.works || {}, {
  "ggkinder": {
    "title": "Enfants qui jouent",
    "museum": "Kunsthaus de Zurich"
  },
  "ggscheren": {
    "title": "Le rémouleur",
    "museum": "Collection particulière"
  },
  "ggziegen": {
    "title": "Dans l’étable des chèvres",
    "museum": "Collection particulière"
  },
  "ggmaeher": {
    "title": "Le faucheur",
    "museum": "Collection particulière"
  },
  "ggfiammetta": {
    "title": "Fiammetta II",
    "museum": "Collection particulière"
  },
  "gglampe": {
    "title": "La Lampe",
    "museum": "Kunsthaus de Zurich"
  },
  "gglaceombra": {
    "title": "Lumière et ombre II",
    "museum": "Bündner Kunstmuseum, Coire"
  },
  "ggherbst": {
    "title": "Soleil d’automne",
    "museum": "Kunsthaus de Zurich"
  },
  "ggsommer": {
    "title": "Après-midi d’été",
    "museum": "Kunsthaus de Zurich"
  },
  "ggbrunnen": {
    "title": "Fontaine de village",
    "museum": "Collection particulière"
  },
  "gggarten": {
    "title": "Jardin chez les Balsiger",
    "museum": "Collection particulière"
  },
  "maloja": {
    "title": "Maloja en hiver",
    "museum": "Collection particulière"
  },
  "ggsils": {
    "title": "Vue du lac de Sils depuis Capolago",
    "museum": "Collection particulière"
  },
  "ggcorvatsch": {
    "title": "Lac de Sils avec le Piz Corvatsch",
    "museum": "Collection particulière"
  },
  "ggduan": {
    "title": "Piz Duan",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.giacometti = {
  "title": "Le parcours de vie de Giovanni Giacometti",
  "life": "1868–1933",
  "part": "Partie 1 · Du val Bregaglia à l’Engadine",
  "subtitle": "Stampa, la lumière de Maloja et la famille",
  "intro": "Voyage avec Giovanni Giacometti, le peintre de Stampa, dans le val Bregaglia : des tableaux de jeunesse sur le travail à la famille et à la lumière, jusqu’aux vues d’hiver et aux lacs de Maloja et de Sils. De courtes étapes et des tableaux à colorier. Cette première partie suit le chemin à travers son pays.",
  "ending": [
    "Giovanni Giacometti meurt le 25 juin 1933 à Glion, au bord du Léman. Il est inhumé à Borgonovo, près de Stampa, son lieu de naissance.",
    "Le chemin peut encore s’allonger. D’autres portraits, des fleurs et des paysages de l’Engadine pourront suivre dans une partie ultérieure."
  ],
  "epilogue": "Le 25 juin 1933, Giacometti meurt à Glion. Une partie ultérieure pourra ajouter d’autres portraits et paysages de l’Engadine."
};
  P.stations = Object.assign(P.stations || {}, {
  "ggstampa": {
    "place": "Stampa · Années de formation",
    "when": "1868–1891",
    "mapLabel": "Stampa",
    "intro": [
      "Giovanni Giacometti naît le 7 mars 1868 à Stampa, dans le val Bregaglia. Il étudie à Munich et séjourne à Paris ; en Engadine, il est proche de Segantini.",
      "Les tableaux de jeunesse concernent le travail dans la vallée. Déjà ici, il cherche une langue à lui, plus riche en couleur."
    ]
  },
  "ggtal": {
    "place": "Le travail dans la vallée",
    "when": "1896–1898",
    "mapLabel": "Bregaglia",
    "intro": [
      "Dans les années 1890, Giacometti peint des étables, des faucheurs et la vie paysanne du val Bregaglia. Les motifs restent proches de Segantini, mais la couleur est déjà plus libre.",
      "Il reste fidèle au pays, même lorsque le regard s’élargit. La vallée n’est pas pour lui un décor, mais une origine."
    ]
  },
  "ggfam": {
    "place": "Famille et lumière",
    "when": "1903–1915",
    "mapLabel": "Famille",
    "intro": [
      "En 1900, Giacometti épouse Annetta Stampa. Les enfants Alberto, Diego, Ottilia et Bruno grandissent dans une maison où l’on peint.",
      "Portraits, lumière de lampe, soleil d’automne et pièces de fleurs : dans ces années, l’intérieur devient aussi important que les montagnes."
    ]
  },
  "ggalltag": {
    "place": "Jardin et quotidien",
    "when": "1921–1922",
    "mapLabel": "Jardin",
    "intro": [
      "Au début des années 1920, Giacometti peint des fontaines et des jardins, des lieux ordinaires dans une lumière familière. Il n’a pas besoin d’un motif élevé.",
      "La couleur est lâche et sûre. Le quotidien devient une fête du regard."
    ]
  },
  "ggengadin": {
    "place": "Engadine et Maloja",
    "when": "1924–1927",
    "mapLabel": "Maloja",
    "intro": [
      "Encore et encore, Giacometti revient à Maloja, au lac de Sils et aux sommets de la Haute-Engadine. Ciels d’hiver, lac et roche naissent en taches lâches et sûres.",
      "Il meurt le 25 juin 1933 à Glion et est inhumé à Borgonovo, près de Stampa."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ggkinder": {
    "text": [
      "Des enfants jouent en plein air, les couleurs sont claires, le mouvement est lâche. Giacometti observe le jeu sans le figer en pose.",
      "Le tableau du Kunsthaus de Zurich appartient aux motifs gais et familiers qui l’accompagnent toute sa vie."
    ],
    "fact": "1912. Kunsthaus de Zurich."
  },
  "ggscheren": {
    "text": [
      "Un homme aiguise des couteaux, le corps dans le travail, la lumière sur la roue. Le tableau de 1891 appartient aux motifs de jeunesse, observés de près, sur le labeur.",
      "Giacometti est encore jeune, mais le regard sur le quotidien de la vallée est déjà ferme. La couleur commence à quitter une peinture simplement tonale et sombre."
    ],
    "fact": "1891. Collection particulière."
  },
  "ggziegen": {
    "text": [
      "Dans l’étable, les chèvres sont serrées, la lumière entre par une ouverture. Giacometti peint l’espace étroit sans sentimentalisme.",
      "Le tableau de 1896 montre combien il connaît de près la vie paysanne du val Bregaglia. Les bêtes ont du poids et de la chaleur."
    ],
    "fact": "1896. Collection particulière."
  },
  "ggmaeher": {
    "text": [
      "Un homme fauche l’herbe, la faux dans le geste, le versant clair. Le tableau de travail de 1898 reste proche de la dignité alpine de Segantini, mais la couleur est déjà plus libre.",
      "Giacometti ne quittera jamais tout à fait le labeur du corps dans la vallée, même lorsque plus tard la lumière des lacs l’emporte."
    ],
    "fact": "1898. Collection particulière."
  },
  "ggfiammetta": {
    "text": [
      "Le portrait « Fiammetta II » de 1909 montre une jeune femme dans une lumière chaude, la couleur déjà libre et vive. Giacometti peint le visage de près, sans sévérité.",
      "Dans ces années, le portrait devient pour lui aussi important que le paysage. La lumière se pose sur la peau et le vêtement comme sur une paroi de montagne."
    ],
    "fact": "1909. Collection particulière."
  },
  "gglampe": {
    "text": [
      "Une lampe éclaire l’intérieur, les couleurs se rassemblent autour de la lueur chaude. Giacometti construit le tableau avec quelques tons lumineux.",
      "Le tableau de 1912 du Kunsthaus de Zurich montre combien la lumière de la maison lui est chère, autant que celle des montagnes."
    ],
    "fact": "1912. Kunsthaus de Zurich."
  },
  "gglaceombra": {
    "text": [
      "La lumière et l’ombre partagent l’espace, la couleur s’élève en contrastes nets. Le tableau de 1912 est conservé au Bündner Kunstmuseum de Coire.",
      "Giacometti ne cherche pas ici l’anecdote, mais le jeu de l’éclat sur les plans et les figures."
    ],
    "fact": "1912. Bündner Kunstmuseum, Coire."
  },
  "ggherbst": {
    "text": [
      "Annetta est assise avec Bruno, Ottilia et les enfants dans une lumière d’automne. L’étude retient la famille sans la rendre solennelle.",
      "En 1900, Giacometti a épousé Annetta Stampa. La maison et les enfants – Alberto, Diego, Ottilia, Bruno – appartiennent dès lors à son œuvre."
    ],
    "fact": "1908. Kunsthaus de Zurich."
  },
  "ggsommer": {
    "text": [
      "Un après-midi d’été dans une lumière lâche, les couleurs chaudes et ouvertes. Giacometti laisse la scène respirer, sans la cerner trop ferme.",
      "Le tableau du Kunsthaus de Zurich montre sa main mûre, d’une liberté impressionniste, fermement enracinée dans le quotidien grison."
    ],
    "fact": "1903. Kunsthaus de Zurich."
  },
  "ggbrunnen": {
    "text": [
      "La fontaine du village est dans la lumière, la pierre et l’eau en taches calmes. Le tableau de 1921 retient un lieu ordinaire du val Bregaglia ou de l’Engadine.",
      "Giacometti n’a pas besoin d’un motif célèbre. Une fontaine, un chemin, un jardin suffisent lorsque la lumière est juste."
    ],
    "fact": "1921. Collection particulière."
  },
  "gggarten": {
    "text": [
      "Un jardin chez les Balsiger, en 1922, plein de feuillage et de lumière d’été. Giacometti peint le lieu clos aussi largement qu’un paysage.",
      "La couleur est lâche et sûre. Dans de tels tableaux, le quotidien devient une fête du regard."
    ],
    "fact": "1922. Collection particulière."
  },
  "maloja": {
    "text": [
      "Au-dessus du village enneigé de Maloja s’élève un ciel d’hiver clair. Giacometti peint encore et encore son pays, le val Bregaglia et la Haute-Engadine.",
      "Le tableau d’environ 1925 appartient aux vues d’hiver les plus silencieuses. La couleur reste vivante, même dans la neige."
    ],
    "fact": "vers 1925. Collection particulière."
  },
  "ggsils": {
    "text": [
      "Depuis Capolago, le lac de Sils est calme sous les montagnes. Le tableau de 1927 rassemble ampleur et hauteur en taches lâches et sûres.",
      "Giacometti connaît de près ces rives. Il ne les peint pas en panorama pour voyageurs, mais comme un lieu familier."
    ],
    "fact": "1927. Collection particulière."
  },
  "ggcorvatsch": {
    "text": [
      "Le lac de Sils s’étend devant le Piz Corvatsch, l’eau et le sommet en un seul geste. Giacometti simplifie la vue célèbre jusqu’à ne garder que la lumière.",
      "De tels tableaux appartiennent à son œuvre tardive en Haute-Engadine : amples, colorés, sans une hauteur théâtrale."
    ],
    "fact": "vers 1925. Collection particulière."
  },
  "ggduan": {
    "text": [
      "Le Piz Duan s’élève au-dessus du val Bregaglia, un sommet familier pour le peintre de Stampa. Giacometti donne à la montagne du poids et de la couleur, non pas seulement un contour.",
      "Dans les années 1920, il revient encore et encore à de tels motifs du pays. La lumière vient de côté et demeure sur le versant."
    ],
    "fact": "vers 1924. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
