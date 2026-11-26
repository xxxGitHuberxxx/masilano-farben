// Work titles (it) of path marc (v10.43b), part of it-path-works-late.js.
(function () {
  var P = window.IT = window.IT || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"grazing":{"title":"Cavalli al pascolo I","museum":"Städtische Galerie im Lenbachhaus, Monaco di Baviera"},"bluehorse":{"title":"Cavallo blu I","museum":"Städtische Galerie im Lenbachhaus, Monaco di Baviera"},"largeblue":{"title":"I grandi cavalli blu","museum":"Walker Art Center, Minneapolis"},"tiger":{"title":"La tigre","museum":"Städtische Galerie im Lenbachhaus, Monaco di Baviera"},"foxes":{"title":"Le volpi","museum":"Collocazione attuale non confermata pubblicamente"},"fate":{"title":"Destini di animali","museum":"Kunstmuseum Basel"},"deer":{"title":"Cervi nel bosco II","museum":"Staatliche Kunsthalle Karlsruhe"},"forms":{"title":"Forme in lotta","museum":"Pinakothek der Moderne, Monaco di Baviera"}});
})();
