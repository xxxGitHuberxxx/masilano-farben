// v10.35 ES short Lebensweg for Leonardo da Vinci.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Muzeum Książąt Czartoryskich, Krakau": "Museo Czartoryski, Cracovia"
});
  P.works = Object.assign(P.works || {}, {
  "ermine": {
    "title": "Dama del armiño",
    "museum": "Museo Czartoryski, Cracovia"
  },
  "monalisa": {
    "title": "La Gioconda",
    "museum": "Musée du Louvre, Paris"
  }
});
  P.paths = P.paths || {};
  P.paths.leonardo = {
  "title": "El camino de vida de Leonardo da Vinci",
  "life": "1452–1519",
  "part": "Un camino breve · Florencia y Milán",
  "subtitle": "Dos retratos",
  "intro": "En Florencia y Milán, Leonardo busca la luz suave en los rostros. La dama del armiño y la Mona Lisa están entre los retratos más conocidos del mundo.",
  "ending": [
    "Leonardo muere en Amboise en 1519. Los dos retratos de este camino cuelgan hoy en Cracovia y en París."
  ],
  "epilogue": "Leonardo muere en Amboise en 1519. Los dos retratos de este camino cuelgan hoy en Cracovia y en París."
};
  P.stations = Object.assign(P.stations || {}, {
  "leonardo1": {
    "place": "Florencia y Milán",
    "when": null,
    "mapLabel": "Florencia y Milán",
    "intro": [
      "En Florencia y Milán, Leonardo busca la luz suave en los rostros. La dama del armiño y la Mona Lisa están entre los retratos más conocidos del mundo."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "ermine": {
      "text": [
        "La joven es Cecilia Gallerani, una dama culta de la corte de Milán.",
        "El armiño en su brazo era un símbolo de pureza — y un juego de palabras con su nombre."
      ],
      "fact": "Leonardo trabajaba entonces para el duque Ludovico Sforza en Milán. Cecilia era una de las mujeres más inteligentes de aquella corte."
    },
    "monalisa": {
      "text": [
        "Una mujer está sentada ante un paisaje amplio, un tanto misterioso, y nos mira.",
        "Su ligera sonrisa ha hecho famoso el cuadro en el mundo entero."
      ],
      "fact": "Leonardo se llevó el cuadro a Francia cuando fue a la corte del rey Francisco I. Por eso cuelga hoy en el Louvre y no en Italia."
    }
  });
})();
