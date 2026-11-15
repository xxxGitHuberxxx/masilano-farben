// v8.1 Albert Anker life journey, Part 1 (1831–c. 1888).
// Appends to PATH_WORKS / PATHS; does not rewrite Van Gogh, Monet, Hokusai or Klimt.
// Reuses the gallery work strickend (Strickendes Mädchen an der Wiege, 1885) by pid only (not listed in works[]).
// Quotes are self-translated from documented German wording (Centre Albert Anker).
(function () {
  var works = [
  {
    "id": "aself52",
    "title": "Selbstbildnis",
    "artist": "Albert Anker",
    "year": "1852",
    "museum": "Centre Albert Anker, Ins",
    "source": "Wikimedia Commons: «Anker Selbstbildnis 1852.jpeg», gemeinfrei (Public Domain)"
  },
  {
    "id": "sonntag",
    "title": "Sonntagnachmittag",
    "artist": "Albert Anker",
    "year": "1861",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker Sonntagnachmittag 1861.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "klfreundin",
    "title": "Die kleine Freundin",
    "artist": "Albert Anker",
    "year": "1862",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker Die kleine Freundin 1862.png», gemeinfrei (Public Domain)"
  },
  {
    "id": "ataufe",
    "title": "Die Taufe",
    "artist": "Albert Anker",
    "year": "1864",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Die Taufe (1864).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schreibunt",
    "title": "Schreibunterricht III",
    "artist": "Albert Anker",
    "year": "1865",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker Schreibunterricht 1865.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "imwald",
    "title": "Schlafendes Mädchen im Walde",
    "artist": "Albert Anker",
    "year": "1865",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker, ragazzina addormentata nel bosco, 1865.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "huehner",
    "title": "Mädchen, Hühner fütternd",
    "artist": "Albert Anker",
    "year": "1865",
    "museum": "Musée d’art et d’histoire, Neuchâtel",
    "source": "Wikimedia Commons: «Anker Mädchen Hühner fütternd 1865.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rothaube",
    "title": "Mädchen mit roter Haube",
    "artist": "Albert Anker",
    "year": "um 1866",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker Mädchen mit roter Haube c1866.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "louisepuppe",
    "title": "Louise Anker mit Puppe",
    "artist": "Albert Anker",
    "year": "1867",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Louise Anker mit Puppe (1867) - Albert Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schulexamen",
    "title": "Das Schulexamen",
    "artist": "Albert Anker",
    "year": "1862",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Das Schulexamen (1862).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schulstube",
    "title": "Schulstube",
    "artist": "Albert Anker",
    "year": "1862",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Schulstube.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "knabetisch",
    "title": "Knabe bei Tisch II",
    "artist": "Albert Anker",
    "year": "1869",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Knabe bei Tisch II (1869).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "marionetten",
    "title": "Die Marionetten",
    "artist": "Albert Anker",
    "year": "1869",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Die Marionetten (1869) - Albert Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kaffeetrink",
    "title": "Mädchen, Kaffee trinkend",
    "artist": "Albert Anker",
    "year": "1870",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Mädchen, Kaffee trinkend (1870).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schulspaz",
    "title": "Der Schulspaziergang",
    "artist": "Albert Anker",
    "year": "1872",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Der Schulspaziergang (1872).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schneebar",
    "title": "Der Schneebär",
    "artist": "Albert Anker",
    "year": "1873",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Der Schneebär (1873) - Albert Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "seifen",
    "title": "Der Seifenbläser",
    "artist": "Albert Anker",
    "year": "1873",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker Seifenbläser 1873.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "teeschmelz",
    "title": "Tee und Schmelzbrötchen",
    "artist": "Albert Anker",
    "year": "1873",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Tee und Schmelzbrötchen (1873).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kaffeestill",
    "title": "Stillleben mit Kaffee",
    "artist": "Albert Anker",
    "year": "1877",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Stillleben mit Kaffee (1877).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kaffeecognac82",
    "title": "Stillleben mit Kaffeegedeck und Cognacflasche",
    "artist": "Albert Anker",
    "year": "1882",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker Stilleben3.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "aplat",
    "title": "Fayence-Platte mit Krieger",
    "artist": "Albert Anker",
    "year": "1869",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Plat, ODUT1621.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "acharlemagne",
    "title": "Charlemagne",
    "artist": "Albert Anker",
    "year": "um 1870–1875",
    "museum": "Petit Palais, Paris",
    "source": "Wikimedia Commons: «Charlemagne, ODUT1785(4).jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "milchsuppe",
    "title": "Die Kappeler Milchsuppe",
    "artist": "Albert Anker",
    "year": "1869",
    "museum": "Kunsthaus Zürich",
    "source": "Wikimedia Commons: «Albert Anker - Die Kappeler Milchsuppe (1869).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bourbaki",
    "title": "Die Bourbakis",
    "artist": "Albert Anker",
    "year": "1871",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker Bourbakis 1871.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "gemeindeschr",
    "title": "Der Gemeindeschreiber",
    "artist": "Albert Anker",
    "year": "1874",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker Der Gemeindeschreiber.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "liederheimat",
    "title": "Das Lied der Heimat",
    "artist": "Albert Anker",
    "year": "1874",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Das Lied der Heimat (1874).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "quacksalber",
    "title": "Der Quacksalber",
    "artist": "Albert Anker",
    "year": "1879",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker, Albert — Der Quacksalber — 1879.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "caisse",
    "title": "Der ehemalige Verwaltungsrat der Sparkasse Erlach",
    "artist": "Albert Anker",
    "year": "1881",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker Ancien conseil d'administration de la Caisse d'Epargne Cerlier.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "stickerinnen",
    "title": "Die kleinen Stickerinnen",
    "artist": "Albert Anker",
    "year": "1875",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Die kleinen Stickerinnen (1875) - Albert Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "spitzenhaube",
    "title": "Lesendes Mädchen mit Spitzenhaube",
    "artist": "Albert Anker",
    "year": "1875",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Lesendes Mädchen mit Spitzenhaube (1875) - Albert Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schreibknabe",
    "title": "Schreibender Knabe mit Schwesterchen I",
    "artist": "Albert Anker",
    "year": "1875",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker Schreibender Knabe mit Schwesterchen I 1875.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "marie75",
    "title": "Marie Anker",
    "artist": "Albert Anker",
    "year": "um 1875",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Marie Anker um 1875.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "laenderkinder",
    "title": "Länderkinder",
    "artist": "Albert Anker",
    "year": "1876",
    "museum": "Musée d’art et d’histoire, Neuchâtel",
    "source": "Wikimedia Commons: «Anker Länderkinder 1876.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "pelzmuetze",
    "title": "Schulknabe mit Pelzmütze in Schneelandschaft",
    "artist": "Albert Anker",
    "year": "1877",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker, Albert - Schulknabe mit Pelzmütze in Schneelandschaft - 1877.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schulmaedchen",
    "title": "Schulmädchen mit Schiefertafel und Nähkörbchen",
    "artist": "Albert Anker",
    "year": "1878",
    "museum": "Musée d’art et d’histoire, Neuchâtel",
    "source": "Wikimedia Commons: «Albert Anker-Schulmädchen mit Schiefertafel und Nähkörbchen, 1878.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "cecile78",
    "title": "Cécile Anker im Kinderstuhl",
    "artist": "Albert Anker",
    "year": "1878",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Cécile Anker im Kinderstuhl (1878) - Albert Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "turnstunde",
    "title": "Turnstunde in Ins",
    "artist": "Albert Anker",
    "year": "1879",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker Turnstunde in Ins 1879.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kinderfrueh",
    "title": "Kinderfrühstück",
    "artist": "Albert Anker",
    "year": "1879",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker Kinderfrühstück 1879.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "marie80",
    "title": "Marie Anker",
    "artist": "Albert Anker",
    "year": "1880",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker Marie Anker 1880.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "maedchenkatze",
    "title": "Mädchen mit Katze",
    "artist": "Albert Anker",
    "year": "1881",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Mädchen mit Katze (1881).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schwester83",
    "title": "Die beiden Schwestern",
    "artist": "Albert Anker",
    "year": "1883",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Anker, Albert - Die beiden Schwestern - 1883.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "rotkaeppchen",
    "title": "Rotkäppchen",
    "artist": "Albert Anker",
    "year": "1883",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Rotkäppchen (1883) - Albert Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "gotthelfleserin",
    "title": "Eine Gotthelf-Leserin",
    "artist": "Albert Anker",
    "year": "1884",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Eine Gotthelf-Leserin.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mariette",
    "title": "Mariette aux fraises",
    "artist": "Albert Anker",
    "year": "1884",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Mariette aux fraises-Albert Anker, 1884.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "roterweste",
    "title": "Knabe mit roter Weste",
    "artist": "Albert Anker",
    "year": "1885",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Knabe mit roter Weste (1885).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kartoffel",
    "title": "Kartoffelschälendes Mädchen",
    "artist": "Albert Anker",
    "year": "1886",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Albert Anker - Kartoffelschälendes Mädchen (1886).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "fleissig",
    "title": "Fleissig",
    "artist": "Albert Anker",
    "year": "1886",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Fleissig--Appliquée by Albert Anker, 1886.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "cecile86",
    "title": "Cécile Anker",
    "artist": "Albert Anker",
    "year": "1886",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Cécile Anker 1886.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "ersteschritte",
    "title": "Die ersten Schritte",
    "artist": "Albert Anker",
    "year": "1888",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Die ersten Schritte (1888) - Albert Anker (.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "anker",
  "name": "Albert Anker",
  "title": "Albert Ankers Lebensweg",
  "life": "1831–1910",
  "part": "Teil 1 · Bis in die 1880er Jahre",
  "subtitle": "Von Ins nach Paris und wieder nach Ins",
  "cover": "schulexamen",
  "intro": "Reise mit Albert Anker durch die erste Hälfte seines Weges: von der Kindheit in Ins und den Schuljahren in Neuchâtel über das Theologiestudium in Bern und Halle, die Lehre bei Charles Gleyre in Paris, die Heirat, die Goldmedaille von 1866, die Fayencen für Théodore Deck und die Jahre im Grossen Rat bis zu den Kinder- und Dorfbildern der 1880er Jahre. Kurze Stationen, Bilder zum Ausmalen und zwei überlieferte Stimmen: ein Brief an den Schulfreund Auguste Bachelin und eine Nachricht an seine Frau aus Murten. Dieser erste Teil reicht bis um 1888.",
  "ending": [
    "1885 malt Anker das «Strickende Mädchen an der Wiege», 1888 «Die ersten Schritte». 1878 ist er Ritter der französischen Ehrenlegion geworden; den Winter verbringt die Familie noch in Paris, den Sommer in Ins.",
    "Der Weg geht weiter. 1890 gibt Anker den Pariser Wohnsitz auf. Es folgen die grossen Bilder der 1890er Jahre – darunter die «Dorfschule von 1848» – und später die Gotthelf-Illustrationen. Ende September 1901 erleidet er einen Schlaganfall. Am 16. Juli 1910 stirbt er in Ins. Davon erzählt der nächste Teil."
  ],
  "epilogue": "1885 entsteht das «Strickende Mädchen an der Wiege», 1888 «Die ersten Schritte». 1890 gibt Anker den Pariser Wohnsitz auf. Die 1890er Jahre, die Dorfschule, der Schlaganfall von 1901 und der Tod in Ins 1910 gehören zum nächsten Teil.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M6,62 C16,42 42,40 62,54 C74,64 66,90 42,100 C22,108 4,90 6,62 Z",
      "M102,72 C122,52 164,48 196,60 C218,70 226,94 202,114 C172,132 128,130 108,110 C94,96 92,82 102,72 Z"
    ]
  },
  "stations": [
    {
      "id": "ankerins",
      "place": "Ins und Neuchâtel · Kindheit, Schule, Theologie",
      "when": "1831–1854",
      "map": {
        "x": 148,
        "y": 92
      },
      "mapLabel": "Ins",
      "intro": [
        "Albert Anker wird am 1. April 1831 in Ins im Berner Seeland geboren, als zweites von drei Kindern des Tierarztes Samuel Anker und der Marianne Elisabeth Gatschet. 1836 zieht die Familie nach Neuchâtel. Dort geht er zur Schule; von 1845 bis 1848 erhält er privaten Zeichenunterricht bei Louis Wallinger.",
        "1847 sterben der Bruder Rudolf und die Mutter. 1849 bis 1851 besucht Anker das Gymnasium in Bern, macht die Matura und beginnt ein Theologiestudium an der Universität Bern. Im September 1851 reist er erstmals nach Paris. Im Juni 1852 stirbt die Schwester Luise. Von 1852 bis 1854 studiert er Theologie in Halle; im Herbst 1854 geht er mit der Erlaubnis des Vaters als Maler nach Paris."
      ],
      "works": [
        {
          "pid": "aself52",
          "text": [
            "Ein junger Mann im dunklen Rock, die Stirn frei, der Blick geradeaus. Die Zeichnung trägt die Aufschrift «Sept. 1852» – Albert Anker ist einundzwanzig.",
            "In diesem Jahr studiert er Theologie, zuerst in Bern, dann in Halle. Die Zeichnung bewahrt das Centre Albert Anker in Ins."
          ],
          "fact": "Zeichnung, September 1852. Centre Albert Anker, Ins.",
          "quote": {
            "text": "Was ist Kunst? in erster Linie besteht die Kunst nicht in der Nachahmung, sondern in zwei Punkten: zum ersten muss man sich in seinen Vorstellungen ein Ideal bilden, zum zweiten muss man dies Ideal den Augen der Mitmenschen darstellen, ihm eine Gestalt schaffen, welche unserem Schauen und Hören zugänglich wird.",
            "cite": "Brief an Auguste Bachelin, 9. Juni 1849. Centre Albert Anker, Ins."
          }
        }
      ]
    },
    {
      "id": "ankerparis",
      "place": "Paris · Charles Gleyre und die Beaux-Arts",
      "when": "1854–1861",
      "map": {
        "x": 36,
        "y": 70
      },
      "mapLabel": "Paris",
      "intro": [
        "Im Herbst 1854 wird Anker Schüler des Waadtländer Klassizisten Charles Gleyre in Paris. Von 1855 bis 1860 besucht er die École Impériale et Spéciale des Beaux-Arts. Ab 1856 stellt er bei den Turnus-Ausstellungen des Schweizerischen Kunstvereins aus, ab 1859 regelmässig im Pariser Salon – bis 1885.",
        "1860 stirbt der Vater. Danach verbringt Anker die Sommer in Ins und die Winter in Paris; ab 1865 reist die Familie mit. 1861 geht er mit François Ehrmann nach Italien. «Sonntagnachmittag» und «Die kleine Freundin» gehören zu den ersten selbständigen Bildern nach den Lehrjahren."
      ],
      "works": [
        {
          "pid": "sonntag",
          "text": [
            "In einer Stube sitzen alte und junge Leute beisammen. Einer liest vor, andere hören zu – ein ruhiger Sonntag im Haus.",
            "Das Bild entsteht 1861, kurz nach den Lehrjahren in Paris. Anker zeigt schon hier das Dorfleben, dem er treu bleibt."
          ],
          "fact": "Öl auf Leinwand, 1861. Privatbesitz."
        },
        {
          "pid": "klfreundin",
          "text": [
            "Ein Mädchen in dunklem Kleid steht bei einem kleineren Kind. Die beiden halten sich, als gehörten sie fest zusammen.",
            "Das Bild stammt von 1862. Anker malt Kinder nicht als zierliche Staffage, sondern als Gegenüber mit eigenem Ernst."
          ],
          "fact": "Öl auf Leinwand, 1862. Privatbesitz."
        }
      ]
    },
    {
      "id": "ankerfamilie",
      "place": "Ins und Paris · Heirat und Goldmedaille",
      "when": "1864–1867",
      "map": {
        "x": 142,
        "y": 80
      },
      "mapLabel": "Familie",
      "intro": [
        "1864 heiratet Anker Anna Rüfli (1835–1917). Das Paar hat sechs Kinder: Louise 1865, Rudolf 1867, Emil 1870, Marie 1872, Moritz 1874 und Cécile 1877. Rudolf stirbt 1869, Emil 1871, noch im frühen Kindesalter.",
        "1866 erhält Anker am Pariser Salon eine Goldmedaille für «Schlafendes Mädchen im Walde» und «Schreibunterricht», beide von 1865. Die Familie lebt im Rhythmus von Ins im Sommer und Paris im Winter."
      ],
      "works": [
        {
          "pid": "ataufe",
          "text": [
            "In einer Dorfstube ist die Familie zur Taufe versammelt. Ein Geistlicher hält das Kind, die anderen stehen und sitzen dicht beieinander.",
            "Das Bild entsteht 1864, im Jahr von Ankers Heirat mit Anna Rüfli. Es gehört zu den frühen grossen Interieurs aus Ins."
          ],
          "fact": "Öl auf Leinwand, 1864. Privatbesitz."
        },
        {
          "pid": "schreibunt",
          "text": [
            "Zwei blonde Kinder beugen sich über ein Blatt. Das ältere führt die Hand, das jüngere schaut genau hin – eine Stunde des Schreibenlernens.",
            "Das Bild gehört zu den Schreibunterricht-Bildern von 1865. Für «Schreibunterricht» und «Schlafendes Mädchen im Walde» erhält Anker 1866 eine Goldmedaille am Pariser Salon."
          ],
          "fact": "Öl auf Leinwand, 1865. Privatbesitz."
        },
        {
          "pid": "imwald",
          "text": [
            "Ein Mädchen schläft am Fuss eines Baumes, den Arm an einem Bündel Reisig. Das Kleid ist einfach, die Füsse bar, der Wald um sie dunkel und still.",
            "Das Bild von 1865 gehört zu den beiden Werken, für die Anker 1866 am Pariser Salon eine Goldmedaille erhält."
          ],
          "fact": "Öl auf Leinwand, 1865. Sammlung nicht ermittelt."
        },
        {
          "pid": "huehner",
          "text": [
            "Auf einem Holzbalkon steht ein Kind mit einem Teller und füttert die Hühner. Hinter ihm öffnet sich die Stube, davor der Hof.",
            "Das Bild von 1865 hängt im Musée d’art et d’histoire in Neuchâtel. Es zeigt den Alltag, den Anker in Ins vor der Tür hat."
          ],
          "fact": "Öl auf Leinwand, 1865. Musée d’art et d’histoire, Neuchâtel."
        },
        {
          "pid": "rothaube",
          "text": [
            "Ein Kind blickt ruhig zur Seite, um den Kopf eine rote, fest gebundene Haube, um die Schultern ein olivgrünes Tuch mit violettem Streifen.",
            "Das Bildnis entsteht um 1866, in den Jahren nach der Goldmedaille, als Anker seine Sprache der Kinderporträts festigt."
          ],
          "fact": "Öl auf Leinwand, um 1866. Privatbesitz."
        },
        {
          "pid": "louisepuppe",
          "text": [
            "Ein kleines Mädchen in gemustertem Kleid hält eine Puppe fest im Arm. Es ist Louise, 1865 geboren, das erste Kind von Albert und Anna Anker.",
            "Das Bildnis entsteht 1867, als Louise etwa zwei Jahre alt ist. Anker malt die eigenen Kinder immer wieder, ohne sie zu verkünsteln."
          ],
          "fact": "Öl auf Leinwand, 1867. Privatbesitz."
        }
      ]
    },
    {
      "id": "ankerdorf",
      "place": "Ins · Schule und Dorfleben",
      "when": "1862–1873",
      "map": {
        "x": 136,
        "y": 100
      },
      "mapLabel": "Dorf",
      "intro": [
        "Schon früh malt Anker Schulstuben, Spaziergänge, Spiele und den Winter auf dem Dorfplatz. «Das Schulexamen» und die «Schulstube» entstehen 1862; später folgen der Schulspaziergang, der Schneebär und der Seifenbläser.",
        "Diese Bilder spielen im Seeland, das er aus Ins kennt. Sie sind keine Erinnerung an seine eigene Kindheit, sondern Beobachtungen aus dem Leben um ihn, festgehalten mit der Ruhe eines Realisten."
      ],
      "works": [
        {
          "pid": "schulexamen",
          "text": [
            "In einem hellen Schulzimmer sitzen Kinder in Reihen. Vorn steht der Lehrer, an den Wänden hängen Karten – ein Prüfungstag auf dem Land.",
            "Das Bild von 1862 gehört zu Ankers frühen grossen Schulbildern. Schule und Lernen bleiben ein Lebensthema, auch später als Mitglied der Schulkommission in Ins."
          ],
          "fact": "Öl auf Leinwand, 1862. Privatbesitz."
        },
        {
          "pid": "schulstube",
          "text": [
            "Ein langes, niedriges Schulzimmer: Bänke, ein Ofen, Kinder über ihren Heften. Das Licht fällt von der Seite in den Raum.",
            "Auch dieses Bild entsteht 1862. Anker kennt solche Stuben aus dem Seeland; er malt sie als Arbeitsorte, nicht als Idylle."
          ],
          "fact": "Öl auf Leinwand, 1862. Privatbesitz."
        },
        {
          "pid": "knabetisch",
          "text": [
            "Ein kleiner Junge in rotem Gewand sitzt am Tisch und isst konzentriert, den Löffel in der Hand, das Haar hell im Licht.",
            "Das Bild von 1869 gehört zu einer Reihe von Knaben am Tisch. Anker hält den ganz gewöhnlichen Augenblick fest, ohne ihn zu steigern."
          ],
          "fact": "Öl auf Leinwand, 1869. Privatbesitz."
        },
        {
          "pid": "marionetten",
          "text": [
            "Eine junge Frau führt hinter einem aufgestellten Buch zwei Handpuppen. Zwei kleine Kinder schauen gebannt auf die Bühne.",
            "Das Bild entsteht 1869. Aus einem Alltagsgegenstand – einem Buch als Vorhang – wird ein kleines Theater im Wohnzimmer."
          ],
          "fact": "Öl auf Leinwand, 1869. Privatbesitz."
        },
        {
          "pid": "kaffeetrink",
          "text": [
            "Ein Mädchen hält eine bunte Schale mit beiden Händen und trinkt. Auf dem Tisch steht die Untertasse, der Hintergrund ist dunkel und still.",
            "Das Bild von 1870 gehört zu Ankers ganz nahen Kinderbildnissen: ein einziger, aufmerksamer Augenblick, ohne Beiwerk."
          ],
          "fact": "Öl auf Leinwand, 1870. Privatbesitz."
        },
        {
          "pid": "schulspaz",
          "text": [
            "Eine Schulklasse zieht über eine Wiese, der Lehrer voraus, die Kinder in einer lockeren Reihe, hinter ihnen Bäume und Himmel.",
            "Das Bild von 1872 zeigt die Schule nicht nur in der Stube, sondern auch unterwegs. Lernen und Gehen gehören für Anker zusammen."
          ],
          "fact": "Öl auf Leinwand, 1872. Privatbesitz."
        },
        {
          "pid": "schneebar",
          "text": [
            "Auf dem Dorfplatz steht ein grosser Schneemann, daneben Kinder mit Fahne, Bank und Schiefertafel, ringsum Schnee und Holzhäuser.",
            "Das Winterbild von 1873 ist ein Fest des Dorfs: jeder hat eine Aufgabe, und der «Bär» aus Schnee steht in der Mitte."
          ],
          "fact": "Öl auf Leinwand, 1873. Privatbesitz."
        },
        {
          "pid": "seifen",
          "text": [
            "Ein Junge in hellblauem Hemd steht und bläst eine Seifenblase, den Blick fest auf die hohle Hand gerichtet.",
            "Das Bild von 1873 hält einen Spielaugenblick fest, der gleich vergeht – typisch für Ankers Blick auf Kinder bei der Sache."
          ],
          "fact": "Öl auf Leinwand, 1873. Privatbesitz."
        }
      ]
    },
    {
      "id": "ankerstill",
      "place": "Der gedeckte Tisch",
      "when": "1873–1882",
      "map": {
        "x": 44,
        "y": 82
      },
      "mapLabel": "Stillleben",
      "intro": [
        "Neben den Figurenbildern malt Anker auch Stillleben: gedeckte Tische mit Tee, Kaffee, Brot und Flaschen. «Tee und Schmelzbrötchen» entsteht 1873, ein Kaffeestillleben 1877, ein weiteres Gedeck 1882.",
        "Die Gegenstände stehen so genau und ruhig da wie seine Kinder am Tisch. Es sind keine Prunkstücke, sondern das Geschirr des Hauses."
      ],
      "works": [
        {
          "pid": "teeschmelz",
          "text": [
            "Auf einem weissen Tuch stehen eine dunkle Teekanne, eine Tasse, ein Teller mit glänzenden Brötchen und Früchte daneben.",
            "Das Stillleben von 1873 gehört zu Ankers frühen gedeckten Tischen. Er malt das Essen des Hauses mit derselben Ruhe wie seine Kinderbildnisse."
          ],
          "fact": "Öl auf Leinwand, 1873. Privatbesitz."
        },
        {
          "pid": "kaffeestill",
          "text": [
            "Eine Kaffeekanne, Tassen, Zucker und eine Flasche stehen auf weissem Tuch. Das Licht ist still, die Dinge sind genau gesetzt.",
            "Das Bild von 1877 zeigt, dass Anker neben den Figurenbildern auch den gedeckten Tisch als eigenes Thema pflegt."
          ],
          "fact": "Öl auf Leinwand, 1877. Privatbesitz."
        },
        {
          "pid": "kaffeecognac82",
          "text": [
            "Ein reicheres Kaffeegedeck: Kanne, Tassen, ein zierliches Gefäss und eine Flasche, alles auf hellem Tuch vor dunklem Grund.",
            "Fünf Jahre nach dem Stillleben von 1877 greift Anker das Thema 1882 noch einmal auf, mit mehr Gerät und kühlerem Licht."
          ],
          "fact": "Öl auf Leinwand, 1882. Privatbesitz."
        }
      ]
    },
    {
      "id": "ankerfayence",
      "place": "Paris · Fayencen für Théodore Deck",
      "when": "1866–1875",
      "map": {
        "x": 48,
        "y": 62
      },
      "mapLabel": "Fayence",
      "intro": [
        "Von etwa 1866 an entwirft Anker Fayencen für den elsässischen Keramiker Théodore Deck in Paris. Er liefert weit mehr als dreihundert Entwürfe: Teller, Platten und Gefässe mit Köpfen, Ornamenten und historischen Figuren.",
        "Zwei Platten aus dem Petit Palais zeigen die Spannweite: 1869 ein Krieger auf blauem Grund, um 1870 bis 1875 ein Bildnis Karls des Grossen. Die Arbeit für Deck läuft neben der Ölmalerei her, mitten in den Pariser Wintern."
      ],
      "works": [
        {
          "pid": "aplat",
          "text": [
            "Auf blauem Grund erscheint ein Krieger im Profil, mit Helm, Pfauenfedern und einer Schriftrolle. Die Platte ist in einem alten Rahmen gefasst.",
            "Die Fayence entsteht 1869 nach einem Entwurf Ankers in der Werkstatt von Théodore Deck in Paris. Sie gehört heute dem Petit Palais."
          ],
          "fact": "Fayence, 1869. Petit Palais, Paris."
        },
        {
          "pid": "acharlemagne",
          "text": [
            "Im Spiegel der Platte erscheint Karl der Grosse im Profil, mit Bart und einer rotbraunen Krone. Am Rand stehen kleine Medaillons und die Worte «KAROLVS R».",
            "Die Fayence entsteht zwischen 1870 und 1875 für Théodore Deck. Anker signiert den Rand. Auch dieses Stück bewahrt das Petit Palais in Paris."
          ],
          "fact": "Fayence, um 1870–1875. Petit Palais, Paris."
        }
      ]
    },
    {
      "id": "ankercivic",
      "place": "Bern und das Seeland · Grosser Rat und öffentliches Leben",
      "when": "1870–1881",
      "map": {
        "x": 168,
        "y": 88
      },
      "mapLabel": "Bern",
      "intro": [
        "Von 1870 bis 1874 sitzt Anker im Grossen Rat des Kantons Bern. Er setzt sich für den Bau des Kunstmuseums Bern ein, das 1879 eröffnet wird, und kandidiert nach 1874 nicht wieder. In Ins gehört er unter anderem der Schulkommission, dem Kirchenrat und dem Männerchor an.",
        "In denselben Jahren malt er Historien- und Volksbilder: die Kappeler Milchsuppe, die Aufnahme der internierten Bourbaki-Soldaten 1871, den Gemeindeschreiber, später den Quacksalber und den Verwaltungsrat der Sparkasse Erlach. 1878 wird er Ritter der Ehrenlegion."
      ],
      "works": [
        {
          "pid": "milchsuppe",
          "text": [
            "Auf einer Wiese sitzen bewaffnete Männer um einen grossen Kessel und essen gemeinsam. Dahinter lagert das Heer, der Himmel ist weit.",
            "Das Historienbild von 1869 erzählt die Überlieferung von der Milchsuppe bei Kappel: nach dem Frieden teilen die Gegner die Suppe. Es hängt im Kunsthaus Zürich."
          ],
          "fact": "Öl auf Leinwand, 1869. Kunsthaus Zürich."
        },
        {
          "pid": "bourbaki",
          "text": [
            "In einer Scheune liegen und sitzen französische Soldaten im Stroh. Frauen und Kinder aus dem Dorf bringen Suppe und Brot.",
            "Im Februar 1871 internierte die Schweiz die geschlagene französische Bourbaki-Armee. Anker malt die Aufnahme der Soldaten als Hilfe im Alltag, nicht als Schlacht."
          ],
          "fact": "Öl auf Leinwand, 1871. Privatbesitz."
        },
        {
          "pid": "gemeindeschr",
          "text": [
            "Ein Mann in der Amtstracht sitzt an einem Tisch voller Papiere und schreibt. Hinter ihm an der Wand hängen Fächer und Akten.",
            "Das Bild von 1874 zeigt das schriftliche Leben der Gemeinde – in denselben Jahren, in denen Anker selbst im Grossen Rat des Kantons Bern sitzt."
          ],
          "fact": "Öl auf Leinwand, 1874. Privatbesitz."
        },
        {
          "pid": "liederheimat",
          "text": [
            "Eine Frau sitzt am Klavier, ein Kind lehnt an sie, ein weiteres hört zu. Der Raum ist schlicht, der Augenblick still.",
            "Das Bild von 1874 verbindet Hausmusik und Familie. Anker selbst singt im Männerchor von Ins; das gemeinsame Lied gehört zu seinem Dorfleben."
          ],
          "fact": "Öl auf Leinwand, 1874. Privatbesitz."
        },
        {
          "pid": "quacksalber",
          "text": [
            "In einer Bauernstube untersucht ein Arzt oder Wundarzt ein Kind, die Familie steht und sitzt dicht um den Tisch.",
            "Das Bild von 1879 wird auch «Der Dorfarzt» genannt. Anker zeigt die Sorge um Gesundheit als Teil des Dorfes, ohne Sensationslust."
          ],
          "fact": "Öl auf Leinwand, 1879. Privatbesitz."
        },
        {
          "pid": "caisse",
          "text": [
            "Um einen Tisch sitzen und stehen Männer mit Gläsern, Pfeifen und Akten. Einer hält ein Blatt, ein anderer schreibt – eine Sitzung, und doch ein geselliges Bild.",
            "Die Zeichnung von 1881 zeigt den Verwaltungsrat der Sparkasse in Erlach (Cerlier), unweit von Ins. Anker gehört zur bürgerlichen Welt des Seelands, nicht nur zum Atelier."
          ],
          "fact": "Zeichnung, 1881. Privatbesitz."
        }
      ]
    },
    {
      "id": "ankerkinder",
      "place": "Ins · Kinderbildnisse",
      "when": "1875–1881",
      "map": {
        "x": 156,
        "y": 108
      },
      "mapLabel": "Kinder",
      "intro": [
        "In der zweiten Hälfte der 1870er Jahre verdichten sich Ankers Kinderbilder: Stickerinnen, lesende Mädchen, schreibende Knaben, Schulkinder im Schnee, die Turnstunde in Ins, das Kinderfrühstück.",
        "Dazwischen stehen die eigenen Kinder: Marie um 1875 und 1880, Cécile 1878 im Kinderstuhl. Im Juli 1876 schreibt er seiner Frau aus Murten, er habe in einer Apotheke eine Skizze gemacht."
      ],
      "works": [
        {
          "pid": "stickerinnen",
          "text": [
            "Zwei Mädchen sitzen eng beisammen über einem Stickrahmen. Die eine arbeitet, die andere schaut zu, die Köpfe fast berühren sich.",
            "Das Bild von 1875 gehört zu Ankers stillen Arbeitsbildern: Handarbeit als gemeinsame Konzentration, nicht als Folklore."
          ],
          "fact": "Öl auf Leinwand, 1875. Privatbesitz."
        },
        {
          "pid": "spitzenhaube",
          "text": [
            "Im Profil sitzt ein Mädchen mit weisser Spitzenhaube und einem Buch in der Hand. Der Hintergrund ist dunkel, das Gesicht hell und ernst.",
            "Das Bild von 1875 zeigt das Lesen als Haltung. Anker malt viele lesende Kinder und Frauen; Bildung auf dem Land ist ihm ein festes Thema."
          ],
          "fact": "Öl auf Leinwand, 1875. Privatbesitz."
        },
        {
          "pid": "schreibknabe",
          "text": [
            "Ein Junge beugt sich über ein Heft und schreibt. Neben ihm lehnt ein kleines Mädchen und schaut zu, die Köpfe nah beieinander.",
            "Das Bild von 1875 führt das Thema des Schreibunterrichts weiter: Lernen geschieht hier als Geschwisterszene am selben Tisch."
          ],
          "fact": "Öl auf Leinwand, 1875. Privatbesitz."
        },
        {
          "pid": "marie75",
          "text": [
            "Ein kleines Kind mit blonden Haaren und blauen Augen hält eine Puppe im roten Kleid. Um die Schultern liegt ein hellblaues Tuch.",
            "Es ist Marie, 1872 geboren, das vierte Kind der Familie. Das Bildnis entsteht um 1875, als sie etwa drei Jahre alt ist."
          ],
          "fact": "Öl auf Leinwand, um 1875. Privatbesitz."
        },
        {
          "pid": "laenderkinder",
          "text": [
            "Auf einem Platz vor Häusern und Bäumen stehen und gehen viele Kinder und Erwachsene. Einige werden empfangen, andere schauen zu.",
            "Das Bild von 1876 hängt im Musée d’art et d’histoire in Neuchâtel. Es trägt auch einen französischen Titel, der an Waisen aus Unterwalden in Murten erinnert; die Szene selbst ist eine komponierte Aufnahme, kein Bericht von 1798."
          ],
          "fact": "Öl auf Leinwand, 1876. Musée d’art et d’histoire, Neuchâtel.",
          "quote": {
            "text": "In einer Apotheke machte ich eben eine Skizze. Möglich dass daraus nichts wird, aber man tut, was man kann...",
            "cite": "An Frau Anker, Murten, 11. Juli 1876. Centre Albert Anker, Ins."
          }
        },
        {
          "pid": "pelzmuetze",
          "text": [
            "Ein Schuljunge steht im Schnee, die Schiefertafel unter dem Arm, auf dem Kopf eine dunkle Pelzmütze, der Blick fest und wach.",
            "Das Bild von 1877 verbindet Schulweg und Winter. Anker kennt den Weg zur Schule in Ins aus dem täglichen Leben des Dorfs."
          ],
          "fact": "Öl auf Leinwand, 1877. Privatbesitz."
        },
        {
          "pid": "schulmaedchen",
          "text": [
            "Ein Mädchen in rot-braunem Kleid steht mit einer Schiefertafel und einem Nähkörbchen. Der Blick geht ruhig aus dem Bild.",
            "Das Bild von 1878 hängt im Musée d’art et d’histoire in Neuchâtel. Schreiben und Nähen liegen hier gleichberechtigt in den Händen des Kindes."
          ],
          "fact": "Öl auf Leinwand, 1878. Musée d’art et d’histoire, Neuchâtel."
        },
        {
          "pid": "cecile78",
          "text": [
            "Ein Kleinkind sitzt in einem Holzstuhl, ein rotes Spielzeug im Arm, die Schürze weiss, das Kleid blau. Der Blick geht zur Seite.",
            "Es ist Cécile, 1877 geboren, das jüngste der sechs Kinder. Das Bildnis entsteht 1878, als sie etwa ein Jahr alt ist."
          ],
          "fact": "Öl auf Leinwand, 1878. Privatbesitz."
        },
        {
          "pid": "turnstunde",
          "text": [
            "Auf einem offenen Platz in Ins stehen Kinder in Reihen, einige turnen an Reck und Barren, Bauern und Nachbarn schauen zu.",
            "Das Bild von 1879 spielt unmittelbar vor Ort. Anker malt den Sport des Dorfs als öffentliches Ereignis, zwischen Schule, Hof und Haus."
          ],
          "fact": "Öl auf Leinwand, 1879. Privatbesitz."
        },
        {
          "pid": "kinderfrueh",
          "text": [
            "Vier Kinder sitzen und stehen um einen kleinen Tisch. Eines schenkt ein, die anderen essen und trinken, ein Kleinkind schaut über eine Stuhllehne.",
            "Das Bild von 1879 ist ein ruhiges Mahl unter Kindern, ohne Aufsichtsperson im Vordergrund. Anker traut ihnen den Alltag allein zu."
          ],
          "fact": "Öl auf Leinwand, 1879. Privatbesitz."
        },
        {
          "pid": "marie80",
          "text": [
            "Im Rund einer Zeichnung erscheint Marie im Profil, das Haar geflochten, der Blick ruhig und klar.",
            "Das Blatt von 1880 zeigt die Tochter, nun etwa acht Jahre alt, in einem fest geschlossenen Kreis – ein intimes Bildnis, nicht für den Salon."
          ],
          "fact": "Zeichnung, 1880. Privatbesitz."
        },
        {
          "pid": "maedchenkatze",
          "text": [
            "Ein Mädchen in weissem Kleid hält eine helle Katze im Arm. Beide blicken aus dem Bild, das Licht liegt weich auf Gesicht und Fell.",
            "Das Bildnis von 1881 gehört zu den zärtlichen Tier-und-Kind-Bildern Ankers: Nähe ohne Posieren, ein stiller Dialog."
          ],
          "fact": "Öl auf Leinwand, 1881. Privatbesitz."
        }
      ]
    },
    {
      "id": "anker1880s",
      "place": "Ins und Paris · Die 1880er Jahre",
      "when": "1883–1888",
      "map": {
        "x": 150,
        "y": 118
      },
      "mapLabel": "1880er",
      "intro": [
        "In den 1880er Jahren bleiben Kinder, Schwestern, Märchen und die Stube die festen Themen: die beiden Schwestern, Rotkäppchen, eine Gotthelf-Leserin, Mariette mit Erdbeeren, das strickende Mädchen an der Wiege, die ersten Schritte.",
        "Den Winter verbringt die Familie noch in Paris, den Sommer in Ins. 1890 wird Anker den Pariser Wohnsitz aufgeben. Die grossen Bilder der 1890er Jahre – und was danach folgt – gehören zum nächsten Teil."
      ],
      "works": [
        {
          "pid": "schwester83",
          "text": [
            "Zwei Mädchen stehen an einem gemusterten Ofen. Die eine hält eine Puppe, die andere lehnt sich an sie; hinter ihnen ist die Stube warm und eng.",
            "Das Bild von 1883 zeigt Geschwister als Paar, nicht als niedliche Gruppe. Anker lässt den Ofen, das Holz und die Kleider genau sprechen."
          ],
          "fact": "Öl auf Leinwand, 1883. Privatbesitz."
        },
        {
          "pid": "rotkaeppchen",
          "text": [
            "Ein Mädchen mit roter Kappe steht im Wald, Brot unter dem einen Arm, einen Krug unter dem anderen. Hinter ihr öffnet sich die Landschaft.",
            "Das Bild von 1883 erzählt das Märchen, ohne den Wolf zu zeigen. Anker bleibt bei dem Kind auf dem Weg."
          ],
          "fact": "Öl auf Leinwand, 1883. Privatbesitz."
        },
        {
          "pid": "gotthelfleserin",
          "text": [
            "Eine junge Frau sitzt barfuss auf einem Stuhl und liest in einem Buch. Hinter ihr stehen Bett und Holzwand, das Kleid ist schlicht gestreift.",
            "Das Bild von 1884 zeigt eine Leserin von Jeremias Gotthelf. Ankers spätere Gotthelf-Illustrationen gehören in die 1890er Jahre; hier ist zuerst das Lesen selbst das Thema."
          ],
          "fact": "Öl auf Leinwand, 1884. Privatbesitz."
        },
        {
          "pid": "mariette",
          "text": [
            "Ein Mädchen in gestreifter Schürze steht mit einem Korb voller Erdbeeren. Der Blick ist offen, das Kleid fest gebunden, der Hintergrund ein dunkles Grün.",
            "Das Bild von 1884 trägt den französischen Titel «Mariette aux fraises». Anker gibt manchen Kinderbildnissen einen Namen, als wären es Begegnungen, nicht Typen."
          ],
          "fact": "Öl auf Leinwand, 1884. Privatbesitz."
        },
        {
          "pid": "roterweste",
          "text": [
            "Ein Junge in weissem Hemd und roter Weste blickt nach links, das Haar golden vor dunklem Grund, der Mund ein wenig geöffnet.",
            "Das Bildnis von 1885 zeigt Ankers sichere, knappe Porträtsprache der 1880er Jahre: wenig Beiwerk, viel Aufmerksamkeit für das Gesicht."
          ],
          "fact": "Öl auf Leinwand, 1885. Privatbesitz."
        },
        {
          "pid": "strickend",
          "text": [
            "Ein Mädchen sitzt und strickt, daneben steht eine Wiege mit einem Kleinkind. Die Stube ist schlicht, das Licht liegt warm auf Holz und Stoff.",
            "Das Bild von 1885 gehört schon zur Galerie. Es zeigt dieselbe ruhige Aufmerksamkeit, mit der Anker den Alltag des Seelands festhält."
          ],
          "fact": "Öl auf Leinwand, 1885. Privatbesitz."
        },
        {
          "pid": "kartoffel",
          "text": [
            "Ein Mädchen in dunklem Kleid sitzt am Tisch und schält Kartoffeln. Vor ihr stehen Schüssel und Schale, der Blick ist gesenkt und beschäftigt.",
            "Das Arbeitsbild von 1886 gehört zu den ruhigen Küchenszenen. Anker gibt der alltäglichen Arbeit denselben Ernst wie einem Bildnis."
          ],
          "fact": "Öl auf Leinwand, 1886. Privatbesitz."
        },
        {
          "pid": "fleissig",
          "text": [
            "Ein Mädchen in blauem Kleid und gestreifter Schürze schreibt mit dem Griffel auf eine Schiefertafel und hält zugleich ein Heft offen.",
            "Das Bild von 1886 heisst «Fleissig» – oder auf Französisch «Appliquée». Lernen erscheint hier als stille, selbstverständliche Arbeit."
          ],
          "fact": "Öl auf Leinwand, 1886. Privatbesitz."
        },
        {
          "pid": "cecile86",
          "text": [
            "In Blau auf farbigem Grund liest ein Mädchen in einem aufgeschlagenen Buch, den Kopf auf die Hand gestützt. Das Blatt trägt das Datum «28. Sept. 86».",
            "Es ist wieder Cécile, nun etwa neun Jahre alt. Die Aquarellzeichnung zeigt, wie leicht Anker auch ohne Ölfarbe eine ganze Haltung festhalten kann."
          ],
          "fact": "Aquarell, 28. September 1886. Privatbesitz."
        },
        {
          "pid": "ersteschritte",
          "text": [
            "Ein älteres Kind hält ein kleineres, das die ersten Schritte wagt. Der eine geht barfuss, das kleinere trägt Schuhe, hinter ihnen steht ein Kachelofen.",
            "Das Bild von 1888 schliesst diesen ersten Teil: ein Alltag in der Stube, festgehalten kurz bevor Anker in den 1890er Jahren noch einmal zu grossen Schul- und Dorfbildern ansetzt."
          ],
          "fact": "Öl auf Leinwand, 1888. Privatbesitz."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
