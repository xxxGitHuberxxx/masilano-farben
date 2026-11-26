// v10.24 François Diday life journey, Part 1 (1802–1877).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "fdnapoli",
    "title": "Neapel mit dem Castel dell’Ovo und dem Vesuv",
    "artist": "François Diday",
    "year": "1824",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday Naples, Le Château De L'œuf Et Le Vésuve.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdbrienz",
    "title": "Haus am Brienzersee mit Schiff und Enten",
    "artist": "François Diday",
    "year": "1832",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday - Haus am Brienzersee mit Schiff und Enten (1832).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdorage",
    "title": "Gewitter über dem Genfersee",
    "artist": "François Diday",
    "year": "1839",
    "museum": "Musée des beaux-arts, La Chaux-de-Fonds",
    "source": "Wikimedia Commons: «François Diday, Orage sur le Léman, 1839.tif», Public domain (gemeinfrei)"
  },
  {
    "id": "fdrosenlaui",
    "title": "Rosenlaui",
    "artist": "François Diday",
    "year": "1841",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday - Rosenlaui (1841).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdalpsee",
    "title": "Alpenlandschaft am See",
    "artist": "François Diday",
    "year": "1852",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday Paysage alpestre au lac 1852.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdevian",
    "title": "Ufer des Genfersees bei Evian, Morgenbeleuchtung",
    "artist": "François Diday",
    "year": "1852",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «François Diday - Ufer des Genfersees bei Evian. Morgenbeleuchtung - 152 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdhandeck",
    "title": "Die Aare an der Handeck",
    "artist": "François Diday",
    "year": "1854",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «François Diday - L'Aar à la Handeck - 222 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdbrunnen",
    "title": "Vierwaldstättersee bei Brunnen mit Seelisberg und Rütli",
    "artist": "François Diday",
    "year": "1855",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday - Lake Lucerne near Brunnen with a view of Seelisberg, the Rütli meadow and the Engelberger Rotstock (1855).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdriviere",
    "title": "Fluss mit Bäumen, Brücke und Ziegen",
    "artist": "François Diday",
    "year": "1864",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday Rivière, arbres, pont, chèvres 1864.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdmuerren",
    "title": "Blick von Mürren gegen die Ebnefluh",
    "artist": "François Diday",
    "year": "1867",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday Blick von Mürren gegen die Ebenefluh 1867.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdbouveret",
    "title": "Abend bei Le Bouveret",
    "artist": "François Diday",
    "year": "1871",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday Le soir au Bouveret 1871.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdaxen",
    "title": "Vierwaldstättersee und Uri-Rotstock vom Axenberg",
    "artist": "François Diday",
    "year": "um 1874",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday - Blick auf den Vierwaldstättersee und den Urirotstock vom Axenberg aus gesehen (1874).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "fdmontblanc",
    "title": "Der Mont-Blanc und die Arve von Sallanches aus",
    "artist": "François Diday",
    "year": "vor 1877",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «François Diday Le Mont-Blanc et l'Arve vus de Sallanches.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "diday",
  "name": "François Diday",
  "title": "François Didays Lebensweg",
  "life": "1802–1877",
  "part": "Genf und die Alpen",
  "subtitle": "Seen, Wasserfälle und Gipfel",
  "cover": "fdbrunnen",
  "intro": "Reise mit François Diday, dem Genfer Maler, der die Alpen zum grossen Thema der Schweizer Malerei machte: von Neapel über den Brienzersee und den Genfersee bis zu Handeck, Mürren und dem Mont-Blanc. Kurze Stationen und Bilder zum Ausmalen. Dieser Weg folgt ihm durch die Berge.",
  "ending": [
    "François Diday stirbt am 28. November 1877 in Genf. Mit ihm beginnt die Genfer Schule der Alpenmalerei, die Calame und Zünd weitertragen.",
    "Der Weg führt von Neapel und dem Brienzersee bis zum Mont-Blanc, den er von Sallanches aus malt."
  ],
  "epilogue": "François Diday stirbt am 28. November 1877 in Genf. Mit ihm beginnt die Genfer Schule der Alpenmalerei, die Calame und Zünd weitertragen. Der Weg führt von Neapel und dem Brienzersee bis zum Mont-Blanc, den er von Sallanches aus malt.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M16,100 C30,60 96,40 152,50 C204,60 230,92 214,122 C192,148 86,152 42,136 C20,126 10,114 16,100 Z"
    ]
  },
  "stations": [
    {
      "id": "fdjung",
      "place": "Genf, Paris und Italien · Lehrjahre",
      "when": "1802–1832",
      "map": {
        "x": 40,
        "y": 110
      },
      "mapLabel": "Genf",
      "intro": [
        "François Diday wird am 12. Februar 1802 in Genf geboren. Er lernt bei Wolfgang-Adam Töpffer, geht 1821 nach Paris zu Antoine-Jean Gros und reist 1824 nach Italien.",
        "Zurück in der Schweiz entdeckt er das Berner Oberland."
      ],
      "works": [
        {
          "pid": "fdnapoli",
          "text": [
            "Am Golf von Neapel liegt das Castel dell’Ovo, dahinter raucht der Vesuv. Der junge Diday reist 1824 nach Italien.",
            "Das helle Licht des Südens prägt seine frühen Bilder."
          ],
          "fact": "1824. Privatsammlung."
        },
        {
          "pid": "fdbrienz",
          "text": [
            "Ein Holzhaus steht am Ufer des Brienzersees, ein Boot liegt im Wasser, Enten schwimmen vorbei. Diday entdeckt das Berner Oberland.",
            "Es wird eine seiner wichtigsten Landschaften."
          ],
          "fact": "1832. Privatsammlung."
        }
      ]
    },
    {
      "id": "fdschule",
      "place": "Die Genfer Schule",
      "when": "1839–1852",
      "map": {
        "x": 70,
        "y": 80
      },
      "mapLabel": "Oberland",
      "intro": [
        "Diday wird zum ersten grossen Alpenmaler Genfs. In seinem Atelier lernen junge Maler, unter ihnen Alexandre Calame.",
        "Er malt Gewitter, Bergtäler und stille Seen."
      ],
      "works": [
        {
          "pid": "fdorage",
          "text": [
            "Schwere Wolken treiben über den Genfersee, Wellen schlagen ans Ufer. Diday malt die Natur in ihrer Kraft.",
            "Das Bild gehört dem Musée des beaux-arts in La Chaux-de-Fonds."
          ],
          "fact": "1839. Musée des beaux-arts, La Chaux-de-Fonds."
        },
        {
          "pid": "fdrosenlaui",
          "text": [
            "Im Tal von Rosenlaui stehen dunkle Tannen vor hellen Felsen und Eis. Diday malt das Motiv mehrmals.",
            "Auch sein Schüler Alexandre Calame wird Rosenlaui malen."
          ],
          "fact": "1841. Privatsammlung."
        },
        {
          "pid": "fdalpsee",
          "text": [
            "Ein Bergsee liegt still unter hohen Gipfeln, am Ufer stehen Bäume und Felsen. Diday ist jetzt ein gefeierter Maler.",
            "Seine Alpenbilder werden in Paris und Genf ausgestellt und gekauft."
          ],
          "fact": "1852. Privatsammlung."
        }
      ]
    },
    {
      "id": "fdwasser",
      "place": "Seen und Schluchten",
      "when": "1852–1855",
      "map": {
        "x": 130,
        "y": 58
      },
      "mapLabel": "Handeck",
      "intro": [
        "In den 1850er Jahren malt Diday den Genfersee am Morgen, die Aare in der Schlucht und den Vierwaldstättersee.",
        "Auch der junge Robert Zünd hat bei ihm gelernt."
      ],
      "works": [
        {
          "pid": "fdevian",
          "text": [
            "Am Morgen liegt der Genfersee ruhig und hell, das Ufer bei Evian ist noch kühl. Diday kennt den See seit seiner Kindheit.",
            "Das Bild gehört dem Kunsthaus Zürich."
          ],
          "fact": "1852. Kunsthaus Zürich."
        },
        {
          "pid": "fdhandeck",
          "text": [
            "An der Handeck stürzt die junge Aare durch eine Felsschlucht. Gischt und dunkle Tannen füllen das Bild.",
            "Diday wandert oft auf dem Weg zur Grimsel."
          ],
          "fact": "1854. Kunsthaus Zürich."
        },
        {
          "pid": "fdbrunnen",
          "text": [
            "Von Brunnen aus geht der Blick über den Vierwaldstättersee zum Seelisberg und zur Rütliwiese. Darüber steht der Uri-Rotstock.",
            "Die Landschaft der Innerschweiz zieht viele Genfer Maler an."
          ],
          "fact": "1855. Privatsammlung."
        }
      ]
    },
    {
      "id": "fdreif",
      "place": "Reife Jahre",
      "when": "1864–1874",
      "map": {
        "x": 180,
        "y": 90
      },
      "mapLabel": "Mürren",
      "intro": [
        "Diday malt nun weite, ruhige Landschaften mit Fluss, Weide und fernen Gipfeln.",
        "Er kehrt an die Orte seiner frühen Reisen zurück."
      ],
      "works": [
        {
          "pid": "fdriviere",
          "text": [
            "Ein Fluss fliesst unter einer Holzbrücke hindurch, Ziegen weiden am Ufer unter grossen Bäumen. Das Bild ist ruhig und weit.",
            "Diday ist über sechzig und malt weiter mit fester Hand."
          ],
          "fact": "1864. Privatsammlung."
        },
        {
          "pid": "fdmuerren",
          "text": [
            "Von Mürren aus sieht man hinüber zu Schnee und Eis der Ebnefluh. Vorne liegen Weiden und Tannen.",
            "Diday liebt diese Blicke von einer Terrasse hinüber zu den Gipfeln."
          ],
          "fact": "1867. Privatsammlung."
        },
        {
          "pid": "fdbouveret",
          "text": [
            "Am oberen Ende des Genfersees, bei Le Bouveret, wird es Abend. Das Wasser glänzt, die Berge werden blau.",
            "Diday malt auch im Alter den See seiner Heimat."
          ],
          "fact": "1871. Privatsammlung."
        },
        {
          "pid": "fdaxen",
          "text": [
            "Vom Axenberg blickt man tief hinunter auf den Urnersee und hinüber zum Uri-Rotstock. Das Wasser ist grün und klar.",
            "Fast zwanzig Jahre nach Brunnen kehrt Diday an diesen See zurück."
          ],
          "fact": "um 1874. Privatsammlung."
        }
      ]
    },
    {
      "id": "fdspaet",
      "place": "Zum Mont-Blanc",
      "when": "bis 1877",
      "map": {
        "x": 196,
        "y": 130
      },
      "mapLabel": "Mont-Blanc",
      "intro": [
        "Zum Schluss steht der Mont-Blanc, der grosse Berg vor Genf, mit seinen Bächen und Wasserfällen.",
        "Diday stirbt am 28. November 1877 in Genf."
      ],
      "works": [
        {
          "pid": "fdmontblanc",
          "text": [
            "Über dem Tal der Arve steht weiss der Mont-Blanc. Von Sallanches aus wirkt er nah und gewaltig.",
            "Es ist einer der grossen Gipfel, die Diday von Genf aus immer vor Augen hat."
          ],
          "fact": "vor 1877. Privatsammlung."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
