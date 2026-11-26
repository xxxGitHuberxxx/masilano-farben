// Work metadata of path cassatt (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","National Gallery of Art, Washington"];
  var G = [["Mary Cassatt",[["csbullfight","Nach dem Stierkampf","1873",0],["csarmchair","Kleines Mädchen in einem blauen Sessel","1878",1],["csfan","Frau mit Fächer","um 1878–1879",1],["csbalcony","Auf einem Balkon","1878–1879",0],["csloge","Die Loge","um 1878–1880",1],["cssusan","Susan mit Strohhut","um 1883",0],["cswindow","Junge Frau am Fenster","um 1883–1884",1],["csbeach","Kinder beim Spielen am Strand","1884",1],["csstrawhat","Kind mit Strohhut","um 1886",1],["cslady","Bildnis einer Dame","um 1887",1],["cskiss","Der Gutenachtkuss der Mutter","1888",0],["csblackhat","Der schwarze Hut","um 1890",1],["cszinnia","Frau mit roter Zinnie (Träumerei)","1891–1892",1],["csboating","Die Bootsfahrt","1893–1894",1],["cssara","Sara mit Haube und Mantel","um 1904–1906",1]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["cassatt"] = true;
})();
