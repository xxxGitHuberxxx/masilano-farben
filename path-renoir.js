// v9.0 Pierre-Auguste Renoir life journey, Part 1 (1841–1881).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Public-domain / CC0 museum scans only. Documented facts only; no unverified quotations.
// No nudes, no bathers as works, no death-bed images. Reuses gallery works galette and watering by pid only.
(function () {
  var works = [
  {
    "id": "rnmother",
    "title": "Bildnis der Mutter",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1860",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Portrait de la mère de Renoir.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnfather",
    "title": "Léonard Renoir, der Vater des Malers",
    "artist": "Pierre-Auguste Renoir",
    "year": "1869",
    "museum": "Saint Louis Art Museum",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Léonard Renoir, The Artist’s Father - 37-1933 - Saint Louis Art Museum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnspringbouq",
    "title": "Frühlingsstrauss",
    "artist": "Pierre-Auguste Renoir",
    "year": "1866",
    "museum": "Harvard Art Museums, Cambridge",
    "source": "Wikimedia Commons: «Spring Bouquet by Pierre-Auguste Renoir, 1866, oil on canvas - Fogg Art Museum, Harvard University - DSC01224.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnvase66",
    "title": "Blumen in einer Vase",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1866",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Fleurs dans un vase (National Gallery of Art).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnflowersham",
    "title": "Blumen im Gewächshaus",
    "artist": "Pierre-Auguste Renoir",
    "year": "1864",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Renoir Flowes in a Greenhouse@Kunsthalle Hamburg.JPG», Public domain (gemeinfrei)"
  },
  {
    "id": "rnromaine",
    "title": "Romaine Lacaux",
    "artist": "Pierre-Auguste Renoir",
    "year": "1864",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Romaine Lacaux, by Pierre-Auguste Renoir, Cleveland Museum of Art, 1942.1065.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnsicot",
    "title": "Mademoiselle Sicot",
    "artist": "Pierre-Auguste Renoir",
    "year": "1865",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Mademoiselle Sicot, 1865, NGA 46684.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnwillsis",
    "title": "William Sisley",
    "artist": "Pierre-Auguste Renoir",
    "year": "1864",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - William Sisley.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnfence",
    "title": "Frau am Zaun",
    "artist": "Pierre-Auguste Renoir",
    "year": "1866",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Woman by a Fence, 1866, NGA 52210.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rntree",
    "title": "Frau am Baum",
    "artist": "Pierre-Auguste Renoir",
    "year": "1866",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Woman Standing by a Tree, 1866, NGA 52211.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnbazheron",
    "title": "Frédéric Bazille malt den Reiher",
    "artist": "Pierre-Auguste Renoir",
    "year": "1867",
    "museum": "Musée Fabre, Montpellier",
    "source": "Wikimedia Commons: «Renoir - Frédéric Bazille peignant le héron, 1867, D2006.3.5.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnlisehat",
    "title": "Lise mit Strohhut",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1866",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Lise in a Straw Hat (Jeune fille au chapeau de paille) - BF874 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnsisleyfam",
    "title": "Die Familie Sisley",
    "artist": "Pierre-Auguste Renoir",
    "year": "1868",
    "museum": "Wallraf-Richartz-Museum, Köln",
    "source": "Wikimedia Commons: «Sisley et madame-par Renoir-1868.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnlisesew",
    "title": "Lise beim Nähen",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1867–1868",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Lise Sewing - 1985.R.59 - Dallas Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnete",
    "title": "Im Sommer (La Bohémienne)",
    "artist": "Pierre-Auguste Renoir",
    "year": "1868",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Auguste Renoir - En été - La bohémienne - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnjules",
    "title": "Der Maler Jules Le Cœur im Wald von Fontainebleau",
    "artist": "Pierre-Auguste Renoir",
    "year": "1866",
    "museum": "Museu de Arte de São Paulo",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Le Peintre Jules Le Cœur.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rngrenou",
    "title": "La Grenouillère",
    "artist": "Pierre-Auguste Renoir",
    "year": "1869",
    "museum": "Nationalmuseum, Stockholm",
    "source": "Wikimedia Commons: «Auguste Renoir - La Grenouillère - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnmixflow",
    "title": "Gemischte Blumen im Tontopf",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1869",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Mixed Flowers in an Earthenware Pot - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnchalands",
    "title": "Lastkähne auf der Seine",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1869",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Chalands sur la Seine.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnjardin68",
    "title": "Frau im Garten",
    "artist": "Pierre-Auguste Renoir",
    "year": "1868",
    "museum": "Kunstmuseum Basel",
    "source": "Wikimedia Commons: «Renoir Femme dans un jardin.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnpromenade",
    "title": "La Promenade",
    "artist": "Pierre-Auguste Renoir",
    "year": "1870",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «La Promenade, by Pierre-Auguste Renoir.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnpontneuf",
    "title": "Pont Neuf, Paris",
    "artist": "Pierre-Auguste Renoir",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Pont Neuf, Paris, 1872, NGA 52202.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnmonet72",
    "title": "Claude Monet",
    "artist": "Pierre-Auguste Renoir",
    "year": "1872",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Claude Monet, 1872, NGA 66433.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnmonetgard",
    "title": "Claude Monet malt in seinem Garten in Argenteuil",
    "artist": "Pierre-Auguste Renoir",
    "year": "1873",
    "museum": "Wadsworth Atheneum, Hartford",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Claude Monet Painting in His Garden at Argenteuil - Wadsworth Atheneum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnmomeson",
    "title": "Madame Monet und ihr Sohn",
    "artist": "Pierre-Auguste Renoir",
    "year": "1874",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Madame Monet and Her Son, 1874, NGA 52204.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnduckpond",
    "title": "Der Ententeich",
    "artist": "Pierre-Auguste Renoir",
    "year": "1873",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - The Duck Pond - 1985.R.56 - Dallas Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnliseshawl",
    "title": "Lise im weissen Schal",
    "artist": "Pierre-Auguste Renoir",
    "year": "1872",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Lise in a White Shawl - 1985.R.58 - Dallas Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rndancer",
    "title": "Die Tänzerin",
    "artist": "Pierre-Auguste Renoir",
    "year": "1874",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, The Dancer, 1874, NGA 1211.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnparisienne",
    "title": "La Parisienne",
    "artist": "Pierre-Auguste Renoir",
    "year": "1874",
    "museum": "National Museum Cardiff",
    "source": "Wikimedia Commons: «Amgueddfa Cymru - Y Ferch o Baris - La Parisienne - 197108.jpeg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnloge",
    "title": "La Loge",
    "artist": "Pierre-Auguste Renoir",
    "year": "1874",
    "museum": "Courtauld Gallery, London",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - La loge.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rningenue",
    "title": "L’Ingénue",
    "artist": "Pierre-Auguste Renoir",
    "year": "1874",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Portrait of a Young Woman (L'Ingenue) - 1955.606 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rnhartmann",
    "title": "Bildnis einer Frau (Madame Georges Hartmann)",
    "artist": "Pierre-Auguste Renoir",
    "year": "1874",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Auguste Renoir - Portrait of a Woman, called of Mme Georges Hartmann - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnself76",
    "title": "Selbstbildnis",
    "artist": "Pierre-Auguste Renoir",
    "year": "1876",
    "museum": "Harvard Art Museums, Cambridge",
    "source": "Wikimedia Commons: «Renoir, Pierre-Auguste - Self-portrait - Harvard Art Museums.Fogg Museum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnswing",
    "title": "Die Schaukel",
    "artist": "Pierre-Auguste Renoir",
    "year": "1876",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Auguste Renoir - The Swing - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnpiano",
    "title": "Frau am Klavier",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1875–1876",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Woman at the Piano - 1937.1025 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnchatou74",
    "title": "Die Seine bei Chatou",
    "artist": "Pierre-Auguste Renoir",
    "year": "1874",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - La Seine à Chatou (1874).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rncharpentier",
    "title": "Madame Charpentier und ihre Kinder",
    "artist": "Pierre-Auguste Renoir",
    "year": "1878",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Mme Charpentier and Her Children.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnjeanne",
    "title": "Jeanne Samary",
    "artist": "Pierre-Auguste Renoir",
    "year": "1878",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Renoir Jeanne Samary.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnacrobats",
    "title": "Akrobatinnen im Cirque Fernando",
    "artist": "Pierre-Auguste Renoir",
    "year": "1879",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Acrobats at the Cirque Fernando (Francisca and Angelina Wartenberg) - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnmargot",
    "title": "Margot Berard",
    "artist": "Pierre-Auguste Renoir",
    "year": "1879",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Marguerite-Thérèse (Margot) Berard (1874–1956) MET DT1489.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rntherese",
    "title": "Thérèse Berard",
    "artist": "Pierre-Auguste Renoir",
    "year": "1879",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Thérèse Berard - 1955.593 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rnfan",
    "title": "Frau mit Fächer",
    "artist": "Pierre-Auguste Renoir",
    "year": "1879",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Woman with a Fan - 1955.595 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rnoarsmen",
    "title": "Ruderer in Chatou",
    "artist": "Pierre-Auguste Renoir",
    "year": "1879",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Oarsmen at Chatou, 1879, NGA 39759.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnalphonsine",
    "title": "Alphonsine Fournaise",
    "artist": "Pierre-Auguste Renoir",
    "year": "1879",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Auguste Renoir - Alphonsine Fournaise - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rncanotiers",
    "title": "Déjeuner des canotiers",
    "artist": "Pierre-Auguste Renoir",
    "year": "1880–1881",
    "museum": "The Phillips Collection, Washington",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Luncheon of the Boating Party - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rncouple",
    "title": "Paar im Boot",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1881",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Boating Couple (said to be Aline Charigot and Renoir) - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnnearlake",
    "title": "Am See",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1879–1880",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Near the Lake - 1922.439 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnwargemont",
    "title": "Strasse bei Wargemont",
    "artist": "Pierre-Auguste Renoir",
    "year": "1879",
    "museum": "Toledo Museum of Art",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Road at Wargemont - Google Art Project.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "renoir",
  "name": "Pierre-Auguste Renoir",
  "title": "Pierre-Auguste Renoirs Lebensweg",
  "life": "1841–1919",
  "part": "Teil 1 · 1841–1881",
  "subtitle": "Von Limoges zum Déjeuner des canotiers",
  "cover": "rnpromenade",
  "intro": "Pierre-Auguste Renoir wird am 25. Februar 1841 in Limoges geboren. Mit der Familie kommt er nach Paris, lernt als Porzellanmaler und trifft im Atelier Gleyre Monet, Bazille und Sisley. Dieser erste Teil folgt ihm bis zum «Déjeuner des canotiers» um 1881.",
  "ending": [
    "Der erste Teil von Renoirs Weg endet bei den Kahnfahrern an der Seine.",
    "Im nächsten Teil folgen die Reise nach Algerien und Italien, die Begegnung mit der älteren Kunst und die späten Jahre in Cagnes-sur-Mer."
  ],
  "epilogue": "Im nächsten Teil folgen die Reise nach Algerien und Italien, die Begegnung mit der älteren Kunst und die späten Jahre in Cagnes-sur-Mer.",
  "map": {
    "viewBox": "0 0 200 200",
    "lands": [
      "M18,28 C28,10 58,8 72,24 C80,42 68,62 50,70 C32,78 12,58 18,28 Z",
      "M118,22 C132,10 158,14 168,32 C164,50 142,56 128,46 C116,38 110,30 118,22 Z",
      "M58,88 C78,74 118,78 148,98 C162,128 148,168 118,176 C88,184 58,164 50,130 C46,110 48,96 58,88 Z"
    ]
  },
  "stations": [
    {
      "id": "renoirlimoges",
      "place": "Limoges und die Porzellanmalerei",
      "when": "1841–1858",
      "map": {
        "x": 72,
        "y": 142
      },
      "mapLabel": "Limoges",
      "intro": [
        "Renoir wird am 25. Februar 1841 in Limoges geboren, als Sohn des Schneiders Léonard Renoir und der Näherin Marguerite, geborene Merlet.",
        "Um 1844 zieht die Familie nach Paris.",
        "Als Jugendlicher lernt er die Porzellanmalerei, oft wird die Werkstatt Lévy Frères genannt, und kopiert später im Louvre."
      ],
      "works": [
        {
          "pid": "rnmother",
          "text": [
            "Marguerite Renoir, geborene Merlet, war Näherin.",
            "Das Bildnis entstand erst um 1860, Jahre nach dem Umzug von Limoges nach Paris, und zeigt sie in dunkler, ruhiger Atelierfarbe."
          ],
          "fact": "um 1860. Privatbesitz."
        },
        {
          "pid": "rnfather",
          "text": [
            "Léonard Renoir war Schneider.",
            "Das Bildnis von 1869 entstand, als der Sohn schon selbstständig malte.",
            "Der Vater sitzt im Profil, fest modelliert und ohne das helle Licht der späteren Freilichtbilder."
          ],
          "fact": "1869. Saint Louis Art Museum."
        },
        {
          "pid": "rnspringbouq",
          "text": [
            "Das Blumenstück von 1866 zeigt, wie sorgfältig Renoir schon als junger Maler Stoffe und Blüten setzt.",
            "Solche Stillleben gehörten zur Lehre, die er als Porzellanmaler und im Atelier begonnen hatte."
          ],
          "fact": "1866. Harvard Art Museums, Cambridge."
        },
        {
          "pid": "rnvase66",
          "text": [
            "Wieder ein Blumenbild aus der Mitte der 1860er Jahre.",
            "Die Farbe ist dichter als später, die Blüten aber schon lebendig gesetzt — eine Übung, die an die feine Porzellanmalerei erinnert."
          ],
          "fact": "um 1866. National Gallery of Art, Washington."
        },
        {
          "pid": "rnflowersham",
          "text": [
            "Dieses frühe Blumenstück von 1864 hängt in der Hamburger Kunsthalle.",
            "Es gehört zu den Jahren, in denen Renoir noch fest in der Ateliertradition arbeitet, bevor das Freilicht die Palette aufhellt."
          ],
          "fact": "1864. Hamburger Kunsthalle."
        }
      ]
    },
    {
      "id": "renoirgleyre",
      "place": "Im Atelier Gleyre",
      "when": "1862–1866",
      "map": {
        "x": 108,
        "y": 118
      },
      "mapLabel": "Gleyre",
      "intro": [
        "1862 tritt Renoir in das freie Atelier von Charles Gleyre ein und studiert an der École des Beaux-Arts.",
        "Dort trifft er Claude Monet, Alfred Sisley und Frédéric Bazille.",
        "Als Gleyre 1864 schliesst, malen die Freunde gemeinsam im Wald von Fontainebleau."
      ],
      "works": [
        {
          "pid": "rnromaine",
          "text": [
            "Das Bildnis der jungen Romaine Lacaux von 1864 entstand, während Renoir bei Gleyre und an der École des Beaux-Arts lernte.",
            "Der helle Hintergrund und die sorgfältige Stoffmalerei zeigen schon sein Interesse am Porträt."
          ],
          "fact": "1864. Cleveland Museum of Art."
        },
        {
          "pid": "rnsicot",
          "text": [
            "Das Bildnis von 1865 bleibt dunkel und fest gebaut.",
            "Renoir malt hier noch nah an der akademischen Ateliermalerei, die er bei Gleyre gesehen hat."
          ],
          "fact": "1865. National Gallery of Art, Washington."
        },
        {
          "pid": "rnwillsis",
          "text": [
            "William Sisley war der Vater des Malers Alfred Sisley, den Renoir im Atelier Gleyre kennengelernt hatte.",
            "Das Bildnis von 1864 hängt heute im Musée d’Orsay."
          ],
          "fact": "1864. Musée d’Orsay, Paris."
        },
        {
          "pid": "rnfence",
          "text": [
            "Nach der Schliessung von Gleyres Atelier 1864 malen Renoir und seine Freunde im Wald von Fontainebleau.",
            "Die Frau am Zaun von 1866 gehört zu diesen frühen Freilichtversuchen."
          ],
          "fact": "1866. National Gallery of Art, Washington."
        },
        {
          "pid": "rntree",
          "text": [
            "Auch dieses Bild von 1866 entstand im Umkreis der Ausflüge nach Fontainebleau.",
            "Die Figur steht im Schatten eines Baumes, die Farbe ist noch gebunden, das Motiv aber schon unter freiem Himmel."
          ],
          "fact": "1866. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "renoirfriends",
      "place": "Freunde und frühe Modelle",
      "when": "1866–1868",
      "map": {
        "x": 120,
        "y": 128
      },
      "mapLabel": "Freunde",
      "intro": [
        "In diesen Jahren teilt Renoir Ateliers und Motive mit Bazille und Sisley.",
        "Lise Tréhot sitzt ihm wiederholt Modell.",
        "Die Bildnisse bleiben dunkel und sorgfältig modelliert, noch nah an der Ateliermalerei, die er gelernt hat."
      ],
      "works": [
        {
          "pid": "rnbazheron",
          "text": [
            "1867 malt Renoir den Freund Frédéric Bazille an der Staffelei, bei der Arbeit an einem Stilleben mit Reiher.",
            "Das Bild hängt im Musée Fabre in Montpellier, Bazilles Heimatstadt."
          ],
          "fact": "1867. Musée Fabre, Montpellier."
        },
        {
          "pid": "rnlisehat",
          "text": [
            "Lise Tréhot sitzt Renoir in diesen Jahren oft Modell.",
            "Hier trägt sie einen Strohhut; das Bild gehört zu den frühen Bildnissen, die heute in der Barnes Foundation hängen."
          ],
          "fact": "um 1866. Barnes Foundation, Philadelphia."
        },
        {
          "pid": "rnsisleyfam",
          "text": [
            "Alfred Sisley und seine Begleiterin sitzen 1868 unter Bäumen.",
            "Renoir hält den Freund aus dem Atelier Gleyre in einem hellen Freilichtbild fest, das heute in Köln hängt."
          ],
          "fact": "1868. Wallraf-Richartz-Museum, Köln."
        },
        {
          "pid": "rnlisesew",
          "text": [
            "Wieder ist Lise Tréhot das Modell, diesmal über die Näharbeit gebeugt.",
            "Das stille Interieur gehört zu den Bildern, die Renoir in der zweiten Hälfte der 1860er Jahre von ihr malt."
          ],
          "fact": "um 1867–1868. Dallas Museum of Art."
        },
        {
          "pid": "rnete",
          "text": [
            "Das Bild von 1868, oft «La Bohémienne» genannt, zeigt Lise Tréhot im sommerlichen Kleid vor grünem Grund.",
            "Es hängt in der Alten Nationalgalerie in Berlin."
          ],
          "fact": "1868. Alte Nationalgalerie, Berlin."
        },
        {
          "pid": "rnjules",
          "text": [
            "Jules Le Cœur, ein Freund Renoirs, steht 1866 mit Hund und Gewehr im Wald von Fontainebleau.",
            "Das Bild, heute in São Paulo, hält die Ausflüge fest, die die Freunde nach der Atelierzeit unternahmen."
          ],
          "fact": "1866. Museu de Arte de São Paulo."
        }
      ]
    },
    {
      "id": "renoirgrenouillere",
      "place": "La Grenouillère",
      "when": "1869",
      "map": {
        "x": 82,
        "y": 130
      },
      "mapLabel": "Grenouillère",
      "intro": [
        "Im Sommer 1869 malen Renoir und Monet nebeneinander an der Grenouillère, einem Ausflugslokal an der Seine bei Croissy, nahe Bougival.",
        "Helle Flecken auf dem Wasser und rasche Pinselzüge lösen die fest modellierte Farbe auf."
      ],
      "works": [
        {
          "pid": "rngrenou",
          "text": [
            "Im Sommer 1869 steht Renoir mit Monet an der Grenouillère, einem Ausflugslokal an der Seine bei Croissy.",
            "Die Gestalten auf dem Steg und die Flecken auf dem Wasser gehören zu den ersten Bildern, in denen sich seine neue, hellere Malweise zeigt.",
            "Das Bild hängt im Nationalmuseum Stockholm."
          ],
          "fact": "1869. Nationalmuseum, Stockholm."
        },
        {
          "pid": "rnmixflow",
          "text": [
            "Neben den Seinenbildern entstehen weiter Stillleben.",
            "Dieser Strauss im Tontopf, um 1869, hängt im Museum of Fine Arts in Boston und zeigt, wie locker Renoir die Blüten jetzt setzt."
          ],
          "fact": "um 1869. Museum of Fine Arts, Boston."
        },
        {
          "pid": "rnchalands",
          "text": [
            "Die Lastkähne auf der Seine, um 1869, gehören in dieselbe Zeit wie die Grenouillère.",
            "Renoir beobachtet den Fluss nicht nur als Ausflugsziel, sondern als Arbeitsweg der Schiffe.",
            "Das Bild hängt im Musée d’Orsay."
          ],
          "fact": "um 1869. Musée d’Orsay, Paris."
        },
        {
          "pid": "rnjardin68",
          "text": [
            "Schon 1868 malt Renoir eine Frau im Garten, hell und zwischen Laub gesetzt.",
            "Das Bild im Kunstmuseum Basel steht am Übergang zu den Seinenbildern des folgenden Sommers."
          ],
          "fact": "1868. Kunstmuseum Basel."
        }
      ]
    },
    {
      "id": "renoirargenteuil",
      "place": "Krieg, Paris und Argenteuil",
      "when": "1870–1873",
      "map": {
        "x": 100,
        "y": 108
      },
      "mapLabel": "Argenteuil",
      "intro": [
        "1870 wird Renoir zum Militärdienst eingezogen und dient bei der Kavallerie.",
        "Frédéric Bazille fällt am 28. November 1870 bei Beaune-la-Rolande.",
        "Danach malt Renoir in Paris und oft bei Monet in Argenteuil, hell und im Freien."
      ],
      "works": [
        {
          "pid": "rnpromenade",
          "text": [
            "1870, im Jahr seiner Einberufung, malt Renoir ein Paar im Schatten der Bäume.",
            "Das Bild, heute im Getty Museum, hat schon das gefleckte Licht, das seine 1870er Jahre prägen wird."
          ],
          "fact": "1870. J. Paul Getty Museum, Los Angeles."
        },
        {
          "pid": "rnpontneuf",
          "text": [
            "Nach dem Krieg malt Renoir 1872 die belebte Pont Neuf.",
            "Die Stadt liegt hell unter einem weiten Himmel, die Figuren sind klein und rasch gesetzt.",
            "Das Bild hängt in der National Gallery of Art."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "rnmonet72",
          "text": [
            "1872 porträtiert Renoir den Freund Claude Monet.",
            "In diesen Jahren arbeiten die beiden oft nebeneinander, besonders in Argenteuil, wo Monet sich niedergelassen hat."
          ],
          "fact": "1872. National Gallery of Art, Washington."
        },
        {
          "pid": "rnmonetgard",
          "text": [
            "Ein Jahr später hält Renoir Monet an der Staffelei im Garten von Argenteuil fest.",
            "Das Bild im Wadsworth Atheneum zeigt, wie eng die Freunde in diesen Freilichtjahren zusammenarbeiteten."
          ],
          "fact": "1873. Wadsworth Atheneum, Hartford."
        },
        {
          "pid": "rnmomeson",
          "text": [
            "Camille Monet und der Sohn Jean sitzen 1874 im Garten.",
            "Renoir malt die Familie des Freundes in dem hellen Licht, das auch Monets eigene Bilder dieser Jahre bestimmt."
          ],
          "fact": "1874. National Gallery of Art, Washington."
        },
        {
          "pid": "rnduckpond",
          "text": [
            "Der Ententeich von 1873 gehört zu den Landschaftsbildern aus der Zeit in und um Argenteuil.",
            "Wasser, Ufer und Laub sind in kurzen, hellen Tupfen gesetzt."
          ],
          "fact": "1873. Dallas Museum of Art."
        },
        {
          "pid": "rnliseshawl",
          "text": [
            "Auch nach den Seinenjahren bleibt Lise Tréhot ein wichtiges Modell.",
            "Das Bildnis mit weissem Schal von 1872 hängt im Dallas Museum of Art."
          ],
          "fact": "1872. Dallas Museum of Art."
        }
      ]
    },
    {
      "id": "renoirexhibitions",
      "place": "Die Impressionisten-Ausstellungen",
      "when": "1874–1875",
      "map": {
        "x": 116,
        "y": 116
      },
      "mapLabel": "1874",
      "intro": [
        "Am 15. April 1874 eröffnet in Nadars ehemaligem Atelier, 35 boulevard des Capucines, die erste Ausstellung der späteren Impressionisten.",
        "Renoir zeigt dort unter anderem «La Loge», «Die Tänzerin» und «La Parisienne»."
      ],
      "works": [
        {
          "pid": "rndancer",
          "text": [
            "«Die Tänzerin» von 1874 gehörte zu den Werken, die Renoir auf der ersten Impressionisten-Ausstellung zeigte.",
            "Die junge Frau steht in hellem Tüll vor dunklem Grund.",
            "Das Bild hängt in der National Gallery of Art."
          ],
          "fact": "1874. National Gallery of Art, Washington."
        },
        {
          "pid": "rnparisienne",
          "text": [
            "Auch «La Parisienne» von 1874 war auf jener ersten Ausstellung zu sehen.",
            "Die Frau im blauen Kleid hängt heute im National Museum Cardiff."
          ],
          "fact": "1874. National Museum Cardiff."
        },
        {
          "pid": "rnloge",
          "text": [
            "«La Loge» zeigt ein Paar in einer Theaterloge und war 1874 eines der wichtigsten Bilder Renoirs auf der Ausstellung bei Nadar.",
            "Es hängt in der Courtauld Gallery in London."
          ],
          "fact": "1874. Courtauld Gallery, London."
        },
        {
          "pid": "rningenue",
          "text": [
            "Das Bildnis einer jungen Frau von 1874, «L’Ingénue» genannt, entsteht im gleichen Jahr wie die Ausstellungsbilder.",
            "Es gehört zur Sammlung des Clark Art Institute in Williamstown."
          ],
          "fact": "1874. Clark Art Institute, Williamstown."
        },
        {
          "pid": "rnhartmann",
          "text": [
            "Das Bildnis, oft als Madame Georges Hartmann bezeichnet, stammt ebenfalls aus dem Jahr 1874. Es hängt im Musée d’Orsay."
          ],
          "fact": "1874. Musée d’Orsay, Paris."
        },
        {
          "pid": "rnself76",
          "text": [
            "Um 1876 malt Renoir sich selbst, in den Jahren zwischen der ersten Ausstellung und den grossen Montmartre-Bildern.",
            "Das Selbstbildnis gehört den Harvard Art Museums."
          ],
          "fact": "1876. Harvard Art Museums, Cambridge."
        }
      ]
    },
    {
      "id": "renoirgalette",
      "place": "Montmartre und der Moulin de la Galette",
      "when": "1876",
      "map": {
        "x": 110,
        "y": 104
      },
      "mapLabel": "Montmartre",
      "intro": [
        "Renoir mietet ein Atelier in Montmartre und malt das Leben im Freien: den Tanz im Moulin de la Galette, die Schaukel und Szenen am Klavier. 1877 zeigt er mehrere dieser Bilder auf der dritten Impressionisten-Ausstellung."
      ],
      "works": [
        {
          "pid": "galette",
          "text": [
            "Im Garten des Moulin de la Galette in Montmartre malt Renoir 1876 das Sonntagspublikum beim Tanz.",
            "Das grosse Bild wurde 1877 auf der dritten Impressionisten-Ausstellung gezeigt und hängt im Musée d’Orsay."
          ],
          "fact": "1876. Musée d’Orsay, Paris."
        },
        {
          "pid": "watering",
          "text": [
            "Im selben Jahr entsteht das Kind mit der Giesskanne in einem Garten.",
            "Das Bild hängt in der National Gallery of Art und zeigt die gleiche gefleckte Gartenhelle wie die Montmartre-Szenen."
          ],
          "fact": "1876. National Gallery of Art, Washington."
        },
        {
          "pid": "rnswing",
          "text": [
            "«Die Schaukel» von 1876 entstand im Garten nahe Renoirs Atelier in Montmartre. 1877 war auch dieses Bild auf der dritten Impressionisten-Ausstellung zu sehen.",
            "Es hängt im Musée d’Orsay."
          ],
          "fact": "1876. Musée d’Orsay, Paris."
        },
        {
          "pid": "rnpiano",
          "text": [
            "Die Frau am Klavier gehört in dieselben Jahre wie die Gartenbilder von Montmartre.",
            "Das Interieur hängt im Art Institute of Chicago."
          ],
          "fact": "um 1875–1876. Art Institute of Chicago."
        },
        {
          "pid": "rnchatou74",
          "text": [
            "Schon 1874 malt Renoir die Seine bei Chatou, dem Ort, an den er später für die Kahnfahrer zurückkehrt.",
            "Das Landschaftsbild hängt im Dallas Museum of Art."
          ],
          "fact": "1874. Dallas Museum of Art."
        }
      ]
    },
    {
      "id": "renoirportraits",
      "place": "Bildnisse und der Salon",
      "when": "1877–1879",
      "map": {
        "x": 118,
        "y": 122
      },
      "mapLabel": "Salon",
      "intro": [
        "Mit Bildnissen wie dem der Madame Charpentier und ihrer Kinder findet Renoir einen Weg zurück in den offiziellen Salon. 1879 hängt dieses grosse Familienbild dort und macht ihn einem breiteren Publikum bekannt.",
        "Auch die Familie Bérard in Wargemont bestellt Porträts."
      ],
      "works": [
        {
          "pid": "rncharpentier",
          "text": [
            "Georges Charpentier, Verleger, und seine Frau Marguerite fördern Renoir.",
            "Das grosse Familienbild von 1878 hängt 1879 im Salon und macht den Maler einem breiteren Publikum bekannt.",
            "Heute ist es im Metropolitan Museum of Art."
          ],
          "fact": "1878. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "rnjeanne",
          "text": [
            "Die Schauspielerin Jeanne Samary vom Théâtre-Français sitzt Renoir in diesen Jahren wiederholt Modell.",
            "Dieses Bildnis von 1878 hängt in der National Gallery of Art."
          ],
          "fact": "1878. National Gallery of Art, Washington."
        },
        {
          "pid": "rnacrobats",
          "text": [
            "Francisca und Angelina Wartenberg, zwei junge Akrobatinnen, malt Renoir 1879 im Cirque Fernando.",
            "Das Bild hängt im Art Institute of Chicago."
          ],
          "fact": "1879. Art Institute of Chicago."
        },
        {
          "pid": "rnmargot",
          "text": [
            "Die Familie Bérard lädt Renoir auf das Landgut in Wargemont in der Normandie ein. 1879 malt er dort die kleine Marguerite-Thérèse, genannt Margot.",
            "Das Bildnis hängt im Metropolitan Museum of Art."
          ],
          "fact": "1879. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "rntherese",
          "text": [
            "Im selben Sommer entsteht das Bildnis der älteren Thérèse Berard.",
            "Es gehört heute dem Clark Art Institute in Williamstown."
          ],
          "fact": "1879. Clark Art Institute, Williamstown."
        },
        {
          "pid": "rnfan",
          "text": [
            "Die Frau mit dem Fächer vor einem Strauss von Chrysanthemen stammt ebenfalls aus dem Jahr 1879. Auch dieses Bild hängt im Clark Art Institute."
          ],
          "fact": "1879. Clark Art Institute, Williamstown."
        }
      ]
    },
    {
      "id": "renoircanotiers",
      "place": "Chatou und die Kahnfahrer",
      "when": "1879–1881",
      "map": {
        "x": 88,
        "y": 122
      },
      "mapLabel": "Chatou",
      "intro": [
        "An der Seine bei Chatou, im Restaurant der Familie Fournaise, malt Renoir Freunde beim Essen nach der Kahnfahrt.",
        "Das «Déjeuner des canotiers» von 1880–81 schliesst diesen ersten Teil.",
        "Im nächsten Teil folgen Algerien, Italien und eine veränderte Malweise."
      ],
      "works": [
        {
          "pid": "rnoarsmen",
          "text": [
            "1879 malt Renoir Ruderer an der Seine bei Chatou, nahe dem Restaurant Fournaise.",
            "Das Bild in der National Gallery of Art steht am Beginn der Kahnfahrer-Jahre."
          ],
          "fact": "1879. National Gallery of Art, Washington."
        },
        {
          "pid": "rnalphonsine",
          "text": [
            "Alphonsine Fournaise, die Tochter des Wirts, sitzt 1879 am Geländer über der Seine.",
            "Renoir malt sie in Chatou, wo bald darauf das grosse Mittagessen der Kahnfahrer entsteht.",
            "Das Bild hängt im Musée d’Orsay."
          ],
          "fact": "1879. Musée d’Orsay, Paris."
        },
        {
          "pid": "rncanotiers",
          "text": [
            "1880–81 versammelt Renoir Freunde auf der Terrasse der Maison Fournaise in Chatou.",
            "Das «Déjeuner des canotiers» ist das grosse Schlussbild dieses ersten Teils und hängt in der Phillips Collection in Washington."
          ],
          "fact": "1880–1881. The Phillips Collection, Washington."
        },
        {
          "pid": "rncouple",
          "text": [
            "Das Paar im Boot, um 1881, wird oft als Aline Charigot und Renoir selbst gedeutet.",
            "Aline, später seine Frau, sitzt auf mehreren Bildern dieser Jahre.",
            "Das Gemälde hängt im Museum of Fine Arts in Boston."
          ],
          "fact": "um 1881. Museum of Fine Arts, Boston."
        },
        {
          "pid": "rnnearlake",
          "text": [
            "Das Paar am Wasser, um 1879–80, gehört in denselben Umkreis wie die Bilder von Chatou.",
            "Es hängt im Art Institute of Chicago."
          ],
          "fact": "um 1879–1880. Art Institute of Chicago."
        },
        {
          "pid": "rnwargemont",
          "text": [
            "1879 malt Renoir die Strasse bei Wargemont in der Normandie, wo ihn die Familie Bérard empfängt.",
            "Das Landschaftsbild im Toledo Museum of Art schliesst die Jahre vor der Reise nach Algerien und Italien.",
            "Im nächsten Teil ändern sich Ort und Malweise."
          ],
          "fact": "1879. Toledo Museum of Art."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
