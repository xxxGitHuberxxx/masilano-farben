// Work metadata of path modigliani (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","National Gallery of Art, Washington","Metropolitan Museum of Art, New York"];
  var G = [["Amedeo Modigliani",[["mgpompadour","Madame Pompadour","1915",0],["mglipchitz","Jacques und Berthe Lipchitz","1916",0],["mgdeleu","Monsieur Deleu","1916",1],["mgbakst","Léon Bakst","1917",1],["mgsinger","Café-Sängerin","1917",1],["mgkisling","Madame Kisling","um 1917",1],["mggreen","Mädchen in grüner Bluse","1917",1],["mgredhair","Frau mit roten Haaren","1917",1],["mgadrienne","Adrienne (Frau mit Pony)","1917",1],["mgsoutine","Chaim Soutine","1918",1],["mgsailor","Mädchen in Matrosenbluse","1918",2],["mgitalian","Die Italienerin","um 1918–1919",2],["mgroma","Roma-Frau mit Kind","1919",1]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["modigliani"] = true;
})();
