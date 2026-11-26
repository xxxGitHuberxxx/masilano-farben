// Work metadata of path velazquez (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","Metropolitan Museum of Art, New York","Cleveland Museum of Art","Museo del Prado, Madrid"];
  var G = [["Diego Velázquez",[["vzkitchen","Küchenszene","1618–1620",0],["vzemmaus","Das Abendmahl in Emmaus","1622–1623",1],["vzphilip","Philipp IV., König von Spanien","1624",1],["vzcalabazas","Bildnis des Hofnarren Calabazas","um 1631–1632",2],["vzselfman","Bildnis eines Mannes, vielleicht ein Selbstbildnis","um 1635",1],["vzpareja","Juan de Pareja","1650",1],["vzteresa","María Teresa, Infantin von Spanien","1651–1654",1],["meninas","Las Meninas","1656",3]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["velazquez"] = true;
})();
