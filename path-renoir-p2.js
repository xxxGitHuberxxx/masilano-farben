// v9.1 Pierre-Auguste Renoir life journey, Part 2 (1881–1919), completing the path.
// Appends stations and works; rewrites the last Part-1 station (renoircanotiers) and step (rnwargemont) so they no longer tease a following part.
// PD/CC0 scans only. Documented facts only; no quotations. No nudes, bathers or near-nudes; no death-bed images.
(function () {
  var works = [
  {
    "id": "rnalgirl",
    "title": "Algerisches Mädchen",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Algerian Girl - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnmosque",
    "title": "Die Moschee (Arabisches Fest)",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Auguste Renoir - The Mosque - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnbanana",
    "title": "Bananenfeld",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Auguste Renoir - Field of Banana Trees - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnfruitsmidi",
    "title": "Früchte des Südens",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Fruits of the Midi - 1933.1176 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnchildbird",
    "title": "Kind mit Vogel (Mademoiselle Fleury in algerischem Kostüm)",
    "artist": "Pierre-Auguste Renoir",
    "year": "1882",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Child with a Bird (Mademoiselle Fleury in Algerian Costume) - 1955.586 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rnvenice",
    "title": "Canal Grande, Venedig",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Grand Canal, Venice - 19.173 - Museum of Fine Arts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnsanmarco",
    "title": "Piazza San Marco, Venedig",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Minneapolis Institute of Art",
    "source": "Wikimedia Commons: «Pierre Auguste Renoir - The Piazza San Marco, Venice - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rndoge",
    "title": "Venedig, der Dogenpalast",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Venice, the Doge's Palace - 1955.596 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rnnaples",
    "title": "Die Bucht von Neapel",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Bay of Naples MET DT1878.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnnaplesev",
    "title": "Bucht von Neapel, Abend",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Bay of Naples, Evening - 1955.587 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rnestaque",
    "title": "Felsen bei L’Estaque",
    "artist": "Pierre-Auguste Renoir",
    "year": "1882",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Rocky Crags at L'Estaque - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rncountry",
    "title": "Tanz auf dem Land",
    "artist": "Pierre-Auguste Renoir",
    "year": "1883",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Pierre Auguste Renoir - Country Dance - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnbougival",
    "title": "Tanz in Bougival",
    "artist": "Pierre-Auguste Renoir",
    "year": "1883",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Dance-At-Bougival.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnsisters",
    "title": "Zwei Schwestern (Auf der Terrasse)",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Two Sisters (On the Terrace) - 1933.455 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnmtdr",
    "title": "Marie-Thérèse Durand-Ruel beim Nähen",
    "artist": "Pierre-Auguste Renoir",
    "year": "1882",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Marie-Thérèse Durand-Ruel Sewing - 1955.613 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rncahen",
    "title": "Albert Cahen d’Anvers",
    "artist": "Pierre-Auguste Renoir",
    "year": "1881",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir (French - Albert Cahen d'Anvers - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnfog",
    "title": "Nebel auf Guernsey",
    "artist": "Pierre-Auguste Renoir",
    "year": "1883",
    "museum": "Cincinnati Art Museum",
    "source": "Wikimedia Commons: «Pierre Auguste Renoir - Fog on Guernsey (Brouillard à Guernsey) - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnguernkids",
    "title": "Kinder am Strand von Guernsey",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1883",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Children on the Seashore, Guernsey - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnguernview",
    "title": "Ansicht von Guernsey",
    "artist": "Pierre-Auguste Renoir",
    "year": "1883",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - View at Guernsey - 1955.601 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rnyport",
    "title": "Ebbe in Yport",
    "artist": "Pierre-Auguste Renoir",
    "year": "1883",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Low Tide, Yport - 1955.607 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rnseashore",
    "title": "Am Meer",
    "artist": "Pierre-Auguste Renoir",
    "year": "1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «By the Seashore MET DT1875.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnlucie",
    "title": "Lucie Bérard (Kind in Weiss)",
    "artist": "Pierre-Auguste Renoir",
    "year": "1883",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Lucie Berard (Child in White) - 1933.1172 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnhoop",
    "title": "Mädchen mit Reifen",
    "artist": "Pierre-Auguste Renoir",
    "year": "1885",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Girl with a Hoop, 1885, NGA 46533.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnwargkids",
    "title": "Nachmittag der Kinder in Wargemont",
    "artist": "Pierre-Auguste Renoir",
    "year": "1884",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Auguste Renoir - L'après-midi des enfants à Wargemont - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnseverine",
    "title": "Caroline Rémy («Séverine»)",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1885",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Caroline Rémy (\"Séverine\"), c. 1885, NGA 46683.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnjuliemanet",
    "title": "Julie Manet",
    "artist": "Pierre-Auguste Renoir",
    "year": "1887",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Auguste Renoir - Julie Manet - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rntamaris",
    "title": "Tamaris",
    "artist": "Pierre-Auguste Renoir",
    "year": "1885",
    "museum": "Minneapolis Institute of Art",
    "source": "Wikimedia Commons: «Pierre Auguste Renoir - Tamaris, France - 2006.9.2 - Minneapolis Institute of Arts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnreading88",
    "title": "Junges Mädchen beim Lesen",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1888",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Auguste Renoir, Young Girl Reading, c. 1888, NGA 52215.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnmendes",
    "title": "Die Töchter von Catulle Mendès",
    "artist": "Pierre-Auguste Renoir",
    "year": "1888",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Daughters of Catulle Mendès by Auguste Renoir.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnbluedress",
    "title": "Junges Mädchen in blauem Kleid",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1890",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Young Girl in a Blue Dress MET DT3303.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnvictoire",
    "title": "Montagne Sainte-Victoire",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1888–1889",
    "museum": "Yale University Art Gallery, New Haven",
    "source": "Wikimedia Commons: «La Montagne Sainte-Victoire by Pierre Auguste Renoir.jpeg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnappleseller",
    "title": "Die Apfelverkäuferin",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1890",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - The Apple Seller - 1958.47 - Cleveland Museum of Art.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rngrapes",
    "title": "Weinleserinnen",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1888",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Grape Gatherers (Vendangeuses) - BF937 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnpiano92",
    "title": "Junge Mädchen am Klavier",
    "artist": "Pierre-Auguste Renoir",
    "year": "1892",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Auguste Renoir - Young Girls at the Piano - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnpianomet",
    "title": "Zwei junge Mädchen am Klavier",
    "artist": "Pierre-Auguste Renoir",
    "year": "1892",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Two Young Girls at the Piano MET DT720.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnhat94",
    "title": "Kleines Mädchen mit Hut",
    "artist": "Pierre-Auguste Renoir",
    "year": "1894",
    "museum": "Indianapolis Museum of Art (Newfields)",
    "source": "Wikimedia Commons: «Pierre Auguste Renoir - Little Girl with a Hat (Jeune Fille au Chapeau) - 32.248 - Indianapolis Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rntworead",
    "title": "Zwei Mädchen beim Lesen",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1890–1891",
    "museum": "Los Angeles County Museum of Art",
    "source": "Wikimedia Commons: «Two Girls Reading LACMA M.68.46.1.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnroses90",
    "title": "Rosen in einer Vase",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1890",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Roses in a Vase - 1941.14 - Cleveland Museum of Art.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rngabjean",
    "title": "Gabrielle und Jean",
    "artist": "Pierre-Auguste Renoir",
    "year": "1895–1896",
    "museum": "Musée de l’Orangerie, Paris",
    "source": "Wikimedia Commons: «Auguste Renoir - Gabrielle and Jean - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rntoys",
    "title": "Kind mit Spielzeug – Gabrielle und Jean",
    "artist": "Pierre-Auguste Renoir",
    "year": "1895–1896",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Child with Toys - Gabrielle and the Artist's Son, Jean A34140.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnjean97",
    "title": "Bildnis Jean",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1897",
    "museum": "Museum of Fine Arts, Houston",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Portrait of Jean - 68.55 - Museum of Fine Arts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnjeansew",
    "title": "Jean Renoir beim Nähen",
    "artist": "Pierre-Auguste Renoir",
    "year": "1899–1900",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Jean Renoir Sewing - 1937.1027 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnself99",
    "title": "Selbstbildnis",
    "artist": "Pierre-Auguste Renoir",
    "year": "1899",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Self-Portrait - 1955.611 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "rnclaude04",
    "title": "Claude Renoir",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1904",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Claude Renoir - BF935 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnposte",
    "title": "Das Haus der Post, Cagnes",
    "artist": "Pierre-Auguste Renoir",
    "year": "1906",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Maison de la Poste, Cagnes.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rncollettes",
    "title": "Der Hof von Les Collettes, Cagnes",
    "artist": "Pierre-Auguste Renoir",
    "year": "1908–1914",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Farm at Les Collettes, Cagnes MET DT215205.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rnclown",
    "title": "Claude Renoir als Clown",
    "artist": "Pierre-Auguste Renoir",
    "year": "1909",
    "museum": "Musée de l’Orangerie, Paris",
    "source": "Wikimedia Commons: «Auguste Renoir - Claude Renoir in Clown Costume - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnpeaches",
    "title": "Pfirsiche auf einem Teller",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1902–1905",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Peaches on a Plate A14881.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rncagnesview",
    "title": "Das Dorf, vom Garten der Post aus",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1908",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - View from the Garden of the Post Office, Cagnes (Village vu du jardin de la poste, Cagnes) - BF106 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnwomansew",
    "title": "Nähende Frau",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1908",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Woman Sewing - BF900 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnandree",
    "title": "Andrée mit Hut, lesend",
    "artist": "Pierre-Auguste Renoir",
    "year": "1918",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Andrée in a Hat, Reading (Andrée en chapeau, lisant) - BF932 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnflowers15",
    "title": "Blumen",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1915",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Flowers - 1957.64 - Dallas Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnanemones",
    "title": "Anemonen",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1912",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Anemones (Anémones) - BF1167 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnroses12",
    "title": "Rosen",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1912",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Roses (Roses) - BF1168 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnland15",
    "title": "Landschaft",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1915",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Landscape (Paysage) - BF537 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rnfields",
    "title": "Frauen auf dem Feld",
    "artist": "Pierre-Auguste Renoir",
    "year": "um 1919",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Pierre-Auguste Renoir - Women in the Fields (Femmes aux champs) - BF896 - Barnes Foundation.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'renoir'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1841–1919";
  path.subtitle = "Von Limoges über Chatou, Algerien und Italien nach Cagnes-sur-Mer";
  path.intro = "Reise mit Pierre-Auguste Renoir durch sein ganzes Leben: von der Geburt in Limoges 1841 und der Lehre als Porzellanmaler über das Atelier Gleyre, die Freundschaft mit Monet, Bazille und Sisley, die Grenouillère und die Impressionisten-Ausstellungen bis zum «Déjeuner des canotiers», dann nach Algerien und Italien, zur Heirat mit Aline Charigot, zu den Söhnen Pierre, Jean und Claude, nach Essoyes und Les Collettes in Cagnes-sur-Mer, bis zu Renoirs Tod am 3. Dezember 1919.";
  path.ending = [
  "Pierre-Auguste Renoir stirbt am 3. Dezember 1919 in Cagnes-sur-Mer, achtundsiebzig Jahre alt. Sein Grab liegt in Essoyes, dem Dorf Alines.",
  "Zurück bleiben Tausende von Bildern: Tänze und Kahnfahrer, Kinder und Bildnisse, Blumen, Früchte und die Landschaften des Südens."
];
  path.epilogue = "Pierre-Auguste Renoir stirbt am 3. Dezember 1919 in Cagnes-sur-Mer. Sein Grab liegt in Essoyes.";
  var can = (path.stations || []).filter(function (s) { return s.id === 'renoircanotiers'; })[0];
  if (can) {
    can.intro = [
  "An der Seine bei Chatou, im Restaurant der Familie Fournaise, malt Renoir Freunde beim Essen nach der Kahnfahrt.",
  "Das «Déjeuner des canotiers» von 1880–81 ist eines seiner bekanntesten Bilder. Von hier führt der Weg nach Algerien und Italien."
];
    (can.works || []).forEach(function (w) { if (w.pid === 'rnwargemont') w.text = [
  "1879 malt Renoir die Strasse bei Wargemont in der Normandie, wo ihn die Familie Bérard empfängt.",
  "Das Landschaftsbild im Toledo Museum of Art schliesst die Jahre vor der Reise nach Algerien und Italien."
]; });
  }
  var stations = [
  {
    "id": "renoiralgeria",
    "place": "Algerien",
    "when": "1881–1882",
    "map": {
      "x": 112,
      "y": 186
    },
    "mapLabel": "Algerien",
    "intro": [
      "Im Frühjahr 1881 reist Renoir zum ersten Mal nach Algerien. Er malt das starke Licht, Gärten, Feste und Menschen in und um Algier.",
      "Anfang 1882 erkrankt er in L’Estaque an einer Lungenentzündung und kehrt im Frühjahr 1882 zur Erholung noch einmal nach Algerien zurück."
    ],
    "works": [
      {
        "pid": "rnalgirl",
        "text": [
          "Das Bildnis eines algerischen Mädchens entsteht 1881 während der ersten Reise.",
          "Rot, Gold und Weiss leuchten vor dunklem Grund.",
          "Das Bild hängt im Museum of Fine Arts in Boston."
        ],
        "fact": "1881. Museum of Fine Arts, Boston."
      },
      {
        "pid": "rnmosque",
        "text": [
          "Von einer Anhöhe blickt Renoir auf eine Menge vor einer Moschee in Algier.",
          "Die Figuren lösen sich in Farbflecken auf.",
          "Das Bild hängt im Musée d’Orsay."
        ],
        "fact": "1881. Musée d’Orsay, Paris."
      },
      {
        "pid": "rnbanana",
        "text": [
          "Das Bananenfeld bei Algier zeigt die üppige Vegetation, die Renoir im Süden fasziniert.",
          "Auch dieses Bild von 1881 hängt im Musée d’Orsay."
        ],
        "fact": "1881. Musée d’Orsay, Paris."
      },
      {
        "pid": "rnfruitsmidi",
        "text": [
          "Paprika, Auberginen, Granatäpfel und Tomaten liegen auf weissem Tuch.",
          "Das Stillleben von 1881 nimmt die Farben des Südens auf.",
          "Es hängt im Art Institute of Chicago."
        ],
        "fact": "1881. Art Institute of Chicago."
      },
      {
        "pid": "rnchildbird",
        "text": [
          "Ein Mädchen in algerischem Kostüm hält einen kleinen Vogel.",
          "Das Bild entsteht 1882, im Jahr der zweiten Reise.",
          "Es gehört dem Clark Art Institute."
        ],
        "fact": "1882. Clark Art Institute, Williamstown."
      }
    ]
  },
  {
    "id": "renoiritaly",
    "place": "Italien und L’Estaque",
    "when": "1881–1882",
    "map": {
      "x": 160,
      "y": 140
    },
    "mapLabel": "Italien",
    "intro": [
      "Im Herbst 1881 reist Renoir nach Italien: Venedig, Florenz, Rom und Neapel. In Rom sieht er die Fresken Raffaels, in Neapel die Wandbilder aus Pompeji.",
      "Im Januar 1882 malt er in Palermo ein Bildnis Richard Wagners. Danach arbeitet er mit Paul Cézanne in L’Estaque bei Marseille."
    ],
    "works": [
      {
        "pid": "rnvenice",
        "text": [
          "In Venedig malt Renoir 1881 den Canal Grande mit Gondeln und Palästen in flirrendem Licht.",
          "Das Bild hängt im Museum of Fine Arts in Boston."
        ],
        "fact": "1881. Museum of Fine Arts, Boston."
      },
      {
        "pid": "rnsanmarco",
        "text": [
          "Die Fassade von San Marco erscheint in raschen, leuchtenden Tupfen, davor kleine Gestalten auf dem Platz.",
          "Das Bild hängt im Minneapolis Institute of Art."
        ],
        "fact": "1881. Minneapolis Institute of Art."
      },
      {
        "pid": "rndoge",
        "text": [
          "Vom Wasser aus blickt Renoir auf den Dogenpalast.",
          "Das Bild von 1881 gehört dem Clark Art Institute in Williamstown."
        ],
        "fact": "1881. Clark Art Institute, Williamstown."
      },
      {
        "pid": "rnnaples",
        "text": [
          "In Neapel malt Renoir die Bucht mit dem Vesuv im Dunst.",
          "Das Bild hängt im Metropolitan Museum of Art."
        ],
        "fact": "1881. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rnnaplesev",
        "text": [
          "Eine zweite Ansicht der Bucht zeigt das Abendlicht über dem Wasser.",
          "Sie gehört dem Clark Art Institute."
        ],
        "fact": "1881. Clark Art Institute, Williamstown."
      },
      {
        "pid": "rnestaque",
        "text": [
          "Anfang 1882 malt Renoir bei Cézanne in L’Estaque die Felsen über dem Meer.",
          "Das Bild hängt im Museum of Fine Arts in Boston."
        ],
        "fact": "1882. Museum of Fine Arts, Boston."
      }
    ]
  },
  {
    "id": "renoirdance",
    "place": "Die Tanzbilder und Durand-Ruel",
    "when": "1881–1883",
    "map": {
      "x": 106,
      "y": 108
    },
    "mapLabel": "Tanz",
    "intro": [
      "Zurück in Paris malt Renoir drei grosse Tanzbilder: den Tanz in Bougival, den Tanz in der Stadt und den Tanz auf dem Land. Für den Tanz auf dem Land sitzt Aline Charigot Modell.",
      "Im April 1883 zeigt der Kunsthändler Paul Durand-Ruel eine Einzelausstellung mit Werken Renoirs."
    ],
    "works": [
      {
        "pid": "rncountry",
        "text": [
          "Ein Paar tanzt unter Bäumen, die Frau lacht über die Schulter.",
          "Für sie sitzt Aline Charigot Modell.",
          "Das Bild hängt im Musée d’Orsay."
        ],
        "fact": "1883. Musée d’Orsay, Paris."
      },
      {
        "pid": "rnbougival",
        "text": [
          "Das grösste der drei Tanzbilder zeigt ein Paar im Freien, die Frau mit rotem Hut.",
          "Es hängt im Museum of Fine Arts in Boston."
        ],
        "fact": "1883. Museum of Fine Arts, Boston."
      },
      {
        "pid": "rnsisters",
        "text": [
          "Eine junge Frau und ein Kind sitzen 1881 auf der Terrasse der Maison Fournaise in Chatou, hinter ihnen der Fluss.",
          "Das Bild hängt im Art Institute of Chicago."
        ],
        "fact": "1881. Art Institute of Chicago."
      },
      {
        "pid": "rnmtdr",
        "text": [
          "Die Tochter des Kunsthändlers Paul Durand-Ruel sitzt 1882 über ihrer Näharbeit.",
          "Durand-Ruel kauft und zeigt in diesen Jahren viele Bilder Renoirs.",
          "Das Bild gehört dem Clark Art Institute."
        ],
        "fact": "1882. Clark Art Institute, Williamstown."
      },
      {
        "pid": "rncahen",
        "text": [
          "Der Komponist Albert Cahen d’Anvers sitzt 1881 vor einem bunten Wandteppich.",
          "Renoir malt in diesen Jahren mehrere Mitglieder der Familie Cahen d’Anvers.",
          "Das Bild hängt im Getty Museum."
        ],
        "fact": "1881. J. Paul Getty Museum, Los Angeles."
      }
    ]
  },
  {
    "id": "renoirguernsey",
    "place": "Guernsey und die Normandie",
    "when": "1883",
    "map": {
      "x": 58,
      "y": 94
    },
    "mapLabel": "Guernsey",
    "intro": [
      "Im September 1883 verbringt Renoir einige Wochen auf der Kanalinsel Guernsey. Er malt Buchten, Felsen und Kinder am Strand.",
      "An der Küste der Normandie entstehen Bilder in Yport, und bei der Familie Bérard in Wargemont malt er weiter Bildnisse der Kinder."
    ],
    "works": [
      {
        "pid": "rnfog",
        "text": [
          "Auf Guernsey liegt Nebel über der Bucht; Renoir malt ihn in hellen, weichen Tönen.",
          "Das Bild hängt im Cincinnati Art Museum."
        ],
        "fact": "1883. Cincinnati Art Museum."
      },
      {
        "pid": "rnguernkids",
        "text": [
          "Kinder in hellen Kleidern stehen am Strand, dahinter Wellen und Felsen.",
          "Das Bild hängt im Museum of Fine Arts in Boston."
        ],
        "fact": "um 1883. Museum of Fine Arts, Boston."
      },
      {
        "pid": "rnguernview",
        "text": [
          "Die steile Küste von Guernsey mit Klippen und Meer.",
          "Das Bild gehört dem Clark Art Institute."
        ],
        "fact": "1883. Clark Art Institute, Williamstown."
      },
      {
        "pid": "rnyport",
        "text": [
          "In Yport an der Küste der Normandie malt Renoir 1883 den Strand bei Ebbe.",
          "Das Bild gehört dem Clark Art Institute."
        ],
        "fact": "1883. Clark Art Institute, Williamstown."
      },
      {
        "pid": "rnseashore",
        "text": [
          "Eine junge Frau sitzt in einem Korbstuhl vor dem Meer, die Häkelarbeit in den Händen.",
          "Das Bild von 1883 hängt im Metropolitan Museum of Art."
        ],
        "fact": "1883. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rnlucie",
        "text": [
          "Lucie Bérard, eine Tochter der Familie in Wargemont, steht 1883 in weissem Kleid.",
          "Das Bild hängt im Art Institute of Chicago."
        ],
        "fact": "1883. Art Institute of Chicago."
      }
    ]
  },
  {
    "id": "renoiraigre",
    "place": "Die strenge Linie",
    "when": "1884–1887",
    "map": {
      "x": 110,
      "y": 116
    },
    "mapLabel": "Linie",
    "intro": [
      "Nach Italien zweifelt Renoir an der rein impressionistischen Malweise. Er zeichnet strenger, mit klaren Umrissen; oft spricht man von seiner «trockenen» oder «Ingres»-Periode.",
      "Am 21. März 1885 kommt sein erster Sohn Pierre zur Welt; die Mutter ist Aline Charigot."
    ],
    "works": [
      {
        "pid": "rnhoop",
        "text": [
          "Ein Mädchen hält einen Reifen, umgeben von Laub.",
          "Gesicht und Kleid sind klar umrissen.",
          "Das Bild hängt in der National Gallery of Art."
        ],
        "fact": "1885. National Gallery of Art, Washington."
      },
      {
        "pid": "rnwargkids",
        "text": [
          "Die drei Töchter Bérard sitzen beim Nähen, Lesen und Spielen.",
          "Die Formen sind fest und hell, typisch für die strenge Linie dieser Jahre.",
          "Das Bild hängt in der Alten Nationalgalerie in Berlin."
        ],
        "fact": "1884. Alte Nationalgalerie, Berlin."
      },
      {
        "pid": "rnseverine",
        "text": [
          "Die Journalistin Caroline Rémy schreibt unter dem Namen Séverine.",
          "Renoir malt sie um 1885. Das Bild hängt in der National Gallery of Art."
        ],
        "fact": "um 1885. National Gallery of Art, Washington."
      },
      {
        "pid": "rnjuliemanet",
        "text": [
          "Julie Manet, die Tochter von Berthe Morisot, hält eine Katze im Arm.",
          "Renoir ist mit der Familie befreundet.",
          "Das Bild hängt im Musée d’Orsay."
        ],
        "fact": "1887. Musée d’Orsay, Paris."
      },
      {
        "pid": "rntamaris",
        "text": [
          "In Tamaris an der Mittelmeerküste malt Renoir 1885 Bäume und Häuser am Wasser.",
          "Das Bild hängt im Minneapolis Institute of Art."
        ],
        "fact": "1885. Minneapolis Institute of Art."
      }
    ]
  },
  {
    "id": "renoiressoyes",
    "place": "Essoyes und die Heirat",
    "when": "1888–1891",
    "map": {
      "x": 130,
      "y": 106
    },
    "mapLabel": "Essoyes",
    "intro": [
      "1888 kommt Renoir zum ersten Mal nach Essoyes in der Champagne, in das Heimatdorf Alines. Seine Farben werden wieder weicher und wärmer.",
      "Am 14. April 1890 heiraten Pierre-Auguste Renoir und Aline Charigot in Paris."
    ],
    "works": [
      {
        "pid": "rnreading88",
        "text": [
          "Ein Mädchen liest, das Gesicht im Licht.",
          "Die Farbe ist wieder weicher als in den Jahren davor.",
          "Das Bild hängt in der National Gallery of Art."
        ],
        "fact": "um 1888. National Gallery of Art, Washington."
      },
      {
        "pid": "rnmendes",
        "text": [
          "Drei Töchter des Schriftstellers Catulle Mendès stehen am Klavier.",
          "Das Bild von 1888 hängt im Metropolitan Museum of Art."
        ],
        "fact": "1888. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rnbluedress",
        "text": [
          "Eine junge Frau sitzt in blauem Kleid und dunklem Hut, leicht und skizzenhaft gemalt.",
          "Das Bild hängt im Metropolitan Museum of Art."
        ],
        "fact": "um 1890. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rnvictoire",
        "text": [
          "Bei einem Besuch bei Cézanne in der Provence malt Renoir den Berg, den der Freund immer wieder malt.",
          "Das Bild hängt in der Yale University Art Gallery."
        ],
        "fact": "um 1888–1889. Yale University Art Gallery, New Haven."
      },
      {
        "pid": "rnappleseller",
        "text": [
          "Eine Frau mit Korb bietet Kindern Äpfel an, unter Bäumen im Grünen.",
          "Das Bild hängt im Cleveland Museum of Art."
        ],
        "fact": "um 1890. Cleveland Museum of Art."
      },
      {
        "pid": "rngrapes",
        "text": [
          "Frauen ernten Trauben im Weinberg.",
          "Das ländliche Motiv gehört in die Zeit, in der Renoir Essoyes kennenlernt.",
          "Das Bild hängt in der Barnes Foundation."
        ],
        "fact": "um 1888. Barnes Foundation, Philadelphia."
      }
    ]
  },
  {
    "id": "renoirpiano",
    "place": "Junge Mädchen am Klavier",
    "when": "1890–1894",
    "map": {
      "x": 110,
      "y": 102
    },
    "mapLabel": "Klavier",
    "intro": [
      "1892 kauft der französische Staat «Junge Mädchen am Klavier» für das Musée du Luxembourg. Es ist Renoirs erstes Werk in einer staatlichen Sammlung.",
      "Im selben Jahr zeigt Durand-Ruel eine grosse Ausstellung seiner Bilder."
    ],
    "works": [
      {
        "pid": "rnpiano92",
        "text": [
          "Zwei Mädchen beugen sich über die Noten am Klavier. 1892 kauft der Staat dieses Bild für das Musée du Luxembourg; heute hängt es im Musée d’Orsay."
        ],
        "fact": "1892. Musée d’Orsay, Paris."
      },
      {
        "pid": "rnpianomet",
        "text": [
          "Renoir malt das Motiv in mehreren Fassungen.",
          "Diese hängt im Metropolitan Museum of Art."
        ],
        "fact": "1892. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rnhat94",
        "text": [
          "Ein Mädchen mit blumengeschmücktem Hut blickt zur Seite.",
          "Das Bild von 1894 hängt im Indianapolis Museum of Art."
        ],
        "fact": "1894. Indianapolis Museum of Art (Newfields)."
      },
      {
        "pid": "rntworead",
        "text": [
          "Zwei Mädchen lesen gemeinsam in einem Buch.",
          "Das Bild hängt im Los Angeles County Museum of Art."
        ],
        "fact": "um 1890–1891. Los Angeles County Museum of Art."
      },
      {
        "pid": "rnroses90",
        "text": [
          "Ein Strauss Rosen in weichen Rot- und Rosatönen.",
          "Das Bild hängt im Cleveland Museum of Art."
        ],
        "fact": "um 1890. Cleveland Museum of Art."
      }
    ]
  },
  {
    "id": "renoirfamily",
    "place": "Jean, Gabrielle und die Krankheit",
    "when": "1894–1902",
    "map": {
      "x": 128,
      "y": 112
    },
    "mapLabel": "Familie",
    "intro": [
      "Am 15. September 1894 wird der Sohn Jean geboren. Gabrielle Renard, eine Verwandte Alines, kommt als Kindermädchen ins Haus und wird ein häufiges Modell.",
      "Ab etwa 1897 leidet Renoir an rheumatoider Arthritis. 1900 wird er Ritter der Ehrenlegion. Am 4. August 1901 kommt der jüngste Sohn Claude zur Welt."
    ],
    "works": [
      {
        "pid": "rngabjean",
        "text": [
          "Gabrielle Renard spielt mit dem kleinen Jean.",
          "Das Bild von 1895–96 hängt im Musée de l’Orangerie."
        ],
        "fact": "1895–1896. Musée de l’Orangerie, Paris."
      },
      {
        "pid": "rntoys",
        "text": [
          "Wieder Gabrielle und Jean, diesmal mit Spielzeugfiguren.",
          "Das Bild hängt in der National Gallery of Art."
        ],
        "fact": "1895–1896. National Gallery of Art, Washington."
      },
      {
        "pid": "rnjean97",
        "text": [
          "Der kleine Jean mit langen Locken.",
          "Renoir malt seine Kinder in diesen Jahren immer wieder.",
          "Das Bild hängt im Museum of Fine Arts in Houston."
        ],
        "fact": "um 1897. Museum of Fine Arts, Houston."
      },
      {
        "pid": "rnjeansew",
        "text": [
          "Jean, noch mit langen Haaren, sitzt über einer Näharbeit.",
          "Das Bild hängt im Art Institute of Chicago."
        ],
        "fact": "1899–1900. Art Institute of Chicago."
      },
      {
        "pid": "rnself99",
        "text": [
          "Mit 58 Jahren malt sich Renoir mit Hut und weissem Bart.",
          "Die Krankheit hat bereits begonnen.",
          "Das Bild gehört dem Clark Art Institute."
        ],
        "fact": "1899. Clark Art Institute, Williamstown."
      },
      {
        "pid": "rnclaude04",
        "text": [
          "Der jüngste Sohn Claude, genannt «Coco», ist ein häufiges Modell der späten Jahre.",
          "Das Bild hängt in der Barnes Foundation."
        ],
        "fact": "um 1904. Barnes Foundation, Philadelphia."
      }
    ]
  },
  {
    "id": "renoircagnes",
    "place": "Cagnes-sur-Mer und Les Collettes",
    "when": "1903–1912",
    "map": {
      "x": 150,
      "y": 158
    },
    "mapLabel": "Cagnes",
    "intro": [
      "Wegen der Krankheit verbringt Renoir die Winter im Süden. In Cagnes-sur-Mer wohnt die Familie zunächst im Haus der Post.",
      "1907 kauft er das Landgut Les Collettes mit seinen alten Olivenbäumen und lässt dort ein Haus bauen. Die Hände werden immer steifer; ab etwa 1910 ist er auf den Rollstuhl angewiesen."
    ],
    "works": [
      {
        "pid": "rnposte",
        "text": [
          "In Cagnes-sur-Mer wohnt die Familie zunächst im Haus der Post.",
          "Renoir malt es zwischen Bäumen.",
          "Das Bild hängt in der National Gallery of Art."
        ],
        "fact": "1906. National Gallery of Art, Washington."
      },
      {
        "pid": "rncollettes",
        "text": [
          "Das alte Bauernhaus von Les Collettes unter Olivenbäumen. 1907 kauft Renoir das Landgut.",
          "Das Bild hängt im Metropolitan Museum of Art."
        ],
        "fact": "1908–1914. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rnclown",
        "text": [
          "Claude steht im roten Clownskostüm.",
          "Das Bild von 1909 hängt im Musée de l’Orangerie."
        ],
        "fact": "1909. Musée de l’Orangerie, Paris."
      },
      {
        "pid": "rnpeaches",
        "text": [
          "Ein paar Pfirsiche auf einem Teller.",
          "Kleine Stillleben bleiben Renoir auch mit kranken Händen möglich.",
          "Das Bild hängt in der National Gallery of Art."
        ],
        "fact": "um 1902–1905. National Gallery of Art, Washington."
      },
      {
        "pid": "rncagnesview",
        "text": [
          "Der Blick vom Garten der Post auf die Häuser von Cagnes.",
          "Das Bild hängt in der Barnes Foundation."
        ],
        "fact": "um 1908. Barnes Foundation, Philadelphia."
      },
      {
        "pid": "rnwomansew",
        "text": [
          "Eine Frau sitzt über ihrer Näharbeit, in warmen Rot- und Goldtönen.",
          "Das Bild hängt in der Barnes Foundation."
        ],
        "fact": "um 1908. Barnes Foundation, Philadelphia."
      }
    ]
  },
  {
    "id": "renoirlate",
    "place": "Späte Blumen und Landschaften",
    "when": "1913–1919",
    "map": {
      "x": 146,
      "y": 166
    },
    "mapLabel": "1919",
    "intro": [
      "Renoir malt weiter, oft mit dem Pinsel zwischen den steifen Fingern: Blumen, Früchte und die Landschaft um Les Collettes. Im Ersten Weltkrieg werden die Söhne Pierre und Jean verwundet; am 27. Juni 1915 stirbt Aline.",
      "Pierre-Auguste Renoir stirbt am 3. Dezember 1919 in Cagnes-sur-Mer. Sein Grab liegt in Essoyes, neben Aline."
    ],
    "works": [
      {
        "pid": "rnandree",
        "text": [
          "Andrée Heuschling, ein Modell der letzten Jahre, liest mit blumengeschmücktem Hut.",
          "Das Bild von 1918 hängt in der Barnes Foundation."
        ],
        "fact": "1918. Barnes Foundation, Philadelphia."
      },
      {
        "pid": "rnflowers15",
        "text": [
          "Ein später Blumenstrauss in kräftigen Farben.",
          "Das Bild hängt im Dallas Museum of Art."
        ],
        "fact": "um 1915. Dallas Museum of Art."
      },
      {
        "pid": "rnanemones",
        "text": [
          "Ein kleines Bild mit Anemonen.",
          "Albert C. Barnes sammelt später viele Werke Renoirs.",
          "Das Bild hängt in der Barnes Foundation."
        ],
        "fact": "um 1912. Barnes Foundation, Philadelphia."
      },
      {
        "pid": "rnroses12",
        "text": [
          "Ein Gegenstück mit Rosen im selben schmalen Format.",
          "Das Bild hängt in der Barnes Foundation."
        ],
        "fact": "um 1912. Barnes Foundation, Philadelphia."
      },
      {
        "pid": "rnland15",
        "text": [
          "Eine späte Landschaft aus der Umgebung von Cagnes, in weichen, warmen Tönen.",
          "Das Bild hängt in der Barnes Foundation."
        ],
        "fact": "um 1915. Barnes Foundation, Philadelphia."
      },
      {
        "pid": "rnfields",
        "text": [
          "Frauen arbeiten auf einem Feld, gemalt in Renoirs letztem Lebensjahr.",
          "Am 3. Dezember 1919 stirbt er in Cagnes-sur-Mer.",
          "Das Bild hängt in der Barnes Foundation."
        ],
        "fact": "um 1919. Barnes Foundation, Philadelphia."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
