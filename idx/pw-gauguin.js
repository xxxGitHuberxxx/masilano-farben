// Work metadata of path gauguin (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","National Gallery of Art, Washington","Musée d’Orsay, Paris","Cleveland Museum of Art","Metropolitan Museum of Art, New York"];
  var G = [["Paul Gauguin",[["ggtankard","Stillleben: Holzkrug und Metallkanne","1880",0],["ggpeonies","Stillleben mit Pfingstrosen","1884",1],["gggleaner","Eine bretonische Ährenleserin","1886",1],["ggkohler","Madame Alexandre Kohler","1887–1888",1],["ggbrittany","Bretonische Landschaft","1888",1],["ggdancing","Bretonische Mädchen beim Tanz, Pont-Aven","1888",1],["ggcarriere","Selbstbildnis, Carrière gewidmet","1888 oder 1889",1],["ggarles","Arlesierinnen (Mistral)","1888",0],["ggselfport","Selbstbildnis","1889",1],["gghaystacks","Heuhaufen in der Bretagne","1890",1],["ggpouldu","Landschaft bei Le Pouldu","1890",1],["ggcezanne","Frau vor einem Stillleben von Cézanne","1890",0],["arearea","Arearea (Fröhlichkeit)","1892",2],["ggraaurahi","Te raau rahi (Der grosse Baum)","1891",0],["gglargetree","Der grosse Baum","1891",3],["ggtahland","Tahitianische Landschaft","1892",4],["ggburao","Te burao (Der Hibiskusbaum)","1892",0],["ggsiesta","Die Siesta","um 1892–1894",4],["gghut","Tahitianische Hütte","1891–1893",0],["ggfarm","Ein Bauernhof in der Bretagne","um 1894",4],["ggteapot","Stillleben mit Teekanne und Früchten","1896",4],["ggpolynes","Polynesische Frau mit Kindern","1901",0],["ggtwowomen","Zwei Frauen","1901 oder 1902",4],["ggfan","Entwurf für einen Fächer mit Landschaft und einer Statue der Göttin Hina","1900–1903",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["gauguin"] = true;
})();
