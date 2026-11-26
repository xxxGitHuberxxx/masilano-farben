// Work metadata of path seurat (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Metropolitan Museum of Art, New York","National Gallery of Art, Washington","Art Institute of Chicago","The Art Institute of Chicago","The Museum of Modern Art (MoMA), New York"];
  var G = [["Georges Seurat",[["sesaintouen","Landschaft bei Saint-Ouen","1878–1879",0],["separapet","Mann an einer Brüstung","um 1881",0],["sepontaubert","Der Wald bei Pontaubert","1881",0],["semower","Der Mäher","1881–1882",0],["sehaymakers","Heuerinnen in Montfermeil","um 1882",1],["sehoe","Bauer mit Hacke","um 1882",1],["sestonebreaker","Der Steinklopfer","um 1882",1],["sehaystacks","Heuhaufen","um 1882",1],["segardener","Der Gärtner","1882–1883",0],["sewateringcan","Die Giesskanne – Garten in Le Raincy","um 1883",1],["sesummer","Sommerlandschaft","1883",1],["seseine","Blick auf die Seine","1882–1883",0],["sefigures","Figuren in einer Landschaft","um 1883",1],["sejattestudy","Studie für «Ein Sonntagnachmittag auf der Insel La Grande Jatte»","1884",0],["sejattewood","Studie für «Ein Sonntagnachmittag auf der Insel La Grande Jatte» (auf Holz)","1884",0],["sejattesketch","Ölskizze für «Ein Sonntagnachmittag auf der Insel La Grande Jatte»","1884",2],["sejattenga","Studie für «La Grande Jatte»","1884–1885",1],["sejattefigures","Figurenstudie für «La Grande Jatte»","1884–1885",1],["jatte","Ein Sonntagnachmittag auf der Insel La Grande Jatte","1884–1886",3],["sehonfleur","Der Leuchtturm von Honfleur","1886",1],["seportenbessin","Meeresküste bei Port-en-Bessin, Normandie","1888",1],["seseascape","Meer bei Gravelines","1890",1],["gravelines","Der Kanal von Gravelines am Abend","1890",4],["segrayweather","Graues Wetter, Grande Jatte","um 1886–1888",0],["secircus","Zirkusparade","1887–1888",0]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["seurat"] = true;
})();
