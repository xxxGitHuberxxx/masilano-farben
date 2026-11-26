// Work metadata of path leonardo (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Muzeum Książąt Czartoryskich, Krakau","Musée du Louvre, Paris"];
  var G = [["Leonardo da Vinci",[["ermine","Dame mit dem Hermelin","um 1489–1491",0],["monalisa","Mona Lisa","um 1503–1506",1]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["leonardo"] = true;
})();
