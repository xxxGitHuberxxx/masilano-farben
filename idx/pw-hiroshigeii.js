// Work metadata of path hiroshigeii (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","Metropolitan Museum of Art, New York"];
  var G = [["Utagawa Hiroshige II",[["hzivy","Kleiner Vogel und Efeu","um 1843–1847",0],["hzwhiteeye","Brillenvogel und Kakifrüchte","um 1847–1852",0],["hzsparrow","Spatz auf einem Kamelienzweig","um 1847–1852",0],["hzparrot","Papagei auf einem Pflaumenzweig","um 1848–1852",0],["hzkingfisher","Eisvogel und Hortensie","1857",0],["hzpine","Vogel auf einem Kiefernzweig","1857",0],["hztsuten","Die Tsūten-Brücke am Tempel Tōfuku-ji in Kyōto","1859",0],["hzhase","Der Hase-Tempel in der Provinz Yamato","1859",0],["hzyoshino","Der Berg Yoshino in der Provinz Yamato","1859",0],["hzamano","Amanohashidate in der Provinz Tango","1859",0],["hztaka","Der Strand von Taka in der Provinz Tajima","1859",0],["hzhara","Hara in der Provinz Suruga","1860",0],["hzkikyo","Die Ebene Kikyōgahara in der Provinz Shinshū","1860",0],["hzmikuni","Der grosse Hafen von Mikuni in der Provinz Echizen","1860",0],["hzchuzenji","Der See Chūzenji in der Provinz Shimotsuke","1860",0],["hziris","Irisgärten in Horikiri","1861",1],["hzryogoku","Feuerwerk über Ryōgoku","1862",1],["hzmimeguri","Der Mimeguri-Damm am Sumida-Fluss","1862",0],["hzimado","Die Imado-Brücke und der Matsuchi-Hügel","1862",0],["hztakino","Takino in der Provinz Harima","1862",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["hiroshigeii"] = true;
})();
