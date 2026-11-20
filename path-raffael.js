// v10.35 short Lebensweg for Raffael. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "sistine",
    "title": "Die Sixtinische Madonna",
    "artist": "Raffael",
    "year": "1512–1513",
    "museum": "Gemäldegalerie Alte Meister, Dresden",
    "source": "Wikimedia Commons: «Raphael - The Sistine Madonna - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "raffael",
  "name": "Raffael",
  "title": "Raffaels Lebensweg",
  "life": "1483–1520",
  "part": "Ein kurzer Weg · Rom",
  "subtitle": "Die Sixtinische Madonna",
  "cover": "sistine",
  "intro": "Raffael malt in Rom für die Kirche und den Hof. Die Sixtinische Madonna tritt auf Wolken hervor, die beiden Engel am unteren Rand sind später weit bekannt geworden.",
  "ending": [
    "Raffael stirbt 1520 in Rom, erst 37 Jahre alt. Ein späterer Teil kann weitere Madonnen und Stanzen nachtragen."
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
      "id": "raffael1",
      "place": "Rom",
      "when": "1512–1513",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Rom",
      "intro": [
        "Raffael malt in Rom für die Kirche und den Hof. Die Sixtinische Madonna tritt auf Wolken hervor, die beiden Engel am unteren Rand sind später weit bekannt geworden."
      ],
      "works": [
        {
          "pid": "sistine",
          "text": [
            "Maria tritt mit dem Kind zwischen zwei aufgezogenen Vorhängen auf, als öffne sich eine Bühne.",
            "Zu ihren Füssen sitzen die zwei kleinen Engel, die später auf unzähligen Postkarten landeten."
          ],
          "fact": "Das Bild entstand für das Kloster San Sisto in Piacenza und kam 1754 nach Dresden."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
