// Work metadata of path cole (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Art Institute of Chicago","Metropolitan Museum of Art, New York","Cleveland Museum of Art"];
  var G = [["Thomas Cole",[["tcsunrise","Sonnenaufgang in den Catskills","1826",0],["tcniagara","Ferner Blick auf die Niagarafälle","1830",1],["tctivoli","Ansicht bei Tivoli am Morgen","1832",2],["tcgoblet","Der Pokal des Titanen","1833",2],["tcholyokesketch","Skizze für die Aussicht vom Mount Holyoke","1836",2],["tcoxbow","Aussicht vom Mount Holyoke nach einem Gewitter – Der Oxbow","1836",2],["tccatskill","Am Catskill im Frühherbst","1836–1837",2],["tcflorence","Ansicht von Florenz","1837",3],["tcclouds","Wolken","um 1838",2],["tcschroon","Der Schroon Mountain nach einem Sturm","1838",3],["tccoast","Italienische Küste mit verfallenem Turm","1838",0],["tcnotch","Der Gebirgspass „The Notch“ in den White Mountains","1839",0],["tcnewengland","Landschaft in Neuengland","1839",1],["tcchildhood","Die Reise des Lebens: Kindheit","1842",0],["tcyouth","Die Reise des Lebens: Jugend","1842",0],["tccreek","Studie für „Catskill Creek“","um 1844–1845",0],["tcford","Die Furt in den Bergen","1846",2]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["cole"] = true;
})();
