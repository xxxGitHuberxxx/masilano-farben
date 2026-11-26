// v10.43 Keisai Eisen life journey (1790–1848). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "ketakanawa",
    "title": "Heimkehrende Segel bei Takanawa",
    "artist": "Keisai Eisen",
    "year": "um 1820–1829",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2885: https://www.artic.edu/artworks/23411, CC0 (gemeinfrei)"
  },
  {
    "id": "kefuji",
    "title": "Blick auf den Fuji von einem Teehaus",
    "artist": "Keisai Eisen",
    "year": "um 1820–1829",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2886: https://www.artic.edu/artworks/23414, CC0 (gemeinfrei)"
  },
  {
    "id": "kesparrows",
    "title": "Spatzen, Bambus und fallender Schnee",
    "artist": "Keisai Eisen",
    "year": "um 1827–1829",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1930.192: https://clevelandart.org/art/1930.192, CC0 (gemeinfrei)"
  },
  {
    "id": "kefishes",
    "title": "Schwimmende Fische mit gelben Blumen",
    "artist": "Keisai Eisen",
    "year": "um 1830",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, JP1148: https://www.metmuseum.org/art/collection/search/54354, CC0 (gemeinfrei)"
  },
  {
    "id": "kecarp",
    "title": "Karpfen, der einen Wasserfall hinaufsteigt",
    "artist": "Keisai Eisen",
    "year": "um 1830–1836",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1940.1049: https://clevelandart.org/art/1940.1049, CC0 (gemeinfrei)"
  },
  {
    "id": "kekoi",
    "title": "Karpfen",
    "artist": "Keisai Eisen",
    "year": "um 1842",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, JP222: https://www.metmuseum.org/art/collection/search/36696, CC0 (gemeinfrei)"
  },
  {
    "id": "keitahana",
    "title": "Nr. 15: Itahana",
    "artist": "Keisai Eisen",
    "year": "um 1835–1836",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1939.2210: https://www.artic.edu/artworks/36440, CC0 (gemeinfrei)"
  },
  {
    "id": "kehiratsuka",
    "title": "Nr. 20: Regen auf der Hiratsuka-Ebene bei Kutsukake",
    "artist": "Keisai Eisen",
    "year": "um 1835–1836",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1963.664: https://www.artic.edu/artworks/18251, CC0 (gemeinfrei)"
  },
  {
    "id": "kesuwa",
    "title": "Nr. 31: Blick vom Shiojiri-Pass auf den Suwa-See",
    "artist": "Keisai Eisen",
    "year": "um 1835–1836",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1939.2228: https://www.artic.edu/artworks/36494, CC0 (gemeinfrei)"
  },
  {
    "id": "kenojiri",
    "title": "Nr. 41: Fernblick auf die Ina-Brücke bei Nojiri",
    "artist": "Keisai Eisen",
    "year": "um 1835–1836",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1990.607.191: https://www.artic.edu/artworks/197426, CC0 (gemeinfrei)"
  },
  {
    "id": "kewarabi",
    "title": "Warabi: Fähre über den Toda-Fluss",
    "artist": "Keisai Eisen",
    "year": "um 1838",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, JP1031: https://www.metmuseum.org/art/collection/search/54951, CC0 (gemeinfrei)"
  },
  {
    "id": "ketoeizan",
    "title": "Der Tempel Tōeizan, vom Benten-Schrein am Shinobazu-Teich in Edo gesehen",
    "artist": "Keisai Eisen",
    "year": "um 1830",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1968.332: https://www.artic.edu/artworks/29482, CC0 (gemeinfrei)"
  },
  {
    "id": "kesnow",
    "title": "Schnee am Sumida-Fluss",
    "artist": "Keisai Eisen",
    "year": "um 1830–1833",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1928.1122: https://www.artic.edu/artworks/89593, CC0 (gemeinfrei)"
  },
  {
    "id": "kesnowdist",
    "title": "Fernblick auf Schnee am Sumida-Fluss in Edo",
    "artist": "Keisai Eisen",
    "year": "um 1840–1844",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1970.504: https://www.artic.edu/artworks/109406, CC0 (gemeinfrei)"
  },
  {
    "id": "kenihonbashi",
    "title": "Aufklarendes Wetter bei Nihonbashi",
    "artist": "Keisai Eisen",
    "year": "1843–1847",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, JP1283: https://www.metmuseum.org/art/collection/search/55222, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "eisen",
  "name": "Keisai Eisen",
  "title": "Keisai Eisens Lebensweg",
  "life": "1790–1848",
  "part": "Strassen und Flüsse",
  "subtitle": "Von Edo über den Kisokaidō",
  "cover": "kesuwa",
  "intro": "Reise mit dem japanischen Holzschnittkünstler Keisai Eisen: zu Neujahrsblättern mit Gedichten, zu Fischen und Vögeln, über die Bergstrasse Kisokaidō und an den verschneiten Sumida-Fluss in Edo. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Keisai Eisen stirbt 1848.",
    "Seine Holzschnitte werden heute in Museen auf der ganzen Welt aufbewahrt."
  ],
  "epilogue": "Keisai Eisen stirbt 1848. Der Weg führt von Neujahrsblättern mit Gedichten über Fische und Vögel zu den Stationen des Kisokaidō und zurück nach Edo.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M168,8 C182,4 196,10 200,20 C196,30 184,34 174,30 C166,26 162,14 168,8 Z",
      "M170,40 C176,48 174,60 166,70 C160,80 156,86 150,90 C140,96 128,100 116,104 C104,108 92,112 84,110 C80,104 90,98 100,94 C112,90 122,84 132,78 C142,72 150,62 156,52 C160,44 164,38 170,40 Z",
      "M96,114 C104,112 112,114 114,118 C110,124 100,124 94,120 C92,118 92,116 96,114 Z",
      "M70,112 C78,110 84,116 82,126 C80,136 72,140 66,134 C62,126 64,116 70,112 Z"
    ]
  },
  "stations": [
    {
      "id": "kes1",
      "place": "Neujahrsgrüsse mit Gedichten",
      "when": "1820–1829",
      "map": {
        "x": 150,
        "y": 82
      },
      "mapLabel": "Japan",
      "intro": [
        "Keisai Eisen lebt von 1790 bis 1848; er ist der Sohn eines Malers der Kanō-Schule und schreibt auch Gedichte.",
        "Surimono sind privat bestellte Holzschnitte, oft Neujahrsgrüsse von Dichtergruppen, mit Gedichten und besonders feinen Farben."
      ],
      "works": [
        {
          "pid": "ketakanawa",
          "text": [
            "Segelboote kehren über die weite Bucht zurück, und am Strand sind Menschen unterwegs.",
            "Oben stehen mehrere Gedichte, und das Blatt ist mit „Keisai“ signiert."
          ],
          "fact": "um 1820–1829. Art Institute of Chicago."
        },
        {
          "pid": "kefuji",
          "text": [
            "Gäste ruhen am Ufer unter einem blühenden Baum, und in der Ferne erhebt sich der schneebedeckte Fuji.",
            "Für den Druck wurden auch Metallfarben verwendet, und er ist mit „Keisai ga“, von Keisai gemalt, signiert."
          ],
          "fact": "um 1820–1829. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "kes2",
      "place": "Fische, Vögel und Blumen",
      "when": "1827–1842",
      "map": {
        "x": 146,
        "y": 88
      },
      "mapLabel": "Japan",
      "intro": [
        "Neben Landschaften entwirft Eisen Blätter mit Fischen, Vögeln und Pflanzen.",
        "Oft füllen die Tiere fast das ganze Blatt vor einem schlichten Grund."
      ],
      "works": [
        {
          "pid": "kesparrows",
          "text": [
            "Zwei Spatzen fliegen zwischen schlanken Bambusstängeln, während feine Schneeflocken fallen.",
            "Das Cleveland Museum of Art datiert den Farbholzschnitt in die späten 1820er Jahre."
          ],
          "fact": "um 1827–1829. Cleveland Museum of Art."
        },
        {
          "pid": "kefishes",
          "text": [
            "Drei silbrige Fische schwimmen an einer Pflanze mit leuchtend gelben Blüten vorbei.",
            "Das Blatt ist ein Surimono mit Gedicht und kam 1919 ins Metropolitan Museum."
          ],
          "fact": "um 1830. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "kecarp",
          "text": [
            "Im hohen, schmalen Bild windet sich ein Karpfen einen blauen Wasserfall hinauf.",
            "In Asien steht der Karpfen für Glück und Ausdauer, darum zeigt man ihn in Japan oft, wie er Wasserfälle hinaufsteigt."
          ],
          "fact": "um 1830–1836. Cleveland Museum of Art."
        },
        {
          "pid": "kekoi",
          "text": [
            "Ein grosser dunkler Karpfen schwimmt durch blaues Wasser mit hellen Wellenlinien.",
            "Das Metropolitan Museum datiert den Holzschnitt um 1842 und erwarb ihn 1917."
          ],
          "fact": "um 1842. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "kes3",
      "place": "Die Stationen des Kisokaidō",
      "when": "1835–1838",
      "map": {
        "x": 136,
        "y": 72
      },
      "mapLabel": "Kisokaidō",
      "intro": [
        "Um 1835 beginnt Eisen eine Holzschnittreihe über die Poststationen des Kisokaidō, der Strasse durch das Binnenland zwischen Edo und Kyoto.",
        "Utagawa Hiroshige vollendet die Reihe später."
      ],
      "works": [
        {
          "pid": "keitahana",
          "text": [
            "Reisende ziehen an tief verschneiten Bäumen vorbei über einen Weg am Fluss.",
            "Itahana ist die 15. Station der Reihe über die neunundsechzig Stationen des Kisokaidō."
          ],
          "fact": "um 1835–1836. Art Institute of Chicago."
        },
        {
          "pid": "kehiratsuka",
          "text": [
            "Reisende mit Packpferden kämpfen sich durch schräg fallenden Regen und Wind.",
            "Die Station Kutsukake trägt in der Kisokaidō-Reihe die Nummer 20."
          ],
          "fact": "um 1835–1836. Art Institute of Chicago."
        },
        {
          "pid": "kesuwa",
          "text": [
            "Reisende steigen einen grünen Hang hinauf, unter ihnen liegt der weite See, und in der Ferne steht ein schneebedeckter Gipfel.",
            "Der Blick vom Pass auf den Suwa-See ist Nummer 31 der Kisokaidō-Reihe."
          ],
          "fact": "um 1835–1836. Art Institute of Chicago."
        },
        {
          "pid": "kenojiri",
          "text": [
            "Reisende gehen über eine Brücke hoch über einem Fluss zwischen steilen, grünen Bergen.",
            "Oben links zeichnet sich die Kannon-Halle eines Tempels als Silhouette ab."
          ],
          "fact": "um 1835–1836. Art Institute of Chicago."
        },
        {
          "pid": "kewarabi",
          "text": [
            "Eine voll besetzte Fähre bringt Reisende über den blauen Fluss, am Ufer stehen Bäume und Häuser.",
            "Bei der Station Warabi setzen die Reisenden mit der Fähre über den Toda-Fluss."
          ],
          "fact": "um 1838. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "kes4",
      "place": "Ansichten von Edo",
      "when": "1830–1847",
      "map": {
        "x": 152,
        "y": 78
      },
      "mapLabel": "Edo",
      "intro": [
        "In Edo, dem heutigen Tokio, zeichnet Eisen Tempel, verschneite Flussufer und belebte Brücken.",
        "Um 1830 gibt er einer Reihe berühmter Orte in Edo Rahmen aus westlichen Buchstaben."
      ],
      "works": [
        {
          "pid": "ketoeizan",
          "text": [
            "Über einen hellgrünen Teich mit einem kleinen Boot geht der Blick zu Bäumen und Dächern am Ufer.",
            "Das Blatt gehört zu einer Reihe berühmter Orte in Edo mit Rahmen aus westlichen Buchstaben."
          ],
          "fact": "um 1830. Art Institute of Chicago."
        },
        {
          "pid": "kesnow",
          "text": [
            "Schnee bedeckt Dächer und Bäume am Ufer, und auf dem blauen Fluss treibt ein kleines Boot.",
            "Das Art Institute of Chicago datiert das Blatt in die frühen 1830er Jahre."
          ],
          "fact": "um 1830–1833. Art Institute of Chicago."
        },
        {
          "pid": "kesnowdist",
          "text": [
            "Ein Boot mit Fahrgästen gleitet über den blauen Fluss, die Ufer sind tief verschneit.",
            "Das Cleveland Museum of Art besitzt einen weiteren Abzug dieses Motivs."
          ],
          "fact": "um 1840–1844. Art Institute of Chicago."
        },
        {
          "pid": "kenihonbashi",
          "text": [
            "Auf der Nihonbashi-Brücke drängen sich viele Menschen, und dahinter erhebt sich der Fuji über der Stadt.",
            "Das Blatt gehört zur Reihe „Acht Ansichten von Edo“."
          ],
          "fact": "1843–1847. Metropolitan Museum of Art, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
