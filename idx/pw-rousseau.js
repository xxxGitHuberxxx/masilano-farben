// Work metadata of path rousseau (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Art Institute of Chicago","Cleveland Museum of Art","Metropolitan Museum of Art, New York"];
  var G = [["Henri Rousseau",[["hrrendezvous","Begegnung im Wald","1889",0],["hrsawmill","Sägewerk am Stadtrand von Paris","um 1893–1895",1],["hrboy","Knabe auf den Felsen","1895–1897",0],["hroutskirts","Am Rand von Paris","um 1897–1905",2],["hrbievre","Die Ufer der Bièvre bei Bicêtre","um 1908–1909",3],["hrequatorial","Der Äquatorialdschungel","1909",0],["hrmonkeys","Tropischer Wald mit Affen","1910",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["rousseau"] = true;
})();
