// Work titles (it) of path durer (v10.43b), part of it-path-works-late.js.
(function () {
  var P = window.IT = window.IT || {};
  var M = function (a, b) { for (var k in b) a[k] = (a[k] && typeof a[k] === 'object' && !Array.isArray(a[k])) ? Object.assign({}, b[k], a[k]) : (a[k] || b[k]); return a; };
  P.works = M(P.works || {}, {"hare":{"title":"Lepre giovane","museum":"Albertina, Vienna"},"wing":{"title":"Ala di una ghiandaia marina","museum":"Albertina, Vienna"}});
})();
