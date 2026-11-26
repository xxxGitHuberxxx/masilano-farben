// Work metadata of path galerie1-9 (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Metropolitan Museum of Art, New York","Art Institute of Chicago"];
  var G = [["Utagawa Hiroshige II",[["gqh2dutchship2","Holländisches Schiff vor Anker vor der Küste von Tsushima","1859",0,"Metropolitan Museum of Art, New York, 2007.49.137: https://www.metmuseum.org/art/collection/search/73423, CC0 (gemeinfrei)"]]],["Totoya Hokkei",[["gqhkcrossingy","Überquerung des Gelben Flusses","um 1830–1844",1,"Art Institute of Chicago, 1928.1102: https://www.artic.edu/artworks/89544, CC0 (gemeinfrei)"]]],["John Frederick Kensett",[["gqksrockycoas","Felsige Küste","um 1860",1,"Art Institute of Chicago, 1996.444: https://www.artic.edu/artworks/145805, CC0 (gemeinfrei)"]]],["Johan Barthold Jongkind",[["gqjkhonfleur","Honfleur","1865",0,"Metropolitan Museum of Art, New York, 16.39: https://www.metmuseum.org/art/collection/search/436785, CC0 (gemeinfrei)"]]],["Totoya Hokkei",[["gqhkinlandsea","Die Inlandsee bei Tosa","um 1820",0,"Metropolitan Museum of Art, New York, JP1146: https://www.metmuseum.org/art/collection/search/44978, CC0 (gemeinfrei)"]]],["Utagawa Hiroshige II",[["gqh2niigata","Ansicht von Niigata, Provinz Echigo","1859",1,"Art Institute of Chicago, 1990.607.44: https://www.artic.edu/artworks/196723, CC0 (gemeinfrei)"],["gqh2tempohill","Der Tempo-Hügel in Osaka","1859",1,"Art Institute of Chicago, 1990.607.154: https://www.artic.edu/artworks/196833, CC0 (gemeinfrei)"]]],["Totoya Hokkei",[["gqhkclimbing","Bergbesteigung in Liuzhou","um 1830–1844",1,"Art Institute of Chicago, 1928.1104: https://www.artic.edu/artworks/89550, CC0 (gemeinfrei)"]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["galerie1-9"] = true;
})();
