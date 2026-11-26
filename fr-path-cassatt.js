// v10.43 FR content for Mary Cassatt’s life journey (1844–1926). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "csbullfight": {
    "title": "Après la corrida",
    "museum": "Art Institute of Chicago"
  },
  "csarmchair": {
    "title": "Petite Fille dans un fauteuil bleu",
    "museum": "National Gallery of Art, Washington"
  },
  "csfan": {
    "title": "Femme à l’éventail",
    "museum": "National Gallery of Art, Washington"
  },
  "csbalcony": {
    "title": "Sur un balcon",
    "museum": "Art Institute of Chicago"
  },
  "csloge": {
    "title": "La Loge",
    "museum": "National Gallery of Art, Washington"
  },
  "cssusan": {
    "title": "Susan au chapeau de paille",
    "museum": "Art Institute of Chicago"
  },
  "cswindow": {
    "title": "Jeune Fille à la fenêtre",
    "museum": "National Gallery of Art, Washington"
  },
  "csbeach": {
    "title": "Enfants jouant sur la plage",
    "museum": "National Gallery of Art, Washington"
  },
  "csstrawhat": {
    "title": "Enfant au chapeau de paille",
    "museum": "National Gallery of Art, Washington"
  },
  "cslady": {
    "title": "Portrait d’une dame",
    "museum": "National Gallery of Art, Washington"
  },
  "cskiss": {
    "title": "Le Baiser du soir de la mère",
    "museum": "Art Institute of Chicago"
  },
  "csblackhat": {
    "title": "Le Chapeau noir",
    "museum": "National Gallery of Art, Washington"
  },
  "cszinnia": {
    "title": "Femme à la zinnia rouge (Rêverie)",
    "museum": "National Gallery of Art, Washington"
  },
  "csboating": {
    "title": "La Partie en bateau",
    "museum": "National Gallery of Art, Washington"
  },
  "cssara": {
    "title": "Sara en bonnet et manteau",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.cassatt = {
  "title": "Le parcours de vie de Mary Cassatt",
  "part": "Séville, Paris et Beaufresne",
  "subtitle": "Femmes, enfants et théâtre",
  "intro": "Voyage à travers la vie de Mary Cassatt : de Séville, des loges des théâtres parisiens et des expositions impressionnistes jusqu’à ses tableaux de mères et d’enfants. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Mary Cassatt meurt le 14 juin 1926 dans sa propriété de Beaufresne, près de Paris.",
    "Elle aide des collectionneurs américains à acheter des tableaux impressionnistes, aujourd’hui exposés dans de nombreux musées des États-Unis."
  ],
  "epilogue": "Mary Cassatt meurt à Beaufresne le 14 juin 1926. Le parcours mène de Séville et des théâtres parisiens aux tableaux de mères et d’enfants.",
  "life": "1844–1926"
};
  P.stations = Object.assign(P.stations || {}, {
  "css1": {
    "place": "De la Pennsylvanie à Paris",
    "when": "1844–1880",
    "mapLabel": "Paris",
    "intro": [
      "Mary Cassatt naît le 22 mai 1844 près de Pittsburgh, aux États-Unis, apprend à peindre à Philadelphie et part pour Paris en 1866.",
      "En 1873, elle peint à Séville ; en 1877, Edgar Degas l’invite à exposer avec les impressionnistes."
    ]
  },
  "css2": {
    "place": "Paris : amies et enfants",
    "when": "1881–1889",
    "mapLabel": "Paris",
    "intro": [
      "Cassatt vit à Paris avec ses parents et sa sœur Lydia et peint des femmes et des enfants de son entourage.",
      "Elle travaille souvent au pastel, qui lui permet de dessiner vite et avec des couleurs franches."
    ]
  },
  "cassatt1": {
    "place": "Mères, enfants et Beaufresne",
    "when": "1890–1926",
    "mapLabel": "Beaufresne",
    "intro": [
      "Après une grande exposition d’estampes japonaises à Paris en 1890, les tableaux de Cassatt deviennent plus nets et plus plats.",
      "En 1894, elle achète la propriété de Beaufresne, au nord de Paris ; vers 1914, elle doit renoncer à peindre à cause de ses yeux."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "csbullfight": {
    "text": [
      "Un torero à la veste richement brodée s’appuie après la corrida contre une barrière de bois.",
      "Cassatt peint le tableau en 1873 à Séville, où elle vit plusieurs mois."
    ],
    "fact": "1873. Art Institute of Chicago."
  },
  "csarmchair": {
    "text": [
      "Une petite fille est affalée, fatiguée, dans un grand fauteuil bleu, un chien dort dans le fauteuil voisin.",
      "Edgar Degas aide Cassatt pour le fond du tableau."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "csfan": {
    "text": [
      "Une jeune femme est assise dans un fauteuil, un grand éventail doré sur les genoux.",
      "Derrière elle, d’autres silhouettes sont seulement esquissées."
    ],
    "fact": "vers 1878–1879. National Gallery of Art, Washington."
  },
  "csbalcony": {
    "text": [
      "Une femme en robe claire lit le journal, entourée de fleurs et de verdure.",
      "Cassatt peint la scène par touches rapides et claires."
    ],
    "fact": "1878–1879. Art Institute of Chicago."
  },
  "csloge": {
    "text": [
      "Deux jeunes femmes sont assises dans une loge de théâtre, l’une tient un éventail ouvert, l’autre un bouquet de fleurs.",
      "Derrière elles se reflètent les lumières de la salle."
    ],
    "fact": "vers 1878–1880. National Gallery of Art, Washington."
  },
  "cssusan": {
    "text": [
      "Une jeune femme au chapeau de paille et au ruban bleu regarde pensivement vers le bas.",
      "Cassatt dessine le portrait avec des pastels tendres."
    ],
    "fact": "vers 1883. Art Institute of Chicago."
  },
  "cswindow": {
    "text": [
      "Une jeune femme en blanc, coiffée d’un grand chapeau, est assise près de la fenêtre ouverte, un petit chien sur les genoux.",
      "Dehors, on voit les toits et les maisons de Paris."
    ],
    "fact": "vers 1883–1884. National Gallery of Art, Washington."
  },
  "csbeach": {
    "text": [
      "Deux petites filles jouent dans le sable avec un seau et une pelle.",
      "Au loin, des voiliers glissent sur la mer bleue."
    ],
    "fact": "1884. National Gallery of Art, Washington."
  },
  "csstrawhat": {
    "text": [
      "Une petite fille au grand chapeau de paille et au tablier gris se tient debout, l’air sérieux.",
      "Elle garde les mains croisées devant elle."
    ],
    "fact": "vers 1886. National Gallery of Art, Washington."
  },
  "cslady": {
    "text": [
      "Une dame âgée aux cheveux gris, une fleur rose à son bonnet, est assise en noir dans un fauteuil.",
      "Une étoffe aux motifs colorés est posée sur le dossier."
    ],
    "fact": "vers 1887. National Gallery of Art, Washington."
  },
  "cskiss": {
    "text": [
      "Une mère tient dans ses bras son enfant en robe bleue et l’embrasse.",
      "L’enfant regarde, ensommeillé, par-dessus son épaule."
    ],
    "fact": "1888. Art Institute of Chicago."
  },
  "csblackhat": {
    "text": [
      "Une jeune femme coiffée d’un grand chapeau noir à plumes porte une robe bleu clair.",
      "Cassatt laisse le fond presque vide, si bien que le chapeau et la robe ressortent d’autant plus."
    ],
    "fact": "vers 1890. National Gallery of Art, Washington."
  },
  "cszinnia": {
    "text": [
      "Une femme en robe rayée de violet tient une fleur rouge et appuie la tête sur sa main.",
      "Derrière elle brille un jardin vert."
    ],
    "fact": "1891–1892. National Gallery of Art, Washington."
  },
  "csboating": {
    "text": [
      "Un homme en bleu foncé rame, emmenant sur la mer bleue une femme avec un enfant sur les genoux.",
      "Cassatt peint le tableau sur la côte près d’Antibes, dans le sud de la France."
    ],
    "fact": "1893–1894. National Gallery of Art, Washington."
  },
  "cssara": {
    "text": [
      "Une petite fille coiffée d’un grand bonnet rose sourit malicieusement.",
      "Cassatt dessine la feuille par de délicats traits de pastel sur du papier brun clair."
    ],
    "fact": "vers 1904–1906. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
