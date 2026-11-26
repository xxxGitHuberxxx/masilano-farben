// Work metadata of path courbet (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Metropolitan Museum of Art, New York","National Gallery of Art, Washington","Art Institute of Chicago"];
  var G = [["Gustave Courbet",[["gcladies","Die jungen Damen aus dem Dorf","1851–1852",0],["gcbretonnerie","La Bretonnerie im Département Indre","1856",1],["gccliffs","Klippen am Meer: kleiner Strand bei Sonnenaufgang","1865",2],["gcblackrocks","Die schwarzen Felsen bei Trouville","1865–1866",1],["gccalm66","Ruhige See","1866",1],["gccalm69","Ruhige See","1869",0],["gchautepierre","Der Felsen von Hautepierre","um 1869",2],["gcbeach","Strand in der Normandie","um 1872–1875",1],["gcboats","Boote am Strand von Étretat","um 1872–1875",1]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["courbet"] = true;
})();
