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
    "museum": "Collection particulière"
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
  "part": "Partie 1 · Munich et le Cavalier bleu",
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
})();
