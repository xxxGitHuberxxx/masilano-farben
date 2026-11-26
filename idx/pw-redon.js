// Work metadata of path redon (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Art Institute of Chicago","Metropolitan Museum of Art, New York","Cleveland Museum of Art"];
  var G = [["Odilon Redon",[["odvillage","Dorf am Meer in der Bretagne","um 1880",0],["odbreton","Bretonisches Dorf","um 1890",0],["odsita","Sita","um 1893",1],["odbouquet","Blumenstrauss","um 1900–1905",2],["odwild","Wildblumen","um 1905",0],["odpansies","Stiefmütterchen","um 1905",0],["odetruscan","Etruskische Vase mit Blumen","1900–1910",2],["odstilllife","Stillleben mit Blumen","1905",1],["odvase05","Blumenvase","um 1905",3],["odpink","Blumenvase (rosa Hintergrund)","um 1906",2],["odviolette","Violette Heymann","1910",3],["odflowers10","Blumen in einer Vase","um 1910",0],["odlargevase","Grosse Vase mit Blumen","um 1912",0],["odbutterflies","Fünf Schmetterlinge","um 1912",0],["odvase16","Blumenvase","1916",3]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["redon"] = true;
})();
