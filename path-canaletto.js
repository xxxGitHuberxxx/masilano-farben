// v10.43 Giovanni Antonio Canal (Canaletto) life journey (1697–1768). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "caspiazza",
    "title": "Der Markusplatz",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1727–1729",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1988.162: https://www.metmuseum.org/art/collection/search/435839, CC0 (gemeinfrei)"
  },
  {
    "id": "canaletto",
    "title": "Einfahrt in den Canal Grande",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1730",
    "museum": "Museum of Fine Arts, Houston",
    "source": "Wikimedia Commons: «Canaletto - The Entrance to the Grand Canal, Venice - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "carialto",
    "title": "Der Canal Grande mit Blick nach Süden zur Rialtobrücke",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1730–1739",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2019.141.2: https://www.metmuseum.org/art/collection/search/438100, CC0 (gemeinfrei)"
  },
  {
    "id": "cazobenigo",
    "title": "Campo Santa Maria Zobenigo",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1730–1739",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2019.141.3: https://www.metmuseum.org/art/collection/search/438101, CC0 (gemeinfrei)"
  },
  {
    "id": "caangelo",
    "title": "Campo Sant’Angelo",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1730–1739",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2019.141.5: https://www.metmuseum.org/art/collection/search/438103, CC0 (gemeinfrei)"
  },
  {
    "id": "caportello",
    "title": "Die Porta Portello in Padua",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1741–1742",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1961.9.53: https://www.nga.gov/collection/art-object-page.46152.html, CC0 (gemeinfrei)"
  },
  {
    "id": "casanmarco",
    "title": "Der Markusplatz in Venedig",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "1742–1744",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1945.15.3: https://www.nga.gov/collection/art-object-page.32588.html, CC0 (gemeinfrei)"
  },
  {
    "id": "camolo",
    "title": "Die Einfahrt in den Canal Grande von der Mole aus",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "1742–1744",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1945.15.4: https://www.nga.gov/collection/art-object-page.32589.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cawestbridge",
    "title": "Westminster Bridge mit dem Festzug des Lord Mayor auf der Themse",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "1747",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Yale Center for British Art, New Haven, B1976.7.94: https://collections.britishart.yale.edu/catalog/tms:4994, CC0 (gemeinfrei)"
  },
  {
    "id": "cawarwick",
    "title": "Warwick Castle",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "1748",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2019.141.7: https://www.metmuseum.org/art/collection/search/438106, CC0 (gemeinfrei)"
  },
  {
    "id": "cacity",
    "title": "Die City von der Terrasse des Somerset House aus",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1750",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Yale Center for British Art, New Haven, B1976.7.96: https://collections.britishart.yale.edu/catalog/tms:319, CC0 (gemeinfrei)"
  },
  {
    "id": "cawestminster",
    "title": "Westminster von der Terrasse des Somerset House aus",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1750",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Yale Center for British Art, New Haven, B1976.7.97: https://collections.britishart.yale.edu/catalog/tms:320, CC0 (gemeinfrei)"
  },
  {
    "id": "capaul",
    "title": "St Paul’s Cathedral",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1754",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Yale Center for British Art, New Haven, B1976.7.95: https://collections.britishart.yale.edu/catalog/tms:16, CC0 (gemeinfrei)"
  },
  {
    "id": "cacolumn",
    "title": "Englische Phantasielandschaft mit einer Säule",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1754",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1964.2.1: https://www.nga.gov/collection/art-object-page.47179.html, CC0 (gemeinfrei)"
  },
  {
    "id": "capalace",
    "title": "Englische Phantasielandschaft mit einem Palast",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1754",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1964.2.2: https://www.nga.gov/collection/art-object-page.47180.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cawalton",
    "title": "Die alte Brücke von Walton",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "1755",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Yale Center for British Art, New Haven, B1981.25.86: https://collections.britishart.yale.edu/catalog/tms:53, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "canaletto",
  "name": "Giovanni Antonio Canal (Canaletto)",
  "title": "Canalettos Lebensweg",
  "life": "1697–1768",
  "part": "Venedig, Padua und London",
  "subtitle": "Plätze, Kanäle und die Themse",
  "cover": "camolo",
  "intro": "Reise mit Canaletto durch sein Leben: von den Plätzen und Kanälen Venedigs über Padua bis an die Themse in London. Die meisten Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Canaletto stirbt am 19. April 1768 in Venedig.",
    "Seine Ansichten prägen bis heute das Bild, das man sich vom Venedig und vom London des 18. Jahrhunderts macht."
  ],
  "epilogue": "Canaletto stirbt am 19. April 1768 in Venedig. Der Weg führt von den Plätzen Venedigs bis an die Themse und zurück.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M52,10 C64,6 74,14 72,26 C80,32 88,40 84,50 C78,56 66,56 56,54 C46,52 40,46 44,38 C40,30 44,16 52,10 Z",
      "M100,40 C124,30 160,30 190,38 C214,46 230,64 228,90 C226,112 210,128 196,140 C186,150 172,154 166,144 C160,134 150,128 138,124 C120,118 104,104 98,86 C94,70 92,52 100,40 Z"
    ]
  },
  "stations": [
    {
      "id": "canaletto1",
      "place": "Venedig: Plätze und Kanäle",
      "when": "1697–1739",
      "map": {
        "x": 172,
        "y": 120
      },
      "mapLabel": "Venedig",
      "intro": [
        "Giovanni Antonio Canal wird am 18. Oktober 1697 in Venedig geboren; sein Vater malt Kulissen für das Theater, und der Sohn hilft ihm zuerst dabei.",
        "Um 1720 beginnt er, Ansichten seiner Stadt zu malen, die er Reisenden aus ganz Europa verkauft."
      ],
      "works": [
        {
          "pid": "caspiazza",
          "text": [
            "Der weite Markusplatz öffnet sich bis zur Basilika, rechts ragt der hohe Glockenturm in den Himmel.",
            "Auf dem Platz gehen Spaziergänger, unter den Arkaden hängen Sonnensegel."
          ],
          "fact": "um 1727–1729. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "canaletto",
          "text": [
            "Wir blicken vom Bacino di San Marco in den Canal Grande: links die Salute-Kirche mit ihrer weissen Kuppel, davor Gondeln und Lastboote, rechts die Paläste der Stadt.",
            "Canaletto malt solche Veduten für Reisende, die sich an Venedig erinnern wollen."
          ],
          "fact": "um 1730. Museum of Fine Arts, Houston."
        },
        {
          "pid": "carialto",
          "text": [
            "Gondeln und Lastboote fahren auf dem grünen Wasser des Canal Grande zwischen hohen Palästen.",
            "Die Häuser stehen so dicht am Ufer, dass ihre Mauern direkt aus dem Wasser steigen."
          ],
          "fact": "um 1730–1739. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "cazobenigo",
          "text": [
            "Rechts steht die helle Fassade der Kirche Santa Maria Zobenigo mit vielen Figuren und Säulen.",
            "Auf dem kleinen Platz davor unterhalten sich Leute in der Sonne."
          ],
          "fact": "um 1730–1739. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "caangelo",
          "text": [
            "Über einem weiten, fast leeren Platz erhebt sich ein schlanker Glockenturm.",
            "Canaletto zeigt die Häuser ringsum in klarem Licht und mit scharfen Schatten."
          ],
          "fact": "um 1730–1739. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "cas2",
      "place": "Padua und neue Ansichten",
      "when": "1740–1745",
      "map": {
        "x": 164,
        "y": 122
      },
      "mapLabel": "Padua",
      "intro": [
        "Um 1740 kommen weniger Reisende nach Venedig; Canaletto zeichnet und malt nun auch auf dem Festland, etwa in Padua.",
        "In diesen Jahren entstehen auch seine Radierungen und grosse Ansichten des Markusplatzes."
      ],
      "works": [
        {
          "pid": "caportello",
          "text": [
            "Ein Kanal führt an der Porta Portello vorbei, einem Stadttor von Padua, am Ufer liegen Boote.",
            "Vorne liegen grosse Steinblöcke, dahinter Häuser und Bäume unter einem bewölkten Himmel."
          ],
          "fact": "um 1741–1742. National Gallery of Art, Washington."
        },
        {
          "pid": "casanmarco",
          "text": [
            "Vor der Markuskirche und dem rosa Dogenpalast stehen hohe Fahnenmasten, auf dem Platz sind Marktstände aufgebaut.",
            "Zwischen ihnen gehen Händler, Spaziergänger und Herren in langen Mänteln."
          ],
          "fact": "1742–1744. National Gallery of Art, Washington."
        },
        {
          "pid": "camolo",
          "text": [
            "Von der Mole aus sehen wir über das Wasser zur Kirche Santa Maria della Salute mit ihren grossen Kuppeln.",
            "Links liegt ein Segelschiff vor Anker, vorne warten Gondeln am Ufer."
          ],
          "fact": "1742–1744. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "cas3",
      "place": "London und die Themse",
      "when": "1746–1768",
      "map": {
        "x": 66,
        "y": 46
      },
      "mapLabel": "London",
      "intro": [
        "1746 reist Canaletto nach London, wo viele seiner Käufer leben, und bleibt mit einer kurzen Unterbrechung fast zehn Jahre in England.",
        "Er malt die Themse, die neue Westminster Bridge und Landsitze; um 1755 kehrt er nach Venedig zurück."
      ],
      "works": [
        {
          "pid": "cawestbridge",
          "text": [
            "Prächtige Ruderboote ziehen am Tag des neuen Lord Mayor auf der Themse zur Westminster Bridge.",
            "Die Brücke ist 1747 noch nicht fertig, Canaletto malt sie so, wie er sich das fertige Bauwerk vorstellt."
          ],
          "fact": "1747. Yale Center for British Art, New Haven."
        },
        {
          "pid": "cawarwick",
          "text": [
            "Die lange Burg von Warwick liegt hinter einer grünen Wiese, auf der Leute spazieren gehen.",
            "Canaletto malt mehrere Ansichten dieser Burg in Mittelengland."
          ],
          "fact": "1748. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "cacity",
          "text": [
            "Von einer Terrasse am Fluss blicken wir die Themse hinunter zur City von London mit vielen Kirchtürmen.",
            "Über allem erhebt sich die Kuppel der St Paul’s Cathedral."
          ],
          "fact": "um 1750. Yale Center for British Art, New Haven."
        },
        {
          "pid": "cawestminster",
          "text": [
            "Das Gegenstück zum Blick auf die City schaut flussaufwärts nach Westminster und zur Westminster Bridge.",
            "Auf dem breiten Fluss liegen Segelboote und Ruderboote."
          ],
          "fact": "um 1750. Yale Center for British Art, New Haven."
        },
        {
          "pid": "capaul",
          "text": [
            "Die grosse Kuppelkirche St Paul’s steht hell vor einem rosa Himmel, davor fahren Kutschen über den Platz.",
            "Es ist die einzige Ansicht Canalettos, die die ganze Kirche aus der Nähe zeigt."
          ],
          "fact": "um 1754. Yale Center for British Art, New Haven."
        },
        {
          "pid": "cacolumn",
          "text": [
            "Zwischen grossen Bäumen steht eine hohe Säule mit einer Figur auf der Spitze.",
            "Canaletto setzt Dinge aus verschiedenen Orten frei zu einer erfundenen Landschaft zusammen."
          ],
          "fact": "um 1754. National Gallery of Art, Washington."
        },
        {
          "pid": "capalace",
          "text": [
            "Ein grosser Baum neigt sich über einen Teich, auf dem Schwäne schwimmen, dahinter liegt ein Palast am Hang.",
            "Das Bild ist das Gegenstück zur Landschaft mit der Säule."
          ],
          "fact": "um 1754. National Gallery of Art, Washington."
        },
        {
          "pid": "cawalton",
          "text": [
            "Eine kühne Holzbrücke spannt sich in einem weiten Bogen über die Themse bei Walton.",
            "Am Ufer sitzen und stehen Leute, darüber ziehen dunkle Wolken auf."
          ],
          "fact": "1755. Yale Center for British Art, New Haven."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
