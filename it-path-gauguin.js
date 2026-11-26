// v10.43 IT content for Paul Gauguin’s life journey (1848–1903). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Musée d’Orsay, Paris": "Musée d’Orsay, Parigi",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "ggtankard": {
    "title": "Natura morta: boccale di legno e brocca di metallo",
    "museum": "Art Institute of Chicago"
  },
  "ggpeonies": {
    "title": "Natura morta con peonie",
    "museum": "National Gallery of Art, Washington"
  },
  "gggleaner": {
    "title": "Una spigolatrice bretone",
    "museum": "National Gallery of Art, Washington"
  },
  "ggkohler": {
    "title": "Madame Alexandre Kohler",
    "museum": "National Gallery of Art, Washington"
  },
  "ggbrittany": {
    "title": "Paesaggio di Bretagna",
    "museum": "National Gallery of Art, Washington"
  },
  "ggdancing": {
    "title": "Ragazze bretoni che danzano, Pont-Aven",
    "museum": "National Gallery of Art, Washington"
  },
  "ggcarriere": {
    "title": "Autoritratto dedicato a Carrière",
    "museum": "National Gallery of Art, Washington"
  },
  "ggarles": {
    "title": "Arlesiane (Mistral)",
    "museum": "Art Institute of Chicago"
  },
  "ggselfport": {
    "title": "Autoritratto",
    "museum": "National Gallery of Art, Washington"
  },
  "gghaystacks": {
    "title": "Covoni in Bretagna",
    "museum": "National Gallery of Art, Washington"
  },
  "ggpouldu": {
    "title": "Paesaggio a Le Pouldu",
    "museum": "National Gallery of Art, Washington"
  },
  "ggcezanne": {
    "title": "Donna davanti a una natura morta di Cézanne",
    "museum": "Art Institute of Chicago"
  },
  "arearea": {
    "title": "Arearea (Allegria)",
    "museum": "Musée d’Orsay, Parigi"
  },
  "ggraaurahi": {
    "title": "Te raau rahi (Il grande albero)",
    "museum": "Art Institute of Chicago"
  },
  "gglargetree": {
    "title": "Il grande albero",
    "museum": "Cleveland Museum of Art"
  },
  "ggtahland": {
    "title": "Paesaggio tahitiano",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ggburao": {
    "title": "Te burao (L’ibisco)",
    "museum": "Art Institute of Chicago"
  },
  "ggsiesta": {
    "title": "La siesta",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gghut": {
    "title": "Capanna tahitiana",
    "museum": "Art Institute of Chicago"
  },
  "ggfarm": {
    "title": "Una fattoria in Bretagna",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ggteapot": {
    "title": "Natura morta con teiera e frutta",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ggpolynes": {
    "title": "Donna polinesiana con bambini",
    "museum": "Art Institute of Chicago"
  },
  "ggtwowomen": {
    "title": "Due donne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ggfan": {
    "title": "Progetto per un ventaglio con paesaggio e una statua della dea Hina",
    "museum": "Art Institute of Chicago"
  }
});
  P.paths = P.paths || {};
  P.paths.gauguin = {
  "title": "Il cammino di Paul Gauguin",
  "part": "Da Parigi a Tahiti, passando per la Bretagna",
  "subtitle": "Nature morte, Bretagna e mari del Sud",
  "intro": "Viaggia nella vita di Paul Gauguin: da pittore della domenica a Parigi, passando per la Bretagna e Arles, fino a Tahiti. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Paul Gauguin muore l’8 maggio 1903 sull’isola di Hiva Oa.",
    "I suoi colori intensi e piatti influenzano molti pittori dopo di lui."
  ],
  "epilogue": "Paul Gauguin muore l’8 maggio 1903 sull’isola di Hiva Oa. Il percorso porta dalle nature morte di Parigi ai mari del Sud, passando per la Bretagna e Arles.",
  "life": "1848–1903"
};
  P.stations = Object.assign(P.stations || {}, {
  "ggs1": {
    "place": "Parigi: pittore della domenica",
    "when": "1848–1885",
    "mapLabel": "Parigi",
    "intro": [
      "Paul Gauguin nasce a Parigi il 7 giugno 1848 e trascorre alcuni anni dell’infanzia in Perù.",
      "Da giovane lavora alla Borsa di Parigi e dipinge nel tempo libero."
    ]
  },
  "ggs2": {
    "place": "Pont-Aven, in Bretagna",
    "when": "1886–1888",
    "mapLabel": "Bretagna",
    "intro": [
      "Nel 1883 Gauguin lascia il lavoro e diventa pittore.",
      "Dal 1886 dipinge a Pont-Aven, un villaggio della Bretagna dove vivono molti artisti."
    ]
  },
  "ggs3": {
    "place": "Arles con Van Gogh",
    "when": "1888",
    "mapLabel": "Arles",
    "intro": [
      "Nell’ottobre 1888 Gauguin si reca ad Arles, nel sud della Francia, da Vincent van Gogh.",
      "I due dipingono insieme per circa due mesi, poi si separano dopo un litigio."
    ]
  },
  "ggs4": {
    "place": "Le Pouldu, sul mare",
    "when": "1889–1890",
    "mapLabel": "Bretagna",
    "intro": [
      "Tornato in Bretagna, Gauguin si trasferisce nel piccolo villaggio costiero di Le Pouldu.",
      "Dipinge campi, covoni e sé stesso, con colori sempre più intensi."
    ]
  },
  "gauguin1": {
    "place": "Tahiti",
    "when": "1891–1893",
    "mapLabel": "Tahiti",
    "intro": [
      "Nel 1891 Gauguin parte per Tahiti, in cerca di una vita lontana dalla grande città moderna.",
      "Dipinge grandi alberi, capanne e gli abitanti dell’isola con colori luminosi."
    ]
  },
  "ggs6": {
    "place": "Di nuovo in Francia",
    "when": "1893–1895",
    "mapLabel": "Bretagna",
    "intro": [
      "Nel 1893 Gauguin torna in Francia ed espone a Parigi i suoi quadri di Tahiti.",
      "Dipinge di nuovo anche in Bretagna."
    ]
  },
  "ggs7": {
    "place": "Di nuovo nei mari del Sud",
    "when": "1895–1903",
    "mapLabel": "Tahiti · Hiva Oa",
    "intro": [
      "Nel 1895 Gauguin lascia l’Europa per sempre e torna a vivere a Tahiti.",
      "Nel 1901 si trasferisce sull’isola di Hiva Oa, nelle Marchesi."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ggtankard": {
    "text": [
      "Un boccale di legno con coperchio e una piccola brocca di metallo stanno su un tavolo.",
      "Gauguin dipinge il quadro quando lavora ancora alla Borsa."
    ],
    "fact": "1880. Art Institute of Chicago."
  },
  "ggpeonies": {
    "text": [
      "Un mazzo di peonie rosse e rosa sta in un vaso davanti a una parete azzurra.",
      "Sulla parete dietro sono appesi due piccoli quadri."
    ],
    "fact": "1884. National Gallery of Art, Washington."
  },
  "gggleaner": {
    "text": [
      "Una contadina con la cuffia bianca si china molto in avanti.",
      "Il foglio è diviso in quadrati, così Gauguin può riportare la figura con precisione in un altro quadro."
    ],
    "fact": "1886. National Gallery of Art, Washington."
  },
  "ggkohler": {
    "text": [
      "Una donna in abito grigio siede davanti a uno sfondo rosso.",
      "Tiene le mani in grembo e guarda di lato."
    ],
    "fact": "1887–1888. National Gallery of Art, Washington."
  },
  "ggbrittany": {
    "text": [
      "Un ruscello tranquillo riflette colline e alberi.",
      "Il cielo è chiaro, quasi bianco."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "ggdancing": {
    "text": [
      "Tre ragazze in costume bretone danzano tenendosi per mano su un prato.",
      "A destra corre un cagnolino, a sinistra si alza un campanile."
    ],
    "fact": "1888. National Gallery of Art, Washington."
  },
  "ggcarriere": {
    "text": [
      "Gauguin si ritrae con i capelli folti e un maglione giallo a righe.",
      "In alto a sinistra c’è una dedica all’amico, il pittore Eugène Carrière."
    ],
    "fact": "1888 o 1889. National Gallery of Art, Washington."
  },
  "ggarles": {
    "text": [
      "Donne di Arles attraversano un giardino avvolte in scialli scuri.",
      "Il maestrale del titolo è un vento freddo del sud della Francia."
    ],
    "fact": "1888. Art Institute of Chicago."
  },
  "ggselfport": {
    "text": [
      "Gauguin si ritrae con un’aureola sopra la testa, accanto pendono delle mele.",
      "Tra le dita tiene un piccolo serpente."
    ],
    "fact": "1889. National Gallery of Art, Washington."
  },
  "gghaystacks": {
    "text": [
      "Grandi covoni si alzano su campi in molte tonalità di verde e giallo.",
      "Davanti si vedono delle mucche."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "ggpouldu": {
    "text": [
      "Colline, campi e piccole case si stendono sotto un cielo ampio.",
      "Le Pouldu è un villaggio sulla costa della Bretagna."
    ],
    "fact": "1890. National Gallery of Art, Washington."
  },
  "ggcezanne": {
    "text": [
      "Una donna in camicetta rosa siede su una sedia e ci guarda.",
      "Dietro di lei è appesa una natura morta con frutta di Paul Cézanne."
    ],
    "fact": "1890. Art Institute of Chicago."
  },
  "arearea": {
    "text": [
      "Due donne tahitiane sono sedute su un prato; davanti, un cane rosso.",
      "Una di loro suona il flauto; sullo sfondo alcune donne venerano una figura di dio."
    ],
    "fact": "1892. Musée d’Orsay, Parigi."
  },
  "ggraaurahi": {
    "text": [
      "Sotto alberi alti alcune persone siedono nell’erba; davanti è sdraiato un animale.",
      "Sullo sfondo c’è una capanna tra palme e cespugli."
    ],
    "fact": "1891. Art Institute of Chicago."
  },
  "gglargetree": {
    "text": [
      "Davanti a una lunga capanna alcune persone stanno in piedi e sedute sotto un grande albero.",
      "Il terreno risplende rossastro tra i tronchi."
    ],
    "fact": "1891. Cleveland Museum of Art."
  },
  "ggtahland": {
    "text": [
      "Due donne camminano lungo un sentiero, accanto pascola un cavallo.",
      "Dietro si alzano montagne verdi."
    ],
    "fact": "1892. Metropolitan Museum of Art, New York."
  },
  "ggburao": {
    "text": [
      "In primo piano si stendono i rami intrecciati di un ibisco.",
      "Dietro si vedono capanne, alberi e un tratto di mare."
    ],
    "fact": "1892. Art Institute of Chicago."
  },
  "ggsiesta": {
    "text": [
      "Alcune donne riposano su una veranda ombreggiata nel caldo di mezzogiorno.",
      "Una donna con il cappello di paglia siede di spalle."
    ],
    "fact": "circa 1892–1894. Metropolitan Museum of Art, New York."
  },
  "gghut": {
    "text": [
      "Una capanna con il tetto di paglia sta tra gli alberi, davanti siede una persona.",
      "Gauguin dipinge questo foglio ad acquerello."
    ],
    "fact": "1891–1893. Art Institute of Chicago."
  },
  "ggfarm": {
    "text": [
      "I tetti rossi delle case coloniche risplendono tra alberi scuri.",
      "Sullo sfondo si alzano alberi alti e slanciati."
    ],
    "fact": "circa 1894. Metropolitan Museum of Art, New York."
  },
  "ggteapot": {
    "text": [
      "Una teiera blu, della frutta e un cucchiaio sono su un panno bianco.",
      "Sulla parete blu scuro dietro risplendono fiori gialli."
    ],
    "fact": "1896. Metropolitan Museum of Art, New York."
  },
  "ggpolynes": {
    "text": [
      "Una donna anziana in abito blu tiene un bambino piccolo in grembo.",
      "Accanto a lei c’è una bambina in abito rosa."
    ],
    "fact": "1901. Art Institute of Chicago."
  },
  "ggtwowomen": {
    "text": [
      "Due donne siedono vicine, una in blu e una in arancione.",
      "Dietro di loro crescono piante dalle foglie grandi."
    ],
    "fact": "1901 o 1902. Metropolitan Museum of Art, New York."
  },
  "ggfan": {
    "text": [
      "Un paesaggio colorato riempie il foglio curvo, al centro c’è la statua di una dea.",
      "Gauguin dipinge il progetto ad acquerello e guazzo."
    ],
    "fact": "1900–1903. Art Institute of Chicago."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
