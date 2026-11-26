// Work metadata of path kroyer (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Statens Museum for Kunst, Kopenhagen","Metropolitan Museum of Art, New York"];
  var G = [["P.S. Krøyer",[["pssmithy","Eine Schmiede in Hornbæk","1873",0],["psfisher","Bildnis eines Fischers aus Hornbæk","1875",0],["psherring","Fischer aus Hornbæk beim Heringsfang","1877",0],["pssardine","Eine Sardinenfabrik in Concarneau","1879",0],["psguillou","Bildnis des französischen Malers Alfred Guillou","1879",0],["psseascape","Seestück, Skagen","1882",0],["psmeldahl","Bildnis des Architekten F. Meldahl","1882",0],["pstuxen","Bildnis von Frederikke Tuxen","1882",1],["psbeach","Fischer am Strand von Skagen","1883",0],["psfoundry","Die Eisengiesserei von Burmeister & Wain","1885",0],["psduet","Ein Duett","1887",0],["psthreshing","Dreschen in den Abruzzen, Cività d’Antino","1890",0],["pstorello","Eine Strasse in Torello, Italien","1890",0],["pscatarinella","Kopf eines Mädchens aus Cività d’Antino in Tracht („Catarinella“)","1890",1],["psrosenorn","Baron Otto Ditlev Rosenørn-Lehn","1891",0],["psevening","Abend in Skagen","1893",0],["psschandorph","Der Schriftsteller Sophus Schandorph","1895",0],["pssteenstrup","Der Zoologe Japetus Steenstrup hält einen Vortrag","1895",0],["pscasse","Bildnis von S.A. Casse, geborene Engelbreth","1895",0],["psgroup","Bildnisgruppe","1896",0],["pshelga","Ein kleines Mädchen, Helga Melchior, in einem langen Kleid","1897",0],["psmoonlight","Der Strand von Skagen im Mondschein","1899",0],["psraben","Bildnis der Gräfin Lillie Suzanne Raben-Levetzau","1899",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["kroyer"] = true;
})();
