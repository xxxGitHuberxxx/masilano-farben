// Work metadata of path galerie2-9 (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Metropolitan Museum of Art, New York","Cleveland Museum of Art","Art Institute of Chicago"];
  var G = [["John Varley",[["gqvypontaberg","Pont Aberglaslyn","1812",0,"National Gallery of Art, Washington, 1987.59.1: https://www.nga.gov/collection/art-object-page.70185.html, CC0 (gemeinfrei)"],["gqvychester","Ansicht von Chester","1836",1,"Metropolitan Museum of Art, New York, 1975.1.901: https://www.metmuseum.org/art/collection/search/459982, CC0 (gemeinfrei)"],["gqvyfortified","Befestigter Zugang zu einer walisischen Stadt (Osttor von Caernarvon)","um 1802",1,"Metropolitan Museum of Art, New York, 2018.589: https://www.metmuseum.org/art/collection/search/812270, CC0 (gemeinfrei)"]]],["Richard Wilson",[["gqwilakealban","Der Albaner See","1762",0,"National Gallery of Art, Washington, 1983.1.44: https://www.nga.gov/collection/art-object-page.61394.html, CC0 (gemeinfrei)"],["gqwisolitude","Einsamkeit","um 1762–1770",0,"National Gallery of Art, Washington, 1983.1.45: https://www.nga.gov/collection/art-object-page.61395.html, CC0 (gemeinfrei)"]]],["Pancrace Bessa",[["gqbsblackeyed","Rauer Sonnenhut (Black-eyed Susan)","1828–1835",2,"Cleveland Museum of Art, 1955.482: https://clevelandart.org/art/1955.482, CC0 (gemeinfrei)"],["gqbspolyanthu","Tazette (Narcissus tazetta)","1836",2,"Cleveland Museum of Art, 1949.411: https://clevelandart.org/art/1949.411, CC0 (gemeinfrei)"]]],["Jean-Baptiste Monnoyer",[["gqmovaseflowe","Blumenvase","1660",3,"Art Institute of Chicago, 1936.95: https://www.artic.edu/artworks/22471, CC0 (gemeinfrei)"]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["galerie2-9"] = true;
})();
