// Work metadata of path delacroix (v10.43b), part of path-works-late.js, for single works at start.
(function () {
  var M = ["Metropolitan Museum of Art, New York","National Gallery of Art, Washington","Cleveland Museum of Art","Art Institute of Chicago","Musée du Louvre, Paris"];
  var G = [["Eugène Delacroix",[["dctroupe","Schauspieltruppe unterwegs","1818",0],["dchorse","Pferd an einem Pfahl","um 1820",1],["dcindian","Zwei Studien eines stehenden Mannes aus Kalkutta","um 1823–1824",1],["dcgoetz","Götz von Berlichingen wird von seinem Pagen Georg gerüstet","1826–1827",0],["dcpierret","Marguerite-Juliette Pierret","um 1827",2],["dcmantes","Die alte Brücke von Mantes","um 1827",3],["liberty","Die Freiheit führt das Volk","1830",4],["dccouple","Marokkanisches Paar auf seiner Terrasse","1832",0],["dcsaada","Saada, die Frau von Abraham Ben-Chimol, und ihre Tochter Préciada","1832",0],["dchorsemen","Drei arabische Reiter bei einem Lager","1832–1837",0],["dctiles","Wand mit spanischen Fliesen","1832",0],["dcmanola","Junge Spanierin im Kostüm einer Manola","1832",3],["dcwater","Junge schwarze Frau beim Wasserholen","1832",2],["dcboutraye","Mademoiselle Alexandrine-Julie de la Boutraye","um 1832–1834",2],["dcrider","Der türkische Reiter","um 1834",3],["dcriesener","Madame Henri François Riesener","1835",0],["dccolumbus","Christoph Kolumbus und sein Sohn in La Rábida","1838",1],["dcregnier","Mathurin Régnier","um 1846",0],["dcgarden","George Sands Garten in Nohant","um 1842–1843",0],["dcwood","Waldrand bei Nohant","um 1842–1843",1],["dcflowers","Blumen","1843",1],["dcpeasants","Bäuerinnen aus der Gegend von Eaux-Bonnes","1845",3],["dcglories","Bogen aus Winden, Studie für «Ein Blumenkorb»","1848–1849",0],["dcbasket","Ein Blumenkorb","1848–1849",0],["dcsunset","Sonnenuntergang","um 1850",0],["dcchrist","Christus schläft während des Sturms","um 1853",0],["dcboats","Zwei Boote im Hafen von Dieppe","1854",2],["dcturkish","Figur in türkischem Kostüm","um 1856–1863",2]]]];
  var have = {}; (window.PATH_WORKS || []).forEach(function (w) { have[w.id] = 1; });
  var W = [];
  for (var i = 0; i < G.length; i++) for (var j = 0; j < G[i][1].length; j++) {
    var r = G[i][1][j]; if (have[r[0]]) continue;
    var o = { id: r[0], title: r[1], artist: G[i][0], year: r[2] }; if (r.length > 3) o.museum = M[r[3]]; W.push(o);
  }
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(W);
  (window.__pwChunks = window.__pwChunks || {})["delacroix"] = true;
})();
