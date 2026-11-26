// v10.43 IT content for Gustave Courbet’s life journey (1819–1877). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "gcladies": {
    "title": "Le signorine del villaggio",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gcbretonnerie": {
    "title": "La Bretonnerie nel dipartimento dell’Indre",
    "museum": "National Gallery of Art, Washington"
  },
  "gccliffs": {
    "title": "Scogliere sul mare: piccola spiaggia all’alba",
    "museum": "Art Institute of Chicago"
  },
  "gcblackrocks": {
    "title": "Le rocce nere a Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "gccalm66": {
    "title": "Mare calmo",
    "museum": "National Gallery of Art, Washington"
  },
  "gccalm69": {
    "title": "Il mare calmo",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gchautepierre": {
    "title": "La rupe di Hautepierre",
    "museum": "Art Institute of Chicago"
  },
  "gcbeach": {
    "title": "Spiaggia in Normandia",
    "museum": "National Gallery of Art, Washington"
  },
  "gcboats": {
    "title": "Barche su una spiaggia, Étretat",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.courbet = {
  "title": "Il percorso di vita di Gustave Courbet",
  "part": "Terra e mare",
  "subtitle": "Da Ornans alla costa della Normandia",
  "intro": "Viaggia nella vita di Gustave Courbet: dal suo paese natale, Ornans, nella Francia orientale, alle scogliere e alle spiagge della Normandia. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Gustave Courbet muore nel 1877 a La Tour-de-Peilz, in Svizzera.",
    "I suoi paesaggi e le sue marine sono oggi esposti in musei di tutto il mondo."
  ],
  "epilogue": "Gustave Courbet muore nel 1877. Il percorso porta da Ornans e dalle campagne dell’Indre alla costa della Normandia, a Trouville e a Étretat.",
  "life": "1819–1877"
};
  P.stations = Object.assign(P.stations || {}, {
  "gcs1": {
    "place": "Ornans e la campagna",
    "when": "1851–1856",
    "mapLabel": "Ornans",
    "intro": [
      "Gustave Courbet nasce nel 1819 a Ornans, nella Francia orientale.",
      "Al Salon di Parigi del 1850–51 fa scalpore con grandi quadri della vita quotidiana del suo paese natale."
    ]
  },
  "gcs2": {
    "place": "Sulla costa della Manica",
    "when": "1865–1866",
    "mapLabel": "Normandia",
    "intro": [
      "Courbet proviene dal dipartimento del Doubs, lontano dal mare, ed è noto soprattutto per i quadri di rocce, gole e fiumi della sua terra.",
      "A metà degli anni Sessanta dell’Ottocento si dedica alla costa della Manica e dipinge il mare."
    ]
  },
  "gcs3": {
    "place": "L’estate a Étretat",
    "when": "1869",
    "mapLabel": "Étretat",
    "intro": [
      "Nell’agosto del 1869 Courbet visita Étretat, sulla costa della Normandia.",
      "La maggior parte delle sue marine di questo periodo mostra onde alte che si infrangono."
    ]
  },
  "gcs4": {
    "place": "Barche sulla spiaggia",
    "when": "1872–1875",
    "mapLabel": "Normandia",
    "intro": [
      "Anche negli anni Settanta dell’Ottocento Courbet dipinge spiagge e scogliere della Normandia.",
      "Barche da pesca riposano sui ciottoli, e dietro di loro si alzano chiare pareti di roccia."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "gcladies": {
    "text": [
      "Le tre sorelle di Courbet passeggiano in una piccola valle vicino a Ornans, e una di loro fa l’elemosina a un bambino che bada alle mucche.",
      "Quando il quadro è esposto al Salon del 1852, i critici deridono gli abiti semplici, il cane e le piccole mucche."
    ],
    "fact": "1851–1852. Metropolitan Museum of Art, New York."
  },
  "gcbretonnerie": {
    "text": [
      "Un ruscello serpeggia in un prato verde, e dietro si alzano alberi fitti sotto un cielo azzurro con nuvole bianche.",
      "In basso a sinistra Courbet firma «G.Courbet / 56»."
    ],
    "fact": "1856. National Gallery of Art, Washington."
  },
  "gccliffs": {
    "text": [
      "A sinistra una scogliera dal bordo verde scende a picco sulla spiaggia di ciottoli, e il mare calmo luccica nella luce chiara del mattino.",
      "In basso a sinistra c’è la firma «G. Courbet»."
    ],
    "fact": "1865. Art Institute of Chicago."
  },
  "gcblackrocks": {
    "text": [
      "Sopra rocce scure sulla riva risplende un cielo rossastro e nuvoloso, e il mare è calmo.",
      "Il quadro nasce negli anni in cui Courbet dipinge il mare sulla costa della Manica."
    ],
    "fact": "1865–1866. National Gallery of Art, Washington."
  },
  "gccalm66": {
    "text": [
      "Un cielo ampio e chiaro occupa quasi tutto il quadro, e sotto si stendono una striscia di mare turchese e la spiaggia di sabbia.",
      "In basso a sinistra si legge «’66 / Gustave Courbet»."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "gccalm69": {
    "text": [
      "Con la bassa marea il mare si è ritirato, e due piccole barche sono rimaste sulla spiaggia.",
      "L’immenso cielo nuvoloso sovrasta strette fasce d’acqua e di sabbia."
    ],
    "fact": "1869. Metropolitan Museum of Art, New York."
  },
  "gchautepierre": {
    "text": [
      "Una possente parete di roccia dal bordo verde si alza sopra alberi e case dai tetti rossi.",
      "In basso a destra Courbet firma «G. Courbet»."
    ],
    "fact": "circa 1869. Art Institute of Chicago."
  },
  "gcbeach": {
    "text": [
      "A sinistra si alzano alte rocce, davanti barche da pesca riposano sulla spiaggia chiara, e in fondo luccica il mare.",
      "In passato il museo intitolava il quadro «Spiaggia di Étretat»."
    ],
    "fact": "circa 1872–1875. National Gallery of Art, Washington."
  },
  "gcboats": {
    "text": [
      "Diverse barche da pesca riposano sulla spiaggia di ciottoli, e a destra si alzano chiare scogliere sotto nuvole grigie.",
      "In basso a destra c’è la firma «G. Courbet»."
    ],
    "fact": "circa 1872–1875. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
