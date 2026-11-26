// v10.43 C.W. Eckersberg life journey (1783–1853). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "ewself",
    "title": "Selbstbildnis",
    "artist": "C.W. Eckersberg",
    "year": "1807–1810",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1764: https://open.smk.dk/artwork/image/KMS1764, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewjens",
    "title": "Jens, Sohn des Malers Jens Juel",
    "artist": "C.W. Eckersberg",
    "year": "1807",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1773: https://open.smk.dk/artwork/image/KMS1773, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewchristine",
    "title": "Christine Rebekka Eckersberg, geborene Hyssing",
    "artist": "C.W. Eckersberg",
    "year": "1809",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1760: https://open.smk.dk/artwork/image/KMS1760, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewcleft",
    "title": "Die Teufelsschlucht in Liselund auf Møn",
    "artist": "C.W. Eckersberg",
    "year": "1809",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS7984: https://open.smk.dk/artwork/image/KMS7984, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewstile",
    "title": "Landschaft mit einem Zauntritt auf Møn",
    "artist": "C.W. Eckersberg",
    "year": "1810",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS7694: https://open.smk.dk/artwork/image/KMS7694, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewlyngby",
    "title": "Blick gegen Lyngby",
    "artist": "C.W. Eckersberg",
    "year": "1803–1810",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3806: https://open.smk.dk/artwork/image/KMS3806, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewjean",
    "title": "Aus Holbergs «Jean de France», erster Akt, sechste Szene",
    "artist": "C.W. Eckersberg",
    "year": "1812",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS461: https://open.smk.dk/artwork/image/KMS461, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewpontroyal",
    "title": "Der Pont Royal vom Quai Voltaire aus",
    "artist": "C.W. Eckersberg",
    "year": "1812",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1624: https://open.smk.dk/artwork/image/KMS1624, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewmeudon",
    "title": "Blick vom Schloss Meudon",
    "artist": "C.W. Eckersberg",
    "year": "1813",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1623: https://open.smk.dk/artwork/image/KMS1623, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewangelica",
    "title": "Porta Angelica und ein Teil des Vatikans",
    "artist": "C.W. Eckersberg",
    "year": "1813",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS7383: https://open.smk.dk/artwork/image/KMS7383, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewdancer",
    "title": "Ein tanzendes italienisches Mädchen",
    "artist": "C.W. Eckersberg",
    "year": "1813–1816",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3318: https://open.smk.dk/artwork/image/KMS3318, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewcloister",
    "title": "Der Kreuzgang von Santa Maria in Aracoeli in Rom",
    "artist": "C.W. Eckersberg",
    "year": "1813–1816",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS721: https://open.smk.dk/artwork/image/KMS721, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewpergola",
    "title": "Eine Pergola in Italien",
    "artist": "C.W. Eckersberg",
    "year": "1814–1816",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS2059: https://open.smk.dk/artwork/image/KMS2059, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewsteps",
    "title": "Die Marmortreppe zur Kirche Santa Maria in Aracoeli",
    "artist": "C.W. Eckersberg",
    "year": "1814–1816",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1621: https://open.smk.dk/artwork/image/KMS1621, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewtiber",
    "title": "Blick über den Tiber zur Engelsburg",
    "artist": "C.W. Eckersberg",
    "year": "um 1815",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1346: https://open.smk.dk/artwork/image/KMS1346, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewcolosseum",
    "title": "Das Innere des Kolosseums",
    "artist": "C.W. Eckersberg",
    "year": "1816",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1776: https://open.smk.dk/artwork/image/KMS1776, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewjulie",
    "title": "Julie Eckersberg, geborene Juel",
    "artist": "C.W. Eckersberg",
    "year": "1817",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1763: https://open.smk.dk/artwork/image/KMS1763, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewlovenskiold",
    "title": "Sophie Hedvig Løvenskiold mit ihrer dreijährigen Tochter",
    "artist": "C.W. Eckersberg",
    "year": "1817",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4022: https://open.smk.dk/artwork/image/KMS4022, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewnathanson",
    "title": "Die Familie Nathanson",
    "artist": "C.W. Eckersberg",
    "year": "1818",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1241: https://open.smk.dk/artwork/image/KMS1241, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewmassmann",
    "title": "Emilie Henriette Massmann",
    "artist": "C.W. Eckersberg",
    "year": "1820",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4559: https://open.smk.dk/artwork/image/KMS4559, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewdaughters",
    "title": "Bella und Hanna, die älteren Töchter Nathansons",
    "artist": "C.W. Eckersberg",
    "year": "1820",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3498: https://open.smk.dk/artwork/image/KMS3498, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewsuzanne",
    "title": "Suzanne Juel",
    "artist": "C.W. Eckersberg",
    "year": "1823",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1775: https://open.smk.dk/artwork/image/KMS1775, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewemilie",
    "title": "Emilie, die Tochter des Künstlers",
    "artist": "C.W. Eckersberg",
    "year": "1827",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1761: https://open.smk.dk/artwork/image/KMS1761, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewclouds",
    "title": "Wolkenstudie über dem Meer",
    "artist": "C.W. Eckersberg",
    "year": "1826",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6433: https://open.smk.dk/artwork/image/KMS6433, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewkronborg",
    "title": "Blick von den Wällen von Kronborg zur schwedischen Küste",
    "artist": "C.W. Eckersberg",
    "year": "1829",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3241: https://open.smk.dk/artwork/image/KMS3241, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewkullen",
    "title": "Der Kullen vom Meer vor Mølleleje aus",
    "artist": "C.W. Eckersberg",
    "year": "1829",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3933: https://open.smk.dk/artwork/image/KMS3933, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewrenbjaerg",
    "title": "Die Ziegelei Renbjærg an der Flensburger Förde",
    "artist": "C.W. Eckersberg",
    "year": "1830",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1350: https://open.smk.dk/artwork/image/KMS1350, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewbrig",
    "title": "Eine amerikanische Brigg trocknet vor Anker ihre Segel",
    "artist": "C.W. Eckersberg",
    "year": "1831–1832",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6346: https://open.smk.dk/artwork/image/KMS6346, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewdoor",
    "title": "Blick durch eine Tür auf laufende Menschen",
    "artist": "C.W. Eckersberg",
    "year": "1845",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS8847: https://open.smk.dk/artwork/image/KMS8847, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewstreet",
    "title": "Strassenszene bei Wind und Regen",
    "artist": "C.W. Eckersberg",
    "year": "1846",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS8793: https://open.smk.dk/artwork/image/KMS8793, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "ewsound",
    "title": "Schiffe im Sund nördlich von Kronborg",
    "artist": "C.W. Eckersberg",
    "year": "1847",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS536: https://open.smk.dk/artwork/image/KMS536, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "eckersberg",
  "name": "C.W. Eckersberg",
  "title": "C.W. Eckersbergs Lebensweg",
  "life": "1783–1853",
  "part": "Kopenhagen, Paris und Rom",
  "subtitle": "Der Lehrer einer ganzen Malergeneration",
  "cover": "ewsteps",
  "intro": "Reise mit C.W. Eckersberg durch sein Leben: von der Akademie in Kopenhagen nach Paris und Rom und zurück an den Øresund. Die Bilder stammen aus dem Statens Museum for Kunst, das seine Aufnahmen frei zur Verfügung stellt.",
  "ending": [
    "C.W. Eckersberg stirbt am 22. Juli 1853 in Kopenhagen, mit 70 Jahren.",
    "Bis zuletzt ist er Professor an der Akademie; zu seinen Schülern gehört Christen Købke."
  ],
  "epilogue": "C.W. Eckersberg stirbt am 22. Juli 1853 in Kopenhagen. Der Weg führt von Kopenhagen über Paris und Rom zurück nach Kopenhagen.",
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
      "id": "ews1",
      "place": "Akademie und erste Bilder",
      "when": "1803–1810",
      "map": {
        "x": 86,
        "y": 46
      },
      "mapLabel": "Kopenhagen",
      "intro": [
        "Christoffer Wilhelm Eckersberg wird am 2. Januar 1783 in Blåkrog in Südjütland geboren; 1803 beginnt er an der Kunstakademie in Kopenhagen.",
        "Er malt Bildnisse aus seinem Umfeld und Landschaften, unter anderem von der Insel Møn."
      ],
      "works": [
        {
          "pid": "ewself",
          "text": [
            "Eckersberg malt sich selbst in einem ovalen Bildfeld, mit wachem Blick.",
            "Röntgenaufnahmen zeigen darunter ein unvollendetes anderes Bild; das Museum datiert das Bildnis deshalb vor seine Abreise nach Paris 1810."
          ],
          "fact": "1807–1810. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewjens",
          "text": [
            "Der Sohn des Malers Jens Juel, der ebenfalls Jens heisst, trägt einen grossen Spitzenkragen und blickt zur Seite.",
            "Eckersberg malt das Bildnis 1807 auf eine Holztafel."
          ],
          "fact": "1807. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewchristine",
          "text": [
            "Das Bildnis zeigt Christine Rebekka Eckersberg, die erste Frau des Malers, in einem hellen Kleid.",
            "Das Museum übernimmt für das Bild die überlieferte Datierung 1809."
          ],
          "fact": "1809. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewcleft",
          "text": [
            "Dichte Bäume rahmen eine kleine Schlucht mit einem Wasserfall im Garten des Guts Liselund.",
            "Spaziergänger betrachten die sorgfältig gepflegte Parklandschaft."
          ],
          "fact": "1809. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewstile",
          "text": [
            "Der Blick geht von der Nähe der Kreideklippen von Møn nach Westen über die Insel, der Himmel glüht im Abendlicht.",
            "Die Zeichnung dazu entsteht im Juli 1810 bei hellem Tageslicht; den Sonnenuntergang malt Eckersberg erst im Atelier in Kopenhagen."
          ],
          "fact": "1810. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewlyngby",
          "text": [
            "Spaziergänger gehen auf einem Weg, dahinter liegen Häuser zwischen hohen Bäumen.",
            "Das Bild entsteht zwischen Eckersbergs Ankunft in Kopenhagen 1803 und seiner Abreise nach Paris 1810."
          ],
          "fact": "1803–1810. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "ews2",
      "place": "Lehrjahre in Paris",
      "when": "1810–1813",
      "map": {
        "x": 40,
        "y": 90
      },
      "mapLabel": "Paris",
      "intro": [
        "Im Oktober 1810 kommt Eckersberg nach Paris und lernt dort etwa ein Jahr bei Jacques-Louis David.",
        "Daneben zeichnet und malt er die Stadt, ihre Umgebung und das tägliche Leben."
      ],
      "works": [
        {
          "pid": "ewjean",
          "text": [
            "Eckersberg zeigt eine Szene aus der Komödie «Jean de France» des dänischen Dichters Ludvig Holberg.",
            "Er kauft die Leinwand im September 1812 und meldet das Bild im Oktober als fertig."
          ],
          "fact": "1812. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewpontroyal",
          "text": [
            "Der Blick geht vom linken Ufer der Seine über den Fluss zum Louvre und zu den Tuilerien.",
            "Es ist Eckersbergs erstes Stadtbild, in dem er die Zentralperspektive gezielt für die Raumtiefe nutzt."
          ],
          "fact": "1812. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewmeudon",
          "text": [
            "Pariserinnen und Pariser machen einen Ausflug in eine Landschaft im Gegenlicht des späten Nachmittags.",
            "Es ist das einzige reine Landschaftsbild, das Eckersberg in Paris malt; fertig wird es am 27. Februar 1813."
          ],
          "fact": "1813. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "ews3",
      "place": "Malen unter freiem Himmel in Rom",
      "when": "1813–1816",
      "map": {
        "x": 176,
        "y": 112
      },
      "mapLabel": "Rom",
      "intro": [
        "Im Juli 1813 kommt Eckersberg nach Rom und wohnt im selben Haus wie der Bildhauer Bertel Thorvaldsen, mit dem er sich anfreundet.",
        "Ab dem Frühjahr 1814 malt er seine Bilder draussen vor dem Motiv und meidet dabei oft die berühmtesten Ansichten."
      ],
      "works": [
        {
          "pid": "ewangelica",
          "text": [
            "Eckersberg zeigt ein Stadttor und Gebäude des Vatikans; den berühmten Petersdom lässt er bewusst weg.",
            "Es ist vermutlich das erste seiner vielen Bilder von Rom."
          ],
          "fact": "1813. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewdancer",
          "text": [
            "Ein Mädchen in rotem Rock tanzt und hebt den Arm hoch über den Kopf.",
            "Das Bild entsteht in Eckersbergs Jahren in Rom."
          ],
          "fact": "1813–1816. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewcloister",
          "text": [
            "Schattige Bogengänge umgeben den hellen Hof des Franziskanerklosters.",
            "Eckersberg malt das Bild wohl, nachdem er im Frühjahr 1814 begonnen hat, im Freien zu malen."
          ],
          "fact": "1813–1816. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewpergola",
          "text": [
            "Eine belaubte Pergola führt streng symmetrisch auf eine Tür zu, neben der ein Baum steht.",
            "Ungewöhnlich für ihn malt Eckersberg hier mit breiten Pinselstrichen und nennt den genauen Ort nicht."
          ],
          "fact": "1814–1816. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewsteps",
          "text": [
            "Eine lange Marmortreppe führt hinauf zur mittelalterlichen Kirche Santa Maria in Aracoeli in Rom.",
            "Eckersberg hält Sonne und Schatten so fest, wie sie am Vormittag fallen."
          ],
          "fact": "1814–1816. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewtiber",
          "text": [
            "Der Blick geht von Trastevere über den Tiber zur runden Engelsburg.",
            "Häuser säumen das Ufer, auf dem Wasser liegen Boote."
          ],
          "fact": "um 1815. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewcolosseum",
          "text": [
            "Der Blick fällt in das Innere des Kolosseums mit seinen verfallenen Bogenreihen.",
            "Das Museum datiert das Bild nach Eckersbergs Aufenthalt in Rom und nach dem Motiv auf 1816."
          ],
          "fact": "1816. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "ews4",
      "place": "Professor und Porträtmaler",
      "when": "1816–1827",
      "map": {
        "x": 90,
        "y": 50
      },
      "mapLabel": "Kopenhagen",
      "intro": [
        "1816 kehrt Eckersberg nach Kopenhagen zurück, 1817 heiratet er Julie Juel, und 1818 wird er Professor an der Akademie.",
        "Er malt viele Bildnisse für Kopenhagener Familien; sein wichtigster Auftraggeber ist der Kaufmann Mendel Levin Nathanson."
      ],
      "works": [
        {
          "pid": "ewjulie",
          "text": [
            "Julie Eckersberg sitzt locker auf einem Stuhl, lächelt leicht und blickt direkt zum Betrachter.",
            "Sie und Eckersberg heiraten am 7. Februar 1817; das Bildnis entsteht im Juli desselben Jahres."
          ],
          "fact": "1817. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewlovenskiold",
          "text": [
            "Die Mutter sitzt, die kleine Tochter steht erhöht neben ihr, so dass beide fast gleich gross wirken.",
            "Eckersberg vollendet das Bildnis am 20. Juni 1817, in einem Frühjahr mit acht Porträts."
          ],
          "fact": "1817. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewnathanson",
          "text": [
            "Der Kaufmann Mendel Levin Nathanson und seine Frau werden von ihren Kindern begrüsst, die mitten im Tanz zu sein scheinen.",
            "Es ist Eckersbergs figurenreichstes Bildnis; Nathanson ist von 1812 bis 1820 sein wichtigster Auftraggeber."
          ],
          "fact": "1818. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewmassmann",
          "text": [
            "Emilie Henriette Massmann, die Verlobte von Frederik Wilhelm Caspar von Benzon, blickt kühl und zurückhaltend.",
            "Das Museum sieht in den feinen Linien des Bildnisses den Einfluss des französischen Malers Ingres."
          ],
          "fact": "1820. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewdaughters",
          "text": [
            "Die beiden Schwestern stehen in einem schlichten Salon mit einem Papageienkäfig auf dem Tisch.",
            "Die eine ist streng von vorn, die andere streng im Profil gemalt."
          ],
          "fact": "1820. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewsuzanne",
          "text": [
            "Suzanne Juel ist die Schwägerin des Malers; später wird sie seine dritte Frau.",
            "Sie trägt einen hohen weissen Rüschenkragen und blickt ruhig zum Betrachter."
          ],
          "fact": "1823. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewemilie",
          "text": [
            "Emilie ist die Tochter von Eckersberg und Julie Juel, geboren im November 1817.",
            "Sie trägt ein schwarzes Kleid, ihr rötliches Haar fällt offen auf die Schultern."
          ],
          "fact": "1827. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "ews5",
      "place": "Himmel, Meer und Bewegung",
      "when": "1826–1853",
      "map": {
        "x": 82,
        "y": 42
      },
      "mapLabel": "Øresund",
      "intro": [
        "Ab 1826 studiert Eckersberg Wolken und Wetter und malt Schiffe auf dem Øresund.",
        "Er schickt seine Schüler zum Malen hinaus aufs Land und schreibt 1841 ein Lehrbuch über die Perspektive."
      ],
      "works": [
        {
          "pid": "ewclouds",
          "text": [
            "Wolken türmen sich über einem ruhigen, flachen Meer.",
            "Im September 1826 malt Eckersberg in einer Bucht nördlich von Kopenhagen mehrere solcher Wolkenstudien."
          ],
          "fact": "1826. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewkronborg",
          "text": [
            "Von den Wällen von Schloss Kronborg geht der Blick über den Sund zur schwedischen Küste.",
            "Am Fahnenmast weht die dänische Flagge, auf dem Wasser fahren Schiffe."
          ],
          "fact": "1829. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewkullen",
          "text": [
            "Der Höhenzug Kullen liegt als langer dunkler Rücken unter einem hellen Himmel.",
            "Eckersberg malt ihn vom Meer vor Mølleleje aus."
          ],
          "fact": "1829. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewrenbjaerg",
          "text": [
            "Rote Ziegeldächer leuchten vor grünen Hügeln, auf der Förde zeigen sich weisse Schaumkronen.",
            "Eckersberg malt das Bild im Mai 1830 auf einer Reise in die Gegend seiner Kindheit; wegen eines Sturms vollendet er es in Kopenhagen."
          ],
          "fact": "1830. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewbrig",
          "text": [
            "Eine Brigg liegt ruhig vor Anker, ihre Segel hängen zum Trocknen locker an den Rahen.",
            "Laut Tagebuch beginnt Eckersberg das Bild im Dezember 1831 und vollendet es im Januar 1832."
          ],
          "fact": "1831–1832. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewdoor",
          "text": [
            "Durch eine Tür sieht man Menschen vorbeilaufen; was sie antreibt, bleibt ausserhalb des Bildes.",
            "Das Bild geht auf eine Zeichnung aus Eckersbergs Lehrbuch über die Perspektive von 1841 zurück."
          ],
          "fact": "1845. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewstreet",
          "text": [
            "Wind und Regen zerren an Kleidern und Schirm von Menschen in einer Strasse.",
            "Laut Eckersbergs Tagebuch entsteht das Bild am 26. November 1846."
          ],
          "fact": "1846. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "ewsound",
          "text": [
            "Segelschiffe fahren unter hohen Wolken durch den Sund nördlich von Schloss Kronborg bei Helsingør.",
            "Die Arbeit an dem Bild ist in Eckersbergs Tagebuch festgehalten."
          ],
          "fact": "1847. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
