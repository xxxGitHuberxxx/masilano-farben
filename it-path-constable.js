// v10.43 IT content for John Constable’s life journey (1776–1837). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "The National Gallery, London": "The National Gallery, Londra"
});
  P.works = Object.assign(P.works || {}, {
  "cnepsom": {
    "title": "La brughiera di Epsom",
    "museum": "National Gallery of Art, Washington"
  },
  "cncottages": {
    "title": "Paesaggio con casette",
    "museum": "Art Institute of Chicago"
  },
  "cnstoke": {
    "title": "Stoke-by-Nayland",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnwivenhoe": {
    "title": "Wivenhoe Park, Essex",
    "museum": "National Gallery of Art, Washington"
  },
  "cnpulham": {
    "title": "La signora James Pulham",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnwhitehorse": {
    "title": "Il cavallo bianco",
    "museum": "National Gallery of Art, Washington"
  },
  "cnsalisbury": {
    "title": "La cattedrale di Salisbury da Lower Marsh Close",
    "museum": "National Gallery of Art, Washington"
  },
  "haywain": {
    "title": "Il carro di fieno",
    "museum": "The National Gallery, Londra"
  },
  "cnclouds": {
    "title": "Studio di nuvole: tramonto tempestoso",
    "museum": "National Gallery of Art, Washington"
  },
  "cnyarmouth": {
    "title": "Il molo di Yarmouth",
    "museum": "National Gallery of Art, Washington"
  },
  "cnlock": {
    "title": "Paesaggio (La chiusa)",
    "museum": "Art Institute of Chicago"
  },
  "cnbishop": {
    "title": "La cattedrale di Salisbury dai giardini del vescovo",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnbranchhill": {
    "title": "Lo stagno di Branch Hill, Hampstead",
    "museum": "Cleveland Museum of Art"
  },
  "cncloudwc": {
    "title": "Studio di nuvole",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnmill": {
    "title": "Mulino vicino a Colchester",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cnstoke36": {
    "title": "Stoke-by-Nayland",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.constable = {
  "title": "Il percorso di vita di John Constable",
  "part": "Il Suffolk, Salisbury e Hampstead",
  "subtitle": "Cieli, nuvole e fiumi",
  "intro": "Viaggia nella vita di John Constable: dai campi e dai mulini del suo Suffolk natale e dalla cattedrale di Salisbury fino alle nuvole sopra Hampstead. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "John Constable muore a Londra il 31 marzo 1837.",
    "I suoi cieli e paesaggi freschi entusiasmano in seguito i pittori francesi, da Delacroix agli impressionisti."
  ],
  "epilogue": "John Constable muore a Londra il 31 marzo 1837. Il percorso porta dai campi del Suffolk, passando per Salisbury, fino alle nuvole sopra Hampstead.",
  "life": "1776–1837"
};
  P.stations = Object.assign(P.stations || {}, {
  "cns1": {
    "place": "Il Suffolk: casa e anni di apprendistato",
    "when": "1776–1811",
    "mapLabel": "East Bergholt",
    "intro": [
      "John Constable nasce l’11 giugno 1776 a East Bergholt, nel Suffolk; il padre possiede mulini sul fiume Stour.",
      "Dal 1799 studia alla scuola della Royal Academy a Londra, ma preferisce dipingere i campi e i villaggi della sua terra."
    ]
  },
  "cns2": {
    "place": "Il matrimonio e i grandi quadri",
    "when": "1816–1819",
    "mapLabel": "Essex",
    "intro": [
      "Nel 1816, dopo una lunga attesa, Constable sposa Maria Bicknell e si trasferisce con lei a Londra.",
      "Ora dipinge grandi tele larghe quasi due metri e nel 1819 viene eletto membro associato della Royal Academy."
    ]
  },
  "constable1": {
    "place": "Salisbury, il carro di fieno e le nuvole",
    "when": "1820–1825",
    "mapLabel": "Salisbury",
    "intro": [
      "Constable va spesso a trovare l’amico John Fisher a Salisbury e dipinge la cattedrale; a Hampstead dipinge studi di nuvole.",
      "Nel 1824 «Il carro di fieno» viene esposto a Parigi e riceve una medaglia d’oro."
    ]
  },
  "cns4": {
    "place": "Hampstead e gli ultimi anni",
    "when": "1826–1837",
    "mapLabel": "Hampstead",
    "intro": [
      "Constable vive con i suoi sette figli a Hampstead, ai margini di Londra, e dipinge l’ampia brughiera e il cielo.",
      "Nel 1829 diventa membro effettivo della Royal Academy; i suoi ultimi quadri sono sempre più tempestosi e liberi."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cnepsom": {
    "text": [
      "Dolci colline si stendono fino all’orizzonte sotto un cielo ampio.",
      "Il giovane Constable dipinge il piccolo foglio con pochi toni marroni, grigi e verdi."
    ],
    "fact": "1806. National Gallery of Art, Washington."
  },
  "cncottages": {
    "text": [
      "Dietro alberi scuri brillano i tetti rossi di piccole case nella luce della sera.",
      "Davanti un sentiero chiaro attraversa un prato verde."
    ],
    "fact": "1809–1810. Art Institute of Chicago."
  },
  "cnstoke": {
    "text": [
      "Dietro grandi alberi il campanile del villaggio di Stoke-by-Nayland si alza nel cielo nuvoloso.",
      "Il villaggio si trova a pochi chilometri dal luogo di nascita di Constable."
    ],
    "fact": "circa 1810–1811. Metropolitan Museum of Art, New York."
  },
  "cnwivenhoe": {
    "text": [
      "Alcune mucche pascolano sulla riva di un lago, dietro c’è una casa di campagna tra alberi verdi.",
      "Constable dipinge il parco su commissione del proprietario e aggiunge strisce alla tela perché tutto ci stia."
    ],
    "fact": "1816. National Gallery of Art, Washington."
  },
  "cnpulham": {
    "text": [
      "Una donna con un cappello scuro e un ampio colletto bianco guarda gentile fuori dal quadro.",
      "È la moglie di un amico di Constable di Woodbridge, nel Suffolk."
    ],
    "fact": "1818. Metropolitan Museum of Art, New York."
  },
  "cnwhitehorse": {
    "text": [
      "Un cavallo bianco attraversa il fiume Stour su una chiatta, sulla riva ci sono alberi e una fattoria.",
      "Constable dipinge questa versione a grandezza naturale per preparare il grande quadro."
    ],
    "fact": "1818–1819. National Gallery of Art, Washington."
  },
  "cnsalisbury": {
    "text": [
      "Oltre un prato verde la guglia slanciata della cattedrale di Salisbury si alza nel cielo.",
      "A sinistra alberi alti gettano un’ombra scura."
    ],
    "fact": "1820. National Gallery of Art, Washington."
  },
  "haywain": {
    "text": [
      "Un carro di fieno attraversa il fiume Stour a Flatford, nel Suffolk, molto vicino al mulino del padre di Constable.",
      "A sinistra c’è una casa che esiste ancora oggi."
    ],
    "fact": "1821. The National Gallery, Londra."
  },
  "cnclouds": {
    "text": [
      "Nuvole grigie e rosa attraversano un chiaro cielo serale.",
      "A Hampstead Constable dipinge molti cieli così e spesso annota il giorno, l’ora e il vento."
    ],
    "fact": "1821–1822. National Gallery of Art, Washington."
  },
  "cnyarmouth": {
    "text": [
      "Un lungo molo di legno entra nel mare verde di Yarmouth, all’orizzonte navigano alcune navi.",
      "Sopra la spiaggia si accumulano grandi nuvole bianche e rosa."
    ],
    "fact": "1822. National Gallery of Art, Washington."
  },
  "cnlock": {
    "text": [
      "Sotto un grande albero chiaro un uomo vestito di rosso siede accanto a una chiusa di legno.",
      "Constable conosce fin da bambino le chiuse e le chiatte del fiume Stour."
    ],
    "fact": "circa 1820–1825. Art Institute of Chicago."
  },
  "cnbishop": {
    "text": [
      "Due alberi alti incorniciano la cattedrale chiara come un arco, davanti pascolano alcune mucche.",
      "Il vescovo di Salisbury, zio di John Fisher, amico di Constable, ordina un quadro così."
    ],
    "fact": "circa 1825. Metropolitan Museum of Art, New York."
  },
  "cnbranchhill": {
    "text": [
      "Sopra l’ampia brughiera di Hampstead si addensano nuvole scure di pioggia, in basso luccica un piccolo stagno.",
      "A destra c’è una collina sabbiosa dove pascolano animali minuscoli."
    ],
    "fact": "1828. Cleveland Museum of Art."
  },
  "cncloudwc": {
    "text": [
      "Fasce di nuvole grigio-azzurre passano sopra un orizzonte piatto.",
      "Constable dipinge il foglio ad acquerello, in fretta, prima che le nuvole cambino."
    ],
    "fact": "1830–1835. Metropolitan Museum of Art, New York."
  },
  "cnmill": {
    "text": [
      "Un mulino a vento di legno con grandi pale si alza sotto un cielo tempestoso.",
      "I mulini ricordano a Constable il padre e l’infanzia nel Suffolk."
    ],
    "fact": "1833. Metropolitan Museum of Art, New York."
  },
  "cnstoke36": {
    "text": [
      "Davanti, nel campo, ci sono un aratro e un carro con i cavalli, dietro si alza il campanile di Stoke-by-Nayland.",
      "Quasi 25 anni dopo il primo quadro, Constable dipinge di nuovo il villaggio con pennellate selvagge e libere."
    ],
    "fact": "1836. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
