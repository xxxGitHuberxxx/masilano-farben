// v8.7 Paul Cézanne life journey, Part 2 (1886–1906), completing the path.
// Appends stations and works to the existing Cézanne path; does not rewrite Part 1.
// Reuses the gallery works cards and apples by pid only (not listed in works[]).
// Quotes: letter to Émile Bernard, 15 April 1904; letter to Émile Bernard, 23 October 1905;
// letter to his son Paul, 8 September 1906. Wording verified; translations cited by letter and date only.
// No nudes; the bathers are left aside.
(function () {
  var works = [
  {
    "id": "czson87",
    "title": "Der Sohn Paul",
    "artist": "Paul Cézanne",
    "year": "1886–1887",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne, The Artist's Son, Paul, 1886-1887, NGA 46575.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czmarne",
    "title": "Am Ufer der Marne",
    "artist": "Paul Cézanne",
    "year": "um 1888",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Bord de la Marne, par Paul Cézanne, Hermitage Museum, Yorck.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czcreteil",
    "title": "Die Brücke über die Marne in Créteil",
    "artist": "Paul Cézanne",
    "year": "1888",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Le Pont sur la Marne à Créteil, par Paul Cézanne, Yorck.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czchantilly",
    "title": "Allee in Chantilly",
    "artist": "Paul Cézanne",
    "year": "1888",
    "museum": "Toledo Museum of Art",
    "source": "Wikimedia Commons: «L'Allée à Chantilly, par Paul Cézanne, Yorck.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czselfpalette",
    "title": "Selbstbildnis mit Palette",
    "artist": "Paul Cézanne",
    "year": "um 1890",
    "museum": "Sammlung E. G. Bührle, Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Paul Cézanne - Portrait de l'artiste à la palette - Bührle.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czsvpine",
    "title": "Montagne Sainte-Victoire mit grosser Kiefer",
    "artist": "Paul Cézanne",
    "year": "um 1887",
    "museum": "Courtauld Gallery, London",
    "source": "Wikimedia Commons: «Mont Sainte-Victoire with Large Pine, by Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czsvviaduct",
    "title": "Montagne Sainte-Victoire und das Viadukt im Arc-Tal",
    "artist": "Paul Cézanne",
    "year": "1882–1885",
    "museum": "The Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Mont Sainte-Victoire and the Viaduct of the Arc River Valley, by Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czsvvalcros",
    "title": "Montagne Sainte-Victoire und Viadukt von Valcros aus",
    "artist": "Paul Cézanne",
    "year": "1887",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Montagne Sainte-Victoire et viaduc du côté de Valcros, by Paul Cézanne, Yorck.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbellevue",
    "title": "Haus Bellevue und Taubenschlag",
    "artist": "Paul Cézanne",
    "year": "um 1890",
    "museum": "Museum Folkwang, Essen",
    "source": "Wikimedia Commons: «Cezanne - Das Gehöft von Bellevue mit Taubenschlag.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czgrandpin",
    "title": "Grosse Kiefer und rote Erde",
    "artist": "Paul Cézanne",
    "year": "1895–1897",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Grand pin et terres rouges, by Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czcardmet",
    "title": "Die Kartenspieler",
    "artist": "Paul Cézanne",
    "year": "1890–1892",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Card Players MET DP231550.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czcardplayer",
    "title": "Der Kartenspieler",
    "artist": "Paul Cézanne",
    "year": "1890–1892",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Paul Cézanne - The Cardplayer - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czpipe",
    "title": "Mann mit Pfeife",
    "artist": "Paul Cézanne",
    "year": "1892–1896",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne, Man with Pipe, 1892-1896, NGA 53121.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czpeasant",
    "title": "Sitzender Bauer",
    "artist": "Paul Cézanne",
    "year": "um 1892",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Seated Peasant MET DT1944.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czcoffee",
    "title": "Die Frau mit der Kaffeekanne",
    "artist": "Paul Cézanne",
    "year": "um 1895",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Paul Cézanne - Woman with a Coffeepot - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czmadred",
    "title": "Madame Cézanne im roten Kleid",
    "artist": "Paul Cézanne",
    "year": "um 1888–1890",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Madame Cézanne (Hortense Fiquet, 1850–1922) in a Red Dress MET DP320128.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czconserv",
    "title": "Madame Cézanne im Gewächshaus",
    "artist": "Paul Cézanne",
    "year": "1891",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Madame Cézanne (Hortense Fiquet, 1850–1922) in the Conservatory MET DP317780.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czmadyellow",
    "title": "Madame Cézanne im gelben Sessel",
    "artist": "Paul Cézanne",
    "year": "1888–1890",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Paul Cézanne - Madame Cézanne in a Yellow Chair - 1948.54 - Art Institute of Chicago.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czmadblue",
    "title": "Madame Cézanne in Blau",
    "artist": "Paul Cézanne",
    "year": "um 1888–1890",
    "museum": "Museum of Fine Arts, Houston",
    "source": "Wikimedia Commons: «Paul Cézanne - Madame Cézanne in Blue - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czmadhat",
    "title": "Madame Cézanne mit grünem Hut",
    "artist": "Paul Cézanne",
    "year": "1891–1892",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Paul Cézanne - Madame Cézanne with Green Hat (Madame Cézanne au chapeau vert) - BF141 - Barnes Foundation.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czginger",
    "title": "Ingwertopf mit Granatapfel und Birnen",
    "artist": "Paul Cézanne",
    "year": "1893",
    "museum": "Phillips Collection, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne - Ginger Pot with Pomegranate and Pears - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czeggplant",
    "title": "Stillleben mit Ingwertopf und Auberginen",
    "artist": "Paul Cézanne",
    "year": "1893–1894",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Nature morte avec un pot de gingembre et des aubergines, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czcurtain",
    "title": "Stillleben mit Vorhang",
    "artist": "Paul Cézanne",
    "year": "um 1898",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Cézanne, Paul - Still Life with a Curtain.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czonions",
    "title": "Stillleben mit Zwiebeln",
    "artist": "Paul Cézanne",
    "year": "1896–1898",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Nature morte avec oignons, par Paul Cézanne, Musée d'Orsay.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czgetty",
    "title": "Stillleben mit Äpfeln",
    "artist": "Paul Cézanne",
    "year": "1893–1894",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Paul Cézanne - Still Life with Apples - 96.PA.8 - J. Paul Getty Museum.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czpeaches",
    "title": "Vier Pfirsiche auf einem Teller",
    "artist": "Paul Cézanne",
    "year": "um 1890–1894",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Paul Cézanne - Four Peaches on a Plate (Quatre pêches sur une assiette) - BF21 - Barnes Foundation.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czapplpeach",
    "title": "Stillleben mit Äpfeln und Pfirsichen",
    "artist": "Paul Cézanne",
    "year": "um 1905",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne - Nature morte avec pommes et pêches (National Gallery of Art).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czgeffroy",
    "title": "Bildnis Gustave Geffroy",
    "artist": "Paul Cézanne",
    "year": "1895–1896",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Paul Cézanne - Gustave Geoffroy - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czvollard",
    "title": "Bildnis Ambroise Vollard",
    "artist": "Paul Cézanne",
    "year": "1899",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Paul Cézanne - Portrait d'Ambroise Vollard - Musée des Beaux-Arts de la ville de Paris - 2.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czselfberet",
    "title": "Selbstbildnis mit Baskenmütze",
    "artist": "Paul Cézanne",
    "year": "1898–1900",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Autoportrait au béret, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czitalian",
    "title": "Junge Italienerin am Tisch",
    "artist": "Paul Cézanne",
    "year": "um 1895–1900",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Paul Cézanne - Young Italian Woman at a Table - 99.PA.40 - J. Paul Getty Museum.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czannecy",
    "title": "Der See von Annecy",
    "artist": "Paul Cézanne",
    "year": "1896",
    "museum": "Courtauld Gallery, London",
    "source": "Wikimedia Commons: «Lac d'Annecy, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbibquarry",
    "title": "Der Steinbruch Bibémus",
    "artist": "Paul Cézanne",
    "year": "1895",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Paul Cézanne - Bibémus Quarry (Carrière de Bibémus) - BF34 - Barnes Foundation.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbibbarnes",
    "title": "Bibémus",
    "artist": "Paul Cézanne",
    "year": "1894–1895",
    "museum": "Barnes Foundation, Philadelphia",
    "source": "Wikimedia Commons: «Paul Cézanne - Bibémus - BF218 - Barnes Foundation.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbibsv",
    "title": "Die Montagne Sainte-Victoire vom Steinbruch Bibémus aus",
    "artist": "Paul Cézanne",
    "year": "um 1897",
    "museum": "Baltimore Museum of Art",
    "source": "Wikimedia Commons: «La Montagne Sainte-Victoire vue de la carrière Bibémus, par Paul Cézanne.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbibfolk",
    "title": "Der Steinbruch Bibémus",
    "artist": "Paul Cézanne",
    "year": "um 1895",
    "museum": "Museum Folkwang, Essen",
    "source": "Wikimedia Commons: «La Carrière de Bibémus, par Paul Cézanne, Yorck.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbibnelson",
    "title": "Der Steinbruch Bibémus",
    "artist": "Paul Cézanne",
    "year": "1898–1900",
    "museum": "Nelson-Atkins Museum of Art, Kansas City",
    "source": "Wikimedia Commons: «Paul Cézanne - Carrière de Bibémus (1898-99).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czbibrocks",
    "title": "Felsen und Äste in Bibémus",
    "artist": "Paul Cézanne",
    "year": "1900–1904",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Paul Cézanne - Rochers et branches à Bibémus - Musée des Beaux-Arts de la ville de Paris - 2.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czcnnga",
    "title": "Château Noir",
    "artist": "Paul Cézanne",
    "year": "1900–1904",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne, Château Noir, 1900-1904, NGA 45866.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czcnmaria",
    "title": "Maison Maria mit Blick auf das Château Noir",
    "artist": "Paul Cézanne",
    "year": "um 1895",
    "museum": "Kimbell Art Museum, Fort Worth",
    "source": "Wikimedia Commons: «Paul Cézanne - Maison Maria with a View of Château Noir - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czcnmill",
    "title": "Der Mühlstein im Park des Château Noir",
    "artist": "Paul Cézanne",
    "year": "1898–1900",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Paul Cézanne - Millstone in the Park of the Château Noir.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czcnsv",
    "title": "Montagne Sainte-Victoire und Château Noir",
    "artist": "Paul Cézanne",
    "year": "1904",
    "museum": "Artizon Museum, Tokio",
    "source": "Wikimedia Commons: «Paul Cezanne - Mont Sainte-Victoire and Château Noir - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czcncistern",
    "title": "Die Zisterne im Park des Château Noir",
    "artist": "Paul Cézanne",
    "year": "um 1900",
    "museum": "Princeton University Art Museum",
    "source": "Wikimedia Commons: «Paul Cézanne - Cistern in the Grounds of Château Noir - L.1988.62.4 - Princeton University Art Museum.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czcnview",
    "title": "Blick auf das Château Noir",
    "artist": "Paul Cézanne",
    "year": "um 1887–1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul Cézanne - View of the Château Noir - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czsvnoir",
    "title": "Château Noir und Montagne Sainte-Victoire",
    "artist": "Paul Cézanne",
    "year": "um 1890–1895",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul Cézanne - Château Noir and Mont Sainte-Victoire, c. 1890-1895 - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czforestpath",
    "title": "Waldweg zum Château Noir",
    "artist": "Paul Cézanne",
    "year": "1900–1902",
    "museum": "Fondation Beyeler, Riehen",
    "source": "Wikimedia Commons: «Paul Cézanne - Forest Scene (Path from Mas Jolie to Château noir) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czlvmet",
    "title": "Montagne Sainte-Victoire",
    "artist": "Paul Cézanne",
    "year": "1902–1906",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Mont Sainte-Victoire MET 77J 045R2M.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czlvsv",
    "title": "Die Montagne Sainte-Victoire von Les Lauves aus",
    "artist": "Paul Cézanne",
    "year": "um 1904–1906",
    "museum": "Puschkin-Museum, Moskau",
    "source": "Wikimedia Commons: «Cezanne - Mont Sainte Victoire von Lauves aus gesehen 1.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czlvgarden",
    "title": "Der Garten in Les Lauves",
    "artist": "Paul Cézanne",
    "year": "um 1906",
    "museum": "Phillips Collection, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne - The Garden at Les Lauves (Le Jardin des Lauves) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czlvbend",
    "title": "Die Wegbiegung oben am Chemin des Lauves",
    "artist": "Paul Cézanne",
    "year": "1904–1906",
    "museum": "Fondation Beyeler, Riehen",
    "source": "Wikimedia Commons: «Paul Cézanne - Bend Of The Road At The Top Of The Chemin Des Lauves - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czlvterrace",
    "title": "Die Terrasse im Garten von Les Lauves",
    "artist": "Paul Cézanne",
    "year": "1902–1906",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Paul Cézanne - The Terrace at the Garden at Les Lauves - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czvallier",
    "title": "Der Gärtner Vallier",
    "artist": "Paul Cézanne",
    "year": "1906",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne, The Gardener Vallier, 1906, NGA 45877.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "czvallierbu",
    "title": "Der alte Gärtner",
    "artist": "Paul Cézanne",
    "year": "1906",
    "museum": "Sammlung E. G. Bührle, Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Paul Cézanne - Le Jardinier Vallier - Bührle.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czpaysan",
    "title": "Bildnis eines Bauern",
    "artist": "Paul Cézanne",
    "year": "1905–1906",
    "museum": "Museo Thyssen-Bornemisza, Madrid",
    "source": "Wikimedia Commons: «Paul Cézanne - Portrait de paysan - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "czwomanblue",
    "title": "Sitzende Frau in Blau",
    "artist": "Paul Cézanne",
    "year": "1902–1904",
    "museum": "Phillips Collection, Washington",
    "source": "Wikimedia Commons: «Paul Cézanne - Seated Woman in Blue - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'cezanne'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1839–1906";
  path.subtitle = "Von Aix nach Paris und zurück in die Provence, bis zum Atelier in Les Lauves";
  path.intro = "Reise mit Paul Cézanne durch sein ganzes Leben: von der Kindheit in Aix-en-Provence und der Freundschaft mit Émile Zola über das Jurastudium, die Académie Suisse in Paris, die dunkle «couillarde»-Zeit, die Wende mit Camille Pissarro in Pontoise und Auvers, die Ausstellungen von 1874 und 1877, L’Estaque, Hortense Fiquet und den Sohn Paul, den Jas de Bouffan und das Jahr 1886 – bis zur Montagne Sainte-Victoire, den Kartenspielern, den Äpfeln und Stillleben, der Ausstellung bei Ambroise Vollard 1895, dem Atelier in Les Lauves und Cézannes Tod in Aix am 22. Oktober 1906. Kurze Stationen, Bilder zum Ausmalen und Stimmen aus Briefen an Émile Bernard und an den Sohn Paul. Die Badenden und gewalttätigen frühen Szenen bleiben ausgespart.";
  path.ending = [
  "Am 15. Oktober 1906 wird Cézanne beim Malen im Freien von einem Unwetter überrascht. Er bricht zusammen; ein Fuhrmann bringt ihn nach Hause. Am folgenden Tag versucht er weiterzuarbeiten und bricht erneut zusammen.",
  "Am 22. Oktober 1906 stirbt Paul Cézanne in Aix-en-Provence, siebenundsechzig Jahre alt. Zurück bleiben die Landschaften der Provence, die Stillleben, die Bildnisse – und ein Werk, das die sichtbare Welt in feste, farbige Formen fasst."
];
  path.epilogue = "Paul Cézanne stirbt am 22. Oktober 1906 in Aix-en-Provence. Wenige Tage zuvor ist er beim Malen im Freien in einem Unwetter zusammengebrochen. Zurück bleiben die Montagne Sainte-Victoire, die Kartenspieler, die Äpfel, die Steinbrüche von Bibémus, das Château Noir, das Atelier in Les Lauves und die späten Bildnisse des Gärtners Vallier.";
  var stations = [
  {
    "id": "cezannemarne",
    "place": "Paris, die Marne und Chantilly",
    "when": "1886–1890",
    "map": {
      "x": 88,
      "y": 108
    },
    "mapLabel": "Marne",
    "intro": [
      "Nach dem Tod des Vaters im Oktober 1886 ist Cézanne durch die Erbschaft unabhängig. Hortense und der Sohn Paul sind legitimiert; oft leben sie in Paris, während er zwischen der Stadt und Aix wechselt.",
      "Er malt den Sohn als Jugendlichen, arbeitet an der Marne – etwa in Créteil – und 1888 in Chantilly nördlich von Paris. Um 1890 entsteht ein Selbstbildnis mit Palette.",
      "Die Jahre nach 1886 sind keine Abkehr von der Provence, aber sie führen ihn noch einmal an die Flüsse und Alleen der Île-de-France."
    ],
    "works": [
      {
        "pid": "czson87",
        "text": [
          "Der Sohn sitzt im Dreiviertelprofil, der Blick ruhig, die Form des Kopfes und der Schultern fest gebaut. Paul ist in diesen Jahren ein Jugendlicher.",
          "1886–1887 entsteht dieses Bildnis in der Zeit nach der Heirat, mit der der Sohn legitimiert wird. Es hängt in der National Gallery of Art in Washington."
        ],
        "fact": "1886–1887. National Gallery of Art, Washington."
      },
      {
        "pid": "czmarne",
        "text": [
          "Bäume stehen dicht am Wasser; das Ufer, das Laub und die Spiegelung sind in ruhigen, fest gefügten Farbflächen gebaut.",
          "Um 1888 arbeitet Cézanne an der Marne, ostwärts von Paris. Das Bild gehört heute der Eremitage in Sankt Petersburg."
        ],
        "fact": "um 1888. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "czcreteil",
        "text": [
          "Eine Brücke führt über den Fluss; Häuser, Ufer und Wasser liegen in klaren, ruhigen Bahnen.",
          "Das Bild ist 1888 datiert und entsteht in Créteil an der Marne, nicht weit von Paris."
        ],
        "fact": "1888. Sammlung nicht ermittelt."
      },
      {
        "pid": "czchantilly",
        "text": [
          "Eine Allee führt in die Tiefe: Stämme links und rechts, der Weg hell, das Laub als ruhige Decke darüber.",
          "1888 malt Cézanne in Chantilly nördlich von Paris. Das Bild hängt im Toledo Museum of Art."
        ],
        "fact": "1888. Toledo Museum of Art."
      },
      {
        "pid": "czselfpalette",
        "text": [
          "Cézanne steht mit der Palette vor der Leinwand, der Blick fest, die Form des Kopfes und der Schulter in wenigen, klaren Flächen.",
          "Das Selbstbildnis entsteht um 1890. Es gehört der Sammlung E. G. Bührle und hängt im Kunsthaus Zürich."
        ],
        "fact": "um 1890. Sammlung E. G. Bührle, Kunsthaus Zürich."
      }
    ]
  },
  {
    "id": "cezannesv",
    "place": "Die Montagne Sainte-Victoire",
    "when": "1882–1897",
    "map": {
      "x": 152,
      "y": 150
    },
    "mapLabel": "Sainte-Victoire",
    "intro": [
      "Östlich von Aix erhebt sich die Montagne Sainte-Victoire. Ab den 1880er Jahren wird der Berg für Cézanne ein zentrales Motiv: mit der grossen Kiefer im Vordergrund, mit dem Viadukt im Arc-Tal, von Valcros aus.",
      "Dazu kommen Blicke auf das Haus Bellevue mit dem Taubenschlag, das der Schwester Rose und ihrem Mann Maxime Conil gehört, und später die grosse Kiefer über roter Erde.",
      "Cézanne kehrt zu diesem Berg über zwei Jahrzehnte zurück. Jede Fassung sucht dieselbe Form in einer neuen Ordnung aus Farbe und Fläche."
    ],
    "works": [
      {
        "pid": "czsvpine",
        "text": [
          "Im Vordergrund steht eine grosse Kiefer; dahinter erhebt sich die Montagne Sainte-Victoire als klare, ruhige Form über der Ebene.",
          "Um 1887 wird der Berg östlich von Aix zu einem wiederkehrenden Motiv. Diese Fassung hängt in der Courtauld Gallery in London."
        ],
        "fact": "um 1887. Courtauld Gallery, London."
      },
      {
        "pid": "czsvviaduct",
        "text": [
          "Über die Ebene zieht sich das Viadukt des Arc-Tals; darüber steht die Montagne Sainte-Victoire fest und hell.",
          "Das Bild entsteht 1882–1885. Cézanne ordnet Ebene, Viadukt und Berg zu einer ruhigen, gebauten Landschaft."
        ],
        "fact": "1882–1885. The Metropolitan Museum of Art, New York."
      },
      {
        "pid": "czsvvalcros",
        "text": [
          "Von Valcros aus liegen Viadukt und Ebene vor dem Berg; die Formen sind klar gestuft, der Himmel weit.",
          "Das Bild ist 1887 datiert. Cézanne sucht denselben Berg von einem anderen Standort aus."
        ],
        "fact": "1887. Sammlung nicht ermittelt."
      },
      {
        "pid": "czbellevue",
        "text": [
          "Das Haus und der runde Taubenschlag stehen fest in der Landschaft; Mauern, Dach und Grün sind in wenigen, klaren Flächen gesetzt.",
          "Um 1890 malt Cézanne Bellevue, ein Anwesen westlich von Aix, das der Schwester Rose und ihrem Mann Maxime Conil gehört. Das Bild hängt im Museum Folkwang in Essen."
        ],
        "fact": "um 1890. Museum Folkwang, Essen."
      },
      {
        "pid": "czgrandpin",
        "text": [
          "Eine grosse Kiefer steht über rötlichem Boden; Stamm, Krone und Erde sind in ruhigen, kräftigen Farbflächen gebaut.",
          "Das Bild entsteht 1895–1897 in der Landschaft bei Aix. Es gehört der Eremitage in Sankt Petersburg."
        ],
        "fact": "1895–1897. Eremitage, Sankt Petersburg."
      }
    ]
  },
  {
    "id": "cezannecards",
    "place": "Die Kartenspieler",
    "when": "1890–1896",
    "map": {
      "x": 140,
      "y": 138
    },
    "mapLabel": "Karten",
    "intro": [
      "In den frühen 1890er Jahren malt Cézanne eine Folge von Kartenspielern. Als Modelle dienen ihm Bauern und Arbeiter vom Jas de Bouffan. Es entstehen mehrere Fassungen mit zwei oder mehr Spielern.",
      "Zur selben Welt gehören Einzelstudien: ein Kartenspieler im Profil, ein Mann mit Pfeife, ein sitzender Bauer. Um 1895 kommt das Bildnis einer Frau mit Kaffeekanne hinzu.",
      "Die Figuren sitzen still, ohne dramatische Handlung. Cézanne baut Körper, Tisch und Raum aus festen Farbflächen."
    ],
    "works": [
      {
        "pid": "cards",
        "text": [
          "Zwei Männer sitzen an einem kleinen Tisch und spielen Karten, ohne dass einer den anderen ansieht. Die Figuren und der Tisch sind aus ruhigen, festen Farbflächen gebaut.",
          "Um 1894–1895 entsteht diese Fassung mit zwei Spielern. Als Modelle dienen Bauern vom Gut der Familie. Das Bild hängt im Musée d’Orsay in Paris."
        ],
        "fact": "um 1894–1895. Musée d’Orsay, Paris."
      },
      {
        "pid": "czcardmet",
        "text": [
          "Zwei Spieler sitzen einander gegenüber, zwischen ihnen eine Flasche auf dem Tisch; die Körper sind schwer und ruhig, der Raum knapp.",
          "Diese frühere Fassung von 1890–1892 hängt im Metropolitan Museum of Art in New York. Cézanne malt das Motiv in mehreren Varianten."
        ],
        "fact": "1890–1892. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "czcardplayer",
        "text": [
          "Ein einzelner Spieler sitzt im Profil am Tisch, die Karten in der Hand, der Hut dunkel, die Haltung still.",
          "Die Studie von 1890–1892 gehört zum Kreis der Kartenspieler-Bilder. Sie hängt im Musée d’Orsay in Paris."
        ],
        "fact": "1890–1892. Musée d’Orsay, Paris."
      },
      {
        "pid": "czpipe",
        "text": [
          "Ein Mann mit Hut und Pfeife sitzt vor einem einfachen Grund; das Gesicht ist fest modelliert, der Blick nach innen gerichtet.",
          "1892–1896 entsteht dieses Bildnis eines Aixer Bauern, im Umkreis der Kartenspieler. Es hängt in der National Gallery of Art in Washington."
        ],
        "fact": "1892–1896. National Gallery of Art, Washington."
      },
      {
        "pid": "czpeasant",
        "text": [
          "Ein Bauer sitzt mit gekreuzten Armen, der Blick gesenkt, Jacke und Hose in gedämpften, festen Tönen.",
          "Um 1892 malt Cézanne diesen sitzenden Bauern. Das Bild hängt im Metropolitan Museum of Art in New York."
        ],
        "fact": "um 1892. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "czcoffee",
        "text": [
          "Eine Frau sitzt aufrecht am Tisch, neben ihr eine Kaffeekanne und eine Tasse; die Haltung ist streng, die Gegenstände klar und fest.",
          "Um 1895 entsteht dieses Bildnis, wohl einer Hausangestellten in Aix. Es hängt im Musée d’Orsay in Paris."
        ],
        "fact": "um 1895. Musée d’Orsay, Paris."
      }
    ]
  },
  {
    "id": "cezannemadame",
    "place": "Hortense Fiquet",
    "when": "1886–1895",
    "map": {
      "x": 96,
      "y": 128
    },
    "mapLabel": "Hortense",
    "intro": [
      "Nach der Heirat von 1886 malt Cézanne Hortense Fiquet weiter: im roten Kleid, im gelben Sessel, in Blau, 1891 im Gewächshaus, 1891–1892 mit grünem Hut.",
      "Hortense lebt in diesen Jahren oft mit dem Sohn in Paris; Cézanne arbeitet vor allem in Aix. Die Bildnisse suchen nicht die vertraute Nähe, sondern eine feste Ordnung aus Haltung, Kleid und Raum.",
      "Über die Jahre entstehen mehr als vierzig gemalte Bildnisse Hortenses. Die fünf Bilder dieser Station gehören zu den bekannten Fassungen der späten 1880er und frühen 1890er Jahre."
    ],
    "works": [
      {
        "pid": "czmadred",
        "text": [
          "Hortense sitzt im roten Kleid, der Oberkörper leicht gedreht, der Blick ruhig; das Rot steht fest gegen den gebauten Raum.",
          "Um 1888–1890 malt Cézanne seine Frau in diesem roten Kleid. Das Bild hängt im Metropolitan Museum of Art in New York."
        ],
        "fact": "um 1888–1890. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "czconserv",
        "text": [
          "Hortense sitzt im Gewächshaus, hinter ihr Pflanzen und das Gerüst der Scheiben; die Haltung ist aufrecht, das Gesicht klar umrissen.",
          "Das Bild ist 1891 datiert. Es gehört zu den bekanntesten Bildnissen Hortenses und hängt im Metropolitan Museum of Art."
        ],
        "fact": "1891. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "czmadyellow",
        "text": [
          "Hortense sitzt in einem gelben Sessel, die Hände im Schoss, das Kleid dunkelrot, der Grund ruhig und flächig.",
          "1888–1890 entsteht dieses Bildnis. Es hängt im Art Institute of Chicago."
        ],
        "fact": "1888–1890. Art Institute of Chicago."
      },
      {
        "pid": "czmadblue",
        "text": [
          "Hortense trägt ein blaues Kleid; der Körper ist fest in den Raum gesetzt, der Hintergrund in ruhige Bahnen geteilt.",
          "Um 1888–1890 malt Cézanne dieses Bildnis. Es hängt im Museum of Fine Arts in Houston."
        ],
        "fact": "um 1888–1890. Museum of Fine Arts, Houston."
      },
      {
        "pid": "czmadhat",
        "text": [
          "Hortense trägt einen grünen Hut; Kopf, Hut und Oberkörper bilden eine ruhige, geschlossene Form vor dem dunkleren Grund.",
          "1891–1892 entsteht dieses Bildnis. Es gehört der Barnes Foundation in Philadelphia."
        ],
        "fact": "1891–1892. Barnes Foundation, Philadelphia."
      }
    ]
  },
  {
    "id": "cezanneapples",
    "place": "Äpfel und Stillleben",
    "when": "1890–1905",
    "map": {
      "x": 118,
      "y": 132
    },
    "mapLabel": "Äpfel",
    "intro": [
      "Das Stillleben bleibt für Cézanne ein eigenes Feld, neben der Landschaft und dem Bildnis. Äpfel, Pfirsiche, Zwiebeln, ein Ingwertopf, ein Vorhang, ein Tischtuch: alltägliche Dinge, fest und ruhig gesetzt.",
      "Der Äpfelkorb um 1893 gehört zu den bekanntesten Fassungen. In denselben Jahren entstehen Stillleben mit Granatapfel und Birnen, mit Auberginen, mit Zwiebeln und mit Pfirsichen auf einem Teller.",
      "Um 1905, in den letzten Jahren, kehrt er noch einmal zu Äpfeln und Pfirsichen zurück. Die leichte Schräge der Tische und die feste Farbfläche bleiben seine Mittel."
    ],
    "works": [
      {
        "pid": "apples",
        "text": [
          "Äpfel, eine Flasche, ein Gebäck und ein geknicktes Tischtuch: Cézanne setzt alltägliche Dinge so, dass sie wie eine kleine, stabile Welt wirken.",
          "Um 1893 entsteht dieser Äpfelkorb. Die leichte Schräge des Tisches ist Absicht. Das Bild hängt im Art Institute of Chicago."
        ],
        "fact": "um 1893. Art Institute of Chicago."
      },
      {
        "pid": "czginger",
        "text": [
          "Ein Ingwertopf steht zwischen Granatapfel, Birnen und einem Tuch; die Gegenstände sind fest gesetzt, die Farben warm und ruhig.",
          "Das Stillleben ist 1893 datiert. Es gehört der Phillips Collection in Washington."
        ],
        "fact": "1893. Phillips Collection, Washington."
      },
      {
        "pid": "czeggplant",
        "text": [
          "Auberginen, ein Ingwertopf und Früchte liegen auf dem Tischtuch; die dunklen Früchte und das weisse Tuch halten einander die Waage.",
          "1893–1894 entsteht dieses Stillleben. Es hängt im Metropolitan Museum of Art in New York."
        ],
        "fact": "1893–1894. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "czcurtain",
        "text": [
          "Hinter Früchten, Krug und Tuch fällt ein gemusterter Vorhang; der Stoff bringt Bewegung in die fest gebaute Anordnung.",
          "Um 1898 entsteht dieses Stillleben. Es gehört der Eremitage in Sankt Petersburg."
        ],
        "fact": "um 1898. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "czonions",
        "text": [
          "Zwiebeln, eine Flasche und ein Tuch liegen auf der Platte; die runden Formen und das Weiss des Stoffes sind klar gegeneinander gesetzt.",
          "1896–1898 malt Cézanne dieses Stillleben. Es hängt im Musée d’Orsay in Paris."
        ],
        "fact": "1896–1898. Musée d’Orsay, Paris."
      },
      {
        "pid": "czgetty",
        "text": [
          "Äpfel liegen neben Krug und Tuch; jeder Apfel hat sein eigenes Gewicht, der Tisch bleibt eine ruhige Fläche.",
          "1893–1894 entsteht dieses Stillleben. Es gehört dem J. Paul Getty Museum in Los Angeles."
        ],
        "fact": "1893–1894. J. Paul Getty Museum, Los Angeles."
      },
      {
        "pid": "czpeaches",
        "text": [
          "Vier Pfirsiche liegen auf einem Teller; die runden Früchte und die einfache Platte sind mit wenigen, klaren Tönen gebaut.",
          "Um 1890–1894 entsteht dieses kleine Stillleben. Es gehört der Barnes Foundation in Philadelphia."
        ],
        "fact": "um 1890–1894. Barnes Foundation, Philadelphia."
      },
      {
        "pid": "czapplpeach",
        "text": [
          "Äpfel und Pfirsiche liegen vor einem Krug und einem Tuch; die Formen sind weit, die Farbe leuchtet ruhig und dicht.",
          "Um 1905, in den letzten Jahren, entsteht dieses Stillleben. Es hängt in der National Gallery of Art in Washington."
        ],
        "fact": "um 1905. National Gallery of Art, Washington."
      }
    ]
  },
  {
    "id": "cezannevollard",
    "place": "Paris · Vollard und die späte Anerkennung",
    "when": "1895–1900",
    "map": {
      "x": 84,
      "y": 122
    },
    "mapLabel": "Vollard",
    "intro": [
      "Im November und Dezember 1895 zeigt Ambroise Vollard in seiner Galerie in der Rue Laffitte in Paris die erste grosse Einzelausstellung Cézannes. Die Anerkennung kommt spät, aber sie bleibt.",
      "1895–1896 porträtiert Cézanne den Kritiker Gustave Geffroy; 1899 sitzt Vollard selbst. Dazu kommen ein Selbstbildnis mit Baskenmütze, das Bildnis einer jungen Italienerin und 1896 der See von Annecy, gemalt während eines Aufenthalts in Talloires.",
      "1897 stirbt die Mutter. 1899 wird der Jas de Bouffan verkauft. Cézanne bleibt in Aix und sucht neue Arbeitsorte in der Landschaft östlich der Stadt."
    ],
    "works": [
      {
        "pid": "czgeffroy",
        "text": [
          "Der Kritiker sitzt an seinem Schreibtisch, umgeben von Büchern; der Raum ist eng gebaut, die Sitzung lang und unvollendet gelassen.",
          "1895–1896 porträtiert Cézanne Gustave Geffroy, der sich für seine Malerei eingesetzt hat. Das Bild hängt im Musée d’Orsay in Paris."
        ],
        "fact": "1895–1896. Musée d’Orsay, Paris."
      },
      {
        "pid": "czvollard",
        "text": [
          "Vollard sitzt mit gesenktem Blick, der Schädel kahl, die Hände im Schoss; die Form ist schwer und ruhig, fast geschlossen.",
          "1899 malt Cézanne den Kunsthändler, der ihm 1895 die erste grosse Einzelausstellung gegeben hat. Das Bild hängt im Petit Palais in Paris."
        ],
        "fact": "1899. Petit Palais, Paris."
      },
      {
        "pid": "czselfberet",
        "text": [
          "Cézanne trägt eine dunkle Baskenmütze; das Gesicht ist knapp modelliert, der Blick fest, der Grund schlicht.",
          "1898–1900 entsteht dieses späte Selbstbildnis. Es hängt im Museum of Fine Arts in Boston."
        ],
        "fact": "1898–1900. Museum of Fine Arts, Boston."
      },
      {
        "pid": "czitalian",
        "text": [
          "Eine junge Frau lehnt am Tisch, den Kopf auf die Hand gestützt; der Stoff des Gewandes und die ruhige Haltung tragen das Bild.",
          "Um 1895–1900 entsteht dieses Bildnis. Es gehört dem J. Paul Getty Museum in Los Angeles."
        ],
        "fact": "um 1895–1900. J. Paul Getty Museum, Los Angeles."
      },
      {
        "pid": "czannecy",
        "text": [
          "Der See liegt still zwischen Bergen; im Vordergrund ein Baum, gegenüber ein Schloss als klare, gebaute Form.",
          "1896 hält sich Cézanne mit der Familie in Talloires am Lac d’Annecy auf. Das Bild hängt in der Courtauld Gallery in London."
        ],
        "fact": "1896. Courtauld Gallery, London."
      }
    ]
  },
  {
    "id": "cezannebibemus",
    "place": "Der Steinbruch Bibémus",
    "when": "1895–1904",
    "map": {
      "x": 158,
      "y": 162
    },
    "mapLabel": "Bibémus",
    "intro": [
      "Östlich von Aix liegt der Steinbruch Bibémus. Ab der Mitte der 1890er Jahre mietet Cézanne dort eine Hütte und arbeitet vor den ockerfarbenen Felswänden, den Kiefern und dem Ausblick auf die Sainte-Victoire.",
      "Es entstehen mehrere Fassungen des Bruchs: enge Felsräume, weitere Blicke mit Bäumen, und Ansichten, in denen der Berg über dem Stein erscheint.",
      "Bis in die ersten Jahre des neuen Jahrhunderts kehrt er nach Bibémus zurück. Der Stein selbst wird zum Motiv, fest und hell gebaut."
    ],
    "works": [
      {
        "pid": "czbibquarry",
        "text": [
          "Ockerfarbene Felswände stehen hinter Kiefern und Gebüsch; die Steinbruchkanten sind wie gebaute Flächen in die Landschaft gesetzt.",
          "1895 malt Cézanne im Steinbruch Bibémus östlich von Aix, wo er sich eine Hütte mietet. Das Bild gehört der Barnes Foundation."
        ],
        "fact": "1895. Barnes Foundation, Philadelphia."
      },
      {
        "pid": "czbibbarnes",
        "text": [
          "Felsen, Bäume und der rötliche Stein des Bruchs greifen ineinander; Licht und Schatten teilen die Flächen klar.",
          "1894–1895 entsteht diese Fassung. Auch sie gehört der Barnes Foundation in Philadelphia."
        ],
        "fact": "1894–1895. Barnes Foundation, Philadelphia."
      },
      {
        "pid": "czbibsv",
        "text": [
          "Vom Steinbruch aus erscheint der Berg über Felsen und Kiefern; die ockerfarbenen Kanten führen den Blick zur fernen Silhouette.",
          "Um 1897 verbindet Cézanne den Bruch von Bibémus mit der Sainte-Victoire. Das Bild hängt im Baltimore Museum of Art."
        ],
        "fact": "um 1897. Baltimore Museum of Art."
      },
      {
        "pid": "czbibfolk",
        "text": [
          "Hohe, gelbliche Felswände öffnen sich wie ein Innenraum; oben schliesst das Grün der Bäume den Blick.",
          "Um 1895 entsteht diese Ansicht des Bruchs. Cézanne kehrt in diesen Jahren immer wieder nach Bibémus zurück."
        ],
        "fact": "um 1895. Museum Folkwang, Essen."
      },
      {
        "pid": "czbibnelson",
        "text": [
          "Die Felswände stehen steil und hell; Bäume fassen den oberen Rand, der Stein selbst wird zum Motiv.",
          "1898–1900 entsteht diese Fassung. Sie hängt im Nelson-Atkins Museum of Art in Kansas City."
        ],
        "fact": "1898–1900. Nelson-Atkins Museum of Art, Kansas City."
      },
      {
        "pid": "czbibrocks",
        "text": [
          "Äste greifen über die Felsen; Stein und Laub sind in kurzen, dichten Farbflecken ineinandergefügt.",
          "1900–1904, in einer späten Fassung, bleibt Bibémus ein Ort der Arbeit. Das Bild hängt im Petit Palais in Paris."
        ],
        "fact": "1900–1904. Petit Palais, Paris."
      }
    ]
  },
  {
    "id": "cezannechateau",
    "place": "Château Noir",
    "when": "1890–1904",
    "map": {
      "x": 164,
      "y": 148
    },
    "mapLabel": "Château Noir",
    "intro": [
      "An der Strasse nach Le Tholonet steht das Château Noir, ein Haus im Park östlich von Aix. Cézanne arbeitet dort über Jahre: er mietet zeitweise einen Raum, malt die Fassade, den Park, die Zisterne, den Mühlstein und den Waldweg.",
      "Oft erscheint das Haus zusammen mit der Montagne Sainte-Victoire. Frühe Blicke setzen schon um 1887–1890 ein; die dichten Fassungen gehören vor allem in die 1890er Jahre und bis 1904.",
      "Als dieser Arbeitsort wegfällt, lässt Cézanne sich nördlich der Stadt ein eigenes Atelier bauen – in Les Lauves."
    ],
    "works": [
      {
        "pid": "czcnnga",
        "text": [
          "Das Haus steht zwischen Bäumen, die Fassade warm und fest, das Laub dicht darumgelegt.",
          "1900–1904 malt Cézanne das Château Noir östlich von Aix, an der Strasse nach Le Tholonet. Das Bild hängt in der National Gallery of Art in Washington."
        ],
        "fact": "1900–1904. National Gallery of Art, Washington."
      },
      {
        "pid": "czcnmaria",
        "text": [
          "Im Vordergrund steht ein einfaches Haus, dahinter erscheint das Château Noir zwischen Bäumen; der Weg führt in die Tiefe.",
          "Um 1895 entsteht dieser Blick. Das Bild hängt im Kimbell Art Museum in Fort Worth."
        ],
        "fact": "um 1895. Kimbell Art Museum, Fort Worth."
      },
      {
        "pid": "czcnmill",
        "text": [
          "Ein alter Mühlstein liegt zwischen Felsen und Stämmen; das Licht fällt in den Park, die Formen sind schwer und ruhig.",
          "1898–1900 malt Cézanne im Park des Château Noir. Das Bild hängt im Philadelphia Museum of Art."
        ],
        "fact": "1898–1900. Philadelphia Museum of Art."
      },
      {
        "pid": "czcnsv",
        "text": [
          "Das Château Noir liegt im Mittelgrund, darüber erhebt sich die Sainte-Victoire; Haus und Berg sind in dieselbe gebaute Ordnung gefügt.",
          "Das Bild ist 1904 datiert. Es hängt im Artizon Museum in Tokio."
        ],
        "fact": "1904. Artizon Museum, Tokio."
      },
      {
        "pid": "czcncistern",
        "text": [
          "Zwischen Stämmen und Felsen liegt die Zisterne; das Dunkel des Parks und das helle Mauerwerk halten einander die Waage.",
          "Um 1900 entsteht dieser Blick in den Park. Das Bild gehört dem Princeton University Art Museum."
        ],
        "fact": "um 1900. Princeton University Art Museum."
      },
      {
        "pid": "czcnview",
        "text": [
          "Das Haus erscheint zwischen Bäumen auf der Anhöhe; die Fassade ist hell, die Umgebung dicht und grün.",
          "Um 1887–1890, in einer frühen Fassung, hält Cézanne das Château Noir fest. Er wird den Ort über Jahre wieder aufsuchen."
        ],
        "fact": "um 1887–1890. Sammlung nicht ermittelt."
      },
      {
        "pid": "czsvnoir",
        "text": [
          "Das Château Noir liegt vor der Ebene, darüber steht die Sainte-Victoire; beide Formen sind knapp und fest gesetzt.",
          "Um 1890–1895 verbindet Cézanne das Haus mit dem Berg. Der Standort bleibt die Landschaft östlich von Aix."
        ],
        "fact": "um 1890–1895. Sammlung nicht ermittelt."
      },
      {
        "pid": "czforestpath",
        "text": [
          "Ein Weg führt durch den Wald, die Stämme eng, das Licht in Flecken auf dem Boden.",
          "1900–1902 entsteht dieser Waldweg vom Mas Jolie zum Château Noir. Das Bild gehört der Fondation Beyeler in Riehen."
        ],
        "fact": "1900–1902. Fondation Beyeler, Riehen."
      }
    ]
  },
  {
    "id": "cezannelauves",
    "place": "Das Atelier in Les Lauves",
    "when": "1902–1906",
    "map": {
      "x": 144,
      "y": 144
    },
    "mapLabel": "Les Lauves",
    "intro": [
      "1901 kauft Cézanne ein Grundstück am Chemin des Lauves, nördlich von Aix; 1902 steht das Atelier. Von hier aus malt er die späten Blicke auf die Sainte-Victoire, den Garten, die Terrasse und die Wegbiegung oben am Hang.",
      "1904 richtet der Salon d’Automne in Paris einen Raum für sein Werk ein. In denselben Jahren schreibt er an den jungen Maler Émile Bernard und legt ihm dar, die Natur durch Zylinder, Kugel und Kegel zu behandeln.",
      "1906 entsteht auch das Cabanon de Jourdan am Rand der Stadt. Das Atelier in Les Lauves bleibt bis zuletzt sein Arbeitsort in Aix."
    ],
    "works": [
      {
        "pid": "czlvmet",
        "text": [
          "Der Berg steht in weiten, leuchtenden Farbflächen da; die Ebene davor ist in kurze, dichte Pinselsetzungen gefügt.",
          "1902–1906 malt Cézanne die Sainte-Victoire von den Höhen bei Les Lauves aus, nördlich von Aix. Das Bild hängt im Metropolitan Museum of Art in New York."
        ],
        "fact": "1902–1906. Metropolitan Museum of Art, New York.",
        "quote": {
          "text": "Erlauben Sie mir, zu wiederholen, was ich Ihnen hier gesagt habe: behandeln Sie die Natur durch den Zylinder, die Kugel, den Kegel, das Ganze in die Perspektive gesetzt, und zwar so, dass jede Seite eines Gegenstandes, einer Fläche, sich auf einen zentralen Punkt richtet.",
          "cite": "Brief an Émile Bernard, Aix-en-Provence, 15. April 1904."
        }
      },
      {
        "pid": "czlvsv",
        "text": [
          "Von Les Lauves aus liegt der Berg frei über der Ebene; Himmel und Hang gehen in weiten, kühlen und warmen Bahnen ineinander über.",
          "Um 1904–1906 entsteht diese späte Ansicht. Sie hängt im Puschkin-Museum in Moskau."
        ],
        "fact": "um 1904–1906. Puschkin-Museum, Moskau."
      },
      {
        "pid": "czlvgarden",
        "text": [
          "Im Garten stehen Bäume und Gebüsch in offenen, leuchtenden Farbflecken; der Raum bleibt luftig und unvollständig geschlossen.",
          "Um 1906, in einem der letzten Jahre, malt Cézanne den Garten am Atelier. Das Bild gehört der Phillips Collection in Washington."
        ],
        "fact": "um 1906. Phillips Collection, Washington.",
        "quote": {
          "text": "Schliesslich will ich dir sagen, dass ich als Maler vor der Natur klarer werde, dass aber bei mir die Verwirklichung meiner Empfindungen immer sehr mühsam bleibt. Ich kann die Intensität nicht erreichen, die sich meinen Sinnen entfaltet; ich habe nicht diese prächtige Farbfülle, die die Natur belebt.",
          "cite": "Brief an den Sohn Paul, 8. September 1906."
        }
      },
      {
        "pid": "czlvbend",
        "text": [
          "Der Weg biegt sich durch Bäume und Häuser; die Kurve selbst wird zur gebauten Form, der Ausblick bleibt knapp.",
          "1904–1906 entsteht dieser Blick oben am Chemin des Lauves. Das Bild gehört der Fondation Beyeler in Riehen."
        ],
        "fact": "1904–1906. Fondation Beyeler, Riehen."
      },
      {
        "pid": "czlvterrace",
        "text": [
          "Die Terrasse öffnet sich unter Bäumen; Mauer, Laub und der helle Grund sind in weiten, ruhigen Flächen gesetzt.",
          "1902–1906 malt Cézanne die Terrasse am neuen Atelier, das er sich nördlich von Aix hat bauen lassen."
        ],
        "fact": "1902–1906. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "cezanne1906",
    "place": "Vallier und die letzten Monate",
    "when": "1902–1906",
    "map": {
      "x": 148,
      "y": 168
    },
    "mapLabel": "1906",
    "intro": [
      "In den letzten Jahren porträtiert Cézanne wiederholt seinen Gärtner Vallier, oft auf der Terrasse des Ateliers. Dazu kommen das Bildnis eines Bauern und eine sitzende Frau in Blau.",
      "An Émile Bernard schreibt er am 23. Oktober 1905, er schulde ihm die Wahrheit in der Malerei. Am 8. September 1906 sagt er dem Sohn Paul, er werde als Maler vor der Natur klarer, die Verwirklichung seiner Empfindungen bleibe aber mühsam.",
      "Am 15. Oktober 1906 wird er beim Malen im Freien von einem Unwetter überrascht und bricht zusammen; ein Fuhrmann bringt ihn nach Hause. Am folgenden Tag versucht er weiterzuarbeiten und bricht erneut zusammen. Am 22. Oktober 1906 stirbt Paul Cézanne in Aix-en-Provence."
    ],
    "works": [
      {
        "pid": "czvallier",
        "text": [
          "Vallier sitzt im Freien, der Bart hell, die Haltung ruhig; Jacke und Hose sind in weiten, festen Farbflächen gebaut.",
          "1906 porträtiert Cézanne wiederholt seinen Gärtner Vallier, oft auf der Terrasse des Ateliers in Les Lauves. Das Bild hängt in der National Gallery of Art in Washington."
        ],
        "fact": "1906. National Gallery of Art, Washington.",
        "quote": {
          "text": "Ich schulde Ihnen die Wahrheit in der Malerei, und ich werde sie Ihnen sagen.",
          "cite": "Brief an Émile Bernard, Aix, 23. Oktober 1905."
        }
      },
      {
        "pid": "czvallierbu",
        "text": [
          "Der alte Mann sitzt mit verschränkten Armen, der Blick gesenkt, die Form des Körpers schwer und still.",
          "Auch diese Fassung von 1906 zeigt Vallier. Sie gehört der Sammlung E. G. Bührle und hängt im Kunsthaus Zürich."
        ],
        "fact": "1906. Sammlung E. G. Bührle, Kunsthaus Zürich."
      },
      {
        "pid": "czpaysan",
        "text": [
          "Ein Bauer sitzt vor einem einfachen Grund, die Hände ruhen, das Gesicht ist knapp und fest modelliert.",
          "1905–1906 entsteht dieses späte Bildnis. Es hängt im Museo Thyssen-Bornemisza in Madrid."
        ],
        "fact": "1905–1906. Museo Thyssen-Bornemisza, Madrid."
      },
      {
        "pid": "czwomanblue",
        "text": [
          "Eine Frau sitzt in einem blauen Kleid, die Hände im Schoss, der Körper als ruhige, geschlossene Form.",
          "1902–1904 entsteht dieses Bildnis. Es gehört der Phillips Collection in Washington."
        ],
        "fact": "1902–1904. Phillips Collection, Washington."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
