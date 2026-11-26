// Work metadata of path segantini (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Privatsammlung","Segantini Museum, St. Moritz","Kunsthaus Zürich"];
  var G = [["Giovanni Segantini",[["sgself80","Selbstbildnis mit zwanzig Jahren","1879–1880",0],["segantini","Mittag in den Alpen","1891",1],["sgpasture","Alpine Weiden","um 1893",2],["sgnature","Die Natur","1897–1899",1]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["segantini"] = true;
})();
