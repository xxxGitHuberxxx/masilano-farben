// v10.43 IT content for Amedeo Modigliani’s life journey (1884–1920). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "mgpompadour": {
    "title": "Madame Pompadour",
    "museum": "Art Institute of Chicago"
  },
  "mglipchitz": {
    "title": "Jacques e Berthe Lipchitz",
    "museum": "Art Institute of Chicago"
  },
  "mgdeleu": {
    "title": "Monsieur Deleu",
    "museum": "National Gallery of Art, Washington"
  },
  "mgbakst": {
    "title": "Léon Bakst",
    "museum": "National Gallery of Art, Washington"
  },
  "mgsinger": {
    "title": "Cantante di caffè",
    "museum": "National Gallery of Art, Washington"
  },
  "mgkisling": {
    "title": "Madame Kisling",
    "museum": "National Gallery of Art, Washington"
  },
  "mggreen": {
    "title": "Ragazza con la camicetta verde",
    "museum": "National Gallery of Art, Washington"
  },
  "mgredhair": {
    "title": "Donna dai capelli rossi",
    "museum": "National Gallery of Art, Washington"
  },
  "mgadrienne": {
    "title": "Adrienne (Donna con la frangia)",
    "museum": "National Gallery of Art, Washington"
  },
  "mgsoutine": {
    "title": "Chaim Soutine",
    "museum": "National Gallery of Art, Washington"
  },
  "mgsailor": {
    "title": "Ragazza con la camicetta alla marinara",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mgitalian": {
    "title": "L’italiana",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mgroma": {
    "title": "Donna rom con bambino",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.modigliani = {
  "title": "Il percorso di vita di Amedeo Modigliani",
  "part": "Volti",
  "subtitle": "Da Parigi a Nizza",
  "intro": "Viaggia con Amedeo Modigliani nei suoi ultimi anni: tra amici, artisti e persone che dipinge con colli lunghi e volti sottili. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Amedeo Modigliani muore nel 1920 a Parigi.",
    "I suoi ritratti sono oggi esposti in musei di tutto il mondo."
  ],
  "epilogue": "Amedeo Modigliani muore nel 1920. Il percorso attraversa i suoi anni parigini, con ritratti di amici e di sconosciuti, fino alla costa mediterranea di Nizza.",
  "life": "1884–1920"
};
  P.stations = Object.assign(P.stations || {}, {
  "mgs1": {
    "place": "Parigi: amici e committenti",
    "when": "1915–1916",
    "mapLabel": "Parigi",
    "intro": [
      "Amedeo Modigliani nasce nel 1884 a Livorno e nel 1906 si stabilisce a Parigi.",
      "All’inizio lavora anche come scultore, ma alla fine del 1913 o all’inizio del 1914 torna del tutto alla pittura."
    ]
  },
  "mgs2": {
    "place": "Parigi: volti del 1917",
    "when": "1917",
    "mapLabel": "Parigi",
    "intro": [
      "Nel 1916 Léopold Zborowski è il mercante d’arte di Modigliani.",
      "Come nelle sue sculture, Modigliani dà alle persone colli lunghi e volti sottili."
    ]
  },
  "mgs3": {
    "place": "Sguardi silenziosi",
    "when": "1917–1918",
    "mapLabel": "Francia",
    "intro": [
      "Intorno al 1914 Modigliani conosce a Montparnasse il giovane pittore Chaim Soutine, e i due diventano amici stretti.",
      "Molti suoi ritratti sono molto stilizzati, e spesso lascia gli occhi vuoti."
    ]
  },
  "mgs4": {
    "place": "Sul Mediterraneo",
    "when": "1918–1919",
    "mapLabel": "Nizza",
    "intro": [
      "Da marzo 1918 a maggio 1919 Modigliani vive nel sud della Francia per riprendersi, soprattutto a Nizza.",
      "Lontano dagli amici, vi dipinge giovani domestiche, commesse e bambini del luogo."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mgpompadour": {
    "text": [
      "Una donna con un grande cappello nero guarda fuori dal quadro, davanti a uno sfondo di campi grigi e verdi.",
      "Secondo il museo, il titolo allude a Madame de Pompadour alla corte di re Luigi XV, e il cappello vistoso dà al quadro una nota allegra."
    ],
    "fact": "1915. Art Institute of Chicago."
  },
  "mglipchitz": {
    "text": [
      "L’artista Jacques Lipchitz sta dietro la moglie, la poetessa russa Berthe Lipchitz, che porta un colletto bianco.",
      "Lipchitz commissiona il doppio ritratto per le nozze, e secondo lui Modigliani lo dipinge in soli due giorni."
    ],
    "fact": "1916. Art Institute of Chicago."
  },
  "mgdeleu": {
    "text": [
      "Un giovane dai capelli neri indossa una giacca bruno-rossiccia e un fazzoletto bianco al collo.",
      "Nel 1943 il quadro era ancora esposto con il titolo «Ritratto di Kisling»."
    ],
    "fact": "1916. National Gallery of Art, Washington."
  },
  "mgbakst": {
    "text": [
      "Un uomo con i baffi porta un fazzoletto azzurro intenso su una giacca scura a motivi dorati.",
      "Il quadro appartenne dapprima allo stesso Léon Bakst, e nel 2013 la National Gallery lo espose in una mostra su Djagilev e i Balletti russi."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgsinger": {
    "text": [
      "Una giovane donna in abito nero siede a mani giunte davanti a una parete grigio chiaro.",
      "Il quadro fu dapprima presso il mercante di Modigliani, Léopold Zborowski, a Parigi."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgkisling": {
    "text": [
      "La donna ha i capelli corti castano-rossicci con la frangia dritta, una camicia bianca e una cravatta rossa.",
      "In basso a destra c’è la firma «modigliani»."
    ],
    "fact": "circa 1917. National Gallery of Art, Washington."
  },
  "mggreen": {
    "text": [
      "Una ragazza dai capelli biondo ramato indossa una camicetta verde chiaro davanti a una parete bruno-rossiccia.",
      "A un’asta a Parigi nel 1927 il quadro si chiamava «Le Corsage Vert», la camicetta verde."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgredhair": {
    "text": [
      "Una donna dai capelli rossi e dall’abito nero appoggia il braccio allo schienale di una sedia.",
      "Nel 1931 il quadro fu esposto a Pittsburgh con il titolo «Donna in nero»."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgadrienne": {
    "text": [
      "Una donna dai capelli rosso scuro e con la frangia appoggia la testa sulla mano.",
      "Un mercante comprò il quadro nel 1927 da un artista di Montparnasse, amico di Modigliani."
    ],
    "fact": "1917. National Gallery of Art, Washington."
  },
  "mgsoutine": {
    "text": [
      "Il pittore Chaim Soutine siede con le mani in grembo e guarda fuori dal quadro con gli occhi socchiusi.",
      "Modigliani ritrae più volte l’amico, più giovane di dieci anni, e nel 1916 lo presenta al suo mercante Zborowski."
    ],
    "fact": "1918. National Gallery of Art, Washington."
  },
  "mgsailor": {
    "text": [
      "Una ragazza dai capelli scuri raccolti indossa una camicetta grigio-azzurra con un ampio colletto bianco.",
      "Il quadro è giunto al Metropolitan Museum nel 1960 come dono di Charles F. Iklé."
    ],
    "fact": "1918. Metropolitan Museum of Art, New York."
  },
  "mgitalian": {
    "text": [
      "Una donna in abito nero con il colletto bianco siede a mani giunte davanti a una parete rosso arancio.",
      "Non si sa chi sia; forse Modigliani la scelse perché, come lui, veniva dall’Italia."
    ],
    "fact": "circa 1918–1919. Metropolitan Museum of Art, New York."
  },
  "mgroma": {
    "text": [
      "Una giovane donna con una camicetta bianca ricamata di rosso tiene in braccio un bambino avvolto in panni blu scuro.",
      "Nel 1930 la Biennale di Venezia espose il quadro con il titolo «Maternità»."
    ],
    "fact": "1919. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
