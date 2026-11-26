// v10.43 Mary Cassatt life journey (1844–1926). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "csbullfight",
    "title": "Nach dem Stierkampf",
    "artist": "Mary Cassatt",
    "year": "1873",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1969.332: https://www.artic.edu/artworks/31816, CC0 (gemeinfrei)"
  },
  {
    "id": "csarmchair",
    "title": "Kleines Mädchen in einem blauen Sessel",
    "artist": "Mary Cassatt",
    "year": "1878",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.18: https://www.nga.gov/collection/art-object-page.61368.html, CC0 (gemeinfrei)"
  },
  {
    "id": "csfan",
    "title": "Frau mit Fächer",
    "artist": "Mary Cassatt",
    "year": "um 1878–1879",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.95: https://www.nga.gov/collection/art-object-page.46570.html, CC0 (gemeinfrei)"
  },
  {
    "id": "csbalcony",
    "title": "Auf einem Balkon",
    "artist": "Mary Cassatt",
    "year": "1878–1879",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1938.18: https://www.artic.edu/artworks/26650, CC0 (gemeinfrei)"
  },
  {
    "id": "csloge",
    "title": "Die Loge",
    "artist": "Mary Cassatt",
    "year": "um 1878–1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.96: https://www.nga.gov/collection/art-object-page.46571.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cssusan",
    "title": "Susan mit Strohhut",
    "artist": "Mary Cassatt",
    "year": "um 1883",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1950.119: https://www.artic.edu/artworks/68384, CC0 (gemeinfrei)"
  },
  {
    "id": "cswindow",
    "title": "Junge Frau am Fenster",
    "artist": "Mary Cassatt",
    "year": "um 1883–1884",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.79.9: https://www.nga.gov/collection/art-object-page.97663.html, CC0 (gemeinfrei)"
  },
  {
    "id": "csbeach",
    "title": "Kinder beim Spielen am Strand",
    "artist": "Mary Cassatt",
    "year": "1884",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.19: https://www.nga.gov/collection/art-object-page.52163.html, CC0 (gemeinfrei)"
  },
  {
    "id": "csstrawhat",
    "title": "Kind mit Strohhut",
    "artist": "Mary Cassatt",
    "year": "um 1886",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.17: https://www.nga.gov/collection/art-object-page.61367.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cslady",
    "title": "Bildnis einer Dame",
    "artist": "Mary Cassatt",
    "year": "um 1887",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.7: https://www.nga.gov/collection/art-object-page.46482.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cskiss",
    "title": "Der Gutenachtkuss der Mutter",
    "artist": "Mary Cassatt",
    "year": "1888",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.421: https://www.artic.edu/artworks/81527, CC0 (gemeinfrei)"
  },
  {
    "id": "csblackhat",
    "title": "Der schwarze Hut",
    "artist": "Mary Cassatt",
    "year": "um 1890",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.81: https://www.nga.gov/collection/art-object-page.66479.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cszinnia",
    "title": "Frau mit roter Zinnie (Träumerei)",
    "artist": "Mary Cassatt",
    "year": "1891–1892",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.99: https://www.nga.gov/collection/art-object-page.46574.html, CC0 (gemeinfrei)"
  },
  {
    "id": "csboating",
    "title": "Die Bootsfahrt",
    "artist": "Mary Cassatt",
    "year": "1893–1894",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.94: https://www.nga.gov/collection/art-object-page.46569.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cssara",
    "title": "Sara mit Haube und Mantel",
    "artist": "Mary Cassatt",
    "year": "um 1904–1906",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1980.45.9: https://www.nga.gov/collection/art-object-page.57658.html, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "cassatt",
  "name": "Mary Cassatt",
  "title": "Mary Cassatts Lebensweg",
  "life": "1844–1926",
  "part": "Sevilla, Paris und Beaufresne",
  "subtitle": "Frauen, Kinder und das Theater",
  "cover": "csboating",
  "intro": "Reise mit Mary Cassatt durch ihr Leben: von Sevilla über die Logen der Pariser Theater und die Ausstellungen der Impressionisten bis zu den Bildern von Müttern und Kindern. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Mary Cassatt stirbt am 14. Juni 1926 auf ihrem Landsitz Beaufresne bei Paris.",
    "Sie hilft amerikanischen Sammlern, Bilder der Impressionisten zu kaufen, die heute in vielen Museen der USA hängen."
  ],
  "epilogue": "Mary Cassatt stirbt am 14. Juni 1926 in Beaufresne. Der Weg führt von Sevilla und den Pariser Theatern bis zu den Bildern von Müttern und Kindern.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,62 C58,52 86,52 108,40 C126,28 148,12 170,14 C192,20 210,34 214,52 C210,70 200,86 206,104 C212,122 214,140 196,148 C170,154 140,150 114,152 C96,154 80,148 78,132 C80,112 70,96 52,88 C40,82 30,72 40,62 Z"
    ]
  },
  "stations": [
    {
      "id": "css1",
      "place": "Von Pennsylvania nach Paris",
      "when": "1844–1880",
      "map": {
        "x": 150,
        "y": 46
      },
      "mapLabel": "Paris",
      "intro": [
        "Mary Cassatt wird am 22. Mai 1844 bei Pittsburgh in den USA geboren, lernt in Philadelphia malen und reist 1866 nach Paris.",
        "1873 malt sie in Sevilla; 1877 lädt Edgar Degas sie ein, mit den Impressionisten auszustellen."
      ],
      "works": [
        {
          "pid": "csbullfight",
          "text": [
            "Ein Torero in einer reich bestickten Jacke lehnt sich nach dem Kampf an eine hölzerne Schranke.",
            "Cassatt malt das Bild 1873 in Sevilla, wo sie mehrere Monate lebt."
          ],
          "fact": "1873. Art Institute of Chicago."
        },
        {
          "pid": "csarmchair",
          "text": [
            "Ein kleines Mädchen liegt müde in einem grossen blauen Sessel, im Sessel daneben schläft ein Hund.",
            "Edgar Degas hilft Cassatt beim Hintergrund des Bildes."
          ],
          "fact": "1878. National Gallery of Art, Washington."
        },
        {
          "pid": "csfan",
          "text": [
            "Eine junge Frau sitzt in einem Sessel und hält einen grossen goldenen Fächer auf dem Schoss.",
            "Hinter ihr sind weitere Gestalten nur angedeutet."
          ],
          "fact": "um 1878–1879. National Gallery of Art, Washington."
        },
        {
          "pid": "csbalcony",
          "text": [
            "Eine Frau in einem hellen Kleid liest Zeitung, umgeben von Blumen und Grün.",
            "Cassatt malt die Szene mit schnellen, hellen Pinselstrichen."
          ],
          "fact": "1878–1879. Art Institute of Chicago."
        },
        {
          "pid": "csloge",
          "text": [
            "Zwei junge Frauen sitzen in einer Theaterloge, die eine hält einen offenen Fächer, die andere einen Blumenstrauss.",
            "Hinter ihnen spiegeln sich die Lichter des Theatersaals."
          ],
          "fact": "um 1878–1880. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "css2",
      "place": "Paris: Freundinnen und Kinder",
      "when": "1881–1889",
      "map": {
        "x": 154,
        "y": 44
      },
      "mapLabel": "Paris",
      "intro": [
        "Cassatt lebt mit ihren Eltern und ihrer Schwester Lydia in Paris und malt Frauen und Kinder aus ihrer Umgebung.",
        "Sie arbeitet oft mit Pastell, weil sie damit schnell und mit kräftigen Farben zeichnen kann."
      ],
      "works": [
        {
          "pid": "cssusan",
          "text": [
            "Eine junge Frau mit Strohhut und blauem Band schaut nachdenklich nach unten.",
            "Cassatt zeichnet das Bildnis mit weichen Pastellkreiden."
          ],
          "fact": "um 1883. Art Institute of Chicago."
        },
        {
          "pid": "cswindow",
          "text": [
            "Eine junge Frau in Weiss mit grossem Hut sitzt am offenen Fenster, auf dem Schoss einen kleinen Hund.",
            "Draussen sind die Dächer und Häuser von Paris zu sehen."
          ],
          "fact": "um 1883–1884. National Gallery of Art, Washington."
        },
        {
          "pid": "csbeach",
          "text": [
            "Zwei kleine Mädchen spielen im Sand mit Eimer und Schaufel.",
            "Hinten auf dem blauen Meer fahren Segelboote."
          ],
          "fact": "1884. National Gallery of Art, Washington."
        },
        {
          "pid": "csstrawhat",
          "text": [
            "Ein kleines Mädchen mit grossem Strohhut und grauer Schürze steht da und schaut ernst.",
            "Die Hände hält es vor dem Bauch verschränkt."
          ],
          "fact": "um 1886. National Gallery of Art, Washington."
        },
        {
          "pid": "cslady",
          "text": [
            "Eine ältere Dame mit grauem Haar und rosa Blume an der Haube sitzt in Schwarz in einem Sessel.",
            "Über der Lehne liegt ein bunt gemusterter Stoff."
          ],
          "fact": "um 1887. National Gallery of Art, Washington."
        },
        {
          "pid": "cskiss",
          "text": [
            "Eine Mutter hält ihr Kind im blauen Kleid auf dem Arm und gibt ihm einen Kuss.",
            "Das Kind schaut verschlafen über ihre Schulter."
          ],
          "fact": "1888. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "cassatt1",
      "place": "Mütter, Kinder und Beaufresne",
      "when": "1890–1926",
      "map": {
        "x": 142,
        "y": 36
      },
      "mapLabel": "Beaufresne",
      "intro": [
        "Nach einer grossen Ausstellung japanischer Drucke in Paris 1890 werden Cassatts Bilder klarer und flächiger.",
        "1894 kauft sie den Landsitz Beaufresne nördlich von Paris; um 1914 muss sie wegen ihrer Augen das Malen aufgeben."
      ],
      "works": [
        {
          "pid": "csblackhat",
          "text": [
            "Eine junge Frau mit einem grossen schwarzen Federhut trägt ein hellblaues Kleid.",
            "Den Hintergrund lässt Cassatt fast leer, so leuchten Hut und Kleid umso mehr."
          ],
          "fact": "um 1890. National Gallery of Art, Washington."
        },
        {
          "pid": "cszinnia",
          "text": [
            "Eine Frau in einem violett gestreiften Kleid hält eine rote Blume und stützt den Kopf auf die Hand.",
            "Hinter ihr leuchtet ein grüner Garten."
          ],
          "fact": "1891–1892. National Gallery of Art, Washington."
        },
        {
          "pid": "csboating",
          "text": [
            "Ein Mann in Dunkelblau rudert eine Frau mit einem Kind auf dem Schoss über das blaue Meer.",
            "Cassatt malt das Bild an der Küste bei Antibes in Südfrankreich."
          ],
          "fact": "1893–1894. National Gallery of Art, Washington."
        },
        {
          "pid": "cssara",
          "text": [
            "Ein kleines Mädchen mit grosser rosa Haube lächelt verschmitzt.",
            "Cassatt zeichnet das Blatt mit zarten Pastellstrichen auf hellbraunes Papier."
          ],
          "fact": "um 1904–1906. National Gallery of Art, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
