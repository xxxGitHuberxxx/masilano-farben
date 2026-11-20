// v10.35 short Lebensweg for Piet Mondrian. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "mondrian",
    "title": "Komposition mit Rot, Blau und Gelb",
    "artist": "Piet Mondrian",
    "year": "1930",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Piet Mondriaan, 1930 - Mondrian Composition II in Red, Blue, and Yellow.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "mondrian",
  "name": "Piet Mondrian",
  "title": "Piet Mondrians Lebensweg",
  "life": "1872–1944",
  "part": "Ein kurzer Weg · Paris",
  "subtitle": "Rot, Blau und Gelb",
  "cover": "mondrian",
  "intro": "Mondrian führt die Landschaft zur Fläche und zur Linie. Die «Komposition mit Rot, Blau und Gelb» von 1930 ist ein stilles Gleichgewicht aus Balken und Feldern.",
  "ending": [
    "Mondrian stirbt 1944 in New York. Ein späterer Teil kann den Weg von den Bäumen zur reinen Fläche nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Kompositionen nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "mondrian1",
      "place": "Paris und New York",
      "when": "1930",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Paris und New York",
      "intro": [
        "Mondrian führt die Landschaft zur Fläche und zur Linie. Die «Komposition mit Rot, Blau und Gelb» von 1930 ist ein stilles Gleichgewicht aus Balken und Feldern."
      ],
      "works": [
        {
          "pid": "mondrian",
          "text": [
            "Mondrian reduzierte die Malerei auf das Wesentliche: ein grosses rotes Rechteck, dazu ein blaues und ein gelbes Feld, gehalten von einem schwarzen Gitter.",
            "Das Bild entstand 1930 in Paris, auf Wunsch des Zürcher Architekten Alfred Roth."
          ],
          "fact": "Mondrian nannte diesen Stil «Neoplastizismus». Er wollte damit eine klare, allgemeine Harmonie zeigen, nicht eine Landschaft oder eine Person."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
