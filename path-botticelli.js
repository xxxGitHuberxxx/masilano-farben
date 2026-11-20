// v10.35 short Lebensweg for Sandro Botticelli. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "venus",
    "title": "Die Geburt der Venus",
    "artist": "Sandro Botticelli",
    "year": "um 1485",
    "museum": "Uffizien, Florenz",
    "source": "Wikimedia Commons: «Sandro Botticelli - La nascita di Venere - Google Art Project - edited.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "primavera",
    "title": "Der Frühling (La Primavera)",
    "artist": "Sandro Botticelli",
    "year": "um 1480",
    "museum": "Galleria degli Uffizi, Florenz",
    "source": "Wikimedia Commons: «Sandro Botticelli - La Primavera - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "botticelli",
  "name": "Sandro Botticelli",
  "title": "Sandro Botticellis Lebensweg",
  "life": "1445–1510",
  "part": "Ein kurzer Weg · Florenz",
  "subtitle": "Venus und der Frühling",
  "cover": "venus",
  "intro": "Botticelli malt in Florenz für die Medici die alten Erzählungen in neuer Anmut. Die Geburt der Venus und der Frühling gehören zum festlichsten Bild der Frührenaissance.",
  "ending": [
    "Botticelli stirbt 1510 in Florenz. Ein späterer Teil kann weitere Tafelbilder nachtragen."
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
      "id": "botticelli1",
      "place": "Florenz",
      "when": "um 1480–1485",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Florenz",
      "intro": [
        "Botticelli malt in Florenz für die Medici die alten Erzählungen in neuer Anmut. Die Geburt der Venus und der Frühling gehören zum festlichsten Bild der Frührenaissance."
      ],
      "works": [
        {
          "pid": "venus",
          "text": [
            "Venus, die Göttin der Liebe, steht auf einer Muschel.",
            "Links blasen die Windgötter sie ans Ufer, rechts wartet eine Frau mit einem Mantel voller Blumen."
          ],
          "fact": "Im 16. Jahrhundert hing das Bild in einer Villa der Medici, der berühmten Florentiner Familie. Wer es bestellt hat, weiss man bis heute nicht sicher."
        },
        {
          "pid": "primavera",
          "text": [
            "In einem schattigen Hain tanzen und schreiten neun Gestalten des Frühlings: Merkur links, die drei Grazien, Venus in der Mitte, der Frühlingswind Zephyr rechts, der die Nymphe Chloris verfolgt.",
            "Über allem schwebt Amor."
          ],
          "fact": "Das Bild entstand wohl für die Familie Medici in Florenz und ist eines der berühmtesten der Frührenaissance."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
