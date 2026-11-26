// v10.43 Christen Købke life journey (1810–1848). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "ckgebauer",
    "title": "Bildnis des Tiermalers C.D. Gebauer",
    "artist": "Christen Købke",
    "year": "1829",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3410: https://open.smk.dk/artwork/image/KMS3410, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "cksophie",
    "title": "Sophie Købke, die Schwester des Künstlers, in der Diele im Kastell",
    "artist": "Christen Købke",
    "year": "um 1830",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2025.321: https://www.metmuseum.org/art/collection/search/924787, CC0 (gemeinfrei)"
  },
  {
    "id": "ckaarhus",
    "title": "Das Querschiff des Doms zu Århus",
    "artist": "Christen Købke",
    "year": "1830",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1345: https://open.smk.dk/artwork/image/KMS1345, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckloft",
    "title": "Blick vom Dachboden des Kornspeichers der Bäckerei im Kastell",
    "artist": "Christen Købke",
    "year": "1831",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1662: https://open.smk.dk/artwork/image/KMS1662, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckjulius",
    "title": "Julius, der Sohn des Malers C.W. Eckersberg, im Atelier seines Vaters",
    "artist": "Christen Købke",
    "year": "1831",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1767: https://open.smk.dk/artwork/image/KMS1767, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckramparts",
    "title": "Blick vom Wall des Kastells zur Langelinie und zum Marinehafen",
    "artist": "Christen Købke",
    "year": "1830–1833",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3480: https://open.smk.dk/artwork/image/KMS3480, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckwindow",
    "title": "Blick aus einem Fenster in der Toldbodvej zum Kastell",
    "artist": "Christen Købke",
    "year": "1831–1834",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3156: https://open.smk.dk/artwork/image/KMS3156, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "cksailor",
    "title": "Bildnis eines alten Seemanns",
    "artist": "Christen Købke",
    "year": "1832",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS577: https://open.smk.dk/artwork/image/KMS577, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckhoyen",
    "title": "Bildnis von Inger Margrethe Høyen, der Mutter des Kunsthistorikers N.L. Høyen",
    "artist": "Christen Købke",
    "year": "1832",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1667: https://open.smk.dk/artwork/image/KMS1667, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckida",
    "title": "Ida Thiele als Kind",
    "artist": "Christen Købke",
    "year": "1832",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3136: https://open.smk.dk/artwork/image/KMS3136, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckpetersen",
    "title": "Bildnis des Krämers Christian Petersen, Cousin und Schwager des Künstlers",
    "artist": "Christen Købke",
    "year": "1833",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3159: https://open.smk.dk/artwork/image/KMS3159, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckhjardemaal",
    "title": "Dr. Johann Henning Kjetil Hjardemaal",
    "artist": "Christen Købke",
    "year": "1833",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1987.51: https://clevelandart.org/art/1987.51, CC0 (gemeinfrei)"
  },
  {
    "id": "ckholm",
    "title": "Bildnis des Tiermalers Christian Holm",
    "artist": "Christen Købke",
    "year": "1834",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3165: https://open.smk.dk/artwork/image/KMS3165, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckploeyen",
    "title": "Bildnis von Johanne Pløyen, geborene Bachmann",
    "artist": "Christen Købke",
    "year": "1834",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1670: https://open.smk.dk/artwork/image/KMS1670, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckroof",
    "title": "Dachfirst von Schloss Frederiksborg mit Blick auf See, Stadt und Wald",
    "artist": "Christen Købke",
    "year": "1833–1834",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, DEP691: https://open.smk.dk/artwork/image/DEP691, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckfredstudy",
    "title": "Schloss Frederiksborg von Nordwesten, Studie",
    "artist": "Christen Købke",
    "year": "1835",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1493: https://open.smk.dk/artwork/image/KMS1493, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckfrederiksborg",
    "title": "Schloss Frederiksborg von Nordwesten",
    "artist": "Christen Købke",
    "year": "1836",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3148: https://open.smk.dk/artwork/image/KMS3148, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckfeilberg",
    "title": "Bildnis des Marineleutnants D. Christen Schifter Feilberg",
    "artist": "Christen Købke",
    "year": "1832–1836",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4531: https://open.smk.dk/artwork/image/KMS4531, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckhilker",
    "title": "Bildnis des Dekorationsmalers G.C. Hilker",
    "artist": "Christen Købke",
    "year": "1835–1838",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1081: https://open.smk.dk/artwork/image/KMS1081, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckmarstrand",
    "title": "Bildnis des Malers Wilhelm Marstrand",
    "artist": "Christen Købke",
    "year": "1836",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1348: https://open.smk.dk/artwork/image/KMS1348, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckgemzoe",
    "title": "Bildnis des Malers und Lithografen P.H. Gemzøe",
    "artist": "Christen Købke",
    "year": "1833",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3237: https://open.smk.dk/artwork/image/KMS3237, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckadolf",
    "title": "Bildnis von Carl Adolf Feilberg",
    "artist": "Christen Købke",
    "year": "1835",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3157: https://open.smk.dk/artwork/image/KMS3157, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckfather",
    "title": "Bildnis des Vaters des Künstlers, Bäckermeister Peter Berendt Købke",
    "artist": "Christen Købke",
    "year": "1833–1837",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3482: https://open.smk.dk/artwork/image/KMS3482, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckcecilie",
    "title": "Bildnis der Schwester des Künstlers, Cecilie Margrethe Petersen",
    "artist": "Christen Købke",
    "year": "1835",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3160: https://open.smk.dk/artwork/image/KMS3160, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckmother",
    "title": "Bildnis der Mutter des Künstlers, Cecilia Margrethe Købke",
    "artist": "Christen Købke",
    "year": "1836",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3483: https://open.smk.dk/artwork/image/KMS3483, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "cksusanne",
    "title": "Bildnis von Susanne Cecilie Købke, der Frau des Künstlers",
    "artist": "Christen Købke",
    "year": "1836",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3793: https://open.smk.dk/artwork/image/KMS3793, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckosterbro",
    "title": "Eine Strasse in Østerbro bei Kopenhagen im Morgenlicht",
    "artist": "Christen Købke",
    "year": "1836",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS844: https://open.smk.dk/artwork/image/KMS844, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckdrawbridge",
    "title": "Die nördliche Zugbrücke des Kastells in Kopenhagen",
    "artist": "Christen Købke",
    "year": "1835–1839",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3768: https://open.smk.dk/artwork/image/KMS3768, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "cklimekiln",
    "title": "Die Bucht bei der Kalkbrennerei vor Kopenhagen, ein stiller Sommernachmittag",
    "artist": "Christen Købke",
    "year": "1837",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1700: https://open.smk.dk/artwork/image/KMS1700, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckvaldemar",
    "title": "Valdemar Hjartvar Købke, der Bruder des Künstlers",
    "artist": "Christen Købke",
    "year": "um 1838",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1990.233: https://www.metmuseum.org/art/collection/search/436825, CC0 (gemeinfrei)"
  },
  {
    "id": "cksortedam",
    "title": "Blick vom Dosseringen über den Sortedam-See nach Nørrebro",
    "artist": "Christen Købke",
    "year": "1838",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS359: https://open.smk.dk/artwork/image/KMS359, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "cknaples",
    "title": "Der Golf von Neapel mit dem Vesuv im Hintergrund",
    "artist": "Christen Købke",
    "year": "1838–1839",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3947: https://open.smk.dk/artwork/image/KMS3947, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckroughsea",
    "title": "Brandung an einer Felsküste, Capri",
    "artist": "Christen Købke",
    "year": "1839",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3946: https://open.smk.dk/artwork/image/KMS3946, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckcastel",
    "title": "Das Castel dell’Ovo in Neapel",
    "artist": "Christen Købke",
    "year": "1839–1840",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3467: https://open.smk.dk/artwork/image/KMS3467, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckcapri",
    "title": "Felsküste auf Capri nach Sonnenaufgang",
    "artist": "Christen Købke",
    "year": "1841–1843",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS445: https://open.smk.dk/artwork/image/KMS445, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "cksteps",
    "title": "Die Gartentreppe zum Atelier des Künstlers in Blegdammen",
    "artist": "Christen Købke",
    "year": "1841–1844",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6605: https://open.smk.dk/artwork/image/KMS6605, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckgate",
    "title": "Das Gartentor am Haus des Künstlers in Blegdammen",
    "artist": "Christen Købke",
    "year": "1843–1844",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6827: https://open.smk.dk/artwork/image/KMS6827, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckdosseringen",
    "title": "Blick vom Dosseringen nach Nørrebro",
    "artist": "Christen Købke",
    "year": "1841–1845",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3613: https://open.smk.dk/artwork/image/KMS3613, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckcloudy",
    "title": "Der Dosseringen bei Østerbro unter bewölktem Himmel",
    "artist": "Christen Købke",
    "year": "1841–1845",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS7099: https://open.smk.dk/artwork/image/KMS7099, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckquail",
    "title": "Eine Wachtel frisst an einer Kornähre",
    "artist": "Christen Købke",
    "year": "1839",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3796: https://open.smk.dk/artwork/image/KMS3796, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ckjohanne",
    "title": "Bildnis von Johanne Elisabeth Købke, geborene Sundbye, Schwägerin des Künstlers",
    "artist": "Christen Købke",
    "year": "1842",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3158: https://open.smk.dk/artwork/image/KMS3158, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "kobke",
  "name": "Christen Købke",
  "title": "Christen Købkes Lebensweg",
  "life": "1810–1848",
  "part": "Kopenhagen, Frederiksborg und Capri",
  "subtitle": "Ein Maler des dänischen Goldenen Zeitalters",
  "cover": "ckosterbro",
  "intro": "Reise mit Christen Købke durch sein Leben: vom Kastell in Kopenhagen über Schloss Frederiksborg und den Sortedam-See bis nach Neapel und Capri. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Christen Købke stirbt im Februar 1848 in Kopenhagen an einer Lungenentzündung, er wird nur 37 Jahre alt.",
    "Die meisten seiner Bilder bleiben lange bei seiner Familie, erst gegen 1900 wird er wieder bekannter."
  ],
  "epilogue": "Christen Købke stirbt im Februar 1848 in Kopenhagen. Der Weg führt vom Kastell über Frederiksborg und Østerbro nach Neapel und Capri und zurück an den Sortedam-See.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,14 C50,10 58,16 56,28 C56,40 60,50 56,58 C48,62 40,58 38,48 C36,36 34,22 40,14 Z",
      "M70,40 C82,36 94,42 94,52 C92,62 80,66 72,62 C64,58 62,46 70,40 Z",
      "M150,70 C160,66 170,70 172,80 C178,92 190,102 204,112 C212,118 210,128 202,128 C196,138 186,140 182,132 C178,122 168,112 158,100 C150,90 144,78 150,70 Z",
      "M176,140 C180,138 184,140 182,144 C178,146 174,144 176,140 Z"
    ]
  },
  "stations": [
    {
      "id": "cks1",
      "place": "Kindheit im Kastell",
      "when": "1810–1831",
      "map": {
        "x": 86,
        "y": 46
      },
      "mapLabel": "Kopenhagen",
      "intro": [
        "Christen Købke wird am 26. Mai 1810 in Kopenhagen geboren und wächst im Kastell auf, wo sein Vater Bäcker ist.",
        "Mit elf Jahren beginnt er während einer langen Krankheit zu zeichnen, danach lernt er an der Kunstakademie, und 1829 verbringt er einen Arbeitssommer in Århus."
      ],
      "works": [
        {
          "pid": "ckgebauer",
          "text": [
            "Der Tiermaler C.D. Gebauer blickt in einem braunen Rock zur Seite, vor einem dunklen Hintergrund.",
            "In diesen Jahren hat Købke engen Umgang mit Gebauer."
          ],
          "fact": "1829. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "cksophie",
          "text": [
            "Købkes ältere Schwester Sophie steht in einem dunklen Kleid in der Diele im Kastell.",
            "Das kleine Bild ist nur etwa 31 Zentimeter hoch."
          ],
          "fact": "um 1830. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "ckaarhus",
          "text": [
            "Hohe weisse Bögen und Gewölbe füllen das Bild, Licht fällt in den stillen Kirchenraum.",
            "Købke beginnt das Bild 1829 vor Ort in Århus und vollendet es nach seiner Rückkehr nach Kopenhagen."
          ],
          "fact": "1830. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckloft",
          "text": [
            "Durch die offene Tür des Speichers sieht man Købkes Schwester Cecilie Margrethe, die strickend den Steg heraufkommt.",
            "Die Familie wohnt im Kastell unter dem Kornspeicher, denn Købkes Vater ist dort Bäcker."
          ],
          "fact": "1831. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckjulius",
          "text": [
            "Ein Junge in brauner Kleidung sitzt auf einem Stuhl und hält ein Blatt Papier.",
            "Er ist der Sohn von C.W. Eckersberg, dem Professor, an dem sich Købke in diesen Jahren orientiert."
          ],
          "fact": "1831. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "cks2",
      "place": "Wälle, Fenster und Bildnisse",
      "when": "1830–1834",
      "map": {
        "x": 84,
        "y": 52
      },
      "mapLabel": "Toldbodvej",
      "intro": [
        "1832 mietet Købke ein Atelier an der Toldbodvej, von dem aus er auf das Kastell seiner Kindheit blickt.",
        "Er malt die Wälle des Kastells und viele Bildnisse von Freunden, Verwandten und Bekannten."
      ],
      "works": [
        {
          "pid": "ckramparts",
          "text": [
            "Grüne Wälle und ein ruhiges Wasser liegen unter einem weiten Himmel mit Wolken.",
            "Der Blick geht vom Kastell, in dem Købke aufwächst, zum Hafen."
          ],
          "fact": "1830–1833. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckwindow",
          "text": [
            "Über die Baumkronen hinweg sieht man die Mühle des Kastells, rote Dächer und in der Ferne die Küste des Öresunds.",
            "Das Bild zeigt die Aussicht aus Købkes Atelier."
          ],
          "fact": "1831–1834. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "cksailor",
          "text": [
            "Ein alter Seemann mit langem grauem Haar und dunklem Rock blickt aus dem Bild.",
            "Købke malt ihn Ende 1832 als Charakterbildnis eines Mannes aus dem Volk."
          ],
          "fact": "1832. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckhoyen",
          "text": [
            "Eine alte Frau mit weisser Haube und Schultertuch blickt ruhig aus dem Bild.",
            "Ihr Sohn, der Kunsthistoriker N.L. Høyen, ermuntert die Maler dieser Zeit, Dänemark und seine Menschen zu malen."
          ],
          "fact": "1832. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckida",
          "text": [
            "Ein kleines Mädchen mit blonden Locken und rotem Kleid lehnt an einem Tisch.",
            "Sie heisst Ida Thiele und wird später Mrs Wilde."
          ],
          "fact": "1832. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckpetersen",
          "text": [
            "Ein junger Mann in dunklem Rock und weissem Kragen schaut den Betrachter an.",
            "Christian Petersen ist Købkes Cousin und zugleich sein Schwager."
          ],
          "fact": "1833. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckhjardemaal",
          "text": [
            "Ein Mann in dunklem Rock sitzt an einem Tisch und blickt ernst aus dem Bild.",
            "Das Bildnis ist klein, nur etwa 34 Zentimeter hoch."
          ],
          "fact": "1833. Cleveland Museum of Art."
        },
        {
          "pid": "ckholm",
          "text": [
            "Ein junger Mann in weissem Hemd stützt die verschränkten Arme auf und blickt den Betrachter an.",
            "Christian Holm ist wie Købke Maler, er malt vor allem Tiere."
          ],
          "fact": "1834. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckploeyen",
          "text": [
            "Eine ältere Frau mit gerüschter Haube und weissem Spitzenkragen sitzt in einem grauen Kleid.",
            "Wie viele Bildnisse Købkes zeigt es einen Menschen aus seinem Umfeld ganz schlicht und genau."
          ],
          "fact": "1834. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "cks3",
      "place": "Schloss Frederiksborg und Freunde",
      "when": "1833–1838",
      "map": {
        "x": 80,
        "y": 44
      },
      "mapLabel": "Frederiksborg",
      "intro": [
        "Für zwei grosse Bilder von Schloss Frederiksborg malt und zeichnet Købke zuerst viele Studien.",
        "Mitte der 1830er-Jahre porträtiert er auch Freunde und Künstlerkollegen."
      ],
      "works": [
        {
          "pid": "ckroof",
          "text": [
            "Vom hohen Dach des Schlosses aus blickt man über einen See, eine kleine Stadt und Wälder bis zum Horizont.",
            "Es ist eines von zwei grossen Bildern, für die Købke auf Schloss Frederiksborg viele Studien malt."
          ],
          "fact": "1833–1834. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckfredstudy",
          "text": [
            "Das rote Backsteinschloss mit seinem hohen Turm steht hinter grünen Bäumen.",
            "In dieser Studie erprobt Købke Licht und Farben für ein grösseres Bild."
          ],
          "fact": "1835. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckfrederiksborg",
          "text": [
            "Die Türme des Schlosses ragen über Bäume und Wasser in einen hellen Himmel.",
            "Der Kunsthistoriker N.L. Høyen nennt Frederiksborg das schönste Königsschloss des Nordens."
          ],
          "fact": "1836. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckfeilberg",
          "text": [
            "Ein junger Offizier in dunkelblauer Uniform mit rotem Kragen hält seinen Hut in der Hand.",
            "Er ist Leutnant bei der Marine."
          ],
          "fact": "1832–1836. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckhilker",
          "text": [
            "Ein Mann mit dunklem lockigem Haar und dunklem Rock blickt ernst aus dem Bild.",
            "G.C. Hilker ist Dekorationsmaler, er schmückt Räume und Gebäude mit Malerei."
          ],
          "fact": "1835–1838. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckmarstrand",
          "text": [
            "Der junge Maler Wilhelm Marstrand blickt mit dunklem Haar und schwarzer Halsbinde aus dem Bild.",
            "Marstrand gehört wie Købke zu den Malern um C.W. Eckersberg."
          ],
          "fact": "1836. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckgemzoe",
          "text": [
            "Ein junger Mann mit hellem, gewelltem Haar blickt zur Seite, das Licht fällt hell auf sein Gesicht.",
            "P.H. Gemzøe ist Maler und Lithograf; Købke porträtiert ihn 1833."
          ],
          "fact": "1833. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckadolf",
          "text": [
            "Ein junger Mann mit lockigem Haar trägt einen braunen Rock, ein weisses Hemd und ein dunkles Halstuch.",
            "Købke malt das Bildnis 1835, mitten in den Jahren, in denen er Freunde und Bekannte porträtiert."
          ],
          "fact": "1835. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "cks4",
      "place": "Familie, Østerbro und Sortedam",
      "when": "1833–1838",
      "map": {
        "x": 90,
        "y": 48
      },
      "mapLabel": "Blegdammen",
      "intro": [
        "1833 zieht Købke mit seinen Eltern nach Blegdammen am Sortedam-See, damals ausserhalb der Stadt.",
        "Er malt seine Familie, die Strassen und Ufer in der Nähe und heiratet 1837 seine Cousine Susanne Cecilie Købke."
      ],
      "works": [
        {
          "pid": "ckfather",
          "text": [
            "Ein alter Mann mit weissem Haar und dunklem Rock blickt ruhig aus dem Bild.",
            "Peter Berendt Købke ist Bäckermeister im Kastell, er stirbt 1843."
          ],
          "fact": "1833–1837. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckcecilie",
          "text": [
            "Eine junge Frau mit gescheiteltem Haar sitzt in einem roten Kleid vor einem dunklen Grund.",
            "Es ist Købkes Schwester Cecilie Margrethe, die er schon 1831 auf dem Speicher im Kastell gemalt hat."
          ],
          "fact": "1835. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckmother",
          "text": [
            "Købkes Mutter trägt eine Haube mit Bändern und ein Schultertuch und stützt das Kinn in die Hand.",
            "Ihr Mädchenname ist Petersen."
          ],
          "fact": "1836. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "cksusanne",
          "text": [
            "Eine junge Frau in rosarotem Kleid mit grünem Halstuch faltet die Hände und blickt den Betrachter an.",
            "Susanne Cecilie ist Købkes Cousine, ein Jahr später heiraten die beiden."
          ],
          "fact": "1836. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckosterbro",
          "text": [
            "Morgenlicht fällt von rechts auf Bäume, Strasse und Wasserpumpe, auf der Strasse sind Fischfrauen, Bauern und Spaziergänger unterwegs.",
            "Im Sommer 1836 beobachtet Købke fast jeden Morgen diese Strasse, nicht weit von seinem Zuhause."
          ],
          "fact": "1836. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckdrawbridge",
          "text": [
            "Eine rote hölzerne Zugbrücke mit hohen Pfosten führt zum Kastell, dahinter stehen Bäume und Häuser.",
            "Købke malt die Studie auf Papier, das später auf Leinwand aufgezogen wird."
          ],
          "fact": "1835–1839. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "cklimekiln",
          "text": [
            "Hohe Bäume stehen am Ufer, das Wasser liegt still unter einem rosafarbenen Himmel.",
            "Der Blick geht vom Ufer nördlich von Kopenhagen nach Norden."
          ],
          "fact": "1837. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckvaldemar",
          "text": [
            "Ein junger Mann mit lockigem Haar trägt eine dunkle Uniformjacke mit rotem Kragen und blickt den Betrachter an.",
            "Valdemar ist Købkes jüngerer Bruder, er lebt von 1813 bis 1893."
          ],
          "fact": "um 1838. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "cksortedam",
          "text": [
            "Zwei junge Frauen stehen an einem Steg und schauen einem Ruderboot nach, das langsam über den See fährt.",
            "Die dänische Flagge zeigt, dass wir in einer Vorstadt von Kopenhagen sind."
          ],
          "fact": "1838. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "cks5",
      "place": "Die grosse Reise: Neapel und Capri",
      "when": "1838–1840",
      "map": {
        "x": 186,
        "y": 126
      },
      "mapLabel": "Neapel",
      "intro": [
        "1838 bricht Købke zu einer grossen Reise nach Italien auf, von der er 1840 zurückkehrt.",
        "Höhepunkt ist ein Aufenthalt von mehreren Monaten auf Capri, wo er gern an den beiden Häfen Marina Grande und Marina Piccola arbeitet."
      ],
      "works": [
        {
          "pid": "cknaples",
          "text": [
            "Boote liegen auf dem ruhigen Wasser des Golfs, dahinter erhebt sich der Vesuv.",
            "Købke malt die Studie auf Papier, während seiner Reise in Italien."
          ],
          "fact": "1838–1839. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckroughsea",
          "text": [
            "Hohe Wellen schlagen gegen die Felsen und werfen weisse Gischt auf.",
            "Købke malt das Bild auf Capri, wo er mehrere Monate verbringt."
          ],
          "fact": "1839. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckcastel",
          "text": [
            "Die gelbe Festung steht auf einem Felsen im Meer, im warmen Licht.",
            "Købke malt die Studie auf Papier, gegen Ende seiner Reise in Italien."
          ],
          "fact": "1839–1840. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckquail",
          "text": [
            "Eine kleine Wachtel steht auf einer Kante vor dunklem Grund und pickt an einem Bündel Ähren.",
            "Das Museum datiert das Bild auf 1839, in die Jahre von Købkes Reise nach Italien."
          ],
          "fact": "1839. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "cks6",
      "place": "Zurück am Sortedam-See",
      "when": "1840–1848",
      "map": {
        "x": 88,
        "y": 54
      },
      "mapLabel": "Sortedam",
      "intro": [
        "Nach der Rückkehr malt Købke ein grosses Bild der Marina Piccola für die Akademie, doch sie lehnt es 1846 ab.",
        "Daneben entstehen freie kleine Studien am Sortedam-See und rund um das Haus in Blegdammen, das seine Mutter 1845 verkaufen muss."
      ],
      "works": [
        {
          "pid": "ckcapri",
          "text": [
            "Ein mächtiger Felsen ragt über dem blauen Meer auf, im klaren Licht des Morgens.",
            "Købke malt das Bild erst nach seiner Rückkehr aus Italien."
          ],
          "fact": "1841–1843. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "cksteps",
          "text": [
            "Ein knorriger Baum neben der Treppe und das Sonnenlicht auf der Hauswand sind die Hauptsache in diesem Bild.",
            "Im Haus seiner Eltern hat Købke eine eigene Wohnung, und er malt es mit ungewöhnlich kühnem Ausschnitt."
          ],
          "fact": "1841–1844. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckgate",
          "text": [
            "Hohe Bäume stehen hinter einem hölzernen Zaun mit Tor.",
            "Das Haus in Blegdammen ist zwölf Jahre lang Købkes Zuhause."
          ],
          "fact": "1843–1844. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckdosseringen",
          "text": [
            "Ein Baum steht am Ufer, der See liegt still unter einem hellen Himmel.",
            "Der Dosseringen ist ein Uferweg am Sortedam-See, ganz nah bei Købkes Zuhause."
          ],
          "fact": "1841–1845. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckcloudy",
          "text": [
            "Ein Weg mit Bäumen führt am Seeufer entlang, darüber ziehen graue Wolken.",
            "Solche kleinen Studien malt Købke für sich selbst, freier als seine grossen Bilder."
          ],
          "fact": "1841–1845. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ckjohanne",
          "text": [
            "Die Schwägerin des Malers trägt ein dunkles Kleid mit hellem Spitzenrand und blickt ruhig zum Betrachter.",
            "Ihr Haar ist glatt gescheitelt; das Museum vermerkt, dass das Bildnis 1842 vollendet ist."
          ],
          "fact": "1842. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
