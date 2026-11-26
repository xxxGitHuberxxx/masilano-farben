// Work metadata of path marc (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Städtische Galerie im Lenbachhaus, München","Walker Art Center, Minneapolis","Heutiger Standort nicht öffentlich bestätigt","Kunstmuseum Basel","Staatliche Kunsthalle Karlsruhe","Pinakothek der Moderne, München"];
  var G = [["Franz Marc",[["grazing","Weidende Pferde I","1910",0],["bluehorse","Blaues Pferd I","1911",0],["largeblue","Die grossen blauen Pferde","1911",1],["tiger","Der Tiger","1912",0],["foxes","Die Füchse","1913",2],["fate","Tierschicksale","1913",3],["deer","Rehe im Walde II","1914",4],["forms","Kämpfende Formen","1914",5]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["marc"] = true;
})();
