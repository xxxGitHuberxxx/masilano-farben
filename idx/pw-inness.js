// Work metadata of path inness (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","Cleveland Museum of Art","Metropolitan Museum of Art, New York","National Gallery of Art, Washington"];
  var G = [["George Inness",[["incrossing","Die Furt","1848",0],["inoldmill","Die alte Mühle","1849",0],["inwoodchop","Der Holzfäller","1849",1],["indurham","Durham, Connecticut","1858",1],["inwatergap","Delaware Water Gap","1861",2],["inwintersky","Ein Winterhimmel","1866",1],["insummercats","Sommer in den Catskills","1867",0],["inharvestdel","Ernte im Delaware-Tal","1867",3],["incatskill","Die Catskill Mountains","1870",0],["inalban","Aufziehendes Gewitter über den Albaner Bergen","1871",1],["incampagna","Über die Campagna","1872",2],["intivoli","Olivenbäume bei Tivoli","1873",2],["inbarberini","Pinienhain der Villa Barberini","1876",2],["inetretat","Hang bei Étretat","1876",3],["infleecy","Schäfchenwolken","1881",1],["insisters","Die Schwestern","1882",0],["inmillpond","Der Mühlteich","1889",0],["intarpon","Früher Morgen, Tarpon Springs","1892",0],["insunnyautumn","Sonniger Herbsttag","1892",1],["inshower","Nach einem Sommerregen","1894",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["inness"] = true;
})();
