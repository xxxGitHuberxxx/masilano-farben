// Work metadata of path bierstadt (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["National Gallery of Art, Washington","Art Institute of Chicago","Metropolitan Museum of Art, New York","Cleveland Museum of Art","Smithsonian American Art Museum, Washington"];
  var G = [["Albert Bierstadt",[["ablucerne","Der Vierwaldstättersee","1858",0],["abbrook","Bergbach","1863",1],["abmerced","Der Merced River im Yosemite-Tal","1866",2],["abstarrking","Mount Starr King, Yosemite","1866",3],["abvesuvius","Der Vesuv um Mitternacht","1868",3],["absierra","In der Sierra Nevada, Kalifornien","1868",4],["abfirtrees","Tannen und Gewitterwolken","um 1870",3],["absfbay","Die Bucht von San Francisco","1871–1873",4],["abcathedral","Cathedral Rocks, Yosemite-Tal","um 1872",4],["abnevada","Nevada Fall, Yosemite","1872–1873",2],["abcorcoran","Mount Corcoran","um 1876–1877",0],["abgates","Das Tor zum Yosemite","um 1882",4],["abmountain","Berglandschaft","1880–1890",2],["abseacove","Meeresbucht","um 1880–1890",2],["ablouise","Kanadische Rocky Mountains (Lake Louise)","um 1889",2],["abalaska","Küstengebirge in Alaska","um 1889",4]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["bierstadt"] = true;
})();
