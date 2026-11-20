// v10.35 short Lebensweg for Mary Cassatt. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "bath",
    "title": "Das Kinderbad",
    "artist": "Mary Cassatt",
    "year": "1893",
    "museum": "The Art Institute of Chicago",
    "source": "Wikimedia Commons: «Mary Cassatt - The Child's Bath - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "cassatt",
  "name": "Mary Cassatt",
  "title": "Mary Cassatts Lebensweg",
  "life": "1844–1926",
  "part": "Ein kurzer Weg · Paris",
  "subtitle": "Das Kinderbad",
  "cover": "bath",
  "intro": "Die Amerikanerin Mary Cassatt arbeitet in Paris nahe den Impressionisten. «Das Kinderbad» zeigt die stille Nähe von Mutter und Kind, fest in Form und Licht.",
  "ending": [
    "Cassatt stirbt 1926 in Frankreich. Ein späterer Teil kann weitere Mutter-Kind-Bilder nachtragen."
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
      "id": "cassatt1",
      "place": "Paris",
      "when": "1893",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Paris",
      "intro": [
        "Die Amerikanerin Mary Cassatt arbeitet in Paris nahe den Impressionisten. «Das Kinderbad» zeigt die stille Nähe von Mutter und Kind, fest in Form und Licht."
      ],
      "works": [
        {
          "pid": "bath",
          "text": [
            "Eine Mutter wäscht dem Kind die Füsse in einer Schüssel.",
            "Cassatt, eine Amerikanerin in Paris, malte besonders oft den stillen Alltag von Frauen und Kindern."
          ],
          "fact": "Cassatt war mit den Impressionisten befreundet, vor allem mit Edgar Degas, und stellte mit ihnen aus."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
