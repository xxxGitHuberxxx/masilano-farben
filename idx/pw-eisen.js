// Work metadata of path eisen (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","Cleveland Museum of Art","Metropolitan Museum of Art, New York"];
  var G = [["Keisai Eisen",[["ketakanawa","Heimkehrende Segel bei Takanawa","um 1820–1829",0],["kefuji","Blick auf den Fuji von einem Teehaus","um 1820–1829",0],["kesparrows","Spatzen, Bambus und fallender Schnee","um 1827–1829",1],["kefishes","Schwimmende Fische mit gelben Blumen","um 1830",2],["kecarp","Karpfen, der einen Wasserfall hinaufsteigt","um 1830–1836",1],["kekoi","Karpfen","um 1842",2],["keitahana","Nr. 15: Itahana","um 1835–1836",0],["kehiratsuka","Nr. 20: Regen auf der Hiratsuka-Ebene bei Kutsukake","um 1835–1836",0],["kesuwa","Nr. 31: Blick vom Shiojiri-Pass auf den Suwa-See","um 1835–1836",0],["kenojiri","Nr. 41: Fernblick auf die Ina-Brücke bei Nojiri","um 1835–1836",0],["kewarabi","Warabi: Fähre über den Toda-Fluss","um 1838",2],["ketoeizan","Der Tempel Tōeizan, vom Benten-Schrein am Shinobazu-Teich in Edo gesehen","um 1830",0],["kesnow","Schnee am Sumida-Fluss","um 1830–1833",0],["kesnowdist","Fernblick auf Schnee am Sumida-Fluss in Edo","um 1840–1844",0],["kenihonbashi","Aufklarendes Wetter bei Nihonbashi","1843–1847",2]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["eisen"] = true;
})();
