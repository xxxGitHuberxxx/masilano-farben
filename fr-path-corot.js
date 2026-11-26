// v10.43 FR content for Camille Corot’s life journey (1796–1875). Faithful translation of DE/EN.
(function () {
  var P = window.FR = window.FR || {};
  P.museums = Object.assign(P.museums || {}, {
  "Art Institute of Chicago": "Art Institute of Chicago",
  "Cleveland Museum of Art": "Musée d’art de Cleveland",
  "Metropolitan Museum of Art, New York": "Metropolitan Museum of Art, New York",
  "National Gallery of Art, Washington": "National Gallery of Art, Washington"
});
  P.works = Object.assign(P.works || {}, {
  "jcpeasant": {
    "title": "Jeune paysan italien",
    "museum": "National Gallery of Art, Washington"
  },
  "jcbartolomeo": {
    "title": "L’île et le pont San Bartolomeo, Rome",
    "museum": "National Gallery of Art, Washington"
  },
  "jcterni": {
    "title": "Cascade de Terni",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcalbano": {
    "title": "Lac d’Albano et Castel Gandolfo",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jccervara": {
    "title": "La Cervara, la campagne romaine",
    "museum": "Musée d’art de Cleveland"
  },
  "jchonfleur": {
    "title": "Honfleur : le calvaire",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jclemaistre": {
    "title": "Toussaint Lemaistre",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcmacon": {
    "title": "Pont sur la Saône à Mâcon",
    "museum": "National Gallery of Art, Washington"
  },
  "jcgenoa": {
    "title": "Vue de Gênes",
    "museum": "Art Institute of Chicago"
  },
  "jcvolterra": {
    "title": "Vue près de Volterra",
    "museum": "National Gallery of Art, Washington"
  },
  "jceel": {
    "title": "Les Pêcheurs d’anguilles",
    "museum": "National Gallery of Art, Washington"
  },
  "jccurious": {
    "title": "La Petite Curieuse",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcagostina": {
    "title": "Agostina",
    "museum": "National Gallery of Art, Washington"
  },
  "jcreadstudio": {
    "title": "Liseuse dans l’atelier",
    "museum": "National Gallery of Art, Washington"
  },
  "jcreading": {
    "title": "Une liseuse",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcinterrupted": {
    "title": "La Lecture interrompue",
    "museum": "Art Institute of Chicago"
  },
  "jcsibylle": {
    "title": "Sibylle",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "jcwillows": {
    "title": "Saules et ferme à Sainte-Catherine-lès-Arras",
    "museum": "Musée d’art de Cleveland"
  },
  "jcarleux": {
    "title": "Arleux-Palluel, le pont des Rendez-vous",
    "museum": "Art Institute of Chicago"
  },
  "jccoubron": {
    "title": "La Forêt de Coubron",
    "museum": "National Gallery of Art, Washington"
  },
  "jcstumpf": {
    "title": "Madame Stumpf et sa fille",
    "museum": "National Gallery of Art, Washington"
  },
  "jcetretat": {
    "title": "Plage près d’Étretat",
    "museum": "National Gallery of Art, Washington"
  },
  "jcmorieri": {
    "title": "Italienne (La Morieri)",
    "museum": "National Gallery of Art, Washington"
  }
});
  P.paths = P.paths || {};
  P.paths.corot = {
  "title": "Le parcours de vie de Camille Corot",
  "part": "Rome, la France et l’atelier",
  "subtitle": "Lumière, paysage et figures paisibles",
  "intro": "Voyage à travers la vie de Camille Corot : de Rome et de la campagne italienne jusqu’à son atelier parisien, en traversant la France. Les images viennent de musées qui partagent librement leurs reproductions.",
  "ending": [
    "Camille Corot meurt à Paris en février 1875, à 78 ans.",
    "Il est considéré comme le paysagiste français le plus influent du XIXe siècle."
  ],
  "epilogue": "Camille Corot meurt en 1875. Le parcours mène de Rome à son atelier parisien, à travers les paysages de France.",
  "life": "1796–1875"
};
  P.stations = Object.assign(P.stations || {}, {
  "jcs1": {
    "place": "Trois années en Italie",
    "when": "1825–1828",
    "mapLabel": "Rome et ses environs",
    "intro": [
      "Camille Corot naît à Paris en 1796 ; ce n’est qu’à 26 ans qu’il quitte le commerce des draps pour devenir peintre.",
      "De 1825 à 1828, il vit à Rome et dessine et peint souvent en plein air dans la campagne environnante."
    ]
  },
  "jcs2": {
    "place": "Retour en France",
    "when": "1830–1834",
    "mapLabel": "Normandie et Bourgogne",
    "intro": [
      "À son retour, Corot peint de grands tableaux d’après ses dessins et esquisses à l’huile d’Italie, rigoureusement construits comme des paysages classiques.",
      "Il voyage aussi à travers la France, par exemple sur la côte normande et en Bourgogne, et peint également des portraits."
    ]
  },
  "jcs3": {
    "place": "Retour en Italie",
    "when": "1834–1838",
    "mapLabel": "Gênes et la Toscane",
    "intro": [
      "En 1834, Corot repart pour l’Italie et y peint notamment une vue de Gênes.",
      "En 1838, il expose au Salon de Paris un paysage près de Volterra, en Toscane."
    ]
  },
  "jcs4": {
    "place": "Souvenirs et figures",
    "when": "1860–1866",
    "mapLabel": "France",
    "intro": [
      "Avec ses eaux calmes, ses arbres vaporeux et son feuillage moucheté de lumière, Corot séduit désormais un large public.",
      "Parallèlement, il peint des figures qu’il n’expose et ne vend presque jamais."
    ]
  },
  "jcs5": {
    "place": "Liseuses à l’atelier",
    "when": "1868–1870",
    "mapLabel": "Paris",
    "intro": [
      "Dans son atelier, Corot peint des modèles en train de lire ou de rêver ; il n’expose presque jamais ces figures.",
      "Il aime habiller ses modèles de costumes italiens, car il aime tout ce qui est italien."
    ]
  },
  "jcs6": {
    "place": "Arras, forêt et côte",
    "when": "1871–1872",
    "mapLabel": "Nord de la France",
    "intro": [
      "En 1871, Corot séjourne à Arras, à quelque 160 kilomètres au nord de Paris, et y peint des saules, de l’eau et des villages.",
      "En 1872 suivent des scènes de forêt, une plage normande et des portraits comme celui de Madame Stumpf et de sa fille."
    ]
  }
});
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "jcpeasant": {
    "text": [
      "Un garçon au chapeau sombre et à la chemise claire se renverse tranquillement en arrière et nous regarde.",
      "Corot peint l’étude en Italie, à l’huile sur papier, et la signe « COROT » en bas à gauche."
    ],
    "fact": "1825–1827. National Gallery of Art, Washington."
  },
  "jcbartolomeo": {
    "text": [
      "Des maisons claires et un clocher se dressent sur l’île Tibérine à Rome, un pont à arches y mène à gauche, et tout se reflète dans le fleuve.",
      "Corot peint l’étude en plein air, à l’huile sur papier, et la signe « COROT » en bas à droite."
    ],
    "fact": "1825–1828. National Gallery of Art, Washington."
  },
  "jcterni": {
    "text": [
      "Une cascade blanche plonge entre des rochers verts couverts de végétation.",
      "Terni se trouve en Ombrie, au nord de Rome ; Corot peint cette étude à l’huile sur papier en 1826."
    ],
    "fact": "1826. Metropolitan Museum of Art, New York."
  },
  "jcalbano": {
    "text": [
      "Au-dessus d’un lac calme s’étire une crête verte où brillent les maisons de Castel Gandolfo.",
      "Le lac d’Albano se trouve dans les collines au sud-est de Rome ; Corot le peint à l’huile sur papier."
    ],
    "fact": "1826–1827. Metropolitan Museum of Art, New York."
  },
  "jccervara": {
    "text": [
      "Collines, rochers et petites silhouettes mènent en diagonales vers un vaste paysage près de Rome.",
      "Corot fonde cette grande peinture à l’huile sur des dessins et des esquisses d’Italie ; sa composition très construite rappelle Nicolas Poussin."
    ],
    "fact": "vers 1830–1831. Musée d’art de Cleveland."
  },
  "jchonfleur": {
    "text": [
      "Des arbres élancés se dressent sur une hauteur au-dessus de la mer, une grande croix s’élève entre eux et à son pied de petites silhouettes sont assises ou agenouillées.",
      "Honfleur est un port de la côte normande ; Corot peint ce tableau à l’huile sur bois."
    ],
    "fact": "vers 1830. Metropolitan Museum of Art, New York."
  },
  "jclemaistre": {
    "text": [
      "Un jeune homme en redingote sombre à col haut est assis sur une chaise et nous regarde gravement.",
      "Corot peint le portrait à l’huile sur toile en 1833 ; le modèle a vécu de 1807/1808 à 1888."
    ],
    "fact": "1833. Metropolitan Museum of Art, New York."
  },
  "jcmacon": {
    "text": [
      "Un long pont de pierre aux nombreuses arches franchit la Saône ; à gauche, des maisons claires dominent une rive sablonneuse.",
      "Mâcon se trouve en Bourgogne ; en bas à gauche, on lit au crayon « Corot Pingebat 1834 »."
    ],
    "fact": "1834. National Gallery of Art, Washington."
  },
  "jcgenoa": {
    "text": [
      "Derrière des pentes vertes s’étend la ville claire de Gênes, dominée par la mer bleue.",
      "En bas à droite, Corot écrit « Gènes 1834 », le nom français de la ville et l’année."
    ],
    "fact": "1834. Art Institute of Chicago."
  },
  "jcvolterra": {
    "text": [
      "Un chemin traverse un paysage ensoleillé et rocheux planté d’arbres, et une petite silhouette y chevauche.",
      "Corot expose le tableau au Salon de Paris de 1838 sous le titre « Vue prise à Volterra, Toscane » et le signe « COROT. / 1838 »."
    ],
    "fact": "1838. National Gallery of Art, Washington."
  },
  "jceel": {
    "text": [
      "Dans une forêt verte au bord d’un ruisseau, une femme agenouillée aide un petit enfant à marcher, une fillette apporte quelque chose dans son tablier et un garçon grimpe à un arbre.",
      "La lumière est douce et diffuse ; seules quelques taches claires dans le feuillage laissent deviner le soleil et le ciel."
    ],
    "fact": "1860–1865. National Gallery of Art, Washington."
  },
  "jccurious": {
    "text": [
      "Une fillette en robe et pèlerine sombres, debout sur une pierre, s’appuie à un mur de terre et regarde par-dessus avec curiosité.",
      "Corot peint la petite figure à l’huile sur carton et signe « COROT » en bas à droite."
    ],
    "fact": "1860–1864. Metropolitan Museum of Art, New York."
  },
  "jcagostina": {
    "text": [
      "Corot habille le modèle, sans doute une immigrée de la campagne romaine, d’un costume traditionnel et la place dans un paysage italien.",
      "Il peint ses épaules, ses yeux et son nez par de forts contrastes d’ombre et de lumière ; « Agostina » est la plus grande de ses figures."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "jcreadstudio": {
    "text": [
      "Une jeune femme en corsage blanc appuie la tête sur sa main et lit à une table ; derrière elle se trouvent des tableaux et un chevalet.",
      "Le tableau appartient plus tard à l’écrivain Alexandre Dumas et figure en 1875 à la grande exposition Corot à Paris."
    ],
    "fact": "vers 1868. National Gallery of Art, Washington."
  },
  "jcreading": {
    "text": [
      "Une femme aux manches bleues est assise dans un pré et lit un livre ; derrière elle, de l’eau miroite au loin.",
      "Corot travaille à ce tableau en 1869 et 1870, en réunissant figure et paysage."
    ],
    "fact": "1869–1870. Metropolitan Museum of Art, New York."
  },
  "jcinterrupted": {
    "text": [
      "Une femme en costume italien tient un livre sur ses genoux, appuie la tête sur sa main et lève les yeux de sa lecture.",
      "Corot la montre dans l’espace protégé de son atelier et peint le ruban dans ses cheveux, les boucles d’oreilles et les plis profonds de la jupe avec un plaisir visible du détail."
    ],
    "fact": "vers 1870. Art Institute of Chicago."
  },
  "jcsibylle": {
    "text": [
      "Une jeune femme au ruban dans les cheveux, en corsage blanc et corselet, est assise devant un fond sombre et nous regarde calmement.",
      "Comme beaucoup de figures tardives de Corot, elle montre un modèle vêtu à l’italienne ; elle appartient aujourd’hui à la collection Havemeyer du Metropolitan Museum."
    ],
    "fact": "vers 1870. Metropolitan Museum of Art, New York."
  },
  "jcwillows": {
    "text": [
      "À côté d’une ferme au toit rouge se dressent des saules noueux, au feuillage moucheté de lumière.",
      "Corot peint le tableau en 1871 lors de son séjour à Arras ; il montre le style qui lui vaut le succès auprès d’un large public."
    ],
    "fact": "1871. Musée d’art de Cleveland."
  },
  "jcarleux": {
    "text": [
      "De grands arbres légers encadrent un pré au bord de l’eau ; au loin se trouve un petit pont et, devant, on voit de petites silhouettes.",
      "Arleux et Palluel sont des villages du nord de la France, non loin d’Arras ; Corot signe « Corot » en bas à gauche."
    ],
    "fact": "1871–1872. Art Institute of Chicago."
  },
  "jccoubron": {
    "text": [
      "La lumière tombe, dorée, à travers le feuillage de grands arbres sur un chemin forestier où passe un cavalier sur un cheval blanc.",
      "Corot signe « COROT 1872 » ; dès 1873, le tableau est vendu aux enchères à Paris sous le titre « Entrée du bois Coubron, par une matinée de printemps »."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "jcstumpf": {
    "text": [
      "Une femme en robe bleue se promène dans un bois ensoleillé en tenant par la main sa petite fille vêtue de blanc.",
      "Corot offre le tableau à Monsieur F. Stumpf ; l’enfant est sa fille Madeleine."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "jcetretat": {
    "text": [
      "Une plage de sable clair s’étire au pied d’une pente verte jusqu’à la mer calme, sous un vaste ciel nuageux.",
      "Le petit tableau ne mesure qu’environ 12 sur 25 centimètres ; Étretat se trouve sur la côte normande."
    ],
    "fact": "vers 1872. National Gallery of Art, Washington."
  },
  "jcmorieri": {
    "text": [
      "Une femme au foulard jaune, au corsage blanc et au tablier brodé de rouge est assise, accoudée, devant un fond vert.",
      "Vers 1874, Corot confie le tableau au marchand d’art parisien Hector Brame."
    ],
    "fact": "vers 1872. National Gallery of Art, Washington."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
