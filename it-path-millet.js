// v10.43 IT content for Jean-François Millet’s life journey (1814–1875). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Parigi",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "mlmartin": {
    "title": "Monsieur Martin",
    "museum": "Cleveland Museum of Art"
  },
  "mllisle": {
    "title": "Leconte de Lisle",
    "museum": "National Gallery of Art, Washington"
  },
  "mlman": {
    "title": "Ritratto di uomo",
    "museum": "National Gallery of Art, Washington"
  },
  "mlstorm": {
    "title": "Al riparo dalla tempesta",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mlchickens": {
    "title": "Donna che dà da mangiare alle galline",
    "museum": "Art Institute of Chicago"
  },
  "mlgarden": {
    "title": "Scena di giardino",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mlrock": {
    "title": "Pastorella seduta su una roccia",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "mlrake": {
    "title": "Donna con il rastrello",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gleaners": {
    "title": "Le spigolatrici",
    "museum": "Musée d’Orsay, Parigi"
  },
  "angelus": {
    "title": "L’Angelus",
    "museum": "Musée d’Orsay, Parigi"
  },
  "mlshearers": {
    "title": "La tosatura delle pecore",
    "museum": "Art Institute of Chicago"
  },
  "mlcalf": {
    "title": "Contadini che portano a casa un vitello nato nei campi",
    "museum": "Art Institute of Chicago"
  },
  "mlcows": {
    "title": "Il richiamo delle mucche",
    "museum": "National Gallery of Art, Washington"
  },
  "mlauvergne": {
    "title": "In Alvernia",
    "museum": "Art Institute of Chicago"
  },
  "mllittle": {
    "title": "La piccola pastorella",
    "museum": "Art Institute of Chicago"
  },
  "mlkeeper": {
    "title": "La guardiana del gregge",
    "museum": "Art Institute of Chicago"
  },
  "mlhaystacks": {
    "title": "Covoni: autunno",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.millet = {
  "title": "Il percorso di vita di Jean-François Millet",
  "part": "Normandia, Barbizon e Alvernia",
  "subtitle": "Ritratti, lavoro nei campi e greggi",
  "intro": "Viaggia nella vita di Jean-François Millet: dai primi ritratti a Cherbourg e a Parigi ai quadri dei campi di Barbizon fino ai paesaggi degli ultimi anni. La maggior parte delle immagini proviene da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Jean-François Millet muore a Barbizon il 20 gennaio 1875.",
    "I suoi quadri della vita in campagna ispirano più tardi molti pittori, tra cui Vincent van Gogh, che copia numerosi motivi di Millet."
  ],
  "epilogue": "Jean-François Millet muore a Barbizon il 20 gennaio 1875. Il percorso porta dai primi ritratti alle greggi e ai covoni degli ultimi anni.",
  "life": "1814–1875"
};
  P.stations = Object.assign(P.stations || {}, {
  "mls1": {
    "place": "Da Gréville a Parigi",
    "when": "1814–1848",
    "mapLabel": "Cherbourg",
    "intro": [
      "Jean-François Millet nasce il 4 ottobre 1814 a Gruchy, vicino a Gréville, sulla costa della Normandia, in una famiglia di contadini.",
      "Impara a dipingere a Cherbourg, nel 1837 va a Parigi da Paul Delaroche e all’inizio vive dei ritratti."
    ]
  },
  "millet1": {
    "place": "Barbizon: il lavoro nei campi",
    "when": "1849–1862",
    "mapLabel": "Barbizon",
    "intro": [
      "Nel 1849 Millet si trasferisce con la famiglia a Barbizon, ai margini della foresta di Fontainebleau, e vi resta per il resto della vita.",
      "Qui dipinge contadine, pastorelle e lavoratori dei campi con calma e serietà, senza abbellirli."
    ]
  },
  "mls3": {
    "place": "Ultimi anni: Vichy, Alvernia e Barbizon",
    "when": "1863–1875",
    "mapLabel": "Vichy",
    "intro": [
      "Negli anni Sessanta dell’Ottocento Millet diventa più noto; con la moglie trascorre diverse estati a Vichy e cammina sulle colline dell’Alvernia.",
      "Nei quadri tardi cielo, luce e paesaggio diventano più importanti, e nel 1868 riceve la croce della Legion d’onore."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "mlmartin": {
    "text": [
      "Un uomo con una giacca scura e il colletto bianco guarda serio da uno sfondo scuro.",
      "Intorno al 1840 Millet dipinge soprattutto ritratti di cittadini di Cherbourg."
    ],
    "fact": "1840. Cleveland Museum of Art."
  },
  "mllisle": {
    "text": [
      "Un giovane con un cappotto blu e un fazzoletto rosso appoggia una mano su un parapetto di pietra.",
      "Il ritratto mostra Charles Leconte de Lisle, che più tardi diventerà noto a Parigi come poeta."
    ],
    "fact": "circa 1840–1841. National Gallery of Art, Washington."
  },
  "mlman": {
    "text": [
      "Un giovane con capelli scuri e basette sta di tre quarti, con una mano nella tasca della giacca.",
      "Millet colloca la figura scura davanti a una parete chiara e calda."
    ],
    "fact": "circa 1845. National Gallery of Art, Washington."
  },
  "mlstorm": {
    "text": [
      "Una donna con un fascio di legna e un ragazzo corrono verso casa attraverso un campo scuro, nel vento.",
      "Sopra di loro si addensano nuvole pesanti e il fazzoletto della donna sventola nella tempesta."
    ],
    "fact": "circa 1846. Metropolitan Museum of Art, New York."
  },
  "mlchickens": {
    "text": [
      "Una contadina sparge il mangime alle galline davanti a un muro, mentre un bambino piccolo si tiene alla sua gonna.",
      "La luce cade calda sui loro vestiti."
    ],
    "fact": "1846–1848. Art Institute of Chicago."
  },
  "mlgarden": {
    "text": [
      "Un uomo con il cappello lavora in ginocchio in un orto, dietro di lui due donne e un bambino lavorano tra le aiuole.",
      "Sullo sfondo ci sono basse case coloniche sotto grandi alberi."
    ],
    "fact": "1854. Metropolitan Museum of Art, New York."
  },
  "mlrock": {
    "text": [
      "Una pastorella con una mantella chiara siede su una roccia all’ombra di una siepe e lavora a maglia.",
      "A sinistra la vista si apre su una pianura assolata con il suo gregge."
    ],
    "fact": "1856. Metropolitan Museum of Art, New York."
  },
  "mlrake": {
    "text": [
      "Una contadina raccoglie il fieno con un lungo rastrello di legno, accanto a lei c’è un piccolo mucchio di fieno.",
      "In lontananza altre persone lavorano nel prato luminoso."
    ],
    "fact": "circa 1856–1857. Metropolitan Museum of Art, New York."
  },
  "gleaners": {
    "text": [
      "Tre contadine si chinano sul campo già mietuto e raccolgono le ultime spighe.",
      "Dietro di loro il ricco raccolto sta nei covoni — molto vicino, eppure non per loro."
    ],
    "fact": "1857. Musée d’Orsay, Parigi."
  },
  "angelus": {
    "text": [
      "Due contadini nel campo depongono il lavoro e pregano.",
      "Sullo sfondo c’è una chiesa: da lì suona l’Angelus, la preghiera del mattino, di mezzogiorno e della sera."
    ],
    "fact": "1857–1859. Musée d’Orsay, Parigi."
  },
  "mlshearers": {
    "text": [
      "Sotto una tettoia un contadino e una contadina tosano insieme una pecora.",
      "La donna si china sull’animale con le forbici, l’uomo lo tiene fermo."
    ],
    "fact": "circa 1857–1861. Art Institute of Chicago."
  },
  "mlcalf": {
    "text": [
      "Due uomini portano alla fattoria un vitello appena nato su una barella di paglia, e la mucca li segue da vicino.",
      "All’ingresso della fattoria una donna e dei bambini aspettano il loro arrivo."
    ],
    "fact": "1864. Art Institute of Chicago."
  },
  "mlcows": {
    "text": [
      "Un mandriano in piedi su una roccia suona un corno e le mucche si avvicinano lentamente.",
      "Millet disegna la scena a pastello e matita davanti a un cielo rosa della sera."
    ],
    "fact": "circa 1866. National Gallery of Art, Washington."
  },
  "mlauvergne": {
    "text": [
      "Su una dolce collina una pastorella con la giacca rossa e una conocchia sta accanto alle sue pecore, vicino a un grande gruppo di alberi.",
      "Sopra splende un cielo azzurro con nuvole chiare."
    ],
    "fact": "circa 1866–1869. Art Institute of Chicago."
  },
  "mllittle": {
    "text": [
      "Una bambina avvolta in un grande scialle sta a capo chino accanto a un albero e tiene un bastone da pastore.",
      "Dietro di lei pascolano pecore davanti a una pianura ampia e luminosa."
    ],
    "fact": "1868–1872. Art Institute of Chicago."
  },
  "mlkeeper": {
    "text": [
      "Una pastorella sta in mezzo al suo gregge e le pecore pascolano intorno a lei nella luce della sera.",
      "Dietro di lei una luce chiara si apre un varco tra le nuvole."
    ],
    "fact": "1871–1874. Art Institute of Chicago."
  },
  "mlhaystacks": {
    "text": [
      "Tre grandi covoni si alzano in un’ampia pianura, e davanti pascola un gregge di pecore con il suo pastore.",
      "Il quadro fa parte di una serie delle quattro stagioni a cui Millet lavora negli ultimi anni."
    ],
    "fact": "circa 1874. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
