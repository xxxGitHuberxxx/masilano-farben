// v10.24 Olga Wisinger-Florian life journey, Part 1 (1844–1926).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "owherbst",
    "title": "Herbstwald",
    "artist": "Olga Wisinger-Florian",
    "year": "1880",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian Herbstwald 1880.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owmuehle",
    "title": "Mühle in Goisern",
    "artist": "Olga Wisinger-Florian",
    "year": "1880",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - Mill at Goisern.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owmaedchen",
    "title": "Mädchen im Garten",
    "artist": "Olga Wisinger-Florian",
    "year": "1881",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - A girl in the garden.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owfeld",
    "title": "Feldblumen",
    "artist": "Olga Wisinger-Florian",
    "year": "1884",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian Feldblumen 1884.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owhelleb",
    "title": "Christrosen",
    "artist": "Olga Wisinger-Florian",
    "year": "1885",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - Black hellebore.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owbauernhof",
    "title": "Arbeit am Bauernhof",
    "artist": "Olga Wisinger-Florian",
    "year": "1888",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - Arbeit am Bauernhof - 4554 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owvenedig",
    "title": "Der Fischmarkt in Venedig",
    "artist": "Olga Wisinger-Florian",
    "year": "1892",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - The fish market in Venice.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owkarlsbad",
    "title": "Frühstück in Karlsbad",
    "artist": "Olga Wisinger-Florian",
    "year": "1895",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - Frühstück in Karlsbad.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owmohn",
    "title": "Blühender Mohn",
    "artist": "Olga Wisinger-Florian",
    "year": "um 1895",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - Blühender Mohn - 8139 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owdorf",
    "title": "Dorfstrasse in der Sommermittagssonne",
    "artist": "Olga Wisinger-Florian",
    "year": "1899",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - A village road in the summer midday sun.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owprater",
    "title": "Praterallee im Herbst",
    "artist": "Olga Wisinger-Florian",
    "year": "1900",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - Praterallee im Herbst - 3743 - Kunsthistorisches Museum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owente",
    "title": "Ententeich",
    "artist": "Olga Wisinger-Florian",
    "year": "1900",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - Ententeich - 5094 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owweiher",
    "title": "Allee am Weiher",
    "artist": "Olga Wisinger-Florian",
    "year": "1906",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian - Allee am Weiher - 5497 - Österreichische Galerie Belvedere.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "owstrauss",
    "title": "Feldblumenstrauss",
    "artist": "Olga Wisinger-Florian",
    "year": "1906",
    "museum": "Belvedere, Wien",
    "source": "Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Olga_Wisinger-Florian_-_Feldblumenstrau%C3%9F_-_728_-_%C3%96sterreichische_Galerie_Belvedere.jpg, Public domain (gemeinfrei)"
  },
  {
    "id": "owapfel",
    "title": "Blühende Apfelbäume",
    "artist": "Olga Wisinger-Florian",
    "year": "1906",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Olga Wisinger-Florian Blühende Apfelbäume 1906.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "wisinger",
  "name": "Olga Wisinger-Florian",
  "title": "Olga Wisinger-Florians Lebensweg",
  "life": "1844–1926",
  "part": "Teil 1 · Blumen, Alleen und Gärten",
  "subtitle": "Von der Pianistin zur Malerin",
  "cover": "owmohn",
  "intro": "Reise mit Olga Wisinger-Florian, der Wiener Malerin der Blumen und Gärten: von den ersten Bildern im Salzkammergut über Mohnfelder und Prateralleen bis nach Venedig, Karlsbad und Euxinograd am Schwarzen Meer. Kurze Stationen und Bilder zum Ausmalen. Dieser erste Teil folgt ihren Farben.",
  "ending": [
    "Olga Wisinger-Florian stirbt am 27. Februar 1926 in Grafenegg in Niederösterreich. Aus der Pianistin ist eine der bekanntesten Malerinnen Österreichs geworden.",
    "Der Weg kann weiterwachsen. Weitere Blumen und Gärten können in einem späteren Teil folgen."
  ],
  "epilogue": "Am 27. Februar 1926 stirbt Wisinger-Florian in Grafenegg. Ein späterer Teil kann weitere Blumenbilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,94 C32,56 100,38 156,48 C206,58 230,94 212,122 C188,148 82,150 38,132 C16,122 10,108 18,94 Z"
    ]
  },
  "stations": [
    {
      "id": "owjung",
      "place": "Wien und Goisern · Vom Klavier zur Malerei",
      "when": "1844–1881",
      "map": {
        "x": 70,
        "y": 104
      },
      "mapLabel": "Goisern",
      "intro": [
        "Olga Florian wird am 1. November 1844 in Wien geboren. Zuerst wird sie Konzertpianistin, dann wendet sie sich der Malerei zu.",
        "Ab 1880 lernt sie bei Emil Jakob Schindler."
      ],
      "works": [
        {
          "pid": "owherbst",
          "text": [
            "Der Wald leuchtet in Gelb und Braun, das Laub liegt auf dem Weg. Es ist eines ihrer frühen Bilder.",
            "Im selben Jahr wird sie Schülerin von Emil Jakob Schindler."
          ],
          "fact": "1880. Privatsammlung."
        },
        {
          "pid": "owmuehle",
          "text": [
            "Eine Mühle steht am Bach in Goisern im Salzkammergut, Holz und Wasser glänzen. Hier malt Schindler im Sommer mit seinen Schülerinnen.",
            "Wisinger-Florian lernt, genau zu schauen und draussen zu arbeiten."
          ],
          "fact": "1880. Privatsammlung."
        },
        {
          "pid": "owmaedchen",
          "text": [
            "Ein Mädchen steht in einem blühenden Garten, umgeben von Grün und Licht. Die Figur ist klein, der Garten gross.",
            "Schon hier zeigt sich ihre Liebe zu Blumen."
          ],
          "fact": "1881. Privatsammlung."
        }
      ]
    },
    {
      "id": "owblumen",
      "place": "Blumen und Höfe",
      "when": "1884–1888",
      "map": {
        "x": 110,
        "y": 64
      },
      "mapLabel": "Blumen",
      "intro": [
        "Wisinger-Florian findet ihr Thema: Blumen, Wiesen und das Leben auf dem Land.",
        "Ihre Farben werden kräftiger und freier als bei ihrem Lehrer."
      ],
      "works": [
        {
          "pid": "owfeld",
          "text": [
            "Wiesenblumen wachsen dicht nebeneinander, Blau, Weiss und Rot mischen sich im Gras. Wisinger-Florian malt sie aus der Nähe.",
            "Blumen werden ihr grosses Thema."
          ],
          "fact": "1884. Privatsammlung."
        },
        {
          "pid": "owhelleb",
          "text": [
            "Weisse Christrosen blühen im späten Winter zwischen dunklen Blättern. Sie gehören zu den ersten Blumen des Jahres.",
            "Wisinger-Florian malt sie mit klaren, hellen Tönen."
          ],
          "fact": "1885. Privatsammlung."
        },
        {
          "pid": "owbauernhof",
          "text": [
            "Auf einem Bauernhof gehen Menschen ihrer Arbeit nach, Hühner laufen über den Hof. Das Licht ist warm.",
            "Das Bild gehört dem Belvedere in Wien."
          ],
          "fact": "1888. Belvedere, Wien."
        }
      ]
    },
    {
      "id": "owreisen",
      "place": "Reisen und Sommer",
      "when": "1892–1899",
      "map": {
        "x": 170,
        "y": 104
      },
      "mapLabel": "Venedig",
      "intro": [
        "Sie reist nach Venedig und in die Kurorte Böhmens. Zu Hause malt sie Mohnfelder und Dorfstrassen im Sommer.",
        "Ihre Bilder werden bald auch im Ausland ausgestellt."
      ],
      "works": [
        {
          "pid": "owvenedig",
          "text": [
            "Am Fischmarkt in Venedig stehen Boote, Stände und Menschen am Wasser. Die Luft flimmert im Licht.",
            "Wisinger-Florian reist gern und malt unterwegs."
          ],
          "fact": "1892. Privatsammlung."
        },
        {
          "pid": "owkarlsbad",
          "text": [
            "In Karlsbad sitzen Gäste beim Frühstück im Freien, unter Bäumen und Sonnenschirmen. Es ist ein heiterer Sommermorgen.",
            "Der Kurort ist im Sommer voller Leben."
          ],
          "fact": "1895. Privatsammlung."
        },
        {
          "pid": "owmohn",
          "text": [
            "Ein Feld voller roter Mohnblumen leuchtet unter einem hellen Himmel. Das Rot ist kräftig und frei gesetzt.",
            "Das Bild im Belvedere zeigt Wisinger-Florian auf der Höhe ihrer Kunst."
          ],
          "fact": "um 1895. Belvedere, Wien."
        },
        {
          "pid": "owdorf",
          "text": [
            "Eine Dorfstrasse liegt still in der Mittagssonne, Schatten fallen von Häusern und Bäumen. Alles scheint zu ruhen.",
            "Wisinger-Florian liebt das grelle, warme Licht des Sommers."
          ],
          "fact": "1899. Privatsammlung."
        }
      ]
    },
    {
      "id": "owpark",
      "place": "Parks und Alleen",
      "when": "1900–1906",
      "map": {
        "x": 196,
        "y": 56
      },
      "mapLabel": "Prater",
      "intro": [
        "Um 1900 malt Wisinger-Florian den Prater, Teiche und Alleen. Sie setzt sich auch für die Ausbildung von Malerinnen ein.",
        "Im Frühling und Herbst sucht sie die stärksten Farben."
      ],
      "works": [
        {
          "pid": "owprater",
          "text": [
            "Die grosse Allee im Prater leuchtet im Herbstlaub, Spaziergänger gehen unter den Bäumen. Das Gelb füllt das ganze Bild.",
            "Der Prater ist ein beliebtes Motiv der Wiener Maler."
          ],
          "fact": "1900. Belvedere, Wien."
        },
        {
          "pid": "owente",
          "text": [
            "Enten schwimmen auf einem kleinen Teich, das Ufer ist grün und blühend. Das Wasser spiegelt Bäume und Himmel.",
            "Das Bild gehört dem Belvedere in Wien."
          ],
          "fact": "1900. Belvedere, Wien."
        },
        {
          "pid": "owweiher",
          "text": [
            "Eine Baumallee führt am Weiher entlang, Licht und Schatten wechseln auf dem Weg. Das Wasser liegt ruhig daneben.",
            "Alleen und Parks malt sie immer wieder."
          ],
          "fact": "1906. Belvedere, Wien."
        }
      ]
    },
    {
      "id": "owspaet",
      "place": "Späte Blüte",
      "when": "1906–1926",
      "map": {
        "x": 130,
        "y": 132
      },
      "mapLabel": "Grafenegg",
      "intro": [
        "Mit über sechzig malt sie noch frische Sträusse und blühende Bäume. Sie stirbt am 27. Februar 1926 in Grafenegg.",
        "Ihr Werk bleibt ein Fest der Farben."
      ],
      "works": [
        {
          "pid": "owstrauss",
          "text": [
            "Ein Strauss aus Feldblumen steht frisch gepflückt auf dem Tisch. Jede Blüte hat ihre eigene Farbe.",
            "Über zwanzig Jahre nach den ersten Feldblumen kehrt sie zu diesem Motiv zurück."
          ],
          "fact": "1906. Belvedere, Wien."
        },
        {
          "pid": "owapfel",
          "text": [
            "Apfelbäume stehen in voller Blüte, das Gras darunter ist frisch und grün. Weiss und Rosa leuchten im Frühlingslicht.",
            "Wisinger-Florian ist über sechzig und malt mit leichter Hand."
          ],
          "fact": "1906. Privatsammlung."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
