// Work metadata of path caillebotte (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","National Gallery of Art, Washington","Cleveland Museum of Art","Metropolitan Museum of Art, New York"];
  var G = [["Gustave Caillebotte",[["cbrainy","Pariser Strasse; Regenwetter","1877",0],["cbskiffs","Kanus","1877",1],["cbcourtier","Bildnis eines Mannes","1880",2],["cbtrouville","Villen in Trouville","1884",2],["cblamy","Studie eines Mannes mit den Händen in den Taschen","1893",2],["cbchrysanth","Chrysanthemen im Garten von Petit-Gennevilliers","1893",3],["cbdahlias","Dahlien, Garten in Petit-Gennevilliers","1893",1]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["caillebotte"] = true;
})();
