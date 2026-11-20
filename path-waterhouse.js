// v10.35 short Lebensweg for John William Waterhouse. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "shalott",
    "title": "The Lady of Shalott",
    "artist": "John William Waterhouse",
    "year": "1888",
    "museum": "Tate Britain, London",
    "source": "Wikimedia Commons: «John William Waterhouse - The Lady of Shalott - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "waterhouse",
  "name": "John William Waterhouse",
  "title": "John William Waterhouses Lebensweg",
  "life": "1849–1917",
  "part": "Ein kurzer Weg · London",
  "subtitle": "The Lady of Shalott",
  "cover": "shalott",
  "intro": "Waterhouse malt in London Stoffe der Dichtung mit festem, klarem Licht. «The Lady of Shalott» sitzt 1888 im Boot, der Teppich über den Rand, der Blick schon fort.",
  "ending": [
    "Waterhouse stirbt 1917 in London. Ein späterer Teil kann weitere Dichtungsbilder nachtragen."
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
      "id": "waterhouse1",
      "place": "London",
      "when": "1888",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "London",
      "intro": [
        "Waterhouse malt in London Stoffe der Dichtung mit festem, klarem Licht. «The Lady of Shalott» sitzt 1888 im Boot, der Teppich über den Rand, der Blick schon fort."
      ],
      "works": [
        {
          "pid": "shalott",
          "text": [
            "Die Dame von Shalott löst sich von ihrem verfluchten Turm und gleitet den Fluss hinunter nach Camelot.",
            "Kerzen, ein Teppich und ein Kreuz liegen im Boot – sie weiss, dass dieser Weg ihr letzter ist."
          ],
          "fact": "Das Bild folgt einem Gedicht von Alfred Tennyson. Wer den Fluch bricht und aus dem Fenster auf Sir Lancelot blickt, muss sterben."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
