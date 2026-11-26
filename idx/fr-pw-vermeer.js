// Work titles (fr) of path vermeer (v10.43b), part of fr-path-works-late.js.
(function () {
  var P = window.FR = window.FR || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"pearl":{"title":"La Jeune Fille à la perle","museum":"Mauritshuis, La Haye"},"milkmaid":{"title":"La Laitière","museum":"Rijksmuseum, Amsterdam"},"delft":{"title":"Vue de Delft","museum":"Mauritshuis, La Haye"}});
})();
