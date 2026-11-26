// v10.43 Georges Seurat life journey (1859–1891). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "sesaintouen",
    "title": "Landschaft bei Saint-Ouen",
    "artist": "Georges Seurat",
    "year": "1878–1879",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1980.342: https://www.metmuseum.org/art/collection/search/437657, CC0 (gemeinfrei)"
  },
  {
    "id": "separapet",
    "title": "Mann an einer Brüstung",
    "artist": "Georges Seurat",
    "year": "um 1881",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2019.141.17: https://www.metmuseum.org/art/collection/search/438123, CC0 (gemeinfrei)"
  },
  {
    "id": "sepontaubert",
    "title": "Der Wald bei Pontaubert",
    "artist": "Georges Seurat",
    "year": "1881",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1985.237: https://www.metmuseum.org/art/collection/search/437655, CC0 (gemeinfrei)"
  },
  {
    "id": "semower",
    "title": "Der Mäher",
    "artist": "Georges Seurat",
    "year": "1881–1882",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1975.1.206: https://www.metmuseum.org/art/collection/search/459116, CC0 (gemeinfrei)"
  },
  {
    "id": "sehaymakers",
    "title": "Heuerinnen in Montfermeil",
    "artist": "Georges Seurat",
    "year": "um 1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.48: https://www.nga.gov/collection/art-object-page.164958.html, CC0 (gemeinfrei)"
  },
  {
    "id": "sehoe",
    "title": "Bauer mit Hacke",
    "artist": "Georges Seurat",
    "year": "um 1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.49: https://www.nga.gov/collection/art-object-page.164959.html, CC0 (gemeinfrei)"
  },
  {
    "id": "sestonebreaker",
    "title": "Der Steinklopfer",
    "artist": "Georges Seurat",
    "year": "um 1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.50: https://www.nga.gov/collection/art-object-page.164960.html, CC0 (gemeinfrei)"
  },
  {
    "id": "sehaystacks",
    "title": "Heuhaufen",
    "artist": "Georges Seurat",
    "year": "um 1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.58: https://www.nga.gov/collection/art-object-page.164968.html, CC0 (gemeinfrei)"
  },
  {
    "id": "segardener",
    "title": "Der Gärtner",
    "artist": "Georges Seurat",
    "year": "1882–1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 67.187.102: https://www.metmuseum.org/art/collection/search/437656, CC0 (gemeinfrei)"
  },
  {
    "id": "sewateringcan",
    "title": "Die Giesskanne – Garten in Le Raincy",
    "artist": "Georges Seurat",
    "year": "um 1883",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.51: https://www.nga.gov/collection/art-object-page.164961.html, CC0 (gemeinfrei)"
  },
  {
    "id": "sesummer",
    "title": "Sommerlandschaft",
    "artist": "Georges Seurat",
    "year": "1883",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.52: https://www.nga.gov/collection/art-object-page.164962.html, CC0 (gemeinfrei)"
  },
  {
    "id": "seseine",
    "title": "Blick auf die Seine",
    "artist": "Georges Seurat",
    "year": "1882–1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 59.16.5: https://www.metmuseum.org/art/collection/search/437659, CC0 (gemeinfrei)"
  },
  {
    "id": "sefigures",
    "title": "Figuren in einer Landschaft",
    "artist": "Georges Seurat",
    "year": "um 1883",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.53: https://www.nga.gov/collection/art-object-page.164963.html, CC0 (gemeinfrei)"
  },
  {
    "id": "sejattestudy",
    "title": "Studie für «Ein Sonntagnachmittag auf der Insel La Grande Jatte»",
    "artist": "Georges Seurat",
    "year": "1884",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 51.112.6: https://www.metmuseum.org/art/collection/search/437658, CC0 (gemeinfrei)"
  },
  {
    "id": "sejattewood",
    "title": "Studie für «Ein Sonntagnachmittag auf der Insel La Grande Jatte» (auf Holz)",
    "artist": "Georges Seurat",
    "year": "1884",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1975.1.207: https://www.metmuseum.org/art/collection/search/459117, CC0 (gemeinfrei)"
  },
  {
    "id": "sejattesketch",
    "title": "Ölskizze für «Ein Sonntagnachmittag auf der Insel La Grande Jatte»",
    "artist": "Georges Seurat",
    "year": "1884",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1981.15: https://www.artic.edu/artworks/61616, CC0 (gemeinfrei)"
  },
  {
    "id": "sejattenga",
    "title": "Studie für «La Grande Jatte»",
    "artist": "Georges Seurat",
    "year": "1884–1885",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.81: https://www.nga.gov/collection/art-object-page.52225.html, CC0 (gemeinfrei)"
  },
  {
    "id": "sejattefigures",
    "title": "Figurenstudie für «La Grande Jatte»",
    "artist": "Georges Seurat",
    "year": "1884–1885",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.57: https://www.nga.gov/collection/art-object-page.164967.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jatte",
    "title": "Ein Sonntagnachmittag auf der Insel La Grande Jatte",
    "artist": "Georges Seurat",
    "year": "1884–1886",
    "museum": "The Art Institute of Chicago",
    "source": "Wikimedia Commons: «Georges Seurat - A Sunday on La Grande Jatte -- 1884 - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sehonfleur",
    "title": "Der Leuchtturm von Honfleur",
    "artist": "Georges Seurat",
    "year": "1886",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.33: https://www.nga.gov/collection/art-object-page.61383.html, CC0 (gemeinfrei)"
  },
  {
    "id": "seportenbessin",
    "title": "Meeresküste bei Port-en-Bessin, Normandie",
    "artist": "Georges Seurat",
    "year": "1888",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1972.9.21: https://www.nga.gov/collection/art-object-page.53139.html, CC0 (gemeinfrei)"
  },
  {
    "id": "seseascape",
    "title": "Meer bei Gravelines",
    "artist": "Georges Seurat",
    "year": "1890",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2012.89.8: https://www.nga.gov/collection/art-object-page.157929.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gravelines",
    "title": "Der Kanal von Gravelines am Abend",
    "artist": "Georges Seurat",
    "year": "1890",
    "museum": "The Museum of Modern Art (MoMA), New York",
    "source": "Wikimedia Commons: «Georges-Pierre Seurat - The Channel at Gravelines, Evening - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "segrayweather",
    "title": "Graues Wetter, Grande Jatte",
    "artist": "Georges Seurat",
    "year": "um 1886–1888",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2002.62.3: https://www.metmuseum.org/art/collection/search/438015, CC0 (gemeinfrei)"
  },
  {
    "id": "secircus",
    "title": "Zirkusparade",
    "artist": "Georges Seurat",
    "year": "1887–1888",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 61.101.17: https://www.metmuseum.org/art/collection/search/437654, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "seurat",
  "name": "Georges Seurat",
  "title": "Georges Seurats Lebensweg",
  "life": "1859–1891",
  "part": "Paris, die Felder, die Seine und das Meer",
  "subtitle": "Farbe in kleinen Punkten",
  "cover": "sehonfleur",
  "intro": "Reise mit Georges Seurat durch sein kurzes Leben: von den kleinen Ölskizzen auf Holz über die Studien zur Insel La Grande Jatte bis zu den Häfen am Ärmelkanal und der Zirkusparade. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Georges Seurat stirbt am 29. März 1891 in Paris, nur 31 Jahre alt.",
    "Mit seinen Farbpunkten hat er eine eigene Malweise begründet, die andere Maler weiterführen."
  ],
  "epilogue": "Georges Seurat stirbt am 29. März 1891 in Paris. Der Weg führt von den ersten Ölskizzen über die Grande Jatte bis ans Meer.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,62 C58,52 86,52 108,40 C126,28 148,12 170,14 C192,20 210,34 214,52 C210,70 200,86 206,104 C212,122 214,140 196,148 C170,154 140,150 114,152 C96,154 80,148 78,132 C80,112 70,96 52,88 C40,82 30,72 40,62 Z"
    ]
  },
  "stations": [
    {
      "id": "ses1",
      "place": "Paris: Lehrjahre",
      "when": "1859–1881",
      "map": {
        "x": 148,
        "y": 48
      },
      "mapLabel": "Paris",
      "intro": [
        "Georges Seurat wird am 2. Dezember 1859 in Paris geboren und studiert ab 1878 an der Kunstakademie.",
        "Er liest Bücher über Farben und Licht und malt erste kleine Landschaften."
      ],
      "works": [
        {
          "pid": "sesaintouen",
          "text": [
            "Eine grüne Wiese zieht sich zu sanften Hügeln, vorn liegt ein Stapel Holz.",
            "Es ist eines der frühesten Ölbilder des jungen Seurat, noch ganz ohne Punkte."
          ],
          "fact": "1878–1879. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "separapet",
          "text": [
            "Ein Mann in dunklem Mantel lehnt an einer Mauer, links steht ein dunkler Baumstamm.",
            "Seurat malt die Szene klein und schnell auf ein Holzbrett."
          ],
          "fact": "um 1881. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "sepontaubert",
          "text": [
            "Schlanke junge Baumstämme stehen in einem lichten grünen Wald in Burgund.",
            "Viele kleine Farbtupfer lassen schon die spätere Punktmalerei ahnen."
          ],
          "fact": "1881. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "ses2",
      "place": "Bauern und Felder",
      "when": "1881–1883",
      "map": {
        "x": 158,
        "y": 46
      },
      "mapLabel": "Montfermeil",
      "intro": [
        "In den Dörfern östlich von Paris malt Seurat Bauern bei der Arbeit, Heuhaufen und Gärten.",
        "Die kleinen Bilder auf Holzbrettchen passen in den Deckel seines Malkastens."
      ],
      "works": [
        {
          "pid": "semower",
          "text": [
            "Ein Mann in weissem Hemd mäht mit der Sense ein goldgelbes Feld.",
            "Seurat zeigt ihn ganz in seine Bewegung vertieft, ohne Gesicht."
          ],
          "fact": "1881–1882. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "sehaymakers",
          "text": [
            "Zwei Frauen mit Kopftüchern wenden mit langen Rechen das Heu.",
            "Das Sonnenlicht macht ihre Kleider fast weiss."
          ],
          "fact": "um 1882. National Gallery of Art, Washington."
        },
        {
          "pid": "sehoe",
          "text": [
            "Ein Bauer beugt sich tief über das Feld und arbeitet mit der Hacke.",
            "Vorn leuchten grüne Pflanzen, hinten rosa und braune Streifen von Erde."
          ],
          "fact": "um 1882. National Gallery of Art, Washington."
        },
        {
          "pid": "sestonebreaker",
          "text": [
            "Ein Mann mit Mütze hebt den Hammer, um Steine für den Strassenbau zu zerschlagen.",
            "Der Steinhaufen leuchtet in warmem Rosa und Orange."
          ],
          "fact": "um 1882. National Gallery of Art, Washington."
        },
        {
          "pid": "sehaystacks",
          "text": [
            "Mehrere spitze Heuhaufen stehen auf einem weiten Feld unter hellem Himmel.",
            "Am Horizont sind kleine Bäume und Häuser zu sehen."
          ],
          "fact": "um 1882. National Gallery of Art, Washington."
        },
        {
          "pid": "segardener",
          "text": [
            "Ein Gärtner mit weissem Hut bückt sich über ein Beet im sonnigen Garten.",
            "Licht und Schatten malt Seurat mit kurzen, gekreuzten Pinselstrichen."
          ],
          "fact": "1882–1883. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "sewateringcan",
          "text": [
            "Eine graue Giesskanne steht am Rand eines sonnigen Gartenwegs.",
            "Der Garten gehört zum Landhaus der Familie Seurat in Le Raincy bei Paris."
          ],
          "fact": "um 1883. National Gallery of Art, Washington."
        },
        {
          "pid": "sesummer",
          "text": [
            "Eine kleine Gestalt geht über eine weite Sommerwiese mit hohem Gras.",
            "Am Horizont ragt ein dunkler, spitzer Baum in den Himmel."
          ],
          "fact": "1883. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "seurat1",
      "place": "Die Seine und La Grande Jatte",
      "when": "1882–1886",
      "map": {
        "x": 144,
        "y": 44
      },
      "mapLabel": "Grande Jatte",
      "intro": [
        "An der Seine vor Paris malt Seurat viele Studien für sein grosses Bild von der Insel La Grande Jatte.",
        "Dafür setzt er die Farben in kleinen Punkten nebeneinander, die sich erst im Auge mischen."
      ],
      "works": [
        {
          "pid": "seseine",
          "text": [
            "Zwei Männer stehen in einem kleinen Boot auf der Seine, dahinter liegt ein Lastkahn.",
            "Am anderen Ufer stehen Häuser und Fabriken."
          ],
          "fact": "1882–1883. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "sefigures",
          "text": [
            "Eine Frau kniet im Gras, andere Gestalten stehen mit Sonnenschirmen auf der Wiese.",
            "Im Hintergrund leuchten die hellen Häuser eines Ortes."
          ],
          "fact": "um 1883. National Gallery of Art, Washington."
        },
        {
          "pid": "sejattestudy",
          "text": [
            "Fast alle Figuren des grossen Bildes sind hier schon an ihrem Platz, im Schatten und in der Sonne.",
            "Diese Studie ist eine der letzten und genauesten vor dem fertigen Bild."
          ],
          "fact": "1884. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "sejattewood",
          "text": [
            "Am Ufer der Insel sitzen nur wenige Menschen im Schatten der Bäume.",
            "Seurat malt solche kleinen Brettchen direkt vor Ort, um Licht und Farben festzuhalten."
          ],
          "fact": "1884. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "sejattesketch",
          "text": [
            "Rechts steht schon das Paar mit Zylinder und Sonnenschirm, links sitzen Menschen im Gras.",
            "Die Skizze hängt heute im selben Museum in Chicago wie das grosse Bild."
          ],
          "fact": "1884. Art Institute of Chicago."
        },
        {
          "pid": "sejattenga",
          "text": [
            "Durch die Bäume schimmert das blaue Wasser der Seine mit einem weissen Segel.",
            "Vorn sitzen zwei Gestalten im hellgrünen Gras."
          ],
          "fact": "1884–1885. National Gallery of Art, Washington."
        },
        {
          "pid": "sejattefigures",
          "text": [
            "Zwei Frauen sitzen im Gras, eine von ihnen hält einen Blumenstrauss.",
            "Links steht ein kleines Mädchen in Weiss neben einem Baumstamm."
          ],
          "fact": "1884–1885. National Gallery of Art, Washington."
        },
        {
          "pid": "jatte",
          "text": [
            "Pariser erholen sich an einem Sonntag auf einer Insel in der Seine.",
            "Seurat arbeitete rund zwei Jahre an dem grossen Bild, das etwa zwei auf drei Meter misst."
          ],
          "fact": "1884–1886. The Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "ses4",
      "place": "Sommer am Meer",
      "when": "1886–1890",
      "map": {
        "x": 150,
        "y": 14
      },
      "mapLabel": "Ärmelkanal",
      "intro": [
        "Fast jeden Sommer reist Seurat an die Küste des Ärmelkanals, nach Honfleur, Port-en-Bessin und Gravelines.",
        "Dort malt er stille Häfen, Leuchttürme und das Meer, manchmal mit einem gemalten Rahmen aus Punkten."
      ],
      "works": [
        {
          "pid": "sehonfleur",
          "text": [
            "Ein weisser Leuchtturm steht am Hafen von Honfleur, vorn ruht ein Boot auf Holzböcken am Strand.",
            "Der helle Sand und das ruhige Meer sind ganz aus kleinen Punkten gemalt."
          ],
          "fact": "1886. National Gallery of Art, Washington."
        },
        {
          "pid": "seportenbessin",
          "text": [
            "Ein grüner Hügel fällt steil zum ruhigen blauen Meer ab.",
            "Auf dem Gras liegen gelbe Flecken aus Sonnenlicht und Schatten von Wolken."
          ],
          "fact": "1888. National Gallery of Art, Washington."
        },
        {
          "pid": "seseascape",
          "text": [
            "Ein Strand, das Meer und der Himmel liegen in ruhigen hellen Streifen übereinander.",
            "Seurat malt um das kleine Bild einen dunkelblauen Rahmen aus Punkten."
          ],
          "fact": "1890. National Gallery of Art, Washington."
        },
        {
          "pid": "gravelines",
          "text": [
            "Seurat verbrachte den Sommer 1890 in dem kleinen Hafen Gravelines an der Nordsee.",
            "Am Abend wird das Wasser hell, der Himmel rosa, und ganz vorn lehnt ein grosser Anker am Kai."
          ],
          "fact": "1890. The Museum of Modern Art (MoMA), New York."
        }
      ]
    },
    {
      "id": "ses5",
      "place": "Paris: Zirkus und letzte Jahre",
      "when": "1886–1891",
      "map": {
        "x": 150,
        "y": 48
      },
      "mapLabel": "Paris",
      "intro": [
        "In Paris malt Seurat nun auch Abendszenen bei künstlichem Licht, etwa die Parade vor einem Zirkus.",
        "Junge Maler wie Paul Signac übernehmen seine Malweise mit Farbpunkten."
      ],
      "works": [
        {
          "pid": "segrayweather",
          "text": [
            "An einem trüben Tag liegen Boote am Ufer der Seine, Bäume rahmen den Blick.",
            "Seurat malt später einen Rand aus Punkten um das Bild."
          ],
          "fact": "um 1886–1888. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "secircus",
          "text": [
            "Vor einem Zirkus spielt ein Musiker mit Posaune im Licht von Gaslampen, um Zuschauer anzulocken.",
            "Es ist das erste Bild, in dem Seurat eine Szene bei Nacht malt."
          ],
          "fact": "1887–1888. Metropolitan Museum of Art, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
