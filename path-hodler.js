// v8.3 Ferdinand Hodler life journey, Part 1 (1853–c. 1900).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Gallery works hodler, chexbres, eiger and niesen are reserved for Part 2.
// Die Nacht (1890) is handled in station text only; no nudes.
(function () {
  var works = [
  {
    "id": "hschadau",
    "title": "Schloss Schadau mit Kirche von Scherzlingen und Blümlisalp",
    "artist": "Ferdinand Hodler",
    "year": "1871",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler - Schloss Schadau mit Kirche von Scherzlingen und Blümlisalp (1871).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hhilter",
    "title": "Chalet in Hilterfingen",
    "artist": "Ferdinand Hodler",
    "year": "1871",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Charlet in Hilterfingen - 1871.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hbergbach72",
    "title": "Bergbach im Berner Oberland",
    "artist": "Ferdinand Hodler",
    "year": "1872",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler Bergbach im Berner Oberland 1872.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hwaldin",
    "title": "Waldinneres (Le Nant de Frontenex)",
    "artist": "Ferdinand Hodler",
    "year": "um 1874",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler Waldinneres (Le Nant de Frontenex) c1874.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hstudent",
    "title": "Der Studierende (Selbstbildnis)",
    "artist": "Ferdinand Hodler",
    "year": "1874",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler Der Studierende Selbstbildnis.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hschreiner",
    "title": "Der Schreiner",
    "artist": "Ferdinand Hodler",
    "year": "1875",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Bildnis eines Unbekannten (Der Schreiner, 1875) - Ferdinand Hodler (Kunsthaus Zürich).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hinterlaken",
    "title": "Ein Morgen bei Interlaken",
    "artist": "Ferdinand Hodler",
    "year": "1875",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Ein Morgen bei Interlaken - 1875.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hleschaud",
    "title": "Bildnis Caroline Leschaud",
    "artist": "Ferdinand Hodler",
    "year": "um 1877",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Portrait of Caroline Leschaud (ca. 1877) - Ferdinand Hodler (Kunsthaus Zürich).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hself78",
    "title": "Selbstbildnis",
    "artist": "Ferdinand Hodler",
    "year": "um 1878",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler Selbstbildnis c1878.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmanzanares",
    "title": "Am Ufer des Manzanares",
    "artist": "Ferdinand Hodler",
    "year": "1878–1879",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Am Ufer des Manzanares - 1878-79.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmadridl",
    "title": "Landschaft bei Madrid",
    "artist": "Ferdinand Hodler",
    "year": "1878",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Landschaft bei Madrid - 1878.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "holiven",
    "title": "Olivenbäume in Spanien",
    "artist": "Ferdinand Hodler",
    "year": "1878",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Olivenbäume in Spanien - 1878.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hspanien",
    "title": "Spanische Landschaft",
    "artist": "Ferdinand Hodler",
    "year": "1878",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Spanische Landschaft - 1878.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "huhrmacher",
    "title": "Uhrmacherwerkstätte in Madrid",
    "artist": "Ferdinand Hodler",
    "year": "1879",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Uhrmacherwerkstätte in Madrid - 1879.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hjonction",
    "title": "Landschaft an der Jonction bei Genf",
    "artist": "Ferdinand Hodler",
    "year": "1878",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Landschaft an der Jonction bei Genf - 1878.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "harvekinder",
    "title": "Fischende Kinder am Ufer der Arve",
    "artist": "Ferdinand Hodler",
    "year": "um 1878",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler Fischende Kinder am Ufer der Arve c1878.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hpfarrer",
    "title": "Der Pfarrer",
    "artist": "Ferdinand Hodler",
    "year": "1879",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Pfarrer - 1879.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hself79",
    "title": "Selbstbildnis mit Stehkragen",
    "artist": "Ferdinand Hodler",
    "year": "1879",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Selbstbildnis mit Stehkragen - 1879.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "haarekanal",
    "title": "Der Aarekanal bei Thun",
    "artist": "Ferdinand Hodler",
    "year": "1879",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Aarekanal bei Thun - 1879.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hthun82",
    "title": "Thunersee mit Blüemlisalp und Niesen",
    "artist": "Ferdinand Hodler",
    "year": "1882",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler - Thunersee mit Blüemlisalp und Niesen.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "handacht",
    "title": "Die Andacht",
    "artist": "Ferdinand Hodler",
    "year": "1882",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die Andacht - 1882.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hschuster82",
    "title": "Der Schuster am Fenster",
    "artist": "Ferdinand Hodler",
    "year": "1882",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Schuster am Fenster - 1882.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hnetz",
    "title": "Der Netzflicker",
    "artist": "Ferdinand Hodler",
    "year": "um 1883",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Netzflicker - ca1883.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hstock83",
    "title": "Stockhornlandschaft",
    "artist": "Ferdinand Hodler",
    "year": "1883",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Nature alpestre (Stockhornlandschaft) - 1883.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hduchosal",
    "title": "Bildnis Louise-Delphine Duchosal",
    "artist": "Ferdinand Hodler",
    "year": "1885",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Hodler - Bildnis Louise-Delphine Duchosal - 1885.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hbuchen",
    "title": "Der Buchenwald",
    "artist": "Ferdinand Hodler",
    "year": "1885",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Buchenwald - 1885.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hnaehkamin",
    "title": "Näherin am Kamin",
    "artist": "Ferdinand Hodler",
    "year": "um 1885",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Näherin am Kamin (ca. 1885) - Ferdinand Hodler (Kunsthaus Zürich).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hschuster87",
    "title": "Der Schuhmacher",
    "artist": "Ferdinand Hodler",
    "year": "1887",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Der Schuhmacher (1887) - Ferdinand Hodler.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hweigle",
    "title": "Bildnis Hélène Weiglé",
    "artist": "Ferdinand Hodler",
    "year": "1888",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «1888 Hodler Bildnis Hélène Weiglé anagoria.JPG», gemeinfrei (Public Domain)"
  },
  {
    "id": "haugustine",
    "title": "Bildnis Augustine Dupin",
    "artist": "Ferdinand Hodler",
    "year": "um 1888",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Painting of Augustine Dupin by Ferdinand Hodler ca.1888.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hkastanien",
    "title": "Die Kastanienbäume",
    "artist": "Ferdinand Hodler",
    "year": "1889",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die Kastanienbäume - 1889.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hkindtisch",
    "title": "Kind am Tisch",
    "artist": "Ferdinand Hodler",
    "year": "1889",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Kind am Tisch - 1889.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hjungf",
    "title": "Bildnis einer jungen Frau",
    "artist": "Ferdinand Hodler",
    "year": "um 1889",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Bildnis einer jungen Frau - ca1889.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "honex",
    "title": "Die Strasse von Onex",
    "artist": "Ferdinand Hodler",
    "year": "um 1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler Strasse von Onex c1890.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hevordes",
    "title": "Die Strasse nach Evordes",
    "artist": "Ferdinand Hodler",
    "year": "um 1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die Strasse nach Evordes - ca1890.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "haue",
    "title": "Die goldene Aue",
    "artist": "Ferdinand Hodler",
    "year": "1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die goldene Aue - 1890.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hsaleve90",
    "title": "Am Fuss des Salève",
    "artist": "Ferdinand Hodler",
    "year": "1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Am Fuss des Salève - 1890.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hfenster",
    "title": "Mädchen am Fenster",
    "artist": "Ferdinand Hodler",
    "year": "1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Mädchen am Fenster - 1890.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hself91",
    "title": "Pariser Selbstbildnis",
    "artist": "Ferdinand Hodler",
    "year": "1891",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Pariser Selbstbildnis - 1091.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hsaleve91",
    "title": "Der Salève im Herbst",
    "artist": "Ferdinand Hodler",
    "year": "um 1891",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler Der Salève im Herbst c1891.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "harbeitslos",
    "title": "Arbeitslos",
    "artist": "Ferdinand Hodler",
    "year": "1891",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Arbeitslos - 1891.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hlebensmued",
    "title": "Die Lebensmüden",
    "artist": "Ferdinand Hodler",
    "year": "1892",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die Lebensmüden - 1892.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmadame",
    "title": "Bildnis Madame de R.",
    "artist": "Ferdinand Hodler",
    "year": "1893",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler - Portrait of Madame de R. - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hberthe",
    "title": "Bildnis Berthe Jacques",
    "artist": "Ferdinand Hodler",
    "year": "1894",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Bildnis Berthe Jacques - 1894.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hhellebar",
    "title": "Der Hellebardier",
    "artist": "Ferdinand Hodler",
    "year": "1895",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Ferdinand Hodler - The Halberdier - 1998.198.FA - Dallas Museum of Art.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hbiberist",
    "title": "Kastanienallee bei Biberist",
    "artist": "Ferdinand Hodler",
    "year": "1898",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler - Kastanienallee bei Biberist, 1898.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hbluete99",
    "title": "Blühender Baum",
    "artist": "Ferdinand Hodler",
    "year": "1899",
    "museum": "Musée d’art et d’histoire, Freiburg",
    "source": "Wikimedia Commons: «Blühender Baum (1899) - Ferdinand Hodler (MAHF).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hself00",
    "title": "Selbstbildnis",
    "artist": "Ferdinand Hodler",
    "year": "1900",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler Selbstbildnis 1900.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hergriffen",
    "title": "Ergriffenheit",
    "artist": "Ferdinand Hodler",
    "year": "1900",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Ferdinand Hodler - Ergriffenheit - 1942 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "habendruhe",
    "title": "Abendruhe",
    "artist": "Ferdinand Hodler",
    "year": "um 1901",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Abendruhe (ca. 1901) - Ferdiand Hodler (Kunsthaus Zürich).jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "hodler",
  "name": "Ferdinand Hodler",
  "title": "Ferdinand Hodlers Lebensweg",
  "life": "1853–1918",
  "part": "Teil 1 · Bis um 1900",
  "subtitle": "Von Bern nach Genf, nach Madrid und zum Durchbruch",
  "cover": "hevordes",
  "intro": "Reise mit Ferdinand Hodler durch die erste Hälfte seines Weges: von der Kindheit in Bern und dem frühen Verlust der Familie über die Lehre bei Ferdinand Sommer in Thun, die Ausbildung bei Barthélemy Menn in Genf, die Reise nach Madrid, den Realismus der 1880er Jahre und den symbolistischen Durchbruch um «Die Nacht» – die wir nur in der Stationsgeschichte erwähnen – bis zur Anerkennung um 1900. Kurze Stationen und Bilder zum Ausmalen. Dieser erste Teil reicht bis um 1900.",
  "ending": [
    "1900 erhält Hodler auf der Weltausstellung in Paris eine Goldmedaille, unter anderem für «Die Nacht», «Der Tag» und «Eurhythmie». Er schliesst sich den Sezessionen in Wien und Berlin an.",
    "Der Weg geht weiter. Es folgen die parallelistischen Landschaften vom Thuner- und vom Genfersee, vom Eiger, Mönch und der Jungfrau, die Wandbilder in Jena und Hannover, die Jahre mit Valentine Godé-Darel und Hodlers Tod in Genf am 19. Mai 1918. Davon erzählt der nächste Teil."
  ],
  "epilogue": "1900 erhält Hodler in Paris eine Goldmedaille und tritt den Sezessionen in Wien und Berlin bei. Die grossen See- und Bergbilder, die Wandmalereien, Valentine Godé-Darel und der Tod in Genf am 19. Mai 1918 gehören zum nächsten Teil.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M6,62 C16,42 42,40 62,54 C74,64 66,90 42,100 C22,108 4,90 6,62 Z",
      "M102,72 C122,52 164,48 196,60 C218,70 226,94 202,114 C172,132 128,130 108,110 C94,96 92,82 102,72 Z"
    ]
  },
  "stations": [
    {
      "id": "hodlerbern",
      "place": "Bern und Thun · Kindheit, Verlust, Lehre",
      "when": "1853–1872",
      "map": {
        "x": 158,
        "y": 86
      },
      "mapLabel": "Bern",
      "intro": [
        "Ferdinand Hodler wird am 14. März 1853 in Bern geboren, als ältestes von sechs Kindern des Schreiners Johannes Hodler und der Margareta Neukomm. Die Familie ist arm; 1860 stirbt der Vater an Tuberkulose. 1861 heiratet die Mutter den Dekorationsmaler Gottlieb Schüpbach.",
        "1867 stirbt auch die Mutter an Tuberkulose. 1868 beginnt Hodler in Thun eine Lehre beim Vedutenmaler Ferdinand Sommer. Er lernt, Ansichten des Oberlands nach Vorlagen zu malen, die an Touristen verkauft werden. 1871 und 1872 entstehen eigene Bilder aus der Gegend um den Thunersee."
      ],
      "works": [
        {
          "pid": "hschadau",
          "text": [
            "Schloss Schadau steht am Thunersee, daneben die Kirche von Scherzlingen, im Hintergrund die Blümlisalp.",
            "Das Bild stammt von 1871, aus der Zeit nach der Lehre beim Vedutenmaler Ferdinand Sommer in Thun. Hodler hat dort gelernt, Ansichten des Oberlands festzuhalten."
          ],
          "fact": "1871. Sammlung nicht ermittelt."
        },
        {
          "pid": "hhilter",
          "text": [
            "Ein Holzhaus steht unter Bäumen, typisch für die Dörfer am Thunersee.",
            "Hilterfingen liegt unweit von Thun. Solche Veduten verkaufte Sommer an Touristen; Hodler malt sie nach der Lehre weiter, nun unter eigenem Namen."
          ],
          "fact": "1871. Sammlung nicht ermittelt."
        },
        {
          "pid": "hbergbach72",
          "text": [
            "Ein Bach fliesst zwischen Felsen und Tannen talwärts, der Blick folgt dem Wasser.",
            "Das Bild ist 1872 datiert, im Jahr von Hodlers Übersiedlung nach Genf. Die Bergbäche des Oberlands bleiben ein frühes Motiv."
          ],
          "fact": "1872. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "hodlergenf",
      "place": "Genf · Barthélemy Menn und der Prix Calame",
      "when": "1872–1877",
      "map": {
        "x": 118,
        "y": 102
      },
      "mapLabel": "Genf",
      "intro": [
        "1872 lässt sich Hodler in Genf nieder und kopiert im Musée Rath Werke von Alexandre Calame und François Diday. Barthélemy Menn, ein Schüler von Ingres und Lehrer an der École de dessin, nimmt ihn als Freischüler auf. Die Ausbildung dauert bis 1877.",
        "Menn löst ihn vom bloss malerischen Souvenir und stützt die Landschaft auf Zeichnung, Mass und Beobachtung. 1874 gewinnt Hodler mit dem «Waldinneren» (Le Nant de Frontenex) den ersten Preis im Concours Calame."
      ],
      "works": [
        {
          "pid": "hwaldin",
          "text": [
            "Zwischen Stämmen fällt Licht auf den Waldboden; ein Bach, der Nant de Frontenex bei Genf, durchzieht das Bild.",
            "Mit diesem Waldinneren gewinnt Hodler 1874 den ersten Preis im Concours Calame. Es ist sein erster öffentlich anerkannter Erfolg in Genf."
          ],
          "fact": "um 1874. Sammlung nicht ermittelt."
        },
        {
          "pid": "hstudent",
          "text": [
            "Ein junger Mann in dunklem Rock sitzt oder steht mit einem Buch, die eine Hand erhoben, als denke er nach.",
            "Hodler ist einundzwanzig. In Genf bildet ihn Barthélemy Menn aus; neben der Lehre sucht er selbst nach Wissen und Haltung."
          ],
          "fact": "1874. Sammlung nicht ermittelt."
        },
        {
          "pid": "hschreiner",
          "text": [
            "Ein junger Schreiner mit Mütze und Weste hält ein Werkzeug, der Blick fest und ruhig. Oben steht das Datum «juin 1875».",
            "Hodlers Vater Johannes war Schreiner und starb 1860. Das Bildnis hängt im Kunsthaus Zürich."
          ],
          "fact": "1875. Kunsthaus Zürich."
        },
        {
          "pid": "hinterlaken",
          "text": [
            "Ein stilles Gewässer am Morgen, Bäume am Ufer, im Dunst die Berge des Oberlands.",
            "Auch nach dem Wechsel nach Genf kehrt Hodler zu Motiven aus der Thuner Gegend zurück. Das Bild stammt von 1875, dem Jahr nach dem Prix Calame."
          ],
          "fact": "1875. Sammlung nicht ermittelt."
        },
        {
          "pid": "hleschaud",
          "text": [
            "Eine junge Frau in dunklem Kleid mit weissem Kragen steht ruhig da, die Hände gesenkt.",
            "Das Bildnis entsteht um 1877, gegen Ende der Ausbildung bei Menn. Es hängt im Kunsthaus Zürich."
          ],
          "fact": "um 1877. Kunsthaus Zürich."
        }
      ]
    },
    {
      "id": "hodlermadrid",
      "place": "Madrid · Der Prado und das spanische Licht",
      "when": "1878–1879",
      "map": {
        "x": 44,
        "y": 138
      },
      "mapLabel": "Madrid",
      "intro": [
        "1878 reist Hodler nach Madrid und studiert im Prado die alten Meister. Der Aufenthalt dauert bis 1879. Neben den Kopiern und Studien im Museum malt er die Landschaft vor der Stadt: den Manzanares, Olivenbäume, helles, trockenes Land.",
        "Die Palette wird für kurze Zeit lichter. Es entstehen auch Innenräume wie die Uhrmacherwerkstatt. Danach kehrt er nach Genf zurück."
      ],
      "works": [
        {
          "pid": "hself78",
          "text": [
            "Hodler zeigt sich selbst: dunkles Haar, ein ernster Blick, der Rock fest zugeknöpft.",
            "Um 1878 reist er nach Madrid. Das Bildnis gehört in diese Jahre, in denen er sich als Maler festlegt."
          ],
          "fact": "um 1878. Sammlung nicht ermittelt."
        },
        {
          "pid": "hmanzanares",
          "text": [
            "Am Flussufer bei Madrid stehen kahle Bäume, der Himmel ist weit und hell.",
            "1878 reist Hodler nach Madrid und studiert im Prado. Neben den Meistern des Museums malt er auch die Landschaft vor der Stadt."
          ],
          "fact": "1878–1879. Sammlung nicht ermittelt."
        },
        {
          "pid": "hmadridl",
          "text": [
            "Ein Weg führt durch dürres, lichterfülltes Gelände; Bäume werfen schmale Schatten.",
            "In Spanien wird Hodlers Palette für kurze Zeit heller. Das Licht des Pleinair prägt die Bilder dieses Aufenthalts."
          ],
          "fact": "1878. Sammlung nicht ermittelt."
        },
        {
          "pid": "holiven",
          "text": [
            "Olivenbäume stehen in der Sonne, ihr Silbergrün gegen den hellen Boden.",
            "Hodler achtet auf die Pflanzen, die er nicht aus der Schweiz kennt. Die Reise nach Madrid erweitert sein Motiv."
          ],
          "fact": "1878. Sammlung nicht ermittelt."
        },
        {
          "pid": "hspanien",
          "text": [
            "Helle Erde, zerstreute Bäume, ein weiter Himmel: eine Landschaft ohne Alpenkulisse.",
            "Das Bild stammt von 1878. Nach Monaten in Madrid kehrt Hodler nach Genf zurück, mit neuen Eindrücken von Licht und Farbe."
          ],
          "fact": "1878. Sammlung nicht ermittelt."
        },
        {
          "pid": "huhrmacher",
          "text": [
            "In einer hellen Werkstatt sitzen Uhrmacher an der Arbeit, Werkzeuge und Gehäuse liegen auf den Tischen.",
            "Neben Landschaften hält Hodler in Madrid auch das Handwerk fest. Das Bild ist 1879 datiert."
          ],
          "fact": "1879. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "hodlerreal",
      "place": "Genf und Thun · Realismus am Wasser",
      "when": "1878–1880",
      "map": {
        "x": 116,
        "y": 98
      },
      "mapLabel": "Jonction",
      "intro": [
        "Vor, während und nach der Spanienreise bleibt Genf Hodlers Ort. An der Jonction, wo Rhone und Arve zusammenfliessen, und an der Arve malt er Ufer, Bäume und Kinder.",
        "Zugleich kehrt er an die Aare bei Thun zurück. Bildnisse wie der Pfarrer und das Selbstbildnis mit Stehkragen zeigen, wie fest sein Realismus in diesen Jahren sitzt."
      ],
      "works": [
        {
          "pid": "hjonction",
          "text": [
            "Bei der Jonction fliessen Rhone und Arve zusammen. Bäume stehen am Ufer, das Wasser teilt sich in zwei Farben.",
            "Vor und nach Madrid malt Hodler immer wieder diese Stelle am Rand von Genf: nah, beobachtend, ohne Pathos."
          ],
          "fact": "1878. Sammlung nicht ermittelt."
        },
        {
          "pid": "harvekinder",
          "text": [
            "Kinder sitzen und stehen am Flussufer und fischen; hinter ihnen liegen Wiese und Bäume.",
            "Die Arve fliesst durch Genf. Hodler malt das Alltagsleben am Wasser, in denselben Jahren wie die spanischen Landschaften."
          ],
          "fact": "um 1878. Sammlung nicht ermittelt."
        },
        {
          "pid": "hpfarrer",
          "text": [
            "Ein älterer Geistlicher in dunklem Gewand steht ruhig da, ein Buch in der Hand, das Haar grau.",
            "Das Bildnis ist 1879 datiert. In Genf lebt Hodler unter kleinbürgerlichen Auftraggebern und hält ihre Haltung fest."
          ],
          "fact": "1879. Sammlung nicht ermittelt."
        },
        {
          "pid": "hself79",
          "text": [
            "Hodler im dunklen Rock und mit hohem weissem Kragen, den Blick klar auf uns gerichtet.",
            "1879 kehrt er aus Madrid zurück. Das Bildnis zeigt einen jungen Maler, der sich seiner Sache sicher ist."
          ],
          "fact": "1879. Sammlung nicht ermittelt."
        },
        {
          "pid": "haarekanal",
          "text": [
            "Der Kanal zieht sich ruhig durch das Gelände, Bäume säumen das Ufer, der Himmel ist weit.",
            "Auch nach Genf bleibt die Gegend um Thun ein Motiv. Das Bild stammt von 1879."
          ],
          "fact": "1879. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "hodlerhandwerk",
      "place": "Genf · Handwerk, Andacht, Wald",
      "when": "1881–1885",
      "map": {
        "x": 120,
        "y": 96
      },
      "mapLabel": "1880er",
      "intro": [
        "1881 mietet Hodler ein Atelier in der Grand-Rue 35 in Genf. Er arbeitet am Bourbaki-Panorama von Edouard Castres in Luzern mit. 1883 gewinnt er erneut den Concours Calame, für eine Alpenlandschaft mit dem Stockhorn.",
        "Er malt Handwerker, Andacht und den Thunersee. 1885 entsteht der «Buchenwald»: Stämme in wiederholter Ordnung. Später nennt Hodler dieses Prinzip Parallelismus. 1884 begegnet er Augustine Dupin."
      ],
      "works": [
        {
          "pid": "hthun82",
          "text": [
            "Der See liegt still, darüber erheben sich Blüemlisalp und Niesen in klaren Linien.",
            "Hodler malt den Thunersee schon in den frühen 1880er Jahren, lange vor den später berühmten, streng gebauten Fassungen."
          ],
          "fact": "1882. Sammlung nicht ermittelt."
        },
        {
          "pid": "handacht",
          "text": [
            "Mehrere Menschen stehen und sitzen dicht beieinander, die Köpfe gesenkt, als bete oder lausche die Gruppe.",
            "Das Bild von 1882 zeigt keine Kirche, sondern eine Haltung. Andacht und Ernst werden in diesen Jahren zu einem eigenen Thema."
          ],
          "fact": "1882. Sammlung nicht ermittelt."
        },
        {
          "pid": "hschuster82",
          "text": [
            "Ein Schuster sitzt am Fenster und arbeitet; das Licht fällt von der Seite auf Tisch und Hände.",
            "Hodler malt Handwerker mit derselben Aufmerksamkeit wie Landschaften. Das kleine Bild ist 1882 datiert."
          ],
          "fact": "1882. Sammlung nicht ermittelt."
        },
        {
          "pid": "hnetz",
          "text": [
            "Ein Mann sitzt im Freien und flickt ein Netz, den Rücken leicht gebeugt, ganz bei der Arbeit.",
            "Um 1883 entsteht dieses Bild eines einfachen, konzentrierten Tuns. Hodler bleibt dem Realismus der Menn-Jahre treu."
          ],
          "fact": "um 1883. Sammlung nicht ermittelt."
        },
        {
          "pid": "hstock83",
          "text": [
            "Die Kette des Stockhorns liegt in feinen Linien über dem Blatt, fast ohne Vordergrund.",
            "1883 gewinnt Hodler erneut den Concours Calame, diesmal für eine Alpenlandschaft mit dem Stockhorn. Die Berge über dem Thunersee beschäftigen ihn sein Leben lang."
          ],
          "fact": "1883. Sammlung nicht ermittelt."
        },
        {
          "pid": "hduchosal",
          "text": [
            "Ein Mädchen in einem blauen Kleid sitzt auf einem Stuhl und hält eine Narzisse in der Hand.",
            "Das Bildnis von 1885 hängt im Kunsthaus Zürich. Hodler malt in diesen Jahren viele ruhige Bildnisse junger Menschen in Genf."
          ],
          "fact": "1885. Kunsthaus Zürich."
        },
        {
          "pid": "hbuchen",
          "text": [
            "Buchenstämme stehen in gleichmässigen Reihen, das Licht fällt in Streifen zwischen sie.",
            "1885 entsteht dieser Wald: Wiederholung und Ordnung werden sichtbar. Später nennt Hodler dieses Prinzip Parallelismus."
          ],
          "fact": "1885. Sammlung nicht ermittelt."
        },
        {
          "pid": "hnaehkamin",
          "text": [
            "Eine Frau sitzt am Kamin und näht. Das Zimmer ist schlicht, das Licht kommt von der Seite.",
            "Das Bild entsteht um 1885 und hängt im Kunsthaus Zürich. Alltag und Handwerk bleiben Hodlers Boden, auch wenn sich der Stil klärt."
          ],
          "fact": "um 1885. Kunsthaus Zürich."
        }
      ]
    },
    {
      "id": "hodlerfamilie",
      "place": "Genf und Bern · Familie, Ausstellung, Heirat",
      "when": "1887–1889",
      "map": {
        "x": 150,
        "y": 88
      },
      "mapLabel": "1887",
      "intro": [
        "1887 zeigt das Kunstmuseum Bern Hodlers erste Einzelausstellung. Im Sommer lernt er Bertha Stucki kennen; im Oktober kommt Hector zur Welt, der Sohn von Hodler und Augustine Dupin. 1889 heiratet er Bertha Stucki in La Chaux-de-Fonds; die Ehe wird 1891 geschieden.",
        "In denselben Jahren entstehen Bildnisse – Augustine, Hélène Weiglé, ein Kind am Tisch – und die Kastanienbäume, in denen sich die Form bereits klärt."
      ],
      "works": [
        {
          "pid": "hschuster87",
          "text": [
            "Ein Schuhmacher sitzt in seiner Werkstatt, umgeben von Leisten, Werkzeugen und Leder, ganz über die Arbeit gebeugt.",
            "Das Bild ist 1887 datiert. Im selben Jahr zeigt das Kunstmuseum Bern Hodlers erste Einzelausstellung."
          ],
          "fact": "1887. Sammlung nicht ermittelt."
        },
        {
          "pid": "hweigle",
          "text": [
            "Eine junge Frau in dunklem Kleid blickt ruhig aus dem Bild, die Hände im Schoss, eine Blume in den Fingern.",
            "Das Bildnis stammt von 1888. Hodler lebt in Genf und malt Auftraggeberinnen und Bekannte mit klarer, festgehaltener Form."
          ],
          "fact": "1888. Sammlung nicht ermittelt."
        },
        {
          "pid": "haugustine",
          "text": [
            "Augustine Dupin blickt uns fest an, in einem dunklen Kleid, das Haar straff nach hinten genommen.",
            "Hodler begegnet ihr 1884. Im Oktober 1887 kommt ihr gemeinsamer Sohn Hector zur Welt. Augustine bleibt lange sein Modell und seine Gefährtin."
          ],
          "fact": "um 1888. Sammlung nicht ermittelt."
        },
        {
          "pid": "hkastanien",
          "text": [
            "Zwei hohe Kastanien stehen vor einem hellen Himmel, die Stämme klar, die Kronen weit.",
            "Das Bild ist 1889 datiert. Einzelne Bäume werden für Hodler zu einem Hauptthema: fest, wiederholt, fast wie Figuren."
          ],
          "fact": "1889. Sammlung nicht ermittelt."
        },
        {
          "pid": "hkindtisch",
          "text": [
            "Ein kleines Kind in einem roten Kleid sitzt am Tisch vor einer Tasse und greift danach.",
            "Das Bild stammt von 1889, zwei Jahre nach der Geburt von Hector. Hodler hält den Alltag eines Kindes ohne Sentiment fest."
          ],
          "fact": "1889. Sammlung nicht ermittelt."
        },
        {
          "pid": "hjungf",
          "text": [
            "Eine junge Frau in dunklem Kleid sitzt im Dreiviertelprofil, der Blick ruhig, der Hintergrund schlicht.",
            "Das Bildnis entsteht um 1889, im Jahr von Hodlers Heirat mit Bertha Stucki in La Chaux-de-Fonds. Die Ehe wird 1891 geschieden."
          ],
          "fact": "um 1889. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "hodler1890",
      "place": "Genf und der Salève · Wege und «Die Nacht»",
      "when": "1890",
      "map": {
        "x": 118,
        "y": 104
      },
      "mapLabel": "1890",
      "intro": [
        "Um 1890 malt Hodler gerade, stille Wege bei Onex und Evordes und die Hänge am Salève. Die Formen werden knapper, die Wiederholung deutlicher.",
        "Im Winter 1889 bis Dezember 1890 entsteht sein grosses Bild «Die Nacht». Wir zeigen es hier nicht: es enthält nackte Figuren. 1891 wird es aus sittlichen Gründen von der Ausstellung im Musée Rath in Genf ausgeschlossen. Hodler stellt es auf eigene Kosten aus, danach erfolgreich in Paris am Champ-de-Mars, wo er eine Silbermedaille erhält."
      ],
      "works": [
        {
          "pid": "honex",
          "text": [
            "Eine gerade Strasse führt zwischen Bäumen in die Tiefe, der Himmel ist hell, der Weg leer und still.",
            "Onex liegt westlich von Genf. Um 1890 klärt Hodler solche Wege: wenige Formen, klare Richtung, grosse Ruhe."
          ],
          "fact": "um 1890. Sammlung nicht ermittelt."
        },
        {
          "pid": "hevordes",
          "text": [
            "Ein sandfarbener Weg zieht sich geradeaus zwischen Wiese und Bäumen, der Himmel hoch und hell.",
            "Die Strasse nach Evordes gehört zu Hodlers bekanntesten frühen Landschaften. Die Wiederholung der Bäume am Weg erinnert schon an den Parallelismus."
          ],
          "fact": "um 1890. Sammlung nicht ermittelt."
        },
        {
          "pid": "haue",
          "text": [
            "Eine weite, sonnige Wiese öffnet sich unter Bäumen, das Licht liegt warm auf dem Gras.",
            "Das Bild ist 1890 datiert. In demselben Winter arbeitet Hodler an seinem grossen symbolistischen Bild «Die Nacht» – das wir hier nicht zeigen, weil es nackte Figuren enthält."
          ],
          "fact": "1890. Sammlung nicht ermittelt."
        },
        {
          "pid": "hsaleve90",
          "text": [
            "Wiesen und Bäume staffeln sich zum Salève hin, dem Berg südlich von Genf, unter einem hellen Himmel.",
            "Die Gegend um den Salève sucht Hodler in diesen Jahren oft auf. Licht und Farbe auf den Hängen werden ihm zum Studienobjekt."
          ],
          "fact": "1890. Sammlung nicht ermittelt."
        },
        {
          "pid": "hfenster",
          "text": [
            "Ein Mädchen in einem hellen Kleid lehnt sich über die Fensterbank, das Haar fällt frei, der Blick geht nach draussen.",
            "Das Bild ist 1890 datiert. Innenraum und Landschaft berühren sich hier in einer ruhigen, aufmerksamen Haltung."
          ],
          "fact": "1890. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "hodlerdurchbruch",
      "place": "Genf und Paris · Durchbruch und Symbolismus",
      "when": "1891–1894",
      "map": {
        "x": 90,
        "y": 78
      },
      "mapLabel": "1891",
      "intro": [
        "1891 wird «Die Nacht» in Paris beachtet; Puvis de Chavannes präsidiert die Jury. Hodler malt ein Selbstbildnis in Paris und bleibt bei Landschaften am Salève und an der Rhone. Daneben entstehen realistische Figuren wie «Arbeitslos».",
        "1892 zeigt er «Die enttäuschten Seelen» im Salon de la Rose-Croix. «Die Lebensmüden» gehören in denselben Kreis: alte Männer in ruhiger, wiederholter Haltung. 1894 begegnet er Berthe Jacques, die er 1898 heiraten wird."
      ],
      "works": [
        {
          "pid": "hself91",
          "text": [
            "Hodler zeigt sich mit vollem Bart, den Blick fest, fast prüfend, vor einem hellen Grund.",
            "1891 stellt er «Die Nacht» in Paris am Champ-de-Mars aus und erhält eine Silbermedaille. Das Bildnis gehört in dieses Durchbruchsjahr."
          ],
          "fact": "1891. Sammlung nicht ermittelt."
        },
        {
          "pid": "hsaleve91",
          "text": [
            "Der Salève liegt in herbstlichen Farben da, der Hang in Gelb und Violett, der Himmel klar.",
            "Um 1891 wird die Palette kräftiger. Vorder- und Hintergrund erscheinen gleichwertig; die Luftperspektive tritt zurück."
          ],
          "fact": "um 1891. Sammlung nicht ermittelt."
        },
        {
          "pid": "harbeitslos",
          "text": [
            "Ein Mann sitzt im Freien auf dem Boden, den Blick gesenkt, die Hände im Schoss, die Kleider abgetragen.",
            "Das Bild von 1891 gehört zu Hodlers realistischen Figuren dieser Jahre: kein Genrewitz, sondern eine ruhige, schwere Gegenwart."
          ],
          "fact": "1891. Sammlung nicht ermittelt."
        },
        {
          "pid": "hlebensmued",
          "text": [
            "Fünf ältere Männer sitzen nebeneinander, in lange Gewänder gehüllt, die Köpfe gesenkt, die Hände im Schoss.",
            "Nach «Die Nacht» folgen grosse symbolistische Gruppen. 1892 zeigt Hodler «Die enttäuschten Seelen» im Pariser Salon de la Rose-Croix; «Die Lebensmüden» entstehen im selben Umkreis."
          ],
          "fact": "1892. Sammlung nicht ermittelt."
        },
        {
          "pid": "hmadame",
          "text": [
            "Eine junge Frau blickt uns frontal an, das dunkle Haar gelöst, das Kleid hell, der Ausdruck wach.",
            "Das Bildnis stammt von 1893. Hodlers Porträts werden in diesen Jahren grösser und klarer in der Form."
          ],
          "fact": "1893. Sammlung nicht ermittelt."
        },
        {
          "pid": "hberthe",
          "text": [
            "Berthe Jacques im Profil, das dunkle Haar hochgesteckt, der Nacken frei, der Blick nach rechts gewandt.",
            "Hodler begegnet ihr 1894. 1898 heiraten sie. Sie bleibt seine Frau bis zu seinem Tod und sitzt ihm oft Modell."
          ],
          "fact": "1894. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "hodler1900",
      "place": "Genf · Anerkennung um 1900",
      "when": "1895–1901",
      "map": {
        "x": 118,
        "y": 100
      },
      "mapLabel": "1900",
      "intro": [
        "1895 malt Hodler den «Hellebardier». 1896 schmücken seine Figuren den Kunstpavillon der Schweizerischen Landesausstellung in Genf. 1897 gewinnt er den Wettbewerb für die Marignano-Wandbilder im Landesmuseum Zürich; das Projekt löst einen heftigen Streit aus. In Freiburg hält er einen Vortrag zur Aufgabe des Künstlers.",
        "1900 erhält er auf der Weltausstellung in Paris eine Goldmedaille und schliesst sich den Sezessionen in Wien und Berlin an. Blühende Bäume, Alleen und stille Figuren in der Wiese schliessen diesen ersten Teil."
      ],
      "works": [
        {
          "pid": "hhellebar",
          "text": [
            "Ein Krieger in roter Tracht steht aufrecht, die Hellebarde in der Hand, vor einem hellen Grund.",
            "Das Bild von 1895 hängt im Dallas Museum of Art. In diesen Jahren wendet sich Hodler auch der monumentalen Historienfigur zu; 1897 gewinnt er den Wettbewerb für die Wandbilder zum Rückzug von Marignano im Landesmuseum Zürich."
          ],
          "fact": "1895. Dallas Museum of Art."
        },
        {
          "pid": "hbiberist",
          "text": [
            "Eine Allee aus Kastanien führt in weichen Herbstfarben in die Tiefe, der Himmel ist hell.",
            "Biberist liegt im Kanton Solothurn. Das Bild von 1898 zeigt, wie Hodler Alleen als ruhige, wiederholte Form baut."
          ],
          "fact": "1898. Sammlung nicht ermittelt."
        },
        {
          "pid": "hbluete99",
          "text": [
            "Ein Baum steht in voller Blüte vor blauem Himmel, darunter eine grüne Wiese.",
            "Das Bild von 1899 gehört dem Musée d’art et d’histoire in Freiburg. Blühende Bäume werden um die Jahrhundertwende zu einem eigenen, stillen Motiv."
          ],
          "fact": "1899. Musée d’art et d’histoire, Freiburg."
        },
        {
          "pid": "hself00",
          "text": [
            "Hodler mit kurzem Bart und festem Blick, der Kopf nah am Bildrand, fast ohne Umfeld.",
            "1900 erhält er auf der Weltausstellung in Paris eine Goldmedaille. Das Bildnis hält den Maler fest, der nun auch international bekannt wird."
          ],
          "fact": "1900. Sammlung nicht ermittelt."
        },
        {
          "pid": "hergriffen",
          "text": [
            "Eine junge Frau in einem langen blauen Kleid steht in einer Blumenwiese und hält die Hände vor die Brust, den Blick gesenkt.",
            "Das Bild von 1900 hängt im Belvedere in Wien. Haltung und Landschaft gehören zusammen: eine stille, festgehaltene Bewegung."
          ],
          "fact": "1900. Österreichische Galerie Belvedere, Wien."
        },
        {
          "pid": "habendruhe",
          "text": [
            "Ein Mädchen in einem hellen Kleid steht barfuss in einer Blumenwiese, die Hände zum Gebet erhoben, der Blick zur Seite.",
            "Das Bild entsteht um 1901 und hängt im Kunsthaus Zürich. Es schliesst diesen ersten Teil: eine ruhige Figur in der Landschaft, bevor im nächsten Teil die grossen See- und Bergbilder folgen."
          ],
          "fact": "um 1901. Kunsthaus Zürich."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
