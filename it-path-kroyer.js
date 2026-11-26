// v10.43 IT content for P.S. Krøyer’s life journey (1851–1909). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Statens Museum for Kunst, Kopenhagen": "Statens Museum for Kunst, Copenaghen"
});
  P.works = Object.assign(P.works || {}, {
  "pssmithy": {
    "title": "Una fucina a Hornbæk",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psfisher": {
    "title": "Ritratto di un pescatore di Hornbæk",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psherring": {
    "title": "Pescatori di Hornbæk alla pesca delle aringhe",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pssardine": {
    "title": "Una fabbrica di sardine a Concarneau",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psguillou": {
    "title": "Ritratto del pittore francese Alfred Guillou",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psseascape": {
    "title": "Marina, Skagen",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psmeldahl": {
    "title": "Ritratto dell’architetto F. Meldahl",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pstuxen": {
    "title": "Ritratto di Frederikke Tuxen",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "psbeach": {
    "title": "Pescatori sulla spiaggia di Skagen",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psfoundry": {
    "title": "La fonderia di Burmeister & Wain",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psduet": {
    "title": "Un duetto",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psthreshing": {
    "title": "La trebbiatura in Abruzzo, Cività d’Antino",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pstorello": {
    "title": "Una strada di Torello, Italia",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pscatarinella": {
    "title": "Testa di una ragazza di Cività d’Antino in costume («Catarinella»)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "psrosenorn": {
    "title": "Il barone Otto Ditlev Rosenørn-Lehn",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psevening": {
    "title": "Sera a Skagen",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psschandorph": {
    "title": "Lo scrittore Sophus Schandorph",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pssteenstrup": {
    "title": "Lo zoologo Japetus Steenstrup tiene una conferenza",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pscasse": {
    "title": "Ritratto di S. A. Casse, nata Engelbreth",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psgroup": {
    "title": "Gruppo di ritratti",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pshelga": {
    "title": "Una bambina, Helga Melchior, con un abito lungo",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psmoonlight": {
    "title": "La spiaggia di Skagen al chiaro di luna",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "psraben": {
    "title": "Ritratto della contessa Lillie Suzanne Raben-Levetzau",
    "museum": "Statens Museum for Kunst, Copenaghen"
  }
});
  P.paths = P.paths || {};
  P.paths.kroyer = {
  "title": "Il percorso di vita di P. S. Krøyer",
  "part": "Pescatori, amici e sere azzurre",
  "subtitle": "Da Hornbæk a Skagen, passando per Parigi e l’Italia",
  "intro": "Viaggia nella vita di P. S. Krøyer: dai pescatori di Hornbæk, passando per Parigi, la Spagna e l’Italia, fino alle chiare sere d’estate di Skagen. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "P. S. Krøyer muore a Skagen il 21 novembre 1909.",
    "Un anno prima ha fondato insieme ad altri lo Skagens Museum, che dopo la sua morte allestisce le prime sale espositive nella sua ex casa."
  ],
  "epilogue": "P. S. Krøyer muore a Skagen il 21 novembre 1909. Il percorso porta da Hornbæk, passando per Parigi, la Bretagna e l’Italia, fino alla spiaggia di Skagen.",
  "life": "1851–1909"
};
  P.stations = Object.assign(P.stations || {}, {
  "pss1": {
    "place": "Infanzia e anni di formazione",
    "when": "1851–1877",
    "mapLabel": "Hornbæk",
    "intro": [
      "Peder Severin Krøyer nasce a Stavanger, in Norvegia, il 23 luglio 1851 e cresce a Copenaghen con genitori affidatari; il padre affidatario è lo zoologo H. N. Krøyer.",
      "Inizia la sua formazione già a dieci anni, poi studia all’Accademia di Belle Arti e dipinge pescatori e artigiani a Hornbæk."
    ]
  },
  "pss2": {
    "place": "Parigi, la Bretagna e la Spagna",
    "when": "1877–1881",
    "mapLabel": "Parigi",
    "intro": [
      "A Parigi Krøyer studia con il pittore Léon Bonnat, e in Bretagna dipinge persone al lavoro.",
      "Nel 1878 va in Spagna con amici pittori e studia per mesi i quadri di Velázquez."
    ]
  },
  "pss3": {
    "place": "Skagen e Copenaghen",
    "when": "1882–1888",
    "mapLabel": "Skagen",
    "intro": [
      "Dal 1882 Krøyer torna spesso a Skagen, dove si incontrano pittori e scrittori danesi e scandinavi.",
      "D’inverno a Copenaghen dipinge molte commissioni, ritratti e quadri di fabbriche e salotti."
    ]
  },
  "pss4": {
    "place": "Matrimonio e Italia",
    "when": "1889–1891",
    "mapLabel": "Italia",
    "intro": [
      "Nel 1889 Krøyer sposa la pittrice Marie Triepcke, più giovane di lui di 16 anni.",
      "Nel 1890 dipinge in Italia, tra l’altro a Cività d’Antino, in Abruzzo."
    ]
  },
  "pss5": {
    "place": "Sere azzurre e grandi commissioni",
    "when": "1893–1909",
    "mapLabel": "Skagen e Copenaghen",
    "intro": [
      "Negli anni Novanta dell’Ottocento Krøyer dipinge le chiare sere d’estate sulla spiaggia di Skagen in toni azzurri.",
      "Accanto a questo realizza grandi commissioni, come un ritratto di gruppo della Reale Accademia danese delle scienze e delle lettere."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "pssmithy": {
    "text": [
      "In una fucina buia alcuni uomini lavorano alla luce del fuoco.",
      "Krøyer dipinge il quadro a 21 o 22 anni nel villaggio di pescatori di Hornbæk."
    ],
    "fact": "1873. Statens Museum for Kunst, Copenaghen."
  },
  "psfisher": {
    "text": [
      "Un pescatore con un cappello cerato giallo e il volto segnato guarda dritto lo spettatore.",
      "Krøyer lo dipinge su una tavola di legno."
    ],
    "fact": "1875. Statens Museum for Kunst, Copenaghen."
  },
  "psherring": {
    "text": [
      "Alcuni pescatori in una barca su un mare grigio tirano su le reti, con il pescato argentato in primo piano.",
      "Krøyer mostra gli uomini al lavoro, da vicino e senza abbellimenti."
    ],
    "fact": "1877. Statens Museum for Kunst, Copenaghen."
  },
  "pssardine": {
    "text": [
      "Donne con cuffie bretoni bianche lavorano a lunghi tavoli in un capannone di fabbrica.",
      "Concarneau è un porto di pescatori in Bretagna, e il quadro mostra la vita quotidiana delle operaie."
    ],
    "fact": "1879. Statens Museum for Kunst, Copenaghen."
  },
  "psguillou": {
    "text": [
      "Un uomo con la barba nera e un fazzoletto rosso al collo è visto di profilo.",
      "Alfred Guillou è un collega pittore francese."
    ],
    "fact": "1879. Statens Museum for Kunst, Copenaghen."
  },
  "psseascape": {
    "text": [
      "Onde grigioverdi rotolano verso la spiaggia sotto un cielo coperto.",
      "Il quadro nasce nel 1882, la prima estate che Krøyer trascorre a Skagen."
    ],
    "fact": "1882. Statens Museum for Kunst, Copenaghen."
  },
  "psmeldahl": {
    "text": [
      "L’architetto sta in piedi con un lungo cappotto nero davanti a un camino bianco.",
      "Il ritratto lo mostra a figura intera."
    ],
    "fact": "1882. Statens Museum for Kunst, Copenaghen."
  },
  "pstuxen": {
    "text": [
      "Una giovane donna sta in piedi tranquilla, disegnata con gesso nero e bianco su carta marrone.",
      "Il foglio è grande, alto circa 130 centimetri."
    ],
    "fact": "1882. Metropolitan Museum of Art, New York."
  },
  "psbeach": {
    "text": [
      "Alcuni pescatori sono sdraiati e seduti sulla sabbia chiara, uno in piedi guarda il mare.",
      "Il quadro è largo circa due metri e il museo lo acquista già nel 1884."
    ],
    "fact": "1883. Statens Museum for Kunst, Copenaghen."
  },
  "psfoundry": {
    "text": [
      "In un grande capannone alcuni uomini lavorano il ferro incandescente sotto una gru.",
      "Burmeister & Wain è una grande azienda industriale di Copenaghen."
    ],
    "fact": "1885. Statens Museum for Kunst, Copenaghen."
  },
  "psduet": {
    "text": [
      "Una donna in abito arancione canta accanto a un uomo al pianoforte, e gli ospiti ascoltano alla luce delle candele.",
      "Qui Krøyer dipinge una serata in un salotto, con molti toni scuri."
    ],
    "fact": "1887. Statens Museum for Kunst, Copenaghen."
  },
  "psthreshing": {
    "text": [
      "Sotto un sole intenso alcuni contadini spingono i bovini sulla paglia dorata, mentre altri lavorano con i forconi.",
      "Cività d’Antino è un paese di montagna in Abruzzo dove Krøyer dipinge nel 1890."
    ],
    "fact": "1890. Statens Museum for Kunst, Copenaghen."
  },
  "pstorello": {
    "text": [
      "In un vicolo stretto e bianco donne e bambini stanno al sole.",
      "La luce sui muri chiari è il vero soggetto del quadro."
    ],
    "fact": "1890. Statens Museum for Kunst, Copenaghen."
  },
  "pscatarinella": {
    "text": [
      "Una ragazza sorridente porta un fazzoletto giallo e uno rosso sui capelli.",
      "Krøyer dipinge il piccolo acquerello sopra un disegno a matita."
    ],
    "fact": "1890. Metropolitan Museum of Art, New York."
  },
  "psrosenorn": {
    "text": [
      "Un anziano signore dai capelli bianchi, in abito nero, siede in poltrona con le mani giunte.",
      "Nel 1870 Rosenørn-Lehn era ministro degli Esteri danese e direttore della collezione reale di dipinti."
    ],
    "fact": "1891. Statens Museum for Kunst, Copenaghen."
  },
  "psevening": {
    "text": [
      "Il sole tramonta dietro una terra piatta, e nuvole rosa e dorate si riflettono nell’acqua.",
      "Il piccolo quadro su tavola è largo solo circa 43 centimetri."
    ],
    "fact": "1893. Statens Museum for Kunst, Copenaghen."
  },
  "psschandorph": {
    "text": [
      "Un uomo robusto con la barba grigia siede alla scrivania sotto una lampada.",
      "Sophus Schandorph è uno scrittore danese."
    ],
    "fact": "1895. Statens Museum for Kunst, Copenaghen."
  },
  "pssteenstrup": {
    "text": [
      "Un anziano dai capelli bianchi parla in piedi, mentre altri uomini lo ascoltano alle sue spalle.",
      "Japetus Steenstrup è professore di zoologia."
    ],
    "fact": "1895. Statens Museum for Kunst, Copenaghen."
  },
  "pscasse": {
    "text": [
      "Un’anziana con la cuffia lavora a maglia vicino a una finestra con fiori.",
      "Krøyer disegna il ritratto a pastello su carta."
    ],
    "fact": "1895. Statens Museum for Kunst, Copenaghen."
  },
  "psgroup": {
    "text": [
      "Quattro anziani signori siedono uno accanto all’altro a un tavolo, vicino a un candelabro dorato.",
      "Nello stesso anno Krøyer lavora al suo grande ritratto di gruppo dell’Accademia delle scienze."
    ],
    "fact": "1896. Statens Museum for Kunst, Copenaghen."
  },
  "pshelga": {
    "text": [
      "Una bambina con i capelli sciolti sta in piedi con un lungo abito bianco in una stanza buia.",
      "Krøyer dipinge il ritratto su una tavola di legno."
    ],
    "fact": "1897. Statens Museum for Kunst, Copenaghen."
  },
  "psmoonlight": {
    "text": [
      "Un mare azzurro e calmo e una spiaggia chiara si stendono sotto la luna, con una piccola barca a vela in lontananza.",
      "Quadri di spiaggia azzurri come questo sono tra le opere più conosciute di Krøyer."
    ],
    "fact": "1899. Statens Museum for Kunst, Copenaghen."
  },
  "psraben": {
    "text": [
      "Una donna in abito da sera bianco sta in piedi davanti a una tenda verde.",
      "Il ritratto la mostra a figura intera, in colori chiari e leggeri."
    ],
    "fact": "1899. Statens Museum for Kunst, Copenaghen."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
