// v8.9 Utagawa Hiroshige life journey, Part 2 (about 1835–1858), completing the path.
// Appends stations and works; rewrites the last Part-1 station intro so the path no longer teases a following part.
// Reuses the gallery work ohashi by pid only (not listed in works[]).
// Documented facts only; no unverified quotations.
(function () {
  var works = [
  {
    "id": "hgks12",
    "title": "Shinmachi",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306222-Utagawa Hiroshige-拾弐 木曽海道六拾九次之内 新町.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks14",
    "title": "Takasaki",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306230-Utagawa Hiroshige-拾四 木曽海道六拾九次之内高崎.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks16",
    "title": "Annaka",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306226-Utagawa Hiroshige-拾六 木曽海道六拾九次之内案中.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks17",
    "title": "Matsuida",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306223-Utagawa Hiroshige-拾七 木曽海道六拾九次之内松井田.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks19",
    "title": "Karuizawa",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306292-Utagawa Hiroshige-拾九 木曽海道六拾九次之内軽井沢.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks22",
    "title": "Otai",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306227-Utagawa Hiroshige-二拾貮 木曽海道六拾九次之内小田井.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks24",
    "title": "Shionada",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Ando Hiroshige - The Sixty-Nine Stations of the Kiso Highway- Shionata - 1985.240 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "hgks26",
    "title": "Mochizuki",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306290-Utagawa Hiroshige-二拾六 木曽海道六拾九次之内望月.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks28",
    "title": "Nagakubo",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Utagawa Hiroshige - Nagakubo (Station 28) from the series Sixty-Nine Stations of the Kisokaido - 1942.144 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "hgks29",
    "title": "Wada",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306291-Utagawa Hiroshige-二拾九 木曽海道六拾九次之内和田.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks30",
    "title": "Shimosuwa",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Utagawa Hiroshige - Shimosuwa, from the series Sixty-Nine Stations of the Kisokaidō - 1985.322 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "hgks32",
    "title": "Seba",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Seba LCCN2008660647.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks37",
    "title": "Miyanokoshi",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306232-Utagawa Hiroshige-三拾七 木曽海道六十九次之内宮ノ越.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks38",
    "title": "Fukushima",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306221-Utagawa Hiroshige-三拾八 木曽海道六拾九次之内福しま.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks40",
    "title": "Suhara",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Utagawa Hiroshige I - Suhara (Station 40) from the series Sixty-Nine Stations of the Kisokaido - 1924.970 - Cleveland Museum of Art.tiff», CC0 (gemeinfrei)"
  },
  {
    "id": "hgks43",
    "title": "Tsumago",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306248-Utagawa Hiroshige-四拾三 木曽海道六拾九次之内妻篭.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks47",
    "title": "Ōi",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306247-Utagawa Hiroshige-四拾七 木曽海道六拾九次之内大井.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgks68",
    "title": "Moriyama",
    "artist": "Utagawa Hiroshige",
    "year": "um 1835–1838",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1306249-Utagawa Hiroshige-六拾八 木曽海道六拾九次之内守山.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_hida",
    "title": "Die Korbseilfähre in Hida",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Hida, kayo watashi LCCN2008660288.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_naruto",
    "title": "Die Strudel von Naruto in Awa",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "National Library of New Zealand, Wellington",
    "source": "Wikimedia Commons: «Awa, Naruto Whirlpools, ca 1855.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_arashi",
    "title": "Die Togetsu-Brücke in Arashiyama",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL1308302 六十余州名所図会 山城 あらし山渡月橋.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_saruhashi",
    "title": "Die Affenbrücke in Kai",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL1308314 六十余州名所図会 甲斐 さるはし.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_sumida",
    "title": "Schneemorgen am Sumida in Musashi",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL1308318 六十余州名所図会 武蔵 隅田川雪の朝.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_sarashina",
    "title": "Der Mond von Sarashina in Shinano",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL1308327 六十余州名所図会 信濃 更科田毎月鏡台山.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_matsushima",
    "title": "Matsushima in Mutsu",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL1308330 六十余州名所図会 陸奥 松島風景富山眺望之略図.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_ishiyama",
    "title": "Der Tempel Ishiyama am Biwa-See",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL1308324 六十余州名所図会 近江 琵琶湖石山寺.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_nikko",
    "title": "Der Urami-Wasserfall in Nikkō",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL1308329 六十余州名所図会 下野 日光山裏見ノ滝.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_noto",
    "title": "Taki no ura in Noto",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Noto, taki no ura LCCN2008660294.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrk_izumo",
    "title": "Das Hotohoto-Fest am Grossen Schrein von Izumo",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Utagawa Hiroshige - Hotohoto Festival at Izumo Grand Shrine, from the series Views of Famous Pl - 1985.311 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "hgrk_sado",
    "title": "Die Goldminen von Sado",
    "artist": "Utagawa Hiroshige",
    "year": "1853–1856",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Sado LCCN2008660297.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_nihonbashi",
    "title": "Die Nihonbashi nach dem Schnee",
    "artist": "Utagawa Hiroshige",
    "year": "1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303205-Utagawa Hiroshige-名所江戸百景 日本橋雪晴-安政3.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_kasumi",
    "title": "Kasumigaseki",
    "artist": "Utagawa Hiroshige",
    "year": "1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303206-Utagawa Hiroshige-名所江戸百景 霞かせき.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_suruga",
    "title": "Suruga-chō",
    "artist": "Utagawa Hiroshige",
    "year": "1856",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Hiroshige Hundred views Edo 8 Suruga-chō (する賀てふ).tif», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_shinobazu",
    "title": "Die Kiyomizu-Halle und der Shinobazu-Teich",
    "artist": "Utagawa Hiroshige",
    "year": "1856",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303215-Utagawa Hiroshige-名所江戸百景 上野清水堂不忍ノ池.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_suidobashi",
    "title": "Die Suidō-Brücke und Surugadai",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Suidōbashi surugadai LCCN2009631861.tif», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_yatsumi",
    "title": "Die Yatsumi-Brücke",
    "artist": "Utagawa Hiroshige",
    "year": "1856",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Yatsumi no hashi LCCN2009631868.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_plum",
    "title": "Der Pflaumengarten in Kameido",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Chester Beatty Library, Dublin",
    "source": "Wikimedia Commons: «Plum garden at Kameido (Kameido umeyashiki) (CBL J 2693).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_iris",
    "title": "Die Schwertlilien von Horikiri",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Hiroshige, Horikiri iris garden, 1857.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_asukayama",
    "title": "Blick nach Norden vom Asukayama",
    "artist": "Utagawa Hiroshige",
    "year": "1856–1857",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303221-Utagawa Hiroshige-名所江戸百景 飛鳥山北の眺望.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_ukeji",
    "title": "Das Akiba-Heiligtum in Ukeji",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Tempelgronden van het Akiba heiligdom te Ukiji Ukiji Akiba no keidai (titel op object) Honderd beroemde gezichten op Edo (serietitel) Meisho Edo hyakkei (serietitel op object), RP-P-1968-301.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgmeh_sazaido",
    "title": "Die Spiralhalle der Fünfhundert Arhats",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303276-Utagawa Hiroshige-名所江戸百景 五百羅漢さゞゐ堂.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_mama",
    "title": "Ahornbäume in Mama",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303300-Utagawa Hiroshige-名所江戸百景 真間の紅葉手古那の社継はし.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_fireworks",
    "title": "Feuerwerk an der Ryōgoku-Brücke",
    "artist": "Utagawa Hiroshige",
    "year": "1858",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Utagawa Hiroshige - Fireworks at Ryōgoku, from the series One Hundred Views of Famous Places in - 1940.986 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "hgmeh_moonpine",
    "title": "Die Mondkiefer in Ueno",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Ueno sannai tsuki no matsu LCCN2008660968.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_senju",
    "title": "Die grosse Brücke von Senju",
    "artist": "Utagawa Hiroshige",
    "year": "1856",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Senju no oubashi LCCN2002700011.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_mannen",
    "title": "Die Mannen-Brücke in Fukagawa",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Fukagawa mannenbashi LCCN2009631906.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_ayase",
    "title": "Der Ayase-Fluss bei Kanegafuchi",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Ayasegawa kanegafuchi LCCN2008660271.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_jumbo",
    "title": "Adler über der Jūmantsubo-Ebene in Fukagawa",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «De Jumantsubo vlakte te Susaki bij Fukagawa Fukagawa Susaki Jumantsubo (titel op object) Honderd beroemde gezichten op Edo (serietitel) Meisho Edo hyakkei (serietitel op object), RP-P-1960-279.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hgmeh_azuma",
    "title": "Die Azuma-Brücke und der Tempel Kinryūzan",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Azumabashi kinryūzan enbō LCCN2002700039.tif», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_bikuni",
    "title": "Die Bikuni-Brücke im Schnee",
    "artist": "Utagawa Hiroshige",
    "year": "1858",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Hiroshige, Bikuni bridge in snow, Meisho Edo Hyakkei 114.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_saruwaka",
    "title": "Nachtansicht des Saruwaka-chō",
    "artist": "Utagawa Hiroshige",
    "year": "1856–1857",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303296-Utagawa Hiroshige-名所江戸百景 猿わか町よるの景.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_meguro",
    "title": "Die Trommelbrücke und der Abendhügel in Meguro",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Hiroshige, Drum bridge at Meguro and Sunset Hill, 1857.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_takata",
    "title": "Das Reitfeld von Takata",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «Takata no baba LCCN2009615460.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_foxfires",
    "title": "Fuchsfeuer an Silvester in Ōji",
    "artist": "Utagawa Hiroshige",
    "year": "1857",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303324-Utagawa Hiroshige-名所江戸百景 王子装束ゑの木大晦日の狐火.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgmeh_shiba",
    "title": "Shiba Shinmei und der Zōjō-ji",
    "artist": "Utagawa Hiroshige",
    "year": "1857–1858",
    "museum": "National Diet Library, Tokio",
    "source": "Wikimedia Commons: «NDL-DC 1303285-Utagawa Hiroshige-名所江戸百景 芝神明増上寺.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgfuji_enoshima",
    "title": "Das Tor nach Enoshima",
    "artist": "Utagawa Hiroshige",
    "year": "1858",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «20 - The Entrance Gate at Enoshima.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgfuji_miho",
    "title": "Der Kiefernstrand von Miho in Suruga",
    "artist": "Utagawa Hiroshige",
    "year": "1858",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «24 - The Pine Forest of Mio.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgfuji_satta",
    "title": "Die See vor Satta in Suruga",
    "artist": "Utagawa Hiroshige",
    "year": "1858",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «23 - The Sea off Satta.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgfuji_hakone",
    "title": "Der See von Hakone",
    "artist": "Utagawa Hiroshige",
    "year": "1858",
    "museum": "Library of Congress, Washington",
    "source": "Wikimedia Commons: «21 - Lake at Hakone.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'hiroshige'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1797–1858";
  path.subtitle = "Von Edo auf den Tōkaidō und die Kisokaidō, zu den Provinzen und den Hundert Ansichten von Edo";
  path.intro = "Reise mit Utagawa Hiroshige durch sein ganzes Leben: von der Kindheit in der Feuerwehr von Yayosu in Edo über die Lehre bei Toyohiro, die frühen Ansichten der östlichen Hauptstadt, die überlieferte Tōkaidō-Reise von 1832 und die Hōeidō-Serie der 53 Stationen, die acht Ansichten von Ōmi, die Kisokaidō ab etwa 1835, die berühmten Orte der über sechzig Provinzen und die Hundert berühmten Ansichten von Edo bis zu Hiroshiges Tod in Edo am 12. Oktober 1858. Kurze Stationen und Holzschnitte zum Ausmalen.";
  path.ending = [
  "Am 12. Oktober 1858 stirbt Utagawa Hiroshige in Edo, einundsechzig Jahre alt. Als Todesursache wird in der Überlieferung die Cholera genannt; in diesem Jahr herrscht in der Stadt eine Epidemie. Er wird auf dem Friedhof des Tempels Tōgaku-ji in Asakusa beigesetzt. Sein Schüler und Adoptivsohn Suzuki Shigenobu führt den Namen als Hiroshige II. weiter.",
  "Zurück bleiben die Stationen des Tōkaidō und der Kisokaidō, die Ansichten der Provinzen und die Hundert berühmten Ansichten von Edo: ein Werk, das Regen, Schnee, Mond und die Strassen der östlichen Hauptstadt festgehalten hat."
];
  path.epilogue = "Utagawa Hiroshige stirbt am 12. Oktober 1858 in Edo. Er wird am Tempel Tōgaku-ji in Asakusa beigesetzt. Zurück bleiben die 53 Stationen des Tōkaidō, die Kisokaidō, die berühmten Orte der über sechzig Provinzen und die Hundert berühmten Ansichten von Edo.";
  var omi = (path.stations || []).filter(function (s) { return s.id === 'hiroshigeomi'; })[0];
  if (omi) omi.intro = [
  "Um 1834–1835 folgt die Serie «Ōmi hakkei no uchi», die acht Ansichten der Provinz Ōmi am Biwa-See, unweit von Kyōto. Das Schema der acht Ansichten ist älter und aus China übernommen; Hiroshige überträgt es auf Glocke, Regen, Gänse, Mond und Abendröte am See.",
  "Mit der Tōkaidō-Serie und den Ōmi-Ansichten ist Hiroshige in der Mitte der 1830er Jahre als Landschaftsmeister fest etabliert, am westlichen Ende der Strasse und am See.",
  "Von hier führt der Weg weiter auf die Kisokaidō, zu den Ansichten der Provinzen und zu den Hundert berühmten Ansichten von Edo."
];
  var stations = [
  {
    "id": "hiroshigekiso",
    "place": "Die Kisokaidō: Hiroshige übernimmt",
    "when": "ab etwa 1835",
    "map": {
      "x": 140,
      "y": 70
    },
    "mapLabel": "Kisokaidō",
    "intro": [
      "Nach dem Erfolg der Hōeidō-Tōkaidō entsteht eine zweite Stationenserie auf der Inlandstrasse, der Kisokaidō (Nakasendō): 69 Stationen plus die Nihonbashi. Keisai Eisen beginnt sie für den Verleger Takenouchi Magohachi (Hōeidō); Hiroshige übernimmt den grösseren Teil der späteren Stationen. Auch der Verleger Iseya Rihei (Kinjudō) ist an der Ausgabe beteiligt.",
      "Die Blätter erscheinen ab etwa 1835, in den folgenden Jahren. Eisen bleibt für die frühen Stationen verantwortlich; die hier gezeigten Blätter gehören zu Hiroshiges Anteil.",
      "Die Inlandstrasse führt von Edo durch die Berge von Kōzuke und Shinano, über hohe Pässe, nach Westen."
    ],
    "works": [
      {
        "pid": "hgks12",
        "text": [
          "Die Station Shinmachi liegt an der Kisokaidō in der Provinz Kōzuke. Das Blatt zeigt die Poststation mit Reisenden und der weiten Landschaft der Inlandstrasse.",
          "Die Serie der 69 Stationen der Kisokaidō beginnt Keisai Eisen für den Verleger Takenouchi Magohachi (Hōeidō). Die späteren Stationen, darunter Shinmachi, zeichnet Hiroshige; sie erscheinen ab etwa 1835, in den folgenden Jahren. Dieses Blatt bewahrt die National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks14",
        "text": [
          "Takasaki ist eine wichtige Burgstadt an der Kisokaidō in Kōzuke. Das Blatt zeigt die Station im offenen Land, mit Reisenden auf dem Weg.",
          "Hiroshige zeichnet Takasaki als eine der Stationen, die nach dem Beginn der Serie durch Eisen folgen. Das Blatt der Serie um 1835–1838 liegt in der National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks16",
        "text": [
          "Annaka liegt in Kōzuke, bereits im Anstieg gegen den Pass von Usui. Das Blatt zeigt die Station und den Weg, der in die Berge führt.",
          "In der Serie der Kisokaidō gehört Annaka zu Hiroshiges Stationen. Das Blatt bewahrt die National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks17",
        "text": [
          "Matsuida liegt am Fuss des Usui-Passes, der Kōzuke von Shinano trennt. Reisende und Lasttiere bewegen sich durch die hügelige Station.",
          "Das Blatt gehört zu Hiroshiges Beitrag zur Kisokaidō-Serie und liegt in der National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks19",
        "text": [
          "Karuizawa liegt hoch über dem Usui-Pass, auf der Seite von Shinano. Das Blatt zeigt die karge, offene Höhe mit Reisenden im Wind und in den Felsen.",
          "Die Station gehört zu den bekannten Hochlagen der Kisokaidō. Hiroshiges Blatt der Serie um 1835–1838 bewahrt die National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks22",
        "text": [
          "Otai (auch Odai) liegt bereits in Shinano, nach dem Abstieg vom Usui-Pass. Das Blatt zeigt Reisende in der offenen Landschaft der Inlandstrasse.",
          "Hiroshige zeichnet die Station für die Kisokaidō-Serie. Das Blatt liegt in der National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      }
    ]
  },
  {
    "id": "hiroshigepass",
    "place": "Pässe, Mond und Schnee",
    "when": "um 1835–1838",
    "map": {
      "x": 110,
      "y": 58
    },
    "mapLabel": "Pässe",
    "intro": [
      "Die Strasse steigt durch die Berge von Shinano. In Mochizuki steht der Mond über den Kiefern, in Nagakubo über einer langen Brücke; am Wada-Pass liegt tiefer Schnee.",
      "Shimosuwa liegt am Suwa-See, nach den hohen Pässen. In Seba stehen Weiden im Abendlicht über dem Fluss – eines der bekanntesten Blätter der ganzen Serie.",
      "Diese Stationen gehören zum Kern von Hiroshiges Kisokaidō."
    ],
    "works": [
      {
        "pid": "hgks24",
        "text": [
          "Shionada liegt am Chikuma-Fluss in Shinano. Das Blatt zeigt die Flussstation und den Weg am Wasser.",
          "Hiroshige zeichnet Shionada für die Serie der 69 Stationen der Kisokaidō. Dieses Blatt hängt im Cleveland Museum of Art."
        ],
        "fact": "um 1835–1838. Cleveland Museum of Art."
      },
      {
        "pid": "hgks26",
        "text": [
          "In Mochizuki stehen hohe Kiefern unter einem hellen Mond; der Name der Station bedeutet «Vollmond». Reisende und Pferde bewegen sich auf der Strasse im Mondlicht.",
          "Das Blatt gehört zu den bekannten Mondansichten der Kisokaidō. Es liegt in der National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks28",
        "text": [
          "Über einer langen Holzbrücke steht der Vollmond; Reisende kreuzen den Fluss, am diesseitigen Ufer gehen Menschen und ein Pferd an Häusern vorbei. Eine grosse Kiefer teilt die Fläche.",
          "Nagakubo gilt als eines der Hauptblätter der Kisokaidō-Serie. Dieses Blatt, um 1835–1836, hängt im Cleveland Museum of Art."
        ],
        "fact": "um 1835–1838. Cleveland Museum of Art."
      },
      {
        "pid": "hgks29",
        "text": [
          "Am Wada-Pass liegt tiefer Schnee; der Weg steigt steil zwischen weissen Hängen und dunklen Bäumen, Reisende mühen sich den Pass hinauf.",
          "Die Schneeszene am Wada-Pass gehört zu den bekanntesten Blättern der Kisokaidō. Sie liegt in der National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks30",
        "text": [
          "Shimosuwa liegt am Suwa-See, einer der niedrigeren Stationen nach den hohen Pässen. Das Blatt zeigt die Station am See in Shinano.",
          "Hiroshige zeichnet Shimosuwa für die Kisokaidō-Serie; eine Fassung von 1835 hängt im Cleveland Museum of Art."
        ],
        "fact": "um 1835–1838. Cleveland Museum of Art."
      },
      {
        "pid": "hgks32",
        "text": [
          "Am Fluss von Seba stehen Trauerweiden im Abendlicht; zwei Männer staken einen beladenen Nachen, die Sonne sitzt rot über dem flachen Ufer.",
          "«Seba» gilt als eines der schönsten Blätter der ganzen Kisokaidō-Serie. Dieser Abzug liegt in der Library of Congress in Washington."
        ],
        "fact": "um 1835–1838. Library of Congress, Washington."
      }
    ]
  },
  {
    "id": "hiroshigekisoend",
    "place": "Kiso-Täler und der Westen",
    "when": "um 1835–1838",
    "map": {
      "x": 72,
      "y": 64
    },
    "mapLabel": "Kiso",
    "intro": [
      "Weiter westlich folgt die Strasse den Tälern des Kiso: Mond über Miyanokoshi, die Kontrollstation Fukushima, plötzlicher Regen in Suhara, die Poststation Tsumago, schwerer Schnee in Ōi.",
      "Gegen das Ende der Strasse liegt Moriyama schon nahe dem Biwa-See, im Übergang nach Ōtsu und Kyōto.",
      "Mit diesen Blättern ist die Inlandserie in Hiroshiges Händen fest etabliert."
    ],
    "works": [
      {
        "pid": "hgks37",
        "text": [
          "In Miyanokoshi liegt der Mond über dem Fluss und den Bäumen der Station in den Kiso-Bergen. Reisende bewegen sich am Ufer im Mondlicht.",
          "Das Blatt gehört zu Hiroshiges Stationen der Kisokaidō und liegt in der National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks38",
        "text": [
          "Kiso-Fukushima ist eine der wichtigsten Kontrollstationen der Inlandstrasse, im engen Tal des Kiso-Flusses. Das Blatt zeigt die Poststation unter Bäumen, mit Reisenden auf der Strasse.",
          "Hiroshige zeichnet Fukushima für die Kisokaidō-Serie. Das Blatt bewahrt die National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks40",
        "text": [
          "In Suhara überrascht ein plötzlicher Regen die Reisenden; Schirme und Hüte neigen sich, die Bäume stehen nass über dem Weg.",
          "Das Regenblatt von Suhara gehört zu den bekannten Wetteransichten der Kisokaidō. Diese Fassung hängt im Cleveland Museum of Art."
        ],
        "fact": "um 1835–1838. Cleveland Museum of Art."
      },
      {
        "pid": "hgks43",
        "text": [
          "Tsumago liegt im engen Kiso-Tal, eine der bekannten Poststationen der Inlandstrasse. Das Blatt zeigt die Station in der Berglandschaft, mit Reisenden auf dem Weg.",
          "Hiroshige zeichnet Tsumago für die Serie der 69 Stationen. Das Blatt liegt in der National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks47",
        "text": [
          "Über der Station Ōi liegt schwerer Schnee; Reisende kämpfen sich durch die weisse Landschaft, Häuser und Bäume versinken im Gestöber.",
          "Das Schneeblatt von Ōi gehört zu den Hauptwerken der Kisokaidō-Serie. Es liegt in der National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      },
      {
        "pid": "hgks68",
        "text": [
          "Moriyama liegt schon nahe dem Biwa-See, gegen das Ende der Kisokaidō und den Übergang nach Ōtsu und Kyōto. Das Blatt zeigt die Station in der offenen, tieferen Landschaft.",
          "Mit Stationen wie Moriyama führt Hiroshige die Inlandstrasse wieder an den Raum des Biwa-Sees heran. Das Blatt bewahrt die National Diet Library in Tokio."
        ],
        "fact": "um 1835–1838. National Diet Library, Tokio."
      }
    ]
  },
  {
    "id": "hiroshigeprovinces",
    "place": "Die über sechzig Provinzen",
    "when": "1853–1856",
    "map": {
      "x": 88,
      "y": 48
    },
    "mapLabel": "Provinzen",
    "intro": [
      "1853–1856 erscheint die Serie «Berühmte Orte der über sechzig Provinzen» (Rokujūyoshū meisho zue): rund siebzig hochformatige Ōban-Blätter, verlegt von Koshimuraya Heisuke.",
      "Die Ansichten reichen über das ganze Land: die Korbseilfähre in Hida, die Strudel von Naruto in Awa, die Togetsu-Brücke in Arashiyama, die Affenbrücke in Kai, ein Schneemorgen am Sumida, der Mond über den Reisterrassen von Sarashina.",
      "Im Gegensatz zur Tōkaidō und zur Kisokaidō ist dies keine Strassenfolge, sondern ein Atlas berühmter Orte."
    ],
    "works": [
      {
        "pid": "hgrk_hida",
        "text": [
          "Über eine Schlucht in Hida hängt eine Korbseilfähre; der Korb gleitet am Seil, tief darunter liegt der Fluss zwischen steilen, bewaldeten Hängen.",
          "Das Blatt gehört zur Serie «Berühmte Orte der über sechzig Provinzen» (Rokujūyoshū meisho zue), die 1853–1856 bei Koshimuraya Heisuke erscheint. Dieser Abzug liegt in der Library of Congress in Washington."
        ],
        "fact": "1853–1856. Library of Congress, Washington."
      },
      {
        "pid": "hgrk_naruto",
        "text": [
          "Vor der Küste von Awa drehen sich die Strudel der Naruto-Meerenge; das Wasser wirbelt in kräftigen Kreisen zwischen den Inseln.",
          "Die Naruto-Strudel sind eines der bekanntesten Motive der Provinzserie. Dieses Blatt, um 1855, bewahrt die National Library of New Zealand in Wellington."
        ],
        "fact": "1853–1856. National Library of New Zealand, Wellington."
      },
      {
        "pid": "hgrk_arashi",
        "text": [
          "In Arashiyama, in der Provinz Yamashiro, führt die Togetsu-Brücke über den Fluss; Kirschblüten und die bewaldeten Hügel stehen über dem Wasser.",
          "Das Blatt der Provinzserie zeigt einen der berühmtesten Orte bei Kyōto. Es liegt in der National Diet Library in Tokio."
        ],
        "fact": "1853–1856. National Diet Library, Tokio."
      },
      {
        "pid": "hgrk_saruhashi",
        "text": [
          "Die Affenbrücke von Kai spannt sich hoch über eine Schlucht; das Holzgewerk hängt kühn zwischen den Felsen, tief darunter fliesst der Fluss.",
          "Saruhashi ist ein klassischer berühmter Ort der Provinz Kai. Das Blatt der Serie 1853–1856 bewahrt die National Diet Library in Tokio."
        ],
        "fact": "1853–1856. National Diet Library, Tokio."
      },
      {
        "pid": "hgrk_sumida",
        "text": [
          "Am Sumida-Fluss in der Provinz Musashi liegt Schnee über Ufer, Booten und der fernen Stadt; der Morgen ist still und hell.",
          "Das Blatt führt die Provinzserie an den Fluss von Edo heran. Es liegt in der National Diet Library in Tokio."
        ],
        "fact": "1853–1856. National Diet Library, Tokio."
      },
      {
        "pid": "hgrk_sarashina",
        "text": [
          "In Sarashina in der Provinz Shinano steht der Mond über den Reisterrassen und dem Berg Kyōdai; die Felder stufen sich den Hang hinauf.",
          "Der «Reisefeldmond» von Sarashina ist ein klassisches Motiv. Das Blatt der Provinzserie liegt in der National Diet Library in Tokio."
        ],
        "fact": "1853–1856. National Diet Library, Tokio."
      }
    ]
  },
  {
    "id": "hiroshigeprovinces2",
    "place": "Küsten, Inseln und Heiligtümer",
    "when": "1853–1856",
    "map": {
      "x": 100,
      "y": 36
    },
    "mapLabel": "Küsten",
    "intro": [
      "Die Provinzserie erreicht auch Küsten und Inseln: die Bucht von Matsushima in Mutsu, den Tempel Ishiyama am Biwa-See, den Urami-Wasserfall in Nikkō, die Küste von Noto, das Hotohoto-Fest am Grossen Schrein von Izumo und die Goldminen der Insel Sado.",
      "Am Ishiyama kehrt Hiroshige an einen Ort zurück, den er schon in den acht Ansichten von Ōmi in der Mitte der 1830er Jahre gezeichnet hat.",
      "Mit dieser Serie ist er, zwanzig Jahre nach der Tōkaidō, erneut der Landschaftsmeister der östlichen Hauptstadt – nun im Blick über das ganze Land."
    ],
    "works": [
      {
        "pid": "hgrk_matsushima",
        "text": [
          "Vor der Küste von Mutsu liegen die Inseln von Matsushima im ruhigen Wasser, eine der klassischen schönen Ansichten Japans. Kiefern stehen auf den Felsen, der Horizont ist weit.",
          "Das Blatt der Provinzserie zeigt den berühmten Archipel im Norden. Es bewahrt die National Diet Library in Tokio."
        ],
        "fact": "1853–1856. National Diet Library, Tokio."
      },
      {
        "pid": "hgrk_ishiyama",
        "text": [
          "Der Tempel Ishiyama steht über dem Biwa-See in der Provinz Ōmi; Mond, See und Tempel gehören zu den klassischen acht Ansichten von Ōmi, hier in der späteren Provinzserie.",
          "Hiroshige kehrt an den Ort zurück, den er schon in den 1830er Jahren in den acht Ansichten von Ōmi gezeichnet hat. Das Blatt liegt in der National Diet Library in Tokio."
        ],
        "fact": "1853–1856. National Diet Library, Tokio."
      },
      {
        "pid": "hgrk_nikko",
        "text": [
          "In Nikkō in der Provinz Shimotsuke stürzt der Urami-Wasserfall hinter einem Felsvorsprung herab; man sieht das Wasser von hinten, zwischen Fels und Wald.",
          "Das Blatt der Provinzserie zeigt einen der bekannten Fälle am heiligen Berg von Nikkō. Es liegt in der National Diet Library in Tokio."
        ],
        "fact": "1853–1856. National Diet Library, Tokio."
      },
      {
        "pid": "hgrk_noto",
        "text": [
          "An der Küste von Noto stehen Felsen und Brandung unter einem weiten Himmel; Taki no ura ist ein berühmter Ort der Halbinsel.",
          "Das Blatt der Serie 1853–1856 liegt in der Library of Congress in Washington."
        ],
        "fact": "1853–1856. Library of Congress, Washington."
      },
      {
        "pid": "hgrk_izumo",
        "text": [
          "Am Grossen Schrein von Izumo, in der Provinz Izumo, versammeln sich die Menschen zum Hotohoto-Fest. Laternen, Bäume und die Hallen des Schreins füllen das Blatt.",
          "Das Festblatt der Provinzserie von 1853 hängt im Cleveland Museum of Art."
        ],
        "fact": "1853–1856. Cleveland Museum of Art."
      },
      {
        "pid": "hgrk_sado",
        "text": [
          "Auf der Insel Sado führen Stollen in den Berg; Arbeiter und ein Karren stehen im Tal, ein Bach fliesst vor den dunklen Mundlöchern, darüber erheben sich bewaldete Hänge.",
          "Die Goldminen sind das Blatt der Provinz Sado in der Serie der über sechzig Provinzen. Dieser Abzug von 1853 liegt in der Library of Congress in Washington."
        ],
        "fact": "1853–1856. Library of Congress, Washington."
      }
    ]
  },
  {
    "id": "hiroshigehyakkei",
    "place": "Hundert berühmte Ansichten von Edo",
    "when": "ab 1856",
    "map": {
      "x": 160,
      "y": 70
    },
    "mapLabel": "Edo",
    "intro": [
      "Ab 1856 arbeitet Hiroshige an den «Hundert berühmten Ansichten von Edo» (Meisho Edo Hyakkei), verlegt von Uoya Eikichi (Sakanaya Eikichi). Die Serie umfasst schliesslich rund 118 bis 119 Blätter, die meisten aus den Jahren 1856–1858.",
      "Sie beginnt wieder an der Nihonbashi, nach dem Schnee, und führt durch die Strassen der östlichen Hauptstadt: Kasumigaseki, Suruga-chō mit dem Fuji in der Gassenachse, die Kiyomizu-Halle am Shinobazu-Teich, die Suidō-Brücke, die Yatsumi-Brücke.",
      "1856 legt Hiroshige auch formell buddhistische Gelübde ab; er arbeitet weiter, bis in die letzten Jahre."
    ],
    "works": [
      {
        "pid": "hgmeh_nihonbashi",
        "text": [
          "Nach dem Schnee liegt die Nihonbashi hell und weit; der Himmel klar, die Brücke und der Fluss der östlichen Hauptstadt im Winterlicht.",
          "1856 beginnt bei Uoya Eikichi (Sakanaya Eikichi) die Serie «Hundert berühmte Ansichten von Edo». Das Eröffnungsblatt an der Nihonbashi liegt in der National Diet Library in Tokio."
        ],
        "fact": "1856. National Diet Library, Tokio."
      },
      {
        "pid": "hgmeh_kasumi",
        "text": [
          "Die Strasse von Kasumigaseki führt in die Tiefe der Stadt; Dächer, Mauern und Passanten staffeln sich den Hang hinunter, der Blick ist weit und klar.",
          "Das Blatt von 1856 gehört zu den frühen Blättern der Hundert Ansichten. Es liegt in der National Diet Library in Tokio."
        ],
        "fact": "1856. National Diet Library, Tokio."
      },
      {
        "pid": "hgmeh_suruga",
        "text": [
          "Durch die Strasse von Suruga-chō erscheint der Fuji zwischen den Dächern der Tuchläden; der Berg steht genau in der Achse der Gasse.",
          "Das Blatt von 1856 gehört zu den bekannten Stadtansichten der Serie. Dieser Abzug liegt in der Library of Congress in Washington."
        ],
        "fact": "1856. Library of Congress, Washington."
      },
      {
        "pid": "hgmeh_shinobazu",
        "text": [
          "Die Kiyomizu-Halle von Ueno steht über dem Shinobazu-Teich; Kirschblüten und das Wasser füllen den Blick, die Halle ragt auf Stützen über den Hang.",
          "Das Blatt der Hundert Ansichten liegt in der National Diet Library in Tokio."
        ],
        "fact": "1856. National Diet Library, Tokio."
      },
      {
        "pid": "hgmeh_suidobashi",
        "text": [
          "Über der Suidō-Brücke und dem Stadtteil Surugadai steht ein Drachen im Wind; der Fuji erscheint in der Ferne über den Dächern.",
          "Das Blatt von 1857 liegt in der Library of Congress in Washington."
        ],
        "fact": "1857. Library of Congress, Washington."
      },
      {
        "pid": "hgmeh_yatsumi",
        "text": [
          "Von der Yatsumi-Brücke geht der Blick über das Wasser und die Pfähle; ein Zweig ragt ins Bild, die Stadt liegt ruhig darüber.",
          "Das Blatt von 1856 der Hundert Ansichten liegt in der Library of Congress in Washington."
        ],
        "fact": "1856. Library of Congress, Washington."
      }
    ]
  },
  {
    "id": "hiroshigespring",
    "place": "Gärten, Blüten und Herbstlaub",
    "when": "1856–1857",
    "map": {
      "x": 170,
      "y": 78
    },
    "mapLabel": "Gärten",
    "intro": [
      "Durch die Hundert Ansichten ziehen Gärten und Jahreszeiten: der Pflaumengarten von Kameido, die Schwertlilien von Horikiri, der Blick vom Asukayama, das Akiba-Heiligtum in Ukeji, die Spiralhalle der Fünfhundert Arhats, die Ahornbäume von Mama.",
      "Viele dieser Blätter erscheinen 1857. Der gekrümmte Pflaumenstamm von Kameido und die Lilien von Horikiri gehören zu den bekanntesten Gartenbildern der Serie.",
      "Hiroshige setzt den Vordergrund oft nah und gross, die Stadt oder den Garten dahinter ruhig und weit."
    ],
    "works": [
      {
        "pid": "hgmeh_plum",
        "text": [
          "Im Pflaumengarten von Kameido steht ein stark gekrümmter, blühender Stamm nah im Vordergrund; dahinter liegen der Garten, die Besucher und der weite, rötliche Himmel.",
          "Das Blatt erscheint im 11. Monat 1857 in der Serie der Hundert Ansichten. Dieser Abzug bewahrt die Chester Beatty Library in Dublin."
        ],
        "fact": "1857. Chester Beatty Library, Dublin."
      },
      {
        "pid": "hgmeh_iris",
        "text": [
          "In Horikiri stehen Schwertlilien hoch im Vordergrund; die Blätter und Blüten füllen das Blatt, dahinter liegen der Garten und kleine Figuren.",
          "Das Blatt von 1857 gehört zu den bekanntesten Gartenansichten der Serie. Dieser Abzug liegt in der Library of Congress in Washington."
        ],
        "fact": "1857. Library of Congress, Washington."
      },
      {
        "pid": "hgmeh_asukayama",
        "text": [
          "Vom Hügel Asukayama geht der Blick nach Norden über Kirschbäume, das flache Land und den fernen Fuji. Der Hügel ist ein beliebter Ort der Stadt für das Blütenfest.",
          "Das Blatt der Hundert Ansichten liegt in der National Diet Library in Tokio."
        ],
        "fact": "1856–1857. National Diet Library, Tokio."
      },
      {
        "pid": "hgmeh_ukeji",
        "text": [
          "Im Bezirk des Akiba-Heiligtums in Ukeji stehen Herbstbäume über einem Teich; das Laub und die Spiegelung füllen die Fläche in ruhigen, kräftigen Farben.",
          "Das Blatt von 1857 der Hundert Ansichten hängt im Rijksmuseum in Amsterdam."
        ],
        "fact": "1857. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "hgmeh_sazaido",
        "text": [
          "Die Spiralhalle (Sazaidō) des Tempels der Fünfhundert Arhats steht über dem Wasser; die ungewöhnliche, runde Anlage ist von der Stadt aus zu sehen.",
          "Das Blatt der Hundert Ansichten liegt in der National Diet Library in Tokio."
        ],
        "fact": "1857. National Diet Library, Tokio."
      },
      {
        "pid": "hgmeh_mama",
        "text": [
          "In Mama stehen rote Ahornbäume über der Tekona-Kapelle und der verbundenen Brücke; das Herbstlaub hängt nah ins Bild.",
          "Das Blatt der Hundert Ansichten liegt in der National Diet Library in Tokio."
        ],
        "fact": "1857. National Diet Library, Tokio."
      }
    ]
  },
  {
    "id": "hiroshigenight",
    "place": "Regen, Nacht und Fluss",
    "when": "1856–1858",
    "map": {
      "x": 174,
      "y": 94
    },
    "mapLabel": "Regen",
    "intro": [
      "Regen, Feuerwerk und Wasser gehören zu den berühmtesten Blättern der Serie. 1857 erscheint der plötzliche Regen über der Shin-Ōhashi und Atake – ein spätes Hauptblatt der Hundert Ansichten.",
      "Dazu kommen die Mondkiefer in Ueno, die grosse Brücke von Senju, die Mannen-Brücke in Fukagawa und der Ayase-Fluss bei Kanegafuchi. Das Feuerwerk an der Ryōgoku erscheint 1858.",
      "Wetter und Nacht bleiben bis zuletzt eines von Hiroshiges festesten Themen."
    ],
    "works": [
      {
        "pid": "ohashi",
        "text": [
          "Ein Sommerregen überrascht die Menschen auf der Shin-Ōhashi; Schirme neigen sich, die Planken glänzen, der Fluss liegt dunkel darunter, am jenseitigen Ufer liegt Atake.",
          "Das Blatt von 1857 aus den Hundert berühmten Ansichten von Edo gehört zu Hiroshiges bekanntesten Wetterbildern. Dieser Abzug liegt in der Library of Congress in Washington."
        ],
        "fact": "1857. Library of Congress, Washington (dieser Abzug)."
      },
      {
        "pid": "hgmeh_fireworks",
        "text": [
          "Über der Ryōgoku-Brücke und dem Sumida steigen Feuerwerkskugeln in den Nachthimmel; Boote drängen sich auf dem Wasser, die Brücke liegt voller Menschen.",
          "Das Blatt erscheint 1858, im letzten Lebensjahr Hiroshiges, in der Serie der Hundert Ansichten. Es hängt im Cleveland Museum of Art."
        ],
        "fact": "1858. Cleveland Museum of Art."
      },
      {
        "pid": "hgmeh_moonpine",
        "text": [
          "In Ueno bildet ein Kiefernzweig einen Ring, durch den der Blick auf den Shinobazu-Teich fällt; der Ast steht nah und dunkel vor dem Wasser.",
          "Die «Mondkiefer» von 1857 gehört zu den berühmten Vordergrundmotiven der Serie. Dieser Abzug liegt in der Library of Congress in Washington."
        ],
        "fact": "1857. Library of Congress, Washington."
      },
      {
        "pid": "hgmeh_senju",
        "text": [
          "Die grosse Brücke von Senju führt über den Fluss am Nordrand der Stadt; Reisende und das weite Wasser füllen das Blatt.",
          "Das Blatt von 1856 der Hundert Ansichten liegt in der Library of Congress in Washington."
        ],
        "fact": "1856. Library of Congress, Washington."
      },
      {
        "pid": "hgmeh_mannen",
        "text": [
          "Unter der Mannen-Brücke in Fukagawa liegt das Wasser; oft ragt im Vordergrund der Rücken einer Schildkröte ins Bild, darüber die Brücke und die Speicher.",
          "Das Blatt von 1857 liegt in der Library of Congress in Washington."
        ],
        "fact": "1857. Library of Congress, Washington."
      },
      {
        "pid": "hgmeh_ayase",
        "text": [
          "Am Ayase-Fluss bei Kanegafuchi stehen Pflanzen nah im Vordergrund; hinter den Blättern liegt der ruhige Fluss der östlichen Stadt.",
          "Das Blatt von 1857 der Hundert Ansichten liegt in der Library of Congress in Washington."
        ],
        "fact": "1857. Library of Congress, Washington."
      }
    ]
  },
  {
    "id": "hiroshigewinter",
    "place": "Schnee, Adler und Strassen",
    "when": "1857–1858",
    "map": {
      "x": 164,
      "y": 108
    },
    "mapLabel": "Winter",
    "intro": [
      "Die Serie hält auch den Winter und den Rand der Stadt fest: ein Adler über der verschneiten Ebene von Jūmantsubo in Fukagawa, die Azuma-Brücke mit dem fernen Kinryūzan, die Bikuni-Brücke im Schnee, die Nacht im Theaterviertel Saruwaka-chō, die Trommelbrücke in Meguro, das Reitfeld von Takata.",
      "Das Schneeblatt der Bikuni-Brücke erscheint 1858. Die übrigen Blätter dieser Station gehören vor allem ins Jahr 1857.",
      "So schliesst sich der Blick auf Edo: nicht nur Gärten und Brücken, auch Schnee, Tiere und die Strassen am Rand."
    ],
    "works": [
      {
        "pid": "hgmeh_jumbo",
        "text": [
          "Ein Adler sitzt auf einem beschneiten Stamm und blickt über die weite, verschneite Ebene von Jūmantsubo bei Fukagawa; der Himmel ist kalt und weit.",
          "Das Blatt von 1857 gehört zu den bekannten Winteransichten der Serie. Es hängt im Rijksmuseum in Amsterdam."
        ],
        "fact": "1857. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "hgmeh_azuma",
        "text": [
          "Von der Azuma-Brücke geht der Blick zur fernen Tempelhalle von Kinryūzan in Asakusa; der Fluss und die Boote liegen im Mittelgrund.",
          "Das Blatt von 1857 der Hundert Ansichten liegt in der Library of Congress in Washington."
        ],
        "fact": "1857. Library of Congress, Washington."
      },
      {
        "pid": "hgmeh_bikuni",
        "text": [
          "Die Bikuni-Brücke liegt unter schwerem Schnee; Dächer, Geländer und der Weg versinken im Weissen, die Stadt ist still.",
          "Das Blatt erscheint 1858 in der Serie der Hundert Ansichten. Dieser Abzug liegt in der Library of Congress in Washington."
        ],
        "fact": "1858. Library of Congress, Washington."
      },
      {
        "pid": "hgmeh_saruwaka",
        "text": [
          "Im Theaterviertel Saruwaka-chō stehen die Schatten der Passanten scharf im Mondlicht; die Strasse der Theater ist nachts belebt und still zugleich.",
          "Das Blatt der Hundert Ansichten liegt in der National Diet Library in Tokio."
        ],
        "fact": "1856–1857. National Diet Library, Tokio."
      },
      {
        "pid": "hgmeh_meguro",
        "text": [
          "In Meguro wölbt sich die steile Trommelbrücke über den Weg; darüber liegt der Abendhügel, Reisende steigen die Bogenbrücke hinauf.",
          "Das Blatt von 1857 der Hundert Ansichten liegt in der Library of Congress in Washington."
        ],
        "fact": "1857. Library of Congress, Washington."
      },
      {
        "pid": "hgmeh_takata",
        "text": [
          "Am Reitfeld von Takata laufen Pferde unter Bäumen; der offene Übungsplatz liegt am Rand der Stadt.",
          "Das Blatt von 1857 der Hundert Ansichten liegt in der Library of Congress in Washington."
        ],
        "fact": "1857. Library of Congress, Washington."
      }
    ]
  },
  {
    "id": "hiroshige1858",
    "place": "Letzte Jahre und der Tod 1858",
    "when": "1857–1858",
    "map": {
      "x": 152,
      "y": 122
    },
    "mapLabel": "1858",
    "intro": [
      "1856 legt Hiroshige formell buddhistische Gelübde ab und arbeitet weiter. 1857 erscheint in den Hundert Ansichten das Blatt der Fuchsfeuer an Silvester in Ōji; dazu kommt der Blick auf Shiba Shinmei und den Zōjō-ji.",
      "1858 erscheint bei Tsutaya Kichizō (Kōeidō) eine Serie von sechsunddreissig Ansichten des Fuji: das Tor nach Enoshima, der Kiefernstrand von Miho, die See vor Satta, der See von Hakone.",
      "Am 12. Oktober 1858 stirbt Utagawa Hiroshige in Edo. Als Todesursache wird in der Überlieferung die Cholera genannt; in diesem Jahr herrscht in der Stadt eine Epidemie. Er wird auf dem Friedhof des Tempels Tōgaku-ji in Asakusa beigesetzt. Sein Schüler und Adoptivsohn Suzuki Shigenobu führt den Namen als Hiroshige II. weiter."
    ],
    "works": [
      {
        "pid": "hgmeh_foxfires",
        "text": [
          "In der Silvesternacht versammeln sich die Füchse mit ihren Feuerlichtern unter einem Baum in Ōji; die Lichter stehen wie Laternen in der dunklen Landschaft vor den Feldern.",
          "Das Blatt von 1857 gehört zu den späten, bekannten Blättern der Hundert Ansichten. Es liegt in der National Diet Library in Tokio."
        ],
        "fact": "1857. National Diet Library, Tokio."
      },
      {
        "pid": "hgmeh_shiba",
        "text": [
          "In Shiba stehen der Shinmei-Schrein und die Tempelanlage des Zōjō-ji; Dächer, Bäume und der Weg führen in das heilige Gelände am Rand der Stadt.",
          "Das Blatt der Hundert Ansichten liegt in der National Diet Library in Tokio."
        ],
        "fact": "1857–1858. National Diet Library, Tokio."
      },
      {
        "pid": "hgfuji_enoshima",
        "text": [
          "Das Tor am Zugang zur Insel Enoshima steht vor dem Meer; hinter der Küste von Sagami erhebt sich der Fuji.",
          "1858 erscheint bei Tsutaya Kichizō (Kōeidō) eine Serie von sechsunddreissig Ansichten des Fuji. Dieses Blatt liegt in der Library of Congress in Washington."
        ],
        "fact": "1858. Library of Congress, Washington."
      },
      {
        "pid": "hgfuji_miho",
        "text": [
          "Am Kiefernstrand von Miho in der Provinz Suruga stehen die Bäume vor dem Meer; der Fuji erscheint über der Bucht, ein klassischer Blick auf den Berg.",
          "Das Blatt gehört zur Fuji-Serie von 1858. Es liegt in der Library of Congress in Washington."
        ],
        "fact": "1858. Library of Congress, Washington."
      },
      {
        "pid": "hgfuji_satta",
        "text": [
          "Vor der Küste von Satta in Suruga türmen sich die Wellen; durch das Wasser und den Gischt erscheint der Fuji, nah und fest über der See.",
          "Das Blatt der Fuji-Serie von 1858 gehört zu den bekannten späten Meeresansichten Hiroshiges. Dieser Abzug liegt in der Library of Congress in Washington."
        ],
        "fact": "1858. Library of Congress, Washington."
      },
      {
        "pid": "hgfuji_hakone",
        "text": [
          "Am See von Hakone liegt der Fuji über dem Wasser und den Bergen; die Passlandschaft, die Hiroshige schon in der Tōkaidō-Serie gezeichnet hat, erscheint hier in der späten Fuji-Serie wieder.",
          "Das Blatt von 1858 liegt in der Library of Congress in Washington."
        ],
        "fact": "1858. Library of Congress, Washington."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
