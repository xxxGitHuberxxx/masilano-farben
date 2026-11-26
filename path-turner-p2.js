// v9.5 J. M. W. Turner life journey, Part 2 (1819–1851), completing the path.
// Appends stations and works; rewrites the last Part-1 station (turhine) and step (tubellrock) so they no longer tease a following part.
// PD/CC0 scans only. Documented facts only; no quotations. No nudes or near-nudes; no death-bed, slave-ship or bodies imagery.
(function () {
  var works = [
  {
    "id": "tufusina",
    "title": "Venedig von Fusina",
    "artist": "J. M. W. Turner",
    "year": "1821",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «J.M.W. Turner - Venice from Fusina (1821).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tubaiae",
    "title": "Die Bucht von Baiae mit Apollo und der Sibylle",
    "artist": "J. M. W. Turner",
    "year": "1823",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - The Bay of Baiae, with Apollo and the Sibyl - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuforum",
    "title": "Forum Romanum, für Mr. Soanes Museum",
    "artist": "J. M. W. Turner",
    "year": "1826",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Forum Romanum, for Mr Soane's Museum - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tunewcastle",
    "title": "Newcastle upon Tyne",
    "artist": "J. M. W. Turner",
    "year": "um 1823",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Newcastle-upon-Tyne by Turner.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tucologne",
    "title": "Köln, Ankunft eines Paketboots am Abend",
    "artist": "J. M. W. Turner",
    "year": "1826",
    "museum": "Frick Collection, New York",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Cologne, the Arrival of a Packet Boat in the Evening - c 1826 - The Frick Collection.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "tudieppe",
    "title": "Der Hafen von Dieppe",
    "artist": "J. M. W. Turner",
    "year": "1825",
    "museum": "Frick Collection, New York",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - The Harbor of Dieppe - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tumortlake",
    "title": "Die Terrasse in Mortlake",
    "artist": "J. M. W. Turner",
    "year": "1827",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner, Mortlake Terrace, 1827, NGA 116.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "tudunwich",
    "title": "Dunwich, Suffolk",
    "artist": "J. M. W. Turner",
    "year": "um 1827",
    "museum": "Manchester Art Gallery",
    "source": "Wikimedia Commons: «Dunwich, Suffolk by Joseph Mallord William Turner.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tustonehenge",
    "title": "Stonehenge",
    "artist": "J. M. W. Turner",
    "year": "um 1828",
    "museum": "Salisbury Museum",
    "source": "Wikimedia Commons: «Stonehenge Turner.JPG», Public domain (gemeinfrei)"
  },
  {
    "id": "tupetpark",
    "title": "Der Park von Petworth, die Kirche von Tillington in der Ferne",
    "artist": "J. M. W. Turner",
    "year": "um 1828",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner (1775-1851) - Petworth Park, Tillington Church in the Distance - N00559 - National Gallery.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tupetsunrise",
    "title": "Der See in Petworth, Sonnenaufgang",
    "artist": "J. M. W. Turner",
    "year": "um 1827–1828",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner (1775-1851) - The Lake, Petworth, Sunrise - N05563 - National Gallery.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tupetsunset",
    "title": "Der See in Petworth, Sonnenuntergang, Musterstudie",
    "artist": "J. M. W. Turner",
    "year": "um 1827–1828",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) The Lake, Petworth, Sunset; Sample Study - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuchichester",
    "title": "Der Kanal von Chichester",
    "artist": "J. M. W. Turner",
    "year": "um 1828",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner 001.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tualnwick",
    "title": "Die Burg Alnwick",
    "artist": "J. M. W. Turner",
    "year": "um 1829",
    "museum": "Art Gallery of South Australia, Adelaide",
    "source": "Wikimedia Commons: «J.M.W. Turner - Alnwick Castle - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuulyssketch",
    "title": "Skizze zu «Odysseus verhöhnt Polyphem»",
    "artist": "J. M. W. Turner",
    "year": "um 1827–1828",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Sketch for 'Ulysses Deriding Polyphemus' - C1827-8 - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuchilde",
    "title": "Childe Harolds Pilgerfahrt, Italien",
    "artist": "J. M. W. Turner",
    "year": "1832",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Childe harold.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tunantes",
    "title": "Nantes von der Île Feydeau",
    "artist": "J. M. W. Turner",
    "year": "1829–1830",
    "museum": "Château des ducs de Bretagne, Nantes",
    "source": "Wikimedia Commons: «J. M. W. Turner - Nantes from the Ile Feydeau (1830).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tusaumur",
    "title": "Saumur von der Île d’Offard",
    "artist": "J. M. W. Turner",
    "year": "um 1830",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «Saumur from the Île d'Offart… by Joseph Mallord William Turner.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tumelrose",
    "title": "Melrose",
    "artist": "J. M. W. Turner",
    "year": "1831",
    "museum": "National Galleries of Scotland, Edinburgh",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Melrose - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tustaffa",
    "title": "Staffa, Fingals Höhle",
    "artist": "J. M. W. Turner",
    "year": "1832",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Staffa, Fingal's Cave - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuantwerp",
    "title": "Antwerpen: Van Goyen sucht ein Motiv",
    "artist": "J. M. W. Turner",
    "year": "1833",
    "museum": "Frick Collection, New York",
    "source": "Wikimedia Commons: «Turner - Antwerp Van Goyen Looking Out for a Subject, 1833, 1901.1.118.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tulyme",
    "title": "Lyme Regis, Dorsetshire",
    "artist": "J. M. W. Turner",
    "year": "um 1834",
    "museum": "Cincinnati Art Museum",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Lyme Regis, Dorsetshire, England - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuparlphil",
    "title": "Der Brand der Houses of Lords and Commons, 16. Oktober 1834",
    "artist": "J. M. W. Turner",
    "year": "1834–1835",
    "museum": "Philadelphia Museum of Art",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner, English - The Burning of the Houses of Lords and Commons, October 16, 1834 - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuparlclev",
    "title": "Der Brand der Houses of Lords and Commons, vom Fluss aus",
    "artist": "J. M. W. Turner",
    "year": "1834–1835",
    "museum": "Cleveland Museum of Art",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - The Burning of the Houses of Lords and Commons, 16 October 1834 - 1942.647 - Cleveland Museum of Art.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tukeelmen",
    "title": "Kohlenschiffer bei Mondlicht",
    "artist": "J. M. W. Turner",
    "year": "1835",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Keelmen Heaving in Coals by Moonlight - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tulongships",
    "title": "Der Leuchtturm Longships, Land’s End",
    "artist": "J. M. W. Turner",
    "year": "um 1834–1835",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Long Ship's Lighthouse, Land's End, by Turner, Getty Museum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tulausanne",
    "title": "Mond über Lausanne",
    "artist": "J. M. W. Turner",
    "year": "1836",
    "museum": "University of Michigan Museum of Art, Ann Arbor",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Moon over Lausanne - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuaosta",
    "title": "Das Aostatal: Schneesturm, Lawine und Gewitter",
    "artist": "J. M. W. Turner",
    "year": "1836–1837",
    "museum": "Art Institute of Chicago",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Valley of Aosta, Snowstorm, Avalanche, and Thunderstorm - 1947.513 - Art Institute of Chicago.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tucampanile",
    "title": "Der Campanile von San Marco vom Hotel Europa, Mondlicht",
    "artist": "J. M. W. Turner",
    "year": "um 1840",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) The Campanile of San Marco Venice, from the Hotel Europa (Palazzo Gustinian) by Moonlight - William Turner in Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tusalute",
    "title": "Santa Maria della Salute und die Dogana bei Sonnenuntergang",
    "artist": "J. M. W. Turner",
    "year": "1840",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Santa Maria della Salute and the Dogana, Venice, at Sunset, across the Bacino - 1840 - William Turner Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tulagoon",
    "title": "Boote auf der Lagune bei Venedig, Sonnenuntergang",
    "artist": "J. M. W. Turner",
    "year": "1840",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Boats on the Lagoon near Venice, Around Sunset - 1840 - William Turner Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tusunvenice",
    "title": "Die Sonne von Venedig sticht in See",
    "artist": "J. M. W. Turner",
    "year": "1843",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - The Sun of Venice Going to Sea - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuapproach",
    "title": "Die Einfahrt nach Venedig",
    "artist": "J. M. W. Turner",
    "year": "1844",
    "museum": "National Gallery of Art, Washington",
    "source": "Wikimedia Commons: «Approach to Venice A11470.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tutemeraire",
    "title": "Die Fighting Temeraire",
    "artist": "J. M. W. Turner",
    "year": "1839",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Turner, J. M. W. - The Fighting Téméraire tugged to her last Berth to be broken.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tumodernrome",
    "title": "Das moderne Rom, Campo Vaccino",
    "artist": "J. M. W. Turner",
    "year": "1839",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner (British - Modern Rome-Campo Vaccino - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "turockets",
    "title": "Raketen und blaue Lichter warnen Dampfschiffe vor Untiefen",
    "artist": "J. M. W. Turner",
    "year": "1840",
    "museum": "Clark Art Institute, Williamstown",
    "source": "Wikimedia Commons: «J.M.W. Turner's Rockets and Blue Lights (Close at Hand) to Warn Steamboats of Shoal Water.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tusnowstorm",
    "title": "Schneesturm: Dampfschiff vor einer Hafeneinfahrt",
    "artist": "J. M. W. Turner",
    "year": "1842",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «J.M.W. Turner – Snow Storm - Steam-Boat off a Harbour's Mouth.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuheidelberg",
    "title": "Heidelberg mit Regenbogen",
    "artist": "J. M. W. Turner",
    "year": "um 1840",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Heidelberg with a Rainbow, 1840.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "turedrigi",
    "title": "Die Rote Rigi",
    "artist": "J. M. W. Turner",
    "year": "1842",
    "museum": "National Gallery of Victoria, Melbourne",
    "source": "Wikimedia Commons: «J. M. W. Turner - The Red Rigi - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tudarkrigi",
    "title": "Die Dunkle Rigi",
    "artist": "J. M. W. Turner",
    "year": "1842",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «The Dark Rigi, the Lake of Lucerne, Showing the Rigi at Sunrise by Turner.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "turigiclouds",
    "title": "Wolken über der Rigi bei Sonnenaufgang, von Luzern",
    "artist": "J. M. W. Turner",
    "year": "um 1844",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Clouds over the Rigi at Sunrise, from Lucerne - c.1844 - William Turner in Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tubrunnen",
    "title": "Der Vierwaldstättersee: die Urnersee-Bucht von Brunnen aus",
    "artist": "J. M. W. Turner",
    "year": "um 1841–1842",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Lake Lucerne ; the Bay of Uri from above Brunnen - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tulucerne",
    "title": "Luzern vom See aus",
    "artist": "J. M. W. Turner",
    "year": "1845",
    "museum": "Morgan Library & Museum, New York",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Lucerne from the Lake - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "turhinefall",
    "title": "Der Rheinfall bei Schaffhausen",
    "artist": "J. M. W. Turner",
    "year": "um 1841",
    "museum": "Princeton University Art Museum",
    "source": "Wikimedia Commons: «1841, Turner, J.M.W., Rhine Falls of Schaffhausen.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuzug",
    "title": "Der Zugersee",
    "artist": "J. M. W. Turner",
    "year": "1843",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Wikimedia Commons: «The Lake of Zug MET DT2591.jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "tusplugen",
    "title": "Der Splügenpass",
    "artist": "J. M. W. Turner",
    "year": "1842",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Splügen Turner.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tufaido",
    "title": "Der Gotthardpass bei Faido",
    "artist": "J. M. W. Turner",
    "year": "1843",
    "museum": "Morgan Library & Museum, New York",
    "source": "Wikimedia Commons: «The Pass of St. Gotthard, near Faido by J. M. W. Turner, 1843, watercolor.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tulungern",
    "title": "Der Lungernsee im Mondlicht",
    "artist": "J. M. W. Turner",
    "year": "um 1848",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Joseph mallord william turner ra the lungernsee by moonlight switzerla095637).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "turainsteam",
    "title": "Regen, Dampf und Geschwindigkeit: die Great Western Railway",
    "artist": "J. M. W. Turner",
    "year": "1844",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «J. M. W. Turner - Rain, Steam and Speed – The Great Western Railway.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tumargbeach",
    "title": "Blick auf den Strand von Margate",
    "artist": "J. M. W. Turner",
    "year": "um 1840",
    "museum": "Whitworth Art Gallery, Manchester",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner (1775-1851) - View of the Beach at Margate - O.1922.1 - Whitworth Art Gallery.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tunorham",
    "title": "Die Burg Norham, Sonnenaufgang",
    "artist": "J. M. W. Turner",
    "year": "um 1845",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Norham Castle, Sunrise - WGA23182.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = (window.PATHS || []).filter(function (p) { return p.id === 'turner'; })[0];
  if (!path) return;
  path.part = "Teil 1–2 · 1775–1851";
  path.subtitle = "Von Covent Garden über Venedig und die Rigi nach Chelsea";
  path.intro = "Reise mit J. M. W. Turner durch sein ganzes Leben: von der Geburt in Covent Garden 1775 über die Royal Academy, Wales, die Alpen und den Rhein zu den Reisen nach Italien, nach Petworth, zum Brand des Parlaments, nach Venedig, zur Fighting Temeraire, zu den Schweizer Aquarellen und zu Regen, Dampf und Geschwindigkeit, bis zu seinem Tod am 19. Dezember 1851 in Chelsea.";
  path.ending = [
  "J. M. W. Turner stirbt am 19. Dezember 1851 in Chelsea, sechsundsiebzig Jahre alt. Er ist in der St. Paul’s Cathedral in London begraben.",
  "Seine Bilder vermacht er der Nation. Mit dem Turner Bequest bleiben Hunderte Gemälde und Tausende Zeichnungen und Aquarelle beisammen, von den frühen Ansichten aus Wales bis zu Licht, Dampf und Nebel der späten Jahre."
];
  path.epilogue = "J. M. W. Turner stirbt am 19. Dezember 1851 in Chelsea. Er ist in der St. Paul’s Cathedral in London begraben.";
  var rh = (path.stations || []).filter(function (s) { return s.id === 'turhine'; })[0];
  if (rh) {
    rh.place = "Yorkshire, der Rhein und die erste Italienreise";
    rh.intro = [
  "Um 1816 malt Turner Hackfall in Yorkshire. 1817 reist er durch Belgien und Holland, über das Schlachtfeld von Waterloo und den Rhein; etwa fünfzig Rhein-Aquarelle verkauft er an seinen Förderer Walter Fawkes, darunter den Regenbogen über Osterspai und Filsen und den römischen Turm in Andernach.",
  "1818 stellt er Dort aus, das Paketboot aus Rotterdam in der Flaute. Im selben Jahr entsteht ein Linienschiff, das Proviant übernimmt, und 1819 der Leuchtturm von Bell Rock. Im Januar 1819 erscheinen die letzten Platten des Liber Studiorum; im August reist Turner nach Italien."
];
    (rh.works || []).forEach(function (w) { if (w.pid === 'tubellrock') w.text = [
  "In schwerer See steht der Leuchtturm von Bell Rock vor der schottischen Küste, von Wellen umspült.",
  "Turner malt das Aquarell 1819. Im August desselben Jahres reist er zum ersten Mal nach Italien.",
  "Es ist in den National Galleries of Scotland in Edinburgh."
]; });
  }
  var stations = [
  {
    "id": "tuitaly",
    "place": "Die erste Reise nach Italien",
    "when": "1819–1826",
    "map": {
      "x": 158,
      "y": 150
    },
    "mapLabel": "Italien",
    "intro": [
      "Im August 1819 reist Turner zum ersten Mal nach Italien: über Turin und den Comer See nach Venedig, dann nach Rom und Neapel. Im Februar 1820 ist er zurück in London, mit Skizzenbüchern voller Zeichnungen.",
      "Rom und der Golf von Neapel prägen seine Bilder der folgenden Jahre. Daneben malt er Aquarelle für eine Folge von Stichen nach englischen Häfen."
    ],
    "works": [
      {
        "pid": "tufusina",
        "text": [
          "Von Fusina aus liegt Venedig fern über der Lagune, mit Booten und Figuren am Ufer.",
          "Das Aquarell entsteht 1821, nach der ersten Italienreise.",
          "Es ist in einer Privatsammlung."
        ],
        "fact": "1821. Privatsammlung."
      },
      {
        "pid": "tubaiae",
        "text": [
          "Die Bucht von Baiae am Golf von Neapel leuchtet im warmen Licht; vorne sitzen Apollo und die Sibylle unter Bäumen.",
          "Turner stellt das Bild 1823 aus.",
          "Es ist in der Tate in London."
        ],
        "fact": "1823. Tate, London."
      },
      {
        "pid": "tuforum",
        "text": [
          "Unter einem grossen Bogen öffnet sich der Blick auf das Forum in Rom.",
          "Turner malt das Bild für den Architekten John Soane und stellt es 1826 aus.",
          "Es ist in der Tate in London."
        ],
        "fact": "1826. Tate, London."
      },
      {
        "pid": "tunewcastle",
        "text": [
          "Newcastle liegt am Tyne, mit Kirchtürmen, Rauch und Schiffen.",
          "Das Aquarell entsteht um 1823 für eine Folge von Stichen nach englischen Häfen.",
          "Es ist in der Tate in London."
        ],
        "fact": "um 1823. Tate, London."
      }
    ]
  },
  {
    "id": "tuengland",
    "place": "Häfen am Kanal und an der Themse",
    "when": "1825–1828",
    "map": {
      "x": 108,
      "y": 96
    },
    "mapLabel": "Häfen",
    "intro": [
      "Ab 1825 reist Turner wieder auf den Kontinent: nach Holland, an den Rhein und nach Frankreich. 1826 stellt er Köln und den Hafen von Dieppe aus, grosse Bilder voller gelbem Licht.",
      "1827 malt er die Terrasse in Mortlake an der Themse. Für die Folge «Picturesque Views in England and Wales» entstehen Aquarelle wie Dunwich und Stonehenge."
    ],
    "works": [
      {
        "pid": "tucologne",
        "text": [
          "Ein Paketboot legt am Abend in Köln an; Häuser und Kirchtürme stehen im goldenen Licht über dem Rhein.",
          "Turner stellt das Bild 1826 aus.",
          "Es ist in der Frick Collection in New York."
        ],
        "fact": "1826. Frick Collection, New York."
      },
      {
        "pid": "tudieppe",
        "text": [
          "Der Hafen von Dieppe ist voller Boote, Menschen und Sonne; das Licht liegt gelb über dem Wasser.",
          "Turner stellt das Bild 1825 aus.",
          "Es ist in der Frick Collection in New York."
        ],
        "fact": "1825. Frick Collection, New York."
      },
      {
        "pid": "tumortlake",
        "text": [
          "Lange Baumschatten fallen über eine Terrasse an der Themse in Mortlake; hinten glänzt der Fluss.",
          "Turner stellt das Bild 1827 aus.",
          "Es ist in der National Gallery of Art in Washington."
        ],
        "fact": "1827. National Gallery of Art, Washington."
      },
      {
        "pid": "tudunwich",
        "text": [
          "Über der Küste von Dunwich stehen Kirchenruinen auf der Klippe, unten ziehen Fischer ein Boot aus der Brandung.",
          "Das Aquarell entsteht um 1827.",
          "Es ist in der Manchester Art Gallery."
        ],
        "fact": "um 1827. Manchester Art Gallery."
      },
      {
        "pid": "tustonehenge",
        "text": [
          "Ein Gewitter zieht über die Steine von Stonehenge, ein Hirte und Schafe sind auf der Ebene.",
          "Das Aquarell entsteht um 1828 für die Folge der Ansichten von England und Wales.",
          "Es ist im Salisbury Museum."
        ],
        "fact": "um 1828. Salisbury Museum."
      }
    ]
  },
  {
    "id": "tupetworth",
    "place": "Petworth und Lord Egremont",
    "when": "1827–1830",
    "map": {
      "x": 98,
      "y": 116
    },
    "mapLabel": "Petworth",
    "intro": [
      "Ab 1827 ist Turner oft zu Gast in Petworth House in Sussex, beim dritten Earl of Egremont, einem grossen Sammler und Förderer. Im Haus hat er ein eigenes Atelier.",
      "Für den holzgetäfelten Speisesaal malt er um 1828 lange Landschaftsbilder: den Park im Abendlicht, den See bei Sonnenaufgang und den Kanal von Chichester."
    ],
    "works": [
      {
        "pid": "tupetpark",
        "text": [
          "Im Abendlicht liegt der Park von Petworth mit Hirschen; in der Ferne steht die Kirche von Tillington.",
          "Das lange Bild entsteht um 1828 für das Haus von Lord Egremont.",
          "Es ist in der Tate in London."
        ],
        "fact": "um 1828. Tate, London."
      },
      {
        "pid": "tupetsunrise",
        "text": [
          "Die Sonne geht über dem See im Park von Petworth auf, Hirsche stehen am Wasser.",
          "Die Studie entsteht um 1827 bis 1828.",
          "Sie ist in der Tate in London."
        ],
        "fact": "um 1827–1828. Tate, London."
      },
      {
        "pid": "tupetsunset",
        "text": [
          "Die Sonne versinkt über dem See von Petworth und färbt Himmel und Wasser.",
          "Die Studie entsteht um 1827 bis 1828 für die Bilder im Speisesaal.",
          "Sie ist in der Tate in London."
        ],
        "fact": "um 1827–1828. Tate, London."
      },
      {
        "pid": "tuchichester",
        "text": [
          "Ein Segelschiff liegt still auf dem Kanal von Chichester im Abendlicht.",
          "Auch dieses lange Bild entsteht um 1828 für Petworth.",
          "Es ist in der Tate in London."
        ],
        "fact": "um 1828. Tate, London."
      },
      {
        "pid": "tualnwick",
        "text": [
          "Im Mondlicht stehen die Burg Alnwick und eine Brücke im Norden Englands, Hirsche spiegeln sich im Wasser.",
          "Das Aquarell entsteht um 1829.",
          "Es ist in der Art Gallery of South Australia in Adelaide."
        ],
        "fact": "um 1829. Art Gallery of South Australia, Adelaide."
      }
    ]
  },
  {
    "id": "tuitaly2",
    "place": "Zweite Italienreise, Loire und Schottland",
    "when": "1828–1834",
    "map": {
      "x": 138,
      "y": 128
    },
    "mapLabel": "Rom",
    "intro": [
      "Von August 1828 bis Februar 1829 ist Turner ein zweites Mal in Italien und malt in Rom; 1829 stellt er Odysseus verhöhnt Polyphem aus. Im September 1829 stirbt sein Vater, der ihm jahrelang im Atelier geholfen hat.",
      "Für Reisebücher zeichnet er an der Loire. 1831 reist er für Walter Scotts Gedichte nach Schottland, bis zur Insel Staffa. 1833 malt er Antwerpen."
    ],
    "works": [
      {
        "pid": "tuulyssketch",
        "text": [
          "Felsen, Meer und ein glühender Himmel: die Ölskizze zu Odysseus, der den Riesen Polyphem verhöhnt.",
          "Das fertige Bild stellt Turner 1829 aus.",
          "Die Skizze ist in der Tate in London."
        ],
        "fact": "um 1827–1828. Tate, London."
      },
      {
        "pid": "tuchilde",
        "text": [
          "Eine weite italienische Landschaft mit einer hohen Pinie, Ruinen und Figuren im Vordergrund.",
          "Turner nennt das Bild nach Lord Byrons Gedicht und stellt es 1832 aus.",
          "Es ist in der Tate in London."
        ],
        "fact": "1832. Tate, London."
      },
      {
        "pid": "tunantes",
        "text": [
          "Auf dem Markt der Île Feydeau drängen sich Menschen, hinten steht die Stadt Nantes an der Loire.",
          "Das Aquarell entsteht 1829 bis 1830.",
          "Es ist im Château des ducs de Bretagne in Nantes."
        ],
        "fact": "1829–1830. Château des ducs de Bretagne, Nantes."
      },
      {
        "pid": "tusaumur",
        "text": [
          "Eine lange Brücke führt über die Loire nach Saumur, darüber erhebt sich das Schloss.",
          "Das Aquarell entsteht um 1830.",
          "Es ist im Clark Art Institute in Williamstown."
        ],
        "fact": "um 1830. Clark Art Institute, Williamstown."
      },
      {
        "pid": "tumelrose",
        "text": [
          "Im Abendlicht blickt man über den Tweed auf Melrose, vorne rastet eine kleine Gesellschaft.",
          "Turner malt das Aquarell 1831 als Illustration zu Walter Scotts Gedichten.",
          "Es ist in den National Galleries of Scotland in Edinburgh."
        ],
        "fact": "1831. National Galleries of Scotland, Edinburgh."
      },
      {
        "pid": "tustaffa",
        "text": [
          "Ein Dampfschiff fährt im Sturm an der Insel Staffa vorbei; die Sonne geht hinter Wolken unter.",
          "Turner war 1831 selbst dort und stellt das Bild 1832 aus.",
          "Es ist im Yale Center for British Art in New Haven."
        ],
        "fact": "1832. Yale Center for British Art, New Haven."
      },
      {
        "pid": "tuantwerp",
        "text": [
          "Boote kreuzen vor Antwerpen auf bewegtem Wasser; der Maler Jan van Goyen sucht ein Motiv.",
          "Turner stellt das Bild 1833 aus.",
          "Es ist in der Frick Collection in New York."
        ],
        "fact": "1833. Frick Collection, New York."
      },
      {
        "pid": "tulyme",
        "text": [
          "Wellen schlagen an die Küste von Lyme Regis; Fischer ziehen ihr Boot an Land.",
          "Das Aquarell entsteht um 1834.",
          "Es ist im Cincinnati Art Museum."
        ],
        "fact": "um 1834. Cincinnati Art Museum."
      }
    ]
  },
  {
    "id": "tufire",
    "place": "Das Parlament brennt",
    "when": "1834–1837",
    "map": {
      "x": 104,
      "y": 88
    },
    "mapLabel": "Feuer",
    "intro": [
      "Am Abend des 16. Oktober 1834 brennt in London der alte Parlamentspalast. Turner sieht das Feuer vom Fluss aus und skizziert es. 1835 stellt er zwei grosse Ölbilder davon aus.",
      "Im selben Jahr malt er Kohlenschiffer bei Mondlicht am Tyne. 1836 reist er mit seinem Sammler Hugh Munro of Novar durch Frankreich und die Schweiz bis ins Aostatal."
    ],
    "works": [
      {
        "pid": "tuparlphil",
        "text": [
          "Flammen schlagen über die Themse, die Westminster Bridge leuchtet im Feuerschein.",
          "Turner stellt dieses Bild 1835 aus.",
          "Es ist im Philadelphia Museum of Art."
        ],
        "fact": "1834–1835. Philadelphia Museum of Art."
      },
      {
        "pid": "tuparlclev",
        "text": [
          "Vom Wasser aus gesehen steigt das Feuer in den Nachthimmel, Boote liegen auf dem Fluss.",
          "Es ist die zweite grosse Fassung, 1835 ausgestellt.",
          "Sie ist im Cleveland Museum of Art."
        ],
        "fact": "1834–1835. Cleveland Museum of Art."
      },
      {
        "pid": "tukeelmen",
        "text": [
          "Auf dem Tyne laden Schiffer im Mondlicht Kohle, Fackeln brennen auf den Booten.",
          "Turner stellt das Bild 1835 aus.",
          "Es ist in der National Gallery of Art in Washington."
        ],
        "fact": "1835. National Gallery of Art, Washington."
      },
      {
        "pid": "tulongships",
        "text": [
          "Gischt und Wolken umtosen den Leuchtturm Longships an der Spitze von Cornwall.",
          "Das Aquarell entsteht um 1834 bis 1835.",
          "Es ist im J. Paul Getty Museum in Los Angeles."
        ],
        "fact": "um 1834–1835. J. Paul Getty Museum, Los Angeles."
      },
      {
        "pid": "tulausanne",
        "text": [
          "Ein kleiner Mond steht über Lausanne und dem Genfersee, vorne stehen drei Figuren.",
          "Das Aquarell entsteht 1836, im Jahr der Reise mit Munro of Novar.",
          "Es ist im University of Michigan Museum of Art in Ann Arbor."
        ],
        "fact": "1836. University of Michigan Museum of Art, Ann Arbor."
      },
      {
        "pid": "tuaosta",
        "text": [
          "Schnee, Lawine und Gewitter wirbeln durch das Aostatal; Berge lösen sich im Sturm auf.",
          "Das Bild entsteht 1836 bis 1837, nach der Reise mit Munro.",
          "Es ist im Art Institute of Chicago."
        ],
        "fact": "1836–1837. Art Institute of Chicago."
      }
    ]
  },
  {
    "id": "tuvenice",
    "place": "Venedig",
    "when": "1833–1844",
    "map": {
      "x": 170,
      "y": 124
    },
    "mapLabel": "Venedig",
    "intro": [
      "1833 ist Turner wieder in Venedig, im August 1840 zum letzten Mal. Er wohnt im Hotel Europa am Canal Grande und malt Kirchen, Lagune und Nachthimmel in Aquarell.",
      "Daraus entstehen in London Ölbilder voller Licht. 1843 stellt er die Sonne von Venedig aus, die in See sticht, 1844 die Einfahrt nach Venedig."
    ],
    "works": [
      {
        "pid": "tucampanile",
        "text": [
          "Vom Hotel Europa sieht Turner nachts den Campanile von San Marco im Mondlicht.",
          "Das Aquarell entsteht 1840, beim letzten Aufenthalt in Venedig.",
          "Es ist in der Tate in London."
        ],
        "fact": "um 1840. Tate, London."
      },
      {
        "pid": "tusalute",
        "text": [
          "Über das Becken von San Marco hinweg leuchten die Salute-Kirche und die Dogana im Abendlicht.",
          "Das Aquarell entsteht 1840.",
          "Es ist in der Tate in London."
        ],
        "fact": "1840. Tate, London."
      },
      {
        "pid": "tulagoon",
        "text": [
          "Wenige Boote liegen auf der stillen Lagune; der Himmel löst sich in Farbe auf.",
          "Das Aquarell entsteht 1840.",
          "Es ist in der Tate in London."
        ],
        "fact": "1840. Tate, London."
      },
      {
        "pid": "tusunvenice",
        "text": [
          "Ein Fischerboot mit bemaltem Segel fährt am Morgen aus Venedig hinaus, alles schimmert im Licht.",
          "Turner stellt das Bild 1843 aus.",
          "Es ist in der Tate in London."
        ],
        "fact": "1843. Tate, London."
      },
      {
        "pid": "tuapproach",
        "text": [
          "Gondeln gleiten bei Sonnenuntergang auf Venedig zu, Stadt und Himmel verschmelzen.",
          "Turner stellt das Bild 1844 aus.",
          "Es ist in der National Gallery of Art in Washington."
        ],
        "fact": "1844. National Gallery of Art, Washington."
      }
    ]
  },
  {
    "id": "tutemer",
    "place": "Die Fighting Temeraire",
    "when": "1838–1842",
    "map": {
      "x": 116,
      "y": 84
    },
    "mapLabel": "Temeraire",
    "intro": [
      "1838 sieht Turner, wie das alte Linienschiff Temeraire, das bei Trafalgar gekämpft hatte, von einem Dampfschlepper zum Abwracken die Themse hinaufgezogen wird. 1839 stellt er das Bild an der Royal Academy aus.",
      "Im Juni 1840 lernt er den jungen John Ruskin kennen, der ihn schon verteidigt hat. Es folgen Bilder von Sturm, Dampf und Licht, darunter 1842 der Schneesturm."
    ],
    "works": [
      {
        "pid": "tutemeraire",
        "text": [
          "Ein dunkler Dampfschlepper zieht das helle alte Kriegsschiff Temeraire zu seinem letzten Liegeplatz; die Sonne geht unter.",
          "Turner stellt das Bild 1839 aus.",
          "Es hängt in der National Gallery in London."
        ],
        "fact": "1839. National Gallery, London."
      },
      {
        "pid": "tumodernrome",
        "text": [
          "Im Abendlicht liegt das Forum Romanum, der Campo Vaccino, mit Säulen, Kirchen und dem Mond.",
          "Turner stellt das Bild 1839 aus.",
          "Es ist im J. Paul Getty Museum in Los Angeles."
        ],
        "fact": "1839. J. Paul Getty Museum, Los Angeles."
      },
      {
        "pid": "turockets",
        "text": [
          "An einer Küste steigen Signalraketen auf, ein Dampfschiff fährt durch Wellen und Licht.",
          "Turner stellt das Bild 1840 aus.",
          "Es ist im Clark Art Institute in Williamstown."
        ],
        "fact": "1840. Clark Art Institute, Williamstown."
      },
      {
        "pid": "tusnowstorm",
        "text": [
          "Ein Dampfschiff verschwindet fast im Wirbel von Schnee, Wind und Wellen.",
          "Turner stellt das Bild 1842 aus.",
          "Es ist in der Tate in London."
        ],
        "fact": "1842. Tate, London."
      },
      {
        "pid": "tuheidelberg",
        "text": [
          "Über Heidelberg und dem Neckar steht ein Regenbogen, das Schloss liegt im Licht.",
          "Das Aquarell entsteht um 1840.",
          "Es ist in einer Privatsammlung."
        ],
        "fact": "um 1840. Privatsammlung."
      }
    ]
  },
  {
    "id": "turigi",
    "place": "Luzern und die Rigi",
    "when": "1841–1845",
    "map": {
      "x": 150,
      "y": 104
    },
    "mapLabel": "Rigi",
    "intro": [
      "Von 1841 bis 1844 reist Turner jeden Sommer in die Schweiz, oft mit Luzern als Standort. Vom See aus malt er die Rigi immer wieder: im Morgenlicht, im Abendrot, im Dunst.",
      "Aus kleinen Musterstudien entstehen fertige Aquarelle für Sammler. 1842 malt er die Rote und die Dunkle Rigi, um 1845 einen Festtag in Zürich."
    ],
    "works": [
      {
        "pid": "turedrigi",
        "text": [
          "Am Abend glüht die Rigi rot über dem Vierwaldstättersee; im Wasser spiegelt sich das Licht.",
          "Das Aquarell entsteht 1842.",
          "Es ist in der National Gallery of Victoria in Melbourne."
        ],
        "fact": "1842. National Gallery of Victoria, Melbourne."
      },
      {
        "pid": "tudarkrigi",
        "text": [
          "Vor Sonnenaufgang liegt die Rigi dunkel über dem Vierwaldstättersee, Boote sind schon unterwegs.",
          "Das Aquarell entsteht 1842.",
          "Es ist in einer Privatsammlung."
        ],
        "fact": "1842. Privatsammlung."
      },
      {
        "pid": "turigiclouds",
        "text": [
          "Rosa und blaue Wolken liegen über der Rigi, von Luzern aus gesehen.",
          "Die Studie entsteht um 1844.",
          "Sie ist in der Tate in London."
        ],
        "fact": "um 1844. Tate, London."
      },
      {
        "pid": "tubrunnen",
        "text": [
          "Von oberhalb Brunnen öffnet sich der Blick über den Urnersee, Berge und Wasser in hellem Dunst.",
          "Die Studie entsteht um 1841 bis 1842.",
          "Sie ist in der Tate in London."
        ],
        "fact": "um 1841–1842. Tate, London."
      },
      {
        "pid": "tulucerne",
        "text": [
          "Luzern liegt im Abendlicht am See, mit Türmen, Mauern und Booten.",
          "Das Aquarell entsteht 1845.",
          "Es ist in der Morgan Library & Museum in New York."
        ],
        "fact": "1845. Morgan Library & Museum, New York."
      }
    ]
  },
  {
    "id": "tupasses",
    "place": "Seen und Alpenpässe",
    "when": "1841–1848",
    "map": {
      "x": 144,
      "y": 116
    },
    "mapLabel": "Pässe",
    "intro": [
      "Turner malt den Rheinfall bei Schaffhausen, den Zugersee, den Splügenpass und den Weg über den Gotthard bei Faido. Die Blätter verbinden Berge, Wasser und Wetter zu Licht.",
      "Noch um 1848 entstehen Schweizer Aquarelle, etwa der Lungernsee im Mondlicht."
    ],
    "works": [
      {
        "pid": "turhinefall",
        "text": [
          "Der Rheinfall stürzt in weisser Gischt, darüber liegt Schloss Laufen im Licht.",
          "Das Aquarell entsteht um 1841.",
          "Es ist im Princeton University Art Museum."
        ],
        "fact": "um 1841. Princeton University Art Museum."
      },
      {
        "pid": "tuzug",
        "text": [
          "Am frühen Morgen liegt der Zugersee unter den Bergen, die Stadt am Ufer im Dunst.",
          "Das Aquarell entsteht 1843.",
          "Es ist im Metropolitan Museum of Art in New York."
        ],
        "fact": "1843. Metropolitan Museum of Art, New York."
      },
      {
        "pid": "tusplugen",
        "text": [
          "Der Weg zum Splügenpass führt in ein weites Tal voller Licht und Dunst.",
          "Das Aquarell entsteht 1842.",
          "Es ist in einer Privatsammlung."
        ],
        "fact": "1842. Privatsammlung."
      },
      {
        "pid": "tufaido",
        "text": [
          "Bei Faido windet sich die Gotthardstrasse durch Felsen und Wasser, unter einem stürmischen Himmel.",
          "Das Aquarell entsteht 1843.",
          "Es ist in der Morgan Library & Museum in New York."
        ],
        "fact": "1843. Morgan Library & Museum, New York."
      },
      {
        "pid": "tulungern",
        "text": [
          "Der Lungernsee in Obwalden liegt still unter dem Mond, Berge rahmen das Wasser.",
          "Das Aquarell entsteht um 1848.",
          "Es ist in einer Privatsammlung."
        ],
        "fact": "um 1848. Privatsammlung."
      }
    ]
  },
  {
    "id": "tulast",
    "place": "Regen, Dampf und Geschwindigkeit, Margate und Chelsea",
    "when": "1844–1851",
    "map": {
      "x": 122,
      "y": 70
    },
    "mapLabel": "Chelsea",
    "intro": [
      "1844 stellt Turner Regen, Dampf und Geschwindigkeit aus: einen Zug der Great Western Railway auf der Brücke bei Maidenhead. In Margate wohnt er oft bei Sophia Caroline Booth; um 1846 zieht er mit ihr in ein Haus am Fluss in Chelsea, wo man ihn als «Mr Booth» kennt.",
      "1845 ist er Vizepräsident der Royal Academy. 1850 stellt er dort zum letzten Mal aus. J. M. W. Turner stirbt am 19. Dezember 1851 in Chelsea und wird in der St. Paul’s Cathedral begraben. Seine Bilder vermacht er der Nation; 1856 geht der Nachlass als Turner Bequest an den Staat."
    ],
    "works": [
      {
        "pid": "turainsteam",
        "text": [
          "Ein Zug donnert über die Brücke bei Maidenhead, durch Regen und Dunst; vorne läuft ein Hase.",
          "Turner stellt das Bild 1844 aus.",
          "Es hängt in der National Gallery in London."
        ],
        "fact": "1844. National Gallery, London."
      },
      {
        "pid": "tumargbeach",
        "text": [
          "Helles Licht liegt über dem Strand von Margate, Himmel und Meer gehen ineinander über.",
          "Turner kommt in diesen Jahren oft hierher.",
          "Das Bild ist in der Whitworth Art Gallery in Manchester."
        ],
        "fact": "um 1840. Whitworth Art Gallery, Manchester."
      },
      {
        "pid": "tunorham",
        "text": [
          "Die Burg Norham am Tweed steht blau gegen die aufgehende Sonne, eine Kuh steht im Wasser.",
          "Turner hatte das Motiv schon als junger Mann gemalt; diese späte Fassung entsteht um 1845.",
          "Sie ist in der Tate in London."
        ],
        "fact": "um 1845. Tate, London."
      }
    ]
  }
];
  path.stations = (path.stations || []).concat(stations);
})();
