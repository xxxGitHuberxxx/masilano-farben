// v10.35 short Lebensweg for Henri Rousseau. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "gypsy",
    "title": "Die schlafende Bohémienne",
    "artist": "Henri Rousseau",
    "year": "1897",
    "museum": "The Museum of Modern Art (MoMA), New York",
    "source": "Wikimedia Commons: «Henri Rousseau - La Bohémienne endormie - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "rousseau",
  "name": "Henri Rousseau",
  "title": "Henri Rousseaus Lebensweg",
  "life": "1844–1910",
  "part": "Ein kurzer Weg · Paris",
  "subtitle": "Die schlafende Bohémienne",
  "cover": "gypsy",
  "intro": "Rousseau, der Zöllner, malt in Paris eine eigene, stille Traumwelt. «Die schlafende Bohémienne» liegt in der Nacht neben einem Löwen – ruhig und rätselhaft.",
  "ending": [
    "Rousseau stirbt 1910 in Paris. Ein späterer Teil kann weitere Urwald- und Stadtbilder nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Bilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "rousseau1",
      "place": "Paris",
      "when": "1897",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Paris",
      "intro": [
        "Rousseau, der Zöllner, malt in Paris eine eigene, stille Traumwelt. «Die schlafende Bohémienne» liegt in der Nacht neben einem Löwen – ruhig und rätselhaft."
      ],
      "works": [
        {
          "pid": "gypsy",
          "text": [
            "Eine Frau schläft in der Wüste, neben sich eine Mandoline und einen Wasserkrug.",
            "Ein Löwe tritt an sie heran und beschnuppert sie, unter einem vollen Mond."
          ],
          "fact": "Rousseau war ein Selbstlerner und hatte nie eine Kunstakademie besucht. Die Wüste und den Löwen hat er nicht selbst gesehen, sondern sich ausgedacht."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
