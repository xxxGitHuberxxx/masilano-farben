// v10.35 short Lebensweg for Grant Wood. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "gothic",
    "title": "American Gothic",
    "artist": "Grant Wood",
    "year": "1930",
    "museum": "The Art Institute of Chicago",
    "source": "Wikimedia Commons: «Grant Wood - American Gothic - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "wood",
  "name": "Grant Wood",
  "title": "Grant Woods Lebensweg",
  "life": "1891–1942",
  "part": "Ein kurzer Weg · Iowa",
  "subtitle": "American Gothic",
  "cover": "gothic",
  "intro": "Grant Wood malt 1930 in Iowa das Paar vor dem Holzhaus mit dem spitzen Fenster. Der Titel «American Gothic» meint zuerst die Zimmermannsgotik des Hauses.",
  "ending": [
    "Wood stirbt 1942 in Iowa. Ein späterer Teil kann weitere Bilder des amerikanischen Mittleren Westens nachtragen."
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
      "id": "wood1",
      "place": "Iowa",
      "when": "1930",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Iowa",
      "intro": [
        "Grant Wood malt 1930 in Iowa das Paar vor dem Holzhaus mit dem spitzen Fenster. Der Titel «American Gothic» meint zuerst die Zimmermannsgotik des Hauses."
      ],
      "works": [
        {
          "pid": "gothic",
          "text": [
            "Ein Bauer mit Heugabel und eine Frau stehen vor einem Holzhaus mit spitzem «gotischem» Fenster.",
            "Wood malte das Bild in Iowa, nach einem Haus, das er in der kleinen Stadt Eldon gesehen hatte."
          ],
          "fact": "Als Modelle dienten Woods Schwester Nan und sein Zahnarzt. Sie sollten nicht ein bestimmtes Ehepaar darstellen, sondern einen Typus."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
