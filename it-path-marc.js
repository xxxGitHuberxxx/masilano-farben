// v10.35 IT Franz Marc Lebensweg, promoted from the story chapter.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "grazing": {
    "title": "Cavalli al pascolo I",
    "museum": "Städtische Galerie im Lenbachhaus, Monaco di Baviera"
  },
  "bluehorse": {
    "title": "Cavallo blu I",
    "museum": "Städtische Galerie im Lenbachhaus, Monaco di Baviera"
  },
  "largeblue": {
    "title": "I grandi cavalli blu",
    "museum": "Walker Art Center, Minneapolis"
  },
  "tiger": {
    "title": "La tigre",
    "museum": "Städtische Galerie im Lenbachhaus, Monaco di Baviera"
  },
  "foxes": {
    "title": "Le volpi",
    "museum": "Collocazione attuale non confermata pubblicamente"
  },
  "fate": {
    "title": "Destini di animali",
    "museum": "Kunstmuseum Basel"
  },
  "deer": {
    "title": "Cervi nel bosco II",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "forms": {
    "title": "Forme in lotta",
    "museum": "Pinakothek der Moderne, Monaco di Baviera"
  }
});
  P.paths = P.paths || {};
  P.paths.marc = {
  "title": "Il cammino di Franz Marc",
  "life": "1880–1916",
  "part": "Monaco e il Cavaliere azzurro",
  "subtitle": "Una vita da pittore in 8 quadri",
  "intro": "Dipingiti attraverso la vita di Franz Marc: dai cavalli in colori naturali fino agli animali di un blu luminoso e ai quadri quasi astratti di prima della guerra. Prima di ogni quadro scopri dove vive in quel momento e come cambia la sua arte. Ogni quadro finito sblocca il capitolo successivo.",
  "ending": [
    "Dopo la sua morte Maria Marc si occupa dell’opera. Molti dei quadri di animali diventeranno poi ampiamente noti, soprattutto i cavalli blu. Nel periodo del nazionalsocialismo l’arte di Franz Marc viene definita «degenerata» e tolta dai musei tedeschi. Il suo grande quadro «La torre dei cavalli blu» è scomparso dal 1945. Restano i quadri che hai dipinto qui: un cammino dai cavalli al pascolo fino alle forme in lotta, e l’idea che il colore possa essere una forza spirituale."
  ],
  "epilogue": "Dopo la sua morte Maria Marc si occupa dell’opera. Molti dei quadri di animali diventeranno poi ampiamente noti, soprattutto i cavalli blu. Nel periodo del nazionalsocialismo l’arte di Franz Marc viene definita «degenerata» e tolta dai musei tedeschi. Il suo grande quadro «La torre dei cavalli blu» è scomparso dal 1945. Restano i quadri che hai dipinto qui: un cammino dai cavalli al pascolo fino alle forme in lotta, e l’idea che il colore possa essere una forza spirituale."
};
  P.stations = Object.assign(P.stations || {}, {
  "marc-grazing": {
    "place": "Sindelsdorf, Alta Baviera",
    "when": "1910",
    "mapLabel": "Sindelsdorf, Alta Baviera",
    "intro": [
      "Franz Marc nasce a Monaco nel 1880. Suo padre Wilhelm è pittore di paesaggi, e Franz pensa prima a uno studio di teologia. Alla fine si decide comunque per l’arte: nel 1901 entra all’Accademia di belle arti di Monaco. Dopo un viaggio a Parigi lascia di nuovo l’Accademia e cerca la propria via."
    ]
  },
  "marc-bluehorse": {
    "place": "Sindelsdorf",
    "when": "1911",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "Nel dicembre 1910 Franz scrive al suo nuovo amico, il pittore August Macke, una lettera sul significato dei colori. Il blu sarebbe il principio maschile, austero e spirituale. Il giallo, il femminile, dolce, sereno e sensuale. Il rosso, la materia, brutale e pesante, che il blu e il giallo devono vincere."
    ]
  },
  "marc-largeblue": {
    "place": "Sindelsdorf",
    "when": "1911",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "Nel dicembre 1911 avviene la rottura con la Neue Künstlervereinigung München. Insieme a Kandinskij, Gabriele Münter e altri, Franz inaugura il 18 dicembre, nella galleria Thannhauser, la prima esposizione della redazione «Il Cavaliere Azzurro»."
    ]
  },
  "marc-tiger": {
    "place": "Sindelsdorf",
    "when": "1912",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "Nell’autunno 1912 Franz parte per Parigi con August Macke. Là conoscono il pittore Robert Delaunay, i cui colori luminosi, spezzati in faccette, impressionano fortemente entrambi."
    ]
  },
  "marc-foxes": {
    "place": "Sindelsdorf",
    "when": "1913",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "Nel 1913 i quadri di Franz Marc diventano ancora più audaci. Le forme si spezzano in cristalli, i colori splendono e si urtano con durezza. Due volpi sembrano intrecciate; all’inizio quasi si devono cercare."
    ]
  },
  "marc-fate": {
    "place": "Sindelsdorf",
    "when": "1913",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "Nello stesso anno nasce «Destini di animali». Tra forme acute e minacciose si riconoscono animali; al centro, un capriolo che allunga il capo ben in alto. Sul retro del quadro Franz scrive: «E ogni essere è sofferenza in fiamme»."
    ]
  },
  "marc-deer": {
    "place": "Ried, presso Kochel",
    "when": "1914",
    "mapLabel": "Ried, presso Kochel",
    "intro": [
      "All’inizio del 1914 Franz e Maria si trasferiscono a Ried, non lontano da Kochel am See. Là nascono i suoi ultimi grandi quadri, alcuni ancora con animali, altri già quasi senza soggetto."
    ]
  },
  "marc-forms": {
    "place": "Ried, presso Kochel",
    "when": "1914",
    "mapLabel": "Ried, presso Kochel",
    "intro": [
      "A Ried, nel 1914, Franz dipinge diversi quadri che consistono quasi soltanto di colore e movimento: forme liete, giocose, in lotta e spezzate. Nel presente quadro un rosso luminoso e un blu scuro profondo si scontrano."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "grazing": {
      "text": [
        "Franz Marc nasce a Monaco nel 1880. Suo padre Wilhelm è pittore di paesaggi, e Franz pensa prima a uno studio di teologia. Alla fine si decide comunque per l’arte: nel 1901 entra all’Accademia di belle arti di Monaco. Dopo un viaggio a Parigi lascia di nuovo l’Accademia e cerca la propria via.",
        "Nel 1910 si trasferisce con la pittrice Maria Franck, che più tardi diventerà sua moglie, a Sindelsdorf, in Alta Baviera. Là, in campagna, trova il suo soggetto: gli animali. Gli sembrano più puri e più belli degli esseri umani.",
        "In «Cavalli al pascolo» gli animali sono ancora dipinti in toni naturali di bruno e giallo. Un anno dopo i suoi cavalli saranno blu."
      ],
      "fact": "Durante il servizio militare Franz Marc imparò a cavalcare. Così scoprì il suo amore per i cavalli, che non lo lasciò più per il resto della vita."
    },
    "bluehorse": {
      "text": [
        "Nel dicembre 1910 Franz scrive al suo nuovo amico, il pittore August Macke, una lettera sul significato dei colori. Il blu sarebbe il principio maschile, austero e spirituale. Il giallo, il femminile, dolce, sereno e sensuale. Il rosso, la materia, brutale e pesante, che il blu e il giallo devono vincere.",
        "All’inizio del 1911 incontra a Monaco Vasilij Kandinskij. L’incontro cambierà la sua vita.",
        "Con «Cavallo blu I» mette in pratica la sua teoria del colore: il cavallo non è più bruno, ma di un blu luminoso. Il colore dice qualcosa della sua essenza, non del suo manto."
      ],
      "fact": "Nello stesso anno nasce anche «Cavallo blu II». Oggi è appeso al Kunstmuseum di Berna."
    },
    "largeblue": {
      "text": [
        "Nel dicembre 1911 avviene la rottura con la Neue Künstlervereinigung München. Insieme a Kandinskij, Gabriele Münter e altri, Franz inaugura il 18 dicembre, nella galleria Thannhauser, la prima esposizione della redazione «Il Cavaliere Azzurro».",
        "Kandinskij racconta più tardi che trovarono il nome al tavolo del caffè a Sindelsdorf: entrambi amavano il blu, Marc i cavalli, lui i cavalieri.",
        "Nel maggio 1912 esce l’almanacco «Il Cavaliere Azzurro», che Marc e Kandinskij curano insieme. In quei mesi Franz dipinge «I grandi cavalli blu»: tre animali potenti, interamente nel suo blu spirituale."
      ],
      "fact": "La prima esposizione del Cavaliere Azzurro girò poi diverse città, tra cui Colonia e Berlino."
    },
    "tiger": {
      "text": [
        "Nell’autunno 1912 Franz parte per Parigi con August Macke. Là conoscono il pittore Robert Delaunay, i cui colori luminosi, spezzati in faccette, impressionano fortemente entrambi.",
        "«La tigre» mostra quanto Franz, in quel periodo, si apra alle forme spigolose del cubismo. L’animale è accucciato, teso, tra piani di colore taglienti, come se potesse saltare da un momento all’altro.",
        "Poco prima il quadro era stato visto all’esposizione del Sonderbund a Colonia, una delle importanti rassegne dell’arte moderna in Germania."
      ],
      "fact": "Franz Marc dipinse la tigre nel 1912 a Sindelsdorf. Oggi il quadro è appeso alla Städtische Galerie im Lenbachhaus di Monaco."
    },
    "foxes": {
      "text": [
        "Nel 1913 i quadri di Franz Marc diventano ancora più audaci. Le forme si spezzano in cristalli, i colori splendono e si urtano con durezza. Due volpi sembrano intrecciate; all’inizio quasi si devono cercare.",
        "In quei mesi non pensa soltanto a singoli animali, ma al grande tessuto della natura. Allo stesso tempo aiuta a Berlino a preparare il «Primo Salone d’autunno tedesco», una grande esposizione internazionale d’arte moderna.",
        "«Le volpi» appartengono ai quadri in cui l’animale sta già quasi diventando forma pura."
      ],
      "fact": "Dal 1962 il quadro appartenne al Museum Kunstpalast di Düsseldorf. Nel 2022 la città lo restituì agli eredi del collezionista ebreo Kurt Grawi; nel marzo 2022 fu battuto all’asta da Christie’s a Londra. La sua collocazione attuale non è confermata pubblicamente."
    },
    "fate": {
      "text": [
        "Nello stesso anno nasce «Destini di animali». Tra forme acute e minacciose si riconoscono animali; al centro, un capriolo che allunga il capo ben in alto. Sul retro del quadro Franz scrive: «E ogni essere è sofferenza in fiamme».",
        "Il quadro è appeso nel 1913 al Primo Salone d’autunno tedesco a Berlino. Il titolo «Destini di animali» glielo dà l’amico Paul Klee.",
        "Più tardi, già in guerra, Franz scrive a Maria che il quadro gli pare un presagio di questa guerra: terribile e sconvolgente. Riesce a stento a concepire di averlo dipinto."
      ],
      "fact": "Nel 1917 il quadro fu danneggiato in un incendio. Paul Klee lo restaurò due anni dopo."
    },
    "deer": {
      "text": [
        "All’inizio del 1914 Franz e Maria si trasferiscono a Ried, non lontano da Kochel am See. Là nascono i suoi ultimi grandi quadri, alcuni ancora con animali, altri già quasi senza soggetto.",
        "«Cervi nel bosco II» mostra tre cervi in un bosco di verde, blu e rosso. Gli animali sembrano calmi, saldamente inseriti nei colori del bosco. È uno dei suoi ultimi quadri di animali.",
        "Nell’agosto 1914 inizia la guerra, e Franz Marc viene chiamato alle armi. A settembre cade il suo amico August Macke. La perdita lo colpisce profondamente."
      ],
      "fact": "In una lettera dal fronte, nel 1915, Franz scrisse che fin da giovane aveva trovato gli esseri umani brutti, e l’animale più bello e più puro. Poi aveva scoperto anche nell’animale tante cose avverse che i suoi quadri erano diventati da sé sempre più astratti."
    },
    "forms": {
      "text": [
        "A Ried, nel 1914, Franz dipinge diversi quadri che consistono quasi soltanto di colore e movimento: forme liete, giocose, in lotta e spezzate. Nel presente quadro un rosso luminoso e un blu scuro profondo si scontrano.",
        "La guerra interrompe quest’opera. Il 4 marzo 1916 Franz Marc è colpito da una scheggia di granata durante una ricognizione a cavallo vicino a Verdun. Ha soltanto 36 anni.",
        "Maria lo fa più tardi trasferire a Kochel am See. Là giace sepolto fino a oggi, non lontano dal paesaggio in cui nacquero tanti dei suoi quadri."
      ],
      "fact": "Nel 1986 fu aperto a Kochel am See il Franz Marc Museum. Mostra opere sue e di amici artisti della cerchia del Cavaliere Azzurro."
    }
  });
})();
