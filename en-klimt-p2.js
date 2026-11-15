// v8.0 English content for Klimt’s life journey, Part 2, completing the path.
// Extends window.EN; overwrites EN.paths.klimt with whole-path meta.
// Does not rewrite en-klimt.js entries for Part 1 works.
(function () {
  var EN = window.EN = window.EN || {};
  var museums = {
  "Präfekturmuseum Aichi, Nagoya": "Aichi Prefectural Museum of Art, Nagoya",
  "Historische Fotografie; das Original verbrannte 1945 auf Schloss Immendorf": "Historical photograph; the original burned in 1945 at Immendorf Castle",
  "Privatbesitz": "Private collection",
  "Leopold Museum, Wien": "Leopold Museum, Vienna",
  "Neue Pinakothek, München": "Neue Pinakothek, Munich",
  "Österreichische Galerie Belvedere, Wien": "Österreichische Galerie Belvedere, Vienna",
  "Sammlung nicht ermittelt": "Collection not established",
  "MAK – Museum für angewandte Kunst, Wien": "MAK – Museum of Applied Arts, Vienna",
  "Nationalgalerie Prag": "National Gallery Prague",
  "Städtisches Kunstmuseum Toyota": "Toyota Municipal Museum of Art"
};
  EN.museums = Object.assign(EN.museums || {}, museums);
  var works = {
  "goldknight": {
    "title": "The Golden Knight",
    "museum": "Aichi Prefectural Museum of Art, Nagoya"
  },
  "goldapple": {
    "title": "Golden Apple Tree",
    "museum": "Historical photograph; the original burned in 1945 at Immendorf Castle"
  },
  "birkforest": {
    "title": "Birch Forest",
    "museum": "Private collection"
  },
  "poplar2": {
    "title": "The Large Poplar II (Approaching Thunderstorm)",
    "museum": "Leopold Museum, Vienna"
  },
  "kpeartree": {
    "title": "Pear Tree",
    "museum": "Busch-Reisinger Museum, Harvard Art Museums, Cambridge"
  },
  "wittgenstein": {
    "title": "Portrait of Margaret Stonborough-Wittgenstein",
    "museum": "Neue Pinakothek, Munich"
  },
  "gallia": {
    "title": "Portrait of Hermine Gallia",
    "museum": "National Gallery, London"
  },
  "fritza": {
    "title": "Portrait of Fritza Riedler",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "adelestudy": {
    "title": "Study for the Portrait of Adele Bloch-Bauer I",
    "museum": "Collection not established"
  },
  "adele": {
    "title": "Portrait of Adele Bloch-Bauer I",
    "museum": "Neue Galerie, New York"
  },
  "rosetrees": {
    "title": "Rosebushes under the Trees",
    "museum": "Musée d’Orsay, Paris"
  },
  "kissdetail": {
    "title": "The Kiss (detail)",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "sunfarm": {
    "title": "Farm Garden with Sunflowers",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "ksunflower": {
    "title": "The Sunflower",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kpoppies": {
    "title": "Poppy Field",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "meadow": {
    "title": "Flowering Meadow",
    "museum": "Private collection"
  },
  "stocletexp": {
    "title": "Expectation (working design)",
    "museum": "MAK – Museum of Applied Arts, Vienna"
  },
  "stocletembrace": {
    "title": "The Embrace (working design)",
    "museum": "MAK – Museum of Applied Arts, Vienna"
  },
  "stoclettree": {
    "title": "The Tree of Life (working design)",
    "museum": "MAK – Museum of Applied Arts, Vienna"
  },
  "stocletritter": {
    "title": "The Knight (working design)",
    "museum": "MAK – Museum of Applied Arts, Vienna"
  },
  "stocletrose": {
    "title": "Rosebush (working design)",
    "museum": "MAK – Museum of Applied Arts, Vienna"
  },
  "featherboa": {
    "title": "Lady with Hat and Feather Boa",
    "museum": "Private collection"
  },
  "barbarafloege": {
    "title": "Portrait of Barbara Flöge",
    "museum": "Collection not established"
  },
  "thepark": {
    "title": "The Park",
    "museum": "Museum of Modern Art, New York"
  },
  "kammer2": {
    "title": "Schloss Kammer on the Attersee II",
    "museum": "Private collection"
  },
  "kammer3": {
    "title": "Schloss Kammer on the Attersee III",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kammer4": {
    "title": "Schloss Kammer on the Attersee IV",
    "museum": "Private collection"
  },
  "kammerave": {
    "title": "Avenue to Schloss Kammer",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kammerpark": {
    "title": "Park at Kammer Castle",
    "museum": "Neue Galerie, New York"
  },
  "watercastle": {
    "title": "Water Castle",
    "museum": "National Gallery Prague"
  },
  "oefarm": {
    "title": "Farmhouse in Upper Austria",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kapple": {
    "title": "Apple Tree I",
    "museum": "Private collection"
  },
  "kapple2": {
    "title": "Apple Tree II",
    "museum": "Collection not established"
  },
  "malcesine": {
    "title": "Malcesine on Lake Garda",
    "museum": "Historical photograph; the original burned in 1945 at Immendorf Castle"
  },
  "cassone": {
    "title": "Church in Cassone",
    "museum": "Private collection"
  },
  "italygarden": {
    "title": "Italian Garden Landscape",
    "museum": "Kunsthaus Zug"
  },
  "unterach": {
    "title": "Houses in Unterach am Attersee",
    "museum": "Collection not established"
  },
  "ualslope": {
    "title": "Forest Slope at Unterach am Attersee",
    "museum": "Private collection"
  },
  "litzlberg": {
    "title": "Litzlberg am Attersee",
    "museum": "Private collection"
  },
  "litzkeller": {
    "title": "Litzlbergkeller",
    "museum": "Leopold Museum, Vienna"
  },
  "weissenbach": {
    "title": "Forester’s House in Weissenbach II",
    "museum": "Collection not established"
  },
  "pfarrgarten": {
    "title": "Garden Landscape with Hilltop (Parish Garden)",
    "museum": "Collection not established"
  },
  "mada": {
    "title": "Portrait of Mäda Primavesi",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "adele2": {
    "title": "Portrait of Adele Bloch-Bauer II",
    "museum": "Private collection"
  },
  "eugenia": {
    "title": "Portrait of Eugenia Primavesi",
    "museum": "Toyota Municipal Museum of Art"
  },
  "fmbeer": {
    "title": "Portrait of Friederike Maria Beer",
    "museum": "Tel Aviv Museum of Art"
  },
  "ladyfan": {
    "title": "Lady with Fan",
    "museum": "Private collection"
  },
  "dancer": {
    "title": "The Dancer",
    "museum": "Neue Galerie, New York"
  },
  "riamunk3": {
    "title": "Portrait of Ria Munk III",
    "museum": "Private collection"
  },
  "deathfig": {
    "title": "Death and Life (detail: Death)",
    "museum": "Leopold Museum, Vienna"
  },
  "riamunkbed": {
    "title": "Ria Munk on her Deathbed",
    "museum": "Private collection"
  },
  "staude": {
    "title": "Portrait of Johanna Staude",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "zuckerkandl": {
    "title": "Portrait of Amalie Zuckerkandl",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kbaby": {
    "title": "Baby (Cradle)",
    "museum": "National Gallery of Art, Washington"
  },
  "ladyhead": {
    "title": "Head of a Woman",
    "museum": "LENTOS Kunstmuseum Linz"
  },
  "ladypiacenza": {
    "title": "Portrait of a Lady",
    "museum": "Galleria d’Arte Moderna Ricci Oddi, Piacenza"
  },
  "ladywhite": {
    "title": "Lady in White",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kiss": {
    "title": "The Kiss",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kgarden": {
    "title": "Farm Garden",
    "museum": "Private collection"
  }
};
  EN.works = Object.assign(EN.works || {}, works);
  EN.paths = EN.paths || {};
  EN.paths.klimt = {
  "title": "Klimt’s Life Journey",
  "life": "1862–1918",
  "part": "Parts 1–2 · 1862–1918",
  "subtitle": "From Baumgarten to the last pictures",
  "intro": "Travel with Gustav Klimt through his whole life: from childhood in Baumgarten and the Kunstgewerbeschule, through the Künstler-Compagnie, the Burgtheater and the Kunsthistorisches Museum, the deaths of his father and brother in 1892, the Secession and the Beethoven Frieze, to the golden years, the Kunstschau of 1908, the Stoclet Frieze, Emilie Flöge, the landscapes at the Attersee and Lake Garda, the late colourful portraits and “Death and Life”. Short stations, pictures to colour, and documented voices: postcards and a letter to Emilie Flöge, and the address at the Kunstschau. Klimt dies in Vienna on 6 February 1918.",
  "ending": [
    "In the last years colourful portraits and landscapes appear, together with unfinished portraits such as Johanna Staude, Amalie Zuckerkandl and the “Lady in White”. In 1916 Klimt spends his last shared summer with Emilie Flöge at the Attersee. On 30 December 1917 he writes to her from Winkelsdorf: “…a greeting from the innermost heart, and [I] wish you a most, most happy New Year – as we both so urgently need it.”",
    "On 11 January 1918 Klimt suffers a stroke in Vienna. He dies on 6 February 1918 in the General Hospital in Vienna, at the age of fifty-six.",
    "What remains includes “The Kiss” at the Belvedere, the golden portrait of Adele Bloch-Bauer, the working designs for the Stoclet Frieze at the MAK, the landscapes from the Attersee and Lake Garda, and the late portraits. Of himself, he had written, there was no self-portrait: one should look at his pictures."
  ],
  "epilogue": "On 11 January 1918 Gustav Klimt suffers a stroke in Vienna. He dies on 6 February 1918 in the General Hospital, at the age of fifty-six. What remains are “The Kiss”, the golden portraits, the Stoclet Frieze, the landscapes and the late portraits – and the voices from cards and letters to Emilie Flöge."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "klimtgold": {
    "place": "Vienna · The golden years",
    "when": "1903–1907",
    "mapLabel": "Gold",
    "intro": [
      "In December 1903 Klimt travels to Ravenna. On a postcard to Emilie Flöge he writes of much that is poor – and of mosaics of unheard-of splendour. In the following years the golden style grows denser in portraits and in individual tree and woodland pictures.",
      "There appear, among other works, the portrait of Hermine Gallia, that of Margaret Stonborough-Wittgenstein and that of Fritza Riedler, then in 1907 the golden portrait of Adele Bloch-Bauer. Beside them stand “The Golden Knight”, the “Golden Apple Tree” and landscapes such as “Birch Forest”."
    ]
  },
  "klimtkunstschau": {
    "place": "Vienna · The Kunstschau 1908",
    "when": "1908",
    "mapLabel": "Kunstschau",
    "intro": [
      "In 1905 the so-called Klimt Group leaves the Secession. On 1 June 1908 Klimt opens the Kunstschau in a temporary building erected by Josef Hoffmann on the site of today’s Konzerthaus. In the ceremonial address he says that no area of human life is too insignificant to offer room for artistic endeavour.",
      "In the room designed for Klimt there hangs, among other works, “The Kiss” of 1907 to 1908. The Austrian state buys the picture for the Moderne Galerie, today’s Belvedere. In the same years dense garden and meadow pictures appear."
    ]
  },
  "klimtstoclet": {
    "place": "Vienna · The Stoclet Frieze",
    "when": "about 1905–1911",
    "mapLabel": "Stoclet",
    "intro": [
      "For the dining room of the Palais Stoclet in Brussels, a house by Josef Hoffmann and the Wiener Werkstätte for the industrialist Adolphe Stoclet, Klimt designs a frieze: Expectation, the Tree of Life, the Embrace, and with them the Knight and the rosebush.",
      "The working designs and cartoons of 1910 to 1911 are kept at the MAK in Vienna. The frieze itself is installed in Brussels."
    ]
  },
  "klimtfloege": {
    "place": "Vienna · Emilie Flöge and the salon",
    "when": "1904–1915",
    "mapLabel": "Flöge",
    "intro": [
      "On 1 July 1904 Emilie, Helene and Pauline Flöge found the fashion salon “Schwestern Flöge” in the Casa Piccola on the Mariahilfer Strasse. The rooms are designed by Josef Hoffmann and Koloman Moser.",
      "Klimt still spends the summers with the Flöge family at the Attersee. In 1909 he travels to Spain and writes from Toledo: “El Greco is magnificent!” In 1915 the portrait of Emilie Flöge’s mother Barbara appears."
    ]
  },
  "klimtkammer": {
    "place": "Attersee · Schloss Kammer",
    "when": "1908–1912",
    "mapLabel": "Kammer",
    "intro": [
      "In the summers at the Attersee, Schloss Kammer on the northern shore becomes a recurring motif. Klimt paints the castle from the lake in several versions, later also the avenue and the park.",
      "Beside them appear a water castle, a farmhouse in Upper Austria and apple trees. The landscapes remain without gold, but just as dense across the surface."
    ]
  },
  "klimtgarda": {
    "place": "Lake Garda · Malcesine and Cassone",
    "when": "1913",
    "mapLabel": "Garda",
    "intro": [
      "In 1913 Klimt travels to Lake Garda. Views of Malcesine and of the church in Cassone appear, as well as an Italian garden landscape.",
      "“Malcesine on Lake Garda” burns in 1945 at Immendorf Castle, together with other works that had been stored there. A historical photograph survives."
    ]
  },
  "klimtunterach": {
    "place": "Attersee · Unterach and Litzlberg",
    "when": "1914–1916",
    "mapLabel": "Unterach",
    "intro": [
      "In the later summers the gaze turns more strongly toward Unterach on the south-eastern shore, toward Litzlberg and Weissenbach. Views of the village and the shore appear, a forest slope and garden landscapes.",
      "In 1916 Klimt spends his last shared summer with Emilie Flöge at the Attersee."
    ]
  },
  "klimtportraits": {
    "place": "Vienna · Colourful portraits",
    "when": "1912–1918",
    "mapLabel": "Portraits",
    "intro": [
      "After the golden years the portraits become more colourful and looser. There appear, among other works, the portraits of Mäda and Eugenia Primavesi, the second portrait of Adele Bloch-Bauer and that of Friederike Maria Beer.",
      "In the late grounds East Asian motifs often appear, which Klimt also collects – for example in the portrait of Friederike Maria Beer and in “Lady with Fan”. Beside them stand “The Dancer” and the unfinished portrait of Ria Munk III."
    ]
  },
  "klimttod": {
    "place": "Vienna · Death and Life",
    "when": "about 1910–1915",
    "mapLabel": "Death and Life",
    "intro": [
      "Around 1910 Klimt begins the large picture “Death and Life”, which he later reworks. Death stands as a dark figure opposite a group of the living. Here only the figure of Death is shown.",
      "The picture hangs in the Leopold Museum in Vienna. In 1912 Klimt also paints Ria Munk on her deathbed, in the year after her early death."
    ]
  },
  "klimt1918": {
    "place": "Vienna · The last pictures",
    "when": "1917–1918",
    "mapLabel": "1918",
    "intro": [
      "In the last months unfinished portraits appear – Johanna Staude, Amalie Zuckerkandl, the “Lady in White” – and finished works such as “Baby (Cradle)”, a woman’s head and the “Portrait of a Lady” in Piacenza.",
      "On 11 January 1918 Klimt suffers a stroke. He dies on 6 February 1918 in the General Hospital in Vienna."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "goldknight": {
    "text": [
      "A knight in golden armour rides with levelled lance through a rocky field. The picture of 1903 is also called “Life is a Struggle”.",
      "It hangs in the Aichi Prefectural Museum of Art in Nagoya. The golden ground and the ornamental armour already belong to the years after the journey to Ravenna."
    ],
    "fact": "Oil, tempera and gold leaf on canvas, 1903. Aichi Prefectural Museum of Art, Nagoya."
  },
  "goldapple": {
    "text": [
      "An apple tree stands as a dense, gold-threaded ornament against a dark ground, the fruit like disc-shaped signs. The picture dates from 1903.",
      "The original burns in 1945 at Immendorf Castle in Lower Austria, where it had been stored. What survives includes this historical photograph."
    ],
    "fact": "Oil and gold on canvas, 1903. Historical photograph; the original burned at Immendorf Castle in 1945."
  },
  "birkforest": {
    "text": [
      "Birch trunks stand close together, the forest floor a carpet of moss, leaves and light. The picture dates from 1903, a year after “Beech Grove I”.",
      "It belonged to the Paul G. Allen Collection and is now in private hands. The woodland pictures belong to the summers at the Attersee."
    ],
    "fact": "Oil on canvas, 1903. Private collection."
  },
  "poplar2": {
    "text": [
      "A tall poplar rises against a dark, thundery sky, the meadow in front of it still bright. The picture is called “The Large Poplar II” and dates from 1902 to 1903.",
      "It hangs in the Leopold Museum in Vienna. The gaze is fixed on a single tree, not on a wide landscape."
    ],
    "fact": "Oil on canvas, 1902–1903. Leopold Museum, Vienna."
  },
  "kpeartree": {
    "text": [
      "A pear tree fills the surface as a dense mosaic of leaves, blossom and fruit, the trunk barely to be grasped. The picture dates from 1903.",
      "It belongs to the Busch-Reisinger Museum of the Harvard Art Museums in Cambridge. Like the golden apple tree, it shows a single tree as ornament."
    ],
    "fact": "Oil and gold on canvas, 1903. Busch-Reisinger Museum, Harvard Art Museums, Cambridge."
  },
  "wittgenstein": {
    "text": [
      "Margaret Stonborough-Wittgenstein stands in a white dress against a geometrically divided, partly golden ground. The portrait dates from 1905.",
      "The sitter is a sister of the philosopher Ludwig Wittgenstein. The picture hangs in the Neue Pinakothek in Munich."
    ],
    "fact": "Oil on canvas, 1905. Neue Pinakothek, Munich."
  },
  "gallia": {
    "text": [
      "Hermine Gallia sits in a light, softly flowing dress, her hands in her lap, the ground in delicate ornamental tones. The portrait dates from 1904.",
      "It belongs to the National Gallery in London. Hermine Gallia was the wife of the Viennese industrialist Moriz Gallia, an early collector of Klimt."
    ],
    "fact": "Oil on canvas, 1904. National Gallery, London."
  },
  "fritza": {
    "text": [
      "Fritza Riedler sits in a light dress against a strongly patterned ground; behind the head a golden, throne-like ornament appears. The portrait dates from 1906.",
      "It hangs in the Belvedere in Vienna. The clear geometry around the head already belongs wholly to the golden years."
    ],
    "fact": "Oil on canvas, 1906. Österreichische Galerie Belvedere, Vienna."
  },
  "adelestudy": {
    "text": [
      "A drawing records the head and shoulders of Adele Bloch-Bauer, still without the later gold ground. The study belongs to the preparatory work for the portrait of 1907.",
      "It shows how closely Klimt fixes the pose and the gaze before the ornamental gold is added."
    ],
    "fact": "Drawing, about 1903–1907. Collection not established."
  },
  "adele": {
    "text": [
      "Adele Bloch-Bauer sits in a golden, densely ornamented dress, the ground a mosaic of gold, silver and signs. The portrait dates from 1907, after years of work.",
      "It belongs to the Neue Galerie in New York. In December 1903 Klimt writes to Emilie Flöge from Ravenna about the mosaics of unheard-of splendour – an impression that lingers in gold grounds such as this."
    ],
    "fact": "Oil, silver and gold on canvas, 1907. Neue Galerie, New York.",
    "quote": {
      "text": "In Ravenna much that is poor – the mosaics of unheard-of splendour.",
      "cite": "Postcard to Emilie Flöge, Ravenna, 2 December 1903"
    }
  },
  "rosetrees": {
    "text": [
      "Under high tree crowns rosebushes bloom, foliage and flowers woven into a dense, carpet-like pattern. The picture dates from about 1905.",
      "It hangs in the Musée d’Orsay in Paris. As in the woodland pictures at the Attersee, the horizon recedes far away."
    ],
    "fact": "Oil on canvas, about 1905. Musée d’Orsay, Paris."
  },
  "kissdetail": {
    "text": [
      "The detail shows the heads of the couple from “The Kiss”: the faces close together, the gold of the robe around them. The whole picture dates from 1907 to 1908.",
      "On 1 June 1908 Klimt opens the Kunstschau in Vienna. In the ceremonial address he says that no area of human life is too insignificant to offer room for artistic endeavour. “The Kiss” is shown there and bought by the state."
    ],
    "fact": "Oil on canvas with gold leaf, detail, 1907–1908. Österreichische Galerie Belvedere, Vienna.",
    "quote": {
      "text": "…that no area of human life is too insignificant or slight to offer room for artistic endeavour.",
      "cite": "Address at the opening of the Kunstschau, Vienna, 1 June 1908"
    }
  },
  "sunfarm": {
    "text": [
      "In a farm garden sunflowers stand among dense growth, almost without open sky. The picture dates from about 1907.",
      "It hangs in the Belvedere in Vienna. Garden pictures of these years belong to the same period as “The Kiss” and the Kunstschau of 1908."
    ],
    "fact": "Oil on canvas, about 1907. Österreichische Galerie Belvedere, Vienna."
  },
  "ksunflower": {
    "text": [
      "A single tall sunflower stands in a dense bed, the gaze close to the plant, the horizon gone. The picture dates from about 1907 to 1908.",
      "It belongs to the Belvedere in Vienna. As in the garden pictures of these years, the plant becomes an ornamental pattern."
    ],
    "fact": "Oil on canvas, about 1907–1908. Österreichische Galerie Belvedere, Vienna."
  },
  "kpoppies": {
    "text": [
      "A field of poppies glows in a dense carpet of red, green and small blossoms, without a wide horizon. The picture dates from 1907.",
      "It hangs in the Belvedere in Vienna. In the same year Klimt also completes the golden portrait of Adele Bloch-Bauer."
    ],
    "fact": "Oil on canvas, 1907. Österreichische Galerie Belvedere, Vienna."
  },
  "meadow": {
    "text": [
      "A flowering meadow fills the whole surface, grasses and blossoms packed close together, the sky barely visible. The picture dates from about 1908.",
      "It is in a private collection. This meadow picture too belongs to the years around the Kunstschau."
    ],
    "fact": "Oil on canvas, about 1908. Private collection."
  },
  "stocletexp": {
    "text": [
      "A standing woman in a richly patterned robe turns her head, her hands raised. The working design is called “Expectation” and belongs to the Stoclet Frieze.",
      "Klimt designs the frieze for the dining room of the Palais Stoclet in Brussels, a house by Josef Hoffmann and the Wiener Werkstätte for Adolphe Stoclet. The designs are kept at the MAK in Vienna."
    ],
    "fact": "Working design for the Stoclet Frieze, about 1905–1911. MAK – Museum of Applied Arts, Vienna."
  },
  "stocletembrace": {
    "text": [
      "A couple stand closely embraced in an ornamented cloak, their faces close together. The design is called “The Embrace” or “Fulfillment”.",
      "It belongs to the dining-room frieze for the Palais Stoclet in Brussels. Together with “Expectation” and the Tree of Life it forms the core of the cycle. The design is at the MAK in Vienna."
    ],
    "fact": "Working design for the Stoclet Frieze, about 1905–1911. MAK – Museum of Applied Arts, Vienna."
  },
  "stoclettree": {
    "text": [
      "A stylised tree with spirally coiled branches fills the surface, with seats and signs among the boughs. The working design for the Tree of Life dates from 1910 to 1911.",
      "It is one of the nine cartoons for the execution of the Stoclet Frieze. The Tree of Life links the scenes of Expectation and of the Embrace. The MAK in Vienna keeps the cartoons."
    ],
    "fact": "Cartoon for the Stoclet Frieze, 1910–1911. MAK – Museum of Applied Arts, Vienna."
  },
  "stocletritter": {
    "text": [
      "A knight in ornamented armour stands upright, shield and robe in clear geometric forms. The design belongs to the cartoons for the Stoclet Frieze.",
      "It dates from 1910 to 1911 and is at the MAK in Vienna. The frieze itself is set into the dining room of the Palais Stoclet in Brussels."
    ],
    "fact": "Cartoon for the Stoclet Frieze, 1910–1911. MAK – Museum of Applied Arts, Vienna."
  },
  "stocletrose": {
    "text": [
      "A rosebush appears as a flat ornament of blossoms, leaves and tendrils, without deep space. The design belongs to the cartoons for the Stoclet Frieze of 1910 to 1911.",
      "Garden and plant motifs run through the frieze beside the figure scenes. The MAK in Vienna keeps the working design."
    ],
    "fact": "Cartoon for the Stoclet Frieze, 1910–1911. MAK – Museum of Applied Arts, Vienna."
  },
  "featherboa": {
    "text": [
      "A woman with a large hat and a feather boa looks sideways out of the picture, the face close and bright against a dark ground. The portrait dates from 1909.",
      "It is in a private collection. In the same year Klimt travels to Spain and writes to Emilie Flöge from Toledo: “El Greco is magnificent!”"
    ],
    "fact": "Oil on canvas, 1909. Private collection.",
    "quote": {
      "text": "El Greco is magnificent!",
      "cite": "Postcard to Emilie Flöge, Toledo, 1909"
    }
  },
  "barbarafloege": {
    "text": [
      "Barbara Flöge, Emilie Flöge’s mother, appears as an older woman in dark clothing, her gaze quiet, the ground plain. The portrait dates from 1915.",
      "Since 1904 Emilie has run, with her sisters Helene and Pauline, the fashion salon “Schwestern Flöge” in the Casa Piccola on the Mariahilfer Strasse; the rooms are designed by Josef Hoffmann and Koloman Moser."
    ],
    "fact": "Oil on canvas, 1915. Collection not established."
  },
  "thepark": {
    "text": [
      "A park of dense tree crowns fills the surface to the edge, the woodland becoming an ornamental weave. The picture dates from 1910 or earlier.",
      "It belongs to the Museum of Modern Art in New York. In these years too Klimt spends the summers with the Flöge family at the Attersee."
    ],
    "fact": "Oil on canvas, 1910 or earlier. Museum of Modern Art, New York."
  },
  "kammer2": {
    "text": [
      "Schloss Kammer stands with its light walls and red roofs on the lakeshore, the water and the trees in calm, flat colours. The picture dates from 1909.",
      "It is the second in a series of views of the castle on the northern shore of the Attersee. It is in a private collection."
    ],
    "fact": "Oil on canvas, 1909. Private collection."
  },
  "kammer3": {
    "text": [
      "The castle appears again from the lake, the façade and the trees as clear fields of colour, the water’s surface calm. The picture dates from 1910.",
      "It hangs in the Belvedere in Vienna. Klimt repeats the motif in several versions, each with a shifted cropping and light."
    ],
    "fact": "Oil on canvas, 1910. Österreichische Galerie Belvedere, Vienna."
  },
  "kammer4": {
    "text": [
      "A further view of the castle on the Attersee: the buildings among trees, the lake in the foreground, the colours strong and flat. The picture dates from 1910.",
      "It is in a private collection. Together with the other versions it shows how persistently Klimt depicts the same shore."
    ],
    "fact": "Oil on canvas, 1910. Private collection."
  },
  "kammerave": {
    "text": [
      "A tree-lined avenue leads towards Schloss Kammer, the trunks to left and right, at the end the light façade. The picture dates from 1912.",
      "It hangs in the Belvedere in Vienna. This time the view is not from the lake, but through the park towards the castle."
    ],
    "fact": "Oil on canvas, 1912. Österreichische Galerie Belvedere, Vienna."
  },
  "kammerpark": {
    "text": [
      "In the park of Schloss Kammer trees stand close together, the ground light, the sky almost hidden. The picture dates from 1910.",
      "It belongs to the Neue Galerie in New York. As in “The Park”, the foliage becomes an ornamental weave."
    ],
    "fact": "Oil on canvas, 1910. Neue Galerie, New York."
  },
  "watercastle": {
    "text": [
      "A light-coloured castle stands on or in the water, surrounded by trees, the reflection calm. The picture dates from 1908 to 1909.",
      "It belongs to the National Gallery in Prague. The motif lies in the same period as the first views of Schloss Kammer."
    ],
    "fact": "Oil on canvas, 1908–1909. National Gallery Prague."
  },
  "oefarm": {
    "text": [
      "A farmhouse in Upper Austria stands among trees and garden, the walls light, the roof dark, the surroundings densely grown. The picture dates from about 1911.",
      "It hangs in the Belvedere in Vienna. Beside the views of the castle, Klimt also paints simple houses and gardens at the Attersee."
    ],
    "fact": "Oil on canvas, about 1911. Österreichische Galerie Belvedere, Vienna."
  },
  "kapple": {
    "text": [
      "An apple tree fills the surface with foliage and fruit, the trunk in the middle, the sky visible only in gaps. The picture dates from about 1912.",
      "It is in a private collection. The motif of the single tree reaches back to the golden apple tree of 1903."
    ],
    "fact": "Oil on canvas, about 1912. Private collection."
  },
  "kapple2": {
    "text": [
      "Again an apple tree stands densely in the picture, the foliage stronger in colour, the form looser than in the earlier version. The picture dates from about 1916.",
      "It is also called “The Apple Tree”. The late tree pictures belong to the last summers at the Attersee."
    ],
    "fact": "Oil on canvas, about 1916. Collection not established."
  },
  "malcesine": {
    "text": [
      "The town of Malcesine lies on the steep shore of Lake Garda, houses and cypresses above the water, the mountains behind. The picture dates from 1913, from a journey to the lake.",
      "The original burns in 1945 at Immendorf Castle in Lower Austria. What survives includes this historical photograph."
    ],
    "fact": "Oil on canvas, 1913. Historical photograph; the original burned at Immendorf Castle in 1945."
  },
  "cassone": {
    "text": [
      "The church of Cassone stands above Lake Garda, the houses of the village tight around it, the water and the slopes in clear fields of colour. The picture dates from 1913.",
      "Cassone lies on the eastern shore of the lake, not far from Malcesine. The picture is in a private collection."
    ],
    "fact": "Oil on canvas, 1913. Private collection."
  },
  "italygarden": {
    "text": [
      "An Italian garden appears in dense bushes, blossoms and paths, without a wide view. The picture dates from 1913, the year of the journey to Lake Garda.",
      "It belongs to the Kunsthaus Zug. As in the garden pictures at the Attersee, the vegetation becomes an ornamental carpet."
    ],
    "fact": "Oil on canvas, 1913. Kunsthaus Zug."
  },
  "unterach": {
    "text": [
      "The houses of Unterach stand densely on the southern shore, the façades light, the roofs dark, the village as a pattern of colour. The picture dates from about 1916.",
      "Unterach lies opposite Schloss Kammer, on the other shore of the Attersee. 1916 is Klimt’s last shared summer with Emilie Flöge at the lake."
    ],
    "fact": "Oil on canvas, about 1916. Collection not established."
  },
  "ualslope": {
    "text": [
      "A wooded slope at Unterach rises into the picture, trunks and foliage as a dense pattern, without a wide view of the lake. The picture dates from 1916.",
      "It is in a private collection. The late woodland pictures are darker and looser than the early birch and beech woods."
    ],
    "fact": "Oil on canvas, 1916. Private collection."
  },
  "litzlberg": {
    "text": [
      "Litzlberg appears as a view of the place on the Attersee, houses, trees and shore in flat colours. The picture dates from about 1915.",
      "Litzlberg lies on the Attersee, not far from Seewalchen and Kammer. The picture is in a private collection."
    ],
    "fact": "Oil on canvas, about 1915. Private collection."
  },
  "litzkeller": {
    "text": [
      "The Litzlbergkeller, an inn on the Attersee, stands among trees on the shore, the façade light, the foliage dense. The picture dates from 1915 to 1916.",
      "It hangs in the Leopold Museum in Vienna. This shore picture too belongs to the late summers at the lake."
    ],
    "fact": "Oil on canvas, 1915–1916. Leopold Museum, Vienna."
  },
  "weissenbach": {
    "text": [
      "A forester’s house in Weissenbach stands among trees and meadow, the walls light, the roof distinctive. The picture dates from about 1914 and is also called “Forester’s House in Weissenbach II”.",
      "Weissenbach lies on the southern Attersee. Klimt paints the house in more than one version."
    ],
    "fact": "Oil on canvas, about 1914. Collection not established."
  },
  "pfarrgarten": {
    "text": [
      "A parish garden lies before a hilltop, beds, paths and trees tightly joined, the hill in the background. The picture dates from about 1916.",
      "It belongs to the late garden landscapes in which Klimt keeps the gaze close to beds and slopes."
    ],
    "fact": "Oil on canvas, about 1916. Collection not established."
  },
  "mada": {
    "text": [
      "The young Mäda Primavesi stands in a light, floral-patterned dress, her feet slightly apart, her gaze firm. The portrait dates from about 1912 to 1913.",
      "It belongs to the Metropolitan Museum of Art in New York. Mäda is the daughter of Otto and Eugenia Primavesi, important patrons of Klimt; the family also receives him at Winkelsdorf."
    ],
    "fact": "Oil on canvas, about 1912–1913. Metropolitan Museum of Art, New York."
  },
  "adele2": {
    "text": [
      "Adele Bloch-Bauer stands in a colourful, patterned dress against an equally colourful ground, without the gold carpet of the first portrait. The portrait dates from 1912.",
      "It is in a private collection. Five years after the golden first portrait, Klimt shows Adele in the stronger colours of his later portraits."
    ],
    "fact": "Oil on canvas, 1912. Private collection."
  },
  "eugenia": {
    "text": [
      "Eugenia Primavesi sits in a brightly patterned dress, the ground ornamental and colourful. The portrait dates from about 1913 to 1914.",
      "It belongs to the Toyota Municipal Museum of Art. Eugenia and Otto Primavesi are among Klimt’s important patrons in these years."
    ],
    "fact": "Oil on canvas, about 1913–1914. Toyota Municipal Museum of Art."
  },
  "fmbeer": {
    "text": [
      "Friederike Maria Beer stands in a richly patterned dress, the ground filled with East Asian motifs. The portrait dates from 1916.",
      "It hangs in the Tel Aviv Museum of Art. In the late portraits Klimt often takes up East Asian patterns and figures, which he also collects."
    ],
    "fact": "Oil on canvas, 1916. Tel Aviv Museum of Art."
  },
  "ladyfan": {
    "text": [
      "A woman with a fan appears against a ground of East Asian motifs, including a bird in the manner of a phoenix. The picture dates from 1917 to 1918.",
      "It is in a private collection. It belongs to the last finished portraits and shows how strong the East Asian world of motifs becomes in these years."
    ],
    "fact": "Oil on canvas, 1917–1918. Private collection."
  },
  "dancer": {
    "text": [
      "A dancer stands in a colourful, loosely painted robe, the ground ornamental, the pose upright. The picture dates from about 1916 to 1917.",
      "It belongs to the Neue Galerie in New York. Here too the figure portrait and the flat pattern of the late years are mixed."
    ],
    "fact": "Oil on canvas, about 1916–1917. Neue Galerie, New York."
  },
  "riamunk3": {
    "text": [
      "Ria Munk appears in a floral dress against a dense, colourful ground; the portrait of 1917 remains unfinished. Maria (“Ria”) Munk dies in 1911, still young.",
      "After her death Klimt paints several portraits, including this late, unfinished one. It is in a private collection."
    ],
    "fact": "Oil on canvas, 1917, unfinished. Private collection."
  },
  "deathfig": {
    "text": [
      "Death stands as a slim, dark figure with a skull and a pattern of crosses, the gaze turned toward the other half of the picture. The detail shows only this figure from “Death and Life”.",
      "The whole picture dates from about 1910 and is later reworked; it hangs in the Leopold Museum in Vienna. The other half, with the group of the living, is omitted here."
    ],
    "fact": "Oil on canvas, detail, about 1910–1915. Leopold Museum, Vienna."
  },
  "riamunkbed": {
    "text": [
      "Ria Munk lies in state, her face still, flowers around the pillow and the robe. The picture dates from 1912, the year after her death.",
      "It is in a private collection. Later comes the unfinished portrait “Ria Munk III” of 1917."
    ],
    "fact": "Oil on canvas, 1912. Private collection."
  },
  "staude": {
    "text": [
      "Johanna Staude sits in a brightly patterned blouse, her gaze firm, the ground partly open. The portrait of 1917 to 1918 remains unfinished.",
      "It hangs in the Belvedere in Vienna. Many portraits of the last months Klimt leaves unfinished."
    ],
    "fact": "Oil on canvas, 1917–1918, unfinished. Österreichische Galerie Belvedere, Vienna."
  },
  "zuckerkandl": {
    "text": [
      "Amalie Zuckerkandl appears in a light dress, the head and shoulders worked out, the lower part and the ground still open. The portrait remains unfinished.",
      "It hangs in the Belvedere in Vienna. Amalie Zuckerkandl belonged to the Viennese circle around the Zuckerkandl family, with which Klimt had long been connected."
    ],
    "fact": "Oil on canvas, 1917–1918, unfinished. Österreichische Galerie Belvedere, Vienna."
  },
  "kbaby": {
    "text": [
      "A child lies in a cradle under a dense carpet of covers and patterns, the face small in the swell of colour. The picture dates from 1917 to 1918.",
      "It belongs to the National Gallery of Art in Washington. It is one of the last finished pictures."
    ],
    "fact": "Oil on canvas, 1917–1918. National Gallery of Art, Washington."
  },
  "ladyhead": {
    "text": [
      "A woman’s head in a loose application of colour, the hair and the face brought close into the picture. The work dates from 1917.",
      "It hangs in the LENTOS Kunstmuseum Linz. In the last months too Klimt draws and paints heads with a spare, open form."
    ],
    "fact": "Oil on canvas, 1917. LENTOS Kunstmuseum Linz."
  },
  "ladypiacenza": {
    "text": [
      "A lady in a hat looks out of the picture, the face quiet, the ground in broken, light tones. The portrait dates from 1917.",
      "It belongs to the Galleria d’Arte Moderna Ricci Oddi in Piacenza."
    ],
    "fact": "Oil on canvas, 1917. Galleria d’Arte Moderna Ricci Oddi, Piacenza."
  },
  "ladywhite": {
    "text": [
      "A woman in a white dress sits turned toward the viewer, large parts of the surface remaining open. The portrait from the years 1917 to 1918 remains unfinished.",
      "It hangs in the Belvedere in Vienna. On 30 December 1917 Klimt writes to Emilie Flöge from Winkelsdorf and wishes her a “most, most happy New Year – as we both so urgently need it”."
    ],
    "fact": "Oil on canvas, about 1917–1918, unfinished. Österreichische Galerie Belvedere, Vienna.",
    "quote": {
      "text": "…a greeting from the innermost heart, and [I] wish you a most, most happy New Year – as we both so urgently need it.",
      "cite": "Letter to Emilie Flöge, Winkelsdorf, 30 December 1917"
    }
  },
  "kiss": {
    "text": [
      "A couple embrace at the edge of a flower meadow, wrapped in golden robes. The picture is called “The Kiss”, it is square, and it dates from 1907 to 1908.",
      "It is shown in 1908 at the Vienna Kunstschau. The Austrian state buys it there for the Moderne Galerie, today’s Belvedere."
    ],
    "fact": "Oil on canvas with gold leaf, 1907–1908. Österreichische Galerie Belvedere, Vienna.",
    "quote": {
      "text": "…that no area of human life is too insignificant or slight to offer room for artistic endeavour.",
      "cite": "Address at the opening of the Kunstschau, Vienna, 1 June 1908"
    }
  },
  "kgarden": {
    "text": [
      "A farm garden appears as a dense carpet of poppies, bellflowers and foliage, almost without a horizon. The picture dates from about 1905 to 1907.",
      "It belongs to the same years as the other garden pictures and “The Kiss”. It is in a private collection."
    ],
    "fact": "Oil on canvas, about 1905–1907. Private collection."
  }
});
})();
