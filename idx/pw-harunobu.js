// Work metadata of path harunobu (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Art Institute of Chicago","Metropolitan Museum of Art, New York","Cleveland Museum of Art"];
  var G = [["Suzuki Harunobu",[["szkamezo","Der Schauspieler Ichimura Kamezō I.","1760",0],["szkikunojo","Der Schauspieler Segawa Kikunojō II. als Yamabuki","1763",0],["szkarasaki","Nachtregen bei Karasaki","Anfang der 1760er Jahre",0],["szseta","Abendrot bei Seta","Anfang der 1760er Jahre",0],["szkogo","Kogō no Tsubone und Minamoto no Nakakuni","Anfang der 1760er Jahre",0],["szpoet","Chinesischer Dichter","um 1761–1765",0],["szshower","Junge Frau in einem Sommerregen","1765",0],["szloom","Junge Frau am Webstuhl","1765",0],["szwater","Ein Wasserverkäufer","1765",0],["szlotus","Beim Sammeln von Lotosblumen","1765",0],["szmaple","Herbstliches Ahornlaub wird verbrannt","1765",0],["szfan","Klarer Tag beim Fächer","1765",0],["szikebana","Blumengesteck im Ikenobō-Stil","um 1765",1],["szbamboo","Am Bambushain vorbei","1766",0],["szbaby","Frau und Mädchen unterhalten ein Kleinkind","1767",0],["szkagura","Die Kagura-Tänzerin","um 1766",0],["szkiyomizu","Junge Frau auf dem Balkon des Kiyomizu-Tempels","um 1766",0],["szcards","Junge Frauen beim Gedichtkartenspiel","um 1766–1767",0],["szwillow","Frau läuft im Wind an einer Weide vorbei","1766 oder 1767",2],["szfireflies","Auf der Suche nach Glühwürmchen","1768",0],["szide","Der Juwelenfluss bei Ide","um 1768",1],["szchofu","Der Juwelenfluss bei Chōfu","um 1768",1],["szgeese","Wildgänse über dem Sumida-Fluss","um 1769",1]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["harunobu"] = true;
})();
