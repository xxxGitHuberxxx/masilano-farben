// v10.43 ES content for P.C. Skovgaard’s life journey (1817–1875). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Statens Museum for Kunst, Kopenhagen": "Statens Museum for Kunst, Copenhague"
});
  P.works = Object.assign(P.works || {}, {
  "pchoejerup": {
    "title": "La iglesia de Højerup en los acantilados de Stevns",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcraageleje": {
    "title": "La playa de Rågeleje",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcoats": {
    "title": "Campo de avena cerca de Vejby",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcdronning": {
    "title": "La costa norte de Selandia en Dronningmølle",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcmoeller": {
    "title": "Paisaje en Kongens Møller con luz de la tarde",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcbeldringe": {
    "title": "Vista hacia la finca de Beldringe",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pclaesoe": {
    "title": "Abedules en Læsø después de la lluvia",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcvognserup": {
    "title": "Camino rural cerca de la finca de Vognserup",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcvenice": {
    "title": "El Gran Canal de Venecia",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcnysoe": {
    "title": "En la escalinata del jardín de Nysø",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcmaywood": {
    "title": "Hayedo en mayo cerca de Iselingen",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pccivitella": {
    "title": "Colinas rocosas cerca de Civitella",
    "museum": "Statens Museum for Kunst, Copenhague"
  },
  "pcmeadow": {
    "title": "Los prados de Dortheaslyst",
    "museum": "Statens Museum for Kunst, Copenhague"
  }
});
  P.paths = P.paths || {};
  P.paths.skovgaard = {
  "title": "El camino de vida de P.C. Skovgaard",
  "part": "Costas, campos y hayedos",
  "subtitle": "De Selandia a Italia",
  "intro": "Viaja con el paisajista danés P.C. Skovgaard: a las costas y los campos de Selandia, por el amplio paisaje de Dinamarca, a Venecia y al hayedo en mayo y, por último, a las colinas de Italia. Las imágenes proceden del Statens Museum for Kunst de Copenhague, que ofrece sus reproducciones libremente.",
  "ending": [
    "P.C. Skovgaard muere el 13 de abril de 1875.",
    "Muchos de sus cuadros se conservan hoy en el Statens Museum for Kunst de Copenhague."
  ],
  "epilogue": "P.C. Skovgaard muere el 13 de abril de 1875. El camino lleva de las costas de Selandia, por el amplio paisaje danés, a Venecia, al hayedo en mayo y a las colinas de Italia.",
  "life": "1817–1875"
};
  P.stations = Object.assign(P.stations || {}, {
  "pcs1": {
    "place": "Costas y campos de Selandia",
    "when": "1842–1844",
    "mapLabel": "Selandia",
    "intro": [
      "P.C. Skovgaard nace el 4 de abril de 1817; en la Academia de Bellas Artes de Copenhague, su amistad con el pintor J.Th. Lundbye llega a ser muy importante para él.",
      "En el verano de 1843 los dos amigos dibujan y pintan en la región natal de Skovgaard, en torno a Vejby, y ese mismo año gana un premio con un cuadro de robles."
    ]
  },
  "pcs2": {
    "place": "De viaje por todo el país",
    "when": "1847–1849",
    "mapLabel": "Dinamarca",
    "intro": [
      "En 1845 Skovgaard recibe una medalla de exposición y termina en la Academia; en la década de 1840 viaja por toda Dinamarca.",
      "Pinta, entre otros lugares, cerca de la finca de Vognserup y se convierte en un pintor que retrata el paisaje danés."
    ]
  },
  "pcs3": {
    "place": "Venecia y el hayedo en mayo",
    "when": "1854–1857",
    "mapLabel": "Venecia y Selandia",
    "intro": [
      "En 1854 y 1855 Skovgaard viaja por primera vez a Italia, junto con el pintor Wilhelm Marstrand y el historiador del arte N.L. Høyen.",
      "A su regreso pinta su obra más conocida, un hayedo en mayo, con árboles altos y figuras pequeñas por debajo de la línea del horizonte."
    ]
  },
  "pcs4": {
    "place": "Italia y paisajes tardíos",
    "when": "1869–1875",
    "mapLabel": "Italia y Selandia",
    "intro": [
      "En 1869 Skovgaard vuelve a viajar a Italia; después sus paisajes se vuelven más grandiosos.",
      "Su pintura monumental tiene gran importancia para las generaciones siguientes, también para sus hijos Joakim y Niels."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "pchoejerup": {
    "text": [
      "La iglesia se alza entre árboles en lo alto del blanco acantilado de creta, y abajo la playa se extiende junto al mar.",
      "Skovgaard firmó el cuadro con su monograma y el año 1842."
    ],
    "fact": "1842. Statens Museum for Kunst, Copenhague."
  },
  "pcraageleje": {
    "text": [
      "Olas de crestas blancas llegan bajo nubes ligeras a una amplia playa de arena.",
      "En la pintura está grabado «Ved Rougeleie Juli 1843», en Rågeleje en julio de 1843."
    ],
    "fact": "1843. Statens Museum for Kunst, Copenhague."
  },
  "pcoats": {
    "text": [
      "La avena alta llena el primer plano, y detrás hay árboles y un tejado rojo.",
      "El cuadro se pintó durante la estancia de verano de Skovgaard y Lundbye en Vejby en 1843."
    ],
    "fact": "1843. Statens Museum for Kunst, Copenhague."
  },
  "pcdronning": {
    "text": [
      "Un arroyo serpentea entre colinas verdes hasta el mar, y arriba las nubes cruzan un cielo azul.",
      "El cuadro está firmado «PSkovgaard -1844-»."
    ],
    "fact": "1844. Statens Museum for Kunst, Copenhague."
  },
  "pcmoeller": {
    "text": [
      "Un camino arenoso pasa junto a una roca hacia un bosque, sobre el que se ciernen nubes pesadas.",
      "Skovgaard pintó el cuadro en 1844 al óleo sobre cartón."
    ],
    "fact": "1844. Statens Museum for Kunst, Copenhague."
  },
  "pcbeldringe": {
    "text": [
      "La vista recorre un amplio campo con cardos hasta árboles lejanos bajo un alto cielo azul.",
      "El cuadro se pintó en 1847 al óleo sobre cartón y más tarde se montó sobre lienzo."
    ],
    "fact": "1847. Statens Museum for Kunst, Copenhague."
  },
  "pclaesoe": {
    "text": [
      "Unos abedules esbeltos se alzan junto a un camino, y en el cielo las nubes grises se abren.",
      "El cuadro lleva la inscripción «PS 19 Mai 1849»."
    ],
    "fact": "1849. Statens Museum for Kunst, Copenhague."
  },
  "pcvognserup": {
    "text": [
      "Un camino claro pasa bajo grandes árboles, y por él camina gente.",
      "Según el título del museo, el pintor J.Th. Lundbye dibuja junto al camino; el cuadro está firmado en 1849."
    ],
    "fact": "1849. Statens Museum for Kunst, Copenhague."
  },
  "pcvenice": {
    "text": [
      "Las góndolas se deslizan entre los palacios por el Gran Canal, y al fondo se alza la cúpula de Santa Maria della Salute.",
      "El cuadro lleva la inscripción «Venezia Juni 1854»."
    ],
    "fact": "1854. Statens Museum for Kunst, Copenhague."
  },
  "pcnysoe": {
    "text": [
      "Por una puerta abierta al jardín se ve a una mujer con una sombrilla azul en la escalinata; otra está sentada a su lado.",
      "El título del museo nombra a Caroline Dalgas y Jeanina Stampe; en el cuadro figura el 13 de julio de 1855."
    ],
    "fact": "1855. Statens Museum for Kunst, Copenhague."
  },
  "pcmaywood": {
    "text": [
      "Dos niñas pasean con un perro de pelo dorado por el soleado hayedo, y más atrás su familia está sentada en la hierba.",
      "Skovgaard encontró el motivo junto a la finca de Iselingen, en el sur de Selandia, y pintó las hojas verde claro recién abiertas."
    ],
    "fact": "1857. Statens Museum for Kunst, Copenhague."
  },
  "pccivitella": {
    "text": [
      "En primer plano hay laderas rocosas soleadas con arbustos, y detrás se suceden montañas azules.",
      "Skovgaard pintó el estudio al óleo sobre papel y escribió en él «Civitella 7 Juli 1869»."
    ],
    "fact": "1869. Statens Museum for Kunst, Copenhague."
  },
  "pcmeadow": {
    "text": [
      "Prados verdes se extienden hasta una hilera de árboles, sobre la que pasan nubes claras.",
      "El Statens Museum for Kunst fecha el cuadro entre 1871 y 1875."
    ],
    "fact": "1871–1875. Statens Museum for Kunst, Copenhague."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
