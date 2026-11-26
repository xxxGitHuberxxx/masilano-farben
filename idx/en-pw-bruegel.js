// Work titles (en) of path bruegel (v10.43b), part of en-path-works-late.js.
(function () {
  var P = window.EN = window.EN || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"babel":{"title":"The Tower of Babel","museum":"Kunsthistorisches Museum, Vienna"},"harvesters":{"title":"The Harvesters","museum":"The Metropolitan Museum of Art, New York"},"hunters":{"title":"Hunters in the Snow","museum":"Kunsthistorisches Museum, Vienna"}});
})();
