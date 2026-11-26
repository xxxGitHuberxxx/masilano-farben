// v10.43 FR content for Odilon Redon’s life journey (1840–1916). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "odvillage": {
    "title": "Village au bord de la mer en Bretagne",
    "museum": "National Gallery of Art, Washington"
  },
  "odbreton": {
    "title": "Village breton",
    "museum": "National Gallery of Art, Washington"
  },
  "odsita": {
    "title": "Sita",
    "museum": "Art Institute of Chicago"
  },
  "odbouquet": {
    "title": "Bouquet de fleurs",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "odwild": {
    "title": "Fleurs des champs",
    "museum": "National Gallery of Art, Washington"
  },
  "odpansies": {
    "title": "Pensées",
    "museum": "National Gallery of Art, Washington"
  },
  "odetruscan": {
    "title": "Vase étrusque avec fleurs",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "odstilllife": {
    "title": "Nature morte aux fleurs",
    "museum": "Art Institute of Chicago"
  },
  "odvase05": {
    "title": "Vase de fleurs",
    "museum": "Musée d’art de Cleveland"
  },
  "odpink": {
    "title": "Vase de fleurs (fond rose)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "odviolette": {
    "title": "Violette Heymann",
    "museum": "Musée d’art de Cleveland"
  },
  "odflowers10": {
    "title": "Fleurs dans un vase",
    "museum": "National Gallery of Art, Washington"
  },
  "odlargevase": {
    "title": "Grand vase de fleurs",
    "museum": "National Gallery of Art, Washington"
  },
  "odbutterflies": {
    "title": "Cinq papillons",
    "museum": "National Gallery of Art, Washington"
  },
  "odvase16": {
    "title": "Vase de fleurs",
    "museum": "Musée d’art de Cleveland"
  }
});
  P.paths = P.paths || {};
  P.paths.redon = {
  "title": "Le parcours de vie d’Odilon Redon",
  "part": "Du noir à la couleur",
  "subtitle": "Des fleurs comme en rêve",
  "intro": "Voyage à travers la vie d’Odilon Redon : des villages paisibles de Bretagne aux bouquets lumineux et aux papillons. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Odilon Redon meurt en 1916 à l’âge de 76 ans.",
    "Ses lumineux tableaux de fleurs sont aujourd’hui visibles dans des musées du monde entier."
  ],
  "epilogue": "Odilon Redon meurt en 1916. Le parcours mène de la Bretagne et de son passage à la couleur jusqu’aux fleurs et aux papillons de ses dernières années.",
  "life": "1840–1916"
};
  P.stations = Object.assign(P.stations || {}, {
  "ods1": {
    "place": "Enfance dans le Médoc et paysages",
    "when": "1880–1890",
    "mapLabel": "Bretagne",
    "intro": [
      "Odilon Redon naît à Bordeaux le 20 avril 1840 et, enfant fragile, passe sa jeunesse dans le domaine familial de Peyrelebade, dans le Médoc, entre lande et marais.",
      "À 20 ans, il rencontre le botaniste Armand Clavaud, et il dessine d’après nature le long des dunes de la côte atlantique."
    ]
  },
  "ods2": {
    "place": "Du noir à la couleur",
    "when": "1893–1905",
    "mapLabel": "Paris",
    "intro": [
      "Redon se fait d’abord connaître par ses « noirs », des dessins au fusain qu’il expose pour la première fois à Paris au début des années 1880.",
      "Dans les années 1890, il se tourne vers la couleur, surtout vers le pastel, poudreux comme le fusain."
    ]
  },
  "ods3": {
    "place": "Des fleurs comme en rêve",
    "when": "1900–1910",
    "mapLabel": "Paris",
    "intro": [
      "Vers 1900, des fleurs et des feuillages lumineux envahissent ses pastels et ses tableaux.",
      "Les natures mortes de fleurs dominent les quinze dernières années de sa carrière et lui apportent son plus grand succès commercial."
    ]
  },
  "ods4": {
    "place": "Portraits, fleurs et papillons",
    "when": "1910–1916",
    "mapLabel": "Paris",
    "intro": [
      "Plus tard, Redon réalise aussi des portraits au pastel de femmes avec des fleurs, souvent sur commande.",
      "Après 1912, il renonce au fixatif pour ses pastels, afin que les couleurs gardent leur éclat."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "odvillage": {
    "text": [
      "Des maisons claires s’alignent au bord d’une baie bleue, devant une large bande de sable.",
      "Redon peint le petit tableau à l’huile sur carton et le signe « ODILON REDON » en bas à droite."
    ],
    "fact": "vers 1880. National Gallery of Art, Washington."
  },
  "odbreton": {
    "text": [
      "Des maisons blanches aux toits gris se dressent derrière une prairie verte, et des nuages blancs passent dans le ciel bleu.",
      "En bas à gauche, Redon signe « ODILON REDON » en peinture rouge et violette."
    ],
    "fact": "vers 1890. National Gallery of Art, Washington."
  },
  "odsita": {
    "text": [
      "Une femme aux cheveux brun-roux regarde de profil sur le côté, entourée de bleu et de vert lumineux, tandis qu’à gauche flotte une forme dorée.",
      "Redon travaille ici au pastel et un peu au crayon sur du fusain, tout comme il passe du noir à la couleur."
    ],
    "fact": "vers 1893. Art Institute of Chicago."
  },
  "odbouquet": {
    "text": [
      "D’un vase bleu jaillit un bouquet foisonnant de fleurs qui évoquent le lilas, le coquelicot et la marguerite, parmi lesquelles voltigent de petits papillons.",
      "Redon, ami proche du botaniste Armand Clavaud, réalise ce grand pastel avec l’émerveillement d’un naturaliste."
    ],
    "fact": "vers 1900–1905. Metropolitan Museum of Art, New York."
  },
  "odwild": {
    "text": [
      "Dans un vase vert foncé se dressent de grandes fleurs rouge orangé, des étoiles jaunes et de petites fleurs bleues devant un fond brun chaud.",
      "Redon dessine le pastel sur un papier brun recouvert de sciure de bois."
    ],
    "fact": "vers 1905. National Gallery of Art, Washington."
  },
  "odpansies": {
    "text": [
      "Des pensées bleues, violettes et jaunes brillent dans un simple vase brun.",
      "Une grande partie du fond brun reste libre, si bien que les petites fleurs rayonnent d’autant plus."
    ],
    "fact": "vers 1905. National Gallery of Art, Washington."
  },
  "odetruscan": {
    "text": [
      "Dans un vase brun à motif sombre se dressent de grandes fleurs fantastiques violettes, dorées et blanches.",
      "Redon ne peint pas le tableau à l’huile, mais à la détrempe sur toile."
    ],
    "fact": "1900–1910. Metropolitan Museum of Art, New York."
  },
  "odstilllife": {
    "text": [
      "D’un vase brun s’élancent de fines branches aux fleurs rouges, blanches et bleues, et de petits papillons flottent à côté.",
      "Redon peint le tableau à l’huile sur toile et inscrit « Odilon Redon » en bas à droite."
    ],
    "fact": "1905. Art Institute of Chicago."
  },
  "odvase05": {
    "text": [
      "Dans un vase clair se pressent des fleurs rouges, bleues et blanches aux feuilles vertes, devant un fond brun doré.",
      "Redon veut peindre « la nature vue en rêve », et signe « odilon redon » en bas à droite."
    ],
    "fact": "vers 1905. Musée d’art de Cleveland."
  },
  "odpink": {
    "text": [
      "Un bouquet coloré de fleurs orange, rouges, jaunes et blanches se dresse dans un vase blanc devant un doux fond rose.",
      "Redon peint le tableau à l’huile sur toile, et les fleurs semblent flotter dans la lumière claire."
    ],
    "fact": "vers 1906. Metropolitan Museum of Art, New York."
  },
  "odviolette": {
    "text": [
      "Une jeune fille en robe vert pâle est assise de profil à côté d’un nuage de fleurs bleues, violettes, rouges et jaunes.",
      "C’est la jeune nièce du collectionneur parisien Marcel Kapferer ; Redon dessine le portrait au pastel sur papier gris."
    ],
    "fact": "1910. Musée d’art de Cleveland."
  },
  "odflowers10": {
    "text": [
      "Des fleurs rouges, bleues et blanches se dressent dans un vase brun doré devant un fond clair couleur crème.",
      "Redon peint le tableau à l’huile sur toile et laisse beaucoup d’espace autour du petit bouquet."
    ],
    "fact": "vers 1910. National Gallery of Art, Washington."
  },
  "odlargevase": {
    "text": [
      "Dans un vase bleu à motif rose brillent des fleurs orange et roses devant un fond clair et vibrant.",
      "Le collectionneur parisien Marcel Kapferer achète le tableau directement à l’artiste et le prête en 1924 pour une exposition à Paris."
    ],
    "fact": "vers 1912. National Gallery of Art, Washington."
  },
  "odbutterflies": {
    "text": [
      "Cinq papillons colorés, bleus, rouges, jaunes et bruns, flottent sur une feuille claire, presque vide.",
      "Redon les peint à l’aquarelle et appose ses initiales « O.R. » à l’encre brune en bas à droite."
    ],
    "fact": "vers 1912. National Gallery of Art, Washington."
  },
  "odvase16": {
    "text": [
      "Dans un vase élancé se dressent des fleurs rouge foncé et violettes aux fines branches blanches, devant un fond jaune vif et rose.",
      "Ce pastel de la dernière année de la vie de Redon est montré en 1939 à l’Exposition universelle de New York."
    ],
    "fact": "1916. Musée d’art de Cleveland."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
