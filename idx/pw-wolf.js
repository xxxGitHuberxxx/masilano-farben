// Work metadata of path wolf (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Privatsammlung","Standort ohne Angabe","Kunst Museum Winterthur","Kunstmuseum Basel","Kunsthaus Zürich","National Gallery, London"];
  var G = [["Caspar Wolf",[["cwruine","Felsige Landschaft mit Jäger und Burgruine","1771",0],["cwbauernhof","Landschaft mit Bauernhof","1773",1],["cwgletscher","Der Untere Grindelwaldgletscher","1774",2],["cwsteg","Holzsteg über die Lütschine","1774",2],["cwlauteraar","Der Lauteraargletscher","1776",3],["cwhoehle","Felshöhle mit Wasserfall","1776",4],["cwseelisberg","Blick vom Seelisberg auf den Urnersee","1777",0],["cwmuota","Brücke über die Muota bei Schwyz","1778",0],["cwrhone","Die Rhone bei Gletsch","1778",0],["cwgelten","Der Geltenschuss im Lauenental","um 1778",5],["cwseeberg","Blick über den Seebergsee","um 1778",0],["cwbechburg","Schloss Neu-Bechburg bei Oensingen","1778",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["wolf"] = true;
})();
