// v8.9 English content for Utagawa Hiroshige’s life journey, Part 2, completing the path.
// Extends window.EN; overwrites EN.paths.hiroshige with whole-path meta.
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "National Diet Library, Tokio": "National Diet Library, Tokyo",
  "Library of Congress, Washington (dieser Abzug)": "Library of Congress, Washington (this impression)"
});
  EN.works = Object.assign(EN.works || {}, {
  "hgks12": {
    "title": "Shinmachi",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks14": {
    "title": "Takasaki",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks16": {
    "title": "Annaka",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks17": {
    "title": "Matsuida",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks19": {
    "title": "Karuizawa",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks22": {
    "title": "Otai",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks24": {
    "title": "Shionada",
    "museum": "Cleveland Museum of Art"
  },
  "hgks26": {
    "title": "Mochizuki",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks28": {
    "title": "Nagakubo",
    "museum": "Cleveland Museum of Art"
  },
  "hgks29": {
    "title": "Wada",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks30": {
    "title": "Shimosuwa",
    "museum": "Cleveland Museum of Art"
  },
  "hgks32": {
    "title": "Seba",
    "museum": "Library of Congress, Washington"
  },
  "hgks37": {
    "title": "Miyanokoshi",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks38": {
    "title": "Fukushima",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks40": {
    "title": "Suhara",
    "museum": "Cleveland Museum of Art"
  },
  "hgks43": {
    "title": "Tsumago",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks47": {
    "title": "Ōi",
    "museum": "National Diet Library, Tokyo"
  },
  "hgks68": {
    "title": "Moriyama",
    "museum": "National Diet Library, Tokyo"
  },
  "hgrk_hida": {
    "title": "The Basket Ferry in Hida",
    "museum": "Library of Congress, Washington"
  },
  "hgrk_naruto": {
    "title": "The Naruto Whirlpools in Awa",
    "museum": "National Library of New Zealand, Wellington"
  },
  "hgrk_arashi": {
    "title": "The Togetsu Bridge at Arashiyama",
    "museum": "National Diet Library, Tokyo"
  },
  "hgrk_saruhashi": {
    "title": "The Monkey Bridge in Kai",
    "museum": "National Diet Library, Tokyo"
  },
  "hgrk_sumida": {
    "title": "Snowy Morning on the Sumida in Musashi",
    "museum": "National Diet Library, Tokyo"
  },
  "hgrk_sarashina": {
    "title": "The Moon at Sarashina in Shinano",
    "museum": "National Diet Library, Tokyo"
  },
  "hgrk_matsushima": {
    "title": "Matsushima in Mutsu",
    "museum": "National Diet Library, Tokyo"
  },
  "hgrk_ishiyama": {
    "title": "Ishiyama Temple on Lake Biwa",
    "museum": "National Diet Library, Tokyo"
  },
  "hgrk_nikko": {
    "title": "The Urami Waterfall at Nikkō",
    "museum": "National Diet Library, Tokyo"
  },
  "hgrk_noto": {
    "title": "Taki-no-ura in Noto",
    "museum": "Library of Congress, Washington"
  },
  "hgrk_izumo": {
    "title": "The Hotohoto Festival at Izumo Grand Shrine",
    "museum": "Cleveland Museum of Art"
  },
  "hgrk_sado": {
    "title": "The Gold Mines of Sado",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_nihonbashi": {
    "title": "Nihonbashi Clearing After Snow",
    "museum": "National Diet Library, Tokyo"
  },
  "hgmeh_kasumi": {
    "title": "Kasumigaseki",
    "museum": "National Diet Library, Tokyo"
  },
  "hgmeh_suruga": {
    "title": "Suruga-chō",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_shinobazu": {
    "title": "Kiyomizu Hall and Shinobazu Pond",
    "museum": "National Diet Library, Tokyo"
  },
  "hgmeh_suidobashi": {
    "title": "Suidō Bridge and Surugadai",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_yatsumi": {
    "title": "Yatsumi Bridge",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_plum": {
    "title": "The Plum Garden at Kameido",
    "museum": "Chester Beatty Library, Dublin"
  },
  "hgmeh_iris": {
    "title": "The Irises at Horikiri",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_asukayama": {
    "title": "View North from Asukayama",
    "museum": "National Diet Library, Tokyo"
  },
  "hgmeh_ukeji": {
    "title": "The Akiba Shrine at Ukeji",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hgmeh_sazaido": {
    "title": "The Spiral Hall of the Five Hundred Rakan",
    "museum": "National Diet Library, Tokyo"
  },
  "hgmeh_mama": {
    "title": "Maple Trees at Mama",
    "museum": "National Diet Library, Tokyo"
  },
  "ohashi": {
    "title": "Sudden Shower over Shin-Ōhashi Bridge",
    "museum": "Library of Congress, Washington (this impression)"
  },
  "hgmeh_fireworks": {
    "title": "Fireworks at Ryōgoku",
    "museum": "Cleveland Museum of Art"
  },
  "hgmeh_moonpine": {
    "title": "The Moon Pine at Ueno",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_senju": {
    "title": "The Great Bridge at Senju",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_mannen": {
    "title": "Mannen Bridge in Fukagawa",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_ayase": {
    "title": "The Ayase River at Kanegafuchi",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_jumbo": {
    "title": "Eagle over the Jūmantsubo Plain at Fukagawa",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "hgmeh_azuma": {
    "title": "Azuma Bridge and the Kinryūzan Temple",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_bikuni": {
    "title": "Bikuni Bridge in the Snow",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_saruwaka": {
    "title": "Night View of Saruwaka-chō",
    "museum": "National Diet Library, Tokyo"
  },
  "hgmeh_meguro": {
    "title": "The Drum Bridge and Sunset Hill at Meguro",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_takata": {
    "title": "The Riding Ground at Takata",
    "museum": "Library of Congress, Washington"
  },
  "hgmeh_foxfires": {
    "title": "Foxfires on New Year’s Eve at Ōji",
    "museum": "National Diet Library, Tokyo"
  },
  "hgmeh_shiba": {
    "title": "Shiba Shinmei and Zōjō-ji",
    "museum": "National Diet Library, Tokyo"
  },
  "hgfuji_enoshima": {
    "title": "The Entrance Gate at Enoshima",
    "museum": "Library of Congress, Washington"
  },
  "hgfuji_miho": {
    "title": "The Pine Strand of Miho in Suruga",
    "museum": "Library of Congress, Washington"
  },
  "hgfuji_satta": {
    "title": "The Sea off Satta in Suruga",
    "museum": "Library of Congress, Washington"
  },
  "hgfuji_hakone": {
    "title": "The Lake at Hakone",
    "museum": "Library of Congress, Washington"
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
  "hiroshigekiso": {
    "place": "The Kisokaidō: Hiroshige Takes Over",
    "when": "from about 1835",
    "mapLabel": "Kisokaidō",
    "intro": [
      "After the success of the Hōeidō Tōkaidō, a second station series is made on the inland road, the Kisokaidō (Nakasendō): 69 stations plus Nihonbashi. Keisai Eisen begins it for the publisher Takenouchi Magohachi (Hōeidō); Hiroshige takes over the greater part of the later stations. The publisher Iseya Rihei (Kinjudō) is also involved in the issue.",
      "The sheets appear from about 1835, in the years that follow. Eisen remains responsible for the early stations; the sheets shown here belong to Hiroshige’s share.",
      "The inland road leads from Edo through the mountains of Kōzuke and Shinano, over high passes, towards the west."
    ]
  },
  "hiroshigepass": {
    "place": "Passes, Moon and Snow",
    "when": "about 1835–1838",
    "mapLabel": "Passes",
    "intro": [
      "The road climbs through the mountains of Shinano. At Mochizuki the moon stands over the pines, at Nagakubo over a long bridge; on the Wada pass the snow lies deep.",
      "Shimosuwa lies on Lake Suwa, after the high passes. At Seba, willows stand in the evening light over the river – one of the best-known sheets in the whole series.",
      "These stations belong to the heart of Hiroshige’s Kisokaidō."
    ]
  },
  "hiroshigekisoend": {
    "place": "Kiso Valleys and the West",
    "when": "about 1835–1838",
    "mapLabel": "Kiso",
    "intro": [
      "Further west the road follows the Kiso valleys: moonlight over Miyanokoshi, the checkpoint at Fukushima, sudden rain at Suhara, the post station of Tsumago, heavy snow at Ōi.",
      "Towards the end of the road, Moriyama already lies near Lake Biwa, on the approach to Ōtsu and Kyōto.",
      "With these sheets the inland series is firmly established in Hiroshige’s hands."
    ]
  },
  "hiroshigeprovinces": {
    "place": "The Sixty-odd Provinces",
    "when": "1853–1856",
    "mapLabel": "Provinces",
    "intro": [
      "In 1853–1856 the series Famous Places of the Sixty-odd Provinces (Rokujūyoshū meisho zue) appears: about seventy vertical ōban sheets, published by Koshimuraya Heisuke.",
      "The views reach across the whole country: the basket ferry in Hida, the whirlpools of Naruto in Awa, the Togetsu Bridge at Arashiyama, the Monkey Bridge in Kai, a snowy morning on the Sumida, the moon over the rice terraces of Sarashina.",
      "Unlike the Tōkaidō and the Kisokaidō, this is not a sequence of road stations, but an atlas of famous places."
    ]
  },
  "hiroshigeprovinces2": {
    "place": "Coasts, Islands and Shrines",
    "when": "1853–1856",
    "mapLabel": "Coasts",
    "intro": [
      "The provinces series also reaches coasts and islands: the bay of Matsushima in Mutsu, Ishiyama Temple on Lake Biwa, the Urami waterfall at Nikkō, the coast of Noto, the Hotohoto festival at the Grand Shrine of Izumo, and the gold mines of the island of Sado.",
      "At Ishiyama Hiroshige returns to a place he had already designed in the Eight Views of Ōmi in the mid-1830s.",
      "With this series, twenty years after the Tōkaidō, he is again the landscape master of the eastern capital – now looking across the whole country."
    ]
  },
  "hiroshigehyakkei": {
    "place": "One Hundred Famous Views of Edo",
    "when": "from 1856",
    "mapLabel": "Edo",
    "intro": [
      "From 1856 Hiroshige works on the One Hundred Famous Views of Edo (Meisho Edo Hyakkei), published by Uoya Eikichi (Sakanaya Eikichi). The series finally comprises about 118 to 119 sheets, most of them from the years 1856–1858.",
      "It begins again at Nihonbashi, after the snow, and leads through the streets of the eastern capital: Kasumigaseki, Suruga-chō with Mount Fuji in the axis of the lane, Kiyomizu Hall at Shinobazu Pond, Suidō Bridge, Yatsumi Bridge.",
      "In 1856 Hiroshige also takes formal Buddhist vows; he goes on working, into the last years."
    ]
  },
  "hiroshigespring": {
    "place": "Gardens, Blossoms and Autumn Leaves",
    "when": "1856–1857",
    "mapLabel": "Gardens",
    "intro": [
      "Gardens and seasons run through the Hundred Views: the plum garden at Kameido, the irises at Horikiri, the view from Asukayama, the Akiba shrine at Ukeji, the spiral hall of the Five Hundred Arhats, the maples at Mama.",
      "Many of these sheets appear in 1857. The bent plum trunk at Kameido and the irises at Horikiri are among the best-known garden pictures of the series.",
      "Hiroshige often sets the foreground close and large, with the city or the garden calm and wide beyond."
    ]
  },
  "hiroshigenight": {
    "place": "Rain, Night and River",
    "when": "1856–1858",
    "mapLabel": "Rain",
    "intro": [
      "Rain, fireworks and water belong to the most famous sheets of the series. In 1857 the sudden shower over the Shin-Ōhashi and Atake appears – a late masterpiece of the Hundred Views.",
      "With them come the Moon Pine at Ueno, the great bridge at Senju, Mannen Bridge in Fukagawa and the Ayase River at Kanegafuchi. The fireworks at Ryōgoku appear in 1858.",
      "Weather and night remain to the last one of Hiroshige’s firmest themes."
    ]
  },
  "hiroshigewinter": {
    "place": "Snow, Eagle and Streets",
    "when": "1857–1858",
    "mapLabel": "Winter",
    "intro": [
      "The series also records the winter and the edge of the city: an eagle over the snowy plain of Jūmantsubo at Fukagawa, Azuma Bridge with distant Kinryūzan, Bikuni Bridge in the snow, night in the theatre district of Saruwaka-chō, the drum bridge at Meguro, the riding ground at Takata.",
      "The snow sheet of Bikuni Bridge appears in 1858. The other sheets of this station belong mainly to the year 1857.",
      "So the view of Edo is rounded out: not only gardens and bridges, but also snow, animals and the streets at the edge."
    ]
  },
  "hiroshige1858": {
    "place": "Last Years and the Death in 1858",
    "when": "1857–1858",
    "mapLabel": "1858",
    "intro": [
      "In 1856 Hiroshige takes formal Buddhist vows and goes on working. In 1857, in the Hundred Views, the sheet of the foxfires on New Year’s Eve at Ōji appears; with it comes the view of Shiba Shinmei and Zōjō-ji.",
      "In 1858 a series of Thirty-six Views of Mount Fuji appears, published by Tsutaya Kichizō (Kōeidō): the gate at Enoshima, the pine strand of Miho, the sea off Satta, the lake at Hakone.",
      "On 12 October 1858 Utagawa Hiroshige dies in Edo. Tradition gives the cause of death as cholera; in that year an epidemic is running in the city. He is buried in the cemetery of the temple Tōgaku-ji in Asakusa. His pupil and adopted son Suzuki Shigenobu continues the name as Hiroshige II."
    ]
  },
  "hiroshigeomi": {
    "place": "Ōmi hakkei and Fame in the 1830s",
    "when": "c. 1834–1835",
    "mapLabel": "Ōmi",
    "intro": [
      "Around 1834–1835 there follows the series Ōmi hakkei no uchi, the Eight Views of Ōmi Province on Lake Biwa, not far from Kyoto. The scheme of eight views is older and taken from China; Hiroshige transfers it to bell, rain, geese, moon and sunset glow on the lake.",
      "With the Tōkaidō series and the Ōmi views, by the mid-1830s Hiroshige is firmly established as a master of landscape, at the western end of the road and on the lake.",
      "From here the road leads on to the Kisokaidō, to the views of the provinces and to the One Hundred Famous Views of Edo."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "hgks12": {
    "text": [
      "The station of Shinmachi lies on the Kisokaidō in the province of Kōzuke. The sheet shows the post station with travellers and the wide landscape of the inland road.",
      "Keisai Eisen begins the series of the 69 Stations of the Kisokaidō for the publisher Takenouchi Magohachi (Hōeidō). The later stations, including Shinmachi, are designed by Hiroshige; they appear from about 1835, in the years that follow. This sheet is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks14": {
    "text": [
      "Takasaki is an important castle town on the Kisokaidō in Kōzuke. The sheet shows the station in open country, with travellers on the road.",
      "Hiroshige designs Takasaki as one of the stations that follow Eisen’s opening of the series. This sheet of the series of about 1835–1838 is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks16": {
    "text": [
      "Annaka lies in Kōzuke, already on the rise towards the Usui pass. The sheet shows the station and the road that leads into the mountains.",
      "In the Kisokaidō series Annaka is one of Hiroshige’s stations. The sheet is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks17": {
    "text": [
      "Matsuida lies at the foot of the Usui pass, which separates Kōzuke from Shinano. Travellers and pack animals move through the hilly station.",
      "The sheet belongs to Hiroshige’s share of the Kisokaidō series and is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks19": {
    "text": [
      "Karuizawa lies high above the Usui pass, on the Shinano side. The sheet shows the bare, open height with travellers in the wind and among the rocks.",
      "The station is one of the best-known high points of the Kisokaidō. Hiroshige’s sheet of the series of about 1835–1838 is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks22": {
    "text": [
      "Otai (also Odai) already lies in Shinano, after the descent from the Usui pass. The sheet shows travellers in the open landscape of the inland road.",
      "Hiroshige designs the station for the Kisokaidō series. The sheet is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks24": {
    "text": [
      "Shionada lies on the Chikuma River in Shinano. The sheet shows the river station and the road by the water.",
      "Hiroshige designs Shionada for the series of the 69 Stations of the Kisokaidō. This sheet hangs in the Cleveland Museum of Art."
    ],
    "fact": "um 1835–1838. Cleveland Museum of Art."
  },
  "hgks26": {
    "text": [
      "At Mochizuki tall pines stand under a bright moon; the name of the station means “full moon.” Travellers and horses move on the road in the moonlight.",
      "The sheet is one of the best-known moon views of the Kisokaidō. It is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks28": {
    "text": [
      "A full moon stands over a long wooden bridge; travellers cross the river, and on the near bank people and a horse pass houses. A large pine divides the scene.",
      "Nagakubo is regarded as one of the principal sheets of the Kisokaidō series. This impression, of about 1835–1836, hangs in the Cleveland Museum of Art."
    ],
    "fact": "um 1835–1838. Cleveland Museum of Art."
  },
  "hgks29": {
    "text": [
      "Deep snow lies on the Wada pass; the road climbs steeply between white slopes and dark trees, and travellers struggle up the pass.",
      "The snow scene at the Wada pass is one of the best-known sheets of the Kisokaidō. It is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks30": {
    "text": [
      "Shimosuwa lies on Lake Suwa, one of the lower stations after the high passes. The sheet shows the station by the lake in Shinano.",
      "Hiroshige designs Shimosuwa for the Kisokaidō series; a version of 1835 hangs in the Cleveland Museum of Art."
    ],
    "fact": "um 1835–1838. Cleveland Museum of Art."
  },
  "hgks32": {
    "text": [
      "By the river at Seba, weeping willows stand in the evening light; two men pole a loaded skiff, and the sun sits red over the flat bank.",
      "Seba is regarded as one of the finest sheets in the whole Kisokaidō series. This impression is held by the Library of Congress in Washington."
    ],
    "fact": "um 1835–1838. Library of Congress, Washington."
  },
  "hgks37": {
    "text": [
      "At Miyanokoshi the moon hangs over the river and the trees of the station in the Kiso mountains. Travellers move along the bank in the moonlight.",
      "The sheet belongs to Hiroshige’s stations of the Kisokaidō and is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks38": {
    "text": [
      "Kiso-Fukushima is one of the principal checkpoint stations of the inland road, in the narrow valley of the Kiso River. The sheet shows the post station under trees, with travellers on the road.",
      "Hiroshige designs Fukushima for the Kisokaidō series. The sheet is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks40": {
    "text": [
      "At Suhara a sudden rain surprises the travellers; umbrellas and hats tip, and the trees stand wet over the road.",
      "The rain sheet of Suhara is one of the best-known weather views of the Kisokaidō. This version hangs in the Cleveland Museum of Art."
    ],
    "fact": "um 1835–1838. Cleveland Museum of Art."
  },
  "hgks43": {
    "text": [
      "Tsumago lies in the narrow Kiso valley, one of the best-known post stations of the inland road. The sheet shows the station in the mountain landscape, with travellers on the way.",
      "Hiroshige designs Tsumago for the series of the 69 Stations. The sheet is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks47": {
    "text": [
      "Heavy snow lies over the station of Ōi; travellers struggle through the white landscape, and houses and trees sink in the storm.",
      "The snow sheet of Ōi is one of the principal works of the Kisokaidō series. It is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgks68": {
    "text": [
      "Moriyama already lies near Lake Biwa, towards the end of the Kisokaidō and the approach to Ōtsu and Kyōto. The sheet shows the station in the open, lower landscape.",
      "With stations such as Moriyama, Hiroshige brings the inland road back towards the region of Lake Biwa. The sheet is held by the National Diet Library in Tokyo."
    ],
    "fact": "um 1835–1838. National Diet Library, Tokyo."
  },
  "hgrk_hida": {
    "text": [
      "A basket ferry hangs over a gorge in Hida; the basket slides on the rope, and far below the river lies between steep, wooded slopes.",
      "The sheet belongs to the series Famous Places of the Sixty-odd Provinces (Rokujūyoshū meisho zue), published in 1853–1856 by Koshimuraya Heisuke. This impression is held by the Library of Congress in Washington."
    ],
    "fact": "1853–1856. Library of Congress, Washington."
  },
  "hgrk_naruto": {
    "text": [
      "Off the coast of Awa the whirlpools of the Naruto Strait turn; the water spins in strong circles between the islands.",
      "The Naruto whirlpools are one of the best-known motifs of the provinces series. This sheet, of about 1855, is held by the National Library of New Zealand in Wellington."
    ],
    "fact": "1853–1856. National Library of New Zealand, Wellington."
  },
  "hgrk_arashi": {
    "text": [
      "At Arashiyama, in the province of Yamashiro, the Togetsu Bridge crosses the river; cherry blossoms and the wooded hills stand over the water.",
      "The sheet of the provinces series shows one of the most famous places near Kyōto. It is held by the National Diet Library in Tokyo."
    ],
    "fact": "1853–1856. National Diet Library, Tokyo."
  },
  "hgrk_saruhashi": {
    "text": [
      "The Monkey Bridge of Kai spans high above a gorge; the timber structure hangs boldly between the rocks, and far below the river flows.",
      "Saruhashi is a classic famous place of the province of Kai. This sheet of the 1853–1856 series is held by the National Diet Library in Tokyo."
    ],
    "fact": "1853–1856. National Diet Library, Tokyo."
  },
  "hgrk_sumida": {
    "text": [
      "On the Sumida River in the province of Musashi, snow lies over the bank, the boats and the distant city; the morning is still and bright.",
      "The sheet brings the provinces series to the river of Edo. It is held by the National Diet Library in Tokyo."
    ],
    "fact": "1853–1856. National Diet Library, Tokyo."
  },
  "hgrk_sarashina": {
    "text": [
      "At Sarashina in the province of Shinano the moon stands over the rice terraces and Mount Kyōdai; the fields step up the slope.",
      "The “rice-field moon” of Sarashina is a classic motif. This sheet of the provinces series is held by the National Diet Library in Tokyo."
    ],
    "fact": "1853–1856. National Diet Library, Tokyo."
  },
  "hgrk_matsushima": {
    "text": [
      "Off the coast of Mutsu the islands of Matsushima lie in calm water, one of the classic beautiful views of Japan. Pines stand on the rocks, and the horizon is wide.",
      "The sheet of the provinces series shows the famous archipelago in the north. It is held by the National Diet Library in Tokyo."
    ],
    "fact": "1853–1856. National Diet Library, Tokyo."
  },
  "hgrk_ishiyama": {
    "text": [
      "Ishiyama Temple stands above Lake Biwa in the province of Ōmi; moon, lake and temple belong to the classic Eight Views of Ōmi, here in the later provinces series.",
      "Hiroshige returns to the place he had already designed in the 1830s in the Eight Views of Ōmi. The sheet is held by the National Diet Library in Tokyo."
    ],
    "fact": "1853–1856. National Diet Library, Tokyo."
  },
  "hgrk_nikko": {
    "text": [
      "At Nikkō in the province of Shimotsuke, the Urami waterfall drops behind a ledge of rock; the water is seen from behind, between rock and forest.",
      "The sheet of the provinces series shows one of the well-known falls on the sacred mountain of Nikkō. It is held by the National Diet Library in Tokyo."
    ],
    "fact": "1853–1856. National Diet Library, Tokyo."
  },
  "hgrk_noto": {
    "text": [
      "On the coast of Noto, rocks and surf stand under a wide sky; Taki-no-ura is a famous place of the peninsula.",
      "This sheet of the 1853–1856 series is held by the Library of Congress in Washington."
    ],
    "fact": "1853–1856. Library of Congress, Washington."
  },
  "hgrk_izumo": {
    "text": [
      "At the Grand Shrine of Izumo, in the province of Izumo, people gather for the Hotohoto festival. Lanterns, trees and the halls of the shrine fill the sheet.",
      "This festival sheet of the provinces series, of 1853, hangs in the Cleveland Museum of Art."
    ],
    "fact": "1853–1856. Cleveland Museum of Art."
  },
  "hgrk_sado": {
    "text": [
      "On the island of Sado, tunnels lead into the mountain; workers and a cart stand in the valley, a stream runs past the dark mouths, and wooded slopes rise above.",
      "The gold mines are the sheet for the province of Sado in the series of the Sixty-odd Provinces. This impression of 1853 is held by the Library of Congress in Washington."
    ],
    "fact": "1853–1856. Library of Congress, Washington."
  },
  "hgmeh_nihonbashi": {
    "text": [
      "After the snow, Nihonbashi lies bright and wide; the sky is clear, and the bridge and river of the eastern capital stand in the winter light.",
      "In 1856, at Uoya Eikichi (Sakanaya Eikichi), the series One Hundred Famous Views of Edo begins. The opening sheet at Nihonbashi is held by the National Diet Library in Tokyo."
    ],
    "fact": "1856. National Diet Library, Tokyo."
  },
  "hgmeh_kasumi": {
    "text": [
      "The street of Kasumigaseki leads into the depth of the city; roofs, walls and passers-by step down the slope, and the view is wide and clear.",
      "This sheet of 1856 belongs to the early leaves of the Hundred Views. It is held by the National Diet Library in Tokyo."
    ],
    "fact": "1856. National Diet Library, Tokyo."
  },
  "hgmeh_suruga": {
    "text": [
      "Through the street of Suruga-chō, Mount Fuji appears between the roofs of the dry-goods shops; the mountain stands exactly in the axis of the lane.",
      "This sheet of 1856 is one of the best-known city views of the series. This impression is held by the Library of Congress in Washington."
    ],
    "fact": "1856. Library of Congress, Washington."
  },
  "hgmeh_shinobazu": {
    "text": [
      "The Kiyomizu Hall at Ueno stands over Shinobazu Pond; cherry blossoms and the water fill the view, and the hall juts on supports over the slope.",
      "This sheet of the Hundred Views is held by the National Diet Library in Tokyo."
    ],
    "fact": "1856. National Diet Library, Tokyo."
  },
  "hgmeh_suidobashi": {
    "text": [
      "A kite stands in the wind over Suidō Bridge and the district of Surugadai; Mount Fuji appears in the distance over the roofs.",
      "This sheet of 1857 is held by the Library of Congress in Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_yatsumi": {
    "text": [
      "From Yatsumi Bridge the view runs over the water and the piles; a branch juts into the picture, and the city lies calmly beyond.",
      "This sheet of 1856 from the Hundred Views is held by the Library of Congress in Washington."
    ],
    "fact": "1856. Library of Congress, Washington."
  },
  "hgmeh_plum": {
    "text": [
      "In the plum garden at Kameido a strongly bent, blossoming trunk stands close in the foreground; beyond it lie the garden, the visitors and the wide, reddish sky.",
      "The sheet appears in the eleventh month of 1857 in the series of the Hundred Views. This impression is held by the Chester Beatty Library in Dublin."
    ],
    "fact": "1857. Chester Beatty Library, Dublin."
  },
  "hgmeh_iris": {
    "text": [
      "At Horikiri, irises stand high in the foreground; the leaves and blossoms fill the sheet, and beyond them lie the garden and small figures.",
      "This sheet of 1857 is one of the best-known garden views of the series. This impression is held by the Library of Congress in Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_asukayama": {
    "text": [
      "From Asukayama hill the view runs north over cherry trees, the flat country and distant Mount Fuji. The hill is a favourite place in the city for the blossom festival.",
      "This sheet of the Hundred Views is held by the National Diet Library in Tokyo."
    ],
    "fact": "1856–1857. National Diet Library, Tokyo."
  },
  "hgmeh_ukeji": {
    "text": [
      "In the grounds of the Akiba shrine at Ukeji, autumn trees stand over a pond; the foliage and the reflection fill the surface in calm, strong colours.",
      "This sheet of 1857 from the Hundred Views hangs in the Rijksmuseum in Amsterdam."
    ],
    "fact": "1857. Rijksmuseum, Amsterdam."
  },
  "hgmeh_sazaido": {
    "text": [
      "The spiral hall (Sazaidō) of the Temple of the Five Hundred Arhats stands over the water; the unusual, round building can be seen from the city.",
      "This sheet of the Hundred Views is held by the National Diet Library in Tokyo."
    ],
    "fact": "1857. National Diet Library, Tokyo."
  },
  "hgmeh_mama": {
    "text": [
      "At Mama, red maples stand over the Tekona shrine and the linked bridge; the autumn foliage hangs close into the picture.",
      "This sheet of the Hundred Views is held by the National Diet Library in Tokyo."
    ],
    "fact": "1857. National Diet Library, Tokyo."
  },
  "ohashi": {
    "text": [
      "A summer rain surprises the people on the Shin-Ōhashi; umbrellas tip, the planks gleam, the river lies dark beneath, and on the far bank lies Atake.",
      "This sheet of 1857 from the One Hundred Famous Views of Edo is one of Hiroshige’s best-known weather pictures. This impression is held by the Library of Congress in Washington."
    ],
    "fact": "1857. Library of Congress, Washington (this impression)."
  },
  "hgmeh_fireworks": {
    "text": [
      "Over Ryōgoku Bridge and the Sumida, fireworks rise into the night sky; boats crowd on the water, and the bridge is full of people.",
      "The sheet appears in 1858, in Hiroshige’s last year, in the series of the Hundred Views. It hangs in the Cleveland Museum of Art."
    ],
    "fact": "1858. Cleveland Museum of Art."
  },
  "hgmeh_moonpine": {
    "text": [
      "At Ueno a pine branch forms a ring, through which the view falls on Shinobazu Pond; the bough stands close and dark against the water.",
      "The “Moon Pine” of 1857 is one of the famous foreground motifs of the series. This impression is held by the Library of Congress in Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_senju": {
    "text": [
      "The great bridge at Senju crosses the river on the northern edge of the city; travellers and the wide water fill the sheet.",
      "This sheet of 1856 from the Hundred Views is held by the Library of Congress in Washington."
    ],
    "fact": "1856. Library of Congress, Washington."
  },
  "hgmeh_mannen": {
    "text": [
      "Under Mannen Bridge in Fukagawa lies the water; a turtle’s back often juts into the foreground, and above it the bridge and the storehouses.",
      "This sheet of 1857 is held by the Library of Congress in Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_ayase": {
    "text": [
      "On the Ayase River at Kanegafuchi, plants stand close in the foreground; beyond the leaves lies the calm river of the eastern city.",
      "This sheet of 1857 from the Hundred Views is held by the Library of Congress in Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_jumbo": {
    "text": [
      "An eagle perches on a snow-covered trunk and looks out over the wide, snowy plain of Jūmantsubo at Fukagawa; the sky is cold and wide.",
      "This sheet of 1857 is one of the best-known winter views of the series. It hangs in the Rijksmuseum in Amsterdam."
    ],
    "fact": "1857. Rijksmuseum, Amsterdam."
  },
  "hgmeh_azuma": {
    "text": [
      "From Azuma Bridge the view runs to the distant temple hall of Kinryūzan in Asakusa; the river and the boats lie in the middle ground.",
      "This sheet of 1857 from the Hundred Views is held by the Library of Congress in Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_bikuni": {
    "text": [
      "Bikuni Bridge lies under heavy snow; roofs, railings and the road sink in the white, and the city is still.",
      "The sheet appears in 1858 in the series of the Hundred Views. This impression is held by the Library of Congress in Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  },
  "hgmeh_saruwaka": {
    "text": [
      "In the theatre district of Saruwaka-chō the shadows of passers-by stand sharp in the moonlight; the street of the theatres is at once lively and still at night.",
      "This sheet of the Hundred Views is held by the National Diet Library in Tokyo."
    ],
    "fact": "1856–1857. National Diet Library, Tokyo."
  },
  "hgmeh_meguro": {
    "text": [
      "At Meguro the steep drum bridge arches over the path; above it lies Sunset Hill, and travellers climb the arched bridge.",
      "This sheet of 1857 from the Hundred Views is held by the Library of Congress in Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_takata": {
    "text": [
      "At the riding ground of Takata, horses run under the trees; the open practice field lies at the edge of the city.",
      "This sheet of 1857 from the Hundred Views is held by the Library of Congress in Washington."
    ],
    "fact": "1857. Library of Congress, Washington."
  },
  "hgmeh_foxfires": {
    "text": [
      "On New Year’s Eve the foxes gather with their fire-lights under a tree at Ōji; the lights stand like lanterns in the dark landscape before the fields.",
      "This sheet of 1857 is one of the late, well-known leaves of the Hundred Views. It is held by the National Diet Library in Tokyo."
    ],
    "fact": "1857. National Diet Library, Tokyo."
  },
  "hgmeh_shiba": {
    "text": [
      "At Shiba stand the Shinmei shrine and the temple precinct of Zōjō-ji; roofs, trees and the path lead into the sacred grounds at the edge of the city.",
      "This sheet of the Hundred Views is held by the National Diet Library in Tokyo."
    ],
    "fact": "1857–1858. National Diet Library, Tokyo."
  },
  "hgfuji_enoshima": {
    "text": [
      "The gate at the approach to the island of Enoshima stands before the sea; behind the coast of Sagami, Mount Fuji rises.",
      "In 1858 a series of Thirty-six Views of Mount Fuji appears, published by Tsutaya Kichizō (Kōeidō). This sheet is held by the Library of Congress in Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  },
  "hgfuji_miho": {
    "text": [
      "On the pine strand of Miho in the province of Suruga, the trees stand before the sea; Mount Fuji appears over the bay, a classic view of the mountain.",
      "The sheet belongs to the Fuji series of 1858. It is held by the Library of Congress in Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  },
  "hgfuji_satta": {
    "text": [
      "Off the coast of Satta in Suruga the waves pile up; through the water and the spray Mount Fuji appears, close and firm over the sea.",
      "This sheet of the 1858 Fuji series is one of Hiroshige’s best-known late sea views. This impression is held by the Library of Congress in Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  },
  "hgfuji_hakone": {
    "text": [
      "At the lake of Hakone, Mount Fuji lies over the water and the mountains; the pass landscape that Hiroshige had already designed in the Tōkaidō series appears here again in the late Fuji series.",
      "This sheet of 1858 is held by the Library of Congress in Washington."
    ],
    "fact": "1858. Library of Congress, Washington."
  }
});
})();
