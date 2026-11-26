// v10.43 IT content for Odilon Redon’s life journey (1840–1916). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "odvillage": {
    "title": "Villaggio sul mare in Bretagna",
    "museum": "National Gallery of Art, Washington"
  },
  "odbreton": {
    "title": "Villaggio bretone",
    "museum": "National Gallery of Art, Washington"
  },
  "odsita": {
    "title": "Sita",
    "museum": "Art Institute of Chicago"
  },
  "odbouquet": {
    "title": "Mazzo di fiori",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "odwild": {
    "title": "Fiori di campo",
    "museum": "National Gallery of Art, Washington"
  },
  "odpansies": {
    "title": "Viole del pensiero",
    "museum": "National Gallery of Art, Washington"
  },
  "odetruscan": {
    "title": "Vaso etrusco con fiori",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "odstilllife": {
    "title": "Natura morta con fiori",
    "museum": "Art Institute of Chicago"
  },
  "odvase05": {
    "title": "Vaso di fiori",
    "museum": "Cleveland Museum of Art"
  },
  "odpink": {
    "title": "Vaso di fiori (sfondo rosa)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "odviolette": {
    "title": "Violette Heymann",
    "museum": "Cleveland Museum of Art"
  },
  "odflowers10": {
    "title": "Fiori in un vaso",
    "museum": "National Gallery of Art, Washington"
  },
  "odlargevase": {
    "title": "Grande vaso con fiori",
    "museum": "National Gallery of Art, Washington"
  },
  "odbutterflies": {
    "title": "Cinque farfalle",
    "museum": "National Gallery of Art, Washington"
  },
  "odvase16": {
    "title": "Vaso di fiori",
    "museum": "Cleveland Museum of Art"
  }
});
  P.paths = P.paths || {};
  P.paths.redon = {
  "title": "Il percorso di vita di Odilon Redon",
  "part": "Dal nero al colore",
  "subtitle": "Fiori come in sogno",
  "intro": "Viaggia nella vita di Odilon Redon: dai tranquilli villaggi della Bretagna ai mazzi di fiori luminosi e alle farfalle. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Odilon Redon muore nel 1916 all’età di 76 anni.",
    "I suoi luminosi quadri di fiori si possono vedere ancora oggi in musei di tutto il mondo."
  ],
  "epilogue": "Odilon Redon muore nel 1916. Il percorso porta dalla Bretagna e dalla sua svolta verso il colore ai fiori e alle farfalle degli ultimi anni.",
  "life": "1840–1916"
};
  P.stations = Object.assign(P.stations || {}, {
  "ods1": {
    "place": "Infanzia nel Médoc e paesaggi",
    "when": "1880–1890",
    "mapLabel": "Bretagna",
    "intro": [
      "Odilon Redon nasce a Bordeaux il 20 aprile 1840 e, bambino fragile, trascorre la giovinezza nella tenuta di famiglia di Peyrelebade, nel Médoc, tra brughiere e paludi.",
      "A 20 anni conosce il botanico Armand Clavaud, e disegna dal vero lungo le dune della costa atlantica."
    ]
  },
  "ods2": {
    "place": "Dal nero al colore",
    "when": "1893–1905",
    "mapLabel": "Parigi",
    "intro": [
      "Redon si fa conoscere dapprima con i suoi «noirs», disegni a carboncino nero che espone per la prima volta a Parigi all’inizio degli anni Ottanta dell’Ottocento.",
      "Negli anni Novanta si volge al colore, soprattutto al pastello, polveroso come il carboncino."
    ]
  },
  "ods3": {
    "place": "Fiori come in sogno",
    "when": "1900–1910",
    "mapLabel": "Parigi",
    "intro": [
      "Verso il 1900 fiori e foglie luminosi iniziano a riempire i suoi pastelli e dipinti.",
      "Le nature morte di fiori dominano gli ultimi quindici anni della sua carriera e gli portano il maggiore successo commerciale."
    ]
  },
  "ods4": {
    "place": "Ritratti, fiori e farfalle",
    "when": "1910–1916",
    "mapLabel": "Parigi",
    "intro": [
      "In seguito Redon realizza anche ritratti a pastello di donne con fiori, spesso su commissione.",
      "Dopo il 1912 rinuncia al fissativo per i suoi pastelli, affinché i colori conservino la loro brillantezza."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "odvillage": {
    "text": [
      "Case chiare si allineano sulla riva di una baia azzurra, e davanti si stende un’ampia striscia di sabbia.",
      "Redon dipinge il piccolo quadro a olio su cartone e lo firma «ODILON REDON» in basso a destra."
    ],
    "fact": "circa 1880. National Gallery of Art, Washington."
  },
  "odbreton": {
    "text": [
      "Case bianche con tetti grigi stanno dietro un prato verde, e nel cielo azzurro passano nuvole bianche.",
      "In basso a sinistra Redon firma «ODILON REDON» in colore rosso e viola."
    ],
    "fact": "circa 1890. National Gallery of Art, Washington."
  },
  "odsita": {
    "text": [
      "Una donna dai capelli castano-rossicci guarda di profilo di lato, circondata da azzurro e verde luminosi, mentre a sinistra fluttua una forma dorata.",
      "Qui Redon lavora a pastello e un po’ di matita sopra il carboncino, proprio come passa dal nero al colore."
    ],
    "fact": "circa 1893. Art Institute of Chicago."
  },
  "odbouquet": {
    "text": [
      "Da un vaso azzurro sgorga un mazzo rigoglioso di fiori che ricordano lillà, papaveri e margherite, tra cui svolazzano piccole farfalle.",
      "Redon, grande amico del botanico Armand Clavaud, realizza questo grande pastello con lo stupore di un naturalista."
    ],
    "fact": "circa 1900–1905. Metropolitan Museum of Art, New York."
  },
  "odwild": {
    "text": [
      "In un vaso verde scuro stanno grandi fiori rosso-arancio, stelle gialle e piccoli fiori azzurri davanti a un caldo fondo marrone.",
      "Redon disegna il pastello su carta marrone ricoperta di segatura."
    ],
    "fact": "circa 1905. National Gallery of Art, Washington."
  },
  "odpansies": {
    "text": [
      "Viole del pensiero azzurre, viola e gialle risplendono in un semplice vaso marrone.",
      "Gran parte del fondo marrone resta libera, così i piccoli fiori brillano ancora di più."
    ],
    "fact": "circa 1905. National Gallery of Art, Washington."
  },
  "odetruscan": {
    "text": [
      "In un vaso marrone con un motivo scuro stanno grandi fiori fantastici viola, oro e bianchi.",
      "Redon non dipinge il quadro a olio, ma a tempera su tela."
    ],
    "fact": "1900–1910. Metropolitan Museum of Art, New York."
  },
  "odstilllife": {
    "text": [
      "Da un vaso marrone spuntano rametti sottili con fiori rossi, bianchi e azzurri, e accanto fluttuano piccole farfalle.",
      "Redon dipinge il quadro a olio su tela e scrive «Odilon Redon» in basso a destra."
    ],
    "fact": "1905. Art Institute of Chicago."
  },
  "odvase05": {
    "text": [
      "In un vaso chiaro si affollano fiori rossi, azzurri e bianchi con foglie verdi davanti a un fondo bruno dorato.",
      "Redon vuole dipingere «la natura vista in sogno», e firma «odilon redon» in basso a destra."
    ],
    "fact": "circa 1905. Cleveland Museum of Art."
  },
  "odpink": {
    "text": [
      "Un mazzo colorato di fiori arancioni, rossi, gialli e bianchi sta in un vaso bianco davanti a un delicato fondo rosa.",
      "Redon dipinge il quadro a olio su tela, e i fiori sembrano fluttuare nella luce chiara."
    ],
    "fact": "circa 1906. Metropolitan Museum of Art, New York."
  },
  "odviolette": {
    "text": [
      "Una ragazza in abito verde chiaro siede di profilo accanto a una nuvola di fiori colorati azzurri, viola, rossi e gialli.",
      "È la giovane nipote del collezionista parigino Marcel Kapferer; Redon disegna il ritratto a pastello su carta grigia."
    ],
    "fact": "1910. Cleveland Museum of Art."
  },
  "odflowers10": {
    "text": [
      "Fiori rossi, azzurri e bianchi stanno in un vaso bruno dorato davanti a un fondo chiaro color crema.",
      "Redon dipinge il quadro a olio su tela e lascia molto spazio intorno al piccolo mazzo."
    ],
    "fact": "circa 1910. National Gallery of Art, Washington."
  },
  "odlargevase": {
    "text": [
      "In un vaso azzurro con un motivo rosa brillano fiori arancioni e rosa davanti a un fondo chiaro e vibrante.",
      "Il collezionista parigino Marcel Kapferer compra il quadro direttamente dall’artista e nel 1924 lo presta per una mostra a Parigi."
    ],
    "fact": "circa 1912. National Gallery of Art, Washington."
  },
  "odbutterflies": {
    "text": [
      "Cinque farfalle colorate azzurre, rosse, gialle e marroni fluttuano su un foglio chiaro, quasi vuoto.",
      "Redon le dipinge ad acquerello e aggiunge le iniziali «O.R.» in inchiostro marrone in basso a destra."
    ],
    "fact": "circa 1912. National Gallery of Art, Washington."
  },
  "odvase16": {
    "text": [
      "In un vaso slanciato stanno fiori rosso scuro e viola con sottili rametti bianchi davanti a un fondo giallo acceso e rosa.",
      "Questo pastello dell’ultimo anno di vita di Redon viene esposto nel 1939 all’Esposizione universale di New York."
    ],
    "fact": "1916. Cleveland Museum of Art."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
