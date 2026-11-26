// Work titles (es) of path marc (v10.43b), part of es-path-works-late.js.
(function () {
  var P = window.ES = window.ES || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"grazing":{"title":"Caballos pastando I","museum":"Städtische Galerie im Lenbachhaus, Múnich"},"bluehorse":{"title":"Caballo azul I","museum":"Städtische Galerie im Lenbachhaus, Múnich"},"largeblue":{"title":"Los grandes caballos azules","museum":"Walker Art Center, Minneapolis"},"tiger":{"title":"El tigre","museum":"Städtische Galerie im Lenbachhaus, Múnich"},"foxes":{"title":"Los zorros","museum":"Ubicación actual no confirmada públicamente"},"fate":{"title":"Destinos de animales","museum":"Kunstmuseum Basel"},"deer":{"title":"Ciervos en el bosque II","museum":"Staatliche Kunsthalle Karlsruhe"},"forms":{"title":"Formas en lucha","museum":"Pinakothek der Moderne, Múnich"}});
})();
