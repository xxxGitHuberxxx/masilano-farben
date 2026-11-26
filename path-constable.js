// v10.43 John Constable life journey (1776–1837). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "cnepsom",
    "title": "Die Heide bei Epsom",
    "artist": "John Constable",
    "year": "1806",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2022.40.5: https://www.nga.gov/collection/art-object-page.139562.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cncottages",
    "title": "Landschaft mit Häusern",
    "artist": "John Constable",
    "year": "1809–1810",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1944.1: https://www.artic.edu/artworks/49651, CC0 (gemeinfrei)"
  },
  {
    "id": "cnstoke",
    "title": "Stoke-by-Nayland",
    "artist": "John Constable",
    "year": "um 1810–1811",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 26.128: https://www.metmuseum.org/art/collection/search/435923, CC0 (gemeinfrei)"
  },
  {
    "id": "cnwivenhoe",
    "title": "Wivenhoe Park, Essex",
    "artist": "John Constable",
    "year": "1816",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1942.9.10: https://www.nga.gov/collection/art-object-page.1147.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cnpulham",
    "title": "Mrs. James Pulham",
    "artist": "John Constable",
    "year": "1818",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 06.1272: https://www.metmuseum.org/art/collection/search/435921, CC0 (gemeinfrei)"
  },
  {
    "id": "cnwhitehorse",
    "title": "Das weisse Pferd",
    "artist": "John Constable",
    "year": "1818–1819",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1942.9.9: https://www.nga.gov/collection/art-object-page.1146.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cnsalisbury",
    "title": "Die Kathedrale von Salisbury von Lower Marsh Close aus",
    "artist": "John Constable",
    "year": "1820",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1937.1.108: https://www.nga.gov/collection/art-object-page.115.html, CC0 (gemeinfrei)"
  },
  {
    "id": "haywain",
    "title": "Der Heuwagen",
    "artist": "John Constable",
    "year": "1821",
    "museum": "The National Gallery, London",
    "source": "Wikimedia Commons: «John Constable - The Hay Wain (1821).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "cnclouds",
    "title": "Wolkenstudie: stürmischer Sonnenuntergang",
    "artist": "John Constable",
    "year": "1821–1822",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1998.20.1: https://www.nga.gov/collection/art-object-page.104243.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cnyarmouth",
    "title": "Die Mole von Yarmouth",
    "artist": "John Constable",
    "year": "1822",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2016.115.1: https://www.nga.gov/collection/art-object-page.93667.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cnlock",
    "title": "Landschaft (Die Schleuse)",
    "artist": "John Constable",
    "year": "um 1820–1825",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1894.1043: https://www.artic.edu/artworks/879, CC0 (gemeinfrei)"
  },
  {
    "id": "cnbishop",
    "title": "Die Kathedrale von Salisbury vom Garten des Bischofs aus",
    "artist": "John Constable",
    "year": "um 1825",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 50.145.8: https://www.metmuseum.org/art/collection/search/435922, CC0 (gemeinfrei)"
  },
  {
    "id": "cnbranchhill",
    "title": "Der Teich von Branch Hill, Hampstead",
    "artist": "John Constable",
    "year": "1828",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1972.48: https://clevelandart.org/art/1972.48, CC0 (gemeinfrei)"
  },
  {
    "id": "cncloudwc",
    "title": "Wolkenstudie",
    "artist": "John Constable",
    "year": "1830–1835",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2016.589: https://www.metmuseum.org/art/collection/search/727706, CC0 (gemeinfrei)"
  },
  {
    "id": "cnmill",
    "title": "Mühle bei Colchester",
    "artist": "John Constable",
    "year": "1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2007.41: https://www.metmuseum.org/art/collection/search/375834, CC0 (gemeinfrei)"
  },
  {
    "id": "cnstoke36",
    "title": "Stoke-by-Nayland",
    "artist": "John Constable",
    "year": "1836",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.4453: https://www.artic.edu/artworks/4758, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "constable",
  "name": "John Constable",
  "title": "John Constables Lebensweg",
  "life": "1776–1837",
  "part": "Suffolk, Salisbury und Hampstead",
  "subtitle": "Himmel, Wolken und Flüsse",
  "cover": "cnwhitehorse",
  "intro": "Reise mit John Constable durch sein Leben: von den Feldern und Mühlen seiner Heimat Suffolk über die Kathedrale von Salisbury bis zu den Wolken über Hampstead. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "John Constable stirbt am 31. März 1837 in London.",
    "Seine frischen Himmel und Landschaften begeistern später die französischen Maler, von Delacroix bis zu den Impressionisten."
  ],
  "epilogue": "John Constable stirbt am 31. März 1837 in London. Der Weg führt von den Feldern in Suffolk über Salisbury bis zu den Wolken über Hampstead.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M60,20 C90,10 130,14 160,24 C186,30 206,36 210,52 C214,66 204,80 192,90 C186,104 176,116 160,124 C130,138 96,142 66,140 C44,138 28,128 30,112 C34,96 46,84 50,66 C52,46 44,28 60,20 Z"
    ]
  },
  "stations": [
    {
      "id": "cns1",
      "place": "Suffolk: Heimat und Lehrjahre",
      "when": "1776–1811",
      "map": {
        "x": 172,
        "y": 68
      },
      "mapLabel": "East Bergholt",
      "intro": [
        "John Constable wird am 11. Juni 1776 in East Bergholt in Suffolk geboren; sein Vater besitzt Mühlen am Fluss Stour.",
        "Ab 1799 lernt er an der Kunstschule der Royal Academy in London, malt aber am liebsten die Felder und Dörfer seiner Heimat."
      ],
      "works": [
        {
          "pid": "cnepsom",
          "text": [
            "Sanfte Hügel ziehen sich unter einem weiten Himmel bis zum Horizont.",
            "Der junge Constable malt das kleine Blatt mit wenigen braunen, grauen und grünen Tönen."
          ],
          "fact": "1806. National Gallery of Art, Washington."
        },
        {
          "pid": "cncottages",
          "text": [
            "Hinter dunklen Bäumen leuchten die roten Dächer kleiner Häuser im Abendlicht.",
            "Vorn führt ein heller Weg über eine grüne Wiese."
          ],
          "fact": "1809–1810. Art Institute of Chicago."
        },
        {
          "pid": "cnstoke",
          "text": [
            "Hinter grossen Bäumen ragt der Kirchturm des Dorfes Stoke-by-Nayland in den Wolkenhimmel.",
            "Das Dorf liegt nur wenige Kilometer von Constables Geburtsort entfernt."
          ],
          "fact": "um 1810–1811. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "cns2",
      "place": "Heirat und grosse Bilder",
      "when": "1816–1819",
      "map": {
        "x": 176,
        "y": 78
      },
      "mapLabel": "Essex",
      "intro": [
        "1816 heiratet Constable nach langem Warten Maria Bicknell und zieht mit ihr nach London.",
        "Er malt nun grosse Leinwände von fast zwei Metern Breite und wird 1819 assoziiertes Mitglied der Royal Academy."
      ],
      "works": [
        {
          "pid": "cnwivenhoe",
          "text": [
            "Kühe grasen am Ufer eines Sees, dahinter liegt ein Landhaus zwischen grünen Bäumen.",
            "Constable malt den Park im Auftrag des Besitzers und setzt Streifen an die Leinwand, damit alles darauf passt."
          ],
          "fact": "1816. National Gallery of Art, Washington."
        },
        {
          "pid": "cnpulham",
          "text": [
            "Eine Frau mit dunklem Hut und weitem weissem Kragen schaut freundlich aus dem Bild.",
            "Sie ist die Frau eines Freundes von Constable aus Woodbridge in Suffolk."
          ],
          "fact": "1818. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "cnwhitehorse",
          "text": [
            "Ein weisses Pferd wird auf einem Lastkahn über den Fluss Stour gebracht, am Ufer stehen Bäume und ein Bauernhaus.",
            "Constable malt diese Fassung in voller Grösse, um das grosse Bild vorzubereiten."
          ],
          "fact": "1818–1819. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "constable1",
      "place": "Salisbury, der Heuwagen und die Wolken",
      "when": "1820–1825",
      "map": {
        "x": 92,
        "y": 120
      },
      "mapLabel": "Salisbury",
      "intro": [
        "Constable besucht oft seinen Freund John Fisher in Salisbury und malt die Kathedrale; in Hampstead malt er Studien von Wolken.",
        "1824 wird «Der Heuwagen» in Paris ausgestellt und erhält eine Goldmedaille."
      ],
      "works": [
        {
          "pid": "cnsalisbury",
          "text": [
            "Hinter einer grünen Wiese ragt der schlanke Turm der Kathedrale von Salisbury in den Himmel.",
            "Links werfen hohe Bäume einen dunklen Schatten."
          ],
          "fact": "1820. National Gallery of Art, Washington."
        },
        {
          "pid": "haywain",
          "text": [
            "Ein Heuwagen fährt durch den Fluss Stour bei Flatford in Suffolk, ganz in der Nähe der Mühle von Constables Vater.",
            "Links steht ein Haus, das es heute noch gibt."
          ],
          "fact": "1821. The National Gallery, London."
        },
        {
          "pid": "cnclouds",
          "text": [
            "Graue und rosa Wolken ziehen über einen hellen Abendhimmel.",
            "In Hampstead malt Constable viele solche Himmel und notiert dazu oft Tag, Uhrzeit und Wind."
          ],
          "fact": "1821–1822. National Gallery of Art, Washington."
        },
        {
          "pid": "cnyarmouth",
          "text": [
            "Eine lange Holzmole führt in das grüne Meer bei Yarmouth, am Horizont segeln Schiffe.",
            "Über dem Strand türmen sich grosse weisse und rosa Wolken."
          ],
          "fact": "1822. National Gallery of Art, Washington."
        },
        {
          "pid": "cnlock",
          "text": [
            "Unter einem grossen, hellen Baum sitzt ein Mann in Rot an einer hölzernen Schleuse.",
            "Schleusen und Kähne am Fluss Stour kennt Constable seit seiner Kindheit."
          ],
          "fact": "um 1820–1825. Art Institute of Chicago."
        },
        {
          "pid": "cnbishop",
          "text": [
            "Zwei hohe Bäume rahmen die helle Kathedrale wie ein Bogen, vorn grasen Kühe.",
            "Der Bischof von Salisbury, ein Onkel von Constables Freund John Fisher, bestellt ein solches Bild."
          ],
          "fact": "um 1825. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "cns4",
      "place": "Hampstead und späte Jahre",
      "when": "1826–1837",
      "map": {
        "x": 148,
        "y": 96
      },
      "mapLabel": "Hampstead",
      "intro": [
        "Constable lebt mit seinen sieben Kindern in Hampstead am Rand von London und malt die weite Heide und den Himmel.",
        "1829 wird er volles Mitglied der Royal Academy; seine späten Bilder werden immer stürmischer und freier."
      ],
      "works": [
        {
          "pid": "cnbranchhill",
          "text": [
            "Über der weiten Heide von Hampstead ziehen dunkle Regenwolken auf, unten glänzt ein kleiner Teich.",
            "Rechts liegt ein sandiger Hügel, auf dem winzige Tiere grasen."
          ],
          "fact": "1828. Cleveland Museum of Art."
        },
        {
          "pid": "cncloudwc",
          "text": [
            "Blaugraue Wolkenbänder ziehen über einen flachen Horizont.",
            "Constable malt das Blatt schnell mit Wasserfarben, bevor sich die Wolken verändern."
          ],
          "fact": "1830–1835. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "cnmill",
          "text": [
            "Eine hölzerne Windmühle mit grossen Flügeln steht unter einem stürmischen Himmel.",
            "Mühlen erinnern Constable an seinen Vater und an seine Kindheit in Suffolk."
          ],
          "fact": "1833. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "cnstoke36",
          "text": [
            "Vorn auf dem Feld stehen ein Pflug und ein Wagen mit Pferden, hinten ragt der Kirchturm von Stoke-by-Nayland auf.",
            "Fast 25 Jahre nach seinem ersten Bild malt Constable das Dorf noch einmal, mit wilden, freien Pinselstrichen."
          ],
          "fact": "1836. Art Institute of Chicago."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
