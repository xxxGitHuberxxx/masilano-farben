// v10.35 short Lebensweg for Jean-François Millet. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "angelus",
    "title": "Das Angelusläuten",
    "artist": "Jean-François Millet",
    "year": "1857–1859",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Jean-François Millet - The Angelus - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "gleaners",
    "title": "Die Ährenleserinnen",
    "artist": "Jean-François Millet",
    "year": "1857",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Jean-François Millet - Gleaners - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "millet",
  "name": "Jean-François Millet",
  "title": "Jean-François Millets Lebensweg",
  "life": "1814–1875",
  "part": "Ein kurzer Weg · Barbizon",
  "subtitle": "Feld und Abendglocke",
  "cover": "gleaners",
  "intro": "Millet malt in Barbizon die Arbeit auf dem Feld ohne Pathos. Die Ährenleserinnen und das Angelusläuten gehören zu den stillsten Bildern des Landlebens im 19. Jahrhundert.",
  "ending": [
    "Millet stirbt 1875 in Barbizon. Ein späterer Teil kann weitere Feld- und Hirtenbilder nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Feldbilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "millet1",
      "place": "Barbizon",
      "when": "1857–1859",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Barbizon",
      "intro": [
        "Millet malt in Barbizon die Arbeit auf dem Feld ohne Pathos. Die Ährenleserinnen und das Angelusläuten gehören zu den stillsten Bildern des Landlebens im 19. Jahrhundert."
      ],
      "works": [
        {
          "pid": "angelus",
          "text": [
            "Zwei Bauern auf dem Feld legen die Arbeit nieder und beten.",
            "Im Hintergrund liegt eine Kirche: Von dort läutet das Angelus, das Gebet am Morgen, mittags und am Abend."
          ],
          "fact": "Millet selbst war als Bauernsohn aufgewachsen. Er malte das Landleben ohne Pathos, aber mit grossem Ernst."
        },
        {
          "pid": "gleaners",
          "text": [
            "Drei Bäuerinnen beugen sich über das abgeerntete Feld und lesen die letzten Ähren auf.",
            "Hinter ihnen liegt die reiche Ernte in den Garben – ganz nah, und doch nicht für sie."
          ],
          "fact": "Das Bild wirkte damals politisch: Manche sahen darin eine Anklage, weil die Ärmsten so mühsam nach Resten suchen."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
