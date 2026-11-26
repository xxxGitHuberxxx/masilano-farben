// v10.43 J.Th. Lundbye life journey (1818–1848). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "lbcowhead",
    "title": "Kopf einer weiss gescheckten Kuh",
    "artist": "J.Th. Lundbye",
    "year": "1834",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4952: https://open.smk.dk/artwork/image/KMS4952, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbfather",
    "title": "Oberst Joachim Theodor Lundbye, der Vater des Künstlers",
    "artist": "J.Th. Lundbye",
    "year": "1836",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4601: https://open.smk.dk/artwork/image/KMS4601, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbmother",
    "title": "Cathrine Lundbye, geborene Bonnevie, die Mutter des Künstlers",
    "artist": "J.Th. Lundbye",
    "year": "1836",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4602: https://open.smk.dk/artwork/image/KMS4602, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbvinderod",
    "title": "Die Kirche von Vinderød bei Frederiksværk",
    "artist": "J.Th. Lundbye",
    "year": "1837",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6499: https://open.smk.dk/artwork/image/KMS6499, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbsunken",
    "title": "Ein Hohlweg bei Frederiksværk",
    "artist": "J.Th. Lundbye",
    "year": "1837",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6471: https://open.smk.dk/artwork/image/KMS6471, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lblaessoe",
    "title": "Der Maler Thorald Læssøe",
    "artist": "J.Th. Lundbye",
    "year": "1837",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4571: https://open.smk.dk/artwork/image/KMS4571, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbkalundborg",
    "title": "Die Kirche von Kalundborg",
    "artist": "J.Th. Lundbye",
    "year": "1837",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6339: https://open.smk.dk/artwork/image/KMS6339, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbulvedal",
    "title": "Ulvedalen im Dyrehaven",
    "artist": "J.Th. Lundbye",
    "year": "1838",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6762 verso: https://open.smk.dk/artwork/image/KMS6762 verso, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbcloudy",
    "title": "Landschaft bei bewölktem Wetter. Später Nachmittag",
    "artist": "J.Th. Lundbye",
    "year": "1840",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS2061: https://open.smk.dk/artwork/image/KMS2061, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbsorup",
    "title": "Bewaldete Hügel bei Sørupvang",
    "artist": "J.Th. Lundbye",
    "year": "1841",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6928: https://open.smk.dk/artwork/image/KMS6928, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbfrederiksborg",
    "title": "Blick auf Frederiksborg vom Hestehaven aus",
    "artist": "J.Th. Lundbye",
    "year": "1841",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS7006: https://open.smk.dk/artwork/image/KMS7006, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbzealand",
    "title": "Seeländische Landschaft. Offenes Land in Nordseeland",
    "artist": "J.Th. Lundbye",
    "year": "1842",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS402: https://open.smk.dk/artwork/image/KMS402, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbbull",
    "title": "Schwarzbunter Stier",
    "artist": "J.Th. Lundbye",
    "year": "1844",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS2037: https://open.smk.dk/artwork/image/KMS2037, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbcowshed",
    "title": "Ein Kuhstall auf einem Hof in Vejby, Seeland",
    "artist": "J.Th. Lundbye",
    "year": "1844",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS446: https://open.smk.dk/artwork/image/KMS446, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbsheep",
    "title": "Abendstimmung mit Schafen auf einem Hügel",
    "artist": "J.Th. Lundbye",
    "year": "1845",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS504: https://open.smk.dk/artwork/image/KMS504, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbtwocows",
    "title": "Zwei Kühe auf freiem Feld",
    "artist": "J.Th. Lundbye",
    "year": "1845",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS8567: https://open.smk.dk/artwork/image/KMS8567, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lboxen",
    "title": "Ein Ochsenzug in der römischen Campagna",
    "artist": "J.Th. Lundbye",
    "year": "1845",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS510: https://open.smk.dk/artwork/image/KMS510, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbtivoli",
    "title": "Landschaft bei Tivoli, Italien",
    "artist": "J.Th. Lundbye",
    "year": "1845",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6479: https://open.smk.dk/artwork/image/KMS6479, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbfarm",
    "title": "Bauernhaus in der Sonne",
    "artist": "J.Th. Lundbye",
    "year": "1846",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS7504: https://open.smk.dk/artwork/image/KMS7504, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbkolas",
    "title": "Kolås-Wald, Vejrhøj",
    "artist": "J.Th. Lundbye",
    "year": "1846",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4753: https://open.smk.dk/artwork/image/KMS4753, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbmarling",
    "title": "Mergeln auf dem Pfarrhofacker von Vallekilde, im Hintergrund Hankehøj",
    "artist": "J.Th. Lundbye",
    "year": "1846",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4774: https://open.smk.dk/artwork/image/KMS4774, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbcroftstudy",
    "title": "Ein Kätnerhof bei Lodskov nahe Gut Vognserup. Studie",
    "artist": "J.Th. Lundbye",
    "year": "1846",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4582: https://open.smk.dk/artwork/image/KMS4582, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbburdock",
    "title": "Eine Klette und andere Pflanzen auf einer Steinmauer",
    "artist": "J.Th. Lundbye",
    "year": "1847",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS7414: https://open.smk.dk/artwork/image/KMS7414, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbrooster",
    "title": "Ein Hahn",
    "artist": "J.Th. Lundbye",
    "year": "1847",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS8568: https://open.smk.dk/artwork/image/KMS8568, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbstallion",
    "title": "Sechzehnjähriger Hengst der Knabstrup-Rasse",
    "artist": "J.Th. Lundbye",
    "year": "1847",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS957: https://open.smk.dk/artwork/image/KMS957, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbbeach",
    "title": "Der Strand von Refsnæs, Seeland",
    "artist": "J.Th. Lundbye",
    "year": "1847",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS827: https://open.smk.dk/artwork/image/KMS827, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbcroft",
    "title": "Ein Kätnerhof bei Lodskov nahe Gut Vognserup, Seeland",
    "artist": "J.Th. Lundbye",
    "year": "1847",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1644: https://open.smk.dk/artwork/image/KMS1644, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbcliffs",
    "title": "Studie der Steilküste an der Südküste von Refsnæs",
    "artist": "J.Th. Lundbye",
    "year": "1847",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3952: https://open.smk.dk/artwork/image/KMS3952, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbvognserup",
    "title": "Zwei Kühe auf einem Feld bei Gut Vognserup, Seeland",
    "artist": "J.Th. Lundbye",
    "year": "1847",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1701: https://open.smk.dk/artwork/image/KMS1701, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "lbwinter",
    "title": "Kühe werden an einem Wintertag getränkt",
    "artist": "J.Th. Lundbye",
    "year": "1848",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS2092: https://open.smk.dk/artwork/image/KMS2092, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "lundbye",
  "name": "J.Th. Lundbye",
  "title": "J.Th. Lundbyes Lebensweg",
  "life": "1818–1848",
  "part": "Seeland und Italien",
  "subtitle": "Der Maler der dänischen Landschaft und ihrer Tiere",
  "cover": "lbzealand",
  "intro": "Reise mit J.Th. Lundbye durch sein kurzes Leben: von den Wiesen und Höfen Seelands nach Italien und wieder zurück. Die Bilder stammen aus dem Statens Museum for Kunst, das seine Aufnahmen frei zur Verfügung stellt.",
  "ending": [
    "J.Th. Lundbye stirbt im April 1848, mit nur 29 Jahren.",
    "Seine Bilder zeigen vor allem die Landschaften und Tiere Seelands."
  ],
  "epilogue": "J.Th. Lundbye stirbt im April 1848. Der Weg führt von Kalundborg und Kopenhagen über Italien zurück nach Seeland.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,14 C50,10 58,16 56,28 C56,40 60,50 56,58 C48,62 40,58 38,48 C36,36 34,22 40,14 Z",
      "M70,40 C82,36 94,42 94,52 C92,62 80,66 72,62 C64,58 62,46 70,40 Z",
      "M18,82 C30,74 50,74 62,82 C70,92 66,108 56,118 C44,124 28,122 20,112 C12,102 12,90 18,82 Z",
      "M150,70 C160,66 170,70 172,80 C178,92 190,102 204,112 C212,118 210,128 202,128 C196,138 186,140 182,132 C178,122 168,112 158,100 C150,90 144,78 150,70 Z",
      "M176,140 C180,138 184,140 182,144 C178,146 174,144 176,140 Z"
    ]
  },
  "stations": [
    {
      "id": "lbs1",
      "place": "Familie, Kirchen und erste Landschaften",
      "when": "1834–1838",
      "map": {
        "x": 78,
        "y": 46
      },
      "mapLabel": "Seeland",
      "intro": [
        "Johan Thomas Lundbye wird am 1. September 1818 in Kalundborg auf Seeland geboren; 1832 beginnt er an der Kunstakademie in Kopenhagen.",
        "Schon als Jugendlicher malt er Tiere, seine Eltern und Landschaften in Seeland."
      ],
      "works": [
        {
          "pid": "lbcowhead",
          "text": [
            "Der Kopf einer weiss gescheckten Kuh mit gebogenen Hörnern ist im Profil nach links gemalt.",
            "Lundbye malt die Studie im September 1834, kurz nach seinem 16. Geburtstag."
          ],
          "fact": "1834. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbfather",
          "text": [
            "Der Vater des Malers trägt eine dunkle Uniform mit goldenen Schulterstücken und einem breiten Band über der Brust.",
            "Im selben Jahr 1836 malt Lundbye auch seine Mutter."
          ],
          "fact": "1836. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbmother",
          "text": [
            "Die Mutter des Malers trägt eine weisse Haube mit hellblauem Band und ein helles Tuch über einem roten Kleid.",
            "Sie ist im Profil gemalt, im selben Jahr wie das Bildnis ihres Mannes."
          ],
          "fact": "1836. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbvinderod",
          "text": [
            "Hinter einem weiten grünen Feld steht die weisse Kirche mit ihrem Turm, dahinter glänzt Wasser.",
            "Die Gegend um Frederiksværk in Nordseeland malt Lundbye mehrmals, auch Jahre später noch."
          ],
          "fact": "1837. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbsunken",
          "text": [
            "Zwei Männer ruhen am grasigen Hang neben einem Hohlweg, dahinter sieht man Wasser und ferne Ufer.",
            "Über ihnen ziehen helle Wolken über den Himmel."
          ],
          "fact": "1837. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lblaessoe",
          "text": [
            "Der junge Maler Thorald Læssøe blickt mit leicht gesenktem Kopf zur Seite, sein dunkles Haar fällt in die Stirn.",
            "Er trägt einen dunklen Rock, ein weisses Hemd und ein schwarzes Halstuch."
          ],
          "fact": "1837. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbkalundborg",
          "text": [
            "Die Kirche mit ihren spitzen Türmen erhebt sich aus rotem Backstein über einem grasigen Hang.",
            "Kalundborg ist Lundbyes Geburtsort; das Museum vermerkt, dass das Bild 1837 vollendet ist."
          ],
          "fact": "1837. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbulvedal",
          "text": [
            "Sonnenlicht fällt auf eine grüne Senke im Tiergarten Dyrehaven nördlich von Kopenhagen, ringsum stehen hohe Bäume.",
            "Das Museum datiert das Bild auf den 14. Juni 1838; es ist auf die Rückseite eines anderen Bildes gemalt."
          ],
          "fact": "1838. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "lbs2",
      "place": "Weites Land und Tiere aus der Nähe",
      "when": "1840–1845",
      "map": {
        "x": 84,
        "y": 50
      },
      "mapLabel": "Seeland",
      "intro": [
        "Bis 1842 studiert Lundbye an der Akademie; wie andere Maler seiner Generation zieht er aus der Hauptstadt hinaus, um die Landschaften Dänemarks zu malen.",
        "Er malt Hügel, Weiden und Höfe in Seeland und studiert Kühe und Stiere aus der Nähe."
      ],
      "works": [
        {
          "pid": "lbcloudy",
          "text": [
            "Dunkle Wolken ziehen über eine grosse Baumgruppe, davor fliesst ein schmaler Bach.",
            "Das Museum hält fest, dass das Bild 1840 vollendet wird."
          ],
          "fact": "1840. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbsorup",
          "text": [
            "Eine Baumgruppe krönt einen grünen Hügel, Wege führen durch die Wiesen davor.",
            "Das Bild entsteht 1841, ein Jahr bevor Lundbye seine Zeit an der Akademie beendet."
          ],
          "fact": "1841. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbfrederiksborg",
          "text": [
            "Unter einem grünlich schimmernden Wolkenhimmel liegt weites Land; ganz klein erscheinen am Horizont die Türme von Schloss Frederiksborg.",
            "Rechts begrenzt eine dunkle Baumgruppe den Blick."
          ],
          "fact": "1841. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbzealand",
          "text": [
            "Ein gewundener Weg führt durch eine weite, offene Weidelandschaft unter hohem Himmel.",
            "Lundbye setzt das Bild aus Studien zusammen, die er im Sommer 1841 bei Frederiksværk malt; er will das Typische der Landschaft zeigen, keinen bestimmten Ort."
          ],
          "fact": "1842. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbbull",
          "text": [
            "Ein schwarzweiss gefleckter Stier steht im Profil vor einem dunklen Grund.",
            "Das Tier füllt fast die ganze Breite des Bildes aus."
          ],
          "fact": "1844. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbcowshed",
          "text": [
            "Kühe liegen und stehen im Halbdunkel eines Stalls, durch das offene Tor fällt helles Licht.",
            "Rechts steht ein kleiner grüner Karren auf dem Boden des Stalls."
          ],
          "fact": "1844. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbsheep",
          "text": [
            "Schafe ruhen im Abendlicht auf einem Hügel zwischen grossen aufrechten Steinen.",
            "Im Hintergrund öffnet sich der Blick über eine weite Ebene mit einer kleinen Windmühle."
          ],
          "fact": "1845. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbtwocows",
          "text": [
            "Eine braune Kuh steht, eine helle liegt daneben im Gras.",
            "Über ihnen türmen sich grosse weisse Wolken."
          ],
          "fact": "1845. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "lbs3",
      "place": "Die Reise nach Italien und zurück",
      "when": "1845–1846",
      "map": {
        "x": 176,
        "y": 112
      },
      "mapLabel": "Italien",
      "intro": [
        "Am 5. Juni 1845 bricht Lundbye zu einer Studienreise nach Italien auf, über Deutschland, die Schweiz und Frankreich; 1846 malt er vor allem in der römischen Campagna.",
        "Auf der Heimreise kommt er durch Belgien und die Niederlande und zeichnet im Juli 1846 im Amsterdamer Zoo Artis; danach malt er wieder in Seeland."
      ],
      "works": [
        {
          "pid": "lboxen",
          "text": [
            "Reiter treiben eine Herde grauer Ochsen mit langen Hörnern über einen staubigen Weg.",
            "Lundbye malt das Bild 1845 auf seiner Reise nach Italien."
          ],
          "fact": "1845. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbtivoli",
          "text": [
            "Ein Weg windet sich durch rötlich-gelbe Hügel, über denen Wolken ziehen.",
            "Tivoli liegt in den Bergen östlich von Rom."
          ],
          "fact": "1845. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbfarm",
          "text": [
            "Zwischen Bäumen und Büschen leuchtet die weisse Wand eines niedrigen Hauses in der Sonne.",
            "Das Bild entsteht 1846, im Jahr von Lundbyes Rückkehr aus Italien."
          ],
          "fact": "1846. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbkolas",
          "text": [
            "Helle, schlanke Baumstämme stehen vor einer weiten Bucht unter bewegtem Himmel.",
            "Laut Signatur entsteht die Studie auf dem Vejrhøj, nahe Kalundborg, wo Lundbye geboren ist und seine Grosseltern lebten."
          ],
          "fact": "1846. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbmarling",
          "text": [
            "Männer mit Pferden und Wagen arbeiten auf einem weiten Feld; der Titel nennt diese Arbeit Mergeln, das Ausbringen von Mergel.",
            "Im Hintergrund erhebt sich der Hügel Hankehøj."
          ],
          "fact": "1846. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbcroftstudy",
          "text": [
            "Ein sandiger Weg führt auf einen niedrigen Hof mit rotem Dach zu.",
            "Das Museum datiert die Studie auf den 4. August 1846; 1847 malt Lundbye das Motiv noch einmal."
          ],
          "fact": "1846. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "lbs4",
      "place": "Höfe, Küsten und Tiere",
      "when": "1847–1848",
      "map": {
        "x": 80,
        "y": 48
      },
      "mapLabel": "Seeland",
      "intro": [
        "In seinen letzten Jahren malt Lundbye Höfe, Felder und Küsten in Seeland, etwa bei Gut Vognserup und an der Küste von Refsnæs.",
        "Er studiert Pflanzen und Tiere sehr genau, von einer Klette an einer Steinmauer bis zu einem Hengst der Knabstrup-Rasse."
      ],
      "works": [
        {
          "pid": "lbburdock",
          "text": [
            "Grosse Klettenblätter und Gräser wachsen aus einer Mauer aus runden Feldsteinen.",
            "Der Hintergrund bleibt eine schlichte rötliche Fläche, so dass ganz die Pflanzen im Blick stehen."
          ],
          "fact": "1847. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbrooster",
          "text": [
            "Ein Hahn mit rotem Kamm und dunklem, glänzendem Schwanz steht vor einem grauen Grund.",
            "Lundbye malt die Studie im Juni 1847 während eines Aufenthalts in Westseeland."
          ],
          "fact": "1847. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbstallion",
          "text": [
            "Ein Pferd mit heller Mähne steht in einem Stall neben einem hölzernen Pfosten.",
            "Der Titel nennt sein Alter, sechzehn Jahre, und seine Rasse, die Knabstrup-Pferde."
          ],
          "fact": "1847. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbbeach",
          "text": [
            "Weisse Wolken stehen über dem ruhigen Meer, am steinigen Ufer sind kleine Gestalten zu sehen.",
            "Ein langer Streifen aus Steinen zieht sich ins flache Wasser."
          ],
          "fact": "1847. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbcroft",
          "text": [
            "Ein Weg führt an einer grasenden Kuh vorbei auf einen Hof hinter Feldern zu.",
            "Das Motiv hat Lundbye schon am 4. August 1846 in einer Studie gemalt."
          ],
          "fact": "1847. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbcliffs",
          "text": [
            "Helle Hänge fallen steil zum Wasser ab, am Ufer liegen Steine.",
            "Das Museum stützt die Datierung 1847 auf die Jahreszahl, die Lundbye selbst angibt."
          ],
          "fact": "1847. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbvognserup",
          "text": [
            "Eine dunkle Kuh liegt im Gras, eine helle steht daneben vor einer Reihe hoher Bäume.",
            "Auch der Kätnerhof von Lodskov liegt bei Gut Vognserup."
          ],
          "fact": "1847. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "lbwinter",
          "text": [
            "Braune Kühe ziehen über einen verschneiten Weg zum offenen Wasser.",
            "Das Bild stammt aus dem Jahr 1848, Lundbyes letztem Lebensjahr."
          ],
          "fact": "1848. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
