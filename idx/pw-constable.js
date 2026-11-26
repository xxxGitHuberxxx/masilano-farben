// Work metadata of path constable (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Art Institute of Chicago","Metropolitan Museum of Art, New York","The National Gallery, London","Cleveland Museum of Art"];
  var G = [["John Constable",[["cnepsom","Die Heide bei Epsom","1806",0],["cncottages","Landschaft mit Häusern","1809–1810",1],["cnstoke","Stoke-by-Nayland","um 1810–1811",2],["cnwivenhoe","Wivenhoe Park, Essex","1816",0],["cnpulham","Mrs. James Pulham","1818",2],["cnwhitehorse","Das weisse Pferd","1818–1819",0],["cnsalisbury","Die Kathedrale von Salisbury von Lower Marsh Close aus","1820",0],["haywain","Der Heuwagen","1821",3],["cnclouds","Wolkenstudie: stürmischer Sonnenuntergang","1821–1822",0],["cnyarmouth","Die Mole von Yarmouth","1822",0],["cnlock","Landschaft (Die Schleuse)","um 1820–1825",1],["cnbishop","Die Kathedrale von Salisbury vom Garten des Bischofs aus","um 1825",2],["cnbranchhill","Der Teich von Branch Hill, Hampstead","1828",4],["cncloudwc","Wolkenstudie","1830–1835",2],["cnmill","Mühle bei Colchester","1833",2],["cnstoke36","Stoke-by-Nayland","1836",1]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["constable"] = true;
})();
