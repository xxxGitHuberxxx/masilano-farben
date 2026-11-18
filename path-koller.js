// v10.24 Rudolf Koller life journey, Part 1 (1828–1905).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "rkselbst",
    "title": "Selbstbildnis mit 16 Jahren an der Staffelei",
    "artist": "Rudolf Koller",
    "year": "1844",
    "museum": "Standort ohne Angabe",
    "source": "Wikimedia Commons: «Rudolf Koller - Selbstbildnis mit 16 Jahren, an der Staffelei (1844).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkschimmel",
    "title": "Schimmel im Stall",
    "artist": "Rudolf Koller",
    "year": "1848",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Rudolf Koller - Schimmel im Stall - 127 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkscheu",
    "title": "Scheuende Pferde bei aufziehendem Gewitter",
    "artist": "Rudolf Koller",
    "year": "1849",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Rudolf Koller - Scheuende Pferde bei aufziehendem Gewitter.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkkuhwald",
    "title": "Kuh im Wald",
    "artist": "Rudolf Koller",
    "year": "1854",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Rudolf Koller Kuh im Wald 1854.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkheuernte",
    "title": "Heuernte bei drohendem Gewitter",
    "artist": "Rudolf Koller",
    "year": "1854",
    "museum": "Standort ohne Angabe",
    "source": "Wikimedia Commons: «Koller Heuernte bei drohendem Gewitter 1854.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rksusten",
    "title": "Gletscher am Sustenpass",
    "artist": "Rudolf Koller",
    "year": "1856",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Rudolf Koller - Gletscher am Sustenpass - 622 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkrichisau",
    "title": "Die Richisau",
    "artist": "Rudolf Koller",
    "year": "1858",
    "museum": "Museum Oskar Reinhart, Winterthur",
    "source": "Wikimedia Commons: «Die Richisau von Rudolf Koller.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkmittag",
    "title": "Mittagsruhe",
    "artist": "Rudolf Koller",
    "year": "1860",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Rudolf Koller - Mittagsruhe - 294 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkwaesche",
    "title": "Kühe und Wäscherin am Bach",
    "artist": "Rudolf Koller",
    "year": "1865–1867",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Rudolf Koller - Kühe und Wäscherin am Bach.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rktraenke",
    "title": "Viehtränke am See bei Sonnenuntergang",
    "artist": "Rudolf Koller",
    "year": "1868",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Rudolf Koller Viehtränke am See bei Sonnenuntergang 1868.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkanzio",
    "title": "Ziegenherde am Strand von Porto d’Anzio",
    "artist": "Rudolf Koller",
    "year": "1869",
    "museum": "Museum Oskar Reinhart, Winterthur",
    "source": "Wikimedia Commons: «Rudolf Koller - Ziegenherde am Strand von Porto d'Anzio.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkhorn",
    "title": "Kühe am Zürichhorn",
    "artist": "Rudolf Koller",
    "year": "1869",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Rudolf Koller Kühe am Zürichhorn.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkgotthard",
    "title": "Die Gotthardpost",
    "artist": "Rudolf Koller",
    "year": "1873",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Rudolf Koller - Die Gotthardpost (1873).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkalp",
    "title": "Alpaufzug",
    "artist": "Rudolf Koller",
    "year": "1881",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Koller Alpaufzug 1881.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkschlitten",
    "title": "Schlittenfahrt",
    "artist": "Rudolf Koller",
    "year": "1892",
    "museum": "Bundesamt für Kultur, Bern",
    "source": "Wikimedia Commons: «Rudolf Koller - Schlittenfahrt (1892).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rkabend",
    "title": "Abend am Zürichhorn",
    "artist": "Rudolf Koller",
    "year": "1893",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Rudolf Koller - Abend am Zürichhorn.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "koller",
  "name": "Rudolf Koller",
  "title": "Rudolf Kollers Lebensweg",
  "life": "1828–1905",
  "part": "Teil 1 · Zürich und die Tiere",
  "subtitle": "Pferde, Kühe und die Gotthardpost",
  "cover": "rkgotthard",
  "intro": "Reise mit Rudolf Koller, dem Zürcher Tiermaler: vom jungen Maler an der Staffelei über die Alpen und das Klöntal bis zum Haus am Zürichhorn und zur berühmten Gotthardpost. Kurze Stationen und Bilder zum Ausmalen. Dieser erste Teil folgt ihm durch Stall, Weide und Gebirge.",
  "ending": [
    "Rudolf Koller stirbt am 5. Januar 1905 in Zürich. Seine Tiere hat er ein Leben lang mit Geduld und genauem Blick gemalt.",
    "Der Weg kann weiterwachsen. Weitere Studien, Alpbilder und Bildnisse können in einem späteren Teil folgen."
  ],
  "epilogue": "Am 5. Januar 1905 stirbt Koller in Zürich. Ein späterer Teil kann weitere Tierstudien nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M22,96 C36,58 98,36 150,48 C200,60 228,96 210,124 C184,150 80,150 40,132 C20,122 14,110 22,96 Z"
    ]
  },
  "stations": [
    {
      "id": "rkjung",
      "place": "Zürich und Düsseldorf · Lehrjahre",
      "when": "1828–1852",
      "map": {
        "x": 118,
        "y": 92
      },
      "mapLabel": "Zürich",
      "intro": [
        "Rudolf Koller wird am 21. Mai 1828 in Zürich geboren. 1846 geht er an die Akademie in Düsseldorf, danach nach Paris und München.",
        "Pferde und Kühe sind von Anfang an seine Modelle."
      ],
      "works": [
        {
          "pid": "rkselbst",
          "text": [
            "Der sechzehnjährige Koller sitzt an der Staffelei und blickt uns ernst an. Er ist der Sohn eines Zürcher Metzgers und Wirts.",
            "Schon früh zeichnet er Tiere im Stall seines Vaters."
          ],
          "fact": "1844. Standort ohne Angabe."
        },
        {
          "pid": "rkschimmel",
          "text": [
            "Ein weisses Pferd steht ruhig im dunklen Stall, das Licht fällt auf Fell und Mähne. Koller malt das Bild mit zwanzig Jahren.",
            "Pferde bleiben ein Leben lang seine liebsten Modelle."
          ],
          "fact": "1848. Kunsthaus Zürich."
        },
        {
          "pid": "rkscheu",
          "text": [
            "Dunkle Wolken ziehen auf, die Pferde heben die Köpfe und drängen zur Seite. Das Bild entsteht nach Kollers Lehrzeit in Düsseldorf.",
            "In Düsseldorf hat er 1846 Arnold Böcklin kennengelernt, mit dem er befreundet bleibt."
          ],
          "fact": "1849. Privatsammlung."
        }
      ]
    },
    {
      "id": "rkland",
      "place": "Felder, Alpen und das Klöntal",
      "when": "1853–1860",
      "map": {
        "x": 70,
        "y": 74
      },
      "mapLabel": "Klöntal",
      "intro": [
        "Zurück in der Schweiz malt Koller Heuernte, Wald und Gletscher. Im Klöntal findet er in der Richisau einen Sommerort.",
        "Er arbeitet draussen vor dem Motiv und vollendet die Bilder im Atelier."
      ],
      "works": [
        {
          "pid": "rkkuhwald",
          "text": [
            "Eine Kuh steht im Schatten der Bäume, Licht fällt in Flecken auf ihr Fell. Koller beobachtet das Tier ganz aus der Nähe.",
            "Nach Reisen nach Paris und München ist er wieder in Zürich."
          ],
          "fact": "1854. Privatsammlung."
        },
        {
          "pid": "rkheuernte",
          "text": [
            "Bauern laden eilig Heu auf den Wagen, der Himmel wird dunkel. Die Pferde warten angespannt.",
            "Koller zeigt die Arbeit auf dem Land ohne Schönfärberei, aber mit Wärme."
          ],
          "fact": "1854. Standort ohne Angabe."
        },
        {
          "pid": "rksusten",
          "text": [
            "Hoch oben liegt der Gletscher, davor Felsen und karge Weiden. Koller wandert für seine Studien in die Alpen.",
            "Das Bild gehört dem Kunsthaus Zürich."
          ],
          "fact": "1856. Kunsthaus Zürich."
        },
        {
          "pid": "rkrichisau",
          "text": [
            "Die Richisau liegt hinten im Klöntal im Kanton Glarus, zwischen Weiden und steilen Bergen. Koller verbringt hier viele Sommer.",
            "Hier findet er Kühe, Licht und Ruhe für seine Bilder."
          ],
          "fact": "1858. Museum Oskar Reinhart, Winterthur."
        },
        {
          "pid": "rkmittag",
          "text": [
            "In der Mittagshitze liegen die Kühe im Gras, der Hirt ruht im Schatten. Alles ist still.",
            "Das Bild im Kunsthaus Zürich zeigt Kollers Gespür für Wärme und Licht."
          ],
          "fact": "1860. Kunsthaus Zürich."
        }
      ]
    },
    {
      "id": "rkhaus",
      "place": "Das Haus am Zürichhorn",
      "when": "1862–1869",
      "map": {
        "x": 150,
        "y": 108
      },
      "mapLabel": "Zürichhorn",
      "intro": [
        "1862 zieht Koller in sein Haus am Zürichhorn am See. Er hält eigene Tiere und malt sie am Ufer.",
        "Eine Reise führt ihn 1869 auch an die Küste Italiens."
      ],
      "works": [
        {
          "pid": "rkwaesche",
          "text": [
            "Am Bach wäscht eine Frau, daneben trinken die Kühe. Wasser, Fell und Laub glänzen im Licht.",
            "Seit 1862 lebt Koller in seinem Haus am Zürichhorn, am Ufer des Zürichsees."
          ],
          "fact": "1865–1867. Privatsammlung."
        },
        {
          "pid": "rktraenke",
          "text": [
            "Die Sonne geht unter, das Vieh trinkt im flachen Wasser am Seeufer. Der Himmel glüht in Rot und Gold.",
            "Koller malt solche Abendbilder oft vor seinem Haus am See."
          ],
          "fact": "1868. Privatsammlung."
        },
        {
          "pid": "rkanzio",
          "text": [
            "Eine Ziegenherde zieht über den hellen Sandstrand, dahinter liegt das Meer. Koller reist nach Italien und malt dort im Süden.",
            "Das Licht ist hier weisser und weiter als am Zürichsee."
          ],
          "fact": "1869. Museum Oskar Reinhart, Winterthur."
        },
        {
          "pid": "rkhorn",
          "text": [
            "Kühe stehen am Ufer beim Zürichhorn, über dem See liegt ein heller Tag. Hier wohnt und arbeitet Koller.",
            "Seine Tiere hält er selbst, damit er sie jeden Tag studieren kann."
          ],
          "fact": "1869. Privatsammlung."
        }
      ]
    },
    {
      "id": "rkgott",
      "place": "Gotthard und Alp",
      "when": "1873–1881",
      "map": {
        "x": 190,
        "y": 58
      },
      "mapLabel": "Gotthard",
      "intro": [
        "1873 malt Koller die Gotthardpost, das Bild, mit dem man ihn bis heute verbindet.",
        "Auch der Alpaufzug zeigt die Bewegung von Tieren und Menschen in den Bergen."
      ],
      "works": [
        {
          "pid": "rkgotthard",
          "text": [
            "Die Postkutsche jagt die Passstrasse herab, ein Kalb springt erschrocken zur Seite. Es ist Kollers bekanntestes Bild.",
            "Es entsteht 1873, als der Bau des Gotthardtunnels beginnt, und hängt im Kunsthaus Zürich."
          ],
          "fact": "1873. Kunsthaus Zürich."
        },
        {
          "pid": "rkalp",
          "text": [
            "Im Frühsommer zieht die Herde mit Hirten und Glocken hinauf auf die Alp. Der Weg führt durch Wiesen in die Berge.",
            "Koller malt den Alpaufzug als festlichen Moment im Jahr der Bauern."
          ],
          "fact": "1881. Privatsammlung."
        }
      ]
    },
    {
      "id": "rkspaet",
      "place": "Späte Jahre am See",
      "when": "1882–1905",
      "map": {
        "x": 92,
        "y": 128
      },
      "mapLabel": "See",
      "intro": [
        "Im Alter bleibt Koller am Zürichhorn. Er malt Winterfahrten und stille Abende am Ufer.",
        "Er stirbt am 5. Januar 1905 in Zürich."
      ],
      "works": [
        {
          "pid": "rkschlitten",
          "text": [
            "Ein Pferd zieht den Schlitten durch den Schnee, der Atem dampft in der kalten Luft. Koller ist jetzt über sechzig.",
            "Auch im Winter bleibt das Pferd sein Hauptmotiv."
          ],
          "fact": "1892. Bundesamt für Kultur, Bern."
        },
        {
          "pid": "rkabend",
          "text": [
            "Der Abend legt sich über das Ufer am Zürichhorn, Tiere und Bäume werden dunkel vor dem hellen Wasser.",
            "Koller malt seinen Ort am See bis ins Alter."
          ],
          "fact": "1893. Privatsammlung."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
