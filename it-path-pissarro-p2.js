// v9.3 IT content for Pissarro’s life journey, Part 2 (1884–1903), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "National Gallery, London": "National Gallery, Londra",
  "Kunstmuseum Basel": "Kunstmuseum Basel, Basilea",
  "Petit Palais, Paris": "Petit Palais, Parigi",
  "Pushkin Museum, Moskau": "Museo Puškin, Mosca",
  "Eremitage, Sankt Petersburg": "Ermitage, San Pietroburgo",
  "Tate, London": "Tate, Londra",
  "Musée des Beaux-Arts, Lyon": "Musée des Beaux-Arts, Lione",
  "Musée des Beaux-Arts, Dijon": "Musée des Beaux-Arts, Digione",
  "Musée d’art moderne André Malraux, Le Havre": "Musée d’art moderne André Malraux, Le Havre",
  "Szépművészeti Múzeum, Budapest": "Museo di Belle Arti, Budapest"
});
  P.works = Object.assign(P.works || {}, {
  "pxhouse84": {
    "title": "Casa colonica a Éragny",
    "museum": "Los Angeles County Museum of Art"
  },
  "pxgisorsmkt": {
    "title": "Il mercato del pollame a Gisors",
    "museum": "Museum of Fine Arts, Boston"
  },
  "pxwalnut85": {
    "title": "Il campo e il grande noce in inverno, Éragny",
    "museum": "Philadelphia Museum of Art"
  },
  "pxdeafhouse": {
    "title": "La casa della donna sorda e il campanile di Éragny",
    "museum": "Indianapolis Museum of Art"
  },
  "pxpick86": {
    "title": "La raccolta delle mele",
    "museum": "Ohara Museum of Art, Kurashiki"
  },
  "pxmeadow87": {
    "title": "Tardo pomeriggio nel nostro prato",
    "museum": "National Gallery, Londra"
  },
  "pxappharv": {
    "title": "La raccolta delle mele a Éragny",
    "museum": "Dallas Museum of Art"
  },
  "pxwin88": {
    "title": "Veduta dalla mia finestra, Éragny-sur-Epte",
    "museum": "Ashmolean Museum, Oxford"
  },
  "pxlacroix": {
    "title": "L’Île Lacroix a Rouen, nebbia",
    "museum": "Philadelphia Museum of Art"
  },
  "pxglean89": {
    "title": "Le spigolatrici",
    "museum": "Kunstmuseum Basel, Basilea"
  },
  "pxfields90": {
    "title": "Contadini nei campi, Éragny",
    "museum": "Buffalo AKG Art Museum"
  },
  "pxcharing": {
    "title": "Charing Cross Bridge, Londra",
    "museum": "National Gallery of Art, Washington"
  },
  "pxpeas91": {
    "title": "Due giovani contadine",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "pxkew": {
    "title": "Kew Green",
    "museum": "Musée des Beaux-Arts, Lione"
  },
  "pxbazsnow": {
    "title": "Veduta di Bazincourt, neve, tramonto",
    "museum": "Museum Barberini, Potsdam"
  },
  "pxplacedu": {
    "title": "La Place du Havre, Parigi",
    "museum": "Art Institute of Chicago"
  },
  "pxwasher": {
    "title": "Una lavandaia a Éragny",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "pxsnow94": {
    "title": "Neve a Éragny",
    "museum": "Musée des Beaux-Arts, Digione"
  },
  "pxpinkknok": {
    "title": "La casa rosa, Knokke",
    "museum": "Tel Aviv Museum of Art"
  },
  "pxknokke": {
    "title": "Il villaggio di Knokke",
    "museum": "Petit Palais, Parigi"
  },
  "pxsnow95": {
    "title": "Sole del mattino sulla neve, Éragny-sur-Epte",
    "museum": "Museum of Fine Arts, Boston"
  },
  "pxrouenmorn": {
    "title": "Mattino, giorno nuvoloso, Rouen",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "pxsteam": {
    "title": "Piroscafi nel porto di Rouen",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "pxself96": {
    "title": "Autoritratto",
    "museum": "Dallas Museum of Art"
  },
  "pxunload": {
    "title": "Porto di Rouen, scarico del legname",
    "museum": "Clark Art Institute, Williamstown"
  },
  "pxrousun": {
    "title": "Tramonto, porto di Rouen",
    "museum": "National Museum Cardiff"
  },
  "pxepicerie": {
    "title": "Rue de l’Épicerie a Rouen, sole",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "pxwintermorn": {
    "title": "Il Boulevard Montmartre in un mattino d’inverno",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "pxmorncloud": {
    "title": "Boulevard Montmartre, mattino, nuvoloso",
    "museum": "National Gallery of Victoria, Melbourne"
  },
  "pxmardi": {
    "title": "Boulevard Montmartre, martedì grasso",
    "museum": "Hammer Museum, Los Angeles"
  },
  "pxtwilight": {
    "title": "Boulevard Montmartre, crepuscolo",
    "museum": "Museum Barberini, Potsdam"
  },
  "pxitaliens": {
    "title": "Boulevard des Italiens, mattino, sole",
    "museum": "National Gallery of Art, Washington"
  },
  "pxnight": {
    "title": "Il Boulevard Montmartre di notte",
    "museum": "National Gallery, Londra"
  },
  "pxsaintpluie": {
    "title": "Rue Saint-Honoré nel pomeriggio, pioggia",
    "museum": "Museo Nacional Thyssen-Bornemisza, Madrid"
  },
  "pxsainthon": {
    "title": "Rue Saint-Honoré, effetto di sole, pomeriggio",
    "museum": "Nelson-Atkins Museum of Art, Kansas City"
  },
  "pxoperasnow": {
    "title": "Avenue de l’Opéra, neve, mattino",
    "museum": "Museo Puškin, Mosca"
  },
  "pxtheatre": {
    "title": "Place du Théâtre-Français, primavera",
    "museum": "Ermitage, San Pietroburgo"
  },
  "pxoperasun": {
    "title": "Avenue de l’Opéra, sole del mattino",
    "museum": "Philadelphia Museum of Art"
  },
  "pxgarden98": {
    "title": "Il giardino dell’artista a Éragny",
    "museum": "National Gallery of Art, Washington"
  },
  "pxtuilwin": {
    "title": "Il giardino delle Tuileries in un pomeriggio d’inverno",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "pxtuilsp": {
    "title": "Il giardino delle Tuileries in un mattino di primavera",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "pxhay99": {
    "title": "Mucchi di fieno, mattino, Éragny",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "pxcarrousel": {
    "title": "Place du Carrousel, Parigi",
    "museum": "National Gallery of Art, Washington"
  },
  "pxlouvrerain": {
    "title": "Il Louvre, pomeriggio, tempo di pioggia",
    "museum": "National Gallery of Art, Washington"
  },
  "pxtuil00": {
    "title": "Il giardino delle Tuileries, cielo chiaro e nuvoloso",
    "museum": "Ermitage, San Pietroburgo"
  },
  "pxpontfrost": {
    "title": "Mattino, sole d’inverno, gelo, il Pont-Neuf",
    "museum": "Honolulu Museum of Art"
  },
  "pxpontsun": {
    "title": "Sole del pomeriggio, Pont-Neuf",
    "museum": "Philadelphia Museum of Art"
  },
  "pxpont02": {
    "title": "Il Pont-Neuf",
    "museum": "Museo di Belle Arti, Budapest"
  },
  "pxpontsnow": {
    "title": "Pont-Neuf, neve, seconda serie",
    "museum": "National Museum Cardiff"
  },
  "pxdieppefair": {
    "title": "Il mercato presso la chiesa di Saint-Jacques, Dieppe, mattino, sole",
    "museum": "Ermitage, San Pietroburgo"
  },
  "pxdieppeport": {
    "title": "L’avamporto di Dieppe, pomeriggio, sole",
    "museum": "Château-Musée de Dieppe"
  },
  "pxpontroyal": {
    "title": "Il Pont Royal e il Pavillon de Flore",
    "museum": "Petit Palais, Parigi"
  },
  "pxmalaquais": {
    "title": "Quai Malaquais, pomeriggio di sole",
    "museum": "Ermitage, San Pietroburgo"
  },
  "pxhavremorn": {
    "title": "L’avamporto di Le Havre, mattino, sole, marea alta",
    "museum": "Musée d’art moderne André Malraux, Le Havre"
  },
  "pxpilotes": {
    "title": "L’Anse des Pilotes a Le Havre, marea alta, pomeriggio, sole",
    "museum": "Musée d’art moderne André Malraux, Le Havre"
  },
  "pxapples03": {
    "title": "Meli a Éragny, mattino di sole",
    "museum": "Kunstmuseum Basel, Basilea"
  },
  "pxself03": {
    "title": "Autoritratto con cappello",
    "museum": "Tate, Londra"
  }
});
  P.paths = P.paths || {};
  P.paths.pissarro = {
  "title": "Il cammino di vita di Camille Pissarro",
  "part": "Parti 1–2 · 1830–1903",
  "subtitle": "Da St. Thomas, attraverso Pontoise ed Éragny, ai viali di Parigi",
  "intro": "Viaggia con Camille Pissarro per tutta la sua vita: dalla nascita a St. Thomas nel 1830, attraverso il Venezuela, Parigi, Louveciennes, Londra e Pontoise e le otto mostre impressioniste, fino a Éragny, al neoimpressionismo con Seurat e Signac e al ritorno, alle vedute di città dipinte dalle finestre di Parigi, Rouen, Dieppe e Le Havre, fino alla morte il 13 novembre 1903.",
  "ending": [
    "Camille Pissarro muore a Parigi il 13 novembre 1903, a settantatré anni. È sepolto nel cimitero di Père-Lachaise.",
    "Restano i campi e i giardini di Pontoise e di Éragny, i viali, i ponti e i porti dei suoi ultimi anni, e il ricordo dell’unico pittore che partecipò a tutte e otto le mostre impressioniste."
  ],
  "epilogue": "Camille Pissarro muore a Parigi il 13 novembre 1903. È sepolto nel cimitero di Père-Lachaise.",
  "life": "1830–1903"
};
  P.stations = Object.assign(P.stations || {}, {
  "pxeragny": {
    "place": "Éragny-sur-Epte",
    "when": "1884–1886",
    "mapLabel": "Éragny",
    "intro": [
      "Nel 1884 la famiglia si stabilisce a Éragny-sur-Epte, un villaggio vicino a Gisors, in Normandia. Pissarro vi abita fino alla fine della vita; lo studio è nel giardino.",
      "Nello stesso anno nasce il figlio più piccolo, Paul-Émile. Prati, frutteti, case coloniche e il mercato di Gisors diventano motivi nuovi."
    ]
  },
  "pxneo": {
    "place": "Con Seurat e Signac",
    "when": "1885–1888",
    "mapLabel": "Punti",
    "intro": [
      "Nel 1885 Pissarro incontra Paul Signac e Georges Seurat. Adotta il loro nuovo modo di dipingere con piccoli punti di colore puro, il neoimpressionismo.",
      "All’ottava e ultima mostra impressionista del 1886 i suoi quadri sono esposti con quelli di Seurat e Signac in una sala a parte. Nel 1888 si ammala di un’infiammazione cronica agli occhi."
    ]
  },
  "pxreturn": {
    "place": "Addio al punto",
    "when": "1889–1892",
    "mapLabel": "Londra",
    "intro": [
      "Dipingere a punti è lento. Verso il 1890 Pissarro torna a un modo più libero, impressionista.",
      "Nel 1890 e nel 1892 va a Londra dal figlio Lucien. Nel 1892 ha un grande successo da Durand-Ruel, e la famiglia può comprare la casa di Éragny."
    ]
  },
  "pxwindow": {
    "place": "Dipingere dalla finestra",
    "when": "1893–1895",
    "mapLabel": "Finestra",
    "intro": [
      "Per il male agli occhi Pissarro può ormai lavorare all’aperto solo a fatica. Nel 1893 alloggia a Parigi all’Hôtel Garnier, in Rue Saint-Lazare, e dipinge le strade dalla finestra.",
      "A Éragny si sistema uno studio. L’estate del 1894 la famiglia la passa nella località balneare belga di Knokke."
    ]
  },
  "pxrouen2": {
    "place": "Il porto di Rouen",
    "when": "1896–1898",
    "mapLabel": "Rouen",
    "intro": [
      "Nel 1896 Pissarro dipinge a Rouen una serie di vedute del porto con luce e tempo diversi, da una camera d’albergo alta sui lungosenna.",
      "Vi torna nello stesso anno, stavolta in un altro albergo, con un altro sguardo. Nel 1898 è là per l’ultima volta e dipinge il porto e i ponti."
    ]
  },
  "pxmontmartre": {
    "place": "Boulevard Montmartre",
    "when": "1897",
    "mapLabel": "Montmartre",
    "intro": [
      "All’inizio del 1897 Pissarro affitta una stanza al Grand Hôtel de Russie. Dalla finestra guarda il Boulevard Montmartre e il Boulevard des Italiens.",
      "Dipinge la stessa strada al mattino e alla sera, al sole, sotto la pioggia e con il tempo d’inverno, il martedì grasso e una volta di notte."
    ]
  },
  "pxopera": {
    "place": "Avenue de l’Opéra",
    "when": "1897–1898",
    "mapLabel": "Opéra",
    "intro": [
      "Nell’inverno 1897–98 Pissarro alloggia all’Hôtel du Louvre. Da lì vede l’Avenue de l’Opéra, la Rue Saint-Honoré e la Place du Théâtre-Français.",
      "I mesi d’estate li passa ancora a Éragny, dove il giardino diventa un motivo principale."
    ]
  },
  "pxtuileries": {
    "place": "Tuileries e Louvre",
    "when": "1899–1900",
    "mapLabel": "Tuileries",
    "intro": [
      "Nel 1899 Pissarro prende un appartamento al 204 di Rue de Rivoli. Dalle finestre dipinge il giardino delle Tuileries e il Louvre.",
      "All’Esposizione universale del 1900 sono mostrati sette dei suoi quadri. Dopo una seconda serie del Louvre e delle Tuileries si trasferisce in Place Dauphine."
    ]
  },
  "pxpontneuf": {
    "place": "Pont-Neuf e Dieppe",
    "when": "1900–1902",
    "mapLabel": "Pont-Neuf",
    "intro": [
      "Dall’appartamento in Place Dauphine, sull’Île de la Cité, Pissarro dipinge ancora e ancora il Pont-Neuf, al sole, sotto la neve e con il gelo.",
      "Nelle estati del 1901 e del 1902 lavora a Dieppe: prima intorno alla chiesa di Saint-Jacques, poi al porto. Nel 1902 dona una delle sue vedute del porto al museo della città."
    ]
  },
  "pxhavre": {
    "place": "Le Havre e l’ultimo anno",
    "when": "1903",
    "mapLabel": "1903",
    "intro": [
      "Nel 1903 Pissarro dipinge dal Quai Voltaire la Senna, il Pont Royal e la riva sinistra. Passa l’estate a Le Havre e dipinge l’avamporto; il museo della città acquista due dei suoi quadri.",
      "Camille Pissarro muore a Parigi il 13 novembre 1903, a settantatré anni. È sepolto nel cimitero di Père-Lachaise."
    ]
  },
  "pxosny": {
    "place": "Da Pontoise a Osny",
    "when": "1878–1884",
    "mapLabel": "Osny",
    "intro": [
      "Pissarro resta fedele al gruppo impressionista e continua a dipingere a Pontoise e dintorni, spesso con figure nei campi e nell’orto. Nel 1882 la famiglia lascia Pontoise e si trasferisce a Osny.",
      "Nell’autunno del 1883 soggiorna a Rouen e dipinge i lungosenna della città. Nel 1884 si trasferisce a Éragny-sur-Epte."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "pxhouse84": {
    "text": [
      "Nel primo anno a Éragny Pissarro dipinge una casa colonica dietro un albero, con camini rossi e orti. Il quadro appartiene al Los Angeles County Museum of Art."
    ],
    "fact": "1884. Los Angeles County Museum of Art."
  },
  "pxgisorsmkt": {
    "text": [
      "Gisors è la piccola città vicino a Éragny. Pissarro mostra contadine e compratori stretti al mercato, a gouache e gessetto. Il foglio è al Museum of Fine Arts di Boston."
    ],
    "fact": "1885. Museum of Fine Arts, Boston."
  },
  "pxwalnut85": {
    "text": [
      "Un noce senza foglie s’innalza nel campo invernale di fronte a Éragny. Pissarro dipinge l’albero più volte in questi anni. Il quadro è al Philadelphia Museum of Art."
    ],
    "fact": "1885. Philadelphia Museum of Art."
  },
  "pxdeafhouse": {
    "text": [
      "Prato, alberi, una casa e il campanile: lo sguardo sul villaggio nel 1886. Il quadro è all’Indianapolis Museum of Art."
    ],
    "fact": "1886. Indianapolis Museum of Art."
  },
  "pxpick86": {
    "text": [
      "Donne raccolgono mele sotto gli alberi. Il grande quadro è dipinto nel 1886, l’anno in cui Pissarro adotta la nuova tecnica del punto. È all’Ohara Museum of Art di Kurashiki, in Giappone."
    ],
    "fact": "1886. Ohara Museum of Art, Kurashiki."
  },
  "pxmeadow87": {
    "text": [
      "Il prato dietro la casa di Éragny, con lunghe ombre nel pomeriggio. Il colore è scomposto in piccoli tocchi. Il quadro è alla National Gallery di Londra."
    ],
    "fact": "1887. National Gallery, Londra."
  },
  "pxappharv": {
    "text": [
      "Un uomo scuote le mele dall’albero mentre le donne le raccolgono. Tutto il quadro è costruito con fini punti di colore. È al Dallas Museum of Art."
    ],
    "fact": "1888. Dallas Museum of Art."
  },
  "pxwin88": {
    "text": [
      "Pissarro guarda dalla finestra le case vicine, gli orti e i campi. Il quadro è all’Ashmolean Museum di Oxford."
    ],
    "fact": "1888. Ashmolean Museum, Oxford."
  },
  "pxlacroix": {
    "text": [
      "La nebbia copre la Senna a Rouen. Barche, fumo e rive si sciolgono in punti chiari. Il quadro è al Philadelphia Museum of Art."
    ],
    "fact": "1888. Philadelphia Museum of Art."
  },
  "pxglean89": {
    "text": [
      "Donne raccolgono le spighe rimaste a terra dopo la mietitura. Il lavoro nei campi resta un tema importante a Éragny. Il quadro è al Kunstmuseum Basel di Basilea."
    ],
    "fact": "1889. Kunstmuseum Basel, Basilea."
  },
  "pxfields90": {
    "text": [
      "Un contadino e una contadina lavorano nel campo. La pennellata torna più libera. Il quadro è al Buffalo AKG Art Museum."
    ],
    "fact": "1890. Buffalo AKG Art Museum."
  },
  "pxcharing": {
    "text": [
      "Nel viaggio da Lucien nel 1890 Pissarro dipinge il Tamigi con il ponte di Charing Cross e le torri di Westminster. Il quadro è alla National Gallery of Art di Washington."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "pxpeas91": {
    "text": [
      "Due giovani donne riposano ai margini del campo. Pissarro le dipinge grandi e da vicino. Il quadro è al Metropolitan Museum of Art."
    ],
    "fact": "1891–92. Metropolitan Museum of Art, New York."
  },
  "pxkew": {
    "text": [
      "Nel viaggio per il matrimonio di Lucien nel 1892 Pissarro dipinge i prati di Kew, a ovest di Londra. Il quadro è al Musée des Beaux-Arts di Lione."
    ],
    "fact": "1892. Musée des Beaux-Arts, Lione."
  },
  "pxbazsnow": {
    "text": [
      "Bazincourt è il villaggio vicino a Éragny. Il sole tramonta sulla valle innevata. Il quadro appartiene al Museum Barberini di Potsdam."
    ],
    "fact": "1892. Museum Barberini, Potsdam."
  },
  "pxplacedu": {
    "text": [
      "Dalla finestra dell’albergo Pissarro guarda la piazza davanti alla stazione Saint-Lazare, con carrozze e passanti. È uno dei suoi primi quadri di una strada di Parigi vista dall’alto. È all’Art Institute of Chicago."
    ],
    "fact": "1893. Art Institute of Chicago."
  },
  "pxwasher": {
    "text": [
      "Una donna si china su un tino da bucato nel giardino. Il quadro è al Metropolitan Museum of Art."
    ],
    "fact": "1893. Metropolitan Museum of Art, New York."
  },
  "pxsnow94": {
    "text": [
      "La neve copre prati e alberi vicino a Éragny. Il quadro è al Musée des Beaux-Arts di Digione."
    ],
    "fact": "1894. Musée des Beaux-Arts, Digione."
  },
  "pxpinkknok": {
    "text": [
      "A Knokke, nell’estate del 1894, Pissarro dipinge una casa rosa dal tetto rosso in una strada del villaggio. Il quadro è al Tel Aviv Museum of Art."
    ],
    "fact": "1894. Tel Aviv Museum of Art."
  },
  "pxknokke": {
    "text": [
      "I tetti e il campanile di Knokke sopra giardini verdi. Il quadro è al Petit Palais di Parigi."
    ],
    "fact": "1894. Petit Palais, Parigi."
  },
  "pxsnow95": {
    "text": [
      "La luce del mattino passa tra un filare di pioppi senza foglie e cade sulla neve. Un contadino cammina sotto gli alberi. Il quadro è al Museum of Fine Arts di Boston."
    ],
    "fact": "1895. Museum of Fine Arts, Boston."
  },
  "pxrouenmorn": {
    "text": [
      "Il grande ponte, barche e un camino fumante in un mattino grigio a Rouen. Il quadro è al Metropolitan Museum of Art."
    ],
    "fact": "1896. Metropolitan Museum of Art, New York."
  },
  "pxsteam": {
    "text": [
      "I piroscafi sono ormeggiati alla banchina; fumo e vapore si mescolano al cielo. Anche questo quadro è al Metropolitan Museum of Art."
    ],
    "fact": "1896. Metropolitan Museum of Art, New York."
  },
  "pxself96": {
    "text": [
      "Pissarro si dipinge con barba bianca, cappello nero e tavolozza, davanti a un muro chiaro. Il quadro è al Dallas Museum of Art."
    ],
    "fact": "1896. Dallas Museum of Art."
  },
  "pxunload": {
    "text": [
      "Sulla banchina di Rouen si scarica legname da un piroscafo, mentre sullo sfondo fumano le fabbriche. Il quadro appartiene al Clark Art Institute."
    ],
    "fact": "1898. Clark Art Institute, Williamstown."
  },
  "pxrousun": {
    "text": [
      "Il sole della sera colora cielo e acqua dietro i piroscafi. Il quadro è al National Museum Cardiff."
    ],
    "fact": "1898. National Museum Cardiff."
  },
  "pxepicerie": {
    "text": [
      "Una strada stretta con banchi di mercato conduce verso le torri della cattedrale. Il quadro è al Metropolitan Museum of Art."
    ],
    "fact": "1898. Metropolitan Museum of Art, New York."
  },
  "pxwintermorn": {
    "text": [
      "Il viale si perde in profondità, pieno di carrozze e gente, bordato di alberi senza foglie. Il quadro è al Metropolitan Museum of Art."
    ],
    "fact": "1897. Metropolitan Museum of Art, New York."
  },
  "pxmorncloud": {
    "text": [
      "Lo stesso sguardo in un mattino nuvoloso, in toni grigi e chiari. Il quadro è alla National Gallery of Victoria di Melbourne."
    ],
    "fact": "1897. National Gallery of Victoria, Melbourne."
  },
  "pxmardi": {
    "text": [
      "Il martedì grasso una folla colorata riempie il viale. Il quadro è all’Hammer Museum di Los Angeles."
    ],
    "fact": "1897. Hammer Museum, Los Angeles."
  },
  "pxtwilight": {
    "text": [
      "Al crepuscolo si accendono le prime luci sotto un cielo giallo pallido. Il quadro appartiene al Museum Barberini di Potsdam."
    ],
    "fact": "1897. Museum Barberini, Potsdam."
  },
  "pxitaliens": {
    "text": [
      "Dallo stesso albergo Pissarro guarda anche dall’altra parte, sul Boulevard des Italiens alla luce del mattino. Il quadro è alla National Gallery of Art di Washington."
    ],
    "fact": "1897. National Gallery of Art, Washington."
  },
  "pxnight": {
    "text": [
      "L’unico quadro notturno della serie: lampioni e vetrine si riflettono sul viale bagnato. Il quadro è alla National Gallery di Londra."
    ],
    "fact": "1897. National Gallery, Londra."
  },
  "pxsaintpluie": {
    "text": [
      "La pioggia brilla su strada e piazza, mentre passano ombrelli e carrozze. Il quadro è al Museo Nacional Thyssen-Bornemisza di Madrid."
    ],
    "fact": "1897. Museo Nacional Thyssen-Bornemisza, Madrid."
  },
  "pxsainthon": {
    "text": [
      "Lo stesso angolo alla luce del pomeriggio, con fontana e lampione sulla piazza. Il quadro è al Nelson-Atkins Museum of Art di Kansas City."
    ],
    "fact": "1898. Nelson-Atkins Museum of Art, Kansas City."
  },
  "pxoperasnow": {
    "text": [
      "La neve copre l’Avenue de l’Opéra in un mattino d’inverno. Il quadro è al Museo Puškin di Mosca."
    ],
    "fact": "1898. Museo Puškin, Mosca."
  },
  "pxtheatre": {
    "text": [
      "Alberi verdi, carrozze e omnibus sulla piazza davanti al teatro, in primavera. Il quadro è all’Ermitage di San Pietroburgo."
    ],
    "fact": "1898. Ermitage, San Pietroburgo."
  },
  "pxoperasun": {
    "text": [
      "Il viale conduce all’Opéra in lontananza; il sole del mattino cade sulla piazza. Il quadro è al Philadelphia Museum of Art."
    ],
    "fact": "1898. Philadelphia Museum of Art."
  },
  "pxgarden98": {
    "text": [
      "Aiuole, alberi e la casa di Éragny. In estate Pissarro dipinge il proprio giardino. Il quadro è alla National Gallery of Art."
    ],
    "fact": "1898. National Gallery of Art, Washington."
  },
  "pxtuilwin": {
    "text": [
      "Dall’appartamento in Rue de Rivoli Pissarro guarda il giardino invernale fino alle cupole in lontananza. Il quadro è al Metropolitan Museum of Art."
    ],
    "fact": "1899. Metropolitan Museum of Art, New York."
  },
  "pxtuilsp": {
    "text": [
      "Lo stesso giardino in primavera, con prati verdi e viali chiari. Anche questo quadro è al Metropolitan Museum of Art."
    ],
    "fact": "1899. Metropolitan Museum of Art, New York."
  },
  "pxhay99": {
    "text": [
      "Di nuovo a Éragny: un mucchio di fieno alla luce del mattino sotto alberi alti. Il quadro è al Metropolitan Museum of Art."
    ],
    "fact": "1899. Metropolitan Museum of Art, New York."
  },
  "pxcarrousel": {
    "text": [
      "Lo sguardo attraversa la Place du Carrousel verso il Louvre e il Pavillon de Flore. Il quadro è alla National Gallery of Art."
    ],
    "fact": "1900. National Gallery of Art, Washington."
  },
  "pxlouvrerain": {
    "text": [
      "Pioggia sulla Senna, un rimorchiatore passa sotto il ponte, dietro il Louvre. Anche questo quadro è alla National Gallery of Art."
    ],
    "fact": "1900. National Gallery of Art, Washington."
  },
  "pxtuil00": {
    "text": [
      "Il giardino delle Tuileries sotto un cielo chiaro e nuvoloso, della seconda serie. Il quadro è all’Ermitage."
    ],
    "fact": "1900. Ermitage, San Pietroburgo."
  },
  "pxpontfrost": {
    "text": [
      "Il gelo copre il lungosenna, il sole d’inverno la Senna, in lontananza il Louvre. Il quadro è all’Honolulu Museum of Art."
    ],
    "fact": "verso il 1901. Honolulu Museum of Art."
  },
  "pxpontsun": {
    "text": [
      "Il Pont-Neuf dall’alto, pieno di gente e carrozze, al sole del pomeriggio. Il quadro è al Philadelphia Museum of Art."
    ],
    "fact": "1901. Philadelphia Museum of Art."
  },
  "pxpont02": {
    "text": [
      "Il ponte come una forte diagonale, con pedoni e carrozze. Pissarro lo dipinge sempre dalla stessa finestra. Il quadro è al Museo di Belle Arti di Budapest."
    ],
    "fact": "1902. Museo di Belle Arti, Budapest."
  },
  "pxpontsnow": {
    "text": [
      "La neve copre il ponte e i lungosenna. Il quadro appartiene alla seconda serie ed è al National Museum Cardiff."
    ],
    "fact": "1902. National Museum Cardiff."
  },
  "pxdieppefair": {
    "text": [
      "Tende del mercato e gente davanti alla chiesa di Saint-Jacques a Dieppe, nel 1901. Il quadro è all’Ermitage."
    ],
    "fact": "1901. Ermitage, San Pietroburgo."
  },
  "pxdieppeport": {
    "text": [
      "L’avamporto di Dieppe con barche e banchine al sole del pomeriggio. Pissarro dona questo quadro al museo della città nel 1902; è tuttora al Château-Musée de Dieppe."
    ],
    "fact": "1902. Château-Musée de Dieppe."
  },
  "pxpontroyal": {
    "text": [
      "Dal Quai Voltaire, nel 1903, Pissarro guarda il Pont Royal e il Pavillon de Flore. Il quadro è al Petit Palais di Parigi."
    ],
    "fact": "1903. Petit Palais, Parigi."
  },
  "pxmalaquais": {
    "text": [
      "Alberi, passanti e carrozze sul Quai Malaquais, sulla riva sinistra della Senna. Il quadro è all’Ermitage."
    ],
    "fact": "1903. Ermitage, San Pietroburgo."
  },
  "pxhavremorn": {
    "text": [
      "Nell’estate del 1903 Pissarro dipinge dalla finestra dell’albergo l’avamporto di Le Havre, con gru e velieri. Il quadro è al MuMa di Le Havre."
    ],
    "fact": "1903. Musée d’art moderne André Malraux, Le Havre."
  },
  "pxpilotes": {
    "text": [
      "L’insenatura dei piloti, con velieri, un albero e molta gente sulla banchina. Anche questo quadro è al MuMa di Le Havre."
    ],
    "fact": "1903. Musée d’art moderne André Malraux, Le Havre."
  },
  "pxapples03": {
    "text": [
      "Meli e un mucchio di fieno al sole del mattino: uno degli ultimi quadri di Éragny. È al Kunstmuseum Basel di Basilea."
    ],
    "fact": "1903. Kunstmuseum Basel, Basilea."
  },
  "pxself03": {
    "text": [
      "Nell’ultimo anno di vita Pissarro si dipinge con cappello e barba bianca davanti a una finestra. Muore a Parigi il 13 novembre 1903. Il quadro è alla Tate di Londra."
    ],
    "fact": "1903. Tate, Londra."
  },
  "pxeragnyent": {
    "text": [
      "Nel 1884 Pissarro si trasferisce a Éragny-sur-Epte.",
      "Questo quadro mostra l’ingresso del villaggio nello stesso anno: una strada, il campanile, un cielo giallo.",
      "Si trova al Pola Museum of Art di Hakone. Da qui il cammino porta agli anni di Éragny."
    ],
    "fact": "1884. Pola Museum of Art, Hakone."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
