// v10.43 Edgar Degas life journey (1834–1917). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "dgrenedegas",
    "title": "René de Gas",
    "artist": "Edgar Degas",
    "year": "1855",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1995.47.8: https://www.nga.gov/collection/art-object-page.92995.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgachille",
    "title": "Achille De Gas in Kadettenuniform",
    "artist": "Edgar Degas",
    "year": "1856–1857",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.123: https://www.nga.gov/collection/art-object-page.46598.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgselfmet",
    "title": "Selbstbildnis",
    "artist": "Edgar Degas",
    "year": "um 1855–1856",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 61.101.6: https://www.metmuseum.org/art/collection/search/436158, CC0 (gemeinfrei)"
  },
  {
    "id": "dgselfcollar",
    "title": "Selbstbildnis mit weissem Kragen",
    "artist": "Edgar Degas",
    "year": "um 1857",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1995.47.7: https://www.nga.gov/collection/art-object-page.92994.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgolditalian",
    "title": "Die alte Italienerin",
    "artist": "Edgar Degas",
    "year": "1857",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 66.65.2: https://www.metmuseum.org/art/collection/search/436120, CC0 (gemeinfrei)"
  },
  {
    "id": "dgitalianwc",
    "title": "Italienerin",
    "artist": "Edgar Degas",
    "year": "um 1856–1857",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2003.20.5: https://www.metmuseum.org/art/collection/search/364337, CC0 (gemeinfrei)"
  },
  {
    "id": "dgibis",
    "title": "Junge Frau mit Ibissen",
    "artist": "Edgar Degas",
    "year": "1857–1862",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2008.277: https://www.metmuseum.org/art/collection/search/438156, CC0 (gemeinfrei)"
  },
  {
    "id": "dgmorbilli",
    "title": "Edmondo und Thérèse Morbilli",
    "artist": "Edgar Degas",
    "year": "um 1865",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.125: https://www.nga.gov/collection/art-object-page.46600.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgyoungblack",
    "title": "Junge Frau in Schwarz",
    "artist": "Edgar Degas",
    "year": "1861–1865",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1995.47.31: https://www.nga.gov/collection/art-object-page.92993.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dggirlred",
    "title": "Mädchen in Rot",
    "artist": "Edgar Degas",
    "year": "um 1866",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.17: https://www.nga.gov/collection/art-object-page.46492.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgjockeys4",
    "title": "Vier Studien eines Jockeys",
    "artist": "Edgar Degas",
    "year": "1866",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.469: https://www.artic.edu/artworks/14686, CC0 (gemeinfrei)"
  },
  {
    "id": "dghorsesmead",
    "title": "Pferde auf einer Wiese",
    "artist": "Edgar Degas",
    "year": "1871",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1995.11.1: https://www.nga.gov/collection/art-object-page.91222.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgraces",
    "title": "Die Rennen",
    "artist": "Edgar Degas",
    "year": "1871–1872",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1942.9.18: https://www.nga.gov/collection/art-object-page.1157.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgvaseflower",
    "title": "Frau neben einer Blumenvase (Madame Paul Valpinçon?)",
    "artist": "Edgar Degas",
    "year": "1865",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.128: https://www.metmuseum.org/art/collection/search/436121, CC0 (gemeinfrei)"
  },
  {
    "id": "dgwomangray",
    "title": "Bildnis einer Frau in Grau",
    "artist": "Edgar Degas",
    "year": "um 1865",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 57.171: https://www.metmuseum.org/art/collection/search/436152, CC0 (gemeinfrei)"
  },
  {
    "id": "dgcollector",
    "title": "Der Graphiksammler",
    "artist": "Edgar Degas",
    "year": "1866",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.44: https://www.metmuseum.org/art/collection/search/436122, CC0 (gemeinfrei)"
  },
  {
    "id": "dgtwomen",
    "title": "Zwei Männer",
    "artist": "Edgar Degas",
    "year": "um 1865–1869",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1992.380: https://www.metmuseum.org/art/collection/search/436168, CC0 (gemeinfrei)"
  },
  {
    "id": "dglisleloub",
    "title": "Bildnis von Madame Lisle und Madame Loubens",
    "artist": "Edgar Degas",
    "year": "um 1867",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1953.335: https://www.artic.edu/artworks/79586, CC0 (gemeinfrei)"
  },
  {
    "id": "dglisle",
    "title": "Madame Lisle",
    "artist": "Edgar Degas",
    "year": "um 1866–1870",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 19.51.5: https://www.metmuseum.org/art/collection/search/333811, CC0 (gemeinfrei)"
  },
  {
    "id": "dgtissot",
    "title": "James Tissot",
    "artist": "Edgar Degas",
    "year": "um 1867–1868",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 39.161: https://www.metmuseum.org/art/collection/search/436144, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdihau",
    "title": "Marie Dihau",
    "artist": "Edgar Degas",
    "year": "1867–1868",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.182: https://www.metmuseum.org/art/collection/search/436150, CC0 (gemeinfrei)"
  },
  {
    "id": "dgloubens",
    "title": "Madame Loubens",
    "artist": "Edgar Degas",
    "year": "um 1869",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 19.51.4: https://www.metmuseum.org/art/collection/search/333810, CC0 (gemeinfrei)"
  },
  {
    "id": "dgaltes",
    "title": "Joseph-Henri Altès",
    "artist": "Edgar Degas",
    "year": "1868",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.181: https://www.metmuseum.org/art/collection/search/436145, CC0 (gemeinfrei)"
  },
  {
    "id": "dgspanish",
    "title": "Spanische Tänzer und Musiker",
    "artist": "Edgar Degas",
    "year": "1868–1869",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2000.25.3: https://www.nga.gov/collection/art-object-page.111582.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgcamus",
    "title": "Madame Camus",
    "artist": "Edgar Degas",
    "year": "1869–1870",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.121: https://www.nga.gov/collection/art-object-page.46596.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgrobert",
    "title": "Das Ballett aus «Robert le Diable»",
    "artist": "Edgar Degas",
    "year": "1871",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.552: https://www.metmuseum.org/art/collection/search/436123, CC0 (gemeinfrei)"
  },
  {
    "id": "dglowtide",
    "title": "Strand bei Ebbe (Flussmündung)",
    "artist": "Edgar Degas",
    "year": "1869",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2013.164: https://www.artic.edu/artworks/218848, CC0 (gemeinfrei)"
  },
  {
    "id": "dggobillard",
    "title": "Madame Théodore Gobillard (Yves Morisot)",
    "artist": "Edgar Degas",
    "year": "1869",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.45: https://www.metmuseum.org/art/collection/search/436149, CC0 (gemeinfrei)"
  },
  {
    "id": "dggobpastel",
    "title": "Madame Théodore Gobillard, Pastell",
    "artist": "Edgar Degas",
    "year": "1869",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1976.201.8: https://www.metmuseum.org/art/collection/search/334345, CC0 (gemeinfrei)"
  },
  {
    "id": "dgsulking",
    "title": "Schmollen",
    "artist": "Edgar Degas",
    "year": "um 1870",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.43: https://www.metmuseum.org/art/collection/search/436162, CC0 (gemeinfrei)"
  },
  {
    "id": "dgrenewife",
    "title": "Madame René de Gas",
    "artist": "Edgar Degas",
    "year": "1872–1873",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.124: https://www.nga.gov/collection/art-object-page.46599.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgbell",
    "title": "Die Cousine des Künstlers, wohl Mrs. William Bell (Mathilde Musson)",
    "artist": "Edgar Degas",
    "year": "1873",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.40: https://www.metmuseum.org/art/collection/search/436124, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdancing70",
    "title": "Die Tanzstunde",
    "artist": "Edgar Degas",
    "year": "um 1870",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.184: https://www.metmuseum.org/art/collection/search/436141, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdance73",
    "title": "Die Tanzklasse",
    "artist": "Edgar Degas",
    "year": "um 1873",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.79.710: https://www.nga.gov/collection/art-object-page.165300.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdance74",
    "title": "Die Tanzklasse",
    "artist": "Edgar Degas",
    "year": "1874",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1987.47.1: https://www.metmuseum.org/art/collection/search/438817, CC0 (gemeinfrei)"
  },
  {
    "id": "degas",
    "title": "Die Tanzklasse",
    "artist": "Edgar Degas",
    "year": "1873–1876",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Edgar Degas - The Ballet Class - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dgrehearsal",
    "title": "Die Ballettprobe auf der Bühne",
    "artist": "Edgar Degas",
    "year": "um 1874",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.160.26: https://www.metmuseum.org/art/collection/search/436155, CC0 (gemeinfrei)"
  },
  {
    "id": "dgrehpastel",
    "title": "Die Probe auf der Bühne",
    "artist": "Edgar Degas",
    "year": "um 1874",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.39: https://www.metmuseum.org/art/collection/search/436156, CC0 (gemeinfrei)"
  },
  {
    "id": "dgironing",
    "title": "Eine Frau beim Bügeln",
    "artist": "Edgar Degas",
    "year": "1873",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.46: https://www.metmuseum.org/art/collection/search/436174, CC0 (gemeinfrei)"
  },
  {
    "id": "dgyellow",
    "title": "Gelbe Tänzerinnen (In den Kulissen)",
    "artist": "Edgar Degas",
    "year": "1874–1876",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1963.923: https://www.artic.edu/artworks/18951, CC0 (gemeinfrei)"
  },
  {
    "id": "dgsofa",
    "title": "Frau auf einem Sofa",
    "artist": "Edgar Degas",
    "year": "1875",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.185: https://www.metmuseum.org/art/collection/search/436125, CC0 (gemeinfrei)"
  },
  {
    "id": "dghandmouth",
    "title": "Junge Frau mit der Hand vor dem Mund",
    "artist": "Edgar Degas",
    "year": "um 1875",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2018.289.2: https://www.metmuseum.org/art/collection/search/782304, CC0 (gemeinfrei)"
  },
  {
    "id": "dghenrilucie",
    "title": "Henri Degas und seine Nichte Lucie Degas",
    "artist": "Edgar Degas",
    "year": "1875–1876",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.429: https://www.artic.edu/artworks/14574, CC0 (gemeinfrei)"
  },
  {
    "id": "dgcarafa",
    "title": "Stefanina Primicile Carafa",
    "artist": "Edgar Degas",
    "year": "um 1875",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1958.28: https://clevelandart.org/art/1958.28, CC0 (gemeinfrei)"
  },
  {
    "id": "dgironing2",
    "title": "Frau beim Bügeln",
    "artist": "Edgar Degas",
    "year": "um 1876–1887",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1972.74.1: https://www.nga.gov/collection/art-object-page.53532.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgmalot",
    "title": "Mademoiselle Malot",
    "artist": "Edgar Degas",
    "year": "um 1877",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.18: https://www.nga.gov/collection/art-object-page.46493.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dglafond",
    "title": "Paul Lafond und Alphonse Cherfils betrachten ein Gemälde",
    "artist": "Edgar Degas",
    "year": "um 1878–1880",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1958.25: https://clevelandart.org/art/1958.25, CC0 (gemeinfrei)"
  },
  {
    "id": "dgspectator",
    "title": "Café-Concert (Die Zuschauer)",
    "artist": "Edgar Degas",
    "year": "1876–1877",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2007.286: https://www.artic.edu/artworks/191507, CC0 (gemeinfrei)"
  },
  {
    "id": "dgcafeconc",
    "title": "Café-Concert",
    "artist": "Edgar Degas",
    "year": "1876–1877",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.136.175: https://www.nga.gov/collection/art-object-page.126927.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgsingers",
    "title": "Sängerinnen auf der Bühne",
    "artist": "Edgar Degas",
    "year": "1877–1879",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1977.773: https://www.artic.edu/artworks/94398, CC0 (gemeinfrei)"
  },
  {
    "id": "dgcafesinger",
    "title": "Café-Sängerin",
    "artist": "Edgar Degas",
    "year": "1879",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1955.738: https://www.artic.edu/artworks/84076, CC0 (gemeinfrei)"
  },
  {
    "id": "dgsingergrn",
    "title": "Die Sängerin in Grün",
    "artist": "Edgar Degas",
    "year": "um 1884",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 61.101.7: https://www.metmuseum.org/art/collection/search/436159, CC0 (gemeinfrei)"
  },
  {
    "id": "dgonstage",
    "title": "Auf der Bühne",
    "artist": "Edgar Degas",
    "year": "1876–1877",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1922.423: https://www.artic.edu/artworks/81531, CC0 (gemeinfrei)"
  },
  {
    "id": "dgopera77",
    "title": "Ballett in der Pariser Oper",
    "artist": "Edgar Degas",
    "year": "1877",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1981.12: https://www.artic.edu/artworks/61603, CC0 (gemeinfrei)"
  },
  {
    "id": "dgoldopera",
    "title": "Tänzerinnen in der alten Oper",
    "artist": "Edgar Degas",
    "year": "um 1877",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.26: https://www.nga.gov/collection/art-object-page.52170.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgballetdanc",
    "title": "Balletttänzerinnen",
    "artist": "Edgar Degas",
    "year": "um 1877",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.27: https://www.nga.gov/collection/art-object-page.52171.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdanceronst",
    "title": "Tänzerin auf der Bühne",
    "artist": "Edgar Degas",
    "year": "um 1877",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1974.356.30: https://www.metmuseum.org/art/collection/search/436134, CC0 (gemeinfrei)"
  },
  {
    "id": "etoile",
    "title": "Der Stern",
    "artist": "Edgar Degas",
    "year": "um 1876–1877",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Edgar Degas - Ballet (L'Étoile).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dgcurtain",
    "title": "Der Vorhang",
    "artist": "Edgar Degas",
    "year": "um 1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2006.128.16: https://www.nga.gov/collection/art-object-page.136026.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgthreeprep",
    "title": "Drei Tänzerinnen bereiten sich auf die Stunde vor",
    "artist": "Edgar Degas",
    "year": "nach 1878",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.558: https://www.metmuseum.org/art/collection/search/436163, CC0 (gemeinfrei)"
  },
  {
    "id": "dgstretch",
    "title": "Tänzerin dehnt sich an der Stange",
    "artist": "Edgar Degas",
    "year": "1877–1880",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.1229: https://www.artic.edu/artworks/16758, CC0 (gemeinfrei)"
  },
  {
    "id": "dgviolinist",
    "title": "Geiger, Studie für «Die Tanzstunde»",
    "artist": "Edgar Degas",
    "year": "um 1878–1879",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 19.51.1: https://www.metmuseum.org/art/collection/search/333807, CC0 (gemeinfrei)"
  },
  {
    "id": "dglessonpast",
    "title": "Die Tanzstunde",
    "artist": "Edgar Degas",
    "year": "um 1879",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1971.185: https://www.metmuseum.org/art/collection/search/436132, CC0 (gemeinfrei)"
  },
  {
    "id": "dglessonoil",
    "title": "Die Tanzstunde",
    "artist": "Edgar Degas",
    "year": "um 1879",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1995.47.6: https://www.nga.gov/collection/art-object-page.93045.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgfan80",
    "title": "Tänzerin mit Fächer",
    "artist": "Edgar Degas",
    "year": "um 1880",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.188: https://www.metmuseum.org/art/collection/search/436135, CC0 (gemeinfrei)"
  },
  {
    "id": "dgfeet",
    "title": "Tänzerin von hinten und drei Studien von Füssen",
    "artist": "Edgar Degas",
    "year": "um 1878",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1945.6.1: https://www.nga.gov/collection/art-object-page.32137.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgfourth",
    "title": "Drei Studien einer Tänzerin in vierter Position",
    "artist": "Edgar Degas",
    "year": "1879–1880",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1962.703: https://www.artic.edu/artworks/14970, CC0 (gemeinfrei)"
  },
  {
    "id": "dgstarpastel",
    "title": "Der Stern",
    "artist": "Edgar Degas",
    "year": "1879–1881",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1980.414: https://www.artic.edu/artworks/60656, CC0 (gemeinfrei)"
  },
  {
    "id": "dgresting",
    "title": "Drei ruhende Tänzerinnen",
    "artist": "Edgar Degas",
    "year": "um 1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.87: https://www.nga.gov/collection/art-object-page.66488.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgballet80",
    "title": "Das Ballett",
    "artist": "Edgar Degas",
    "year": "um 1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.136.174: https://www.nga.gov/collection/art-object-page.165301.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgbackstage",
    "title": "Tänzerinnen hinter der Bühne",
    "artist": "Edgar Degas",
    "year": "1876–1883",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1970.17.25: https://www.nga.gov/collection/art-object-page.52169.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgbourse",
    "title": "Bildnisse an der Börse",
    "artist": "Edgar Degas",
    "year": "um 1878–1879",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1991.277.1: https://www.metmuseum.org/art/collection/search/436154, CC0 (gemeinfrei)"
  },
  {
    "id": "dgcostume",
    "title": "Bildnis nach einem Kostümball (Madame Dietz-Monnin)",
    "artist": "Edgar Degas",
    "year": "1879",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1954.325: https://www.artic.edu/artworks/80604, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdietznga",
    "title": "Madame Dietz-Monnin",
    "artist": "Edgar Degas",
    "year": "1879",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1951.2.1: https://www.nga.gov/collection/art-object-page.39742.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgtwowomen",
    "title": "Zwei Frauen",
    "artist": "Edgar Degas",
    "year": "um 1878–1880",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.136.176: https://www.nga.gov/collection/art-object-page.168819.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgmuseum",
    "title": "Frau von hinten (Besuch im Museum)",
    "artist": "Edgar Degas",
    "year": "um 1879–1885",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1985.64.11: https://www.nga.gov/collection/art-object-page.66409.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgloge",
    "title": "Die Loge",
    "artist": "Edgar Degas",
    "year": "um 1883",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1980.5.1: https://www.nga.gov/collection/art-object-page.57514.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgmillshop",
    "title": "Das Hutgeschäft",
    "artist": "Edgar Degas",
    "year": "1879–1886",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1933.428: https://www.artic.edu/artworks/14572, CC0 (gemeinfrei)"
  },
  {
    "id": "dgmilliner81",
    "title": "Bei der Modistin",
    "artist": "Edgar Degas",
    "year": "1881",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1997.391.1: https://www.metmuseum.org/art/collection/search/437993, CC0 (gemeinfrei)"
  },
  {
    "id": "dgmilliner82",
    "title": "Bei der Modistin",
    "artist": "Edgar Degas",
    "year": "1882",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.38: https://www.metmuseum.org/art/collection/search/436126, CC0 (gemeinfrei)"
  },
  {
    "id": "dgmilliner",
    "title": "Die Modistin",
    "artist": "Edgar Degas",
    "year": "um 1882",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 22.27.3: https://www.metmuseum.org/art/collection/search/436151, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdancergrn",
    "title": "Tänzerin in Grün",
    "artist": "Edgar Degas",
    "year": "um 1883",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1976.201.7: https://www.metmuseum.org/art/collection/search/334344, CC0 (gemeinfrei)"
  },
  {
    "id": "dgharlequin",
    "title": "Harlekin",
    "artist": "Edgar Degas",
    "year": "1885",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1962.74: https://www.artic.edu/artworks/88370, CC0 (gemeinfrei)"
  },
  {
    "id": "dgyoungwoman",
    "title": "Bildnis einer jungen Frau",
    "artist": "Edgar Degas",
    "year": "um 1885",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.183: https://www.metmuseum.org/art/collection/search/436153, CC0 (gemeinfrei)"
  },
  {
    "id": "dglepic",
    "title": "Ludovic Lepic mit seinem Hund",
    "artist": "Edgar Degas",
    "year": "1889",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1988.93: https://clevelandart.org/art/1988.93, CC0 (gemeinfrei)"
  },
  {
    "id": "dgriders",
    "title": "Die Reiter",
    "artist": "Edgar Degas",
    "year": "um 1885",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 2014.18.7: https://www.nga.gov/collection/art-object-page.164915.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgracewood",
    "title": "Rennpferde",
    "artist": "Edgar Degas",
    "year": "um 1885–1888",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1999.288.3: https://www.metmuseum.org/art/collection/search/437994, CC0 (gemeinfrei)"
  },
  {
    "id": "dgbeforerace",
    "title": "Vor dem Rennen",
    "artist": "Edgar Degas",
    "year": "um 1887–1889",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1958.27: https://clevelandart.org/art/1958.27, CC0 (gemeinfrei)"
  },
  {
    "id": "dgjockey98",
    "title": "Jockey",
    "artist": "Edgar Degas",
    "year": "um 1898",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1959.12.10: https://www.nga.gov/collection/art-object-page.45976.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgthreejock",
    "title": "Drei Jockeys",
    "artist": "Edgar Degas",
    "year": "um 1900",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1992.103.1: https://www.metmuseum.org/art/collection/search/436164, CC0 (gemeinfrei)"
  },
  {
    "id": "dgsmokestack",
    "title": "Landschaft mit Schornsteinen",
    "artist": "Edgar Degas",
    "year": "um 1890",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1998.915: https://www.artic.edu/artworks/151507, CC0 (gemeinfrei)"
  },
  {
    "id": "dgploughed",
    "title": "Gepflügtes Feld zwischen Bäumen",
    "artist": "Edgar Degas",
    "year": "um 1892",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2013.922: https://www.artic.edu/artworks/185805, CC0 (gemeinfrei)"
  },
  {
    "id": "dglandscape",
    "title": "Landschaft",
    "artist": "Edgar Degas",
    "year": "1892",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 2013.923: https://www.artic.edu/artworks/185850, CC0 (gemeinfrei)"
  },
  {
    "id": "dgvalery",
    "title": "Blick auf Saint-Valéry-sur-Somme",
    "artist": "Edgar Degas",
    "year": "1896–1898",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1975.1.167: https://www.metmuseum.org/art/collection/search/459098, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdancer80",
    "title": "Tänzerin",
    "artist": "Edgar Degas",
    "year": "um 1880",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2001.202.2: https://www.metmuseum.org/art/collection/search/344210, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdancer85",
    "title": "Tänzerin",
    "artist": "Edgar Degas",
    "year": "1880–1885",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 2007.332.1: https://www.metmuseum.org/art/collection/search/438518, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdoublebass",
    "title": "Tänzerinnen im Probensaal mit Kontrabass",
    "artist": "Edgar Degas",
    "year": "um 1882–1885",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.127: https://www.metmuseum.org/art/collection/search/436138, CC0 (gemeinfrei)"
  },
  {
    "id": "dgpinkgreen",
    "title": "Tänzerinnen, Rosa und Grün",
    "artist": "Edgar Degas",
    "year": "um 1890",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.42: https://www.metmuseum.org/art/collection/search/436140, CC0 (gemeinfrei)"
  },
  {
    "id": "dgbeforeball",
    "title": "Vor dem Ballett",
    "artist": "Edgar Degas",
    "year": "1890–1892",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1942.9.19: https://www.nga.gov/collection/art-object-page.1158.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgfan90",
    "title": "Tänzerin mit Fächer",
    "artist": "Edgar Degas",
    "year": "um 1890–1895",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.557: https://www.metmuseum.org/art/collection/search/436136, CC0 (gemeinfrei)"
  },
  {
    "id": "dgtwodancers",
    "title": "Zwei Tänzerinnen",
    "artist": "Edgar Degas",
    "year": "um 1893–1898",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1942.458: https://www.artic.edu/artworks/45243, CC0 (gemeinfrei)"
  },
  {
    "id": "dgfrieze",
    "title": "Fries mit Tänzerinnen",
    "artist": "Edgar Degas",
    "year": "um 1895",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1946.83: https://clevelandart.org/art/1946.83, CC0 (gemeinfrei)"
  },
  {
    "id": "dgdancers96",
    "title": "Tänzerinnen",
    "artist": "Edgar Degas",
    "year": "um 1896",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1916.1043: https://clevelandart.org/art/1916.1043, CC0 (gemeinfrei)"
  },
  {
    "id": "bluedance",
    "title": "Blaue Tänzerinnen",
    "artist": "Edgar Degas",
    "year": "1898",
    "museum": "Puschkin-Museum, Moskau",
    "source": "Wikimedia Commons: «Edgar Degas - Blue Dancers (1898 Pushkin Museum).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "dgukraine",
    "title": "Tänzerin in ukrainischer Tracht",
    "artist": "Edgar Degas",
    "year": "1899",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 29.100.556: https://www.metmuseum.org/art/collection/search/436157, CC0 (gemeinfrei)"
  },
  {
    "id": "dgukraine2",
    "title": "Tänzerinnen in ukrainischer Tracht",
    "artist": "Edgar Degas",
    "year": "1899",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "Metropolitan Museum of Art, 1975.1.166: https://www.metmuseum.org/art/collection/search/459097, CC0 (gemeinfrei)"
  },
  {
    "id": "dgfourdanc",
    "title": "Vier Tänzerinnen",
    "artist": "Edgar Degas",
    "year": "um 1899",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.122: https://www.nga.gov/collection/art-object-page.46597.html, CC0 (gemeinfrei)"
  },
  {
    "id": "dgscene1907",
    "title": "Ballettszene",
    "artist": "Edgar Degas",
    "year": "um 1907",
    "museum": "National Gallery of Art, Washington",
    "source": "National Gallery of Art, Washington, 1963.10.16: https://www.nga.gov/collection/art-object-page.46491.html, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "degas",
  "name": "Edgar Degas",
  "title": "Edgar Degas’ Lebensweg",
  "life": "1834–1917",
  "part": "Von Paris auf die Bühne",
  "subtitle": "Bildnisse, Pferderennen, Tänzerinnen und Pastell",
  "cover": "dgdance74",
  "intro": "Reise mit Edgar Degas durch sein Leben: von den ersten Bildnissen seiner Familie in Paris über Italien und New Orleans bis zu den Rennbahnen, Cafés und Ballettsälen von Paris. Degas malt mit Öl, Pastell und Gouache und zeigt Menschen in Bewegung und bei der Arbeit. Die Bilder dieses Weges stammen aus Museen, die ihre Aufnahmen frei zur Verfügung stellen.",
  "ending": [
    "Edgar Degas stirbt am 27. September 1917 in Paris.",
    "Seine Tänzerinnen, Jockeys und Bildnisse hängen heute in Museen auf der ganzen Welt."
  ],
  "epilogue": "Edgar Degas stirbt am 27. September 1917 in Paris. Der Weg führt von den frühen Bildnissen über Italien und New Orleans zu den Rennbahnen, Cafés und Ballettsälen von Paris.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M10,30 C30,18 70,16 84,30 C90,44 76,56 66,64 C58,70 52,76 46,80 C36,84 24,78 18,66 C12,54 6,40 10,30 Z",
      "M150,22 C172,12 206,14 220,28 C228,42 222,58 214,70 C222,84 226,100 216,108 C206,104 200,92 194,84 C186,78 172,76 160,70 C150,62 146,48 150,22 Z"
    ]
  },
  "stations": [
    {
      "id": "dgs1",
      "place": "Paris: Familie und erste Bildnisse",
      "when": "1834–1857",
      "map": {
        "x": 176,
        "y": 40
      },
      "mapLabel": "Paris",
      "intro": [
        "Edgar Degas wird am 19. Juli 1834 in Paris geboren. Sein Vater ist Bankier.",
        "1855 beginnt er an der Ecole des Beaux-Arts in Paris. Seine ersten Modelle sind er selbst und seine Brüder."
      ],
      "works": [
        {
          "pid": "dgrenedegas",
          "text": [
            "Ein Junge in dunkler Jacke und weissem Kragen schaut ernst aus dem Bild. Es ist René, Degas’ jüngerer Bruder.",
            "Der Hintergrund ist ruhig und grün, so bleibt der Blick ganz beim Gesicht."
          ],
          "fact": "1855. National Gallery of Art, Washington."
        },
        {
          "pid": "dgachille",
          "text": [
            "Achille, ein weiterer Bruder, steht in dunkler Uniform mit goldenen Knöpfen und Kordeln vor einer roten Wand.",
            "Die Mütze sitzt gerade, die Haltung ist aufrecht wie bei einem jungen Offizier."
          ],
          "fact": "1856–1857. National Gallery of Art, Washington."
        },
        {
          "pid": "dgselfmet",
          "text": [
            "Der junge Degas schaut uns mit grossen dunklen Augen an. Er trägt eine helle Jacke und ein dunkles Halstuch.",
            "Er malt dieses Bild mit Öl auf Papier, das später auf Leinwand geklebt wurde."
          ],
          "fact": "um 1855–1856. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgselfcollar",
          "text": [
            "Ganz nah sehen wir das Gesicht des Malers mit dunklem Haar und einem ersten Bart.",
            "Warme Brauntöne umgeben ihn, nur der weisse Kragen leuchtet hell."
          ],
          "fact": "um 1857. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "dgs2",
      "place": "Italien",
      "when": "1856–1859",
      "map": {
        "x": 202,
        "y": 92
      },
      "mapLabel": "Italien",
      "intro": [
        "1856 reist Degas nach Italien. Er lebt bis 1859 vor allem in Neapel, Rom und Florenz.",
        "Er zeichnet nach alten Meistern und malt Menschen, die ihm auf der Strasse begegnen."
      ],
      "works": [
        {
          "pid": "dgolditalian",
          "text": [
            "Eine alte Frau sitzt mit gefalteten Händen da. Ein gelbes Tuch liegt über ihrem Kopf und den Schultern.",
            "Hinter ihr öffnet sich der Blick auf Häuser unter einem hellen Himmel."
          ],
          "fact": "1857. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgitalianwc",
          "text": [
            "Eine junge Frau in roter Jacke, weisser Schürze und Haube trägt einen Krug auf der Schulter.",
            "Degas zeichnet sie mit Bleistift und gibt ihr mit Wasserfarbe leuchtende Farben."
          ],
          "fact": "um 1856–1857. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgibis",
          "text": [
            "Eine junge Frau in einem grünen Tuch sitzt vor einer Stadt im Abendlicht. Neben ihr stehen leuchtend rote Ibisse.",
            "Degas beginnt das Bild in Italien und arbeitet einige Jahre später noch einmal daran."
          ],
          "fact": "1857–1862. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dgs3",
      "place": "Paris: Geschwister und Bekannte",
      "when": "1861–1866",
      "map": {
        "x": 182,
        "y": 44
      },
      "mapLabel": "Paris",
      "intro": [
        "Zurück in Paris malt Degas Menschen aus seiner Familie und seinem Umfeld.",
        "Seine Schwester Thérèse heiratet 1863 ihren Cousin Edmondo Morbilli aus Neapel."
      ],
      "works": [
        {
          "pid": "dgmorbilli",
          "text": [
            "Degas’ Schwester Thérèse sitzt in einem weiten grauen Kleid mit rotem Tuch, hinter ihr ihr Mann Edmondo.",
            "Der Raum ist dunkel, die beiden wirken still und nachdenklich."
          ],
          "fact": "um 1865. National Gallery of Art, Washington."
        },
        {
          "pid": "dgyoungblack",
          "text": [
            "Eine junge Frau in einem schwarzen Kleid sitzt mit verschränkten Händen auf einem Stuhl.",
            "Der Hintergrund bleibt hell und unfertig, so tritt das dunkle Kleid stark hervor."
          ],
          "fact": "1861–1865. National Gallery of Art, Washington."
        },
        {
          "pid": "dggirlred",
          "text": [
            "Ein Mädchen steht in einem weiten roten Umhang mit Pelzrand vor einem dunklen Hintergrund.",
            "Das kräftige Rot füllt fast das ganze Bild."
          ],
          "fact": "um 1866. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "dgs4",
      "place": "Pferde und Jockeys",
      "when": "1861–1872",
      "map": {
        "x": 170,
        "y": 36
      },
      "mapLabel": "Normandie",
      "intro": [
        "1861 besucht Degas Freunde in der Normandie, eine Gegend mit vielen Pferden. Von da an malt er immer wieder Jockeys und Rennen.",
        "Er beobachtet die Pferde vor dem Start, wenn Reiter und Tiere unruhig warten."
      ],
      "works": [
        {
          "pid": "dgjockeys4",
          "text": [
            "Viermal sitzt derselbe Jockey auf einem Pferd, das man nur ahnt: jedes Mal aus einem anderen Blickwinkel.",
            "Degas malt mit Pinsel, schwarzer Tusche, Öl und weisser Farbe auf braunem Papier."
          ],
          "fact": "1866. Art Institute of Chicago."
        },
        {
          "pid": "dghorsesmead",
          "text": [
            "Zwei Pferde, ein braunes und ein weisses, stehen auf einer grünen Wiese unter hellem Himmel.",
            "Im Hintergrund ziehen sich Felder und Hügel bis zum Horizont."
          ],
          "fact": "1871. National Gallery of Art, Washington."
        },
        {
          "pid": "dgraces",
          "text": [
            "Kleine Jockeys in bunten Jacken reiten über eine weite grüne Rennbahn.",
            "Am Horizont steigt Rauch auf, und dunkle Wolken ziehen über den Himmel."
          ],
          "fact": "1871–1872. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "dgs5",
      "place": "Bildnisse in Paris",
      "when": "1865–1870",
      "map": {
        "x": 176,
        "y": 50
      },
      "mapLabel": "Paris",
      "intro": [
        "Ab 1865 zeigt Degas seine Bilder im Salon, der grossen Ausstellung in Paris.",
        "Er malt Freunde, Künstler und Musiker, oft in ihren eigenen Räumen und mit Dingen, die zu ihnen gehören."
      ],
      "works": [
        {
          "pid": "dgvaseflower",
          "text": [
            "Ein riesiger Strauss aus Herbstblumen füllt die Mitte des Bildes. Die Frau sitzt ganz am Rand und schaut zur Seite.",
            "Wer sie ist, ist nicht sicher. Vielleicht ist es die Frau seines Freundes Paul Valpinçon."
          ],
          "fact": "1865. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgwomangray",
          "text": [
            "Eine Frau in einem hellgrauen Kleid mit schwarzem Schal und Hut sitzt vor einer warmen braunen Wand.",
            "Sie hält die Arme vor dem Körper und blickt uns aufmerksam an."
          ],
          "fact": "um 1865. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgcollector",
          "text": [
            "Ein Mann mit Zylinder sitzt an einem Tisch voller Blätter und Mappen.",
            "An der Wand dahinter hängen Bilder und Karten dicht nebeneinander."
          ],
          "fact": "1866. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgtwomen",
          "text": [
            "Zwei Männer in dunklen Anzügen stehen nebeneinander in einem Raum mit Bildern an der Wand.",
            "Degas malt sie auf einer kleinen Holztafel."
          ],
          "fact": "um 1865–1869. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dglisleloub",
          "text": [
            "Zwei Frauen in dunklen Kleidern sitzen in einem warmen Raum, die eine lehnt sich zurück, die andere stützt den Kopf auf.",
            "Die dunklen Kleider heben sich kaum vom warmen Hintergrund ab."
          ],
          "fact": "um 1867. Art Institute of Chicago."
        },
        {
          "pid": "dglisle",
          "text": [
            "Eine Frau mit einer roten Blume im Haar schaut nach unten. Degas zeichnet sie mit Kohle und Pastell.",
            "Die gleiche Frau sitzt auch auf dem Doppelbildnis davor."
          ],
          "fact": "um 1866–1870. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgtissot",
          "text": [
            "Der Maler James Tissot, ein Freund von Degas, sitzt elegant in einem Atelier voller Bilder.",
            "Neben ihm liegen Hut und Mantel, als wäre er nur kurz zu Besuch."
          ],
          "fact": "um 1867–1868. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgdihau",
          "text": [
            "Marie Dihau, eine Musikerin, sitzt mit Hut und Reisetasche an einem Tisch und dreht sich zu uns um.",
            "Es sieht aus, als sei sie gerade angekommen oder wolle gleich gehen."
          ],
          "fact": "1867–1868. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgloubens",
          "text": [
            "Eine Frau mit hochgestecktem Haar und rotem Haarschmuck schaut uns direkt an.",
            "Degas zeichnet sie mit Kohle und Pastell, nur wenige Farben setzen Akzente."
          ],
          "fact": "um 1869. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dgs6",
      "place": "Musik und Oper",
      "when": "1868–1871",
      "map": {
        "x": 186,
        "y": 40
      },
      "mapLabel": "Oper",
      "intro": [
        "Degas liebt die Musik. Er malt Musiker aus dem Orchester der Pariser Oper und Menschen aus der Welt der Musik.",
        "In der Oper sieht er auch die Ballettszenen, die später sein grosses Thema werden."
      ],
      "works": [
        {
          "pid": "dgaltes",
          "text": [
            "Ein Mann mit dichtem dunklem Bart schaut nach rechts. Es ist der Flötist Joseph-Henri Altès.",
            "Das kleine Bild zeigt nur Kopf und Schultern vor einem ruhigen Hintergrund."
          ],
          "fact": "1868. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgspanish",
          "text": [
            "Das Bild hat die Form eines Fächers. Darauf tanzen und musizieren kleine Figuren in einer Landschaft.",
            "Degas malt es mit Wasserfarbe, Feder und schwarzer Tinte."
          ],
          "fact": "1868–1869. National Gallery of Art, Washington."
        },
        {
          "pid": "dgcamus",
          "text": [
            "Eine Frau mit dunklem Haar sitzt im Profil in einem Raum, der ganz in rotes Licht getaucht ist.",
            "In der Hand hält sie einen Fächer."
          ],
          "fact": "1869–1870. National Gallery of Art, Washington."
        },
        {
          "pid": "dgrobert",
          "text": [
            "Vorne sitzen Zuschauer und Musiker im Dunkeln. Dahinter tanzen helle Gestalten auf der Bühne in einem Gewölbe.",
            "Die Szene stammt aus der Oper «Robert le Diable» von Giacomo Meyerbeer."
          ],
          "fact": "1871. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dgs7",
      "place": "Am Meer und zu Hause",
      "when": "1869–1870",
      "map": {
        "x": 164,
        "y": 34
      },
      "mapLabel": "Küste",
      "intro": [
        "Im Sommer 1869 zeichnet Degas am Meer kleine Landschaften in Pastell.",
        "Im selben Jahr malt er Yves Gobillard, eine Schwester der Malerin Berthe Morisot."
      ],
      "works": [
        {
          "pid": "dglowtide",
          "text": [
            "Ein breiter heller Strand, ein Streifen blaues Wasser und ein weiter Himmel: mehr braucht das kleine Bild nicht.",
            "Degas zeichnet es mit Pastell auf hellbraunem Papier."
          ],
          "fact": "1869. Art Institute of Chicago."
        },
        {
          "pid": "dggobillard",
          "text": [
            "Yves Gobillard sitzt in einem dunklen Kleid auf einem Sofa. Durch eine Tür sieht man in einen hellen Garten.",
            "Sie ist eine Schwester der Malerin Berthe Morisot."
          ],
          "fact": "1869. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dggobpastel",
          "text": [
            "Hier zeigt Degas nur Kopf und Schultern von Yves Gobillard, im Profil vor einem hellen Grund.",
            "Das Pastell entsteht im selben Jahr wie das grosse Ölbild."
          ],
          "fact": "1869. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgsulking",
          "text": [
            "Ein Mann sitzt an einem Schreibtisch, eine Frau lehnt sich über die Stuhllehne zu ihm.",
            "Beide schweigen. Was zwischen ihnen geschehen ist, verrät das Bild nicht."
          ],
          "fact": "um 1870. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dgs8",
      "place": "New Orleans",
      "when": "1872–1873",
      "map": {
        "x": 48,
        "y": 72
      },
      "mapLabel": "New Orleans",
      "intro": [
        "Im Herbst 1872 reist Degas nach New Orleans. Seine Mutter stammte von dort, und seine Brüder René und Achille leben dort.",
        "Bis zum Frühjahr 1873 malt er seine amerikanischen Verwandten."
      ],
      "works": [
        {
          "pid": "dgrenewife",
          "text": [
            "Estelle, die Frau seines Bruders René und zugleich seine Cousine, sitzt in einem weiten hellen Kleid auf einem Sofa.",
            "Ihr Blick geht ins Leere. Degas malt sie in New Orleans."
          ],
          "fact": "1872–1873. National Gallery of Art, Washington."
        },
        {
          "pid": "dgbell",
          "text": [
            "Eine junge Frau mit einem hellen Tuch um den Kopf schaut uns freundlich an. Daneben erscheint leicht ein zweites Gesicht.",
            "Das Pastell entsteht 1873 in New Orleans. Das grüne Papier ist mit der Zeit braun geworden."
          ],
          "fact": "1873. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "degas1",
      "place": "Die Tanzklasse",
      "when": "1870–1876",
      "map": {
        "x": 184,
        "y": 48
      },
      "mapLabel": "Ballett",
      "intro": [
        "Um 1870 beginnt Degas, die Tänzerinnen der Pariser Oper zu malen.",
        "Er zeigt nicht nur Auftritte, sondern vor allem Proben und Unterricht, mit Ballettmeistern, Müttern und wartenden Mädchen."
      ],
      "works": [
        {
          "pid": "dgdancing70",
          "text": [
            "In einem hohen Saal üben Tänzerinnen in weissen Röcken. Vorn sitzt ein Geiger auf einem Stuhl.",
            "Das Bild ist eines der ersten Ballettbilder von Degas und nur etwa 20 Zentimeter hoch."
          ],
          "fact": "um 1870. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgdance73",
          "text": [
            "Ein Klavier steht vorn links. Dahinter warten und üben Mädchen in weissen Tutus mit farbigen Schleifen.",
            "Ein langer Saal mit Fenstern zieht den Blick in die Tiefe."
          ],
          "fact": "um 1873. National Gallery of Art, Washington."
        },
        {
          "pid": "dgdance74",
          "text": [
            "In einem grünen Saal hört eine Gruppe von Tänzerinnen einem alten Ballettmeister mit Stock zu.",
            "Manche Mädchen hören aufmerksam zu, andere kratzen sich, gähnen oder richten ihre Kleider."
          ],
          "fact": "1874. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "degas",
          "text": [
            "Dieses Bild zeigt fast denselben Saal wie das Bild davor, nur grösser und mit mehr Mädchen.",
            "Auch hier steht der Ballettmeister mit seinem Stock in der Mitte der Tänzerinnen."
          ],
          "fact": "1873–1876. Musée d’Orsay, Paris."
        },
        {
          "pid": "dgrehearsal",
          "text": [
            "Auf einer grossen Bühne proben Tänzerinnen. Rechts sitzen Männer und schauen zu.",
            "Degas malt fast nur in Braun- und Grautönen, mit verdünnter Ölfarbe."
          ],
          "fact": "um 1874. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgrehpastel",
          "text": [
            "Dieselbe Probe noch einmal, jetzt mit Pastell und hellen Farben.",
            "Die Tänzerinnen stehen im Licht, die Zuschauer bleiben im Schatten der Kulissen."
          ],
          "fact": "um 1874. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dgs10",
      "place": "Die Jahre der Impressionisten",
      "when": "1873–1880",
      "map": {
        "x": 174,
        "y": 46
      },
      "mapLabel": "Paris",
      "intro": [
        "1874 stellt Degas mit Monet, Renoir und anderen in der ersten Ausstellung der Impressionisten in Paris aus.",
        "Bis 1886 nimmt er an sieben der acht Ausstellungen teil. Er malt Wäscherinnen, Tänzerinnen und Menschen aus seinem Umfeld."
      ],
      "works": [
        {
          "pid": "dgironing",
          "text": [
            "Eine Frau drückt das Bügeleisen fest auf ein Hemd. Hinter ihr hängt helle Wäsche zum Trocknen.",
            "Sie steht dunkel vor dem hellen Fenster, fast wie ein Schattenriss."
          ],
          "fact": "1873. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgyellow",
          "text": [
            "Tänzerinnen in leuchtend gelben Röcken warten zwischen den Kulissen auf ihren Auftritt.",
            "Die bemalten Kulissen sehen aus wie ein Wald."
          ],
          "fact": "1874–1876. Art Institute of Chicago."
        },
        {
          "pid": "dgsofa",
          "text": [
            "Eine Frau in einem blauen Kleid sitzt breit auf einem Sofa und streckt einen Arm aus.",
            "Degas malt mit stark verdünnter Ölfarbe und etwas Pastell. Der Hintergrund bleibt fast leer."
          ],
          "fact": "1875. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dghandmouth",
          "text": [
            "Eine junge Frau mit rötlichem Haar hält die Hand vor den Mund und schaut nachdenklich.",
            "Die schnellen Pinselstriche lassen das Bild wie eine Skizze wirken."
          ],
          "fact": "um 1875. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dghenrilucie",
          "text": [
            "Degas’ Onkel Henri sitzt mit einer Zeitung im Sessel. Hinter ihm stützt sich seine Nichte Lucie auf die Lehne.",
            "Beide tragen Schwarz und schauen in verschiedene Richtungen."
          ],
          "fact": "1875–1876. Art Institute of Chicago."
        },
        {
          "pid": "dgcarafa",
          "text": [
            "Eine Frau in schwarzem Kleid sitzt vor einem dunkelroten Grund.",
            "Ihr Gesicht ist ruhig und ernst."
          ],
          "fact": "um 1875. Cleveland Museum of Art."
        },
        {
          "pid": "dgironing2",
          "text": [
            "Wieder eine Büglerin, diesmal im hellen Licht. Sie beugt sich mit beiden Händen über das Bügelbrett.",
            "Degas beginnt das Bild um 1876 und vollendet es erst um 1887."
          ],
          "fact": "um 1876–1887. National Gallery of Art, Washington."
        },
        {
          "pid": "dgmalot",
          "text": [
            "Eine junge Frau in dunklem Kleid sitzt vor einem Strauss gelber und weisser Blumen.",
            "Sie schaut uns ruhig an, die Hände im Schoss."
          ],
          "fact": "um 1877. National Gallery of Art, Washington."
        },
        {
          "pid": "dglafond",
          "text": [
            "Zwei Männer mit Hut beugen sich nah an ein Bild, das auf einer Staffelei steht.",
            "Wir sehen das Bild nicht, nur die beiden Betrachter."
          ],
          "fact": "um 1878–1880. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "dgs11",
      "place": "Café-Concert",
      "when": "1876–1884",
      "map": {
        "x": 170,
        "y": 52
      },
      "mapLabel": "Champs-Elysées",
      "intro": [
        "In den Cafés an den Champs-Elysées singen Sängerinnen am Abend unter Lampen, oft im Freien.",
        "Ab etwa 1876 arbeitet Degas mit der Monotypie: Er malt auf eine Platte, druckt ein einziges Blatt und malt danach oft mit Pastell darüber."
      ],
      "works": [
        {
          "pid": "dgspectator",
          "text": [
            "Wir blicken über ein Café-Konzert voller Menschen an kleinen Tischen.",
            "Das Bild beginnt als Monotypie, dann malt Degas mit Pastell darüber."
          ],
          "fact": "1876–1877. Art Institute of Chicago."
        },
        {
          "pid": "dgcafeconc",
          "text": [
            "Viele Menschen drängen sich in einem Café-Konzert, das Bild ist voller Farben und Bewegung.",
            "Degas malt mit Pastell über eine Monotypie."
          ],
          "fact": "1876–1877. National Gallery of Art, Washington."
        },
        {
          "pid": "dgsingers",
          "text": [
            "Eine Sängerin in rosa Kleid steht vorn auf der Bühne, hinter ihr warten weitere Frauen.",
            "Das Licht der Lampen lässt die Kleider hell aufleuchten."
          ],
          "fact": "1877–1879. Art Institute of Chicago."
        },
        {
          "pid": "dgcafesinger",
          "text": [
            "Eine Sängerin in schwarzem Handschuh reisst den Arm hoch und singt mit offenem Mund.",
            "Ihr Gesicht leuchtet im Licht von unten, der Hintergrund bleibt dunkel."
          ],
          "fact": "1879. Art Institute of Chicago."
        },
        {
          "pid": "dgsingergrn",
          "text": [
            "Eine junge Sängerin in grün gestreiftem Kleid hebt die Hand an die Schulter.",
            "Degas zeichnet sie mit kräftigem Pastell auf hellblauem Papier."
          ],
          "fact": "um 1884. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dgs12",
      "place": "Auf der Bühne",
      "when": "1876–1880",
      "map": {
        "x": 188,
        "y": 46
      },
      "mapLabel": "Bühne",
      "intro": [
        "Die alte Oper an der Rue Le Peletier brennt 1873 ab. 1875 wird die neue Oper von Charles Garnier eröffnet.",
        "Degas zeigt die Tänzerinnen im hellen Bühnenlicht, oft von oben gesehen."
      ],
      "works": [
        {
          "pid": "dgonstage",
          "text": [
            "Eine Tänzerin in hellem Kostüm steht im Licht, hinter ihr leuchten grüne Kulissen.",
            "Wir sehen sie schräg von oben, als sässen wir in einer Loge."
          ],
          "fact": "1876–1877. Art Institute of Chicago."
        },
        {
          "pid": "dgopera77",
          "text": [
            "Vorn ragen die Hälse der Kontrabässe aus dem Orchestergraben. Dahinter tanzt eine Reihe von Ballerinen.",
            "Das breite Bild ist ein Pastell über einer Monotypie."
          ],
          "fact": "1877. Art Institute of Chicago."
        },
        {
          "pid": "dgoldopera",
          "text": [
            "Tänzerinnen stehen auf einer langen, schräg ins Bild laufenden Bühne. Dahinter sieht man Logen mit rotem Samt.",
            "Degas malt mit Pastell über eine Monotypie."
          ],
          "fact": "um 1877. National Gallery of Art, Washington."
        },
        {
          "pid": "dgballetdanc",
          "text": [
            "Zwei Tänzerinnen in orange und grünen Kostümen stehen unter einem gemalten Baum.",
            "Degas malt mit Pastell und Gouache über eine Monotypie."
          ],
          "fact": "um 1877. National Gallery of Art, Washington."
        },
        {
          "pid": "dgdanceronst",
          "text": [
            "Eine Tänzerin springt mit ausgebreiteten Armen über die Bühne, hinter ihr warten andere.",
            "Degas malt mit Gouache, einer deckenden Wasserfarbe."
          ],
          "fact": "um 1877. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "etoile",
          "text": [
            "Eine Solotänzerin schwebt im hellen Licht über die Bühne, das Bild ist von oben gesehen.",
            "Hinter den Kulissen steht ein Mann im schwarzen Anzug und schaut zu."
          ],
          "fact": "um 1876–1877. Musée d’Orsay, Paris."
        },
        {
          "pid": "dgcurtain",
          "text": [
            "Der Vorhang geht gerade hoch oder herunter: Wir sehen nur noch die Füsse und Beine der Tänzerinnen.",
            "Davor stehen Männer in schwarzen Anzügen mit Zylinder."
          ],
          "fact": "um 1880. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "dgs13",
      "place": "Die Tanzstunde",
      "when": "1877–1880",
      "map": {
        "x": 180,
        "y": 54
      },
      "mapLabel": "Probe",
      "intro": [
        "Degas besucht Proben und Unterrichtsstunden. In seinem Atelier lässt er junge Tänzerinnen Modell stehen.",
        "Für grosse Bilder zeichnet er zuerst einzelne Figuren, auch den Geiger, der die Musik zur Stunde spielt."
      ],
      "works": [
        {
          "pid": "dgthreeprep",
          "text": [
            "Drei Tänzerinnen richten ihre Röcke und Schuhe, bevor die Stunde beginnt.",
            "Ihre weissen Tutus und blauen Schleifen füllen das ganze Blatt."
          ],
          "fact": "nach 1878. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgstretch",
          "text": [
            "Eine Tänzerin legt ein Bein hoch auf die Stange und dehnt sich.",
            "Ihr Rock und ihre Arme bilden helle Linien vor der gelben Wand."
          ],
          "fact": "1877–1880. Art Institute of Chicago."
        },
        {
          "pid": "dgviolinist",
          "text": [
            "Ein Geiger sitzt nach vorn gebeugt und spielt. Das Blatt ist mit Linien in Quadrate eingeteilt.",
            "So kann Degas die Figur genau in ein grösseres Bild übertragen."
          ],
          "fact": "um 1878–1879. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dglessonpast",
          "text": [
            "Hier ist der Geiger wieder: Er sitzt rechts und spielt, während eine Tänzerin vor ihm übt.",
            "Das breite Pastell ist aus drei Stücken Papier zusammengesetzt."
          ],
          "fact": "um 1879. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dglessonoil",
          "text": [
            "In einem langen Saal warten vorn Tänzerinnen in blauen und orangen Schleifen, hinten üben andere.",
            "Das Bild ist sehr breit und flach, wie ein Blick durch den ganzen Raum."
          ],
          "fact": "um 1879. National Gallery of Art, Washington."
        },
        {
          "pid": "dgfan80",
          "text": [
            "Eine Tänzerin steht ruhig da und hält einen Fächer vor die Brust.",
            "Degas zeichnet sie mit Pastell auf grau-grünem Papier."
          ],
          "fact": "um 1880. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dgs14",
      "place": "Hinter den Kulissen",
      "when": "1876–1883",
      "map": {
        "x": 190,
        "y": 40
      },
      "mapLabel": "Kulissen",
      "intro": [
        "Degas zeichnet die Tänzerinnen auch in Pausen, beim Warten und hinter der Bühne.",
        "1881 zeigt er in der Ausstellung der Impressionisten seine Figur der kleinen vierzehnjährigen Tänzerin aus Wachs."
      ],
      "works": [
        {
          "pid": "dgfeet",
          "text": [
            "Links steht eine Tänzerin mit dem Rücken zu uns, rechts zeichnet Degas dreimal ihre Füsse in Ballettschuhen.",
            "Das blaugraue Papier gibt dem Blatt einen kühlen Ton."
          ],
          "fact": "um 1878. National Gallery of Art, Washington."
        },
        {
          "pid": "dgfourth",
          "text": [
            "Dreimal steht dieselbe Tänzerin in der vierten Position, einem Grundschritt des Balletts.",
            "Degas zeigt sie von vorn, von der Seite und von hinten."
          ],
          "fact": "1879–1880. Art Institute of Chicago."
        },
        {
          "pid": "dgstarpastel",
          "text": [
            "Eine Tänzerin in rosa und weissem Kostüm steht vorn, hinter ihr leuchten blaue Tänzerinnen.",
            "Sie hält die Arme anmutig vor dem Körper."
          ],
          "fact": "1879–1881. Art Institute of Chicago."
        },
        {
          "pid": "dgresting",
          "text": [
            "Drei Tänzerinnen sitzen gebeugt da und ruhen sich aus. Eine hat ein blaues Band im Haar.",
            "Degas zeichnet mit schwarzer Kreide und Pastell auf hellbraunem Papier."
          ],
          "fact": "um 1880. National Gallery of Art, Washington."
        },
        {
          "pid": "dgballet80",
          "text": [
            "Eine Reihe von Tänzerinnen in weissen Röcken steht auf der Bühne, dahinter dunkle Gestalten.",
            "Links leuchten grüne Kulissen."
          ],
          "fact": "um 1880. National Gallery of Art, Washington."
        },
        {
          "pid": "dgbackstage",
          "text": [
            "Zwischen hohen grünen Kulissen wartet eine Tänzerin in rosa Kleid. Neben ihr steht ein Mann in Schwarz.",
            "Hinten sieht man eine zweite Tänzerin im Licht."
          ],
          "fact": "1876–1883. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "dgs15",
      "place": "Bildnisse und Begegnungen",
      "when": "1878–1885",
      "map": {
        "x": 168,
        "y": 44
      },
      "mapLabel": "Paris",
      "intro": [
        "Degas malt Menschen an Orten der Stadt: an der Börse, im Theater und im Museum.",
        "1879 arbeitet er an einem Bildnis von Madame Dietz-Monnin. Es entstehen mehrere Fassungen in Pastell und Farbe."
      ],
      "works": [
        {
          "pid": "dgbourse",
          "text": [
            "Männer mit Zylinder stecken die Köpfe zusammen und flüstern. Hinter ihnen ragen die Säulen der Pariser Börse auf.",
            "Degas malt sie mit Pastell in kühlen Blau- und Grautönen."
          ],
          "fact": "um 1878–1879. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgcostume",
          "text": [
            "Eine Frau mit Hut und Federboa sitzt da und streckt eine Hand aus.",
            "Degas mischt Leimfarbe, Metallfarbe und Pastell auf Leinwand."
          ],
          "fact": "1879. Art Institute of Chicago."
        },
        {
          "pid": "dgdietznga",
          "text": [
            "Hier sehen wir Madame Dietz-Monnin ganz nah: einen rosa Hut mit Feder und eine braune Pelzboa.",
            "Ihr Blick geht nachdenklich zur Seite."
          ],
          "fact": "1879. National Gallery of Art, Washington."
        },
        {
          "pid": "dgtwowomen",
          "text": [
            "Zwei Frauen in langen Kleidern stehen vor einer roten Wand mit blauen Vasen.",
            "Degas zeichnet mit Pastell über Wasserfarbe und Kohle."
          ],
          "fact": "um 1878–1880. National Gallery of Art, Washington."
        },
        {
          "pid": "dgmuseum",
          "text": [
            "Eine Frau in schwarzem Kleid und Hut steht mit dem Rücken zu uns in einem Museumssaal.",
            "Wir sehen nicht, welches Bild sie betrachtet."
          ],
          "fact": "um 1879–1885. National Gallery of Art, Washington."
        },
        {
          "pid": "dgloge",
          "text": [
            "Frauen sitzen in einer dunklen Theaterloge, eine hält einen Fächer.",
            "Degas malt das kleine Bild in Öl auf Holz."
          ],
          "fact": "um 1883. National Gallery of Art, Washington."
        }
      ]
    },
    {
      "id": "dgs16",
      "place": "Hüte, Masken und Freunde",
      "when": "1879–1889",
      "map": {
        "x": 178,
        "y": 36
      },
      "mapLabel": "Modistin",
      "intro": [
        "In den 1880er Jahren zeigt Degas Kundinnen und Modistinnen in Pariser Hutgeschäften.",
        "Er malt auch Tänzerinnen im Kostüm und Freunde wie den Künstler Ludovic Lepic mit seinem Hund."
      ],
      "works": [
        {
          "pid": "dgmillshop",
          "text": [
            "Eine Modistin prüft einen Hut. Vor ihr stehen weitere Hüte mit Bändern und Blumen auf Ständern.",
            "Degas arbeitet mehrere Jahre an diesem Bild."
          ],
          "fact": "1879–1886. Art Institute of Chicago."
        },
        {
          "pid": "dgmilliner81",
          "text": [
            "Eine Frau mit Handschuhen hebt die Hände zu ihrem Hut, vor ihr liegt ein gemusterter Stoff.",
            "Das Pastell ist aus fünf Stücken Papier zusammengesetzt."
          ],
          "fact": "1881. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgmilliner82",
          "text": [
            "Eine Kundin im dunklen Mantel betrachtet sich im Spiegel. Neben ihr steht eine Verkäuferin.",
            "Degas zeichnet auf einfachem grauem Packpapier."
          ],
          "fact": "1882. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgmilliner",
          "text": [
            "Zwei Frauen sitzen an einem Tisch, vor ihnen stehen Hüte.",
            "Das graue Papier ist mit der Zeit dunkler geworden."
          ],
          "fact": "um 1882. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgdancergrn",
          "text": [
            "Eine Tänzerin hebt einen Arm und ein Bein, als wolle sie gleich weiterdrehen.",
            "Ihr Kostüm schimmert in hellem Grün und Weiss."
          ],
          "fact": "um 1883. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgharlequin",
          "text": [
            "Ein Harlekin in buntem Rautenkostüm beugt sich auf der Bühne nach vorn.",
            "Grünes Gras und Büsche der Kulisse umgeben ihn."
          ],
          "fact": "1885. Art Institute of Chicago."
        },
        {
          "pid": "dgyoungwoman",
          "text": [
            "Eine junge Frau mit dunklem Haar schaut zur Seite. Ihre Bluse ist hell, der Hintergrund gemustert.",
            "Das kleine Bild wirkt wie ein schneller, vertrauter Blick."
          ],
          "fact": "um 1885. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dglepic",
          "text": [
            "Der Künstler Ludovic Lepic hält seinen kleinen Hund auf dem Arm. Beide schauen uns an.",
            "Degas zeichnet die beiden mit Pastell in warmen Farben."
          ],
          "fact": "1889. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "dgs17",
      "place": "Wieder auf der Rennbahn",
      "when": "1885–1900",
      "map": {
        "x": 160,
        "y": 40
      },
      "mapLabel": "Rennbahn",
      "intro": [
        "Auch später kehrt Degas immer wieder zu Pferden und Jockeys zurück.",
        "Er malt sie mit kräftigen Farben auf Holz, auf Leinwand und auf dünnem Pauspapier."
      ],
      "works": [
        {
          "pid": "dgriders",
          "text": [
            "Eine Gruppe von Reitern auf braunen Pferden sammelt sich auf einer grünen Wiese.",
            "Im Hintergrund stehen Bäume unter einem hellen Himmel."
          ],
          "fact": "um 1885. National Gallery of Art, Washington."
        },
        {
          "pid": "dgracewood",
          "text": [
            "Jockeys in farbigen Jacken reiten auf einer weiten Ebene. Am Horizont liegt ein Dorf.",
            "Degas zeichnet hier mit Pastell direkt auf Holz."
          ],
          "fact": "um 1885–1888. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgbeforerace",
          "text": [
            "Vier Jockeys in bunten Jacken warten mit ihren Pferden auf den Start.",
            "Die Pferde stehen unruhig auf dem grünen Gras."
          ],
          "fact": "um 1887–1889. Cleveland Museum of Art."
        },
        {
          "pid": "dgjockey98",
          "text": [
            "Ein einzelner Jockey sitzt aufrecht auf einem Pferd, gezeichnet mit wenigen kräftigen Linien.",
            "Blaue und braune Farbe sind wie mit Wasser verwischt."
          ],
          "fact": "um 1898. National Gallery of Art, Washington."
        },
        {
          "pid": "dgthreejock",
          "text": [
            "Drei Jockeys reiten dicht hintereinander. Ihre Jacken leuchten in kräftigen Farben.",
            "Degas zeichnet auf Pauspapier, das auf einen Karton geklebt ist."
          ],
          "fact": "um 1900. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dgs18",
      "place": "Landschaften",
      "when": "1890–1898",
      "map": {
        "x": 190,
        "y": 56
      },
      "mapLabel": "Burgund",
      "intro": [
        "1890 reist Degas mit dem Bildhauer Albert Bartholomé in einer Kutsche durch Burgund.",
        "1892 zeigt er bei dem Kunsthändler Durand-Ruel Landschaften, die er aus der Erinnerung in Monotypie und Pastell gestaltet."
      ],
      "works": [
        {
          "pid": "dgsmokestack",
          "text": [
            "Hinter grünen Feldern und Büschen stehen in der Ferne Häuser und Schornsteine.",
            "Ein blauer Fleck am Himmel könnte eine Rauchwolke sein."
          ],
          "fact": "um 1890. Art Institute of Chicago."
        },
        {
          "pid": "dgploughed",
          "text": [
            "Ein Feld in hellen Brauntönen steigt sanft an, oben stehen grüne Bäume.",
            "Degas beginnt mit einer farbigen Monotypie und arbeitet mit Pastell weiter."
          ],
          "fact": "um 1892. Art Institute of Chicago."
        },
        {
          "pid": "dglandscape",
          "text": [
            "Grüne Hügel wellen sich bis zum Horizont, ein heller Weg schlängelt sich hindurch.",
            "Die Landschaft wirkt wie ein Traum, nicht wie ein bestimmter Ort."
          ],
          "fact": "1892. Art Institute of Chicago."
        },
        {
          "pid": "dgvalery",
          "text": [
            "Dächer, Mauern und Gärten der kleinen Stadt an der Somme liegen dicht beieinander.",
            "Der Himmel und die Häuser leuchten in warmen Rosa- und Brauntönen."
          ],
          "fact": "1896–1898. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "dgs19",
      "place": "Farbige Tänzerinnen",
      "when": "1880–1898",
      "map": {
        "x": 184,
        "y": 42
      },
      "mapLabel": "Atelier",
      "intro": [
        "In den 1890er Jahren arbeitet Degas grösser und mit kräftigen Farben.",
        "Er paust Figuren auf dünnes Papier, um sie in neuen Bildern zu wiederholen und neu zu färben."
      ],
      "works": [
        {
          "pid": "dgdancer80",
          "text": [
            "Eine Tänzerin mit blauer Schleife steht vorn, hinter ihr warten zwei weitere.",
            "Degas zeichnet mit Pastell und Kohle auf blaugrauem Papier."
          ],
          "fact": "um 1880. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgdancer85",
          "text": [
            "Eine Tänzerin beugt sich nach vorn und greift nach ihrem Rock.",
            "Die hellen Farben wirken luftig wie der Stoff des Tutus."
          ],
          "fact": "1880–1885. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgdoublebass",
          "text": [
            "Vorn liegt ein Kontrabass auf dem Boden, am Rand üben Tänzerinnen.",
            "Der Saal ist lang und leer, nur an den Rändern ist Bewegung."
          ],
          "fact": "um 1882–1885. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgpinkgreen",
          "text": [
            "Tänzerinnen in grünen Röcken mit rosa Schleifen richten sich hinter einer Kulisse.",
            "Die Farben leuchten kräftig, fast wie Edelsteine."
          ],
          "fact": "um 1890. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgbeforeball",
          "text": [
            "In einem langen Probensaal dehnen sich Tänzerinnen auf dem Boden und an der Wand.",
            "Das Bild ist sehr breit, fast wie ein Fries."
          ],
          "fact": "1890–1892. National Gallery of Art, Washington."
        },
        {
          "pid": "dgfan90",
          "text": [
            "Eine Tänzerin steht mit dem Rücken zu uns und hält einen Fächer hoch.",
            "Kräftige Kohlelinien umgeben das gelbe Kostüm."
          ],
          "fact": "um 1890–1895. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgtwodancers",
          "text": [
            "Zwei Tänzerinnen in rosa und gelben Röcken stehen nebeneinander vor einer Kulisse.",
            "Degas zeichnet auf dünnem Pauspapier und verwischt das Pastell weich."
          ],
          "fact": "um 1893–1898. Art Institute of Chicago."
        },
        {
          "pid": "dgfrieze",
          "text": [
            "Vier Tänzerinnen sitzen nebeneinander und binden ihre Schuhe. Es könnte auch dieselbe Tänzerin viermal sein.",
            "Das Bild ist breit und niedrig wie ein Band."
          ],
          "fact": "um 1895. Cleveland Museum of Art."
        },
        {
          "pid": "dgdancers96",
          "text": [
            "Zwei Tänzerinnen in leuchtend gelben Röcken richten ihr Haar und ihre Schultern.",
            "Grüne Bäume der Kulisse rahmen sie ein."
          ],
          "fact": "um 1896. Cleveland Museum of Art."
        },
        {
          "pid": "bluedance",
          "text": [
            "Vier Tänzerinnen in blauen Kostümen drängen sich eng zusammen und richten ihre Träger.",
            "Das Blau leuchtet kräftig, Gesichter und Arme sind nur angedeutet."
          ],
          "fact": "1898. Puschkin-Museum, Moskau."
        }
      ]
    },
    {
      "id": "dgs20",
      "place": "Die letzten Jahre",
      "when": "1899–1917",
      "map": {
        "x": 180,
        "y": 46
      },
      "mapLabel": "Paris",
      "intro": [
        "1899 entstehen Pastelle von Tänzerinnen in ukrainischer Tracht. Degas’ Augen werden immer schwächer.",
        "1912 muss er seine Wohnung und sein Atelier verlassen. Danach arbeitet er kaum noch."
      ],
      "works": [
        {
          "pid": "dgukraine",
          "text": [
            "Eine Tänzerin mit Blumenkranz im Haar und roten Stiefeln tanzt schwungvoll.",
            "Degas zeichnet sie mit Pastell über Kohle auf Pauspapier."
          ],
          "fact": "1899. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgukraine2",
          "text": [
            "Drei Tänzerinnen mit bunten Blusen, Röcken und Stiefeln tanzen in einer grünen Landschaft.",
            "Ihre Arme heben sich zu den Kränzen im Haar."
          ],
          "fact": "1899. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "dgfourdanc",
          "text": [
            "Vier Tänzerinnen in roten und grünen Kostümen warten dicht beieinander in den Kulissen.",
            "Sie richten Haar und Träger, gleich geht es auf die Bühne."
          ],
          "fact": "um 1899. National Gallery of Art, Washington."
        },
        {
          "pid": "dgscene1907",
          "text": [
            "Tänzerinnen in rosa, blauen und grünen Röcken wirbeln über eine rötliche Bühne.",
            "Es ist eines der späten Pastelle von Degas, mit kräftigen, schnellen Strichen."
          ],
          "fact": "um 1907. National Gallery of Art, Washington."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
