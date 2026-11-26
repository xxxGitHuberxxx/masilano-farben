// v9.6 Rembrandt life journey, Part 1 (1606–1642).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no quotations.
// No nudes or near-nudes; the Anatomy Lesson is only mentioned in text; no death-bed images.
(function () {
  var works = [
  {
    "id": "rbspectacles",
    "title": "Der Brillenverkäufer",
    "artist": "Rembrandt van Rijn",
    "year": "um 1624–1625",
    "museum": "Museum De Lakenhal, Leiden",
    "source": "Wikimedia Commons: «Sight, by Rembrandt.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbhearing",
    "title": "Drei Musiker (Allegorie des Hörens)",
    "artist": "Rembrandt van Rijn",
    "year": "um 1624–1625",
    "museum": "The Leiden Collection, New York",
    "source": "Wikimedia Commons: «Hearing, by Rembrandt.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rboldwoman",
    "title": "Lesende alte Frau",
    "artist": "Rembrandt van Rijn",
    "year": "1631",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Oude lezende vrouw, waarschijnlijk de profetes Hanna Rijksmuseum SK-A-3066.jpeg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbgoldchain",
    "title": "Alter Mann mit goldener Kette",
    "artist": "Rembrandt van Rijn",
    "year": "um 1631",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn - Old Man with a Gold Chain - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbhistory",
    "title": "Historienbild",
    "artist": "Rembrandt van Rijn",
    "year": "1626",
    "museum": "Museum De Lakenhal, Leiden",
    "source": "Wikimedia Commons: «Rembrandt Historical Painting 1626.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbbalaam",
    "title": "Bileams Eselin",
    "artist": "Rembrandt van Rijn",
    "year": "1626",
    "museum": "Musée Cognacq-Jay, Paris",
    "source": "Wikimedia Commons: «Rembrandt - L'Ânesse du prophète Balaam - J 95 - Musée Cognacq-Jay.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbmusic",
    "title": "Musizierende Gesellschaft",
    "artist": "Rembrandt van Rijn",
    "year": "1626",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Musicerend gezelschap Rijksmuseum SK-A-4674.jpeg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbstudio",
    "title": "Der Maler in seiner Werkstatt",
    "artist": "Rembrandt van Rijn",
    "year": "um 1628",
    "museum": "Museum of Fine Arts, Boston",
    "source": "Wikimedia Commons: «Rembrandt The Artist in his studio.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbjeremiah",
    "title": "Jeremia trauert über die Zerstörung Jerusalems",
    "artist": "Rembrandt van Rijn",
    "year": "1630",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn - Jeremia treurend over de verwoesting van Jeruzalem - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbpeter",
    "title": "Petrus im Gefängnis",
    "artist": "Rembrandt van Rijn",
    "year": "1631",
    "museum": "Israel Museum, Jerusalem",
    "source": "Wikimedia Commons: «Rembrandt van Rijn - St. Peter in Prison (The Apostle Peter Kneeling) - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbsimeon",
    "title": "Simeon im Tempel",
    "artist": "Rembrandt van Rijn",
    "year": "1631",
    "museum": "Mauritshuis, Den Haag",
    "source": "Wikimedia Commons: «Het loflied van Simeon, Rembrandt van Rijn, 1631, Mauritshuis, The Hague.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbpresent",
    "title": "Darbringung im Tempel mit dem Engel",
    "artist": "Rembrandt van Rijn",
    "year": "1630",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, The Presentation in the Temple with the Angel - Small Plate, 1630, NGA 9859.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbself28",
    "title": "Selbstbildnis in jungen Jahren",
    "artist": "Rembrandt van Rijn",
    "year": "um 1628",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn - Zelfportret op jeugdige leeftijd - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbself29",
    "title": "Selbstbildnis",
    "artist": "Rembrandt van Rijn",
    "year": "1629",
    "museum": "Alte Pinakothek, München",
    "source": "Wikimedia Commons: «Rembrandt van Rijn - Zelfportret (1629) - Alte Pinakothek.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbselflaugh",
    "title": "Selbstbildnis mit Kappe, lachend",
    "artist": "Rembrandt van Rijn",
    "year": "1630",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Self-portrait in a Cap, Laughing by Rembrandt RP-P-OB-687.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbselfopen",
    "title": "Selbstbildnis mit Kappe, mit offenem Mund",
    "artist": "Rembrandt van Rijn",
    "year": "1630",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Rembrandt van Rijn, Self-Portrait in a Cap, Open-Mouthed, 1630, NGA 10060.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbruts",
    "title": "Nicolaes Ruts",
    "artist": "Rembrandt van Rijn",
    "year": "1631",
    "museum": "Frick Collection, New York",
    "source": "Wikimedia Commons: «Rembrandt - Portrait of Nicolaes Ruts.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rborient",
    "title": "Mann in orientalischem Kostüm",
    "artist": "Rembrandt van Rijn",
    "year": "1632",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Man in Oriental Costume (\"The Noble Slav\") MET DP146479.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rblooten",
    "title": "Marten Looten",
    "artist": "Rembrandt van Rijn",
    "year": "1632",
    "museum": "Los Angeles County Museum of Art",
    "source": "Wikimedia Commons: «Maerten Looten, by Rembrandt van Rijn.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbwten",
    "title": "Johannes Wtenbogaert",
    "artist": "Rembrandt van Rijn",
    "year": "1633",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn - Portret van Johannes Wtenbogaert (1557-1644), Remonstrants predikant - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbrising",
    "title": "Mann, der sich vom Stuhl erhebt",
    "artist": "Rembrandt van Rijn",
    "year": "1633",
    "museum": "Taft Museum of Art, Cincinnati",
    "source": "Wikimedia Commons: «Rembrandt - Portrait of a Man Rising from his Chair - 1633.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbfan",
    "title": "Junge Frau mit Fächer",
    "artist": "Rembrandt van Rijn",
    "year": "1633",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Portrait of a Young Woman with a Fan MET DP121328.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbjoseph",
    "title": "Josef erzählt seine Träume",
    "artist": "Rembrandt van Rijn",
    "year": "um 1633",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Jozef vertelt zijn dromen aan zijn ouders en zijn broers Rijksmuseum SK-A-3477.jpeg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbbellona",
    "title": "Bellona",
    "artist": "Rembrandt van Rijn",
    "year": "1633",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Bellona, by Rembrandt van Rijn.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbself33",
    "title": "Selbstbildnis mit Samtbarett",
    "artist": "Rembrandt van Rijn",
    "year": "1634",
    "museum": "Gemäldegalerie, Berlin",
    "source": "Wikimedia Commons: «Rembrandt - Self-Portrait with Velvet Beret - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbflora",
    "title": "Flora",
    "artist": "Rembrandt van Rijn",
    "year": "1634",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Harmensz van Rijn Rembrandt - Флора - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbprodigal",
    "title": "Rembrandt und Saskia im Gleichnis vom verlorenen Sohn",
    "artist": "Rembrandt van Rijn",
    "year": "um 1635",
    "museum": "Gemäldegalerie Alte Meister, Dresden",
    "source": "Wikimedia Commons: «Rembrandt - Rembrandt en Saskia in de parabel van de verloren zoon (ca. 1635).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbselfsaskia",
    "title": "Selbstbildnis mit Saskia",
    "artist": "Rembrandt van Rijn",
    "year": "1636",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Zelfportret met Saskia, RP-P-OB-34.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbminerva",
    "title": "Minerva in ihrem Studierzimmer",
    "artist": "Rembrandt van Rijn",
    "year": "1635",
    "museum": "The Leiden Collection, New York",
    "source": "Wikimedia Commons: «Minerva in Her Study, Rembrandt, 1635, The Leiden Collection.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbbelshazzar",
    "title": "Das Gastmahl des Belsazar",
    "artist": "Rembrandt van Rijn",
    "year": "um 1636–1638",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Belshazzar’s feast, by Rembrandt.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbstandard",
    "title": "Der Fahnenträger",
    "artist": "Rembrandt van Rijn",
    "year": "1636",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «The Standard Bearer (Rembrandt).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbpancake",
    "title": "Die Pfannkuchenbäckerin",
    "artist": "Rembrandt van Rijn",
    "year": "1635",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «De koekenbakster De pannenkoekenbakster, RP-P-1961-1056.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbelephant",
    "title": "Ein Elefant",
    "artist": "Rembrandt van Rijn",
    "year": "1637",
    "museum": "Albertina, Wien",
    "source": "Wikimedia Commons: «Rembrandt Harmenszoon van Rijn - An Elephant, 1637 - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbcottages",
    "title": "Häuser unter einem Gewitterhimmel",
    "artist": "Rembrandt van Rijn",
    "year": "um 1635",
    "museum": "Albertina, Wien",
    "source": "Wikimedia Commons: «Rembrandt Harmenszoon van Rijn - Cottages under a Stormy Sky, c. 1635 - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbself1639",
    "title": "Selbstbildnis, auf eine Steinbrüstung gelehnt",
    "artist": "Rembrandt van Rijn",
    "year": "1639",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Zelfportret, leunend op een balustrade Zelfportret met de onderarm leunend op een stenen dorpel, RP-P-OB-37.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbself1640",
    "title": "Selbstbildnis mit 34 Jahren",
    "artist": "Rembrandt van Rijn",
    "year": "1640",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Rembrandt van Rijn - Zelfportret (1640) - National Gallery, London.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbmariatrip",
    "title": "Maria Trip",
    "artist": "Rembrandt van Rijn",
    "year": "1639",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Portret van een vrouw, mogelijk Maria Trip Rijksmuseum SK-C-597.jpeg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbgoldweigher",
    "title": "Jan Uytenbogaert, der Goldwäger",
    "artist": "Rembrandt van Rijn",
    "year": "1639",
    "museum": "Bibliothèque nationale de France, Paris",
    "source": "Wikimedia Commons: «Utenbogaerd - estampe - Rembrandt. f. 1639. (sig.) - btv1b105234470.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbamsterdam",
    "title": "Ansicht von Amsterdam",
    "artist": "Rembrandt van Rijn",
    "year": "um 1640",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Gezicht op Amsterdam uit het noordwesten, RP-P-OB-12.439.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbwindmill",
    "title": "Die Windmühle",
    "artist": "Rembrandt van Rijn",
    "year": "1641",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Molen in een landschap The windmill, RP-P-1968-175.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbtobias",
    "title": "Der Engel verlässt die Familie des Tobias",
    "artist": "Rembrandt van Rijn",
    "year": "1641",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «De engel verlaat het gezin van Tobias, RP-P-1961-1001.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbstonebridge",
    "title": "Die steinerne Brücke",
    "artist": "Rembrandt van Rijn",
    "year": "um 1638",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «Rembrandt Harmensz. van Rijn - De stenen brug - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbdoomer",
    "title": "Herman Doomer",
    "artist": "Rembrandt van Rijn",
    "year": "1640",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «Herman Doomer (born about 1595, died 1650) MET DP145921.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "rbmartens",
    "title": "Baertje Martens",
    "artist": "Rembrandt van Rijn",
    "year": "um 1640",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Baertje Martens, by Rembrandt van Rijn.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbanslo",
    "title": "Der Prediger Cornelis Anslo und seine Frau",
    "artist": "Rembrandt van Rijn",
    "year": "1641",
    "museum": "Gemäldegalerie, Berlin",
    "source": "Wikimedia Commons: «Rembrandt - The Mennonite Preacher Anslo and his Wife - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbdavidjon",
    "title": "David und Jonathan",
    "artist": "Rembrandt van Rijn",
    "year": "1642",
    "museum": "Eremitage, Sankt Petersburg",
    "source": "Wikimedia Commons: «Harmensz van Rijn Rembrandt - Давид и Ионафан - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "rbnightwatch",
    "title": "Die Nachtwache",
    "artist": "Rembrandt van Rijn",
    "year": "1642",
    "museum": "Rijksmuseum, Amsterdam",
    "source": "Wikimedia Commons: «The Nightwatch by Rembrandt - Rijksmuseum.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "rembrandt",
  "name": "Rembrandt",
  "title": "Rembrandts Lebensweg",
  "life": "1606–1669",
  "part": "Teil 1 · 1606–1642",
  "subtitle": "Von der Mühle in Leiden bis zur Nachtwache",
  "cover": "rbself29",
  "intro": "Rembrandt Harmenszoon van Rijn wird am 15. Juli 1606 in Leiden geboren, als Sohn eines Müllers. Dieser Weg folgt ihm von der Lateinschule und der Lehre bei Swanenburgh und Lastman über die Werkstatt mit Jan Lievens und die frühen Selbstbildnisse, den Umzug nach Amsterdam und die Heirat mit Saskia bis zum Haus in der Breestraat und zur Nachtwache 1642.",
  "ending": [
    "1642 vollendet Rembrandt die Nachtwache. Im Juni desselben Jahres stirbt Saskia, erst 29 Jahre alt; Rembrandt bleibt mit dem kleinen Titus zurück.",
    "Im nächsten Teil folgen Hendrickje Stoffels, die schweren Jahre der Schulden und des Konkurses, die späten Selbstbildnisse und sein Tod am 4. Oktober 1669 in Amsterdam."
  ],
  "epilogue": "Im nächsten Teil folgen Hendrickje Stoffels, die schweren Jahre der Schulden und des Konkurses, die späten Selbstbildnisse und sein Tod am 4. Oktober 1669 in Amsterdam.",
  "map": {
    "viewBox": "0 0 200 200",
    "lands": [
      "M56,40 C84,20 132,14 150,30 C162,48 150,70 132,78 C150,96 156,132 140,160 C120,184 84,182 66,164 C50,146 52,118 58,96 C46,80 42,58 56,40 Z"
    ]
  },
  "stations": [
    {
      "id": "rbleiden",
      "place": "Kindheit in Leiden",
      "when": "1606–1624",
      "map": {
        "x": 70,
        "y": 128
      },
      "mapLabel": "Leiden",
      "intro": [
        "Rembrandt Harmenszoon van Rijn wird am 15. Juli 1606 in Leiden geboren, als neuntes Kind des Müllers Harmen Gerritszoon van Rijn und von Neeltje Willemsdochter. Die Familie wohnt gegenüber der Mühle am Rhein, nach der sie sich van Rijn nennt.",
        "Von 1613 bis 1620 besucht er die Lateinschule. Im Mai 1620 schreibt er sich an der Universität Leiden ein, bleibt aber nicht beim Studium. Etwa drei Jahre lernt er beim Leidener Maler Jacob van Swanenburgh."
      ],
      "works": [
        {
          "pid": "rbspectacles",
          "text": [
            "Ein Händler hält einem alten Paar eine Brille hin.",
            "Das kleine Bild gehört zu einer Folge über die fünf Sinne, hier das Sehen, und zählt zu Rembrandts frühesten bekannten Werken.",
            "Es ist im Museum De Lakenhal in Leiden."
          ],
          "fact": "um 1624–1625. Museum De Lakenhal, Leiden."
        },
        {
          "pid": "rbhearing",
          "text": [
            "Drei Figuren singen aus einem Notenblatt.",
            "Auch dieses Bild gehört zur frühen Folge der fünf Sinne, hier zum Hören.",
            "Es ist in The Leiden Collection in New York."
          ],
          "fact": "um 1624–1625. The Leiden Collection, New York."
        },
        {
          "pid": "rboldwoman",
          "text": [
            "Eine alte Frau liest in einem grossen Buch, Licht fällt auf die Seiten.",
            "Sie wird meist als Prophetin Hanna gedeutet; das Modell wird oft für Rembrandts Mutter gehalten.",
            "Das Bild ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1631. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbgoldchain",
          "text": [
            "Ein alter Mann mit Federbarett und goldener Kette tritt aus dem Dunkel.",
            "In Leiden malt Rembrandt solche Charakterköpfe nach Modellen aus seiner Umgebung.",
            "Das Bild ist im Art Institute of Chicago."
          ],
          "fact": "um 1631. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "rblastman",
      "place": "Sechs Monate bei Pieter Lastman",
      "when": "1625–1626",
      "map": {
        "x": 98,
        "y": 92
      },
      "mapLabel": "Lastman",
      "intro": [
        "Um 1625 geht Rembrandt für sechs Monate nach Amsterdam zu Pieter Lastman, einem bekannten Maler biblischer und antiker Geschichten. Danach arbeitet er wieder in Leiden als selbständiger Meister.",
        "Seine frühesten datierten Bilder stammen von 1625 und 1626: kleine Historienbilder mit kräftigen Farben und lebhaften Figuren, ganz in der Art Lastmans."
      ],
      "works": [
        {
          "pid": "rbhistory",
          "text": [
            "Vor einem Herrscher drängen sich Soldaten und Würdenträger in bunten Gewändern.",
            "Welche Geschichte gemeint ist, ist bis heute umstritten.",
            "Das Bild ist im Museum De Lakenhal in Leiden."
          ],
          "fact": "1626. Museum De Lakenhal, Leiden."
        },
        {
          "pid": "rbbalaam",
          "text": [
            "Der Prophet Bileam hebt den Stock gegen seine Eselin, die vor einem Engel stehen bleibt.",
            "Das Bild zeigt deutlich den Einfluss von Pieter Lastman.",
            "Es ist im Musée Cognacq-Jay in Paris."
          ],
          "fact": "1626. Musée Cognacq-Jay, Paris."
        },
        {
          "pid": "rbmusic",
          "text": [
            "Eine kleine Gesellschaft in prächtigen Kostümen singt und spielt; vorne liegen Bücher und Instrumente.",
            "Rembrandt malt das Bild mit zwanzig Jahren.",
            "Es ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1626. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbstudio",
          "text": [
            "Ein kleiner Maler steht weit hinten im kahlen Raum und betrachtet eine grosse Staffelei.",
            "Das Bild zeigt eine Werkstatt, wie Rembrandt sie in Leiden hatte.",
            "Es ist im Museum of Fine Arts in Boston."
          ],
          "fact": "um 1628. Museum of Fine Arts, Boston."
        }
      ]
    },
    {
      "id": "rblievens",
      "place": "Die Werkstatt mit Jan Lievens",
      "when": "1626–1631",
      "map": {
        "x": 64,
        "y": 118
      },
      "mapLabel": "Atelier",
      "intro": [
        "In Leiden arbeitet Rembrandt eng mit seinem Freund Jan Lievens zusammen. Ab 1626 macht er auch Radierungen, 1628 nimmt er erste Schüler auf, unter ihnen Gerard Dou.",
        "Ende der 1620er Jahre besucht Constantijn Huygens, Sekretär des Statthalters Friedrich Heinrich, die beiden jungen Maler und bewundert ihre Arbeit. Im April 1630 stirbt Rembrandts Vater."
      ],
      "works": [
        {
          "pid": "rbjeremiah",
          "text": [
            "Der Prophet Jeremia stützt den Kopf in die Hand; im Hintergrund brennt die Stadt.",
            "Ein warmes Licht fällt auf ihn und die Gefässe neben ihm.",
            "Das Bild ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1630. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbpeter",
          "text": [
            "Der Apostel Petrus kniet im Gefängnis und betet, neben ihm liegen die Schlüssel.",
            "Licht aus einem Fenster trifft sein Gesicht und seine Hände.",
            "Das Bild ist im Israel Museum in Jerusalem."
          ],
          "fact": "1631. Israel Museum, Jerusalem."
        },
        {
          "pid": "rbsimeon",
          "text": [
            "In einem riesigen, dunklen Tempel fällt ein Lichtstrahl auf Simeon, Maria und das Kind.",
            "Die vielen Menschen ringsum verschwinden fast im Schatten.",
            "Das Bild ist im Mauritshuis in Den Haag."
          ],
          "fact": "1631. Mauritshuis, Den Haag."
        },
        {
          "pid": "rbpresent",
          "text": [
            "Eine kleine Radierung: Simeon hält das Kind, ein Engel schwebt darüber.",
            "Mit wenigen Linien schafft Rembrandt Raum und Licht.",
            "Dieser Abzug ist in der National Gallery of Art in Washington."
          ],
          "fact": "1630. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "rbmirror",
      "place": "Das eigene Gesicht",
      "when": "1628–1630",
      "map": {
        "x": 76,
        "y": 136
      },
      "mapLabel": "Spiegel",
      "intro": [
        "Schon in Leiden malt und radiert Rembrandt sich immer wieder selbst. Er probiert vor dem Spiegel Licht und Schatten aus, lacht, staunt oder blickt ernst.",
        "Diese kleinen Bildnisse sind Übungen und zugleich Werbung für sein Können. Über vierzig gemalte Selbstbildnisse wird er im Lauf seines Lebens schaffen."
      ],
      "works": [
        {
          "pid": "rbself28",
          "text": [
            "Das Gesicht des jungen Rembrandt liegt fast ganz im Schatten, nur Wange und Ohr sind hell.",
            "Mit dem Pinselstiel kratzt er Locken in die nasse Farbe.",
            "Das Bild ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "um 1628. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbself29",
          "text": [
            "Mit zerzaustem Haar und weissem Kragen blickt der Dreiundzwanzigjährige aus dem Bild.",
            "Licht und Schatten teilen das Gesicht.",
            "Das Bild ist in der Alten Pinakothek in München."
          ],
          "fact": "1629. Alte Pinakothek, München."
        },
        {
          "pid": "rbselflaugh",
          "text": [
            "Rembrandt radiert sich mit breitem Lachen und Kappe.",
            "Solche Gesichtsausdrücke übt er vor dem Spiegel.",
            "Dieser Abzug ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1630. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbselfopen",
          "text": [
            "Mit offenem Mund und weiten Augen schaut Rembrandt, als wäre er erschrocken.",
            "Die Radierung ist eine seiner Ausdrucksstudien.",
            "Dieser Abzug ist in der National Gallery of Art in Washington."
          ],
          "fact": "1630. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "rbamsterdam",
      "place": "Nach Amsterdam",
      "when": "1631–1633",
      "map": {
        "x": 102,
        "y": 84
      },
      "mapLabel": "Amsterdam",
      "intro": [
        "1631 lernt Rembrandt den Amsterdamer Kunsthändler Hendrick van Uylenburgh kennen und wohnt bald in dessen Haus. Er wird schnell zum gefragten Bildnismaler der wachsenden Handelsstadt.",
        "1632 malt er sein erstes Gruppenbildnis, die Anatomie des Dr. Nicolaes Tulp für die Chirurgengilde. Danach folgen viele Aufträge von Kaufleuten, Predigern und ihren Frauen."
      ],
      "works": [
        {
          "pid": "rbruts",
          "text": [
            "Der Kaufmann Nicolaes Ruts trägt einen dicken Pelz und hält einen Brief.",
            "Es ist eines der ersten Bildnisse, die Rembrandt für Amsterdamer Auftraggeber malt.",
            "Das Bild ist in der Frick Collection in New York."
          ],
          "fact": "1631. Frick Collection, New York."
        },
        {
          "pid": "rborient",
          "text": [
            "Ein stattlicher Mann mit Turban und schwerem Mantel steht vor einer hellen Wand.",
            "Solche Kostümbilder sind in Amsterdam beliebt.",
            "Das Bild ist im Metropolitan Museum of Art in New York."
          ],
          "fact": "1632. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "rblooten",
          "text": [
            "Der Kaufmann Marten Looten hält einen Brief in der Hand und blickt ernst aus dem Bild.",
            "Rembrandt malt ihn 1632.",
            "Das Bild ist im Los Angeles County Museum of Art."
          ],
          "fact": "1632. Los Angeles County Museum of Art."
        },
        {
          "pid": "rbwten",
          "text": [
            "Der alte Prediger Johannes Wtenbogaert, ein Führer der Remonstranten, steht im schwarzen Mantel mit weissem Kragen.",
            "Rembrandt malt ihn 1633.",
            "Das Bild ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1633. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbrising",
          "text": [
            "Ein Mann in Schwarz steht gerade vom Stuhl auf und blickt uns an.",
            "Die Bewegung macht das Bildnis lebendig.",
            "Das Bild ist im Taft Museum of Art in Cincinnati."
          ],
          "fact": "1633. Taft Museum of Art, Cincinnati."
        },
        {
          "pid": "rbfan",
          "text": [
            "Eine junge Frau in schwarzem Kleid mit grossem Spitzenkragen hält einen Fächer.",
            "Rembrandt malt sie 1633 als Gegenstück zum Bildnis ihres Mannes.",
            "Das Bild ist im Metropolitan Museum of Art in New York."
          ],
          "fact": "1633. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "rbjoseph",
          "text": [
            "Der junge Josef erzählt seiner Familie von seinen Träumen.",
            "Rembrandt malt die Szene nur in Braun- und Grautönen, als Vorlage für eine Radierung.",
            "Das Blatt ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "um 1633. Rijksmuseum, Amsterdam."
        }
      ]
    },
    {
      "id": "rbsaskia",
      "place": "Saskia",
      "when": "1633–1636",
      "map": {
        "x": 120,
        "y": 34
      },
      "mapLabel": "Friesland",
      "intro": [
        "Im Juni 1633 verlobt sich Rembrandt mit Saskia van Uylenburgh, einer Cousine seines Geschäftspartners Hendrick. Am 22. Juni 1634 heiraten sie in Sint Annaparochie in Friesland.",
        "Saskia wird oft sein Modell, als Flora in Blumen oder an seiner Seite. 1635 mietet das Paar ein Haus in der Nieuwe Doelenstraat in Amsterdam."
      ],
      "works": [
        {
          "pid": "rbbellona",
          "text": [
            "Die römische Kriegsgöttin Bellona steht in Rüstung mit Helm und Schild vor dunklem Grund.",
            "Rembrandt malt sie im Jahr seiner Verlobung.",
            "Das Bild ist im Metropolitan Museum of Art in New York."
          ],
          "fact": "1633. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "rbself33",
          "text": [
            "Rembrandt zeigt sich mit Samtbarett und Pelzkragen, selbstbewusst und erfolgreich.",
            "Es ist das Jahr seiner Hochzeit mit Saskia.",
            "Das Bild ist in der Gemäldegalerie in Berlin."
          ],
          "fact": "1634. Gemäldegalerie, Berlin."
        },
        {
          "pid": "rbflora",
          "text": [
            "Eine junge Frau als Frühlingsgöttin Flora, mit Blumenkranz und Blumenstab.",
            "Saskia hat wahrscheinlich dafür Modell gestanden.",
            "Das Bild ist in der Eremitage in Sankt Petersburg."
          ],
          "fact": "1634. Eremitage, Sankt Petersburg."
        },
        {
          "pid": "rbprodigal",
          "text": [
            "Rembrandt sitzt fröhlich mit Saskia auf dem Schoss und hebt ein Glas.",
            "Er stellt sich als verlorenen Sohn dar, der sein Geld verschwendet.",
            "Das Bild ist in der Gemäldegalerie Alte Meister in Dresden."
          ],
          "fact": "um 1635. Gemäldegalerie Alte Meister, Dresden."
        },
        {
          "pid": "rbselfsaskia",
          "text": [
            "Auf dieser Radierung sitzt Rembrandt am Tisch und zeichnet, hinter ihm Saskia.",
            "Es ist das einzige radierte Doppelbildnis der beiden.",
            "Dieser Abzug ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1636. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbminerva",
          "text": [
            "Die Göttin der Weisheit sitzt im goldenen Mantel an einem Tisch mit Büchern und Globus.",
            "Licht fällt auf ihr Gesicht und die Seiten.",
            "Das Bild ist in The Leiden Collection in New York."
          ],
          "fact": "1635. The Leiden Collection, New York."
        }
      ]
    },
    {
      "id": "rbstories",
      "place": "Grosse Geschichten, kleine Blätter",
      "when": "1635–1638",
      "map": {
        "x": 110,
        "y": 96
      },
      "mapLabel": "Geschichten",
      "intro": [
        "Für den Statthalter Friedrich Heinrich malt Rembrandt ab 1632 eine Folge von Bildern zur Passion Christi. Daneben entstehen grosse, dramatische Szenen aus der Bibel.",
        "Mit Feder und Radiernadel hält er das Leben der Stadt fest: eine Pfannkuchenbäckerin, ein Elefant, der 1637 durch die Niederlande zieht, Häuser unter dem Gewitterhimmel. 1637 zieht die Familie an die Binnen-Amstel."
      ],
      "works": [
        {
          "pid": "rbbelshazzar",
          "text": [
            "Beim Festmahl erscheint eine leuchtende Schrift an der Wand; König Belsazar dreht sich erschrocken um.",
            "Rembrandt malt den Moment voller Bewegung.",
            "Das Bild ist in der National Gallery in London."
          ],
          "fact": "um 1636–1638. National Gallery, London."
        },
        {
          "pid": "rbstandard",
          "text": [
            "Ein Fahnenträger steht stolz mit einer grossen Fahne über der Schulter, mit Federhut und Schärpe.",
            "Rembrandt malt das Bild 1636.",
            "Seit 2022 ist es im Rijksmuseum in Amsterdam."
          ],
          "fact": "1636. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbpancake",
          "text": [
            "Eine alte Frau bäckt auf der Strasse Pfannkuchen, Kinder drängen sich um sie und ein Hund wartet.",
            "Rembrandt hält die Szene in einer Radierung fest.",
            "Dieser Abzug ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1635. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbelephant",
          "text": [
            "1637 zieht eine Elefantenkuh durch die Niederlande, und Rembrandt zeichnet sie mit schwarzer Kreide.",
            "Mit wenigen Strichen zeigt er die faltige Haut.",
            "Die Zeichnung ist in der Albertina in Wien."
          ],
          "fact": "1637. Albertina, Wien."
        },
        {
          "pid": "rbcottages",
          "text": [
            "Dunkle Wolken ziehen über ein paar Bauernhäuser; ein Weg führt ins Licht.",
            "Rembrandt zeichnet mit Feder und Pinsel.",
            "Das Blatt ist in der Albertina in Wien."
          ],
          "fact": "um 1635. Albertina, Wien."
        }
      ]
    },
    {
      "id": "rbbreestraat",
      "place": "Das Haus in der Breestraat",
      "when": "1639–1641",
      "map": {
        "x": 96,
        "y": 76
      },
      "mapLabel": "Breestraat",
      "intro": [
        "1639 kauft Rembrandt für 13’000 Gulden ein grosses Haus in der Breestraat, heute das Museum Het Rembrandthuis. Er darf in Raten zahlen. Im selben Jahr erhält er den Auftrag für die Nachtwache.",
        "Er radiert Landschaften rund um Amsterdam, eine Windmühle und biblische Szenen. Drei Kinder von Rembrandt und Saskia sterben kurz nach der Geburt; im September 1641 wird ihr Sohn Titus getauft."
      ],
      "works": [
        {
          "pid": "rbself1639",
          "text": [
            "Rembrandt lehnt sich auf eine Steinbrüstung, mit Barett und reichem Mantel.",
            "Die Radierung entsteht im Jahr, in dem er das Haus in der Breestraat kauft.",
            "Dieser Abzug ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1639. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbself1640",
          "text": [
            "Ein Jahr später malt er sich in derselben Haltung, ruhig und vornehm gekleidet.",
            "Er ist 34 Jahre alt und auf der Höhe seines Erfolgs.",
            "Das Bild ist in der National Gallery in London."
          ],
          "fact": "1640. National Gallery, London."
        },
        {
          "pid": "rbmariatrip",
          "text": [
            "Die junge Maria Trip aus einer reichen Amsterdamer Familie trägt ein schwarzes Kleid mit Spitzenkragen und Perlen.",
            "Rembrandt malt jede Falte der Spitze.",
            "Das Bild ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1639. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbgoldweigher",
          "text": [
            "Der Steuereinnehmer Jan Uytenbogaert sitzt an einem Tisch voller Geldsäcke.",
            "Rembrandt radiert ihn 1639.",
            "Dieser Abzug ist in der Bibliothèque nationale de France in Paris."
          ],
          "fact": "1639. Bibliothèque nationale de France, Paris."
        },
        {
          "pid": "rbamsterdam",
          "text": [
            "Über flache Wiesen sieht man in der Ferne Türme, Mühlen und Schiffe von Amsterdam.",
            "Die kleine Radierung zeigt die Stadt von Nordwesten.",
            "Dieser Abzug ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "um 1640. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbwindmill",
          "text": [
            "Eine grosse Windmühle steht auf dem Stadtwall, daneben ein Häuschen.",
            "Rembrandt radiert sie 1641.",
            "Dieser Abzug ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1641. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbtobias",
          "text": [
            "Der Engel Rafael fliegt davon, die Familie des Tobias kniet staunend vor dem Haus.",
            "Rembrandt radiert die biblische Geschichte 1641.",
            "Dieser Abzug ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "1641. Rijksmuseum, Amsterdam."
        },
        {
          "pid": "rbstonebridge",
          "text": [
            "Eine kleine Brücke liegt am Fluss, dunkle Bäume stehen im Sonnenlicht vor einem Gewitterhimmel.",
            "Es ist eine von wenigen gemalten Landschaften Rembrandts.",
            "Das Bild ist im Rijksmuseum in Amsterdam."
          ],
          "fact": "um 1638. Rijksmuseum, Amsterdam."
        }
      ]
    },
    {
      "id": "rbnight",
      "place": "Die Nachtwache",
      "when": "1640–1642",
      "map": {
        "x": 90,
        "y": 98
      },
      "mapLabel": "Nachtwache",
      "intro": [
        "Um 1640 malt Rembrandt Bildnispaare reicher Amsterdamer und 1641 den Prediger Cornelis Anslo im Gespräch mit seiner Frau. 1642 entsteht David und Jonathan.",
        "1642 vollendet er das grosse Gruppenbild der Schützenkompanie von Frans Banninck Cocq für den Saal der Kloveniersdoelen. Das Bild, heute als Nachtwache bekannt, ist voller Bewegung, Licht und Schatten."
      ],
      "works": [
        {
          "pid": "rbdoomer",
          "text": [
            "Herman Doomer war Rahmenmacher und Möbeltischler in Amsterdam.",
            "Rembrandt malt ihn mit breitem Hut und weissem Kragen.",
            "Das Bild ist im Metropolitan Museum of Art in New York."
          ],
          "fact": "1640. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "rbmartens",
          "text": [
            "Baertje Martens war die Frau von Herman Doomer.",
            "Ihr Bildnis ist das Gegenstück zu seinem.",
            "Das Bild ist in der Eremitage in Sankt Petersburg."
          ],
          "fact": "um 1640. Eremitage, Sankt Petersburg."
        },
        {
          "pid": "rbanslo",
          "text": [
            "Der mennonitische Prediger Cornelis Anslo spricht über einem aufgeschlagenen Buch zu seiner Frau Aeltje.",
            "Rembrandt zeigt, wie er mit Worten überzeugt.",
            "Das Bild ist in der Gemäldegalerie in Berlin."
          ],
          "fact": "1641. Gemäldegalerie, Berlin."
        },
        {
          "pid": "rbdavidjon",
          "text": [
            "Die Freunde David und Jonathan umarmen sich zum Abschied vor einer weiten Landschaft.",
            "Rembrandt malt die biblische Szene 1642.",
            "Das Bild ist in der Eremitage in Sankt Petersburg."
          ],
          "fact": "1642. Eremitage, Sankt Petersburg."
        },
        {
          "pid": "rbnightwatch",
          "text": [
            "Hauptmann Frans Banninck Cocq gibt das Zeichen zum Abmarsch, seine Schützen setzen sich in Bewegung.",
            "Ein helles Mädchen und viel Schatten machen das Gruppenbild lebendig.",
            "Es hängt im Rijksmuseum in Amsterdam."
          ],
          "fact": "1642. Rijksmuseum, Amsterdam."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
