// v7.9 Gustav Klimt life journey, Part 1 (1862–c. 1902).
// Appends to PATH_WORKS / PATHS; does not rewrite Van Gogh, Monet or Hokusai.
// Reuses the gallery work birch (Buchenwald I, 1902) by pid only (not listed in works[]).
// Quotes are self-translated from documented German sources (Flöge postcard; Wienbibliothek typuscript).
(function () {
  var works = [
  {
    "id": "klara",
    "title": "Bildnis Klara Klimt",
    "artist": "Gustav Klimt",
    "year": "um 1880",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Klimt - Klara Klimt, um 1880, Natter 2012, Nr. 6.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "girlhead",
    "title": "Mädchenkopf",
    "artist": "Gustav Klimt",
    "year": "um 1880–1883",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Mädchenkopf.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "forestfloor",
    "title": "Waldboden",
    "artist": "Gustav Klimt",
    "year": "1881–1882",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Klimt - Waldboden, 1881-82, Natter 2012 10.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sappho",
    "title": "Sappho",
    "artist": "Gustav Klimt",
    "year": "um 1888–1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Gustav Klimt 064.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "organist",
    "title": "Entwurf für die Allegorie der Musik (Orgelspielerin)",
    "artist": "Gustav Klimt",
    "year": "1885",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Entwurf für die Allegorie der Musik (Orgelspielerin) - 1459 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ivyoldman",
    "title": "Studie eines greisen Mannes mit Efeukranz",
    "artist": "Gustav Klimt",
    "year": "um 1888–1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Study of an Old Man with Ivy Wreath, 1888-1890.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "auditorium",
    "title": "Zuschauerraum im alten Burgtheater",
    "artist": "Gustav Klimt",
    "year": "1888",
    "museum": "Wien Museum",
    "source": "Wikimedia Commons: «Klimt - Zuschauerraum im alten Burgtheater - 1888.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "shakespeare",
    "title": "Shakespeares Theater",
    "artist": "Gustav Klimt",
    "year": "1886–1888",
    "museum": "Burgtheater, Wien",
    "source": "Wikimedia Commons: «Klimt - Theater Shakespeares.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "thespis",
    "title": "Der Thespiskarren",
    "artist": "Gustav Klimt",
    "year": "1886–1888",
    "museum": "Burgtheater, Wien",
    "source": "Wikimedia Commons: «Klimt - Thespiskarren.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "khmgreece",
    "title": "Griechische Antike (Detail)",
    "artist": "Gustav Klimt",
    "year": "1890–1891",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt, Griechische Antike.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "khmitalyl",
    "title": "Altitalienische Kunst (linke Lünette)",
    "artist": "Gustav Klimt",
    "year": "1890–1891",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Klimt - Alt-Italienische Kunst, 1891.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "khmitalyr",
    "title": "Altitalienische Kunst (rechte Lünette)",
    "artist": "Gustav Klimt",
    "year": "1890–1891",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Klimt - Alt-Italienische Kunst, 1891.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "khmitalyc",
    "title": "Altitalienische Kunst (Interkolumnium)",
    "artist": "Gustav Klimt",
    "year": "1890–1891",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Klimt - Alt-Italienische Kunst, 1891.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "khmvenice",
    "title": "Venezianisches Quattrocento (Lünette)",
    "artist": "Gustav Klimt",
    "year": "1890–1891",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Klimt - Römisches und venezianisches Quattrocento, 1891.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "khmmark",
    "title": "Der Evangelist Markus",
    "artist": "Gustav Klimt",
    "year": "1890–1891",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Klimt - Römisches und venezianisches Quattrocento, 1891.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pembaur",
    "title": "Bildnis Josef Pembaur",
    "artist": "Gustav Klimt",
    "year": "1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Bildnis Joseph Pembauer.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "emilie91",
    "title": "Bildnis Emilie Flöge",
    "artist": "Gustav Klimt",
    "year": "1891",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt, Emilie Floge.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hanswurst",
    "title": "Hanswurst auf der Stegreifbühne zu Rothenburg",
    "artist": "Gustav Klimt",
    "year": "1893–1894",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Hanswurst auf der Stegreifbühne zu Rothenburg.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "seatedgirl",
    "title": "Sitzendes junges Mädchen",
    "artist": "Gustav Klimt",
    "year": "um 1894",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Seated Young Girl - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lewinsky",
    "title": "Josef Lewinsky als Carlos in «Clavigo»",
    "artist": "Gustav Klimt",
    "year": "1895",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Josef Lewinsky als Carlos in Clavigo - 494 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "love1895",
    "title": "Liebe",
    "artist": "Gustav Klimt",
    "year": "1895",
    "museum": "Wien Museum",
    "source": "Wikimedia Commons: «Klimt - Liebe - 1895.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "musik1",
    "title": "Die Musik I",
    "artist": "Gustav Klimt",
    "year": "1895",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Musik1.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lilascarf",
    "title": "Dame mit lila Schal",
    "artist": "Gustav Klimt",
    "year": "um 1895",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Klimt - Dame mit lila Schal, um 1895.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "blindman",
    "title": "Der Blinde",
    "artist": "Gustav Klimt",
    "year": "um 1896",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Blind Man - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schubert",
    "title": "Schubert am Klavier (Entwurf)",
    "artist": "Gustav Klimt",
    "year": "1896",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Klimt - Schubert am Klavier. Entwurf für das Musikzimmer von Nikolaus Dumba, 1896, Natter 2012 83.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "capehat",
    "title": "Dame mit Umhang und Hut",
    "artist": "Gustav Klimt",
    "year": "1897–1898",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Gustav Klimt - Portrait of a Lady with Cape and Hat, 1897-1898 - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "helene",
    "title": "Bildnis Helene Klimt",
    "artist": "Gustav Klimt",
    "year": "1898",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Gustav Klimt Portrait of Helene Klimt (his niece).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "theseus",
    "title": "Erstes Ausstellungsplakat der Wiener Secession",
    "artist": "Gustav Klimt",
    "year": "1898",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Erstes Ausstellungsplakat der Wiener Secession (zensierte Version).jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pallas",
    "title": "Pallas Athene",
    "artist": "Gustav Klimt",
    "year": "1898",
    "museum": "Wien Museum",
    "source": "Wikimedia Commons: «Klimt - Pallas Athene.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "knips",
    "title": "Bildnis Sonja Knips",
    "artist": "Gustav Klimt",
    "year": "1898",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Sonja Knips - 4403 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "knipsstudy",
    "title": "Studie zu Sonja Knips",
    "artist": "Gustav Klimt",
    "year": "um 1898",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt Studie Sonja Knips.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lederer",
    "title": "Bildnis Serena Pulitzer Lederer",
    "artist": "Gustav Klimt",
    "year": "1899",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Serena Pulitzer Lederer (1867–1943) MET DP120567.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "deathbed",
    "title": "Alter Mann auf dem Totenbett",
    "artist": "Gustav Klimt",
    "year": "1899",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Alter Mann auf dem Totenbett - 8507 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "afterrain",
    "title": "Nach dem Regen",
    "artist": "Gustav Klimt",
    "year": "1898",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Nach dem Regen - 374 - Österreichische Galerie Belvedere.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "orchardeve",
    "title": "Obstgarten am Abend",
    "artist": "Gustav Klimt",
    "year": "1898",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Orchard in the Evening Klimt.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pond",
    "title": "Stiller Weiher (Egelsee bei Golling)",
    "artist": "Gustav Klimt",
    "year": "1899",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Tranquil Pond (Egelsee near Golling, Salzburg) - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "swamp",
    "title": "Der Sumpf",
    "artist": "Gustav Klimt",
    "year": "um 1900",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - The Swamp 1900.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "blackbull",
    "title": "Der schwarze Stier",
    "artist": "Gustav Klimt",
    "year": "1900",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «The Black Bull Klimt.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "farmbirch",
    "title": "Bauernhaus mit Birken",
    "artist": "Gustav Klimt",
    "year": "1900",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Gustav Klimt 004.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "attersee",
    "title": "Am Attersee",
    "artist": "Gustav Klimt",
    "year": "1900",
    "museum": "Leopold Museum, Wien",
    "source": "Wikimedia Commons: «Gustav Klimt - Attersee - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "fruittrees",
    "title": "Obstbäume",
    "artist": "Gustav Klimt",
    "year": "1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Fruit Trees, 1901.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "birchshore",
    "title": "Seeufer mit Birken",
    "artist": "Gustav Klimt",
    "year": "1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Seeufer mit Birken.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "island",
    "title": "Insel im Attersee",
    "artist": "Gustav Klimt",
    "year": "um 1901–1902",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Gustav Klimt - Insel im Attersee (c. 1901-02).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "musik1901",
    "title": "Die Musik",
    "artist": "Gustav Klimt",
    "year": "1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Musik - 1901.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "jurysketch",
    "title": "Skizze zur Jurisprudenz",
    "artist": "Gustav Klimt",
    "year": "1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Skizze zur Jurisprudenz - 1901.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "judith",
    "title": "Judith I",
    "artist": "Gustav Klimt",
    "year": "1901",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Judith und Holofernes (Klimt - 1901).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "henneberg",
    "title": "Bildnis Marie Henneberg",
    "artist": "Gustav Klimt",
    "year": "1901–1902",
    "museum": "Kunstmuseum Moritzburg, Halle",
    "source": "Wikimedia Commons: «Gustav Klimt Marie Henneberg 1901-1902.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "emilie02",
    "title": "Bildnis Emilie Flöge",
    "artist": "Gustav Klimt",
    "year": "1902",
    "museum": "Wien Museum",
    "source": "Wikimedia Commons: «Gustav Klimt - Bildnis Emilie Flöge.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "beethhead",
    "title": "Frauenkopf im Dreiviertelprofil (Studie zum Beethovenfries)",
    "artist": "Gustav Klimt",
    "year": "1901–1902",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Gustav Klimt - Head of a Woman in Three-Quarter Profile (Study for the Beethoven Frieze), 1901-1902 - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "beethsehnsucht",
    "title": "Studie zu «Die Sehnsucht nach dem Glück»",
    "artist": "Gustav Klimt",
    "year": "1901–1902",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Klimt - Die Sehnsucht nach dem Glück.jpeg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "klimt",
  "name": "Gustav Klimt",
  "title": "Klimts Lebensweg",
  "life": "1862–1918",
  "part": "Teil 1 · Bis zum Beethovenfries",
  "subtitle": "Von Baumgarten bis zur Secession",
  "cover": "pallas",
  "intro": "Reise mit Gustav Klimt durch die erste Hälfte seines Weges: von der Kindheit in Baumgarten und der Kunstgewerbeschule über die Künstler-Compagnie mit dem Bruder Ernst und Franz Matsch, die Bilder im Burgtheater und im Kunsthistorischen Museum, den Tod des Vaters und des Bruders 1892, die Gründung der Secession und die ersten Landschaften bis zum Beethovenfries von 1902. Kurze Stationen, Bilder zum Ausmalen und zwei überlieferte Stimmen: eine Ansichtskarte an Emilie Flöge und der «Kommentar zu einem nicht existierenden Selbstporträt». Dieser erste Teil reicht bis um 1902.",
  "ending": [
    "1902 richtet die Secession die Beethoven-Ausstellung um Max Klingers Beethoven-Statue ein. Klimt malt den Fries an drei Wänden: von der Sehnsucht nach dem Glück bis zu «Diesen Kuss der ganzen Welt». Im selben Jahr entstehen das stehende Bildnis Emilie Flöges und der «Buchenwald I».",
    "In einem undatierten Typoskript, das die Wienbibliothek im Rathaus als «Kommentar zu einem nicht existierenden Selbstporträt» bewahrt, schreibt Klimt: «Von mir gibt es kein Selbstporträt. Ich interessiere mich nicht für die eigene Person als ‹Gegenstand eines Bildes›, eher für andere Menschen, vor allem weibliche, noch mehr jedoch für andere Erscheinungen. Wer über mich – als Künstler, der allein beachtenswert ist – etwas wissen will, der soll meine Bilder aufmerksam betrachten und daraus zu erkennen suchen, was ich bin und was ich will.»",
    "Der Weg geht weiter. Es folgen die goldene Zeit nach 1902, neue Bildnisse und Landschaften. Klimt stirbt 1918 in Wien – davon erzählt der nächste Teil."
  ],
  "epilogue": "1902 malt Klimt den Beethovenfries für die Secession und das stehende Bildnis Emilie Flöges; im selben Jahr entsteht der «Buchenwald I». In einem undatierten Typoskript der Wienbibliothek schreibt er, von ihm gebe es kein Selbstporträt: man solle seine Bilder betrachten. Die goldene Zeit nach 1902 folgt im nächsten Teil.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,88 C28,52 70,40 120,44 C170,48 210,58 222,82 C230,102 214,132 160,142 C100,152 42,140 22,112 C14,100 14,94 18,88 Z"
    ]
  },
  "stations": [
    {
      "id": "klimtbaum",
      "place": "Wien-Baumgarten · Kindheit und Schule",
      "when": "1862–1883",
      "map": {
        "x": 168,
        "y": 74
      },
      "mapLabel": "Baumgarten",
      "intro": [
        "Gustav Klimt wird am 14. Juli 1862 in Baumgarten bei Wien geboren, heute im 14. Bezirk. Der Vater Ernst Klimt der Ältere ist Goldgraveur, die Mutter Anna, geborene Finster. Gustav ist das zweite von sieben Kindern.",
        "1876 tritt er in die Kunstgewerbeschule des k. k. Österreichischen Museums für Kunst und Industrie ein, die heutige Universität für angewandte Kunst. Dort lernt er unter anderem bei Ferdinand Laufberger das Zeichnen und die dekorative Malerei."
      ],
      "works": [
        {
          "pid": "klara",
          "text": [
            "Klara Klimt, eine Schwester des Malers, erscheint als junge Frau in dunkelblauem Kleid, mit Perlenkette und weissem Spitzenkragen. Der Blick geht ruhig aus dem Bild.",
            "Das Bild entsteht um 1880, in den Jahren der Kunstgewerbeschule. Es gehört heute zum Leopold Museum in Wien."
          ],
          "fact": "Ölbild, um 1880. Leopold Museum, Wien."
        },
        {
          "pid": "girlhead",
          "text": [
            "Ein Mädchenkopf in weichen Kreide- oder Stiftlinien, das Haar locker um das Gesicht. Die Studie zeigt, wie genau Klimt schon als Schüler nach dem Modell zeichnet.",
            "Solche Köpfe gehören zur Ausbildung an der Kunstgewerbeschule, die Klimt 1876 beginnt."
          ],
          "fact": "Zeichnung, um 1880–1883. Sammlung nicht ermittelt."
        },
        {
          "pid": "forestfloor",
          "text": [
            "Statt einer weiten Landschaft sieht man nur den Waldboden: Moos, Blätter, kleine Pflanzen, dicht an dicht. Das Bild entsteht 1881 oder 1882, noch in der Schulzeit.",
            "Es hängt im Leopold Museum in Wien und zeigt, dass Klimt schon früh den Blick nach unten, auf Muster und Boden, richten kann – lange vor den Waldstücken am Attersee."
          ],
          "fact": "Öl auf Leinwand, 1881–1882. Leopold Museum, Wien."
        }
      ]
    },
    {
      "id": "klimtcompagnie",
      "place": "Wien · Künstler-Compagnie",
      "when": "1883–1890",
      "map": {
        "x": 180,
        "y": 70
      },
      "mapLabel": "Compagnie",
      "intro": [
        "Mit seinem jüngeren Bruder Ernst, ebenfalls Maler, und dem Studienfreund Franz Matsch gründet Klimt um 1883 die «Künstler-Compagnie». Die drei übernehmen gemeinsam dekorative Aufträge für Theater, Paläste und festliche Räume.",
        "In diesen Jahren entstehen auch frühe figürliche Bilder: Entwürfe zur Allegorie der Musik, mythologische Szenen wie die Sappho, Studien nach dem Modell. Die Compagnie arbeitet noch im akademischen, historistischen Stil der Ringstrassenzeit."
      ],
      "works": [
        {
          "pid": "sappho",
          "text": [
            "Die Dichterin Sappho sitzt mit einer Leier auf einer Terrasse, ein Kind lehnt an ihre Seite. Im Hintergrund öffnet sich ein Abendhimmel über der Landschaft.",
            "Das Bild entsteht um 1888 bis 1890, in der Zeit der Künstler-Compagnie, noch in einem akademischen, an die Antike angelehnten Stil."
          ],
          "fact": "Ölbild, um 1888–1890. Sammlung nicht ermittelt."
        },
        {
          "pid": "organist",
          "text": [
            "In einem ovalen Feld kniet eine Frau in blau-grünem Gewand an der Orgel. Hinter ihr schwebt eine hell gekleidete Gestalt, wie ein Klang, der sich löst.",
            "Der Entwurf entsteht 1885 für eine Allegorie der Musik. Das Bild hängt in der Österreichischen Galerie Belvedere in Wien."
          ],
          "fact": "Ölskizze, 1885. Österreichische Galerie Belvedere, Wien."
        },
        {
          "pid": "ivyoldman",
          "text": [
            "Ein alter Mann im Profil, den Bart grau, um die Stirn einen Kranz aus Efeu. Die Studie steht in der Tradition antiker Dichter- und Philosophenköpfe.",
            "Sie entsteht um 1888 bis 1890, in denselben Jahren, in denen Klimt am Burgtheater und bald darauf am Kunsthistorischen Museum arbeitet."
          ],
          "fact": "Studie, um 1888–1890. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "klimtburg",
      "place": "Wien · Burgtheater",
      "when": "1886–1888",
      "map": {
        "x": 186,
        "y": 62
      },
      "mapLabel": "Burgtheater",
      "intro": [
        "1886 bis 1888 bemalen Klimt, Ernst Klimt und Franz Matsch die Plafonds und Lünetten der beiden Feststiegen im neuen Burgtheater am Ring. Zu Klimts Teilen gehören unter anderem Shakespeares Theater und der Thespiskarren.",
        "1888 entsteht ausserdem das Bild des Zuschauerraums im alten Burgtheater am Michaelerplatz, bevor das Haus abgebrochen wird. 1890 erhält Klimt dafür den Kaiserpreis."
      ],
      "works": [
        {
          "pid": "auditorium",
          "text": [
            "Der Zuschauerraum des alten Burgtheaters am Michaelerplatz ist dicht mit Logen, Gold und Gesichtern gefüllt. Klimt malt das Haus 1888, bevor es abgebrochen wird.",
            "Das Bild hängt im Wien Museum. 1890 erhält Klimt dafür den Kaiserpreis."
          ],
          "fact": "1888, Wien Museum. 1890 mit dem Kaiserpreis ausgezeichnet."
        },
        {
          "pid": "shakespeare",
          "text": [
            "Auf der Bühne liegt eine Frau wie tot, davor sitzt eine gekrönte Zuschauerin in einem Reifrock. Das Deckengemälde zeigt ein Theater zur Zeit Shakespeares.",
            "Es gehört zu den Bildern, die Klimt 1886 bis 1888 für die Feststiege des neuen Burgtheaters malt. In der Zuschauermenge hat er sich selbst und seine Gefährten der Künstler-Compagnie dargestellt."
          ],
          "fact": "Deckengemälde der Feststiege, 1886–1888. Burgtheater, Wien."
        },
        {
          "pid": "thespis",
          "text": [
            "Ein Wagen rollt durch eine Landschaft, darauf Schauspieler und Masken: der Karren des Thespis, mit dem nach der Überlieferung das griechische Theater auf die Wanderung ging.",
            "Das Bild ist eines der Deckengemälde Klimts im neuen Burgtheater, entstanden 1886 bis 1888 zusammen mit Ernst Klimt und Franz Matsch."
          ],
          "fact": "Deckengemälde der Feststiege, 1886–1888. Burgtheater, Wien."
        }
      ]
    },
    {
      "id": "klimtkhm",
      "place": "Wien · Kunsthistorisches Museum",
      "when": "1890–1891",
      "map": {
        "x": 188,
        "y": 80
      },
      "mapLabel": "KHM",
      "intro": [
        "1890 und 1891 gestaltet Klimt im Stiegenhaus des Kunsthistorischen Museums die Zwickel und Interkolumnien: einen Zyklus zur Geschichte der Kunst, von der griechischen Antike bis zur altitalienischen und venezianischen Malerei.",
        "Im selben Umkreis entsteht 1890 das Bildnis des Pianisten Josef Pembaur, schon mit ornamentalem Goldgrund um den Kopf des Musikers."
      ],
      "works": [
        {
          "pid": "khmgreece",
          "text": [
            "Eine junge Frau in gemustertem Gewand lehnt sich über eine Brüstung. Hinter ihr steht eine bemalte griechische Vase, daneben eine kleine Bronzefigur.",
            "Das Detail gehört zu den Zwickelbildern der «Griechischen Antike» im Stiegenhaus des Kunsthistorischen Museums, die Klimt 1890 und 1891 ausführt."
          ],
          "fact": "Zwickelbild im Stiegenhaus, 1890–1891. Kunsthistorisches Museum, Wien."
        },
        {
          "pid": "khmitalyl",
          "text": [
            "Ein junger Mann im dunklen Gewand und schwarzen Hut hält ein Buch; neben ihm schweben Engelköpfe über einem Blütenstreifen. Die Lünette sitzt über einem Bogen des Stiegenhauses.",
            "Sie gehört zum Feld «Altitalienische Kunst», das Klimt 1890 und 1891 im Kunsthistorischen Museum malt."
          ],
          "fact": "Lünette im Stiegenhaus, 1890–1891. Kunsthistorisches Museum, Wien."
        },
        {
          "pid": "khmitalyr",
          "text": [
            "Zwei Gestalten mit goldenen Nimben: die eine in Rot, die andere in einem dunkelblauen, gold gemusterten Gewand. Klimt setzt das Gold schon hier als Fläche und Ornament ein.",
            "Die Lünette ist der rechte Teil des Feldes «Altitalienische Kunst» im Stiegenhaus des Kunsthistorischen Museums, 1890–1891."
          ],
          "fact": "Lünette im Stiegenhaus, 1890–1891. Kunsthistorisches Museum, Wien."
        },
        {
          "pid": "khmitalyc",
          "text": [
            "Zwischen zwei Marmor-Säulen steht ein Kind mit Nimbus in einem hellen Gewand und hält ein goldenes Tuch. Über ihm erscheint ein dunkler, maskenhafter Kopf.",
            "Das Interkolumnium gehört zum Zyklus «Altitalienische Kunst» im Stiegenhaus des Kunsthistorischen Museums, 1890–1891."
          ],
          "fact": "Interkolumnium im Stiegenhaus, 1890–1891. Kunsthistorisches Museum, Wien."
        },
        {
          "pid": "khmvenice",
          "text": [
            "Eine Frau mit goldener Krone und reich gemustertem Mantel trägt eine Krone oder ein Modell in den Händen. Hinter ihr steht ein Kreuz, daneben die Buchstaben C·K – Klimts Zeichen.",
            "Die Lünette gehört zum Feld «Römisches und Venezianisches Quattrocento» im Stiegenhaus des Kunsthistorischen Museums, 1890–1891."
          ],
          "fact": "Lünette im Stiegenhaus, 1890–1891. Kunsthistorisches Museum, Wien."
        },
        {
          "pid": "khmmark",
          "text": [
            "Ein bärtiger Mann in goldenem Gewand, über der Schulter ein Löwe: der Evangelist Markus, Schutzheiliger Venedigs. Daneben steht auf Goldgrund der Segensspruch «Pax tibi Marce evangelista meus».",
            "Die Lünette gehört zum Feld «Römisches und Venezianisches Quattrocento» im Stiegenhaus des Kunsthistorischen Museums, 1890–1891."
          ],
          "fact": "Lünette im Stiegenhaus, 1890–1891. Kunsthistorisches Museum, Wien."
        },
        {
          "pid": "pembaur",
          "text": [
            "Der Pianist Josef Pembaur der Ältere sitzt im schwarzen Rock vor einem goldenen Grund. Um das Bild läuft ein ornamentaler Rahmen mit Noten und Zeichen der Musik.",
            "Das Bildnis entsteht 1890, im selben Umkreis wie die Arbeiten für das Kunsthistorische Museum. Der Goldgrund kündigt schon spätere Bildnisse an."
          ],
          "fact": "Ölbild, 1890. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "klimt1892",
      "place": "Wien · Einschnitt und Bildnisse",
      "when": "1891–1896",
      "map": {
        "x": 178,
        "y": 70
      },
      "mapLabel": "1892",
      "intro": [
        "1892 stirbt zuerst der Vater, der Goldgraveur Ernst Klimt der Ältere. Am 9. Dezember stirbt auch der Bruder Ernst, erst achtundzwanzig Jahre alt. Gustav wird Vormund von Ernsts kleiner Tochter Helene, genannt Lentschi.",
        "In den folgenden Jahren malt er Bildnisse, Allegorien und Entwürfe für private Räume, darunter das Musikzimmer von Nikolaus Dumba. Die Künstler-Compagnie löst sich nach dem Tod des Bruders auf."
      ],
      "works": [
        {
          "pid": "emilie91",
          "text": [
            "Emilie Flöge, die Schwester von Ernst Klimts Frau Helene, sitzt in einem hellen Kleid, das Haar hochgesteckt, den Blick ruhig zur Seite.",
            "Das Bildnis entsteht 1891, im Jahr der Hochzeit von Ernst und Helene Flöge. Zwischen Gustav Klimt und Emilie Flöge beginnt eine Freundschaft, die bis an sein Lebensende dauert."
          ],
          "fact": "Ölbild, 1891. Sammlung nicht ermittelt."
        },
        {
          "pid": "hanswurst",
          "text": [
            "Auf einem offenen Platz spielt die Figur des Hanswurst vor einer dichten Menge: ein Stegreiftheater unter freiem Himmel, mit Kostümen und Fahnen.",
            "Das Bild entsteht 1893 oder 1894, nach den Deckenbildern im Burgtheater und nach dem Tod des Bruders Ernst."
          ],
          "fact": "Ölbild, 1893–1894. Sammlung nicht ermittelt."
        },
        {
          "pid": "seatedgirl",
          "text": [
            "Ein junges Mädchen sitzt in einem weiten, hellen Kleid, die Hände im Schoss, den Blick ruhig aus dem Bild. Hinter ihr bleibt der Grund dunkel und einfach.",
            "Das Bild entsteht um 1894 und hängt im Leopold Museum in Wien."
          ],
          "fact": "Ölbild, um 1894. Leopold Museum, Wien."
        },
        {
          "pid": "lewinsky",
          "text": [
            "Der Hofschauspieler Josef Lewinsky steht in dunkler Kleidung auf einem schmalen, gold ornamentierten Feld: als Carlos in Goethes «Clavigo».",
            "Das Bildnis entsteht 1895 und hängt in der Österreichischen Galerie Belvedere in Wien."
          ],
          "fact": "Ölbild, 1895. Österreichische Galerie Belvedere, Wien."
        },
        {
          "pid": "love1895",
          "text": [
            "Ein Paar steht dicht beieinander in einem goldenen, fast nebligen Grund. Die Gesichter nähern sich, ohne dass die Szene laut wird.",
            "Das Bild entsteht 1895 und hängt im Wien Museum. Es gehört zu den figürlichen Arbeiten der Jahre nach der Künstler-Compagnie."
          ],
          "fact": "Ölbild, 1895. Wien Museum."
        },
        {
          "pid": "musik1",
          "text": [
            "Eine Frau in einem dunklen Kleid steht neben einer goldenen Sphinx und einer Leier. Hinter ihr erscheint eine hellere, fast schwebende Gestalt.",
            "«Die Musik I» entsteht 1895. Eine spätere Fassung von 1898, «Die Musik II», verbrennt 1945 mit anderen Werken auf Schloss Immendorf."
          ],
          "fact": "Ölbild, 1895. Sammlung nicht ermittelt."
        },
        {
          "pid": "lilascarf",
          "text": [
            "Eine Frau im Oval, das dunkle Haar hochgesteckt, um den Hals ein lila Schal. Der Grund ist schlicht, das Gesicht ruhig und hell.",
            "Das Bild entsteht um 1895 und gehört dem Kunsthistorischen Museum in Wien."
          ],
          "fact": "Ölbild, um 1895. Kunsthistorisches Museum, Wien."
        },
        {
          "pid": "blindman",
          "text": [
            "Ein älterer Mann mit weissem Haar und Bart, die Augen geschlossen oder leer, den Kopf leicht zur Seite. Das Bild ist knapp und ohne Beiwerk.",
            "Es entsteht um 1896 und hängt im Leopold Museum in Wien."
          ],
          "fact": "Ölbild, um 1896. Leopold Museum, Wien."
        },
        {
          "pid": "schubert",
          "text": [
            "Im Halbdunkel sitzt Schubert am Klavier, umgeben von zuhörenden Frauen in hellen Kleidern. Das Bild ist ein Entwurf für das Musikzimmer von Nikolaus Dumba.",
            "Der Entwurf von 1896 hängt im Leopold Museum. Eine spätere, ausgeführte Fassung des Themas verbrennt 1945 auf Schloss Immendorf."
          ],
          "fact": "Entwurf, 1896, für das Musikzimmer Nikolaus Dumbas. Leopold Museum, Wien."
        }
      ]
    },
    {
      "id": "klimtsecession",
      "place": "Wien · Secession und Ver Sacrum",
      "when": "1897–1899",
      "map": {
        "x": 184,
        "y": 94
      },
      "mapLabel": "Secession",
      "intro": [
        "Am 3. April 1897 wird die Vereinigung bildender Künstler Österreichs gegründet, die Wiener Secession. Klimt ist Gründungsmitglied und erster Präsident. Ab 1898 erscheint die Zeitschrift «Ver Sacrum».",
        "Für die erste Ausstellung 1898 entwirft er das Plakat «Theseus und Minotauros». Eine erste Fassung mit unbekleidetem Theseus wird beanstandet; in der ausgegebenen Fassung verdeckt ein Baum die Figur. Im selben Jahr entstehen die «Pallas Athene» und das Bildnis der Sonja Knips."
      ],
      "works": [
        {
          "pid": "capehat",
          "text": [
            "Eine Frau im Profil, unter einem grossen dunklen Hut, der Umhang bis zum Kinn. Das Gesicht bleibt im Schatten, die Form des Huts bestimmt das Blatt.",
            "Die Arbeit entsteht 1897 oder 1898, in den Monaten, in denen die Secession gegründet wird."
          ],
          "fact": "1897–1898. Sammlung nicht ermittelt."
        },
        {
          "pid": "helene",
          "text": [
            "Helene Klimt, die Nichte des Malers, die Tochter von Ernst und Helene Flöge, sitzt im Profil, das dunkle Haar glatt geschnitten, in einem hellen Kleid.",
            "Nach dem Tod des Bruders 1892 ist Gustav Klimt Vormund des Kindes. Das Bildnis entsteht 1898, im Jahr der ersten Secessionsausstellung."
          ],
          "fact": "Ölbild, 1898. Sammlung nicht ermittelt."
        },
        {
          "pid": "theseus",
          "text": [
            "Oben kämpft Theseus gegen den Minotauros, rechts steht Pallas Athene mit Speer und Gorgonenschild. Die Mitte bleibt offen für den Text der «I. Kunstausstellung».",
            "Eine erste Fassung mit unbekleidetem Theseus wird beanstandet. In der ausgegebenen Fassung von 1898 verdeckt ein Baum die Figur. Unten steht «Ver Sacrum» und der Name der Vereinigung bildender Künstler Österreichs."
          ],
          "fact": "Lithografiertes Plakat, 1898, zensierte Fassung mit Baum."
        },
        {
          "pid": "pallas",
          "text": [
            "Pallas Athene füllt das Quadrat: goldener Helm, goldener Harnisch, in der Hand ein Speer. Auf dem Schild erscheint ein Gesicht, im Schmuck des Panzers eine kleine Nuda Veritas.",
            "Das Bild entsteht 1898, im Gründungsjahr der Zeitschrift «Ver Sacrum», und hängt im Wien Museum. Es wird zu einem Sinnbild der Secession."
          ],
          "fact": "Öl auf Leinwand, 1898. Wien Museum."
        },
        {
          "pid": "knips",
          "text": [
            "Sonja Knips sitzt in einem weiten rosa Kleid, einen roten Fächer in der Hand, vor einem dunklen Grund mit Blüten. Der Blick geht ruhig aus dem Bild.",
            "Das Bildnis entsteht 1898 und hängt in der Österreichischen Galerie Belvedere in Wien. Es gilt als eines der ersten modernen Gesellschaftsbildnisse Klimts."
          ],
          "fact": "Öl auf Leinwand, 1898. Österreichische Galerie Belvedere, Wien.",
          "quote": {
            "text": "Von mir gibt es kein Selbstporträt. Ich interessiere mich nicht für die eigene Person als ‹Gegenstand eines Bildes›, eher für andere Menschen, vor allem weibliche, noch mehr jedoch für andere Erscheinungen.",
            "cite": "Kommentar zu einem nicht existierenden Selbstporträt, Typoskript ohne Jahresangabe, Wienbibliothek im Rathaus (Nachlass Auguste Fickert)"
          }
        },
        {
          "pid": "knipsstudy",
          "text": [
            "In wenigen Linien sitzt die Gestalt schon im weiten Kleid, der Kopf geneigt, der Fächer angedeutet. Die Studie sucht die Haltung des späteren Ölbildes.",
            "Sie entsteht um 1898, im Umkreis des Bildnisses der Sonja Knips."
          ],
          "fact": "Zeichnung, um 1898. Sammlung nicht ermittelt."
        },
        {
          "pid": "lederer",
          "text": [
            "Serena Pulitzer Lederer steht in einem langen, fast weissen Kleid vor einem hellen Grund. Die schmale Hochform lässt viel Raum um die Figur.",
            "Das Bildnis entsteht 1899. Die Familie Lederer wird zu den wichtigsten Sammlerinnen und Sammlern Klimts. Das Bild hängt im Metropolitan Museum of Art in New York."
          ],
          "fact": "Öl auf Leinwand, 1899. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "deathbed",
          "text": [
            "Ein alter Mann liegt mit geschlossenem Mund und eingesunkenen Wangen auf dem Kissen, der Bart grau, der Grund hell. Das Bild nennt niemanden beim Namen.",
            "Es entsteht 1899 und hängt in der Österreichischen Galerie Belvedere in Wien. Mit dem Tod des Vaters und des Bruders Ernst im Jahr 1892 hat es, soweit bekannt, nichts unmittelbar zu tun."
          ],
          "fact": "Ölbild, 1899. Österreichische Galerie Belvedere, Wien."
        }
      ]
    },
    {
      "id": "klimtattersee",
      "place": "Attersee und die ersten Landschaften",
      "when": "1898–1902",
      "map": {
        "x": 44,
        "y": 90
      },
      "mapLabel": "Attersee",
      "intro": [
        "Ab etwa 1898 malt Klimt auch Landschaften, zuerst etwa «Nach dem Regen» und Obstgärten. 1899 entsteht der «Stille Weiher» am Egelsee bei Golling in Salzburg – nicht am Attersee.",
        "Ab 1900 verbringt er die Sommer mit der Familie Flöge am Attersee. Am 1. August 1901 schreibt er an Emilie Flöge auf einer Ansichtskarte, er sehne sich hinaus wie noch nie. Am See entstehen Wasserflächen, Ufer und Inseln – und 1902 der «Buchenwald I»."
      ],
      "works": [
        {
          "pid": "afterrain",
          "text": [
            "Eine Wiese nach dem Regen, hohe Gräser, verstreute Blumen, im Hintergrund Bäume unter einem hellen Himmel. Menschen kommen nicht vor.",
            "Das Bild entsteht 1898 und hängt in der Österreichischen Galerie Belvedere. Es gehört zu den ersten Landschaften, die Klimt ohne Auftrag malt."
          ],
          "fact": "Öl auf Leinwand, 1898. Österreichische Galerie Belvedere, Wien."
        },
        {
          "pid": "orchardeve",
          "text": [
            "Obstbäume stehen auf einer grünen Wiese, die Kronen dunkel gegen einen rötlichen Abendhimmel. Der Blick bleibt in der Fläche, ohne weiten Horizont.",
            "Das Bild entsteht 1898 und hängt im Leopold Museum in Wien."
          ],
          "fact": "Öl auf Leinwand, 1898. Leopold Museum, Wien."
        },
        {
          "pid": "pond",
          "text": [
            "Die Wasserfläche nimmt fast das ganze Bild ein: spiegelnde Bäume, ein Stück Ufer, der Himmel im Weiher. Der Ort ist der Egelsee bei Golling in Salzburg, nicht der Attersee.",
            "Das Bild entsteht 1899 und hängt im Leopold Museum in Wien."
          ],
          "fact": "Öl auf Leinwand, 1899. Leopold Museum, Wien."
        },
        {
          "pid": "swamp",
          "text": [
            "Dunkles Wasser, Baumstämme, das Ufer eines Sumpfes oder Weihers, der Himmel zwischen den Ästen. Die Fläche ist ruhig und ohne Figur.",
            "Das Bild entsteht um 1900, in denselben Jahren wie die ersten Landschaften am Attersee und am Egelsee."
          ],
          "fact": "Ölbild, um 1900. Sammlung nicht ermittelt."
        },
        {
          "pid": "blackbull",
          "text": [
            "Ein schwarzer Stier steht auf einer blumigen Wiese, den Körper dunkel gegen das Grün, den Kopf gesenkt. Hinter ihm öffnet sich ein heller Grund.",
            "Das Bild entsteht 1900 und hängt im Leopold Museum in Wien."
          ],
          "fact": "Öl auf Leinwand, 1900. Leopold Museum, Wien."
        },
        {
          "pid": "farmbirch",
          "text": [
            "Ein Bauernhaus steht hinter einer Reihe von Birken, das Dach dunkel, die Stämme hell, der Boden eine Wiese. Der Blick geht frontal auf Haus und Bäume.",
            "Das Bild entsteht 1900, im Jahr von Klimts erstem Sommer am Attersee mit der Familie Flöge."
          ],
          "fact": "Ölbild, 1900. Sammlung nicht ermittelt."
        },
        {
          "pid": "attersee",
          "text": [
            "Das Wasser des Attersees füllt die Fläche in kleinen, regelmässigen Wellen, vom hellen Türkis bis ins Grün. Ein Uferstreifen erscheint nur am Rand.",
            "Das Bild entsteht 1900, im ersten Sommer, den Klimt mit der Familie Flöge am See verbringt, zunächst in Seewalchen als Gast der Familie Paulick."
          ],
          "fact": "Öl auf Leinwand, 1900. Leopold Museum, Wien.",
          "quote": {
            "text": "Ich sehne mich hinaus wie noch nie.",
            "cite": "Ansichtskarte an Emilie Flöge, 1. August 1901"
          }
        },
        {
          "pid": "fruittrees",
          "text": [
            "Obstbäume stehen in einem Garten, die Kronen dicht, darunter ein Streifen gelber Blumen oder reifen Grases. Der Himmel bleibt ein schmaler Streifen.",
            "Das Bild entsteht 1901, in einem der frühen Sommer, die Klimt am Attersee verbringt."
          ],
          "fact": "Ölbild, 1901. Sammlung nicht ermittelt."
        },
        {
          "pid": "birchshore",
          "text": [
            "Zwei Birken stehen am Ufer, dahinter das Wasser und ein dichtes Ufergrün, vorn Blumen. Die Stämme teilen die Fläche wie ein Gitter.",
            "Das Bild entsteht 1901 am Seeufer – in dem Jahr, in dem Klimt an Emilie Flöge schreibt, er sehne sich hinaus wie noch nie."
          ],
          "fact": "Ölbild, 1901. Sammlung nicht ermittelt."
        },
        {
          "pid": "island",
          "text": [
            "Eine kleine Insel liegt im Attersee, die Bäume als dunkler Fleck im hellen Wasser. Die Wellen sind in regelmässige, fast ornamentalen Streifen gelegt.",
            "Das Bild entsteht um 1901 bis 1902. Es befindet sich in Privatsammlung."
          ],
          "fact": "Öl auf Leinwand, um 1901–1902. Privatsammlung."
        },
        {
          "pid": "birch",
          "text": [
            "Die Stämme eines Buchenwalds stehen dicht beieinander, der Boden leuchtet, der Horizont ist fast verschwunden. Das Bild heisst «Buchenwald I» und entsteht 1902.",
            "Es hängt in der Galerie Neue Meister in Dresden. Im selben Jahr malt Klimt in Wien den Beethovenfries; die Waldstücke gehören zu den Sommern am Attersee."
          ],
          "fact": "Öl auf Leinwand, 1902. Galerie Neue Meister, Dresden."
        }
      ]
    },
    {
      "id": "klimtfakult",
      "place": "Wien · Die Fakultätsbilder",
      "when": "1900–1901",
      "map": {
        "x": 174,
        "y": 58
      },
      "mapLabel": "Universität",
      "intro": [
        "1894 erhält Klimt den Auftrag für die Fakultätsbilder der Universität Wien: Philosophie, Medizin und Jurisprudenz, grosse Deckenbilder für den Festsaal. Die «Philosophie» wird 1900 in der Secession gezeigt und stösst auf scharfen Protest; 1901 folgt die «Medizin».",
        "Die Bilder werden von der Universität nicht abgenommen. Klimt kauft sie später zurück. 1945 verbrennen sie auf Schloss Immendorf in Niederösterreich, wo sie ausgelagert waren. Erhalten sind unter anderem historische Fotografien, Skizzen und der bekannte Ausschnitt der Hygieia aus der «Medizin»."
      ],
      "works": [
        {
          "pid": "jurysketch",
          "text": [
            "In wenigen, suchenden Linien steht eine hohe Figur, darunter kleinere Gestalten, rechts ein leeres Feld. Die Skizze sucht die Anordnung des späteren Fakultätsbildes.",
            "Sie entsteht 1901. Die ausgeführte «Jurisprudenz» wird erst 1903 bis 1907 fertig und verbrennt 1945 ebenfalls auf Schloss Immendorf."
          ],
          "fact": "Zeichnung, 1901. Sammlung nicht ermittelt."
        }
      ]
    },
    {
      "id": "klimtbeeth",
      "place": "Wien · Beethovenfries",
      "when": "1901–1902",
      "map": {
        "x": 186,
        "y": 102
      },
      "mapLabel": "Beethoven",
      "intro": [
        "1902 richtet die Secession die Beethoven-Ausstellung um Max Klingers Beethoven-Statue ein. Für drei Wände malt Klimt den Beethovenfries, nach Richard Wagners Deutung der Neunten Sinfonie: von der Sehnsucht nach dem Glück bis zu «Diesen Kuss der ganzen Welt».",
        "Im selben Umkreis entstehen «Judith I» von 1901, das Bildnis der Marie Henneberg und das stehende Bildnis Emilie Flöges von 1902, dazu Zeichnungen zum Fries."
      ],
      "works": [
        {
          "pid": "musik1901",
          "text": [
            "Eine Frau in einem langen roten Gewand steht im Profil, eine Leier in den Händen, vor einem hellen Grund. Die Fläche ist knapp und plakativ.",
            "Die Arbeit entsteht 1901, im Jahr, in dem die «Medizin» in der Secession gezeigt wird. Sie gehört zu Klimts wiederholter Auseinandersetzung mit dem Thema Musik."
          ],
          "fact": "1901. Sammlung nicht ermittelt."
        },
        {
          "pid": "judith",
          "text": [
            "Judith blickt aus dem Bild, den Kopf des Holofernes am unteren Rand, den Hals mit einem goldenen Schmuckband umgeben. Gold und Ornament fassen das Gesicht ein.",
            "Das Bild entsteht 1901 und hängt in der Österreichischen Galerie Belvedere in Wien. Der Titel lautet auch «Judith und Holofernes»."
          ],
          "fact": "Öl auf Leinwand, 1901. Österreichische Galerie Belvedere, Wien."
        },
        {
          "pid": "henneberg",
          "text": [
            "Marie Henneberg sitzt in einem hellblauen, weit fallenden Kleid, die Hände im Schoss, vor einem dunkleren Grund. Der Stoff ist in viele kleine Falten gelegt.",
            "Das Bildnis entsteht 1901 bis 1902 und hängt im Kunstmuseum Moritzburg in Halle."
          ],
          "fact": "Öl auf Leinwand, 1901–1902. Kunstmuseum Moritzburg, Halle."
        },
        {
          "pid": "emilie02",
          "text": [
            "Emilie Flöge steht in einem langen, ornamental gemusterten Reformkleid, den Körper schmal in der Hochfläche, den Blick fest aus dem Bild. Elf Jahre nach dem ersten Bildnis von 1891 ist der Stil ein anderer: Fläche, Muster, Standbild.",
            "Das Bild entsteht 1902 und hängt im Wien Museum."
          ],
          "fact": "Öl auf Leinwand, 1902. Wien Museum."
        },
        {
          "pid": "beethhead",
          "text": [
            "Ein Frauenkopf in wenigen Stiftlinien, das Haar gelöst, der Blick gesenkt. Die Studie gehört zu den Vorarbeiten für den Beethovenfries der Secession von 1902.",
            "Sie entsteht 1901 oder 1902, in den Monaten, in denen Klimt den Fries für die Beethoven-Ausstellung zeichnet und malt."
          ],
          "fact": "Zeichnung, 1901–1902. Studie zum Beethovenfries. Sammlung nicht ermittelt."
        },
        {
          "pid": "beethsehnsucht",
          "text": [
            "Zwei weibliche Gestalten schweben nacheinander, die Arme weit gestreckt, die Gewänder in langen Linien nach hinten gezogen. Die Zeichnung sucht die schwebenden Genien der linken Wand des Beethovenfrieses.",
            "Der Fries entsteht 1902 für die Beethoven-Ausstellung der Secession, nach Richard Wagners Deutung der Neunten Sinfonie. Die linke Wand trägt den Titel «Die Sehnsucht nach dem Glück»."
          ],
          "fact": "Zeichnung, 1901–1902, Studie zur linken Wand des Beethovenfrieses."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
