// v10.35 short Lebensweg for Paul Gauguin. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "arearea",
    "title": "Arearea (Fröhlichkeit)",
    "artist": "Paul Gauguin",
    "year": "1892",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Paul Gauguin - Arearea - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "gauguin",
  "name": "Paul Gauguin",
  "title": "Paul Gauguins Lebensweg",
  "life": "1848–1903",
  "part": "Ein kurzer Weg · Tahiti",
  "subtitle": "Arearea",
  "cover": "arearea",
  "intro": "Gauguin sucht auf Tahiti eine Malerei aus Fläche und Klang. «Arearea (Fröhlichkeit)» von 1892 zeigt Frauen, einen Hund, das Rot der Erde unter den Bäumen.",
  "ending": [
    "Gauguin stirbt 1903 auf den Marquesas. Ein späterer Teil kann weitere Bilder aus der Bretagne und aus Polynesien nachtragen."
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
      "id": "gauguin1",
      "place": "Tahiti",
      "when": "1892",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Tahiti",
      "intro": [
        "Gauguin sucht auf Tahiti eine Malerei aus Fläche und Klang. «Arearea (Fröhlichkeit)» von 1892 zeigt Frauen, einen Hund, das Rot der Erde unter den Bäumen."
      ],
      "works": [
        {
          "pid": "arearea",
          "text": [
            "Zwei tahitianische Frauen sitzen auf einer Wiese, davor ein roter Hund.",
            "Eine von ihnen spielt Flöte; im Hintergrund verehren Frauen eine Götterfigur."
          ],
          "fact": "Gauguin reiste 1891 nach Tahiti, auf der Suche nach einem Leben abseits der modernen europäischen Welt."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
