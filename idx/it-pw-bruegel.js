// Work titles (it) of path bruegel (v10.43b), part of it-path-works-late.js.
(function () {
  var P = window.IT = window.IT || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"babel":{"title":"La torre di Babele","museum":"Kunsthistorisches Museum, Vienna"},"harvesters":{"title":"I mietitori","museum":"The Metropolitan Museum of Art, New York"},"hunters":{"title":"Cacciatori nella neve","museum":"Kunsthistorisches Museum, Vienna"}});
})();
