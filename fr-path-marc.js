// v10.35 FR Franz Marc Lebensweg, promoted from the story chapter.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "grazing": {
    "title": "Chevaux au pâturage I",
    "museum": "Städtische Galerie im Lenbachhaus, Munich"
  },
  "bluehorse": {
    "title": "Cheval bleu I",
    "museum": "Städtische Galerie im Lenbachhaus, Munich"
  },
  "largeblue": {
    "title": "Les Grands Chevaux bleus",
    "museum": "Walker Art Center, Minneapolis"
  },
  "tiger": {
    "title": "Le Tigre",
    "museum": "Städtische Galerie im Lenbachhaus, Munich"
  },
  "foxes": {
    "title": "Les Renards",
    "museum": "Localisation actuelle non confirmée publiquement"
  },
  "fate": {
    "title": "Destins d’animaux",
    "museum": "Kunstmuseum Basel"
  },
  "deer": {
    "title": "Cerfs dans la forêt II",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "forms": {
    "title": "Formes en lutte",
    "museum": "Pinakothek der Moderne, Munich"
  }
});
  P.paths = P.paths || {};
  P.paths.marc = {
  "title": "Le parcours de vie de Franz Marc",
  "life": "1880–1916",
  "part": "Munich et le Cavalier bleu",
  "subtitle": "Une vie de peintre en 8 tableaux",
  "intro": "Peins ton chemin à travers la vie de Franz Marc : des chevaux aux couleurs naturelles jusqu’aux animaux d’un bleu lumineux et aux tableaux presque abstraits d’avant la guerre. Avant chaque tableau, tu apprends où il vit alors et comment son art change. Chaque tableau terminé ouvre le chapitre suivant.",
  "ending": [
    "Après sa mort, Maria Marc s’occupe de l’œuvre. Beaucoup des tableaux d’animaux deviendront plus tard largement connus, surtout les chevaux bleus. À l’époque du national-socialisme, l’art de Franz Marc est qualifié de « dégénéré » et retiré des musées allemands. Son grand tableau « La Tour des chevaux bleus » est disparu depuis 1945. Il reste les tableaux que tu as peints ici : un chemin des chevaux au pâturage jusqu’aux formes en lutte, et l’idée que la couleur peut être une force spirituelle."
  ],
  "epilogue": "Après sa mort, Maria Marc s’occupe de l’œuvre. Beaucoup des tableaux d’animaux deviendront plus tard largement connus, surtout les chevaux bleus. À l’époque du national-socialisme, l’art de Franz Marc est qualifié de « dégénéré » et retiré des musées allemands. Son grand tableau « La Tour des chevaux bleus » est disparu depuis 1945. Il reste les tableaux que tu as peints ici : un chemin des chevaux au pâturage jusqu’aux formes en lutte, et l’idée que la couleur peut être une force spirituelle."
};
  P.stations = Object.assign(P.stations || {}, {
  "marc-grazing": {
    "place": "Sindelsdorf, Haute-Bavière",
    "when": "1910",
    "mapLabel": "Sindelsdorf, Haute-Bavière",
    "intro": [
      "Franz Marc naît à Munich en 1880. Son père Wilhelm est peintre de paysages, et Franz pense d’abord à des études de théologie. Finalement, il se décide tout de même pour l’art : en 1901, il entre à l’Académie des beaux-arts de Munich. Après un voyage à Paris, il quitte de nouveau l’Académie et cherche son propre chemin."
    ]
  },
  "marc-bluehorse": {
    "place": "Sindelsdorf",
    "when": "1911",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "En décembre 1910, Franz écrit à son nouvel ami, le peintre August Macke, une lettre sur le sens des couleurs. Le bleu serait le principe masculin, austère et spirituel. Le jaune, le féminin, doux, serein et sensuel. Le rouge, la matière, brutale et lourde, que le bleu et le jaune doivent vaincre."
    ]
  },
  "marc-largeblue": {
    "place": "Sindelsdorf",
    "when": "1911",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "En décembre 1911, il y a rupture avec la Neue Künstlervereinigung München. Avec Kandinsky, Gabriele Münter et d’autres, Franz ouvre le 18 décembre, à la galerie Thannhauser, la première exposition de la rédaction « Le Cavalier bleu »."
    ]
  },
  "marc-tiger": {
    "place": "Sindelsdorf",
    "when": "1912",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "À l’automne 1912, Franz part pour Paris avec August Macke. Là, ils font la connaissance du peintre Robert Delaunay, dont les couleurs lumineuses, brisées en facettes, les impressionnent fortement tous les deux."
    ]
  },
  "marc-foxes": {
    "place": "Sindelsdorf",
    "when": "1913",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "En 1913, les tableaux de Franz Marc deviennent plus audacieux encore. Les formes se brisent en cristaux, les couleurs luisent et se heurtent durement. Deux renards semblent enlacés ; au premier abord, on doit presque les chercher."
    ]
  },
  "marc-fate": {
    "place": "Sindelsdorf",
    "when": "1913",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "La même année naît « Destins d’animaux ». Parmi des formes pointues et menaçantes, on reconnaît des animaux ; au milieu, un chevreuil qui tend la tête très haut. Au dos du tableau, Franz écrit : « Et tout être est souffrance en flammes »."
    ]
  },
  "marc-deer": {
    "place": "Ried, près de Kochel",
    "when": "1914",
    "mapLabel": "Ried, près de Kochel",
    "intro": [
      "Au début de 1914, Franz et Maria s’installent à Ried, non loin de Kochel am See. Là naissent ses derniers grands tableaux, les uns encore avec des animaux, les autres déjà presque sans sujet."
    ]
  },
  "marc-forms": {
    "place": "Ried, près de Kochel",
    "when": "1914",
    "mapLabel": "Ried, près de Kochel",
    "intro": [
      "À Ried, en 1914, Franz peint plusieurs tableaux qui ne consistent presque plus qu’en couleur et en mouvement : des formes gaies, jouantes, en lutte et brisées. Dans le présent tableau, un rouge lumineux et un bleu sombre profond s’entrechoquent."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "grazing": {
      "text": [
        "Franz Marc naît à Munich en 1880. Son père Wilhelm est peintre de paysages, et Franz pense d’abord à des études de théologie. Finalement, il se décide tout de même pour l’art : en 1901, il entre à l’Académie des beaux-arts de Munich. Après un voyage à Paris, il quitte de nouveau l’Académie et cherche son propre chemin.",
        "En 1910, il s’installe avec la peintre Maria Franck, qui deviendra plus tard sa femme, à Sindelsdorf, en Haute-Bavière. Là, à la campagne, il trouve son sujet : les animaux. Ils lui semblent plus purs et plus beaux que les êtres humains.",
        "Dans « Chevaux au pâturage », les animaux sont encore peints dans des bruns et des jaunes naturels. Un an plus tard, ses chevaux seront bleus."
      ],
      "fact": "Pendant son service militaire, Franz Marc apprit à monter. C’est ainsi qu’il découvrit son amour des chevaux, qui ne le quitta plus de toute sa vie."
    },
    "bluehorse": {
      "text": [
        "En décembre 1910, Franz écrit à son nouvel ami, le peintre August Macke, une lettre sur le sens des couleurs. Le bleu serait le principe masculin, austère et spirituel. Le jaune, le féminin, doux, serein et sensuel. Le rouge, la matière, brutale et lourde, que le bleu et le jaune doivent vaincre.",
        "Au début de 1911, il rencontre à Munich Vassily Kandinsky. La rencontre changera sa vie.",
        "Avec « Cheval bleu I », il met en pratique sa théorie des couleurs : le cheval n’est plus brun, mais d’un bleu lumineux. La couleur dit quelque chose de son essence, non de son pelage."
      ],
      "fact": "La même année naît aussi « Cheval bleu II ». Il est aujourd’hui accroché au Kunstmuseum de Berne."
    },
    "largeblue": {
      "text": [
        "En décembre 1911, il y a rupture avec la Neue Künstlervereinigung München. Avec Kandinsky, Gabriele Münter et d’autres, Franz ouvre le 18 décembre, à la galerie Thannhauser, la première exposition de la rédaction « Le Cavalier bleu ».",
        "Kandinsky raconte plus tard qu’ils trouvèrent le nom à la table du café à Sindelsdorf : tous deux aimaient le bleu, Marc les chevaux, lui les cavaliers.",
        "En mai 1912 paraît l’almanach « Le Cavalier bleu », que Marc et Kandinsky éditent ensemble. Dans ces mois, Franz peint « Les Grands Chevaux bleus » : trois animaux puissants, tout entiers dans son bleu spirituel."
      ],
      "fact": "La première exposition du Cavalier bleu circula ensuite dans plusieurs villes, notamment à Cologne et à Berlin."
    },
    "tiger": {
      "text": [
        "À l’automne 1912, Franz part pour Paris avec August Macke. Là, ils font la connaissance du peintre Robert Delaunay, dont les couleurs lumineuses, brisées en facettes, les impressionnent fortement tous les deux.",
        "« Le Tigre » montre à quel point Franz, à cette époque, s’ouvre aux formes anguleuses du cubisme. L’animal s’accroupit, tendu, entre des plans de couleur tranchants, comme s’il pouvait bondir à tout moment.",
        "Peu auparavant, le tableau avait été vu à l’exposition du Sonderbund à Cologne, l’une des importantes manifestations de l’art moderne en Allemagne."
      ],
      "fact": "Franz Marc peignit le tigre en 1912 à Sindelsdorf. Aujourd’hui, le tableau est accroché à la Städtische Galerie im Lenbachhaus de Munich."
    },
    "foxes": {
      "text": [
        "En 1913, les tableaux de Franz Marc deviennent plus audacieux encore. Les formes se brisent en cristaux, les couleurs luisent et se heurtent durement. Deux renards semblent enlacés ; au premier abord, on doit presque les chercher.",
        "Dans ces mois, il ne pense pas seulement à des animaux isolés, mais au grand tissu de la nature. En même temps, il aide à Berlin à préparer le « Premier Salon d’automne allemand », une grande exposition internationale d’art moderne.",
        "« Les Renards » appartiennent aux tableaux dans lesquels l’animal devient déjà presque forme pure."
      ],
      "fact": "À partir de 1962, le tableau appartint au Museum Kunstpalast de Düsseldorf. En 2022, la ville le restitua aux héritiers du collectionneur juif Kurt Grawi ; en mars 2022, il fut vendu aux enchères chez Christie’s à Londres. Sa localisation actuelle n’est pas confirmée publiquement."
    },
    "fate": {
      "text": [
        "La même année naît « Destins d’animaux ». Parmi des formes pointues et menaçantes, on reconnaît des animaux ; au milieu, un chevreuil qui tend la tête très haut. Au dos du tableau, Franz écrit : « Et tout être est souffrance en flammes ».",
        "Le tableau est accroché en 1913 au Premier Salon d’automne allemand à Berlin. Le titre « Destins d’animaux » lui est donné par son ami Paul Klee.",
        "Plus tard, déjà dans la guerre, Franz écrit à Maria que le tableau lui paraît comme un pressentiment de cette guerre : terrible et bouleversant. Il peut à peine concevoir qu’il l’ait peint."
      ],
      "fact": "En 1917, le tableau fut endommagé dans un incendie. Paul Klee le restaura deux ans plus tard."
    },
    "deer": {
      "text": [
        "Au début de 1914, Franz et Maria s’installent à Ried, non loin de Kochel am See. Là naissent ses derniers grands tableaux, les uns encore avec des animaux, les autres déjà presque sans sujet.",
        "« Cerfs dans la forêt II » montre trois cerfs dans un bois de vert, de bleu et de rouge. Les animaux paraissent calmes, fermement inscrits dans les couleurs de la forêt. C’est l’un de ses derniers tableaux d’animaux.",
        "En août 1914, la guerre commence, et Franz Marc est appelé au service militaire. En septembre, son ami August Macke tombe. La perte le frappe profondément."
      ],
      "fact": "Dans une lettre du front, en 1915, Franz écrivit qu’il avait tôt trouvé les êtres humains laids, et l’animal plus beau et plus pur. Puis il avait découvert aussi chez l’animal tant de choses contraires que ses tableaux étaient d’eux-mêmes devenus de plus en plus abstraits."
    },
    "forms": {
      "text": [
        "À Ried, en 1914, Franz peint plusieurs tableaux qui ne consistent presque plus qu’en couleur et en mouvement : des formes gaies, jouantes, en lutte et brisées. Dans le présent tableau, un rouge lumineux et un bleu sombre profond s’entrechoquent.",
        "La guerre interrompt cette œuvre. Le 4 mars 1916, Franz Marc est atteint par un éclat d’obus lors d’une reconnaissance près de Verdun. Il n’a que 36 ans.",
        "Maria le fait plus tard transférer à Kochel am See. Il y repose jusqu’à aujourd’hui, non loin du paysage où tant de ses tableaux virent le jour."
      ],
      "fact": "En 1986, le Franz Marc Museum fut ouvert à Kochel am See. Il montre des œuvres de lui et d’amis artistes du cercle du Cavalier bleu."
    }
  });
})();
