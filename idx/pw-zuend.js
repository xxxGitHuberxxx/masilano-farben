// Work metadata of path zuend (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Kunsthaus Zürich","Privatsammlung","Kunstmuseum Basel","Metropolitan Museum of Art, New York","Kunstmuseum Luzern"];
  var G = [["Robert Zünd",[["rzpilatus","Der Pilatus von Westen","1851",0],["rzvierwald","Abend am Vierwaldstättersee","1851",1],["rzernte","Die Ernte","1860",2],["rzbaeume","Bäume","1865",1],["rzhirtenhof","Hirtenhof","undatiert",3],["rzsempach","Schlachtkapelle von Sempach","1866",0],["rzseesemp","Sempachersee","um 1860",0],["rzeggen","Bauern mit Ochsengespann beim Eggen","1868",1],["rzkorn","Kornfeld mit Eichen","1875",1],["rzreuss","Die Reuss mit Kloster Rathausen","vor 1909",1],["rzeichen","Eichenwald","1882",0],["rzbuchen","Buchenwald","1886–1887",4],["rzschafe","Abendlandschaft mit Schafherde","1889–1891",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["zuend"] = true;
})();
