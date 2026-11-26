// v10.43 FR content for Eugène Boudin’s life journey (1824–1898). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "ebfestival": {
    "title": "Fête dans le port de Honfleur",
    "museum": "National Gallery of Art, Washington"
  },
  "ebopensky": {
    "title": "Marine au ciel ouvert",
    "museum": "Musée d’art de Cleveland"
  },
  "ebbeach62": {
    "title": "Plage de Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebtrouville63": {
    "title": "Sur la plage de Trouville",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ebjetty": {
    "title": "Jetée et quai à Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebtrouville63b": {
    "title": "Scène de plage à Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebdieppe": {
    "title": "Sur la plage, Dieppe",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ebconcert": {
    "title": "Concert au casino de Deauville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebfourwomen": {
    "title": "Quatre femmes à Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebconversation": {
    "title": "Conversation sur la plage",
    "museum": "National Gallery of Art, Washington"
  },
  "ebdogs": {
    "title": "Dames et monsieur se promenant sur la plage avec deux chiens",
    "museum": "National Gallery of Art, Washington"
  },
  "ebbrittany": {
    "title": "Côte de Bretagne",
    "museum": "National Gallery of Art, Washington"
  },
  "ebbordeaux": {
    "title": "Vue de Bordeaux, depuis le quai des Chartrons",
    "museum": "Musée d’art de Cleveland"
  },
  "ebfair": {
    "title": "Foire en Bretagne",
    "museum": "National Gallery of Art, Washington"
  },
  "ebscheveningen": {
    "title": "Marée basse à Scheveningen",
    "museum": "National Gallery of Art, Washington"
  },
  "ebbeach77": {
    "title": "La plage",
    "museum": "National Gallery of Art, Washington"
  },
  "ebberck": {
    "title": "Femmes sur la plage de Berck",
    "museum": "National Gallery of Art, Washington"
  },
  "ebhavreentry": {
    "title": "Entrée du port du Havre",
    "museum": "National Gallery of Art, Washington"
  },
  "ebhavre": {
    "title": "Le Havre",
    "museum": "National Gallery of Art, Washington"
  },
  "ebtrouville87": {
    "title": "Sur la plage, Trouville",
    "museum": "National Gallery of Art, Washington"
  },
  "ebhavreships": {
    "title": "Navires et voiliers quittant Le Havre",
    "museum": "National Gallery of Art, Washington"
  },
  "ebvalery": {
    "title": "Vue du port de Saint-Valéry-sur-Somme",
    "museum": "Musée d’art de Cleveland"
  },
  "ebbeaulieu": {
    "title": "Beaulieu : la baie des Fourmis",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "ebbeach94": {
    "title": "Sur la plage",
    "museum": "National Gallery of Art, Washington"
  },
  "ebetretat": {
    "title": "Laveuses sur la plage d’Étretat",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.boudin = {
  "title": "Le parcours de vie d’Eugène Boudin",
  "part": "Ciels, plages et ports",
  "subtitle": "Le roi des ciels",
  "intro": "Voyage à travers la vie d’Eugène Boudin : des ports de Normandie et des plages de Trouville jusqu’à Bordeaux, la Hollande et la Méditerranée. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Eugène Boudin meurt à Deauville en 1898, à 74 ans.",
    "La même année, la galerie Durand-Ruel de New York expose 49 de ses tableaux."
  ],
  "epilogue": "Eugène Boudin meurt en 1898. Le parcours mène de Honfleur et du Havre à Bordeaux, à la Hollande et à la Riviera, en passant par Trouville.",
  "life": "1824–1898"
};
  P.stations = Object.assign(P.stations || {}, {
  "ebs1": {
    "place": "Une boutique d’encadreur au Havre",
    "when": "1858–1860",
    "mapLabel": "Honfleur et Le Havre",
    "intro": [
      "Eugène Boudin naît à Honfleur en 1824, fils d’un capitaine de navire ; au Havre, il ouvre une boutique de papetier-encadreur où des peintres comme Jean-François Millet l’encouragent à peindre.",
      "En 1851, la ville du Havre lui accorde une bourse pour étudier à Paris ; de retour en Normandie, il rencontre le jeune Claude Monet et le convainc de peindre en plein air."
    ]
  },
  "ebs2": {
    "place": "Les plages de Trouville",
    "when": "1862–1864",
    "mapLabel": "Trouville et Dieppe",
    "intro": [
      "À partir de 1862, Boudin peint sans cesse les plages de Trouville et de Deauville, sur la côte normande.",
      "Sous de vastes ciels, il montre des dames élégantes en crinoline et les cabines de plage au bord de l’eau."
    ]
  },
  "ebs3": {
    "place": "La société sur la plage",
    "when": "1865–1866",
    "mapLabel": "Trouville et Deauville",
    "intro": [
      "Boudin est en grande partie autodidacte et travaille directement d’après nature ; à la fin des années 1860, il peint aux côtés de Claude Monet.",
      "Camille Corot le surnomme le « roi des ciels »."
    ]
  },
  "ebs4": {
    "place": "Voyages : Bretagne, Bordeaux et Hollande",
    "when": "1870–1875",
    "mapLabel": "Bretagne, Bordeaux, Hollande",
    "intro": [
      "Dans les années 1870, il voyage en France, aux Pays-Bas et en Italie ; en 1873, il découvre Bordeaux.",
      "En 1874, il expose à la première exposition du groupe d’artistes bientôt appelés « impressionnistes »."
    ]
  },
  "ebs5": {
    "place": "Plages et navires",
    "when": "1877–1883",
    "mapLabel": "Normandie et Picardie",
    "intro": [
      "Boudin peint surtout de petits paysages des ports et des plages du nord de la France.",
      "Beaucoup de contemporains admirent sa façon de peindre le ciel."
    ]
  },
  "ebs6": {
    "place": "Côtes des dernières années",
    "when": "1887–1894",
    "mapLabel": "Normandie et Riviera",
    "intro": [
      "Dans les années 1890, Boudin peint encore les côtes normandes et voyage jusqu’à la Méditerranée.",
      "Claude Monet dit de lui : « Si je suis devenu peintre, c’est à Eugène Boudin que je le dois. »"
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "ebfestival": {
    "text": [
      "Un grand voilier et des bateaux plus petits sont pavoisés de drapeaux colorés, et des barques pleines de monde se pressent sur l’eau.",
      "Boudin peint le tableau à l’huile sur bois et inscrit « Honfleur » en bas à droite."
    ],
    "fact": "1858. National Gallery of Art, Washington."
  },
  "ebopensky": {
    "text": [
      "Des nuages blancs passent dans un vaste ciel bleu, au-dessus d’une mince bande de mer avec une petite voile.",
      "Boudin dessine la feuille au pastel sur place, car le pastel est facile à transporter et rapide à utiliser."
    ],
    "fact": "1860. Musée d’art de Cleveland."
  },
  "ebbeach62": {
    "text": [
      "Des dames en robes amples, debout ou assises, se tiennent devant des cabines de plage claires, un chien court sur le sable et, à l’horizon, un vapeur laisse une traînée de fumée.",
      "Au-dessus de la scène, le ciel nuageux occupe plus de la moitié du petit panneau."
    ],
    "fact": "1862. National Gallery of Art, Washington."
  },
  "ebtrouville63": {
    "text": [
      "Un cheval tire une cabine de plage sur roues à travers le sable, tandis que des promeneurs à ombrelle se tiennent au bord de l’eau.",
      "Le tableau étroit sur bois ne mesure qu’environ 27 sur 48 centimètres."
    ],
    "fact": "1863. Metropolitan Museum of Art, New York."
  },
  "ebjetty": {
    "text": [
      "Sur un long quai attendent des gens élégamment vêtus, un petit chien trotte au premier plan et un bateau à vapeur crache un nuage de fumée noire.",
      "Boudin peint la scène à l’huile sur bois sous un ciel vaste et mouvementé."
    ],
    "fact": "1863. National Gallery of Art, Washington."
  },
  "ebtrouville63b": {
    "text": [
      "Un groupe de dames en robes claires et sombres est assis sur des chaises sur la plage ; derrière, des drapeaux flottent sur de hauts mâts et des voiliers passent en mer.",
      "Au-dessus s’étend un ciel bleu clair aux nuages légers."
    ],
    "fact": "1863. National Gallery of Art, Washington."
  },
  "ebdieppe": {
    "text": [
      "Le vent gonfle les vêtements d’un groupe sur la plage, un petit chien noir et blanc trotte devant et, au loin, une jetée s’avance dans la mer.",
      "Le tableau presque carré sur bois ne mesure qu’environ 32 sur 29 centimètres."
    ],
    "fact": "1864. Metropolitan Museum of Art, New York."
  },
  "ebconcert": {
    "text": [
      "Sous le toit blanc d’un pavillon ouvert, une foule nombreuse en robes claires écoute la musique.",
      "Derrière le pavillon s’élève une colline verte, et au-dessus s’étend un ciel bleu nuageux."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "ebfourwomen": {
    "text": [
      "Quatre femmes en jupes amples et en capes se tiennent côte à côte ; l’une porte un manteau rouge vif.",
      "Boudin esquisse la petite feuille au crayon et à l’aquarelle ; elle ne mesure qu’environ 11 sur 15 centimètres."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "ebconversation": {
    "text": [
      "Quelques personnes, assises côte à côte sur des chaises, bavardent ; une dame est vêtue de rouge et, à gauche, se tient un chien.",
      "Boudin saisit la scène au crayon et à l’aquarelle sur papier chamois."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "ebdogs": {
    "text": [
      "Un monsieur en redingote sombre et une dame en robe blanche et rouge se tiennent au centre, entourés de dames à ombrelle et de deux chiens.",
      "Boudin peint la feuille à l’aquarelle sur un dessin au crayon."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "ebbrittany": {
    "text": [
      "Au-dessus d’une baie calme aux rochers sombres s’amoncellent des nuages clairs, et au loin navigue un trois-mâts.",
      "À l’horizon brillent des falaises claires ; Boudin peint le tableau à l’huile sur toile."
    ],
    "fact": "1870. National Gallery of Art, Washington."
  },
  "ebbordeaux": {
    "text": [
      "De grands voiliers sont amarrés aux quais de Bordeaux, où l’on charge des marchandises et où des marins rament en canot jusqu’aux navires.",
      "Boudin place l’horizon très bas pour laisser beaucoup de place au ciel et signe en bas « E. Boudin / Bordeaux 1874 »."
    ],
    "fact": "1874. Musée d’art de Cleveland."
  },
  "ebfair": {
    "text": [
      "Sur une vaste place, des gens en coiffes blanches se pressent entre des vaches noires et blanches, tandis qu’un clocher pointu s’élève derrière eux.",
      "En 1898, le tableau sur bois figure dans une exposition consacrée à Boudin chez Durand-Ruel à New York."
    ],
    "fact": "1874. National Gallery of Art, Washington."
  },
  "ebscheveningen": {
    "text": [
      "À marée basse, des bateaux de pêche aux voiles brunes reposent sur le sable, et des nuages blancs passent dans un ciel bleu.",
      "En bas à droite, Boudin inscrit « Schevingue / E. Boudin 75 » sur le tableau."
    ],
    "fact": "1875. National Gallery of Art, Washington."
  },
  "ebbeach77": {
    "text": [
      "En une longue rangée, des gens munis de parapluies noirs sont assis ou debout sur la plage ; derrière eux, la mer scintille avec de petits navires.",
      "Le panneau étroit ne mesure qu’environ 11 sur 26 centimètres."
    ],
    "fact": "1877. National Gallery of Art, Washington."
  },
  "ebberck": {
    "text": [
      "Des femmes en jupes rouges et coiffes blanches, debout ou assises, se tiennent avec des paniers sur une plage vaste et vide.",
      "Au-dessus d’elles s’étend un ciel clair, bleu pâle ; le petit tableau est peint à l’huile sur bois."
    ],
    "fact": "1881. National Gallery of Art, Washington."
  },
  "ebhavreentry": {
    "text": [
      "Deux grands voiliers entrent dans le port, à gauche s’élève une fumée sombre et le ciel argenté se reflète dans l’eau.",
      "Avec environ 119 sur 160 centimètres, c’est l’une des grandes toiles de Boudin."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "ebhavre": {
    "text": [
      "De grands nuages blancs s’amoncellent au-dessus de la mer, où naviguent des voiliers et une barque pleine d’hommes.",
      "Boudin peint la scène à l’huile sur toile, et le ciel occupe près des deux tiers du tableau."
    ],
    "fact": "1883. National Gallery of Art, Washington."
  },
  "ebtrouville87": {
    "text": [
      "Une dame en robe rouge et haut chapeau est assise dans le sable, près d’un enfant et d’autres dames.",
      "Le petit tableau sur bois ne mesure qu’environ 18 sur 33 centimètres."
    ],
    "fact": "1887. National Gallery of Art, Washington."
  },
  "ebhavreships": {
    "text": [
      "Un voilier gîte sous le vent sur la mer verte et agitée, tandis qu’au loin de plus grands navires prennent le large.",
      "Au-dessus, des nuages blancs passent dans un ciel bleu pâle ; le tableau mesure environ 90 sur 131 centimètres."
    ],
    "fact": "1887. National Gallery of Art, Washington."
  },
  "ebvalery": {
    "text": [
      "Une large étendue d’eau mène à un petit port avec des voiliers, bordé d’arbres et de maisons.",
      "De grands nuages gris et blancs passent au-dessus ; Boudin peint le tableau à l’huile sur toile."
    ],
    "fact": "1891. Musée d’art de Cleveland."
  },
  "ebbeaulieu": {
    "text": [
      "Sur la Riviera, une baie bleue s’arrondit sous des montagnes escarpées, et sur la rive des maisons claires se nichent parmi les arbres.",
      "Boudin peint le tableau à l’huile sur toile sous un ciel clair et lumineux."
    ],
    "fact": "1892. Metropolitan Museum of Art, New York."
  },
  "ebbeach94": {
    "text": [
      "Devant une tente de plage rayée de rouge et de blanc, des dames sont assises sur des chaises et des enfants jouent dans le sable.",
      "Le minuscule panneau ne mesure qu’environ 14 sur 24 centimètres."
    ],
    "fact": "1894. National Gallery of Art, Washington."
  },
  "ebetretat": {
    "text": [
      "Au pied d’une haute falaise percée d’une arche, des laveuses étendent du linge coloré sur les galets.",
      "Sur la mer bleue, derrière, naviguent de petites barques ; le tableau est peint à l’huile sur bois."
    ],
    "fact": "1894. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
