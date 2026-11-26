// v10.43 P.S. Krøyer life journey (1851–1909). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "pssmithy",
    "title": "Eine Schmiede in Hornbæk",
    "artist": "P.S. Krøyer",
    "year": "1873",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1833: https://open.smk.dk/artwork/image/KMS1833, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psfisher",
    "title": "Bildnis eines Fischers aus Hornbæk",
    "artist": "P.S. Krøyer",
    "year": "1875",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1838: https://open.smk.dk/artwork/image/KMS1838, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psherring",
    "title": "Fischer aus Hornbæk beim Heringsfang",
    "artist": "P.S. Krøyer",
    "year": "1877",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, DEP976: https://open.smk.dk/artwork/image/DEP976, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pssardine",
    "title": "Eine Sardinenfabrik in Concarneau",
    "artist": "P.S. Krøyer",
    "year": "1879",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3108: https://open.smk.dk/artwork/image/KMS3108, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psguillou",
    "title": "Bildnis des französischen Malers Alfred Guillou",
    "artist": "P.S. Krøyer",
    "year": "1879",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS7133: https://open.smk.dk/artwork/image/KMS7133, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psseascape",
    "title": "Seestück, Skagen",
    "artist": "P.S. Krøyer",
    "year": "1882",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1834: https://open.smk.dk/artwork/image/KMS1834, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psmeldahl",
    "title": "Bildnis des Architekten F. Meldahl",
    "artist": "P.S. Krøyer",
    "year": "1882",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1475: https://open.smk.dk/artwork/image/KMS1475, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pstuxen",
    "title": "Bildnis von Frederikke Tuxen",
    "artist": "P.S. Krøyer",
    "year": "1882",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2014.120: https://www.metmuseum.org/art/collection/search/430097, CC0 (gemeinfrei)"
  },
  {
    "id": "psbeach",
    "title": "Fischer am Strand von Skagen",
    "artist": "P.S. Krøyer",
    "year": "1883",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1233: https://open.smk.dk/artwork/image/KMS1233, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psfoundry",
    "title": "Die Eisengiesserei von Burmeister & Wain",
    "artist": "P.S. Krøyer",
    "year": "1885",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3605: https://open.smk.dk/artwork/image/KMS3605, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psduet",
    "title": "Ein Duett",
    "artist": "P.S. Krøyer",
    "year": "1887",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1304: https://open.smk.dk/artwork/image/KMS1304, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psthreshing",
    "title": "Dreschen in den Abruzzen, Cività d’Antino",
    "artist": "P.S. Krøyer",
    "year": "1890",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1434: https://open.smk.dk/artwork/image/KMS1434, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pstorello",
    "title": "Eine Strasse in Torello, Italien",
    "artist": "P.S. Krøyer",
    "year": "1890",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1435: https://open.smk.dk/artwork/image/KMS1435, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pscatarinella",
    "title": "Kopf eines Mädchens aus Cività d’Antino in Tracht („Catarinella“)",
    "artist": "P.S. Krøyer",
    "year": "1890",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2013.937: https://www.metmuseum.org/art/collection/search/428625, CC0 (gemeinfrei)"
  },
  {
    "id": "psrosenorn",
    "title": "Baron Otto Ditlev Rosenørn-Lehn",
    "artist": "P.S. Krøyer",
    "year": "1891",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1438: https://open.smk.dk/artwork/image/KMS1438, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psevening",
    "title": "Abend in Skagen",
    "artist": "P.S. Krøyer",
    "year": "1893",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS8272: https://open.smk.dk/artwork/image/KMS8272, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psschandorph",
    "title": "Der Schriftsteller Sophus Schandorph",
    "artist": "P.S. Krøyer",
    "year": "1895",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6858: https://open.smk.dk/artwork/image/KMS6858, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pssteenstrup",
    "title": "Der Zoologe Japetus Steenstrup hält einen Vortrag",
    "artist": "P.S. Krøyer",
    "year": "1895",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3103: https://open.smk.dk/artwork/image/KMS3103, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pscasse",
    "title": "Bildnis von S.A. Casse, geborene Engelbreth",
    "artist": "P.S. Krøyer",
    "year": "1895",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3648: https://open.smk.dk/artwork/image/KMS3648, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psgroup",
    "title": "Bildnisgruppe",
    "artist": "P.S. Krøyer",
    "year": "1896",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1570: https://open.smk.dk/artwork/image/KMS1570, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pshelga",
    "title": "Ein kleines Mädchen, Helga Melchior, in einem langen Kleid",
    "artist": "P.S. Krøyer",
    "year": "1897",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1835: https://open.smk.dk/artwork/image/KMS1835, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psmoonlight",
    "title": "Der Strand von Skagen im Mondschein",
    "artist": "P.S. Krøyer",
    "year": "1899",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS8273: https://open.smk.dk/artwork/image/KMS8273, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "psraben",
    "title": "Bildnis der Gräfin Lillie Suzanne Raben-Levetzau",
    "artist": "P.S. Krøyer",
    "year": "1899",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3104: https://open.smk.dk/artwork/image/KMS3104, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "kroyer",
  "name": "P.S. Krøyer",
  "title": "P.S. Krøyers Lebensweg",
  "life": "1851–1909",
  "part": "Fischer, Freunde und blaue Abende",
  "subtitle": "Von Hornbæk über Paris und Italien nach Skagen",
  "cover": "psevening",
  "intro": "Reise mit P.S. Krøyer durch sein Leben: von den Fischern in Hornbæk über Paris, Spanien und Italien bis zu den hellen Sommerabenden in Skagen. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "P.S. Krøyer stirbt am 21. November 1909 in Skagen.",
    "Ein Jahr zuvor hat er das Skagens Museum mitgegründet, das nach seinem Tod seine ersten Ausstellungsräume in seinem früheren Haus einrichtet."
  ],
  "epilogue": "P.S. Krøyer stirbt am 21. November 1909 in Skagen. Der Weg führt von Hornbæk über Paris, die Bretagne und Italien bis an den Strand von Skagen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M112,10 C120,6 126,12 124,22 C124,32 126,40 122,46 C116,48 110,44 110,36 C108,26 106,16 112,10 Z",
      "M132,34 C140,32 146,36 144,44 C140,48 134,48 130,44 C128,40 128,36 132,34 Z",
      "M40,60 C60,52 86,54 98,66 C104,80 98,96 90,106 C76,112 58,110 46,102 C34,92 30,72 40,60 Z",
      "M20,112 C40,106 70,108 80,116 C84,130 76,146 60,150 C42,152 24,146 18,134 C14,124 14,116 20,112 Z",
      "M130,84 C140,80 150,84 152,94 C158,106 170,116 184,126 C192,132 190,142 182,142 C176,150 166,152 162,144 C158,134 148,124 138,112 C130,102 124,90 130,84 Z"
    ]
  },
  "stations": [
    {
      "id": "pss1",
      "place": "Kindheit und Lehrjahre",
      "when": "1851–1877",
      "map": {
        "x": 138,
        "y": 36
      },
      "mapLabel": "Hornbæk",
      "intro": [
        "Peder Severin Krøyer wird am 23. Juli 1851 in Stavanger in Norwegen geboren und wächst in Kopenhagen bei Pflegeeltern auf, sein Pflegevater ist der Zoologe H.N. Krøyer.",
        "Schon mit zehn Jahren beginnt er seine Ausbildung, später studiert er an der Kunstakademie und malt Fischer und Handwerker in Hornbæk."
      ],
      "works": [
        {
          "pid": "pssmithy",
          "text": [
            "In einer dunklen Schmiede arbeiten Männer im Schein des Feuers.",
            "Krøyer malt das Bild mit 21 oder 22 Jahren in dem Fischerdorf Hornbæk."
          ],
          "fact": "1873. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psfisher",
          "text": [
            "Ein Fischer mit gelbem Südwester und rauem Gesicht blickt den Betrachter direkt an.",
            "Krøyer malt ihn auf eine Holztafel."
          ],
          "fact": "1875. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psherring",
          "text": [
            "Fischer ziehen in einem Boot auf grauem Meer ihre Netze ein, vorn liegt der silberne Fang.",
            "Krøyer zeigt die Männer bei der Arbeit, ganz nah und ohne Beschönigung."
          ],
          "fact": "1877. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "pss2",
      "place": "Paris, Bretagne und Spanien",
      "when": "1877–1881",
      "map": {
        "x": 60,
        "y": 74
      },
      "mapLabel": "Paris",
      "intro": [
        "In Paris lernt Krøyer beim Maler Léon Bonnat und malt in der Bretagne Menschen bei der Arbeit.",
        "1878 reist er mit Malerfreunden nach Spanien und studiert monatelang die Bilder von Velázquez."
      ],
      "works": [
        {
          "pid": "pssardine",
          "text": [
            "Frauen mit weissen bretonischen Hauben arbeiten an langen Tischen in einer Fabrikhalle.",
            "Concarneau ist ein Fischerhafen in der Bretagne, und das Bild zeigt den Alltag der Arbeiterinnen."
          ],
          "fact": "1879. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psguillou",
          "text": [
            "Ein Mann mit schwarzem Bart und rotem Halstuch ist im Profil zu sehen.",
            "Alfred Guillou ist ein französischer Malerkollege."
          ],
          "fact": "1879. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "pss3",
      "place": "Skagen und Kopenhagen",
      "when": "1882–1888",
      "map": {
        "x": 118,
        "y": 12
      },
      "mapLabel": "Skagen",
      "intro": [
        "Ab 1882 kommt Krøyer immer wieder nach Skagen, wo sich dänische und skandinavische Maler und Schriftsteller treffen.",
        "Im Winter malt er in Kopenhagen viele Aufträge, Bildnisse und Bilder aus Fabriken und Salons."
      ],
      "works": [
        {
          "pid": "psseascape",
          "text": [
            "Grüngraue Wellen rollen unter einem bedeckten Himmel auf den Strand zu.",
            "Das Bild entsteht 1882, im ersten Sommer, den Krøyer in Skagen verbringt."
          ],
          "fact": "1882. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psmeldahl",
          "text": [
            "Der Architekt steht in einem langen schwarzen Mantel vor einem weissen Kamin.",
            "Das Bildnis zeigt ihn in ganzer Figur."
          ],
          "fact": "1882. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pstuxen",
          "text": [
            "Eine junge Frau steht ruhig da, gezeichnet mit schwarzer und weisser Kreide auf braunem Papier.",
            "Das Blatt ist gross, rund 130 Zentimeter hoch."
          ],
          "fact": "1882. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "psbeach",
          "text": [
            "Fischer liegen und sitzen im hellen Sand, einer steht und schaut aufs Meer.",
            "Das Bild ist rund zwei Meter breit und wird schon 1884 vom Museum erworben."
          ],
          "fact": "1883. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psfoundry",
          "text": [
            "In einer grossen Halle arbeiten Männer am glühenden Eisen, über ihnen hängt ein Kran.",
            "Burmeister & Wain ist ein grosser Industriebetrieb in Kopenhagen."
          ],
          "fact": "1885. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psduet",
          "text": [
            "Eine Frau in einem orangefarbenen Kleid singt neben einem Mann am Klavier, die Gäste hören im Kerzenlicht zu.",
            "Krøyer malt hier einen Abend in einem Salon, mit vielen dunklen Tönen."
          ],
          "fact": "1887. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "pss4",
      "place": "Heirat und Italien",
      "when": "1889–1891",
      "map": {
        "x": 160,
        "y": 118
      },
      "mapLabel": "Italien",
      "intro": [
        "1889 heiratet Krøyer die 16 Jahre jüngere Malerin Marie Triepcke.",
        "1890 malt er in Italien, unter anderem in Cività d’Antino in den Abruzzen."
      ],
      "works": [
        {
          "pid": "psthreshing",
          "text": [
            "In grellem Sonnenlicht treiben Bauern Rinder über das goldene Stroh, andere arbeiten mit Gabeln.",
            "Cività d’Antino ist ein Bergdorf in den Abruzzen, wo Krøyer 1890 malt."
          ],
          "fact": "1890. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pstorello",
          "text": [
            "In einer schmalen, weissen Gasse stehen Frauen und Kinder im Sonnenlicht.",
            "Das Licht auf den hellen Mauern ist das eigentliche Thema des Bildes."
          ],
          "fact": "1890. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pscatarinella",
          "text": [
            "Ein lächelndes Mädchen trägt ein gelbes und ein rotes Tuch über dem Haar.",
            "Krøyer malt das kleine Aquarell über einer Bleistiftzeichnung."
          ],
          "fact": "1890. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "psrosenorn",
          "text": [
            "Ein alter Herr mit weissem Haar sitzt im schwarzen Anzug in einem Sessel und faltet die Hände.",
            "Rosenørn-Lehn war 1870 dänischer Aussenminister und Direktor der königlichen Gemäldesammlung."
          ],
          "fact": "1891. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "pss5",
      "place": "Blaue Abende und grosse Aufträge",
      "when": "1893–1909",
      "map": {
        "x": 140,
        "y": 38
      },
      "mapLabel": "Skagen und Kopenhagen",
      "intro": [
        "In den 1890er-Jahren malt Krøyer die hellen Sommerabende am Strand von Skagen in blauen Tönen.",
        "Daneben führt er grosse Aufträge aus, etwa ein Gruppenbild der Königlich Dänischen Akademie der Wissenschaften."
      ],
      "works": [
        {
          "pid": "psevening",
          "text": [
            "Die Sonne geht hinter flachem Land unter, rosa und goldene Wolken spiegeln sich im Wasser.",
            "Das kleine Bild auf Holz ist nur etwa 43 Zentimeter breit."
          ],
          "fact": "1893. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psschandorph",
          "text": [
            "Ein kräftiger Mann mit grauem Bart sitzt unter einer Lampe an seinem Schreibtisch.",
            "Sophus Schandorph ist ein dänischer Schriftsteller."
          ],
          "fact": "1895. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pssteenstrup",
          "text": [
            "Ein alter Mann mit weissem Haar steht und spricht, hinter ihm hören andere Männer zu.",
            "Japetus Steenstrup ist Professor für Zoologie."
          ],
          "fact": "1895. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pscasse",
          "text": [
            "Eine alte Frau mit Haube strickt an einem Fenster mit Blumen.",
            "Krøyer zeichnet das Bildnis mit Pastellkreiden auf Papier."
          ],
          "fact": "1895. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psgroup",
          "text": [
            "Vier ältere Herren sitzen nebeneinander an einem Tisch, neben einem goldenen Leuchter.",
            "Im selben Jahr arbeitet Krøyer an seinem grossen Gruppenbild der Akademie der Wissenschaften."
          ],
          "fact": "1896. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pshelga",
          "text": [
            "Ein Mädchen mit offenem Haar steht in einem langen weissen Kleid in einem dunklen Zimmer.",
            "Krøyer malt das Bildnis auf eine Holztafel."
          ],
          "fact": "1897. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psmoonlight",
          "text": [
            "Ruhiges blaues Meer und ein heller Strand liegen unter dem Mond, in der Ferne fährt ein kleines Segelboot.",
            "Solche blauen Strandbilder gehören zu Krøyers bekanntesten Werken."
          ],
          "fact": "1899. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "psraben",
          "text": [
            "Eine Frau in einem weissen Abendkleid steht vor einem grünen Vorhang.",
            "Das Bildnis zeigt sie in ganzer Figur, in hellen, leichten Farben."
          ],
          "fact": "1899. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
