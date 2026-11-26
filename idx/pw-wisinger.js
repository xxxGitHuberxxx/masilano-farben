// Work metadata of path wisinger (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Privatsammlung","Belvedere, Wien"];
  var G = [["Olga Wisinger-Florian",[["owherbst","Herbstwald","1880",0],["owmuehle","Mühle in Goisern","1880",0],["owmaedchen","Mädchen im Garten","1881",0],["owfeld","Feldblumen","1884",0],["owhelleb","Christrosen","1885",0],["owbauernhof","Arbeit am Bauernhof","1888",1],["owvenedig","Der Fischmarkt in Venedig","1892",0],["owkarlsbad","Frühstück in Karlsbad","1895",0],["owmohn","Blühender Mohn","um 1895",1],["owdorf","Dorfstrasse in der Sommermittagssonne","1899",0],["owprater","Praterallee im Herbst","1900",1],["owente","Ententeich","1900",1],["owweiher","Allee am Weiher","1906",1],["owstrauss","Feldblumenstrauss","1906",1],["owapfel","Blühende Apfelbäume","1906",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["wisinger"] = true;
})();
