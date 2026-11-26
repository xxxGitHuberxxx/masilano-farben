// v10.43 IT content for Camille Corot’s life journey (1796–1875). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "jcpeasant": {
    "title": "Giovane contadino italiano",
    "museum": "National Gallery of Art, Washington"
  },
  "jcbartolomeo": {
    "title": "L’isola e il ponte di San Bartolomeo, Roma",
    "museum": "National Gallery of Art, Washington"
  },
  "jcterni": {
    "title": "Cascata di Terni",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcalbano": {
    "title": "Lago Albano e Castel Gandolfo",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jccervara": {
    "title": "La Cervara, la campagna romana",
    "museum": "Cleveland Museum of Art"
  },
  "jchonfleur": {
    "title": "Honfleur: calvario",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jclemaistre": {
    "title": "Toussaint Lemaistre",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcmacon": {
    "title": "Ponte sulla Saona a Mâcon",
    "museum": "National Gallery of Art, Washington"
  },
  "jcgenoa": {
    "title": "Veduta di Genova",
    "museum": "Art Institute of Chicago"
  },
  "jcvolterra": {
    "title": "Veduta presso Volterra",
    "museum": "National Gallery of Art, Washington"
  },
  "jceel": {
    "title": "I raccoglitori di anguille",
    "museum": "National Gallery of Art, Washington"
  },
  "jccurious": {
    "title": "La bambina curiosa",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcagostina": {
    "title": "Agostina",
    "museum": "National Gallery of Art, Washington"
  },
  "jcreadstudio": {
    "title": "Donna che legge nello studio",
    "museum": "National Gallery of Art, Washington"
  },
  "jcreading": {
    "title": "Una donna che legge",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcinterrupted": {
    "title": "Lettura interrotta",
    "museum": "Art Institute of Chicago"
  },
  "jcsibylle": {
    "title": "Sibilla",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcwillows": {
    "title": "Salici e fattoria a Sainte-Catherine-lès-Arras",
    "museum": "Cleveland Museum of Art"
  },
  "jcarleux": {
    "title": "Arleux-Palluel, il ponte degli appuntamenti",
    "museum": "Art Institute of Chicago"
  },
  "jccoubron": {
    "title": "Il bosco di Coubron",
    "museum": "National Gallery of Art, Washington"
  },
  "jcstumpf": {
    "title": "Madame Stumpf e sua figlia",
    "museum": "National Gallery of Art, Washington"
  },
  "jcetretat": {
    "title": "Spiaggia vicino a Étretat",
    "museum": "National Gallery of Art, Washington"
  },
  "jcmorieri": {
    "title": "Donna italiana (La Morieri)",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.corot = {
  "title": "Il percorso di vita di Camille Corot",
  "part": "Roma, la Francia e lo studio",
  "subtitle": "Luce, paesaggio e figure silenziose",
  "intro": "Viaggia nella vita di Camille Corot: da Roma e dalla campagna italiana, attraverso la Francia, fino al suo studio di Parigi. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Camille Corot muore a Parigi nel febbraio 1875, a 78 anni.",
    "È considerato il paesaggista francese più influente dell’Ottocento."
  ],
  "epilogue": "Camille Corot muore nel 1875. Il percorso porta da Roma, attraverso i paesaggi della Francia, fino al suo studio di Parigi.",
  "life": "1796–1875"
};
  P.stations = Object.assign(P.stations || {}, {
  "jcs1": {
    "place": "Tre anni in Italia",
    "when": "1825–1828",
    "mapLabel": "Roma e dintorni",
    "intro": [
      "Camille Corot nasce a Parigi nel 1796; solo a 26 anni lascia il commercio di stoffe e diventa pittore.",
      "Dal 1825 al 1828 vive a Roma e disegna e dipinge spesso all’aperto nella campagna circostante."
    ]
  },
  "jcs2": {
    "place": "Di nuovo in Francia",
    "when": "1830–1834",
    "mapLabel": "Normandia e Borgogna",
    "intro": [
      "Al ritorno Corot dipinge grandi quadri basati sui disegni e bozzetti a olio italiani, costruiti con rigore come paesaggi classici.",
      "Viaggia inoltre per la Francia, per esempio sulla costa della Normandia e in Borgogna, e dipinge anche ritratti."
    ]
  },
  "jcs3": {
    "place": "Di nuovo in Italia",
    "when": "1834–1838",
    "mapLabel": "Genova e la Toscana",
    "intro": [
      "Nel 1834 Corot torna in Italia e dipinge tra l’altro una veduta di Genova.",
      "Nel 1838 espone al Salon di Parigi un paesaggio presso Volterra, in Toscana."
    ]
  },
  "jcs4": {
    "place": "Ricordi e figure",
    "when": "1860–1866",
    "mapLabel": "Francia",
    "intro": [
      "Con acque tranquille, alberi vaporosi e foglie punteggiate di luce, Corot conquista ora un vasto pubblico.",
      "Accanto a questi nascono quadri di figura che non espone e non vende quasi mai."
    ]
  },
  "jcs5": {
    "place": "Lettrici nello studio",
    "when": "1868–1870",
    "mapLabel": "Parigi",
    "intro": [
      "Nel suo studio Corot dipinge modelle che leggono o riflettono; non espone quasi mai questi quadri di figura.",
      "Ama vestire le sue modelle con costumi italiani, perché adora tutto ciò che è italiano."
    ]
  },
  "jcs6": {
    "place": "Arras, bosco e costa",
    "when": "1871–1872",
    "mapLabel": "Francia settentrionale",
    "intro": [
      "Nel 1871 Corot soggiorna ad Arras, circa 160 chilometri a nord di Parigi, e vi dipinge salici, acque e villaggi.",
      "Nel 1872 seguono scene di bosco, una spiaggia della Normandia e ritratti come quello di Madame Stumpf e sua figlia."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "jcpeasant": {
    "text": [
      "Un ragazzo con cappello scuro e camicia chiara si appoggia all’indietro rilassato e ci guarda.",
      "Corot dipinge lo studio in Italia a olio su carta e lo firma «COROT» in basso a sinistra."
    ],
    "fact": "1825–1827. National Gallery of Art, Washington."
  },
  "jcbartolomeo": {
    "text": [
      "Case chiare e un campanile sorgono sull’Isola Tiberina a Roma, a sinistra vi conduce un ponte ad arcate, e tutto si riflette nel fiume.",
      "Corot dipinge lo studio all’aperto, a olio su carta, e lo firma «COROT» in basso a destra."
    ],
    "fact": "1825–1828. National Gallery of Art, Washington."
  },
  "jcterni": {
    "text": [
      "Una cascata bianca precipita tra rocce verdi fittamente coperte di vegetazione.",
      "Terni si trova in Umbria, a nord di Roma; Corot dipinge questo studio a olio su carta nel 1826."
    ],
    "fact": "1826. Metropolitan Museum of Art, New York."
  },
  "jcalbano": {
    "text": [
      "Sopra un lago tranquillo si stende un crinale verde su cui brillano le case di Castel Gandolfo.",
      "Il lago Albano si trova sui colli a sud-est di Roma; Corot lo dipinge a olio su carta."
    ],
    "fact": "1826–1827. Metropolitan Museum of Art, New York."
  },
  "jccervara": {
    "text": [
      "Colline, rocce e piccole figure conducono in diagonale verso un ampio paesaggio vicino a Roma.",
      "Corot basa questo grande dipinto a olio su disegni e bozzetti italiani; la composizione molto strutturata ricorda Nicolas Poussin."
    ],
    "fact": "circa 1830–1831. Cleveland Museum of Art."
  },
  "jchonfleur": {
    "text": [
      "Alberi slanciati sorgono su un’altura sopra il mare, tra loro si leva un’alta croce e ai suoi piedi siedono e si inginocchiano piccole figure.",
      "Honfleur è una città portuale sulla costa della Normandia; Corot dipinge il quadro a olio su tavola."
    ],
    "fact": "circa 1830. Metropolitan Museum of Art, New York."
  },
  "jclemaistre": {
    "text": [
      "Un giovane con una giacca scura dal colletto alto siede su una sedia e ci guarda serio.",
      "Corot dipinge il ritratto a olio su tela nel 1833; l’effigiato visse dal 1807/1808 al 1888."
    ],
    "fact": "1833. Metropolitan Museum of Art, New York."
  },
  "jcmacon": {
    "text": [
      "Un lungo ponte di pietra con molte arcate attraversa la Saona, e a sinistra case chiare sovrastano una riva sabbiosa.",
      "Mâcon si trova in Borgogna; in basso a sinistra si legge a matita «Corot Pingebat 1834»."
    ],
    "fact": "1834. National Gallery of Art, Washington."
  },
  "jcgenoa": {
    "text": [
      "Oltre pendii verdi si stende la chiara città di Genova, e sopra brilla il mare azzurro.",
      "In basso a destra Corot scrive «Gènes 1834», il nome francese della città e l’anno."
    ],
    "fact": "1834. Art Institute of Chicago."
  },
  "jcvolterra": {
    "text": [
      "Un sentiero attraversa un paesaggio assolato e roccioso con alberi, e una piccola figura vi cavalca.",
      "Corot espone il quadro al Salon di Parigi del 1838 come «Vue prise à Volterra, Toscane» e lo firma «COROT. / 1838»."
    ],
    "fact": "1838. National Gallery of Art, Washington."
  },
  "jceel": {
    "text": [
      "In un bosco verde accanto a un ruscello, una donna inginocchiata aiuta un bambino piccolo a camminare, una ragazza porta qualcosa nel grembiule e un ragazzo si arrampica su un albero.",
      "La luce è morbida e diffusa; solo poche macchie chiare tra le foglie lasciano intuire il sole e il cielo."
    ],
    "fact": "1860–1865. National Gallery of Art, Washington."
  },
  "jccurious": {
    "text": [
      "Una bambina con abito e mantellina scuri, in piedi su una pietra, si appoggia a un muro di terra e sbircia curiosa oltre.",
      "Corot dipinge la piccola figura a olio su cartone e firma «COROT» in basso a destra."
    ],
    "fact": "1860–1864. Metropolitan Museum of Art, New York."
  },
  "jcagostina": {
    "text": [
      "Corot veste la modella, probabilmente un’immigrata dalle campagne vicino a Roma, con un costume tradizionale e la colloca in un paesaggio italiano.",
      "Dipinge spalle, occhi e naso con forti contrasti di luce e ombra; «Agostina» è il più grande dei suoi quadri di figura."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "jcreadstudio": {
    "text": [
      "Una giovane donna in camicetta bianca appoggia la testa alla mano e legge a un tavolo; dietro di lei ci sono quadri e un cavalletto.",
      "Il quadro appartiene poi allo scrittore Alexandre Dumas ed è esposto nel 1875 nella grande mostra di Corot a Parigi."
    ],
    "fact": "circa 1868. National Gallery of Art, Washington."
  },
  "jcreading": {
    "text": [
      "Una donna con maniche azzurre siede in un prato e legge un libro, dietro di lei luccica l’acqua in lontananza.",
      "Corot lavora a questo quadro nel 1869 e nel 1870, unendo figura e paesaggio."
    ],
    "fact": "1869–1870. Metropolitan Museum of Art, New York."
  },
  "jcinterrupted": {
    "text": [
      "Una donna in costume italiano tiene un libro in grembo, appoggia la testa alla mano e alza lo sguardo dalla lettura.",
      "Corot la mostra nello spazio protetto del suo studio e dipinge il nastro tra i capelli, gli orecchini e le pieghe profonde della gonna con evidente piacere per il dettaglio."
    ],
    "fact": "circa 1870. Art Institute of Chicago."
  },
  "jcsibylle": {
    "text": [
      "Una giovane donna con un nastro tra i capelli, camicetta bianca e corpetto siede davanti a uno sfondo scuro e ci guarda tranquilla.",
      "Come molte figure tarde di Corot, mostra una modella con abiti di gusto italiano; oggi appartiene alla collezione Havemeyer del Metropolitan Museum."
    ],
    "fact": "circa 1870. Metropolitan Museum of Art, New York."
  },
  "jcwillows": {
    "text": [
      "Accanto a una fattoria dal tetto rosso sorgono salici nodosi, con le foglie punteggiate di luce.",
      "Corot dipinge il quadro nel 1871 durante il soggiorno ad Arras; mostra lo stile con cui conquista un vasto pubblico."
    ],
    "fact": "1871. Cleveland Museum of Art."
  },
  "jcarleux": {
    "text": [
      "Alberi alti e leggeri incorniciano un prato vicino all’acqua, in lontananza c’è un piccolo ponte e davanti si vedono piccole figure.",
      "Arleux e Palluel sono villaggi della Francia settentrionale, non lontano da Arras; Corot firma «Corot» in basso a sinistra."
    ],
    "fact": "1871–1872. Art Institute of Chicago."
  },
  "jccoubron": {
    "text": [
      "La luce cade dorata tra le foglie di alti alberi su un sentiero del bosco dove passa un cavaliere su un cavallo bianco.",
      "Corot firma «COROT 1872»; già nel 1873 il quadro è venduto all’asta a Parigi come «Entrée du bois Coubron, par une matinée de printemps»."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "jcstumpf": {
    "text": [
      "Una donna in abito azzurro passeggia in un bosco assolato tenendo per mano la figlioletta vestita di bianco.",
      "Corot regala il quadro a Monsieur F. Stumpf; la bambina è sua figlia Madeleine."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "jcetretat": {
    "text": [
      "Una spiaggia di sabbia chiara si stende sotto un pendio verde fino al mare calmo, sotto un ampio cielo nuvoloso.",
      "Il piccolo quadro misura appena circa 12 per 25 centimetri; Étretat si trova sulla costa della Normandia."
    ],
    "fact": "circa 1872. National Gallery of Art, Washington."
  },
  "jcmorieri": {
    "text": [
      "Una donna con fazzoletto giallo, camicetta bianca e grembiule ricamato di rosso siede appoggiata al braccio davanti a uno sfondo verde.",
      "Verso il 1874 Corot cede il quadro al mercante d’arte parigino Hector Brame."
    ],
    "fact": "circa 1872. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
