// v10.43 Diego Velázquez life journey (1599–1660). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "vzkitchen",
    "title": "Küchenszene",
    "artist": "Diego Velázquez",
    "year": "1618–1620",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1935.380: https://www.artic.edu/artworks/21934, CC0 (gemeinfrei)"
  },
  {
    "id": "vzemmaus",
    "title": "Das Abendmahl in Emmaus",
    "artist": "Diego Velázquez",
    "year": "1622–1623",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 14.40.631: https://www.metmuseum.org/art/collection/search/437871, CC0 (gemeinfrei)"
  },
  {
    "id": "vzphilip",
    "title": "Philipp IV., König von Spanien",
    "artist": "Diego Velázquez",
    "year": "1624",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 14.40.639: https://www.metmuseum.org/art/collection/search/437873, CC0 (gemeinfrei)"
  },
  {
    "id": "vzcalabazas",
    "title": "Bildnis des Hofnarren Calabazas",
    "artist": "Diego Velázquez",
    "year": "um 1631–1632",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1965.15: https://clevelandart.org/art/1965.15, CC0 (gemeinfrei)"
  },
  {
    "id": "vzselfman",
    "title": "Bildnis eines Mannes, vielleicht ein Selbstbildnis",
    "artist": "Diego Velázquez",
    "year": "um 1635",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 49.7.42: https://www.metmuseum.org/art/collection/search/437874, CC0 (gemeinfrei)"
  },
  {
    "id": "vzpareja",
    "title": "Juan de Pareja",
    "artist": "Diego Velázquez",
    "year": "1650",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1971.86: https://www.metmuseum.org/art/collection/search/437869, CC0 (gemeinfrei)"
  },
  {
    "id": "vzteresa",
    "title": "María Teresa, Infantin von Spanien",
    "artist": "Diego Velázquez",
    "year": "1651–1654",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 49.7.43: https://www.metmuseum.org/art/collection/search/437870, CC0 (gemeinfrei)"
  },
  {
    "id": "meninas",
    "title": "Las Meninas",
    "artist": "Diego Velázquez",
    "year": "1656",
    "museum": "Museo del Prado, Madrid",
    "source": "Wikimedia Commons: «Las Meninas, by Diego Velázquez, from Prado in Google Earth.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "velazquez",
  "name": "Diego Velázquez",
  "title": "Diego Velázquez’ Lebensweg",
  "life": "1599–1660",
  "part": "Von Sevilla an den Hof in Madrid",
  "subtitle": "Küchenbild, König und Hof",
  "cover": "vzpareja",
  "intro": "Reise mit Diego Velázquez durch sein Leben: von den Küchenbildern in Sevilla über den Königshof in Madrid und Rom bis zu «Las Meninas». Dieser Weg ist kürzer als andere, denn nur wenige Bilder von Velázquez sind als freie Museumsaufnahmen verfügbar. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Diego Velázquez stirbt am 6. August 1660 in Madrid.",
    "Fast vierzig Jahre lang malt er den König und seinen Hof."
  ],
  "epilogue": "Diego Velázquez stirbt am 6. August 1660 in Madrid. Der Weg führt von den Küchenbildern in Sevilla über den Königshof und Rom bis zu «Las Meninas».",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,56 C40,44 92,42 112,54 C122,66 118,92 110,112 C100,132 78,142 54,140 C34,138 20,124 16,106 C12,88 10,68 18,56 Z",
      "M150,24 C162,18 180,20 186,30 C190,44 198,62 210,78 C220,92 222,106 214,112 C204,114 194,104 186,94 C176,80 166,66 158,52 C150,42 144,32 150,24 Z"
    ]
  },
  "stations": [
    {
      "id": "vzs1",
      "place": "Sevilla: Lehrjahre",
      "when": "1599–1622",
      "map": {
        "x": 44,
        "y": 118
      },
      "mapLabel": "Sevilla",
      "intro": [
        "Diego Velázquez wird im Juni 1599 in Sevilla getauft.",
        "Er lernt bei dem Maler Francisco Pacheco und malt Küchenbilder mit einfachen Menschen und Dingen des Alltags."
      ],
      "works": [
        {
          "pid": "vzkitchen",
          "text": [
            "Eine Küchenmagd mit weissem Tuch auf dem Kopf steht hinter einem Tisch mit Krügen und Schüsseln.",
            "Das Metall der Gefässe glänzt im Licht vor dem dunklen Grund."
          ],
          "fact": "1618–1620. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "vzs2",
      "place": "Maler des Königs",
      "when": "1622–1629",
      "map": {
        "x": 70,
        "y": 74
      },
      "mapLabel": "Madrid",
      "intro": [
        "1623 wird Velázquez in Madrid Maler von König Philipp IV.",
        "Von nun an malt er vor allem den König und seine Familie."
      ],
      "works": [
        {
          "pid": "vzemmaus",
          "text": [
            "Jesus in rotem Gewand sitzt mit zwei Jüngern an einem Tisch mit weissem Tuch.",
            "Nach der Bibel erkennen die Jünger ihn erst, als er das Brot bricht."
          ],
          "fact": "1622–1623. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "vzphilip",
          "text": [
            "Der junge König steht ganz in Schwarz da, mit einem steifen weissen Kragen und einer goldenen Kette.",
            "Velázquez malt Philipp IV. viele Male, fast sein ganzes Leben lang."
          ],
          "fact": "1624. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "vzs3",
      "place": "Italien und der Hof",
      "when": "1629–1648",
      "map": {
        "x": 76,
        "y": 80
      },
      "mapLabel": "Madrid",
      "intro": [
        "1629 reist Velázquez zum ersten Mal nach Italien und studiert dort die grossen Maler.",
        "Zurück in Madrid malt er nicht nur den König, sondern auch Menschen, die am Hof arbeiten."
      ],
      "works": [
        {
          "pid": "vzcalabazas",
          "text": [
            "Der Hofnarr Calabazas steht in schwarzer Kleidung neben einem Klappstuhl.",
            "Hofnarren sollen den König und seinen Hof unterhalten."
          ],
          "fact": "um 1631–1632. Cleveland Museum of Art."
        },
        {
          "pid": "vzselfman",
          "text": [
            "Ein Mann mit dunklem Haar, Schnurrbart und weissem Kragen schaut uns ruhig an.",
            "Vielleicht hat Velázquez hier sich selbst gemalt."
          ],
          "fact": "um 1635. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "vzs4",
      "place": "Rom",
      "when": "1649–1651",
      "map": {
        "x": 182,
        "y": 62
      },
      "mapLabel": "Rom",
      "intro": [
        "1649 reist Velázquez ein zweites Mal nach Italien, um für den König Kunstwerke zu kaufen.",
        "In Rom malt er Bildnisse, die grosses Aufsehen erregen."
      ],
      "works": [
        {
          "pid": "vzpareja",
          "text": [
            "Juan de Pareja, der Gehilfe von Velázquez, schaut uns stolz und direkt an.",
            "Velázquez malt ihn 1650 in Rom."
          ],
          "fact": "1650. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "velazquez1",
      "place": "Madrid: die späten Jahre",
      "when": "1651–1660",
      "map": {
        "x": 72,
        "y": 78
      },
      "mapLabel": "Madrid",
      "intro": [
        "Zurück in Madrid malt Velázquez die Kinder des Königs.",
        "1656 entsteht «Las Meninas», sein berühmtestes Bild."
      ],
      "works": [
        {
          "pid": "vzteresa",
          "text": [
            "Die junge Infantin trägt eine grosse, breite Frisur mit silbernen Schleifen.",
            "María Teresa ist die Tochter von König Philipp IV."
          ],
          "fact": "1651–1654. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "meninas",
          "text": [
            "Im Mittelpunkt steht die kleine Infantin Margarita, umgeben von Hoffräulein, Hofzwergen und einem Hund.",
            "Links malt Velázquez sich selbst – und im Spiegel hinten erscheinen König und Königin, also eigentlich wir."
          ],
          "fact": "1656. Museo del Prado, Madrid."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
