// v8.2 English content for Albert Anker’s life journey, Part 2, completing the path.
// Extends window.EN; overwrites EN.paths.anker with whole-path meta.
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Kunstmuseum Bern": "Kunstmuseum Bern"
});
  EN.works = Object.assign(EN.works || {}, {
  "aeltere": {
    "title": "The Older Sister",
    "museum": "Collection not established"
  },
  "knab91": {
    "title": "Portrait of a Boy",
    "museum": "Collection not established"
  },
  "mantua91": {
    "title": "San Giorgio in Mantua",
    "museum": "Collection not established"
  },
  "wassereimer": {
    "title": "Two Children with a Water Pail",
    "museum": "Collection not established"
  },
  "dorfschneider": {
    "title": "The Village Tailor",
    "museum": "Kunstmuseum Solothurn"
  },
  "krippe94": {
    "title": "The Crèche II",
    "museum": "Private collection"
  },
  "teetrinker": {
    "title": "Old Man Drinking Herbal Tea",
    "museum": "Collection not established"
  },
  "anker": {
    "title": "Two Girls Asleep on the Stove Bench",
    "museum": "Kunsthaus Zürich"
  },
  "nwein": {
    "title": "New Wine",
    "museum": "Collection not established"
  },
  "weinbrot": {
    "title": "Old Wine and Bread",
    "museum": "Collection not established"
  },
  "maessigung": {
    "title": "Still Life: Moderation",
    "museum": "Collection not established"
  },
  "unmaessigkeit": {
    "title": "Still Life: Excess",
    "museum": "Collection not established"
  },
  "kaffeekart": {
    "title": "Still Life: Coffee and Potatoes",
    "museum": "Collection not established"
  },
  "heringe": {
    "title": "Still Life with Herrings",
    "museum": "Collection not established"
  },
  "kueche99": {
    "title": "Kitchen Interior",
    "museum": "Collection not established"
  },
  "dorfschule": {
    "title": "The Village School of 1848",
    "museum": "Kunstmuseum Basel"
  },
  "zaeslin": {
    "title": "The Zaeslin Siblings",
    "museum": "Collection not established"
  },
  "bernerin": {
    "title": "Bernese Woman Reading a Letter",
    "museum": "Collection not established"
  },
  "znueni97": {
    "title": "Boy Having His Snack",
    "museum": "Collection not established"
  },
  "berthagugger": {
    "title": "Bertha Gugger with Her Daughter",
    "museum": "Collection not established"
  },
  "suppenmaed": {
    "title": "Girl Eating Soup",
    "museum": "Collection not established"
  },
  "debros": {
    "title": "Portrait of the Young de Bros",
    "museum": "Collection not established"
  },
  "kirchenfeld": {
    "title": "Infant School on the Kirchenfeld Bridge",
    "museum": "Kunstmuseum Bern"
  },
  "znueni01": {
    "title": "Old Man Having His Snack",
    "museum": "Collection not established"
  },
  "feissli": {
    "title": "Old Feissli with Stick and Cap",
    "museum": "Collection not established"
  },
  "blond01": {
    "title": "Portrait of a Blonde Girl",
    "museum": "Collection not established"
  },
  "abrief": {
    "title": "Young Woman Writing a Letter",
    "museum": "Collection not established"
  },
  "kueche01": {
    "title": "Kitchen Scene",
    "museum": "Collection not established"
  },
  "botengaenger": {
    "title": "Two Little Errand Runners",
    "museum": "Collection not established"
  },
  "astill02": {
    "title": "Still Life with Coffee Pot, Milk Jug, Cup, Bread and Potatoes",
    "museum": "Collection not established"
  },
  "schreib02": {
    "title": "Girl Writing",
    "museum": "Collection not established"
  },
  "akatze03": {
    "title": "Seated Girl with a Cat",
    "museum": "Collection not established"
  },
  "suppe04": {
    "title": "Farmer Eating Soup",
    "museum": "Collection not established"
  },
  "baeuerinstrick": {
    "title": "Seated Farmer’s Wife Knitting",
    "museum": "Collection not established"
  },
  "bauerlesen": {
    "title": "Seated Farmer Reading",
    "museum": "Collection not established"
  },
  "zeitung05": {
    "title": "Farmer Reading the Newspaper",
    "museum": "Collection not established"
  },
  "bibel05": {
    "title": "Grandmother with Bible",
    "museum": "Collection not established"
  },
  "gvaterznueni": {
    "title": "Grandfather Having His Snack",
    "museum": "Collection not established"
  },
  "flicken05": {
    "title": "Seated Grandmother Mending",
    "museum": "Collection not established"
  },
  "drehhaspel": {
    "title": "Farmer’s Wife at the Reel",
    "museum": "Collection not established"
  },
  "wintermadchen": {
    "title": "Girl in a Winter Landscape",
    "museum": "Collection not established"
  },
  "schulaufg": {
    "title": "The Homework",
    "museum": "Collection not established"
  },
  "kaffeefrau": {
    "title": "Old Woman in a Red Headscarf Drinking Coffee",
    "museum": "Collection not established"
  },
  "suppe07": {
    "title": "Farmer Eating Soup",
    "museum": "Collection not established"
  },
  "buchschau": {
    "title": "Girl Looking at a Book",
    "museum": "Collection not established"
  },
  "stricklesen": {
    "title": "Knitting Girl Reading",
    "museum": "Collection not established"
  },
  "inserbauer": {
    "title": "Farmer from Ins at the Table",
    "museum": "Collection not established"
  },
  "stehstudie": {
    "title": "Study of a Standing Girl",
    "museum": "Collection not established"
  },
  "schreib08": {
    "title": "Boy Writing",
    "museum": "Collection not established"
  },
  "aself08": {
    "title": "Self-Portrait",
    "museum": "Collection not established"
  },
  "naeherin": {
    "title": "The Little Seamstress",
    "museum": "Private collection"
  },
  "hausaufg09": {
    "title": "Girl Doing Her Homework",
    "museum": "Collection not established"
  },
  "lesemann09": {
    "title": "Man Reading",
    "museum": "Collection not established"
  },
  "muetzeessen": {
    "title": "Boy in a Cap Eating",
    "museum": "Collection not established"
  },
  "strick10": {
    "title": "Knitting Girl",
    "museum": "Collection not established"
  },
  "spinnrad": {
    "title": "Farmer’s Wife at the Spinning Wheel",
    "museum": "Collection not established"
  },
  "lesebauer": {
    "title": "Old Farmer Reading",
    "museum": "Collection not established"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.anker = {
  "title": "Albert Anker’s Life Journey",
  "life": "1831–1910",
  "part": "Parts 1–2 · 1831–1910",
  "subtitle": "From Ins to Paris and back to Ins",
  "intro": "Travel with Albert Anker through his whole life: from childhood in Ins and school years in Neuchâtel, through theology studies, training with Charles Gleyre in Paris, family and the years on the Grand Council, to the Gotthelf illustrations, the watercolours after the stroke of 1901 and his death in Ins on 16 July 1910. Short stations, pictures to colour and documented voices from letters and a diary.",
  "ending": [
    "At the end of September 1901 Anker suffers a stroke. His right hand remains impaired and he largely gives up oil painting; to the end he paints watercolours, seated, with the sheet on his knees.",
    "On 16 July 1910 Albert Anker dies in Ins, aged seventy-nine. He is given a large state funeral; memorial exhibitions follow in Neuchâtel in November 1910 and in Bern in January 1911. His house with the studio is today the Centre Albert Anker."
  ],
  "epilogue": "Albert Anker dies in Ins on 16 July 1910. What remains are some 800 oil paintings and as many watercolours, the Gotthelf illustrations, more than 3,000 letters – and the house in Ins where he was born and worked."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "ankerins90": {
    "place": "Ins · Farewell to Paris",
    "when": "1889–1891",
    "mapLabel": "Ins 1890",
    "intro": [
      "In 1889 Anker is elected to the Federal Art Commission together with Frank Buchser, Arnold Böcklin and François Bocion. In 1890 he gives up his residence in Paris and stops selling pictures through the art dealer Goupil.",
      "From now on he lives entirely in Ins, in the house where he was born. From 1891 to 1901 he is a member of the federal commission of the Gottfried Keller Foundation."
    ]
  },
  "ankergotthelf": {
    "place": "Emmental and Ins · Gotthelf and Village Life",
    "when": "1893–1895",
    "mapLabel": "Emmental",
    "intro": [
      "In 1891, after some hesitation, Anker signs the contract with the publisher Frédéric Zahn for the deluxe edition of Jeremias Gotthelf’s stories. Between 1889 and 1899 he travels again and again to the Emmental in search of motifs.",
      "The edition appears in nine volumes between 1894 and 1904, with more than 220 illustrations by Anker. Alongside, he goes on painting the village: children, craftsmen, old people."
    ]
  },
  "ankerstill2": {
    "place": "Ins · Still Lifes of the 1890s",
    "when": "1890–1899",
    "mapLabel": "Still lifes",
    "intro": [
      "In the 1890s, too, Anker paints still lifes: wine and bread, coffee and potatoes, herrings. In 1896 he makes the pair “Moderation” and “Excess”.",
      "The objects come from his household in Ins. One of the coffee pots he painted several times is now owned by the Centre Albert Anker."
    ]
  },
  "ankerschule2": {
    "place": "Ins · Village School and Portraits",
    "when": "1896–1898",
    "mapLabel": "Village school",
    "intro": [
      "In 1896 Anker paints “The Village School of 1848”. The picture recalls the year in which the modern federal state was founded.",
      "Alongside, he paints commissioned portraits and children from the village: reading, knitting, eating. On 4 January 1897 he complains in a letter about his work for the publisher Zahn."
    ]
  },
  "ankerbern1900": {
    "place": "Bern and Ins · Turn of the Century",
    "when": "1900–1901",
    "mapLabel": "Bern 1900",
    "intro": [
      "In 1900 the University of Bern awards him an honorary doctorate. At the turn of the century he records three fears for the country’s future in a diary.",
      "In 1901 he still paints larger pictures such as “Two Little Errand Runners”. At the end of September 1901 Anker suffers a stroke."
    ]
  },
  "ankeraquarell": {
    "place": "Ins · After the Stroke",
    "when": "1902–1904",
    "mapLabel": "Watercolours",
    "intro": [
      "After the stroke Anker’s right hand remains impaired. Large oil paintings are difficult for him; he largely gives up oil painting.",
      "He now paints mainly watercolours, sitting on a chair with the sheet on his knees and with very little underdrawing. In all there are said to be up to 600 watercolours."
    ]
  },
  "anker1905": {
    "place": "Ins · Letters and Grandparents",
    "when": "1905–1906",
    "mapLabel": "1905",
    "intro": [
      "Anker writes many letters, in his late years especially to Julia Hürner, the daughter of his old friend Ludwig Hürner. On 5 September 1905 he tells her about a night in the lock-up during his student days.",
      "His models are now above all the old people of the village: grandmothers with the Bible, grandfathers with the newspaper. In 1906 Jakob August Heer makes a bust of Anker."
    ]
  },
  "ankerspaet": {
    "place": "Ins · Late Interiors",
    "when": "1907–1908",
    "mapLabel": "1907",
    "intro": [
      "In 1907 and 1908 Anker goes on painting children and old people in the living room: with coffee, with soup, reading and knitting.",
      "Around 1908 he paints himself once more. In the same year he makes “The Little Seamstress”."
    ]
  },
  "anker1910": {
    "place": "Ins · The Last Pictures",
    "when": "1909–1910",
    "mapLabel": "1910",
    "intro": [
      "To the very end Anker paints in Ins: children doing homework, old people reading, women at the spinning wheel.",
      "Albert Anker dies in Ins on 16 July 1910. He is given a large state funeral."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "aeltere": {
    "text": [
      "In a living room a girl looks after a smaller child. A tiled stove and wooden furniture frame the scene.",
      "Older children looking after younger ones are a frequent theme for Anker. In 1889 he is elected to the Federal Art Commission."
    ],
    "fact": "c. 1889. Collection not established."
  },
  "knab91": {
    "text": [
      "A fair-haired boy looks calmly out of the picture against a dark ground.",
      "The portrait dates from 1891. It is not certain who the boy is; it may be Walter Stucki."
    ],
    "fact": "1891. Collection not established."
  },
  "mantua91": {
    "text": [
      "A red brick building with towers stands by the water under a pale sky.",
      "In 1891 Anker records a view of Mantua. Landscapes are rare in his work; in 1888 he writes to Auguste Bachelin how much he regrets this."
    ],
    "fact": "1891. Collection not established.",
    "quote": {
      "text": "At times I am very sorry not to have trained with a landscape painter.",
      "cite": "Letter to Auguste Bachelin, 1888. Translated from the German version published by the Centre Albert Anker, Ins."
    }
  },
  "wassereimer": {
    "text": [
      "Two children walk along a path, carrying a pail together. Trees stand behind them.",
      "The picture dates from 1893. In these years Anker repeatedly travels to the Emmental to look for motifs for the Gotthelf illustrations."
    ],
    "fact": "1893. Collection not established."
  },
  "dorfschneider": {
    "text": [
      "An old man sits bent over his sewing, glasses on his nose, the thread in his hand.",
      "In 1891 Anker signs the contract with the publisher Frédéric Zahn for the deluxe edition of Gotthelf’s stories. He delivers more than 220 illustrations, but he finds the work laborious."
    ],
    "fact": "1894. Kunstmuseum Solothurn.",
    "quote": {
      "text": "This dreadful Zahn [the publisher; “Zahn” is German for “tooth”] has me in his teeth. He will squeeze me like a lemon.",
      "cite": "Letter to Albert de Meuron, 4 January 1897. Translated from the German version published by the Centre Albert Anker, Ins."
    }
  },
  "krippe94": {
    "text": [
      "At a long table many children are building with wooden blocks. In the background stands a woman in a white cap.",
      "The picture of 1894 shows an infant school. All his life Anker is interested in education and schooling."
    ],
    "fact": "1894. Private collection."
  },
  "teetrinker": {
    "text": [
      "An old man sits at the table holding a cup. He looks tired, but composed.",
      "Old people in everyday life become an important theme for Anker in the 1890s."
    ],
    "fact": "c. 1895. Collection not established."
  },
  "anker": {
    "text": [
      "Two girls have fallen asleep on the warm stove bench, leaning close together.",
      "The picture of 1895 hangs in the Kunsthaus Zürich. It is among Anker’s best-known interior scenes."
    ],
    "fact": "1895. Kunsthaus Zürich."
  },
  "nwein": {
    "text": [
      "A glass carafe of pale wine, a glass and bread lie on a table.",
      "Anker continues to paint still lifes with simple things from kitchen and cellar."
    ],
    "fact": "c. 1890. Collection not established."
  },
  "weinbrot": {
    "text": [
      "A dark bottle, a full glass and a loaf of bread stand on a white cloth.",
      "The still life is dated 1896. Its title sets it against “New Wine”."
    ],
    "fact": "1896. Collection not established."
  },
  "maessigung": {
    "text": [
      "On the table stand a fruit bowl, bread, a carafe of water and a modest meal.",
      "The picture forms a pair with “Excess”. Anker shows the difference between moderation and excess without any figures."
    ],
    "fact": "1896. Collection not established."
  },
  "unmaessigkeit": {
    "text": [
      "A plate of ham and many bottles and glasses crowd the table.",
      "The counterpart to “Moderation” dates from the same year, 1896."
    ],
    "fact": "1896. Collection not established."
  },
  "kaffeekart": {
    "text": [
      "A coffee pot, a cup, a jug and boiled potatoes stand together.",
      "Coffee and potatoes are the everyday food in the countryside. The coffee pot appears again and again in Anker’s still lifes."
    ],
    "fact": "1897. Collection not established."
  },
  "heringe": {
    "text": [
      "Herrings lie on a plate, beside them bread and a tall glass bottle.",
      "The still life is dated 1899. Anker stays with a few, closely observed things."
    ],
    "fact": "1899. Collection not established."
  },
  "kueche99": {
    "text": [
      "A kitchen with stove, pots and dishes, recorded in light brown tones.",
      "Anker’s interiors are mostly made in his own house in Ins."
    ],
    "fact": "1899. Collection not established."
  },
  "dorfschule": {
    "text": [
      "In a dark schoolroom children of all ages sit, the teacher stands in the middle.",
      "Anker paints the picture in 1896, recalling the year 1848, when the modern federal state was founded."
    ],
    "fact": "1896. Kunstmuseum Basel."
  },
  "zaeslin": {
    "text": [
      "Three siblings sit and stand together in dark clothes, their faces bright.",
      "The group portrait is a commission of 1896. Besides genre scenes Anker paints many portraits."
    ],
    "fact": "1896. Collection not established."
  },
  "bernerin": {
    "text": [
      "A young woman in Bernese costume sits at the table reading a letter.",
      "In his life Anker himself writes more than 3,000 letters. For him reading is a quiet, serious moment."
    ],
    "fact": "1896. Collection not established."
  },
  "znueni97": {
    "text": [
      "A boy sits at the table eating his “Znüni”, the mid-morning snack.",
      "Anker often shows children and old people eating, very close up and without distraction."
    ],
    "fact": "c. 1897. Collection not established."
  },
  "berthagugger": {
    "text": [
      "A mother holds her small child on her lap; both look calm.",
      "Anker had already painted Bertha Gugger as a girl in 1869, together with her sister Rosa. In 1898 he paints her as a mother."
    ],
    "fact": "1898. Collection not established."
  },
  "suppenmaed": {
    "text": [
      "A girl bends over a plate and spoons up soup.",
      "The picture is dated 1898 and is also called “Mädeli”."
    ],
    "fact": "1898. Collection not established."
  },
  "debros": {
    "text": [
      "A dark-haired boy with a large white lace collar looks out of the picture.",
      "The portrait is dated 1898. The red ground makes the face glow brightly."
    ],
    "fact": "1898. Collection not established."
  },
  "kirchenfeld": {
    "text": [
      "A group of small children crosses a bridge in Bern with a handcart. A woman accompanies them; a lamp stands at the railing.",
      "In 1900 Anker receives an honorary doctorate from the University of Bern. At the turn of the century he also notes political worries in his diary."
    ],
    "fact": "1900. Kunstmuseum Bern.",
    "quote": {
      "text": "I harbour three kinds of fears: 1. The unheard-of, undemocratic union of power and influence in a few hands, the total contamination of political principles by questions of material interest. 2. The debt of billions and its dangers for the independence of the fatherland. 3. The dangerous position of the state as the largest employer in a time of tempestuous social ferment.",
      "cite": "Diary at the turn of the century, 1899/1900. Centre Albert Anker, Ins."
    }
  },
  "znueni01": {
    "text": [
      "An old man sits at the table with bread and a drink, eating slowly.",
      "The picture is dated 1901, the year in which Anker later suffers a stroke."
    ],
    "fact": "1901. Collection not established."
  },
  "feissli": {
    "text": [
      "An old man in a cap leans on his stick.",
      "Anker draws and paints many people from Ins and the surrounding area, often under their own names."
    ],
    "fact": "1901. Collection not established."
  },
  "blond01": {
    "text": [
      "A girl with pale blonde hair and a white collar against a dark ground.",
      "Portraits of children make up a large part of Anker’s work."
    ],
    "fact": "c. 1901. Collection not established."
  },
  "abrief": {
    "text": [
      "A young woman sits at the table writing, her head slightly bowed.",
      "For Anker writing and reading belong to everyday life in the countryside."
    ],
    "fact": "c. 1901. Collection not established."
  },
  "kueche01": {
    "text": [
      "A kitchen in blue tones: women and children at the stove and at the table.",
      "The scene is painted loosely and sketchily, like a moment quickly captured."
    ],
    "fact": "c. 1901. Collection not established."
  },
  "botengaenger": {
    "text": [
      "A boy with a basket and a little girl walk hand in hand through a snowy village.",
      "The winter picture is dated 1901. The children are on their way to fetch something."
    ],
    "fact": "1901. Collection not established."
  },
  "astill02": {
    "text": [
      "Coffee pot, milk jug, cup, bread and potatoes stand on a table.",
      "At the end of September 1901 Anker suffers a stroke; his right hand remains impaired. He keeps painting, now mainly watercolours."
    ],
    "fact": "1902. Collection not established."
  },
  "schreib02": {
    "text": [
      "A girl in a blue dress writes intently in a notebook; an inkwell stands on the table.",
      "After the stroke Anker likes to work seated, with the sheet on his knees."
    ],
    "fact": "1902. Collection not established."
  },
  "akatze03": {
    "text": [
      "A girl sits by the window holding a cat on her lap.",
      "The sheet is dated 1903. Anker’s late pictures are painted more lightly and airily."
    ],
    "fact": "1903. Collection not established."
  },
  "suppe04": {
    "text": [
      "An old farmer sits at the table eating soup.",
      "Old men and women from Ins are Anker’s most frequent models in his late years."
    ],
    "fact": "1904. Collection not established."
  },
  "baeuerinstrick": {
    "text": [
      "An older woman in a headscarf sits on a chair knitting.",
      "The sheet is dated 1904 and shows quiet work in the living room."
    ],
    "fact": "1904. Collection not established."
  },
  "bauerlesen": {
    "text": [
      "An old farmer sits reading, his head bent over the page.",
      "Old people reading appear again and again in Anker’s late work."
    ],
    "fact": "1904. Collection not established."
  },
  "zeitung05": {
    "text": [
      "A farmer sits reading the newspaper, a pipe in his hand.",
      "In September 1905 there are engineer troops in the village. In a letter to Julia Hürner, Anker remembers his own military service as a student."
    ],
    "fact": "1905. Collection not established.",
    "quote": {
      "text": "I have already told you how I was once in the lock-up, together with your father; I had been given one night because my rifle was not clean, he because he had skipped a drill.",
      "cite": "Letter to Julia Hürner, 5 September 1905. Robert Meister (ed.), Albert Anker und seine Welt, Bern 1981, p. 21."
    }
  },
  "bibel05": {
    "text": [
      "An old woman sits holding an open Bible.",
      "The picture is dated 1905. By now Anker is a grandfather himself; he draws his granddaughter Elisabeth Oser as a little girl."
    ],
    "fact": "1905. Collection not established."
  },
  "gvaterznueni": {
    "text": [
      "A grandfather in a cap sits at the table having his snack.",
      "Anker’s late work centres on the old people of the village and their daily routine."
    ],
    "fact": "1905. Collection not established."
  },
  "flicken05": {
    "text": [
      "In a round field a grandmother in a red headscarf sits mending.",
      "The sheet is dated 1905. The round shape makes the scene look as if seen through a window."
    ],
    "fact": "1905. Collection not established."
  },
  "drehhaspel": {
    "text": [
      "A farmer’s wife sits at a reel winding yarn.",
      "Spinning and winding yarn belong to the old household work in the countryside that Anker records."
    ],
    "fact": "1906. Collection not established."
  },
  "wintermadchen": {
    "text": [
      "A girl in a headscarf stands in the snow holding a basket.",
      "The picture is dated 1906. As before, Anker shows children on their way through winter."
    ],
    "fact": "1906. Collection not established."
  },
  "schulaufg": {
    "text": [
      "A girl sits over her homework, in a round field.",
      "Learning and school accompany Anker’s work from the 1860s to the very end."
    ],
    "fact": "1906. Collection not established."
  },
  "kaffeefrau": {
    "text": [
      "An old woman in a red headscarf sits at the table drinking coffee. A jug and a cup stand beside her.",
      "The picture is dated 1907. The coffee pot from Anker’s still lifes still stands in the house in Ins today."
    ],
    "fact": "1907. Collection not established."
  },
  "suppe07": {
    "text": [
      "A man in a blue shirt sits at the table eating soup.",
      "Three years after the picture of 1904, Anker paints the same theme again."
    ],
    "fact": "1907. Collection not established."
  },
  "buchschau": {
    "text": [
      "A girl sits looking at a large book on her lap.",
      "The sheet is dated 1907."
    ],
    "fact": "1907. Collection not established."
  },
  "stricklesen": {
    "text": [
      "A girl knits and at the same time reads a book lying in front of her.",
      "Two activities at once: Anker often shows children busy and absorbed."
    ],
    "fact": "1907. Collection not established."
  },
  "inserbauer": {
    "text": [
      "A farmer from Ins sits at the table in a blue shirt, his hands at rest.",
      "The title names the village: Anker paints the people of his community into his last years."
    ],
    "fact": "1908. Collection not established."
  },
  "stehstudie": {
    "text": [
      "A girl stands still, only lightly indicated, in a blue apron.",
      "The study of 1908 shows how sparingly Anker works in his late years."
    ],
    "fact": "1908. Collection not established."
  },
  "schreib08": {
    "text": [
      "A boy rests his head in his hand and writes in a notebook.",
      "Anker has been painting children writing since the writing lessons of the 1860s."
    ],
    "fact": "c. 1908. Collection not established."
  },
  "aself08": {
    "text": [
      "An old man with a white beard looks gravely out of the picture.",
      "Around 1908 Anker paints himself once more, at about seventy-seven years old."
    ],
    "fact": "c. 1908. Collection not established."
  },
  "naeherin": {
    "text": [
      "A girl sits bent over her sewing, her fair hair carefully braided.",
      "The picture dates from 1908, two years before Anker’s death."
    ],
    "fact": "1908. Private collection."
  },
  "hausaufg09": {
    "text": [
      "A fair-haired girl with a blue bow bends over a notebook.",
      "The picture is dated 1909. Even in his last year of life school remains Anker’s theme."
    ],
    "fact": "1909. Collection not established."
  },
  "lesemann09": {
    "text": [
      "A man sits reading, his hand at his head.",
      "The sheet is dated 1909."
    ],
    "fact": "1909. Collection not established."
  },
  "muetzeessen": {
    "text": [
      "A boy in a cap eats from a bowl.",
      "The picture is dated 1910, the year of Anker’s death."
    ],
    "fact": "1910. Collection not established."
  },
  "strick10": {
    "text": [
      "A girl with braids sits at the table knitting.",
      "The knitting girl of 1910 is among Anker’s last works."
    ],
    "fact": "1910. Collection not established."
  },
  "spinnrad": {
    "text": [
      "A farmer’s wife sits at the spinning wheel, spinning.",
      "The sheet is dated 1910."
    ],
    "fact": "1910. Collection not established."
  },
  "lesebauer": {
    "text": [
      "An old farmer sits at the table reading, completely absorbed in his book.",
      "The picture is dated 1910. It stands at the end of this path."
    ],
    "fact": "1910. Collection not established."
  }
});
})();
