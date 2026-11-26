// Work metadata of path diday (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Privatsammlung","Musée des beaux-arts, La Chaux-de-Fonds","Kunsthaus Zürich"];
  var G = [["François Diday",[["fdnapoli","Neapel mit dem Castel dell’Ovo und dem Vesuv","1824",0],["fdbrienz","Haus am Brienzersee mit Schiff und Enten","1832",0],["fdorage","Gewitter über dem Genfersee","1839",1],["fdrosenlaui","Rosenlaui","1841",0],["fdalpsee","Alpenlandschaft am See","1852",0],["fdevian","Ufer des Genfersees bei Evian, Morgenbeleuchtung","1852",2],["fdhandeck","Die Aare an der Handeck","1854",2],["fdbrunnen","Vierwaldstättersee bei Brunnen mit Seelisberg und Rütli","1855",0],["fdriviere","Fluss mit Bäumen, Brücke und Ziegen","1864",0],["fdmuerren","Blick von Mürren gegen die Ebnefluh","1867",0],["fdbouveret","Abend bei Le Bouveret","1871",0],["fdaxen","Vierwaldstättersee und Uri-Rotstock vom Axenberg","um 1874",0],["fdmontblanc","Der Mont-Blanc und die Arve von Sallanches aus","vor 1877",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["diday"] = true;
})();
