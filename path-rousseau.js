// v10.43 Henri Rousseau life journey (1844–1910). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "hrrendezvous",
    "title": "Begegnung im Wald",
    "artist": "Henri Rousseau",
    "year": "1889",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1972.9.20: https://www.nga.gov/collection/art-object-page.53138.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hrsawmill",
    "title": "Sägewerk am Stadtrand von Paris",
    "artist": "Henri Rousseau",
    "year": "um 1893–1895",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1950.133: https://www.artic.edu/artworks/68433, CC0 (gemeinfrei)"
  },
  {
    "id": "hrboy",
    "title": "Knabe auf den Felsen",
    "artist": "Henri Rousseau",
    "year": "1895–1897",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.63: https://www.nga.gov/collection/art-object-page.46538.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hroutskirts",
    "title": "Am Rand von Paris",
    "artist": "Henri Rousseau",
    "year": "um 1897–1905",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1929.951: https://clevelandart.org/art/1929.951, CC0 (gemeinfrei)"
  },
  {
    "id": "hrbievre",
    "title": "Die Ufer der Bièvre bei Bicêtre",
    "artist": "Henri Rousseau",
    "year": "um 1908–1909",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 39.15: https://www.metmuseum.org/art/collection/search/437512, CC0 (gemeinfrei)"
  },
  {
    "id": "hrequatorial",
    "title": "Der Äquatorialdschungel",
    "artist": "Henri Rousseau",
    "year": "1909",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.213: https://www.nga.gov/collection/art-object-page.46688.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hrmonkeys",
    "title": "Tropischer Wald mit Affen",
    "artist": "Henri Rousseau",
    "year": "1910",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1982.76.7: https://www.nga.gov/collection/art-object-page.61253.html, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "rousseau",
  "name": "Henri Rousseau",
  "title": "Henri Rousseaus Lebensweg",
  "life": "1844–1910",
  "part": "Paris und seine Ränder",
  "subtitle": "Vororte, Wälder und erfundene Urwälder",
  "cover": "hrmonkeys",
  "intro": "Reise mit Henri Rousseau durch sein Leben: von den Vororten von Paris, wo er als Zöllner arbeitet, bis zu den Urwäldern, die er sich in seinen letzten Jahren ausdenkt. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Henri Rousseau stirbt am 2. September 1910 in Paris.",
    "Junge Maler wie Pablo Picasso schätzen ihn schon zu Lebzeiten, heute hängen seine Bilder in Museen auf der ganzen Welt."
  ],
  "epilogue": "Henri Rousseau stirbt am 2. September 1910 in Paris. Der Weg führt von den Vororten der Stadt bis zu den erfundenen Urwäldern seiner letzten Jahre.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M30,40 C70,20 150,18 200,34 C226,46 230,92 214,120 C196,146 140,150 96,144 C54,138 22,116 20,84 C18,64 20,50 30,40 Z"
    ]
  },
  "stations": [
    {
      "id": "rousseau1",
      "place": "Zöllner und Maler in Paris",
      "when": "1844–1905",
      "map": {
        "x": 110,
        "y": 70
      },
      "mapLabel": "Paris",
      "intro": [
        "Henri Rousseau wird am 21. Mai 1844 in Laval im Westen Frankreichs geboren und arbeitet ab 1871 an einer Zollstelle am Rand von Paris.",
        "Er bringt sich das Malen selbst bei, stellt ab 1886 im Salon der Unabhängigen aus und malt ab 1893 nur noch."
      ],
      "works": [
        {
          "pid": "hrrendezvous",
          "text": [
            "Tief in einem herbstlichen Wald treffen sich zwei Reiter in altmodischer Kleidung.",
            "Die kahlen Zweige der Bäume bilden über ihnen ein feines Netz vor dem hellen Himmel."
          ],
          "fact": "1889. National Gallery of Art, Washington."
        },
        {
          "pid": "hrsawmill",
          "text": [
            "Hinter einer Hecke stehen die hellen Gebäude eines Sägewerks mit einem rauchenden Schornstein.",
            "Eine Strasse führt an Bäumen und Wiesen vorbei aus der Stadt hinaus."
          ],
          "fact": "um 1893–1895. Art Institute of Chicago."
        },
        {
          "pid": "hrboy",
          "text": [
            "Ein kleiner Junge in dunklem Kittel und gestreiften Strümpfen sitzt auf spitzen Felsen.",
            "Er wirkt so gross wie ein Riese, denn die Felsen sehen aus wie ein ganzes Gebirge."
          ],
          "fact": "1895–1897. National Gallery of Art, Washington."
        },
        {
          "pid": "hroutskirts",
          "text": [
            "Ein Kanal mit einer kleinen Brücke führt an einem Haus mit rotem Dach vorbei, am Ufer gehen Leute spazieren.",
            "Über allem ziehen grosse weisse Wolken durch den blauen Himmel."
          ],
          "fact": "um 1897–1905. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "rss2",
      "place": "Späte Jahre: Flussufer und Urwälder",
      "when": "1906–1910",
      "map": {
        "x": 124,
        "y": 64
      },
      "mapLabel": "Paris",
      "intro": [
        "In seinen letzten Jahren malt Rousseau grosse Urwaldbilder, obwohl er Frankreich nie verlassen hat.",
        "Die Pflanzen studiert er in den Gewächshäusern des Jardin des Plantes in Paris und in Büchern mit Abbildungen."
      ],
      "works": [
        {
          "pid": "hrbievre",
          "text": [
            "Hohe, schlanke Bäume stehen an einem Weg entlang der Bièvre, einem kleinen Fluss im Süden von Paris.",
            "Rousseau malt jedes Blatt und jeden Ast mit grosser Sorgfalt."
          ],
          "fact": "um 1908–1909. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hrequatorial",
          "text": [
            "Riesige Blätter in vielen Grüntönen füllen das ganze Bild, dazwischen leuchten rosa und weisse Blüten.",
            "Unten im Dickicht späht ein Tier zwischen den Pflanzen hervor."
          ],
          "fact": "1909. National Gallery of Art, Washington."
        },
        {
          "pid": "hrmonkeys",
          "text": [
            "Affen klettern und sitzen in einem dichten Wald aus Palmen, Gräsern und roten Pflanzen.",
            "Rousseau malt das Bild in seinem letzten Lebensjahr."
          ],
          "fact": "1910. National Gallery of Art, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
