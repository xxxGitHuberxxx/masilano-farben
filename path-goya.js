// v10.43 Francisco de Goya life journey (1746–1828). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "quitasol",
    "title": "Der Sonnenschirm",
    "artist": "Francisco de Goya",
    "year": "1777",
    "museum": "Museo del Prado, Madrid",
    "source": "Wikimedia Commons: «El quitasol.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "gywinter",
    "title": "Winterszene",
    "artist": "Francisco de Goya",
    "year": "um 1786",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1990.558: https://www.artic.edu/artworks/93450, CC0 (gemeinfrei)"
  },
  {
    "id": "gyram",
    "title": "Knabe auf einem Widder",
    "artist": "Francisco de Goya",
    "year": "1786–1787",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1979.479: https://www.artic.edu/artworks/111559, CC0 (gemeinfrei)"
  },
  {
    "id": "gyteresa",
    "title": "María Teresa de Borbón y Vallabriga",
    "artist": "Francisco de Goya",
    "year": "1783",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.123: https://www.nga.gov/collection/art-object-page.52267.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gypontejos",
    "title": "Die Marquesa de Pontejos",
    "artist": "Francisco de Goya",
    "year": "um 1786",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1937.1.85: https://www.nga.gov/collection/art-object-page.92.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gyaltamira",
    "title": "Condesa de Altamira und ihre Tochter María Agustina",
    "artist": "Francisco de Goya",
    "year": "1787–1788",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1975.1.148: https://www.metmuseum.org/art/collection/search/459090, CC0 (gemeinfrei)"
  },
  {
    "id": "gyosorio",
    "title": "Manuel Osorio Manrique de Zuñiga",
    "artist": "Francisco de Goya",
    "year": "1787–1788",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 49.7.41: https://www.metmuseum.org/art/collection/search/436545, CC0 (gemeinfrei)"
  },
  {
    "id": "gymartinez",
    "title": "Sebastián Martínez y Pérez",
    "artist": "Francisco de Goya",
    "year": "1792",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 06.289: https://www.metmuseum.org/art/collection/search/436541, CC0 (gemeinfrei)"
  },
  {
    "id": "gyambrose",
    "title": "Der heilige Ambrosius",
    "artist": "Francisco de Goya",
    "year": "um 1796–1799",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1969.23: https://clevelandart.org/art/1969.23, CC0 (gemeinfrei)"
  },
  {
    "id": "gynoriega",
    "title": "Don Antonio Noriega",
    "artist": "Francisco de Goya",
    "year": "1801",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1961.9.74: https://www.nga.gov/collection/art-object-page.46173.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gysureda",
    "title": "Bartolomé Sureda y Miserol",
    "artist": "Francisco de Goya",
    "year": "um 1803–1804",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1941.10.1: https://www.nga.gov/collection/art-object-page.985.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gysuredaw",
    "title": "Thérèse Louise de Sureda",
    "artist": "Francisco de Goya",
    "year": "um 1803–1804",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1942.3.1: https://www.nga.gov/collection/art-object-page.991.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gygarcini",
    "title": "Ignacio Garcini y Queralt, Brigadier der Pioniere",
    "artist": "Francisco de Goya",
    "year": "1804",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 55.145.1: https://www.metmuseum.org/art/collection/search/436542, CC0 (gemeinfrei)"
  },
  {
    "id": "gyjosefa",
    "title": "Josefa de Castilla Portugal y van Asbrock de Garcini",
    "artist": "Francisco de Goya",
    "year": "1804",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 55.145.2: https://www.metmuseum.org/art/collection/search/436543, CC0 (gemeinfrei)"
  },
  {
    "id": "gynarcisa",
    "title": "Narcisa Barañano Gayoso de Goicoechea",
    "artist": "Francisco de Goya",
    "year": "um 1805",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.180: https://www.metmuseum.org/art/collection/search/436547, CC0 (gemeinfrei)"
  },
  {
    "id": "gymantilla",
    "title": "Junge Dame mit Mantilla und Basquiña",
    "artist": "Francisco de Goya",
    "year": "um 1800–1805",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.4.2: https://www.nga.gov/collection/art-object-page.46469.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gymaiquez",
    "title": "Bildnis von Isidoro Máiquez",
    "artist": "Francisco de Goya",
    "year": "um 1807",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.1077: https://www.artic.edu/artworks/16367, CC0 (gemeinfrei)"
  },
  {
    "id": "gysabasa",
    "title": "Señora Sabasa García",
    "artist": "Francisco de Goya",
    "year": "um 1806–1811",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1937.1.88: https://www.nga.gov/collection/art-object-page.95.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gyguye",
    "title": "Victor Guye",
    "artist": "Francisco de Goya",
    "year": "1810",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1956.11.1: https://www.nga.gov/collection/art-object-page.43625.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gypepito",
    "title": "José Costa y Bonells, genannt Pepito",
    "artist": "Francisco de Goya",
    "year": "um 1810",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 61.259: https://www.metmuseum.org/art/collection/search/436546, CC0 (gemeinfrei)"
  },
  {
    "id": "gyromero",
    "title": "Bildnis von General José Manuel Romero",
    "artist": "Francisco de Goya",
    "year": "um 1810",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1970.1036: https://www.artic.edu/artworks/89043, CC0 (gemeinfrei)"
  },
  {
    "id": "gycuervo",
    "title": "Bildnis von Don Juan Antonio Cuervo",
    "artist": "Francisco de Goya",
    "year": "1819",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1943.90: https://clevelandart.org/art/1943.90, CC0 (gemeinfrei)"
  },
  {
    "id": "gytiburcio",
    "title": "Tiburcio Pérez y Cuervo, der Architekt",
    "artist": "Francisco de Goya",
    "year": "1820",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 30.95.242: https://www.metmuseum.org/art/collection/search/436544, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "goya",
  "name": "Francisco de Goya",
  "title": "Francisco de Goyas Lebensweg",
  "life": "1746–1828",
  "part": "Vom Wandteppich zum Hofmaler",
  "subtitle": "Entwürfe, Kinder und Bildnisse aus Spanien",
  "cover": "gyosorio",
  "intro": "Reise mit Francisco de Goya durch sein Leben: von den heiteren Entwürfen für Wandteppiche über die Bildnisse für Adel und Hof bis zu den Kriegsjahren in Madrid. Dieser Weg ist kürzer als andere, denn nur wenige Bilder von Goya sind als freie Museumsaufnahmen verfügbar. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Francisco de Goya stirbt am 16. April 1828 in Bordeaux.",
    "Seine Bildnisse zeigen Menschen seiner Zeit, vom Kind bis zum General."
  ],
  "epilogue": "Francisco de Goya stirbt am 16. April 1828 in Bordeaux. Der Weg führt von den Entwürfen für Wandteppiche über die Bildnisse für Adel und Hof bis zu den späten Jahren.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,52 C70,40 150,38 178,48 C196,58 194,84 186,104 C176,126 150,144 116,148 C84,150 56,142 44,124 C30,104 28,70 40,52 Z",
      "M110,6 C130,2 170,4 186,12 C192,22 180,34 164,38 C144,40 124,38 112,30 C104,22 104,12 110,6 Z"
    ]
  },
  "stations": [
    {
      "id": "goya1",
      "place": "Madrid: Entwürfe für Wandteppiche",
      "when": "1746–1787",
      "map": {
        "x": 110,
        "y": 90
      },
      "mapLabel": "Madrid",
      "intro": [
        "Francisco de Goya wird am 30. März 1746 in Fuendetodos bei Saragossa geboren.",
        "Ab 1775 malt er in Madrid Vorlagen für die königliche Teppichmanufaktur: fröhliche Szenen aus dem Alltag."
      ],
      "works": [
        {
          "pid": "quitasol",
          "text": [
            "Ein junger Mann hält einer sitzenden Frau den Schirm, damit die Sonne sie nicht blendet.",
            "Das Bild ist ein Entwurf für einen Wandteppich im königlichen Palast El Pardo."
          ],
          "fact": "1777. Museo del Prado, Madrid."
        },
        {
          "pid": "gywinter",
          "text": [
            "Männer in dicken Mänteln stapfen durch den Schnee, ein Hund läuft mit.",
            "Das kleine Bild ist eine Skizze für einen Wandteppich."
          ],
          "fact": "um 1786. Art Institute of Chicago."
        },
        {
          "pid": "gyram",
          "text": [
            "Ein Junge reitet fröhlich auf einem dunklen Widder.",
            "Auch dieses Bild ist ein Entwurf für einen Wandteppich."
          ],
          "fact": "1786–1787. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "gys2",
      "place": "Bildnisse für den Adel",
      "when": "1783–1788",
      "map": {
        "x": 104,
        "y": 84
      },
      "mapLabel": "Madrid",
      "intro": [
        "Immer mehr adelige Familien lassen sich von Goya malen, oft mit ihren Kindern und Hunden.",
        "1786 wird er Maler des Königs."
      ],
      "works": [
        {
          "pid": "gyteresa",
          "text": [
            "Ein kleines Mädchen in einem langen, festlichen Kleid steht vor einer Berglandschaft.",
            "Neben ihr sitzt ein weisser Hund."
          ],
          "fact": "1783. National Gallery of Art, Washington."
        },
        {
          "pid": "gypontejos",
          "text": [
            "Eine junge Frau in einem hellen, weiten Kleid steht in einem Park.",
            "Zu ihren Füssen sitzt ein kleiner Mops."
          ],
          "fact": "um 1786. National Gallery of Art, Washington."
        },
        {
          "pid": "gyaltamira",
          "text": [
            "Eine Mutter in rosa Seidenkleid sitzt auf einem Sofa und hält ihr kleines Kind auf dem Schoss.",
            "Der rosa Stoff schimmert im Licht."
          ],
          "fact": "1787–1788. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gyosorio",
          "text": [
            "Ein kleiner Junge in rotem Anzug hält eine Elster an einer Schnur.",
            "Links schauen Katzen gespannt auf den Vogel."
          ],
          "fact": "1787–1788. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "gys3",
      "place": "Hofmaler und schwere Krankheit",
      "when": "1789–1799",
      "map": {
        "x": 80,
        "y": 138
      },
      "mapLabel": "Cádiz",
      "intro": [
        "1789 wird Goya Hofmaler. 1792 erkrankt er schwer und erholt sich in Cádiz im Haus seines Freundes Sebastián Martínez.",
        "Nach der Krankheit ist er taub."
      ],
      "works": [
        {
          "pid": "gymartinez",
          "text": [
            "Der Kaufmann Sebastián Martínez sitzt in einem hellen Rock und hält ein Blatt Papier.",
            "Er ist ein Freund von Goya und sammelt Bilder."
          ],
          "fact": "1792. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gyambrose",
          "text": [
            "Der Bischof Ambrosius sitzt mit hoher weisser Mitra an einem Tisch und schreibt.",
            "Das Licht fällt hell auf sein weisses Gewand."
          ],
          "fact": "um 1796–1799. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "gys4",
      "place": "Bildnisse in Madrid",
      "when": "1800–1805",
      "map": {
        "x": 112,
        "y": 92
      },
      "mapLabel": "Madrid",
      "intro": [
        "1799 wird Goya erster Hofmaler. Er ist nun der gefragteste Bildnismaler Spaniens.",
        "Er malt Beamte, Offiziere, Kaufleute und ihre Frauen."
      ],
      "works": [
        {
          "pid": "gynoriega",
          "text": [
            "Ein Mann in dunklem Rock sitzt an einem Tisch mit Papieren.",
            "Er ist ein hoher Beamter der königlichen Finanzen."
          ],
          "fact": "1801. National Gallery of Art, Washington."
        },
        {
          "pid": "gysureda",
          "text": [
            "Ein junger Mann mit lockigem Haar hält seinen Hut in der Hand. Innen leuchtet das Futter rot.",
            "Sein Bild hat ein Gegenstück: das Bildnis seiner Frau."
          ],
          "fact": "um 1803–1804. National Gallery of Art, Washington."
        },
        {
          "pid": "gysuredaw",
          "text": [
            "Eine Frau in blauem Kleid sitzt in einem gelben Sessel.",
            "Das kräftige Blau und das Gelb stehen sich leuchtend gegenüber."
          ],
          "fact": "um 1803–1804. National Gallery of Art, Washington."
        },
        {
          "pid": "gygarcini",
          "text": [
            "Ein Offizier in dunkler Uniform steht vor einem dunklen Grund.",
            "Sein Bildnis hat ein Gegenstück: das seiner Frau Josefa."
          ],
          "fact": "1804. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gyjosefa",
          "text": [
            "Eine junge Frau in hellem Kleid sitzt da, ihr helles Haar fällt lose herab.",
            "Der dunkle Hintergrund lässt das Kleid leuchten."
          ],
          "fact": "1804. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gynarcisa",
          "text": [
            "Eine Frau in dunklem Kleid mit grossem Hut sitzt auf einem gelben Stuhl.",
            "Der dunkle Hut ragt hoch über ihren Kopf."
          ],
          "fact": "um 1805. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gymantilla",
          "text": [
            "Eine junge Frau trägt eine weisse Spitzenmantilla über dem Haar und einen schwarzen Rock.",
            "Mantilla und Basquiña sind spanische Kleidungsstücke dieser Zeit."
          ],
          "fact": "um 1800–1805. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "gys5",
      "place": "Jahre des Krieges",
      "when": "1806–1812",
      "map": {
        "x": 106,
        "y": 96
      },
      "mapLabel": "Madrid",
      "intro": [
        "1808 marschieren französische Truppen in Spanien ein. Der Krieg dauert bis 1814.",
        "Goya bleibt in Madrid und malt weiter Bildnisse, auch von Kindern."
      ],
      "works": [
        {
          "pid": "gymaiquez",
          "text": [
            "Der Schauspieler Isidoro Máiquez schaut uns mit wachem Blick an.",
            "Er ist einer der berühmtesten Schauspieler Spaniens."
          ],
          "fact": "um 1807. Art Institute of Chicago."
        },
        {
          "pid": "gysabasa",
          "text": [
            "Eine junge Frau mit dunklen Augen trägt ein leuchtend gelbes Tuch um die Schultern.",
            "Ein heller Schleier liegt über ihrem Haar."
          ],
          "fact": "um 1806–1811. National Gallery of Art, Washington."
        },
        {
          "pid": "gyguye",
          "text": [
            "Ein kleiner Junge in dunkler Uniform mit goldenen Schnüren hält ein Buch.",
            "Er steht ganz gerade und schaut ernst."
          ],
          "fact": "1810. National Gallery of Art, Washington."
        },
        {
          "pid": "gypepito",
          "text": [
            "Ein kleiner Junge in weisser Hose steht neben seinen Spielsachen.",
            "Hinter ihm steht ein Spielzeugpferd, er trägt eine grüne Jacke."
          ],
          "fact": "um 1810. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gyromero",
          "text": [
            "Ein Mann in Uniform mit roter Schärpe und Orden schaut uns an.",
            "Die goldene Stickerei glänzt auf dem dunklen Stoff."
          ],
          "fact": "um 1810. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "gys6",
      "place": "Die späten Jahre",
      "when": "1814–1828",
      "map": {
        "x": 140,
        "y": 22
      },
      "mapLabel": "Madrid · Bordeaux",
      "intro": [
        "1819 kauft Goya ein Landhaus bei Madrid, die «Quinta del Sordo».",
        "1824 zieht er nach Bordeaux in Frankreich."
      ],
      "works": [
        {
          "pid": "gycuervo",
          "text": [
            "Der Architekt Juan Antonio Cuervo sitzt neben einem Tisch mit einem grossen Plan.",
            "Er trägt eine dunkle Uniform mit goldener Stickerei."
          ],
          "fact": "1819. Cleveland Museum of Art."
        },
        {
          "pid": "gytiburcio",
          "text": [
            "Ein Mann mit verschränkten Armen und hochgekrempelten Ärmeln schaut uns direkt an.",
            "Goya malt ihn ohne Prunk, wie bei der Arbeit."
          ],
          "fact": "1820. Metropolitan Museum of Art, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
