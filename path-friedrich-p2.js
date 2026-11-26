// v10.1 Caspar David Friedrich life journey, Part 2 (1818–1840), completing the path.
// Appends stations and works; rewrites the last Part-1 station (cfliberation) so it no longer leads into a following part.
// PD/CC0 scans only. Documented facts only; no quotations. No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "cfsailor",
    "title": "Auf dem Segler",
    "artist": "Caspar David Friedrich",
    "year": "1818–1819",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «On a Sailing Ship by Caspar David Friedrich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfsailorstudy",
    "title": "Studie zu Auf dem Segler",
    "artist": "Caspar David Friedrich",
    "year": "um 1818",
    "museum": "Nationalmuseum Oslo",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Studie zu \"Auf dem Segler\" (ca. 1818).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfsailstudies",
    "title": "Studien von Segelschiffen",
    "artist": "Caspar David Friedrich",
    "year": "um 1818",
    "museum": "Nationalmuseum Oslo",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Studien von Segelschiffen - NG.K&H.B.16068-006 - National Museum of Art, Architecture and Design.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfruegenwoman",
    "title": "Frau am Strand von Rügen",
    "artist": "Caspar David Friedrich",
    "year": "um 1818",
    "museum": "Kunst Museum Winterthur",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Frau am Strand von Rügen (ca.1818).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfnightharbour",
    "title": "Die Schwestern auf dem Söller am Hafen",
    "artist": "Caspar David Friedrich",
    "year": "1818–1820",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Caspar David Friedrich 034.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmooncoast",
    "title": "Meeresküste im Mondlicht",
    "artist": "Caspar David Friedrich",
    "year": "1818",
    "museum": "Musée du Louvre, Paris",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Meeresküste im Mondlicht, 1818.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfwindow",
    "title": "Frau am Fenster",
    "artist": "Caspar David Friedrich",
    "year": "1822",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Frau am Fenster - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfgreifmarket",
    "title": "Der Marktplatz von Greifswald mit der Familie Friedrich",
    "artist": "Caspar David Friedrich",
    "year": "1818",
    "museum": "Pommersches Landesmuseum, Greifswald",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Der Marktplatz von Greifswald mit der Familie Friedrich.png», Public domain (gemeinfrei)"
  },
  {
    "id": "cfgardenhouse",
    "title": "Gartenlaube",
    "artist": "Caspar David Friedrich",
    "year": "1818",
    "museum": "Bayerische Staatsgemäldesammlungen, München",
    "source": "Wikimedia Commons: «Caspar David Friedrich 069.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfrisingfog",
    "title": "Riesengebirgslandschaft mit aufsteigendem Nebel",
    "artist": "Caspar David Friedrich",
    "year": "um 1819",
    "museum": "Bayerische Staatsgemäldesammlungen, München",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Riesengebirge Landscape with Rising Fog - WGA8257.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmistbank",
    "title": "Nebelschwaden",
    "artist": "Caspar David Friedrich",
    "year": "um 1820",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Nebelschwaden (Hamburger Kunsthalle).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmorningmtn",
    "title": "Morgen im Gebirge",
    "artist": "Caspar David Friedrich",
    "year": "um 1820",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Morning in the Mountains.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfgreifharbour2",
    "title": "Der Greifswalder Hafen",
    "artist": "Caspar David Friedrich",
    "year": "1818–1820",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Der Greifswalder Hafen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfwindmills",
    "title": "Landschaft mit Windmühlen",
    "artist": "Caspar David Friedrich",
    "year": "1822–1823",
    "museum": "Stiftung Preussische Schlösser und Gärten, Berlin",
    "source": "Wikimedia Commons: «Landschaft mit Windmühlen (Caspar David Friedrich)-WUS03177.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfflatbodden",
    "title": "Flachlandschaft am Greifswalder Bodden",
    "artist": "Caspar David Friedrich",
    "year": "um 1830",
    "museum": "Museum Georg Schäfer, Schweinfurt",
    "source": "Wikimedia Commons: «Caspar David Friedrich 017.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfdresdeneve",
    "title": "Abend (Sonnenuntergang hinter der Dresdner Hofkirche)",
    "artist": "Caspar David Friedrich",
    "year": "1824",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Abend (Sonnenuntergang hinter der Dresdener Hofkirche), 1824.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfwatzmann",
    "title": "Der Watzmann",
    "artist": "Caspar David Friedrich",
    "year": "1824–1825",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - The Watzmann (1824-25).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfelberocks",
    "title": "Felsenlandschaft im Elbsandsteingebirge",
    "artist": "Caspar David Friedrich",
    "year": "1822–1823",
    "museum": "Österreichische Galerie Belvedere, Wien",
    "source": "Wikimedia Commons: «Rocky Landscape in the Elbe Sandstone Mountains - Caspar David Friedrich - Google Cultural Institute.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmeissen",
    "title": "Toreingang in Meissen",
    "artist": "Caspar David Friedrich",
    "year": "um 1827",
    "museum": "Staatliche Kunstsammlungen Dresden",
    "source": "Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Toreingang_in_Mei%C3%9Fen.jpg, Public domain (gemeinfrei)"
  },
  {
    "id": "cfhuttens",
    "title": "Huttens Grab",
    "artist": "Caspar David Friedrich",
    "year": "1823",
    "museum": "Klassik Stiftung Weimar",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Huttens Grab.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfearlysnow",
    "title": "Frühschnee",
    "artist": "Caspar David Friedrich",
    "year": "1827",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Frühschnee.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfice",
    "title": "Das Eismeer",
    "artist": "Caspar David Friedrich",
    "year": "1823–1824",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Eismeer.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmoonmen",
    "title": "Zwei Männer in Betrachtung des Mondes",
    "artist": "Caspar David Friedrich",
    "year": "1819–1820",
    "museum": "Staatliche Kunstsammlungen Dresden",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Two Men Contemplating the Moon - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmoonmenmet",
    "title": "Zwei Männer in Betrachtung des Mondes (spätere Fassung)",
    "artist": "Caspar David Friedrich",
    "year": "um 1825–1830",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Friedrich - Two Men Contemplating the Moon.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmooncouple",
    "title": "Mann und Frau in Betrachtung des Mondes",
    "artist": "Caspar David Friedrich",
    "year": "um 1824",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Mann und Frau in Betrachtung des Mondes (ca. 1824).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmoongrise",
    "title": "Mondaufgang am Meer",
    "artist": "Caspar David Friedrich",
    "year": "1822",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Mondaufgang am Meer (1822).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmoonherm",
    "title": "Mondaufgang über dem Meer",
    "artist": "Caspar David Friedrich",
    "year": "1821",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Mondaufgang über dem Meer.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cflonetree",
    "title": "Der einsame Baum",
    "artist": "Caspar David Friedrich",
    "year": "1822",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Der einsame Baum - Caspar David Friedrich - Alte Nationalgalerie W.S. 52.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfcrows",
    "title": "Der Rabenbaum",
    "artist": "Caspar David Friedrich",
    "year": "um 1822",
    "museum": "Musée du Louvre, Paris",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Rabenbaum (ca. 1822).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfstages",
    "title": "Die Lebensstufen",
    "artist": "Caspar David Friedrich",
    "year": "um 1834",
    "museum": "Museum der bildenden Künste, Leipzig",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Die Lebensstufen (ca. 1834).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfwindowwood",
    "title": "Waldinneres bei Mondschein",
    "artist": "Caspar David Friedrich",
    "year": "um 1823–1830",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Waldinneres bei Mondschein.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfriesenberlin",
    "title": "Riesengebirge",
    "artist": "Caspar David Friedrich",
    "year": "um 1830–1835",
    "museum": "Alte Nationalgalerie, Berlin",
    "source": "Wikimedia Commons: «Friedrich, Caspar David - Riesengebirge - Nationalgalerie Berlin.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfriesenmem",
    "title": "Erinnerung an das Riesengebirge",
    "artist": "Caspar David Friedrich",
    "year": "um 1835",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Caspar David Friedrich 016.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfriesenoslo",
    "title": "Berglandschaft im Riesengebirge",
    "artist": "Caspar David Friedrich",
    "year": "um 1835",
    "museum": "Nationalmuseum Oslo",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Mountain in Riesengebirge - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfriesensun",
    "title": "Sonnenstrahlen im Riesengebirge",
    "artist": "Caspar David Friedrich",
    "year": "um 1835",
    "museum": "Saint Louis Art Museum",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Sunburst in the Riesengebirge - 1-2019 - Saint Louis Art Museum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfriesenpeaks",
    "title": "Berggipfel mit ziehenden Wolken",
    "artist": "Caspar David Friedrich",
    "year": "um 1835",
    "museum": "Kimbell Art Museum, Fort Worth",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Berggipfel mit ziehenden Wolken (1835).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfrosenberg",
    "title": "Landschaft mit dem Rosenberg im Böhmischen Gebirge",
    "artist": "Caspar David Friedrich",
    "year": "um 1835",
    "museum": "Städel Museum, Frankfurt",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Landscape with the Rosenberg in the Bohemian Mountains - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfeldenamtn",
    "title": "Ruine Eldena im Riesengebirge",
    "artist": "Caspar David Friedrich",
    "year": "um 1830–1834",
    "museum": "Pommersches Landesmuseum, Greifswald",
    "source": "Wikimedia Commons: «Klosterruine Eldena und Riesengebirge (C D Friedrich).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfbohemia28",
    "title": "Böhmische Landschaft",
    "artist": "Caspar David Friedrich",
    "year": "1828",
    "museum": "Pommersches Landesmuseum, Greifswald",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Böhmische Landschaft (1828).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfmoonshore",
    "title": "Küste bei Mondschein",
    "artist": "Caspar David Friedrich",
    "year": "1835–1836",
    "museum": "Hamburger Kunsthalle",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Küste bei Mondschein 2.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfowlgothic",
    "title": "Eule in einer gotischen Fensternische",
    "artist": "Caspar David Friedrich",
    "year": "um 1836",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Eule in der gotischen Fensternische (ca.1836).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfneurathen",
    "title": "Das Neurathener Felsentor",
    "artist": "Caspar David Friedrich",
    "year": "um 1837",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Das Neurathener Felsentor.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfschmiede",
    "title": "Blick auf den Schmiedeberger Kamm",
    "artist": "Caspar David Friedrich",
    "year": "um 1837",
    "museum": "Puschkin-Museum, Moskau",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Blick auf den Schmiedebergerkamm.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfeldenaeast",
    "title": "Ruine Eldena bei Greifswald von Osten",
    "artist": "Caspar David Friedrich",
    "year": "1836",
    "museum": "Kupferstichkabinett, Dresden",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Ruine der Abtei Eldena bei Greifswald von Osten (1836).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfteplitz",
    "title": "Berglandschaft bei Teplitz mit dem Milleschauer",
    "artist": "Caspar David Friedrich",
    "year": "1835",
    "museum": "Germanisches Nationalmuseum, Nürnberg",
    "source": "Wikimedia Commons: «FCDd 0969 Nuernberg.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfgraves",
    "title": "Landschaft mit Gräbern",
    "artist": "Caspar David Friedrich",
    "year": "um 1835–1837",
    "museum": "Albertina, Wien",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Landscape with Graves, c. 1835-1837 - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cflonelybank",
    "title": "Mondaufgang über einem einsamen Ufer",
    "artist": "Caspar David Friedrich",
    "year": "um 1837",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Mondaufgang über einsamem Ufer.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfwalkdusk",
    "title": "Spaziergang in der Abenddämmerung",
    "artist": "Caspar David Friedrich",
    "year": "um 1830–1835",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Caspar David Friedrich - A Walk at Dusk - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfsunsetlate",
    "title": "Sonnenuntergang (Brüder)",
    "artist": "Caspar David Friedrich",
    "year": "um 1830–1835",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Sunset by Caspar David Friedrich.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfeveningstar",
    "title": "Der Abendstern",
    "artist": "Caspar David Friedrich",
    "year": "um 1830",
    "museum": "Freies Deutsches Hochstift, Frankfurt",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Der Abendstern (ca.1830).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfgrossegehege",
    "title": "Das Grosse Gehege bei Dresden",
    "artist": "Caspar David Friedrich",
    "year": "1832",
    "museum": "Staatliche Kunstsammlungen Dresden",
    "source": "Wikimedia Commons: «Caspar David Friedrich - The Grosse Gehege near Dresden - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfeastermorn",
    "title": "Ostermorgen",
    "artist": "Caspar David Friedrich",
    "year": "um 1828–1835",
    "museum": "Museo Thyssen-Bornemisza, Madrid",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Ostermorgen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfeveningbaltic",
    "title": "Abend am Ostseestrand",
    "artist": "Caspar David Friedrich",
    "year": "um 1831",
    "museum": "Staatliche Kunstsammlungen Dresden",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Abend am Ostseestrand.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "cfharboureve",
    "title": "Schiffe im Hafen am Abend",
    "artist": "Caspar David Friedrich",
    "year": "um 1828",
    "museum": "Staatliche Kunstsammlungen Dresden",
    "source": "Wikimedia Commons: «Caspar David Friedrich - Schiffe im Hafen am Abend.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'friedrich'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1774–1840";
  path.subtitle = "Von Greifswald nach Dresden";
  path.intro = "Caspar David Friedrich wird am 5. September 1774 in Greifswald geboren. Der Weg folgt ihm von der Kindheit an der Ostsee und der Akademie in Kopenhagen nach Dresden, zu Rügen, dem Tetschener Altar und dem Mönch am Meer. Danach geht es weiter mit der Heirat mit Caroline 1818, den Kindern, dem Wanderer, dem Eismeer, den Mondbetrachtern und dem Riesengebirge bis zu den stillen späten Jahren und seinem Tod 1840 in Dresden.";
  path.ending = [
  "Caspar David Friedrich stirbt am 7. Mai 1840 in Dresden und wird auf dem Trinitatisfriedhof begraben. Nach seinem Tod gerät er für Jahrzehnte fast in Vergessenheit.",
  "1906 zeigt die Jahrhundertausstellung deutscher Kunst in der Berliner Nationalgalerie viele seiner Bilder, und Friedrich wird neu entdeckt. Heute gehören der Mönch am Meer, der Wanderer über dem Nebelmeer, die Kreidefelsen auf Rügen und das Eismeer zu den bekanntesten Bildern der Romantik. Hier endet der Weg."
];
  path.epilogue = "Von der Ostseeküste bei Greifswald bis zu den stillen Mondbildern in Dresden: Friedrich hat Landschaften gemalt, in denen Menschen schauen, warten und staunen.";
  var sl = (path.stations || []).filter(function (s) { return s.id === 'cfliberation'; })[0];
  if (sl) sl.intro = [
  "In den Jahren der Befreiungskriege gegen Napoleon, 1813 und 1814, malt Friedrich Bilder voller Erinnerung an alte Helden und Gräber. Sein Freund Kersting zieht als Freiwilliger in den Krieg. 1814 zeigt Friedrich Grabmale alter Helden und den Chasseur im Walde in Dresden.",
  "1816 kauft der preussische König die Ansicht eines Hafens und schenkt sie dem Kronprinzen. Im selben Jahr wird Friedrich Mitglied der Dresdner Akademie. 1817 malt er Zwei Männer am Meer, Nach dem Sturm und Greifswald im Mondschein, ein stiller Blick auf seine Heimatstadt."
];
  var stations = [
  {
    "id": "cfnuptials",
    "place": "Heirat und Reise nach Rügen",
    "when": "1818",
    "map": {
      "x": 142,
      "y": 48
    },
    "mapLabel": "Rügen",
    "intro": [
      "Am 21. Januar 1818 heiratet Friedrich in der Dresdner Kreuzkirche Christiane Caroline Bommer. Er ist 43 Jahre alt, sie 25. Im Sommer reisen die beiden über Neubrandenburg und Greifswald nach Rügen und besuchen seine Familie.",
      "Aus diesen Monaten stammen Bilder vom Meer, von Segeln und von Paaren, die gemeinsam in die Weite schauen. In der Galerie findest du auch die Kreidefelsen auf Rügen, die um diese Zeit entstehen."
    ],
    "works": [
      {
        "pid": "cfsailor",
        "text": [
          "Ein Mann und eine Frau sitzen Hand in Hand am Bug eines Segelschiffs und schauen auf eine Stadt mit Türmen im Dunst.",
          "Das Bild entsteht nach der Hochzeit und wird oft mit Friedrich und Caroline verbunden."
        ],
        "fact": "1818–1819. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "cfsailorstudy",
        "text": [
          "Mit feinen Bleistiftlinien zeichnet Friedrich den Bug eines Schiffes mit Segel und Tauwerk.",
          "Solche Studien hat er später für das Gemälde Auf dem Segler genutzt."
        ],
        "fact": "um 1818. Nationalmuseum Oslo."
      },
      {
        "pid": "cfsailstudies",
        "text": [
          "Auf einem Blatt verteilt stehen kleine Segelschiffe, von vorn, von der Seite und von hinten.",
          "Friedrich zeichnet sie genau, damit er sie später im Atelier malen kann."
        ],
        "fact": "um 1818. Nationalmuseum Oslo."
      },
      {
        "pid": "cfruegenwoman",
        "text": [
          "Eine Frau sitzt am flachen Strand und schaut auf das Meer mit Segelbooten.",
          "In der Ferne leuchten die weissen Kreideküsten von Rügen."
        ],
        "fact": "um 1818. Kunst Museum Winterthur."
      },
      {
        "pid": "cfnightharbour",
        "text": [
          "Zwei Frauen stehen nachts auf einem Balkon über einem Hafen.",
          "Hinter den Masten der Schiffe ragen die Spitzen gotischer Kirchtürme in den Himmel."
        ],
        "fact": "1818–1820. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "cfmooncoast",
        "text": [
          "Der Mond scheint durch dunkle Wolken auf einen stillen Strand.",
          "Stangen und Netze der Fischer stehen im flachen Wasser."
        ],
        "fact": "1818. Musée du Louvre, Paris."
      }
    ]
  },
  {
    "id": "cfchildren",
    "place": "Familie an der Elbe",
    "when": "1818–1824",
    "map": {
      "x": 98,
      "y": 150,
      "labelDy": -12
    },
    "mapLabel": "An der Elbe",
    "intro": [
      "1820 zieht die Familie in eine grössere Wohnung an der Elbe, Haus Nummer 33, mit Blick auf den Fluss. Am 30. August 1819 wird die Tochter Emma geboren, am 2. Dezember 1823 die Tochter Agnes und am 23. Dezember 1824 der Sohn Gustav Adolf, der später selbst Maler wird.",
      "Caroline erscheint in mehreren Bildern, etwa am Fenster des Ateliers. Auch Greifswald bleibt nah: Ein grosses Blatt zeigt den Marktplatz mit der Familie Friedrich."
    ],
    "works": [
      {
        "pid": "cfwindow",
        "text": [
          "Caroline steht im kahlen Atelier am offenen Fenster und schaut hinaus auf die Elbe.",
          "Draussen sieht man nur Pappeln und den Mast eines Schiffes."
        ],
        "fact": "1822. Alte Nationalgalerie, Berlin."
      },
      {
        "pid": "cfgreifmarket",
        "text": [
          "Auf dem hellen Marktplatz von Greifswald stehen Menschen in kleinen Gruppen, ein Wagen fährt vorbei.",
          "Das grosse Aquarell zeigt das Rathaus, Giebelhäuser und Kirchtürme und auch Mitglieder der Familie Friedrich."
        ],
        "fact": "1818. Pommersches Landesmuseum, Greifswald."
      },
      {
        "pid": "cfgardenhouse",
        "text": [
          "Eine Frau sitzt in einer schattigen Laube, ein Mann steht neben ihr.",
          "Durch die Öffnung im Laub sieht man eine gotische Kirche im hellen Licht."
        ],
        "fact": "1818. Bayerische Staatsgemäldesammlungen, München."
      }
    ]
  },
  {
    "id": "cfwanderer",
    "place": "Über dem Nebel",
    "when": "um 1818–1822",
    "map": {
      "x": 134,
      "y": 172
    },
    "mapLabel": "Elbsandstein",
    "intro": [
      "Um 1818 malt Friedrich den Wanderer über dem Nebelmeer, einen Mann in Rückenansicht auf einem Felsen über einem Meer aus Nebel. Das Bild hängt heute in der Hamburger Kunsthalle, und du findest es in der Galerie dieser App.",
      "Die Felsen im Bild erinnern an das Elbsandsteingebirge südlich von Dresden. In diesen Jahren malt er immer wieder Nebel, Wolken und Berge, die im Morgenlicht auftauchen."
    ],
    "works": [
      {
        "pid": "cfrisingfog",
        "text": [
          "Bergrücken staffeln sich hintereinander, aus den Tälern steigt weisser Nebel auf.",
          "Vorn steht ein kleiner kahler Baum am Hang."
        ],
        "fact": "um 1819. Bayerische Staatsgemäldesammlungen, München."
      },
      {
        "pid": "cfmistbank",
        "text": [
          "Eine flache Landschaft liegt unter einem bewegten Himmel, Nebel zieht über die Felder.",
          "In der Mitte steht eine einsame Hütte mit Strohdach."
        ],
        "fact": "um 1820. Hamburger Kunsthalle."
      },
      {
        "pid": "cfmorningmtn",
        "text": [
          "Felsige Hänge öffnen sich zu einem weiten Tal voller Morgendunst.",
          "Die fernen Berge sind nur noch blasse blaue Linien."
        ],
        "fact": "um 1820. Eremitage, Sankt Petersburg."
      }
    ]
  },
  {
    "id": "cfgreiftrips",
    "place": "Heimat an der Ostsee",
    "when": "1818–1830",
    "map": {
      "x": 94,
      "y": 74
    },
    "mapLabel": "Bodden",
    "intro": [
      "Auch von Dresden aus bleibt Greifswald seine Heimat. Auf der Hochzeitsreise 1818 besucht er die Stadt, und 1826 erholt er sich noch einmal auf Rügen.",
      "Aus Skizzen und Erinnerungen malt er den Hafen, die Wiesen vor der Stadt, Windmühlen und das flache Land am Greifswalder Bodden. Am Horizont stehen oft die Kirchtürme von Greifswald."
    ],
    "works": [
      {
        "pid": "cfgreifharbour2",
        "text": [
          "Im Abendlicht liegt ein grosses Segelschiff im Hafen von Greifswald.",
          "Am Ufer stehen Menschen und Fässer, der Himmel glüht gelb und rosa."
        ],
        "fact": "1818–1820. Alte Nationalgalerie, Berlin."
      },
      {
        "pid": "cfwindmills",
        "text": [
          "Hinter einem stillen Wasser stehen Windmühlen und ein weisses Haus am Ufer.",
          "Ein Kahn gleitet ruhig über die Fläche."
        ],
        "fact": "1822–1823. Stiftung Preussische Schlösser und Gärten, Berlin."
      },
      {
        "pid": "cfflatbodden",
        "text": [
          "Am flachen Ufer des Boddens stehen ein paar kleine Gestalten, draussen liegt ein Segelboot.",
          "Über allem wölbt sich ein grosser, wolkiger Himmel."
        ],
        "fact": "um 1830. Museum Georg Schäfer, Schweinfurt."
      }
    ]
  },
  {
    "id": "cfprofessor",
    "place": "Professor in Dresden",
    "when": "1824–1829",
    "map": {
      "x": 98,
      "y": 150
    },
    "mapLabel": "Akademie",
    "intro": [
      "Seit 1823 wohnt der norwegische Maler Johan Christian Dahl im selben Haus an der Elbe, und die beiden werden Freunde. Am 17. Januar 1824 ernennt die Dresdner Akademie Friedrich zum ausserordentlichen Professor, ohne Lehrverpflichtung.",
      "Den freien Lehrstuhl für Landschaftsmalerei bekommt er nicht. Er malt weiter: Dresden im Abendlicht, Felsen im Elbsandsteingebirge, ein Grabmal für Ulrich von Hutten, den Watzmann nach dem Aquarell eines Schülers und den ersten Schnee im Wald."
    ],
    "works": [
      {
        "pid": "cfdresdeneve",
        "text": [
          "Hinter den Türmen von Hofkirche und Schloss geht die Sonne unter, rosa Wolken stehen am Himmel.",
          "Unten auf dem kleinen Bild hat Friedrich Abend und Oktober 1824 eingetragen."
        ],
        "fact": "1824. Privatsammlung."
      },
      {
        "pid": "cfwatzmann",
        "text": [
          "Hinter grünen Hängen und Felsen steigt der schneebedeckte Watzmann auf.",
          "Friedrich war nie in den Alpen und malte den Berg nach dem Aquarell seines Schülers August Heinrich."
        ],
        "fact": "1824–1825. Alte Nationalgalerie, Berlin."
      },
      {
        "pid": "cfelberocks",
        "text": [
          "Schroffe Felstürme ragen aus dem Dunst, Tannen wachsen in den Spalten.",
          "Ein schmaler Steg führt über eine Schlucht."
        ],
        "fact": "1822–1823. Österreichische Galerie Belvedere, Wien."
      },
      {
        "pid": "cfmeissen",
        "text": [
          "Durch einen dunklen, gewölbten Gang fällt Licht auf Stufen und Steine.",
          "Hinten öffnet sich ein kleines Fenster ins Helle."
        ],
        "fact": "um 1827. Staatliche Kunstsammlungen Dresden."
      },
      {
        "pid": "cfhuttens",
        "text": [
          "In einer verfallenen gotischen Kirche steht ein Mann vor einem steinernen Grabmal, durch die hohen Fenster leuchtet das Abendlicht.",
          "Das Bild erinnert an den Dichter Ulrich von Hutten, der 300 Jahre zuvor gestorben war."
        ],
        "fact": "1823. Klassik Stiftung Weimar."
      },
      {
        "pid": "cfearlysnow",
        "text": [
          "Ein heller Weg führt in einen dunklen Fichtenwald, auf den Zweigen liegt der erste Schnee.",
          "Junge Tannen stehen wie kleine Wächter am Rand."
        ],
        "fact": "1827. Hamburger Kunsthalle."
      }
    ]
  },
  {
    "id": "cfice",
    "place": "Das Eismeer",
    "when": "1823–1824",
    "map": {
      "x": 30,
      "y": 96
    },
    "mapLabel": "Eismeer",
    "intro": [
      "In seinem Atelier in Dresden malt Friedrich 1823 und 1824 das Eismeer: Schollen türmen sich zu einem spitzen Berg, darunter liegt das Heck eines zerdrückten Schiffes. Für die Eisplatten hat er Eisschollen auf der Elbe gezeichnet.",
      "1826 wird das Bild in Hamburg gezeigt, aber es findet keinen Käufer. Erst 1905 erwirbt es die Hamburger Kunsthalle. Auch in anderen Bildern dieser Jahre ragen kalte, scharfe Formen aus dem Meer."
    ],
    "works": [
      {
        "pid": "cfice",
        "text": [
          "Eisschollen schieben sich zu einem spitzen Berg übereinander.",
          "Rechts darunter ist das Heck eines Schiffes zu erkennen, das vom Eis eingeschlossen wurde."
        ],
        "fact": "1823–1824. Hamburger Kunsthalle."
      }
    ]
  },
  {
    "id": "cfmoonlife",
    "place": "Mondbetrachter und Lebensstufen",
    "when": "1819–1835",
    "map": {
      "x": 66,
      "y": 124,
      "labelDy": -12
    },
    "mapLabel": "Elbufer",
    "intro": [
      "Um 1819 und 1820 malt Friedrich zwei Männer, die unter einem kahlen Baum den aufgehenden Mond betrachten. Später folgen weitere Fassungen, eine davon mit einem Mann und einer Frau. Oft stehen seine Figuren mit dem Rücken zu uns und schauen mit uns in das Bild hinein.",
      "1822 entstehen als Paar Der einsame Baum und Mondaufgang am Meer. Um 1834 malt er die Lebensstufen: fünf Menschen am Ufer und fünf Schiffe auf dem Wasser, Kinder, Erwachsene und ein alter Mann."
    ],
    "works": [
      {
        "pid": "cfmoonmen",
        "text": [
          "Zwei Männer in Mänteln stehen am Waldrand unter einer entwurzelten Eiche und schauen zum Mond.",
          "Der eine stützt sich auf die Schulter des anderen."
        ],
        "fact": "1819–1820. Staatliche Kunstsammlungen Dresden."
      },
      {
        "pid": "cfmoonmenmet",
        "text": [
          "Einige Jahre später malt Friedrich das Motiv noch einmal.",
          "Wieder stehen zwei Männer unter dem knorrigen Baum, und die schmale Mondsichel leuchtet zwischen den Ästen."
        ],
        "fact": "um 1825–1830. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "cfmooncouple",
        "text": [
          "Ein Mann und eine Frau stehen dicht beieinander auf einem Waldweg und schauen zur Mondsichel.",
          "Die Frau legt ihre Hand auf die Schulter des Mannes."
        ],
        "fact": "um 1824. Alte Nationalgalerie, Berlin."
      },
      {
        "pid": "cfmoongrise",
        "text": [
          "Drei Menschen sitzen auf einem grossen Stein am Ufer und schauen auf das Meer, über dem der Mond aufgeht.",
          "Zwei Segelschiffe kehren in der Dämmerung heim."
        ],
        "fact": "1822. Alte Nationalgalerie, Berlin."
      },
      {
        "pid": "cfmoonherm",
        "text": [
          "Am Ufer stehen zwei Gestalten und schauen auf das Wasser, wo der Mond hinter Wolken hervorkommt.",
          "Der Himmel leuchtet in goldenem Licht."
        ],
        "fact": "1821. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "cflonetree",
        "text": [
          "Eine alte Eiche steht allein in einer weiten Ebene vor blauen Bergen.",
          "Unter ihr lehnt ein Hirte mit seiner Herde."
        ],
        "fact": "1822. Alte Nationalgalerie, Berlin."
      },
      {
        "pid": "cfcrows",
        "text": [
          "Eine knorrige, fast kahle Eiche wächst auf einem Hügel im Abendlicht.",
          "Krähen kreisen um ihre verdrehten Äste."
        ],
        "fact": "um 1822. Musée du Louvre, Paris."
      },
      {
        "pid": "cfstages",
        "text": [
          "Am Ufer stehen ein alter Mann, ein jüngerer Mann, eine Frau und zwei Kinder mit einer kleinen Fahne.",
          "Draussen auf dem Meer fahren fünf Schiffe, nah und fern."
        ],
        "fact": "um 1834. Museum der bildenden Künste, Leipzig."
      },
      {
        "pid": "cfwindowwood",
        "text": [
          "Hohe, schlanke Bäume stehen im Mondlicht.",
          "Unten am Boden sitzen kleine Gestalten an einem Feuer."
        ],
        "fact": "um 1823–1830. Alte Nationalgalerie, Berlin."
      }
    ]
  },
  {
    "id": "cfriesenlate",
    "place": "Berge aus der Erinnerung",
    "when": "um 1828–1835",
    "map": {
      "x": 166,
      "y": 136,
      "labelDy": -12
    },
    "mapLabel": "Riesengebirge",
    "intro": [
      "Im Riesengebirge ist Friedrich 1810 gewandert. Viele Jahre später malt er die Bergketten noch immer, aus Skizzen und aus der Erinnerung, in weichem Licht und mit Wolken über den Kämmen.",
      "Er verbindet manchmal Orte, die weit voneinander entfernt sind: Die Klosterruine Eldena bei Greifswald steht in einem Bild vor den Bergen des Riesengebirges. Auch die Hügel Böhmens hält er in Aquarellen fest."
    ],
    "works": [
      {
        "pid": "cfriesenberlin",
        "text": [
          "Dunkle Hügel liegen im Vordergrund, dahinter verlieren sich die Bergketten im warmen Abendlicht.",
          "Der Himmel nimmt mehr als die Hälfte des Bildes ein."
        ],
        "fact": "um 1830–1835. Alte Nationalgalerie, Berlin."
      },
      {
        "pid": "cfriesenmem",
        "text": [
          "Vorn liegen Steine und ein Bach, dahinter steigen rosige, verschneite Berge auf.",
          "Das Bild entsteht viele Jahre nach der Wanderung von 1810."
        ],
        "fact": "um 1835. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "cfriesenoslo",
        "text": [
          "Über eine braune Heide mit kleinen Bäumen blickt man auf blaue, ferne Bergkämme.",
          "Leichte Wolken ziehen über den Himmel."
        ],
        "fact": "um 1835. Nationalmuseum Oslo."
      },
      {
        "pid": "cfriesensun",
        "text": [
          "Sonnenlicht bricht zwischen Wolken hervor und fällt auf grüne Hänge mit Fichten.",
          "Ein Teil der Berge liegt noch im Schatten."
        ],
        "fact": "um 1835. Saint Louis Art Museum."
      },
      {
        "pid": "cfriesenpeaks",
        "text": [
          "Ein umgestürzter Baumstamm liegt quer über einer Wiese, dahinter stehen Fichten.",
          "Über den Wolken ragt ein zackiger Gipfel auf."
        ],
        "fact": "um 1835. Kimbell Art Museum, Fort Worth."
      },
      {
        "pid": "cfrosenberg",
        "text": [
          "Über braune Hügel und Täler hinweg sieht man den kegelförmigen Rosenberg im Dunst.",
          "Das Licht ist weich und klar."
        ],
        "fact": "um 1835. Städel Museum, Frankfurt."
      },
      {
        "pid": "cfeldenamtn",
        "text": [
          "Die Ruine des Klosters Eldena steht in einer Hochebene vor den Bergen des Riesengebirges.",
          "In Wirklichkeit liegen die beiden Orte Hunderte Kilometer auseinander."
        ],
        "fact": "um 1830–1834. Pommersches Landesmuseum, Greifswald."
      },
      {
        "pid": "cfbohemia28",
        "text": [
          "Gelbgrüne Felder mit braunen Furchen ziehen sich bis zu sanften Hügeln.",
          "Oben links hat Friedrich Ort und Datum notiert."
        ],
        "fact": "1828. Pommersches Landesmuseum, Greifswald."
      }
    ]
  },
  {
    "id": "cfstroke",
    "place": "Krankheit und stille Blätter",
    "when": "1835–1837",
    "map": {
      "x": 172,
      "y": 176
    },
    "mapLabel": "Teplitz",
    "intro": [
      "Am 26. Juni 1835 erleidet Friedrich einen Schlaganfall und ist danach teilweise gelähmt. Für eine Kur in Teplitz in Böhmen helfen Verkäufe an den russischen Hof, die sein Freund, der Dichter Wassili Schukowski, vermittelt.",
      "Grosse Ölbilder werden nun selten, die Küste bei Mondschein gilt als eines der letzten. Friedrich arbeitet vor allem mit Sepia und Aquarell: stille Blätter mit Felsen, Ruinen, einer Eule und Mondlicht über dem Ufer."
    ],
    "works": [
      {
        "pid": "cfmoonshore",
        "text": [
          "Das Mondlicht glänzt auf dem Wasser zwischen dunklen Steinen und Wolken.",
          "Es gilt als eines der letzten Ölbilder Friedrichs."
        ],
        "fact": "1835–1836. Hamburger Kunsthalle."
      },
      {
        "pid": "cfowlgothic",
        "text": [
          "Eine Eule sitzt in einer schmalen gotischen Nische aus Stein, hinter ihr leuchtet ein heller Schein.",
          "Das Blatt ist in Sepia gezeichnet."
        ],
        "fact": "um 1836. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "cfneurathen",
        "text": [
          "Hohe Felsnadeln aus Sandstein stehen zwischen Fichten im Elbsandsteingebirge.",
          "Vorn wächst Heidekraut auf einem Felsen."
        ],
        "fact": "um 1837. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "cfschmiede",
        "text": [
          "Ein Mann lehnt an einem Zaun und schaut über gelbe Felder zu den blauen Bergen.",
          "Das zarte Aquarell zeigt das Riesengebirge aus der Erinnerung."
        ],
        "fact": "um 1837. Puschkin-Museum, Moskau."
      },
      {
        "pid": "cfeldenaeast",
        "text": [
          "Die hohe Giebelwand der Klosterruine steht neben einem niedrigen Bauernhaus.",
          "Friedrich hat Eldena seit seiner Jugend immer wieder gezeichnet."
        ],
        "fact": "1836. Kupferstichkabinett, Dresden."
      },
      {
        "pid": "cfteplitz",
        "text": [
          "Auf getöntem Papier zeichnet Friedrich einen Waldrücken und dahinter den spitzen Milleschauer über Wolken.",
          "Das Blatt trägt die Aufschrift Teplitz und das Datum 23.",
          "September 1835, aus der Zeit seiner Kur."
        ],
        "fact": "1835. Germanisches Nationalmuseum, Nürnberg."
      },
      {
        "pid": "cfgraves",
        "text": [
          "In einer hellen, weiten Ebene stehen einige Grabsteine, vorn steckt ein Spaten in der Erde.",
          "Das stille Sepiablatt gehört zu den späten Arbeiten."
        ],
        "fact": "um 1835–1837. Albertina, Wien."
      },
      {
        "pid": "cflonelybank",
        "text": [
          "Grosse runde Steine liegen am Ufer, der Mond steht hell über dem stillen Wasser.",
          "Friedrich hat die Szene in warmen Sepiatönen gemalt."
        ],
        "fact": "um 1837. National Gallery of Art, Washington."
      }
    ]
  },
  {
    "id": "cflegacy",
    "place": "Abendlicht",
    "when": "1828–1840",
    "map": {
      "x": 84,
      "y": 170
    },
    "mapLabel": "Trinitatis",
    "intro": [
      "In seinen späten Jahren malt Friedrich oft den Abend: Spaziergänger in der Dämmerung, eine Familie auf dem Heimweg vor der Silhouette Dresdens, Schiffe im Hafen und Menschen am Ostseestrand.",
      "Am 7. Mai 1840 stirbt Caspar David Friedrich in Dresden, im Alter von 65 Jahren. Er wird auf dem Trinitatisfriedhof begraben. Caroline und die Kinder bleiben in Dresden."
    ],
    "works": [
      {
        "pid": "cfwalkdusk",
        "text": [
          "Ein Mann steht in der Dämmerung neben einem alten Hünengrab zwischen kahlen Bäumen.",
          "Über ihm leuchtet die schmale Mondsichel."
        ],
        "fact": "um 1830–1835. J. Paul Getty Museum, Los Angeles."
      },
      {
        "pid": "cfsunsetlate",
        "text": [
          "Zwei Männer stehen nebeneinander auf einer Anhöhe und schauen in die untergehende Sonne über dem Meer.",
          "Ihre Gestalten sind fast schwarz gegen den leuchtenden Himmel."
        ],
        "fact": "um 1830–1835. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "cfeveningstar",
        "text": [
          "Eine Familie geht auf einem grünen Hügel nach Hause, ein Kind winkt mit erhobenen Armen.",
          "Am Horizont stehen die Türme von Dresden, darüber leuchtet der Abendstern."
        ],
        "fact": "um 1830. Freies Deutsches Hochstift, Frankfurt."
      },
      {
        "pid": "cfgrossegehege",
        "text": [
          "Nach einer Überschwemmung stehen Pfützen auf den Elbwiesen und spiegeln den Abendhimmel.",
          "Am Horizont liegt eine dunkle Baumreihe."
        ],
        "fact": "1832. Staatliche Kunstsammlungen Dresden."
      },
      {
        "pid": "cfeastermorn",
        "text": [
          "Drei Frauen gehen früh am Morgen auf einem Weg zwischen kahlen Bäumen.",
          "Über ihnen steht noch der blasse Mond."
        ],
        "fact": "um 1828–1835. Museo Thyssen-Bornemisza, Madrid."
      },
      {
        "pid": "cfeveningbaltic",
        "text": [
          "Am Strand sitzen Menschen an einem kleinen Feuer, draussen liegen Segelschiffe auf dem ruhigen Wasser.",
          "Der Himmel ist voller Abendwolken."
        ],
        "fact": "um 1831. Staatliche Kunstsammlungen Dresden."
      },
      {
        "pid": "cfharboureve",
        "text": [
          "Viele Masten und Segel stehen dicht nebeneinander im Hafen.",
          "Das letzte Licht färbt den Himmel violett und gelb."
        ],
        "fact": "um 1828. Staatliche Kunstsammlungen Dresden."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
