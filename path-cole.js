// v10.43 Thomas Cole life journey (1801–1848). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "tcsunrise",
    "title": "Sonnenaufgang in den Catskills",
    "artist": "Thomas Cole",
    "year": "1826",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1989.24.1: https://www.nga.gov/collection/art-object-page.71025.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tcniagara",
    "title": "Ferner Blick auf die Niagarafälle",
    "artist": "Thomas Cole",
    "year": "1830",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1946.396: https://www.artic.edu/artworks/90048, CC0 (gemeinfrei)"
  },
  {
    "id": "tctivoli",
    "title": "Ansicht bei Tivoli am Morgen",
    "artist": "Thomas Cole",
    "year": "1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 03.27: https://www.metmuseum.org/art/collection/search/10500, CC0 (gemeinfrei)"
  },
  {
    "id": "tcgoblet",
    "title": "Der Pokal des Titanen",
    "artist": "Thomas Cole",
    "year": "1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 04.29.2: https://www.metmuseum.org/art/collection/search/10499, CC0 (gemeinfrei)"
  },
  {
    "id": "tcholyokesketch",
    "title": "Skizze für die Aussicht vom Mount Holyoke",
    "artist": "Thomas Cole",
    "year": "1836",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2014.59: https://www.metmuseum.org/art/collection/search/20639, CC0 (gemeinfrei)"
  },
  {
    "id": "tcoxbow",
    "title": "Aussicht vom Mount Holyoke nach einem Gewitter – Der Oxbow",
    "artist": "Thomas Cole",
    "year": "1836",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 08.228: https://www.metmuseum.org/art/collection/search/10497, CC0 (gemeinfrei)"
  },
  {
    "id": "tccatskill",
    "title": "Am Catskill im Frühherbst",
    "artist": "Thomas Cole",
    "year": "1836–1837",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 95.13.3: https://www.metmuseum.org/art/collection/search/10501, CC0 (gemeinfrei)"
  },
  {
    "id": "tcflorence",
    "title": "Ansicht von Florenz",
    "artist": "Thomas Cole",
    "year": "1837",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1961.39: https://clevelandart.org/art/1961.39, CC0 (gemeinfrei)"
  },
  {
    "id": "tcclouds",
    "title": "Wolken",
    "artist": "Thomas Cole",
    "year": "um 1838",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2013.201: https://www.metmuseum.org/art/collection/search/21693, CC0 (gemeinfrei)"
  },
  {
    "id": "tcschroon",
    "title": "Der Schroon Mountain nach einem Sturm",
    "artist": "Thomas Cole",
    "year": "1838",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1917.1335: https://clevelandart.org/art/1917.1335, CC0 (gemeinfrei)"
  },
  {
    "id": "tccoast",
    "title": "Italienische Küste mit verfallenem Turm",
    "artist": "Thomas Cole",
    "year": "1838",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1993.55.1: https://www.nga.gov/collection/art-object-page.82649.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tcnotch",
    "title": "Der Gebirgspass „The Notch“ in den White Mountains",
    "artist": "Thomas Cole",
    "year": "1839",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1967.8.1: https://www.nga.gov/collection/art-object-page.50727.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tcnewengland",
    "title": "Landschaft in Neuengland",
    "artist": "Thomas Cole",
    "year": "1839",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1900.558: https://www.artic.edu/artworks/57163, CC0 (gemeinfrei)"
  },
  {
    "id": "tcchildhood",
    "title": "Die Reise des Lebens: Kindheit",
    "artist": "Thomas Cole",
    "year": "1842",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1971.16.1: https://www.nga.gov/collection/art-object-page.52450.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tcyouth",
    "title": "Die Reise des Lebens: Jugend",
    "artist": "Thomas Cole",
    "year": "1842",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1971.16.2: https://www.nga.gov/collection/art-object-page.52451.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tccreek",
    "title": "Studie für „Catskill Creek“",
    "artist": "Thomas Cole",
    "year": "um 1844–1845",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1998.67.1: https://www.nga.gov/collection/art-object-page.106485.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tcford",
    "title": "Die Furt in den Bergen",
    "artist": "Thomas Cole",
    "year": "1846",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 15.30.63: https://www.metmuseum.org/art/collection/search/10496, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "cole",
  "name": "Thomas Cole",
  "title": "Thomas Coles Lebensweg",
  "life": "1801–1848",
  "part": "Hudson, Catskills und Italien",
  "subtitle": "Der Gründer der Hudson River School",
  "cover": "tcoxbow",
  "intro": "Reise mit Thomas Cole durch sein Leben: von England an den Hudson River, in die Catskill Mountains und nach Italien. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Thomas Cole stirbt am 11. Februar 1848 in Catskill, mit 47 Jahren.",
    "Nach seinem Tod zeigt die American Art-Union in New York eine grosse Ausstellung seiner Werke."
  ],
  "epilogue": "Thomas Cole stirbt am 11. Februar 1848 in Catskill. Der Weg führt von England über New York und Italien in die Catskill Mountains.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,30 C40,16 82,14 94,28 C98,42 80,54 72,64 C66,72 72,84 68,96 C64,112 58,130 50,150 C42,130 38,112 42,96 C38,84 28,74 22,60 C16,48 12,38 18,30 Z",
      "M150,30 C170,20 200,22 214,34 C224,46 220,62 216,76 C208,82 196,74 186,68 C176,64 162,60 154,52 C146,44 144,36 150,30 Z"
    ]
  },
  "stations": [
    {
      "id": "tcs1",
      "place": "Von England an den Hudson und nach Italien",
      "when": "1801–1832",
      "map": {
        "x": 76,
        "y": 44
      },
      "mapLabel": "New York",
      "intro": [
        "Thomas Cole wird am 1. Februar 1801 in Bolton-le-Moors in England geboren und wandert 1818 mit seiner Familie in die USA aus.",
        "1825 zieht er nach New York und reist den Hudson hinauf in die Catskill Mountains, von 1829 bis 1832 lebt und malt er in England, Frankreich und Italien."
      ],
      "works": [
        {
          "pid": "tcsunrise",
          "text": [
            "Dunkle Berge erheben sich aus dem Nebel, im Vordergrund liegen gebrochene Baumstämme.",
            "Cole malt das Bild ein Jahr nach seiner ersten Reise in die Catskill Mountains."
          ],
          "fact": "1826. National Gallery of Art, Washington."
        },
        {
          "pid": "tcniagara",
          "text": [
            "Weisses Wasser stürzt breit über die Fälle, ringsum leuchten Bäume in Herbstfarben.",
            "Cole malt das Bild auf eine Holztafel."
          ],
          "fact": "1830. Art Institute of Chicago."
        },
        {
          "pid": "tctivoli",
          "text": [
            "Ein bewachsener Bogen einer alten Ruine steht vor Bergen, über die Wolken ziehen.",
            "Cole malt das Bild 1832, gegen Ende seines Aufenthalts in Italien."
          ],
          "fact": "1832. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "tcs2",
      "place": "Ein Atelier in Catskill",
      "when": "1833–1836",
      "map": {
        "x": 72,
        "y": 38
      },
      "mapLabel": "Catskill",
      "intro": [
        "Nach seiner Rückkehr richtet Cole ein Atelier in Cedar Grove in Catskill ein.",
        "Am 22. November 1836 heiratet er dort Maria Bartow, und Cedar Grove wird sein Zuhause."
      ],
      "works": [
        {
          "pid": "tcgoblet",
          "text": [
            "Ein riesiger steinerner Pokal steht in einer Landschaft, auf seinem Rand wachsen Bäume und Wasser läuft über.",
            "Es ist ein Fantasiebild, eine Landschaft, die es so nirgends gibt."
          ],
          "fact": "1833. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "tcholyokesketch",
          "text": [
            "In dieser kleinen Ölskizze sind der Fluss, die Bäume und das Licht schon da.",
            "Cole bereitet damit sein grosses Bild „Der Oxbow“ vor."
          ],
          "fact": "1836. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "tcoxbow",
          "text": [
            "Links zieht das Gewitter ab, rechts liegt das sonnige Tal mit der grossen Flussschleife.",
            "Unten im Bild hat sich Cole selbst klein beim Malen dargestellt."
          ],
          "fact": "1836. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "tccatskill",
          "text": [
            "Hohe Bäume rahmen ein ruhiges Tal mit einem Bach, dahinter liegen blaue Berge.",
            "Der Blick geht vom Dorf Catskill zu den Bergen, wo Cole inzwischen lebt."
          ],
          "fact": "1836–1837. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "tcs3",
      "place": "Berge, Wolken und Erinnerungen an Italien",
      "when": "1837–1839",
      "map": {
        "x": 84,
        "y": 32
      },
      "mapLabel": "Neuengland",
      "intro": [
        "Cole malt die Berge von New York und Neuengland, oft nach einem Gewitter oder im Herbst.",
        "Daneben entstehen Bilder von Florenz und der italienischen Küste nach Skizzen seiner Reise."
      ],
      "works": [
        {
          "pid": "tcflorence",
          "text": [
            "Die Stadt mit ihrer grossen Domkuppel liegt im warmen Licht zwischen Hügeln.",
            "Cole malt das Bild in Amerika, Jahre nachdem er in Florenz gewesen ist."
          ],
          "fact": "1837. Cleveland Museum of Art."
        },
        {
          "pid": "tcclouds",
          "text": [
            "Eine grosse weisse Wolke türmt sich über einem schmalen Streifen Land.",
            "Cole malt diese Studie mit Ölfarbe auf Papier."
          ],
          "fact": "um 1838. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "tcschroon",
          "text": [
            "Über herbstlich roten und gelben Wäldern ragt ein dunkler Berggipfel auf, Wolken ziehen ab.",
            "Der Berg liegt in Essex County im Staat New York."
          ],
          "fact": "1838. Cleveland Museum of Art."
        },
        {
          "pid": "tccoast",
          "text": [
            "Ein runder, verfallener Turm steht auf Felsen über dem ruhigen Meer.",
            "Auch dieses Bild malt Cole in Amerika, nach Erinnerungen und Skizzen aus Italien."
          ],
          "fact": "1838. National Gallery of Art, Washington."
        },
        {
          "pid": "tcnotch",
          "text": [
            "Ein Weg führt durch herbstliche Wälder auf eine Felswand zu, über der Gewitterwolken hängen.",
            "Die White Mountains liegen in New Hampshire, in Neuengland."
          ],
          "fact": "1839. National Gallery of Art, Washington."
        },
        {
          "pid": "tcnewengland",
          "text": [
            "Ein hoher Baum steht links, dahinter liegt ein weites Tal im Abendlicht mit einem fernen Kirchturm.",
            "Cole zeigt eine ruhige, bewohnte Landschaft."
          ],
          "fact": "1839. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "tcs4",
      "place": "Die Reise des Lebens",
      "when": "1840–1848",
      "map": {
        "x": 68,
        "y": 42
      },
      "mapLabel": "Catskill",
      "intro": [
        "Cole malt die Bildfolge „Die Reise des Lebens“, in der eine Fahrt auf einem Fluss für den Lebensweg steht, und malt sie 1842 in Rom ein zweites Mal.",
        "Zurück in Catskill nimmt er 1844 Frederic Edwin Church als ersten Schüler auf."
      ],
      "works": [
        {
          "pid": "tcchildhood",
          "text": [
            "Ein kleines Kind fährt in einem goldenen Boot aus einer dunklen Höhle in eine grüne, blühende Landschaft, ein Engel steuert.",
            "Es ist das erste von vier Bildern der Reihe."
          ],
          "fact": "1842. National Gallery of Art, Washington."
        },
        {
          "pid": "tcyouth",
          "text": [
            "Ein junger Mann steuert sein Boot jetzt selbst auf ein Schloss in den Wolken zu, der Engel bleibt am Ufer zurück.",
            "Das Schloss steht für die Träume der Jugend."
          ],
          "fact": "1842. National Gallery of Art, Washington."
        },
        {
          "pid": "tccreek",
          "text": [
            "Ein Abendhimmel mit leuchtenden Wolken liegt über flachem Land und fernen Bergen.",
            "Cole malt die Studie auf Holz, als Vorbereitung für ein grösseres Bild."
          ],
          "fact": "um 1844–1845. National Gallery of Art, Washington."
        },
        {
          "pid": "tcford",
          "text": [
            "Ein Reiter auf einem weissen Pferd durchquert einen Bach unter einem felsigen Berg.",
            "Cole malt das Bild zwei Jahre vor seinem Tod, in seinen letzten Jahren in Catskill."
          ],
          "fact": "1846. Metropolitan Museum of Art, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
