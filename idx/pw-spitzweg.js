// Work metadata of path spitzweg (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Privatsammlung","Neue Pinakothek, München","Grohmann Museum, Milwaukee"];
  var G = [["Carl Spitzweg",[["csself","Selbstbildnis","um 1842",0],["cspoet","Der arme Poet","1839",1],["csgarret","Die Dachstube","um 1840",0],["csalchem","Der Alchemist","1837",2],["csbutterfly","Der Schmetterlingsfänger","um 1840",0],["csbook","Der Bücherwurm","um 1850",2],["cscactus","Der Kaktusfreund","um 1856",0],["csastro","Der Astronom","um 1860",0],["csflowers","Der Blumenfreund","um 1855",0],["csangler","Der Angler","um 1860",0],["cspost","Der Briefbote im Rosenthal","um 1858",0],["cswatch","Der eingeschlafene Nachtwächter","um 1850",0],["csmonks","Disputierende Mönche","um 1860",0],["cssunday","Sonntagsspaziergang","um 1841",0],["cschurch","Der Gang zur Kirche","um 1860",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["spitzweg"] = true;
})();
