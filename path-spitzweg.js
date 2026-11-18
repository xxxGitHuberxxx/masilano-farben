// v10.21 Carl Spitzweg life journey, Part 1 (1808–1885).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "csself",
    "title": "Selbstbildnis",
    "artist": "Carl Spitzweg",
    "year": "um 1842",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - Selbstbildnis (ca. 1842).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cspoet",
    "title": "Der arme Poet",
    "artist": "Carl Spitzweg",
    "year": "1839",
    "museum": "Neue Pinakothek, München",
    "source": "Wikimedia Commons: «Carl Spitzweg - Der arme Poet (Neue Pinakothek).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "csgarret",
    "title": "Die Dachstube",
    "artist": "Carl Spitzweg",
    "year": "um 1840",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - Die Dachstube.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "csalchem",
    "title": "Der Alchemist",
    "artist": "Carl Spitzweg",
    "year": "1837",
    "museum": "Grohmann Museum, Milwaukee",
    "source": "Wikimedia Commons: «Carl Spitzweg - Der Alchemist (1837, Grohmann Museum).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "csbutterfly",
    "title": "Der Schmetterlingsfänger",
    "artist": "Carl Spitzweg",
    "year": "um 1840",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - Der Schmetterlingsfänger.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "csbook",
    "title": "Der Bücherwurm",
    "artist": "Carl Spitzweg",
    "year": "um 1850",
    "museum": "Grohmann Museum, Milwaukee",
    "source": "Wikimedia Commons: «The Bookworm - Grohmann Museum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cscactus",
    "title": "Der Kaktusfreund",
    "artist": "Carl Spitzweg",
    "year": "um 1856",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg 027.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "csastro",
    "title": "Der Astronom",
    "artist": "Carl Spitzweg",
    "year": "um 1860",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - The Astronomer (Stargazer) - c. 1860.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "csflowers",
    "title": "Der Blumenfreund",
    "artist": "Carl Spitzweg",
    "year": "um 1855",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - Der Blumenfreund.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "csangler",
    "title": "Der Angler",
    "artist": "Carl Spitzweg",
    "year": "um 1860",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - Der Angler (Gemälde).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cspost",
    "title": "Der Briefbote im Rosenthal",
    "artist": "Carl Spitzweg",
    "year": "um 1858",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - Der Briefbote im Rosenthal.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cswatch",
    "title": "Der eingeschlafene Nachtwächter",
    "artist": "Carl Spitzweg",
    "year": "um 1850",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - Der eingeschlafene Nachtwächter.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "csmonks",
    "title": "Disputierende Mönche",
    "artist": "Carl Spitzweg",
    "year": "um 1860",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Disputierende Moenche (Carl Spitzweg).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cssunday",
    "title": "Sonntagsspaziergang",
    "artist": "Carl Spitzweg",
    "year": "um 1841",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - Sonntagsspaziergang.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cschurch",
    "title": "Der Gang zur Kirche",
    "artist": "Carl Spitzweg",
    "year": "um 1860",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Carl Spitzweg - Der Gang zur Kirche.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "spitzweg",
  "name": "Carl Spitzweg",
  "title": "Carl Spitzwegs Lebensweg",
  "life": "1808–1885",
  "part": "Teil 1 · München und die Sonderlinge",
  "subtitle": "Vom Apotheker zum Maler des Biedermeier",
  "cover": "cspoet",
  "intro": "Reise mit Carl Spitzweg, dem Münchner, der vom Apotheker zum Maler wird: von den Dachstuben des armen Poeten über Bücherwürmer, Kaktusfreunde und Nachtwächter bis zum Sonntagsspaziergang. Kurze Stationen und Bilder zum Ausmalen. Dieser erste Teil folgt den bekannten Genrebildern.",
  "ending": [
    "Spitzweg stirbt am 23. September 1885 in München. Er bleibt unverheiratet und seinem leisen, genauen Humor treu.",
    "Der Weg kann weiterwachsen. Weitere Reisen, Landschaften und späte Genrebilder können in einem späteren Teil folgen."
  ],
  "epilogue": "Am 23. September 1885 stirbt Spitzweg in München. Ein späterer Teil kann weitere Landschaften und Genrebilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M28,92 C58,58 110,52 156,70 C186,82 190,114 154,128 C112,144 40,132 28,92 Z",
      "M168,70 C190,52 226,58 230,82 C234,104 208,120 184,114 C164,108 154,86 168,70 Z"
    ]
  },
  "stations": [
    {
      "id": "csmuc",
      "place": "München · Der Apotheker wird Maler",
      "when": "1808–1842",
      "map": {
        "x": 150,
        "y": 92
      },
      "mapLabel": "München",
      "intro": [
        "Carl Spitzweg wird am 5. Februar 1808 in München geboren und zunächst Apotheker. Nach einer Erkrankung in den frühen 1830er Jahren wendet er sich fest der Malerei zu.",
        "Das Selbstbildnis um 1842 zeigt ihn bereits als Maler. Die Stadt bleibt sein Ort, auch wenn die Motive oft vor den Toren liegen."
      ],
      "works": [
        {
          "pid": "csself",
          "text": [
            "Das Selbstbildnis um 1842 zeigt Spitzweg als jungen Maler, den Apothekerberuf schon hinter sich. Der Blick ist offen, fast heiter, ohne Pose.",
            "Er hat sich die Malerei selbst erarbeitet, nach einer Erkrankung in den frühen 1830er Jahren. München bleibt sein Ort."
          ],
          "fact": "um 1842. Privatsammlung."
        }
      ]
    },
    {
      "id": "csdach",
      "place": "Dachstuben",
      "when": "1837–1842",
      "map": {
        "x": 142,
        "y": 84
      },
      "mapLabel": "Dachstube",
      "intro": [
        "In den späten 1830er Jahren entstehen die Dachstubenbilder, unter ihnen «Der arme Poet» von 1839. Spitzweg findet hier seinen Ton: genau, leise, ohne Häme.",
        "Die Enge unter dem Dach wird zum Blick auf ein einzelnes Leben. München erkennt sich in diesen Stuben wieder."
      ],
      "works": [
        {
          "pid": "cspoet",
          "text": [
            "Unter dem Dach liegt der Poet im Bett, den Querschnitt eines Regenschirms über sich, Manuskripte um ihn her. Das Bild von 1839 ist Spitzwegs bekanntestes Werk.",
            "Es hängt in der Neuen Pinakothek in München. Der Humor ist leise und genau: die Enge wird nicht verspottet, sondern angeschaut."
          ],
          "fact": "1839. Neue Pinakothek, München."
        },
        {
          "pid": "csgarret",
          "text": [
            "Eine kleine Stube unter dem Dach, karg eingerichtet, das Fenster als einzige Weite. Spitzweg kehrt zu diesem Ort immer wieder zurück.",
            "Die Dachstube ist ihm nicht nur Motiv, sondern Blickwinkel: von oben auf die Stadt, und doch ganz nah am einzelnen Leben."
          ],
          "fact": "um 1840. Privatsammlung."
        }
      ]
    },
    {
      "id": "cssond",
      "place": "Sonderlinge",
      "when": "1837–1860",
      "map": {
        "x": 158,
        "y": 78
      },
      "mapLabel": "Sonderlinge",
      "intro": [
        "Alchemist, Schmetterlingsfänger, Bücherwurm, Kaktusfreund, Astronom, Blumenliebhaber: Spitzweg erfindet eine Galerie versunkener Einzelgänger.",
        "Der Humor liegt in der Genauigkeit. Keiner dieser Männer wird bloss zur Karikatur."
      ],
      "works": [
        {
          "pid": "csalchem",
          "text": [
            "In einer engen Kammer hantiert der Alchemist an Kolben und Ofen. Das frühe Bild von 1837 zeigt schon Spitzwegs Blick auf den versunkenen Sonderling.",
            "Die Wissenschaft ist hier eine stille Leidenschaft, fast eine Komödie, aber ohne Häme."
          ],
          "fact": "1837. Grohmann Museum, Milwaukee."
        },
        {
          "pid": "csbutterfly",
          "text": [
            "Ein Mann mit Netz geht dem Schmetterling nach, ganz bei der Sache, ein wenig komisch und sehr ernst. Spitzweg liebt solche versunkenen Sammler.",
            "Das Motiv um 1840 gehört zu den heiteren Bildern der Münchner Zeit. Die Landschaft bleibt ein stiller Rahmen."
          ],
          "fact": "um 1840. Privatsammlung."
        },
        {
          "pid": "csbook",
          "text": [
            "Hoch auf der Leiter steht der Leser zwischen den Regalen, ein Buch in der Hand, eines unter dem Arm, eines zwischen den Knien. Die Welt ist die Bibliothek.",
            "Das Bild um 1850 gehört zu Spitzwegs berühmtesten Erfindungen. Der Humor liegt in der Genauigkeit, nicht in der Übertreibung."
          ],
          "fact": "um 1850. Grohmann Museum, Milwaukee."
        },
        {
          "pid": "cscactus",
          "text": [
            "Ein Mann betrachtet seinen Kaktus, nah, ehrfürchtig, als sei die Pflanze ein Gesprächspartner. Spitzweg kennt die stille Leidenschaft des Sammlers.",
            "Das Bild um die Mitte des Jahrhunderts gehört zu seinen liebevollsten Sonderlingen. Nichts wird ausgelacht."
          ],
          "fact": "um 1856. Privatsammlung."
        },
        {
          "pid": "csastro",
          "text": [
            "Ein Gelehrter blickt in den Himmel, das Instrument bereit, die Welt unten weit weg. Spitzweg setzt die versunkene Figur ins Freie.",
            "Das Bild um 1860 bleibt ein Genrebild und wird doch zur stillen Landschaft. Der Humor liegt im Ernst der Haltung."
          ],
          "fact": "um 1860. Privatsammlung."
        },
        {
          "pid": "csflowers",
          "text": [
            "Ein Mann steht vor seinen Blumen, sorgfältig, fast andächtig. Spitzweg gibt der kleinen Freude denselben Ernst wie dem armen Poeten.",
            "Die Gartenbilder gehören fest zu seinem Werk. Das Grün ist genau, die Figur bleibt menschlich und nah."
          ],
          "fact": "um 1855. Privatsammlung."
        }
      ]
    },
    {
      "id": "csstadt",
      "place": "Stadt und Wacht",
      "when": "1850–1860",
      "map": {
        "x": 148,
        "y": 100
      },
      "mapLabel": "Stadt",
      "intro": [
        "Briefbote, eingeschlafener Nachtwächter, disputierende Mönche, ein Angler am Wasser: Spitzweg sieht den Alltag der Stadt und ihrer Ränder.",
        "Die Figur bleibt einzeln, der Ort genau. Es sind leise Komödien ohne grosse Pointe."
      ],
      "works": [
        {
          "pid": "cspost",
          "text": [
            "Der Briefbote geht durchs Rosenthal, die Tasche umgehängt, der Weg zwischen Bäumen und Häusern. Spitzweg malt den Dienst als ruhigen Alltag.",
            "Das Motiv um 1858 gehört zu den Stadt- und Vorstadtbildern, in denen ein einzelner Mensch die Szene trägt."
          ],
          "fact": "um 1858. Privatsammlung."
        },
        {
          "pid": "cswatch",
          "text": [
            "Der Nachtwächter ist eingeschlafen, die Laterne noch da, die Pflicht für einen Augenblick vergessen. Spitzweg ist nachsichtig, nicht streng.",
            "Das Bild gehört zu den leisen Komödien der Stadt bei Nacht. Die Figur bleibt würdig, auch im Schlaf."
          ],
          "fact": "um 1850. Privatsammlung."
        },
        {
          "pid": "csmonks",
          "text": [
            "Zwei Mönche sind in ein Gespräch vertieft, Gesten und Mienen tragen den Streit. Spitzweg beobachtet den Eifer, ohne Partei zu nehmen.",
            "Die Kloster- und Mönchsbilder gehören fest zu seinem Genre. Der Humor liegt im Ernst der beiden."
          ],
          "fact": "um 1860. Privatsammlung."
        },
        {
          "pid": "csangler",
          "text": [
            "Am Wasser sitzt der Angler, geduldig und allein. Spitzweg lässt die Landschaft weit, die Figur klein, die Zeit langsam.",
            "Es ist ein stilles Bild des Wartens. Der Humor, wenn er da ist, bleibt unter der Oberfläche."
          ],
          "fact": "um 1860. Privatsammlung."
        }
      ]
    },
    {
      "id": "cssonntag",
      "place": "Sonntag in Bayern",
      "when": "1841–1860",
      "map": {
        "x": 170,
        "y": 104
      },
      "mapLabel": "Sonntag",
      "intro": [
        "Der Sonntagsspaziergang und der Gang zur Kirche verbinden Gesellschaft und Landschaft. Spitzweg kennt den bürgerlichen Ritus und die weite bayerische Natur.",
        "Er stirbt am 23. September 1885 in München. Ein späterer Teil kann Reisen und weitere Landschaften nachtragen."
      ],
      "works": [
        {
          "pid": "cssunday",
          "text": [
            "Eine Familie geht sonntags spazieren, festlich und ein wenig steif, die Landschaft weit hinter ihnen. Spitzweg kennt den bürgerlichen Ritus genau.",
            "Das Motiv gehört zu seinen liebevollsten Gesellschaftsbildern. Der Humor bleibt freundlich, die Beobachtung scharf."
          ],
          "fact": "um 1841. Privatsammlung."
        },
        {
          "pid": "cschurch",
          "text": [
            "Menschen gehen zur Kirche, klein in einer weiten Landschaft, der Weg führt durch das Land. Spitzweg verbindet Genre und Natur.",
            "Solche Bilder gehören zum ruhigeren Spätwerk. Der Sonntag ist hier weniger Komödie als Ordnung des Tages."
          ],
          "fact": "um 1860. Privatsammlung."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
