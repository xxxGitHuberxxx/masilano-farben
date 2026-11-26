// v7.9 English content for Klimt’s life journey, Part 1.
// Extends window.EN; does not rewrite earlier path files.
(function () {
  var EN = window.EN = window.EN || {};
  var museums = {
  "Leopold Museum, Wien": "Leopold Museum, Vienna",
  "Sammlung nicht ermittelt": "Collection not established",
  "Österreichische Galerie Belvedere, Wien": "Österreichische Galerie Belvedere, Vienna",
  "Burgtheater, Wien": "Burgtheater, Vienna",
  "Kunsthistorisches Museum, Wien": "Kunsthistorisches Museum, Vienna",
  "Privatsammlung": "Private collection",
  "Historische Fotografie; das Original verbrannte 1945 auf Schloss Immendorf": "Historical photograph; the original burned in 1945 at Immendorf Castle",
  "Galerie Neue Meister, Dresden": "Galerie Neue Meister, Dresden"
};
  EN.museums = Object.assign(EN.museums || {}, museums);
  var works = {
  "klara": {
    "title": "Portrait of Klara Klimt",
    "museum": "Leopold Museum, Vienna"
  },
  "girlhead": {
    "title": "Head of a Girl",
    "museum": "Collection not established"
  },
  "forestfloor": {
    "title": "Forest Floor",
    "museum": "Leopold Museum, Vienna"
  },
  "sappho": {
    "title": "Sappho",
    "museum": "Collection not established"
  },
  "organist": {
    "title": "Design for the Allegory of Music (The Organist)",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "ivyoldman": {
    "title": "Study of an Old Man with an Ivy Wreath",
    "museum": "Collection not established"
  },
  "auditorium": {
    "title": "Auditorium of the Old Burgtheater",
    "museum": "Wien Museum"
  },
  "shakespeare": {
    "title": "Shakespeare’s Theatre",
    "museum": "Burgtheater, Vienna"
  },
  "thespis": {
    "title": "Thespis’s Cart",
    "museum": "Burgtheater, Vienna"
  },
  "khmgreece": {
    "title": "Greek Antiquity (detail)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmitalyl": {
    "title": "Old Italian Art (left lunette)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmitalyr": {
    "title": "Old Italian Art (right lunette)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmitalyc": {
    "title": "Old Italian Art (intercolumniation)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmvenice": {
    "title": "Venetian Quattrocento (lunette)",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "khmmark": {
    "title": "Saint Mark the Evangelist",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "pembaur": {
    "title": "Portrait of Josef Pembaur",
    "museum": "Collection not established"
  },
  "emilie91": {
    "title": "Portrait of Emilie Flöge",
    "museum": "Collection not established"
  },
  "hanswurst": {
    "title": "Hanswurst on the Improvised Stage at Rothenburg",
    "museum": "Collection not established"
  },
  "seatedgirl": {
    "title": "Seated Young Girl",
    "museum": "Leopold Museum, Vienna"
  },
  "lewinsky": {
    "title": "Josef Lewinsky as Carlos in “Clavigo”",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "love1895": {
    "title": "Love",
    "museum": "Wien Museum"
  },
  "musik1": {
    "title": "Music I",
    "museum": "Collection not established"
  },
  "lilascarf": {
    "title": "Lady with a Lilac Scarf",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "blindman": {
    "title": "The Blind Man",
    "museum": "Leopold Museum, Vienna"
  },
  "schubert": {
    "title": "Schubert at the Piano (design)",
    "museum": "Leopold Museum, Vienna"
  },
  "capehat": {
    "title": "Lady with Cape and Hat",
    "museum": "Collection not established"
  },
  "helene": {
    "title": "Portrait of Helene Klimt",
    "museum": "Collection not established"
  },
  "theseus": {
    "title": "First poster of the Vienna Secession",
    "museum": "Collection not established"
  },
  "pallas": {
    "title": "Pallas Athena",
    "museum": "Wien Museum"
  },
  "knips": {
    "title": "Portrait of Sonja Knips",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "knipsstudy": {
    "title": "Study for Sonja Knips",
    "museum": "Collection not established"
  },
  "lederer": {
    "title": "Portrait of Serena Pulitzer Lederer",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "deathbed": {
    "title": "Old Man on His Deathbed",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "afterrain": {
    "title": "After the Rain",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "orchardeve": {
    "title": "Orchard in the Evening",
    "museum": "Leopold Museum, Vienna"
  },
  "pond": {
    "title": "Tranquil Pond (Egelsee near Golling)",
    "museum": "Leopold Museum, Vienna"
  },
  "swamp": {
    "title": "The Swamp",
    "museum": "Collection not established"
  },
  "blackbull": {
    "title": "The Black Bull",
    "museum": "Leopold Museum, Vienna"
  },
  "farmbirch": {
    "title": "Farmhouse with Birch Trees",
    "museum": "Collection not established"
  },
  "attersee": {
    "title": "On Lake Attersee",
    "museum": "Leopold Museum, Vienna"
  },
  "fruittrees": {
    "title": "Fruit Trees",
    "museum": "Collection not established"
  },
  "birchshore": {
    "title": "Lakeshore with Birches",
    "museum": "Collection not established"
  },
  "island": {
    "title": "Island in Lake Attersee",
    "museum": "Private collection"
  },
  "musik1901": {
    "title": "Music",
    "museum": "Collection not established"
  },
  "jurysketch": {
    "title": "Sketch for Jurisprudence",
    "museum": "Collection not established"
  },
  "judith": {
    "title": "Judith I",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "henneberg": {
    "title": "Portrait of Marie Henneberg",
    "museum": "Kunstmuseum Moritzburg, Halle"
  },
  "emilie02": {
    "title": "Portrait of Emilie Flöge",
    "museum": "Wien Museum"
  },
  "beethhead": {
    "title": "Head of a Woman in Three-Quarter Profile (study for the Beethoven Frieze)",
    "museum": "Collection not established"
  },
  "beethsehnsucht": {
    "title": "Study for “The Yearning for Happiness”",
    "museum": "Collection not established"
  },
  "birch": {
    "title": "Beech Grove I",
    "museum": "Galerie Neue Meister, Dresden"
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
  "klimtbaum": {
    "place": "Vienna-Baumgarten · Childhood and school",
    "when": "1862–1883",
    "mapLabel": "Baumgarten",
    "intro": [
      "Gustav Klimt is born on 14 July 1862 in Baumgarten near Vienna, today in the 14th district. His father, Ernst Klimt the Elder, is a gold engraver; his mother is Anna, née Finster. Gustav is the second of seven children.",
      "In 1876 he enters the Kunstgewerbeschule of the Imperial Royal Austrian Museum of Art and Industry, today the University of Applied Arts. There, under teachers including Ferdinand Laufberger, he learns drawing and decorative painting."
    ]
  },
  "klimtcompagnie": {
    "place": "Vienna · The Künstler-Compagnie",
    "when": "1883–1890",
    "mapLabel": "Compagnie",
    "intro": [
      "With his younger brother Ernst, also a painter, and his fellow student Franz Matsch, Klimt founds the “Künstler-Compagnie” around 1883. The three of them take on decorative commissions together, for theatres, palaces and ceremonial rooms.",
      "In these years early figure pictures also appear: designs for the allegory of music, mythological scenes such as Sappho, studies from the model. The Compagnie still works in the academic, historicist style of the Ringstrasse period."
    ]
  },
  "klimtburg": {
    "place": "Vienna · The Burgtheater",
    "when": "1886–1888",
    "mapLabel": "Burgtheater",
    "intro": [
      "From 1886 to 1888 Klimt, Ernst Klimt and Franz Matsch paint the ceilings and lunettes of the two grand staircases in the new Burgtheater on the Ring. Klimt’s share includes, among other scenes, Shakespeare’s theatre and Thespis’s cart.",
      "In 1888 there also appears the picture of the auditorium of the old Burgtheater on the Michaelerplatz, before the house is pulled down. In 1890 Klimt receives the Imperial Prize for it."
    ]
  },
  "klimtkhm": {
    "place": "Vienna · The Kunsthistorisches Museum",
    "when": "1890–1891",
    "mapLabel": "KHM",
    "intro": [
      "In 1890 and 1891, in the staircase of the Kunsthistorisches Museum, Klimt designs the spandrels and intercolumniations: a cycle on the history of art, from Greek antiquity to early Italian and Venetian painting.",
      "In the same period, in 1890, the portrait of the pianist Josef Pembaur appears, already with an ornamental gold ground around the musician’s head."
    ]
  },
  "klimt1892": {
    "place": "Vienna · The break and the portraits",
    "when": "1891–1896",
    "mapLabel": "1892",
    "intro": [
      "In 1892 his father, the gold engraver Ernst Klimt the Elder, dies first. On 9 December his brother Ernst also dies, only twenty-eight years old. Gustav becomes guardian of Ernst’s little daughter Helene, known as Lentschi.",
      "In the following years he paints portraits, allegories and designs for private rooms, including the music room of Nikolaus Dumba. After his brother’s death the Künstler-Compagnie comes to an end."
    ]
  },
  "klimtsecession": {
    "place": "Vienna · The Secession and Ver Sacrum",
    "when": "1897–1899",
    "mapLabel": "Secession",
    "intro": [
      "On 3 April 1897 the Association of Austrian Artists is founded, the Vienna Secession. Klimt is a founding member and its first president. From 1898 the magazine “Ver Sacrum” appears.",
      "For the first exhibition in 1898 he designs the poster “Theseus and the Minotaur”. A first version with an unclothed Theseus is objected to; in the issued version a tree covers the figure. In the same year “Pallas Athena” and the portrait of Sonja Knips appear."
    ]
  },
  "klimtattersee": {
    "place": "The Attersee and the first landscapes",
    "when": "1898–1902",
    "mapLabel": "Attersee",
    "intro": [
      "From about 1898 Klimt also paints landscapes, first among them “After the Rain” and orchards. In 1899 “Tranquil Pond” appears, at the Egelsee near Golling in Salzburg – not at the Attersee.",
      "From 1900 he spends the summers with the Flöge family at the Attersee. On 1 August 1901 he writes to Emilie Flöge on a postcard that he longs to get out as never before. At the lake, stretches of water, shores and islands appear – and in 1902 “Beech Grove I”."
    ]
  },
  "klimtfakult": {
    "place": "Vienna · The faculty paintings",
    "when": "1900–1901",
    "mapLabel": "University",
    "intro": [
      "In 1894 Klimt receives the commission for the faculty paintings of the University of Vienna: Philosophy, Medicine and Jurisprudence, large ceiling pictures for the ceremonial hall. “Philosophy” is shown at the Secession in 1900 and meets with sharp protest; in 1901 “Medicine” follows.",
      "The university does not accept the pictures. Klimt later buys them back. In 1945 they burn at Immendorf Castle in Lower Austria, where they had been stored. What survives includes historical photographs, sketches and the well-known detail of Hygieia from “Medicine”."
    ]
  },
  "klimtbeeth": {
    "place": "Vienna · The Beethoven Frieze",
    "when": "1901–1902",
    "mapLabel": "Beethoven",
    "intro": [
      "In 1902 the Secession mounts the Beethoven exhibition around Max Klinger’s statue of Beethoven. For three walls Klimt paints the Beethoven Frieze, after Richard Wagner’s reading of the Ninth Symphony: from the yearning for happiness to “This Kiss to the Whole World”.",
      "In the same period there appear “Judith I” of 1901, the portrait of Marie Henneberg and the standing portrait of Emilie Flöge of 1902, together with drawings for the frieze."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "klara": {
    "text": [
      "Klara Klimt, a sister of the painter, appears as a young woman in a dark blue dress, with a pearl necklace and a white lace collar. Her gaze meets us quietly.",
      "The picture dates from about 1880, during his years at the Kunstgewerbeschule. It now belongs to the Leopold Museum in Vienna."
    ],
    "fact": "Oil painting, about 1880. Leopold Museum, Vienna."
  },
  "girlhead": {
    "text": [
      "The head of a girl in soft chalk or pencil lines, the hair loose around the face. The study shows how closely Klimt already draws from the model as a student.",
      "Heads of this kind belong to the training at the Kunstgewerbeschule, which Klimt enters in 1876."
    ],
    "fact": "Drawing, about 1880–1883. Collection not established."
  },
  "forestfloor": {
    "text": [
      "Instead of a wide landscape one sees only the forest floor: moss, leaves, small plants, packed close together. The picture dates from 1881 or 1882, still in his student years.",
      "It hangs in the Leopold Museum in Vienna and shows that Klimt could already look downward, at pattern and ground, long before the woodland pictures at the Attersee."
    ],
    "fact": "Oil on canvas, 1881–1882. Leopold Museum, Vienna."
  },
  "sappho": {
    "text": [
      "The poet Sappho sits with a lyre on a terrace, a child leaning against her. In the background an evening sky opens over the landscape.",
      "The picture dates from about 1888 to 1890, in the years of the Künstler-Compagnie, still in an academic style close to antiquity."
    ],
    "fact": "Oil painting, about 1888–1890. Collection not established."
  },
  "organist": {
    "text": [
      "In an oval field a woman in a blue-green gown kneels at the organ. Behind her a lightly dressed figure hovers, like a sound that has come loose.",
      "The design dates from 1885, for an allegory of music. The picture hangs in the Österreichische Galerie Belvedere in Vienna."
    ],
    "fact": "Oil sketch, 1885. Österreichische Galerie Belvedere, Vienna."
  },
  "ivyoldman": {
    "text": [
      "An old man in profile, his beard grey, a wreath of ivy around his brow. The study belongs to the tradition of antique heads of poets and philosophers.",
      "It dates from about 1888 to 1890, in the same years in which Klimt is at work on the Burgtheater and soon afterwards on the Kunsthistorisches Museum."
    ],
    "fact": "Study, about 1888–1890. Collection not established."
  },
  "auditorium": {
    "text": [
      "The auditorium of the old Burgtheater on the Michaelerplatz is packed with boxes, gold and faces. Klimt paints the house in 1888, before it is pulled down.",
      "The picture hangs in the Wien Museum. In 1890 Klimt receives the Imperial Prize for it."
    ],
    "fact": "1888, Wien Museum. Awarded the Imperial Prize in 1890."
  },
  "shakespeare": {
    "text": [
      "On the stage a woman lies as if dead; in front of her a crowned spectator sits in a farthingale. The ceiling painting shows a theatre in Shakespeare’s time.",
      "It is one of the pictures Klimt paints between 1886 and 1888 for the grand staircase of the new Burgtheater. In the audience he depicted himself and his companions from the Künstler-Compagnie."
    ],
    "fact": "Ceiling painting on the grand staircase, 1886–1888. Burgtheater, Vienna."
  },
  "thespis": {
    "text": [
      "A wagon rolls through a landscape, with actors and masks on it: the cart of Thespis, with which, according to tradition, the Greek theatre went on the road.",
      "The picture is one of Klimt’s ceiling paintings in the new Burgtheater, made between 1886 and 1888 together with Ernst Klimt and Franz Matsch."
    ],
    "fact": "Ceiling painting on the grand staircase, 1886–1888. Burgtheater, Vienna."
  },
  "khmgreece": {
    "text": [
      "A young woman in a patterned garment leans over a parapet. Behind her stands a painted Greek vase, and beside it a small bronze figure.",
      "The detail belongs to the spandrel paintings of “Greek Antiquity” in the staircase of the Kunsthistorisches Museum, which Klimt carries out in 1890 and 1891."
    ],
    "fact": "Spandrel painting in the staircase, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmitalyl": {
    "text": [
      "A young man in a dark garment and a black hat holds a book; beside him angels’ heads hover above a band of flowers. The lunette sits over an arch of the staircase.",
      "It belongs to the field “Old Italian Art”, which Klimt paints in the Kunsthistorisches Museum in 1890 and 1891."
    ],
    "fact": "Lunette in the staircase, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmitalyr": {
    "text": [
      "Two figures with golden haloes: one in red, the other in a dark blue gown patterned with gold. Already here Klimt uses gold as a surface and as ornament.",
      "The lunette is the right-hand part of the field “Old Italian Art” in the staircase of the Kunsthistorisches Museum, 1890–1891."
    ],
    "fact": "Lunette in the staircase, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmitalyc": {
    "text": [
      "Between two marble columns a child with a halo stands in a light garment, holding a golden cloth. Above the child a dark, mask-like head appears.",
      "The intercolumniation belongs to the cycle “Old Italian Art” in the staircase of the Kunsthistorisches Museum, 1890–1891."
    ],
    "fact": "Intercolumniation in the staircase, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmvenice": {
    "text": [
      "A woman with a golden crown and a richly patterned cloak carries a crown or a model in her hands. Behind her stands a cross, and beside it the letters C·K – Klimt’s mark.",
      "The lunette belongs to the field “Roman and Venetian Quattrocento” in the staircase of the Kunsthistorisches Museum, 1890–1891."
    ],
    "fact": "Lunette in the staircase, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "khmmark": {
    "text": [
      "A bearded man in a golden garment, a lion over his shoulder: Mark the Evangelist, patron saint of Venice. Beside him, on a gold ground, stands the blessing “Pax tibi Marce evangelista meus”.",
      "The lunette belongs to the field “Roman and Venetian Quattrocento” in the staircase of the Kunsthistorisches Museum, 1890–1891."
    ],
    "fact": "Lunette in the staircase, 1890–1891. Kunsthistorisches Museum, Vienna."
  },
  "pembaur": {
    "text": [
      "The pianist Josef Pembaur the Elder sits in a black coat against a golden ground. Around the picture runs an ornamental frame with notes and signs of music.",
      "The portrait dates from 1890, in the same period as the work for the Kunsthistorisches Museum. The gold ground already points toward later portraits."
    ],
    "fact": "Oil painting, 1890. Collection not established."
  },
  "emilie91": {
    "text": [
      "Emilie Flöge, the sister of Ernst Klimt’s wife Helene, sits in a light-coloured dress, her hair put up, her gaze quiet and turned aside.",
      "The portrait dates from 1891, the year of Ernst and Helene Flöge’s wedding. Between Gustav Klimt and Emilie Flöge a friendship begins that lasts until the end of his life."
    ],
    "fact": "Oil painting, 1891. Collection not established."
  },
  "hanswurst": {
    "text": [
      "In an open square the comic figure of Hanswurst plays before a dense crowd: an improvised theatre under the open sky, with costumes and flags.",
      "The picture dates from 1893 or 1894, after the ceiling paintings in the Burgtheater and after the death of his brother Ernst."
    ],
    "fact": "Oil painting, 1893–1894. Collection not established."
  },
  "seatedgirl": {
    "text": [
      "A young girl sits in a wide, light-coloured dress, her hands in her lap, her gaze quiet. Behind her the ground stays dark and plain.",
      "The picture dates from about 1894 and hangs in the Leopold Museum in Vienna."
    ],
    "fact": "Oil painting, about 1894. Leopold Museum, Vienna."
  },
  "lewinsky": {
    "text": [
      "The court actor Josef Lewinsky stands in dark clothes on a narrow, gold-ornamented field: as Carlos in Goethe’s “Clavigo”.",
      "The portrait dates from 1895 and hangs in the Österreichische Galerie Belvedere in Vienna."
    ],
    "fact": "Oil painting, 1895. Österreichische Galerie Belvedere, Vienna."
  },
  "love1895": {
    "text": [
      "A couple stands close together against a golden, almost misty ground. The faces draw near, without the scene becoming loud.",
      "The picture dates from 1895 and hangs in the Wien Museum. It belongs to the figure paintings of the years after the Künstler-Compagnie."
    ],
    "fact": "Oil painting, 1895. Wien Museum."
  },
  "musik1": {
    "text": [
      "A woman in a dark dress stands beside a golden sphinx and a lyre. Behind her a lighter, almost floating figure appears.",
      "“Music I” dates from 1895. A later version of 1898, “Music II”, burns in 1945 with other works at Immendorf Castle."
    ],
    "fact": "Oil painting, 1895. Collection not established."
  },
  "lilascarf": {
    "text": [
      "A woman in an oval, her dark hair put up, a lilac scarf around her neck. The ground is plain, the face quiet and light.",
      "The picture dates from about 1895 and belongs to the Kunsthistorisches Museum in Vienna."
    ],
    "fact": "Oil painting, about 1895. Kunsthistorisches Museum, Vienna."
  },
  "blindman": {
    "text": [
      "An older man with white hair and beard, his eyes closed or empty, his head turned slightly aside. The picture is spare, without accessories.",
      "It dates from about 1896 and hangs in the Leopold Museum in Vienna."
    ],
    "fact": "Oil painting, about 1896. Leopold Museum, Vienna."
  },
  "schubert": {
    "text": [
      "In the half-dark Schubert sits at the piano, surrounded by women in light dresses who are listening. The picture is a design for the music room of Nikolaus Dumba.",
      "The 1896 design hangs in the Leopold Museum. A later, finished version of the subject burns in 1945 at Immendorf Castle."
    ],
    "fact": "Design, 1896, for Nikolaus Dumba’s music room. Leopold Museum, Vienna."
  },
  "capehat": {
    "text": [
      "A woman in profile, under a large dark hat, the cape up to her chin. The face stays in shadow; the shape of the hat governs the sheet.",
      "The work dates from 1897 or 1898, in the months when the Secession is founded."
    ],
    "fact": "1897–1898. Collection not established."
  },
  "helene": {
    "text": [
      "Helene Klimt, the painter’s niece, the daughter of Ernst and Helene Flöge, sits in profile, her dark hair cut smooth, in a light dress.",
      "After his brother’s death in 1892, Gustav Klimt is the child’s guardian. The portrait dates from 1898, the year of the first Secession exhibition."
    ],
    "fact": "Oil painting, 1898. Collection not established."
  },
  "theseus": {
    "text": [
      "At the top Theseus fights the Minotaur; on the right Pallas Athena stands with spear and Gorgon shield. The centre is left open for the text of the “First Art Exhibition”.",
      "A first version with an unclothed Theseus is objected to. In the issued version of 1898 a tree covers the figure. Below stand “Ver Sacrum” and the name of the Association of Austrian Artists."
    ],
    "fact": "Lithographed poster, 1898, the censored version with the tree."
  },
  "pallas": {
    "text": [
      "Pallas Athena fills the square: a golden helmet, a golden cuirass, a spear in her hand. A face appears on the shield; in the ornament of the armour a small Nuda Veritas.",
      "The picture dates from 1898, the year the magazine “Ver Sacrum” is founded, and hangs in the Wien Museum. It becomes an emblem of the Secession."
    ],
    "fact": "Oil on canvas, 1898. Wien Museum."
  },
  "knips": {
    "text": [
      "Sonja Knips sits in a full pink dress, a red fan in her hand, against a dark ground with blossom. Her gaze meets us quietly.",
      "The portrait dates from 1898 and hangs in the Österreichische Galerie Belvedere in Vienna. It is regarded as one of Klimt’s first modern society portraits."
    ],
    "fact": "Oil on canvas, 1898. Österreichische Galerie Belvedere, Vienna.",
    "quote": {
      "text": "There is no self-portrait of me. I am not interested in my own person as the “subject of a picture”, but rather in other people, especially women, and still more in other appearances.",
      "cite": "Commentary on a nonexistent self-portrait, undated typescript, Wienbibliothek im Rathaus (Auguste Fickert papers)"
    }
  },
  "knipsstudy": {
    "text": [
      "In a few lines the figure already sits in the full dress, the head inclined, the fan suggested. The study looks for the pose of the later oil painting.",
      "It dates from about 1898, in the circle of the portrait of Sonja Knips."
    ],
    "fact": "Drawing, about 1898. Collection not established."
  },
  "lederer": {
    "text": [
      "Serena Pulitzer Lederer stands in a long, almost white dress against a light ground. The narrow upright format leaves much space around the figure.",
      "The portrait dates from 1899. The Lederer family becomes one of Klimt’s most important groups of collectors. The picture hangs in the Metropolitan Museum of Art in New York."
    ],
    "fact": "Oil on canvas, 1899. Metropolitan Museum of Art, New York."
  },
  "deathbed": {
    "text": [
      "An old man lies on the pillow with a closed mouth and sunken cheeks, his beard grey, the ground light. The picture names no one.",
      "It dates from 1899 and hangs in the Österreichische Galerie Belvedere in Vienna. As far as is known, it has no direct connection with the deaths of Klimt’s father and of his brother Ernst in 1892."
    ],
    "fact": "Oil painting, 1899. Österreichische Galerie Belvedere, Vienna."
  },
  "afterrain": {
    "text": [
      "A meadow after the rain, tall grasses, scattered flowers, trees in the background under a light sky. No people appear.",
      "The picture dates from 1898 and hangs in the Österreichische Galerie Belvedere. It belongs to the first landscapes Klimt paints without a commission."
    ],
    "fact": "Oil on canvas, 1898. Österreichische Galerie Belvedere, Vienna."
  },
  "orchardeve": {
    "text": [
      "Fruit trees stand in a green meadow, their crowns dark against a reddish evening sky. The view stays on the surface, without a wide horizon.",
      "The picture dates from 1898 and hangs in the Leopold Museum in Vienna."
    ],
    "fact": "Oil on canvas, 1898. Leopold Museum, Vienna."
  },
  "pond": {
    "text": [
      "The water fills almost the whole picture: reflecting trees, a stretch of bank, the sky in the pond. The place is the Egelsee near Golling in Salzburg, not the Attersee.",
      "The picture dates from 1899 and hangs in the Leopold Museum in Vienna."
    ],
    "fact": "Oil on canvas, 1899. Leopold Museum, Vienna."
  },
  "swamp": {
    "text": [
      "Dark water, tree trunks, the edge of a swamp or pond, the sky between the branches. The surface is quiet and without figures.",
      "The picture dates from about 1900, in the same years as the first landscapes at the Attersee and at the Egelsee."
    ],
    "fact": "Oil painting, about 1900. Collection not established."
  },
  "blackbull": {
    "text": [
      "A black bull stands in a flowery meadow, his body dark against the green, his head lowered. Behind him a light ground opens.",
      "The picture dates from 1900 and hangs in the Leopold Museum in Vienna."
    ],
    "fact": "Oil on canvas, 1900. Leopold Museum, Vienna."
  },
  "farmbirch": {
    "text": [
      "A farmhouse stands behind a row of birches, the roof dark, the trunks light, the ground a meadow. The view meets house and trees head-on.",
      "The picture dates from 1900, the year of Klimt’s first summer at the Attersee with the Flöge family."
    ],
    "fact": "Oil painting, 1900. Collection not established."
  },
  "attersee": {
    "text": [
      "The water of the Attersee fills the surface in small, regular waves, from light turquoise into green. A strip of shore appears only at the edge.",
      "The picture dates from 1900, in the first summer Klimt spends at the lake with the Flöge family, at first in Seewalchen as a guest of the Paulick family."
    ],
    "fact": "Oil on canvas, 1900. Leopold Museum, Vienna.",
    "quote": {
      "text": "I long to get out as never before.",
      "cite": "Postcard to Emilie Flöge, 1 August 1901"
    }
  },
  "fruittrees": {
    "text": [
      "Fruit trees stand in a garden, their crowns dense, and below them a strip of yellow flowers or ripening grass. The sky remains a narrow band.",
      "The picture dates from 1901, in one of the early summers Klimt spends at the Attersee."
    ],
    "fact": "Oil painting, 1901. Collection not established."
  },
  "birchshore": {
    "text": [
      "Two birches stand on the shore; beyond them the water and a dense bank of green, with flowers in the foreground. The trunks divide the surface like a lattice.",
      "The picture dates from 1901, on the lakeshore – in the year Klimt writes to Emilie Flöge that he longs to get out as never before."
    ],
    "fact": "Oil painting, 1901. Collection not established."
  },
  "island": {
    "text": [
      "A small island lies in the Attersee, the trees a dark patch in the light water. The waves are laid in regular, almost ornamental stripes.",
      "The picture dates from about 1901 to 1902. It is in a private collection."
    ],
    "fact": "Oil on canvas, about 1901–1902. Private collection."
  },
  "musik1901": {
    "text": [
      "A woman in a long red garment stands in profile, a lyre in her hands, against a light ground. The surface is spare and poster-like.",
      "The work dates from 1901, the year “Medicine” is shown at the Secession. It belongs to Klimt’s repeated engagement with the subject of music."
    ],
    "fact": "1901. Collection not established."
  },
  "jurysketch": {
    "text": [
      "In a few searching lines a tall figure stands, smaller figures below, an empty field at the right. The sketch looks for the arrangement of the later faculty painting.",
      "It dates from 1901. The finished “Jurisprudence” is completed only between 1903 and 1907 and also burns at Immendorf Castle in 1945."
    ],
    "fact": "Drawing, 1901. Collection not established."
  },
  "judith": {
    "text": [
      "Judith looks out of the picture, the head of Holofernes at the lower edge, her neck surrounded by a golden band of ornament. Gold and pattern frame the face.",
      "The picture dates from 1901 and hangs in the Österreichische Galerie Belvedere in Vienna. The title is also given as “Judith and Holofernes”."
    ],
    "fact": "Oil on canvas, 1901. Österreichische Galerie Belvedere, Vienna."
  },
  "henneberg": {
    "text": [
      "Marie Henneberg sits in a pale blue, widely falling dress, her hands in her lap, against a darker ground. The fabric is laid in many small folds.",
      "The portrait dates from 1901 to 1902 and hangs in the Kunstmuseum Moritzburg in Halle."
    ],
    "fact": "Oil on canvas, 1901–1902. Kunstmuseum Moritzburg, Halle."
  },
  "emilie02": {
    "text": [
      "Emilie Flöge stands in a long, ornamentally patterned reform dress, her figure narrow in the upright format, her gaze firm. Eleven years after the first portrait of 1891 the style is different: surface, pattern, a standing image.",
      "The picture dates from 1902 and hangs in the Wien Museum."
    ],
    "fact": "Oil on canvas, 1902. Wien Museum."
  },
  "beethhead": {
    "text": [
      "A woman’s head in a few pencil lines, the hair loose, the gaze lowered. The study belongs to the preparatory work for the Beethoven Frieze of the Secession in 1902.",
      "It dates from 1901 or 1902, in the months when Klimt draws and paints the frieze for the Beethoven exhibition."
    ],
    "fact": "Drawing, 1901–1902. Study for the Beethoven Frieze. Collection not established."
  },
  "beethsehnsucht": {
    "text": [
      "Two female figures float one after the other, their arms stretched wide, their garments drawn back in long lines. The drawing looks for the floating genii of the left-hand wall of the Beethoven Frieze.",
      "The frieze is made in 1902 for the Secession’s Beethoven exhibition, after Richard Wagner’s reading of the Ninth Symphony. The left-hand wall bears the title “The Yearning for Happiness”."
    ],
    "fact": "Drawing, 1901–1902, a study for the left-hand wall of the Beethoven Frieze."
  },
  "birch": {
    "text": [
      "The trunks of a beech wood stand close together, the ground glows, the horizon has almost vanished. The picture is called “Beech Grove I” and dates from 1902.",
      "It hangs in the Galerie Neue Meister in Dresden. In the same year Klimt paints the Beethoven Frieze in Vienna; the woodland pictures belong to the summers at the Attersee."
    ],
    "fact": "Oil on canvas, 1902. Galerie Neue Meister, Dresden."
  }
});
})();
