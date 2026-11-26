// v9.6 IT content for Rembrandt’s life journey, Part 1 (1606–1642). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Amsterdam",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Royal Collection, London": "Royal Collection, Londra",
  "Eremitage, Sankt Petersburg": "Ermitage, San Pietroburgo",
  "The Leiden Collection, New York": "The Leiden Collection, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Museum De Lakenhal, Leiden": "Museum De Lakenhal, Leida",
  "Gemäldegalerie, Berlin": "Gemäldegalerie, Berlino",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Musée Cognacq-Jay, Paris": "Musée Cognacq-Jay, Parigi",
  "Museum of Fine Arts, Boston": "Museum of Fine Arts, Boston",
  "Israel Museum, Jerusalem": "Museo d’Israele, Gerusalemme",
  "Mauritshuis, Den Haag": "Mauritshuis, L’Aia",
  "Alte Pinakothek, München": "Alte Pinakothek, Monaco di Baviera",
  "Frick Collection, New York": "Frick Collection, New York",
  "Los Angeles County Museum of Art": "Los Angeles County Museum of Art",
  "Taft Museum of Art, Cincinnati": "Taft Museum of Art, Cincinnati",
  "Gemäldegalerie Alte Meister, Dresden": "Gemäldegalerie Alte Meister, Dresda",
  "National Gallery, London": "National Gallery, Londra",
  "Albertina, Wien": "Albertina, Vienna",
  "Bibliothèque nationale de France, Paris": "Bibliothèque nationale de France, Parigi"
});
  P.works = Object.assign(P.works || {}, {
  "rbspectacles": {
    "title": "Il venditore di occhiali",
    "museum": "Museum De Lakenhal, Leida"
  },
  "rbhearing": {
    "title": "Tre musicisti (allegoria dell’udito)",
    "museum": "The Leiden Collection, New York"
  },
  "rboldwoman": {
    "title": "Anziana che legge",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbgoldchain": {
    "title": "Anziano con catena d’oro",
    "museum": "Art Institute of Chicago"
  },
  "rbhistory": {
    "title": "Dipinto di storia",
    "museum": "Museum De Lakenhal, Leida"
  },
  "rbbalaam": {
    "title": "L’asina di Balaam",
    "museum": "Musée Cognacq-Jay, Parigi"
  },
  "rbmusic": {
    "title": "Compagnia musicale",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbstudio": {
    "title": "Il pittore nel suo studio",
    "museum": "Museum of Fine Arts, Boston"
  },
  "rbjeremiah": {
    "title": "Geremia piange la distruzione di Gerusalemme",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbpeter": {
    "title": "San Pietro in carcere",
    "museum": "Museo d’Israele, Gerusalemme"
  },
  "rbsimeon": {
    "title": "Simeone nel Tempio",
    "museum": "Mauritshuis, L’Aia"
  },
  "rbpresent": {
    "title": "La presentazione al Tempio con l’angelo",
    "museum": "National Gallery of Art, Washington"
  },
  "rbself28": {
    "title": "Autoritratto da giovane",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbself29": {
    "title": "Autoritratto",
    "museum": "Alte Pinakothek, Monaco di Baviera"
  },
  "rbselflaugh": {
    "title": "Autoritratto con berretto, ridente",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbselfopen": {
    "title": "Autoritratto con berretto, a bocca aperta",
    "museum": "National Gallery of Art, Washington"
  },
  "rbruts": {
    "title": "Nicolaes Ruts",
    "museum": "Frick Collection, New York"
  },
  "rborient": {
    "title": "Uomo in costume orientale",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rblooten": {
    "title": "Marten Looten",
    "museum": "Los Angeles County Museum of Art"
  },
  "rbwten": {
    "title": "Johannes Wtenbogaert",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbrising": {
    "title": "Uomo che si alza dalla sedia",
    "museum": "Taft Museum of Art, Cincinnati"
  },
  "rbfan": {
    "title": "Giovane donna con ventaglio",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbjoseph": {
    "title": "Giuseppe racconta i suoi sogni",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbbellona": {
    "title": "Bellona",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbself33": {
    "title": "Autoritratto con berretto di velluto",
    "museum": "Gemäldegalerie, Berlino"
  },
  "rbflora": {
    "title": "Flora",
    "museum": "Ermitage, San Pietroburgo"
  },
  "rbprodigal": {
    "title": "Rembrandt e Saskia nella parabola del figliol prodigo",
    "museum": "Gemäldegalerie Alte Meister, Dresda"
  },
  "rbselfsaskia": {
    "title": "Autoritratto con Saskia",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbminerva": {
    "title": "Minerva nel suo studio",
    "museum": "The Leiden Collection, New York"
  },
  "rbbelshazzar": {
    "title": "Il banchetto di Baldassarre",
    "museum": "National Gallery, Londra"
  },
  "rbstandard": {
    "title": "Il portabandiera",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbpancake": {
    "title": "La venditrice di frittelle",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbelephant": {
    "title": "Un elefante",
    "museum": "Albertina, Vienna"
  },
  "rbcottages": {
    "title": "Case sotto un cielo di tempesta",
    "museum": "Albertina, Vienna"
  },
  "rbself1639": {
    "title": "Autoritratto appoggiato a un davanzale di pietra",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbself1640": {
    "title": "Autoritratto a 34 anni",
    "museum": "National Gallery, Londra"
  },
  "rbmariatrip": {
    "title": "Maria Trip",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbgoldweigher": {
    "title": "Jan Uytenbogaert, il pesatore d’oro",
    "museum": "Bibliothèque nationale de France, Parigi"
  },
  "rbamsterdam": {
    "title": "Veduta di Amsterdam",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbwindmill": {
    "title": "Il mulino",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbtobias": {
    "title": "L’angelo lascia la famiglia di Tobia",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbstonebridge": {
    "title": "Il ponte di pietra",
    "museum": "Rijksmuseum, Amsterdam"
  },
  "rbdoomer": {
    "title": "Herman Doomer",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rbmartens": {
    "title": "Baertje Martens",
    "museum": "Ermitage, San Pietroburgo"
  },
  "rbanslo": {
    "title": "Il predicatore Cornelis Anslo e sua moglie",
    "museum": "Gemäldegalerie, Berlino"
  },
  "rbdavidjon": {
    "title": "David e Gionata",
    "museum": "Ermitage, San Pietroburgo"
  },
  "rbnightwatch": {
    "title": "La Ronda di notte",
    "museum": "Rijksmuseum, Amsterdam"
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
  "rbleiden": {
    "place": "Infanzia a Leida",
    "when": "1606–1624",
    "mapLabel": "Leida",
    "intro": [
      "Rembrandt Harmenszoon van Rijn nasce a Leida il 15 luglio 1606, nono figlio del mugnaio Harmen Gerritszoon van Rijn e di Neeltje Willemsdochter. La famiglia abita di fronte al mulino sul Reno, da cui prende il nome van Rijn.",
      "Dal 1613 al 1620 frequenta la scuola latina. Nel maggio 1620 si iscrive all’Università di Leida, ma non prosegue gli studi. Per circa tre anni impara presso il pittore di Leida Jacob van Swanenburgh."
    ]
  },
  "rblastman": {
    "place": "Sei mesi presso Pieter Lastman",
    "when": "1625–1626",
    "mapLabel": "Lastman",
    "intro": [
      "Verso il 1625 Rembrandt passa sei mesi ad Amsterdam presso Pieter Lastman, un noto pittore di storie bibliche e antiche. Poi torna a lavorare a Leida come maestro indipendente.",
      "I suoi primi quadri datati sono del 1625 e del 1626: piccoli dipinti di storia con colori forti e figure vivaci, proprio nello stile di Lastman."
    ]
  },
  "rblievens": {
    "place": "La bottega con Jan Lievens",
    "when": "1626–1631",
    "mapLabel": "Bottega",
    "intro": [
      "A Leida Rembrandt lavora a stretto contatto con l’amico Jan Lievens. Dal 1626 realizza anche acqueforti e nel 1628 accoglie i primi allievi, tra cui Gerrit Dou.",
      "Alla fine degli anni 1620 Constantijn Huygens, segretario dello statolder Federico Enrico, visita i due giovani pittori e ammira il loro lavoro. Nell’aprile 1630 muore il padre di Rembrandt."
    ]
  },
  "rbmirror": {
    "place": "Il proprio volto",
    "when": "1628–1630",
    "mapLabel": "Specchio",
    "intro": [
      "Già a Leida Rembrandt si ritrae e si incide ancora e ancora. Davanti allo specchio prova la luce e l’ombra: ride, si meraviglia o guarda serio.",
      "Questi piccoli ritratti sono esercizi e al tempo stesso una pubblicità del suo talento. Nel corso della vita dipingerà più di quaranta autoritratti."
    ]
  },
  "rbamsterdam": {
    "place": "Ad Amsterdam",
    "when": "1631–1633",
    "mapLabel": "Amsterdam",
    "intro": [
      "Nel 1631 Rembrandt conosce il mercante d’arte di Amsterdam Hendrick van Uylenburgh e presto vive in casa sua. Diventa rapidamente un ritrattista ricercato nella città commerciale in crescita.",
      "Nel 1632 dipinge il suo primo ritratto di gruppo, la Lezione di anatomia del dottor Nicolaes Tulp, per la gilda dei chirurghi. Seguono molti incarichi di mercanti, predicatori e delle loro mogli."
    ]
  },
  "rbsaskia": {
    "place": "Saskia",
    "when": "1633–1636",
    "mapLabel": "Frisia",
    "intro": [
      "Nel giugno 1633 Rembrandt si fidanza con Saskia van Uylenburgh, cugina del suo socio Hendrick. Il 22 giugno 1634 si sposano a Sint Annaparochie, in Frisia.",
      "Saskia è spesso la sua modella, come Flora tra i fiori o al suo fianco. Nel 1635 la coppia affitta una casa nella Nieuwe Doelenstraat di Amsterdam."
    ]
  },
  "rbstories": {
    "place": "Grandi storie, piccoli fogli",
    "when": "1635–1638",
    "mapLabel": "Storie",
    "intro": [
      "Dal 1632 Rembrandt dipinge per lo statolder Federico Enrico una serie di quadri sulla Passione di Cristo. Accanto nascono grandi scene drammatiche dalla Bibbia.",
      "Con la penna e la punta da incisione fissa la vita della città: una venditrice di frittelle, un elefante che percorre i Paesi Bassi nel 1637, case sotto un cielo di tempesta. Nel 1637 la famiglia si trasferisce al Binnen-Amstel."
    ]
  },
  "rbbreestraat": {
    "place": "La casa sulla Breestraat",
    "when": "1639–1641",
    "mapLabel": "Breestraat",
    "intro": [
      "Nel 1639 Rembrandt compra per 13.000 fiorini una grande casa sulla Breestraat, oggi il Museo Casa di Rembrandt. Può pagarla a rate. Nello stesso anno riceve l’incarico della Ronda di notte.",
      "Incide paesaggi dei dintorni di Amsterdam, un mulino e scene bibliche. Tre figli di Rembrandt e Saskia muoiono poco dopo la nascita; nel settembre 1641 viene battezzato il figlio Titus."
    ]
  },
  "rbnight": {
    "place": "La Ronda di notte",
    "when": "1640–1642",
    "mapLabel": "Ronda",
    "intro": [
      "Verso il 1640 Rembrandt dipinge coppie di ritratti di ricchi abitanti di Amsterdam, e nel 1641 il predicatore Cornelis Anslo in conversazione con la moglie. David e Gionata è del 1642.",
      "Nel 1642 termina il grande ritratto di gruppo della compagnia di milizia di Frans Banninck Cocq per la sala dei Kloveniersdoelen. Il quadro, oggi noto come la Ronda di notte, è pieno di movimento, luce e ombra."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "rbspectacles": {
    "text": [
      "Un venditore porge un paio di occhiali a una coppia di anziani. Il piccolo quadro appartiene a una serie sui cinque sensi, qui la vista, ed è una delle prime opere conosciute di Rembrandt. Si trova nel Museum De Lakenhal di Leida."
    ],
    "fact": "circa 1624–1625. Museum De Lakenhal, Leida."
  },
  "rbhearing": {
    "text": [
      "Tre figure cantano da uno spartito. Anche questo quadro appartiene alla prima serie dei cinque sensi, qui l’udito. Si trova nella Leiden Collection di New York."
    ],
    "fact": "circa 1624–1625. The Leiden Collection, New York."
  },
  "rboldwoman": {
    "text": [
      "Un’anziana legge un grande libro e la luce cade sulle pagine. Di solito è interpretata come la profetessa Anna; spesso si pensa che la modella sia la madre di Rembrandt. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1631. Rijksmuseum, Amsterdam."
  },
  "rbgoldchain": {
    "text": [
      "Un anziano con berretto piumato e catena d’oro emerge dal buio. A Leida Rembrandt dipinge queste teste di carattere su modelli del suo ambiente. Il quadro è all’Art Institute of Chicago."
    ],
    "fact": "circa 1631. Art Institute of Chicago."
  },
  "rbhistory": {
    "text": [
      "Soldati e dignitari in abiti colorati si accalcano davanti a un sovrano. Quale storia sia rappresentata è ancora oggi discusso. Il quadro è nel Museum De Lakenhal di Leida."
    ],
    "fact": "1626. Museum De Lakenhal, Leida."
  },
  "rbbalaam": {
    "text": [
      "Il profeta Balaam alza il bastone contro la sua asina, che si è fermata davanti a un angelo. Il quadro mostra chiaramente l’influsso di Pieter Lastman. Si trova nel Musée Cognacq-Jay di Parigi."
    ],
    "fact": "1626. Musée Cognacq-Jay, Parigi."
  },
  "rbmusic": {
    "text": [
      "Una piccola compagnia in costumi sontuosi canta e suona; davanti ci sono libri e strumenti. Rembrandt dipinge il quadro a vent’anni. Si trova nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1626. Rijksmuseum, Amsterdam."
  },
  "rbstudio": {
    "text": [
      "Un piccolo pittore sta in fondo a una stanza spoglia e guarda un grande cavalletto. Il quadro mostra una bottega come quella che Rembrandt aveva a Leida. Si trova nel Museum of Fine Arts di Boston."
    ],
    "fact": "circa 1628. Museum of Fine Arts, Boston."
  },
  "rbjeremiah": {
    "text": [
      "Il profeta Geremia appoggia la testa sulla mano; sullo sfondo brucia la città. Una luce calda cade su di lui e sui vasi accanto a lui. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1630. Rijksmuseum, Amsterdam."
  },
  "rbpeter": {
    "text": [
      "L’apostolo Pietro è in ginocchio in carcere e prega; accanto a lui ci sono le chiavi. La luce di una finestra illumina il suo volto e le sue mani. Il quadro è nel Museo d’Israele di Gerusalemme."
    ],
    "fact": "1631. Museo d’Israele, Gerusalemme."
  },
  "rbsimeon": {
    "text": [
      "In un tempio enorme e buio, un raggio di luce cade su Simeone, Maria e il Bambino. La folla intorno quasi scompare nell’ombra. Il quadro è nel Mauritshuis dell’Aia."
    ],
    "fact": "1631. Mauritshuis, L’Aia."
  },
  "rbpresent": {
    "text": [
      "Una piccola acquaforte: Simeone tiene il Bambino e un angelo aleggia sopra di loro. Con poche linee Rembrandt crea spazio e luce. Questa impressione è nella National Gallery of Art di Washington."
    ],
    "fact": "1630. National Gallery of Art, Washington."
  },
  "rbself28": {
    "text": [
      "Il volto del giovane Rembrandt resta quasi tutto in ombra; solo la guancia e l’orecchio sono illuminati. Con il manico del pennello graffia riccioli nella pittura fresca. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "circa 1628. Rijksmuseum, Amsterdam."
  },
  "rbself29": {
    "text": [
      "Con i capelli spettinati e il colletto bianco, il giovane di ventitré anni guarda dal quadro. Luce e ombra dividono il volto. Il quadro è all’Alte Pinakothek di Monaco di Baviera."
    ],
    "fact": "1629. Alte Pinakothek, Monaco di Baviera."
  },
  "rbselflaugh": {
    "text": [
      "Rembrandt si incide con una risata larga e un berretto. Esercita queste espressioni davanti allo specchio. Questa impressione è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1630. Rijksmuseum, Amsterdam."
  },
  "rbselfopen": {
    "text": [
      "A bocca aperta e con gli occhi sgranati, Rembrandt guarda come se si fosse spaventato. L’acquaforte è uno dei suoi studi di espressione. Questa impressione è nella National Gallery of Art di Washington."
    ],
    "fact": "1630. National Gallery of Art, Washington."
  },
  "rbruts": {
    "text": [
      "Il mercante Nicolaes Ruts indossa una pelliccia spessa e tiene una lettera. È uno dei primi ritratti che Rembrandt dipinge per clienti di Amsterdam. Il quadro è nella Frick Collection di New York."
    ],
    "fact": "1631. Frick Collection, New York."
  },
  "rborient": {
    "text": [
      "Un uomo imponente, con turbante e mantello pesante, sta davanti a una parete chiara. Questi quadri in costume sono popolari ad Amsterdam. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1632. Metropolitan Museum of Art, New York."
  },
  "rblooten": {
    "text": [
      "Il mercante Marten Looten tiene una lettera e guarda serio dal quadro. Rembrandt lo dipinge nel 1632. Il quadro è nel Los Angeles County Museum of Art."
    ],
    "fact": "1632. Los Angeles County Museum of Art."
  },
  "rbwten": {
    "text": [
      "L’anziano predicatore Johannes Wtenbogaert, un dirigente dei rimostranti, indossa un mantello nero con colletto bianco. Rembrandt lo dipinge nel 1633. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1633. Rijksmuseum, Amsterdam."
  },
  "rbrising": {
    "text": [
      "Un uomo vestito di nero si alza dalla sedia e ci guarda. Il movimento dà vita al ritratto. Il quadro è nel Taft Museum of Art di Cincinnati."
    ],
    "fact": "1633. Taft Museum of Art, Cincinnati."
  },
  "rbfan": {
    "text": [
      "Una giovane in abito nero, con un grande colletto di pizzo, tiene un ventaglio. Rembrandt la dipinge nel 1633 come pendant del ritratto del marito. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1633. Metropolitan Museum of Art, New York."
  },
  "rbjoseph": {
    "text": [
      "Il giovane Giuseppe racconta i suoi sogni alla famiglia. Rembrandt dipinge la scena solo in toni bruni e grigi, come modello per un’acquaforte. Il foglio è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "circa 1633. Rijksmuseum, Amsterdam."
  },
  "rbbellona": {
    "text": [
      "Bellona, dea romana della guerra, sta in armatura, elmo e scudo, davanti a uno sfondo scuro. Rembrandt la dipinge nell’anno del fidanzamento. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1633. Metropolitan Museum of Art, New York."
  },
  "rbself33": {
    "text": [
      "Rembrandt si mostra con berretto di velluto e colletto di pelliccia, sicuro di sé e di successo. È l’anno del matrimonio con Saskia. Il quadro è nella Gemäldegalerie di Berlino."
    ],
    "fact": "1634. Gemäldegalerie, Berlino."
  },
  "rbflora": {
    "text": [
      "Una giovane come Flora, dea della primavera, con corona e bastone di fiori. Probabilmente Saskia posò per il quadro. Si trova nell’Ermitage di San Pietroburgo."
    ],
    "fact": "1634. Ermitage, San Pietroburgo."
  },
  "rbprodigal": {
    "text": [
      "Rembrandt, allegro, ha Saskia seduta in ginocchio e alza una coppa. Si rappresenta come il figliol prodigo che sperpera il suo denaro. Il quadro è nella Gemäldegalerie Alte Meister di Dresda."
    ],
    "fact": "circa 1635. Gemäldegalerie Alte Meister, Dresda."
  },
  "rbselfsaskia": {
    "text": [
      "In quest’acquaforte Rembrandt è seduto al tavolo mentre disegna, con Saskia dietro di lui. È l’unico doppio ritratto inciso dei due. Questa impressione è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1636. Rijksmuseum, Amsterdam."
  },
  "rbminerva": {
    "text": [
      "La dea della sapienza è seduta in un manto d’oro davanti a un tavolo con libri e un globo. La luce cade sul suo volto e sulle pagine. Il quadro è nella Leiden Collection di New York."
    ],
    "fact": "1635. The Leiden Collection, New York."
  },
  "rbbelshazzar": {
    "text": [
      "Al banchetto compare sul muro una scrittura luminosa; il re Baldassarre si volta spaventato. Rembrandt dipinge l’attimo pieno di movimento. Il quadro è nella National Gallery di Londra."
    ],
    "fact": "circa 1636–1638. National Gallery, Londra."
  },
  "rbstandard": {
    "text": [
      "Un portabandiera sta orgoglioso con una grande bandiera sulla spalla, cappello piumato e fascia. Rembrandt dipinge il quadro nel 1636. Dal 2022 si trova nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1636. Rijksmuseum, Amsterdam."
  },
  "rbpancake": {
    "text": [
      "Un’anziana frigge frittelle in strada, i bambini si accalcano intorno a lei e un cane aspetta. Rembrandt fissa la scena in un’acquaforte. Questa impressione è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1635. Rijksmuseum, Amsterdam."
  },
  "rbelephant": {
    "text": [
      "Nel 1637 un’elefantessa percorre i Paesi Bassi e Rembrandt la disegna a gessetto nero. Con pochi tratti mostra la pelle rugosa. Il disegno è all’Albertina di Vienna."
    ],
    "fact": "1637. Albertina, Vienna."
  },
  "rbcottages": {
    "text": [
      "Nuvole scure passano sopra alcune case di campagna; un sentiero porta verso la luce. Rembrandt disegna con penna e pennello. Il foglio è all’Albertina di Vienna."
    ],
    "fact": "circa 1635. Albertina, Vienna."
  },
  "rbself1639": {
    "text": [
      "Rembrandt si appoggia a un davanzale di pietra, con berretto e un ricco mantello. L’acquaforte è dell’anno in cui compra la casa sulla Breestraat. Questa impressione è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1639. Rijksmuseum, Amsterdam."
  },
  "rbself1640": {
    "text": [
      "Un anno dopo si ritrae nella stessa posa, calmo e ben vestito. Ha 34 anni ed è all’apice del successo. Il quadro è nella National Gallery di Londra."
    ],
    "fact": "1640. National Gallery, Londra."
  },
  "rbmariatrip": {
    "text": [
      "La giovane Maria Trip, di una ricca famiglia di Amsterdam, indossa un abito nero con colletto di pizzo e perle. Rembrandt dipinge ogni piega del pizzo. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1639. Rijksmuseum, Amsterdam."
  },
  "rbgoldweigher": {
    "text": [
      "L’esattore Jan Uytenbogaert è seduto a un tavolo pieno di sacchi di denaro. Rembrandt lo incide nel 1639. Questa impressione è nella Bibliothèque nationale de France di Parigi."
    ],
    "fact": "1639. Bibliothèque nationale de France, Parigi."
  },
  "rbamsterdam": {
    "text": [
      "Oltre prati piatti si vedono in lontananza torri, mulini e navi di Amsterdam. La piccola acquaforte mostra la città da nord-ovest. Questa impressione è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "circa 1640. Rijksmuseum, Amsterdam."
  },
  "rbwindmill": {
    "text": [
      "Un grande mulino a vento sorge sulla cinta muraria, con una casetta accanto. Rembrandt lo incide nel 1641. Questa impressione è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1641. Rijksmuseum, Amsterdam."
  },
  "rbtobias": {
    "text": [
      "L’angelo Raffaele si allontana in volo mentre la famiglia di Tobia si inginocchia meravigliata davanti alla casa. Rembrandt incide la storia biblica nel 1641. Questa impressione è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1641. Rijksmuseum, Amsterdam."
  },
  "rbstonebridge": {
    "text": [
      "Un piccolo ponte presso il fiume; alberi scuri al sole davanti a un cielo di tempesta. È uno dei pochi paesaggi dipinti da Rembrandt. Il quadro è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "circa 1638. Rijksmuseum, Amsterdam."
  },
  "rbdoomer": {
    "text": [
      "Herman Doomer era fabbricante di cornici ed ebanista ad Amsterdam. Rembrandt lo dipinge con un cappello largo e il colletto bianco. Il quadro è nel Metropolitan Museum of Art di New York."
    ],
    "fact": "1640. Metropolitan Museum of Art, New York."
  },
  "rbmartens": {
    "text": [
      "Baertje Martens era la moglie di Herman Doomer. Il suo ritratto è il pendant di quello del marito. Il quadro è nell’Ermitage di San Pietroburgo."
    ],
    "fact": "circa 1640. Ermitage, San Pietroburgo."
  },
  "rbanslo": {
    "text": [
      "Il predicatore mennonita Cornelis Anslo parla alla moglie Aeltje sopra un libro aperto. Rembrandt mostra come convince con la parola. Il quadro è nella Gemäldegalerie di Berlino."
    ],
    "fact": "1641. Gemäldegalerie, Berlino."
  },
  "rbdavidjon": {
    "text": [
      "Gli amici David e Gionata si abbracciano per congedarsi davanti a un ampio paesaggio. Rembrandt dipinge la scena biblica nel 1642. Il quadro è nell’Ermitage di San Pietroburgo."
    ],
    "fact": "1642. Ermitage, San Pietroburgo."
  },
  "rbnightwatch": {
    "text": [
      "Il capitano Frans Banninck Cocq dà l’ordine di partire e i suoi miliziani si mettono in movimento. Una bambina luminosa e molta ombra danno vita al ritratto di gruppo. È appeso nel Rijksmuseum di Amsterdam."
    ],
    "fact": "1642. Rijksmuseum, Amsterdam."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
