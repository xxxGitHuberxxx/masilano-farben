// v9.7 Rembrandt life journey, Part 2 (1642–1669), completing the path.
// Appends stations and works; rewrites the last Part-1 station (rbnight) and step (rbnightwatch) so they no longer lead into a following part.
// PD/CC0 scans only. Documented facts only; no quotations.
(function () {
  var works = [
  {
    "id": "rbadultery",
    "title": "Christus und die Ehebrecherin",
    "artist": "Rembrandt",
    "year": "1644",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Rembrandt - The Woman taken in Adultery (1644).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbgirlwin",
    "title": "Mädchen am Fenster",
    "artist": "Rembrandt",
    "year": "1645",
    "museum": "Dulwich Picture Gallery, London",
    "source": "Wikimedia Commons: «Rembrandt Harmensz van Rijn - Girl at a Window - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbjosephd",
    "title": "Der Traum Josefs im Stall",
    "artist": "Rembrandt",
    "year": "1645",
    "museum": "Gemäldegalerie, Berlin",
    "source": "Wikimedia Commons: «Der Traum Josephs - Gemäldegalerie Berlin - 5130725.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbthreetrees",
    "title": "Die drei Bäume",
    "artist": "Rembrandt",
    "year": "1643",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «The Three Trees by Rembrandt Rijksmuseum Amsterdam RP-P-OB-444.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbwinter",
    "title": "Winterlandschaft",
    "artist": "Rembrandt",
    "year": "1646",
    "museum": "Gemäldegalerie Alte Meister, Kassel",
    "source": "Wikimedia Commons: «Rembrandt Winterlandschap 1646.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbjansix",
    "title": "Jan Six",
    "artist": "Rembrandt",
    "year": "1647",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Jan Six, RP-P-1961-1160.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbephraim",
    "title": "Ephraim Bueno",
    "artist": "Rembrandt",
    "year": "1647",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, Ephraim Bonus, 1647, NGA 30886.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbself48",
    "title": "Selbstbildnis, am Fenster zeichnend",
    "artist": "Rembrandt",
    "year": "1648",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Rembrandt drawing at a window.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbemmaus48",
    "title": "Die Jünger in Emmaus",
    "artist": "Rembrandt",
    "year": "1648",
    "museum": "Musée du Louvre, Paris",
    "source": "Wikimedia Commons: «Rembrandt The Supper at Emmaus.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbjews",
    "title": "Juden in der Synagoge",
    "artist": "Rembrandt",
    "year": "1648",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, Jews in the Synagogue, 1648, NGA 10024.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbhundred",
    "title": "Das Hundertguldenblatt",
    "artist": "Rembrandt",
    "year": "um 1648",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «De predikende Christus (De Honderdguldenprent) De Honderd Gulden prent, RP-P-OB-601.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbfaust",
    "title": "Ein Gelehrter in seiner Studierstube (Faust)",
    "artist": "Rembrandt",
    "year": "um 1652",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «B270 Rembrandt.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbshell",
    "title": "Die Muschel",
    "artist": "Rembrandt",
    "year": "1650",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «B159 Rembrandt.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbsixbridge",
    "title": "Die Brücke von Six",
    "artist": "Rembrandt",
    "year": "1645",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Bruggetje bij buitenplaats Klein-Kostverloren met gezicht op Ouderkerk aan de Amstel Het bruggetje van Six, RP-P-1961-1115.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbomval",
    "title": "Der Omval",
    "artist": "Rembrandt",
    "year": "1645",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, The Omval, 1645, NGA 9940.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbmill",
    "title": "Die Mühle",
    "artist": "Rembrandt",
    "year": "um 1645–1648",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn - The Mill - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbgoldfield",
    "title": "Das Goldwägerfeld",
    "artist": "Rembrandt",
    "year": "1651",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, Landscape with a View toward Haarlem (The Goldweigher's Field), 1651, NGA 11576.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbcott3",
    "title": "Landschaft mit drei Giebelhäusern",
    "artist": "Rembrandt",
    "year": "1650",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Landscape with Three Gabled Cottages Beside a Road MET MM9571.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbtower",
    "title": "Landschaft mit viereckigem Turm",
    "artist": "Rembrandt",
    "year": "1650",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, Landscape with a Square Tower, 1650, NGA 10020.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbmilkman",
    "title": "Landschaft mit Milchmann",
    "artist": "Rembrandt",
    "year": "um 1650",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Landscape with a Milkman MET MM9275.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbclump",
    "title": "Baumgruppe mit Ausblick",
    "artist": "Rembrandt",
    "year": "1652",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Rembrandt van Rijn - Clump of Trees with a Vista - 1926.473 - Cleveland Museum of Art.tif», CC0 (gemeinfrei)"
  },
  {
    "id": "rbkitchen",
    "title": "Die Küchenmagd",
    "artist": "Rembrandt",
    "year": "1651",
    "museum": "Nationalmuseum, Stockholm",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn - \"The Kitchen Maid\" - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbhenddoor",
    "title": "Hendrickje Stoffels an einer Tür",
    "artist": "Rembrandt",
    "year": "um 1656",
    "museum": "Gemäldegalerie, Berlin",
    "source": "Wikimedia Commons: «Rembrandt - Portrait of Hendrickje Stoffels - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbhendmet",
    "title": "Hendrickje Stoffels",
    "artist": "Rembrandt",
    "year": "um 1655",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, Portrait of Hendrickje Stoffels (1650s).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbself52",
    "title": "Grosses Selbstbildnis",
    "artist": "Rembrandt",
    "year": "1652",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Rembrandt Harmenszoon van Rijn - Large Self-Portrait - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbaristotle",
    "title": "Aristoteles mit der Büste Homers",
    "artist": "Rembrandt",
    "year": "1653",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Rembrandt - Aristotle with a Bust of Homer - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbfloris",
    "title": "Der Fahnenträger (Floris Soop)",
    "artist": "Rembrandt",
    "year": "1654",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Standard Bearer (Floris Soop, 1604–1657) MET DP121330.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbadorelamp",
    "title": "Die Anbetung der Hirten mit der Lampe",
    "artist": "Rembrandt",
    "year": "um 1654",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, The Adoration of the Shepherds - with the Lamp, c. 1654, NGA 10011.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbemmaus54",
    "title": "Christus in Emmaus",
    "artist": "Rembrandt",
    "year": "1654",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Christus te Emmaus grote plaat, RP-P-OB-12.450.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbpolish",
    "title": "Der polnische Reiter",
    "artist": "Rembrandt",
    "year": "um 1655",
    "museum": "Frick Collection, New York",
    "source": "Wikimedia Commons: «Rembrandt - De Poolse ruiter, c.1655 (Frick Collection).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbtitusread",
    "title": "Titus liest",
    "artist": "Rembrandt",
    "year": "um 1656–1657",
    "museum": "Kunsthistorisches Museum, Wien",
    "source": "Wikimedia Commons: «Rembrandt Harmenszoon van Rijn - Titus van Rijn, the Artist’s Son, Reading - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbhaaringh",
    "title": "Pieter Haaringh",
    "artist": "Rembrandt",
    "year": "1655",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, Jacob Haaringh (Young Haaringh) (Pieter Haaringh), 1655, NGA 9955.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rblutma",
    "title": "Der Goldschmied Jan Lutma",
    "artist": "Rembrandt",
    "year": "1656",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, Jan Lutma, 1656, NGA 35126.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbself58",
    "title": "Selbstbildnis",
    "artist": "Rembrandt",
    "year": "1658",
    "museum": "Frick Collection, New York",
    "source": "Wikimedia Commons: «Rembrandt - Zelfportret - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbself59",
    "title": "Selbstbildnis",
    "artist": "Rembrandt",
    "year": "1659",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn - Self-Portrait - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbself60",
    "title": "Selbstbildnis",
    "artist": "Rembrandt",
    "year": "1660",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Self-Portrait MET DP-16323-001.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbselfeasel",
    "title": "Selbstbildnis an der Staffelei",
    "artist": "Rembrandt",
    "year": "1660",
    "museum": "Musée du Louvre, Paris",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn 133.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbdenial",
    "title": "Die Verleugnung des Petrus",
    "artist": "Rembrandt",
    "year": "1660",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «De verloochening van Petrus Rijksmuseum SK-A-3137.jpeg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbtitusmonk",
    "title": "Titus in Mönchskutte",
    "artist": "Rembrandt",
    "year": "1660",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Rembrandt van Rijn - Rembrandts zoon Titus in monniksdracht (Rijksmuseum Amsterdam).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbselfpaul",
    "title": "Selbstbildnis als Apostel Paulus",
    "artist": "Rembrandt",
    "year": "1661",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn - Zelfportret als de apostel Paulus - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbjacobtrip",
    "title": "Jacob Trip",
    "artist": "Rembrandt",
    "year": "um 1661",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «61016Portrait of Jacob Trip.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbdegeer",
    "title": "Margaretha de Geer",
    "artist": "Rembrandt",
    "year": "um 1661",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «61017Portrait of Margaretha de Geer.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbsyndics",
    "title": "Die Staalmeesters",
    "artist": "Rembrandt",
    "year": "1662",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «De waardijns van het Amsterdamse lakenbereidersgilde, bekend als ‘De staalmeesters’ Rijksmuseum SK-C-6.jpeg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbcivilis",
    "title": "Die Verschwörung des Claudius Civilis",
    "artist": "Rembrandt",
    "year": "1661–1662",
    "museum": "Nationalmuseum, Stockholm",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn - The Conspiracy of the Batavians under Claudius Civilis - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbhomer",
    "title": "Homer",
    "artist": "Rembrandt",
    "year": "1663",
    "museum": "Mauritshuis, Den Haag",
    "source": "Wikimedia Commons: «Homerus, Rembrandt van Rijn, 1663, Mauritshuis, The Hague.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbjuno",
    "title": "Juno",
    "artist": "Rembrandt",
    "year": "um 1662–1665",
    "museum": "Hammer Museum, Los Angeles",
    "source": "Wikimedia Commons: «Juno, Rembrandt, 1662-1665, Armand Hammer Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbmanmag",
    "title": "Mann mit Lupe",
    "artist": "Rembrandt",
    "year": "frühe 1660er Jahre",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Man with a Magnifying Glass MET DP145909.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbpink",
    "title": "Frau mit Nelke",
    "artist": "Rembrandt",
    "year": "frühe 1660er Jahre",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Woman with a Pink MET DP145910.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbrihel",
    "title": "Frederick Rihel zu Pferd",
    "artist": "Rembrandt",
    "year": "um 1663",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Rembrandt - Frederick Rihel on Horseback - WGA19157.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbfamily",
    "title": "Familienbildnis",
    "artist": "Rembrandt",
    "year": "um 1665",
    "museum": "Herzog Anton Ulrich-Museum, Braunschweig",
    "source": "Wikimedia Commons: «Family portrait, by Rembrandt.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbwhitehair",
    "title": "Bildnis eines weisshaarigen Mannes",
    "artist": "Rembrandt",
    "year": "1667",
    "museum": "National Gallery of Victoria, Melbourne",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn - Portrait of a white-haired man - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rboldman67",
    "title": "Bildnis eines alten Mannes",
    "artist": "Rembrandt",
    "year": "1667",
    "museum": "Mauritshuis, Den Haag",
    "source": "Wikimedia Commons: «Rembrandt van Rijn - Portrait of an Elderly Man - 1118 - Mauritshuis.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbselfkenwood",
    "title": "Selbstbildnis mit zwei Kreisen",
    "artist": "Rembrandt",
    "year": "um 1665",
    "museum": "Kenwood House, London",
    "source": "Wikimedia Commons: «Rembrandt van Rijn - Zelfportret met twee cirkels (Kenwood House).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbzeuxis",
    "title": "Selbstbildnis als Zeuxis",
    "artist": "Rembrandt",
    "year": "um 1662–1668",
    "museum": "Wallraf-Richartz-Museum, Köln",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn 142.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbprodigal2",
    "title": "Die Rückkehr des verlorenen Sohnes",
    "artist": "Rembrandt",
    "year": "um 1668",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Rembrandt Harmensz van Rijn - Return of the Prodigal Son - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbsimeon69",
    "title": "Simeon im Tempel",
    "artist": "Rembrandt",
    "year": "1669",
    "museum": "Nationalmuseum, Stockholm",
    "source": "Wikimedia Commons: «Rembrandt - Circumcision - WGA19111.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbself63",
    "title": "Selbstbildnis mit 63 Jahren",
    "artist": "Rembrandt",
    "year": "1669",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Rembrandt, Self Portrait at the Age of 63.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbself69",
    "title": "Selbstbildnis",
    "artist": "Rembrandt",
    "year": "1669",
    "museum": "Mauritshuis, Den Haag",
    "source": "Wikimedia Commons: «Rembrandt Self-portrait (Mauritshuis).jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'rembrandt'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1606–1669";
  path.subtitle = "Von der Mühle in Leiden bis zur Westerkerk";
  path.intro = "Begleite Rembrandt Harmenszoon van Rijn durch sein ganzes Leben: von der Geburt in Leiden 1606 über die Lehrjahre, den Erfolg in Amsterdam, Saskia und die Nachtwache bis zu Titus, Hendrickje, dem Konkurs, der Rozengracht, den Staalmeesters, den späten Selbstbildnissen und seinem Tod 1669.";
  path.ending = [
  "Rembrandt stirbt am 4. Oktober 1669 in Amsterdam, dreiundsechzig Jahre alt. Er wird am 8. Oktober in der Westerkerk begraben.",
  "Seine Selbstbildnisse, Radierungen und grossen Bilder machen ihn zu einem der berühmtesten Maler der Welt."
];
  path.epilogue = "Rembrandt stirbt am 4. Oktober 1669 in Amsterdam und wird in der Westerkerk begraben.";
  var rn = (path.stations || []).filter(function (s) { return s.id === 'rbnight'; })[0];
  if (rn) {
    rn.intro = [
  "Um 1640 malt Rembrandt Bildnispaare reicher Amsterdamer und 1641 den Prediger Cornelis Anslo im Gespräch mit seiner Frau. 1642 entsteht David und Jonathan.",
  "1642 vollendet er das grosse Gruppenbild der Schützenkompanie von Frans Banninck Cocq für den Saal der Kloveniersdoelen. Das Bild, heute als Nachtwache bekannt, ist voller Bewegung, Licht und Schatten."
];
    (rn.works || []).forEach(function (w) { if (w.pid === 'rbnightwatch') w.text = [
  "Hauptmann Frans Banninck Cocq gibt das Zeichen zum Abmarsch, seine Schützen setzen sich in Bewegung.",
  "Ein helles Mädchen und viel Schatten machen das Gruppenbild lebendig.",
  "Dies ist eine vereinfachte Fassung zum Ausmalen; die ausführlichere Nachtwache findest du in der Galerie.",
  "Das Original hängt im Rijksmuseum in Amsterdam."
]; });
  }
  var stations = [
  {
    "id": "rbtitus",
    "place": "Ein Jahr der Stille",
    "when": "1642–1645",
    "map": {
      "x": 102,
      "y": 84
    },
    "mapLabel": "Titus",
    "intro": [
      "Im Juni 1642 stirbt Saskia; sie wird in der Oude Kerk in Amsterdam begraben. Rembrandt bleibt mit dem kleinen Titus allein, der im September 1641 getauft worden ist.",
      "In den folgenden Jahren malt Rembrandt weniger Aufträge. Er wendet sich stillen biblischen Szenen zu und radiert Landschaften wie die Drei Bäume."
    ],
    "works": [
      {
        "pid": "rbadultery",
        "text": [
          "In einem riesigen, goldenen Tempel steht eine kleine Gruppe im Licht vor Christus.",
          "Rembrandt malt die Szene sehr fein.",
          "Das Bild ist in der National Gallery in London."
        ],
        "fact": "1644. National Gallery, London."
      },
      {
        "pid": "rbgirlwin",
        "text": [
          "Ein Mädchen lehnt sich auf ein Fensterbrett und schaut uns an.",
          "Mit der Täuschung spielt Rembrandt: sie wirkt, als stünde sie wirklich im Rahmen.",
          "Das Bild ist in der Dulwich Picture Gallery in London."
        ],
        "fact": "1645. Dulwich Picture Gallery, London."
      },
      {
        "pid": "rbjosephd",
        "text": [
          "Ein Engel erscheint Josef im Traum, Maria und das Kind schlafen daneben im Stall.",
          "Das kleine Bild leuchtet aus dem Dunkel.",
          "Es ist in der Gemäldegalerie in Berlin."
        ],
        "fact": "1645. Gemäldegalerie, Berlin."
      },
      {
        "pid": "rbthreetrees",
        "text": [
          "Drei Bäume stehen auf einem Deich unter einem gewaltigen Himmel mit Regenstreifen.",
          "Es ist Rembrandts grösste Landschaftsradierung.",
          "Dieser Abzug ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1643. Rijksmuseum, Amsterdam."
      }
    ]
  },
  {
    "id": "rbgeertje",
    "place": "Geertje Dircx",
    "when": "1643–1649",
    "map": {
      "x": 98,
      "y": 92
    },
    "mapLabel": "Geertje",
    "intro": [
      "Um 1643 kommt die Witwe Geertje Dircx als Kinderfrau für Titus ins Haus in der Breestraat. Sie lebt mehrere Jahre mit Rembrandt zusammen.",
      "Rembrandt porträtiert Freunde wie Jan Six und den Arzt Ephraim Bueno. 1649 trennen sich Rembrandt und Geertje im Streit, der vor Gericht endet."
    ],
    "works": [
      {
        "pid": "rbwinter",
        "text": [
          "Menschen gehen über das Eis, ein Hof liegt im hellen Wintersonnenlicht.",
          "Das kleine Bild ist eine von Rembrandts wenigen Winterszenen.",
          "Es ist in der Gemäldegalerie Alte Meister in Kassel."
        ],
        "fact": "1646. Gemäldegalerie Alte Meister, Kassel."
      },
      {
        "pid": "rbjansix",
        "text": [
          "Sein Freund Jan Six steht lesend am Fenster.",
          "Six war Kaufmann, Dichter und später Bürgermeister von Amsterdam.",
          "Dieser Abzug ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1647. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "rbephraim",
        "text": [
          "Der Arzt Ephraim Bueno steht auf einer Treppe, die Hand auf dem Geländer.",
          "Er gehörte zur portugiesisch-jüdischen Gemeinde Amsterdams.",
          "Dieser Abzug ist in der National Gallery of Art in Washington."
        ],
        "fact": "1647. National Gallery of Art, Washington."
      },
      {
        "pid": "rbself48",
        "text": [
          "Rembrandt sitzt am Fenster und zeichnet, ernst und ohne Schmuck.",
          "Er sieht uns an, als wären wir sein Spiegel.",
          "Dieser Abzug ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1648. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "rbemmaus48",
        "text": [
          "Christus bricht das Brot, und die beiden Jünger erkennen ihn.",
          "Hinter ihm öffnet sich eine hohe Nische.",
          "Das Bild ist im Musée du Louvre in Paris."
        ],
        "fact": "1648. Musée du Louvre, Paris."
      },
      {
        "pid": "rbjews",
        "text": [
          "Kleine Gruppen von Männern stehen im Gespräch auf den Stufen.",
          "Rembrandt kannte das jüdische Viertel rund um seine Breestraat gut.",
          "Dieser Abzug ist in der National Gallery of Art in Washington."
        ],
        "fact": "1648. National Gallery of Art, Washington."
      }
    ]
  },
  {
    "id": "rbhundred",
    "place": "Die Hundertguldenblatt-Radierung",
    "when": "1648–1652",
    "map": {
      "x": 108,
      "y": 80
    },
    "mapLabel": "Radierungen",
    "intro": [
      "Um 1648 vollendet Rembrandt seine berühmteste Radierung: Christus predigt und heilt die Kranken. Sie heisst Hundertguldenblatt, weil Abzüge schon früh für hundert Gulden gehandelt worden sein sollen.",
      "Rembrandt sammelt Kunst, Muscheln und seltene Dinge. Eine Meeresschnecke radiert er so genau, dass man jede Zeichnung ihres Gehäuses erkennt."
    ],
    "works": [
      {
        "pid": "rbhundred",
        "text": [
          "In der Mitte steht Christus im Licht, Kranke und Neugierige drängen sich um ihn.",
          "Rembrandt arbeitet viele Jahre an diesem Blatt.",
          "Dieser Abzug ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "um 1648. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "rbfaust",
        "text": [
          "Ein Gelehrter blickt auf eine leuchtende Scheibe mit Buchstaben im Fenster.",
          "Später nennt man das Blatt Faust.",
          "Dieser Abzug ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "um 1652. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "rbshell",
        "text": [
          "Eine Kegelschnecke liegt allein auf dem Blatt, mit feinem Muster.",
          "Rembrandt besass solche Schnecken in seiner Sammlung.",
          "Dieser Abzug ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1650. Rijksmuseum, Amsterdam."
      }
    ]
  },
  {
    "id": "rbland",
    "place": "Spaziergänge an der Amstel",
    "when": "1645–1652",
    "map": {
      "x": 118,
      "y": 96
    },
    "mapLabel": "Amstel",
    "intro": [
      "In diesen Jahren wandert Rembrandt oft aus der Stadt hinaus, an der Amstel entlang und über die Deiche. Unterwegs zeichnet er Höfe, Brücken und weite Felder.",
      "Daraus entstehen seine schönsten Landschaftsradierungen. Mit wenigen Linien zeigt er flaches Land, hohen Himmel und viel Licht."
    ],
    "works": [
      {
        "pid": "rbsixbridge",
        "text": [
          "Eine kleine Holzbrücke führt über einen Kanal, zwei Männer schauen über das Geländer.",
          "Das Blatt wird mit Jan Six in Verbindung gebracht.",
          "Dieser Abzug ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1645. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "rbomval",
        "text": [
          "Am Ufer der Amstel steht ein grosser Baum, Boote gleiten vorbei.",
          "Der Omval liegt am Fluss südlich von Amsterdam.",
          "Dieser Abzug ist in der National Gallery of Art in Washington."
        ],
        "fact": "1645. National Gallery of Art, Washington."
      },
      {
        "pid": "rbmill",
        "text": [
          "Eine Windmühle steht dunkel auf einem Wall vor einem leuchtenden Abendhimmel.",
          "Es ist eines der bekanntesten gemalten Landschaftsbilder Rembrandts.",
          "Das Bild ist in der National Gallery of Art in Washington."
        ],
        "fact": "um 1645–1648. National Gallery of Art, Washington."
      },
      {
        "pid": "rbgoldfield",
        "text": [
          "Ein weites, flaches Land mit Feldern und Bleichwiesen reicht bis zum Horizont.",
          "Das sehr breite Blatt zeigt den Blick Richtung Haarlem.",
          "Dieser Abzug ist in der National Gallery of Art in Washington."
        ],
        "fact": "1651. National Gallery of Art, Washington."
      },
      {
        "pid": "rbcott3",
        "text": [
          "Drei Bauernhäuser mit hohen Giebeln stehen unter grossen Bäumen am Weg.",
          "Rembrandt radiert jedes Strohdach genau.",
          "Dieser Abzug ist im Metropolitan Museum of Art in New York."
        ],
        "fact": "1650. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rbtower",
        "text": [
          "Hinter Bäumen und Häusern ragt ein viereckiger Kirchturm auf.",
          "Die kleine Radierung wirkt hell und luftig.",
          "Dieser Abzug ist in der National Gallery of Art in Washington."
        ],
        "fact": "1650. National Gallery of Art, Washington."
      },
      {
        "pid": "rbmilkman",
        "text": [
          "Ein Milchmann geht mit seinen Kannen über einen Deichweg, daneben liegt ein Hof.",
          "Die Radierung ist schmal und lang wie ein Ausblick.",
          "Dieser Abzug ist im Metropolitan Museum of Art in New York."
        ],
        "fact": "um 1650. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rbclump",
        "text": [
          "Eine dichte Baumgruppe steht neben einem Bauernhaus, rechts öffnet sich der Blick in die Ferne.",
          "Rembrandt arbeitet hier mit der kalten Nadel.",
          "Dieser Abzug ist im Cleveland Museum of Art."
        ],
        "fact": "1652. Cleveland Museum of Art."
      }
    ]
  },
  {
    "id": "rbhend",
    "place": "Hendrickje Stoffels",
    "when": "1649–1656",
    "map": {
      "x": 96,
      "y": 80
    },
    "mapLabel": "Hendrickje",
    "intro": [
      "Hendrickje Stoffels aus Bredevoort kommt um 1647 als Haushälterin ins Haus und wird Rembrandts Lebensgefährtin. Die beiden heiraten nie.",
      "1654 wird Hendrickje von der Kirche gerügt, weil sie unverheiratet mit Rembrandt zusammenlebt. Im Oktober 1654 wird ihre Tochter Cornelia getauft."
    ],
    "works": [
      {
        "pid": "rbkitchen",
        "text": [
          "Ein junges Mädchen stützt das Kinn in die Hand und schaut gedankenverloren aus dem Fenster.",
          "Rote Jacke und weisses Hemd leuchten im Dunkel.",
          "Das Bild ist im Nationalmuseum in Stockholm."
        ],
        "fact": "1651. Nationalmuseum, Stockholm."
      },
      {
        "pid": "rbhenddoor",
        "text": [
          "Hendrickje lehnt in einer Tür und hält sich mit einer Hand am Rahmen fest.",
          "Ihr rotes Tuch leuchtet warm.",
          "Das Bild ist in der Gemäldegalerie in Berlin."
        ],
        "fact": "um 1656. Gemäldegalerie, Berlin."
      },
      {
        "pid": "rbhendmet",
        "text": [
          "Hendrickje trägt Perlen und einen Pelzmantel und blickt ruhig zur Seite.",
          "Sie wird oft als Modell für dieses Bildnis genannt.",
          "Das Bild ist im Metropolitan Museum of Art in New York."
        ],
        "fact": "um 1655. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rbself52",
        "text": [
          "Rembrandt steht breit da, die Hände im Gürtel, in einem schlichten Arbeitskittel.",
          "So ernst hat er sich vorher nie gezeigt.",
          "Das Bild ist im Kunsthistorischen Museum in Wien."
        ],
        "fact": "1652. Kunsthistorisches Museum, Wien."
      },
      {
        "pid": "rbaristotle",
        "text": [
          "Der Philosoph Aristoteles legt die Hand auf eine Büste des Dichters Homer.",
          "Ein sizilianischer Sammler hat das Bild bestellt.",
          "Es ist im Metropolitan Museum of Art in New York."
        ],
        "fact": "1653. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rbfloris",
        "text": [
          "Der reiche Junggeselle Floris Soop steht mit Fahne und Federhut stolz im Licht.",
          "Er war Fahnenträger einer Schützenkompanie.",
          "Das Bild ist im Metropolitan Museum of Art in New York."
        ],
        "fact": "1654. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rbadorelamp",
        "text": [
          "Im dunklen Stall hält ein Hirte eine Laterne über Maria und das Kind.",
          "Rembrandt zeigt das Licht als kleines Leuchten in der Nacht.",
          "Dieser Abzug ist in der National Gallery of Art in Washington."
        ],
        "fact": "um 1654. National Gallery of Art, Washington."
      },
      {
        "pid": "rbemmaus54",
        "text": [
          "Christus sitzt hinter einem Tisch, ein Lichtschein umgibt ihn, die Jünger staunen.",
          "Rembrandt kehrt immer wieder zu Emmaus zurück.",
          "Dieser Abzug ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1654. Rijksmuseum, Amsterdam."
      }
    ]
  },
  {
    "id": "rbinsolvent",
    "place": "Schulden und Konkurs",
    "when": "1653–1658",
    "map": {
      "x": 96,
      "y": 76
    },
    "mapLabel": "Konkurs",
    "intro": [
      "Das Haus in der Breestraat ist noch nicht bezahlt, und die Schulden wachsen. Im Juli 1656 beantragt Rembrandt die Abtretung seines Besitzes an die Gläubiger.",
      "Ein Verzeichnis listet seine Bilder, Bücher und Sammlungen auf. 1657 und 1658 wird alles versteigert, auch das Haus."
    ],
    "works": [
      {
        "pid": "rbpolish",
        "text": [
          "Ein junger Reiter mit Mütze, Bogen und Säbel reitet durch eine dunkle Landschaft.",
          "Wer er ist, weiss man bis heute nicht.",
          "Das Bild ist in der Frick Collection in New York."
        ],
        "fact": "um 1655. Frick Collection, New York."
      },
      {
        "pid": "rbtitusread",
        "text": [
          "Titus, etwa fünfzehn Jahre alt, liest in einem Buch, Licht fällt auf Gesicht und Hände.",
          "Rembrandt malt seinen Sohn oft.",
          "Das Bild ist im Kunsthistorischen Museum in Wien."
        ],
        "fact": "um 1656–1657. Kunsthistorisches Museum, Wien."
      },
      {
        "pid": "rbhaaringh",
        "text": [
          "Der Auktionator Pieter Haaringh sitzt vor einem Fenster mit Vorhang.",
          "Er war an den Versteigerungen beteiligt, die Rembrandt bald bevorstanden.",
          "Dieser Abzug ist in der National Gallery of Art in Washington."
        ],
        "fact": "1655. National Gallery of Art, Washington."
      },
      {
        "pid": "rblutma",
        "text": [
          "Der alte Goldschmied Jan Lutma sitzt in einem Lehnstuhl, neben ihm liegen Werkzeug und eine kleine Schale.",
          "Rembrandt radiert ihn 1656.",
          "Dieser Abzug ist in der National Gallery of Art in Washington."
        ],
        "fact": "1656. National Gallery of Art, Washington."
      },
      {
        "pid": "rbself58",
        "text": [
          "Im Jahr, in dem sein Haus verkauft wird, malt sich Rembrandt wie ein König auf dem Thron, in goldenem Gewand und mit einem Stock.",
          "Das Bild ist in der Frick Collection in New York."
        ],
        "fact": "1658. Frick Collection, New York."
      }
    ]
  },
  {
    "id": "rbrozen",
    "place": "Die Rozengracht",
    "when": "1658–1661",
    "map": {
      "x": 86,
      "y": 82
    },
    "mapLabel": "Rozengracht",
    "intro": [
      "Die Familie zieht in ein bescheidenes Haus an der Rozengracht im Jordaan-Viertel. Ende 1660 gründen Hendrickje und Titus einen Kunsthandel, für den Rembrandt arbeitet.",
      "So kann er weiter malen, ohne dass Gläubiger seine Bilder fordern. Er malt sich selbst nun oft ernst, ruhig und mit Malstock und Palette."
    ],
    "works": [
      {
        "pid": "rbself59",
        "text": [
          "Rembrandt blickt uns mit gefalteten Händen ruhig und müde an.",
          "Die Falten im Gesicht malt er ehrlich.",
          "Das Bild ist in der National Gallery of Art in Washington."
        ],
        "fact": "1659. National Gallery of Art, Washington."
      },
      {
        "pid": "rbself60",
        "text": [
          "Mit Barett und braunem Mantel blickt Rembrandt aus dem dunklen Grund.",
          "Licht fällt nur auf Stirn und Wange.",
          "Das Bild ist im Metropolitan Museum of Art in New York."
        ],
        "fact": "1660. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rbselfeasel",
        "text": [
          "Rembrandt steht mit weisser Kappe, Palette und Pinseln an der Staffelei.",
          "Er zeigt sich ganz als arbeitender Maler.",
          "Das Bild ist im Musée du Louvre in Paris."
        ],
        "fact": "1660. Musée du Louvre, Paris."
      },
      {
        "pid": "rbdenial",
        "text": [
          "Eine Magd hält eine Kerze vor Petrus und fragt, ob er zu Jesus gehöre.",
          "Petrus hebt abwehrend die Hand.",
          "Das Bild ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1660. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "rbtitusmonk",
        "text": [
          "Titus trägt eine braune Kutte mit Kapuze und blickt still vor sich hin.",
          "Rembrandt malt ihn als Mönch.",
          "Das Bild ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1660. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "rbselfpaul",
        "text": [
          "Rembrandt malt sich als Apostel Paulus, mit einem Turban und einem Schwertgriff im Mantel.",
          "Er zieht fragend die Stirn hoch.",
          "Das Bild ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1661. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "rbjacobtrip",
        "text": [
          "Der alte Kaufmann Jacob Trip aus Dordrecht sitzt mit einem Stock in einem Lehnstuhl.",
          "Sein Gesicht ist voller Falten.",
          "Das Bild ist in der National Gallery in London."
        ],
        "fact": "um 1661. National Gallery, London."
      },
      {
        "pid": "rbdegeer",
        "text": [
          "Margaretha de Geer, die Frau von Jacob Trip, trägt einen grossen weissen Mühlsteinkragen.",
          "Ihr Bild ist das Gegenstück zu seinem.",
          "Es ist in der National Gallery in London."
        ],
        "fact": "um 1661. National Gallery, London."
      }
    ]
  },
  {
    "id": "rbsyndics",
    "place": "Die Staalmeesters und Claudius Civilis",
    "when": "1661–1663",
    "map": {
      "x": 100,
      "y": 88
    },
    "mapLabel": "Staalmeesters",
    "intro": [
      "1662 malt Rembrandt die Vorsteher der Tuchfärbergilde, die Staalmeesters. Für das neue Rathaus malt er die Verschwörung der Bataver unter Claudius Civilis; das grosse Bild wird bald zurückgegeben, und Rembrandt schneidet es zu.",
      "1663 stirbt Hendrickje. Sie wird in der Westerkerk begraben. Titus und Cornelia bleiben bei ihrem Vater."
    ],
    "works": [
      {
        "pid": "rbsyndics",
        "text": [
          "Fünf Vorsteher der Tuchfärbergilde sitzen um einen Tisch mit rotem Teppich, ein Diener steht hinter ihnen.",
          "Sie schauen auf, als wären wir gerade eingetreten.",
          "Das Bild ist im Rijksmuseum in Amsterdam."
        ],
        "fact": "1662. Rijksmuseum, Amsterdam."
      },
      {
        "pid": "rbcivilis",
        "text": [
          "Die Bataver schwören bei Nacht ihrem Anführer Claudius Civilis Treue, die Schwerter kreuzen sich im Licht.",
          "Erhalten ist nur das von Rembrandt zugeschnittene Mittelstück.",
          "Es ist im Nationalmuseum in Stockholm."
        ],
        "fact": "1661–1662. Nationalmuseum, Stockholm."
      },
      {
        "pid": "rbhomer",
        "text": [
          "Der blinde Dichter Homer diktiert, nur Kopf und Hände sind hell.",
          "Das Bild wurde für denselben Sammler in Sizilien gemalt wie Aristoteles.",
          "Es ist im Mauritshuis in Den Haag."
        ],
        "fact": "1663. Mauritshuis, Den Haag."
      },
      {
        "pid": "rbjuno",
        "text": [
          "Die Göttin Juno trägt eine Krone und einen prächtigen, mit Juwelen besetzten Mantel.",
          "Neben ihr ist schwach ihr Pfau zu ahnen.",
          "Das Bild ist im Hammer Museum in Los Angeles."
        ],
        "fact": "um 1662–1665. Hammer Museum, Los Angeles."
      },
      {
        "pid": "rbmanmag",
        "text": [
          "Ein Mann hält ein Vergrösserungsglas in der Hand und blickt nachdenklich vor sich hin.",
          "Sein Bild ist das Gegenstück zur Frau mit der Nelke.",
          "Es ist im Metropolitan Museum of Art in New York."
        ],
        "fact": "frühe 1660er Jahre. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rbpink",
        "text": [
          "Eine junge Frau mit Perlen hält eine rosa Nelke in der Hand.",
          "Die Nelke steht oft für Liebe und Ehe.",
          "Das Bild ist im Metropolitan Museum of Art in New York."
        ],
        "fact": "frühe 1660er Jahre. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "rbrihel",
        "text": [
          "Der Kaufmann Frederick Rihel sitzt in prächtiger Kleidung auf einem weissen Pferd.",
          "Es ist Rembrandts einziges grosses Reiterbildnis.",
          "Das Bild ist in der National Gallery in London."
        ],
        "fact": "um 1663. National Gallery, London."
      }
    ]
  },
  {
    "id": "rbbride",
    "place": "Das Judenbräutchen",
    "when": "1663–1668",
    "map": {
      "x": 90,
      "y": 86
    },
    "mapLabel": "Spätwerk",
    "intro": [
      "In den letzten Jahren malt Rembrandt mit breitem Pinsel und dicker Farbe. Im Judenbräutchen legt ein Mann zärtlich die Hand auf die Brust seiner Frau, die ihre Hand auf seine legt.",
      "Im Februar 1668 heiratet Titus Magdalena van Loo. Im September desselben Jahres stirbt Titus, erst 26 Jahre alt."
    ],
    "works": [
      {
        "pid": "rbfamily",
        "text": [
          "Eine Mutter hält ein Kind auf dem Schoss, Vater und zwei Kinder stehen dabei, alle in warmem Rot.",
          "Wer die Familie ist, ist unbekannt.",
          "Das Bild ist im Herzog Anton Ulrich-Museum in Braunschweig."
        ],
        "fact": "um 1665. Herzog Anton Ulrich-Museum, Braunschweig."
      },
      {
        "pid": "rbwhitehair",
        "text": [
          "Ein alter Mann mit weissem Haar und rundem Hut blickt ernst aus dem Bild.",
          "Rembrandt malt mit breiten Strichen.",
          "Das Bild ist in der National Gallery of Victoria in Melbourne."
        ],
        "fact": "1667. National Gallery of Victoria, Melbourne."
      },
      {
        "pid": "rboldman67",
        "text": [
          "Ein alter Mann mit breitem Hut und weissem Kragen sitzt ruhig da.",
          "Rembrandt malt ihn zwei Jahre vor seinem eigenen Tod.",
          "Das Bild ist im Mauritshuis in Den Haag."
        ],
        "fact": "1667. Mauritshuis, Den Haag."
      },
      {
        "pid": "rbselfkenwood",
        "text": [
          "Rembrandt steht mit Palette und Pinseln vor einer Wand mit zwei grossen Kreisbögen.",
          "Was die Kreise bedeuten, ist unbekannt.",
          "Das Bild ist im Kenwood House in London."
        ],
        "fact": "um 1665. Kenwood House, London."
      },
      {
        "pid": "rbzeuxis",
        "text": [
          "Rembrandt lacht, als alter Mann, über die Schulter.",
          "Er stellt sich wohl als den antiken Maler Zeuxis dar.",
          "Das Bild ist im Wallraf-Richartz-Museum in Köln."
        ],
        "fact": "um 1662–1668. Wallraf-Richartz-Museum, Köln."
      }
    ]
  },
  {
    "id": "rblate",
    "place": "Die letzten Bilder",
    "when": "1668–1669",
    "map": {
      "x": 92,
      "y": 84
    },
    "mapLabel": "Westerkerk",
    "intro": [
      "Im März 1669 wird Titus’ Tochter Titia getauft. Rembrandt arbeitet weiter an seinen letzten Bildern, darunter die Rückkehr des verlorenen Sohnes.",
      "Rembrandt stirbt am 4. Oktober 1669 in Amsterdam. Er wird am 8. Oktober in der Westerkerk begraben."
    ],
    "works": [
      {
        "pid": "rbprodigal2",
        "text": [
          "Der Sohn kniet vor seinem alten Vater, der ihm liebevoll die Hände auf die Schultern legt.",
          "Es ist eines der letzten grossen Bilder Rembrandts.",
          "Das Bild ist in der Eremitage in Sankt Petersburg."
        ],
        "fact": "um 1668. Eremitage, Sankt Petersburg."
      },
      {
        "pid": "rbsimeon69",
        "text": [
          "Der alte Simeon hält das Christuskind in den Armen und dankt Gott.",
          "Das Bild blieb unvollendet in Rembrandts Werkstatt.",
          "Es ist im Nationalmuseum in Stockholm."
        ],
        "fact": "1669. Nationalmuseum, Stockholm."
      },
      {
        "pid": "rbself63",
        "text": [
          "Rembrandt sitzt mit gefalteten Händen da und blickt uns an, alt und ruhig.",
          "Er malt sich im letzten Jahr seines Lebens.",
          "Das Bild ist in der National Gallery in London."
        ],
        "fact": "1669. National Gallery, London."
      },
      {
        "pid": "rbself69",
        "text": [
          "In seinem letzten Selbstbildnis trägt Rembrandt eine helle Kappe, das Gesicht leuchtet warm.",
          "Es ist ein stiller Abschied.",
          "Das Bild ist im Mauritshuis in Den Haag."
        ],
        "fact": "1669. Mauritshuis, Den Haag."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
