// v10.35 short Lebensweg for Édouard Manet. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "fifre",
    "title": "Der Pfeifer",
    "artist": "Édouard Manet",
    "year": "1866",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Manet, Edouard - Young Flautist, or The Fifer, 1866 (2).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "folies",
    "title": "Eine Bar in den Folies-Bergère",
    "artist": "Édouard Manet",
    "year": "1882",
    "museum": "The Courtauld Gallery, London",
    "source": "Wikimedia Commons: «\"Un Bar aux Folies-Bergère\" by Édouard Manet (1882).jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "manet",
  "name": "Édouard Manet",
  "title": "Édouard Manets Lebensweg",
  "life": "1832–1883",
  "part": "Ein kurzer Weg · Paris",
  "subtitle": "Der Pfeifer und die Bar",
  "cover": "folies",
  "intro": "Manet steht an der Schwelle zur modernen Malerei in Paris. Der Pfeifer und die Bar in den Folies-Bergère zeigen, wie fest und gegenwärtig er die Grossstadt sieht.",
  "ending": [
    "Manet stirbt 1883 in Paris. Ein späterer Teil kann weitere Pariser Bilder nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Pariser Bilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "manet1",
      "place": "Paris",
      "when": "1866–1882",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Paris",
      "intro": [
        "Manet steht an der Schwelle zur modernen Malerei in Paris. Der Pfeifer und die Bar in den Folies-Bergère zeigen, wie fest und gegenwärtig er die Grossstadt sieht."
      ],
      "works": [
        {
          "pid": "fifre",
          "text": [
            "Ein junger Musiker der kaiserlichen Garde steht wie auf einer Bühne vor einem neutralen Hintergrund.",
            "Manet malte ihn 1866, ohne viel Drumherum: Die Figur allein soll wirken, fast wie auf einem Spielkartenbild."
          ],
          "fact": "Als das Bild ausgestellt wurde, fanden es viele zu flach und zu kühn. Genau diese Schlichtheit macht es heute so modern."
        },
        {
          "pid": "folies",
          "text": [
            "Eine Kellnerin steht an der Bar des Pariser Varietés Folies-Bergère, vor sich Flaschen, Obst und ein Glas.",
            "Hinter ihr zeigt der Spiegel das Publikum, die Lichter – und einen Mann, mit dem sie offenbar spricht."
          ],
          "fact": "Schau genau auf den Spiegel: Die Spiegelung der Frau und des Mannes stimmt nicht ganz mit unserem Blickwinkel überein. Das rätselt die Forschung bis heute."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
