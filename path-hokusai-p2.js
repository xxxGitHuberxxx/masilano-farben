// v7.1 Hokusai life journey, Part 2 (c. 1832–1849).
// Appends stations and works to the existing Hokusai path; does not rewrite Part 1.
// The 1834 Fugaku Hyakkei postscript is the same self-translation already used in Part 1;
// not a copy of a modern published English version.
(function () {
  var works = [
  {
    "id": "fujisundai",
    "title": "Der Fuji von Surugadai in Edo",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 東都駿台-Surugadai in Edo (Tōto Sundai), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141094.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "sazai",
    "title": "Die Sazai-Halle im Tempel der fünfhundert Arhats",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 五百らかん寺さざゐどう-Sazai Hall at the Temple of the Five Hundred Arhats (Gohyaku Rakanji Sazaidō), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141020.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "aoyamapine",
    "title": "Die Kissenkiefer in Aoyama",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 青山円座松-Cushion Pine at Aoyama (Aoyama enza no matsu), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140995.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "meguro",
    "title": "Unteres Meguro",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 下目黒-Lower Meguro (Shimo Meguro), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140998.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "sekiya",
    "title": "Das Dorf Sekiya am Sumida",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 隅田川関屋の里-Sekiya Village on the Sumida River (Sumidagawa Sekiya no sato), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141023.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "senju",
    "title": "Senju in der Provinz Musashi",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 武州千住-Senju in Musashi Province (Bushū Senju), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141087.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "fujitsukuda",
    "title": "Tsukudajima in der Provinz Musashi",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 武陽佃島-Tsukudajima in Musashi Province (Buyō Tsukudajima), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140986.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "ushibori",
    "title": "Ushibori in der Provinz Hitachi",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 常州牛掘-Ushibori in Hitachi Province (Jōshū Ushibori), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141057.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "tamagawa",
    "title": "Der Tama-Fluss in der Provinz Musashi",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 武州玉川-Fuji—The Tama River, Musashi Province, from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140975.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "shichiri",
    "title": "Shichirigahama in der Provinz Sagami",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 相州七里浜-Shichirigahama in Sagami Province (Sōshū Shichirigahama), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141074.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "katakura",
    "title": "Die Teeplantagen von Katakura in der Provinz Suruga",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 駿州片倉茶園の不二-Fuji from the Katakura Tea Fields in Suruga (Sunshū Katakura chaen no Fuji), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141048.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "climbing",
    "title": "Gruppen von Bergsteigern",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 諸人登山-Groups of Mountain Climbers (Shojin tozan), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141055.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "suwa",
    "title": "Der Suwa-See in der Provinz Shinano",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 信州諏訪湖-Lake Suwa in Shinano Province (Shinshū Suwako), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140970.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "kirifuri",
    "title": "Der Kirifuri-Wasserfall am Kurokami-Berg in der Provinz Shimotsuke",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Kirifuri Waterfall at Kurokami Mountain in Shimotsuke MET DP141256.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "yoshitsune",
    "title": "Der Wasserfall, an dem Yoshitsune sein Pferd wusch, in Yoshino",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Waterfall Where Yoshitsune Washed His Horse at Yoshino in Yamato Province (Washū Yoshino Yoshitsune uma arai no taki), from the series A Tour of Waterfalls in Various Provinces (Shokoku taki meguri) MET DP141250.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "amida",
    "title": "Der Amida-Wasserfall im hinteren Kisokaidō",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國瀧廻リ 木曽路ノ奥 阿彌陀ヶ瀧-The Amida Falls in the Far Reaches of the Kisokaidō Road (Kisoji no oku Amida-ga-taki), from the series A Tour of Waterfalls in Various Provinces (Shokoku taki meguri) MET DP141251.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "yoro",
    "title": "Der Yōrō-Wasserfall in der Provinz Mino",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國瀧廻リ 美濃ノ国養老の滝-Yōrō Waterfall in Mino Province (Mino no Yōrō no taki), from the series A Tour of Waterfalls in Various Provinces (Shokoku taki meguri) MET DP141263.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "ono",
    "title": "Der Ono-Wasserfall am Kisokaidō",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國瀧廻リ 木曾海道小野ノ瀑布-Ono Waterfall on the Kisokaidō (Kisokaidō Ono no bakufu), from the series A Tour of Waterfalls in Various Provinces (Shokoku taki meguri) MET DP141257.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "roben",
    "title": "Der Rōben-Wasserfall am Ōyama in der Provinz Sagami",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國瀧廻リ 相州大山ろうべんの瀧-Rōben Waterfall at Ōyama in Sagami Province (Sōshū Ōyama Rōben no taki), from the series A Tour of Waterfalls in Various Provinces (Shokoku taki meguri) MET DP141253.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "aoigaoka",
    "title": "Der Wasserfall von Aoigaoka in der östlichen Hauptstadt",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國瀧廻 東都葵ヶ岡の瀧-Fall of Aoiga Oka, Yedo MET DP141252.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "kiyotaki",
    "title": "Der Kiyotaki-Kannon-Wasserfall in Sakanoshita an der Tōkaidō",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Kiyotaki Kannon Waterfall at Sakanoshita on the Tōkaidō MET DP141258.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "kameido",
    "title": "Die Trommelbrücke am Tenjin-Schrein von Kameido",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國名橋奇覧 かめゐど天神たいこはし-The Arched Bridge at Kameido Tenjin Shrine (Kameido Tenjin Taikobashi), from the series Remarkable Views of Bridges in Various Provinces (Shokoku meikyō kiran) MET DP141275.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "tenman",
    "title": "Die Tenman-Brücke in der Provinz Settsu",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國名橋奇覧 摂洲天満橋-Tenman Bridge at Settsu Province (Sesshū Tenmanbashi), from the series Remarkable Views of Bridges in Various Provinces (Shokoku meikyō kiran) MET DP141277.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "yahagi",
    "title": "Die Yahagi-Brücke in Okazaki an der Tōkaidō",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Yahagi Bridge at Okazaki on the Tōkaidō (Tōkaidō Okazaki Yahagi no hashi), from the series Remarkable Views of Bridges in Various Provinces (Shokoku meikyō kiran) MET DP141238.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "fukui",
    "title": "Die Fukui-Brücke in der Provinz Echizen",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國名橋奇覧 ゑちぜんふくゐの橋-Fukui Bridge in Echizen Province (Echizen Fukui no hashi), from the series Remarkable Views of Bridges in Various Provinces (Shokoku meikyō kiran) MET DP141231.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "kintai",
    "title": "Die Kintai-Brücke in der Provinz Suō",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國名橋奇覧 すほうの国きんたいはし-Kintai Bridge in Suō Province (Suō no kuni Kintaibashi), from the series Remarkable Views of Bridges in Various Provinces (Shokoku meikyō kiran) MET DP141083.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "togetsu",
    "title": "Die Togetsu-Brücke in Arashiyama in der Provinz Yamashiro",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «諸國名橋奇覧 山城あらし山吐月橋 -Togetsu Bridge at Arashiyama in Yamashiro, from the series Remarkable Views of Bridges in Various Provinces (Shokoku meikyō kiran) MET DP141276.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "yatsuhashi",
    "title": "Alte Ansicht der Acht-Platten-Brücke in der Provinz Mikawa",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Katsushika Hokusai - An Ancient Picture of the Eight Part Bridge in Mikawa Province (from the se - 1942.147 - Cleveland Museum of Art.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "gyodo",
    "title": "Die Wolkenhängebrücke am Berg Gyōdō bei Ashikaga",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Hanging-cloud Bridge at Mount Gyōdō near Ashikaga (Ashikaga Gyōdōzan kumo no kakehashi), from the series Remarkable Views of Bridges in Various Provinces (Shokoku meikyō kiran) MET DP141243.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "tsuribashi",
    "title": "Die Hängebrücke an der Grenze der Provinzen Hida und Etchū",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Suspension Bridge on the Border of Hida and Etchū Provinces (Hietsu no sakai tsuribashi), from the series Remarkable Views of Bridges in Various Provinces (Shokoku meikyō kiran) MET DP141245.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "sanobashi",
    "title": "Alte Ansicht der Bootsbrücke von Sano in der Provinz Kōzuke",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Musée Guimet, Paris",
    "source": "Wikimedia Commons: «Bridge of boats at Sano Guimet EO993.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "tenpozan",
    "title": "Der Tenpōzan an der Mündung des Aji-Flusses in der Provinz Settsu",
    "artist": "Katsushika Hokusai",
    "year": "um 1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Tenpōzan at the Mouth of the Aji River in Settsu Province MET DP141237.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "peoniescanary",
    "title": "Pfingstrosen und Kanarienvogel",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Wikimedia Commons (Google Art Project)",
    "source": "Wikimedia Commons: «Katsushika Hokusai, published by Nishimuraya Yohachi (Eijudō) - Peonies and Canary (Shakuyaku, kanaari), from an untitled series known as Small Flowers - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bullfinch",
    "title": "Gimpel und Hängekirsche",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Bullfinch and Weeping Cherry (Uso, shidarezakura).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "irisesgh",
    "title": "Schwertlilien und Heuschrecke",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «葛飾北斎画 燕子花-Grasshopper and Iris MET DP141267.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "bellflower",
    "title": "Glockenblumen und Libelle",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «葛飾北斎画 桔梗に蜻蛉-Dragonfly and Bellflower MET DP141266.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "chrysbee",
    "title": "Chrysanthemen und Biene",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Centre Céramique, Maastricht",
    "source": "Wikimedia Commons: «Katsushika Hokusai (1760-1849), Chrysanten met honingbij.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "poppybloom",
    "title": "Mohnblumen",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Poppies -- Hokusai.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilybloom",
    "title": "Lilien",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Lilies -- Hokusai.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hydrangeasw",
    "title": "Hortensien und Schwalbe",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Hydrangea and Swallow -- Hokusai.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mornoglory",
    "title": "Prunkwinden und Laubfrosch",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Morning Glories and Tree-frog -- Hokusai.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "amiura",
    "title": "Der Fuji hinter einem Netz",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «Amiura no Fuji by Hokusai.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ashishiro",
    "title": "Der Fuji mit einem Gerüst",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «Ashishiro no Fuji by Hokusai.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "chinowa",
    "title": "Der Fuji am Chinowa-Ring",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Chinowa no fuji LCCN2009615137.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "futomi",
    "title": "Futomi no Fuji",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Futomi fuji LCCN2009615272.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mikiri",
    "title": "Mikiri no Fuji",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Mikiri no fuji LCCN2009615274.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "murasame",
    "title": "Der Fuji im vorbeiziehenden Regen",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Murasame no fuji LCCN2009615275.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "oigawafuji",
    "title": "Die Querung des Ōi-Flusses in Bottichen",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Ooigawa okegoe no fuji LCCN2009615273.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sankifuji",
    "title": "Der Fuji im tiefen Bergdunst",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Sanki fukaku katachi o kuzusu no fuji LCCN2009615135.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "artistsfuji",
    "title": "Künstler zeichnen den Berg Fuji",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "Musée Guimet, Paris",
    "source": "Wikimedia Commons: «Artists preparing to draw Mount Fuji Guimet EO1455b.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "fujitotomi",
    "title": "Der Fuji in den Bergen von Tōtomi",
    "artist": "Katsushika Hokusai",
    "year": "ab 1834",
    "museum": "Musée Guimet, Paris",
    "source": "Wikimedia Commons: «Mount Fuji from the Mountains of Totomi Hokusai Guimet MA7065b.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "choshisea",
    "title": "Chōshi in der Provinz Shimōsa",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1834",
    "museum": "Wikimedia Commons",
    "source": "Wikimedia Commons: «Choshi in the Simosa province.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kinufish",
    "title": "Korbfischerei am Kinu-Fluss",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1834",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Basket-fishing in the Kinu River (Kinugawa hachifuse) -- Hokusai.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "torchfish",
    "title": "Fischfang bei Fackellicht in der Provinz Kai",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1834",
    "museum": "Wikimedia Commons",
    "source": "Wikimedia Commons: «Fishing by Torchlight in Kai Province.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "gotowhale",
    "title": "Walfang vor den Gotō-Inseln",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1834",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Whaling off the Coast of the Goto Islands.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "nobotosea",
    "title": "Noboto in der Provinz Shimōsa",
    "artist": "Katsushika Hokusai",
    "year": "um 1832–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «千絵の海 下総登戸-Noboto at Shimōsa (Shimōsa Noboto), from the series One Thousand Pictures of the Sea (Chie no umi) MET DP140974.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "libai",
    "title": "Li Bai betrachtet einen Wasserfall",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «詩歌写真鏡 李白-Ri Haku from the series Mirrors of Japanese and Chinese Poems (Shiika shashin kyō) MET DP146848.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "sudongpo",
    "title": "Su Dongpo im Schnee",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1834",
    "museum": "Musée Guimet, Paris",
    "source": "Wikimedia Commons: «Su Dongpo Hokusai Guimet EO1704.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ministoru",
    "title": "Der Minister Tōru am See unter dem Mond",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1835",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Katsushika Hokusai - The Minister Toru Daijin Standing by a Lake Beneath a Crescent Moon, from t - 1916.1142 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "rushgather",
    "title": "Der Binsensammler",
    "artist": "Katsushika Hokusai",
    "year": "um 1833–1835",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Katsushika Hokusai - The Rush Gatherer, from the series A True Mirror of Chinese and Japanese Po - 1916.1145 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "yoshinoch",
    "title": "Kirschblüte in Yoshino",
    "artist": "Katsushika Hokusai",
    "year": "um 1833",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «雪月花 吉野-Cherry Blossoms at Yoshino (Yoshino), from the series Snow, Moon, and Flowers (Setsugekka) MET DP141232.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "yodomoons",
    "title": "Mondlicht auf dem Yodo-Fluss",
    "artist": "Katsushika Hokusai",
    "year": "um 1833",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «De Yodo rivier in maanlicht-Rijksmuseum RP-P-1980-4.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sumidasnow",
    "title": "Schnee auf dem Sumida",
    "artist": "Katsushika Hokusai",
    "year": "um 1833",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «De Sumida rivier in sneeuw-Rijksmuseum RP-P-1973-221.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "thundergod",
    "title": "Der Donnergott",
    "artist": "Katsushika Hokusai",
    "year": "1847",
    "museum": "Freer Gallery of Art, Smithsonian, Washington",
    "source": "Wikimedia Commons: «Katsushika Hokusai - Thunder God - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "tigersnow",
    "title": "Tiger im Schnee",
    "artist": "Katsushika Hokusai",
    "year": "1849",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Hokusai, Tiger in the Snow.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "phoenixob",
    "title": "Phönix (Festwagen-Decke)",
    "artist": "Katsushika Hokusai",
    "year": "um 1844",
    "museum": "Hokusaikan, Obuse",
    "source": "Wikimedia Commons: «Hokusai Phoenix.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dragonob",
    "title": "Drache (Festwagen-Decke)",
    "artist": "Katsushika Hokusai",
    "year": "um 1844",
    "museum": "Hokusaikan, Obuse",
    "source": "Wikimedia Commons: «Hokusai Dragon.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);

  var path = (window.PATHS || []).filter(function (p) { return p.id === 'hokusai'; })[0];
  if (!path) return;

  path.part = "Teil 1–2 · 1760–1849";
  path.subtitle = "Von Edo bis zu den letzten Bildern in Obuse";
  path.intro = "Reise mit Katsushika Hokusai durch sein ganzes Leben: von der Kindheit in Edo und der Lehre bei Katsukawa Shunshō über neue Namen, Surimono und die «Sechsunddreissig Ansichten des Berges Fuji» bis zu den Wasserfällen und Brücken der Provinzen, zu Blumen und Vögeln, zu den «Hundert Ansichten des Fuji», zu den Dichterbildern und schliesslich zu den späten Malereien in Obuse. Kurze Stationen, Bilder zum Ausmalen und eine Stimme aus seiner Nachschrift von 1834. Hokusai stirbt 1849 in Edo.";
  path.ending = [
  "1839 zerstört ein Brand in Edo seine Wohnung und viele Zeichnungen. In den 1840er Jahren hält er sich mehrmals in Obuse auf, bei Takai Kōzan. 1847 entsteht der Donnergott, 1849 der Tiger im Schnee.",
  "Hokusai stirbt in Edo am 18. Tag des vierten Monats im zweiten Jahr Kaei – dem 10. Mai 1849. Nach der damaligen Zählung ist er neunzig Jahre alt.",
  "Fünfzehn Jahre zuvor, 1834, hatte er in der Nachschrift zu den «Hundert Ansichten des Berges Fuji» geschrieben: «Seit meinem sechsten Jahr habe ich die Gewohnheit, die Gestalt der Dinge nachzubilden. Seit meinem fünfzigsten Jahr habe ich oft Bilder herausgegeben, aber was ich vor meinem siebzigsten Jahr gezeichnet habe, ist wahrhaftig nichts, das man gelten lassen könnte. Mit dreiundsiebzig habe ich ein wenig das Gerippe der Vögel, Tiere, Insekten und Fische und das Wachsen der Pflanzen begriffen. Darum will ich mit sechsundachtzig noch weiter kommen, mit neunzig die Sache noch tiefer erfassen, mit hundert wirklich das Wunderbare erreichen – und mit hundertzehn soll jeder Punkt und jeder Strich lebendig sein. Mögen Herren von langem Leben sehen, dass meine Worte nicht leere Einbildung sind.» Der Wunsch, hundertzehn zu werden, bleibt unerfüllt. Die Blätter und die späten Malereien bleiben."
];
  path.epilogue = "Katsushika Hokusai stirbt am 10. Mai 1849 in Edo, im Alter von neunzig Jahren nach der damaligen Zählung. Die «Sechsunddreissig Ansichten», die «Hundert Ansichten des Fuji», die Wasserfälle, die Brücken und die späten Malereien von Obuse bleiben.";
  if (path.map) {
    path.map.viewBox = "-6 0 228 218";
    path.map.lands = ["M28,122 C36,84 60,52 98,44 C136,36 164,46 188,64 C208,80 210,102 190,118 C170,132 142,138 120,132 C104,148 82,160 56,154 C36,148 24,136 28,122 Z"];
  }
  var loosen = {"edo": {"x": 164, "y": 68}, "sori": {"x": 198, "y": 90}, "azuma": {"x": 150, "y": 42}, "earlyland": {"x": 132, "y": 100}, "surimono": {"x": 188, "y": 116}, "fujiedo": {"x": 142, "y": 80, "mapLabel": "Edo-Fuji"}, "tokkaido": {"x": 118, "y": 124}, "provinces": {"x": 90, "y": 96}, "fujiicon": {"x": 112, "y": 138}};
  (path.stations || []).forEach(function (s) {
    if (loosen[s.id]) {
      s.map = { x: loosen[s.id].x, y: loosen[s.id].y };
      if (loosen[s.id].mapLabel) s.mapLabel = loosen[s.id].mapLabel;
    }
  });
  var stations = [
  {
    "id": "morefuji",
    "place": "Edo und die Provinzen · Weitere Fuji-Blätter",
    "when": "um 1830–1832",
    "map": {
      "x": 136,
      "y": 56
    },
    "mapLabel": "Fuji-Blätter",
    "intro": [
      "Die «Sechsunddreissig Ansichten des Berges Fuji» erscheinen um 1830 bis 1832 bei Nishimuraya Yohachi. Aus sechsunddreissig Blättern werden mit zehn weiteren sechsundvierzig.",
      "Hier folgen weitere Blätter dieser Serie – Ansichten aus Edo und den Provinzen, die über die schon gesehenen hinausgehen. Welches Blatt zu den späteren zehn gehört, ist nicht bei jedem Blatt sicher überliefert; deshalb stehen sie hier einfach als weitere Blätter der Folge.",
      "Der Fuji bleibt das Mass: mal nah, mal klein am Horizont, vom Tempel Dach, vom Strand, von den Teefeldern und vom See in Shinano aus gesehen."
    ],
    "works": [
      {
        "pid": "fujisundai",
        "text": [
          "Von einer Anhöhe in Edo blickt man über Dächer und Bäume zum Fuji. Surugadai liegt im Stadtteil Kanda.",
          "Das Blatt gehört zur Folge «Sechsunddreissig Ansichten des Berges Fuji», erschienen um 1830 bis 1832 bei Nishimuraya Yohachi."
        ],
        "fact": "«Der Fuji von Surugadai in Edo», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "sazai",
        "text": [
          "Auf einer hohen Tempelhalle stehen kleine Gestalten und schauen in die Weite, wo der Fuji steht.",
          "Die Sazai-Halle gehört zum Tempel der fünfhundert Arhats in Edo. Auch dieses Blatt stammt aus der Fuji-Serie um 1830 bis 1832."
        ],
        "fact": "«Die Sazai-Halle im Tempel der fünfhundert Arhats», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "aoyamapine",
        "text": [
          "Eine mächtige, rund gekappte Kiefer füllt den Vordergrund; der Fuji erscheint klein dahinter.",
          "Der Ort ist Aoyama in Edo. Das Blatt gehört zur selben Fuji-Serie, erschienen bei Nishimuraya Yohachi."
        ],
        "fact": "«Die Kissenkiefer in Aoyama», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "meguro",
        "text": [
          "Unter Kiefern und zwischen Hütten öffnet sich der Blick auf den Fuji. Meguro liegt im Süden Edos.",
          "Das Blatt «Unteres Meguro» gehört zu den weiteren Blättern der Fuji-Serie um 1830 bis 1832."
        ],
        "fact": "«Unteres Meguro», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "sekiya",
        "text": [
          "Reiter galoppieren auf einem Deich am Sumida entlang; der Fuji steht ruhig am Horizont.",
          "Sekiya war ein Dorf am Fluss, nördlich der Stadt. Das Blatt stammt aus der Fuji-Serie bei Nishimuraya Yohachi."
        ],
        "fact": "«Das Dorf Sekiya am Sumida», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "senju",
        "text": [
          "Am Fluss bei Senju stehen Menschen und Boote; der Fuji ist in der Ferne zu sehen.",
          "Senju lag in der Provinz Musashi, an einer wichtigen Strasse nach Norden. Auch dies ist ein Blatt der Fuji-Serie."
        ],
        "fact": "«Senju in der Provinz Musashi», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "fujitsukuda",
        "text": [
          "In der Abenddämmerung liegen Boote vor der Insel Tsukuda; der Fuji zeichnet sich gegen den Himmel ab.",
          "Tsukudajima liegt in der Mündung des Sumida. Das Blatt gehört zur Fuji-Serie um 1830 bis 1832."
        ],
        "fact": "«Tsukudajima in der Provinz Musashi», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "ushibori",
        "text": [
          "Ein grosses Boot mit einem geöffneten Dach liegt im Schilf; der Fuji steht über der Ebene von Hitachi.",
          "Ushibori liegt in der Provinz Hitachi, östlich von Edo. Das Blatt stammt aus der Fuji-Serie."
        ],
        "fact": "«Ushibori in der Provinz Hitachi», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "tamagawa",
        "text": [
          "Am Tama-Fluss stehen Reisende unter Bäumen; der Fuji erscheint über dem Wasser.",
          "Der Tama bildete lange die Grenze der Provinz Musashi. Das Blatt gehört zur Fuji-Serie um 1830 bis 1832."
        ],
        "fact": "«Der Tama-Fluss in der Provinz Musashi», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "shichiri",
        "text": [
          "Ein weiter Strand öffnet sich unter einem grossen Himmel; der Fuji steht über der Sagami-Bucht.",
          "Shichirigahama liegt an der Küste der Provinz Sagami. Das Blatt stammt aus der Fuji-Serie."
        ],
        "fact": "«Shichirigahama in der Provinz Sagami», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "katakura",
        "text": [
          "Zwischen Teesträuchern arbeiten Menschen in der Ebene von Suruga; der Fuji erhebt sich nah darüber.",
          "Katakura war für seine Teefelder bekannt. Das Blatt gehört zu den weiteren Ansichten der Fuji-Serie."
        ],
        "fact": "«Die Teeplantagen von Katakura in der Provinz Suruga», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "climbing",
        "text": [
          "Steigeisen und Stöcke in der Hand, ziehen Gruppen den Hang des Fuji hinauf; über ihnen liegt der Gipfel im Schnee.",
          "Das Blatt zeigt Besteiger des Berges selbst und gehört zur Fuji-Serie um 1830 bis 1832."
        ],
        "fact": "«Gruppen von Bergsteigern», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "suwa",
        "text": [
          "Über dem Suwa-See in der Provinz Shinano steht der Fuji in der Ferne; im Vordergrund liegen ein Schrein und Bäume.",
          "Der See liegt weit inland, in der heutigen Präfektur Nagano. Das Blatt stammt aus der Fuji-Serie."
        ],
        "fact": "«Der Suwa-See in der Provinz Shinano», Metropolitan Museum of Art, New York."
      }
    ]
  },
  {
    "id": "waterfalls",
    "place": "Die Provinzen · Wasserfälle",
    "when": "um 1832–1833",
    "map": {
      "x": 108,
      "y": 52
    },
    "mapLabel": "Kiso",
    "intro": [
      "Um 1832 bis 1833 erscheint bei Nishimuraya Yohachi die Folge «Rundreise zu den Wasserfällen der Provinzen» (Shokoku taki meguri). Sie umfasst acht Entwürfe, signiert oft als Saki no Hokusai Iitsu – «der frühere Hokusai Iitsu».",
      "Die Blätter führen von Shimotsuke und dem Kisokaidō bis nach Yoshino, Mino, Sagami und zurück nach Edo, nach Aoigaoka. Wasser, Fels und kleine Pilger oder Reisende füllen die hohen Formate."
    ],
    "works": [
      {
        "pid": "kirifuri",
        "text": [
          "Ein breiter, zerrissener Fall stürzt über eine Felswand; kleine Pilger stehen am Fuss und in den Seitenschluchten.",
          "Das Blatt gehört zur Folge «Rundreise zu den Wasserfällen der Provinzen» (Shokoku taki meguri), erschienen um 1832 bis 1833 bei Nishimuraya Yohachi. Der Kirifuri-Fall liegt am Kurokami-Berg in der Provinz Shimotsuke."
        ],
        "fact": "«Der Kirifuri-Wasserfall am Kurokami-Berg», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "yoshitsune",
        "text": [
          "Ein wasserreicher Fall fällt in ein klares Becken; Reiter und Männer halten Pferde am Ufer – der Ort, an dem die Legende Yoshitsune sein Pferd waschen lässt.",
          "Yoshino liegt in der Provinz Yamato. Das Blatt stammt aus derselben Wasserfall-Serie um 1832 bis 1833."
        ],
        "fact": "«Der Wasserfall, an dem Yoshitsune sein Pferd wusch», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "amida",
        "text": [
          "Ein schmaler, fast senkrechter Fall schneidet eine runde Felsnische – die Form erinnert an den Amida-Buddha.",
          "Der Fall liegt im hinteren Verlauf des Kisokaidō. Das Blatt gehört zur Wasserfall-Serie, erschienen bei Nishimuraya Yohachi."
        ],
        "fact": "«Der Amida-Wasserfall im hinteren Kisokaidō», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "yoro",
        "text": [
          "Zwischen Bäumen fällt ein weisser Vorhang ins Tal; Menschen stehen am Rand und blicken auf das Wasser.",
          "Der Yōrō-Fall in der Provinz Mino ist einer der acht Entwürfe der Serie «Rundreise zu den Wasserfällen der Provinzen»."
        ],
        "fact": "«Der Yōrō-Wasserfall in der Provinz Mino», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "ono",
        "text": [
          "Ein Fall stürzt neben einem Dorf und einer Brücke; Wäsche und Reisende säumen den Weg am Kisokaidō.",
          "Ono liegt an der alten Inlandstrasse. Das Blatt entstand um 1832 bis 1833 in der Wasserfall-Serie."
        ],
        "fact": "«Der Ono-Wasserfall am Kisokaidō», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "roben",
        "text": [
          "Unter einem schweren Fall sitzen und stehen Pilger in einer Felshöhle; der Wasserstaub füllt den Grund.",
          "Der Rōben-Fall liegt am heiligen Berg Ōyama in der Provinz Sagami. Das Blatt gehört zur Wasserfall-Serie um 1832 bis 1833."
        ],
        "fact": "«Der Rōben-Wasserfall am Ōyama in der Provinz Sagami», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "aoigaoka",
        "text": [
          "In Edo selbst fällt ein kleinerer Fall über eine Mauer in ein Becken; Spaziergänger halten sich am Geländer auf.",
          "Aoigaoka liegt in der östlichen Hauptstadt – in Edo. Auch dieses Blatt gehört zu den acht Entwürfen der Wasserfall-Serie."
        ],
        "fact": "«Der Wasserfall von Aoigaoka in der östlichen Hauptstadt», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "kiyotaki",
        "text": [
          "Ein Schrein steht auf einem Felsvorsprung neben dem Fall; der Weg der Tōkaidō führt bei Sakanoshita vorbei.",
          "Das Blatt zeigt den Kiyotaki-Kannon-Fall und gehört zur Serie «Rundreise zu den Wasserfällen der Provinzen»."
        ],
        "fact": "«Der Kiyotaki-Kannon-Wasserfall in Sakanoshita», Metropolitan Museum of Art, New York."
      }
    ]
  },
  {
    "id": "bridges",
    "place": "Die Provinzen · Berühmte Brücken",
    "when": "um 1834",
    "map": {
      "x": 68,
      "y": 128
    },
    "mapLabel": "Settsu",
    "intro": [
      "Um 1834 folgt, wiederum bei Nishimuraya Yohachi, die Serie «Merkwürdige Ansichten berühmter Brücken in den Provinzen» (Shokoku meikyō kiran). Sie umfasst typischerweise elf Entwürfe.",
      "Die Blätter reichen von der Trommelbrücke in Kameido in Edo über Osaka, Okazaki und Arashiyama bis zu Hängebrücken im Gebirge. Manche Blätter nennen sich ausdrücklich eine «alte Ansicht»."
    ],
    "works": [
      {
        "pid": "kameido",
        "text": [
          "Eine stark gewölbte Holzbrücke – die Trommelbrücke – führt über den Teich des Tenjin-Schreins in Kameido; der Fuji erscheint in der Ferne.",
          "Das Blatt gehört zur Folge «Merkwürdige Ansichten berühmter Brücken in den Provinzen» (Shokoku meikyō kiran), erschienen um 1834 bei Nishimuraya Yohachi. Kameido liegt in Edo."
        ],
        "fact": "«Die Trommelbrücke am Tenjin-Schrein von Kameido», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "tenman",
        "text": [
          "Eine lange, mit Laternen besetzte Bogenbrücke überspannt den Fluss; Boote fahren darunter durch.",
          "Die Tenman-Brücke liegt in der Provinz Settsu, im heutigen Osaka. Das Blatt stammt aus der Brücken-Serie um 1834."
        ],
        "fact": "«Die Tenman-Brücke in der Provinz Settsu», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "yahagi",
        "text": [
          "Eine sehr lange Pfahlbrücke zieht sich über einen breiten Fluss; der Fuji steht hinter der Ebene bei Okazaki.",
          "Okazaki liegt an der Tōkaidō. Das Blatt gehört zur Serie «Merkwürdige Ansichten berühmter Brücken in den Provinzen»."
        ],
        "fact": "«Die Yahagi-Brücke in Okazaki an der Tōkaidō», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "fukui",
        "text": [
          "Über einen stillen Flusslauf führt eine lange Brücke; Häuser und Bäume säumen das Ufer in der Provinz Echizen.",
          "Das Blatt der Brücken-Serie entstand um 1834 und erschien bei Nishimuraya Yohachi."
        ],
        "fact": "«Die Fukui-Brücke in der Provinz Echizen», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "kintai",
        "text": [
          "Fünf steinerne Bogen einer Brücke spannen sich über das Wasser; Berge stehen im Hintergrund.",
          "Die Kintai-Brücke in der Provinz Suō ist für ihre Bogenform bekannt. Das Blatt gehört zur Brücken-Serie um 1834."
        ],
        "fact": "«Die Kintai-Brücke in der Provinz Suō», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "togetsu",
        "text": [
          "Unter einem Vollmond führt eine Brücke durch die bewaldeten Hänge von Arashiyama; Boote liegen am Fluss.",
          "Arashiyama liegt in der Provinz Yamashiro, bei Kyōto. Das Blatt stammt aus der Brücken-Serie um 1834."
        ],
        "fact": "«Die Togetsu-Brücke in Arashiyama», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "yatsuhashi",
        "text": [
          "Acht schmale Stege knicken über einem Iris-Sumpf; die «Acht-Platten-Brücke» ist ein altes Motiv der Dichtung.",
          "Das Blatt zeigt eine «alte Ansicht» der Brücke in der Provinz Mikawa und gehört zur Brücken-Serie um 1834. Das Cleveland Museum of Art bewahrt diesen Abzug."
        ],
        "fact": "«Alte Ansicht der Acht-Platten-Brücke in der Provinz Mikawa», Cleveland Museum of Art."
      },
      {
        "pid": "gyodo",
        "text": [
          "Eine schmale Brücke hängt wie eine Wolke am bewaldeten Hang des Berges Gyōdō; kleine Gestalten schreiten darüber.",
          "Der Ort liegt bei Ashikaga. Das Blatt gehört zur Serie der berühmten Brücken, erschienen um 1834."
        ],
        "fact": "«Die Wolkenhängebrücke am Berg Gyōdō bei Ashikaga», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "tsuribashi",
        "text": [
          "Eine Hängebrücke spannt sich hoch über ein tiefes Tal; Reisende wagen den Übergang zwischen den Provinzen Hida und Etchū.",
          "Das Blatt der Brücken-Serie um 1834 zeigt die Grenze im Gebirge Zentraljapans."
        ],
        "fact": "«Die Hängebrücke an der Grenze der Provinzen Hida und Etchū», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "sanobashi",
        "text": [
          "Boote, aneinandergebunden, bilden eine Brücke über den Fluss; am Ufer stehen Häuser und Bäume.",
          "Die «alte Ansicht» der Bootsbrücke von Sano in der Provinz Kōzuke gehört zur Brücken-Serie um 1834. Dieser Abzug liegt im Musée Guimet in Paris (Inventar EO 993)."
        ],
        "fact": "«Alte Ansicht der Bootsbrücke von Sano», Musée Guimet, Paris."
      },
      {
        "pid": "tenpozan",
        "text": [
          "Ein kleiner künstlicher Hügel und eine Landungsbrücke liegen an der Mündung des Aji-Flusses; Schiffe füllen das Wasser.",
          "Der Tenpōzan liegt in der Provinz Settsu. Das Blatt wird zur Brücken-Serie um 1834 gezählt."
        ],
        "fact": "«Der Tenpōzan an der Mündung des Aji-Flusses», Metropolitan Museum of Art, New York."
      }
    ]
  },
  {
    "id": "kacho",
    "place": "Edo · Blumen und Vögel",
    "when": "um 1833–1834",
    "map": {
      "x": 204,
      "y": 108
    },
    "mapLabel": "Blumen",
    "intro": [
      "Um 1833 bis 1834 erscheint bei Nishimuraya Yohachi eine unbetitelte Folge von Blumen-und-Vögel-Bildern: Pfingstrosen, Schwertlilien, Mohn, Lilien, Hortensien und Prunkwinden, oft mit einem Vogel oder Insekt.",
      "Die flachen Farben und klaren Umrisse der Holzschnitte eignen sich gut zum Ausmalen. Verleger ist derselbe Nishimuraya Yohachi, der auch die Fuji-Ansichten, die Wasserfälle und die Brücken herausgibt."
    ],
    "works": [
      {
        "pid": "peoniescanary",
        "text": [
          "Grosse, volle Pfingstrosen füllen das Blatt; ein gelber Kanarienvogel sitzt zwischen den Blüten.",
          "Das Blatt erschien um 1833 bis 1834 bei Nishimuraya Yohachi, in einer unbetitelten Folge von Blumen-und-Vögel-Bildern."
        ],
        "fact": "«Pfingstrosen und Kanarienvogel», Wikimedia Commons (Google Art Project), gemeinfrei."
      },
      {
        "pid": "bullfinch",
        "text": [
          "Ein Gimpel sitzt auf einem Zweig blühender Hängekirsche; die Blüten fallen leicht nach unten.",
          "Das Blatt gehört zu derselben Blumen-und-Vögel-Folge um 1833 bis 1834. Dieser Abzug liegt im Art Institute of Chicago."
        ],
        "fact": "«Gimpel und Hängekirsche», Art Institute of Chicago."
      },
      {
        "pid": "irisesgh",
        "text": [
          "Schwertlilien stehen dicht beieinander; eine Heuschrecke sitzt auf einem Blatt.",
          "Das Metropolitan Museum datiert das Blatt in die späten 1820er oder um 1830; die unbetitelte Blumenfolge erscheint um 1833 bis 1834 bei Nishimuraya Yohachi."
        ],
        "fact": "«Schwertlilien und Heuschrecke», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "bellflower",
        "text": [
          "Violette Glockenblumen neigen sich über das Blatt; eine Libelle hat sich auf einem Stängel niedergelassen.",
          "Auch dieses Blatt gehört zur Blumen-und-Vögel-Folge, erschienen um 1833 bis 1834 bei Nishimuraya Yohachi."
        ],
        "fact": "«Glockenblumen und Libelle», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "chrysbee",
        "text": [
          "Rosa und weisse Chrysanthemen füllen das Bild; eine Biene fliegt vor den Blüten.",
          "Das Blatt der Blumenfolge um 1833 bis 1834 liegt im Centre Céramique in Maastricht."
        ],
        "fact": "«Chrysanthemen und Biene», Centre Céramique, Maastricht."
      },
      {
        "pid": "poppybloom",
        "text": [
          "Orangerote Mohnblüten öffnen sich über knospenden Kapseln und gezacktem Laub.",
          "Das Blatt gehört zur unbetitelten Blumenfolge um 1833 bis 1834. Dieser Abzug stammt aus dem Art Institute of Chicago."
        ],
        "fact": "«Mohnblumen», Art Institute of Chicago."
      },
      {
        "pid": "lilybloom",
        "text": [
          "Grosse Lilien hängen in einem Bogen über das Blatt; die Blüten sind hell, die Stängel dunkelgrün.",
          "Auch die Lilien gehören zur Blumenfolge, erschienen um 1833 bis 1834 bei Nishimuraya Yohachi. Abzug im Art Institute of Chicago."
        ],
        "fact": "«Lilien», Art Institute of Chicago."
      },
      {
        "pid": "hydrangeasw",
        "text": [
          "Eine Schwalbe streicht an einer Hortensie vorbei; die kugeligen Dolden füllen die rechte Seite.",
          "Das Blatt der Blumen-und-Vögel-Folge um 1833 bis 1834 liegt im Art Institute of Chicago."
        ],
        "fact": "«Hortensien und Schwalbe», Art Institute of Chicago."
      },
      {
        "pid": "mornoglory",
        "text": [
          "Prunkwinden winden sich über das Blatt; ein kleiner Laubfrosch sitzt zwischen den Blüten.",
          "Das Blatt gehört zur selben Folge um 1833 bis 1834. Abzug im Art Institute of Chicago."
        ],
        "fact": "«Prunkwinden und Laubfrosch», Art Institute of Chicago."
      }
    ]
  },
  {
    "id": "chieumi",
    "place": "Küsten und Flüsse · Tausend Bilder vom Meer",
    "when": "um 1832–1834",
    "map": {
      "x": 210,
      "y": 78
    },
    "mapLabel": "Chōshi",
    "intro": [
      "Um 1832 bis 1834 erscheint die Folge «Tausend Bilder vom Meer» (Chie no umi): Fischer, Küsten und Flüsse, von Chōshi an der offenen See bis zu stillen Ufern in Shimōsa und Kai.",
      "Die Blätter sind kleiner als die grossen Landschaften der Fuji-Serie, aber in der Zeichnung des Wassers ebenso bestimmt."
    ],
    "works": [
      {
        "pid": "choshisea",
        "text": [
          "Eine steile, dunkle Welle hebt ein Boot bei Chōshi; der Schaum bricht über den Bug.",
          "Das Blatt gehört zur Folge «Tausend Bilder vom Meer» (Chie no umi), erschienen um 1832 bis 1834. Chōshi liegt in der Provinz Shimōsa, an der offenen Küste."
        ],
        "fact": "«Chōshi in der Provinz Shimōsa», Wikimedia Commons, gemeinfrei."
      },
      {
        "pid": "kinufish",
        "text": [
          "Am Kinu-Fluss stehen Männer im seichten Wasser und heben Körbe; der Uferhang ist rotbraun.",
          "Das Blatt der Meeres- und Flussserie um 1832 bis 1834 liegt im Museum of Fine Arts in Boston."
        ],
        "fact": "«Korbfischerei am Kinu-Fluss», Museum of Fine Arts, Boston."
      },
      {
        "pid": "torchfish",
        "text": [
          "Bei Nacht leuchten Fackeln über dem Wasser; Männer fischen in der Provinz Kai am Ufer.",
          "Das Blatt «Fischfang bei Fackellicht» gehört zur Folge «Tausend Bilder vom Meer», um 1832 bis 1834."
        ],
        "fact": "«Fischfang bei Fackellicht in der Provinz Kai», Wikimedia Commons, gemeinfrei."
      },
      {
        "pid": "gotowhale",
        "text": [
          "Vor den Gotō-Inseln umringen Boote einen Wal; Männer auf den Schiffen halten Harpunen und Seile.",
          "Das Blatt der Serie «Tausend Bilder vom Meer» um 1832 bis 1834 liegt im Art Institute of Chicago."
        ],
        "fact": "«Walfang vor den Gotō-Inseln», Art Institute of Chicago."
      },
      {
        "pid": "nobotosea",
        "text": [
          "An einem stillen Strand von Noboto stehen Menschen im flachen Wasser; Schirme und Boote säumen das Ufer.",
          "Noboto liegt in der Provinz Shimōsa. Das Blatt der Meeres-Serie um 1832 bis 1834 hängt im Metropolitan Museum of Art."
        ],
        "fact": "«Noboto in der Provinz Shimōsa», Metropolitan Museum of Art, New York."
      }
    ]
  },
  {
    "id": "hyakkei",
    "place": "Nagoya und Edo · Hundert Ansichten des Fuji",
    "when": "ab 1834",
    "map": {
      "x": 100,
      "y": 116
    },
    "mapLabel": "Hyakkei",
    "intro": [
      "1834 erscheint der erste Band der «Hundert Ansichten des Berges Fuji» (Fugaku Hyakkei), zunächst bei Eirakuya Tōshirō in Nagoya. Es folgen drei Bände, in Schwarz, Grau und oft einem Hauch Fleischrosa.",
      "In der Nachschrift zum ersten Band schreibt Hokusai, unter dem Namen Gakyō Rōjin Manji – «der bildverrückte alte Mann Manji»: «Seit meinem sechsten Jahr habe ich die Gewohnheit, die Gestalt der Dinge nachzubilden. Seit meinem fünfzigsten Jahr habe ich oft Bilder herausgegeben, aber was ich vor meinem siebzigsten Jahr gezeichnet habe, ist wahrhaftig nichts, das man gelten lassen könnte. Mit dreiundsiebzig habe ich ein wenig das Gerippe der Vögel, Tiere, Insekten und Fische und das Wachsen der Pflanzen begriffen. Darum will ich mit sechsundachtzig noch weiter kommen, mit neunzig die Sache noch tiefer erfassen, mit hundert wirklich das Wunderbare erreichen – und mit hundertzehn soll jeder Punkt und jeder Strich lebendig sein. Mögen Herren von langem Leben sehen, dass meine Worte nicht leere Einbildung sind.»",
      "Die Buchseiten zeigen den Berg hinter einem Netz, durch einen heiligen Ring, im Regen, an einer Furt – immer wieder neu."
    ],
    "works": [
      {
        "pid": "amiura",
        "text": [
          "Ein grosses Fischernetz füllt fast die ganze Seite; dahinter zeichnet sich der Fuji ab.",
          "Das Blatt «Amiura no Fuji» stammt aus den «Hundert Ansichten des Berges Fuji» (Fugaku Hyakkei), die ab 1834 in drei Bänden erscheinen, zunächst bei Eirakuya Tōshirō in Nagoya. Dieser Abzug liegt in der National Diet Library in Tokio."
        ],
        "fact": "«Der Fuji hinter einem Netz», National Diet Library, Tokio."
      },
      {
        "pid": "ashishiro",
        "text": [
          "Männer arbeiten auf einem hohen Gerüst aus Bambus und Brettern; der Fuji steht hinter den Stangen.",
          "Auch «Ashishiro no Fuji» gehört zu den «Hundert Ansichten», ab 1834. Der Abzug stammt aus der National Diet Library in Tokio."
        ],
        "fact": "«Der Fuji mit einem Gerüst», National Diet Library, Tokio."
      },
      {
        "pid": "chinowa",
        "text": [
          "Menschen schreiten durch einen grossen heiligen Ring aus Schilf; durch die Öffnung erscheint der Fuji.",
          "Der Chinowa-Ring gehört zu Sommerriten der Reinigung. Das Blatt stammt aus den «Hundert Ansichten des Berges Fuji». Dieser Abzug liegt in der Library of Congress in Washington."
        ],
        "fact": "«Der Fuji am Chinowa-Ring», Library of Congress, Washington."
      },
      {
        "pid": "futomi",
        "text": [
          "Hinter Bäumen und einem Dorfhang zeichnet sich der Fuji über einer weiten Fläche ab.",
          "Das Blatt «Futomi no Fuji» gehört zu den «Hundert Ansichten», ab 1834. Abzug in der Library of Congress."
        ],
        "fact": "«Futomi no Fuji», Library of Congress, Washington."
      },
      {
        "pid": "mikiri",
        "text": [
          "Vor einem Haus mit vorgezogenem Dach arbeitet ein Mann; der Fuji erscheint nur zum Teil, von der Architektur angeschnitten.",
          "Der Titel «Mikiri no Fuji» nennt eine angeschnittene Ansicht des Berges. Das Blatt stammt aus den «Hundert Ansichten». Abzug in der Library of Congress."
        ],
        "fact": "«Mikiri no Fuji», Library of Congress, Washington."
      },
      {
        "pid": "murasame",
        "text": [
          "Reisende in Hut und Regenkleid gehen durch einen Schauer; der Fuji steht blass hinter dem Regen.",
          "«Murasame no Fuji» – der Fuji im vorbeiziehenden Regen – gehört zu den «Hundert Ansichten», ab 1834. Abzug in der Library of Congress."
        ],
        "fact": "«Der Fuji im vorbeiziehenden Regen», Library of Congress, Washington."
      },
      {
        "pid": "oigawafuji",
        "text": [
          "Träger waten mit Reisenden in hölzernen Bottichen durch den Ōi-Fluss; der Fuji begleitet die Querung.",
          "Die Furt des Ōi war eine bekannte Stelle der Tōkaidō. Das Blatt stammt aus den «Hundert Ansichten». Abzug in der Library of Congress."
        ],
        "fact": "«Die Querung des Ōi-Flusses in Bottichen», Library of Congress, Washington."
      },
      {
        "pid": "sankifuji",
        "text": [
          "Im tiefen Dunst der Berge verliert der Fuji klare Konturen; im Vordergrund stehen Bäume und ein Haus.",
          "Der überlieferte Titel spricht davon, dass sich die Form des Berges im Bergdunst auflöst. Das Blatt gehört zu den «Hundert Ansichten». Abzug in der Library of Congress."
        ],
        "fact": "«Der Fuji im tiefen Bergdunst», Library of Congress, Washington."
      },
      {
        "pid": "artistsfuji",
        "text": [
          "Auf einer Wiese richten Männer Pulte und Pinsel; der Fuji steht hinter einer Kiefer und einem Feld.",
          "Das Blatt stammt aus den «Hundert Ansichten des Berges Fuji». Dieser Abzug wird im Musée Guimet in Paris bewahrt (EO 1455)."
        ],
        "fact": "«Künstler zeichnen den Berg Fuji», Musée Guimet, Paris."
      },
      {
        "pid": "fujitotomi",
        "text": [
          "Durch das Geäst eines Baumes und über ein Dach sieht man den Fuji; die Berge von Tōtomi liegen davor.",
          "Auch dieses Blatt der «Hundert Ansichten» liegt im Musée Guimet in Paris (MA 7065)."
        ],
        "fact": "«Der Fuji in den Bergen von Tōtomi», Musée Guimet, Paris."
      }
    ]
  },
  {
    "id": "poets",
    "place": "Dichterbilder und Setsugekka",
    "when": "um 1833–1835",
    "map": {
      "x": 78,
      "y": 148
    },
    "mapLabel": "Yoshino",
    "intro": [
      "Um 1833 bis 1835 erscheinen hohe, schmale Blätter zu japanischen und chinesischen Dichtern: «Spiegel japanischer und chinesischer Gedichte» (Shiika shashin kyō). Li Bai blickt zu einem Fall, Su Dongpo reitet durch den Schnee, der Minister Tōru steht am See.",
      "Daneben steht die kleine Folge «Schnee, Mond und Blumen» (Setsugekka), um 1833 bei Nishimuraya Yohachi: Kirschblüte in Yoshino, Mondlicht auf dem Yodo, Schnee auf dem Sumida.",
      "In diesen Jahren führt Hokusai den Namen Gakyō Rōjin Manji – der bildverrückte alte Mann."
    ],
    "works": [
      {
        "pid": "libai",
        "text": [
          "Der chinesische Dichter Li Bai steht mit einem Begleiter auf einem Felsvorsprung und blickt zu einem hohen Wasserfall hinauf.",
          "Das Blatt gehört zur Folge «Spiegel japanischer und chinesischer Gedichte» (Shiika shashin kyō), erschienen um 1833 bis 1834. Abzug im Metropolitan Museum of Art."
        ],
        "fact": "«Li Bai betrachtet einen Wasserfall», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "sudongpo",
        "text": [
          "Ein Reiter mit einem grossen runden Hut zieht durch den Schnee; ein Diener geht neben dem Pferd, der Himmel ist voller Flocken.",
          "Das Musée Guimet in Paris identifiziert die Gestalt als den chinesischen Dichter Su Dongpo. Das Blatt gehört zur Folge der Dichterbilder um 1833 bis 1834 (Inventar EO 1704)."
        ],
        "fact": "«Su Dongpo im Schnee», Musée Guimet, Paris."
      },
      {
        "pid": "ministoru",
        "text": [
          "Unter einer Mondsichel stehen und sitzen drei Männer an einem See; Boote liegen still, der Fuji dämmert am Horizont.",
          "Das Cleveland Museum of Art nennt den hohen Minister Tōru (822–895), Sohn eines Kaisers, als die dargestellte Gestalt. Das Blatt gehört zur Dichterfolge um 1833 bis 1835."
        ],
        "fact": "«Der Minister Tōru am See unter dem Mond», Cleveland Museum of Art."
      },
      {
        "pid": "rushgather",
        "text": [
          "Ein Mann trägt Bündel von Binsen über eine kleine Brücke; über dem Schilf steht der Mond.",
          "Das Blatt «Der Binsensammler» gehört zur Folge «Spiegel japanischer und chinesischer Gedichte». Abzug im Cleveland Museum of Art."
        ],
        "fact": "«Der Binsensammler», Cleveland Museum of Art."
      },
      {
        "pid": "yoshinoch",
        "text": [
          "Kirschblüte füllt die Berge von Yoshino; unter den Bäumen gehen und reiten kleine Gestalten.",
          "Das Blatt gehört zur dreiteiligen Folge «Schnee, Mond und Blumen» (Setsugekka), erschienen um 1833 bei Nishimuraya Yohachi."
        ],
        "fact": "«Kirschblüte in Yoshino», Metropolitan Museum of Art, New York."
      },
      {
        "pid": "yodomoons",
        "text": [
          "Bei Vollmond fahren Boote auf dem Yodo-Fluss; im Vordergrund liegen Dächer, in der Ferne Berge.",
          "Das Blatt «Mondlicht auf dem Yodo-Fluss» gehört zur Folge «Schnee, Mond und Blumen» um 1833. Dieser Abzug liegt im Rijksmuseum in Amsterdam."
        ],
        "fact": "«Mondlicht auf dem Yodo-Fluss», Rijksmuseum, Amsterdam."
      },
      {
        "pid": "sumidasnow",
        "text": [
          "Der Sumida liegt unter Schnee; ein Boot und ein kleiner Schrein stehen am winterlichen Ufer.",
          "Das dritte Blatt der Folge «Schnee, Mond und Blumen» um 1833. Abzug im Rijksmuseum in Amsterdam."
        ],
        "fact": "«Schnee auf dem Sumida», Rijksmuseum, Amsterdam."
      }
    ]
  },
  {
    "id": "obuse",
    "place": "Obuse und Edo · Die letzten Jahre",
    "when": "1844–1849",
    "map": {
      "x": 70,
      "y": 66
    },
    "mapLabel": "Obuse",
    "intro": [
      "1839 zerstört ein Brand in Edo seine Wohnung und viele Zeichnungen. In den späten Jahren arbeitet seine Tochter Katsushika Ōi, selbst Malerin, mit ihm.",
      "In den 1840er Jahren hält er sich mehrmals in Obuse in der Provinz Shinano auf, auf Einladung des Mäzens Takai Kōzan. Für Festwagen malt er unter anderem einen Phönix und einen Drachen; beide Decken werden im Hokusaikan in Obuse bewahrt.",
      "1847 entsteht in Edo die Hängerolle des Donnergotts, signiert im Alter von achtundachtzig Jahren. 1849, im Todesjahr, malt er den Tiger im Schnee."
    ],
    "works": [
      {
        "pid": "phoenixob",
        "text": [
          "Ein Phönix in Rot, Grün und Gold windet sich auf dunklem Grund – die bemalte Decke eines Festwagens.",
          "In den 1840er Jahren hält sich Hokusai mehrmals in Obuse in der Provinz Shinano auf, auf Einladung des Mäzens Takai Kōzan. Der Phönix gehört zu den Festwagen-Malereien; er wird im Hokusaikan in Obuse bewahrt."
        ],
        "fact": "«Phönix», Festwagen-Decke, um 1844, Hokusaikan, Obuse."
      },
      {
        "pid": "dragonob",
        "text": [
          "Ein Drache windet sich auf rotem Grund, umgeben von stilisierten Wellen – ebenfalls eine Festwagen-Decke aus Obuse.",
          "Das Gegenstück zum Phönix entsteht um 1844, in denselben Jahren der Aufenthalte bei Takai Kōzan. Auch dieser Drache wird im Hokusaikan in Obuse bewahrt."
        ],
        "fact": "«Drache», Festwagen-Decke, um 1844, Hokusaikan, Obuse."
      },
      {
        "pid": "thundergod",
        "text": [
          "Im oberen Teil der langen Malerei schwebt der Donnergott zwischen schwarzen, gespritzten Wolken; rote Linien zucken wie Blitze.",
          "Das Bild entsteht 1847. Hokusai signiert es im Alter von achtundachtzig Jahren (nach westlicher Rechnung siebenundachtzig). Es hängt in der Freer Gallery of Art, Smithsonian Institution, Washington (F1900.47)."
        ],
        "fact": "«Der Donnergott», 1847, Freer Gallery of Art, Smithsonian, Washington."
      },
      {
        "pid": "tigersnow",
        "text": [
          "Ein Tiger schreitet durch fallenden Schnee, den Kopf erhoben; die Inschrift nennt das Jahr 1849.",
          "Die Hängerolle in Tusche und Farbe auf Seide entsteht im Todesjahr Hokusais. Sie befindet sich in Privatbesitz."
        ],
        "fact": "«Tiger im Schnee», 1849, Privatbesitz. Quelle: Wikimedia Commons, gemeinfrei."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
