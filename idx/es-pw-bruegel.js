// Work titles (es) of path bruegel (v10.43b), part of es-path-works-late.js.
(function () {
  var P = window.ES = window.ES || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"babel":{"title":"La torre de Babel","museum":"Kunsthistorisches Museum, Viena"},"harvesters":{"title":"Los cosechadores","museum":"The Metropolitan Museum of Art, New York"},"hunters":{"title":"Cazadores en la nieve","museum":"Kunsthistorisches Museum, Viena"}});
})();
