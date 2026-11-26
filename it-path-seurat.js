// v10.43 IT content for Georges Seurat’s life journey (1859–1891). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "The Art Institute of Chicago": "The Art Institute of Chicago",
  "The Museum of Modern Art (MoMA), New York": "The Museum of Modern Art (MoMA), New York"
});
  P.works = Object.assign(P.works || {}, {
  "sesaintouen": {
    "title": "Paesaggio a Saint-Ouen",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "separapet": {
    "title": "Uomo appoggiato a un parapetto",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sepontaubert": {
    "title": "Il bosco di Pontaubert",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "semower": {
    "title": "Il falciatore",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sehaymakers": {
    "title": "Fienatrici a Montfermeil",
    "museum": "National Gallery of Art, Washington"
  },
  "sehoe": {
    "title": "Contadino con la zappa",
    "museum": "National Gallery of Art, Washington"
  },
  "sestonebreaker": {
    "title": "Lo spaccapietre",
    "museum": "National Gallery of Art, Washington"
  },
  "sehaystacks": {
    "title": "Covoni",
    "museum": "National Gallery of Art, Washington"
  },
  "segardener": {
    "title": "Il giardiniere",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sewateringcan": {
    "title": "L’annaffiatoio – Giardino a Le Raincy",
    "museum": "National Gallery of Art, Washington"
  },
  "sesummer": {
    "title": "Paesaggio estivo",
    "museum": "National Gallery of Art, Washington"
  },
  "seseine": {
    "title": "Veduta della Senna",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sefigures": {
    "title": "Figure in un paesaggio",
    "museum": "National Gallery of Art, Washington"
  },
  "sejattestudy": {
    "title": "Studio per «Una domenica alla Grande Jatte»",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sejattewood": {
    "title": "Studio per «Una domenica alla Grande Jatte» (su tavola)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sejattesketch": {
    "title": "Bozzetto a olio per «Una domenica alla Grande Jatte»",
    "museum": "Art Institute of Chicago"
  },
  "sejattenga": {
    "title": "Studio per «La Grande Jatte»",
    "museum": "National Gallery of Art, Washington"
  },
  "sejattefigures": {
    "title": "Studio di figure per «La Grande Jatte»",
    "museum": "National Gallery of Art, Washington"
  },
  "jatte": {
    "title": "Una domenica pomeriggio sull’isola della Grande-Jatte",
    "museum": "The Art Institute of Chicago"
  },
  "sehonfleur": {
    "title": "Il faro di Honfleur",
    "museum": "National Gallery of Art, Washington"
  },
  "seportenbessin": {
    "title": "Marina a Port-en-Bessin, Normandia",
    "museum": "National Gallery of Art, Washington"
  },
  "seseascape": {
    "title": "Marina (Gravelines)",
    "museum": "National Gallery of Art, Washington"
  },
  "gravelines": {
    "title": "Il canale di Gravelines alla sera",
    "museum": "The Museum of Modern Art (MoMA), New York"
  },
  "segrayweather": {
    "title": "Tempo grigio, Grande Jatte",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "secircus": {
    "title": "Parata del circo",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.seurat = {
  "title": "Il percorso di vita di Georges Seurat",
  "part": "Parigi, i campi, la Senna e il mare",
  "subtitle": "Il colore in piccoli punti",
  "intro": "Viaggia nella breve vita di Georges Seurat: dai piccoli bozzetti a olio su tavola e dagli studi per l’isola della Grande Jatte fino ai porti della Manica e alla parata del circo. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Georges Seurat muore a Parigi il 29 marzo 1891, a soli 31 anni.",
    "Con i suoi punti di colore ha fondato un modo di dipingere che altri pittori hanno proseguito."
  ],
  "epilogue": "Georges Seurat muore a Parigi il 29 marzo 1891. Il percorso porta dai primi bozzetti a olio, passando per la Grande Jatte, fino al mare.",
  "life": "1859–1891"
};
  P.stations = Object.assign(P.stations || {}, {
  "ses1": {
    "place": "Parigi: gli anni di apprendistato",
    "when": "1859–1881",
    "mapLabel": "Parigi",
    "intro": [
      "Georges Seurat nasce a Parigi il 2 dicembre 1859 e dal 1878 studia all’Accademia di Belle Arti.",
      "Legge libri sul colore e sulla luce e dipinge i primi piccoli paesaggi."
    ]
  },
  "ses2": {
    "place": "Contadini e campi",
    "when": "1881–1883",
    "mapLabel": "Montfermeil",
    "intro": [
      "Nei villaggi a est di Parigi Seurat dipinge contadini al lavoro, covoni e giardini.",
      "I piccoli quadri su tavolette entrano nel coperchio della sua cassetta dei colori."
    ]
  },
  "seurat1": {
    "place": "La Senna e la Grande Jatte",
    "when": "1882–1886",
    "mapLabel": "Grande Jatte",
    "intro": [
      "Sulla Senna vicino a Parigi Seurat dipinge molti studi per il suo grande quadro dell’isola della Grande Jatte.",
      "Per questo mette i colori uno accanto all’altro in piccoli punti che si mescolano solo nell’occhio."
    ]
  },
  "ses4": {
    "place": "Le estati al mare",
    "when": "1886–1890",
    "mapLabel": "Manica",
    "intro": [
      "Quasi ogni estate Seurat va sulla costa della Manica, a Honfleur, Port-en-Bessin e Gravelines.",
      "Lì dipinge porti tranquilli, fari e il mare, a volte con una cornice dipinta a punti."
    ]
  },
  "ses5": {
    "place": "Parigi: il circo e gli ultimi anni",
    "when": "1886–1891",
    "mapLabel": "Parigi",
    "intro": [
      "A Parigi Seurat dipinge ora anche scene serali alla luce artificiale, come la parata davanti a un circo.",
      "Giovani pittori come Paul Signac riprendono il suo modo di dipingere a punti di colore."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "sesaintouen": {
    "text": [
      "Un prato verde si stende verso dolci colline, davanti c’è una catasta di legna.",
      "È uno dei primissimi dipinti a olio del giovane Seurat, ancora senza punti."
    ],
    "fact": "1878–1879. Metropolitan Museum of Art, New York."
  },
  "separapet": {
    "text": [
      "Un uomo con un cappotto scuro si appoggia a un muro, a sinistra c’è un tronco scuro.",
      "Seurat dipinge la scena in piccolo e in fretta su una tavoletta."
    ],
    "fact": "circa 1881. Metropolitan Museum of Art, New York."
  },
  "sepontaubert": {
    "text": [
      "Sottili tronchi giovani si alzano in un bosco verde e luminoso della Borgogna.",
      "Molti piccoli tocchi di colore fanno già presagire la sua pittura a punti."
    ],
    "fact": "1881. Metropolitan Museum of Art, New York."
  },
  "semower": {
    "text": [
      "Un uomo in camicia bianca falcia un campo giallo dorato.",
      "Seurat lo mostra tutto preso dal suo movimento, senza volto."
    ],
    "fact": "1881–1882. Metropolitan Museum of Art, New York."
  },
  "sehaymakers": {
    "text": [
      "Due donne con il fazzoletto in testa rivoltano il fieno con lunghi rastrelli.",
      "La luce del sole rende i loro abiti quasi bianchi."
    ],
    "fact": "circa 1882. National Gallery of Art, Washington."
  },
  "sehoe": {
    "text": [
      "Un contadino si china sul campo e lavora con la zappa.",
      "Davanti brillano piante verdi, dietro strisce di terra rosa e marroni."
    ],
    "fact": "circa 1882. National Gallery of Art, Washington."
  },
  "sestonebreaker": {
    "text": [
      "Un uomo con il berretto alza il martello per spaccare pietre per le strade.",
      "Il mucchio di pietre brilla di un rosa e di un arancio caldi."
    ],
    "fact": "circa 1882. National Gallery of Art, Washington."
  },
  "sehaystacks": {
    "text": [
      "Alcuni covoni a punta stanno in un ampio campo sotto un cielo chiaro.",
      "All’orizzonte si vedono piccoli alberi e case."
    ],
    "fact": "circa 1882. National Gallery of Art, Washington."
  },
  "segardener": {
    "text": [
      "Un giardiniere con il cappello bianco si china su un’aiuola del giardino soleggiato.",
      "Seurat dipinge luce e ombra con pennellate brevi e incrociate."
    ],
    "fact": "1882–1883. Metropolitan Museum of Art, New York."
  },
  "sewateringcan": {
    "text": [
      "Un annaffiatoio grigio sta sul bordo di un vialetto soleggiato.",
      "Il giardino appartiene alla casa di campagna della famiglia Seurat a Le Raincy, vicino a Parigi."
    ],
    "fact": "circa 1883. National Gallery of Art, Washington."
  },
  "sesummer": {
    "text": [
      "Una piccola figura attraversa un ampio prato estivo dall’erba alta.",
      "All’orizzonte un albero scuro e appuntito si alza verso il cielo."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "seseine": {
    "text": [
      "Due uomini stanno in piedi su una piccola barca sulla Senna, dietro c’è una chiatta.",
      "Sull’altra riva ci sono case e fabbriche."
    ],
    "fact": "1882–1883. Metropolitan Museum of Art, New York."
  },
  "sefigures": {
    "text": [
      "Una donna è inginocchiata sull’erba, altre figure stanno nel prato con i parasole.",
      "Sullo sfondo brillano le case chiare di un paese."
    ],
    "fact": "circa 1883. National Gallery of Art, Washington."
  },
  "sejattestudy": {
    "text": [
      "Quasi tutte le figure del grande quadro sono già al loro posto, all’ombra e al sole.",
      "Questo studio è uno degli ultimi e dei più precisi prima del quadro finito."
    ],
    "fact": "1884. Metropolitan Museum of Art, New York."
  },
  "sejattewood": {
    "text": [
      "Sulla riva dell’isola solo poche persone siedono all’ombra degli alberi.",
      "Seurat dipinge queste piccole tavolette sul posto per fissare luce e colori."
    ],
    "fact": "1884. Metropolitan Museum of Art, New York."
  },
  "sejattesketch": {
    "text": [
      "A destra c’è già la coppia con il cilindro e il parasole, a sinistra alcune persone siedono sull’erba.",
      "Oggi il bozzetto si trova nello stesso museo di Chicago del grande quadro."
    ],
    "fact": "1884. Art Institute of Chicago."
  },
  "sejattenga": {
    "text": [
      "Tra gli alberi luccica l’acqua blu della Senna con una vela bianca.",
      "Davanti due figure siedono sull’erba verde chiaro."
    ],
    "fact": "1884–1885. National Gallery of Art, Washington."
  },
  "sejattefigures": {
    "text": [
      "Due donne siedono sull’erba, una tiene un mazzo di fiori.",
      "A sinistra una bambina vestita di bianco sta accanto a un tronco."
    ],
    "fact": "1884–1885. National Gallery of Art, Washington."
  },
  "jatte": {
    "text": [
      "Alcuni parigini si riposano una domenica su un’isola della Senna.",
      "Seurat lavorò circa due anni al grande quadro, che misura circa due metri per tre."
    ],
    "fact": "1884–1886. The Art Institute of Chicago."
  },
  "sehonfleur": {
    "text": [
      "Un faro bianco si alza nel porto di Honfleur, davanti una barca riposa su cavalletti di legno sulla spiaggia.",
      "La sabbia chiara e il mare calmo sono dipinti interamente a piccoli punti."
    ],
    "fact": "1886. National Gallery of Art, Washington."
  },
  "seportenbessin": {
    "text": [
      "Una collina verde scende ripida verso il mare azzurro e calmo.",
      "Sull’erba ci sono macchie gialle di sole e ombre di nuvole."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "seseascape": {
    "text": [
      "Una spiaggia, il mare e il cielo stanno uno sopra l’altro in fasce chiare e calme.",
      "Seurat dipinge intorno al piccolo quadro una cornice blu scuro fatta di punti."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "gravelines": {
    "text": [
      "Seurat trascorse l’estate del 1890 nel piccolo porto di Gravelines, sul mare del Nord.",
      "Alla sera l’acqua diventa chiara, il cielo rosa, e proprio davanti una grande ancora poggia sul molo."
    ],
    "fact": "1890. The Museum of Modern Art (MoMA), New York."
  },
  "segrayweather": {
    "text": [
      "In una giornata grigia alcune barche stanno sulla riva della Senna, gli alberi incorniciano la vista.",
      "Più tardi Seurat dipinge un bordo di punti intorno al quadro."
    ],
    "fact": "circa 1886–1888. Metropolitan Museum of Art, New York."
  },
  "secircus": {
    "text": [
      "Davanti a un circo un suonatore di trombone si esibisce sotto le lampade a gas per attirare gli spettatori.",
      "È il primo quadro in cui Seurat dipinge una scena notturna."
    ],
    "fact": "1887–1888. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
