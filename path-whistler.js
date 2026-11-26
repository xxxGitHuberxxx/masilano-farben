// v10.43 James McNeill Whistler life journey (1834–1903). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "wlwapping",
    "title": "Wapping",
    "artist": "James McNeill Whistler",
    "year": "1860–1864",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1982.76.8: https://www.nga.gov/collection/art-object-page.61254.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wloldbatt",
    "title": "Grau und Silber: Old Battersea Reach",
    "artist": "James McNeill Whistler",
    "year": "1863",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.449: https://www.artic.edu/artworks/81574, CC0 (gemeinfrei)"
  },
  {
    "id": "wlbattersea",
    "title": "Battersea Reach",
    "artist": "James McNeill Whistler",
    "year": "um 1863",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.79.35: https://www.nga.gov/collection/art-object-page.82416.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlchelsea",
    "title": "Grau und Silber: Chelsea Wharf",
    "artist": "James McNeill Whistler",
    "year": "um 1864–1868",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1942.9.99: https://www.nga.gov/collection/art-object-page.1238.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlwhitegirl",
    "title": "Symphonie in Weiss Nr. 1: Das weisse Mädchen",
    "artist": "James McNeill Whistler",
    "year": "1861–1863",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1943.6.2: https://www.nga.gov/collection/art-object-page.12198.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wltrouville",
    "title": "Trouville (Grau und Grün, das silberne Meer)",
    "artist": "James McNeill Whistler",
    "year": "1865",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.448: https://www.artic.edu/artworks/81572, CC0 (gemeinfrei)"
  },
  {
    "id": "wlstudio",
    "title": "Der Künstler in seinem Atelier",
    "artist": "James McNeill Whistler",
    "year": "1865–1866",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1912.141: https://www.artic.edu/artworks/65709, CC0 (gemeinfrei)"
  },
  {
    "id": "whistler",
    "title": "Arrangement in Grau und Schwarz Nr. 1",
    "artist": "James McNeill Whistler",
    "year": "1871",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «James Abbott McNeill Whistler - Portrait of the Artist's Mother - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "wlsouthampton",
    "title": "Nocturne: Blau und Gold – Southampton Water",
    "artist": "James McNeill Whistler",
    "year": "1872",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1900.52: https://www.artic.edu/artworks/56905, CC0 (gemeinfrei)"
  },
  {
    "id": "wldrwhistler",
    "title": "Bildnis von Dr. William McNeill Whistler",
    "artist": "James McNeill Whistler",
    "year": "1871–1873",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1977.235: https://www.artic.edu/artworks/111478, CC0 (gemeinfrei)"
  },
  {
    "id": "wlcarlyle",
    "title": "Studie für «Arrangement in Grau und Schwarz Nr. 2: Bildnis von Thomas Carlyle»",
    "artist": "James McNeill Whistler",
    "year": "1872–1873",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1956.763: https://www.artic.edu/artworks/3551, CC0 (gemeinfrei)"
  },
  {
    "id": "wljapfan",
    "title": "Japanerin, einen Fächer bemalend",
    "artist": "James McNeill Whistler",
    "year": "um 1872",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1933.222.a: https://clevelandart.org/art/1933.222.a, CC0 (gemeinfrei)"
  },
  {
    "id": "wlirving",
    "title": "Arrangement in Schwarz Nr. 3: Sir Henry Irving als Philipp II. von Spanien",
    "artist": "James McNeill Whistler",
    "year": "1876",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 10.86: https://www.metmuseum.org/art/collection/search/13209, CC0 (gemeinfrei)"
  },
  {
    "id": "wlgoldgirl",
    "title": "Harmonie in Gelb und Gold: Das goldene Mädchen – Connie Gilchrist",
    "artist": "James McNeill Whistler",
    "year": "um 1876–1877",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 11.32: https://www.metmuseum.org/art/collection/search/13237, CC0 (gemeinfrei)"
  },
  {
    "id": "wlpalace",
    "title": "Der Palast; weiss und rosa",
    "artist": "James McNeill Whistler",
    "year": "1879–1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2012.72.1: https://www.nga.gov/collection/art-object-page.158809.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlsangiorgio",
    "title": "Die Kirche San Giorgio Maggiore",
    "artist": "James McNeill Whistler",
    "year": "1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.136.186: https://www.nga.gov/collection/art-object-page.168823.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlparadiso",
    "title": "Corte del Paradiso",
    "artist": "James McNeill Whistler",
    "year": "1880",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2002.679: https://www.artic.edu/artworks/158382, CC0 (gemeinfrei)"
  },
  {
    "id": "wlpinkbrown",
    "title": "Notiz in Rosa und Braun",
    "artist": "James McNeill Whistler",
    "year": "um 1880",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 17.97.5: https://www.metmuseum.org/art/collection/search/13215, CC0 (gemeinfrei)"
  },
  {
    "id": "wlduret",
    "title": "Arrangement in Fleischfarbe und Schwarz: Bildnis von Théodore Duret",
    "artist": "James McNeill Whistler",
    "year": "1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 13.20: https://www.metmuseum.org/art/collection/search/13211, CC0 (gemeinfrei)"
  },
  {
    "id": "wlladygray",
    "title": "Dame in Grau",
    "artist": "James McNeill Whistler",
    "year": "um 1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 06.312: https://www.metmuseum.org/art/collection/search/13245, CC0 (gemeinfrei)"
  },
  {
    "id": "wlyellowroom",
    "title": "Das gelbe Zimmer",
    "artist": "James McNeill Whistler",
    "year": "um 1883–1884",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2017.664: https://www.metmuseum.org/art/collection/search/760942, CC0 (gemeinfrei)"
  },
  {
    "id": "wlvillageshop",
    "title": "Dorfladen, Chelsea",
    "artist": "James McNeill Whistler",
    "year": "1883–1884",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1991.7.4: https://www.nga.gov/collection/art-object-page.72049.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlfishboats",
    "title": "Violett: Die Rückkehr der Fischerboote",
    "artist": "James McNeill Whistler",
    "year": "um 1885",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1991.7.2: https://www.nga.gov/collection/art-object-page.72047.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlbeach",
    "title": "Strandszene",
    "artist": "James McNeill Whistler",
    "year": "1885",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1991.7.3: https://www.nga.gov/collection/art-object-page.72048.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wldieppe",
    "title": "Variationen in Violett und Grau – Marktplatz, Dieppe",
    "artist": "James McNeill Whistler",
    "year": "1885",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2000.512: https://www.metmuseum.org/art/collection/search/16863, CC0 (gemeinfrei)"
  },
  {
    "id": "wlandalusian",
    "title": "Perlmutt und Silber: Die Andalusierin",
    "artist": "James McNeill Whistler",
    "year": "um 1888–1900",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1943.6.1: https://www.nga.gov/collection/art-object-page.12197.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlviolin",
    "title": "Die Geigerin",
    "artist": "James McNeill Whistler",
    "year": "um 1890–1894",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1942.1133: https://clevelandart.org/art/1942.1133, CC0 (gemeinfrei)"
  },
  {
    "id": "wldeepsea",
    "title": "Violett und Silber – Das tiefe Meer",
    "artist": "James McNeill Whistler",
    "year": "1893",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1955.743: https://www.artic.edu/artworks/84088, CC0 (gemeinfrei)"
  },
  {
    "id": "wleddy",
    "title": "Arrangement in Fleischfarbe und Braun: Bildnis von Arthur Jerome Eddy",
    "artist": "James McNeill Whistler",
    "year": "1894",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1931.501: https://www.artic.edu/artworks/8958, CC0 (gemeinfrei)"
  },
  {
    "id": "wlalicebutt",
    "title": "Alice Butt",
    "artist": "James McNeill Whistler",
    "year": "um 1895",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1948.16.2: https://www.nga.gov/collection/art-object-page.35081.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlhannay",
    "title": "Alexander Arnold Hannay",
    "artist": "James McNeill Whistler",
    "year": "um 1896",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1943.11.7: https://www.nga.gov/collection/art-object-page.30217.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlgirlhead",
    "title": "Studie von Kopf und Schultern eines Mädchens",
    "artist": "James McNeill Whistler",
    "year": "1896–1897",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.212: https://www.artic.edu/artworks/14317, CC0 (gemeinfrei)"
  },
  {
    "id": "wlselfport",
    "title": "Gold und Braun: Selbstbildnis",
    "artist": "James McNeill Whistler",
    "year": "um 1896–1898",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1959.3.2: https://www.nga.gov/collection/art-object-page.45879.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlvanderbilt",
    "title": "George W. Vanderbilt",
    "artist": "James McNeill Whistler",
    "year": "1897–1903",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1959.3.3: https://www.nga.gov/collection/art-object-page.45880.html, CC0 (gemeinfrei)"
  },
  {
    "id": "wlchelseashop",
    "title": "Laden in Chelsea",
    "artist": "James McNeill Whistler",
    "year": "1897–1900",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.210: https://www.artic.edu/artworks/14313, CC0 (gemeinfrei)"
  },
  {
    "id": "wlzeeland",
    "title": "Marschland in Seeland",
    "artist": "James McNeill Whistler",
    "year": "um 1900",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2015.19.509: https://www.nga.gov/collection/art-object-page.184165.html, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "whistler",
  "name": "James McNeill Whistler",
  "title": "James McNeill Whistlers Lebensweg",
  "life": "1834–1903",
  "part": "Themse, Meer, Venedig und Paris",
  "subtitle": "Nocturnes, Arrangements und kleine Aquarelle",
  "cover": "wlwapping",
  "intro": "Reise mit James McNeill Whistler durch sein Leben: von den Schiffen auf der Themse über das Meer bei Trouville und die Kanäle von Venedig bis zu den späten Bildnissen in Paris und London. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "James McNeill Whistler stirbt am 17. Juli 1903 in London.",
    "Seine stillen Bilder in wenigen Tönen klingen fast wie Musik."
  ],
  "epilogue": "James McNeill Whistler stirbt am 17. Juli 1903 in London. Der Weg führt von der Themse über das Meer und Venedig bis zu den späten Bildnissen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,8 C54,4 66,12 68,26 C70,40 76,50 72,58 C64,64 46,62 38,56 C30,48 34,36 30,26 C28,16 32,10 40,8 Z",
      "M78,62 C96,54 126,56 140,66 C148,80 146,98 136,110 C120,118 98,118 84,110 C72,100 66,80 78,62 Z",
      "M150,84 C160,80 170,86 176,96 C182,108 192,120 198,134 C200,142 192,146 186,140 C176,128 166,116 156,104 C150,96 146,88 150,84 Z"
    ]
  },
  "stations": [
    {
      "id": "wls1",
      "place": "London: Schiffe auf der Themse",
      "when": "1834–1864",
      "map": {
        "x": 56,
        "y": 40
      },
      "mapLabel": "London",
      "intro": [
        "James McNeill Whistler wird am 11. Juli 1834 in Lowell in den USA geboren und verbringt einige Kinderjahre in Sankt Petersburg.",
        "1855 geht er nach Paris, um Maler zu werden; ab 1859 lebt er vor allem in London an der Themse."
      ],
      "works": [
        {
          "pid": "wlwapping",
          "text": [
            "Auf einem Balkon über der Themse sitzen eine Frau mit rotem Haar und zwei Männer.",
            "Dahinter drängen sich Schiffe mit hohen Masten."
          ],
          "fact": "1860–1864. National Gallery of Art, Washington."
        },
        {
          "pid": "wloldbatt",
          "text": [
            "Lastkähne mit braunen Segeln liegen auf der grauen Themse.",
            "Am anderen Ufer rauchen Fabrikschornsteine."
          ],
          "fact": "1863. Art Institute of Chicago."
        },
        {
          "pid": "wlbattersea",
          "text": [
            "Viele Boote mit roten und braunen Segeln liegen am Ufer der Themse.",
            "Die Masten ragen schräg in den hellen Himmel."
          ],
          "fact": "um 1863. National Gallery of Art, Washington."
        },
        {
          "pid": "wlchelsea",
          "text": [
            "Im Dunst sind Segelboote und Masten nur zart zu erkennen.",
            "Fast alles ist in Grau und Silber gemalt."
          ],
          "fact": "um 1864–1868. National Gallery of Art, Washington."
        },
        {
          "pid": "wlwhitegirl",
          "text": [
            "Eine junge Frau mit rotem Haar steht in einem weissen Kleid vor einem weissen Vorhang.",
            "Zu ihren Füssen liegt ein Tierfell, in der Hand hält sie eine Blume."
          ],
          "fact": "1861–1863. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "wls2",
      "place": "Das Meer bei Trouville",
      "when": "1865–1866",
      "map": {
        "x": 92,
        "y": 66
      },
      "mapLabel": "Trouville",
      "intro": [
        "1865 malt Whistler zusammen mit Gustave Courbet in Trouville an der französischen Küste.",
        "Er malt das Meer mit ganz wenigen Farben, fast nur in Grau und Grün."
      ],
      "works": [
        {
          "pid": "wltrouville",
          "text": [
            "Weisse Segelboote gleiten über ein stilles, graugrünes Meer.",
            "Himmel und Wasser gehen fast ineinander über."
          ],
          "fact": "1865. Art Institute of Chicago."
        },
        {
          "pid": "wlstudio",
          "text": [
            "Eine Frau in Weiss ruht auf einem Sofa, eine zweite steht daneben.",
            "Rechts steht Whistler selbst mit Pinseln in der Hand."
          ],
          "fact": "1865–1866. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "whistler1",
      "place": "Nocturnes und Arrangements",
      "when": "1867–1878",
      "map": {
        "x": 54,
        "y": 44
      },
      "mapLabel": "London",
      "intro": [
        "Whistler gibt seinen Bildern Titel wie Musikstücke: Nocturne, Symphonie, Arrangement.",
        "1871 malt er seine Mutter Anna, eines seiner bekanntesten Bilder."
      ],
      "works": [
        {
          "pid": "whistler",
          "text": [
            "Whistler malte seine Mutter Anna im Profil, sitzend in einem grauen Raum.",
            "Er nannte das Bild bewusst ein «Arrangement»: Ihm ging es um Flächen, Linien und Töne, nicht um ein typisches Porträt."
          ],
          "fact": "1871. Musée d’Orsay, Paris."
        },
        {
          "pid": "wlsouthampton",
          "text": [
            "Über dem dunkelblauen Wasser leuchtet ein kleiner goldener Lichtpunkt.",
            "Whistler nennt solche Nachtbilder «Nocturnes», wie Musikstücke."
          ],
          "fact": "1872. Art Institute of Chicago."
        },
        {
          "pid": "wldrwhistler",
          "text": [
            "Der Bruder des Malers trägt einen breiten Hut und ein helles Hemd mit dunkler Schleife.",
            "William McNeill Whistler ist Arzt."
          ],
          "fact": "1871–1873. Art Institute of Chicago."
        },
        {
          "pid": "wlcarlyle",
          "text": [
            "Der Schriftsteller Thomas Carlyle sitzt im Profil in einem dunklen Raum.",
            "An der Wand hinter ihm hängen gerahmte Bilder."
          ],
          "fact": "1872–1873. Art Institute of Chicago."
        },
        {
          "pid": "wljapfan",
          "text": [
            "Eine Frau in einem gemusterten Kimono hält einen Fächer in der Hand.",
            "Whistler sammelt Kunst aus Japan und lässt sich davon anregen."
          ],
          "fact": "um 1872. Cleveland Museum of Art."
        },
        {
          "pid": "wlirving",
          "text": [
            "Der Schauspieler Henry Irving steht in der Rolle von König Philipp II. von Spanien.",
            "Seine schwarze Kleidung hebt sich kaum vom dunklen Grund ab."
          ],
          "fact": "1876. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "wlgoldgirl",
          "text": [
            "Die junge Tänzerin Connie Gilchrist springt in einem goldgelben Kostüm Seil.",
            "Gold und Gelb leuchten vor dem dunklen Vorhang."
          ],
          "fact": "um 1876–1877. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "wls4",
      "place": "Venedig",
      "when": "1879–1880",
      "map": {
        "x": 184,
        "y": 104
      },
      "mapLabel": "Venedig",
      "intro": [
        "Nach einem teuren Gerichtsstreit mit dem Kunstkritiker John Ruskin hat Whistler 1879 kein Geld mehr.",
        "Er reist nach Venedig und zeichnet dort Kanäle, Höfe und Paläste mit Pastell."
      ],
      "works": [
        {
          "pid": "wlpalace",
          "text": [
            "Ein Palast an einem Kanal in Venedig ist nur mit wenigen Linien gezeichnet.",
            "Farbige Pastellstriche spiegeln sich im Wasser."
          ],
          "fact": "1879–1880. National Gallery of Art, Washington."
        },
        {
          "pid": "wlsangiorgio",
          "text": [
            "Über die Lagune hinweg sieht man die Kirche San Giorgio Maggiore mit ihrem Turm.",
            "Das braune Papier scheint durch und gibt den Farben Wärme."
          ],
          "fact": "1880. National Gallery of Art, Washington."
        },
        {
          "pid": "wlparadiso",
          "text": [
            "Ein enger Hof in Venedig, an den Fenstern hängt bunte Wäsche.",
            "Whistler zeichnet mit Pastell und schwarzer Kreide auf braunes Papier."
          ],
          "fact": "1880. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "wls5",
      "place": "Kleine Bilder in London",
      "when": "1880–1887",
      "map": {
        "x": 58,
        "y": 42
      },
      "mapLabel": "London",
      "intro": [
        "Zurück in London malt Whistler Bildnisse und viele kleine Aquarelle.",
        "Er malt Läden, Strände und Märkte, auch in Dieppe in Frankreich."
      ],
      "works": [
        {
          "pid": "wlpinkbrown",
          "text": [
            "An einer verwitterten Hauswand hängt rosa Wäsche aus den Fenstern.",
            "Unten sind kleine Figuren zu sehen."
          ],
          "fact": "um 1880. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "wlduret",
          "text": [
            "Der Kunstkritiker Théodore Duret steht im Frack und hält einen Zylinder in der Hand.",
            "Über seinem Arm liegt ein rosa Umhang."
          ],
          "fact": "1883. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "wlladygray",
          "text": [
            "Eine Frau in grauem Kleid steht vor einem dunklen Grund.",
            "Whistler malt sie mit Wasserfarbe und Deckfarbe auf dunkelbraunes Papier."
          ],
          "fact": "um 1883. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "wlyellowroom",
          "text": [
            "Eine Frau in violettem Kleid sitzt in einem gelben Zimmer neben einem Kamin.",
            "Über dem Kamin hängt ein Spiegel."
          ],
          "fact": "um 1883–1884. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "wlvillageshop",
          "text": [
            "Ein kleiner Laden mit grünen Fensterläden steht an einer Strasse.",
            "Davor sind kleine Figuren zu sehen."
          ],
          "fact": "1883–1884. National Gallery of Art, Washington."
        },
        {
          "pid": "wlfishboats",
          "text": [
            "Fischerboote kehren über das Wasser zurück, am Ufer warten Menschen.",
            "Das Wasser spiegelt die Segel in hellen Tönen."
          ],
          "fact": "um 1885. National Gallery of Art, Washington."
        },
        {
          "pid": "wlbeach",
          "text": [
            "Viele kleine Figuren sitzen und stehen an einem hellen Strand.",
            "Whistler malt sie mit wenigen schnellen Pinselstrichen."
          ],
          "fact": "1885. National Gallery of Art, Washington."
        },
        {
          "pid": "wldieppe",
          "text": [
            "Auf dem Marktplatz von Dieppe drängen sich Menschen zwischen den Ständen.",
            "Hohe Häuser rahmen den Platz."
          ],
          "fact": "1885. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "wls6",
      "place": "Paris und die späten Jahre",
      "when": "1888–1903",
      "map": {
        "x": 104,
        "y": 82
      },
      "mapLabel": "Paris · London",
      "intro": [
        "1888 heiratet Whistler Beatrice Godwin; 1892 ziehen die beiden nach Paris.",
        "Beatrice stirbt 1896. Whistler malt weiter vor allem Bildnisse."
      ],
      "works": [
        {
          "pid": "wlandalusian",
          "text": [
            "Eine Frau in langem grauem Rock und Bluse mit Puffärmeln steht im Profil.",
            "Die Farben sind zart wie Perlmutt."
          ],
          "fact": "um 1888–1900. National Gallery of Art, Washington."
        },
        {
          "pid": "wlviolin",
          "text": [
            "Eine junge Frau in rosa Kleid hält eine Geige.",
            "Ihr dunkles Haar verschwindet fast im dunklen Hintergrund."
          ],
          "fact": "um 1890–1894. Cleveland Museum of Art."
        },
        {
          "pid": "wldeepsea",
          "text": [
            "Ein tiefblaues Meer liegt unter einem Himmel voller weisser Wolken.",
            "Es gibt keine Menschen und keine Boote, nur Wasser und Himmel."
          ],
          "fact": "1893. Art Institute of Chicago."
        },
        {
          "pid": "wleddy",
          "text": [
            "Der Kunstsammler Arthur Jerome Eddy steht in einem langen dunklen Mantel.",
            "In der Hand hält er einen Hut."
          ],
          "fact": "1894. Art Institute of Chicago."
        },
        {
          "pid": "wlalicebutt",
          "text": [
            "Ein Mädchen mit langem, rotbraunem Haar schaut uns ernst an.",
            "Warme Brauntöne füllen fast das ganze Bild."
          ],
          "fact": "um 1895. National Gallery of Art, Washington."
        },
        {
          "pid": "wlhannay",
          "text": [
            "Ein Mann in dunklem Gehrock steht in einem Raum und schaut uns an.",
            "Das Bild ist auf Holz gemalt."
          ],
          "fact": "um 1896. National Gallery of Art, Washington."
        },
        {
          "pid": "wlgirlhead",
          "text": [
            "Ein Mädchen mit lockigem rotem Haar trägt ein blaues Halstuch.",
            "Whistler malt mit schnellen, breiten Pinselstrichen."
          ],
          "fact": "1896–1897. Art Institute of Chicago."
        },
        {
          "pid": "wlselfport",
          "text": [
            "Whistler malt sich selbst in dunkler Kleidung, eine Hand erhoben.",
            "Er hat einen Schnurrbart und schaut uns aufmerksam an."
          ],
          "fact": "um 1896–1898. National Gallery of Art, Washington."
        },
        {
          "pid": "wlvanderbilt",
          "text": [
            "Ein schlanker Mann in grauem Anzug steht da und hält einen Stock.",
            "Der Hintergrund bleibt fast ganz dunkel."
          ],
          "fact": "1897–1903. National Gallery of Art, Washington."
        },
        {
          "pid": "wlchelseashop",
          "text": [
            "Ein Laden zeigt bunte Waren im Schaufenster, davor stehen kleine Figuren.",
            "Whistler malt die Szene mit Wasserfarbe."
          ],
          "fact": "1897–1900. Art Institute of Chicago."
        },
        {
          "pid": "wlzeeland",
          "text": [
            "Eine flache, grüne Landschaft in Seeland in den Niederlanden.",
            "Am Horizont stehen Bäume und kleine Häuser."
          ],
          "fact": "um 1900. National Gallery of Art, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
