// v10.23 Alexandre Calame life journey, Part 1 (1810–1864).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "acswiss",
    "title": "Schweizer Landschaft",
    "artist": "Alexandre Calame",
    "year": "um 1830",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Alexandre Calame, Swiss Landscape, c. 1830, NGA 127219.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "acpaysage",
    "title": "Gebirgslandschaft",
    "artist": "Alexandre Calame",
    "year": "1835",
    "museum": "Standort ohne Angabe",
    "source": "Wikimedia Commons: «Paysage Montagneux Alexandre Calame.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acvalais",
    "title": "Fabrik im Wallis",
    "artist": "Alexandre Calame",
    "year": "1840",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Alexandre Calame Fabrique dans le Valais.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "aceboul",
    "title": "Der Bergsturz nach dem Gewitter",
    "artist": "Alexandre Calame",
    "year": "1841",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Alexandre Calame - L'Éboulement (après l'orage) - 2015-0019 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acgrimsel",
    "title": "Die Grimselstrasse",
    "artist": "Alexandre Calame",
    "year": "um 1842",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Alexandre Calame La Route du Grimsel c1842.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acchenes",
    "title": "Eichen am Thunersee",
    "artist": "Alexandre Calame",
    "year": "1846",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Alexandre Calame Chênes, lac de Thoune 1846.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "actorrent",
    "title": "Bergbach im Gewitter",
    "artist": "Alexandre Calame",
    "year": "1848",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Alexandre Calame Torrent de montagne par orage 1848.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acrosenlaui",
    "title": "Erinnerung an Rosenlaui",
    "artist": "Alexandre Calame",
    "year": "1849",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Alexandre Calame Souvenir de Rosenlaui 1849.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acwetter",
    "title": "Das Wetterhorn",
    "artist": "Alexandre Calame",
    "year": "1850",
    "museum": "Standort ohne Angabe",
    "source": "Wikimedia Commons: «Horror und Delight-Calame-The Wetterhorn DSC2103.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acleman",
    "title": "Blick auf den Genfersee",
    "artist": "Alexandre Calame",
    "year": "1849",
    "museum": "Villa Vauban, Luxemburg",
    "source": "Wikimedia Commons: «Alexandre Calame - Lac Leman 1849.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acthun",
    "title": "Der Thunersee",
    "artist": "Alexandre Calame",
    "year": "1854",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Alexandre Calame (1810-1864) - The Lake of Thun - NG1786 - National Gallery.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acbrunnen",
    "title": "Vierwaldstättersee bei Brunnen",
    "artist": "Alexandre Calame",
    "year": "1856",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Alexandre Calame - Lac des Quatre-Cantons, vers Brunnen - 480 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acrigi",
    "title": "Hütten auf der Rigi",
    "artist": "Alexandre Calame",
    "year": "1861",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Chalets at Rigi.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "acmontreux",
    "title": "Das Ende des Genfersees bei Montreux",
    "artist": "Alexandre Calame",
    "year": "1863",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Alexandre Calame Vue de l’extrémité du lac de Genève près de Montreux 1863.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "calame",
  "name": "Alexandre Calame",
  "title": "Alexandre Calames Lebensweg",
  "life": "1810–1864",
  "part": "Teil 1 · Von Genf in die Hochalpen",
  "subtitle": "Sturm, Fels und stille Seen",
  "cover": "acthun",
  "intro": "Reise mit Alexandre Calame, dem Genfer Maler der Alpen: von den ersten Berglandschaften über Grimsel, Rosenlaui und das Wetterhorn bis zu den stillen Seen von Thun, Genf und Luzern. Kurze Stationen und Bilder zum Ausmalen. Dieser erste Teil folgt ihm durch die Schweizer Berge.",
  "ending": [
    "Alexandre Calame stirbt am 17. März 1864 in Menton, dreiundfünfzig Jahre alt. Seine Alpenbilder haben die Sicht auf die Schweizer Berge in ganz Europa geprägt.",
    "Der Weg kann weiterwachsen. Lithografien, Italienbilder und weitere Gebirge können in einem späteren Teil folgen."
  ],
  "epilogue": "Am 17. März 1864 stirbt Calame in Menton. Ein späterer Teil kann Lithografien und weitere Gebirge nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M14,96 C36,58 98,44 150,54 C200,64 230,96 212,124 C186,150 82,152 40,136 C18,126 8,112 14,96 Z"
    ]
  },
  "stations": [
    {
      "id": "acgenf",
      "place": "Vevey und Genf · Anfänge",
      "when": "1810–1839",
      "map": {
        "x": 36,
        "y": 112
      },
      "mapLabel": "Genf",
      "intro": [
        "Alexandre Calame wird am 28. Mai 1810 in Vevey geboren. In Genf arbeitet er zuerst in einer Bank und lernt dann Malerei bei François Diday.",
        "Er beginnt mit Landschaften aus der Umgebung und ersten Bergmotiven."
      ],
      "works": [
        {
          "pid": "acswiss",
          "text": [
            "Eine frühe Schweizer Landschaft mit Wasser, Felsen und Bäumen. Calame ist noch jung und lernt in Genf bei François Diday.",
            "Das Bild gehört heute der National Gallery of Art in Washington."
          ],
          "fact": "um 1830. National Gallery of Art, Washington."
        },
        {
          "pid": "acpaysage",
          "text": [
            "Berge, Wald und Wasser in einem hohen Bildformat. Calame sucht schon die Grösse der Natur.",
            "Er wird bald selbst zum bekanntesten Alpenmaler Genfs."
          ],
          "fact": "1835. Standort ohne Angabe."
        }
      ]
    },
    {
      "id": "acberg",
      "place": "In den Bergen",
      "when": "1840–1845",
      "map": {
        "x": 150,
        "y": 92
      },
      "mapLabel": "Grimsel",
      "intro": [
        "Ab 1839 erhält Calame Medaillen am Pariser Salon. Er reist ins Wallis und ins Berner Oberland.",
        "Fels, Wasser und Wetter werden zu seinen grossen Themen."
      ],
      "works": [
        {
          "pid": "acvalais",
          "text": [
            "Ein Gebäude am Wasser, umgeben von steilen Walliser Bergen. Mensch und Werk wirken klein vor der Landschaft.",
            "Calame reist jetzt regelmässig in die Alpen, um zu skizzieren."
          ],
          "fact": "1840. Privatsammlung."
        },
        {
          "pid": "aceboul",
          "text": [
            "Nach einem Gewitter liegen Felsen und Bäume am Hang. Der Himmel klärt sich langsam auf.",
            "Calame zeigt die Kraft der Natur, ohne den Menschen ins Bild zu stellen."
          ],
          "fact": "1841. Kunsthaus Zürich."
        },
        {
          "pid": "acgrimsel",
          "text": [
            "Ein schmaler Weg führt über Fels und Wasser zum Grimselpass. Die Berge stehen kahl und mächtig.",
            "Die Grimsel gehört zu Calames liebsten Motiven im Berner Oberland."
          ],
          "fact": "um 1842. Privatsammlung."
        }
      ]
    },
    {
      "id": "acsturm",
      "place": "Sturm und Gipfel",
      "when": "1846–1850",
      "map": {
        "x": 176,
        "y": 74
      },
      "mapLabel": "Oberland",
      "intro": [
        "Um 1846 bis 1850 entstehen Calames dramatische Bergbilder. Gewitter, Bäche und steile Gipfel bestimmen die Bilder.",
        "Viele seiner Schüler und Käufer kommen aus ganz Europa nach Genf."
      ],
      "works": [
        {
          "pid": "acchenes",
          "text": [
            "Grosse Eichen stehen am Ufer, dahinter liegt der Thunersee mit den Bergen. Der Baum wird zur Hauptfigur.",
            "Calame verbindet die Nähe des Waldes mit der Weite der Alpen."
          ],
          "fact": "1846. Privatsammlung."
        },
        {
          "pid": "actorrent",
          "text": [
            "Ein Bergbach stürzt zwischen Bäumen hinab, der Wind biegt die Äste. Das Gewitter ist ganz nah.",
            "Solche Sturmbilder machen Calame in Paris und in ganz Europa bekannt."
          ],
          "fact": "1848. Privatsammlung."
        },
        {
          "pid": "acrosenlaui",
          "text": [
            "Im Rosenlauital stehen Tannen vor hellen Gipfeln und Gletschern. Calame hat den Ort oft besucht.",
            "Das Bild entsteht im Atelier aus Skizzen und Erinnerung."
          ],
          "fact": "1849. Privatsammlung."
        },
        {
          "pid": "acwetter",
          "text": [
            "Das Wetterhorn steigt steil über dem Tal auf, Wolken ziehen um den Gipfel. Davor stehen dunkle Tannen.",
            "Der Berg bei Grindelwald gehört zu den grossen Motiven der Schweizer Malerei."
          ],
          "fact": "1850. Standort ohne Angabe."
        }
      ]
    },
    {
      "id": "acseen",
      "place": "Die Seen",
      "when": "1849–1856",
      "map": {
        "x": 110,
        "y": 118
      },
      "mapLabel": "Seen",
      "intro": [
        "Neben den Gipfeln malt Calame die grossen Schweizer Seen: Genf, Thun und Luzern.",
        "Hier wird seine Malerei heller, stiller und weiter."
      ],
      "works": [
        {
          "pid": "acleman",
          "text": [
            "Der Genfersee liegt ruhig unter einem hellen Himmel. Nach den Stürmen der Berge zeigt Calame hier Stille.",
            "Genf und sein See bleiben sein Zuhause."
          ],
          "fact": "1849. Villa Vauban, Luxemburg."
        },
        {
          "pid": "acthun",
          "text": [
            "Der Thunersee glänzt im Licht, die Berge stehen klar am Horizont. Das Bild gehört der National Gallery in London.",
            "In den 1850er Jahren werden Calames Seebilder heller und ruhiger."
          ],
          "fact": "1854. National Gallery, London."
        },
        {
          "pid": "acbrunnen",
          "text": [
            "Steile Ufer und klares Wasser am Vierwaldstättersee bei Brunnen. Das Licht wirkt kühl und frisch.",
            "Der See im Herzen der Schweiz ist für Calame ein wichtiges Motiv."
          ],
          "fact": "1856. Kunsthaus Zürich."
        }
      ]
    },
    {
      "id": "acspaet",
      "place": "Späte Jahre",
      "when": "1857–1864",
      "map": {
        "x": 66,
        "y": 124
      },
      "mapLabel": "Montreux",
      "intro": [
        "In den letzten Jahren ist Calame oft krank. Er malt weiter Berge und Seen, ruhiger als früher.",
        "Er stirbt 1864 in Menton an der französischen Riviera."
      ],
      "works": [
        {
          "pid": "acrigi",
          "text": [
            "Einfache Holzhütten stehen hoch auf der Rigi, dahinter öffnet sich die Bergwelt. Das Bild gehört der National Gallery in London.",
            "In seinen letzten Jahren malt Calame die Alpen ruhiger und näher."
          ],
          "fact": "1861. National Gallery, London."
        },
        {
          "pid": "acmontreux",
          "text": [
            "Am oberen Ende des Genfersees ragen die Berge über Montreux auf. Das Wasser ist still und weit.",
            "Es ist eines der letzten Bilder vor Calames Tod im folgenden Jahr."
          ],
          "fact": "1863. Privatsammlung."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
