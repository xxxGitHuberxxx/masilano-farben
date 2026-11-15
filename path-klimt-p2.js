// v8.0 Gustav Klimt life journey, Part 2 (c. 1903–1918), completing the path.
// Appends stations and works to the existing Klimt path; does not rewrite Part 1.
// Reuses the gallery works kiss (Der Kuss) and kgarden (Bauerngarten) by pid only (not listed in works[]).
// Quotes are self-translated from documented German sources
// (Flöge postcards and letter; Kunstschau opening address).
(function () {
  var works = [
  {
    "id": "goldknight",
    "title": "Der goldene Ritter",
    "artist": "Gustav Klimt",
    "year": "1903",
    "museum": "Präfekturmuseum Aichi, Nagoya",
    "source": "Wikimedia Commons: «Klimt - The Golden Knight, 1903.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "goldapple",
    "title": "Goldener Apfelbaum",
    "artist": "Gustav Klimt",
    "year": "1903",
    "museum": "Historische Fotografie; das Original verbrannte 1945 auf Schloss Immendorf",
    "source": "Wikimedia Commons: «Klimt - Goldener Apfelbaum, 1903.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "birkforest",
    "title": "Birkenwald",
    "artist": "Gustav Klimt",
    "year": "1903",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Gustav Klimt, Birch Forest, 1903 - Paul G. Allen Collection.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "poplar2",
    "title": "Die grosse Pappel II (Aufziehendes Gewitter)",
    "artist": "Gustav Klimt",
    "year": "1902–1903",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Approaching Thunderstorm (The Large Poplar II) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kpeartree",
    "title": "Birnbaum",
    "artist": "Gustav Klimt",
    "year": "1903",
    "museum": "Busch-Reisinger Museum, Harvard Art Museums, Cambridge",
    "source": "Wikimedia Commons: «Gustav Klimt - Pear Tree - BR66.4 - Busch–Reisinger Museum.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "wittgenstein",
    "title": "Bildnis Margaret Stonborough-Wittgenstein",
    "artist": "Gustav Klimt",
    "year": "1905",
    "museum": "Neue Pinakothek, München",
    "source": "Wikimedia Commons: «Gustav Klimt 055.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "gallia",
    "title": "Bildnis Hermine Gallia",
    "artist": "Gustav Klimt",
    "year": "1904",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Gustav Klimt 053.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "fritza",
    "title": "Bildnis Fritza Riedler",
    "artist": "Gustav Klimt",
    "year": "1906",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Fritza Riedler - 3379 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "adelestudy",
    "title": "Studie zum Bildnis Adele Bloch-Bauer I",
    "artist": "Gustav Klimt",
    "year": "um 1903–1907",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Gustav Klimt - Study for Portrait of Adele Bloch-Bauer I - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "adele",
    "title": "Bildnis Adele Bloch-Bauer I",
    "artist": "Gustav Klimt",
    "year": "1907",
    "museum": "Neue Galerie, New York",
    "source": "Wikimedia Commons: «Gustav Klimt - Porträt der Adele Bloch-Bauer I (1907).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rosetrees",
    "title": "Rosen unter Bäumen",
    "artist": "Gustav Klimt",
    "year": "um 1905",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Gustav Klimt - Rosebushes under the Trees - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kissdetail",
    "title": "Der Kuss (Detail)",
    "artist": "Gustav Klimt",
    "year": "1907–1908",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «The Kiss - Gustav Klimt - Google Cultural Institute.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sunfarm",
    "title": "Bauerngarten mit Sonnenblumen",
    "artist": "Gustav Klimt",
    "year": "um 1907",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Bauerngarten mit Sonnenblumen - 3685 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ksunflower",
    "title": "Die Sonnenblume",
    "artist": "Gustav Klimt",
    "year": "um 1907–1908",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Sonnenblume - 10500 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kpoppies",
    "title": "Blühender Mohn",
    "artist": "Gustav Klimt",
    "year": "1907",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Blühender Mohn - 5166 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "meadow",
    "title": "Blumenwiese",
    "artist": "Gustav Klimt",
    "year": "um 1908",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Gustav Klimt - Blumenwiese (ca. 1908).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "stocletexp",
    "title": "Die Erwartung (Werkvorlage)",
    "artist": "Gustav Klimt",
    "year": "um 1905–1911",
    "museum": "MAK – Museum für angewandte Kunst, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt 030.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "stocletembrace",
    "title": "Die Umarmung (Werkvorlage)",
    "artist": "Gustav Klimt",
    "year": "um 1905–1911",
    "museum": "MAK – Museum für angewandte Kunst, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt 031.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "stoclettree",
    "title": "Der Lebensbaum (Werkvorlage)",
    "artist": "Gustav Klimt",
    "year": "1910–1911",
    "museum": "MAK – Museum für angewandte Kunst, Wien",
    "source": "Wikimedia Commons: «Klimt - Nine Cartoons for the Stoclet Frieze- Part 4, Part of the tree of life (1910-11).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "stocletritter",
    "title": "Der Ritter (Werkvorlage)",
    "artist": "Gustav Klimt",
    "year": "1910–1911",
    "museum": "MAK – Museum für angewandte Kunst, Wien",
    "source": "Wikimedia Commons: «Klimt - Ritter Design.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "stocletrose",
    "title": "Rosenstrauch (Werkvorlage)",
    "artist": "Gustav Klimt",
    "year": "1910–1911",
    "museum": "MAK – Museum für angewandte Kunst, Wien",
    "source": "Wikimedia Commons: «KlimtRosebush.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "featherboa",
    "title": "Dame mit Hut und Federboa",
    "artist": "Gustav Klimt",
    "year": "1909",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Gustav Klimt 009.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "barbarafloege",
    "title": "Bildnis Barbara Flöge",
    "artist": "Gustav Klimt",
    "year": "1915",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Portrait of Barbara Floge. Mother of Emilie Floge 1915.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "thepark",
    "title": "Der Park",
    "artist": "Gustav Klimt",
    "year": "1910 oder früher",
    "museum": "Museum of Modern Art, New York",
    "source": "Wikimedia Commons: «Klimt - Park.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kammer2",
    "title": "Schloss Kammer am Attersee II",
    "artist": "Gustav Klimt",
    "year": "1909",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Klimt - Schloss Kammer on the Attersee, II, 1909.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kammer3",
    "title": "Schloss Kammer am Attersee III",
    "artist": "Gustav Klimt",
    "year": "1910",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Schloss Kammer am Attersee III - 4318 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kammer4",
    "title": "Schloss Kammer am Attersee IV",
    "artist": "Gustav Klimt",
    "year": "1910",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Klimt - Schloss Kammer on the Attersee IV, 1910.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kammerave",
    "title": "Allee zum Schloss Kammer",
    "artist": "Gustav Klimt",
    "year": "1912",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Allee zum Schloss Kammer - 2892 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kammerpark",
    "title": "Park von Schloss Kammer",
    "artist": "Gustav Klimt",
    "year": "1910",
    "museum": "Neue Galerie, New York",
    "source": "Wikimedia Commons: «Park at Kammer Castle.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "watercastle",
    "title": "Wasserschloss",
    "artist": "Gustav Klimt",
    "year": "1908–1909",
    "museum": "Nationalgalerie Prag",
    "source": "Wikimedia Commons: «Water Castle (Klimt).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "oefarm",
    "title": "Oberösterreichisches Bauernhaus",
    "artist": "Gustav Klimt",
    "year": "um 1911",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Klimt - Oberösterreichisches Bauernhaus.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kapple",
    "title": "Apfelbaum I",
    "artist": "Gustav Klimt",
    "year": "um 1912",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Klimt-Apfelbaum I.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kapple2",
    "title": "Apfelbaum II",
    "artist": "Gustav Klimt",
    "year": "um 1916",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Gustav Klimt 013.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "malcesine",
    "title": "Malcesine am Gardasee",
    "artist": "Gustav Klimt",
    "year": "1913",
    "museum": "Historische Fotografie; das Original verbrannte 1945 auf Schloss Immendorf",
    "source": "Wikimedia Commons: «Gustav Klimt 042.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "cassone",
    "title": "Kirche in Cassone",
    "artist": "Gustav Klimt",
    "year": "1913",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Klimt - Kirche in Cassone - 1913.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "italygarden",
    "title": "Italienische Gartenlandschaft",
    "artist": "Gustav Klimt",
    "year": "1913",
    "museum": "Kunsthaus Zug",
    "source": "Wikimedia Commons: «Gustav Klimt, Italienische Gartenlandschaft, 1913.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "unterach",
    "title": "Häuser in Unterach am Attersee",
    "artist": "Gustav Klimt",
    "year": "um 1916",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Houses at Unterach am Attensee.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ualslope",
    "title": "Waldabhang bei Unterach am Attersee",
    "artist": "Gustav Klimt",
    "year": "1916",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Gustav Klimt - Waldabhang bei Unterach am Attersee (1916).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "litzlberg",
    "title": "Litzlberg am Attersee",
    "artist": "Gustav Klimt",
    "year": "um 1915",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Gustav Klimt - Litzlberg am Attersee.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "litzkeller",
    "title": "Litzlbergkeller",
    "artist": "Gustav Klimt",
    "year": "1915–1916",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Litzlbergkeller (1915-1916).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "weissenbach",
    "title": "Forsthaus in Weissenbach II",
    "artist": "Gustav Klimt",
    "year": "um 1914",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Gustav Klimt 011.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pfarrgarten",
    "title": "Gartenlandschaft mit Bergkuppe (Pfarrgarten)",
    "artist": "Gustav Klimt",
    "year": "um 1916",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Gartenlandschaft mit Bergkuppe.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mada",
    "title": "Bildnis Mäda Primavesi",
    "artist": "Gustav Klimt",
    "year": "um 1912–1913",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Mäda Primavesi (1903–2000) MET DP243354.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "adele2",
    "title": "Bildnis Adele Bloch-Bauer II",
    "artist": "Gustav Klimt",
    "year": "1912",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Klimt - ABBII Portrait.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "eugenia",
    "title": "Bildnis Eugenia Primavesi",
    "artist": "Gustav Klimt",
    "year": "um 1913–1914",
    "museum": "Städtisches Kunstmuseum Toyota",
    "source": "Wikimedia Commons: «Klimt - Bildnis Eugenia Primavesi.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "fmbeer",
    "title": "Bildnis Friederike Maria Beer",
    "artist": "Gustav Klimt",
    "year": "1916",
    "museum": "Tel Aviv Museum of Art",
    "source": "Wikimedia Commons: «Portrait of Friedericke Maria Beer.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ladyfan",
    "title": "Dame mit Fächer",
    "artist": "Gustav Klimt",
    "year": "1917–1918",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Gustav Klimt - Dame mit Fächer.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dancer",
    "title": "Die Tänzerin",
    "artist": "Gustav Klimt",
    "year": "um 1916–1917",
    "museum": "Neue Galerie, New York",
    "source": "Wikimedia Commons: «Klimt - Tänzerin.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "riamunk3",
    "title": "Bildnis Ria Munk III",
    "artist": "Gustav Klimt",
    "year": "1917, unvollendet",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Portrait of Ria Munk III, by Gustav Klimt, 1917, unfinished, oil on canvas - California Palace of the Legion of Honor - San Francisco, CA - DSC02785.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "deathfig",
    "title": "Tod und Leben (Ausschnitt: der Tod)",
    "artist": "Gustav Klimt",
    "year": "um 1910–1915",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Death and Life - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "riamunkbed",
    "title": "Ria Munk auf dem Totenbett",
    "artist": "Gustav Klimt",
    "year": "1912",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Gustav Klimt - Ria Munk on her Deathbed.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "staude",
    "title": "Bildnis Johanna Staude",
    "artist": "Gustav Klimt",
    "year": "1917–1918, unvollendet",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Johanna Staude - 5551 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "zuckerkandl",
    "title": "Bildnis Amalie Zuckerkandl",
    "artist": "Gustav Klimt",
    "year": "1917–1918, unvollendet",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Amalie Zuckerkandl - 7700 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kbaby",
    "title": "Baby (Wiege)",
    "artist": "Gustav Klimt",
    "year": "1917–1918",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Gustav Klimt, Baby (Cradle), 1917-1918, NGA 56662.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "ladyhead",
    "title": "Frauenkopf",
    "artist": "Gustav Klimt",
    "year": "1917",
    "museum": "LENTOS Kunstmuseum Linz",
    "source": "Wikimedia Commons: «Gustav Klimt Frauenkopf 1917.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ladypiacenza",
    "title": "Bildnis einer Dame",
    "artist": "Gustav Klimt",
    "year": "1917",
    "museum": "Galleria d’Arte Moderna Ricci Oddi, Piacenza",
    "source": "Wikimedia Commons: «Gustav-Klimt, Portrait of a Lady, 1917, Galleria d'Arte Moderna Ricci Oddi.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ladywhite",
    "title": "Dame in Weiss",
    "artist": "Gustav Klimt",
    "year": "um 1917–1918, unvollendet",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Dame in Weiss - 4286 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'klimt'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1862–1918";
  path.subtitle = "Von Baumgarten bis zu den letzten Bildern";
  path.intro = "Reise mit Gustav Klimt durch sein ganzes Leben: von der Kindheit in Baumgarten und der Kunstgewerbeschule über die Künstler-Compagnie, das Burgtheater und das Kunsthistorische Museum, den Tod des Vaters und des Bruders 1892, die Secession und den Beethovenfries bis zur goldenen Zeit, zur Kunstschau 1908, zum Stoclet-Fries, zu Emilie Flöge, zu den Landschaften am Attersee und am Gardasee, zu den späten bunten Bildnissen und zu «Tod und Leben». Kurze Stationen, Bilder zum Ausmalen und überlieferte Stimmen: Ansichtskarten und ein Brief an Emilie Flöge sowie die Festrede zur Kunstschau. Klimt stirbt am 6. Februar 1918 in Wien.";
  path.ending = [
  "In den letzten Jahren entstehen bunte Bildnisse und Landschaften, daneben unvollendete Porträts wie Johanna Staude, Amalie Zuckerkandl und die «Dame in Weiss». 1916 verbringt Klimt den letzten gemeinsamen Sommer mit Emilie Flöge am Attersee. Am 30. Dezember 1917 schreibt er ihr aus Winkelsdorf: «…ein Gruss aus dem Innersten heraus und [ich] wünsche Dir ein aller allerglücklichstes Neujahr. – wie wir es Beide so dringendst brauchen.»",
  "Am 11. Januar 1918 erleidet Klimt in Wien einen Schlaganfall. Er stirbt am 6. Februar 1918 im Allgemeinen Krankenhaus in Wien, sechsundfünfzig Jahre alt.",
  "Zurück bleiben unter anderem der «Kuss» im Belvedere, das goldene Bildnis der Adele Bloch-Bauer, die Werkvorlagen zum Stoclet-Fries im MAK, die Landschaften vom Attersee und vom Gardasee und die späten Bildnisse. Von ihm selbst, so hatte er geschrieben, gebe es kein Selbstporträt: man solle seine Bilder betrachten."
];
  path.epilogue = "Am 11. Januar 1918 erleidet Gustav Klimt in Wien einen Schlaganfall. Er stirbt am 6. Februar 1918 im Allgemeinen Krankenhaus, sechsundfünfzig Jahre alt. Zurück bleiben der «Kuss», die goldenen Bildnisse, der Stoclet-Fries, die Landschaften und die späten Porträts – und die Stimmen aus Karten und Briefen an Emilie Flöge.";
  var stations = [
  {
    "id": "klimtgold",
    "place": "Wien · Die goldene Zeit",
    "when": "1903–1907",
    "map": {
      "x": 198,
      "y": 76
    },
    "mapLabel": "Gold",
    "intro": [
      "Im Dezember 1903 reist Klimt nach Ravenna. Auf einer Ansichtskarte an Emilie Flöge schreibt er von viel Armseligem – und von Mosaiken von unerhörter Pracht. In den folgenden Jahren verdichtet sich der goldene Stil in Bildnissen und in einzelnen Baum- und Waldstücken.",
      "Es entstehen unter anderem das Bildnis der Hermine Gallia, das der Margaret Stonborough-Wittgenstein und das der Fritza Riedler, dann 1907 das goldene Bildnis der Adele Bloch-Bauer. Daneben stehen der «Goldene Ritter», der «Goldene Apfelbaum» und Landschaften wie der «Birkenwald»."
    ],
    "works": [
      {
        "pid": "goldknight",
        "text": [
          "Ein Ritter in goldener Rüstung reitet mit eingelegter Lanze durch ein felsiges Feld. Das Bild von 1903 heisst auch «Leben ist ein Kampf».",
          "Es hängt im Präfekturmuseum Aichi in Nagoya. Die goldene Fläche und die ornamentale Rüstung gehören schon zur Zeit nach der Reise nach Ravenna."
        ],
        "fact": "Öl, Tempera und Blattgold auf Leinwand, 1903. Präfekturmuseum Aichi, Nagoya."
      },
      {
        "pid": "goldapple",
        "text": [
          "Ein Apfelbaum steht als dichtes, gold durchwirktes Ornament vor dunklem Grund, die Früchte wie scheibenförmige Zeichen. Das Bild entsteht 1903.",
          "Das Original verbrennt 1945 auf Schloss Immendorf in Niederösterreich, wo es ausgelagert war. Erhalten bleibt unter anderem diese historische Aufnahme."
        ],
        "fact": "Öl und Gold auf Leinwand, 1903. Historische Aufnahme; Original 1945 auf Schloss Immendorf verbrannt."
      },
      {
        "pid": "birkforest",
        "text": [
          "Birkenstämme stehen dicht beieinander, der Waldboden ist ein Teppich aus Moos, Laub und Licht. Das Bild entsteht 1903, ein Jahr nach dem «Buchenwald I».",
          "Es befand sich in der Sammlung Paul G. Allen und ist heute in Privatbesitz. Die Waldstücke gehören zu den Sommern am Attersee."
        ],
        "fact": "Öl auf Leinwand, 1903. Privatbesitz."
      },
      {
        "pid": "poplar2",
        "text": [
          "Eine hohe Pappel steigt vor einem dunklen, gewittrigen Himmel auf, die Wiese davor noch hell. Das Bild heisst «Die grosse Pappel II» und entsteht 1902 bis 1903.",
          "Es hängt im Leopold Museum in Wien. Der Blick gilt einem einzelnen Baum, nicht einer weiten Landschaft."
        ],
        "fact": "Öl auf Leinwand, 1902–1903. Leopold Museum, Wien."
      },
      {
        "pid": "kpeartree",
        "text": [
          "Ein Birnbaum füllt die Fläche als dichtes Mosaik aus Blättern, Blüten und Früchten, der Stamm kaum zu fassen. Das Bild entsteht 1903.",
          "Es gehört dem Busch-Reisinger Museum der Harvard Art Museums in Cambridge. Wie der goldene Apfelbaum zeigt es einen einzelnen Baum als Ornament."
        ],
        "fact": "Öl und Gold auf Leinwand, 1903. Busch-Reisinger Museum, Harvard Art Museums, Cambridge."
      },
      {
        "pid": "wittgenstein",
        "text": [
          "Margaret Stonborough-Wittgenstein steht in einem weissen Kleid vor einem geometrisch gegliederten, teilweise goldenen Grund. Das Bildnis entsteht 1905.",
          "Die Dargestellte ist eine Schwester des Philosophen Ludwig Wittgenstein. Das Bild hängt in der Neuen Pinakothek in München."
        ],
        "fact": "Öl auf Leinwand, 1905. Neue Pinakothek, München."
      },
      {
        "pid": "gallia",
        "text": [
          "Hermine Gallia sitzt in einem hellen, weich fliessenden Kleid, die Hände im Schoss, der Grund in zarten, ornamentalen Tönen. Das Bildnis entsteht 1904.",
          "Es gehört der National Gallery in London. Hermine Gallia war die Frau des Wiener Industriellen Moriz Gallia, eines frühen Sammlers Klimts."
        ],
        "fact": "Öl auf Leinwand, 1904. National Gallery, London."
      },
      {
        "pid": "fritza",
        "text": [
          "Fritza Riedler sitzt in einem hellen Kleid vor einem kräftig gemusterten Grund; hinter dem Kopf erscheint ein goldenes, thronartiges Ornament. Das Bildnis entsteht 1906.",
          "Es hängt im Belvedere in Wien. Die klare Geometrie um den Kopf gehört schon ganz zur goldenen Zeit."
        ],
        "fact": "Öl auf Leinwand, 1906. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "adelestudy",
        "text": [
          "Eine Zeichnung hält den Kopf und den Oberkörper Adele Bloch-Bauers fest, noch ohne den späteren Goldgrund. Die Studie gehört zu den Vorarbeiten für das Bildnis von 1907.",
          "Sie zeigt, wie genau Klimt die Haltung und den Blick festlegt, bevor das ornamentale Gold hinzukommt."
        ],
        "fact": "Zeichnung, um 1903–1907. Sammlung nicht ermittelt."
      },
      {
        "pid": "adele",
        "text": [
          "Adele Bloch-Bauer sitzt in einem goldenen, dicht ornamentierten Kleid, der Grund ein Mosaik aus Gold, Silber und Zeichen. Das Bildnis entsteht 1907, nach Jahren der Arbeit.",
          "Es gehört der Neuen Galerie in New York. Im Dezember 1903 schreibt Klimt von Ravenna an Emilie Flöge über die Mosaiken von unerhörter Pracht – ein Eindruck, der in solchen Goldgründen nachwirkt."
        ],
        "fact": "Öl, Silber und Gold auf Leinwand, 1907. Neue Galerie, New York.",
        "quote": {
          "text": "In Ravenna viel Armseliges – die Mosaiken von unerhörter Pracht.",
          "cite": "Ansichtskarte an Emilie Flöge, Ravenna, 2. Dezember 1903"
        }
      },
      {
        "pid": "rosetrees",
        "text": [
          "Unter hohen Baumkronen blühen Rosenstöcke, Laub und Blüten zu einem dichten, teppichartigen Muster verwoben. Das Bild entsteht um 1905.",
          "Es hängt im Musée d’Orsay in Paris. Wie in den Waldstücken am Attersee tritt der Horizont weit zurück."
        ],
        "fact": "Öl auf Leinwand, um 1905. Musée d’Orsay, Paris."
      }
    ]
  },
  {
    "id": "klimtkunstschau",
    "place": "Wien · Kunstschau 1908",
    "when": "1908",
    "map": {
      "x": 196,
      "y": 108
    },
    "mapLabel": "Kunstschau",
    "intro": [
      "1905 tritt die sogenannte Klimt-Gruppe aus der Secession aus. Am 1. Juni 1908 eröffnet Klimt die Kunstschau in einem von Josef Hoffmann errichteten, vorläufigen Bau auf dem Grund des heutigen Konzerthauses. In der Festrede sagt er, kein Gebiet menschlichen Lebens sei zu unbedeutend, um künstlerischen Bestrebungen Raum zu bieten.",
      "Im eigens gestalteten Klimt-Raum hängt unter anderem der «Kuss» von 1907 bis 1908. Der österreichische Staat kauft das Bild für die Moderne Galerie, das heutige Belvedere. In denselben Jahren entstehen dichte Garten- und Wiesenstücke."
    ],
    "works": [
      {
        "pid": "kiss",
        "text": [
          "Ein Paar umarmt sich am Rand einer Blumenwiese, gehüllt in goldene Gewänder. Das Bild heisst «Der Kuss», ist quadratisch und entsteht 1907 bis 1908.",
          "Es wird 1908 auf der Wiener Kunstschau gezeigt. Der österreichische Staat kauft es dort für die Moderne Galerie, das heutige Belvedere."
        ],
        "fact": "Öl auf Leinwand mit Blattgold, 1907–1908. Österreichische Galerie Belvedere, Wien.",
        "quote": {
          "text": "…dass kein Gebiet menschlichen Lebens zu unbedeutend und gering ist, um künstlerischen Bestrebungen Raum zu bieten.",
          "cite": "Festrede zur Eröffnung der Kunstschau, Wien, 1. Juni 1908"
        }
      },
      {
        "pid": "kissdetail",
        "text": [
          "Der Ausschnitt zeigt die Köpfe des Paares aus dem «Kuss»: die Gesichter dicht beieinander, das Gold des Gewands um sie herum. Das ganze Bild entsteht 1907 bis 1908.",
          "Am 1. Juni 1908 eröffnet Klimt die Kunstschau in Wien. In der Festrede sagt er, kein Gebiet menschlichen Lebens sei zu unbedeutend, um künstlerischen Bestrebungen Raum zu bieten. Der «Kuss» wird dort gezeigt und vom Staat erworben."
        ],
        "fact": "Öl auf Leinwand mit Blattgold, Detail, 1907–1908. Österreichische Galerie Belvedere, Wien.",
        "quote": {
          "text": "…dass kein Gebiet menschlichen Lebens zu unbedeutend und gering ist, um künstlerischen Bestrebungen Raum zu bieten.",
          "cite": "Festrede zur Eröffnung der Kunstschau, Wien, 1. Juni 1908"
        }
      },
      {
        "pid": "kgarden",
        "text": [
          "Ein Bauerngarten erscheint als dichter Teppich aus Mohn, Glockenblumen und Laub, fast ohne Horizont. Das Bild entsteht um 1905 bis 1907.",
          "Es gehört in dieselben Jahre wie die anderen Gartenstücke und der «Kuss». Es befindet sich in Privatbesitz."
        ],
        "fact": "Öl auf Leinwand, um 1905–1907. Privatbesitz."
      },
      {
        "pid": "sunfarm",
        "text": [
          "In einem Bauerngarten stehen Sonnenblumen zwischen dichtem Blumenwuchs, fast ohne freien Himmel. Das Bild entsteht um 1907.",
          "Es hängt im Belvedere in Wien. Gartenstücke dieser Jahre gehören in denselben Umkreis wie der «Kuss» und die Kunstschau 1908."
        ],
        "fact": "Öl auf Leinwand, um 1907. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "ksunflower",
        "text": [
          "Eine einzelne, hohe Sonnenblume steht in einem dichten Beet, der Blick nah am Gewächs, der Horizont verschwunden. Das Bild entsteht um 1907 bis 1908.",
          "Es gehört dem Belvedere in Wien. Wie in den Gartenbildern dieser Jahre wird die Pflanze zum ornamentalen Muster."
        ],
        "fact": "Öl auf Leinwand, um 1907–1908. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "kpoppies",
        "text": [
          "Ein Mohnfeld leuchtet in einem dichten Teppich aus Rot, Grün und kleinen Blüten, ohne weiten Horizont. Das Bild entsteht 1907.",
          "Es hängt im Belvedere in Wien. In demselben Jahr vollendet Klimt auch das goldene Bildnis der Adele Bloch-Bauer."
        ],
        "fact": "Öl auf Leinwand, 1907. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "meadow",
        "text": [
          "Eine Blumenwiese füllt die ganze Fläche, Gräser und Blüten dicht an dicht, der Himmel kaum sichtbar. Das Bild entsteht um 1908.",
          "Es befindet sich in Privatbesitz. Auch dieses Wiesenstück gehört in die Jahre um die Kunstschau."
        ],
        "fact": "Öl auf Leinwand, um 1908. Privatbesitz."
      }
    ]
  },
  {
    "id": "klimtstoclet",
    "place": "Wien · Der Stoclet-Fries",
    "when": "um 1905–1911",
    "map": {
      "x": 158,
      "y": 108
    },
    "mapLabel": "Stoclet",
    "intro": [
      "Für den Speisesaal des Palais Stoclet in Brüssel, eines Hauses von Josef Hoffmann und der Wiener Werkstätte für den Industriellen Adolphe Stoclet, entwirft Klimt einen Fries: die Erwartung, den Lebensbaum, die Umarmung, dazu Ritter und Rosenstrauch.",
      "Die Werkvorlagen und Kartons von 1910 bis 1911 bewahrt das MAK in Wien. Der Fries selbst wird in Brüssel eingesetzt."
    ],
    "works": [
      {
        "pid": "stocletexp",
        "text": [
          "Eine stehende Frau in einem reich gemusterten Gewand wendet den Kopf, die Hände erhoben. Die Werkvorlage heisst «Die Erwartung» und gehört zum Stoclet-Fries.",
          "Klimt entwirft den Fries für den Speisesaal des Palais Stoclet in Brüssel, eines Hauses von Josef Hoffmann und der Wiener Werkstätte für Adolphe Stoclet. Die Vorlagen bewahrt das MAK in Wien."
        ],
        "fact": "Werkvorlage für den Stoclet-Fries, um 1905–1911. MAK – Museum für angewandte Kunst, Wien."
      },
      {
        "pid": "stocletembrace",
        "text": [
          "Ein Paar steht eng umschlungen in einem ornamentierten Mantel, die Gesichter dicht beieinander. Die Vorlage heisst «Die Umarmung» oder «Erfüllung».",
          "Sie gehört zum Speisesaal-Fries für das Palais Stoclet in Brüssel. Zusammen mit der «Erwartung» und dem Lebensbaum bildet sie den Kern des Zyklus. Die Vorlage liegt im MAK in Wien."
        ],
        "fact": "Werkvorlage für den Stoclet-Fries, um 1905–1911. MAK – Museum für angewandte Kunst, Wien."
      },
      {
        "pid": "stoclettree",
        "text": [
          "Ein stilisierter Baum mit spiralig gerollten Ästen füllt die Fläche, zwischen den Zweigen Sitze und Zeichen. Die Werkvorlage zum Lebensbaum entsteht 1910 bis 1911.",
          "Sie ist eine der neun Kartons für die Ausführung des Stoclet-Frieses. Der Lebensbaum verbindet die Szenen der Erwartung und der Umarmung. Das MAK in Wien bewahrt die Kartons."
        ],
        "fact": "Karton für den Stoclet-Fries, 1910–1911. MAK – Museum für angewandte Kunst, Wien."
      },
      {
        "pid": "stocletritter",
        "text": [
          "Ein Ritter in ornamentierter Rüstung steht aufrecht, Schild und Gewand in klaren, geometrischen Formen. Die Vorlage gehört zu den Kartons für den Stoclet-Fries.",
          "Sie entsteht 1910 bis 1911 und liegt im MAK in Wien. Der Fries selbst wird in den Speisesaal des Palais Stoclet in Brüssel eingesetzt."
        ],
        "fact": "Karton für den Stoclet-Fries, 1910–1911. MAK – Museum für angewandte Kunst, Wien."
      },
      {
        "pid": "stocletrose",
        "text": [
          "Ein Rosenstrauch erscheint als flächiges Ornament aus Blüten, Blättern und Ranken, ohne tiefen Raum. Die Vorlage gehört zu den Kartons für den Stoclet-Fries von 1910 bis 1911.",
          "Garten- und Pflanzmotive durchziehen den Fries neben den figürlichen Szenen. Das MAK in Wien bewahrt die Werkvorlage."
        ],
        "fact": "Karton für den Stoclet-Fries, 1910–1911. MAK – Museum für angewandte Kunst, Wien."
      }
    ]
  },
  {
    "id": "klimtfloege",
    "place": "Wien · Emilie Flöge und der Salon",
    "when": "1904–1915",
    "map": {
      "x": 160,
      "y": 96
    },
    "mapLabel": "Flöge",
    "intro": [
      "Am 1. Juli 1904 gründen Emilie, Helene und Pauline Flöge den Modesalon «Schwestern Flöge» in der Casa Piccola in der Mariahilfer Strasse. Die Räume gestalten Josef Hoffmann und Koloman Moser.",
      "Die Sommer verbringt Klimt weiterhin mit der Familie Flöge am Attersee. 1909 reist er nach Spanien und schreibt von Toledo: «El Greco ist prachtvoll!» 1915 entsteht das Bildnis von Emilie Flöges Mutter Barbara."
    ],
    "works": [
      {
        "pid": "featherboa",
        "text": [
          "Eine Frau mit grossem Hut und Federboa blickt seitlich aus dem Bild, das Gesicht nah und hell vor dunklem Grund. Das Bildnis entsteht 1909.",
          "Es befindet sich in Privatbesitz. Im selben Jahr reist Klimt nach Spanien und schreibt von Toledo an Emilie Flöge: «El Greco ist prachtvoll!»"
        ],
        "fact": "Öl auf Leinwand, 1909. Privatbesitz.",
        "quote": {
          "text": "El Greco ist prachtvoll!",
          "cite": "Ansichtskarte an Emilie Flöge, Toledo, 1909"
        }
      },
      {
        "pid": "barbarafloege",
        "text": [
          "Barbara Flöge, die Mutter Emilie Flöges, erscheint als ältere Frau in dunkler Kleidung, der Blick ruhig, der Grund schlicht. Das Bildnis entsteht 1915.",
          "Emilie führt seit 1904 mit ihren Schwestern Helene und Pauline den Modesalon «Schwestern Flöge» in der Casa Piccola in der Mariahilfer Strasse; die Räume gestalten Josef Hoffmann und Koloman Moser."
        ],
        "fact": "Öl auf Leinwand, 1915. Sammlung nicht ermittelt."
      },
      {
        "pid": "thepark",
        "text": [
          "Ein Park aus dichten Baumkronen füllt die Fläche bis zum Rand, der Stammwald wird zum ornamentalen Gewebe. Das Bild entsteht 1910 oder früher.",
          "Es gehört dem Museum of Modern Art in New York. Auch in diesen Jahren verbringt Klimt die Sommer mit der Familie Flöge am Attersee."
        ],
        "fact": "Öl auf Leinwand, 1910 oder früher. Museum of Modern Art, New York."
      }
    ]
  },
  {
    "id": "klimtkammer",
    "place": "Attersee · Schloss Kammer",
    "when": "1908–1912",
    "map": {
      "x": 32,
      "y": 80
    },
    "mapLabel": "Kammer",
    "intro": [
      "In den Sommern am Attersee wird Schloss Kammer am Nordufer zu einem wiederkehrenden Motiv. Klimt malt das Schloss vom See aus in mehreren Fassungen, später auch die Allee und den Park.",
      "Daneben entstehen ein Wasserschloss, ein oberösterreichisches Bauernhaus und Apfelbäume. Die Landschaften bleiben ohne Gold, aber ebenso dicht in der Fläche."
    ],
    "works": [
      {
        "pid": "kammer2",
        "text": [
          "Schloss Kammer steht mit seinen hellen Mauern und roten Dächern am Seeufer, das Wasser und die Bäume in ruhigen, flächigen Farben. Das Bild entsteht 1909.",
          "Es ist das zweite einer Reihe von Ansichten des Schlosses am Nordufer des Attersees. Es befindet sich in Privatbesitz."
        ],
        "fact": "Öl auf Leinwand, 1909. Privatbesitz."
      },
      {
        "pid": "kammer3",
        "text": [
          "Das Schloss erscheint wieder vom See aus, die Fassade und die Bäume als klare Farbflächen, der Wasserspiegel ruhig. Das Bild entsteht 1910.",
          "Es hängt im Belvedere in Wien. Klimt wiederholt das Motiv in mehreren Fassungen, jeweils mit verschobenem Ausschnitt und Licht."
        ],
        "fact": "Öl auf Leinwand, 1910. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "kammer4",
        "text": [
          "Eine weitere Ansicht des Schlosses am Attersee: die Gebäude zwischen Bäumen, der See im Vordergrund, die Farben kräftig und flächig. Das Bild entsteht 1910.",
          "Es befindet sich in Privatbesitz. Zusammen mit den anderen Fassungen zeigt es, wie beharrlich Klimt dasselbe Ufer abbildet."
        ],
        "fact": "Öl auf Leinwand, 1910. Privatbesitz."
      },
      {
        "pid": "kammerave",
        "text": [
          "Eine Baumallee führt auf Schloss Kammer zu, die Stämme links und rechts, am Ende die helle Fassade. Das Bild entsteht 1912.",
          "Es hängt im Belvedere in Wien. Der Blick geht diesmal nicht vom See, sondern durch den Park auf das Schloss."
        ],
        "fact": "Öl auf Leinwand, 1912. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "kammerpark",
        "text": [
          "Im Park von Schloss Kammer stehen Bäume dicht beieinander, der Boden hell, der Himmel fast verdeckt. Das Bild entsteht 1910.",
          "Es gehört der Neuen Galerie in New York. Wie in «Der Park» wird das Laub zum ornamentalen Gewebe."
        ],
        "fact": "Öl auf Leinwand, 1910. Neue Galerie, New York."
      },
      {
        "pid": "watercastle",
        "text": [
          "Ein helles Schloss steht am oder im Wasser, von Bäumen umgeben, die Spiegelung ruhig. Das Bild entsteht 1908 bis 1909.",
          "Es gehört der Nationalgalerie in Prag. Das Motiv liegt in derselben Zeit wie die ersten Ansichten von Schloss Kammer."
        ],
        "fact": "Öl auf Leinwand, 1908–1909. Nationalgalerie Prag."
      },
      {
        "pid": "oefarm",
        "text": [
          "Ein oberösterreichisches Bauernhaus steht zwischen Bäumen und Garten, die Mauern hell, das Dach dunkel, die Umgebung dicht bewachsen. Das Bild entsteht um 1911.",
          "Es hängt im Belvedere in Wien. Neben den Schlossansichten malt Klimt am Attersee auch einfache Häuser und Gärten."
        ],
        "fact": "Öl auf Leinwand, um 1911. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "kapple",
        "text": [
          "Ein Apfelbaum füllt die Fläche mit Laub und Früchten, der Stamm in der Mitte, der Himmel nur in Lücken sichtbar. Das Bild entsteht um 1912.",
          "Es befindet sich in Privatbesitz. Das Motiv des einzelnen Baumes reicht bis zum goldenen Apfelbaum von 1903 zurück."
        ],
        "fact": "Öl auf Leinwand, um 1912. Privatbesitz."
      },
      {
        "pid": "kapple2",
        "text": [
          "Wieder steht ein Apfelbaum dicht im Bild, das Laub kräftiger in der Farbe, die Form gelöster als in der früheren Fassung. Das Bild entsteht um 1916.",
          "Es wird auch «Der Apfelbaum» genannt. Die späten Baumstücke gehören zu den letzten Sommern am Attersee."
        ],
        "fact": "Öl auf Leinwand, um 1916. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "klimtgarda",
    "place": "Gardasee · Malcesine und Cassone",
    "when": "1913",
    "map": {
      "x": 56,
      "y": 138
    },
    "mapLabel": "Garda",
    "intro": [
      "1913 reist Klimt an den Gardasee. Es entstehen Ansichten von Malcesine und der Kirche in Cassone sowie eine italienische Gartenlandschaft.",
      "«Malcesine am Gardasee» verbrennt 1945 auf Schloss Immendorf, zusammen mit anderen ausgelagerten Werken. Erhalten bleibt eine historische Aufnahme."
    ],
    "works": [
      {
        "pid": "malcesine",
        "text": [
          "Der Ort Malcesine liegt am steilen Ufer des Gardasees, Häuser und Zypressen über dem Wasser, die Berge dahinter. Das Bild entsteht 1913, auf einer Reise an den See.",
          "Das Original verbrennt 1945 auf Schloss Immendorf in Niederösterreich. Erhalten bleibt unter anderem diese historische Aufnahme."
        ],
        "fact": "Öl auf Leinwand, 1913. Historische Aufnahme; Original 1945 auf Schloss Immendorf verbrannt."
      },
      {
        "pid": "cassone",
        "text": [
          "Die Kirche von Cassone steht über dem Gardasee, die Häuser des Dorfes eng darum, das Wasser und die Hänge in klaren Farbflächen. Das Bild entsteht 1913.",
          "Cassone liegt am Ostufer des Sees, nicht weit von Malcesine. Das Bild befindet sich in Privatbesitz."
        ],
        "fact": "Öl auf Leinwand, 1913. Privatbesitz."
      },
      {
        "pid": "italygarden",
        "text": [
          "Ein italienischer Garten erscheint in dichten Büschen, Blüten und Wegen, ohne weiten Ausblick. Das Bild entsteht 1913, im Jahr der Reise an den Gardasee.",
          "Es gehört dem Kunsthaus Zug. Wie die Gartenstücke am Attersee wird die Vegetation zum ornamentalen Teppich."
        ],
        "fact": "Öl auf Leinwand, 1913. Kunsthaus Zug."
      }
    ]
  },
  {
    "id": "klimtunterach",
    "place": "Attersee · Unterach und Litzlberg",
    "when": "1914–1916",
    "map": {
      "x": 38,
      "y": 104
    },
    "mapLabel": "Unterach",
    "intro": [
      "In den späteren Sommern wendet sich der Blick stärker nach Unterach am Südostufer, nach Litzlberg und Weissenbach. Es entstehen Orts- und Uferbilder, ein Waldabhang und Gartenlandschaften.",
      "1916 verbringt Klimt den letzten gemeinsamen Sommer mit Emilie Flöge am Attersee."
    ],
    "works": [
      {
        "pid": "unterach",
        "text": [
          "Die Häuser von Unterach stehen dicht am südlichen Seeufer, die Fassaden hell, die Dächer dunkel, der Ort als Farbmuster. Das Bild entsteht um 1916.",
          "Unterach liegt dem Schloss Kammer gegenüber, am anderen Ufer des Attersees. 1916 ist der letzte gemeinsame Sommer Klimts mit Emilie Flöge am See."
        ],
        "fact": "Öl auf Leinwand, um 1916. Sammlung nicht ermittelt."
      },
      {
        "pid": "ualslope",
        "text": [
          "Ein bewaldeter Abhang bei Unterach steigt ins Bild, Stämme und Laub als dichtes Muster, ohne weiten Blick auf den See. Das Bild entsteht 1916.",
          "Es befindet sich in Privatbesitz. Die späten Waldstücke sind dunkler und lockerer als die frühen Birken- und Buchenwälder."
        ],
        "fact": "Öl auf Leinwand, 1916. Privatbesitz."
      },
      {
        "pid": "litzlberg",
        "text": [
          "Litzlberg erscheint als Ortsansicht am Attersee, Häuser, Bäume und Ufer in flächigen Farben. Das Bild entsteht um 1915.",
          "Litzlberg liegt am Attersee, unweit von Seewalchen und Kammer. Das Bild befindet sich in Privatbesitz."
        ],
        "fact": "Öl auf Leinwand, um 1915. Privatbesitz."
      },
      {
        "pid": "litzkeller",
        "text": [
          "Der Litzlbergkeller, ein Gasthaus am Attersee, steht zwischen Bäumen am Ufer, die Fassade hell, das Laub dicht. Das Bild entsteht 1915 bis 1916.",
          "Es hängt im Leopold Museum in Wien. Auch dieses Uferstück gehört zu den späten Sommern am See."
        ],
        "fact": "Öl auf Leinwand, 1915–1916. Leopold Museum, Wien."
      },
      {
        "pid": "weissenbach",
        "text": [
          "Ein Forsthaus in Weissenbach steht zwischen Bäumen und Wiese, die Mauern hell, das Dach markant. Das Bild entsteht um 1914 und heisst auch «Forsthaus in Weissenbach II».",
          "Weissenbach liegt am südlichen Attersee. Klimt malt das Haus in mehr als einer Fassung."
        ],
        "fact": "Öl auf Leinwand, um 1914. Sammlung nicht ermittelt."
      },
      {
        "pid": "pfarrgarten",
        "text": [
          "Ein Pfarrgarten liegt vor einer Bergkuppe, Beete, Wege und Bäume dicht gefügt, der Hügel im Hintergrund. Das Bild entsteht um 1916.",
          "Es gehört zu den späten Gartenlandschaften, in denen Klimt den Blick nah an Beeten und Hängen lässt."
        ],
        "fact": "Öl auf Leinwand, um 1916. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "klimtportraits",
    "place": "Wien · Bunte Bildnisse",
    "when": "1912–1918",
    "map": {
      "x": 200,
      "y": 58
    },
    "mapLabel": "Bildnisse",
    "intro": [
      "Nach der goldenen Zeit werden die Bildnisse farbiger und lockerer. Es entstehen unter anderem die Porträts der Mäda und der Eugenia Primavesi, das zweite Bildnis der Adele Bloch-Bauer und das der Friederike Maria Beer.",
      "In den späten Gründen erscheinen oft ostasiatische Motive, die Klimt auch sammelt – etwa im Bildnis der Friederike Maria Beer und in der «Dame mit Fächer». Daneben stehen «Die Tänzerin» und das unvollendete Bildnis Ria Munk III."
    ],
    "works": [
      {
        "pid": "mada",
        "text": [
          "Die junge Mäda Primavesi steht in einem hellen, blumig gemusterten Kleid, die Beine leicht gespreizt, der Blick fest. Das Bildnis entsteht um 1912 bis 1913.",
          "Es gehört dem Metropolitan Museum of Art in New York. Mäda ist die Tochter von Otto und Eugenia Primavesi, wichtigen Auftraggebern Klimts; die Familie empfängt ihn auch in Winkelsdorf."
        ],
        "fact": "Öl auf Leinwand, um 1912–1913. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "adele2",
        "text": [
          "Adele Bloch-Bauer steht in einem bunten, gemusterten Kleid vor einem ebenfalls farbigen Grund, ohne den Goldteppich des ersten Bildnisses. Das Porträt entsteht 1912.",
          "Es befindet sich in Privatbesitz. Fünf Jahre nach dem goldenen ersten Bildnis zeigt Klimt Adele in den kräftigeren Farben seiner späteren Porträts."
        ],
        "fact": "Öl auf Leinwand, 1912. Privatbesitz."
      },
      {
        "pid": "eugenia",
        "text": [
          "Eugenia Primavesi sitzt in einem leuchtend gemusterten Kleid, der Grund ornamental und farbig. Das Bildnis entsteht um 1913 bis 1914.",
          "Es gehört dem Städtischen Kunstmuseum Toyota. Eugenia und Otto Primavesi gehören zu Klimts wichtigen Auftraggebern in diesen Jahren."
        ],
        "fact": "Öl auf Leinwand, um 1913–1914. Städtisches Kunstmuseum Toyota."
      },
      {
        "pid": "fmbeer",
        "text": [
          "Friederike Maria Beer steht in einem reich gemusterten Kleid, der Grund mit ostasiatischen Motiven gefüllt. Das Bildnis entsteht 1916.",
          "Es hängt im Tel Aviv Museum of Art. In den späten Bildnissen greift Klimt oft ostasiatische Muster und Figuren auf, die er auch sammelt."
        ],
        "fact": "Öl auf Leinwand, 1916. Tel Aviv Museum of Art."
      },
      {
        "pid": "ladyfan",
        "text": [
          "Eine Frau mit Fächer erscheint vor einem Grund aus ostasiatischen Motiven, unter anderem einem Vogel in der Art eines Phönix. Das Bild entsteht 1917 bis 1918.",
          "Es befindet sich in Privatbesitz. Es gehört zu den letzten vollendeten Bildnissen und zeigt, wie stark die ostasiatische Motivwelt in diesen Jahren wird."
        ],
        "fact": "Öl auf Leinwand, 1917–1918. Privatbesitz."
      },
      {
        "pid": "dancer",
        "text": [
          "Eine Tänzerin steht in einem bunten, locker gemalten Gewand, der Grund ornamental, die Haltung aufrecht. Das Bild entsteht um 1916 bis 1917.",
          "Es gehört der Neuen Galerie in New York. Auch hier mischen sich figürliches Bildnis und flächiges Muster der späten Jahre."
        ],
        "fact": "Öl auf Leinwand, um 1916–1917. Neue Galerie, New York."
      },
      {
        "pid": "riamunk3",
        "text": [
          "Ria Munk erscheint in einem blumigen Kleid vor einem dichten, bunten Grund; das Bildnis von 1917 bleibt unvollendet. Maria («Ria») Munk stirbt 1911, noch jung.",
          "Klimt malt nach ihrem Tod mehrere Bildnisse, darunter dieses späte, unvollendete. Es befindet sich in Privatbesitz."
        ],
        "fact": "Öl auf Leinwand, 1917, unvollendet. Privatbesitz."
      }
    ]
  },
  {
    "id": "klimttod",
    "place": "Wien · Tod und Leben",
    "when": "um 1910–1915",
    "map": {
      "x": 164,
      "y": 50
    },
    "mapLabel": "Tod und Leben",
    "intro": [
      "Um 1910 beginnt Klimt das grosse Bild «Tod und Leben», das er später überarbeitet. Der Tod steht als dunkle Figur einer Gruppe der Lebenden gegenüber. Hier ist nur die Tod-Figur zu sehen.",
      "Das Bild hängt im Leopold Museum in Wien. 1912 malt Klimt ausserdem Ria Munk auf dem Totenbett, im Jahr nach ihrem frühen Tod."
    ],
    "works": [
      {
        "pid": "deathfig",
        "text": [
          "Der Tod steht als schmale, dunkle Figur mit Totenkopf und Kreuzmuster, den Blick auf die andere Bildhälfte gerichtet. Der Ausschnitt zeigt nur diese Figur aus «Tod und Leben».",
          "Das ganze Bild entsteht um 1910 und wird später überarbeitet; es hängt im Leopold Museum in Wien. Die andere Hälfte mit der Gruppe der Lebenden bleibt hier ausgespart."
        ],
        "fact": "Öl auf Leinwand, Ausschnitt, um 1910–1915. Leopold Museum, Wien."
      },
      {
        "pid": "riamunkbed",
        "text": [
          "Ria Munk liegt aufgebahrt, das Gesicht still, Blumen um das Kissen und das Gewand. Das Bild entsteht 1912, im Jahr nach ihrem Tod.",
          "Es befindet sich in Privatbesitz. Später folgt das unvollendete Bildnis «Ria Munk III» von 1917."
        ],
        "fact": "Öl auf Leinwand, 1912. Privatbesitz."
      }
    ]
  },
  {
    "id": "klimt1918",
    "place": "Wien · Die letzten Bilder",
    "when": "1917–1918",
    "map": {
      "x": 152,
      "y": 78
    },
    "mapLabel": "1918",
    "intro": [
      "In den letzten Monaten entstehen unvollendete Bildnisse – Johanna Staude, Amalie Zuckerkandl, die «Dame in Weiss» – und vollendete Werke wie «Baby (Wiege)», ein Frauenkopf und das «Bildnis einer Dame» in Piacenza.",
      "Am 11. Januar 1918 erleidet Klimt einen Schlaganfall. Er stirbt am 6. Februar 1918 im Allgemeinen Krankenhaus in Wien."
    ],
    "works": [
      {
        "pid": "staude",
        "text": [
          "Johanna Staude sitzt in einer bunt gemusterten Bluse, der Blick fest, der Grund teilweise offen. Das Bildnis von 1917 bis 1918 bleibt unvollendet.",
          "Es hängt im Belvedere in Wien. Viele Bildnisse der letzten Monate lässt Klimt unfertig zurück."
        ],
        "fact": "Öl auf Leinwand, 1917–1918, unvollendet. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "zuckerkandl",
        "text": [
          "Amalie Zuckerkandl erscheint in einem hellen Kleid, Kopf und Schultern ausgearbeitet, der untere Teil und der Grund noch offen. Das Bildnis bleibt unvollendet.",
          "Es hängt im Belvedere in Wien. Amalie Zuckerkandl gehörte zum Wiener Kreis um die Familie Zuckerkandl, der Klimt seit langem verbunden war."
        ],
        "fact": "Öl auf Leinwand, 1917–1918, unvollendet. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "kbaby",
        "text": [
          "Ein Kind liegt in einer Wiege unter einem dichten Teppich aus Decken und Mustern, das Gesicht klein im Farbgewoge. Das Bild entsteht 1917 bis 1918.",
          "Es gehört der National Gallery of Art in Washington. Es ist eines der letzten vollendeten Bilder."
        ],
        "fact": "Öl auf Leinwand, 1917–1918. National Gallery of Art, Washington."
      },
      {
        "pid": "ladyhead",
        "text": [
          "Ein Frauenkopf in lockerem Farbauftrag, das Haar und das Gesicht nah ins Bild gerückt. Die Arbeit entsteht 1917.",
          "Sie hängt im LENTOS Kunstmuseum Linz. Auch in den letzten Monaten zeichnet und malt Klimt Köpfe mit knapper, offener Form."
        ],
        "fact": "Öl auf Leinwand, 1917. LENTOS Kunstmuseum Linz."
      },
      {
        "pid": "ladypiacenza",
        "text": [
          "Eine Dame mit Hut blickt aus dem Bild, das Gesicht ruhig, der Grund in gebrochenen, hellen Tönen. Das Bildnis entsteht 1917.",
          "Es gehört der Galleria d’Arte Moderna Ricci Oddi in Piacenza."
        ],
        "fact": "Öl auf Leinwand, 1917. Galleria d’Arte Moderna Ricci Oddi, Piacenza."
      },
      {
        "pid": "ladywhite",
        "text": [
          "Eine Frau in einem weissen Kleid sitzt dem Betrachter zugewandt, grosse Teile der Fläche bleiben offen. Das Bildnis aus den Jahren 1917 bis 1918 bleibt unvollendet.",
          "Es hängt im Belvedere in Wien. Am 30. Dezember 1917 schreibt Klimt aus Winkelsdorf an Emilie Flöge und wünscht ihr ein «aller allerglücklichstes Neujahr – wie wir es Beide so dringendst brauchen»."
        ],
        "fact": "Öl auf Leinwand, um 1917–1918, unvollendet. Österreichische Galerie Belvedere, Wien.",
        "quote": {
          "text": "…ein Gruss aus dem Innersten heraus und [ich] wünsche Dir ein aller allerglücklichstes Neujahr. – wie wir es Beide so dringendst brauchen.",
          "cite": "Brief an Emilie Flöge, Winkelsdorf, 30. Dezember 1917"
        }
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
