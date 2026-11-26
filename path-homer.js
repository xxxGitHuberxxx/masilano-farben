// v10.43 Winslow Homer life journey (1836–1910). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "hocroquet",
    "title": "Krocket",
    "artist": "Winslow Homer",
    "year": "1866",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1942.35: https://www.artic.edu/artworks/44018, CC0 (gemeinfrei)"
  },
  {
    "id": "hostudio",
    "title": "Das Atelier",
    "artist": "Winslow Homer",
    "year": "1867",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 39.14: https://www.metmuseum.org/art/collection/search/11141, CC0 (gemeinfrei)"
  },
  {
    "id": "horye",
    "title": "Coming through the Rye",
    "artist": "Winslow Homer",
    "year": "1867",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2025.834: https://www.metmuseum.org/art/collection/search/934941, CC0 (gemeinfrei)"
  },
  {
    "id": "hofield",
    "title": "Frauen bei der Feldarbeit",
    "artist": "Winslow Homer",
    "year": "1867",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1992.315: https://clevelandart.org/art/1992.315, CC0 (gemeinfrei)"
  },
  {
    "id": "howashington",
    "title": "Mount Washington",
    "artist": "Winslow Homer",
    "year": "1869",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1951.313: https://www.artic.edu/artworks/75957, CC0 (gemeinfrei)"
  },
  {
    "id": "hodinnerhorn",
    "title": "Das Horn zum Essen",
    "artist": "Winslow Homer",
    "year": "1870",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1994.59.2: https://www.nga.gov/collection/art-object-page.89664.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hosnapwhip",
    "title": "Snap the Whip",
    "artist": "Winslow Homer",
    "year": "1872",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 50.41: https://www.metmuseum.org/art/collection/search/11140, CC0 (gemeinfrei)"
  },
  {
    "id": "horedschool",
    "title": "Das rote Schulhaus",
    "artist": "Winslow Homer",
    "year": "1873",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.21: https://www.nga.gov/collection/art-object-page.66419.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hodory",
    "title": "Jungen in einem Ruderboot",
    "artist": "Winslow Homer",
    "year": "1873",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2001.608.1: https://www.metmuseum.org/art/collection/search/17053, CC0 (gemeinfrei)"
  },
  {
    "id": "hoberry",
    "title": "Beerensammler",
    "artist": "Winslow Homer",
    "year": "1873",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.16: https://www.nga.gov/collection/art-object-page.164926.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hoeasthampton",
    "title": "Strand von East Hampton, Long Island",
    "artist": "Winslow Homer",
    "year": "1874",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2012.89.2: https://www.nga.gov/collection/art-object-page.157923.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hobreezing",
    "title": "Frische Brise (Guter Wind)",
    "artist": "Winslow Homer",
    "year": "1873–1876",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1943.13.1: https://www.nga.gov/collection/art-object-page.30228.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hoautumn",
    "title": "Herbst",
    "artist": "Winslow Homer",
    "year": "1877",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.22: https://www.nga.gov/collection/art-object-page.66420.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hocarnival",
    "title": "Ankleiden für den Karneval",
    "artist": "Winslow Homer",
    "year": "1877",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 22.220: https://www.metmuseum.org/art/collection/search/11116, CC0 (gemeinfrei)"
  },
  {
    "id": "homilkmaid",
    "title": "Die Milchmagd",
    "artist": "Winslow Homer",
    "year": "1878",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1975.92.11: https://www.nga.gov/collection/art-object-page.55586.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hopeach",
    "title": "Pfirsichblüten",
    "artist": "Winslow Homer",
    "year": "1878",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1946.338: https://www.artic.edu/artworks/55494, CC0 (gemeinfrei)"
  },
  {
    "id": "hotwoladies",
    "title": "Zwei Damen",
    "artist": "Winslow Homer",
    "year": "1880",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 18.123.3: https://www.metmuseum.org/art/collection/search/11144, CC0 (gemeinfrei)"
  },
  {
    "id": "hoboyboat",
    "title": "Junge im Boot, Gloucester",
    "artist": "Winslow Homer",
    "year": "1880–1881",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.1243: https://www.artic.edu/artworks/16800, CC0 (gemeinfrei)"
  },
  {
    "id": "hofishergirls",
    "title": "Drei Fischermädchen, Tynemouth",
    "artist": "Winslow Homer",
    "year": "1881",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2012.89.4: https://www.nga.gov/collection/art-object-page.157925.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hofishwives",
    "title": "Vier Fischersfrauen am Strand",
    "artist": "Winslow Homer",
    "year": "1881",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.23: https://www.nga.gov/collection/art-object-page.164933.html, CC0 (gemeinfrei)"
  },
  {
    "id": "horeturn",
    "title": "Die Rückkehr, Tynemouth",
    "artist": "Winslow Homer",
    "year": "1881",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.1251: https://www.artic.edu/artworks/113064, CC0 (gemeinfrei)"
  },
  {
    "id": "howatcher",
    "title": "Die Wartende, Tynemouth",
    "artist": "Winslow Homer",
    "year": "1882",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.1255: https://www.artic.edu/artworks/16840, CC0 (gemeinfrei)"
  },
  {
    "id": "homending",
    "title": "Netze flicken",
    "artist": "Winslow Homer",
    "year": "1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1984.58.3: https://www.nga.gov/collection/art-object-page.64552.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hosparrow",
    "title": "Sparrow Hall",
    "artist": "Winslow Homer",
    "year": "um 1881–1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2025.89.10: https://www.nga.gov/collection/art-object-page.126152.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hoinsidebar",
    "title": "Vor der Sandbank",
    "artist": "Winslow Homer",
    "year": "1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 54.183: https://www.metmuseum.org/art/collection/search/11125, CC0 (gemeinfrei)"
  },
  {
    "id": "hobreakers",
    "title": "Brandung bei Prouts Neck",
    "artist": "Winslow Homer",
    "year": "1883",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.1247: https://www.artic.edu/artworks/16815, CC0 (gemeinfrei)"
  },
  {
    "id": "hoherring",
    "title": "Das Heringsnetz",
    "artist": "Winslow Homer",
    "year": "1885",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1937.1039: https://www.artic.edu/artworks/25865, CC0 (gemeinfrei)"
  },
  {
    "id": "hocampfire",
    "title": "Lagerfeuer, Adirondacks",
    "artist": "Winslow Homer",
    "year": "um 1892",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.1237: https://www.artic.edu/artworks/16782, CC0 (gemeinfrei)"
  },
  {
    "id": "honorthwoods",
    "title": "North Woods Club, Adirondacks",
    "artist": "Winslow Homer",
    "year": "1892",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.1245: https://www.artic.edu/artworks/113100, CC0 (gemeinfrei)"
  },
  {
    "id": "homoonlight",
    "title": "Mondlicht, Leuchtturm von Wood Island",
    "artist": "Winslow Homer",
    "year": "1894",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 11.116.2: https://www.metmuseum.org/art/collection/search/11127, CC0 (gemeinfrei)"
  },
  {
    "id": "hocannon",
    "title": "Kanonenfelsen",
    "artist": "Winslow Homer",
    "year": "1895",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 06.1281: https://www.metmuseum.org/art/collection/search/11113, CC0 (gemeinfrei)"
  },
  {
    "id": "honortheaster",
    "title": "Nordoststurm",
    "artist": "Winslow Homer",
    "year": "1895",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 10.64.5: https://www.metmuseum.org/art/collection/search/11130, CC0 (gemeinfrei)"
  },
  {
    "id": "hohut",
    "title": "Hütte in Nassau",
    "artist": "Winslow Homer",
    "year": "1885",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1994.59.20: https://www.nga.gov/collection/art-object-page.89670.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hopalmtree",
    "title": "Palme, Nassau",
    "artist": "Winslow Homer",
    "year": "1898",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 10.228.6: https://www.metmuseum.org/art/collection/search/11131, CC0 (gemeinfrei)"
  },
  {
    "id": "hoflowergarden",
    "title": "Blumengarten und Bungalow, Bermuda",
    "artist": "Winslow Homer",
    "year": "1899",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 10.228.10: https://www.metmuseum.org/art/collection/search/11121, CC0 (gemeinfrei)"
  },
  {
    "id": "hosaltkettle",
    "title": "Salt Kettle, Bermuda",
    "artist": "Winslow Homer",
    "year": "1899",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1975.92.15: https://www.nga.gov/collection/art-object-page.55590.html, CC0 (gemeinfrei)"
  },
  {
    "id": "hohauling",
    "title": "Key West, Anker lichten",
    "artist": "Winslow Homer",
    "year": "1903",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1975.92.9: https://www.nga.gov/collection/art-object-page.55584.html, CC0 (gemeinfrei)"
  },
  {
    "id": "horedshirt",
    "title": "Rotes Hemd, Homosassa, Florida",
    "artist": "Winslow Homer",
    "year": "1904",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1975.92.13: https://www.nga.gov/collection/art-object-page.55588.html, CC0 (gemeinfrei)"
  },
  {
    "id": "horapids",
    "title": "In den Stromschnellen des Saguenay",
    "artist": "Winslow Homer",
    "year": "1905–1910",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 11.57: https://www.metmuseum.org/art/collection/search/11137, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "homer",
  "name": "Winslow Homer",
  "title": "Winslow Homers Lebensweg",
  "life": "1836–1910",
  "part": "Am Meer und in den Wäldern",
  "subtitle": "Von Boston nach Cullercoats, Maine und in die Karibik",
  "cover": "hobreezing",
  "intro": "Reise mit Winslow Homer durch sein Leben: von den ersten Bildern in New York über ein Fischerdorf in England bis an die felsige Küste von Maine und auf die Inseln der Karibik. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Winslow Homer stirbt am 29. September 1910 in seinem Atelier in Prouts Neck.",
    "Heute gilt er als einer der wichtigsten Maler Amerikas, und seine Bilder vom Meer hängen in vielen grossen Museen."
  ],
  "epilogue": "Winslow Homer stirbt am 29. September 1910 in Prouts Neck. Der Weg führt von New York über Cullercoats in England bis an die Küste von Maine und in die Karibik.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,30 C40,16 82,14 94,28 C98,42 80,54 72,64 C66,72 72,84 68,96 C64,112 58,130 50,150 C42,130 38,112 42,96 C38,84 28,74 22,60 C16,48 12,38 18,30 Z",
      "M150,30 C170,20 200,22 214,34 C224,46 220,62 216,76 C208,82 196,74 186,68 C176,64 162,60 154,52 C146,44 144,36 150,30 Z"
    ]
  },
  "stations": [
    {
      "id": "hms1",
      "place": "Vom Zeichner zum Maler",
      "when": "1836–1867",
      "map": {
        "x": 66,
        "y": 48
      },
      "mapLabel": "New York",
      "intro": [
        "Winslow Homer wird am 24. Februar 1836 in Boston geboren und lernt dort bei einem Lithografen, Bilder für den Druck zu zeichnen.",
        "Ab 1857 zeichnet er für Zeitschriften wie Harper’s Weekly, zieht 1859 nach New York und reist Ende 1866 für etwa ein Jahr nach Frankreich."
      ],
      "works": [
        {
          "pid": "hocroquet",
          "text": [
            "Auf einer sonnigen Wiese spielen Frauen in weiten Kleidern und Männer zusammen Krocket.",
            "Das Spiel ist damals in den USA neu und sehr beliebt."
          ],
          "fact": "1866. Art Institute of Chicago."
        },
        {
          "pid": "hostudio",
          "text": [
            "In einem Maleratelier spielen zwei Männer zusammen Musik, einer davon auf dem Cello.",
            "Neben ihnen steht eine Staffelei mit einem Bild."
          ],
          "fact": "1867. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "horye",
          "text": [
            "Eine junge Frau steht mitten in einem hohen, reifen Kornfeld und schaut uns an.",
            "Der Titel stammt von einem bekannten Lied des schottischen Dichters Robert Burns."
          ],
          "fact": "1867. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hofield",
          "text": [
            "Bäuerinnen bücken sich bei der Arbeit auf einem Feld unter einem hellen Himmel.",
            "Homer malt diese Ölskizze wahrscheinlich während seines Aufenthalts in Frankreich."
          ],
          "fact": "1867. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "hms2",
      "place": "Sommer auf dem Land und am Meer",
      "when": "1868–1874",
      "map": {
        "x": 72,
        "y": 44
      },
      "mapLabel": "Neuengland",
      "intro": [
        "Nach seiner Rückkehr aus Frankreich malt Homer spielende Kinder, junge Frauen auf dem Land und Ausflügler in den Bergen und am Strand.",
        "1873 verbringt er den Sommer in Gloucester in Massachusetts und malt dort zum ersten Mal regelmässig mit Wasserfarben."
      ],
      "works": [
        {
          "pid": "howashington",
          "text": [
            "Ausflügler rasten mit ihren Pferden auf den Felsen des Mount Washington in New Hampshire.",
            "Über die Berggipfel ziehen graue und weisse Wolken."
          ],
          "fact": "1869. Art Institute of Chicago."
        },
        {
          "pid": "hodinnerhorn",
          "text": [
            "Eine junge Frau im weissen Kleid steht an einer Hauswand und bläst in ein langes Horn.",
            "So ruft sie die anderen zum Essen."
          ],
          "fact": "1870. National Gallery of Art, Washington."
        },
        {
          "pid": "hosnapwhip",
          "text": [
            "Eine Reihe Jungen hält sich an den Händen und rennt über eine Wiese vor einem roten Schulhaus.",
            "Bei diesem Spiel schwingt die Kette herum, und zwei Jungen am Ende sind schon hingefallen."
          ],
          "fact": "1872. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "horedschool",
          "text": [
            "Eine junge Frau in einem gestreiften Kleid steht mit einem Buch vor einem roten Schulhaus.",
            "Hinter ihr leuchtet der Himmel in Gelb und Rosa."
          ],
          "fact": "1873. National Gallery of Art, Washington."
        },
        {
          "pid": "hodory",
          "text": [
            "Einige Jungen sitzen in einem flachen Ruderboot im ruhigen Hafenwasser.",
            "Im Hintergrund fahren Segelschiffe über die Bucht."
          ],
          "fact": "1873. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hoberry",
          "text": [
            "Kinder pflücken Beeren auf einem Hügel hoch über dem Meer.",
            "Einige tragen Körbe und Hüte mit breiten Krempen gegen die Sonne."
          ],
          "fact": "1873. National Gallery of Art, Washington."
        },
        {
          "pid": "hoeasthampton",
          "text": [
            "Am Strand von East Hampton auf Long Island sitzen Frauen unter einem Sonnenschirm im Sand.",
            "Eine andere Frau in Rot geht über den hellen Strand."
          ],
          "fact": "1874. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "hms3",
      "place": "Segelboote, Höfe und Virginia",
      "when": "1873–1881",
      "map": {
        "x": 70,
        "y": 46
      },
      "mapLabel": "Gloucester",
      "intro": [
        "In diesen Jahren reist Homer nach Virginia und verbringt 1878 einen Sommer auf einem Bauernhof im Staat New York.",
        "Im Sommer 1880 wohnt er auf einer kleinen Insel im Hafen von Gloucester und malt dort viele Aquarelle."
      ],
      "works": [
        {
          "pid": "hobreezing",
          "text": [
            "Ein Mann und drei Jungen segeln bei frischem Wind in einem kleinen Boot über das Wasser.",
            "Homer zeigt das Bild 1876 in einer grossen Ausstellung in New York."
          ],
          "fact": "1873–1876. National Gallery of Art, Washington."
        },
        {
          "pid": "hoautumn",
          "text": [
            "Eine junge Frau in dunklem Kleid und Hut steht zwischen roten und gelben Herbstblättern.",
            "Der ganze Hintergrund leuchtet in warmen Rot- und Brauntönen."
          ],
          "fact": "1877. National Gallery of Art, Washington."
        },
        {
          "pid": "hocarnival",
          "text": [
            "Frauen nähen einem Mann ein buntes Kostüm aus Stoffstücken, Kinder schauen dabei zu.",
            "Homer malt das Bild in Virginia."
          ],
          "fact": "1877. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "homilkmaid",
          "text": [
            "Ein Mädchen mit zwei Milcheimern steht im Schatten der Bäume, hinter ihr steht eine Kuh.",
            "Vorne im Gras pickt ein Hahn."
          ],
          "fact": "1878. National Gallery of Art, Washington."
        },
        {
          "pid": "hopeach",
          "text": [
            "Eine junge Frau sitzt mit einem Korb auf einer Mauer aus runden Steinen.",
            "Hinter ihr blühen Pfirsichbäume unter einem wolkigen Himmel."
          ],
          "fact": "1878. Art Institute of Chicago."
        },
        {
          "pid": "hotwoladies",
          "text": [
            "Zwei junge Frauen in weissen Kleidern sitzen eng nebeneinander und unterhalten sich.",
            "Ihre Hüte und Kleider heben sich hell vom grünen Hintergrund ab."
          ],
          "fact": "1880. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hoboyboat",
          "text": [
            "Ein Junge rudert in einem kleinen Boot über das ruhige Wasser.",
            "Im Hintergrund steht ein Leuchtturm auf einem hellen Ufer."
          ],
          "fact": "1880–1881. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "hms4",
      "place": "Ein Fischerdorf an der Nordsee",
      "when": "1881–1882",
      "map": {
        "x": 156,
        "y": 34
      },
      "mapLabel": "Cullercoats",
      "intro": [
        "1881 reist Homer nach England und lebt bis Ende 1882 in Cullercoats, einem Fischerdorf an der Nordsee bei Tynemouth.",
        "Er malt vor allem die Frauen der Fischer, die Netze flicken, Körbe tragen und am Ufer auf die Boote warten."
      ],
      "works": [
        {
          "pid": "hofishergirls",
          "text": [
            "Drei junge Frauen mit Körben gehen am felsigen Ufer bei Tynemouth entlang.",
            "Im Hintergrund sind die Segel der Fischerboote zu sehen."
          ],
          "fact": "1881. National Gallery of Art, Washington."
        },
        {
          "pid": "hofishwives",
          "text": [
            "Vier Frauen gehen mit Körben auf dem Rücken über den nassen Strand.",
            "Im hellen Licht spiegeln sie sich im feuchten Sand."
          ],
          "fact": "1881. National Gallery of Art, Washington."
        },
        {
          "pid": "horeturn",
          "text": [
            "Zwei Fischer, einer in gelbem Ölzeug, stehen neben ihrem bunt gestrichenen Boot am Strand.",
            "Draussen auf dem Meer fährt ein Segelboot."
          ],
          "fact": "1881. Art Institute of Chicago."
        },
        {
          "pid": "howatcher",
          "text": [
            "Eine Frau steht am Strand und schaut hinaus auf das stürmische Meer.",
            "Weit draussen sind kleine Segelboote zu sehen."
          ],
          "fact": "1882. Art Institute of Chicago."
        },
        {
          "pid": "homending",
          "text": [
            "Zwei Frauen sitzen an einer Hauswand und flicken ein Fischernetz.",
            "Die helle Wand hinter ihnen nimmt fast das ganze Bild ein."
          ],
          "fact": "1882. National Gallery of Art, Washington."
        },
        {
          "pid": "hosparrow",
          "text": [
            "Vor einem alten Steinhaus in Cullercoats sitzen und stehen Frauen an einer Holztreppe.",
            "Das Bild trägt den Namen dieses Hauses."
          ],
          "fact": "um 1881–1882. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "hms5",
      "place": "Prouts Neck und die Adirondacks",
      "when": "1883–1895",
      "map": {
        "x": 76,
        "y": 40
      },
      "mapLabel": "Prouts Neck",
      "intro": [
        "1883 zieht Homer nach Prouts Neck an der Küste von Maine, wo er in einem Atelier nahe den Klippen lebt und arbeitet.",
        "Zum Angeln und Malen fährt er immer wieder in die Adirondack-Berge im Staat New York, wo er Mitglied des North Woods Club ist."
      ],
      "works": [
        {
          "pid": "hoinsidebar",
          "text": [
            "Eine Fischersfrau mit einem Korb stemmt sich gegen den starken Wind.",
            "Hinter ihr liegen zwei Boote im unruhigen Wasser."
          ],
          "fact": "1883. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hobreakers",
          "text": [
            "Hohe Wellen brechen sich an den dunklen Felsen von Prouts Neck.",
            "Weisse Gischt fliegt hoch über das Wasser."
          ],
          "fact": "1883. Art Institute of Chicago."
        },
        {
          "pid": "hoherring",
          "text": [
            "In einem kleinen Boot zieht ein Fischer ein Netz voller glänzender Heringe aus dem Meer.",
            "Sein Gefährte, vielleicht ein Junge, nimmt den Fang heraus."
          ],
          "fact": "1885. Art Institute of Chicago."
        },
        {
          "pid": "hocampfire",
          "text": [
            "Der Bergführer Rufus Wallace sitzt am Lagerfeuer zwischen den Wurzeln einer umgestürzten Hemlocktanne.",
            "Der Rauch des Feuers steigt zwischen den Bäumen auf."
          ],
          "fact": "um 1892. Art Institute of Chicago."
        },
        {
          "pid": "honorthwoods",
          "text": [
            "Am Rand einer blühenden Bergwiese stehen zwei Weisswedelhirsche, ein Weibchen und ein Männchen.",
            "Dahinter ragen zwei hohe Kiefern vor blauen Bergen auf."
          ],
          "fact": "1892. Art Institute of Chicago."
        },
        {
          "pid": "homoonlight",
          "text": [
            "Der Mond scheint durch die Wolken und lässt die Wellen an der Küste silbern glänzen.",
            "Wood Island ist eine kleine Insel mit einem Leuchtturm vor der Küste von Maine."
          ],
          "fact": "1894. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hocannon",
          "text": [
            "Grüne Wellen rollen zwischen dunklen Felsen an die Küste.",
            "Der Name stammt von einem Felsen bei Prouts Neck, der wie eine Kanone aussieht."
          ],
          "fact": "1895. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "honortheaster",
          "text": [
            "Bei einem Sturm aus Nordosten schlägt eine mächtige Welle an die Felsen und wirft weisse Gischt hoch.",
            "Einige Jahre später überarbeitet Homer das Bild noch einmal."
          ],
          "fact": "1895. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "hms6",
      "place": "Späte Reisen: Karibik und Kanada",
      "when": "1884–1910",
      "map": {
        "x": 62,
        "y": 74
      },
      "mapLabel": "Karibik",
      "intro": [
        "Im Winter reist Homer immer wieder in den Süden: auf die Bahamas, nach Kuba, Florida und Bermuda.",
        "Dort malt er Palmen, weisse Häuser und klares Wasser in hellen Aquarellen, und im Sommer fährt er auch zum Angeln nach Québec in Kanada."
      ],
      "works": [
        {
          "pid": "hohut",
          "text": [
            "Eine weisse Hütte mit Strohdach steht zwischen Palmen und Büschen in Nassau auf den Bahamas.",
            "Vor der Hütte pickt ein Hahn im Sand."
          ],
          "fact": "1885. National Gallery of Art, Washington."
        },
        {
          "pid": "hopalmtree",
          "text": [
            "Eine hohe Palme biegt sich im starken Wind über dem Meer.",
            "Unten am Ufer wachsen kleinere Palmen."
          ],
          "fact": "1898. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hoflowergarden",
          "text": [
            "Rote und gelbe Blumen blühen vor einem hellen Haus am Wasser auf Bermuda.",
            "Dahinter liegt eine blaue Bucht."
          ],
          "fact": "1899. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hosaltkettle",
          "text": [
            "Helle Häuser spiegeln sich im ruhigen Wasser einer Bucht auf Bermuda.",
            "Über ihnen türmen sich weisse Wolken am blauen Himmel."
          ],
          "fact": "1899. National Gallery of Art, Washington."
        },
        {
          "pid": "hohauling",
          "text": [
            "Im Wasser von Key West in Florida holen Seeleute den Anker eines Segelboots ein.",
            "Die weissen Segel hängen noch locker herab."
          ],
          "fact": "1903. National Gallery of Art, Washington."
        },
        {
          "pid": "horedshirt",
          "text": [
            "Am Ufer des Homosassa-Flusses in Florida stehen hohe Palmen.",
            "Unten am Wasser ist ganz klein eine Gestalt in einem roten Hemd zu sehen."
          ],
          "fact": "1904. National Gallery of Art, Washington."
        },
        {
          "pid": "horapids",
          "text": [
            "Zwei Männer fahren in einem Kanu durch die Stromschnellen des Saguenay in Québec.",
            "Es ist eines der letzten Bilder, an denen Homer arbeitet."
          ],
          "fact": "1905–1910. Metropolitan Museum of Art, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
