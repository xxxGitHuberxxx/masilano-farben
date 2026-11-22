// v7.0 English content for Hokusai’s life journey, Part 1.
// Extends window.EN; does not rewrite en-content.js or the Monet/Van Gogh files.
(function () {
  var EN = window.EN = window.EN || {};
  var museums = {
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Los Angeles County Museum of Art": "Los Angeles County Museum of Art",
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Minneapolis Institute of Art": "Minneapolis Institute of Art",
  "Musée Guimet, Paris (Sammlung Camondo)": "Musée Guimet, Paris (Camondo Collection)",
  "Art Gallery of South Australia, Adelaide": "Art Gallery of South Australia, Adelaide"
};
  EN.museums = Object.assign(EN.museums || {}, museums);
  var works = {
  "shopfront": {
    "title": "In Front of a Shop",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "spinsilk": {
    "title": "Woman Spinning Silk",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sumowrest": {
    "title": "The Sumo Wrestlers Takaneyama Yoichiemon and Sendagawa Kichigorō",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sorinets": {
    "title": "Women Contemplating Fishermen with Nets",
    "museum": "Musée Guimet, Paris (Camondo Collection)"
  },
  "dyers": {
    "title": "Dyers at Work",
    "museum": "Cleveland Museum of Art"
  },
  "soritable": {
    "title": "Woman near a Painting Table",
    "museum": "Musée Guimet, Paris (Camondo Collection)"
  },
  "fujisuri": {
    "title": "View of Mount Fuji",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "sumidawalk": {
    "title": "Women and Children Walking Along the Sumida River",
    "museum": "Cleveland Museum of Art"
  },
  "azumatsukuda": {
    "title": "Tsukuda",
    "museum": "Los Angeles County Museum of Art"
  },
  "ueno": {
    "title": "Ueno",
    "museum": "Los Angeles County Museum of Art"
  },
  "mimeguri": {
    "title": "Mimeguri Shrine",
    "museum": "Los Angeles County Museum of Art"
  },
  "umeyashiki": {
    "title": "Umeyashiki",
    "museum": "Los Angeles County Museum of Art"
  },
  "ezoshi": {
    "title": "The Picture-Book Shop",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "yanagi": {
    "title": "Shower at the New Yanagi Bridge",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "teaceremony": {
    "title": "Utensils for the Tea Ceremony",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "cherryview": {
    "title": "Viewing the Cherry Blossoms",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "peonies": {
    "title": "Basket of Peonies",
    "museum": "Cleveland Museum of Art"
  },
  "manzai": {
    "title": "Manzai Performers",
    "museum": "Minneapolis Institute of Art"
  },
  "lostlove": {
    "title": "Lost-love Shell (Katashigai)",
    "museum": "Art Gallery of South Australia, Adelaide"
  },
  "grasses": {
    "title": "Myriad Grasses Shell (Chigusagai)",
    "museum": "Art Gallery of South Australia, Adelaide"
  },
  "cherryshell": {
    "title": "Cherry Shell (Sakura-gai)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hatsuuma": {
    "title": "Temple Visit at the Hatsuuma Festival",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "umasenbetsu": {
    "title": "A Parting Gift for the Horse",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "watakuri": {
    "title": "The Cotton-Bowing Machine (Watakuri)",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "fujinibon": {
    "title": "Nihonbashi in Edo",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "fujimitsui": {
    "title": "Mitsui Shop at Surugachō in Edo",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "honganji": {
    "title": "Honganji at Asakusa in Edo",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mannen": {
    "title": "Under the Mannen Bridge at Fukagawa",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tatekawa": {
    "title": "Tatekawa in Honjō",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "koishikawa": {
    "title": "Morning after the Snow at Koishikawa",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "onden": {
    "title": "The Waterwheel at Onden",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ryogoku": {
    "title": "Viewing the Sunset over Ryōgoku Bridge from the Onmaya Embankment",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hodogaya": {
    "title": "Hodogaya on the Tōkaidō",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gotenyama": {
    "title": "Fuji from Gotenyama at Shinagawa on the Tōkaidō",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ejiri": {
    "title": "Ejiri in Suruga Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "yoshida": {
    "title": "Yoshida on the Tōkaidō",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "kanaya": {
    "title": "Fuji Seen from Kanaya on the Tōkaidō",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "fujimi": {
    "title": "Fujimigahara in Owari Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "totomi": {
    "title": "In the Mountains of Tōtomi Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mishima": {
    "title": "Mishima Pass in Kai Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "inume": {
    "title": "Fuji from Inume Pass in Kai Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "misaka": {
    "title": "Reflection in Lake at Misaka in Kai Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hakone": {
    "title": "The Lake at Hakone in Sagami Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "enoshima": {
    "title": "Enoshima in Sagami Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "isawa": {
    "title": "Dawn at Isawa in Kai Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "minobu": {
    "title": "View from the Other Side of Fuji from the Minobu River",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "kajikazawa": {
    "title": "Kajikazawa in Kai Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "kazusa": {
    "title": "At Sea off Kazusa",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "umezawa": {
    "title": "Umezawa Manor in Sagami Province",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tagobay": {
    "title": "Tago Bay near Ejiri on the Tōkaidō",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "noboto": {
    "title": "Noboto Bay",
    "museum": "Metropolitan Museum of Art, New York"
  }
};
  EN.works = Object.assign(EN.works || {}, works);
  EN.paths = EN.paths || {};
  EN.paths.hokusai = {
  "title": "Hokusai’s Life Journey",
  "life": "1760–1849",
  "part": "Parts 1–2 · 1760–1849",
  "subtitle": "From Edo to the last pictures in Obuse",
  "intro": "Travel with Katsushika Hokusai through his whole life: from childhood in Edo and his apprenticeship with Katsukawa Shunshō, through new names, surimono and the “Thirty-six Views of Mount Fuji”, to the waterfalls and bridges of the provinces, to birds and flowers, to the “One Hundred Views of Mount Fuji”, to the poet pictures and finally to the late paintings in Obuse. Short stations, pictures to colour, and a voice from his postscript of 1834. Hokusai dies in 1849 in Edo.",
  "ending": [
    "In 1839 a fire in Edo destroys his house and many drawings. In the 1840s he stays several times in Obuse, with Takai Kōzan. In 1847 comes the Thunder God; in 1849, the tiger in the snow.",
    "Hokusai dies in Edo on the 18th day of the fourth month of the second year of Kaei – 10 May 1849. By the count of the time he is ninety years old.",
    "Fifteen years earlier, in 1834, he had written in the postscript to “One Hundred Views of Mount Fuji”: “From my sixth year I have had the habit of copying the shapes of things. From the age of fifty I have often published pictures, yet nothing I drew before the age of seventy is really worth keeping. At seventy-three I began to grasp a little the structure of birds, animals, insects and fish, and the way plants grow. So at eighty-six I mean to go further still; at ninety I will understand it more deeply; at a hundred I should reach something truly wondrous; and at a hundred and ten, every dot and every stroke should be alive. May gentlemen who live long see that these words of mine are not empty boasting.” The wish to reach a hundred and ten remains unfulfilled. The sheets and the late paintings remain."
  ],
  "epilogue": "Katsushika Hokusai dies on 10 May 1849 in Edo, at the age of ninety by the count of the time. The “Thirty-six Views”, the “One Hundred Views of Mount Fuji”, the waterfalls, the bridges and the late paintings from Obuse remain."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "edo": {
    "place": "Edo · Honjo and the apprenticeship",
    "when": "1760–c. 1793",
    "mapLabel": "Edo",
    "intro": [
      "Katsushika Hokusai is born in 1760 in Edo, in the Honjo district on the Sumida River. As a child he is called Tokitarō. He enters the family of the mirror-maker Nakajima Ise.",
      "Around 1778, at about eighteen, he joins the studio of Katsukawa Shunshō, a leading master of kabuki actor prints. There he receives the art name Shunrō.",
      "He draws actors, sumo wrestlers and scenes from everyday city life. Shunshō dies in 1792. Around 1794 Hokusai leaves the Katsukawa school."
    ]
  },
  "sori": {
    "place": "Edo · New names",
    "when": "1794–1799",
    "mapLabel": "Sōri",
    "intro": [
      "After leaving the school, Hokusai tries new paths. Around 1795 he works under the name Tawaraya Sōri, in the tradition of Tawaraya decorative painting. He designs surimono: privately commissioned prints, often for circles of kyōka, the “mad verse” poets.",
      "In 1798 he passes the name Sōri to a pupil and calls himself Hokusai – “North Studio”, after the North Star. A sheet of 1799 bears the signature “Sōri, changed to Hokusai” (Sōri aratame Hokusai ga).",
      "Already in these years Fuji appears on his sheets, still delicate and distant, long before the famous series."
    ]
  },
  "azuma": {
    "place": "Edo · The Sumida and the city",
    "when": "c. 1800–1802",
    "mapLabel": "Sumida",
    "intro": [
      "Around 1800 Hokusai draws views of Edo for books and sheets: the Sumida, Ueno, Tsukuda, shrines and gardens. The Eastern Capital – Tōto, another name for Edo – becomes a subject in its own right.",
      "The Rijksmuseum dates to 1802 the sheet of a picture-book shop in Edo, where just such books and prints are sold."
    ]
  },
  "earlyland": {
    "place": "Edo · Landscape and sketches",
    "when": "1806–1816",
    "mapLabel": "Yanagi",
    "intro": [
      "In the years that follow, landscape, everyday life and the surimono remain his field. In 1806 comes the shower at the new Yanagi Bridge.",
      "In 1814 the first volume of the “Hokusai Manga” appears in Nagoya, a long series of sketchbooks of people, animals, plants and everything that meets his eye.",
      "In 1816 he paints the manzai performers, a New Year dance pair. Around 1820, in his sixty-first year, he takes the name Iitsu."
    ]
  },
  "surimono": {
    "place": "Edo · Iitsu and the surimono",
    "when": "1821–1822",
    "mapLabel": "Iitsu",
    "intro": [
      "Under the name Iitsu, especially fine surimono appear around 1821 and 1822. One series is devoted to a “shell-matching game” with verses of the Genroku period, another to horses – 1822 is a Year of the Horse.",
      "These private sheets are often smaller and more carefully printed than the later impressions of the Fuji series. They show how precisely Hokusai can set everyday things."
    ]
  },
  "fujiedo": {
    "place": "Edo · 36 Views",
    "when": "c. 1830–1832",
    "mapLabel": "Fuji · Edo",
    "intro": [
      "Around 1830 the publisher Nishimuraya Yohachi (Eijudō) begins the series “Thirty-six Views of Mount Fuji” (Fugaku Sanjūrokkei). At first there are thirty-six sheets; later ten more are added – forty-six in all.",
      "Many sheets bear the signature “Iitsu, formerly Hokusai”. New and strong is the imported Prussian blue, bero-ai or Berlin blue, which gives sea, sky and shadow a new depth.",
      "In Edo he shows Fuji above Nihonbashi, behind the Mitsui shop, over the Mannen Bridge and from the Ryōgoku shore – the city and the distant mountain in a single picture."
    ]
  },
  "tokkaido": {
    "place": "The Tōkaidō",
    "when": "c. 1830–1832",
    "mapLabel": "Tōkaidō",
    "intro": [
      "Other sheets take the viewer along the Tōkaidō, the great coastal road from Edo to Kyoto: through Shinagawa and Hodogaya, on to Ejiri, Yoshida and Kanaya.",
      "Hokusai shows travellers, a sawmill in Tōtomi Province, and a cooper’s workshop in Owari, through whose barrel hoops Fuji appears as if in a window."
    ]
  },
  "provinces": {
    "place": "Kai, Sagami and the mountain",
    "when": "c. 1830–1832",
    "mapLabel": "Kai",
    "intro": [
      "West of Edo lie the provinces of Kai and Sagami. Hokusai shows passes, lakes and the mountain from new sides: Mishima Pass, the lake at Hakone, the reflection at Misaka.",
      "Enoshima lies on the sea in Sagami Province. From the Minobu River, Fuji is seen from the other side. Each sheet looks for a different standpoint."
    ]
  },
  "fujiicon": {
    "place": "Wave, Red Fuji, thunderstorm",
    "when": "c. 1830–1832",
    "mapLabel": "Kanagawa",
    "intro": [
      "A few sheets of the series have become known everywhere. “The Great Wave off Kanagawa” shows fishing boats under a plunging wave; very small, Fuji stands in the trough.",
      "“Fine Wind, Clear Morning” – Red Fuji – and “Thunderstorm Beneath the Summit” belong with them, as do the fisherman at Kajikazawa and the cranes at Umezawa.",
      "The series makes Hokusai, already around seventy, one of the best-known image-makers of his time – in Japan and, decades later, in Europe as well."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "shopfront": {
    "text": [
      "A small shop stands in the snow, a snow-laden pine branch hanging over the roof. People and two cats gather at the threshold.",
      "The painting dates from 1780, in the early years, when Hokusai was still a young draughtsman in Edo."
    ],
    "fact": "The work is in the Metropolitan Museum of Art, New York, under the title “In Front of a Shop”."
  },
  "spinsilk": {
    "text": [
      "A woman sits at a spinning device, silk running through her hands. A child in red cloth bends over a vessel; three swallows fly above them.",
      "The Metropolitan Museum dates the painting to 1790 – the years when Hokusai was working as Shunrō in the Katsukawa school."
    ],
    "fact": "“Woman Spinning Silk”, Metropolitan Museum of Art, New York, 1790."
  },
  "sumowrest": {
    "text": [
      "Two sumo wrestlers bow toward each other, firmly, with lowered eyes. Names and titles stand at the top of the sheet.",
      "The print shows Takaneyama Yoichiemon and Sendagawa Kichigorō and dates from about 1790 to 1793, still in the Shunrō years."
    ],
    "fact": "Colour woodcut, Metropolitan Museum of Art, New York, about 1790–1793."
  },
  "sorinets": {
    "text": [
      "Women sit on red mats in an open room and look out at fishermen with nets in the water.",
      "The surimono is signed “Sōri ga” – from the years when Hokusai used the name Tawaraya Sōri, about 1794 to 1798."
    ],
    "fact": "Isaac de Camondo Collection, bequeathed in 1911, inventory EO 1833. Musée Guimet, Paris."
  },
  "dyers": {
    "text": [
      "In a long, narrow scene, lengths of cloth hang out to dry. The dyers move among them; the colours are still pale and restrained.",
      "The Cleveland Museum of Art dates the sheet to 1795, in the Sōri years."
    ],
    "fact": "“Dyers at Work”, Cleveland Museum of Art, 1795."
  },
  "soritable": {
    "text": [
      "A woman stands at a painting table, brush and paper ready. Poems run along the edge of the sheet.",
      "It is signed “Sōri aratame Hokusai ga” – “Sōri, changed to Hokusai”. The year 1799 records the change of name."
    ],
    "fact": "Privately issued surimono with kyōka verses, Camondo Collection, Musée Guimet, Paris, 1799."
  },
  "fujisuri": {
    "text": [
      "Fuji stands quietly above a light mist, with poems beside it. The sheet is small and delicate – an early surimono, long before the Thirty-six Views.",
      "The Rijksmuseum dates the view to 1797, still in the years of the name Sōri."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-1548, 1797."
  },
  "sumidawalk": {
    "text": [
      "Women and children walk along the bank of the Sumida. The river is wide; the day seems quiet.",
      "The Cleveland Museum of Art dates the sheet to 1800 – the years when Hokusai was showing Edo in books and single prints."
    ],
    "fact": "“Women and Children Walking Along the Sumida River”, Cleveland Museum of Art, 1800."
  },
  "azumatsukuda": {
    "text": [
      "Boats lie off Tsukuda, an island at the mouth of the Sumida. In the background Fuji stands clear and small.",
      "The Los Angeles County Museum of Art places the sheet around 1802, in a series of famous views of the Eastern Capital."
    ],
    "fact": "Colour woodcut, LACMA, about 1802, Joan Elizabeth Tanney Bequest."
  },
  "ueno": {
    "text": [
      "At Ueno a red temple gate stands by the water, and beyond it the wide sheet of Shinobazu Pond.",
      "This sheet too belongs to the views of the Eastern Capital, about 1802, at LACMA."
    ],
    "fact": "Colour woodcut, Los Angeles County Museum of Art, about 1802."
  },
  "mimeguri": {
    "text": [
      "At the Mimeguri shrine a quiet courtyard lies under the trees, and Fuji appears beyond the grounds.",
      "Mimeguri stands on the Sumida. The sheet dates from about 1802 and is now at LACMA."
    ],
    "fact": "Colour woodcut, Los Angeles County Museum of Art, about 1802."
  },
  "umeyashiki": {
    "text": [
      "Rain falls in slanting lines across the plum garden of Umeyashiki. People hurry under trees and umbrellas.",
      "Umeyashiki lay in Mukōjima, east of the Sumida, and was known for its plum blossom. The sheet: about 1802, LACMA."
    ],
    "fact": "Colour woodcut, Los Angeles County Museum of Art, about 1802."
  },
  "ezoshi": {
    "text": [
      "Inside a picture-book shop, stacks of books and prints lie ready. Customers bend over the goods; advertising signs stand at the door.",
      "The Rijksmuseum dates the sheet to 1802 and calls it the shop of a picture-book dealer – the very world in which Hokusai’s books were sold."
    ],
    "fact": "Rijksmuseum, Amsterdam, RP-P-2015-26-1896, 1802."
  },
  "yanagi": {
    "text": [
      "A sudden shower hits the new Yanagi Bridge. People under large umbrellas bend into the rain; the colours stay clear.",
      "The Metropolitan Museum dates the colour woodcut to 1806."
    ],
    "fact": "“Shower at the New Yanagi Bridge”, Metropolitan Museum of Art, New York, 1806."
  },
  "teaceremony": {
    "text": [
      "A bowl, a caddy and a cloth lie quietly on the sheet – only the utensils of the tea ceremony, and verses. Nothing distracts.",
      "The Rijksmuseum places the surimono between 1794 and 1804, in the years of private commissions."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-975, about 1794–1804."
  },
  "cherryview": {
    "text": [
      "A party looks for a place under blossoming cherry trees. Verses stand below; above is the landscape by the water.",
      "The Rijksmuseum dates the surimono to the years around 1810 to 1820."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-1586, about 1810–1820."
  },
  "peonies": {
    "text": [
      "A basket of peonies fills the right side; characters stand on the left. The blossoms are heavy and clearly placed.",
      "The Cleveland Museum of Art dates the surimono to 1810 or 1814. It marks an event in the life of the actor Ichikawa Danjūrō VII, whose emblem was the peony."
    ],
    "fact": "“Basket of Peonies”, Cleveland Museum of Art, 1810 or 1814."
  },
  "manzai": {
    "text": [
      "Two manzai performers dance one above the other, one with a fan, the other lifting a foot. The ground stays empty and light.",
      "Manzai is a traditional New Year performance for two. The Minneapolis Institute of Art dates the painting to 1816."
    ],
    "fact": "“Manzai Performers”, Minneapolis Institute of Art, 1816."
  },
  "lostlove": {
    "text": [
      "A red fish lies in a white dish, with grasses and a fan beside it. The sheet belongs to a “shell-matching game” with verses of the Genroku period.",
      "The series is called Genroku kasen kai-awase. This sheet, the lost-love shell (Katashigai), is dated 1821 and belongs to the Art Gallery of South Australia."
    ],
    "fact": "Surimono, Art Gallery of South Australia, Adelaide, 1821."
  },
  "grasses": {
    "text": [
      "An open boat, an orange-red fish, delicate grasses. This too is a “shell” from the same 1821 series: Chigusagai, the myriad-grasses shell.",
      "Like the lost-love sheet, it belongs to the Art Gallery of South Australia."
    ],
    "fact": "Surimono from “Genroku kasen kai-awase”, Art Gallery of South Australia, 1821."
  },
  "cherryshell": {
    "text": [
      "Travellers and porters move through a wide landscape, with verses above. The sheet is called Sakura-gai, the cherry shell.",
      "It belongs to the same shell series and was probably made in 1821. This impression is in the Metropolitan Museum."
    ],
    "fact": "Surimono, Metropolitan Museum of Art, New York, probably 1821."
  },
  "hatsuuma": {
    "text": [
      "A woman in festive dress sits beside a decorated horse. Hatsuuma is the first horse festival in the second month, often linked with a temple visit.",
      "1822 is a Year of the Horse. The sheet belongs to the series “Umazukushi”, a set on horses, and is in the Rijksmuseum."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1958-284, 1822."
  },
  "umasenbetsu": {
    "text": [
      "Lacquer boxes, a folded letter, a red fan: a parting gift, arranged finely and quietly on the sheet.",
      "This too is a surimono from the horse series “Umazukushi” of 1822, in the Rijksmuseum."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1954-562, 1822."
  },
  "watakuri": {
    "text": [
      "A machine for loosening cotton stands beside saddle gear. Everyday work and the horse meet on a festive sheet.",
      "“Watakuri uma” belongs to the same “Umazukushi” series of 1822 in the Rijksmuseum."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1958-296, 1822."
  },
  "fujinibon": {
    "text": [
      "Nihonbashi is the bridge from which the roads of Edo are measured. Between the storehouses the canal opens; far off stands Fuji.",
      "Hokusai places the busy city in the foreground and the mountain as a quiet point on the horizon."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "fujimitsui": {
    "text": [
      "Above the roofs of the Mitsui shop in Surugachō a long kite climbs into the sky. Fuji stands exactly in the line of the string.",
      "The sheet joins Edo’s merchant quarter to the distant mountain – everyday life and Fuji in a single line."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "honganji": {
    "text": [
      "From the roof of Honganji at Asakusa the eye travels across Edo to Fuji. Workmen set tiles; the temple fills the foreground.",
      "The great temple at Asakusa was one of the highest viewpoints in the city."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "mannen": {
    "text": [
      "Under the arch of the Mannen Bridge at Fukagawa boats glide past, and Fuji appears in the circle of the arch.",
      "Hokusai frames the mountain through the bridge itself – a picture within a picture."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "tatekawa": {
    "text": [
      "In the lumberyard at Tatekawa in Honjō, beams and boards are stacked high. Between the piles Fuji comes into view.",
      "Honjō, Hokusai’s own district in eastern Edo, was a place of timber merchants and canals."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "koishikawa": {
    "text": [
      "After the snow, Koishikawa lies quiet. A pavilion, bare trees, and Fuji white above the city.",
      "The title is “Morning after the Snow at Koishikawa” – yuki no ashita, the morning once the snow has fallen."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "onden": {
    "text": [
      "A great waterwheel turns at Onden; people work by the water, and Fuji stands beyond the fields.",
      "Onden lay in western Edo, a district of mills and fields."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "ryogoku": {
    "text": [
      "From the Onmaya embankment a full boat crosses the Sumida; Ryōgoku Bridge lies across the evening light, and Fuji is a small shadow on the horizon.",
      "In Japanese the sheet is called “Onmayagashi yori Ryōgokubashi sekiyō o miru” – viewing the sunset over Ryōgoku Bridge from the Onmaya embankment."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "hodogaya": {
    "text": [
      "On the Tōkaidō near Hodogaya, travellers and horses pass under tall pines. Fuji appears between the trunks.",
      "Hodogaya was one of the stations on the Tōkaidō, the great road from Edo to Kyoto."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "gotenyama": {
    "text": [
      "On Gotenyama at Shinagawa the cherries are in bloom; below lies the bay, and in the distance Fuji.",
      "Shinagawa was the first Tōkaidō station just outside Edo, a place for outings and farewells."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "ejiri": {
    "text": [
      "A sudden wind at Ejiri tears the travellers’ cloths and papers away. Sheets fly; Fuji stays still.",
      "Ejiri lay in Suruga Province, near the coast, on the Tōkaidō."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "yoshida": {
    "text": [
      "In an inn at the Yoshida station, travellers sit; through the open wall Fuji appears like a sign above the road.",
      "Yoshida lay on the Tōkaidō at the foot of the mountain, a typical overnight station."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "kanaya": {
    "text": [
      "At Kanaya travellers cross the Ōi River. The water is high, loads rest on shoulders, and Fuji follows the bank.",
      "The Ōi ford on the Tōkaidō was notorious when the water rose – one of the hard stretches of the road."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "fujimi": {
    "text": [
      "A cooper works inside a huge barrel. Through the hoops Fuji appears, framed in a circle like a window.",
      "The place is called Fujimigahara, “plain with a view of Fuji”, in Owari Province."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "totomi": {
    "text": [
      "In the mountains of Tōtomi Province, men saw a huge plank. Fuji stands behind the props of the scaffold.",
      "The sheet shows the heavy work of the sawyers and the mountain as a quiet counter-shape."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "mishima": {
    "text": [
      "At Mishima Pass in Kai Province a great tree rises beside the road; travellers rest in the shade, and Fuji stands beyond.",
      "Kai is the inland province west of Edo, the country around the mountain."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "inume": {
    "text": [
      "From Inume Pass, Fuji lies open above a wide valley; the horses on the road look small.",
      "The pass lies in Kai Province and opens one of the series’ wide views."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "misaka": {
    "text": [
      "In the lake at Misaka, Fuji is reflected – but the reflection shows a different, snow-covered mountain, not exactly the same shape as the one above the water.",
      "Hokusai gives the reflection a form of its own. The sheet is one of the more unusual in the series."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "hakone": {
    "text": [
      "The lake at Hakone lies still between wooded hills, and Fuji rises on the far shore.",
      "Hakone in Sagami Province was one of the controlled passages of the Tōkaidō."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "enoshima": {
    "text": [
      "The island of Enoshima lies off the coast of Sagami Province, with a long sandbar and Fuji above the sea.",
      "Enoshima was a place of pilgrimage and outings, not far from the Tōkaidō."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "isawa": {
    "text": [
      "At dawn in Isawa, in Kai Province, roofs still lie in shadow, and Fuji takes colour in the first light.",
      "Isawa lies in the Kōfu basin, inland to the west of the mountain."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "minobu": {
    "text": [
      "From the Minobu River, Fuji is seen from the other side: the mountain’s back, not the familiar silhouette from Edo.",
      "The title says so itself: “Minobugawa ura Fuji” – Fuji from the reverse side, from the Minobu River."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "kajikazawa": {
    "text": [
      "A fisherman stands on a rock at Kajikazawa, his line taut over the waves, and Fuji rises behind him.",
      "Kajikazawa lies in Kai Province, on a swift river below the mountain."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "kazusa": {
    "text": [
      "A large sailing ship lies in open sea off Kazusa Province. Fuji is a small cone above the horizon.",
      "Kazusa lies east of Edo Bay, on the far side of the water."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "umezawa": {
    "text": [
      "Cranes fly and stand in the marshy land of Umezawa; Fuji is dark and close.",
      "Umezawa lies in Sagami Province. The sheet is one of the quietest in the series."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "tagobay": {
    "text": [
      "In Tago Bay near Ejiri a long boat lies on the shore, waves beat the sand, and Fuji stands open above the bay.",
      "The bay lies on the Tōkaidō in Suruga Province and is also known from poetry as a place with a view of Fuji."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "noboto": {
    "text": [
      "At low tide, torii gates and people stand in the shallow bay of Noboto. Fuji lies over a calm horizon.",
      "The sheet is one of the brightest in the series: much empty sand, little noise."
    ],
    "fact": "Colour woodcut from “Thirty-six Views of Mount Fuji”, published by Nishimuraya Yohachi, about 1830–1832. Metropolitan Museum of Art, New York."
  },
  "wave": {
    "text": [
      "A great wave rises off Kanagawa, the fishing boats lying aslant in its hollow. Very small, in the trough of the wave, stands Fuji.",
      "The sheet belongs to the series “Thirty-six Views of Mount Fuji” and dates from about 1830 to 1832, when Hokusai was already around seventy."
    ],
    "fact": "“The Great Wave off Kanagawa” (Kanagawa-oki nami ura), from the Fuji series, about 1830–1832."
  },
  "redfuji": {
    "text": [
      "Fuji glows red in the morning light, small clouds drifting across the slope. The title is “Fine Wind, Clear Morning” – Gaifū kaisei.",
      "The red Fuji can be seen on certain clear days in late summer and autumn. The sheet belongs to the same series, about 1830–1832."
    ],
    "fact": "“Red Fuji (Fine Wind, Clear Morning)”, from the 36 Views, about 1830–1832."
  },
  "thunder": {
    "text": [
      "Below, red lightning flashes across the slope; above, the summit remains still in the light. The sheet is called “Sanka hakuu” – a thunderstorm beneath the summit.",
      "Together with the Great Wave and Red Fuji, it is one of the best-known sheets in the series."
    ],
    "fact": "“Thunderstorm Beneath the Summit”, from the 36 Views, about 1830–1832."
  }
});
})();
