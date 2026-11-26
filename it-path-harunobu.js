// v10.43 IT content for Suzuki Harunobu’s life journey (um 1725–1770). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York"
});
  P.works = Object.assign(P.works || {}, {
  "szkamezo": {
    "title": "L’attore Ichimura Kamezō I",
    "museum": "Art Institute of Chicago"
  },
  "szkikunojo": {
    "title": "L’attore Segawa Kikunojō II nel ruolo di Yamabuki",
    "museum": "Art Institute of Chicago"
  },
  "szkarasaki": {
    "title": "Pioggia notturna a Karasaki",
    "museum": "Art Institute of Chicago"
  },
  "szseta": {
    "title": "Bagliore del tramonto a Seta",
    "museum": "Art Institute of Chicago"
  },
  "szkogo": {
    "title": "Kogō no Tsubone e Minamoto no Nakakuni",
    "museum": "Art Institute of Chicago"
  },
  "szpoet": {
    "title": "Poeta cinese",
    "museum": "Art Institute of Chicago"
  },
  "szshower": {
    "title": "Una giovane donna in un acquazzone estivo",
    "museum": "Art Institute of Chicago"
  },
  "szloom": {
    "title": "Giovane donna al telaio",
    "museum": "Art Institute of Chicago"
  },
  "szwater": {
    "title": "Un venditore d’acqua",
    "museum": "Art Institute of Chicago"
  },
  "szlotus": {
    "title": "La raccolta dei fiori di loto",
    "museum": "Art Institute of Chicago"
  },
  "szmaple": {
    "title": "Si bruciano le foglie d’acero in autunno",
    "museum": "Art Institute of Chicago"
  },
  "szfan": {
    "title": "Un ventaglio: giornata serena",
    "museum": "Art Institute of Chicago"
  },
  "szikebana": {
    "title": "Composizione floreale nello stile Ikenobō",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "szbamboo": {
    "title": "Passando accanto al boschetto di bambù",
    "museum": "Art Institute of Chicago"
  },
  "szbaby": {
    "title": "Una donna e una bambina fanno divertire un neonato",
    "museum": "Art Institute of Chicago"
  },
  "szkagura": {
    "title": "La danzatrice di kagura",
    "museum": "Art Institute of Chicago"
  },
  "szkiyomizu": {
    "title": "Giovane donna seduta sul balcone del tempio Kiyomizu",
    "museum": "Art Institute of Chicago"
  },
  "szcards": {
    "title": "Giovani donne che giocano alle carte delle poesie",
    "museum": "Art Institute of Chicago"
  },
  "szwillow": {
    "title": "Donna che corre accanto a un salice nel vento",
    "museum": "Cleveland Museum of Art"
  },
  "szfireflies": {
    "title": "Alla ricerca delle lucciole",
    "museum": "Art Institute of Chicago"
  },
  "szide": {
    "title": "Il fiume di gioielli a Ide",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "szchofu": {
    "title": "Il fiume di gioielli a Chōfu",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "szgeese": {
    "title": "Oche selvatiche sul fiume Sumida",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.harunobu = {
  "title": "Il percorso di vita di Suzuki Harunobu",
  "part": "Xilografie da Edo",
  "subtitle": "Il maestro della xilografia a colori",
  "intro": "Viaggia nella vita di Suzuki Harunobu a Edo, l’attuale Tokyo: dalle stampe in pochi colori alle prime xilografie in molti colori. Le stampe provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Suzuki Harunobu muore nel 1770.",
    "Dopo di lui, le stampe ricche di colori diventano un segno distintivo della xilografia giapponese."
  ],
  "epilogue": "Suzuki Harunobu muore nel 1770. Il percorso attraversa dieci anni a Edo, dalla stampa in pochi colori alla stampa in molti colori.",
  "life": "um 1725–1770"
};
  P.stations = Object.assign(P.stations || {}, {
  "szs1": {
    "place": "Attori e paesaggi in pochi colori",
    "when": "1760–1764",
    "mapLabel": "Edo",
    "intro": [
      "Suzuki Harunobu vive e lavora a Edo, l’attuale Tokyo; il suo anno di nascita non è noto con certezza e i musei indicano circa il 1725.",
      "Le sue prime stampe sono stampate con pochi colori: attori, paesaggi e scene di storie antiche."
    ]
  },
  "szs2": {
    "place": "L’anno dei calendari illustrati",
    "when": "1765",
    "mapLabel": "Edo",
    "intro": [
      "Nel 1765 ricchi amanti dell’arte di Edo commissionano a Harunobu preziose stampe da regalare a Capodanno; alcune nascondono il calendario dell’anno nell’immagine.",
      "Si usano fino a dieci matrici di legno e nascono le prime xilografie in molti colori, chiamate «immagini di broccato»."
    ]
  },
  "szs3": {
    "place": "La vita quotidiana e le poesie antiche",
    "when": "1766–1767",
    "mapLabel": "Edo",
    "intro": [
      "Gli editori di Edo adottano rapidamente la stampa a colori per la vendita.",
      "Harunobu mostra scene di vita quotidiana e allude a poesie classiche della Cina e del Giappone."
    ]
  },
  "szs4": {
    "place": "Edo e i fiumi di gioielli",
    "when": "1768–1770",
    "mapLabel": "Edo",
    "intro": [
      "Negli ultimi anni Harunobu disegna serie come i «Sei fiumi di gioielli» e le «Otto vedute alla moda di Edo».",
      "Si stima che abbia disegnato fino a 800 stampe diverse in soli cinque anni."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "szkamezo": {
    "text": [
      "L’attore sta in piedi con una veste decorata accanto a una grande scatola nera.",
      "Interpreta Tachibanaya Hikosō nel dramma «Ume Momiji Date no Ōkido» al teatro Ichimura."
    ],
    "fact": "1760. Art Institute of Chicago."
  },
  "szkikunojo": {
    "text": [
      "L’attore appare nel ruolo di Yamabuki, con un ventaglio in mano.",
      "Il dramma va in scena al teatro Ichimura nell’undicesimo mese del 1763."
    ],
    "fact": "1763. Art Institute of Chicago."
  },
  "szkarasaki": {
    "text": [
      "Un pino sorge su una lingua di terra e davanti una barca scivola sull’acqua.",
      "La stampa fa parte della serie «Otto vedute di Ōmi»."
    ],
    "fact": "inizio degli anni 1760. Art Institute of Chicago."
  },
  "szseta": {
    "text": [
      "Alcuni cavalieri attraversano un lungo ponte mentre barche a vela navigano sull’acqua.",
      "Anche questa stampa fa parte della serie «Otto vedute di Ōmi»."
    ],
    "fact": "inizio degli anni 1760. Art Institute of Chicago."
  },
  "szkogo": {
    "text": [
      "Un cavaliere e il suo accompagnatore si fermano presso un muro sotto la luna, con una casa dietro.",
      "La stampa mostra una scena di un antico racconto e reca il sigillo dell’editore Yamamura."
    ],
    "fact": "inizio degli anni 1760. Art Institute of Chicago."
  },
  "szpoet": {
    "text": [
      "Una figura in rosso guarda da una finestra rotonda un ampio paesaggio.",
      "In alto c’è un verso cinese su lontane colline azzurre sopra il mare azzurro."
    ],
    "fact": "circa 1761–1765. Art Institute of Chicago."
  },
  "szshower": {
    "text": [
      "Il vento e la pioggia obliqua sorprendono una giovane donna, le cui maniche svolazzano.",
      "Il museo cataloga la stampa come surimono."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szloom": {
    "text": [
      "Una giovane donna lavora seduta a un telaio.",
      "La stampa nasce nell’anno in cui comincia la stampa a colori."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szwater": {
    "text": [
      "Un uomo con il cappello porta due secchi appesi a un bastone sulla spalla.",
      "Anche questa stampa è catalogata dal museo come surimono."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szlotus": {
    "text": [
      "Due donne avanzano in barca tra le foglie di loto.",
      "Una si sporge dal bordo, l’altra sta in piedi con una pertica."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szmaple": {
    "text": [
      "Una donna guarda oltre una staccionata una figura inginocchiata accanto a un piccolo fuoco.",
      "Sopra la staccionata brillano le foglie gialle di un acero."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szfan": {
    "text": [
      "Due giovani donne camminano fianco a fianco, una tiene un ventaglio.",
      "La stampa fa parte della serie «Otto vedute del salotto», che trasferisce antichi temi di paesaggio a oggetti della casa."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szikebana": {
    "text": [
      "Una composizione di rami, foglie e bambù sta in un vaso bianco su un supporto rosso.",
      "Il titolo nomina lo stile Ikenobō dell’arte floreale."
    ],
    "fact": "circa 1765. Metropolitan Museum of Art, New York."
  },
  "szbamboo": {
    "text": [
      "Una giovane donna con l’ombrello passa accanto a un boschetto di bambù sotto la neve.",
      "Anche questa stampa è catalogata dal museo come surimono."
    ],
    "fact": "1766. Art Institute of Chicago."
  },
  "szbaby": {
    "text": [
      "Una donna e una bambina si occupano di un bambino piccolo.",
      "Sullo sfondo c’è una pianta davanti a una tenda di bambù."
    ],
    "fact": "1767. Art Institute of Chicago."
  },
  "szkagura": {
    "text": [
      "Una danzatrice in veste scura sta su una veranda dalla ringhiera rossa.",
      "Tiene in mano un lungo bastone."
    ],
    "fact": "circa 1766. Art Institute of Chicago."
  },
  "szkiyomizu": {
    "text": [
      "Una giovane donna siede alla ringhiera rossa di un balcone, sopra alberi verdi.",
      "Le chiome degli alberi arrivano fino al balcone."
    ],
    "fact": "circa 1766. Art Institute of Chicago."
  },
  "szcards": {
    "text": [
      "Tre giovani donne si chinano su carte disposte sul pavimento.",
      "Le carte di questo gioco riportano poesie."
    ],
    "fact": "circa 1766–1767. Art Institute of Chicago."
  },
  "szwillow": {
    "text": [
      "Una donna passa in fretta con l’ombrello accanto a un salice i cui rami ondeggiano al vento.",
      "Il cielo scuro fa risaltare la figura chiara."
    ],
    "fact": "1766 o 1767. Cleveland Museum of Art."
  },
  "szfireflies": {
    "text": [
      "Una ragazza in piedi tiene una lanterna, l’altra è inginocchiata accanto a una gabbia per le lucciole.",
      "La notte è stampata in nero piatto, senza ombre."
    ],
    "fact": "1768. Art Institute of Chicago."
  },
  "szide": {
    "text": [
      "Tre donne attraversano con cautela un fiume poco profondo; sulla riva fioriscono fiori gialli di yamabuki.",
      "Nel riquadro in alto c’è una poesia di Fujiwara no Shunzei sul luogo."
    ],
    "fact": "circa 1768. Metropolitan Museum of Art, New York."
  },
  "szchofu": {
    "text": [
      "Una donna risciacqua un lungo telo nel fiume; sembra quasi che danzi con esso.",
      "Chōfu è noto per lo sbiancamento delle stoffe; in alto c’è una poesia di Fujiwara no Teika."
    ],
    "fact": "circa 1768. Metropolitan Museum of Art, New York."
  },
  "szgeese": {
    "text": [
      "Due donne sono su una piccola barca sul fiume; una sta in piedi, l’altra inginocchiata tiene una lenza.",
      "La stampa fa parte della serie «Otto vedute alla moda di Edo»."
    ],
    "fact": "circa 1769. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
