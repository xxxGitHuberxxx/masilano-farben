// Work metadata of path boudin (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Cleveland Museum of Art","Metropolitan Museum of Art, New York"];
  var G = [["Eugène Boudin",[["ebfestival","Fest im Hafen von Honfleur","1858",0],["ebopensky","Meerbild mit offenem Himmel","1860",1],["ebbeach62","Strand bei Trouville","1862",0],["ebtrouville63","Am Strand von Trouville","1863",2],["ebjetty","Mole und Kai in Trouville","1863",0],["ebtrouville63b","Strandszene in Trouville","1863",0],["ebdieppe","Am Strand, Dieppe","1864",2],["ebconcert","Konzert im Casino von Deauville","1865",0],["ebfourwomen","Vier Frauen in Trouville","1865",0],["ebconversation","Gespräch am Strand","1865",0],["ebdogs","Spaziergang am Strand mit zwei Hunden","1866",0],["ebbrittany","Küste der Bretagne","1870",0],["ebbordeaux","Blick auf Bordeaux vom Quai des Chartrons","1874",1],["ebfair","Markt in der Bretagne","1874",0],["ebscheveningen","Ebbe in Scheveningen","1875",0],["ebbeach77","Der Strand","1877",0],["ebberck","Frauen am Strand von Berck","1881",0],["ebhavreentry","Hafeneinfahrt von Le Havre","1883",0],["ebhavre","Le Havre","1883",0],["ebtrouville87","Am Strand, Trouville","1887",0],["ebhavreships","Schiffe und Segelboote verlassen Le Havre","1887",0],["ebvalery","Blick auf den Hafen von Saint-Valéry-sur-Somme","1891",1],["ebbeaulieu","Beaulieu: Die Bucht von Fourmis","1892",2],["ebbeach94","Am Strand","1894",0],["ebetretat","Wäscherinnen am Strand von Étretat","1894",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["boudin"] = true;
})();
