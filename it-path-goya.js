// v10.43 IT content for Francisco de Goya’s life journey (1746–1828). Faithful translation of DE/EN.
(function () {
  var P = window.IT = window.IT || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "Museo del Prado, Madrid": "Museo del Prado, Madrid",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "quitasol": {
    "title": "Il parasole",
    "museum": "Museo del Prado, Madrid"
  },
  "gywinter": {
    "title": "Scena invernale",
    "museum": "Art Institute of Chicago"
  },
  "gyram": {
    "title": "Ragazzo su un montone",
    "museum": "Art Institute of Chicago"
  },
  "gyteresa": {
    "title": "María Teresa de Borbón y Vallabriga",
    "museum": "National Gallery of Art, Washington"
  },
  "gypontejos": {
    "title": "La marchesa di Pontejos",
    "museum": "National Gallery of Art, Washington"
  },
  "gyaltamira": {
    "title": "La contessa di Altamira e sua figlia María Agustina",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gyosorio": {
    "title": "Manuel Osorio Manrique de Zuñiga",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gymartinez": {
    "title": "Sebastián Martínez y Pérez",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gyambrose": {
    "title": "Sant’Ambrogio",
    "museum": "Cleveland Museum of Art"
  },
  "gynoriega": {
    "title": "Don Antonio Noriega",
    "museum": "National Gallery of Art, Washington"
  },
  "gysureda": {
    "title": "Bartolomé Sureda y Miserol",
    "museum": "National Gallery of Art, Washington"
  },
  "gysuredaw": {
    "title": "Thérèse Louise de Sureda",
    "museum": "National Gallery of Art, Washington"
  },
  "gygarcini": {
    "title": "Ignacio Garcini y Queralt, brigadiere del genio",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gyjosefa": {
    "title": "Josefa de Castilla Portugal y van Asbrock de Garcini",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gynarcisa": {
    "title": "Narcisa Barañano Gayoso de Goicoechea",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gymantilla": {
    "title": "Giovane donna con mantiglia e basquiña",
    "museum": "National Gallery of Art, Washington"
  },
  "gymaiquez": {
    "title": "Ritratto di Isidoro Máiquez",
    "museum": "Art Institute of Chicago"
  },
  "gysabasa": {
    "title": "Señora Sabasa García",
    "museum": "National Gallery of Art, Washington"
  },
  "gyguye": {
    "title": "Victor Guye",
    "museum": "National Gallery of Art, Washington"
  },
  "gypepito": {
    "title": "José Costa y Bonells, detto Pepito",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "gyromero": {
    "title": "Ritratto del generale José Manuel Romero",
    "museum": "Art Institute of Chicago"
  },
  "gycuervo": {
    "title": "Ritratto di don Juan Antonio Cuervo",
    "museum": "Cleveland Museum of Art"
  },
  "gytiburcio": {
    "title": "Tiburcio Pérez y Cuervo, l’architetto",
    "museum": "Metropolitan Museum of Art, New York"
  }
});
  P.paths = P.paths || {};
  P.paths.goya = {
  "title": "Il percorso di vita di Francisco de Goya",
  "part": "Dai cartoni per arazzi al pittore di corte",
  "subtitle": "Bozzetti, bambini e ritratti dalla Spagna",
  "intro": "Viaggia nella vita di Francisco de Goya: dai cartoni allegri per arazzi e dai ritratti per la nobiltà e la corte fino agli anni di guerra a Madrid. Questo percorso è più breve di altri, perché solo pochi quadri di Goya sono disponibili come immagini libere di musei. Le immagini provengono da musei che mettono liberamente a disposizione le loro riproduzioni.",
  "ending": [
    "Francisco de Goya muore a Bordeaux il 16 aprile 1828.",
    "I suoi ritratti mostrano le persone del suo tempo, dai bambini ai generali."
  ],
  "epilogue": "Francisco de Goya muore a Bordeaux il 16 aprile 1828. Il percorso porta dai cartoni per arazzi, passando per i ritratti per la nobiltà e la corte, agli ultimi anni.",
  "life": "1746–1828"
};
  P.stations = Object.assign(P.stations || {}, {
  "goya1": {
    "place": "Madrid: i cartoni per arazzi",
    "when": "1746–1787",
    "mapLabel": "Madrid",
    "intro": [
      "Francisco de Goya nasce il 30 marzo 1746 a Fuendetodos, vicino a Saragozza.",
      "Dal 1775 dipinge a Madrid cartoni per la manifattura reale di arazzi: scene allegre di vita quotidiana."
    ]
  },
  "gys2": {
    "place": "Ritratti per la nobiltà",
    "when": "1783–1788",
    "mapLabel": "Madrid",
    "intro": [
      "Sempre più famiglie nobili si fanno ritrarre da Goya, spesso con i figli e i cani.",
      "Nel 1786 diventa pittore del re."
    ]
  },
  "gys3": {
    "place": "Pittore di corte e grave malattia",
    "when": "1789–1799",
    "mapLabel": "Cadice",
    "intro": [
      "Nel 1789 Goya diventa pittore di corte. Nel 1792 si ammala gravemente e si riprende a Cadice, nella casa dell’amico Sebastián Martínez.",
      "Dopo la malattia è sordo."
    ]
  },
  "gys4": {
    "place": "Ritratti a Madrid",
    "when": "1800–1805",
    "mapLabel": "Madrid",
    "intro": [
      "Nel 1799 Goya diventa primo pittore di corte. Ora è il ritrattista più richiesto di Spagna.",
      "Dipinge funzionari, ufficiali, mercanti e le loro mogli."
    ]
  },
  "gys5": {
    "place": "Anni di guerra",
    "when": "1806–1812",
    "mapLabel": "Madrid",
    "intro": [
      "Nel 1808 le truppe francesi invadono la Spagna. La guerra dura fino al 1814.",
      "Goya resta a Madrid e continua a dipingere ritratti, anche di bambini."
    ]
  },
  "gys6": {
    "place": "Gli ultimi anni",
    "when": "1814–1828",
    "mapLabel": "Madrid · Bordeaux",
    "intro": [
      "Nel 1819 Goya compra una casa di campagna vicino a Madrid, la «Quinta del Sordo».",
      "Nel 1824 si trasferisce a Bordeaux, in Francia."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "quitasol": {
    "text": [
      "Un giovane tiene il parasole sopra una donna seduta, perché il sole non la abbagli.",
      "Il quadro è un cartone per un arazzo del palazzo reale del Pardo."
    ],
    "fact": "1777. Museo del Prado, Madrid."
  },
  "gywinter": {
    "text": [
      "Uomini in pesanti mantelli avanzano a fatica nella neve, con un cane al seguito.",
      "Il piccolo quadro è un bozzetto per un arazzo."
    ],
    "fact": "circa 1786. Art Institute of Chicago."
  },
  "gyram": {
    "text": [
      "Un ragazzo cavalca allegramente un montone scuro.",
      "Anche questo quadro è un cartone per un arazzo."
    ],
    "fact": "1786–1787. Art Institute of Chicago."
  },
  "gyteresa": {
    "text": [
      "Una bambina in un lungo abito da cerimonia sta davanti a un paesaggio di montagne.",
      "Accanto a lei siede un cane bianco."
    ],
    "fact": "1783. National Gallery of Art, Washington."
  },
  "gypontejos": {
    "text": [
      "Una giovane donna in un abito chiaro e ampio sta in un parco.",
      "Ai suoi piedi siede un piccolo carlino."
    ],
    "fact": "circa 1786. National Gallery of Art, Washington."
  },
  "gyaltamira": {
    "text": [
      "Una madre in abito di seta rosa siede su un divano con la figlia piccola in grembo.",
      "La stoffa rosa luccica nella luce."
    ],
    "fact": "1787–1788. Metropolitan Museum of Art, New York."
  },
  "gyosorio": {
    "text": [
      "Un bambino in abito rosso tiene una gazza legata a uno spago.",
      "A sinistra alcuni gatti fissano attenti l’uccello."
    ],
    "fact": "1787–1788. Metropolitan Museum of Art, New York."
  },
  "gymartinez": {
    "text": [
      "Il mercante Sebastián Martínez siede in una giacca chiara e tiene un foglio di carta.",
      "È un amico di Goya e colleziona quadri."
    ],
    "fact": "1792. Metropolitan Museum of Art, New York."
  },
  "gyambrose": {
    "text": [
      "Il vescovo Ambrogio, con un’alta mitra bianca, siede a un tavolo e scrive.",
      "La luce cade intensa sulla sua veste bianca."
    ],
    "fact": "circa 1796–1799. Cleveland Museum of Art."
  },
  "gynoriega": {
    "text": [
      "Un uomo in giacca scura siede a un tavolo con delle carte.",
      "È un alto funzionario delle finanze reali."
    ],
    "fact": "1801. National Gallery of Art, Washington."
  },
  "gysureda": {
    "text": [
      "Un giovane dai capelli ricci tiene il cappello in mano. La fodera risplende di rosso.",
      "Il suo ritratto ha un pendant: quello della moglie."
    ],
    "fact": "circa 1803–1804. National Gallery of Art, Washington."
  },
  "gysuredaw": {
    "text": [
      "Una donna in abito blu siede in una poltrona gialla.",
      "Il blu intenso e il giallo si fronteggiano luminosi."
    ],
    "fact": "circa 1803–1804. National Gallery of Art, Washington."
  },
  "gygarcini": {
    "text": [
      "Un ufficiale in uniforme scura sta davanti a uno sfondo scuro.",
      "Il suo ritratto ha un pendant: quello della moglie Josefa."
    ],
    "fact": "1804. Metropolitan Museum of Art, New York."
  },
  "gyjosefa": {
    "text": [
      "Una giovane donna in abito chiaro siede con i capelli chiari sciolti.",
      "Lo sfondo scuro fa risplendere l’abito."
    ],
    "fact": "1804. Metropolitan Museum of Art, New York."
  },
  "gynarcisa": {
    "text": [
      "Una donna in abito scuro con un grande cappello siede su una sedia gialla.",
      "Il cappello scuro si alza alto sopra la sua testa."
    ],
    "fact": "circa 1805. Metropolitan Museum of Art, New York."
  },
  "gymantilla": {
    "text": [
      "Una giovane donna porta una mantiglia bianca di pizzo sui capelli e una gonna nera.",
      "Mantiglia e basquiña sono capi spagnoli dell’epoca."
    ],
    "fact": "circa 1800–1805. National Gallery of Art, Washington."
  },
  "gymaiquez": {
    "text": [
      "L’attore Isidoro Máiquez ci guarda con sguardo vivace.",
      "È uno degli attori più famosi di Spagna."
    ],
    "fact": "circa 1807. Art Institute of Chicago."
  },
  "gysabasa": {
    "text": [
      "Una giovane donna dagli occhi scuri porta uno scialle giallo acceso sulle spalle.",
      "Un velo chiaro le copre i capelli."
    ],
    "fact": "circa 1806–1811. National Gallery of Art, Washington."
  },
  "gyguye": {
    "text": [
      "Un bambino in uniforme scura con alamari dorati tiene un libro.",
      "Sta dritto e ha un’aria seria."
    ],
    "fact": "1810. National Gallery of Art, Washington."
  },
  "gypepito": {
    "text": [
      "Un bambino in pantaloni bianchi sta accanto ai suoi giocattoli.",
      "Dietro di lui c’è un cavallo giocattolo; indossa una giacca verde."
    ],
    "fact": "circa 1810. Metropolitan Museum of Art, New York."
  },
  "gyromero": {
    "text": [
      "Un uomo in uniforme con fascia rossa e decorazioni ci guarda.",
      "Il ricamo d’oro brilla sul tessuto scuro."
    ],
    "fact": "circa 1810. Art Institute of Chicago."
  },
  "gycuervo": {
    "text": [
      "L’architetto Juan Antonio Cuervo siede accanto a un tavolo con un grande progetto.",
      "Indossa un’uniforme scura con ricami d’oro."
    ],
    "fact": "1819. Cleveland Museum of Art."
  },
  "gytiburcio": {
    "text": [
      "Un uomo a braccia conserte e con le maniche rimboccate ci guarda dritto negli occhi.",
      "Goya lo dipinge senza sfarzo, come al lavoro."
    ],
    "fact": "1820. Metropolitan Museum of Art, New York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
