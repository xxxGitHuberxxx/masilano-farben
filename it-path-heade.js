// v10.43 IT content for Martin Johnson Heade’s life journey (1819–1904). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "mhthunder": {
    "title": "Temporale in arrivo",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mhwineglass": {
    "title": "Natura morta con bicchiere da vino",
    "museum": "National Gallery of Art, Washington"
  },
  "mhroses": {
    "title": "Rose ed eliotropio in un vaso su un piano di marmo",
    "museum": "National Gallery of Art, Washington"
  },
  "mhrio": {
    "title": "La baia di Rio de Janeiro",
    "museum": "National Gallery of Art, Washington"
  },
  "mhcattleya": {
    "title": "Orchidea Cattleya e tre colibrì",
    "museum": "National Gallery of Art, Washington"
  },
  "mhorchid": {
    "title": "Fiori di orchidea",
    "museum": "Cleveland Museum of Art"
  },
  "mhjudith": {
    "title": "Point Judith, Rhode Island",
    "museum": "Cleveland Museum of Art"
  },
  "mhyork": {
    "title": "York Harbor, costa del Maine",
    "museum": "Art Institute of Chicago"
  },
  "mhapplevase": {
    "title": "Fiori di melo in un vaso",
    "museum": "National Gallery of Art, Washington"
  },
  "mhapple": {
    "title": "Fiori di melo",
    "museum": "Cleveland Museum of Art"
  },
  "mhhumapple": {
    "title": "Colibrì e fiori di melo",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.heade = {
  "title": "Il percorso di vita di Martin Johnson Heade",
  "part": "New York, il Brasile, il New England",
  "subtitle": "Temporali, orchidee e fiori di melo",
  "intro": "Viaggia nella vita di Martin Johnson Heade: dal suo studio di New York ai colibrì e alle orchidee del Brasile, alle coste del New England e ai suoi quadri di fiori. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Nel 1883 Heade si stabilisce a St. Augustine, in Florida; lì Henry Flagler gli mette poi a disposizione uno studio nell’Hotel Ponce de Leon.",
    "Martin Johnson Heade muore nel 1904 a St. Augustine."
  ],
  "epilogue": "Martin Johnson Heade muore nel 1904. Il percorso porta da New York al Brasile, alle coste del New England e ai suoi fiori di melo.",
  "life": "1819–1904"
};
  P.stations = Object.assign(P.stations || {}, {
  "mhs1": {
    "place": "Uno studio a New York",
    "when": "1859–1862",
    "mapLabel": "New York",
    "intro": [
      "Martin Johnson Heade nasce nel 1819 a Lumberville, in Pennsylvania; prende le prime lezioni di pittura dal suo vicino, il pittore Edward Hicks.",
      "Nel 1859 si è stabilito a New York e ha uno studio nel Tenth Street Studio Building, dove stringe amicizia con Frederic Edwin Church."
    ]
  },
  "mhs2": {
    "place": "Colibrì e orchidee",
    "when": "1864–1873",
    "mapLabel": "Il Brasile e i tropici",
    "intro": [
      "Nel 1863 Heade si reca in Brasile per dipingere colibrì per un libro progettato, «The Gems of Brazil»; il libro non viene mai pubblicato.",
      "Tra il 1863 e il 1870 compie tre viaggi in America centrale e meridionale, e in seguito dipinge più volte orchidee e colibrì in paesaggi tropicali."
    ]
  },
  "mhs3": {
    "place": "Chiaro di luna e porti tranquilli",
    "when": "1867–1877",
    "mapLabel": "Rhode Island e il Maine",
    "intro": [
      "Heade è un viaggiatore irrequieto e vive per periodi a New York, Providence, St. Louis, New Orleans e Richmond.",
      "I suoi primi paesaggi mostrano le paludi salmastre del Rhode Island, e più volte dipinge la luce e l’atmosfera delle coste del New England."
    ]
  },
  "mhs4": {
    "place": "Fiori di melo",
    "when": "1867–1875",
    "mapLabel": "New York",
    "intro": [
      "Oggi Heade è considerato uno dei pochi pittori ugualmente abili nel paesaggio e nella natura morta di fiori.",
      "Dipinge fiori di melo in un vaso, come un solo ramo sul tavolo e sotto il cielo aperto, una volta perfino con un colibrì."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mhthunder": {
    "text": [
      "Sotto un cielo temporalesco quasi nero l’acqua è scura e immobile, e solo una vela bianca brilla in lontananza.",
      "Sulla riva siede un uomo con la camicia rossa insieme a un cagnolino bianco, e a sinistra una barca giace sotto un telo."
    ],
    "fact": "1859. Metropolitan Museum of Art, New York."
  },
  "mhwineglass": {
    "text": [
      "In uno slanciato bicchiere da vino c’è un piccolo mazzo di rose rosse e fiori azzurri su un semplice fondo marrone.",
      "In basso a sinistra si legge l’iscrizione «M.J. Head / -60»."
    ],
    "fact": "1860. National Gallery of Art, Washington."
  },
  "mhroses": {
    "text": [
      "Rose chiare ed eliotropio viola stanno in un vaso bianco su un piano di marmo, e a sinistra una tenda entra nel quadro.",
      "In basso a destra il quadro reca l’iscrizione «1862/ M.J. Heade»."
    ],
    "fact": "1862. National Gallery of Art, Washington."
  },
  "mhrio": {
    "text": [
      "Le onde si infrangono su scogli scuri, e dietro si apre la baia sotto un cielo giallo oro con nuvole bianche.",
      "In basso a sinistra si legge la firma «M. J. Heade / 1864»; un tempo il quadro era noto anche come «Brazilian Seascape»."
    ],
    "fact": "1864. National Gallery of Art, Washington."
  },
  "mhcattleya": {
    "text": [
      "Una splendida orchidea rosa domina il primo piano, il muschio pende dagli alberi e una foschia grigio-azzurra vela la foresta lontana.",
      "A destra, vicino a un nido, si posano tre colibrì: una cometa Sappho verde dalla coda rosso acceso e due ametiste brasiliane verdi e rosa."
    ],
    "fact": "1871. National Gallery of Art, Washington."
  },
  "mhorchid": {
    "text": [
      "Una grande orchidea bianca dal labello rosa sfrangiato pende da steli verdi sopra una valle di foresta scura e nebbiosa.",
      "Quando Heade dipinge questo quadro nel 1873, ha già compiuto tre viaggi in America centrale e meridionale."
    ],
    "fact": "1873. Cleveland Museum of Art."
  },
  "mhjudith": {
    "text": [
      "È una delle poche scene notturne di Heade: il chiaro di luna scintilla sull’acqua e filtra tra le nuvole.",
      "A sinistra navigano due velieri, unica traccia umana in questa scena tranquilla."
    ],
    "fact": "1867–1868. Cleveland Museum of Art."
  },
  "mhyork": {
    "text": [
      "Il sole splende dietro una leggera foschia sopra una baia tranquilla dove si trovano alcune barche a vela.",
      "L’ampio formato orizzontale, la pennellata quasi invisibile e la luce che pervade tutto sono oggi considerati tipici del luminismo."
    ],
    "fact": "1877. Art Institute of Chicago."
  },
  "mhapplevase": {
    "text": [
      "Rami di fiori di melo bianchi e rosa spuntano da un vaso chiaro e decorato su uno sfondo scuro.",
      "Il quadro appartenne un tempo a Cyrus W. Field, a New York, ed è firmato in basso a destra «M.J. Heade 67»."
    ],
    "fact": "1867. National Gallery of Art, Washington."
  },
  "mhapple": {
    "text": [
      "Un solo ramo di fiori di melo è appoggiato su un piano e sostenuto da una parete spoglia.",
      "Heade dipinge circa 150 nature morte di fiori nella sua lunga carriera; firma questa in basso a sinistra «MJ Heade 1873»."
    ],
    "fact": "1873. Cleveland Museum of Art."
  },
  "mhhumapple": {
    "text": [
      "Un ramo di melo fiorito attraversa il quadro davanti a un cielo grigio e nuvoloso.",
      "In basso, un piccolo colibrì verde è posato su un rametto."
    ],
    "fact": "1875. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
