// Work metadata of path moser (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Privatsammlung"];
  var G = [["Koloman Moser",[["kmself95","Selbstbildnis als junger Mann","um 1895",0],["kmczeschka","Bildnis Carl Otto Czeschka","1907",0],["kmself10","Selbstbildnis","um 1910",0],["kmhut","Junge Frau mit Hut","um 1910",0],["kmmaedchen","Mädchenbildnis","um 1913",0],["kmprimeln","Primeln im Korb","um 1912",0],["kmbirnen","Fruchtschale mit Birnen","um 1913",0],["kmwanderer","Der Wanderer","um 1914",0],["kmdents","Dents du Midi","um 1913",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["moser"] = true;
})();
