// Work metadata of path blau (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Privatsammlung","Standort ohne Angabe","Belvedere, Wien"];
  var G = [["Tina Blau",[["tbbauernhaus","Bauernhaus","1868",0],["tbhaslau","Ansicht von Haslau","1872",1],["tbamsterdam","Gracht in Amsterdam","1875",1],["tbheustadl","Heustadlwasser im Prater","1877",1],["tbtitus","Römisches Capriccio mit dem Titusbogen","1879",0],["tbfruehling","Frühling im Prater","1882",2],["tbtuileries","Aus den Tuilerien – Sonniger Tag","1883",2],["tbpalatin","Spätnachmittag am Palatin","1885",2],["tbrotunde","Im Prater bei der Rotunde","1885",2],["tbmalcesine","Malcesine","1894",0],["tbschladming","Partie aus Schladming","1902",0],["tbkrieau","Krieau im Prater","1902",2],["tbatelier","Das Atelier im Prater","1907",1],["tbfraneker","Kanal in Franeker","1908",0],["tbbirken","Birken bei der Rotunde","1914",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["blau"] = true;
})();
