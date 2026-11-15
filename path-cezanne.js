// v8.6 Paul Cézanne life journey, Part 1 (1839–1886).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Gallery works cards and apples are reserved for Part 2.
// Quotes: letter to Pissarro, 2 July 1876, from L’Estaque; letter to Zola, 4 April 1886, from Gardanne (Rewald, Correspondance).
// No nudes (bathers, Temptation, Modern Olympia) and no violent early scenes (The Murder, The Abduction).
// L’Œuvre (1886): the 4 April letter is cordial; a complete break is not claimed as fact.
(function () {
  var works = [
  {
    "id": "czmother",
    "title": "Bildnis der Mutter des Künstlers",
    "artist": "Paul Cézanne",
    "year": "1866–1867",
    "museum": "Saint Louis Art Museum",
    "source": "Wikimedia Commons: «Portrait of the Artist’s Mother by Paul Cézanne, 1866-1867, oil on canvas, Saint Louis Art Museum.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czfather65",
    "title": "Louis-Auguste Cézanne, der Vater des Künstlers",
    "artist": "Paul Cézanne",
    "year": "um 1865",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Portrait de Louis-Auguste Cézanne, père de l'artiste, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czvalab66",
    "title": "Antony Valabrègue",
    "artist": "Paul Cézanne",
    "year": "1866",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne, Antony Valabrègue, 1866, NGA 52389.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czhousejas",
    "title": "Das Haus des Jas de Bouffan",
    "artist": "Paul Cézanne",
    "year": "um 1874",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul Cezanne, The House of the Jas de Bouffan, c1874.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbread",
    "title": "Brot und Eier",
    "artist": "Paul Cézanne",
    "year": "1865",
    "museum": "Cincinnati Art Museum",
    "source": "Wikimedia Commons: «Le pain et les œufs, par Paul Cézanne, Yorck.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czsugar",
    "title": "Zuckerdose, Birnen und blaue Tasse",
    "artist": "Paul Cézanne",
    "year": "um 1865",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Sucrier, poires et tasse bleue, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czgigot",
    "title": "Brot und Lammkeule",
    "artist": "Paul Cézanne",
    "year": "1866",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Paul Cézanne - Pain et Gigot d’agneau - 2440 - Kunsthaus Zürich.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czfather66",
    "title": "Der Vater des Künstlers, lesend in «L’Événement»",
    "artist": "Paul Cézanne",
    "year": "1866",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne, The Artist's Father, Reading \"L'Événement\", 1866, NGA 52085.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czunclemonk",
    "title": "Onkel Dominique als Mönch",
    "artist": "Paul Cézanne",
    "year": "1866",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Antoine Dominique Sauveur Aubert (born 1817), the Artist's Uncle, as a Monk MET DT1977.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czunclelaw",
    "title": "Onkel Dominique als Anwalt",
    "artist": "Paul Cézanne",
    "year": "1866",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul Cézanne L'Avocat - oncle Dominique 1866.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czuncledom",
    "title": "Onkel Dominique",
    "artist": "Paul Cézanne",
    "year": "um 1866",
    "museum": "Norton Simon Museum, Pasadena",
    "source": "Wikimedia Commons: «'Uncle Dominique' by Paul Cézanne, Norton Simon Museum.JPG», gemeinfrei (Public Domain)"
  },
  {
    "id": "czclock",
    "title": "Die schwarze Marmoruhr",
    "artist": "Paul Cézanne",
    "year": "1869–1871",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «La Pendule noire, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czemperaire",
    "title": "Achille Emperaire",
    "artist": "Paul Cézanne",
    "year": "1867–1868",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Paul Cézanne - Achille Emperaire - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czsnowest",
    "title": "Schnee in L’Estaque",
    "artist": "Paul Cézanne",
    "year": "um 1870",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «La Neige fondue à l'Estaque, par Paul Cézanne, FWN 53.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "cztrench",
    "title": "Der Eisenbahneinschnitt",
    "artist": "Paul Cézanne",
    "year": "1867",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Paul Cézanne - Railroad Cut (La Tranchée) - BF1186 - Barnes Foundation.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czvillageest",
    "title": "Das Fischerdorf in L’Estaque",
    "artist": "Paul Cézanne",
    "year": "1870",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Paul Cézanne - Le Village des pêcheurs à l'Estaque.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czhortense72",
    "title": "Bildnis der Madame Cézanne",
    "artist": "Paul Cézanne",
    "year": "1872",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul Cézanne, Portrait de Madame Cézanne – FWN 431-TA.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czself72",
    "title": "Selbstbildnis mit Mütze",
    "artist": "Paul Cézanne",
    "year": "um 1872",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Cézanne, Paul - Self-Portrait in a Casquette.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czlouvec",
    "title": "Blick auf Louveciennes, nach Pissarro",
    "artist": "Paul Cézanne",
    "year": "1872",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Paul Cézanne - Vue de Louveciennes, d'après Pissarro.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czpendu",
    "title": "Das Haus des Gehängten",
    "artist": "Paul Cézanne",
    "year": "1873",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «La Maison du pendu Auvers-sur-Oise - Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czlacroix",
    "title": "Das Haus des Père Lacroix",
    "artist": "Paul Cézanne",
    "year": "1873",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne, House of Père Lacroix, 1873, NGA 46577.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czquartier",
    "title": "Quartier Four in Auvers-sur-Oise",
    "artist": "Paul Cézanne",
    "year": "um 1873",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Paul Cézanne - Quartier Four, Auvers-sur-Oise.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czsmallpontoise",
    "title": "Kleine Häuser in Pontoise",
    "artist": "Paul Cézanne",
    "year": "1873",
    "museum": "Harvard Art Museums, Cambridge",
    "source": "Wikimedia Commons: «Paul Cézanne - Small Houses in Pontoise - 1934.28 - Fogg Museum.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czauversview",
    "title": "Blick auf Auvers-sur-Oise",
    "artist": "Paul Cézanne",
    "year": "1873–1875",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul Cézanne - Vue panoramique d'Auvers-sur-Oise.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czmadamered",
    "title": "Madame Cézanne im roten Sessel",
    "artist": "Paul Cézanne",
    "year": "um 1877",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Paul Cézanne - Madame Cézanne in a Red Armchair - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czchocquet",
    "title": "Bildnis Victor Chocquet",
    "artist": "Paul Cézanne",
    "year": "1877",
    "museum": "Columbus Museum of Art",
    "source": "Wikimedia Commons: «Portrait de Victor Chocquet assis, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czcotesaint",
    "title": "Die Côte Saint-Denis in Pontoise",
    "artist": "Paul Cézanne",
    "year": "1877",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul cezanne la cote saint-denis a pontoise.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czjardinmau",
    "title": "Der Garten von Maubuisson, Pontoise",
    "artist": "Paul Cézanne",
    "year": "1877",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Le Jardin de Maubuisson, Pontoise, par Paul Cézanne, Yorck.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czhermitage",
    "title": "Das Haus Rondest im Quartier de l’Hermitage, Pontoise",
    "artist": "Paul Cézanne",
    "year": "1874",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «La Maison Rondest, quartier de l'Hermitage, Pontoise, par Paul Cézanne, Yorck.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czstill77",
    "title": "Fruchtschale und Teller mit Keksen",
    "artist": "Paul Cézanne",
    "year": "1877",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Plate with fruits and sponger fingers, by Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "cztoitsrouges",
    "title": "L’Estaque mit roten Dächern",
    "artist": "Paul Cézanne",
    "year": "1883–1885",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «L'Estaque aux toits rouges, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbay85",
    "title": "Die Bucht von Marseille, von L’Estaque aus",
    "artist": "Paul Cézanne",
    "year": "um 1885",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Paul Cézanne - The Bay of Marseilles, Seen from L'Estaque - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czriaux",
    "title": "Häuser in der Provence: Das Tal der Riaux bei L’Estaque",
    "artist": "Paul Cézanne",
    "year": "um 1883",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne - Houses in Provence- The Riaux Valley near L'Estaque - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czchateauif",
    "title": "L’Estaque und das Château d’If",
    "artist": "Paul Cézanne",
    "year": "1883–1885",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «L'Estaque et le Château d'If, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czmorningest",
    "title": "Morgenblick auf L’Estaque gegen das Licht",
    "artist": "Paul Cézanne",
    "year": "1882–1883",
    "museum": "Israel Museum, Jerusalem",
    "source": "Wikimedia Commons: «Paul Cezanne - Morning View of L'Estaque Against the Sunlight - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czpins",
    "title": "L’Estaque, Blick durch die Kiefern",
    "artist": "Paul Cézanne",
    "year": "1882–1883",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «L'Estaque, vue à travers les pins, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czcliffs",
    "title": "Blick auf L’Estaque",
    "artist": "Paul Cézanne",
    "year": "1882–1883",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Vue sur l'Estaque, par Paul Cézanne, FWN 188.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czallee",
    "title": "Die Allee im Jas de Bouffan",
    "artist": "Paul Cézanne",
    "year": "um 1868",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Cezanne - Allee im Jas de Bouffan.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czpool",
    "title": "Das Wasserbecken im Jas de Bouffan",
    "artist": "Paul Cézanne",
    "year": "späte 1880er Jahre",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Pool at the Jas de Bouffan MET DT1492.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czchestnut",
    "title": "Kastanienallee im Jas de Bouffan",
    "artist": "Paul Cézanne",
    "year": "1880",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul Cézanne - Avenue of Chestnut Trees at the Jas de Bouffan - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbaretrees",
    "title": "Die kahlen Bäume im Jas de Bouffan",
    "artist": "Paul Cézanne",
    "year": "1880er Jahre",
    "museum": "National Museum of Western Art, Tokyo",
    "source": "Wikimedia Commons: «Paul Cézanne - The Bare Trees at Jas de Bouffan - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czfarmjas",
    "title": "Kastanien und Gehöft im Jas de Bouffan",
    "artist": "Paul Cézanne",
    "year": "um 1878",
    "museum": "Norton Simon Museum, Pasadena",
    "source": "Wikimedia Commons: «Marronniers et ferme au Jas de Bouffan, par Paul Cézanne, Yorck.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czvuejas",
    "title": "Blick vom Jas de Bouffan",
    "artist": "Paul Cézanne",
    "year": "um 1875–1876",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul Cézanne - Vue prise du Jas de Bouffan.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czmaincy",
    "title": "Die Brücke von Maincy",
    "artist": "Paul Cézanne",
    "year": "um 1882–1883",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Pont de Maincy, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czmedan",
    "title": "Die Ufer der Seine in Médan",
    "artist": "Paul Cézanne",
    "year": "1880–1885",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne, Banks of the Seine at Médan, 1880-1885, NGA 136122.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czgardanne",
    "title": "Das Dorf Gardanne",
    "artist": "Paul Cézanne",
    "year": "1885–1886",
    "museum": "Brooklyn Museum, New York",
    "source": "Wikimedia Commons: «Paul Cézanne - The Village of Gardanne (Le Village de Gardanne) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czabandoned",
    "title": "Verlassenes Haus bei Aix-en-Provence",
    "artist": "Paul Cézanne",
    "year": "1886",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Paul Cézanne - Abandoned House near Aix-en-Provence - 1985.R.11 - Dallas Museum of Art.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czmadame86",
    "title": "Bildnis der Madame Cézanne",
    "artist": "Paul Cézanne",
    "year": "1886–1887",
    "museum": "Detroit Institute of Arts",
    "source": "Wikimedia Commons: «Paul Cézanne Madame Cézanne 1886.JPG», gemeinfrei (Public Domain)"
  },
  {
    "id": "czself80",
    "title": "Selbstbildnis",
    "artist": "Paul Cézanne",
    "year": "um 1880",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Self-portrait by Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czwinterchest",
    "title": "Die Kastanien des Jas de Bouffan im Winter",
    "artist": "Paul Cézanne",
    "year": "1885–1886",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Les Marronniers du Jas de Bouffan en hiver, par Paul Cézanne (1885-86).jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "cezanne",
  "name": "Paul Cézanne",
  "title": "Paul Cézannes Lebensweg",
  "life": "1839–1906",
  "part": "Teil 1 · 1839–1886",
  "subtitle": "Von Aix nach Paris, zu Pissarro und zurück in die Provence",
  "cover": "czbay85",
  "intro": "Reise mit Paul Cézanne durch die erste Hälfte seines Weges: von der Kindheit in Aix-en-Provence und der Freundschaft mit Émile Zola über das Jurastudium, die Académie Suisse in Paris, die dunkle «couillarde»-Zeit, die Wende mit Camille Pissarro in Pontoise und Auvers, die Ausstellungen von 1874 und 1877, L’Estaque, Hortense Fiquet und den Sohn Paul, den Jas de Bouffan bis zum Jahr 1886 – dem Roman «L’Œuvre», der Heirat und dem Tod des Vaters. Kurze Stationen und Bilder zum Ausmalen. Die Badenden und gewalttätigen frühen Szenen bleiben ausgespart. Dieser erste Teil reicht bis 1886.",
  "ending": [
    "1886 heiratet Cézanne Hortense Fiquet in Aix, der Sohn Paul wird legitimiert, der Vater stirbt im Oktober. Der briefliche Dank für Zolas Roman «L’Œuvre» ist kurz und förmlich; der Kontakt wird danach seltener.",
    "Der Weg geht weiter. Es folgen die Montagne Sainte-Victoire, die Kartenspieler, die Äpfel und Stillleben, die Ausstellung bei Ambroise Vollard 1895, das Atelier in Les Lauves und Cézannes Tod in Aix am 22. Oktober 1906. Davon erzählt der nächste Teil."
  ],
  "epilogue": "1886 endet dieser erste Teil: mit der Heirat in Aix, dem Tod des Vaters und einem seltener werdenden Kontakt zu Zola nach «L’Œuvre». Die Montagne Sainte-Victoire, die Kartenspieler, die Äpfel, Vollard 1895, Les Lauves und der Tod am 22. Oktober 1906 gehören zum nächsten Teil.",
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
      "id": "cezanneaix",
      "place": "Aix-en-Provence · Kindheit und Freunde",
      "when": "1839–1858",
      "map": {
        "x": 132,
        "y": 154
      },
      "mapLabel": "Aix",
      "intro": [
        "Paul Cézanne wird am 19. Januar 1839 in Aix-en-Provence geboren. Der Vater Louis-Auguste, zuerst Hutmacher, führt später eine Bank; die Mutter Anne-Elisabeth Honorine Aubert führt das Haus.",
        "Am Collège Bourbon freundet er sich mit Émile Zola und Baptistin Baille an – die drei werden die «Unzertrennlichen» genannt. Sie durchstreifen die Landschaft um Aix. 1858 geht Zola nach Paris; die Freundschaft bleibt über Briefe lebendig.",
        "Die Bildnisse der Eltern und des Freundes Valabrègue sowie der Blick auf das Haus entstehen zum Teil erst später. Sie gehören dennoch zu diesem Anfang: zur Familie, zum Kreis in Aix und zum Landsitz, den der Vater 1859 kauft."
      ],
      "works": [
        {
          "pid": "czmother",
          "text": [
            "Anne-Elisabeth Honorine Aubert, die Mutter, sitzt ruhig, in dunkler Kleidung, das Gesicht hell vor dem braunen Grund.",
            "Das Bild entsteht 1866–1867, also später als die Kindheit. Es hält die Frau fest, die den Haushalt in Aix führt, während der Vater die Bank leitet."
          ],
          "fact": "1866–1867. Saint Louis Art Museum."
        },
        {
          "pid": "czfather65",
          "text": [
            "Louis-Auguste sitzt mit der Mütze, die Beine übereinander, als würde er im Salon Rast halten. Das Bild ist zunächst eine Wandmalerei im Salon des Jas de Bouffan und wird später auf Leinwand übertragen.",
            "Der Vater, zuerst Hutmacher, dann Bankier in Aix, wünscht sich den Sohn als Juristen. Um 1865 malt Cézanne ihn trotzdem – und zwar ins eigene Elternhaus."
          ],
          "fact": "um 1865. National Gallery, London."
        },
        {
          "pid": "czvalab66",
          "text": [
            "Der Dichter Antony Valabrègue, ein Freund aus Aix, ist frontal und mit dem Spachtel gemalt: dunkle, dicke Farbschichten, ein ernstes Gesicht.",
            "1866 gehört das Bild schon zur frühen, derben Malweise. Valabrègue gehört zum Kreis um Cézanne und Zola."
          ],
          "fact": "1866. National Gallery of Art, Washington."
        },
        {
          "pid": "czhousejas",
          "text": [
            "Das Landhaus steht hell zwischen Bäumen, der Himmel weit. 1859 kauft Louis-Auguste den Jas de Bouffan am Rand von Aix; die Familie lebt und empfängt dort.",
            "Das Bild selbst entsteht erst um 1874. Es zeigt den Ort der Kindheit und der späteren Arbeit – nicht im Jahr des Kaufs, sondern in der helleren Malweise der 1870er Jahre."
          ],
          "fact": "um 1874. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "cezannelaw",
      "place": "Aix und Paris · Juristerei und Académie Suisse",
      "when": "1858–1865",
      "map": {
        "x": 108,
        "y": 118
      },
      "mapLabel": "Paris",
      "intro": [
        "1858–1861 studiert Cézanne Jura in Aix, dem Wunsch des Vaters folgend. Zola schreibt aus Paris und drängt ihn, zu kommen und zu malen.",
        "1861 reist er zum ersten Mal nach Paris, zeichnet an der Académie Suisse und begegnet Camille Pissarro. Er kehrt nach Aix zurück, arbeitet kurz in der Bank des Vaters und geht im November 1862 wieder nach Paris.",
        "In der Mitte der 1860er Jahre entstehen dunkle, fest gebaute Stillleben: Brot und Eier, die Zuckerdose, die Lammkeule. Der Salon lehnt seine Einsendungen ab."
      ],
      "works": [
        {
          "pid": "czbread",
          "text": [
            "Ein Laib Brot, weisse Eier, ein Messer und ein dunkler Krug stehen dicht beieinander auf der Platte. Die Farben sind erdig, die Schatten schwer.",
            "1865, in den Jahren der Juristerei und der ersten Pariser Aufenthalte, übt Cézanne das Stillleben in dieser dunklen, fest gebauten Art."
          ],
          "fact": "1865. Cincinnati Art Museum."
        },
        {
          "pid": "czsugar",
          "text": [
            "Eine Zuckerdose, Birnen und eine blaue Tasse bilden eine kleine, geschlossene Gruppe. Schon hier sucht er Volumen und das Nebeneinander klarer Formen.",
            "Das Bild entsteht um 1865. Neben den Bildnissen ist das Stillleben für Cézanne von Anfang an ein eigenes Feld."
          ],
          "fact": "um 1865. Musée d’Orsay, Paris."
        },
        {
          "pid": "czgigot",
          "text": [
            "Die Lammkeule und das Brot liegen schwer auf dem Tuch. Die Farbe ist dick aufgetragen, fast geformt wie mit dem Spachtel.",
            "1866 gehört das Stillleben in die gleiche derbe Frühzeit wie die Bildnisse des Vaters und des Onkels. Heute hängt es im Kunsthaus Zürich."
          ],
          "fact": "1866. Kunsthaus Zürich."
        }
      ]
    },
    {
      "id": "cezannecouillarde",
      "place": "Aix und Paris · Die «couillarde»-Jahre",
      "when": "1866–1869",
      "map": {
        "x": 128,
        "y": 148
      },
      "mapLabel": "1866",
      "intro": [
        "In der zweiten Hälfte der 1860er Jahre malt Cézanne mit dem Spachtel, in dicken, dunklen Schichten. Er und seine Freunde nennen diese derbe, pastose Art «couillarde».",
        "1866 entsteht das grosse Bildnis des Vaters, der «L’Événement» liest – die Zeitung von Zolas Salonberichten. Im selben Jahr malt er Onkel Dominique, den Bruder der Mutter, in rascher Folge in verschiedenen Rollen.",
        "Dazu kommen das Bildnis des Aixer Malers Achille Emperaire, das der Salon ablehnt, und gegen Ende des Jahrzehnts die schwarze Marmoruhr."
      ],
      "works": [
        {
          "pid": "czfather66",
          "text": [
            "Louis-Auguste sitzt in einem Sessel und liest «L’Événement» – die Zeitung, in der Émile Zola 1866 seine Salonberichte veröffentlicht. Über dem Vater hängt ein frühes Stillleben des Sohnes.",
            "Das grosse Bild von 1866 ist ein Statement im Elternhaus: Der Bankier liest das Blatt des Freundes, der die neue Malerei verteidigt."
          ],
          "fact": "1866. National Gallery of Art, Washington."
        },
        {
          "pid": "czunclemonk",
          "text": [
            "Antoine Dominique Sauveur Aubert, der Bruder der Mutter, trägt hier eine weisse Kutte und eine dunkle Kappe. Das Gesicht ist in wenigen, kräftigen Spachtelflächen gesetzt.",
            "1866 malt Cézanne den Onkel in rascher Folge in verschiedenen Rollen. Die Serie gehört zum Kern der so genannten «couillarde»-Zeit."
          ],
          "fact": "1866. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "czunclelaw",
          "text": [
            "Derselbe Onkel sitzt im dunklen Anwaltsgewand, die eine Hand erhoben. Auch dieses Bild ist 1866 mit dem Spachtel gemalt, derb und fest.",
            "Die Verkleidung als Anwalt spielt, gewollt oder nicht, auf den Beruf an, den der Vater dem Sohn zugedacht hat."
          ],
          "fact": "1866. Sammlung nicht ermittelt."
        },
        {
          "pid": "czuncledom",
          "text": [
            "Ein weiteres Bildnis des Onkels: Kopf und Schultern füllen die Fläche, die Farbe sitzt in dicken, nebeneinander gesetzten Bahnen.",
            "Um 1866 entsteht in kurzer Zeit eine ganze Reihe solcher Bildnisse. Sie zeigen, wie Cézanne das Gesicht als Konstruktion aus Farbflächen versteht."
          ],
          "fact": "um 1866. Norton Simon Museum, Pasadena."
        },
        {
          "pid": "czclock",
          "text": [
            "Eine schwarze Kaminuhr ohne Zeiger steht zwischen einer Muschel, einem Krug und Früchten. Die Gegenstände sind schwer, klar begrenzt und fast feierlich angeordnet.",
            "Das Stillleben entsteht zwischen 1869 und 1871, am Übergang der dunklen Frühzeit zu den Jahren mit Hortense."
          ],
          "fact": "1869–1871. Privatbesitz."
        },
        {
          "pid": "czemperaire",
          "text": [
            "Achille Emperaire, ein Malerfreund aus Aix, sitzt in einem Sessel, klein von Statur, das Bildformat aber ungewöhnlich hoch. Der Auftrag der Farbe bleibt pastos und dunkel.",
            "Das Bild von 1867–1868 wird vom Salon abgelehnt. Emperaire bleibt ein Weggefährte aus der Heimatstadt."
          ],
          "fact": "1867–1868. Musée d’Orsay, Paris."
        }
      ]
    },
    {
      "id": "cezannehortense",
      "place": "Paris und L’Estaque · Hortense und der Krieg",
      "when": "1869–1872",
      "map": {
        "x": 122,
        "y": 168
      },
      "mapLabel": "1870",
      "intro": [
        "Um 1869 lernt Cézanne in Paris Hortense Fiquet kennen, die ihm Modell sitzt. Die Verbindung bleibt lange vor der Familie in Aix verborgen.",
        "Während des Deutsch-Französischen Krieges 1870–1871 hält er sich mit Hortense in L’Estaque auf, westlich von Marseille. Den Militärdienst tritt er nicht an. Es entstehen Blicke auf Schnee, Dächer und das Fischerdorf.",
        "Am 4. Januar 1872 wird in Paris der Sohn Paul geboren. Das Eisenbahneinschnitt-Bild von 1867, nahe dem Jas de Bouffan, gehört der Landschaft von Aix und steht hier als früher Provençal-Blick vor der Küste."
      ],
      "works": [
        {
          "pid": "czsnowest",
          "text": [
            "Rote Dächer stehen über einem noch winterlichen Hang, der Schnee taut, das Meer und die Ferne sind kühl. L’Estaque liegt an der Küste westlich von Marseille.",
            "Um 1870, während des Deutsch-Französischen Krieges, hält sich Cézanne mit Hortense Fiquet in L’Estaque auf. Das Motiv der roten Dächer über dem Wasser beschäftigt ihn auch später."
          ],
          "fact": "um 1870. Sammlung nicht ermittelt."
        },
        {
          "pid": "cztrench",
          "text": [
            "Ein Einschnitt der Bahn öffnet den Hügel, darüber ein Haus und der Himmel von Aix. Das Bild entsteht 1867, also vor dem Kriegsaufenthalt in L’Estaque.",
            "Die Tranchée liegt in der Nähe des Jas de Bouffan. Schon hier sucht Cézanne die Landschaft als gebaute Form, nicht als blosses Stimmungsbild."
          ],
          "fact": "1867. Barnes Foundation, Philadelphia."
        },
        {
          "pid": "czvillageest",
          "text": [
            "Die Häuser des Fischerdorfs staffeln sich den Hang hinunter zum Wasser. Die Palette bleibt erdig, die Formen sind fest gesetzt.",
            "1870 malt Cézanne L’Estaque, während in Frankreich der Krieg dauert. Den Militärdienst tritt er nicht an; er bleibt in der Provence."
          ],
          "fact": "1870. Philadelphia Museum of Art."
        },
        {
          "pid": "czhortense72",
          "text": [
            "Hortense Fiquet, um 1869 in Paris kennengelernt, sitzt im Dreiviertelprofil. Das Bild stammt von 1872, dem Jahr, in dem am 4. Januar in Paris der Sohn Paul geboren wird.",
            "Die Beziehung bleibt lange vor der Familie in Aix verborgen. Hortense wird Cézanne über Jahrzehnte Modell sitzen."
          ],
          "fact": "1872. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "cezanneauvers",
      "place": "Pontoise und Auvers · Mit Pissarro",
      "when": "1872–1874",
      "map": {
        "x": 100,
        "y": 110
      },
      "mapLabel": "Auvers",
      "intro": [
        "1872–1874 arbeitet Cézanne häufig neben Camille Pissarro in Pontoise und lebt in Auvers-sur-Oise. Unter diesem Einfluss wird die Palette heller, der Auftrag kleiner, die Arbeit vor der Natur selbstverständlicher.",
        "Er malt ein Selbstbildnis mit Mütze, eine Ansicht von Louveciennes nach Pissarro, Häuser in Auvers und Pontoise. «Das Haus des Gehängten» von 1873 – ein Haus über einem Weg, nicht eine gewalttätige Szene – wird 1874 in Paris ausgestellt.",
        "Diese Jahre gelten als Wendung zum impressionistischen Landschaftsbild, auch wenn Cézannes Formen fest und gebaut bleiben."
      ],
      "works": [
        {
          "pid": "czself72",
          "text": [
            "Cézanne trägt eine Mütze, der Blick geht seitlich aus dem Bild. Das Gesicht ist in kühleren, helleren Tönen gebaut als in den dunklen Bildnissen der 1860er Jahre.",
            "Um 1872, zu Beginn der Jahre in Pontoise und Auvers, hält er sich selbst fest. Die Palette beginnt sich unter dem Einfluss der Arbeit im Freien zu öffnen."
          ],
          "fact": "um 1872. Eremitage, Sankt Petersburg."
        },
        {
          "pid": "czlouvec",
          "text": [
            "Eine Strasse führt in die Tiefe, Häuser und kahle Bäume stehen zu beiden Seiten – eine Ansicht, die Cézanne nach einem Bild von Camille Pissarro malt.",
            "1872 arbeitet er neben Pissarro. Das Nachmalen ist kein blosses Kopieren: er lernt an einem Motiv des älteren Freundes das hellere, gegliederte Landschaftsbild."
          ],
          "fact": "1872. Musée d’Orsay, Paris."
        },
        {
          "pid": "czpendu",
          "text": [
            "Ein Haus in Auvers-sur-Oise steht über einem ansteigenden Weg; der überlieferte Titel nennt es «Haus des Gehängten», meint aber das Gebäude, nicht eine Szene der Gewalt.",
            "Das Bild von 1873 wird 1874 in der ersten Impressionisten-Ausstellung in Paris gezeigt. Es ist eines der Werke, mit denen Cézanne dort auftritt – neben einer Landschaft. Ein drittes, «Une moderne Olympia», zeigen wir hier nicht."
          ],
          "fact": "1873. Musée d’Orsay, Paris."
        },
        {
          "pid": "czlacroix",
          "text": [
            "Das Haus des Père Lacroix in Auvers ist fest und hell gebaut, die Wände in gebrochenem Weiss, das Dach rot, die Bäume als dunkle Vertikale.",
            "1873 malt Cézanne in Auvers-sur-Oise, oft in der Nähe von Pissarro. Die Häuser werden zu klaren, gestuften Formen."
          ],
          "fact": "1873. National Gallery of Art, Washington."
        },
        {
          "pid": "czquartier",
          "text": [
            "Im Quartier Four staffeln sich Gärten, Mauern und Dächer den Hang hinauf. Das Licht ist weicher als in den frühen Bildern aus Aix.",
            "Um 1873 gehört dieser Blick zu den Auvers-Jahren, in denen Cézanne die Landschaft der Île-de-France vor der Natur beobachtet."
          ],
          "fact": "um 1873. Philadelphia Museum of Art."
        },
        {
          "pid": "czsmallpontoise",
          "text": [
            "Kleine Häuser stehen am Hang von Pontoise, die Dächer als einfache, gekippte Flächen, die Vegetation dazwischen.",
            "1873 arbeitet Cézanne wiederholt in Pontoise, dem Ort, an dem Pissarro damals lebt. Die gemeinsame Arbeit im Freien prägt diese Jahre."
          ],
          "fact": "1873. Harvard Art Museums, Cambridge."
        },
        {
          "pid": "czauversview",
          "text": [
            "Von einem erhöhten Standpunkt aus liegt Auvers weit da: Felder, Baumgruppen, die Häuser des Dorfs unter einem hellen Himmel.",
            "Das Bild entsteht 1873–1875, am Ende der gemeinsamen Jahre mit Pissarro. Die weite Ansicht fasst zusammen, was Cézanne in Auvers gesucht hat."
          ],
          "fact": "1873–1875. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "cezannesalon",
      "place": "Paris · Die Ausstellungen von 1874 und 1877",
      "when": "1874–1877",
      "map": {
        "x": 112,
        "y": 122
      },
      "mapLabel": "1874",
      "intro": [
        "Im April 1874 nimmt Cézanne an der ersten Impressionisten-Ausstellung im Atelier Nadars am Boulevard des Capucines teil. Gezeigt werden unter anderem «Das Haus des Gehängten» und eine Landschaft; ein drittes Werk, «Une moderne Olympia», erwähnen wir nur, ohne es zu zeigen. Die Kritik ist oft scharf.",
        "1877, an der dritten Impressionisten-Ausstellung, ist er mit sechzehn Werken vertreten. Victor Chocquet, ein früher Sammler, unterstützt ihn; Cézanne malt ihn in diesem Jahr.",
        "Neben den Bildnissen von Hortense und Chocquet stehen Landschaften aus Pontoise und ein Stillleben – die drei Felder, die ihn weiter begleiten."
      ],
      "works": [
        {
          "pid": "czmadamered",
          "text": [
            "Hortense sitzt in einem roten Sessel, das Kleid in blauen und grünen Streifen, die Hände im Schoss. Die Farben sind klar voneinander abgesetzt, der Sessel ein eigener, leuchtender Körper.",
            "Um 1877, im Jahr der dritten Impressionisten-Ausstellung, ist dieses Bildnis ein ruhiger Gegenpol zu den Landschaften aus Pontoise."
          ],
          "fact": "um 1877. Museum of Fine Arts, Boston."
        },
        {
          "pid": "czchocquet",
          "text": [
            "Victor Chocquet, ein früher Sammler und Förderer, sitzt im Sessel, die Hände auf den Lehnen, der Blick aufmerksam. Cézanne malt ihn 1877 mehrfach.",
            "Chocquet unterstützt Cézanne und die Impressionisten. Schon 1876 hatte Cézanne in L’Estaque Motive für ihn begonnen."
          ],
          "fact": "1877. Columbus Museum of Art."
        },
        {
          "pid": "czcotesaint",
          "text": [
            "Die Côte Saint-Denis steigt in Pontoise an; Häuser, Gärten und der Weg sind in kurzen, nebeneinander gesetzten Strichen gebaut.",
            "1877 zeigt Cézanne an der dritten Impressionisten-Ausstellung in Paris sechzehn Werke. Landschaften aus Pontoise gehören in diesen Zusammenhang."
          ],
          "fact": "1877. Sammlung nicht ermittelt."
        },
        {
          "pid": "czjardinmau",
          "text": [
            "Im Garten von Maubuisson stehen Bäume und eine Mauer, das Licht fällt durch das Laub auf Wege und Beete.",
            "Auch dieses Motiv von 1877 gehört zu den Pontoise-Jahren, in denen Cézanne die strukturierte Garten- und Hanglandschaft der Île-de-France festhält."
          ],
          "fact": "1877. Sammlung nicht ermittelt."
        },
        {
          "pid": "czhermitage",
          "text": [
            "Das Haus Rondest im Quartier de l’Hermitage steht fest zwischen Bäumen, die Fassade hell, das Dach ruhig gegen den Himmel.",
            "Das Bild wird 1874 datiert – im Jahr der ersten Impressionisten-Ausstellung. Pontoise und Auvers bleiben Cézannes nördliche Arbeitsorte."
          ],
          "fact": "1874. Sammlung nicht ermittelt."
        },
        {
          "pid": "czstill77",
          "text": [
            "Eine Fruchtschale, ein Teller mit Keksen und Früchte sind auf der Platte zu einer ruhigen Gruppe geordnet. Jede Form ist klar umgrenzt, der Raum dazwischen mitbedacht.",
            "1877 zeigt, dass das Stillleben neben der Landschaft und dem Bildnis ein gleichwertiges Feld bleibt."
          ],
          "fact": "1877. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "cezanneestaque",
      "place": "L’Estaque · Rote Dächer und die Bucht",
      "when": "1876–1885",
      "map": {
        "x": 128,
        "y": 172
      },
      "mapLabel": "L’Estaque",
      "intro": [
        "Im Sommer 1876 arbeitet Cézanne wieder in L’Estaque. Am 2. Juli schreibt er an Pissarro von kleinen Motiven für Monsieur Chocquet: es sei wie eine Spielkarte, rote Dächer auf dem blauen Meer.",
        "In den frühen 1880er Jahren kehrt er an die Küste zurück. Es entstehen Blicke auf die Bucht von Marseille, das Tal der Riaux, das Château d’If, den Morgen gegen das Licht und das Dorf durch die Kiefern.",
        "Die südliche Küste wird ihm zu einem Ort, an dem Häuser, Felsen und Meer als klare Flächen ineinandergefügt sind."
      ],
      "works": [
        {
          "pid": "cztoitsrouges",
          "text": [
            "Rote Dächer stehen über dem blauen Wasser, die Häuser als einfache Flächen, die Bucht als ruhige Bahn. Das Bild selbst entsteht 1883–1885.",
            "Schon am 2. Juli 1876 schreibt Cézanne aus L’Estaque an Pissarro von kleinen Motiven für Monsieur Chocquet: es sei wie eine Spielkarte – rote Dächer auf dem blauen Meer. Dieser spätere Blick gehört zu derselben Motivfamilie."
          ],
          "fact": "1883–1885. Sammlung nicht ermittelt.",
          "quote": {
            "text": "Ich habe zwei kleine Motive begonnen, in denen das Meer vorkommt, für Monsieur Chocquet, der davon gesprochen hatte. – Es ist wie eine Spielkarte. Rote Dächer auf dem blauen Meer.",
            "cite": "Brief an Camille Pissarro, 2. Juli 1876, aus L’Estaque."
          }
        },
        {
          "pid": "czbay85",
          "text": [
            "Von L’Estaque aus liegt die Bucht von Marseille weit und klar da: vorne die Häuser und das Grün, dann das tiefe Blau des Wassers, am Horizont die gegenüberliegende Küste.",
            "Um 1885 bringt Cézanne die südliche Küste auf eine ruhige, fest gefügte Ordnung. Das Bild gehört zu seinen bekanntesten Blicken auf L’Estaque."
          ],
          "fact": "um 1885. Art Institute of Chicago."
        },
        {
          "pid": "czriaux",
          "text": [
            "Im Tal der Riaux stehen Würfel von Häusern in einem kahlen, sonnigen Gelände. Die Wände sind ocker und rosa, die Schatten kurz und blau.",
            "Um 1883 malt Cézanne dieses inland liegende Motiv bei L’Estaque. Die Konstruktion aus Flächen ist hier besonders deutlich."
          ],
          "fact": "um 1883. National Gallery of Art, Washington."
        },
        {
          "pid": "czchateauif",
          "text": [
            "Hinter den Bäumen und Häusern von L’Estaque öffnet sich das Meer; in der Ferne liegt die Insel mit dem Château d’If.",
            "1883–1885 verbindet Cézanne den Ort, an dem er arbeitet, mit der weiten Bucht und dem bekannten Gefängnisschloss vor Marseille."
          ],
          "fact": "1883–1885. Sammlung nicht ermittelt."
        },
        {
          "pid": "czmorningest",
          "text": [
            "Gegen das Morgenlicht stehen Häuser und Bäume als dunklere Silhouetten, der Himmel und das Wasser hell. Die Sonne kommt dem Blick entgegen.",
            "1882–1883 sucht Cézanne in L’Estaque nicht nur die klare Mittagsform, sondern auch das Gegenlicht des Morgens."
          ],
          "fact": "1882–1883. Israel Museum, Jerusalem."
        },
        {
          "pid": "czpins",
          "text": [
            "Kiefernstämme teilen den Blick; dahinter liegen das Dorf, das Wasser und die Ferne. Der Vordergrund ist ein Gitter aus Stämmen und Zweigen.",
            "1882–1883 rahmt Cézanne die Bucht durch die Bäume, statt sie als offene Panoramafläche zu geben."
          ],
          "fact": "1882–1883. Sammlung nicht ermittelt."
        },
        {
          "pid": "czcliffs",
          "text": [
            "Felsen, Häuser und das Meer staffeln sich in ruhigen Schichten. Die Küste ist fest gebaut, ohne weiches Verschwimmen.",
            "1882–1883 gehört dieser Blick zu den wiederholten Aufenthalten in L’Estaque, in denen Cézanne die Landschaft der Côte zur Konstruktion macht."
          ],
          "fact": "1882–1883. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "cezannejas",
      "place": "Jas de Bouffan · Der Landsitz",
      "when": "1859–1885",
      "map": {
        "x": 126,
        "y": 150
      },
      "mapLabel": "Jas",
      "intro": [
        "Den Jas de Bouffan kauft der Vater 1859. Über Jahrzehnte malt Cézanne dort die Allee, die Kastanien, das Gehöft, den Blick vom Haus und das Wasserbecken im Park.",
        "Die Bilder dieser Station stammen aus verschiedenen Jahren, von der späten 1860er Zeit bis an den Rand der 1880er. Das Becken im Park gehört in die späten 1880er Jahre; wir datieren es offen.",
        "Die Brücke von Maincy, um 1882–1883, liegt bei Melun in der Île-de-France, nicht auf dem Jas. Sie steht hier, weil sie in denselben Jahren entsteht, in denen Cézanne auch auf dem Landsitz arbeitet."
      ],
      "works": [
        {
          "pid": "czallee",
          "text": [
            "Eine Allee führt auf das Haus zu, die Stämme stehen als dunkle, wiederholte Vertikale links und rechts des Weges.",
            "Das Bild entsteht um 1868, also noch in der früheren Zeit auf dem Landsitz, den der Vater 1859 gekauft hat. Der Jas bleibt über Jahrzehnte ein Arbeitsort."
          ],
          "fact": "um 1868. Sammlung nicht ermittelt."
        },
        {
          "pid": "czpool",
          "text": [
            "Das Becken im Park liegt still, umgeben von Bäumen und einer Mauer; das Wasser nimmt Himmel und Laub auf.",
            "Das Bild entsteht in den späten 1880er Jahren, also am Rand des Zeitraums dieses Teils. Es gehört gleichwohl zum Ort, an dem Cézanne seit der Jugend arbeitet."
          ],
          "fact": "späte 1880er Jahre. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "czchestnut",
          "text": [
            "Die Kastanienallee öffnet einen kühlen, grünen Gang; die Stämme und das Laubdach gliedern den Raum in parallele Bahnen.",
            "1880 malt Cézanne diesen Blick auf dem Familienbesitz. Die Wiederholung der Bäume gibt der Allee eine ruhige Ordnung."
          ],
          "fact": "1880. Sammlung nicht ermittelt."
        },
        {
          "pid": "czbaretrees",
          "text": [
            "Kahle Stämme stehen vor dem Haus und dem Himmel; ohne Laub wird die Konstruktion aus Linien und Flächen besonders sichtbar.",
            "In den 1880er Jahren bleibt der Park des Jas ein nahes Motiv, im Sommer wie im winterlichen Zustand."
          ],
          "fact": "1880er Jahre. National Museum of Western Art, Tokyo."
        },
        {
          "pid": "czfarmjas",
          "text": [
            "Kastanien stehen vor einem Gehöft auf dem Gelände des Jas; Gebäude, Bäume und der Boden sind in ruhigen, erdigen Tönen gefügt.",
            "Um 1878 arbeitet Cézanne nicht nur am Herrenhaus, sondern auch an den wirtschaftlichen Bauten und Bäumen des Besitzes."
          ],
          "fact": "um 1878. Norton Simon Museum, Pasadena."
        },
        {
          "pid": "czvuejas",
          "text": [
            "Vom Landsitz aus öffnet sich die Landschaft von Aix: Bäume im Vordergrund, dann das offene Land unter einem hellen Himmel.",
            "Um 1875–1876, nach den Jahren in Auvers, malt Cézanne wieder den Blick von zu Hause. Die hellere Palette der Nordjahre bleibt spürbar."
          ],
          "fact": "um 1875–1876. Sammlung nicht ermittelt."
        },
        {
          "pid": "czmaincy",
          "text": [
            "Eine steinerne Bogenbrücke über einem schattigen Wasserlauf, dichte Bäume links und rechts: das Motiv liegt in Maincy bei Melun, nicht auf dem Jas de Bouffan.",
            "Um 1882–1883 malt Cézanne diese Brücke in der Île-de-France, in denselben Jahren, in denen er auch auf dem Jas arbeitet. Das Bild hängt heute im Musée d’Orsay."
          ],
          "fact": "um 1882–1883. Musée d’Orsay, Paris."
        }
      ]
    },
    {
      "id": "cezanne1886",
      "place": "Médan, Gardanne und Aix · 1886",
      "when": "1879–1886",
      "map": {
        "x": 136,
        "y": 158
      },
      "mapLabel": "Gardanne",
      "intro": [
        "Zwischen 1880 und 1885 malt Cézanne die Ufer der Seine in Médan, wo Zola ein Haus besitzt. 1885–1886 lebt er mit Hortense und dem Sohn in Gardanne, unweit von Aix.",
        "Am 4. April 1886 dankt er Zola aus Gardanne kurz und förmlich für die Zusendung des Romans «L’Œuvre». In der Figur des Malers Claude Lantier haben Zeitgenossen Ähnlichkeiten mit Cézanne gelesen. Der Brief ist freundlich; ein vollständiger Bruch ist damit nicht bewiesen. Der Kontakt wird in der Folge seltener.",
        "Am 28. April 1886 heiratet er Hortense in Aix; der Sohn Paul wird legitimiert. Am 23. Oktober 1886 stirbt Louis-Auguste. Mit dem Erbe wird Cézanne unabhängiger. Dieser erste Teil endet in diesem Jahr."
      ],
      "works": [
        {
          "pid": "czmedan",
          "text": [
            "Die Seine bei Médan fliesst zwischen Bäumen und Häusern am Ufer; die Flächen von Wasser, Laub und Bebauung sind ruhig ineinandergefügt.",
            "In Médan besitzt Émile Zola ein Haus. Das Bild entsteht zwischen 1880 und 1885 – in den Jahren, in denen die Freundschaft der Jugend noch trägt und Cézanne an der Seine arbeitet."
          ],
          "fact": "1880–1885. National Gallery of Art, Washington."
        },
        {
          "pid": "czgardanne",
          "text": [
            "Die Häuser von Gardanne steigen den Hügel hinauf, oben der Kirchturm; manche Stellen der Leinwand bleiben hell und unfertig.",
            "1885–1886 lebt Cézanne mit Hortense und dem Sohn Paul in Gardanne, unweit von Aix. Von hier aus schreibt er am 4. April 1886 an Zola, nachdem dieser ihm den Roman «L’Œuvre» geschickt hat."
          ],
          "fact": "1885–1886. Brooklyn Museum, New York.",
          "quote": {
            "text": "Mein lieber Émile, ich habe soeben «L’Œuvre» erhalten, das du mir zuzuschicken die Güte hattest. Ich danke dem Autor der Rougon-Macquart für dieses freundliche Zeichen der Erinnerung und bitte ihn, mir zu erlauben, ihm die Hand zu drücken, im Gedanken an die früheren Jahre. Ganz der Deine unter dem Eindruck der vergangenen Zeiten.",
            "cite": "Brief an Émile Zola, 4. April 1886, aus Gardanne."
          }
        },
        {
          "pid": "czabandoned",
          "text": [
            "Ein verlassenes Haus steht in der Landschaft bei Aix, die Fassade blass, die Umgebung karg und weit.",
            "Das Bild von 1886 fällt in dasselbe Jahr wie die Heirat mit Hortense und der Tod des Vaters. Cézanne arbeitet wieder in der Umgebung der Heimatstadt."
          ],
          "fact": "1886. Dallas Museum of Art."
        },
        {
          "pid": "czmadame86",
          "text": [
            "Hortense sitzt aufrecht, das Gesicht ruhig und geschlossen, der Hintergrund in gebrochenen Tönen. Das Bild entsteht 1886–1887.",
            "Am 28. April 1886 heiraten Paul Cézanne und Hortense Fiquet in Aix; der Sohn Paul wird damit legitimiert. Das Bildnis gehört in die Zeit dieser neuen, nun öffentlichen Verbindung."
          ],
          "fact": "1886–1887. Detroit Institute of Arts."
        },
        {
          "pid": "czself80",
          "text": [
            "Cézanne zeigt sich vor einem olivfarbenen, gemusterten Grund, der Schädel kahl, der Blick fest. Das Bild entsteht um 1880.",
            "Es hält den Maler in den Jahren fest, in denen er zwischen der Provence, Paris und der Île-de-France unterwegs ist – vor den Einschnitten von 1886."
          ],
          "fact": "um 1880. Sammlung nicht ermittelt."
        },
        {
          "pid": "czwinterchest",
          "text": [
            "Die Kastanien des Jas stehen kahl im Winter, die Äste als ein klares Gerüst vor Haus und Himmel.",
            "1885–1886, am Ende dieses ersten Teils, kehrt Cézanne auch im winterlichen Park des Elternhauses zu einem vertrauten Motiv zurück."
          ],
          "fact": "1885–1886. Sammlung nicht ermittelt."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
