// v10.43 FR content for Albert Bierstadt’s life journey (1830–1902). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington",
  "Smithsonian American Art Museum, Washington": "Smithsonian American Art Museum, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "ablucerne": {
    "title": "Le Lac des Quatre-Cantons",
    "museum": "National Gallery of Art, Washington"
  },
  "abbrook": {
    "title": "Ruisseau de montagne",
    "museum": "Art Institute of Chicago"
  },
  "abmerced": {
    "title": "La Merced, vallée de Yosemite",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "abstarrking": {
    "title": "Le Mont Starr King, Yosemite",
    "museum": "Musée d’art de Cleveland"
  },
  "abvesuvius": {
    "title": "Le Vésuve à minuit",
    "museum": "Musée d’art de Cleveland"
  },
  "absierra": {
    "title": "Dans la Sierra Nevada, Californie",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abfirtrees": {
    "title": "Sapins et nuages d’orage",
    "museum": "Musée d’art de Cleveland"
  },
  "absfbay": {
    "title": "La Baie de San Francisco",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abcathedral": {
    "title": "Cathedral Rocks, vallée de Yosemite",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abnevada": {
    "title": "Chute Nevada, Yosemite",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "abcorcoran": {
    "title": "Le Mont Corcoran",
    "museum": "National Gallery of Art, Washington"
  },
  "abgates": {
    "title": "Les Portes de Yosemite",
    "museum": "Smithsonian American Art Museum, Washington"
  },
  "abmountain": {
    "title": "Paysage de montagne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "abseacove": {
    "title": "Crique",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ablouise": {
    "title": "Rocheuses canadiennes (lac Louise)",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "abalaska": {
    "title": "Chaîne côtière de l’Alaska",
    "museum": "Smithsonian American Art Museum, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.bierstadt = {
  "title": "Le parcours de vie d’Albert Bierstadt",
  "part": "Montagnes, lacs et cascades",
  "subtitle": "De la Nouvelle-Angleterre à Yosemite, l’Europe et le Canada",
  "intro": "Voyage à travers la vie d’Albert Bierstadt : des forêts de la Nouvelle-Angleterre à la vallée de Yosemite, en Europe et jusqu’aux montagnes du Canada. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Albert Bierstadt meurt à New York le 18 février 1902.",
    "Ses grands tableaux des montagnes de l’Ouest font connaître ces paysages à beaucoup de gens qui ne les ont jamais vus."
  ],
  "epilogue": "Albert Bierstadt meurt à New York le 18 février 1902. Le parcours mène de la Nouvelle-Angleterre, par Yosemite et l’Europe, jusqu’au Canada et en Alaska.",
  "life": "1830–1902"
};
  P.stations = Object.assign(P.stations || {}, {
  "abs1": {
    "place": "De Solingen à la Nouvelle-Angleterre",
    "when": "1830–1863",
    "mapLabel": "New Bedford",
    "intro": [
      "Albert Bierstadt naît à Solingen, en Allemagne, le 7 janvier 1830 ; en 1831, la famille émigre à New Bedford, dans le Massachusetts.",
      "De 1853 à 1857, il apprend la peinture à Düsseldorf et expose en 1858 à New York un grand paysage suisse."
    ]
  },
  "abs2": {
    "place": "Voyages vers l’Ouest",
    "when": "1859–1866",
    "mapLabel": "Yosemite",
    "intro": [
      "En 1859, Bierstadt part dans les Rocheuses avec le géomètre Frederick W. Lander.",
      "En 1863, il passe sept semaines dans la vallée de Yosemite avec l’écrivain Fitz Hugh Ludlow, puis peint à New York de grands tableaux d’après ses esquisses."
    ]
  },
  "abs3": {
    "place": "Deux ans en Europe",
    "when": "1867–1869",
    "mapLabel": "Rome",
    "intro": [
      "En 1867, Bierstadt se rend à Londres, puis parcourt l’Europe pendant deux ans.",
      "Dans son atelier de Rome, il peint un grand tableau de la Sierra Nevada et l’expose à Berlin et à Londres."
    ]
  },
  "abs4": {
    "place": "De retour en Californie",
    "when": "1870–1873",
    "mapLabel": "San Francisco",
    "intro": [
      "Au début des années 1870, Bierstadt est de nouveau en Californie.",
      "Il peint la baie de San Francisco, les cascades et les falaises de la vallée de Yosemite, ainsi que des études de nuages et d’arbres."
    ]
  },
  "abs5": {
    "place": "Derniers voyages : Canada et Alaska",
    "when": "1876–1902",
    "mapLabel": "Canada",
    "intro": [
      "Bierstadt continue de peindre des montagnes, des lacs et des côtes, souvent en petites esquisses à l’huile.",
      "En 1889, il traverse l’Ouest canadien avec le Canadian Pacific Railway et poursuit en bateau à vapeur jusqu’en Alaska."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ablucerne": {
    "text": [
      "Derrière les arbres et les prés s’étend le lac bleu, dominé par des montagnes enneigées.",
      "Bierstadt peint ce tableau après ses années d’études à Düsseldorf."
    ],
    "fact": "1858. National Gallery of Art, Washington."
  },
  "abbrook": {
    "text": [
      "Un petit ruisseau descend entre des rochers moussus à travers une forêt dense.",
      "Le tableau montre les White Mountains du New Hampshire, et en 1863 les critiques le qualifient de sa meilleure œuvre."
    ],
    "fact": "1863. Art Institute of Chicago."
  },
  "abmerced": {
    "text": [
      "De hautes parois de granit dominent la paisible Merced, dans la vallée de Yosemite.",
      "Au premier plan, des pins baignent dans une lumière chaude."
    ],
    "fact": "1866. Metropolitan Museum of Art, New York."
  },
  "abstarrking": {
    "text": [
      "Au loin, le sommet de granit du mont Starr King domine la vallée de Yosemite.",
      "En 1864, le président Lincoln signe une loi qui protège Yosemite."
    ],
    "fact": "1866. Musée d’art de Cleveland."
  },
  "abvesuvius": {
    "text": [
      "De la lave rouge et des cendres jaillissent la nuit du Vésuve, près de Naples.",
      "On ne sait pas avec certitude si Bierstadt a vu l’éruption lui-même."
    ],
    "fact": "1868. Musée d’art de Cleveland."
  },
  "absierra": {
    "text": [
      "Des parois rocheuses abruptes et une cascade entourent un lac de montagne paisible dans la Sierra Nevada.",
      "Le tableau mesure environ trois mètres de large."
    ],
    "fact": "1868. Smithsonian American Art Museum, Washington."
  },
  "abfirtrees": {
    "text": [
      "Des sapins sombres se dressent sous de hauts nuages d’orage.",
      "Bierstadt peint cette étude à l’huile sur papier."
    ],
    "fact": "vers 1870. Musée d’art de Cleveland."
  },
  "absfbay": {
    "text": [
      "Une eau grise et calme s’étend devant une rive plate de la baie de San Francisco.",
      "Bierstadt peint cette petite esquisse à l’huile sur carton."
    ],
    "fact": "1871–1873. Smithsonian American Art Museum, Washington."
  },
  "abcathedral": {
    "text": [
      "Derrière de grands sapins se dressent les falaises de Cathedral Rocks, dans la vallée de Yosemite.",
      "Au premier plan, les arbres se reflètent dans la rivière."
    ],
    "fact": "vers 1872. Smithsonian American Art Museum, Washington."
  },
  "abnevada": {
    "text": [
      "La chute Nevada se précipite en écumant entre des sapins sombres vers la vallée.",
      "En bas, sur la rive, on aperçoit deux petites silhouettes."
    ],
    "fact": "1872–1873. Metropolitan Museum of Art, New York."
  },
  "abcorcoran": {
    "text": [
      "Un lac de montagne vert s’étend entre de grands arbres au pied d’un sommet enneigé.",
      "Des nuages passent sur le sommet."
    ],
    "fact": "vers 1876–1877. National Gallery of Art, Washington."
  },
  "abgates": {
    "text": [
      "De puissantes parois rocheuses forment une porte naturelle à l’entrée de la vallée de Yosemite.",
      "Entre elles, la rivière coule paisiblement."
    ],
    "fact": "vers 1882. Smithsonian American Art Museum, Washington."
  },
  "abmountain": {
    "text": [
      "Un lac parsemé de petites îles boisées s’étend devant des sommets enneigés.",
      "Bierstadt peint cette esquisse à l’huile sur papier."
    ],
    "fact": "1880–1890. Metropolitan Museum of Art, New York."
  },
  "abseacove": {
    "text": [
      "Deux arbres courbés par le vent se dressent sur une falaise au-dessus d’une petite crique au sable clair.",
      "Bierstadt peint ce petit tableau sur bois."
    ],
    "fact": "vers 1880–1890. Metropolitan Museum of Art, New York."
  },
  "ablouise": {
    "text": [
      "Un lac de montagne s’étend parmi les sapins au pied d’un sommet couvert de glaciers.",
      "Le lac Louise se trouve dans les Rocheuses, dans l’Ouest canadien."
    ],
    "fact": "vers 1889. Metropolitan Museum of Art, New York."
  },
  "abalaska": {
    "text": [
      "Des montagnes grises et enneigées s’élèvent au-dessus d’un bras de mer tranquille.",
      "Cette esquisse à l’huile a probablement été peinte sur place, pendant son voyage en Alaska."
    ],
    "fact": "vers 1889. Smithsonian American Art Museum, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
