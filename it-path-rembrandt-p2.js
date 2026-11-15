// v9.7 IT content for Rembrandt’s life journey, Part 2 (1642–1669), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "National Gallery, London": "National Gallery, Londra",
  "Gemäldegalerie, Berlin": "Gemäldegalerie, Berlino",
  "Kunsthistorisches Museum, Wien": "Kunsthistorisches Museum, Vienna",
  "Frick Collection, New York": "Frick Collection, New York",
  "Mauritshuis, Den Haag": "Mauritshuis, L’Aia",
  "Nationalmuseum, Stockholm": "Nationalmuseum, Stoccolma",
  "Royal Collection, London": "Royal Collection, Londra",
  "Dulwich Picture Gallery, London": "Dulwich Picture Gallery, Londra",
  "Gemäldegalerie Alte Meister, Kassel": "Gemäldegalerie Alte Meister, Kassel",
  "Musée du Louvre, Paris": "Museo del Louvre, Parigi",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Hammer Museum, Los Angeles": "Hammer Museum, Los Angeles",
  "Herzog Anton Ulrich-Museum, Braunschweig": "Herzog Anton Ulrich-Museum, Braunschweig",
  "National Gallery of Victoria, Melbourne": "National Gallery of Victoria, Melbourne",
  "Kenwood House, London": "Kenwood House, Londra",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Colonia",
  "Eremitage, Sankt Petersburg": "Ermitage, San Pietroburgo"
});
  P.works = Object.assign(P.works || {}, {
  "rbselfflat": {
    "title": "Autoritratto con berretto piatto",
    "museum": "Royal Collection, Londra"
  },
  "rbadultery": {
    "title": "Cristo e l’adultera",
    "museum": "National Gallery, Londra"
  },
  "rbgirlwin": {
    "title": "Ragazza alla finestra",
    "museum": "Dulwich Picture Gallery, Londra"
  },
  "rbjosephd": {
    "title": "Il sogno di Giuseppe nella stalla",
    "museum": "Gemäldegalerie, Berlino"
  },
  "rbthreetrees": {
    "title": "I tre alberi",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbwinter": {
    "title": "Paesaggio invernale",
    "museum": "Gemäldegalerie Alte Meister, Kassel"
  },
  "rbjansix": {
    "title": "Jan Six",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbephraim": {
    "title": "Ephraim Bueno",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself48": {
    "title": "Autoritratto che disegna alla finestra",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbemmaus48": {
    "title": "La cena in Emmaus",
    "museum": "Museo del Louvre, Parigi"
  },
  "rbjews": {
    "title": "Ebrei nella sinagoga",
    "museum": "National Gallery of Art, Washington"
  },
  "rbhundred": {
    "title": "La stampa dei cento fiorini",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbfaust": {
    "title": "Un erudito nel suo studio (Faust)",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbshell": {
    "title": "La conchiglia",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbsixbridge": {
    "title": "Il ponte di Six",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbomval": {
    "title": "L’Omval",
    "museum": "National Gallery of Art, Washington"
  },
  "rbmill": {
    "title": "Il mulino",
    "museum": "National Gallery of Art, Washington"
  },
  "rbgoldfield": {
    "title": "Il campo del pesatore d’oro",
    "museum": "National Gallery of Art, Washington"
  },
  "rbcott3": {
    "title": "Paesaggio con tre case a timpano",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbtower": {
    "title": "Paesaggio con una torre quadrata",
    "museum": "National Gallery of Art, Washington"
  },
  "rbmilkman": {
    "title": "Paesaggio con un lattaio",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbclump": {
    "title": "Gruppo di alberi con veduta",
    "museum": "Cleveland Museum of Art"
  },
  "rbkitchen": {
    "title": "La serva di cucina",
    "museum": "Nationalmuseum, Stoccolma"
  },
  "rbhenddoor": {
    "title": "Hendrickje Stoffels a una porta",
    "museum": "Gemäldegalerie, Berlino"
  },
  "rbhendmet": {
    "title": "Hendrickje Stoffels",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbself52": {
    "title": "Grande autoritratto",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "rbaristotle": {
    "title": "Aristotele con un busto di Omero",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbfloris": {
    "title": "Il portabandiera (Floris Soop)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbadorelamp": {
    "title": "L’adorazione dei pastori con la lampada",
    "museum": "National Gallery of Art, Washington"
  },
  "rbemmaus54": {
    "title": "Cristo in Emmaus",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbpolish": {
    "title": "Il cavaliere polacco",
    "museum": "Frick Collection, New York"
  },
  "rbtitusread": {
    "title": "Titus che legge",
    "museum": "Kunsthistorisches Museum, Vienna"
  },
  "rbhaaringh": {
    "title": "Pieter Haaringh",
    "museum": "National Gallery of Art, Washington"
  },
  "rblutma": {
    "title": "L’orafo Jan Lutma",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself58": {
    "title": "Autoritratto",
    "museum": "Frick Collection, New York"
  },
  "rbself59": {
    "title": "Autoritratto",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself60": {
    "title": "Autoritratto",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbselfeasel": {
    "title": "Autoritratto davanti al cavalletto",
    "museum": "Museo del Louvre, Parigi"
  },
  "rbdenial": {
    "title": "Il rinnegamento di san Pietro",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbtitusmonk": {
    "title": "Titus in abito da monaco",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbselfpaul": {
    "title": "Autoritratto come l’apostolo Paolo",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbjacobtrip": {
    "title": "Jacob Trip",
    "museum": "National Gallery, Londra"
  },
  "rbdegeer": {
    "title": "Margaretha de Geer",
    "museum": "National Gallery, Londra"
  },
  "rbsyndics": {
    "title": "I sindaci della gilda dei drappieri",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbcivilis": {
    "title": "La congiura di Claudius Civilis",
    "museum": "Nationalmuseum, Stoccolma"
  },
  "rbhomer": {
    "title": "Omero",
    "museum": "Mauritshuis, L’Aia"
  },
  "rbjuno": {
    "title": "Giunone",
    "museum": "Hammer Museum, Los Angeles"
  },
  "rbmanmag": {
    "title": "Uomo con una lente",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbpink": {
    "title": "Donna con un garofano",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbrihel": {
    "title": "Frederick Rihel a cavallo",
    "museum": "National Gallery, Londra"
  },
  "rbjewishbr": {
    "title": "La sposa ebrea",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbfamily": {
    "title": "Ritratto di famiglia",
    "museum": "Herzog Anton Ulrich-Museum, Braunschweig"
  },
  "rbwhitehair": {
    "title": "Ritratto di un uomo dai capelli bianchi",
    "museum": "National Gallery of Victoria, Melbourne"
  },
  "rboldman67": {
    "title": "Ritratto di un anziano",
    "museum": "Mauritshuis, L’Aia"
  },
  "rbselfkenwood": {
    "title": "Autoritratto con due cerchi",
    "museum": "Kenwood House, Londra"
  },
  "rbzeuxis": {
    "title": "Autoritratto come Zeusi",
    "museum": "Wallraf-Richartz-Museum, Colonia"
  },
  "rbprodigal2": {
    "title": "Il ritorno del figliol prodigo",
    "museum": "Ermitage, San Pietroburgo"
  },
  "rbsimeon69": {
    "title": "Simeone nel Tempio",
    "museum": "Nationalmuseum, Stoccolma"
  },
  "rbself63": {
    "title": "Autoritratto a 63 anni",
    "museum": "National Gallery, Londra"
  },
  "rbself69": {
    "title": "Autoritratto",
    "museum": "Mauritshuis, L’Aia"
  }
});
  P.paths = P.paths || {};
  P.paths.rembrandt = {
  "title": "Il percorso di vita di Rembrandt",
  "part": "Parti 1–2 · 1606–1669",
  "subtitle": "Dal mulino di Leida alla Westerkerk",
  "intro": "Accompagna Rembrandt Harmenszoon van Rijn per tutta la sua vita: dalla nascita a Leida nel 1606, attraverso gli anni di apprendistato, il successo ad Amsterdam, Saskia e la Ronda di notte, fino a Titus, Hendrickje, il fallimento, la Rozengracht, i sindaci, gli ultimi autoritratti e la sua morte nel 1669.",
  "ending": [
    "Rembrandt muore ad Amsterdam il 4 ottobre 1669, a sessantatré anni. È sepolto l’8 ottobre nella Westerkerk.",
    "I suoi autoritratti, le sue acqueforti e i suoi grandi quadri ne fanno uno dei pittori più famosi al mondo."
  ],
  "epilogue": "Rembrandt muore ad Amsterdam il 4 ottobre 1669 ed è sepolto nella Westerkerk.",
  "life": "1606–1669"
};
  P.stations = Object.assign(P.stations || {}, {
  "rbtitus": {
    "place": "Un anno di silenzio",
    "when": "1642–1645",
    "mapLabel": "Titus",
    "intro": [
      "Nel giugno 1642 muore Saskia; è sepolta nell’Oude Kerk di Amsterdam. Rembrandt resta solo con il piccolo Titus, battezzato nel settembre 1641.",
      "Negli anni successivi Rembrandt dipinge meno commissioni. Si dedica a scene bibliche tranquille e incide paesaggi come I tre alberi."
    ]
  },
  "rbgeertje": {
    "place": "Geertje Dircx",
    "when": "1643–1649",
    "mapLabel": "Geertje",
    "intro": [
      "Verso il 1643 la vedova Geertje Dircx arriva nella casa della Breestraat come bambinaia di Titus. Vive per alcuni anni con Rembrandt.",
      "Rembrandt ritrae amici come Jan Six e il medico Ephraim Bueno. Nel 1649 Rembrandt e Geertje si separano dopo una lite che finisce in tribunale."
    ]
  },
  "rbhundred": {
    "place": "La stampa dei cento fiorini",
    "when": "1648–1652",
    "mapLabel": "Incisioni",
    "intro": [
      "Verso il 1648 Rembrandt termina la sua acquaforte più famosa: Cristo predica e guarisce i malati. Si chiama stampa dei cento fiorini perché, si racconta, ben presto si pagarono cento fiorini per una stampa.",
      "Rembrandt colleziona arte, conchiglie e oggetti rari. Incide una conchiglia marina con tale precisione che si riconosce ogni disegno del suo guscio."
    ]
  },
  "rbland": {
    "place": "Passeggiate lungo l’Amstel",
    "when": "1645–1652",
    "mapLabel": "Amstel",
    "intro": [
      "In questi anni Rembrandt esce spesso dalla città, lungo l’Amstel e sopra le dighe. Lungo il cammino disegna fattorie, ponti e campi ampi.",
      "Da qui nascono le sue più belle acqueforti di paesaggio. Con poche linee mostra la terra piatta, il cielo alto e molta luce."
    ]
  },
  "rbhend": {
    "place": "Hendrickje Stoffels",
    "when": "1649–1656",
    "mapLabel": "Hendrickje",
    "intro": [
      "Hendrickje Stoffels, di Bredevoort, arriva in casa verso il 1647 come governante e diventa la compagna di Rembrandt. Non si sposano mai.",
      "Nel 1654 la Chiesa ammonisce Hendrickje per vivere con Rembrandt senza essere sposati. Nell’ottobre 1654 viene battezzata la loro figlia Cornelia."
    ]
  },
  "rbinsolvent": {
    "place": "Debiti e fallimento",
    "when": "1653–1658",
    "mapLabel": "Fallimento",
    "intro": [
      "La casa della Breestraat non è ancora pagata e i debiti crescono. Nel luglio 1656 Rembrandt chiede di cedere i suoi beni ai creditori.",
      "Un inventario elenca i suoi quadri, i suoi libri e le sue collezioni. Nel 1657 e nel 1658 tutto viene messo all’asta, anche la casa."
    ]
  },
  "rbrozen": {
    "place": "La Rozengracht",
    "when": "1658–1661",
    "mapLabel": "Rozengracht",
    "intro": [
      "La famiglia si trasferisce in una casa modesta sulla Rozengracht, nel quartiere del Jordaan. Alla fine del 1660 Hendrickje e Titus fondano un commercio d’arte per il quale lavora Rembrandt.",
      "Così può continuare a dipingere senza che i creditori reclamino i suoi quadri. Ora si ritrae spesso serio, calmo e con bastone da pittore e tavolozza."
    ]
  },
  "rbsyndics": {
    "place": "I sindaci e Claudius Civilis",
    "when": "1661–1663",
    "mapLabel": "Sindaci",
    "intro": [
      "Nel 1662 Rembrandt dipinge i direttori della gilda dei drappieri, i sindaci. Per il nuovo municipio dipinge la Congiura dei Batavi sotto Claudius Civilis; il grande quadro gli viene presto restituito e Rembrandt lo ritaglia.",
      "Nel 1663 muore Hendrickje. È sepolta nella Westerkerk. Titus e Cornelia restano con il padre."
    ]
  },
  "rbbride": {
    "place": "La sposa ebrea",
    "when": "1663–1668",
    "mapLabel": "Opera tarda",
    "intro": [
      "Negli ultimi anni Rembrandt dipinge con pennello largo e colore denso. Nella Sposa ebrea un uomo posa con tenerezza la mano sul petto della moglie, e lei posa la sua sulla di lui.",
      "Nel febbraio 1668 Titus sposa Magdalena van Loo. Nel settembre dello stesso anno muore Titus, a soli 26 anni."
    ]
  },
  "rblate": {
    "place": "Gli ultimi quadri",
    "when": "1668–1669",
    "mapLabel": "Westerkerk",
    "intro": [
      "Nel marzo 1669 viene battezzata Titia, la figlia di Titus. Rembrandt continua a lavorare ai suoi ultimi quadri, tra cui Il ritorno del figliol prodigo.",
      "Rembrandt muore ad Amsterdam il 4 ottobre 1669. È sepolto l’8 ottobre nella Westerkerk."
    ]
  },
  "rbnight": {
    "place": "La Ronda di notte",
    "when": "1640–1642",
    "mapLabel": "Ronda",
    "intro": [
      "Verso il 1640 Rembrandt dipinge coppie di ritratti di ricchi abitanti di Amsterdam, e nel 1641 il predicatore Cornelis Anslo in conversazione con la moglie. Davide e Gionata è del 1642.",
      "Nel 1642 termina il grande ritratto di gruppo della compagnia di milizia di Frans Banninck Cocq per la sala dei Kloveniersdoelen. Il quadro, oggi noto come la Ronda di notte, è pieno di movimento, luce e ombra."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rbselfflat": {
    "text": [
      "Rembrandt indossa un berretto piatto e un abito ricamato. Si ritrae nell’anno della Ronda di notte. Il quadro è nella Royal Collection di Londra."
    ],
    "fact": "1642. Royal Collection, Londra."
  },
  "rbadultery": {
    "text": [
      "In un tempio enorme e dorato, un piccolo gruppo sta nella luce davanti a Cristo. Rembrandt dipinge la scena con grande finezza. Il quadro è nella National Gallery di Londra."
    ],
    "fact": "1644. National Gallery, Londra."
  },
  "rbgirlwin": {
    "text": [
      "Una ragazza si appoggia al davanzale e ci guarda. Rembrandt gioca con l’inganno: sembra che sia davvero nella cornice. Il quadro è nella Dulwich Picture Gallery di Londra."
    ],
    "fact": "1645. Dulwich Picture Gallery, Londra."
  },
  "rbjosephd": {
    "text": [
      "Un angelo appare a Giuseppe in sogno; Maria e il Bambino dormono accanto a lui nella stalla. Il piccolo quadro brilla nel buio. È nella Gemäldegalerie di Berlino."
    ],
    "fact": "1645. Gemäldegalerie, Berlino."
  },
  "rbthreetrees": {
    "text": [
      "Tre alberi si ergono su un argine sotto un cielo immenso con strisce di pioggia. È la più grande acquaforte di paesaggio di Rembrandt. Questa stampa è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1643. Rijksmuseum, Amsterdam."
  },
  "rbwinter": {
    "text": [
      "La gente cammina sul ghiaccio e una fattoria riposa sotto il chiaro sole d’inverno. Il piccolo quadro è una delle poche scene invernali di Rembrandt. È nella Gemäldegalerie Alte Meister di Kassel."
    ],
    "fact": "1646. Gemäldegalerie Alte Meister, Kassel."
  },
  "rbjansix": {
    "text": [
      "Il suo amico Jan Six legge in piedi accanto alla finestra. Six era mercante, poeta e più tardi burgomastro di Amsterdam. Questa stampa è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1647. Rijksmuseum, Amsterdam."
  },
  "rbephraim": {
    "text": [
      "Il medico Ephraim Bueno sta su una scala, con la mano sul corrimano. Apparteneva alla comunità ebraica portoghese di Amsterdam. Questa stampa è nella National Gallery of Art di Washington."
    ],
    "fact": "1647. National Gallery of Art, Washington."
  },
  "rbself48": {
    "text": [
      "Rembrandt è seduto alla finestra e disegna, serio e senza ornamenti. Ci guarda come se fossimo il suo specchio. Questa stampa è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1648. Rijksmuseum, Amsterdam."
  },
  "rbemmaus48": {
    "text": [
      "Cristo spezza il pane e i due discepoli lo riconoscono. Dietro di lui si apre una nicchia alta. Il quadro è nel Museo del Louvre di Parigi."
    ],
    "fact": "1648. Museo del Louvre, Parigi."
  },
  "rbjews": {
    "text": [
      "Piccoli gruppi di uomini conversano sui gradini. Rembrandt conosceva bene il quartiere ebraico intorno alla sua Breestraat. Questa stampa è nella National Gallery of Art di Washington."
    ],
    "fact": "1648. National Gallery of Art, Washington."
  },
  "rbhundred": {
    "text": [
      "Al centro sta Cristo nella luce; malati e curiosi si affollano intorno a lui. Rembrandt lavora molti anni a questa lastra. Questa stampa è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "circa 1648. Rijksmuseum, Amsterdam."
  },
  "rbfaust": {
    "text": [
      "Un erudito contempla un disco luminoso con lettere alla finestra. Più tardi la lastra riceve il nome di Faust. Questa stampa è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "circa 1652. Rijksmuseum, Amsterdam."
  },
  "rbshell": {
    "text": [
      "Un cono marino sta solo sul foglio, con un disegno fine. Rembrandt aveva conchiglie così nella sua collezione. Questa stampa è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1650. Rijksmuseum, Amsterdam."
  },
  "rbsixbridge": {
    "text": [
      "Un ponticello di legno attraversa un canale e due uomini guardano oltre la ringhiera. La lastra è collegata a Jan Six. Questa stampa è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1645. Rijksmuseum, Amsterdam."
  },
  "rbomval": {
    "text": [
      "Sulla riva dell’Amstel c’è un grande albero e passano barche. L’Omval si trova lungo il fiume, a sud di Amsterdam. Questa stampa è nella National Gallery of Art di Washington."
    ],
    "fact": "1645. National Gallery of Art, Washington."
  },
  "rbmill": {
    "text": [
      "Un mulino a vento si erge scuro su un terrapieno davanti a un cielo di tramonto luminoso. È uno dei paesaggi dipinti più noti di Rembrandt. Il quadro è nella National Gallery of Art di Washington."
    ],
    "fact": "circa 1645–1648. National Gallery of Art, Washington."
  },
  "rbgoldfield": {
    "text": [
      "Una terra vasta e piatta, con campi e prati da sbianca, arriva fino all’orizzonte. La lastra, molto larga, mostra la vista verso Haarlem. Questa stampa è nella National Gallery of Art di Washington."
    ],
    "fact": "1651. National Gallery of Art, Washington."
  },
  "rbcott3": {
    "text": [
      "Tre fattorie con alti timpani stanno lungo la strada sotto grandi alberi. Rembrandt incide ogni tetto di paglia con precisione. Questa stampa è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1650. Metropolitan Museum of Art, New York."
  },
  "rbtower": {
    "text": [
      "Dietro alberi e case si innalza una torre di chiesa quadrata. La piccola acquaforte appare chiara e ariosa. Questa stampa è nella National Gallery of Art di Washington."
    ],
    "fact": "1650. National Gallery of Art, Washington."
  },
  "rbmilkman": {
    "text": [
      "Un lattaio cammina con i suoi bidoni su un sentiero di argine accanto a una fattoria. L’acquaforte è lunga e stretta come una veduta. Questa stampa è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "circa 1650. Metropolitan Museum of Art, New York."
  },
  "rbclump": {
    "text": [
      "Un folto gruppo di alberi sta accanto a una fattoria e a destra lo sguardo si apre in lontananza. Rembrandt lavora qui a punta secca. Questa stampa è nel Cleveland Museum of Art."
    ],
    "fact": "1652. Cleveland Museum of Art."
  },
  "rbkitchen": {
    "text": [
      "Una ragazza appoggia il mento sulla mano e guarda dalla finestra, assorta. La giacca rossa e la camicia bianca brillano nel buio. Il quadro è nel Nationalmuseum di Stoccolma."
    ],
    "fact": "1651. Nationalmuseum, Stoccolma."
  },
  "rbhenddoor": {
    "text": [
      "Hendrickje si appoggia a una porta e si tiene con una mano allo stipite. Il suo scialle rosso brilla caldo. Il quadro è nella Gemäldegalerie di Berlino."
    ],
    "fact": "circa 1656. Gemäldegalerie, Berlino."
  },
  "rbhendmet": {
    "text": [
      "Hendrickje porta perle e un manto di pelliccia e guarda calma di lato. Spesso è indicata come modella di questo ritratto. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "circa 1655. Metropolitan Museum of Art, New York."
  },
  "rbself52": {
    "text": [
      "Rembrandt sta in piedi, saldo, con le mani alla cintura e un semplice camice da lavoro. Mai prima si era mostrato così serio. Il quadro è nel Kunsthistorisches Museum di Vienna."
    ],
    "fact": "1652. Kunsthistorisches Museum, Vienna."
  },
  "rbaristotle": {
    "text": [
      "Il filosofo Aristotele posa la mano su un busto del poeta Omero. Un collezionista siciliano commissionò il quadro. È nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1653. Metropolitan Museum of Art, New York."
  },
  "rbfloris": {
    "text": [
      "Il ricco scapolo Floris Soop sta fiero nella luce con bandiera e cappello piumato. Era portabandiera di una compagnia di milizia. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1654. Metropolitan Museum of Art, New York."
  },
  "rbadorelamp": {
    "text": [
      "Nella stalla buia un pastore tiene una lanterna sopra Maria e il Bambino. Rembrandt mostra la luce come un piccolo bagliore nella notte. Questa stampa è nella National Gallery of Art di Washington."
    ],
    "fact": "circa 1654. National Gallery of Art, Washington."
  },
  "rbemmaus54": {
    "text": [
      "Cristo è seduto dietro un tavolo, circondato di luce, e i discepoli si meravigliano. Rembrandt torna più e più volte a Emmaus. Questa stampa è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1654. Rijksmuseum, Amsterdam."
  },
  "rbpolish": {
    "text": [
      "Un giovane cavaliere con berretto, arco e sciabola cavalca in un paesaggio scuro. Ancora oggi non si sa chi sia. Il quadro è nella Frick Collection di New York."
    ],
    "fact": "circa 1655. Frick Collection, New York."
  },
  "rbtitusread": {
    "text": [
      "Titus, di circa quindici anni, legge un libro; la luce cade sul viso e sulle mani. Rembrandt ritrae spesso il figlio. Il quadro è nel Kunsthistorisches Museum di Vienna."
    ],
    "fact": "circa 1656–1657. Kunsthistorisches Museum, Vienna."
  },
  "rbhaaringh": {
    "text": [
      "Il banditore Pieter Haaringh è seduto davanti a una finestra con tenda. Partecipò alle aste che presto attendevano Rembrandt. Questa stampa è nella National Gallery of Art di Washington."
    ],
    "fact": "1655. National Gallery of Art, Washington."
  },
  "rblutma": {
    "text": [
      "Il vecchio orafo Jan Lutma è seduto in una poltrona, con attrezzi e una piccola ciotola accanto. Rembrandt lo incide nel 1656. Questa stampa è nella National Gallery of Art di Washington."
    ],
    "fact": "1656. National Gallery of Art, Washington."
  },
  "rbself58": {
    "text": [
      "L’anno in cui viene venduta la sua casa, Rembrandt si ritrae come un re sul trono, in abito d’oro e con un bastone. Il quadro è nella Frick Collection di New York."
    ],
    "fact": "1658. Frick Collection, New York."
  },
  "rbself59": {
    "text": [
      "Rembrandt ci guarda calmo e stanco, con le mani giunte. Dipinge con sincerità le rughe del viso. Il quadro è nella National Gallery of Art di Washington."
    ],
    "fact": "1659. National Gallery of Art, Washington."
  },
  "rbself60": {
    "text": [
      "Con berretto e manto marrone, Rembrandt guarda dal fondo scuro. La luce cade solo sulla fronte e sulla guancia. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1660. Metropolitan Museum of Art, New York."
  },
  "rbselfeasel": {
    "text": [
      "Rembrandt sta davanti al cavalletto con berretto bianco, tavolozza e pennelli. Si mostra del tutto come pittore al lavoro. Il quadro è nel Museo del Louvre di Parigi."
    ],
    "fact": "1660. Museo del Louvre, Parigi."
  },
  "rbdenial": {
    "text": [
      "Una serva tiene una candela davanti a Pietro e gli chiede se è tra quelli di Gesù. Pietro alza la mano per negarlo. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1660. Rijksmuseum, Amsterdam."
  },
  "rbtitusmonk": {
    "text": [
      "Titus indossa un saio marrone con cappuccio e guarda in silenzio davanti a sé. Rembrandt lo dipinge come monaco. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1660. Rijksmuseum, Amsterdam."
  },
  "rbselfpaul": {
    "text": [
      "Rembrandt si ritrae come l’apostolo Paolo, con turbante e l’impugnatura di una spada nel manto. Solleva la fronte con aria interrogativa. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1661. Rijksmuseum, Amsterdam."
  },
  "rbjacobtrip": {
    "text": [
      "Il vecchio mercante Jacob Trip, di Dordrecht, è seduto in una poltrona con un bastone. Il viso è pieno di rughe. Il quadro è nella National Gallery di Londra."
    ],
    "fact": "circa 1661. National Gallery, Londra."
  },
  "rbdegeer": {
    "text": [
      "Margaretha de Geer, moglie di Jacob Trip, porta una grande gorgiera bianca. Il suo ritratto è la coppia di quello di lui. È nella National Gallery di Londra."
    ],
    "fact": "circa 1661. National Gallery, Londra."
  },
  "rbsyndics": {
    "text": [
      "Cinque direttori della gilda dei drappieri sono seduti intorno a un tavolo con tappeto rosso; dietro sta un servo. Alzano lo sguardo come se fossimo appena entrati. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1662. Rijksmuseum, Amsterdam."
  },
  "rbcivilis": {
    "text": [
      "Di notte i Batavi giurano fedeltà al loro capo Claudius Civilis; le spade si incrociano nella luce. Si conserva solo la parte centrale che Rembrandt ritagliò. È nel Nationalmuseum di Stoccolma."
    ],
    "fact": "1661–1662. Nationalmuseum, Stoccolma."
  },
  "rbhomer": {
    "text": [
      "Il poeta cieco Omero detta; solo la testa e le mani sono illuminate. Il quadro fu dipinto per lo stesso collezionista di Sicilia di Aristotele. È nel Mauritshuis dell’Aia."
    ],
    "fact": "1663. Mauritshuis, L’Aia."
  },
  "rbjuno": {
    "text": [
      "La dea Giunone porta una corona e un sontuoso manto con gioielli. Accanto a lei si intuisce debolmente il suo pavone. Il quadro è nell’Hammer Museum di Los Angeles."
    ],
    "fact": "circa 1662–1665. Hammer Museum, Los Angeles."
  },
  "rbmanmag": {
    "text": [
      "Un uomo tiene una lente e guarda pensoso davanti a sé. Il suo ritratto è la coppia della Donna con un garofano. È nel Metropolitan Museum of Art di New York."
    ],
    "fact": "primi anni 1660. Metropolitan Museum of Art, New York."
  },
  "rbpink": {
    "text": [
      "Una giovane con perle tiene un garofano rosa. Il garofano simboleggia spesso l’amore e il matrimonio. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "primi anni 1660. Metropolitan Museum of Art, New York."
  },
  "rbrihel": {
    "text": [
      "Il mercante Frederick Rihel, in abito sontuoso, monta un cavallo bianco. È l’unico grande ritratto equestre di Rembrandt. Il quadro è nella National Gallery di Londra."
    ],
    "fact": "circa 1663. National Gallery, Londra."
  },
  "rbjewishbr": {
    "text": [
      "Una coppia vestita di rosso e d’oro luminosi si abbraccia con tenerezza. Il colore è così denso che le maniche sembrano quasi scolpite. Il quadro è nel Rijksmuseum di Amsterdam; la galleria lo contiene anche."
    ],
    "fact": "circa 1665–1669. Rijksmuseum, Amsterdam."
  },
  "rbfamily": {
    "text": [
      "Una madre ha un bambino in grembo; il padre e due bambini le stanno accanto, tutti in un rosso caldo. Non si sa chi sia la famiglia. Il quadro è nel Herzog Anton Ulrich-Museum di Braunschweig."
    ],
    "fact": "circa 1665. Herzog Anton Ulrich-Museum, Braunschweig."
  },
  "rbwhitehair": {
    "text": [
      "Un anziano dai capelli bianchi e dal cappello tondo guarda serio dal quadro. Rembrandt dipinge con pennellate larghe. Il quadro è nella National Gallery of Victoria di Melbourne."
    ],
    "fact": "1667. National Gallery of Victoria, Melbourne."
  },
  "rboldman67": {
    "text": [
      "Un anziano con cappello largo e colletto bianco è seduto tranquillo. Rembrandt lo dipinge due anni prima della propria morte. Il quadro è nel Mauritshuis dell’Aia."
    ],
    "fact": "1667. Mauritshuis, L’Aia."
  },
  "rbselfkenwood": {
    "text": [
      "Rembrandt sta con tavolozza e pennelli davanti a una parete con due grandi archi. Non si sa che cosa significhino i cerchi. Il quadro è a Kenwood House, Londra."
    ],
    "fact": "circa 1665. Kenwood House, Londra."
  },
  "rbzeuxis": {
    "text": [
      "Rembrandt, già anziano, ride guardando oltre la spalla. Probabilmente si rappresenta come l’antico pittore Zeusi. Il quadro è nel Wallraf-Richartz-Museum di Colonia."
    ],
    "fact": "circa 1662–1668. Wallraf-Richartz-Museum, Colonia."
  },
  "rbprodigal2": {
    "text": [
      "Il figlio è in ginocchio davanti al padre anziano, che gli posa con affetto le mani sulle spalle. È uno degli ultimi grandi quadri di Rembrandt. È nell’Ermitage di San Pietroburgo."
    ],
    "fact": "circa 1668. Ermitage, San Pietroburgo."
  },
  "rbsimeon69": {
    "text": [
      "Il vecchio Simeone tiene in braccio il Bambino Gesù e rende grazie a Dio. Il quadro rimase incompiuto nella bottega di Rembrandt. È nel Nationalmuseum di Stoccolma."
    ],
    "fact": "1669. Nationalmuseum, Stoccolma."
  },
  "rbself63": {
    "text": [
      "Rembrandt è seduto con le mani giunte e ci guarda, anziano e calmo. Si ritrae nell’ultimo anno della sua vita. Il quadro è nella National Gallery di Londra."
    ],
    "fact": "1669. National Gallery, Londra."
  },
  "rbself69": {
    "text": [
      "Nel suo ultimo autoritratto Rembrandt porta un berretto chiaro e il viso brilla caldo. È un silenzioso addio. Il quadro è nel Mauritshuis dell’Aia."
    ],
    "fact": "1669. Mauritshuis, L’Aia."
  },
  "rbnightwatch": {
    "text": [
      "Il capitano Frans Banninck Cocq dà l’ordine di partire e i suoi miliziani si mettono in movimento.",
      "Una bambina luminosa e molta ombra danno vita al ritratto di gruppo.",
      "Questa è una versione semplificata da colorare; la Ronda di notte più dettagliata si trova in galleria.",
      "L’originale è esposto al Rijksmuseum di Amsterdam."
    ],
    "fact": "1642. Rijksmuseum, Amsterdam."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
