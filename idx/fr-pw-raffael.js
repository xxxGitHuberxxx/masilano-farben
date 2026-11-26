// Work titles (fr) of path raffael (v10.43b), part of fr-path-works-late.js.
(function () {
  var P = window.FR = window.FR || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"sistine":{"title":"La Madone Sixtine","museum":"Gemäldegalerie Alte Meister, Dresden"}});
})();
