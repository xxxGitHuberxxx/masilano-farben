// v10.43 Paul Gauguin life journey (1848–1903). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "ggtankard",
    "title": "Stillleben: Holzkrug und Metallkanne",
    "artist": "Paul Gauguin",
    "year": "1880",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1999.362: https://www.artic.edu/artworks/153797, CC0 (gemeinfrei)"
  },
  {
    "id": "ggpeonies",
    "title": "Stillleben mit Pfingstrosen",
    "artist": "Paul Gauguin",
    "year": "1884",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1995.47.10: https://www.nga.gov/collection/art-object-page.93046.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gggleaner",
    "title": "Eine bretonische Ährenleserin",
    "artist": "Paul Gauguin",
    "year": "1886",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2006.128.21: https://www.nga.gov/collection/art-object-page.136028.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ggkohler",
    "title": "Madame Alexandre Kohler",
    "artist": "Paul Gauguin",
    "year": "1887–1888",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.27: https://www.nga.gov/collection/art-object-page.46502.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ggbrittany",
    "title": "Bretonische Landschaft",
    "artist": "Paul Gauguin",
    "year": "1888",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.148: https://www.nga.gov/collection/art-object-page.46623.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ggdancing",
    "title": "Bretonische Mädchen beim Tanz, Pont-Aven",
    "artist": "Paul Gauguin",
    "year": "1888",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.19: https://www.nga.gov/collection/art-object-page.61369.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ggcarriere",
    "title": "Selbstbildnis, Carrière gewidmet",
    "artist": "Paul Gauguin",
    "year": "1888 oder 1889",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.20: https://www.nga.gov/collection/art-object-page.66418.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ggarles",
    "title": "Arlesierinnen (Mistral)",
    "artist": "Paul Gauguin",
    "year": "1888",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1934.391: https://www.artic.edu/artworks/19339, CC0 (gemeinfrei)"
  },
  {
    "id": "ggselfport",
    "title": "Selbstbildnis",
    "artist": "Paul Gauguin",
    "year": "1889",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.150: https://www.nga.gov/collection/art-object-page.46625.html, CC0 (gemeinfrei)"
  },
  {
    "id": "gghaystacks",
    "title": "Heuhaufen in der Bretagne",
    "artist": "Paul Gauguin",
    "year": "1890",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1972.9.11: https://www.nga.gov/collection/art-object-page.53129.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ggpouldu",
    "title": "Landschaft bei Le Pouldu",
    "artist": "Paul Gauguin",
    "year": "1890",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.20: https://www.nga.gov/collection/art-object-page.61370.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ggcezanne",
    "title": "Frau vor einem Stillleben von Cézanne",
    "artist": "Paul Gauguin",
    "year": "1890",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.753: https://www.artic.edu/artworks/16648, CC0 (gemeinfrei)"
  },
  {
    "id": "arearea",
    "title": "Arearea (Fröhlichkeit)",
    "artist": "Paul Gauguin",
    "year": "1892",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Paul Gauguin - Arearea - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ggraaurahi",
    "title": "Te raau rahi (Der grosse Baum)",
    "artist": "Paul Gauguin",
    "year": "1891",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1949.513: https://www.artic.edu/artworks/111062, CC0 (gemeinfrei)"
  },
  {
    "id": "gglargetree",
    "title": "Der grosse Baum",
    "artist": "Paul Gauguin",
    "year": "1891",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1975.263: https://clevelandart.org/art/1975.263, CC0 (gemeinfrei)"
  },
  {
    "id": "ggtahland",
    "title": "Tahitianische Landschaft",
    "artist": "Paul Gauguin",
    "year": "1892",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 39.182: https://www.metmuseum.org/art/collection/search/436451, CC0 (gemeinfrei)"
  },
  {
    "id": "ggburao",
    "title": "Te burao (Der Hibiskusbaum)",
    "artist": "Paul Gauguin",
    "year": "1892",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1923.308: https://www.artic.edu/artworks/8360, CC0 (gemeinfrei)"
  },
  {
    "id": "ggsiesta",
    "title": "Die Siesta",
    "artist": "Paul Gauguin",
    "year": "um 1892–1894",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1993.400.3: https://www.metmuseum.org/art/collection/search/436449, CC0 (gemeinfrei)"
  },
  {
    "id": "gghut",
    "title": "Tahitianische Hütte",
    "artist": "Paul Gauguin",
    "year": "1891–1893",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2002.226: https://www.artic.edu/artworks/159071, CC0 (gemeinfrei)"
  },
  {
    "id": "ggfarm",
    "title": "Ein Bauernhof in der Bretagne",
    "artist": "Paul Gauguin",
    "year": "um 1894",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 54.143.2: https://www.metmuseum.org/art/collection/search/436448, CC0 (gemeinfrei)"
  },
  {
    "id": "ggteapot",
    "title": "Stillleben mit Teekanne und Früchten",
    "artist": "Paul Gauguin",
    "year": "1896",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1997.391.2: https://www.metmuseum.org/art/collection/search/437999, CC0 (gemeinfrei)"
  },
  {
    "id": "ggpolynes",
    "title": "Polynesische Frau mit Kindern",
    "artist": "Paul Gauguin",
    "year": "1901",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1927.460: https://www.artic.edu/artworks/34461, CC0 (gemeinfrei)"
  },
  {
    "id": "ggtwowomen",
    "title": "Zwei Frauen",
    "artist": "Paul Gauguin",
    "year": "1901 oder 1902",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1997.391.3: https://www.metmuseum.org/art/collection/search/438001, CC0 (gemeinfrei)"
  },
  {
    "id": "ggfan",
    "title": "Entwurf für einen Fächer mit Landschaft und einer Statue der Göttin Hina",
    "artist": "Paul Gauguin",
    "year": "1900–1903",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2002.225: https://www.artic.edu/artworks/159070, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "gauguin",
  "name": "Paul Gauguin",
  "title": "Paul Gauguins Lebensweg",
  "life": "1848–1903",
  "part": "Von Paris über die Bretagne nach Tahiti",
  "subtitle": "Stillleben, Bretagne und Südsee",
  "cover": "ggdancing",
  "intro": "Reise mit Paul Gauguin durch sein Leben: vom Sonntagsmaler in Paris über die Bretagne und Arles bis nach Tahiti. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Paul Gauguin stirbt am 8. Mai 1903 auf der Insel Hiva Oa.",
    "Seine kräftigen, flächigen Farben prägen viele Maler nach ihm."
  ],
  "epilogue": "Paul Gauguin stirbt am 8. Mai 1903 auf der Insel Hiva Oa. Der Weg führt von den Stillleben in Paris über die Bretagne und Arles bis in die Südsee.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M30,18 C52,8 96,10 108,24 C116,38 110,58 102,72 C94,84 76,90 58,86 C40,82 26,70 22,54 C18,40 20,26 30,18 Z",
      "M150,108 C160,100 178,100 186,108 C190,116 182,124 170,126 C158,127 148,118 150,108 Z",
      "M196,68 C202,64 210,66 212,72 C212,78 204,80 198,78 C194,76 194,70 196,68 Z"
    ]
  },
  "stations": [
    {
      "id": "ggs1",
      "place": "Paris: Sonntagsmaler",
      "when": "1848–1885",
      "map": {
        "x": 70,
        "y": 40
      },
      "mapLabel": "Paris",
      "intro": [
        "Paul Gauguin wird am 7. Juni 1848 in Paris geboren und verbringt einige Kinderjahre in Peru.",
        "Als junger Mann arbeitet er an der Pariser Börse und malt in seiner freien Zeit."
      ],
      "works": [
        {
          "pid": "ggtankard",
          "text": [
            "Ein Holzkrug mit Deckel und eine kleine Metallkanne stehen auf einem Tisch.",
            "Gauguin malt das Bild in der Zeit, in der er noch an der Börse arbeitet."
          ],
          "fact": "1880. Art Institute of Chicago."
        },
        {
          "pid": "ggpeonies",
          "text": [
            "Ein Strauss roter und rosa Pfingstrosen steht in einer Vase vor einer hellblauen Wand.",
            "An der Wand dahinter hängen zwei kleine Bilder."
          ],
          "fact": "1884. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "ggs2",
      "place": "Pont-Aven in der Bretagne",
      "when": "1886–1888",
      "map": {
        "x": 46,
        "y": 44
      },
      "mapLabel": "Bretagne",
      "intro": [
        "1883 gibt Gauguin seine Arbeit auf und wird Maler.",
        "Ab 1886 malt er in Pont-Aven, einem Dorf in der Bretagne, in dem viele Künstler leben."
      ],
      "works": [
        {
          "pid": "gggleaner",
          "text": [
            "Eine Bäuerin mit weisser Haube bückt sich tief nach vorn.",
            "Das Blatt ist in Quadrate eingeteilt, so kann Gauguin die Figur genau in ein anderes Bild übertragen."
          ],
          "fact": "1886. National Gallery of Art, Washington."
        },
        {
          "pid": "ggkohler",
          "text": [
            "Eine Frau in grauem Kleid sitzt vor einem roten Hintergrund.",
            "Sie hat die Hände in den Schoss gelegt und schaut zur Seite."
          ],
          "fact": "1887–1888. National Gallery of Art, Washington."
        },
        {
          "pid": "ggbrittany",
          "text": [
            "Ein stiller Bach spiegelt Hügel und Bäume.",
            "Der Himmel ist hell und fast weiss."
          ],
          "fact": "1888. National Gallery of Art, Washington."
        },
        {
          "pid": "ggdancing",
          "text": [
            "Drei Mädchen in bretonischer Tracht tanzen Hand in Hand auf einer Wiese.",
            "Rechts läuft ein kleiner Hund, links ragt ein Kirchturm auf."
          ],
          "fact": "1888. National Gallery of Art, Washington."
        },
        {
          "pid": "ggcarriere",
          "text": [
            "Gauguin malt sich selbst mit dichtem Haar und einem gelben, gestreiften Pullover.",
            "Oben links steht eine Widmung an seinen Freund, den Maler Eugène Carrière."
          ],
          "fact": "1888 oder 1889. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "ggs3",
      "place": "Arles mit Van Gogh",
      "when": "1888",
      "map": {
        "x": 84,
        "y": 78
      },
      "mapLabel": "Arles",
      "intro": [
        "Im Oktober 1888 reist Gauguin nach Arles in Südfrankreich zu Vincent van Gogh.",
        "Die beiden malen etwa zwei Monate zusammen, dann trennen sie sich im Streit."
      ],
      "works": [
        {
          "pid": "ggarles",
          "text": [
            "Frauen aus Arles gehen in dunkle Tücher gehüllt durch einen Garten.",
            "Der Mistral im Titel ist ein kalter Wind in Südfrankreich."
          ],
          "fact": "1888. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "ggs4",
      "place": "Le Pouldu am Meer",
      "when": "1889–1890",
      "map": {
        "x": 40,
        "y": 52
      },
      "mapLabel": "Bretagne",
      "intro": [
        "Zurück in der Bretagne zieht Gauguin in das kleine Küstendorf Le Pouldu.",
        "Er malt Felder, Heuhaufen und sich selbst, mit immer kräftigeren Farben."
      ],
      "works": [
        {
          "pid": "ggselfport",
          "text": [
            "Gauguin zeigt sich mit einem Heiligenschein über dem Kopf, daneben hängen Äpfel.",
            "Zwischen den Fingern hält er eine kleine Schlange."
          ],
          "fact": "1889. National Gallery of Art, Washington."
        },
        {
          "pid": "gghaystacks",
          "text": [
            "Grosse Heuhaufen stehen auf Feldern in vielen Grün- und Gelbtönen.",
            "Vorn sind Kühe zu sehen."
          ],
          "fact": "1890. National Gallery of Art, Washington."
        },
        {
          "pid": "ggpouldu",
          "text": [
            "Hügel, Felder und kleine Häuser liegen unter einem weiten Himmel.",
            "Le Pouldu ist ein Dorf an der Küste der Bretagne."
          ],
          "fact": "1890. National Gallery of Art, Washington."
        },
        {
          "pid": "ggcezanne",
          "text": [
            "Eine Frau in rosa Bluse sitzt auf einem Stuhl und schaut uns an.",
            "Hinter ihr hängt ein Stillleben mit Früchten von Paul Cézanne."
          ],
          "fact": "1890. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "gauguin1",
      "place": "Tahiti",
      "when": "1891–1893",
      "map": {
        "x": 168,
        "y": 114
      },
      "mapLabel": "Tahiti",
      "intro": [
        "1891 reist Gauguin nach Tahiti, auf der Suche nach einem Leben fern der modernen Grossstadt.",
        "Er malt grosse Bäume, Hütten und die Menschen der Insel in leuchtenden Farben."
      ],
      "works": [
        {
          "pid": "arearea",
          "text": [
            "Zwei tahitianische Frauen sitzen auf einer Wiese, davor ein roter Hund.",
            "Eine von ihnen spielt Flöte; im Hintergrund verehren Frauen eine Götterfigur."
          ],
          "fact": "1892. Musée d’Orsay, Paris."
        },
        {
          "pid": "ggraaurahi",
          "text": [
            "Unter hohen Bäumen sitzen Menschen im Gras, vorn liegt ein Tier.",
            "Im Hintergrund steht eine Hütte zwischen Palmen und Büschen."
          ],
          "fact": "1891. Art Institute of Chicago."
        },
        {
          "pid": "gglargetree",
          "text": [
            "Vor einer langen Hütte stehen und sitzen Menschen unter einem grossen Baum.",
            "Der Boden leuchtet rötlich zwischen den Stämmen."
          ],
          "fact": "1891. Cleveland Museum of Art."
        },
        {
          "pid": "ggtahland",
          "text": [
            "Zwei Frauen gehen einen Weg entlang, daneben grast ein Pferd.",
            "Dahinter steigen grüne Berge auf."
          ],
          "fact": "1892. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "ggburao",
          "text": [
            "Im Vordergrund liegen die verschlungenen Äste eines Hibiskusbaums.",
            "Dahinter sieht man Hütten, Bäume und ein Stück Meer."
          ],
          "fact": "1892. Art Institute of Chicago."
        },
        {
          "pid": "ggsiesta",
          "text": [
            "Frauen ruhen in der Mittagshitze auf einer schattigen Veranda.",
            "Eine Frau mit Strohhut sitzt mit dem Rücken zu uns."
          ],
          "fact": "um 1892–1894. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gghut",
          "text": [
            "Eine Hütte mit Strohdach steht zwischen Bäumen, davor sitzt ein Mensch.",
            "Gauguin malt dieses Blatt mit Wasserfarben."
          ],
          "fact": "1891–1893. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "ggs6",
      "place": "Noch einmal in Frankreich",
      "when": "1893–1895",
      "map": {
        "x": 50,
        "y": 46
      },
      "mapLabel": "Bretagne",
      "intro": [
        "1893 kehrt Gauguin nach Frankreich zurück und zeigt in Paris seine Bilder aus Tahiti.",
        "Er malt auch wieder in der Bretagne."
      ],
      "works": [
        {
          "pid": "ggfarm",
          "text": [
            "Rote Dächer von Bauernhäusern leuchten zwischen dunklen Bäumen.",
            "Im Hintergrund stehen schlanke, hohe Bäume."
          ],
          "fact": "um 1894. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "ggs7",
      "place": "Wieder in der Südsee",
      "when": "1895–1903",
      "map": {
        "x": 204,
        "y": 72
      },
      "mapLabel": "Tahiti · Hiva Oa",
      "intro": [
        "1895 verlässt Gauguin Europa für immer und lebt wieder auf Tahiti.",
        "1901 zieht er auf die Insel Hiva Oa auf den Marquesas."
      ],
      "works": [
        {
          "pid": "ggteapot",
          "text": [
            "Eine blaue Teekanne, Früchte und ein Löffel liegen auf einem weissen Tuch.",
            "An der dunkelblauen Wand dahinter leuchten gelbe Blüten."
          ],
          "fact": "1896. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "ggpolynes",
          "text": [
            "Eine ältere Frau in blauem Kleid hält ein kleines Kind auf dem Schoss.",
            "Neben ihr steht ein Mädchen in einem rosa Kleid."
          ],
          "fact": "1901. Art Institute of Chicago."
        },
        {
          "pid": "ggtwowomen",
          "text": [
            "Zwei Frauen sitzen dicht nebeneinander, eine in Blau, eine in Orange.",
            "Hinter ihnen wachsen Pflanzen mit grossen Blättern."
          ],
          "fact": "1901 oder 1902. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "ggfan",
          "text": [
            "Auf dem gebogenen Blatt liegt eine bunte Landschaft, in der Mitte steht eine Götterstatue.",
            "Gauguin malt den Entwurf mit Wasserfarbe und Deckfarbe."
          ],
          "fact": "1900–1903. Art Institute of Chicago."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
