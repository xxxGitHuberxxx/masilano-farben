// Work metadata of path galerie1-8 (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","Metropolitan Museum of Art, New York","National Gallery of Art, Washington"];
  var G = [["Totoya Hokkei",[["gqhkmountaino","Berglandschaft mit einem Bach","1827",0,"Art Institute of Chicago, 1925.3004: https://www.artic.edu/artworks/23773, CC0 (gemeinfrei)"],["gqhkmountsatt","Der Berg Satta in der Provinz Suruga","um 1830–1834",0,"Art Institute of Chicago, 1941.17: https://www.artic.edu/artworks/40576, CC0 (gemeinfrei)"],["gqhkillustrat","Illustration zu einem chinesischen Gedicht","um 1830–1844",0,"Art Institute of Chicago, 1925.3681: https://www.artic.edu/artworks/26343, CC0 (gemeinfrei)"],["gqhkclearautu","Klarer Herbsthimmel über einem Bergtempel","um 1830–1844",0,"Art Institute of Chicago, 1928.1103: https://www.artic.edu/artworks/89547, CC0 (gemeinfrei)"],["gqhkwarblerca","Grasmücke und Kamelie","um 1815–1820",1,"Metropolitan Museum of Art, New York, JP1811: https://www.metmuseum.org/art/collection/search/54399, CC0 (gemeinfrei)"]]],["Shibata Zeshin",[["gqzsmorninggl","Prunkwinden","um 1860",1,"Metropolitan Museum of Art, New York, JP3170: https://www.metmuseum.org/art/collection/search/56723, CC0 (gemeinfrei)"]]],["Francesco Guardi",[["gqgdfancifulc","Phantasieansicht der Engelsburg in Rom","um 1785",2,"National Gallery of Art, Washington, 1956.9.2: https://www.nga.gov/collection/art-object-page.43596.html, CC0 (gemeinfrei)"]]],["Utagawa Hiroshige II",[["gqh2mounttate","Ansicht des Berges Tate, Provinz Etchu","1859",0,"Art Institute of Chicago, 1990.607.165: https://www.artic.edu/artworks/196844, CC0 (gemeinfrei)"],["gqh2gionfesti","Das Gion-Fest in Kyoto","1859",0,"Art Institute of Chicago, 1990.607.168: https://www.artic.edu/artworks/196847, CC0 (gemeinfrei)"],["gqh2nogeyokoh","Noge in Yokohama, Provinz Bushu","1859",0,"Art Institute of Chicago, 1990.607.103: https://www.artic.edu/artworks/196782, CC0 (gemeinfrei)"]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["galerie1-8"] = true;
})();
