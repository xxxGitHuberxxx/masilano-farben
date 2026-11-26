// v8.3 English content for Ferdinand Hodler’s life journey, Part 1.
// Extends window.EN; does not rewrite earlier path files.
(function () {
  var EN = window.EN = window.EN || {};
  var museums = {
  "Sammlung nicht ermittelt": "Collection not established",
  "Musée d’art et d’histoire, Freiburg": "Musée d’art et d’histoire, Fribourg",
  "Österreichische Galerie Belvedere, Wien": "Austrian Gallery Belvedere, Vienna"
};
  EN.museums = Object.assign(EN.museums || {}, museums);
  var works = {
  "hschadau": {
    "title": "Schadau Castle with the Church of Scherzlingen and the Blümlisalp",
    "museum": "Collection not established"
  },
  "hhilter": {
    "title": "Chalet in Hilterfingen",
    "museum": "Collection not established"
  },
  "hbergbach72": {
    "title": "Mountain Stream in the Bernese Oberland",
    "museum": "Collection not established"
  },
  "hwaldin": {
    "title": "Woodland Interior (Le Nant de Frontenex)",
    "museum": "Collection not established"
  },
  "hstudent": {
    "title": "The Student (Self-Portrait)",
    "museum": "Collection not established"
  },
  "hschreiner": {
    "title": "The Carpenter",
    "museum": "Kunsthaus Zürich"
  },
  "hinterlaken": {
    "title": "A Morning near Interlaken",
    "museum": "Collection not established"
  },
  "hleschaud": {
    "title": "Portrait of Caroline Leschaud",
    "museum": "Kunsthaus Zürich"
  },
  "hself78": {
    "title": "Self-Portrait",
    "museum": "Collection not established"
  },
  "hmanzanares": {
    "title": "On the Banks of the Manzanares",
    "museum": "Collection not established"
  },
  "hmadridl": {
    "title": "Landscape near Madrid",
    "museum": "Collection not established"
  },
  "holiven": {
    "title": "Olive Trees in Spain",
    "museum": "Collection not established"
  },
  "hspanien": {
    "title": "Spanish Landscape",
    "museum": "Collection not established"
  },
  "huhrmacher": {
    "title": "Watchmaker’s Workshop in Madrid",
    "museum": "Collection not established"
  },
  "hjonction": {
    "title": "Landscape at the Jonction near Geneva",
    "museum": "Von der Heydt-Museum, Wuppertal"
  },
  "harvekinder": {
    "title": "Children Fishing on the Banks of the Arve",
    "museum": "Collection not established"
  },
  "hpfarrer": {
    "title": "The Pastor",
    "museum": "Collection not established"
  },
  "hself79": {
    "title": "Self-Portrait with a Standing Collar",
    "museum": "Collection not established"
  },
  "haarekanal": {
    "title": "The Aar Canal near Thun",
    "museum": "Collection not established"
  },
  "hthun82": {
    "title": "Lake Thun with the Blüemlisalp and the Niesen",
    "museum": "Collection not established"
  },
  "handacht": {
    "title": "Devotion",
    "museum": "Collection not established"
  },
  "hschuster82": {
    "title": "The Shoemaker at the Window",
    "museum": "Collection not established"
  },
  "hnetz": {
    "title": "The Net Mender",
    "museum": "Collection not established"
  },
  "hstock83": {
    "title": "Stockhorn Landscape",
    "museum": "Collection not established"
  },
  "hduchosal": {
    "title": "Portrait of Louise-Delphine Duchosal",
    "museum": "Kunsthaus Zürich"
  },
  "hbuchen": {
    "title": "The Beech Wood",
    "museum": "Collection not established"
  },
  "hnaehkamin": {
    "title": "Seamstress by the Fireplace",
    "museum": "Kunsthaus Zürich"
  },
  "hschuster87": {
    "title": "The Shoemaker",
    "museum": "Collection not established"
  },
  "hweigle": {
    "title": "Portrait of Hélène Weiglé",
    "museum": "Städel Museum, Frankfurt"
  },
  "haugustine": {
    "title": "Portrait of Augustine Dupin",
    "museum": "Collection not established"
  },
  "hkastanien": {
    "title": "The Chestnut Trees",
    "museum": "Collection not established"
  },
  "hkindtisch": {
    "title": "Child at the Table",
    "museum": "Collection not established"
  },
  "hjungf": {
    "title": "Portrait of a Young Woman",
    "museum": "Collection not established"
  },
  "honex": {
    "title": "The Road at Onex",
    "museum": "Collection not established"
  },
  "hevordes": {
    "title": "The Road to Evordes",
    "museum": "Collection not established"
  },
  "haue": {
    "title": "The Golden Meadow",
    "museum": "Collection not established"
  },
  "hsaleve90": {
    "title": "At the Foot of the Salève",
    "museum": "Collection not established"
  },
  "hfenster": {
    "title": "Girl at the Window",
    "museum": "Collection not established"
  },
  "hself91": {
    "title": "Paris Self-Portrait",
    "museum": "Collection not established"
  },
  "hsaleve91": {
    "title": "The Salève in Autumn",
    "museum": "Collection not established"
  },
  "harbeitslos": {
    "title": "Unemployed",
    "museum": "Collection not established"
  },
  "hlebensmued": {
    "title": "Tired of Life",
    "museum": "Collection not established"
  },
  "hmadame": {
    "title": "Portrait of Madame de R.",
    "museum": "Collection not established"
  },
  "hberthe": {
    "title": "Portrait of Berthe Jacques",
    "museum": "Collection not established"
  },
  "hhellebar": {
    "title": "The Halberdier",
    "museum": "Dallas Museum of Art"
  },
  "hbiberist": {
    "title": "Chestnut Avenue near Biberist",
    "museum": "Collection not established"
  },
  "hbluete99": {
    "title": "Blossoming Tree",
    "museum": "Musée d’art et d’histoire, Fribourg"
  },
  "hergriffen": {
    "title": "Profound Emotion",
    "museum": "Austrian Gallery Belvedere, Vienna"
  },
  "habendruhe": {
    "title": "Evening Rest",
    "museum": "Kunsthaus Zürich"
  }
};
  EN.works = Object.assign(EN.works || {}, works);
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
  "hodlerbern": {
    "place": "Bern and Thun · Childhood, loss, apprenticeship",
    "when": "1853–1872",
    "mapLabel": "Bern",
    "intro": [
      "Ferdinand Hodler is born on 14 March 1853 in Bern, the eldest of six children of the carpenter Johannes Hodler and Margareta Neukomm. The family is poor; in 1860 the father dies of tuberculosis. In 1861 the mother marries the decorative painter Gottlieb Schüpbach.",
      "In 1867 the mother also dies of tuberculosis. In 1868 Hodler begins an apprenticeship in Thun with the veduta painter Ferdinand Sommer. He learns to paint views of the Oberland from models, sold to tourists. In 1871 and 1872 his own pictures of the country around Lake Thun appear."
    ]
  },
  "hodlergenf": {
    "place": "Geneva · Barthélemy Menn and the Prix Calame",
    "when": "1872–1877",
    "mapLabel": "Geneva",
    "intro": [
      "In 1872 Hodler settles in Geneva and copies works by Alexandre Calame and François Diday in the Musée Rath. Barthélemy Menn, a pupil of Ingres and a teacher at the École de dessin, takes him on as a free student. The training lasts until 1877.",
      "Menn frees him from the merely picturesque souvenir and bases landscape on drawing, measure and observation. In 1874 Hodler wins first prize in the Concours Calame with the “Woodland Interior” (Le Nant de Frontenex)."
    ]
  },
  "hodlermadrid": {
    "place": "Madrid · The Prado and the Spanish light",
    "when": "1878–1879",
    "mapLabel": "Madrid",
    "intro": [
      "In 1878 Hodler travels to Madrid and studies the old masters at the Prado. The stay lasts until 1879. Besides copies and studies in the museum he paints the landscape outside the city: the Manzanares, olive trees, light, dry country.",
      "For a short time the palette grows lighter. Interiors such as the watchmaker’s workshop also appear. After that he returns to Geneva."
    ]
  },
  "hodlerreal": {
    "place": "Geneva and Thun · Realism by the water",
    "when": "1878–1880",
    "mapLabel": "Jonction",
    "intro": [
      "Before, during and after the journey to Spain, Geneva remains Hodler’s place. At the Jonction, where the Rhône and the Arve meet, and on the Arve, he paints banks, trees and children.",
      "At the same time he returns to the Aar near Thun. Portraits such as the pastor and the self-portrait with a standing collar show how firmly his realism sits in these years."
    ]
  },
  "hodlerhandwerk": {
    "place": "Geneva · Craft, devotion, the wood",
    "when": "1881–1885",
    "mapLabel": "1880s",
    "intro": [
      "In 1881 Hodler rents a studio at Grand-Rue 35 in Geneva. He collaborates on Edouard Castres’s Bourbaki Panorama in Lucerne. In 1883 he again wins the Concours Calame, for an Alpine landscape with the Stockhorn.",
      "He paints craftsmen, devotion and Lake Thun. In 1885 “The Beech Wood” appears: trunks in repeated order. Later Hodler calls this principle parallelism. In 1884 he meets Augustine Dupin."
    ]
  },
  "hodlerfamilie": {
    "place": "Geneva and Bern · Family, exhibition, marriage",
    "when": "1887–1889",
    "mapLabel": "1887",
    "intro": [
      "In 1887 the Kunstmuseum Bern holds Hodler’s first solo exhibition. In the summer he meets Bertha Stucki; in October Hector is born, the son of Hodler and Augustine Dupin. In 1889 he marries Bertha Stucki in La Chaux-de-Fonds; the marriage is dissolved in 1891.",
      "In the same years portraits appear – Augustine, Hélène Weiglé, a child at the table – and the chestnut trees, in which the form is already growing clearer."
    ]
  },
  "hodler1890": {
    "place": "Geneva and the Salève · Roads and “The Night”",
    "when": "1890",
    "mapLabel": "1890",
    "intro": [
      "Around 1890 Hodler paints straight, quiet roads at Onex and Evordes and the slopes of the Salève. The forms grow sparer, the repetition clearer.",
      "From the winter of 1889 to December 1890 his large painting “The Night” is made. We do not show it here: it contains nude figures. In 1891 it is excluded on moral grounds from the exhibition at the Musée Rath in Geneva. Hodler exhibits it at his own expense, then successfully in Paris at the Champ-de-Mars, where he receives a silver medal."
    ]
  },
  "hodlerdurchbruch": {
    "place": "Geneva and Paris · Breakthrough and Symbolism",
    "when": "1891–1894",
    "mapLabel": "1891",
    "intro": [
      "In 1891 “The Night” attracts notice in Paris; Puvis de Chavannes presides over the jury. Hodler paints a self-portrait in Paris and continues with landscapes at the Salève and on the Rhône. Alongside them realist figures such as “Unemployed” appear.",
      "In 1892 he shows “The Disappointed Souls” at the Salon de la Rose-Croix. “Tired of Life” belongs to the same circle: old men in a calm, repeated bearing. In 1894 he meets Berthe Jacques, whom he will marry in 1898."
    ]
  },
  "hodler1900": {
    "place": "Geneva · Recognition around 1900",
    "when": "1895–1901",
    "mapLabel": "1900",
    "intro": [
      "In 1895 Hodler paints “The Halberdier”. In 1896 his figures decorate the art pavilion of the Swiss National Exhibition in Geneva. In 1897 he wins the competition for the Marignano murals in the Landesmuseum Zürich; the project sets off a fierce dispute. In Fribourg he gives a lecture on the artist’s task.",
      "In 1900 he receives a gold medal at the World’s Fair in Paris and joins the Secessions in Vienna and Berlin. Blossoming trees, avenues and still figures in the meadow close these years."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "hschadau": {
    "text": [
      "Schadau Castle stands on Lake Thun, beside it the church of Scherzlingen, and in the background the Blümlisalp.",
      "The picture dates from 1871, after the apprenticeship with the veduta painter Ferdinand Sommer in Thun. There Hodler learned to record views of the Oberland."
    ],
    "fact": "1871. Collection not established."
  },
  "hhilter": {
    "text": [
      "A wooden house stands under trees, typical of the villages on Lake Thun.",
      "Hilterfingen lies not far from Thun. Sommer sold such views to tourists; after the apprenticeship Hodler continues to paint them, now under his own name."
    ],
    "fact": "1871. Collection not established."
  },
  "hbergbach72": {
    "text": [
      "A stream flows downhill between rocks and firs; the eye follows the water.",
      "The picture is dated 1872, the year of Hodler’s move to Geneva. The mountain streams of the Oberland remain an early motif."
    ],
    "fact": "1872. Collection not established."
  },
  "hwaldin": {
    "text": [
      "Light falls between the trunks onto the forest floor; a stream, the Nant de Frontenex near Geneva, runs through the picture.",
      "With this woodland interior Hodler wins first prize in the Concours Calame in 1874. It is his first publicly recognised success in Geneva."
    ],
    "fact": "c. 1874. Collection not established."
  },
  "hstudent": {
    "text": [
      "A young man in a dark coat sits or stands with a book, one hand raised as if in thought.",
      "Hodler is twenty-one. In Geneva Barthélemy Menn is training him; besides the lessons he looks for knowledge and a bearing of his own."
    ],
    "fact": "1874. Collection not established."
  },
  "hschreiner": {
    "text": [
      "A young carpenter in a cap and waistcoat holds a tool, his gaze firm and calm. At the top stands the date “juin 1875”.",
      "Hodler’s father Johannes was a carpenter and died in 1860. The portrait hangs in the Kunsthaus Zürich."
    ],
    "fact": "1875. Kunsthaus Zürich."
  },
  "hinterlaken": {
    "text": [
      "A quiet stretch of water in the morning, trees on the bank, the mountains of the Oberland in the haze.",
      "Even after the move to Geneva, Hodler returns to motifs from the Thun area. The picture dates from 1875, the year after the Prix Calame."
    ],
    "fact": "1875. Collection not established."
  },
  "hleschaud": {
    "text": [
      "A young woman in a dark dress with a white collar stands calmly, her hands lowered.",
      "The portrait dates from around 1877, towards the end of the training with Menn. It hangs in the Kunsthaus Zürich."
    ],
    "fact": "c. 1877. Kunsthaus Zürich."
  },
  "hself78": {
    "text": [
      "Hodler shows himself: dark hair, a serious gaze, the coat firmly buttoned.",
      "Around 1878 he travels to Madrid. The portrait belongs to these years, in which he settles on being a painter."
    ],
    "fact": "c. 1878. Collection not established."
  },
  "hmanzanares": {
    "text": [
      "On the riverbank near Madrid stand bare trees; the sky is wide and light.",
      "In 1878 Hodler travels to Madrid and studies at the Prado. Besides the masters in the museum he also paints the landscape outside the city."
    ],
    "fact": "1878–1879. Collection not established."
  },
  "hmadridl": {
    "text": [
      "A path leads through dry, light-filled ground; trees throw narrow shadows.",
      "In Spain Hodler’s palette becomes lighter for a short time. The light of the open air marks the pictures of this stay."
    ],
    "fact": "1878. Collection not established."
  },
  "holiven": {
    "text": [
      "Olive trees stand in the sun, their silver-green against the pale ground.",
      "Hodler pays attention to plants he does not know from Switzerland. The journey to Madrid widens his range of motifs."
    ],
    "fact": "1878. Collection not established."
  },
  "hspanien": {
    "text": [
      "Pale earth, scattered trees, a wide sky: a landscape without an Alpine backdrop.",
      "The picture dates from 1878. After months in Madrid Hodler returns to Geneva, with new impressions of light and colour."
    ],
    "fact": "1878. Collection not established."
  },
  "huhrmacher": {
    "text": [
      "In a bright workshop, watchmakers sit at their work; tools and cases lie on the tables.",
      "Besides landscapes, Hodler in Madrid also records a craft. The picture is dated 1879."
    ],
    "fact": "1879. Collection not established."
  },
  "hjonction": {
    "text": [
      "At the Jonction the Rhône and the Arve meet. Trees stand on the bank; the water divides into two colours.",
      "Before and after Madrid, Hodler paints this spot at the edge of Geneva again and again: close, observant, without pathos."
    ],
    "fact": "1878. Von der Heydt-Museum, Wuppertal."
  },
  "harvekinder": {
    "text": [
      "Children sit and stand on the riverbank and fish; behind them lie a meadow and trees.",
      "The Arve flows through Geneva. Hodler paints everyday life by the water, in the same years as the Spanish landscapes."
    ],
    "fact": "c. 1878. Collection not established."
  },
  "hpfarrer": {
    "text": [
      "An older clergyman in a dark garment stands calmly, a book in his hand, his hair grey.",
      "The portrait is dated 1879. In Geneva Hodler lives among modest clients and records their bearing."
    ],
    "fact": "1879. Collection not established."
  },
  "hself79": {
    "text": [
      "Hodler in a dark coat and a high white collar, his gaze directed clearly at us.",
      "In 1879 he returns from Madrid. The portrait shows a young painter sure of his purpose."
    ],
    "fact": "1879. Collection not established."
  },
  "haarekanal": {
    "text": [
      "The canal runs quietly through the land, trees line the bank, the sky is wide.",
      "Even after Geneva, the country around Thun remains a motif. The picture dates from 1879."
    ],
    "fact": "1879. Collection not established."
  },
  "hthun82": {
    "text": [
      "The lake lies still; above it the Blüemlisalp and the Niesen rise in clear lines.",
      "Hodler is already painting Lake Thun in the early 1880s, long before the later, famous, more strictly constructed versions."
    ],
    "fact": "1882. Collection not established."
  },
  "handacht": {
    "text": [
      "Several people stand and sit close together, their heads lowered, as if the group were praying or listening.",
      "The picture of 1882 shows no church, but a bearing. In these years devotion and seriousness become a theme of their own."
    ],
    "fact": "1882. Collection not established."
  },
  "hschuster82": {
    "text": [
      "A shoemaker sits at the window and works; the light falls from the side onto the table and the hands.",
      "Hodler paints craftsmen with the same attention as landscapes. The small picture is dated 1882."
    ],
    "fact": "1882. Collection not established."
  },
  "hnetz": {
    "text": [
      "A man sits outdoors and mends a net, his back slightly bent, wholly at his work.",
      "This picture of a simple, concentrated task dates from around 1883. Hodler remains true to the realism of the Menn years."
    ],
    "fact": "c. 1883. Collection not established."
  },
  "hstock83": {
    "text": [
      "The Stockhorn range lies across the sheet in fine lines, almost without a foreground.",
      "In 1883 Hodler again wins the Concours Calame, this time for an Alpine landscape with the Stockhorn. The mountains above Lake Thun occupy him all his life."
    ],
    "fact": "1883. Collection not established."
  },
  "hduchosal": {
    "text": [
      "A girl in a blue dress sits on a chair and holds a daffodil in her hand.",
      "The portrait of 1885 hangs in the Kunsthaus Zürich. In these years Hodler paints many calm portraits of young people in Geneva."
    ],
    "fact": "1885. Kunsthaus Zürich."
  },
  "hbuchen": {
    "text": [
      "Beech trunks stand in even rows; the light falls in bands between them.",
      "This wood dates from 1885: repetition and order become visible. Later Hodler calls this principle parallelism."
    ],
    "fact": "1885. Collection not established."
  },
  "hnaehkamin": {
    "text": [
      "A woman sits by the fireplace and sews. The room is plain; the light comes from the side.",
      "The picture dates from around 1885 and hangs in the Kunsthaus Zürich. Everyday life and craft remain Hodler’s ground, even as the style grows clearer."
    ],
    "fact": "c. 1885. Kunsthaus Zürich."
  },
  "hschuster87": {
    "text": [
      "A shoemaker sits in his workshop, surrounded by lasts, tools and leather, bent wholly over his work.",
      "The picture is dated 1887. In the same year the Kunstmuseum Bern holds Hodler’s first solo exhibition."
    ],
    "fact": "1887. Collection not established."
  },
  "hweigle": {
    "text": [
      "A young woman in a dark dress looks calmly out of the picture, her hands in her lap, a flower in her fingers.",
      "The portrait dates from 1888. Hodler lives in Geneva and paints clients and acquaintances with a clear, firmly held form."
    ],
    "fact": "1888. Städel Museum, Frankfurt."
  },
  "haugustine": {
    "text": [
      "Augustine Dupin looks at us firmly, in a dark dress, her hair drawn tightly back.",
      "Hodler meets her in 1884. In October 1887 their son Hector is born. Augustine remains his model and companion for a long time."
    ],
    "fact": "c. 1888. Collection not established."
  },
  "hkastanien": {
    "text": [
      "Two tall chestnuts stand against a light sky, the trunks clear, the crowns wide.",
      "The picture is dated 1889. Single trees become a main theme for Hodler: firm, repeated, almost like figures."
    ],
    "fact": "1889. Collection not established."
  },
  "hkindtisch": {
    "text": [
      "A small child in a red dress sits at the table in front of a cup and reaches for it.",
      "The picture dates from 1889, two years after Hector’s birth. Hodler records a child’s everyday life without sentiment."
    ],
    "fact": "1889. Collection not established."
  },
  "hjungf": {
    "text": [
      "A young woman in a dark dress sits in three-quarter profile, her gaze calm, the background plain.",
      "The portrait dates from around 1889, the year of Hodler’s marriage to Bertha Stucki in La Chaux-de-Fonds. The marriage is dissolved in 1891."
    ],
    "fact": "c. 1889. Collection not established."
  },
  "honex": {
    "text": [
      "A straight road leads away between trees, the sky is light, the path empty and still.",
      "Onex lies west of Geneva. Around 1890 Hodler clarifies such roads: few forms, a clear direction, a great calm."
    ],
    "fact": "c. 1890. Collection not established."
  },
  "hevordes": {
    "text": [
      "A sand-coloured path runs straight ahead between meadow and trees, the sky high and light.",
      "The road to Evordes is among Hodler’s best-known early landscapes. The repetition of the trees along the path already recalls parallelism."
    ],
    "fact": "c. 1890. Collection not established."
  },
  "haue": {
    "text": [
      "A wide, sunny meadow opens under trees; the light lies warm on the grass.",
      "The picture is dated 1890. In the same winter Hodler is working on his large Symbolist painting “The Night” – which we do not show here, because it contains nude figures."
    ],
    "fact": "1890. Collection not established."
  },
  "hsaleve90": {
    "text": [
      "Meadows and trees step back towards the Salève, the mountain south of Geneva, under a light sky.",
      "In these years Hodler often visits the country around the Salève. Light and colour on the slopes become an object of study for him."
    ],
    "fact": "1890. Collection not established."
  },
  "hfenster": {
    "text": [
      "A girl in a light dress leans over the windowsill, her hair falling freely, her gaze directed outside.",
      "The picture is dated 1890. Interior and landscape meet here in a calm, attentive bearing."
    ],
    "fact": "1890. Collection not established."
  },
  "hself91": {
    "text": [
      "Hodler shows himself with a full beard, his gaze firm, almost appraising, against a light ground.",
      "In 1891 he exhibits “The Night” in Paris at the Champ-de-Mars and receives a silver medal. The portrait belongs to this year of breakthrough."
    ],
    "fact": "1891. Collection not established."
  },
  "hsaleve91": {
    "text": [
      "The Salève lies in autumnal colours, the slope in yellow and violet, the sky clear.",
      "Around 1891 the palette grows stronger. Foreground and background appear equal; aerial perspective recedes."
    ],
    "fact": "c. 1891. Collection not established."
  },
  "harbeitslos": {
    "text": [
      "A man sits outdoors on the ground, his gaze lowered, his hands in his lap, his clothes worn.",
      "The picture of 1891 belongs to Hodler’s realist figures of these years: not a genre joke, but a calm, heavy presence."
    ],
    "fact": "1891. Collection not established."
  },
  "hlebensmued": {
    "text": [
      "Five older men sit side by side, wrapped in long garments, their heads lowered, their hands in their laps.",
      "After “The Night” come large Symbolist groups. In 1892 Hodler shows “The Disappointed Souls” at the Paris Salon de la Rose-Croix; “Tired of Life” belongs to the same circle."
    ],
    "fact": "1892. Collection not established."
  },
  "hmadame": {
    "text": [
      "A young woman looks at us frontally, her dark hair loose, her dress light, her expression alert.",
      "The portrait dates from 1893. In these years Hodler’s portraits grow larger and clearer in form."
    ],
    "fact": "1893. Collection not established."
  },
  "hberthe": {
    "text": [
      "Berthe Jacques in profile, her dark hair put up, her neck free, her gaze turned to the right.",
      "Hodler meets her in 1894. They marry in 1898. She remains his wife until his death and often sits for him."
    ],
    "fact": "1894. Collection not established."
  },
  "hhellebar": {
    "text": [
      "A warrior in red dress stands upright, the halberd in his hand, against a light ground.",
      "The picture of 1895 hangs in the Dallas Museum of Art. In these years Hodler also turns to the monumental history figure; in 1897 he wins the competition for the murals of the Retreat from Marignano in the Landesmuseum Zürich."
    ],
    "fact": "1895. Dallas Museum of Art."
  },
  "hbiberist": {
    "text": [
      "An avenue of chestnuts leads into the depth in soft autumn colours; the sky is light.",
      "Biberist lies in the canton of Solothurn. The picture of 1898 shows how Hodler builds avenues as a calm, repeated form."
    ],
    "fact": "1898. Collection not established."
  },
  "hbluete99": {
    "text": [
      "A tree stands in full blossom against a blue sky, a green meadow beneath it.",
      "The picture of 1899 belongs to the Musée d’art et d’histoire in Fribourg. Around the turn of the century, blossoming trees become a quiet motif of their own."
    ],
    "fact": "1899. Musée d’art et d’histoire, Fribourg."
  },
  "hergriffen": {
    "text": [
      "A young woman in a long blue dress stands in a flower meadow and holds her hands to her breast, her gaze lowered.",
      "The picture of 1900 hangs in the Belvedere in Vienna. Bearing and landscape belong together: a still, held movement."
    ],
    "fact": "1900. Austrian Gallery Belvedere, Vienna."
  },
  "habendruhe": {
    "text": [
      "A girl in a light dress stands barefoot in a flower meadow, her hands raised in prayer, her gaze turned aside.",
      "The picture dates from around 1901 and hangs in the Kunsthaus Zürich. A calm figure in the landscape, before the large pictures of lakes and mountains follow."
    ],
    "fact": "c. 1901. Kunsthaus Zürich."
  }
});
})();
