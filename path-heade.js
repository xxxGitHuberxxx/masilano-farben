// v10.43 Martin Johnson Heade life journey (1819–1904). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "mhthunder",
    "title": "Herannahendes Gewitter",
    "artist": "Martin Johnson Heade",
    "year": "1859",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 1975.160: https://www.metmuseum.org/art/collection/search/11050, CC0 (gemeinfrei)"
  },
  {
    "id": "mhwineglass",
    "title": "Stillleben mit Weinglas",
    "artist": "Martin Johnson Heade",
    "year": "1860",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2025.89.7: https://www.nga.gov/collection/art-object-page.126147.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mhroses",
    "title": "Rosen und Heliotrop in einer Vase auf einer Marmorplatte",
    "artist": "Martin Johnson Heade",
    "year": "1862",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2025.89.9: https://www.nga.gov/collection/art-object-page.126149.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mhrio",
    "title": "Die Bucht von Rio de Janeiro",
    "artist": "Martin Johnson Heade",
    "year": "1864",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1965.2.1: https://www.nga.gov/collection/art-object-page.50281.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mhcattleya",
    "title": "Cattleya-Orchidee und drei Kolibris",
    "artist": "Martin Johnson Heade",
    "year": "1871",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1982.73.1: https://www.nga.gov/collection/art-object-page.61244.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mhorchid",
    "title": "Orchideenblüten",
    "artist": "Martin Johnson Heade",
    "year": "1873",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1915.461: https://clevelandart.org/art/1915.461, CC0 (gemeinfrei)"
  },
  {
    "id": "mhjudith",
    "title": "Point Judith, Rhode Island",
    "artist": "Martin Johnson Heade",
    "year": "1867–1868",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1970.161: https://clevelandart.org/art/1970.161, CC0 (gemeinfrei)"
  },
  {
    "id": "mhyork",
    "title": "York Harbor an der Küste von Maine",
    "artist": "Martin Johnson Heade",
    "year": "1877",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1999.291: https://www.artic.edu/artworks/152747, CC0 (gemeinfrei)"
  },
  {
    "id": "mhapplevase",
    "title": "Apfelblüten in einer Vase",
    "artist": "Martin Johnson Heade",
    "year": "1867",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2025.89.6: https://www.nga.gov/collection/art-object-page.126146.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mhapple",
    "title": "Apfelblüten",
    "artist": "Martin Johnson Heade",
    "year": "1873",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1915.687: https://clevelandart.org/art/1915.687, CC0 (gemeinfrei)"
  },
  {
    "id": "mhhumapple",
    "title": "Kolibri und Apfelblüten",
    "artist": "Martin Johnson Heade",
    "year": "1875",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 1979.490.11: https://www.metmuseum.org/art/collection/search/11051, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "heade",
  "name": "Martin Johnson Heade",
  "title": "Martin Johnson Heades Lebensweg",
  "life": "1819–1904",
  "part": "New York, Brasilien, Neuengland",
  "subtitle": "Gewitter, Orchideen und Apfelblüten",
  "cover": "mhcattleya",
  "intro": "Reise mit Martin Johnson Heade durch sein Leben: von seinem Atelier in New York zu den Kolibris und Orchideen Brasiliens, an die Küsten Neuenglands und zu seinen Blumenbildern. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "1883 lässt sich Heade in St. Augustine in Florida nieder; dort stellt ihm Henry Flagler später ein Atelier im Hotel Ponce de Leon zur Verfügung.",
    "Martin Johnson Heade stirbt 1904 in St. Augustine."
  ],
  "epilogue": "Martin Johnson Heade stirbt 1904. Der Weg führt von New York nach Brasilien, an die Küsten Neuenglands und zu seinen Apfelblüten.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,30 C40,16 82,14 94,28 C98,42 80,54 72,64 C66,72 72,84 68,96 C64,112 58,130 50,150 C42,130 38,112 42,96 C38,84 28,74 22,60 C16,48 12,38 18,30 Z",
      "M150,30 C170,20 200,22 214,34 C224,46 220,62 216,76 C208,82 196,74 186,68 C176,64 162,60 154,52 C146,44 144,36 150,30 Z"
    ]
  },
  "stations": [
    {
      "id": "mhs1",
      "place": "Ein Atelier in New York",
      "when": "1859–1862",
      "map": {
        "x": 74,
        "y": 46
      },
      "mapLabel": "New York",
      "intro": [
        "Martin Johnson Heade wird 1819 in Lumberville in Pennsylvania geboren; seine ersten Malstunden erhält er bei seinem Nachbarn, dem Maler Edward Hicks.",
        "1859 hat er sich in New York niedergelassen und ein Atelier im Tenth Street Studio Building bezogen, wo er sich mit Frederic Edwin Church anfreundet."
      ],
      "works": [
        {
          "pid": "mhthunder",
          "text": [
            "Unter einem fast schwarzen Gewitterhimmel liegt das Wasser dunkel und still, nur ein weisses Segel leuchtet in der Ferne.",
            "Am Ufer sitzt ein Mann in rotem Hemd mit einem kleinen weissen Hund, links liegt ein Boot unter einem Segeltuch."
          ],
          "fact": "1859. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mhwineglass",
          "text": [
            "In einem schlanken Weinglas steht ein kleiner Strauss mit roten Rosen und blauen Blüten vor einem schlichten braunen Grund.",
            "Unten links steht die Aufschrift „M.J. Head / -60“."
          ],
          "fact": "1860. National Gallery of Art, Washington."
        },
        {
          "pid": "mhroses",
          "text": [
            "Helle Rosen und violetter Heliotrop stehen in einer weissen Vase auf einer Marmorplatte, links ragt ein Vorhang ins Bild.",
            "Unten rechts ist das Bild mit „1862/ M.J. Heade“ bezeichnet."
          ],
          "fact": "1862. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "mhs2",
      "place": "Kolibris und Orchideen",
      "when": "1864–1873",
      "map": {
        "x": 62,
        "y": 110
      },
      "mapLabel": "Brasilien und die Tropen",
      "intro": [
        "1863 reist Heade nach Brasilien, um für ein geplantes Buch, „The Gems of Brazil“, Kolibris zu malen; das Buch erscheint nie.",
        "Zwischen 1863 und 1870 reist er dreimal nach Mittel- und Südamerika und malt danach immer wieder Orchideen und Kolibris in tropischer Landschaft."
      ],
      "works": [
        {
          "pid": "mhrio",
          "text": [
            "Wellen brechen sich an dunklen Felsen, dahinter öffnet sich die Bucht unter einem goldgelben Himmel mit weissen Wolken.",
            "Unten links steht die Signatur „M. J. Heade / 1864“; früher war das Bild auch als „Brazilian Seascape“ bekannt."
          ],
          "fact": "1864. National Gallery of Art, Washington."
        },
        {
          "pid": "mhcattleya",
          "text": [
            "Eine prächtige rosa Orchidee beherrscht den Vordergrund, Moos hängt von den Bäumen, und blaugrauer Dunst verhüllt den fernen Urwald.",
            "Rechts sitzen bei einem Nest drei Kolibris: ein grüner Sappho-Komet mit leuchtend rotem Schwanz und zwei grün-rosa Amethystkolibris aus Brasilien."
          ],
          "fact": "1871. National Gallery of Art, Washington."
        },
        {
          "pid": "mhorchid",
          "text": [
            "Eine grosse weisse Orchidee mit gefranster rosa Lippe hängt an grünen Stängeln über einem dunklen, dunstigen Urwaldtal.",
            "Als Heade das Bild 1873 malt, hat er bereits drei Reisen nach Mittel- und Südamerika unternommen."
          ],
          "fact": "1873. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "mhs3",
      "place": "Mondlicht und stille Häfen",
      "when": "1867–1877",
      "map": {
        "x": 80,
        "y": 40
      },
      "mapLabel": "Rhode Island und Maine",
      "intro": [
        "Heade ist ein unruhiger Reisender und lebt zeitweise in New York, Providence, St. Louis, New Orleans und Richmond.",
        "Seine ersten Landschaften zeigen die Salzmarschen von Rhode Island, und immer wieder malt er Licht und Stimmung an den Küsten Neuenglands."
      ],
      "works": [
        {
          "pid": "mhjudith",
          "text": [
            "Es ist eines der wenigen Nachtbilder von Heade: Mondlicht glitzert auf dem Wasser und bricht durch die Wolken.",
            "Links fahren zwei Segelschiffe, die einzigen Spuren von Menschen in dieser stillen Szene."
          ],
          "fact": "1867–1868. Cleveland Museum of Art."
        },
        {
          "pid": "mhyork",
          "text": [
            "Die Sonne steht hinter dünnem Dunst über einer ruhigen Bucht, auf der einige Segelboote liegen.",
            "Das breite Querformat, der kaum sichtbare Pinselstrich und das alles durchdringende Licht gelten heute als typisch für den Luminismus."
          ],
          "fact": "1877. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "mhs4",
      "place": "Apfelblüten",
      "when": "1867–1875",
      "map": {
        "x": 72,
        "y": 48
      },
      "mapLabel": "New York",
      "intro": [
        "Heade gilt heute als einer der wenigen Maler, die Landschaften und Blumenstillleben gleichermassen meistern.",
        "Apfelblüten malt er in einer Vase, als einzelnen Zweig auf dem Tisch und unter offenem Himmel, einmal sogar mit einem Kolibri."
      ],
      "works": [
        {
          "pid": "mhapplevase",
          "text": [
            "Weiss-rosa Apfelblütenzweige ragen aus einer hellen, verzierten Vase vor einem dunklen Hintergrund.",
            "Das Bild gehörte einst Cyrus W. Field in New York und ist unten rechts mit „M.J. Heade 67“ signiert."
          ],
          "fact": "1867. National Gallery of Art, Washington."
        },
        {
          "pid": "mhapple",
          "text": [
            "Ein einzelner Zweig mit Apfelblüten ist auf eine Tischplatte gestützt und lehnt an einer schlichten Wand.",
            "Heade malt in seinem langen Leben rund 150 Blumenstillleben; dieses signiert er unten links mit „MJ Heade 1873“."
          ],
          "fact": "1873. Cleveland Museum of Art."
        },
        {
          "pid": "mhhumapple",
          "text": [
            "Ein blühender Apfelzweig zieht sich quer durch das Bild, vor einem bewölkten grauen Himmel.",
            "Unten sitzt ein kleiner grüner Kolibri auf einem Zweig."
          ],
          "fact": "1875. Metropolitan Museum of Art, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
