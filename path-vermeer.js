// v10.35 short Lebensweg for Johannes Vermeer. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "pearl",
    "title": "Das Mädchen mit dem Perlenohrring",
    "artist": "Johannes Vermeer",
    "year": "um 1665",
    "museum": "Mauritshuis, Den Haag",
    "source": "Wikimedia Commons: «1665 Girl with a Pearl Earring.jpg», gemeinfrei (Public Domain), Ausschnitt"
  },
  {
    "id": "milkmaid",
    "title": "Die Milchmagd",
    "artist": "Johannes Vermeer",
    "year": "um 1658–1660",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Johannes Vermeer - Het melkmeisje - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "delft",
    "title": "Ansicht von Delft",
    "artist": "Johannes Vermeer",
    "year": "um 1660–1661",
    "museum": "Mauritshuis, Den Haag",
    "source": "Wikimedia Commons: «Vermeer-view-of-delft.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "vermeer",
  "name": "Johannes Vermeer",
  "title": "Johannes Vermeers Lebensweg",
  "life": "1632–1675",
  "part": "Ein kurzer Weg · Delft",
  "subtitle": "Licht in den Stuben",
  "cover": "pearl",
  "intro": "Vermeer malt in Delft das stille Licht auf Gesichtern, Kannen und Ziegeln. Drei Bilder führen vom Mädchen mit dem Perlenohrring zur Milchmagd und zur Ansicht der Stadt.",
  "ending": [
    "Vermeer stirbt 1675 in Delft. Ein späterer Teil kann weitere Stubenbilder nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Stubenbilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "vermeer1",
      "place": "Delft",
      "when": "um 1658–1665",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Delft",
      "intro": [
        "Vermeer malt in Delft das stille Licht auf Gesichtern, Kannen und Ziegeln. Drei Bilder führen vom Mädchen mit dem Perlenohrring zur Milchmagd und zur Ansicht der Stadt."
      ],
      "works": [
        {
          "pid": "pearl",
          "text": [
            "Das Bild ist kein klassisches Porträt, sondern eine sogenannte «Tronie»: die Studie eines Gesichts mit einem fantasievollen Kostüm, hier einem Turban.",
            "Wer das Mädchen war, weiss bis heute niemand."
          ],
          "fact": "Die Perle ist eine Illusion: Sie besteht nur aus ein paar Pinselstrichen mit heller Farbe. Untersuchungen haben gezeigt, dass sogar der Haken fehlt, an dem sie am Ohr hängen müsste."
        },
        {
          "pid": "milkmaid",
          "text": [
            "Eine Küchenmagd giesst Milch aus einem Krug.",
            "Daneben liegen Brot und ein Korb."
          ],
          "fact": "Unten an der Wand siehst du Delfter Fliesen mit kleinen Figuren, typisch für holländische Küchen der Zeit."
        },
        {
          "pid": "delft",
          "text": [
            "Von einem Ufer aus sehen wir Delft über den Kanal: das Wasser, die Ziegelwände, die Türme, und eine Wolkenlücke, die die Stadt aufleuchten lässt.",
            "Es ist eines der ruhigsten Stadtbilder der Kunstgeschichte."
          ],
          "fact": "Vermeer selbst stammte aus Delft und blieb der Stadt sein Leben lang treu."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
