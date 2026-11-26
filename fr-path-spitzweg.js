// v10.21 FR content for Carl Spitzweg’s life journey, Part 1 (1808–1885). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Grohmann Museum, Milwaukee": "Grohmann Museum, Milwaukee",
  "Privatsammlung": "Collection particulière",
  "Neue Pinakothek, München": "Neue Pinakothek, Munich"
});
  P.works = Object.assign(P.works || {}, {
  "csself": {
    "title": "Autoportrait",
    "museum": "Collection particulière"
  },
  "cspoet": {
    "title": "Le Pauvre Poète",
    "museum": "Neue Pinakothek, Munich"
  },
  "csgarret": {
    "title": "La mansarde",
    "museum": "Collection particulière"
  },
  "csalchem": {
    "title": "L’Alchimiste",
    "museum": "Grohmann Museum, Milwaukee"
  },
  "csbutterfly": {
    "title": "Le Chasseur de papillons",
    "museum": "Collection particulière"
  },
  "csbook": {
    "title": "Le Bibliomane",
    "museum": "Grohmann Museum, Milwaukee"
  },
  "cscactus": {
    "title": "L’Amateur de cactus",
    "museum": "Collection particulière"
  },
  "csastro": {
    "title": "L’Astronome",
    "museum": "Collection particulière"
  },
  "csflowers": {
    "title": "L’Amateur de fleurs",
    "museum": "Collection particulière"
  },
  "csangler": {
    "title": "Le Pêcheur à la ligne",
    "museum": "Collection particulière"
  },
  "cspost": {
    "title": "Le Facteur dans le Rosenthal",
    "museum": "Collection particulière"
  },
  "cswatch": {
    "title": "Le Veilleur de nuit endormi",
    "museum": "Collection particulière"
  },
  "csmonks": {
    "title": "Moines en dispute",
    "museum": "Collection particulière"
  },
  "cssunday": {
    "title": "La Promenade du dimanche",
    "museum": "Collection particulière"
  },
  "cschurch": {
    "title": "Le Chemin de l’église",
    "museum": "Collection particulière"
  }
});
  P.paths = P.paths || {};
  P.paths.spitzweg = {
  "title": "Le parcours de vie de Carl Spitzweg",
  "life": "1808–1885",
  "part": "Munich et les originaux",
  "subtitle": "De pharmacien à peintre du Biedermeier",
  "intro": "Voyage avec Carl Spitzweg, le Munichois qui fut d’abord pharmacien : des mansardes du pauvre poète aux rats de bibliothèque, aux amateurs de cactus et aux veilleurs de nuit, jusqu’à la promenade du dimanche. De courtes étapes et des tableaux à colorier. Ce chemin suit les tableaux de genre bien connus.",
  "ending": [
    "Spitzweg meurt à Munich le 23 septembre 1885. Il reste célibataire et fidèle à son humour discret et exact.",
    "Le chemin mène du pharmacien devenu peintre, par les mansardes et les originaux, jusqu’aux promenades du dimanche en Bavière."
  ],
  "epilogue": "Spitzweg meurt à Munich le 23 septembre 1885. Il reste célibataire et fidèle à son humour discret et exact. Le chemin mène du pharmacien devenu peintre, par les mansardes et les originaux, jusqu’aux promenades du dimanche en Bavière."
};
  P.stations = Object.assign(P.stations || {}, {
  "csmuc": {
    "place": "Munich · Le pharmacien devient peintre",
    "when": "1808–1842",
    "mapLabel": "Munich",
    "intro": [
      "Carl Spitzweg naît à Munich le 5 février 1808 et devient d’abord pharmacien. Après une maladie au début des années 1830, il se tourne fermement vers la peinture.",
      "L’autoportrait d’environ 1842 le montre déjà en peintre. La ville reste son lieu, même lorsque les motifs se situent souvent hors les murs."
    ]
  },
  "csdach": {
    "place": "Mansardes",
    "when": "1837–1842",
    "mapLabel": "Mansarde",
    "intro": [
      "À la fin des années 1830 naissent les tableaux de mansarde, parmi eux « Le Pauvre Poète » de 1839. Spitzweg trouve ici son ton : exact, discret, sans méchanceté.",
      "L’étroitesse sous le toit devient un regard sur une seule vie. Munich se reconnaît dans ces pièces."
    ]
  },
  "cssond": {
    "place": "Originaux",
    "when": "1837–1860",
    "mapLabel": "Originaux",
    "intro": [
      "Alchimiste, chasseur de papillons, bibliomane, amateur de cactus, astronome, amateur de fleurs : Spitzweg invente une galerie de solitaires absorbés.",
      "L’humour est dans l’exactitude. Aucun de ces hommes n’est réduit à une caricature."
    ]
  },
  "csstadt": {
    "place": "Ville et veille",
    "when": "1850–1860",
    "mapLabel": "Ville",
    "intro": [
      "Facteur, veilleur endormi, moines en dispute, un pêcheur au bord de l’eau : Spitzweg voit le quotidien de la ville et de ses bords.",
      "La figure reste seule, le lieu est exact. Ce sont des comédies discrètes, sans grande chute."
    ]
  },
  "cssonntag": {
    "place": "Dimanche en Bavière",
    "when": "1841–1860",
    "mapLabel": "Dimanche",
    "intro": [
      "La promenade du dimanche et le chemin de l’église relient la société et le paysage. Spitzweg connaît le rite bourgeois et la large nature bavaroise.",
      "Il meurt à Munich le 23 septembre 1885."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "csself": {
    "text": [
      "L’autoportrait d’environ 1842 montre Spitzweg en jeune peintre, le métier de pharmacien déjà derrière lui. Le regard est ouvert, presque gai, sans pose.",
      "Il s’est formé tout seul à la peinture, après une maladie au début des années 1830. Munich reste son lieu."
    ],
    "fact": "vers 1842. Collection particulière."
  },
  "cspoet": {
    "text": [
      "Sous le toit, le poète est couché, le quartier d’un parapluie au-dessus de lui, des manuscrits autour de lui. Le tableau de 1839 est l’œuvre la plus connue de Spitzweg.",
      "Il est conservé à la Neue Pinakothek de Munich. L’humour est discret et exact : l’étroitesse n’est pas moquée, elle est regardée."
    ],
    "fact": "1839. Neue Pinakothek, Munich."
  },
  "csgarret": {
    "text": [
      "Une petite pièce sous le toit, pauvrement meublée, la fenêtre pour seule ampleur. Spitzweg revient encore et encore à ce lieu.",
      "La mansarde n’est pas seulement un motif, mais un point de vue : d’en haut sur la ville, et pourtant tout près d’une seule vie."
    ],
    "fact": "vers 1840. Collection particulière."
  },
  "csalchem": {
    "text": [
      "Dans une chambre étroite, l’alchimiste s’affaire aux cornues et au fourneau. Le tableau de 1837, déjà, montre le regard de Spitzweg sur l’original absorbé.",
      "La science est ici une passion calme, presque une comédie, mais sans méchanceté."
    ],
    "fact": "1837. Grohmann Museum, Milwaukee."
  },
  "csbutterfly": {
    "text": [
      "Un homme au filet poursuit le papillon, tout entier à sa tâche, un peu comique et très sérieux. Spitzweg aime ces collectionneurs absorbés.",
      "Le motif d’environ 1840 appartient aux tableaux gais des années munichoises. Le paysage reste un cadre silencieux."
    ],
    "fact": "vers 1840. Collection particulière."
  },
  "csbook": {
    "text": [
      "Haut sur l’échelle, le lecteur se tient entre les rayons, un livre à la main, un sous le bras, un entre les genoux. Le monde est la bibliothèque.",
      "Le tableau d’environ 1850 compte parmi les inventions les plus célèbres de Spitzweg. L’humour est dans l’exactitude, non dans l’exagération."
    ],
    "fact": "vers 1850. Grohmann Museum, Milwaukee."
  },
  "cscactus": {
    "text": [
      "Un homme regarde son cactus, de près, presque avec respect, comme si la plante était un interlocuteur. Spitzweg connaît la passion calme du collectionneur.",
      "Le tableau du milieu du siècle est l’un de ses originaux les plus affectueux. Rien n’est tourné en dérision."
    ],
    "fact": "vers 1856. Collection particulière."
  },
  "csastro": {
    "text": [
      "Un savant regarde le ciel, l’instrument prêt, le monde en bas tout loin. Spitzweg place la figure absorbée en plein air.",
      "Le tableau d’environ 1860 reste une scène de genre et devient pourtant un paysage silencieux. L’humour est dans le sérieux de l’attitude."
    ],
    "fact": "vers 1860. Collection particulière."
  },
  "csflowers": {
    "text": [
      "Un homme se tient devant ses fleurs, soigneux, presque recueilli. Spitzweg donne à la petite joie le même sérieux qu’au pauvre poète.",
      "Les tableaux de jardin appartiennent pleinement à son œuvre. Le vert est exact, la figure reste humaine et proche."
    ],
    "fact": "vers 1855. Collection particulière."
  },
  "csangler": {
    "text": [
      "Au bord de l’eau est assis le pêcheur, patient et seul. Spitzweg laisse le paysage ample, la figure petite, le temps lent.",
      "C’est un tableau silencieux de l’attente. L’humour, s’il est là, reste sous la surface."
    ],
    "fact": "vers 1860. Collection particulière."
  },
  "cspost": {
    "text": [
      "Le facteur traverse le Rosenthal, la besace au flanc, le chemin entre arbres et maisons. Spitzweg peint la tournée comme un quotidien calme.",
      "Le motif d’environ 1858 appartient aux vues de ville et de faubourg où une seule personne porte la scène."
    ],
    "fact": "vers 1858. Collection particulière."
  },
  "cswatch": {
    "text": [
      "Le veilleur de nuit s’est endormi, la lanterne encore là, le devoir oublié un instant. Spitzweg est indulgent, non sévère.",
      "Le tableau appartient aux comédies discrètes de la ville la nuit. La figure reste digne, même dans le sommeil."
    ],
    "fact": "vers 1850. Collection particulière."
  },
  "csmonks": {
    "text": [
      "Deux moines sont absorbés dans un entretien, les gestes et les visages portent la dispute. Spitzweg observe le zèle sans prendre parti.",
      "Les tableaux de couvent et de moines appartiennent pleinement à son genre. L’humour est dans le sérieux des deux."
    ],
    "fact": "vers 1860. Collection particulière."
  },
  "cssunday": {
    "text": [
      "Une famille se promène le dimanche, festive et un peu raide, le paysage ample derrière elle. Spitzweg connaît de près le rite bourgeois.",
      "Le motif est l’un de ses tableaux de société les plus affectueux. L’humour reste aimable, l’observation est vive."
    ],
    "fact": "vers 1841. Collection particulière."
  },
  "cschurch": {
    "text": [
      "Des gens se rendent à l’église, petits dans un large paysage, le chemin traverse le pays. Spitzweg relie le genre et la nature.",
      "De tels tableaux appartiennent à l’œuvre tardive plus calme. Le dimanche est ici moins une comédie qu’un ordre du jour."
    ],
    "fact": "vers 1860. Collection particulière."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
