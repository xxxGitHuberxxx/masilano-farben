// Work metadata of path millet (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Cleveland Museum of Art","National Gallery of Art, Washington","Metropolitan Museum of Art, New York","Art Institute of Chicago","Musée d’Orsay, Paris"];
  var G = [["Jean-François Millet",[["mlmartin","Monsieur Martin","1840",0],["mllisle","Leconte de Lisle","um 1840–1841",1],["mlman","Bildnis eines Mannes","um 1845",1],["mlstorm","Flucht vor dem Gewitter","um 1846",2],["mlchickens","Frau beim Füttern der Hühner","1846–1848",3],["mlgarden","Gartenszene","1854",2],["mlrock","Hirtin auf einem Felsen","1856",2],["mlrake","Frau mit Rechen","um 1856–1857",2],["gleaners","Die Ährenleserinnen","1857",4],["angelus","Das Angelusläuten","1857–1859",4],["mlshearers","Die Schafschur","um 1857–1861",3],["mlcalf","Bauern bringen ein auf dem Feld geborenes Kalb heim","1864",3],["mlcows","Die Kühe werden heimgerufen","um 1866",1],["mlauvergne","In der Auvergne","um 1866–1869",3],["mllittle","Die kleine Hirtin","1868–1872",3],["mlkeeper","Die Hüterin der Herde","1871–1874",3],["mlhaystacks","Heuschober: Herbst","um 1874",2]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["millet"] = true;
})();
