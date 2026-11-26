// Work metadata of path galerie4-6 (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington"];
  var G = [["William Wyld",[["gqwwduomomila","Der Mailänder Dom von einer Seitenstrasse aus","um 1834",0,"National Gallery of Art, Washington, 2015.83.1: https://www.nga.gov/collection/art-object-page.199159.html, CC0 (gemeinfrei)"]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["galerie4-6"] = true;
})();
