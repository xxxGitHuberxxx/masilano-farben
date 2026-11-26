// Work metadata of path galerie3-8 (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Statens Museum for Kunst, Kopenhagen"];
  var G = [["Janus la Cour",[["gqjlgardensvi","Die Gärten der Villa d’Este, Tivoli","1899",0,"Statens Museum for Kunst, Kopenhagen, KMS1657: https://open.smk.dk/artwork/image/KMS1657, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"]]],["Constantin Hansen",[["gqcngardensvi","In den Gärten der Villa Albani, Rom","1841",0,"Statens Museum for Kunst, Kopenhagen, KMS3843a: https://open.smk.dk/artwork/image/KMS3843a, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"],["gqcnkronborgc","Schloss Kronborg","1834",0,"Statens Museum for Kunst, Kopenhagen, KMS6815: https://open.smk.dk/artwork/image/KMS6815, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"],["gqcnpiazzadel","Die Piazza della Bocca della Verità mit dem sogenannten Vestatempel in Rom","1837",0,"Statens Museum for Kunst, Kopenhagen, KMS1072: https://open.smk.dk/artwork/image/KMS1072, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"]]],["Peter Hansen",[["gqpnbygevejrk","Schauerwetter. Katterød Rev","1901",0,"Statens Museum for Kunst, Kopenhagen, KMS4435: https://open.smk.dk/artwork/image/KMS4435, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"],["gqpnrugtraver","Roggen in Hocken. Katterød Rev, im Hintergrund Bjørnø","1901",0,"Statens Museum for Kunst, Kopenhagen, KKS11829: https://open.smk.dk/artwork/image/KKS11829, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"]]],["Niels Skovgaard",[["gqnssprucetre","Fichte auf einer Sommerweide. Norwegen","1914",0,"Statens Museum for Kunst, Kopenhagen, KMS3312: https://open.smk.dk/artwork/image/KMS3312, Public Domain (SMK Open, Public Domain Mark 1.0) (gemeinfrei)"]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3 && r[3] != null) o.museum = M[r[3]]; if (r.length > 4) o.source = r[4]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["galerie3-8"] = true;
})();
