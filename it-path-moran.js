// v10.43 IT content for Thomas Moran’s life journey (1837–1926). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Cooper Hewitt, Smithsonian Design Museum, New York": "Cooper Hewitt, Smithsonian Design Museum, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Smithsonian American Art Museum, Washington": "Smithsonian American Art Museum, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "tmecclesbourne": {
    "title": "Scogliere di Ecclesbourne vicino a Hastings",
    "museum": "National Gallery of Art, Washington"
  },
  "tmjuniata": {
    "title": "Il Juniata, sera",
    "museum": "National Gallery of Art, Washington"
  },
  "tmtowerfalls": {
    "title": "Sopra le cascate Tower, Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmtower": {
    "title": "Torre alle cascate Tower, Yellowstone",
    "museum": "National Gallery of Art, Washington"
  },
  "tmmammoth": {
    "title": "Mammoth Hot Springs, Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmminerva": {
    "title": "Terrazza Minerva, Yellowstone",
    "museum": "National Gallery of Art, Washington"
  },
  "tmexcelsior": {
    "title": "Geyser Excelsior, parco di Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmgardiner": {
    "title": "Sorgenti calde del fiume Gardiner, Yellowstone",
    "museum": "National Gallery of Art, Washington"
  },
  "tmsierras": {
    "title": "Vetta della Sierra",
    "museum": "Art Institute of Chicago"
  },
  "tmhalfdome": {
    "title": "Half Dome, Yosemite",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmgodland": {
    "title": "Shin-Au-Av-Tu-Weap (Terra di Dio), canyon del Colorado",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmpowell": {
    "title": "Veduta dall’altopiano di Powell, Grand Canyon",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmriovirgin": {
    "title": "Scogliere del Rio Virgin, sud dello Utah",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmvirgincanyon": {
    "title": "Canyon del Rio Virgin, sud dello Utah",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmfortgeorge": {
    "title": "Isola Fort George, Florida",
    "museum": "Cleveland Museum of Art"
  },
  "tmtetons": {
    "title": "I Teton, Idaho",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmruby": {
    "title": "La catena Ruby, Nevada",
    "museum": "Cleveland Museum of Art"
  },
  "tmcottonwood": {
    "title": "L’estremità superiore del canyon Little Cottonwood, catena Wasatch",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmgreenriver": {
    "title": "Green River, territorio del Wyoming",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmgreencliffs": {
    "title": "Scogliere del Green River, Wyoming",
    "museum": "National Gallery of Art, Washington"
  },
  "tmupperco": {
    "title": "Scogliere dell’alto Colorado, territorio del Wyoming",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmsanfrancisco": {
    "title": "Vicino a San Francisco, Messico",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmsea": {
    "title": "Il mare risonante",
    "museum": "National Gallery of Art, Washington"
  },
  "tmhacienda": {
    "title": "Una hacienda messicana, lago di Cuitzeo",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmvenice88": {
    "title": "Veduta di Venezia",
    "museum": "National Gallery of Art, Washington"
  },
  "tmholycross": {
    "title": "Monte della Santa Croce",
    "museum": "National Gallery of Art, Washington"
  },
  "tmvenice91": {
    "title": "Una veduta di Venezia",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmkanab": {
    "title": "Nebbia nel canyon Kanab, Utah",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmhotsprings": {
    "title": "Sorgenti calde, Yellowstone",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmsmelting": {
    "title": "Fonderia a Denver",
    "museum": "Cleveland Museum of Art"
  },
  "tmtoltec": {
    "title": "Gola Toltec ed Eva Cliff da ovest, Colorado",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmgrandcanyon": {
    "title": "Il Grand Canyon dello Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmrainbow": {
    "title": "Arcobaleno sul Grand Canyon dello Yellowstone",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmsangiorgio": {
    "title": "Venezia dalla torre di San Giorgio",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmbrightangel": {
    "title": "Guardando in su lungo il sentiero Bright Angel, Grand Canyon",
    "museum": "Cooper Hewitt, Smithsonian Design Museum, New York"
  },
  "tmcuernavaca": {
    "title": "Valle di Cuernavaca",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "tmsunset": {
    "title": "Nuvola al tramonto, Green River, Wyoming",
    "museum": "Smithsonian American Art Museum, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.moran = {
  "title": "Il percorso di vita di Thomas Moran",
  "part": "Le meraviglie del West",
  "subtitle": "Da Yellowstone al Grand Canyon e a Venezia",
  "intro": "Viaggia nella vita di Thomas Moran: da Filadelfia alle sorgenti calde di Yellowstone, nei canyon del West, in Messico e a Venezia. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Thomas Moran muore a Santa Barbara, in California, il 25 agosto 1926.",
    "Oggi una vetta della catena Teton porta il suo nome: il monte Moran."
  ],
  "epilogue": "Thomas Moran muore a Santa Barbara il 25 agosto 1926. Il percorso porta da Filadelfia, passando per Yellowstone e il Grand Canyon, fino al Messico e a Venezia.",
  "life": "1837–1926"
};
  P.stations = Object.assign(P.stations || {}, {
  "tms1": {
    "place": "Da Bolton a Filadelfia",
    "when": "1837–1870",
    "mapLabel": "Filadelfia",
    "intro": [
      "Thomas Moran nasce a Bolton, in Inghilterra, il 12 febbraio 1837; nel 1844 la famiglia emigra negli Stati Uniti e più tardi si stabilisce vicino a Filadelfia.",
      "Impara in una bottega di incisione su legno a Filadelfia e nel 1862 va in Inghilterra per vedere i quadri di William Turner."
    ]
  },
  "tms2": {
    "place": "Le sorgenti calde di Yellowstone",
    "when": "1871–1873",
    "mapLabel": "Yellowstone",
    "intro": [
      "Nel 1871 Moran parte con la spedizione del geologo Ferdinand Hayden nella regione di Yellowstone.",
      "I suoi schizzi e le fotografie di William Henry Jackson contribuiscono a far sì che nel 1872 il Congresso renda Yellowstone il primo parco nazionale."
    ]
  },
  "tms3": {
    "place": "Yosemite, lo Utah e il Grand Canyon",
    "when": "1872–1875",
    "mapLabel": "Grand Canyon",
    "intro": [
      "Nel 1873 Moran accompagna l’esploratore John Wesley Powell nel sud dello Utah e al Grand Canyon.",
      "Ritrae ad acquerello anche la valle di Yosemite e le montagne della Sierra Nevada, in California."
    ]
  },
  "tms4": {
    "place": "La Florida e le Montagne Rocciose",
    "when": "1878–1881",
    "mapLabel": "Wyoming",
    "intro": [
      "Oltre al West, Moran dipinge anche le coste e le palme della Florida.",
      "Nel 1879 attraversa Idaho, Utah, Nevada e Wyoming e riempie molti fogli di schizzi ad acquerello."
    ]
  },
  "tms5": {
    "place": "Messico, Long Island e Venezia",
    "when": "1882–1891",
    "mapLabel": "East Hampton",
    "intro": [
      "Nel 1883 Moran va a Cuba e in Messico, e dal 1884 ha una casa con studio a East Hampton, su Long Island.",
      "Nel 1886 va per la prima volta a Venezia, che poi dipinge molte volte."
    ]
  },
  "tms6": {
    "place": "Di nuovo a Yellowstone",
    "when": "1892–1901",
    "mapLabel": "Yellowstone",
    "intro": [
      "Nel 1892 Moran torna a Yellowstone con il fotografo William Henry Jackson e disegna di nuovo il canyon dello Yellowstone.",
      "Nello stesso anno dipinge anche in Colorado e nello Utah."
    ]
  },
  "tms7": {
    "place": "Ultimi viaggi",
    "when": "1900–1926",
    "mapLabel": "Arizona",
    "intro": [
      "Anche da anziano Moran continua a viaggiare, soprattutto al Grand Canyon, in Arizona.",
      "Dipinge fino a tarda età e muore nel 1926 a Santa Barbara, in California."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "tmecclesbourne": {
    "text": [
      "Colline e scogliere grigioverdi si stendono lungo la costa meridionale dell’Inghilterra, vicino a Hastings.",
      "Moran esegue il foglio a grafite, acquerellatura d’inchiostro e gouache su carta grigia."
    ],
    "fact": "1862. National Gallery of Art, Washington."
  },
  "tmjuniata": {
    "text": [
      "Un’ampia valle si apre tra pendii boscosi, e le rocce brillano nella luce della sera.",
      "Il Juniata è un fiume della Pennsylvania."
    ],
    "fact": "1864. National Gallery of Art, Washington."
  },
  "tmtowerfalls": {
    "text": [
      "Un’alta guglia di roccia appuntita si alza sopra l’acqua spumeggiante.",
      "Sullo sfondo a destra una cascata precipita in basso."
    ],
    "fact": "1872. Smithsonian American Art Museum, Washington."
  },
  "tmtower": {
    "text": [
      "Una torre di roccia rossastra si alza sulla riva di un fiume selvaggio.",
      "Moran dipinge il foglio ad acquerello e gouache bianca su carta blu."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "tmmammoth": {
    "text": [
      "Terrazze bianche e vasche azzurre si stendono davanti a una montagna scura.",
      "Le sorgenti calde di Mammoth depositano calcare che sembra formare dei gradini."
    ],
    "fact": "1872. Smithsonian American Art Museum, Washington."
  },
  "tmminerva": {
    "text": [
      "In un campo rotondo si vedono terrazze colorate con piccole vasche d’acqua.",
      "La terrazza Minerva fa parte delle sorgenti calde di Mammoth, a Yellowstone."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "tmexcelsior": {
    "text": [
      "Il vapore sale sopra un’ampia valle, e a destra c’è un alto pino.",
      "Il geyser Excelsior si trova in uno dei bacini di geyser del parco di Yellowstone."
    ],
    "fact": "1873. Smithsonian American Art Museum, Washington."
  },
  "tmgardiner": {
    "text": [
      "Terrazze bianche, arancioni e rosse salgono lungo un pendio.",
      "Piccole figure sul bordo mostrano quanto sono grandi le terrazze."
    ],
    "fact": "1873. National Gallery of Art, Washington."
  },
  "tmsierras": {
    "text": [
      "Montagne innevate si alzano dietro abeti scuri e rocce.",
      "Moran dipinge il foglio a gouache sopra un disegno a grafite."
    ],
    "fact": "1872–1875. Art Institute of Chicago."
  },
  "tmhalfdome": {
    "text": [
      "La cima di granito dell’Half Dome si alza nella valle di Yosemite tra massi e abeti.",
      "Sullo sfondo ci sono montagne innevate."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmgodland": {
    "text": [
      "Rocce rosse si innalzano sopra un vasto altopiano sotto un cielo scuro.",
      "Il foglio, stretto e lungo, mostra la terra lungo il Colorado come un panorama."
    ],
    "fact": "1873–1874. Smithsonian American Art Museum, Washington."
  },
  "tmpowell": {
    "text": [
      "Lo sguardo scende dall’altopiano di Powell fino in fondo al Grand Canyon.",
      "L’altopiano porta il nome dell’esploratore John Wesley Powell."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmriovirgin": {
    "text": [
      "Una fila di scogliere erose si alza sopra un altopiano nel sud dello Utah.",
      "In basso un torrente scorre in un canyon profondo."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmvirgincanyon": {
    "text": [
      "Un gruppo di cavalieri attraversa il Rio Virgin in un punto poco profondo.",
      "A sinistra si alzano alte scogliere bianche."
    ],
    "fact": "1873. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmfortgeorge": {
    "text": [
      "Alte palme e cespugli stanno su un’altura sabbiosa in Florida.",
      "Sopra di loro passano grandi nuvole bianche."
    ],
    "fact": "1878. Cleveland Museum of Art."
  },
  "tmtetons": {
    "text": [
      "Oltre una valle fluviale piatta si vedono le cime azzurre dei Teton.",
      "Le catene davanti sono viola e azzurre, e l’acqua è verde."
    ],
    "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmruby": {
    "text": [
      "Una lunga catena montuosa spoglia si alza sopra una pianura del Nevada.",
      "Le nuvole coprono le cime."
    ],
    "fact": "1879. Cleveland Museum of Art."
  },
  "tmcottonwood": {
    "text": [
      "Lo sguardo passa oltre un bordo roccioso verso tre cime dai riflessi viola.",
      "Moran annota sul foglio la data: 13 agosto 1879."
    ],
    "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmgreenriver": {
    "text": [
      "Rocce a strisce rosse e bianche si specchiano nell’acqua del Green River, nel Wyoming.",
      "Sopra si stende un cielo azzurro."
    ],
    "fact": "1879. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmgreencliffs": {
    "text": [
      "Le scogliere del Green River brillano dorate alla luce del sole.",
      "Davanti a esse un gruppo di cavalieri attraversa la pianura."
    ],
    "fact": "1881. National Gallery of Art, Washington."
  },
  "tmupperco": {
    "text": [
      "Alte scogliere brillano sotto un cielo scuro di temporale, e davanti alcuni cavalieri riposano presso il fiume.",
      "Si tratta del Green River, chiamato anche alto Colorado."
    ],
    "fact": "1882. Smithsonian American Art Museum, Washington."
  },
  "tmsanfrancisco": {
    "text": [
      "Una strada sterrata sale su una collina fino a un carro, e a sinistra una chiesa di missione si staglia contro monti spogli.",
      "Moran data il foglio al 1° marzo 1883."
    ],
    "fact": "1883. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmsea": {
    "text": [
      "Alte onde si infrangono schiumando su una spiaggia piatta.",
      "Sopra incombe un cielo grigio."
    ],
    "fact": "1884. National Gallery of Art, Washington."
  },
  "tmhacienda": {
    "text": [
      "Attraverso un arco di alberi scuri si vede una hacienda soleggiata sulla riva del lago di Cuitzeo, in Messico.",
      "Davanti una figura solitaria siede all’ombra accanto a una vasca d’acqua."
    ],
    "fact": "1885. Smithsonian American Art Museum, Washington."
  },
  "tmvenice88": {
    "text": [
      "Cupole, torri e barche dalle vele rosse si specchiano nella laguna di Venezia.",
      "Moran dipinge il foglio ad acquerello e gouache bianca."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "tmholycross": {
    "text": [
      "Sopra una cascata si alza il Monte della Santa Croce, in Colorado.",
      "Il monte deve il nome a due canaloni pieni di neve che insieme sembrano una croce."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "tmvenice91": {
    "text": [
      "Barche dalle vele colorate sono davanti a Venezia, e all’orizzonte si vedono cupole e torri.",
      "Moran sposta un poco alcuni edifici perché il quadro sembri più bello."
    ],
    "fact": "1891. Smithsonian American Art Museum, Washington."
  },
  "tmkanab": {
    "text": [
      "La nebbia sale tra le alte pareti rocciose del canyon Kanab, nello Utah.",
      "In basso l’acqua scorre tra grandi pietre."
    ],
    "fact": "1892. Smithsonian American Art Museum, Washington."
  },
  "tmhotsprings": {
    "text": [
      "Al centro brilla una sorgente calda con vapore e depositi bianchi, rossi e gialli.",
      "Moran data il foglio al 21 luglio 1892."
    ],
    "fact": "1892. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmsmelting": {
    "text": [
      "Da alte ciminiere sale fumo scuro sopra una pianura.",
      "Qui Moran non mostra una meraviglia naturale, ma un impianto industriale vicino a Denver, in Colorado."
    ],
    "fact": "1892. Cleveland Museum of Art."
  },
  "tmtoltec": {
    "text": [
      "Sotto un cielo grigio si apre un burrone profondo davanti a una parete rocciosa frastagliata.",
      "In lontananza brillano macchie bianche su un monte lontano."
    ],
    "fact": "1892. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmgrandcanyon": {
    "text": [
      "Pareti di roccia gialle e bianche scendono a picco nel canyon dello Yellowstone, e sul fondo precipita una cascata.",
      "Il grande quadro è largo più di quattro metri."
    ],
    "fact": "1893–1901. Smithsonian American Art Museum, Washington."
  },
  "tmrainbow": {
    "text": [
      "Un arcobaleno si stende sopra le rocce chiare del Grand Canyon dello Yellowstone.",
      "Foschia e luce fanno brillare le rocce quasi di bianco."
    ],
    "fact": "1900. Smithsonian American Art Museum, Washington."
  },
  "tmsangiorgio": {
    "text": [
      "Dalla torre di San Giorgio Maggiore si guarda Venezia al di là dell’acqua.",
      "Le barche a vela stanno tranquille nella laguna."
    ],
    "fact": "1900. Smithsonian American Art Museum, Washington."
  },
  "tmbrightangel": {
    "text": [
      "Lo sguardo sale dal fondo di una gola del Grand Canyon fino alle alte rocce.",
      "Moran data il foglio a maggio 1901."
    ],
    "fact": "1901. Cooper Hewitt, Smithsonian Design Museum, New York."
  },
  "tmcuernavaca": {
    "text": [
      "Lo sguardo passa sopra colline verdi fino in fondo alla valle di Cuernavaca, in Messico.",
      "All’orizzonte le nuvole passano sopra i monti."
    ],
    "fact": "1903. Smithsonian American Art Museum, Washington."
  },
  "tmsunset": {
    "text": [
      "Una nuvola rosso arancio del tramonto sta sopra le rocce del Green River, nel Wyoming.",
      "Moran dipinge il piccolo quadro a circa ottant’anni."
    ],
    "fact": "1917. Smithsonian American Art Museum, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
