// v8.0 Italian content for Klimt’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts.
// Quotes are translations of the German self-translations
// (Flöge postcards and letter; Kunstschau opening address).
// Overwrites P.paths.klimt with whole-path meta; must load after the Part 1 pack.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Sammlung nicht ermittelt": "Collezione non determinata",
  "Privatbesitz": "Collezione privata",
  "Leopold Museum, Wien": "Leopold Museum, Vienna",
  "Österreichische Galerie Belvedere, Wien": "Österreichische Galerie Belvedere, Vienna",
  "Neue Galerie, New York": "Neue Galerie, New York",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Parigi",
  "MAK – Museum für angewandte Kunst, Wien": "MAK – Museo di arti applicate, Vienna",
  "Museum of Modern Art, New York": "Museum of Modern Art, New York",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery, London": "National Gallery, Londra",
  "Neue Pinakothek, München": "Neue Pinakothek, Monaco di Baviera",
  "Präfekturmuseum Aichi, Nagoya": "Museo prefettizio di Aichi, Nagoya",
  "Busch-Reisinger Museum, Harvard Art Museums, Cambridge": "Busch-Reisinger Museum, Harvard Art Museums, Cambridge",
  "Nationalgalerie Prag": "Galleria nazionale di Praga",
  "Kunsthaus Zug": "Kunsthaus Zug",
  "Städtisches Kunstmuseum Toyota": "Museo civico d’arte di Toyota",
  "Tel Aviv Museum of Art": "Tel Aviv Museum of Art",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "LENTOS Kunstmuseum Linz": "LENTOS Kunstmuseum Linz",
  "Galleria d’Arte Moderna Ricci Oddi, Piacenza": "Galleria d’Arte Moderna Ricci Oddi, Piacenza",
  "Historische Fotografie; das Original verbrannte 1945 auf Schloss Immendorf": "Fotografia storica; l’originale bruciò nel 1945 al palazzo di Immendorf"
});
  P.works = Object.assign(P.works || {}, {
  "goldknight": {
    "title": "Il cavaliere d’oro",
    "museum": "Museo prefettizio di Aichi, Nagoya"
  },
  "goldapple": {
    "title": "Melo d’oro",
    "museum": "Fotografia storica; l’originale bruciò nel 1945 al palazzo di Immendorf"
  },
  "birkforest": {
    "title": "Bosco di betulle",
    "museum": "Collezione privata"
  },
  "poplar2": {
    "title": "Il grande pioppo II (Temporale in arrivo)",
    "museum": "Leopold Museum, Vienna"
  },
  "kpeartree": {
    "title": "Pero",
    "museum": "Busch-Reisinger Museum, Harvard Art Museums, Cambridge"
  },
  "wittgenstein": {
    "title": "Ritratto di Margaret Stonborough-Wittgenstein",
    "museum": "Neue Pinakothek, Monaco di Baviera"
  },
  "gallia": {
    "title": "Ritratto di Hermine Gallia",
    "museum": "National Gallery, Londra"
  },
  "fritza": {
    "title": "Ritratto di Fritza Riedler",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "adelestudy": {
    "title": "Studio per il ritratto di Adele Bloch-Bauer I",
    "museum": "Collezione non determinata"
  },
  "adele": {
    "title": "Ritratto di Adele Bloch-Bauer I",
    "museum": "Neue Galerie, New York"
  },
  "rosetrees": {
    "title": "Rose sotto gli alberi",
    "museum": "Musée d’Orsay, Parigi"
  },
  "kiss": {
    "title": "Il bacio",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kissdetail": {
    "title": "Il bacio (dettaglio)",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kgarden": {
    "title": "Giardino rustico",
    "museum": "Collezione privata"
  },
  "sunfarm": {
    "title": "Giardino rustico con girasoli",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "ksunflower": {
    "title": "Il girasole",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kpoppies": {
    "title": "Papaveri in fiore",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "meadow": {
    "title": "Prato in fiore",
    "museum": "Collezione privata"
  },
  "stocletexp": {
    "title": "L’attesa (modello)",
    "museum": "MAK – Museo di arti applicate, Vienna"
  },
  "stocletembrace": {
    "title": "L’abbraccio (modello)",
    "museum": "MAK – Museo di arti applicate, Vienna"
  },
  "stoclettree": {
    "title": "L’albero della vita (modello)",
    "museum": "MAK – Museo di arti applicate, Vienna"
  },
  "stocletritter": {
    "title": "Il cavaliere (modello)",
    "museum": "MAK – Museo di arti applicate, Vienna"
  },
  "stocletrose": {
    "title": "Roseto (modello)",
    "museum": "MAK – Museo di arti applicate, Vienna"
  },
  "featherboa": {
    "title": "Dama con cappello e boa di piume",
    "museum": "Collezione privata"
  },
  "barbarafloege": {
    "title": "Ritratto di Barbara Flöge",
    "museum": "Collezione non determinata"
  },
  "thepark": {
    "title": "Il parco",
    "museum": "Museum of Modern Art, New York"
  },
  "kammer2": {
    "title": "Schloss Kammer all’Attersee II",
    "museum": "Collezione privata"
  },
  "kammer3": {
    "title": "Schloss Kammer all’Attersee III",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kammer4": {
    "title": "Schloss Kammer all’Attersee IV",
    "museum": "Collezione privata"
  },
  "kammerave": {
    "title": "Viale verso Schloss Kammer",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kammerpark": {
    "title": "Parco di Schloss Kammer",
    "museum": "Neue Galerie, New York"
  },
  "watercastle": {
    "title": "Palazzo sull’acqua",
    "museum": "Galleria nazionale di Praga"
  },
  "oefarm": {
    "title": "Casa colonica dell’Alta Austria",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kapple": {
    "title": "Melo I",
    "museum": "Collezione privata"
  },
  "kapple2": {
    "title": "Melo II",
    "museum": "Collezione non determinata"
  },
  "malcesine": {
    "title": "Malcesine sul lago di Garda",
    "museum": "Fotografia storica; l’originale bruciò nel 1945 al palazzo di Immendorf"
  },
  "cassone": {
    "title": "Chiesa di Cassone",
    "museum": "Collezione privata"
  },
  "italygarden": {
    "title": "Paesaggio di giardino italiano",
    "museum": "Kunsthaus Zug"
  },
  "unterach": {
    "title": "Case a Unterach am Attersee",
    "museum": "Collezione non determinata"
  },
  "ualslope": {
    "title": "Pendio boscoso presso Unterach am Attersee",
    "museum": "Collezione privata"
  },
  "litzlberg": {
    "title": "Litzlberg am Attersee",
    "museum": "Collezione privata"
  },
  "litzkeller": {
    "title": "Litzlbergkeller",
    "museum": "Leopold Museum, Vienna"
  },
  "weissenbach": {
    "title": "Casa del guardaboschi a Weissenbach II",
    "museum": "Collezione non determinata"
  },
  "pfarrgarten": {
    "title": "Paesaggio di giardino con cima (giardino parrocchiale)",
    "museum": "Collezione non determinata"
  },
  "mada": {
    "title": "Ritratto di Mäda Primavesi",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "adele2": {
    "title": "Ritratto di Adele Bloch-Bauer II",
    "museum": "Collezione privata"
  },
  "eugenia": {
    "title": "Ritratto di Eugenia Primavesi",
    "museum": "Museo civico d’arte di Toyota"
  },
  "fmbeer": {
    "title": "Ritratto di Friederike Maria Beer",
    "museum": "Tel Aviv Museum of Art"
  },
  "ladyfan": {
    "title": "Dama con ventaglio",
    "museum": "Collezione privata"
  },
  "dancer": {
    "title": "La ballerina",
    "museum": "Neue Galerie, New York"
  },
  "riamunk3": {
    "title": "Ritratto di Ria Munk III",
    "museum": "Collezione privata"
  },
  "deathfig": {
    "title": "Morte e vita (particolare: la Morte)",
    "museum": "Leopold Museum, Vienna"
  },
  "riamunkbed": {
    "title": "Ria Munk sul letto di morte",
    "museum": "Collezione privata"
  },
  "staude": {
    "title": "Ritratto di Johanna Staude",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "zuckerkandl": {
    "title": "Ritratto di Amalie Zuckerkandl",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  },
  "kbaby": {
    "title": "Bambino (Culla)",
    "museum": "National Gallery of Art, Washington"
  },
  "ladyhead": {
    "title": "Testa di donna",
    "museum": "LENTOS Kunstmuseum Linz"
  },
  "ladypiacenza": {
    "title": "Ritratto di una dama",
    "museum": "Galleria d’Arte Moderna Ricci Oddi, Piacenza"
  },
  "ladywhite": {
    "title": "Dama in bianco",
    "museum": "Österreichische Galerie Belvedere, Vienna"
  }
});
  P.paths = P.paths || {};
  P.paths.klimt = {
  "title": "Il percorso di vita di Klimt",
  "life": "1862–1918",
  "part": "Parti 1–2 · 1862–1918",
  "subtitle": "Da Baumgarten agli ultimi quadri",
  "intro": "Viaggia con Gustav Klimt attraverso tutta la sua vita: dall’infanzia a Baumgarten e dalla Scuola di arti applicate alla Künstler-Compagnie, al Burgtheater e al Kunsthistorisches Museum, alla morte del padre e del fratello nel 1892, alla Secessione e al Fregio di Beethoven, fino agli anni d’oro, alla Kunstschau del 1908, al fregio Stoclet, a Emilie Flöge, ai paesaggi dell’Attersee e del lago di Garda, ai ritratti colorati tardi e a «Morte e vita». Stazioni brevi, quadri da colorare e voci documentate: cartoline e una lettera ad Emilie Flöge, e il discorso della Kunstschau. Klimt muore a Vienna il 6 febbraio 1918.",
  "ending": [
    "Negli ultimi anni nascono ritratti e paesaggi colorati, accanto a ritratti incompiuti come Johanna Staude, Amalie Zuckerkandl e la «Dama in bianco». Nel 1916 Klimt trascorre l’ultima estate condivisa con Emilie Flöge all’Attersee. Il 30 dicembre 1917 le scrive da Winkelsdorf: «…un saluto uscito dal più intimo e [ti] auguro un anno nuovo il più, il più felice. – come ne abbiamo entrambi così urgentemente bisogno.»",
    "L’11 gennaio 1918 Klimt è colpito da un ictus a Vienna. Muore il 6 febbraio 1918 all’Ospedale generale di Vienna, a cinquantasei anni.",
    "Restano, fra le altre opere, «Il bacio» al Belvedere, il ritratto dorato di Adele Bloch-Bauer, i cartoni del fregio Stoclet al MAK, i paesaggi dell’Attersee e del lago di Garda e i ritratti tardi. Di lui stesso, aveva scritto, non esiste nessun autoritratto: si devono guardare i suoi quadri."
  ],
  "epilogue": "L’11 gennaio 1918 Gustav Klimt è colpito da un ictus a Vienna. Muore il 6 febbraio 1918 all’Ospedale generale, a cinquantasei anni. Restano «Il bacio», i ritratti dorati, il fregio Stoclet, i paesaggi e i ritratti tardi – e le voci delle cartoline e delle lettere ad Emilie Flöge."
};
  P.stations = Object.assign(P.stations || {}, {
  "klimtgold": {
    "place": "Vienna · Gli anni d’oro",
    "when": "1903–1907",
    "mapLabel": "Oro",
    "intro": [
      "Nel dicembre 1903 Klimt viaggia a Ravenna. Su una cartolina ad Emilie Flöge scrive di molto di misero – e di mosaici di uno splendore inaudito. Negli anni seguenti lo stile dorato si addensa nei ritratti e in alcuni pezzi di alberi e di boschi.",
      "Nascono, fra le altre opere, il ritratto di Hermine Gallia, quello di Margaret Stonborough-Wittgenstein e quello di Fritza Riedler, poi nel 1907 il ritratto dorato di Adele Bloch-Bauer. Accanto a essi stanno «Il cavaliere d’oro», il «Melo d’oro» e paesaggi come il «Bosco di betulle»."
    ]
  },
  "klimtkunstschau": {
    "place": "Vienna · Kunstschau 1908",
    "when": "1908",
    "mapLabel": "Kunstschau",
    "intro": [
      "Nel 1905 il cosiddetto gruppo di Klimt lascia la Secessione. Il 1° giugno 1908 Klimt inaugura la Kunstschau in un edificio provvisorio eretto da Josef Hoffmann sul terreno dell’attuale Konzerthaus. Nel discorso festivo dice che nessun ambito della vita umana è troppo insignificante per offrire spazio agli sforzi artistici.",
      "Nella sala progettata per Klimt è appeso, fra le altre opere, «Il bacio» del 1907-1908. Lo Stato austriaco acquista il quadro per la Moderne Galerie, l’attuale Belvedere. Negli stessi anni nascono densi pezzi di giardino e di prato."
    ]
  },
  "klimtstoclet": {
    "place": "Vienna · Il fregio Stoclet",
    "when": "intorno al 1905–1911",
    "mapLabel": "Stoclet",
    "intro": [
      "Per la sala da pranzo del Palais Stoclet a Bruxelles, una casa di Josef Hoffmann e della Wiener Werkstätte per l’industriale Adolphe Stoclet, Klimt progetta un fregio: l’Attesa, l’Albero della vita, l’Abbraccio, e inoltre il Cavaliere e il roseto.",
      "I modelli e i cartoni del 1910-1911 sono conservati al MAK di Vienna. Il fregio stesso viene installato a Bruxelles."
    ]
  },
  "klimtfloege": {
    "place": "Vienna · Emilie Flöge e il salone",
    "when": "1904–1915",
    "mapLabel": "Flöge",
    "intro": [
      "Il 1° luglio 1904 Emilie, Helene e Pauline Flöge fondano il salone di moda «Schwestern Flöge» nella Casa Piccola della Mariahilfer Strasse. Gli ambienti li progettano Josef Hoffmann e Koloman Moser.",
      "Le estati Klimt le trascorre ancora con la famiglia Flöge all’Attersee. Nel 1909 viaggia in Spagna e scrive da Toledo: «El Greco è magnifico!» Nel 1915 nasce il ritratto di Barbara, la madre di Emilie Flöge."
    ]
  },
  "klimtkammer": {
    "place": "Attersee · Schloss Kammer",
    "when": "1908–1912",
    "mapLabel": "Kammer",
    "intro": [
      "Nelle estati all’Attersee, Schloss Kammer sulla riva nord diventa un motivo ricorrente. Klimt dipinge il palazzo dal lago in più versioni, più tardi anche il viale e il parco.",
      "Accanto a essi nascono un palazzo sull’acqua, una casa colonica dell’Alta Austria e meli. I paesaggi restano senza oro, ma altrettanto densi sulla superficie."
    ]
  },
  "klimtgarda": {
    "place": "Lago di Garda · Malcesine e Cassone",
    "when": "1913",
    "mapLabel": "Garda",
    "intro": [
      "Nel 1913 Klimt viaggia al lago di Garda. Nascono vedute di Malcesine e della chiesa di Cassone, e un paesaggio di giardino italiano.",
      "«Malcesine sul lago di Garda» brucia nel 1945 al palazzo di Immendorf, insieme ad altre opere che vi erano state evacuate. Resta una fotografia storica."
    ]
  },
  "klimtunterach": {
    "place": "Attersee · Unterach e Litzlberg",
    "when": "1914–1916",
    "mapLabel": "Unterach",
    "intro": [
      "Nelle estati più tarde lo sguardo si volge più fortemente verso Unterach, sulla riva sud-orientale, verso Litzlberg e Weissenbach. Nascono vedute del paese e della riva, un pendio boscoso e paesaggi di giardino.",
      "Nel 1916 Klimt trascorre l’ultima estate condivisa con Emilie Flöge all’Attersee."
    ]
  },
  "klimtportraits": {
    "place": "Vienna · Ritratti colorati",
    "when": "1912–1918",
    "mapLabel": "Ritratti",
    "intro": [
      "Dopo gli anni d’oro i ritratti diventano più colorati e più sciolti. Nascono, fra le altre opere, i ritratti di Mäda e di Eugenia Primavesi, il secondo ritratto di Adele Bloch-Bauer e quello di Friederike Maria Beer.",
      "Nei fondi tardi compaiono spesso motivi dell’Asia orientale, che Klimt anche colleziona – per esempio nel ritratto di Friederike Maria Beer e nella «Dama con ventaglio». Accanto a essi stanno «La ballerina» e il ritratto incompiuto di Ria Munk III."
    ]
  },
  "klimttod": {
    "place": "Vienna · Morte e vita",
    "when": "intorno al 1910–1915",
    "mapLabel": "Morte e vita",
    "intro": [
      "Intorno al 1910 Klimt inizia il grande quadro «Morte e vita», che più tardi rielabora. La Morte sta come figura oscura di fronte a un gruppo dei vivi. Qui si vede solo la figura della Morte.",
      "Il quadro è appeso al Leopold Museum di Vienna. Nel 1912 Klimt dipinge inoltre Ria Munk sul letto di morte, l’anno dopo la sua morte precoce."
    ]
  },
  "klimt1918": {
    "place": "Vienna · Gli ultimi quadri",
    "when": "1917–1918",
    "mapLabel": "1918",
    "intro": [
      "Negli ultimi mesi nascono ritratti incompiuti – Johanna Staude, Amalie Zuckerkandl, la «Dama in bianco» – e opere compiute come «Bambino (Culla)», una testa di donna e il «Ritratto di una dama» a Piacenza.",
      "L’11 gennaio 1918 Klimt è colpito da un ictus. Muore il 6 febbraio 1918 all’Ospedale generale di Vienna."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "goldknight": {
    "text": [
      "Un cavaliere in armatura dorata cavalca con la lancia in resta attraverso un campo roccioso. Il quadro del 1903 si chiama anche «La vita è una lotta».",
      "È appeso al Museo prefettizio di Aichi a Nagoya. La superficie d’oro e l’armatura ornamentale appartengono già al tempo successivo al viaggio a Ravenna."
    ],
    "fact": "Olio, tempera e foglia d’oro su tela, 1903. Museo prefettizio di Aichi, Nagoya."
  },
  "goldapple": {
    "text": [
      "Un melo si erge come un denso ornamento percorso d’oro su un fondo scuro, i frutti come segni a forma di disco. Il quadro nasce nel 1903.",
      "L’originale brucia nel 1945 al palazzo di Immendorf, in Bassa Austria, dove era stato evacuato. Resta, fra l’altro, questa fotografia storica."
    ],
    "fact": "Olio e oro su tela, 1903. Fotografia storica; l’originale bruciò nel 1945 al palazzo di Immendorf."
  },
  "birkforest": {
    "text": [
      "I tronchi di betulla stanno fitti l’uno accanto all’altro, il suolo del bosco è un tappeto di muschio, foglie e luce. Il quadro nasce nel 1903, un anno dopo il «Bosco di faggi I».",
      "Si trovava nella collezione Paul G. Allen e oggi è in collezione privata. I pezzi di bosco appartengono alle estati all’Attersee."
    ],
    "fact": "Olio su tela, 1903. Collezione privata."
  },
  "poplar2": {
    "text": [
      "Un alto pioppo s’innalza davanti a un cielo scuro e tempestoso, il prato davanti ancora chiaro. Il quadro si chiama «Il grande pioppo II» e nasce dal 1902 al 1903.",
      "È appeso al Leopold Museum di Vienna. Lo sguardo si rivolge a un solo albero, non a un vasto paesaggio."
    ],
    "fact": "Olio su tela, 1902–1903. Leopold Museum, Vienna."
  },
  "kpeartree": {
    "text": [
      "Un pero riempie la superficie come un denso mosaico di foglie, fiori e frutti, il tronco appena percepibile. Il quadro nasce nel 1903.",
      "Appartiene al Busch-Reisinger Museum degli Harvard Art Museums a Cambridge. Come il melo d’oro, mostra un solo albero come ornamento."
    ],
    "fact": "Olio e oro su tela, 1903. Busch-Reisinger Museum, Harvard Art Museums, Cambridge."
  },
  "wittgenstein": {
    "text": [
      "Margaret Stonborough-Wittgenstein sta in un abito bianco davanti a un fondo geometricamente diviso, in parte dorato. Il ritratto nasce nel 1905.",
      "La ritratta è una sorella del filosofo Ludwig Wittgenstein. Il quadro è appeso alla Neue Pinakothek di Monaco di Baviera."
    ],
    "fact": "Olio su tela, 1905. Neue Pinakothek, Monaco di Baviera."
  },
  "gallia": {
    "text": [
      "Hermine Gallia siede in un abito chiaro, dal morbido cadere, le mani in grembo, il fondo in delicati toni ornamentali. Il ritratto nasce nel 1904.",
      "Appartiene alla National Gallery di Londra. Hermine Gallia era la moglie dell’industriale viennese Moriz Gallia, un collezionista precoce di Klimt."
    ],
    "fact": "Olio su tela, 1904. National Gallery, Londra."
  },
  "fritza": {
    "text": [
      "Fritza Riedler siede in un abito chiaro davanti a un fondo dal motivo marcato; dietro la testa compare un ornamento dorato, a mo’ di trono. Il ritratto nasce nel 1906.",
      "È appeso al Belvedere di Vienna. La geometria chiara intorno alla testa appartiene già del tutto agli anni d’oro."
    ],
    "fact": "Olio su tela, 1906. Österreichische Galerie Belvedere, Vienna."
  },
  "adelestudy": {
    "text": [
      "Un disegno fissa la testa e il busto di Adele Bloch-Bauer, ancora senza il fondo d’oro successivo. Lo studio appartiene ai lavori preparatori del ritratto del 1907.",
      "Mostra con quale precisione Klimt fissa la posa e lo sguardo prima di aggiungere l’oro ornamentale."
    ],
    "fact": "Disegno, intorno al 1903–1907. Collezione non determinata."
  },
  "adele": {
    "text": [
      "Adele Bloch-Bauer siede in un abito dorato, densamente ornato, il fondo un mosaico d’oro, d’argento e di segni. Il ritratto nasce nel 1907, dopo anni di lavoro.",
      "Appartiene alla Neue Galerie di New York. Nel dicembre 1903 Klimt scrive da Ravenna ad Emilie Flöge dei mosaici di uno splendore inaudito – un’impressione che riecheggia in fondi d’oro come questo."
    ],
    "fact": "Olio, argento e oro su tela, 1907. Neue Galerie, New York.",
    "quote": {
      "text": "A Ravenna molto di misero – i mosaici di uno splendore inaudito.",
      "cite": "Cartolina ad Emilie Flöge, Ravenna, 2 dicembre 1903"
    }
  },
  "rosetrees": {
    "text": [
      "Sotto alte chiome fioriscono roseti, fogliame e fiori intessuti in un motivo denso, come un tappeto. Il quadro nasce intorno al 1905.",
      "È appeso al Musée d’Orsay di Parigi. Come nei pezzi di bosco dell’Attersee, l’orizzonte si ritrae assai indietro."
    ],
    "fact": "Olio su tela, intorno al 1905. Musée d’Orsay, Parigi."
  },
  "kiss": {
    "text": [
      "Una coppia si abbraccia al bordo di un prato fiorito, avvolta in vesti d’oro. Il quadro si chiama «Il bacio», è quadrato e nasce dal 1907 al 1908.",
      "Viene mostrato nel 1908 alla Kunstschau di Vienna. Lo Stato austriaco lo acquista sul posto per la Moderne Galerie, l’attuale Belvedere."
    ],
    "fact": "Olio su tela con foglia d’oro, 1907–1908. Österreichische Galerie Belvedere, Vienna.",
    "quote": {
      "text": "…che nessun ambito della vita umana è troppo insignificante o umile per offrire spazio agli sforzi artistici.",
      "cite": "Discorso inaugurale della Kunstschau, Vienna, 1° giugno 1908"
    }
  },
  "kissdetail": {
    "text": [
      "Il particolare mostra le teste della coppia de «Il bacio»: i volti vicini, l’oro della veste intorno a loro. L’intero quadro nasce dal 1907 al 1908.",
      "Il 1° giugno 1908 Klimt inaugura la Kunstschau a Vienna. Nel discorso festivo dice che nessun ambito della vita umana è troppo insignificante per offrire spazio agli sforzi artistici. «Il bacio» vi è mostrato e lo Stato lo acquista."
    ],
    "fact": "Olio su tela con foglia d’oro, dettaglio, 1907–1908. Österreichische Galerie Belvedere, Vienna.",
    "quote": {
      "text": "…che nessun ambito della vita umana è troppo insignificante o umile per offrire spazio agli sforzi artistici.",
      "cite": "Discorso inaugurale della Kunstschau, Vienna, 1° giugno 1908"
    }
  },
  "kgarden": {
    "text": [
      "Un giardino rustico appare come un denso tappeto di papaveri, campanule e fogliame, quasi senza orizzonte. Il quadro nasce intorno al 1905-1907.",
      "Appartiene agli stessi anni degli altri pezzi di giardino e de «Il bacio». Si trova in collezione privata."
    ],
    "fact": "Olio su tela, intorno al 1905–1907. Collezione privata."
  },
  "sunfarm": {
    "text": [
      "In un giardino rustico stanno girasoli fra una vegetazione densa, quasi senza cielo libero. Il quadro nasce intorno al 1907.",
      "È appeso al Belvedere di Vienna. I pezzi di giardino di questi anni appartengono allo stesso ambito de «Il bacio» e della Kunstschau del 1908."
    ],
    "fact": "Olio su tela, intorno al 1907. Österreichische Galerie Belvedere, Vienna."
  },
  "ksunflower": {
    "text": [
      "Un solo girasole alto sta in un’aiuola densa, lo sguardo vicino alla pianta, l’orizzonte scomparso. Il quadro nasce intorno al 1907-1908.",
      "Appartiene al Belvedere di Vienna. Come nei quadri di giardino di questi anni, la pianta diventa un motivo ornamentale."
    ],
    "fact": "Olio su tela, intorno al 1907–1908. Österreichische Galerie Belvedere, Vienna."
  },
  "kpoppies": {
    "text": [
      "Un campo di papaveri splende in un denso tappeto di rosso, verde e piccoli fiori, senza un ampio orizzonte. Il quadro nasce nel 1907.",
      "È appeso al Belvedere di Vienna. Nello stesso anno Klimt porta a termine anche il ritratto dorato di Adele Bloch-Bauer."
    ],
    "fact": "Olio su tela, 1907. Österreichische Galerie Belvedere, Vienna."
  },
  "meadow": {
    "text": [
      "Un prato in fiore riempie tutta la superficie, erbe e fiori stretti, il cielo appena visibile. Il quadro nasce intorno al 1908.",
      "Si trova in collezione privata. Anche questo pezzo di prato appartiene agli anni intorno alla Kunstschau."
    ],
    "fact": "Olio su tela, intorno al 1908. Collezione privata."
  },
  "stocletexp": {
    "text": [
      "Una donna in piedi, in una veste riccamente ornata, volta la testa, le mani alzate. Il modello si chiama «L’attesa» e appartiene al fregio Stoclet.",
      "Klimt progetta il fregio per la sala da pranzo del Palais Stoclet a Bruxelles, una casa di Josef Hoffmann e della Wiener Werkstätte per Adolphe Stoclet. I modelli li conserva il MAK di Vienna."
    ],
    "fact": "Modello per il fregio Stoclet, intorno al 1905–1911. MAK – Museo di arti applicate, Vienna."
  },
  "stocletembrace": {
    "text": [
      "Una coppia sta strettamente abbracciata in un manto ornato, i volti vicini. Il modello si chiama «L’abbraccio» o «L’adempimento».",
      "Appartiene al fregio della sala da pranzo del Palais Stoclet a Bruxelles. Insieme all’«Attesa» e all’Albero della vita forma il nucleo del ciclo. Il modello è al MAK di Vienna."
    ],
    "fact": "Modello per il fregio Stoclet, intorno al 1905–1911. MAK – Museo di arti applicate, Vienna."
  },
  "stoclettree": {
    "text": [
      "Un albero stilizzato con rami avvolti a spirale riempie la superficie, fra i rami sedili e segni. Il modello dell’Albero della vita nasce dal 1910 al 1911.",
      "È uno dei nove cartoni per l’esecuzione del fregio Stoclet. L’Albero della vita unisce le scene dell’Attesa e dell’Abbraccio. Il MAK di Vienna conserva i cartoni."
    ],
    "fact": "Cartone per il fregio Stoclet, 1910–1911. MAK – Museo di arti applicate, Vienna."
  },
  "stocletritter": {
    "text": [
      "Un cavaliere in armatura ornata sta eretto, scudo e veste in chiare forme geometriche. Il modello appartiene ai cartoni del fregio Stoclet.",
      "Nasce dal 1910 al 1911 e si trova al MAK di Vienna. Il fregio stesso viene installato nella sala da pranzo del Palais Stoclet a Bruxelles."
    ],
    "fact": "Cartone per il fregio Stoclet, 1910–1911. MAK – Museo di arti applicate, Vienna."
  },
  "stocletrose": {
    "text": [
      "Un roseto appare come un ornamento piano di fiori, foglie e viticci, senza spazio profondo. Il modello appartiene ai cartoni del fregio Stoclet del 1910-1911.",
      "Motivi di giardino e di piante percorrono il fregio accanto alle scene figurate. Il MAK di Vienna conserva il modello."
    ],
    "fact": "Cartone per il fregio Stoclet, 1910–1911. MAK – Museo di arti applicate, Vienna."
  },
  "featherboa": {
    "text": [
      "Una donna con un grande cappello e un boa di piume guarda di lato fuori dal quadro, il volto vicino e chiaro su un fondo scuro. Il ritratto nasce nel 1909.",
      "Si trova in collezione privata. Nello stesso anno Klimt viaggia in Spagna e scrive da Toledo ad Emilie Flöge: «El Greco è magnifico!»"
    ],
    "fact": "Olio su tela, 1909. Collezione privata.",
    "quote": {
      "text": "El Greco è magnifico!",
      "cite": "Cartolina ad Emilie Flöge, Toledo, 1909"
    }
  },
  "barbarafloege": {
    "text": [
      "Barbara Flöge, la madre di Emilie Flöge, appare come una donna anziana in abito scuro, lo sguardo calmo, il fondo semplice. Il ritratto nasce nel 1915.",
      "Dal 1904 Emilie dirige con le sorelle Helene e Pauline il salone di moda «Schwestern Flöge» nella Casa Piccola della Mariahilfer Strasse; gli ambienti li progettano Josef Hoffmann e Koloman Moser."
    ],
    "fact": "Olio su tela, 1915. Collezione non determinata."
  },
  "thepark": {
    "text": [
      "Un parco di chiome dense riempie la superficie fino al bordo, il bosco di tronchi diventa un tessuto ornamentale. Il quadro nasce nel 1910 o prima.",
      "Appartiene al Museum of Modern Art di New York. Anche in questi anni Klimt trascorre le estati con la famiglia Flöge all’Attersee."
    ],
    "fact": "Olio su tela, 1910 o prima. Museum of Modern Art, New York."
  },
  "kammer2": {
    "text": [
      "Schloss Kammer si erge con i muri chiari e i tetti rossi sulla riva del lago, l’acqua e gli alberi in colori calmi e piatti. Il quadro nasce nel 1909.",
      "È la seconda di una serie di vedute del palazzo sulla riva nord dell’Attersee. Si trova in collezione privata."
    ],
    "fact": "Olio su tela, 1909. Collezione privata."
  },
  "kammer3": {
    "text": [
      "Il palazzo appare di nuovo dal lago, la facciata e gli alberi come chiari campi di colore, lo specchio dell’acqua calmo. Il quadro nasce nel 1910.",
      "È appeso al Belvedere di Vienna. Klimt ripete il motivo in più versioni, ciascuna con un taglio e una luce diversi."
    ],
    "fact": "Olio su tela, 1910. Österreichische Galerie Belvedere, Vienna."
  },
  "kammer4": {
    "text": [
      "Un’altra veduta del palazzo all’Attersee: gli edifici fra gli alberi, il lago in primo piano, i colori forti e piatti. Il quadro nasce nel 1910.",
      "Si trova in collezione privata. Insieme alle altre versioni mostra con quale costanza Klimt raffigura la stessa riva."
    ],
    "fact": "Olio su tela, 1910. Collezione privata."
  },
  "kammerave": {
    "text": [
      "Un viale alberato conduce verso Schloss Kammer, i tronchi a sinistra e a destra, in fondo la facciata chiara. Il quadro nasce nel 1912.",
      "È appeso al Belvedere di Vienna. Questa volta lo sguardo non parte dal lago, ma attraverso il parco verso il palazzo."
    ],
    "fact": "Olio su tela, 1912. Österreichische Galerie Belvedere, Vienna."
  },
  "kammerpark": {
    "text": [
      "Nel parco di Schloss Kammer gli alberi stanno fitti, il suolo chiaro, il cielo quasi coperto. Il quadro nasce nel 1910.",
      "Appartiene alla Neue Galerie di New York. Come in «Il parco», il fogliame diventa un tessuto ornamentale."
    ],
    "fact": "Olio su tela, 1910. Neue Galerie, New York."
  },
  "watercastle": {
    "text": [
      "Un palazzo chiaro si erge sull’acqua o in essa, circondato da alberi, il riflesso calmo. Il quadro nasce dal 1908 al 1909.",
      "Appartiene alla Galleria nazionale di Praga. Il motivo è nella stessa epoca delle prime vedute di Schloss Kammer."
    ],
    "fact": "Olio su tela, 1908–1909. Galleria nazionale di Praga."
  },
  "oefarm": {
    "text": [
      "Una casa colonica dell’Alta Austria si erge fra alberi e giardino, i muri chiari, il tetto scuro, l’intorno densamente vegetato. Il quadro nasce intorno al 1911.",
      "È appeso al Belvedere di Vienna. Oltre alle vedute del palazzo, Klimt dipinge all’Attersee anche case semplici e giardini."
    ],
    "fact": "Olio su tela, intorno al 1911. Österreichische Galerie Belvedere, Vienna."
  },
  "kapple": {
    "text": [
      "Un melo riempie la superficie di fogliame e frutti, il tronco al centro, il cielo visibile solo negli interstizi. Il quadro nasce intorno al 1912.",
      "Si trova in collezione privata. Il motivo dell’albero unico risale al melo d’oro del 1903."
    ],
    "fact": "Olio su tela, intorno al 1912. Collezione privata."
  },
  "kapple2": {
    "text": [
      "Di nuovo un melo sta denso nel quadro, il fogliame più forte di colore, la forma più sciolta che nella versione precedente. Il quadro nasce intorno al 1916.",
      "Si chiama anche «Il melo». I pezzi tardi di alberi appartengono alle ultime estati all’Attersee."
    ],
    "fact": "Olio su tela, intorno al 1916. Collezione non determinata."
  },
  "malcesine": {
    "text": [
      "Il paese di Malcesine sta sulla riva scoscesa del lago di Garda, case e cipressi sopra l’acqua, le montagne dietro. Il quadro nasce nel 1913, in un viaggio al lago.",
      "L’originale brucia nel 1945 al palazzo di Immendorf, in Bassa Austria. Resta, fra l’altro, questa fotografia storica."
    ],
    "fact": "Olio su tela, 1913. Fotografia storica; l’originale bruciò nel 1945 al palazzo di Immendorf."
  },
  "cassone": {
    "text": [
      "La chiesa di Cassone si erge sul lago di Garda, le case del paese strette intorno a essa, l’acqua e i pendii in chiari campi di colore. Il quadro nasce nel 1913.",
      "Cassone si trova sulla riva orientale del lago, non lontano da Malcesine. Il quadro si trova in collezione privata."
    ],
    "fact": "Olio su tela, 1913. Collezione privata."
  },
  "italygarden": {
    "text": [
      "Un giardino italiano appare in densi cespugli, fiori e sentieri, senza una vasta veduta. Il quadro nasce nel 1913, l’anno del viaggio al lago di Garda.",
      "Appartiene al Kunsthaus Zug. Come i pezzi di giardino dell’Attersee, la vegetazione diventa un tappeto ornamentale."
    ],
    "fact": "Olio su tela, 1913. Kunsthaus Zug."
  },
  "unterach": {
    "text": [
      "Le case di Unterach stanno fitte sulla riva sud, le facciate chiare, i tetti scuri, il paese come un motivo di colore. Il quadro nasce intorno al 1916.",
      "Unterach sta di fronte a Schloss Kammer, sull’altra riva dell’Attersee. Il 1916 è l’ultima estate condivisa di Klimt con Emilie Flöge al lago."
    ],
    "fact": "Olio su tela, intorno al 1916. Collezione non determinata."
  },
  "ualslope": {
    "text": [
      "Un pendio boscoso presso Unterach sale nel quadro, tronchi e fogliame come un motivo denso, senza una vasta veduta del lago. Il quadro nasce nel 1916.",
      "Si trova in collezione privata. I pezzi tardi di bosco sono più scuri e più sciolti dei primi boschi di betulle e di faggi."
    ],
    "fact": "Olio su tela, 1916. Collezione privata."
  },
  "litzlberg": {
    "text": [
      "Litzlberg appare come una veduta del luogo all’Attersee, case, alberi e riva in colori piatti. Il quadro nasce intorno al 1915.",
      "Litzlberg si trova all’Attersee, non lontano da Seewalchen e Kammer. Il quadro si trova in collezione privata."
    ],
    "fact": "Olio su tela, intorno al 1915. Collezione privata."
  },
  "litzkeller": {
    "text": [
      "Il Litzlbergkeller, una locanda all’Attersee, si erge fra gli alberi sulla riva, la facciata chiara, il fogliame denso. Il quadro nasce dal 1915 al 1916.",
      "È appeso al Leopold Museum di Vienna. Anche questo pezzo di riva appartiene alle estati tarde al lago."
    ],
    "fact": "Olio su tela, 1915–1916. Leopold Museum, Vienna."
  },
  "weissenbach": {
    "text": [
      "Una casa del guardaboschi a Weissenbach si erge fra alberi e prato, i muri chiari, il tetto marcato. Il quadro nasce intorno al 1914 e si chiama anche «Casa del guardaboschi a Weissenbach II».",
      "Weissenbach si trova sull’Attersee meridionale. Klimt dipinge la casa in più di una versione."
    ],
    "fact": "Olio su tela, intorno al 1914. Collezione non determinata."
  },
  "pfarrgarten": {
    "text": [
      "Un giardino parrocchiale si stende davanti a una cima, aiuole, sentieri e alberi strettamente uniti, la collina sullo sfondo. Il quadro nasce intorno al 1916.",
      "Appartiene ai paesaggi di giardino tardi in cui Klimt tiene lo sguardo vicino alle aiuole e ai pendii."
    ],
    "fact": "Olio su tela, intorno al 1916. Collezione non determinata."
  },
  "mada": {
    "text": [
      "La giovane Mäda Primavesi sta in un abito chiaro, a motivo floreale, le gambe leggermente divaricate, lo sguardo fermo. Il ritratto nasce intorno al 1912-1913.",
      "Appartiene al Metropolitan Museum of Art di New York. Mäda è la figlia di Otto e Eugenia Primavesi, importanti committenti di Klimt; la famiglia lo riceve anche a Winkelsdorf."
    ],
    "fact": "Olio su tela, intorno al 1912–1913. Metropolitan Museum of Art, New York."
  },
  "adele2": {
    "text": [
      "Adele Bloch-Bauer sta in un abito colorato e ornato davanti a un fondo altrettanto colorato, senza il tappeto d’oro del primo ritratto. Il ritratto nasce nel 1912.",
      "Si trova in collezione privata. Cinque anni dopo il primo ritratto dorato, Klimt mostra Adele nei colori più vivaci dei suoi ritratti successivi."
    ],
    "fact": "Olio su tela, 1912. Collezione privata."
  },
  "eugenia": {
    "text": [
      "Eugenia Primavesi siede in un abito a motivo luminoso, il fondo ornamentale e colorato. Il ritratto nasce intorno al 1913-1914.",
      "Appartiene al Museo civico d’arte di Toyota. Eugenia e Otto Primavesi sono fra gli importanti committenti di Klimt in questi anni."
    ],
    "fact": "Olio su tela, intorno al 1913–1914. Museo civico d’arte di Toyota."
  },
  "fmbeer": {
    "text": [
      "Friederike Maria Beer sta in un abito riccamente ornato, il fondo riempito di motivi dell’Asia orientale. Il ritratto nasce nel 1916.",
      "È appeso al Tel Aviv Museum of Art. Nei ritratti tardi Klimt riprende spesso motivi e figure dell’Asia orientale, che anche colleziona."
    ],
    "fact": "Olio su tela, 1916. Tel Aviv Museum of Art."
  },
  "ladyfan": {
    "text": [
      "Una donna con ventaglio appare davanti a un fondo di motivi dell’Asia orientale, fra cui un uccello alla maniera di una fenice. Il quadro nasce dal 1917 al 1918.",
      "Si trova in collezione privata. Appartiene agli ultimi ritratti compiuti e mostra quanto forte diventi il mondo dei motivi dell’Asia orientale in questi anni."
    ],
    "fact": "Olio su tela, 1917–1918. Collezione privata."
  },
  "dancer": {
    "text": [
      "Una ballerina sta in una veste colorata, dipinta con scioltezza, il fondo ornamentale, la posa eretta. Il quadro nasce intorno al 1916-1917.",
      "Appartiene alla Neue Galerie di New York. Anche qui si mescolano il ritratto figurato e il motivo piano degli anni tardi."
    ],
    "fact": "Olio su tela, intorno al 1916–1917. Neue Galerie, New York."
  },
  "riamunk3": {
    "text": [
      "Ria Munk appare in un abito fiorito davanti a un fondo denso e colorato; il ritratto del 1917 resta incompiuto. Maria («Ria») Munk muore nel 1911, ancora giovane.",
      "Dopo la sua morte Klimt dipinge più ritratti, fra cui questo tardo e incompiuto. Si trova in collezione privata."
    ],
    "fact": "Olio su tela, 1917, incompiuto. Collezione privata."
  },
  "deathfig": {
    "text": [
      "La Morte sta come una figura sottile e oscura, con teschio e un motivo di croci, lo sguardo rivolto all’altra metà del quadro. Il particolare mostra solo questa figura de «Morte e vita».",
      "L’intero quadro nasce intorno al 1910 e più tardi viene rielaborato; è appeso al Leopold Museum di Vienna. L’altra metà, con il gruppo dei vivi, è qui omessa."
    ],
    "fact": "Olio su tela, particolare, intorno al 1910–1915. Leopold Museum, Vienna."
  },
  "riamunkbed": {
    "text": [
      "Ria Munk giace esposta, il volto calmo, fiori intorno al cuscino e alla veste. Il quadro nasce nel 1912, l’anno dopo la sua morte.",
      "Si trova in collezione privata. Più tardi segue il ritratto incompiuto «Ria Munk III» del 1917."
    ],
    "fact": "Olio su tela, 1912. Collezione privata."
  },
  "staude": {
    "text": [
      "Johanna Staude siede in una camicetta a motivo colorato, lo sguardo fermo, il fondo in parte aperto. Il ritratto del 1917-1918 resta incompiuto.",
      "È appeso al Belvedere di Vienna. Molti ritratti degli ultimi mesi Klimt li lascia incompiuti."
    ],
    "fact": "Olio su tela, 1917–1918, incompiuto. Österreichische Galerie Belvedere, Vienna."
  },
  "zuckerkandl": {
    "text": [
      "Amalie Zuckerkandl appare in un abito chiaro, la testa e le spalle elaborate, la parte inferiore e il fondo ancora aperti. Il ritratto resta incompiuto.",
      "È appeso al Belvedere di Vienna. Amalie Zuckerkandl apparteneva al circolo viennese intorno alla famiglia Zuckerkandl, al quale Klimt era legato da tempo."
    ],
    "fact": "Olio su tela, 1917–1918, incompiuto. Österreichische Galerie Belvedere, Vienna."
  },
  "kbaby": {
    "text": [
      "Un bambino giace in una culla sotto un denso tappeto di coperte e motivi, il volto piccolo nel flusso del colore. Il quadro nasce dal 1917 al 1918.",
      "Appartiene alla National Gallery of Art di Washington. È uno degli ultimi quadri compiuti."
    ],
    "fact": "Olio su tela, 1917–1918. National Gallery of Art, Washington."
  },
  "ladyhead": {
    "text": [
      "Una testa di donna in una stesura sciolta del colore, i capelli e il volto avvicinati nel quadro. Il lavoro nasce nel 1917.",
      "È appeso al LENTOS Kunstmuseum di Linz. Anche negli ultimi mesi Klimt disegna e dipinge teste di forma breve e aperta."
    ],
    "fact": "Olio su tela, 1917. LENTOS Kunstmuseum Linz."
  },
  "ladypiacenza": {
    "text": [
      "Una dama con cappello guarda dal quadro, il volto calmo, il fondo in toni chiari e spezzati. Il ritratto nasce nel 1917.",
      "Appartiene alla Galleria d’Arte Moderna Ricci Oddi di Piacenza."
    ],
    "fact": "Olio su tela, 1917. Galleria d’Arte Moderna Ricci Oddi, Piacenza."
  },
  "ladywhite": {
    "text": [
      "Una donna in un abito bianco siede volta verso lo spettatore, gran parte della superficie resta aperta. Il ritratto degli anni 1917-1918 resta incompiuto.",
      "È appeso al Belvedere di Vienna. Il 30 dicembre 1917 Klimt scrive da Winkelsdorf ad Emilie Flöge e le augura un «anno nuovo il più, il più felice – come ne abbiamo entrambi così urgentemente bisogno»."
    ],
    "fact": "Olio su tela, intorno al 1917–1918, incompiuto. Österreichische Galerie Belvedere, Vienna.",
    "quote": {
      "text": "…un saluto uscito dal più intimo e [ti] auguro un anno nuovo il più, il più felice. – come ne abbiamo entrambi così urgentemente bisogno.",
      "cite": "Lettera ad Emilie Flöge, Winkelsdorf, 30 dicembre 1917"
    }
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
