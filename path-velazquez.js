// v10.35 short Lebensweg for Diego Velázquez. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "meninas",
    "title": "Las Meninas",
    "artist": "Diego Velázquez",
    "year": "1656",
    "museum": "Museo del Prado, Madrid",
    "source": "Wikimedia Commons: «Las Meninas, by Diego Velázquez, from Prado in Google Earth.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "velazquez",
  "name": "Diego Velázquez",
  "title": "Diego Velázquez’ Lebensweg",
  "life": "1599–1660",
  "part": "Ein kurzer Weg · Madrid",
  "subtitle": "Las Meninas",
  "cover": "meninas",
  "intro": "Velázquez ist Hofmaler in Madrid. «Las Meninas» zeigt die Infantin, die Hofdamen, den Maler selbst an der Staffelei und im Spiegel das Königspaar – eines der nachdenklichsten Bilder über das Sehen.",
  "ending": [
    "Velázquez stirbt 1660 in Madrid. Ein späterer Teil kann weitere Hofbildnisse nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Hofbildnisse nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "velazquez1",
      "place": "Madrid",
      "when": "1656",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Madrid",
      "intro": [
        "Velázquez ist Hofmaler in Madrid. «Las Meninas» zeigt die Infantin, die Hofdamen, den Maler selbst an der Staffelei und im Spiegel das Königspaar – eines der nachdenklichsten Bilder über das Sehen."
      ],
      "works": [
        {
          "pid": "meninas",
          "text": [
            "Im Mittelpunkt steht die kleine Infantin Margarita, umgeben von Hoffräulein, Hofzwergen und einem Hund.",
            "Links malt Velázquez sich selbst – und im Spiegel hinten erscheinen König und Königin, also eigentlich wir."
          ],
          "fact": "Der Titel heisst auf Deutsch «Die Hoffräulein». Das Bild ist eines der meistbesprochenen der Welt."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
