// Work metadata of path koller (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Kunsthaus Zürich","Privatsammlung","Standort ohne Angabe","Museum Oskar Reinhart, Winterthur","Bundesamt für Kultur, Bern"];
  var G = [["Rudolf Koller",[["rkschimmel","Schimmel im Stall","1848",0],["rkscheu","Scheuende Pferde bei aufziehendem Gewitter","1849",1],["rkkuhwald","Kuh im Wald","1854",1],["rkheuernte","Heuernte bei drohendem Gewitter","1854",2],["rksusten","Gletscher am Sustenpass","1856",0],["rkrichisau","Die Richisau","1858",3],["rkmittag","Mittagsruhe","1860",0],["rkwaesche","Kühe und Wäscherin am Bach","1865–1867",1],["rktraenke","Viehtränke am See bei Sonnenuntergang","1868",1],["rkanzio","Ziegenherde am Strand von Porto d’Anzio","1869",3],["rkhorn","Kühe am Zürichhorn","1869",1],["rkgotthard","Die Gotthardpost","1873",0],["rkalp","Alpaufzug","1881",1],["rkschlitten","Schlittenfahrt","1892",4],["rkabend","Abend am Zürichhorn","1893",1]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["koller"] = true;
})();
