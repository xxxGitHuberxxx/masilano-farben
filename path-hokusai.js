// v7.0 Hokusai life journey, Part 1 (1760–c. 1832).
// Appends to PATH_WORKS / PATHS; does not rewrite Van Gogh or Monet.
// Reuses gallery works wave, redfuji, thunder by pid only (not listed in works[]).
// The 1834 postscript to Fugaku Hyakkei is self-translated from the Japanese;
// not a copy of a modern published English version.
(function () {
  var works = [
  {
    "id": "shopfront",
    "title": "Vor einem Laden",
    "artist": "Katsushika Hokusai",
    "year": "1780",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Katsushika Hokusai - In Front of a Shop - 14.76.34 - Metropolitan Museum of Art.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "spinsilk",
    "title": "Frau beim Seidenspinnen",
    "artist": "Katsushika Hokusai",
    "year": "1790",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Katsushika Hokusai - Woman Spinning Silk - 14.76.30 - Metropolitan Museum of Art.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sumowrest",
    "title": "Die Sumoringer Takaneyama Yoichiemon und Sendagawa Kichigorō",
    "artist": "Katsushika Hokusai",
    "year": "um 1790–1793",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «高根山与一右ェ門 千田川吉五郎-The Sumo Wrestlers Takaneyama Yoichiemon and Sendagawa Kichigorō MET DP148842.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "sorinets",
    "title": "Frauen betrachten Fischer mit Netzen",
    "artist": "Katsushika Hokusai",
    "year": "um 1794–1798",
    "museum": "Musée Guimet, Paris (Sammlung Camondo)",
    "source": "Wikimedia Commons: «Women contemplating fishermen with nets-IMG 9297.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dyers",
    "title": "Färber bei der Arbeit",
    "artist": "Katsushika Hokusai",
    "year": "1795",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Katsushika Hokusai - Dyers at Work - 1920.525 - Cleveland Museum of Art.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "soritable",
    "title": "Frau am Maltisch",
    "artist": "Katsushika Hokusai",
    "year": "1799",
    "museum": "Musée Guimet, Paris (Sammlung Camondo)",
    "source": "Wikimedia Commons: «Woman near a painting table-IMG 9346.JPG», gemeinfrei (Public Domain)"
  },
  {
    "id": "fujisuri",
    "title": "Blick auf den Berg Fuji",
    "artist": "Katsushika Hokusai",
    "year": "1797",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Gezicht op de berg Fuji, AK-MAK-1548.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "sumidawalk",
    "title": "Frauen und Kinder am Sumida-Fluss",
    "artist": "Katsushika Hokusai",
    "year": "1800",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Katsushika Hokusai - Women and Children Walking Along the Sumida River - 1943.2 - Cleveland Museum of Art.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "azumatsukuda",
    "title": "Tsukuda",
    "artist": "Katsushika Hokusai",
    "year": "um 1802",
    "museum": "Los Angeles County Museum of Art",
    "source": "Wikimedia Commons: «Tsukuda LACMA M.2006.136.199a-b.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ueno",
    "title": "Ueno",
    "artist": "Katsushika Hokusai",
    "year": "um 1802",
    "museum": "Los Angeles County Museum of Art",
    "source": "Wikimedia Commons: «Ueno LACMA M.2006.136.201a-b.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mimeguri",
    "title": "Der Schrein Mimeguri",
    "artist": "Katsushika Hokusai",
    "year": "um 1802",
    "museum": "Los Angeles County Museum of Art",
    "source": "Wikimedia Commons: «Mimeguri Shrine LACMA M.2006.136.209a-b.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "umeyashiki",
    "title": "Umeyashiki",
    "artist": "Katsushika Hokusai",
    "year": "um 1802",
    "museum": "Los Angeles County Museum of Art",
    "source": "Wikimedia Commons: «Umeyashiki LACMA M.2006.136.202a-b.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ezoshi",
    "title": "Der Bilderbuchladen",
    "artist": "Katsushika Hokusai",
    "year": "1802",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Winkel van prentenuitgever Ezoshi, RP-P-2015-26-1896.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "yanagi",
    "title": "Regen an der neuen Yanagi-Brücke",
    "artist": "Katsushika Hokusai",
    "year": "1806",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «新柳橋の白雨-Shower at the New Yanagi Bridge MET DP140972.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "teaceremony",
    "title": "Geräte für die Teezeremonie",
    "artist": "Katsushika Hokusai",
    "year": "um 1794–1804",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Benodigdheden voor de thee ceremonie, AK-MAK-975.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "cherryview",
    "title": "Beim Betrachten der Kirschblüte",
    "artist": "Katsushika Hokusai",
    "year": "um 1810–1820",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Het bekijken van de kersenbloesem, AK-MAK-1586.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "peonies",
    "title": "Korb mit Pfingstrosen",
    "artist": "Katsushika Hokusai",
    "year": "1810 oder 1814",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Katsushika Hokusai - Basket of Peonies - 1943.5 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "manzai",
    "title": "Manzai-Spieler",
    "artist": "Katsushika Hokusai",
    "year": "1816",
    "museum": "Minneapolis Institute of Art",
    "source": "Wikimedia Commons: «Katsushika Hokusai - Manzai Performers - 74.1.198 - Minneapolis Institute of Art.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lostlove",
    "title": "Die Schale der verlorenen Liebe (Katashigai)",
    "artist": "Katsushika Hokusai",
    "year": "1821",
    "museum": "Art Gallery of South Australia, Adelaide",
    "source": "Wikimedia Commons: «Katsushika Hokusai - Lost-love shell (Katashigai) - from the series 'A shell-matching game with Genroku thirty-six linked... - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "grasses",
    "title": "Die Schale der unzähligen Gräser (Chigusagai)",
    "artist": "Katsushika Hokusai",
    "year": "1821",
    "museum": "Art Gallery of South Australia, Adelaide",
    "source": "Wikimedia Commons: «Katsushika Hokusai - Myriad grasses shell (Chigusagai) - from the series 'A shell-matching game with Genroku thirty-six l... - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "cherryshell",
    "title": "Die Kirschblütenschale (Sakura-gai)",
    "artist": "Katsushika Hokusai",
    "year": "wahrscheinlich 1821",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Sakura-gai-元禄歌仙貝合-Cherry Shell, from the series Genroku Poetry Shell Games MET DP123641.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hatsuuma",
    "title": "Tempelbesuch am Hatsuuma-Fest",
    "artist": "Katsushika Hokusai",
    "year": "1822",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Tempelbezoek tijdens het Hatsuuma feest Hatsuuma mairi (titel op object) Een serie met paarden (serietitel) Umazukushi (serietitel op object), RP-P-1958-284.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "umasenbetsu",
    "title": "Abschiedsgeschenk für das Pferd",
    "artist": "Katsushika Hokusai",
    "year": "1822",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Een afscheidscadeau voor het paard Uma no senbetsu (titel op object) Een serie met paarden (serietitel) Umazukushi (serietitel op object), RP-P-1954-562.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "watakuri",
    "title": "Die Baumwollmaschine (Watakuri)",
    "artist": "Katsushika Hokusai",
    "year": "1822",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Katoenverwerker met zadel Watakuri uma (titel op object) Een serie met paarden (serietitel) Umazukushi (serietitel op object), RP-P-1958-296.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "fujinibon",
    "title": "Nihonbashi in Edo",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 江戸日本橋-Nihonbashi in Edo (Edo Nihonbashi), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141003.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "fujimitsui",
    "title": "Der Mitsui-Laden in Suruga-chō in Edo",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 江都駿河町三井見世略図-Mitsui Shop at Surugachō in Edo (Edo Surugachō Mitsui mise ryaku zu), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141009.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "honganji",
    "title": "Der Hongan-ji in Asakusa in Edo",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 東都浅草本願寺-Honganji at Asakusa in Edo (Tōto Asakusa Honganji), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141006.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "mannen",
    "title": "Unter der Mannen-Brücke in Fukagawa",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 深川万年橋下-Under the Mannen Bridge at Fukagawa (Fukagawa Mannenbashi shita), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141017.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "tatekawa",
    "title": "Tatekawa in Honjo",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 本所立川-Tatekawa in Honjō (Honjō Tatekawa), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141077.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "koishikawa",
    "title": "Schneemorgen in Koishikawa",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 礫川雪の旦-Morning after the Snow at Koishikawa in Edo (Koishikawa yuki no ashita), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141050.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "onden",
    "title": "Das Wasserrad in Onden",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 隠田の水車-The Waterwheel at Onden (Onden no suisha), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141060.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "ryogoku",
    "title": "Abend über der Ryōgoku-Brücke, vom Onmaya-Ufer",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Viewing the Sunset over Ryōgoku Bridge from the Onmaya Embankment (Onmayagashi yori Ryōgokubashi sekiyō o miru), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141096.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hodogaya",
    "title": "Hodogaya an der Tōkaidō",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 東海道保土ケ谷-Hodogaya on the Tōkaidō (Tōkaidō Hodogaya), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141025.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "gotenyama",
    "title": "Fuji vom Gotenyama in Shinagawa",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 東海道品川御殿山の不二-Fuji from Gotenyama at Shinagawa on the Tōkaidō (Tōkaidō Shinagawa Gotenyama no Fuji), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141091.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "ejiri",
    "title": "Ejiri in der Provinz Suruga",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 駿州江尻-Ejiri in Suruga Province (Sunshū Ejiri), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140977.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "yoshida",
    "title": "Yoshida an der Tōkaidō",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 東海道吉田-Yoshida on the Tōkaidō (Tōkaidō Yoshida), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141069.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "kanaya",
    "title": "Der Fuji von Kanaya an der Tōkaidō",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 東海道金谷の不二-Fuji Seen from Kanaya on the Tōkaidō (Tōkaidō Kanaya no Fuji), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei MET DP141070.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "fujimi",
    "title": "Fujimigahara in der Provinz Owari",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 尾州不二見原-Fujimigahara in Owari Province (Bishū Fujimigahara), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140982.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "totomi",
    "title": "In den Bergen der Provinz Tōtomi",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 遠江山中-In the Mountains of Tōtomi Province (Tōtomi sanchū), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140988.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "mishima",
    "title": "Der Mishima-Pass in der Provinz Kai",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 甲州三島越-Mishima Pass in Kai Province (Kōshū Mishima goe), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140981.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "inume",
    "title": "Der Inume-Pass in der Provinz Kai",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 甲州犬目峠-Fuji from Inume (?) Pass MET DP141029.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "misaka",
    "title": "Spiegelung im See bei Misaka in der Provinz Kai",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 甲州三坂水面-Reflection in Lake at Misaka in Kai Province (Kōshū Misaka suimen), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140993.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hakone",
    "title": "Der See von Hakone in der Provinz Sagami",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 相州箱根湖水-The Lake at Hakone in Sagami Province (Sōshū Hakone kosui), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140992.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "enoshima",
    "title": "Enoshima in der Provinz Sagami",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 相州江の島-Enoshima in Sagami Province (Sōshū Enoshima), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141035.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "isawa",
    "title": "Morgendämmerung in Isawa in der Provinz Kai",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 甲州伊沢暁-Dawn at Isawa in Kai Province (Kōshū Isawa no akatsuki), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141014.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "minobu",
    "title": "Der Fuji vom Minobu-Fluss, von der anderen Seite",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 身延川裏不二-View from the Other Side of Fuji from the Minobu River (Minobugawa ura Fuji), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140978.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "kajikazawa",
    "title": "Kajikazawa in der Provinz Kai",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 甲州石班沢-Kajikazawa in Kai Province (Kōshū Kajikazawa), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141013.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "kazusa",
    "title": "Auf See vor Kazusa",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 上総の海路-At Sea off Kazusa (Kazusa no kairo), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140984.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "umezawa",
    "title": "Das Gut Umezawa in der Provinz Sagami",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 相州梅沢左-Umezawa Manor in Sagami Province (Sōshū Umezawa zai), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141076.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "tagobay",
    "title": "Die Tago-Bucht bei Ejiri an der Tōkaidō",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 東海道江尻田子の浦略図-Tago Bay near Ejiri on the Tōkaidō (Tōkaidō Ejiri Tago no ura ryaku zu), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141037.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "noboto",
    "title": "Die Bucht von Noboto",
    "artist": "Katsushika Hokusai",
    "year": "um 1830–1832",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «冨嶽三十六景 登戸浦-Noboto Bay (Noboto no ura), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141022.jpg», CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "hokusai",
  "name": "Katsushika Hokusai",
  "title": "Hokusais Lebensweg",
  "life": "1760–1849",
  "part": "Teil 1 · Bis zu den 36 Ansichten",
  "subtitle": "Von Edo bis zur Grossen Welle",
  "cover": "wave",
  "intro": "Reise mit Katsushika Hokusai durch die erste Hälfte seines Weges: von der Kindheit in Edo und der Lehre bei Katsukawa Shunshō über neue Namen, Surimono und frühe Ansichten der Stadt bis zu den «Sechsunddreissig Ansichten des Berges Fuji» – zur Grossen Welle und zum Roten Fuji. Kurze Stationen, Bilder zum Ausmalen und eine Stimme aus seiner eigenen Nachschrift. Dieser erste Teil reicht bis um 1832.",
  "ending": [
    "Die «Sechsunddreissig Ansichten des Berges Fuji» erscheinen um 1830 bis 1832 beim Verleger Nishimuraya Yohachi. Aus sechsunddreissig Blättern werden mit zehn weiteren sechsundvierzig. Das Preussischblau und der immer wieder neu gesehene Berg prägen die Folge.",
    "Zwei Jahre später, 1834, schreibt Hokusai in der Nachschrift zum ersten Band der «Hundert Ansichten des Berges Fuji» (Fugaku Hyakkei): «Seit meinem sechsten Jahr habe ich die Gewohnheit, die Gestalt der Dinge nachzubilden. Seit meinem fünfzigsten Jahr habe ich oft Bilder herausgegeben, aber was ich vor meinem siebzigsten Jahr gezeichnet habe, ist wahrhaftig nichts, das man gelten lassen könnte. Mit dreiundsiebzig habe ich ein wenig das Gerippe der Vögel, Tiere, Insekten und Fische und das Wachsen der Pflanzen begriffen. Darum will ich mit sechsundachtzig noch weiter kommen, mit neunzig die Sache noch tiefer erfassen, mit hundert wirklich das Wunderbare erreichen – und mit hundertzehn soll jeder Punkt und jeder Strich lebendig sein. Mögen Herren von langem Leben sehen, dass meine Worte nicht leere Einbildung sind.»",
    "Der Weg geht weiter. Es folgen die Wasserfälle der Provinzen, die Brücken, die hundert Ansichten des Fuji und die späten Jahre in Edo. Hokusai stirbt 1849 – davon erzählt der nächste Teil."
  ],
  "epilogue": "Um 1830 bis 1832 erscheinen die «Sechsunddreissig Ansichten des Berges Fuji» bei Nishimuraya Yohachi; mit zehn weiteren Blättern werden es sechsundvierzig. 1834 schreibt Hokusai in der Nachschrift zu den «Hundert Ansichten des Berges Fuji» von einem Leben, das erst mit siebzig zu beginnen scheint. Wasserfälle, Brücken und die späten Jahre folgen im nächsten Teil.",
  "map": {
    "viewBox": "0 0 200 200",
    "lands": [
      "M30,120 C38,86 62,58 100,50 C132,44 158,52 178,70 C190,84 188,104 172,116 C158,128 140,132 122,128 C108,142 86,154 60,150 C40,146 26,136 30,120 Z"
    ]
  },
  "stations": [
    {
      "id": "edo",
      "place": "Edo · Honjo und die Lehre",
      "when": "1760–um 1793",
      "map": {
        "x": 174,
        "y": 74
      },
      "mapLabel": "Edo",
      "intro": [
        "Katsushika Hokusai wird 1760 in Edo geboren, im Stadtteil Honjo am Sumida-Fluss. Als Kind heisst er Tokitarō. Er kommt in die Familie des Spiegelmachers Nakajima Ise.",
        "Um 1778, mit etwa achtzehn Jahren, tritt er in die Werkstatt von Katsukawa Shunshō ein, einem führenden Meister der Kabuki-Schauspielerbilder. Dort erhält er den Künstlernamen Shunrō.",
        "Er zeichnet Schauspieler, Sumoringer und Szenen aus dem Alltag der Stadt. Shunshō stirbt 1792. Um 1794 verlässt Hokusai die Katsukawa-Schule."
      ],
      "works": [
        {
          "pid": "shopfront",
          "text": [
            "Im Schnee steht ein kleiner Laden, ein verschneiter Pinienast hängt über dem Dach. Menschen und zwei Katzen halten sich an der Schwelle auf.",
            "Das Blatt entsteht 1780, in den frühen Jahren, als Hokusai noch ein junger Zeichner in Edo ist."
          ],
          "fact": "Das Bild hängt im Metropolitan Museum of Art in New York. Es trägt den Titel «In Front of a Shop»."
        },
        {
          "pid": "spinsilk",
          "text": [
            "Eine Frau sitzt am Spinnrad, Seide läuft durch ihre Hände. Ein Kind in rotem Tuch beugt sich über ein Gefäss, drei Schwalben fliegen über ihnen.",
            "Das Metropolitan Museum datiert das Bild auf 1790 – in die Zeit, in der Hokusai als Shunrō in der Katsukawa-Schule arbeitet."
          ],
          "fact": "«Frau beim Seidenspinnen», Metropolitan Museum of Art, New York, 1790."
        },
        {
          "pid": "sumowrest",
          "text": [
            "Zwei Sumoringer beugen sich voreinander, fest, mit gesenktem Blick. Namen und Titel stehen oben auf dem Blatt.",
            "Das Blatt zeigt Takaneyama Yoichiemon und Sendagawa Kichigorō und entsteht um 1790 bis 1793, noch in der Shunrō-Zeit."
          ],
          "fact": "Farbholzschnitt, Metropolitan Museum of Art, New York, um 1790–1793."
        }
      ]
    },
    {
      "id": "sori",
      "place": "Edo · Neue Namen",
      "when": "1794–1799",
      "map": {
        "x": 186,
        "y": 90
      },
      "mapLabel": "Sōri",
      "intro": [
        "Nach der Schule versucht Hokusai neue Wege. Um 1795 arbeitet er unter dem Namen Tawaraya Sōri, in der Tradition der dekorativen Tawaraya-Malerei. Er gestaltet Surimono: privat bestellte Drucke, oft für Dichterkreise der Kyōka, der «verrückten Verse».",
        "1798 gibt er den Namen Sōri an einen Schüler weiter und nennt sich Hokusai – «Atelier des Nordens», nach dem Nordstern. Auf einem Blatt von 1799 steht die Signatur «Sōri, geändert zu Hokusai» (Sōri aratame Hokusai ga).",
        "Schon in diesen Jahren erscheint der Fuji auf seinen Blättern, noch zart und weit, lange vor der berühmten Serie."
      ],
      "works": [
        {
          "pid": "sorinets",
          "text": [
            "Frauen sitzen auf roten Matten an einem offenen Raum und blicken auf Fischer mit Netzen im Wasser.",
            "Das Surimono ist mit «Sōri ga» signiert – also in den Jahren, in denen Hokusai den Namen Tawaraya Sōri trägt, um 1794 bis 1798."
          ],
          "fact": "Sammlung Isaac de Camondo, 1911 dem Museum vermacht, Inventar EO 1833. Musée Guimet, Paris."
        },
        {
          "pid": "dyers",
          "text": [
            "In einer langen, schmalen Szene hängen Bahnen Stoff zum Trocknen. Die Färber bewegen sich dazwischen, die Farben sind noch hell und zurückhaltend.",
            "Das Cleveland Museum of Art datiert das Blatt auf 1795, in die Sōri-Jahre."
          ],
          "fact": "«Dyers at Work», Cleveland Museum of Art, 1795."
        },
        {
          "pid": "soritable",
          "text": [
            "Eine Frau steht an einem Maltisch, Pinsel und Papier liegen bereit. Gedichte stehen am Rand des Blattes.",
            "Signiert ist es «Sōri aratame Hokusai ga» – «Sōri, geändert zu Hokusai». Das Jahr 1799 hält den Namenswechsel fest."
          ],
          "fact": "Privates Surimono mit Kyōka-Versen, Sammlung Camondo, Musée Guimet, Paris, 1799."
        },
        {
          "pid": "fujisuri",
          "text": [
            "Der Fuji steht still über einem leichten Nebel, daneben Gedichte. Das Blatt ist klein und zart – ein frühes Surimono, lange vor den sechsunddreissig Ansichten.",
            "Das Rijksmuseum datiert die Ansicht auf 1797, noch in den Jahren des Namens Sōri."
          ],
          "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-1548, 1797."
        }
      ]
    },
    {
      "id": "azuma",
      "place": "Edo · Sumida und die Stadt",
      "when": "um 1800–1802",
      "map": {
        "x": 168,
        "y": 58
      },
      "mapLabel": "Sumida",
      "intro": [
        "Um 1800 zeichnet Hokusai Ansichten Edos für Bücher und Blätter: den Sumida, Ueno, Tsukuda, Schreine und Gärten. Die Östliche Hauptstadt – Tōto, ein anderer Name für Edo – wird zum eigenen Thema.",
        "1802 datiert das Rijksmuseum das Blatt eines Bilderbuchladens in Edo, in dem genau solche Bücher und Drucke verkauft werden."
      ],
      "works": [
        {
          "pid": "sumidawalk",
          "text": [
            "Frauen und Kinder gehen am Ufer des Sumida spazieren. Der Fluss ist breit, der Tag scheint still.",
            "Das Cleveland Museum of Art datiert das Blatt auf 1800 – in die Jahre, in denen Hokusai Edo in Büchern und Einzelblättern zeigt."
          ],
          "fact": "«Women and Children Walking Along the Sumida River», Cleveland Museum of Art, 1800."
        },
        {
          "pid": "azumatsukuda",
          "text": [
            "Boote liegen vor Tsukuda, einem Eiland in der Mündung des Sumida. Im Hintergrund steht der Fuji, klar und klein.",
            "Das Los Angeles County Museum of Art führt das Blatt um 1802, in einer Folge berühmter Ansichten der Östlichen Hauptstadt."
          ],
          "fact": "Farbholzschnitt, LACMA, um 1802, Sammlung Joan Elizabeth Tanney."
        },
        {
          "pid": "ueno",
          "text": [
            "Bei Ueno steht ein rotes Tempeltor am Wasser, dahinter der weite Spiegel des Shinobazu-Teichs.",
            "Auch dieses Blatt gehört zu den Ansichten der Östlichen Hauptstadt, um 1802, im LACMA."
          ],
          "fact": "Farbholzschnitt, Los Angeles County Museum of Art, um 1802."
        },
        {
          "pid": "mimeguri",
          "text": [
            "Am Schrein Mimeguri liegt ein stiller Hof unter Bäumen, der Fuji erscheint hinter dem Gelände.",
            "Mimeguri steht am Sumida. Das Blatt entsteht um 1802, heute im LACMA."
          ],
          "fact": "Farbholzschnitt, Los Angeles County Museum of Art, um 1802."
        },
        {
          "pid": "umeyashiki",
          "text": [
            "Regen fällt in schrägen Strichen über den Pflaumengarten Umeyashiki. Menschen eilen unter Bäumen und Schirmen.",
            "Umeyashiki lag in Mukōjima, östlich des Sumida, und war für seine Pflaumenblüte bekannt. Das Blatt: um 1802, LACMA."
          ],
          "fact": "Farbholzschnitt, Los Angeles County Museum of Art, um 1802."
        },
        {
          "pid": "ezoshi",
          "text": [
            "In einem Bilderbuchladen liegen Stapel von Büchern und Drucken. Kunden beugen sich über die Ware, vor der Tür stehen Werbeschilder.",
            "Das Rijksmuseum datiert das Blatt auf 1802 und nennt es den Laden eines Bilderbuchhändlers – genau die Welt, in der Hokusais Bücher verkauft wurden."
          ],
          "fact": "Rijksmuseum, Amsterdam, RP-P-2015-26-1896, 1802."
        }
      ]
    },
    {
      "id": "earlyland",
      "place": "Edo · Landschaft und Skizzen",
      "when": "1806–1816",
      "map": {
        "x": 150,
        "y": 96
      },
      "mapLabel": "Yanagi",
      "intro": [
        "In den Jahren danach bleiben Landschaft, Alltag und das Surimono sein Feld. 1806 entsteht der Regen an der neuen Yanagi-Brücke.",
        "1814 erscheint in Nagoya der erste Band der «Hokusai Manga», einer langen Folge von Skizzenbüchern mit Menschen, Tieren, Pflanzen und allem, was ihm vor die Augen kommt.",
        "1816 malt er die Manzai-Spieler, ein Neujahrs-Tanzpaar. Um 1820, in seinem einundsechzigsten Jahr, nimmt er den Namen Iitsu an."
      ],
      "works": [
        {
          "pid": "yanagi",
          "text": [
            "Ein plötzlicher Schauer trifft die neue Yanagi-Brücke. Menschen unter grossen Schirmen beugen sich in den Regen, die Farben bleiben klar.",
            "Das Metropolitan Museum datiert den Farbholzschnitt auf 1806."
          ],
          "fact": "«Shower at the New Yanagi Bridge», Metropolitan Museum of Art, New York, 1806."
        },
        {
          "pid": "teaceremony",
          "text": [
            "Schale, Dose und Tuch liegen still auf dem Blatt – nur die Geräte der Teezeremonie, dazu Verse. Nichts lenkt ab.",
            "Das Rijksmuseum führt das Surimono zwischen 1794 und 1804, in die Jahre der privaten Aufträge."
          ],
          "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-975, um 1794–1804."
        },
        {
          "pid": "cherryview",
          "text": [
            "Ein Gesellschaftszug sucht unter blühenden Kirschbäumen einen Platz. Darunter stehen Verse, oben die Landschaft am Wasser.",
            "Das Rijksmuseum datiert das Surimono auf die Jahre um 1810 bis 1820."
          ],
          "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-1586, um 1810–1820."
        },
        {
          "pid": "peonies",
          "text": [
            "Ein Korb mit Pfingstrosen füllt die rechte Seite, links stehen Schriftzeichen. Die Blüten sind schwer und klar gesetzt.",
            "Das Cleveland Museum of Art datiert das Surimono auf 1810 oder 1814. Es feiert ein Ereignis im Leben des Schauspielers Ichikawa Danjūrō VII., dessen Zeichen die Pfingstrose war."
          ],
          "fact": "«Basket of Peonies», Cleveland Museum of Art, 1810 oder 1814."
        },
        {
          "pid": "manzai",
          "text": [
            "Zwei Manzai-Spieler tanzen übereinander, der eine mit dem Fächer, der andere hebt den Fuss. Der Grund bleibt leer und hell.",
            "Manzai ist ein traditionelles Neujahrsspiel zu zweit. Das Minneapolis Institute of Art datiert das Bild auf 1816."
          ],
          "fact": "«Manzai Performers», Minneapolis Institute of Art, 1816."
        }
      ]
    },
    {
      "id": "surimono",
      "place": "Edo · Iitsu und die Surimono",
      "when": "1821–1822",
      "map": {
        "x": 178,
        "y": 108
      },
      "mapLabel": "Iitsu",
      "intro": [
        "Unter dem Namen Iitsu entstehen um 1821 und 1822 besonders feine Surimono. Eine Folge gilt dem «Muschelspiel» mit Versen der Genroku-Zeit, eine andere den Pferden – 1822 ist ein Pferdejahr.",
        "Diese privaten Blätter sind oft kleiner und sorgfältiger gedruckt als die späteren Auflagen der Fuji-Serie. Sie zeigen, wie genau Hokusai Alltagsdinge setzen kann."
      ],
      "works": [
        {
          "pid": "lostlove",
          "text": [
            "Ein roter Fisch liegt in einer weissen Schale, Gräser und ein Fächer stehen daneben. Das Blatt gehört zu einem «Muschelspiel» mit Versen der Genroku-Zeit.",
            "Die Serie heisst Genroku kasen kai-awase. Dieses Blatt, die Schale der verlorenen Liebe (Katashigai), datiert 1821 und liegt in der Art Gallery of South Australia."
          ],
          "fact": "Surimono, Art Gallery of South Australia, Adelaide, 1821."
        },
        {
          "pid": "grasses",
          "text": [
            "Ein offenes Boot, ein orangeroter Fisch, zarte Gräser. Auch dies ist eine «Schale» aus derselben Folge von 1821: Chigusagai, die Schale der unzähligen Gräser.",
            "Wie das Blatt der verlorenen Liebe gehört es zur Art Gallery of South Australia."
          ],
          "fact": "Surimono aus «Genroku kasen kai-awase», Art Gallery of South Australia, 1821."
        },
        {
          "pid": "cherryshell",
          "text": [
            "Reisende und Träger bewegen sich durch eine weite Landschaft, oben stehen Verse. Das Blatt heisst Sakura-gai, die Kirschblütenschale.",
            "Es gehört zur selben Muschel-Serie und entsteht wahrscheinlich 1821. Dieses Exemplar hängt im Metropolitan Museum."
          ],
          "fact": "Surimono, Metropolitan Museum of Art, New York, wahrscheinlich 1821."
        },
        {
          "pid": "hatsuuma",
          "text": [
            "Eine Frau in festlichem Gewand sitzt bei einem geschmückten Pferd. Hatsuuma ist das erste Pferde-Fest im zweiten Monat, oft mit einem Tempelbesuch verbunden.",
            "1822 ist ein Pferdejahr. Das Blatt gehört zur Folge «Umazukushi», einer Serie über Pferde, und liegt im Rijksmuseum."
          ],
          "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1958-284, 1822."
        },
        {
          "pid": "umasenbetsu",
          "text": [
            "Lackdosen, ein gefalteter Brief, ein roter Fächer: ein Abschiedsgeschenk, fein und still auf dem Blatt angeordnet.",
            "Auch dies ist ein Surimono der Pferde-Serie «Umazukushi» von 1822, im Rijksmuseum."
          ],
          "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1954-562, 1822."
        },
        {
          "pid": "watakuri",
          "text": [
            "Eine Maschine zum Lockern von Baumwolle steht neben einem Sattelzeug. Alltag und Pferd treffen sich auf einem Festblatt.",
            "«Watakuri uma» gehört zur selben Folge «Umazukushi» von 1822 im Rijksmuseum."
          ],
          "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1958-296, 1822."
        }
      ]
    },
    {
      "id": "fujiedo",
      "place": "Edo · 36 Ansichten",
      "when": "um 1830–1832",
      "map": {
        "x": 158,
        "y": 78
      },
      "mapLabel": "Fuji · Edo",
      "intro": [
        "Um 1830 beginnt beim Verleger Nishimuraya Yohachi (Eijudō) die Serie «Sechsunddreissig Ansichten des Berges Fuji» (Fugaku Sanjūrokkei). Zuerst sind es sechsunddreissig Blätter, später kommen zehn hinzu – sechsundvierzig insgesamt.",
        "Viele Blätter tragen die Signatur «Iitsu, zuvor Hokusai». Neu und kräftig ist das importierte Preussischblau, das bero-ai oder Berliner Blau, das Meer, Himmel und Schatten eine neue Tiefe gibt.",
        "In Edo zeigt er den Fuji über der Nihonbashi, hinter dem Mitsui-Laden, über der Mannen-Brücke und vom Ryōgoku-Ufer – die Stadt und der ferne Berg in einem Bild."
      ],
      "works": [
        {
          "pid": "fujinibon",
          "text": [
            "Die Nihonbashi ist die Brücke, von der aus in Edo die Wege gezählt werden. Zwischen den Speicherhäusern öffnet sich der Kanal, weit hinten steht der Fuji.",
            "Hokusai setzt die belebte Stadt in den Vordergrund und den Berg als ruhigen Punkt am Horizont."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "fujimitsui",
          "text": [
            "Über den Dächern des Mitsui-Ladens in Suruga-chō steigt ein langer Drachen in den Himmel. Der Fuji steht genau in der Achse des Fadens.",
            "Das Blatt verbindet das Kaufmannsviertel Edos mit dem fernen Berg – Alltag und Fuji in einer Linie."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "honganji",
          "text": [
            "Vom Dach des Hongan-ji in Asakusa blickt man über Edo hinweg auf den Fuji. Arbeiter richten Ziegel, der Tempel füllt den Vordergrund.",
            "Der grosse Tempel in Asakusa war eine der höchsten Aussichten in der Stadt."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mannen",
          "text": [
            "Unter dem Bogen der Mannen-Brücke in Fukagawa gleiten Boote, der Fuji erscheint im Kreis des Brückenbogens.",
            "Hokusai rahmt den Berg durch die Brücke selbst – ein Bild im Bild."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "tatekawa",
          "text": [
            "Im Holzplatz von Tatekawa in Honjo türmen sich Balken und Bretter. Zwischen den Stapeln wird der Fuji sichtbar.",
            "Honjo, Hokusais eigene Gegend im Osten Edos, war ein Ort der Holzhändler und Kanäle."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "koishikawa",
          "text": [
            "Nach dem Schnee liegt Koishikawa still. Ein Pavillon, kahle Bäume, der Fuji weiss über der Stadt.",
            "Der Titel heisst «Schneemorgen in Koishikawa» – yuki no ashita, der Morgen nach dem Schnee."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "onden",
          "text": [
            "Ein grosses Wasserrad dreht sich in Onden, Menschen arbeiten am Wasser, der Fuji steht hinter den Feldern.",
            "Onden lag im Westen Edos, in einer Gegend mit Mühlen und Feldern."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "ryogoku",
          "text": [
            "Vom Onmaya-Ufer fährt ein volles Boot über die Sumida, die Ryōgoku-Brücke liegt quer im Abendlicht, der Fuji ist ein kleiner Schatten am Horizont.",
            "Das Blatt heisst auf Japanisch «Onmayagashi yori Ryōgokubashi sekiyō o miru» – den Sonnenuntergang über der Ryōgoku-Brücke vom Onmaya-Ufer betrachten."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "tokkaido",
      "place": "Die Tōkaidō",
      "when": "um 1830–1832",
      "map": {
        "x": 128,
        "y": 116
      },
      "mapLabel": "Tōkaidō",
      "intro": [
        "Andere Blätter führen die Betrachterinnen die Tōkaidō entlang, die grosse Küstenstrasse von Edo nach Kyoto: durch Shinagawa und Hodogaya, nach Ejiri, Yoshida und Kanaya.",
        "Hokusai zeigt Reisende, eine Sägemühle in der Provinz Tōtomi und eine Böttcherwerkstatt in Owari, aus deren Fassreifen der Fuji wie durch ein Fenster erscheint."
      ],
      "works": [
        {
          "pid": "gotenyama",
          "text": [
            "Auf dem Gotenyama in Shinagawa blühen die Kirschen, darunter die Bucht, in der Ferne der Fuji.",
            "Shinagawa war die erste Station der Tōkaidō unmittelbar vor Edo, ein Ort für Ausflüge und Abschiede."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hodogaya",
          "text": [
            "An der Tōkaidō bei Hodogaya gehen Reisende und Pferde unter hohen Kiefern. Der Fuji erscheint zwischen den Stämmen.",
            "Hodogaya war eine der Stationen der Tōkaidō, der grossen Strasse von Edo nach Kyoto."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "ejiri",
          "text": [
            "Ein plötzlicher Wind reisst den Reisenden in Ejiri die Tücher und Papiere weg. Blätter fliegen, der Fuji bleibt stehen.",
            "Ejiri lag in der Provinz Suruga, nahe der Küste, an der Tōkaidō."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "yoshida",
          "text": [
            "In einem Gasthaus an der Station Yoshida sitzen Reisende, durch die offene Wand sieht man den Fuji wie ein Schild über der Strasse.",
            "Yoshida lag an der Tōkaidō am Fuss des Berges, eine typische Übernachtungsstation."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "kanaya",
          "text": [
            "Bei Kanaya durchqueren Reisende den Fluss Ōi. Das Wasser steht hoch, die Lasten liegen auf den Schultern, der Fuji begleitet das Ufer.",
            "Die Furt des Ōi an der Tōkaidō war berüchtigt, wenn das Wasser stieg – eine der schwierigen Stellen der Strasse."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "fujimi",
          "text": [
            "Ein Böttcher arbeitet in einem riesigen Fass. Durch die Reifen hindurch erscheint der Fuji, rund gerahmt wie in einem Fenster.",
            "Der Ort heisst Fujimigahara, «Ebene mit Blick auf den Fuji», in der Provinz Owari."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "totomi",
          "text": [
            "In den Bergen der Provinz Tōtomi sägen Männer ein riesiges Brett. Der Fuji steht hinter den Stützen des Gerüsts.",
            "Das Blatt zeigt die schwere Arbeit der Sägemühlen und den Berg als ruhige Gegenform."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "provinces",
      "place": "Kai, Sagami und der Berg",
      "when": "um 1830–1832",
      "map": {
        "x": 98,
        "y": 98
      },
      "mapLabel": "Kai",
      "intro": [
        "Westlich von Edo liegen die Provinzen Kai und Sagami. Hokusai zeigt Pässe, Seen und den Berg von neuen Seiten: den Mishima-Pass, den See von Hakone, die Spiegelung bei Misaka.",
        "Enoshima liegt am Meer der Provinz Sagami. Vom Minobu-Fluss aus sieht man den Fuji von der anderen Seite. Jedes Blatt sucht einen anderen Standpunkt."
      ],
      "works": [
        {
          "pid": "mishima",
          "text": [
            "Am Mishima-Pass in der Provinz Kai ragt ein mächtiger Baum neben dem Weg, Reisende ruhen im Schatten, der Fuji steht dahinter.",
            "Kai ist die Inland-Provinz westlich von Edo, das Land um den Berg."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "inume",
          "text": [
            "Vom Inume-Pass aus liegt der Fuji frei über einem offenen Tal, klein wirken die Pferde auf dem Weg.",
            "Der Pass liegt in der Provinz Kai und öffnet einen der weiten Blicke der Serie."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "misaka",
          "text": [
            "Im See bei Misaka spiegelt sich der Fuji – aber die Spiegelung zeigt einen anderen, schneebedeckten Berg, nicht genau dasselbe Bild wie über dem Wasser.",
            "Hokusai gibt der Spiegelung eine eigene Gestalt. Das Blatt gehört zu den ungewöhnlichsten der Folge."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hakone",
          "text": [
            "Der See von Hakone liegt still zwischen bewaldeten Hügeln, der Fuji steigt am jenseitigen Ufer auf.",
            "Hakone in der Provinz Sagami war eine der kontrollierten Passagen der Tōkaidō."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "enoshima",
          "text": [
            "Die Insel Enoshima liegt vor der Küste der Provinz Sagami, mit einer langen Sandbank und dem Fuji über dem Meer.",
            "Enoshima war ein Wallfahrts- und Ausflugsort unweit der Tōkaidō."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "isawa",
          "text": [
            "In der Morgendämmerung von Isawa in der Provinz Kai liegen Dächer noch im Schatten, der Fuji färbt sich im ersten Licht.",
            "Isawa liegt im Kōfu-Becken, im Inland westlich des Berges."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "minobu",
          "text": [
            "Vom Minobu-Fluss aus sieht man den Fuji von der anderen Seite: den Rücken des Berges, nicht die vertraute Silhouette von Edo her.",
            "Der Titel sagt es selbst: «Minobugawa ura Fuji» – der Fuji von der Rückseite, vom Minobu-Fluss."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "fujiicon",
      "place": "Welle, roter Fuji, Gewitter",
      "when": "um 1830–1832",
      "map": {
        "x": 120,
        "y": 122
      },
      "mapLabel": "Kanagawa",
      "intro": [
        "Einige Blätter der Serie sind überall bekannt geworden. «Die grosse Welle vor Kanagawa» zeigt Fischerboote unter einer stürzenden Woge; ganz klein steht der Fuji im Tal der Welle.",
        "«Feiner Wind, klarer Morgen» – der Rote Fuji – und «Gewitter unterhalb des Gipfels» gehören dazu, ebenso der Fischer von Kajikazawa und die Kraniche von Umezawa.",
        "Die Serie macht Hokusai, schon um die siebzig, zu einem der bekanntesten Bildermacher seiner Zeit – in Japan und, Jahrzehnte später, auch in Europa."
      ],
      "works": [
        {
          "pid": "kazusa",
          "text": [
            "Ein grosses Segelschiff liegt auf offener See vor der Provinz Kazusa. Der Fuji ist ein kleiner Kegel über dem Horizont.",
            "Kazusa liegt östlich der Bucht von Edo, auf der anderen Seite des Wassers."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "noboto",
          "text": [
            "Bei Ebbe stehen Torii und Menschen in der seichten Bucht von Noboto. Der Fuji liegt über einem ruhigen Horizont.",
            "Das Blatt gehört zu den hellsten der Folge: viel leerer Sand, wenig Lärm."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "umezawa",
          "text": [
            "Kraniche fliegen und stehen in der Moorlandschaft von Umezawa, der Fuji ist dunkel und nah.",
            "Umezawa liegt in der Provinz Sagami. Das Blatt gehört zu den stillsten der Serie."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "tagobay",
          "text": [
            "In der Tago-Bucht bei Ejiri liegt ein langes Boot am Ufer, Wellen schlagen gegen den Sand, der Fuji steht frei über der Bucht.",
            "Die Bucht liegt an der Tōkaidō in der Provinz Suruga und ist auch aus der Dichtung als Ort mit Blick auf den Fuji bekannt."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "kajikazawa",
          "text": [
            "Ein Fischer steht auf einem Felsen in Kajikazawa, die Leine gespannt über die Wellen, der Fuji steigt hinter ihm auf.",
            "Kajikazawa liegt in der Provinz Kai, an einem reissenden Fluss unterhalb des Berges."
          ],
          "fact": "Farbholzschnitt aus «Sechsunddreissig Ansichten des Berges Fuji», Verlag Nishimuraya Yohachi, um 1830–1832. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "wave",
          "text": [
            "Eine grosse Woge hebt sich vor Kanagawa, die Fischerboote liegen schräg in der Hohlung. Ganz klein, im Tal der Welle, steht der Fuji.",
            "Das Blatt gehört zur Serie «Sechsunddreissig Ansichten des Berges Fuji» und entsteht um 1830 bis 1832, als Hokusai schon rund siebzig Jahre alt ist."
          ],
          "fact": "«Die grosse Welle vor Kanagawa» (Kanagawa-oki nami ura), aus der Fuji-Serie, um 1830–1832."
        },
        {
          "pid": "redfuji",
          "text": [
            "Der Fuji leuchtet rot im Morgenlicht, kleine Wolken ziehen über den Hang. Der Titel heisst «Feiner Wind, klarer Morgen» – Gaifū kaisei.",
            "Man kann den roten Fuji an manchen klaren Tagen im Spätsommer und Herbst sehen. Das Blatt gehört zur selben Serie, um 1830–1832."
          ],
          "fact": "«Roter Fuji (Feiner Wind, klarer Morgen)», aus den 36 Ansichten, um 1830–1832."
        },
        {
          "pid": "thunder",
          "text": [
            "Unten zucken rote Blitze über den Hang, oben bleibt der Gipfel still im Licht. Das Blatt heisst «Sanka hakuu» – Gewitter unterhalb des Gipfels.",
            "Zusammen mit der Grossen Welle und dem Roten Fuji gehört es zu den bekanntesten Blättern der Serie."
          ],
          "fact": "«Gewitter unterhalb des Gipfels», aus den 36 Ansichten, um 1830–1832."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
