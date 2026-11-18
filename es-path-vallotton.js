// v10.21 ES content for Félix Vallotton’s life journey, Part 1 (1865–1925). Faithful translation of DE/EN.
(function () {
  var P = window.ES = window.ES || {};
  P.museums = Object.assign(P.museums || {}, {
  "Musée Toulouse-Lautrec, Albi": "Musée Toulouse-Lautrec, Albi",
  "Musée d’Orsay, Paris": "Musée d’Orsay, París",
  "MuMA, Le Havre": "MuMA, Le Havre",
  "Privatsammlung": "Colección particular",
  "Kunsthaus Zürich": "Kunsthaus de Zúrich",
  "Musée cantonal des Beaux-Arts, Lausanne": "Musée cantonal des Beaux-Arts, Lausana",
  "Baltimore Museum of Art": "Baltimore Museum of Art"
});
  P.works = Object.assign(P.works || {}, {
  "fvmother": {
    "title": "La madre del artista",
    "museum": "Musée cantonal des Beaux-Arts, Lausana"
  },
  "fvbrother": {
    "title": "Paul Vallotton, el hermano del artista",
    "museum": "Colección particular"
  },
  "fvvalse": {
    "title": "El vals",
    "museum": "MuMA, Le Havre"
  },
  "fvmensonge": {
    "title": "La mentira",
    "museum": "Baltimore Museum of Art"
  },
  "fvpiano": {
    "title": "Madame Vallotton al piano",
    "museum": "Musée Toulouse-Lautrec, Albi"
  },
  "ballon": {
    "title": "El balón",
    "museum": "Musée d’Orsay, París"
  },
  "fvredback": {
    "title": "Interior con mujer de rojo, de espaldas",
    "museum": "Kunsthaus de Zúrich"
  },
  "fvhonfleur": {
    "title": "Honfleur, mañana de verano",
    "museum": "Colección particular"
  },
  "fvsunset": {
    "title": "Puesta de sol en Villerville",
    "museum": "Kunsthaus de Zúrich"
  },
  "fvchemin": {
    "title": "Camino soleado",
    "museum": "Colección particular"
  },
  "fvself": {
    "title": "Autorretrato",
    "museum": "Kunsthaus de Zúrich"
  }
});
  P.paths = P.paths || {};
  P.paths.vallotton = {
  "title": "El camino de vida de Félix Vallotton",
  "life": "1865–1925",
  "part": "Parte 1 · De Lausana a Honfleur",
  "subtitle": "Los Nabis, los interiores y la luz de Normandía",
  "intro": "Viaja con Félix Vallotton, el pintor de Lausana que en París se suma a los Nabis: desde los retratos tempranos, pasando por los interiores nítidos y «El balón», hasta los paisajes de Honfleur. Estaciones breves y cuadros para colorear. Esta primera parte llega hasta los años tardíos.",
  "ending": [
    "Vallotton muere en Neuilly-sur-Seine el 29 de diciembre de 1925, un día después de su sesenta cumpleaños. Sigue unido por igual al cantón de Vaud y a Francia.",
    "El camino puede seguir creciendo. Xilografías, más naturalezas muertas y los paisajes tardíos del sur pueden seguir en una parte posterior."
  ],
  "epilogue": "El 29 de diciembre de 1925 Vallotton muere en Neuilly-sur-Seine, a los sesenta años. Una parte posterior puede añadir xilografías y más naturalezas muertas."
};
  P.stations = Object.assign(P.stations || {}, {
  "fvlausanne": {
    "place": "Lausana · Origen",
    "when": "1865–1886",
    "mapLabel": "Lausana",
    "intro": [
      "Félix Vallotton nace en Lausana el 28 de diciembre de 1865. En 1882 se va a París, a la Académie Julian, y permanece unido a la vez a la ciudad y al cantón de Vaud.",
      "Los retratos tempranos de la madre y del hermano muestran con qué precisión, ya de joven pintor, se sienta frente a una persona."
    ]
  },
  "fvnabis": {
    "place": "París · Los Nabis",
    "when": "1893–1899",
    "mapLabel": "París",
    "intro": [
      "En París Vallotton se suma a los Nabis, junto a Bonnard y Vuillard. También se da a conocer por sus xilografías en blanco y negro, pero sigue pintando al óleo, con planos nítidos y un corte firme.",
      "En 1899 se casa con Gabrielle Rodrigues-Henriques y queda ligado a la galería Bernheim-Jeune. En 1900 obtiene la ciudadanía francesa."
    ]
  },
  "fvinterieur": {
    "place": "Interiores",
    "when": "1893–1905",
    "mapLabel": "Interior",
    "intro": [
      "En los mismos años Vallotton pinta interiores en los que el color y la postura dicen más que un relato. Le bastan el rojo, la sombra y la espalda de una mujer sentada.",
      "Los interiores están cerca de sus xilografías: poco detalle, un corte firme, una mirada fría sobre lo cotidiano."
    ]
  },
  "fvhonfleur": {
    "place": "Honfleur y la costa",
    "when": "1901–1917",
    "mapLabel": "Honfleur",
    "intro": [
      "Ya en 1901 Vallotton pinta el puerto de Honfleur de noche. Desde 1909 tiene allí una casa; la costa normanda se vuelve su segundo estudio.",
      "Mañanas de verano, caminos al sol y puestas tardías: ordena la luz en franjas serenas y firmes."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "fvmother": {
    "text": [
      "El retrato temprano muestra a la madre de Vallotton con una observación serena y precisa. El joven pintor de Lausana aún busca su tono, pero la mirada ya es firme.",
      "En 1882 se fue a París, a la Académie Julian. El cuadro de 1884 conserva el vínculo con la familia."
    ],
    "fact": "1884. Musée cantonal des Beaux-Arts, Lausana."
  },
  "fvbrother": {
    "text": [
      "El hermano menor posa para Félix. El retrato es sencillo y cercano, sin gran patetismo, aún en un tono de taller más oscuro.",
      "Los hermanos siguen unidos, también cuando Félix se afirma en París. Más tarde Paul trabaja en Lausana como marchante."
    ],
    "fact": "1886. Colección particular."
  },
  "fvvalse": {
    "text": [
      "Las parejas giran en el vals, los vestidos se vuelven campos de color en movimiento. Vallotton simplifica la escena hasta que quedan el ritmo y la luz.",
      "El cuadro de 1893 nace cerca de los Nabis. El recorte recuerda ya sus xilografías: nítido, firme, sin detalle de más."
    ],
    "fact": "1893. MuMA, Le Havre."
  },
  "fvmensonge": {
    "text": [
      "Una pareja en un interior, muy cerca, el gesto ambiguo. Vallotton da a la escena un corte frío, casi cortante.",
      "El cuadro de 1898 pertenece a los interiores en los que muestra a la vez la cercanía y la distancia. Nada queda al azar."
    ],
    "fact": "1898. Baltimore Museum of Art."
  },
  "fvpiano": {
    "text": [
      "Gabrielle está sentada al piano, la espalda un poco inclinada, la habitación en planos de color serenos. Vallotton se casa con ella en 1899, el mismo año del cuadro.",
      "A través de ella queda ligado a la galería Bernheim-Jeune. El interior sigue frío y atento, sin patetismo privado."
    ],
    "fact": "1899. Musée Toulouse-Lautrec, Albi."
  },
  "ballon": {
    "text": [
      "Desde arriba se ve a un niño en un parque correr tras un balón rojo. Dos figuritas están a la sombra de los árboles.",
      "Vallotton pintó la escena en 1899, probablemente en las Tullerías. El plano es nítido, la sombra cortante, la mirada casi de xilografía."
    ],
    "fact": "1899. Musée d’Orsay, París."
  },
  "fvredback": {
    "text": [
      "Una mujer de rojo está sentada de espaldas al espectador; el sillón y el muro son grandes planos serenos. Vallotton omite el rostro.",
      "El cuadro del Kunsthaus de Zúrich pertenece a los interiores callados en los que la postura y el color dicen más que una acción."
    ],
    "fact": "1903. Kunsthaus de Zúrich."
  },
  "fvhonfleur": {
    "text": [
      "Una mañana de verano sobre Honfleur, la luz reposa en calma sobre el agua y las casas. Vallotton simplifica la ciudad hasta convertirla en un paisaje nítido.",
      "Desde 1909 tiene allí una casa. La costa normanda se vuelve durante años su otro estudio, junto a París."
    ],
    "fact": "hacia 1910. Colección particular."
  },
  "fvsunset": {
    "text": [
      "El cielo sobre Villerville arde en franjas horizontales de color, el mar permanece pesado y oscuro. Vallotton ordena la puesta de sol como un relieve.",
      "El cuadro del Kunsthaus de Zúrich pertenece a los paisajes costeros tardíos en los que la luz misma se vuelve el tema."
    ],
    "fact": "hacia 1917. Kunsthaus de Zúrich."
  },
  "fvchemin": {
    "text": [
      "Un camino yace bajo una luz de sol dura, las sombras son breves y firmes. Vallotton pinta el calor sin transiciones blandas.",
      "El cuadro de 1914 cae en los años de la guerra, pero sigue siendo un paisaje de orden: luz, camino, el borde de los árboles."
    ],
    "fact": "1914. Colección particular."
  },
  "fvself": {
    "text": [
      "En 1905 Vallotton se mira con firmeza y sin adorno. El rostro está nítidamente recortado, el fondo es sereno.",
      "Ya es ciudadano francés y un pintor conocido de la generación Nabi. El retrato sigue sobrio, casi austero."
    ],
    "fact": "1905. Kunsthaus de Zúrich."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
