// v10.35 short Lebensweg for Georges Seurat. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "jatte",
    "title": "Ein Sonntagnachmittag auf der Insel La Grande Jatte",
    "artist": "Georges Seurat",
    "year": "1884–1886",
    "museum": "The Art Institute of Chicago",
    "source": "Wikimedia Commons: «Georges Seurat - A Sunday on La Grande Jatte -- 1884 - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "gravelines",
    "title": "Der Kanal von Gravelines am Abend",
    "artist": "Georges Seurat",
    "year": "1890",
    "museum": "The Museum of Modern Art (MoMA), New York",
    "source": "Wikimedia Commons: «Georges-Pierre Seurat - The Channel at Gravelines, Evening - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "seurat",
  "name": "Georges Seurat",
  "title": "Georges Seurats Lebensweg",
  "life": "1859–1891",
  "part": "Ein kurzer Weg · die Seine",
  "subtitle": "Punkte und der Fluss",
  "cover": "jatte",
  "intro": "Seurat setzt die Farbe in Punkte und sucht eine ruhige Ordnung. Von der Insel La Grande Jatte führt der kurze Weg an den Kanal von Gravelines.",
  "ending": [
    "Seurat stirbt 1891 in Paris, nur 31 Jahre alt. Ein späterer Teil kann weitere Uferbilder nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Uferbilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "seurat1",
      "place": "Paris und die Seine",
      "when": "1884–1890",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Paris und die Seine",
      "intro": [
        "Seurat setzt die Farbe in Punkte und sucht eine ruhige Ordnung. Von der Insel La Grande Jatte führt der kurze Weg an den Kanal von Gravelines."
      ],
      "works": [
        {
          "pid": "jatte",
          "text": [
            "Pariser erholen sich an einem Sonntag auf einer Insel in der Seine.",
            "Seurat arbeitete rund zwei Jahre an dem grossen Bild, das etwa zwei auf drei Meter misst."
          ],
          "fact": "Schau ganz rechts: Die elegante Dame führt einen kleinen Affen an der Leine."
        },
        {
          "pid": "gravelines",
          "text": [
            "Seurat verbrachte den Sommer 1890 in dem kleinen Hafen Gravelines an der Nordsee.",
            "Am Abend wird das Wasser hell, der Himmel rosa, und ganz vorn lehnt ein grosser Anker am Kai."
          ],
          "fact": "Die dunkle Umrandung hat Seurat selbst gemalt. Sie gehört zum Bild, wie ein Rahmen aus Farbe."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
