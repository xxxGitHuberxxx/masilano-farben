// v10.43 IT content for Mary Cassatt’s life journey (1844–1926). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "csbullfight": {
    "title": "Dopo la corrida",
    "museum": "Art Institute of Chicago"
  },
  "csarmchair": {
    "title": "Bambina in una poltrona blu",
    "museum": "National Gallery of Art, Washington"
  },
  "csfan": {
    "title": "Donna con il ventaglio",
    "museum": "National Gallery of Art, Washington"
  },
  "csbalcony": {
    "title": "Su un balcone",
    "museum": "Art Institute of Chicago"
  },
  "csloge": {
    "title": "Il palco",
    "museum": "National Gallery of Art, Washington"
  },
  "cssusan": {
    "title": "Susan con il cappello di paglia",
    "museum": "Art Institute of Chicago"
  },
  "cswindow": {
    "title": "Giovane donna alla finestra",
    "museum": "National Gallery of Art, Washington"
  },
  "csbeach": {
    "title": "Bambini che giocano sulla spiaggia",
    "museum": "National Gallery of Art, Washington"
  },
  "csstrawhat": {
    "title": "Bambina con il cappello di paglia",
    "museum": "National Gallery of Art, Washington"
  },
  "cslady": {
    "title": "Ritratto di una signora",
    "museum": "National Gallery of Art, Washington"
  },
  "cskiss": {
    "title": "Il bacio della buonanotte della mamma",
    "museum": "Art Institute of Chicago"
  },
  "csblackhat": {
    "title": "Il cappello nero",
    "museum": "National Gallery of Art, Washington"
  },
  "cszinnia": {
    "title": "Donna con una zinnia rossa (Fantasticheria)",
    "museum": "National Gallery of Art, Washington"
  },
  "csboating": {
    "title": "La gita in barca",
    "museum": "National Gallery of Art, Washington"
  },
  "cssara": {
    "title": "Sara con cuffia e cappotto",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.cassatt = {
  "title": "Il percorso di vita di Mary Cassatt",
  "part": "Siviglia, Parigi e Beaufresne",
  "subtitle": "Donne, bambini e il teatro",
  "intro": "Viaggia nella vita di Mary Cassatt: da Siviglia, dai palchi dei teatri di Parigi e dalle mostre impressioniste fino ai suoi quadri di madri e bambini. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Mary Cassatt muore il 14 giugno 1926 nella sua casa di campagna di Beaufresne, vicino a Parigi.",
    "Aiuta i collezionisti americani ad acquistare quadri impressionisti che oggi sono in molti musei degli Stati Uniti."
  ],
  "epilogue": "Mary Cassatt muore a Beaufresne il 14 giugno 1926. Il percorso porta da Siviglia e dai teatri di Parigi ai quadri di madri e bambini.",
  "life": "1844–1926"
};
  P.stations = Object.assign(P.stations || {}, {
  "css1": {
    "place": "Dalla Pennsylvania a Parigi",
    "when": "1844–1880",
    "mapLabel": "Parigi",
    "intro": [
      "Mary Cassatt nasce il 22 maggio 1844 vicino a Pittsburgh, negli Stati Uniti, impara a dipingere a Filadelfia e nel 1866 va a Parigi.",
      "Nel 1873 dipinge a Siviglia; nel 1877 Edgar Degas la invita a esporre con gli impressionisti."
    ]
  },
  "css2": {
    "place": "Parigi: amiche e bambini",
    "when": "1881–1889",
    "mapLabel": "Parigi",
    "intro": [
      "Cassatt vive a Parigi con i genitori e la sorella Lydia e dipinge donne e bambini del suo ambiente.",
      "Lavora spesso a pastello, perché le permette di disegnare in fretta e con colori intensi."
    ]
  },
  "cassatt1": {
    "place": "Madri, bambini e Beaufresne",
    "when": "1890–1926",
    "mapLabel": "Beaufresne",
    "intro": [
      "Dopo una grande mostra di stampe giapponesi a Parigi nel 1890, i quadri di Cassatt diventano più nitidi e piatti.",
      "Nel 1894 compra la casa di campagna di Beaufresne, a nord di Parigi; verso il 1914 deve smettere di dipingere a causa degli occhi."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "csbullfight": {
    "text": [
      "Un torero con una giacca riccamente ricamata si appoggia dopo la corrida a una barriera di legno.",
      "Cassatt dipinge il quadro nel 1873 a Siviglia, dove vive per diversi mesi."
    ],
    "fact": "1873. Art Institute of Chicago."
  },
  "csarmchair": {
    "text": [
      "Una bambina è sdraiata, stanca, in una grande poltrona blu, nella poltrona accanto dorme un cane.",
      "Edgar Degas aiuta Cassatt con lo sfondo del quadro."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "csfan": {
    "text": [
      "Una giovane donna siede in poltrona con un grande ventaglio dorato in grembo.",
      "Dietro di lei altre figure sono solo accennate."
    ],
    "fact": "circa 1878–1879. National Gallery of Art, Washington."
  },
  "csbalcony": {
    "text": [
      "Una donna in abito chiaro legge il giornale, circondata da fiori e verde.",
      "Cassatt dipinge la scena con pennellate rapide e chiare."
    ],
    "fact": "1878–1879. Art Institute of Chicago."
  },
  "csloge": {
    "text": [
      "Due giovani donne siedono in un palco a teatro, una tiene un ventaglio aperto, l’altra un mazzo di fiori.",
      "Dietro di loro si riflettono le luci della sala."
    ],
    "fact": "circa 1878–1880. National Gallery of Art, Washington."
  },
  "cssusan": {
    "text": [
      "Una giovane donna con cappello di paglia e nastro blu guarda pensierosa verso il basso.",
      "Cassatt disegna il ritratto con morbidi pastelli."
    ],
    "fact": "circa 1883. Art Institute of Chicago."
  },
  "cswindow": {
    "text": [
      "Una giovane donna in bianco con un grande cappello siede alla finestra aperta, in grembo un cagnolino.",
      "Fuori si vedono i tetti e le case di Parigi."
    ],
    "fact": "circa 1883–1884. National Gallery of Art, Washington."
  },
  "csbeach": {
    "text": [
      "Due bambine giocano nella sabbia con secchiello e paletta.",
      "Sullo sfondo, sul mare azzurro, navigano barche a vela."
    ],
    "fact": "1884. National Gallery of Art, Washington."
  },
  "csstrawhat": {
    "text": [
      "Una bambina con un grande cappello di paglia e un grembiule grigio sta in piedi e guarda seria.",
      "Tiene le mani intrecciate davanti a sé."
    ],
    "fact": "circa 1886. National Gallery of Art, Washington."
  },
  "cslady": {
    "text": [
      "Una signora anziana dai capelli grigi, con un fiore rosa sulla cuffia, siede vestita di nero in poltrona.",
      "Sullo schienale c’è una stoffa a motivi colorati."
    ],
    "fact": "circa 1887. National Gallery of Art, Washington."
  },
  "cskiss": {
    "text": [
      "Una madre tiene in braccio il suo bambino vestito di blu e gli dà un bacio.",
      "Il bambino guarda assonnato oltre la sua spalla."
    ],
    "fact": "1888. Art Institute of Chicago."
  },
  "csblackhat": {
    "text": [
      "Una giovane donna con un grande cappello nero piumato indossa un abito azzurro chiaro.",
      "Cassatt lascia lo sfondo quasi vuoto, così cappello e abito risaltano ancora di più."
    ],
    "fact": "circa 1890. National Gallery of Art, Washington."
  },
  "cszinnia": {
    "text": [
      "Una donna con un abito a righe viola tiene un fiore rosso e appoggia la testa sulla mano.",
      "Dietro di lei brilla un giardino verde."
    ],
    "fact": "1891–1892. National Gallery of Art, Washington."
  },
  "csboating": {
    "text": [
      "Un uomo vestito di blu scuro rema portando sul mare azzurro una donna con un bambino in grembo.",
      "Cassatt dipinge il quadro sulla costa vicino ad Antibes, nel sud della Francia."
    ],
    "fact": "1893–1894. National Gallery of Art, Washington."
  },
  "cssara": {
    "text": [
      "Una bambina con una grande cuffia rosa sorride maliziosa.",
      "Cassatt disegna il foglio con delicati tratti di pastello su carta marrone chiaro."
    ],
    "fact": "circa 1904–1906. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
