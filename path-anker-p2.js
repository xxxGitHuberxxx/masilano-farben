// v8.2 Albert Anker life journey, Part 2 (1889–1910), completing the path.
// Appends stations and works to the existing Anker path; does not rewrite Part 1.
// Reuses the gallery works anker, dorfschule and naeherin by pid only (not listed in works[]).
// Quotes are self-translated from documented German wording (Centre Albert Anker; Meister 1981).
(function () {
  var works = [
  {
    "id": "aeltere",
    "title": "Die ältere Schwester",
    "artist": "Albert Anker",
    "year": "um 1889",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Die ältere Schwester c1889.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "aself91",
    "title": "Selbstbildnis im Profil, nach links",
    "artist": "Albert Anker",
    "year": "März 1891",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Selbstbildnis im Profil, nach links.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "knab91",
    "title": "Bildnis eines Knaben",
    "artist": "Albert Anker",
    "year": "1891",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker- Bildnis eines Knaben.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mantua91",
    "title": "San Giorgio in Mantua",
    "artist": "Albert Anker",
    "year": "1891",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Anker San Giorgio in Mantua 1891.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "wassereimer",
    "title": "Zwei Kinder mit Wassereimer",
    "artist": "Albert Anker",
    "year": "1893",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Zwei Kinder mit Wassereimer (1893) - Alber Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dorfschneider",
    "title": "Der Dorfschneider",
    "artist": "Albert Anker",
    "year": "1894",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Der Dorfschneider.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "krippe94",
    "title": "Die Kinderkrippe II",
    "artist": "Albert Anker",
    "year": "1894",
    "museum": "Privatbesitz",
    "source": "Wikimedia Commons: «Die Kinderkrippe II (1894) - Albert Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "teetrinker",
    "title": "Alter Mann beim Teetrinken",
    "artist": "Albert Anker",
    "year": "um 1895",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Alter Mann beim Tee trinken.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "nwein",
    "title": "Neuer Wein",
    "artist": "Albert Anker",
    "year": "um 1890",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Neuer Wein (ca. 1890).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "weinbrot",
    "title": "Alter Wein und Brot",
    "artist": "Albert Anker",
    "year": "1896",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Alter Wein und Brot (1896).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "maessigung",
    "title": "Stillleben: Mässigkeit",
    "artist": "Albert Anker",
    "year": "1896",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Stillleben - Mässigkeit (1896).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "unmaessigkeit",
    "title": "Stillleben: Unmässigkeit",
    "artist": "Albert Anker",
    "year": "1896",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Stillleben - Unmässigkeit.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kaffeekart",
    "title": "Stillleben: Kaffee und Kartoffeln",
    "artist": "Albert Anker",
    "year": "1897",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Stilleben, Kaffee und Kartoffeln.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "heringe",
    "title": "Stillleben mit Heringen",
    "artist": "Albert Anker",
    "year": "1899",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Stillleben, Heringe.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kueche99",
    "title": "Kücheninterieur",
    "artist": "Albert Anker",
    "year": "1899",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Kücheninterieur.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "zaeslin",
    "title": "Die Geschwister Zaeslin",
    "artist": "Albert Anker",
    "year": "1896",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Die Geschwister Zaeslin.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bernerin",
    "title": "Brief lesende Bernerin",
    "artist": "Albert Anker",
    "year": "1896",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Brief lesende Bernerin 1896.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "znueni97",
    "title": "Knabe beim Znüni",
    "artist": "Albert Anker",
    "year": "um 1897",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Knabe beim Znüni (ca.1897).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "strickkorb",
    "title": "Strickendes Mädchen mit Korb",
    "artist": "Albert Anker",
    "year": "um 1897",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Strickendes Mädchen mit Korb.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "berthagugger",
    "title": "Bertha Gugger mit Tochter",
    "artist": "Albert Anker",
    "year": "1898",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Bertha Gugger mit Tochter.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "suppenmaed",
    "title": "Suppe essendes Mädchen",
    "artist": "Albert Anker",
    "year": "1898",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Suppe essendes Mädchen (1898).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "debros",
    "title": "Bildnis des jungen de Bros",
    "artist": "Albert Anker",
    "year": "1898",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Bildnis des jungen de Bros.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kirchenfeld",
    "title": "Kleinkinderschule auf der Kirchenfeldbrücke",
    "artist": "Albert Anker",
    "year": "1900",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Kleinkinderschule auf der Kirchenfeldbrücke (1900).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "znueni01",
    "title": "Alter Mann beim Znüni",
    "artist": "Albert Anker",
    "year": "1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Alter Mann beim Znüni.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "feissli",
    "title": "Der alte Feissli mit Stock und Mütze",
    "artist": "Albert Anker",
    "year": "1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Der alte Feissli mit Stock und Mütze.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "blond01",
    "title": "Bildnis eines blonden Mädchens",
    "artist": "Albert Anker",
    "year": "um 1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Bildnis eines blonden Mädchens c1901.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "abrief",
    "title": "Junge Frau einen Brief schreibend",
    "artist": "Albert Anker",
    "year": "um 1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Junge Frau einen Brief schreibend 1903.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kueche01",
    "title": "Küchenszene",
    "artist": "Albert Anker",
    "year": "um 1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Küchenszene.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "botengaenger",
    "title": "Zwei kleine Botengänger",
    "artist": "Albert Anker",
    "year": "1901",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Zwei kleine Botengänger (1901) - Albert Anker.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "astill02",
    "title": "Stillleben mit Kaffeekanne, Milchkrug, Tasse, Brot und Kartoffeln",
    "artist": "Albert Anker",
    "year": "1902",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Stillleben mit Kaffeekanne, Milchkrug, Tasse, Brot und Kartoffeln (1902).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schreib02",
    "title": "Schreibendes Mädchen",
    "artist": "Albert Anker",
    "year": "1902",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Schreibendes Mädchen 1902.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "akatze03",
    "title": "Sitzendes Mädchen mit einer Katze",
    "artist": "Albert Anker",
    "year": "1903",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Sitzendes Mädchen mit einer Katze 1903.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "suppe04",
    "title": "Bauer beim Suppe essen",
    "artist": "Albert Anker",
    "year": "1904",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Bauer beim Suppe essen 1904.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "baeuerinstrick",
    "title": "Sitzende Bäuerin beim Stricken",
    "artist": "Albert Anker",
    "year": "1904",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Sitzende Bäuerin beim Stricken 1904.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bauerlesen",
    "title": "Sitzender Bauer beim Lesen",
    "artist": "Albert Anker",
    "year": "1904",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Sitzender Bauer beim Lesen 1904.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "zeitung05",
    "title": "Bauer beim Zeitunglesen",
    "artist": "Albert Anker",
    "year": "1905",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Bauer beim Zeitunglesen 1905.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bibel05",
    "title": "Grossmutter mit Bibel",
    "artist": "Albert Anker",
    "year": "1905",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Grossmutter mit Bibel 1905.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "gvaterznueni",
    "title": "Grossvater beim Znüni",
    "artist": "Albert Anker",
    "year": "1905",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Grossvater beim Znüni 1905.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "flicken05",
    "title": "Sitzende Grossmutter beim Flicken",
    "artist": "Albert Anker",
    "year": "1905",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Sitzende Grossmutter beim Flicken.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "gvaterzeitung",
    "title": "Grossvater mit Zeitung",
    "artist": "Albert Anker",
    "year": "1906",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Grossvater mit Zeitung.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "drehhaspel",
    "title": "Bäuerin an der Drehhaspel",
    "artist": "Albert Anker",
    "year": "1906",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Bäuerin an der Drehhaspel 1906.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "wintermadchen",
    "title": "Mädchen in Winterlandschaft",
    "artist": "Albert Anker",
    "year": "1906",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Mädchen in Winterlandschaft.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schulaufg",
    "title": "Die Schulaufgaben",
    "artist": "Albert Anker",
    "year": "1906",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Die Schulaufgaben (1906).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "kaffeefrau",
    "title": "Alte Frau in rotem Kopftuch beim Kaffeetrinken",
    "artist": "Albert Anker",
    "year": "1907",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Alte Frau in rotem Kopftuch beim Kaffeetrinken 1907.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "suppe07",
    "title": "Bauer beim Suppe essen",
    "artist": "Albert Anker",
    "year": "1907",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Bauer beim Suppe essen 1907.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "buchschau",
    "title": "Mädchen, ein Buch betrachtend",
    "artist": "Albert Anker",
    "year": "1907",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Mädchen, ein Buch betrachtend (1907).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "stricklesen",
    "title": "Strickendes Mädchen beim Lesen",
    "artist": "Albert Anker",
    "year": "1907",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Strickendes Mädchen beim lesen (1907).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "inserbauer",
    "title": "Inser Bauer am Tisch",
    "artist": "Albert Anker",
    "year": "1908",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Inser Bauer am Tisch (1908).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "stehstudie",
    "title": "Studie eines stehenden Mädchens",
    "artist": "Albert Anker",
    "year": "1908",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Studie eines stehenden Mädchens (1908).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "schreib08",
    "title": "Schreibender Knabe",
    "artist": "Albert Anker",
    "year": "um 1908",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Schreibender Knabe c1908.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "aself08",
    "title": "Selbstbildnis",
    "artist": "Albert Anker",
    "year": "um 1908",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Selbstbildnis um 1908.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "hausaufg09",
    "title": "Mädchen bei den Hausaufgaben",
    "artist": "Albert Anker",
    "year": "1909",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Mädchen bei den Hausaufgaben (1909).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lesemann09",
    "title": "Lesender Mann",
    "artist": "Albert Anker",
    "year": "1909",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Lesender Mann.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "muetzeessen",
    "title": "Knabe mit Mütze beim Essen",
    "artist": "Albert Anker",
    "year": "1910",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Knabe mit Mütze beim essen (1910).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "strick10",
    "title": "Strickendes Mädchen",
    "artist": "Albert Anker",
    "year": "1910",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker - Strickendes Mädchen (1910).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "spinnrad",
    "title": "Bäuerin am Spinnrad",
    "artist": "Albert Anker",
    "year": "1910",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Bäuerin am Spinnrad 1910.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "lesebauer",
    "title": "Lesender alter Bauer",
    "artist": "Albert Anker",
    "year": "1910",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Albert Anker Lesender alter Bauer.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'anker'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1831–1910";
  path.subtitle = "Von Ins nach Paris und zurück nach Ins";
  path.intro = "Reise mit Albert Anker durch sein ganzes Leben: von der Kindheit in Ins und den Schuljahren in Neuchâtel über das Theologiestudium, die Lehre bei Charles Gleyre in Paris, die Familie und die Jahre im Grossen Rat bis zu den Gotthelf-Illustrationen, den Aquarellen nach dem Schlaganfall von 1901 und dem Tod in Ins am 16. Juli 1910. Kurze Stationen, Bilder zum Ausmalen und überlieferte Stimmen aus Briefen und einem Tagebuch.";
  path.ending = [
  "Ende September 1901 erleidet Anker einen Schlaganfall. Seine rechte Hand bleibt behindert, und er gibt die Ölmalerei weitgehend auf; bis zuletzt malt er Aquarelle, sitzend, das Blatt auf den Knien.",
  "Am 16. Juli 1910 stirbt Albert Anker in Ins, neunundsiebzig Jahre alt. Er erhält ein grosses Staatsbegräbnis; im November 1910 zeigt Neuchâtel und im Januar 1911 Bern Gedenkausstellungen. Sein Haus mit dem Atelier ist heute das Centre Albert Anker."
];
  path.epilogue = "Albert Anker stirbt am 16. Juli 1910 in Ins. Zurück bleiben etwa 800 Ölbilder und ebenso viele Aquarelle, die Gotthelf-Illustrationen, mehr als 3000 Briefe – und das Haus in Ins, in dem er geboren wurde und arbeitete.";
  var stations = [
  {
    "id": "ankerins90",
    "place": "Ins · Abschied von Paris",
    "when": "1889–1891",
    "map": {
      "x": 148,
      "y": 92
    },
    "mapLabel": "Ins 1890",
    "intro": [
      "1889 wird Anker zusammen mit Frank Buchser, Arnold Böcklin und François Bocion in die Eidgenössische Kunstkommission gewählt. 1890 gibt er seinen Wohnsitz in Paris auf und verkauft keine Bilder mehr über den Kunsthändler Goupil.",
      "Von nun an lebt er ganz in Ins, im Haus, in dem er geboren wurde. Von 1891 bis 1901 ist er Mitglied der Eidgenössischen Kommission der Gottfried Keller-Stiftung."
    ],
    "works": [
      {
        "pid": "aeltere",
        "text": [
          "In einer Stube kümmert sich ein Mädchen um ein kleineres Kind. Ein Kachelofen und Holzmöbel rahmen die Szene.",
          "Ältere Kinder, die auf jüngere aufpassen, sind ein häufiges Thema bei Anker. 1889 wird er in die Eidgenössische Kunstkommission gewählt."
        ],
        "fact": "um 1889. Sammlung nicht ermittelt."
      },
      {
        "pid": "aself91",
        "text": [
          "Anker zeigt sich selbst von der Seite: Bart, hohe Stirn, der Blick nach links gerichtet.",
          "Das Bildnis ist auf März 1891 datiert. Im Jahr zuvor hat er seinen Wohnsitz in Paris aufgegeben und lebt nun ganz in Ins."
        ],
        "fact": "März 1891. Sammlung nicht ermittelt."
      },
      {
        "pid": "knab91",
        "text": [
          "Ein blonder Knabe blickt ruhig aus dem Bild, vor einem dunklen Grund.",
          "Das Bildnis entsteht 1891. Wer der Junge ist, ist nicht sicher; vermutet wird Walter Stucki."
        ],
        "fact": "1891. Sammlung nicht ermittelt."
      },
      {
        "pid": "mantua91",
        "text": [
          "Ein roter Backsteinbau mit Türmen steht am Wasser, darüber ein heller Himmel.",
          "Anker hält 1891 eine Ansicht aus Mantua fest. Landschaften sind in seinem Werk selten; 1888 schreibt er Auguste Bachelin, wie sehr er das bedauert."
        ],
        "fact": "1891. Sammlung nicht ermittelt.",
        "quote": {
          "text": "Es tut mir zuweilen sehr leid, nicht bei einem Landschaftsmaler in die Lehre gegangen zu sein.",
          "cite": "Brief an Auguste Bachelin, 1888. Centre Albert Anker, Ins."
        }
      }
    ]
  },
  {
    "id": "ankergotthelf",
    "place": "Emmental und Ins · Gotthelf und Dorfleben",
    "when": "1893–1895",
    "map": {
      "x": 178,
      "y": 82
    },
    "mapLabel": "Emmental",
    "intro": [
      "1891 unterschreibt Anker nach anfänglichem Zögern den Vertrag mit dem Verleger Frédéric Zahn für die Prachtausgabe der Erzählungen von Jeremias Gotthelf. Zwischen 1889 und 1899 reist er immer wieder ins Emmental, auf der Suche nach Motiven.",
      "Die Ausgabe erscheint zwischen 1894 und 1904 in neun Bänden, mit über 220 Illustrationen von Anker. Daneben entstehen weiter Bilder aus dem Dorf: Kinder, Handwerker, Alte."
    ],
    "works": [
      {
        "pid": "wassereimer",
        "text": [
          "Zwei Kinder gehen einen Weg entlang und tragen gemeinsam einen Eimer. Hinter ihnen stehen Bäume.",
          "Das Bild stammt von 1893. In diesen Jahren reist Anker immer wieder ins Emmental, um Motive für die Gotthelf-Illustrationen zu suchen."
        ],
        "fact": "1893. Sammlung nicht ermittelt."
      },
      {
        "pid": "dorfschneider",
        "text": [
          "Ein alter Mann sitzt über seine Näharbeit gebeugt, Brille auf der Nase, den Faden in der Hand.",
          "1891 unterschreibt Anker beim Verleger Frédéric Zahn den Vertrag für die Prachtausgabe von Gotthelfs Erzählungen. Er liefert über 220 Illustrationen, doch die Arbeit empfindet er als mühsam."
        ],
        "fact": "1894. Sammlung nicht ermittelt.",
        "quote": {
          "text": "Dieser schreckliche Zahn hält mich in seinen Zähnen. Er wird mich wie eine Zitrone ausquetschen.",
          "cite": "Brief an Albert de Meuron, 4. Januar 1897. Centre Albert Anker, Ins."
        }
      },
      {
        "pid": "krippe94",
        "text": [
          "An einem langen Tisch bauen viele Kinder mit Holzklötzen. Im Hintergrund steht eine Frau mit weisser Haube.",
          "Das Bild von 1894 zeigt eine Kleinkinderschule. Anker interessiert sich sein Leben lang für Erziehung und Schule."
        ],
        "fact": "1894. Privatbesitz."
      },
      {
        "pid": "teetrinker",
        "text": [
          "Ein alter Mann sitzt am Tisch und hält eine Tasse. Er wirkt müde, aber gesammelt.",
          "Alte Menschen im Alltag werden in den 1890er Jahren zu einem wichtigen Thema bei Anker."
        ],
        "fact": "um 1895. Sammlung nicht ermittelt."
      },
      {
        "pid": "anker",
        "text": [
          "Zwei Mädchen sind auf der warmen Ofenbank eingeschlafen, dicht aneinander gelehnt.",
          "Das Bild von 1895 hängt im Kunsthaus Zürich. Es gehört zu Ankers bekanntesten Stubenbildern."
        ],
        "fact": "1895. Kunsthaus Zürich."
      }
    ]
  },
  {
    "id": "ankerstill2",
    "place": "Ins · Stillleben der 1890er Jahre",
    "when": "1890–1899",
    "map": {
      "x": 140,
      "y": 104
    },
    "mapLabel": "Stillleben",
    "intro": [
      "Auch in den 1890er Jahren malt Anker Stillleben: Wein und Brot, Kaffee und Kartoffeln, Heringe. 1896 entsteht das Paar «Mässigkeit» und «Unmässigkeit».",
      "Die Dinge stammen aus seinem Haushalt in Ins. Eine der Kaffeekannen, die er mehrfach malte, besitzt das Centre Albert Anker heute."
    ],
    "works": [
      {
        "pid": "nwein",
        "text": [
          "Eine Glaskaraffe mit hellem Wein, ein Glas und Brot liegen auf einem Tisch.",
          "Anker malt weiterhin Stillleben mit einfachen Dingen aus Küche und Keller."
        ],
        "fact": "um 1890. Sammlung nicht ermittelt."
      },
      {
        "pid": "weinbrot",
        "text": [
          "Eine dunkle Flasche, ein gefülltes Glas und ein Laib Brot stehen auf weissem Tuch.",
          "Das Stillleben ist 1896 datiert. Der Titel stellt es dem «Neuen Wein» gegenüber."
        ],
        "fact": "1896. Sammlung nicht ermittelt."
      },
      {
        "pid": "maessigung",
        "text": [
          "Auf dem Tisch stehen eine Obstschale, Brot, eine Karaffe Wasser und ein bescheidenes Mahl.",
          "Das Bild bildet ein Paar mit «Unmässigkeit». Anker zeigt den Unterschied zwischen Mass und Übermass ganz ohne Figuren."
        ],
        "fact": "1896. Sammlung nicht ermittelt."
      },
      {
        "pid": "unmaessigkeit",
        "text": [
          "Eine Platte mit Schinken, viele Flaschen und Gläser drängen sich auf dem Tisch.",
          "Das Gegenstück zur «Mässigkeit» entsteht im selben Jahr 1896."
        ],
        "fact": "1896. Sammlung nicht ermittelt."
      },
      {
        "pid": "kaffeekart",
        "text": [
          "Eine Kaffeekanne, eine Tasse, ein Krug und gekochte Kartoffeln stehen beieinander.",
          "Kaffee und Kartoffeln sind das Alltagsessen auf dem Land. Die Kaffeekanne taucht in Ankers Stillleben immer wieder auf."
        ],
        "fact": "1897. Sammlung nicht ermittelt."
      },
      {
        "pid": "heringe",
        "text": [
          "Auf einem Teller liegen Heringe, daneben Brot und eine hohe Glasflasche.",
          "Das Stillleben ist 1899 datiert. Anker bleibt bei wenigen, genau beobachteten Dingen."
        ],
        "fact": "1899. Sammlung nicht ermittelt."
      },
      {
        "pid": "kueche99",
        "text": [
          "Eine Küche mit Herd, Töpfen und Geschirr, in hellen Brauntönen festgehalten.",
          "Ankers Interieurs entstehen meist in seinem eigenen Haus in Ins."
        ],
        "fact": "1899. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "ankerschule2",
    "place": "Ins · Dorfschule und Bildnisse",
    "when": "1896–1898",
    "map": {
      "x": 152,
      "y": 96
    },
    "mapLabel": "Dorfschule",
    "intro": [
      "1896 malt Anker «Die Dorfschule von 1848». Das Bild erinnert an das Jahr, in dem der moderne Bundesstaat entsteht.",
      "Daneben malt er Bildnisse im Auftrag und Kinder aus dem Dorf: beim Lesen, Stricken, Essen. Am 4. Januar 1897 klagt er in einem Brief über die Arbeit für den Verleger Zahn."
    ],
    "works": [
      {
        "pid": "dorfschule",
        "text": [
          "In einer dunklen Schulstube sitzen Kinder aller Alter, der Lehrer steht in der Mitte.",
          "Anker malt das Bild 1896 und erinnert damit an das Jahr 1848, als der moderne Bundesstaat entsteht."
        ],
        "fact": "1896. Kunstmuseum Basel."
      },
      {
        "pid": "zaeslin",
        "text": [
          "Drei Geschwister sitzen und stehen beisammen in dunkler Kleidung, die Gesichter hell.",
          "Das Gruppenbildnis ist ein Auftrag von 1896. Neben Genrebildern malt Anker viele Bildnisse."
        ],
        "fact": "1896. Sammlung nicht ermittelt."
      },
      {
        "pid": "bernerin",
        "text": [
          "Eine junge Frau in Berner Tracht sitzt am Tisch und liest einen Brief.",
          "Anker selbst schreibt in seinem Leben mehr als 3000 Briefe. Das Lesen ist bei ihm ein stiller, ernster Moment."
        ],
        "fact": "1896. Sammlung nicht ermittelt."
      },
      {
        "pid": "znueni97",
        "text": [
          "Ein Knabe sitzt am Tisch und isst sein Znüni, die Zwischenmahlzeit am Vormittag.",
          "Essende Kinder und Alte zeigt Anker oft ganz nah und ohne Ablenkung."
        ],
        "fact": "um 1897. Sammlung nicht ermittelt."
      },
      {
        "pid": "strickkorb",
        "text": [
          "Ein Mädchen in Schürze strickt, neben sich einen Korb.",
          "Stricken ist bei Anker eine Tätigkeit der Mädchen und der Grossmütter, oft verbunden mit Hüten oder Warten."
        ],
        "fact": "um 1897. Sammlung nicht ermittelt."
      },
      {
        "pid": "berthagugger",
        "text": [
          "Eine Mutter hält ihr kleines Kind auf dem Schoss, beide schauen ruhig.",
          "Bertha Gugger hat Anker schon 1869 als Mädchen gemalt, zusammen mit ihrer Schwester Rosa. 1898 malt er sie als Mutter."
        ],
        "fact": "1898. Sammlung nicht ermittelt."
      },
      {
        "pid": "suppenmaed",
        "text": [
          "Ein Mädchen beugt sich über einen Teller und löffelt Suppe.",
          "Das Bild ist 1898 datiert und trägt auch den Namen «Mädeli»."
        ],
        "fact": "1898. Sammlung nicht ermittelt."
      },
      {
        "pid": "debros",
        "text": [
          "Ein dunkelhaariger Knabe mit grossem weissem Spitzenkragen schaut aus dem Bild.",
          "Das Bildnis ist 1898 datiert. Der rote Grund lässt das Gesicht hell leuchten."
        ],
        "fact": "1898. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "ankerbern1900",
    "place": "Bern und Ins · Jahrhundertwende",
    "when": "1900–1901",
    "map": {
      "x": 168,
      "y": 88
    },
    "mapLabel": "Bern 1900",
    "intro": [
      "1900 verleiht ihm die Universität Bern die Ehrendoktorwürde. Zum Jahrhundertwechsel hält er in einem Tagebuch drei Befürchtungen für die Zukunft des Landes fest.",
      "Im Jahr 1901 entstehen noch grössere Bilder wie «Zwei kleine Botengänger». Ende September 1901 erleidet Anker einen Schlaganfall."
    ],
    "works": [
      {
        "pid": "kirchenfeld",
        "text": [
          "Eine Gruppe kleiner Kinder zieht mit einem Leiterwagen über eine Brücke in Bern. Eine Frau begleitet sie, am Geländer steht eine Laterne.",
          "Im Jahr 1900 erhält Anker die Ehrendoktorwürde der Universität Bern. Zur Jahrhundertwende notiert er in seinem Tagebuch auch politische Sorgen."
        ],
        "fact": "1900. Sammlung nicht ermittelt.",
        "quote": {
          "text": "Ich hege dreierlei Befürchtungen: 1. Die unerhört grosse und undemokratische Vereinigung von Macht und Einfluss in wenigen Händen, die totale Verseuchung der politischen Grundsätze durch die Fragen des materiellen Interessens. 2. Die Milliardenschuld und ihre Gefahren für die Unabhängigkeit des Vaterlandes. 3. Die gefährliche Stellung des Staates als grösster Arbeitgeber in einer Zeit ungestümer gesellschaftlicher Gärung.",
          "cite": "Tagebuch zum Jahrhundertwechsel 1899/1900. Centre Albert Anker, Ins."
        }
      },
      {
        "pid": "znueni01",
        "text": [
          "Ein alter Mann sitzt mit Brot und Getränk am Tisch und isst bedächtig.",
          "Das Bild ist 1901 datiert, das Jahr, in dem Anker später einen Schlaganfall erleidet."
        ],
        "fact": "1901. Sammlung nicht ermittelt."
      },
      {
        "pid": "feissli",
        "text": [
          "Ein alter Mann mit Mütze stützt sich auf seinen Stock.",
          "Anker zeichnet und malt viele Leute aus Ins und Umgebung, oft unter ihrem eigenen Namen."
        ],
        "fact": "1901. Sammlung nicht ermittelt."
      },
      {
        "pid": "blond01",
        "text": [
          "Ein Mädchen mit hellblondem Haar und weissem Kragen vor dunklem Grund.",
          "Kinderbildnisse machen einen grossen Teil von Ankers Werk aus."
        ],
        "fact": "um 1901. Sammlung nicht ermittelt."
      },
      {
        "pid": "abrief",
        "text": [
          "Eine junge Frau sitzt am Tisch und schreibt, den Kopf leicht geneigt.",
          "Schreiben und Lesen gehören bei Anker zum Alltag auf dem Land."
        ],
        "fact": "um 1901. Sammlung nicht ermittelt."
      },
      {
        "pid": "kueche01",
        "text": [
          "Eine Küche in Blautönen: Frauen und Kinder am Herd und am Tisch.",
          "Die Szene ist locker und skizzenhaft gemalt, wie ein rasch festgehaltener Augenblick."
        ],
        "fact": "um 1901. Sammlung nicht ermittelt."
      },
      {
        "pid": "botengaenger",
        "text": [
          "Ein Knabe mit Korb und ein kleines Mädchen gehen Hand in Hand durch ein verschneites Dorf.",
          "Das Winterbild ist 1901 datiert. Die Kinder sind unterwegs, um etwas zu besorgen."
        ],
        "fact": "1901. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "ankeraquarell",
    "place": "Ins · Nach dem Schlaganfall",
    "when": "1902–1904",
    "map": {
      "x": 144,
      "y": 110
    },
    "mapLabel": "Aquarelle",
    "intro": [
      "Nach dem Schlaganfall bleibt Ankers rechte Hand behindert. Grosse Ölbilder fallen ihm schwer; er gibt die Ölmalerei weitgehend auf.",
      "Er malt nun vor allem Aquarelle, auf einem Stuhl sitzend, das Blatt auf den Knien, mit nur wenig Vorzeichnung. Insgesamt sollen es bis zu 600 Aquarelle werden."
    ],
    "works": [
      {
        "pid": "astill02",
        "text": [
          "Kaffeekanne, Milchkrug, Tasse, Brot und Kartoffeln stehen auf einem Tisch.",
          "Ende September 1901 erleidet Anker einen Schlaganfall; seine rechte Hand bleibt behindert. Er malt weiter, nun vor allem Aquarelle."
        ],
        "fact": "1902. Sammlung nicht ermittelt."
      },
      {
        "pid": "schreib02",
        "text": [
          "Ein Mädchen in blauem Kleid schreibt konzentriert in ein Heft, auf dem Tisch steht ein Tintenfass.",
          "Nach dem Schlaganfall arbeitet Anker gern sitzend, das Blatt auf den Knien."
        ],
        "fact": "1902. Sammlung nicht ermittelt."
      },
      {
        "pid": "akatze03",
        "text": [
          "Ein Mädchen sitzt am Fenster und hält eine Katze auf dem Schoss.",
          "Das Blatt ist 1903 datiert. Ankers späte Bilder sind leichter und luftiger gemalt."
        ],
        "fact": "1903. Sammlung nicht ermittelt."
      },
      {
        "pid": "suppe04",
        "text": [
          "Ein alter Bauer sitzt am Tisch und isst Suppe.",
          "Alte Männer und Frauen aus Ins sind in den späten Jahren Ankers häufigste Modelle."
        ],
        "fact": "1904. Sammlung nicht ermittelt."
      },
      {
        "pid": "baeuerinstrick",
        "text": [
          "Eine ältere Frau mit Kopftuch sitzt auf einem Stuhl und strickt.",
          "Das Blatt ist 1904 datiert und zeigt eine ruhige Arbeit in der Stube."
        ],
        "fact": "1904. Sammlung nicht ermittelt."
      },
      {
        "pid": "bauerlesen",
        "text": [
          "Ein alter Bauer sitzt und liest, den Kopf über das Blatt gebeugt.",
          "Lesende Alte kommen in Ankers Spätwerk immer wieder vor."
        ],
        "fact": "1904. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "anker1905",
    "place": "Ins · Briefe und Grosseltern",
    "when": "1905–1906",
    "map": {
      "x": 156,
      "y": 84
    },
    "mapLabel": "1905",
    "intro": [
      "Anker schreibt viele Briefe, besonders in den späten Jahren an Julia Hürner, die Tochter seines alten Freundes Ludwig Hürner. Am 5. September 1905 erzählt er ihr von einer Nacht im Karzer während seiner Studentenzeit.",
      "Seine Modelle sind nun vor allem die Alten im Dorf: Grossmütter mit Bibel, Grossväter mit Zeitung. 1906 entsteht eine Büste Ankers von Jakob August Heer."
    ],
    "works": [
      {
        "pid": "zeitung05",
        "text": [
          "Ein Bauer sitzt und liest Zeitung, eine Pfeife in der Hand.",
          "Im September 1905 sind Genietruppen im Dorf. Anker erinnert sich in einem Brief an Julia Hürner an seinen eigenen Militärdienst als Student."
        ],
        "fact": "1905. Sammlung nicht ermittelt.",
        "quote": {
          "text": "Ich habe Ihnen auch schon erzählt, wie ich einmal im Karzer war, und zwar mit Ihrem Vater; mir war eine Nacht diktiert, weil mein Gewehr nicht sauber war, ihm, weil er eine Übung geschwänzt hatte.",
          "cite": "Brief an Julia Hürner, 5. September 1905. Robert Meister (Hg.), Albert Anker und seine Welt, Bern 1981, S. 21."
        }
      },
      {
        "pid": "bibel05",
        "text": [
          "Eine alte Frau sitzt und hält eine aufgeschlagene Bibel.",
          "Das Bild ist 1905 datiert. Anker ist inzwischen selbst Grossvater; seine Enkelin Elisabeth Oser zeichnet er als kleines Mädchen."
        ],
        "fact": "1905. Sammlung nicht ermittelt."
      },
      {
        "pid": "gvaterznueni",
        "text": [
          "Ein Grossvater mit Mütze sitzt am Tisch beim Znüni.",
          "Ankers Spätwerk kreist um die Alten im Dorf und ihren Tagesablauf."
        ],
        "fact": "1905. Sammlung nicht ermittelt."
      },
      {
        "pid": "flicken05",
        "text": [
          "In einem runden Bildfeld sitzt eine Grossmutter mit rotem Kopftuch und flickt.",
          "Das Blatt ist 1905 datiert. Die runde Form lässt die Szene wie durch ein Fenster gesehen wirken."
        ],
        "fact": "1905. Sammlung nicht ermittelt."
      },
      {
        "pid": "gvaterzeitung",
        "text": [
          "Ein alter Mann sitzt am Tisch und liest eine grosse Zeitung.",
          "1906 schafft der Bildhauer Jakob August Heer eine Büste von Anker."
        ],
        "fact": "1906. Sammlung nicht ermittelt."
      },
      {
        "pid": "drehhaspel",
        "text": [
          "Eine Bäuerin sitzt an einer Haspel und wickelt Garn.",
          "Spinnen und Garnwickeln gehören zur alten Hausarbeit auf dem Land, die Anker festhält."
        ],
        "fact": "1906. Sammlung nicht ermittelt."
      },
      {
        "pid": "wintermadchen",
        "text": [
          "Ein Mädchen mit Kopftuch steht im Schnee und hält einen Korb.",
          "Das Bild ist 1906 datiert. Wie schon früher zeigt Anker Kinder auf dem Weg durch den Winter."
        ],
        "fact": "1906. Sammlung nicht ermittelt."
      },
      {
        "pid": "schulaufg",
        "text": [
          "Ein Mädchen sitzt über seinen Schulaufgaben, in einem runden Bildfeld.",
          "Lernen und Schule begleiten Ankers Werk von den 1860er Jahren bis zuletzt."
        ],
        "fact": "1906. Sammlung nicht ermittelt."
      }
    ]
  },
  {
    "id": "ankerspaet",
    "place": "Ins · Späte Stuben",
    "when": "1907–1908",
    "map": {
      "x": 138,
      "y": 90
    },
    "mapLabel": "1907",
    "intro": [
      "In den Jahren 1907 und 1908 malt Anker weiter Kinder und Alte in der Stube: beim Kaffee, bei der Suppe, beim Lesen und Stricken.",
      "Um 1908 malt er sich noch einmal selbst. Im selben Jahr entsteht «Die kleine Näherin»."
    ],
    "works": [
      {
        "pid": "kaffeefrau",
        "text": [
          "Eine alte Frau mit rotem Kopftuch sitzt am Tisch und trinkt Kaffee. Daneben stehen Krug und Tasse.",
          "Das Bild ist 1907 datiert. Die Kaffeekanne aus Ankers Stillleben steht noch heute im Haus in Ins."
        ],
        "fact": "1907. Sammlung nicht ermittelt."
      },
      {
        "pid": "suppe07",
        "text": [
          "Ein Mann in blauem Hemd sitzt am Tisch und isst Suppe.",
          "Drei Jahre nach dem Bild von 1904 malt Anker dasselbe Thema noch einmal."
        ],
        "fact": "1907. Sammlung nicht ermittelt."
      },
      {
        "pid": "buchschau",
        "text": [
          "Ein Mädchen sitzt und betrachtet ein grosses Buch auf dem Schoss.",
          "Das Blatt ist 1907 datiert."
        ],
        "fact": "1907. Sammlung nicht ermittelt."
      },
      {
        "pid": "stricklesen",
        "text": [
          "Ein Mädchen strickt und liest zugleich in einem Buch, das vor ihm liegt.",
          "Zwei Tätigkeiten auf einmal: Anker zeigt Kinder oft beschäftigt und vertieft."
        ],
        "fact": "1907. Sammlung nicht ermittelt."
      },
      {
        "pid": "inserbauer",
        "text": [
          "Ein Bauer aus Ins sitzt in blauem Hemd am Tisch, die Hände ruhig.",
          "Der Titel nennt das Dorf: Anker malt die Menschen seiner Gemeinde bis in die letzten Jahre."
        ],
        "fact": "1908. Sammlung nicht ermittelt."
      },
      {
        "pid": "stehstudie",
        "text": [
          "Ein Mädchen steht still, nur leicht angedeutet, mit blauer Schürze.",
          "Die Studie von 1908 zeigt, wie sparsam Anker in den späten Jahren arbeitet."
        ],
        "fact": "1908. Sammlung nicht ermittelt."
      },
      {
        "pid": "schreib08",
        "text": [
          "Ein Knabe stützt den Kopf in die Hand und schreibt in ein Heft.",
          "Schreibende Kinder malt Anker seit den Schreibunterrichten der 1860er Jahre."
        ],
        "fact": "um 1908. Sammlung nicht ermittelt."
      },
      {
        "pid": "aself08",
        "text": [
          "Ein alter Mann mit weissem Bart blickt ernst aus dem Bild.",
          "Um 1908 malt sich Anker noch einmal selbst, etwa siebenundsiebzig Jahre alt."
        ],
        "fact": "um 1908. Sammlung nicht ermittelt."
      },
      {
        "pid": "naeherin",
        "text": [
          "Ein Mädchen sitzt über seine Näharbeit gebeugt, das blonde Haar sorgfältig geflochten.",
          "Das Bild entsteht 1908, zwei Jahre vor Ankers Tod."
        ],
        "fact": "1908. Privatbesitz."
      }
    ]
  },
  {
    "id": "anker1910",
    "place": "Ins · Die letzten Bilder",
    "when": "1909–1910",
    "map": {
      "x": 150,
      "y": 100
    },
    "mapLabel": "1910",
    "intro": [
      "Bis zuletzt malt Anker in Ins: Kinder bei den Hausaufgaben, Alte beim Lesen, Frauen am Spinnrad.",
      "Albert Anker stirbt am 16. Juli 1910 in Ins. Er erhält ein grosses Staatsbegräbnis."
    ],
    "works": [
      {
        "pid": "hausaufg09",
        "text": [
          "Ein blondes Mädchen mit blauer Schleife beugt sich über ein Heft.",
          "Das Bild ist 1909 datiert. Noch im letzten Lebensjahr bleibt die Schule Ankers Thema."
        ],
        "fact": "1909. Sammlung nicht ermittelt."
      },
      {
        "pid": "lesemann09",
        "text": [
          "Ein Mann sitzt und liest, die Hand am Kopf.",
          "Das Blatt ist 1909 datiert."
        ],
        "fact": "1909. Sammlung nicht ermittelt."
      },
      {
        "pid": "muetzeessen",
        "text": [
          "Ein Knabe mit Mütze isst aus einer Schale.",
          "Das Bild ist 1910 datiert, Ankers Todesjahr."
        ],
        "fact": "1910. Sammlung nicht ermittelt."
      },
      {
        "pid": "strick10",
        "text": [
          "Ein Mädchen mit Zöpfen sitzt am Tisch und strickt.",
          "Das Strickende Mädchen von 1910 gehört zu den letzten Arbeiten Ankers."
        ],
        "fact": "1910. Sammlung nicht ermittelt."
      },
      {
        "pid": "spinnrad",
        "text": [
          "Eine Bäuerin sitzt am Spinnrad und spinnt.",
          "Das Blatt ist 1910 datiert."
        ],
        "fact": "1910. Sammlung nicht ermittelt."
      },
      {
        "pid": "lesebauer",
        "text": [
          "Ein alter Bauer sitzt am Tisch und liest, ganz in sein Buch vertieft.",
          "Das Bild ist 1910 datiert. Es steht am Ende dieses Weges."
        ],
        "fact": "1910. Sammlung nicht ermittelt."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
