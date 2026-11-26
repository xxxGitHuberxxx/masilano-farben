// Work titles (en) of path macke (v10.43b), part of en-path-works-late.js.
(function () {
  var P = window.EN = window.EN || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"macke":{"title":"Woman in a Green Jacket","museum":"Museum Ludwig, Cologne"}});
})();
