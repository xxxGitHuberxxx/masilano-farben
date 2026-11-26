// v9.3 Camille Pissarro life journey, Part 2 (1884–1903), completing the path.
// Appends stations and works; rewrites the last Part-1 station (pxosny) and step (pxeragnyent) so they no longer tease a following part.
// PD/CC0 scans only. Documented facts only; no quotations. No nudes, bathers or near-nudes; no death-bed images.
(function () {
  var works = [
  {
    "id": "pxhouse84",
    "title": "Bauernhaus in Éragny",
    "artist": "Camille Pissarro",
    "year": "1884",
    "museum": "Los Angeles County Museum of Art",
    "source": "Wikimedia Commons: «Pissarro - Peasant House at Éragny (1884).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxgisorsmkt",
    "title": "Geflügelmarkt in Gisors",
    "artist": "Camille Pissarro",
    "year": "1885",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Camille Pissarro - Poultry Market at Gisors - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxwalnut85",
    "title": "Das Feld und der grosse Nussbaum im Winter, Éragny",
    "artist": "Camille Pissarro",
    "year": "1885",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «The Field and the Great Walnut Tree in Winter, Eragny.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpick86",
    "title": "Apfelernte",
    "artist": "Camille Pissarro",
    "year": "1886",
    "museum": "Ohara Museum of Art, Kurashiki",
    "source": "Wikimedia Commons: «Camille Pissarro - Apple Picking - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxmeadow87",
    "title": "Später Nachmittag auf unserer Wiese",
    "artist": "Camille Pissarro",
    "year": "1887",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Camille Pissarro - Late Afternoon in our Meadow (1887).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxappharv",
    "title": "Apfelernte in Éragny",
    "artist": "Camille Pissarro",
    "year": "1888",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Apple Harvest by Camille Pissarro.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxwin88",
    "title": "Blick aus meinem Fenster, Éragny-sur-Epte",
    "artist": "Camille Pissarro",
    "year": "1888",
    "museum": "Ashmolean Museum, Oxford",
    "source": "Wikimedia Commons: «Camille Pissarro - View from my Window, Éragny-sur-Epte (1888).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxlacroix",
    "title": "Die Île Lacroix in Rouen, Nebel",
    "artist": "Camille Pissarro",
    "year": "1888",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Camille Pissarro, French - L'Île Lacroix, Rouen (The Effect of Fog) - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxglean89",
    "title": "Die Ährenleserinnen",
    "artist": "Camille Pissarro",
    "year": "1889",
    "museum": "Kunstmuseum Basel",
    "source": "Wikimedia Commons: «Pissarro - Les glaneuses, 1889.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxfields90",
    "title": "Bauern auf dem Feld, Éragny",
    "artist": "Camille Pissarro",
    "year": "1890",
    "museum": "Buffalo AKG Art Museum",
    "source": "Wikimedia Commons: «Camille Pissarro - Paysans dans les champs, Éragny (Peasants in the Fields, Éragny) - 1940-20 - Albright–Knox Art Gallery.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "pxcharing",
    "title": "Charing Cross Bridge, London",
    "artist": "Camille Pissarro",
    "year": "1890",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Charing Cross Bridge, London (Camille Pissarro).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpeas91",
    "title": "Zwei junge Bäuerinnen",
    "artist": "Camille Pissarro",
    "year": "1891–92",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Camille Pissarro Two Young Peasant Women The Metropolitan Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxkew",
    "title": "Kew Green",
    "artist": "Camille Pissarro",
    "year": "1892",
    "museum": "Musée des Beaux-Arts, Lyon",
    "source": "Wikimedia Commons: «Kew Greens.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxbazsnow",
    "title": "Blick auf Bazincourt, Schnee, Sonnenuntergang",
    "artist": "Camille Pissarro",
    "year": "1892",
    "museum": "Museum Barberini, Potsdam",
    "source": "Wikimedia Commons: «Barberini August 2023-Camille Pissarro - Blick auf Bazincourt, Schnee, Sonnenuntergang, 1892 - Sammlung Hasso Plattner.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxplacedu",
    "title": "Die Place du Havre, Paris",
    "artist": "Camille Pissarro",
    "year": "1893",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «The Place du Havre, Paris.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxwasher",
    "title": "Eine Wäscherin in Éragny",
    "artist": "Camille Pissarro",
    "year": "1893",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «A Washerwoman at Éragny MET DT1867.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxsnow94",
    "title": "Schnee in Éragny",
    "artist": "Camille Pissarro",
    "year": "1894",
    "museum": "Musée des Beaux-Arts, Dijon",
    "source": "Wikimedia Commons: «Effet de neige à Éragny (Pissarro).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpinkknok",
    "title": "Das rosa Haus, Knokke",
    "artist": "Camille Pissarro",
    "year": "1894",
    "museum": "Tel Aviv Museum of Art",
    "source": "Wikimedia Commons: «1894 Pissarro, Camille Pink House Knokke, Tel Aviv Museum of Art anagoria.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxknokke",
    "title": "Das Dorf Knokke",
    "artist": "Camille Pissarro",
    "year": "1894",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Pissarro Camille, Le village de Knocke, 1894, ppp630, Paris Musées.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxsnow95",
    "title": "Morgensonne auf dem Schnee, Éragny-sur-Epte",
    "artist": "Camille Pissarro",
    "year": "1895",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Camille Pissarro - Morning Sunlight on the Snow, Eragny-sur-Epte - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxrouenmorn",
    "title": "Morgen, trüber Tag, Rouen",
    "artist": "Camille Pissarro",
    "year": "1896",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Morning, An Overcast Day, Rouen MET DT1863.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxsteam",
    "title": "Dampfschiffe im Hafen von Rouen",
    "artist": "Camille Pissarro",
    "year": "1896",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Steamboats in the Port of Rouen MET DT1864.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxself96",
    "title": "Selbstbildnis",
    "artist": "Camille Pissarro",
    "year": "1896",
    "museum": "Dallas Museum of Art",
    "source": "Wikimedia Commons: «Camille Pissarro - Self Portrait - 1985.R.44 - Dallas Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxunload",
    "title": "Hafen von Rouen, Holz wird entladen",
    "artist": "Camille Pissarro",
    "year": "1898",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Camille Pissarro - Port of Rouen, Unloading Wood - 1989.3 - Clark Art Institute.tiff», Public domain (gemeinfrei)"
  },
  {
    "id": "pxrousun",
    "title": "Sonnenuntergang, Hafen von Rouen",
    "artist": "Camille Pissarro",
    "year": "1898",
    "museum": "National Museum Cardiff",
    "source": "Wikimedia Commons: «Amgueddfa Cymru - Machlud Haul, Porthladd Rouen (Llongau Ager) - Sunset, the Port of Rouen (Steamboats) - 210730.jpeg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxepicerie",
    "title": "Rue de l’Épicerie in Rouen, Sonne",
    "artist": "Camille Pissarro",
    "year": "1898",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Rue de l'Épicerie, Rouen (Effect of Sunlight).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxwintermorn",
    "title": "Der Boulevard Montmartre an einem Wintermorgen",
    "artist": "Camille Pissarro",
    "year": "1897",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Boulevard Montmartre on a Winter Morning MET DT1906.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxmorncloud",
    "title": "Boulevard Montmartre, Morgen, bewölkt",
    "artist": "Camille Pissarro",
    "year": "1897",
    "museum": "National Gallery of Victoria, Melbourne",
    "source": "Wikimedia Commons: «Camille Pissarro - Boulevard Montmartre, morning, cloudy weather - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxmardi",
    "title": "Boulevard Montmartre, Fastnacht",
    "artist": "Camille Pissarro",
    "year": "1897",
    "museum": "Hammer Museum, Los Angeles",
    "source": "Wikimedia Commons: «Camille Pissarro - Boulevard Montmartre, Mardi Gras (1897).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxtwilight",
    "title": "Boulevard Montmartre, Abenddämmerung",
    "artist": "Camille Pissarro",
    "year": "1897",
    "museum": "Museum Barberini, Potsdam",
    "source": "Wikimedia Commons: «MB-Pis-06 Pissarro Boulevard-Montmartre-Abenddaemmerung 1.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxitaliens",
    "title": "Boulevard des Italiens, Morgen, Sonne",
    "artist": "Camille Pissarro",
    "year": "1897",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Camille Pissarro, Boulevard des Italiens, Morning, Sunlight, 1897, NGA 46673.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxnight",
    "title": "Der Boulevard Montmartre bei Nacht",
    "artist": "Camille Pissarro",
    "year": "1897",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Pissarro - The Boulevard Montmartre at Night (1897).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxsaintpluie",
    "title": "Rue Saint-Honoré am Nachmittag, Regen",
    "artist": "Camille Pissarro",
    "year": "1897",
    "museum": "Museo Nacional Thyssen-Bornemisza, Madrid",
    "source": "Wikimedia Commons: «Camille Pissarro - Rue Saint-Honoré, dans l'après-midi. Effet de pluie.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxsainthon",
    "title": "Rue Saint-Honoré, Sonne, Nachmittag",
    "artist": "Camille Pissarro",
    "year": "1898",
    "museum": "Nelson-Atkins Museum of Art, Kansas City",
    "source": "Wikimedia Commons: «Camille Pissarro - La rue Saint-Honoré (1898).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxoperasnow",
    "title": "Avenue de l’Opéra, Schnee, Morgen",
    "artist": "Camille Pissarro",
    "year": "1898",
    "museum": "Pushkin Museum, Moskau",
    "source": "Wikimedia Commons: «Camille Pissarro - Avenue de l'Opéra, effet de neige, le matin (Pushkin Museum).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxtheatre",
    "title": "Place du Théâtre-Français, Frühling",
    "artist": "Camille Pissarro",
    "year": "1898",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Camille Pissarro - Place du Théâtre Français à Paris, printemps (1898).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxoperasun",
    "title": "Avenue de l’Opéra, Morgensonne",
    "artist": "Camille Pissarro",
    "year": "1898",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Avenue de l'Opéra, Morning Sunshine, by Camille Pissarro.JPG», Public domain (gemeinfrei)"
  },
  {
    "id": "pxgarden98",
    "title": "Der Garten des Künstlers in Éragny",
    "artist": "Camille Pissarro",
    "year": "1898",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Camille Pissarro, The Artist's Garden at Eragny, 1898, NGA 52198.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxtuilwin",
    "title": "Der Tuileriengarten an einem Winternachmittag",
    "artist": "Camille Pissarro",
    "year": "1899",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Garden of the Tuileries on a Winter Afternoon MET DP-14936-037.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxtuilsp",
    "title": "Der Tuileriengarten an einem Frühlingsmorgen",
    "artist": "Camille Pissarro",
    "year": "1899",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Camille Pissarro, The Garden of the Tuileries on a Spring Morning, 1899.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxhay99",
    "title": "Heuhaufen, Morgen, Éragny",
    "artist": "Camille Pissarro",
    "year": "1899",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Haystacks, Morning, Éragny MET DP116768.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxcarrousel",
    "title": "Place du Carrousel, Paris",
    "artist": "Camille Pissarro",
    "year": "1900",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Place du Carrousel, Paris.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxlouvrerain",
    "title": "Der Louvre, Nachmittag, Regenwetter",
    "artist": "Camille Pissarro",
    "year": "1900",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Pissarro - The Louvre, Afternoon, Rainy Weather NGA.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxtuil00",
    "title": "Der Tuileriengarten, hell bewölkt",
    "artist": "Camille Pissarro",
    "year": "1900",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «The Tuileries Gardens 1900 Pissarro Hermitage.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpontfrost",
    "title": "Morgen, Wintersonne, Frost, der Pont-Neuf",
    "artist": "Camille Pissarro",
    "year": "um 1901",
    "museum": "Honolulu Museum of Art",
    "source": "Wikimedia Commons: «Camille Pissarro (1830-1903) - 'Morning, Winter Sunshine, Frost, the Pont-Neuf, the Seine, the Louvre, Soleil D'hiver Gella Blanc', ca. 1901.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpontsun",
    "title": "Nachmittagssonne, Pont-Neuf",
    "artist": "Camille Pissarro",
    "year": "1901",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Camille Pissarro - Afternoon Sunshine, Pont Neuf (1901) - Philadelphia Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpont02",
    "title": "Der Pont-Neuf",
    "artist": "Camille Pissarro",
    "year": "1902",
    "museum": "Szépművészeti Múzeum, Budapest",
    "source": "Wikimedia Commons: «Camille Pissarro - The Pont-Neuf - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpontsnow",
    "title": "Pont-Neuf, Schnee, zweite Serie",
    "artist": "Camille Pissarro",
    "year": "1902",
    "museum": "National Museum Cardiff",
    "source": "Wikimedia Commons: «Amgueddfa Cymru - Pont Neuf, Effaith Eira, ail gyfres - Pont Neuf, Snow Effect, 2nd series - 2690.jpeg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxdieppefair",
    "title": "Der Markt bei der Kirche Saint-Jacques, Dieppe, Morgen, Sonne",
    "artist": "Camille Pissarro",
    "year": "1901",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «'The Fair in Dieppe, Sunny Morning' by Camille Pissarro, 1901, Hermitage.JPG», Public domain (gemeinfrei)"
  },
  {
    "id": "pxdieppeport",
    "title": "Der Vorhafen von Dieppe, Nachmittag, Sonne",
    "artist": "Camille Pissarro",
    "year": "1902",
    "museum": "Château-Musée de Dieppe",
    "source": "Wikimedia Commons: «L’Avant-port de Dieppe, après-midi, soleil.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpontroyal",
    "title": "Der Pont Royal und der Pavillon de Flore",
    "artist": "Camille Pissarro",
    "year": "1903",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Pissarro Camille, Le Pont Royal et le Pavillon de Flore, 1903, ppp134, Petit Palais.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "pxmalaquais",
    "title": "Quai Malaquais, sonniger Nachmittag",
    "artist": "Camille Pissarro",
    "year": "1903",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «'Quai Malaquais, Sunny Afternoon' by Camille Pissarro, 1903, Hermitage.JPG», Public domain (gemeinfrei)"
  },
  {
    "id": "pxhavremorn",
    "title": "Der Vorhafen von Le Havre, Morgen, Sonne, Flut",
    "artist": "Camille Pissarro",
    "year": "1903",
    "museum": "Musée d’art moderne André Malraux, Le Havre",
    "source": "Wikimedia Commons: «MuMA - Pissarro - L'avant-port du Havre. Matin. Soleil. Marée montante.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxpilotes",
    "title": "Die Anse des Pilotes in Le Havre, Flut, Nachmittag, Sonne",
    "artist": "Camille Pissarro",
    "year": "1903",
    "museum": "Musée d’art moderne André Malraux, Le Havre",
    "source": "Wikimedia Commons: «MuMA - Pissaro - L'anse des pilotes au Havre. Haute mer. Après-midi. Soleil.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxapples03",
    "title": "Apfelbäume in Éragny, sonniger Morgen",
    "artist": "Camille Pissarro",
    "year": "1903",
    "museum": "Kunstmuseum Basel",
    "source": "Wikimedia Commons: «Pissarro - Pommiers à Eragny, matinée de soleil, 1903.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "pxself03",
    "title": "Selbstbildnis mit Hut",
    "artist": "Camille Pissarro",
    "year": "1903",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Camille Pissarro - Self-portrait2 - Tate Britain.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'pissarro'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1830–1903";
  path.subtitle = "Von St. Thomas über Pontoise und Éragny zu den Pariser Boulevards";
  path.intro = "Reise mit Camille Pissarro durch sein ganzes Leben: von der Geburt auf St. Thomas 1830 über Venezuela, Paris, Louveciennes, London und Pontoise und die acht Impressionisten-Ausstellungen nach Éragny, zum Neoimpressionismus mit Seurat und Signac und zurück, zu den Stadtbildern aus den Fenstern von Paris, Rouen, Dieppe und Le Havre, bis zu seinem Tod am 13. November 1903.";
  path.ending = [
  "Camille Pissarro stirbt am 13. November 1903 in Paris, dreiundsiebzig Jahre alt. Er ist auf dem Friedhof Père-Lachaise begraben.",
  "Zurück bleiben Felder und Gärten von Pontoise und Éragny, die Boulevards, Brücken und Häfen seiner letzten Jahre, und die Erinnerung an den Einzigen, der an allen acht Impressionisten-Ausstellungen teilnahm."
];
  path.epilogue = "Camille Pissarro stirbt am 13. November 1903 in Paris. Er ist auf dem Friedhof Père-Lachaise begraben.";
  var osny = (path.stations || []).filter(function (s) { return s.id === 'pxosny'; })[0];
  if (osny) {
    osny.intro = [
  "Pissarro bleibt der Gruppe der Impressionisten treu und malt weiter in Pontoise und Umgebung, oft mit Figuren auf dem Feld und im Garten. 1882 verlässt die Familie Pontoise und zieht nach Osny.",
  "Im Herbst 1883 hält er sich in Rouen auf und malt die Quais der Stadt. 1884 siedelt er nach Éragny-sur-Epte über."
];
    (osny.works || []).forEach(function (w) { if (w.pid === 'pxeragnyent') w.text = [
  "1884 zieht Pissarro nach Éragny-sur-Epte.",
  "Dieses Bild zeigt den Ortseingang im selben Jahr: eine Dorfstrasse, der Kirchturm, der gelbe Himmel.",
  "Es hängt im Pola Museum of Art in Hakone. Von hier führt der Weg in die Jahre in Éragny."
]; });
  }
  var stations = [
  {
    "id": "pxeragny",
    "place": "Éragny-sur-Epte",
    "when": "1884–1886",
    "map": {
      "x": 100,
      "y": 88
    },
    "mapLabel": "Éragny",
    "intro": [
      "1884 zieht die Familie nach Éragny-sur-Epte, einem Dorf bei Gisors in der Normandie. Hier wohnt Pissarro bis an sein Lebensende; das Atelier steht im Garten.",
      "Im selben Jahr kommt der jüngste Sohn Paul-Émile zur Welt. Wiesen, Obstgärten, Bauernhäuser und der Markt von Gisors werden zu neuen Motiven."
    ],
    "works": [
      {
        "pid": "pxhouse84",
        "text": [
          "Im ersten Jahr in Éragny malt Pissarro ein Bauernhaus hinter einem Baum, mit roten Kaminen und Gärten.",
          "Das Bild gehört zum Los Angeles County Museum of Art."
        ],
        "fact": "1884. Los Angeles County Museum of Art."
      },
      {
        "pid": "pxgisorsmkt",
        "text": [
          "Gisors ist die kleine Stadt bei Éragny.",
          "Pissarro zeigt Bäuerinnen und Käufer dicht gedrängt auf dem Markt, in Gouache und Kreide.",
          "Das Blatt ist im Museum of Fine Arts in Boston."
        ],
        "fact": "1885. Museum of Fine Arts, Boston."
      },
      {
        "pid": "pxwalnut85",
        "text": [
          "Ein kahler Nussbaum steht im Winterfeld vor Éragny.",
          "Den Baum malt Pissarro in diesen Jahren mehrmals.",
          "Das Bild ist im Philadelphia Museum of Art."
        ],
        "fact": "1885. Philadelphia Museum of Art."
      }
    ]
  },
  {
    "id": "pxneo",
    "place": "Mit Seurat und Signac",
    "when": "1885–1888",
    "map": {
      "x": 108,
      "y": 96
    },
    "mapLabel": "Punkte",
    "intro": [
      "1885 lernt Pissarro Paul Signac und Georges Seurat kennen. Er übernimmt ihre neue Malweise mit kleinen, reinen Farbpunkten, den Neoimpressionismus.",
      "An der achten und letzten Impressionisten-Ausstellung 1886 hängen seine Bilder mit jenen von Seurat und Signac in einem eigenen Raum. 1888 erkrankt er an einer chronischen Augenentzündung."
    ],
    "works": [
      {
        "pid": "pxpick86",
        "text": [
          "Frauen sammeln Äpfel unter den Bäumen.",
          "Das grosse Bild entsteht 1886, im Jahr, in dem Pissarro die neue Punktmalerei aufnimmt.",
          "Es ist im Ohara Museum of Art in Kurashiki, Japan."
        ],
        "fact": "1886. Ohara Museum of Art, Kurashiki."
      },
      {
        "pid": "pxmeadow87",
        "text": [
          "Die Wiese hinter dem Haus in Éragny, mit langen Schatten am Nachmittag.",
          "Die Farbe ist in kleine Tupfen zerlegt.",
          "Das Bild hängt in der National Gallery in London."
        ],
        "fact": "1887. National Gallery, London."
      },
      {
        "pid": "pxappharv",
        "text": [
          "Ein Mann schüttelt Äpfel vom Baum, Frauen sammeln sie auf.",
          "Das ganze Bild ist aus feinen Farbpunkten gebaut.",
          "Es ist im Dallas Museum of Art."
        ],
        "fact": "1888. Dallas Museum of Art."
      },
      {
        "pid": "pxwin88",
        "text": [
          "Pissarro blickt aus dem Fenster auf Nachbarhäuser, Gärten und Felder.",
          "Das Bild ist im Ashmolean Museum in Oxford."
        ],
        "fact": "1888. Ashmolean Museum, Oxford."
      },
      {
        "pid": "pxlacroix",
        "text": [
          "Nebel liegt über der Seine bei Rouen.",
          "Schiffe, Rauch und Ufer lösen sich in hellen Punkten auf.",
          "Das Bild ist im Philadelphia Museum of Art."
        ],
        "fact": "1888. Philadelphia Museum of Art."
      }
    ]
  },
  {
    "id": "pxreturn",
    "place": "Abschied vom Punkt",
    "when": "1889–1892",
    "map": {
      "x": 102,
      "y": 74
    },
    "mapLabel": "London",
    "intro": [
      "Die Punktmalerei ist langsam. Um 1890 kehrt Pissarro zu einer freieren, impressionistischen Malweise zurück.",
      "1890 und 1892 reist er nach London zu seinem Sohn Lucien. 1892 hat er bei Durand-Ruel grossen Erfolg, und die Familie kann das Haus in Éragny kaufen."
    ],
    "works": [
      {
        "pid": "pxglean89",
        "text": [
          "Frauen sammeln nach der Ernte die liegen gebliebenen Ähren.",
          "Feldarbeit bleibt ein wichtiges Thema in Éragny.",
          "Das Bild ist im Kunstmuseum Basel."
        ],
        "fact": "1889. Kunstmuseum Basel."
      },
      {
        "pid": "pxfields90",
        "text": [
          "Ein Bauer und eine Bäuerin arbeiten auf dem Acker.",
          "Die Pinselschrift ist wieder freier.",
          "Das Bild ist im Buffalo AKG Art Museum."
        ],
        "fact": "1890. Buffalo AKG Art Museum."
      },
      {
        "pid": "pxcharing",
        "text": [
          "Auf der Reise zu Lucien malt Pissarro 1890 die Themse mit der Charing Cross Bridge und den Türmen von Westminster.",
          "Das Bild ist in der National Gallery of Art in Washington."
        ],
        "fact": "1890. National Gallery of Art, Washington."
      },
      {
        "pid": "pxpeas91",
        "text": [
          "Zwei junge Frauen ruhen am Feldrand.",
          "Pissarro malt sie gross und nahe.",
          "Das Bild ist im Metropolitan Museum of Art."
        ],
        "fact": "1891–92. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "pxkew",
        "text": [
          "Bei der Reise zur Hochzeit Luciens 1892 malt Pissarro die Wiesen von Kew im Westen Londons.",
          "Das Bild ist im Musée des Beaux-Arts in Lyon."
        ],
        "fact": "1892. Musée des Beaux-Arts, Lyon."
      },
      {
        "pid": "pxbazsnow",
        "text": [
          "Bazincourt ist das Nachbardorf von Éragny.",
          "Die Sonne geht über dem verschneiten Tal unter.",
          "Das Bild gehört zum Museum Barberini in Potsdam."
        ],
        "fact": "1892. Museum Barberini, Potsdam."
      }
    ]
  },
  {
    "id": "pxwindow",
    "place": "Malen vom Fenster aus",
    "when": "1893–1895",
    "map": {
      "x": 118,
      "y": 102
    },
    "mapLabel": "Fenster",
    "intro": [
      "Wegen des Augenleidens kann Pissarro kaum noch im Freien arbeiten. 1893 wohnt er in Paris im Hôtel Garnier an der Rue Saint-Lazare und malt die Strassen aus seinem Fenster.",
      "Daheim in Éragny richtet er sich ein Atelier ein. Den Sommer 1894 verbringt die Familie im belgischen Badeort Knokke."
    ],
    "works": [
      {
        "pid": "pxplacedu",
        "text": [
          "Vom Hotelfenster sieht Pissarro auf den Platz vor dem Bahnhof Saint-Lazare, mit Kutschen und Passanten.",
          "Es ist eines seiner ersten Bilder von oben auf eine Pariser Strasse.",
          "Es ist im Art Institute of Chicago."
        ],
        "fact": "1893. Art Institute of Chicago."
      },
      {
        "pid": "pxwasher",
        "text": [
          "Eine Frau beugt sich im Garten über einen Waschzuber.",
          "Das Bild ist im Metropolitan Museum of Art."
        ],
        "fact": "1893. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "pxsnow94",
        "text": [
          "Schnee liegt auf den Wiesen und Bäumen bei Éragny.",
          "Das Bild ist im Musée des Beaux-Arts in Dijon."
        ],
        "fact": "1894. Musée des Beaux-Arts, Dijon."
      },
      {
        "pid": "pxpinkknok",
        "text": [
          "Im Sommer 1894 in Knokke malt Pissarro ein rosa Haus mit rotem Dach an einer Dorfstrasse.",
          "Das Bild ist im Tel Aviv Museum of Art."
        ],
        "fact": "1894. Tel Aviv Museum of Art."
      },
      {
        "pid": "pxknokke",
        "text": [
          "Die Dächer und der Kirchturm von Knokke über grünen Gärten.",
          "Das Bild ist im Petit Palais in Paris."
        ],
        "fact": "1894. Petit Palais, Paris."
      },
      {
        "pid": "pxsnow95",
        "text": [
          "Morgenlicht fällt durch eine Reihe kahler Pappeln auf den Schnee.",
          "Ein Bauer geht unter den Bäumen.",
          "Das Bild ist im Museum of Fine Arts in Boston."
        ],
        "fact": "1895. Museum of Fine Arts, Boston."
      }
    ]
  },
  {
    "id": "pxrouen2",
    "place": "Der Hafen von Rouen",
    "when": "1896–1898",
    "map": {
      "x": 92,
      "y": 82
    },
    "mapLabel": "Rouen",
    "intro": [
      "1896 malt Pissarro in Rouen eine Reihe von Hafenbildern bei wechselndem Licht und Wetter, aus einem Hotelzimmer hoch über den Quais.",
      "Noch im selben Jahr kehrt er zurück, nun in ein anderes Hotel mit anderem Blick. 1898 ist er ein letztes Mal dort und malt Hafen und Brücken."
    ],
    "works": [
      {
        "pid": "pxrouenmorn",
        "text": [
          "Die grosse Brücke, Schiffe und ein rauchender Schornstein an einem grauen Morgen in Rouen.",
          "Das Bild ist im Metropolitan Museum of Art."
        ],
        "fact": "1896. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "pxsteam",
        "text": [
          "Dampfschiffe liegen am Quai, Rauch und Dampf mischen sich mit dem Himmel.",
          "Auch dieses Bild ist im Metropolitan Museum of Art."
        ],
        "fact": "1896. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "pxself96",
        "text": [
          "Pissarro malt sich mit weissem Bart, schwarzem Hut und Palette vor einer hellen Wand.",
          "Das Bild ist im Dallas Museum of Art."
        ],
        "fact": "1896. Dallas Museum of Art."
      },
      {
        "pid": "pxunload",
        "text": [
          "Am Quai von Rouen wird Holz von einem Dampfer geladen, im Hintergrund rauchen Fabriken.",
          "Das Bild gehört zum Clark Art Institute."
        ],
        "fact": "1898. Clark Art Institute, Williamstown."
      },
      {
        "pid": "pxrousun",
        "text": [
          "Die Abendsonne färbt Himmel und Wasser hinter den Dampfschiffen.",
          "Das Bild ist im National Museum Cardiff."
        ],
        "fact": "1898. National Museum Cardiff."
      },
      {
        "pid": "pxepicerie",
        "text": [
          "Eine schmale Strasse mit Marktständen führt auf die Türme der Kathedrale zu.",
          "Das Bild ist im Metropolitan Museum of Art."
        ],
        "fact": "1898. Metropolitan Museum of Art, New York."
      }
    ]
  },
  {
    "id": "pxmontmartre",
    "place": "Boulevard Montmartre",
    "when": "1897",
    "map": {
      "x": 124,
      "y": 98
    },
    "mapLabel": "Montmartre",
    "intro": [
      "Anfang 1897 mietet Pissarro ein Zimmer im Grand Hôtel de Russie. Aus dem Fenster blickt er auf den Boulevard Montmartre und den Boulevard des Italiens.",
      "Er malt dieselbe Strasse am Morgen und am Abend, bei Sonne, Regen und Winterwetter, am Fastnachtstag und einmal in der Nacht."
    ],
    "works": [
      {
        "pid": "pxwintermorn",
        "text": [
          "Der Boulevard zieht sich in die Tiefe, voller Kutschen und Menschen, kahle Bäume säumen ihn.",
          "Das Bild ist im Metropolitan Museum of Art."
        ],
        "fact": "1897. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "pxmorncloud",
        "text": [
          "Derselbe Blick an einem bewölkten Morgen, in grauen und hellen Tönen.",
          "Das Bild ist in der National Gallery of Victoria in Melbourne."
        ],
        "fact": "1897. National Gallery of Victoria, Melbourne."
      },
      {
        "pid": "pxmardi",
        "text": [
          "Am Fastnachtsdienstag drängt sich eine bunte Menge auf dem Boulevard.",
          "Das Bild ist im Hammer Museum in Los Angeles."
        ],
        "fact": "1897. Hammer Museum, Los Angeles."
      },
      {
        "pid": "pxtwilight",
        "text": [
          "In der Dämmerung gehen die ersten Lichter an, der Himmel ist blassgelb.",
          "Das Bild gehört zum Museum Barberini in Potsdam."
        ],
        "fact": "1897. Museum Barberini, Potsdam."
      },
      {
        "pid": "pxitaliens",
        "text": [
          "Aus demselben Hotel blickt Pissarro auch nach der anderen Seite, auf den Boulevard des Italiens im Morgenlicht.",
          "Das Bild ist in der National Gallery of Art in Washington."
        ],
        "fact": "1897. National Gallery of Art, Washington."
      },
      {
        "pid": "pxnight",
        "text": [
          "Das einzige Nachtbild der Serie: Strassenlaternen und Schaufenster spiegeln sich auf dem nassen Boulevard.",
          "Das Bild hängt in der National Gallery in London."
        ],
        "fact": "1897. National Gallery, London."
      }
    ]
  },
  {
    "id": "pxopera",
    "place": "Avenue de l’Opéra",
    "when": "1897–1898",
    "map": {
      "x": 120,
      "y": 106
    },
    "mapLabel": "Opéra",
    "intro": [
      "Im Winter 1897–98 wohnt Pissarro im Hôtel du Louvre. Von dort sieht er die Avenue de l’Opéra, die Rue Saint-Honoré und die Place du Théâtre-Français.",
      "Die Sommermonate verbringt er weiterhin in Éragny, wo der Garten zu einem Hauptmotiv wird."
    ],
    "works": [
      {
        "pid": "pxsaintpluie",
        "text": [
          "Regen glänzt auf Strasse und Platz, Schirme und Kutschen ziehen vorbei.",
          "Das Bild ist im Museo Nacional Thyssen-Bornemisza in Madrid."
        ],
        "fact": "1897. Museo Nacional Thyssen-Bornemisza, Madrid."
      },
      {
        "pid": "pxsainthon",
        "text": [
          "Dieselbe Strassenecke im Nachmittagslicht, mit Brunnen und Laterne auf dem Platz.",
          "Das Bild ist im Nelson-Atkins Museum of Art in Kansas City."
        ],
        "fact": "1898. Nelson-Atkins Museum of Art, Kansas City."
      },
      {
        "pid": "pxoperasnow",
        "text": [
          "Schnee bedeckt die Avenue de l’Opéra an einem Wintermorgen.",
          "Das Bild ist im Puschkin-Museum in Moskau."
        ],
        "fact": "1898. Pushkin Museum, Moskau."
      },
      {
        "pid": "pxtheatre",
        "text": [
          "Grüne Bäume, Kutschen und Omnibusse auf dem Platz vor dem Theater im Frühling.",
          "Das Bild ist in der Eremitage in Sankt Petersburg."
        ],
        "fact": "1898. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "pxoperasun",
        "text": [
          "Die Avenue führt zum Opernhaus in der Ferne, die Morgensonne liegt auf dem Platz.",
          "Das Bild ist im Philadelphia Museum of Art."
        ],
        "fact": "1898. Philadelphia Museum of Art."
      },
      {
        "pid": "pxgarden98",
        "text": [
          "Blumenbeete, Bäume und das Haus in Éragny.",
          "Im Sommer malt Pissarro seinen eigenen Garten.",
          "Das Bild ist in der National Gallery of Art."
        ],
        "fact": "1898. National Gallery of Art, Washington."
      }
    ]
  },
  {
    "id": "pxtuileries",
    "place": "Tuileries und Louvre",
    "when": "1899–1900",
    "map": {
      "x": 114,
      "y": 110
    },
    "mapLabel": "Tuileries",
    "intro": [
      "1899 nimmt Pissarro eine Wohnung an der Rue de Rivoli 204. Aus den Fenstern malt er den Garten der Tuilerien und den Louvre.",
      "An der Weltausstellung 1900 sind sieben seiner Gemälde zu sehen. Nach einer zweiten Serie von Louvre und Tuilerien zieht er an die Place Dauphine."
    ],
    "works": [
      {
        "pid": "pxtuilwin",
        "text": [
          "Aus der Wohnung an der Rue de Rivoli sieht Pissarro über den winterlichen Garten bis zu den Kuppeln in der Ferne.",
          "Das Bild ist im Metropolitan Museum of Art."
        ],
        "fact": "1899. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "pxtuilsp",
        "text": [
          "Derselbe Garten im Frühling, mit grünen Rasenflächen und hellen Wegen.",
          "Auch dieses Bild ist im Metropolitan Museum of Art."
        ],
        "fact": "1899. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "pxhay99",
        "text": [
          "Zurück in Éragny: ein Heuhaufen im Morgenlicht unter hohen Bäumen.",
          "Das Bild ist im Metropolitan Museum of Art."
        ],
        "fact": "1899. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "pxcarrousel",
        "text": [
          "Der Blick geht über den Carrousel-Platz auf den Louvre und den Pavillon de Flore.",
          "Das Bild ist in der National Gallery of Art."
        ],
        "fact": "1900. National Gallery of Art, Washington."
      },
      {
        "pid": "pxlouvrerain",
        "text": [
          "Regen über der Seine, ein Schlepper fährt unter der Brücke hindurch, dahinter der Louvre.",
          "Auch dieses Bild ist in der National Gallery of Art."
        ],
        "fact": "1900. National Gallery of Art, Washington."
      },
      {
        "pid": "pxtuil00",
        "text": [
          "Der Tuileriengarten unter einem hellen, bewölkten Himmel, aus der zweiten Serie.",
          "Das Bild ist in der Eremitage."
        ],
        "fact": "1900. Eremitage, Sankt Petersburg."
      }
    ]
  },
  {
    "id": "pxpontneuf",
    "place": "Pont-Neuf und Dieppe",
    "when": "1900–1902",
    "map": {
      "x": 110,
      "y": 104
    },
    "mapLabel": "Pont-Neuf",
    "intro": [
      "Von der Wohnung an der Place Dauphine auf der Île de la Cité malt Pissarro immer wieder den Pont-Neuf, bei Sonne, Schnee und Frost.",
      "In den Sommern 1901 und 1902 arbeitet er in Dieppe: zuerst rund um die Kirche Saint-Jacques, dann am Hafen. Dem Museum von Dieppe schenkt er 1902 eines seiner Hafenbilder."
    ],
    "works": [
      {
        "pid": "pxpontfrost",
        "text": [
          "Frost liegt auf dem Quai, Wintersonne auf der Seine, in der Ferne der Louvre.",
          "Das Bild ist im Honolulu Museum of Art."
        ],
        "fact": "um 1901. Honolulu Museum of Art."
      },
      {
        "pid": "pxpontsun",
        "text": [
          "Der Pont-Neuf von oben, voller Menschen und Wagen, in der Sonne des Nachmittags.",
          "Das Bild ist im Philadelphia Museum of Art."
        ],
        "fact": "1901. Philadelphia Museum of Art."
      },
      {
        "pid": "pxpont02",
        "text": [
          "Die Brücke als starke Diagonale, darauf Fussgänger und Wagen.",
          "Pissarro malt sie immer vom selben Fenster aus.",
          "Das Bild ist im Museum der Schönen Künste in Budapest."
        ],
        "fact": "1902. Szépművészeti Múzeum, Budapest."
      },
      {
        "pid": "pxpontsnow",
        "text": [
          "Schnee liegt auf Brücke und Quais.",
          "Das Bild gehört zur zweiten Serie und ist im National Museum Cardiff."
        ],
        "fact": "1902. National Museum Cardiff."
      },
      {
        "pid": "pxdieppefair",
        "text": [
          "Marktzelte und Menschen vor der Kirche Saint-Jacques in Dieppe, 1901.",
          "Das Bild ist in der Eremitage."
        ],
        "fact": "1901. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "pxdieppeport",
        "text": [
          "Der Vorhafen von Dieppe mit Booten und Quais in der Nachmittagssonne.",
          "Dieses Bild schenkt Pissarro 1902 dem Museum der Stadt; es ist bis heute im Château-Musée de Dieppe."
        ],
        "fact": "1902. Château-Musée de Dieppe."
      }
    ]
  },
  {
    "id": "pxhavre",
    "place": "Le Havre und das letzte Jahr",
    "when": "1903",
    "map": {
      "x": 86,
      "y": 86
    },
    "mapLabel": "1903",
    "intro": [
      "1903 malt Pissarro am Quai Voltaire die Seine, den Pont Royal und das linke Ufer. Den Sommer verbringt er in Le Havre und malt den Vorhafen; das Museum der Stadt erwirbt zwei seiner Bilder.",
      "Camille Pissarro stirbt am 13. November 1903 in Paris, dreiundsiebzig Jahre alt. Er ist auf dem Friedhof Père-Lachaise begraben."
    ],
    "works": [
      {
        "pid": "pxpontroyal",
        "text": [
          "Vom Quai Voltaire blickt Pissarro 1903 auf den Pont Royal und den Pavillon de Flore.",
          "Das Bild ist im Petit Palais in Paris."
        ],
        "fact": "1903. Petit Palais, Paris."
      },
      {
        "pid": "pxmalaquais",
        "text": [
          "Bäume, Passanten und Kutschen am Quai Malaquais auf dem linken Seine-Ufer.",
          "Das Bild ist in der Eremitage."
        ],
        "fact": "1903. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "pxhavremorn",
        "text": [
          "Im Sommer 1903 malt Pissarro aus dem Hotelfenster den Vorhafen von Le Havre mit Kränen und Segelschiffen.",
          "Das Bild ist im MuMa in Le Havre."
        ],
        "fact": "1903. Musée d’art moderne André Malraux, Le Havre."
      },
      {
        "pid": "pxpilotes",
        "text": [
          "Die Bucht der Lotsen mit Segelbooten, einem Mast und vielen Menschen auf dem Quai.",
          "Auch dieses Bild ist im MuMa in Le Havre."
        ],
        "fact": "1903. Musée d’art moderne André Malraux, Le Havre."
      },
      {
        "pid": "pxapples03",
        "text": [
          "Apfelbäume und ein Heuhaufen in der Morgensonne: eines der letzten Bilder aus Éragny.",
          "Es ist im Kunstmuseum Basel."
        ],
        "fact": "1903. Kunstmuseum Basel."
      },
      {
        "pid": "pxself03",
        "text": [
          "Im letzten Lebensjahr malt sich Pissarro mit Hut und weissem Bart vor einem Fenster.",
          "Er stirbt am 13.",
          "November 1903 in Paris.",
          "Das Bild ist in der Tate in London."
        ],
        "fact": "1903. Tate, London."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
