// Work titles (en) of path marc (v10.43b), part of en-path-works-late.js.
(function () {
  var P = window.EN = window.EN || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"grazing":{"title":"Grazing Horses I","museum":"Städtische Galerie im Lenbachhaus, Munich"},"bluehorse":{"title":"Blue Horse I","museum":"Städtische Galerie im Lenbachhaus, Munich"},"largeblue":{"title":"The Large Blue Horses","museum":"Walker Art Center, Minneapolis"},"tiger":{"title":"The Tiger","museum":"Städtische Galerie im Lenbachhaus, Munich"},"foxes":{"title":"The Foxes","museum":"Current location not publicly confirmed"},"fate":{"title":"Fate of the Animals","museum":"Kunstmuseum Basel"},"deer":{"title":"Deer in the Forest II","museum":"Staatliche Kunsthalle Karlsruhe"},"forms":{"title":"Fighting Forms","museum":"Pinakothek der Moderne, Munich"}});
})();
