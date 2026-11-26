// v10.43 P.C. Skovgaard life journey (1817–1875). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "pchoejerup",
    "title": "Højerup Kirche auf dem Kliff von Stevns",
    "artist": "P.C. Skovgaard",
    "year": "1842",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6650: https://open.smk.dk/artwork/image/KMS6650, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcraageleje",
    "title": "Der Strand bei Rågeleje",
    "artist": "P.C. Skovgaard",
    "year": "1843",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS7213: https://open.smk.dk/artwork/image/KMS7213, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcoats",
    "title": "Haferfeld bei Vejby",
    "artist": "P.C. Skovgaard",
    "year": "1843",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4950: https://open.smk.dk/artwork/image/KMS4950, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcdronning",
    "title": "Die Nordküste Seelands bei Dronningmølle",
    "artist": "P.C. Skovgaard",
    "year": "1844",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS448: https://open.smk.dk/artwork/image/KMS448, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcmoeller",
    "title": "Landschaft bei Kongens Møller im Nachmittagslicht",
    "artist": "P.C. Skovgaard",
    "year": "1844",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1702: https://open.smk.dk/artwork/image/KMS1702, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcbeldringe",
    "title": "Blick auf das Gut Beldringe",
    "artist": "P.C. Skovgaard",
    "year": "1847",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1739: https://open.smk.dk/artwork/image/KMS1739, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pclaesoe",
    "title": "Birken auf Læsø nach dem Regen",
    "artist": "P.C. Skovgaard",
    "year": "1849",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS6943: https://open.smk.dk/artwork/image/KMS6943, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcvognserup",
    "title": "Landstrasse bei Gut Vognserup",
    "artist": "P.C. Skovgaard",
    "year": "1849",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS580: https://open.smk.dk/artwork/image/KMS580, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcvenice",
    "title": "Der Canal Grande in Venedig",
    "artist": "P.C. Skovgaard",
    "year": "1854",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4334: https://open.smk.dk/artwork/image/KMS4334, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcnysoe",
    "title": "Auf der Gartentreppe von Nysø",
    "artist": "P.C. Skovgaard",
    "year": "1855",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS3487: https://open.smk.dk/artwork/image/KMS3487, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcmaywood",
    "title": "Buchenwald im Mai bei Iselingen",
    "artist": "P.C. Skovgaard",
    "year": "1857",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS4580: https://open.smk.dk/artwork/image/KMS4580, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pccivitella",
    "title": "Felsige Hügel bei Civitella",
    "artist": "P.C. Skovgaard",
    "year": "1869",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, KMS1789: https://open.smk.dk/artwork/image/KMS1789, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  },
  {
    "id": "pcmeadow",
    "title": "Die Wiesen bei Dortheaslyst",
    "artist": "P.C. Skovgaard",
    "year": "1871–1875",
    "museum": "Statens Museum for Kunst, Kopenhagen",
    "source": "Statens Museum for Kunst, Kopenhagen, kms6935: https://open.smk.dk/artwork/image/kms6935, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "skovgaard",
  "name": "P.C. Skovgaard",
  "title": "P.C. Skovgaards Lebensweg",
  "life": "1817–1875",
  "part": "Küsten, Felder und Buchenwälder",
  "subtitle": "Von Seeland nach Italien",
  "cover": "pcmaywood",
  "intro": "Reise mit dem dänischen Landschaftsmaler P.C. Skovgaard: an die Küsten und Felder Seelands, durch das weite Land Dänemarks, nach Venedig und in den Buchenwald im Mai und schliesslich in die Hügel Italiens. Die Bilder stammen aus dem Statens Museum for Kunst in Kopenhagen, das seine Aufnahmen frei zur Verfügung stellt.",
  "ending": [
    "P.C. Skovgaard stirbt am 13. April 1875.",
    "Viele seiner Bilder bewahrt heute das Statens Museum for Kunst in Kopenhagen."
  ],
  "epilogue": "P.C. Skovgaard stirbt am 13. April 1875. Der Weg führt von den Küsten Seelands über das weite Land Dänemarks nach Venedig, in den Buchenwald im Mai und in die Hügel Italiens.",
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
      "id": "pcs1",
      "place": "Küsten und Felder Seelands",
      "when": "1842–1844",
      "map": {
        "x": 80,
        "y": 48
      },
      "mapLabel": "Seeland",
      "intro": [
        "P.C. Skovgaard wird am 4. April 1817 geboren; an der Kunstakademie in Kopenhagen wird die Freundschaft mit dem Maler J.Th. Lundbye für ihn sehr wichtig.",
        "Im Sommer 1843 zeichnen und malen die beiden Freunde in Skovgaards Heimatgegend um Vejby, und im selben Jahr gewinnt er einen Preis für ein Bild mit Eichen."
      ],
      "works": [
        {
          "pid": "pchoejerup",
          "text": [
            "Die Kirche steht zwischen Bäumen oben auf dem weissen Kreidekliff, und unten zieht sich der Strand am Meer entlang.",
            "Skovgaard hat das Bild mit seinem Monogramm und der Jahreszahl 1842 signiert."
          ],
          "fact": "1842. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pcraageleje",
          "text": [
            "Wellen mit weissen Kämmen rollen unter leichten Wolken auf einen breiten Sandstrand.",
            "In die Farbe ist „Ved Rougeleie Juli 1843“ eingeritzt, bei Rågeleje im Juli 1843."
          ],
          "fact": "1843. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pcoats",
          "text": [
            "Hoher Hafer füllt den Vordergrund, und dahinter stehen Bäume und ein rotes Dach.",
            "Das Bild entsteht während des Sommeraufenthalts von Skovgaard und Lundbye in Vejby 1843."
          ],
          "fact": "1843. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pcdronning",
          "text": [
            "Ein Bach windet sich durch grüne Hügel zum Meer, und darüber ziehen Wolken über einen blauen Himmel.",
            "Das Bild ist mit „PSkovgaard -1844-“ signiert."
          ],
          "fact": "1844. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pcmoeller",
          "text": [
            "Ein sandiger Weg führt an einem Feldstein vorbei auf einen Wald zu, über dem schwere Wolken stehen.",
            "Skovgaard malt das Bild 1844 in Öl auf Malpappe."
          ],
          "fact": "1844. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "pcs2",
      "place": "Unterwegs im ganzen Land",
      "when": "1847–1849",
      "map": {
        "x": 70,
        "y": 52
      },
      "mapLabel": "Dänemark",
      "intro": [
        "1845 erhält Skovgaard eine Ausstellungsmedaille und beendet die Kunstakademie; in den 1840er Jahren reist er durch ganz Dänemark.",
        "Er malt unter anderem bei Gut Vognserup und wird zu einem Maler, der die dänische Landschaft schildert."
      ],
      "works": [
        {
          "pid": "pcbeldringe",
          "text": [
            "Über ein weites Feld mit Disteln geht der Blick zu fernen Bäumen unter einem hohen blauen Himmel.",
            "Das Bild ist 1847 in Öl auf Malpappe gemalt und später auf Leinwand aufgezogen worden."
          ],
          "fact": "1847. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pclaesoe",
          "text": [
            "Schlanke Birken stehen an einem Weg, und am Himmel lichten sich die grauen Wolken.",
            "Auf dem Bild steht „PS 19 Mai 1849“."
          ],
          "fact": "1849. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pcvognserup",
          "text": [
            "Eine helle Landstrasse führt unter grossen Bäumen hindurch, und auf dem Weg sind Menschen unterwegs.",
            "Laut Museumstitel zeichnet am Wegrand der Maler J.Th. Lundbye; das Bild ist 1849 signiert."
          ],
          "fact": "1849. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "pcs3",
      "place": "Venedig und der Buchenwald im Mai",
      "when": "1854–1857",
      "map": {
        "x": 160,
        "y": 74
      },
      "mapLabel": "Venedig und Seeland",
      "intro": [
        "1854 und 1855 reist Skovgaard zum ersten Mal nach Italien, gemeinsam mit dem Maler Wilhelm Marstrand und dem Kunsthistoriker N.L. Høyen.",
        "Nach der Rückkehr malt er sein bekanntestes Werk, einen Buchenwald im Mai, mit hohen Bäumen und kleinen Figuren unter der Horizontlinie."
      ],
      "works": [
        {
          "pid": "pcvenice",
          "text": [
            "Gondeln gleiten zwischen den Palästen über den Canal Grande, und im Hintergrund erhebt sich die Kuppel von Santa Maria della Salute.",
            "Auf dem Bild steht „Venezia Juni 1854“."
          ],
          "fact": "1854. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pcnysoe",
          "text": [
            "Durch eine offene Gartentür sieht man eine Frau mit blauem Sonnenschirm auf der Treppe, eine zweite sitzt daneben.",
            "Der Museumstitel nennt Caroline Dalgas und Jeanina Stampe; auf dem Bild steht der 13. Juli 1855."
          ],
          "fact": "1855. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pcmaywood",
          "text": [
            "Zwei Mädchen gehen mit einem goldblonden Hund durch den sonnigen Buchenwald, und weiter hinten sitzt ihre Familie im Gras.",
            "Skovgaard fand das Motiv beim Gut Iselingen in Südseeland und malte die frisch entfalteten, hellgrünen Blätter."
          ],
          "fact": "1857. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    },
    {
      "id": "pcs4",
      "place": "Italien und späte Landschaften",
      "when": "1869–1875",
      "map": {
        "x": 172,
        "y": 96
      },
      "mapLabel": "Italien und Seeland",
      "intro": [
        "1869 reist Skovgaard noch einmal nach Italien; danach werden seine Landschaften grossartiger.",
        "Seine monumentale Malweise hat grosse Bedeutung für die folgenden Generationen, auch für seine Söhne Joakim und Niels."
      ],
      "works": [
        {
          "pid": "pccivitella",
          "text": [
            "Sonnige Felshänge mit Büschen liegen im Vordergrund, und dahinter reihen sich blaue Berge.",
            "Skovgaard malt die Studie in Öl auf Papier und schreibt darauf „Civitella 7 Juli 1869“."
          ],
          "fact": "1869. Statens Museum for Kunst, Kopenhagen."
        },
        {
          "pid": "pcmeadow",
          "text": [
            "Grüne Wiesen erstrecken sich bis zu einer Reihe von Bäumen, über der helle Wolken ziehen.",
            "Das Statens Museum for Kunst datiert das Bild in die Jahre 1871 bis 1875."
          ],
          "fact": "1871–1875. Statens Museum for Kunst, Kopenhagen."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
