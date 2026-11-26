// v10.43 ES content for Suzuki Harunobu’s life journey (um 1725–1770). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Museo de Arte de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, Nueva York"
});
  P.works = Object.assign(P.works || {}, {
  "szkamezo": {
    "title": "El actor Ichimura Kamezō I",
    "museum": "Art Institute of Chicago"
  },
  "szkikunojo": {
    "title": "El actor Segawa Kikunojō II como Yamabuki",
    "museum": "Art Institute of Chicago"
  },
  "szkarasaki": {
    "title": "Lluvia nocturna en Karasaki",
    "museum": "Art Institute of Chicago"
  },
  "szseta": {
    "title": "Resplandor del ocaso en Seta",
    "museum": "Art Institute of Chicago"
  },
  "szkogo": {
    "title": "Kogō no Tsubone y Minamoto no Nakakuni",
    "museum": "Art Institute of Chicago"
  },
  "szpoet": {
    "title": "Poeta chino",
    "museum": "Art Institute of Chicago"
  },
  "szshower": {
    "title": "Una joven en un chubasco de verano",
    "museum": "Art Institute of Chicago"
  },
  "szloom": {
    "title": "Joven ante un telar",
    "museum": "Art Institute of Chicago"
  },
  "szwater": {
    "title": "Un vendedor de agua",
    "museum": "Art Institute of Chicago"
  },
  "szlotus": {
    "title": "Recogiendo flores de loto",
    "museum": "Art Institute of Chicago"
  },
  "szmaple": {
    "title": "Quemando hojas de arce en otoño",
    "museum": "Art Institute of Chicago"
  },
  "szfan": {
    "title": "Un abanico: día despejado",
    "museum": "Art Institute of Chicago"
  },
  "szikebana": {
    "title": "Arreglo floral al estilo Ikenobō",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "szbamboo": {
    "title": "Pasando junto al bosque de bambú",
    "museum": "Art Institute of Chicago"
  },
  "szbaby": {
    "title": "Una mujer y una niña entretienen a un bebé",
    "museum": "Art Institute of Chicago"
  },
  "szkagura": {
    "title": "La bailarina de kagura",
    "museum": "Art Institute of Chicago"
  },
  "szkiyomizu": {
    "title": "Joven sentada en el balcón del templo Kiyomizu",
    "museum": "Art Institute of Chicago"
  },
  "szcards": {
    "title": "Jóvenes jugando a las cartas de poemas",
    "museum": "Art Institute of Chicago"
  },
  "szwillow": {
    "title": "Mujer que corre junto a un sauce con la brisa",
    "museum": "Museo de Arte de Cleveland"
  },
  "szfireflies": {
    "title": "En busca de luciérnagas",
    "museum": "Art Institute of Chicago"
  },
  "szide": {
    "title": "El río de joyas en Ide",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "szchofu": {
    "title": "El río de joyas en Chōfu",
    "museum": "Metropolitan Museum of Art, Nueva York"
  },
  "szgeese": {
    "title": "Gansos salvajes sobre el río Sumida",
    "museum": "Metropolitan Museum of Art, Nueva York"
  }
});
  P.paths = P.paths || {};
  P.paths.harunobu = {
  "title": "El camino de vida de Suzuki Harunobu",
  "part": "Xilografías de Edo",
  "subtitle": "El maestro de la xilografía a todo color",
  "intro": "Viaja por la vida de Suzuki Harunobu en Edo, la actual Tokio: de estampas de pocos colores a las primeras xilografías de muchos colores. Las estampas proceden de museos que ofrecen sus imágenes libremente.",
  "ending": [
    "Suzuki Harunobu muere en 1770.",
    "Después de él, las estampas ricas en colores se convierten en un rasgo característico de la xilografía japonesa."
  ],
  "epilogue": "Suzuki Harunobu muere en 1770. El camino recorre diez años en Edo, de la impresión en pocos colores a la impresión en muchos colores.",
  "life": "um 1725–1770"
};
  P.stations = Object.assign(P.stations || {}, {
  "szs1": {
    "place": "Actores y paisajes en pocos colores",
    "when": "1760–1764",
    "mapLabel": "Edo",
    "intro": [
      "Suzuki Harunobu vive y trabaja en Edo, la actual Tokio; su año de nacimiento no se conoce con seguridad y los museos indican hacia 1725.",
      "Sus primeras estampas se imprimen con pocos colores: actores, paisajes y escenas de antiguas historias."
    ]
  },
  "szs2": {
    "place": "El año de los calendarios ilustrados",
    "when": "1765",
    "mapLabel": "Edo",
    "intro": [
      "En 1765, ricos aficionados al arte de Edo encargan a Harunobu valiosas estampas para regalar en Año Nuevo; algunas esconden el calendario del año en la imagen.",
      "Se usan hasta diez planchas de madera y nacen las primeras xilografías de muchos colores, llamadas «imágenes de brocado»."
    ]
  },
  "szs3": {
    "place": "La vida cotidiana y los poemas antiguos",
    "when": "1766–1767",
    "mapLabel": "Edo",
    "intro": [
      "Los editores de Edo adoptan rápidamente la impresión a todo color para la venta.",
      "Harunobu muestra escenas de la vida cotidiana y alude a poemas clásicos de China y Japón."
    ]
  },
  "szs4": {
    "place": "Edo y los ríos de joyas",
    "when": "1768–1770",
    "mapLabel": "Edo",
    "intro": [
      "En sus últimos años Harunobu diseña series como los «Seis ríos de joyas» y las «Ocho vistas de moda de Edo».",
      "Se calcula que diseñó hasta 800 estampas distintas en solo cinco años."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "szkamezo": {
    "text": [
      "El actor está de pie con una túnica estampada junto a una gran caja negra.",
      "Interpreta a Tachibanaya Hikosō en la obra «Ume Momiji Date no Ōkido» en el teatro Ichimura."
    ],
    "fact": "1760. Art Institute of Chicago."
  },
  "szkikunojo": {
    "text": [
      "El actor aparece en el papel de Yamabuki, con un abanico en la mano.",
      "La obra se representa en el teatro Ichimura en el undécimo mes de 1763."
    ],
    "fact": "1763. Art Institute of Chicago."
  },
  "szkarasaki": {
    "text": [
      "Un pino se alza en una lengua de tierra y delante una barca se desliza sobre el agua.",
      "La estampa pertenece a la serie «Ocho vistas de Ōmi»."
    ],
    "fact": "principios de la década de 1760. Art Institute of Chicago."
  },
  "szseta": {
    "text": [
      "Unos jinetes cruzan un largo puente mientras unos veleros navegan por el agua.",
      "También esta estampa pertenece a la serie «Ocho vistas de Ōmi»."
    ],
    "fact": "principios de la década de 1760. Art Institute of Chicago."
  },
  "szkogo": {
    "text": [
      "Un jinete y su acompañante se detienen junto a un muro bajo la luna, con una casa detrás.",
      "La estampa muestra una escena de un antiguo relato y lleva el sello del editor Yamamura."
    ],
    "fact": "principios de la década de 1760. Art Institute of Chicago."
  },
  "szpoet": {
    "text": [
      "Una figura vestida de rojo mira por una ventana redonda hacia un amplio paisaje.",
      "Arriba hay un verso chino sobre lejanas colinas azules sobre el mar azul."
    ],
    "fact": "hacia 1761–1765. Art Institute of Chicago."
  },
  "szshower": {
    "text": [
      "El viento y la lluvia oblicua sorprenden a una joven, cuyas mangas ondean.",
      "El museo registra la estampa como surimono."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szloom": {
    "text": [
      "Una joven trabaja sentada ante un telar.",
      "La estampa se hizo el año en que comenzó la impresión a todo color."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szwater": {
    "text": [
      "Un hombre con sombrero lleva dos cubos colgados de una vara sobre el hombro.",
      "El museo también registra esta estampa como surimono."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szlotus": {
    "text": [
      "Dos mujeres avanzan en una barca entre hojas de loto.",
      "Una se inclina sobre la borda y la otra está de pie con una pértiga."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szmaple": {
    "text": [
      "Una mujer mira por encima de una valla a una figura arrodillada junto a un pequeño fuego.",
      "Sobre la valla brillan las hojas amarillas de un arce."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szfan": {
    "text": [
      "Dos jóvenes caminan una junto a otra; una sostiene un abanico.",
      "La estampa pertenece a la serie «Ocho vistas del salón», que traslada antiguos temas de paisaje a objetos de la casa."
    ],
    "fact": "1765. Art Institute of Chicago."
  },
  "szikebana": {
    "text": [
      "Un arreglo de ramas, hojas y bambú está en un jarrón blanco sobre un soporte rojo.",
      "El título nombra el estilo Ikenobō de arreglo floral."
    ],
    "fact": "hacia 1765. Metropolitan Museum of Art, Nueva York."
  },
  "szbamboo": {
    "text": [
      "Una joven con paraguas pasa junto a un bosque de bambú bajo la nieve.",
      "El museo también registra esta estampa como surimono."
    ],
    "fact": "1766. Art Institute of Chicago."
  },
  "szbaby": {
    "text": [
      "Una mujer y una niña se ocupan de un niño pequeño.",
      "Al fondo hay una planta delante de una persiana de bambú."
    ],
    "fact": "1767. Art Institute of Chicago."
  },
  "szkagura": {
    "text": [
      "Una bailarina con túnica oscura está en una veranda de barandilla roja.",
      "Sostiene un largo bastón en la mano."
    ],
    "fact": "hacia 1766. Art Institute of Chicago."
  },
  "szkiyomizu": {
    "text": [
      "Una joven está sentada junto a la barandilla roja de un balcón, con árboles verdes debajo.",
      "Las copas de los árboles llegan hasta el balcón."
    ],
    "fact": "hacia 1766. Art Institute of Chicago."
  },
  "szcards": {
    "text": [
      "Tres jóvenes se inclinan sobre cartas extendidas en el suelo.",
      "Las cartas de este juego llevan poemas."
    ],
    "fact": "hacia 1766–1767. Art Institute of Chicago."
  },
  "szwillow": {
    "text": [
      "Una mujer pasa deprisa con un paraguas junto a un sauce cuyas ramas agita el viento.",
      "El cielo oscuro hace resaltar la figura con claridad."
    ],
    "fact": "1766 o 1767. Museo de Arte de Cleveland."
  },
  "szfireflies": {
    "text": [
      "Una niña de pie sostiene un farol mientras la otra se arrodilla junto a una jaula para las luciérnagas.",
      "La noche está impresa en negro plano, sin sombras."
    ],
    "fact": "1768. Art Institute of Chicago."
  },
  "szide": {
    "text": [
      "Tres mujeres cruzan con cuidado un río poco profundo; en la orilla florecen flores amarillas de yamabuki.",
      "En el recuadro superior hay un poema de Fujiwara no Shunzei sobre el lugar."
    ],
    "fact": "hacia 1768. Metropolitan Museum of Art, Nueva York."
  },
  "szchofu": {
    "text": [
      "Una mujer aclara una larga tela en el río; casi parece que baila con ella.",
      "Chōfu es conocido por el blanqueo de telas; arriba hay un poema de Fujiwara no Teika."
    ],
    "fact": "hacia 1768. Metropolitan Museum of Art, Nueva York."
  },
  "szgeese": {
    "text": [
      "Dos mujeres van en una pequeña barca por el río; una está de pie y la otra, arrodillada, sostiene un sedal.",
      "La estampa pertenece a la serie «Ocho vistas de moda de Edo»."
    ],
    "fact": "hacia 1769. Metropolitan Museum of Art, Nueva York."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
