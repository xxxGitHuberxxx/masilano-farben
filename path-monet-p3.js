// v6.9 Monet life journey, Part 3 (1890–1926).
// Appends stations and works to the existing Monet path; does not rewrite Parts 1–2.
// Letter quotes: self-translated from Monet’s French (Wildenstein, recipient and date).
(function () {
  var works = [
  {
    "id": "rouensun",
    "title": "Die Kathedrale von Rouen, Westfassade, Sonnenlicht",
    "artist": "Claude Monet",
    "year": "1894",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet - Rouen Cathedral, West Façade, Sunlight - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rouenwest",
    "title": "Die Kathedrale von Rouen, Westfassade",
    "artist": "Claude Monet",
    "year": "1894",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet - Rouen Cathedral, West Façade - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rouengrey",
    "title": "Die Kathedrale von Rouen, das Portal, graues Wetter",
    "artist": "Claude Monet",
    "year": "1892",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - The Cathedral in Rouen. The portal, Grey Weather - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rouenportal",
    "title": "Die Kathedrale von Rouen, das Portal (Sonnenlicht)",
    "artist": "Claude Monet",
    "year": "1894",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Rouen Cathedral- The Portal (Sunlight) MET DT2185.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "rouenmorn",
    "title": "Die Kathedrale von Rouen, Fassade und Tour d’Albane, Morgen",
    "artist": "Claude Monet",
    "year": "1894",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Claude Monet - Rouen Cathedral Façade and Tour d'Albane (Morning Effect) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rouengetty",
    "title": "Die Kathedrale von Rouen, das Portal im Morgenlicht",
    "artist": "Claude Monet",
    "year": "1894",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Claude Monet (French - The Portal of Rouen Cathedral in Morning Light - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rouenharmonia",
    "title": "Die Kathedrale von Rouen, Harmonie in Blau und Gold",
    "artist": "Claude Monet",
    "year": "1893",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet 033.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sandvsnow",
    "title": "Sandvika im Schnee",
    "artist": "Claude Monet",
    "year": "1895",
    "museum": "Lettisches Nationales Kunstmuseum, Riga",
    "source": "Wikimedia Commons: «Claude Monet - Sandvika Village in the Snow (1895).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kolsaas",
    "title": "Der Mont Kolsaas",
    "artist": "Claude Monet",
    "year": "1895",
    "museum": "Musée Marmottan Monet, Paris",
    "source": "Wikimedia Commons: «Monet-Mont-Kolsaas-Marmottan-.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kolsaas2",
    "title": "Der Mont Kolsaas am Abend",
    "artist": "Claude Monet",
    "year": "1895",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Mont Kolsaas, au déclin du jour (1895) Claude Monet (W1414).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "fjordoslo",
    "title": "Der Fjord bei Christiania",
    "artist": "Claude Monet",
    "year": "1895",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Le Fjord de Christiania (Oslo).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "fjordbank",
    "title": "Am Ufer des Fjords bei Christiania",
    "artist": "Claude Monet",
    "year": "1895",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Au bord du fjord, près Christiania (1895) Claude Monet (W 1403).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mornseine",
    "title": "Morgen an der Seine",
    "artist": "Claude Monet",
    "year": "1898",
    "museum": "Nationalmuseum für westliche Kunst, Tokio",
    "source": "Wikimedia Commons: «Claude Monet - Morning on the Seine - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mornmet",
    "title": "Morgen an der Seine bei Giverny",
    "artist": "Claude Monet",
    "year": "1897",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Morning on the Seine near Giverny MET DT1903.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "mornbeau",
    "title": "Morgen an der Seine, schönes Wetter",
    "artist": "Claude Monet",
    "year": "1897",
    "museum": "White House, Washington",
    "source": "Wikimedia Commons: «Claude Monet - Matin sur la Seine, le beau temps (1897).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mornw1436",
    "title": "Morgen an der Seine, 1896",
    "artist": "Claude Monet",
    "year": "1896",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Matinée sur la Seine (1896) Claude Monet (W1436).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mornw1484",
    "title": "Morgen an der Seine, 1897",
    "artist": "Claude Monet",
    "year": "1897",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Matinée sur la Seine (1897) Claude Monet (W1484).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "japabridge",
    "title": "Die japanische Fussgängerbrücke",
    "artist": "Claude Monet",
    "year": "1899",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet, The Japanese Footbridge, 1899, NGA 74796.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "lilybridge",
    "title": "Seerosen und japanische Brücke",
    "artist": "Claude Monet",
    "year": "1899",
    "museum": "Princeton University Art Museum",
    "source": "Wikimedia Commons: «Claude Monet - Water Lilies and Japanese Bridge - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilypondnl",
    "title": "Der Seerosenteich",
    "artist": "Claude Monet",
    "year": "1899",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «The Water-Lily Pond - Google Arts & Culture.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilypondga",
    "title": "Das Seerosenbecken",
    "artist": "Claude Monet",
    "year": "1904",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Le Bassin des Nympheas - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilyaic",
    "title": "Der Seerosenteich, 1900",
    "artist": "Claude Monet",
    "year": "1900",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Claude Monet - Water Lily Pond - 1933.441 - Art Institute of Chicago.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "irisyale",
    "title": "Der Garten des Künstlers in Giverny",
    "artist": "Claude Monet",
    "year": "1900",
    "museum": "Yale University Art Gallery, New Haven",
    "source": "Wikimedia Commons: «Claude Monet - The Artist’s Garden in Giverny - 1983.7.12 - Yale University Art Gallery.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilywl",
    "title": "Die Seerosen, 1904",
    "artist": "Claude Monet",
    "year": "1904",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Waterlilies - Google Art Project (vAGI5qXsGEMS2A).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "parlsun",
    "title": "Das Parlament, Sonneneffekt",
    "artist": "Claude Monet",
    "year": "1903",
    "museum": "Brooklyn Museum, New York",
    "source": "Wikimedia Commons: «Claude Monet - Houses of Parliament, Sunlight Effect (Le Parlement, effet de soleil) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "parlfog",
    "title": "Das Parlament, Nebeleffekt",
    "artist": "Claude Monet",
    "year": "1903–1904",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Houses of Parliament (Effect of Fog) MET DT1893.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "parlset",
    "title": "Das Parlament, Sonnenuntergang",
    "artist": "Claude Monet",
    "year": "1904",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - The Houses of Parliament, Sunset.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "waterloosun",
    "title": "Die Waterloo-Brücke bei Sonnenuntergang",
    "artist": "Claude Monet",
    "year": "1904",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet, Waterloo Bridge, London, at Sunset, 1904, NGA 61378.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "waterloodusk",
    "title": "Die Waterloo-Brücke in der Dämmerung",
    "artist": "Claude Monet",
    "year": "1904",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet, Waterloo Bridge, London, at Dusk, 1904, NGA 61377.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "waterlogrey",
    "title": "Die Waterloo-Brücke, grauer Tag",
    "artist": "Claude Monet",
    "year": "1903",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet, Waterloo Bridge, Gray Day, 1903, NGA 46658.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "charingga",
    "title": "Die Charing-Cross-Brücke",
    "artist": "Claude Monet",
    "year": "um 1902",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Charing-Cross Bridge in London - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "charing2",
    "title": "Die Charing-Cross-Brücke, um 1900",
    "artist": "Claude Monet",
    "year": "um 1900",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Monet, Claude - Charing Cross Bridge - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sangiorgio",
    "title": "San Giorgio Maggiore",
    "artist": "Claude Monet",
    "year": "1908",
    "museum": "Indianapolis Museum of Art",
    "source": "Wikimedia Commons: «Monet, Claude - The Church of San Giorgio Maggiore, Venice - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sangiodusk",
    "title": "San Giorgio Maggiore in der Dämmerung",
    "artist": "Claude Monet",
    "year": "1908",
    "museum": "National Museum Cardiff",
    "source": "Wikimedia Commons: «Claude Monet, Saint-Georges majeur au crépuscule.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dogepalace",
    "title": "Der Dogenpalast",
    "artist": "Claude Monet",
    "year": "1908",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - The Doges Palace (Le Palais ducal) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dogemet",
    "title": "Der Dogenpalast, von San Giorgio Maggiore aus",
    "artist": "Claude Monet",
    "year": "1908",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Doge's Palace Seen from San Giorgio Maggiore MET DT1904.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "palazzomula",
    "title": "Palazzo da Mula",
    "artist": "Claude Monet",
    "year": "1908",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Claude Monet, Palazzo da Mula, Venice, 1908, NGA 46657.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "palazzodario",
    "title": "Palazzo Dario",
    "artist": "Claude Monet",
    "year": "1908",
    "museum": "National Museum Cardiff",
    "source": "Wikimedia Commons: «Monet - The Palazzo Dario, NMW A 2481.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "grandcanal2",
    "title": "Der Canal Grande",
    "artist": "Claude Monet",
    "year": "1908",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Claude Monet, Le Grand Canal.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pathiris",
    "title": "Der Weg durch die Iris",
    "artist": "Claude Monet",
    "year": "1914–1917",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Path through the Irises, 1917 - Claude Monet, MET DT1890.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "willowk",
    "title": "Trauerweide",
    "artist": "Claude Monet",
    "year": "1918",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Weeping Willow (1918).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "willow2",
    "title": "Trauerweide, 1918",
    "artist": "Claude Monet",
    "year": "1918–1919",
    "museum": "Kimbell Art Museum, Fort Worth",
    "source": "Wikimedia Commons: «Claude Monet Weeping Willow.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "willow3",
    "title": "Trauerweide, eine weitere Fassung",
    "artist": "Claude Monet",
    "year": "1918–1919",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet Saule pleureur.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "irislate",
    "title": "Iris",
    "artist": "Claude Monet",
    "year": "1914–1917",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Iris (c. 1914-1917) Claude Monet (W1825).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rosegarden",
    "title": "Das Haus des Künstlers vom Rosengarten aus",
    "artist": "Claude Monet",
    "year": "1922–1924",
    "museum": "Musée Marmottan Monet, Paris",
    "source": "Wikimedia Commons: «The Artist's House Seen from the Rose Garden by Claude Monet 5086.JPG», gemeinfrei (Public Domain)"
  },
  {
    "id": "latebridge2",
    "title": "Die japanische Brücke, späte Fassung",
    "artist": "Claude Monet",
    "year": "1918–1924",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - The Japanese bridge - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilyset",
    "title": "Die Seerosen, untergehende Sonne",
    "artist": "Claude Monet",
    "year": "1914–1926",
    "museum": "Musée de l’Orangerie, Paris",
    "source": "Wikimedia Commons: «Claude Monet - The Water Lilies - Setting Sun - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilyblue",
    "title": "Blaue Seerosen",
    "artist": "Claude Monet",
    "year": "1916–1919",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Claude Monet - Blue Water Lilies - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilypool",
    "title": "Teich mit Seerosen",
    "artist": "Claude Monet",
    "year": "1907",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Pond with Water Lilies - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilymet2",
    "title": "Seerosen, 1919",
    "artist": "Claude Monet",
    "year": "1919",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Water Lilies MET DP-1208-001.jpg», gemeinfrei (CC0)"
  },
  {
    "id": "lilytoledo",
    "title": "Seerosen, 1922",
    "artist": "Claude Monet",
    "year": "1922",
    "museum": "Toledo Museum of Art",
    "source": "Wikimedia Commons: «Claude Monet - Water Lilies - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilyga431",
    "title": "Seerosen (Agapanthus)",
    "artist": "Claude Monet",
    "year": "1915–1926",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Water Lilies - Google Art Project (431238).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lily1908",
    "title": "Seerosen, 1908",
    "artist": "Claude Monet",
    "year": "1908",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Nymphéas (1908).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilyga462",
    "title": "Seerosen, 1916",
    "artist": "Claude Monet",
    "year": "1916",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Water Lilies - Google Art Project (462013).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilyga2",
    "title": "Seerosen",
    "artist": "Claude Monet",
    "year": "um 1916",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Claude Monet - Nymphéas (Waterlilies) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);

  var path = (window.PATHS || []).filter(function (p) { return p.id === 'monet'; })[0];
  if (!path) return;

  path.part = "Teil 1–3 · 1856–1926";
  path.subtitle = "Von Le Havre bis zu den Seerosen der Orangerie";
  path.intro = "Reise mit Claude Monet durch sein ganzes Malerleben: von den Karikaturen in Le Havre über Camille, London, Zaandam und Argenteuil, über den Bahnhof Saint-Lazare, Vétheuil, die Küste, die Riviera, Belle-Île und die Creuse bis nach Giverny – zu den Getreideschobern und Pappeln, zur Kathedrale von Rouen, nach Norwegen, an die Themse und nach Venedig, und schliesslich zum Wassergarten und den grossen Seerosendekorationen. Kurze Stationen, Bilder zum Ausmalen und Stimmen aus seinen Briefen.";
  path.ending = [
  "Am 5. Dezember 1926 stirbt Claude Monet in Giverny, 86 Jahre alt. Sein Freund Georges Clemenceau hat die Schenkung der grossen Seerosentafeln an den Staat begleitet.",
  "Im Mai 1927 öffnet die Orangerie in Paris die zwei ovalen Säle mit den Grandes Décorations. Der Wassergarten, den Monet selbst angelegt hat, hängt dort als ein ringförmiger Horizont.",
  "Der Lebensweg endet hier: von den Karikaturen in Le Havre bis zu den Seerosen der Orangerie."
];
  path.epilogue = "Claude Monet stirbt am 5. Dezember 1926 in Giverny. Im Mai 1927 öffnet die Orangerie in Paris die Säle mit den Grandes Décorations – den grossen Seerosentafeln, die er dem Staat hinterlassen hat.";
  if (path.map) {
    path.map.viewBox = "0 0 200 220";
    path.map.lands = (path.map.lands || []).concat([
  "M150,0 C165,0 188,2 194,16 C188,24 172,20 160,14 C150,10 142,4 150,0 Z",
  "M178,156 C192,150 200,160 198,174 C188,178 176,172 174,162 C174,158 178,156 Z"
]);
  }
  var stations = [
  {
    "id": "rouen",
    "place": "Rouen",
    "when": "1892–1894",
    "map": {
      "x": 90,
      "y": 88
    },
    "mapLabel": "Rouen",
    "intro": [
      "Nach den Getreideschobern und den Pappeln wählt Monet ein steinernes Motiv: die Westfassade der Kathedrale von Rouen. 1892 und 1893 arbeitet er in zwei Kampagnen vor Ort, oft von gemieteten Zimmern gegenüber dem Portal aus, an vielen Leinwänden zugleich.",
      "Zwischen den beiden Aufenthalten, am 16. Juli 1892, heiraten Monet und Alice Hoschedé in Giverny. 1895 stellt Durand-Ruel die Kathedralen in Paris aus."
    ],
    "works": [
      {
        "pid": "rouensun",
        "text": [
          "Die Westfassade steht im Sonnenlicht: helles Steinwerk, tiefe Schatten in den Portalen, die Türme lösen sich in Farbe auf.",
          "Monet malt die Kathedrale nicht als Bauaufnahme, sondern als Licht auf Stein. Dieselbe Fassade wird er bei grauem Wetter, am Morgen und am Abend wieder aufnehmen."
        ],
        "fact": "Das Bild von 1894 hängt in der National Gallery of Art in Washington."
      },
      {
        "pid": "rouenwest",
        "text": [
          "Dieselbe Westfassade, ein anderer Tag: das Licht ist kühler, die Gliederung der Portale bleibt, die Farbe ändert sich.",
          "Monet arbeitet in Rouen an mehreren Leinwänden zugleich und wechselt sie, wenn die Stunde umschlägt."
        ],
        "fact": "Auch dieses Bild von 1894 hängt in der National Gallery of Art in Washington."
      },
      {
        "pid": "rouengrey",
        "text": [
          "Bei grauem Wetter wird das Portal schwer und silbrig. Die Fassade bleibt, das Sonnenlicht fehlt.",
          "Diese Fassung entsteht schon 1892, in der ersten Kampagne. Monet schreibt an Alice, die Kathedrale bei Sonne sei bewundernswert – und welch eine Arbeit sie sei."
        ],
        "fact": "Das Bild von 1892 hängt im Musée d’Orsay in Paris.",
        "quote": {
          "text": "Ich habe mich an die Arbeit gemacht, an meinem neuen Fenster, wo ich sehr bequem eingerichtet bin. Die Kathedrale bei Sonne ist bewundernswert; ich habe zwei begonnen.",
          "cite": "Brief an Alice Hoschedé, Rouen, 25. Februar 1892"
        }
      },
      {
        "pid": "rouenportal",
        "text": [
          "Das Portal füllt die Fläche: Bögen, Masswerk, ein Hauch von Sonne auf dem Stein. Monet rückt nah heran.",
          "1894 datiert er mehrere dieser Fassaden. Die Serie ist zu diesem Zeitpunkt schon weit gediehen."
        ],
        "fact": "Das Bild hängt im Metropolitan Museum in New York."
      },
      {
        "pid": "rouenmorn",
        "text": [
          "Am Morgen tritt neben der Fassade der Turm der Albane hervor, das Licht ist noch kühl und bläulich.",
          "Monet hält nicht nur das Portal fest, sondern auch den seitlichen Turm – dieselbe Kathedrale, ein weiterer Ausschnitt."
        ],
        "fact": "Das Bild von 1894 hängt im Museum of Fine Arts in Boston."
      },
      {
        "pid": "rouengetty",
        "text": [
          "Im Morgenlicht ist das Portal blau und rosafarben, der Stein wirkt weich. Die Sonne hat die Fassade noch nicht ganz erfasst.",
          "Auch diese Fassung entsteht 1894. Die Serie zeigt, dass ein Motiv reicht, wenn das Licht sich ändert."
        ],
        "fact": "Das Bild hängt im J. Paul Getty Museum in Los Angeles."
      },
      {
        "pid": "rouenharmonia",
        "text": [
          "Bei strahlender Sonne werden Portal und Turm Saint-Romain zu einer Harmonie in Blau und Gold. Der Stein glänzt, die Schatten sind tief.",
          "1895 zeigt Durand-Ruel eine Gruppe der Kathedralen in Paris. Der Erfolg bestätigt den Weg der Serie – den Monet schon bei den Schobern und Pappeln eingeschlagen hat."
        ],
        "fact": "Das Bild von 1893 trägt den Beinamen Harmonie in Blau und Gold. Es zeigt das Portal und den Turm Saint-Romain in der Sonne."
      }
    ]
  },
  {
    "id": "norway",
    "place": "Norwegen",
    "when": "1895",
    "map": {
      "x": 162,
      "y": 8
    },
    "mapLabel": "Norwegen",
    "intro": [
      "Im Winter 1895 reist Monet nach Norwegen, zu seinem Stiefsohn Jacques Hoschedé, der dort lebt. Er wohnt bei Sandviken in der Nähe von Christiania, dem heutigen Oslo.",
      "Er malt den Mont Kolsaas, Dörfer im Schnee und den gefrorenen Fjord. An Gustave Geffroy schreibt er, er sei von allem entzückt, was er in diesem Land sehe."
    ],
    "works": [
      {
        "pid": "sandvsnow",
        "text": [
          "Häuser von Sandvika liegen im Schnee, eine kleine Brücke führt über den Bach, die Hügel dahinter sind dunkel.",
          "Monet kommt 1895 in ein Land, das ihm neu ist: Schnee, Kälte, ein anderes Licht als in Giverny."
        ],
        "fact": "Das Bild von 1895 hängt im Lettischen Nationalen Kunstmuseum in Riga."
      },
      {
        "pid": "kolsaas",
        "text": [
          "Der Mont Kolsaas lagert als dunkler Rücken im Schnee, der Himmel ist blass. Monet fasst den Berg knapp und fest.",
          "Den Berg malt er in mehreren Fassungen, bei verschiedenem Wetter, wie zuvor die Kathedrale."
        ],
        "fact": "Das Bild von 1895 hängt im Musée Marmottan Monet in Paris.",
        "quote": {
          "text": "Nur zwei Worte, damit Sie beruhigt sind, was mein Schicksal angeht, und nicht meinen, ich sei erfroren. Ich bin von allem entzückt, was ich in diesem wunderbaren Land sehe. Ich habe Ausflüge von vier Tagen im Schlitten gemacht, in den Bergen, auf den Fjorden, auf den Seen – es ist wunderbar!",
          "cite": "Brief an Gustave Geffroy, Sandviken bei Christiania, 26. Februar 1895"
        }
      },
      {
        "pid": "kolsaas2",
        "text": [
          "Dieselbe Erhebung am Abend: der Berg wird dunkler, der Schnee nimmt etwas Farbe, der Tag neigt sich.",
          "An Geffroy schreibt Monet von Schlittenfahrten in den Bergen und auf den Fjorden – und davon, dass er zu malen begonnen hat."
        ],
        "fact": "Das Bild von 1895, «Mont Kolsaas am Abend», befindet sich in Privatbesitz."
      },
      {
        "pid": "fjordoslo",
        "text": [
          "Der Fjord bei Christiania liegt weit und still, Inseln und Ufer sind verschneit, das Wasser ist grau-grün.",
          "Monet bleibt nur Wochen in Norwegen. Die Bilder dieser Reise sind wenige – und gehören zu den ungewöhnlichsten seines Werks."
        ],
        "fact": "Das Bild von 1895 befindet sich in Privatbesitz."
      },
      {
        "pid": "fjordbank",
        "text": [
          "Vom Ufer aus sieht man den Fjord als helle Fläche aus Eis und Wasser, die fernen Höhen sind blass.",
          "Danach kehrt Monet nach Giverny zurück. Das nächste grosse Motiv liegt wieder vor der eigenen Tür: die Seine am Morgen."
        ],
        "fact": "Auch dieses Bild von 1895 befindet sich in Privatbesitz."
      }
    ]
  },
  {
    "id": "mattinseine",
    "place": "Die Seine bei Giverny",
    "when": "1896–1897",
    "map": {
      "x": 100,
      "y": 96,
      "labelDy": -14
    },
    "mapLabel": "Giverny",
    "intro": [
      "1896 und 1897 malt Monet den Arm der Seine bei Giverny in den frühen Morgenstunden: Nebel, stilles Wasser, die Bäume als Spiegelung.",
      "Das Motiv ist nahe, das Licht ändert sich schnell. Wie bei den Kathedralen entsteht eine Serie derselben Stelle zu verschiedenen Stunden."
    ],
    "works": [
      {
        "pid": "mornseine",
        "text": [
          "Weiden hängen über den Fluss, das Wasser ist grün und milchig, der Morgen noch nicht hell. Die Spiegelung und das Ufer gehen ineinander über.",
          "Monet sucht den Fluss in der Frühe, oft bei Nebel, bevor die Sonne die Formen festmacht."
        ],
        "fact": "Das Bild, 1898 datiert, hängt im Nationalmuseum für westliche Kunst in Tokio."
      },
      {
        "pid": "mornmet",
        "text": [
          "Dieselbe Flussstrecke, ein offeneres Licht: der Himmel spiegelt sich als helle Bahn im Wasser, die Bäume stehen zu beiden Ufern.",
          "1897 entsteht eine ganze Gruppe solcher Morgenbilder. Das Motiv bleibt, die Stunde nicht."
        ],
        "fact": "Das Bild hängt im Metropolitan Museum in New York."
      },
      {
        "pid": "mornbeau",
        "text": [
          "Bei schönem Wetter wird der Morgen klarer: mehr Himmel, eine festere Spiegelung, die Bäume treten deutlicher hervor.",
          "Auch hier bleibt Monet an derselben Stelle. Der Unterschied liegt im Licht, nicht im Ort."
        ],
        "fact": "Das Bild von 1897 gehört zur Sammlung des White House in Washington."
      },
      {
        "pid": "mornw1436",
        "text": [
          "1896, ein früher Zustand der Serie: das Wasser ist violett-blau, die Spiegelung silbrig, die Ufer noch in der Dämmerung.",
          "Monet beginnt die Morgenbilder an der Seine, bevor er sie im Jahr darauf weiterführt."
        ],
        "fact": "Das Bild von 1896 befindet sich in Privatbesitz."
      },
      {
        "pid": "mornw1484",
        "text": [
          "Wieder der Flussarm bei Giverny, 1897: Nebel und Spiegelung, die Bäume als dunkle Massen, das Wasser als Licht.",
          "Bald darauf wendet sich Monet dem Garten zu, den er hinter dem Haus anlegt – und der japanischen Brücke über dem neuen Teich."
        ],
        "fact": "Das Bild von 1897 befindet sich in Privatbesitz."
      }
    ]
  },
  {
    "id": "japangarden",
    "place": "Wassergarten und japanische Brücke",
    "when": "1899–1906",
    "map": {
      "x": 100,
      "y": 96,
      "labelDy": -14
    },
    "mapLabel": "Giverny",
    "intro": [
      "Ab den 1890er Jahren legt Monet hinter dem Haus in Giverny einen Wassergarten an: er lässt einen Arm der Epte umleiten, pflanzt Iris und Seerosen und baut eine Brücke im japanischen Stil.",
      "1899 und in den Jahren danach malt er die Brücke und den Teich in immer neuen Fassungen. 1909 schreibt er an Roger Marx, er habe an eben diesem Ort schon die Seerosen mit der Brücke gemalt."
    ],
    "works": [
      {
        "pid": "japabridge",
        "text": [
          "Die hellgrüne Brücke wölbt sich über den Teich, darunter Seerosenblätter und ein wenig Himmel im Wasser.",
          "1899 malt Monet diese Brücke in mehreren Fassungen. Sie wird zum Sinnbild seines Gartens."
        ],
        "fact": "Das Bild von 1899 hängt in der National Gallery of Art in Washington.",
        "quote": {
          "text": "Es ist ein Wasserbecken, das ich vor etwa fünfzehn Jahren selbst angelegt habe; dieses Becken von ungefähr 200 Metern Umfang wird von einem Arm des Flusses Epte gespeist; es ist mit Iris und verschiedenen Wasserpflanzen gesäumt, in einem Rahmen aus verschiedenen Bäumen, in dem aber Pappeln und Weiden vorherrschen, darunter mehrere Trauerweiden. An eben diesem Ort habe ich schon die Seerosen mit einer Brücke im japanischen Stil gemalt.",
          "cite": "Brief an Roger Marx, Giverny, 1. Juni 1909 (Wildenstein, Brief 1893); Marx verwendete die Antwort für seinen Aufsatz in der Gazette des Beaux-Arts, Juni 1909"
        }
      },
      {
        "pid": "lilybridge",
        "text": [
          "Wieder die Brücke, dichter in Grün gefasst, die Seerosen näher, das Ufer fast geschlossen.",
          "Auch diese Fassung entsteht um 1899. Das Motiv ist dasselbe, der Ausschnitt enger, die Farbe satter."
        ],
        "fact": "Das Bild hängt im Princeton University Art Museum."
      },
      {
        "pid": "lilypondnl",
        "text": [
          "Die Brücke steht klar und hell vor dem Laub, der Teich ist voller Seerosen, das Grün ist sommerlich.",
          "Diese Fassung von 1899 gehört zu den bekanntesten Bildern des Wassergartens."
        ],
        "fact": "Das Bild hängt in der National Gallery in London."
      },
      {
        "pid": "lilypondga",
        "text": [
          "1904 ist der Teich das ganze Bild: Seerosen, Spiegelungen, kaum noch Ufer. Die Brücke tritt zurück.",
          "Monet beginnt, den Wasserspiegel selbst zur Fläche zu machen – ein Schritt zu den späteren Dekorationen."
        ],
        "fact": "Das Bild von 1904 gehört zur Serie der Seerosenteiche dieser Jahre."
      },
      {
        "pid": "lilyaic",
        "text": [
          "Um 1900 steht die Brücke noch fest im Bild, umgeben von Weiden und Seerosen, das Grün ist tief.",
          "Das Art Institute of Chicago bewahrt diese frühe Fassung des Teichs – unabhängig von dem berühmten Seerosenbild von 1906 in derselben Sammlung."
        ],
        "fact": "Das Bild von 1900 hängt im Art Institute of Chicago."
      },
      {
        "pid": "irisyale",
        "text": [
          "Im Clos normand, dem Blumengarten vor dem Haus, stehen Iris in dichten Reihen, ein Pfad führt in die Tiefe, die Bäume geben Schatten.",
          "1900 malt Monet nicht nur den Wassergarten, sondern auch diesen Weg durch die Blumen – den Garten, den er selbst gepflanzt hat."
        ],
        "fact": "Das Bild von 1900 hängt in der Yale University Art Gallery in New Haven."
      },
      {
        "pid": "lilywl",
        "text": [
          "1904 sind die Seerosen ein dunkles, geschlossenes Feld: Blätter, wenige Blüten, tiefes Grün, kaum Horizont.",
          "In diesen Jahren stellt Monet Gruppen der Seerosen aus. Der Teich wird zu seinem Hauptmotiv."
        ],
        "fact": "Das Bild von 1904 gehört zur Seerosen-Serie dieser Jahre."
      }
    ]
  },
  {
    "id": "thames",
    "place": "London · Themse",
    "when": "1899–1905",
    "map": {
      "x": 48,
      "y": 48
    },
    "mapLabel": "London",
    "intro": [
      "1899, 1900 und 1901 reist Monet wieder nach London. Er malt die Themse: das Parlament, die Charing-Cross-Brücke, die Waterloo-Brücke, oft im Nebel, vom Savoy oder vom St Thomas’ Hospital aus.",
      "Viele Leinwände vollendet er später in Giverny. An Alice schreibt er im März 1900, er sei entsetzt gewesen, als der Nebel am Morgen ausblieb – und erleichtert, als Rauch und Dunst zurückkehrten."
    ],
    "works": [
      {
        "pid": "parlsun",
        "text": [
          "Das Parlament steht als blaue Masse im Sonnenlicht, die Themse glänzt, der Himmel ist hell. Die Türme lösen sich im Dunst nicht ganz auf.",
          "Monet malt das Gebäude in vielen Zuständen: Sonne, Nebel, Sonnenuntergang. Das Motiv bleibt, das Wetter nicht."
        ],
        "fact": "Das Bild von 1903 hängt im Brooklyn Museum in New York."
      },
      {
        "pid": "parlfog",
        "text": [
          "Im Nebel wird das Parlament zum Schatten. Ein Boot liegt auf dem Wasser, die Farbe ist zurückgenommen, die Luft ist dick.",
          "An Alice schreibt Monet, er sei am Boden gewesen, als der Nebel ausblieb – und habe schon alle Leinwände ruiniert gesehen."
        ],
        "fact": "Das Bild von 1903–1904 hängt im Metropolitan Museum in New York.",
        "quote": {
          "text": "Als ich aufstand, war ich entsetzt zu sehen, dass es keinen Nebel gab, nicht einmal den Schatten eines Dunstes; ich war am Boden und sah schon all meine Leinwände ruiniert, aber nach und nach, als die Feuer angezündet wurden, kehrten Rauch und Dunst zurück.",
          "cite": "Brief an Alice Monet, London, 4. März 1900"
        }
      },
      {
        "pid": "parlset",
        "text": [
          "Bei Sonnenuntergang brennt der Himmel über dem Parlament, das Wasser nimmt Orange und Violett auf, die Türme stehen dunkel davor.",
          "1904 datiert Monet mehrere dieser Londoner Fassungen, die er in Giverny zu Ende führt."
        ],
        "fact": "Das Bild von 1904 gehört zur Parlamentsserie der Londoner Reisen."
      },
      {
        "pid": "waterloosun",
        "text": [
          "Die Waterloo-Brücke liegt im Abendlicht, die Bogen sind weich, die Stadt dahinter löst sich auf.",
          "Monet malt diese Brücke bei Sonne, in der Dämmerung und an grauen Tagen – dieselbe Konstruktion, drei Stimmungen."
        ],
        "fact": "Das Bild von 1904 hängt in der National Gallery of Art in Washington."
      },
      {
        "pid": "waterloodusk",
        "text": [
          "In der Dämmerung wird die Brücke schwerer, der Rauch der Schornsteine bleibt in der Luft, das Wasser ist dunkel.",
          "Auch diese Fassung von 1904 hängt in Washington, neben der Sonne und dem grauen Tag."
        ],
        "fact": "Das Bild hängt in der National Gallery of Art in Washington."
      },
      {
        "pid": "waterlogrey",
        "text": [
          "An einem grauen Tag ist die Brücke fast farblos, die Themse matt, die Stadt eine Andeutung.",
          "1903 datiert Monet diese Fassung. Der Nebel von London ist für ihn kein Hindernis, sondern das Motiv selbst."
        ],
        "fact": "Das Bild von 1903 hängt in der National Gallery of Art in Washington."
      },
      {
        "pid": "charingga",
        "text": [
          "Die Charing-Cross-Brücke liegt in einem hellen, milchigen Dunst, Züge und Bogen sind kaum festgehalten.",
          "Monet malt die Eisenbahnbrücke der Südostlinie in vielen Fassungen, oft vom Savoy aus."
        ],
        "fact": "Das Bild um 1902 gehört zur Serie der Charing-Cross-Brücke."
      },
      {
        "pid": "charing2",
        "text": [
          "Eine frühere oder kühlere Fassung derselben Brücke: mehr Struktur, ein anderer Himmel, dasselbe Motiv von der Themse aus.",
          "Nach den Londoner Reisen kehrt Monet nach Giverny zurück. 1908 führt ihn eine weitere Reise nach Venedig."
        ],
        "fact": "Das Bild um 1900 gehört ebenfalls zur Serie der Charing-Cross-Brücke."
      }
    ]
  },
  {
    "id": "venice",
    "place": "Venedig",
    "when": "1908",
    "map": {
      "x": 188,
      "y": 168
    },
    "mapLabel": "Venedig",
    "intro": [
      "Im Oktober 1908 reist Monet mit Alice nach Venedig. Sie bleiben bis Dezember. Er malt San Giorgio Maggiore, den Dogenpalast, Palazzi am Canal Grande – oft vom Wasser aus, im besonderen Licht der Lagune.",
      "An Gustave Geffroy schreibt er Anfang Dezember, seine Begeisterung sei nur noch gewachsen, und er sei traurig, dieses einzigartige Licht zu verlassen. Eine Rückkehr im nächsten Jahr, die er erhofft, kommt nicht mehr zustande."
    ],
    "works": [
      {
        "pid": "sangiorgio",
        "text": [
          "San Giorgio Maggiore liegt als helles Geviert in der Lagune, der Campanile steht schlank, zwei Gondeln geben den Massstab.",
          "Monet malt die Kirche von der gegenüberliegenden Seite aus, oft bei Dunst, das Wasser als grosse, ruhige Fläche."
        ],
        "fact": "Das Bild von 1908 hängt im Indianapolis Museum of Art."
      },
      {
        "pid": "sangiodusk",
        "text": [
          "In der Dämmerung brennt der Himmel hinter San Giorgio, die Kirche wird zur Silhouette, das Wasser nimmt das Orange auf.",
          "An Geffroy schreibt Monet, das Licht Venedigs sei einzigartig – und er sei traurig, es zu verlassen."
        ],
        "fact": "Das Bild von 1908 hängt im National Museum Cardiff.",
        "quote": {
          "text": "Sie wird Ihnen von meiner Begeisterung für Venedig erzählt haben. Nun, sie ist nur noch gewachsen, und da der Augenblick näher rückt, dieses einzigartige Licht zu verlassen, bin ich traurig darüber. Es ist so schön.",
          "cite": "Brief an Gustave Geffroy, Venedig, 7. Dezember 1908"
        }
      },
      {
        "pid": "dogepalace",
        "text": [
          "Der Dogenpalast liegt als lange, helle Front am Wasser, die Arkaden sind angedeutet, die Lagune nimmt den Palast auf.",
          "Monet fasst den Bau nicht als Architekturstudie, sondern als Licht auf Stein und Wasser – wie zuvor die Kathedrale von Rouen."
        ],
        "fact": "Das Bild von 1908 gehört zur venezianischen Gruppe dieses Herbstes."
      },
      {
        "pid": "dogemet",
        "text": [
          "Von San Giorgio Maggiore aus sieht man den Dogenpalast über das Wasser, der Vordergrund ist ein dunkler Streifen Ufer.",
          "Derselbe Palast, ein anderer Standpunkt. Monet wechselt die Ufer und behält das Motiv."
        ],
        "fact": "Das Bild von 1908 hängt im Metropolitan Museum in New York."
      },
      {
        "pid": "palazzomula",
        "text": [
          "Der Palazzo da Mula steht nah am Kanal, die Fassade spiegelt sich, eine Gondel gleitet vorüber.",
          "Monet rückt an die Paläste heran, wie er in Rouen an das Portal herangerückt ist: nicht die Stadt als Panorama, sondern eine Wand aus Licht."
        ],
        "fact": "Das Bild von 1908 hängt in der National Gallery of Art in Washington."
      },
      {
        "pid": "palazzodario",
        "text": [
          "Der Palazzo Dario steigt schmal aus dem Wasser, die Marmorinkrustationen sind in Farbe aufgelöst, eine Gondel liegt davor.",
          "Auch dieses Haus am Canal Grande malt Monet 1908. Die Reise bleibt seine einzige nach Venedig."
        ],
        "fact": "Das Bild hängt im National Museum Cardiff."
      },
      {
        "pid": "grandcanal2",
        "text": [
          "Santa Maria della Salute steht am Ende des Canal Grande, Stangen im Vordergrund teilen die Fläche, das Wasser ist türkis und violett.",
          "Im Dezember 1908 verlassen Monet und Alice Venedig. Die Bilder arbeitet er später in Giverny weiter aus."
        ],
        "fact": "Das Bild von 1908 hängt im Museum of Fine Arts in Boston."
      }
    ]
  },
  {
    "id": "lategarden",
    "place": "Giverny, späte Jahre",
    "when": "1911–1924",
    "map": {
      "x": 100,
      "y": 96,
      "labelDy": -14
    },
    "mapLabel": "Giverny",
    "intro": [
      "Alice Monet stirbt am 19. Mai 1911 in Giverny. Der Sohn Jean stirbt am 10. Februar 1914. Blanche, Jeans Witwe, bleibt im Haus und hilft im Alltag.",
      "Monet arbeitet weiter im Garten: Iriswege, Trauerweiden in den Kriegsjahren, später das Haus vom Rosengarten aus und die japanische Brücke in freien, dunkleren Fassungen."
    ],
    "works": [
      {
        "pid": "pathiris",
        "text": [
          "Ein Weg führt durch hohe Iris, gelb und violett, das Laub ist dicht, der Pfad verschwindet fast im Gelb-Grün.",
          "Das Bild entsteht zwischen 1914 und 1917, in den Jahren nach Jeans Tod. Monet bleibt bei der Arbeit im Garten."
        ],
        "fact": "Das Bild hängt im Metropolitan Museum in New York."
      },
      {
        "pid": "willowk",
        "text": [
          "Eine Trauerweide hängt schwer über dem Grund, der Stamm ist dunkel, die Zweige fallen wie ein Vorhang.",
          "1918 malt Monet mehrere Weiden am Teich. In den letzten Kriegsmonaten wird der Baum zu einem stillen, ernsten Motiv."
        ],
        "fact": "Das Bild von 1918 gehört zu den Trauerweiden dieser Jahre."
      },
      {
        "pid": "willow2",
        "text": [
          "Eine andere Weide, wärmer im Licht: Gold und Grün, der Stamm teilt die Fläche, die Zweige sind weniger schwer.",
          "Auch diese Fassung entsteht 1918 oder 1919, am selben Teich in Giverny."
        ],
        "fact": "Das Bild hängt im Kimbell Art Museum in Fort Worth."
      },
      {
        "pid": "willow3",
        "text": [
          "Noch einmal die Trauerweide, rötlicher und herber, fast ohne Himmel. Monet bleibt bei dem Baum und ändert die Stunde.",
          "Die Weiden entstehen in denselben Jahren, in denen er die grossen Seerosentafeln vorbereitet."
        ],
        "fact": "Das Bild von 1918–1919 gehört zur Gruppe der Trauerweiden."
      },
      {
        "pid": "irislate",
        "text": [
          "Einzelne Iris stehen im Grün und Blau, der Grund bleibt teilweise frei. Das Bild ist knapp und offen gehalten.",
          "Zwischen 1914 und 1917 malt Monet solche Blumenstücke im Garten – neben den Wegen und den Weiden."
        ],
        "fact": "Das Bild von 1914–1917 befindet sich in Privatbesitz."
      },
      {
        "pid": "rosegarden",
        "text": [
          "Vom Rosengarten aus erscheint das Haus als warme, rote Masse im Laub, das Licht ist hoch und gelb.",
          "Das Bild entsteht zwischen 1922 und 1924, in Monets letzten Arbeitsjahren im Clos normand."
        ],
        "fact": "Das Bild hängt im Musée Marmottan Monet in Paris."
      },
      {
        "pid": "latebridge2",
        "text": [
          "Die japanische Brücke ist nur noch ein Bogen im Grün-Blau, die Formen lösen sich, der Teich und das Laub gehen ineinander über.",
          "Zwischen 1918 und 1924 malt Monet die Brücke in freien, dunkleren Fassungen – denselben Ort wie 1899, ein anderes Auge."
        ],
        "fact": "Das Bild entsteht zwischen 1918 und 1924, in den späten Jahren am Teich."
      }
    ]
  },
  {
    "id": "grandes",
    "place": "Die Grandes Décorations",
    "when": "1914–1926",
    "map": {
      "x": 100,
      "y": 96,
      "labelDy": -14
    },
    "mapLabel": "Giverny",
    "intro": [
      "Ab 1914 arbeitet Monet an sehr grossen Seerosentafeln, den späteren Grandes Décorations. Der Teich soll einen ganzen Raum füllen. In diesen Jahren trübt sich sein Sehen durch grauen Star; 1923 wird das rechte Auge operiert.",
      "Am 12. November 1918 bietet er Georges Clemenceau zwei Tafeln für den Staat an, signiert mit dem Tag des Sieges. Später wird daraus die Schenkung an die Orangerie."
    ],
    "works": [
      {
        "pid": "lilyset",
        "text": [
          "Die untergehende Sonne liegt als gelb-rosa Bahn auf dem Teich, die Seerosen sind weit verstreut, der Horizont fällt weg.",
          "Diese Tafel gehört zu den Grandes Décorations, die heute in der Orangerie hängen. Monet hat den Wassergarten selbst angelegt – und ihn schliesslich zum Raum gemacht."
        ],
        "fact": "Das Bild gehört zum Zyklus in der Orangerie in Paris und entsteht zwischen 1914 und 1926.",
        "quote": {
          "text": "Ich bin im Begriff, zwei dekorative Tafeln fertigzustellen, die ich mit dem Tag des Sieges signieren will, und bitte Sie, sie durch Ihre Vermittlung dem Staat anzubieten. Es ist wenig, aber es ist die einzige Art, in der ich am Sieg teilnehmen kann.",
          "cite": "Brief an Georges Clemenceau, 12. November 1918"
        }
      },
      {
        "pid": "lilyblue",
        "text": [
          "Blaue Seerosen unter herabhängenden Zweigen: die Fläche ist nah, der Ausschnitt ohne Ufer, die Farbe tiefviolett und grün.",
          "Das Bild entsteht zwischen 1916 und 1919, in denselben Jahren wie die grossen Dekorationen, als eigenes Tafelbild."
        ],
        "fact": "Das Bild hängt im Musée d’Orsay in Paris."
      },
      {
        "pid": "lilypool",
        "text": [
          "1907, ein früher, hoher Ausschnitt: eine helle Spiegelung fällt durch den Teich, Seerosen liegen am Rand der Lichtbahn.",
          "Diese Jahre bereiten die späteren Dekorationen vor. Der Teich braucht keinen Horizont mehr."
        ],
        "fact": "Das Bild von 1907 gehört zur Seerosen-Serie vor den grossen Tafeln."
      },
      {
        "pid": "lilymet2",
        "text": [
          "1919 liegen die Seerosen als helle Inseln auf einem grünen Grund, eine weiche Spiegelung teilt die Fläche.",
          "Das Metropolitan Museum bewahrt diese grosse, ruhige Fassung aus den Jahren der Dekorationen."
        ],
        "fact": "Das Bild von 1919 hängt im Metropolitan Museum in New York."
      },
      {
        "pid": "lilytoledo",
        "text": [
          "1922 ist der Teich ein Feld aus Violett und Grün, die Blüten stehen locker, der Pinsel bleibt sichtbar.",
          "In diesen Jahren arbeitet Monet trotz des veränderten Sehens weiter an den Seerosen."
        ],
        "fact": "Das Bild von 1922 hängt im Toledo Museum of Art."
      },
      {
        "pid": "lilyga431",
        "text": [
          "Eine breite Tafel aus der Gruppe der Agapanthus-Bilder: Seerosen über die ganze Fläche, darunter ein Hauch von Uferpflanzen.",
          "Solche grossen Formate gehören in die Nähe der Dekorationen, auch wenn sie nicht in der Orangerie hängen."
        ],
        "fact": "Das Bild entsteht zwischen etwa 1915 und 1926 und gehört zur Gruppe der Agapanthus-Tafeln."
      },
      {
        "pid": "lily1908",
        "text": [
          "1908, ein stiller, hoher Teich: wenige rosa Blüten, eine helle Bahn im Wasser, fast ohne Ufer.",
          "Das Bild entsteht in denselben Jahren wie die Reise nach Venedig – und zeigt, dass der Wassergarten das bleibende Motiv bleibt."
        ],
        "fact": "Das Bild von 1908 gehört zur Seerosen-Serie dieser Jahre."
      },
      {
        "pid": "lilyga462",
        "text": [
          "1916 liegen die Seerosen dichter, in Blau und Grün, einzelne Blüten leuchten rot und gelb.",
          "In diesem Jahr ist Monet mitten in der Arbeit an den grossen Tafeln. Kleinere Bilder begleiten die Dekorationen."
        ],
        "fact": "Das Bild von 1916 gehört zur Seerosen-Serie der Kriegs- und Dekorationsjahre."
      },
      {
        "pid": "lilyga2",
        "text": [
          "Seerosen auf einem hellen, grün-blauen Grund, die Blätter bilden Inseln, das Licht ist weich.",
          "Solche Tafeln aus den 1910er Jahren zeigen den Teich ohne Brücke und ohne Himmel – nur Wasser und Pflanzen."
        ],
        "fact": "Das Bild gehört zur Seerosen-Serie der 1910er Jahre."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
