// Work metadata of path skovgaard (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Statens Museum for Kunst, Kopenhagen"];
  var G = [["P.C. Skovgaard",[["pchoejerup","Højerup Kirche auf dem Kliff von Stevns","1842",0],["pcraageleje","Der Strand bei Rågeleje","1843",0],["pcoats","Haferfeld bei Vejby","1843",0],["pcdronning","Die Nordküste Seelands bei Dronningmølle","1844",0],["pcmoeller","Landschaft bei Kongens Møller im Nachmittagslicht","1844",0],["pcbeldringe","Blick auf das Gut Beldringe","1847",0],["pclaesoe","Birken auf Læsø nach dem Regen","1849",0],["pcvognserup","Landstrasse bei Gut Vognserup","1849",0],["pcvenice","Der Canal Grande in Venedig","1854",0],["pcnysoe","Auf der Gartentreppe von Nysø","1855",0],["pcmaywood","Buchenwald im Mai bei Iselingen","1857",0],["pccivitella","Felsige Hügel bei Civitella","1869",0],["pcmeadow","Die Wiesen bei Dortheaslyst","1871–1875",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["skovgaard"] = true;
})();
