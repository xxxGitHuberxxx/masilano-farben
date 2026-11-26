// Work metadata of path sargent (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Metropolitan Museum of Art, New York","National Gallery of Art, Washington","Art Institute of Chicago","Cleveland Museum of Art"];
  var G = [["John Singer Sargent",[["jsalhambra","Torre de los Picos, Alhambra","1868",0],["jspilatus","Blick vom Pilatus","1870",0],["jschalets","Chalets, Breithorn, Mürren","1870",0],["jstyrol","Tiroler Bildstock","1871",0],["jsfish","Aufbruch zum Fischen","1878",1],["jspailleron","Marie Buloz Pailleron","1879",1],["jsleones","Patio de los Leones, Alhambra","1879",0],["jstetouan","Innenhof, Tétouan, Marokko","1879–1880",0],["jswhitewalls","Weisse Mauern im Sonnenlicht, Marokko","1879–1880",0],["jsvenstreet","Strasse in Venedig","1882",1],["jstownsend","Miss Beatrice Townsend","1882",1],["jsmadamex","Madame X (Virginie Amélie Avegno Gautreau)","1883–1884",0],["jswhite","Margaret Stuyvesant Rutherfurd White (Mrs. Henry White)","1883",1],["jsreapers","Schnitter bei der Rast im Weizenfeld","1885",0],["jsdeirbahri","Felsen bei Deir el-Bahari, Ägypten","1890–1891",0],["jspavement","Pflaster, Kairo","1891",1],["jswatercarr","Wasserträger am Nil","1891",2],["jsaranjuez","Spanischer Mittag, Aranjuez","1903",0],["jsgreendoor","Grüne Tür, Santa Maria della Salute","um 1904",0],["jspatio","Der Patio","1908",3],["jstarragona","Terrasse und Garten in Tarragona","um 1908",2],["jstorlonia","Der Brunnen, Villa Torlonia, Frascati, Italien","1907",2],["jscorfu","Unter den Zypressen auf Korfu","1909",2],["jssimplon","Simplonpass","1911",1],["jspalmettos","Palmettopalmen","1917",0],["jsvizcaya","Terrasse, Vizcaya","1917",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["sargent"] = true;
})();
