// v10.43 Albert Bierstadt life journey (1830–1902). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "ablucerne",
    "title": "Der Vierwaldstättersee",
    "artist": "Albert Bierstadt",
    "year": "1858",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1990.50.1: https://www.nga.gov/collection/art-object-page.71503.html, CC0 (gemeinfrei)"
  },
  {
    "id": "abbrook",
    "title": "Bergbach",
    "artist": "Albert Bierstadt",
    "year": "1863",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1997.365: https://www.artic.edu/artworks/146701, CC0 (gemeinfrei)"
  },
  {
    "id": "abmerced",
    "title": "Der Merced River im Yosemite-Tal",
    "artist": "Albert Bierstadt",
    "year": "1866",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 09.214.1: https://www.metmuseum.org/art/collection/search/10150, CC0 (gemeinfrei)"
  },
  {
    "id": "abstarrking",
    "title": "Mount Starr King, Yosemite",
    "artist": "Albert Bierstadt",
    "year": "1866",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1922.684: https://clevelandart.org/art/1922.684, CC0 (gemeinfrei)"
  },
  {
    "id": "abvesuvius",
    "title": "Der Vesuv um Mitternacht",
    "artist": "Albert Bierstadt",
    "year": "1868",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1949.541: https://clevelandart.org/art/1949.541, CC0 (gemeinfrei)"
  },
  {
    "id": "absierra",
    "title": "In der Sierra Nevada, Kalifornien",
    "artist": "Albert Bierstadt",
    "year": "1868",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1977.107.1: https://americanart.si.edu/collections/search/artwork/?id=2059, CC0 (gemeinfrei)"
  },
  {
    "id": "abfirtrees",
    "title": "Tannen und Gewitterwolken",
    "artist": "Albert Bierstadt",
    "year": "um 1870",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1982.37: https://clevelandart.org/art/1982.37, CC0 (gemeinfrei)"
  },
  {
    "id": "absfbay",
    "title": "Die Bucht von San Francisco",
    "artist": "Albert Bierstadt",
    "year": "1871–1873",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1979.98.440: https://americanart.si.edu/collections/search/artwork/?id=2060, CC0 (gemeinfrei)"
  },
  {
    "id": "abcathedral",
    "title": "Cathedral Rocks, Yosemite-Tal",
    "artist": "Albert Bierstadt",
    "year": "um 1872",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 2006.1.2: https://americanart.si.edu/collections/search/artwork/?id=75433, CC0 (gemeinfrei)"
  },
  {
    "id": "abnevada",
    "title": "Nevada Fall, Yosemite",
    "artist": "Albert Bierstadt",
    "year": "1872–1873",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1979.490.3: https://www.metmuseum.org/art/collection/search/10152, CC0 (gemeinfrei)"
  },
  {
    "id": "abcorcoran",
    "title": "Mount Corcoran",
    "artist": "Albert Bierstadt",
    "year": "um 1876–1877",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.79.4: https://www.nga.gov/collection/art-object-page.166428.html, CC0 (gemeinfrei)"
  },
  {
    "id": "abgates",
    "title": "Das Tor zum Yosemite",
    "artist": "Albert Bierstadt",
    "year": "um 1882",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 2006.1.1: https://americanart.si.edu/collections/search/artwork/?id=75432, CC0 (gemeinfrei)"
  },
  {
    "id": "abmountain",
    "title": "Berglandschaft",
    "artist": "Albert Bierstadt",
    "year": "1880–1890",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1979.490.2: https://www.metmuseum.org/art/collection/search/10151, CC0 (gemeinfrei)"
  },
  {
    "id": "abseacove",
    "title": "Meeresbucht",
    "artist": "Albert Bierstadt",
    "year": "um 1880–1890",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1979.490.4: https://www.metmuseum.org/art/collection/search/10155, CC0 (gemeinfrei)"
  },
  {
    "id": "ablouise",
    "title": "Kanadische Rocky Mountains (Lake Louise)",
    "artist": "Albert Bierstadt",
    "year": "um 1889",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1982.119.1: https://www.metmuseum.org/art/collection/search/10149, CC0 (gemeinfrei)"
  },
  {
    "id": "abalaska",
    "title": "Küstengebirge in Alaska",
    "artist": "Albert Bierstadt",
    "year": "um 1889",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1967.136.7: https://americanart.si.edu/collections/search/artwork/?id=2058, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "bierstadt",
  "name": "Albert Bierstadt",
  "title": "Albert Bierstadts Lebensweg",
  "life": "1830–1902",
  "part": "Berge, Seen und Wasserfälle",
  "subtitle": "Von Neuengland nach Yosemite, Europa und Kanada",
  "cover": "abmerced",
  "intro": "Reise mit Albert Bierstadt durch sein Leben: von den Wäldern Neuenglands ins Yosemite-Tal, nach Europa und bis in die Berge Kanadas. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Albert Bierstadt stirbt am 18. Februar 1902 in New York.",
    "Seine grossen Bilder der Berge im Westen machen diese Landschaften vielen Menschen bekannt, die sie nie selbst gesehen haben."
  ],
  "epilogue": "Albert Bierstadt stirbt am 18. Februar 1902 in New York. Der Weg führt von Neuengland über Yosemite und Europa bis nach Kanada und Alaska.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,30 C40,16 82,14 94,28 C98,42 80,54 72,64 C66,72 72,84 68,96 C64,112 58,130 50,150 C42,130 38,112 42,96 C38,84 28,74 22,60 C16,48 12,38 18,30 Z",
      "M150,30 C170,20 200,22 214,34 C224,46 220,62 216,76 C208,82 196,74 186,68 C176,64 162,60 154,52 C146,44 144,36 150,30 Z"
    ]
  },
  "stations": [
    {
      "id": "abs1",
      "place": "Von Solingen nach Neuengland",
      "when": "1830–1863",
      "map": {
        "x": 72,
        "y": 44
      },
      "mapLabel": "New Bedford",
      "intro": [
        "Albert Bierstadt wird am 7. Januar 1830 in Solingen geboren, 1831 wandert die Familie nach New Bedford in Massachusetts aus.",
        "Von 1853 bis 1857 lernt er in Düsseldorf malen und stellt 1858 in New York eine grosse Schweizer Landschaft aus."
      ],
      "works": [
        {
          "pid": "ablucerne",
          "text": [
            "Hinter Bäumen und Wiesen liegt der blaue See, darüber erheben sich schneebedeckte Berge.",
            "Bierstadt malt das Bild nach seiner Studienzeit in Düsseldorf."
          ],
          "fact": "1858. National Gallery of Art, Washington."
        },
        {
          "pid": "abbrook",
          "text": [
            "Ein kleiner Bach fällt zwischen moosigen Felsen durch einen dichten Wald.",
            "Das Bild zeigt die White Mountains in New Hampshire, und Kritiker nennen es 1863 sein bestes Werk."
          ],
          "fact": "1863. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "abs2",
      "place": "Reisen in den Westen",
      "when": "1859–1866",
      "map": {
        "x": 34,
        "y": 48
      },
      "mapLabel": "Yosemite",
      "intro": [
        "1859 reist Bierstadt mit dem Landvermesser Frederick W. Lander in die Rocky Mountains.",
        "1863 verbringt er mit dem Schriftsteller Fitz Hugh Ludlow sieben Wochen im Yosemite-Tal und malt danach in New York grosse Bilder nach seinen Skizzen."
      ],
      "works": [
        {
          "pid": "abmerced",
          "text": [
            "Hohe Granitwände ragen über dem ruhigen Merced River im Yosemite-Tal auf.",
            "Im Vordergrund stehen Kiefern im warmen Licht."
          ],
          "fact": "1866. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "abstarrking",
          "text": [
            "In der Ferne erhebt sich der Granitgipfel des Mount Starr King über dem Yosemite-Tal.",
            "1864 unterzeichnet Präsident Lincoln ein Gesetz, das Yosemite unter Schutz stellt."
          ],
          "fact": "1866. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "abs3",
      "place": "Zwei Jahre in Europa",
      "when": "1867–1869",
      "map": {
        "x": 180,
        "y": 54
      },
      "mapLabel": "Rom",
      "intro": [
        "1867 reist Bierstadt nach London und zieht danach zwei Jahre lang durch Europa.",
        "In seinem Atelier in Rom malt er ein grosses Bild der Sierra Nevada und zeigt es in Berlin und London."
      ],
      "works": [
        {
          "pid": "abvesuvius",
          "text": [
            "Rote Lava und Asche quellen in der Nacht aus dem Vesuv bei Neapel.",
            "Ob Bierstadt den Ausbruch selbst gesehen hat, ist nicht sicher."
          ],
          "fact": "1868. Cleveland Museum of Art."
        },
        {
          "pid": "absierra",
          "text": [
            "Steile Felswände und ein Wasserfall umgeben einen stillen Bergsee in der Sierra Nevada.",
            "Das Bild ist rund drei Meter breit."
          ],
          "fact": "1868. Smithsonian American Art Museum, Washington."
        }
      ]
    },
    {
      "id": "abs4",
      "place": "Wieder in Kalifornien",
      "when": "1870–1873",
      "map": {
        "x": 28,
        "y": 52
      },
      "mapLabel": "San Francisco",
      "intro": [
        "Anfang der 1870er-Jahre ist Bierstadt wieder in Kalifornien.",
        "Er malt die Bucht von San Francisco, die Wasserfälle und Felsen des Yosemite-Tals und Studien von Wolken und Bäumen."
      ],
      "works": [
        {
          "pid": "abfirtrees",
          "text": [
            "Dunkle Tannen stehen unter hoch aufgetürmten Gewitterwolken.",
            "Bierstadt malt die Studie in Öl auf Papier."
          ],
          "fact": "um 1870. Cleveland Museum of Art."
        },
        {
          "pid": "absfbay",
          "text": [
            "Ruhiges graues Wasser liegt vor einem flachen Ufer an der Bucht von San Francisco.",
            "Bierstadt malt die kleine Ölskizze auf Karton."
          ],
          "fact": "1871–1873. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "abcathedral",
          "text": [
            "Hinter hohen Tannen ragen die Felsen der Cathedral Rocks im Yosemite-Tal auf.",
            "Vorne spiegeln sich die Bäume im Fluss."
          ],
          "fact": "um 1872. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "abnevada",
          "text": [
            "Der Nevada Fall stürzt schäumend zwischen dunklen Tannen ins Tal.",
            "Unten am Ufer sind zwei kleine Gestalten zu sehen."
          ],
          "fact": "1872–1873. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "abs5",
      "place": "Späte Reisen: Kanada und Alaska",
      "when": "1876–1902",
      "map": {
        "x": 30,
        "y": 30
      },
      "mapLabel": "Kanada",
      "intro": [
        "Bierstadt malt weiter Berge, Seen und Küsten, oft als kleine Ölskizzen.",
        "1889 fährt er mit der Canadian Pacific Railway durch den Westen Kanadas und reist mit dem Dampfer weiter nach Alaska."
      ],
      "works": [
        {
          "pid": "abcorcoran",
          "text": [
            "Ein grüner Bergsee liegt zwischen hohen Bäumen unter einem schneebedeckten Gipfel.",
            "Über dem Gipfel ziehen Wolken."
          ],
          "fact": "um 1876–1877. National Gallery of Art, Washington."
        },
        {
          "pid": "abgates",
          "text": [
            "Mächtige Felswände bilden am Eingang des Yosemite-Tals ein natürliches Tor.",
            "Dazwischen fliesst ruhig der Fluss."
          ],
          "fact": "um 1882. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "abmountain",
          "text": [
            "Ein See mit kleinen bewaldeten Inseln liegt vor schneebedeckten Gipfeln.",
            "Bierstadt malt die Skizze in Öl auf Papier."
          ],
          "fact": "1880–1890. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "abseacove",
          "text": [
            "Zwei windschiefe Bäume stehen auf einer Klippe über einer kleinen Bucht mit hellem Sand.",
            "Bierstadt malt das kleine Bild auf Holz."
          ],
          "fact": "um 1880–1890. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "ablouise",
          "text": [
            "Ein Bergsee liegt zwischen Tannen am Fuss eines vergletscherten Gipfels.",
            "Der Lake Louise liegt in den Rocky Mountains im Westen Kanadas."
          ],
          "fact": "um 1889. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "abalaska",
          "text": [
            "Graue Berge mit Schnee erheben sich über einem stillen Meeresarm.",
            "Die Ölskizze entsteht wohl an Ort und Stelle auf seiner Reise nach Alaska."
          ],
          "fact": "um 1889. Smithsonian American Art Museum, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
