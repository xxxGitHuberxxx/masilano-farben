// v8.4 Ferdinand Hodler life journey, Part 2 (c. 1900–1918), completing the path.
// Appends stations and works to the existing Hodler path; does not rewrite Part 1.
// Reuses the gallery works hodler, chexbres, eiger and niesen by pid only (not listed in works[]).
// Quote: letter to C. A. Loosli, 10 October 1907, after Lerch/Marti (Musée d’art et d’histoire, Neuchâtel).
// No nudes; Valentine Godé-Darel’s death is handled in station text only.
(function () {
  var works = [
  {
    "id": "hstprex",
    "title": "Der Genfersee von Saint-Prex aus",
    "artist": "Ferdinand Hodler",
    "year": "1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Genfersee von St Prex aus.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hisenfluh",
    "title": "Die Jungfrau von der Isenfluh aus",
    "artist": "Ferdinand Hodler",
    "year": "1902",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die Jungfrau von der Isenfluh aus.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hkiental",
    "title": "Kiental mit Blümlisalp",
    "artist": "Ferdinand Hodler",
    "year": "1902",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Kiental mit Blümlisalp - 1902.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hwald02",
    "title": "Wald mit Bergbach",
    "artist": "Ferdinand Hodler",
    "year": "1902",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Wald mit Bergbach - 1902.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hfromberg",
    "title": "Das Fromberghorn von Reichenbach aus",
    "artist": "Ferdinand Hodler",
    "year": "1903",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Ansicht des Fromberghorns von Reichenbach aus - 1903.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hthunless",
    "title": "Der Thunersee von Leissigen aus",
    "artist": "Ferdinand Hodler",
    "year": "1904",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Thunersee von Lessigen aus - 1904.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hthunsym04",
    "title": "Thunersee mit symmetrischer Spiegelung vor Sonnenaufgang",
    "artist": "Ferdinand Hodler",
    "year": "1904",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Thunersee mit symmetrischer Spiegelung vor Sonnenaufgang - 1904.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hthunstock04",
    "title": "Thunersee mit Stockhornkette",
    "artist": "Ferdinand Hodler",
    "year": "1904",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Thunersee mit Stockhornkette,1904.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hwaldbach04",
    "title": "Waldbach bei Leissigen",
    "artist": "Ferdinand Hodler",
    "year": "1904",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Waldbach bei Leissigen - 1904.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hthunsym05",
    "title": "Thunersee mit symmetrischer Spiegelung",
    "artist": "Ferdinand Hodler",
    "year": "1905",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Thunersee mit symmetrischer Spiegelung - 1905.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hchex04",
    "title": "Der Genfersee von Chexbres aus",
    "artist": "Ferdinand Hodler",
    "year": "1904",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Genfersee von Chexbres aus - 1904.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrammont05",
    "title": "Der Grammont",
    "artist": "Ferdinand Hodler",
    "year": "1905",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Grammont - 1905.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrammont06",
    "title": "Der Grammont",
    "artist": "Ferdinand Hodler",
    "year": "1906",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Grammont - 1906.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hsavoyer06",
    "title": "Genfersee mit den Savoyer Alpen",
    "artist": "Ferdinand Hodler",
    "year": "um 1906",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Genfersee mit Blick auf die Savoyerberge - ca1906.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hrhythm08",
    "title": "Rhythmische Landschaft am Genfersee",
    "artist": "Ferdinand Hodler",
    "year": "1908",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Rhythmische Landschaft am Genfersee - 1908.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hlutschine",
    "title": "Die Schwarze Lütschine",
    "artist": "Ferdinand Hodler",
    "year": "1905",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die Schwarze Lütschine - 1905.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hkirsch05",
    "title": "Blühender Kirschbaum",
    "artist": "Ferdinand Hodler",
    "year": "1905",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Blühender Kirschbaum - 1905.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "htanne05",
    "title": "Tanne bei Chamby",
    "artist": "Ferdinand Hodler",
    "year": "1905",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Tanne bei Chamby - 1905.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hschnee07",
    "title": "Schnee im Engadin",
    "artist": "Ferdinand Hodler",
    "year": "1907",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Schnee im Engadin - 1907.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "heigermond",
    "title": "Eiger, Mönch und Jungfrau im Mondschein",
    "artist": "Ferdinand Hodler",
    "year": "1908",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Eiger, Mönch und Jungfrau im Mondschein - 1908.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "heigermorgen",
    "title": "Eiger, Mönch und Jungfrau in der Morgensonne",
    "artist": "Ferdinand Hodler",
    "year": "1908",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Eiger, Mönch und Jungfrau in der Morgensonne - 1908.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hjungf08",
    "title": "Die Jungfrau über dem Nebelmeer",
    "artist": "Ferdinand Hodler",
    "year": "1908",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die Jungfrau über dem Nebelmeer - 1908.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "habendnebel",
    "title": "Abendnebel am Thunersee",
    "artist": "Ferdinand Hodler",
    "year": "1908",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Abendnebel am Thunersee - 1908.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hjenastud",
    "title": "Student, der den Rock anzieht",
    "artist": "Ferdinand Hodler",
    "year": "1908",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Student, die zijn jas aantrekt. 1908, RP-P-1951-315.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "hjena",
    "title": "Aufbruch zu den Freiheitskriegen",
    "artist": "Ferdinand Hodler",
    "year": "1908",
    "museum": "Städel Museum, Frankfurt",
    "source": "Wikimedia Commons: «Aufbruch zu den Freiheitskriegen (SM sg304z).png», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmaeher",
    "title": "Der Mäher",
    "artist": "Ferdinand Hodler",
    "year": "1910",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Mäher - 1910.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hholz",
    "title": "Der Holzfäller",
    "artist": "Ferdinand Hodler",
    "year": "1910",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Holzfäller - 1910.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "heinamut",
    "title": "Einmütigkeit",
    "artist": "Ferdinand Hodler",
    "year": "um 1913",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Einmütigkeit - ca1913.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hthunsym09",
    "title": "Thunersee mit symmetrischer Spiegelung",
    "artist": "Ferdinand Hodler",
    "year": "1909",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Thunersee mit symmetrischer Spiegelung - 1909.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hthunniesen",
    "title": "Thunersee mit Niesen",
    "artist": "Ferdinand Hodler",
    "year": "1910",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Thunersee mit Niesen - 1910.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hthunstock11",
    "title": "Thunersee mit Stockhornkette",
    "artist": "Ferdinand Hodler",
    "year": "1910",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Thunersee mit Stockhornkette - 1910-11.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hthunabend12",
    "title": "Thunersee mit Stockhornkette am Abend",
    "artist": "Ferdinand Hodler",
    "year": "um 1912",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Thunersee mit Stockhornkette am Abend - ca1912.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hwinter13",
    "title": "Stockhornkette und Thunersee im Winter",
    "artist": "Ferdinand Hodler",
    "year": "1913",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Stockhornkette und Thunersee im Winter (1913) - Ferdinand Hodler.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmorhardt",
    "title": "Bildnis Mathias Morhardt",
    "artist": "Ferdinand Hodler",
    "year": "1911",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Bildnis Mathias Morhardt - 1911.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgertrud12",
    "title": "Bildnis Gertrud Müller",
    "artist": "Ferdinand Hodler",
    "year": "um 1912",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Bildnis Gertrud Müller - ca1912.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hhector12",
    "title": "Bildnis Hector Hodler",
    "artist": "Ferdinand Hodler",
    "year": "um 1912",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Portrait of Hector Hodler (ca. 1912) - Ferdinand Hodler (Kunsthaus Zürich).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hself12",
    "title": "Selbstbildnis",
    "artist": "Ferdinand Hodler",
    "year": "1912",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler - Selbstbildnis.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hselfrosen",
    "title": "Selbstbildnis mit Rosen",
    "artist": "Ferdinand Hodler",
    "year": "1914",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Selbstbildnis mit Rosen - 1914.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hwille",
    "title": "General Ulrich Wille",
    "artist": "Ferdinand Hodler",
    "year": "1916",
    "museum": "Kunstmuseum Bern",
    "source": "Wikimedia Commons: «Ferdinand Hodler - General Ulrich Wille (Kunstmuseum Bern).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hself16",
    "title": "Selbstbildnis",
    "artist": "Ferdinand Hodler",
    "year": "1916",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler - Selbstbildnis - 1916.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hselfkittel",
    "title": "Selbstbildnis mit grünem Kittel",
    "artist": "Ferdinand Hodler",
    "year": "1917",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Selbstbildnis mit grünem Kittel - 1917.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hsonne15",
    "title": "Sonnenuntergang am Genfersee",
    "artist": "Ferdinand Hodler",
    "year": "1915",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Sonnenuntergang am Genfersee - 1915.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hweisshorn15",
    "title": "Das Weisshorn von Montana aus",
    "artist": "Ferdinand Hodler",
    "year": "1915",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Weisshorn von Montana aus - 1915.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hdents16",
    "title": "Die Dents du Midi",
    "artist": "Ferdinand Hodler",
    "year": "1916",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die Dents du Midi - 1916.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hblanches16",
    "title": "Die Dents Blanches bei Champéry in der Morgensonne",
    "artist": "Ferdinand Hodler",
    "year": "1916",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Die Dents Blanches bei Champéry in der Morgensonne - 1916.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hbach16",
    "title": "Bergbach bei Champéry",
    "artist": "Ferdinand Hodler",
    "year": "1916",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler - Bergbach bei Champéry - 1916.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hcaux17",
    "title": "Der Genfersee von Caux aus",
    "artist": "Ferdinand Hodler",
    "year": "1917",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Genfersee von Caux aus - 1917.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hwolken17",
    "title": "Landschaft bei Caux mit aufsteigenden Wolken",
    "artist": "Ferdinand Hodler",
    "year": "1917",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Landschaft bei Caux mit aufsteigenden Wolken - 1917.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hgrammont17",
    "title": "Der Grammont in der Morgensonne",
    "artist": "Ferdinand Hodler",
    "year": "1917",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Der Grammont in der Morgensonne - 1917.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmbdawn",
    "title": "Genfersee mit Mont-Blanc in der Morgendämmerung",
    "artist": "Ferdinand Hodler",
    "year": "1918",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Genfersee mit Mont-Blanc in der Morgendämmerung - 1918.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmbred",
    "title": "Genfersee mit Mont-Blanc im Morgenrot",
    "artist": "Ferdinand Hodler",
    "year": "1918",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Genfersee mit Mont-Blanc im Morgenrot - 1918.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmblight",
    "title": "Genfersee mit Mont-Blanc bei Morgenlicht",
    "artist": "Ferdinand Hodler",
    "year": "1918",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Genfersee mit Mont-Blanc bei Morgenlicht - 1918.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmbafternoon",
    "title": "Genfersee mit Mont-Blanc am Nachmittag",
    "artist": "Ferdinand Hodler",
    "year": "1918",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Genfersee mit Mont-Blanc am Nachmittag - 1918.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmbbefore",
    "title": "Genfersee mit Mont-Blanc vor Sonnenaufgang",
    "artist": "Ferdinand Hodler",
    "year": "1918",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Hodler - Genfersee mit Mont-Blanc vor Sonnenaufgang - 1918.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hmbmarch",
    "title": "Genfersee mit Mont-Blanc am frühen Morgen",
    "artist": "Ferdinand Hodler",
    "year": "März 1918",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler Genfersee mit Mont-Blanc am frühen Morgen März 1918.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hberthe18",
    "title": "Bildnis Berthe Hodler",
    "artist": "Ferdinand Hodler",
    "year": "1918",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Ferdinand Hodler Porträt Berthe Hodler.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'hodler'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1853–1918";
  path.subtitle = "Von Bern nach Genf, zu den Seen und zum Mont Blanc";
  path.intro = "Reise mit Ferdinand Hodler durch sein ganzes Leben: von der Kindheit in Bern und dem frühen Verlust der Familie über die Lehre bei Ferdinand Sommer in Thun, die Ausbildung bei Barthélemy Menn in Genf, die Reise nach Madrid, den Realismus der 1880er Jahre und den symbolistischen Durchbruch um «Die Nacht» – die wir nur in der Stationsgeschichte erwähnen – bis zu den parallelistischen Landschaften vom Thuner- und vom Genfersee, den Wandbildern in Jena und Hannover und den letzten Blicken vom Quai du Mont-Blanc. Kurze Stationen, Bilder zum Ausmalen und eine Stimme aus einem Brief von 1907. Hodler stirbt am 19. Mai 1918 in Genf.";
  path.ending = [
  "Im Frühjahr 1918 malt Hodler vom Balkon und vom Fenster seiner Wohnung am Quai du Mont-Blanc 26 immer wieder den Genfersee mit dem Mont Blanc, zu verschiedenen Stunden des Tages. Die Stadt Genf ernennt ihn zum Ehrenbürger.",
  "Am 19. Mai 1918 stirbt Ferdinand Hodler in Genf, fünfundsechzig Jahre alt, in eben dieser Wohnung. Zurück bleiben die Landschaften der Seen und Berge, die Bildnisse, die Wandbilder – und ein Werk, das den Parallelismus zum Prinzip gemacht hat."
];
  path.epilogue = "Ferdinand Hodler stirbt am 19. Mai 1918 in Genf, in seiner Wohnung am Quai du Mont-Blanc 26. Kurz zuvor ist er Ehrenbürger der Stadt geworden. Zurück bleiben die parallelistischen Landschaften vom Thuner- und vom Genfersee, die Gipfel über dem Nebelmeer, die Wandbilder von Jena und Hannover und die letzten Blicke auf den Mont Blanc.";
  var stations = [
  {
    "id": "hodlerwien",
    "place": "Wien und das Berner Oberland · Der Durchbruch",
    "when": "1901–1904",
    "map": {
      "x": 214,
      "y": 72
    },
    "mapLabel": "Wien",
    "intro": [
      "1902 richtet Hodler ein Atelier an der Rue du Rhône 29 in Genf ein. 1903 ist er in Wien und befreundet sich mit Gustav Klimt, Koloman Moser und Josef Hoffmann. 1904 ist er Ehrengast der 19. Wiener Secession; damit ist der internationale Durchbruch da.",
      "Zugleich malt er weiter Landschaften: den Genfersee von Saint-Prex aus, die Jungfrau von der Isenfluh, das Kiental und das Fromberghorn. Die Formen werden knapper, die Wiederholung klarer."
    ],
    "works": [
      {
        "pid": "hstprex",
        "text": [
          "Von Saint-Prex aus liegt der Genfersee in ruhigen, waagrechten Bahnen, die Berge der Savoyer Seite als klare Silhouette.",
          "Das Bild stammt von 1901, ein Jahr nach der Goldmedaille in Paris. Hodler sucht die Landschaft in wenigen, wiederholten Linien."
        ],
        "fact": "1901. Sammlung nicht ermittelt."
      },
      {
        "pid": "hisenfluh",
        "text": [
          "Von der Isenfluh aus steht die Jungfrau fest über den vorgelagerten Höhen, der Himmel hell und weit.",
          "1902 richtet Hodler ein Atelier an der Rue du Rhône 29 in Genf ein. Gleichzeitig kehrt er immer wieder ins Berner Oberland zurück."
        ],
        "fact": "1902. Sammlung nicht ermittelt."
      },
      {
        "pid": "hkiental",
        "text": [
          "Das Kiental öffnet sich talwärts; darüber liegt die Blümlisalp in ruhigen, gestuften Formen.",
          "Das Bild ist 1902 datiert. Hodler vereinfacht Tal, Hang und Gipfel, bis die Wiederholung der Linien selbst zum Motiv wird."
        ],
        "fact": "1902. Sammlung nicht ermittelt."
      },
      {
        "pid": "hwald02",
        "text": [
          "Ein Bach fliesst zwischen Stämmen und Steinen, das Licht fällt in Streifen in den Wald.",
          "Auch nach 1900 bleibt der Bergbach ein Motiv. Hodler beobachtet das Fliessen und die senkrechten Stämme nebeneinander."
        ],
        "fact": "1902. Sammlung nicht ermittelt."
      },
      {
        "pid": "hfromberg",
        "text": [
          "Das Fromberghorn steigt als klare, fast dreieckige Form über dem Tal von Reichenbach auf.",
          "Das Bild stammt von 1903. Im selben Jahr ist Hodler in Wien und befreundet sich mit Gustav Klimt, Koloman Moser und Josef Hoffmann."
        ],
        "fact": "1903. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "hodlerleissigen",
    "place": "Leissigen · Der Thunersee",
    "when": "1904–1905",
    "map": {
      "x": 162,
      "y": 94
    },
    "mapLabel": "Leissigen",
    "intro": [
      "1904 arbeitet Hodler am Thunersee, oft von Leissigen aus. Es entstehen Blicke auf den See mit der Stockhornkette, symmetrische Spiegelungen vor Sonnenaufgang und der Waldbach unmittelbar vor dem Dorf.",
      "Die symmetrische Spiegelung wird zum Kern seines Parallelismus. 1905 reist er nach Italien und studiert unter anderem Giotto; im selben Jahr malt er den See erneut als ruhigen Spiegel."
    ],
    "works": [
      {
        "pid": "hthunless",
        "text": [
          "Von Leissigen aus liegt der Thunersee still, die Berge dahinter in einer ruhigen Kette.",
          "1904 ist Hodler Ehrengast der 19. Wiener Secession; der internationale Durchbruch ist da. Im selben Jahr arbeitet er am Thunersee, oft von Leissigen aus."
        ],
        "fact": "1904. Sammlung nicht ermittelt."
      },
      {
        "pid": "hthunsym04",
        "text": [
          "Vor Sonnenaufgang spiegelt sich die Bergkette fast genau im See; Himmel und Wasser teilen das Bild in ruhige Bahnen.",
          "Die symmetrische Spiegelung ist ein Kern von Hodlers Parallelismus: die Landschaft wird zur Ordnung aus wiederholten Linien."
        ],
        "fact": "1904. Sammlung nicht ermittelt."
      },
      {
        "pid": "hthunstock04",
        "text": [
          "Die Stockhornkette liegt über dem hellen See, im Vordergrund Steine und niedriges Ufer.",
          "Hodler malt dieses Motiv über Jahrzehnte, in immer klareren Fassungen. 1904 entsteht eine der frühen streng gebauten Varianten."
        ],
        "fact": "1904. Sammlung nicht ermittelt."
      },
      {
        "pid": "hwaldbach04",
        "text": [
          "Ein Bach stürzt zwischen bemoosten Steinen und Stämmen talwärts, das Wasser hell, der Wald dicht.",
          "Neben den weiten Seeansichten hält Hodler 1904 auch den nahen Waldbach bei Leissigen fest."
        ],
        "fact": "1904. Sammlung nicht ermittelt."
      },
      {
        "pid": "hthunsym05",
        "text": [
          "Wieder liegt der See als Spiegel da: die Berge oben, ihre Wiederholung unten, in ruhiger Symmetrie.",
          "Das Bild ist 1905 datiert. Im selben Jahr reist Hodler nach Italien und studiert unter anderem Giotto."
        ],
        "fact": "1905. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "hodlerchexbres",
    "place": "Chexbres und der Genfersee",
    "when": "1904–1908",
    "map": {
      "x": 132,
      "y": 110
    },
    "mapLabel": "Chexbres",
    "intro": [
      "Von den Höhen über Chexbres aus malt Hodler den Genfersee in breiten, parallelen Bahnen. 1904 und 1905 entstehen Fassungen dieses Blicks; dazu kommt der Grammont am südlichen Ufer, 1905 und 1906, und der Blick auf die Savoyer Alpen.",
      "1908 führt die «Rhythmische Landschaft am Genfersee» den Parallelismus weit. Im Oktober 1907 hat Hodler Carl Albert Loosli für einen Artikel gedankt, der dieses Prinzip getroffen habe."
    ],
    "works": [
      {
        "pid": "hchex04",
        "text": [
          "Von den Höhen über Chexbres aus liegt der Genfersee in breiten Farbbahnen, die Berge gegenüber als ruhige Kette.",
          "Chexbres über dem See wird für Hodler ein wiederkehrender Standort. 1904 entsteht eine frühe Fassung dieses Blicks."
        ],
        "fact": "1904. Sammlung nicht ermittelt."
      },
      {
        "pid": "chexbres",
        "text": [
          "See, Ufer und Himmel liegen in ruhigen, parallelen Streifen: Türkis, Violett, ein heller Himmel.",
          "Die Fassung von 1905 hängt im Kunstmuseum Basel. Hodler reduziert die Landschaft auf grosse, klare Bahnen."
        ],
        "fact": "1905. Kunstmuseum Basel."
      },
      {
        "pid": "hgrammont05",
        "text": [
          "Der Grammont steigt als breite, klare Form über dem Genfersee auf, der Hang in wenigen Farbfeldern.",
          "Hodler malt den Berg am südlichen Seeufer mehrfach. Die Fassung von 1905 zeigt ihn fest und vereinfacht."
        ],
        "fact": "1905. Sammlung nicht ermittelt."
      },
      {
        "pid": "hgrammont06",
        "text": [
          "Ein Jahr später steht der Grammont erneut über dem See, die Form noch bestimmter, der See als ruhige Fläche.",
          "Die Wiederholung desselben Berges zu verschiedenen Zeiten gehört zu Hodlers Methode: dasselbe Motiv, eine neue Ordnung."
        ],
        "fact": "1906. Sammlung nicht ermittelt."
      },
      {
        "pid": "hsavoyer06",
        "text": [
          "Der See liegt in der Breite des Bildes, gegenüber die Savoyer Alpen in einer ruhigen, gezackten Kette.",
          "Um 1906 entsteht dieser Blick über den Genfersee. Die gegenüberliegende französische Seite wird zur klaren Silhouette."
        ],
        "fact": "um 1906. Sammlung nicht ermittelt."
      },
      {
        "pid": "hrhythm08",
        "text": [
          "Ufer, Wasser und Berge schwingen in wiederholten, rhythmischen Linien über die Fläche, fast ohne Einzelheiten.",
          "Das Bild von 1908 führt den Parallelismus weit: die Landschaft wird zum Rhythmus. Im Jahr zuvor dankt Hodler Carl Albert Loosli für einen Artikel, der eben dieses Prinzip getroffen habe."
        ],
        "fact": "1908. Sammlung nicht ermittelt.",
        "quote": {
          "text": "Endlich sende ich Ihnen Ihren Artikel zurück, Ihr Meisterwerk. Es ist ganz famos, gut durchdacht und geschrieben. Sie haben sich in der Kürze sehr glücklich ausgedrückt betreffs des Parallelismus. Ich glaube, dass mich bald einer verstanden hat.",
          "cite": "Brief an C. A. Loosli, 10. Oktober 1907. Musée d’art et d’histoire, Neuenburg."
        }
      }
    ]
  },
  {
    "id": "hodlerbaeume",
    "place": "Bäume, Bäche und das Engadin",
    "when": "1905–1907",
    "map": {
      "x": 174,
      "y": 88
    },
    "mapLabel": "Bäume",
    "intro": [
      "Neben den weiten Seeansichten malt Hodler einzelne Bäume und nahe Gewässer: die Schwarze Lütschine, einen blühenden Kirschbaum, eine Tanne bei Chamby über Montreux.",
      "1907 entsteht «Schnee im Engadin». Auch fern der grossen Seen bleibt die klare Schichtung von Vordergrund, Wald und Gipfel sein Thema."
    ],
    "works": [
      {
        "pid": "hlutschine",
        "text": [
          "Die Schwarze Lütschine fliesst zwischen Felsen und Wald, das Wasser hell auf dem dunklen Bett.",
          "Der Fluss kommt aus dem Oberland bei Grindelwald und Zweilütschinen. 1905 hält Hodler seinen Lauf in klaren, wiederholten Bewegungen fest."
        ],
        "fact": "1905. Sammlung nicht ermittelt."
      },
      {
        "pid": "hkirsch05",
        "text": [
          "Ein Kirschbaum steht in voller Blüte, die Krone hell, der Stamm fest und einzeln.",
          "Einzelne Bäume sind für Hodler fast wie Figuren. Der blühende Kirschbaum von 1905 gehört in dieselbe Reihe wie die früheren Kastanien."
        ],
        "fact": "1905. Sammlung nicht ermittelt."
      },
      {
        "pid": "htanne05",
        "text": [
          "Eine einzelne Tanne steht vor einem hellen Grund, die Äste klar gesetzt, der Stamm gerade.",
          "Chamby liegt über Montreux, unweit des Genfersees. Hodler isoliert den Baum, bis er wie ein Zeichen wirkt."
        ],
        "fact": "1905. Sammlung nicht ermittelt."
      },
      {
        "pid": "hschnee07",
        "text": [
          "Eine winterliche Hochfläche im Engadin: Schnee, dunkle Wälder, darüber eine ruhige Bergkette.",
          "Das Bild ist 1907 datiert. Auch fern der grossen Seen sucht Hodler die klare Schichtung von Vordergrund, Wald und Gipfel."
        ],
        "fact": "1907. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "hodleroberland",
    "place": "Berner Oberland · Eiger, Mönch und Jungfrau",
    "when": "1908",
    "map": {
      "x": 180,
      "y": 100
    },
    "mapLabel": "Oberland",
    "intro": [
      "1908 malt Hodler Eiger, Mönch und Jungfrau über dem Nebelmeer, im Mondschein und in der Morgensonne, unter anderem von der Schynige Platte aus. Dazu kommt der Abendnebel am Thunersee.",
      "Im selben Jahr hat er Ausstellungen in Jena und Frankfurt, wird Zentralpräsident der Gesellschaft Schweizerischer Maler, Bildhauer und Architekten und begegnet Valentine Godé-Darel."
    ],
    "works": [
      {
        "pid": "eiger",
        "text": [
          "Aus einem Meer aus Wolken steigen Eiger, Mönch und Jungfrau als klare, rhythmische Formen auf.",
          "Die Fassung von 1908 gehört zu Hodlers bekanntesten Alpenbildern. Das Motiv erinnert an Friedrichs «Wanderer über dem Nebelmeer», kommt aber ohne eine Figur im Vordergrund aus."
        ],
        "fact": "1908. Privatbesitz."
      },
      {
        "pid": "heigermond",
        "text": [
          "Dieselbe Dreiergruppe steht im Mondlicht, die Gipfel hell, der Himmel tief und still.",
          "1908 malt Hodler die Jungfrau-Gruppe zu verschiedenen Tages- und Nachtzeiten, unter anderem von der Schynige Platte aus."
        ],
        "fact": "1908. Sammlung nicht ermittelt."
      },
      {
        "pid": "heigermorgen",
        "text": [
          "In der Morgensonne leuchten die drei Gipfel, die Flanken klar voneinander abgesetzt.",
          "Die Serie von 1908 zeigt, wie Hodler ein Motiv durch Licht und Stunde verändert, ohne die Grundform aufzugeben."
        ],
        "fact": "1908. Sammlung nicht ermittelt."
      },
      {
        "pid": "hjungf08",
        "text": [
          "Die Jungfrau allein steht über dem Nebel, eine feste, helle Form über der weichen Wolkendecke.",
          "Neben der Dreiergruppe isoliert Hodler 1908 auch den einzelnen Gipfel. Die Vereinfachung geht noch weiter."
        ],
        "fact": "1908. Sammlung nicht ermittelt."
      },
      {
        "pid": "habendnebel",
        "text": [
          "Am Abend liegt Nebel über dem Thunersee, die Berge dahinter nur noch als ruhige Schatten.",
          "Auch der See selbst wird 1908 zum Nebelbild. Licht und Dunst lösen die Konturen, die Ordnung bleibt."
        ],
        "fact": "1908. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "hodlermurale",
    "place": "Jena und Hannover · Arbeit und Wandbilder",
    "when": "1908–1913",
    "map": {
      "x": 200,
      "y": 52
    },
    "mapLabel": "Jena",
    "intro": [
      "1897 hatte Hodler den Wettbewerb für die Marignano-Wandbilder im Landesmuseum Zürich gewonnen. Es folgte ein heftiger Kunststreit; erst als der Bundesrat einen der Entwürfe guthiess, konnte das Projekt weitergehen. Die letzte Fassung entstand 1899. 1908/09 erhält er in Jena den Auftrag für «Aufbruch der Jenenser Studenten in den Freiheitskrieg von 1813».",
      "1911 erscheinen «Der Mäher» und «Der Holzfäller» auf Schweizer Banknoten. Im selben Jahr erhält er den Auftrag für «Einmütigkeit» im Neuen Rathaus Hannover, 1913 vollendet. 1909 stirbt Augustine Dupin. 1910 richtet Hodler ein zweites Atelier in den Acacias ein und erhält die Ehrendoktorwürde der Universität Basel."
    ],
    "works": [
      {
        "pid": "hjenastud",
        "text": [
          "Ein junger Mann zieht sich den Rock über, fest in der Bewegung, im Hintergrund eine Reihe kleiner Figuren am Horizont.",
          "Die Lithografie von 1908 gehört in den Umkreis des Jenaer Wandbilds. Hodler studiert einzelne Gesten, bevor die grosse Komposition entsteht. Das Blatt liegt im Rijksmuseum in Amsterdam."
        ],
        "fact": "1908. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "hjena",
        "text": [
          "Soldaten zu Pferd und zu Fuss, Pferde, eine Frau mit einem Kind: eine Studie zur Bewegung einer aufbrechenden Truppe.",
          "1908/09 entsteht in Jena das Wandbild «Aufbruch der Jenenser Studenten in den Freiheitskrieg von 1813». Diese Zeichnung im Städel Museum in Frankfurt hält die Komposition fest."
        ],
        "fact": "1908. Städel Museum, Frankfurt."
      },
      {
        "pid": "hmaeher",
        "text": [
          "Ein Mäher steht mit der Sense in weit ausgeholter Bewegung, der Körper klar umrissen, die Geste wiederholt und fest.",
          "1911 erscheinen auf Schweizer Banknoten Motive nach «Der Mäher» und «Der Holzfäller». Die Figuren werden so einem breiten Publikum bekannt."
        ],
        "fact": "1910. Sammlung nicht ermittelt."
      },
      {
        "pid": "hholz",
        "text": [
          "Ein Holzfäller holt mit der Axt aus, die Beine fest gespreizt, der Schlag als klare, grosse Bewegung.",
          "Wie der Mäher gehört der Holzfäller zu Hodlers Figuren der Arbeit. 1910 entstehen diese strengen, plakativen Fassungen."
        ],
        "fact": "1910. Sammlung nicht ermittelt."
      },
      {
        "pid": "heinamut",
        "text": [
          "Eine dichte Gruppe von Männern hebt die Arme; in der Mitte steht eine Figur mit ausgebreiteten Armen auf einem Sockel.",
          "1911 erhält Hodler den Auftrag für das Wandbild «Einmütigkeit» im Neuen Rathaus Hannover; 1913 ist es vollendet. Der Entwurf zeigt die versammelte Geste der Zustimmung."
        ],
        "fact": "um 1913. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "hodlerthun",
    "place": "Thunersee · Stockhorn und Niesen",
    "when": "1909–1913",
    "map": {
      "x": 154,
      "y": 100
    },
    "mapLabel": "Thun",
    "intro": [
      "Im Sommer 1910 arbeitet Hodler am Thunersee an Serien von Stockhorn und Niesen. Die symmetrische Spiegelung von 1909, die Mannheimer Fassung der Stockhornkette und der Niesen von Heustrich aus bei Regen gehören in diese Jahre.",
      "Er hält dasselbe Motiv im Novemberlicht, am Abend und im Winter fest. Die Wiederholung ist kein Behelf, sondern das Prinzip."
    ],
    "works": [
      {
        "pid": "hthunsym09",
        "text": [
          "Der See spiegelt die Berge noch einmal, fast achsengerecht, in einer stillen, gebauten Ordnung.",
          "Die Fassung von 1909 führt das Motiv der symmetrischen Spiegelung weiter, das Hodler am Thunersee seit 1904 verfolgt."
        ],
        "fact": "1909. Sammlung nicht ermittelt."
      },
      {
        "pid": "hodler",
        "text": [
          "Die Stockhornkette liegt klar über dem See, ihre Formen wiederholen sich fast symmetrisch im Wasser.",
          "Die Fassung von 1910 hängt in der Kunsthalle Mannheim. Im Sommer dieses Jahres arbeitet Hodler am Thunersee an Serien von Stockhorn und Niesen."
        ],
        "fact": "1910. Kunsthalle Mannheim."
      },
      {
        "pid": "niesen",
        "text": [
          "Der Niesen steigt als dunkle, fast dreieckige Pyramide hinter See und Regenluft auf.",
          "Die Fassung von 1910 ist von Heustrich aus bei Regen gemalt. Deshalb wirkt der Berg weicher als auf sonnigen Versionen."
        ],
        "fact": "1910. Privatbesitz."
      },
      {
        "pid": "hthunniesen",
        "text": [
          "Über dem weiten See steht der Niesen als klare, dunkle Form, der Himmel hell, das Wasser ruhig.",
          "Neben der isolierten Bergpyramide malt Hodler 1910 auch den Niesen als Teil der ganzen Seelandschaft."
        ],
        "fact": "1910. Sammlung nicht ermittelt."
      },
      {
        "pid": "hthunstock11",
        "text": [
          "Im Novemberlicht liegt die Stockhornkette über dem See, die Formen fest, die Farben kühler.",
          "Das Bild ist auf November 1910 datiert. 1910 richtet Hodler ein zweites Atelier in den Acacias in Genf ein und erhält die Ehrendoktorwürde der Universität Basel."
        ],
        "fact": "1910. Sammlung nicht ermittelt."
      },
      {
        "pid": "hthunabend12",
        "text": [
          "Am Abend verdunkeln sich See und Berge, die Kette des Stockhorns bleibt als ruhige Silhouette sichtbar.",
          "Um 1912 entsteht diese Abendfassung. Hodler hält dasselbe Motiv zu einer anderen Stunde fest."
        ],
        "fact": "um 1912. Sammlung nicht ermittelt."
      },
      {
        "pid": "hwinter13",
        "text": [
          "Im Winter liegt Schnee an den Hängen und am Ufer; die Stockhornkette steht kahl und hell über dem See.",
          "Das Bild ist 1913 datiert. Auch die kalte Jahreszeit gehört in die lange Reihe der Thunersee-Bilder."
        ],
        "fact": "1913. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "hodlerbildnisse",
    "place": "Genf · Bildnisse und Familie",
    "when": "1911–1917",
    "map": {
      "x": 110,
      "y": 92
    },
    "mapLabel": "Bildnisse",
    "intro": [
      "Neben den Landschaften entstehen in diesen Jahren viele Bildnisse: der Kritiker Mathias Morhardt, die Sammlerin Gertrud Müller, der Sohn Hector, Selbstbildnisse, 1916 General Ulrich Wille. 1913 wird die Tochter Pauline-Valentine geboren, aus der Verbindung mit Valentine Godé-Darel. Im Herbst desselben Jahres ist Hodler im Pariser Salon d’Automne, begegnet Auguste Rodin und wird Offizier der Ehrenlegion. Die Familie zieht an den Quai du Mont-Blanc 26; die Wohnung erhält Möbel von Josef Hoffmann.",
      "1914 unterzeichnet Hodler den Protest gegen die Beschiessung der Kathedrale von Reims; deutsche Künstlerverbände schliessen ihn daraufhin aus. Am 25. Januar 1915 stirbt Valentine Godé-Darel in Vevey. 1916 und 1917 unterrichtet Hodler eine Malklasse an der École des Beaux-Arts in Genf. 1917 zeigt das Kunsthaus Zürich eine grosse Retrospektive; im selben Jahr erleidet er ein Lungenödem."
    ],
    "works": [
      {
        "pid": "hmorhardt",
        "text": [
          "Mathias Morhardt sitzt oder steht im dunklen Rock, das Gesicht fest modelliert, der Blick ruhig.",
          "Morhardt, Schriftsteller und Kritiker, hat Hodler in Paris früh unterstützt. Das Bildnis stammt von 1911."
        ],
        "fact": "1911. Sammlung nicht ermittelt."
      },
      {
        "pid": "hgertrud12",
        "text": [
          "Gertrud Müller blickt uns offen an, in einem hellen Kleid, der Hintergrund schlicht.",
          "Die Sammlerin aus Solothurn gehört zu Hodlers wichtigen Auftraggeberinnen. Das Bildnis entsteht um 1912."
        ],
        "fact": "um 1912. Sammlung nicht ermittelt."
      },
      {
        "pid": "hhector12",
        "text": [
          "Hector, Hodlers Sohn, erscheint als junger Mann, der Blick fest, das Gesicht nah an uns herangerückt.",
          "Hector wurde 1887 als Sohn von Hodler und Augustine Dupin geboren. Das Bildnis um 1912 hängt im Kunsthaus Zürich."
        ],
        "fact": "um 1912. Kunsthaus Zürich."
      },
      {
        "pid": "hself12",
        "text": [
          "Hodler zeigt sich selbst: Bart, offener Blick, ein weisser Kragen unter dem dunklen Rock, ganz nah.",
          "Das Selbstbildnis von 1912 gehört zu einer langen Reihe, in der er seine eigene Erscheinung immer wieder festhält."
        ],
        "fact": "1912. Sammlung nicht ermittelt."
      },
      {
        "pid": "hselfrosen",
        "text": [
          "Hodler steht vor uns, hinter ihm oder neben ihm Rosen, der Blick ernst, die Haltung aufrecht.",
          "Das Bild stammt von 1914. Im selben Jahr unterzeichnet Hodler den Protest gegen die Beschiessung der Kathedrale von Reims; daraufhin schliessen ihn deutsche Künstlerverbände aus."
        ],
        "fact": "1914. Sammlung nicht ermittelt."
      },
      {
        "pid": "hwille",
        "text": [
          "General Ulrich Wille sitzt in Uniform, der Blick fest, die Haltung eines Mannes im Amt.",
          "Wille ist während des Ersten Weltkriegs Oberbefehlshaber der Schweizer Armee. Das Bildnis von 1916 hängt im Kunstmuseum Bern."
        ],
        "fact": "1916. Kunstmuseum Bern."
      },
      {
        "pid": "hself16",
        "text": [
          "Wieder zeigt sich Hodler selbst, das Gesicht näher, die Züge markanter, der Blick unverwandt.",
          "Das Selbstbildnis von 1916 entsteht in den Kriegsjahren, in denen er in Genf lehrt und in den Bergen Zuflucht sucht."
        ],
        "fact": "1916. Sammlung nicht ermittelt."
      },
      {
        "pid": "hselfkittel",
        "text": [
          "Hodler trägt einen grünen Malerkittel, das Gesicht nah, der Blick wach und ernst.",
          "Das Bildnis von 1917 zeigt ihn bei der Arbeit. Im selben Jahr richtet das Kunsthaus Zürich ihm eine grosse Retrospektive aus; er erleidet ein Lungenödem."
        ],
        "fact": "1917. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "hodlerchampery",
    "place": "Champéry, Montana und Caux",
    "when": "1915–1917",
    "map": {
      "x": 142,
      "y": 118
    },
    "mapLabel": "Caux",
    "intro": [
      "1915 malt Hodler einen Sonnenuntergang am Genfersee und das Weisshorn von Montana aus. 1916 und 1917 hält er sich in Champéry und Montana auf, wo sich sein Sohn Hector von einer Tuberkulose erholt. Es entstehen die Dents du Midi, die Dents Blanches, ein Bergbach bei Champéry.",
      "1917 blickt er von Caux über Montreux auf den Genfersee, malt aufsteigende Wolken und kehrt zum Grammont in der Morgensonne zurück."
    ],
    "works": [
      {
        "pid": "hsonne15",
        "text": [
          "Am Abend steht die Sonne tief über dem Genfersee, Wasser und Himmel in warmen, waagrechten Bahnen.",
          "Das Bild stammt von 1915. Am 25. Januar dieses Jahres stirbt Valentine Godé-Darel in Vevey."
        ],
        "fact": "1915. Sammlung nicht ermittelt."
      },
      {
        "pid": "hweisshorn15",
        "text": [
          "Von Montana aus steht das Weisshorn als helle, feste Form über dem Tal, die Flanken klar gegliedert.",
          "Hodler hält sich 1915 und in den folgenden Jahren in Montana und Champéry auf. Von dort aus malt er die Walliser Gipfel."
        ],
        "fact": "1915. Sammlung nicht ermittelt."
      },
      {
        "pid": "hdents16",
        "text": [
          "Die Dents du Midi steigen als gezackte Kette auf, die Zacken rhythmisch wiederholt, der Himmel hell.",
          "1916 und 1917 hält sich Hodler in Champéry und Montana auf, wo sich sein Sohn Hector von einer Tuberkulose erholt."
        ],
        "fact": "1916. Sammlung nicht ermittelt."
      },
      {
        "pid": "hblanches16",
        "text": [
          "In der Morgensonne leuchten die Dents Blanches bei Champéry, die Hänge in warmen und kühlen Flächen.",
          "Das Bild ist 1916 datiert. Die Berge um Champéry werden in diesen Jahren zu einem neuen, festen Motiv."
        ],
        "fact": "1916. Sammlung nicht ermittelt."
      },
      {
        "pid": "hbach16",
        "text": [
          "Ein Bergbach stürzt zwischen Steinen und Hängen, das Wasser hell, die Bewegung klar und wiederholt.",
          "Neben den Gipfeln malt Hodler 1916 auch den nahen Bach bei Champéry, wie früher die Bäche des Oberlands."
        ],
        "fact": "1916. Sammlung nicht ermittelt."
      },
      {
        "pid": "hcaux17",
        "text": [
          "Von Caux über Montreux aus liegt der Genfersee tief und weit, die Berge gegenüber in einer ruhigen Linie.",
          "Das Bild stammt von 1917. Der Standort hoch über dem See gibt Hodler wieder die breiten, parallelen Bahnen von Wasser und Himmel."
        ],
        "fact": "1917. Sammlung nicht ermittelt."
      },
      {
        "pid": "hwolken17",
        "text": [
          "Über der Landschaft bei Caux steigen Wolken auf, der Himmel unruhig, die Hänge fest darunter.",
          "Auch 1917 bleibt Caux ein Standort. Hodler hält nicht nur den stillen See fest, sondern auch den bewegten Himmel."
        ],
        "fact": "1917. Sammlung nicht ermittelt."
      },
      {
        "pid": "hgrammont17",
        "text": [
          "In der Morgensonne leuchtet der Grammont über dem See, die Hänge in warmem Gelb und kühlem Violett, der See als klarer Spiegel.",
          "Mehr als zehn Jahre nach den ersten Grammont-Bildern kehrt Hodler 1917 zu diesem Berg zurück, nun in der Morgensonne."
        ],
        "fact": "1917. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "hodlermontblanc",
    "place": "Genf · Quai du Mont-Blanc",
    "when": "1918",
    "map": {
      "x": 124,
      "y": 108
    },
    "mapLabel": "1918",
    "intro": [
      "Im Frühjahr 1918 malt Hodler vom Fenster und vom Balkon seiner Wohnung am Quai du Mont-Blanc 26 den Genfersee mit dem Mont Blanc, in der Morgendämmerung, im Morgenrot, bei Morgenlicht, am Nachmittag, vor Sonnenaufgang. Die Stadt Genf ernennt ihn zum Ehrenbürger.",
      "Es entsteht auch ein Bildnis seiner Frau Berthe. Am 19. Mai 1918 stirbt Ferdinand Hodler in Genf, in eben dieser Wohnung, fünfundsechzig Jahre alt."
    ],
    "works": [
      {
        "pid": "hmbdawn",
        "text": [
          "In der Morgendämmerung liegt der Mont Blanc über dem Genfersee, die Formen weich, das Licht noch blass.",
          "1918 malt Hodler den Blick von seiner Wohnung am Quai du Mont-Blanc 26 immer wieder, zu verschiedenen Stunden des Tages."
        ],
        "fact": "1918. Sammlung nicht ermittelt."
      },
      {
        "pid": "hmbred",
        "text": [
          "Im Morgenrot färben sich See und Himmel, der Mont Blanc steht als ruhige, ferne Form über dem Wasser.",
          "Die Serie entsteht vom Fenster und vom Balkon aus. Genf ernennt Hodler 1918 zum Ehrenbürger."
        ],
        "fact": "1918. Sammlung nicht ermittelt."
      },
      {
        "pid": "hmblight",
        "text": [
          "Bei Morgenlicht wird der See klarer, der Mont Blanc fester, die waagrechten Bahnen deutlicher.",
          "Hodler ändert kaum den Ausschnitt, nur das Licht. Die Wiederholung derselben Sicht ist selbst das Thema."
        ],
        "fact": "1918. Sammlung nicht ermittelt."
      },
      {
        "pid": "hmbafternoon",
        "text": [
          "Am Nachmittag liegt ein anderes Licht auf See und Gebirge, die Farben wärmer, die Fernsicht weit.",
          "Auch diese Tageszeit gehört in die letzte Serie. Hodler beobachtet denselben Blick, bis die Stunde ihn verändert."
        ],
        "fact": "1918. Sammlung nicht ermittelt."
      },
      {
        "pid": "hmbbefore",
        "text": [
          "Vor Sonnenaufgang sind See und Himmel noch kühl, der Mont Blanc eine blasse, ruhige Masse am Horizont.",
          "Die Stunde vor dem Aufgang gehört zu den stillsten der Serie. Wenig später, am 19. Mai 1918, stirbt Hodler in eben dieser Wohnung."
        ],
        "fact": "1918. Sammlung nicht ermittelt."
      },
      {
        "pid": "hmbmarch",
        "text": [
          "Am frühen Morgen im März liegt der Mont Blanc über dem See, die Luft klar, die Linien ruhig.",
          "Das Bild ist auf März 1918 datiert, zwei Monate vor Hodlers Tod. Die Serie geht bis in seine letzten Wochen."
        ],
        "fact": "März 1918. Sammlung nicht ermittelt."
      },
      {
        "pid": "hberthe18",
        "text": [
          "Berthe Hodler, geborene Jacques, erscheint in einem schlichten Bildnis, das Gesicht ruhig und nah.",
          "Hodler hat sie 1894 kennengelernt und 1898 geheiratet. Das Bildnis entsteht 1918, im letzten Lebensjahr."
        ],
        "fact": "1918. Sammlung nicht ermittelt."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
