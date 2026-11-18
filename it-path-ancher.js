// v10.23 IT content for Anna Ancher’s life journey, Part 1 (1859–1935). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Standort ohne Angabe": "Collocazione non indicata",
  "Skagens Museum": "Museo di Skagen"
});
  P.works = Object.assign(P.works || {}, {
  "aagulls": {
    "title": "Vecchia coppia che spiuma gabbiani",
    "museum": "Collocazione non indicata"
  },
  "aablind": {
    "title": "Una donna cieca nella sua stanza",
    "museum": "Collocazione non indicata"
  },
  "aamaid": {
    "title": "La domestica in cucina",
    "museum": "Collocazione non indicata"
  },
  "aaoldwoman": {
    "title": "Una vecchia nella sua stanza",
    "museum": "Collocazione non indicata"
  },
  "aasunlight": {
    "title": "Sole nella stanza blu",
    "museum": "Collocazione non indicata"
  },
  "aahedvig": {
    "title": "Ritratto di Ane Hedvig Brøndum",
    "museum": "Museo di Skagen"
  },
  "aamoeller": {
    "title": "Valdemar Schønheyder Møller",
    "museum": "Collocazione non indicata"
  },
  "aaharvest": {
    "title": "I mietitori",
    "museum": "Collocazione non indicata"
  },
  "aabrother": {
    "title": "Il fratellino",
    "museum": "Collocazione non indicata"
  },
  "aasew": {
    "title": "Due bambine imparano a cucire",
    "museum": "Collocazione non indicata"
  },
  "aaclematis": {
    "title": "Interno con clematidi",
    "museum": "Collocazione non indicata"
  },
  "aablue": {
    "title": "La signora Ane Brøndum nella stanza blu",
    "museum": "Collocazione non indicata"
  },
  "aaannex": {
    "title": "Interno. L’annesso di Brøndum",
    "museum": "Collocazione non indicata"
  }
});
  P.paths = P.paths || {};
  P.paths.ancher = {
  "title": "Il percorso di vita di Anna Ancher",
  "life": "1859–1935",
  "part": "Parte 1 · Luce nelle stanze di Skagen",
  "subtitle": "Skagen, la stanza blu e la sua gente",
  "intro": "Viaggia con Anna Ancher, la pittrice di Skagen, all’estremo nord della Danimarca: dai vecchi pescatori, attraverso cucina e stanza, fino alla luce del sole nella stanza blu. Brevi tappe e quadri da colorare. Questa prima parte segue il suo sguardo sulla luce degli interni.",
  "ending": [
    "Anna Ancher muore il 15 aprile 1935 a Skagen, dove ha trascorso tutta la vita. È considerata una delle grandi pittrici della Danimarca.",
    "Il percorso può ancora crescere. Altri ritratti, pastelli e paesaggi potranno seguire in una parte successiva."
  ],
  "epilogue": "Il 15 aprile 1935 Anna Ancher muore a Skagen. Una parte successiva potrà aggiungere altri ritratti e pastelli."
};
  P.stations = Object.assign(P.stations || {}, {
  "aaskagen": {
    "place": "Skagen · Primi quadri",
    "when": "1859–1884",
    "mapLabel": "Skagen",
    "intro": [
      "Anna Brøndum nasce a Skagen il 18 agosto 1859. I genitori vi gestiscono una locanda dove alloggiano molti pittori.",
      "Nel 1880 sposa il pittore Michael Ancher e dipinge i vecchi pescatori del suo paese."
    ]
  },
  "aakueche": {
    "place": "Cucina e stanza",
    "when": "1883–1888",
    "mapLabel": "Stanze",
    "intro": [
      "Nel 1883 nasce la figlia Helga. Ancher continua a dipingere nelle piccole stanze di Skagen.",
      "La luce di finestre e porte diventa il suo segno distintivo."
    ]
  },
  "aablau": {
    "place": "La stanza blu",
    "when": "1889–1893",
    "mapLabel": "Stanza blu",
    "intro": [
      "Nel 1889 Ancher studia a Parigi con Pierre Puvis de Chavannes. In seguito il suo colore diventa più chiaro.",
      "Nella stanza blu della casa dei genitori dipinge la figlia, la madre e gli ospiti."
    ]
  },
  "aaarbeit": {
    "place": "Lavoro e bambini",
    "when": "1905–1910",
    "mapLabel": "Campi",
    "intro": [
      "Dopo il 1900 Ancher dipinge anche all’aperto, nei campi vicino a Skagen. Bambini e lavoro quotidiano restano importanti.",
      "Il suo modo diventa più libero e forte."
    ]
  },
  "aaspaet": {
    "place": "Interni tardi",
    "when": "1913–1935",
    "mapLabel": "Albergo",
    "intro": [
      "Negli ultimi anni Ancher dipinge interni chiari e liberi, pieni di fiori e di sole.",
      "Resta a Skagen fino alla morte nel 1935."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "aagulls": {
    "text": [
      "Lars Gaihede e la vecchia Lene siedono insieme e spiumano gabbiani. Il lavoro è semplice, la luce quieta.",
      "Anna Ancher dipinge la gente di Skagen, che conosce fin dall’infanzia."
    ],
    "fact": "1883. Collocazione non indicata."
  },
  "aablind": {
    "text": [
      "Una donna cieca siede nella sua stanza, la luce cade dalla finestra sul suo volto e sulle mani.",
      "Ancher dipinge dignità e quiete, senza ostentare compassione."
    ],
    "fact": "1883. Collocazione non indicata."
  },
  "aamaid": {
    "text": [
      "Una giovane donna sta in cucina, una luce viva entra dalla finestra dietro di lei. Ci volge le spalle.",
      "Il quadro mostra quanto presto Ancher faccia della luce nella stanza il suo vero soggetto."
    ],
    "fact": "1883–1886. Collocazione non indicata."
  },
  "aaoldwoman": {
    "text": [
      "Una vecchia siede in silenzio nella sua piccola stanza. Mobili, parete e luce raccontano una lunga vita.",
      "Ancher torna continuamente a questi interni quieti."
    ],
    "fact": "1888. Collocazione non indicata."
  },
  "aasunlight": {
    "text": [
      "Una bambina siede nella stanza blu e lavora all’uncinetto, il sole disegna un motivo chiaro su parete e pavimento. È uno dei quadri più famosi di Ancher.",
      "Sua figlia Helga le fa da modella."
    ],
    "fact": "1891. Collocazione non indicata."
  },
  "aahedvig": {
    "text": [
      "Ane Hedvig Brøndum è la madre di Anna Ancher. Con il marito gestiva la locanda di Skagen.",
      "Per molti anni la madre diventa una delle sue modelle più importanti."
    ],
    "fact": "1893. Museo di Skagen."
  },
  "aamoeller": {
    "text": [
      "Un giovane siede nella luce di una stanza. Ancher lo dipinge con calma e attenzione.",
      "Anche i suoi ritratti vivono di luce e spazio."
    ],
    "fact": "1893. Collocazione non indicata."
  },
  "aaharvest": {
    "text": [
      "Dei mietitori stanno nella chiara luce estiva del campo. Per una volta Ancher dipinge all’aperto e in grande formato.",
      "I colori sono forti e liberi."
    ],
    "fact": "1905. Collocazione non indicata."
  },
  "aabrother": {
    "text": [
      "Una bambina si prende cura del fratellino. La scena è quotidiana e tenera.",
      "Bambini e famiglia sono tra i soggetti prediletti di Ancher."
    ],
    "fact": "1905. Collocazione non indicata."
  },
  "aasew": {
    "text": [
      "Due bambine imparano a cucire alla finestra. La luce cade sulle mani e sulla stoffa.",
      "Ancher mostra i lavori quieti della vita quotidiana con grande attenzione."
    ],
    "fact": "circa 1910. Collocazione non indicata."
  },
  "aaclematis": {
    "text": [
      "Una donna sta in una stanza luminosa, alla finestra fioriscono clematidi. Colori e luce sembrano freschi.",
      "Negli ultimi anni gli interni di Ancher diventano più liberi e colorati."
    ],
    "fact": "1913. Collocazione non indicata."
  },
  "aablue": {
    "text": [
      "L’anziana madre siede nella stanza blu, lo spazio che Ancher ha dipinto tanto spesso.",
      "Vent’anni dopo il primo ritratto, la figlia torna da lei."
    ],
    "fact": "1913. Collocazione non indicata."
  },
  "aaannex": {
    "text": [
      "Una stanza quieta nell’annesso dell’albergo Brøndum, sole su mobili e parete. Non ci sono persone.",
      "Nell’opera tarda la luce stessa diventa l’unica abitante del quadro."
    ],
    "fact": "circa 1920. Collocazione non indicata."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
