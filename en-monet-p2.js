// v6.8 English content for Monet’s life journey, Part 2.
// Extends window.EN; does not rewrite en-monet.js Part 1 entries.
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Eremitage, Sankt Petersburg": "The Hermitage, St Petersburg",
  "Privatbesitz": "Private collection",
  "Niedersächsisches Landesmuseum Hannover": "Lower Saxony State Museum, Hanover",
  "Israel-Museum, Jerusalem": "The Israel Museum, Jerusalem",
  "Sammlung Pérez Simón": "Pérez Simón Collection",
  "Puschkin-Museum, Moskau": "Pushkin Museum, Moscow"
});
  EN.works = Object.assign(EN.works || {}, {
  "japonaise": {
    "title": "La Japonaise (Camille Monet in Japanese Costume)",
    "museum": "Museum of Fine Arts, Boston"
  },
  "roundbed": {
    "title": "Rounded Flower Bed",
    "museum": "Detroit Institute of Arts"
  },
  "turkeys": {
    "title": "The Turkeys",
    "museum": "Musée d’Orsay, Paris"
  },
  "parkmonceau": {
    "title": "The Parc Monceau",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tuileries": {
    "title": "The Tuileries",
    "museum": "Musée Marmottan Monet, Paris"
  },
  "montgeronpond": {
    "title": "Pond at Montgeron",
    "museum": "Eremitage, Sankt Petersburg"
  },
  "montorgueil": {
    "title": "The Rue Montorgueil, 30 June 1878",
    "museum": "Musée d’Orsay, Paris"
  },
  "lazareorsay": {
    "title": "The Saint-Lazare Station",
    "museum": "Musée d’Orsay, Paris"
  },
  "lazarenormand": {
    "title": "Arrival of the Normandy Train, Gare Saint-Lazare",
    "museum": "Art Institute of Chicago"
  },
  "lazareout": {
    "title": "Gare Saint-Lazare, Exterior View",
    "museum": "Privatbesitz"
  },
  "lazaresun": {
    "title": "Gare Saint-Lazare, Exterior, Sunlight Effect",
    "museum": "Privatbesitz"
  },
  "lazaresignal": {
    "title": "Gare Saint-Lazare, the Signals",
    "museum": "Niedersächsisches Landesmuseum Hannover"
  },
  "lazaretrack": {
    "title": "Train Tracks at the Saint-Lazare Station",
    "museum": "Pola Museum of Art, Hakone"
  },
  "vethsummer": {
    "title": "Vétheuil in Summer",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "vethchurch": {
    "title": "The Church at Vétheuil",
    "museum": "National Galleries of Scotland, Edinburgh"
  },
  "vethgarden": {
    "title": "The Artist’s Garden at Vétheuil",
    "museum": "National Gallery of Art, Washington"
  },
  "lavacourt": {
    "title": "Lavacourt in Winter",
    "museum": "Privatbesitz"
  },
  "lavaseine": {
    "title": "The Seine at Lavacourt",
    "museum": "Privatbesitz"
  },
  "icebreak": {
    "title": "The Break-up of the Ice (La Débâcle)",
    "museum": "University of Michigan Museum of Art, Ann Arbor"
  },
  "icedebacle": {
    "title": "The Break-up of the Ice near Vétheuil",
    "museum": "Musée du Louvre, Paris"
  },
  "lavesun": {
    "title": "Sunset at Lavacourt",
    "museum": "Privatbesitz"
  },
  "fecampcliff": {
    "title": "The Cliff at Fécamp",
    "museum": "Aberdeen Art Gallery"
  },
  "fecampsea": {
    "title": "The Sea at Fécamp",
    "museum": "Musée d’art moderne André Malraux, Le Havre"
  },
  "pourvillelow": {
    "title": "Low Tide at Pourville",
    "museum": "Cleveland Museum of Art"
  },
  "pourvillewalk": {
    "title": "Cliff Walk at Pourville",
    "museum": "Art Institute of Chicago"
  },
  "pourvillebeach": {
    "title": "The Beach at Pourville",
    "museum": "Privatbesitz"
  },
  "varensun": {
    "title": "The Church at Varengeville, Sunset",
    "museum": "Privatbesitz"
  },
  "manneporte": {
    "title": "The Manneporte (Étretat)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "etretatcliff": {
    "title": "The Cliff of Aval, Étretat",
    "museum": "Israel-Museum, Jerusalem"
  },
  "bordighera": {
    "title": "Bordighera",
    "museum": "Art Institute of Chicago"
  },
  "villabord": {
    "title": "Villas at Bordighera",
    "museum": "Musée d’Orsay, Paris"
  },
  "palmtrees": {
    "title": "Palm Trees at Bordighera",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "morenogard": {
    "title": "The Moreno Garden at Bordighera",
    "museum": "Privatbesitz"
  },
  "antibes": {
    "title": "Antibes",
    "museum": "Sammlung Pérez Simón"
  },
  "antibesfort": {
    "title": "The Fort of Antibes",
    "museum": "Privatbesitz"
  },
  "pyramids": {
    "title": "The Pyramids of Port-Coton, Sunlight Effect",
    "museum": "Privatbesitz"
  },
  "pyramids2": {
    "title": "The Pyramids at Port-Coton",
    "museum": "Puschkin-Museum, Moskau"
  },
  "belleilestorm": {
    "title": "Storm off the Coast of Belle-Île",
    "museum": "Musée d’Orsay, Paris"
  },
  "lionrock": {
    "title": "The Lion Rock, Port-Coton",
    "museum": "Fitzwilliam Museum, Cambridge"
  },
  "portdomois": {
    "title": "Rocks at Belle-Île, Port-Domois",
    "museum": "Cincinnati Art Museum"
  },
  "portgoulphar": {
    "title": "Port-Goulphar, Belle-Île",
    "museum": "Art Gallery of New South Wales, Sydney"
  },
  "rapidscreuse": {
    "title": "Rapids on the Petite Creuse at Fresselines",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "valleycreuse": {
    "title": "The Valley of the Creuse at Fresselines",
    "museum": "Privatbesitz"
  },
  "ravincreuse": {
    "title": "The Ravines of the Creuse",
    "museum": "Musée des Beaux-Arts, Reims"
  },
  "creusegrey": {
    "title": "Valley of the Creuse, Grey Weather",
    "museum": "Privatbesitz"
  },
  "creusesun": {
    "title": "Valley of the Creuse, Sunlight Effect",
    "museum": "Privatbesitz"
  },
  "bargiverny": {
    "title": "In the Norvégienne, Giverny",
    "museum": "Musée d’Orsay, Paris"
  },
  "springgiverny": {
    "title": "Spring in Giverny",
    "museum": "Clark Art Institute, Williamstown"
  },
  "hayendsummer": {
    "title": "Haystacks, End of Summer",
    "museum": "Musée d’Orsay, Paris"
  },
  "poplarepte": {
    "title": "Poplars on the Epte",
    "museum": "National Galleries of Scotland, Edinburgh"
  },
  "poplarwind": {
    "title": "Poplars, Wind Effect",
    "museum": "Musée d’Orsay, Paris"
  },
  "poplarphila": {
    "title": "Poplars",
    "museum": "Philadelphia Museum of Art"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.monet = Object.assign(EN.paths.monet || {}, {
  "title": "Monet’s Life Journey",
  "part": "Parts 1–2 · 1856–1890",
  "subtitle": "From Le Havre to the haystacks at Giverny",
  "intro": "Travel with Claude Monet through the years in which he becomes an Impressionist and discovers the series: from the caricatures in Le Havre, by way of Camille, London, Zaandam and Argenteuil, the Gare Saint-Lazare, Vétheuil, the Normandy coast, the Riviera, Belle-Île and the Creuse, to Giverny – to the haystacks and the poplars on the Epte. Short stations, pictures to colour, and voices from his letters. This part covers 1856 to 1890.",
  "ending": [
    "At Giverny the great series begin: haystacks in changing light, poplars along the Epte. Monet works on several canvases at once and chases the hour of the day.",
    "Alice keeps the house; in 1892, after Ernest Hoschedé’s death, the two will marry.",
    "The path leads on. The garden and the water lily pond, the fogs of London, Venice and the late years at Giverny still lie ahead – in the next part of this life journey."
  ],
  "epilogue": "At Giverny the series of haystacks and poplars begin. Alice and Monet will marry in 1892. The garden, the water lilies, London and Venice follow in the next part."
});
  EN.stations = Object.assign(EN.stations || {}, {
  "argenteuil2": {
    "place": "Argenteuil, later years",
    "when": "1874–1878",
    "intro": [
      "After the first Impressionist exhibition Monet stays at Argenteuil. He paints the garden, Camille in a kimono, the Tuileries and the Parc Monceau.",
      "In 1876 the collector Ernest Hoschedé commissions decorative panels for his château at Montgeron: turkeys on the lawn, the pond. Money remains short.",
      "In January 1878 the family must leave Argenteuil. In June Monet paints the flags of the Rue Montorgueil in Paris, for the festival in the year of the World’s Fair."
    ]
  },
  "saintlazare": {
    "place": "Gare Saint-Lazare",
    "when": "1877",
    "intro": [
      "In January 1877 Monet takes a studio in the rue Moncey, near the Gare Saint-Lazare. In a few weeks he paints the station from inside and from the tracks: steam, signals, the arrival of the train from Normandy.",
      "Several of these pictures hang in 1877 at the third Impressionist exhibition. The modern city becomes a motif for him, like the river."
    ]
  },
  "vetheuil": {
    "place": "Vétheuil",
    "when": "1878–1881",
    "intro": [
      "In 1878 Monet moves to Vétheuil on the Seine, with Camille and their sons Jean and Michel. After Ernest Hoschedé’s bankruptcy, Alice Hoschedé and her children also live in the same house.",
      "On 5 September 1879 Camille dies at Vétheuil, aged 32. Jean and Michel remain. Monet goes on painting: the village, the church, the garden – and, in the hard winter of 1879–1880, the break-up of the ice on the Seine. Lavacourt lies just across the river."
    ]
  },
  "normandie": {
    "place": "Normandy · Fécamp, Pourville, Étretat",
    "when": "1881–1886",
    "intro": [
      "From 1881 Monet often works on the Normandy coast: first at Fécamp, then at Pourville and Varengeville, later at Étretat.",
      "From 1881 to 1883 the family lives for a time at Poissy, so that Jean can go to school; Monet himself is often by the sea. He writes to Alice from the coast. At Étretat he takes up the famous cliff after Courbet – and wants to paint it differently."
    ]
  },
  "riviera": {
    "place": "Bordighera and the Riviera",
    "when": "1884–1888",
    "intro": [
      "In 1884 Durand-Ruel sends Monet to the Italian Riviera. He settles at Bordighera: palms, villas, the garden of the Villa Moreno. The southern light is new to him.",
      "In 1888 he returns to the Mediterranean, this time to Antibes on the French side."
    ]
  },
  "belleile": {
    "place": "Belle-Île",
    "when": "1886",
    "intro": [
      "In 1886 Monet spends weeks on Belle-Île off the Brittany coast, at Kervilahouen. The Atlantic is different from the Channel: grottoes, needles, rocks in the storm.",
      "As he writes to Alice, he first has to familiarise himself with this nature."
    ]
  },
  "creuse": {
    "place": "The Creuse",
    "when": "1889",
    "intro": [
      "In 1889 Monet works at Fresselines, in the valley of the Creuse. Rapids, ravines, the same valley in grey weather and in sun.",
      "The country is harsh and far from the sea. Here too he paints the same motif in several states – another step toward the series at Giverny."
    ]
  },
  "giverny1": {
    "place": "Giverny",
    "when": "1883–1891",
    "intro": [
      "In the spring of 1883 Monet rents a house at Giverny; later he will buy it. Alice and the children come with him. As he writes to Pissarro, he is very glad to be here.",
      "He plants a garden, paints the family in a boat on the Epte, and from 1890 begins the series that make the place famous: haystacks in the fields, poplars along the river. The water lily pond, London, Venice and the late garden still lie ahead."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "japonaise": {
    "text": [
      "Camille wears a red uchikake, a fan in her hand, surrounded by Japanese fans on the wall. Monet paints her in 1876, full-length, almost life-size.",
      "The picture is a homage to the Japan fashion of the day in Paris – and a portrait of his wife, festive and strange at once."
    ],
    "fact": "The picture hangs in the Museum of Fine Arts, Boston. Monet shows it in 1876 at the second Impressionist exhibition."
  },
  "roundbed": {
    "text": [
      "In the garden at Argenteuil a rounded bed stands full of flowers, dense and colourful, behind a fence. The air is summery, the colour strong.",
      "Monet paints the garden again and again: not as decoration, but as a motif in which light and growth come together."
    ],
    "fact": "The picture belongs to the Detroit Institute of Arts and is made in 1876, in the later Argenteuil years."
  },
  "turkeys": {
    "text": [
      "White turkeys walk across a sunny lawn, a château and trees in the background. The picture is a decorative panel for Ernest Hoschedé, painted at the Château de Rottembourg in Montgeron.",
      "Hoschedé is a collector and patron – still. A little later his fortune collapses. The Monet and Hoschedé families will draw closer at Vétheuil."
    ],
    "fact": "The picture hangs in the Musée d’Orsay. It belongs to a set of decorative panels that Hoschedé commissions from Monet in 1876."
  },
  "parkmonceau": {
    "text": [
      "In the Parc Monceau in Paris figures stand in the shade of tall trees, the light falling in patches on the path. Monet paints the city park more than once.",
      "Between Argenteuil and the commissions at Montgeron, Paris remains close: a short walk into the park, a picture of the green in the city."
    ],
    "fact": "This 1878 version hangs in the Metropolitan Museum in New York. An earlier version is already made in 1876."
  },
  "tuileries": {
    "text": [
      "From a high viewpoint one sees the Tuileries garden: paths, beds, the city in the haze. Monet treats Paris as a landscape, not as a street scene.",
      "The picture is made in 1876 and remains a study in green, light and distance, painted in the city where he was born."
    ],
    "fact": "The picture hangs in the Musée Marmottan Monet in Paris, in the foundation from Monet’s own collection."
  },
  "montgeronpond": {
    "text": [
      "By the pond at Montgeron tall trees stand, the water is dark and still, water lilies are already hinted at. This too is one of the panels for Hoschedé.",
      "In January 1878 the family must leave Argenteuil. The debts are not paid; the next place will be Vétheuil."
    ],
    "fact": "The picture belongs to the Hermitage in St Petersburg. It is made around 1876 for the château at Montgeron.",
    "quote": {
      "text": "In two days, that is the day after tomorrow, we must leave Argenteuil: to do that, the debts have to have been paid.",
      "cite": "Letter to Georges de Bellio, Tuesday, 15 January 1878"
    }
  },
  "montorgueil": {
    "text": [
      "On 30 June 1878 Paris is hung with flags: a festival in the year of the World’s Fair. Monet stands in the Rue Montorgueil and paints the street as a rain of red, white and blue.",
      "The family is no longer living at Argenteuil. Monet comes into the city for the festival and takes the movement with him, not the façades."
    ],
    "fact": "The picture hangs in the Musée d’Orsay. A companion picture shows the Rue Saint-Denis on the same day."
  },
  "lazareorsay": {
    "text": [
      "Under the glass roof of the Gare Saint-Lazare the steam stands like a cloud in the station. Trains, figures, the iron framework – Monet paints the modern city from inside.",
      "In January 1877 he rents a studio in the rue Moncey, close by. Within a few weeks a whole series is made."
    ],
    "fact": "This picture hangs in the Musée d’Orsay. Monet shows several views of the station in 1877 at the third Impressionist exhibition.",
    "quote": {
      "text": "I am more or less settled in at 17, rue Moncey. If you can spare a moment tomorrow or the day after, I shall be there from noon until half past four.",
      "cite": "Letter to Georges Charpentier, Paris, 17 January 1877"
    }
  },
  "lazarenormand": {
    "text": [
      "The train from Normandy arrives: locomotive, steam, the light under the roof. Monet knows this line well – it leads to Le Havre, to his youth.",
      "He does not paint the timetable, but the moment when the steam fills the hall."
    ],
    "fact": "The picture hangs in the Art Institute of Chicago and is one of the best-known of the Saint-Lazare series."
  },
  "lazareout": {
    "text": [
      "From outside one sees the halls, the rails, the smoke in front of the houses. The station is no longer a closed room, but part of the city.",
      "Monet changes his viewpoint, as later with the haystacks and poplars: the same motif, another light, another side."
    ],
    "fact": "The 1877 picture is in a private collection. It shows the station from the track side, not from inside the hall."
  },
  "lazaresun": {
    "text": [
      "In sunlight the steam becomes bright, almost white, the buildings behind it dissolve. Monet is after the effect, not the architecture.",
      "The series is short and dense: inside, outside, arrival, signals, tracks – all in the same winter and spring of 1877."
    ],
    "fact": "The 1877 picture is in a private collection. The title names the sunlight effect expressly."
  },
  "lazaresignal": {
    "text": [
      "In the foreground stand the signal discs, behind them the steam and the houses. Monet brings the station’s machinery right to the front.",
      "The picture hangs in Hanover and belongs to the exterior views of the series."
    ],
    "fact": "The picture belongs to the Lower Saxony State Museum in Hanover."
  },
  "lazaretrack": {
    "text": [
      "Between tracks and fences the station lies open, the smoke rising among the roofs. One is not in the hall, but on the yards.",
      "With this series Monet takes a motif of the modern city seriously – as seriously as he later takes the light on a haystack."
    ],
    "fact": "The picture hangs in the Pola Museum of Art in Hakone."
  },
  "vethsummer": {
    "text": [
      "In summer Vétheuil lies bright on the Seine: houses, trees, the church, the water full of reflections. Monet paints the village from the river side.",
      "After the tight years at Argenteuil this is a new, quieter place – and for a time the shared house of two families."
    ],
    "fact": "The 1880 picture hangs in the Metropolitan Museum in New York."
  },
  "vethchurch": {
    "text": [
      "The church at Vétheuil stands firm among the houses, the tower bright against the sky. Monet paints it often, in different seasons.",
      "The village becomes everyday life: the river at the door, the church in view, the children in the house."
    ],
    "fact": "This 1878 view hangs in the National Galleries of Scotland in Edinburgh."
  },
  "vethgarden": {
    "text": [
      "In the garden at Vétheuil sunflowers stand tall in front of the house, children on the path, the sky is clear. The picture is bright and friendly.",
      "It is made in 1881, two years after Camille’s death. Life in the house goes on, with Alice and the children of both families."
    ],
    "fact": "The picture hangs in the National Gallery of Art in Washington. The sunflowers make it one of the most approachable pictures of these years."
  },
  "lavacourt": {
    "text": [
      "The winter of 1879 lies heavy on Lavacourt, the village across from Vétheuil. Snow, bare trees, the grey water.",
      "In September Camille has died. Monet writes to Pissarro that he does not know how he is to organise life with his two sons – and goes on painting."
    ],
    "fact": "The 1879 picture is in a private collection. Lavacourt lies immediately on the other side of the Seine.",
    "quote": {
      "text": "Thank you for your letter and the sympathy you have sent me; you must, indeed, know better than anyone the grief I may feel. I am overwhelmed, not knowing which way to turn, nor how I shall be able to organise my life with my two children.",
      "cite": "Letter to Camille Pissarro, Vétheuil, 26 September 1879"
    }
  },
  "lavaseine": {
    "text": [
      "The Seine at Lavacourt is wide, the bank flat, the sky open. Monet paints the river even without ice, as a broad, quiet surface.",
      "Between Vétheuil and Lavacourt there is only the water. Many motifs of these years are made from one bank or the other."
    ],
    "fact": "The 1879 picture is in a private collection."
  },
  "icebreak": {
    "text": [
      "In January 1880 the ice on the Seine breaks up. Floes drift, the banks are flooded, trees stand in the water. Monet goes out and paints the débâcle.",
      "It is one of the earliest series in which he takes up the same motif again and again, under changing light and weather."
    ],
    "fact": "This version hangs in the University of Michigan Museum of Art in Ann Arbor. Monet paints the break-up of the ice in about twenty pictures.",
    "quote": {
      "text": "We have had a terrible break-up of the ice here, and of course I have tried to make something of it, which I will show you on my next visit.",
      "cite": "Letter to Georges de Bellio, Vétheuil, 8 January 1880"
    }
  },
  "icedebacle": {
    "text": [
      "Again the break-up of the ice near Vétheuil: floes, bare trees, a wide, cold sky. Each version looks for a different light.",
      "What will later become the haystacks and the poplars already begins here: the same motif, many states."
    ],
    "fact": "This 1880 version belongs to the Musée du Louvre in Paris."
  },
  "lavesun": {
    "text": [
      "Over Lavacourt the sun is setting: the sky glows, the river takes up the colour, the village lies dark on the bank.",
      "After the icy winter Monet also paints the milder light. The Seine remains his great subject."
    ],
    "fact": "The 1880 picture is in a private collection."
  },
  "fecampcliff": {
    "text": [
      "The cliff at Fécamp falls steeply to the sea, grass above, white chalk, the sea below. Monet comes to the coast in March 1881 to paint seascapes.",
      "He stays longer than planned. The sea does him good, after the years at Vétheuil."
    ],
    "fact": "The picture hangs in Aberdeen Art Gallery."
  },
  "fecampsea": {
    "text": [
      "Here there is almost only the sea: waves, foam, a streaked sky, hardly a solid shore. Monet goes close to the surf.",
      "He writes to Durand-Ruel from Fécamp that he is finding it so good he would like to stay longer."
    ],
    "fact": "The 1881 picture hangs in the Musée d’art moderne André Malraux in Le Havre, in Monet’s home town.",
    "quote": {
      "text": "As I had told you, I have come for a short stay by the sea, and I am finding it so good that I have a great desire to remain a little longer.",
      "cite": "Letter to Paul Durand-Ruel, Fécamp, 23 March 1881"
    }
  },
  "pourvillelow": {
    "text": [
      "At low tide the coast at Pourville lies flat and wide, the water draws back, the cliffs stand in the light. Monet is living practically on the shingle.",
      "From 1881 to 1883 the family lives for a time at Poissy, so that Jean can go to school. Monet himself is often by the sea. He writes to Alice from the coast."
    ],
    "fact": "The 1882 picture hangs in the Cleveland Museum of Art.",
    "quote": {
      "text": "The country is very beautiful, and I much regret not having come earlier, rather than wasting my time at Dieppe. One cannot be closer to the sea than I am, right on the shingle, and the waves beat at the foot of the house.",
      "cite": "Letter to Alice Hoschedé, Pourville, 15 February 1882"
    }
  },
  "pourvillewalk": {
    "text": [
      "Two women in white stand on the cliff at Pourville, the wind catching their dresses, the sea lying far below. They are Alice and her daughter Blanche.",
      "The picture is bright and wide. Monet paints the figures small against sky and sea – and yet fully present."
    ],
    "fact": "The picture hangs in the Art Institute of Chicago. Blanche Hoschedé will later paint herself and help Monet at work."
  },
  "pourvillebeach": {
    "text": [
      "The beach at Pourville is a long curve of sand, water and cliff. Few boats, much sky.",
      "Monet comes here repeatedly in 1882. For some years the Normandy coast becomes his open-air studio."
    ],
    "fact": "The 1882 picture is in a private collection."
  },
  "varensun": {
    "text": [
      "The little church at Varengeville sits up on the cliff, in evening light, in front of pines and the sea. The village lies near Dieppe, not far from Pourville.",
      "Monet paints the church at different times of day. The evening sun colours stone, grass and water."
    ],
    "fact": "The 1882 picture is in a private collection."
  },
  "manneporte": {
    "text": [
      "The Manneporte is the great rock arch at Étretat. Monet stands close in front of it: the arch almost fills the picture, the sea beneath.",
      "Courbet made the same rock famous. Monet knows that and wants to do it all the same – but differently."
    ],
    "fact": "The 1883 picture hangs in the Metropolitan Museum in New York."
  },
  "etretatcliff": {
    "text": [
      "The cliff of Aval at Étretat steps into the sea as a needle and an arch. Monet paints it again in 1885, two years after the first, bold attempt.",
      "He already writes to Alice in 1883 that he wants to make a large canvas of the cliff, although Courbet has painted it admirably."
    ],
    "fact": "The 1885 picture hangs in the Israel Museum in Jerusalem.",
    "quote": {
      "text": "I intend to make a large canvas of the cliff at Étretat, although it is terribly bold of me to do that after Courbet, who did it admirably; but I shall try to do it differently.",
      "cite": "Letter to Alice Hoschedé, Étretat, 1 February 1883"
    }
  },
  "bordighera": {
    "text": [
      "At Bordighera on the Italian Riviera palms and houses stand under a bright sky, the sea gleaming among the trees. Monet comes in 1884 at Durand-Ruel’s request.",
      "The southern light is new to him. At first he does not know which way to look, and he uses up a good deal of colour."
    ],
    "fact": "The picture hangs in the Art Institute of Chicago.",
    "quote": {
      "text": "I am settled in a fairy-tale country. I do not know which way to look, everything is superb and I would like to do it all; so I use up and waste a good deal of colour, for there are experiments to be made.",
      "cite": "Letter to Théodore Duret, Bordighera, 2 February 1884"
    }
  },
  "villabord": {
    "text": [
      "Villas stand among palms, a violet ridge of hills above. Bordighera seems like a garden by the sea.",
      "Monet stays through the winter. He sends pictures to Paris and complains that the motif is difficult – and splendid."
    ],
    "fact": "The 1884 picture hangs in the Musée d’Orsay."
  },
  "palmtrees": {
    "text": [
      "Palm trees almost fill the whole surface, with a strip of sea and distant mountains between them. Monet comes as close to the plants as he later will to the water lilies.",
      "The Riviera gives him a new palette: pink, turquoise, a different green."
    ],
    "fact": "The 1884 picture hangs in the Metropolitan Museum in New York."
  },
  "morenogard": {
    "text": [
      "In the garden of the Villa Moreno palms and agaves crowd, paths in the shade. Monet is allowed to paint the private garden, one of the richest plant worlds in Bordighera.",
      "He is not after the promenade, but the inside of the green."
    ],
    "fact": "The 1884 picture is in a private collection."
  },
  "antibes": {
    "text": [
      "Antibes lies golden in front of the distant, often still snow-capped Alps, the sea is bright. In 1888 Monet returns to the Mediterranean, this time to the French side.",
      "Again the light is the subject: not the town wall alone, but the air above it."
    ],
    "fact": "The 1888 picture belongs to the Pérez Simón Collection."
  },
  "antibesfort": {
    "text": [
      "The fort of Antibes sits on the headland, firm and small against the open water. Monet keeps his distance and leaves much sky and sea.",
      "The Antibes pictures are made in a few months, as a loose series of viewpoints and times of day."
    ],
    "fact": "The 1888 picture is in a private collection."
  },
  "pyramids": {
    "text": [
      "The rock pyramids of Port-Coton stand like needles in the Atlantic, the sea breaking on them, the sun on the foam.",
      "In 1886 Monet works for weeks on Belle-Île, at Kervilahouen. The coast is wilder than that of Normandy."
    ],
    "fact": "The 1886 picture is in a private collection."
  },
  "pyramids2": {
    "text": [
      "The same coast, another hour: the pyramids of Port-Coton once more, the foam different, the light cooler or denser.",
      "Monet paints the needles in several versions. The motif holds still; the weather does not."
    ],
    "fact": "This version hangs in the Pushkin Museum in Moscow."
  },
  "belleilestorm": {
    "text": [
      "A storm meets the coast of Belle-Île: dark water, white foam, the rocks heavy and close. Monet stays out in the weather.",
      "He writes to Alice that the sea is of a particular beauty, the rocks a mass of grottoes, points and needles."
    ],
    "fact": "The 1886 picture hangs in the Musée d’Orsay.",
    "quote": {
      "text": "It is superb, but so different from the Channel that I have to familiarise myself with this nature; the sea is of the utmost beauty, and as for the rocks, it is a mass of grottoes, points and extraordinary needles.",
      "cite": "Letter to Alice Hoschedé, Kervilahouen, 18 September 1886"
    }
  },
  "lionrock": {
    "text": [
      "The Lion Rock at Port-Coton lies in the water like an animal. Monet takes the form tightly, the sea around it restless.",
      "As he writes, he first has to familiarise himself with this nature: it is different from the Channel."
    ],
    "fact": "The 1886 picture hangs in the Fitzwilliam Museum in Cambridge."
  },
  "portdomois": {
    "text": [
      "At Port-Domois the rocks fall steeply, the water is deep blue and violet, the framing tight. Monet is after the drama of the coast.",
      "Many of these pictures are made in close succession, often in wind, from the same coastal path."
    ],
    "fact": "The 1886 picture hangs in the Cincinnati Art Museum."
  },
  "portgoulphar": {
    "text": [
      "Port-Goulphar is a cove between rocks, the water below green and restless. Monet returns to this motif once more in 1887.",
      "Here too the place-name counts less than the relation of stone, sea and light."
    ],
    "fact": "The 1887 picture hangs in the Art Gallery of New South Wales in Sydney."
  },
  "rapidscreuse": {
    "text": [
      "The Petite Creuse rushes over stones at Fresselines, the water bright, the banks dark. Monet works in this river valley in 1889, far inland.",
      "After the sea and the Riviera the Creuse is raw and narrow. He stays all the same and paints the river again and again."
    ],
    "fact": "The picture hangs in the Metropolitan Museum in New York."
  },
  "valleycreuse": {
    "text": [
      "The valley of the Creuse opens between hills, the river lying deep, the slopes bare or thinly grown.",
      "Monet is not after an idyll here. The country is harsh, the light changes quickly."
    ],
    "fact": "The 1889 picture is in a private collection."
  },
  "ravincreuse": {
    "text": [
      "The ravines of the Creuse lead the eye down into the depth, the river gleaming like a ribbon. The valley seems closed, almost severe.",
      "In Reims hangs one of the clearest versions of this motif."
    ],
    "fact": "The 1889 picture hangs in the Musée des Beaux-Arts in Reims."
  },
  "creusegrey": {
    "text": [
      "In grey weather the houses on the Creuse lie muted on the slope, the colour recedes, the form remains.",
      "Monet takes up the same valley in sun and under cloud – another step toward the later series."
    ],
    "fact": "The 1889 picture is in a private collection."
  },
  "creusesun": {
    "text": [
      "The same country in sunlight: warmer slopes, a brighter river, the houses clearer. The difference from the grey weather is the whole picture.",
      "In 1889 Monet goes back from Fresselines to Giverny. The next great series will be made at his own door."
    ],
    "fact": "The 1889 picture is in a private collection."
  },
  "bargiverny": {
    "text": [
      "Alice and the children sit in a Norwegian boat on the Epte branch at Giverny, dressed in light colours, the water dark green around them.",
      "In the spring of 1883 Monet has rented the house at Giverny. He writes to Pissarro that he is very glad to be here. The family follows; the house becomes home."
    ],
    "fact": "The 1887 picture hangs in the Musée d’Orsay. It shows their life together, a few years after the arrival.",
    "quote": {
      "text": "I am very glad to be here, a superb country.",
      "cite": "Letter to Camille Pissarro, Giverny, June 1883"
    }
  },
  "springgiverny": {
    "text": [
      "Spring in Giverny is soft and green: trees in blossom, a wide meadow, a bright sky. Monet paints the country he chose in 1883.",
      "Soon he will buy the house. The garden he plants will later be world-famous – here it is still, above all, landscape."
    ],
    "fact": "The 1890 picture hangs in the Clark Art Institute in Williamstown."
  },
  "haystacks": {
    "text": [
      "Two haystacks stand at midday in the field at Giverny, firm and simple, the light bright on their surfaces.",
      "From 1890 Monet paints the same stacks at many hours and in many weathers. The motif is modest; the light is not."
    ],
    "fact": "This 1890 picture hangs in the National Gallery of Australia in Canberra and already belongs to the famous Meules series."
  },
  "hayendsummer": {
    "text": [
      "The same stacks, another moment: the end of summer, a softer sky, the colour a little riper. Monet works on several canvases at once.",
      "In 1891 Durand-Ruel exhibits a group of the haystacks. The success is great – and confirms the path of the series."
    ],
    "fact": "The 1891 picture hangs in the Musée d’Orsay."
  },
  "poplarepte": {
    "text": [
      "Poplars stand on the Epte, slender and regular, with their reflections in the water. Monet paints them in 1891 as a series of their own.",
      "The trees are to be felled. Monet sees to it that they remain standing until he has finished."
    ],
    "fact": "The picture hangs in the National Galleries of Scotland in Edinburgh."
  },
  "poplarwind": {
    "text": [
      "The wind moves through the poplars: the crowns lean, the reflection shivers. The same avenue, another day.",
      "As with the haystacks, Monet shows that one motif is enough, if the light changes."
    ],
    "fact": "The 1891 picture hangs in the Musée d’Orsay."
  },
  "poplarphila": {
    "text": [
      "The poplars again, in a warmer, more golden light. The trunks divide the surface like a grid.",
      "With the haystacks and the poplars this part closes. Ahead of Monet lie the garden, the water lilies, London and Venice."
    ],
    "fact": "The 1891 picture hangs in the Philadelphia Museum of Art."
  }
});
})();
