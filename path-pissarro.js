// v9.2 Camille Pissarro life journey, Part 1 (1830–1884).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Public-domain / CC0 museum scans only. Documented facts only; no unverified quotations.
// No nudes, no bathers as works, no death-bed images.
(function () {
  var works = [
  {
    "id": "pxcreek",
    "title": "Kleine Bucht auf St. Thomas",
    "artist": "Camille Pissarro",
    "year": "1856",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Crique avec palmiers (Camille Pissarro) NGA 1985.64.29.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxtwowomen",
    "title": "Zwei Frauen am Meer, St. Thomas",
    "artist": "Camille Pissarro",
    "year": "1856",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Deux femmes causant au bord de la mer, Saint Thomas (Camille Pissarro) – NGA 1985.64.30.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxstpath",
    "title": "Landschaft auf St. Thomas",
    "artist": "Camille Pissarro",
    "year": "1856",
    "museum": "Virginia Museum of Fine Arts, Richmond",
    "source": "Wikimedia Commons: «Camille Pissarro, Deux personnages causant sur le bord d'une route, 83.46,1856, Virginia Museum of Fine Arts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxboy",
    "title": "Bildnis eines Knaben",
    "artist": "Camille Pissarro",
    "year": "1852–1855",
    "museum": "Ordrupgaard, Charlottenlund",
    "source": "Wikimedia Commons: «Camille Pissarro, Portræt af en dreng, 1852-1855.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpariata",
    "title": "Pariata",
    "artist": "Camille Pissarro",
    "year": "1853",
    "museum": "Museum Barberini, Potsdam",
    "source": "Wikimedia Commons: «Pissarro, Camille-Pariata.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxbananeros",
    "title": "Bananenstauden",
    "artist": "Camille Pissarro",
    "year": "um 1852–1854",
    "museum": "Banco Central de Venezuela, Caracas",
    "source": "Wikimedia Commons: «Bananeros Camille Pissarro.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxplaza",
    "title": "Ein Platz in Caracas",
    "artist": "Camille Pissarro",
    "year": "1854",
    "museum": "Colección Cisneros, Caracas",
    "source": "Wikimedia Commons: «Camille Pissarro - A Plaza in Caracas.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxmelbye",
    "title": "Bildnis des Malers Fritz Melbye",
    "artist": "Camille Pissarro",
    "year": "1857–1858",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Wikimedia Commons: «Portræt af maleren Fritz Melbye.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxselfearly",
    "title": "Selbstbildnis",
    "artist": "Camille Pissarro",
    "year": "1857–1858",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Wikimedia Commons: «Selvportræt Camille Pissarro 1852-1854.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxfabrique",
    "title": "Die kleine Fabrik",
    "artist": "Camille Pissarro",
    "year": "um 1862–1865",
    "museum": "Musée d’art moderne et contemporain, Strassburg",
    "source": "Wikimedia Commons: «Camille Pissarro - La Petite Fabrique - 1862-65.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxmarne",
    "title": "Die Marne bei Chennevières",
    "artist": "Camille Pissarro",
    "year": "1864–1865",
    "museum": "National Galleries of Scotland, Edinburgh",
    "source": "Wikimedia Commons: «Camille Pissarro - The Marne at Chennevières.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxroche",
    "title": "Ein Platz in La Roche-Guyon",
    "artist": "Camille Pissarro",
    "year": "um 1865–1867",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «1865 Pissarro Platz in La Roche-Guyon 104.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxindyland",
    "title": "Landschaft",
    "artist": "Camille Pissarro",
    "year": "um 1864",
    "museum": "Indianapolis Museum of Art",
    "source": "Wikimedia Commons: «Camille Pissarro - Paysage (ca.1865).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxmarnewinter",
    "title": "Die Marne im Winter",
    "artist": "Camille Pissarro",
    "year": "1866",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Camille Pissarro, The Banks of the Marne in Winter, 1866 1 27 18 -artinstitutechi (40428548941).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxrueherm",
    "title": "Rue de l’Hermitage in Pontoise",
    "artist": "Camille Pissarro",
    "year": "1866",
    "museum": "Tel Aviv Museum of Art",
    "source": "Wikimedia Commons: «1866 Pissaro, C Rue de l'Hermitage, Pontoise Tel Aviv Museum of Art anagoria.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxjallais",
    "title": "Der Hügel von Jallais, Pontoise",
    "artist": "Camille Pissarro",
    "year": "1867",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Camille Pissarro Jalais Hill, Pontoise The Metropolitan Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxhermgard",
    "title": "Die Gärten von L’Hermitage, Pontoise",
    "artist": "Camille Pissarro",
    "year": "1867",
    "museum": "Nationalgalerie Prag",
    "source": "Wikimedia Commons: «1867 Pissarro Pontoise Nationalgalerie Prag anagoria.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxhermitage",
    "title": "L’Hermitage bei Pontoise",
    "artist": "Camille Pissarro",
    "year": "1867",
    "museum": "Wallraf-Richartz-Museum, Köln",
    "source": "Wikimedia Commons: «1867 Pissarro L’Hermitage bei Pontoise anagoria.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxoisebanks",
    "title": "Die Oise bei Pontoise",
    "artist": "Camille Pissarro",
    "year": "1867",
    "museum": "Denver Art Museum",
    "source": "Wikimedia Commons: «Camille Pissarro - Bords de l'Oise a Pontoise (Banks of the Oise at Pontoise) - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxecluse",
    "title": "Der Chemin de l’Écluse und die Brücke von Pontoise",
    "artist": "Camille Pissarro",
    "year": "1867",
    "museum": "Tel Aviv Museum of Art",
    "source": "Wikimedia Commons: «1867 Pissarro, C Chemin de l'Excluse and Pontoise Bridge Tel Aviv Museum of Art anagoria.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxrdvers69",
    "title": "Die Strasse nach Versailles in Louveciennes",
    "artist": "Camille Pissarro",
    "year": "1869",
    "museum": "Walters Art Museum, Baltimore",
    "source": "Wikimedia Commons: «Road to Versailles at Louveciennes 1869 Camille Pissarro.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxbougival",
    "title": "Häuser in Bougival, Herbst",
    "artist": "Camille Pissarro",
    "year": "1870",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Houses at Bougival (Autumn).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxviewlouv",
    "title": "Blick von Louveciennes",
    "artist": "Camille Pissarro",
    "year": "1869–1870",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Camille Pissarro - View from Louveciennes - National Gallery London.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxvalerien",
    "title": "Louveciennes mit dem Mont Valérien",
    "artist": "Camille Pissarro",
    "year": "1870",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Camille Pissarro - Louveciennes with Mont Valérien in the background - 1870 8931.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxchateausnow",
    "title": "Der Park des Château du Pont im Schnee, Louveciennes",
    "artist": "Camille Pissarro",
    "year": "um 1870",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Grounds of the Château du Pont under Snow, Louveciennes.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxlangmatt",
    "title": "Kastanien in Louveciennes, Frühling",
    "artist": "Camille Pissarro",
    "year": "1870",
    "museum": "Museum Langmatt, Baden",
    "source": "Wikimedia Commons: «Châtaigniers à Louveciennes au printemps - Camille Pissarro - Museum Langmatt-8637 (without frame).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxfoxhill",
    "title": "Fox Hill, Upper Norwood",
    "artist": "Camille Pissarro",
    "year": "1870",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Camille Pissarro - Fox Hill, Upper Norwood, 1870.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxavenue",
    "title": "Die Avenue in Sydenham",
    "artist": "Camille Pissarro",
    "year": "1871",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Camille Pissarro - The Avenue, Sydenham (1871).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxlordship",
    "title": "Bahnhof Lordship Lane, Dulwich",
    "artist": "Camille Pissarro",
    "year": "1871",
    "museum": "Courtauld Gallery, London",
    "source": "Wikimedia Commons: «Pissarro - Lordship Lane Station, Dulwich (1871).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxcrystal",
    "title": "Der Crystal Palace",
    "artist": "Camille Pissarro",
    "year": "1871",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Camille Pissarro - Le Crystal Palace, Londres.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxdulwich",
    "title": "Dulwich College",
    "artist": "Camille Pissarro",
    "year": "1871",
    "museum": "Fondation Bemberg, Toulouse",
    "source": "Wikimedia Commons: «Bemberg Fondation Toulouse - Dulwich College, Londres (1871) - Camille Pissarro Inv.2149.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxsydenham",
    "title": "Bei Sydenham Hill",
    "artist": "Camille Pissarro",
    "year": "1871",
    "museum": "Kimbell Art Museum, Fort Worth",
    "source": "Wikimedia Commons: «Camille Pissarro - Near Sydenham Hill - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxbloom",
    "title": "Blühender Obstgarten, Louveciennes",
    "artist": "Camille Pissarro",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Camille Pissarro, Orchard in Bloom, Louveciennes, 1872, NGA 52195.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxfence",
    "title": "Der Zaun",
    "artist": "Camille Pissarro",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Camille Pissarro, The Fence, 1872, NGA 66429.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxapples",
    "title": "Stilleben mit Äpfeln und Krug",
    "artist": "Camille Pissarro",
    "year": "1872",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Camille Pissarro Still Life with Apples and Pitcher The Metropolitan Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpoulies",
    "title": "Ruelle des Poulies in Pontoise",
    "artist": "Camille Pissarro",
    "year": "1872",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Ruelle des Poulies, Pontoise (1872) - Camille Pissarro (Musée d'Orsay).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxboulevard",
    "title": "Der Boulevard des Fossés, Pontoise",
    "artist": "Camille Pissarro",
    "year": "1872",
    "museum": "Norton Simon Museum, Pasadena",
    "source": "Wikimedia Commons: «Camille Pissarro - The Boulevard des Fossés, Pontoise.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxchestnut72",
    "title": "Kastanienhain in Louveciennes",
    "artist": "Camille Pissarro",
    "year": "1872",
    "museum": "Nelson-Atkins Museum of Art, Kansas City",
    "source": "Wikimedia Commons: «Camille Pissarro - Bois de châtaigniers à Louveciennes (1872).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxgelee",
    "title": "Reif, alte Strasse nach Ennery, Pontoise",
    "artist": "Camille Pissarro",
    "year": "1873",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Camille Pissarro - Gelée blanche, ancienne route d´Ennery, Pontoise - 1873.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxtroofs",
    "title": "Die roten Dächer, ein Dorfwinkel im Winter",
    "artist": "Camille Pissarro",
    "year": "1877",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Camille Pissarro - Red roofs, corner of a village, winter - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxboefs",
    "title": "Die Côte des Bœufs in L’Hermitage",
    "artist": "Camille Pissarro",
    "year": "1877",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Camille Pissarro - The Côte des Bœufs at L'Hermitage (1877).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxdiligence",
    "title": "Die Postkutsche auf der Strasse nach Ennery, Pontoise",
    "artist": "Camille Pissarro",
    "year": "1877",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «La diligence, route d'Ennery à l'Hermitage, Pontoise (1877) - Camille Pissarro (Musée d'Orsay).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpiettex",
    "title": "Das Haus von Piette in Montfoucault",
    "artist": "Camille Pissarro",
    "year": "1874",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Camille Pissarro - Piette's House at Montfoucault - 1955.826 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "pxcross",
    "title": "Eine Kreuzung in L’Hermitage, Pontoise",
    "artist": "Camille Pissarro",
    "year": "1876",
    "museum": "Musée d’art moderne André Malraux, Le Havre",
    "source": "Wikimedia Commons: «Camille Pissarro - Un carrefour à l'Hermitage, Pontoise (1876).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxwoods",
    "title": "Waldrand bei L’Hermitage, Pontoise",
    "artist": "Camille Pissarro",
    "year": "1879",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Edge of the Woods Near L'Hermitage, Pontoise, by Camille Pissarro, Cleveland Museum of Art, 1951.356.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxstrawhat",
    "title": "Bauernmädchen mit Strohhut",
    "artist": "Camille Pissarro",
    "year": "1881",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Camille Pissarro, Peasant Girl with a Straw Hat, 1881, NGA 155712.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxosnychest",
    "title": "Kastanien in Osny",
    "artist": "Camille Pissarro",
    "year": "1883",
    "museum": "Kunstmuseum Basel",
    "source": "Wikimedia Commons: «Pissarro - Châtaigniers à Osny, 1883.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxrouen",
    "title": "Die Quais von Rouen",
    "artist": "Camille Pissarro",
    "year": "1883",
    "museum": "Courtauld Gallery, London",
    "source": "Wikimedia Commons: «Camille Pissarro - Quais de Rouen (1883).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxosnymill",
    "title": "Feld und Mühle in Osny",
    "artist": "Camille Pissarro",
    "year": "1884",
    "museum": "RISD Museum, Providence",
    "source": "Wikimedia Commons: «Camille Pissarro - Field and Mill at Osny (1884).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxeragnyent",
    "title": "Ortseingang von Éragny",
    "artist": "Camille Pissarro",
    "year": "1884",
    "museum": "Pola Museum of Art, Hakone",
    "source": "Wikimedia Commons: «CamillePissarro-1884-Entrance to the Village of Eragny.png», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "pissarro",
  "name": "Camille Pissarro",
  "title": "Camille Pissarros Lebensweg",
  "life": "1830–1903",
  "part": "Teil 1 · 1830–1884",
  "subtitle": "Von St. Thomas zu den Impressionisten-Ausstellungen",
  "cover": "pxjallais",
  "intro": "Camille Pissarro wird am 10. Juli 1830 in Charlotte Amalie auf St. Thomas geboren, damals Dänisch-Westindien. Mit Fritz Melbye geht er nach Venezuela, 1855 nach Paris. Dieser erste Teil folgt ihm über Louveciennes, die Londoner Jahre und Pontoise bis zur Schwelle von Éragny um 1884.",
  "ending": [
    "Der erste Teil von Pissarros Weg endet, als er 1884 nach Éragny-sur-Epte zieht.",
    "Im nächsten Teil folgen die Jahre in Éragny, die Begegnung mit dem Neoimpressionismus, die Stadtbilder von Paris, Rouen und Le Havre und sein Tod 1903."
  ],
  "epilogue": "Im nächsten Teil folgen die Jahre in Éragny, die Begegnung mit dem Neoimpressionismus, die Stadtbilder von Paris, Rouen und Le Havre und sein Tod 1903.",
  "map": {
    "viewBox": "0 0 200 200",
    "lands": [
      "M22,108 C34,92 52,96 58,118 C54,142 36,150 24,138 C16,126 16,116 22,108 Z",
      "M40,148 C52,138 68,148 62,168 C50,176 32,168 34,156 C35,151 36,150 40,148 Z",
      "M96,28 C118,12 148,16 158,36 C152,58 128,62 110,50 C98,40 90,34 96,28 Z",
      "M100,78 C128,62 168,78 174,118 C166,158 128,176 104,164 C86,150 84,110 100,78 Z"
    ]
  },
  "stations": [
    {
      "id": "pxstthomas",
      "place": "St. Thomas in Dänisch-Westindien",
      "when": "1830–1852",
      "map": {
        "x": 34,
        "y": 128
      },
      "mapLabel": "St. Thomas",
      "intro": [
        "Jacob Abraham Camille Pissarro wird am 10. Juli 1830 in Charlotte Amalie auf St.",
        "Thomas geboren, damals eine dänische Kolonie in der Karibik.",
        "Die Familie ist jüdisch und führt ein Geschäft im Hafen. 1842, mit zwölf Jahren, kommt er an die Pension Savary in Passy bei Paris; der Direktor ermutigt ihn, nach der Natur zu zeichnen. 1847 kehrt er zurück und arbeitet im Laden des Vaters, zeichnet aber in der Freizeit."
      ],
      "works": [
        {
          "pid": "pxcreek",
          "text": [
            "Palmen stehen an einer kleinen Bucht der Insel.",
            "Das Bild entstand 1856, schon in Paris, nach Motiven von St.",
            "Thomas.",
            "Pissarro hält die karibische Küste fest, an der er aufgewachsen ist.",
            "Es hängt in der National Gallery of Art in Washington."
          ],
          "fact": "1856. National Gallery of Art, Washington."
        },
        {
          "pid": "pxtwowomen",
          "text": [
            "Zwei Frauen stehen am Weg über dem Meer, in der Nähe von Charlotte Amalie.",
            "Auch dieses Bild malte Pissarro 1856 in Paris, aus Erinnerung und früheren Studien.",
            "Es gehört wie die Bucht zu den frühen Karibikmotiven in der National Gallery of Art."
          ],
          "fact": "1856. National Gallery of Art, Washington."
        },
        {
          "pid": "pxstpath",
          "text": [
            "Zwei Gestalten stehen an einem Weg unter Palmen.",
            "Das Virginia Museum of Fine Arts bewahrt dieses Landschaftsbild von 1856, ebenfalls ein Motiv der Insel, das Pissarro in den ersten Pariser Jahren ausführte."
          ],
          "fact": "1856. Virginia Museum of Fine Arts, Richmond."
        },
        {
          "pid": "pxboy",
          "text": [
            "Zwischen 1852 und 1855, noch auf St.",
            "Thomas, malt Pissarro dieses Knabenbildnis.",
            "Der Junge trägt Hut und eine weisse Schlinge, der Blick geht direkt zum Betrachter.",
            "Das Bild hängt heute im Museum Ordrupgaard bei Kopenhagen."
          ],
          "fact": "1852–1855. Ordrupgaard, Charlottenlund."
        }
      ]
    },
    {
      "id": "pxvenezuela",
      "place": "Mit Fritz Melbye in Venezuela",
      "when": "1852–1855",
      "map": {
        "x": 48,
        "y": 152
      },
      "mapLabel": "Caracas",
      "intro": [
        "Um 1850 begegnet Pissarro auf St.",
        "Thomas dem dänischen Maler Fritz Melbye. 1852 reisen die beiden nach Venezuela: zuerst in den Hafen La Guaira, dann nach Caracas, wo sie ein Atelier einrichten. 1854 kehrt Pissarro nach St.",
        "Thomas zurück.",
        "Im Oktober 1855, im Jahr der Pariser Weltausstellung, kommt er nach Paris."
      ],
      "works": [
        {
          "pid": "pxpariata",
          "text": [
            "Das Blatt ist unten «Pariata 18 avril 1853» bezeichnet: ein Aquarell aus den Venezuela-Jahren, gemalt in Pariata nahe der Küste bei La Guaira.",
            "Palmen, ein Haus und eine Hütte stehen unter hohem Himmel.",
            "Es gehört zur Sammlung des Museum Barberini in Potsdam."
          ],
          "fact": "1853. Museum Barberini, Potsdam."
        },
        {
          "pid": "pxbananeros",
          "text": [
            "In Venezuela zeichnet und aquarelliert Pissarro die tropische Vegetation.",
            "Die Bananenstauden in Blau und Grün gehören zu den Blättern, die das Banco Central de Venezuela in Caracas bewahrt."
          ],
          "fact": "um 1852–1854. Banco Central de Venezuela, Caracas."
        },
        {
          "pid": "pxplaza",
          "text": [
            "1854 malt Pissarro einen Platz in Caracas: eine weisse Markise, ein Turm, Menschen und ein Esel im Schatten.",
            "Das Ölbild entstand, während er mit Fritz Melbye in der Stadt ein Atelier hatte.",
            "Es gehört zur Colección Cisneros."
          ],
          "fact": "1854. Colección Cisneros, Caracas."
        },
        {
          "pid": "pxmelbye",
          "text": [
            "1857–58, schon in Paris, malt Pissarro das Bildnis von Fritz Melbye, mit dem er durch Venezuela gereist war.",
            "Melbye hatte ihn auf St.",
            "Thomas zum ernsthaften Arbeiten nach der Natur ermutigt.",
            "Das Bildnis hängt im Statens Museum for Kunst in Kopenhagen."
          ],
          "fact": "1857–1858. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "pxparis",
      "place": "Paris und der Einfluss Corots",
      "when": "1855–1865",
      "map": {
        "x": 130,
        "y": 118
      },
      "mapLabel": "Paris",
      "intro": [
        "In Paris arbeitet Pissarro nach der Natur und studiert an verschiedenen Akademien, darunter der Académie Suisse, wo er Claude Monet, Paul Cézanne und Armand Guillaumin trifft.",
        "Camille Corot wird ein wichtiger Ratgeber; in den Salonkatalogen bezeichnet sich Pissarro als dessen Schüler. 1859 wird erstmals ein Bild von ihm angenommen. 1860 beginnt die Lebensgemeinschaft mit Julie Vellay; 1863 kommt der Sohn Lucien zur Welt, und Pissarro stellt im Salon des Refusés aus."
      ],
      "works": [
        {
          "pid": "pxselfearly",
          "text": [
            "In denselben Jahren entsteht in Paris dieses frühe Selbstbildnis.",
            "Pissarro zeigt sich im Dreiviertelprofil, noch in dunkler Atelierfarbe.",
            "Auch dieses Bild bewahrt das Statens Museum for Kunst."
          ],
          "fact": "1857–1858. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pxfabrique",
          "text": [
            "Um 1862–65 malt Pissarro eine kleine Fabrik in der Landschaft bei Paris, mit Figuren auf dem Weg.",
            "Das Bild entfernt sich von der klassischen Ideallandschaft und hängt heute im Musée d’art moderne et contemporain in Strassburg."
          ],
          "fact": "um 1862–1865. Musée d’art moderne et contemporain, Strassburg."
        },
        {
          "pid": "pxmarne",
          "text": [
            "An der Marne bei Chennevières, südöstlich von Paris, malt Pissarro 1864–65 ein weites Flussbild.",
            "Die dichte, ruhige Farbe zeigt noch den Einfluss Corots.",
            "Das Gemälde gehört zu den Scottish National Galleries in Edinburgh."
          ],
          "fact": "1864–1865. National Galleries of Scotland, Edinburgh."
        },
        {
          "pid": "pxroche",
          "text": [
            "La Roche-Guyon liegt an der Seine, westlich von Paris.",
            "Pissarro malt den Dorfplatz mit Häusern und Bäumen, fest gebaut und noch nah an der älteren Landschaftsmalerei.",
            "Das Bild hängt in der Alten Nationalgalerie in Berlin."
          ],
          "fact": "um 1865–1867. Alte Nationalgalerie, Berlin."
        },
        {
          "pid": "pxindyland",
          "text": [
            "Dieses Landschaftsbild aus der Mitte der 1860er Jahre zeigt einen Weg unter Bäumen, noch in gedämpfter Farbe.",
            "Es gehört zu den frühen französischen Landschaften Pissarros und hängt im Indianapolis Museum of Art."
          ],
          "fact": "um 1864. Indianapolis Museum of Art."
        },
        {
          "pid": "pxmarnewinter",
          "text": [
            "1866 zeigt Pissarro im Salon dieses Winterbild an der Marne: kahle Bäume, ein Dorf, ein weiter, grauer Himmel.",
            "Es ist eines seiner wichtigen frühen Salonbilder und hängt im Art Institute of Chicago."
          ],
          "fact": "1866. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "pxpontoise1",
      "place": "Das erste Mal in Pontoise",
      "when": "1866–1868",
      "map": {
        "x": 118,
        "y": 100
      },
      "mapLabel": "Pontoise",
      "intro": [
        "1866 lässt sich Pissarro mit der Familie in L’Hermitage bei Pontoise nieder, nordwestlich von Paris an der Oise.",
        "Er malt die Hügel, Gärten und das Städtchen in einer noch dichten, fest gebauten Farbe, die an Corot und Courbet erinnert.",
        "Mehrere dieser Landschaften zeigt er im offiziellen Salon."
      ],
      "works": [
        {
          "pid": "pxrueherm",
          "text": [
            "1866, im Jahr des Umzugs nach L’Hermitage, malt Pissarro die Strasse des Weilers mit Häusern und Figuren.",
            "Das Bild gehört zum Tel Aviv Museum of Art."
          ],
          "fact": "1866. Tel Aviv Museum of Art."
        },
        {
          "pid": "pxjallais",
          "text": [
            "Die Côte du Jallais über Pontoise ist eines seiner bekannten Motive aus dem ersten Aufenthalt. 1868 hängt das Bild im Salon.",
            "Heute ist es im Metropolitan Museum of Art in New York."
          ],
          "fact": "1867. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "pxhermgard",
          "text": [
            "Gärten und Häuser von L’Hermitage liegen unter den Hügeln von Pontoise.",
            "Das grosse Landschaftsbild von 1867 bewahrt die Nationalgalerie in Prag."
          ],
          "fact": "1867. Nationalgalerie Prag."
        },
        {
          "pid": "pxhermitage",
          "text": [
            "Wieder L’Hermitage, 1867: fest gesetzte Häuser, Felder und ein bewölkter Himmel.",
            "Das breite Format hängt im Wallraf-Richartz-Museum in Köln."
          ],
          "fact": "1867. Wallraf-Richartz-Museum, Köln."
        },
        {
          "pid": "pxoisebanks",
          "text": [
            "Die Oise fliesst an Pontoise vorbei. 1867 malt Pissarro das Ufer mit Booten und Häusern.",
            "Das Bild gehört zum Denver Art Museum."
          ],
          "fact": "1867. Denver Art Museum."
        },
        {
          "pid": "pxecluse",
          "text": [
            "Weg, Brücke und Fluss bei der Schleuse von Pontoise, ebenfalls 1867. Wie die Rue de l’Hermitage hängt das Bild im Tel Aviv Museum of Art."
          ],
          "fact": "1867. Tel Aviv Museum of Art."
        }
      ]
    },
    {
      "id": "pxlouveciennes",
      "place": "Louveciennes",
      "when": "1869–1870",
      "map": {
        "x": 124,
        "y": 130
      },
      "mapLabel": "Louveciennes",
      "intro": [
        "Im Frühjahr 1869 zieht Pissarro nach Louveciennes, westlich von Paris an der Strasse nach Versailles.",
        "In der Nähe arbeiten auch Monet, Renoir und Sisley.",
        "Er malt das Dorf, die Häuser und die Strasse zu allen Jahreszeiten, heller und lockerer als in den ersten Pontoise-Jahren. 1870 unterbricht der Deutsch-Französische Krieg diese Arbeit."
      ],
      "works": [
        {
          "pid": "pxrdvers69",
          "text": [
            "1869, im ersten Jahr in Louveciennes, malt Pissarro die Strasse nach Versailles im Schnee.",
            "Das Bild im Walters Art Museum in Baltimore steht am Beginn der Louveciennes-Jahre."
          ],
          "fact": "1869. Walters Art Museum, Baltimore."
        },
        {
          "pid": "pxbougival",
          "text": [
            "Bougival liegt nahe Louveciennes an der Seine. 1870 malt Pissarro die Häuser im Herbstlicht.",
            "Das Bild hängt im J. Paul Getty Museum in Los Angeles."
          ],
          "fact": "1870. J. Paul Getty Museum, Los Angeles."
        },
        {
          "pid": "pxviewlouv",
          "text": [
            "Von Louveciennes aus öffnet sich der Blick ins flache Land.",
            "Das Bild der National Gallery in London entstand um 1869–70, kurz vor der Flucht nach England."
          ],
          "fact": "1869–1870. National Gallery, London."
        },
        {
          "pid": "pxvalerien",
          "text": [
            "1870 malt Pissarro Louveciennes mit dem Mont Valérien im Hintergrund; Figuren stehen im Garten vor dem Dorf.",
            "Das Bild gehört zur Alten Nationalgalerie in Berlin."
          ],
          "fact": "1870. Alte Nationalgalerie, Berlin."
        },
        {
          "pid": "pxchateausnow",
          "text": [
            "Der verschneite Park des Château du Pont in Louveciennes, um 1870. Pissarro hält das Dorf im Winter fest.",
            "Das Bild ist im Art Institute of Chicago."
          ],
          "fact": "um 1870. Art Institute of Chicago."
        },
        {
          "pid": "pxlangmatt",
          "text": [
            "Im Frühling 1870 stehen die Kastanien von Louveciennes in hellem Grün.",
            "Das Bild bewahrt das Museum Langmatt in Baden in der Schweiz."
          ],
          "fact": "1870. Museum Langmatt, Baden."
        }
      ]
    },
    {
      "id": "pxlondon",
      "place": "Exil in London",
      "when": "1870–1871",
      "map": {
        "x": 108,
        "y": 80
      },
      "mapLabel": "London",
      "intro": [
        "Vor den preussischen Truppen flieht Pissarro mit Julie und den Kindern nach London.",
        "Die Familie wohnt in Upper Norwood, südlich der Stadt, nahe dem Crystal Palace.",
        "Dort begegnet er dem Händler Paul Durand-Ruel, der sein wichtigster Verleger wird.",
        "Am 14. Juni 1871 heiraten Camille und Julie in London.",
        "Als sie im Sommer zurückkehren, ist das Haus in Louveciennes geplündert; viele frühe Bilder sind zerstört."
      ],
      "works": [
        {
          "pid": "pxfoxhill",
          "text": [
            "In Upper Norwood, wo die Familie Zuflucht findet, malt Pissarro 1870 die Fox Hill unter weitem Himmel.",
            "Das Bild in der National Gallery gehört zu den ersten Londoner Ansichten."
          ],
          "fact": "1870. National Gallery, London."
        },
        {
          "pid": "pxavenue",
          "text": [
            "Die Avenue in Sydenham, 1871, ist eine der bekanntesten Londoner Ansichten Pissarros: eine gerade Strasse, neue Häuser, eine Kutsche.",
            "Sie hängt ebenfalls in der National Gallery."
          ],
          "fact": "1871. National Gallery, London."
        },
        {
          "pid": "pxlordship",
          "text": [
            "Der Bahnhof Lordship Lane in Dulwich, 1871: Schienen, ein Zug, kleine Häuser unter englischem Himmel.",
            "Pissarro malt die Vorstadt, in der er lebt.",
            "Das Bild ist in der Courtauld Gallery."
          ],
          "fact": "1871. Courtauld Gallery, London."
        },
        {
          "pid": "pxcrystal",
          "text": [
            "Der Crystal Palace, nach der Weltausstellung von 1851 nach South London versetzt, steht in der Nähe der Wohnung. 1871 malt Pissarro den Glaspalast und die Strasse davor.",
            "Das Bild gehört zum Art Institute of Chicago."
          ],
          "fact": "1871. Art Institute of Chicago."
        },
        {
          "pid": "pxdulwich",
          "text": [
            "Auch das College in Dulwich hält Pissarro 1871 fest, in der Nähe von Lordship Lane.",
            "Das Bild hängt in der Fondation Bemberg in Toulouse."
          ],
          "fact": "1871. Fondation Bemberg, Toulouse."
        },
        {
          "pid": "pxsydenham",
          "text": [
            "Von einer Anhöhe aus blickt Pissarro 1871 über Felder und Bäume bei Sydenham Hill.",
            "Das Landschaftsbild gehört zum Kimbell Art Museum in Fort Worth."
          ],
          "fact": "1871. Kimbell Art Museum, Fort Worth."
        }
      ]
    },
    {
      "id": "pxpontoise2",
      "place": "Wieder in Pontoise, mit Cézanne",
      "when": "1872–1873",
      "map": {
        "x": 122,
        "y": 108
      },
      "mapLabel": "Pontoise",
      "intro": [
        "1872 lässt sich Pissarro erneut in Pontoise nieder.",
        "Paul Cézanne kommt, um neben ihm zu arbeiten; Pissarro rät ihm zur Arbeit im Freien und zur helleren Farbe.",
        "Die Obstgärten, Gassen und Alleen von Pontoise und noch einige Ansichten von Louveciennes gehören in diese Jahre."
      ],
      "works": [
        {
          "pid": "pxbloom",
          "text": [
            "1872, im Frühling nach der Rückkehr aus London, malt Pissarro einen blühenden Obstgarten in Louveciennes, bevor die Familie wieder nach Pontoise zieht.",
            "Das Bild ist in der National Gallery of Art."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "pxfence",
          "text": [
            "Ein Zaun führt 1872 in eine helle Landschaft.",
            "Das Bild aus demselben Jahr wie der Obstgarten hängt ebenfalls in der National Gallery of Art."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "pxapples",
          "text": [
            "Neben den Landschaften malt Pissarro 1872 auch dieses Stilleben mit Äpfeln, Krug und Glas.",
            "Es hängt im Metropolitan Museum of Art."
          ],
          "fact": "1872. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "pxpoulies",
          "text": [
            "Die Ruelle des Poulies in Pontoise, 1872: eine Gasse, Häuser, ein heller Himmel.",
            "Pissarro ist wieder in der Stadt, in der bald darauf auch Cézanne arbeitet.",
            "Das Bild hängt im Musée d’Orsay."
          ],
          "fact": "1872. Musée d’Orsay, Paris."
        },
        {
          "pid": "pxboulevard",
          "text": [
            "Der Boulevard des Fossés in Pontoise, 1872, mit Bäumen und passierenden Figuren.",
            "Das Bild gehört zum Norton Simon Museum in Pasadena."
          ],
          "fact": "1872. Norton Simon Museum, Pasadena."
        },
        {
          "pid": "pxchestnut72",
          "text": [
            "Noch einmal Louveciennes, 1872: ein Kastanienhain, kurz vor oder um den erneuten Umzug nach Pontoise.",
            "Das Bild ist im Nelson-Atkins Museum of Art in Kansas City."
          ],
          "fact": "1872. Nelson-Atkins Museum of Art, Kansas City."
        }
      ]
    },
    {
      "id": "pximpress",
      "place": "Die Impressionisten-Ausstellungen",
      "when": "1874–1877",
      "map": {
        "x": 138,
        "y": 112
      },
      "mapLabel": "1874",
      "intro": [
        "Am 15. April 1874 eröffnet in Nadars ehemaligem Atelier, 35 boulevard des Capucines, die erste Ausstellung der späteren Impressionisten.",
        "Pissarro gehört zu den Organisatoren und ist der einzige Maler, der an allen acht Ausstellungen bis 1886 teilnimmt. 1874 zeigt er unter anderem die «Gelée blanche», 1877 «Die roten Dächer».",
        "In diesen Jahren besucht er auch den Freund Ludovic Piette in Montfoucault."
      ],
      "works": [
        {
          "pid": "pxgelee",
          "text": [
            "Die «Gelée blanche» von 1873 zeigt die alte Strasse nach Ennery bei Pontoise, mit Reif auf dem Acker.",
            "Pissarro stellt das Bild 1874 auf der ersten Impressionisten-Ausstellung aus.",
            "Es hängt im Musée d’Orsay."
          ],
          "fact": "1873. Musée d’Orsay, Paris."
        },
        {
          "pid": "pxtroofs",
          "text": [
            "1877 malt Pissarro die roten Dächer von L’Hermitage zwischen den Bäumen.",
            "Das Bild erscheint auf der dritten Impressionisten-Ausstellung und gehört zu seinen bekanntesten Werken.",
            "Es hängt im Musée d’Orsay."
          ],
          "fact": "1877. Musée d’Orsay, Paris."
        },
        {
          "pid": "pxboefs",
          "text": [
            "Die bewaldete Côte des Bœufs lag nahe dem Haus in L’Hermitage. 1877, im Jahr der dritten Ausstellung, malt Pissarro den Hügel durch ein Gitter aus Stämmen.",
            "Das Bild ist in der National Gallery in London."
          ],
          "fact": "1877. National Gallery, London."
        },
        {
          "pid": "pxdiligence",
          "text": [
            "Auf der Strasse nach Ennery kommt 1877 eine Postkutsche daher.",
            "Pissarro bleibt den Wegen um L’Hermitage treu.",
            "Das Bild hängt im Musée d’Orsay."
          ],
          "fact": "1877. Musée d’Orsay, Paris."
        },
        {
          "pid": "pxpiettex",
          "text": [
            "Ludovic Piette, ein Freund aus der Académie Suisse, bewirtschaftet einen Hof in Montfoucault in der Mayenne. 1874 malt Pissarro das Haus im Schnee.",
            "Das Bild gehört zum Clark Art Institute in Williamstown."
          ],
          "fact": "1874. Clark Art Institute, Williamstown."
        },
        {
          "pid": "pxcross",
          "text": [
            "1876 malt Pissarro eine Kreuzung in L’Hermitage, mit Häusern, Bäumen und Figuren.",
            "Das Bild hängt im Musée d’art moderne André Malraux in Le Havre."
          ],
          "fact": "1876. Musée d’art moderne André Malraux, Le Havre."
        }
      ]
    },
    {
      "id": "pxosny",
      "place": "Von Pontoise nach Osny",
      "when": "1878–1884",
      "map": {
        "x": 114,
        "y": 92
      },
      "mapLabel": "Osny",
      "intro": [
        "Pissarro bleibt der Gruppe der Impressionisten treu und malt weiter in Pontoise und Umgebung, oft mit Figuren auf dem Feld und im Garten. 1882 verlässt die Familie Pontoise und zieht nach Osny.",
        "Im Herbst 1883 hält er sich in Rouen auf und malt die Quais der Stadt. 1884 siedelt er nach Éragny-sur-Epte über.",
        "Im nächsten Teil folgen Éragny, der Neoimpressionismus und die Stadtbilder von Paris, Rouen und Le Havre."
      ],
      "works": [
        {
          "pid": "pxwoods",
          "text": [
            "1879, in den späteren Pontoise-Jahren, malt Pissarro den Waldrand bei L’Hermitage in lockerer, heller Farbe.",
            "Das Bild gehört zum Cleveland Museum of Art."
          ],
          "fact": "1879. Cleveland Museum of Art."
        },
        {
          "pid": "pxstrawhat",
          "text": [
            "1881 sitzt ein Bauernmädchen im Gras, mit Strohhut und blauer Schürze.",
            "In diesen Jahren rücken Feldarbeit und ländliche Figuren stärker in den Vordergrund.",
            "Das Bild ist in der National Gallery of Art."
          ],
          "fact": "1881. National Gallery of Art, Washington."
        },
        {
          "pid": "pxosnychest",
          "text": [
            "1882 zieht die Familie nach Osny, nahe Pontoise. 1883 malt Pissarro die Kastanien dort.",
            "Das Bild bewahrt das Kunstmuseum Basel."
          ],
          "fact": "1883. Kunstmuseum Basel."
        },
        {
          "pid": "pxrouen",
          "text": [
            "Im Herbst 1883 hält sich Pissarro in Rouen auf und malt die Quais der Seine mit Schiffen und Häusern.",
            "Es ist ein früher Blick auf die Stadt, deren Hafen und Strassen er später noch oft malen wird.",
            "Das Bild ist in der Courtauld Gallery."
          ],
          "fact": "1883. Courtauld Gallery, London."
        },
        {
          "pid": "pxosnymill",
          "text": [
            "1884 malt Pissarro Feld und Mühle in Osny, im letzten Jahr vor dem Umzug nach Éragny.",
            "Das Bild gehört zum RISD Museum in Providence."
          ],
          "fact": "1884. RISD Museum, Providence."
        },
        {
          "pid": "pxeragnyent",
          "text": [
            "1884 zieht Pissarro nach Éragny-sur-Epte.",
            "Dieses Bild zeigt den Ortseingang im selben Jahr: eine Dorfstrasse, der Kirchturm, der gelbe Himmel.",
            "Es schliesst den ersten Teil und hängt im Pola Museum of Art in Hakone.",
            "Im nächsten Teil folgen die Jahre in Éragny, der Neoimpressionismus und die Stadtbilder."
          ],
          "fact": "1884. Pola Museum of Art, Hakone."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
