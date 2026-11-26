// Work titles (fr) of path marc (v10.43b), part of fr-path-works-late.js.
(function () {
  var P = window.FR = window.FR || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"grazing":{"title":"Chevaux au pâturage I","museum":"Städtische Galerie im Lenbachhaus, Munich"},"bluehorse":{"title":"Cheval bleu I","museum":"Städtische Galerie im Lenbachhaus, Munich"},"largeblue":{"title":"Les Grands Chevaux bleus","museum":"Walker Art Center, Minneapolis"},"tiger":{"title":"Le Tigre","museum":"Städtische Galerie im Lenbachhaus, Munich"},"foxes":{"title":"Les Renards","museum":"Localisation actuelle non confirmée publiquement"},"fate":{"title":"Destins d’animaux","museum":"Kunstmuseum Basel"},"deer":{"title":"Cerfs dans la forêt II","museum":"Staatliche Kunsthalle Karlsruhe"},"forms":{"title":"Formes en lutte","museum":"Pinakothek der Moderne, Munich"}});
})();
