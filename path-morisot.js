// v10.43 Berthe Morisot life journey (1841–1895). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "mobench",
    "title": "Die Schwester der Künstlerin, Edma, auf einer Bank",
    "artist": "Berthe Morisot",
    "year": "1864",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.159: https://www.nga.gov/collection/art-object-page.52303.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mosisters",
    "title": "Die Schwestern",
    "artist": "Berthe Morisot",
    "year": "1869",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1952.9.2: https://www.nga.gov/collection/art-object-page.42285.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mowindow",
    "title": "Die Schwester der Künstlerin am Fenster",
    "artist": "Berthe Morisot",
    "year": "1869",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.47: https://www.nga.gov/collection/art-object-page.52191.html, CC0 (gemeinfrei)"
  },
  {
    "id": "momother",
    "title": "Die Mutter und die Schwester der Künstlerin",
    "artist": "Berthe Morisot",
    "year": "1869–1870",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.186: https://www.nga.gov/collection/art-object-page.46661.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mopeonies",
    "title": "Pfingstrosen",
    "artist": "Berthe Morisot",
    "year": "um 1869",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1994.59.10: https://www.nga.gov/collection/art-object-page.89682.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mopink",
    "title": "Das rosa Kleid",
    "artist": "Berthe Morisot",
    "year": "um 1870",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2003.20.8: https://www.metmuseum.org/art/collection/search/438009, CC0 (gemeinfrei)"
  },
  {
    "id": "molorient",
    "title": "Der Hafen von Lorient",
    "artist": "Berthe Morisot",
    "year": "1869",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.48: https://www.nga.gov/collection/art-object-page.52192.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mobalcony",
    "title": "Auf dem Balkon",
    "artist": "Berthe Morisot",
    "year": "1871–1872",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.1: https://www.artic.edu/artworks/13916, CC0 (gemeinfrei)"
  },
  {
    "id": "moedma",
    "title": "Edma mit ihrer Tochter Jeanne",
    "artist": "Berthe Morisot",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.160.a-b: https://www.nga.gov/collection/art-object-page.52304.html, CC0 (gemeinfrei)"
  },
  {
    "id": "moforestedge",
    "title": "Am Waldrand (Edma und Jeanne)",
    "artist": "Berthe Morisot",
    "year": "um 1872",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.33: https://www.nga.gov/collection/art-object-page.164943.html, CC0 (gemeinfrei)"
  },
  {
    "id": "cradle",
    "title": "Die Wiege",
    "artist": "Berthe Morisot",
    "year": "1872",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Berthe Morisot - The Cradle - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "moreading",
    "title": "Die Lesende",
    "artist": "Berthe Morisot",
    "year": "1873",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1950.89: https://clevelandart.org/art/1950.89, CC0 (gemeinfrei)"
  },
  {
    "id": "molaundry",
    "title": "Wäsche zum Trocknen aufhängen",
    "artist": "Berthe Morisot",
    "year": "1875",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.28: https://www.nga.gov/collection/art-object-page.66426.html, CC0 (gemeinfrei)"
  },
  {
    "id": "moriesener",
    "title": "Mademoiselle Louise Riesener mit Hut",
    "artist": "Berthe Morisot",
    "year": "um 1877–1880",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1958.41: https://clevelandart.org/art/1958.41, CC0 (gemeinfrei)"
  },
  {
    "id": "mogarden",
    "title": "Frau in einem Garten",
    "artist": "Berthe Morisot",
    "year": "1882–1883",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1999.363: https://www.artic.edu/artworks/153798, CC0 (gemeinfrei)"
  },
  {
    "id": "moknitting",
    "title": "Junge Frau beim Stricken",
    "artist": "Berthe Morisot",
    "year": "um 1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 67.187.89: https://www.metmuseum.org/art/collection/search/437159, CC0 (gemeinfrei)"
  },
  {
    "id": "mostrawhat",
    "title": "Junge Frau mit Strohhut",
    "artist": "Berthe Morisot",
    "year": "1884",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.49: https://www.nga.gov/collection/art-object-page.52193.html, CC0 (gemeinfrei)"
  },
  {
    "id": "moavenue",
    "title": "Frau auf einer Bank an der Avenue du Bois",
    "artist": "Berthe Morisot",
    "year": "1885",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 48.10.8: https://www.metmuseum.org/art/collection/search/337864, CC0 (gemeinfrei)"
  },
  {
    "id": "mocompiegne",
    "title": "Der Wald von Compiègne",
    "artist": "Berthe Morisot",
    "year": "1885",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1978.422: https://www.artic.edu/artworks/53058, CC0 (gemeinfrei)"
  },
  {
    "id": "mosewing",
    "title": "Nähen am Fenster",
    "artist": "Berthe Morisot",
    "year": "um 1885",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 2025.209: https://clevelandart.org/art/2025.209, CC0 (gemeinfrei)"
  },
  {
    "id": "moself",
    "title": "Selbstbildnis",
    "artist": "Berthe Morisot",
    "year": "um 1885",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1965.685R: https://www.artic.edu/artworks/113714, CC0 (gemeinfrei)"
  },
  {
    "id": "modining",
    "title": "Im Esszimmer",
    "artist": "Berthe Morisot",
    "year": "1886",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.185: https://www.nga.gov/collection/art-object-page.46660.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mogeese",
    "title": "Mädchen in einem Boot mit Gänsen",
    "artist": "Berthe Morisot",
    "year": "um 1889",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.50: https://www.nga.gov/collection/art-object-page.52194.html, CC0 (gemeinfrei)"
  },
  {
    "id": "moparakeet",
    "title": "Die Tochter der Künstlerin mit einem Sittich",
    "artist": "Berthe Morisot",
    "year": "1890",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.50: https://www.nga.gov/collection/art-object-page.46525.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mobasket",
    "title": "Junges Mädchen mit Korb",
    "artist": "Berthe Morisot",
    "year": "1891",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2013.989: https://www.artic.edu/artworks/186319, CC0 (gemeinfrei)"
  },
  {
    "id": "moapron",
    "title": "Junges Mädchen mit Schürze",
    "artist": "Berthe Morisot",
    "year": "1891",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2004.110.5: https://www.nga.gov/collection/art-object-page.131028.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mogirlhat",
    "title": "Junges Mädchen mit Hut",
    "artist": "Berthe Morisot",
    "year": "1892",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1964.214: https://www.artic.edu/artworks/20556, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "morisot",
  "name": "Berthe Morisot",
  "title": "Berthe Morisots Lebensweg",
  "life": "1841–1895",
  "part": "Paris, Lorient, Bougival und Mézy",
  "subtitle": "Schwestern, Gärten und eine Tochter",
  "cover": "mostrawhat",
  "intro": "Reise mit Berthe Morisot durch ihr Leben: von den ersten Bildern ihrer Schwester Edma über die Ausstellungen der Impressionisten bis zu den Gärten von Bougival und den Bildnissen ihrer Tochter Julie. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Berthe Morisot stirbt am 2. März 1895 in Paris.",
    "Ihre hellen, schnellen Pinselstriche machen sie zu einer der grossen Malerinnen des Impressionismus."
  ],
  "epilogue": "Berthe Morisot stirbt am 2. März 1895 in Paris. Der Weg führt von den Bildern ihrer Schwester bis zu den Bildnissen ihrer Tochter.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,62 C58,52 86,52 108,40 C126,28 148,12 170,14 C192,20 210,34 214,52 C210,70 200,86 206,104 C212,122 214,140 196,148 C170,154 140,150 114,152 C96,154 80,148 78,132 C80,112 70,96 52,88 C40,82 30,72 40,62 Z"
    ]
  },
  "stations": [
    {
      "id": "mos1",
      "place": "Paris: zwei malende Schwestern",
      "when": "1841–1870",
      "map": {
        "x": 150,
        "y": 46
      },
      "mapLabel": "Paris",
      "intro": [
        "Berthe Morisot wird am 14. Januar 1841 in Bourges geboren; 1852 zieht die Familie nach Paris.",
        "Mit ihrer Schwester Edma lernt sie malen, auch beim Landschaftsmaler Camille Corot, und 1864 zeigt sie erstmals Bilder im Salon."
      ],
      "works": [
        {
          "pid": "mobench",
          "text": [
            "Edma sitzt in einem dunklen Kleid auf einer Steinbank im Grünen.",
            "Berthe malt das kleine Aquarell mit 23 Jahren."
          ],
          "fact": "1864. National Gallery of Art, Washington."
        },
        {
          "pid": "mosisters",
          "text": [
            "Zwei junge Frauen in gleichen weissen Kleidern sitzen auf einem geblümten Sofa.",
            "Über ihnen hängt ein Fächer an der Wand, eine der beiden hält einen zweiten in der Hand."
          ],
          "fact": "1869. National Gallery of Art, Washington."
        },
        {
          "pid": "mowindow",
          "text": [
            "Edma sitzt in einem weissen Kleid am offenen Fenster und betrachtet einen Fächer.",
            "Sie ist gerade nach Lorient gezogen und besucht die Familie in Paris."
          ],
          "fact": "1869. National Gallery of Art, Washington."
        },
        {
          "pid": "momother",
          "text": [
            "Die Mutter in Schwarz liest aus einem Buch vor, Edma im weissen Kleid hört zu.",
            "Édouard Manet malt kurz vor der Ausstellung noch selbst an dem Bild weiter, sehr zum Ärger von Berthe."
          ],
          "fact": "1869–1870. National Gallery of Art, Washington."
        },
        {
          "pid": "mopeonies",
          "text": [
            "Zwei rosa Pfingstrosen stehen in einem schlanken Glas auf einem Tisch.",
            "Morisot malt die Blüten mit wenigen, weichen Pinselstrichen."
          ],
          "fact": "um 1869. National Gallery of Art, Washington."
        },
        {
          "pid": "mopink",
          "text": [
            "Eine junge Frau in einem rosa Kleid sitzt auf einem hellblauen Sofa.",
            "Sie heisst Albertie-Marguerite Carré und ist eine Nachbarin der Familie Morisot."
          ],
          "fact": "um 1870. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "morisot1",
      "place": "Bei der Schwester Edma",
      "when": "1869–1873",
      "map": {
        "x": 60,
        "y": 80
      },
      "mapLabel": "Lorient",
      "intro": [
        "1869 heiratet Edma einen Marineoffizier, zieht nach Lorient in der Bretagne und hört auf zu malen.",
        "Berthe besucht sie oft und malt Edma und ihre kleinen Töchter immer wieder."
      ],
      "works": [
        {
          "pid": "molorient",
          "text": [
            "Am Rand des stillen Hafens von Lorient sitzt Edma mit einem Sonnenschirm auf der Mauer.",
            "Édouard Manet gefällt das Bild so sehr, dass Berthe es ihm schenkt."
          ],
          "fact": "1869. National Gallery of Art, Washington."
        },
        {
          "pid": "mobalcony",
          "text": [
            "Eine Frau in Schwarz und ein kleines Mädchen schauen vom Balkon über die Dächer von Paris.",
            "In der Ferne erhebt sich die Kuppel des Invalidendoms."
          ],
          "fact": "1871–1872. Art Institute of Chicago."
        },
        {
          "pid": "moedma",
          "text": [
            "Edma sitzt in einem hellen Kleid auf einem roten Sofa, neben ihr die kleine Jeanne.",
            "Morisot malt die Szene schnell und leicht mit Wasserfarben."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "moforestedge",
          "text": [
            "Edma liegt in einem weissen Kleid im Gras am Waldrand, die kleine Jeanne sitzt neben ihr.",
            "Hinter ihnen stehen helle, schlanke Baumstämme."
          ],
          "fact": "um 1872. National Gallery of Art, Washington."
        },
        {
          "pid": "cradle",
          "text": [
            "Edma, die Schwester der Malerin, wacht über ihre schlafende Tochter Blanche.",
            "Der weisse Schleier der Wiege teilt das Bild sanft in zwei Hälften: die Mutter und das Kind."
          ],
          "fact": "1872. Musée d’Orsay, Paris."
        },
        {
          "pid": "moreading",
          "text": [
            "Edma sitzt in einem hellen Kleid im Gras und liest, neben ihr liegen ein Fächer und ein grüner Schirm.",
            "Hinter ihr erstreckt sich eine weite, sonnige Wiese."
          ],
          "fact": "1873. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "mos3",
      "place": "Bei den Impressionisten",
      "when": "1874–1880",
      "map": {
        "x": 152,
        "y": 44
      },
      "mapLabel": "Paris",
      "intro": [
        "1874 stellt Morisot als einzige Frau bei der ersten Ausstellung der Impressionisten aus; im selben Jahr heiratet sie Eugène Manet, den Bruder des Malers Édouard Manet.",
        "1878 kommt ihre Tochter Julie zur Welt."
      ],
      "works": [
        {
          "pid": "molaundry",
          "text": [
            "Auf Wiesen am Rand des Dorfes Gennevilliers hängen weisse Wäschestücke an langen Leinen.",
            "Morisot malt die Szene im Freien, mit schnellen, hellen Pinselstrichen."
          ],
          "fact": "1875. National Gallery of Art, Washington."
        },
        {
          "pid": "moriesener",
          "text": [
            "Eine junge Frau mit grossem schwarzem Hut ist im Profil zu sehen.",
            "Louise Riesener ist die Tochter des Malers Léon Riesener, eines Cousins von Eugène Delacroix."
          ],
          "fact": "um 1877–1880. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "mos4",
      "place": "Bougival und Paris",
      "when": "1881–1886",
      "map": {
        "x": 140,
        "y": 52
      },
      "mapLabel": "Bougival",
      "intro": [
        "Ab 1881 verbringt die Familie die Sommer in Bougival an der Seine, wo Morisot im Garten malt.",
        "1883 zieht sie in ein neues Haus in Paris; ihre Pinselstriche werden immer freier und leichter."
      ],
      "works": [
        {
          "pid": "mogarden",
          "text": [
            "Eine Frau in Blau mit hellem Hut sitzt zwischen blühenden Rosen.",
            "Hinter ihr leuchtet ein zweiter, gelber Hut zwischen den Blättern."
          ],
          "fact": "1882–1883. Art Institute of Chicago."
        },
        {
          "pid": "moknitting",
          "text": [
            "Eine junge Frau mit Hut sitzt im Garten auf einem Stuhl und strickt.",
            "Neben ihr steht ein leerer Gartenstuhl im hellen Licht."
          ],
          "fact": "um 1883. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mostrawhat",
          "text": [
            "Eine junge Frau mit gelbem Strohhut und lila Band ist im Profil zu sehen.",
            "Der Hintergrund aus blauen und grünen Strichen löst sich fast ganz auf."
          ],
          "fact": "1884. National Gallery of Art, Washington."
        },
        {
          "pid": "moavenue",
          "text": [
            "Eine Frau mit Strohhut sitzt auf einer Bank, neben ihr liegt ein blauer Sonnenschirm.",
            "Die Allee führt in Paris zum grossen Park Bois de Boulogne."
          ],
          "fact": "1885. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mocompiegne",
          "text": [
            "Sonnenlicht fällt zwischen hellen Baumstämmen auf das grüne Gras.",
            "Ein paar Menschen sind im Hintergrund nur als kleine Flecken zu sehen."
          ],
          "fact": "1885. Art Institute of Chicago."
        },
        {
          "pid": "mosewing",
          "text": [
            "Eine Frau in Blau sitzt am Fenster und näht, draussen blühen Blumen.",
            "Morisot lässt grosse Teile des Papiers einfach weiss."
          ],
          "fact": "um 1885. Cleveland Museum of Art."
        },
        {
          "pid": "moself",
          "text": [
            "Morisot zeichnet sich selbst mit Pastell, mit grauem Haar und dunklen, ernsten Augen.",
            "Sie ist hier etwa 44 Jahre alt."
          ],
          "fact": "um 1885. Art Institute of Chicago."
        },
        {
          "pid": "modining",
          "text": [
            "Ein Dienstmädchen mit weisser Schürze steht im Esszimmer, zu ihren Füssen spielt ein kleiner Hund.",
            "Durch das Fenster fällt helles Licht auf Schrank und Tisch."
          ],
          "fact": "1886. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "mos5",
      "place": "Julie und die späten Jahre",
      "when": "1887–1895",
      "map": {
        "x": 136,
        "y": 44
      },
      "mapLabel": "Mézy",
      "intro": [
        "Morisot malt ihre Tochter Julie und andere Mädchen in Gärten und Zimmern, oft mit Pastell.",
        "Die Sommer 1890 und 1891 verbringt sie in Mézy an der Seine; 1892 stirbt ihr Mann Eugène."
      ],
      "works": [
        {
          "pid": "mogeese",
          "text": [
            "Weisse Gänse watscheln über das grüne Ufer eines Teichs, dahinter stehen dichte Bäume.",
            "Das Mädchen im Boot ist nur mit wenigen Pinselstrichen angedeutet."
          ],
          "fact": "um 1889. National Gallery of Art, Washington."
        },
        {
          "pid": "moparakeet",
          "text": [
            "Julie sitzt in einem rosa gestreiften Kleid da, hinter ihr ist ein grüner Sittich zu sehen.",
            "Sie ist hier etwa elf Jahre alt."
          ],
          "fact": "1890. National Gallery of Art, Washington."
        },
        {
          "pid": "mobasket",
          "text": [
            "Ein Mädchen mit grossem Strohhut hebt einen Korb hoch, um Früchte zu pflücken.",
            "Morisot zeichnet das Bild mit Pastell auf rosa Papier."
          ],
          "fact": "1891. Art Institute of Chicago."
        },
        {
          "pid": "moapron",
          "text": [
            "Ein Mädchen mit rotblondem Haar sitzt in einem dunkelblauen Kleid mit weisser Schürze da.",
            "Hinter ihr steht eine Vase auf einem Tisch."
          ],
          "fact": "1891. National Gallery of Art, Washington."
        },
        {
          "pid": "mogirlhat",
          "text": [
            "Ein Mädchen in einem rosa Kleid trägt einen grossen weissen Hut mit einer Blume.",
            "Sie blickt nachdenklich nach unten, ihre Hand liegt auf einer Stuhllehne."
          ],
          "fact": "1892. Art Institute of Chicago."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
