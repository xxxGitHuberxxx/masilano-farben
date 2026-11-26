// Work metadata of path corot (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Metropolitan Museum of Art, New York","Cleveland Museum of Art","Art Institute of Chicago"];
  var G = [["Camille Corot",[["jcpeasant","Italienischer Bauernjunge","1825–1827",0],["jcbartolomeo","Die Insel und Brücke San Bartolomeo, Rom","1825–1828",0],["jcterni","Wasserfall bei Terni","1826",1],["jcalbano","Albaner See und Castel Gandolfo","1826–1827",1],["jccervara","La Cervara, die römische Campagna","um 1830–1831",2],["jchonfleur","Honfleur: Kalvarienberg","um 1830",1],["jclemaistre","Toussaint Lemaistre","1833",1],["jcmacon","Brücke über die Saône bei Mâcon","1834",0],["jcgenoa","Ansicht von Genua","1834",3],["jcvolterra","Ansicht bei Volterra","1838",0],["jceel","Die Aalsammler","1860–1865",0],["jccurious","Das neugierige Mädchen","1860–1864",1],["jcagostina","Agostina","1866",0],["jcreadstudio","Lesende im Atelier","um 1868",0],["jcreading","Eine lesende Frau","1869–1870",1],["jcinterrupted","Unterbrochene Lektüre","um 1870",3],["jcsibylle","Sibylle","um 1870",1],["jcwillows","Weiden und Bauernhof in Sainte-Catherine-lès-Arras","1871",2],["jcarleux","Arleux-Palluel, die Brücke der Verabredungen","1871–1872",3],["jccoubron","Der Wald von Coubron","1872",0],["jcstumpf","Madame Stumpf und ihre Tochter","1872",0],["jcetretat","Strand bei Étretat","um 1872",0],["jcmorieri","Italienerin (La Morieri)","um 1872",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["corot"] = true;
})();
