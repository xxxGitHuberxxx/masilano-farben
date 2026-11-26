// Work metadata of path vallotton (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Musée cantonal des Beaux-Arts, Lausanne","Privatsammlung","MuMA, Le Havre","Baltimore Museum of Art","Musée d’Orsay, Paris","Kunsthaus Zürich"];
  var G = [["Félix Vallotton",[["fvmother","Die Mutter des Künstlers","1884",0],["fvbrother","Paul Vallotton, der Bruder des Künstlers","1886",1],["fvvalse","Der Walzer","1893",2],["fvmensonge","Die Lüge","1898",3],["ballon","Der Ball","1899",4],["fvredback","Interieur mit Frau in Rot, von hinten","1903",5],["fvhonfleur","Honfleur, Sommermorgen","um 1910",1],["fvsunset","Sonnenuntergang in Villerville","um 1917",5],["fvchemin","Sonnenweg","1914",1],["fvself","Selbstbildnis","1905",5]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["vallotton"] = true;
})();
