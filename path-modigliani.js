// v10.43 Amedeo Modigliani life journey (1884–1920). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "mgpompadour",
    "title": "Madame Pompadour",
    "artist": "Amedeo Modigliani",
    "year": "1915",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1938.217: https://www.artic.edu/artworks/27281, CC0 (gemeinfrei)"
  },
  {
    "id": "mglipchitz",
    "title": "Jacques und Berthe Lipchitz",
    "artist": "Amedeo Modigliani",
    "year": "1916",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1926.221: https://www.artic.edu/artworks/27987, CC0 (gemeinfrei)"
  },
  {
    "id": "mgdeleu",
    "title": "Monsieur Deleu",
    "artist": "Amedeo Modigliani",
    "year": "1916",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.76: https://www.nga.gov/collection/art-object-page.46551.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mgbakst",
    "title": "Léon Bakst",
    "artist": "Amedeo Modigliani",
    "year": "1917",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.173: https://www.nga.gov/collection/art-object-page.46648.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mgsinger",
    "title": "Café-Sängerin",
    "artist": "Amedeo Modigliani",
    "year": "1917",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.44: https://www.nga.gov/collection/art-object-page.46519.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mgkisling",
    "title": "Madame Kisling",
    "artist": "Amedeo Modigliani",
    "year": "um 1917",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.175: https://www.nga.gov/collection/art-object-page.46650.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mggreen",
    "title": "Mädchen in grüner Bluse",
    "artist": "Amedeo Modigliani",
    "year": "1917",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.45: https://www.nga.gov/collection/art-object-page.46520.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mgredhair",
    "title": "Frau mit roten Haaren",
    "artist": "Amedeo Modigliani",
    "year": "1917",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.176: https://www.nga.gov/collection/art-object-page.46651.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mgadrienne",
    "title": "Adrienne (Frau mit Pony)",
    "artist": "Amedeo Modigliani",
    "year": "1917",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.171: https://www.nga.gov/collection/art-object-page.46646.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mgsoutine",
    "title": "Chaim Soutine",
    "artist": "Amedeo Modigliani",
    "year": "1918",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.47: https://www.nga.gov/collection/art-object-page.46522.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mgsailor",
    "title": "Mädchen in Matrosenbluse",
    "artist": "Amedeo Modigliani",
    "year": "1918",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 60.118: https://www.metmuseum.org/art/collection/search/489102, CC0 (gemeinfrei)"
  },
  {
    "id": "mgitalian",
    "title": "Die Italienerin",
    "artist": "Amedeo Modigliani",
    "year": "um 1918–1919",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 56.4: https://www.metmuseum.org/art/collection/search/488927, CC0 (gemeinfrei)"
  },
  {
    "id": "mgroma",
    "title": "Roma-Frau mit Kind",
    "artist": "Amedeo Modigliani",
    "year": "1919",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.174: https://www.nga.gov/collection/art-object-page.46649.html, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "modigliani",
  "name": "Amedeo Modigliani",
  "title": "Amedeo Modiglianis Lebensweg",
  "life": "1884–1920",
  "part": "Gesichter",
  "subtitle": "Von Paris nach Nizza",
  "cover": "mggreen",
  "intro": "Reise mit Amedeo Modigliani durch seine letzten Jahre: zu Freunden, Künstlern und Menschen, die er mit langen Hälsen und schmalen Gesichtern malt. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Amedeo Modigliani stirbt 1920 in Paris.",
    "Seine Bildnisse hängen heute in Museen auf der ganzen Welt."
  ],
  "epilogue": "Amedeo Modigliani stirbt 1920. Der Weg führt durch seine Pariser Jahre mit Bildnissen von Freunden und Unbekannten bis an die Mittelmeerküste nach Nizza.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,62 C58,52 86,52 108,40 C126,28 148,12 170,14 C192,20 210,34 214,52 C210,70 200,86 206,104 C212,122 214,140 196,148 C170,154 140,150 114,152 C96,154 80,148 78,132 C80,112 70,96 52,88 C40,82 30,72 40,62 Z"
    ]
  },
  "stations": [
    {
      "id": "mgs1",
      "place": "Paris: Freunde und Auftraggeber",
      "when": "1915–1916",
      "map": {
        "x": 150,
        "y": 46
      },
      "mapLabel": "Paris",
      "intro": [
        "Amedeo Modigliani wird 1884 in Livorno in Italien geboren und lässt sich 1906 in Paris nieder.",
        "Zuerst arbeitet er auch als Bildhauer, doch Ende 1913 oder Anfang 1914 kehrt er ganz zur Malerei zurück."
      ],
      "works": [
        {
          "pid": "mgpompadour",
          "text": [
            "Eine Frau mit grossem schwarzem Hut blickt vor einem Hintergrund aus grauen und grünen Feldern aus dem Bild.",
            "Laut dem Museum spielt der Titel auf Madame de Pompadour am Hof von König Ludwig XV. an, und der auffällige Hut gibt dem Bild eine heitere Note."
          ],
          "fact": "1915. Art Institute of Chicago."
        },
        {
          "pid": "mglipchitz",
          "text": [
            "Der Künstler Jacques Lipchitz steht hinter seiner Frau, der russischen Dichterin Berthe Lipchitz, die einen weissen Kragen trägt.",
            "Lipchitz bestellt das Doppelbildnis zur Hochzeit, und nach seinen Worten malt Modigliani es in nur zwei Tagen."
          ],
          "fact": "1916. Art Institute of Chicago."
        },
        {
          "pid": "mgdeleu",
          "text": [
            "Ein junger Mann mit schwarzem Haar trägt eine rotbraune Jacke und ein weisses Halstuch.",
            "1943 wurde das Bild noch unter dem Titel „Bildnis Kisling“ ausgestellt."
          ],
          "fact": "1916. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "mgs2",
      "place": "Paris: Gesichter im Jahr 1917",
      "when": "1917",
      "map": {
        "x": 153,
        "y": 49
      },
      "mapLabel": "Paris",
      "intro": [
        "Im Jahr 1916 ist Léopold Zborowski Modiglianis Kunsthändler.",
        "Wie in seinen Skulpturen gibt Modigliani den Menschen lange Hälse und schmale Gesichter."
      ],
      "works": [
        {
          "pid": "mgbakst",
          "text": [
            "Ein Mann mit Schnurrbart trägt ein leuchtend blaues Halstuch zu einer dunklen Jacke mit goldenen Mustern.",
            "Das Bild gehörte zuerst Léon Bakst selbst, und 2013 zeigte die National Gallery es in einer Ausstellung über Diaghilew und die Ballets Russes."
          ],
          "fact": "1917. National Gallery of Art, Washington."
        },
        {
          "pid": "mgsinger",
          "text": [
            "Eine junge Frau in schwarzem Kleid sitzt mit gefalteten Händen vor einer hellgrauen Wand.",
            "Zuerst war das Bild bei Modiglianis Kunsthändler Léopold Zborowski in Paris."
          ],
          "fact": "1917. National Gallery of Art, Washington."
        },
        {
          "pid": "mgkisling",
          "text": [
            "Die Frau trägt kurzes rotbraunes Haar mit geradem Pony, ein weisses Hemd und eine rote Krawatte.",
            "Unten rechts steht die Signatur „modigliani“."
          ],
          "fact": "um 1917. National Gallery of Art, Washington."
        },
        {
          "pid": "mggreen",
          "text": [
            "Ein Mädchen mit rotblondem Haar trägt eine hellgrüne Bluse vor einer rotbraunen Wand.",
            "Bei einer Pariser Auktion 1927 hiess das Bild „Le Corsage Vert“, die grüne Bluse."
          ],
          "fact": "1917. National Gallery of Art, Washington."
        },
        {
          "pid": "mgredhair",
          "text": [
            "Eine Frau mit rotem Haar und schwarzem Kleid lehnt den Arm auf die Lehne eines Stuhls.",
            "1931 wurde das Bild in Pittsburgh unter dem Titel „Frau in Schwarz“ gezeigt."
          ],
          "fact": "1917. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "mgs3",
      "place": "Stille Blicke",
      "when": "1917–1918",
      "map": {
        "x": 140,
        "y": 70
      },
      "mapLabel": "Frankreich",
      "intro": [
        "Um 1914 lernt Modigliani in Montparnasse den jüngeren Maler Chaim Soutine kennen, und die beiden werden enge Freunde.",
        "Viele seiner Bildnisse sind stark vereinfacht, und oft lässt er die Augen leer."
      ],
      "works": [
        {
          "pid": "mgadrienne",
          "text": [
            "Eine Frau mit dunkelrotem Haar und Pony stützt den Kopf in die Hand.",
            "Ein Kunsthändler kaufte das Bild 1927 von einem Künstler in Montparnasse, einem Freund Modiglianis."
          ],
          "fact": "1917. National Gallery of Art, Washington."
        },
        {
          "pid": "mgsoutine",
          "text": [
            "Der Maler Chaim Soutine sitzt mit den Händen im Schoss und blickt aus halb geschlossenen Augen aus dem Bild.",
            "Modigliani malt den zehn Jahre jüngeren Freund mehrmals, und 1916 stellt er ihn seinem Kunsthändler Zborowski vor."
          ],
          "fact": "1918. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "mgs4",
      "place": "Am Mittelmeer",
      "when": "1918–1919",
      "map": {
        "x": 200,
        "y": 134
      },
      "mapLabel": "Nizza",
      "intro": [
        "Von März 1918 bis Mai 1919 lebt Modigliani zur Erholung in Südfrankreich, vor allem in Nizza.",
        "Fern von seinen Freunden malt er dort junge Hausangestellte, Verkäuferinnen und Kinder aus der Gegend."
      ],
      "works": [
        {
          "pid": "mgsailor",
          "text": [
            "Ein Mädchen mit dunklem, hochgestecktem Haar trägt eine graublaue Bluse mit breitem weissem Kragen.",
            "Das Bild kam 1960 als Geschenk von Charles F. Iklé ins Metropolitan Museum."
          ],
          "fact": "1918. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mgitalian",
          "text": [
            "Eine Frau in schwarzem Kleid mit weissem Kragen sitzt mit gefalteten Händen vor einer orangeroten Wand.",
            "Wer sie ist, weiss man nicht; vielleicht wählte Modigliani sie, weil sie wie er aus Italien stammte."
          ],
          "fact": "um 1918–1919. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mgroma",
          "text": [
            "Eine junge Frau in weisser Bluse mit roter Stickerei hält ein in dunkelblaue Tücher gewickeltes Kind im Arm.",
            "1930 zeigte die Biennale in Venedig das Bild unter dem Titel „Maternità“, Mutterschaft."
          ],
          "fact": "1919. National Gallery of Art, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
