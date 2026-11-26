// Work metadata of path calame (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Standort ohne Angabe","Privatsammlung","Kunsthaus Zürich","Villa Vauban, Luxemburg","National Gallery, London"];
  var G = [["Alexandre Calame",[["acswiss","Schweizer Landschaft","um 1830",0],["acpaysage","Gebirgslandschaft","1835",1],["acvalais","Fabrik im Wallis","1840",2],["aceboul","Der Bergsturz nach dem Gewitter","1841",3],["acgrimsel","Die Grimselstrasse","um 1842",2],["acchenes","Eichen am Thunersee","1846",2],["actorrent","Bergbach im Gewitter","1848",2],["acrosenlaui","Erinnerung an Rosenlaui","1849",2],["acleman","Blick auf den Genfersee","1849",4],["acthun","Der Thunersee","1854",5],["acbrunnen","Vierwaldstättersee bei Brunnen","1856",3],["acrigi","Hütten auf der Rigi","1861",5],["acmontreux","Das Ende des Genfersees bei Montreux","1863",2]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["calame"] = true;
})();
