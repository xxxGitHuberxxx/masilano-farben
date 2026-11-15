// v6.7 Monet life journey, Part 1 (1856–1874).
// Appends to PATH_WORKS / PATHS; does not rewrite the Van Gogh path.
// Letter quotes: self-translated from Monet’s French (Wildenstein, recipient and date).
(function () {
  var works = [
  {
    "id": "carimancon",
    "title": "Karikatur des Léon Manchon",
    "artist": "Claude Monet",
    "year": "um 1856",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Claude Monet - Caricature of Léon Manchon.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "caricassin",
    "title": "Karikatur des Henri Cassinelli",
    "artist": "Claude Monet",
    "year": "um 1858",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Claude Monet - Caricature of Henri Cassinelli - Rufus Croutinelli.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rouelles",
    "title": "Blick auf Rouelles",
    "artist": "Claude Monet",
    "year": "1858",
    "museum": "Marunuma Art Park, Asaka",
    "source": "Wikimedia Commons: «Monet Veduta di Rouelles.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "farmnorm",
    "title": "Bauernhof in der Normandie",
    "artist": "Claude Monet",
    "year": "1863",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Cour de ferme en Normandie - Claude Monet.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "springfl",
    "title": "Frühlingsblumen",
    "artist": "Claude Monet",
    "year": "1864",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Spring Flowers, by Claude Monet, Cleveland Museum of Art, 1953.155.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ruebavole",
    "title": "Rue de la Bavole, Honfleur",
    "artist": "Claude Monet",
    "year": "1864",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Claude Monet - Rue de la Bavole, Honfleur - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "saintsimeon",
    "title": "Weg zur Farm Saint-Siméon",
    "artist": "Claude Monet",
    "year": "1864",
    "museum": "Nationalmuseum für westliche Kunst, Tokio",
    "source": "Wikimedia Commons: «Claude Monet - Walk (Road of the Farm Saint-Siméon) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pavechailly",
    "title": "Der Weg nach Chailly",
    "artist": "Claude Monet",
    "year": "1865",
    "museum": "Ordrupgaard, Kopenhagen",
    "source": "Wikimedia Commons: «Le Pavé de Chailly in the Forest of Fontainebleau (Monet).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bodmeroak",
    "title": "Die Bodmer-Eiche, Fontainebleau",
    "artist": "Claude Monet",
    "year": "1865",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Bodmer Oak, Fontainebleau Forest MET DT1560.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "lunchstudy",
    "title": "Bazille und Camille (Studie)",
    "artist": "Claude Monet",
    "year": "1865",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet, Bazille and Camille (Study for \"Déjeuner sur l'Herbe\"), 1865, NGA 52185.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "lunchpushkin",
    "title": "Das Frühstück im Grünen",
    "artist": "Claude Monet",
    "year": "1865–1866",
    "museum": "Puschkin-Museum, Moskau",
    "source": "Wikimedia Commons: «Claude Monet - Le Déjeuner sur l'herbe (1866) - Pushkin Museum Ж-3307.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pointeheve",
    "title": "Die Pointe de la Hève bei Ebbe",
    "artist": "Claude Monet",
    "year": "1865",
    "museum": "Kimbell Art Museum, Fort Worth",
    "source": "Wikimedia Commons: «Claude Monet - La Pointe de la Hève at Low Tide - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mouthseine",
    "title": "Die Seinemündung bei Honfleur",
    "artist": "Claude Monet",
    "year": "1865",
    "museum": "Norton Simon Museum, Pasadena",
    "source": "Wikimedia Commons: «Claude Monet - Mouth of the Seine - 1865.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "greendress",
    "title": "Camille im grünen Kleid",
    "artist": "Claude Monet",
    "year": "1866",
    "museum": "Kunsthalle Bremen",
    "source": "Wikimedia Commons: «Claude Monet - Camille.JPG», gemeinfrei (Public Domain)"
  },
  {
    "id": "womengarden",
    "title": "Frauen im Garten",
    "artist": "Claude Monet",
    "year": "1866",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet 024.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "steadresse",
    "title": "Garten in Sainte-Adresse",
    "artist": "Claude Monet",
    "year": "1867",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Claude Monet - Jardin à Sainte-Adresse.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "beachadresse",
    "title": "Der Strand von Sainte-Adresse",
    "artist": "Claude Monet",
    "year": "1867",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Claude Monet - The Beach at Sainte-Adresse - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "regattadresse",
    "title": "Regatta in Sainte-Adresse",
    "artist": "Claude Monet",
    "year": "1867",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Claude Monet, 1867, Regatta at Sainte-Adresse, Metropolitan Museum of Art.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "greenvave",
    "title": "Die grüne Welle",
    "artist": "Claude Monet",
    "year": "1866–1867",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Green Wave MET DT1896.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "luncheon68",
    "title": "Das Mittagessen",
    "artist": "Claude Monet",
    "year": "1868",
    "museum": "Städel Museum, Frankfurt",
    "source": "Wikimedia Commons: «Claude Monet - The Luncheon - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bennecourt",
    "title": "Am Seine-Ufer, Bennecourt",
    "artist": "Claude Monet",
    "year": "1868",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Claude Monet - On the Bank of the Seine, Bennecourt - 1922.427 - Art Institute of Chicago.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "grenoumet",
    "title": "La Grenouillère",
    "artist": "Claude Monet",
    "year": "1869",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «La Grenouillère MET DT833.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "grenoulon",
    "title": "Badende bei La Grenouillère",
    "artist": "Claude Monet",
    "year": "1869",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Claude Monet - Bathers at La Grenouillère.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bougivalbr",
    "title": "Die Brücke von Bougival",
    "artist": "Claude Monet",
    "year": "1869",
    "museum": "Currier Museum of Art, Manchester",
    "source": "Wikimedia Commons: «Bougival le pont Claude Monet 1869.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "seinebougival",
    "title": "Die Seine bei Bougival",
    "artist": "Claude Monet",
    "year": "1869",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «LA SEINE À BOUGIVAL (1869) Claude Monet (W143).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "traincountry",
    "title": "Zug in der Landschaft",
    "artist": "Claude Monet",
    "year": "1870",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - Train in the Countryside - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rochesnoires",
    "title": "Hôtel des Roches Noires, Trouville",
    "artist": "Claude Monet",
    "year": "1870",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - Hôtel des roches noires. Trouville - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "camillebeach",
    "title": "Camille am Strand von Trouville",
    "artist": "Claude Monet",
    "year": "1870",
    "museum": "Yale University Art Gallery, New Haven",
    "source": "Wikimedia Commons: «Claude Monet - Camille on the Beach in Trouville - 1998.46.1 - Yale University Art Gallery.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "thameswest",
    "title": "Die Themse bei Westminster",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Claude Monet - The Thames below Westminster.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hydepark",
    "title": "Hyde Park, London",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "RISD Museum, Providence",
    "source": "Wikimedia Commons: «Claude Monet - Hyde Park, London (c. 1871).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "poollondon",
    "title": "The Pool of London",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "National Museum Cardiff",
    "source": "Wikimedia Commons: «Amgueddfa Cymru - Afon Tafwys yn Llundain - The Pool of London - 2651.jpeg», CC0 (gemeinfrei)"
  },
  {
    "id": "meditation",
    "title": "Meditation. Madame Monet auf dem Sofa",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - Méditation. Madame Monet au canapé.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "boatszaan",
    "title": "Boote in Zaandam",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "Museum Barberini, Potsdam",
    "source": "Wikimedia Commons: «Monet 1871 Boats at Zaandamn.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "molenszaan",
    "title": "Windmühlen bei Zaandam",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "Van Gogh Museum, Amsterdam",
    "source": "Wikimedia Commons: «Molens bij Zaandam - s0503S2001 - Van Gogh Museum.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "achterzaan",
    "title": "Häuser an der Achterzaan",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Houses on the Achterzaan MET DT719.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "housezaan",
    "title": "Haus an der Zaan in Zaandam",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "Städel Museum, Frankfurt",
    "source": "Wikimedia Commons: «The House on the River Zaan in Zaandam.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "canalzaan",
    "title": "Kanal in Zaandam",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "Singer Laren (Sammlung Van Vlissingen)",
    "source": "Wikimedia Commons: «Monet - Canal in Zaandam (Q50765327, VVAF).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "windzaan",
    "title": "Windmühlen bei Zaandam",
    "artist": "Claude Monet",
    "year": "1871",
    "museum": "Walters Art Museum, Baltimore",
    "source": "Wikimedia Commons: «Claude Monet - Windmills Near Zaandam - Walters 37894.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "artihouse",
    "title": "Das Haus des Künstlers in Argenteuil",
    "artist": "Claude Monet",
    "year": "1873",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Claude Monet - The Artist's House at Argenteuil - 1933.1153 - Art Institute of Chicago.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "artigarden",
    "title": "Der Garten des Künstlers in Argenteuil",
    "artist": "Claude Monet",
    "year": "1873",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet, The Artist's Garden in Argenteuil (A Corner of the Garden with Dahlias), 1873, NGA 72138.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hobbyhorse",
    "title": "Jean Monet auf dem Steckenpferd",
    "artist": "Claude Monet",
    "year": "1872",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Claude Monet - Jean Monet on his Hobby Horse.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "autumneff",
    "title": "Herbsteffekt in Argenteuil",
    "artist": "Claude Monet",
    "year": "1873",
    "museum": "Courtauld Gallery, London",
    "source": "Wikimedia Commons: «Claude Monet 027.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "redkerchief",
    "title": "Das rote Tuch",
    "artist": "Claude Monet",
    "year": "um 1873",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «The Red Kerchief, by Claude Monet, Cleveland Museum of Art, 1958.39.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "argbridge",
    "title": "Die Brücke von Argenteuil",
    "artist": "Claude Monet",
    "year": "1874",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - The Argenteuil Bridge - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "capucines",
    "title": "Boulevard des Capucines",
    "artist": "Claude Monet",
    "year": "1873",
    "museum": "Nelson-Atkins Museum of Art, Kansas City",
    "source": "Wikimedia Commons: «Claude Monet - Boulevard des Capucines - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "railbridge",
    "title": "Die Eisenbahnbrücke von Argenteuil",
    "artist": "Claude Monet",
    "year": "1873",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Claude Monet - The Railway Bridge at Argenteuil (Philadelphia).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "argbassin",
    "title": "Das Becken von Argenteuil",
    "artist": "Claude Monet",
    "year": "1874",
    "museum": "Präfekturmuseum Mie, Tsu",
    "source": "Wikimedia Commons: «Claude Monet - Le Bassin de d'Argenteuil vu depuis le pont routier.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "studioboat",
    "title": "Das Atelierboot",
    "artist": "Claude Monet",
    "year": "1874",
    "museum": "Kröller-Müller Museum, Otterlo",
    "source": "Wikimedia Commons: «Claude Monet - Le bateau-atelier.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "regattaarg",
    "title": "Regatta in Argenteuil",
    "artist": "Claude Monet",
    "year": "1872",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - Regattas at Argenteuil - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "monet",
  "name": "Claude Monet",
  "title": "Monets Lebensweg",
  "life": "1840–1926",
  "part": "Teil 1 · 1856–1874",
  "subtitle": "Von Le Havre bis zur ersten Impressionisten-Ausstellung",
  "cover": "sunrise",
  "intro": "Reise mit Claude Monet durch die Jahre, in denen er zum Impressionisten wird: von den Karikaturen in Le Havre und den ersten Landschaften mit Boudin über Paris, Fontainebleau und Camille, über die Seine mit Renoir, das Exil in London und die Mühlen von Zaandam bis nach Argenteuil – zum Sonnenaufgang im Hafen und zur ersten Impressionisten-Ausstellung 1874. Kurze Stationen, Bilder zum Ausmalen und Stimmen aus seinen Briefen an Bazille und Pissarro. Dieser erste Teil umfasst 1856 bis 1874.",
  "ending": [
    "Im April 1874 stellen Monet und seine Freunde unabhängig aus, im Atelier Nadars am Boulevard des Capucines. Louis Leroy macht sich im «Charivari» über «Impression, Sonnenaufgang» lustig und nennt die Gruppe «Impressionnistes». Der Spottname bleibt und wird zur Bezeichnung einer neuen Malerei.",
    "In Argenteuil fehlt oft das Geld. Durand-Ruel kauft, was er kann; es reicht nicht immer. Camille und Jean sind das Zentrum des Hauses, und Monet malt weiter den Fluss, den Himmel, das Licht.",
    "Der Weg geht weiter. In Vétheuil wird Camille krank und stirbt 1879. Die Familie Hoschedé, erst Sammler, dann Weggefährten, tritt in sein Leben. Giverny, der Garten und die Seerosen liegen noch vor ihm – in den nächsten Teilen dieses Lebenswegs."
  ],
  "epilogue": "Im April 1874 stellen Monet und seine Freunde unabhängig aus. Ein Kritiker nennt sie nach «Impression, Sonnenaufgang» «Impressionnistes» – der Name bleibt. In Vétheuil wird Camille später krank; die Familie Hoschedé und Giverny folgen in den nächsten Teilen.",
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
      "id": "lehavre",
      "place": "Le Havre und Honfleur",
      "when": "1856–1864",
      "map": {
        "x": 66,
        "y": 96
      },
      "mapLabel": "Le Havre",
      "intro": [
        "Oscar-Claude Monet wird am 14. November 1840 in Paris geboren und wächst in Le Havre auf. Der Vater führt ein Handelshaus. In der Schule zeichnet der Junge Karikaturen von Lehrern und Bürgern – und verkauft sie.",
        "Eugène Boudin, der das Licht am Strand malt, überredet ihn, vor der Natur zu arbeiten. 1858 entsteht der Blick auf Rouelles, oft als Monets erstes Landschaftsbild genannt. Später kommt Johan Barthold Jongkind dazu.",
        "1859 geht Monet nach Paris, zeichnet an der Académie Suisse und trifft Pissarro. Der Militärdienst in Algerien 1861–1862 unterbricht die Ausbildung. Zurück in der Normandie malt er Höfe, Blumen und die Gassen von Honfleur."
      ],
      "works": [
        {
          "pid": "carimancon",
          "text": [
            "In Le Havre zeichnet der junge Monet Karikaturen von Lehrern und Bürgern. Léon Manchon, ein bekannter Kopf der Stadt, bekommt eine grosse Nase und einen noch grösseren Bart.",
            "Die Blätter verkauft er – oft für ein paar Francs. Der Vater führt ein Handelshaus, der Sohn will zeichnen, nicht Kaufmann werden."
          ],
          "fact": "Monet ist noch ein Teenager. Die Karikaturen sind seine ersten Arbeiten, die in der Stadt zirkulieren und ihm ein wenig eigenes Geld bringen."
        },
        {
          "pid": "caricassin",
          "text": [
            "Henri Cassinelli, genannt «Rufus Croutinelli», ist eine weitere lokale Berühmtheit, die Monet aufs Korn nimmt. Die Linie ist sicher, der Spott freundlich, aber treffend.",
            "In diesen Jahren lernt er, ein Gesicht auf das Wesentliche zu bringen – lange bevor er das Licht auf dem Wasser sucht."
          ],
          "fact": "Viele dieser Karikaturen bewahrt heute das Art Institute of Chicago. Sie zeigen einen anderen Monet als den späteren Maler der Seerosen."
        },
        {
          "pid": "rouelles",
          "text": [
            "Eugène Boudin, der das Licht am Strand von Honfleur malt, überredet den jungen Monet, vor der Natur zu arbeiten. 1858 entsteht dieser Blick auf Rouelles bei Le Havre.",
            "Ein Teich, Pappeln, eine Figur im Gras: noch ruhig und genau, aber schon mit dem Himmel, der ihn nicht mehr loslassen wird."
          ],
          "fact": "Das Bild gilt oft als Monets erstes erhaltenes Landschaftsgemälde. Es ist signiert und datiert 1858."
        },
        {
          "pid": "farmnorm",
          "text": [
            "Nach dem Militärdienst in Algerien (1861–1862) kehrt Monet in die Normandie zurück. Auf diesem Bauernhof stehen Kühe am Tümpel, ein Mann und ein Kind bei der Arbeit, oben ein weiter Himmel.",
            "Boudins Rat, draussen zu malen, trägt Früchte. Monet sucht nicht mehr nur Gesichter, sondern Höfe, Licht und Alltag."
          ],
          "fact": "Das Bild hängt heute im Musée d’Orsay. Monet hat es mit «C. Monet» signiert, noch ohne den Vornamen Claude."
        },
        {
          "pid": "springfl",
          "text": [
            "Neben der Landschaft übt Monet das Stillleben. Flieder, Kirschblüten und Primeln füllen den Tisch, genau beobachtet, fast festlich.",
            "Er ist Anfang zwanzig und will beweisen, dass er ein ernsthafter Maler ist – nicht nur der Karikaturist aus Le Havre."
          ],
          "fact": "Das Stillleben entsteht 1864. In denselben Monaten malt er mit Boudin und Jongkind an der Küste."
        },
        {
          "pid": "ruebavole",
          "text": [
            "In Honfleur, unweit von Le Havre, findet Monet enge Gassen und hellen Putz. Die Rue de la Bavole führt in die Tiefe, die Schatten liegen kühl auf der Mauer.",
            "Boudin und Jongkind sind in der Nähe. Die drei verstehen sich und gehen zusammen vor die Natur."
          ],
          "fact": "Von diesem Motiv gibt es mehr als eine Fassung. Die hier gezeigte hängt in Boston.",
          "quote": {
            "text": "Jongkind und Boudin sind hier, wir verstehen uns wunderbar und verlassen uns nicht mehr.",
            "cite": "Brief an Frédéric Bazille, Honfleur, 26. August 1864"
          }
        },
        {
          "pid": "saintsimeon",
          "text": [
            "Der Weg zur Farm Saint-Siméon führt durch hohe Gräser und Schatten. Oben, zwischen den Bäumen, ein Stück Himmel.",
            "Hier, bei Honfleur, entdeckt Monet Tag für Tag neue Motive. Er möchte am liebsten alles auf einmal malen."
          ],
          "fact": "Die Farm Saint-Siméon war ein beliebter Treffpunkt von Malern an der Seine-Mündung.",
          "quote": {
            "text": "Hier, mein Lieber, ist es wunderbar, und jeden Tag entdecke ich Dinge, die immer schöner sind. Man könnte wahnsinnig werden, so sehr möchte ich alles malen.",
            "cite": "Brief an Frédéric Bazille, Honfleur, 15. Juli 1864"
          }
        }
      ]
    },
    {
      "id": "fontainebleau",
      "place": "Fontainebleau und Chailly",
      "when": "1865–1866",
      "map": {
        "x": 144,
        "y": 174
      },
      "mapLabel": "Fontainebleau",
      "intro": [
        "1865 arbeitet Monet im Wald von Fontainebleau, bei Chailly. Er plant ein grosses Frühstück im Grünen, als Antwort auf Manet. Camille Doncieux steht Modell, der Freund Frédéric Bazille hilft und sitzt auf der Studie mit im Bild.",
        "Das riesige Tuch bleibt unvollendet. Eine vollständige Fassung bewahrt das Puschkin-Museum, Fragmente hängen später in Paris. Im Salon 1865 hat Monet Erfolg mit der Seinemündung und der Pointe de la Hève – der Küste seiner Jugend."
      ],
      "works": [
        {
          "pid": "pavechailly",
          "text": [
            "Im Frühjahr 1865 arbeitet Monet im Wald von Fontainebleau, bei Chailly. Der gepflasterte Weg zieht sich unter hohen Bäumen in die Tiefe.",
            "Er will Bazille zu sich rufen: der Wald sei köstlich. Aus diesen Wochen wird auch der Plan zum grossen Frühstück im Grünen."
          ],
          "fact": "Chailly-en-Bière liegt am Rand des Waldes, südlich von Paris. Monet kehrt später oft in die Natur vor den Toren der Stadt zurück.",
          "quote": {
            "text": "Komm also schnell zu mir, der Wald ist köstlich.",
            "cite": "Brief an Frédéric Bazille, Chailly, 28. April 1865"
          }
        },
        {
          "pid": "bodmeroak",
          "text": [
            "Die grosse Eiche im Wald von Fontainebleau trägt den Namen des Schweizer Zeichners Karl Bodmer, der sie berühmt gemacht hat.",
            "Monet malt den Stamm, das Laub und den Weg daneben in kräftigem Grün. Der Wald ist für ihn Werkstatt und Motiv zugleich."
          ],
          "fact": "Viele Maler der Schule von Barbizon haben denselben Wald gemalt. Monet sucht darin schon ein helleres, bewegteres Licht."
        },
        {
          "pid": "lunchstudy",
          "text": [
            "Für ein riesiges Frühstück im Grünen, als Antwort auf Manet, lässt Monet Freunde im Wald posieren. Auf dieser Studie sitzt Frédéric Bazille, der Malerfreund, der ihn oft mit Geld und Atelier stützt; daneben steht Camille.",
            "Camille Doncieux ist seine Partnerin und sein Modell. Ohne sie wäre das grosse Bild nicht denkbar."
          ],
          "fact": "Bazille ist ein enger Freund aus der Pariser Studienzeit. Er fällt 1870 im Deutsch-Französischen Krieg."
        },
        {
          "pid": "lunchpushkin",
          "text": [
            "Die vollständige Komposition des Frühstücks im Grünen zeigt Gesellschaft zwischen den Bäumen, Gedecke im Gras, Camille mehrfach im Bild.",
            "Das riesige Original bleibt unvollendet und wird später zerschnitten. Diese Fassung in Moskau bewahrt den ganzen Gedanken."
          ],
          "fact": "Zwei Fragmente des grossen Tuchs hängen im Musée d’Orsay. Monet hat das Werk aufgegeben, als er es nicht rechtzeitig für den Salon fertigbekam."
        },
        {
          "pid": "pointeheve",
          "text": [
            "Neben dem Wald bleibt die normannische Küste sein Thema. Bei Ebbe liegt die Pointe de la Hève offen: Felsen, Schlick, ein weiter Himmel, kleine Figuren am Strand.",
            "Monet zeigt das Bild 1865 im Salon – zusammen mit der Seinemündung ein früher öffentlicher Erfolg."
          ],
          "fact": "Die Pointe de la Hève liegt bei Sainte-Adresse, nah an Le Havre, wo Monet aufgewachsen ist."
        },
        {
          "pid": "mouthseine",
          "text": [
            "Schiffe, Wolken und das weite Wasser der Seinemündung bei Honfleur: Monet malt die Stelle, an der der Fluss das Meer trifft.",
            "Im Salon von 1865 fällt das Bild auf. Der junge Maler aus Le Havre gilt plötzlich als Hoffnung."
          ],
          "fact": "Honfleur liegt der Heimatstadt gegenüber, auf der anderen Seite der Mündung. Monet kehrt immer wieder an dieses Wasser zurück."
        }
      ]
    },
    {
      "id": "camille",
      "place": "Camille",
      "when": "1866–1868",
      "map": {
        "x": 126,
        "y": 148
      },
      "mapLabel": "Camille",
      "intro": [
        "1866 hat Camille im grünen Kleid Erfolg im Salon. Die Familie in Le Havre will von der Beziehung nichts wissen. Camille wird schwanger; am 8. August 1867 kommt der Sohn Jean in Paris zur Welt. Monet ist in diesem Sommer oft in Sainte-Adresse bei der Tante, ohne sie.",
        "Die Armut bleibt. In Ville-d’Avray malt er Frauen im Garten, Camille mehrfach. Den Winter 1868/69 verbringen sie in der Normandie: die Elster im Schnee. Das Mittagessen zeigt Camille und den kleinen Jean am Tisch – ein seltenes Bild des Alltags."
      ],
      "works": [
        {
          "pid": "greendress",
          "text": [
            "Camille Doncieux trägt ein langes grünes Kleid und blickt über die Schulter. Das Bild hat 1866 Erfolg im Salon – unter dem Titel «Camille».",
            "Die Familie in Le Havre will von der Beziehung nichts wissen. Camille ist Modell, Partnerin und bald die Mutter seines Kindes."
          ],
          "fact": "Monet ist 25, Camille 19. Das grüne Kleid wird zu einem der bekannten Bilder ihrer ersten gemeinsamen Jahre."
        },
        {
          "pid": "womengarden",
          "text": [
            "Im Garten von Ville-d’Avray stehen vier Frauen in hellen Kleidern zwischen Blumen und Schatten. Camille hat für mehrere Figuren Modell gestanden.",
            "Das grosse Tuch malt Monet im Freien. Es wird vom Salon abgelehnt, später kauft es der Staat."
          ],
          "fact": "Monet hat für das Bild eine Grube ausheben lassen, damit er die obere Zone der Leinwand erreichen konnte, ohne die Leinwand zu neigen."
        },
        {
          "pid": "steadresse",
          "text": [
            "Im Sommer 1867 ist Monet in Sainte-Adresse, bei der Tante. Camille bleibt in Paris; sie erwartet ein Kind. Vom Garten blickt man auf die Mündung und vorbei an Flaggen aufs Wasser.",
            "Die Familie am Geländer ist die seine – Vater, Tante, Cousin –, ohne Camille. Er schreibt an Bazille, er habe der armen Camille helfen können, und wie schwer die Lage sei."
          ],
          "fact": "Am 8. August 1867 kommt der Sohn Jean in Paris zur Welt. Monet ist nicht durchgehend bei Camille.",
          "quote": {
            "text": "Das hat mir sehr gutgetan und grosse Freude gemacht, weil ich dieser armen Camille helfen konnte. Ach, mein Lieber, was für eine schwere Lage das trotzdem ist; sie ist sehr lieb, sehr gutmütig.",
            "cite": "Brief an Frédéric Bazille, Sainte-Adresse, 25. Juni 1867"
          }
        },
        {
          "pid": "beachadresse",
          "text": [
            "Am Strand von Sainte-Adresse sitzen und gehen Spaziergänger, Fischer arbeiten an den Booten, der Himmel ist weit.",
            "Monet kennt diesen Strand aus der Kindheit. Jetzt malt er ihn in der Zeit, in der Camille in Paris auf das Kind wartet."
          ],
          "fact": "Sainte-Adresse liegt direkt neben Le Havre. Von hier aus sieht man bei klarem Wetter weit über die Seinemündung."
        },
        {
          "pid": "regattadresse",
          "text": [
            "Segelboote ziehen vor Sainte-Adresse vorbei, am Ufer stehen Zuschauer, das Wasser ist in kurze, helle Striche gelegt.",
            "Neben dem Familienbild im Garten ist die Regatta ein Bild der Freizeit am Meer – hell, windig, ohne Pathos."
          ],
          "fact": "Monet malt 1867 mehrere Ansichten desselben Ufers. Das Licht ändert sich von Bild zu Bild."
        },
        {
          "pid": "greenvave",
          "text": [
            "Eine grüne Welle hebt sich vor einem dunkleren Meer, ein Boot hält dagegen. Monet malte das Bild um 1866/67, nach japanischen Holzschnitten und nach der eigenen Küste.",
            "Die Bewegung des Wassers wird zum Hauptmotiv – lange bevor er in Giverny die Seerosen malt."
          ],
          "fact": "Das Bild hängt im Metropolitan Museum in New York. Die Farbe des Wassers ist fast so kräftig wie auf einem Druck von Hokusai."
        },
        {
          "pid": "luncheon68",
          "text": [
            "Camille sitzt am gedeckten Tisch, der kleine Jean in der Nähe, ein Gast im Schatten des Gartens. Es ist ein seltenes Bild des Familienalltags.",
            "Das Geld ist knapp, die Anerkennung unsicher. Trotzdem hält Monet diesen ruhigen Mittag fest."
          ],
          "fact": "Das Bild entsteht 1868, wahrscheinlich in Bennecourt oder in der Nähe. Ein Auftrag der Madame Gaudibert in Le Havre hilft der Familie in diesem Jahr kurz weiter."
        },
        {
          "pid": "bennecourt",
          "text": [
            "Am Ufer der Seine bei Bennecourt sitzt Camille, im Wasser spiegelt sich das Dorf. Jean ist noch ein Säugling; die Familie sucht einen günstigen Ort zum Leben.",
            "Die Spiegelung nimmt fast die Hälfte des Bildes ein. Monet übt, was später seine Stärke wird: Wasser als zweites Bild der Welt."
          ],
          "fact": "Bennecourt liegt flussaufwärts von Paris. Monet arbeitet dort 1868 unter schwierigen Geldverhältnissen."
        },
        {
          "pid": "magpie",
          "text": [
            "Im Winter 1868/69 sind Monet, Camille und Jean in der Normandie, bei Étretat. Auf einem Zaun vor dem Schnee sitzt eine einzelne Elster.",
            "Der Schnee ist nicht weiss, sondern blau, rosa, voller Schatten. Viele Zeitgenossen finden das ungewohnt."
          ],
          "fact": "Das Bild gehört zu Monets stillsten Winterlandschaften. Es hängt im Musée d’Orsay."
        }
      ]
    },
    {
      "id": "grenouillere",
      "place": "Bougival und La Grenouillère",
      "when": "1869",
      "map": {
        "x": 82,
        "y": 130
      },
      "mapLabel": "Bougival",
      "intro": [
        "1869 wohnen Monet, Camille und Jean in Saint-Michel bei Bougival. Das Geld reicht oft nicht: zeitweise fehlen Brot, Feuer und Licht. Mit Renoir malt Monet an der Grenouillère, dem beliebten Badeplatz an der Seine.",
        "Die Skizzen sind schnell und hell. Sie gelten später als frühe Impression. Ein Zug in der Landschaft zeigt schon die moderne Welt neben dem Fluss."
      ],
      "works": [
        {
          "pid": "grenoumet",
          "text": [
            "La Grenouillère ist ein beliebtes Bad und Ausflugslokal an der Seine bei Bougival. Monet malt den Steg, die Boote, das lichtgewordene Wasser – neben Renoir, der dasselbe Motiv sucht.",
            "Er nennt die Skizzen selbst «schlechte pochades» und träumt trotzdem von einem grossen Bild der Bäder."
          ],
          "fact": "Renoirs Fassungen von La Grenouillère hängen unter anderem in Stockholm und Winterthur. Die beiden Freunde arbeiten 1869 oft nebeneinander.",
          "quote": {
            "text": "Ich habe schon einen Traum, ein Bild, die Bäder von La Grenouillère, für das ich ein paar schlechte Skizzen gemacht habe, aber es bleibt ein Traum. Renoir, der gerade zwei Monate hier verbracht hat, will dieses Bild auch malen.",
            "cite": "Brief an Frédéric Bazille, Saint-Michel, 25. September 1869"
          }
        },
        {
          "pid": "grenoulon",
          "text": [
            "Badende, ein Steg, kurze Wellen: Monet setzt das Wasser aus vielen hellen Tupfen zusammen.",
            "Was hier noch Skizze scheint, wird zur Sprache der Impression. Renoir steht oft an seiner Seite."
          ],
          "fact": "Diese Fassung hängt in der National Gallery in London. Sie ist unmittelbar neben den Bildern Renoirs aus denselben Wochen zu denken."
        },
        {
          "pid": "bougivalbr",
          "text": [
            "Die Brücke von Bougival überspannt die Seine, ein Weg führt ins Bild, Bäume stehen am Ufer.",
            "Monet, Camille und der kleine Jean wohnen 1869 in Saint-Michel, ganz in der Nähe. Das Leben ist eng und oft ohne Geld."
          ],
          "fact": "Bougival ist vom Pariser Zentrum mit der Bahn gut zu erreichen. Deshalb wird der Ort zum Ausflugsziel – und zum Motiv."
        },
        {
          "pid": "seinebougival",
          "text": [
            "Die Seine bei Bougival liegt ruhig, Häuser und Bäume spiegeln sich. Es ist dasselbe Wasser, an dem die Grenouillère liegt, nur stiller.",
            "Im August 1869 schreibt Monet an Bazille, seit acht Tagen fehle Brot, Wein, Feuer und Licht."
          ],
          "fact": "Saint-Michel bei Bougival ist in diesem Sommer der Wohnort der Familie. Die Lage bleibt unsicher.",
          "quote": {
            "text": "Seit acht Tagen kein Brot, kein Wein, kein Feuer zum Kochen, kein Licht. Es ist grauenhaft.",
            "cite": "Brief an Frédéric Bazille, Saint-Michel, 9. August 1869"
          }
        },
        {
          "pid": "traincountry",
          "text": [
            "Ein Zug zieht durch die weite Landschaft, Rauch steht über den Bäumen, die Wiese bleibt grün und ruhig.",
            "Die moderne Welt kommt ins Bild, ohne das Land zu verdrängen. Monet sieht beides zugleich."
          ],
          "fact": "Das kleine Bild hängt im Musée d’Orsay. Die Eisenbahn hat Orte wie Bougival erst zu nahen Ausflugszielen gemacht."
        }
      ]
    },
    {
      "id": "london",
      "place": "Trouville und London",
      "when": "1870–1871",
      "map": {
        "x": 48,
        "y": 48
      },
      "mapLabel": "London",
      "intro": [
        "Am 28. Juni 1870 heiraten Claude und Camille in Paris. Den Sommer verbringen sie in Trouville, am Strand und vor dem Hôtel des Roches Noires. Dann bricht der Deutsch-Französische Krieg aus. Monet geht mit der Familie nach London.",
        "In London malt er die Themse, den Hyde Park, das Hafenbecken. Der Händler Paul Durand-Ruel, ebenfalls in der Stadt, beginnt Bilder von ihm zu kaufen. Camille sitzt im Innenraum, ein Buch in der Hand."
      ],
      "works": [
        {
          "pid": "rochesnoires",
          "text": [
            "Am 28. Juni 1870 heiraten Claude und Camille in Paris. Den Sommer verbringen sie in Trouville, am Strand und vor dem Hôtel des Roches Noires.",
            "Flaggen knattern im Wind, der Balkon liegt im Gegenlicht. Es ist eine kurze, helle Zeit – dann bricht der Krieg aus."
          ],
          "fact": "Das Hôtel des Roches Noires war ein vornehmes Haus an der Promenade von Trouville. Monet malt es von der Terrasse oder aus einem oberen Stock."
        },
        {
          "pid": "camillebeach",
          "text": [
            "Camille sitzt am Strand von Trouville, in heller Kleidung, den Hut auf, den Blick unter dem Schirm. Der Sand und der Wind sind schnell gemalt.",
            "Wenige Wochen später geht die Familie nach London, weg vom Deutsch-Französischen Krieg."
          ],
          "fact": "Monet malt Camille in Trouville mehrmals am Strand. Die Bilder sind klein und unmittelbar, oft auf Holz."
        },
        {
          "pid": "thameswest",
          "text": [
            "In London malt Monet die Themse bei Westminster: Nebel, Brücke, die Türme des Parlaments als Schemen, ein Boot im Vordergrund.",
            "Der Krieg hat ihn aus Frankreich vertrieben. In der Stadt trifft er den Händler Paul Durand-Ruel, der beginnt, seine Bilder zu kaufen."
          ],
          "fact": "Auch Pissarro und Daubigny sind in diesen Monaten in London. Der Nebel der Themse wird für Monet später, um 1900, noch einmal ein grosses Thema."
        },
        {
          "pid": "hydepark",
          "text": [
            "Der Hyde Park liegt weit und grün, kleine Figuren gehen unter einem hellen Himmel. Monet sucht in London nicht nur den Fluss, sondern auch die Parks.",
            "Die Stadt ist Zuflucht, nicht Heimat. Er bleibt nur, so lange der Krieg und die Unruhe in Frankreich dauern."
          ],
          "fact": "Das Bild gehört zu den eher seltenen Londoner Parkansichten Monets aus dem Winter 1870/71."
        },
        {
          "pid": "poollondon",
          "text": [
            "The Pool of London, das Hafenbecken unterhalb der London Bridge, ist voller Schiffe, Masten und grauem Licht.",
            "Monet findet hier ein anderes Le Havre: Arbeit am Wasser, Dunst und Verkehr – nur unter einem englischen Himmel."
          ],
          "fact": "Das Bild hängt in Cardiff. Es zeigt, wie genau Monet schon 1871 eine fremde Stadt über ihr Wasser liest."
        },
        {
          "pid": "meditation",
          "text": [
            "Camille sitzt auf einem Sofa, ein Buch in der Hand, den Blick gesenkt. Der Raum ist still, der Vorhang hell, das Kleid dunkel.",
            "In der Fremde wird sie zum ruhigen Mittelpunkt. Monet malt nicht nur den Fluss von London, sondern auch sie."
          ],
          "fact": "Das Bild hängt im Musée d’Orsay. Es gehört zu den intimsten Bildnissen Camilles."
        }
      ]
    },
    {
      "id": "zaandam",
      "place": "Zaandam",
      "when": "1871",
      "map": {
        "x": 140,
        "y": 36
      },
      "mapLabel": "Zaandam",
      "intro": [
        "Im Frühjahr 1871 kehrt Monet nicht sofort nach Frankreich zurück. Er bleibt von Mai bis in den Herbst in Zaandam, nördlich von Amsterdam. Die bunten Häuser, die Zaan, die Mühlen und Boote faszinieren ihn.",
        "Camille und Jean sind bei ihm. An Pissarro schreibt er, hier gebe es zu malen für ein ganzes Leben. Im Herbst fährt die Familie zurück nach Frankreich."
      ],
      "works": [
        {
          "pid": "boatszaan",
          "text": [
            "Im Frühjahr 1871 fährt Monet nicht sofort nach Frankreich zurück. Er bleibt in Zaandam, nördlich von Amsterdam, von Mai bis in den Herbst.",
            "Boote liegen an der Zaan, bunten Häusern gegenüber. Er schreibt an Pissarro, hier gebe es zu malen für ein ganzes Leben."
          ],
          "fact": "Camille und Jean sind bei ihm. Zaandam ist in diesen Monaten eine unerwartete Werkstatt zwischen London und der Rückkehr nach Frankreich.",
          "quote": {
            "text": "Zaandam ist besonders bemerkenswert, und es gibt hier zu malen für ein ganzes Leben.",
            "cite": "Brief an Camille Pissarro, Zaandam, 2. Juni 1871"
          }
        },
        {
          "pid": "molenszaan",
          "text": [
            "Mühlen stehen zu Hunderten an der Zaan, die Flügel schneiden den Himmel, das Wasser trägt ihren Widerschein.",
            "Monet ist begeistert von den Farben der Häuser und von den Booten. Die niederländische Landschaft kommt ihm malerisch vor, fast amüsant vor lauter Reichtum an Motiven."
          ],
          "fact": "Dieses Bild hängt im Van Gogh Museum in Amsterdam – ein früher Monet im Haus Vincents, der damals selbst noch nicht in der Stadt malte.",
          "quote": {
            "text": "Ich bin hier wunderbar zum Malen, es ist das Amüsanteste, das man finden kann. Häuser in allen Farben, Mühlen zu Hunderten und entzückende Boote.",
            "cite": "Brief an Camille Pissarro, Zaandam, 17. Juni 1871"
          }
        },
        {
          "pid": "achterzaan",
          "text": [
            "An der Achterzaan stehen schmale Häuser direkt am Wasser, eine Mühle im Hintergrund, der Himmel ist bewegt.",
            "Monet malt die ruhige Seite von Zaandam: Wohnen am Kanal, nicht den Hafenlärm."
          ],
          "fact": "Das Bild gehört dem Metropolitan Museum in New York. Die Achterzaan ist ein Seitenarm der Zaan."
        },
        {
          "pid": "housezaan",
          "text": [
            "Ein Haus steht direkt an der Zaan, spiegelndes Wasser davor, eine typisch niederländische Fassade.",
            "Monet sammelt in wenigen Monaten Dutzende solcher Ansichten. Er arbeitet schnell, weil das Motiv ihn nicht loslässt."
          ],
          "fact": "Das Bild hängt im Städel Museum in Frankfurt. Es zeigt, wie nah Monet an die Häuser herangeht – fast ohne Uferstreifen."
        },
        {
          "pid": "canalzaan",
          "text": [
            "Der Kanal von Zaandam ist ein Spiegel für Wolken, Boote und die grünen und rosigen Häuser am Ufer.",
            "Genau das hat Monet an Pissarro geschrieben: Häuser in allen Farben, Mühlen, entzückende Boote."
          ],
          "fact": "Das Bild gehört der Sammlung Van Vlissingen und ist in Singer Laren zu sehen."
        },
        {
          "pid": "windzaan",
          "text": [
            "Mehrere Mühlen stehen hintereinander unter einem weiten Himmel, das flache Land davor ist grün und feucht.",
            "Zum Herbst 1871 verlässt Monet die Niederlande. Die nächste Wohnung wird in Argenteuil sein, an der Seine bei Paris."
          ],
          "fact": "In wenigen Monaten in Zaandam entsteht eine ganze Gruppe von Bildern. Danach kehrt die Familie nach Frankreich zurück."
        }
      ]
    },
    {
      "id": "argenteuil",
      "place": "Argenteuil · Haus und Fluss",
      "when": "1871–1873",
      "map": {
        "x": 104,
        "y": 112,
        "labelDy": -12
      },
      "mapLabel": "Argenteuil",
      "intro": [
        "Im Dezember 1871 mietet Monet ein Haus in Argenteuil, westlich von Paris, nah an der Seine. Zum ersten Mal hat die Familie einen Garten. Jean reitet auf dem Steckenpferd. Camille erscheint hinter den Fenstern mit einem roten Tuch.",
        "Monet malt das Haus, die Beete, die Brücke, den Fluss im Herbst. 1873 entsteht das Mohnfeld: Camille und Jean auf der Wiese. Das Geld bleibt knapp, aber die Bilder werden heller und sicherer."
      ],
      "works": [
        {
          "pid": "artihouse",
          "text": [
            "Im Dezember 1871 mietet Monet ein Haus in Argenteuil, westlich von Paris, nah an der Seine. Der Garten steht in Blumen, Jean spielt auf dem Kies, die Fassade ist hell.",
            "Zum ersten Mal hat die Familie einen eigenen Garten. Camille und Jean gehören fest in diese Bilder."
          ],
          "fact": "Argenteuil ist mit der Bahn schnell von Paris zu erreichen. Monet bleibt hier bis 1878."
        },
        {
          "pid": "artigarden",
          "text": [
            "Dahlien und hohe Blumen füllen den Garten von Argenteuil, ein Weg führt zur Laube, der Himmel ist leicht.",
            "Monet malt das Haus nicht nur von aussen, sondern die Beete, in denen die Familie den Sommer verbringt."
          ],
          "fact": "Das Bild hängt in der National Gallery of Art in Washington. Der Garten wird in diesen Jahren zu einem seiner wichtigsten Motive."
        },
        {
          "pid": "hobbyhorse",
          "text": [
            "Der kleine Jean, 1872 etwa fünf Jahre alt, sitzt stolz auf einem Steckenpferd im Garten. Hinter ihm die Beete und die Hecke.",
            "Monet malt den Sohn ohne Pose, als Teil des Alltags in Argenteuil. Es ist ein helles, fast privates Bild."
          ],
          "fact": "Jean Monet wird 1867 geboren. Später, in Giverny, führen er und seine Stiefgeschwister den Haushalt des Vaters mit."
        },
        {
          "pid": "autumneff",
          "text": [
            "Im Herbst steht die Seine bei Argenteuil in Gold und Rosa. Die Bäume am Ufer färben sich, das Wasser nimmt jede Farbe auf.",
            "Monet findet hier das Motiv, das ihn nicht mehr verlässt: den Fluss als Spiegel der Jahreszeit."
          ],
          "fact": "Das Bild hängt in der Courtauld Gallery in London. 1873 ist eines der ertragreichsten Jahre am Fluss."
        },
        {
          "pid": "redkerchief",
          "text": [
            "Durch die Fenstertüren des Hauses in Argenteuil sieht man Camille im Schnee, ein rotes Tuch um den Kopf. Drinnen ist es warm, draussen kalt und hell.",
            "Das Gesicht ist nur in wenigen Strichen gesetzt. Trotzdem erkennt man sie sofort."
          ],
          "fact": "Das Bild hängt in Cleveland. Es verbindet das Familienhaus mit der Winterluft vor dem Glas."
        },
        {
          "pid": "argbridge",
          "text": [
            "Die Strassenbrücke von Argenteuil überspannt die Seine, Segelboote liegen davor, der Himmel ist weich.",
            "Monet malt die Brücke mehrmals, bei unterschiedlichem Licht. Der Fluss vor der Haustür wird zur Werkstatt."
          ],
          "fact": "Das Bild hängt im Musée d’Orsay. Die Brücke war nach dem Krieg neu gebaut worden und gehörte zum modernen Gesicht des Ortes."
        },
        {
          "pid": "poppies",
          "text": [
            "Über eine Sommerwiese bei Argenteuil gehen eine Frau und ein Kind, wahrscheinlich Camille und Jean. Links leuchtet der Mohn besonders dicht.",
            "Das Bild hängt 1874 auf der ersten Ausstellung der Impressionisten. Es ist eines der freundlichsten Bilder dieser Jahre."
          ],
          "fact": "Das Mohnfeld gehört zu den bekanntesten Bildern Monets und hängt im Musée d’Orsay."
        }
      ]
    },
    {
      "id": "impression",
      "place": "Argenteuil · Impression und 1874",
      "when": "1872–1875",
      "map": {
        "x": 104,
        "y": 112,
        "labelDy": -12
      },
      "mapLabel": "Argenteuil",
      "intro": [
        "1872 malt Monet im Hafen von Le Havre den Sonnenaufgang. 1874 zeigt er das Bild in der ersten unabhängigen Ausstellung der Gruppe, im Atelier des Fotografen Nadar am Boulevard des Capucines. Ein Kritiker spottet über den Titel «Impression» – und der Name bleibt.",
        "Auch das Mohnfeld und der Boulevard des Capucines hängen in dieser Ausstellung. 1875 malt Monet Camille mit Sonnenschirm und den kleinen Jean im Gegenlicht. Argenteuil ist noch nicht das Ende des Weges."
      ],
      "works": [
        {
          "pid": "sunrise",
          "text": [
            "1872 malt Monet im Hafen von Le Havre den Sonnenaufgang: Boote im Dunst, Kräne, Rauch und eine orange Sonne, die sich im Wasser spiegelt.",
            "Zwei Jahre später gibt genau dieses Bild einer ganzen Bewegung den Namen. Ein Kritiker spottet über den Titel «Impression» – und der Name bleibt."
          ],
          "fact": "Das Bild hängt im Musée Marmottan Monet in Paris. Monet hat es in seiner Heimatstadt gemalt, nicht in Argenteuil, obwohl er dort wohnte."
        },
        {
          "pid": "capucines",
          "text": [
            "Vom Balkon aus sieht man den Boulevard des Capucines: Kutschen, Passanten, Bäume, alles in kurzem, vibrierendem Strich.",
            "Genau in einem Haus an diesem Boulevard, im Atelier des Fotografen Nadar, findet 1874 die erste Ausstellung der Gruppe statt. Das Bild selbst hängt dort."
          ],
          "fact": "Es gibt zwei Fassungen des Boulevards. Diese hier hängt in Kansas City; eine andere im Puschkin-Museum in Moskau."
        },
        {
          "pid": "railbridge",
          "text": [
            "Die Eisenbahnbrücke von Argenteuil steht auf hohen Pfeilern im Fluss, ein Zug könnte jeden Moment kommen, Segel gleiten darunter durch.",
            "Technik und Freizeit teilen sich denselben Fluss. Monet sieht darin kein Motiv des Konflikts, sondern des Lichts."
          ],
          "fact": "Neben der Strassenbrücke ist die Eisenbahnbrücke das zweite grosse Bauwerk von Argenteuil. Monet malt beide mehrfach."
        },
        {
          "pid": "argbassin",
          "text": [
            "Vom Brückenweg aus sieht man das Becken von Argenteuil: Boote, das gegenüberliegende Ufer, einen weichen Himmel.",
            "Monet arbeitet oft vom Ufer oder später vom Atelierboot aus. Der Fluss liegt praktisch vor der Tür."
          ],
          "fact": "Diese Ansicht hängt im Präfekturmuseum Mie in Japan. Argenteuil war in den 1870er Jahren ein beliebter Ort für den Wassersport."
        },
        {
          "pid": "studioboat",
          "text": [
            "Ein umgebautes Boot wird zum schwimmenden Atelier. Monet sitzt darin und malt den Fluss auf Augenhöhe, die Ufer gleiten vorbei.",
            "Die Idee geht auf Daubigny zurück. In Argenteuil macht Monet sie zu seinem Werkzeug."
          ],
          "fact": "Das Bild hängt im Kröller-Müller Museum in Otterlo. Vom Boot aus entstehen viele der Flussbilder dieser Jahre."
        },
        {
          "pid": "regattaarg",
          "text": [
            "Bei der Regatta von Argenteuil stehen die Segel wie Farbflächen auf dem Wasser, das Ufer ist nah, der Tag ist hell.",
            "Monet liebt diese Feste auf dem Fluss. Sie geben ihm Bewegung, Spiegelung und Gesellschaft in einem Bild."
          ],
          "fact": "Das Bild hängt im Musée d’Orsay und entsteht 1872, im ersten vollen Jahr in Argenteuil."
        },
        {
          "pid": "parasol",
          "text": [
            "1875 steht Camille auf einer Anhöhe, den Sonnenschirm gegen das Licht, der kleine Jean daneben. Von unten gesehen, vor dem wehenden Himmel, wirkt sie fast schwerelos.",
            "Das Bild fällt schon nach der ersten Impressionisten-Ausstellung. Es schliesst diesen ersten Teil: die Familie im Licht, noch in Argenteuil, bevor der Weg weiterführt."
          ],
          "fact": "Monet nimmt das Motiv später noch einmal auf, mit Alice Hoschedé, seiner zweiten Frau. Camille stirbt 1879 in Vétheuil."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
