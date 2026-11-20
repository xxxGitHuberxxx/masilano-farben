// v10.35 short Lebensweg for Pieter Bruegel der Ältere. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "babel",
    "title": "Der Turmbau zu Babel",
    "artist": "Pieter Bruegel der Ältere",
    "year": "1563",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Pieter Bruegel the Elder - The Tower of Babel (Vienna) - Google Art Project - edited.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "harvesters",
    "title": "Die Kornernte",
    "artist": "Pieter Bruegel der Ältere",
    "year": "1565",
    "museum": "The Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Pieter Bruegel the Elder- The Harvesters - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hunters",
    "title": "Jäger im Schnee",
    "artist": "Pieter Bruegel der Ältere",
    "year": "1565",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Pieter Bruegel the Elder - Hunters in the Snow (Winter) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "bruegel",
  "name": "Pieter Bruegel der Ältere",
  "title": "Pieter Bruegels Lebensweg",
  "life": "um 1525–1569",
  "part": "Ein kurzer Weg · Brabant",
  "subtitle": "Turm, Ernte und Schnee",
  "cover": "hunters",
  "intro": "Bruegel der Ältere sieht in Brabant die Arbeit, den Winter und die alten Erzählungen. Drei Bilder führen vom Turmbau zu Babel über die Kornernte zu den Jägern im Schnee.",
  "ending": [
    "Bruegel stirbt 1569 in Brüssel. Ein späterer Teil kann weitere Jahreszeiten und Sprichwörter nachtragen."
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
      "id": "bruegel1",
      "place": "Antwerpen und Brüssel",
      "when": "1563–1565",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Antwerpen und Brüssel",
      "intro": [
        "Bruegel der Ältere sieht in Brabant die Arbeit, den Winter und die alten Erzählungen. Drei Bilder führen vom Turmbau zu Babel über die Kornernte zu den Jägern im Schnee."
      ],
      "works": [
        {
          "pid": "babel",
          "text": [
            "Nach der Bibel wollten die Menschen einen Turm bis in den Himmel bauen.",
            "Bruegel zeigt die riesige Baustelle mit Kränen, Gerüsten, Arbeitern und einer ganzen Stadt darum herum."
          ],
          "fact": "Als Vorbild für die vielen Bögen diente ihm vermutlich das Kolosseum, das er auf seiner Reise nach Rom gesehen hatte."
        },
        {
          "pid": "harvesters",
          "text": [
            "Es ist Hochsommer: Vorn ruhen die Schnitter beim Essen, hinten wird weiter gemäht, und die Felder gehen in eine weite, goldene Landschaft über.",
            "Das Bild gehört zu Bruegels Monatsbildern, hier der Hochsommer."
          ],
          "fact": "Fünf der ursprünglich sechs Jahreszeitenbilder sind erhalten. «Jäger im Schnee» ist der Winter dazu."
        },
        {
          "pid": "hunters",
          "text": [
            "Drei Jäger kehren mit müden Hunden ins Dorf zurück.",
            "Unten auf den zugefrorenen Teichen wird geschlittschuhgelaufen, und in der Ferne stehen scharfe, winterliche Berge."
          ],
          "fact": "Trotz der Kälte ist das Bild voller Leben: ein Feuer, Vögel, Kinder auf dem Eis, ein Gasthausschild mit einem Hirsch."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
