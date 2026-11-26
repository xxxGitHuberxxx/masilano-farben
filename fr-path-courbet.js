// v10.43 FR content for Gustave Courbet’s life journey (1819–1877). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "gcladies": {
    "title": "Les Demoiselles de village",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gcbretonnerie": {
    "title": "La Bretonnerie dans l’Indre",
    "museum": "National Gallery of Art, Washington"
  },
  "gccliffs": {
    "title": "Falaise au bord de la mer, petite plage, soleil levant",
    "museum": "Art Institute of Chicago"
  },
  "gcblackrocks": {
    "title": "Les Roches noires à Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "gccalm66": {
    "title": "Mer calme",
    "museum": "National Gallery of Art, Washington"
  },
  "gccalm69": {
    "title": "La Mer calme",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gchautepierre": {
    "title": "La Roche de Hautepierre",
    "museum": "Art Institute of Chicago"
  },
  "gcbeach": {
    "title": "Plage en Normandie",
    "museum": "National Gallery of Art, Washington"
  },
  "gcboats": {
    "title": "Barques sur la plage, Étretat",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.courbet = {
  "title": "Le parcours de vie de Gustave Courbet",
  "part": "La terre et la mer",
  "subtitle": "D’Ornans à la côte normande",
  "intro": "Voyage à travers la vie de Gustave Courbet : de son village natal d’Ornans, dans l’est de la France, aux falaises et aux plages de Normandie. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Gustave Courbet meurt en 1877 à La Tour-de-Peilz, en Suisse.",
    "Ses paysages et ses marines sont aujourd’hui exposés dans des musées du monde entier."
  ],
  "epilogue": "Gustave Courbet meurt en 1877. Le parcours mène d’Ornans et de la campagne de l’Indre à la côte normande, à Trouville et à Étretat.",
  "life": "1819–1877"
};
  P.stations = Object.assign(P.stations || {}, {
  "gcs1": {
    "place": "Ornans et la campagne",
    "when": "1851–1856",
    "mapLabel": "Ornans",
    "intro": [
      "Gustave Courbet naît en 1819 à Ornans, dans l’est de la France.",
      "Au Salon de Paris de 1850–51, il fait sensation avec de grands tableaux de la vie quotidienne de son village natal."
    ]
  },
  "gcs2": {
    "place": "Sur la côte de la Manche",
    "when": "1865–1866",
    "mapLabel": "Normandie",
    "intro": [
      "Courbet est originaire du Doubs, loin de la mer, et il est surtout connu pour ses tableaux des rochers, des gorges et des rivières de sa région.",
      "Au milieu des années 1860, il se tourne vers la côte de la Manche et peint la mer."
    ]
  },
  "gcs3": {
    "place": "L’été à Étretat",
    "when": "1869",
    "mapLabel": "Étretat",
    "intro": [
      "En août 1869, Courbet séjourne à Étretat, sur la côte normande.",
      "La plupart de ses marines de cette période montrent de hautes vagues qui se brisent."
    ]
  },
  "gcs4": {
    "place": "Barques sur la plage",
    "when": "1872–1875",
    "mapLabel": "Normandie",
    "intro": [
      "Dans les années 1870 aussi, Courbet peint les plages et les falaises de Normandie.",
      "Des barques de pêche reposent sur les galets, devant de claires parois de falaise."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "gcladies": {
    "text": [
      "Les trois sœurs de Courbet se promènent dans un petit vallon près d’Ornans, et l’une d’elles fait l’aumône à un enfant qui garde les vaches.",
      "Quand le tableau est exposé au Salon de 1852, les critiques se moquent des robes simples, du chien et des petites vaches."
    ],
    "fact": "1851–1852. Metropolitan Museum of Art, New York."
  },
  "gcbretonnerie": {
    "text": [
      "Un ruisseau serpente dans une prairie verte, derrière laquelle se dressent des arbres touffus sous un ciel bleu aux nuages blancs.",
      "En bas à gauche, Courbet signe « G.Courbet / 56 »."
    ],
    "fact": "1856. National Gallery of Art, Washington."
  },
  "gccliffs": {
    "text": [
      "À gauche, une falaise au rebord vert descend à pic vers la plage de galets, et la mer calme brille dans la lumière claire du matin.",
      "La signature « G. Courbet » figure en bas à gauche."
    ],
    "fact": "1865. Art Institute of Chicago."
  },
  "gcblackrocks": {
    "text": [
      "Au-dessus de rochers sombres sur le rivage s’embrase un ciel rougeâtre et nuageux, et la mer est calme.",
      "Le tableau naît pendant les années où Courbet peint la mer sur la côte de la Manche."
    ],
    "fact": "1865–1866. National Gallery of Art, Washington."
  },
  "gccalm66": {
    "text": [
      "Un vaste ciel clair occupe presque tout le tableau, avec en dessous une bande de mer turquoise et la plage de sable.",
      "En bas à gauche, on lit « ’66 / Gustave Courbet »."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "gccalm69": {
    "text": [
      "À marée basse, la mer s’est retirée, et deux petites barques sont restées sur la plage.",
      "L’immense ciel nuageux domine d’étroites bandes d’eau et de sable."
    ],
    "fact": "1869. Metropolitan Museum of Art, New York."
  },
  "gchautepierre": {
    "text": [
      "Une puissante paroi rocheuse au rebord vert se dresse au-dessus d’arbres et de maisons aux toits rouges.",
      "En bas à droite, Courbet signe « G. Courbet »."
    ],
    "fact": "vers 1869. Art Institute of Chicago."
  },
  "gcbeach": {
    "text": [
      "À gauche se dressent de hauts rochers, devant eux des barques de pêche reposent sur la plage claire, et au fond la mer brille.",
      "Autrefois, le musée intitulait le tableau « Plage d’Étretat »."
    ],
    "fact": "vers 1872–1875. National Gallery of Art, Washington."
  },
  "gcboats": {
    "text": [
      "Plusieurs barques de pêche reposent sur la plage de galets, et à droite se dressent de claires falaises sous des nuages gris.",
      "La signature « G. Courbet » figure en bas à droite."
    ],
    "fact": "vers 1872–1875. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
