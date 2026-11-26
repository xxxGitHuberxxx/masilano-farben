// v10.43 IT content for Thomas Cole’s life journey (1801–1848). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "tcsunrise": {
    "title": "Alba sui Catskill",
    "museum": "National Gallery of Art, Washington"
  },
  "tcniagara": {
    "title": "Veduta lontana delle cascate del Niagara",
    "museum": "Art Institute of Chicago"
  },
  "tctivoli": {
    "title": "Veduta presso Tivoli (mattino)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcgoblet": {
    "title": "La coppa del titano",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcholyokesketch": {
    "title": "Schizzo per la veduta dal monte Holyoke",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcoxbow": {
    "title": "Veduta dal monte Holyoke dopo un temporale – L’Oxbow",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tccatskill": {
    "title": "Veduta sul Catskill all’inizio dell’autunno",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcflorence": {
    "title": "Veduta di Firenze",
    "museum": "Cleveland Museum of Art"
  },
  "tcclouds": {
    "title": "Nuvole",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tcschroon": {
    "title": "Il monte Schroon dopo un temporale",
    "museum": "Cleveland Museum of Art"
  },
  "tccoast": {
    "title": "Costa italiana con torre in rovina",
    "museum": "National Gallery of Art, Washington"
  },
  "tcnotch": {
    "title": "Il passo di montagna detto The Notch, nelle White Mountains",
    "museum": "National Gallery of Art, Washington"
  },
  "tcnewengland": {
    "title": "Paesaggio del New England",
    "museum": "Art Institute of Chicago"
  },
  "tcchildhood": {
    "title": "Il viaggio della vita: l’infanzia",
    "museum": "National Gallery of Art, Washington"
  },
  "tcyouth": {
    "title": "Il viaggio della vita: la giovinezza",
    "museum": "National Gallery of Art, Washington"
  },
  "tccreek": {
    "title": "Studio per «Catskill Creek»",
    "museum": "National Gallery of Art, Washington"
  },
  "tcford": {
    "title": "Il guado di montagna",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.cole = {
  "title": "Il percorso di vita di Thomas Cole",
  "part": "L’Hudson, i Catskill e l’Italia",
  "subtitle": "Il fondatore della Hudson River School",
  "intro": "Viaggia nella vita di Thomas Cole: dall’Inghilterra al fiume Hudson, nelle montagne Catskill e in Italia. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Thomas Cole muore a Catskill l’11 febbraio 1848, a 47 anni.",
    "Dopo la sua morte l’American Art-Union di New York organizza una grande mostra delle sue opere."
  ],
  "epilogue": "Thomas Cole muore a Catskill l’11 febbraio 1848. Il percorso porta dall’Inghilterra, passando per New York e l’Italia, alle montagne Catskill.",
  "life": "1801–1848"
};
  P.stations = Object.assign(P.stations || {}, {
  "tcs1": {
    "place": "Dall’Inghilterra all’Hudson e in Italia",
    "when": "1801–1832",
    "mapLabel": "New York",
    "intro": [
      "Thomas Cole nasce a Bolton-le-Moors, in Inghilterra, il 1º febbraio 1801 ed emigra con la famiglia negli Stati Uniti nel 1818.",
      "Nel 1825 si trasferisce a New York e risale l’Hudson fino alle montagne Catskill; dal 1829 al 1832 vive e dipinge in Inghilterra, Francia e Italia."
    ]
  },
  "tcs2": {
    "place": "Uno studio a Catskill",
    "when": "1833–1836",
    "mapLabel": "Catskill",
    "intro": [
      "Dopo il ritorno Cole allestisce uno studio a Cedar Grove, a Catskill.",
      "Il 22 novembre 1836 vi sposa Maria Bartow, e Cedar Grove diventa la sua casa."
    ]
  },
  "tcs3": {
    "place": "Montagne, nuvole e ricordi d’Italia",
    "when": "1837–1839",
    "mapLabel": "New England",
    "intro": [
      "Cole dipinge le montagne di New York e del New England, spesso dopo un temporale o in autunno.",
      "Accanto a queste nascono quadri di Firenze e della costa italiana da schizzi del suo viaggio."
    ]
  },
  "tcs4": {
    "place": "Il viaggio della vita",
    "when": "1840–1848",
    "mapLabel": "Catskill",
    "intro": [
      "Cole dipinge la serie «Il viaggio della vita», in cui un viaggio su un fiume rappresenta il corso della vita, e la dipinge una seconda volta a Roma nel 1842.",
      "Tornato a Catskill, nel 1844 prende Frederic Edwin Church come primo allievo."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tcsunrise": {
    "text": [
      "Montagne scure emergono dalla nebbia, con tronchi spezzati in primo piano.",
      "Cole dipinge il quadro un anno dopo il suo primo viaggio nelle montagne Catskill."
    ],
    "fact": "1826. National Gallery of Art, Washington."
  },
  "tcniagara": {
    "text": [
      "L’acqua bianca precipita ampia dalle cascate, circondata da alberi dai colori autunnali.",
      "Cole dipinge il quadro su una tavola di legno."
    ],
    "fact": "1830. Art Institute of Chicago."
  },
  "tctivoli": {
    "text": [
      "Un arco coperto di vegetazione di un’antica rovina sta davanti a montagne su cui passano le nuvole.",
      "Cole dipinge il quadro nel 1832, verso la fine del suo soggiorno in Italia."
    ],
    "fact": "1832. Metropolitan Museum of Art, New York."
  },
  "tcgoblet": {
    "text": [
      "Una gigantesca coppa di pietra sta in un paesaggio; sul suo bordo crescono alberi e l’acqua trabocca.",
      "È un quadro di fantasia, un paesaggio che non esiste da nessuna parte."
    ],
    "fact": "1833. Metropolitan Museum of Art, New York."
  },
  "tcholyokesketch": {
    "text": [
      "In questo piccolo bozzetto a olio il fiume, gli alberi e la luce ci sono già.",
      "Con esso Cole prepara il suo grande quadro «L’Oxbow»."
    ],
    "fact": "1836. Metropolitan Museum of Art, New York."
  },
  "tcoxbow": {
    "text": [
      "A sinistra il temporale si allontana; a destra si stende la valle soleggiata con la grande ansa del fiume.",
      "In basso nel quadro Cole si è dipinto piccolo mentre dipinge il paesaggio."
    ],
    "fact": "1836. Metropolitan Museum of Art, New York."
  },
  "tccatskill": {
    "text": [
      "Alti alberi incorniciano una valle tranquilla con un ruscello, e dietro ci sono montagne azzurre.",
      "Lo sguardo va dal paese di Catskill alle montagne, dove Cole ora vive."
    ],
    "fact": "1836–1837. Metropolitan Museum of Art, New York."
  },
  "tcflorence": {
    "text": [
      "La città con la grande cupola del duomo si stende nella luce calda tra le colline.",
      "Cole dipinge il quadro in America, anni dopo il suo soggiorno a Firenze."
    ],
    "fact": "1837. Cleveland Museum of Art."
  },
  "tcclouds": {
    "text": [
      "Una grande nuvola bianca si innalza sopra una stretta striscia di terra.",
      "Cole dipinge questo studio a olio su carta."
    ],
    "fact": "circa 1838. Metropolitan Museum of Art, New York."
  },
  "tcschroon": {
    "text": [
      "Una cima scura si alza sopra boschi autunnali rossi e gialli, mentre le nuvole si allontanano.",
      "Il monte si trova nella contea di Essex, nello stato di New York."
    ],
    "fact": "1838. Cleveland Museum of Art."
  },
  "tccoast": {
    "text": [
      "Una torre rotonda in rovina sorge sulle rocce sopra il mare calmo.",
      "Anche questo quadro Cole lo dipinge in America, da ricordi e schizzi dell’Italia."
    ],
    "fact": "1838. National Gallery of Art, Washington."
  },
  "tcnotch": {
    "text": [
      "Una strada attraversa boschi autunnali verso una parete di roccia sovrastata da nuvole temporalesche.",
      "Le White Mountains si trovano nel New Hampshire, nel New England."
    ],
    "fact": "1839. National Gallery of Art, Washington."
  },
  "tcnewengland": {
    "text": [
      "Un albero alto sta a sinistra, e dietro si stende un’ampia valle nella luce della sera con un campanile lontano.",
      "Cole mostra un paesaggio tranquillo e abitato."
    ],
    "fact": "1839. Art Institute of Chicago."
  },
  "tcchildhood": {
    "text": [
      "Un bambino esce da una grotta buia su una barca dorata verso un paesaggio verde e fiorito, guidato da un angelo.",
      "È il primo dei quattro quadri della serie."
    ],
    "fact": "1842. National Gallery of Art, Washington."
  },
  "tcyouth": {
    "text": [
      "Un giovane guida ora da solo la sua barca verso un castello tra le nuvole, mentre l’angelo resta sulla riva.",
      "Il castello rappresenta i sogni della giovinezza."
    ],
    "fact": "1842. National Gallery of Art, Washington."
  },
  "tccreek": {
    "text": [
      "Un cielo serale con nuvole luminose si stende sopra una terra piatta e montagne lontane.",
      "Cole dipinge lo studio su legno, come preparazione per un quadro più grande."
    ],
    "fact": "circa 1844–1845. National Gallery of Art, Washington."
  },
  "tcford": {
    "text": [
      "Un cavaliere su un cavallo bianco attraversa un ruscello ai piedi di una montagna rocciosa.",
      "Cole dipinge il quadro due anni prima della morte, negli ultimi anni a Catskill."
    ],
    "fact": "1846. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
