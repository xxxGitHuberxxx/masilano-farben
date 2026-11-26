// v10.43 IT content for George Inness’s life journey (1825–1894). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "incrossing": {
    "title": "L’attraversamento del guado",
    "museum": "Art Institute of Chicago"
  },
  "inoldmill": {
    "title": "Il vecchio mulino",
    "museum": "Art Institute of Chicago"
  },
  "inwoodchop": {
    "title": "Il taglialegna",
    "museum": "Cleveland Museum of Art"
  },
  "indurham": {
    "title": "Durham, Connecticut",
    "museum": "Cleveland Museum of Art"
  },
  "inwatergap": {
    "title": "Delaware Water Gap",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "inwintersky": {
    "title": "Un cielo d’inverno",
    "museum": "Cleveland Museum of Art"
  },
  "insummercats": {
    "title": "Estate nei Catskill",
    "museum": "Art Institute of Chicago"
  },
  "inharvestdel": {
    "title": "Scena di mietitura nella valle del Delaware",
    "museum": "National Gallery of Art, Washington"
  },
  "incatskill": {
    "title": "I monti Catskill",
    "museum": "Art Institute of Chicago"
  },
  "inalban": {
    "title": "Temporale in arrivo dai Colli Albani",
    "museum": "Cleveland Museum of Art"
  },
  "incampagna": {
    "title": "Attraverso la campagna romana",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "intivoli": {
    "title": "Ulivi a Tivoli",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "inbarberini": {
    "title": "Pineta di Villa Barberini",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "inetretat": {
    "title": "Collina a Étretat",
    "museum": "National Gallery of Art, Washington"
  },
  "infleecy": {
    "title": "Nuvole a pecorelle",
    "museum": "Cleveland Museum of Art"
  },
  "insisters": {
    "title": "Le sorelle",
    "museum": "Art Institute of Chicago"
  },
  "inmillpond": {
    "title": "Lo stagno del mulino",
    "museum": "Art Institute of Chicago"
  },
  "intarpon": {
    "title": "Primo mattino, Tarpon Springs",
    "museum": "Art Institute of Chicago"
  },
  "insunnyautumn": {
    "title": "Giornata di sole d’autunno",
    "museum": "Cleveland Museum of Art"
  },
  "inshower": {
    "title": "Dopo un acquazzone estivo",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.inness = {
  "title": "Il percorso di vita di George Inness",
  "part": "New York, il New England, l’Italia e Montclair",
  "subtitle": "Luce, nuvole e campagna aperta",
  "intro": "Viaggia nella vita di George Inness: dalle valli fluviali vicino a New York, passando per il New England e l’Italia, fino a Montclair nel New Jersey. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "George Inness muore nel 1894 durante un viaggio in Scozia.",
    "In circa cinquant’anni ha creato più di mille opere."
  ],
  "epilogue": "George Inness muore nel 1894. Il percorso porta da New York, passando per il New England, Roma e la Normandia, fino a Montclair.",
  "life": "1825–1894"
};
  P.stations = Object.assign(P.stations || {}, {
  "ins1": {
    "place": "Primi paesaggi vicino a New York",
    "when": "1848–1858",
    "mapLabel": "New York",
    "intro": [
      "George Inness nasce nel 1825 a Newburgh, nello stato di New York, e cresce a New York e a Newark; nel 1844 espone per la prima volta alla National Academy of Design.",
      "Nel 1851 viaggia per la prima volta in Italia, a Roma e a Firenze; più tardi, in Francia, conosce i quadri dei pittori di Barbizon."
    ]
  },
  "ins2": {
    "place": "Medfield ed Eagleswood",
    "when": "1861–1870",
    "mapLabel": "New England",
    "intro": [
      "Nel giugno 1860 Inness si trasferisce a Medfield, nel Massachusetts; nell’autunno 1863 diventa insegnante di disegno a Eagleswood, nel New Jersey, dove tra i suoi allievi c’è Louis Comfort Tiffany.",
      "Gli insegnamenti del pensatore svedese Emanuel Swedenborg segnano sempre più la sua fede e la sua arte."
    ]
  },
  "ins3": {
    "place": "Roma, la campagna romana e la Normandia",
    "when": "1871–1876",
    "mapLabel": "Italia e Francia",
    "intro": [
      "Nel 1870 Inness parte con la famiglia per quattro anni in Europa; a Roma affitta uno studio in via Sistina che, si dice, era già stato di Claude Lorrain.",
      "Trascorre l’estate del 1874 in Normandia; poi, a Boston, dipinge quadri ispirati al soggiorno in Italia."
    ]
  },
  "ins4": {
    "place": "Montclair, Milton e Nantucket",
    "when": "1881–1889",
    "mapLabel": "Montclair",
    "intro": [
      "Nel giugno 1878 Inness prende in affitto una tenuta a Montclair, nel New Jersey; all’inizio degli anni Ottanta dell’Ottocento trascorre alcune estati a Milton, nel Massachusetts, e a Nantucket.",
      "Nel dicembre 1884 acquista la tenuta di Montclair e nel febbraio 1885 vi si trasferisce definitivamente, mantenendo lo studio a New York."
    ]
  },
  "ins5": {
    "place": "Quadri tardi pieni di luce",
    "when": "1892–1894",
    "mapLabel": "Montclair e Florida",
    "intro": [
      "Da Montclair Inness viaggia molto, spesso per motivi di salute, verso le cascate del Niagara, la Virginia, la California e Tarpon Springs, in Florida.",
      "Nei suoi quadri tardi le forme si dissolvono nella luce e nei colori trasparenti."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "incrossing": {
    "text": [
      "Sotto alberi alti un uomo attraversa a cavallo un fiume poco profondo, mentre accanto a lui alcune mucche guadano l’acqua.",
      "Sul retro della tela si trova la firma «Geo. Inness 1848»."
    ],
    "fact": "1848. Art Institute of Chicago."
  },
  "inoldmill": {
    "text": [
      "Un mulino rosso, molto illuminato, sorge accanto a un ruscello; davanti si vedono piccole figure, tutt’intorno ci sono alberi scuri.",
      "Inness ama dipingere la campagna coltivata più che la natura selvaggia; il vecchio mulino parla della tranquilla vita di campagna e, insieme, dei cambiamenti portati dall’industria."
    ],
    "fact": "1849. Art Institute of Chicago."
  },
  "inwoodchop": {
    "text": [
      "Un possente gruppo di alberi si innalza su un terreno roccioso; dietro si apre una valle con colline azzurre.",
      "Inness firma il quadro in basso a sinistra «G. Inness 1849»."
    ],
    "fact": "1849. Cleveland Museum of Art."
  },
  "indurham": {
    "text": [
      "Alcune pecore pascolano in un ampio prato davanti a una fila di alberi; in primo piano si vede una figura vestita di rosso sull’erba.",
      "Sotto la firma visibile, una ripresa a infrarossi ne rivela una seconda: «G. Inness 1858»."
    ],
    "fact": "1858. Cleveland Museum of Art."
  },
  "inwatergap": {
    "text": [
      "Un arcobaleno si leva sopra il Delaware; sulla riva bevono alcune mucche e una barca scivola sull’acqua.",
      "Il quadro nasce poco dopo il trasferimento a Medfield; le pennellate espressive e le ricche velature mostrano ciò che Inness ha appreso dalla pittura di Barbizon e da quella olandese."
    ],
    "fact": "1861. Metropolitan Museum of Art, New York."
  },
  "inwintersky": {
    "text": [
      "Sopra una terra spoglia e gelata brilla un cielo serale rosa e giallo; la luce calda contrasta con l’azzurro freddo del suolo.",
      "In origine sul bordo sinistro dello stagno c’era una figura, che Inness in seguito ha ricoperto."
    ],
    "fact": "1866. Cleveland Museum of Art."
  },
  "insummercats": {
    "text": [
      "Alcune mucche pascolano in un prato verde brillante; dietro si leva una lunga montagna azzurra.",
      "Un alto albero solitario e una casa colonica stanno nella chiara luce d’estate."
    ],
    "fact": "1867. Art Institute of Chicago."
  },
  "inharvestdel": {
    "text": [
      "Attraverso uno squarcio tra le nuvole la luce del sole cade sugli ampi campi della valle.",
      "Nel 1989 il Walker Art Center vende il quadro per creare con il ricavato un fondo per acquisti di arte contemporanea."
    ],
    "fact": "1867. National Gallery of Art, Washington."
  },
  "incatskill": {
    "text": [
      "Una chiesa, campi coltivati con cura e un pagliaio mostrano una terra plasmata dalle persone.",
      "A metà dell’Ottocento i Catskill sono la meta turistica preferita d’America, vicini alle città e ricchi di ampie vedute."
    ],
    "fact": "1870. Art Institute of Chicago."
  },
  "inalban": {
    "text": [
      "Pesanti nuvole grigie avanzano sulla pianura; in primo piano si vedono piccole figure su un sentiero.",
      "Inness firma il quadro «Rome 1871»; lo dipinge quindi durante i suoi anni romani."
    ],
    "fact": "1871. Cleveland Museum of Art."
  },
  "incampagna": {
    "text": [
      "Sotto un ampio cielo azzurro si stende la pianura verde della campagna romana; all’orizzonte ci sono case rosse e pini a ombrello.",
      "Il foglio è dipinto ad acquerello e guazzo; vi si uniscono forme decise e delicate velature di colore."
    ],
    "fact": "1872. Metropolitan Museum of Art, New York."
  },
  "intivoli": {
    "text": [
      "Alcuni ulivi stanno su un pendio sotto il quale un’ampia pianura chiara si stende fino all’orizzonte.",
      "Inness dipinge il foglio a guazzo e acquerello su carta azzurra con fibre colorate."
    ],
    "fact": "1873. Metropolitan Museum of Art, New York."
  },
  "inbarberini": {
    "text": [
      "Alti pini a ombrello formano un boschetto scuro davanti a un cielo chiaro e caldo.",
      "Inness dipinge questo grande quadro a Boston nel 1876, ispirato dal soggiorno in Italia."
    ],
    "fact": "1876. Metropolitan Museum of Art, New York."
  },
  "inetretat": {
    "text": [
      "Una donna con una cuffia bianca conduce alcune pecore lungo un sentiero sulla collina boscosa, mentre accanto pascolano delle mucche.",
      "Étretat si trova sulla costa della Normandia; nel 1879 il quadro viene venduto all’asta a New York come «Etretat, Coast of France»."
    ],
    "fact": "1876. National Gallery of Art, Washington."
  },
  "infleecy": {
    "text": [
      "Un sentiero di campagna si perde in lontananza tra pietre e alberi; sopra passano nuvole bianche e grigie.",
      "Inness firma il quadro in modo conciso: «G. Inness / 81»."
    ],
    "fact": "1881. Cleveland Museum of Art."
  },
  "insisters": {
    "text": [
      "Due giovani donne stanno vicine in un giardino; dietro di loro un annaffiatoio è posato sull’erba.",
      "Il piccolo quadro è insolito per Inness, che dipinge quasi solo paesaggi; è dipinto a olio su cartone."
    ],
    "fact": "1882. Art Institute of Chicago."
  },
  "inmillpond": {
    "text": [
      "Un albero di un arancione acceso sta sulla riva di uno stagno tranquillo, sul quale in lontananza una piccola figura rema in una barca.",
      "Arancioni, verdi e azzurri intensi animano la scena calma; Inness racconta più con il colore e l’atmosfera che con i dettagli."
    ],
    "fact": "1889. Art Institute of Chicago."
  },
  "intarpon": {
    "text": [
      "Nei teneri rosa e azzurri dell’alba una minuscola figura con un cappello rosso sta tra alberi alti e sottili.",
      "La luce e il paesaggio della Florida ispirano a Inness questo quadro."
    ],
    "fact": "1892. Art Institute of Chicago."
  },
  "insunnyautumn": {
    "text": [
      "Alberi autunnali gialli e rossi stanno in un prato, e le loro forme sfumano nella luce trasparente.",
      "Il quadro mostra lo stile tardo di Inness, in cui il paesaggio sembra quasi un’apparizione."
    ],
    "fact": "1892. Cleveland Museum of Art."
  },
  "inshower": {
    "text": [
      "Sopra un prato di un verde fresco con alberi tondeggianti le nuvole di pioggia si allontanano, e a destra compare un arcobaleno.",
      "Inness firma il quadro in basso a destra «G. Inness 1894»."
    ],
    "fact": "1894. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
