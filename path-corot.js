// v10.43 Camille Corot life journey (1796–1875). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "jcpeasant",
    "title": "Italienischer Bauernjunge",
    "artist": "Camille Corot",
    "year": "1825–1827",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.8: https://www.nga.gov/collection/art-object-page.46483.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jcbartolomeo",
    "title": "Die Insel und Brücke San Bartolomeo, Rom",
    "artist": "Camille Corot",
    "year": "1825–1828",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2001.23.1: https://www.nga.gov/collection/art-object-page.88615.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jcterni",
    "title": "Wasserfall bei Terni",
    "artist": "Camille Corot",
    "year": "1826",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 2003.42.13: https://www.metmuseum.org/art/collection/search/438635, CC0 (gemeinfrei)"
  },
  {
    "id": "jcalbano",
    "title": "Albaner See und Castel Gandolfo",
    "artist": "Camille Corot",
    "year": "1826–1827",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 22.27.2: https://www.metmuseum.org/art/collection/search/435974, CC0 (gemeinfrei)"
  },
  {
    "id": "jccervara",
    "title": "La Cervara, die römische Campagna",
    "artist": "Camille Corot",
    "year": "um 1830–1831",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1963.91: https://clevelandart.org/art/1963.91, CC0 (gemeinfrei)"
  },
  {
    "id": "jchonfleur",
    "title": "Honfleur: Kalvarienberg",
    "artist": "Camille Corot",
    "year": "um 1830",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 1974.3: https://www.metmuseum.org/art/collection/search/435972, CC0 (gemeinfrei)"
  },
  {
    "id": "jclemaistre",
    "title": "Toussaint Lemaistre",
    "artist": "Camille Corot",
    "year": "1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 1976.201.13: https://www.metmuseum.org/art/collection/search/435961, CC0 (gemeinfrei)"
  },
  {
    "id": "jcmacon",
    "title": "Brücke über die Saône bei Mâcon",
    "artist": "Camille Corot",
    "year": "1834",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.22: https://www.nga.gov/collection/art-object-page.52166.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jcgenoa",
    "title": "Ansicht von Genua",
    "artist": "Camille Corot",
    "year": "1834",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1937.1017: https://www.artic.edu/artworks/25806, CC0 (gemeinfrei)"
  },
  {
    "id": "jcvolterra",
    "title": "Ansicht bei Volterra",
    "artist": "Camille Corot",
    "year": "1838",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.111: https://www.nga.gov/collection/art-object-page.46586.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jceel",
    "title": "Die Aalsammler",
    "artist": "Camille Corot",
    "year": "1860–1865",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1943.15.1: https://www.nga.gov/collection/art-object-page.30230.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jccurious",
    "title": "Das neugierige Mädchen",
    "artist": "Camille Corot",
    "year": "1860–1864",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 1999.288.2: https://www.metmuseum.org/art/collection/search/437991, CC0 (gemeinfrei)"
  },
  {
    "id": "jcagostina",
    "title": "Agostina",
    "artist": "Camille Corot",
    "year": "1866",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.108: https://www.nga.gov/collection/art-object-page.46583.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jcreadstudio",
    "title": "Lesende im Atelier",
    "artist": "Camille Corot",
    "year": "um 1868",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.9: https://www.nga.gov/collection/art-object-page.66407.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jcreading",
    "title": "Eine lesende Frau",
    "artist": "Camille Corot",
    "year": "1869–1870",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 28.90: https://www.metmuseum.org/art/collection/search/435991, CC0 (gemeinfrei)"
  },
  {
    "id": "jcinterrupted",
    "title": "Unterbrochene Lektüre",
    "artist": "Camille Corot",
    "year": "um 1870",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.410: https://www.artic.edu/artworks/81512, CC0 (gemeinfrei)"
  },
  {
    "id": "jcsibylle",
    "title": "Sibylle",
    "artist": "Camille Corot",
    "year": "um 1870",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 29.100.565: https://www.metmuseum.org/art/collection/search/435984, CC0 (gemeinfrei)"
  },
  {
    "id": "jcwillows",
    "title": "Weiden und Bauernhof in Sainte-Catherine-lès-Arras",
    "artist": "Camille Corot",
    "year": "1871",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1916.1047: https://clevelandart.org/art/1916.1047, CC0 (gemeinfrei)"
  },
  {
    "id": "jcarleux",
    "title": "Arleux-Palluel, die Brücke der Verabredungen",
    "artist": "Camille Corot",
    "year": "1871–1872",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.407: https://www.artic.edu/artworks/81509, CC0 (gemeinfrei)"
  },
  {
    "id": "jccoubron",
    "title": "Der Wald von Coubron",
    "artist": "Camille Corot",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1942.9.12: https://www.nga.gov/collection/art-object-page.1149.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jcstumpf",
    "title": "Madame Stumpf und ihre Tochter",
    "artist": "Camille Corot",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.23: https://www.nga.gov/collection/art-object-page.52167.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jcetretat",
    "title": "Strand bei Étretat",
    "artist": "Camille Corot",
    "year": "um 1872",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.117: https://www.nga.gov/collection/art-object-page.52261.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jcmorieri",
    "title": "Italienerin (La Morieri)",
    "artist": "Camille Corot",
    "year": "um 1872",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1954.6.1: https://www.nga.gov/collection/art-object-page.42932.html, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "corot",
  "name": "Camille Corot",
  "title": "Camille Corots Lebensweg",
  "life": "1796–1875",
  "part": "Rom, Frankreich und das Atelier",
  "subtitle": "Licht, Landschaft und stille Figuren",
  "cover": "jcbartolomeo",
  "intro": "Reise mit Camille Corot durch sein Leben: von Rom und der italienischen Landschaft durch Frankreich bis in sein Pariser Atelier. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Camille Corot stirbt im Februar 1875 mit 78 Jahren in Paris.",
    "Er gilt als der einflussreichste französische Landschaftsmaler des 19. Jahrhunderts."
  ],
  "epilogue": "Camille Corot stirbt 1875. Der Weg führt von Rom über die Landschaften Frankreichs bis in sein Pariser Atelier.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M150,22 C172,12 206,14 220,28 C228,42 222,58 214,70 C222,84 226,100 216,108 C206,104 200,92 194,84 C186,78 172,76 160,70 C150,62 146,48 150,22 Z"
    ]
  },
  "stations": [
    {
      "id": "jcs1",
      "place": "Drei Jahre in Italien",
      "when": "1825–1828",
      "map": {
        "x": 204,
        "y": 94
      },
      "mapLabel": "Rom und Umgebung",
      "intro": [
        "Camille Corot wird 1796 in Paris geboren; erst mit 26 Jahren gibt er den Tuchhandel auf und wird Maler.",
        "Von 1825 bis 1828 lebt er in Rom und zeichnet und malt oft im Freien in der Landschaft ringsum."
      ],
      "works": [
        {
          "pid": "jcpeasant",
          "text": [
            "Ein Junge mit dunklem Hut und hellem Hemd lehnt sich entspannt zurück und blickt uns an.",
            "Corot malt die Studie in Italien in Öl auf Papier und signiert sie unten links mit „COROT“."
          ],
          "fact": "1825–1827. National Gallery of Art, Washington."
        },
        {
          "pid": "jcbartolomeo",
          "text": [
            "Helle Häuser und ein Kirchturm stehen auf der Tiberinsel in Rom, links führt eine Brücke mit Bögen hinüber, und alles spiegelt sich im Fluss.",
            "Corot malt die Studie im Freien in Öl auf Papier und signiert sie unten rechts mit „COROT“."
          ],
          "fact": "1825–1828. National Gallery of Art, Washington."
        },
        {
          "pid": "jcterni",
          "text": [
            "Ein weisser Wasserfall stürzt zwischen dicht bewachsenen grünen Felsen in die Tiefe.",
            "Terni liegt in Umbrien, nördlich von Rom; Corot malt die Studie 1826 in Öl auf Papier."
          ],
          "fact": "1826. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jcalbano",
          "text": [
            "Über einem stillen See zieht sich ein grüner Hügelrücken, auf dem hell die Häuser von Castel Gandolfo liegen.",
            "Der Albaner See liegt in den Hügeln südöstlich von Rom; Corot malt ihn in Öl auf Papier."
          ],
          "fact": "1826–1827. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "jcs2",
      "place": "Zurück in Frankreich",
      "when": "1830–1834",
      "map": {
        "x": 168,
        "y": 38
      },
      "mapLabel": "Normandie und Burgund",
      "intro": [
        "Nach der Rückkehr malt Corot grosse Bilder nach seinen Zeichnungen und Ölskizzen aus Italien, streng aufgebaut wie klassische Landschaften.",
        "Daneben reist er durch Frankreich, etwa an die Küste der Normandie und nach Burgund, und malt auch Bildnisse."
      ],
      "works": [
        {
          "pid": "jccervara",
          "text": [
            "Hügel, Felsen und kleine Gestalten führen in schrägen Linien in eine weite Landschaft bei Rom.",
            "Corot malt das grosse Ölbild nach Zeichnungen und Ölskizzen aus Italien; der streng gebaute Aufbau erinnert an Nicolas Poussin."
          ],
          "fact": "um 1830–1831. Cleveland Museum of Art."
        },
        {
          "pid": "jchonfleur",
          "text": [
            "Schlanke Bäume stehen auf einer Anhöhe über dem Meer, zwischen ihnen ragt ein hohes Kreuz auf, und darunter sitzen und knien kleine Gestalten.",
            "Honfleur ist eine Hafenstadt an der Küste der Normandie; Corot malt das Bild in Öl auf Holz."
          ],
          "fact": "um 1830. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jclemaistre",
          "text": [
            "Ein junger Mann in dunklem Rock mit hohem Kragen sitzt auf einem Stuhl und blickt uns ernst an.",
            "Corot malt das Bildnis 1833 in Öl auf Leinwand; der Dargestellte lebte von 1807/1808 bis 1888."
          ],
          "fact": "1833. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jcmacon",
          "text": [
            "Eine lange Steinbrücke mit vielen Bögen führt über die Saône, links stehen helle Häuser über einem sandigen Ufer.",
            "Mâcon liegt in Burgund; unten links steht mit Bleistift „Corot Pingebat 1834“."
          ],
          "fact": "1834. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "jcs3",
      "place": "Noch einmal nach Italien",
      "when": "1834–1838",
      "map": {
        "x": 196,
        "y": 76
      },
      "mapLabel": "Genua und die Toskana",
      "intro": [
        "1834 reist Corot erneut nach Italien und malt unter anderem eine Ansicht von Genua.",
        "1838 zeigt er im Pariser Salon eine Landschaft bei Volterra in der Toskana."
      ],
      "works": [
        {
          "pid": "jcgenoa",
          "text": [
            "Hinter grünen Hängen breitet sich die helle Stadt Genua aus, darüber leuchtet das blaue Meer.",
            "Unten rechts schreibt Corot „Gènes 1834“, den französischen Namen der Stadt und das Jahr."
          ],
          "fact": "1834. Art Institute of Chicago."
        },
        {
          "pid": "jcvolterra",
          "text": [
            "Ein Weg führt durch eine sonnige, felsige Landschaft mit Bäumen, auf ihm reitet eine kleine Gestalt.",
            "Corot zeigt das Bild 1838 im Pariser Salon als „Vue prise à Volterra, Toscane“ und signiert es „COROT. / 1838“."
          ],
          "fact": "1838. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "jcs4",
      "place": "Erinnerungen und Figuren",
      "when": "1860–1866",
      "map": {
        "x": 178,
        "y": 46
      },
      "mapLabel": "Frankreich",
      "intro": [
        "Mit stillem Wasser, duftigen Bäumen und lichtgetupftem Laub findet Corot nun ein breites Publikum.",
        "Daneben entstehen Figurenbilder, die er kaum je ausstellt oder verkauft."
      ],
      "works": [
        {
          "pid": "jceel",
          "text": [
            "In einem grünen Wald an einem Bach hilft eine kniende Frau einem kleinen Kind beim Laufen, ein Mädchen bringt etwas in seiner Schürze, und ein Junge klettert auf einen Baum.",
            "Das Licht ist weich und diffus; nur wenige helle Flecken im Laub lassen Sonne und Himmel ahnen."
          ],
          "fact": "1860–1865. National Gallery of Art, Washington."
        },
        {
          "pid": "jccurious",
          "text": [
            "Ein Mädchen in dunklem Kleid und Umhang steht auf einem Stein, stützt sich an eine Erdmauer und späht neugierig darüber.",
            "Corot malt die kleine Figur in Öl auf Karton und signiert unten rechts mit „COROT“."
          ],
          "fact": "1860–1864. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jcagostina",
          "text": [
            "Corot kleidet das Modell, wohl eine Zuwanderin aus der ländlichen Gegend bei Rom, in eine traditionelle Tracht und stellt sie in eine italienische Landschaft.",
            "Mit kräftigem Hell und Dunkel malt er Schultern, Augen und Nase; „Agostina“ ist das grösste seiner Figurenbilder."
          ],
          "fact": "1866. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "jcs5",
      "place": "Lesende im Atelier",
      "when": "1868–1870",
      "map": {
        "x": 176,
        "y": 40
      },
      "mapLabel": "Paris",
      "intro": [
        "In seinem Atelier malt Corot Modelle beim Lesen und Nachdenken; diese Figurenbilder stellt er fast nie aus.",
        "Seine Modelle kleidet er gern in italienische Trachten, denn er liebt alles Italienische."
      ],
      "works": [
        {
          "pid": "jcreadstudio",
          "text": [
            "Eine junge Frau in weisser Bluse stützt den Kopf in die Hand und liest an einem Tisch; hinter ihr stehen Bilder und eine Staffelei.",
            "Das Bild gehört später dem Schriftsteller Alexandre Dumas und wird 1875 in der grossen Corot-Ausstellung in Paris gezeigt."
          ],
          "fact": "um 1868. National Gallery of Art, Washington."
        },
        {
          "pid": "jcreading",
          "text": [
            "Eine Frau mit blauen Ärmeln sitzt auf einer Wiese und liest in einem Buch, hinter ihr schimmert in der Ferne Wasser.",
            "Corot arbeitet 1869 und 1870 an diesem Bild und verbindet hier Figur und Landschaft."
          ],
          "fact": "1869–1870. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jcinterrupted",
          "text": [
            "Eine Frau in italienischer Tracht hält ein Buch auf dem Schoss, stützt den Kopf in die Hand und blickt von der Lektüre auf.",
            "Corot zeigt sie im geschützten Raum seines Ateliers und malt Band im Haar, Ohrringe und tiefe Rockfalten mit sichtbarer Freude am Detail."
          ],
          "fact": "um 1870. Art Institute of Chicago."
        },
        {
          "pid": "jcsibylle",
          "text": [
            "Eine junge Frau mit einem Band im Haar, weisser Bluse und Mieder sitzt vor dunklem Grund und blickt uns ruhig an.",
            "Wie viele späte Figurenbilder Corots zeigt es ein Modell in italienisch anmutender Kleidung; heute gehört es zur Sammlung Havemeyer im Metropolitan Museum."
          ],
          "fact": "um 1870. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "jcs6",
      "place": "Arras, Wald und Küste",
      "when": "1871–1872",
      "map": {
        "x": 178,
        "y": 30
      },
      "mapLabel": "Nordfrankreich",
      "intro": [
        "1871 hält sich Corot in Arras auf, rund 160 Kilometer nördlich von Paris, und malt dort Weiden, Wasser und Dörfer.",
        "1872 folgen Waldbilder, ein Strand in der Normandie und Bildnisse wie das von Madame Stumpf und ihrer Tochter."
      ],
      "works": [
        {
          "pid": "jcwillows",
          "text": [
            "Neben einem Bauernhaus mit rotem Dach stehen knorrige Weiden, ihr Laub ist mit Licht betupft.",
            "Corot malt das Bild 1871 bei seinem Aufenthalt in Arras; es zeigt den Stil, mit dem er ein breites Publikum gewinnt."
          ],
          "fact": "1871. Cleveland Museum of Art."
        },
        {
          "pid": "jcarleux",
          "text": [
            "Hohe, lichte Bäume rahmen eine Wiese am Wasser, in der Ferne liegt eine kleine Brücke, und vorne sind kleine Gestalten zu sehen.",
            "Arleux und Palluel sind Dörfer in Nordfrankreich, nicht weit von Arras; Corot signiert unten links mit „Corot“."
          ],
          "fact": "1871–1872. Art Institute of Chicago."
        },
        {
          "pid": "jccoubron",
          "text": [
            "Licht fällt goldgelb durch das Laub hoher Bäume auf einen Waldweg, auf dem ein Reiter auf einem Schimmel unterwegs ist.",
            "Corot signiert „COROT 1872“; schon 1873 wird das Bild in Paris als „Entrée du bois Coubron, par une matinée de printemps“ versteigert."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "jcstumpf",
          "text": [
            "Eine Frau in blauem Kleid geht mit ihrer kleinen Tochter in Weiss an der Hand durch einen sonnigen Wald.",
            "Corot schenkt das Bild Monsieur F. Stumpf; das Kind ist dessen Tochter Madeleine."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "jcetretat",
          "text": [
            "Ein heller Sandstrand zieht sich unter einem grünen Hang zum ruhigen Meer, darüber liegt ein weiter, wolkiger Himmel.",
            "Das kleine Bild ist nur gut 12 mal 25 Zentimeter gross; Étretat liegt an der Küste der Normandie."
          ],
          "fact": "um 1872. National Gallery of Art, Washington."
        },
        {
          "pid": "jcmorieri",
          "text": [
            "Eine Frau mit gelbem Kopftuch, weisser Bluse und rot bestickter Schürze sitzt aufgestützt vor einem grünen Hintergrund.",
            "Um 1874 gibt Corot das Bild dem Pariser Kunsthändler Hector Brame."
          ],
          "fact": "um 1872. National Gallery of Art, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
