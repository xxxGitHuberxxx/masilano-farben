// v8.1 English content for Albert Anker’s life journey, Part 1.
// Extends window.EN; does not rewrite earlier path files.
(function () {
  var EN = window.EN = window.EN || {};
  var museums = {
  "Privatbesitz": "Private collection",
  "Sammlung nicht ermittelt": "Collection not established"
};
  EN.museums = Object.assign(EN.museums || {}, museums);
  var works = {
  "aself52": {
    "title": "Self-Portrait",
    "museum": "Centre Albert Anker, Ins"
  },
  "sonntag": {
    "title": "Sunday Afternoon",
    "museum": "Private collection"
  },
  "klfreundin": {
    "title": "The Little Friend",
    "museum": "Private collection"
  },
  "ataufe": {
    "title": "The Baptism",
    "museum": "Private collection"
  },
  "schreibunt": {
    "title": "The Writing Lesson III",
    "museum": "Private collection"
  },
  "imwald": {
    "title": "Sleeping Girl in the Wood",
    "museum": "Collection not established"
  },
  "huehner": {
    "title": "Girl Feeding Chickens",
    "museum": "Musée d’art et d’histoire, Neuchâtel"
  },
  "rothaube": {
    "title": "Girl with a Red Hood",
    "museum": "Private collection"
  },
  "louisepuppe": {
    "title": "Louise Anker with a Doll",
    "museum": "Private collection"
  },
  "schulexamen": {
    "title": "The School Examination",
    "museum": "Private collection"
  },
  "schulstube": {
    "title": "The Schoolroom",
    "museum": "Private collection"
  },
  "knabetisch": {
    "title": "Boy at the Table II",
    "museum": "Private collection"
  },
  "marionetten": {
    "title": "The Marionettes",
    "museum": "Private collection"
  },
  "kaffeetrink": {
    "title": "Girl Drinking Coffee",
    "museum": "Private collection"
  },
  "schulspaz": {
    "title": "The School Walk",
    "museum": "Private collection"
  },
  "schneebar": {
    "title": "The Snow Bear",
    "museum": "Private collection"
  },
  "seifen": {
    "title": "The Soap-Bubble Blower",
    "museum": "Private collection"
  },
  "teeschmelz": {
    "title": "Tea and Melted Rolls",
    "museum": "Private collection"
  },
  "kaffeestill": {
    "title": "Still Life with Coffee",
    "museum": "Private collection"
  },
  "kaffeecognac82": {
    "title": "Still Life with Coffee Service and Cognac Bottle",
    "museum": "Private collection"
  },
  "aplat": {
    "title": "Faience Plate with a Warrior",
    "museum": "Petit Palais, Paris"
  },
  "acharlemagne": {
    "title": "Charlemagne",
    "museum": "Petit Palais, Paris"
  },
  "milchsuppe": {
    "title": "The Milk Soup at Kappel",
    "museum": "Kunsthaus Zürich"
  },
  "bourbaki": {
    "title": "The Bourbaki Soldiers",
    "museum": "Private collection"
  },
  "gemeindeschr": {
    "title": "The Village Clerk",
    "museum": "Private collection"
  },
  "liederheimat": {
    "title": "The Song of the Homeland",
    "museum": "Private collection"
  },
  "quacksalber": {
    "title": "The Village Doctor",
    "museum": "Private collection"
  },
  "caisse": {
    "title": "The Former Board of the Erlach Savings Bank",
    "museum": "Private collection"
  },
  "stickerinnen": {
    "title": "The Little Embroiderers",
    "museum": "Private collection"
  },
  "spitzenhaube": {
    "title": "Reading Girl with a Lace Cap",
    "museum": "Private collection"
  },
  "schreibknabe": {
    "title": "Writing Boy with Little Sister I",
    "museum": "Private collection"
  },
  "marie75": {
    "title": "Marie Anker",
    "museum": "Private collection"
  },
  "laenderkinder": {
    "title": "Länderkinder",
    "museum": "Musée d’art et d’histoire, Neuchâtel"
  },
  "pelzmuetze": {
    "title": "Schoolboy with a Fur Cap in a Snowy Landscape",
    "museum": "Private collection"
  },
  "schulmaedchen": {
    "title": "Schoolgirl with Slate and Sewing Basket",
    "museum": "Kunstmuseum Bern"
  },
  "cecile78": {
    "title": "Cécile Anker in a High Chair",
    "museum": "Private collection"
  },
  "turnstunde": {
    "title": "Gym Class in Ins",
    "museum": "Private collection"
  },
  "kinderfrueh": {
    "title": "Children’s Breakfast",
    "museum": "Private collection"
  },
  "marie80": {
    "title": "Marie Anker",
    "museum": "Private collection"
  },
  "maedchenkatze": {
    "title": "Girl with a Cat",
    "museum": "Private collection"
  },
  "schwester83": {
    "title": "The Two Sisters",
    "museum": "Private collection"
  },
  "rotkaeppchen": {
    "title": "Little Red Riding Hood",
    "museum": "Private collection"
  },
  "gotthelfleserin": {
    "title": "A Gotthelf Reader",
    "museum": "Private collection"
  },
  "mariette": {
    "title": "Mariette with Strawberries",
    "museum": "Private collection"
  },
  "roterweste": {
    "title": "Boy in a Red Waistcoat",
    "museum": "Private collection"
  },
  "kartoffel": {
    "title": "Girl Peeling Potatoes",
    "museum": "Private collection"
  },
  "fleissig": {
    "title": "Diligent",
    "museum": "Private collection"
  },
  "cecile86": {
    "title": "Cécile Anker",
    "museum": "Private collection"
  },
  "ersteschritte": {
    "title": "The First Steps",
    "museum": "Private collection"
  },
  "strickend": {
    "title": "Knitting Girl Watching the Toddler in a Cradle",
    "museum": "Private collection"
  }
};
  EN.works = Object.assign(EN.works || {}, works);
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
  "ankerins": {
    "place": "Ins and Neuchâtel · Childhood, school, theology",
    "when": "1831–1854",
    "mapLabel": "Ins",
    "intro": [
      "Albert Anker is born on 1 April 1831 in Ins in the Bernese Seeland, the second of three children of the veterinarian Samuel Anker and Marianne Elisabeth Gatschet. In 1836 the family moves to Neuchâtel. He goes to school there; from 1845 to 1848 he receives private drawing lessons from Louis Wallinger.",
      "In 1847 his brother Rudolf and his mother die. From 1849 to 1851 Anker attends the Gymnasium in Bern, takes his Matura and begins theological studies at the University of Bern. In September 1851 he travels to Paris for the first time. In June 1852 his sister Luise dies. From 1852 to 1854 he studies theology in Halle; in the autumn of 1854, with his father’s permission, he goes to Paris as a painter."
    ]
  },
  "ankerparis": {
    "place": "Paris · Charles Gleyre and the Beaux-Arts",
    "when": "1854–1861",
    "mapLabel": "Paris",
    "intro": [
      "In the autumn of 1854 Anker becomes a pupil of the Vaudois classicist Charles Gleyre in Paris. From 1855 to 1860 he attends the École Impériale et Spéciale des Beaux-Arts. From 1856 he exhibits at the touring exhibitions of the Swiss Art Association, and from 1859 regularly at the Paris Salon – until 1885.",
      "In 1860 his father dies. Thereafter Anker spends the summers in Ins and the winters in Paris; from 1865 the family travels with him. In 1861 he goes to Italy with François Ehrmann. “Sunday Afternoon” and “The Little Friend” belong to the first independent pictures after the years of training."
    ]
  },
  "ankerfamilie": {
    "place": "Ins and Paris · Marriage and the gold medal",
    "when": "1864–1867",
    "mapLabel": "Family",
    "intro": [
      "In 1864 Anker marries Anna Rüfli (1835–1917). The couple have six children: Louise in 1865, Rudolf in 1867, Emil in 1870, Marie in 1872, Moritz in 1874 and Cécile in 1877. Rudolf dies in 1869, Emil in 1871, still in early childhood.",
      "In 1866 Anker receives a gold medal at the Paris Salon for “Sleeping Girl in the Wood” and “The Writing Lesson”, both of 1865. The family lives in a rhythm of Ins in summer and Paris in winter."
    ]
  },
  "ankerdorf": {
    "place": "Ins · School and village life",
    "when": "1862–1873",
    "mapLabel": "Village",
    "intro": [
      "Early on, Anker paints schoolrooms, walks, games and winter in the village square. “The School Examination” and “The Schoolroom” date from 1862; later come the school walk, the snow bear and the soap-bubble blower.",
      "These pictures are set in the Seeland he knows from Ins. They are not memories of his own childhood, but observations from the life around him, recorded with the calm of a realist."
    ]
  },
  "ankerstill": {
    "place": "The laid table",
    "when": "1873–1882",
    "mapLabel": "Still life",
    "intro": [
      "Besides the figure paintings, Anker also paints still lifes: laid tables with tea, coffee, bread and bottles. “Tea and Melted Rolls” dates from 1873, a coffee still life from 1877, another table setting from 1882.",
      "The objects stand as precisely and calmly as his children at table. They are not display pieces, but the ware of the house."
    ]
  },
  "ankerfayence": {
    "place": "Paris · Faience for Théodore Deck",
    "when": "1866–1875",
    "mapLabel": "Faience",
    "intro": [
      "From about 1866 Anker designs faience for the Alsatian ceramist Théodore Deck in Paris. He supplies well over three hundred designs: plates, dishes and vessels with heads, ornaments and historical figures.",
      "Two plates in the Petit Palais show the range: in 1869 a warrior on a blue ground, and around 1870 to 1875 a portrait of Charlemagne. The work for Deck runs alongside the oil painting, in the midst of the Paris winters."
    ]
  },
  "ankercivic": {
    "place": "Bern and the Seeland · The Grand Council and public life",
    "when": "1870–1881",
    "mapLabel": "Bern",
    "intro": [
      "From 1870 to 1874 Anker sits on the Grand Council of the Canton of Bern. He speaks in favour of building the Kunstmuseum Bern, which opens in 1879, and does not stand again after 1874. In Ins he belongs, among other bodies, to the school commission, the church council and the men’s choir.",
      "In the same years he paints history and civic pictures: the milk soup at Kappel, the reception of the interned Bourbaki soldiers in 1871, the village clerk, and later the village doctor and the board of the Erlach savings bank. In 1878 he is made a knight of the Legion of Honour."
    ]
  },
  "ankerkinder": {
    "place": "Ins · Portraits of children",
    "when": "1875–1881",
    "mapLabel": "Children",
    "intro": [
      "In the second half of the 1870s Anker’s pictures of children grow denser: embroiderers, reading girls, writing boys, schoolchildren in the snow, the gym class in Ins, the children’s breakfast.",
      "Among them stand his own children: Marie around 1875 and in 1880, Cécile in 1878 in a high chair. In July 1876 he writes to his wife from Murten that he has made a sketch in a pharmacy."
    ]
  },
  "anker1880s": {
    "place": "Ins and Paris · The 1880s",
    "when": "1883–1888",
    "mapLabel": "1880s",
    "intro": [
      "In the 1880s children, sisters, fairy tales and the living room remain the fixed themes: the two sisters, Little Red Riding Hood, a Gotthelf reader, Mariette with strawberries, the knitting girl at the cradle, the first steps.",
      "The family still spends the winter in Paris and the summer in Ins. In 1890 Anker will give up the Paris residence. The large pictures of the 1890s – and what follows after – belong to the next part."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "aself52": {
    "text": [
      "A young man in a dark coat, his brow clear, his gaze straight ahead. The drawing bears the inscription “Sept. 1852” – Albert Anker is twenty-one.",
      "In this year he is studying theology, first in Bern, then in Halle. The Centre Albert Anker in Ins preserves the drawing."
    ],
    "fact": "Drawing, September 1852. Centre Albert Anker, Ins.",
    "quote": {
      "text": "What is art? In the first place art does not consist in imitation, but in two points: first one must form an ideal in one’s conceptions; second one must present this ideal to the eyes of one’s fellow human beings, give it a shape that becomes accessible to our seeing and hearing.",
      "cite": "Letter to Auguste Bachelin, 9 June 1849. Centre Albert Anker, Ins."
    }
  },
  "sonntag": {
    "text": [
      "In a living room old and young people sit together. One reads aloud, the others listen – a quiet Sunday in the house.",
      "The picture dates from 1861, just after the student years in Paris. Already here Anker shows the village life to which he remains faithful."
    ],
    "fact": "Oil on canvas, 1861. Private collection."
  },
  "klfreundin": {
    "text": [
      "A girl in a dark dress stands beside a smaller child. The two hold on to each other as if they belonged firmly together.",
      "The picture dates from 1862. Anker does not paint children as pretty accessories, but as counterparts with a seriousness of their own."
    ],
    "fact": "Oil on canvas, 1862. Private collection."
  },
  "ataufe": {
    "text": [
      "In a village room the family has gathered for a baptism. A clergyman holds the child; the others stand and sit close together.",
      "The picture dates from 1864, the year of Anker’s marriage to Anna Rüfli. It belongs to the early large interiors from Ins."
    ],
    "fact": "Oil on canvas, 1864. Private collection."
  },
  "schreibunt": {
    "text": [
      "Two fair-haired children bend over a sheet. The elder guides the hand, the younger looks closely – a lesson in learning to write.",
      "The picture belongs to the writing-lesson paintings of 1865. For “The Writing Lesson” and “Sleeping Girl in the Wood” Anker receives a gold medal at the Paris Salon in 1866."
    ],
    "fact": "Oil on canvas, 1865. Private collection."
  },
  "imwald": {
    "text": [
      "A girl sleeps at the foot of a tree, her arm against a bundle of brushwood. Her dress is plain, her feet bare, the wood around her dark and still.",
      "The picture of 1865 is one of the two works for which Anker receives a gold medal at the Paris Salon in 1866."
    ],
    "fact": "Oil on canvas, 1865. Collection not established."
  },
  "huehner": {
    "text": [
      "On a wooden balcony a child stands with a plate and feeds the chickens. Behind, the living room opens; in front lies the yard.",
      "The picture of 1865 hangs in the Musée d’art et d’histoire in Neuchâtel. It shows the everyday life Anker has at his door in Ins."
    ],
    "fact": "Oil on canvas, 1865. Musée d’art et d’histoire, Neuchâtel."
  },
  "rothaube": {
    "text": [
      "A child looks calmly to the side, a red hood tied firmly around the head, an olive-green shawl with a violet stripe around the shoulders.",
      "The portrait dates from about 1866, in the years after the gold medal, when Anker is settling his language of children’s portraits."
    ],
    "fact": "Oil on canvas, about 1866. Private collection."
  },
  "louisepuppe": {
    "text": [
      "A little girl in a patterned dress holds a doll firmly in her arm. She is Louise, born in 1865, the first child of Albert and Anna Anker.",
      "The portrait dates from 1867, when Louise is about two years old. Anker paints his own children again and again, without prettifying them."
    ],
    "fact": "Oil on canvas, 1867. Private collection."
  },
  "schulexamen": {
    "text": [
      "In a bright schoolroom children sit in rows. At the front stands the teacher; maps hang on the walls – an examination day in the country.",
      "The picture of 1862 belongs to Anker’s early large school paintings. School and learning remain a lifelong theme, later also as a member of the school commission in Ins."
    ],
    "fact": "Oil on canvas, 1862. Private collection."
  },
  "schulstube": {
    "text": [
      "A long, low schoolroom: benches, a stove, children over their exercise books. The light falls into the room from the side.",
      "This picture too dates from 1862. Anker knows rooms of this kind from the Seeland; he paints them as places of work, not as an idyll."
    ],
    "fact": "Oil on canvas, 1862. Private collection."
  },
  "knabetisch": {
    "text": [
      "A little boy in a red garment sits at the table and eats with concentration, the spoon in his hand, his hair bright in the light.",
      "The picture of 1869 belongs to a series of boys at table. Anker records the wholly ordinary moment without heightening it."
    ],
    "fact": "Oil on canvas, 1869. Private collection."
  },
  "marionetten": {
    "text": [
      "A young woman works two hand puppets from behind a standing book. Two small children watch the stage, spellbound.",
      "The picture dates from 1869. From an everyday object – a book used as a curtain – a little theatre appears in the living room."
    ],
    "fact": "Oil on canvas, 1869. Private collection."
  },
  "kaffeetrink": {
    "text": [
      "A girl holds a coloured bowl with both hands and drinks. The saucer stands on the table; the background is dark and still.",
      "The picture of 1870 belongs to Anker’s very close portraits of children: a single, attentive moment, without accessories."
    ],
    "fact": "Oil on canvas, 1870. Private collection."
  },
  "schulspaz": {
    "text": [
      "A school class crosses a meadow, the teacher ahead, the children in a loose line, trees and sky behind them.",
      "The picture of 1872 shows the school not only in the classroom, but also on the way. For Anker, learning and walking belong together."
    ],
    "fact": "Oil on canvas, 1872. Private collection."
  },
  "schneebar": {
    "text": [
      "A large snowman stands in the village square, children beside it with a flag, a bench and a slate, snow and wooden houses all around.",
      "The winter picture of 1873 is a village celebration: everyone has a task, and the “bear” of snow stands in the middle."
    ],
    "fact": "Oil on canvas, 1873. Private collection."
  },
  "seifen": {
    "text": [
      "A boy in a light-blue shirt stands and blows a soap bubble, his gaze fixed on the hollow of his hand.",
      "The picture of 1873 records a moment of play that will vanish at once – typical of Anker’s way of looking at children intent on a task."
    ],
    "fact": "Oil on canvas, 1873. Private collection."
  },
  "teeschmelz": {
    "text": [
      "On a white cloth stand a dark teapot, a cup, a plate of glazed rolls and fruit beside them.",
      "The still life of 1873 belongs to Anker’s early laid tables. He paints the food of the house with the same calm as his portraits of children."
    ],
    "fact": "Oil on canvas, 1873. Private collection."
  },
  "kaffeestill": {
    "text": [
      "A coffee pot, cups, sugar and a bottle stand on a white cloth. The light is quiet, the objects carefully placed.",
      "The picture of 1877 shows that, besides the figure paintings, Anker also cultivates the laid table as a subject in its own right."
    ],
    "fact": "Oil on canvas, 1877. Private collection."
  },
  "kaffeecognac82": {
    "text": [
      "A richer coffee service: pot, cups, a delicate vessel and a bottle, all on a light cloth against a dark ground.",
      "Five years after the still life of 1877, Anker takes up the subject again in 1882, with more ware and a cooler light."
    ],
    "fact": "Oil on canvas, 1882. Private collection."
  },
  "aplat": {
    "text": [
      "A warrior appears in profile on a blue ground, with a helmet, peacock feathers and a scroll. The plate is set in an old frame.",
      "The faience dates from 1869, after a design by Anker, from the workshop of Théodore Deck in Paris. It now belongs to the Petit Palais."
    ],
    "fact": "Faience, 1869. Petit Palais, Paris."
  },
  "acharlemagne": {
    "text": [
      "In the well of the plate Charlemagne appears in profile, with a beard and a reddish-brown crown. Around the rim are small medallions and the words “KAROLVS R”.",
      "The faience dates from between 1870 and 1875, for Théodore Deck. Anker signs the rim. This piece too is kept at the Petit Palais in Paris."
    ],
    "fact": "Faience, about 1870–1875. Petit Palais, Paris."
  },
  "milchsuppe": {
    "text": [
      "Armed men sit around a large cauldron in a meadow and eat together. Behind them the army is encamped; the sky is wide.",
      "The history painting of 1869 tells the tradition of the milk soup at Kappel: after the peace, the former opponents share the soup. It hangs in the Kunsthaus Zürich."
    ],
    "fact": "Oil on canvas, 1869. Kunsthaus Zürich."
  },
  "bourbaki": {
    "text": [
      "In a barn, French soldiers lie and sit in the straw. Women and children from the village bring soup and bread.",
      "In February 1871 Switzerland interned the defeated French Bourbaki army. Anker paints the reception of the soldiers as everyday help, not as a battle."
    ],
    "fact": "Oil on canvas, 1871. Private collection."
  },
  "gemeindeschr": {
    "text": [
      "A man in official dress sits at a table covered with papers and writes. Behind him, files and papers hang on the wall.",
      "The picture of 1874 shows the written life of the commune – in the same years in which Anker himself sits on the Grand Council of the Canton of Bern."
    ],
    "fact": "Oil on canvas, 1874. Private collection."
  },
  "liederheimat": {
    "text": [
      "A woman sits at the piano, one child leans against her, another listens. The room is plain, the moment quiet.",
      "The picture of 1874 joins domestic music and family. Anker himself sings in the men’s choir of Ins; singing together belongs to his village life."
    ],
    "fact": "Oil on canvas, 1874. Private collection."
  },
  "quacksalber": {
    "text": [
      "In a farmhouse room a doctor or surgeon examines a child; the family stands and sits close around the table.",
      "The picture of 1879 is also called “The Village Doctor”. Anker shows care for health as part of village life, without sensationalism."
    ],
    "fact": "Oil on canvas, 1879. Private collection."
  },
  "caisse": {
    "text": [
      "Around a table men sit and stand with glasses, pipes and papers. One holds a sheet, another writes – a meeting, and yet a sociable picture.",
      "The drawing of 1881 shows the board of the savings bank in Erlach (Cerlier), not far from Ins. Anker belongs to the civic world of the Seeland, not only to the studio."
    ],
    "fact": "Drawing, 1881. Private collection."
  },
  "stickerinnen": {
    "text": [
      "Two girls sit close together over an embroidery frame. One works, the other watches, their heads almost touching.",
      "The picture of 1875 belongs to Anker’s quiet pictures of work: needlework as shared concentration, not as folklore."
    ],
    "fact": "Oil on canvas, 1875. Private collection."
  },
  "spitzenhaube": {
    "text": [
      "A girl sits in profile with a white lace cap and a book in her hand. The background is dark, the face bright and serious.",
      "The picture of 1875 shows reading as a bearing. Anker paints many reading children and women; education in the countryside is a constant theme for him."
    ],
    "fact": "Oil on canvas, 1875. Private collection."
  },
  "schreibknabe": {
    "text": [
      "A boy bends over an exercise book and writes. Beside him a little girl leans in and watches, their heads close together.",
      "The picture of 1875 carries the theme of the writing lesson further: here learning happens as a scene between brother and sister at the same table."
    ],
    "fact": "Oil on canvas, 1875. Private collection."
  },
  "marie75": {
    "text": [
      "A small child with fair hair and blue eyes holds a doll in a red dress. A light-blue shawl lies around the shoulders.",
      "This is Marie, born in 1872, the family’s fourth child. The portrait dates from about 1875, when she is about three years old."
    ],
    "fact": "Oil on canvas, about 1875. Private collection."
  },
  "laenderkinder": {
    "text": [
      "In a square before houses and trees many children and adults stand and walk. Some are being received, others look on.",
      "The picture of 1876 hangs in the Musée d’art et d’histoire in Neuchâtel. It also bears a French title that recalls orphans from Unterwalden in Murten; the scene itself is a composed reception, not a record of 1798."
    ],
    "fact": "Oil on canvas, 1876. Musée d’art et d’histoire, Neuchâtel.",
    "quote": {
      "text": "I have just made a sketch in a pharmacy. It may come to nothing, but one does what one can...",
      "cite": "To Frau Anker, Murten, 11 July 1876. Centre Albert Anker, Ins."
    }
  },
  "pelzmuetze": {
    "text": [
      "A schoolboy stands in the snow, a slate under his arm, a dark fur cap on his head, his gaze firm and alert.",
      "The picture of 1877 joins the way to school and winter. Anker knows the walk to school in Ins from the daily life of the village."
    ],
    "fact": "Oil on canvas, 1877. Private collection."
  },
  "schulmaedchen": {
    "text": [
      "A girl in a red-brown dress stands with a slate and a sewing basket. Her gaze looks calmly out of the picture.",
      "The picture of 1878 hangs in the Kunstmuseum Bern. Writing and sewing lie here with equal right in the child’s hands."
    ],
    "fact": "Oil on canvas, 1878. Kunstmuseum Bern."
  },
  "cecile78": {
    "text": [
      "A small child sits in a wooden chair, a red toy in her arm, the bib white, the dress blue. The gaze turns to the side.",
      "This is Cécile, born in 1877, the youngest of the six children. The portrait dates from 1878, when she is about a year old."
    ],
    "fact": "Oil on canvas, 1878. Private collection."
  },
  "turnstunde": {
    "text": [
      "In an open square in Ins, children stand in rows; some exercise on the horizontal bar and the parallel bars, farmers and neighbours look on.",
      "The picture of 1879 is set right there in the village. Anker paints the sport of the village as a public event, between school, farmyard and house."
    ],
    "fact": "Oil on canvas, 1879. Private collection."
  },
  "kinderfrueh": {
    "text": [
      "Four children sit and stand around a small table. One pours, the others eat and drink; a toddler looks over the back of a chair.",
      "The picture of 1879 is a quiet meal among children, with no adult in the foreground. Anker trusts them with everyday life on their own."
    ],
    "fact": "Oil on canvas, 1879. Private collection."
  },
  "marie80": {
    "text": [
      "In the round of a drawing Marie appears in profile, her hair braided, her gaze calm and clear.",
      "The sheet of 1880 shows the daughter, now about eight years old, in a tightly closed circle – an intimate portrait, not made for the Salon."
    ],
    "fact": "Drawing, 1880. Private collection."
  },
  "maedchenkatze": {
    "text": [
      "A girl in a white dress holds a light-coloured cat in her arm. Both look out of the picture; the light lies softly on face and fur.",
      "The portrait of 1881 belongs to Anker’s tender pictures of children and animals: closeness without posing, a quiet dialogue."
    ],
    "fact": "Oil on canvas, 1881. Private collection."
  },
  "schwester83": {
    "text": [
      "Two girls stand by a tiled stove. One holds a doll, the other leans against her; behind them the room is warm and close.",
      "The picture of 1883 shows sisters as a pair, not as a cute group. Anker lets the stove, the wood and the clothes speak with precision."
    ],
    "fact": "Oil on canvas, 1883. Private collection."
  },
  "rotkaeppchen": {
    "text": [
      "A girl with a red cap stands in the wood, bread under one arm, a jug under the other. Behind her the landscape opens.",
      "The picture of 1883 tells the fairy tale without showing the wolf. Anker stays with the child on the path."
    ],
    "fact": "Oil on canvas, 1883. Private collection."
  },
  "gotthelfleserin": {
    "text": [
      "A young woman sits barefoot on a chair and reads a book. Behind her are a bed and a wooden wall; the dress is plainly striped.",
      "The picture of 1884 shows a reader of Jeremias Gotthelf. Anker’s later Gotthelf illustrations belong to the 1890s; here the subject is first of all reading itself."
    ],
    "fact": "Oil on canvas, 1884. Private collection."
  },
  "mariette": {
    "text": [
      "A girl in a striped apron stands with a basket full of strawberries. Her gaze is open, the dress firmly tied, the background a dark green.",
      "The picture of 1884 bears the French title “Mariette aux fraises”. Anker gives some portraits of children a name, as if they were encounters, not types."
    ],
    "fact": "Oil on canvas, 1884. Private collection."
  },
  "roterweste": {
    "text": [
      "A boy in a white shirt and a red waistcoat looks to the left, his hair golden against a dark ground, his mouth slightly open.",
      "The portrait of 1885 shows Anker’s assured, spare portrait language of the 1880s: little accessory, much attention to the face."
    ],
    "fact": "Oil on canvas, 1885. Private collection."
  },
  "kartoffel": {
    "text": [
      "A girl in a dark dress sits at a table and peels potatoes. In front of her stand a bowl and a dish; her gaze is lowered and occupied.",
      "The picture of work from 1886 belongs to the quiet kitchen scenes. Anker gives everyday labour the same seriousness as a portrait."
    ],
    "fact": "Oil on canvas, 1886. Private collection."
  },
  "fleissig": {
    "text": [
      "A girl in a blue dress and a striped apron writes with a stylus on a slate and at the same time holds an exercise book open.",
      "The picture of 1886 is called “Diligent” – or in French “Appliquée”. Learning appears here as quiet, matter-of-fact work."
    ],
    "fact": "Oil on canvas, 1886. Private collection."
  },
  "cecile86": {
    "text": [
      "In blue on a coloured ground, a girl reads an open book, her head resting on her hand. The sheet bears the date “28 Sept. 86”.",
      "This is Cécile again, now about nine years old. The watercolour drawing shows how lightly Anker can record a whole bearing even without oil paint."
    ],
    "fact": "Watercolour, 28 September 1886. Private collection."
  },
  "ersteschritte": {
    "text": [
      "An older child holds a smaller one who is attempting the first steps. One goes barefoot, the smaller wears shoes; behind them stands a tiled stove.",
      "The picture of 1888 closes this first part: everyday life in a living room, recorded shortly before Anker, in the 1890s, takes up large school and village pictures once more."
    ],
    "fact": "Oil on canvas, 1888. Private collection."
  },
  "strickend": {
    "text": [
      "A girl sits and knits; beside her stands a cradle with a small child. The room is plain, the light lies warmly on wood and cloth.",
      "The picture of 1885 already belongs to the gallery. It shows the same quiet attention with which Anker records the everyday life of the Seeland."
    ],
    "fact": "Oil on canvas, 1885. Private collection."
  }
});
})();
