// Work metadata of path morisot (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Metropolitan Museum of Art, New York","Art Institute of Chicago","Musée d’Orsay, Paris","Cleveland Museum of Art"];
  var G = [["Berthe Morisot",[["mobench","Die Schwester der Künstlerin, Edma, auf einer Bank","1864",0],["mosisters","Die Schwestern","1869",0],["mowindow","Die Schwester der Künstlerin am Fenster","1869",0],["momother","Die Mutter und die Schwester der Künstlerin","1869–1870",0],["mopeonies","Pfingstrosen","um 1869",0],["mopink","Das rosa Kleid","um 1870",1],["molorient","Der Hafen von Lorient","1869",0],["mobalcony","Auf dem Balkon","1871–1872",2],["moedma","Edma mit ihrer Tochter Jeanne","1872",0],["moforestedge","Am Waldrand (Edma und Jeanne)","um 1872",0],["cradle","Die Wiege","1872",3],["moreading","Die Lesende","1873",4],["molaundry","Wäsche zum Trocknen aufhängen","1875",0],["moriesener","Mademoiselle Louise Riesener mit Hut","um 1877–1880",4],["mogarden","Frau in einem Garten","1882–1883",2],["moknitting","Junge Frau beim Stricken","um 1883",1],["mostrawhat","Junge Frau mit Strohhut","1884",0],["moavenue","Frau auf einer Bank an der Avenue du Bois","1885",1],["mocompiegne","Der Wald von Compiègne","1885",2],["mosewing","Nähen am Fenster","um 1885",4],["moself","Selbstbildnis","um 1885",2],["modining","Im Esszimmer","1886",0],["mogeese","Mädchen in einem Boot mit Gänsen","um 1889",0],["moparakeet","Die Tochter der Künstlerin mit einem Sittich","1890",0],["mobasket","Junges Mädchen mit Korb","1891",2],["moapron","Junges Mädchen mit Schürze","1891",0],["mogirlhat","Junges Mädchen mit Hut","1892",2]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["morisot"] = true;
})();
