// v10.35 short Lebensweg for August Macke. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "macke",
    "title": "Dame in grüner Jacke",
    "artist": "August Macke",
    "year": "1913",
    "museum": "Museum Ludwig, Köln",
    "source": "Wikimedia Commons: «Dame in grüner Jacke - August Macke - Museum Ludwig-7004 (cropped).jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "macke",
  "name": "August Macke",
  "title": "August Mackes Lebensweg",
  "life": "1887–1914",
  "part": "Ein kurzer Weg · der Thunersee",
  "subtitle": "Dame in grüner Jacke",
  "cover": "macke",
  "intro": "Ein kurzer Weg zu August Macke, Freund von Franz Marc und Maler des Rheinlands. Das Bild «Dame in grüner Jacke» entstand 1913 in Hilterfingen am Thunersee.",
  "ending": [
    "Im September 1914 fällt Macke im Ersten Weltkrieg, nur 27 Jahre alt. Ein späterer Teil kann weitere Bilder aus Tunis und vom Rhein nachtragen."
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
      "id": "macke1",
      "place": "Hilterfingen am Thunersee",
      "when": "1913–1914",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Hilterfingen am Thunersee",
      "intro": [
        "Ein kurzer Weg zu August Macke, Freund von Franz Marc und Maler des Rheinlands. Das Bild «Dame in grüner Jacke» entstand 1913 in Hilterfingen am Thunersee."
      ],
      "works": [
        {
          "pid": "macke",
          "text": [
            "Spaziergänger stehen in einem Park, im Hintergrund das Blau eines Sees.",
            "Macke malte das Bild 1913 in Hilterfingen am Thunersee, wo er mehrere Monate mit seiner Frau Elisabeth verbrachte."
          ],
          "fact": "Macke war ein enger Freund von Franz Marc und gehörte zum Kreis des Blauen Reiters."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
