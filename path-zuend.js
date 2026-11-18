// v10.23 Robert Zünd life journey, Part 1 (1827–1909).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "rzpilatus",
    "title": "Der Pilatus von Westen",
    "artist": "Robert Zünd",
    "year": "1851",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Robert Zünd - Der Pilatus von Westen - 2003-0029 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzvierwald",
    "title": "Abend am Vierwaldstättersee",
    "artist": "Robert Zünd",
    "year": "1851",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Robert Zünd Abend am Vierwaldstättersee 1851.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzernte",
    "title": "Die Ernte",
    "artist": "Robert Zünd",
    "year": "1860",
    "museum": "Kunstmuseum Basel",
    "source": "Wikimedia Commons: «Zünd die Ernte 1860.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzbaeume",
    "title": "Bäume",
    "artist": "Robert Zünd",
    "year": "1865",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Robert Zünd Bäume 1865.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzhirtenhof",
    "title": "Hirtenhof",
    "artist": "Robert Zünd",
    "year": "undatiert",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Swiss Farm ('Hirtenhof') MET DP804185.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rzsempach",
    "title": "Schlachtkapelle von Sempach",
    "artist": "Robert Zünd",
    "year": "1866",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Robert Zünd - Schlachtkapelle von Sempach - 315 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzseesemp",
    "title": "Sempachersee",
    "artist": "Robert Zünd",
    "year": "um 1860",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Robert Zünd - Sempachersee - 727 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzeggen",
    "title": "Bauern mit Ochsengespann beim Eggen",
    "artist": "Robert Zünd",
    "year": "1868",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Zünd Bauern mit Ochsengespann beim Eggen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzkorn",
    "title": "Kornfeld mit Eichen",
    "artist": "Robert Zünd",
    "year": "1875",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Zünd Kornfeld mit Eichen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzreuss",
    "title": "Die Reuss mit Kloster Rathausen",
    "artist": "Robert Zünd",
    "year": "vor 1909",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Robert Zünd Reuss mit Kloster Rathausen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzeichen",
    "title": "Eichenwald",
    "artist": "Robert Zünd",
    "year": "1882",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Zünd Eichenwald 1882.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzbuchen",
    "title": "Buchenwald",
    "artist": "Robert Zünd",
    "year": "1886–1887",
    "museum": "Kunstmuseum Luzern",
    "source": "Wikimedia Commons: «Zünd Buchenwald 1887.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rzschafe",
    "title": "Abendlandschaft mit Schafherde",
    "artist": "Robert Zünd",
    "year": "1889–1891",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Robert Zünd - Abendlandschaft mit Schafherde - 761 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "zuend",
  "name": "Robert Zünd",
  "title": "Robert Zünds Lebensweg",
  "life": "1827–1909",
  "part": "Teil 1 · Luzern und das Licht der Felder",
  "subtitle": "Seen, Felder und Eichenwälder",
  "cover": "rzernte",
  "intro": "Reise mit Robert Zünd, dem Luzerner Landschaftsmaler: von den Lehrjahren in Genf über die Felder und Seen der Innerschweiz bis zu den grossen Eichen- und Buchenwäldern. Kurze Stationen und Bilder zum Ausmalen. Dieser erste Teil folgt seinem Weg durch die Landschaft.",
  "ending": [
    "Robert Zünd stirbt am 15. Januar 1909 in Luzern. Er hat die Landschaft seiner Heimat ein Leben lang mit grosser Geduld gemalt.",
    "Der Weg kann weiterwachsen. Weitere Felder, Wälder und biblische Landschaften können in einem späteren Teil folgen."
  ],
  "epilogue": "Am 15. Januar 1909 stirbt Zünd in Luzern. Ein späterer Teil kann weitere Wälder und Felder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,92 C40,52 104,40 150,58 C196,74 226,104 204,128 C170,150 70,148 34,130 C16,120 10,106 18,92 Z"
    ]
  },
  "stations": [
    {
      "id": "rzjung",
      "place": "Luzern und Genf · Lehrjahre",
      "when": "1827–1851",
      "map": {
        "x": 118,
        "y": 86
      },
      "mapLabel": "Luzern",
      "intro": [
        "Robert Zünd wird am 3. Mai 1827 in Luzern geboren. Ab 1848 lernt er in Genf bei François Diday und Alexandre Calame.",
        "1851 malt er den Pilatus und den Vierwaldstättersee, die Landschaft seiner Herkunft."
      ],
      "works": [
        {
          "pid": "rzpilatus",
          "text": [
            "Der Pilatus erhebt sich über Wiesen und Wald, das Licht ist klar und still. Zünd ist hier Mitte zwanzig und malt den Hausberg von Luzern.",
            "Schon in diesem frühen Bild zeigt sich seine Ruhe vor der Natur."
          ],
          "fact": "1851. Kunsthaus Zürich."
        },
        {
          "pid": "rzvierwald",
          "text": [
            "Der Abend liegt über dem Vierwaldstättersee, das Wasser spiegelt den Himmel. Zünd malt das Bild im gleichen Jahr wie den Pilatus.",
            "Der See vor seiner Haustür bleibt eines seiner grossen Themen."
          ],
          "fact": "1851. Privatsammlung."
        }
      ]
    },
    {
      "id": "rzfeld",
      "place": "Felder und Bäume",
      "when": "1852–1865",
      "map": {
        "x": 84,
        "y": 76
      },
      "mapLabel": "Felder",
      "intro": [
        "Nach einem Aufenthalt in Paris kehrt Zünd nach Luzern zurück und bleibt dort. Er malt Felder, Höfe und einzelne Bäume.",
        "Mit «Die Ernte» von 1860 findet er seinen eigenen, genauen Stil."
      ],
      "works": [
        {
          "pid": "rzernte",
          "text": [
            "Ein goldenes Kornfeld, Menschen bei der Ernte, darüber ein weiter Sommerhimmel. Das Bild von 1860 gehört zu Zünds bekanntesten Werken.",
            "Jede Ähre und jeder Baum ist mit grosser Sorgfalt gemalt."
          ],
          "fact": "1860. Kunstmuseum Basel."
        },
        {
          "pid": "rzbaeume",
          "text": [
            "Eine Gruppe hoher Bäume steht im Licht, das Laub dicht und lebendig. Zünd studiert Bäume immer wieder, fast wie Bildnisse.",
            "Aus solchen Studien wachsen später seine grossen Waldbilder."
          ],
          "fact": "1865. Privatsammlung."
        },
        {
          "pid": "rzhirtenhof",
          "text": [
            "Ein Bauernhof liegt zwischen Bäumen und Wiesen, ruhig und bewohnt. Das Bild gehört heute dem Metropolitan Museum in New York.",
            "Zünd zeigt das ländliche Leben ohne Anekdote, ganz aus Licht und Ordnung."
          ],
          "fact": "undatiert. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "rzsemp",
      "place": "Sempach und das Seeland",
      "when": "1860–1875",
      "map": {
        "x": 150,
        "y": 70
      },
      "mapLabel": "Sempach",
      "intro": [
        "Nördlich von Luzern liegen der Sempachersee und die Felder des Mittellands. Zünd malt Kapelle, See und bäuerliche Arbeit.",
        "Er arbeitet langsam und sorgfältig, oft über Jahre an einem Motiv."
      ],
      "works": [
        {
          "pid": "rzsempach",
          "text": [
            "Die kleine Kapelle bei Sempach steht in einer friedlichen Landschaft. Sie erinnert an die Schlacht von 1386.",
            "Zünd malt den Ort nicht als Geschichte, sondern als stille Gegenwart."
          ],
          "fact": "1866. Kunsthaus Zürich."
        },
        {
          "pid": "rzseesemp",
          "text": [
            "Der Sempachersee liegt flach und hell im Hügelland. Wasser und Himmel teilen sich das Bild.",
            "Zünd findet seine Motive meist nur wenige Stunden von Luzern entfernt."
          ],
          "fact": "um 1860. Kunsthaus Zürich."
        },
        {
          "pid": "rzeggen",
          "text": [
            "Bauern ziehen mit Ochsen die Egge über das Feld. Die Arbeit ist langsam, das Land weit.",
            "Zünd malt den Rhythmus des bäuerlichen Jahres mit grosser Genauigkeit."
          ],
          "fact": "1868. Privatsammlung."
        },
        {
          "pid": "rzkorn",
          "text": [
            "Hohe Eichen stehen am Rand eines reifen Kornfelds. Licht und Schatten wechseln ruhig ab.",
            "Feld und Baum, zwei Lieblingsmotive Zünds, treffen sich in diesem Bild."
          ],
          "fact": "1875. Privatsammlung."
        }
      ]
    },
    {
      "id": "rzwald",
      "place": "Die grossen Wälder",
      "when": "1880–1890",
      "map": {
        "x": 176,
        "y": 104
      },
      "mapLabel": "Wälder",
      "intro": [
        "In den 1880er Jahren entstehen Zünds berühmte Waldbilder. Eichen und Buchen werden zu Hauptfiguren.",
        "Das Licht fällt durch das Laub und ordnet den ganzen Raum."
      ],
      "works": [
        {
          "pid": "rzeichen",
          "text": [
            "Alte Eichen bilden einen hellen Wald, das Licht fällt auf Weg und Lichtung. Das Bild gehört dem Kunsthaus Zürich.",
            "Zünd malt jedes Blatt, und doch bleibt das Ganze ruhig und weit."
          ],
          "fact": "1882. Kunsthaus Zürich."
        },
        {
          "pid": "rzbuchen",
          "text": [
            "Glatte Buchenstämme stehen dicht, das Licht wird grün und golden. Das Bild befindet sich im Kunstmuseum Luzern.",
            "Im Wald findet Zünd Stille und Ordnung zugleich."
          ],
          "fact": "1886–1887. Kunstmuseum Luzern."
        }
      ]
    },
    {
      "id": "rzspaet",
      "place": "Abend an der Reuss",
      "when": "1889–1909",
      "map": {
        "x": 130,
        "y": 118
      },
      "mapLabel": "Reuss",
      "intro": [
        "In den späten Jahren malt Zünd weichere Abendbilder, Herden und den Fluss unterhalb Luzerns.",
        "Er bleibt bis zuletzt in seiner Stadt und bei seiner Landschaft."
      ],
      "works": [
        {
          "pid": "rzschafe",
          "text": [
            "Eine Schafherde zieht am Abend durch eine stille Landschaft. Das warme Licht liegt tief über dem Land.",
            "In seinen späten Jahren werden Zünds Bilder weicher und ruhiger."
          ],
          "fact": "1889–1891. Kunsthaus Zürich."
        },
        {
          "pid": "rzreuss",
          "text": [
            "Die Reuss fliesst ruhig an Kloster Rathausen vorbei, unterhalb von Luzern. Ufer und Bäume spiegeln sich im Wasser.",
            "Der Fluss verbindet den See mit dem Land, das Zünd so oft gemalt hat."
          ],
          "fact": "vor 1909. Privatsammlung."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
