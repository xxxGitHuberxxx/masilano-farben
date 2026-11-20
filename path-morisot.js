// v10.35 short Lebensweg for Berthe Morisot. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "cradle",
    "title": "Die Wiege",
    "artist": "Berthe Morisot",
    "year": "1872",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Berthe Morisot - The Cradle - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "morisot",
  "name": "Berthe Morisot",
  "title": "Berthe Morisots Lebensweg",
  "life": "1841–1895",
  "part": "Ein kurzer Weg · Paris",
  "subtitle": "Die Wiege",
  "cover": "cradle",
  "intro": "Berthe Morisot gehört zum engen Kreis der Impressionisten in Paris. «Die Wiege» zeigt ihre Schwester Edma am Bett des Kindes – ein Bild der Nähe, gemalt 1872.",
  "ending": [
    "Morisot stellt regelmässig mit den Impressionisten aus und bleibt eine der festesten Stimmen der Gruppe. Sie stirbt 1895 in Paris."
  ],
  "epilogue": "Ein späterer Teil kann weitere Bildnisse und Gartenbilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "morisot1",
      "place": "Paris",
      "when": "1841–1895",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Paris",
      "intro": [
        "Berthe Morisot gehört zum engen Kreis der Impressionisten in Paris. «Die Wiege» zeigt ihre Schwester Edma am Bett des Kindes – ein Bild der Nähe, gemalt 1872."
      ],
      "works": [
        {
          "pid": "cradle",
          "text": [
            "Edma, die Schwester der Malerin, wacht über ihre schlafende Tochter Blanche.",
            "Der weisse Schleier der Wiege teilt das Bild sanft in zwei Hälften: die Mutter und das Kind."
          ],
          "fact": "Berthe Morisot war eine der wenigen Frauen im engen Kreis der Impressionisten und stellte mit ihnen zusammen aus."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
