// v10.43 IT content for Keisai Eisen’s life journey (1790–1848). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York"
});
  P.works = Object.assign(P.works || {}, {
  "ketakanawa": {
    "title": "Vele di ritorno a Takanawa",
    "museum": "Art Institute of Chicago"
  },
  "kefuji": {
    "title": "Veduta del monte Fuji da una casa da tè",
    "museum": "Art Institute of Chicago"
  },
  "kesparrows": {
    "title": "Passeri, bambù e neve che cade",
    "museum": "Cleveland Museum of Art"
  },
  "kefishes": {
    "title": "Pesci che nuotano con fiori gialli",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "kecarp": {
    "title": "Carpa che risale una cascata",
    "museum": "Cleveland Museum of Art"
  },
  "kekoi": {
    "title": "Carpa koi",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "keitahana": {
    "title": "N. 15: Itahana",
    "museum": "Art Institute of Chicago"
  },
  "kehiratsuka": {
    "title": "N. 20: Pioggia sulla piana di Hiratsuka presso Kutsukake",
    "museum": "Art Institute of Chicago"
  },
  "kesuwa": {
    "title": "N. 31: Veduta del lago Suwa dal passo di Shiojiri",
    "museum": "Art Institute of Chicago"
  },
  "kenojiri": {
    "title": "N. 41: Veduta lontana del ponte sul fiume Ina a Nojiri",
    "museum": "Art Institute of Chicago"
  },
  "kewarabi": {
    "title": "Warabi: traghetto sul fiume Toda",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ketoeizan": {
    "title": "Il tempio Tōeizan visto dal santuario di Benten a Shinobazu, Edo",
    "museum": "Art Institute of Chicago"
  },
  "kesnow": {
    "title": "Neve sul fiume Sumida",
    "museum": "Art Institute of Chicago"
  },
  "kesnowdist": {
    "title": "Veduta lontana della neve sul fiume Sumida a Edo",
    "museum": "Art Institute of Chicago"
  },
  "kenihonbashi": {
    "title": "Schiarita a Nihonbashi",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.eisen = {
  "title": "Il percorso di vita di Keisai Eisen",
  "part": "Strade e fiumi",
  "subtitle": "Da Edo lungo il Kisokaidō",
  "intro": "Viaggia con l’incisore giapponese Keisai Eisen: tra stampe di Capodanno con poesie, pesci e uccelli, lungo la strada di montagna del Kisokaidō e fino al fiume Sumida innevato a Edo. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Keisai Eisen muore nel 1848.",
    "Le sue stampe sono oggi conservate in musei di tutto il mondo."
  ],
  "epilogue": "Keisai Eisen muore nel 1848. Il percorso conduce dalle stampe di Capodanno con poesie, passando per pesci e uccelli, alle stazioni del Kisokaidō e di nuovo a Edo.",
  "life": "1790–1848"
};
  P.stations = Object.assign(P.stations || {}, {
  "kes1": {
    "place": "Auguri di Capodanno con poesie",
    "when": "1820–1829",
    "mapLabel": "Giappone",
    "intro": [
      "Keisai Eisen vive dal 1790 al 1848; è figlio di un pittore della scuola Kanō e scrive anche poesie.",
      "I surimono sono stampe commissionate privatamente, spesso auguri di Capodanno di gruppi di poeti, con poesie e colori particolarmente raffinati."
    ]
  },
  "kes2": {
    "place": "Pesci, uccelli e fiori",
    "when": "1827–1842",
    "mapLabel": "Giappone",
    "intro": [
      "Oltre ai paesaggi, Eisen disegna stampe con pesci, uccelli e piante.",
      "Spesso gli animali riempiono quasi tutto il foglio su uno sfondo semplice."
    ]
  },
  "kes3": {
    "place": "Le stazioni del Kisokaidō",
    "when": "1835–1838",
    "mapLabel": "Kisokaidō",
    "intro": [
      "Intorno al 1835 Eisen inizia una serie di stampe sulle stazioni di posta del Kisokaidō, la strada dell’interno tra Edo e Kyoto.",
      "Utagawa Hiroshige completa poi la serie."
    ]
  },
  "kes4": {
    "place": "Vedute di Edo",
    "when": "1830–1847",
    "mapLabel": "Edo",
    "intro": [
      "A Edo, l’odierna Tokyo, Eisen disegna templi, rive innevate e ponti affollati.",
      "Intorno al 1830 dà a una serie di luoghi celebri di Edo cornici fatte di lettere occidentali."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ketakanawa": {
    "text": [
      "Le barche a vela rientrano attraverso l’ampia baia, e sulla spiaggia ci sono delle persone.",
      "In alto ci sono diverse poesie, e il foglio è firmato «Keisai»."
    ],
    "fact": "circa 1820–1829. Art Institute of Chicago."
  },
  "kefuji": {
    "text": [
      "Alcuni ospiti riposano sulla riva sotto un albero in fiore, e in lontananza si alza il Fuji innevato.",
      "Per la stampa sono stati usati anche pigmenti metallici, ed è firmata «Keisai ga», dipinto da Keisai."
    ],
    "fact": "circa 1820–1829. Art Institute of Chicago."
  },
  "kesparrows": {
    "text": [
      "Due passeri volano tra sottili canne di bambù, mentre cadono fiocchi di neve leggeri.",
      "Il Cleveland Museum of Art data la stampa a colori alla fine degli anni Venti dell’Ottocento."
    ],
    "fact": "circa 1827–1829. Cleveland Museum of Art."
  },
  "kefishes": {
    "text": [
      "Tre pesci argentati nuotano accanto a una pianta dai fiori gialli brillanti.",
      "Il foglio è un surimono con una poesia ed è giunto al Metropolitan Museum nel 1919."
    ],
    "fact": "circa 1830. Metropolitan Museum of Art, New York."
  },
  "kecarp": {
    "text": [
      "Nell’immagine alta e stretta una carpa risale serpeggiando una cascata azzurra.",
      "In Asia la carpa simboleggia fortuna e perseveranza, perciò in Giappone la si mostra spesso mentre risale le cascate."
    ],
    "fact": "circa 1830–1836. Cleveland Museum of Art."
  },
  "kekoi": {
    "text": [
      "Una grande carpa scura nuota nell’acqua azzurra solcata da chiare linee ondulate.",
      "Il Metropolitan Museum data la stampa intorno al 1842 e l’ha acquisita nel 1917."
    ],
    "fact": "circa 1842. Metropolitan Museum of Art, New York."
  },
  "keitahana": {
    "text": [
      "Alcuni viaggiatori passano accanto ad alberi carichi di neve su un sentiero lungo il fiume.",
      "Itahana è la 15ª stazione della serie delle sessantanove stazioni del Kisokaidō."
    ],
    "fact": "circa 1835–1836. Art Institute of Chicago."
  },
  "kehiratsuka": {
    "text": [
      "Viaggiatori con cavalli da soma avanzano a fatica tra pioggia obliqua e vento.",
      "La stazione di Kutsukake porta il numero 20 nella serie del Kisokaidō."
    ],
    "fact": "circa 1835–1836. Art Institute of Chicago."
  },
  "kesuwa": {
    "text": [
      "Alcuni viaggiatori salgono un pendio verde sopra l’ampio lago, e in lontananza si alza una vetta innevata.",
      "La veduta del lago Suwa dal passo è il numero 31 della serie del Kisokaidō."
    ],
    "fact": "circa 1835–1836. Art Institute of Chicago."
  },
  "kenojiri": {
    "text": [
      "Alcuni viaggiatori attraversano un ponte alto sopra un fiume tra ripide montagne verdi.",
      "In alto a sinistra si staglia la sagoma del padiglione di Kannon di un tempio."
    ],
    "fact": "circa 1835–1836. Art Institute of Chicago."
  },
  "kewarabi": {
    "text": [
      "Un traghetto affollato porta i viaggiatori sul fiume azzurro, con alberi e case sulla riva.",
      "Alla stazione di Warabi i viaggiatori attraversano il fiume Toda in traghetto."
    ],
    "fact": "circa 1838. Metropolitan Museum of Art, New York."
  },
  "ketoeizan": {
    "text": [
      "Lo sguardo attraversa uno stagno verde chiaro con una piccola barca fino ad alberi e tetti sulla riva.",
      "Il foglio appartiene a una serie di luoghi celebri di Edo con cornici di lettere occidentali."
    ],
    "fact": "circa 1830. Art Institute of Chicago."
  },
  "kesnow": {
    "text": [
      "La neve copre tetti e alberi sulla riva, e una piccola barca scivola sul fiume azzurro.",
      "L’Art Institute of Chicago data il foglio ai primi anni Trenta dell’Ottocento."
    ],
    "fact": "circa 1830–1833. Art Institute of Chicago."
  },
  "kesnowdist": {
    "text": [
      "Una barca con passeggeri scivola sul fiume azzurro, tra rive coperte di neve.",
      "Il Cleveland Museum of Art possiede un’altra impressione di questo soggetto."
    ],
    "fact": "circa 1840–1844. Art Institute of Chicago."
  },
  "kenihonbashi": {
    "text": [
      "Molte persone si accalcano sul ponte Nihonbashi, e dietro si alza il Fuji sopra la città.",
      "Il foglio fa parte della serie «Otto vedute di Edo»."
    ],
    "fact": "1843–1847. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
