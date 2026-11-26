// v10.43 Odilon Redon life journey (1840–1916). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "odvillage",
    "title": "Dorf am Meer in der Bretagne",
    "artist": "Odilon Redon",
    "year": "um 1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2012.89.7: https://www.nga.gov/collection/art-object-page.157928.html, CC0 (gemeinfrei)"
  },
  {
    "id": "odbreton",
    "title": "Bretonisches Dorf",
    "artist": "Odilon Redon",
    "year": "um 1890",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1994.59.11: https://www.nga.gov/collection/art-object-page.89684.html, CC0 (gemeinfrei)"
  },
  {
    "id": "odsita",
    "title": "Sita",
    "artist": "Odilon Redon",
    "year": "um 1893",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1954.320: https://www.artic.edu/artworks/80594, CC0 (gemeinfrei)"
  },
  {
    "id": "odbouquet",
    "title": "Blumenstrauss",
    "artist": "Odilon Redon",
    "year": "um 1900–1905",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 56.50: https://www.metmuseum.org/art/collection/search/437379, CC0 (gemeinfrei)"
  },
  {
    "id": "odwild",
    "title": "Wildblumen",
    "artist": "Odilon Redon",
    "year": "um 1905",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1961.12.1: https://www.nga.gov/collection/art-object-page.46299.html, CC0 (gemeinfrei)"
  },
  {
    "id": "odpansies",
    "title": "Stiefmütterchen",
    "artist": "Odilon Redon",
    "year": "um 1905",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1961.14.1: https://www.nga.gov/collection/art-object-page.46301.html, CC0 (gemeinfrei)"
  },
  {
    "id": "odetruscan",
    "title": "Etruskische Vase mit Blumen",
    "artist": "Odilon Redon",
    "year": "1900–1910",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 53.140.5: https://www.metmuseum.org/art/collection/search/437381, CC0 (gemeinfrei)"
  },
  {
    "id": "odstilllife",
    "title": "Stillleben mit Blumen",
    "artist": "Odilon Redon",
    "year": "1905",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1988.141.22: https://www.artic.edu/artworks/110982, CC0 (gemeinfrei)"
  },
  {
    "id": "odvase05",
    "title": "Blumenvase",
    "artist": "Odilon Redon",
    "year": "um 1905",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1935.233: https://clevelandart.org/art/1935.233, CC0 (gemeinfrei)"
  },
  {
    "id": "odpink",
    "title": "Blumenvase (rosa Hintergrund)",
    "artist": "Odilon Redon",
    "year": "um 1906",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 59.16.3: https://www.metmuseum.org/art/collection/search/437382, CC0 (gemeinfrei)"
  },
  {
    "id": "odviolette",
    "title": "Violette Heymann",
    "artist": "Odilon Redon",
    "year": "1910",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1926.1976: https://clevelandart.org/art/1926.1976, CC0 (gemeinfrei)"
  },
  {
    "id": "odflowers10",
    "title": "Blumen in einer Vase",
    "artist": "Odilon Redon",
    "year": "um 1910",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.56: https://www.nga.gov/collection/art-object-page.52200.html, CC0 (gemeinfrei)"
  },
  {
    "id": "odlargevase",
    "title": "Grosse Vase mit Blumen",
    "artist": "Odilon Redon",
    "year": "um 1912",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1990.64.1: https://www.nga.gov/collection/art-object-page.71556.html, CC0 (gemeinfrei)"
  },
  {
    "id": "odbutterflies",
    "title": "Fünf Schmetterlinge",
    "artist": "Odilon Redon",
    "year": "um 1912",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.113: https://www.nga.gov/collection/art-object-page.66514.html, CC0 (gemeinfrei)"
  },
  {
    "id": "odvase16",
    "title": "Blumenvase",
    "artist": "Odilon Redon",
    "year": "1916",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1958.46: https://clevelandart.org/art/1958.46, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "redon",
  "name": "Odilon Redon",
  "title": "Odilon Redons Lebensweg",
  "life": "1840–1916",
  "part": "Vom Schwarz zur Farbe",
  "subtitle": "Blumen wie im Traum",
  "cover": "odbouquet",
  "intro": "Reise mit Odilon Redon durch sein Leben: von stillen Dörfern in der Bretagne zu leuchtenden Blumensträussen und Schmetterlingen. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Odilon Redon stirbt 1916 im Alter von 76 Jahren.",
    "Seine leuchtenden Blumenbilder sind bis heute in Museen auf der ganzen Welt zu sehen."
  ],
  "epilogue": "Odilon Redon stirbt 1916. Der Weg führt von der Bretagne über die Hinwendung zur Farbe bis zu den Blumen und Schmetterlingen seiner späten Jahre.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,62 C58,52 86,52 108,40 C126,28 148,12 170,14 C192,20 210,34 214,52 C210,70 200,86 206,104 C212,122 214,140 196,148 C170,154 140,150 114,152 C96,154 80,148 78,132 C80,112 70,96 52,88 C40,82 30,72 40,62 Z"
    ]
  },
  "stations": [
    {
      "id": "ods1",
      "place": "Kindheit im Médoc und Landschaften",
      "when": "1880–1890",
      "map": {
        "x": 56,
        "y": 70
      },
      "mapLabel": "Bretagne",
      "intro": [
        "Odilon Redon wird am 20. April 1840 in Bordeaux geboren und verbringt als zartes Kind seine Jugend auf dem Familiengut Peyrelebade im Médoc, zwischen Heide und Sümpfen.",
        "Mit 20 Jahren lernt er den Botaniker Armand Clavaud kennen, und er zeichnet nach der Natur an den Dünen der Atlantikküste."
      ],
      "works": [
        {
          "pid": "odvillage",
          "text": [
            "Helle Häuser reihen sich am Ufer einer blauen Bucht, und vorn liegt ein breiter Streifen Sand.",
            "Redon malt das kleine Bild in Öl auf Karton und signiert es unten rechts mit „ODILON REDON“."
          ],
          "fact": "um 1880. National Gallery of Art, Washington."
        },
        {
          "pid": "odbreton",
          "text": [
            "Weisse Häuser mit grauen Dächern stehen hinter einer grünen Wiese, und am blauen Himmel ziehen weisse Wolken.",
            "Unten links signiert Redon in roter und violetter Farbe mit „ODILON REDON“."
          ],
          "fact": "um 1890. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "ods2",
      "place": "Vom Schwarz zur Farbe",
      "when": "1893–1905",
      "map": {
        "x": 150,
        "y": 46
      },
      "mapLabel": "Paris",
      "intro": [
        "Bekannt wird Redon zuerst mit seinen „Noirs“, Zeichnungen in schwarzer Kohle, die er Anfang der 1880er Jahre erstmals in Paris zeigt.",
        "In den 1890er Jahren wendet er sich der Farbe zu, vor allem dem Pastell, das pudrig ist wie Kohle."
      ],
      "works": [
        {
          "pid": "odsita",
          "text": [
            "Eine Frau mit rotbraunem Haar blickt im Profil zur Seite, umgeben von leuchtendem Blau und Grün, links schwebt eine goldene Form.",
            "Redon arbeitet hier mit Pastell und etwas Kreide über Kohle, so wie er vom Schwarz zur Farbe findet."
          ],
          "fact": "um 1893. Art Institute of Chicago."
        },
        {
          "pid": "odbouquet",
          "text": [
            "Aus einer blauen Vase quillt ein üppiger Strauss mit Blüten, die an Flieder, Mohn und Margeriten erinnern, dazwischen flattern kleine Schmetterlinge.",
            "Redon, eng befreundet mit dem Botaniker Armand Clavaud, malt das grosse Pastell mit dem Staunen eines Naturforschers."
          ],
          "fact": "um 1900–1905. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "odwild",
          "text": [
            "In einer dunkelgrünen Vase stehen grosse orangerote Blüten, gelbe Sterne und kleine blaue Blumen vor einem warmen braunen Grund.",
            "Redon zeichnet das Pastell auf braunes Papier, das mit Sägemehl beschichtet ist."
          ],
          "fact": "um 1905. National Gallery of Art, Washington."
        },
        {
          "pid": "odpansies",
          "text": [
            "Blaue, violette und gelbe Stiefmütterchen leuchten in einer schlichten braunen Vase.",
            "Viel brauner Grund bleibt frei, so dass die kleinen Blüten umso stärker strahlen."
          ],
          "fact": "um 1905. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "ods3",
      "place": "Blumen wie im Traum",
      "when": "1900–1910",
      "map": {
        "x": 152,
        "y": 48
      },
      "mapLabel": "Paris",
      "intro": [
        "Um 1900 füllen leuchtende Blüten und Blätter seine Pastelle und Gemälde.",
        "Blumenstillleben bestimmen die letzten fünfzehn Jahre seines Schaffens und bringen ihm seinen grössten Verkaufserfolg."
      ],
      "works": [
        {
          "pid": "odetruscan",
          "text": [
            "In einer braunen Vase mit dunklem Muster stehen grosse, fantastische Blüten in Violett, Gold und Weiss.",
            "Redon malt das Bild nicht in Öl, sondern in Tempera auf Leinwand."
          ],
          "fact": "1900–1910. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "odstilllife",
          "text": [
            "Aus einer braunen Vase wachsen feine Zweige mit roten, weissen und blauen Blüten, und daneben schweben kleine Schmetterlinge.",
            "Redon malt das Bild in Öl auf Leinwand und schreibt unten rechts „Odilon Redon“."
          ],
          "fact": "1905. Art Institute of Chicago."
        },
        {
          "pid": "odvase05",
          "text": [
            "In einer hellen Vase drängen sich rote, blaue und weisse Blüten mit grünen Blättern vor einem goldbraunen Grund.",
            "Redon möchte „die Natur, wie im Traum gesehen“ malen, und signiert unten rechts mit „odilon redon“."
          ],
          "fact": "um 1905. Cleveland Museum of Art."
        },
        {
          "pid": "odpink",
          "text": [
            "Ein bunter Strauss mit orangen, roten, gelben und weissen Blüten steht in einer weissen Vase vor einem zarten rosa Grund.",
            "Redon malt das Bild in Öl auf Leinwand, und die Blüten scheinen im hellen Licht zu schweben."
          ],
          "fact": "um 1906. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "ods4",
      "place": "Bildnisse, Blumen und Schmetterlinge",
      "when": "1910–1916",
      "map": {
        "x": 150,
        "y": 50
      },
      "mapLabel": "Paris",
      "intro": [
        "Später malt Redon auch Pastellbildnisse von Frauen mit Blumen, oft als Auftragswerke.",
        "Nach 1912 verzichtet er bei seinen Pastellen auf Fixiermittel, damit die Farben ihren Glanz behalten."
      ],
      "works": [
        {
          "pid": "odviolette",
          "text": [
            "Ein Mädchen in hellgrünem Kleid sitzt im Profil neben einer Wolke aus bunten Blüten in Blau, Violett, Rot und Gelb.",
            "Es ist die junge Nichte des Pariser Sammlers Marcel Kapferer; Redon zeichnet das Bildnis mit Pastell auf graues Papier."
          ],
          "fact": "1910. Cleveland Museum of Art."
        },
        {
          "pid": "odflowers10",
          "text": [
            "Rote, blaue und weisse Blüten stehen in einer goldbraunen Vase vor einem hellen, cremefarbenen Grund.",
            "Redon malt das Bild in Öl auf Leinwand und lässt viel Raum um den kleinen Strauss."
          ],
          "fact": "um 1910. National Gallery of Art, Washington."
        },
        {
          "pid": "odlargevase",
          "text": [
            "In einer blauen Vase mit rosa Muster leuchten orange und rosa Blüten vor einem hellen, flirrenden Grund.",
            "Der Pariser Sammler Marcel Kapferer kauft das Bild direkt beim Künstler und leiht es 1924 für eine Ausstellung in Paris aus."
          ],
          "fact": "um 1912. National Gallery of Art, Washington."
        },
        {
          "pid": "odbutterflies",
          "text": [
            "Fünf bunte Schmetterlinge in Blau, Rot, Gelb und Braun schweben über ein helles, fast leeres Blatt.",
            "Redon malt sie mit Aquarell und setzt unten rechts seine Initialen „O.R.“ in brauner Tinte."
          ],
          "fact": "um 1912. National Gallery of Art, Washington."
        },
        {
          "pid": "odvase16",
          "text": [
            "In einer schlanken Vase stehen dunkelrote und violette Blüten mit feinen weissen Zweigen vor einem leuchtend gelben und rosa Grund.",
            "Das Pastell aus Redons letztem Lebensjahr wird 1939 auf der Weltausstellung in New York gezeigt."
          ],
          "fact": "1916. Cleveland Museum of Art."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
