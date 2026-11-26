// Work metadata of path goya (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Museo del Prado, Madrid","Art Institute of Chicago","National Gallery of Art, Washington","Metropolitan Museum of Art, New York","Cleveland Museum of Art"];
  var G = [["Francisco de Goya",[["quitasol","Der Sonnenschirm","1777",0],["gywinter","Winterszene","um 1786",1],["gyram","Knabe auf einem Widder","1786–1787",1],["gyteresa","María Teresa de Borbón y Vallabriga","1783",2],["gypontejos","Die Marquesa de Pontejos","um 1786",2],["gyaltamira","Condesa de Altamira und ihre Tochter María Agustina","1787–1788",3],["gyosorio","Manuel Osorio Manrique de Zuñiga","1787–1788",3],["gymartinez","Sebastián Martínez y Pérez","1792",3],["gyambrose","Der heilige Ambrosius","um 1796–1799",4],["gynoriega","Don Antonio Noriega","1801",2],["gysureda","Bartolomé Sureda y Miserol","um 1803–1804",2],["gysuredaw","Thérèse Louise de Sureda","um 1803–1804",2],["gygarcini","Ignacio Garcini y Queralt, Brigadier der Pioniere","1804",3],["gyjosefa","Josefa de Castilla Portugal y van Asbrock de Garcini","1804",3],["gynarcisa","Narcisa Barañano Gayoso de Goicoechea","um 1805",3],["gymantilla","Junge Dame mit Mantilla und Basquiña","um 1800–1805",2],["gymaiquez","Bildnis von Isidoro Máiquez","um 1807",1],["gysabasa","Señora Sabasa García","um 1806–1811",2],["gyguye","Victor Guye","1810",2],["gypepito","José Costa y Bonells, genannt Pepito","um 1810",3],["gyromero","Bildnis von General José Manuel Romero","um 1810",1],["gycuervo","Bildnis von Don Juan Antonio Cuervo","1819",4],["gytiburcio","Tiburcio Pérez y Cuervo, der Architekt","1820",3]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["goya"] = true;
})();
