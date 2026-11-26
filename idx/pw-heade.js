// Work metadata of path heade (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Metropolitan Museum of Art, New York","National Gallery of Art, Washington","Cleveland Museum of Art","Art Institute of Chicago"];
  var G = [["Martin Johnson Heade",[["mhthunder","Herannahendes Gewitter","1859",0],["mhwineglass","Stillleben mit Weinglas","1860",1],["mhroses","Rosen und Heliotrop in einer Vase auf einer Marmorplatte","1862",1],["mhrio","Die Bucht von Rio de Janeiro","1864",1],["mhcattleya","Cattleya-Orchidee und drei Kolibris","1871",1],["mhorchid","Orchideenblüten","1873",2],["mhjudith","Point Judith, Rhode Island","1867–1868",2],["mhyork","York Harbor an der Küste von Maine","1877",3],["mhapplevase","Apfelblüten in einer Vase","1867",1],["mhapple","Apfelblüten","1873",2],["mhhumapple","Kolibri und Apfelblüten","1875",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["heade"] = true;
})();
