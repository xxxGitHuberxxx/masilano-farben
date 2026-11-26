// Work metadata of path galerie1-2 (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Cleveland Museum of Art","National Gallery of Art, Washington","Art Institute of Chicago"];
  var G = [["Henri Harpignies",[["gqhplandscape2","Landschaft mit Bauernhaus","1892",0,"Cleveland Museum of Art, 2009.132: https://clevelandart.org/art/2009.132, CC0 (gemeinfrei)"]]],["Winslow Homer",[["gqhodads","Vater kommt!","1873",1,"National Gallery of Art, Washington, 2001.97.1: https://www.nga.gov/collection/art-object-page.79891.html, CC0 (gemeinfrei)"],["gqhogarden","Im Garten (Ländliches Werben)","1874",1,"National Gallery of Art, Washington, 2014.18.17: https://www.nga.gov/collection/art-object-page.164927.html, CC0 (gemeinfrei)"],["gqhofence","Auf dem Zaun","1878",1,"National Gallery of Art, Washington, 1994.59.22: https://www.nga.gov/collection/art-object-page.89666.html, CC0 (gemeinfrei)"],["gqhostile","Am Zauntritt","1878",1,"National Gallery of Art, Washington, 1994.59.23: https://www.nga.gov/collection/art-object-page.89667.html, CC0 (gemeinfrei)"],["gqhogreenhill","Der grüne Hügel","1878",1,"National Gallery of Art, Washington, 1994.59.25: https://www.nga.gov/collection/art-object-page.89669.html, CC0 (gemeinfrei)"],["gqhotynemouth","Tynemouth Priory, England","1881",2,"Art Institute of Chicago, 1933.1254: https://www.artic.edu/artworks/16837, CC0 (gemeinfrei)"],["gqhoincomingt","Auflaufende Flut, Scarboro, Maine","1883",1,"National Gallery of Art, Washington, 1975.92.8: https://www.nga.gov/collection/art-object-page.55583.html, CC0 (gemeinfrei)"],["gqhohudsonriv","Hudson River, Flösserei","1891–1892",1,"National Gallery of Art, Washington, 2014.136.171: https://www.nga.gov/collection/art-object-page.79863.html, CC0 (gemeinfrei)"],["gqhoadirondac","Führer in den Adirondacks","1892",2,"Art Institute of Chicago, 1933.1234: https://www.artic.edu/artworks/16772, CC0 (gemeinfrei)"]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["galerie1-2"] = true;
})();
