// v10.43 FR content for Keisai Eisen’s life journey (1790–1848). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York"
});
  P.works = Object.assign(P.works || {}, {
  "ketakanawa": {
    "title": "Voiles rentrant à Takanawa",
    "museum": "Art Institute of Chicago"
  },
  "kefuji": {
    "title": "Vue du mont Fuji depuis une maison de thé",
    "museum": "Art Institute of Chicago"
  },
  "kesparrows": {
    "title": "Moineaux, bambou et neige qui tombe",
    "museum": "Musée d’art de Cleveland"
  },
  "kefishes": {
    "title": "Poissons nageant parmi des fleurs jaunes",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "kecarp": {
    "title": "Carpe remontant une cascade",
    "museum": "Musée d’art de Cleveland"
  },
  "kekoi": {
    "title": "Carpe koï",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "keitahana": {
    "title": "N° 15 : Itahana",
    "museum": "Art Institute of Chicago"
  },
  "kehiratsuka": {
    "title": "N° 20 : Pluie sur la plaine d’Hiratsuka près de Kutsukake",
    "museum": "Art Institute of Chicago"
  },
  "kesuwa": {
    "title": "N° 31 : Vue du lac Suwa depuis le col de Shiojiri",
    "museum": "Art Institute of Chicago"
  },
  "kenojiri": {
    "title": "N° 41 : Vue lointaine du pont sur l’Ina à Nojiri",
    "museum": "Art Institute of Chicago"
  },
  "kewarabi": {
    "title": "Warabi : bac sur la rivière Toda",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ketoeizan": {
    "title": "Le temple Tōeizan vu du sanctuaire de Benten à Shinobazu, Edo",
    "museum": "Art Institute of Chicago"
  },
  "kesnow": {
    "title": "Neige sur la rivière Sumida",
    "museum": "Art Institute of Chicago"
  },
  "kesnowdist": {
    "title": "Vue lointaine de la neige sur la Sumida, à Edo",
    "museum": "Art Institute of Chicago"
  },
  "kenihonbashi": {
    "title": "Éclaircie à Nihonbashi",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.eisen = {
  "title": "Le parcours de vie de Keisai Eisen",
  "part": "Routes et rivières",
  "subtitle": "D’Edo le long du Kisokaidō",
  "intro": "Voyage avec le graveur japonais Keisai Eisen : vers des estampes de Nouvel An ornées de poèmes, des poissons et des oiseaux, le long de la route de montagne du Kisokaidō et jusqu’à la rivière Sumida enneigée, à Edo. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Keisai Eisen meurt en 1848.",
    "Ses estampes sont aujourd’hui conservées dans des musées du monde entier."
  ],
  "epilogue": "Keisai Eisen meurt en 1848. Le parcours mène des estampes de Nouvel An ornées de poèmes, en passant par les poissons et les oiseaux, aux relais du Kisokaidō, puis de retour à Edo.",
  "life": "1790–1848"
};
  P.stations = Object.assign(P.stations || {}, {
  "kes1": {
    "place": "Vœux de Nouvel An en poèmes",
    "when": "1820–1829",
    "mapLabel": "Japon",
    "intro": [
      "Keisai Eisen vit de 1790 à 1848 ; il est le fils d’un peintre de l’école Kanō et écrit aussi des poèmes.",
      "Les surimono sont des estampes commandées à titre privé, souvent des vœux de Nouvel An de cercles de poètes, avec des poèmes et des couleurs particulièrement fines."
    ]
  },
  "kes2": {
    "place": "Poissons, oiseaux et fleurs",
    "when": "1827–1842",
    "mapLabel": "Japon",
    "intro": [
      "À côté des paysages, Eisen dessine des estampes de poissons, d’oiseaux et de plantes.",
      "Souvent, les animaux occupent presque toute la feuille sur un fond simple."
    ]
  },
  "kes3": {
    "place": "Les relais du Kisokaidō",
    "when": "1835–1838",
    "mapLabel": "Kisokaidō",
    "intro": [
      "Vers 1835, Eisen commence une série d’estampes sur les relais de poste du Kisokaidō, la route de l’intérieur entre Edo et Kyoto.",
      "Utagawa Hiroshige achève plus tard la série."
    ]
  },
  "kes4": {
    "place": "Vues d’Edo",
    "when": "1830–1847",
    "mapLabel": "Edo",
    "intro": [
      "À Edo, l’actuelle Tokyo, Eisen dessine des temples, des berges enneigées et des ponts animés.",
      "Vers 1830, il entoure une série de lieux célèbres d’Edo de cadres faits de lettres occidentales."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ketakanawa": {
    "text": [
      "Des voiliers rentrent à travers la vaste baie, et des gens se promènent sur la plage.",
      "En haut figurent plusieurs poèmes, et la feuille est signée « Keisai »."
    ],
    "fact": "vers 1820–1829. Art Institute of Chicago."
  },
  "kefuji": {
    "text": [
      "Des hôtes se reposent sur la rive sous un arbre en fleurs, et au loin s’élève le Fuji enneigé.",
      "Des pigments métalliques ont aussi été utilisés pour l’estampe, signée « Keisai ga », peint par Keisai."
    ],
    "fact": "vers 1820–1829. Art Institute of Chicago."
  },
  "kesparrows": {
    "text": [
      "Deux moineaux volent entre de fines tiges de bambou, tandis que tombent de légers flocons.",
      "Le Cleveland Museum of Art date l’estampe en couleurs de la fin des années 1820."
    ],
    "fact": "vers 1827–1829. Musée d’art de Cleveland."
  },
  "kefishes": {
    "text": [
      "Trois poissons argentés nagent devant une plante aux fleurs d’un jaune vif.",
      "La feuille est un surimono avec un poème, entré au Metropolitan Museum en 1919."
    ],
    "fact": "vers 1830. Metropolitan Museum of Art, New York."
  },
  "kecarp": {
    "text": [
      "Dans l’image haute et étroite, une carpe remonte en se tordant une cascade bleue.",
      "En Asie, la carpe symbolise la chance et la persévérance ; au Japon, on la montre donc souvent remontant des cascades."
    ],
    "fact": "vers 1830–1836. Musée d’art de Cleveland."
  },
  "kekoi": {
    "text": [
      "Une grande carpe sombre nage dans une eau bleue parcourue de lignes ondulées claires.",
      "Le Metropolitan Museum date l’estampe vers 1842 et l’a acquise en 1917."
    ],
    "fact": "vers 1842. Metropolitan Museum of Art, New York."
  },
  "keitahana": {
    "text": [
      "Des voyageurs passent devant des arbres couverts de neige, sur un chemin au bord de la rivière.",
      "Itahana est le 15e relais de la série des soixante-neuf relais du Kisokaidō."
    ],
    "fact": "vers 1835–1836. Art Institute of Chicago."
  },
  "kehiratsuka": {
    "text": [
      "Des voyageurs avec des chevaux de bât luttent contre la pluie oblique et le vent.",
      "Le relais de Kutsukake porte le numéro 20 dans la série du Kisokaidō."
    ],
    "fact": "vers 1835–1836. Art Institute of Chicago."
  },
  "kesuwa": {
    "text": [
      "Des voyageurs gravissent une pente verte au-dessus du vaste lac, et au loin se dresse un sommet enneigé.",
      "La vue du lac Suwa depuis le col porte le numéro 31 dans la série du Kisokaidō."
    ],
    "fact": "vers 1835–1836. Art Institute of Chicago."
  },
  "kenojiri": {
    "text": [
      "Des voyageurs franchissent un pont haut au-dessus d’une rivière, entre des montagnes vertes et escarpées.",
      "En haut à gauche se dessine la silhouette du pavillon de Kannon d’un temple."
    ],
    "fact": "vers 1835–1836. Art Institute of Chicago."
  },
  "kewarabi": {
    "text": [
      "Un bac bondé transporte des voyageurs sur la rivière bleue, avec des arbres et des maisons sur la rive.",
      "Au relais de Warabi, les voyageurs traversent la rivière Toda en bac."
    ],
    "fact": "vers 1838. Metropolitan Museum of Art, New York."
  },
  "ketoeizan": {
    "text": [
      "Le regard traverse un étang vert clair où flotte une petite barque, jusqu’aux arbres et aux toits de la rive.",
      "La feuille appartient à une série de lieux célèbres d’Edo encadrés de lettres occidentales."
    ],
    "fact": "vers 1830. Art Institute of Chicago."
  },
  "kesnow": {
    "text": [
      "La neige recouvre les toits et les arbres de la rive, et une petite barque glisse sur la rivière bleue.",
      "L’Art Institute of Chicago date la feuille du début des années 1830."
    ],
    "fact": "vers 1830–1833. Art Institute of Chicago."
  },
  "kesnowdist": {
    "text": [
      "Une barque transportant des passagers glisse sur la rivière bleue, entre des rives couvertes de neige.",
      "Le Cleveland Museum of Art possède une autre épreuve de ce motif."
    ],
    "fact": "vers 1840–1844. Art Institute of Chicago."
  },
  "kenihonbashi": {
    "text": [
      "Une foule se presse sur le pont Nihonbashi, et derrière s’élève le Fuji au-dessus de la ville.",
      "La feuille fait partie de la série « Huit vues d’Edo »."
    ],
    "fact": "1843–1847. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
