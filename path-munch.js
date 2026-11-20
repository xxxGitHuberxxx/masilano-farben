// v10.35 short Lebensweg for Edvard Munch. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "scream",
    "title": "Der Schrei",
    "artist": "Edvard Munch",
    "year": "1893",
    "museum": "Nasjonalmuseet, Oslo",
    "source": "Wikimedia Commons: «Edvard Munch - The Scream - NG.M.00939 - National Museum of Art, Architecture and Design.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "munch",
  "name": "Edvard Munch",
  "title": "Edvard Munchs Lebensweg",
  "life": "1863–1944",
  "part": "Ein kurzer Weg · Oslo",
  "subtitle": "Der Schrei",
  "cover": "scream",
  "intro": "Munch sucht in der Farbe den inneren Laut. «Der Schrei» entsteht 1893: eine Figur auf der Brücke, der Himmel rot, die Natur wie ein Ruf.",
  "ending": [
    "Munch stirbt 1944 in Oslo. Ein späterer Teil kann weitere Versionen und Lebensbilder nachtragen."
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
      "id": "munch1",
      "place": "Oslo",
      "when": "1893",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Oslo",
      "intro": [
        "Munch sucht in der Farbe den inneren Laut. «Der Schrei» entsteht 1893: eine Figur auf der Brücke, der Himmel rot, die Natur wie ein Ruf."
      ],
      "works": [
        {
          "pid": "scream",
          "text": [
            "Eine Figur steht auf einer Brücke, hält sich die Ohren zu und öffnet den Mund.",
            "Der Himmel ist blutrot."
          ],
          "fact": "Von diesem Motiv gibt es mehrere Fassungen. Dies ist die berühmte von 1893, heute im Nationalmuseum in Oslo."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
