// v8.8 English content for Utagawa Hiroshige’s life journey, Part 1 (1797–mid-1830s).
// Extends window.EN; does not rewrite earlier path files.
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "National Diet Library, Tokio": "National Diet Library, Tokyo"
});
  EN.works = Object.assign(EN.works || {}, {
  "hgtakanawa": {
    "title": "Full Moon over Takanawa",
    "museum": "Cleveland Museum of Art"
  },
  "hggotenyama": {
    "title": "Evening Cherry Blossoms at Gotenyama",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgsusaki": {
    "title": "New Year’s Sunrise after Snow at Susaki",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgryogoku": {
    "title": "Twilight Moon at Ryōgoku Bridge",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgmasaki": {
    "title": "Late Spring at Masaki",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgsumida": {
    "title": "Cherry Trees in Leaf along the Sumida",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtsukuda": {
    "title": "First Cuckoo of the Year at Tsukudajima",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgzojoji": {
    "title": "Zōjō-ji at Shiba in Snow",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgatago": {
    "title": "On Atago Hill in Shiba",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgkanda": {
    "title": "Kanda Myōjin Shrine",
    "museum": "National Diet Library, Tokyo"
  },
  "hgmassaki": {
    "title": "Clearing Weather after Snow at Massaki",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgmeguro": {
    "title": "The Gionin Slope at Meguro",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgshibaura": {
    "title": "Shell Gathering at Shibaura",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgshinobazu": {
    "title": "Shinobazu Pond",
    "museum": "National Diet Library, Tokyo"
  },
  "hgnibrain": {
    "title": "Sudden Rain at Nihonbashi",
    "museum": "National Diet Library, Tokyo"
  },
  "hgtk00": {
    "title": "Nihonbashi, Morning View",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk01": {
    "title": "Shinagawa, Daybreak",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk02": {
    "title": "Kawasaki, Ferry across the Rokugō",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk03": {
    "title": "Kanagawa, View from the Heights",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk04": {
    "title": "Hodogaya, Shinmachi Bridge",
    "museum": "Tokyo Metropolitan Library"
  },
  "hgtk06": {
    "title": "Fujisawa, Yugyō-ji Temple",
    "museum": "National Diet Library, Tokyo"
  },
  "hgtk09": {
    "title": "Odawara, Sakawa River",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk10": {
    "title": "Hakone, View of the Lake",
    "museum": "National Diet Library, Tokyo"
  },
  "hgtk11": {
    "title": "Mishima, Morning Mist",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk12": {
    "title": "Numazu, Dusk",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk13": {
    "title": "Hara, Fuji in the Morning",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk14": {
    "title": "Yoshiwara, Fuji on the Left",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk15": {
    "title": "Kanbara, Evening Snow",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk17": {
    "title": "Okitsu, the Okitsu River",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk18": {
    "title": "Ejiri, Distant View of the Miho Shore",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk19": {
    "title": "Fuchū, Fording the Abe River",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk23": {
    "title": "Shimada, Near Bank of the Ōi River",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk24": {
    "title": "Kanaya, Far Bank of the Ōi River",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk30": {
    "title": "Maisaka, View of Imagire",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk25": {
    "title": "Nissaka, Sayo no Nakayama",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk37": {
    "title": "Fujikawa, at the Border Barrier",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk40": {
    "title": "Narumi, the Famous Arimatsu Shibori",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk42": {
    "title": "Kuwana, the Seven-Ri Ferry",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk43": {
    "title": "Yokkaichi, the Mie River",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk45": {
    "title": "Shōno, Sudden Shower",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk46": {
    "title": "Kameyama, Clearing Weather after Snow",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk47": {
    "title": "Seki, Early Departure from the Honjin",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk48": {
    "title": "Sakanoshita, Fudesute Peak",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk52": {
    "title": "Kusatsu, the Famous Teahouse",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "hgtk54": {
    "title": "Kyoto, the Sanjō Bridge",
    "museum": "National Diet Library, Tokyo"
  },
  "hgomi_mii": {
    "title": "Evening Bell at Mii-dera",
    "museum": "Cleveland Museum of Art"
  },
  "hgomi_kara": {
    "title": "Night Rain at Karasaki",
    "museum": "Cleveland Museum of Art"
  },
  "hgomi_katada": {
    "title": "Descending Geese at Katada",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hgomi_ishi": {
    "title": "Autumn Moon at Ishiyama",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hgomi_seta": {
    "title": "Sunset Glow at Seta",
    "museum": "Rijksmuseum, Amsterdam"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.hiroshige = {
  "title": "Utagawa Hiroshige’s Life Journey",
  "life": "1797–1858",
  "part": "Parts 1–2 · 1797–1858",
  "subtitle": "From Edo onto the Tōkaidō and the Kisokaidō, to the provinces and the Hundred Views of Edo",
  "intro": "Travel with Utagawa Hiroshige through his whole life: from childhood in the fire brigade of Yayosu in Edo, through the apprenticeship with Toyohiro, the early views of the eastern capital, the traditional account of the Tōkaidō journey of 1832 and the Hōeidō series of the 53 Stations, the Eight Views of Ōmi, the Kisokaidō from about 1835, the famous places of the Sixty-odd Provinces and the One Hundred Famous Views of Edo, to Hiroshige’s death in Edo on 12 October 1858. Short stations and woodcuts to colour.",
  "ending": [
    "On 12 October 1858 Utagawa Hiroshige dies in Edo, aged sixty-one. Tradition gives the cause of death as cholera; in that year an epidemic is running in the city. He is buried in the cemetery of the temple Tōgaku-ji in Asakusa. His pupil and adopted son Suzuki Shigenobu continues the name as Hiroshige II.",
    "What remain are the stations of the Tōkaidō and the Kisokaidō, the views of the provinces and the One Hundred Famous Views of Edo: a body of work that held rain, snow, moonlight and the streets of the eastern capital."
  ],
  "epilogue": "Utagawa Hiroshige dies in Edo on 12 October 1858. He is buried at the temple Tōgaku-ji in Asakusa. What remain are the 53 Stations of the Tōkaidō, the Kisokaidō, the famous places of the Sixty-odd Provinces and the One Hundred Famous Views of Edo."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "hiroshigeyayosu": {
    "place": "Edo · Childhood and the Fire Brigade",
    "when": "1797–1811",
    "mapLabel": "Edo",
    "intro": [
      "Utagawa Hiroshige is born as Andō Tokutarō, by the usual reckoning in 1797. The year is inferred from later notices: he dies in 1858 at the stated age of sixty-two. The Andō family belongs to the Yayosu (Yaesugashi) fire brigade, east of Edo Castle; his father Andō Genemon is a low-ranking samurai serving as jōbikeshi-dōshin, a fire warden.",
      "He later bears the names Jūemon and Tokubei. In 1809 both parents die; the boy inherits the fire-warden post. The city in which he grows up is the Eastern Capital – Edo.",
      "The views of Takanawa, Gotenyama, Susaki, Ryōgoku Bridge and Masaki are made only around 1831, in the series Tōto meisho. They belong all the same to this beginning: to the city whose streets, bridges and shores Hiroshige knows from childhood."
    ]
  },
  "hiroshigetoyohiro": {
    "place": "Edo · Training under Toyohiro",
    "when": "1811–c. 1830",
    "mapLabel": "Training",
    "intro": [
      "Around 1811 he first applies to Utagawa Toyokuni and then enters the studio of Utagawa Toyohiro. That the training took place under Toyohiro is already confirmed by Eisen in 1833, in Hiroshige’s lifetime. By the usual account, the artist name Hiroshige joins the teacher’s “hiro” to his own name Jūemon; the earliest firmly datable use of “Ichiyūsai Hiroshige” belongs rather around 1819 than in the year 1812 often cited.",
      "In the early 1820s he works on actor, beauty and warrior prints and on book illustration. When he resigns the fire-warden post is not uniformly recorded; the 1820s or 1832 are named.",
      "Firmly datable woodblock prints from these apprentice and early years rarely survive. The views of Edo that follow date from around 1831–1833; they stand here for the city in which the training and the first independent work take place."
    ]
  },
  "hiroshigetoto": {
    "place": "Edo · Tōto meisho",
    "when": "c. 1831–1832",
    "mapLabel": "Tōto",
    "intro": [
      "Around 1831–1832 the series Tōto meisho, Famous Places of the Eastern Capital, appears under the signature Ichiyūsai Hiroshige. It is regarded as his early breakthrough as a landscape artist.",
      "The sheets show parks, temples, shores and everyday life in Edo: Massaki after snow, the slope at Meguro, shell gathering at Shibaura, Shinobazu Pond at Ueno, and the sudden rain at Nihonbashi.",
      "Distances along the Tōkaidō are measured from Nihonbashi. With this sheet the series already stands on the threshold of the great road to Kyoto."
    ]
  },
  "hiroshige1832": {
    "place": "Tōkaidō · Departure from Nihonbashi",
    "when": "1832–1834",
    "mapLabel": "Departure",
    "intro": [
      "According to the traditional account, in 1832 Hiroshige takes part in an official procession that carries a gift from the shogun – horses – to Kyoto. Sketches from the road are said to have formed the basis of the later series; the exact course of the journey is not independently documented.",
      "From 1833 the series Tōkaidō gojūsan tsugi no uchi appears, published by Takenouchi Magohachi (Hōeidō), at times together with Senkakudō (Tsuruya Kiemon): the Fifty-three Stations of the Tōkaidō, 55 sheets including Nihonbashi and the Sanjō Bridge in Kyoto.",
      "The first sheets lead west from the centre of Edo: morning at Nihonbashi, daybreak at Shinagawa, the ferry at Kawasaki, Kanagawa, Hodogaya, and the temple of Yugyō-ji at Fujisawa."
    ]
  },
  "hiroshigehakone": {
    "place": "Hakone and Mount Fuji",
    "when": "c. 1833–1834",
    "mapLabel": "Hakone",
    "intro": [
      "From Odawara the Tōkaidō climbs into the mountains of Hakone, one of the most demanding passages on the road, and then opens onto the Suruga plain and Mount Fuji.",
      "The Hōeidō series shows the river crossing at Odawara, the lake at Hakone, morning mist at Mishima, dusk at Numazu, Fuji in the morning at Hara, and “on the left” at the station of Yoshiwara – the Tōkaidō station in Suruga, not the pleasure quarter in Edo.",
      "At Kanbara the snow lies in the evening. The sheet is among the best-known of the series. Whether Hiroshige himself saw the place in snow remains uncertain."
    ]
  },
  "hiroshigeriver": {
    "place": "Rivers and the Coast",
    "when": "c. 1833–1834",
    "mapLabel": "Rivers",
    "intro": [
      "West of Fuji the road meets rivers again and again, and the coast of Suruga and Tōtōmi. Many crossings are fords; fixed bridges are often lacking, and in flood the way can be broken.",
      "The series shows the Okitsu River, the distant view from Ejiri of the Miho shore, the fords of the Abe River at Fuchū, and above all the Ōi River: on the near bank at Shimada, on the far bank at Kanaya.",
      "At Maisaka the sea opens again, at the Imagire strait into Lake Hamana."
    ]
  },
  "hiroshigerain": {
    "place": "Rain, Wind and Further Stations",
    "when": "c. 1833–1834",
    "mapLabel": "Rain",
    "intro": [
      "Farther west, passes, borders, market towns and the shore of Ise Bay succeed one another. The Hōeidō series records not only the landscape, but also life along the road.",
      "After the pass at Nissaka come the barrier at Fujikawa, the shibori shops at Narumi, the great ferry at Kuwana, and the wind on the Mie River at Yokkaichi.",
      "At Shōno a sudden shower breaks over the travellers. The sheet is among the most famous of the whole series and already stands in the province of Ise, on the way to Kyoto."
    ]
  },
  "hiroshigekyoto": {
    "place": "Arrival in Kyoto",
    "when": "c. 1833–1834",
    "mapLabel": "Kyoto",
    "intro": [
      "The last stations lead over snow, an early departure and the rock at Sakanoshita, to Lake Biwa and to Kyoto, the western end of the Tōkaidō.",
      "At Kameyama, castle and sky clear after the snow. At Seki the retinue leaves the honjin early. At Sakanoshita stands Fudesute Peak, the “brush-abandoning peak” of tradition. At Kusatsu, near the lake, travellers rest in a famous house; here the Tōkaidō and the Kisokaidō meet again.",
      "The series ends on the Sanjō Bridge over the Kamo River in Kyoto. Together with Nihonbashi, this sheet frames the 55 prints."
    ]
  },
  "hiroshigeomi": {
    "place": "Ōmi hakkei and Fame in the 1830s",
    "when": "c. 1834–1835",
    "mapLabel": "Ōmi",
    "intro": [
      "Around 1834–1835 there follows the series Ōmi hakkei no uchi, the Eight Views of Ōmi Province on Lake Biwa, not far from Kyoto. The scheme of eight views is older and taken from China; Hiroshige transfers it to bell, rain, geese, moon and sunset glow on the lake.",
      "With the Tōkaidō series and the Ōmi views, by the mid-1830s Hiroshige is firmly established as a master of landscape. This path ends here, at the western end of the road and on the lake.",
      "The path continues. There follow the Kisokaidō, the Hundred Famous Views of Edo, and Hiroshige’s death in 1858. That story belongs to the next part."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "hgtakanawa": {
    "text": [
      "The full moon stands over Takanawa Bay; boats and the coast road lie quiet in the light. Takanawa is in the south of Edo, on the road that later becomes the Tōkaidō.",
      "The sheet belongs to the series Tōto meisho, Famous Places of the Eastern Capital, and dates from around 1831 – later than Hiroshige’s childhood. It shows the city in which he grows up."
    ],
    "fact": "c. 1831. Cleveland Museum of Art."
  },
  "hggotenyama": {
    "text": [
      "On Gotenyama the cherries bloom in the evening light; walkers stand under the trees and look out over the bay. The hill is near Shinagawa, at the gates of Edo.",
      "This sheet too, from the series Tōto meisho, dates from around 1831. It records one of the city’s favourite viewpoints, in the town where Hiroshige spends his youth."
    ],
    "fact": "c. 1831. Metropolitan Museum of Art, New York."
  },
  "hgsusaki": {
    "text": [
      "After the snow, the first sun of the year rises over Susaki; the shore lies white, the horizon bright. Susaki is a flat shore in the east of Edo.",
      "The Tōto meisho sheet dates from around 1831. It shows the New Year in the city whose fire-warden post the Andō family holds."
    ],
    "fact": "c. 1831. Metropolitan Museum of Art, New York."
  },
  "hgryogoku": {
    "text": [
      "At Ryōgoku Bridge over the Sumida the moon stands in the twilight; boats and the far bank grow dark. The bridge is one of the busiest places in Edo.",
      "The sheet belongs to the early landscape series Tōto meisho, around 1831. The Sumida runs through eastern Edo, not far from the quarters in which Hiroshige grows up."
    ],
    "fact": "c. 1831. Metropolitan Museum of Art, New York."
  },
  "hgmasaki": {
    "text": [
      "At Masaki, on the lower Sumida, late spring stands: trees in leaf, the water calm, the houses on the bank small under the sky.",
      "This Tōto meisho sheet dates from around 1831. It belongs to the early views of Edo with which Hiroshige becomes known as a landscape artist – and shows places in his home city."
    ],
    "fact": "c. 1831. Metropolitan Museum of Art, New York."
  },
  "hgsumida": {
    "text": [
      "Along the Sumida the cherry trees are already in leaf; the river is wide, the bank a place for walking.",
      "The Tōto meisho sheet dates from around 1831. Firmly datable woodblock prints from Hiroshige’s apprentice years rarely survive; the views of his home city stand here for the years after his training under Toyohiro."
    ],
    "fact": "c. 1831. Metropolitan Museum of Art, New York."
  },
  "hgtsukuda": {
    "text": [
      "On the island of Tsukudajima, in the mouth of the Sumida, lies a fishing settlement; the first cuckoo of the year belongs to the beginning of summer.",
      "The sheet is dated around 1831. In these years Hiroshige often signs as Ichiyūsai Hiroshige – the landscape style of the Eastern Capital becomes visible."
    ],
    "fact": "c. 1831. Metropolitan Museum of Art, New York."
  },
  "hgzojoji": {
    "text": [
      "The temple of Zōjō-ji at Shiba lies under snow; the gate, the roofs and the pines stand clear against the white. The temple is the Tokugawa family mortuary in Edo.",
      "The sheet belongs to the series Tōto meisho, around 1831–1832. It shows one of the great temples of the city in which Hiroshige works after his training."
    ],
    "fact": "c. 1831–1832. Metropolitan Museum of Art, New York."
  },
  "hgatago": {
    "text": [
      "From Atago Hill in Shiba the view opens over Edo; the steep climb and the outlook make the place a favourite destination in the city.",
      "The Tōto meisho sheet is dated around 1833, in the same years in which the Tōkaidō series begins to appear."
    ],
    "fact": "c. 1833. Metropolitan Museum of Art, New York."
  },
  "hgkanda": {
    "text": [
      "The shrine of Kanda Myōjin stands on a rise in the north of the inner city; stairs, gates and trees lead into the precinct.",
      "The Tōto meisho sheet comes from the National Diet Library in Tokyo. The series dates from around 1831–1832; the exact impression date of this sheet is not firmly established."
    ],
    "fact": "c. 1831–1832. National Diet Library, Tokyo."
  },
  "hgmassaki": {
    "text": [
      "At Massaki, on the Sumida, sky and bank clear after the snow; white still lies on the roofs, the water becomes visible again.",
      "With the series Tōto meisho, around 1831–1832, Hiroshige comes forward as a landscape artist. The sheets appear under the signature Ichiyūsai Hiroshige."
    ],
    "fact": "c. 1831–1832. Metropolitan Museum of Art, New York."
  },
  "hgmeguro": {
    "text": [
      "The Gionin slope at Meguro leads into the depth between trees and houses; Meguro lies on the south-western edge of Edo.",
      "The sheet belongs to the series of famous places of the Eastern Capital. In these years Hiroshige’s work visibly shifts from actor and figure prints toward landscape."
    ],
    "fact": "c. 1831–1832. Metropolitan Museum of Art, New York."
  },
  "hgshibaura": {
    "text": [
      "At low tide people gather shells at Shibaura; the shallow bay before Edo lies wide, the figures small in the foreground.",
      "Shibaura is the shore at Shiba, in the south of the city. This Tōto meisho sheet shows everyday life on the water of the capital."
    ],
    "fact": "c. 1831–1832. Metropolitan Museum of Art, New York."
  },
  "hgshinobazu": {
    "text": [
      "Shinobazu Pond at Ueno lies round and wide; a Benzaiten shrine stands on an island, and the bank is a favourite walk.",
      "The Tōto meisho sheet is held by the National Diet Library in Tokyo. Ueno is among the great parks and temple precincts of Edo."
    ],
    "fact": "c. 1831–1832. National Diet Library, Tokyo."
  },
  "hgnibrain": {
    "text": [
      "Over Nihonbashi, the “Japan Bridge” in the heart of Edo, a sudden rain falls; umbrellas, walls and the Nihonbashi River grow dark.",
      "Distances along the Tōkaidō are measured from this bridge. The Tōto meisho sheet stands at the turning point: from the places of the home city to the great road to Kyoto."
    ],
    "fact": "c. 1831–1832. National Diet Library, Tokyo."
  },
  "hgtk00": {
    "text": [
      "In the morning light Nihonbashi is full of porters, merchants and a daimyo’s retinue; the westward journey begins here, in the centre of Edo.",
      "The sheet opens the series Tōkaidō gojūsan tsugi no uchi – the Fifty-three Stations of the Tōkaidō, published from 1833 by Takenouchi Magohachi (Hōeidō), at times together with Senkakudō (Tsuruya Kiemon). Including the start and the finish, the series comprises 55 sheets."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk01": {
    "text": [
      "At Shinagawa, the first station outside the gates of Edo, the sun rises; boats lie in the bay, the coast road leads south.",
      "The sheet shows daybreak, not the departure of the lords. Shinagawa is the first of the 53 stations on the road to Kyoto."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk02": {
    "text": [
      "At Kawasaki travellers cross the Rokugō River by ferry; the shallow water, the boats and the far bank fill the sheet.",
      "The ferry is typical of the eastern Tōkaidō, where several rivers interrupt the road. The sheet belongs to the Hōeidō series, around 1833–1834."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk03": {
    "text": [
      "From a height at Kanagawa the view opens over the bay and the settlement on the shore; the roofs step down the slope.",
      "Kanagawa lies on the bay, later a gate to the outside world. In the Hōeidō series it is the third station after Edo."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk04": {
    "text": [
      "At Hodogaya the Shinmachi Bridge leads between trees over a small watercourse; travellers and porters move in the shade of the avenues.",
      "The Hōeidō-series sheet is held by the Tokyo Metropolitan Library. Hodogaya is the fourth station, already a little inland from the bay."
    ],
    "fact": "c. 1833–1835. Tokyo Metropolitan Library."
  },
  "hgtk06": {
    "text": [
      "At Fujisawa stands the temple of Yugyō-ji; pilgrims and travellers meet before the gates, and the road passes the precinct.",
      "Fujisawa is the sixth station. The Hōeidō-series sheet comes from the National Diet Library in Tokyo."
    ],
    "fact": "c. 1833–1834. National Diet Library, Tokyo."
  },
  "hgtk09": {
    "text": [
      "At Odawara travellers cross the Sakawa River; beyond the ford lies the castle town at the foot of the mountains that climb toward Hakone.",
      "Odawara is the ninth station and the gate to the Hakone pass, one of the most demanding stretches of the Tōkaidō."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk10": {
    "text": [
      "High in the mountains of Hakone the view opens over the lake; steep slopes, mist and the water lie under a wide sky. The Hakone pass is regarded as one of the hardest stretches of the whole road.",
      "The Hōeidō-series sheet is held by the National Diet Library. Hakone is the tenth station, just before the provincial border into Suruga."
    ],
    "fact": "c. 1833–1834. National Diet Library, Tokyo."
  },
  "hgtk11": {
    "text": [
      "At Mishima the morning mist stands between the pines and the roofs of the shrine; figures step like shadows out of the grey.",
      "Mishima, the eleventh station, lies at the foot of the Hakone mountains. The mist is one of the most atmospheric motifs in the Hōeidō series."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk12": {
    "text": [
      "At Numazu evening falls over the pine road; travellers with lanterns move on toward the next town, and the sky takes on colour.",
      "Numazu is the twelfth station, already in the province of Suruga, with a view over the plain and later toward Mount Fuji."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk13": {
    "text": [
      "From Hara, Mount Fuji stands free and close above the plain in the morning; two women on the road give the mountain its scale.",
      "Hara, the thirteenth station, is one of the classic Fuji views of the series. The mountain accompanies the Tōkaidō for a long stretch through Suruga."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk14": {
    "text": [
      "At the station of Yoshiwara, Mount Fuji stands to the left of the road – “Hidari Fuji”; the path leads through a field, and the mountain commands the background.",
      "Yoshiwara here is the Tōkaidō station in the province of Suruga, not the pleasure quarter of the same name in Edo. The sheet belongs to the Hōeidō series, around 1833–1834."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk15": {
    "text": [
      "At Kanbara the snow lies deep; three figures climb a snow-covered lane, the roofs are white, the evening dark. The sheet is among the best-known of the whole series.",
      "Kanbara is the fifteenth station. Whether Hiroshige himself saw the place in snow is uncertain; the traditional account links the series to a journey in 1832."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk17": {
    "text": [
      "At Okitsu travellers cross the Okitsu River; the shallow water, the porters and the bank lie under a light sky.",
      "Okitsu is the seventeenth station, on the Suruga coast, not far from the Satta Pass."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk18": {
    "text": [
      "From Ejiri the distant view opens onto the pine peninsula of Miho; sails stand on the water, and the Suruga coast lies wide.",
      "Ejiri is the eighteenth station. The Miho shore is among the classic landscape motifs of the region, often together with Mount Fuji."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk19": {
    "text": [
      "At Fuchū, porters carry travellers through the Abe River; the water comes high, and the group moves carefully through the ford.",
      "Fuchū (today Shizuoka) is the nineteenth station. Several large rivers of the Pacific coast had to be forded or crossed on the Tōkaidō, often without a fixed bridge."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk23": {
    "text": [
      "On the near bank of the Ōi River at Shimada, travellers wait to cross; the river is wide and is regarded as one of the hardest obstacles on the road.",
      "Shimada is the twenty-third station. In flood the Ōi could become impassable; for a long time there were no bridges."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk24": {
    "text": [
      "From the far bank at Kanaya one looks back across the Ōi River; the porters work their way through the water, and the other bank lies far off.",
      "Kanaya is the twenty-fourth station, immediately after the crossing. The two sheets, Shimada and Kanaya, form a pair across the same river."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk30": {
    "text": [
      "At Maisaka the view opens onto Imagire, the strait into Lake Hamana; boats cross the water, and the coast stretches far.",
      "Maisaka is the thirtieth station. Here the road meets the sea again, after the river crossings of Suruga and Tōtōmi."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk25": {
    "text": [
      "At Nissaka lies the pass of Sayo no Nakayama; a rock formation beside the road – the Yonaki-ishi, the “night-weeping stone” of tradition – stands before travellers and porters.",
      "Nissaka is the twenty-fifth station, in the hilly hinterland of Tōtōmi, between the river crossings and the coast."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk37": {
    "text": [
      "At Fujikawa stands a border barrier; travellers and guards meet at the gate that marks the change of province.",
      "Fujikawa is the thirty-seventh station, on the border between the provinces of Mikawa and Owari, already far west of Edo."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk40": {
    "text": [
      "At Narumi the famous Arimatsu shibori are offered for sale – tie-dyed textiles, a local product of the station; shops and travellers fill the street.",
      "Narumi is the fortieth station, near Nagoya. The Hōeidō series shows not only landscape, but also life and goods along the road."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk42": {
    "text": [
      "At Kuwana the seven-ri ferry puts out across Ise Bay; large ships, masts and the water fill the foreground, and the town lies on the shore.",
      "Kuwana is the forty-second station. The ferry across the bay spares the land route around the water and is among the distinctive points of the western Tōkaidō."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk43": {
    "text": [
      "At Yokkaichi the Mie River bends in the wind; a traveller holds his hat, an umbrella flies, and a willow leans over the water.",
      "Yokkaichi is the forty-third station. The sheet is among the wind-blown, restless prints of the series, just before the famous rain at Shōno."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk45": {
    "text": [
      "At Shōno a sudden shower breaks over the travellers; they bend against the rain, bamboo and the slope grow dark, the road shines. The sheet is one of the most famous of the Hōeidō series.",
      "Shōno is the forty-fifth station, already in the province of Ise, on the road west toward Kyoto."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk46": {
    "text": [
      "Over Kameyama, sky and castle clear after the snow; the white slopes, the wall and the travellers on the road lie under a blue that is opening.",
      "Kameyama is the forty-sixth station. Together with Kanbara and Shōno, the sheet is among the weather pictures that set the mood of the series."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk47": {
    "text": [
      "At Seki the retinue leaves the honjin early, the official inn for lords; lanterns and porters still stand in the half-dark before the gate.",
      "Seki is the forty-seventh station, an important stop before the last passes toward Kyoto. The honjin was reserved for high-ranking travellers."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk48": {
    "text": [
      "At Sakanoshita stands Fudesute Peak, the “brush-abandoning peak” of tradition: the steep rock face above the ravine, travellers on the narrow path.",
      "Sakanoshita is the forty-eighth station. The mountain’s name plays on the legend that a painter threw away his brush here, unable to render the cliff."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk52": {
    "text": [
      "At Kusatsu the famous teahouse stands on the road; travellers rest, food is served, and the last stage toward Ōtsu and Kyoto begins.",
      "Kusatsu is the fifty-second station, near Lake Biwa, where the Tōkaidō and the Kisokaidō meet again."
    ],
    "fact": "c. 1833–1834. Metropolitan Museum of Art, New York."
  },
  "hgtk54": {
    "text": [
      "The journey ends on the Sanjō Bridge in Kyoto; a procession crosses the Kamo River, and the city lies at the western end of the Tōkaidō. Together with Nihonbashi, this sheet frames the series.",
      "The closing sheet of the Hōeidō series – Keishi Sanjō Ōhashi, the great Sanjō Bridge of the capital – comes from the National Diet Library in Tokyo."
    ],
    "fact": "c. 1833–1834. National Diet Library, Tokyo."
  },
  "hgomi_mii": {
    "text": [
      "Evening lies over the temple of Mii-dera on Lake Biwa; the temple bell belongs to the eight classic views of the province of Ōmi.",
      "Around 1834–1835 the series Ōmi hakkei no uchi appears. It transfers an old scheme of eight views, taken from China, onto the landscape of Lake Biwa, not far from Kyoto. The sheet hangs in the Cleveland Museum of Art."
    ],
    "fact": "c. 1834–1835. Cleveland Museum of Art."
  },
  "hgomi_kara": {
    "text": [
      "At Karasaki the famous pine stands in the night rain; the branches spread wide over the water of Lake Biwa, and the night is dark and wet.",
      "“Night Rain at Karasaki” is one of the best-known Ōmi views. The sheet from the series of around 1834–1835 hangs in the Cleveland Museum of Art."
    ],
    "fact": "c. 1834–1835. Cleveland Museum of Art."
  },
  "hgomi_katada": {
    "text": [
      "At Katada the geese come back down over the lake; a pier leads into the water, and the birds stand as a sign of autumn in the sky.",
      "The sheet from the series Ōmi hakkei no uchi is held by the Rijksmuseum in Amsterdam. Katada lies on the western shore of Lake Biwa."
    ],
    "fact": "c. 1834–1835. Rijksmuseum, Amsterdam."
  },
  "hgomi_ishi": {
    "text": [
      "Over the temple of Ishiyama stands the autumn moon; the temple at the southern end of the lake is linked, in tradition, with the writing of The Tale of Genji.",
      "The sheet belongs to the series of eight views of Ōmi, around 1834–1835, and is held by the Rijksmuseum in Amsterdam."
    ],
    "fact": "c. 1834–1835. Rijksmuseum, Amsterdam."
  },
  "hgomi_seta": {
    "text": [
      "At Seta the sunset glow lies over the long bridge at the outflow of Lake Biwa; the sky takes on colour, and the piles stand dark in the water.",
      "The Seta Bridge is a classic close to the eight views. The sheet from the series of around 1834–1835 is held by the Rijksmuseum in Amsterdam. With these sheets, by the mid-1830s, Hiroshige is firmly established as a master of landscape."
    ],
    "fact": "c. 1834–1835. Rijksmuseum, Amsterdam."
  }
});
})();
