// v10.43 IT content for P.C. Skovgaard’s life journey (1817–1875). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Statens Museum for Kunst, Kopenhagen": "Statens Museum for Kunst, Copenaghen"
});
  P.works = Object.assign(P.works || {}, {
  "pchoejerup": {
    "title": "La chiesa di Højerup sulle scogliere di Stevns",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcraageleje": {
    "title": "La spiaggia di Rågeleje",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcoats": {
    "title": "Campo d’avena vicino a Vejby",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcdronning": {
    "title": "La costa nord della Selandia a Dronningmølle",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcmoeller": {
    "title": "Paesaggio a Kongens Møller nella luce del pomeriggio",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcbeldringe": {
    "title": "Veduta verso la tenuta di Beldringe",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pclaesoe": {
    "title": "Betulle a Læsø dopo la pioggia",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcvognserup": {
    "title": "Strada di campagna vicino alla tenuta di Vognserup",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcvenice": {
    "title": "Il Canal Grande a Venezia",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcnysoe": {
    "title": "Sulla scalinata del giardino di Nysø",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcmaywood": {
    "title": "Faggeta di maggio vicino a Iselingen",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pccivitella": {
    "title": "Colline rocciose vicino a Civitella",
    "museum": "Statens Museum for Kunst, Copenaghen"
  },
  "pcmeadow": {
    "title": "I prati di Dortheaslyst",
    "museum": "Statens Museum for Kunst, Copenaghen"
  }
});
  P.paths = P.paths || {};
  P.paths.skovgaard = {
  "title": "Il percorso di vita di P.C. Skovgaard",
  "part": "Coste, campi e faggete",
  "subtitle": "Dalla Selandia all’Italia",
  "intro": "Viaggia con il paesaggista danese P.C. Skovgaard: verso le coste e i campi della Selandia, attraverso l’ampia campagna danese, a Venezia e nella faggeta di maggio e infine tra le colline d’Italia. Le immagini provengono dallo Statens Museum for Kunst di Copenaghen, che mette liberamente a disposizione le sue riproduzioni.",
  "ending": [
    "P.C. Skovgaard muore il 13 aprile 1875.",
    "Molti dei suoi quadri sono oggi conservati allo Statens Museum for Kunst di Copenaghen."
  ],
  "epilogue": "P.C. Skovgaard muore il 13 aprile 1875. Il percorso conduce dalle coste della Selandia, attraverso l’ampia campagna danese, a Venezia, nella faggeta di maggio e tra le colline d’Italia.",
  "life": "1817–1875"
};
  P.stations = Object.assign(P.stations || {}, {
  "pcs1": {
    "place": "Coste e campi della Selandia",
    "when": "1842–1844",
    "mapLabel": "Selandia",
    "intro": [
      "P.C. Skovgaard nasce il 4 aprile 1817; all’Accademia di Belle Arti di Copenaghen l’amicizia con il pittore J.Th. Lundbye diventa molto importante per lui.",
      "Nell’estate del 1843 i due amici disegnano e dipingono nella terra d’origine di Skovgaard, intorno a Vejby, e nello stesso anno vince un premio con un quadro di querce."
    ]
  },
  "pcs2": {
    "place": "In viaggio per tutto il paese",
    "when": "1847–1849",
    "mapLabel": "Danimarca",
    "intro": [
      "Nel 1845 Skovgaard riceve una medaglia d’esposizione e conclude l’Accademia; negli anni Quaranta dell’Ottocento viaggia per tutta la Danimarca.",
      "Dipinge, tra l’altro, presso la tenuta di Vognserup e diventa un pittore che ritrae il paesaggio danese."
    ]
  },
  "pcs3": {
    "place": "Venezia e la faggeta di maggio",
    "when": "1854–1857",
    "mapLabel": "Venezia e Selandia",
    "intro": [
      "Nel 1854 e nel 1855 Skovgaard si reca per la prima volta in Italia, insieme al pittore Wilhelm Marstrand e allo storico dell’arte N.L. Høyen.",
      "Dopo il ritorno dipinge la sua opera più nota, una faggeta di maggio, con alberi alti e piccole figure sotto la linea dell’orizzonte."
    ]
  },
  "pcs4": {
    "place": "L’Italia e i paesaggi tardi",
    "when": "1869–1875",
    "mapLabel": "Italia e Selandia",
    "intro": [
      "Nel 1869 Skovgaard torna ancora in Italia; in seguito i suoi paesaggi diventano più grandiosi.",
      "La sua pittura monumentale ha grande importanza per le generazioni successive, anche per i figli Joakim e Niels."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "pchoejerup": {
    "text": [
      "La chiesa sorge tra gli alberi in cima alla bianca scogliera di gesso, e in basso la spiaggia corre lungo il mare.",
      "Skovgaard ha firmato il quadro con il suo monogramma e l’anno 1842."
    ],
    "fact": "1842. Statens Museum for Kunst, Copenaghen."
  },
  "pcraageleje": {
    "text": [
      "Onde dalle creste bianche si infrangono sotto nuvole leggere su un’ampia spiaggia di sabbia.",
      "Nella pittura è inciso «Ved Rougeleie Juli 1843», a Rågeleje nel luglio 1843."
    ],
    "fact": "1843. Statens Museum for Kunst, Copenaghen."
  },
  "pcoats": {
    "text": [
      "L’avena alta riempie il primo piano, e dietro ci sono alberi e un tetto rosso.",
      "Il quadro nasce durante il soggiorno estivo di Skovgaard e Lundbye a Vejby nel 1843."
    ],
    "fact": "1843. Statens Museum for Kunst, Copenaghen."
  },
  "pcdronning": {
    "text": [
      "Un ruscello si snoda tra verdi colline fino al mare, e sopra le nuvole attraversano un cielo azzurro.",
      "Il quadro è firmato «PSkovgaard -1844-»."
    ],
    "fact": "1844. Statens Museum for Kunst, Copenaghen."
  },
  "pcmoeller": {
    "text": [
      "Un sentiero sabbioso passa accanto a un masso verso un bosco, sopra il quale incombono nuvole pesanti.",
      "Skovgaard dipinge il quadro nel 1844, a olio su cartone."
    ],
    "fact": "1844. Statens Museum for Kunst, Copenaghen."
  },
  "pcbeldringe": {
    "text": [
      "Lo sguardo attraversa un ampio campo con cardi fino ad alberi lontani, sotto un alto cielo azzurro.",
      "Il quadro è stato dipinto nel 1847 a olio su cartone e poi montato su tela."
    ],
    "fact": "1847. Statens Museum for Kunst, Copenaghen."
  },
  "pclaesoe": {
    "text": [
      "Betulle slanciate costeggiano un sentiero, e nel cielo le nuvole grigie si diradano.",
      "Il quadro reca l’iscrizione «PS 19 Mai 1849»."
    ],
    "fact": "1849. Statens Museum for Kunst, Copenaghen."
  },
  "pcvognserup": {
    "text": [
      "Una strada chiara passa sotto grandi alberi, e lungo il cammino ci sono delle persone.",
      "Secondo il titolo del museo, il pittore J.Th. Lundbye disegna sul ciglio della strada; il quadro è firmato 1849."
    ],
    "fact": "1849. Statens Museum for Kunst, Copenaghen."
  },
  "pcvenice": {
    "text": [
      "Le gondole scivolano tra i palazzi sul Canal Grande, e sullo sfondo si alza la cupola di Santa Maria della Salute.",
      "Il quadro reca l’iscrizione «Venezia Juni 1854»."
    ],
    "fact": "1854. Statens Museum for Kunst, Copenaghen."
  },
  "pcnysoe": {
    "text": [
      "Attraverso una porta aperta sul giardino si vede una donna con un parasole blu sulla scalinata, mentre un’altra siede accanto.",
      "Il titolo del museo nomina Caroline Dalgas e Jeanina Stampe; sul quadro è scritto 13 luglio 1855."
    ],
    "fact": "1855. Statens Museum for Kunst, Copenaghen."
  },
  "pcmaywood": {
    "text": [
      "Due bambine passeggiano con un cane dal pelo dorato nella faggeta soleggiata, e più indietro la loro famiglia siede sull’erba.",
      "Skovgaard trovò il motivo presso la tenuta di Iselingen, nella Selandia meridionale, e dipinse le foglie verde chiaro appena spuntate."
    ],
    "fact": "1857. Statens Museum for Kunst, Copenaghen."
  },
  "pccivitella": {
    "text": [
      "In primo piano ci sono pendii rocciosi assolati con cespugli, e dietro si susseguono montagne azzurre.",
      "Skovgaard dipinge lo studio a olio su carta e vi scrive «Civitella 7 Juli 1869»."
    ],
    "fact": "1869. Statens Museum for Kunst, Copenaghen."
  },
  "pcmeadow": {
    "text": [
      "Prati verdi si estendono fino a una fila di alberi, sopra la quale passano nuvole chiare.",
      "Lo Statens Museum for Kunst data il quadro agli anni dal 1871 al 1875."
    ],
    "fact": "1871–1875. Statens Museum for Kunst, Copenaghen."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
