// v10.43 Thomas Moran life journey (1837–1926). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "tmecclesbourne",
    "title": "Die Klippen von Ecclesbourne bei Hastings",
    "artist": "Thomas Moran",
    "year": "1862",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2015.19.603: https://www.nga.gov/collection/art-object-page.194567.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tmjuniata",
    "title": "Der Juniata am Abend",
    "artist": "Thomas Moran",
    "year": "1864",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2010.107.1: https://www.nga.gov/collection/art-object-page.153202.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tmtowerfalls",
    "title": "Oberhalb der Tower Falls, Yellowstone",
    "artist": "Thomas Moran",
    "year": "1872",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1958.5.3: https://americanart.si.edu/collections/search/artwork/?id=17812, CC0 (gemeinfrei)"
  },
  {
    "id": "tmtower",
    "title": "Felsturm bei den Tower Falls, Yellowstone",
    "artist": "Thomas Moran",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2012.93.1: https://www.nga.gov/collection/art-object-page.156718.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tmmammoth",
    "title": "Mammoth Hot Springs, Yellowstone",
    "artist": "Thomas Moran",
    "year": "1872",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1958.5.2: https://americanart.si.edu/collections/search/artwork/?id=17846, CC0 (gemeinfrei)"
  },
  {
    "id": "tmminerva",
    "title": "Minerva-Terrasse, Yellowstone",
    "artist": "Thomas Moran",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2012.93.2: https://www.nga.gov/collection/art-object-page.156720.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tmexcelsior",
    "title": "Excelsior-Geysir, Yellowstone Park",
    "artist": "Thomas Moran",
    "year": "1873",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1958.5.1: https://americanart.si.edu/collections/search/artwork/?id=17818, CC0 (gemeinfrei)"
  },
  {
    "id": "tmgardiner",
    "title": "Heisse Quellen am Gardiner River, Yellowstone",
    "artist": "Thomas Moran",
    "year": "1873",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2012.93.3: https://www.nga.gov/collection/art-object-page.156721.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tmsierras",
    "title": "Gipfel der Sierra",
    "artist": "Thomas Moran",
    "year": "1872–1875",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1965.852: https://www.artic.edu/artworks/24342, CC0 (gemeinfrei)"
  },
  {
    "id": "tmhalfdome",
    "title": "Half Dome, Yosemite",
    "artist": "Thomas Moran",
    "year": "1873",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-32: https://collection.cooperhewitt.org/view/objects/asitem/id/21748, CC0 (gemeinfrei)"
  },
  {
    "id": "tmgodland",
    "title": "Shin-Au-Av-Tu-Weap (Gottesland), Cañon des Colorado",
    "artist": "Thomas Moran",
    "year": "1873–1874",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1930.12.42: https://americanart.si.edu/collections/search/artwork/?id=17864, CC0 (gemeinfrei)"
  },
  {
    "id": "tmpowell",
    "title": "Blick vom Powell-Plateau, Grand Canyon",
    "artist": "Thomas Moran",
    "year": "1873",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-26: https://collection.cooperhewitt.org/view/objects/asitem/id/21741, CC0 (gemeinfrei)"
  },
  {
    "id": "tmriovirgin",
    "title": "Klippen am Rio Virgin, Süd-Utah",
    "artist": "Thomas Moran",
    "year": "1873",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-20: https://collection.cooperhewitt.org/view/objects/asitem/id/21735, CC0 (gemeinfrei)"
  },
  {
    "id": "tmvirgincanyon",
    "title": "Schlucht des Rio Virgin, Süd-Utah",
    "artist": "Thomas Moran",
    "year": "1873",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-27: https://collection.cooperhewitt.org/view/objects/asitem/id/21742, CC0 (gemeinfrei)"
  },
  {
    "id": "tmfortgeorge",
    "title": "Fort George Island, Florida",
    "artist": "Thomas Moran",
    "year": "1878",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1915.689: https://clevelandart.org/art/1915.689, CC0 (gemeinfrei)"
  },
  {
    "id": "tmtetons",
    "title": "Die Tetons, Idaho",
    "artist": "Thomas Moran",
    "year": "1879",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-33: https://collection.cooperhewitt.org/view/objects/asitem/id/21749, CC0 (gemeinfrei)"
  },
  {
    "id": "tmruby",
    "title": "Die Ruby Range, Nevada",
    "artist": "Thomas Moran",
    "year": "1879",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1938.67: https://clevelandart.org/art/1938.67, CC0 (gemeinfrei)"
  },
  {
    "id": "tmcottonwood",
    "title": "Oberes Ende des Little Cottonwood Canyon, Wasatch-Kette",
    "artist": "Thomas Moran",
    "year": "1879",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-79: https://collection.cooperhewitt.org/view/objects/asitem/id/21800, CC0 (gemeinfrei)"
  },
  {
    "id": "tmgreenriver",
    "title": "Green River, Wyoming-Territorium",
    "artist": "Thomas Moran",
    "year": "1879",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-39: https://collection.cooperhewitt.org/view/objects/asitem/id/21755, CC0 (gemeinfrei)"
  },
  {
    "id": "tmgreencliffs",
    "title": "Felsen am Green River, Wyoming",
    "artist": "Thomas Moran",
    "year": "1881",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2011.2.1: https://www.nga.gov/collection/art-object-page.82648.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tmupperco",
    "title": "Klippen am Oberlauf des Colorado, Wyoming-Territorium",
    "artist": "Thomas Moran",
    "year": "1882",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1936.12.4: https://americanart.si.edu/collections/search/artwork/?id=17816, CC0 (gemeinfrei)"
  },
  {
    "id": "tmsanfrancisco",
    "title": "Bei San Francisco, Mexiko",
    "artist": "Thomas Moran",
    "year": "1883",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-45: https://collection.cooperhewitt.org/view/objects/asitem/id/21762, CC0 (gemeinfrei)"
  },
  {
    "id": "tmsea",
    "title": "Das weithin tönende Meer",
    "artist": "Thomas Moran",
    "year": "1884",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1967.9.1: https://www.nga.gov/collection/art-object-page.50729.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tmhacienda",
    "title": "Eine mexikanische Hacienda am Cuitzeo-See",
    "artist": "Thomas Moran",
    "year": "1885",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1968.120.2: https://americanart.si.edu/collections/search/artwork/?id=17847, CC0 (gemeinfrei)"
  },
  {
    "id": "tmvenice88",
    "title": "Ansicht von Venedig",
    "artist": "Thomas Moran",
    "year": "1888",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.136.184: https://www.nga.gov/collection/art-object-page.98404.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tmholycross",
    "title": "Mount of the Holy Cross",
    "artist": "Thomas Moran",
    "year": "1890",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2012.28.1: https://www.nga.gov/collection/art-object-page.103590.html, CC0 (gemeinfrei)"
  },
  {
    "id": "tmvenice91",
    "title": "Eine Ansicht von Venedig",
    "artist": "Thomas Moran",
    "year": "1891",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1968.120.1: https://americanart.si.edu/collections/search/artwork/?id=17881, CC0 (gemeinfrei)"
  },
  {
    "id": "tmkanab",
    "title": "Nebel im Kanab Canyon, Utah",
    "artist": "Thomas Moran",
    "year": "1892",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1942.11.10: https://americanart.si.edu/collections/search/artwork/?id=17848, CC0 (gemeinfrei)"
  },
  {
    "id": "tmhotsprings",
    "title": "Heisse Quellen, Yellowstone",
    "artist": "Thomas Moran",
    "year": "1892",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-70: https://collection.cooperhewitt.org/view/objects/asitem/id/21791, CC0 (gemeinfrei)"
  },
  {
    "id": "tmsmelting",
    "title": "Schmelzhütte bei Denver",
    "artist": "Thomas Moran",
    "year": "1892",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1938.56: https://clevelandart.org/art/1938.56, CC0 (gemeinfrei)"
  },
  {
    "id": "tmtoltec",
    "title": "Toltec-Schlucht und Eva Cliff von Westen, Colorado",
    "artist": "Thomas Moran",
    "year": "1892",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-31: https://collection.cooperhewitt.org/view/objects/asitem/id/21747, CC0 (gemeinfrei)"
  },
  {
    "id": "tmgrandcanyon",
    "title": "Der Grand Canyon des Yellowstone",
    "artist": "Thomas Moran",
    "year": "1893–1901",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1928.7.1: https://americanart.si.edu/collections/search/artwork/?id=17831, CC0 (gemeinfrei)"
  },
  {
    "id": "tmrainbow",
    "title": "Regenbogen über dem Grand Canyon des Yellowstone",
    "artist": "Thomas Moran",
    "year": "1900",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1988.49.1: https://americanart.si.edu/collections/search/artwork/?id=17862, CC0 (gemeinfrei)"
  },
  {
    "id": "tmsangiorgio",
    "title": "Venedig vom Turm von San Giorgio aus",
    "artist": "Thomas Moran",
    "year": "1900",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1988.49.2: https://americanart.si.edu/collections/search/artwork/?id=17880, CC0 (gemeinfrei)"
  },
  {
    "id": "tmbrightangel",
    "title": "Blick den Bright-Angel-Pfad hinauf, Grand Canyon",
    "artist": "Thomas Moran",
    "year": "1901",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-17-83: https://collection.cooperhewitt.org/view/objects/asitem/id/21805, CC0 (gemeinfrei)"
  },
  {
    "id": "tmcuernavaca",
    "title": "Das Tal von Cuernavaca",
    "artist": "Thomas Moran",
    "year": "1903",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1970.288: https://americanart.si.edu/collections/search/artwork/?id=17879, CC0 (gemeinfrei)"
  },
  {
    "id": "tmsunset",
    "title": "Abendwolke, Green River, Wyoming",
    "artist": "Thomas Moran",
    "year": "1917",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 2015.54.2: https://americanart.si.edu/collections/search/artwork/?id=110308, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "moran",
  "name": "Thomas Moran",
  "title": "Thomas Morans Lebensweg",
  "life": "1837–1926",
  "part": "Die Wunder des Westens",
  "subtitle": "Von Yellowstone zum Grand Canyon und nach Venedig",
  "cover": "tmgrandcanyon",
  "intro": "Reise mit Thomas Moran durch sein Leben: von Philadelphia zu den heissen Quellen von Yellowstone, in die Schluchten des Westens, nach Mexiko und Venedig. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Thomas Moran stirbt am 25. August 1926 in Santa Barbara in Kalifornien.",
    "In den Grand-Teton-Bergen trägt heute ein Gipfel seinen Namen: Mount Moran."
  ],
  "epilogue": "Thomas Moran stirbt am 25. August 1926 in Santa Barbara. Der Weg führt von Philadelphia über Yellowstone und den Grand Canyon bis nach Mexiko und Venedig.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,30 C40,16 82,14 94,28 C98,42 80,54 72,64 C66,72 72,84 68,96 C64,112 58,130 50,150 C42,130 38,112 42,96 C38,84 28,74 22,60 C16,48 12,38 18,30 Z",
      "M150,30 C170,20 200,22 214,34 C224,46 220,62 216,76 C208,82 196,74 186,68 C176,64 162,60 154,52 C146,44 144,36 150,30 Z"
    ]
  },
  "stations": [
    {
      "id": "tms1",
      "place": "Von Bolton nach Philadelphia",
      "when": "1837–1870",
      "map": {
        "x": 68,
        "y": 48
      },
      "mapLabel": "Philadelphia",
      "intro": [
        "Thomas Moran wird am 12. Februar 1837 in Bolton in England geboren, 1844 wandert die Familie in die USA aus und lässt sich später bei Philadelphia nieder.",
        "Er lernt in einer Holzstecherei in Philadelphia und reist 1862 nach England, um die Bilder von William Turner zu sehen."
      ],
      "works": [
        {
          "pid": "tmecclesbourne",
          "text": [
            "Graugrüne Hügel und Klippen ziehen sich bei Hastings an der Südküste Englands entlang.",
            "Moran zeichnet das Blatt mit Bleistift, Tusche und Deckfarbe auf grauem Papier."
          ],
          "fact": "1862. National Gallery of Art, Washington."
        },
        {
          "pid": "tmjuniata",
          "text": [
            "Ein weites Tal öffnet sich zwischen bewaldeten Hängen, die Felsen leuchten im Abendlicht.",
            "Der Juniata ist ein Fluss in Pennsylvania."
          ],
          "fact": "1864. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "tms2",
      "place": "Die heissen Quellen von Yellowstone",
      "when": "1871–1873",
      "map": {
        "x": 40,
        "y": 40
      },
      "mapLabel": "Yellowstone",
      "intro": [
        "1871 reist Moran mit der Expedition des Geologen Ferdinand Hayden in die Gegend des Yellowstone.",
        "Seine Skizzen und die Fotos von William Henry Jackson tragen dazu bei, dass der Kongress 1872 Yellowstone zum ersten Nationalpark macht."
      ],
      "works": [
        {
          "pid": "tmtowerfalls",
          "text": [
            "Eine hohe, spitze Felsnadel ragt über dem schäumenden Wasser auf.",
            "Rechts im Hintergrund stürzt ein Wasserfall in die Tiefe."
          ],
          "fact": "1872. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmtower",
          "text": [
            "Ein rötlicher Felsturm steht am Ufer eines wilden Flusses.",
            "Moran malt das Aquarell mit Wasserfarben und Deckweiss auf blauem Papier."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "tmmammoth",
          "text": [
            "Weisse Terrassen und blaue Becken liegen vor einem dunklen Berg.",
            "Die heissen Quellen von Mammoth lagern Kalkstein ab, der wie Stufen aussieht."
          ],
          "fact": "1872. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmminerva",
          "text": [
            "In einem runden Bildfeld sieht man farbige Terrassen mit kleinen Wasserbecken.",
            "Die Minerva-Terrasse gehört zu den heissen Quellen von Mammoth in Yellowstone."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "tmexcelsior",
          "text": [
            "Dampf steigt über einem weiten Tal auf, rechts steht eine hohe Kiefer.",
            "Der Excelsior-Geysir liegt in einem der Geysirbecken des Yellowstone-Parks."
          ],
          "fact": "1873. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmgardiner",
          "text": [
            "Terrassen in Weiss, Orange und Rot ziehen sich einen Hang hinauf.",
            "Kleine Gestalten am Rand zeigen, wie gross die Terrassen sind."
          ],
          "fact": "1873. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "tms3",
      "place": "Yosemite, Utah und der Grand Canyon",
      "when": "1872–1875",
      "map": {
        "x": 34,
        "y": 52
      },
      "mapLabel": "Grand Canyon",
      "intro": [
        "1873 begleitet Moran den Forscher John Wesley Powell in den Süden von Utah und an den Grand Canyon.",
        "Auch das Yosemite-Tal und die Berge der Sierra Nevada in Kalifornien hält er in Aquarellen fest."
      ],
      "works": [
        {
          "pid": "tmsierras",
          "text": [
            "Schneebedeckte Berge erheben sich hinter dunklen Tannen und Felsen.",
            "Moran malt das Blatt mit Deckfarben über einer Bleistiftzeichnung."
          ],
          "fact": "1872–1875. Art Institute of Chicago."
        },
        {
          "pid": "tmhalfdome",
          "text": [
            "Der Granitfelsen Half Dome ragt im Yosemite-Tal zwischen Felsblöcken und Tannen auf.",
            "Im Hintergrund liegen schneebedeckte Berge."
          ],
          "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmgodland",
          "text": [
            "Über einer weiten Hochebene türmen sich rote Felsen unter einem dunklen Himmel.",
            "Das schmale, lange Blatt zeigt das Land am Colorado wie ein Panorama."
          ],
          "fact": "1873–1874. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmpowell",
          "text": [
            "Der Blick geht vom Powell-Plateau tief hinunter in den Grand Canyon.",
            "Das Plateau ist nach dem Forscher John Wesley Powell benannt."
          ],
          "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmriovirgin",
          "text": [
            "Eine Reihe ausgewaschener Klippen erhebt sich über einer Hochebene im Süden von Utah.",
            "Unten fliesst ein Bach durch eine tiefe Schlucht."
          ],
          "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmvirgincanyon",
          "text": [
            "Eine Gruppe Reiter durchquert den Rio Virgin an einer flachen Stelle.",
            "Links ragen hohe weisse Klippen auf."
          ],
          "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "tms4",
      "place": "Florida und die Rocky Mountains",
      "when": "1878–1881",
      "map": {
        "x": 44,
        "y": 44
      },
      "mapLabel": "Wyoming",
      "intro": [
        "Neben dem Westen malt Moran auch die Küsten und Palmen von Florida.",
        "1879 reist er durch Idaho, Utah, Nevada und Wyoming und füllt viele Blätter mit Skizzen in Wasserfarben."
      ],
      "works": [
        {
          "pid": "tmfortgeorge",
          "text": [
            "Hohe Palmen und Büsche stehen auf einer sandigen Anhöhe in Florida.",
            "Über ihnen ziehen grosse weisse Wolken."
          ],
          "fact": "1878. Cleveland Museum of Art."
        },
        {
          "pid": "tmtetons",
          "text": [
            "Über ein flaches Flusstal hinweg sieht man die blauen Gipfel der Tetons.",
            "Die Bergketten davor sind violett und blau, das Wasser ist grün."
          ],
          "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmruby",
          "text": [
            "Eine lange, kahle Bergkette erhebt sich über einer flachen Ebene in Nevada.",
            "Wolken liegen über den Gipfeln."
          ],
          "fact": "1879. Cleveland Museum of Art."
        },
        {
          "pid": "tmcottonwood",
          "text": [
            "Der Blick geht über eine Felskante zu drei violett schimmernden Berggipfeln.",
            "Moran notiert auf dem Blatt das Datum: 13. August 1879."
          ],
          "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmgreenriver",
          "text": [
            "Rot und weiss gestreifte Felsen spiegeln sich im Wasser des Green River in Wyoming.",
            "Darüber spannt sich ein blauer Himmel."
          ],
          "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmgreencliffs",
          "text": [
            "Die Felsen am Green River leuchten golden im Sonnenlicht.",
            "Davor zieht eine Gruppe Reiter durch die Ebene."
          ],
          "fact": "1881. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "tms5",
      "place": "Mexiko, Long Island und Venedig",
      "when": "1882–1891",
      "map": {
        "x": 72,
        "y": 46
      },
      "mapLabel": "East Hampton",
      "intro": [
        "1883 reist Moran nach Kuba und Mexiko, und ab 1884 hat er ein Haus mit Atelier in East Hampton auf Long Island.",
        "1886 fährt er zum ersten Mal nach Venedig, das er danach immer wieder malt."
      ],
      "works": [
        {
          "pid": "tmupperco",
          "text": [
            "Unter einem dunklen Gewitterhimmel leuchten hohe Klippen, vorne rasten Reiter am Fluss.",
            "Gemeint ist der Green River, der auch Upper Colorado genannt wird."
          ],
          "fact": "1882. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmsanfrancisco",
          "text": [
            "Ein Karrenweg führt über einen Hügel zu einem Wagen, links steht eine Missionskirche vor kahlen Bergen.",
            "Moran datiert das Blatt auf den 1. März 1883."
          ],
          "fact": "1883. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmsea",
          "text": [
            "Hohe Wellen brechen schäumend an einem flachen Strand.",
            "Darüber hängt ein grauer Himmel."
          ],
          "fact": "1884. National Gallery of Art, Washington."
        },
        {
          "pid": "tmhacienda",
          "text": [
            "Durch einen Bogen dunkler Bäume blickt man auf eine sonnige Hacienda am Ufer des Cuitzeo-Sees in Mexiko.",
            "Vorne sitzt eine einzelne Gestalt im Schatten an einem Wasserbecken."
          ],
          "fact": "1885. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmvenice88",
          "text": [
            "Kuppeln, Türme und Boote mit roten Segeln spiegeln sich in der Lagune von Venedig.",
            "Moran malt das Blatt mit Wasserfarben und Deckweiss."
          ],
          "fact": "1888. National Gallery of Art, Washington."
        },
        {
          "pid": "tmholycross",
          "text": [
            "Über einem Wasserfall erhebt sich der Mount of the Holy Cross in Colorado.",
            "Der Berg hat seinen Namen von zwei schneegefüllten Rinnen, die zusammen wie ein Kreuz aussehen."
          ],
          "fact": "1890. National Gallery of Art, Washington."
        },
        {
          "pid": "tmvenice91",
          "text": [
            "Boote mit bunten Segeln liegen vor Venedig, am Horizont stehen Kuppeln und Türme.",
            "Moran verschiebt dabei einige Gebäude ein wenig, damit das Bild schöner wirkt."
          ],
          "fact": "1891. Smithsonian American Art Museum, Washington."
        }
      ]
    },
    {
      "id": "tms6",
      "place": "Zurück in Yellowstone",
      "when": "1892–1901",
      "map": {
        "x": 42,
        "y": 42
      },
      "mapLabel": "Yellowstone",
      "intro": [
        "1892 kehrt Moran mit dem Fotografen William Henry Jackson nach Yellowstone zurück und skizziert die Schlucht des Yellowstone neu.",
        "Im selben Jahr entstehen auch Bilder aus Colorado und Utah."
      ],
      "works": [
        {
          "pid": "tmkanab",
          "text": [
            "Nebel steigt zwischen den hohen Felswänden des Kanab Canyon in Utah auf.",
            "Unten fliesst Wasser zwischen grossen Steinen."
          ],
          "fact": "1892. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmhotsprings",
          "text": [
            "In der Mitte leuchtet eine heisse Quelle mit Dampf und Ablagerungen in Weiss, Rot und Gelb.",
            "Moran datiert das Blatt auf den 21. Juli 1892."
          ],
          "fact": "1892. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmsmelting",
          "text": [
            "Aus hohen Schornsteinen steigt dunkler Rauch über eine flache Ebene.",
            "Hier zeigt Moran kein Naturwunder, sondern ein Industriewerk bei Denver in Colorado."
          ],
          "fact": "1892. Cleveland Museum of Art."
        },
        {
          "pid": "tmtoltec",
          "text": [
            "Unter grauem Himmel öffnet sich eine tiefe Schlucht vor einer zackigen Felswand.",
            "Ganz hinten leuchten weisse Flecken auf einem fernen Berg."
          ],
          "fact": "1892. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmgrandcanyon",
          "text": [
            "Gelbe und weisse Felswände fallen steil in die Schlucht des Yellowstone, hinten stürzt ein Wasserfall hinab.",
            "Das grosse Bild ist über vier Meter breit."
          ],
          "fact": "1893–1901. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmrainbow",
          "text": [
            "Ein Regenbogen spannt sich über die hellen Felsen des Grand Canyon des Yellowstone.",
            "Dunst und Licht lassen die Felsen fast weiss leuchten."
          ],
          "fact": "1900. Smithsonian American Art Museum, Washington."
        }
      ]
    },
    {
      "id": "tms7",
      "place": "Späte Reisen",
      "when": "1900–1926",
      "map": {
        "x": 36,
        "y": 54
      },
      "mapLabel": "Arizona",
      "intro": [
        "Auch im Alter reist Moran weiter, vor allem an den Grand Canyon in Arizona.",
        "Er malt bis ins hohe Alter und stirbt 1926 in Santa Barbara in Kalifornien."
      ],
      "works": [
        {
          "pid": "tmsangiorgio",
          "text": [
            "Vom Turm von San Giorgio Maggiore blickt man über das Wasser auf Venedig.",
            "Segelboote liegen ruhig in der Lagune."
          ],
          "fact": "1900. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmbrightangel",
          "text": [
            "Der Blick geht vom Grund einer Schlucht im Grand Canyon zu den hohen Felsen hinauf.",
            "Moran datiert das Blatt auf Mai 1901."
          ],
          "fact": "1901. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "tmcuernavaca",
          "text": [
            "Über grüne Hügel geht der Blick weit in das Tal von Cuernavaca in Mexiko.",
            "Am Horizont ziehen Wolken über die Berge."
          ],
          "fact": "1903. Smithsonian American Art Museum, Washington."
        },
        {
          "pid": "tmsunset",
          "text": [
            "Eine orangerote Abendwolke steht über den Felsen am Green River in Wyoming.",
            "Moran malt das kleine Bild mit etwa achtzig Jahren."
          ],
          "fact": "1917. Smithsonian American Art Museum, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
