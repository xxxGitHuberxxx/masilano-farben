// v10.24 Emil Jakob Schindler life journey, Part 1 (1842–1892).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "sjramsau",
    "title": "Gebirgsbach in der Ramsau",
    "artist": "Emil Jakob Schindler",
    "year": "1868",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Gebirgsbach in der Ramsau - 5520 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjdampfer",
    "title": "Dampfschiffstation an der Donau gegenüber Kaisermühlen",
    "artist": "Emil Jakob Schindler",
    "year": "um 1871",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Die Dampfschiffstation an der Donau gegenüber Kaisermühlen - 3338 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjholland",
    "title": "Weidendes Vieh in Holland",
    "artist": "Emil Jakob Schindler",
    "year": "1875",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Weidendes Vieh in Holland - 5973 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjschafe",
    "title": "Dorflandschaft mit Schafen",
    "artist": "Emil Jakob Schindler",
    "year": "1875",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Dorflandschaft mit Schafen - 5318 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjkrieau",
    "title": "Motiv aus dem Prater – Krieau",
    "artist": "Emil Jakob Schindler",
    "year": "um 1873",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Motiv aus dem Prater – Krieau - 6553 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjhacking",
    "title": "Hackinger Au",
    "artist": "Emil Jakob Schindler",
    "year": "1880",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Hackinger Au - 4012 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjlundenburg",
    "title": "Moorlandschaft bei Lundenburg",
    "artist": "Emil Jakob Schindler",
    "year": "1882",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Moorlandschaft bei Lundenburg - 4295 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjfruehling",
    "title": "Frühling in Hacking",
    "artist": "Emil Jakob Schindler",
    "year": "1883",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Frühling in Hacking - 4011 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjgosau",
    "title": "Die Gosaumühle bei Ischl",
    "artist": "Emil Jakob Schindler",
    "year": "1883",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Die Gosaumühle bei Ischl - 335a - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjmaerz",
    "title": "Märzstimmung – Vorfrühling im Wienerwald",
    "artist": "Emil Jakob Schindler",
    "year": "1884",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Märzstimmung – Vorfrühling im Wienerwald - 4013 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjsaege",
    "title": "Sägemühle im Morgennebel",
    "artist": "Emil Jakob Schindler",
    "year": "1886",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Sägemühle im Morgennebel - 381 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjkorfu",
    "title": "Das Ionische Meer bei Korfu",
    "artist": "Emil Jakob Schindler",
    "year": "1888",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Das Ionische Meer bei Korfu - 4020 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjruebe",
    "title": "Kohlrübenfeld",
    "artist": "Emil Jakob Schindler",
    "year": "1888",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Kohlrübenfeld - 5438 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjernte",
    "title": "Erntemonat in Plankenberg",
    "artist": "Emil Jakob Schindler",
    "year": "1890",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Erntemonat in Plankenberg - 3655 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sjsylt",
    "title": "Meeresküste von Sylt",
    "artist": "Emil Jakob Schindler",
    "year": "1892",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Emil Jakob Schindler - Meeresküste von Sylt - 4796 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "schindler",
  "name": "Emil Jakob Schindler",
  "title": "Emil Jakob Schindlers Lebensweg",
  "life": "1842–1892",
  "part": "Stimmungen von Wien bis Sylt",
  "subtitle": "Auen, Mühlen und Meer",
  "cover": "sjsaege",
  "intro": "Reise mit Emil Jakob Schindler, dem Wiener Landschaftsmaler der leisen Stimmungen: von den Bergbächen der Ramsau über die Donauauen und den Prater bis nach Plankenberg, an die Adria und ans Meer von Sylt. Kurze Stationen und Bilder zum Ausmalen. Dieser Weg folgt seinem Licht.",
  "ending": [
    "Emil Jakob Schindler stirbt am 9. August 1892 in Westerland auf Sylt. Seine Schülerinnen Marie Egner und Olga Wisinger-Florian tragen seine Malerei weiter.",
    "Der Weg führt von den Gebirgsbächen seiner Lehrjahre über den Prater, die Auen und Plankenberg bis an die Nordseeküste von Sylt."
  ],
  "epilogue": "Emil Jakob Schindler stirbt am 9. August 1892 in Westerland auf Sylt. Seine Schülerinnen Marie Egner und Olga Wisinger-Florian tragen seine Malerei weiter. Der Weg führt von den Gebirgsbächen seiner Lehrjahre über den Prater, die Auen und Plankenberg bis an die Nordseeküste von Sylt.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,90 C34,52 100,34 156,44 C206,54 232,90 214,120 C190,148 84,152 40,134 C18,124 12,104 20,90 Z"
    ]
  },
  "stations": [
    {
      "id": "sjjung",
      "place": "Wien und die Berge · Lehrjahre",
      "when": "1842–1872",
      "map": {
        "x": 70,
        "y": 58
      },
      "mapLabel": "Ramsau",
      "intro": [
        "Emil Jakob Schindler wird am 27. April 1842 in Wien geboren. Ab 1860 studiert er an der Wiener Akademie bei Albert Zimmermann.",
        "Er malt Bergbäche und den Alltag an der Donau."
      ],
      "works": [
        {
          "pid": "sjramsau",
          "text": [
            "Ein Bach rauscht zwischen Steinen und Tannen durch die Ramsau. Schindler ist sechsundzwanzig und lernt, genau hinzusehen.",
            "Noch malt er dunkel und dicht, ganz in der Tradition seiner Lehrer."
          ],
          "fact": "1868. Belvedere, Wien."
        },
        {
          "pid": "sjdampfer",
          "text": [
            "An der Donau liegt eine Anlegestelle für Dampfschiffe, das Wasser ist breit und grau. Wien wächst an seinem Fluss.",
            "Schindler malt den Alltag am Strom ohne Pathos."
          ],
          "fact": "um 1871. Belvedere, Wien."
        }
      ]
    },
    {
      "id": "sjhell",
      "place": "Prater, Holland und die Auen",
      "when": "1873–1882",
      "map": {
        "x": 118,
        "y": 92
      },
      "mapLabel": "Prater",
      "intro": [
        "In den 1870er Jahren wird Schindlers Malerei heller. Er reist nach Holland und malt im Prater und in den Auen um Wien.",
        "So entsteht seine eigene, stille Stimmungsmalerei."
      ],
      "works": [
        {
          "pid": "sjkrieau",
          "text": [
            "In der Krieau im Prater stehen alte Bäume am Wasser. Das Laub bricht das Licht in viele Töne.",
            "Hier malt später auch Tina Blau, mit der Schindler eine Zeit lang ein Atelier teilt."
          ],
          "fact": "um 1873. Belvedere, Wien."
        },
        {
          "pid": "sjholland",
          "text": [
            "Kühe weiden auf flachem Land unter einem grossen Himmel. Schindler reist nach Holland und studiert die Maler dort.",
            "Das weite Licht des Nordens verändert seinen Blick."
          ],
          "fact": "1875. Belvedere, Wien."
        },
        {
          "pid": "sjschafe",
          "text": [
            "Schafe ziehen an niedrigen Häusern vorbei, der Himmel ist hell und bewegt. Alles wirkt einfach und still.",
            "Für Schindler ist das Gewöhnliche ein würdiges Motiv."
          ],
          "fact": "1875. Belvedere, Wien."
        },
        {
          "pid": "sjhacking",
          "text": [
            "Bei Hacking am Wienfluss liegt eine stille Au mit Bäumen und Wasser. Das Bild hat die feuchte Frische eines Frühlingstags.",
            "Schindler nennt man bald einen Maler der Stimmungen."
          ],
          "fact": "1880. Belvedere, Wien."
        },
        {
          "pid": "sjlundenburg",
          "text": [
            "Bei Lundenburg an der Thaya liegen flache Moore und Wasserflächen. Der Himmel spiegelt sich im dunklen Grund.",
            "Schindler sucht solche einsamen Orte bewusst auf."
          ],
          "fact": "1882. Belvedere, Wien."
        }
      ]
    },
    {
      "id": "sjschule",
      "place": "Goisern und der Wienerwald",
      "when": "1883–1884",
      "map": {
        "x": 70,
        "y": 118
      },
      "mapLabel": "Goisern",
      "intro": [
        "Schindler unterrichtet nun junge Malerinnen, darunter Marie Egner und Olga Wisinger-Florian. Im Sommer malen sie gemeinsam in Goisern.",
        "Im Wienerwald beobachtet er den Übergang vom Winter zum Frühling."
      ],
      "works": [
        {
          "pid": "sjfruehling",
          "text": [
            "Die ersten Bäume blühen in Hacking, das Gras ist hellgrün. Die Luft scheint warm und weich.",
            "Schindler hat jetzt Schülerinnen und Schüler, die mit ihm draussen malen."
          ],
          "fact": "1883. Belvedere, Wien."
        },
        {
          "pid": "sjgosau",
          "text": [
            "Eine alte Mühle steht am Bach im Salzkammergut, Holz und Wasser sind von Moos überzogen. Schindler malt hier mit seinen Schülerinnen.",
            "Die Sommer in Goisern werden zu einer Malschule unter freiem Himmel."
          ],
          "fact": "1883. Belvedere, Wien."
        },
        {
          "pid": "sjmaerz",
          "text": [
            "Im Wienerwald ist der Schnee fast geschmolzen, die Bäume sind noch kahl. Das Licht kündigt schon den Frühling an.",
            "Solche Zwischenzeiten liebt Schindler besonders."
          ],
          "fact": "1884. Belvedere, Wien."
        }
      ]
    },
    {
      "id": "sjplank",
      "place": "Plankenberg und die Adria",
      "when": "1885–1890",
      "map": {
        "x": 160,
        "y": 70
      },
      "mapLabel": "Plankenberg",
      "intro": [
        "1885 zieht Schindler mit seiner Familie ins Schloss Plankenberg. Im Auftrag von Kronprinz Rudolf reist er an die Küsten der Adria.",
        "Zwischen Nebel, Feld und Meer entstehen seine reifsten Bilder."
      ],
      "works": [
        {
          "pid": "sjsaege",
          "text": [
            "Im Morgennebel stehen die Sägemühle und die Bäume wie Schatten. Farben und Formen werden weich.",
            "Seit 1885 lebt Schindler mit seiner Familie im Schloss Plankenberg bei Neulengbach."
          ],
          "fact": "1886. Belvedere, Wien."
        },
        {
          "pid": "sjkorfu",
          "text": [
            "Das Meer bei Korfu leuchtet blau, die Küste ist hell und felsig. Schindler reist im Auftrag von Kronprinz Rudolf an die Adria.",
            "Er soll die Küsten für ein grosses Buch über die Monarchie malen."
          ],
          "fact": "1888. Belvedere, Wien."
        },
        {
          "pid": "sjruebe",
          "text": [
            "Ein Feld mit Kohlrüben liegt flach unter einem hohen Himmel, am Rand stehen ein paar Bäume. Nichts ist hier spektakulär.",
            "Gerade darin liegt Schindlers stille Kraft."
          ],
          "fact": "1888. Belvedere, Wien."
        },
        {
          "pid": "sjernte",
          "text": [
            "Im Sommer steht das Korn reif rund um Plankenberg, Garben liegen auf dem Feld. Das Licht ist warm und golden.",
            "Schindler malt die Landschaft rund um sein Zuhause in allen Jahreszeiten."
          ],
          "fact": "1890. Belvedere, Wien."
        }
      ]
    },
    {
      "id": "sjnord",
      "place": "An der Nordsee",
      "when": "1892",
      "map": {
        "x": 208,
        "y": 36
      },
      "mapLabel": "Sylt",
      "intro": [
        "Im Sommer 1892 reist Schindler nach Sylt. Er malt noch das offene Meer.",
        "Am 9. August 1892 stirbt er in Westerland."
      ],
      "works": [
        {
          "pid": "sjsylt",
          "text": [
            "An der Küste von Sylt rollen die Wellen auf den hellen Sand, der Himmel ist weit und windig. Es ist eines seiner letzten Bilder.",
            "Schindler reist 1892 an die Nordsee und stirbt dort im August."
          ],
          "fact": "1892. Belvedere, Wien."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
