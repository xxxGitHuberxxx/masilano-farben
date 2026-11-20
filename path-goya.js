// v10.35 short Lebensweg for Francisco de Goya. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "quitasol",
    "title": "Der Sonnenschirm",
    "artist": "Francisco de Goya",
    "year": "1777",
    "museum": "Museo del Prado, Madrid",
    "source": "Wikimedia Commons: «El quitasol.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "goya",
  "name": "Francisco de Goya",
  "title": "Francisco de Goyas Lebensweg",
  "life": "1746–1828",
  "part": "Ein kurzer Weg · Madrid",
  "subtitle": "Der Sonnenschirm",
  "cover": "quitasol",
  "intro": "Goya beginnt in Madrid als Maler heiterer Tapetenbilder. «Der Sonnenschirm» von 1777 zeigt ein Paar im Freien – noch hell, bevor sein Blick später dunkler wird.",
  "ending": [
    "Goya stirbt 1828 in Bordeaux. Ein späterer Teil kann Bildnisse und die späteren Blätter nachtragen."
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
      "id": "goya1",
      "place": "Madrid",
      "when": "1777",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Madrid",
      "intro": [
        "Goya beginnt in Madrid als Maler heiterer Tapetenbilder. «Der Sonnenschirm» von 1777 zeigt ein Paar im Freien – noch hell, bevor sein Blick später dunkler wird."
      ],
      "works": [
        {
          "pid": "quitasol",
          "text": [
            "Ein junger Mann hält einer sitzenden Frau den Schirm, damit die Sonne sie nicht blendet.",
            "Das Bild ist leicht, farbenfroh und voller Mode von 1777 – ein ganz anderer Goya als in seinen späteren, dunklen Werken."
          ],
          "fact": "Es entstand als Entwurf für einen Teppich im königlichen Palast El Pardo."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
