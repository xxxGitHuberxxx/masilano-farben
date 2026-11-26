// v10.43 Frederic Edwin Church life journey (1826–1900). lazyIndex: works load on demand.
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// Museum Open-Access scans only (CC0 / public domain). Documented facts only; no quotations.
// No nudes, bathers or death-bed imagery.
(function () {
  var works = [
  {
    "id": "feironworks",
    "title": "Das Eisenwerk in Hudson, New York",
    "artist": "Frederic Edwin Church",
    "year": "1844–1845",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-44: https://collection.cooperhewitt.org/view/objects/asitem/id/23099, CC0 (gemeinfrei)"
  },
  {
    "id": "fecatskillmo",
    "title": "Die Catskill Mountains vom Dorf Catskill aus",
    "artist": "Frederic Edwin Church",
    "year": "1844–1846",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-333: https://collection.cooperhewitt.org/view/objects/asitem/id/22907, CC0 (gemeinfrei)"
  },
  {
    "id": "fecloudsvall",
    "title": "Wolken über dem Hudson-Tal",
    "artist": "Frederic Edwin Church",
    "year": "1844–1850",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-1354: https://collection.cooperhewitt.org/view/objects/asitem/id/22427, CC0 (gemeinfrei)"
  },
  {
    "id": "femossybould",
    "title": "Bemooster Felsblock, Catskill",
    "artist": "Frederic Edwin Church",
    "year": "1845",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-328-a: https://collection.cooperhewitt.org/view/objects/asitem/id/22897, CC0 (gemeinfrei)"
  },
  {
    "id": "festormmount",
    "title": "Sturm in den Bergen",
    "artist": "Frederic Edwin Church",
    "year": "1847",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1969.52: https://clevelandart.org/art/1969.52, CC0 (gemeinfrei)"
  },
  {
    "id": "feautumngree",
    "title": "Herbst in den Green Mountains, Vermont",
    "artist": "Frederic Edwin Church",
    "year": "1848",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-722: https://collection.cooperhewitt.org/view/objects/asitem/id/23522, CC0 (gemeinfrei)"
  },
  {
    "id": "feautumnland",
    "title": "Herbstlandschaft, Vermont",
    "artist": "Frederic Edwin Church",
    "year": "1848 oder 1849",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-665-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23427, CC0 (gemeinfrei)"
  },
  {
    "id": "febillowingc",
    "title": "Aufquellende Wolke bei Sonnenuntergang, Hartford",
    "artist": "Frederic Edwin Church",
    "year": "1850–1851",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-1367: https://collection.cooperhewitt.org/view/objects/asitem/id/22441, CC0 (gemeinfrei)"
  },
  {
    "id": "femountainsun",
    "title": "Berglandschaft bei Sonnenuntergang",
    "artist": "Frederic Edwin Church",
    "year": "1850–1856",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-417: https://collection.cooperhewitt.org/view/objects/asitem/id/23063, CC0 (gemeinfrei)"
  },
  {
    "id": "fesurfdesert",
    "title": "Brandung, Mount Desert Island",
    "artist": "Frederic Edwin Church",
    "year": "1850",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-798-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23639, CC0 (gemeinfrei)"
  },
  {
    "id": "fecoastdeser",
    "title": "Die Küste bei Mount Desert Island",
    "artist": "Frederic Edwin Church",
    "year": "1850–1851",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-645: https://collection.cooperhewitt.org/view/objects/asitem/id/23395, CC0 (gemeinfrei)"
  },
  {
    "id": "fedesertsutt",
    "title": "Mount Desert Island von Sutton Island aus",
    "artist": "Frederic Edwin Church",
    "year": "1850",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-646: https://collection.cooperhewitt.org/view/objects/asitem/id/23396, CC0 (gemeinfrei)"
  },
  {
    "id": "femountainst",
    "title": "Bergbach, Mount Desert Island",
    "artist": "Frederic Edwin Church",
    "year": "1850–1852",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-1320: https://collection.cooperhewitt.org/view/objects/asitem/id/22384, CC0 (gemeinfrei)"
  },
  {
    "id": "fecliffsgran",
    "title": "Klippen auf Grand Manan, Kanada",
    "artist": "Frederic Edwin Church",
    "year": "1851",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-658: https://collection.cooperhewitt.org/view/objects/asitem/id/23414, CC0 (gemeinfrei)"
  },
  {
    "id": "fecoastgrand",
    "title": "Küste von Grand Manan, Kanada",
    "artist": "Frederic Edwin Church",
    "year": "1851",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-649-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23399, CC0 (gemeinfrei)"
  },
  {
    "id": "fekatahdin52",
    "title": "Mount Katahdin, Maine",
    "artist": "Frederic Edwin Church",
    "year": "1852–1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-323-c: https://collection.cooperhewitt.org/view/objects/asitem/id/22890, CC0 (gemeinfrei)"
  },
  {
    "id": "fetwohouses",
    "title": "Zwei Häuser in Barranquilla, Kolumbien",
    "artist": "Frederic Edwin Church",
    "year": "1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-51: https://collection.cooperhewitt.org/view/objects/asitem/id/23195, CC0 (gemeinfrei)"
  },
  {
    "id": "fechurchbarr",
    "title": "Kirche in Barranquilla, Kolumbien",
    "artist": "Frederic Edwin Church",
    "year": "1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-52: https://collection.cooperhewitt.org/view/objects/asitem/id/23208, CC0 (gemeinfrei)"
  },
  {
    "id": "feburrobarra",
    "title": "Esel in Barranquilla, Kolumbien",
    "artist": "Frederic Edwin Church",
    "year": "1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-750-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23563, CC0 (gemeinfrei)"
  },
  {
    "id": "fejustiniano",
    "title": "Justiniano de la Rosa aus Barranquilla",
    "artist": "Frederic Edwin Church",
    "year": "1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-713: https://collection.cooperhewitt.org/view/objects/asitem/id/23506, CC0 (gemeinfrei)"
  },
  {
    "id": "femoonlight",
    "title": "Berge im Mondlicht, Kolumbien oder Ecuador",
    "artist": "Frederic Edwin Church",
    "year": "1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-337-b: https://collection.cooperhewitt.org/view/objects/asitem/id/22915, CC0 (gemeinfrei)"
  },
  {
    "id": "fetoptequend",
    "title": "Am Tequendama-Wasserfall bei Bogotá",
    "artist": "Frederic Edwin Church",
    "year": "1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-705: https://collection.cooperhewitt.org/view/objects/asitem/id/23493, CC0 (gemeinfrei)"
  },
  {
    "id": "fepitajayafr",
    "title": "Pitajaya-Frucht, Kolumbien",
    "artist": "Frederic Edwin Church",
    "year": "1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-71: https://collection.cooperhewitt.org/view/objects/asitem/id/23499, CC0 (gemeinfrei)"
  },
  {
    "id": "fellamachimb",
    "title": "Lama bei Chimborazo, Ecuador",
    "artist": "Frederic Edwin Church",
    "year": "1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-750-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23564, CC0 (gemeinfrei)"
  },
  {
    "id": "fecotopaxini",
    "title": "Der Cotopaxi bei Nacht",
    "artist": "Frederic Edwin Church",
    "year": "1853",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-1332-a: https://collection.cooperhewitt.org/view/objects/asitem/id/22399, CC0 (gemeinfrei)"
  },
  {
    "id": "fechurchdome",
    "title": "Kirchenkuppeln, Kolumbien oder Ecuador",
    "artist": "Frederic Edwin Church",
    "year": "1853 oder 1857",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-380: https://collection.cooperhewitt.org/view/objects/asitem/id/22995, CC0 (gemeinfrei)"
  },
  {
    "id": "fecotopaxi",
    "title": "Cotopaxi",
    "artist": "Frederic Edwin Church",
    "year": "1855",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1965.12: https://americanart.si.edu/collections/search/artwork/?id=4807, CC0 (gemeinfrei)"
  },
  {
    "id": "feniagarafal",
    "title": "Die Niagarafälle bei Nacht",
    "artist": "Frederic Edwin Church",
    "year": "1851–1858",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-766-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23594, CC0 (gemeinfrei)"
  },
  {
    "id": "feniagarafal2",
    "title": "Niagarafälle und Terrapin Tower im Winter",
    "artist": "Frederic Edwin Church",
    "year": "1856",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-765-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23590, CC0 (gemeinfrei)"
  },
  {
    "id": "fegorgeniaga",
    "title": "Die Schlucht des Niagara",
    "artist": "Frederic Edwin Church",
    "year": "um 1856",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-168: https://collection.cooperhewitt.org/view/objects/asitem/id/22658, CC0 (gemeinfrei)"
  },
  {
    "id": "febaseameric",
    "title": "Am Fuss der American Falls",
    "artist": "Frederic Edwin Church",
    "year": "1856–1858",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-326-a: https://collection.cooperhewitt.org/view/objects/asitem/id/22893, CC0 (gemeinfrei)"
  },
  {
    "id": "fecotopaxi2",
    "title": "Blick auf den Cotopaxi",
    "artist": "Frederic Edwin Church",
    "year": "1857",
    "museum": "Art Institute of Chicago",
    "source": "Art Institute of Chicago, 1919.753: https://www.artic.edu/artworks/76571, CC0 (gemeinfrei)"
  },
  {
    "id": "fepalmtrees",
    "title": "Palmen und Hausdächer, Ecuador",
    "artist": "Frederic Edwin Church",
    "year": "1857",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-191: https://collection.cooperhewitt.org/view/objects/asitem/id/22689, CC0 (gemeinfrei)"
  },
  {
    "id": "fesangayerup",
    "title": "Ausbruch des Sangay, Ecuador",
    "artist": "Frederic Edwin Church",
    "year": "1857",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-402: https://collection.cooperhewitt.org/view/objects/asitem/id/23043, CC0 (gemeinfrei)"
  },
  {
    "id": "fecarihuairazo",
    "title": "Chimborazo und Carihuairazo von Riobamba aus",
    "artist": "Frederic Edwin Church",
    "year": "1857",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-704: https://collection.cooperhewitt.org/view/objects/asitem/id/23492, CC0 (gemeinfrei)"
  },
  {
    "id": "fechimborazo3",
    "title": "Der Chimborazo, Ecuador",
    "artist": "Frederic Edwin Church",
    "year": "1857",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-1296-b: https://collection.cooperhewitt.org/view/objects/asitem/id/22351, CC0 (gemeinfrei)"
  },
  {
    "id": "feheartandes",
    "title": "Das Herz der Anden",
    "artist": "Frederic Edwin Church",
    "year": "1859",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "The Metropolitan Museum of Art, 09.95: https://www.metmuseum.org/art/collection/search/10481, CC0 (gemeinfrei)"
  },
  {
    "id": "feicebergsof",
    "title": "Eisberge vor Cape St. John, Kanada",
    "artist": "Frederic Edwin Church",
    "year": "1859",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-714-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23507, CC0 (gemeinfrei)"
  },
  {
    "id": "feicebergclo",
    "title": "Eisberg unter Wolken, Kanada",
    "artist": "Frederic Edwin Church",
    "year": "1859",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-305-a: https://collection.cooperhewitt.org/view/objects/asitem/id/22855, CC0 (gemeinfrei)"
  },
  {
    "id": "feicebergmid",
    "title": "Eisberg um Mitternacht, Labrador",
    "artist": "Frederic Edwin Church",
    "year": "1859",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-711: https://collection.cooperhewitt.org/view/objects/asitem/id/23502, CC0 (gemeinfrei)"
  },
  {
    "id": "fefloatingic",
    "title": "Treibender Eisberg, Kanada",
    "artist": "Frederic Edwin Church",
    "year": "1859",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-296-a: https://collection.cooperhewitt.org/view/objects/asitem/id/22837, CC0 (gemeinfrei)"
  },
  {
    "id": "fegrayiceber",
    "title": "Grauer Eisberg, Kanada",
    "artist": "Frederic Edwin Church",
    "year": "1859",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-749-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23560, CC0 (gemeinfrei)"
  },
  {
    "id": "feicebergice",
    "title": "Eisberg und Eisblume, Kanada",
    "artist": "Frederic Edwin Church",
    "year": "1859",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-296-b: https://collection.cooperhewitt.org/view/objects/asitem/id/22838, CC0 (gemeinfrei)"
  },
  {
    "id": "fetwilightwi",
    "title": "Abendrot in der Wildnis",
    "artist": "Frederic Edwin Church",
    "year": "1860",
    "museum": "Cleveland Museum of Art",
    "source": "Cleveland Museum of Art, 1965.233: https://clevelandart.org/art/1965.233, CC0 (gemeinfrei)"
  },
  {
    "id": "feautumnfoli",
    "title": "Herbstlaub, Hudson",
    "artist": "Frederic Edwin Church",
    "year": "1860",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-709: https://collection.cooperhewitt.org/view/objects/asitem/id/23498, CC0 (gemeinfrei)"
  },
  {
    "id": "fesunset",
    "title": "Sonnenuntergang bei Hudson",
    "artist": "Frederic Edwin Church",
    "year": "1860–1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-312: https://collection.cooperhewitt.org/view/objects/asitem/id/22868, CC0 (gemeinfrei)"
  },
  {
    "id": "fecatskillmo2",
    "title": "Die Catskill Mountains im Herbst",
    "artist": "Frederic Edwin Church",
    "year": "1860–1870",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-505-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23186, CC0 (gemeinfrei)"
  },
  {
    "id": "feaurorabore",
    "title": "Nordlicht",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Smithsonian American Art Museum, Washington",
    "source": "Smithsonian American Art Museum, 1911.4.1: https://americanart.si.edu/collections/search/artwork/?id=4806, CC0 (gemeinfrei)"
  },
  {
    "id": "febluemounta",
    "title": "Blue Mountains bei Kingston, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-354-c: https://collection.cooperhewitt.org/view/objects/asitem/id/22950, CC0 (gemeinfrei)"
  },
  {
    "id": "feliguaneapl",
    "title": "Die Liguanea-Ebene, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-355-c: https://collection.cooperhewitt.org/view/objects/asitem/id/22953, CC0 (gemeinfrei)"
  },
  {
    "id": "febluemounta2",
    "title": "Die Blue Mountains von Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-351-a: https://collection.cooperhewitt.org/view/objects/asitem/id/22939, CC0 (gemeinfrei)"
  },
  {
    "id": "festormmount2",
    "title": "Sturm in den Bergen, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-1330: https://collection.cooperhewitt.org/view/objects/asitem/id/22395, CC0 (gemeinfrei)"
  },
  {
    "id": "femountainss",
    "title": "Berge bei Sonnenuntergang, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-385-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23003, CC0 (gemeinfrei)"
  },
  {
    "id": "fehilltopsun",
    "title": "Hügel bei Sonnenuntergang, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-352-c: https://collection.cooperhewitt.org/view/objects/asitem/id/22944, CC0 (gemeinfrei)"
  },
  {
    "id": "fecardamom",
    "title": "Kardamom, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-676-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23449, CC0 (gemeinfrei)"
  },
  {
    "id": "febromeliapi",
    "title": "Blühende Bromelia pinguin, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-676-c: https://collection.cooperhewitt.org/view/objects/asitem/id/23450, CC0 (gemeinfrei)"
  },
  {
    "id": "fecoconutpal",
    "title": "Kokospalme, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-674-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23444, CC0 (gemeinfrei)"
  },
  {
    "id": "fecenturypla",
    "title": "Agave, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-675-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23447, CC0 (gemeinfrei)"
  },
  {
    "id": "fetreefern",
    "title": "Baumfarn, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-674-c: https://collection.cooperhewitt.org/view/objects/asitem/id/23445, CC0 (gemeinfrei)"
  },
  {
    "id": "felizard",
    "title": "Eine Eidechse, Jamaika",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-712-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23504, CC0 (gemeinfrei)"
  },
  {
    "id": "femeadowautu",
    "title": "Wiese im Herbst, Vermont",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-659-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23416, CC0 (gemeinfrei)"
  },
  {
    "id": "feautumnfoli2",
    "title": "Herbstlaub, Vermont",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-710-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23500, CC0 (gemeinfrei)"
  },
  {
    "id": "febirchtrees",
    "title": "Birken im Herbst, Vermont",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-659-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23415, CC0 (gemeinfrei)"
  },
  {
    "id": "fewoods",
    "title": "Im Wald, Vermont",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-715: https://collection.cooperhewitt.org/view/objects/asitem/id/23509, CC0 (gemeinfrei)"
  },
  {
    "id": "feautumnfoli3",
    "title": "Herbstlaub im Wind, Vermont",
    "artist": "Frederic Edwin Church",
    "year": "1865",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-662-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23420, CC0 (gemeinfrei)"
  },
  {
    "id": "feoverlookin",
    "title": "Blick auf Hebron, Palästina",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-437-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23095, CC0 (gemeinfrei)"
  },
  {
    "id": "fejabalal",
    "title": "Jabal al-Habis, Petra",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-813-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23658, CC0 (gemeinfrei)"
  },
  {
    "id": "feeddeir",
    "title": "Der Felsentempel Ed-Deir, Petra",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-485-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23154, CC0 (gemeinfrei)"
  },
  {
    "id": "fealkhazneh",
    "title": "Al-Khazneh, Petra",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-485-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23153, CC0 (gemeinfrei)"
  },
  {
    "id": "fecoloredroc",
    "title": "Bunte Felswand, Petra",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-585: https://collection.cooperhewitt.org/view/objects/asitem/id/23308, CC0 (gemeinfrei)"
  },
  {
    "id": "fejerusalemo",
    "title": "Jerusalem vom Ölberg aus",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-341: https://collection.cooperhewitt.org/view/objects/asitem/id/22923, CC0 (gemeinfrei)"
  },
  {
    "id": "femountainsb",
    "title": "Berge bei Baalbek",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-758-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23582, CC0 (gemeinfrei)"
  },
  {
    "id": "fepillarstem",
    "title": "Die Säulen des Jupitertempels, Baalbek",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-514: https://collection.cooperhewitt.org/view/objects/asitem/id/23202, CC0 (gemeinfrei)"
  },
  {
    "id": "feinteriorte",
    "title": "Im Bacchustempel, Baalbek",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-581: https://collection.cooperhewitt.org/view/objects/asitem/id/23302, CC0 (gemeinfrei)"
  },
  {
    "id": "felebanon",
    "title": "Der Libanon",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-758-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23581, CC0 (gemeinfrei)"
  },
  {
    "id": "fedamascusmo",
    "title": "Damaskus, Blick von den Bergen",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-759: https://collection.cooperhewitt.org/view/objects/asitem/id/23583, CC0 (gemeinfrei)"
  },
  {
    "id": "fesalzburg",
    "title": "Die Festung Hohensalzburg bei Sonnenaufgang",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-783: https://collection.cooperhewitt.org/view/objects/asitem/id/23620, CC0 (gemeinfrei)"
  },
  {
    "id": "fealpinelake",
    "title": "Bergsee in Bayern",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-1345-b: https://collection.cooperhewitt.org/view/objects/asitem/id/22415, CC0 (gemeinfrei)"
  },
  {
    "id": "fewatzmann",
    "title": "Der Watzmann, Bayern",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-359-a: https://collection.cooperhewitt.org/view/objects/asitem/id/22958, CC0 (gemeinfrei)"
  },
  {
    "id": "festbartholo",
    "title": "St. Bartholomä am Königssee",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-569-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23279, CC0 (gemeinfrei)"
  },
  {
    "id": "fekoenigssee",
    "title": "Der Königssee, Bayern",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-562-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23269, CC0 (gemeinfrei)"
  },
  {
    "id": "fegreatalets",
    "title": "Der Grosse Aletschgletscher, Schweiz",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-361-a: https://collection.cooperhewitt.org/view/objects/asitem/id/22965, CC0 (gemeinfrei)"
  },
  {
    "id": "fethundersto",
    "title": "Gewitter in den Alpen",
    "artist": "Frederic Edwin Church",
    "year": "1868",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-509: https://collection.cooperhewitt.org/view/objects/asitem/id/23194, CC0 (gemeinfrei)"
  },
  {
    "id": "feclaudesvil",
    "title": "Claudes Villa und der Petersdom, Rom",
    "artist": "Frederic Edwin Church",
    "year": "1868–1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-308-b: https://collection.cooperhewitt.org/view/objects/asitem/id/22862, CC0 (gemeinfrei)"
  },
  {
    "id": "fecastelsant",
    "title": "Engelsburg und Claudes Villa, Rom",
    "artist": "Frederic Edwin Church",
    "year": "1868–1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-308-a: https://collection.cooperhewitt.org/view/objects/asitem/id/22861, CC0 (gemeinfrei)"
  },
  {
    "id": "fecolumnphoc",
    "title": "Die Phokas-Säule, Rom",
    "artist": "Frederic Edwin Church",
    "year": "1868–1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-621: https://collection.cooperhewitt.org/view/objects/asitem/id/23366, CC0 (gemeinfrei)"
  },
  {
    "id": "fearchseptim",
    "title": "Der Bogen des Septimius Severus, Rom",
    "artist": "Frederic Edwin Church",
    "year": "1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-567: https://collection.cooperhewitt.org/view/objects/asitem/id/23276, CC0 (gemeinfrei)"
  },
  {
    "id": "fecarnivalvi",
    "title": "Karneval auf der Via del Corso, Rom",
    "artist": "Frederic Edwin Church",
    "year": "1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-428: https://collection.cooperhewitt.org/view/objects/asitem/id/23080, CC0 (gemeinfrei)"
  },
  {
    "id": "ferooftopssu",
    "title": "Dächer bei Sonnenuntergang, Rom",
    "artist": "Frederic Edwin Church",
    "year": "1868–1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-611-c: https://collection.cooperhewitt.org/view/objects/asitem/id/23353, CC0 (gemeinfrei)"
  },
  {
    "id": "feacropoliss",
    "title": "Die Akropolis bei Sonnenaufgang, Athen",
    "artist": "Frederic Edwin Church",
    "year": "1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-507-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23190, CC0 (gemeinfrei)"
  },
  {
    "id": "fecolumnspar",
    "title": "Säulen des Parthenon, Athen",
    "artist": "Frederic Edwin Church",
    "year": "1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-573-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23286, CC0 (gemeinfrei)"
  },
  {
    "id": "febrokencolu",
    "title": "Zerbrochene Säule des Parthenon",
    "artist": "Frederic Edwin Church",
    "year": "1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-574-a: https://collection.cooperhewitt.org/view/objects/asitem/id/23289, CC0 (gemeinfrei)"
  },
  {
    "id": "febrokencolu2",
    "title": "Zerbrochene Säulen, Blick vom Parthenon",
    "artist": "Frederic Edwin Church",
    "year": "1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-573-c: https://collection.cooperhewitt.org/view/objects/asitem/id/23288, CC0 (gemeinfrei)"
  },
  {
    "id": "feparthenons",
    "title": "Der Parthenon bei Sonnenuntergang, Athen",
    "artist": "Frederic Edwin Church",
    "year": "1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-507-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23191, CC0 (gemeinfrei)"
  },
  {
    "id": "feparthenonn",
    "title": "Der Parthenon bei Nacht, Athen",
    "artist": "Frederic Edwin Church",
    "year": "1869",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-671: https://collection.cooperhewitt.org/view/objects/asitem/id/23437, CC0 (gemeinfrei)"
  },
  {
    "id": "feolanasouth",
    "title": "Olana von Südosten",
    "artist": "Frederic Edwin Church",
    "year": "1872–1875",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-666: https://collection.cooperhewitt.org/view/objects/asitem/id/23428, CC0 (gemeinfrei)"
  },
  {
    "id": "fewinterafte",
    "title": "Winternachmittag in Olana",
    "artist": "Frederic Edwin Church",
    "year": "1870–1875",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-420: https://collection.cooperhewitt.org/view/objects/asitem/id/23068, CC0 (gemeinfrei)"
  },
  {
    "id": "fesunset2",
    "title": "Sonnenuntergang, Hudson",
    "artist": "Frederic Edwin Church",
    "year": "1873",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-1313: https://collection.cooperhewitt.org/view/objects/asitem/id/22375, CC0 (gemeinfrei)"
  },
  {
    "id": "feparthenon",
    "title": "Der Parthenon",
    "artist": "Frederic Edwin Church",
    "year": "1871",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "The Metropolitan Museum of Art, 15.30.67: https://www.metmuseum.org/art/collection/search/10482, CC0 (gemeinfrei)"
  },
  {
    "id": "feaegeansea",
    "title": "Das Ägäische Meer",
    "artist": "Frederic Edwin Church",
    "year": "um 1877",
    "museum": "Metropolitan Museum of Art, New York",
    "source": "The Metropolitan Museum of Art, 02.23: https://www.metmuseum.org/art/collection/search/10480, CC0 (gemeinfrei)"
  },
  {
    "id": "fekatahdinri",
    "title": "Mount Katahdin über dem Katahdin Lake",
    "artist": "Frederic Edwin Church",
    "year": "1876–1878",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-626: https://collection.cooperhewitt.org/view/objects/asitem/id/23372, CC0 (gemeinfrei)"
  },
  {
    "id": "fegreatbasin",
    "title": "Das Great Basin am Mount Katahdin",
    "artist": "Frederic Edwin Church",
    "year": "1877",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-632: https://collection.cooperhewitt.org/view/objects/asitem/id/23381, CC0 (gemeinfrei)"
  },
  {
    "id": "fepamolapeak",
    "title": "Pamola Peak und Mount Katahdin",
    "artist": "Frederic Edwin Church",
    "year": "1877–1881",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-635: https://collection.cooperhewitt.org/view/objects/asitem/id/23384, CC0 (gemeinfrei)"
  },
  {
    "id": "fekatahdinup",
    "title": "Mount Katahdin vom Upper Togue Pond aus",
    "artist": "Frederic Edwin Church",
    "year": "1876–1881",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-641: https://collection.cooperhewitt.org/view/objects/asitem/id/23391, CC0 (gemeinfrei)"
  },
  {
    "id": "femillinocke",
    "title": "Millinocket Lake, Maine",
    "artist": "Frederic Edwin Church",
    "year": "1879",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-819: https://collection.cooperhewitt.org/view/objects/asitem/id/23666, CC0 (gemeinfrei)"
  },
  {
    "id": "fehutmountai",
    "title": "Hütte in einem Bergtal, Mexiko",
    "artist": "Frederic Edwin Church",
    "year": "1890–1893",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York",
    "source": "Cooper Hewitt, Smithsonian Design Museum, 1917-4-615-b: https://collection.cooperhewitt.org/view/objects/asitem/id/23358, CC0 (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "church",
  "name": "Frederic Edwin Church",
  "title": "Frederic Edwin Churchs Lebensweg",
  "life": "1826–1900",
  "part": "Vom Hudson in die Welt",
  "subtitle": "Vom Hudson zu den Anden, den Eisbergen und nach Petra",
  "cover": "feheartandes",
  "intro": "Reise mit Frederic Edwin Church, dem amerikanischen Landschaftsmaler, der mit Pinsel und Ölfarbe um die halbe Welt zog: vom Hudson-Tal über Kolumbien und Ecuador, die Eisberge vor Labrador und Jamaika bis nach Petra, Rom und Athen. Viele Stationen zeigen seine schnellen Ölskizzen auf Karton, die heute im Cooper Hewitt in New York liegen.",
  "ending": [
    "Frederic Edwin Church stirbt am 7. April 1900 in New York. Sein Haus Olana über dem Hudson ist heute ein Museum.",
    "Sein Sohn Louis schenkte 1917 Hunderte Ölskizzen dem heutigen Cooper Hewitt in New York. Viele Bilder dieses Weges stammen aus dieser Schenkung."
  ],
  "epilogue": "Frederic Edwin Church stirbt am 7. April 1900 in New York. Der Weg führt vom Hudson über die Anden, die Eisberge und Jamaika bis nach Petra, Rom und Athen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M18,30 C40,16 82,14 94,28 C98,42 80,54 72,64 C66,72 72,84 68,96 C64,112 58,130 50,150 C42,130 38,112 42,96 C38,84 28,74 22,60 C16,48 12,38 18,30 Z",
      "M150,30 C170,20 200,22 214,34 C224,46 220,62 216,76 C208,82 196,74 186,68 C176,64 162,60 154,52 C146,44 144,36 150,30 Z"
    ]
  },
  "stations": [
    {
      "id": "fec1",
      "place": "Catskill am Hudson",
      "when": "1844–1847",
      "map": {
        "x": 62,
        "y": 50
      },
      "mapLabel": "Catskill",
      "intro": [
        "Frederic Edwin Church wird am 4. Mai 1826 in Hartford, Connecticut, geboren.",
        "Ab 1844 lernt er zwei Jahre lang beim Maler Thomas Cole in Catskill am Hudson."
      ],
      "works": [
        {
          "pid": "feironworks",
          "text": [
            "Weisser Rauch steigt aus dem Schornstein eines Eisenwerks am Hudson. Das Wasser spiegelt den grauen Himmel.",
            "Schon als junger Schüler malt Church nicht nur Natur, sondern auch die Fabriken am Fluss."
          ],
          "fact": "1844–1845. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecatskillmo",
          "text": [
            "Hinter Feldern, Häusern und Bäumen liegen die blauen Catskill Mountains.",
            "In diesen Bergen zeichnet und malt Church während seiner Lehrzeit bei Thomas Cole."
          ],
          "fact": "1844–1846. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecloudsvall",
          "text": [
            "Von den Catskill Mountains aus sieht Church Wolkenbänder, die über dem weiten Tal liegen.",
            "Der Himmel wird eines seiner grossen Themen."
          ],
          "fact": "1844–1850. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "femossybould",
          "text": [
            "Ein grosser Stein liegt im Wald, bedeckt mit grünem Moos und Flechten.",
            "Solche genauen Studien von Stein und Pflanzen schulen den Blick des jungen Malers."
          ],
          "fact": "1845. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "festormmount",
          "text": [
            "Dunkle Wolken jagen über die Berge, ein abgebrochener Baum steht im Wind.",
            "Church ist erst etwa 21 Jahre alt, als er dieses Bild malt."
          ],
          "fact": "1847. Cleveland Museum of Art."
        }
      ]
    },
    {
      "id": "fec2",
      "place": "Vermont und Hartford",
      "when": "1848–1851",
      "map": {
        "x": 68,
        "y": 46
      },
      "mapLabel": "Vermont",
      "intro": [
        "1848 eröffnet Church ein eigenes Atelier in New York. Schon 1849 wird er Vollmitglied der National Academy of Design.",
        "Im Sommer reist er zum Skizzieren in die Wälder von Vermont."
      ],
      "works": [
        {
          "pid": "feautumngree",
          "text": [
            "Rote und gelbe Bäume leuchten vor dunklen Hügeln. Der untere Teil des Kartons ist leer geblieben.",
            "Church malt schnell, um die Farben des Herbstes festzuhalten."
          ],
          "fact": "1848. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feautumnland",
          "text": [
            "Ein Hang voller Bäume in Rot, Orange und Grün. Ein kahler Stamm ragt in den Himmel.",
            "Das Museum datiert die Skizze auf September 1848 oder Juli 1849."
          ],
          "fact": "1848 oder 1849. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "febillowingc",
          "text": [
            "Eine helle Wolke türmt sich über einem Fluss, der Himmel glüht orange.",
            "Hartford in Connecticut ist Churchs Geburtsstadt."
          ],
          "fact": "1850–1851. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "femountainsun",
          "text": [
            "Rote Wolken leuchten über dunklen Bergen und einem Wald.",
            "Abendhimmel in starken Farben malt Church sein ganzes Leben lang."
          ],
          "fact": "1850–1856. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec3",
      "place": "Die Küste von Maine",
      "when": "1850–1853",
      "map": {
        "x": 76,
        "y": 40
      },
      "mapLabel": "Maine",
      "intro": [
        "Im Sommer 1850 reist Church zum ersten Mal nach Mount Desert Island an der Küste von Maine.",
        "1851 malt er auch an den Klippen der kanadischen Insel Grand Manan, und um 1852 den Mount Katahdin im Inneren von Maine."
      ],
      "works": [
        {
          "pid": "fesurfdesert",
          "text": [
            "Weisse Wellen schlagen gegen dunkle Felsen an der Küste von Maine.",
            "Im Sommer 1850 malt Church hier die Kraft des Meeres."
          ],
          "fact": "1850. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecoastdeser",
          "text": [
            "Felsen und Bäume am Wasser, darunter bleibt der rötliche Grund des Kartons sichtbar.",
            "Church malt oft nur den wichtigsten Teil einer Szene aus."
          ],
          "fact": "1850–1851. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fedesertsutt",
          "text": [
            "Ruhiges Wasser, flache Felsen und ein weiter, stiller Himmel.",
            "Von der kleinen Insel Sutton aus blickt Church hinüber nach Mount Desert."
          ],
          "fact": "1850. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "femountainst",
          "text": [
            "Ein kleiner Bach fliesst zwischen dunklen Tannen über Steine.",
            "Auf der Insel malt Church nicht nur das Meer, sondern auch den Wald."
          ],
          "fact": "1850–1852. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecliffsgran",
          "text": [
            "Hohe, dunkle Felswände stehen am Strand. Die Brandung liegt tief unten.",
            "Grand Manan liegt in der Bay of Fundy, nicht weit von Maine."
          ],
          "fact": "1851. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecoastgrand",
          "text": [
            "Eine steile, rötliche Klippe fällt ins blaue Meer.",
            "Das Museum datiert die Skizze auf August oder September 1851."
          ],
          "fact": "1851. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fekatahdin52",
          "text": [
            "Unter einem roten Abendhimmel liegt der Berg Katahdin über Wald und Wasser.",
            "Der Katahdin ist der höchste Berg von Maine."
          ],
          "fact": "1852–1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec4",
      "place": "Kolumbien",
      "when": "1853",
      "map": {
        "x": 58,
        "y": 96
      },
      "mapLabel": "Kolumbien",
      "intro": [
        "Im April 1853 reist Church mit dem Geschäftsmann Cyrus Field nach Südamerika. Er folgt den Spuren des Forschers Alexander von Humboldt.",
        "Von Barranquilla fahren sie den Río Magdalena hinauf bis nach Bogotá."
      ],
      "works": [
        {
          "pid": "fetwohouses",
          "text": [
            "Zwei weisse Häuser mit Strohdächern stehen hinter einem Zaun aus Holzpfählen.",
            "Barranquilla ist der erste Ort, den Church in Südamerika malt."
          ],
          "fact": "1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fechurchbarr",
          "text": [
            "Ein langes weisses Gebäude mit rotem Dach und einem Glockenturm unter blauem Himmel.",
            "Die Skizze ist auf den 2. Mai 1853 datiert."
          ],
          "fact": "1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feburrobarra",
          "text": [
            "Ein grauer Esel steht ganz still auf einem leeren Blatt.",
            "Unten hat Church den Ort Barranquilla notiert."
          ],
          "fact": "1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fejustiniano",
          "text": [
            "Ein Junge mit dunklem Haar und weissem Hemd schaut den Maler an.",
            "Bildnisse sind bei Church selten; meist malt er Landschaften."
          ],
          "fact": "1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "femoonlight",
          "text": [
            "Der Mond steht über einer weiten Ebene, dahinter liegen flache Berge.",
            "Auf der Reise malt Church auch bei Nacht."
          ],
          "fact": "1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fetoptequend",
          "text": [
            "Weisses Wasser stürzt über Felsen in die Tiefe, unten leuchtet ein Regenbogen.",
            "Der Tequendama-Wasserfall liegt in der Nähe von Bogotá."
          ],
          "fact": "1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fepitajayafr",
          "text": [
            "Eine rote Frucht mit spitzen Schuppen liegt aufgeschnitten auf einem Tisch.",
            "Church malt in Südamerika auch Pflanzen und Früchte, die er nicht kennt."
          ],
          "fact": "1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec5",
      "place": "Die Vulkane Ecuadors",
      "when": "1853–1855",
      "map": {
        "x": 52,
        "y": 106
      },
      "mapLabel": "Ecuador",
      "intro": [
        "Von Bogotá reist Church über die Anden nach Quito in Ecuador.",
        "Dort malt er die grossen Vulkane Chimborazo und Cotopaxi."
      ],
      "works": [
        {
          "pid": "fellamachimb",
          "text": [
            "Ein braunes Lama steht mit hoch erhobenem Kopf auf dem leeren Papier.",
            "Lamas sieht Church im Hochland der Anden."
          ],
          "fact": "1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecotopaxini",
          "text": [
            "Der verschneite Gipfel des Cotopaxi leuchtet im dunklen Nachthimmel.",
            "Church sieht den Vulkan von der Hacienda San Agustín aus."
          ],
          "fact": "1853. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fechurchdome",
          "text": [
            "Zwei helle Kuppeln mit Laternen ragen über rote Mauern.",
            "Ob die Skizze 1853 oder 1857 entstand, ist nicht sicher bekannt."
          ],
          "fact": "1853 oder 1857. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecotopaxi",
          "text": [
            "Der weisse Vulkan Cotopaxi steht über grünen Tälern, vorne liegt ein kleines Gehöft.",
            "Zwei Jahre nach der Reise malt Church den Berg in New York als grosses Bild."
          ],
          "fact": "1855. Smithsonian American Art Museum, Washington."
        }
      ]
    },
    {
      "id": "fec6",
      "place": "Die Niagarafälle",
      "when": "1851–1858",
      "map": {
        "x": 56,
        "y": 48
      },
      "mapLabel": "Niagara",
      "intro": [
        "Church besucht die Niagarafälle mehrmals, besonders 1856.",
        "1857 zeigt er in New York ein grosses Bild der Fälle, und viele Menschen kommen, um es zu sehen."
      ],
      "works": [
        {
          "pid": "feniagarafal",
          "text": [
            "Weisse Gischt steigt aus dem dunklen Wasser in den Nachthimmel.",
            "Church betrachtet die Fälle hier von der kanadischen Seite."
          ],
          "fact": "1851–1858. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feniagarafal2",
          "text": [
            "Schnee und Eis liegen auf den Felsen, rechts steht ein schmaler Turm am Rand der Fälle.",
            "Im März 1856 besucht Church die Fälle im Winter."
          ],
          "fact": "1856. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fegorgeniaga",
          "text": [
            "Wildes, weisses Wasser rauscht zwischen dunklen Felsen durch die Schlucht.",
            "Unterhalb der Fälle wird der Niagara zu einem reissenden Fluss."
          ],
          "fact": "um 1856. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "febaseameric",
          "text": [
            "Grüne Felsen und Büsche liegen im feinen Nebel der Fälle.",
            "Church klettert nahe an das fallende Wasser heran."
          ],
          "fact": "1856–1858. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec7",
      "place": "Zurück in die Anden",
      "when": "1857–1859",
      "map": {
        "x": 48,
        "y": 110
      },
      "mapLabel": "Anden",
      "intro": [
        "1857 reist Church ein zweites Mal nach Ecuador, diesmal mit dem Maler Louis Rémy Mignot.",
        "Aus seinen Skizzen malt er in New York 1859 sein berühmtes Bild «Das Herz der Anden»."
      ],
      "works": [
        {
          "pid": "fecotopaxi2",
          "text": [
            "Hinter einem Fluss mit Wasserfall und Palmen erhebt sich der verschneite Cotopaxi.",
            "Church malt das Bild im Jahr seiner zweiten Reise nach Ecuador."
          ],
          "fact": "1857. Art Institute of Chicago."
        },
        {
          "pid": "fepalmtrees",
          "text": [
            "Eine hohe Palme breitet ihre Blätter über ein rotes Ziegeldach aus.",
            "Im Mai 1857 ist Church wieder in Ecuador."
          ],
          "fact": "1857. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fesangayerup",
          "text": [
            "Aus dem Krater des Sangay leuchtet Feuer, dunkler Rauch zieht über den Himmel.",
            "Der Sangay ist einer der aktivsten Vulkane Ecuadors."
          ],
          "fact": "1857. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecarihuairazo",
          "text": [
            "Zwei verschneite Gipfel stehen hinter einer weiten, braunen Ebene.",
            "Von der Stadt Riobamba aus sieht man beide Vulkane."
          ],
          "fact": "1857. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fechimborazo3",
          "text": [
            "Der weisse Gipfel des Chimborazo leuchtet über braunen Hügeln und grünen Feldern.",
            "Church sammelt viele Skizzen des Berges für sein grosses Andenbild."
          ],
          "fact": "1857. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feheartandes",
          "text": [
            "Vorne wachsen Bäume und Pflanzen an einem Wasserfall, ganz hinten leuchtet der verschneite Chimborazo.",
            "1859 stellt Church das riesige Bild in New York allein aus, und Tausende kommen, um es zu sehen."
          ],
          "fact": "1859. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "fec8",
      "place": "Eisberge vor Labrador",
      "when": "1859",
      "map": {
        "x": 84,
        "y": 26
      },
      "mapLabel": "Labrador",
      "intro": [
        "Im Sommer 1859 segelt Church mit dem Pfarrer und Schriftsteller Louis Legrand Noble nach Neufundland und Labrador.",
        "Er will Eisberge malen. Daraus entsteht 1861 sein grosses Bild «Die Eisberge»."
      ],
      "works": [
        {
          "pid": "feicebergsof",
          "text": [
            "Unter einem roten Abendhimmel treiben kleine Eisberge vor einer dunklen Küste.",
            "Church malt schnell, denn das Licht im Norden wechselt ständig."
          ],
          "fact": "1859. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feicebergclo",
          "text": [
            "Ein grosser Eisberg mit zwei Spitzen schimmert weiss und hellgrün.",
            "Die Fahrt dauert mehrere Wochen, von Juni bis Juli 1859."
          ],
          "fact": "1859. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feicebergmid",
          "text": [
            "Ein blauer Eisberg steht vor einem orangen Himmel. Im hohen Norden wird es im Sommer kaum dunkel.",
            "Labrador liegt an der Nordostküste Kanadas."
          ],
          "fact": "1859. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fefloatingic",
          "text": [
            "Ein flacher, weisser Eisberg liegt ruhig auf dem dunklen Meer.",
            "Jeder Eisberg hat eine andere Form, und Church malt viele davon."
          ],
          "fact": "1859. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fegrayiceber",
          "text": [
            "Ein mächtiger, grauer Eisberg mit vielen Kanten ragt aus dem Wasser.",
            "Im Schatten wirkt das Eis nicht weiss, sondern grau und bläulich."
          ],
          "fact": "1859. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feicebergice",
          "text": [
            "Ein spitzer Eisberg leuchtet hell vor einem blassen Himmel.",
            "Aus solchen Skizzen setzt Church später im Atelier sein grosses Eisbergbild zusammen."
          ],
          "fact": "1859. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec9",
      "place": "Ein Zuhause bei Hudson",
      "when": "1860–1865",
      "map": {
        "x": 64,
        "y": 52
      },
      "mapLabel": "Hudson",
      "intro": [
        "1860 heiratet Church Isabel Carnes und kauft einen Bauernhof bei Hudson im Staat New York.",
        "Von dort sieht er über das Tal auf die Catskill Mountains."
      ],
      "works": [
        {
          "pid": "fetwilightwi",
          "text": [
            "Der Himmel brennt rot und orange über einem stillen See und dunklen Wäldern.",
            "Das Bild gehört zu Churchs bekanntesten Werken und hängt heute in Cleveland."
          ],
          "fact": "1860. Cleveland Museum of Art."
        },
        {
          "pid": "feautumnfoli",
          "text": [
            "Ein einzelner Baum leuchtet in Rot, Orange und Grün.",
            "Im Oktober 1860 malt Church den Herbst bei seinem neuen Zuhause."
          ],
          "fact": "1860. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fesunset",
          "text": [
            "Ein Kirchturm und Häuser stehen dunkel vor dem glühenden Abendhimmel.",
            "Die kleine Stadt Hudson liegt am gleichnamigen Fluss."
          ],
          "fact": "1860–1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecatskillmo2",
          "text": [
            "Rötliche Hügel liegen unter einem hellen Himmel.",
            "Von seinem Hof bei Hudson sieht Church diese Berge jeden Tag."
          ],
          "fact": "1860–1870. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feaurorabore",
          "text": [
            "Grüne und rote Lichtbänder flackern über einem dunklen Berg und einem Schiff im Eis.",
            "Church malt das Bild nach Skizzen des Polarforschers Isaac Israel Hayes."
          ],
          "fact": "1865. Smithsonian American Art Museum, Washington."
        }
      ]
    },
    {
      "id": "fec10",
      "place": "Die Berge Jamaikas",
      "when": "1865",
      "map": {
        "x": 62,
        "y": 80
      },
      "mapLabel": "Jamaika",
      "intro": [
        "Nach dem Tod von zwei seiner Kinder reist Church im Frühjahr 1865 mit seiner Frau nach Jamaika.",
        "Mehrere Monate malt er die Blue Mountains und die Ebene bei Kingston."
      ],
      "works": [
        {
          "pid": "febluemounta",
          "text": [
            "Blaue Bergketten liegen hinter grünen Hügeln, darüber ziehen weisse Wolken.",
            "Im Mai 1865 kommt Church nach Jamaika."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feliguaneapl",
          "text": [
            "Eine weite, helle Ebene liegt zwischen grünen Hängen und fernen Bergen.",
            "Die Liguanea-Ebene erstreckt sich bei Kingston bis zum Meer."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "febluemounta2",
          "text": [
            "Grüne Bergrücken verschwinden im Dunst, einer hinter dem anderen.",
            "Die Blue Mountains sind das höchste Gebirge Jamaikas."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "festormmount2",
          "text": [
            "Regen fällt aus einer dunklen Wolke auf die Hänge.",
            "In den Tropen ziehen Gewitter oft schnell auf und wieder ab."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "femountainss",
          "text": [
            "Über dunklen Bergen reisst der Himmel auf, eine Wolke leuchtet orange.",
            "Church malt Licht und Wetter immer wieder neu."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fehilltopsun",
          "text": [
            "Ein dunkler Hügel liegt vor einem rosa und orangen Abendhimmel.",
            "Die Skizze entsteht im Juli 1865."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec11",
      "place": "Pflanzen der Tropen",
      "when": "1865",
      "map": {
        "x": 58,
        "y": 84
      },
      "mapLabel": "Tropen",
      "intro": [
        "In den Wäldern Jamaikas malt Church Palmen, Farne und Blüten aus der Nähe.",
        "Auch kleine Tiere finden ihren Platz auf seinen Kartons."
      ],
      "works": [
        {
          "pid": "fecardamom",
          "text": [
            "Weisse Blüten mit gelben und roten Flecken hängen zwischen langen grünen Blättern.",
            "Church malt die Pflanze im Juni 1865 ganz aus der Nähe."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "febromeliapi",
          "text": [
            "Ein dichter Stand cremeweisser Blüten wächst aus spitzen Blättern.",
            "Die Bromelia pinguin wächst wild in der Karibik."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecoconutpal",
          "text": [
            "Eine schlanke Palme breitet ihre Wedel über grünen Büschen aus.",
            "Palmen malt Church in Jamaika besonders oft."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecenturypla",
          "text": [
            "Lange, spitze Blätter wachsen wie ein Stern aus dem Boden.",
            "Auf Englisch heisst die Agave «Century Plant», Jahrhundertpflanze, weil sie erst nach vielen Jahren blüht."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fetreefern",
          "text": [
            "Ein Farn so hoch wie ein Baum breitet seine Wedel über einer grünen Wiese aus.",
            "Baumfarne wachsen in den feuchten Bergwäldern Jamaikas."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "felizard",
          "text": [
            "Eine grüne Eidechse klettert an einem hellen Untergrund nach oben.",
            "Church hält auch die kleinen Tiere der Insel fest."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec12",
      "place": "Herbst in Vermont",
      "when": "1865",
      "map": {
        "x": 68,
        "y": 44
      },
      "mapLabel": "Vermont",
      "intro": [
        "Im Oktober 1865 ist Church wieder in Vermont.",
        "Nach dem Grün der Tropen malt er die roten und gelben Farben des Herbstes."
      ],
      "works": [
        {
          "pid": "femeadowautu",
          "text": [
            "Rote und gelbe Pflanzen und Büsche füllen eine Wiese.",
            "Church malt hier ganz nah am Boden."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feautumnfoli2",
          "text": [
            "Ein junger Baum leuchtet feuerrot vor einem grauen Hang.",
            "Der Ahorn färbt sich in Vermont im Oktober besonders stark."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "febirchtrees",
          "text": [
            "Zwei weisse Birkenstämme stehen zwischen gelbem und grünem Laub.",
            "Church malt die Skizze auf einen hellgrünen Karton."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fewoods",
          "text": [
            "Dunkle und helle Stämme stehen dicht im herbstlichen Wald.",
            "Das Licht fällt in Streifen zwischen die Bäume."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feautumnfoli3",
          "text": [
            "Bunte Bäume biegen sich im Wind, das Gras glänzt hell.",
            "Den Rand des Kartons lässt Church einfach leer."
          ],
          "fact": "1865. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec13",
      "place": "Petra und Jerusalem",
      "when": "1868",
      "map": {
        "x": 206,
        "y": 70
      },
      "mapLabel": "Petra",
      "intro": [
        "Ende 1867 reist Church mit seiner Familie nach Europa und weiter in den Orient.",
        "Im Februar 1868 reitet er durch die Wüste nach Petra, im Frühling malt er Jerusalem."
      ],
      "works": [
        {
          "pid": "feoverlookin",
          "text": [
            "Helle Häuser liegen an einem Hang zwischen Feldern und Olivenbäumen.",
            "Mitte Februar 1868 kommt Church auf dem Weg nach Petra durch Hebron."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fejabalal",
          "text": [
            "Rötliche Felsberge umgeben ein weites Tal unter blauem Himmel.",
            "Die Skizze ist auf den 25. Februar 1868 datiert."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feeddeir",
          "text": [
            "Eine riesige Fassade mit Säulen und Giebeln ist direkt aus dem Fels gehauen.",
            "Ed-Deir, das «Kloster», liegt hoch über der Stadt Petra."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fealkhazneh",
          "text": [
            "Zwischen dunklen Felswänden leuchtet die rosa Fassade des Schatzhauses.",
            "Al-Khazneh ist das bekannteste Bauwerk von Petra."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecoloredroc",
          "text": [
            "Ein Fels mit roten, violetten und gelben Streifen wölbt sich über eine dunkle Höhle.",
            "Die farbigen Sandsteinschichten von Petra begeistern Church."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fejerusalemo",
          "text": [
            "Die Stadt liegt hell im Abendlicht, darüber bricht die Sonne durch die Wolken.",
            "Die Skizze ist auf den 1. April 1868 datiert."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec14",
      "place": "Libanon und Syrien",
      "when": "1868",
      "map": {
        "x": 210,
        "y": 58
      },
      "mapLabel": "Baalbek",
      "intro": [
        "Im Mai 1868 reist Church durch den Libanon zu den Tempeln von Baalbek.",
        "Danach blickt er von den Bergen auf die Stadt Damaskus."
      ],
      "works": [
        {
          "pid": "femountainsb",
          "text": [
            "Hinter einer grünen Ebene liegen lange, verschneite Bergketten.",
            "Die Skizze ist auf den 6. Mai 1868 datiert."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fepillarstem",
          "text": [
            "Sechs hohe Säulen stehen allein auf einem Sockel aus riesigen Steinen.",
            "Sie sind alles, was vom grossen römischen Jupitertempel aufrecht geblieben ist."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feinteriorte",
          "text": [
            "Grosse, verzierte Steinblöcke liegen im grünen Gras vor alten Mauern.",
            "Der Bacchustempel ist einer der am besten erhaltenen römischen Tempel."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "felebanon",
          "text": [
            "Weisse Gipfel ziehen sich über eine flache, braungrüne Ebene.",
            "Im Mai liegt auf den Höhen des Libanon noch Schnee."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fedamascusmo",
          "text": [
            "Von rötlichen Felsen aus sieht man grüne Gärten in der Ebene.",
            "Damaskus gehört zu den ältesten Städten der Welt."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec15",
      "place": "Salzburg und die Alpen",
      "when": "1868",
      "map": {
        "x": 172,
        "y": 40
      },
      "mapLabel": "Alpen",
      "intro": [
        "Im Sommer 1868 malt Church in Salzburg, in Berchtesgaden und am Königssee.",
        "Im August reist er in die Schweiz zum Grossen Aletschgletscher."
      ],
      "works": [
        {
          "pid": "fesalzburg",
          "text": [
            "Die Burg liegt hell auf ihrem Hügel über der Stadt, dahinter steigen Berge auf.",
            "Salzburg liegt nahe bei Berchtesgaden, wo Church den Sommer verbringt."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fealpinelake",
          "text": [
            "Türkisgrünes Wasser liegt zwischen steilen, grauen Felsen.",
            "Die Seen um Berchtesgaden haben besonders klares Wasser."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fewatzmann",
          "text": [
            "Die gezackten Gipfel des Watzmanns stehen dunkel vor einem hellen Himmel.",
            "Der Watzmann ist der bekannteste Berg im Berchtesgadener Land."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "festbartholo",
          "text": [
            "Unter hohen Felswänden steht eine kleine Kirche am Ufer des Sees.",
            "Die Kapelle St. Bartholomä erreicht man am besten mit dem Boot."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fekoenigssee",
          "text": [
            "Steile, bewaldete Felsen fallen in den blaugrünen See.",
            "Der Königssee liegt eingebettet zwischen hohen Bergen."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fegreatalets",
          "text": [
            "Ein breiter Strom aus Eis zieht sich in einer Kurve durch das Tal.",
            "Der Aletschgletscher ist der längste Gletscher der Alpen."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fethundersto",
          "text": [
            "Ein Blitz zuckt aus dunklen Wolken, rechts leuchtet ein Regenbogen über der Wiese.",
            "Church hält Wetter gerne genau im Moment fest."
          ],
          "fact": "1868. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec16",
      "place": "Ein Winter in Rom",
      "when": "1868–1869",
      "map": {
        "x": 176,
        "y": 54
      },
      "mapLabel": "Rom",
      "intro": [
        "Den Winter 1868 bis 1869 verbringt die Familie Church in Rom.",
        "Church malt alte Säulen, Dächer im Abendlicht und das bunte Treiben der Stadt."
      ],
      "works": [
        {
          "pid": "feclaudesvil",
          "text": [
            "Hinter Bäumen und Häusern erhebt sich die Kuppel des Petersdoms.",
            "Die Kuppel ist von vielen Orten in Rom aus zu sehen."
          ],
          "fact": "1868–1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecastelsant",
          "text": [
            "Ein grüner Hügel fällt zum Fluss ab, dahinter liegen die Häuser Roms.",
            "Die Engelsburg steht am Ufer des Tibers."
          ],
          "fact": "1868–1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecolumnphoc",
          "text": [
            "Eine einzelne, hohe Säule steht auf einem Stufensockel.",
            "Die Säule ist das jüngste Denkmal auf dem Forum Romanum."
          ],
          "fact": "1868–1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fearchseptim",
          "text": [
            "Mächtige Säulen und Reliefs eines römischen Triumphbogens füllen das Bild.",
            "Der Bogen steht seit über 1800 Jahren auf dem Forum Romanum."
          ],
          "fact": "1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecarnivalvi",
          "text": [
            "Eine dichte Menschenmenge füllt die lange Strasse zwischen hohen Häusern.",
            "Im Februar 1869 erlebt Church den römischen Karneval."
          ],
          "fact": "1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "ferooftopssu",
          "text": [
            "Über den Dächern und Kuppeln Roms glüht der Abendhimmel gelb und rot.",
            "Church malt die Stadt im letzten Licht."
          ],
          "fact": "1868–1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec17",
      "place": "Athen und die Akropolis",
      "when": "1869",
      "map": {
        "x": 192,
        "y": 60
      },
      "mapLabel": "Athen",
      "intro": [
        "Im April 1869 malt Church in Athen die Akropolis und den Parthenon.",
        "Danach kehrt die Familie nach Amerika zurück."
      ],
      "works": [
        {
          "pid": "feacropoliss",
          "text": [
            "Der Burgberg mit seinen Tempeln liegt im ersten Morgenlicht über der Stadt.",
            "Church kommt im April 1869 nach Athen."
          ],
          "fact": "1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fecolumnspar",
          "text": [
            "Drei mächtige Säulen tragen einen Steinbalken vor dem Himmel.",
            "Die Skizze ist auf den 21. April 1869 datiert."
          ],
          "fact": "1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "febrokencolu",
          "text": [
            "Runde Säulenteile liegen im Gras wie umgestürzte Trommeln.",
            "Viele Teile des Parthenon liegen bis heute am Boden."
          ],
          "fact": "1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "febrokencolu2",
          "text": [
            "Säulenreste stehen vor einem weiten Blick über Land und Meer.",
            "Vom Parthenon aus sieht man bis zum Meer."
          ],
          "fact": "1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feparthenons",
          "text": [
            "Der Tempel steht goldgelb auf dem Hügel, der Himmel färbt sich rosa.",
            "Church malt den Parthenon zu verschiedenen Tageszeiten."
          ],
          "fact": "1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feparthenonn",
          "text": [
            "Die Säulen leuchten rot und orange vor dem schwarzen Nachthimmel.",
            "Church malt den Tempel in einem warmen, fast glühenden Licht."
          ],
          "fact": "1869. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    },
    {
      "id": "fec18",
      "place": "Olana über dem Hudson",
      "when": "1870–1877",
      "map": {
        "x": 60,
        "y": 48
      },
      "mapLabel": "Olana",
      "intro": [
        "Zurück am Hudson lässt Church auf seinem Hügel bei Hudson ein neues Haus bauen: Olana.",
        "Seine Formen und Farben erinnern an die Reise in den Orient. Im Atelier malt er Bilder nach seinen Skizzen."
      ],
      "works": [
        {
          "pid": "feolanasouth",
          "text": [
            "Zwischen hohen Bäumen leuchtet ein rosa Haus mit Turm auf dem Hügel.",
            "Olana ist heute ein Museum und gehört dem Staat New York."
          ],
          "fact": "1872–1875. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fewinterafte",
          "text": [
            "Die Sonne steht tief hinter grauen Wolken über dem verschneiten Tal.",
            "Church malt den Blick von seinem Hügel zu allen Jahreszeiten."
          ],
          "fact": "1870–1875. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fesunset2",
          "text": [
            "Rote Wolkenstreifen spiegeln sich im stillen Wasser vor dunklen Hügeln.",
            "Die Skizze ist auf den 25. Dezember 1873 datiert, den Weihnachtstag."
          ],
          "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "feparthenon",
          "text": [
            "Der Tempel steht golden im Abendlicht, vorne liegen Steinblöcke und Säulenreste.",
            "Zwei Jahre nach Athen malt Church das grosse Bild nach seinen Skizzen."
          ],
          "fact": "1871. Metropolitan Museum of Art, New York."
        },
        {
          "pid": "feaegeansea",
          "text": [
            "Dunkle Felsen rahmen einen hellen Blick aufs Meer, rechts steht ein Regenbogen.",
            "Church malt das Bild Jahre nach seiner Reise ans Mittelmeer."
          ],
          "fact": "um 1877. Metropolitan Museum of Art, New York."
        }
      ]
    },
    {
      "id": "fec19",
      "place": "Maine und Mexiko",
      "when": "1876–1893",
      "map": {
        "x": 78,
        "y": 38
      },
      "mapLabel": "Katahdin",
      "intro": [
        "In späteren Jahren reist Church oft nach Maine zum Mount Katahdin.",
        "Wegen einer schmerzhaften Krankheit verbringt er viele Winter im warmen Mexiko."
      ],
      "works": [
        {
          "pid": "fekatahdinri",
          "text": [
            "Ein blauer Berg steht über einem stillen See, der Vordergrund bleibt leer.",
            "Mehr als zwanzig Jahre nach seinem ersten Besuch malt Church den Katahdin wieder."
          ],
          "fact": "1876–1878. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fegreatbasin",
          "text": [
            "Steile, graue Felswände umschliessen ein Tal mit gelbgrünem Wald und einem kleinen See.",
            "Das Great Basin ist ein Kessel, den das Eis in den Berg gegraben hat."
          ],
          "fact": "1877. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fepamolapeak",
          "text": [
            "Ein grüner Bergrücken liegt hinter einem dunklen Wald am Ufer eines Teiches.",
            "Pamola Peak ist ein Gipfel des Katahdin-Massivs."
          ],
          "fact": "1877–1881. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fekatahdinup",
          "text": [
            "Der Berg leuchtet rosa im Abendlicht und spiegelt sich im Wasser.",
            "Church kehrt immer wieder an die Seen von Maine zurück."
          ],
          "fact": "1876–1881. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "femillinocke",
          "text": [
            "Kleine Wellen bewegen das Wasser, am Horizont liegt ein flacher, blauer Hügel.",
            "Die Skizze entsteht im September 1879."
          ],
          "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
        },
        {
          "pid": "fehutmountai",
          "text": [
            "Eine kleine Hütte steht in einer goldenen Ebene, dahinter ein heller, verschneiter Berg.",
            "Diese Skizze gehört zu den letzten Ölskizzen in diesem Weg."
          ],
          "fact": "1890–1893. Cooper Hewitt, Smithsonian Design Museum, New York."
        }
      ]
    }
  ],
  "lazyIndex": true
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
