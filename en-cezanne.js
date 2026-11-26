// v8.6 English content for Paul Cézanne’s life journey, Part 1 (1839–1886).
// Extends window.EN; does not rewrite earlier path files.
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Sammlung nicht ermittelt": "Collection not established",
  "Privatbesitz": "Private collection",
  "Eremitage, Sankt Petersburg": "The Hermitage, St Petersburg"
});
  EN.works = Object.assign(EN.works || {}, {
  "czmother": {
    "title": "Portrait of the Artist’s Mother",
    "museum": "Saint Louis Art Museum"
  },
  "czfather65": {
    "title": "The Painter’s Father, Louis-Auguste Cézanne",
    "museum": "National Gallery, London"
  },
  "czvalab66": {
    "title": "Antony Valabrègue",
    "museum": "National Gallery of Art, Washington"
  },
  "czhousejas": {
    "title": "The House of the Jas de Bouffan",
    "museum": "Collection not established"
  },
  "czbread": {
    "title": "Bread and Eggs",
    "museum": "Cincinnati Art Museum"
  },
  "czsugar": {
    "title": "Sugar Bowl, Pears and Blue Cup",
    "museum": "Musée d’Orsay, Paris"
  },
  "czgigot": {
    "title": "Still Life of a Leg of Mutton and Bread",
    "museum": "Kunsthaus Zürich"
  },
  "czfather66": {
    "title": "The Artist’s Father, Reading “L’Événement”",
    "museum": "National Gallery of Art, Washington"
  },
  "czunclemonk": {
    "title": "Uncle Dominique as a Monk",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czunclelaw": {
    "title": "Uncle Dominique as a Lawyer",
    "museum": "Collection not established"
  },
  "czuncledom": {
    "title": "Uncle Dominique",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "czclock": {
    "title": "The Black Marble Clock",
    "museum": "Private collection"
  },
  "czemperaire": {
    "title": "Achille Emperaire",
    "museum": "Musée d’Orsay, Paris"
  },
  "czsnowest": {
    "title": "Melting Snow at L’Estaque",
    "museum": "Collection not established"
  },
  "cztrench": {
    "title": "The Railway Cutting",
    "museum": "Barnes Foundation, Philadelphia"
  },
  "czvillageest": {
    "title": "The Fishing Village at L’Estaque",
    "museum": "Philadelphia Museum of Art"
  },
  "czhortense72": {
    "title": "Portrait of Madame Cézanne",
    "museum": "Collection not established"
  },
  "czself72": {
    "title": "Self-Portrait in a Casquette",
    "museum": "The Hermitage, St Petersburg"
  },
  "czlouvec": {
    "title": "View of Louveciennes, after Pissarro",
    "museum": "Musée d’Orsay, Paris"
  },
  "czpendu": {
    "title": "The House of the Hanged Man",
    "museum": "Musée d’Orsay, Paris"
  },
  "czlacroix": {
    "title": "House of Père Lacroix",
    "museum": "National Gallery of Art, Washington"
  },
  "czquartier": {
    "title": "Quartier Four, Auvers-sur-Oise",
    "museum": "Philadelphia Museum of Art"
  },
  "czsmallpontoise": {
    "title": "Small Houses in Pontoise",
    "museum": "Harvard Art Museums, Cambridge"
  },
  "czauversview": {
    "title": "Panoramic View of Auvers-sur-Oise",
    "museum": "Collection not established"
  },
  "czmadamered": {
    "title": "Madame Cézanne in a Red Armchair",
    "museum": "Museum of Fine Arts, Boston"
  },
  "czchocquet": {
    "title": "Portrait of Victor Chocquet Seated",
    "museum": "Columbus Museum of Art"
  },
  "czcotesaint": {
    "title": "The Côte Saint-Denis at Pontoise",
    "museum": "Collection not established"
  },
  "czjardinmau": {
    "title": "The Garden of Maubuisson, Pontoise",
    "museum": "Collection not established"
  },
  "czhermitage": {
    "title": "The Maison Rondest, l’Hermitage, Pontoise",
    "museum": "Collection not established"
  },
  "czstill77": {
    "title": "Fruit Dish and Plate of Biscuits",
    "museum": "Collection not established"
  },
  "cztoitsrouges": {
    "title": "L’Estaque with Red Roofs",
    "museum": "Collection not established"
  },
  "czbay85": {
    "title": "The Bay of Marseilles, Seen from L’Estaque",
    "museum": "Art Institute of Chicago"
  },
  "czriaux": {
    "title": "Houses in Provence: The Riaux Valley near L’Estaque",
    "museum": "National Gallery of Art, Washington"
  },
  "czchateauif": {
    "title": "L’Estaque and the Château d’If",
    "museum": "Collection not established"
  },
  "czmorningest": {
    "title": "Morning View of L’Estaque Against the Sunlight",
    "museum": "Israel Museum, Jerusalem"
  },
  "czpins": {
    "title": "L’Estaque, Seen through the Pines",
    "museum": "Collection not established"
  },
  "czcliffs": {
    "title": "View of L’Estaque",
    "museum": "Collection not established"
  },
  "czpool": {
    "title": "The Pool at the Jas de Bouffan",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "czchestnut": {
    "title": "Avenue of Chestnut Trees at the Jas de Bouffan",
    "museum": "Collection not established"
  },
  "czbaretrees": {
    "title": "The Bare Trees at the Jas de Bouffan",
    "museum": "National Museum of Western Art, Tokyo"
  },
  "czfarmjas": {
    "title": "Chestnut Trees and Farm at the Jas de Bouffan",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "czvuejas": {
    "title": "View from the Jas de Bouffan",
    "museum": "Collection not established"
  },
  "czmaincy": {
    "title": "The Bridge at Maincy",
    "museum": "Musée d’Orsay, Paris"
  },
  "czmedan": {
    "title": "Banks of the Seine at Médan",
    "museum": "National Gallery of Art, Washington"
  },
  "czgardanne": {
    "title": "The Village of Gardanne",
    "museum": "Brooklyn Museum, New York"
  },
  "czabandoned": {
    "title": "Abandoned House near Aix-en-Provence",
    "museum": "Dallas Museum of Art"
  },
  "czmadame86": {
    "title": "Portrait of Madame Cézanne",
    "museum": "Detroit Institute of Arts"
  },
  "czself80": {
    "title": "Self-Portrait",
    "museum": "Collection not established"
  },
  "czwinterchest": {
    "title": "The Chestnut Trees of the Jas de Bouffan in Winter",
    "museum": "Minneapolis Institute of Art"
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
  "cezanneaix": {
    "place": "Aix-en-Provence · Childhood and Friends",
    "when": "1839–1858",
    "mapLabel": "Aix",
    "intro": [
      "Paul Cézanne is born on 19 January 1839 in Aix-en-Provence. His father Louis-Auguste, first a hatter, later runs a bank; his mother Anne-Elisabeth Honorine Aubert keeps the house.",
      "At the Collège Bourbon he becomes friends with Émile Zola and Baptistin Baille – the three are called the “inseparables”. They roam the country around Aix. In 1858 Zola leaves for Paris; the friendship remains alive in letters.",
      "The portraits of the parents and of the friend Valabrègue, and the view of the house, are in part painted only later. They belong all the same to this beginning: to the family, to the circle in Aix and to the country house the father buys in 1859."
    ]
  },
  "cezannelaw": {
    "place": "Aix and Paris · Law Studies and the Académie Suisse",
    "when": "1858–1865",
    "mapLabel": "Paris",
    "intro": [
      "From 1858 to 1861 Cézanne studies law in Aix, following his father’s wish. Zola writes from Paris and urges him to come and to paint.",
      "In 1861 he travels to Paris for the first time, draws at the Académie Suisse and meets Camille Pissarro. He returns to Aix, works briefly in his father’s bank and goes back to Paris in November 1862.",
      "In the mid-1860s dark, firmly built still lifes appear: bread and eggs, the sugar bowl, the leg of mutton. The Salon rejects his submissions."
    ]
  },
  "cezannecouillarde": {
    "place": "Aix and Paris · The “Couillarde” Years",
    "when": "1866–1869",
    "mapLabel": "1866",
    "intro": [
      "In the second half of the 1860s Cézanne paints with the palette knife, in thick, dark layers. He and his friends call this rough, heavily loaded manner “couillarde”.",
      "In 1866 he paints the large portrait of his father reading L’Événement – the newspaper of Zola’s Salon reviews. In the same year he paints Uncle Dominique, his mother’s brother, in quick succession in different roles.",
      "There follow the portrait of the Aix painter Achille Emperaire, rejected by the Salon, and towards the end of the decade the black marble clock."
    ]
  },
  "cezannehortense": {
    "place": "Paris and L’Estaque · Hortense and the War",
    "when": "1869–1872",
    "mapLabel": "1870",
    "intro": [
      "Around 1869, in Paris, Cézanne meets Hortense Fiquet, who sits as his model. The relationship remains hidden for a long time from the family in Aix.",
      "During the Franco-Prussian War of 1870–1871 he stays with Hortense at L’Estaque, west of Marseille. He does not report for military service. Views of snow, roofs and the fishing village date from this time.",
      "On 4 January 1872 their son Paul is born in Paris. The railway-cutting picture of 1867, near the Jas de Bouffan, belongs to the landscape of Aix and stands here as an earlier Provençal view before the coast."
    ]
  },
  "cezanneauvers": {
    "place": "Pontoise and Auvers · With Pissarro",
    "when": "1872–1874",
    "mapLabel": "Auvers",
    "intro": [
      "From 1872 to 1874 Cézanne often works alongside Camille Pissarro in Pontoise and lives in Auvers-sur-Oise. Under this influence the palette grows lighter, the touch smaller, work in front of the motif more natural.",
      "He paints a self-portrait in a cap, a view of Louveciennes after Pissarro, and houses in Auvers and Pontoise. “The House of the Hanged Man” of 1873 – a house above a path, not a scene of violence – is exhibited in Paris in 1874.",
      "These years are regarded as a turn towards the Impressionist landscape, even though Cézanne’s forms remain firm and built."
    ]
  },
  "cezannesalon": {
    "place": "Paris · The Exhibitions of 1874 and 1877",
    "when": "1874–1877",
    "mapLabel": "1874",
    "intro": [
      "In April 1874 Cézanne takes part in the first Impressionist exhibition, at Nadar’s studio on the Boulevard des Capucines. Among the works shown are “The House of the Hanged Man” and a landscape; a third work, “A Modern Olympia”, we mention only, without showing it. The criticism is often harsh.",
      "In 1877, at the third Impressionist exhibition, he is represented by sixteen works. Victor Chocquet, an early collector, supports him; Cézanne paints him in this year.",
      "Beside the portraits of Hortense and Chocquet stand landscapes from Pontoise and a still life – the three fields that continue to accompany him."
    ]
  },
  "cezanneestaque": {
    "place": "L’Estaque · Red Roofs and the Bay",
    "when": "1876–1885",
    "mapLabel": "L’Estaque",
    "intro": [
      "In the summer of 1876 Cézanne works again at L’Estaque. On 2 July he writes to Pissarro about small motifs for Monsieur Chocquet: it is like a playing card, red roofs on the blue sea.",
      "In the early 1880s he returns to the coast. There follow views of the Bay of Marseilles, the Riaux valley, the Château d’If, the morning against the light, and the village through the pines.",
      "The southern coast becomes a place where houses, rocks and sea are fitted together as clear planes."
    ]
  },
  "cezannejas": {
    "place": "Jas de Bouffan · The Country House",
    "when": "1859–1885",
    "mapLabel": "Jas",
    "intro": [
      "The father buys the Jas de Bouffan in 1859. For decades Cézanne paints there the avenue, the chestnuts, the farm, the view from the house and the pool in the park.",
      "The pictures in this station come from various years, from the late 1860s to the edge of the 1880s. The pool in the park belongs to the late 1880s; we date it openly."
    ]
  },
  "cezanne1886": {
    "place": "Médan, Gardanne and Aix · 1886",
    "when": "1879–1886",
    "mapLabel": "Gardanne",
    "intro": [
      "Around 1879/1880 Cézanne lives in Melun; between 1880 and 1885 he paints the banks of the Seine at Médan, where Zola owns a house. In 1885–1886 he lives with Hortense and their son in Gardanne, not far from Aix.",
      "On 4 April 1886, from Gardanne, he thanks Zola briefly and formally for sending the novel L’Œuvre. Contemporaries have read resemblances to Cézanne in the figure of the painter Claude Lantier. The letter is cordial; a complete break is not thereby proved. Contact becomes rarer afterwards.",
      "On 28 April 1886 he marries Hortense in Aix; their son Paul is legitimized. On 23 October 1886 Louis-Auguste dies. With the inheritance Cézanne becomes more independent. Here the section up to 1886 ends."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "czmother": {
    "text": [
      "Anne-Elisabeth Honorine Aubert, the mother, sits quietly, in dark clothes, her face light against the brown ground.",
      "The picture is painted in 1866–1867, later than the childhood years. It records the woman who keeps the household in Aix while the father runs the bank."
    ],
    "fact": "1866–1867. Saint Louis Art Museum."
  },
  "czfather65": {
    "text": [
      "Louis-Auguste sits with his cap on, his legs crossed, as if resting in the salon. The picture is first a mural in the salon of the Jas de Bouffan and is later transferred to canvas.",
      "The father, first a hatter, then a banker in Aix, wants his son to be a lawyer. Around 1865 Cézanne paints him anyway – and in the family house itself."
    ],
    "fact": "c. 1865. National Gallery, London."
  },
  "czvalab66": {
    "text": [
      "The poet Antony Valabrègue, a friend from Aix, is painted frontally and with the palette knife: dark, thick layers of paint, a serious face.",
      "In 1866 the picture already belongs to the early, rough manner. Valabrègue belongs to the circle around Cézanne and Zola."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "czhousejas": {
    "text": [
      "The country house stands light among trees, the sky wide. In 1859 Louis-Auguste buys the Jas de Bouffan on the edge of Aix; the family lives and receives guests there.",
      "The picture itself is painted only around 1874. It shows the place of childhood and of later work – not in the year of the purchase, but in the lighter manner of the 1870s."
    ],
    "fact": "c. 1874. Collection not established."
  },
  "czbread": {
    "text": [
      "A loaf of bread, white eggs, a knife and a dark jug stand close together on the table. The colours are earthy, the shadows heavy.",
      "In 1865, in the years of his law studies and the first stays in Paris, Cézanne practises the still life in this dark, firmly built manner."
    ],
    "fact": "1865. Cincinnati Art Museum."
  },
  "czsugar": {
    "text": [
      "A sugar bowl, pears and a blue cup form a small, closed group. Already here he seeks volume and the side-by-side of clear forms.",
      "The picture dates from around 1865. Beside the portraits, still life is from the beginning a field of its own for Cézanne."
    ],
    "fact": "c. 1865. Musée d’Orsay, Paris."
  },
  "czgigot": {
    "text": [
      "The leg of mutton and the bread lie heavily on the cloth. The paint is laid on thick, almost shaped with the palette knife.",
      "In 1866 the still life belongs to the same rough early period as the portraits of the father and the uncle. It now hangs in the Kunsthaus Zürich."
    ],
    "fact": "1866. Kunsthaus Zürich."
  },
  "czfather66": {
    "text": [
      "Louis-Auguste sits in an armchair and reads L’Événement – the newspaper in which Émile Zola published his Salon reviews in 1866. Above the father hangs an early still life by the son.",
      "The large picture of 1866 is a statement in the family house: the banker is shown reading the paper of the friend who defends the new painting."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "czunclemonk": {
    "text": [
      "Antoine Dominique Sauveur Aubert, the mother’s brother, wears a white habit and a dark cap here. The face is laid down in a few, strong planes of the palette knife.",
      "In 1866 Cézanne paints the uncle in quick succession in different roles. The series belongs to the core of the so-called “couillarde” period."
    ],
    "fact": "1866. Metropolitan Museum of Art, New York."
  },
  "czunclelaw": {
    "text": [
      "The same uncle sits in a dark lawyer’s gown, one hand raised. This picture too is painted in 1866 with the palette knife, rough and firm.",
      "The disguise as a lawyer alludes, whether deliberately or not, to the profession the father had intended for his son."
    ],
    "fact": "1866. Collection not established."
  },
  "czuncledom": {
    "text": [
      "Another portrait of the uncle: head and shoulders fill the surface, the paint sitting in thick, side-by-side bands.",
      "Around 1866 a whole series of such portraits is made in a short time. They show how Cézanne understands the face as a construction of colour planes."
    ],
    "fact": "c. 1866. Norton Simon Museum, Pasadena."
  },
  "czclock": {
    "text": [
      "A black mantel clock without hands stands between a shell, a jug and fruit. The objects are heavy, clearly bounded and almost solemnly arranged.",
      "The still life is painted between 1869 and 1871, at the passage from the dark early period to the years with Hortense."
    ],
    "fact": "1869–1871. Private collection."
  },
  "czemperaire": {
    "text": [
      "Achille Emperaire, a painter friend from Aix, sits in an armchair, small in stature, but the format of the picture is unusually tall. The application of paint remains thick and dark.",
      "The picture of 1867–1868 is rejected by the Salon. Emperaire remains a companion from the home town."
    ],
    "fact": "1867–1868. Musée d’Orsay, Paris."
  },
  "czsnowest": {
    "text": [
      "Red roofs stand above a still wintry slope, the snow is melting, the sea and the distance are cool. L’Estaque lies on the coast west of Marseille.",
      "Around 1870, during the Franco-Prussian War, Cézanne stays with Hortense Fiquet at L’Estaque. The motif of red roofs above the water occupies him later as well."
    ],
    "fact": "c. 1870. Collection not established."
  },
  "cztrench": {
    "text": [
      "A railway cutting opens the hillside, with a house and the sky of Aix above it. The picture is painted in 1867, before the wartime stay at L’Estaque.",
      "The cutting lies near the Jas de Bouffan. Already here Cézanne seeks the landscape as a built form, not as a mere mood picture."
    ],
    "fact": "1867. Barnes Foundation, Philadelphia."
  },
  "czvillageest": {
    "text": [
      "The houses of the fishing village step down the slope towards the water. The palette remains earthy, the forms firmly set.",
      "In 1870 Cézanne paints L’Estaque while the war continues in France. He does not report for military service; he stays in Provence."
    ],
    "fact": "1870. Philadelphia Museum of Art."
  },
  "czhortense72": {
    "text": [
      "Hortense Fiquet, whom he met in Paris around 1869, sits in three-quarter profile. The picture dates from 1872, the year their son Paul is born in Paris on 4 January.",
      "The relationship remains hidden for a long time from the family in Aix. Hortense will sit as a model for Cézanne over decades."
    ],
    "fact": "1872. Collection not established."
  },
  "czself72": {
    "text": [
      "Cézanne wears a cap, his gaze going sideways out of the picture. The face is built in cooler, lighter tones than in the dark portraits of the 1860s.",
      "Around 1872, at the start of the years in Pontoise and Auvers, he records himself. The palette begins to open under the influence of work in the open air."
    ],
    "fact": "c. 1872. The Hermitage, St Petersburg."
  },
  "czlouvec": {
    "text": [
      "A road leads into the depth, houses and bare trees stand on both sides – a view that Cézanne paints after a picture by Camille Pissarro.",
      "In 1872 he works alongside Pissarro. Painting after the older friend is not mere copying: he learns, on another painter’s motif, the lighter, more articulated landscape."
    ],
    "fact": "1872. Musée d’Orsay, Paris."
  },
  "czpendu": {
    "text": [
      "A house in Auvers-sur-Oise stands above a rising path; the traditional title calls it “The House of the Hanged Man”, but it names the building, not a scene of violence.",
      "The picture of 1873 is shown in 1874 at the first Impressionist exhibition in Paris. It is one of the works with which Cézanne appears there – alongside a landscape. A third, “A Modern Olympia”, is not shown here."
    ],
    "fact": "1873. Musée d’Orsay, Paris."
  },
  "czlacroix": {
    "text": [
      "The house of Père Lacroix in Auvers is built firmly and brightly, the walls in broken white, the roof red, the trees as dark verticals.",
      "In 1873 Cézanne paints in Auvers-sur-Oise, often near Pissarro. The houses become clear, stepped forms."
    ],
    "fact": "1873. National Gallery of Art, Washington."
  },
  "czquartier": {
    "text": [
      "In the Quartier Four, gardens, walls and roofs step up the slope. The light is softer than in the early pictures from Aix.",
      "Around 1873 this view belongs to the Auvers years, in which Cézanne observes the landscape of the Île-de-France in front of the motif."
    ],
    "fact": "c. 1873. Philadelphia Museum of Art."
  },
  "czsmallpontoise": {
    "text": [
      "Small houses stand on the slope of Pontoise, the roofs as simple, tilted planes, the vegetation between them.",
      "In 1873 Cézanne works repeatedly in Pontoise, where Pissarro is then living. Working together in the open air shapes these years."
    ],
    "fact": "1873. Harvard Art Museums, Cambridge."
  },
  "czauversview": {
    "text": [
      "From a high viewpoint Auvers lies wide: fields, groups of trees, the houses of the village under a light sky.",
      "The picture is painted in 1873–1875, at the end of the years spent with Pissarro. The wide view gathers what Cézanne had been seeking in Auvers."
    ],
    "fact": "1873–1875. Collection not established."
  },
  "czmadamered": {
    "text": [
      "Hortense sits in a red armchair, her dress in blue and green stripes, her hands in her lap. The colours are clearly set off from one another, the chair a luminous body of its own.",
      "Around 1877, the year of the third Impressionist exhibition, this portrait is a calm counterpart to the landscapes from Pontoise."
    ],
    "fact": "c. 1877. Museum of Fine Arts, Boston."
  },
  "czchocquet": {
    "text": [
      "Victor Chocquet, an early collector and supporter, sits in an armchair, his hands on the arms, his gaze attentive. Cézanne paints him several times in 1877.",
      "Chocquet supports Cézanne and the Impressionists. As early as 1876 Cézanne had begun motifs for him at L’Estaque."
    ],
    "fact": "1877. Columbus Museum of Art."
  },
  "czcotesaint": {
    "text": [
      "The Côte Saint-Denis rises in Pontoise; houses, gardens and the path are built in short, side-by-side strokes.",
      "In 1877 Cézanne shows sixteen works at the third Impressionist exhibition in Paris. Landscapes from Pontoise belong in this context."
    ],
    "fact": "1877. Collection not established."
  },
  "czjardinmau": {
    "text": [
      "In the garden of Maubuisson stand trees and a wall; the light falls through the foliage onto paths and beds.",
      "This motif of 1877 also belongs to the Pontoise years, in which Cézanne records the structured garden and hillside landscape of the Île-de-France."
    ],
    "fact": "1877. Collection not established."
  },
  "czhermitage": {
    "text": [
      "The Maison Rondest in the quartier de l’Hermitage stands firmly among trees, the façade light, the roof calm against the sky.",
      "The picture is dated 1874 – the year of the first Impressionist exhibition. Pontoise and Auvers remain Cézanne’s northern places of work."
    ],
    "fact": "1874. Collection not established."
  },
  "czstill77": {
    "text": [
      "A fruit dish, a plate of biscuits and fruit are arranged on the table as a calm group. Each form is clearly bounded, the space between them considered as well.",
      "1877 shows that still life remains a field of equal standing beside landscape and portrait."
    ],
    "fact": "1877. Collection not established."
  },
  "cztoitsrouges": {
    "text": [
      "Red roofs stand above the blue water, the houses as simple planes, the bay as a calm band. The picture itself dates from 1883–1885.",
      "Already on 2 July 1876 Cézanne writes to Pissarro from L’Estaque about small motifs for Monsieur Chocquet: it is like a playing card – red roofs on the blue sea. This later view belongs to the same family of motifs."
    ],
    "fact": "1883–1885. Collection not established.",
    "quote": {
      "text": "I have started two small subjects with the sea in them, for Monsieur Chocquet, who had mentioned it to me. – It’s like a playing card: red roofs against the blue sea.",
      "cite": "Letter to Camille Pissarro, 2 July 1876, from L’Estaque."
    }
  },
  "czbay85": {
    "text": [
      "From L’Estaque the Bay of Marseilles lies wide and clear: in front the houses and the green, then the deep blue of the water, on the horizon the opposite shore.",
      "Around 1885 Cézanne brings the southern coast into a calm, firmly built order. The picture is among his best-known views of L’Estaque."
    ],
    "fact": "c. 1885. Art Institute of Chicago."
  },
  "czriaux": {
    "text": [
      "In the Riaux valley, cubes of houses stand in a bare, sunny terrain. The walls are ochre and pink, the shadows short and blue.",
      "Around 1883 Cézanne paints this inland motif near L’Estaque. The construction in planes is especially clear here."
    ],
    "fact": "c. 1883. National Gallery of Art, Washington."
  },
  "czchateauif": {
    "text": [
      "Beyond the trees and houses of L’Estaque the sea opens; in the distance lies the island with the Château d’If.",
      "In 1883–1885 Cézanne joins the place where he is working to the wide bay and the well-known prison fortress off Marseille."
    ],
    "fact": "1883–1885. Collection not established."
  },
  "czmorningest": {
    "text": [
      "Against the morning light, houses and trees stand as darker silhouettes, the sky and the water bright. The sun comes towards the viewer.",
      "In 1882–1883, at L’Estaque, Cézanne seeks not only the clear midday form but also the contre-jour of the morning."
    ],
    "fact": "1882–1883. Israel Museum, Jerusalem."
  },
  "czpins": {
    "text": [
      "Pine trunks divide the view; beyond them lie the village, the water and the distance. The foreground is a lattice of trunks and branches.",
      "In 1882–1883 Cézanne frames the bay through the trees, rather than giving it as an open panoramic surface."
    ],
    "fact": "1882–1883. Collection not established."
  },
  "czcliffs": {
    "text": [
      "Rocks, houses and the sea step back in calm layers. The coast is firmly built, without soft blurring.",
      "This view of 1882–1883 belongs to the repeated stays at L’Estaque, in which Cézanne turns the landscape of the coast into a construction."
    ],
    "fact": "1882–1883. Collection not established."
  },
  "czpool": {
    "text": [
      "The pool in the park lies still, surrounded by trees and a wall; the water takes in sky and foliage.",
      "The picture is later, from the late 1880s. It belongs all the same to the place where Cézanne has been working since his youth."
    ],
    "fact": "späte 1880er Jahre. Metropolitan Museum of Art, New York."
  },
  "czchestnut": {
    "text": [
      "The avenue of chestnuts opens a cool, green passage; the trunks and the canopy of leaves divide the space into parallel bands.",
      "In 1880 Cézanne paints this view on the family estate. The repetition of the trees gives the avenue a calm order."
    ],
    "fact": "1880. Collection not established."
  },
  "czbaretrees": {
    "text": [
      "Bare trunks stand before the house and the sky; without leaves, the construction of lines and planes becomes especially visible.",
      "In the 1880s the park of the Jas remains a nearby motif, in summer as in its winter state."
    ],
    "fact": "1880er Jahre. National Museum of Western Art, Tokyo."
  },
  "czfarmjas": {
    "text": [
      "Chestnut trees stand in front of a farm building on the grounds of the Jas; buildings, trees and the ground are joined in calm, earthy tones.",
      "Around 1878 Cézanne works not only at the manor house but also on the working buildings and trees of the estate."
    ],
    "fact": "c. 1878. Norton Simon Museum, Pasadena."
  },
  "czvuejas": {
    "text": [
      "From the country house the landscape of Aix opens: trees in the foreground, then the open country under a light sky.",
      "Around 1875–1876, after the years in Auvers, Cézanne paints once more the view from home. The lighter palette of the northern years remains palpable."
    ],
    "fact": "c. 1875–1876. Collection not established."
  },
  "czmaincy": {
    "text": [
      "A stone arched bridge over a shaded watercourse, dense trees to the left and right: the motif is in Maincy near Melun.",
      "Around 1879/1880 Cézanne paints this bridge while he is living in Melun. The picture now hangs in the Musée d’Orsay."
    ],
    "fact": "c. 1879/1880. Musée d’Orsay, Paris."
  },
  "czmedan": {
    "text": [
      "The Seine at Médan flows between trees and houses on the bank; the planes of water, foliage and buildings are calmly fitted together.",
      "Émile Zola owns a house at Médan. The picture dates from between 1880 and 1885 – in the years when the friendship of their youth still holds and Cézanne works on the Seine."
    ],
    "fact": "1880–1885. National Gallery of Art, Washington."
  },
  "czgardanne": {
    "text": [
      "The houses of Gardanne climb the hill, the church tower at the top; some areas of the canvas remain light and unfinished.",
      "In 1885–1886 Cézanne lives with Hortense and their son Paul in Gardanne, not far from Aix. From here, on 4 April 1886, he writes to Zola after the latter has sent him the novel L’Œuvre."
    ],
    "fact": "1885–1886. Brooklyn Museum, New York.",
    "quote": {
      "text": "My dear Émile, L’Œuvre, which you so kindly sent me, has just arrived. I thank the author of the Rougon-Macquart for this fine sign that he remembers me, and I beg him to let me press his hand in memory of our early years. Wholly yours, still moved by the days that are gone.",
      "cite": "Letter to Émile Zola, 4 April 1886, from Gardanne."
    }
  },
  "czabandoned": {
    "text": [
      "An abandoned house stands in the landscape near Aix, the façade pale, the surroundings spare and wide.",
      "The picture of 1886 falls in the same year as the marriage to Hortense and the death of the father. Cézanne is working again in the country around his home town."
    ],
    "fact": "1886. Dallas Museum of Art."
  },
  "czmadame86": {
    "text": [
      "Hortense sits upright, her face calm and reserved, the background in broken tones. The picture dates from 1886–1887.",
      "On 28 April 1886 Paul Cézanne and Hortense Fiquet marry in Aix; their son Paul is thereby legitimized. The portrait belongs to the time of this new, now public bond."
    ],
    "fact": "1886–1887. Detroit Institute of Arts."
  },
  "czself80": {
    "text": [
      "Cézanne shows himself against an olive, patterned ground, his head bald, his gaze firm. The picture dates from around 1880.",
      "It records the painter in the years when he is moving between Provence, Paris and the Île-de-France – before the turning points of 1886."
    ],
    "fact": "c. 1880. Collection not established."
  },
  "czwinterchest": {
    "text": [
      "The chestnut trees of the Jas stand bare in winter, the branches a clear framework against house and sky.",
      "In 1885–1886 Cézanne returns, in the winter park of the family house, to a familiar motif."
    ],
    "fact": "1885–1886. Minneapolis Institute of Art, inv. 49.9."
  }
});
})();
