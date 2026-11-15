// v10.0 Caspar David Friedrich life journey, Part 1 (1774–1817).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes or death-bed imagery. Childhood losses handled gently.
(function () {
  var works = [
  {
    "id": "cffatherread",
    "title": "Der Vater, lesend",
    "artist": "Caspar David Friedrich",
    "year": "um 1801",
    "museum": "Kunsthalle Mannheim",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Bildnis des Vaters (ca. 1801-1802).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cffather",
    "title": "Bildnis des Vaters",
    "artist": "Caspar David Friedrich",
    "year": "1798",
    "museum": "Pommersches Landesmuseum, Greifswald",
    "source": "Wikimedia Commons: «Bildnis des Adolf Gottlieb Friedrich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfheiden",
    "title": "Mutter Heiden",
    "artist": "Caspar David Friedrich",
    "year": "um 1798",
    "museum": "Pommersches Landesmuseum, Greifswald",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Bildnis der Mutter Heiden (ca. 1798).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfself00",
    "title": "Selbstbildnis",
    "artist": "Caspar David Friedrich",
    "year": "um 1800",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Wikimedia Commons: «Caspardavidfriedrich self1.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfluisen",
    "title": "Die Luisenquelle in Frederiksdal",
    "artist": "Caspar David Friedrich",
    "year": "1797",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Die Luisenquelle in Frederiksdahl - Hamburger Kunsthalle, Kupferstichkabinett.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfemilia",
    "title": "Emilias Quelle bei Kopenhagen",
    "artist": "Caspar David Friedrich",
    "year": "1797",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Emilias Kilde bei Kopenhagen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfpavillon",
    "title": "Landschaft mit Pavillon",
    "artist": "Caspar David Friedrich",
    "year": "1797",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Landschaft mit Pavillon HKH.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfcopen",
    "title": "Landschaft bei Kopenhagen",
    "artist": "Caspar David Friedrich",
    "year": "1797",
    "museum": "Staatliche Kunsthalle Karlsruhe",
    "source": "Wikimedia Commons: «Friedrich, Caspar David-Landschaft bei Kopenhagen-Kunsthalle Karlsruhe.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfoak",
    "title": "Eiche",
    "artist": "Caspar David Friedrich",
    "year": "1797",
    "museum": "Kupferstichkabinett, Berlin",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Eiche.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfwasserburg",
    "title": "Mondscheinlandschaft mit Ruine einer Wasserburg",
    "artist": "Caspar David Friedrich",
    "year": "1797",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Wikimedia Commons: «Caspar David Friedrich, Landskab med vippebro og ruin i måneskin, , KKSgb6485, Statens Museum for Kunst.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfamselfall",
    "title": "Amselfall bei Rathen",
    "artist": "Caspar David Friedrich",
    "year": "1799",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «FCDd 0292 HH 1.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfkriebstein",
    "title": "Burg Kriebstein bei Waldheim",
    "artist": "Caspar David Friedrich",
    "year": "1799",
    "museum": "Pommersches Landesmuseum, Greifswald",
    "source": "Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Friedrich%2C_Casapr_David_-_Schlo%C3%9F_Kriebstein_bei_Waldheim_in_Sachsen_-_Pommersches_Landesmuseum.jpeg, Public domain (gemeinfrei)"
  },
  {
    "id": "cftharandt",
    "title": "Ruine, Kirche und Häuser in Tharandt",
    "artist": "Caspar David Friedrich",
    "year": "1799",
    "museum": "Kupferstichkabinett, Berlin",
    "source": "Wikimedia Commons: «FCDd 0149 Berlin Ruine, Kirche und Häuser in Tharandt bei Dresden.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "cfelbstr",
    "title": "Strasse an der Elbe mit verfallenem Torbogen",
    "artist": "Caspar David Friedrich",
    "year": "1799",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «FCDc039d 0201 HH 1.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cftrees",
    "title": "Baumgruppe",
    "artist": "Caspar David Friedrich",
    "year": "1799",
    "museum": "Kupferstichkabinett, Berlin",
    "source": "Wikimedia Commons: «FCDd 0133 r Berlin 850517 4252315.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "cfclouds",
    "title": "Wolkenstudie",
    "artist": "Caspar David Friedrich",
    "year": "1799",
    "museum": "Kupferstichkabinett, Berlin",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Wolkenstudie - Kupferstichkabinett Berlin SZ CD.Friedrich 79 recto.jpeg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfflatruegen",
    "title": "Flachlandschaft auf Rügen",
    "artist": "Caspar David Friedrich",
    "year": "1801",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «FCDd 0306 HH 1.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfziehbrunnen",
    "title": "Hütte mit Ziehbrunnen auf Rügen",
    "artist": "Caspar David Friedrich",
    "year": "1802",
    "museum": "Pommersches Landesmuseum, Greifswald",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Hütte mit Ziehbrunnen auf Rügen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfselfarm",
    "title": "Selbstbildnis mit aufgestütztem Arm",
    "artist": "Caspar David Friedrich",
    "year": "um 1802",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Selbstbildnis mit aufgestütztem Arm.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfarkonasun",
    "title": "Blick auf Arkona mit aufgehender Sonne",
    "artist": "Caspar David Friedrich",
    "year": "1803",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Blick auf Kap Arkona mit aufgehender Sonne (ca.1803).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfsteg",
    "title": "Steg am Fluss vor einer Baumgruppe",
    "artist": "Caspar David Friedrich",
    "year": "um 1800",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «FCDc107 MET DP-30766-001.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "cfruegenbay",
    "title": "Rügenlandschaft mit Meeresbucht",
    "artist": "Caspar David Friedrich",
    "year": "1802",
    "museum": "Klassik Stiftung Weimar",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Rügenlandschaft mit Meeresbucht (1802).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfpilgrim",
    "title": "Wallfahrt bei Sonnenaufgang",
    "artist": "Caspar David Friedrich",
    "year": "um 1805",
    "museum": "Klassik Stiftung Weimar",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Pilgrimage at Sunset KSW.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmadonna",
    "title": "Madonnenstatue im Gebirge",
    "artist": "Caspar David Friedrich",
    "year": "um 1804",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Statue of the Madonna in the Mountains - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfshepherd",
    "title": "Die Ostküste von Rügen mit Schäfer",
    "artist": "Caspar David Friedrich",
    "year": "um 1806",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Eastern Coast of Rügen Island with Shepherd.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfarkonamoon",
    "title": "Blick auf Arkona mit aufgehendem Mond",
    "artist": "Caspar David Friedrich",
    "year": "um 1805",
    "museum": "Albertina, Wien",
    "source": "Wikimedia Commons: «Caspar David Friedrich - View of Arkona with Rising Moon, c. 1805-1806 - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfdeadoak",
    "title": "Sommerlandschaft mit abgestorbener Eiche",
    "artist": "Caspar David Friedrich",
    "year": "um 1805",
    "museum": "Klassik Stiftung Weimar",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Sommerlandschaft mit abgestorbener Eiche.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cftetschen",
    "title": "Das Kreuz im Gebirge (Tetschener Altar)",
    "artist": "Caspar David Friedrich",
    "year": "1807–1808",
    "museum": "Staatliche Kunstsammlungen Dresden",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Das Kreuz im Gebirge.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfdolmen",
    "title": "Hünengrab im Schnee",
    "artist": "Caspar David Friedrich",
    "year": "1807",
    "museum": "Staatliche Kunstsammlungen Dresden",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Cairn in Snow - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfelbtal",
    "title": "Blick ins Elbtal",
    "artist": "Caspar David Friedrich",
    "year": "um 1807",
    "museum": "Staatliche Kunstsammlungen Dresden",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Ausblick in das Elbtal (1807).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cffog",
    "title": "Meeresstrand im Nebel",
    "artist": "Caspar David Friedrich",
    "year": "um 1807",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Meeresstrand im Nebel (ca.1807).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cffisher",
    "title": "Meeresstrand mit Fischer",
    "artist": "Caspar David Friedrich",
    "year": "um 1807",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Meeresstrand mit Fischer (ca.1807).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfbohemia",
    "title": "Böhmische Landschaft",
    "artist": "Caspar David Friedrich",
    "year": "um 1808",
    "museum": "Staatsgalerie Stuttgart",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Böhmische Landschaft, ca.1808.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmorningfog",
    "title": "Morgennebel im Gebirge",
    "artist": "Caspar David Friedrich",
    "year": "1808",
    "museum": "Thüringer Landesmuseum Heidecksburg, Rudolstadt",
    "source": "Wikimedia Commons: «Friedrich, Caspar David – Morgennebel im Gebirge.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmonk",
    "title": "Der Mönch am Meer",
    "artist": "Caspar David Friedrich",
    "year": "1808–1810",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Der Mönch am Meer - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfoakabbey",
    "title": "Abtei im Eichwald",
    "artist": "Caspar David Friedrich",
    "year": "1809–1810",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Abtei im Eichwald - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfrainbow",
    "title": "Gebirgslandschaft mit Regenbogen",
    "artist": "Caspar David Friedrich",
    "year": "um 1810",
    "museum": "Museum Folkwang, Essen",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Gebirgslandschaft mit Regenbogen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfself10",
    "title": "Selbstbildnis",
    "artist": "Caspar David Friedrich",
    "year": "um 1810",
    "museum": "Kupferstichkabinett, Berlin",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Self-portrait - ca. 1810 SMB.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfnewmoon",
    "title": "Neumond über dem Riesengebirge",
    "artist": "Caspar David Friedrich",
    "year": "um 1810",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Neumond über dem Riesengebirge.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfriesenmorning",
    "title": "Morgen im Riesengebirge",
    "artist": "Caspar David Friedrich",
    "year": "1810–1811",
    "museum": "Stiftung Preussische Schlösser und Gärten, Berlin",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Morgen im Riesengebirge.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfwarmbrunn",
    "title": "Blick von Warmbrunn auf die Kleine Sturmhaube",
    "artist": "Caspar David Friedrich",
    "year": "um 1810",
    "museum": "Puschkin-Museum, Moskau",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Blick von Warmbrunn auf die Kleine Sturmhaube.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfharz",
    "title": "Felsenschlucht im Harz",
    "artist": "Caspar David Friedrich",
    "year": "um 1811",
    "museum": "Pommersches Landesmuseum, Greifswald",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Felsenschlucht im Harz.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfwinterlon",
    "title": "Winterlandschaft",
    "artist": "Caspar David Friedrich",
    "year": "1811",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Winterlandschaft (London).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfwinterchurch",
    "title": "Winterlandschaft mit Kirche",
    "artist": "Caspar David Friedrich",
    "year": "1811",
    "museum": "Museum für Kunst und Kulturgeschichte, Dortmund",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Winterlandschaft mit Kirche (Dortmund).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfcrosswood",
    "title": "Kreuz im Wald",
    "artist": "Caspar David Friedrich",
    "year": "um 1812",
    "museum": "Staatsgalerie Stuttgart",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Kreuz im Wald.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfheroes",
    "title": "Grabmale alter Helden",
    "artist": "Caspar David Friedrich",
    "year": "1812",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Grabmale alter Helden.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfchasseur",
    "title": "Der Chasseur im Walde",
    "artist": "Caspar David Friedrich",
    "year": "1813–1814",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Der Chasseur im Walde - Caspar David Friedrich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfcrossbaltic",
    "title": "Kreuz an der Ostsee",
    "artist": "Caspar David Friedrich",
    "year": "1815",
    "museum": "Stiftung Preussische Schlösser und Gärten, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Kreuz an der Ostsee (Schloss Carlottenburg, Neuer Pavillon).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfharbour",
    "title": "Ansicht eines Hafens",
    "artist": "Caspar David Friedrich",
    "year": "1815–1816",
    "museum": "Stiftung Preussische Schlösser und Gärten, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Ansicht eines Hafens.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cftwomen",
    "title": "Zwei Männer am Meer",
    "artist": "Caspar David Friedrich",
    "year": "1817",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Zwei Männer am Meer (1817).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfafterstorm",
    "title": "Nach dem Sturm",
    "artist": "Caspar David Friedrich",
    "year": "1817",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Wikimedia Commons: «Caspar David Friedrich, Efter stormen, 1817, KMS8817, Statens Museum for Kunst.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfgreifsmoon",
    "title": "Greifswald im Mondschein",
    "artist": "Caspar David Friedrich",
    "year": "um 1817",
    "museum": "Nationalmuseum Oslo",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Greifswald in Moonlight - NG.M.00387 - National Museum of Art, Architecture and Design.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "friedrich",
  "name": "Friedrich",
  "title": "Caspar David Friedrichs Lebensweg",
  "life": "1774–1840",
  "part": "Teil 1 · 1774–1817",
  "subtitle": "Von Greifswald nach Dresden",
  "cover": "cfmonk",
  "intro": "Caspar David Friedrich wird am 5. September 1774 in Greifswald geboren. Dieser erste Teil folgt ihm von der Kindheit an der Ostsee und der Akademie in Kopenhagen über Dresden, die Wanderungen auf Rügen und im Harz, die Sepiazeichnungen und den Weimarer Preis 1805, den Tetschener Altar und den Mönch am Meer bis zu den Bildern der Befreiungskriege um 1817.",
  "ending": [
    "1817 malt Friedrich Zwei Männer am Meer und sieht Greifswald im Mondschein. Er ist Mitglied der Dresdner Akademie und bleibt in der Stadt, die sein Lebensmittelpunkt geworden ist.",
    "Im nächsten Teil folgen die Heirat mit Caroline 1818, die Kreidefelsen auf Rügen, der Wanderer über dem Nebelmeer, das Eismeer, der Schlaganfall 1835, sein Tod 1840 und die späte Wiederentdeckung."
  ],
  "epilogue": "Im nächsten Teil folgen die Heirat mit Caroline 1818, die Kreidefelsen auf Rügen, der Wanderer über dem Nebelmeer, das Eismeer, der Schlaganfall 1835, sein Tod 1840 und die späte Wiederentdeckung.",
  "map": {
    "viewBox": "0 0 200 200",
    "lands": [
      "M96,14 C118,6 136,18 132,36 C126,48 110,52 98,44 C86,32 84,20 96,14 Z",
      "M58,52 C90,42 140,46 162,72 C176,104 170,150 144,172 C108,186 64,170 52,130 C44,96 42,68 58,52 Z"
    ]
  },
  "stations": [
    {
      "id": "cfgreifswald",
      "place": "Greifswald",
      "when": "1774–1794",
      "map": {
        "x": 116,
        "y": 60
      },
      "mapLabel": "Greifswald",
      "intro": [
        "Caspar David Friedrich wird am 5. September 1774 in Greifswald geboren, als sechstes von zehn Kindern des Seifensieders und Lichtziehers Adolf Gottlieb Friedrich und der Sophie Dorothea. Die Mutter stirbt 1781, als er sieben Jahre alt ist.",
        "1787 stirbt auch sein Bruder Johann Christoffer, der ihn nach einem Unglück auf dem Eis zu retten versucht. Der Verlust bleibt ihm lange gegenwärtig. Als Jugendlicher nimmt er Zeichenunterricht bei Johann Gottfried Quistorp in Greifswald."
      ],
      "works": [
        {
          "pid": "cffatherread",
          "text": [
            "Ein alter Mann mit Brille sitzt am Tisch und liest in einem dicken Buch.",
            "Friedrich zeichnet seinen Vater Adolf Gottlieb in einem ovalen Bildfeld."
          ],
          "fact": "um 1801. Kunsthalle Mannheim."
        },
        {
          "pid": "cffather",
          "text": [
            "Der Vater trägt eine hohe Pelzmütze und einen Mantel mit Pelzkragen.",
            "Er blickt ruhig und ernst zur Seite."
          ],
          "fact": "1798. Pommersches Landesmuseum, Greifswald."
        },
        {
          "pid": "cfheiden",
          "text": [
            "Eine ältere Frau mit gefältelter Haube blickt aus dem Bild.",
            "Nach dem Tod der Mutter hat Mutter Heiden, die Haushälterin, die Kinder der Familie mit aufgezogen."
          ],
          "fact": "um 1798. Pommersches Landesmuseum, Greifswald."
        },
        {
          "pid": "cfself00",
          "text": [
            "Der junge Friedrich sieht uns mit grossen, wachen Augen an.",
            "Unten auf dem Blatt stehen Zeilen in seiner Handschrift."
          ],
          "fact": "um 1800. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "cfcopenhagen",
      "place": "Die Akademie in Kopenhagen",
      "when": "1794–1798",
      "map": {
        "x": 100,
        "y": 30
      },
      "mapLabel": "Kopenhagen",
      "intro": [
        "Von 1794 bis 1798 studiert Friedrich an der Königlichen Akademie in Kopenhagen, bei Jens Juel, Nicolai Abildgaard und Christian August Lorentzen. Er zeichnet in der Umgebung der Stadt, an Quellen, Pavillons und in Mondscheinlandschaften.",
        "Die dänische Akademie gilt damals als eine der besten im Norden. Hier lernt er das genaue Sehen der Natur und die ruhige, klare Bildordnung, die später seine Landschaften prägt."
      ],
      "works": [
        {
          "pid": "cfluisen",
          "text": [
            "Unter hohen Bäumen steht ein kleines Denkmal über einer Quelle.",
            "Zwei Männer und ein Hund ruhen davor im Schatten."
          ],
          "fact": "1797. Hamburger Kunsthalle."
        },
        {
          "pid": "cfemilia",
          "text": [
            "Ein Gedenkstein steht am Rand eines Gartens, hinter einem Zaun.",
            "Der Student Friedrich malt die Anlage in zarten Wasserfarben."
          ],
          "fact": "1797. Hamburger Kunsthalle."
        },
        {
          "pid": "cfpavillon",
          "text": [
            "Hinter einem Holzzaun und Steinen steht ein Pavillon mit Dachterrasse.",
            "Rechts biegt sich ein kahler Baum."
          ],
          "fact": "1797. Hamburger Kunsthalle."
        },
        {
          "pid": "cfcopen",
          "text": [
            "Von einem Hügel blickt man über Felder und Wälder bis zu den Türmen der Stadt.",
            "Ein knorriger Baum rahmt die Aussicht."
          ],
          "fact": "1797. Staatliche Kunsthalle Karlsruhe."
        },
        {
          "pid": "cfoak",
          "text": [
            "Mit dem Bleistift folgt Friedrich jedem Ast einer alten Eiche.",
            "Unten links steht das Jahr 1797."
          ],
          "fact": "1797. Kupferstichkabinett, Berlin."
        },
        {
          "pid": "cfwasserburg",
          "text": [
            "Der Mond scheint durch Wolken auf eine Zugbrücke und einen verfallenen Turm.",
            "Schon in Kopenhagen interessiert Friedrich das Licht der Nacht."
          ],
          "fact": "1797. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "cfdresden",
      "place": "Ankunft in Dresden",
      "when": "1798–1800",
      "map": {
        "x": 124,
        "y": 146
      },
      "mapLabel": "Dresden",
      "intro": [
        "Im Herbst 1798 lässt sich Friedrich in Dresden nieder. Die Stadt mit ihrer Gemäldegalerie und den Landschaften an der Elbe wird sein Zuhause für den Rest seines Lebens.",
        "1799 zeigt er zum ersten Mal Arbeiten in der Ausstellung der Dresdner Akademie. Er wandert in die Sächsische Schweiz und in die Täler um die Stadt und zeichnet Bäume, Felsen, Burgen und Wolken."
      ],
      "works": [
        {
          "pid": "cfamselfall",
          "text": [
            "Zwischen Felsblöcken und Tannen fällt ein Bach herab.",
            "Friedrich zeichnet die Sächsische Schweiz mit feinem Bleistift."
          ],
          "fact": "1799. Hamburger Kunsthalle."
        },
        {
          "pid": "cfkriebstein",
          "text": [
            "Hoch über dem Tal steht die Burg auf ihrem Felsen.",
            "Friedrich hält sie in zarten Linien und Lavierungen fest."
          ],
          "fact": "1799. Pommersches Landesmuseum, Greifswald."
        },
        {
          "pid": "cftharandt",
          "text": [
            "Links steht ein verfallener Burgturm, rechts eine Kirche mit spitzem Turm.",
            "Vieles ist nur mit leichten Strichen angedeutet."
          ],
          "fact": "1799. Kupferstichkabinett, Berlin."
        },
        {
          "pid": "cfelbstr",
          "text": [
            "Durch einen alten Steinbogen blickt man auf den Fluss und das andere Ufer.",
            "Fässer und Kisten liegen am Weg."
          ],
          "fact": "1799. Hamburger Kunsthalle."
        },
        {
          "pid": "cftrees",
          "text": [
            "Zwei hohe Laubbäume wachsen eng nebeneinander.",
            "Mit Feder und Pinsel gibt Friedrich jedem Blattbüschel Licht und Schatten."
          ],
          "fact": "1799. Kupferstichkabinett, Berlin."
        },
        {
          "pid": "cfclouds",
          "text": [
            "Auf einem Skizzenblatt stehen nur Wolken, in feinen Umrissen.",
            "Friedrich beobachtet den Himmel so genau wie Bäume und Felsen."
          ],
          "fact": "1799. Kupferstichkabinett, Berlin."
        }
      ]
    },
    {
      "id": "cfruegen",
      "place": "Rügen und Greifswald",
      "when": "1801–1803",
      "map": {
        "x": 142,
        "y": 48
      },
      "mapLabel": "Rügen",
      "intro": [
        "1801 reist Friedrich zum ersten Mal nach Rügen und bleibt lange in Greifswald. Er wandert über die Insel, zeichnet Küsten, Felder, Hütten und das Kap Arkona.",
        "Im Sommer 1802 ist er zurück in Dresden. Dort lernt er den Dichter Ludwig Tieck und den Maler Philipp Otto Runge kennen. Er arbeitet nun viel mit Feder, Pinsel und Sepia."
      ],
      "works": [
        {
          "pid": "cfflatruegen",
          "text": [
            "Über flache Felder und Hecken reicht der Blick bis zum Horizont.",
            "Ein feines Raster hilft Friedrich, die weite Fläche genau zu zeichnen."
          ],
          "fact": "1801. Hamburger Kunsthalle."
        },
        {
          "pid": "cfziehbrunnen",
          "text": [
            "Ein Hügel zieht sich schräg durch das Blatt, rechts steht eine Hütte mit Ziehbrunnen.",
            "Oben links notiert Friedrich das Datum."
          ],
          "fact": "1802. Pommersches Landesmuseum, Greifswald."
        },
        {
          "pid": "cfselfarm",
          "text": [
            "Friedrich stützt den Kopf in die Hand und hält einen Zeichenstift.",
            "Neben ihm öffnet sich ein Fenster mit Pflanzen."
          ],
          "fact": "um 1802. Hamburger Kunsthalle."
        },
        {
          "pid": "cfarkonasun",
          "text": [
            "Die Sonne taucht die Küste von Rügen in warmes Licht.",
            "Am Ufer liegt ein Boot, Bäume neigen sich im Wind."
          ],
          "fact": "1803. Hamburger Kunsthalle."
        },
        {
          "pid": "cfsteg",
          "text": [
            "Ein schmaler Steg führt über einen Fluss, dahinter stehen hohe Pappeln.",
            "Friedrich hat dieses Blatt selbst radiert."
          ],
          "fact": "um 1800. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "cfruegenbay",
          "text": [
            "Hinter Hügeln und Feldern glänzt eine weite Meeresbucht.",
            "Der Himmel nimmt mehr als die Hälfte des Bildes ein."
          ],
          "fact": "1802. Klassik Stiftung Weimar."
        }
      ]
    },
    {
      "id": "cfsepia",
      "place": "Sepia und der Weimarer Preis",
      "when": "1803–1806",
      "map": {
        "x": 136,
        "y": 136
      },
      "mapLabel": "Loschwitz",
      "intro": [
        "1803 nimmt Friedrich eine Sommerwohnung in Loschwitz bei Dresden und unternimmt eine erste Wanderung durch Nordböhmen. In grossen Sepiablättern entwickelt er weite, stille Landschaften mit Licht und Nebel.",
        "Am 25. August 1805 erhält er in Weimar die Hälfte des Preises der Kunstfreunde um Goethe, für zwei Sepiazeichnungen: eine Wallfahrt im Morgenlicht und Fischer am Meeresstrand. Sein Name wird damit über Dresden hinaus bekannt."
      ],
      "works": [
        {
          "pid": "cfpilgrim",
          "text": [
            "Eine lange Prozession zieht über einen Hügel zu einem Kreuz.",
            "Die Sepia lässt die Landschaft in hellem Morgendunst verschwinden."
          ],
          "fact": "um 1805. Klassik Stiftung Weimar."
        },
        {
          "pid": "cfmadonna",
          "text": [
            "Auf einem Felsen über Tannen steht eine kleine Madonnenstatue.",
            "Der Nebel trennt die Waldkulissen voneinander."
          ],
          "fact": "um 1804. Art Institute of Chicago."
        },
        {
          "pid": "cfshepherd",
          "text": [
            "Ein Schäfer steht mit seiner Herde über dem Meer.",
            "Der Himmel ist fast leer und hell."
          ],
          "fact": "um 1806. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "cfarkonamoon",
          "text": [
            "Der Mond geht über dem Meer auf, und die Küste liegt im Dunkeln.",
            "Fischernetze hängen am Ufer zum Trocknen."
          ],
          "fact": "um 1805. Albertina, Wien."
        },
        {
          "pid": "cfdeadoak",
          "text": [
            "Eine kahle Eiche steht mitten in einer sommerlichen Landschaft.",
            "Friedrich stellt das Leben und das Vergehen nebeneinander."
          ],
          "fact": "um 1805. Klassik Stiftung Weimar."
        }
      ]
    },
    {
      "id": "cftetschenst",
      "place": "Böhmen und der Tetschener Altar",
      "when": "1807–1808",
      "map": {
        "x": 134,
        "y": 172
      },
      "mapLabel": "Böhmen",
      "intro": [
        "1807 wandert Friedrich wieder durch Böhmen und beginnt, in Öl zu malen. Die neuen Bilder zeigen Nebel über dem Meer, verschneite Hügel und weite Täler mit wenigen Zeichen menschlichen Lebens.",
        "Zu Weihnachten 1808 zeigt er in seinem Atelier das Kreuz im Gebirge, später Tetschener Altar genannt. Der Kritiker Basilius von Ramdohr greift das Bild scharf an, Maler wie Gerhard von Kügelgen verteidigen es. Der Streit macht Friedrich weithin bekannt."
      ],
      "works": [
        {
          "pid": "cftetschen",
          "text": [
            "Auf einem Felsgipfel steht ein Kreuz zwischen Tannen, dahinter strahlt das Abendlicht.",
            "Friedrich malt eine Landschaft als Altarbild."
          ],
          "fact": "1807–1808. Staatliche Kunstsammlungen Dresden."
        },
        {
          "pid": "cfdolmen",
          "text": [
            "Drei kahle Eichen umstehen ein altes Steingrab im Schnee.",
            "Das Grab erinnert an eine ferne Vorzeit."
          ],
          "fact": "1807. Staatliche Kunstsammlungen Dresden."
        },
        {
          "pid": "cfelbtal",
          "text": [
            "Vorne stehen dunkle Tannen auf einem Hügel.",
            "Dahinter öffnet sich das Elbtal im Morgendunst."
          ],
          "fact": "um 1807. Staatliche Kunstsammlungen Dresden."
        },
        {
          "pid": "cffog",
          "text": [
            "Ein Anker liegt am Strand, ein Boot verschwindet fast im grauen Nebel.",
            "Es ist eines der ersten Ölbilder Friedrichs."
          ],
          "fact": "um 1807. Österreichische Galerie Belvedere, Wien."
        },
        {
          "pid": "cffisher",
          "text": [
            "Ein Fischer steht neben seinen Netzen am flachen Ufer.",
            "Der Himmel und das Meer verschwimmen im Dunst."
          ],
          "fact": "um 1807. Österreichische Galerie Belvedere, Wien."
        },
        {
          "pid": "cfbohemia",
          "text": [
            "Über einer dunklen Ebene erhebt sich ein einzelner blauer Berg.",
            "Der Himmel geht vom hellen Gelb ins klare Blau über."
          ],
          "fact": "um 1808. Staatsgalerie Stuttgart."
        },
        {
          "pid": "cfmorningfog",
          "text": [
            "Nebel steigt aus dem Tal und umhüllt einen Berggipfel.",
            "Oben auf dem Fels ist ein kleines Kreuz zu erkennen."
          ],
          "fact": "1808. Thüringer Landesmuseum Heidecksburg, Rudolstadt."
        }
      ]
    },
    {
      "id": "cfmonkst",
      "place": "Der Mönch am Meer",
      "when": "1809–1810",
      "map": {
        "x": 126,
        "y": 100
      },
      "mapLabel": "Berlin",
      "intro": [
        "Im Herbst 1810 zeigt Friedrich in der Berliner Akademieausstellung zwei Bilder als Paar: den Mönch am Meer und die Abtei im Eichwald. Auf Anregung des jungen Kronprinzen erwirbt das preussische Königshaus beide Bilder.",
        "Im selben Jahr wird Friedrich auswärtiges Mitglied der Berliner Akademie. Am 18. September 1810 besucht ihn Goethe in seinem Dresdner Atelier. Zu seinen Freunden zählen nun der Dichter Heinrich von Kleist und der Maler Georg Friedrich Kersting."
      ],
      "works": [
        {
          "pid": "cfmonk",
          "text": [
            "Eine kleine Gestalt steht am Strand vor dem dunklen Meer und einem riesigen Himmel.",
            "So leer hatte vorher kaum jemand eine Landschaft gemalt."
          ],
          "fact": "1808–1810. Alte Nationalgalerie, Berlin."
        },
        {
          "pid": "cfoakabbey",
          "text": [
            "Zwischen kahlen Eichen steht die Ruine einer gotischen Kirche im Abendlicht.",
            "Über ihr zeigt sich die schmale Sichel des Mondes."
          ],
          "fact": "1809–1810. Alte Nationalgalerie, Berlin."
        },
        {
          "pid": "cfrainbow",
          "text": [
            "Ein Regenbogen spannt sich über einen dunklen Berg.",
            "Vorne sitzt ein Wanderer auf einem Felsen."
          ],
          "fact": "um 1810. Museum Folkwang, Essen."
        },
        {
          "pid": "cfself10",
          "text": [
            "Mit Bart und Locken blickt Friedrich uns ernst und eindringlich an.",
            "Die feine Kreidezeichnung entsteht im Jahr seines Berliner Erfolgs."
          ],
          "fact": "um 1810. Kupferstichkabinett, Berlin."
        }
      ]
    },
    {
      "id": "cfmountains",
      "place": "Riesengebirge und Harz",
      "when": "1810–1811",
      "map": {
        "x": 166,
        "y": 136
      },
      "mapLabel": "Riesengebirge",
      "intro": [
        "Im Sommer 1810 wandert Friedrich mit Georg Friedrich Kersting durch das Riesengebirge. Die Skizzen von Gipfeln, Kämmen und Morgennebel nutzt er noch viele Jahre für seine Bilder.",
        "Im Juni 1811 folgt eine Wanderung durch den Harz mit dem Bildhauer Christian Gottlieb Kühn. Im Juli besucht er Goethe in Jena. In diesen Jahren entstehen auch stille Winterbilder mit Kirchen und Tannen im Schnee."
      ],
      "works": [
        {
          "pid": "cfnewmoon",
          "text": [
            "Über den blauen Kämmen des Gebirges steht die schmale Mondsichel.",
            "Das Blatt verbindet Aquarell und Bleistift."
          ],
          "fact": "um 1810. National Gallery of Art, Washington."
        },
        {
          "pid": "cfriesenmorning",
          "text": [
            "Über einem Meer von Bergkämmen ragt ein Fels mit einem Kreuz auf.",
            "Friedrich malt das Bild nach seiner Wanderung mit Kersting."
          ],
          "fact": "1810–1811. Stiftung Preussische Schlösser und Gärten, Berlin."
        },
        {
          "pid": "cfwarmbrunn",
          "text": [
            "Hinter grünen Wiesen und Wäldern steigen blaue Bergrücken auf.",
            "Der höchste Gipfel liegt im Licht."
          ],
          "fact": "um 1810. Puschkin-Museum, Moskau."
        },
        {
          "pid": "cfharz",
          "text": [
            "Steile Felswände und Bäume umschliessen eine enge Schlucht.",
            "Die Wanderung durch den Harz 1811 bringt Friedrich viele solcher Motive."
          ],
          "fact": "um 1811. Pommersches Landesmuseum, Greifswald."
        },
        {
          "pid": "cfwinterlon",
          "text": [
            "Im Schnee ruht ein Mann an einem Felsen vor jungen Tannen.",
            "Im Nebel dahinter erscheint eine gotische Kirche."
          ],
          "fact": "1811. National Gallery, London."
        },
        {
          "pid": "cfwinterchurch",
          "text": [
            "Tannen stehen im Schnee, dahinter ragt eine Kirche aus dem Dunst.",
            "Das Bild ist ein Gegenstück zur Londoner Winterlandschaft."
          ],
          "fact": "1811. Museum für Kunst und Kulturgeschichte, Dortmund."
        }
      ]
    },
    {
      "id": "cfliberation",
      "place": "Die Befreiungskriege",
      "when": "1812–1817",
      "map": {
        "x": 120,
        "y": 64
      },
      "mapLabel": "Greifswald",
      "intro": [
        "In den Jahren der Befreiungskriege gegen Napoleon, 1813 und 1814, malt Friedrich Bilder voller Erinnerung an alte Helden und Gräber. Sein Freund Kersting zieht als Freiwilliger in den Krieg. 1814 zeigt Friedrich Grabmale alter Helden und den Chasseur im Walde in Dresden.",
        "1816 kauft der preussische König die Ansicht eines Hafens und schenkt sie dem Kronprinzen. Im selben Jahr wird Friedrich Mitglied der Dresdner Akademie. 1817 malt er Zwei Männer am Meer, Nach dem Sturm und Greifswald im Mondschein."
      ],
      "works": [
        {
          "pid": "cfcrosswood",
          "text": [
            "Zwischen hohen Tannen steht ein Kreuz an einer Quelle.",
            "Durch die Stämme fällt helles Licht."
          ],
          "fact": "um 1812. Staatsgalerie Stuttgart."
        },
        {
          "pid": "cfheroes",
          "text": [
            "In einer Felsschlucht stehen alte Grabmale, eines ist einem Helden der Freiheit gewidmet.",
            "Friedrich malt das Bild während der Besetzung durch Napoleon."
          ],
          "fact": "1812. Hamburger Kunsthalle."
        },
        {
          "pid": "cfchasseur",
          "text": [
            "Ein einzelner französischer Soldat steht vor einem dichten, verschneiten Tannenwald.",
            "Auf einem Baumstumpf sitzt ein Rabe."
          ],
          "fact": "1813–1814. Privatsammlung."
        },
        {
          "pid": "cfcrossbaltic",
          "text": [
            "Auf Felsen am Meer steht ein hohes Kreuz vor dem Abendhimmel.",
            "Am Horizont sind Schiffe zu sehen."
          ],
          "fact": "1815. Stiftung Preussische Schlösser und Gärten, Berlin."
        },
        {
          "pid": "cfharbour",
          "text": [
            "Grosse Segelschiffe liegen still im Hafen, und der Himmel leuchtet gelb.",
            "Der preussische König kauft das Bild 1816 für den Kronprinzen."
          ],
          "fact": "1815–1816. Stiftung Preussische Schlösser und Gärten, Berlin."
        },
        {
          "pid": "cftwomen",
          "text": [
            "Zwei Männer stehen auf Steinen am Ufer und schauen auf das Meer im Dämmerlicht.",
            "Sie wenden uns den Rücken zu."
          ],
          "fact": "1817. Alte Nationalgalerie, Berlin."
        },
        {
          "pid": "cfafterstorm",
          "text": [
            "Ein Boot liegt schief zwischen Felsen am Ufer, sein Mast ragt schräg in den Himmel.",
            "Das Meer ist wieder ruhig."
          ],
          "fact": "1817. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "cfgreifsmoon",
          "text": [
            "Hinter Fischernetzen auf der Wiese zeichnen sich die Türme von Greifswald ab.",
            "Der Mond steht über der Heimatstadt des Malers."
          ],
          "fact": "um 1817. Nationalmuseum Oslo."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
