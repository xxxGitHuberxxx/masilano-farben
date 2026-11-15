// v8.9 Spanish content for Utagawa Hiroshige’s life journey, Part 2, completing the path.
// Faithful translation of the existing DE/EN. No new facts. Overwrites P.paths.hiroshige with whole-path meta.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "National Diet Library, Tokio": "Biblioteca de la Dieta Nacional, Tokio",
  "Cleveland Museum of Art": "Cleveland Museum of Art",
  "Library of Congress, Washington": "Biblioteca del Congreso, Washington",
  "National Library of New Zealand, Wellington": "Biblioteca Nacional de Nueva Zelanda, Wellington",
  "Chester Beatty Library, Dublin": "Chester Beatty Library, Dublín",
  "Rijksmuseum, Amsterdam": "Rijksmuseum, Ámsterdam",
  "Library of Congress, Washington (dieser Abzug)": "Biblioteca del Congreso, Washington (esta estampa)"
});
  P.works = Object.assign(P.works || {}, {
  "hgks12": {
    "title": "Shinmachi",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks14": {
    "title": "Takasaki",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks16": {
    "title": "Annaka",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks17": {
    "title": "Matsuida",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks19": {
    "title": "Karuizawa",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks22": {
    "title": "Otai",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks24": {
    "title": "Shionada",
    "museum": "Cleveland Museum of Art"
  },
  "hgks26": {
    "title": "Mochizuki",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks28": {
    "title": "Nagakubo",
    "museum": "Cleveland Museum of Art"
  },
  "hgks29": {
    "title": "Wada",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks30": {
    "title": "Shimosuwa",
    "museum": "Cleveland Museum of Art"
  },
  "hgks32": {
    "title": "Seba",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgks37": {
    "title": "Miyanokoshi",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks38": {
    "title": "Fukushima",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks40": {
    "title": "Suhara",
    "museum": "Cleveland Museum of Art"
  },
  "hgks43": {
    "title": "Tsumago",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks47": {
    "title": "Ōi",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgks68": {
    "title": "Moriyama",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgrk_hida": {
    "title": "El transbordador de cesta en Hida",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgrk_naruto": {
    "title": "Los remolinos de Naruto en Awa",
    "museum": "Biblioteca Nacional de Nueva Zelanda, Wellington"
  },
  "hgrk_arashi": {
    "title": "El puente Togetsu en Arashiyama",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgrk_saruhashi": {
    "title": "El puente del Mono en Kai",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgrk_sumida": {
    "title": "Mañana de nieve en el Sumida, en Musashi",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgrk_sarashina": {
    "title": "La luna de Sarashina, en Shinano",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgrk_matsushima": {
    "title": "Matsushima en Mutsu",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgrk_ishiyama": {
    "title": "El templo Ishiyama en el lago Biwa",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgrk_nikko": {
    "title": "La cascada Urami en Nikkō",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgrk_noto": {
    "title": "Taki no ura en Noto",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgrk_izumo": {
    "title": "La fiesta Hotohoto en el Gran Santuario de Izumo",
    "museum": "Cleveland Museum of Art"
  },
  "hgrk_sado": {
    "title": "Las minas de oro de Sado",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_nihonbashi": {
    "title": "Nihonbashi después de la nieve",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgmeh_kasumi": {
    "title": "Kasumigaseki",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgmeh_suruga": {
    "title": "Suruga-chō",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_shinobazu": {
    "title": "El pabellón Kiyomizu y el estanque Shinobazu",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgmeh_suidobashi": {
    "title": "El puente Suidō y Surugadai",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_yatsumi": {
    "title": "El puente Yatsumi",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_plum": {
    "title": "El jardín de ciruelos de Kameido",
    "museum": "Chester Beatty Library, Dublín"
  },
  "hgmeh_iris": {
    "title": "Los lirios de Horikiri",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_asukayama": {
    "title": "Vista al norte desde Asukayama",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgmeh_ukeji": {
    "title": "El santuario Akiba en Ukeji",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "hgmeh_sazaido": {
    "title": "El pabellón en espiral de los Quinientos Arhats",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgmeh_mama": {
    "title": "Arces en Mama",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "ohashi": {
    "title": "Chubasco repentino sobre el puente Shin-Ōhashi",
    "museum": "Biblioteca del Congreso, Washington (esta estampa)"
  },
  "hgmeh_fireworks": {
    "title": "Fuegos artificiales en el puente Ryōgoku",
    "museum": "Cleveland Museum of Art"
  },
  "hgmeh_moonpine": {
    "title": "El pino de la luna en Ueno",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_senju": {
    "title": "El gran puente de Senju",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_mannen": {
    "title": "El puente Mannen en Fukagawa",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_ayase": {
    "title": "El río Ayase en Kanegafuchi",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_jumbo": {
    "title": "Águila sobre la llanura de Jūmantsubo en Fukagawa",
    "museum": "Rijksmuseum, Ámsterdam"
  },
  "hgmeh_azuma": {
    "title": "El puente Azuma y el templo Kinryūzan",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_bikuni": {
    "title": "El puente Bikuni en la nieve",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_saruwaka": {
    "title": "Vista nocturna de Saruwaka-chō",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgmeh_meguro": {
    "title": "El puente de tambor y la colina del ocaso en Meguro",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_takata": {
    "title": "El campo de equitación de Takata",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgmeh_foxfires": {
    "title": "Fuegos de zorro en Nochevieja en Ōji",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgmeh_shiba": {
    "title": "Shiba Shinmei y el Zōjō-ji",
    "museum": "Biblioteca de la Dieta Nacional, Tokio"
  },
  "hgfuji_enoshima": {
    "title": "La puerta de Enoshima",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgfuji_miho": {
    "title": "La playa de pinos de Miho en Suruga",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgfuji_satta": {
    "title": "El mar frente a Satta en Suruga",
    "museum": "Biblioteca del Congreso, Washington"
  },
  "hgfuji_hakone": {
    "title": "El lago de Hakone",
    "museum": "Biblioteca del Congreso, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.hiroshige = {
  "title": "El camino de vida de Utagawa Hiroshige",
  "life": "1797–1858",
  "part": "Partes 1–2 · 1797–1858",
  "subtitle": "De Edo por el Tōkaidō y la Kisokaidō, a las provincias y las Cien vistas de Edo",
  "intro": "Viaja con Utagawa Hiroshige por toda su vida: desde la infancia en el cuerpo de bomberos de Yayosu en Edo, pasando por el aprendizaje con Toyohiro, las primeras vistas de la capital oriental, el viaje al Tōkaidō de 1832 según la tradición y la serie Hōeidō de las 53 estaciones, las ocho vistas de Ōmi, la Kisokaidō desde hacia 1835, los lugares famosos de las más de sesenta provincias y las Cien vistas famosas de Edo, hasta la muerte de Hiroshige en Edo el 12 de octubre de 1858. Estaciones breves y xilografías para pintar.",
  "ending": [
    "El 12 de octubre de 1858 muere Utagawa Hiroshige en Edo, a los sesenta y un años. La tradición da como causa de la muerte el cólera; ese año hay una epidemia en la ciudad. Es enterrado en el cementerio del templo Tōgaku-ji en Asakusa. Su alumno e hijo adoptivo Suzuki Shigenobu continúa el nombre como Hiroshige II.",
    "Quedan las estaciones del Tōkaidō y de la Kisokaidō, las vistas de las provincias y las Cien vistas famosas de Edo: una obra que ha fijado la lluvia, la nieve, la luna y las calles de la capital oriental."
  ],
  "epilogue": "Utagawa Hiroshige muere el 12 de octubre de 1858 en Edo. Es enterrado en el templo Tōgaku-ji en Asakusa. Quedan las 53 estaciones del Tōkaidō, la Kisokaidō, los lugares famosos de las más de sesenta provincias y las Cien vistas famosas de Edo."
};
  P.stations = Object.assign(P.stations || {}, {
  "hiroshigekiso": {
    "place": "La Kisokaidō: Hiroshige toma el relevo",
    "when": "desde hacia 1835",
    "mapLabel": "Kisokaidō",
    "intro": [
      "Tras el éxito del Tōkaidō de Hōeidō nace una segunda serie de estaciones en el camino del interior, la Kisokaidō (Nakasendō): 69 estaciones más Nihonbashi. Keisai Eisen la empieza para el editor Takenouchi Magohachi (Hōeidō); Hiroshige asume la mayor parte de las estaciones posteriores. También el editor Iseya Rihei (Kinjudō) participa en la edición.",
      "Las hojas aparecen desde hacia 1835, en los años siguientes. Eisen sigue siendo responsable de las primeras estaciones; las hojas que se muestran aquí pertenecen a la parte de Hiroshige.",
      "El camino del interior va de Edo por las montañas de Kōzuke y Shinano, por altos pasos, hacia el oeste."
    ]
  },
  "hiroshigepass": {
    "place": "Pasos, luna y nieve",
    "when": "hacia 1835–1838",
    "mapLabel": "Pasos",
    "intro": [
      "El camino sube por las montañas de Shinano. En Mochizuki la luna está sobre los pinos, en Nagakubo sobre un largo puente; en el paso de Wada hay nieve profunda.",
      "Shimosuwa está junto al lago Suwa, tras los altos pasos. En Seba los sauces están a la luz del atardecer sobre el río: una de las hojas más conocidas de toda la serie.",
      "Estas estaciones forman el núcleo de la Kisokaidō de Hiroshige."
    ]
  },
  "hiroshigekisoend": {
    "place": "Valles del Kiso y el oeste",
    "when": "hacia 1835–1838",
    "mapLabel": "Kiso",
    "intro": [
      "Más al oeste el camino sigue los valles del Kiso: la luna sobre Miyanokoshi, el puesto de control de Fukushima, la lluvia repentina en Suhara, la estación de postas de Tsumago, la nieve espesa en Ōi.",
      "Hacia el final del camino, Moriyama ya está cerca del lago Biwa, en la transición hacia Ōtsu y Kioto.",
      "Con estas hojas la serie del interior queda firmemente en manos de Hiroshige."
    ]
  },
  "hiroshigeprovinces": {
    "place": "Las más de sesenta provincias",
    "when": "1853–1856",
    "mapLabel": "Provincias",
    "intro": [
      "En 1853–1856 aparece la serie «Lugares famosos de las más de sesenta provincias» (Rokujūyoshū meisho zue): unas setenta hojas ōban verticales, editadas por Koshimuraya Heisuke.",
      "Las vistas abarcan todo el país: el transbordador de cesta en Hida, los remolinos de Naruto en Awa, el puente Togetsu en Arashiyama, el puente del Mono en Kai, una mañana de nieve en el Sumida, la luna sobre las terrazas de arroz de Sarashina.",
      "A diferencia del Tōkaidō y de la Kisokaidō, no es una sucesión de estaciones de camino, sino un atlas de lugares famosos."
    ]
  },
  "hiroshigeprovinces2": {
    "place": "Costas, islas y santuarios",
    "when": "1853–1856",
    "mapLabel": "Costas",
    "intro": [
      "La serie de las provincias llega también a costas e islas: la bahía de Matsushima en Mutsu, el templo Ishiyama en el lago Biwa, la cascada Urami en Nikkō, la costa de Noto, la fiesta Hotohoto en el Gran Santuario de Izumo y las minas de oro de la isla de Sado.",
      "En Ishiyama, Hiroshige vuelve a un lugar que ya había dibujado en las ocho vistas de Ōmi a mediados de la década de 1830.",
      "Con esta serie, veinte años después del Tōkaidō, vuelve a ser el maestro del paisaje de la capital oriental, ahora con la mirada sobre todo el país."
    ]
  },
  "hiroshigehyakkei": {
    "place": "Cien vistas famosas de Edo",
    "when": "desde 1856",
    "mapLabel": "Edo",
    "intro": [
      "Desde 1856 Hiroshige trabaja en las «Cien vistas famosas de Edo» (Meisho Edo Hyakkei), editadas por Uoya Eikichi (Sakanaya Eikichi). La serie llega a reunir unas 118 a 119 hojas, la mayoría de los años 1856–1858.",
      "Empieza otra vez en Nihonbashi, después de la nieve, y recorre las calles de la capital oriental: Kasumigaseki, Suruga-chō con el Fuji en el eje de la calle, el pabellón Kiyomizu junto al estanque Shinobazu, el puente Suidō, el puente Yatsumi.",
      "En 1856 Hiroshige también hace votos budistas formales; sigue trabajando, hasta los últimos años."
    ]
  },
  "hiroshigespring": {
    "place": "Jardines, flores y hojas de otoño",
    "when": "1856–1857",
    "mapLabel": "Jardines",
    "intro": [
      "Por las Cien vistas pasan jardines y estaciones del año: el jardín de ciruelos de Kameido, los lirios de Horikiri, la vista desde Asukayama, el santuario Akiba en Ukeji, el pabellón en espiral de los Quinientos Arhats, los arces de Mama.",
      "Muchas de estas hojas aparecen en 1857. El tronco curvado del ciruelo de Kameido y los lirios de Horikiri están entre las imágenes de jardín más conocidas de la serie.",
      "Hiroshige coloca a menudo el primer plano cerca y grande, y la ciudad o el jardín detrás, tranquilos y amplios."
    ]
  },
  "hiroshigenight": {
    "place": "Lluvia, noche y río",
    "when": "1856–1858",
    "mapLabel": "Lluvia",
    "intro": [
      "La lluvia, los fuegos artificiales y el agua están entre las hojas más famosas de la serie. En 1857 aparece el chaparrón repentino sobre el Shin-Ōhashi y Atake, una gran hoja tardía de las Cien vistas.",
      "Se suman el pino de la luna en Ueno, el gran puente de Senju, el puente Mannen en Fukagawa y el río Ayase en Kanegafuchi. Los fuegos artificiales de Ryōgoku aparecen en 1858.",
      "El tiempo atmosférico y la noche siguen siendo hasta el final uno de los temas más firmes de Hiroshige."
    ]
  },
  "hiroshigewinter": {
    "place": "Nieve, águila y calles",
    "when": "1857–1858",
    "mapLabel": "Invierno",
    "intro": [
      "La serie recoge también el invierno y el borde de la ciudad: un águila sobre la llanura nevada de Jūmantsubo en Fukagawa, el puente Azuma con el lejano Kinryūzan, el puente Bikuni en la nieve, la noche en el barrio de teatros de Saruwaka-chō, el puente de tambor de Meguro, el campo de equitación de Takata.",
      "La hoja de nieve del puente Bikuni aparece en 1858. Las demás hojas de esta estación pertenecen sobre todo al año 1857.",
      "Así se completa la mirada sobre Edo: no solo jardines y puentes, también nieve, animales y las calles del borde."
    ]
  },
  "hiroshige1858": {
    "place": "Últimos años y la muerte en 1858",
    "when": "1857–1858",
    "mapLabel": "1858",
    "intro": [
      "En 1856 Hiroshige hace votos budistas formales y sigue trabajando. En 1857 aparece en las Cien vistas la hoja de los fuegos de zorro en Nochevieja en Ōji; se suma la vista de Shiba Shinmei y el Zōjō-ji.",
      "En 1858 aparece, editada por Tsutaya Kichizō (Kōeidō), una serie de treinta y seis vistas del Fuji: la puerta de Enoshima, la playa de pinos de Miho, el mar frente a Satta, el lago de Hakone.",
      "El 12 de octubre de 1858 muere Utagawa Hiroshige en Edo. La tradición da como causa de la muerte el cólera; ese año hay una epidemia en la ciudad. Es enterrado en el cementerio del templo Tōgaku-ji en Asakusa. Su alumno e hijo adoptivo Suzuki Shigenobu continúa el nombre como Hiroshige II."
    ]
  },
  "hiroshigeomi": {
    "place": "Ōmi hakkei y la fama de la década de 1830",
    "when": "hacia 1834–1835",
    "mapLabel": "Ōmi",
    "intro": [
      "Hacia 1834–1835 sigue la serie «Ōmi hakkei no uchi», las ocho vistas de la provincia de Ōmi en el lago Biwa, no lejos de Kioto. El esquema de las ocho vistas es más antiguo y procede de China; Hiroshige lo transpone a la campana, la lluvia, los gansos, la luna y el resplandor del atardecer en el lago.",
      "Con la serie del Tōkaidō y las vistas de Ōmi, a mediados de la década de 1830 Hiroshige queda firmemente establecido como maestro del paisaje, en el extremo occidental del camino y en el lago.",
      "Desde aquí el camino sigue hacia la Kisokaidō, las vistas de las provincias y las Cien vistas famosas de Edo."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "hgks12": {
    "text": [
      "La estación de Shinmachi está en la Kisokaidō, en la provincia de Kōzuke. La hoja muestra la estación de postas con viajeros y el amplio paisaje del camino del interior.",
      "Keisai Eisen empieza la serie de las 69 estaciones de la Kisokaidō para el editor Takenouchi Magohachi (Hōeidō). Las estaciones posteriores, entre ellas Shinmachi, las dibuja Hiroshige; aparecen desde hacia 1835, en los años siguientes. Esta hoja la conserva la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks14": {
    "text": [
      "Takasaki es una importante ciudad castillo de la Kisokaidō en Kōzuke. La hoja muestra la estación en campo abierto, con viajeros en el camino.",
      "Hiroshige dibuja Takasaki como una de las estaciones que siguen al comienzo de la serie por Eisen. La hoja de la serie de hacia 1835–1838 está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks16": {
    "text": [
      "Annaka está en Kōzuke, ya en la subida hacia el paso de Usui. La hoja muestra la estación y el camino que lleva a las montañas.",
      "En la serie de la Kisokaidō, Annaka es una de las estaciones de Hiroshige. La hoja la conserva la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks17": {
    "text": [
      "Matsuida está al pie del paso de Usui, que separa Kōzuke de Shinano. Viajeros y animales de carga avanzan por la estación ondulada.",
      "La hoja pertenece a la parte de Hiroshige en la serie de la Kisokaidō y está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks19": {
    "text": [
      "Karuizawa está en lo alto, sobre el paso de Usui, del lado de Shinano. La hoja muestra la altura árida y abierta con viajeros en el viento y entre las rocas.",
      "La estación es una de las alturas conocidas de la Kisokaidō. La hoja de Hiroshige de la serie de hacia 1835–1838 la conserva la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks22": {
    "text": [
      "Otai (también Odai) está ya en Shinano, tras el descenso del paso de Usui. La hoja muestra viajeros en el paisaje abierto del camino del interior.",
      "Hiroshige dibuja la estación para la serie de la Kisokaidō. La hoja está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks24": {
    "text": [
      "Shionada está junto al río Chikuma, en Shinano. La hoja muestra la estación fluvial y el camino junto al agua.",
      "Hiroshige dibuja Shionada para la serie de las 69 estaciones de la Kisokaidō. Esta hoja está en el Cleveland Museum of Art."
    ],
    "fact": "hacia 1835–1838. Cleveland Museum of Art."
  },
  "hgks26": {
    "text": [
      "En Mochizuki se alzan altos pinos bajo una luna clara; el nombre de la estación significa «luna llena». Viajeros y caballos avanzan por el camino a la luz de la luna.",
      "La hoja es una de las vistas de luna conocidas de la Kisokaidō. Está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks28": {
    "text": [
      "Sobre un largo puente de madera está la luna llena; los viajeros cruzan el río, y en la orilla de este lado pasan personas y un caballo junto a las casas. Un gran pino divide la escena.",
      "Nagakubo se considera una de las hojas principales de la serie de la Kisokaidō. Esta hoja, de hacia 1835–1836, está en el Cleveland Museum of Art."
    ],
    "fact": "hacia 1835–1838. Cleveland Museum of Art."
  },
  "hgks29": {
    "text": [
      "En el paso de Wada hay nieve profunda; el camino sube empinado entre laderas blancas y árboles oscuros, y los viajeros suben con esfuerzo el paso.",
      "La escena de nieve en el paso de Wada es una de las hojas más conocidas de la Kisokaidō. Está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks30": {
    "text": [
      "Shimosuwa está junto al lago Suwa, una de las estaciones más bajas tras los altos pasos. La hoja muestra la estación junto al lago, en Shinano.",
      "Hiroshige dibuja Shimosuwa para la serie de la Kisokaidō; una versión de 1835 está en el Cleveland Museum of Art."
    ],
    "fact": "hacia 1835–1838. Cleveland Museum of Art."
  },
  "hgks32": {
    "text": [
      "Junto al río de Seba hay sauces llorones a la luz del atardecer; dos hombres impulsan con pértiga una barca cargada, y el sol se pone rojo sobre la orilla llana.",
      "«Seba» se considera una de las hojas más bellas de toda la serie de la Kisokaidō. Esta estampa está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "hacia 1835–1838. Biblioteca del Congreso, Washington."
  },
  "hgks37": {
    "text": [
      "En Miyanokoshi la luna está sobre el río y los árboles de la estación, en las montañas del Kiso. Los viajeros avanzan por la orilla a la luz de la luna.",
      "La hoja pertenece a las estaciones de Hiroshige en la Kisokaidō y está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks38": {
    "text": [
      "Kiso-Fukushima es uno de los puestos de control más importantes del camino del interior, en el estrecho valle del río Kiso. La hoja muestra la estación de postas bajo los árboles, con viajeros en el camino.",
      "Hiroshige dibuja Fukushima para la serie de la Kisokaidō. La hoja la conserva la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks40": {
    "text": [
      "En Suhara una lluvia repentina sorprende a los viajeros; paraguas y sombreros se inclinan, y los árboles están mojados sobre el camino.",
      "La hoja de lluvia de Suhara es una de las vistas de tiempo atmosférico conocidas de la Kisokaidō. Esta versión está en el Cleveland Museum of Art."
    ],
    "fact": "hacia 1835–1838. Cleveland Museum of Art."
  },
  "hgks43": {
    "text": [
      "Tsumago está en el estrecho valle del Kiso, una de las estaciones de postas conocidas del camino del interior. La hoja muestra la estación en el paisaje de montaña, con viajeros en el camino.",
      "Hiroshige dibuja Tsumago para la serie de las 69 estaciones. La hoja está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks47": {
    "text": [
      "Sobre la estación de Ōi cae una nieve espesa; los viajeros avanzan con esfuerzo por el paisaje blanco, y las casas y los árboles se hunden en la ventisca.",
      "La hoja de nieve de Ōi es una de las obras principales de la serie de la Kisokaidō. Está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgks68": {
    "text": [
      "Moriyama está ya cerca del lago Biwa, hacia el final de la Kisokaidō y el paso a Ōtsu y Kioto. La hoja muestra la estación en el paisaje abierto y más bajo.",
      "Con estaciones como Moriyama, Hiroshige vuelve a acercar el camino del interior a la región del lago Biwa. La hoja la conserva la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "hacia 1835–1838. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgrk_hida": {
    "text": [
      "Sobre un desfiladero en Hida cuelga un transbordador de cesta; la cesta se desliza por la cuerda, y muy abajo está el río entre laderas empinadas y boscosas.",
      "La hoja pertenece a la serie «Lugares famosos de las más de sesenta provincias» (Rokujūyoshū meisho zue), que aparece en 1853–1856 con Koshimuraya Heisuke. Esta estampa está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1853–1856. Biblioteca del Congreso, Washington."
  },
  "hgrk_naruto": {
    "text": [
      "Frente a la costa de Awa giran los remolinos del estrecho de Naruto; el agua gira en círculos fuertes entre las islas.",
      "Los remolinos de Naruto son uno de los motivos más conocidos de la serie de las provincias. Esta hoja, de hacia 1855, la conserva la Biblioteca Nacional de Nueva Zelanda en Wellington."
    ],
    "fact": "1853–1856. Biblioteca Nacional de Nueva Zelanda, Wellington."
  },
  "hgrk_arashi": {
    "text": [
      "En Arashiyama, en la provincia de Yamashiro, el puente Togetsu cruza el río; los cerezos en flor y las colinas boscosas se alzan sobre el agua.",
      "La hoja de la serie de las provincias muestra uno de los lugares más famosos cerca de Kioto. Está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1853–1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgrk_saruhashi": {
    "text": [
      "El puente del Mono de Kai se tiende muy alto sobre un desfiladero; la estructura de madera cuelga audaz entre las rocas, y muy abajo corre el río.",
      "Saruhashi es un lugar famoso clásico de la provincia de Kai. La hoja de la serie de 1853–1856 la conserva la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1853–1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgrk_sumida": {
    "text": [
      "En el río Sumida, en la provincia de Musashi, hay nieve sobre la orilla, las barcas y la ciudad lejana; la mañana es tranquila y clara.",
      "La hoja lleva la serie de las provincias al río de Edo. Está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1853–1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgrk_sarashina": {
    "text": [
      "En Sarashina, en la provincia de Shinano, la luna está sobre las terrazas de arroz y el monte Kyōdai; los campos suben escalonados por la ladera.",
      "La «luna de los arrozales» de Sarashina es un motivo clásico. La hoja de la serie de las provincias está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1853–1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgrk_matsushima": {
    "text": [
      "Frente a la costa de Mutsu están las islas de Matsushima en el agua tranquila, una de las vistas bellas clásicas de Japón. Los pinos se alzan sobre las rocas, el horizonte es amplio.",
      "La hoja de la serie de las provincias muestra el famoso archipiélago del norte. La conserva la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1853–1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgrk_ishiyama": {
    "text": [
      "El templo Ishiyama se alza sobre el lago Biwa, en la provincia de Ōmi; luna, lago y templo pertenecen a las ocho vistas clásicas de Ōmi, aquí en la serie posterior de las provincias.",
      "Hiroshige vuelve al lugar que ya había dibujado en la década de 1830 en las ocho vistas de Ōmi. La hoja está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1853–1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgrk_nikko": {
    "text": [
      "En Nikkō, en la provincia de Shimotsuke, la cascada Urami cae detrás de un saliente de roca; el agua se ve desde detrás, entre roca y bosque.",
      "La hoja de la serie de las provincias muestra una de las cascadas conocidas del monte sagrado de Nikkō. Está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1853–1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgrk_noto": {
    "text": [
      "En la costa de Noto, rocas y oleaje bajo un cielo amplio; Taki no ura es un lugar famoso de la península.",
      "La hoja de la serie de 1853–1856 está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1853–1856. Biblioteca del Congreso, Washington."
  },
  "hgrk_izumo": {
    "text": [
      "En el Gran Santuario de Izumo, en la provincia de Izumo, la gente se reúne para la fiesta Hotohoto. Faroles, árboles y los pabellones del santuario llenan la hoja.",
      "La hoja de fiesta de la serie de las provincias, de 1853, está en el Cleveland Museum of Art."
    ],
    "fact": "1853–1856. Cleveland Museum of Art."
  },
  "hgrk_sado": {
    "text": [
      "En la isla de Sado, unas galerías entran en la montaña; trabajadores y un carro están en el valle, un arroyo corre ante las bocas oscuras, y encima se alzan laderas boscosas.",
      "Las minas de oro son la hoja de la provincia de Sado en la serie de las más de sesenta provincias. Esta estampa de 1853 está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1853–1856. Biblioteca del Congreso, Washington."
  },
  "hgmeh_nihonbashi": {
    "text": [
      "Tras la nieve, Nihonbashi está clara y amplia; el cielo despejado, el puente y el río de la capital oriental a la luz del invierno.",
      "En 1856 empieza, con Uoya Eikichi (Sakanaya Eikichi), la serie «Cien vistas famosas de Edo». La hoja inicial en Nihonbashi está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgmeh_kasumi": {
    "text": [
      "La calle de Kasumigaseki lleva hacia el fondo de la ciudad; tejados, muros y transeúntes se escalonan cuesta abajo, la vista es amplia y clara.",
      "La hoja de 1856 pertenece a las primeras hojas de las Cien vistas. Está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgmeh_suruga": {
    "text": [
      "Por la calle de Suruga-chō aparece el Fuji entre los tejados de las tiendas de telas; la montaña está justo en el eje de la calle.",
      "La hoja de 1856 es una de las vistas urbanas conocidas de la serie. Esta estampa está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1856. Biblioteca del Congreso, Washington."
  },
  "hgmeh_shinobazu": {
    "text": [
      "El pabellón Kiyomizu de Ueno se alza sobre el estanque Shinobazu; los cerezos en flor y el agua llenan la vista, y el pabellón sobresale sobre pilares en la ladera.",
      "La hoja de las Cien vistas está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1856. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgmeh_suidobashi": {
    "text": [
      "Sobre el puente Suidō y el barrio de Surugadai hay una cometa al viento; el Fuji aparece a lo lejos sobre los tejados.",
      "La hoja de 1857 está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1857. Biblioteca del Congreso, Washington."
  },
  "hgmeh_yatsumi": {
    "text": [
      "Desde el puente Yatsumi la vista va sobre el agua y los pilotes; una rama entra en la imagen, y la ciudad está tranquila más allá.",
      "La hoja de 1856 de las Cien vistas está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1856. Biblioteca del Congreso, Washington."
  },
  "hgmeh_plum": {
    "text": [
      "En el jardín de ciruelos de Kameido un tronco en flor, muy curvado, está cerca en primer plano; detrás están el jardín, los visitantes y el cielo amplio y rojizo.",
      "La hoja aparece en el undécimo mes de 1857 en la serie de las Cien vistas. Esta estampa la conserva la Chester Beatty Library de Dublín."
    ],
    "fact": "1857. Chester Beatty Library, Dublín."
  },
  "hgmeh_iris": {
    "text": [
      "En Horikiri los lirios se alzan altos en primer plano; las hojas y las flores llenan la imagen, y detrás están el jardín y figuras pequeñas.",
      "La hoja de 1857 es una de las vistas de jardín más conocidas de la serie. Esta estampa está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1857. Biblioteca del Congreso, Washington."
  },
  "hgmeh_asukayama": {
    "text": [
      "Desde la colina de Asukayama la vista va hacia el norte sobre cerezos, la llanura y el Fuji lejano. La colina es un lugar querido de la ciudad para la fiesta de las flores.",
      "La hoja de las Cien vistas está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1856–1857. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgmeh_ukeji": {
    "text": [
      "En el recinto del santuario Akiba en Ukeji hay árboles de otoño sobre un estanque; el follaje y el reflejo llenan la superficie con colores tranquilos y fuertes.",
      "La hoja de 1857 de las Cien vistas está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1857. Rijksmuseum, Ámsterdam."
  },
  "hgmeh_sazaido": {
    "text": [
      "El pabellón en espiral (Sazaidō) del templo de los Quinientos Arhats se alza sobre el agua; el edificio insólito y redondo se ve desde la ciudad.",
      "La hoja de las Cien vistas está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1857. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgmeh_mama": {
    "text": [
      "En Mama, arces rojos se alzan sobre la capilla de Tekona y el puente enlazado; el follaje de otoño cuelga cerca dentro de la imagen.",
      "La hoja de las Cien vistas está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1857. Biblioteca de la Dieta Nacional, Tokio."
  },
  "ohashi": {
    "text": [
      "Una lluvia de verano sorprende a la gente sobre el Shin-Ōhashi; los paraguas se inclinan, las tablas brillan, el río está oscuro debajo, y en la otra orilla está Atake.",
      "La hoja de 1857 de las Cien vistas famosas de Edo es una de las imágenes de tiempo atmosférico más conocidas de Hiroshige. Esta estampa está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1857. Biblioteca del Congreso, Washington (esta estampa)."
  },
  "hgmeh_fireworks": {
    "text": [
      "Sobre el puente Ryōgoku y el Sumida suben fuegos artificiales al cielo nocturno; las barcas se apiñan en el agua, y el puente está lleno de gente.",
      "La hoja aparece en 1858, el último año de vida de Hiroshige, en la serie de las Cien vistas. Está en el Cleveland Museum of Art."
    ],
    "fact": "1858. Cleveland Museum of Art."
  },
  "hgmeh_moonpine": {
    "text": [
      "En Ueno una rama de pino forma un anillo por el que la vista cae sobre el estanque Shinobazu; la rama está cerca y oscura ante el agua.",
      "El «pino de la luna» de 1857 es uno de los famosos motivos de primer plano de la serie. Esta estampa está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1857. Biblioteca del Congreso, Washington."
  },
  "hgmeh_senju": {
    "text": [
      "El gran puente de Senju cruza el río en el borde norte de la ciudad; viajeros y el agua amplia llenan la hoja.",
      "La hoja de 1856 de las Cien vistas está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1856. Biblioteca del Congreso, Washington."
  },
  "hgmeh_mannen": {
    "text": [
      "Bajo el puente Mannen, en Fukagawa, está el agua; a menudo el caparazón de una tortuga entra en el primer plano, y encima el puente y los almacenes.",
      "La hoja de 1857 está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1857. Biblioteca del Congreso, Washington."
  },
  "hgmeh_ayase": {
    "text": [
      "En el río Ayase, en Kanegafuchi, hay plantas cerca en primer plano; detrás de las hojas está el río tranquilo de la ciudad oriental.",
      "La hoja de 1857 de las Cien vistas está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1857. Biblioteca del Congreso, Washington."
  },
  "hgmeh_jumbo": {
    "text": [
      "Un águila está posada en un tronco nevado y mira sobre la amplia llanura nevada de Jūmantsubo, en Fukagawa; el cielo es frío y amplio.",
      "La hoja de 1857 es una de las vistas de invierno conocidas de la serie. Está en el Rijksmuseum de Ámsterdam."
    ],
    "fact": "1857. Rijksmuseum, Ámsterdam."
  },
  "hgmeh_azuma": {
    "text": [
      "Desde el puente Azuma la vista va hacia el lejano pabellón del templo Kinryūzan, en Asakusa; el río y las barcas están en el plano medio.",
      "La hoja de 1857 de las Cien vistas está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1857. Biblioteca del Congreso, Washington."
  },
  "hgmeh_bikuni": {
    "text": [
      "El puente Bikuni está bajo una nieve espesa; tejados, barandillas y el camino se hunden en el blanco, y la ciudad está en silencio.",
      "La hoja aparece en 1858 en la serie de las Cien vistas. Esta estampa está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1858. Biblioteca del Congreso, Washington."
  },
  "hgmeh_saruwaka": {
    "text": [
      "En el barrio de teatros de Saruwaka-chō las sombras de los transeúntes se recortan nítidas a la luz de la luna; la calle de los teatros está de noche a la vez animada y tranquila.",
      "La hoja de las Cien vistas está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1856–1857. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgmeh_meguro": {
    "text": [
      "En Meguro el empinado puente de tambor se arquea sobre el camino; encima está la colina del ocaso, y los viajeros suben el puente en arco.",
      "La hoja de 1857 de las Cien vistas está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1857. Biblioteca del Congreso, Washington."
  },
  "hgmeh_takata": {
    "text": [
      "En el campo de equitación de Takata corren caballos bajo los árboles; el terreno de práctica abierto está en el borde de la ciudad.",
      "La hoja de 1857 de las Cien vistas está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1857. Biblioteca del Congreso, Washington."
  },
  "hgmeh_foxfires": {
    "text": [
      "En la noche de Nochevieja los zorros se reúnen con sus luces de fuego bajo un árbol en Ōji; las luces están como faroles en el paisaje oscuro ante los campos.",
      "La hoja de 1857 es una de las hojas tardías y conocidas de las Cien vistas. Está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1857. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgmeh_shiba": {
    "text": [
      "En Shiba están el santuario Shinmei y el recinto del templo Zōjō-ji; tejados, árboles y el camino llevan al terreno sagrado en el borde de la ciudad.",
      "La hoja de las Cien vistas está en la Biblioteca de la Dieta Nacional de Tokio."
    ],
    "fact": "1857–1858. Biblioteca de la Dieta Nacional, Tokio."
  },
  "hgfuji_enoshima": {
    "text": [
      "La puerta en el acceso a la isla de Enoshima está ante el mar; detrás de la costa de Sagami se alza el Fuji.",
      "En 1858 aparece, editada por Tsutaya Kichizō (Kōeidō), una serie de treinta y seis vistas del Fuji. Esta hoja está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1858. Biblioteca del Congreso, Washington."
  },
  "hgfuji_miho": {
    "text": [
      "En la playa de pinos de Miho, en la provincia de Suruga, los árboles están ante el mar; el Fuji aparece sobre la bahía, una vista clásica de la montaña.",
      "La hoja pertenece a la serie del Fuji de 1858. Está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1858. Biblioteca del Congreso, Washington."
  },
  "hgfuji_satta": {
    "text": [
      "Frente a la costa de Satta, en Suruga, se encrespan las olas; a través del agua y la espuma aparece el Fuji, cercano y firme sobre el mar.",
      "La hoja de la serie del Fuji de 1858 es una de las vistas de mar tardías más conocidas de Hiroshige. Esta estampa está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1858. Biblioteca del Congreso, Washington."
  },
  "hgfuji_hakone": {
    "text": [
      "En el lago de Hakone el Fuji está sobre el agua y las montañas; el paisaje del paso, que Hiroshige ya había dibujado en la serie del Tōkaidō, reaparece aquí en la serie tardía del Fuji.",
      "La hoja de 1858 está en la Biblioteca del Congreso de Washington."
    ],
    "fact": "1858. Biblioteca del Congreso, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
