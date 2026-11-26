// v10.43 Édouard Manet life journey (1832–1883). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "mnhat",
    "title": "Der Mann mit dem hohen Hut",
    "artist": "Édouard Manet",
    "year": "1858–1859",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1943.3.5753: https://www.nga.gov/collection/art-object-page.8678.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnsinger",
    "title": "Der spanische Sänger",
    "artist": "Édouard Manet",
    "year": "1860",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 49.58.2: https://www.metmuseum.org/art/collection/search/436944, CC0 (gemeinfrei)"
  },
  {
    "id": "mnoldmus",
    "title": "Der alte Musiker",
    "artist": "Édouard Manet",
    "year": "1862",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.162: https://www.nga.gov/collection/art-object-page.46637.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnfishing",
    "title": "Beim Fischen",
    "artist": "Édouard Manet",
    "year": "um 1862–1863",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 57.10: https://www.metmuseum.org/art/collection/search/436951, CC0 (gemeinfrei)"
  },
  {
    "id": "mnsword",
    "title": "Knabe mit Schwert",
    "artist": "Édouard Manet",
    "year": "1861",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 89.21.2: https://www.metmuseum.org/art/collection/search/436948, CC0 (gemeinfrei)"
  },
  {
    "id": "mnespada",
    "title": "Mademoiselle V. im Kostüm eines Espada",
    "artist": "Édouard Manet",
    "year": "1862",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.53: https://www.metmuseum.org/art/collection/search/436945, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmajo",
    "title": "Junger Mann im Kostüm eines Majo",
    "artist": "Édouard Manet",
    "year": "1863",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.54: https://www.metmuseum.org/art/collection/search/438819, CC0 (gemeinfrei)"
  },
  {
    "id": "mnoysters",
    "title": "Austern",
    "artist": "Édouard Manet",
    "year": "1862",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1962.3.1: https://www.nga.gov/collection/art-object-page.46427.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnfish",
    "title": "Fische (Stillleben)",
    "artist": "Édouard Manet",
    "year": "1864",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1942.311: https://www.artic.edu/artworks/44892, CC0 (gemeinfrei)"
  },
  {
    "id": "mnpeonies",
    "title": "Pfingstrosen",
    "artist": "Édouard Manet",
    "year": "1864–1865",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1976.201.16: https://www.metmuseum.org/art/collection/search/436961, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmelonpe",
    "title": "Stillleben mit Melone und Pfirsichen",
    "artist": "Édouard Manet",
    "year": "um 1866",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1960.1.1: https://www.nga.gov/collection/art-object-page.46004.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnkearsarge",
    "title": "Die «Kearsarge» vor Boulogne",
    "artist": "Édouard Manet",
    "year": "1864",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1999.442: https://www.metmuseum.org/art/collection/search/438144, CC0 (gemeinfrei)"
  },
  {
    "id": "mnseaview",
    "title": "Blick aufs Meer bei ruhigem Wetter",
    "artist": "Édouard Manet",
    "year": "1864",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.425: https://www.artic.edu/artworks/81535, CC0 (gemeinfrei)"
  },
  {
    "id": "mnbeggar",
    "title": "Bettler mit Mantel (Philosoph)",
    "artist": "Édouard Manet",
    "year": "1865–1867",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1910.304: https://www.artic.edu/artworks/95183, CC0 (gemeinfrei)"
  },
  {
    "id": "mnbegoyst",
    "title": "Bettler mit Austern (Philosoph)",
    "artist": "Édouard Manet",
    "year": "1865–1867",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1931.504: https://www.artic.edu/artworks/8969, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmatador",
    "title": "Ein Matador",
    "artist": "Édouard Manet",
    "year": "1866–1867",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.52: https://www.metmuseum.org/art/collection/search/436960, CC0 (gemeinfrei)"
  },
  {
    "id": "mnactor",
    "title": "Der tragische Schauspieler (Rouvière als Hamlet)",
    "artist": "Édouard Manet",
    "year": "1866",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1959.3.1: https://www.nga.gov/collection/art-object-page.45878.html, CC0 (gemeinfrei)"
  },
  {
    "id": "fifre",
    "title": "Der Pfeifer",
    "artist": "Édouard Manet",
    "year": "1866",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Manet, Edouard - Young Flautist, or The Fifer, 1866 (2).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mnyoung66",
    "title": "Junge Dame im Jahr 1866",
    "artist": "Édouard Manet",
    "year": "1866",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 89.21.3: https://www.metmuseum.org/art/collection/search/436964, CC0 (gemeinfrei)"
  },
  {
    "id": "mnspaniel",
    "title": "Ein King-Charles-Spaniel",
    "artist": "Édouard Manet",
    "year": "um 1866",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.36: https://www.nga.gov/collection/art-object-page.52180.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnpitcher",
    "title": "Knabe mit Krug",
    "artist": "Édouard Manet",
    "year": "1862–1872",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1968.303: https://www.artic.edu/artworks/29392, CC0 (gemeinfrei)"
  },
  {
    "id": "mnlongch",
    "title": "Das Rennen in Longchamp",
    "artist": "Édouard Manet",
    "year": "1866",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.424: https://www.artic.edu/artworks/81533, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmorisot",
    "title": "Berthe Morisot mit Muff",
    "artist": "Édouard Manet",
    "year": "um 1871–1872",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1958.34: https://clevelandart.org/art/1958.34, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmorfan",
    "title": "Bildnis von Berthe Morisot mit Fächer",
    "artist": "Édouard Manet",
    "year": "1874",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1963.812: https://www.artic.edu/artworks/18667, CC0 (gemeinfrei)"
  },
  {
    "id": "mnsuzanne",
    "title": "Madame Édouard Manet (Suzanne Leenhoff)",
    "artist": "Édouard Manet",
    "year": "um 1873",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 67.187.81: https://www.metmuseum.org/art/collection/search/436957, CC0 (gemeinfrei)"
  },
  {
    "id": "mnbrioche",
    "title": "Die Brioche",
    "artist": "Édouard Manet",
    "year": "1870",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1991.287: https://www.metmuseum.org/art/collection/search/436946, CC0 (gemeinfrei)"
  },
  {
    "id": "mnrailway",
    "title": "Die Eisenbahn",
    "artist": "Édouard Manet",
    "year": "1873",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1956.10.1: https://www.nga.gov/collection/art-object-page.43624.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmasked",
    "title": "Maskenball in der Oper",
    "artist": "Édouard Manet",
    "year": "1873",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1982.75.1: https://www.nga.gov/collection/art-object-page.61246.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnberck",
    "title": "Boote bei Berck-sur-Mer",
    "artist": "Édouard Manet",
    "year": "1873",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1940.534: https://clevelandart.org/art/1940.534, CC0 (gemeinfrei)"
  },
  {
    "id": "mnboating",
    "title": "Bootsfahrt",
    "artist": "Édouard Manet",
    "year": "1874",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.115: https://www.metmuseum.org/art/collection/search/436947, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmonetfam",
    "title": "Die Familie Monet in ihrem Garten in Argenteuil",
    "artist": "Édouard Manet",
    "year": "1874",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1976.201.14: https://www.metmuseum.org/art/collection/search/436965, CC0 (gemeinfrei)"
  },
  {
    "id": "mnraces",
    "title": "Beim Rennen",
    "artist": "Édouard Manet",
    "year": "um 1875",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1942.9.41: https://www.nga.gov/collection/art-object-page.1180.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mntama",
    "title": "Tama, der japanische Hund",
    "artist": "Édouard Manet",
    "year": "um 1875",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1995.47.12: https://www.nga.gov/collection/art-object-page.92997.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnplum",
    "title": "Der Pflaumenschnaps",
    "artist": "Édouard Manet",
    "year": "um 1877",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1971.85.1: https://www.nga.gov/collection/art-object-page.53034.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mncampbell",
    "title": "Claire Campbell",
    "artist": "Édouard Manet",
    "year": "1876",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1956.718: https://clevelandart.org/art/1956.718, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmoore",
    "title": "George Moore",
    "artist": "Édouard Manet",
    "year": "1879",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.55: https://www.metmuseum.org/art/collection/search/436953, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmooregard",
    "title": "George Moore im Garten des Künstlers",
    "artist": "Édouard Manet",
    "year": "um 1879",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2006.128.24: https://www.nga.gov/collection/art-object-page.136019.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnfichu",
    "title": "Bildnis einer Frau mit schwarzem Halstuch",
    "artist": "Édouard Manet",
    "year": "um 1878",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.436: https://www.artic.edu/artworks/14594, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmaureau",
    "title": "Bildnis von Alphonse Maureau",
    "artist": "Édouard Manet",
    "year": "1878–1879",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1950.123: https://www.artic.edu/artworks/90258, CC0 (gemeinfrei)"
  },
  {
    "id": "mnvaltesse",
    "title": "Émilie-Louise Delabigne, genannt Valtesse de la Bigne",
    "artist": "Édouard Manet",
    "year": "1879",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.561: https://www.metmuseum.org/art/collection/search/436959, CC0 (gemeinfrei)"
  },
  {
    "id": "mnlady",
    "title": "Bildnis einer Dame",
    "artist": "Édouard Manet",
    "year": "um 1879",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1952.9.1: https://www.nga.gov/collection/art-object-page.42284.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnlemonnier",
    "title": "Mademoiselle Isabelle Lemonnier",
    "artist": "Édouard Manet",
    "year": "1879–1882",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.56: https://www.metmuseum.org/art/collection/search/436958, CC0 (gemeinfrei)"
  },
  {
    "id": "mnreading",
    "title": "Lesende Frau",
    "artist": "Édouard Manet",
    "year": "1880–1882",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.435: https://www.artic.edu/artworks/14591, CC0 (gemeinfrei)"
  },
  {
    "id": "mnapples",
    "title": "Zwei Äpfel",
    "artist": "Édouard Manet",
    "year": "1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.102: https://www.nga.gov/collection/art-object-page.66503.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnbellevue",
    "title": "Madame Manet in Bellevue",
    "artist": "Édouard Manet",
    "year": "1880",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1997.391.4: https://www.metmuseum.org/art/collection/search/438002, CC0 (gemeinfrei)"
  },
  {
    "id": "mnpears",
    "title": "Birnen",
    "artist": "Édouard Manet",
    "year": "1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.28: https://www.nga.gov/collection/art-object-page.164938.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmelon",
    "title": "Die Melone",
    "artist": "Édouard Manet",
    "year": "um 1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.29: https://www.nga.gov/collection/art-object-page.164939.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mncucumber",
    "title": "Gurke mit Blättern",
    "artist": "Édouard Manet",
    "year": "um 1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.103: https://www.nga.gov/collection/art-object-page.66504.html, CC0 (gemeinfrei)"
  },
  {
    "id": "folies",
    "title": "Eine Bar in den Folies-Bergère",
    "artist": "Édouard Manet",
    "year": "1882",
    "museum": "The Courtauld Gallery, London",
    "source": "Wikimedia Commons: «\"Un Bar aux Folies-Bergère\" by Édouard Manet (1882).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mnstraw",
    "title": "Erdbeeren",
    "artist": "Édouard Manet",
    "year": "um 1882",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 56.230.1: https://www.metmuseum.org/art/collection/search/436963, CC0 (gemeinfrei)"
  },
  {
    "id": "mncrystal",
    "title": "Blumen in einer Kristallvase",
    "artist": "Édouard Manet",
    "year": "um 1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.37: https://www.nga.gov/collection/art-object-page.52181.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mnfaure",
    "title": "Jean-Baptiste Faure",
    "artist": "Édouard Manet",
    "year": "1882–1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 50.71.1: https://www.metmuseum.org/art/collection/search/436956, CC0 (gemeinfrei)"
  },
  {
    "id": "mnfaurehead",
    "title": "Kopf von Jean-Baptiste Faure",
    "artist": "Édouard Manet",
    "year": "1882–1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 59.129: https://www.metmuseum.org/art/collection/search/436955, CC0 (gemeinfrei)"
  },
  {
    "id": "mnmichel",
    "title": "Madame Michel-Lévy",
    "artist": "Édouard Manet",
    "year": "1882",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.161: https://www.nga.gov/collection/art-object-page.46636.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mndog",
    "title": "Der Mann mit dem Hund",
    "artist": "Édouard Manet",
    "year": "um 1882",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2007.287: https://www.artic.edu/artworks/191566, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "manet",
  "name": "Édouard Manet",
  "title": "Édouard Manets Lebensweg",
  "life": "1832–1883",
  "part": "Paris, Spanien und das moderne Leben",
  "subtitle": "Bildnisse, Stillleben, Meer und Grossstadt",
  "cover": "mnrailway",
  "intro": "Reise mit Édouard Manet durch sein Leben: von den ersten Bildern in Paris über seine Begeisterung für Spanien bis zu Bahnhof, Café, Meer und Garten. Manet malt Menschen seiner Zeit, wie er sie sieht, mit kräftigen Kontrasten und viel Schwarz. Die Bilder dieses Weges stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Édouard Manet stirbt am 30. April 1883 in Paris.",
    "Seine Bilder vom Leben in der Grossstadt hängen heute in Museen auf der ganzen Welt."
  ],
  "epilogue": "Édouard Manet stirbt am 30. April 1883 in Paris. Der Weg führt von den ersten Bildern über Spanien, das Meer und die Grossstadt bis zu den kleinen Stillleben der letzten Jahre.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M110,20 C130,10 170,12 186,26 C196,40 190,58 186,74 C182,86 168,92 152,90 C136,88 122,82 112,72 C100,60 96,36 110,20 Z",
      "M30,96 C52,86 92,86 110,96 C118,108 112,126 100,136 C84,146 54,146 38,138 C26,130 22,108 30,96 Z"
    ]
  },
  "stations": [
    {
      "id": "mns1",
      "place": "Paris: Lehrjahre",
      "when": "1832–1863",
      "map": {
        "x": 150,
        "y": 46
      },
      "mapLabel": "Paris",
      "intro": [
        "Édouard Manet wird am 23. Januar 1832 in Paris geboren. Sein Vater ist ein hoher Beamter im Justizministerium.",
        "Von 1850 bis 1856 lernt Manet im Atelier des Malers Thomas Couture."
      ],
      "works": [
        {
          "pid": "mnhat",
          "text": [
            "Ein Mann mit hohem schwarzem Hut steht ruhig da und schaut zur Seite.",
            "Manet malt ihn mit leichter Wasserfarbe über einer Bleistiftzeichnung."
          ],
          "fact": "1858–1859. National Gallery of Art, Washington."
        },
        {
          "pid": "mnsinger",
          "text": [
            "Ein Sänger in spanischer Kleidung sitzt auf einer Bank und spielt Gitarre.",
            "1861 zeigt Manet das Bild im Pariser Salon und erhält dafür eine lobende Erwähnung."
          ],
          "fact": "1860. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnoldmus",
          "text": [
            "Ein alter Geiger sitzt in der Mitte, um ihn herum stehen Kinder und Männer.",
            "Das Bild ist fast zweieinhalb Meter breit, eines der grössten von Manet."
          ],
          "fact": "1862. National Gallery of Art, Washington."
        },
        {
          "pid": "mnfishing",
          "text": [
            "Ein Fluss schlängelt sich durch eine weite Landschaft, auf dem Wasser sitzen Angler in Booten.",
            "Rechts vorn steht ein Paar in altmodischer Kleidung."
          ],
          "fact": "um 1862–1863. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "mns2",
      "place": "Spanien im Atelier",
      "when": "1861–1863",
      "map": {
        "x": 156,
        "y": 40
      },
      "mapLabel": "Paris",
      "intro": [
        "Manet liebt die spanische Malerei, lange bevor er selbst nach Spanien reist. In seinem Atelier kleidet er Modelle als Spanier und Toreros.",
        "1863 heiratet er die Pianistin Suzanne Leenhoff."
      ],
      "works": [
        {
          "pid": "mnsword",
          "text": [
            "Ein Junge in schwarzem Samtanzug hält ein schweres Schwert, das fast so gross ist wie er.",
            "Modell ist Léon, der Sohn von Suzanne Leenhoff."
          ],
          "fact": "1861. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnespada",
          "text": [
            "Eine junge Frau im Kostüm eines Stierkämpfers schwingt ein rosa Tuch.",
            "Modell ist Victorine Meurent, die Manet oft malt. Hinten sieht man eine Szene aus der Arena."
          ],
          "fact": "1862. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnmajo",
          "text": [
            "Ein junger Mann in spanischer Tracht steht vor einem leeren Grund, über dem Arm ein rotes Tuch.",
            "Modell ist Manets jüngerer Bruder Gustave."
          ],
          "fact": "1863. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "mns3",
      "place": "Austern, Fische und Blumen",
      "when": "1862–1866",
      "map": {
        "x": 144,
        "y": 50
      },
      "mapLabel": "Paris",
      "intro": [
        "Neben grossen Figurenbildern malt Manet immer wieder Stillleben.",
        "Austern, Fische, Blumen und Früchte malt er schnell und mit wenigen kräftigen Pinselstrichen."
      ],
      "works": [
        {
          "pid": "mnoysters",
          "text": [
            "Auf einem Teller liegen geöffnete Austern, daneben eine halbe Zitrone und eine Gabel.",
            "Die hellen Schalen leuchten vor dem dunklen Hintergrund."
          ],
          "fact": "1862. National Gallery of Art, Washington."
        },
        {
          "pid": "mnfish",
          "text": [
            "Auf einem weissen Tuch liegen Fische, Austern und eine Zitrone, dahinter ein Kupferkessel.",
            "Manet malt die glänzenden Fischhäute mit wenigen raschen Strichen."
          ],
          "fact": "1864. Art Institute of Chicago."
        },
        {
          "pid": "mnpeonies",
          "text": [
            "Ein Strauss rosa und weisser Pfingstrosen steht in einer hohen Vase.",
            "Unten liegen abgefallene Blütenblätter und eine einzelne Blüte."
          ],
          "fact": "1864–1865. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnmelonpe",
          "text": [
            "Auf einem weissen Tischtuch liegen eine grüne Melone, Pfirsiche und weitere Früchte.",
            "Daneben stehen eine dunkle Flasche und ein Weinglas."
          ],
          "fact": "um 1866. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "mns4",
      "place": "Am Ärmelkanal",
      "when": "1864",
      "map": {
        "x": 132,
        "y": 24
      },
      "mapLabel": "Boulogne",
      "intro": [
        "Im Juni 1864 kämpfen vor Cherbourg zwei Kriegsschiffe aus dem amerikanischen Bürgerkrieg, die «Kearsarge» und die «Alabama».",
        "Im Sommer ist Manet in Boulogne-sur-Mer und malt das Meer und die Schiffe."
      ],
      "works": [
        {
          "pid": "mnkearsarge",
          "text": [
            "Hinten liegt das amerikanische Kriegsschiff «Kearsarge» vor Anker, vorn kreuzt ein Segelboot mit braunem Segel.",
            "Das grüne Meer nimmt fast das ganze Bild ein."
          ],
          "fact": "1864. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnseaview",
          "text": [
            "Segelboote liegen auf einem ruhigen grünen Meer, der Horizont liegt weit oben.",
            "Rechts ragt ein grosses dunkles Segel ins Bild."
          ],
          "fact": "1864. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "mns5",
      "place": "Madrid und Velázquez",
      "when": "1865–1867",
      "map": {
        "x": 70,
        "y": 116
      },
      "mapLabel": "Madrid",
      "intro": [
        "Im Sommer 1865 reist Manet nach Madrid. Im Prado sieht er die Bilder von Velázquez.",
        "Zurück in Paris malt er grosse Einzelfiguren vor einem leeren Hintergrund."
      ],
      "works": [
        {
          "pid": "mnbeggar",
          "text": [
            "Ein alter Mann in einem langen braunen Mantel steht vor einem leeren Hintergrund.",
            "Manet malt ihn nach dem Vorbild der Philosophenbilder von Velázquez."
          ],
          "fact": "1865–1867. Art Institute of Chicago."
        },
        {
          "pid": "mnbegoyst",
          "text": [
            "Ein Mann mit Hut und dunklem Mantel steht da, zu seinen Füssen liegen Austernschalen.",
            "Er ist das Gegenstück zum Bettler mit Mantel."
          ],
          "fact": "1865–1867. Art Institute of Chicago."
        },
        {
          "pid": "mnmatador",
          "text": [
            "Ein Stierkämpfer in schwarzem Kostüm steht vor einem leeren Grund, den Hut in der Hand.",
            "Hinter ihm bleibt alles hell und still."
          ],
          "fact": "1866–1867. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnactor",
          "text": [
            "Der Schauspieler Philibert Rouvière steht in schwarzem Kostüm als Hamlet auf der Bühne.",
            "Auch dieses Bild lehnt die Jury des Salons 1866 ab."
          ],
          "fact": "1866. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "manet1",
      "place": "Das Jahr des Pfeifers",
      "when": "1866",
      "map": {
        "x": 152,
        "y": 48
      },
      "mapLabel": "Paris",
      "intro": [
        "1866 lehnt die Jury des Pariser Salons zwei Bilder von Manet ab, darunter den Pfeifer.",
        "Der junge Schriftsteller Émile Zola verteidigt ihn darauf in der Zeitung."
      ],
      "works": [
        {
          "pid": "fifre",
          "text": [
            "Ein junger Musiker der kaiserlichen Garde steht wie auf einer Bühne vor einem neutralen Hintergrund.",
            "Manet malt ihn fast ohne Schatten, mit klaren Flächen in Rot, Schwarz und Weiss."
          ],
          "fact": "1866. Musée d’Orsay, Paris."
        },
        {
          "pid": "mnyoung66",
          "text": [
            "Eine junge Frau im rosa Morgenmantel steht neben einem Papagei auf seiner Stange.",
            "Modell ist wieder Victorine Meurent. Zu ihren Füssen liegt eine geschälte Orange."
          ],
          "fact": "1866. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnspaniel",
          "text": [
            "Ein kleiner Hund mit langen braunen Ohren sitzt auf einem roten Kissen.",
            "Er schaut uns mit grossen dunklen Augen an."
          ],
          "fact": "um 1866. National Gallery of Art, Washington."
        },
        {
          "pid": "mnpitcher",
          "text": [
            "Ein Junge in weissem Hemd hebt einen Krug an den Mund und trinkt.",
            "Manet arbeitet über zehn Jahre an diesem Bild."
          ],
          "fact": "1862–1872. Art Institute of Chicago."
        },
        {
          "pid": "mnlongch",
          "text": [
            "Pferde galoppieren direkt auf uns zu, links und rechts drängen sich die Zuschauer.",
            "Staub und Bewegung lassen die Reiter fast verschwimmen."
          ],
          "fact": "1866. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "mns7",
      "place": "Berthe Morisot und die Familie",
      "when": "1868–1874",
      "map": {
        "x": 148,
        "y": 40
      },
      "mapLabel": "Paris",
      "intro": [
        "1868 lernt Manet die Malerin Berthe Morisot kennen. Er malt sie viele Male.",
        "1874 heiratet sie Manets Bruder Eugène."
      ],
      "works": [
        {
          "pid": "mnmorisot",
          "text": [
            "Berthe Morisot trägt einen schwarzen Hut und hält einen Muff in den Händen.",
            "Manet malt ihr Gesicht hell vor einem dunklen, unruhigen Grund."
          ],
          "fact": "um 1871–1872. Cleveland Museum of Art."
        },
        {
          "pid": "mnmorfan",
          "text": [
            "Berthe Morisot sitzt in schwarzem Kleid auf einem hellen Sofa.",
            "Das kleine Aquarell ist nur etwa 21 Zentimeter hoch."
          ],
          "fact": "1874. Art Institute of Chicago."
        },
        {
          "pid": "mnsuzanne",
          "text": [
            "Manets Frau Suzanne sitzt in einem grauen Kleid und mit schwarzem Hut da.",
            "Ihr Blick ist ruhig und ein wenig nachdenklich."
          ],
          "fact": "um 1873. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnbrioche",
          "text": [
            "Auf einer weissen Serviette liegt eine goldbraune Brioche mit einer Blume obendrauf.",
            "Daneben liegen Früchte auf dem dunklen Tisch."
          ],
          "fact": "1870. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "mns8",
      "place": "Bahnhof, Opernball und Meer",
      "when": "1873",
      "map": {
        "x": 134,
        "y": 30
      },
      "mapLabel": "Paris · Berck",
      "intro": [
        "1873 malt Manet die Eisenbahn in Paris, einen Maskenball in der Oper und im Sommer das Meer bei Berck-sur-Mer.",
        "Die «Eisenbahn» zeigt er 1874 im Salon."
      ],
      "works": [
        {
          "pid": "mnrailway",
          "text": [
            "Eine Frau mit Buch und kleinem Hund sitzt vor einem Eisengitter. Neben ihr schaut ein Mädchen in Weiss und Blau hinunter zu den Gleisen.",
            "Vom Zug sieht man nur weissen Dampf."
          ],
          "fact": "1873. National Gallery of Art, Washington."
        },
        {
          "pid": "mnmasked",
          "text": [
            "Männer in schwarzen Anzügen und Zylindern drängen sich im Foyer der Oper, dazwischen maskierte Frauen.",
            "Links leuchtet ein buntes Harlekinkostüm."
          ],
          "fact": "1873. National Gallery of Art, Washington."
        },
        {
          "pid": "mnberck",
          "text": [
            "Kleine Segelboote fahren auf einem grau-grünen Meer unter einem bedeckten Himmel.",
            "Manet malt die Wellen mit schnellen, breiten Strichen."
          ],
          "fact": "1873. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "mns9",
      "place": "Sommer in Argenteuil",
      "when": "1874",
      "map": {
        "x": 144,
        "y": 40
      },
      "mapLabel": "Argenteuil",
      "intro": [
        "Im Sommer 1874 malt Manet in Argenteuil an der Seine, wo Claude Monet wohnt.",
        "Er malt dort im Freien, mit hellen Farben und viel Licht."
      ],
      "works": [
        {
          "pid": "mnboating",
          "text": [
            "Ein Mann in Weiss mit Strohhut sitzt am Steuer, neben ihm eine Frau in blau gestreiftem Kleid.",
            "Das blaue Wasser füllt den ganzen Hintergrund, einen Himmel gibt es nicht."
          ],
          "fact": "1874. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnmonetfam",
          "text": [
            "Camille Monet und ihr Sohn Jean ruhen im Gras, links arbeitet Claude Monet im Garten.",
            "Vorn picken Hühner im Gras."
          ],
          "fact": "1874. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "mns10",
      "place": "Rennen, Hunde und Cafés",
      "when": "1875–1877",
      "map": {
        "x": 156,
        "y": 52
      },
      "mapLabel": "Paris",
      "intro": [
        "In diesen Jahren malt Manet kleine Szenen der Stadt und viele Bildnisse.",
        "Neben Öl arbeitet er nun auch mit Pastell."
      ],
      "works": [
        {
          "pid": "mnraces",
          "text": [
            "Pferde mit Jockeys jagen über eine grüne Rennbahn.",
            "Das kleine Bild auf Holz ist nur etwa 22 Zentimeter breit."
          ],
          "fact": "um 1875. National Gallery of Art, Washington."
        },
        {
          "pid": "mntama",
          "text": [
            "Ein kleiner schwarz-weisser Hund steht auf dem Boden und schaut uns an.",
            "Oben links steht sein Name: Tama."
          ],
          "fact": "um 1875. National Gallery of Art, Washington."
        },
        {
          "pid": "mnplum",
          "text": [
            "Eine junge Frau in rosa Kleid sitzt an einem Marmortisch im Café, vor ihr ein Glas mit einer Pflaume.",
            "Sie stützt den Kopf in die Hand und träumt vor sich hin."
          ],
          "fact": "um 1877. National Gallery of Art, Washington."
        },
        {
          "pid": "mncampbell",
          "text": [
            "Eine junge Frau mit dunklem, hochgestecktem Haar ist im Profil zu sehen.",
            "Manet zeichnet mit Pastell und etwas Ölfarbe auf feiner Leinwand."
          ],
          "fact": "1876. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "mns11",
      "place": "Bildnisse im neuen Atelier",
      "when": "1878–1879",
      "map": {
        "x": 146,
        "y": 46
      },
      "mapLabel": "Paris",
      "intro": [
        "1878 zieht Manet in ein neues Atelier in der Rue d’Amsterdam.",
        "Viele Freunde und Bekannte sitzen ihm dort Modell, oft für ein Pastell."
      ],
      "works": [
        {
          "pid": "mnmoore",
          "text": [
            "Der irische Schriftsteller George Moore hat rotblondes Haar und einen spitzen Bart.",
            "Manet zeichnet ihn schnell mit Pastell auf Leinwand."
          ],
          "fact": "1879. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnmooregard",
          "text": [
            "George Moore sitzt auf einer grünen Gartenbank, um ihn herum Blätter und Blüten.",
            "Das Bild bleibt skizzenhaft, wie schnell im Freien gemalt."
          ],
          "fact": "um 1879. National Gallery of Art, Washington."
        },
        {
          "pid": "mnfichu",
          "text": [
            "Eine Frau mit schwarzem Halstuch lächelt uns an.",
            "Der grüne Hintergrund lässt ihr Gesicht leuchten."
          ],
          "fact": "um 1878. Art Institute of Chicago."
        },
        {
          "pid": "mnmaureau",
          "text": [
            "Ein Mann mit braunem Hut und Schnurrbart sitzt vor einem hellen Grund.",
            "Manet zeichnet ihn mit Pastell auf grundierter Leinwand."
          ],
          "fact": "1878–1879. Art Institute of Chicago."
        },
        {
          "pid": "mnvaltesse",
          "text": [
            "Eine Frau mit blondem Haar ist im Profil vor einem blaugrauen Grund zu sehen.",
            "Manet zeichnet sie mit Pastell auf Leinwand."
          ],
          "fact": "1879. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnlady",
          "text": [
            "Eine Dame mit Hut ist im Profil zu sehen, um den Hals trägt sie ein blaues Tuch.",
            "Das Bild auf Holz ist nur etwa 15 Zentimeter hoch."
          ],
          "fact": "um 1879. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "mns12",
      "place": "Lesen und Schreiben",
      "when": "1879–1882",
      "map": {
        "x": 152,
        "y": 42
      },
      "mapLabel": "Paris",
      "intro": [
        "Ab 1879 ist Manet oft krank, sein Bein schmerzt beim Gehen.",
        "Er malt kleinere Bilder und schmückt Briefe an Freunde mit Wasserfarben."
      ],
      "works": [
        {
          "pid": "mnlemonnier",
          "text": [
            "Eine junge Frau mit dunklem, hochgestecktem Haar schaut zur Seite.",
            "Der helle, blasse Grund lässt ihr Gesicht weich wirken."
          ],
          "fact": "1879–1882. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnreading",
          "text": [
            "Eine Frau in Schwarz mit Hut hält eine Zeitschrift hoch und liest.",
            "Hinter ihr leuchtet grünes Laub."
          ],
          "fact": "1880–1882. Art Institute of Chicago."
        },
        {
          "pid": "mnapples",
          "text": [
            "Zwei rot-gelbe Äpfel liegen auf hellem Papier.",
            "Manet malt sie mit Wasserfarbe über einer feinen Bleistiftzeichnung."
          ],
          "fact": "1880. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "mns13",
      "place": "Sommer in Bellevue",
      "when": "1880",
      "map": {
        "x": 148,
        "y": 54
      },
      "mapLabel": "Bellevue",
      "intro": [
        "Im Sommer 1880 erholt sich Manet in Bellevue bei Paris.",
        "Dort malt er den Garten, Früchte und Gemüse."
      ],
      "works": [
        {
          "pid": "mnbellevue",
          "text": [
            "Suzanne Manet sitzt mit Hut auf einer Bank im Garten.",
            "Grüne Büsche und Sonnenlicht umgeben sie."
          ],
          "fact": "1880. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnpears",
          "text": [
            "Zwei Birnen liegen auf einer hellen Steinplatte.",
            "Das kleine Bild ist nur etwa 24 Zentimeter breit."
          ],
          "fact": "1880. National Gallery of Art, Washington."
        },
        {
          "pid": "mnmelon",
          "text": [
            "Eine gerippte, gelbliche Melone liegt auf einer Tischkante.",
            "Der dunkle Hintergrund lässt ihre Form deutlich hervortreten."
          ],
          "fact": "um 1880. National Gallery of Art, Washington."
        },
        {
          "pid": "mncucumber",
          "text": [
            "Eine Gurke liegt mit ihrem Stängel und einigen Blättern auf dem Blatt.",
            "Manet malt sie mit Wasserfarbe auf japanischem Papier."
          ],
          "fact": "um 1880. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "mns14",
      "place": "Die letzten Jahre",
      "when": "1881–1883",
      "map": {
        "x": 150,
        "y": 46
      },
      "mapLabel": "Paris",
      "intro": [
        "1881 erhält Manet den Orden der Ehrenlegion. 1882 zeigt er im Salon «Eine Bar in den Folies-Bergère».",
        "In den letzten Monaten malt er vor allem kleine Bilder mit Blumen und Früchten."
      ],
      "works": [
        {
          "pid": "folies",
          "text": [
            "Eine Kellnerin steht an der Bar des Pariser Varietés Folies-Bergère, vor sich Flaschen, Obst und ein Glas.",
            "Hinter ihr zeigt der Spiegel das Publikum, die Lichter und einen Mann, mit dem sie offenbar spricht."
          ],
          "fact": "1882. The Courtauld Gallery, London."
        },
        {
          "pid": "mnstraw",
          "text": [
            "Ein Korb voller roter Erdbeeren steht auf einem Tisch.",
            "Das Bild ist klein, nur etwa 27 Zentimeter breit."
          ],
          "fact": "um 1882. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mncrystal",
          "text": [
            "Rosen und andere Blumen stehen in einer durchsichtigen Vase.",
            "Man sieht die Stiele durch das Glas und das Wasser."
          ],
          "fact": "um 1882. National Gallery of Art, Washington."
        },
        {
          "pid": "mnfaure",
          "text": [
            "Der Sänger Jean-Baptiste Faure hat einen dunklen Bart und schaut uns ernst an.",
            "Faure ist Bariton an der Pariser Oper und sammelt Bilder von Manet."
          ],
          "fact": "1882–1883. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnfaurehead",
          "text": [
            "Noch einmal Faure, hier ganz nah und mit weissem Hemd.",
            "Manet malt ihn in seinem letzten Lebensjahr."
          ],
          "fact": "1882–1883. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mnmichel",
          "text": [
            "Eine Frau in dunklem Kleid mit Pelzbesatz steht vor einem hellen Grund.",
            "Manet zeichnet sie mit Pastell auf Leinwand."
          ],
          "fact": "1882. National Gallery of Art, Washington."
        },
        {
          "pid": "mndog",
          "text": [
            "Ein Mann mit Zylinder und dunklem Mantel steht da, neben ihm ein schwarzer Hund.",
            "Manet zeichnet die beiden mit Pastell auf hell grundierter Leinwand."
          ],
          "fact": "um 1882. Art Institute of Chicago."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
