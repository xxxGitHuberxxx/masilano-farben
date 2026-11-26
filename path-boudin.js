// v10.43 Eugène Boudin life journey (1824–1898). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "ebfestival",
    "title": "Fest im Hafen von Honfleur",
    "artist": "Eugène Boudin",
    "year": "1858",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.10: https://www.nga.gov/collection/art-object-page.61360.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebopensky",
    "title": "Meerbild mit offenem Himmel",
    "artist": "Eugène Boudin",
    "year": "1860",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 2020.116: https://clevelandart.org/art/2020.116, CC0 (gemeinfrei)"
  },
  {
    "id": "ebbeach62",
    "title": "Strand bei Trouville",
    "artist": "Eugène Boudin",
    "year": "1862",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.13: https://www.nga.gov/collection/art-object-page.61363.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebtrouville63",
    "title": "Am Strand von Trouville",
    "artist": "Eugène Boudin",
    "year": "1863",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 07.88.4: https://www.metmuseum.org/art/collection/search/435749, CC0 (gemeinfrei)"
  },
  {
    "id": "ebjetty",
    "title": "Mole und Kai in Trouville",
    "artist": "Eugène Boudin",
    "year": "1863",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.9: https://www.nga.gov/collection/art-object-page.61359.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebtrouville63b",
    "title": "Strandszene in Trouville",
    "artist": "Eugène Boudin",
    "year": "1863",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.14: https://www.nga.gov/collection/art-object-page.61364.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebdieppe",
    "title": "Am Strand, Dieppe",
    "artist": "Eugène Boudin",
    "year": "1864",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 2003.20.1: https://www.metmuseum.org/art/collection/search/437987, CC0 (gemeinfrei)"
  },
  {
    "id": "ebconcert",
    "title": "Konzert im Casino von Deauville",
    "artist": "Eugène Boudin",
    "year": "1865",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.3: https://www.nga.gov/collection/art-object-page.66401.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebfourwomen",
    "title": "Vier Frauen in Trouville",
    "artist": "Eugène Boudin",
    "year": "1865",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.137: https://www.nga.gov/collection/art-object-page.52281.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebconversation",
    "title": "Gespräch am Strand",
    "artist": "Eugène Boudin",
    "year": "1865",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.3: https://www.nga.gov/collection/art-object-page.164911.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebdogs",
    "title": "Spaziergang am Strand mit zwei Hunden",
    "artist": "Eugène Boudin",
    "year": "1866",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.73: https://www.nga.gov/collection/art-object-page.66471.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebbrittany",
    "title": "Küste der Bretagne",
    "artist": "Eugène Boudin",
    "year": "1870",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.11: https://www.nga.gov/collection/art-object-page.61361.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebbordeaux",
    "title": "Blick auf Bordeaux vom Quai des Chartrons",
    "artist": "Eugène Boudin",
    "year": "1874",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1986.73: https://clevelandart.org/art/1986.73, CC0 (gemeinfrei)"
  },
  {
    "id": "ebfair",
    "title": "Markt in der Bretagne",
    "artist": "Eugène Boudin",
    "year": "1874",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2015.19.21: https://www.nga.gov/collection/art-object-page.178080.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebscheveningen",
    "title": "Ebbe in Scheveningen",
    "artist": "Eugène Boudin",
    "year": "1875",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2025.11.7: https://www.nga.gov/collection/art-object-page.231681.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebbeach77",
    "title": "Der Strand",
    "artist": "Eugène Boudin",
    "year": "1877",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.14: https://www.nga.gov/collection/art-object-page.52158.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebberck",
    "title": "Frauen am Strand von Berck",
    "artist": "Eugène Boudin",
    "year": "1881",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.15: https://www.nga.gov/collection/art-object-page.52159.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebhavreentry",
    "title": "Hafeneinfahrt von Le Havre",
    "artist": "Eugène Boudin",
    "year": "1883",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.16: https://www.nga.gov/collection/art-object-page.61366.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebhavre",
    "title": "Le Havre",
    "artist": "Eugène Boudin",
    "year": "1883",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2015.19.58: https://www.nga.gov/collection/art-object-page.195115.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebtrouville87",
    "title": "Am Strand, Trouville",
    "artist": "Eugène Boudin",
    "year": "1887",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.5: https://www.nga.gov/collection/art-object-page.46480.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebhavreships",
    "title": "Schiffe und Segelboote verlassen Le Havre",
    "artist": "Eugène Boudin",
    "year": "1887",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1983.1.7: https://www.nga.gov/collection/art-object-page.61357.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebvalery",
    "title": "Blick auf den Hafen von Saint-Valéry-sur-Somme",
    "artist": "Eugène Boudin",
    "year": "1891",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 2010.23: https://clevelandart.org/art/2010.23, CC0 (gemeinfrei)"
  },
  {
    "id": "ebbeaulieu",
    "title": "Beaulieu: Die Bucht von Fourmis",
    "artist": "Eugène Boudin",
    "year": "1892",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, New York, 39.65.2: https://www.metmuseum.org/art/collection/search/435750, CC0 (gemeinfrei)"
  },
  {
    "id": "ebbeach94",
    "title": "Am Strand",
    "artist": "Eugène Boudin",
    "year": "1894",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.6: https://www.nga.gov/collection/art-object-page.46481.html, CC0 (gemeinfrei)"
  },
  {
    "id": "ebetretat",
    "title": "Wäscherinnen am Strand von Étretat",
    "artist": "Eugène Boudin",
    "year": "1894",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.17: https://www.nga.gov/collection/art-object-page.52161.html, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "boudin",
  "name": "Eugène Boudin",
  "title": "Eugène Boudins Lebensweg",
  "life": "1824–1898",
  "part": "Himmel, Strände und Häfen",
  "subtitle": "Der König der Himmel",
  "cover": "ebconcert",
  "intro": "Reise mit Eugène Boudin durch sein Leben: von den Häfen der Normandie über die Strände von Trouville bis nach Bordeaux, Holland und ans Mittelmeer. Die Bilder stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Eugène Boudin stirbt 1898 mit 74 Jahren in Deauville.",
    "Im selben Jahr zeigt die Galerie Durand-Ruel in New York 49 seiner Gemälde."
  ],
  "epilogue": "Eugène Boudin stirbt 1898. Der Weg führt von Honfleur und Le Havre über Trouville bis nach Bordeaux, Holland und an die Riviera.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M40,62 C58,52 86,52 108,40 C126,28 148,12 170,14 C192,20 210,34 214,52 C210,70 200,86 206,104 C212,122 214,140 196,148 C170,154 140,150 114,152 C96,154 80,148 78,132 C80,112 70,96 52,88 C40,82 30,72 40,62 Z"
    ]
  },
  "stations": [
    {
      "id": "ebs1",
      "place": "Ein Rahmenladen in Le Havre",
      "when": "1858–1860",
      "map": {
        "x": 116,
        "y": 38
      },
      "mapLabel": "Honfleur und Le Havre",
      "intro": [
        "Eugène Boudin wird 1824 in Honfleur als Sohn eines Schiffskapitäns geboren; in Le Havre eröffnet er einen Laden für Papier und Bilderrahmen, wo ihn Maler wie Jean-François Millet zum Malen ermutigen.",
        "1851 erhält er von der Stadt Le Havre ein Stipendium für Paris; zurück in der Normandie lernt er den jungen Claude Monet kennen und bringt ihn dazu, im Freien zu malen."
      ],
      "works": [
        {
          "pid": "ebfestival",
          "text": [
            "Ein grosses Segelschiff und kleinere Boote sind mit bunten Fahnen geschmückt, und im Wasser drängen sich Ruderboote voller Menschen.",
            "Boudin malt das Bild in Öl auf Holz und beschriftet es unten rechts mit „Honfleur“."
          ],
          "fact": "1858. National Gallery of Art, Washington."
        },
        {
          "pid": "ebopensky",
          "text": [
            "Weisse Wolken ziehen über einen weiten blauen Himmel, darunter liegt ein schmaler Streifen Meer mit einem kleinen Segel.",
            "Boudin zeichnet das Blatt mit Pastell vor Ort, weil Pastell leicht zu tragen ist und schnell wirkt."
          ],
          "fact": "1860. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "ebs2",
      "place": "Die Strände von Trouville",
      "when": "1862–1864",
      "map": {
        "x": 122,
        "y": 40
      },
      "mapLabel": "Trouville und Dieppe",
      "intro": [
        "Ab 1862 malt Boudin immer wieder die Strände von Trouville und Deauville an der Küste der Normandie.",
        "Unter weiten Himmeln zeigt er elegante Damen in Krinolinen und die Strandkabinen am Wasser."
      ],
      "works": [
        {
          "pid": "ebbeach62",
          "text": [
            "Vor hellen Strandkabinen stehen und sitzen Damen in weiten Kleidern, ein Hund läuft über den Sand, und am Horizont zieht ein Dampfer Rauch hinter sich her.",
            "Über der Szene nimmt der wolkige Himmel mehr als die Hälfte des kleinen Holzbildes ein."
          ],
          "fact": "1862. National Gallery of Art, Washington."
        },
        {
          "pid": "ebtrouville63",
          "text": [
            "Ein Pferd zieht eine Strandkabine auf Rädern über den Sand, während Spaziergänger mit Sonnenschirmen am Wasser stehen.",
            "Das schmale Bild auf Holz misst nur etwa 27 mal 48 Zentimeter."
          ],
          "fact": "1863. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "ebjetty",
          "text": [
            "Auf einem langen Kai warten elegant gekleidete Menschen, ein kleiner Hund läuft vorn, und ein Dampfschiff stösst eine schwarze Rauchwolke aus.",
            "Boudin malt die Szene in Öl auf Holz unter einem weiten, bewegten Himmel."
          ],
          "fact": "1863. National Gallery of Art, Washington."
        },
        {
          "pid": "ebtrouville63b",
          "text": [
            "Eine Gruppe von Damen in hellen und dunklen Kleidern sitzt auf Stühlen am Strand, dahinter flattern Fahnen an hohen Masten, und auf dem Meer ziehen Segelboote vorbei.",
            "Über allem spannt sich ein heller blauer Himmel mit leichten Wolken."
          ],
          "fact": "1863. National Gallery of Art, Washington."
        },
        {
          "pid": "ebdieppe",
          "text": [
            "Der Wind bläht die Kleider einer Gruppe am Strand, vorn läuft ein kleiner schwarz-weisser Hund, und hinten ragt eine Mole ins Meer.",
            "Das fast quadratische Bild auf Holz ist nur etwa 32 mal 29 Zentimeter gross."
          ],
          "fact": "1864. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "ebs3",
      "place": "Gesellschaft am Strand",
      "when": "1865–1866",
      "map": {
        "x": 124,
        "y": 42
      },
      "mapLabel": "Trouville und Deauville",
      "intro": [
        "Boudin hat sich das Malen weitgehend selbst beigebracht und arbeitet direkt vor der Natur; in den späteren 1860er Jahren malt er gemeinsam mit Claude Monet.",
        "Camille Corot nennt ihn den „König der Himmel“."
      ],
      "works": [
        {
          "pid": "ebconcert",
          "text": [
            "Unter dem weissen Dach eines offenen Pavillons sitzt eine grosse Menge in hellen Kleidern und hört der Musik zu.",
            "Hinter dem Pavillon steigt ein grüner Hügel an, und darüber liegt ein blauer Himmel mit Wolken."
          ],
          "fact": "1865. National Gallery of Art, Washington."
        },
        {
          "pid": "ebfourwomen",
          "text": [
            "Vier Frauen in weiten Röcken und Umhängen stehen nebeneinander, eine trägt einen leuchtend roten Mantel.",
            "Boudin skizziert das kleine Blatt mit Bleistift und Aquarell, es ist nur etwa 11 mal 15 Zentimeter gross."
          ],
          "fact": "1865. National Gallery of Art, Washington."
        },
        {
          "pid": "ebconversation",
          "text": [
            "Einige Menschen sitzen dicht beieinander auf Stühlen und unterhalten sich, eine Dame trägt Rot, und links steht ein Hund.",
            "Boudin hält die Szene mit Bleistift und Aquarell auf bräunlichem Papier fest."
          ],
          "fact": "1865. National Gallery of Art, Washington."
        },
        {
          "pid": "ebdogs",
          "text": [
            "Ein Herr im dunklen Rock und eine Dame im weiss-roten Kleid stehen in der Mitte, umgeben von Damen mit Sonnenschirmen und zwei Hunden.",
            "Boudin malt das Blatt mit Aquarell über einer Bleistiftzeichnung."
          ],
          "fact": "1866. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "ebs4",
      "place": "Reisen: Bretagne, Bordeaux und Holland",
      "when": "1870–1875",
      "map": {
        "x": 92,
        "y": 120
      },
      "mapLabel": "Bretagne, Bordeaux, Holland",
      "intro": [
        "In den 1870er Jahren reist er durch Frankreich, die Niederlande und Italien; 1873 besucht er erstmals Bordeaux.",
        "1874 stellt er in der ersten Ausstellung der Künstlergruppe aus, die bald „Impressionisten“ heisst."
      ],
      "works": [
        {
          "pid": "ebbrittany",
          "text": [
            "Über einer ruhigen Bucht mit dunklen Felsen im Vordergrund türmen sich helle Wolken, und in der Ferne segelt ein Dreimaster.",
            "Am Horizont leuchten helle Klippen; Boudin malt das Bild in Öl auf Leinwand."
          ],
          "fact": "1870. National Gallery of Art, Washington."
        },
        {
          "pid": "ebbordeaux",
          "text": [
            "Grosse Segelschiffe liegen an den Kais von Bordeaux, wo Waren verladen werden und Seeleute in kleinen Booten zu den Schiffen rudern.",
            "Boudin setzt den Horizont tief, sodass der Himmel viel Raum bekommt, und signiert unten mit „E. Boudin / Bordeaux 1874“."
          ],
          "fact": "1874. Cleveland Museum of Art."
        },
        {
          "pid": "ebfair",
          "text": [
            "Auf einem weiten Platz drängen sich Menschen mit weissen Hauben zwischen schwarz-weissen Kühen, dahinter ragt ein spitzer Kirchturm auf.",
            "Das Bild auf Holz hängt 1898 in einer Ausstellung über Boudin bei Durand-Ruel in New York."
          ],
          "fact": "1874. National Gallery of Art, Washington."
        },
        {
          "pid": "ebscheveningen",
          "text": [
            "Bei Ebbe liegen Fischerboote mit braunen Segeln auf dem Sand, und über ihnen ziehen weisse Wolken durch einen blauen Himmel.",
            "Unten rechts schreibt Boudin „Schevingue / E. Boudin 75“ auf das Bild."
          ],
          "fact": "1875. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "ebs5",
      "place": "Strände und Schiffe",
      "when": "1877–1883",
      "map": {
        "x": 112,
        "y": 36
      },
      "mapLabel": "Normandie und Picardie",
      "intro": [
        "Boudin malt vor allem kleine Landschaften mit den Häfen und Stränden Nordfrankreichs.",
        "Viele Zeitgenossen bewundern besonders seine Himmel."
      ],
      "works": [
        {
          "pid": "ebbeach77",
          "text": [
            "In einer langen Reihe sitzen und stehen Menschen mit schwarzen Schirmen am Strand, hinter ihnen glitzert das Meer mit kleinen Schiffen.",
            "Das schmale Holzbild ist nur etwa 11 mal 26 Zentimeter gross."
          ],
          "fact": "1877. National Gallery of Art, Washington."
        },
        {
          "pid": "ebberck",
          "text": [
            "Frauen in roten Röcken und weissen Hauben stehen und sitzen mit Körben auf einem weiten, leeren Strand.",
            "Über ihnen liegt ein klarer, hellblauer Himmel; das kleine Bild ist in Öl auf Holz gemalt."
          ],
          "fact": "1881. National Gallery of Art, Washington."
        },
        {
          "pid": "ebhavreentry",
          "text": [
            "Zwei grosse Segelschiffe gleiten in den Hafen, links steigt dunkler Rauch auf, und der silbrige Himmel spiegelt sich im Wasser.",
            "Mit rund 119 mal 160 Zentimetern gehört das Bild zu Boudins grossen Leinwänden."
          ],
          "fact": "1883. National Gallery of Art, Washington."
        },
        {
          "pid": "ebhavre",
          "text": [
            "Grosse weisse Wolken türmen sich über dem Meer, auf dem Segelschiffe und ein Ruderboot voller Männer unterwegs sind.",
            "Boudin malt die Szene in Öl auf Leinwand, und der Himmel nimmt fast zwei Drittel des Bildes ein."
          ],
          "fact": "1883. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "ebs6",
      "place": "Späte Küstenbilder",
      "when": "1887–1894",
      "map": {
        "x": 118,
        "y": 42
      },
      "mapLabel": "Normandie und Riviera",
      "intro": [
        "Noch in den 1890er Jahren malt Boudin die Küsten der Normandie und reist bis ans Mittelmeer.",
        "Claude Monet sagt über ihn: „Wenn ich Maler geworden bin, verdanke ich das Eugène Boudin.“"
      ],
      "works": [
        {
          "pid": "ebtrouville87",
          "text": [
            "Eine Dame in rotem Kleid und hohem Hut sitzt im Sand, neben ihr ein Kind und weitere Damen.",
            "Das kleine Bild auf Holz misst nur etwa 18 mal 33 Zentimeter."
          ],
          "fact": "1887. National Gallery of Art, Washington."
        },
        {
          "pid": "ebhavreships",
          "text": [
            "Ein Segelboot neigt sich im Wind über das grüne, bewegte Meer, während in der Ferne grössere Schiffe auslaufen.",
            "Darüber ziehen weisse Wolken durch einen hellblauen Himmel; das Bild ist rund 90 mal 131 Zentimeter gross."
          ],
          "fact": "1887. National Gallery of Art, Washington."
        },
        {
          "pid": "ebvalery",
          "text": [
            "Ein breiter Wasserlauf führt zu einem kleinen Hafen mit Segelschiffen, gesäumt von Bäumen und Häusern.",
            "Über allem ziehen grosse graue und weisse Wolken; Boudin malt das Bild in Öl auf Leinwand."
          ],
          "fact": "1891. Cleveland Museum of Art."
        },
        {
          "pid": "ebbeaulieu",
          "text": [
            "An der Riviera schwingt sich eine blaue Bucht unter steilen Bergen, und am Ufer liegen helle Häuser zwischen Bäumen.",
            "Boudin malt das Bild in Öl auf Leinwand unter einem klaren, hellen Himmel."
          ],
          "fact": "1892. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "ebbeach94",
          "text": [
            "Vor einem rot-weiss gestreiften Strandzelt sitzen Damen auf Stühlen, und Kinder spielen im Sand.",
            "Das winzige Holzbild misst nur etwa 14 mal 24 Zentimeter."
          ],
          "fact": "1894. National Gallery of Art, Washington."
        },
        {
          "pid": "ebetretat",
          "text": [
            "Am Fuss einer hohen Klippe mit Felsbogen breiten Wäscherinnen bunte Wäsche auf den Kieseln aus.",
            "Auf dem blauen Meer dahinter segeln kleine Boote; das Bild ist in Öl auf Holz gemalt."
          ],
          "fact": "1894. National Gallery of Art, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
