// v10.43 Suzuki Harunobu life journey (um 1725–1770). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "szkamezo",
    "title": "Der Schauspieler Ichimura Kamezō I.",
    "artist": "Suzuki Harunobu",
    "year": "1760",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2011: https://www.artic.edu/artworks/19954, CC0 (gemeinfrei)"
  },
  {
    "id": "szkikunojo",
    "title": "Der Schauspieler Segawa Kikunojō II. als Yamabuki",
    "artist": "Suzuki Harunobu",
    "year": "1763",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2014: https://www.artic.edu/artworks/19963, CC0 (gemeinfrei)"
  },
  {
    "id": "szkarasaki",
    "title": "Nachtregen bei Karasaki",
    "artist": "Suzuki Harunobu",
    "year": "Anfang der 1760er Jahre",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2016: https://www.artic.edu/artworks/19969, CC0 (gemeinfrei)"
  },
  {
    "id": "szseta",
    "title": "Abendrot bei Seta",
    "artist": "Suzuki Harunobu",
    "year": "Anfang der 1760er Jahre",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1942.79: https://www.artic.edu/artworks/44172, CC0 (gemeinfrei)"
  },
  {
    "id": "szkogo",
    "title": "Kogō no Tsubone und Minamoto no Nakakuni",
    "artist": "Suzuki Harunobu",
    "year": "Anfang der 1760er Jahre",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1935.393: https://www.artic.edu/artworks/21976, CC0 (gemeinfrei)"
  },
  {
    "id": "szpoet",
    "title": "Chinesischer Dichter",
    "artist": "Suzuki Harunobu",
    "year": "um 1761–1765",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1942.84: https://www.artic.edu/artworks/44194, CC0 (gemeinfrei)"
  },
  {
    "id": "szshower",
    "title": "Junge Frau in einem Sommerregen",
    "artist": "Suzuki Harunobu",
    "year": "1765",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1957.556: https://www.artic.edu/artworks/6805, CC0 (gemeinfrei)"
  },
  {
    "id": "szloom",
    "title": "Junge Frau am Webstuhl",
    "artist": "Suzuki Harunobu",
    "year": "1765",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1939.173: https://www.artic.edu/artworks/30072, CC0 (gemeinfrei)"
  },
  {
    "id": "szwater",
    "title": "Ein Wasserverkäufer",
    "artist": "Suzuki Harunobu",
    "year": "1765",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2027: https://www.artic.edu/artworks/20007, CC0 (gemeinfrei)"
  },
  {
    "id": "szlotus",
    "title": "Beim Sammeln von Lotosblumen",
    "artist": "Suzuki Harunobu",
    "year": "1765",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2028: https://www.artic.edu/artworks/20010, CC0 (gemeinfrei)"
  },
  {
    "id": "szmaple",
    "title": "Herbstliches Ahornlaub wird verbrannt",
    "artist": "Suzuki Harunobu",
    "year": "1765",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2047: https://www.artic.edu/artworks/20827, CC0 (gemeinfrei)"
  },
  {
    "id": "szfan",
    "title": "Klarer Tag beim Fächer",
    "artist": "Suzuki Harunobu",
    "year": "1765",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1928.896: https://www.artic.edu/artworks/88953, CC0 (gemeinfrei)"
  },
  {
    "id": "szikebana",
    "title": "Blumengesteck im Ikenobō-Stil",
    "artist": "Suzuki Harunobu",
    "year": "um 1765",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, JP863: https://www.metmuseum.org/art/collection/search/54542, CC0 (gemeinfrei)"
  },
  {
    "id": "szbamboo",
    "title": "Am Bambushain vorbei",
    "artist": "Suzuki Harunobu",
    "year": "1766",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2053: https://www.artic.edu/artworks/20844, CC0 (gemeinfrei)"
  },
  {
    "id": "szbaby",
    "title": "Frau und Mädchen unterhalten ein Kleinkind",
    "artist": "Suzuki Harunobu",
    "year": "1767",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2093: https://www.artic.edu/artworks/20938, CC0 (gemeinfrei)"
  },
  {
    "id": "szkagura",
    "title": "Die Kagura-Tänzerin",
    "artist": "Suzuki Harunobu",
    "year": "um 1766",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1925.2052: https://www.artic.edu/artworks/20840, CC0 (gemeinfrei)"
  },
  {
    "id": "szkiyomizu",
    "title": "Junge Frau auf dem Balkon des Kiyomizu-Tempels",
    "artist": "Suzuki Harunobu",
    "year": "um 1766",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1928.915: https://www.artic.edu/artworks/89007, CC0 (gemeinfrei)"
  },
  {
    "id": "szcards",
    "title": "Junge Frauen beim Gedichtkartenspiel",
    "artist": "Suzuki Harunobu",
    "year": "um 1766–1767",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1929.80: https://www.artic.edu/artworks/90463, CC0 (gemeinfrei)"
  },
  {
    "id": "szwillow",
    "title": "Frau läuft im Wind an einer Weide vorbei",
    "artist": "Suzuki Harunobu",
    "year": "1766 oder 1767",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1942.148: https://clevelandart.org/art/1942.148, CC0 (gemeinfrei)"
  },
  {
    "id": "szfireflies",
    "title": "Auf der Suche nach Glühwürmchen",
    "artist": "Suzuki Harunobu",
    "year": "1768",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1952.327: https://www.artic.edu/artworks/77297, CC0 (gemeinfrei)"
  },
  {
    "id": "szide",
    "title": "Der Juwelenfluss bei Ide",
    "artist": "Suzuki Harunobu",
    "year": "um 1768",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, JP3019: https://www.metmuseum.org/art/collection/search/56417, CC0 (gemeinfrei)"
  },
  {
    "id": "szchofu",
    "title": "Der Juwelenfluss bei Chōfu",
    "artist": "Suzuki Harunobu",
    "year": "um 1768",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, JP3022: https://www.metmuseum.org/art/collection/search/56420, CC0 (gemeinfrei)"
  },
  {
    "id": "szgeese",
    "title": "Wildgänse über dem Sumida-Fluss",
    "artist": "Suzuki Harunobu",
    "year": "um 1769",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, JP2780: https://www.metmuseum.org/art/collection/search/57036, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "harunobu",
  "name": "Suzuki Harunobu",
  "title": "Suzuki Harunobus Lebensweg",
  "life": "um 1725–1770",
  "part": "Holzschnitte aus Edo",
  "subtitle": "Der Meister des farbigen Holzschnitts",
  "cover": "szchofu",
  "intro": "Reise mit Suzuki Harunobu durch sein Leben in Edo, dem heutigen Tokio: von Drucken in wenigen Farben zu den ersten Holzschnitten in vielen Farben. Die Blätter stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Suzuki Harunobu stirbt 1770.",
    "Nach ihm werden kräftige, vielfarbige Drucke zum Kennzeichen des japanischen Holzschnitts."
  ],
  "epilogue": "Suzuki Harunobu stirbt 1770. Der Weg führt durch zehn Jahre in Edo, vom Druck in wenigen Farben zum Vielfarbendruck.",
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
      "id": "szs1",
      "place": "Schauspieler und Landschaften in wenigen Farben",
      "when": "1760–1764",
      "map": {
        "x": 150,
        "y": 76
      },
      "mapLabel": "Edo",
      "intro": [
        "Suzuki Harunobu lebt und arbeitet in Edo, dem heutigen Tokio; sein Geburtsjahr ist nicht sicher bekannt, die Museen nennen etwa 1725.",
        "Seine frühen Blätter sind mit nur wenigen Farben gedruckt: Schauspieler, Landschaften und Szenen aus alten Geschichten."
      ],
      "works": [
        {
          "pid": "szkamezo",
          "text": [
            "Der Schauspieler steht in einem gemusterten Gewand neben einem grossen schwarzen Kasten.",
            "Er spielt den Tachibanaya Hikosō im Stück «Ume Momiji Date no Ōkido» am Ichimura-Theater."
          ],
          "fact": "1760. Art Institute of Chicago."
        },
        {
          "pid": "szkikunojo",
          "text": [
            "Der Schauspieler zeigt sich in der Rolle der Yamabuki, mit einem Fächer in der Hand.",
            "Das Stück wird im elften Monat 1763 am Ichimura-Theater gespielt."
          ],
          "fact": "1763. Art Institute of Chicago."
        },
        {
          "pid": "szkarasaki",
          "text": [
            "Eine Kiefer steht auf einer Landzunge, davor gleitet ein Boot über das Wasser.",
            "Das Blatt gehört zur Serie «Acht Ansichten von Ōmi»."
          ],
          "fact": "Anfang der 1760er Jahre. Art Institute of Chicago."
        },
        {
          "pid": "szseta",
          "text": [
            "Reiter ziehen über eine lange Brücke, auf dem Wasser fahren Segelboote.",
            "Auch dieses Blatt gehört zur Serie «Acht Ansichten von Ōmi»."
          ],
          "fact": "Anfang der 1760er Jahre. Art Institute of Chicago."
        },
        {
          "pid": "szkogo",
          "text": [
            "Ein Reiter mit Begleiter hält unter dem Mond an einer Mauer, dahinter liegt ein Haus.",
            "Das Blatt zeigt eine Szene aus einer alten Erzählung und trägt das Siegel des Verlegers Yamamura."
          ],
          "fact": "Anfang der 1760er Jahre. Art Institute of Chicago."
        },
        {
          "pid": "szpoet",
          "text": [
            "Eine Gestalt in Rot blickt durch ein rundes Fenster auf eine weite Landschaft.",
            "Oben steht ein chinesischer Vers über ferne blaue Berge über dem blauen Meer."
          ],
          "fact": "um 1761–1765. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "szs2",
      "place": "Das Jahr der Kalenderbilder",
      "when": "1765",
      "map": {
        "x": 156,
        "y": 72
      },
      "mapLabel": "Edo",
      "intro": [
        "1765 bestellen wohlhabende Kunstfreunde in Edo bei Harunobu kostbare Drucke, die sie zum Neujahr verschenken; manche verstecken den Kalender des Jahres im Bild.",
        "Dafür werden bis zu zehn Druckstöcke verwendet, und es entstehen die ersten Holzschnitte in vielen Farben, «Brokatbilder» genannt."
      ],
      "works": [
        {
          "pid": "szshower",
          "text": [
            "Wind und schräger Regen erfassen eine junge Frau, ihre Ärmel flattern.",
            "Das Museum führt das Blatt als Surimono."
          ],
          "fact": "1765. Art Institute of Chicago."
        },
        {
          "pid": "szloom",
          "text": [
            "Eine junge Frau sitzt an einem Webstuhl und arbeitet.",
            "Das Blatt entsteht in dem Jahr, in dem der Vielfarbendruck beginnt."
          ],
          "fact": "1765. Art Institute of Chicago."
        },
        {
          "pid": "szwater",
          "text": [
            "Ein Mann mit Hut trägt zwei Eimer an einer Stange über der Schulter.",
            "Auch dieses Blatt führt das Museum als Surimono."
          ],
          "fact": "1765. Art Institute of Chicago."
        },
        {
          "pid": "szlotus",
          "text": [
            "Zwei Frauen sind in einem Boot zwischen Lotosblättern unterwegs.",
            "Eine beugt sich über den Bootsrand, die andere steht mit einer Stange."
          ],
          "fact": "1765. Art Institute of Chicago."
        },
        {
          "pid": "szmaple",
          "text": [
            "Eine Frau blickt über einen Zaun auf eine kniende Gestalt an einem kleinen Feuer.",
            "Über dem Zaun leuchten die gelben Blätter eines Ahorns."
          ],
          "fact": "1765. Art Institute of Chicago."
        },
        {
          "pid": "szfan",
          "text": [
            "Zwei junge Frauen gehen nebeneinander, eine hält einen Fächer.",
            "Das Blatt gehört zur Serie «Acht Ansichten des Salons», die alte Landschaftsthemen auf Dinge im Haus überträgt."
          ],
          "fact": "1765. Art Institute of Chicago."
        },
        {
          "pid": "szikebana",
          "text": [
            "Ein Gesteck aus Zweigen, Blättern und Bambus steht in einer weissen Vase auf einem roten Sockel.",
            "Der Titel nennt den Ikenobō-Stil des Blumensteckens."
          ],
          "fact": "um 1765. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "szs3",
      "place": "Alltag und alte Gedichte",
      "when": "1766–1767",
      "map": {
        "x": 144,
        "y": 80
      },
      "mapLabel": "Edo",
      "intro": [
        "Die Verleger in Edo übernehmen den Vielfarbendruck schnell für den Verkauf.",
        "Harunobu zeigt Szenen aus dem täglichen Leben und spielt auf klassische Gedichte aus China und Japan an."
      ],
      "works": [
        {
          "pid": "szbamboo",
          "text": [
            "Eine junge Frau mit Schirm geht im Schnee an einem Bambushain vorbei.",
            "Auch dieses Blatt führt das Museum als Surimono."
          ],
          "fact": "1766. Art Institute of Chicago."
        },
        {
          "pid": "szbaby",
          "text": [
            "Eine Frau und ein Mädchen beschäftigen sich mit einem kleinen Kind.",
            "Im Hintergrund steht eine Pflanze vor einem Bambusvorhang."
          ],
          "fact": "1767. Art Institute of Chicago."
        },
        {
          "pid": "szkagura",
          "text": [
            "Eine Tänzerin in dunklem Gewand steht auf einer Veranda mit rotem Geländer.",
            "Sie hält einen langen Stab in der Hand."
          ],
          "fact": "um 1766. Art Institute of Chicago."
        },
        {
          "pid": "szkiyomizu",
          "text": [
            "Eine junge Frau sitzt am roten Geländer eines Balkons, unter ihr wachsen grüne Bäume.",
            "Die Kronen der Bäume reichen bis an den Balkon heran."
          ],
          "fact": "um 1766. Art Institute of Chicago."
        },
        {
          "pid": "szcards",
          "text": [
            "Drei junge Frauen beugen sich über Karten, die auf dem Boden ausgelegt sind.",
            "Auf den Karten dieses Spiels stehen Gedichte."
          ],
          "fact": "um 1766–1767. Art Institute of Chicago."
        },
        {
          "pid": "szwillow",
          "text": [
            "Eine Frau eilt mit einem Schirm an einer Weide vorbei, deren Zweige im Wind wehen.",
            "Der dunkle Himmel lässt die Gestalt hell hervortreten."
          ],
          "fact": "1766 oder 1767. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "szs4",
      "place": "Edo und die Juwelenflüsse",
      "when": "1768–1770",
      "map": {
        "x": 152,
        "y": 84
      },
      "mapLabel": "Edo",
      "intro": [
        "In seinen letzten Jahren entwirft Harunobu Serien wie die «Sechs Juwelenflüsse» und die «Acht modischen Ansichten von Edo».",
        "Man schätzt, dass er in nur fünf Jahren bis zu 800 verschiedene Blätter entworfen hat."
      ],
      "works": [
        {
          "pid": "szfireflies",
          "text": [
            "Ein stehendes Mädchen hält eine Laterne, das andere kniet bei einem Käfig für die Glühwürmchen.",
            "Die Nacht ist als flaches Schwarz gedruckt, ohne Schatten."
          ],
          "fact": "1768. Art Institute of Chicago."
        },
        {
          "pid": "szide",
          "text": [
            "Drei Frauen gehen vorsichtig durch einen flachen Fluss, am Ufer blühen gelbe Yamabuki-Blumen.",
            "Im Feld oben steht ein Gedicht von Fujiwara no Shunzei über den Ort."
          ],
          "fact": "um 1768. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "szchofu",
          "text": [
            "Eine Frau spült ein langes Tuch im Fluss, es sieht fast aus, als tanze sie damit.",
            "Chōfu ist bekannt für das Bleichen von Stoffen; oben steht ein Gedicht von Fujiwara no Teika."
          ],
          "fact": "um 1768. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "szgeese",
          "text": [
            "Zwei Frauen sind in einem kleinen Boot auf dem Fluss, die eine steht, die andere kniet mit einer Angelschnur.",
            "Das Blatt gehört zur Serie «Acht modische Ansichten von Edo»."
          ],
          "fact": "um 1769. Metropolitan Museum of Art, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
