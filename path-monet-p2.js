// v6.8 Monet life journey, Part 2 (1874–1890).
// Appends stations and works to the existing Monet path; does not rewrite Part 1.
// Letter quotes: self-translated from Monet’s French (Wildenstein, recipient and date).
(function () {
  var works = [
  {
    "id": "japonaise",
    "title": "La Japonaise (Camille im Kimono)",
    "artist": "Claude Monet",
    "year": "1876",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Claude Monet - La Japonaise (Museum of Fine Arts, Boston).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "roundbed",
    "title": "Rundes Blumenbeet",
    "artist": "Claude Monet",
    "year": "1876",
    "museum": "Detroit Institute of Arts",
    "source": "Wikimedia Commons: «Rounded Flower Bed by Claude Monet, 1876.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "turkeys",
    "title": "Die Truthähne",
    "artist": "Claude Monet",
    "year": "1877",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Monet - Truthähne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "parkmonceau",
    "title": "Der Parc Monceau",
    "artist": "Claude Monet",
    "year": "1878",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Parc Monceau MET DT1889.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "tuileries",
    "title": "Die Tuilerien",
    "artist": "Claude Monet",
    "year": "1876",
    "museum": "Musée Marmottan Monet, Paris",
    "source": "Wikimedia Commons: «Monet-Tuileries-Marmottan.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "montgeronpond",
    "title": "Der Teich in Montgeron",
    "artist": "Claude Monet",
    "year": "1876",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Monet, Pond-at-Montgeron.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "montorgueil",
    "title": "Die Rue Montorgueil, 30. Juni 1878",
    "artist": "Claude Monet",
    "year": "1878",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - The Rue Montorgueil in Paris. Celebration of June 30, 1878 - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lazareorsay",
    "title": "Der Bahnhof Saint-Lazare",
    "artist": "Claude Monet",
    "year": "1877",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - The Saint-Lazare Station - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lazarenormand",
    "title": "Ankunft des Zuges aus der Normandie, Gare Saint-Lazare",
    "artist": "Claude Monet",
    "year": "1877",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Claude Monet - Arrival of the Normandy Train, Gare Saint-Lazare - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lazareout",
    "title": "Gare Saint-Lazare, Aussenansicht",
    "artist": "Claude Monet",
    "year": "1877",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «La Gare Saint-Lazare, Vue extérieure by Claude Monet.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lazaresun",
    "title": "Gare Saint-Lazare, Aussenansicht, Sonneneffekt",
    "artist": "Claude Monet",
    "year": "1877",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Monet Extérieur de la gare Saint-Lazare, effet de soleil.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lazaresignal",
    "title": "Gare Saint-Lazare, die Signale",
    "artist": "Claude Monet",
    "year": "1877",
    "museum": "Niedersächsisches Landesmuseum Hannover",
    "source": "Wikimedia Commons: «La-Gare-Saint-Lazare-a-l-exterieur-(Le Signal) - 1877 - Niedersächsisches Landesmuseum Hannover (W 448).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lazaretrack",
    "title": "Gleise am Bahnhof Saint-Lazare",
    "artist": "Claude Monet",
    "year": "1877",
    "museum": "Pola Museum of Art, Hakone",
    "source": "Wikimedia Commons: «Claude Monet - Train Tracks at the Saint-Lazare Station.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "vethsummer",
    "title": "Vétheuil im Sommer",
    "artist": "Claude Monet",
    "year": "1880",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Vétheuil in Summer MET DT1898.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "vethchurch",
    "title": "Die Kirche von Vétheuil",
    "artist": "Claude Monet",
    "year": "1878",
    "museum": "National Galleries of Scotland, Edinburgh",
    "source": "Wikimedia Commons: «Claude Monet - Église de Vetheuil - National Galleries of Scotland.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "vethgarden",
    "title": "Der Garten des Künstlers in Vétheuil",
    "artist": "Claude Monet",
    "year": "1881",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet, The Artist's Garden at Vétheuil, 1881, NGA 52189.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "lavacourt",
    "title": "Lavacourt im Winter",
    "artist": "Claude Monet",
    "year": "1879",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Lavacourt, l'hiver (1879) Claude Monet (W 514).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lavaseine",
    "title": "Die Seine bei Lavacourt",
    "artist": "Claude Monet",
    "year": "1879",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «La Seine à Lavacourt (1879) Claude Monet (W541).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "icebreak",
    "title": "Der Eisgang (La Débâcle)",
    "artist": "Claude Monet",
    "year": "1880",
    "museum": "University of Michigan Museum of Art, Ann Arbor",
    "source": "Wikimedia Commons: «Claude Monet - The Break-up of the Ice (La Débâcle or Les Glaçons) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "icedebacle",
    "title": "Der Eisgang bei Vétheuil",
    "artist": "Claude Monet",
    "year": "1880",
    "museum": "Musée du Louvre, Paris",
    "source": "Wikimedia Commons: «La débâcle près de Vétheuil (1880) Claude Monet - Musée du Louvre (W 572).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lavesun",
    "title": "Sonnenuntergang in Lavacourt",
    "artist": "Claude Monet",
    "year": "1880",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Coucher de soleil à Lavacourt (1880) Claude Monet (W 575).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "fecampcliff",
    "title": "Die Klippe bei Fécamp",
    "artist": "Claude Monet",
    "year": "1881",
    "museum": "Aberdeen Art Gallery",
    "source": "Wikimedia Commons: «La Falaise à Fécamp - Claude Monet - ABDAG003046.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "fecampsea",
    "title": "Das Meer bei Fécamp",
    "artist": "Claude Monet",
    "year": "1881",
    "museum": "Musée d’art moderne André Malraux, Le Havre",
    "source": "Wikimedia Commons: «MuMA - Monet - Fécamp, bord de mer.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pourvillelow",
    "title": "Ebbe in Pourville",
    "artist": "Claude Monet",
    "year": "1882",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Low Tide at Pourville, by Claude Monet, Cleveland Museum of Art, 1947.196.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pourvillewalk",
    "title": "Spaziergang auf der Klippe bei Pourville",
    "artist": "Claude Monet",
    "year": "1882",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Claude Monet - Cliff Walk at Pourville - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pourvillebeach",
    "title": "Der Strand von Pourville",
    "artist": "Claude Monet",
    "year": "1882",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Monet Claude, The Beach at Pourville, 1882.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "varensun",
    "title": "Die Kirche von Varengeville, Abendsonne",
    "artist": "Claude Monet",
    "year": "1882",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - L'Église de Varengeville, soleil couchant (1882).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "manneporte",
    "title": "Die Manneporte (Étretat)",
    "artist": "Claude Monet",
    "year": "1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Manneporte (Étretat) MET DT1897.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "etretatcliff",
    "title": "Die Klippe d’Aval, Étretat",
    "artist": "Claude Monet",
    "year": "1885",
    "museum": "Israel-Museum, Jerusalem",
    "source": "Wikimedia Commons: «Claude Monet - The Cliff of Aval, Etrétat - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bordighera",
    "title": "Bordighera",
    "artist": "Claude Monet",
    "year": "1884",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Monet - Bordighera - Art Institute of Chicago 1922.426.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "villabord",
    "title": "Villen in Bordighera",
    "artist": "Claude Monet",
    "year": "1884",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - Villas at Bordighera - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "palmtrees",
    "title": "Palmen in Bordighera",
    "artist": "Claude Monet",
    "year": "1884",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Palm Trees at Bordighera MET DT1888.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "morenogard",
    "title": "Garten der Villa Moreno, Bordighera",
    "artist": "Claude Monet",
    "year": "1884",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «The-moreno-garden-at-bordighera.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "antibes",
    "title": "Antibes",
    "artist": "Claude Monet",
    "year": "1888",
    "museum": "Sammlung Pérez Simón",
    "source": "Wikimedia Commons: «Antibes (1888) Claude Monet (W 1160).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "antibesfort",
    "title": "Das Fort von Antibes",
    "artist": "Claude Monet",
    "year": "1888",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Le fort d'Antibes (1888) Claude Monet (W 1159).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pyramids",
    "title": "Die Pyramiden von Port-Coton, Sonneneffekt",
    "artist": "Claude Monet",
    "year": "1886",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Les Pyramides de Port-Coton, effet de soleil.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pyramids2",
    "title": "Die Pyramiden von Port-Coton",
    "artist": "Claude Monet",
    "year": "1886",
    "museum": "Puschkin-Museum, Moskau",
    "source": "Wikimedia Commons: «'The Pyramids at Port-Coton' by Claude Monet, 1886, Pushkin Museum.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "belleilestorm",
    "title": "Sturm an der Küste von Belle-Île",
    "artist": "Claude Monet",
    "year": "1886",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Tempête, côtes de Belle-Île - Claude.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lionrock",
    "title": "Der Löwenfelsen, Port-Coton",
    "artist": "Claude Monet",
    "year": "1886",
    "museum": "Fitzwilliam Museum, Cambridge",
    "source": "Wikimedia Commons: «Monet w1091.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "portdomois",
    "title": "Felsen bei Port-Domois, Belle-Île",
    "artist": "Claude Monet",
    "year": "1886",
    "museum": "Cincinnati Art Museum",
    "source": "Wikimedia Commons: «Rocks at Belle-ile, Port-domois by Monet, 1886.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "portgoulphar",
    "title": "Port-Goulphar, Belle-Île",
    "artist": "Claude Monet",
    "year": "1887",
    "museum": "Art Gallery of New South Wales, Sydney",
    "source": "Wikimedia Commons: «Claude Monet - Port-Goulphar, Belle-Île - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rapidscreuse",
    "title": "Stromschnellen der Petite Creuse bei Fresselines",
    "artist": "Claude Monet",
    "year": "1889",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Rapids on the Petite Creuse at Fresselines MET DT226477.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "valleycreuse",
    "title": "Das Tal der Creuse bei Fresselines",
    "artist": "Claude Monet",
    "year": "1889",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «La Vallée de la Creuse à Fresselines (1889) Claude Monet (W 1218).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ravincreuse",
    "title": "Die Schluchten der Creuse",
    "artist": "Claude Monet",
    "year": "1889",
    "museum": "Musée des Beaux-Arts, Reims",
    "source": "Wikimedia Commons: «MONET Claude Les Ravins de la Creuse Huile sur toile.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "creusegrey",
    "title": "Das Tal der Creuse, graues Wetter",
    "artist": "Claude Monet",
    "year": "1889",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Monet w1234.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "creusesun",
    "title": "Das Tal der Creuse, Sonneneffekt",
    "artist": "Claude Monet",
    "year": "1889",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Monet w1235.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bargiverny",
    "title": "In der norwegischen Barke, Giverny",
    "artist": "Claude Monet",
    "year": "1887",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Monet - In der Barke.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "springgiverny",
    "title": "Frühling in Giverny",
    "artist": "Claude Monet",
    "year": "1890",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Claude Monet - Spring in Giverny (1890).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hayendsummer",
    "title": "Getreideschober, Ende des Sommers",
    "artist": "Claude Monet",
    "year": "1891",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - Haystacks, end of Summer - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "poplarepte",
    "title": "Pappeln an der Epte",
    "artist": "Claude Monet",
    "year": "1891",
    "museum": "National Galleries of Scotland, Edinburgh",
    "source": "Wikimedia Commons: «Claude Monet - Poplars on the Epte - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "poplarwind",
    "title": "Pappeln, Windeffekt",
    "artist": "Claude Monet",
    "year": "1891",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - Poplars (Wind effect).JPG», gemeinfrei (Public Domain)"
  },
  {
    "id": "poplarphila",
    "title": "Pappeln",
    "artist": "Claude Monet",
    "year": "1891",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Claude Monet, French - Poplars - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);

  var path = (window.PATHS || []).filter(function (p) { return p.id === 'monet'; })[0];
  if (!path) return;

  path.part = "Teil 1–2 · 1856–1890";
  path.subtitle = "Von Le Havre bis zu den Getreideschobern von Giverny";
  path.intro = "Reise mit Claude Monet durch die Jahre, in denen er zum Impressionisten wird und die Serie entdeckt: von den Karikaturen in Le Havre über Camille, London, Zaandam und Argenteuil, über den Bahnhof Saint-Lazare, Vétheuil, die normannische Küste, die Riviera, Belle-Île und die Creuse bis nach Giverny – zu den Getreideschobern und den Pappeln an der Epte. Kurze Stationen, Bilder zum Ausmalen und Stimmen aus seinen Briefen. Dieser Teil umfasst 1856 bis 1890.";
  path.ending = [
  "In Giverny beginnen die grossen Serien: Getreideschober im wechselnden Licht, Pappeln an der Epte. Monet arbeitet an mehreren Leinwänden zugleich und jagt die Stunde des Tages.",
  "Alice führt das Haus; 1892, nach dem Tod von Ernest Hoschedé, werden die beiden heiraten.",
  "Der Weg geht weiter. Der Garten und der Seerosenteich, die Nebel von London, Venedig und die späten Jahre in Giverny liegen noch vor ihm – im nächsten Teil dieses Lebenswegs."
];
  path.epilogue = "In Giverny beginnen die Serien der Getreideschober und der Pappeln. Alice und Monet werden 1892 heiraten. Der Garten, die Seerosen, London und Venedig folgen im nächsten Teil.";
  if (path.map) {
    path.map.viewBox = "0 0 200 220";
    path.map.lands = (path.map.lands || []).concat([
  "M16,138 C24,128 40,132 46,150 C42,168 28,172 18,160 C12,148 12,140 16,138 Z",
  "M166,172 C180,166 196,174 196,190 C188,206 172,208 164,196 C160,184 158,176 166,172 Z",
  "M128,184 C142,180 156,188 152,204 C138,214 122,206 128,184 Z"
]);
  }
  var stations = [
  {
    "id": "argenteuil2",
    "place": "Argenteuil, später",
    "when": "1874–1878",
    "map": {
      "x": 104,
      "y": 112,
      "labelDy": -12
    },
    "mapLabel": "Argenteuil",
    "intro": [
      "Nach der ersten Impressionisten-Ausstellung bleibt Monet in Argenteuil. Er malt den Garten, Camille im Kimono, die Tuilerien und den Parc Monceau.",
      "1876 bestellt der Sammler Ernest Hoschedé dekorative Tafeln für sein Schloss in Montgeron: Truthähne auf der Wiese, den Teich. Das Geld bleibt knapp.",
      "Im Januar 1878 muss die Familie Argenteuil verlassen. Im Juni malt Monet in Paris die Fahnen der Rue Montorgueil, zum Fest im Weltausstellungsjahr."
    ],
    "works": [
      {
        "pid": "japonaise",
        "text": [
          "Camille trägt einen roten Uchikake, einen Fächer in der Hand, umgeben von japanischen Fächern an der Wand. Monet malt sie 1876, in voller Figur, fast lebensgross.",
          "Das Bild ist eine Hommage an die damalige Japan-Mode in Paris – und ein Porträt seiner Frau, festlich und fremd zugleich."
        ],
        "fact": "Das Bild hängt im Museum of Fine Arts in Boston. Monet zeigt es 1876 bei der zweiten Impressionisten-Ausstellung."
      },
      {
        "pid": "roundbed",
        "text": [
          "Im Garten von Argenteuil steht ein rundes Beet voller Blumen, dicht und bunt, hinter einem Zaun. Die Luft ist sommerlich, die Farbe kräftig.",
          "Monet malt den Garten immer wieder: nicht als Dekoration, sondern als Motiv, in dem Licht und Wachstum zusammenkommen."
        ],
        "fact": "Das Bild gehört dem Detroit Institute of Arts und entsteht 1876, in den späteren Argenteuil-Jahren."
      },
      {
        "pid": "turkeys",
        "text": [
          "Weisse Truthähne laufen über eine sonnige Wiese, im Hintergrund ein Schloss und Bäume. Das Bild ist ein dekoratives Wandbild für Ernest Hoschedé, gemalt auf dem Schloss Rottembourg in Montgeron.",
          "Hoschedé ist Sammler und Mäzen – noch. Wenig später bricht sein Vermögen zusammen. Die Familien Monet und Hoschedé werden sich in Vétheuil näherkommen."
        ],
        "fact": "Das Bild hängt im Musée d’Orsay. Es gehört zu einer Folge von dekorativen Tafeln, die Hoschedé 1876 bei Monet bestellt."
      },
      {
        "pid": "parkmonceau",
        "text": [
          "Im Parc Monceau in Paris stehen Figuren im Schatten hoher Bäume, das Licht fällt in Flecken auf den Weg. Monet malt den Stadtpark mehr als einmal.",
          "Zwischen Argenteuil und den Aufträgen in Montgeron bleibt Paris nah: ein kurzer Weg in den Park, ein Bild vom Grün in der Stadt."
        ],
        "fact": "Diese Fassung von 1878 hängt im Metropolitan Museum in New York. Eine frühere Fassung entsteht schon 1876."
      },
      {
        "pid": "tuileries",
        "text": [
          "Vom hohen Standpunkt aus sieht man den Tuileriengarten: Wege, Beete, die Stadt im Dunst. Monet fasst Paris als Landschaft, nicht als Strassenszene.",
          "Das Bild entsteht 1876 und bleibt eine Studie in Grün, Licht und Weite, gemalt in der Stadt, in der er geboren ist."
        ],
        "fact": "Das Bild hängt im Musée Marmottan Monet in Paris, in der Stiftung aus Monets eigenem Besitz."
      },
      {
        "pid": "montgeronpond",
        "text": [
          "Am Teich von Montgeron stehen hohe Bäume, das Wasser ist dunkel und still, Seerosen deuten sich schon an. Auch dies ist eine der Tafeln für Hoschedé.",
          "Im Januar 1878 muss die Familie Argenteuil verlassen. Die Schulden sind nicht bezahlt, der nächste Ort wird Vétheuil."
        ],
        "fact": "Das Bild gehört der Eremitage in Sankt Petersburg. Es entsteht um 1876 für das Schloss in Montgeron.",
        "quote": {
          "text": "In zwei Tagen, das heisst übermorgen, müssen wir Argenteuil verlassen: dazu müssen die Schulden bezahlt sein.",
          "cite": "Brief an Georges de Bellio, Dienstag, 15. Januar 1878"
        }
      },
      {
        "pid": "montorgueil",
        "text": [
          "Am 30. Juni 1878 hängt Paris voller Fahnen: ein Fest zum Weltausstellungsjahr. Monet stellt sich in die Rue Montorgueil und malt die Strasse als einen Regen aus Rot, Weiss und Blau.",
          "Die Familie wohnt da schon nicht mehr in Argenteuil. Monet kommt für das Fest in die Stadt und nimmt die Bewegung mit, nicht die Fassaden."
        ],
        "fact": "Das Bild hängt im Musée d’Orsay. Eine Schwesteraufnahme zeigt die Rue Saint-Denis am selben Tag."
      }
    ]
  },
  {
    "id": "saintlazare",
    "place": "Gare Saint-Lazare",
    "when": "1877",
    "map": {
      "x": 115,
      "y": 140
    },
    "mapLabel": "Paris",
    "intro": [
      "Im Januar 1877 nimmt Monet ein Atelier in der rue Moncey, nahe der Gare Saint-Lazare. In wenigen Wochen malt er den Bahnhof von innen und von den Gleisen: Dampf, Signale, die Ankunft des Zuges aus der Normandie.",
      "Mehrere dieser Bilder hängen 1877 auf der dritten Impressionisten-Ausstellung. Die moderne Stadt wird für ihn ein Motiv wie der Fluss."
    ],
    "works": [
      {
        "pid": "lazareorsay",
        "text": [
          "Unter dem Glasdach der Gare Saint-Lazare steht der Dampf wie eine Wolke im Bahnhof. Züge, Figuren, das eiserne Gerüst – Monet malt die moderne Stadt von innen.",
          "Im Januar 1877 mietet er ein Atelier in der rue Moncey, ganz in der Nähe. Innerhalb weniger Wochen entsteht eine ganze Folge."
        ],
        "fact": "Dieses Bild hängt im Musée d’Orsay. Mehrere Ansichten der Station zeigt Monet 1877 auf der dritten Impressionisten-Ausstellung.",
        "quote": {
          "text": "Ich bin so ziemlich eingerichtet, 17, rue Moncey. Wenn Sie morgen oder übermorgen einen Moment erübrigen können, bin ich dort von zwölf bis halb fünf.",
          "cite": "Brief an Georges Charpentier, Paris, 17. Januar 1877"
        }
      },
      {
        "pid": "lazarenormand",
        "text": [
          "Der Zug aus der Normandie kommt an: Lokomotive, Dampf, das Licht unter dem Dach. Monet kennt diese Strecke gut – sie führt nach Le Havre, in seine Jugend.",
          "Er malt nicht den Fahrplan, sondern den Moment, in dem der Dampf die Halle füllt."
        ],
        "fact": "Das Bild hängt im Art Institute of Chicago und gehört zu den bekanntesten der Saint-Lazare-Folge."
      },
      {
        "pid": "lazareout",
        "text": [
          "Von aussen sieht man die Hallen, die Schienen, den Rauch vor den Häusern. Der Bahnhof ist kein geschlossener Raum mehr, sondern Teil der Stadt.",
          "Monet wechselt den Standpunkt, wie später bei den Schobern und Pappeln: dasselbe Motiv, ein anderes Licht, eine andere Seite."
        ],
        "fact": "Das Bild von 1877 befindet sich in Privatbesitz. Es zeigt die Station von der Gleisseite, nicht aus der Halle."
      },
      {
        "pid": "lazaresun",
        "text": [
          "Bei Sonne wird der Dampf hell, fast weiss, die Gebäude dahinter lösen sich auf. Monet sucht den Effekt, nicht die Architektur.",
          "Die Folge ist kurz und dicht: innen, aussen, Ankunft, Signale, Gleise – alles im selben Winter und Frühling 1877."
        ],
        "fact": "Das Bild von 1877 befindet sich in Privatbesitz. Der Titel nennt ausdrücklich den Sonneneffekt."
      },
      {
        "pid": "lazaresignal",
        "text": [
          "Im Vordergrund stehen die Signalscheiben, dahinter der Dampf und die Häuser. Monet holt die Technik des Bahnhofs ganz nach vorn.",
          "Das Bild hängt in Hannover und gehört zu den Aussenansichten der Folge."
        ],
        "fact": "Das Bild gehört dem Niedersächsischen Landesmuseum Hannover."
      },
      {
        "pid": "lazaretrack",
        "text": [
          "Zwischen Gleisen und Zäunen liegt der Bahnhof offen da, der Rauch steigt zwischen den Dächern auf. Man steht nicht in der Halle, sondern auf den Anlagen.",
          "Mit dieser Folge nimmt Monet ein Motiv der modernen Stadt ernst – so ernst wie später das Licht auf einem Getreideschober."
        ],
        "fact": "Das Bild hängt im Pola Museum of Art in Hakone."
      }
    ]
  },
  {
    "id": "vetheuil",
    "place": "Vétheuil",
    "when": "1878–1881",
    "map": {
      "x": 88,
      "y": 108,
      "labelDy": 16
    },
    "mapLabel": "Vétheuil",
    "intro": [
      "1878 zieht Monet nach Vétheuil an der Seine, mit Camille und den Söhnen Jean und Michel. Nach dem Bankrott von Ernest Hoschedé leben auch Alice Hoschedé und ihre Kinder im selben Haus.",
      "Am 5. September 1879 stirbt Camille in Vétheuil, 32 Jahre alt. Zurück bleiben Jean und Michel. Monet malt weiter: das Dorf, die Kirche, den Garten – und im harten Winter 1879–1880 den Eisgang auf der Seine. Lavacourt liegt knapp gegenüber."
    ],
    "works": [
      {
        "pid": "vethsummer",
        "text": [
          "Vétheuil liegt im Sommer hell an der Seine: Häuser, Bäume, die Kirche, das Wasser voller Spiegelungen. Monet malt das Dorf von der Flussseite.",
          "Nach den engen Jahren in Argenteuil ist dies ein neuer, stillerer Ort – und für eine Zeit das gemeinsame Haus zweier Familien."
        ],
        "fact": "Das Bild von 1880 hängt im Metropolitan Museum in New York."
      },
      {
        "pid": "vethchurch",
        "text": [
          "Die Kirche von Vétheuil steht fest zwischen den Häusern, der Turm hell gegen den Himmel. Monet malt sie oft, zu verschiedenen Jahreszeiten.",
          "Das Dorf wird zum Alltag: der Fluss vor der Tür, die Kirche im Blick, die Kinder im Haus."
        ],
        "fact": "Diese Ansicht von 1878 hängt in den National Galleries of Scotland in Edinburgh."
      },
      {
        "pid": "vethgarden",
        "text": [
          "Im Garten von Vétheuil stehen Sonnenblumen hoch vor dem Haus, Kinder auf dem Weg, der Himmel ist klar. Das Bild ist hell und freundlich.",
          "Es entsteht 1881, zwei Jahre nach Camilles Tod. Das Leben im Haus geht weiter, mit Alice und den Kindern beider Familien."
        ],
        "fact": "Das Bild hängt in der National Gallery of Art in Washington. Die Sonnenblumen machen es zu einem der zugänglichsten Bilder dieser Jahre."
      },
      {
        "pid": "lavacourt",
        "text": [
          "Der Winter 1879 liegt schwer auf Lavacourt, dem Dorf gegenüber von Vétheuil. Schnee, kahle Bäume, das graue Wasser.",
          "Im September ist Camille gestorben. Monet schreibt an Pissarro, er wisse nicht, wie er das Leben mit den zwei Söhnen einrichten solle – und malt weiter."
        ],
        "fact": "Das Bild von 1879 befindet sich in Privatbesitz. Lavacourt liegt unmittelbar auf der anderen Seineseite.",
        "quote": {
          "text": "Danke für Ihren Brief und die Anteilnahme, die Sie mir ausgesprochen haben; Sie müssen in der Tat besser als jeder andere wissen, welchen Kummer ich haben kann. Ich bin am Boden, weiss nicht, wie ich mich umwenden soll, noch wie ich mein Leben mit meinen zwei Kindern einrichten kann.",
          "cite": "Brief an Camille Pissarro, Vétheuil, 26. September 1879"
        }
      },
      {
        "pid": "lavaseine",
        "text": [
          "Die Seine bei Lavacourt ist breit, das Ufer flach, der Himmel offen. Monet malt den Fluss auch ohne Eis, als weite, ruhige Fläche.",
          "Zwischen Vétheuil und Lavacourt liegt nur das Wasser. Viele Motive dieser Jahre entstehen vom einen oder anderen Ufer."
        ],
        "fact": "Das Bild von 1879 befindet sich in Privatbesitz."
      },
      {
        "pid": "icebreak",
        "text": [
          "Im Januar 1880 bricht das Eis auf der Seine. Schollen treiben, die Ufer sind überschwemmt, Bäume stehen im Wasser. Monet geht hinaus und malt die Débâcle.",
          "Es ist eine der frühesten Folgen, in denen er dasselbe Motiv unter wechselndem Licht und Wetter immer wieder aufnimmt."
        ],
        "fact": "Diese Fassung hängt im University of Michigan Museum of Art in Ann Arbor. Monet malt den Eisgang in rund zwanzig Bildern.",
        "quote": {
          "text": "Wir haben hier einen schrecklichen Eisgang gehabt, und natürlich habe ich versucht, etwas daraus zu machen, das ich Ihnen bei meiner nächsten Reise zeigen werde.",
          "cite": "Brief an Georges de Bellio, Vétheuil, 8. Januar 1880"
        }
      },
      {
        "pid": "icedebacle",
        "text": [
          "Wieder der Eisgang bei Vétheuil: Schollen, kahle Bäume, ein weiter, kalter Himmel. Jede Fassung sucht ein anderes Licht.",
          "Was später die Getreideschober und die Pappeln werden, beginnt hier schon: dasselbe Motiv, viele Zustände."
        ],
        "fact": "Diese Fassung von 1880 gehört dem Musée du Louvre in Paris."
      },
      {
        "pid": "lavesun",
        "text": [
          "Über Lavacourt geht die Sonne unter: der Himmel glüht, der Fluss nimmt die Farbe auf, das Dorf liegt dunkel am Ufer.",
          "Nach dem eisigen Winter malt Monet auch das milde Licht. Die Seine bleibt sein grosses Thema."
        ],
        "fact": "Das Bild von 1880 befindet sich in Privatbesitz."
      }
    ]
  },
  {
    "id": "normandie",
    "place": "Normandie · Fécamp, Pourville, Étretat",
    "when": "1881–1886",
    "map": {
      "x": 74,
      "y": 80
    },
    "mapLabel": "Normandie",
    "intro": [
      "Ab 1881 arbeitet Monet oft an der normannischen Küste: zuerst in Fécamp, dann in Pourville und Varengeville, später in Étretat.",
      "1881 bis 1883 wohnt die Familie zeitweise in Poissy, damit Jean zur Schule gehen kann; Monet selbst ist oft an der See. An Alice schreibt er von der Küste. In Étretat nimmt er die berühmte Klippe nach Courbet auf – und will sie anders malen."
    ],
    "works": [
      {
        "pid": "fecampcliff",
        "text": [
          "Die Klippe bei Fécamp fällt steil zum Meer, Gras oben, weisse Kreide, die See darunter. Monet kommt im März 1881 an die Küste, um Marinen zu malen.",
          "Er bleibt länger als geplant. Die See tut ihm gut, nach den Jahren in Vétheuil."
        ],
        "fact": "Das Bild hängt in der Aberdeen Art Gallery."
      },
      {
        "pid": "fecampsea",
        "text": [
          "Hier ist fast nur das Meer: Wellen, Schaum, ein streifiger Himmel, kaum ein festes Ufer. Monet geht nah an die Brandung.",
          "An Durand-Ruel schreibt er aus Fécamp, es gehe ihm so gut, dass er gerne länger bleibe."
        ],
        "fact": "Das Bild von 1881 hängt im Musée d’art moderne André Malraux in Le Havre, in Monets Heimatstadt.",
        "quote": {
          "text": "Wie ich Ihnen angekündigt hatte, bin ich für einen kurzen Aufenthalt an die Küste gekommen, und es geht mir so gut, dass ich grossen Wunsch habe, etwas länger zu bleiben.",
          "cite": "Brief an Paul Durand-Ruel, Fécamp, 23. März 1881"
        }
      },
      {
        "pid": "pourvillelow",
        "text": [
          "Bei Ebbe liegt die Küste von Pourville flach und weit, das Wasser zieht sich zurück, die Klippen stehen im Licht. Monet wohnt praktisch auf dem Kies.",
          "1881 bis 1883 lebt die Familie zeitweise in Poissy, damit Jean zur Schule gehen kann. Monet selbst ist oft an der See. Alice schreibt er von der Küste."
        ],
        "fact": "Das Bild von 1882 hängt im Cleveland Museum of Art.",
        "quote": {
          "text": "Das Land ist sehr schön, und ich bedaure sehr, nicht früher gekommen zu sein, statt meine Zeit in Dieppe zu verlieren. Man kann dem Meer nicht näher sein, als ich es bin, direkt auf dem Kies, und die Wellen schlagen an den Fuss des Hauses.",
          "cite": "Brief an Alice Hoschedé, Pourville, 15. Februar 1882"
        }
      },
      {
        "pid": "pourvillewalk",
        "text": [
          "Zwei Frauen in Weiss stehen auf der Klippe von Pourville, der Wind fasst die Kleider, das Meer liegt tief darunter. Es sind Alice und ihre Tochter Blanche.",
          "Das Bild ist hell und weit. Monet malt die Menschen klein gegen Himmel und See – und doch ganz dabei."
        ],
        "fact": "Das Bild hängt im Art Institute of Chicago. Blanche Hoschedé wird später selbst malen und Monet beim Arbeiten helfen."
      },
      {
        "pid": "pourvillebeach",
        "text": [
          "Der Strand von Pourville ist eine lange Kurve aus Sand, Wasser und Klippe. Wenige Boote, viel Himmel.",
          "Monet kommt 1882 wiederholt hierher. Die Normandie-Küste wird für einige Jahre sein Atelier im Freien."
        ],
        "fact": "Das Bild von 1882 befindet sich in Privatbesitz."
      },
      {
        "pid": "varensun",
        "text": [
          "Die kleine Kirche von Varengeville sitzt oben auf der Klippe, im Abendlicht, vor Kiefern und dem Meer. Das Dorf liegt bei Dieppe, nicht weit von Pourville.",
          "Monet malt die Kirche zu verschiedenen Tageszeiten. Die Abendsonne färbt Stein, Gras und Wasser."
        ],
        "fact": "Das Bild von 1882 befindet sich in Privatbesitz."
      },
      {
        "pid": "manneporte",
        "text": [
          "Die Manneporte ist das grosse Felsentor von Étretat. Monet stellt sich nah davor: der Bogen füllt fast das Bild, darunter die See.",
          "Courbet hat denselben Felsen berühmt gemalt. Monet kennt das und will es trotzdem – aber anders."
        ],
        "fact": "Das Bild von 1883 hängt im Metropolitan Museum in New York."
      },
      {
        "pid": "etretatcliff",
        "text": [
          "Die Klippe d’Aval bei Étretat tritt als Nadel und Tor ins Meer. Monet malt sie 1885 noch einmal, zwei Jahre nach dem ersten, kühnen Anlauf.",
          "An Alice schreibt er schon 1883, er wolle eine grosse Leinwand der Klippe machen, obwohl Courbet sie bewundernswert gemalt habe."
        ],
        "fact": "Das Bild von 1885 hängt im Israel-Museum in Jerusalem.",
        "quote": {
          "text": "Ich rechne damit, eine grosse Leinwand von der Klippe von Étretat zu machen, obwohl es meinerseits furchtbar kühn ist, das nach Courbet zu tun, der sie bewundernswert gemacht hat; aber ich werde versuchen, sie anders zu machen.",
          "cite": "Brief an Alice Hoschedé, Étretat, 1. Februar 1883"
        }
      }
    ]
  },
  {
    "id": "riviera",
    "place": "Bordighera und die Riviera",
    "when": "1884–1888",
    "map": {
      "x": 175,
      "y": 185
    },
    "mapLabel": "Bordighera",
    "intro": [
      "1884 schickt Durand-Ruel Monet an die italienische Riviera. Er richtet sich in Bordighera ein: Palmen, Villen, der Garten der Villa Moreno. Das südliche Licht ist neu für ihn.",
      "1888 kehrt er an das Mittelmeer zurück, diesmal nach Antibes auf der französischen Seite."
    ],
    "works": [
      {
        "pid": "bordighera",
        "text": [
          "In Bordighera an der italienischen Riviera stehen Palmen und Häuser unter einem hellen Himmel, das Meer schimmert zwischen den Bäumen. Monet kommt 1884 im Auftrag Durand-Ruels.",
          "Das südliche Licht ist neu für ihn. Er weiss zuerst nicht, wohin er schauen soll, und verbraucht viel Farbe."
        ],
        "fact": "Das Bild hängt im Art Institute of Chicago.",
        "quote": {
          "text": "Ich bin in einem märchenhaften Land eingerichtet. Ich weiss nicht, wohin ich zuerst schauen soll, alles ist prächtig, und ich möchte alles machen; darum verbrauche und verschwende ich viel Farbe, denn es gibt Versuche zu machen.",
          "cite": "Brief an Théodore Duret, Bordighera, 2. Februar 1884"
        }
      },
      {
        "pid": "villabord",
        "text": [
          "Villen stehen zwischen Palmen, darüber ein violetter Bergrücken. Bordighera wirkt wie ein Garten am Meer.",
          "Monet bleibt den Winter über. Er schickt Bilder nach Paris und klagt, das Motiv sei schwierig – und herrlich."
        ],
        "fact": "Das Bild von 1884 hängt im Musée d’Orsay."
      },
      {
        "pid": "palmtrees",
        "text": [
          "Palmen füllen fast die ganze Fläche, dazwischen ein Streifen Meer und ferne Berge. Monet rückt den Pflanzen so nah wie später den Seerosen.",
          "Die Riviera gibt ihm eine neue Palette: Rosa, Türkis, ein anderes Grün."
        ],
        "fact": "Das Bild von 1884 hängt im Metropolitan Museum in New York."
      },
      {
        "pid": "morenogard",
        "text": [
          "Im Garten der Villa Moreno wuchern Palmen, Agaven, Wege im Schatten. Monet darf den privaten Garten malen, eine der reichsten Pflanzenwelten von Bordighera.",
          "Er sucht nicht die Promenade, sondern das Innere des Grüns."
        ],
        "fact": "Das Bild von 1884 befindet sich in Privatbesitz."
      },
      {
        "pid": "antibes",
        "text": [
          "Antibes liegt golden vor den fernen, oft noch schneebedeckten Alpen, das Meer ist hell. 1888 kommt Monet zurück an das Mittelmeer, diesmal auf die französische Seite.",
          "Wieder ist das Licht das Thema: nicht die Stadtmauer allein, sondern die Luft darüber."
        ],
        "fact": "Das Bild von 1888 gehört der Sammlung Pérez Simón."
      },
      {
        "pid": "antibesfort",
        "text": [
          "Das Fort von Antibes sitzt auf der Landzunge, fest und klein gegen das offene Wasser. Monet hält Abstand und lässt viel Himmel und See stehen.",
          "Die Antibes-Bilder entstehen in wenigen Monaten, als eine lockere Folge von Standpunkten und Tageszeiten."
        ],
        "fact": "Das Bild von 1888 befindet sich in Privatbesitz."
      }
    ]
  },
  {
    "id": "belleile",
    "place": "Belle-Île",
    "when": "1886",
    "map": {
      "x": 32,
      "y": 152
    },
    "mapLabel": "Belle-Île",
    "intro": [
      "1886 verbringt Monet Wochen auf Belle-Île vor der bretonischen Küste, in Kervilahouen. Der Atlantik ist anders als der Ärmelkanal: Grotten, Nadeln, Felsen im Sturm.",
      "Er muss sich, wie er an Alice schreibt, erst mit dieser Natur vertraut machen."
    ],
    "works": [
      {
        "pid": "pyramids",
        "text": [
          "Die Felspyramiden von Port-Coton stehen wie Nadeln im Atlantik, die See zerbricht sich an ihnen, die Sonne liegt auf dem Schaum.",
          "1886 arbeitet Monet wochenlang auf Belle-Île, in Kervilahouen. Die Küste ist wilder als die der Normandie."
        ],
        "fact": "Das Bild von 1886 befindet sich in Privatbesitz."
      },
      {
        "pid": "pyramids2",
        "text": [
          "Dieselbe Küste, eine andere Stunde: die Pyramiden von Port-Coton noch einmal, der Schaum anders, das Licht kühler oder dichter.",
          "Monet malt die Nadeln in mehreren Fassungen. Das Motiv hält still, das Wetter nicht."
        ],
        "fact": "Diese Fassung hängt im Puschkin-Museum in Moskau."
      },
      {
        "pid": "belleilestorm",
        "text": [
          "Ein Sturm trifft auf die Küste von Belle-Île: dunkles Wasser, weisser Schaum, die Felsen schwer und nah. Monet bleibt im Wetter.",
          "An Alice schreibt er, die See sei von besonderer Schönheit, die Felsen eine Anhäufung von Grotten, Spitzen und Nadeln."
        ],
        "fact": "Das Bild von 1886 hängt im Musée d’Orsay.",
        "quote": {
          "text": "Es ist prächtig, aber so anders als der Ärmelkanal, dass ich mich mit dieser Natur vertraut machen muss; die See ist von einer ganz besonderen Schönheit, und die Felsen sind eine Anhäufung von Grotten, Spitzen und aussergewöhnlichen Nadeln.",
          "cite": "Brief an Alice Hoschedé, Kervilahouen, 18. September 1886"
        }
      },
      {
        "pid": "lionrock",
        "text": [
          "Der Löwenfelsen von Port-Coton lagert im Wasser wie ein Tier. Monet fasst die Form knapp, das Meer darum unruhig.",
          "Er muss sich, wie er schreibt, erst mit dieser Natur vertraut machen: sie ist anders als der Ärmelkanal."
        ],
        "fact": "Das Bild von 1886 hängt im Fitzwilliam Museum in Cambridge."
      },
      {
        "pid": "portdomois",
        "text": [
          "Bei Port-Domois fallen die Felsen steil ab, das Wasser ist tiefblau und violett, der Ausschnitt eng. Monet sucht das Dramatische der Küste.",
          "Viele dieser Bilder entstehen in kurzer Folge, oft bei Wind, vom selben Küstenweg aus."
        ],
        "fact": "Das Bild von 1886 hängt im Cincinnati Art Museum."
      },
      {
        "pid": "portgoulphar",
        "text": [
          "Port-Goulphar ist eine Bucht zwischen Felsen, das Wasser darunter grün und unruhig. Monet kehrt 1887 noch einmal zu diesem Motiv zurück.",
          "Auch hier zählt weniger der Ortsname als das Verhältnis von Stein, See und Licht."
        ],
        "fact": "Das Bild von 1887 hängt in der Art Gallery of New South Wales in Sydney."
      }
    ]
  },
  {
    "id": "creuse",
    "place": "Die Creuse",
    "when": "1889",
    "map": {
      "x": 138,
      "y": 196
    },
    "mapLabel": "Creuse",
    "intro": [
      "1889 arbeitet Monet in Fresselines, im Tal der Creuse. Stromschnellen, Schluchten, dasselbe Tal bei grauem Wetter und bei Sonne.",
      "Die Gegend ist herb und weit vom Meer. Auch hier malt er dasselbe Motiv in mehreren Zuständen – ein weiterer Schritt zu den Serien von Giverny."
    ],
    "works": [
      {
        "pid": "rapidscreuse",
        "text": [
          "Die Petite Creuse stürzt bei Fresselines über Steine, das Wasser ist hell, die Ufer dunkel. Monet arbeitet 1889 in diesem Flusstal, weit im Inland.",
          "Nach Meer und Riviera ist die Creuse rau und eng. Er bleibt trotzdem und malt den Fluss wieder und wieder."
        ],
        "fact": "Das Bild hängt im Metropolitan Museum in New York."
      },
      {
        "pid": "valleycreuse",
        "text": [
          "Das Tal der Creuse öffnet sich zwischen Hügeln, der Fluss liegt tief, die Hänge sind kahl oder spärlich bewachsen.",
          "Monet sucht hier nicht das Idyll. Die Gegend ist herb, das Licht wechselt schnell."
        ],
        "fact": "Das Bild von 1889 befindet sich in Privatbesitz."
      },
      {
        "pid": "ravincreuse",
        "text": [
          "Die Schluchten der Creuse führen den Blick in die Tiefe, der Fluss glänzt wie ein Band. Das Tal wirkt geschlossen, fast streng.",
          "In Reims hängt eine der klarsten Fassungen dieses Motivs."
        ],
        "fact": "Das Bild von 1889 hängt im Musée des Beaux-Arts in Reims."
      },
      {
        "pid": "creusegrey",
        "text": [
          "Bei grauem Wetter liegen die Häuser an der Creuse gedämpft im Hang, die Farbe geht zurück, die Form bleibt.",
          "Monet nimmt dasselbe Tal bei Sonne und bei Bedeckung auf – ein weiterer Schritt zur späteren Serie."
        ],
        "fact": "Das Bild von 1889 befindet sich in Privatbesitz."
      },
      {
        "pid": "creusesun",
        "text": [
          "Dieselbe Gegend im Sonnenlicht: wärmere Hänge, ein hellerer Fluss, die Häuser klarer. Der Unterschied zum grauen Wetter ist das ganze Bild.",
          "1889 geht Monet von Fresselines zurück nach Giverny. Die nächsten grossen Serien entstehen vor der eigenen Tür."
        ],
        "fact": "Das Bild von 1889 befindet sich in Privatbesitz."
      }
    ]
  },
  {
    "id": "giverny1",
    "place": "Giverny",
    "when": "1883–1891",
    "map": {
      "x": 100,
      "y": 96,
      "labelDy": -14
    },
    "mapLabel": "Giverny",
    "intro": [
      "Im Frühling 1883 mietet Monet ein Haus in Giverny; später wird er es kaufen. Alice und die Kinder kommen mit. Er ist, wie er an Pissarro schreibt, sehr zufrieden, hier zu sein.",
      "Er legt einen Garten an, malt die Familie im Boot auf der Epte und beginnt ab 1890 die Serien, die den Ort berühmt machen: Getreideschober auf den Feldern, Pappeln am Fluss. Der Seerosenteich, London, Venedig und der späte Garten liegen noch vor ihm."
    ],
    "works": [
      {
        "pid": "bargiverny",
        "text": [
          "Alice und die Kinder sitzen in einer norwegischen Barke auf dem Epte-Arm bei Giverny, hell gekleidet, das Wasser dunkelgrün um sie.",
          "Im Frühling 1883 hat Monet das Haus in Giverny gemietet. An Pissarro schreibt er, er sei sehr zufrieden, hier zu sein. Die Familie folgt; das Haus wird zur Heimat."
        ],
        "fact": "Das Bild von 1887 hängt im Musée d’Orsay. Es zeigt das gemeinsame Leben, wenige Jahre nach der Ankunft.",
        "quote": {
          "text": "Ich bin sehr zufrieden, hier zu sein, eine prächtige Gegend.",
          "cite": "Brief an Camille Pissarro, Giverny, Juni 1883"
        }
      },
      {
        "pid": "springgiverny",
        "text": [
          "Der Frühling in Giverny ist weich und grün: Bäume in Blüte, eine weite Wiese, ein heller Himmel. Monet malt die Gegend, die er sich 1883 ausgesucht hat.",
          "Bald kauft er das Haus. Der Garten, den er anlegt, wird später weltberühmt – hier ist er noch vor allem Landschaft."
        ],
        "fact": "Das Bild von 1890 hängt im Clark Art Institute in Williamstown."
      },
      {
        "pid": "haystacks",
        "text": [
          "Zwei Getreideschober stehen am Mittag im Feld bei Giverny, fest und einfach, das Licht hell auf den Flächen.",
          "Ab 1890 malt Monet dieselben Schober zu vielen Stunden und Wetterlagen. Das Motiv ist bescheiden; das Licht ist es nicht."
        ],
        "fact": "Dieses Bild von 1890 hängt in der National Gallery of Australia in Canberra und gehört schon zur berühmten Meules-Serie."
      },
      {
        "pid": "hayendsummer",
        "text": [
          "Dieselben Schober, ein anderer Moment: Ende des Sommers, ein weicherer Himmel, die Farbe etwas reifer. Monet arbeitet an mehreren Leinwänden zugleich.",
          "1891 stellt Durand-Ruel eine Gruppe der Getreideschober aus. Der Erfolg ist gross – und bestätigt den Weg der Serie."
        ],
        "fact": "Das Bild von 1891 hängt im Musée d’Orsay."
      },
      {
        "pid": "poplarepte",
        "text": [
          "Pappeln stehen an der Epte, schlank und regelmässig, mit ihren Spiegelungen im Wasser. Monet malt sie 1891 als eigene Serie.",
          "Die Bäume sollen gefällt werden. Monet sorgt dafür, dass sie stehen bleiben, bis er fertig ist."
        ],
        "fact": "Das Bild hängt in den National Galleries of Scotland in Edinburgh."
      },
      {
        "pid": "poplarwind",
        "text": [
          "Der Wind geht durch die Pappeln: die Kronen neigen sich, die Spiegelung zittert. Dieselbe Allee, ein anderer Tag.",
          "Wie bei den Schobern zeigt Monet, dass ein Motiv reicht, wenn das Licht sich ändert."
        ],
        "fact": "Das Bild von 1891 hängt im Musée d’Orsay."
      },
      {
        "pid": "poplarphila",
        "text": [
          "Wieder die Pappeln, in einem wärmeren, goldeneren Licht. Die Stämme teilen die Fläche wie ein Gitter.",
          "Mit den Schobern und den Pappeln schliesst dieser Teil. Vor Monet liegen der Garten, die Seerosen, London und Venedig."
        ],
        "fact": "Das Bild von 1891 hängt im Philadelphia Museum of Art."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
