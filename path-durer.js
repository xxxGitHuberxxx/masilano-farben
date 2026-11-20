// v10.35 short Lebensweg for Albrecht Dürer. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "hare",
    "title": "Feldhase",
    "artist": "Albrecht Dürer",
    "year": "1502",
    "museum": "Albertina, Wien",
    "source": "Wikimedia Commons: «Albrecht Dürer - Hare, 1502 - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "wing",
    "title": "Flügel einer Blauracke",
    "artist": "Albrecht Dürer",
    "year": "um 1512",
    "museum": "Albertina, Wien",
    "source": "Wikimedia Commons: «Duerer wing of a blue roller.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "durer",
  "name": "Albrecht Dürer",
  "title": "Albrecht Dürers Lebensweg",
  "life": "1471–1528",
  "part": "Ein kurzer Weg · Nürnberg",
  "subtitle": "Der Feldhase und der Flügel",
  "cover": "hare",
  "intro": "Zwei berühmte Aquarelle aus Nürnberg: Dürers Feldhase und der Flügel einer Blauracke. Ein kurzer Weg durch die beobachtende Naturstudie der Renaissance.",
  "ending": [
    "Dürer stirbt 1528 in Nürnberg. Die beiden Blätter gehören zu den genauesten Naturstudien ihrer Zeit."
  ],
  "epilogue": "Ein späterer Teil kann weitere Grafiken und Bildnisse nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "durer1",
      "place": "Nürnberg",
      "when": "1471–1528",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Nürnberg",
      "intro": [
        "Zwei berühmte Aquarelle aus Nürnberg: Dürers Feldhase und der Flügel einer Blauracke. Ein kurzer Weg durch die beobachtende Naturstudie der Renaissance."
      ],
      "works": [
        {
          "pid": "hare",
          "text": [
            "Der Hase sitzt ganz still, die Ohren aufmerksam, jedes einzelne Fellhaar sichtbar.",
            "Dürer hat ihn so nah und genau beobachtet, dass man das weiche Fell fast spüren kann."
          ],
          "fact": "Das Blatt ist nur etwa 25 Zentimeter hoch und trotzdem eines der berühmtesten Tierbilder der Welt."
        },
        {
          "pid": "wing",
          "text": [
            "Dürer hat den Flügel eines bunten Vogels so genau gemalt, als läge er noch vor uns auf dem Tisch.",
            "Jede Feder ist einzeln gesetzt, von den kräftigen Schwingen bis zu den weichen, hellen Deckfedern."
          ],
          "fact": "Die Blauracke ist ein südlicher Vogel mit Türkis, Blau und warmem Braun im Gefieder. Dürer hielt ihn wie ein Forscher fest."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
