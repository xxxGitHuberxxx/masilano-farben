// v10.43 Eugène Delacroix life journey (1798–1863). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "dctroupe",
    "title": "Schauspieltruppe unterwegs",
    "artist": "Eugène Delacroix",
    "year": "1818",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2015.393: https://www.metmuseum.org/art/collection/search/689637, CC0 (gemeinfrei)"
  },
  {
    "id": "dchorse",
    "title": "Pferd an einem Pfahl",
    "artist": "Eugène Delacroix",
    "year": "um 1820",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1994.59.17: https://www.nga.gov/collection/art-object-page.89678.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dcindian",
    "title": "Zwei Studien eines stehenden Mannes aus Kalkutta",
    "artist": "Eugène Delacroix",
    "year": "um 1823–1824",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2006.128.18: https://www.nga.gov/collection/art-object-page.136015.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dcgoetz",
    "title": "Götz von Berlichingen wird von seinem Pagen Georg gerüstet",
    "artist": "Eugène Delacroix",
    "year": "1826–1827",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2014.732.2: https://www.metmuseum.org/art/collection/search/336524, CC0 (gemeinfrei)"
  },
  {
    "id": "dcpierret",
    "title": "Marguerite-Juliette Pierret",
    "artist": "Eugène Delacroix",
    "year": "um 1827",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1964.284: https://clevelandart.org/art/1964.284, CC0 (gemeinfrei)"
  },
  {
    "id": "dcmantes",
    "title": "Die alte Brücke von Mantes",
    "artist": "Eugène Delacroix",
    "year": "um 1827",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1963.392: https://www.artic.edu/artworks/17501, CC0 (gemeinfrei)"
  },
  {
    "id": "liberty",
    "title": "Die Freiheit führt das Volk",
    "artist": "Eugène Delacroix",
    "year": "1830",
    "museum": "Musée du Louvre, Paris",
    "source": "Wikimedia Commons: «La Liberté guidant le peuple - Eugène Delacroix - Musée du Louvre Peintures RF 129 - après restauration 2024.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dccouple",
    "title": "Marokkanisches Paar auf seiner Terrasse",
    "artist": "Eugène Delacroix",
    "year": "1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 63.215: https://www.metmuseum.org/art/collection/search/336043, CC0 (gemeinfrei)"
  },
  {
    "id": "dcsaada",
    "title": "Saada, die Frau von Abraham Ben-Chimol, und ihre Tochter Préciada",
    "artist": "Eugène Delacroix",
    "year": "1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1972.118.210: https://www.metmuseum.org/art/collection/search/336046, CC0 (gemeinfrei)"
  },
  {
    "id": "dchorsemen",
    "title": "Drei arabische Reiter bei einem Lager",
    "artist": "Eugène Delacroix",
    "year": "1832–1837",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2015.713.3: https://www.metmuseum.org/art/collection/search/336579, CC0 (gemeinfrei)"
  },
  {
    "id": "dctiles",
    "title": "Wand mit spanischen Fliesen",
    "artist": "Eugène Delacroix",
    "year": "1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2013.1135.16: https://www.metmuseum.org/art/collection/search/342877, CC0 (gemeinfrei)"
  },
  {
    "id": "dcmanola",
    "title": "Junge Spanierin im Kostüm einer Manola",
    "artist": "Eugène Delacroix",
    "year": "1832",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1970.1: https://www.artic.edu/artworks/32962, CC0 (gemeinfrei)"
  },
  {
    "id": "dcwater",
    "title": "Junge schwarze Frau beim Wasserholen",
    "artist": "Eugène Delacroix",
    "year": "1832",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 2023.123: https://clevelandart.org/art/2023.123, CC0 (gemeinfrei)"
  },
  {
    "id": "dcboutraye",
    "title": "Mademoiselle Alexandrine-Julie de la Boutraye",
    "artist": "Eugène Delacroix",
    "year": "um 1832–1834",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1962.3: https://clevelandart.org/art/1962.3, CC0 (gemeinfrei)"
  },
  {
    "id": "dcrider",
    "title": "Der türkische Reiter",
    "artist": "Eugène Delacroix",
    "year": "um 1834",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1965.455: https://www.artic.edu/artworks/23645, CC0 (gemeinfrei)"
  },
  {
    "id": "dcriesener",
    "title": "Madame Henri François Riesener",
    "artist": "Eugène Delacroix",
    "year": "1835",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1994.430: https://www.metmuseum.org/art/collection/search/436179, CC0 (gemeinfrei)"
  },
  {
    "id": "dccolumbus",
    "title": "Christoph Kolumbus und sein Sohn in La Rábida",
    "artist": "Eugène Delacroix",
    "year": "1838",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.127: https://www.nga.gov/collection/art-object-page.46602.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dcregnier",
    "title": "Mathurin Régnier",
    "artist": "Eugène Delacroix",
    "year": "um 1846",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 69.180: https://www.metmuseum.org/art/collection/search/336044, CC0 (gemeinfrei)"
  },
  {
    "id": "dcgarden",
    "title": "George Sands Garten in Nohant",
    "artist": "Eugène Delacroix",
    "year": "um 1842–1843",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 22.27.4: https://www.metmuseum.org/art/collection/search/436177, CC0 (gemeinfrei)"
  },
  {
    "id": "dcwood",
    "title": "Waldrand bei Nohant",
    "artist": "Eugène Delacroix",
    "year": "um 1842–1843",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.16.2: https://www.nga.gov/collection/art-object-page.65828.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dcflowers",
    "title": "Blumen",
    "artist": "Eugène Delacroix",
    "year": "1843",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1995.47.37: https://www.nga.gov/collection/art-object-page.93015.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dcpeasants",
    "title": "Bäuerinnen aus der Gegend von Eaux-Bonnes",
    "artist": "Eugène Delacroix",
    "year": "1845",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1981.1: https://www.artic.edu/artworks/61564, CC0 (gemeinfrei)"
  },
  {
    "id": "dcglories",
    "title": "Bogen aus Winden, Studie für «Ein Blumenkorb»",
    "artist": "Eugène Delacroix",
    "year": "1848–1849",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 67.187.4: https://www.metmuseum.org/art/collection/search/334749, CC0 (gemeinfrei)"
  },
  {
    "id": "dcbasket",
    "title": "Ein Blumenkorb",
    "artist": "Eugène Delacroix",
    "year": "1848–1849",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 67.187.60: https://www.metmuseum.org/art/collection/search/436175, CC0 (gemeinfrei)"
  },
  {
    "id": "dcsunset",
    "title": "Sonnenuntergang",
    "artist": "Eugène Delacroix",
    "year": "um 1850",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2014.732.4: https://www.metmuseum.org/art/collection/search/342992, CC0 (gemeinfrei)"
  },
  {
    "id": "dcchrist",
    "title": "Christus schläft während des Sturms",
    "artist": "Eugène Delacroix",
    "year": "um 1853",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.131: https://www.metmuseum.org/art/collection/search/436176, CC0 (gemeinfrei)"
  },
  {
    "id": "dcboats",
    "title": "Zwei Boote im Hafen von Dieppe",
    "artist": "Eugène Delacroix",
    "year": "1854",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 2021.108: https://clevelandart.org/art/2021.108, CC0 (gemeinfrei)"
  },
  {
    "id": "dcturkish",
    "title": "Figur in türkischem Kostüm",
    "artist": "Eugène Delacroix",
    "year": "um 1856–1863",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1970.159: https://clevelandart.org/art/1970.159, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "delacroix",
  "name": "Eugène Delacroix",
  "title": "Eugène Delacroix’ Lebensweg",
  "life": "1798–1863",
  "part": "Paris, Marokko, Nohant und das Meer",
  "subtitle": "Farben der Romantik",
  "cover": "dcbasket",
  "intro": "Reise mit Eugène Delacroix durch sein Leben: von den ersten Zeichnungen in Paris über die Reise nach Marokko und Spanien bis zu den Gärten von Nohant und dem Meer bei Dieppe. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Eugène Delacroix stirbt am 13. August 1863 in Paris.",
    "Seine leuchtenden Farben begeistern später viele Maler, von den Impressionisten bis zu Van Gogh."
  ],
  "epilogue": "Eugène Delacroix stirbt am 13. August 1863 in Paris. Der Weg führt von Paris über Marokko und Spanien bis nach Nohant und ans Meer.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M110,8 C130,4 156,8 176,14 C192,22 196,40 188,56 C184,70 172,80 150,82 C132,84 112,80 102,70 C94,58 100,44 96,30 C96,18 100,10 110,8 Z",
      "M54,88 C74,82 110,84 136,88 C146,94 142,108 132,116 C116,124 88,126 66,122 C52,116 46,100 54,88 Z",
      "M30,132 C50,128 80,130 108,134 C112,142 108,152 96,156 C72,158 46,156 32,150 C26,144 26,136 30,132 Z"
    ]
  },
  "stations": [
    {
      "id": "dcs1",
      "place": "Paris: Lehrjahre",
      "when": "1798–1824",
      "map": {
        "x": 140,
        "y": 24
      },
      "mapLabel": "Paris",
      "intro": [
        "Eugène Delacroix wird am 26. April 1798 in Charenton-Saint-Maurice bei Paris geboren.",
        "Ab 1815 lernt er beim Maler Pierre-Narcisse Guérin und zeichnet Menschen, Pferde und Szenen aus dem Alltag."
      ],
      "works": [
        {
          "pid": "dctroupe",
          "text": [
            "Eine Schauspieltruppe zieht mit einem vollbeladenen Wagen über die Landstrasse.",
            "Der junge Delacroix zeichnet die Figuren mit Witz und zarten Farben."
          ],
          "fact": "1818. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dchorse",
          "text": [
            "Ein rotbraunes Pferd steht an einem Pfahl angebunden auf einer weiten Ebene.",
            "Pferde malt Delacroix sein Leben lang besonders gern."
          ],
          "fact": "um 1820. National Gallery of Art, Washington."
        },
        {
          "pid": "dcindian",
          "text": [
            "Derselbe Mann aus Kalkutta steht zweimal nebeneinander, einmal von vorn und einmal leicht seitlich.",
            "Er trägt eine rote Kappe, einen langen braunen Mantel und eine weisse Schärpe."
          ],
          "fact": "um 1823–1824. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "delacroix1",
      "place": "Paris: Romantik",
      "when": "1825–1831",
      "map": {
        "x": 134,
        "y": 30
      },
      "mapLabel": "Paris",
      "intro": [
        "1825 reist Delacroix nach England und bewundert die Landschaften von John Constable.",
        "Er malt Szenen aus Büchern und Theaterstücken und wird zum wichtigsten Maler der französischen Romantik."
      ],
      "works": [
        {
          "pid": "dcgoetz",
          "text": [
            "Der Page Georg in blauem Gewand hilft dem Ritter Götz in seine glänzende Rüstung.",
            "Die Szene stammt aus einem Theaterstück von Johann Wolfgang von Goethe."
          ],
          "fact": "1826–1827. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dcpierret",
          "text": [
            "Ein kleines Mädchen mit rotblondem Haar und dunkelblauem Kleid schaut ernst aus dem Bild.",
            "Sie ist die Tochter von Delacroix’ gutem Freund Jean-Baptiste Pierret."
          ],
          "fact": "um 1827. Cleveland Museum of Art."
        },
        {
          "pid": "dcmantes",
          "text": [
            "Eine alte Steinbrücke mit runden Bögen führt bei Mantes über die Seine.",
            "Rechts ragt eine dunkle Mauer ins Bild, dahinter stehen hohe Bäume."
          ],
          "fact": "um 1827. Art Institute of Chicago."
        },
        {
          "pid": "liberty",
          "text": [
            "Eine Frau mit der französischen Trikolore schreitet über eine Barrikade, auf dem Kopf die phrygische Mütze.",
            "Das Bild erinnert an die Julirevolution von 1830 in Paris."
          ],
          "fact": "1830. Musée du Louvre, Paris."
        }
      ]
    },
    {
      "id": "dcs3",
      "place": "Marokko und Spanien",
      "when": "1832",
      "map": {
        "x": 70,
        "y": 140
      },
      "mapLabel": "Tanger",
      "intro": [
        "1832 begleitet Delacroix eine französische Gesandtschaft nach Marokko und besucht auf dem Rückweg Andalusien.",
        "In kleinen Heften hält er Menschen, Kleider, Pferde und Häuser in schnellen Aquarellen fest."
      ],
      "works": [
        {
          "pid": "dccouple",
          "text": [
            "Ein Mann und eine Frau ruhen auf Teppichen und Kissen auf ihrer Dachterrasse.",
            "Delacroix malt das kleine Aquarell 1832 auf seiner Reise durch Marokko."
          ],
          "fact": "1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dcsaada",
          "text": [
            "Saada sitzt in einem prächtigen grünen und goldenen Kleid, hinter ihr steht ihre Tochter Préciada.",
            "Abraham Ben-Chimol ist der Dolmetscher der französischen Gesandtschaft in Tanger."
          ],
          "fact": "1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dchorsemen",
          "text": [
            "Reiter rasten mit ihren Pferden neben einem Zelt.",
            "Im Hintergrund liegen blaue Berge unter einem weiten Himmel."
          ],
          "fact": "1832–1837. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dctiles",
          "text": [
            "Delacroix zeichnet eine Wand mit bunten Fliesen, einem Fenster und einem Zickzackband.",
            "Solche Muster sieht er auf seiner Reise durch Spanien und Marokko."
          ],
          "fact": "1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dcmanola",
          "text": [
            "Eine junge Frau in einem schwarzen Kleid mit Rüschen und einem Schleier steht aufrecht da.",
            "Solche Kostüme sieht Delacroix 1832 in Andalusien."
          ],
          "fact": "1832. Art Institute of Chicago."
        },
        {
          "pid": "dcwater",
          "text": [
            "Eine junge Frau in einem gelben Gewand steht mit einem Krug vor einer Mauer.",
            "Über ihrem Arm liegt ein weisses Tuch, oben hängt grünes Weinlaub."
          ],
          "fact": "1832. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "dcs4",
      "place": "Paris: Erinnerungen und Bildnisse",
      "when": "1833–1846",
      "map": {
        "x": 142,
        "y": 28
      },
      "mapLabel": "Paris",
      "intro": [
        "Zurück in Paris malt Delacroix grosse Wandbilder für Paläste und Kirchen.",
        "Daneben entstehen Bildnisse von Verwandten und Freunden und Bilder nach seinen Erinnerungen an Nordafrika."
      ],
      "works": [
        {
          "pid": "dcboutraye",
          "text": [
            "Eine junge Frau mit hochgesteckten dunklen Haaren trägt ein weisses Kleid mit weiten Ärmeln.",
            "Das ovale Bildnis zeigt sie vor einem ruhigen grauen Grund."
          ],
          "fact": "um 1832–1834. Cleveland Museum of Art."
        },
        {
          "pid": "dcrider",
          "text": [
            "Ein Reiter mit rotem Turban und grüner Jacke sitzt auf einem hellen Pferd.",
            "Delacroix malt solche Bilder in Paris nach den Erinnerungen an seine Reise."
          ],
          "fact": "um 1834. Art Institute of Chicago."
        },
        {
          "pid": "dcriesener",
          "text": [
            "Madame Riesener trägt eine weisse Haube mit Rüschen und ein dunkles Kleid.",
            "Sie ist die Frau von Delacroix’ Onkel, dem Maler Henri François Riesener."
          ],
          "fact": "1835. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dccolumbus",
          "text": [
            "Kolumbus kommt mit seinem kleinen Sohn in das Kloster La Rábida in Spanien.",
            "In einer hellen Halle mit Bildern und Karten sprechen Mönche mit den Gästen."
          ],
          "fact": "1838. National Gallery of Art, Washington."
        },
        {
          "pid": "dcregnier",
          "text": [
            "Der Dichter Mathurin Régnier steht in blauer Kleidung an seinem Schreibtisch.",
            "Régnier lebte um 1600 und schrieb spöttische Gedichte."
          ],
          "fact": "um 1846. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dcs5",
      "place": "Nohant und die Blumen",
      "when": "1842–1849",
      "map": {
        "x": 134,
        "y": 52
      },
      "mapLabel": "Nohant",
      "intro": [
        "Ab 1842 ist Delacroix oft Gast bei der Schriftstellerin George Sand in Nohant, wo auch der Komponist Frédéric Chopin wohnt.",
        "Auf dem Land malt er Gärten, Wälder und grosse Blumenbilder."
      ],
      "works": [
        {
          "pid": "dcgarden",
          "text": [
            "Dichte grüne Bäume umgeben einen schattigen Platz im Garten von Nohant.",
            "Hier ist Delacroix mehrmals Gast bei der Schriftstellerin George Sand."
          ],
          "fact": "um 1842–1843. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dcwood",
          "text": [
            "Hohe, schlanke Bäume stehen am Rand eines Waldes bei Nohant.",
            "Delacroix malt das Blatt schnell und locker mit Wasserfarben."
          ],
          "fact": "um 1842–1843. National Gallery of Art, Washington."
        },
        {
          "pid": "dcflowers",
          "text": [
            "Ein Strauss mit roten, violetten, gelben und weissen Blumen steht in einer Vase.",
            "Delacroix malt ihn mit Wasser- und Deckfarben auf hellbraunes Papier."
          ],
          "fact": "1843. National Gallery of Art, Washington."
        },
        {
          "pid": "dcpeasants",
          "text": [
            "Eine junge Bäuerin mit rotem Kopftuch steht vor den Bergen der Pyrenäen, hinter ihr sitzt eine zweite Frau mit rotem Umhang.",
            "Delacroix ist 1845 zur Kur im Bergdorf Eaux-Bonnes."
          ],
          "fact": "1845. Art Institute of Chicago."
        },
        {
          "pid": "dcglories",
          "text": [
            "Grüne Ranken mit Blüten bilden einen Bogen über einem Garten.",
            "Die Pastellstudie ist eine Vorarbeit für das grosse Bild mit dem Blumenkorb."
          ],
          "fact": "1848–1849. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dcbasket",
          "text": [
            "Ein umgekippter Korb voller bunter Blumen liegt im Garten unter einem Bogen aus Ranken.",
            "Delacroix malt mehrere grosse Blumenbilder in diesen Jahren auf dem Land."
          ],
          "fact": "1848–1849. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dcs6",
      "place": "Späte Jahre und das Meer",
      "when": "1850–1863",
      "map": {
        "x": 130,
        "y": 14
      },
      "mapLabel": "Dieppe",
      "intro": [
        "In den 1850er-Jahren verbringt Delacroix mehrere Sommer in Dieppe am Ärmelkanal und malt dort das Meer und den Himmel.",
        "1857 wird er in die Akademie der Schönen Künste aufgenommen."
      ],
      "works": [
        {
          "pid": "dcsunset",
          "text": [
            "Die Sonne geht hinter dunklen Wolken unter, und ihre Strahlen fächern sich über den Himmel.",
            "Delacroix zeichnet den Himmel mit Pastellkreiden auf blaues Papier."
          ],
          "fact": "um 1850. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dcchrist",
          "text": [
            "Ein kleines Boot schaukelt auf den hohen grünen Wellen eines Sturms, die Jünger rudern und rufen.",
            "Nur Christus liegt ruhig schlafend im Boot."
          ],
          "fact": "um 1853. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dcboats",
          "text": [
            "Zwei Segelschiffe mit französischen Fahnen liegen im Hafen von Dieppe.",
            "Delacroix zeichnet sie leicht mit Bleistift und ein paar Farbtupfen."
          ],
          "fact": "1854. Cleveland Museum of Art."
        },
        {
          "pid": "dcturkish",
          "text": [
            "Eine Figur in gelber Jacke und weitem rotem und schwarzem Gewand ist halb von hinten zu sehen.",
            "Der Kopf ist nur angedeutet, denn das Bild ist eine schnelle Ölskizze."
          ],
          "fact": "um 1856–1863. Cleveland Museum of Art."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
