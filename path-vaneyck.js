// v10.35 short Lebensweg for Jan van Eyck. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "arnolfini",
    "title": "Arnolfini-Porträt",
    "artist": "Jan van Eyck",
    "year": "1434",
    "museum": "The National Gallery, London",
    "source": "Wikimedia Commons: «Van Eyck - Arnolfini Portrait.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "vaneyck",
  "name": "Jan van Eyck",
  "title": "Jan van Eycks Lebensweg",
  "life": "um 1390–1441",
  "part": "Ein kurzer Weg · Brügge",
  "subtitle": "Das Arnolfini-Porträt",
  "cover": "arnolfini",
  "intro": "Van Eyck malt in Brügge mit einer neuen, leuchtenden Ölfarbe. Das Arnolfini-Porträt von 1434 zeigt ein Paar im Innenraum, den Spiegel an der Wand, jeden Stoff genau.",
  "ending": [
    "Van Eyck stirbt 1441 in Brügge. Ein späterer Teil kann weitere Tafelbilder nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Tafelbilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "vaneyck1",
      "place": "Brügge",
      "when": "1434",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Brügge",
      "intro": [
        "Van Eyck malt in Brügge mit einer neuen, leuchtenden Ölfarbe. Das Arnolfini-Porträt von 1434 zeigt ein Paar im Innenraum, den Spiegel an der Wand, jeden Stoff genau."
      ],
      "works": [
        {
          "pid": "arnolfini",
          "text": [
            "Ein Paar steht in einem Wohnraum in Brügge, wahrscheinlich der italienische Kaufmann Giovanni di Nicolao Arnolfini und seine Frau.",
            "Er hebt die Hand, sie legt die ihre in die seine."
          ],
          "fact": "Im konvexen Spiegel an der Wand siehst du den Raum noch einmal, und darin zwei weitere Gestalten an der Tür."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
