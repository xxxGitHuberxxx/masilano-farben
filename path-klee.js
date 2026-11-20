// v10.35 short Lebensweg for Paul Klee. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "senecio",
    "title": "Senecio",
    "artist": "Paul Klee",
    "year": "1922",
    "museum": "Kunstmuseum Basel",
    "source": "Wikimedia Commons: «Paul Klee, 1922, Senecio, oil on gauze, 40.3 × 37.4 cm, Kunstmuseum Basel.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "klee",
  "name": "Paul Klee",
  "title": "Paul Klees Lebensweg",
  "life": "1879–1940",
  "part": "Ein kurzer Weg · Bern und das Bauhaus",
  "subtitle": "Senecio",
  "cover": "senecio",
  "intro": "Klee sucht in der Fläche das Zeichen und das Gesicht. «Senecio» von 1922 ist aus Vierecken gebaut, ein Kopf wie ein stilles Spiel.",
  "ending": [
    "Klee stirbt 1940 in Locarno. Ein späterer Teil kann weitere Bauhaus- und Berner Bilder nachtragen."
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
      "id": "klee1",
      "place": "Bern und das Bauhaus",
      "when": "1922",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Bern und das Bauhaus",
      "intro": [
        "Klee sucht in der Fläche das Zeichen und das Gesicht. «Senecio» von 1922 ist aus Vierecken gebaut, ein Kopf wie ein stilles Spiel."
      ],
      "works": [
        {
          "pid": "senecio",
          "text": [
            "Ein Gesicht aus Kreisen, Vierecken und warmen Farben, fast wie eine Maske oder eine Kinderzeichnung.",
            "Den Titel «Senecio» (lat."
          ],
          "fact": "Klee wurde 1879 in Münchenbuchsee bei Bern geboren. Er unterrichtete am Bauhaus und gilt als einer der wichtigsten Künstler der Moderne."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
