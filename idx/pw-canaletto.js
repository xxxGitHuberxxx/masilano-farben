// Work metadata of path canaletto (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Metropolitan Museum of Art, New York","Museum of Fine Arts, Houston","National Gallery of Art, Washington","Yale Center for British Art, New Haven"];
  var G = [["Giovanni Antonio Canal (Canaletto)",[["caspiazza","Der Markusplatz","um 1727–1729",0],["canaletto","Einfahrt in den Canal Grande","um 1730",1],["carialto","Der Canal Grande mit Blick nach Süden zur Rialtobrücke","um 1730–1739",0],["cazobenigo","Campo Santa Maria Zobenigo","um 1730–1739",0],["caangelo","Campo Sant’Angelo","um 1730–1739",0],["caportello","Die Porta Portello in Padua","um 1741–1742",2],["casanmarco","Der Markusplatz in Venedig","1742–1744",2],["camolo","Die Einfahrt in den Canal Grande von der Mole aus","1742–1744",2],["cawestbridge","Westminster Bridge mit dem Festzug des Lord Mayor auf der Themse","1747",3],["cawarwick","Warwick Castle","1748",0],["cacity","Die City von der Terrasse des Somerset House aus","um 1750",3],["cawestminster","Westminster von der Terrasse des Somerset House aus","um 1750",3],["capaul","St Paul’s Cathedral","um 1754",3],["cacolumn","Englische Phantasielandschaft mit einer Säule","um 1754",2],["capalace","Englische Phantasielandschaft mit einem Palast","um 1754",2],["cawalton","Die alte Brücke von Walton","1755",3]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["canaletto"] = true;
})();
