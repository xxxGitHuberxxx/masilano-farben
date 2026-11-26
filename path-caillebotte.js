// v10.43 Gustave Caillebotte life journey (1848–1894). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "cbrainy",
    "title": "Pariser Strasse; Regenwetter",
    "artist": "Gustave Caillebotte",
    "year": "1877",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1964.336: https://www.artic.edu/artworks/20684, CC0 (gemeinfrei)"
  },
  {
    "id": "cbskiffs",
    "title": "Kanus",
    "artist": "Gustave Caillebotte",
    "year": "1877",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.6: https://www.nga.gov/collection/art-object-page.66404.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cbcourtier",
    "title": "Bildnis eines Mannes",
    "artist": "Gustave Caillebotte",
    "year": "1880",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 2009.157: https://clevelandart.org/art/2009.157, CC0 (gemeinfrei)"
  },
  {
    "id": "cbtrouville",
    "title": "Villen in Trouville",
    "artist": "Gustave Caillebotte",
    "year": "1884",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 2020.105: https://clevelandart.org/art/2020.105, CC0 (gemeinfrei)"
  },
  {
    "id": "cblamy",
    "title": "Studie eines Mannes mit den Händen in den Taschen",
    "artist": "Gustave Caillebotte",
    "year": "1893",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 2020.260: https://clevelandart.org/art/2020.260, CC0 (gemeinfrei)"
  },
  {
    "id": "cbchrysanth",
    "title": "Chrysanthemen im Garten von Petit-Gennevilliers",
    "artist": "Gustave Caillebotte",
    "year": "1893",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 2014.736: https://www.metmuseum.org/art/collection/search/671456, CC0 (gemeinfrei)"
  },
  {
    "id": "cbdahlias",
    "title": "Dahlien, Garten in Petit-Gennevilliers",
    "artist": "Gustave Caillebotte",
    "year": "1893",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2016.48.1: https://www.nga.gov/collection/art-object-page.110067.html, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "caillebotte",
  "name": "Gustave Caillebotte",
  "title": "Gustave Caillebottes Lebensweg",
  "life": "1848–1894",
  "part": "Paris, Yerres, Trouville und Petit-Gennevilliers",
  "subtitle": "Grossstadt, Wasser und Garten",
  "cover": "cbskiffs",
  "intro": "Reise mit Gustave Caillebotte durch sein Leben: von den neuen Strassen von Paris über die Boote an der Yerres und die Küste der Normandie bis zu seinem Garten an der Seine. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Gustave Caillebotte stirbt 1894, ein Jahr nach seinen Gartenbildern aus Petit-Gennevilliers.",
    "Er war Maler, Organisator der Impressionisten-Ausstellungen, Segler und Gärtner."
  ],
  "epilogue": "Gustave Caillebotte stirbt 1894. Der Weg führt von Paris über Yerres und Trouville in seinen Garten in Petit-Gennevilliers.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,62 C58,52 86,52 108,40 C126,28 148,12 170,14 C192,20 210,34 214,52 C210,70 200,86 206,104 C212,122 214,140 196,148 C170,154 140,150 114,152 C96,154 80,148 78,132 C80,112 70,96 52,88 C40,82 30,72 40,62 Z"
    ]
  },
  "stations": [
    {
      "id": "cbs1",
      "place": "Paris und Yerres: Regen, Boote und ein Freund",
      "when": "1876–1880",
      "map": {
        "x": 152,
        "y": 48
      },
      "mapLabel": "Paris und Yerres",
      "intro": [
        "Gustave Caillebotte stammt aus einer grossbürgerlichen Pariser Familie; 1877 organisiert er die Ausstellung der Impressionisten und zeigt dort sein grösstes Bild, eine Pariser Strasse im Regen.",
        "Auf dem Landgut der Familie in Yerres malt er 1877 und 1878 Angler und Ruderer; in Paris teilt er mit seinem Bruder Martial eine Wohnung am Boulevard Haussmann."
      ],
      "works": [
        {
          "pid": "cbrainy",
          "text": [
            "Ein Paar unter einem Regenschirm kommt direkt auf uns zu, dahinter glänzt das nasse Pflaster einer belebten Kreuzung.",
            "Die Kreuzung liegt nicht weit von Caillebottes Wohnung; den Regen zeigt er nicht durch Tropfen, sondern durch Schirme und Spiegelungen auf den Steinen."
          ],
          "fact": "1877. Art Institute of Chicago."
        },
        {
          "pid": "cbskiffs",
          "text": [
            "Drei schmale Kanus mit Ruderern in weissen Hemden und Strohhüten gleiten über den Fluss auf uns zu.",
            "Caillebotte zeigt das Bild 1879 auf der vierten Ausstellung der Impressionisten unter dem Titel „Périssoires sur l’Yerres“."
          ],
          "fact": "1877. National Gallery of Art, Washington."
        },
        {
          "pid": "cbcourtier",
          "text": [
            "Albert Courtier, Caillebottes Notar und lebenslanger Freund der Familie, sitzt in einem Sessel am Fenster der Wohnung am Boulevard Haussmann.",
            "Courtier steht Caillebotte mehrmals Modell, besitzt vier seiner Bilder und macht ihn zum Paten seiner ältesten Tochter."
          ],
          "fact": "1880. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "cbs3",
      "place": "Segeln: die Normandie und die Seine",
      "when": "1884–1893",
      "map": {
        "x": 118,
        "y": 40
      },
      "mapLabel": "Normandie und Seine",
      "intro": [
        "In den frühen 1880er Jahren verbringt Caillebotte mehrere Sommer an der Küste der Normandie, malt dort und nimmt an Segelregatten teil.",
        "Er ist ein preisgekrönter Segler und entwirft eigene Rennboote; mit seinem Freund Eugène Lamy teilt er die Liebe zum Segeln."
      ],
      "works": [
        {
          "pid": "cbtrouville",
          "text": [
            "Von einer Klippe blickt Caillebotte über rote Backsteinvillen hinweg auf das blaugrüne Meer unter einem Himmel mit Wolken.",
            "Trouville ist ein beliebter Ferienort an der Küste der Normandie; die Villen am Rand des Ortes liegen direkt über dem Ufer."
          ],
          "fact": "1884. Cleveland Museum of Art."
        },
        {
          "pid": "cblamy",
          "text": [
            "Mit schwarzer Kreide zeichnet Caillebotte einen Mann mit Hut, von hinten gesehen, die Hände in den Taschen.",
            "Es ist sein Freund Eugène Lamy, als Studie für das Gemälde „Seineufer bei Petit-Gennevilliers, Winter“ von 1893."
          ],
          "fact": "1893. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "cbs4",
      "place": "Der Garten in Petit-Gennevilliers",
      "when": "1893",
      "map": {
        "x": 147,
        "y": 44
      },
      "mapLabel": "Petit-Gennevilliers",
      "intro": [
        "1881 kaufen Gustave und Martial Caillebotte Land in Petit-Gennevilliers, gegenüber von Argenteuil an der Seine; später übernimmt Gustave das Anwesen allein.",
        "Er legt dort einen Garten an, malt, segelt und tauscht mit seinem Freund Claude Monet Gartenwissen aus."
      ],
      "works": [
        {
          "pid": "cbchrysanth",
          "text": [
            "Dicht an dicht füllen weisse, gelbe und rote Chrysanthemen das ganze Bild, ohne Himmel und ohne Horizont.",
            "Caillebotte malt die Blumen 1893 in seinem eigenen Garten in Petit-Gennevilliers."
          ],
          "fact": "1893. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "cbdahlias",
          "text": [
            "Vorne leuchten rote und gelbe Dahlien, dahinter stehen das Gewächshaus und Caillebottes Haus im Nachmittagslicht.",
            "Auf dem Gartenweg betrachtet eine Frau mit Sonnenhut etwas in ihren Händen, während ihr kleiner Hund zum Maler schaut."
          ],
          "fact": "1893. National Gallery of Art, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
