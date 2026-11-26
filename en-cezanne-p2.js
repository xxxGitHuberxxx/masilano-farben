// v8.7 English content for Paul Cézanne’s life journey, Part 2, completing the path.
// Extends window.EN; overwrites EN.paths.cezanne with whole-path meta.
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Eremitage, Sankt Petersburg": "The Hermitage, St Petersburg",
  "Sammlung nicht ermittelt": "Collection not established",
  "Sammlung E. G. Bührle, Kunsthaus Zürich": "E. G. Bührle Collection, Kunsthaus Zürich",
  "Phillips Collection, Washington": "The Phillips Collection, Washington",
  "Artizon Museum, Tokio": "Artizon Museum, Tokyo",
  "Puschkin-Museum, Moskau": "Pushkin Museum, Moscow",
  "Galleria Nazionale d’Arte Moderna, Rom": "Galleria Nazionale d’Arte Moderna, Rome"
});
  EN.works = Object.assign(EN.works || {}, {
  "czson87": {
    "title": "The Artist’s Son, Paul",
    "museum": "National Gallery of Art, Washington"
  },
  "czmarne": {
    "title": "Banks of the Marne",
    "museum": "The Hermitage, St Petersburg"
  },
  "czcreteil": {
    "title": "The Bridge over the Marne at Créteil",
    "museum": "Collection not established"
  },
  "czchantilly": {
    "title": "Avenue at Chantilly",
    "museum": "Toledo Museum of Art"
  },
  "czselfpalette": {
    "title": "Self-Portrait with Palette",
    "museum": "E. G. Bührle Collection, Kunsthaus Zürich"
  },
  "czsvpine": {
    "title": "Montagne Sainte-Victoire with Large Pine",
    "museum": "Courtauld Gallery, London"
  },
  "czsvviaduct": {
    "title": "Montagne Sainte-Victoire and the Viaduct of the Arc River Valley",
    "museum": "The Metropolitan Museum of Art, New York"
  },
  "czsvvalcros": {
    "title": "Montagne Sainte-Victoire and Viaduct from Valcros",
    "museum": "Collection not established"
  },
  "czbellevue": {
    "title": "The House at Bellevue and the Pigeon Tower",
    "museum": "Museum Folkwang, Essen"
  },
  "czgrandpin": {
    "title": "Large Pine and Red Earth",
    "museum": "The Hermitage, St Petersburg"
  },
  "cards": {
    "title": "The Card Players",
    "museum": "Musée d’Orsay, Paris"
  },
  "czcardmet": {
    "title": "The Card Players",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czcardplayer": {
    "title": "The Card Player",
    "museum": "Musée d’Orsay, Paris"
  },
  "czpipe": {
    "title": "Man with a Pipe",
    "museum": "National Gallery of Art, Washington"
  },
  "czpeasant": {
    "title": "Seated Peasant",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czcoffee": {
    "title": "Woman with a Coffeepot",
    "museum": "Musée d’Orsay, Paris"
  },
  "czmadred": {
    "title": "Madame Cézanne in a Red Dress",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czconserv": {
    "title": "Madame Cézanne in the Conservatory",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czmadyellow": {
    "title": "Madame Cézanne in a Yellow Armchair",
    "museum": "Art Institute of Chicago"
  },
  "czmadblue": {
    "title": "Madame Cézanne in Blue",
    "museum": "Museum of Fine Arts, Houston"
  },
  "czmadhat": {
    "title": "Madame Cézanne with a Green Hat",
    "museum": "Barnes Foundation, Philadelphia"
  },
  "apples": {
    "title": "The Basket of Apples",
    "museum": "Art Institute of Chicago"
  },
  "czginger": {
    "title": "Ginger Pot with Pomegranate and Pears",
    "museum": "The Phillips Collection, Washington"
  },
  "czeggplant": {
    "title": "Still Life with a Ginger Jar and Eggplants",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czcurtain": {
    "title": "Still Life with a Curtain",
    "museum": "The Hermitage, St Petersburg"
  },
  "czonions": {
    "title": "Still Life with Onions",
    "museum": "Musée d’Orsay, Paris"
  },
  "czgetty": {
    "title": "Still Life with Apples",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "czpeaches": {
    "title": "Four Peaches on a Plate",
    "museum": "Barnes Foundation, Philadelphia"
  },
  "czapplpeach": {
    "title": "Still Life with Apples and Peaches",
    "museum": "National Gallery of Art, Washington"
  },
  "czgeffroy": {
    "title": "Portrait of Gustave Geffroy",
    "museum": "Musée d’Orsay, Paris"
  },
  "czvollard": {
    "title": "Portrait of Ambroise Vollard",
    "museum": "Petit Palais, Paris"
  },
  "czselfberet": {
    "title": "Self-Portrait with a Beret",
    "museum": "Museum of Fine Arts, Boston"
  },
  "czitalian": {
    "title": "Young Italian Woman at a Table",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "czannecy": {
    "title": "Lake Annecy",
    "museum": "Courtauld Gallery, London"
  },
  "czbibquarry": {
    "title": "Bibémus Quarry",
    "museum": "Barnes Foundation, Philadelphia"
  },
  "czbibbarnes": {
    "title": "Bibémus",
    "museum": "Barnes Foundation, Philadelphia"
  },
  "czbibsv": {
    "title": "Montagne Sainte-Victoire Seen from the Bibémus Quarry",
    "museum": "Baltimore Museum of Art"
  },
  "czbibfolk": {
    "title": "The Bibémus Quarry",
    "museum": "Museum Folkwang, Essen"
  },
  "czbibnelson": {
    "title": "Quarry at Bibémus",
    "museum": "Nelson-Atkins Museum of Art, Kansas City"
  },
  "czbibrocks": {
    "title": "Rocks and Branches at Bibémus",
    "museum": "Petit Palais, Paris"
  },
  "czcnnga": {
    "title": "Château Noir",
    "museum": "National Gallery of Art, Washington"
  },
  "czcnmaria": {
    "title": "Maison Maria with a View of Château Noir",
    "museum": "Kimbell Art Museum, Fort Worth"
  },
  "czcnmill": {
    "title": "Millstone in the Park of the Château Noir",
    "museum": "Philadelphia Museum of Art"
  },
  "czcnsv": {
    "title": "Montagne Sainte-Victoire and Château Noir",
    "museum": "Artizon Museum, Tokyo"
  },
  "czcncistern": {
    "title": "Cistern in the Park of Château Noir",
    "museum": "Princeton University Art Museum"
  },
  "czcnview": {
    "title": "View of the Château Noir",
    "museum": "Collection not established"
  },
  "czsvnoir": {
    "title": "Château Noir and Montagne Sainte-Victoire",
    "museum": "Collection not established"
  },
  "czforestpath": {
    "title": "Forest Path to the Château Noir",
    "museum": "Fondation Beyeler, Riehen"
  },
  "czlvmet": {
    "title": "Montagne Sainte-Victoire",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czlvsv": {
    "title": "Montagne Sainte-Victoire Seen from Les Lauves",
    "museum": "Pushkin Museum, Moscow"
  },
  "czlvgarden": {
    "title": "The Garden at Les Lauves",
    "museum": "The Phillips Collection, Washington"
  },
  "czlvbend": {
    "title": "Bend of the Road at the Top of the Chemin des Lauves",
    "museum": "Fondation Beyeler, Riehen"
  },
  "czlvterrace": {
    "title": "The Terrace at the Garden at Les Lauves",
    "museum": "Collection not established"
  },
  "czvallier": {
    "title": "The Gardener Vallier",
    "museum": "National Gallery of Art, Washington"
  },
  "czvallierbu": {
    "title": "The Old Gardener",
    "museum": "E. G. Bührle Collection, Kunsthaus Zürich"
  },
  "czpaysan": {
    "title": "Portrait of a Peasant",
    "museum": "Museo Thyssen-Bornemisza, Madrid"
  },
  "czwomanblue": {
    "title": "Seated Woman in Blue",
    "museum": "The Phillips Collection, Washington"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.cezanne = {
  "title": "Paul Cézanne’s Life Journey",
  "life": "1839–1906",
  "part": "Parts 1–2 · 1839–1906",
  "subtitle": "From Aix to Paris and back to Provence, as far as the studio at Les Lauves",
  "intro": "Travel with Paul Cézanne through his whole life: from childhood in Aix-en-Provence and the friendship with Émile Zola, through the law studies, the Académie Suisse in Paris, the dark “couillarde” period, the turn with Camille Pissarro in Pontoise and Auvers, the exhibitions of 1874 and 1877, L’Estaque, Hortense Fiquet and their son Paul, the Jas de Bouffan and the year 1886 – to Montagne Sainte-Victoire, the card players, the apples and still lifes, the exhibition at Ambroise Vollard’s in 1895, the studio at Les Lauves and Cézanne’s death in Aix on 22 October 1906. Short stations, pictures to colour and voices from letters to Émile Bernard and to his son Paul. The bathers and violent early scenes are left aside.",
  "ending": [
    "On 15 October 1906, while painting out of doors, Cézanne is caught in a storm. He collapses; a carter brings him home. The next day he tries to go on working and collapses again.",
    "On 22 October 1906 Paul Cézanne dies in Aix-en-Provence, aged sixty-seven. What remain are the landscapes of Provence, the still lifes, the portraits – and a body of work that holds the visible world in firm, coloured forms."
  ],
  "epilogue": "Paul Cézanne dies in Aix-en-Provence on 22 October 1906. A few days earlier he had collapsed in a storm while painting out of doors. What remain are Montagne Sainte-Victoire, the card players, the apples, the quarries of Bibémus, the Château Noir, the studio at Les Lauves and the late portraits of the gardener Vallier."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "cezannemarne": {
    "place": "Paris, the Marne and Chantilly",
    "when": "1886–1890",
    "mapLabel": "Marne",
    "intro": [
      "After his father’s death in October 1886, the inheritance leaves Cézanne independent. Hortense and their son Paul have been legitimized; they often live in Paris, while he moves between the city and Aix.",
      "He paints his son as an adolescent, works on the Marne – at Créteil, among other places – and in 1888 at Chantilly, north of Paris. Around 1890 a self-portrait with palette is made.",
      "The years after 1886 are not a turning away from Provence, but they take him once more to the rivers and avenues of the Île-de-France."
    ]
  },
  "cezannesv": {
    "place": "Montagne Sainte-Victoire",
    "when": "1882–1897",
    "mapLabel": "Sainte-Victoire",
    "intro": [
      "East of Aix rises Montagne Sainte-Victoire. From the 1880s on, the mountain becomes a central motif for Cézanne: with the large pine in the foreground, with the viaduct in the Arc valley, from Valcros.",
      "There are also views of the house at Bellevue with its pigeon tower, which belongs to his sister Rose and her husband Maxime Conil, and later the large pine over red earth.",
      "Cézanne returns to this mountain over two decades. Each version seeks the same form in a new order of colour and plane."
    ]
  },
  "cezannecards": {
    "place": "The Card Players",
    "when": "1890–1896",
    "mapLabel": "Cards",
    "intro": [
      "In the early 1890s Cézanne paints a series of card players. Farm workers from the Jas de Bouffan sit as his models. Several versions with two or more players are made.",
      "Single studies belong to the same world: a card player in profile, a man with a pipe, a seated peasant. Around 1895 there follows the portrait of a woman with a coffeepot.",
      "The figures sit still, without dramatic action. Cézanne builds bodies, table and space from firm fields of colour."
    ]
  },
  "cezannemadame": {
    "place": "Hortense Fiquet",
    "when": "1886–1895",
    "mapLabel": "Hortense",
    "intro": [
      "After the marriage of 1886, Cézanne continues to paint Hortense Fiquet: in a red dress, in a yellow armchair, in blue, in 1891 in the conservatory, in 1891–1892 with a green hat.",
      "In these years Hortense often lives with their son in Paris; Cézanne works mainly in Aix. The portraits do not seek familiar intimacy, but a firm order of pose, dress and space.",
      "Over the years more than forty painted portraits of Hortense are made. The five pictures in this station belong to the well-known versions of the late 1880s and early 1890s."
    ]
  },
  "cezanneapples": {
    "place": "Apples and Still Lifes",
    "when": "1890–1905",
    "mapLabel": "Apples",
    "intro": [
      "Still life remains a field of its own for Cézanne, beside landscape and portrait. Apples, peaches, onions, a ginger pot, a curtain, a tablecloth: everyday things, set firmly and calmly.",
      "The basket of apples of around 1893 is among the best-known versions. In the same years still lifes appear with pomegranate and pears, with eggplants, with onions and with peaches on a plate.",
      "Around 1905, in the last years, he returns once more to apples and peaches. The slight tilt of the tables and the firm field of colour remain his means."
    ]
  },
  "cezannevollard": {
    "place": "Paris · Vollard and Late Recognition",
    "when": "1895–1900",
    "mapLabel": "Vollard",
    "intro": [
      "In November and December 1895, Ambroise Vollard shows Cézanne’s first major solo exhibition at his gallery in the Rue Laffitte in Paris. Recognition comes late, but it lasts.",
      "In 1895–1896 Cézanne portrays the critic Gustave Geffroy; in 1899 Vollard himself sits. There are also a self-portrait with a beret, the portrait of a young Italian woman, and in 1896 Lake Annecy, painted during a stay at Talloires.",
      "In 1897 his mother dies. In 1899 the Jas de Bouffan is sold. Cézanne remains in Aix and looks for new places of work in the country east of the town."
    ]
  },
  "cezannebibemus": {
    "place": "The Bibémus Quarry",
    "when": "1895–1904",
    "mapLabel": "Bibémus",
    "intro": [
      "East of Aix lies the Bibémus quarry. From the mid-1890s Cézanne rents a cabin there and works in front of the ochre rock faces, the pines and the outlook towards the Sainte-Victoire.",
      "Several versions of the quarry are made: tight spaces of rock, wider views with trees, and views in which the mountain appears above the stone.",
      "Into the first years of the new century he returns to Bibémus. The stone itself becomes the motif, built firm and light."
    ]
  },
  "cezannechateau": {
    "place": "Château Noir",
    "when": "1890–1904",
    "mapLabel": "Château Noir",
    "intro": [
      "On the road to Le Tholonet stands the Château Noir, a house in a park east of Aix. Cézanne works there over many years: he rents a room for a time, paints the façade, the park, the cistern, the millstone and the forest path.",
      "The house often appears together with Montagne Sainte-Victoire. Early views already begin around 1887–1890; the denser versions belong mainly to the 1890s and up to 1904.",
      "When this place of work falls away, Cézanne has a studio of his own built north of the town – at Les Lauves."
    ]
  },
  "cezannelauves": {
    "place": "The Studio at Les Lauves",
    "when": "1902–1906",
    "mapLabel": "Les Lauves",
    "intro": [
      "In 1901 Cézanne buys a plot on the Chemin des Lauves, north of Aix; in 1902 the studio stands. From here he paints the late views of the Sainte-Victoire, the garden, the terrace and the bend of the road at the top of the slope.",
      "In 1904 the Salon d’Automne in Paris gives a room to his work. In the same years he writes to the young painter Émile Bernard and sets out that nature should be treated by means of the cylinder, the sphere and the cone.",
      "In 1906 the Cabanon de Jourdan, on the edge of the town, is also painted. The studio at Les Lauves remains to the last his place of work in Aix."
    ]
  },
  "cezanne1906": {
    "place": "Vallier and the Last Months",
    "when": "1902–1906",
    "mapLabel": "1906",
    "intro": [
      "In the last years Cézanne portrays his gardener Vallier repeatedly, often on the terrace of the studio. There are also the portrait of a peasant and a seated woman in blue.",
      "To Émile Bernard he writes on 23 October 1905 that he owes him the truth in painting. On 8 September 1906 he tells his son Paul that, as a painter, he is becoming more lucid in front of nature, but that the realization of his sensations remains laborious.",
      "On 15 October 1906, while painting out of doors, he is caught in a storm and collapses; a carter brings him home. The next day he tries to go on working and collapses again. On 22 October 1906 Paul Cézanne dies in Aix-en-Provence."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "czson87": {
    "text": [
      "The son sits in three-quarter profile, his gaze calm, the form of the head and shoulders firmly built. In these years Paul is an adolescent.",
      "This portrait dates from 1886–1887, in the period after the marriage that legitimizes the son. It hangs in the National Gallery of Art in Washington."
    ],
    "fact": "1886–1887. National Gallery of Art, Washington."
  },
  "czmarne": {
    "text": [
      "Trees stand close to the water; the bank, the foliage and the reflection are built in calm, firmly joined fields of colour.",
      "Around 1888 Cézanne works on the Marne, east of Paris. The picture now belongs to the Hermitage in St Petersburg."
    ],
    "fact": "c. 1888. The Hermitage, St Petersburg."
  },
  "czcreteil": {
    "text": [
      "A bridge crosses the river; houses, bank and water lie in clear, calm bands.",
      "The picture is dated 1888 and is made at Créteil on the Marne, not far from Paris."
    ],
    "fact": "1888. Collection not established."
  },
  "czchantilly": {
    "text": [
      "An avenue leads into the depth: trunks to left and right, the path light, the foliage a calm canopy above.",
      "In 1888 Cézanne paints at Chantilly, north of Paris. The picture hangs in the Toledo Museum of Art."
    ],
    "fact": "1888. Toledo Museum of Art."
  },
  "czselfpalette": {
    "text": [
      "Cézanne stands with the palette before the canvas, his gaze firm, the form of the head and shoulder in a few clear planes.",
      "The self-portrait dates from around 1890. It belongs to the E. G. Bührle Collection and hangs in the Kunsthaus Zürich."
    ],
    "fact": "c. 1890. E. G. Bührle Collection, Kunsthaus Zürich."
  },
  "czsvpine": {
    "text": [
      "In the foreground stands a large pine; beyond it Montagne Sainte-Victoire rises as a clear, calm form above the plain.",
      "Around 1887 the mountain east of Aix becomes a recurring motif. This version hangs in the Courtauld Gallery in London."
    ],
    "fact": "c. 1887. Courtauld Gallery, London."
  },
  "czsvviaduct": {
    "text": [
      "The viaduct of the Arc valley runs across the plain; above it Montagne Sainte-Victoire stands firm and light.",
      "The picture dates from 1882–1885. Cézanne arranges plain, viaduct and mountain into a calm, built landscape."
    ],
    "fact": "1882–1885. The Metropolitan Museum of Art, New York."
  },
  "czsvvalcros": {
    "text": [
      "From Valcros, viaduct and plain lie in front of the mountain; the forms are clearly stepped, the sky wide.",
      "The picture is dated 1887. Cézanne seeks the same mountain from a different standpoint."
    ],
    "fact": "1887. Collection not established."
  },
  "czbellevue": {
    "text": [
      "The house and the round pigeon tower stand firm in the landscape; walls, roof and green are set in a few clear planes.",
      "Around 1890 Cézanne paints Bellevue, an estate west of Aix that belongs to his sister Rose and her husband Maxime Conil. The picture hangs in the Museum Folkwang in Essen."
    ],
    "fact": "c. 1890. Museum Folkwang, Essen."
  },
  "czgrandpin": {
    "text": [
      "A large pine stands over reddish ground; trunk, crown and earth are built in calm, strong fields of colour.",
      "The picture dates from 1895–1897, in the country around Aix. It belongs to the Hermitage in St Petersburg."
    ],
    "fact": "1895–1897. The Hermitage, St Petersburg."
  },
  "cards": {
    "text": [
      "Two men sit at a small table and play cards, without either looking at the other. The figures and the table are built from calm, firm fields of colour.",
      "This version with two players dates from around 1894–1895. Farm workers from the family estate serve as models. The picture hangs in the Musée d’Orsay in Paris."
    ],
    "fact": "c. 1894–1895. Musée d’Orsay, Paris."
  },
  "czcardmet": {
    "text": [
      "Two players sit facing each other, a bottle on the table between them; the bodies are heavy and calm, the space tight.",
      "This earlier version of 1890–1892 hangs in the Metropolitan Museum of Art in New York. Cézanne paints the motif in several variants."
    ],
    "fact": "1890–1892. Metropolitan Museum of Art, New York."
  },
  "czcardplayer": {
    "text": [
      "A single player sits in profile at the table, the cards in his hand, the hat dark, the pose still.",
      "This study of 1890–1892 belongs to the circle of the card-player pictures. It hangs in the Musée d’Orsay in Paris."
    ],
    "fact": "1890–1892. Musée d’Orsay, Paris."
  },
  "czpipe": {
    "text": [
      "A man with a hat and a pipe sits against a simple ground; the face is firmly modelled, the gaze turned inward.",
      "This portrait of an Aix peasant, in the circle of the card players, dates from 1892–1896. It hangs in the National Gallery of Art in Washington."
    ],
    "fact": "1892–1896. National Gallery of Art, Washington."
  },
  "czpeasant": {
    "text": [
      "A peasant sits with folded arms, his gaze lowered, jacket and trousers in muted, firm tones.",
      "Around 1892 Cézanne paints this seated peasant. The picture hangs in the Metropolitan Museum of Art in New York."
    ],
    "fact": "c. 1892. Metropolitan Museum of Art, New York."
  },
  "czcoffee": {
    "text": [
      "A woman sits upright at the table, a coffeepot and a cup beside her; the pose is strict, the objects clear and firm.",
      "This portrait, probably of a domestic servant in Aix, dates from around 1895. It hangs in the Musée d’Orsay in Paris."
    ],
    "fact": "c. 1895. Musée d’Orsay, Paris."
  },
  "czmadred": {
    "text": [
      "Hortense sits in a red dress, her torso slightly turned, her gaze calm; the red stands firm against the built space.",
      "Around 1888–1890 Cézanne paints his wife in this red dress. The picture hangs in the Metropolitan Museum of Art in New York."
    ],
    "fact": "c. 1888–1890. Metropolitan Museum of Art, New York."
  },
  "czconserv": {
    "text": [
      "Hortense sits in the conservatory, plants and the framework of the panes behind her; the pose is upright, the face clearly outlined.",
      "The picture is dated 1891. It is among the best-known portraits of Hortense and hangs in the Metropolitan Museum of Art."
    ],
    "fact": "1891. Metropolitan Museum of Art, New York."
  },
  "czmadyellow": {
    "text": [
      "Hortense sits in a yellow armchair, her hands in her lap, the dress dark red, the ground calm and planar.",
      "This portrait dates from 1888–1890. It hangs in the Art Institute of Chicago."
    ],
    "fact": "1888–1890. Art Institute of Chicago."
  },
  "czmadblue": {
    "text": [
      "Hortense wears a blue dress; the body is set firmly in the space, the background divided into calm bands.",
      "Cézanne paints this portrait around 1888–1890. It hangs in the Museum of Fine Arts, Houston."
    ],
    "fact": "c. 1888–1890. Museum of Fine Arts, Houston."
  },
  "czmadhat": {
    "text": [
      "Hortense wears a green hat; head, hat and torso form a calm, closed shape against the darker ground.",
      "This portrait dates from 1891–1892. It belongs to the Barnes Foundation in Philadelphia."
    ],
    "fact": "1891–1892. Barnes Foundation, Philadelphia."
  },
  "apples": {
    "text": [
      "Apples, a bottle, a pastry and a folded tablecloth: Cézanne sets everyday things so that they feel like a small, stable world.",
      "This basket of apples dates from around 1893. The slight tilt of the table is deliberate. The picture hangs in the Art Institute of Chicago."
    ],
    "fact": "c. 1893. Art Institute of Chicago."
  },
  "czginger": {
    "text": [
      "A ginger pot stands among a pomegranate, pears and a cloth; the objects are firmly set, the colours warm and calm.",
      "The still life is dated 1893. It belongs to the Phillips Collection in Washington."
    ],
    "fact": "1893. The Phillips Collection, Washington."
  },
  "czeggplant": {
    "text": [
      "Eggplants, a ginger jar and fruit lie on the tablecloth; the dark fruit and the white cloth hold one another in balance.",
      "This still life dates from 1893–1894. It hangs in the Metropolitan Museum of Art in New York."
    ],
    "fact": "1893–1894. Metropolitan Museum of Art, New York."
  },
  "czcurtain": {
    "text": [
      "Behind fruit, jug and cloth a patterned curtain falls; the fabric brings movement into the firmly built arrangement.",
      "This still life dates from around 1898. It belongs to the Hermitage in St Petersburg."
    ],
    "fact": "c. 1898. The Hermitage, St Petersburg."
  },
  "czonions": {
    "text": [
      "Onions, a bottle and a cloth lie on the board; the round forms and the white of the fabric are clearly set against one another.",
      "Cézanne paints this still life in 1896–1898. It hangs in the Musée d’Orsay in Paris."
    ],
    "fact": "1896–1898. Musée d’Orsay, Paris."
  },
  "czgetty": {
    "text": [
      "Apples lie beside a jug and a cloth; each apple has its own weight, the table remains a calm surface.",
      "This still life dates from 1893–1894. It belongs to the J. Paul Getty Museum in Los Angeles."
    ],
    "fact": "1893–1894. J. Paul Getty Museum, Los Angeles."
  },
  "czpeaches": {
    "text": [
      "Four peaches lie on a plate; the round fruit and the simple dish are built with a few clear tones.",
      "This small still life dates from around 1890–1894. It belongs to the Barnes Foundation in Philadelphia."
    ],
    "fact": "c. 1890–1894. Barnes Foundation, Philadelphia."
  },
  "czapplpeach": {
    "text": [
      "Apples and peaches lie in front of a jug and a cloth; the forms are ample, the colour glows calmly and densely.",
      "This still life dates from around 1905, in the last years. It hangs in the National Gallery of Art in Washington."
    ],
    "fact": "c. 1905. National Gallery of Art, Washington."
  },
  "czgeffroy": {
    "text": [
      "The critic sits at his desk, surrounded by books; the space is tightly built, the sitting long and left unfinished.",
      "In 1895–1896 Cézanne portrays Gustave Geffroy, who has spoken up for his painting. The picture hangs in the Musée d’Orsay in Paris."
    ],
    "fact": "1895–1896. Musée d’Orsay, Paris."
  },
  "czvollard": {
    "text": [
      "Vollard sits with lowered gaze, his head bald, his hands in his lap; the form is heavy and calm, almost closed.",
      "In 1899 Cézanne paints the dealer who in 1895 gave him his first major solo exhibition. The picture hangs in the Petit Palais in Paris."
    ],
    "fact": "1899. Petit Palais, Paris."
  },
  "czselfberet": {
    "text": [
      "Cézanne wears a dark beret; the face is tightly modelled, the gaze firm, the ground plain.",
      "This late self-portrait dates from 1898–1900. It hangs in the Museum of Fine Arts, Boston."
    ],
    "fact": "1898–1900. Museum of Fine Arts, Boston."
  },
  "czitalian": {
    "text": [
      "A young woman leans at the table, her head resting on her hand; the fabric of the dress and the calm pose carry the picture.",
      "This portrait dates from around 1895–1900. It belongs to the J. Paul Getty Museum in Los Angeles."
    ],
    "fact": "c. 1895–1900. J. Paul Getty Museum, Los Angeles."
  },
  "czannecy": {
    "text": [
      "The lake lies still between mountains; in the foreground a tree, opposite a château as a clear, built form.",
      "In 1896 Cézanne stays with his family at Talloires on Lake Annecy. The picture hangs in the Courtauld Gallery in London."
    ],
    "fact": "1896. Courtauld Gallery, London."
  },
  "czbibquarry": {
    "text": [
      "Ochre rock faces stand behind pines and scrub; the quarry edges are set into the landscape like built planes.",
      "In 1895 Cézanne paints in the Bibémus quarry east of Aix, where he rents a cabin. The picture belongs to the Barnes Foundation."
    ],
    "fact": "1895. Barnes Foundation, Philadelphia."
  },
  "czbibbarnes": {
    "text": [
      "Rocks, trees and the reddish stone of the quarry interlock; light and shadow divide the planes clearly.",
      "This version dates from 1894–1895. It too belongs to the Barnes Foundation in Philadelphia."
    ],
    "fact": "1894–1895. Barnes Foundation, Philadelphia."
  },
  "czbibsv": {
    "text": [
      "From the quarry the mountain appears above rocks and pines; the ochre edges lead the eye to the distant silhouette.",
      "Around 1897 Cézanne joins the Bibémus quarry with the Sainte-Victoire. The picture hangs in the Baltimore Museum of Art."
    ],
    "fact": "c. 1897. Baltimore Museum of Art."
  },
  "czbibfolk": {
    "text": [
      "High, yellowish rock faces open like an interior; above, the green of the trees closes the view.",
      "This view of the quarry dates from around 1895. In these years Cézanne keeps returning to Bibémus."
    ],
    "fact": "c. 1895. Museum Folkwang, Essen."
  },
  "czbibnelson": {
    "text": [
      "The rock faces stand steep and light; trees frame the upper edge, the stone itself becomes the motif.",
      "This version dates from 1898–1900. It hangs in the Nelson-Atkins Museum of Art in Kansas City."
    ],
    "fact": "1898–1900. Nelson-Atkins Museum of Art, Kansas City."
  },
  "czbibrocks": {
    "text": [
      "Branches reach across the rocks; stone and foliage are fitted together in short, dense patches of colour.",
      "In 1900–1904, in a late version, Bibémus remains a place of work. The picture hangs in the Petit Palais in Paris."
    ],
    "fact": "1900–1904. Petit Palais, Paris."
  },
  "czcnnga": {
    "text": [
      "The house stands among trees, the façade warm and firm, the foliage laid densely around it.",
      "In 1900–1904 Cézanne paints the Château Noir east of Aix, on the road to Le Tholonet. The picture hangs in the National Gallery of Art in Washington."
    ],
    "fact": "1900–1904. National Gallery of Art, Washington."
  },
  "czcnmaria": {
    "text": [
      "In the foreground stands a simple house; beyond it the Château Noir appears among trees; the path leads into the depth.",
      "This view dates from around 1895. The picture hangs in the Kimbell Art Museum in Fort Worth."
    ],
    "fact": "c. 1895. Kimbell Art Museum, Fort Worth."
  },
  "czcnmill": {
    "text": [
      "An old millstone lies among rocks and trunks; the light falls into the park, the forms are heavy and calm.",
      "In 1898–1900 Cézanne paints in the park of the Château Noir. The picture hangs in the Philadelphia Museum of Art."
    ],
    "fact": "1898–1900. Philadelphia Museum of Art."
  },
  "czcnsv": {
    "text": [
      "The Château Noir lies in the middle ground; above it the Sainte-Victoire rises; house and mountain are fitted into the same built order.",
      "The picture is dated 1904. It hangs in the Artizon Museum in Tokyo."
    ],
    "fact": "1904. Artizon Museum, Tokyo."
  },
  "czcncistern": {
    "text": [
      "Among trunks and rocks lies the cistern; the darkness of the park and the light masonry hold one another in balance.",
      "This view into the park dates from around 1900. The picture belongs to the Princeton University Art Museum."
    ],
    "fact": "c. 1900. Princeton University Art Museum."
  },
  "czcnview": {
    "text": [
      "The house appears among trees on the rise; the façade is light, the surroundings dense and green.",
      "Around 1887–1890, in an early version, Cézanne records the Château Noir. He will return to the place over many years."
    ],
    "fact": "c. 1887–1890. Collection not established."
  },
  "czsvnoir": {
    "text": [
      "The Château Noir lies before the plain; above it stands the Sainte-Victoire; both forms are set sparely and firmly.",
      "Around 1890–1895 Cézanne joins the house with the mountain. The standpoint remains the country east of Aix."
    ],
    "fact": "c. 1890–1895. Collection not established."
  },
  "czforestpath": {
    "text": [
      "A path leads through the wood, the trunks close, the light in patches on the ground.",
      "This forest path from the Mas Jolie to the Château Noir dates from 1900–1902. The picture belongs to the Fondation Beyeler in Riehen."
    ],
    "fact": "1900–1902. Fondation Beyeler, Riehen."
  },
  "czlvmet": {
    "text": [
      "The mountain stands in broad, luminous fields of colour; the plain in front is fitted together in short, dense strokes.",
      "In 1902–1906 Cézanne paints the Sainte-Victoire from the heights at Les Lauves, north of Aix. The picture hangs in the Metropolitan Museum of Art in New York."
    ],
    "fact": "1902–1906. Metropolitan Museum of Art, New York.",
    "quote": {
      "text": "Allow me to repeat what I was telling you here: treat nature by means of the cylinder, the sphere, the cone, everything put into perspective, so that each side of an object, of a plane, is directed towards a central point.",
      "cite": "Letter to Émile Bernard, Aix-en-Provence, 15 April 1904."
    }
  },
  "czlvsv": {
    "text": [
      "From Les Lauves the mountain lies open above the plain; sky and slope pass into one another in broad, cool and warm bands.",
      "This late view dates from around 1904–1906. It hangs in the Pushkin Museum in Moscow."
    ],
    "fact": "c. 1904–1906. Pushkin Museum, Moscow."
  },
  "czlvgarden": {
    "text": [
      "In the garden, trees and shrubs stand in open, luminous patches of colour; the space remains airy and not fully closed.",
      "Around 1906, in one of the last years, Cézanne paints the garden at the studio. The picture belongs to the Phillips Collection in Washington."
    ],
    "fact": "c. 1906. The Phillips Collection, Washington.",
    "quote": {
      "text": "Finally I will tell you that, as a painter, I am becoming more lucid in front of nature, but that for me the realization of my sensations is always very laborious. I cannot attain the intensity that unfolds to my senses; I do not have that magnificent richness of colour which animates nature.",
      "cite": "Letter to his son Paul, 8 September 1906."
    }
  },
  "czlvbend": {
    "text": [
      "The road bends through trees and houses; the curve itself becomes a built form, the outlook remains tight.",
      "This view at the top of the Chemin des Lauves dates from 1904–1906. The picture belongs to the Fondation Beyeler in Riehen."
    ],
    "fact": "1904–1906. Fondation Beyeler, Riehen."
  },
  "czlvterrace": {
    "text": [
      "The terrace opens under the trees; wall, foliage and the light ground are set in broad, calm planes.",
      "In 1902–1906 Cézanne paints the terrace at the new studio he has had built north of Aix."
    ],
    "fact": "1902–1906. Collection not established."
  },
  "czvallier": {
    "text": [
      "Vallier sits outdoors, his beard light, his pose calm; jacket and trousers are built in broad, firm fields of colour.",
      "In 1906 Cézanne portrays his gardener Vallier repeatedly, often on the terrace of the studio at Les Lauves. The picture hangs in the National Gallery of Art in Washington."
    ],
    "fact": "1906. National Gallery of Art, Washington.",
    "quote": {
      "text": "I owe you the truth in painting, and I shall tell it to you.",
      "cite": "Letter to Émile Bernard, Aix, 23 October 1905."
    }
  },
  "czvallierbu": {
    "text": [
      "The old man sits with folded arms, his gaze lowered, the form of the body heavy and still.",
      "This 1906 version also shows Vallier. It belongs to the E. G. Bührle Collection and hangs in the Kunsthaus Zürich."
    ],
    "fact": "1906. E. G. Bührle Collection, Kunsthaus Zürich."
  },
  "czpaysan": {
    "text": [
      "A peasant sits against a simple ground, his hands at rest, the face tightly and firmly modelled.",
      "This late portrait dates from 1905–1906. It hangs in the Museo Thyssen-Bornemisza in Madrid."
    ],
    "fact": "1905–1906. Museo Thyssen-Bornemisza, Madrid."
  },
  "czwomanblue": {
    "text": [
      "A woman sits in a blue dress, her hands in her lap, the body a calm, closed form.",
      "This portrait dates from 1902–1904. It belongs to the Phillips Collection in Washington."
    ],
    "fact": "1902–1904. The Phillips Collection, Washington."
  }
});
})();
