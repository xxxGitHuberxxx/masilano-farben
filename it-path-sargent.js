// v10.43 IT content for John Singer Sargent’s life journey (1856–1925). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "jsalhambra": {
    "title": "Torre de los Picos, Alhambra",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jspilatus": {
    "title": "Veduta dal monte Pilatus",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jschalets": {
    "title": "Chalet, Breithorn, Mürren",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jstyrol": {
    "title": "Edicola tirolese",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsfish": {
    "title": "In cammino verso la pesca",
    "museum": "National Gallery of Art, Washington"
  },
  "jspailleron": {
    "title": "Marie Buloz Pailleron",
    "museum": "National Gallery of Art, Washington"
  },
  "jsleones": {
    "title": "Patio de los Leones, Alhambra",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jstetouan": {
    "title": "Cortile, Tetuan, Marocco",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jswhitewalls": {
    "title": "Muri bianchi al sole, Marocco",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsvenstreet": {
    "title": "Strada a Venezia",
    "museum": "National Gallery of Art, Washington"
  },
  "jstownsend": {
    "title": "Miss Beatrice Townsend",
    "museum": "National Gallery of Art, Washington"
  },
  "jsmadamex": {
    "title": "Madame X (Virginie Amélie Avegno Gautreau)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jswhite": {
    "title": "Margaret Stuyvesant Rutherfurd White (Mrs. Henry White)",
    "museum": "National Gallery of Art, Washington"
  },
  "jsreapers": {
    "title": "Mietitori a riposo in un campo di grano",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsdeirbahri": {
    "title": "Scogliere di Deir el-Bahari, Egitto",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jspavement": {
    "title": "Pavimento, Il Cairo",
    "museum": "National Gallery of Art, Washington"
  },
  "jswatercarr": {
    "title": "Portatrici d’acqua sul Nilo",
    "museum": "Art Institute of Chicago"
  },
  "jsaranjuez": {
    "title": "Mezzogiorno spagnolo, Aranjuez",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsgreendoor": {
    "title": "Porta verde, Santa Maria della Salute",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jspatio": {
    "title": "Il patio",
    "museum": "Cleveland Museum of Art"
  },
  "jstarragona": {
    "title": "Terrazza e giardino a Tarragona",
    "museum": "Art Institute of Chicago"
  },
  "jstorlonia": {
    "title": "La fontana, Villa Torlonia, Frascati, Italia",
    "museum": "Art Institute of Chicago"
  },
  "jscorfu": {
    "title": "Sotto i cipressi a Corfù",
    "museum": "Art Institute of Chicago"
  },
  "jssimplon": {
    "title": "Passo del Sempione",
    "museum": "National Gallery of Art, Washington"
  },
  "jspalmettos": {
    "title": "Palme nane",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jsvizcaya": {
    "title": "Terrazza, Vizcaya",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.sargent = {
  "title": "Il percorso di vita di John Singer Sargent",
  "part": "Le Alpi, Parigi, Londra, l’Egitto e la Florida",
  "subtitle": "Ritratti, luce e acquerelli",
  "intro": "Viaggia nella vita di John Singer Sargent: dalle Alpi della sua infanzia, passando per Parigi e Londra, fino all’Egitto, alla Spagna, a Venezia e alla Florida. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "John Singer Sargent muore nel 1925 a Londra.",
    "Pur trascorrendo quasi tutta la vita in Europa, rimane cittadino americano fino alla fine."
  ],
  "epilogue": "John Singer Sargent muore nel 1925. Il percorso porta dalle Alpi, passando per Parigi e Londra, all’Egitto, alla Spagna, all’Italia e alla Florida.",
  "life": "1856–1925"
};
  P.stations = Object.assign(P.stations || {}, {
  "jss1": {
    "place": "Un’infanzia in viaggio",
    "when": "1868–1871",
    "mapLabel": "Le Alpi e la Spagna",
    "intro": [
      "John Singer Sargent nasce a Firenze nel gennaio 1856; i genitori americani trascorrono gli inverni a Firenze, Roma o Nizza e le estati sulle Alpi.",
      "La madre, pittrice dilettante, lo incoraggia a disegnare, e la sua passione per i viaggi gli fornisce i soggetti."
    ]
  },
  "jss2": {
    "place": "Allievo a Parigi, viaggi in Spagna e in Marocco",
    "when": "1878–1880",
    "mapLabel": "Parigi, la Spagna e il Marocco",
    "intro": [
      "Nel maggio 1874 Sargent entra nello studio parigino di Carolus-Duran, che fa dipingere gli allievi direttamente con il pennello e indica loro soprattutto Velázquez.",
      "Nel 1879 e nel 1880 viaggia in Spagna e in Marocco."
    ]
  },
  "jss3": {
    "place": "Madame X e il trasferimento a Londra",
    "when": "1882–1885",
    "mapLabel": "Venezia, Parigi e Londra",
    "intro": [
      "Il suo ritratto più noto, «Madame X», suscita scandalo al Salon di Parigi del 1884.",
      "Nella primavera del 1886 Sargent si trasferisce in Inghilterra per il resto della vita; dal 1885 fa più volte visita a Claude Monet a Giverny."
    ]
  },
  "jss4": {
    "place": "Bozzetti a olio dall’Egitto",
    "when": "1890–1891",
    "mapLabel": "Egitto",
    "intro": [
      "Nel 1891 Sargent si reca in Egitto e vi dipinge una serie di rapidi bozzetti a olio di paesaggi, persone ed edifici.",
      "Nello stesso anno inizia i grandi dipinti murali per la Biblioteca pubblica di Boston."
    ]
  },
  "jss5": {
    "place": "Acquerelli dalla Spagna e da Venezia",
    "when": "1903–1908",
    "mapLabel": "Spagna e Venezia",
    "intro": [
      "Negli anni Novanta dell’Ottocento e all’inizio del Novecento Sargent è all’apice della fama come ritrattista.",
      "Sempre più spesso dipinge acquerelli, di solito in una sola seduta, lasciando che i colori si fondano liberamente."
    ]
  },
  "jss6": {
    "place": "Addio al ritratto",
    "when": "1907–1911",
    "mapLabel": "L’Italia, Corfù e le Alpi",
    "intro": [
      "Nel 1907 e nel 1908 Sargent dichiara di «chiudere bottega per i ritratti» per dedicarsi a paesaggi, studi di figura e dipinti murali.",
      "Ora dipinge all’aperto, spesso in viaggio con amici e parenti."
    ]
  },
  "jss7": {
    "place": "Palme e una villa in Florida",
    "when": "1917",
    "mapLabel": "Florida",
    "intro": [
      "Nel febbraio 1917 Sargent si reca a Ormond Beach, in Florida, per ritrarre John D. Rockefeller, e prosegue poi verso la zona di Miami per far visita all’amico Charles Deering.",
      "Lì resta affascinato dalla villa Vizcaya di James Deering, allora in costruzione."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "jsalhambra": {
    "text": [
      "Una torre rossastra merlata si alza sopra un muro dell’Alhambra di Granada, con case bianche dietro, sotto un cielo chiaro.",
      "Sargent dipinge questo acquerello a dodici anni; il foglio entra nel Metropolitan Museum nel 1950 come dono di Mrs. Francis Ormond."
    ],
    "fact": "1868. Metropolitan Museum of Art, New York."
  },
  "jspilatus": {
    "text": [
      "Un cielo giallo della sera brilla sopra catene di montagne azzurre, a sinistra si ergono abeti scuri e in basso si stende un lago.",
      "L’acquerello nasce nel 1870 in Svizzera, sul monte Pilatus vicino a Lucerna."
    ],
    "fact": "1870. Metropolitan Museum of Art, New York."
  },
  "jschalets": {
    "text": [
      "Davanti alle cime innevate intorno al Breithorn sorgono due baite di legno con tetti piatti di pietra.",
      "Sargent dipinge questo foglio ad acquerello e grafite nel 1870 a Mürren, nell’Oberland bernese."
    ],
    "fact": "1870. Metropolitan Museum of Art, New York."
  },
  "jstyrol": {
    "text": [
      "Una casa di legno marrone su uno zoccolo di pietra sorge in un prato assolato, accanto ad alcuni alberi.",
      "L’acquerello nasce nel 1871 durante un viaggio della famiglia in Tirolo."
    ],
    "fact": "1871. Metropolitan Museum of Art, New York."
  },
  "jsfish": {
    "text": [
      "Donne e bambini attraversano con le ceste una spiaggia della Bretagna per raccogliere frutti di mare nelle pozze della bassa marea; sullo sfondo si vede un faro.",
      "Il ventiduenne Sargent espone il quadro al Salon di Parigi del 1878, e il quadro trova un acquirente."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "jspailleron": {
    "text": [
      "Una donna con un lungo abito nero sta in piedi in un prato verde sotto gli alberi e ci guarda.",
      "Il marito, Édouard Pailleron, commissiona il ritratto nel 1879; Sargent lo firma «John S. Sargent / Ronjoux 1879»."
    ],
    "fact": "1879. National Gallery of Art, Washington."
  },
  "jsleones": {
    "text": [
      "Una luce intensa cade su colonne e sul pavimento di pietra di un cortile dell’Alhambra di Granada.",
      "Sargent dipinge questo foglio nel 1879 ad acquerello, guazzo e grafite durante il viaggio in Spagna."
    ],
    "fact": "1879. Metropolitan Museum of Art, New York."
  },
  "jstetouan": {
    "text": [
      "Muri bianchi e azzurro chiaro circondano un cortile assolato con una porta rossa e una scura sotto archi a ferro di cavallo.",
      "Sargent dipinge questo piccolo studio a olio su tavola durante il viaggio in Marocco nel 1879 e nel 1880."
    ],
    "fact": "1879–1880. Metropolitan Museum of Art, New York."
  },
  "jswhitewalls": {
    "text": [
      "Una luce abbagliante colpisce muri bianchi con una piccola porta marrone, e in primo piano c’è un fossato in ombra.",
      "Come il cortile di Tetuan, anche questo studio a olio è dipinto su tavola."
    ],
    "fact": "1879–1880. Metropolitan Museum of Art, New York."
  },
  "jsvenstreet": {
    "text": [
      "Una donna con uno scialle scuro cammina in una stretta calle veneziana mentre due uomini in cappotto scuro la osservano.",
      "Sargent espone il quadro a Parigi nel 1882 con il titolo «Une rue à Venise»."
    ],
    "fact": "1882. National Gallery of Art, Washington."
  },
  "jstownsend": {
    "text": [
      "Una bambina con abito nero, colletto di pizzo color crema, fusciacca rossa e collana di corallo tiene in braccio un piccolo terrier.",
      "In alto si legge la dedica «to my friend Mrs Townsend John S. Sargent»; la madre della bambina era amica del pittore."
    ],
    "fact": "1882. National Gallery of Art, Washington."
  },
  "jsmadamex": {
    "text": [
      "Una donna in abito da sera nero sta accanto a un tavolino e volge la testa di profilo.",
      "Sargent dipinge il quadro senza commissione; al Salon di Parigi del 1884 suscita scandalo."
    ],
    "fact": "1883–1884. Metropolitan Museum of Art, New York."
  },
  "jswhite": {
    "text": [
      "Una donna con un lungo abito di raso bianco sta davanti a una chaise longue e tiene un ventaglio e un binocolo da teatro nero.",
      "Sceglie Sargent dopo aver visto le sue opere al Salon di Parigi del 1882; il quadro è firmato «John S. Sargent 1883»."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "jsreapers": {
    "text": [
      "Un campo di grano dorato con i covoni si estende fino a una fila di alberi scuri, e nel campo riposano piccole figure di mietitori.",
      "Sargent dipinge il quadro nel 1885, l’anno a partire dal quale fa visita a Claude Monet a Giverny."
    ],
    "fact": "1885. Metropolitan Museum of Art, New York."
  },
  "jsdeirbahri": {
    "text": [
      "Scogliere color ocra brillano al sole e le loro ombre cadono azzurrine sul suolo del deserto.",
      "Deir el-Bahari si trova sulla riva occidentale del Nilo, vicino a Luxor; Sargent dipinge questo studio a olio durante il viaggio in Egitto."
    ],
    "fact": "1890–1891. Metropolitan Museum of Art, New York."
  },
  "jspavement": {
    "text": [
      "Un pavimento di marmo intarsiato rosso, bianco e grigio conduce a un portale scuro; Sargent lo dipinge da un punto di vista basso.",
      "È il cortile della moschea di Solimano Pascià, costruita nel 1528, nella cittadella del Cairo."
    ],
    "fact": "1891. National Gallery of Art, Washington."
  },
  "jswatercarr": {
    "text": [
      "Figure vestite di scuro con delle brocche stanno al margine di un sentiero, davanti a campi verdi.",
      "Lo studio a olio nasce in Egitto nel 1891; sul retro porta il timbro di Sargent «JSS»."
    ],
    "fact": "1891. Art Institute of Chicago."
  },
  "jsaranjuez": {
    "text": [
      "Alberi alti proiettano ombre su un muro chiaro, e a sinistra si apre una piazza assolata con piccole figure.",
      "Aranjuez, a sud di Madrid, è una residenza reale spagnola con grandi giardini."
    ],
    "fact": "1903. Metropolitan Museum of Art, New York."
  },
  "jsgreendoor": {
    "text": [
      "Una porta verde in un portale bianco ad arco occupa il centro del foglio, mentre i gradini in basso sono appena accennati.",
      "Santa Maria della Salute è una grande chiesa sul Canal Grande a Venezia; Sargent dipinge ad acquerello, guazzo e pastello a cera."
    ],
    "fact": "circa 1904. Metropolitan Museum of Art, New York."
  },
  "jspatio": {
    "text": [
      "Sotto un porticato in ombra cresce in primo piano una pianta verde, e la luce cade vivida su muri e pavimento.",
      "L’acquerello mostra come Sargent dipinge negli ultimi anni: in una sola seduta, lasciando che i colori si fondano liberamente."
    ],
    "fact": "1908. Cleveland Museum of Art."
  },
  "jstarragona": {
    "text": [
      "Una fila di colonne chiare sorge su una terrazza assolata, e dietro brilla il verde di un giardino.",
      "Tarragona si trova sulla costa mediterranea della Spagna; Sargent dipinge questo foglio ad acquerello e guazzo."
    ],
    "fact": "circa 1908. Art Institute of Chicago."
  },
  "jstorlonia": {
    "text": [
      "Davanti a un’alta fontana un uomo e una donna vestita di bianco con la tavolozza siedono accanto a un cavalletto e dipingono all’aperto.",
      "Sono i pittori Wilfrid e Jane Emmet de Glehn, compagni di viaggio di Sargent; poiché la pioggia interrompe il lavoro, vi dipinge per diversi giorni."
    ],
    "fact": "1907. Art Institute of Chicago."
  },
  "jscorfu": {
    "text": [
      "Alti cipressi scuri si levano in un cielo pallido, a sinistra luccica il mare e nell’erba alcune persone riposano all’ombra.",
      "L’isola greca di Corfù si trova nel Mar Ionio; Sargent dipinge il quadro nel 1909."
    ],
    "fact": "1909. Art Institute of Chicago."
  },
  "jssimplon": {
    "text": [
      "Un ruscello scende tra i massi lungo un pendio, e sopra si erge la cima dello Hübschhorn contro il cielo azzurro.",
      "Nel 1909, nel 1910 e nel 1911 Sargent trascorre le vacanze con amici e parenti al passo del Sempione, nelle Alpi svizzere."
    ],
    "fact": "1911. National Gallery of Art, Washington."
  },
  "jspalmettos": {
    "text": [
      "Foglie di palma a ventaglio riempiono tutto il foglio, e tra loro brillano ombre rosse e viola.",
      "Sargent dipinge questo acquerello in Florida nel 1917, con grafite e pastello a cera."
    ],
    "fact": "1917. Metropolitan Museum of Art, New York."
  },
  "jsvizcaya": {
    "text": [
      "Una balaustra di pietra con un grande vaso separa un prato verde dal mare azzurro, e a destra c’è un albero.",
      "Vizcaya è la villa in stile italiano che James Deering si fa costruire vicino a Miami."
    ],
    "fact": "1917. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
