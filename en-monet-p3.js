// v6.9 English content for Monet’s life journey, Part 3.
// Extends window.EN; does not rewrite en-monet.js or en-monet-p2.js entries.
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Privatbesitz": "Private collection",
  "Lettisches Nationales Kunstmuseum, Riga": "Latvian National Museum of Art, Riga",
  "Nationalmuseum für westliche Kunst, Tokio": "National Museum of Western Art, Tokyo",
  "White House, Washington": "The White House, Washington",
  "Musée des Beaux-Arts, Montreal": "Montreal Museum of Fine Arts",
  "Artizon Museum, Tokio": "Artizon Museum, Tokyo",
  "Yale University Art Gallery, New Haven": "Yale University Art Gallery, New Haven"
});
  EN.works = Object.assign(EN.works || {}, {
  "rouensun": {
    "title": "Rouen Cathedral, West Façade, Sunlight",
    "museum": "National Gallery of Art, Washington"
  },
  "rouenwest": {
    "title": "Rouen Cathedral, West Façade",
    "museum": "National Gallery of Art, Washington"
  },
  "rouengrey": {
    "title": "Rouen Cathedral, the Portal, Grey Weather",
    "museum": "Musée d’Orsay, Paris"
  },
  "rouenportal": {
    "title": "Rouen Cathedral: The Portal (Sunlight)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rouenmorn": {
    "title": "Rouen Cathedral, Façade and Tour d’Albane (Morning Effect)",
    "museum": "Museum of Fine Arts, Boston"
  },
  "rouengetty": {
    "title": "The Portal of Rouen Cathedral in Morning Light",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "rouenharmonia": {
    "title": "Rouen Cathedral, Harmony in Blue and Gold",
    "museum": "Private collection"
  },
  "sandvsnow": {
    "title": "Sandvika Village in the Snow",
    "museum": "Latvian National Museum of Art, Riga"
  },
  "kolsaas": {
    "title": "Mount Kolsaas",
    "museum": "Musée Marmottan Monet, Paris"
  },
  "kolsaas2": {
    "title": "Mount Kolsaas at the Decline of Day",
    "museum": "Private collection"
  },
  "fjordoslo": {
    "title": "The Fjord near Christiania",
    "museum": "Private collection"
  },
  "fjordbank": {
    "title": "On the Banks of the Fjord near Christiania",
    "museum": "Private collection"
  },
  "mornseine": {
    "title": "Morning on the Seine",
    "museum": "National Museum of Western Art, Tokyo"
  },
  "mornmet": {
    "title": "Morning on the Seine near Giverny",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mornbeau": {
    "title": "Morning on the Seine, Good Weather",
    "museum": "The White House, Washington"
  },
  "mornw1436": {
    "title": "Morning on the Seine, 1896",
    "museum": "Private collection"
  },
  "mornw1484": {
    "title": "Morning on the Seine, 1897",
    "museum": "Private collection"
  },
  "japabridge": {
    "title": "The Japanese Footbridge",
    "museum": "National Gallery of Art, Washington"
  },
  "lilybridge": {
    "title": "Water Lilies and Japanese Bridge",
    "museum": "Princeton University Art Museum"
  },
  "lilypondnl": {
    "title": "The Water-Lily Pond",
    "museum": "National Gallery, London"
  },
  "lilypondga": {
    "title": "The Water-Lily Pond (1904)",
    "museum": "Private collection"
  },
  "lilyaic": {
    "title": "Water Lily Pond, 1900",
    "museum": "Art Institute of Chicago"
  },
  "irisyale": {
    "title": "The Artist’s Garden in Giverny",
    "museum": "Yale University Art Gallery, New Haven"
  },
  "lilywl": {
    "title": "Water Lilies, 1904",
    "museum": "Private collection"
  },
  "parlsun": {
    "title": "Houses of Parliament, Sunlight Effect",
    "museum": "Brooklyn Museum, New York"
  },
  "parlfog": {
    "title": "The Houses of Parliament (Effect of Fog)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "parlset": {
    "title": "The Houses of Parliament, Sunset",
    "museum": "Private collection"
  },
  "waterloosun": {
    "title": "Waterloo Bridge, London, at Sunset",
    "museum": "National Gallery of Art, Washington"
  },
  "waterloodusk": {
    "title": "Waterloo Bridge, London, at Dusk",
    "museum": "National Gallery of Art, Washington"
  },
  "waterlogrey": {
    "title": "Waterloo Bridge, Gray Day",
    "museum": "National Gallery of Art, Washington"
  },
  "charingga": {
    "title": "Charing Cross Bridge",
    "museum": "Private collection"
  },
  "charing2": {
    "title": "Charing Cross Bridge, circa 1900",
    "museum": "Private collection"
  },
  "sangiorgio": {
    "title": "The Church of San Giorgio Maggiore, Venice",
    "museum": "Indianapolis Museum of Art"
  },
  "sangiodusk": {
    "title": "San Giorgio Maggiore at Twilight",
    "museum": "National Museum Cardiff"
  },
  "dogepalace": {
    "title": "The Doge’s Palace",
    "museum": "Private collection"
  },
  "dogemet": {
    "title": "The Doge’s Palace Seen from San Giorgio Maggiore",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "palazzomula": {
    "title": "Palazzo da Mula, Venice",
    "museum": "National Gallery of Art, Washington"
  },
  "palazzodario": {
    "title": "The Palazzo Dario",
    "museum": "National Museum Cardiff"
  },
  "grandcanal2": {
    "title": "The Grand Canal, Venice",
    "museum": "Museum of Fine Arts, Boston"
  },
  "pathiris": {
    "title": "The Path through the Irises",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "willowk": {
    "title": "Weeping Willow",
    "museum": "Private collection"
  },
  "willow2": {
    "title": "Weeping Willow, 1918–1919",
    "museum": "Kimbell Art Museum, Fort Worth"
  },
  "willow3": {
    "title": "Weeping Willow, another version",
    "museum": "Private collection"
  },
  "irislate": {
    "title": "Irises",
    "museum": "Private collection"
  },
  "rosegarden": {
    "title": "The Artist’s House Seen from the Rose Garden",
    "museum": "Musée Marmottan Monet, Paris"
  },
  "latebridge2": {
    "title": "The Japanese Bridge, late version",
    "museum": "Private collection"
  },
  "lilyset": {
    "title": "The Water Lilies: Setting Sun",
    "museum": "Musée de l’Orangerie, Paris"
  },
  "lilyblue": {
    "title": "Blue Water Lilies",
    "museum": "Musée d’Orsay, Paris"
  },
  "lilypool": {
    "title": "Pond with Water Lilies",
    "museum": "Private collection"
  },
  "lilymet2": {
    "title": "Water Lilies, 1919",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "lilytoledo": {
    "title": "Water Lilies, 1922",
    "museum": "Toledo Museum of Art"
  },
  "lilyga431": {
    "title": "Water Lilies (Agapanthus)",
    "museum": "Private collection"
  },
  "lily1908": {
    "title": "Water Lilies, 1908",
    "museum": "Private collection"
  },
  "lilyga462": {
    "title": "Water Lilies, 1916",
    "museum": "Private collection"
  },
  "lilyga2": {
    "title": "Water Lilies",
    "museum": "Private collection"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.monet = Object.assign(EN.paths.monet || {}, {
  "title": "Monet’s Life Journey",
  "part": "Parts 1–3 · 1856–1926",
  "subtitle": "From Le Havre to the water lilies of the Orangerie",
  "intro": "Travel with Claude Monet through his whole life as a painter: from the caricatures in Le Havre, by way of Camille, London, Zaandam and Argenteuil, the Gare Saint-Lazare, Vétheuil, the coast, the Riviera, Belle-Île and the Creuse, to Giverny – to the haystacks and poplars, Rouen Cathedral, Norway, the Thames and Venice, and finally to the water garden and the great water-lily decorations. Short stations, pictures to colour, and voices from his letters.",
  "ending": [
    "On 5 December 1926 Claude Monet dies at Giverny, aged 86. His friend Georges Clemenceau has helped to see the gift of the great water-lily panels through to the State.",
    "In May 1927 the Orangerie in Paris opens the two oval rooms with the Grandes Décorations. The water garden Monet himself created hangs there as a circular horizon.",
    "The life journey ends here: from the caricatures in Le Havre to the water lilies of the Orangerie."
  ],
  "epilogue": "Claude Monet dies on 5 December 1926 at Giverny. In May 1927 the Orangerie in Paris opens the rooms with the Grandes Décorations – the great water-lily panels he left to the State."
});
  EN.stations = Object.assign(EN.stations || {}, {
  "rouen": {
    "place": "Rouen",
    "when": "1892–1894",
    "intro": [
      "After the haystacks and the poplars Monet chooses a motif in stone: the west façade of Rouen Cathedral. In 1892 and 1893 he works in two campaigns on the spot, often from rented rooms opposite the portal, on many canvases at once.",
      "Between the two stays, on 16 July 1892, Monet and Alice Hoschedé marry at Giverny. In 1895 Durand-Ruel exhibits the cathedrals in Paris."
    ]
  },
  "norway": {
    "place": "Norway",
    "when": "1895",
    "intro": [
      "In the winter of 1895 Monet travels to Norway, to his stepson Jacques Hoschedé, who lives there. He stays at Sandviken near Christiania, today’s Oslo.",
      "He paints Mount Kolsaas, villages in the snow and the frozen fjord. To Gustave Geffroy he writes that he is amazed by everything he sees in this country."
    ]
  },
  "mattinseine": {
    "place": "The Seine at Giverny",
    "when": "1896–1897",
    "intro": [
      "In 1896 and 1897 Monet paints the arm of the Seine near Giverny in the early morning hours: mist, still water, the trees as a reflection.",
      "The motif is close at hand, the light changes quickly. As with the cathedrals, a series of the same spot at different hours takes shape."
    ]
  },
  "japangarden": {
    "place": "The water garden and the Japanese bridge",
    "when": "1899–1906",
    "intro": [
      "From the 1890s Monet lays out a water garden behind the house at Giverny: he has an arm of the Epte diverted, plants irises and water lilies, and builds a bridge in the Japanese style.",
      "In 1899 and in the years that follow he paints the bridge and the pond in ever new versions. In 1909 he writes to Roger Marx that it is in this same place that he has already painted the water lilies with the bridge."
    ]
  },
  "thames": {
    "place": "London · the Thames",
    "when": "1899–1905",
    "intro": [
      "In 1899, 1900 and 1901 Monet travels to London again. He paints the Thames: the Houses of Parliament, Charing Cross Bridge, Waterloo Bridge, often in fog, from the Savoy or from St Thomas’ Hospital.",
      "He finishes many of the canvases later at Giverny. In March 1900 he writes to Alice that he was terrified when the fog failed to appear in the morning – and relieved when the smoke and the mist came back."
    ]
  },
  "venice": {
    "place": "Venice",
    "when": "1908",
    "intro": [
      "In October 1908 Monet travels to Venice with Alice. They stay until December. He paints San Giorgio Maggiore, the Doge’s Palace, palazzi on the Grand Canal – often from the water, in the particular light of the lagoon.",
      "In early December he writes to Gustave Geffroy that his enthusiasm has only grown, and that he is saddened to leave this unique light. A return the following year, which he hopes for, does not come about."
    ]
  },
  "lategarden": {
    "place": "Giverny, the later years",
    "when": "1911–1924",
    "intro": [
      "Alice Monet dies on 19 May 1911 at Giverny. Their son Jean dies on 10 February 1914. Blanche, Jean’s widow, remains in the house and helps with daily life.",
      "Monet goes on working in the garden: paths through the irises, weeping willows in the war years, later the house seen from the rose garden and the Japanese bridge in freer, darker versions."
    ]
  },
  "grandes": {
    "place": "The Grandes Décorations",
    "when": "1914–1926",
    "intro": [
      "From 1914 Monet works on very large water-lily panels, the later Grandes Décorations. The pond is to fill a whole room. In these years his sight is clouded by cataracts; in 1923 the right eye is operated on.",
      "On 12 November 1918 he offers Georges Clemenceau two panels for the State, to be signed with the day of the Victory. Later this becomes the gift to the Orangerie."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "rouensun": {
    "text": [
      "The west façade stands in sunlight: pale stonework, deep shadows in the portals, the towers dissolving into colour.",
      "Monet paints the cathedral not as a survey of the building, but as light on stone. He will take up the same façade again in grey weather, in the morning and in the evening."
    ],
    "fact": "The picture of 1894 hangs in the National Gallery of Art, Washington."
  },
  "rouenwest": {
    "text": [
      "The same west façade, another day: the light is cooler, the structure of the portals remains, the colour changes.",
      "In Rouen Monet works on several canvases at once and switches them when the hour turns."
    ],
    "fact": "This picture of 1894 also hangs in the National Gallery of Art, Washington."
  },
  "rouengrey": {
    "text": [
      "In grey weather the portal turns heavy and silvery. The façade remains; the sunlight is gone.",
      "This version is already painted in 1892, in the first campaign. Monet writes to Alice that the cathedral in sunlight is admirable – and what a task it is."
    ],
    "fact": "The picture of 1892 hangs in the Musée d’Orsay in Paris.",
    "quote": {
      "text": "I set to work at my new window, where I am very comfortably settled. The cathedral in sunlight is admirable; I have started two of them.",
      "cite": "Letter to Alice Hoschedé, Rouen, 25 February 1892"
    }
  },
  "rouenportal": {
    "text": [
      "The portal fills the surface: arches, tracery, a touch of sun on the stone. Monet moves in close.",
      "In 1894 he dates several of these façades. By then the series is already well advanced."
    ],
    "fact": "The picture hangs in the Metropolitan Museum in New York."
  },
  "rouenmorn": {
    "text": [
      "In the morning the Tour d’Albane appears beside the façade, the light still cool and bluish.",
      "Monet records not only the portal, but the side tower as well – the same cathedral, another crop."
    ],
    "fact": "The picture of 1894 hangs in the Museum of Fine Arts, Boston."
  },
  "rouengetty": {
    "text": [
      "In the morning light the portal is blue and pink, the stone seems soft. The sun has not yet fully taken the façade.",
      "This version too is from 1894. The series shows that one motif is enough, if the light changes."
    ],
    "fact": "The picture hangs in the J. Paul Getty Museum in Los Angeles."
  },
  "rouenharmonia": {
    "text": [
      "In blazing sun the portal and the Tour Saint-Romain become a harmony in blue and gold. The stone gleams, the shadows are deep.",
      "In 1895 Durand-Ruel shows a group of the cathedrals in Paris. The success confirms the path of the series – the path Monet had already taken with the haystacks and the poplars."
    ],
    "fact": "The picture of 1893 bears the subtitle Harmony in Blue and Gold. It shows the portal and the Tour Saint-Romain in the sun."
  },
  "sandvsnow": {
    "text": [
      "Houses at Sandvika lie in the snow, a small bridge crosses the stream, the hills behind are dark.",
      "In 1895 Monet arrives in a country that is new to him: snow, cold, a different light from Giverny."
    ],
    "fact": "The picture of 1895 hangs in the Latvian National Museum of Art in Riga."
  },
  "kolsaas": {
    "text": [
      "Mount Kolsaas lies as a dark ridge in the snow, the sky is pale. Monet sets down the mountain sparingly and firmly.",
      "He paints the mountain in several versions, in different weather, as he had the cathedral before."
    ],
    "fact": "The picture of 1895 hangs in the Musée Marmottan Monet in Paris.",
    "quote": {
      "text": "Just a couple of words to reassure you about my fate, and so that you do not suppose I have died of cold. I am amazed by everything I see in this wonderful country. I have taken four-day sleigh rides in the mountains, on the fjords, on the lakes – it is wonderful!",
      "cite": "Letter to Gustave Geffroy, Sandviken near Christiania, 26 February 1895"
    }
  },
  "kolsaas2": {
    "text": [
      "The same rise in the evening: the mountain grows darker, the snow takes on a little colour, the day declines.",
      "To Geffroy Monet writes of sleigh rides in the mountains and on the fjords – and that he has begun to paint."
    ],
    "fact": "The picture of 1895, “Mount Kolsaas at the Decline of Day”, is in a private collection."
  },
  "fjordoslo": {
    "text": [
      "The fjord near Christiania lies wide and still, islands and shores are under snow, the water is grey-green.",
      "Monet stays only weeks in Norway. The pictures from this journey are few – and among the most unusual in his work."
    ],
    "fact": "The picture of 1895 is in a private collection."
  },
  "fjordbank": {
    "text": [
      "From the bank the fjord appears as a pale expanse of ice and water, the distant heights are faint.",
      "After that Monet returns to Giverny. The next great motif lies again at his own door: the Seine in the morning."
    ],
    "fact": "This picture of 1895 is also in a private collection."
  },
  "mornseine": {
    "text": [
      "Willows hang over the river, the water is green and milky, the morning not yet bright. Reflection and bank run into one another.",
      "Monet seeks the river at dawn, often in mist, before the sun fixes the forms."
    ],
    "fact": "The picture, dated 1898, hangs in the National Museum of Western Art in Tokyo."
  },
  "mornmet": {
    "text": [
      "The same stretch of river, a more open light: the sky is mirrored as a bright path in the water, the trees stand on both banks.",
      "In 1897 a whole group of such morning pictures is painted. The motif remains; the hour does not."
    ],
    "fact": "The picture hangs in the Metropolitan Museum in New York."
  },
  "mornbeau": {
    "text": [
      "In fine weather the morning grows clearer: more sky, a firmer reflection, the trees stand out more distinctly.",
      "Here too Monet stays in the same place. The difference lies in the light, not in the spot."
    ],
    "fact": "The picture of 1897 belongs to the collection of the White House in Washington."
  },
  "mornw1436": {
    "text": [
      "1896, an early state of the series: the water is violet-blue, the reflection silvery, the banks still in twilight.",
      "Monet begins the morning pictures on the Seine before carrying them further the following year."
    ],
    "fact": "The picture of 1896 is in a private collection."
  },
  "mornw1484": {
    "text": [
      "Again the arm of the river near Giverny, 1897: mist and reflection, the trees as dark masses, the water as light.",
      "Soon afterwards Monet turns to the garden he is laying out behind the house – and to the Japanese bridge over the new pond."
    ],
    "fact": "The picture of 1897 is in a private collection."
  },
  "japabridge": {
    "text": [
      "The pale green bridge arches over the pond, with lily pads beneath and a little sky in the water.",
      "In 1899 Monet paints this bridge in several versions. It becomes the emblem of his garden."
    ],
    "fact": "The picture of 1899 hangs in the National Gallery of Art, Washington.",
    "quote": {
      "text": "It is a stretch of water I created some fifteen years ago; this stretch of water, about 200 metres around, is fed by an arm of the river Epte; it is bordered with irises and various aquatic plants, in a setting of different trees, though poplars and willows predominate, including several weeping willows. It is in this same place that I have already painted the water lilies with a Japanese-style bridge.",
      "cite": "Letter to Roger Marx, Giverny, 1 June 1909 (Wildenstein, letter 1893); Marx used the reply for his essay in the Gazette des Beaux-Arts, June 1909"
    }
  },
  "lilybridge": {
    "text": [
      "The bridge again, more densely set in green, the water lilies closer, the bank almost closed.",
      "This version too is from around 1899. The motif is the same, the crop tighter, the colour richer."
    ],
    "fact": "The picture hangs in the Princeton University Art Museum."
  },
  "lilypondnl": {
    "text": [
      "The bridge stands clear and pale against the foliage, the pond is full of water lilies, the green is summery.",
      "This version of 1899 is among the best-known pictures of the water garden."
    ],
    "fact": "The picture hangs in the National Gallery in London."
  },
  "lilypondga": {
    "text": [
      "By 1904 the pond is the whole picture: water lilies, reflections, hardly any bank left. The bridge steps back.",
      "Monet begins to make the water’s surface itself the field – a step toward the later decorations."
    ],
    "fact": "The picture of 1904 belongs to the series of water-lily ponds from these years."
  },
  "lilyaic": {
    "text": [
      "Around 1900 the bridge still stands firmly in the picture, surrounded by willows and water lilies, the green is deep.",
      "The Art Institute of Chicago holds this early version of the pond – separate from the famous water-lily picture of 1906 in the same collection."
    ],
    "fact": "The picture of 1900 hangs in the Art Institute of Chicago."
  },
  "irisyale": {
    "text": [
      "In the Clos normand, the flower garden in front of the house, irises stand in dense rows, a path leads into the depth, the trees give shade.",
      "In 1900 Monet paints not only the water garden, but also this path through the flowers – the garden he himself has planted."
    ],
    "fact": "The picture of 1900 hangs in the Yale University Art Gallery in New Haven."
  },
  "lilywl": {
    "text": [
      "By 1904 the water lilies are a dark, closed field: pads, a few blossoms, deep green, hardly any horizon.",
      "In these years Monet exhibits groups of the water lilies. The pond becomes his principal motif."
    ],
    "fact": "The picture of 1904 belongs to the water-lily series of these years."
  },
  "parlsun": {
    "text": [
      "The Houses of Parliament stand as a blue mass in the sunlight, the Thames gleams, the sky is pale. The towers do not quite dissolve in the haze.",
      "Monet paints the building in many states: sun, fog, sunset. The motif remains; the weather does not."
    ],
    "fact": "The picture of 1903 hangs in the Brooklyn Museum in New York."
  },
  "parlfog": {
    "text": [
      "In the fog the Houses of Parliament become a shadow. A boat lies on the water, the colour is held back, the air is thick.",
      "Monet writes to Alice that he was crushed when the fog failed to appear – and already saw all his canvases ruined."
    ],
    "fact": "The picture of 1903–1904 hangs in the Metropolitan Museum in New York.",
    "quote": {
      "text": "When I got up I was terrified to see that there was no fog, not even the shadow of a mist; I was crushed and already saw all my canvases ruined, but little by little, as the fires were lit, the smoke and the mist came back.",
      "cite": "Letter to Alice Monet, London, 4 March 1900"
    }
  },
  "parlset": {
    "text": [
      "At sunset the sky burns above the Houses of Parliament, the water takes up orange and violet, the towers stand dark against it.",
      "In 1904 Monet dates several of these London versions, which he finishes at Giverny."
    ],
    "fact": "The picture of 1904 belongs to the Parliament series from the London trips."
  },
  "waterloosun": {
    "text": [
      "Waterloo Bridge lies in the evening light, the arches are soft, the city behind dissolves.",
      "Monet paints this bridge in sun, at dusk and on grey days – the same structure, three moods."
    ],
    "fact": "The picture of 1904 hangs in the National Gallery of Art, Washington."
  },
  "waterloodusk": {
    "text": [
      "At dusk the bridge grows heavier, the smoke of the chimneys hangs in the air, the water is dark.",
      "This version of 1904 also hangs in Washington, beside the sunlight and the grey day."
    ],
    "fact": "The picture hangs in the National Gallery of Art, Washington."
  },
  "waterlogrey": {
    "text": [
      "On a grey day the bridge is almost colourless, the Thames dull, the city a suggestion.",
      "Monet dates this version 1903. London fog is for him not an obstacle, but the motif itself."
    ],
    "fact": "The picture of 1903 hangs in the National Gallery of Art, Washington."
  },
  "charingga": {
    "text": [
      "Charing Cross Bridge lies in a pale, milky haze, trains and arches barely held in place.",
      "Monet paints the South Eastern Railway’s bridge in many versions, often from the Savoy."
    ],
    "fact": "The picture of around 1902 belongs to the Charing Cross Bridge series."
  },
  "charing2": {
    "text": [
      "An earlier or cooler version of the same bridge: more structure, a different sky, the same motif from the Thames.",
      "After the London trips Monet returns to Giverny. In 1908 another journey takes him to Venice."
    ],
    "fact": "The picture of around 1900 also belongs to the Charing Cross Bridge series."
  },
  "sangiorgio": {
    "text": [
      "San Giorgio Maggiore lies as a pale block in the lagoon, the campanile stands slender, two gondolas give the scale.",
      "Monet paints the church from the opposite side, often in haze, the water as a wide, quiet field."
    ],
    "fact": "The picture of 1908 hangs in the Indianapolis Museum of Art."
  },
  "sangiodusk": {
    "text": [
      "At twilight the sky burns behind San Giorgio, the church becomes a silhouette, the water takes up the orange.",
      "Monet writes to Geffroy that the light of Venice is unique – and that he is saddened to leave it."
    ],
    "fact": "The picture of 1908 hangs in National Museum Cardiff.",
    "quote": {
      "text": "She must have told you of my enthusiasm for Venice. Well, it has only grown, and as the moment to leave this unique light draws near, I am saddened by it. It is so beautiful.",
      "cite": "Letter to Gustave Geffroy, Venice, 7 December 1908"
    }
  },
  "dogepalace": {
    "text": [
      "The Doge’s Palace lies as a long, pale front on the water, the arcades are suggested, the lagoon takes up the palace.",
      "Monet treats the building not as an architectural study, but as light on stone and water – as he had Rouen Cathedral before."
    ],
    "fact": "The picture of 1908 belongs to the Venetian group from this autumn."
  },
  "dogemet": {
    "text": [
      "From San Giorgio Maggiore the Doge’s Palace is seen across the water, the foreground a dark strip of shore.",
      "The same palace, another standpoint. Monet changes banks and keeps the motif."
    ],
    "fact": "The picture of 1908 hangs in the Metropolitan Museum in New York."
  },
  "palazzomula": {
    "text": [
      "Palazzo da Mula stands close to the canal, the façade is mirrored, a gondola glides past.",
      "Monet moves in on the palaces as he had on the portal at Rouen: not the city as a panorama, but a wall of light."
    ],
    "fact": "The picture of 1908 hangs in the National Gallery of Art, Washington."
  },
  "palazzodario": {
    "text": [
      "Palazzo Dario rises narrowly from the water, the marble incrustations are dissolved into colour, a gondola lies in front.",
      "Monet paints this house on the Grand Canal too in 1908. The journey remains his only one to Venice."
    ],
    "fact": "The picture hangs in the National Museum Cardiff."
  },
  "grandcanal2": {
    "text": [
      "Santa Maria della Salute stands at the end of the Grand Canal, poles in the foreground divide the surface, the water is turquoise and violet.",
      "In December 1908 Monet and Alice leave Venice. He works the pictures up later at Giverny."
    ],
    "fact": "The picture of 1908 hangs in the Museum of Fine Arts in Boston."
  },
  "pathiris": {
    "text": [
      "A path leads through tall irises, yellow and violet, the foliage is dense, the path almost disappears in the yellow-green.",
      "The picture is painted between 1914 and 1917, in the years after Jean’s death. Monet stays at work in the garden."
    ],
    "fact": "The picture hangs in the Metropolitan Museum in New York."
  },
  "willowk": {
    "text": [
      "A weeping willow hangs heavily over the ground, the trunk is dark, the branches fall like a curtain.",
      "In 1918 Monet paints several willows by the pond. In the last months of the war the tree becomes a quiet, solemn motif."
    ],
    "fact": "The picture of 1918 belongs to the weeping willows of these years."
  },
  "willow2": {
    "text": [
      "Another willow, warmer in the light: gold and green, the trunk divides the surface, the branches are less heavy.",
      "This version too is from 1918 or 1919, at the same pond in Giverny."
    ],
    "fact": "The picture hangs in the Kimbell Art Museum in Fort Worth."
  },
  "willow3": {
    "text": [
      "The weeping willow once more, redder and harsher, almost without sky. Monet stays with the tree and changes the hour.",
      "The willows are painted in the same years in which he is preparing the great water-lily panels."
    ],
    "fact": "The picture of 1918–1919 belongs to the group of weeping willows."
  },
  "irislate": {
    "text": [
      "Single irises stand in the green and blue, part of the ground is left free. The picture is held spare and open.",
      "Between 1914 and 1917 Monet paints flower pieces of this kind in the garden – beside the paths and the willows."
    ],
    "fact": "The picture of 1914–1917 is in a private collection."
  },
  "rosegarden": {
    "text": [
      "From the rose garden the house appears as a warm, red mass in the foliage, the light is high and yellow.",
      "The picture is painted between 1922 and 1924, in Monet’s last working years in the Clos normand."
    ],
    "fact": "The picture hangs in the Musée Marmottan Monet in Paris."
  },
  "latebridge2": {
    "text": [
      "The Japanese bridge is now only an arch in the green-blue, the forms dissolve, pond and foliage run into one another.",
      "Between 1918 and 1924 Monet paints the bridge in freer, darker versions – the same place as in 1899, another eye."
    ],
    "fact": "The picture is painted between 1918 and 1924, in the late years at the pond."
  },
  "lilyset": {
    "text": [
      "The setting sun lies as a yellow-pink path on the pond, the water lilies are widely scattered, the horizon falls away.",
      "This panel belongs to the Grandes Décorations that hang today in the Orangerie. Monet laid out the water garden himself – and finally turned it into a room."
    ],
    "fact": "The picture belongs to the cycle in the Orangerie in Paris and is painted between 1914 and 1926.",
    "quote": {
      "text": "I am on the point of finishing two decorative panels, which I want to sign with the day of the Victory, and I come to ask you to offer them to the State through your offices. It is a small thing, but it is the only way I have of taking part in the victory.",
      "cite": "Letter to Georges Clemenceau, 12 November 1918"
    }
  },
  "lilyblue": {
    "text": [
      "Blue water lilies under hanging boughs: the surface is close, the crop without a bank, the colour a deep violet and green.",
      "The picture is painted between 1916 and 1919, in the same years as the great decorations, as a picture in its own right."
    ],
    "fact": "The picture hangs in the Musée d’Orsay in Paris."
  },
  "lilypool": {
    "text": [
      "1907, an early, tall crop: a pale reflection falls through the pond, water lilies lie at the edge of the path of light.",
      "These years prepare the later decorations. The pond no longer needs a horizon."
    ],
    "fact": "The picture of 1907 belongs to the water-lily series before the great panels."
  },
  "lilymet2": {
    "text": [
      "In 1919 the water lilies lie as pale islands on a green ground, a soft reflection divides the surface.",
      "The Metropolitan Museum holds this large, quiet version from the years of the decorations."
    ],
    "fact": "The picture of 1919 hangs in the Metropolitan Museum in New York."
  },
  "lilytoledo": {
    "text": [
      "By 1922 the pond is a field of violet and green, the blossoms sit loosely, the brush remains visible.",
      "In these years Monet goes on working on the water lilies, despite his changed sight."
    ],
    "fact": "The picture of 1922 hangs in the Toledo Museum of Art."
  },
  "lilyga431": {
    "text": [
      "A wide panel from the Agapanthus group: water lilies across the whole surface, with a hint of bank plants below.",
      "Large formats of this kind belong near the decorations, even when they do not hang in the Orangerie."
    ],
    "fact": "The picture is painted between about 1915 and 1926 and belongs to the group of Agapanthus panels."
  },
  "lily1908": {
    "text": [
      "1908, a still, tall pond: a few pink blossoms, a pale path in the water, almost without a bank.",
      "The picture is painted in the same years as the journey to Venice – and shows that the water garden remains the lasting motif."
    ],
    "fact": "The picture of 1908 belongs to the water-lily series of these years."
  },
  "lilyga462": {
    "text": [
      "In 1916 the water lilies lie more densely, in blue and green, single blossoms gleam red and yellow.",
      "In this year Monet is in the midst of work on the great panels. Smaller pictures accompany the decorations."
    ],
    "fact": "The picture of 1916 belongs to the water-lily series of the war and decoration years."
  },
  "lilyga2": {
    "text": [
      "Water lilies on a pale, green-blue ground, the pads form islands, the light is soft.",
      "Panels of this kind from the 1910s show the pond without a bridge and without sky – only water and plants."
    ],
    "fact": "The picture belongs to the water-lily series of the 1910s."
  }
});
})();
