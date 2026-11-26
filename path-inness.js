// v10.43 George Inness life journey (1825–1894). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "incrossing",
    "title": "Die Furt",
    "artist": "George Inness",
    "year": "1848",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1977.487: https://www.artic.edu/artworks/94127, CC0 (gemeinfrei)"
  },
  {
    "id": "inoldmill",
    "title": "Die alte Mühle",
    "artist": "George Inness",
    "year": "1849",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1939.388: https://www.artic.edu/artworks/30701, CC0 (gemeinfrei)"
  },
  {
    "id": "inwoodchop",
    "title": "Der Holzfäller",
    "artist": "George Inness",
    "year": "1849",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1963.501: https://clevelandart.org/art/1963.501, CC0 (gemeinfrei)"
  },
  {
    "id": "indurham",
    "title": "Durham, Connecticut",
    "artist": "George Inness",
    "year": "1858",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1927.387: https://clevelandart.org/art/1927.387, CC0 (gemeinfrei)"
  },
  {
    "id": "inwatergap",
    "title": "Delaware Water Gap",
    "artist": "George Inness",
    "year": "1861",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 32.151: https://www.metmuseum.org/art/collection/search/11229, CC0 (gemeinfrei)"
  },
  {
    "id": "inwintersky",
    "title": "Ein Winterhimmel",
    "artist": "George Inness",
    "year": "1866",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1927.388: https://clevelandart.org/art/1927.388, CC0 (gemeinfrei)"
  },
  {
    "id": "insummercats",
    "title": "Sommer in den Catskills",
    "artist": "George Inness",
    "year": "1867",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1912.1837: https://www.artic.edu/artworks/68784, CC0 (gemeinfrei)"
  },
  {
    "id": "inharvestdel",
    "title": "Ernte im Delaware-Tal",
    "artist": "George Inness",
    "year": "1867",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2002.154.1: https://www.nga.gov/collection/art-object-page.125748.html, CC0 (gemeinfrei)"
  },
  {
    "id": "incatskill",
    "title": "Die Catskill Mountains",
    "artist": "George Inness",
    "year": "1870",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1912.1623: https://www.artic.edu/artworks/68388, CC0 (gemeinfrei)"
  },
  {
    "id": "inalban",
    "title": "Aufziehendes Gewitter über den Albaner Bergen",
    "artist": "George Inness",
    "year": "1871",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1927.396: https://clevelandart.org/art/1927.396, CC0 (gemeinfrei)"
  },
  {
    "id": "incampagna",
    "title": "Über die Campagna",
    "artist": "George Inness",
    "year": "1872",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 67.55.145: https://www.metmuseum.org/art/collection/search/11225, CC0 (gemeinfrei)"
  },
  {
    "id": "intivoli",
    "title": "Olivenbäume bei Tivoli",
    "artist": "George Inness",
    "year": "1873",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 1989.287: https://www.metmuseum.org/art/collection/search/13379, CC0 (gemeinfrei)"
  },
  {
    "id": "inbarberini",
    "title": "Pinienhain der Villa Barberini",
    "artist": "George Inness",
    "year": "1876",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 98.16: https://www.metmuseum.org/art/collection/search/11233, CC0 (gemeinfrei)"
  },
  {
    "id": "inetretat",
    "title": "Hang bei Étretat",
    "artist": "George Inness",
    "year": "1876",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.136.79: https://www.nga.gov/collection/art-object-page.178145.html, CC0 (gemeinfrei)"
  },
  {
    "id": "infleecy",
    "title": "Schäfchenwolken",
    "artist": "George Inness",
    "year": "1881",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1942.889: https://clevelandart.org/art/1942.889, CC0 (gemeinfrei)"
  },
  {
    "id": "insisters",
    "title": "Die Schwestern",
    "artist": "George Inness",
    "year": "1882",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1926.132: https://www.artic.edu/artworks/27777, CC0 (gemeinfrei)"
  },
  {
    "id": "inmillpond",
    "title": "Der Mühlteich",
    "artist": "George Inness",
    "year": "1889",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1911.30: https://www.artic.edu/artworks/151108, CC0 (gemeinfrei)"
  },
  {
    "id": "intarpon",
    "title": "Früher Morgen, Tarpon Springs",
    "artist": "George Inness",
    "year": "1892",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1911.32: https://www.artic.edu/artworks/64729, CC0 (gemeinfrei)"
  },
  {
    "id": "insunnyautumn",
    "title": "Sonniger Herbsttag",
    "artist": "George Inness",
    "year": "1892",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1956.578: https://clevelandart.org/art/1956.578, CC0 (gemeinfrei)"
  },
  {
    "id": "inshower",
    "title": "Nach einem Sommerregen",
    "artist": "George Inness",
    "year": "1894",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1911.29: https://www.artic.edu/artworks/64715, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "inness",
  "name": "George Inness",
  "title": "George Inness’ Lebensweg",
  "life": "1825–1894",
  "part": "New York, Neuengland, Italien und Montclair",
  "subtitle": "Licht, Wolken und weites Land",
  "cover": "insummercats",
  "intro": "Reise mit George Inness durch sein Leben: von den Flusstälern bei New York über Neuengland und Italien bis nach Montclair in New Jersey. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "George Inness stirbt 1894 auf einer Reise in Schottland.",
    "In rund fünfzig Jahren hat er mehr als tausend Werke geschaffen."
  ],
  "epilogue": "George Inness stirbt 1894. Der Weg führt von New York über Neuengland, Rom und die Normandie nach Montclair.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,30 C40,16 82,14 94,28 C98,42 80,54 72,64 C66,72 72,84 68,96 C64,112 58,130 50,150 C42,130 38,112 42,96 C38,84 28,74 22,60 C16,48 12,38 18,30 Z",
      "M150,30 C170,20 200,22 214,34 C224,46 220,62 216,76 C208,82 196,74 186,68 C176,64 162,60 154,52 C146,44 144,36 150,30 Z"
    ]
  },
  "stations": [
    {
      "id": "ins1",
      "place": "Erste Landschaften bei New York",
      "when": "1848–1858",
      "map": {
        "x": 76,
        "y": 44
      },
      "mapLabel": "New York",
      "intro": [
        "George Inness wird 1825 in Newburgh im Staat New York geboren und wächst in New York und Newark auf; 1844 stellt er zum ersten Mal an der National Academy of Design aus.",
        "1851 reist er zum ersten Mal nach Italien, nach Rom und Florenz; später sieht er in Frankreich die Bilder der Maler von Barbizon."
      ],
      "works": [
        {
          "pid": "incrossing",
          "text": [
            "Unter hohen Bäumen reitet ein Mann durch einen flachen Fluss, neben ihm waten Kühe durch das Wasser.",
            "Auf der Rückseite der Leinwand steht die Signatur „Geo. Inness 1848“."
          ],
          "fact": "1848. Art Institute of Chicago."
        },
        {
          "pid": "inoldmill",
          "text": [
            "Eine rote Mühle steht hell beleuchtet an einem Bach, davor sind kleine Gestalten zu sehen, rundum stehen dunkle Bäume.",
            "Inness malt gern bewirtschaftetes Land statt unberührter Wildnis; die alte Mühle erzählt vom ruhigen Landleben und zugleich vom Wandel durch die Industrie."
          ],
          "fact": "1849. Art Institute of Chicago."
        },
        {
          "pid": "inwoodchop",
          "text": [
            "Eine mächtige Baumgruppe erhebt sich über felsigem Grund, dahinter öffnet sich ein Tal mit blauen Hügeln.",
            "Inness signiert das Bild unten links mit „G. Inness 1849“."
          ],
          "fact": "1849. Cleveland Museum of Art."
        },
        {
          "pid": "indurham",
          "text": [
            "Schafe weiden auf einer weiten Wiese vor einer Reihe von Bäumen, vorne ist eine Gestalt in Rot im Gras zu sehen.",
            "Unter der sichtbaren Signatur zeigt eine Infrarotaufnahme eine zweite: „G. Inness 1858“."
          ],
          "fact": "1858. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "ins2",
      "place": "Medfield und Eagleswood",
      "when": "1861–1870",
      "map": {
        "x": 82,
        "y": 40
      },
      "mapLabel": "Neuengland",
      "intro": [
        "Im Juni 1860 zieht Inness nach Medfield in Massachusetts; im Herbst 1863 wird er Zeichenlehrer in Eagleswood in New Jersey, wo unter anderen Louis Comfort Tiffany bei ihm lernt.",
        "Die Lehren des schwedischen Denkers Emanuel Swedenborg prägen zunehmend seinen Glauben und seine Kunst."
      ],
      "works": [
        {
          "pid": "inwatergap",
          "text": [
            "Ein Regenbogen steht über dem Delaware, am Ufer trinken Kühe, auf dem Wasser fährt ein Boot.",
            "Das Bild entsteht kurz nach dem Umzug nach Medfield; die ausdrucksvollen Pinselstriche und satten Lasuren zeigen, was Inness von der Malerei aus Barbizon und Holland gelernt hat."
          ],
          "fact": "1861. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "inwintersky",
          "text": [
            "Über einem kahlen, gefrorenen Land leuchtet ein Abendhimmel in Rosa und Gelb; das warme Licht steht gegen das kühle Blau des Bodens.",
            "Ursprünglich stand am linken Rand des Teichs eine Figur, die Inness später übermalt hat."
          ],
          "fact": "1866. Cleveland Museum of Art."
        },
        {
          "pid": "insummercats",
          "text": [
            "Kühe weiden auf einer leuchtend grünen Weide, dahinter erhebt sich ein lang gestreckter blauer Berg.",
            "Ein einzelner hoher Baum und ein Bauernhaus stehen im hellen Sommerlicht."
          ],
          "fact": "1867. Art Institute of Chicago."
        },
        {
          "pid": "inharvestdel",
          "text": [
            "Durch eine Lücke in den Wolken fällt Sonnenlicht auf die weiten Felder des Tals.",
            "1989 verkauft das Walker Art Center das Bild, um mit dem Erlös einen Ankaufsfonds für Gegenwartskunst zu schaffen."
          ],
          "fact": "1867. National Gallery of Art, Washington."
        },
        {
          "pid": "incatskill",
          "text": [
            "Eine Kirche, sorgfältig bestellte Felder und ein Heuhaufen zeigen ein Land, das von Menschen gestaltet ist.",
            "Um die Mitte des 19. Jahrhunderts sind die Catskills das beliebteste Reiseziel Amerikas, nahe an den Städten und reich an weiten Ausblicken."
          ],
          "fact": "1870. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "ins3",
      "place": "Rom, die Campagna und die Normandie",
      "when": "1871–1876",
      "map": {
        "x": 196,
        "y": 66
      },
      "mapLabel": "Italien und Frankreich",
      "intro": [
        "1870 geht Inness mit seiner Familie für vier Jahre nach Europa; in Rom mietet er ein Atelier in der Via Sistina, in dem der Überlieferung nach schon Claude Lorrain gearbeitet haben soll.",
        "Den Sommer 1874 verbringt er in der Normandie; danach malt er in Boston Bilder, zu denen ihn die Zeit in Italien angeregt hat."
      ],
      "works": [
        {
          "pid": "inalban",
          "text": [
            "Schwere graue Wolken ziehen über die Ebene heran, vorne sind kleine Gestalten auf einem Weg zu sehen.",
            "Inness signiert das Bild mit „Rome 1871“; er malt es also während seiner Jahre in Rom."
          ],
          "fact": "1871. Cleveland Museum of Art."
        },
        {
          "pid": "incampagna",
          "text": [
            "Unter einem weiten blauen Himmel liegt die grüne Ebene der Campagna, am Horizont stehen rote Häuser und Schirmpinien.",
            "Das Blatt ist mit Aquarell und Gouache gemalt; kräftige Formen und zarte Farbschichten wirken darin zusammen."
          ],
          "fact": "1872. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "intivoli",
          "text": [
            "Olivenbäume stehen auf einem Hang, unter dem sich eine weite helle Ebene bis zum Horizont erstreckt.",
            "Inness malt das Blatt mit Gouache und Aquarell auf blauem Papier, in dem farbige Fasern stecken."
          ],
          "fact": "1873. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "inbarberini",
          "text": [
            "Hohe Schirmpinien bilden einen dunklen Hain vor einem hellen, warmen Himmel.",
            "Inness malt das grosse Bild 1876 in Boston, angeregt von seiner Zeit in Italien."
          ],
          "fact": "1876. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "inetretat",
          "text": [
            "Eine Frau mit weisser Haube führt Schafe einen Weg am bewaldeten Hang entlang, daneben grasen Kühe.",
            "Étretat liegt an der Küste der Normandie; 1879 wird das Bild in New York als „Etretat, Coast of France“ versteigert."
          ],
          "fact": "1876. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "ins4",
      "place": "Montclair, Milton und Nantucket",
      "when": "1881–1889",
      "map": {
        "x": 74,
        "y": 46
      },
      "mapLabel": "Montclair",
      "intro": [
        "Im Juni 1878 mietet Inness ein Anwesen in Montclair in New Jersey; Anfang der 1880er Jahre verbringt er einige Sommer in Milton in Massachusetts und auf Nantucket.",
        "Im Dezember 1884 kauft er das Anwesen in Montclair und zieht im Februar 1885 ganz dorthin, sein Atelier in New York behält er."
      ],
      "works": [
        {
          "pid": "infleecy",
          "text": [
            "Ein Feldweg führt zwischen Steinen und Bäumen in die Ferne, darüber ziehen weisse und graue Wolken.",
            "Inness signiert das Bild knapp mit „G. Inness / 81“."
          ],
          "fact": "1881. Cleveland Museum of Art."
        },
        {
          "pid": "insisters",
          "text": [
            "Zwei junge Frauen stehen eng beieinander in einem Garten, hinter ihnen steht eine Giesskanne im Gras.",
            "Das kleine Bild ist ungewöhnlich für Inness, der fast nur Landschaften malt; er malt es in Öl auf Karton."
          ],
          "fact": "1882. Art Institute of Chicago."
        },
        {
          "pid": "inmillpond",
          "text": [
            "Ein Baum in leuchtendem Orange steht am Ufer eines stillen Teichs, auf dem in der Ferne eine kleine Gestalt ein Boot rudert.",
            "Kräftiges Orange, Grün und Blau beleben die ruhige Szene; Inness erzählt mehr mit Farbe und Stimmung als mit Einzelheiten."
          ],
          "fact": "1889. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "ins5",
      "place": "Späte Bilder voller Licht",
      "when": "1892–1894",
      "map": {
        "x": 70,
        "y": 50
      },
      "mapLabel": "Montclair und Florida",
      "intro": [
        "Von Montclair aus reist Inness viel, oft um seiner Gesundheit willen, zu den Niagarafällen, nach Virginia, Kalifornien und Tarpon Springs in Florida.",
        "In seinen späten Bildern lösen sich die Formen in Licht und durchscheinende Farben auf."
      ],
      "works": [
        {
          "pid": "intarpon",
          "text": [
            "Im zarten Rosa und Blau des Sonnenaufgangs steht eine winzige Gestalt mit rotem Hut zwischen hohen, schlanken Bäumen.",
            "Das Licht und die Landschaft Floridas regen Inness zu diesem Bild an."
          ],
          "fact": "1892. Art Institute of Chicago."
        },
        {
          "pid": "insunnyautumn",
          "text": [
            "Gelbe und rote Herbstbäume stehen auf einer Wiese, ihre Formen verschwimmen im durchscheinenden Licht.",
            "Das Bild zeigt Inness’ späten Stil, in dem die Landschaft fast wie eine Erscheinung wirkt."
          ],
          "fact": "1892. Cleveland Museum of Art."
        },
        {
          "pid": "inshower",
          "text": [
            "Über einer frisch grünen Wiese mit runden Bäumen ziehen die Regenwolken ab, rechts zeigt sich ein Regenbogen.",
            "Inness signiert das Bild unten rechts mit „G. Inness 1894“."
          ],
          "fact": "1894. Art Institute of Chicago."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
