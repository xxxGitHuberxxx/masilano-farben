// v10.43 Utagawa Hiroshige II life journey (1826–1869). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "hzivy",
    "title": "Kleiner Vogel und Efeu",
    "artist": "Utagawa Hiroshige II",
    "year": "um 1843–1847",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1928.280: https://www.artic.edu/artworks/56215, CC0 (gemeinfrei)"
  },
  {
    "id": "hzwhiteeye",
    "title": "Brillenvogel und Kakifrüchte",
    "artist": "Utagawa Hiroshige II",
    "year": "um 1847–1852",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1928.283: https://www.artic.edu/artworks/56223, CC0 (gemeinfrei)"
  },
  {
    "id": "hzsparrow",
    "title": "Spatz auf einem Kamelienzweig",
    "artist": "Utagawa Hiroshige II",
    "year": "um 1847–1852",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1928.281: https://www.artic.edu/artworks/56217, CC0 (gemeinfrei)"
  },
  {
    "id": "hzparrot",
    "title": "Papagei auf einem Pflaumenzweig",
    "artist": "Utagawa Hiroshige II",
    "year": "um 1848–1852",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1928.282: https://www.artic.edu/artworks/56220, CC0 (gemeinfrei)"
  },
  {
    "id": "hzkingfisher",
    "title": "Eisvogel und Hortensie",
    "artist": "Utagawa Hiroshige II",
    "year": "1857",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1928.833: https://www.artic.edu/artworks/88836, CC0 (gemeinfrei)"
  },
  {
    "id": "hzpine",
    "title": "Vogel auf einem Kiefernzweig",
    "artist": "Utagawa Hiroshige II",
    "year": "1857",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1939.1517: https://www.artic.edu/artworks/34403, CC0 (gemeinfrei)"
  },
  {
    "id": "hztsuten",
    "title": "Die Tsūten-Brücke am Tempel Tōfuku-ji in Kyōto",
    "artist": "Utagawa Hiroshige II",
    "year": "1859",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1990.607.53: https://www.artic.edu/artworks/196732, CC0 (gemeinfrei)"
  },
  {
    "id": "hzhase",
    "title": "Der Hase-Tempel in der Provinz Yamato",
    "artist": "Utagawa Hiroshige II",
    "year": "1859",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1990.607.71: https://www.artic.edu/artworks/196750, CC0 (gemeinfrei)"
  },
  {
    "id": "hzyoshino",
    "title": "Der Berg Yoshino in der Provinz Yamato",
    "artist": "Utagawa Hiroshige II",
    "year": "1859",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1990.607.102: https://www.artic.edu/artworks/196781, CC0 (gemeinfrei)"
  },
  {
    "id": "hzamano",
    "title": "Amanohashidate in der Provinz Tango",
    "artist": "Utagawa Hiroshige II",
    "year": "1859",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.3788: https://www.artic.edu/artworks/26683, CC0 (gemeinfrei)"
  },
  {
    "id": "hztaka",
    "title": "Der Strand von Taka in der Provinz Tajima",
    "artist": "Utagawa Hiroshige II",
    "year": "1859",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1990.607.98: https://www.artic.edu/artworks/196777, CC0 (gemeinfrei)"
  },
  {
    "id": "hzhara",
    "title": "Hara in der Provinz Suruga",
    "artist": "Utagawa Hiroshige II",
    "year": "1860",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1990.607.148: https://www.artic.edu/artworks/196827, CC0 (gemeinfrei)"
  },
  {
    "id": "hzkikyo",
    "title": "Die Ebene Kikyōgahara in der Provinz Shinshū",
    "artist": "Utagawa Hiroshige II",
    "year": "1860",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1990.607.104: https://www.artic.edu/artworks/196783, CC0 (gemeinfrei)"
  },
  {
    "id": "hzmikuni",
    "title": "Der grosse Hafen von Mikuni in der Provinz Echizen",
    "artist": "Utagawa Hiroshige II",
    "year": "1860",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1990.607.97: https://www.artic.edu/artworks/196776, CC0 (gemeinfrei)"
  },
  {
    "id": "hzchuzenji",
    "title": "Der See Chūzenji in der Provinz Shimotsuke",
    "artist": "Utagawa Hiroshige II",
    "year": "1860",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1968.368: https://www.artic.edu/artworks/29595, CC0 (gemeinfrei)"
  },
  {
    "id": "hziris",
    "title": "Irisgärten in Horikiri",
    "artist": "Utagawa Hiroshige II",
    "year": "1861",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 2007.49.279: https://www.metmuseum.org/art/collection/search/73562, CC0 (gemeinfrei)"
  },
  {
    "id": "hzryogoku",
    "title": "Feuerwerk über Ryōgoku",
    "artist": "Utagawa Hiroshige II",
    "year": "1862",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, JP1485: https://www.metmuseum.org/art/collection/search/55579, CC0 (gemeinfrei)"
  },
  {
    "id": "hzmimeguri",
    "title": "Der Mimeguri-Damm am Sumida-Fluss",
    "artist": "Utagawa Hiroshige II",
    "year": "1862",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1928.346: https://www.artic.edu/artworks/60396, CC0 (gemeinfrei)"
  },
  {
    "id": "hzimado",
    "title": "Die Imado-Brücke und der Matsuchi-Hügel",
    "artist": "Utagawa Hiroshige II",
    "year": "1862",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.3785: https://www.artic.edu/artworks/26676, CC0 (gemeinfrei)"
  },
  {
    "id": "hztakino",
    "title": "Takino in der Provinz Harima",
    "artist": "Utagawa Hiroshige II",
    "year": "1862",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1939.1305: https://www.artic.edu/artworks/33708, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "hiroshigeii",
  "name": "Utagawa Hiroshige II",
  "title": "Utagawa Hiroshige IIs Lebensweg",
  "life": "1826–1869",
  "part": "Vögel, Berge und Küsten",
  "subtitle": "Durch die Provinzen nach Edo",
  "cover": "hzyoshino",
  "intro": "Reise mit dem japanischen Holzschnittkünstler Utagawa Hiroshige II: zu kleinen Blättern mit Vögeln und Blumen, zu Tempeln, Bergen und Küsten in vielen Provinzen und zu Flüssen und Brücken in Edo. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Utagawa Hiroshige II stirbt 1869.",
    "Seine Holzschnitte werden heute in Museen auf der ganzen Welt aufbewahrt."
  ],
  "epilogue": "Utagawa Hiroshige II stirbt 1869. Der Weg führt von kleinen Vogel- und Blumenblättern über Tempel, Berge und Küsten der Provinzen bis an die Flüsse von Edo.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M168,8 C182,4 196,10 200,20 C196,30 184,34 174,30 C166,26 162,14 168,8 Z",
      "M170,40 C176,48 174,60 166,70 C160,80 156,86 150,90 C140,96 128,100 116,104 C104,108 92,112 84,110 C80,104 90,98 100,94 C112,90 122,84 132,78 C142,72 150,62 156,52 C160,44 164,38 170,40 Z",
      "M96,114 C104,112 112,114 114,118 C110,124 100,124 94,120 C92,118 92,116 96,114 Z",
      "M70,112 C78,110 84,116 82,126 C80,136 72,140 66,134 C62,126 64,116 70,112 Z"
    ]
  },
  "stations": [
    {
      "id": "hzs1",
      "place": "Vögel und Blumen",
      "when": "1843–1857",
      "map": {
        "x": 152,
        "y": 78
      },
      "mapLabel": "Edo",
      "intro": [
        "Utagawa Hiroshige II wird 1826 geboren; er ist Schüler des Holzschnittmeisters Utagawa Hiroshige und arbeitet zuerst unter dem Namen Shigenobu.",
        "Seine kleinen Blätter mit Vögeln auf blühenden Zweigen signiert er mit „Shigenobu“."
      ],
      "works": [
        {
          "pid": "hzivy",
          "text": [
            "Ein kleiner grüner Vogel hängt an einer Ranke mit roten Blättern, daneben stehen Schriftzeilen.",
            "Das kleine Blatt ist mit „Shigenobu fude“ signiert, gemalt von Shigenobu."
          ],
          "fact": "um 1843–1847. Art Institute of Chicago."
        },
        {
          "pid": "hzwhiteeye",
          "text": [
            "Ein grüner Brillenvogel sitzt auf einem Zweig mit runden, orangefarbenen Kakifrüchten.",
            "Der Holzschnitt hat das kleine Koban-Format."
          ],
          "fact": "um 1847–1852. Art Institute of Chicago."
        },
        {
          "pid": "hzsparrow",
          "text": [
            "Ein Spatz sitzt auf einem Kamelienzweig mit roten und rosa Blüten.",
            "Oben links stehen Schriftzeilen, unten rechts die Signatur „Shigenobu fude“."
          ],
          "fact": "um 1847–1852. Art Institute of Chicago."
        },
        {
          "pid": "hzparrot",
          "text": [
            "Ein roter Papagei mit grünen Flügeln sitzt auf einem blühenden Pflaumenzweig.",
            "Das Art Institute of Chicago datiert das kleine Blatt um 1848 bis 1852."
          ],
          "fact": "um 1848–1852. Art Institute of Chicago."
        },
        {
          "pid": "hzkingfisher",
          "text": [
            "Ein blauer Eisvogel mit rotem Schnabel fliegt unter einer Dolde blauer Hortensienblüten.",
            "Das schmale Hochformat heisst Chūtanzaku."
          ],
          "fact": "1857. Art Institute of Chicago."
        },
        {
          "pid": "hzpine",
          "text": [
            "Ein roter Vogel sitzt auf einem Kiefernzweig mit dunkelblauen Nadelbüscheln.",
            "Das Blatt ist mit „Shigenobu hitsu“ signiert und trägt das Siegel des Verlegers Jakurindō."
          ],
          "fact": "1857. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "hzs2",
      "place": "Hundert berühmte Ansichten der Provinzen",
      "when": "1859",
      "map": {
        "x": 128,
        "y": 88
      },
      "mapLabel": "Kyōto und Umgebung",
      "intro": [
        "1859, im Jahr nach dem Tod seines Lehrers, heiratet er dessen Tochter und übernimmt den Namen Hiroshige.",
        "Im selben Jahr erscheinen Blätter seiner Reihe „Hundert berühmte Ansichten der verschiedenen Provinzen“ mit Tempeln, Bergen und Küsten."
      ],
      "works": [
        {
          "pid": "hztsuten",
          "text": [
            "Rote Ahornbäume leuchten in der Schlucht unter einer überdachten Brücke.",
            "Das Blatt gehört zur Reihe „Hundert berühmte Ansichten der verschiedenen Provinzen“."
          ],
          "fact": "1859. Art Institute of Chicago."
        },
        {
          "pid": "hzhase",
          "text": [
            "Weisse Kirschblüten umgeben die Tempelgebäude am Berghang.",
            "Ein überdachter Treppengang führt den Hang hinauf, und unten leuchtet ein gelbes Feld."
          ],
          "fact": "1859. Art Institute of Chicago."
        },
        {
          "pid": "hzyoshino",
          "text": [
            "Unzählige Kirschbäume blühen an den grünen Hängen, und ein Wasserfall stürzt durch das Tal.",
            "In der Ferne erhebt sich ein blauer Berggipfel."
          ],
          "fact": "1859. Art Institute of Chicago."
        },
        {
          "pid": "hzamano",
          "text": [
            "Eine lange, mit Kiefern bewachsene Landzunge zieht sich durch die blaue Bucht.",
            "Am Himmel steht der Vollmond über fernen Hügeln."
          ],
          "fact": "1859. Art Institute of Chicago."
        },
        {
          "pid": "hztaka",
          "text": [
            "Eine hohe Felswand mit blühenden Kirschbäumen ragt über eine stille Bucht.",
            "Am Horizont färbt sich der Himmel rötlich über dem Meer."
          ],
          "fact": "1859. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "hzs3",
      "place": "Von Provinz zu Provinz",
      "when": "1860–1861",
      "map": {
        "x": 142,
        "y": 76
      },
      "mapLabel": "Japan",
      "intro": [
        "1860 folgen weitere Blätter der Reihe, vom Berg Fuji über eine grüne Hochebene bis zu einem Hafen und einem Bergsee.",
        "1861 zeigt er Irisgärten bei Edo in einem Druck, der fast nur in Blautönen gedruckt ist."
      ],
      "works": [
        {
          "pid": "hzhara",
          "text": [
            "Der schneebedeckte Fuji erhebt sich hoch über grünen Feldern und Kiefern.",
            "Im Vordergrund zieht ein langer Zug von Reisenden mit Fahnen vorbei."
          ],
          "fact": "1860. Art Institute of Chicago."
        },
        {
          "pid": "hzkikyo",
          "text": [
            "Ein Bach schlängelt sich durch eine grüne, blühende Ebene, an deren Rand grosse Kiefern stehen.",
            "Kleine Gestalten wandern am Ufer entlang."
          ],
          "fact": "1860. Art Institute of Chicago."
        },
        {
          "pid": "hzmikuni",
          "text": [
            "Ein grosses Segelschiff liegt im Hafen, und ein voll besetztes Boot legt am Ufer an.",
            "Weiter draussen auf dem hellen Wasser fährt ein zweites Schiff."
          ],
          "fact": "1860. Art Institute of Chicago."
        },
        {
          "pid": "hzchuzenji",
          "text": [
            "Zwei hohe Zedern stehen am Ufer, und im blauen See steht ein rotes Tor.",
            "Hinter dem See erheben sich bewaldete Berge."
          ],
          "fact": "1860. Art Institute of Chicago."
        },
        {
          "pid": "hziris",
          "text": [
            "Spaziergänger gehen unter einer Kiefer an weiten Irisbeeten vorbei.",
            "Der Druck in Fächerform ist ein Aizuri-e, fast ganz in Blautönen gedruckt."
          ],
          "fact": "1861. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "hzs4",
      "place": "Edo und die Provinzen",
      "when": "1862",
      "map": {
        "x": 152,
        "y": 78
      },
      "mapLabel": "Edo",
      "intro": [
        "1862 entwirft er neue Reihen, etwa die „Sechsunddreissig Ansichten der östlichen Hauptstadt“ mit Ansichten von Edo und die „Achtundsechzig Ansichten der verschiedenen Provinzen“.",
        "Um 1865 wird seine Ehe aufgelöst, und er zieht sich nach Yokohama zurück."
      ],
      "works": [
        {
          "pid": "hzryogoku",
          "text": [
            "Eine lange Holzbrücke führt über den Fluss, auf dem sich viele Boote drängen.",
            "Am Himmel zerstiebt ein Feuerwerk in kleine Funken."
          ],
          "fact": "1862. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "hzmimeguri",
          "text": [
            "Blühende Kirschbäume säumen den Damm, und ein Tor führt zu einem Schrein.",
            "Das Blatt gehört zur Reihe „Berühmte Orte in der östlichen Hauptstadt“."
          ],
          "fact": "1862. Art Institute of Chicago."
        },
        {
          "pid": "hzimado",
          "text": [
            "Schnee bedeckt die Dächer des Tempels auf dem Hügel und die Bäume am Wasser.",
            "Das Blatt gehört zur Reihe „Sechsunddreissig Ansichten der östlichen Hauptstadt“."
          ],
          "fact": "1862. Art Institute of Chicago."
        },
        {
          "pid": "hztakino",
          "text": [
            "Ein Fluss schäumt zwischen Felsen, und dahinter erhebt sich ein grüner Hügel.",
            "Das Blatt ist Nummer 44 der Reihe „Achtundsechzig Ansichten der verschiedenen Provinzen“."
          ],
          "fact": "1862. Art Institute of Chicago."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
