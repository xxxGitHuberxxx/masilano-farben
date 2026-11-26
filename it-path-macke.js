// v10.35 IT short Lebensweg for August Macke.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Museum Ludwig, Köln": "Museum Ludwig, Colonia"
});
  P.works = Object.assign(P.works || {}, {
  "macke": {
    "title": "Donna in giacca verde",
    "museum": "Museum Ludwig, Colonia"
  }
});
  P.paths = P.paths || {};
  P.paths.macke = {
  "title": "Il cammino di August Macke",
  "life": "1887–1914",
  "part": "Un breve percorso · il lago di Thun",
  "subtitle": "Signora in giacca verde",
  "intro": "Un breve percorso verso August Macke, amico di Franz Marc e pittore della Renania. «Signora in giacca verde» fu dipinto nel 1913 a Hilterfingen, sul lago di Thun.",
  "ending": [
    "Nell’aprile 1914 si reca in Tunisia con Paul Klee e Louis Moilliet. Nel settembre 1914 Macke cade in guerra, a soli 27 anni. La Signora con la giacca verde, dipinta a Hilterfingen, appartiene oggi al Museum Ludwig di Colonia."
  ],
  "epilogue": "Nell’aprile 1914 si reca in Tunisia con Paul Klee e Louis Moilliet. Nel settembre 1914 Macke cade in guerra, a soli 27 anni. La Signora con la giacca verde, dipinta a Hilterfingen, appartiene oggi al Museum Ludwig di Colonia."
};
  P.stations = Object.assign(P.stations || {}, {
  "macke1": {
    "place": "Hilterfingen, lago di Thun",
    "when": null,
    "mapLabel": "Hilterfingen, lago di Thun",
    "intro": [
      "Un breve percorso verso August Macke, amico di Franz Marc e pittore della Renania. «Signora in giacca verde» fu dipinto nel 1913 a Hilterfingen, sul lago di Thun."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "macke": {
      "text": [
        "Passeggiatori stanno in un parco; sullo sfondo, l’azzurro di un lago.",
        "Macke dipinse il quadro nel 1913 a Hilterfingen, sul lago di Thun, dove trascorse diversi mesi con sua moglie Elisabeth."
      ],
      "fact": "Macke era un amico stretto di Franz Marc e apparteneva alla cerchia del Cavaliere Azzurro."
    }
  });
})();
