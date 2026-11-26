// Work metadata of path galerie1-5 (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Cleveland Museum of Art"];
  var G = [["Maurice Prendergast",[["gqprcaffeflor","Caffè Florian in Venedig","1898–1899",0,"National Gallery of Art, Washington, 2003.123.1: https://www.nga.gov/collection/art-object-page.128006.html, CC0 (gemeinfrei)"],["gqprmallcentr","The Mall im Central Park","1900–1903",0,"National Gallery of Art, Washington, 1992.51.11: https://www.nga.gov/collection/art-object-page.76216.html, CC0 (gemeinfrei)"],["gqprmayday","Maifeiertag im Central Park","1901",1,"Cleveland Museum of Art, 1926.17: https://clevelandart.org/art/1926.17, CC0 (gemeinfrei)"],["gqprterrace","Von der Terrasse aus","1912",1,"Cleveland Museum of Art, 1934.215: https://clevelandart.org/art/1934.215, CC0 (gemeinfrei)"],["gqprbeachst","Strand, Saint-Malo","um 1907",1,"Cleveland Museum of Art, 1949.543: https://clevelandart.org/art/1949.543, CC0 (gemeinfrei)"],["gqprrockyseas","Die felsige Küste","um 1907–1910",1,"Cleveland Museum of Art, 1953.655: https://clevelandart.org/art/1953.655, CC0 (gemeinfrei)"],["gqprbyshore","Am Ufer","um 1910–1913",1,"Cleveland Museum of Art, 1946.292: https://clevelandart.org/art/1946.292, CC0 (gemeinfrei)"]]],["Pierre-Joseph Redouté",[["gqrdcabbagero","Zentifolie (Rosa centifolia simplex)","1817–1824",1,"Cleveland Museum of Art, 1959.14: https://clevelandart.org/art/1959.14, CC0 (gemeinfrei)"]]],["John Singer Sargent",[["gqsabridgecam","Eine Brücke und ein Campanile in Venedig","1902–1904",0,"National Gallery of Art, Washington, 1970.17.169: https://www.nga.gov/collection/art-object-page.52313.html, CC0 (gemeinfrei)"],["gqsagondolamo","Gondelliegeplätze am Canal Grande","1904–1907",0,"National Gallery of Art, Washington, 1970.17.171: https://www.nga.gov/collection/art-object-page.52315.html, CC0 (gemeinfrei)"]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["galerie1-5"] = true;
})();
