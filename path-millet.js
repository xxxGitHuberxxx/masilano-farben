// v10.43 Jean-François Millet life journey (1814–1875). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "mlmartin",
    "title": "Monsieur Martin",
    "artist": "Jean-François Millet",
    "year": "1840",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1980.270: https://clevelandart.org/art/1980.270, CC0 (gemeinfrei)"
  },
  {
    "id": "mllisle",
    "title": "Leconte de Lisle",
    "artist": "Jean-François Millet",
    "year": "um 1840–1841",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.42: https://www.nga.gov/collection/art-object-page.46517.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mlman",
    "title": "Bildnis eines Mannes",
    "artist": "Jean-François Millet",
    "year": "um 1845",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.43: https://www.nga.gov/collection/art-object-page.46518.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mlstorm",
    "title": "Flucht vor dem Gewitter",
    "artist": "Jean-François Millet",
    "year": "um 1846",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2002.613: https://www.metmuseum.org/art/collection/search/438616, CC0 (gemeinfrei)"
  },
  {
    "id": "mlchickens",
    "title": "Frau beim Füttern der Hühner",
    "artist": "Jean-François Millet",
    "year": "1846–1848",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1894.1064: https://www.artic.edu/artworks/111646, CC0 (gemeinfrei)"
  },
  {
    "id": "mlgarden",
    "title": "Gartenszene",
    "artist": "Jean-François Millet",
    "year": "1854",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 15.30.24: https://www.metmuseum.org/art/collection/search/437096, CC0 (gemeinfrei)"
  },
  {
    "id": "mlrock",
    "title": "Hirtin auf einem Felsen",
    "artist": "Jean-François Millet",
    "year": "1856",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1983.446: https://www.metmuseum.org/art/collection/search/437098, CC0 (gemeinfrei)"
  },
  {
    "id": "mlrake",
    "title": "Frau mit Rechen",
    "artist": "Jean-François Millet",
    "year": "um 1856–1857",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 38.75: https://www.metmuseum.org/art/collection/search/437099, CC0 (gemeinfrei)"
  },
  {
    "id": "gleaners",
    "title": "Die Ährenleserinnen",
    "artist": "Jean-François Millet",
    "year": "1857",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Jean-François Millet - Gleaners - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "angelus",
    "title": "Das Angelusläuten",
    "artist": "Jean-François Millet",
    "year": "1857–1859",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Jean-François Millet - The Angelus - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "mlshearers",
    "title": "Die Schafschur",
    "artist": "Jean-François Millet",
    "year": "um 1857–1861",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.417: https://www.artic.edu/artworks/81522, CC0 (gemeinfrei)"
  },
  {
    "id": "mlcalf",
    "title": "Bauern bringen ein auf dem Feld geborenes Kalb heim",
    "artist": "Jean-François Millet",
    "year": "1864",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1894.1063: https://www.artic.edu/artworks/111648, CC0 (gemeinfrei)"
  },
  {
    "id": "mlcows",
    "title": "Die Kühe werden heimgerufen",
    "artist": "Jean-François Millet",
    "year": "um 1866",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.136.178: https://www.nga.gov/collection/art-object-page.168820.html, CC0 (gemeinfrei)"
  },
  {
    "id": "mlauvergne",
    "title": "In der Auvergne",
    "artist": "Jean-François Millet",
    "year": "um 1866–1869",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.414: https://www.artic.edu/artworks/81516, CC0 (gemeinfrei)"
  },
  {
    "id": "mllittle",
    "title": "Die kleine Hirtin",
    "artist": "Jean-François Millet",
    "year": "1868–1872",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.413: https://www.artic.edu/artworks/81515, CC0 (gemeinfrei)"
  },
  {
    "id": "mlkeeper",
    "title": "Die Hüterin der Herde",
    "artist": "Jean-François Millet",
    "year": "1871–1874",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.4462: https://www.artic.edu/artworks/4776, CC0 (gemeinfrei)"
  },
  {
    "id": "mlhaystacks",
    "title": "Heuschober: Herbst",
    "artist": "Jean-François Millet",
    "year": "um 1874",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 60.71.12: https://www.metmuseum.org/art/collection/search/437097, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "millet",
  "name": "Jean-François Millet",
  "title": "Jean-François Millets Lebensweg",
  "life": "1814–1875",
  "part": "Normandie, Barbizon und Auvergne",
  "subtitle": "Bildnisse, Feldarbeit und Herden",
  "cover": "mlhaystacks",
  "intro": "Reise mit Jean-François Millet durch sein Leben: von den frühen Bildnissen in Cherbourg und Paris über die Feldbilder aus Barbizon bis zu den Landschaften seiner späten Jahre. Die meisten Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Jean-François Millet stirbt am 20. Januar 1875 in Barbizon.",
    "Seine Bilder vom Leben auf dem Land regen später viele Maler an, unter ihnen Vincent van Gogh, der zahlreiche Motive von Millet nachzeichnet."
  ],
  "epilogue": "Jean-François Millet stirbt am 20. Januar 1875 in Barbizon. Der Weg führt von den frühen Bildnissen bis zu den Herden und Heuschobern seiner späten Jahre.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,62 C58,52 86,52 108,40 C126,28 148,12 170,14 C192,20 210,34 214,52 C210,70 200,86 206,104 C212,122 214,140 196,148 C170,154 140,150 114,152 C96,154 80,148 78,132 C80,112 70,96 52,88 C40,82 30,72 40,62 Z"
    ]
  },
  "stations": [
    {
      "id": "mls1",
      "place": "Von Gréville nach Paris",
      "when": "1814–1848",
      "map": {
        "x": 96,
        "y": 50
      },
      "mapLabel": "Cherbourg",
      "intro": [
        "Jean-François Millet wird am 4. Oktober 1814 in Gruchy bei Gréville an der Küste der Normandie als Sohn einer Bauernfamilie geboren.",
        "Er lernt in Cherbourg malen, geht 1837 nach Paris zu Paul Delaroche und verdient sein Geld zuerst mit Bildnissen."
      ],
      "works": [
        {
          "pid": "mlmartin",
          "text": [
            "Ein Mann in dunklem Rock und weissem Hemdkragen blickt ernst aus einem dunklen Hintergrund.",
            "Um 1840 malt Millet in Cherbourg vor allem Bildnisse von Bürgern der Stadt."
          ],
          "fact": "1840. Cleveland Museum of Art."
        },
        {
          "pid": "mllisle",
          "text": [
            "Ein junger Mann in blauem Mantel und rotem Halstuch lehnt mit einer Hand auf einer steinernen Brüstung.",
            "Dargestellt ist Charles Leconte de Lisle, der später als Dichter in Paris bekannt wird."
          ],
          "fact": "um 1840–1841. National Gallery of Art, Washington."
        },
        {
          "pid": "mlman",
          "text": [
            "Ein junger Mann mit dunklem Haar und Backenbart steht halb seitlich, eine Hand in der Tasche seines Rocks.",
            "Millet setzt die dunkle Gestalt vor eine helle, warme Wand."
          ],
          "fact": "um 1845. National Gallery of Art, Washington."
        },
        {
          "pid": "mlstorm",
          "text": [
            "Eine Frau mit einem Bündel Reisig und ein Junge eilen im Wind über ein dunkles Feld nach Hause.",
            "Über ihnen ziehen schwere Wolken auf, das Kopftuch der Frau flattert im Sturm."
          ],
          "fact": "um 1846. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mlchickens",
          "text": [
            "Eine Bäuerin streut den Hühnern vor einer Mauer Futter hin, ein kleines Kind hält sich an ihrem Rock fest.",
            "Das Licht fällt warm auf die Kleider der beiden."
          ],
          "fact": "1846–1848. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "millet1",
      "place": "Barbizon: die Arbeit auf dem Feld",
      "when": "1849–1862",
      "map": {
        "x": 152,
        "y": 56
      },
      "mapLabel": "Barbizon",
      "intro": [
        "1849 zieht Millet mit seiner Familie nach Barbizon am Wald von Fontainebleau und bleibt dort für den Rest seines Lebens.",
        "Hier malt er Bäuerinnen, Hirtinnen und Feldarbeiter ruhig und ernst, ohne sie zu verklären."
      ],
      "works": [
        {
          "pid": "mlgarden",
          "text": [
            "Ein Mann mit Hut kniet in einem Gemüsegarten bei der Arbeit, hinter ihm arbeiten zwei Frauen und ein Kind zwischen den Beeten.",
            "Im Hintergrund stehen niedrige Bauernhäuser unter grossen Bäumen."
          ],
          "fact": "1854. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mlrock",
          "text": [
            "Eine Hirtin mit hellem Umhang sitzt im Schatten einer Hecke auf einem Felsen und strickt.",
            "Links öffnet sich der Blick auf eine sonnige Ebene mit ihrer Herde."
          ],
          "fact": "1856. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "mlrake",
          "text": [
            "Eine Bäuerin zieht mit einem langen Holzrechen Heu zusammen, neben ihr steht ein kleiner Heuhaufen.",
            "In der Ferne arbeiten weitere Leute auf der hellen Wiese."
          ],
          "fact": "um 1856–1857. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "gleaners",
          "text": [
            "Drei Bäuerinnen beugen sich über das abgeerntete Feld und lesen die letzten Ähren auf.",
            "Hinter ihnen liegt die reiche Ernte in den Garben – ganz nah, und doch nicht für sie."
          ],
          "fact": "1857. Musée d’Orsay, Paris."
        },
        {
          "pid": "angelus",
          "text": [
            "Zwei Bauern auf dem Feld legen die Arbeit nieder und beten.",
            "Im Hintergrund liegt eine Kirche: Von dort läutet das Angelus, das Gebet am Morgen, mittags und am Abend."
          ],
          "fact": "1857–1859. Musée d’Orsay, Paris."
        },
        {
          "pid": "mlshearers",
          "text": [
            "Unter einem Vordach scheren ein Bauer und eine Bäuerin gemeinsam ein Schaf.",
            "Die Frau beugt sich mit der Schere über das Tier, der Mann hält es fest."
          ],
          "fact": "um 1857–1861. Art Institute of Chicago."
        }
      ]
    },
    {
      "id": "mls3",
      "place": "Späte Jahre: Vichy, Auvergne und Barbizon",
      "when": "1863–1875",
      "map": {
        "x": 140,
        "y": 102
      },
      "mapLabel": "Vichy",
      "intro": [
        "In den 1860er-Jahren wird Millet bekannter; mit seiner Frau reist er mehrere Sommer nach Vichy und wandert in die Hügel der Auvergne.",
        "In seinen späten Bildern werden Himmel, Licht und Landschaft wichtiger, 1868 erhält er das Kreuz der Ehrenlegion."
      ],
      "works": [
        {
          "pid": "mlcalf",
          "text": [
            "Zwei Männer tragen ein neugeborenes Kalb auf einer Trage aus Stroh zum Hof, die Kuh geht dicht hinter ihnen her.",
            "Am Hoftor warten eine Frau und Kinder auf die Ankunft."
          ],
          "fact": "1864. Art Institute of Chicago."
        },
        {
          "pid": "mlcows",
          "text": [
            "Ein Hirte steht auf einem Felsen und bläst in ein Horn, die Kühe kommen langsam auf ihn zu.",
            "Millet zeichnet die Szene mit Pastell und Kreide vor einem rosa Abendhimmel."
          ],
          "fact": "um 1866. National Gallery of Art, Washington."
        },
        {
          "pid": "mlauvergne",
          "text": [
            "Auf einem sanften Hügel steht eine Hirtin in roter Jacke mit einem Spinnrocken bei ihren Schafen, daneben eine grosse Baumgruppe.",
            "Darüber leuchtet ein blauer Himmel mit hellen Wolken."
          ],
          "fact": "um 1866–1869. Art Institute of Chicago."
        },
        {
          "pid": "mllittle",
          "text": [
            "Ein Mädchen mit einem grossen Umhang steht mit gesenktem Kopf an einem Baum und hält einen Hirtenstab.",
            "Hinter ihr weiden Schafe vor einer weiten, hellen Ebene."
          ],
          "fact": "1868–1872. Art Institute of Chicago."
        },
        {
          "pid": "mlkeeper",
          "text": [
            "Eine Hirtin steht mitten in ihrer Herde, die Schafe weiden ringsum im Abendlicht.",
            "Hinter ihr bricht helles Licht durch die Wolken."
          ],
          "fact": "1871–1874. Art Institute of Chicago."
        },
        {
          "pid": "mlhaystacks",
          "text": [
            "Drei grosse Heuschober stehen auf einer weiten Ebene, davor weidet eine Schafherde mit ihrem Hirten.",
            "Das Bild gehört zu einer Folge der vier Jahreszeiten, an der Millet in seinen letzten Jahren arbeitet."
          ],
          "fact": "um 1874. Metropolitan Museum of Art, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
