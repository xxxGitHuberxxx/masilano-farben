// v10.43 John Singer Sargent life journey (1856–1925). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "jsalhambra",
    "title": "Torre de los Picos, Alhambra",
    "artist": "John Singer Sargent",
    "year": "1868",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.82i recto: https://www.metmuseum.org/art/collection/search/12099, CC0 (gemeinfrei)"
  },
  {
    "id": "jspilatus",
    "title": "Blick vom Pilatus",
    "artist": "John Singer Sargent",
    "year": "1870",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.82e: https://www.metmuseum.org/art/collection/search/12042, CC0 (gemeinfrei)"
  },
  {
    "id": "jschalets",
    "title": "Chalets, Breithorn, Mürren",
    "artist": "John Singer Sargent",
    "year": "1870",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.82b recto: https://www.metmuseum.org/art/collection/search/12299, CC0 (gemeinfrei)"
  },
  {
    "id": "jstyrol",
    "title": "Tiroler Bildstock",
    "artist": "John Singer Sargent",
    "year": "1871",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.82a: https://www.metmuseum.org/art/collection/search/12454, CC0 (gemeinfrei)"
  },
  {
    "id": "jsfish",
    "title": "Aufbruch zum Fischen",
    "artist": "John Singer Sargent",
    "year": "1878",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.79.32: https://www.nga.gov/collection/art-object-page.166472.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jspailleron",
    "title": "Marie Buloz Pailleron",
    "artist": "John Singer Sargent",
    "year": "1879",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.79.53: https://www.nga.gov/collection/art-object-page.97063.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jsleones",
    "title": "Patio de los Leones, Alhambra",
    "artist": "John Singer Sargent",
    "year": "1879",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.36: https://www.metmuseum.org/art/collection/search/12033, CC0 (gemeinfrei)"
  },
  {
    "id": "jstetouan",
    "title": "Innenhof, Tétouan, Marokko",
    "artist": "John Singer Sargent",
    "year": "1879–1880",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.6: https://www.metmuseum.org/art/collection/search/12065, CC0 (gemeinfrei)"
  },
  {
    "id": "jswhitewalls",
    "title": "Weisse Mauern im Sonnenlicht, Marokko",
    "artist": "John Singer Sargent",
    "year": "1879–1880",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.4: https://www.metmuseum.org/art/collection/search/12470, CC0 (gemeinfrei)"
  },
  {
    "id": "jsvenstreet",
    "title": "Strasse in Venedig",
    "artist": "John Singer Sargent",
    "year": "1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1962.4.1: https://www.nga.gov/collection/art-object-page.46428.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jstownsend",
    "title": "Miss Beatrice Townsend",
    "artist": "John Singer Sargent",
    "year": "1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2006.128.31: https://www.nga.gov/collection/art-object-page.96999.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jsmadamex",
    "title": "Madame X (Virginie Amélie Avegno Gautreau)",
    "artist": "John Singer Sargent",
    "year": "1883–1884",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 16.53: https://www.metmuseum.org/art/collection/search/12127, CC0 (gemeinfrei)"
  },
  {
    "id": "jswhite",
    "title": "Margaret Stuyvesant Rutherfurd White (Mrs. Henry White)",
    "artist": "John Singer Sargent",
    "year": "1883",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.136.68: https://www.nga.gov/collection/art-object-page.166470.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jsreapers",
    "title": "Schnitter bei der Rast im Weizenfeld",
    "artist": "John Singer Sargent",
    "year": "1885",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.14: https://www.metmuseum.org/art/collection/search/12162, CC0 (gemeinfrei)"
  },
  {
    "id": "jsdeirbahri",
    "title": "Felsen bei Deir el-Bahari, Ägypten",
    "artist": "John Singer Sargent",
    "year": "1890–1891",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.24: https://www.metmuseum.org/art/collection/search/12061, CC0 (gemeinfrei)"
  },
  {
    "id": "jspavement",
    "title": "Pflaster, Kairo",
    "artist": "John Singer Sargent",
    "year": "1891",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2006.121.1: https://www.nga.gov/collection/art-object-page.129288.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jswatercarr",
    "title": "Wasserträger am Nil",
    "artist": "John Singer Sargent",
    "year": "1891",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1935.445: https://www.artic.edu/artworks/22153, CC0 (gemeinfrei)"
  },
  {
    "id": "jsaranjuez",
    "title": "Spanischer Mittag, Aranjuez",
    "artist": "John Singer Sargent",
    "year": "1903",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.81h: https://www.metmuseum.org/art/collection/search/12304, CC0 (gemeinfrei)"
  },
  {
    "id": "jsgreendoor",
    "title": "Grüne Tür, Santa Maria della Salute",
    "artist": "John Singer Sargent",
    "year": "um 1904",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.76: https://www.metmuseum.org/art/collection/search/12107, CC0 (gemeinfrei)"
  },
  {
    "id": "jspatio",
    "title": "Der Patio",
    "artist": "John Singer Sargent",
    "year": "1908",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1946.293: https://clevelandart.org/art/1946.293, CC0 (gemeinfrei)"
  },
  {
    "id": "jstarragona",
    "title": "Terrasse und Garten in Tarragona",
    "artist": "John Singer Sargent",
    "year": "um 1908",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 11.9.1989: https://www.artic.edu/artworks/133456, CC0 (gemeinfrei)"
  },
  {
    "id": "jstorlonia",
    "title": "Der Brunnen, Villa Torlonia, Frascati, Italien",
    "artist": "John Singer Sargent",
    "year": "1907",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1914.57: https://www.artic.edu/artworks/69780, CC0 (gemeinfrei)"
  },
  {
    "id": "jscorfu",
    "title": "Unter den Zypressen auf Korfu",
    "artist": "John Singer Sargent",
    "year": "1909",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2020.318: https://www.artic.edu/artworks/234960, CC0 (gemeinfrei)"
  },
  {
    "id": "jssimplon",
    "title": "Simplonpass",
    "artist": "John Singer Sargent",
    "year": "1911",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.79.31: https://www.nga.gov/collection/art-object-page.166471.html, CC0 (gemeinfrei)"
  },
  {
    "id": "jspalmettos",
    "title": "Palmettopalmen",
    "artist": "John Singer Sargent",
    "year": "1917",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.65: https://www.metmuseum.org/art/collection/search/12154, CC0 (gemeinfrei)"
  },
  {
    "id": "jsvizcaya",
    "title": "Terrasse, Vizcaya",
    "artist": "John Singer Sargent",
    "year": "1917",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 50.130.81n: https://www.metmuseum.org/art/collection/search/12306, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "sargent",
  "name": "John Singer Sargent",
  "title": "John Singer Sargents Lebensweg",
  "life": "1856–1925",
  "part": "Alpen, Paris, London, Ägypten und Florida",
  "subtitle": "Porträts, Licht und Aquarelle",
  "cover": "jsfish",
  "intro": "Reise mit John Singer Sargent durch sein Leben: von den Alpen seiner Kindheit über Paris und London bis nach Ägypten, Spanien, Venedig und Florida. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "John Singer Sargent stirbt 1925 in London.",
    "Obwohl er fast sein ganzes Leben in Europa verbringt, bleibt er bis zuletzt amerikanischer Staatsbürger."
  ],
  "epilogue": "John Singer Sargent stirbt 1925. Der Weg führt von den Alpen über Paris und London nach Ägypten, Spanien, Italien und Florida.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,30 C40,16 82,14 94,28 C98,42 80,54 72,64 C66,72 72,84 68,96 C64,112 58,130 50,150 C42,130 38,112 42,96 C38,84 28,74 22,60 C16,48 12,38 18,30 Z",
      "M150,30 C170,20 200,22 214,34 C224,46 220,62 216,76 C208,82 196,74 186,68 C176,64 162,60 154,52 C146,44 144,36 150,30 Z"
    ]
  },
  "stations": [
    {
      "id": "jss1",
      "place": "Eine Kindheit auf Reisen",
      "when": "1868–1871",
      "map": {
        "x": 172,
        "y": 46
      },
      "mapLabel": "Alpen und Spanien",
      "intro": [
        "John Singer Sargent wird im Januar 1856 in Florenz geboren; seine amerikanischen Eltern verbringen die Winter in Florenz, Rom oder Nizza und die Sommer in den Alpen.",
        "Seine Mutter, selbst Malerin aus Liebhaberei, ermutigt ihn zum Zeichnen, und ihre Reiselust liefert ihm die Motive."
      ],
      "works": [
        {
          "pid": "jsalhambra",
          "text": [
            "Ein rötlicher Turm mit Zinnen ragt über eine Mauer der Alhambra in Granada, dahinter liegen weisse Häuser unter einem hellen Himmel.",
            "Sargent malt das Aquarell mit zwölf Jahren; das Blatt kommt 1950 als Schenkung von Mrs. Francis Ormond ins Metropolitan Museum."
          ],
          "fact": "1868. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jspilatus",
          "text": [
            "Über blauen Bergketten leuchtet ein gelber Abendhimmel, links stehen dunkle Tannen, unten liegt ein See.",
            "Das Aquarell entsteht 1870 in der Schweiz, auf dem Pilatus bei Luzern."
          ],
          "fact": "1870. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jschalets",
          "text": [
            "Vor den verschneiten Gipfeln um das Breithorn stehen zwei Holzhütten mit flachen Steindächern.",
            "Sargent malt das Blatt mit Aquarell und Bleistift 1870 in Mürren im Berner Oberland."
          ],
          "fact": "1870. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jstyrol",
          "text": [
            "Ein braunes Holzhaus auf einem Steinsockel steht auf einer sonnigen Wiese, daneben wachsen Bäume.",
            "Das Aquarell entsteht 1871 auf einer Reise der Familie durch Tirol."
          ],
          "fact": "1871. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "jss2",
      "place": "Schüler in Paris, Reisen nach Spanien und Marokko",
      "when": "1878–1880",
      "map": {
        "x": 158,
        "y": 56
      },
      "mapLabel": "Paris, Spanien und Marokko",
      "intro": [
        "Im Mai 1874 tritt Sargent in Paris in das Atelier von Carolus-Duran ein, der seine Schüler direkt mit dem Pinsel malen lässt und sie vor allem auf Velázquez verweist.",
        "1879 und 1880 reist er nach Spanien und Marokko."
      ],
      "works": [
        {
          "pid": "jsfish",
          "text": [
            "Frauen und Kinder gehen mit Körben über einen Strand in der Bretagne, um in den Pfützen der Ebbe Meerestiere zu sammeln; hinten steht ein Leuchtturm.",
            "Der 22-jährige Sargent zeigt das Bild 1878 im Pariser Salon, und es findet einen Käufer."
          ],
          "fact": "1878. National Gallery of Art, Washington."
        },
        {
          "pid": "jspailleron",
          "text": [
            "Eine Frau in einem langen schwarzen Kleid steht in einer grünen Wiese unter Bäumen und blickt uns an.",
            "Ihr Mann, Édouard Pailleron, gibt das Bildnis 1879 in Auftrag; Sargent signiert es mit „John S. Sargent / Ronjoux 1879“."
          ],
          "fact": "1879. National Gallery of Art, Washington."
        },
        {
          "pid": "jsleones",
          "text": [
            "Helles Sonnenlicht fällt auf Säulen und den Steinboden eines Hofes der Alhambra in Granada.",
            "Sargent malt das Blatt 1879 mit Aquarell, Deckfarbe und Bleistift auf seiner Reise durch Spanien."
          ],
          "fact": "1879. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jstetouan",
          "text": [
            "Weisse und hellblaue Mauern umschliessen einen sonnigen Hof, in dem eine rote und eine dunkle Tür unter Hufeisenbögen liegen.",
            "Sargent malt die kleine Ölstudie auf Holz während seiner Reise nach Marokko 1879 und 1880."
          ],
          "fact": "1879–1880. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jswhitewalls",
          "text": [
            "Grelles Sonnenlicht trifft auf weisse Hausmauern mit einer kleinen braunen Tür, vorne liegt ein schattiger Graben.",
            "Wie der Innenhof von Tétouan ist auch diese Ölstudie auf Holz gemalt."
          ],
          "fact": "1879–1880. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "jss3",
      "place": "Madame X und der Weg nach London",
      "when": "1882–1885",
      "map": {
        "x": 160,
        "y": 40
      },
      "mapLabel": "Venedig, Paris und London",
      "intro": [
        "Sein bekanntestes Bildnis, „Madame X“, sorgt 1884 im Pariser Salon für einen Skandal.",
        "Im Frühjahr 1886 zieht Sargent für den Rest seines Lebens nach England; ab 1885 besucht er mehrmals Claude Monet in Giverny."
      ],
      "works": [
        {
          "pid": "jsvenstreet",
          "text": [
            "Eine Frau mit dunklem Schal geht durch eine schmale venezianische Gasse, zwei Männer in dunklen Mänteln sehen ihr nach.",
            "Sargent stellt das Bild 1882 in Paris als „Une rue à Venise“ aus."
          ],
          "fact": "1882. National Gallery of Art, Washington."
        },
        {
          "pid": "jstownsend",
          "text": [
            "Ein Mädchen in schwarzem Kleid mit cremeweissem Spitzenkragen, roter Schärpe und Korallenkette hält einen kleinen Terrier im Arm.",
            "Oben steht die Widmung „to my friend Mrs Townsend John S. Sargent“; die Mutter des Mädchens war mit dem Maler befreundet."
          ],
          "fact": "1882. National Gallery of Art, Washington."
        },
        {
          "pid": "jsmadamex",
          "text": [
            "Eine Frau in einem schwarzen Abendkleid steht neben einem kleinen Tisch und wendet den Kopf im Profil zur Seite.",
            "Sargent malt das Bild ohne Auftrag; im Pariser Salon von 1884 löst es einen Skandal aus."
          ],
          "fact": "1883–1884. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jswhite",
          "text": [
            "Eine Frau in einem langen weissen Satinkleid steht vor einem Ruhebett und hält einen Fächer und ein schwarzes Opernglas.",
            "Sie wählt Sargent als Maler, nachdem sie seine Bilder im Pariser Salon von 1882 gesehen hat; das Bild ist „John S. Sargent 1883“ signiert."
          ],
          "fact": "1883. National Gallery of Art, Washington."
        },
        {
          "pid": "jsreapers",
          "text": [
            "Ein goldgelbes Weizenfeld mit Garben reicht bis zu einer Reihe dunkler Bäume, im Feld ruhen kleine Gestalten von Schnittern.",
            "Sargent malt das Bild 1885, in dem Jahr, ab dem er Claude Monet in Giverny besucht."
          ],
          "fact": "1885. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "jss4",
      "place": "Ölskizzen aus Ägypten",
      "when": "1890–1891",
      "map": {
        "x": 202,
        "y": 76
      },
      "mapLabel": "Ägypten",
      "intro": [
        "1891 reist Sargent nach Ägypten und malt dort eine Reihe rascher Ölskizzen von Landschaften, Menschen und Bauten.",
        "Im selben Jahr beginnt er seine grossen Wandbilder für die Boston Public Library."
      ],
      "works": [
        {
          "pid": "jsdeirbahri",
          "text": [
            "Ockergelbe Felswände leuchten in der Sonne, ihre Schatten fallen bläulich auf den Wüstenboden.",
            "Deir el-Bahari liegt am Westufer des Nils bei Luxor; Sargent malt die Ölstudie auf seiner Ägyptenreise."
          ],
          "fact": "1890–1891. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jspavement",
          "text": [
            "Ein Boden aus eingelegtem Marmor in Rot, Weiss und Grau führt auf ein dunkles Portal zu; Sargent malt ihn aus einem tiefen Blickwinkel.",
            "Es ist der Hof der 1528 erbauten Moschee des Sulayman Pascha in der Zitadelle von Kairo."
          ],
          "fact": "1891. National Gallery of Art, Washington."
        },
        {
          "pid": "jswatercarr",
          "text": [
            "Dunkel gekleidete Gestalten mit Krügen stehen am Rand eines Weges, hinter ihnen liegen grüne Felder.",
            "Die Ölstudie entsteht 1891 in Ägypten; auf der Rückseite trägt sie Sargents Stempel „JSS“."
          ],
          "fact": "1891. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "jss5",
      "place": "Aquarelle aus Spanien und Venedig",
      "when": "1903–1908",
      "map": {
        "x": 156,
        "y": 62
      },
      "mapLabel": "Spanien und Venedig",
      "intro": [
        "In den 1890er Jahren und frühen 1900er Jahren ist Sargent als Bildnismaler auf dem Höhepunkt seines Ruhms.",
        "Immer öfter malt er nun Aquarelle, meist in einer einzigen Sitzung, und lässt die Farben frei ineinanderfliessen."
      ],
      "works": [
        {
          "pid": "jsaranjuez",
          "text": [
            "Hohe Bäume werfen Schatten auf eine helle Mauer, links öffnet sich ein sonniger Platz mit kleinen Gestalten.",
            "Aranjuez südlich von Madrid ist ein spanischer Königssitz mit grossen Gärten."
          ],
          "fact": "1903. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jsgreendoor",
          "text": [
            "Eine grüne Tür in einem weissen Rundbogenportal bildet die Mitte des Blattes, unten bleiben die Stufen nur zart angedeutet.",
            "Santa Maria della Salute ist eine grosse Kirche am Canal Grande in Venedig; Sargent malt mit Aquarell, Deckfarbe und Wachskreide."
          ],
          "fact": "um 1904. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jspatio",
          "text": [
            "Unter einem schattigen Säulengang wächst vorne eine grüne Pflanze, das Licht fällt hell auf Wände und Boden.",
            "Das Aquarell zeigt, wie Sargent in späteren Jahren in einer einzigen Sitzung malt und die Farben frei ineinanderfliessen lässt."
          ],
          "fact": "1908. Cleveland Museum of Art."
        },
        {
          "pid": "jstarragona",
          "text": [
            "Eine Reihe heller Säulen steht auf einer sonnigen Terrasse, dahinter leuchtet das Grün eines Gartens.",
            "Tarragona liegt an der spanischen Mittelmeerküste; Sargent malt das Blatt mit Aquarell und Deckfarbe."
          ],
          "fact": "um 1908. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "jss6",
      "place": "Abschied vom Porträt",
      "when": "1907–1911",
      "map": {
        "x": 174,
        "y": 52
      },
      "mapLabel": "Italien, Korfu und die Alpen",
      "intro": [
        "1907 und 1908 erklärt Sargent, er schliesse „den Laden für Porträts“, um sich Landschaften, Figurenstudien und Wandbildern zu widmen.",
        "Er malt nun im Freien, oft auf Reisen mit Freunden und Verwandten."
      ],
      "works": [
        {
          "pid": "jstorlonia",
          "text": [
            "Vor einem hohen Springbrunnen sitzen ein Mann und eine Frau in Weiss mit Palette an einer Staffelei und malen im Freien.",
            "Die beiden sind die Maler Wilfrid und Jane Emmet de Glehn, Sargents Reisebegleiter; weil Regen die Arbeit unterbricht, malt er mehrere Tage an dem Bild."
          ],
          "fact": "1907. Art Institute of Chicago."
        },
        {
          "pid": "jscorfu",
          "text": [
            "Hohe dunkle Zypressen ragen in einen blassen Himmel, links schimmert das Meer, und im Gras ruhen Menschen im Schatten.",
            "Die griechische Insel Korfu liegt im Ionischen Meer; Sargent malt das Bild 1909."
          ],
          "fact": "1909. Art Institute of Chicago."
        },
        {
          "pid": "jssimplon",
          "text": [
            "Ein Bach stürzt über Felsblöcke einen Hang hinab, darüber erhebt sich der Gipfel des Hübschhorns vor blauem Himmel.",
            "Sargent verbringt 1909, 1910 und 1911 mit Freunden und Verwandten Ferien am Simplonpass in den Schweizer Alpen."
          ],
          "fact": "1911. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "jss7",
      "place": "Palmen und eine Villa in Florida",
      "when": "1917",
      "map": {
        "x": 62,
        "y": 82
      },
      "mapLabel": "Florida",
      "intro": [
        "Im Februar 1917 reist Sargent nach Ormond Beach in Florida, um John D. Rockefeller zu porträtieren, und fährt danach weiter in die Gegend von Miami zu seinem Freund Charles Deering.",
        "Dort begeistert ihn die Villa Vizcaya von James Deering, die gerade gebaut wird."
      ],
      "works": [
        {
          "pid": "jspalmettos",
          "text": [
            "Fächerförmige Palmblätter füllen das ganze Blatt, zwischen ihnen schimmern rote und violette Schatten.",
            "Sargent malt das Aquarell 1917 in Florida mit Bleistift und Wachskreide."
          ],
          "fact": "1917. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "jsvizcaya",
          "text": [
            "Eine Steinbalustrade mit einer grossen Vase trennt einen grünen Rasen vom blauen Meer, rechts steht ein Baum.",
            "Vizcaya ist die Villa im italienischen Stil, die sich James Deering bei Miami bauen lässt."
          ],
          "fact": "1917. Metropolitan Museum of Art, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
