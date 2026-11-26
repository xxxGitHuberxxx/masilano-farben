// Work metadata of path galerie3-4 (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","National Gallery of Art, Washington","Cleveland Museum of Art"];
  var G = [["William Bradford",[["gqbacoastlabr","Die Küste von Labrador","1866",0,"Art Institute of Chicago, 1983.529: https://www.artic.edu/artworks/100489, CC0 (gemeinfrei)"]]],["John F. Francis",[["gqjfwatermelo","Wassermelone und Trauben","1863",1,"National Gallery of Art, Washington, 2018.44.6: https://www.nga.gov/collection/art-object-page.214118.html, CC0 (gemeinfrei)"]]],["George Bellows",[["gqbebluemorni","Blauer Morgen","1909",1,"National Gallery of Art, Washington, 1963.10.82: https://www.nga.gov/collection/art-object-page.46557.html, CC0 (gemeinfrei)"]]],["Arthur Wesley Dow",[["gqdcdragonorc","Drache und Obstgarten","um 1908",2,"Cleveland Museum of Art, 2000.1: https://clevelandart.org/art/2000.1, CC0 (gemeinfrei)"],["gqdclongroad","Die lange Strasse oder Argilla Road","um 1898",2,"Cleveland Museum of Art, 2016.1: https://clevelandart.org/art/2016.1, CC0 (gemeinfrei)"]]],["Homer Dodge Martin",[["gqhdseine","An der Seine","um 1895",0,"Art Institute of Chicago, 1943.92: https://www.artic.edu/artworks/46321, CC0 (gemeinfrei)"],["gqhdwildcoast","Wilde Küste, Newport","1889",2,"Cleveland Museum of Art, 1923.1118: https://clevelandart.org/art/1923.1118, CC0 (gemeinfrei)"],["gqhdlandscape","Landschaft","1896",2,"Cleveland Museum of Art, 1946.291: https://clevelandart.org/art/1946.291, CC0 (gemeinfrei)"]]],["Alexander Helwig Wyant",[["gqwypeacefulv","Friedliches Tal","um 1872",1,"National Gallery of Art, Washington, 1965.10.1: https://www.nga.gov/collection/art-object-page.50295.html, CC0 (gemeinfrei)"]]],["Thomas Doughty",[["gqdofancifull","Fantasielandschaft","1834",1,"National Gallery of Art, Washington, 1963.9.2: https://www.nga.gov/collection/art-object-page.46475.html, CC0 (gemeinfrei)"]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["galerie3-4"] = true;
})();
