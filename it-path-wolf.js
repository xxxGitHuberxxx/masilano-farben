// v10.23 IT content for Caspar Wolf’s life journey, Part 1 (1735–1783). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Standort ohne Angabe": "Collocazione non indicata",
  "Privatsammlung": "Collezione privata",
  "Kunsthaus Zürich": "Kunsthaus di Zurigo",
  "National Gallery, London": "National Gallery, Londra",
  "Kunst Museum Winterthur": "Kunst Museum Winterthur",
  "Kunstmuseum Basel": "Kunstmuseum di Basilea"
});
  P.works = Object.assign(P.works || {}, {
  "cwruine": {
    "title": "Paesaggio roccioso con cacciatore e castello in rovina",
    "museum": "Collezione privata"
  },
  "cwbauernhof": {
    "title": "Paesaggio con fattoria",
    "museum": "Collocazione non indicata"
  },
  "cwgletscher": {
    "title": "Il ghiacciaio inferiore di Grindelwald",
    "museum": "Kunst Museum Winterthur"
  },
  "cwsteg": {
    "title": "Passerella sulla Lütschine",
    "museum": "Kunst Museum Winterthur"
  },
  "cwlauteraar": {
    "title": "Il ghiacciaio del Lauteraar",
    "museum": "Kunstmuseum di Basilea"
  },
  "cwhoehle": {
    "title": "Grotta rocciosa con cascata",
    "museum": "Kunsthaus di Zurigo"
  },
  "cwseelisberg": {
    "title": "Veduta dal Seelisberg sul lago di Uri",
    "museum": "Collezione privata"
  },
  "cwmuota": {
    "title": "Ponte sulla Muota presso Svitto",
    "museum": "Collezione privata"
  },
  "cwrhone": {
    "title": "Il Rodano presso Gletsch",
    "museum": "Collezione privata"
  },
  "cwgelten": {
    "title": "Il Geltenschuss nella valle di Lauenen",
    "museum": "National Gallery, Londra"
  },
  "cwseeberg": {
    "title": "Veduta sul lago Seeberg",
    "museum": "Collezione privata"
  },
  "cwbechburg": {
    "title": "Il castello di Neu-Bechburg presso Oensingen",
    "museum": "Collezione privata"
  }
});
  P.paths = P.paths || {};
  P.paths.wolf = {
  "title": "Il percorso di vita di Caspar Wolf",
  "life": "1735–1783",
  "part": "Il primo pittore delle Alpi",
  "subtitle": "Ghiacciai, grotte e cascate",
  "intro": "Viaggia con Caspar Wolf, di Muri in Argovia, tra i primi a dipingere le Alpi dal vero: dai primi paesaggi, attraverso i ghiacciai di Grindelwald, le grotte e le cascate, fino alla valle di Lauenen. Brevi tappe e quadri da colorare. Questo percorso lo segue in montagna.",
  "ending": [
    "Caspar Wolf muore a Heidelberg il 6 ottobre 1783, a quarantotto anni. I suoi quadri delle Alpi erano molto in anticipo sul loro tempo.",
    "Il percorso va da Muri, attraverso Grindelwald e i ghiacciai delle Alpi, fino alla valle di Lauenen e al Giura."
  ],
  "epilogue": "Caspar Wolf muore a Heidelberg il 6 ottobre 1783, a quarantotto anni. I suoi quadri delle Alpi erano molto in anticipo sul loro tempo. Il percorso va da Muri, attraverso Grindelwald e i ghiacciai delle Alpi, fino alla valle di Lauenen e al Giura."
};
  P.stations = Object.assign(P.stations || {}, {
  "cwmuri": {
    "place": "Muri e anni di viaggio",
    "when": "1735–1773",
    "mapLabel": "Muri",
    "intro": [
      "Caspar Wolf nasce a Muri, in Argovia, il 3 maggio 1735. Si forma a Costanza, Augusta e Monaco e più tardi lavora a Parigi.",
      "Tornato in Svizzera, dipinge dapprima paesaggi inventati."
    ]
  },
  "cwgrindel": {
    "place": "Grindelwald e Lauterbrunnen",
    "when": "1774–1775",
    "mapLabel": "Grindelwald",
    "intro": [
      "Nel 1774 l’editore bernese Abraham Wagner gli commissiona vedute delle Alpi. Wolf viaggia nell’Oberland con il naturalista Jakob Samuel Wyttenbach.",
      "Dipinge dal vero ghiacciai, torrenti e cascate."
    ]
  },
  "cwhoch": {
    "place": "Le Alpi",
    "when": "1776",
    "mapLabel": "Grimsel",
    "intro": [
      "Nel 1776 Wolf sale fino ai ghiacciai del Grimsel. Dipinge ghiaccio, roccia e grotte in un mondo quasi sconosciuto.",
      "I suoi quadri servono da modelli per stampe."
    ]
  },
  "cwinner": {
    "place": "Svizzera centrale e Vallese",
    "when": "1777–1778",
    "mapLabel": "Uri",
    "intro": [
      "Nel 1777 e nel 1778 Wolf viaggia al lago di Uri, a Svitto e fino al Rodano presso Gletsch.",
      "Laghi, ponti e valli fluviali ampliano i suoi quadri alpini."
    ]
  },
  "cwspaet": {
    "place": "Lauenen, il Giura e il congedo",
    "when": "1778–1783",
    "mapLabel": "Lauenen",
    "intro": [
      "Verso il 1778 Wolf dipinge la valle di Lauenen e i piedi del Giura. Poi lascia la Svizzera e lavora in Germania.",
      "Nel 1783 muore a Heidelberg, senza grande fama in vita."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "cwruine": {
    "text": [
      "Un cacciatore sta tra le rocce, sopra si alza un castello in rovina. Il quadro nasce poco dopo il soggiorno di Wolf a Parigi.",
      "Il paesaggio è ancora inventato, non visto dal vero."
    ],
    "fact": "1771. Collezione privata."
  },
  "cwbauernhof": {
    "text": [
      "Una fattoria sta in un paesaggio verde e quieto. Qui Wolf dipinge ancora la pianura.",
      "Un anno dopo comincia il suo grande viaggio nelle Alpi."
    ],
    "fact": "1773. Collocazione non indicata."
  },
  "cwgletscher": {
    "text": [
      "Il ghiaccio del ghiacciaio inferiore di Grindelwald arriva fino alla valle, davanti scorre la Lütschine. Sopra sta il Mettenberg.",
      "Wolf dipinge il ghiacciaio dal vero nel 1774, cosa allora molto insolita."
    ],
    "fact": "1774. Kunst Museum Winterthur."
  },
  "cwsteg": {
    "text": [
      "Una stretta passerella di legno attraversa la selvaggia Lütschine vicino a Gsteig. Piccole figure mostrano la scala della natura.",
      "Il viaggio nell’Oberland bernese porta a Wolf molti soggetti nuovi."
    ],
    "fact": "1774. Kunst Museum Winterthur."
  },
  "cwlauteraar": {
    "text": [
      "Un ampio ghiacciaio si stende tra montagne grigie, in alto nella zona del Grimsel. Le persone appaiono solo come piccoli punti.",
      "Wolf mostra le Alpi come un mondo strano e possente."
    ],
    "fact": "1776. Kunstmuseum di Basilea."
  },
  "cwhoehle": {
    "text": [
      "Da una grotta buia si guarda una cascata luminosa. Luce e buio stanno duramente l’una accanto all’altro.",
      "Le grotte sono tra i soggetti più originali di Wolf."
    ],
    "fact": "1776. Kunsthaus di Zurigo."
  },
  "cwseelisberg": {
    "text": [
      "Dal Seelisberg si guarda giù il lago di Uri verso Altdorf. Rive ripide incorniciano l’acqua.",
      "Nel 1777 Wolf viaggia nella Svizzera centrale."
    ],
    "fact": "1777. Collezione privata."
  },
  "cwmuota": {
    "text": [
      "Un ponte di pietra scavalca la Muota. Acqua, roccia e arco formano il quadro.",
      "In Wolf i ponti mostrano come l’uomo si apre una via tra i monti."
    ],
    "fact": "1778. Collezione privata."
  },
  "cwrhone": {
    "text": [
      "Il giovane Rodano scorre in un’alta valle presso Gletsch, circondato da Gadmerfluh, Tellistock e Wendenstock.",
      "Wolf dipinge le sorgenti dei grandi fiumi nelle Alpi."
    ],
    "fact": "1778. Collezione privata."
  },
  "cwgelten": {
    "text": [
      "Una cascata passa sotto un ponte di neve verso la valle di Lauenen. Il quadro appartiene alla National Gallery di Londra.",
      "Oggi è tra le opere più note di Wolf."
    ],
    "fact": "circa 1778. National Gallery, Londra."
  },
  "cwseeberg": {
    "text": [
      "Da un alpeggio si guarda oltre il piccolo lago Seeberg verso le montagne. La luce è chiara e fresca.",
      "Wolf dipinge anche i luoghi quieti delle Alpi."
    ],
    "fact": "circa 1778. Collezione privata."
  },
  "cwbechburg": {
    "text": [
      "Il castello di Neu-Bechburg sta su una collina ai piedi del Giura. Sotto si stende l’ampia campagna.",
      "Dopo le Alpi, Wolf si volge anche al Giura."
    ],
    "fact": "1778. Collezione privata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
