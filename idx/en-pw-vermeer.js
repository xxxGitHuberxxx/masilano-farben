// Work titles (en) of path vermeer (v10.43b), part of en-path-works-late.js.
(function () {
  var P = window.EN = window.EN || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"pearl":{"title":"Girl with a Pearl Earring","museum":"Mauritshuis, The Hague"},"milkmaid":{"title":"The Milkmaid","museum":"Rijksmuseum, Amsterdam"},"delft":{"title":"View of Delft","museum":"Mauritshuis, The Hague"}});
})();
