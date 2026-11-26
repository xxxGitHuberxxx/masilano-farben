// Work metadata of path bruegel (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Kunsthistorisches Museum, Wien","The Metropolitan Museum of Art, New York"];
  var G = [["Pieter Bruegel der Ältere",[["babel","Der Turmbau zu Babel","1563",0],["harvesters","Die Kornernte","1565",1],["hunters","Jäger im Schnee","1565",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["bruegel"] = true;
})();
