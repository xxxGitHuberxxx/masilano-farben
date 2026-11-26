// Work titles (it) of path vermeer (v10.43b), part of it-path-works-late.js.
(function () {
  var P = window.IT = window.IT || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"pearl":{"title":"Ragazza con l’orecchino di perla","museum":"Mauritshuis, L'Aia"},"milkmaid":{"title":"La lattaia","museum":"Rijksmuseum, Amsterdam"},"delft":{"title":"Veduta di Delft","museum":"Mauritshuis, L'Aia"}});
})();
