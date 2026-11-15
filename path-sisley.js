// v9.8 Alfred Sisley life journey, Part 1 (1839–1880).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "sychest65",
    "title": "Kastanieallee in La Celle-Saint-Cloud",
    "artist": "Alfred Sisley",
    "year": "1865",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Allee de chataigniers - Alfred Sisley.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sychestord",
    "title": "Kastanieallee in La Celle-Saint-Cloud",
    "artist": "Alfred Sisley",
    "year": "1865",
    "museum": "Museum Ordrupgaard, Charlottenlund",
    "source": "Wikimedia Commons: «Alfred Sisley 037.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "symonetf",
    "title": "Der Maler Monet im Wald von Fontainebleau",
    "artist": "Alfred Sisley",
    "year": "um 1865",
    "museum": "Saarlandmuseum, Saarbrücken",
    "source": "Wikimedia Commons: «Alfred Sisley - Le peintre Monet dans la Forêt de Fontainebleau.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sychest67",
    "title": "Kastanieallee bei La Celle-Saint-Cloud",
    "artist": "Alfred Sisley",
    "year": "1867",
    "museum": "Southampton City Art Gallery",
    "source": "Wikimedia Commons: «Alfred Sisley - Avenue of Chestnut Trees near La Celle-St-Cloud.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sywoods",
    "title": "Frauen, die in den Wald gehen",
    "artist": "Alfred Sisley",
    "year": "1866",
    "museum": "Artizon Museum, Tokio",
    "source": "Wikimedia Commons: «Alfred Sisley - Women Going to the Woods - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "symarlott",
    "title": "Dorfstrasse in Marlotte",
    "artist": "Alfred Sisley",
    "year": "1866",
    "museum": "Buffalo AKG Art Museum",
    "source": "Wikimedia Commons: «Alfred Sisley - Rue de village à Marlotte (Village Street in Marlotte) - 1956-1 - Albright–Knox Art Gallery.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "sybarges",
    "title": "Kähne auf dem Canal Saint-Martin",
    "artist": "Alfred Sisley",
    "year": "1870",
    "museum": "Sammlung Oskar Reinhart, Winterthur",
    "source": "Wikimedia Commons: «Péniches sur le canal Saint-Martin - Alfred Sisley - Paris 1863 – 1874- Revolution in der Kunst-4709 (without picture frame).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syearlysnow",
    "title": "Erster Schnee in Louveciennes",
    "artist": "Alfred Sisley",
    "year": "1870",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Alfred Sisley 026.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syvilleneuve",
    "title": "Die Brücke von Villeneuve-la-Garenne",
    "artist": "Alfred Sisley",
    "year": "1872",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Alfred Sisley 008.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sylouvsnow",
    "title": "Louveciennes im Schnee",
    "artist": "Alfred Sisley",
    "year": "1872",
    "museum": "Norton Simon Museum, Pasadena",
    "source": "Wikimedia Commons: «Alfred Sisley - Louveciennes in the Snow.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybougival",
    "title": "Die Seine bei Bougival",
    "artist": "Alfred Sisley",
    "year": "1872",
    "museum": "Yale University Art Gallery, New Haven",
    "source": "Wikimedia Commons: «La Seine à Bougival by Alfred Sisley 1872.jpeg», Public domain (gemeinfrei)"
  },
  {
    "id": "syflood72",
    "title": "Hochwasser in Port-Marly",
    "artist": "Alfred Sisley",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Flood at Port-Marly A18691.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sycanal72",
    "title": "Der Canal Saint-Martin",
    "artist": "Alfred Sisley",
    "year": "1872",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «89 Alfred Sisley, Le Canal Saint Martin, 1872.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "systdenis",
    "title": "Die Insel Saint-Denis",
    "artist": "Alfred Sisley",
    "year": "1872",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «\"L'île Saint-Denis\", Alfred Sisley, 1872. (37904761251).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sylandlouv",
    "title": "Landschaft bei Louveciennes",
    "artist": "Alfred Sisley",
    "year": "1873",
    "museum": "National Museum of Western Art, Tokio",
    "source": "Wikimedia Commons: «Alfred Sisley - Landscape at Louveciennes - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syturnroad",
    "title": "Eine Biegung der Strasse",
    "artist": "Alfred Sisley",
    "year": "1873",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Alfred Sisley - A Turn in the Road - 1947.112 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syspringb",
    "title": "Frühling in Bougival",
    "artist": "Alfred Sisley",
    "year": "1873",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Landscape (Spring at Bougival), by Alfred Sisley.JPG», Public domain (gemeinfrei)"
  },
  {
    "id": "syautumnb",
    "title": "Herbst: Ufer der Seine bei Bougival",
    "artist": "Alfred Sisley",
    "year": "1873",
    "museum": "Montreal Museum of Fine Arts",
    "source": "Wikimedia Commons: «Alfred Sisley, L'automne - Bords de la Seine pres Bougival (Autumn - Banks of the Seine near Bougival), 1873.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syvillevray",
    "title": "Strasse in Ville-d’Avray",
    "artist": "Alfred Sisley",
    "year": "1873",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Alfred Sisley - Street in Ville-d'Array - 2019.67.26.McD - Dallas Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syfog",
    "title": "Nebel in Voisins",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Alfred Sisley - Fog, Voisins - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysnowphill",
    "title": "Schnee in Louveciennes",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "The Phillips Collection, Washington",
    "source": "Wikimedia Commons: «Alfred Sisley - Snow at Louveciennes - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sychenil",
    "title": "Place du Chenil in Marly, Schnee",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "Musée des Beaux-Arts, Rouen",
    "source": "Wikimedia Commons: «Place du Chenil à Marly, effet de neige.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syroadlouv",
    "title": "Die Strasse nach Louveciennes",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "Königliche Museen der Schönen Künste, Brüssel",
    "source": "Wikimedia Commons: «Sisley-Route de Louveciennes.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syaqueduct",
    "title": "Der Aquädukt von Marly",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "Toledo Museum of Art",
    "source": "Wikimedia Commons: «Alfred Sisley - Aqueduct at Marly - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sythames",
    "title": "Die Themse bei Hampton Court",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Alfred Sisley - The Thames at Hampton Court - 1955.560 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "symolesey",
    "title": "Die Schleuse von Molesey, Hampton Court",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "National Galleries of Scotland, Edinburgh",
    "source": "Wikimedia Commons: «Alfred Sisley - Molesey Weir, Hampton Court - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syroadhamp",
    "title": "Die Strasse nach Hampton Court",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "Neue Pinakothek, München",
    "source": "Wikimedia Commons: «Alfred Sisley The Road to Hampton Court 1874 Neue Pinakothek Munich München.JPG», Public domain (gemeinfrei)"
  },
  {
    "id": "syregatta",
    "title": "Die Regatta von Molesey",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Alfred Sisley 050.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybrhamp",
    "title": "Die Brücke von Hampton Court",
    "artist": "Alfred Sisley",
    "year": "1874",
    "museum": "Wallraf-Richartz-Museum, Köln",
    "source": "Wikimedia Commons: «Alfred Sisley 009.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syterrace",
    "title": "Die Terrasse von Saint-Germain im Frühling",
    "artist": "Alfred Sisley",
    "year": "1875",
    "museum": "Walters Art Museum, Baltimore",
    "source": "Wikimedia Commons: «Alfred Sisley - The Terrace at Saint-Germain, Spring - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syversailles",
    "title": "Die Strasse von Versailles nach Saint-Germain",
    "artist": "Alfred Sisley",
    "year": "1875",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Alfred Sisley - The Road from Versailles to Saint-Germain - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "symeadow",
    "title": "Wiese",
    "artist": "Alfred Sisley",
    "year": "1875",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Meadow, Alfred Sisley, 1875.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syinstitut",
    "title": "Die Seine mit dem Institut de France und dem Pont des Arts",
    "artist": "Alfred Sisley",
    "year": "1875",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Alfred Sisley - Landscape along the Seine with the Institut de France and the Pont des Arts - 1979.1030 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sypiles",
    "title": "Die Seine bei Port-Marly, Sandhaufen",
    "artist": "Alfred Sisley",
    "year": "1875",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Alfred Sisley - The Seine at Port-Marly, Piles of Sand - 1933.1177 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sywatering",
    "title": "Die Tränke in Marly",
    "artist": "Alfred Sisley",
    "year": "1875",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Alfred Sisley - Watering Place at Marly - 1971.875 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syfloodrouen",
    "title": "Die Überschwemmung in Port-Marly",
    "artist": "Alfred Sisley",
    "year": "1876",
    "museum": "Musée des Beaux-Arts, Rouen",
    "source": "Wikimedia Commons: «Alfred Sisley 062.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syfloodhou",
    "title": "Die Flut auf der Strasse nach Saint-Germain",
    "artist": "Alfred Sisley",
    "year": "1876",
    "museum": "Museum of Fine Arts, Houston",
    "source": "Wikimedia Commons: «Alfred Sisley - The Flood on the Road to Saint-Germain - 74.146 - Museum of Fine Arts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "symarlyview",
    "title": "Blick auf Marly-le-Roi von Cœur-Volant",
    "artist": "Alfred Sisley",
    "year": "1876",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «View of Marly-le-Roi from Coeur-Volant MET DP130325.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "sysawyers",
    "title": "Die Langsägemänner",
    "artist": "Alfred Sisley",
    "year": "1876",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Alfred Sisley - Les scieurs de long - PPP484 - Musée des Beaux-Arts de la ville de Paris.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybankaut",
    "title": "Seineufer im Herbst",
    "artist": "Alfred Sisley",
    "year": "1876",
    "museum": "Städel Museum, Frankfurt",
    "source": "Wikimedia Commons: «1876 Sisley Seine-Ufer im Herbst anagoria.JPG», Public domain (gemeinfrei)"
  },
  {
    "id": "systreetmarly",
    "title": "Eine Strasse in Marly",
    "artist": "Alfred Sisley",
    "year": "1876",
    "museum": "Kunsthalle Mannheim",
    "source": "Wikimedia Commons: «Alfred Sisley - Une rue à Marly.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysevres",
    "title": "Die Brücke von Sèvres",
    "artist": "Alfred Sisley",
    "year": "1877",
    "museum": "Nationalgalerie, Prag",
    "source": "Wikimedia Commons: «1877 Sisley Die Brücke bei Sèvres Nationalgalerie Prag anagoria.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysuresnes",
    "title": "Die Seine bei Suresnes",
    "artist": "Alfred Sisley",
    "year": "1877",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «La Seine à Suresnes d'Alfred Sisley.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syrest",
    "title": "Ruhe am Bach, Waldrand",
    "artist": "Alfred Sisley",
    "year": "1878",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Alfred Sisley - Rest along the Stream. Edge of the Wood - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syallee",
    "title": "Kastanieallee",
    "artist": "Alfred Sisley",
    "year": "1878",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Allée of Chestnut Trees MET DT3139.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "syfirstsnow",
    "title": "Erster Schnee in Veneux-Nadon",
    "artist": "Alfred Sisley",
    "year": "1878",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «First Snow at Veneux-Nadon A31114.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybanksby",
    "title": "Seineufer bei By",
    "artist": "Alfred Sisley",
    "year": "1880",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Alfred Sisley - Banks of the Seine at By - 1955.534 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "systmammes",
    "title": "Weg an der Seine bei Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1880",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Alfred Sisley - Road Along the Seine at Saint-Mammes - 1985.R.69 - Dallas Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sytimber",
    "title": "Holzlager in Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1880",
    "museum": "Hammer Museum, Los Angeles",
    "source": "Wikimedia Commons: «Timber Yard at Saint-Mammès - Alfred Sisley.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syhills",
    "title": "Auf den Höhen von Moret im Frühling, Morgen",
    "artist": "Alfred Sisley",
    "year": "1880",
    "museum": "Princeton University Art Museum",
    "source": "Wikimedia Commons: «Alfred Sisley - On the Hills of Moret in Spring - Morning - y1991-65 - Princeton University Art Museum.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "sisley",
  "name": "Sisley",
  "title": "Alfred Sisleys Lebensweg",
  "life": "1839–1899",
  "part": "Teil 1 · 1839–1880",
  "subtitle": "Von Paris nach Veneux-Nadon",
  "cover": "syterrace",
  "intro": "Alfred Sisley wird am 30. Oktober 1839 in Paris geboren, als Sohn britischer Eltern. Dieser erste Teil folgt ihm von der Handelslehre in London und dem Atelier Gleyre mit Monet, Renoir und Bazille über die frühen Bilder in Fontainebleau und Marlotte, die Familie mit Eugénie, den Krieg von 1870/71 und die Jahre in Louveciennes und Marly bis zur Flut von 1876 und zum Umzug an den Loing 1880.",
  "ending": [
    "Anfang 1880 lässt sich Sisley mit Eugénie und den Kindern in Veneux-Nadon nieder, nahe Moret-sur-Loing. Dort findet er die Landschaft, bei der er bleiben wird.",
    "Im nächsten Teil folgen die Jahre in Moret-sur-Loing, die Armut, Eugénie, der späte Versuch der Einbürgerung und Sisleys Tod 1899."
  ],
  "epilogue": "Im nächsten Teil folgen die Jahre in Moret-sur-Loing, die Armut, Eugénie, der späte Versuch der Einbürgerung und Sisleys Tod 1899.",
  "map": {
    "viewBox": "0 0 200 200",
    "lands": [
      "M22,22 C34,10 52,12 58,28 C54,42 36,46 26,38 C16,32 14,24 22,22 Z",
      "M72,48 C100,28 138,36 152,64 C164,96 156,140 132,166 C100,186 70,168 62,132 C56,100 58,68 72,48 Z"
    ]
  },
  "stations": [
    {
      "id": "syparis",
      "place": "Paris, London und Gleyre",
      "when": "1839–1863",
      "map": {
        "x": 108,
        "y": 86
      },
      "mapLabel": "Paris",
      "intro": [
        "Alfred Sisley wird am 30. Oktober 1839 in Paris geboren, als zweites Kind des englischen Tuchhändlers William Sisley und von Felicia Sell. 1857 schickt ihn der Vater nach London, damit er den Handel lernt; bis 1860 bleibt er in England und sieht dort viel Malerei.",
        "Zurück in Frankreich beschliesst er, Maler zu werden. 1862 tritt er in das Atelier von Charles Gleyre in Paris ein. Dort lernt er Claude Monet, Pierre-Auguste Renoir und Frédéric Bazille kennen. 1863 schliesst Gleyre die Werkstatt."
      ],
      "works": [
        {
          "pid": "sychest65",
          "text": [
            "Eine lange Allee aus Kastanien führt in die Tiefe, das Licht fällt zwischen den Stämmen auf den Weg.",
            "Es ist eines der frühesten erhaltenen Bilder Sisleys.",
            "Das Bild ist im Petit Palais in Paris."
          ],
          "fact": "1865. Petit Palais, Paris."
        },
        {
          "pid": "sychestord",
          "text": [
            "Dieselbe Gegend, ein anderer Blick: die Bäume stehen dichter, der Weg wird schmaler.",
            "Sisley malt die Allee mehrfach.",
            "Das Bild ist im Museum Ordrupgaard in Charlottenlund."
          ],
          "fact": "1865. Museum Ordrupgaard, Charlottenlund."
        },
        {
          "pid": "symonetf",
          "text": [
            "Zwischen Bäumen sitzt ein Maler an der Staffelei.",
            "Es ist Claude Monet, Sisleys Freund aus dem Atelier Gleyre.",
            "Das Bild ist im Saarlandmuseum in Saarbrücken."
          ],
          "fact": "um 1865. Saarlandmuseum, Saarbrücken."
        },
        {
          "pid": "sychest67",
          "text": [
            "Unter hohem Sommerhimmel liegt die Allee in warmem Licht.",
            "Dieses Bild hing 1868 im Salon.",
            "Es ist in der Southampton City Art Gallery."
          ],
          "fact": "1867. Southampton City Art Gallery."
        }
      ]
    },
    {
      "id": "symarlott",
      "place": "Fontainebleau und der Salon",
      "when": "1865–1870",
      "map": {
        "x": 120,
        "y": 110
      },
      "mapLabel": "Marlotte",
      "intro": [
        "Mit seinen Freunden malt Sisley im Wald von Fontainebleau, in Chailly und in Marlotte. 1866 nimmt der Salon zwei Bilder von ihm an: eine Dorfstrasse in Marlotte und Frauen, die in den Wald gehen.",
        "Seit 1866 lebt er mit Eugénie Lescouezec zusammen. Am 17. Juni 1867 wird ihr Sohn Pierre geboren, am 29. Januar 1869 die Tochter Jeanne-Adèle. 1868 hängt die Kastanieallee von La Celle-Saint-Cloud im Salon, 1870 zwei Ansichten des Canal Saint-Martin."
      ],
      "works": [
        {
          "pid": "sywoods",
          "text": [
            "Zwei Frauen in weiten Kleidern gehen einen Feldweg entlang, hinten liegt der Wald.",
            "Das Bild wurde 1866 im Salon gezeigt.",
            "Es ist im Artizon Museum in Tokio."
          ],
          "fact": "1866. Artizon Museum, Tokio."
        },
        {
          "pid": "symarlott",
          "text": [
            "In der Dorfstrasse von Marlotte stehen Häuser und ein Zaun unter einem weiten Himmel.",
            "Auch dieses Bild nahm der Salon 1866 an.",
            "Es ist im Buffalo AKG Art Museum."
          ],
          "fact": "1866. Buffalo AKG Art Museum."
        },
        {
          "pid": "sybarges",
          "text": [
            "Lastkähne liegen am Canal Saint-Martin in Paris, die Bäume spiegeln sich im Wasser.",
            "Sisley zeigte 1870 zwei Kanalbilder im Salon.",
            "Dieses Bild ist in der Sammlung Oskar Reinhart in Winterthur."
          ],
          "fact": "1870. Sammlung Oskar Reinhart, Winterthur."
        },
        {
          "pid": "syearlysnow",
          "text": [
            "Ein leichter Schnee liegt auf Gärten und Dächern, der Himmel ist blass.",
            "Sisley malt Louveciennes schon vor dem Krieg.",
            "Das Bild ist im Museum of Fine Arts in Boston."
          ],
          "fact": "1870. Museum of Fine Arts, Boston."
        }
      ]
    },
    {
      "id": "sywar",
      "place": "Krieg und Neubeginn",
      "when": "1870–1872",
      "map": {
        "x": 98,
        "y": 82
      },
      "mapLabel": "Bougival",
      "intro": [
        "Im Herbst 1870 zerstören preussische Soldaten Sisleys Haus in Bougival. Er verliert dort alles, was er besitzt, und flüchtet nach Paris, wo er die Belagerung und die Kommune erlebt. Im November 1870 fällt sein Freund Frédéric Bazille im Krieg.",
        "Nach dem Krieg ist das Geschäft seines Vaters ruiniert. Sisley hat fortan wenig Geld. 1872 malt er mit Monet in Argenteuil und an der Seine bei Villeneuve-la-Garenne. Im Dezember 1872 hält er in Port-Marly eine Überschwemmung fest."
      ],
      "works": [
        {
          "pid": "syvilleneuve",
          "text": [
            "Eine neue eiserne Brücke überspannt die Seine, Segelboote gleiten darunter durch.",
            "Sisley malt den Fluss 1872 bei Villeneuve-la-Garenne.",
            "Das Bild ist im Metropolitan Museum of Art in New York."
          ],
          "fact": "1872. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "sylouvsnow",
          "text": [
            "Eine verschneite Strasse führt an Gärten und Häusern vorbei, der Schnee leuchtet blau und weiss.",
            "Das Bild ist im Norton Simon Museum in Pasadena."
          ],
          "fact": "1872. Norton Simon Museum, Pasadena."
        },
        {
          "pid": "sybougival",
          "text": [
            "Der Fluss biegt sich unter einem hellen Himmel, am Ufer stehen Bäume und ein Weg.",
            "Sisley kennt Bougival gut, auch nach dem Verlust seines Hauses.",
            "Das Bild ist in der Yale University Art Gallery in New Haven."
          ],
          "fact": "1872. Yale University Art Gallery, New Haven."
        },
        {
          "pid": "syflood72",
          "text": [
            "Die Strasse vor einem Weinhaus steht unter Wasser, ein Nachen fährt daran vorbei.",
            "Sisley hat das Bild 1872 datiert.",
            "Es ist in der National Gallery of Art in Washington."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "sycanal72",
          "text": [
            "Der Kanal liegt ruhig zwischen Bäumen und Häusern, ein Kahn liegt am Ufer.",
            "Sisley kehrt nach dem Krieg an den Kanal zurück, den er 1870 im Salon gezeigt hat.",
            "Das Bild ist im Musée d’Orsay in Paris."
          ],
          "fact": "1872. Musée d’Orsay, Paris."
        },
        {
          "pid": "systdenis",
          "text": [
            "Eine flache Insel liegt in der Seine, Fabrikschornsteine stehen am Horizont.",
            "Sisley zeigt die Landschaft nahe Paris ohne Schmuck.",
            "Das Bild ist im Musée d’Orsay in Paris."
          ],
          "fact": "1872. Musée d’Orsay, Paris."
        }
      ]
    },
    {
      "id": "sylouve",
      "place": "Louveciennes",
      "when": "1873",
      "map": {
        "x": 96,
        "y": 78
      },
      "mapLabel": "Louveciennes",
      "intro": [
        "In den frühen 1870er Jahren wohnt Sisley in Louveciennes, westlich von Paris, und malt die Wege, Gärten und das Ufer der Seine bei Bougival bei jedem Wetter.",
        "Am 27. Dezember 1873 gründet er mit Monet, Renoir, Camille Pissarro, Berthe Morisot und Paul Cézanne die Société anonyme coopérative des artistes peintres, sculpteurs, graveurs. Sie wollen ihre Bilder selbst zeigen, ohne den Salon."
      ],
      "works": [
        {
          "pid": "sylandlouv",
          "text": [
            "Ein Weg führt durch Felder und Bäume, der Himmel ist weit und hell.",
            "Sisley malt die Umgebung von Louveciennes in ruhigen Farben.",
            "Das Bild ist im National Museum of Western Art in Tokio."
          ],
          "fact": "1873. National Museum of Western Art, Tokio."
        },
        {
          "pid": "syturnroad",
          "text": [
            "Die Strasse biegt hinter Bäumen ab, ein paar Figuren gehen den Weg entlang.",
            "Sisley fängt das alltägliche Louveciennes ein.",
            "Das Bild ist im Art Institute of Chicago."
          ],
          "fact": "1873. Art Institute of Chicago."
        },
        {
          "pid": "syspringb",
          "text": [
            "Frisches Grün steht am Fluss, das Licht ist klar.",
            "Sisley malt den Frühling an der Seine bei Bougival.",
            "Das Bild ist im Philadelphia Museum of Art."
          ],
          "fact": "1873. Philadelphia Museum of Art."
        },
        {
          "pid": "syautumnb",
          "text": [
            "Das Laub ist gelb und braun, der Fluss liegt ruhig unter einem weichen Himmel.",
            "Das Bild ist im Montreal Museum of Fine Arts."
          ],
          "fact": "1873. Montreal Museum of Fine Arts."
        },
        {
          "pid": "syvillevray",
          "text": [
            "Eine enge Strasse steigt zwischen Häusern hinauf, die Wände sind hell im Sonnenlicht.",
            "Ville-d’Avray liegt nahe Sèvres, westlich von Paris.",
            "Das Bild ist im Dallas Museum of Art."
          ],
          "fact": "1873. Dallas Museum of Art."
        }
      ]
    },
    {
      "id": "syimpres",
      "place": "Die erste Impressionisten-Ausstellung",
      "when": "1874",
      "map": {
        "x": 94,
        "y": 80
      },
      "mapLabel": "Nadar",
      "intro": [
        "Am 15. April 1874 öffnet die erste Ausstellung der Gesellschaft in Nadars Atelier am Boulevard des Capucines. Sisley zeigt fünf Landschaften. Der Verkauf ist schwach, aber sein Name steht nun bei den neuen Malern.",
        "Er malt weiter in Louveciennes und im benachbarten Marly: Nebel in Voisins, Schnee in den Strassen, den Aquädukt von Marly."
      ],
      "works": [
        {
          "pid": "syfog",
          "text": [
            "Im Nebel stehen kahl Bäume und ein Zaun, eine Frau geht den Weg entlang.",
            "Voisins ist ein Weiler von Louveciennes.",
            "Das Bild ist im Musée d’Orsay in Paris."
          ],
          "fact": "1874. Musée d’Orsay, Paris."
        },
        {
          "pid": "sysnowphill",
          "text": [
            "Hinter einem Gittertor liegt ein verschneiter Garten, die Häuser sind still.",
            "Sisley malt den Schnee in klaren, kühlen Tönen.",
            "Das Bild ist in der Phillips Collection in Washington."
          ],
          "fact": "1874. The Phillips Collection, Washington."
        },
        {
          "pid": "sychenil",
          "text": [
            "Der kleine Platz von Marly liegt unter Schnee, die Häuser stehen fest um ihn.",
            "Sisley malt den Ort, in den die Familie im Winter 1874 zieht.",
            "Das Bild ist im Musée des Beaux-Arts in Rouen."
          ],
          "fact": "1874. Musée des Beaux-Arts, Rouen."
        },
        {
          "pid": "syroadlouv",
          "text": [
            "Ein sandiger Weg führt an Mauern und Bäumen vorbei in die Ferne.",
            "Sisley zeigt die alltägliche Strasse ohne Ereignis.",
            "Das Bild ist in den Königlichen Museen der Schönen Künste in Brüssel."
          ],
          "fact": "1874. Königliche Museen der Schönen Künste, Brüssel."
        },
        {
          "pid": "syaqueduct",
          "text": [
            "Die grosse Wasserleitung von Marly zieht sich über die Landschaft, darunter liegt das Dorf.",
            "Das Bauwerk stammt noch aus der Zeit des Königs Ludwig XIV. Das Bild ist im Toledo Museum of Art."
          ],
          "fact": "1874. Toledo Museum of Art."
        }
      ]
    },
    {
      "id": "sylondon",
      "place": "An der Themse",
      "when": "1874",
      "map": {
        "x": 42,
        "y": 36
      },
      "mapLabel": "London",
      "intro": [
        "Von Juli bis Oktober 1874 hält sich Sisley dank dem Sänger und Sammler Jean-Baptiste Faure in England auf. In London und vor allem westlich der Stadt, bei Hampton Court und East Molesey, malt er die Themse, Brücken, die Schleuse und eine Regatta.",
        "Es ist seine erste Malerreise nach England, seit er als junger Mann dort den Handel lernen sollte. Im Winter zieht die Familie nach Marly-le-Roi."
      ],
      "works": [
        {
          "pid": "sythames",
          "text": [
            "Die Themse liegt breit unter einem bewegten Himmel, am Ufer stehen Bäume.",
            "Sisley malt den englischen Fluss im Sommer 1874.",
            "Das Bild ist im Clark Art Institute in Williamstown."
          ],
          "fact": "1874. Clark Art Institute, Williamstown."
        },
        {
          "pid": "symolesey",
          "text": [
            "Wasser stürzt über die Schleuse, Menschen stehen auf dem Steg.",
            "Sisley fängt das Licht auf dem bewegten Wasser.",
            "Das Bild ist in den National Galleries of Scotland in Edinburgh."
          ],
          "fact": "1874. National Galleries of Scotland, Edinburgh."
        },
        {
          "pid": "syroadhamp",
          "text": [
            "Ein Weg führt auf die Bäume und das Schlossgelände zu, der Himmel ist hell.",
            "Sisley malt die Umgebung von Hampton Court.",
            "Das Bild ist in der Neuen Pinakothek in München."
          ],
          "fact": "1874. Neue Pinakothek, München."
        },
        {
          "pid": "syregatta",
          "text": [
            "Boote ziehen über die Themse, am Ufer stehen Zuschauer unter Bäumen.",
            "Sisley malt das Fest auf dem Wasser.",
            "Das Bild ist im Musée d’Orsay in Paris."
          ],
          "fact": "1874. Musée d’Orsay, Paris."
        },
        {
          "pid": "sybrhamp",
          "text": [
            "Die Brücke überspannt die Themse in mehreren Bögen, Boote liegen am Ufer.",
            "Sisley wählt einen tiefen Blick über das Wasser.",
            "Das Bild ist im Wallraf-Richartz-Museum in Köln."
          ],
          "fact": "1874. Wallraf-Richartz-Museum, Köln."
        }
      ]
    },
    {
      "id": "symarly",
      "place": "Marly-le-Roi und Saint-Germain",
      "when": "1875–1876",
      "map": {
        "x": 92,
        "y": 74
      },
      "mapLabel": "Marly",
      "intro": [
        "Von Marly-le-Roi aus malt Sisley die Terrasse und die Strasse nach Saint-Germain, Wiesen, den Wasserplatz und die Seine mit Sandhaufen bei Port-Marly.",
        "Die Bilder sind hell und weit. Sisley bleibt bei der Landschaft, während Freunde wie Monet und Renoir auch andere Motive suchen."
      ],
      "works": [
        {
          "pid": "syterrace",
          "text": [
            "Von der Höhe blickt man über die Seine-Schleife und die weite Ebene, der Frühling liegt hell auf dem Land.",
            "Es ist eines von Sisleys grössten Landschaften.",
            "Das Bild ist im Walters Art Museum in Baltimore."
          ],
          "fact": "1875. Walters Art Museum, Baltimore."
        },
        {
          "pid": "syversailles",
          "text": [
            "Eine gerade Strasse zieht sich durch Felder und Bäume, der Himmel nimmt den grössten Teil des Bildes ein.",
            "Sisley malt die Strasse bei Marly.",
            "Das Bild ist im J. Paul Getty Museum in Los Angeles."
          ],
          "fact": "1875. J. Paul Getty Museum, Los Angeles."
        },
        {
          "pid": "symeadow",
          "text": [
            "Eine grüne Wiese liegt unter einem leichten Himmel, Bäume begrenzen das Feld.",
            "Sisley hält die stille Fläche fest, ohne eine Geschichte.",
            "Das Bild ist in der National Gallery of Art in Washington."
          ],
          "fact": "1875. National Gallery of Art, Washington."
        },
        {
          "pid": "syinstitut",
          "text": [
            "Im Dunst sieht man das Institut de France und die Brücke Pont des Arts, der Fluss liegt im Vordergrund.",
            "Sisley malt hier einen Blick auf Paris.",
            "Das Bild ist im Art Institute of Chicago."
          ],
          "fact": "1875. Art Institute of Chicago."
        },
        {
          "pid": "sypiles",
          "text": [
            "Am Ufer liegen hohe Sandhaufen, ein Kahn arbeitet auf dem Fluss.",
            "Sisley zeigt die Arbeit am Fluss, nicht nur die schöne Ansicht.",
            "Das Bild ist im Art Institute of Chicago."
          ],
          "fact": "1875. Art Institute of Chicago."
        },
        {
          "pid": "sywatering",
          "text": [
            "Ein flacher Wasserplatz liegt vor Häusern und Bäumen, der Himmel ist blass.",
            "Der Abreuvoir von Marly war ein bekannter Ort am Rand des Parks.",
            "Das Bild ist im Art Institute of Chicago."
          ],
          "fact": "1875. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "syfloods",
      "place": "Die Flut von 1876",
      "when": "1876",
      "map": {
        "x": 94,
        "y": 70
      },
      "mapLabel": "Port-Marly",
      "intro": [
        "Im März 1876 tritt die Seine erneut über die Ufer, stärker als 1872. Sisley malt die überschwemmten Strassen von Port-Marly, Häuser im Wasser und den Weg nach Saint-Germain.",
        "Die Flutbilder gehören zu seinen bekanntesten Werken: ruhig, genau und ohne Dramatik. Daneben entstehen auch Alltagsbilder aus Marly, eine Strasse, Sägemänner, ein Flussufer im Herbst."
      ],
      "works": [
        {
          "pid": "syfloodrouen",
          "text": [
            "Das Hochwasser steht bis an die Häuser, ein Kahn fährt durch die Strasse.",
            "Sisley malt die grosse Flut vom März 1876 ruhig und klar.",
            "Das Bild ist im Musée des Beaux-Arts in Rouen."
          ],
          "fact": "1876. Musée des Beaux-Arts, Rouen."
        },
        {
          "pid": "syfloodhou",
          "text": [
            "Die Strasse nach Saint-Germain ist überschwemmt, Bäume stehen im Wasser.",
            "Sisley wählt einen weiten Blick auf das hohe Wasser.",
            "Das Bild ist im Museum of Fine Arts in Houston."
          ],
          "fact": "1876. Museum of Fine Arts, Houston."
        },
        {
          "pid": "symarlyview",
          "text": [
            "Von einem Hang blickt man auf Marly-le-Roi, die Häuser liegen zwischen Bäumen.",
            "Das Bild ist im Metropolitan Museum of Art in New York."
          ],
          "fact": "1876. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "sysawyers",
          "text": [
            "Zwei Männer sägen einen Stamm in einer Grube, hinter ihnen steht das Dorf.",
            "Sisley hält eine alltägliche Arbeit fest.",
            "Das Bild ist im Petit Palais in Paris."
          ],
          "fact": "1876. Petit Palais, Paris."
        },
        {
          "pid": "sybankaut",
          "text": [
            "Das Ufer leuchtet in Herbstfarben, der Fluss liegt still daneben.",
            "Das Bild ist im Städel Museum in Frankfurt."
          ],
          "fact": "1876. Städel Museum, Frankfurt."
        },
        {
          "pid": "systreetmarly",
          "text": [
            "Eine Strasse führt zwischen Mauern und Bäumen nach oben, eine Figur geht voraus.",
            "Sisley malt Marly ohne Fest und ohne Flut.",
            "Das Bild ist in der Kunsthalle Mannheim."
          ],
          "fact": "1876. Kunsthalle Mannheim."
        }
      ]
    },
    {
      "id": "syloing",
      "place": "Sèvres und der Weg an den Loing",
      "when": "1877–1880",
      "map": {
        "x": 118,
        "y": 122
      },
      "mapLabel": "Veneux-Nadon",
      "intro": [
        "Anfang 1877 zieht Sisley nach Sèvres. Im April zeigt er siebzehn Landschaften in der dritten Impressionisten-Ausstellung. Er malt die Brücke von Sèvres und die Seine bei Suresnes.",
        "Im Herbst 1879 besucht er Moret-sur-Loing am Rand des Walds von Fontainebleau. Anfang 1880 lässt er sich mit der Familie in Veneux-Nadon nieder, nahe bei Saint-Mammès und Moret. Dort beginnt ein neues, langes Kapitel."
      ],
      "works": [
        {
          "pid": "sysevres",
          "text": [
            "Die Brücke von Sèvres liegt quer über die Seine, der Himmel ist weit und hell.",
            "Sisley wohnt ab 1877 in Sèvres und malt den Fluss immer wieder.",
            "Das Bild ist in der Nationalgalerie in Prag."
          ],
          "fact": "1877. Nationalgalerie, Prag."
        },
        {
          "pid": "sysuresnes",
          "text": [
            "Der Fluss liegt unter einem hohen Himmel, am Ufer stehen Bäume und Häuser.",
            "Suresnes liegt der Brücke von Sèvres gegenüber.",
            "Das Bild ist im Musée d’Orsay in Paris."
          ],
          "fact": "1877. Musée d’Orsay, Paris."
        },
        {
          "pid": "syrest",
          "text": [
            "Am Rand eines Gehölzes ruht eine Figur bei einem Bach, das Licht fällt durch die Blätter.",
            "Sisley verbindet hier Wald und Wasser.",
            "Das Bild ist im Musée d’Orsay in Paris."
          ],
          "fact": "1878. Musée d’Orsay, Paris."
        },
        {
          "pid": "syallee",
          "text": [
            "Eine lichte Allee aus Kastanien führt in einen hellen Himmel.",
            "Jahre nach den frühen Alleen von La Celle-Saint-Cloud kehrt Sisley zu diesem Motiv zurück.",
            "Das Bild ist im Metropolitan Museum of Art in New York."
          ],
          "fact": "1878. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "syfirstsnow",
          "text": [
            "Ein leichter Schnee liegt auf dem Dorf, der Himmel ist grau-rosa.",
            "Veneux-Nadon, nahe Moret-sur-Loing, wird 1880 Sisleys Wohnort.",
            "Das Bild ist in der National Gallery of Art in Washington."
          ],
          "fact": "1878. National Gallery of Art, Washington."
        },
        {
          "pid": "sybanksby",
          "text": [
            "Das Ufer bei By ist grün, der Fluss biegt sich ruhig durch das Bild.",
            "By liegt nahe Veneux-Nadon, wo Sisley 1880 hinzieht.",
            "Das Bild ist im Clark Art Institute in Williamstown."
          ],
          "fact": "1880. Clark Art Institute, Williamstown."
        },
        {
          "pid": "systmammes",
          "text": [
            "Ein Weg führt am Fluss entlang, Bäume stehen im Licht, der Himmel ist hoch.",
            "Saint-Mammès liegt an der Mündung des Loing in die Seine.",
            "Das Bild ist im Dallas Museum of Art."
          ],
          "fact": "1880. Dallas Museum of Art."
        },
        {
          "pid": "sytimber",
          "text": [
            "Am Fluss liegen Stämme und Balken, Kähne warten auf die Ladung.",
            "Sisley malt den Arbeitsort, nicht nur die Landschaft.",
            "Das Bild ist im Hammer Museum in Los Angeles."
          ],
          "fact": "1880. Hammer Museum, Los Angeles."
        },
        {
          "pid": "syhills",
          "text": [
            "Von einer Anhöhe blickt man über Felder auf Moret-sur-Loing im Morgenlicht.",
            "Hier, am Rand des Walds von Fontainebleau, wird Sisley die kommenden Jahre bleiben.",
            "Das Bild ist im Princeton University Art Museum."
          ],
          "fact": "1880. Princeton University Art Museum."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
