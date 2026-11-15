// v9.5 IT content for J. M. W. Turner’s life journey, Part 2 (1819–1851), completing the path. Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Privatsammlung": "Collezione privata",
  "Tate, London": "Tate, Londra",
  "National Gallery, London": "National Gallery, Londra",
  "National Galleries of Scotland, Edinburgh": "National Galleries of Scotland, Edimburgo",
  "Frick Collection, New York": "Frick Collection, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Manchester Art Gallery": "Manchester Art Gallery",
  "Salisbury Museum": "Salisbury Museum",
  "Art Gallery of South Australia, Adelaide": "Art Gallery of South Australia, Adelaide",
  "Château des ducs de Bretagne, Nantes": "Château des ducs de Bretagne, Nantes",
  "Clark Art Institute, Williamstown": "Clark Art Institute, Williamstown",
  "Yale Center for British Art, New Haven": "Yale Center for British Art, New Haven",
  "Cincinnati Art Museum": "Cincinnati Art Museum",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "J. Paul Getty Museum, Los Angeles": "J. Paul Getty Museum, Los Angeles",
  "University of Michigan Museum of Art, Ann Arbor": "University of Michigan Museum of Art, Ann Arbor",
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Morgan Library & Museum, New York": "Morgan Library & Museum, New York",
  "National Gallery of Victoria, Melbourne": "National Gallery of Victoria, Melbourne",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Princeton University Art Museum": "Princeton University Art Museum",
  "Whitworth Art Gallery, Manchester": "Whitworth Art Gallery, Manchester"
});
  P.works = Object.assign(P.works || {}, {
  "tufusina": {
    "title": "Venezia da Fusina",
    "museum": "Collezione privata"
  },
  "tubaiae": {
    "title": "La baia di Baia, con Apollo e la Sibilla",
    "museum": "Tate, Londra"
  },
  "tuforum": {
    "title": "Forum Romanum, per il museo di Mr Soane",
    "museum": "Tate, Londra"
  },
  "tunewcastle": {
    "title": "Newcastle upon Tyne",
    "museum": "Tate, Londra"
  },
  "turamsgate": {
    "title": "Ramsgate",
    "museum": "Tate, Londra"
  },
  "tucologne": {
    "title": "Colonia, arrivo di un battello postale la sera",
    "museum": "Frick Collection, New York"
  },
  "tudieppe": {
    "title": "Il porto di Dieppe",
    "museum": "Frick Collection, New York"
  },
  "tumortlake": {
    "title": "La terrazza di Mortlake",
    "museum": "National Gallery of Art, Washington"
  },
  "tudunwich": {
    "title": "Dunwich, Suffolk",
    "museum": "Manchester Art Gallery"
  },
  "tustonehenge": {
    "title": "Stonehenge",
    "museum": "Salisbury Museum"
  },
  "tupetpark": {
    "title": "Il parco di Petworth, la chiesa di Tillington in lontananza",
    "museum": "Tate, Londra"
  },
  "tupetsunrise": {
    "title": "Il lago di Petworth, alba",
    "museum": "Tate, Londra"
  },
  "tupetsunset": {
    "title": "Il lago di Petworth, tramonto, studio campione",
    "museum": "Tate, Londra"
  },
  "tuchichester": {
    "title": "Il canale di Chichester",
    "museum": "Tate, Londra"
  },
  "tualnwick": {
    "title": "Il castello di Alnwick",
    "museum": "Art Gallery of South Australia, Adelaide"
  },
  "tuulyssketch": {
    "title": "Schizzo per «Ulisse schernisce Polifemo»",
    "museum": "Tate, Londra"
  },
  "tuchilde": {
    "title": "Il pellegrinaggio di Childe Harold, Italia",
    "museum": "Tate, Londra"
  },
  "tunantes": {
    "title": "Nantes dall’Île Feydeau",
    "museum": "Château des ducs de Bretagne, Nantes"
  },
  "tusaumur": {
    "title": "Saumur dall’Île d’Offard",
    "museum": "Clark Art Institute, Williamstown"
  },
  "tumelrose": {
    "title": "Melrose",
    "museum": "National Galleries of Scotland, Edimburgo"
  },
  "tustaffa": {
    "title": "Staffa, la grotta di Fingal",
    "museum": "Yale Center for British Art, New Haven"
  },
  "tuantwerp": {
    "title": "Anversa: Van Goyen cerca un soggetto",
    "museum": "Frick Collection, New York"
  },
  "tulyme": {
    "title": "Lyme Regis, Dorsetshire",
    "museum": "Cincinnati Art Museum"
  },
  "tuparlphil": {
    "title": "L’incendio delle Houses of Lords and Commons, 16 ottobre 1834",
    "museum": "Philadelphia Museum of Art"
  },
  "tuparlclev": {
    "title": "L’incendio delle Houses of Lords and Commons, dal fiume",
    "museum": "Cleveland Museum of Art"
  },
  "tukeelmen": {
    "title": "Carbonai al chiaro di luna",
    "museum": "National Gallery of Art, Washington"
  },
  "tulongships": {
    "title": "Il faro Longships, Land’s End",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "tulausanne": {
    "title": "Luna su Losanna",
    "museum": "University of Michigan Museum of Art, Ann Arbor"
  },
  "tuaosta": {
    "title": "La valle d’Aosta: bufera di neve, valanga e temporale",
    "museum": "Art Institute of Chicago"
  },
  "tucampanile": {
    "title": "Il campanile di San Marco dall’Hotel Europa, chiaro di luna",
    "museum": "Tate, Londra"
  },
  "tusalute": {
    "title": "Santa Maria della Salute e la Dogana al tramonto",
    "museum": "Tate, Londra"
  },
  "tulagoon": {
    "title": "Barche sulla laguna vicino a Venezia, tramonto",
    "museum": "Tate, Londra"
  },
  "tusunvenice": {
    "title": "Il sole di Venezia prende il largo",
    "museum": "Tate, Londra"
  },
  "tuapproach": {
    "title": "L’approdo a Venezia",
    "museum": "National Gallery of Art, Washington"
  },
  "tutemeraire": {
    "title": "La Fighting Temeraire",
    "museum": "National Gallery, Londra"
  },
  "tumodernrome": {
    "title": "La Roma moderna, Campo Vaccino",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "turockets": {
    "title": "Razzi e luci azzurre avvertono i battelli a vapore dei bassifondi",
    "museum": "Clark Art Institute, Williamstown"
  },
  "tusnowstorm": {
    "title": "Bufera di neve: piroscafo all’imboccatura di un porto",
    "museum": "Tate, Londra"
  },
  "tuheidelberg": {
    "title": "Heidelberg con un arcobaleno",
    "museum": "Collezione privata"
  },
  "turedrigi": {
    "title": "Il Rigi rosso",
    "museum": "National Gallery of Victoria, Melbourne"
  },
  "tudarkrigi": {
    "title": "Il Rigi scuro",
    "museum": "Collezione privata"
  },
  "turigiclouds": {
    "title": "Nubi sul Rigi all’alba, da Lucerna",
    "museum": "Tate, Londra"
  },
  "tubrunnen": {
    "title": "Il lago dei Quattro Cantoni: la baia di Uri da Brunnen",
    "museum": "Tate, Londra"
  },
  "tulucerne": {
    "title": "Lucerna dal lago",
    "museum": "Morgan Library & Museum, New York"
  },
  "tuzurich": {
    "title": "Un giorno di festa a Zurigo, all’alba, studio campione",
    "museum": "Tate, Londra"
  },
  "turhinefall": {
    "title": "Le cascate del Reno a Sciaffusa",
    "museum": "Princeton University Art Museum"
  },
  "tuzug": {
    "title": "Il lago di Zug",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "tusplugen": {
    "title": "Il passo dello Spluga",
    "museum": "Collezione privata"
  },
  "tufaido": {
    "title": "Il passo del San Gottardo presso Faido",
    "museum": "Morgan Library & Museum, New York"
  },
  "tulungern": {
    "title": "Il lago di Lungern al chiaro di luna",
    "museum": "Collezione privata"
  },
  "turainsteam": {
    "title": "Pioggia, vapore e velocità: la Great Western Railway",
    "museum": "National Gallery, Londra"
  },
  "tumargbeach": {
    "title": "Veduta della spiaggia di Margate",
    "museum": "Whitworth Art Gallery, Manchester"
  },
  "tunorham": {
    "title": "Il castello di Norham, alba",
    "museum": "Tate, Londra"
  }
});
  P.paths = P.paths || {};
  P.paths.turner = {
  "title": "Il percorso di vita di J. M. W. Turner",
  "life": "1775–1851",
  "part": "Parti 1–2 · 1775–1851",
  "subtitle": "Da Covent Garden, per Venezia e il Rigi, a Chelsea",
  "intro": "Viaggia con J. M. W. Turner per tutta la sua vita: dalla nascita a Covent Garden nel 1775, attraverso la Royal Academy, il Galles, le Alpi e il Reno, fino ai viaggi in Italia, a Petworth, all’incendio del Parlamento, a Venezia, alla Fighting Temeraire, agli acquerelli svizzeri e a Pioggia, vapore e velocità, fino alla sua morte il 19 dicembre 1851 a Chelsea.",
  "ending": [
    "J. M. W. Turner muore a Chelsea il 19 dicembre 1851, a settantasei anni. È sepolto nella cattedrale di St Paul a Londra.",
    "Lascia i suoi dipinti alla nazione. Con il Turner Bequest restano insieme centinaia di dipinti e migliaia di disegni e acquerelli, dalle prime vedute del Galles fino alla luce, al vapore e alla nebbia degli ultimi anni."
  ],
  "epilogue": "J. M. W. Turner muore a Chelsea il 19 dicembre 1851. È sepolto nella cattedrale di St Paul a Londra."
};
  P.stations = Object.assign(P.stations || {}, {
  "tuitaly": {
    "place": "Il primo viaggio in Italia",
    "when": "1819–1826",
    "mapLabel": "Italia",
    "intro": [
      "Nell’agosto 1819 Turner viaggia per la prima volta in Italia: per Torino e il lago di Como fino a Venezia, poi a Roma e Napoli. Nel febbraio 1820 è di ritorno a Londra, con taccuini pieni di disegni.",
      "Roma e il golfo di Napoli segnano i suoi quadri degli anni seguenti. Dipinge anche acquerelli per una serie di incisioni di porti inglesi."
    ]
  },
  "tuengland": {
    "place": "Porti sul Canale e sul Tamigi",
    "when": "1825–1828",
    "mapLabel": "Porti",
    "intro": [
      "Dal 1825 Turner viaggia di nuovo sul continente: in Olanda, sul Reno e in Francia. Nel 1826 espone Colonia e il porto di Dieppe, grandi quadri pieni di luce gialla.",
      "Nel 1827 dipinge la terrazza di Mortlake, sul Tamigi. Per la serie «Picturesque Views in England and Wales» nascono acquerelli come Dunwich e Stonehenge."
    ]
  },
  "tupetworth": {
    "place": "Petworth e Lord Egremont",
    "when": "1827–1830",
    "mapLabel": "Petworth",
    "intro": [
      "Dal 1827 Turner è spesso ospite di Petworth House, nel Sussex, presso il terzo conte di Egremont, un grande collezionista e mecenate. Nella casa ha un atelier proprio.",
      "Verso il 1828 dipinge per la sala da pranzo rivestita di legno lunghi paesaggi: il parco alla luce della sera, il lago all’alba e il canale di Chichester."
    ]
  },
  "tuitaly2": {
    "place": "Secondo viaggio in Italia, la Loira e la Scozia",
    "when": "1828–1834",
    "mapLabel": "Roma",
    "intro": [
      "Dall’agosto 1828 al febbraio 1829 Turner è in Italia per la seconda volta e dipinge a Roma; nel 1829 espone Ulisse schernisce Polifemo. Nel settembre 1829 muore suo padre, che per anni lo aveva aiutato in atelier.",
      "Per libri di viaggio disegna lungo la Loira. Nel 1831 viaggia in Scozia per i poemi di Walter Scott, fino all’isola di Staffa. Nel 1833 dipinge Anversa."
    ]
  },
  "tufire": {
    "place": "Il Parlamento in fiamme",
    "when": "1834–1837",
    "mapLabel": "Fuoco",
    "intro": [
      "Nella sera del 16 ottobre 1834, a Londra, brucia l’antico palazzo del Parlamento. Turner vede il fuoco dal fiume e lo schizza. Nel 1835 espone due grandi oli dell’incendio.",
      "Nello stesso anno dipinge carbonai al chiaro di luna sul Tyne. Nel 1836 viaggia con il suo collezionista Hugh Munro of Novar attraverso la Francia e la Svizzera fino alla valle d’Aosta."
    ]
  },
  "tuvenice": {
    "place": "Venezia",
    "when": "1833–1844",
    "mapLabel": "Venezia",
    "intro": [
      "Nel 1833 Turner è di nuovo a Venezia, e nell’agosto 1840 per l’ultima volta. Alloggia all’Hotel Europa, sul Canal Grande, e dipinge chiese, laguna e cielo notturno ad acquerello.",
      "A Londra ne nascono oli pieni di luce. Nel 1843 espone Il sole di Venezia prende il largo, nel 1844 l’approdo a Venezia."
    ]
  },
  "tutemer": {
    "place": "La Fighting Temeraire",
    "when": "1838–1842",
    "mapLabel": "Temeraire",
    "intro": [
      "Nel 1838 Turner vede l’antico vascello di linea Temeraire, che aveva combattuto a Trafalgar, rimorchiato da un battello a vapore su per il Tamigi per essere smantellato. Nel 1839 espone il quadro alla Royal Academy.",
      "Nel giugno 1840 conosce il giovane John Ruskin, che già lo aveva difeso. Seguono quadri di tempesta, vapore e luce, tra cui la bufera di neve del 1842."
    ]
  },
  "turigi": {
    "place": "Lucerna e il Rigi",
    "when": "1841–1845",
    "mapLabel": "Rigi",
    "intro": [
      "Dal 1841 al 1844 Turner viaggia ogni estate in Svizzera, spesso con Lucerna come base. Dal lago dipinge il Rigi ancora e ancora: alla luce del mattino, al tramonto, nella foschia.",
      "Da piccoli studi campione nascono acquerelli finiti per i collezionisti. Nel 1842 dipinge il Rigi rosso e il Rigi scuro, verso il 1845 un giorno di festa a Zurigo."
    ]
  },
  "tupasses": {
    "place": "Laghi e passi alpini",
    "when": "1841–1848",
    "mapLabel": "Passi",
    "intro": [
      "Turner dipinge le cascate del Reno a Sciaffusa, il lago di Zug, il passo dello Spluga e la strada del San Gottardo presso Faido. I fogli fanno di montagne, acqua e tempo della luce.",
      "Ancora verso il 1848 nascono acquerelli svizzeri, come il lago di Lungern al chiaro di luna."
    ]
  },
  "tulast": {
    "place": "Pioggia, vapore e velocità, Margate e Chelsea",
    "when": "1844–1851",
    "mapLabel": "Chelsea",
    "intro": [
      "Nel 1844 Turner espone Pioggia, vapore e velocità: un treno della Great Western Railway sul ponte di Maidenhead. A Margate alloggia spesso da Sophia Caroline Booth; verso il 1846 si trasferisce con lei in una casa sul fiume a Chelsea, dove è conosciuto come «Mr Booth».",
      "Nel 1845 è vicepresidente della Royal Academy. Nel 1850 espone lì per l’ultima volta. J. M. W. Turner muore a Chelsea il 19 dicembre 1851 ed è sepolto nella cattedrale di St Paul. Lascia i suoi dipinti alla nazione; nel 1856 il lascito passa allo Stato come Turner Bequest."
    ]
  },
  "turhine": {
    "place": "Lo Yorkshire, il Reno e il primo viaggio in Italia",
    "when": "1816–1819",
    "mapLabel": "Reno",
    "intro": [
      "Verso il 1816 Turner dipinge Hackfall nello Yorkshire. Nel 1817 viaggia in Belgio e in Olanda, attraverso il campo di Waterloo e lungo il Reno; vende una cinquantina di acquerelli del Reno al suo protettore Walter Fawkes, tra cui l’arcobaleno su Osterspai e Filsen e la torre romana di Andernach.",
      "Nel 1818 espone Dort, il battello postale di Rotterdam in bonaccia. Nello stesso anno dipinge un vascello di prima classe che imbarca provviste, e nel 1819 il faro di Bell Rock. Nel gennaio 1819 escono le ultime lastre del Liber Studiorum; in agosto Turner parte per l’Italia."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tufusina": {
    "text": [
      "Da Fusina Venezia resta lontana, al di là della laguna, con barche e figure sulla riva. L’acquerello data dal 1821, dopo il primo viaggio in Italia. È in una collezione privata."
    ],
    "fact": "1821. Collezione privata."
  },
  "tubaiae": {
    "text": [
      "La baia di Baia, sul golfo di Napoli, brilla di una luce calda; davanti, Apollo e la Sibilla siedono sotto gli alberi. Turner espone il quadro nel 1823. È alla Tate di Londra."
    ],
    "fact": "1823. Tate, Londra."
  },
  "tuforum": {
    "text": [
      "Sotto un grande arco si apre la vista sul Foro di Roma. Turner dipinge il quadro per l’architetto John Soane e lo espone nel 1826. È alla Tate di Londra."
    ],
    "fact": "1826. Tate, Londra."
  },
  "tunewcastle": {
    "text": [
      "Newcastle sorge sul Tyne, con campanili, fumo e navi. L’acquerello data da verso il 1823, per una serie di incisioni di porti inglesi. È alla Tate di Londra."
    ],
    "fact": "verso il 1823. Tate, Londra."
  },
  "turamsgate": {
    "text": [
      "Un veliero si fa strada nella tempesta verso il porto di Ramsgate; sulla riva sta il faro. L’acquerello data da verso il 1824, per la serie dei porti inglesi. È alla Tate di Londra."
    ],
    "fact": "verso il 1824. Tate, Londra."
  },
  "tucologne": {
    "text": [
      "Un battello postale attracca la sera a Colonia; case e campanili stanno in una luce dorata sul Reno. Turner espone il quadro nel 1826. È alla Frick Collection di New York."
    ],
    "fact": "1826. Frick Collection, New York."
  },
  "tudieppe": {
    "text": [
      "Il porto di Dieppe è pieno di barche, gente e sole; la luce si stende gialla sull’acqua. Turner espone il quadro nel 1825. È alla Frick Collection di New York."
    ],
    "fact": "1825. Frick Collection, New York."
  },
  "tumortlake": {
    "text": [
      "Lunghe ombre di alberi cadono su una terrazza sul Tamigi, a Mortlake; in fondo brilla il fiume. Turner espone il quadro nel 1827. È alla National Gallery of Art di Washington."
    ],
    "fact": "1827. National Gallery of Art, Washington."
  },
  "tudunwich": {
    "text": [
      "Sopra la costa di Dunwich si ergono rovine di chiese sulla scogliera; in basso, dei pescatori tirano una barca fuori dalle onde. L’acquerello data da verso il 1827. È alla Manchester Art Gallery."
    ],
    "fact": "verso il 1827. Manchester Art Gallery."
  },
  "tustonehenge": {
    "text": [
      "Un temporale passa sopra le pietre di Stonehenge; un pastore e delle pecore sono sulla pianura. L’acquerello data da verso il 1828, per la serie delle vedute d’Inghilterra e del Galles. È al Salisbury Museum."
    ],
    "fact": "verso il 1828. Salisbury Museum."
  },
  "tupetpark": {
    "text": [
      "Alla luce della sera si stende il parco di Petworth con i cervi; in lontananza sta la chiesa di Tillington. Il quadro allungato data da verso il 1828, per la casa di Lord Egremont. È alla Tate di Londra."
    ],
    "fact": "verso il 1828. Tate, Londra."
  },
  "tupetsunrise": {
    "text": [
      "Il sole sorge sul lago del parco di Petworth; dei cervi stanno sull’acqua. Lo studio data da verso il 1827–28. È alla Tate di Londra."
    ],
    "fact": "verso il 1827–1828. Tate, Londra."
  },
  "tupetsunset": {
    "text": [
      "Il sole cala sul lago di Petworth e colora il cielo e l’acqua. Lo studio data da verso il 1827–28, per i quadri della sala da pranzo. È alla Tate di Londra."
    ],
    "fact": "verso il 1827–1828. Tate, Londra."
  },
  "tuchichester": {
    "text": [
      "Un veliero riposa sul canale di Chichester, alla luce della sera. Anche questo quadro allungato data da verso il 1828, per Petworth. È alla Tate di Londra."
    ],
    "fact": "verso il 1828. Tate, Londra."
  },
  "tualnwick": {
    "text": [
      "Al chiaro di luna si ergono il castello di Alnwick e un ponte nel nord dell’Inghilterra; dei cervi si riflettono nell’acqua. L’acquerello data da verso il 1829. È all’Art Gallery of South Australia di Adelaide."
    ],
    "fact": "verso il 1829. Art Gallery of South Australia, Adelaide."
  },
  "tuulyssketch": {
    "text": [
      "Rocce, mare e un cielo infuocato: lo schizzo a olio di Ulisse che schernisce il gigante Polifemo. Turner espone il quadro finito nel 1829. Lo schizzo è alla Tate di Londra."
    ],
    "fact": "verso il 1827–1828. Tate, Londra."
  },
  "tuchilde": {
    "text": [
      "Un ampio paesaggio italiano con un alto pino ad ombrello, rovine e figure in primo piano. Turner dà al quadro il nome del poema di Lord Byron e lo espone nel 1832. È alla Tate di Londra."
    ],
    "fact": "1832. Tate, Londra."
  },
  "tunantes": {
    "text": [
      "Al mercato dell’Île Feydeau si affolla la gente; dietro sorge la città di Nantes, sulla Loira. L’acquerello data dal 1829–30. È al Château des ducs de Bretagne di Nantes."
    ],
    "fact": "1829–1830. Château des ducs de Bretagne, Nantes."
  },
  "tusaumur": {
    "text": [
      "Un lungo ponte attraversa la Loira verso Saumur; sopra si erge il castello. L’acquerello data da verso il 1830. È al Clark Art Institute di Williamstown."
    ],
    "fact": "verso il 1830. Clark Art Institute, Williamstown."
  },
  "tumelrose": {
    "text": [
      "Alla luce della sera lo sguardo va oltre il Tweed verso Melrose; davanti riposa un piccolo gruppo. Turner dipinge l’acquerello nel 1831 come illustrazione dei poemi di Walter Scott. È alle National Galleries of Scotland di Edimburgo."
    ],
    "fact": "1831. National Galleries of Scotland, Edimburgo."
  },
  "tustaffa": {
    "text": [
      "Un piroscafo passa nella tempesta lungo l’isola di Staffa; il sole tramonta dietro le nubi. Turner c’era stato lui stesso nel 1831 e espone il quadro nel 1832. È allo Yale Center for British Art di New Haven."
    ],
    "fact": "1832. Yale Center for British Art, New Haven."
  },
  "tuantwerp": {
    "text": [
      "Delle barche virano davanti ad Anversa su un’acqua mossa; il pittore Jan van Goyen cerca un soggetto. Turner espone il quadro nel 1833. È alla Frick Collection di New York."
    ],
    "fact": "1833. Frick Collection, New York."
  },
  "tulyme": {
    "text": [
      "Le onde battono la costa di Lyme Regis; dei pescatori tirano a terra la loro barca. L’acquerello data da verso il 1834. È al Cincinnati Art Museum."
    ],
    "fact": "verso il 1834. Cincinnati Art Museum."
  },
  "tuparlphil": {
    "text": [
      "Le fiamme si alzano sul Tamigi; il ponte di Westminster brilla nella luce del fuoco. Turner espone questo quadro nel 1835. È al Philadelphia Museum of Art."
    ],
    "fact": "1834–1835. Philadelphia Museum of Art."
  },
  "tuparlclev": {
    "text": [
      "Visto dall’acqua, il fuoco sale nel cielo notturno; ci sono barche sul fiume. È la seconda grande versione, esposta nel 1835. È al Cleveland Museum of Art."
    ],
    "fact": "1834–1835. Cleveland Museum of Art."
  },
  "tukeelmen": {
    "text": [
      "Sul Tyne i carbonai caricano il carbone al chiaro di luna; sulle barche ardono le torce. Turner espone il quadro nel 1835. È alla National Gallery of Art di Washington."
    ],
    "fact": "1835. National Gallery of Art, Washington."
  },
  "tulongships": {
    "text": [
      "La spuma e le nubi avvolgono il faro Longships, all’estremità della Cornovaglia. L’acquerello data da verso il 1834–35. È al J. Paul Getty Museum di Los Angeles."
    ],
    "fact": "verso il 1834–1835. J. Paul Getty Museum, Los Angeles."
  },
  "tulausanne": {
    "text": [
      "Una piccola luna sta sopra Losanna e il lago Lemano; davanti stanno tre figure. L’acquerello data dal 1836, l’anno del viaggio con Munro of Novar. È all’University of Michigan Museum of Art di Ann Arbor."
    ],
    "fact": "1836. University of Michigan Museum of Art, Ann Arbor."
  },
  "tuaosta": {
    "text": [
      "Neve, valanga e temporale vorticoso nella valle d’Aosta; le montagne si sciolgono nella tempesta. Il quadro data dal 1836–37, dopo il viaggio con Munro. È all’Art Institute of Chicago."
    ],
    "fact": "1836–1837. Art Institute of Chicago."
  },
  "tucampanile": {
    "text": [
      "Dall’Hotel Europa Turner vede di notte il campanile di San Marco al chiaro di luna. L’acquerello data dal 1840, durante il suo ultimo soggiorno a Venezia. È alla Tate di Londra."
    ],
    "fact": "verso il 1840. Tate, Londra."
  },
  "tusalute": {
    "text": [
      "Oltre il bacino di San Marco brillano la chiesa della Salute e la Dogana alla luce della sera. L’acquerello data dal 1840. È alla Tate di Londra."
    ],
    "fact": "1840. Tate, Londra."
  },
  "tulagoon": {
    "text": [
      "Poche barche riposano sulla laguna calma; il cielo si dissolve nel colore. L’acquerello data dal 1840. È alla Tate di Londra."
    ],
    "fact": "1840. Tate, Londra."
  },
  "tusunvenice": {
    "text": [
      "Una barca da pesca con la vela dipinta esce da Venezia al mattino; tutto trema nella luce. Turner espone il quadro nel 1843. È alla Tate di Londra."
    ],
    "fact": "1843. Tate, Londra."
  },
  "tuapproach": {
    "text": [
      "Delle gondole scivolano al tramonto verso Venezia; la città e il cielo si fondono. Turner espone il quadro nel 1844. È alla National Gallery of Art di Washington."
    ],
    "fact": "1844. National Gallery of Art, Washington."
  },
  "tutemeraire": {
    "text": [
      "Un oscuro rimorchiatore a vapore tira il pallido vascello da guerra Temeraire al suo ultimo attracco; il sole tramonta. Turner espone il quadro nel 1839. È alla National Gallery di Londra."
    ],
    "fact": "1839. National Gallery, Londra."
  },
  "tumodernrome": {
    "text": [
      "Alla luce della sera si stende il Foro Romano, il Campo Vaccino, con colonne, chiese e la luna. Turner espone il quadro nel 1839. È al J. Paul Getty Museum di Los Angeles."
    ],
    "fact": "1839. J. Paul Getty Museum, Los Angeles."
  },
  "turockets": {
    "text": [
      "Da una costa salgono razzi di segnale; un battello a vapore avanza tra onde e luce. Turner espone il quadro nel 1840. È al Clark Art Institute di Williamstown."
    ],
    "fact": "1840. Clark Art Institute, Williamstown."
  },
  "tusnowstorm": {
    "text": [
      "Un piroscafo quasi scompare in un vortice di neve, vento e onde. Turner espone il quadro nel 1842. È alla Tate di Londra."
    ],
    "fact": "1842. Tate, Londra."
  },
  "tuheidelberg": {
    "text": [
      "Sopra Heidelberg e il Neckar sta un arcobaleno; il castello è nella luce. L’acquerello data da verso il 1840. È in una collezione privata."
    ],
    "fact": "verso il 1840. Collezione privata."
  },
  "turedrigi": {
    "text": [
      "Alla sera il Rigi brilla di rosso sopra il lago di Lucerna; la luce si riflette nell’acqua. L’acquerello data dal 1842. È alla National Gallery of Victoria di Melbourne."
    ],
    "fact": "1842. National Gallery of Victoria, Melbourne."
  },
  "tudarkrigi": {
    "text": [
      "Prima dell’alba il Rigi resta scuro sopra il lago di Lucerna; ci sono già barche sull’acqua. L’acquerello data dal 1842. È in una collezione privata."
    ],
    "fact": "1842. Collezione privata."
  },
  "turigiclouds": {
    "text": [
      "Nubi rosa e azzurre coprono il Rigi, visto da Lucerna. Lo studio data da verso il 1844. È alla Tate di Londra."
    ],
    "fact": "verso il 1844. Tate, Londra."
  },
  "tubrunnen": {
    "text": [
      "Dall’alto di Brunnen si apre la vista sulla baia di Uri, montagne e acqua in una foschia chiara. Lo studio data da verso il 1841–42. È alla Tate di Londra."
    ],
    "fact": "verso il 1841–1842. Tate, Londra."
  },
  "tulucerne": {
    "text": [
      "Lucerna si stende alla luce della sera sul lago, con torri, mura e barche. L’acquerello data dal 1845. È alla Morgan Library & Museum di New York."
    ],
    "fact": "1845. Morgan Library & Museum, New York."
  },
  "tuzurich": {
    "text": [
      "All’alba la gente si affolla sulla riva della Limmat, a Zurigo; le torri si alzano nel cielo chiaro. Lo studio data da verso il 1845. È alla Tate di Londra."
    ],
    "fact": "verso il 1845. Tate, Londra."
  },
  "turhinefall": {
    "text": [
      "Le cascate del Reno precipitano in una spuma bianca; sopra sta il castello di Laufen nella luce. L’acquerello data da verso il 1841. È al Princeton University Art Museum."
    ],
    "fact": "verso il 1841. Princeton University Art Museum."
  },
  "tuzug": {
    "text": [
      "All’alba il lago di Zug sta sotto le montagne, la città sulla riva nella foschia. L’acquerello data dal 1843. È al Metropolitan Museum of Art di New York."
    ],
    "fact": "1843. Metropolitan Museum of Art, New York."
  },
  "tusplugen": {
    "text": [
      "La strada verso il passo dello Spluga entra in un’ampia valle piena di luce e foschia. L’acquerello data dal 1842. È in una collezione privata."
    ],
    "fact": "1842. Collezione privata."
  },
  "tufaido": {
    "text": [
      "Presso Faido la strada del San Gottardo serpeggia tra rocce e acqua, sotto un cielo di temporale. L’acquerello data dal 1843. È alla Morgan Library & Museum di New York."
    ],
    "fact": "1843. Morgan Library & Museum, New York."
  },
  "tulungern": {
    "text": [
      "Il lago di Lungern, in Obvaldo, sta calmo sotto la luna; le montagne incorniciano l’acqua. L’acquerello data da verso il 1848. È in una collezione privata."
    ],
    "fact": "verso il 1848. Collezione privata."
  },
  "turainsteam": {
    "text": [
      "Un treno attraversa il ponte di Maidenhead, tra pioggia e foschia; davanti corre una lepre. Turner espone il quadro nel 1844. È alla National Gallery di Londra."
    ],
    "fact": "1844. National Gallery, Londra."
  },
  "tumargbeach": {
    "text": [
      "Una luce chiara si stende sulla spiaggia di Margate; il cielo e il mare si fondono. Turner viene spesso qui in questi anni. Il quadro è alla Whitworth Art Gallery di Manchester."
    ],
    "fact": "verso il 1840. Whitworth Art Gallery, Manchester."
  },
  "tunorham": {
    "text": [
      "Il castello di Norham, sul Tweed, si erge azzurro contro il sole che sorge; una mucca sta nell’acqua. Turner aveva già dipinto il soggetto da giovane; questa versione tarda data da verso il 1845. È alla Tate di Londra."
    ],
    "fact": "verso il 1845. Tate, Londra."
  },
  "tubellrock": {
    "text": [
      "In un mare grosso il faro di Bell Rock si erge al largo della costa scozzese, battuto dalle onde.",
      "Turner dipinge l’acquerello nel 1819. Nell’agosto dello stesso anno viaggia in Italia per la prima volta.",
      "È alle National Galleries of Scotland di Edimburgo."
    ],
    "fact": "1819. National Galleries of Scotland, Edimburgo."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
