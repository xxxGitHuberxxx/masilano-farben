// v9.9 Alfred Sisley life journey, Part 2 (1880–1899), completing the path.
// Appends stations and works; rewrites the last Part-1 station (syloing) so it no longer leads into a following part.
// PD/CC0 scans only. Documented facts only; no quotations. No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "syvsmwalters",
    "title": "Blick auf Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "um 1880",
    "museum": "Walters Art Museum, Baltimore",
    "source": "Wikimedia Commons: «Alfred Sisley - View of Saint-Mammès - Walters 37355.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syquarries",
    "title": "Die Steinbrüche von Veneux in der Morgensonne",
    "artist": "Alfred Sisley",
    "year": "1880",
    "museum": "Museum Barberini, Potsdam",
    "source": "Wikimedia Commons: «Alfred Sisley The Stone Quarries at Veneux in the Sun, Morning 1880.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syferryby",
    "title": "Der Weg zur alten Fähre bei By",
    "artist": "Alfred Sisley",
    "year": "um 1880",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Alfred Sisley (1839-1899) - The Path to the Old Ferry at By (Le Chemin du vieux bac à By) - L730 - National Gallery.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybrickfield",
    "title": "Die Ziegelei",
    "artist": "Alfred Sisley",
    "year": "1880",
    "museum": "Kröller-Müller Museum, Otterlo",
    "source": "Wikimedia Commons: «La briquetterie - Alfred Sisley - KMM 100.754.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syfrostveneux",
    "title": "Raureif in Veneux",
    "artist": "Alfred Sisley",
    "year": "1880",
    "museum": "University of Michigan Museum of Art, Ann Arbor",
    "source": "Wikimedia Commons: «Alfred Sisley - Le Givre à Veneux - UMMA.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sypetitspres",
    "title": "Der Chemin des Petits-Prés bei By, Gewitterstimmung",
    "artist": "Alfred Sisley",
    "year": "1880",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Le chemin de Petits-Prés à By, temps d’orage.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "synearmoret",
    "title": "Bei Moret-sur-Loing",
    "artist": "Alfred Sisley",
    "year": "1881",
    "museum": "Museum Barberini, Potsdam",
    "source": "Wikimedia Commons: «Alfred Sisley At Moret-sur-Loing 1881.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "symeadowveneux",
    "title": "Die Wiesen von Veneux-Nadon",
    "artist": "Alfred Sisley",
    "year": "1881",
    "museum": "Museum Barberini, Potsdam",
    "source": "Wikimedia Commons: «Alfred Sisley Wiesen-von-Veneux-Nadon 1881.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syloingautumn",
    "title": "Ufer des Loing, Herbst",
    "artist": "Alfred Sisley",
    "year": "1881",
    "museum": "Israel-Museum, Jerusalem",
    "source": "Wikimedia Commons: «Alferd Sisley - Banks of the Loing - Autumn Effect, 1881 - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syorchardby",
    "title": "Obstgarten im Frühling, By",
    "artist": "Alfred Sisley",
    "year": "1881",
    "museum": "Museum Boijmans Van Beuningen, Rotterdam",
    "source": "Wikimedia Commons: «Alfred Sisley - Orchard in Spring, By - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syloingsm82",
    "title": "Der Loing bei Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1882",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Alfred Sisley - The Loing at Saint-Mammès - 1993.44 - Museum of Fine Arts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybourgogne",
    "title": "Die Schleuse von Bourgogne in Moret",
    "artist": "Alfred Sisley",
    "year": "1882",
    "museum": "Musée d’art et d’histoire, Genf",
    "source": "Wikimedia Commons: «L'Écluse de Bourgogne à Moret-sur-Loing.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syloingmoret83",
    "title": "Der Loing bei Moret",
    "artist": "Alfred Sisley",
    "year": "1883",
    "museum": "Museum Barberini, Potsdam",
    "source": "Wikimedia Commons: «Alfred Sisley The Loing at Moret 1883.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysaules",
    "title": "Weiden am Ufer der Orvanne",
    "artist": "Alfred Sisley",
    "year": "1883",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Alfred Sisley - Saules au bord de l'Orvanne - MB 0008 - Kunsthaus Zürich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syroadmet",
    "title": "Die Strasse von Moret nach Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Road from Moret to Saint-Mammès MET DP323408.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "sytugboat",
    "title": "Der Schlepper, der Loing bei Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1883",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Alfred Sisley - Le remorqueur, le Loing à Saint-Mammès - PPP739 - Musée des Beaux-Arts de la ville de Paris.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybemberg83",
    "title": "Die Ufer des Loing bei Moret",
    "artist": "Alfred Sisley",
    "year": "1883",
    "museum": "Fondation Bemberg, Toulouse",
    "source": "Wikimedia Commons: «Bemberg Fondation - Les bords du loing vers Moret - Alfred Sisley 1883.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysablonspath",
    "title": "Ein Pfad in Les Sablons",
    "artist": "Alfred Sisley",
    "year": "1883",
    "museum": "National Gallery of Australia, Canberra",
    "source": "Wikimedia Commons: «Alfred Sisley - Un sentier aux Sablons (A path at Les Sablons) - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysablonswood",
    "title": "Ein Waldstück bei Les Sablons",
    "artist": "Alfred Sisley",
    "year": "1883",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Un coin de bois aux Sablons - Alfred Sisley - 1883.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sycroix",
    "title": "La Croix-Blanche in Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1884",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Alfred Sisley - La Croix-Blanche at Saint-Mammès - 39.680 - Museum of Fine Arts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysepmorning84",
    "title": "Septembermorgen bei Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1884",
    "museum": "Museum Ordrupgaard, Charlottenlund",
    "source": "Wikimedia Commons: «September Morning near Saint-Mammès and the Veneux-Nadon Hills (1884) by Alfred Sisley.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syjunemorning",
    "title": "Junimorgen in Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1884",
    "museum": "Artizon Museum, Tokio",
    "source": "Wikimedia Commons: «Alfred Sisley - June Morning in Saint-Mammès - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syfarmyard",
    "title": "Bauernhof in Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1884",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Cour de ferme à Saint-Mammès - Alfred Sisley.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybarnes",
    "title": "Saint-Mammès, Kanal des Loing",
    "artist": "Alfred Sisley",
    "year": "1884",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Alfred Sisley - Saint Mammès–Loing Canal (Saint Mammès–Canal du Loing) - BF224 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybeachsm",
    "title": "Das Ufer von Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1884",
    "museum": "Saint Louis Art Museum",
    "source": "Wikimedia Commons: «Alfred Sisley - The Beach at Saint-Mammès - 224-1916 - Saint Louis Art Museum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sylock",
    "title": "Die Schleuse von Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1885",
    "museum": "Nelson-Atkins Museum of Art, Kansas City",
    "source": "Wikimedia Commons: «Alfred Sisley - The Lock of Saint-Mammès (1885, Nelson-Atkins Museum).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sycleveland",
    "title": "Saint-Mammès, Kanal des Loing",
    "artist": "Alfred Sisley",
    "year": "1885",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Alfred Sisley - Saint-Mammès, Loing Canal - 1961.262 - Cleveland Museum of Art.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "sybargesloing",
    "title": "Lastkähne auf dem Loing bei Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1885",
    "museum": "Israel-Museum, Jerusalem",
    "source": "Wikimedia Commons: «Alfred Sisley - Barges on the Loing at Saint-Mammès - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syyale85",
    "title": "Ufer des Loing, Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1885",
    "museum": "Yale University Art Gallery, New Haven",
    "source": "Wikimedia Commons: «Alfred Sisley - Bords du Loing, Saint-Mammes (The River Loing at Saint-Mammes) - 2017.78.1 - Yale University Art Gallery.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sycanalphila",
    "title": "Der Kanal bei Saint-Mammès",
    "artist": "Alfred Sisley",
    "year": "1885",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Sisley - Saint-Mammes,-Ducks-On-Canal.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syfontaines",
    "title": "Der Chemin des Fontaines am Junimorgen",
    "artist": "Alfred Sisley",
    "year": "1887",
    "museum": "Musée d’art et d’histoire, Genf",
    "source": "Wikimedia Commons: «Le Chemin des Fontaines le matin en juin - Alfred Sisley - MAHG 1990-0052.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysepmorning",
    "title": "Septembermorgen",
    "artist": "Alfred Sisley",
    "year": "um 1887",
    "museum": "Musée des Beaux-Arts, Agen",
    "source": "Wikimedia Commons: «(Agen) Matinée de septembre, vers 1887 - Alfred Sisley - Musée des Beaux-Arts d'Agen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sypontmia",
    "title": "Die Brücke von Moret",
    "artist": "Alfred Sisley",
    "year": "1888",
    "museum": "Minneapolis Institute of Art",
    "source": "Wikimedia Commons: «Alfred Sisley - Le Pont de Moret - 2002.67 - Minneapolis Institute of Arts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syeveningoct",
    "title": "Ein Abend in Moret, Ende Oktober",
    "artist": "Alfred Sisley",
    "year": "1888",
    "museum": "Museo Thyssen-Bornemisza, Madrid",
    "source": "Wikimedia Commons: «Un soir à Moret - Fin d'octobre.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysunset88",
    "title": "Moret bei Sonnenuntergang",
    "artist": "Alfred Sisley",
    "year": "1888",
    "museum": "Cincinnati Art Museum",
    "source": "Wikimedia Commons: «'Moret at Sunset' by Alfred Sisley, Cincinnati Art Museum.JPG», Public domain (gemeinfrei)"
  },
  {
    "id": "syriverview",
    "title": "Flusslandschaft",
    "artist": "Alfred Sisley",
    "year": "1889",
    "museum": "Princeton University Art Museum",
    "source": "Wikimedia Commons: «1889, Sisley, River View.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "systreetmoret",
    "title": "Strasse in Moret",
    "artist": "Alfred Sisley",
    "year": "um 1890",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Alfred Sisley - Street in Moret - 1922.441 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybridgephila",
    "title": "Die Brücke von Moret-sur-Loing",
    "artist": "Alfred Sisley",
    "year": "1891",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Bridge at Moret-sur-Loing - Alfred Sisley - PAM 1978-1-29.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "symillssnow",
    "title": "Der Loing und die Mühlen von Moret im Schnee",
    "artist": "Alfred Sisley",
    "year": "1891",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Alfred Sisley - The Loing and the Mills of Moret, Snow Effect - 1955.545 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "symoussoir",
    "title": "Die Rue Eugène Moussoir in Moret, Winter",
    "artist": "Alfred Sisley",
    "year": "1891",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Rue Eugène Moussoir at Moret- Winter MET DT1907.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "sycanalloing",
    "title": "Der Kanal des Loing",
    "artist": "Alfred Sisley",
    "year": "1892",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Alfred Sisley - The Loing's Canal - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syfosses",
    "title": "Moret-sur-Loing, Rue des Fossés",
    "artist": "Alfred Sisley",
    "year": "1892",
    "museum": "National Museum Cardiff",
    "source": "Wikimedia Commons: «Amgueddfa Cymru - Moret-sur-Loing (Rue des Fossés) - 2869.jpeg», CC0 (gemeinfrei)"
  },
  {
    "id": "symyhouse",
    "title": "Mein Haus in Moret",
    "artist": "Alfred Sisley",
    "year": "1892",
    "museum": "Museum Barberini, Potsdam",
    "source": "Wikimedia Commons: «Alfred Sisley My House at Moret 1892.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "symatratrain",
    "title": "Die Werft Matrat in Moret, Regenwetter",
    "artist": "Alfred Sisley",
    "year": "1892",
    "museum": "Yale University Art Gallery, New Haven",
    "source": "Wikimedia Commons: «Alfred Sisley - The Matrat Boatyard, Moret-Sur-Loing, Rainy Weather - 1983.53.7 - Yale University Art Gallery.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sybridge93",
    "title": "Die Brücke von Moret",
    "artist": "Alfred Sisley",
    "year": "1893",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Le pont de Moret - Alfred Sisley.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sychurchrain",
    "title": "Die Kirche von Moret im Morgenregen",
    "artist": "Alfred Sisley",
    "year": "1893",
    "museum": "Hunterian Art Gallery, Glasgow",
    "source": "Wikimedia Commons: «Alfred Sisley, Notre-Dame de Moret im Morgenregen, 1893.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sychurchlangmatt",
    "title": "Die Kirche von Moret, Regenwetter, Morgen",
    "artist": "Alfred Sisley",
    "year": "1893",
    "museum": "Museum Langmatt, Baden",
    "source": "Wikimedia Commons: «The church at Moret, Rainy Weather, Morning - Alfred Sisley - Museum Langmatt-8641 (without frame).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sychurchcalvet",
    "title": "Die Kirche von Moret",
    "artist": "Alfred Sisley",
    "year": "1893",
    "museum": "Musée Calvet, Avignon",
    "source": "Wikimedia Commons: «Musée Calvet Sisley.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sychurchdia",
    "title": "Die Kirche von Moret nach dem Regen",
    "artist": "Alfred Sisley",
    "year": "1894",
    "museum": "Detroit Institute of Arts",
    "source": "Wikimedia Commons: «Alfred Sisley - Church at Moret after the Rain - 20.114 - Detroit Institute of Arts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sychurchpp",
    "title": "Die Kirche von Moret",
    "artist": "Alfred Sisley",
    "year": "1894",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Sisley, Alfred-L'église à Moret-Paris, Petit-Palais.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sysahurs",
    "title": "Die Wiesen von Sahurs in der Morgensonne",
    "artist": "Alfred Sisley",
    "year": "1894",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Sahurs Meadows in Morning Sun MET DT1870.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "syclearing",
    "title": "Eine Waldlichtung",
    "artist": "Alfred Sisley",
    "year": "1895",
    "museum": "Museo Thyssen-Bornemisza, Madrid",
    "source": "Wikimedia Commons: «Alfred Sisley - A Forest Clearing - 1895.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "syshoresloing",
    "title": "Am Ufer des Loing",
    "artist": "Alfred Sisley",
    "year": "1896",
    "museum": "Nationalmuseum, Stockholm",
    "source": "Wikimedia Commons: «On the Shores of Loing (Alfred Sisley) - Nationalmuseum - 18774.tif», Public domain (gemeinfrei)"
  },
  {
    "id": "syloire",
    "title": "Flussufer im Winter",
    "artist": "Alfred Sisley",
    "year": "1896",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Alfred Sisley - The Loire - 1988.504 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sycardiff",
    "title": "Die Reede von Cardiff",
    "artist": "Alfred Sisley",
    "year": "1897",
    "museum": "Musée des Beaux-Arts, Reims",
    "source": "Wikimedia Commons: «La Rade de Cardiff.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "sypenarth",
    "title": "Die Klippe von Penarth, Abend, Ebbe",
    "artist": "Alfred Sisley",
    "year": "1897",
    "museum": "National Museum Cardiff",
    "source": "Wikimedia Commons: «Amgueddfa Cymru - Y Clogwyn ym Mhenarth, Min Nos, Trai - The Cliff at Penarth, evening, low tide - 2871.jpeg», CC0 (gemeinfrei)"
  },
  {
    "id": "sypenarthstorm",
    "title": "Die Klippe von Penarth, Abend, Gewitter",
    "artist": "Alfred Sisley",
    "year": "1897",
    "museum": "Beaverbrook Art Gallery, Fredericton",
    "source": "Wikimedia Commons: «La falaise de Penarth, le soir, temps orageux, 1897.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "systorr",
    "title": "Storr’s Rock, Lady’s Cove, Abend",
    "artist": "Alfred Sisley",
    "year": "1897",
    "museum": "National Museum Cardiff",
    "source": "Wikimedia Commons: «Amgueddfa Cymru - Craig Storr, Traeth Bach y Forwyn, min nos - Storr Rock, Lady's Cove, le soir - 3401.jpeg», CC0 (gemeinfrei)"
  },
  {
    "id": "sylangland",
    "title": "Die Bucht von Langland",
    "artist": "Alfred Sisley",
    "year": "1897",
    "museum": "Wallraf-Richartz-Museum, Köln",
    "source": "Wikimedia Commons: «1897 Sisley Langland Bay anagoria.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "systorrmorning",
    "title": "Storr’s Rock, Langland, Morgen",
    "artist": "Alfred Sisley",
    "year": "1897",
    "museum": "Kunstmuseum Bern",
    "source": "Wikimedia Commons: «Alfred Sisley 013.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'sisley'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1839–1899";
  path.subtitle = "Von Paris nach Moret-sur-Loing";
  path.intro = "Begleite Alfred Sisley durch sein ganzes Leben: von der Geburt in Paris 1839 über das Atelier Gleyre, Louveciennes, Marly und die Flut von 1876 bis zu den Jahren an Seine und Loing bei Moret, der Kirche von Moret, der Reise nach Wales 1897 und seinem Tod 1899.";
  path.ending = [
  "Sisley stirbt am 29. Januar 1899 in Moret-sur-Loing, wenige Monate nach Eugénie. Am 1. Februar wird er auf dem Friedhof von Moret begraben.",
  "Auf Monets Anregung versteigert die Galerie Georges Petit am 1. Mai 1899 Bilder aus seinem Atelier und Werke, die seine Freunde gestiftet haben. Der Erlös ist für seine Kinder Pierre und Jeanne-Adèle bestimmt."
];
  path.epilogue = "Alfred Sisley stirbt am 29. Januar 1899 in Moret-sur-Loing, an dem Fluss, den er zwanzig Jahre lang gemalt hat.";
  var sl = (path.stations || []).filter(function (s) { return s.id === 'syloing'; })[0];
  if (sl) sl.intro = [
  "Anfang 1877 zieht Sisley nach Sèvres. Im April zeigt er siebzehn Landschaften in der dritten Impressionisten-Ausstellung. Er malt die Brücke von Sèvres und die Seine bei Suresnes.",
  "Im Herbst 1879 besucht er Moret-sur-Loing am Rand des Walds von Fontainebleau. Im Januar 1880 zieht er mit Eugénie und den Kindern nach Veneux-Nadon, nahe bei Saint-Mammès und Moret, weil das Leben dort billiger ist."
];
  var stations = [
  {
    "id": "syveneux",
    "place": "Veneux-Nadon",
    "when": "1880",
    "map": {
      "x": 118,
      "y": 122
    },
    "mapLabel": "Veneux-Nadon",
    "intro": [
      "Im Januar 1880 wohnt Sisley mit Eugénie, Pierre und Jeanne-Adèle in Veneux-Nadon, zwischen der Seine und dem Wald von Fontainebleau. Das Dorf ist ruhig, und das Leben ist billiger als bei Paris.",
      "Geld bleibt knapp. Der Kunsthändler Paul Durand-Ruel kauft ihm nun regelmässig Bilder ab und gibt ihm dafür ein festes Auskommen. Sisley malt die Steinbrüche, die Wiesen bei By und die Ufer der Seine."
    ],
    "works": [
      {
        "pid": "syvsmwalters",
        "text": [
          "Über eine Wiese sieht man auf die Häuser von Saint-Mammès am Wasser.",
          "Der Himmel nimmt die Hälfte des Bildes ein."
        ],
        "fact": "um 1880. Walters Art Museum, Baltimore."
      },
      {
        "pid": "syquarries",
        "text": [
          "Ein Weg führt unter Bäumen an der Seine entlang, rechts leuchten die hellen Hänge der Steinbrüche.",
          "Auf dem Weg sind kleine Figuren und ein Wagen unterwegs."
        ],
        "fact": "1880. Museum Barberini, Potsdam."
      },
      {
        "pid": "syferryby",
        "text": [
          "Ein schmaler Pfad führt durch hohes Gras zum Fluss, wo früher eine Fähre übersetzte.",
          "Das Bild trägt kein Datum, es entstand wohl 1880 oder 1881."
        ],
        "fact": "um 1880. National Gallery, London."
      },
      {
        "pid": "sybrickfield",
        "text": [
          "Auf einem grünen Hang stehen die Reste einer Ziegelei, darüber ziehen graue Wolken.",
          "In der Ferne liegt das Tal mit roten Dächern."
        ],
        "fact": "1880. Kröller-Müller Museum, Otterlo."
      },
      {
        "pid": "syfrostveneux",
        "text": [
          "Wiesen und Bäume sind von Reif bedeckt und schimmern weiss und rosa.",
          "Sisley malt den kalten Morgen mit hellen, kurzen Strichen."
        ],
        "fact": "1880. University of Michigan Museum of Art, Ann Arbor."
      },
      {
        "pid": "sypetitspres",
        "text": [
          "Ein Weg führt zwischen Wiesen auf ein paar Häuser zu, der Himmel ist dunkel vor dem Gewitter.",
          "Ein heller Streifen Licht liegt noch auf den Feldern."
        ],
        "fact": "1880. Musée d’Orsay, Paris."
      }
    ]
  },
  {
    "id": "syshows",
    "place": "Ausstellungen und Saint-Mammès",
    "when": "1881–1882",
    "map": {
      "x": 124,
      "y": 120
    },
    "mapLabel": "Saint-Mammès",
    "intro": [
      "1881 zeigt die Zeitschrift La Vie Moderne in ihren Räumen vierzehn Bilder von Sisley; Renoir hat ihm den Kontakt verschafft. 1882 stellt er zum letzten Mal mit den Impressionisten aus, diesmal siebenundzwanzig Landschaften.",
      "Er malt den Loing, der bei Saint-Mammès in die Seine fliesst, die Obstgärten von By und die Schleuse von Moret."
    ],
    "works": [
      {
        "pid": "synearmoret",
        "text": [
          "Ein Feldweg führt durch Wiesen und Bäume, in der Ferne sieht man die Hügel am Loing.",
          "Wolken ziehen über einen hellblauen Himmel."
        ],
        "fact": "1881. Museum Barberini, Potsdam."
      },
      {
        "pid": "symeadowveneux",
        "text": [
          "Eine grüne Wiese reicht bis zu einer Reihe von Bäumen und Häusern.",
          "Eine kleine Figur steht im Gras."
        ],
        "fact": "1881. Museum Barberini, Potsdam."
      },
      {
        "pid": "syloingautumn",
        "text": [
          "Am Ufer stehen Bäume mit gelbem und rotem Laub, das Wasser spiegelt die Farben.",
          "Der Himmel ist weit und hell."
        ],
        "fact": "1881. Israel-Museum, Jerusalem."
      },
      {
        "pid": "syorchardby",
        "text": [
          "Die Obstbäume blühen weiss, darunter wächst frisches Gras.",
          "Zwei Figuren gehen durch den Garten."
        ],
        "fact": "1881. Museum Boijmans Van Beuningen, Rotterdam."
      },
      {
        "pid": "syloingsm82",
        "text": [
          "Der Fluss zieht ruhig an Häusern und Bäumen vorbei.",
          "Am Ufer liegen Boote."
        ],
        "fact": "1882. Museum of Fine Arts, Boston."
      },
      {
        "pid": "sybourgogne",
        "text": [
          "An der Schleuse am Kanal stehen Häuser, ein Kahn wartet auf dem Wasser.",
          "Der Himmel ist von Wolken bewegt."
        ],
        "fact": "1882. Musée d’art et d’histoire, Genf."
      }
    ]
  },
  {
    "id": "symoret83",
    "place": "Ein Jahr in Moret",
    "when": "1882–1883",
    "map": {
      "x": 120,
      "y": 128
    },
    "mapLabel": "Moret",
    "intro": [
      "Im September 1882 zieht die Familie nach Moret-sur-Loing, eine kleine alte Stadt am Loing. Im Frühjahr 1883 richtet Durand-Ruel in Paris eine Einzelausstellung für Sisley aus. Sie bringt ihm wenig Erfolg.",
      "Das Geld reicht nicht. Im Herbst 1883 kehrt die Familie nach Les Sablons zurück, einem Weiler bei Veneux-Nadon."
    ],
    "works": [
      {
        "pid": "syloingmoret83",
        "text": [
          "Der Fluss fliesst breit und ruhig, am Ufer stehen Pappeln.",
          "Sisley wohnt in diesem Jahr in Moret."
        ],
        "fact": "1883. Museum Barberini, Potsdam."
      },
      {
        "pid": "sysaules",
        "text": [
          "Weiden neigen sich über das Wasser der Orvanne, eines kleinen Flusses bei Moret.",
          "Das Laub glitzert in vielen Grüntönen."
        ],
        "fact": "1883. Kunsthaus Zürich."
      },
      {
        "pid": "syroadmet",
        "text": [
          "Eine Landstrasse führt an Bäumen entlang, eine Figur geht in der Sonne.",
          "Rechts öffnet sich der Blick auf die Felder."
        ],
        "fact": "1883. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "sytugboat",
        "text": [
          "Ein kleiner Schlepper zieht auf dem Loing vorbei, eine Rauchfahne steigt auf.",
          "Am Ufer stehen Häuser und Bäume."
        ],
        "fact": "1883. Petit Palais, Paris."
      },
      {
        "pid": "sybemberg83",
        "text": [
          "Der Loing glänzt unter einem hellen Himmel, am Ufer wachsen Bäume und Büsche.",
          "In der Ferne sieht man Häuser."
        ],
        "fact": "1883. Fondation Bemberg, Toulouse."
      }
    ]
  },
  {
    "id": "sysablons",
    "place": "Les Sablons",
    "when": "1883–1884",
    "map": {
      "x": 116,
      "y": 124
    },
    "mapLabel": "Les Sablons",
    "intro": [
      "In Les Sablons bleibt Sisley bis 1889. Von hier aus geht er zu Fuss an den Waldrand, auf die Feldwege und hinunter an den Loing bei Saint-Mammès.",
      "Er malt Höfe, Pfade und Uferwege zu allen Tageszeiten. Durand-Ruel kauft in diesen Jahren viele seiner Bilder, auch wenn der Händler selbst oft in Geldnot ist."
    ],
    "works": [
      {
        "pid": "sysablonspath",
        "text": [
          "Ein Pfad führt zwischen Gärten und Bäumen ins Dorf.",
          "Sonne und Schatten wechseln auf dem Weg."
        ],
        "fact": "1883. National Gallery of Australia, Canberra."
      },
      {
        "pid": "sysablonswood",
        "text": [
          "Hohe Bäume stehen dicht beieinander, durch die Blätter fällt Licht auf den Boden.",
          "Eine kleine Figur sitzt am Waldrand."
        ],
        "fact": "1883. Musée d’Orsay, Paris."
      },
      {
        "pid": "sycroix",
        "text": [
          "Häuser stehen hoch über dem Ufer, die kahlen Bäume werfen lange Schatten.",
          "Unten liegt der breite Fluss im Winterlicht."
        ],
        "fact": "1884. Museum of Fine Arts, Boston."
      },
      {
        "pid": "sysepmorning84",
        "text": [
          "Die Morgensonne liegt auf Wiesen und Hügeln bei Saint-Mammès und Veneux-Nadon.",
          "Ein grosser Baum rahmt das Bild auf der rechten Seite."
        ],
        "fact": "1884. Museum Ordrupgaard, Charlottenlund."
      },
      {
        "pid": "syjunemorning",
        "text": [
          "Die Häuser am Fluss leuchten in der Morgensonne, das Wasser ist ruhig.",
          "Am Ufer sitzen kleine Figuren."
        ],
        "fact": "1884. Artizon Museum, Tokio."
      },
      {
        "pid": "syfarmyard",
        "text": [
          "Ein Torbogen führt in einen Hof mit alten Mauern und hohen Dächern.",
          "Ein paar Leute arbeiten im Hof."
        ],
        "fact": "1884. Musée d’Orsay, Paris."
      },
      {
        "pid": "sybarnes",
        "text": [
          "Am Kanal liegen Lastkähne, die Häuser spiegeln sich im Wasser.",
          "Über allem steht ein heller Himmel."
        ],
        "fact": "1884. Barnes Foundation, Philadelphia."
      },
      {
        "pid": "sybeachsm",
        "text": [
          "Ein flacher Sandstreifen führt zum Wasser, dahinter stehen Häuser und Bäume.",
          "Ein Kahn liegt am Ufer."
        ],
        "fact": "1884. Saint Louis Art Museum."
      }
    ]
  },
  {
    "id": "systmam",
    "place": "Saint-Mammès",
    "when": "1885",
    "map": {
      "x": 124,
      "y": 120
    },
    "mapLabel": "Saint-Mammès",
    "intro": [
      "1885 malt Sisley in Saint-Mammès immer wieder dieselbe Reihe von Häusern am Kanal und an der Schleuse. Er füllt Skizzenbücher mit Zeichnungen und Notizen.",
      "Lastkähne, Treidelwege und das breite Wasser von Seine und Loing werden zu seinem festen Thema."
    ],
    "works": [
      {
        "pid": "sylock",
        "text": [
          "Hinter der Schleuse stehen die Häuser von Saint-Mammès, ein Kahn liegt im Wasser.",
          "Der Himmel ist hoch und hell."
        ],
        "fact": "1885. Nelson-Atkins Museum of Art, Kansas City."
      },
      {
        "pid": "sycleveland",
        "text": [
          "Häuser reihen sich am Kanal, ihre Fassaden leuchten in der Sonne.",
          "Vorne liegt ein schmaler Uferweg."
        ],
        "fact": "1885. Cleveland Museum of Art."
      },
      {
        "pid": "sybargesloing",
        "text": [
          "Mehrere Kähne liegen hintereinander am Ufer, das Wasser ist glatt.",
          "Am anderen Ufer stehen Häuser."
        ],
        "fact": "1885. Israel-Museum, Jerusalem."
      },
      {
        "pid": "syyale85",
        "text": [
          "Gras und Büsche wachsen am Ufer, dahinter fliesst der Loing.",
          "Die Häuser von Saint-Mammès stehen in der Ferne."
        ],
        "fact": "1885. Yale University Art Gallery, New Haven."
      },
      {
        "pid": "sycanalphila",
        "text": [
          "Enten schwimmen auf dem Kanal, ein Mann steht in einem Boot.",
          "Am Ufer leuchtet ein rotes Dach zwischen Bäumen."
        ],
        "fact": "1885. Philadelphia Museum of Art."
      }
    ]
  },
  {
    "id": "sypetit",
    "place": "Georges Petit und der Staat",
    "when": "1886–1889",
    "map": {
      "x": 120,
      "y": 126
    },
    "mapLabel": "Paris · Moret",
    "intro": [
      "Sisley sucht neben Durand-Ruel weitere Händler. 1887 zeigt die Galerie Georges Petit seine Bilder, im Dezember 1888 richtet sie ihm eine eigene Ausstellung aus. 1889 stellt Durand-Ruel achtundzwanzig Bilder von ihm in New York aus.",
      "1888 kauft der französische Staat zum ersten Mal ein Bild von Sisley, die Matinée de septembre, und schickt es nach Agen. Im November 1889 zieht die Familie wieder nach Moret-sur-Loing."
    ],
    "works": [
      {
        "pid": "syfontaines",
        "text": [
          "Ein Weg führt am Waldrand entlang, hohes Gras leuchtet in der Sonne.",
          "Der Chemin des Fontaines liegt nahe bei Les Sablons."
        ],
        "fact": "1887. Musée d’art et d’histoire, Genf."
      },
      {
        "pid": "sysepmorning",
        "text": [
          "Obstbäume stehen auf einer sonnigen Wiese, rechts ragt ein dunkler Baum ins Bild. 1888 kauft der französische Staat dieses Bild als erstes Werk von Sisley."
        ],
        "fact": "um 1887. Musée des Beaux-Arts, Agen."
      },
      {
        "pid": "sypontmia",
        "text": [
          "Die alte Steinbrücke spannt sich über den Loing, dahinter stehen Mühlen und die Kirche.",
          "Das Wasser spiegelt die Bögen."
        ],
        "fact": "1888. Minneapolis Institute of Art."
      },
      {
        "pid": "syeveningoct",
        "text": [
          "Der Abendhimmel färbt sich violett und rosa über dem Fluss.",
          "Die Bäume am Ufer stehen schon dunkel."
        ],
        "fact": "1888. Museo Thyssen-Bornemisza, Madrid."
      },
      {
        "pid": "sysunset88",
        "text": [
          "Die Stadt liegt am Fluss im warmen Abendlicht.",
          "Kirche und Dächer zeichnen sich gegen den Himmel ab."
        ],
        "fact": "1888. Cincinnati Art Museum."
      },
      {
        "pid": "syriverview",
        "text": [
          "Der Fluss zieht sich breit durch das Bild, am Ufer wachsen Bäume.",
          "Wolken spiegeln sich im Wasser."
        ],
        "fact": "1889. Princeton University Art Museum."
      }
    ]
  },
  {
    "id": "symoret90",
    "place": "Zuhause in Moret",
    "when": "1889–1892",
    "map": {
      "x": 120,
      "y": 128
    },
    "mapLabel": "Moret",
    "intro": [
      "Im Februar 1890 wird Sisley Mitglied der neuen Société nationale des Beaux-Arts. Fast jedes Jahr zeigt er nun Bilder in ihrem Salon auf dem Champ-de-Mars. Er verkauft seine Werke an verschiedene Händler.",
      "1891 zieht er in ein Haus an der Rue Montmartre in Moret. Er malt die Strassen, die Mühlen, die Brücke und den Kanal der Stadt im Schnee, im Regen und in der Sonne."
    ],
    "works": [
      {
        "pid": "systreetmoret",
        "text": [
          "Eine stille Strasse führt zwischen alten Häusern hindurch.",
          "Ein paar Figuren stehen im Schatten."
        ],
        "fact": "um 1890. Art Institute of Chicago."
      },
      {
        "pid": "sybridgephila",
        "text": [
          "Die Bögen der Brücke reihen sich über dem Wasser, dahinter stehen Häuser und Bäume.",
          "Das Licht ist klar und kühl."
        ],
        "fact": "1891. Philadelphia Museum of Art."
      },
      {
        "pid": "symillssnow",
        "text": [
          "Schnee liegt auf den Dächern der Mühlen und am Ufer.",
          "Der Fluss ist dunkel und ruhig."
        ],
        "fact": "1891. Clark Art Institute, Williamstown."
      },
      {
        "pid": "symoussoir",
        "text": [
          "Schnee bedeckt die Strasse und die Dächer, ein paar Leute gehen vorbei.",
          "Die Häuser sind in sanften Farben gemalt."
        ],
        "fact": "1891. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "sycanalloing",
        "text": [
          "Ein gerader Kanal führt zwischen Pappeln in die Ferne.",
          "Auf dem Treidelweg geht eine Figur."
        ],
        "fact": "1892. Musée d’Orsay, Paris."
      },
      {
        "pid": "syfosses",
        "text": [
          "Eine Gasse führt an Gärten und Mauern entlang zur Stadt.",
          "Über den Dächern steht ein heller Himmel."
        ],
        "fact": "1892. National Museum Cardiff."
      },
      {
        "pid": "symyhouse",
        "text": [
          "Ein blühender Busch füllt den Garten, dahinter drängen sich die Dächer von Moret.",
          "Sisley malt den Blick bei seinem eigenen Haus."
        ],
        "fact": "1892. Museum Barberini, Potsdam."
      },
      {
        "pid": "symatratrain",
        "text": [
          "Am Ufer liegen Boote auf der Werft, der Himmel ist grau.",
          "Der Regen macht die Farben weich."
        ],
        "fact": "1892. Yale University Art Gallery, New Haven."
      }
    ]
  },
  {
    "id": "sychurch",
    "place": "Die Kirche von Moret",
    "when": "1893–1894",
    "map": {
      "x": 121,
      "y": 129
    },
    "mapLabel": "Notre-Dame",
    "intro": [
      "1893 malt Sisley die Brücke von Moret an einem hellen Tag. Dann stellt er seine Staffelei vor die gotische Kirche Notre-Dame von Moret.",
      "In einer Reihe von Bildern zeigt er 1893 und 1894 dieselbe Fassade im Morgenregen, nach dem Regen, in der Sonne und am Abend. Wie Monet bei der Kathedrale von Rouen erprobt er die Serie."
    ],
    "works": [
      {
        "pid": "sybridge93",
        "text": [
          "An einem hellen Sommertag liegt die Brücke im vollen Licht, Wasser und Himmel sind blau.",
          "Am Ufer gehen kleine Figuren."
        ],
        "fact": "1893. Musée d’Orsay, Paris."
      },
      {
        "pid": "sychurchrain",
        "text": [
          "Die gotische Fassade steht grau und violett im Regen.",
          "Davor gehen ein paar Menschen über den nassen Platz."
        ],
        "fact": "1893. Hunterian Art Gallery, Glasgow."
      },
      {
        "pid": "sychurchlangmatt",
        "text": [
          "Hoch ragt die Kirche in den bewölkten Himmel.",
          "Unten an den Häusern ist es noch dämmrig."
        ],
        "fact": "1893. Museum Langmatt, Baden."
      },
      {
        "pid": "sychurchcalvet",
        "text": [
          "Die Sonne steht auf der Fassade mit dem grossen Rosettenfenster.",
          "Vor der Kirche steht die alte Markthalle."
        ],
        "fact": "1893. Musée Calvet, Avignon."
      },
      {
        "pid": "sychurchdia",
        "text": [
          "Nach dem Regen wird der Himmel heller, die nassen Steine glänzen.",
          "Die Kirche steht hoch über der Strasse."
        ],
        "fact": "1894. Detroit Institute of Arts."
      },
      {
        "pid": "sychurchpp",
        "text": [
          "Die Fassade leuchtet hell und rosa unter einem blauen Himmel.",
          "Sisley malt die Kirche hier in voller Sonne."
        ],
        "fact": "1894. Petit Palais, Paris."
      }
    ]
  },
  {
    "id": "syretro",
    "place": "Rouen und die grosse Ausstellung",
    "when": "1894–1897",
    "map": {
      "x": 84,
      "y": 72
    },
    "mapLabel": "Rouen · Paris",
    "intro": [
      "1894 ist Sisley Gast des Sammlers François Depeaux bei Rouen und malt die Wiesen von Sahurs an der Seine. Zurück in Moret malt er Waldlichtungen und den Loing.",
      "Im Februar 1897 zeigt die Galerie Georges Petit eine grosse Ausstellung mit hundertsechsundvierzig Bildern von ihm. Im selben Jahr kommen mit dem Vermächtnis von Gustave Caillebotte sechs seiner Bilder in die französischen Staatssammlungen."
    ],
    "works": [
      {
        "pid": "sysahurs",
        "text": [
          "Weite Wiesen liegen an der Seine, Bäume werfen weiche Schatten.",
          "Sisley malt sie als Gast von François Depeaux bei Rouen."
        ],
        "fact": "1894. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "syclearing",
        "text": [
          "Zwischen hohen Bäumen öffnet sich eine sonnige Lichtung.",
          "Das Licht fällt in Flecken auf Gras und Weg."
        ],
        "fact": "1895. Museo Thyssen-Bornemisza, Madrid."
      },
      {
        "pid": "syshoresloing",
        "text": [
          "Pappeln stehen am Ufer, der Loing fliesst ruhig vorbei.",
          "Über dem Wasser liegt ein milder Himmel."
        ],
        "fact": "1896. Nationalmuseum, Stockholm."
      },
      {
        "pid": "syloire",
        "text": [
          "Ein kahler Baum steht vorne am Ufer, ein Kahn liegt am Wasser.",
          "Das Museum führt das Bild unter dem Titel The Loire; im Werkverzeichnis heisst es Bords du Loing."
        ],
        "fact": "1896. Art Institute of Chicago."
      }
    ]
  },
  {
    "id": "sywales",
    "place": "Wales und der Abschied",
    "when": "1897–1899",
    "map": {
      "x": 30,
      "y": 40
    },
    "mapLabel": "Penarth · Langland",
    "intro": [
      "Im Sommer 1897 reisen Sisley und Eugénie nach Grossbritannien, auf Anraten von François Depeaux. Sie wohnen in Penarth bei Cardiff. Am 5. August 1897 heiraten sie auf dem Standesamt in Cardiff, nach über dreissig gemeinsamen Jahren. Danach malt Sisley an der Bucht von Langland auf der Halbinsel Gower. Im Herbst kehren sie nach Moret zurück.",
      "Anfang 1898 bemüht sich Sisley um die französische Staatsbürgerschaft; zu seinen Lebzeiten wird er nicht Franzose. Eugénie stirbt am 8. Oktober 1898. Sisley stirbt am 29. Januar 1899 in Moret-sur-Loing."
    ],
    "works": [
      {
        "pid": "sycardiff",
        "text": [
          "Ein Baum steht auf der Klippe über dem Meer, draussen ankern Schiffe vor Cardiff.",
          "Zwei kleine Figuren schauen aufs Wasser."
        ],
        "fact": "1897. Musée des Beaux-Arts, Reims."
      },
      {
        "pid": "sypenarth",
        "text": [
          "Bei Ebbe liegt der Strand unter der Klippe frei, das Licht des Abends ist weich.",
          "Sisley wohnt im Sommer 1897 in Penarth."
        ],
        "fact": "1897. National Museum Cardiff."
      },
      {
        "pid": "sypenarthstorm",
        "text": [
          "Dunkle Wolken ziehen über das Meer, die Klippe leuchtet im letzten Licht.",
          "So grosse, wilde Küsten hat Sisley vorher kaum gemalt."
        ],
        "fact": "1897. Beaverbrook Art Gallery, Fredericton."
      },
      {
        "pid": "systorr",
        "text": [
          "Ein grosser Felsblock liegt auf dem Kiesstrand, dahinter rollen Wellen heran.",
          "Lady’s Cove ist eine kleine Bucht bei Langland."
        ],
        "fact": "1897. National Museum Cardiff."
      },
      {
        "pid": "sylangland",
        "text": [
          "Von einer grünen Klippe blickt man über das helle Meer, in der Ferne fahren Segelschiffe.",
          "Sisley und Eugénie verbringen hier die Zeit nach ihrer Hochzeit."
        ],
        "fact": "1897. Wallraf-Richartz-Museum, Köln."
      },
      {
        "pid": "systorrmorning",
        "text": [
          "Im Morgenlicht liegt der Felsen ruhig am Strand, das Meer ist hell und still.",
          "Im Herbst kehren Sisley und Eugénie nach Moret zurück."
        ],
        "fact": "1897. Kunstmuseum Bern."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
