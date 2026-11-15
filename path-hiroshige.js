// v8.8 Utagawa Hiroshige life journey, Part 1 (1797–mid-1830s).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Public-domain / CC0 museum and library scans only. Documented facts only; no unverified quotations.
// No nudity, no shunga, no pleasure-quarter interiors, no death-bed images. The Tōkaidō station Yoshiwara is the road station in Suruga, not the quarter in Edo.
// Childhood and apprenticeship stations use later Tōto meisho views of Edo, honestly dated around 1831–1833.
// The 1832 Tōkaidō journey is given as the traditional account, not as an independently documented certainty.
(function () {
  var works = [
  {
    "id": "hgtakanawa",
    "title": "Vollmond über Takanawa",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Ando Hiroshige - Full Moon over Takanawa, from the series Famous Places in the Eastern Capit - 1930.187 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "hggotenyama",
    "title": "Abendkirschen in Gotenyama",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Gotenyama no yu-zakura-東都名所 御殿山之夕桜-Evening Cherry Blossoms at Gotenyama MET DP123249.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgsusaki",
    "title": "Neujahrssonne nach Schnee in Susaki",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Susaki yuki no hatsuhi-東都名所 洲崎雪之初日-New Year's Sunrise after Snow at Susaki MET DP123254.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgryogoku",
    "title": "Mond in der Dämmerung an der Ryōgoku-Brücke",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Ryogoku no yoizuki-東都名所 両国之宵月-Twilight Moon at Ryōgoku Bridge MET DP123224.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgmasaki",
    "title": "Später Frühling in Masaki",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Masaki, boshun no kei-東都名所 真崎暮春之景-A View of Late Spring at Masaki MET DP123251.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgsumida",
    "title": "Kirschbäume am Sumida im Blatt",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Sumidagawa, hazakura no kei-東都名所 隅田川葉桜之景-A View of Cherry Trees in Leaf along the Sumida River MET DP123250.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtsukuda",
    "title": "Erster Kuckucksruf auf Tsukudajima",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Tsukudajima hatsuhotogizu-東都名所 佃島初郭公-The Year's First Song of the Cuckoo at Tsukudajima MET DP123253.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgzojoji",
    "title": "Zōjō-ji in Shiba im Schnee",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東都名所 芝増上寺雪中ノ図-Zojoji Temple at Shiba in Snow MET DP149203.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgatago",
    "title": "Auf dem Atago-Hügel in Shiba",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東都名所 芝愛宕山上の図-Shiba Atago Sanjo no Zu MET DP123284.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgkanda",
    "title": "Kanda Myōjin",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831–1832",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303510-Utagawa Hiroshige-東都名所 神田明神.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmassaki",
    "title": "Aufklarendes Wetter nach Schnee in Massaki",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東都名所 真崎雪晴ノ図-Clearing Weather after Snow at Massaki MET DP123291.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgmeguro",
    "title": "Der Gionin-Hang in Meguro",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東都名所 目黒行人阪之図-Meguro Gionin Zaka MET DP123246.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgshibaura",
    "title": "Muschelsuche in Shibaura",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Shibaura, shiohi-gari no zu-東都名所 芝浦汐干之図-Shell Gathering at Shibaura MET DP123227.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgshinobazu",
    "title": "Der Shinobazu-Teich",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831–1832",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303522-Utagawa Hiroshige-東都名所 不忍之池.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgnibrain",
    "title": "Plötzlicher Regen an der Nihonbashi",
    "artist": "Utagawa Hiroshige",
    "year": "um 1831–1832",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1302097-Utagawa Hiroshige-東都名所日本橋之白雨.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgtk00",
    "title": "Nihonbashi, Morgenansicht",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 日本橋 朝之景-Stations One- Morning View of Nihonbashi MET DP122174.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk01",
    "title": "Shinagawa, Tagesanbruch",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 品川 日之出-Daybreak at Shinagawa MET DP122175.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk02",
    "title": "Kawasaki, Fähre über den Rokugō",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 川崎 六郷渡舟-Ferry Boat Crossing the Rokugo River MET DP122176.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk03",
    "title": "Kanagawa, Blick von der Anhöhe",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 神奈川 台之景-View of Kangawa at Sunset MET DP122194.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk04",
    "title": "Hodogaya, Shinmachi-Brücke",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1835",
    "museum": "Tokyo Metropolitan Library",
    "source": "Wikimedia Commons: «Hiroshige-53-Stations-Hoeido-05-Hodogaya-Tokyo-Met-02.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgtk06",
    "title": "Fujisawa, Yugyō-ji",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1309892-Utagawa Hiroshige-東海道五拾三次 藤沢・遊行寺.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgtk09",
    "title": "Odawara, Sakawa-gawa",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 小田原 酒匂川-Odawara; Sakogawa MET DP122183.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk10",
    "title": "Hakone, Blick auf den See",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1309898-Utagawa Hiroshige-東海道五拾三次 箱根・湖水図.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgtk11",
    "title": "Mishima, Morgennebel",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 三島 朝霧-Mishima, Asa Kiri MET DP122185.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk12",
    "title": "Numazu, Abenddämmerung",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 沼津 黄昏図-Numazu Ki Kure MET DP122186.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk13",
    "title": "Hara, Fuji am Morgen",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 原 朝の富士-Hara; Asa no Fuji MET DP122187.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk14",
    "title": "Yoshiwara, Fuji zur Linken",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 吉原 左富士-Yoshiwara, Hidari Fuji MET DP122188.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk15",
    "title": "Kanbara, Schnee am Abend",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 蒲原 夜の雪-Evening Snow at Kanbara, from the series \"Fifty-three Stations of the Tōkaidō\" MET DP109333.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgtk17",
    "title": "Okitsu, der Okitsu-gawa",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 奥津 興津川-Okitsu, Okitsugawa MET DP122191.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk18",
    "title": "Ejiri, ferner Blick auf die Miho-Küste",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 江尻 三保遠望-Distant View of Miho Beach from Ejiri MET DP122196.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk19",
    "title": "Fuchū, Furten über den Abe-kawa",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 府中 安部川-Travellers Fording the Abe River at Fuchu MET DP122197.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk23",
    "title": "Shimada, diesseitiges Ufer des Ōi-gawa",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 嶋田 大井川駿岸-Shimada, Oigawa Shun Gan MET DP122201.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk24",
    "title": "Kanaya, jenseitiges Ufer des Ōi-gawa",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 金谷 大井川遠岸-The Far Bank of the Ōi River at Kanaya MET DP123214.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk30",
    "title": "Maisaka, Blick auf Imagire",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 舞坂 今切真景-View of Imaki Point from Maizaka MET DP122207.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk25",
    "title": "Nissaka, Sayo no Nakayama",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 日坂 佐夜の中山-Nissaka, Sayo Nakayama MET DP122203.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk37",
    "title": "Fujikawa, an der Grenzstation",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 藤川 棒鼻の図-Station Thirty-Eight- Fujikawa, Scene at the Border, from the Fifty-Three Stations of the Tokaido MET DP123209.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk40",
    "title": "Narumi, die berühmten Arimatsu-Shibori",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 鳴海 名物有松絞-Narumi, Meibutsu Arimatsu Shibori MET DP122236.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk42",
    "title": "Kuwana, die Sieben-Ri-Fähre",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 桑名 七里渡口-Station Forty-Three- Kuwana, Seven-Ri Ferry at the Port, from the Fifty-Three Stations of the Tokaido MET DP122237.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk43",
    "title": "Yokkaichi, der Mie-gawa",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 四日市 三重川-Mie River at Yokkaichi MET DP123211.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk45",
    "title": "Shōno, plötzlicher Regen",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次・庄野 白雨-Sudden Shower at Shōno, from the series Fifty-three Stations of the Tōkaidō MET DP122216.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk46",
    "title": "Kameyama, aufklarendes Wetter nach Schnee",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 亀山 雪晴-Clear Weather after Snow MET DP123228.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk47",
    "title": "Seki, früher Aufbruch aus dem Honjin",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次 関 本陣早立-Seki, Stations No. 48 MET DP122239.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk48",
    "title": "Sakanoshita, Fudesute-mine",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 阪之下 筆捨嶺-Saka-no-shita, Fude-sute Mine MET DP122229.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk52",
    "title": "Kusatsu, das berühmte Rasthaus",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «東海道五十三次之内 草津 名物立場-Kusatsu- Famous Post House (Kusatsu, Meibutsu tateba), from the series Fifty-three Stations of the Tōkaidō Road (Tōkaidō gojūsan tsugi no uchi) MET DP122233.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgtk54",
    "title": "Kyōto, die Sanjō-Brücke",
    "artist": "Utagawa Hiroshige",
    "year": "um 1833–1834",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1309912-Utagawa Hiroshige-東海道五拾三次 大尾 京師・三條大橋.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgomi_mii",
    "title": "Abendglocke des Mii-dera",
    "artist": "Utagawa Hiroshige",
    "year": "um 1834–1835",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Ando Hiroshige - Evening Bell at Mii Temple (from the series Eight Views of Omi Province) - 1921.1274 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "hgomi_kara",
    "title": "Nachtregen in Karasaki",
    "artist": "Utagawa Hiroshige",
    "year": "um 1834–1835",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Utagawa Hiroshige - Night Rain at Karasaki, from the series Eight Views of Ōmi - 1985.312 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "hgomi_katada",
    "title": "Rückkehrende Gänse in Katada",
    "artist": "Utagawa Hiroshige",
    "year": "um 1834–1835",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Neerstrijkenden ganzen te Katata Katata no rakugan (titel op object) Acht gezichten op de provincie Omi (serietitel) Omi hakkei (titel op object), RP-P-1956-736.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgomi_ishi",
    "title": "Herbstmond über Ishiyama",
    "artist": "Utagawa Hiroshige",
    "year": "um 1834–1835",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Herfstmaan te Ishiyama Ishiyama no shugetsu (titel op object) Acht gezichten op de provincie Omi (serietitel) Omi hakkei, RP-P-1956-737.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgomi_seta",
    "title": "Abendröte in Seta",
    "artist": "Utagawa Hiroshige",
    "year": "um 1834–1835",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Avondgloed te Seta Seta no sekisho (titel op object) Acht gezichten op de provincie Omi (serietitel) Omi hakkei (serietitel op object), RP-P-1960-278.jpg», CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "hiroshige",
  "name": "Utagawa Hiroshige",
  "title": "Utagawa Hiroshiges Lebensweg",
  "life": "1797–1858",
  "part": "Teil 1 · 1797–1835",
  "subtitle": "Von Edo auf den Tōkaidō, zu den 53 Stationen und nach Ōmi",
  "cover": "hgtk45",
  "intro": "Reise mit Utagawa Hiroshige durch die erste Hälfte seines Weges: von der Kindheit in der Feuerwehr von Yayosu in Edo über die Lehre bei Toyohiro, die frühen Ansichten der östlichen Hauptstadt in der Serie «Tōto meisho», die überlieferte Tōkaidō-Reise von 1832 und die Hōeidō-Serie der 53 Stationen bis zu den acht Ansichten von Ōmi in der Mitte der 1830er Jahre. Kurze Stationen und Holzschnitte zum Ausmalen. Dieser erste Teil reicht bis um 1835.",
  "ending": [
    "Um 1834–1835 erscheinen die acht Ansichten von Ōmi am Biwa-See. Zusammen mit der Hōeidō-Tōkaidō haben sie Hiroshige als Landschaftsmeister der östlichen Hauptstadt fest etabliert. Dieser erste Teil endet in der Mitte der 1830er Jahre.",
    "Der Weg geht weiter. Es folgen die Kisokaidō, die Hundert berühmten Ansichten von Edo und Hiroshiges Tod 1858. Davon erzählt der nächste Teil."
  ],
  "epilogue": "In der Mitte der 1830er Jahre endet dieser erste Teil: mit der Hōeidō-Serie der 53 Stationen des Tōkaidō und den acht Ansichten von Ōmi. Die Kisokaidō, die Hundert berühmten Ansichten von Edo und der Tod 1858 gehören zum nächsten Teil.",
  "map": {
    "viewBox": "0 0 200 200",
    "lands": [
      "M22,48 C36,28 58,32 70,52 C78,70 62,86 44,84 C28,82 14,66 22,48 Z",
      "M128,18 C148,8 176,16 184,38 C180,58 156,64 138,52 C124,42 118,26 128,18 Z",
      "M40,78 C70,62 120,70 158,92 C176,120 164,162 128,176 C86,188 48,164 38,128 C32,104 30,90 40,78 Z"
    ]
  },
  "stations": [
    {
      "id": "hiroshigeyayosu",
      "place": "Edo · Kindheit und Feuerwehr",
      "when": "1797–1811",
      "map": {
        "x": 168,
        "y": 86
      },
      "mapLabel": "Edo",
      "intro": [
        "Utagawa Hiroshige wird als Andō Tokutarō geboren, nach der üblichen Rechnung 1797. Das Jahr wird aus späteren Angaben erschlossen: er stirbt 1858 im angegebenen Alter von zweiundsechzig Jahren. Die Familie Andō gehört zur Feuerwehr von Yayosu (Yaesugashi), östlich der Burg von Edo; der Vater Andō Genemon ist ein niedrig gestellter Samurai im Dienst als jōbikeshi-dōshin, als Feuerwehr-Aufseher.",
        "Später trägt er die Namen Jūemon und Tokubei. 1809 sterben beide Eltern; der Knabe erbt den Posten der Feuerwache. Die Stadt, in der er aufwächst, ist die östliche Hauptstadt – Edo.",
        "Die Ansichten von Takanawa, Gotenyama, Susaki, der Ryōgoku-Brücke und Masaki entstehen erst um 1831, in der Serie «Tōto meisho». Sie gehören dennoch zu diesem Anfang: zur Stadt, deren Strassen, Brücken und Ufer Hiroshige von Kind an kennt."
      ],
      "works": [
        {
          "pid": "hgtakanawa",
          "text": [
            "Über der Bucht von Takanawa steht der Vollmond; Boote und die Küstenstrasse liegen ruhig im Licht. Takanawa liegt im Süden Edos, an der Strasse, die später der Tōkaidō wird.",
            "Das Blatt gehört zur Serie «Tōto meisho», den berühmten Orten der östlichen Hauptstadt, und entsteht um 1831 – also später als Hiroshiges Kindheit. Es zeigt die Stadt, in der er aufwächst."
          ],
          "fact": "um 1831. Cleveland Museum of Art."
        },
        {
          "pid": "hggotenyama",
          "text": [
            "Auf Gotenyama blühen die Kirschen im Abendlicht; Spaziergänger stehen unter den Bäumen und blicken auf die Bucht. Der Hügel liegt bei Shinagawa, vor den Toren Edos.",
            "Auch dieses Blatt der Serie «Tōto meisho» entsteht um 1831. Es hält einen der beliebtesten Aussichtspunkte der Stadt fest, in der Hiroshige seine Jugend verbringt."
          ],
          "fact": "um 1831. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgsusaki",
          "text": [
            "Nach dem Schnee geht über Susaki die erste Sonne des Jahres auf; die Küste liegt weiss, der Horizont hell. Susaki ist ein flaches Ufer im Osten Edos.",
            "Das Blatt der Serie «Tōto meisho» datiert um 1831. Es zeigt das Neujahr in der Stadt, deren Feuerwehrposten die Familie Andō trägt."
          ],
          "fact": "um 1831. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgryogoku",
          "text": [
            "An der Ryōgoku-Brücke über den Sumida steht der Mond in der Dämmerung; Boote und das gegenüberliegende Ufer werden dunkel. Die Brücke ist einer der belebtesten Orte Edos.",
            "Das Blatt gehört zur frühen Landschaftsserie «Tōto meisho», um 1831. Der Sumida durchzieht das östliche Edo, unweit der Viertel, in denen Hiroshige aufwächst."
          ],
          "fact": "um 1831. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgmasaki",
          "text": [
            "In Masaki, am unteren Sumida, steht der späte Frühling: Bäume im Blatt, das Wasser ruhig, die Häuser am Ufer klein unter dem Himmel.",
            "Um 1831 entsteht dieses Blatt der Serie «Tōto meisho». Es gehört zu den frühen Edo-Ansichten, mit denen Hiroshige als Landschaftskünstler bekannt wird – und zeigt Orte seiner Heimatstadt."
          ],
          "fact": "um 1831. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "hiroshigetoyohiro",
      "place": "Edo · Lehre bei Toyohiro",
      "when": "1811–um 1830",
      "map": {
        "x": 158,
        "y": 94
      },
      "mapLabel": "Lehre",
      "intro": [
        "Um 1811 bewirbt er sich zuerst bei Utagawa Toyokuni und kommt dann in die Lehre bei Utagawa Toyohiro. Dass die Ausbildung bei Toyohiro stattfand, bestätigt bereits Eisen 1833, zu Hiroshiges Lebzeiten. Der Künstlername Hiroshige verbindet nach der üblichen Erklärung das «hiro» des Lehrers mit seinem eigenen Namen Jūemon; der früheste fest datierbare Gebrauch von «Ichiyūsai Hiroshige» gehört eher in die Zeit um 1819 als in das oft genannte Jahr 1812.",
        "In den frühen 1820er Jahren arbeitet er an Schauspieler-, Schönheits- und Kriegerblättern sowie an Buchillustrationen. Wann er den Posten der Feuerwache abgibt, ist in den Quellen nicht einheitlich überliefert; genannt werden die 1820er Jahre oder 1832.",
        "Fest datierbare Holzschnitte aus diesen Lehr- und frühen Jahren sind selten erhalten. Die folgenden Ansichten Edos entstehen um 1831–1833; sie stehen hier für die Stadt, in der die Lehre und die ersten selbstständigen Arbeiten stattfinden."
      ],
      "works": [
        {
          "pid": "hgsumida",
          "text": [
            "Entlang des Sumida stehen die Kirschbäume schon im Blatt; der Fluss ist breit, die Uferpromenade ein Ort des Spaziergangs.",
            "Das Blatt der Serie «Tōto meisho» entsteht um 1831. Frühe datierbare Holzschnitte aus Hiroshiges Lehrjahren sind selten erhalten; die Ansichten der Heimatstadt stehen hier für die Jahre nach der Lehre bei Toyohiro."
          ],
          "fact": "um 1831. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtsukuda",
          "text": [
            "Auf der Insel Tsukudajima im Mündungsgebiet des Sumida liegt eine Fischerinsel; der erste Kuckuck des Jahres gehört zum Sommeranfang.",
            "Das Blatt ist um 1831 datiert. In diesen Jahren signiert Hiroshige häufig als Ichiyūsai Hiroshige – der Landschaftsstil der östlichen Hauptstadt wird sichtbar."
          ],
          "fact": "um 1831. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgzojoji",
          "text": [
            "Der Tempel Zōjō-ji in Shiba liegt unter Schnee; das Tor, die Dächer und die Kiefern treten klar aus dem Weiss. Der Tempel ist die Familiengrablege der Tokugawa in Edo.",
            "Das Blatt gehört zur Serie «Tōto meisho», um 1831–1832. Es zeigt einen der grossen Tempel der Stadt, in der Hiroshige nach der Lehre arbeitet."
          ],
          "fact": "um 1831–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgatago",
          "text": [
            "Vom Atago-Hügel in Shiba geht der Blick über Edo; der steile Aufstieg und die Aussicht machen den Ort zu einem beliebten Ziel in der Stadt.",
            "Das Blatt der Serie «Tōto meisho» wird um 1833 datiert, in denselben Jahren, in denen die Tōkaidō-Serie zu erscheinen beginnt."
          ],
          "fact": "um 1833. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgkanda",
          "text": [
            "Der Schrein Kanda Myōjin liegt auf einer Anhöhe im Norden der inneren Stadt; Treppen, Tore und Bäume führen zum heiligen Bezirk.",
            "Das Blatt der Serie «Tōto meisho» stammt aus der National Diet Library in Tokio. Die Serie entsteht um 1831–1832; der genaue Abzugszeitpunkt dieses Blattes ist nicht fest datiert."
          ],
          "fact": "um 1831–1832. National Diet Library, Tokio."
        }
      ]
    },
    {
      "id": "hiroshigetoto",
      "place": "Edo · Tōto meisho",
      "when": "um 1831–1832",
      "map": {
        "x": 148,
        "y": 80
      },
      "mapLabel": "Tōto",
      "intro": [
        "Um 1831–1832 erscheint die Serie «Tōto meisho», die berühmten Orte der östlichen Hauptstadt, unter der Signatur Ichiyūsai Hiroshige. Sie gilt als sein früher Durchbruch als Landschaftskünstler.",
        "Die Blätter zeigen Parks, Tempel, Ufer und Alltagsleben in Edo: Massaki nach dem Schnee, den Hang von Meguro, die Muschelsuche in Shibaura, den Shinobazu-Teich in Ueno und den plötzlichen Regen an der Nihonbashi.",
        "Von der Nihonbashi aus werden die Entfernungen auf dem Tōkaidō gemessen. Mit diesem Blatt steht die Serie schon an der Schwelle zur grossen Strasse nach Kyōto."
      ],
      "works": [
        {
          "pid": "hgmassaki",
          "text": [
            "In Massaki, am Sumida, klaren Himmel und Ufer nach dem Schnee auf; das Weiss liegt noch auf den Dächern, das Wasser wird wieder sichtbar.",
            "Mit der Serie «Tōto meisho» um 1831–1832 tritt Hiroshige als Landschaftskünstler hervor. Die Blätter erscheinen unter der Signatur Ichiyūsai Hiroshige."
          ],
          "fact": "um 1831–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgmeguro",
          "text": [
            "Der Hang von Gionin in Meguro führt zwischen Bäumen und Häusern in die Tiefe; Meguro liegt am südwestlichen Rand Edos.",
            "Das Blatt gehört zur Serie der berühmten Orte der östlichen Hauptstadt. In diesen Jahren verlagert sich Hiroshiges Arbeit sichtbar von Schauspieler- und Figurenblättern auf die Landschaft."
          ],
          "fact": "um 1831–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgshibaura",
          "text": [
            "Bei Ebbe suchen Menschen in Shibaura nach Muscheln; die flache Bucht vor Edo liegt weit, die Figuren klein im Vordergrund.",
            "Shibaura ist die Küste bei Shiba, im Süden der Stadt. Das Blatt der Serie «Tōto meisho» zeigt das Alltagsleben am Wasser der Hauptstadt."
          ],
          "fact": "um 1831–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgshinobazu",
          "text": [
            "Der Shinobazu-Teich in Ueno liegt rund und weit; auf einer Insel steht ein Benzaiten-Schrein, das Ufer ist ein beliebter Spazierweg.",
            "Das Blatt der Serie «Tōto meisho» bewahrt die National Diet Library in Tokio. Ueno gehört zu den grossen Parks und Tempelbezirken Edos."
          ],
          "fact": "um 1831–1832. National Diet Library, Tokio."
        },
        {
          "pid": "hgnibrain",
          "text": [
            "Über der Nihonbashi, der «Japan-Brücke» im Herzen Edos, geht ein plötzlicher Regen nieder; Schirme, Mauern und der Fluss Nihonbashi-gawa werden dunkel.",
            "Von dieser Brücke aus werden die Entfernungen auf dem Tōkaidō gemessen. Das Blatt der Serie «Tōto meisho» steht am Übergang: von den Orten der Heimatstadt zur grossen Strasse nach Kyōto."
          ],
          "fact": "um 1831–1832. National Diet Library, Tokio."
        }
      ]
    },
    {
      "id": "hiroshige1832",
      "place": "Tōkaidō · Aufbruch von der Nihonbashi",
      "when": "1832–1834",
      "map": {
        "x": 136,
        "y": 98
      },
      "mapLabel": "Aufbruch",
      "intro": [
        "Nach der überlieferten Darstellung nimmt Hiroshige 1832 an einem offiziellen Zug teil, der ein Geschenk des Shogun – Pferde – nach Kyōto bringt. Skizzen von der Strasse sollen die Grundlage der späteren Serie gebildet haben; der genaue Verlauf der Reise ist nicht unabhängig belegt.",
        "Ab 1833 erscheint bei Takenouchi Magohachi (Hōeidō), zeitweise zusammen mit Senkakudō (Tsuruya Kiemon), die Serie «Tōkaidō gojūsan tsugi no uchi»: die dreiundfünfzig Stationen des Tōkaidō, mit der Nihonbashi und der Sanjō-Brücke in Kyōto 55 Blatt.",
        "Die ersten Blätter führen aus dem Zentrum Edos nach Westen: Morgen an der Nihonbashi, Tagesanbruch in Shinagawa, die Fähre von Kawasaki, Kanagawa, Hodogaya und der Tempel Yugyō-ji in Fujisawa."
      ],
      "works": [
        {
          "pid": "hgtk00",
          "text": [
            "Im Morgenlicht liegt die Nihonbashi voller Träger, Händler und Daimyō-Gefolge; der Zug nach Westen beginnt hier, im Zentrum Edos.",
            "Das Blatt eröffnet die Serie «Tōkaidō gojūsan tsugi no uchi» – die dreiundfünfzig Stationen des Tōkaidō, erschienen ab 1833 beim Verleger Takenouchi Magohachi (Hōeidō), zeitweise zusammen mit Senkakudō (Tsuruya Kiemon). Mit Start und Ziel umfasst die Serie 55 Blatt."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk01",
          "text": [
            "In Shinagawa, der ersten Station vor den Toren Edos, geht die Sonne auf; Boote liegen in der Bucht, die Küstenstrasse führt nach Süden.",
            "Das Blatt zeigt den Tagesanbruch, nicht den Aufbruch der Fürsten. Shinagawa ist die erste der 53 Stationen auf dem Weg nach Kyōto."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk02",
          "text": [
            "Bei Kawasaki setzen Reisende mit der Fähre über den Rokugō-Fluss; das flache Wasser, die Boote und das gegenüberliegende Ufer füllen das Blatt.",
            "Die Fähre ist typisch für den östlichen Tōkaidō, wo mehrere Flüsse die Strasse unterbrechen. Das Blatt gehört zur Hōeidō-Serie, um 1833–1834."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk03",
          "text": [
            "Von einer Anhöhe in Kanagawa geht der Blick auf die Bucht und die Siedlung am Ufer; die Dächer staffeln sich den Hang hinab.",
            "Kanagawa liegt an der Bucht, später ein Tor zur Aussenwelt. In der Hōeidō-Serie ist es die dritte Station nach Edo."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk04",
          "text": [
            "In Hodogaya führt die Shinmachi-Brücke zwischen Bäumen über einen kleinen Wasserlauf; Reisende und Träger bewegen sich im Schatten der Alleen.",
            "Das Blatt der Hōeidō-Serie bewahrt die Tokyo Metropolitan Library. Hodogaya ist die vierte Station, schon etwas landeinwärts der Bucht."
          ],
          "fact": "um 1833–1835. Tokyo Metropolitan Library."
        },
        {
          "pid": "hgtk06",
          "text": [
            "In Fujisawa liegt der Tempel Yugyō-ji; Pilger und Reisende begegnen sich vor den Toren, die Strasse führt an der Tempelanlage vorbei.",
            "Fujisawa ist die sechste Station. Das Blatt der Hōeidō-Serie stammt aus der National Diet Library in Tokio."
          ],
          "fact": "um 1833–1834. National Diet Library, Tokio."
        }
      ]
    },
    {
      "id": "hiroshigehakone",
      "place": "Hakone und der Fuji",
      "when": "um 1833–1834",
      "map": {
        "x": 114,
        "y": 112
      },
      "mapLabel": "Hakone",
      "intro": [
        "Von Odawara an steigt der Tōkaidō in die Berge von Hakone, eine der beschwerlichsten Passagen der Strasse, und öffnet sich danach auf die Ebene von Suruga mit dem Fuji.",
        "Die Hōeidō-Serie zeigt den Flussübergang bei Odawara, den See von Hakone, den Morgennebel in Mishima, die Dämmerung in Numazu, den Fuji am Morgen bei Hara und «zur Linken» bei der Station Yoshiwara – der Tōkaidō-Station in Suruga, nicht dem Vergnügungsviertel in Edo.",
        "In Kanbara liegt der Schnee am Abend. Das Blatt gehört zu den bekanntesten der Serie. Ob Hiroshige den Ort selbst im Schnee gesehen hat, bleibt unsicher."
      ],
      "works": [
        {
          "pid": "hgtk09",
          "text": [
            "Bei Odawara durchqueren Reisende den Sakawa-gawa; hinter der Furtenstrecke liegt die Burgstadt am Fuss der Berge, die nach Hakone hinaufführen.",
            "Odawara ist die neunte Station und das Tor zur Hakone-Passage, einer der beschwerlichsten Strecken des Tōkaidō."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk10",
          "text": [
            "Hoch in den Bergen von Hakone öffnet sich der Blick auf den See; steile Hänge, Nebel und das Wasser liegen unter einem weiten Himmel. Die Passage von Hakone gilt als eine der schwierigsten des ganzen Weges.",
            "Das Blatt der Hōeidō-Serie bewahrt die National Diet Library. Hakone ist die zehnte Station, unmittelbar vor der Provinzgrenze nach Suruga."
          ],
          "fact": "um 1833–1834. National Diet Library, Tokio."
        },
        {
          "pid": "hgtk11",
          "text": [
            "In Mishima steht der Morgennebel zwischen den Kiefern und den Dächern des Schreins; Figuren treten wie Schatten aus dem Grau.",
            "Mishima, die elfte Station, liegt am Fuss der Hakone-Berge. Der Nebel ist eines der stimmungsvollsten Motive der Hōeidō-Serie."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk12",
          "text": [
            "In Numazu geht der Abend über die Kiefernstrasse; Reisende mit Laternen bewegen sich auf den nächsten Ort zu, der Himmel färbt sich.",
            "Numazu ist die zwölfte Station, schon in der Provinz Suruga, mit Blick auf die Ebene und später auf den Fuji."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk13",
          "text": [
            "Von Hara aus steht der Fuji am Morgen frei und nah über der Ebene; zwei Frauen auf der Strasse geben dem Berg die Massstäblichkeit.",
            "Hara, die dreizehnte Station, ist eine der klassischen Fuji-Ansichten der Serie. Der Berg begleitet den Tōkaidō auf einer langen Strecke durch Suruga."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk14",
          "text": [
            "Bei der Station Yoshiwara steht der Fuji zur Linken der Strasse – «Hidari Fuji»; der Weg führt durch ein Feld, der Berg beherrscht den Hintergrund.",
            "Yoshiwara ist hier die Tōkaidō-Station in der Provinz Suruga, nicht das gleichnamige Vergnügungsviertel in Edo. Das Blatt gehört zur Hōeidō-Serie, um 1833–1834."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk15",
          "text": [
            "In Kanbara liegt tiefer Schnee; drei Figuren steigen eine verschneite Gasse hinauf, die Dächer sind weiss, der Abend dunkel. Das Blatt gehört zu den bekanntesten der ganzen Serie.",
            "Kanbara ist die fünfzehnte Station. Ob Hiroshige den Ort selbst im Schnee gesehen hat, ist unsicher; die überlieferte Darstellung verbindet die Serie mit einer Reise von 1832."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "hiroshigeriver",
      "place": "Flüsse und Küste",
      "when": "um 1833–1834",
      "map": {
        "x": 92,
        "y": 104
      },
      "mapLabel": "Flüsse",
      "intro": [
        "Westlich des Fuji trifft die Strasse immer wieder auf Flüsse und auf die Küste von Suruga und Tōtōmi. Viele Übergänge sind Furten; feste Brücken fehlen oft, und bei Hochwasser kann der Weg unterbrochen sein.",
        "Die Serie zeigt den Okitsu-gawa, den fernen Blick von Ejiri auf die Miho-Küste, die Furten über den Abe-kawa bei Fuchū und vor allem den Ōi-gawa: diesseits in Shimada, jenseits in Kanaya.",
        "Bei Maisaka öffnet sich wieder das Meer, an der Enge von Imagire zum Hamana-See."
      ],
      "works": [
        {
          "pid": "hgtk17",
          "text": [
            "Bei Okitsu durchqueren Reisende den Okitsu-gawa; das flache Wasser, die Träger und das Ufer liegen unter einem hellen Himmel.",
            "Okitsu ist die siebzehnte Station, an der Küste von Suruga, nicht weit vom Satta-Pass."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk18",
          "text": [
            "Von Ejiri aus öffnet sich der ferne Blick auf die Kiefernhalbinsel von Miho; Segel stehen auf dem Wasser, die Küste von Suruga liegt weit.",
            "Ejiri ist die achtzehnte Station. Die Miho-Küste gehört zu den klassischen Landschaftsmotiven der Region, oft zusammen mit dem Fuji."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk19",
          "text": [
            "Bei Fuchū setzen Träger die Reisenden durch den Abe-kawa; das Wasser reicht ihnen hoch, die Gruppe bewegt sich vorsichtig durch die Furt.",
            "Fuchū (heute Shizuoka) ist die neunzehnte Station. Mehrere grosse Flüsse der Pazifikküste mussten auf dem Tōkaidō durchwatet oder überquert werden, oft ohne feste Brücke."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk23",
          "text": [
            "Am diesseitigen Ufer des Ōi-gawa in Shimada warten Reisende auf die Überquerung; der Fluss ist breit und gilt als eines der schwierigsten Hindernisse der Strasse.",
            "Shimada ist die dreiundzwanzigste Station. Der Ōi-gawa konnte bei Hochwasser unpassierbar sein; Brücken gab es lange nicht."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk24",
          "text": [
            "Vom jenseitigen Ufer in Kanaya blickt man auf den Ōi-gawa zurück; die Träger arbeiten sich durch das Wasser, das andere Ufer liegt fern.",
            "Kanaya ist die vierundzwanzigste Station, unmittelbar nach der Flussüberquerung. Beide Blätter, Shimada und Kanaya, bilden ein Paar über denselben Strom."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk30",
          "text": [
            "Bei Maisaka öffnet sich der Blick auf Imagire, die Meerenge zum Hamana-See; Boote kreuzen das Wasser, die Küste greift weit aus.",
            "Maisaka ist die dreissigste Station. Hier trifft die Strasse wieder auf das Meer, nach den Flussübergängen von Suruga und Tōtōmi."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "hiroshigerain",
      "place": "Regen, Wind und weitere Stationen",
      "when": "um 1833–1834",
      "map": {
        "x": 70,
        "y": 96
      },
      "mapLabel": "Regen",
      "intro": [
        "Weiter westlich wechseln Pässe, Grenzen, Marktorte und die Küste der Ise-Bucht. Die Hōeidō-Serie hält nicht nur die Landschaft fest, sondern auch das Leben an der Strasse.",
        "Auf den Pass von Nissaka folgen die Grenzstation von Fujikawa, die Shibori-Läden von Narumi, die grosse Fähre von Kuwana und der Wind am Mie-gawa in Yokkaichi.",
        "In Shōno bricht ein plötzlicher Regen über die Reisenden herein. Das Blatt gehört zu den berühmtesten der ganzen Serie und steht schon in der Provinz Ise, auf dem Weg nach Kyōto."
      ],
      "works": [
        {
          "pid": "hgtk25",
          "text": [
            "Bei Nissaka liegt die Passstrecke Sayo no Nakayama; eine Felsformation am Weg – der Yonaki-ishi, der «Stein, der in der Nacht weint» der Überlieferung – steht vor Reisenden und Trägern.",
            "Nissaka ist die fünfundzwanzigste Station, im hügeligen Hinterland von Tōtōmi, zwischen den Flussübergängen und der Küste."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk37",
          "text": [
            "In Fujikawa liegt eine Grenzstation; Reisende und Wachen begegnen sich an der Schranke, die den Wechsel der Provinz markiert.",
            "Fujikawa ist die siebenunddreissigste Station, an der Grenze zwischen den Provinzen Mikawa und Owari, schon weit westlich von Edo."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk40",
          "text": [
            "In Narumi werden die berühmten Arimatsu-Shibori feilgeboten – gebatikte Stoffe, ein Ortserzeugnis der Station; Läden und Reisende füllen die Strasse.",
            "Narumi ist die vierzigste Station, nahe Nagoya. Die Hōeidō-Serie zeigt nicht nur Landschaft, sondern auch das Leben und die Waren an der Strasse."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk42",
          "text": [
            "In Kuwana legt die Sieben-Ri-Fähre über die Ise-Bucht ab; grosse Schiffe, Masten und das Wasser füllen den Vordergrund, die Stadt liegt am Ufer.",
            "Kuwana ist die zweiundvierzigste Station. Die Fährstrecke über die Bucht erspart den Landweg um das Wasser und gehört zu den markanten Stellen des westlichen Tōkaidō."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk43",
          "text": [
            "Bei Yokkaichi biegt der Mie-gawa im Wind; ein Reisender hält den Hut, ein Schirm fliegt, die Weide neigt sich über das Wasser.",
            "Yokkaichi ist die dreiundvierzigste Station. Das Blatt gehört zu den bewegten, windigen Blättern der Serie, noch vor dem berühmten Regen von Shōno."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk45",
          "text": [
            "In Shōno bricht ein plötzlicher Regen über die Reisenden herein; sie beugen sich gegen den Schauer, Bambus und Hang werden dunkel, die Strasse glänzt. Das Blatt ist eines der berühmtesten der Hōeidō-Serie.",
            "Shōno ist die fünfundvierzigste Station, bereits in der Provinz Ise, auf dem Weg nach Westen in Richtung Kyōto."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "hiroshigekyoto",
      "place": "Ankunft in Kyōto",
      "when": "um 1833–1834",
      "map": {
        "x": 46,
        "y": 88
      },
      "mapLabel": "Kyōto",
      "intro": [
        "Die letzten Stationen führen über Schnee, frühen Aufbruch und den Fels von Sakanoshita an den Biwa-See und nach Kyōto, dem westlichen Ende des Tōkaidō.",
        "In Kameyama klaren Burg und Himmel nach dem Schnee auf. In Seki bricht das Gefolge früh aus dem Honjin auf. Bei Sakanoshita steht der Fudesute-mine, der «Pinselwegwerf-Gipfel» der Überlieferung. In Kusatsu, nahe dem See, rasten die Reisenden in einem berühmten Haus; hier begegnen sich Tōkaidō und Kisokaidō wieder.",
        "Die Serie endet auf der Sanjō-Brücke über den Kamo-gawa in Kyōto. Mit der Nihonbashi bildet dieses Blatt den Rahmen der 55 Blätter."
      ],
      "works": [
        {
          "pid": "hgtk46",
          "text": [
            "Über Kameyama klaren Himmel und Burg nach dem Schnee auf; die weissen Hänge, die Mauer und die Reisenden auf der Strasse liegen unter einem sich öffnenden Blau.",
            "Kameyama ist die sechsundvierzigste Station. Zusammen mit Kanbara und Shōno gehört das Blatt zu den stimmungsbestimmenden Wetterbildern der Serie."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk47",
          "text": [
            "In Seki bricht das Gefolge früh aus dem Honjin auf, der offiziellen Herberge für Fürsten; Laternen und Träger stehen noch im Halbdunkel vor dem Tor.",
            "Seki ist die siebenundvierzigste Station, ein wichtiger Rastort vor den letzten Pässen nach Kyōto. Das Honjin war den hochrangigen Reisenden vorbehalten."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk48",
          "text": [
            "Bei Sakanoshita liegt der Fudesute-mine, der «Pinselwegwerf-Gipfel» der Überlieferung: die steile Felswand über der Schlucht, Reisende auf dem schmalen Weg.",
            "Sakanoshita ist die achtundvierzigste Station. Der Name des Berges spielt auf die Legende an, ein Maler habe hier den Pinsel weggeworfen, weil er die Wand nicht wiedergeben konnte."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk52",
          "text": [
            "In Kusatsu steht das berühmte Rasthaus an der Strasse; Reisende rasten, Speisen werden gereicht, die letzte Etappe nach Ōtsu und Kyōto beginnt.",
            "Kusatsu ist die zweiundfünfzigste Station, nahe dem Biwa-See, wo der Tōkaidō und die Kisokaidō sich wieder begegnen."
          ],
          "fact": "um 1833–1834. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hgtk54",
          "text": [
            "Die Reise endet auf der Sanjō-Brücke in Kyōto; ein Zug überschreitet den Kamo-gawa, die Stadt liegt am westlichen Ende des Tōkaidō. Mit Nihonbashi bildet dieses Blatt den Rahmen der Serie.",
            "Das Schlussblatt der Hōeidō-Serie – «Keishi Sanjō Ōhashi», die grosse Sanjō-Brücke der Hauptstadt – stammt aus der National Diet Library in Tokio."
          ],
          "fact": "um 1833–1834. National Diet Library, Tokio."
        }
      ]
    },
    {
      "id": "hiroshigeomi",
      "place": "Ōmi hakkei und der Ruhm der 1830er Jahre",
      "when": "um 1834–1835",
      "map": {
        "x": 54,
        "y": 72
      },
      "mapLabel": "Ōmi",
      "intro": [
        "Um 1834–1835 folgt die Serie «Ōmi hakkei no uchi», die acht Ansichten der Provinz Ōmi am Biwa-See, unweit von Kyōto. Das Schema der acht Ansichten ist älter und aus China übernommen; Hiroshige überträgt es auf Glocke, Regen, Gänse, Mond und Abendröte am See.",
        "Mit der Tōkaidō-Serie und den Ōmi-Ansichten ist Hiroshige in der Mitte der 1830er Jahre als Landschaftsmeister fest etabliert. Dieser erste Teil endet hier, am westlichen Ende der Strasse und am See.",
        "Der Weg geht weiter. Es folgen die Kisokaidō, die Hundert berühmten Ansichten von Edo und Hiroshiges Tod 1858. Davon erzählt der nächste Teil."
      ],
      "works": [
        {
          "pid": "hgomi_mii",
          "text": [
            "Über dem Tempel Mii-dera am Biwa-See liegt der Abend; die Glocke des Tempels gehört zu den acht klassischen Ansichten der Provinz Ōmi.",
            "Um 1834–1835 erscheint die Serie «Ōmi hakkei no uchi». Sie überträgt ein altes, aus China übernommenes Schema von acht Ansichten auf die Landschaft am Biwa-See, unweit von Kyōto. Das Blatt hängt im Cleveland Museum of Art."
          ],
          "fact": "um 1834–1835. Cleveland Museum of Art."
        },
        {
          "pid": "hgomi_kara",
          "text": [
            "In Karasaki steht die berühmte Kiefer im Nachtregen; das Geäst breitet sich weit über das Wasser des Biwa-Sees, die Nacht ist dunkel und nass.",
            "«Nachtregen in Karasaki» ist eine der bekanntesten Ōmi-Ansichten. Das Blatt der Serie um 1834–1835 hängt im Cleveland Museum of Art."
          ],
          "fact": "um 1834–1835. Cleveland Museum of Art."
        },
        {
          "pid": "hgomi_katada",
          "text": [
            "In Katada kehren die Gänse über dem See zurück; ein Steg führt ins Wasser, die Vögel stehen als Zeichen des Herbstes am Himmel.",
            "Das Blatt der Serie «Ōmi hakkei no uchi» bewahrt das Rijksmuseum in Amsterdam. Katada liegt am westlichen Ufer des Biwa-Sees."
          ],
          "fact": "um 1834–1835. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "hgomi_ishi",
          "text": [
            "Über dem Tempel Ishiyama steht der Herbstmond; der Tempel am Südende des Sees ist in der Überlieferung mit der Entstehung des «Genji-Monogatari» verbunden.",
            "Das Blatt gehört zur Serie der acht Ansichten von Ōmi, um 1834–1835, und liegt im Rijksmuseum in Amsterdam."
          ],
          "fact": "um 1834–1835. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "hgomi_seta",
          "text": [
            "In Seta liegt die Abendröte über der langen Brücke am Ausfluss des Biwa-Sees; der Himmel färbt sich, die Pfähle treten dunkel aus dem Wasser.",
            "Die Seta-Brücke ist ein klassischer Abschluss der acht Ansichten. Das Blatt der Serie um 1834–1835 bewahrt das Rijksmuseum in Amsterdam. Mit diesen Blättern ist Hiroshige in der Mitte der 1830er Jahre als Landschaftsmeister fest etabliert."
          ],
          "fact": "um 1834–1835. Rijksmuseum, Amsterdam."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
