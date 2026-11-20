// v10.35 short Lebensweg for Eugène Delacroix. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "liberty",
    "title": "Die Freiheit führt das Volk",
    "artist": "Eugène Delacroix",
    "year": "1830",
    "museum": "Musée du Louvre, Paris",
    "source": "Wikimedia Commons: «La Liberté guidant le peuple - Eugène Delacroix - Musée du Louvre Peintures RF 129 - après restauration 2024.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "delacroix",
  "name": "Eugène Delacroix",
  "title": "Eugène Delacroix’ Lebensweg",
  "life": "1798–1863",
  "part": "Ein kurzer Weg · Paris",
  "subtitle": "Die Freiheit führt das Volk",
  "cover": "liberty",
  "intro": "Delacroix malt 1830 die Julirevolution: die Freiheit auf der Barrikade, die Fahne in der Hand. Das Bild hängt im Louvre und ist eines der bekanntesten der französischen Romantik.",
  "ending": [
    "Delacroix stirbt 1863 in Paris. Ein späterer Teil kann weitere Historienbilder nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Historienbilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "delacroix1",
      "place": "Paris",
      "when": "1830",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Paris",
      "intro": [
        "Delacroix malt 1830 die Julirevolution: die Freiheit auf der Barrikade, die Fahne in der Hand. Das Bild hängt im Louvre und ist eines der bekanntesten der französischen Romantik."
      ],
      "works": [
        {
          "pid": "liberty",
          "text": [
            "Eine Frau mit der französischen Trikolore schreitet barfuss über eine Barrikade, den Kopf mit der phrygischen Mütze bedeckt.",
            "Um sie herum kämpfen Bürger, Arbeiter und ein Junge mit Pistolen."
          ],
          "fact": "Die Frau ist keine bestimmte Person, sondern eine Allegorie der Freiheit."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
