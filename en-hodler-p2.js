// v8.4 English content for Ferdinand Hodler’s life journey, Part 2, completing the path.
// Extends window.EN; overwrites EN.paths.hodler with whole-path meta.
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Sammlung nicht ermittelt": "Collection not established",
  "Privatbesitz": "Private collection"
});
  EN.works = Object.assign(EN.works || {}, {
  "hstprex": {
    "title": "Lake Geneva from Saint-Prex",
    "museum": "Collection not established"
  },
  "hisenfluh": {
    "title": "The Jungfrau from the Isenfluh",
    "museum": "Collection not established"
  },
  "hkiental": {
    "title": "The Kiental with the Blümlisalp",
    "museum": "Collection not established"
  },
  "hwald02": {
    "title": "Forest with a Mountain Stream",
    "museum": "Collection not established"
  },
  "hfromberg": {
    "title": "The Fromberghorn from Reichenbach",
    "museum": "Collection not established"
  },
  "hthunless": {
    "title": "Lake Thun from Leissigen",
    "museum": "Collection not established"
  },
  "hthunsym04": {
    "title": "Lake Thun with Symmetrical Reflection before Sunrise",
    "museum": "Collection not established"
  },
  "hthunstock04": {
    "title": "Lake Thun with the Stockhorn Range",
    "museum": "Collection not established"
  },
  "hwaldbach04": {
    "title": "Forest Stream near Leissigen",
    "museum": "Collection not established"
  },
  "hthunsym05": {
    "title": "Lake Thun with Symmetrical Reflection",
    "museum": "Collection not established"
  },
  "hchex04": {
    "title": "Lake Geneva from Chexbres",
    "museum": "Collection not established"
  },
  "chexbres": {
    "title": "Lake Geneva from Chexbres",
    "museum": "Kunstmuseum Basel"
  },
  "hgrammont05": {
    "title": "The Grammont",
    "museum": "Collection not established"
  },
  "hgrammont06": {
    "title": "The Grammont",
    "museum": "Collection not established"
  },
  "hsavoyer06": {
    "title": "Lake Geneva with the Savoy Alps",
    "museum": "Collection not established"
  },
  "hrhythm08": {
    "title": "Rhythmic Landscape on Lake Geneva",
    "museum": "Collection not established"
  },
  "hlutschine": {
    "title": "The Black Lütschine",
    "museum": "Collection not established"
  },
  "hkirsch05": {
    "title": "Cherry Tree in Blossom",
    "museum": "Collection not established"
  },
  "htanne05": {
    "title": "Fir Tree near Chamby",
    "museum": "Collection not established"
  },
  "hschnee07": {
    "title": "Snow in the Engadin",
    "museum": "Collection not established"
  },
  "eiger": {
    "title": "Eiger, Mönch and Jungfrau above a Sea of Fog",
    "museum": "Private collection"
  },
  "heigermond": {
    "title": "Eiger, Mönch and Jungfrau in Moonlight",
    "museum": "Collection not established"
  },
  "heigermorgen": {
    "title": "Eiger, Mönch and Jungfrau in the Morning Sun",
    "museum": "Collection not established"
  },
  "hjungf08": {
    "title": "The Jungfrau above a Sea of Fog",
    "museum": "Collection not established"
  },
  "habendnebel": {
    "title": "Evening Fog on Lake Thun",
    "museum": "Collection not established"
  },
  "hjenastud": {
    "title": "Student Putting On His Coat",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hjena": {
    "title": "Setting Out for the Wars of Liberation",
    "museum": "Städel Museum, Frankfurt"
  },
  "hmaeher": {
    "title": "The Mower",
    "museum": "Collection not established"
  },
  "hholz": {
    "title": "The Woodcutter",
    "museum": "Collection not established"
  },
  "heinamut": {
    "title": "Unanimity",
    "museum": "Collection not established"
  },
  "hthunsym09": {
    "title": "Lake Thun with Symmetrical Reflection",
    "museum": "Collection not established"
  },
  "hodler": {
    "title": "Lake Thun with the Stockhorn Range",
    "museum": "Kunsthalle Mannheim"
  },
  "niesen": {
    "title": "The Niesen",
    "museum": "Private collection"
  },
  "hthunniesen": {
    "title": "Lake Thun with the Niesen",
    "museum": "Collection not established"
  },
  "hthunstock11": {
    "title": "Lake Thun with the Stockhorn Range",
    "museum": "Collection not established"
  },
  "hthunabend12": {
    "title": "Lake Thun with the Stockhorn Range in the Evening",
    "museum": "Collection not established"
  },
  "hwinter13": {
    "title": "The Stockhorn Range and Lake Thun in Winter",
    "museum": "Collection not established"
  },
  "hmorhardt": {
    "title": "Portrait of Mathias Morhardt",
    "museum": "Collection not established"
  },
  "hgertrud12": {
    "title": "Portrait of Gertrud Müller",
    "museum": "Collection not established"
  },
  "hhector12": {
    "title": "Portrait of Hector Hodler",
    "museum": "Kunsthaus Zürich"
  },
  "hself12": {
    "title": "Self-Portrait",
    "museum": "Collection not established"
  },
  "hselfrosen": {
    "title": "Self-Portrait with Roses",
    "museum": "Collection not established"
  },
  "hwille": {
    "title": "General Ulrich Wille",
    "museum": "Kunstmuseum Bern"
  },
  "hself16": {
    "title": "Self-Portrait",
    "museum": "Collection not established"
  },
  "hselfkittel": {
    "title": "Self-Portrait in a Green Smock",
    "museum": "Collection not established"
  },
  "hsonne15": {
    "title": "Sunset on Lake Geneva",
    "museum": "Collection not established"
  },
  "hweisshorn15": {
    "title": "The Weisshorn from Montana",
    "museum": "Collection not established"
  },
  "hdents16": {
    "title": "The Dents du Midi",
    "museum": "Collection not established"
  },
  "hblanches16": {
    "title": "The Dents Blanches near Champéry in the Morning Sun",
    "museum": "Collection not established"
  },
  "hbach16": {
    "title": "Mountain Stream near Champéry",
    "museum": "Collection not established"
  },
  "hcaux17": {
    "title": "Lake Geneva from Caux",
    "museum": "Collection not established"
  },
  "hwolken17": {
    "title": "Landscape near Caux with Rising Clouds",
    "museum": "Collection not established"
  },
  "hgrammont17": {
    "title": "The Grammont in the Morning Sun",
    "museum": "Collection not established"
  },
  "hmbdawn": {
    "title": "Lake Geneva with Mont Blanc at Dawn",
    "museum": "Collection not established"
  },
  "hmbred": {
    "title": "Lake Geneva with Mont Blanc in the Red of Dawn",
    "museum": "Collection not established"
  },
  "hmblight": {
    "title": "Lake Geneva with Mont Blanc in Morning Light",
    "museum": "Collection not established"
  },
  "hmbafternoon": {
    "title": "Lake Geneva with Mont Blanc in the Afternoon",
    "museum": "Collection not established"
  },
  "hmbbefore": {
    "title": "Lake Geneva with Mont Blanc before Sunrise",
    "museum": "Collection not established"
  },
  "hmbmarch": {
    "title": "Lake Geneva with Mont Blanc in the Early Morning",
    "museum": "Collection not established"
  },
  "hberthe18": {
    "title": "Portrait of Berthe Hodler",
    "museum": "Collection not established"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.hodler = {
  "title": "Ferdinand Hodler’s Life Journey",
  "life": "1853–1918",
  "part": "Parts 1–2 · 1853–1918",
  "subtitle": "From Bern to Geneva, to the lakes and to Mont Blanc",
  "intro": "Travel with Ferdinand Hodler through his whole life: from childhood in Bern and the early loss of his family, through the apprenticeship with Ferdinand Sommer in Thun, the training with Barthélemy Menn in Geneva, the journey to Madrid, the realism of the 1880s and the Symbolist breakthrough around “The Night” – which we mention only in the station story – to the parallelist landscapes of Lake Thun and Lake Geneva, the murals in Jena and Hanover, and the last views from the Quai du Mont-Blanc. Short stations, pictures to colour and a voice from a letter of 1907. Hodler dies in Geneva on 19 May 1918.",
  "ending": [
    "In the spring of 1918, from the balcony and the window of his apartment at Quai du Mont-Blanc 29, Hodler paints Lake Geneva with Mont Blanc again and again, at different hours of the day. The city of Geneva makes him an honorary citizen.",
    "On 19 May 1918 Ferdinand Hodler dies in Geneva, aged sixty-five, in this same apartment. What remain are the landscapes of the lakes and mountains, the portraits, the murals – and a body of work that made parallelism its principle."
  ],
  "epilogue": "Ferdinand Hodler dies in Geneva on 19 May 1918, in his apartment at Quai du Mont-Blanc 29. Shortly before, he had been made an honorary citizen of the city. What remain are the parallelist landscapes of Lake Thun and Lake Geneva, the summits above a sea of fog, the murals of Jena and Hanover, and the last views of Mont Blanc."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "hodlerwien": {
    "place": "Vienna and the Bernese Oberland · The Breakthrough",
    "when": "1901–1904",
    "mapLabel": "Vienna",
    "intro": [
      "In 1902 Hodler sets up a studio at Rue du Rhône 29 in Geneva. In 1903 he is in Vienna and becomes a friend of Gustav Klimt, Koloman Moser and Josef Hoffmann. In 1904 he is guest of honour at the 19th Vienna Secession; with that, the international breakthrough has come.",
      "At the same time he goes on painting landscapes: Lake Geneva from Saint-Prex, the Jungfrau from the Isenfluh, the Kiental and the Fromberghorn. The forms grow sparer, the repetition clearer."
    ]
  },
  "hodlerleissigen": {
    "place": "Leissigen · Lake Thun",
    "when": "1904–1905",
    "mapLabel": "Leissigen",
    "intro": [
      "In 1904 Hodler works at Lake Thun, often from Leissigen. Views of the lake with the Stockhorn range appear, symmetrical reflections before sunrise, and the forest stream immediately outside the village.",
      "Symmetrical reflection becomes a core of his parallelism. In 1905 he travels to Italy and studies Giotto, among other masters; in the same year he paints the lake again as a calm mirror."
    ]
  },
  "hodlerchexbres": {
    "place": "Chexbres and Lake Geneva",
    "when": "1904–1908",
    "mapLabel": "Chexbres",
    "intro": [
      "From the heights above Chexbres, Hodler paints Lake Geneva in broad, parallel bands. Versions of this view date from 1904 and 1905; added to them are the Grammont on the southern shore, in 1905 and 1906, and the view of the Savoy Alps.",
      "In 1908 “Rhythmic Landscape on Lake Geneva” takes parallelism a long way. In October 1907 Hodler had thanked Carl Albert Loosli for an article that had caught this principle."
    ]
  },
  "hodlerbaeume": {
    "place": "Trees, Streams and the Engadin",
    "when": "1905–1907",
    "mapLabel": "Trees",
    "intro": [
      "Besides the wide views of the lakes, Hodler paints single trees and nearby waters: the Black Lütschine, a cherry tree in blossom, a fir near Chamby above Montreux.",
      "“Snow in the Engadin” dates from 1907. Even far from the great lakes, the clear layering of foreground, forest and summit remains his theme."
    ]
  },
  "hodleroberland": {
    "place": "Bernese Oberland · Eiger, Mönch and Jungfrau",
    "when": "1908",
    "mapLabel": "Oberland",
    "intro": [
      "In 1908 Hodler paints the Eiger, Mönch and Jungfrau above a sea of fog, in moonlight and in the morning sun, among other standpoints from the Schynige Platte. Evening fog on Lake Thun is added to these.",
      "In the same year he has exhibitions in Jena and Frankfurt, becomes central president of the Society of Swiss Painters, Sculptors and Architects, and meets Valentine Godé-Darel."
    ]
  },
  "hodlermurale": {
    "place": "Jena and Hanover · Labour and Murals",
    "when": "1908–1913",
    "mapLabel": "Jena",
    "intro": [
      "In 1897 Hodler had won the competition for the Marignano murals in the Landesmuseum Zürich. A fierce dispute over art followed; only when the Federal Council approved one of the designs could the project go on. The last version was made in 1899. In 1908–09 he receives the commission in Jena for “The Departure of the Jena Students to the War of Liberation of 1813”.",
      "In 1911 “The Mower” and “The Woodcutter” appear on Swiss banknotes. In the same year he receives the commission for “Unanimity” in the New Town Hall in Hanover, completed in 1913. In 1909 Augustine Dupin dies. In 1910 Hodler sets up a second studio in the Acacias and receives an honorary doctorate from the University of Basel."
    ]
  },
  "hodlerthun": {
    "place": "Lake Thun · Stockhorn and Niesen",
    "when": "1909–1913",
    "mapLabel": "Thun",
    "intro": [
      "In the summer of 1910 Hodler works at Lake Thun on series of the Stockhorn and the Niesen. The symmetrical reflection of 1909, the Mannheim version of the Stockhorn range and the Niesen from Heustrich in the rain belong to these years.",
      "He records the same motif in the November light, in the evening and in winter. The repetition is not a stopgap, but the principle."
    ]
  },
  "hodlerbildnisse": {
    "place": "Geneva · Portraits and Family",
    "when": "1911–1917",
    "mapLabel": "Portraits",
    "intro": [
      "Besides the landscapes, many portraits are made in these years: the critic Mathias Morhardt, the collector Gertrud Müller, his son Hector, self-portraits, and in 1916 General Ulrich Wille. In 1913 the daughter Pauline-Valentine is born, from the relationship with Valentine Godé-Darel. In the autumn of the same year Hodler is at the Paris Salon d’Automne, meets Auguste Rodin and is made an officer of the Légion d’honneur. The family moves to Quai du Mont-Blanc 29; the apartment is furnished by Josef Hoffmann.",
      "In 1914 Hodler signs the protest against the bombardment of Reims Cathedral; German artists’ associations then exclude him. On 25 January 1915 Valentine Godé-Darel dies in Vevey. In 1916 and 1917 Hodler teaches a painting class at the École des Beaux-Arts in Geneva. In 1917 the Kunsthaus Zürich mounts a large retrospective; in the same year he suffers a pulmonary oedema."
    ]
  },
  "hodlerchampery": {
    "place": "Champéry, Montana and Caux",
    "when": "1915–1917",
    "mapLabel": "Caux",
    "intro": [
      "In 1915 Hodler paints a sunset on Lake Geneva and the Weisshorn from Montana. In 1916 and 1917 he stays in Champéry and Montana, where his son Hector is recovering from tuberculosis. The Dents du Midi, the Dents Blanches and a mountain stream near Champéry are made.",
      "In 1917 he looks from Caux above Montreux onto Lake Geneva, paints rising clouds and returns to the Grammont in the morning sun."
    ]
  },
  "hodlermontblanc": {
    "place": "Geneva · Quai du Mont-Blanc",
    "when": "1918",
    "mapLabel": "1918",
    "intro": [
      "In the spring of 1918, from the window and the balcony of his apartment at Quai du Mont-Blanc 29, Hodler paints Lake Geneva with Mont Blanc, at dawn, in the red of dawn, in morning light, in the afternoon, before sunrise. The city of Geneva makes him an honorary citizen.",
      "A portrait of his wife Berthe is also made. On 19 May 1918 Ferdinand Hodler dies in Geneva, in this same apartment, aged sixty-five."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "hstprex": {
    "text": [
      "From Saint-Prex, Lake Geneva lies in calm, horizontal bands, the mountains on the Savoy side as a clear silhouette.",
      "The picture dates from 1901, a year after the gold medal in Paris. Hodler seeks the landscape in a few, repeated lines."
    ],
    "fact": "1901. Collection not established."
  },
  "hisenfluh": {
    "text": [
      "From the Isenfluh the Jungfrau stands firm above the heights in front of it, the sky light and wide.",
      "In 1902 Hodler sets up a studio at Rue du Rhône 29 in Geneva. At the same time he keeps returning to the Bernese Oberland."
    ],
    "fact": "1902. Collection not established."
  },
  "hkiental": {
    "text": [
      "The Kiental opens downhill; above it the Blümlisalp lies in calm, stepped forms.",
      "The picture is dated 1902. Hodler simplifies valley, slope and summit until the repetition of the lines itself becomes the motif."
    ],
    "fact": "1902. Collection not established."
  },
  "hwald02": {
    "text": [
      "A stream flows between trunks and stones; the light falls in bands into the wood.",
      "Even after 1900 the mountain stream remains a motif. Hodler observes the flow and the vertical trunks side by side."
    ],
    "fact": "1902. Collection not established."
  },
  "hfromberg": {
    "text": [
      "The Fromberghorn rises as a clear, almost triangular form above the valley of Reichenbach.",
      "The picture dates from 1903. In the same year Hodler is in Vienna and becomes a friend of Gustav Klimt, Koloman Moser and Josef Hoffmann."
    ],
    "fact": "1903. Collection not established."
  },
  "hthunless": {
    "text": [
      "From Leissigen, Lake Thun lies still, the mountains behind it in a calm range.",
      "In 1904 Hodler is guest of honour at the 19th Vienna Secession; the international breakthrough has come. In the same year he works at Lake Thun, often from Leissigen."
    ],
    "fact": "1904. Collection not established."
  },
  "hthunsym04": {
    "text": [
      "Before sunrise the mountain range is reflected almost exactly in the lake; sky and water divide the picture into calm bands.",
      "The symmetrical reflection is a core of Hodler’s parallelism: the landscape becomes an order of repeated lines."
    ],
    "fact": "1904. Collection not established."
  },
  "hthunstock04": {
    "text": [
      "The Stockhorn range lies above the light-filled lake, with stones and a low shore in the foreground.",
      "Hodler paints this motif over decades, in ever clearer versions. In 1904 one of the early, strictly constructed variants is made."
    ],
    "fact": "1904. Collection not established."
  },
  "hwaldbach04": {
    "text": [
      "A stream rushes downhill between mossy stones and trunks, the water bright, the wood dense.",
      "Besides the wide views of the lake, in 1904 Hodler also records the nearby forest stream at Leissigen."
    ],
    "fact": "1904. Collection not established."
  },
  "hthunsym05": {
    "text": [
      "Again the lake lies there as a mirror: the mountains above, their repetition below, in calm symmetry.",
      "The picture is dated 1905. In the same year Hodler travels to Italy and studies Giotto, among other masters."
    ],
    "fact": "1905. Collection not established."
  },
  "hchex04": {
    "text": [
      "From the heights above Chexbres, Lake Geneva lies in broad bands of colour, the mountains opposite as a calm range.",
      "Chexbres above the lake becomes a recurring standpoint for Hodler. In 1904 an early version of this view is made."
    ],
    "fact": "1904. Collection not established."
  },
  "chexbres": {
    "text": [
      "Lake, shore and sky lie in calm, parallel strips: turquoise, violet, a light sky.",
      "The 1905 version hangs in the Kunstmuseum Basel. Hodler reduces the landscape to large, clear bands."
    ],
    "fact": "1905. Kunstmuseum Basel."
  },
  "hgrammont05": {
    "text": [
      "The Grammont rises as a broad, clear form above Lake Geneva, the slope in a few fields of colour.",
      "Hodler paints the mountain on the southern shore of the lake several times. The 1905 version shows it firm and simplified."
    ],
    "fact": "1905. Collection not established."
  },
  "hgrammont06": {
    "text": [
      "A year later the Grammont again stands above the lake, the form still more definite, the lake a calm surface.",
      "Repeating the same mountain at different times is part of Hodler’s method: the same motif, a new order."
    ],
    "fact": "1906. Collection not established."
  },
  "hsavoyer06": {
    "text": [
      "The lake lies across the width of the picture; opposite, the Savoy Alps in a calm, serrated range.",
      "This view across Lake Geneva dates from around 1906. The French side opposite becomes a clear silhouette."
    ],
    "fact": "um 1906. Collection not established."
  },
  "hrhythm08": {
    "text": [
      "Shore, water and mountains swing in repeated, rhythmic lines across the surface, almost without detail.",
      "The picture of 1908 takes parallelism a long way: the landscape becomes a rhythm. The year before, Hodler thanks Carl Albert Loosli for an article that had caught precisely this principle."
    ],
    "fact": "1908. Collection not established.",
    "quote": {
      "text": "At last I am sending your article back to you, your masterpiece. It is quite splendid, well thought through and written. In a short space you have expressed yourself very happily concerning parallelism. I believe that someone has understood me at last.",
      "cite": "Letter to C. A. Loosli, 10 October 1907. Musée d’art et d’histoire, Neuchâtel."
    }
  },
  "hlutschine": {
    "text": [
      "The Black Lütschine flows between rocks and forest, the water bright on the dark bed.",
      "The river comes from the Oberland near Grindelwald and Zweilütschinen. In 1905 Hodler records its course in clear, repeated movements."
    ],
    "fact": "1905. Collection not established."
  },
  "hkirsch05": {
    "text": [
      "A cherry tree stands in full blossom, the crown light, the trunk firm and solitary.",
      "For Hodler, single trees are almost like figures. The blossoming cherry tree of 1905 belongs in the same line as the earlier chestnuts."
    ],
    "fact": "1905. Collection not established."
  },
  "htanne05": {
    "text": [
      "A single fir stands against a light ground, the branches clearly placed, the trunk straight.",
      "Chamby lies above Montreux, not far from Lake Geneva. Hodler isolates the tree until it works like a sign."
    ],
    "fact": "1905. Collection not established."
  },
  "hschnee07": {
    "text": [
      "A winter plateau in the Engadin: snow, dark woods, and a calm mountain range above.",
      "The picture is dated 1907. Even far from the great lakes, Hodler seeks the clear layering of foreground, forest and summit."
    ],
    "fact": "1907. Collection not established."
  },
  "eiger": {
    "text": [
      "Out of a sea of clouds, the Eiger, Mönch and Jungfrau rise as clear, rhythmic forms.",
      "The 1908 version is among Hodler’s best-known Alpine pictures. The motif recalls Friedrich’s “Wanderer above the Sea of Fog”, but does without a figure in the foreground."
    ],
    "fact": "1908. Private collection."
  },
  "heigermond": {
    "text": [
      "The same group of three stands in the moonlight, the summits pale, the sky deep and still.",
      "In 1908 Hodler paints the Jungfrau group at different times of day and night, among other standpoints from the Schynige Platte."
    ],
    "fact": "1908. Collection not established."
  },
  "heigermorgen": {
    "text": [
      "In the morning sun the three summits shine, the flanks clearly set off from one another.",
      "The series of 1908 shows how Hodler changes a motif through light and hour without giving up the basic form."
    ],
    "fact": "1908. Collection not established."
  },
  "hjungf08": {
    "text": [
      "The Jungfrau stands alone above the fog, a firm, pale form over the soft cover of cloud.",
      "Besides the group of three, in 1908 Hodler also isolates the single summit. The simplification goes still further."
    ],
    "fact": "1908. Collection not established."
  },
  "habendnebel": {
    "text": [
      "In the evening, fog lies over Lake Thun, the mountains behind it now only calm shadows.",
      "In 1908 the lake itself also becomes a picture of fog. Light and mist loosen the contours; the order remains."
    ],
    "fact": "1908. Collection not established."
  },
  "hjenastud": {
    "text": [
      "A young man pulls on his coat, firm in the movement; in the background a row of small figures on the horizon.",
      "The 1908 lithograph belongs to the circle of the Jena mural. Hodler studies single gestures before the large composition is made. The sheet is in the Rijksmuseum in Amsterdam."
    ],
    "fact": "1908. Rijksmuseum, Amsterdam."
  },
  "hjena": {
    "text": [
      "Soldiers on horseback and on foot, horses, a woman with a child: a study of the movement of a troop setting out.",
      "In 1908–09 the mural “The Departure of the Jena Students to the War of Liberation of 1813” is made in Jena. This drawing in the Städel Museum in Frankfurt records the composition."
    ],
    "fact": "1908. Städel Museum, Frankfurt."
  },
  "hmaeher": {
    "text": [
      "A mower stands with his scythe in a wide-swung movement, the body clearly outlined, the gesture repeated and firm.",
      "In 1911 motifs after “The Mower” and “The Woodcutter” appear on Swiss banknotes. The figures thus become known to a wide public."
    ],
    "fact": "1910. Collection not established."
  },
  "hholz": {
    "text": [
      "A woodcutter swings his axe, his legs firmly planted, the stroke as a clear, large movement.",
      "Like the mower, the woodcutter belongs to Hodler’s figures of labour. These austere, poster-like versions date from 1910."
    ],
    "fact": "1910. Collection not established."
  },
  "heinamut": {
    "text": [
      "A dense group of men raise their arms; in the middle a figure stands on a pedestal with arms outstretched.",
      "In 1911 Hodler receives the commission for the mural “Unanimity” in the New Town Hall in Hanover; it is completed in 1913. The design shows the gathered gesture of assent."
    ],
    "fact": "um 1913. Collection not established."
  },
  "hthunsym09": {
    "text": [
      "The lake reflects the mountains once more, almost on an axis, in a still, constructed order.",
      "The 1909 version carries further the motif of symmetrical reflection that Hodler has pursued at Lake Thun since 1904."
    ],
    "fact": "1909. Collection not established."
  },
  "hodler": {
    "text": [
      "The Stockhorn range lies clearly above the lake, its forms repeating almost symmetrically in the water.",
      "The 1910 version hangs in the Kunsthalle Mannheim. In the summer of this year Hodler works at Lake Thun on series of the Stockhorn and the Niesen."
    ],
    "fact": "1910. Kunsthalle Mannheim."
  },
  "niesen": {
    "text": [
      "The Niesen rises as a dark, almost triangular pyramid behind the lake and the rain-filled air.",
      "The 1910 version is painted from Heustrich in the rain. That is why the mountain looks softer than in sunny versions."
    ],
    "fact": "1910. Private collection."
  },
  "hthunniesen": {
    "text": [
      "Above the wide lake the Niesen stands as a clear, dark form, the sky light, the water calm.",
      "Besides the isolated mountain pyramid, in 1910 Hodler also paints the Niesen as part of the whole lake landscape."
    ],
    "fact": "1910. Collection not established."
  },
  "hthunstock11": {
    "text": [
      "In the November light the Stockhorn range lies above the lake, the forms firm, the colours cooler.",
      "The picture is dated November 1910. In 1910 Hodler sets up a second studio in the Acacias in Geneva and receives an honorary doctorate from the University of Basel."
    ],
    "fact": "1910. Collection not established."
  },
  "hthunabend12": {
    "text": [
      "In the evening lake and mountains darken; the Stockhorn range remains visible as a calm silhouette.",
      "This evening version dates from around 1912. Hodler records the same motif at a different hour."
    ],
    "fact": "um 1912. Collection not established."
  },
  "hwinter13": {
    "text": [
      "In winter, snow lies on the slopes and on the shore; the Stockhorn range stands bare and pale above the lake.",
      "The picture is dated 1913. The cold season, too, belongs in the long series of pictures of Lake Thun."
    ],
    "fact": "1913. Collection not established."
  },
  "hmorhardt": {
    "text": [
      "Mathias Morhardt sits or stands in a dark coat, the face firmly modelled, the gaze calm.",
      "Morhardt, a writer and critic, supported Hodler early on in Paris. The portrait dates from 1911."
    ],
    "fact": "1911. Collection not established."
  },
  "hgertrud12": {
    "text": [
      "Gertrud Müller looks at us openly, in a light-coloured dress, the background plain.",
      "The collector from Solothurn is among Hodler’s important patrons. The portrait dates from around 1912."
    ],
    "fact": "um 1912. Collection not established."
  },
  "hhector12": {
    "text": [
      "Hector, Hodler’s son, appears as a young man, his gaze firm, the face brought close to us.",
      "Hector was born in 1887, the son of Hodler and Augustine Dupin. The portrait of around 1912 hangs in the Kunsthaus Zürich."
    ],
    "fact": "um 1912. Kunsthaus Zürich."
  },
  "hself12": {
    "text": [
      "Hodler shows himself: beard, an open gaze, a white collar under the dark coat, very close.",
      "The self-portrait of 1912 belongs to a long series in which he records his own appearance again and again."
    ],
    "fact": "1912. Collection not established."
  },
  "hselfrosen": {
    "text": [
      "Hodler stands before us, roses behind or beside him, his gaze serious, his bearing upright.",
      "The picture dates from 1914. In the same year Hodler signs the protest against the bombardment of Reims Cathedral; German artists’ associations then exclude him."
    ],
    "fact": "1914. Collection not established."
  },
  "hwille": {
    "text": [
      "General Ulrich Wille sits in uniform, his gaze firm, the bearing of a man in office.",
      "During the First World War, Wille is commander-in-chief of the Swiss army. The portrait of 1916 hangs in the Kunstmuseum Bern."
    ],
    "fact": "1916. Kunstmuseum Bern."
  },
  "hself16": {
    "text": [
      "Again Hodler shows himself, the face closer, the features more marked, the gaze unwavering.",
      "The self-portrait of 1916 is made in the war years, during which he teaches in Geneva and seeks refuge in the mountains."
    ],
    "fact": "1916. Collection not established."
  },
  "hselfkittel": {
    "text": [
      "Hodler wears a green painter’s smock, the face close, the gaze alert and serious.",
      "The portrait of 1917 shows him at work. In the same year the Kunsthaus Zürich mounts a large retrospective of his work; he suffers a pulmonary oedema."
    ],
    "fact": "1917. Collection not established."
  },
  "hsonne15": {
    "text": [
      "In the evening the sun stands low over Lake Geneva, water and sky in warm, horizontal bands.",
      "The picture dates from 1915. On 25 January of this year Valentine Godé-Darel dies in Vevey."
    ],
    "fact": "1915. Collection not established."
  },
  "hweisshorn15": {
    "text": [
      "From Montana the Weisshorn stands as a pale, firm form above the valley, the flanks clearly articulated.",
      "In 1915 and the following years Hodler stays in Montana and Champéry. From there he paints the Valais summits."
    ],
    "fact": "1915. Collection not established."
  },
  "hdents16": {
    "text": [
      "The Dents du Midi rise as a serrated range, the peaks rhythmically repeated, the sky light.",
      "In 1916 and 1917 Hodler stays in Champéry and Montana, where his son Hector is recovering from tuberculosis."
    ],
    "fact": "1916. Collection not established."
  },
  "hblanches16": {
    "text": [
      "In the morning sun the Dents Blanches near Champéry shine, the slopes in warm and cool planes.",
      "The picture is dated 1916. In these years the mountains around Champéry become a new, firm motif."
    ],
    "fact": "1916. Collection not established."
  },
  "hbach16": {
    "text": [
      "A mountain stream rushes between stones and slopes, the water bright, the movement clear and repeated.",
      "Besides the summits, in 1916 Hodler also paints the nearby stream at Champéry, as he earlier painted the streams of the Oberland."
    ],
    "fact": "1916. Collection not established."
  },
  "hcaux17": {
    "text": [
      "From Caux above Montreux, Lake Geneva lies deep and wide, the mountains opposite in a calm line.",
      "The picture dates from 1917. The standpoint high above the lake again gives Hodler the broad, parallel bands of water and sky."
    ],
    "fact": "1917. Collection not established."
  },
  "hwolken17": {
    "text": [
      "Over the landscape near Caux, clouds rise; the sky is restless, the slopes firm beneath it.",
      "In 1917 Caux remains a standpoint. Hodler records not only the still lake, but also the unsettled sky."
    ],
    "fact": "1917. Collection not established."
  },
  "hgrammont17": {
    "text": [
      "In the morning sun the Grammont shines above the lake, the slopes in warm yellow and cool violet, the lake a clear mirror.",
      "More than ten years after the first pictures of the Grammont, in 1917 Hodler returns to this mountain, now in the morning sun."
    ],
    "fact": "1917. Collection not established."
  },
  "hmbdawn": {
    "text": [
      "At dawn Mont Blanc lies above Lake Geneva, the forms soft, the light still pale.",
      "In 1918 Hodler paints the view from his apartment at Quai du Mont-Blanc 29 again and again, at different hours of the day."
    ],
    "fact": "1918. Collection not established."
  },
  "hmbred": {
    "text": [
      "In the red of dawn, lake and sky take on colour; Mont Blanc stands as a calm, distant form above the water.",
      "The series is made from the window and the balcony. In 1918 Geneva makes Hodler an honorary citizen."
    ],
    "fact": "1918. Collection not established."
  },
  "hmblight": {
    "text": [
      "In the morning light the lake grows clearer, Mont Blanc firmer, the horizontal bands more distinct.",
      "Hodler hardly changes the framing, only the light. The repetition of the same view is itself the theme."
    ],
    "fact": "1918. Collection not established."
  },
  "hmbafternoon": {
    "text": [
      "In the afternoon a different light lies on lake and mountains, the colours warmer, the distant view wide.",
      "This time of day, too, belongs to the last series. Hodler watches the same view until the hour changes it."
    ],
    "fact": "1918. Collection not established."
  },
  "hmbbefore": {
    "text": [
      "Before sunrise, lake and sky are still cool, Mont Blanc a pale, calm mass on the horizon.",
      "The hour before the rise is among the stillest in the series. A little later, on 19 May 1918, Hodler dies in this same apartment."
    ],
    "fact": "1918. Collection not established."
  },
  "hmbmarch": {
    "text": [
      "In the early morning in March, Mont Blanc lies above the lake, the air clear, the lines calm.",
      "The picture is dated March 1918, two months before Hodler’s death. The series continues into his last weeks."
    ],
    "fact": "März 1918. Collection not established."
  },
  "hberthe18": {
    "text": [
      "Berthe Hodler, née Jacques, appears in a plain portrait, the face calm and close.",
      "Hodler met her in 1894 and married her in 1898. The portrait dates from 1918, the last year of his life."
    ],
    "fact": "1918. Collection not established."
  }
});
})();
