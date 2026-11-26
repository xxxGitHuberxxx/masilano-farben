// Work metadata of path vaneyck (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["The National Gallery, London"];
  var G = [["Jan van Eyck",[["arnolfini","Arnolfini-Porträt","1434",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["vaneyck"] = true;
})();
