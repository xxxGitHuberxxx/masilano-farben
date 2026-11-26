// v10.43 IT content for Eugène Boudin’s life journey (1824–1898). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "ebfestival": {
    "title": "Festa nel porto di Honfleur",
    "museum": "National Gallery of Art, Washington"
  },
  "ebopensky": {
    "title": "Marina con cielo aperto",
    "museum": "Cleveland Museum of Art"
  },
  "ebbeach62": {
    "title": "Spiaggia di Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebtrouville63": {
    "title": "Sulla spiaggia di Trouville",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ebjetty": {
    "title": "Molo e banchina a Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebtrouville63b": {
    "title": "Scena di spiaggia a Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebdieppe": {
    "title": "Sulla spiaggia, Dieppe",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ebconcert": {
    "title": "Concerto al casinò di Deauville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebfourwomen": {
    "title": "Quattro donne a Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebconversation": {
    "title": "Conversazione sulla spiaggia",
    "museum": "National Gallery of Art, Washington"
  },
  "ebdogs": {
    "title": "Dame e signore a passeggio sulla spiaggia con due cani",
    "museum": "National Gallery of Art, Washington"
  },
  "ebbrittany": {
    "title": "Costa della Bretagna",
    "museum": "National Gallery of Art, Washington"
  },
  "ebbordeaux": {
    "title": "Veduta di Bordeaux dal Quai des Chartrons",
    "museum": "Cleveland Museum of Art"
  },
  "ebfair": {
    "title": "Fiera in Bretagna",
    "museum": "National Gallery of Art, Washington"
  },
  "ebscheveningen": {
    "title": "Bassa marea a Scheveningen",
    "museum": "National Gallery of Art, Washington"
  },
  "ebbeach77": {
    "title": "La spiaggia",
    "museum": "National Gallery of Art, Washington"
  },
  "ebberck": {
    "title": "Donne sulla spiaggia di Berck",
    "museum": "National Gallery of Art, Washington"
  },
  "ebhavreentry": {
    "title": "Ingresso del porto di Le Havre",
    "museum": "National Gallery of Art, Washington"
  },
  "ebhavre": {
    "title": "Le Havre",
    "museum": "National Gallery of Art, Washington"
  },
  "ebtrouville87": {
    "title": "Sulla spiaggia, Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebhavreships": {
    "title": "Navi e barche a vela lasciano Le Havre",
    "museum": "National Gallery of Art, Washington"
  },
  "ebvalery": {
    "title": "Veduta del porto di Saint-Valéry-sur-Somme",
    "museum": "Cleveland Museum of Art"
  },
  "ebbeaulieu": {
    "title": "Beaulieu: la baia di Fourmis",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ebbeach94": {
    "title": "Sulla spiaggia",
    "museum": "National Gallery of Art, Washington"
  },
  "ebetretat": {
    "title": "Lavandaie sulla spiaggia di Étretat",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.boudin = {
  "title": "Il percorso di vita di Eugène Boudin",
  "part": "Cieli, spiagge e porti",
  "subtitle": "Il re dei cieli",
  "intro": "Viaggia nella vita di Eugène Boudin: dai porti della Normandia e dalle spiagge di Trouville fino a Bordeaux, all’Olanda e al Mediterraneo. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Eugène Boudin muore a Deauville nel 1898, a 74 anni.",
    "Nello stesso anno la galleria Durand-Ruel di New York espone 49 suoi dipinti."
  ],
  "epilogue": "Eugène Boudin muore nel 1898. Il percorso porta da Honfleur e Le Havre, passando per Trouville, a Bordeaux, all’Olanda e alla Riviera.",
  "life": "1824–1898"
};
  P.stations = Object.assign(P.stations || {}, {
  "ebs1": {
    "place": "Una bottega di cornici a Le Havre",
    "when": "1858–1860",
    "mapLabel": "Honfleur e Le Havre",
    "intro": [
      "Eugène Boudin nasce a Honfleur nel 1824, figlio di un capitano di nave; a Le Havre apre una cartoleria con bottega di cornici, dove pittori come Jean-François Millet lo incoraggiano a dipingere.",
      "Nel 1851 la città di Le Havre gli concede una borsa di studio per Parigi; tornato in Normandia conosce il giovane Claude Monet e lo convince a dipingere all’aperto."
    ]
  },
  "ebs2": {
    "place": "Le spiagge di Trouville",
    "when": "1862–1864",
    "mapLabel": "Trouville e Dieppe",
    "intro": [
      "Dal 1862 Boudin dipinge più volte le spiagge di Trouville e Deauville, sulla costa della Normandia.",
      "Sotto cieli immensi mostra dame eleganti in crinolina e le cabine da spiaggia vicino all’acqua."
    ]
  },
  "ebs3": {
    "place": "Società sulla spiaggia",
    "when": "1865–1866",
    "mapLabel": "Trouville e Deauville",
    "intro": [
      "Boudin è in gran parte autodidatta e lavora direttamente dal vero; alla fine degli anni Sessanta dell’Ottocento dipinge insieme a Claude Monet.",
      "Camille Corot lo chiama il «re dei cieli»."
    ]
  },
  "ebs4": {
    "place": "Viaggi: Bretagna, Bordeaux e Olanda",
    "when": "1870–1875",
    "mapLabel": "Bretagna, Bordeaux, Olanda",
    "intro": [
      "Negli anni Settanta dell’Ottocento viaggia in Francia, nei Paesi Bassi e in Italia; nel 1873 visita per la prima volta Bordeaux.",
      "Nel 1874 espone alla prima mostra del gruppo di artisti che presto si chiameranno «impressionisti»."
    ]
  },
  "ebs5": {
    "place": "Spiagge e navi",
    "when": "1877–1883",
    "mapLabel": "Normandia e Piccardia",
    "intro": [
      "Boudin dipinge soprattutto piccoli paesaggi dei porti e delle spiagge della Francia settentrionale.",
      "Molti contemporanei ammirano il suo modo di dipingere il cielo."
    ]
  },
  "ebs6": {
    "place": "Coste degli ultimi anni",
    "when": "1887–1894",
    "mapLabel": "Normandia e Riviera",
    "intro": [
      "Ancora negli anni Novanta dell’Ottocento Boudin dipinge le coste della Normandia e viaggia fino al Mediterraneo.",
      "Claude Monet dice di lui: «Se sono diventato pittore, lo devo a Eugène Boudin»."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ebfestival": {
    "text": [
      "Un grande veliero e barche più piccole sono ornati di bandiere colorate, e sull’acqua si affollano barche a remi piene di gente.",
      "Boudin dipinge il quadro a olio su tavola e scrive «Honfleur» in basso a destra."
    ],
    "fact": "1858. National Gallery of Art, Washington."
  },
  "ebopensky": {
    "text": [
      "Nuvole bianche attraversano un ampio cielo azzurro, sopra una sottile striscia di mare con una piccola vela.",
      "Boudin disegna il foglio a pastello sul posto, perché il pastello è facile da portare e rapido da usare."
    ],
    "fact": "1860. Cleveland Museum of Art."
  },
  "ebbeach62": {
    "text": [
      "Dame in abiti ampi stanno in piedi e sedute davanti a chiare cabine da spiaggia, un cane corre sulla sabbia e all’orizzonte un piroscafo lascia una scia di fumo.",
      "Sopra la scena il cielo nuvoloso occupa più di metà della piccola tavola."
    ],
    "fact": "1862. National Gallery of Art, Washington."
  },
  "ebtrouville63": {
    "text": [
      "Un cavallo trascina sulla sabbia una cabina da spiaggia su ruote, mentre passanti con l’ombrellino stanno vicino all’acqua.",
      "Lo stretto quadro su tavola misura solo circa 27 per 48 centimetri."
    ],
    "fact": "1863. Metropolitan Museum of Art, New York."
  },
  "ebjetty": {
    "text": [
      "Su una lunga banchina attendono persone vestite con eleganza, un cagnolino trotterella davanti e un piroscafo sbuffa una nuvola di fumo nero.",
      "Boudin dipinge la scena a olio su tavola sotto un cielo ampio e mosso."
    ],
    "fact": "1863. National Gallery of Art, Washington."
  },
  "ebtrouville63b": {
    "text": [
      "Un gruppo di dame in abiti chiari e scuri siede su sedie sulla spiaggia; dietro sventolano bandiere su alti pennoni e sul mare passano barche a vela.",
      "Sopra tutto si stende un cielo azzurro chiaro con nuvole leggere."
    ],
    "fact": "1863. National Gallery of Art, Washington."
  },
  "ebdieppe": {
    "text": [
      "Il vento gonfia gli abiti di un gruppo sulla spiaggia, davanti trotterella un cagnolino bianco e nero e in lontananza un molo si allunga nel mare.",
      "Il quadro quasi quadrato su tavola misura solo circa 32 per 29 centimetri."
    ],
    "fact": "1864. Metropolitan Museum of Art, New York."
  },
  "ebconcert": {
    "text": [
      "Sotto il tetto bianco di un padiglione aperto una grande folla in abiti chiari ascolta la musica.",
      "Dietro il padiglione sale una collina verde e sopra c’è un cielo azzurro con nuvole."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "ebfourwomen": {
    "text": [
      "Quattro donne con gonne ampie e mantelline stanno una accanto all’altra; una indossa un cappotto rosso acceso.",
      "Boudin abbozza il piccolo foglio a matita e acquerello; misura solo circa 11 per 15 centimetri."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "ebconversation": {
    "text": [
      "Alcune persone siedono vicine su sedie e chiacchierano; una dama veste di rosso e a sinistra c’è un cane.",
      "Boudin coglie la scena a matita e acquerello su carta color camoscio."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "ebdogs": {
    "text": [
      "Un signore in giacca scura e una dama in abito bianco e rosso stanno al centro, circondati da dame con l’ombrellino e da due cani.",
      "Boudin dipinge il foglio ad acquerello su un disegno a matita."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "ebbrittany": {
    "text": [
      "Sopra una baia calma con scogli scuri in primo piano si ammassano nuvole chiare, e in lontananza naviga un tre alberi.",
      "All’orizzonte brillano chiare scogliere; Boudin dipinge il quadro a olio su tela."
    ],
    "fact": "1870. National Gallery of Art, Washington."
  },
  "ebbordeaux": {
    "text": [
      "Grandi velieri sono ormeggiati alle banchine di Bordeaux, dove si caricano merci e i marinai remano in barchette fino alle navi.",
      "Boudin pone l’orizzonte in basso per dare molto spazio al cielo e firma in basso «E. Boudin / Bordeaux 1874»."
    ],
    "fact": "1874. Cleveland Museum of Art."
  },
  "ebfair": {
    "text": [
      "In un’ampia piazza si accalca gente con cuffie bianche tra mucche bianche e nere, mentre dietro si alza un campanile appuntito.",
      "Nel 1898 il quadro su tavola è esposto in una mostra dedicata a Boudin presso Durand-Ruel a New York."
    ],
    "fact": "1874. National Gallery of Art, Washington."
  },
  "ebscheveningen": {
    "text": [
      "Con la bassa marea barche da pesca con vele marroni giacciono sulla sabbia, mentre nuvole bianche attraversano un cielo azzurro.",
      "In basso a destra Boudin scrive «Schevingue / E. Boudin 75» sul quadro."
    ],
    "fact": "1875. National Gallery of Art, Washington."
  },
  "ebbeach77": {
    "text": [
      "In una lunga fila persone con ombrelli neri siedono e stanno in piedi sulla spiaggia; dietro di loro il mare scintilla con piccole navi.",
      "La stretta tavola misura solo circa 11 per 26 centimetri."
    ],
    "fact": "1877. National Gallery of Art, Washington."
  },
  "ebberck": {
    "text": [
      "Donne con gonne rosse e cuffie bianche stanno in piedi e sedute con delle ceste su una spiaggia ampia e vuota.",
      "Sopra di loro si stende un cielo limpido, azzurro chiaro; il piccolo quadro è dipinto a olio su tavola."
    ],
    "fact": "1881. National Gallery of Art, Washington."
  },
  "ebhavreentry": {
    "text": [
      "Due grandi velieri scivolano nel porto, a sinistra sale un fumo scuro e il cielo argenteo si riflette nell’acqua.",
      "Con circa 119 per 160 centimetri è una delle grandi tele di Boudin."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "ebhavre": {
    "text": [
      "Grandi nuvole bianche si ammassano sopra il mare, dove navigano velieri e una barca a remi piena di uomini.",
      "Boudin dipinge la scena a olio su tela, e il cielo occupa quasi due terzi del quadro."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "ebtrouville87": {
    "text": [
      "Una dama in abito rosso e cappello alto siede sulla sabbia, accanto a un bambino e ad altre dame.",
      "Il piccolo quadro su tavola misura solo circa 18 per 33 centimetri."
    ],
    "fact": "1887. National Gallery of Art, Washington."
  },
  "ebhavreships": {
    "text": [
      "Una barca a vela si inclina al vento sul mare verde e mosso, mentre in lontananza prendono il largo navi più grandi.",
      "Sopra passano nuvole bianche in un cielo azzurro chiaro; il quadro misura circa 90 per 131 centimetri."
    ],
    "fact": "1887. National Gallery of Art, Washington."
  },
  "ebvalery": {
    "text": [
      "Un ampio specchio d’acqua conduce a un piccolo porto con velieri, fiancheggiato da alberi e case.",
      "Sopra tutto passano grandi nuvole grigie e bianche; Boudin dipinge il quadro a olio su tela."
    ],
    "fact": "1891. Cleveland Museum of Art."
  },
  "ebbeaulieu": {
    "text": [
      "Sulla Riviera una baia azzurra si incurva sotto ripide montagne, e sulla riva case chiare si trovano tra gli alberi.",
      "Boudin dipinge il quadro a olio su tela sotto un cielo limpido e luminoso."
    ],
    "fact": "1892. Metropolitan Museum of Art, New York."
  },
  "ebbeach94": {
    "text": [
      "Davanti a una tenda da spiaggia a righe rosse e bianche alcune dame siedono su sedie e dei bambini giocano nella sabbia.",
      "La minuscola tavola misura solo circa 14 per 24 centimetri."
    ],
    "fact": "1894. National Gallery of Art, Washington."
  },
  "ebetretat": {
    "text": [
      "Ai piedi di un’alta scogliera con un arco di roccia, alcune lavandaie stendono panni colorati sui ciottoli.",
      "Sul mare azzurro alle spalle navigano piccole barche; il quadro è dipinto a olio su tavola."
    ],
    "fact": "1894. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
