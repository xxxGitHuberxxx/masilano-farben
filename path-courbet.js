// v10.43 Gustave Courbet life journey (1819–1877). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "gcladies",
    "title": "Die jungen Damen aus dem Dorf",
    "artist": "Gustave Courbet",
    "year": "1851–1852",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 40.175: https://www.metmuseum.org/art/collection/search/438820, CC0 (gemeinfrei)"
  },
  {
    "id": "gcbretonnerie",
    "title": "La Bretonnerie im Département Indre",
    "artist": "Gustave Courbet",
    "year": "1856",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1972.9.8: https://www.nga.gov/collection/art-object-page.53126.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gccliffs",
    "title": "Klippen am Meer: kleiner Strand bei Sonnenaufgang",
    "artist": "Gustave Courbet",
    "year": "1865",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2001.333: https://www.artic.edu/artworks/153993, CC0 (gemeinfrei)"
  },
  {
    "id": "gcblackrocks",
    "title": "Die schwarzen Felsen bei Trouville",
    "artist": "Gustave Courbet",
    "year": "1865–1866",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2011.51.1: https://www.nga.gov/collection/art-object-page.154844.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gccalm66",
    "title": "Ruhige See",
    "artist": "Gustave Courbet",
    "year": "1866",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.10: https://www.nga.gov/collection/art-object-page.66408.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gccalm69",
    "title": "Ruhige See",
    "artist": "Gustave Courbet",
    "year": "1869",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 29.100.566: https://www.metmuseum.org/art/collection/search/436005, CC0 (gemeinfrei)"
  },
  {
    "id": "gchautepierre",
    "title": "Der Felsen von Hautepierre",
    "artist": "Gustave Courbet",
    "year": "um 1869",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1967.140: https://www.artic.edu/artworks/27027, CC0 (gemeinfrei)"
  },
  {
    "id": "gcbeach",
    "title": "Strand in der Normandie",
    "artist": "Gustave Courbet",
    "year": "um 1872–1875",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.10: https://www.nga.gov/collection/art-object-page.46485.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gcboats",
    "title": "Boote am Strand von Étretat",
    "artist": "Gustave Courbet",
    "year": "um 1872–1875",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1972.9.7: https://www.nga.gov/collection/art-object-page.53125.html, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "courbet",
  "name": "Gustave Courbet",
  "title": "Gustave Courbets Lebensweg",
  "life": "1819–1877",
  "part": "Land und Meer",
  "subtitle": "Von Ornans an die Küste der Normandie",
  "cover": "gccalm69",
  "intro": "Reise mit Gustave Courbet durch sein Leben: von seinem Heimatort Ornans im Osten Frankreichs zu den Klippen und Stränden der Normandie. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Gustave Courbet stirbt 1877 in La Tour-de-Peilz in der Schweiz.",
    "Seine Landschaften und Meerbilder hängen heute in Museen auf der ganzen Welt."
  ],
  "epilogue": "Gustave Courbet stirbt 1877. Der Weg führt von Ornans und dem Land an der Indre an die Küste der Normandie, nach Trouville und Étretat.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,62 C58,52 86,52 108,40 C126,28 148,12 170,14 C192,20 210,34 214,52 C210,70 200,86 206,104 C212,122 214,140 196,148 C170,154 140,150 114,152 C96,154 80,148 78,132 C80,112 70,96 52,88 C40,82 30,72 40,62 Z"
    ]
  },
  "stations": [
    {
      "id": "gcs1",
      "place": "Ornans und das Land",
      "when": "1851–1856",
      "map": {
        "x": 196,
        "y": 72
      },
      "mapLabel": "Ornans",
      "intro": [
        "Gustave Courbet wird 1819 in Ornans im Osten Frankreichs geboren.",
        "Am Pariser Salon von 1850–51 erregt er Aufsehen mit grossen Bildern aus dem Alltag seines Heimatorts."
      ],
      "works": [
        {
          "pid": "gcladies",
          "text": [
            "Courbets drei Schwestern spazieren in einem kleinen Tal bei Ornans, und eine von ihnen reicht einem Kind, das die Kühe hütet, eine Gabe.",
            "Als das Bild 1852 im Salon hängt, spotten Kritiker über die einfachen Kleider, den Hund und die kleinen Kühe."
          ],
          "fact": "1851–1852. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gcbretonnerie",
          "text": [
            "Ein Bach schlängelt sich durch eine grüne Wiese, dahinter stehen dichte Bäume unter einem blauen Himmel mit weissen Wolken.",
            "Unten links signiert Courbet mit „G.Courbet / 56“."
          ],
          "fact": "1856. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "gcs2",
      "place": "An der Kanalküste",
      "when": "1865–1866",
      "map": {
        "x": 118,
        "y": 40
      },
      "mapLabel": "Normandie",
      "intro": [
        "Courbet stammt aus dem Département Doubs, fern vom Meer, und ist vor allem für Bilder von Felsen, Schluchten und Flüssen seiner Heimat bekannt.",
        "Mitte der 1860er Jahre wendet er sich der Küste am Ärmelkanal zu und malt das Meer."
      ],
      "works": [
        {
          "pid": "gccliffs",
          "text": [
            "Links fällt eine Klippe mit grünem Rand steil zum Kiesstrand ab, und das ruhige Meer glänzt im hellen Morgenlicht.",
            "Unten links steht die Signatur „G. Courbet“."
          ],
          "fact": "1865. Art Institute of Chicago."
        },
        {
          "pid": "gcblackrocks",
          "text": [
            "Über dunklen Felsen am Ufer leuchtet ein rötlicher, wolkiger Himmel, und das Meer liegt ruhig.",
            "Das Bild entsteht in den Jahren, in denen Courbet an der Kanalküste das Meer malt."
          ],
          "fact": "1865–1866. National Gallery of Art, Washington."
        },
        {
          "pid": "gccalm66",
          "text": [
            "Ein weiter, heller Himmel nimmt fast das ganze Bild ein, darunter liegen ein türkisfarbener Streifen Meer und der Sandstrand.",
            "Unten links steht „’66 / Gustave Courbet“."
          ],
          "fact": "1866. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "gcs3",
      "place": "Der Sommer in Étretat",
      "when": "1869",
      "map": {
        "x": 112,
        "y": 36
      },
      "mapLabel": "Étretat",
      "intro": [
        "Im August 1869 besucht Courbet Étretat an der Küste der Normandie.",
        "Die meisten seiner Meerbilder dieser Zeit zeigen hohe, brechende Wellen."
      ],
      "works": [
        {
          "pid": "gccalm69",
          "text": [
            "Bei Ebbe hat sich das Meer zurückgezogen, und zwei kleine Boote liegen am Strand.",
            "Der riesige Wolkenhimmel türmt sich über schmalen Streifen von Wasser und Sand."
          ],
          "fact": "1869. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gchautepierre",
          "text": [
            "Eine mächtige Felswand mit grünem Rand erhebt sich über Bäumen und Häusern mit roten Dächern.",
            "Unten rechts signiert Courbet mit „G. Courbet“."
          ],
          "fact": "um 1869. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "gcs4",
      "place": "Boote am Strand",
      "when": "1872–1875",
      "map": {
        "x": 114,
        "y": 38
      },
      "mapLabel": "Normandie",
      "intro": [
        "Auch in den 1870er Jahren malt Courbet Strände und Klippen der Normandie.",
        "Fischerboote liegen auf dem Kies, hinter ihnen ragen helle Felswände auf."
      ],
      "works": [
        {
          "pid": "gcbeach",
          "text": [
            "Links ragen hohe Felsen auf, davor liegen Fischerboote auf dem hellen Strand, und hinten glänzt das Meer.",
            "Früher trug das Bild im Museum den Titel „Strand bei Étretat“."
          ],
          "fact": "um 1872–1875. National Gallery of Art, Washington."
        },
        {
          "pid": "gcboats",
          "text": [
            "Mehrere Fischerboote liegen auf dem Kiesstrand, rechts erheben sich helle Klippen unter grauen Wolken.",
            "Unten rechts steht die Signatur „G. Courbet“."
          ],
          "fact": "um 1872–1875. National Gallery of Art, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
