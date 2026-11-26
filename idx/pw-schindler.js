// Work metadata of path schindler (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Belvedere, Wien"];
  var G = [["Emil Jakob Schindler",[["sjramsau","Gebirgsbach in der Ramsau","1868",0],["sjdampfer","Dampfschiffstation an der Donau gegenüber Kaisermühlen","um 1871",0],["sjholland","Weidendes Vieh in Holland","1875",0],["sjschafe","Dorflandschaft mit Schafen","1875",0],["sjkrieau","Motiv aus dem Prater – Krieau","um 1873",0],["sjhacking","Hackinger Au","1880",0],["sjlundenburg","Moorlandschaft bei Lundenburg","1882",0],["sjfruehling","Frühling in Hacking","1883",0],["sjgosau","Die Gosaumühle bei Ischl","1883",0],["sjmaerz","Märzstimmung – Vorfrühling im Wienerwald","1884",0],["sjsaege","Sägemühle im Morgennebel","1886",0],["sjkorfu","Das Ionische Meer bei Korfu","1888",0],["sjruebe","Kohlrübenfeld","1888",0],["sjernte","Erntemonat in Plankenberg","1890",0],["sjsylt","Meeresküste von Sylt","1892",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["schindler"] = true;
})();
